// Regenerates the contributions table in README.md from public PRs authored by
// the profile owner on repositories they do not own. Usage: node scripts/update-contributions.mjs [--dry]
import { readFileSync, writeFileSync } from "node:fs";

const USER = process.env.GITHUB_REPOSITORY_OWNER || "davrens101";
const TOKEN = process.env.GITHUB_TOKEN;
const START = "<!--CONTRIBUTIONS:START-->";
const END = "<!--CONTRIBUTIONS:END-->";
const EMPTY = "_Pull requests will appear here automatically._";
const README = new URL("../README.md", import.meta.url);
const dry = process.argv.includes("--dry");

const headers = { Accept: "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28" };
if (TOKEN) headers.Authorization = `Bearer ${TOKEN}`;

const q = encodeURIComponent(`is:pr is:public author:${USER} -user:${USER}`);
const res = await fetch(`https://api.github.com/search/issues?q=${q}&sort=updated&order=desc&per_page=50`, { headers });
if (!res.ok) throw new Error(`GitHub search failed: ${res.status} ${await res.text()}`);
const { items } = await res.json();

const status = (pr) => (pr.pull_request?.merged_at ? "Merged" : pr.state === "open" ? (pr.draft ? "Draft" : "Open") : "Closed");
const rank = { Merged: 0, Open: 1, Draft: 2, Closed: 3 };
const esc = (s) => s.replace(/\|/g, "\\|").replace(/\r?\n/g, " ");
const rows = items
  .map((pr) => ({ pr, status: status(pr), repo: pr.repository_url.replace("https://api.github.com/repos/", "") }))
  .filter((r) => r.status !== "Closed")
  .sort((a, b) => rank[a.status] - rank[b.status] || b.pr.updated_at.localeCompare(a.pr.updated_at));

const table = rows.length
  ? [
      "| Project | Pull request | Status |",
      "| --- | --- | --- |",
      ...rows.map((r) => `| [${r.repo}](https://github.com/${r.repo}) | [${esc(r.pr.title)}](${r.pr.html_url}) | ${r.status} |`),
    ].join("\n")
  : EMPTY;

const text = readFileSync(README, "utf8");
const s = text.indexOf(START);
const e = text.indexOf(END);
if (s < 0 || e < s) throw new Error("README markers not found");
const next = `${text.slice(0, s + START.length)}\n${table}\n${text.slice(e)}`;
if (dry) console.log(table);
else if (next !== text) writeFileSync(README, next);
console.log(`${rows.length} pull request(s) listed`);

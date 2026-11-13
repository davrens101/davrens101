// Maintains the hand-picked PR showcase in selected-contributions.json.
// Edit that list to change the showcase; recent activity never adds rows.
// Usage: node scripts/update-contributions.mjs [--dry]
import { readFileSync, writeFileSync } from "node:fs";

const USER = process.env.GITHUB_REPOSITORY_OWNER || "davrens101";
const TOKEN = process.env.GITHUB_TOKEN;
const START = "<!--CONTRIBUTIONS:START-->";
const END = "<!--CONTRIBUTIONS:END-->";
const EMPTY = "_No selected pull requests are currently open or merged._";
const README = new URL("../README.md", import.meta.url);
const selected = JSON.parse(readFileSync(new URL("./selected-contributions.json", import.meta.url), "utf8"));
const dry = process.argv.includes("--dry");

const headers = { Accept: "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28" };
if (TOKEN) headers.Authorization = `Bearer ${TOKEN}`;

const rows = (await Promise.all(selected.map(async ({ repo, number, summary }) => {
  const res = await fetch(`https://api.github.com/repos/${repo}/pulls/${number}`, { headers });
  if (!res.ok) throw new Error(`GitHub PR lookup failed for ${repo}#${number}: ${res.status} ${await res.text()}`);
  const pr = await res.json();
  if (
    pr.user.login.toLowerCase() !== USER.toLowerCase() ||
    pr.base.repo.private ||
    pr.base.repo.owner.login.toLowerCase() === USER.toLowerCase() ||
    pr.base.repo.full_name.toLowerCase() !== repo.toLowerCase()
  ) throw new Error(`Selected PR must be authored by ${USER} on a public upstream repository: ${repo}#${number}`);
  return { pr, repo, summary };
}))).filter(({ pr }) => !pr.draft && (pr.merged_at || pr.state === "open"));

const esc = (s) => s.replace(/\|/g, "\\|").replace(/\r?\n/g, " ");

const table = rows.length
  ? [
      "| Project | Pull request |",
      "| --- | --- |",
      ...rows.map((r) => `| [${r.repo}](https://github.com/${r.repo}) | [${esc(r.summary)}](${r.pr.html_url}) |`),
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

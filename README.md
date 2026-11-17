<h1 align="center">Davis Rens</h1>

<p align="center">
  <strong>Machine learning · Scientific computing · Physical systems</strong>
</p>

<p align="center">
  <strong>Co-founder &amp; CSO, SuperMatics</strong><br>
  <sub>Previously Rigetti Computing &amp; Berkeley Lab · Berkeley, California</sub>
</p>

<p align="center">
  <a href="https://supermatics.io/">SuperMatics ↗</a> &nbsp;·&nbsp;
  <a href="https://www.linkedin.com/in/davisrens/">LinkedIn ↗</a> &nbsp;·&nbsp;
  <a href="#selected-pull-requests">Selected work ↓</a>
</p>

I'm a generalist drawn to the intersection of machine learning, scientific computing, and the physical world: **how models learn, where they fail, and how to turn their predictions into useful decisions.**

At SuperMatics, I work on accelerating superconductor R&D with quantum-mechanical simulation, machine learning, and real laboratory data.

## What I work on

<table>
  <tr>
    <td width="50%" valign="top">
      <h3>Learning &amp; generative models</h3>
      <p>Optimization, representations, and the numerical details that make training and inference behave as intended.</p>
    </td>
    <td width="50%" valign="top">
      <h3>Reliable AI systems</h3>
      <p>LLM serving, tool use, and evaluation. Correctness across streaming, batching, and persistent state.</p>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h3>AI for discovery</h3>
      <p>Simulation, uncertainty, and experimental data to decide what to measure, test, or build next.</p>
    </td>
    <td width="50%" valign="top">
      <h3>Computation meets physics</h3>
      <p>Superconducting materials, quantum hardware, and cryogenics. Computational models grounded in physical constraints.</p>
    </td>
  </tr>
</table>

## Selected pull requests

Merged contributions and open proposals across **AI/ML, generative media, and scientific computing**. Status is refreshed daily from GitHub; open does not imply accepted.

<!--CONTRIBUTIONS:START-->
| Project | Pull request | Status |
| --- | --- | --- |
| [**Orb Models**](https://github.com/orbital-materials/orb-models)<br><sub>Physical systems</sub> | [Avoid NaN stress gradients for zero-volume molecular cells](https://github.com/orbital-materials/orb-models/pull/181) | **Merged** |
| [**Vector Quantize PyTorch**](https://github.com/lucidrains/vector-quantize-pytorch)<br><sub>Machine learning</sub> | [Project decoded VQ codes along the feature axis for channel-first layouts](https://github.com/lucidrains/vector-quantize-pytorch/pull/278) | **Merged** |
| [**Titans PyTorch**](https://github.com/lucidrains/titans-pytorch)<br><sub>Machine learning</sub> | [Preserve neural-memory retrieval across partial chunk continuations](https://github.com/lucidrains/titans-pytorch/pull/68) | **Merged** |
| [**TorchGFN**](https://github.com/GFNOrg/torchgfn)<br><sub>Machine learning</sub> | [Fix backward probabilities and gradients for resumed trajectories](https://github.com/GFNOrg/torchgfn/pull/535) | **Merged** |
| [**scikit-rf**](https://github.com/scikit-rf/scikit-rf)<br><sub>Scientific computing</sub> | [Respect scattering-wave definitions in physical two-port conversions](https://github.com/scikit-rf/scikit-rf/pull/1470) | **Merged** |
| [**SGLang**](https://github.com/sgl-project/sglang)<br><sub>LLM serving</sub> | [Correct streaming of multiple DeepSeek V3.1 tool calls](https://github.com/sgl-project/sglang/pull/49107) | **Open** |
| [**PyTorch Geometric**](https://github.com/pyg-team/pytorch_geometric)<br><sub>Graph learning</sub> | [Prevent undirected negative sampling from returning edges already present in the graph](https://github.com/pyg-team/pytorch_geometric/pull/10886) | **Open** |
| [**PyTorch · TorchRL**](https://github.com/pytorch/rl)<br><sub>Reinforcement learning</sub> | [Restore CISPO policy gradients for clipped tokens to match the learning objective](https://github.com/pytorch/rl/pull/4665) | **Open** |
| [**PyTorch · torchvision**](https://github.com/pytorch/vision)<br><sub>Computer vision</sub> | [Make right-angle tensor rotations exact and fix expanded image dimensions](https://github.com/pytorch/vision/pull/9749) | **Open** |
| [**OpenAI · Whisper**](https://github.com/openai/whisper)<br><sub>Speech recognition</sub> | [Accept NumPy scalar temperatures without crashing speech transcription](https://github.com/openai/whisper/pull/2903) | **Open** |
| [**ComfyUI**](https://github.com/Comfy-Org/ComfyUI)<br><sub>Generative media</sub> | [Prevent NaN noise schedules in single-step KL-optimal sampling](https://github.com/Comfy-Org/ComfyUI/pull/17665) | **Open** |
<!--CONTRIBUTIONS:END-->

<details>
<summary><strong>How I contribute · engineering approach &amp; AI disclosure</strong></summary>

1. Pick issues a maintainer has signaled are ready to accept, and check nobody else is on them.
2. Reproduce first: add a test that fails without the fix, then make the smallest change that passes it.
3. Show before-and-after evidence, run the project's own checks, and report honestly which ones fail and why.
4. AI coding tools assist with research, implementation, tests, and drafting. AI assistance and verification limits are disclosed in individual pull requests; human review is not implied.

</details>

# Davis Rens

Co-founder and Chief Scientific Officer at [SuperMatics](https://supermatics.io/), accelerating superconductor R&D with quantum-mechanical simulation, machine learning and real laboratory data. Previously at Rigetti Computing and Berkeley Lab. Based in Berkeley, California.

[LinkedIn](https://www.linkedin.com/in/davisrens/) · [SuperMatics](https://supermatics.io/)

## What I work on

I'm a generalist drawn to problems at the intersection of machine learning, scientific computing, and the physical world: how models learn, where they fail, and how to turn their predictions into useful decisions.

- **Learning and generative models**: optimization, representations, and the numerical details that make training and inference behave as intended.
- **Reliable AI systems**: LLM serving, tool use, and evaluation, with a focus on correctness across streaming, batching, and persistent state.
- **AI for discovery**: combining simulation, uncertainty, and experimental data to decide what to measure, test, or build next.
- **Computation meets physics**: superconducting materials, quantum hardware, and cryogenics, where computational models have to respect physical constraints.

## Selected pull requests

Selected correctness and reliability work across AI/ML, generative media, and scientific computing.

<!--CONTRIBUTIONS:START-->
| Project | Pull request |
| --- | --- |
| [sgl-project/sglang](https://github.com/sgl-project/sglang) | [Correct streaming of multiple DeepSeek V3.1 tool calls](https://github.com/sgl-project/sglang/pull/49107) |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | [Preserve response text preceding reasoning blocks instead of silently dropping it](https://github.com/vllm-project/vllm/pull/66333) |
| [pyg-team/pytorch_geometric](https://github.com/pyg-team/pytorch_geometric) | [Prevent undirected negative sampling from returning edges already present in the graph](https://github.com/pyg-team/pytorch_geometric/pull/10886) |
| [huggingface/lerobot](https://github.com/huggingface/lerobot) | [Prevent FP16 normalization NaNs caused by epsilon underflow on constant coordinates](https://github.com/huggingface/lerobot/pull/5273) |
| [dmlc/xgboost](https://github.com/dmlc/xgboost) | [Reset early-stopping state between training runs when a callback is reused](https://github.com/dmlc/xgboost/pull/12831) |
| [pytorch/rl](https://github.com/pytorch/rl) | [Restore CISPO policy gradients for clipped tokens to match the learning objective](https://github.com/pytorch/rl/pull/4665) |
| [pytorch/vision](https://github.com/pytorch/vision) | [Make right-angle tensor rotations exact and fix expanded image dimensions](https://github.com/pytorch/vision/pull/9749) |
| [openai/whisper](https://github.com/openai/whisper) | [Accept NumPy scalar temperatures without crashing speech transcription](https://github.com/openai/whisper/pull/2903) |
| [Comfy-Org/ComfyUI](https://github.com/Comfy-Org/ComfyUI) | [Prevent NaN noise schedules in single-step KL-optimal sampling](https://github.com/Comfy-Org/ComfyUI/pull/17665) |
<!--CONTRIBUTIONS:END-->

## How I contribute

1. Start from issues a maintainer has already accepted, and check nobody else is on them.
2. Reproduce first. Add a test that fails without the fix, then make the smallest change that passes it.
3. Show before and after evidence, run the project's own checks, and report honestly which ones fail and why.
4. I use AI coding tools for research and drafting. I review every change myself and disclose AI assistance in each pull request, following each project's policy.

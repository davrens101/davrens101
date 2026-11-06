# Davis Rens

Co-founder and Chief Scientific Officer at [SuperMatics](https://supermatics.io/), accelerating superconductor R&D with quantum-mechanical simulation, machine learning and real laboratory data. Berkeley, California.

[LinkedIn](https://www.linkedin.com/in/davisrens/) · [SuperMatics](https://supermatics.io/)

## What I work on

- **Superconductor materials R&D**: choosing materials and synthesis experiments with simulation, ML and measured data.
- **Quantum hardware and cryogenics**: dilution-refrigerator systems, heat budgets and thermal models for superconducting processors (previously at Rigetti Computing).
- **Scientific software**: Python, Rust and PyTorch for experimental data analysis and anomaly detection (previously at Berkeley Lab).

## Open-source contributions

Small, reproducible fixes to the scientific tools I depend on: scientific plotting, numerical and dataframe libraries, and materials and simulation tooling. This table is regenerated daily from my public pull requests on other people's repositories.

<!--CONTRIBUTIONS:START-->
| Project | Pull request | Status |
| --- | --- | --- |
| [facebookresearch/fairchem](https://github.com/facebookresearch/fairchem) | [Preserve autograd graphs for UMA Hessian inference and training](https://github.com/facebookresearch/fairchem/pull/2272) | Merged |
| [lucidrains/vector-quantize-pytorch](https://github.com/lucidrains/vector-quantize-pytorch) | [Project decoded VQ codes along the feature axis for channel-first layouts](https://github.com/lucidrains/vector-quantize-pytorch/pull/278) | Merged |
| [meta-pytorch/data](https://github.com/meta-pytorch/data) | [Preserve loader counters when fast-forwarding stateless iterable datasets](https://github.com/meta-pytorch/data/pull/1571) | Open |
| [e3nn/e3nn](https://github.com/e3nn/e3nn) | [fix(o3): return Irrep from _MulIr conversion and fix Irreps.filter with strings/Irreps](https://github.com/e3nn/e3nn/pull/539) | Open |
| [Lightning-AI/torchmetrics](https://github.com/Lightning-AI/torchmetrics) | [Fix Pearson/concordance NaN for long sparse nonconstant signals](https://github.com/Lightning-AI/torchmetrics/pull/3618) | Open |
| [meta-pytorch/captum](https://github.com/meta-pytorch/captum) | [Fix sensitivity_max with mixed scalar and per-example baselines](https://github.com/meta-pytorch/captum/pull/1955) | Open |
| [meta-pytorch/torchrec](https://github.com/meta-pytorch/torchrec) | [fix(optim): KeyedOptimizer.init_state() must not advance Adam step counter](https://github.com/meta-pytorch/torchrec/pull/5023) | Open |
| [pytorch/ao](https://github.com/pytorch/ao) | [fix(pt2e): do not double-fold conv output into multiple batch norms](https://github.com/pytorch/ao/pull/5073) | Open |
| [huggingface/optimum](https://github.com/huggingface/optimum) | [fix(fx): FuseBiasInLinear must preserve input dtype for float16/bfloat16](https://github.com/huggingface/optimum/pull/2548) | Open |
| [Lightning-AI/torchmetrics](https://github.com/Lightning-AI/torchmetrics) | [Fix FeatureShare clone/deepcopy keeping the original network bound](https://github.com/Lightning-AI/torchmetrics/pull/3617) | Open |
| [huggingface/diffusers](https://github.com/huggingface/diffusers) | [fix(schedulers): LMS multistep order must ramp from 1 after set_begin_index](https://github.com/huggingface/diffusers/pull/15196) | Open |
| [huggingface/lerobot](https://github.com/huggingface/lerobot) | [fix(normalizer): floor epsilon at dtype tiny to avoid FP16 NaN on constant coordinates](https://github.com/huggingface/lerobot/pull/5273) | Open |
| [orbital-materials/orb-models](https://github.com/orbital-materials/orb-models) | [Avoid NaN stress gradients for zero-volume molecular cells](https://github.com/orbital-materials/orb-models/pull/181) | Open |
| [lucidrains/x-transformers](https://github.com/lucidrains/x-transformers) | [Keep prefix masks and contrastive caches aligned with cropped context](https://github.com/lucidrains/x-transformers/pull/413) | Open |
| [Z2PackDev/TBmodels](https://github.com/Z2PackDev/TBmodels) | [Tolerate determinant roundoff for unimodular unit cells](https://github.com/Z2PackDev/TBmodels/pull/245) | Open |
| [Z2PackDev/TBmodels](https://github.com/Z2PackDev/TBmodels) | [Use dimension-aware default origins for model transformations](https://github.com/Z2PackDev/TBmodels/pull/244) | Open |
| [pytorch/rl](https://github.com/pytorch/rl) | [[BugFix] Preserve distributional DQN projection dtype](https://github.com/pytorch/rl/pull/4697) | Open |
| [safetensors/safetensors](https://github.com/safetensors/safetensors) | [Fix save_model crash on shared strided tensors](https://github.com/safetensors/safetensors/pull/913) | Open |
| [huggingface/diffusers](https://github.com/huggingface/diffusers) | [Fix is_causal being ignored by the FLEX attention backend](https://github.com/huggingface/diffusers/pull/15188) | Open |
| [EleutherAI/lm-evaluation-harness](https://github.com/EleutherAI/lm-evaluation-harness) | [hash_args: ignore dict insertion order in cache keys](https://github.com/EleutherAI/lm-evaluation-harness/pull/4536) | Open |
| [huggingface/diffusers](https://github.com/huggingface/diffusers) | [Keep DreamLite's GQA-aware attention processor when attention slicing is disabled](https://github.com/huggingface/diffusers/pull/15191) | Open |
| [lucidrains/h-net-dynamic-chunking](https://github.com/lucidrains/h-net-dynamic-chunking) | [Add missing ratio_loss module (fixes ImportError on main)](https://github.com/lucidrains/h-net-dynamic-chunking/pull/3) | Open |
| [Comfy-Org/ComfyUI](https://github.com/Comfy-Org/ComfyUI) | [Fix GET /userdata creating directories for nonexistent paths](https://github.com/Comfy-Org/ComfyUI/pull/17576) | Open |
| [lucidrains/x-clip](https://github.com/lucidrains/x-clip) | [Fix rotary position embeddings length for causal (CLS-free) text encoder](https://github.com/lucidrains/x-clip/pull/19) | Open |
| [sgl-project/sglang](https://github.com/sgl-project/sglang) | [[Fix] modelslim: don't mutate the caller's quantization config](https://github.com/sgl-project/sglang/pull/48643) | Open |
| [google/flax](https://github.com/google/flax) | [fix(nnx): SpectralNorm/WeightNorm no longer persist normalized weights into params](https://github.com/google/flax/pull/5642) | Open |
| [phonopy/phonopy](https://github.com/phonopy/phonopy) | [Include Wang NAC derivatives in the dynamical-matrix Hessian](https://github.com/phonopy/phonopy/pull/1080) | Open |
| [ollama/ollama-python](https://github.com/ollama/ollama-python) | [fix(client): preserve empty message content when copying messages](https://github.com/ollama/ollama-python/pull/791) | Open |
| [meta-pytorch/botorch](https://github.com/meta-pytorch/botorch) | [Keep stratified normalization finite for locally unobserved tasks](https://github.com/meta-pytorch/botorch/pull/3548) | Open |
| [GFNOrg/torchgfn](https://github.com/GFNOrg/torchgfn) | [Pad extended backward trajectories with initial states](https://github.com/GFNOrg/torchgfn/pull/537) | Open |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | [fix(core): delete removed docs when content hashes collide in UPSERTS_AND_DELETE](https://github.com/run-llama/llama_index/pull/23964) | Open |
| [huggingface/lerobot](https://github.com/huggingface/lerobot) | [Do not re-zero the OpenArm leader on connect](https://github.com/huggingface/lerobot/pull/5260) | Open |
| [huggingface/lerobot](https://github.com/huggingface/lerobot) | [Restore cfg.pretrained_path when make_policy fails](https://github.com/huggingface/lerobot/pull/5259) | Open |
| [meta-pytorch/gpt-fast](https://github.com/meta-pytorch/gpt-fast) | [fix(generate): handle max_new_tokens=1 without torch.cat on empty list](https://github.com/meta-pytorch/gpt-fast/pull/239) | Open |
| [meta-pytorch/torchtune](https://github.com/meta-pytorch/torchtune) | [fix(checkpointing): DistributedCheckpointer accepts model_type](https://github.com/meta-pytorch/torchtune/pull/3012) | Open |
| [Lightning-AI/litgpt](https://github.com/Lightning-AI/litgpt) | [fix(get_lr): avoid division by zero when warmup_iters >= max_iters](https://github.com/Lightning-AI/litgpt/pull/2391) | Open |
| [Lightning-AI/litgpt](https://github.com/Lightning-AI/litgpt) | [Return point-mass probabilities for greedy speculative decoding](https://github.com/Lightning-AI/litgpt/pull/2386) | Open |
| [cornellius-gp/gpytorch](https://github.com/cornellius-gp/gpytorch) | [Preserve correlated task noise in approximate likelihoods](https://github.com/cornellius-gp/gpytorch/pull/2843) | Open |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | [fix(loader): read cloud directory listings by name, not s3-style Key](https://github.com/hiyouga/LlamaFactory/pull/10938) | Open |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | [fix(converter): don't fail on OpenAI tool-call-only assistant messages](https://github.com/hiyouga/LlamaFactory/pull/10937) | Open |
<!--CONTRIBUTIONS:END-->

## How I contribute

1. Start from issues a maintainer has already accepted, and check nobody else is on them.
2. Reproduce first. Add a test that fails without the fix, then make the smallest change that passes it.
3. Show before and after evidence, run the project's own checks, and report honestly which ones fail and why.
4. I use AI coding tools for research and drafting. I review every change myself and disclose AI assistance in each pull request, following each project's policy.

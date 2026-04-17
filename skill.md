# Skill 分类总结

> 说明：当前环境无法直接读取你提供的 X 链接正文，本总结基于你会话里给出的 3 个可用 skill 信息整理。

## 一、按用途分类

### 1) OpenAI 开发与文档查询类
- `openai-docs`
- 核心定位：用于 OpenAI 产品/API 的官方文档检索、最新模型选择、GPT-5.4 升级与 prompt 升级指导。
- 适用场景：需要“最新、可引用、官方来源”的 OpenAI 技术方案时。

### 2) Skill 设计与生产类
- `skill-creator`
- 核心定位：用于创建或更新 skill，本质是“能力设计与规范化”。
- 适用场景：需要把经验流程沉淀为可复用能力（知识、步骤、模板、工具集成）时。

### 3) Skill 安装与分发类
- `skill-installer`
- 核心定位：将 skill 安装到 `$CODEX_HOME/skills`，支持精选清单或 GitHub 仓库来源。
- 适用场景：需要快速引入外部 skill（含私有仓库）并落地到本地环境时。

## 二、按生命周期分类

- 规划/设计阶段：`skill-creator`
- 引入/部署阶段：`skill-installer`
- 使用/查询阶段：`openai-docs`

## 三、组合使用建议

- 从 0 到 1：先用 `skill-creator` 定义能力，再用 `skill-installer` 安装发布。
- 面向 OpenAI 开发：优先用 `openai-docs` 获取官方依据，再把稳定流程沉淀到 `skill-creator` 产出的新 skill 中。


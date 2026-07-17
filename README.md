# Offline Claude-Style AI Agent for Obsidian Mobile

This repository contains a pragmatic architecture and implementation blueprint for a free, privacy-first, offline AI agent that runs inside the Obsidian Mobile plugin ecosystem on Android.

The design accepts an important reality: no phone-sized open model will truly match Claude's frontier reasoning, breadth, instruction following, or very long-context quality. The closest feasible offline substitute is a small quantized local LLM, strong retrieval over the vault, durable memory, careful prompt/context construction, and conservative agent tooling.

## Goals

- No paid APIs, no API keys, no cloud uploads.
- Android-first Obsidian Mobile compatibility.
- Open-source and free local-first stack.
- Modular LLM backends so the plugin can use an in-app native bridge, a companion local app, or a localhost engine where available.
- Claude-inspired UX: chat, memory, vault awareness, note operations, task planning, writing help, code help, and multi-step workflows.

## Documentation

- [Architecture and research blueprint](docs/offline-obsidian-agent-architecture.md)
- [TypeScript interfaces](src/types.ts)
- [Production readiness review](docs/production-readiness-review.md)

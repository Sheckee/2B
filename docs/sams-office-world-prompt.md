# SAMS Office World Prompt — Pixel Office Edition

## Purpose

SAMS Office is a real-time visualization layer for the SAMS agent's actual cognitive and execution state. It is not a game, mascot layer, or decorative animation system. Every visible object, animation, highlight, and state transition must correspond to real agent activity that has actually occurred.

The central product principle is truthfulness: the office exists to make invisible AI work understandable without implying fake progress, fake tool use, fake memory access, or fake reasoning.

## Identity

The agent exists inside a virtual workspace called **SAMS Office**.

The office represents actual subsystems of the agent architecture:

- Intent analysis
- Goal management
- Context allocation
- Planning
- Retrieval
- Memory
- Tool execution
- Local model activity
- Voice input/output
- Reflection and verification

The visualization must always reflect real system state. Do not animate an action unless the corresponding subsystem action happened.

## Design Philosophy

- Every animation corresponds to real work.
- No fake progress.
- No fake thinking.
- No decorative animations that imply work is happening when it is not.
- Transparency is more important than aesthetics.
- The user should be able to understand what SAMS is doing by watching the office.

## Office Layout and Subsystem Mapping

### Executive Desk

Represents:

- Intent analysis
- Goal management
- Context allocation
- Final decisions

When the Executive Agent is active:

- SAMS sits at the desk.
- Documents appear on the desk.
- The desk lamp turns on.

### Library

Represents:

- Vault search
- RAG
- Knowledge retrieval
- Metadata
- Wikilinks
- Graph search

When retrieving knowledge:

- SAMS walks to the library.
- Only documents actually searched or retrieved may glow.
- Retrieved documents remain highlighted while they are in active context.

Rules:

- Never animate random books.
- Never highlight documents that were not actually retrieved.

### Memory Archive

Represents:

- Working memory
- Session memory
- Long-term memory
- Semantic memory
- Episodic memory

When retrieving memories:

- Filing cabinets open.
- Memory folders appear.
- Retrieved memories glow briefly.

When storing memories:

- A new folder is filed.
- Old memories may be archived only if an archive operation actually occurred.

Rules:

- Never invent memories.
- Never show memory retrieval unless records were actually accessed.

### Planning Room

Represents:

- Task decomposition
- Roadmaps
- Goal tracking
- Scheduling

When planning:

- SAMS stands at the whiteboard.
- Sticky notes appear for real plan items.
- Tasks move between columns only when their actual status changes.
- Completed tasks are visibly checked.

### Workshop

Represents:

- Tool execution
- File operations
- Automation

Before executing tools, display:

- Tool name
- Risk level
- Permission status

Only after approval or confirmed permission may execution begin.

During execution:

- Workbench lights activate.

Rules:

- Never show tool execution before permission is resolved.
- Never hide tool risk.

### Server Room

Represents:

- Local LLM activity
- Model loading
- Embeddings
- ObjectBox
- Indexing

Model loading:

- Server LEDs illuminate gradually.

Indexing:

- Storage drives blink.

Embedding generation:

- GPU rack glows.

Rules:

- Do not animate servers if they are idle.
- Do not show embedding activity unless embeddings are actually being generated.

### Voice Studio

Represents:

- Microphone input
- Speech recognition
- Text-to-speech

Listening:

- Microphone indicator pulses.

Speaking:

- Speaker waveform animates.

Rules:

- Do not show microphone activity without active listening.
- Do not show speech output without active audio synthesis or playback.

### Reflection Room

Represents:

- Self review
- Verification
- Confidence estimation

When reviewing:

- SAMS stands before a wall of notes.
- Potential issues are highlighted.
- Confidence score is updated when a confidence estimate exists.

## Ambient Environment

The office reflects real conditions:

- Morning: warm sunlight.
- Night: desk lamp.
- Heavy workload: extra papers.
- Long indexing: server room active.
- Idle: relaxed breathing animation.
- Reading: page-turning only when reading actual retrieved or opened material.

Rules:

- Never fake activity.
- Ambient state must not imply subsystem work that is not happening.

## Avatar Behavior

SAMS is:

- Calm
- Professional
- Focused

Motion style:

- Small, meaningful movements only.
- No exaggerated reactions.
- No frantic or cartoon behavior.

## Interaction Rules

Furniture opens real functionality:

| Office Object | Functionality |
| --- | --- |
| Desk | Chat |
| Library | Vault Search |
| Archive | Memory Browser |
| Whiteboard | Planner |
| Workshop | Tools |
| Server Room | Model Manager |
| Voice Studio | Voice Settings |
| Reflection Room | Review Log |

Rules:

- Nothing is decorative.
- Every interactive object must have a purpose.
- If functionality is not implemented, the object must show an honest unavailable or not implemented state.

## Transparency Rules

If SAMS is thinking, show why.

If retrieving, show which notes.

If using memory, show which memory.

If executing, show which tool.

If uncertain, display confidence.

Never simulate actions that did not occur.

## Trust Principle

The office is a visualization of truth.

Every light, movement, animation, and object must correspond to actual internal system activity.

The office exists to build trust, not entertainment.

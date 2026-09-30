# Graph Report - rz-11-website  (2026-09-30)

## Corpus Check
- Corpus is ~2,009 words - fits in a single context window. You may not need a graph.

## Summary
- 46 nodes · 43 edges · 8 communities (7 shown, 1 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Next.js Agent Guidance
- Runtime Dependencies
- Application Shell
- Interactive Homepage
- RZ-11 Brand Identity
- Module Resolution
- Project Commands
- Project Overview

## God Nodes (most connected - your core abstractions)
1. `scripts` - 4 edges
2. `RZ-11 Consultancy Logo` - 4 edges
3. `compilerOptions` - 3 edges
4. `next` - 3 edges
5. `Repository Agent Instructions` - 3 edges
6. `Next.js Breaking Changes` - 3 edges
7. `Next Dev Regenerates Agent Rules` - 3 edges
8. `Arrow()` - 2 edges
9. `Home()` - 2 edges
10. `react` - 2 edges

## Surprising Connections (you probably didn't know these)
- `Claude Agent Instructions Reference` --references--> `Repository Agent Instructions`  [EXTRACTED]
  CLAUDE.md → AGENTS.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Next.js Agent Rule Maintenance** — agents_agent_instructions, agents_next_dev_regeneration, agents_generate_agent_files_script, agents_commit_generated_rules [EXTRACTED 1.00]
- **RZ-11 Brand Identity** — public_rz_11_logo_geometric_emblem, public_rz_11_logo_rz11_wordmark, public_rz_11_logo_consultancy_tagline, public_rz_11_logo_blue_visual_identity [EXTRACTED 1.00]

## Communities (8 total, 1 thin omitted)

### Community 0 - "Next.js Agent Guidance"
Cohesion: 0.22
Nodes (5): Repository Agent Instructions, Next.js Generate Agent Files Script, Next.js Breaking Changes, Next.js Local Documentation Directory, Claude Agent Instructions Reference

### Community 1 - "Runtime Dependencies"
Cohesion: 0.22
Nodes (8): dependencies, next, react, react-dom, name, private, version, react-dom

### Community 2 - "Application Shell"
Cohesion: 0.29
Nodes (4): manrope, metadata, spaceGrotesk, next

### Community 3 - "Interactive Homepage"
Cohesion: 0.33
Nodes (6): Arrow(), Home(), products, services, solutions, react

### Community 4 - "RZ-11 Brand Identity"
Cohesion: 0.40
Nodes (5): Blue Visual Identity, Consultancy Tagline, Three-Part Geometric Emblem, RZ-11 Consultancy Logo, RZ-11 Wordmark

### Community 5 - "Module Resolution"
Cohesion: 0.50
Nodes (3): compilerOptions, baseUrl, paths

### Community 6 - "Project Commands"
Cohesion: 0.50
Nodes (4): scripts, build, dev, start

## Knowledge Gaps
- **26 isolated node(s):** `manrope`, `spaceGrotesk`, `metadata`, `solutions`, `services` (+21 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 31 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `Application Shell` to `Runtime Dependencies`, `Interactive Homepage`?**
  _High betweenness centrality (0.161) - this node is a cross-community bridge._
- **Why does `scripts` connect `Project Commands` to `Runtime Dependencies`?**
  _High betweenness centrality (0.073) - this node is a cross-community bridge._
- **What connects `manrope`, `spaceGrotesk`, `metadata` to the rest of the system?**
  _26 weakly-connected nodes found - possible documentation gaps or missing edges._
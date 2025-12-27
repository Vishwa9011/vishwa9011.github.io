# macOS Portfolio

A macOS-inspired portfolio web application with a windowed desktop UI and a small set of built-in “apps”.

## Overview

This repository is a personal portfolio presented as a lightweight, macOS-like interface. Content is organized into windows (Finder-style projects, Safari-style articles, a terminal-style overview, and a resume viewer) with a focus on calm visuals, subtle motion, and predictable interaction patterns.

## Tech Stack

- **Frontend:** React, TypeScript, Vite
- **Styling/UI:** Tailwind CSS (v4), CSS variables (OKLCH), shadcn/ui + Radix UI, lucide-react
- **State:** Zustand (with `immer` middleware)
- **Animation:** GSAP (`@gsap/react`, `Draggable`)
- **Utilities:** react-pdf, dayjs, react-tooltip

## Key Features

- Desktop-style windows with open/close state, focus, and z-index management
- Drag-and-drop window positioning using GSAP Draggable
- Dock interaction with pointer-based icon magnification
- Theme switching (light/dark/system) implemented via class-based theming and semantic tokens
- Finder-like navigation driven by a typed location tree (folders/files) for portfolio content
- Built-in PDF resume viewer with an optional download action
- Mobile layout that renders windows as full-screen overlays when appropriate

## Project Structure (High Level)

- `src/app.tsx`: Top-level layout (navbar, dock, and window mounting)
- `src/windows/`: Window “apps” (Finder, Safari, Terminal, Resume, etc.)
- `src/hoc/`: Window wrappers (desktop draggable windows and mobile overlays)
- `src/store/`: Zustand stores (window management, locations, UI responsiveness)
- `src/constants/`: Content and configuration (dock apps, locations, links)
- `public/`: Static assets (icons/images) and `public/files/resume.pdf`

## Running Locally

```bash
npm install
npm run dev
```

Production build and preview:

```bash
npm run build
npm run preview
```

Optional checks:

```bash
npm run lint
npm run format:check
```

## Design Philosophy

- **macOS-inspired interaction model:** windows, dock behavior, and familiar layout cues without over-automation
- **Token-driven theming:** semantic color tokens mapped into Tailwind utilities to keep styling consistent across components
- **Subtle motion:** small, focused animations to reinforce intent (focus, hover, open/close) rather than dominate the UI
- **Content as data:** portfolio entries and navigation are defined as structured data to keep rendering logic simple and predictable

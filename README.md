# MacOS Portfolio

An interactive, macOS-inspired portfolio built with React + Vite. The UI mimics a desktop: a menu bar, dock, draggable windows, and Finder-like folders that surface projects, skills, blogs, and contact info. Animations (GSAP) and theming (next-themes) keep it playful while the content is driven by config so it’s easy to extend.

What this project does

- Renders multiple desktop “apps” as windows (`Finder`, `Safari`, `Photos`, `Terminal`, `Contact`, `Resume`, plus dynamic text/image viewers).
- Dock toggles windows on/off with tooltips; Navbar links open relevant windows.
- Finder shows a folder/file hierarchy for projects and about/resume assets; clicking files opens the right viewer or external links.
- Blog window lists curated posts; Terminal lists tech stack; Photos shows galleries; Resume and Contact have dedicated views.
- Theme switcher (light/dark/system) powered by `next-themes`; animations and drag are powered by GSAP (`Draggable`).

Tech stack

- React 19 + TypeScript, Vite
- State: Zustand + Immer
- Styling: Tailwind CSS v4 + custom utilities in `src/index.css`
- Animation: GSAP (`@gsap/react`, `Draggable`)
- Theming: `next-themes`
- Icons: Lucide, custom SVGs; tooltips via `react-tooltip`

Key architecture

- Entrypoint: `src/main.tsx` renders `App` inside `ThemeProvider`.
- Layout: `src/App.tsx` mounts the Navbar, Welcome hero, Dock, then all window components (visibility/z-index controlled by store).
- State stores:
    - `src/store/window.ts`: tracks each window’s `isOpen`, `zIndex`, and optional data; provides `openWindow/closeWindow/focusWindow`.
    - `src/store/location.ts`: tracks the active Finder location (work/about/resume/trash) with helpers to set/reset.
- Window orchestration: `src/hoc/WindowWrapper.tsx` wraps every window component to handle show/hide, mount animations, and drag/focus behavior.
- UI building blocks:
    - `src/components/shared/Navbar.tsx`: menu bar, nav links -> `openWindow`, live clock.
    - `src/components/shared/Dock.tsx`: dock icons from constants; toggles windows with GSAP hover magnify.
    - `src/components/shared/Welcome.tsx`: animated hero lettering with GSAP hover weight changes.
    - `src/components/shared/ThemeDropdown.tsx`: Radix dropdown bound to `next-themes`.
    - `src/components/shared/WindowControls.tsx`: macOS-style close/minimize/maximize (close wired to store).
- Data/config:
    - `src/constants/index.ts`: nav items, dock apps, blog posts, tech stack, socials, photos links, gallery images, Finder locations (projects/about/resume/trash), and window defaults (`WINDOW_CONFIG`, `INITIAL_Z_INDEX`).
    - `src/constants/theme.ts`: allowed theme options + labels/icons.
    - `src/types/index.ts`: window/location keys and shapes for files/folders used across the app.

Folder layout (high level)

```
src/
  App.tsx
  index.css           # Tailwind v4 + custom styles/utilities
  components/         # shared UI + Radix dropdown wrapper
  constants/          # content/config for UI + window defaults + themes
  hoc/WindowWrapper.tsx
  lib/utils/          # cn() Tailwind merge helper
  store/              # Zustand stores for windows and Finder location
  windows/            # Each desktop app window (Finder, Safari, Terminal, etc.)
  types/              # shared TS types for windows/locations
```

How windows work

- Each window component is exported wrapped via `WindowWrapper(Component, windowKey)`.
- Visibility/z-index come from `useWindowStore`; Dock/Nav call `openWindow(windowKey)` to show them.
- Finder dispatches `openWindow` based on file type:
    - `pdf` -> `resume` window, `img` -> `imgfile`, `txt` -> `txtfile`, `url/fig` -> opens external link.
- Windows can read the `data` field set by `openWindow` (e.g., Text/Image viewers read the clicked Finder file).

Running locally

1. Install Node (18+ recommended), then `npm install`.
2. `npm run dev` to start Vite.
3. Optional: `npm run lint` for ESLint, `npm run build` for production output, `npm run preview` to serve the build.

Easy extension points (for future feature ideas)

- Add a new window/app:
    1. Add a key to `WINDOW_KEYS` and `WINDOW_CONFIG` in `src/types/index.ts` and `src/constants/index.ts`.
    2. Create a component in `src/windows/`, wrap with `WindowWrapper(Component, 'yourKey')`.
    3. Add a dock item in `dockApps` (and/or a Navbar link) that calls `openWindow('yourKey')`.
- Add projects/content to Finder: extend `locations.work.children` (folders/files) in `src/constants/index.ts`; text/image viewers will auto-render the data you pass.
- Update blog posts, tech stack, socials, gallery, or theme options by editing the respective arrays in `src/constants`.
- Adjust styling/global utilities in `src/index.css` (Tailwind v4 layer blocks for base/components/utilities).

Context to give an AI for feature ideation

- Goal: macOS desktop metaphor for a personal portfolio with multiple app-like windows.
- Core abstractions: windows keyed by `WindowKey`, managed via Zustand; Finder content-driven via `locations`; UI chrome via Navbar + Dock; theming via `next-themes`; animations via GSAP.
- Constraints: desktop-first layout; Tailwind v4 utilities in `src/index.css`; content/config centralized in `src/constants`.
- Desired direction: add more interactive/macOS-like utilities (Spotlight search, Control Center widgets, notifications), richer project detail views, and more dynamic data sources while keeping everything pluggable through config + Zustand.

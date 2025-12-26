import { c as M, r as C, u as T, l as H, j as l, e as W } from './index-DpLs9J7t.js';
import { M as S, a as E } from './mobile-window-header-BgefJ9BZ.js';
import { w as R } from './window-key-Cjye9NgF.js';
import { C as v } from './chevron-right-D2W9Sk_G.js';
import './chevron-left-DgpI3LmR.js';
const z = () => {
        const e = M.c(26),
            [f, d] = C.useState(null);
        let p;
        e[0] === Symbol.for('react.memo_cache_sentinel') ? ((p = []), (e[0] = p)) : (p = e[0]);
        const [n, u] = C.useState(p),
            { closeWindow: b, openWindow: m } = T();
        let x;
        e[1] !== m
            ? ((x = t => {
                  if (t.kind === 'folder') {
                      (d(t), u(F => [...F, t]));
                      return;
                  }
                  if (t.kind !== 'file') return;
                  if (t.fileType === 'pdf') {
                      m('resume');
                      return;
                  }
                  if (t.fileType === 'fig' || t.fileType === 'url') {
                      t.href && window.open(t.href, '_blank', 'noopener,noreferrer');
                      return;
                  }
                  const s = R(t.fileType);
                  s && m(s, t);
              }),
              (e[1] = m),
              (e[2] = x))
            : (x = e[2]);
        const c = x;
        let h;
        e[3] !== f ? ((h = f ? f.children : Object.values(H)), (e[3] = f), (e[4] = h)) : (h = e[4]);
        const k = h;
        let g;
        e[5] !== b || e[6] !== n
            ? ((g = () => {
                  const t = [...n];
                  if (t.length === 0) {
                      b('finder');
                      return;
                  } else {
                      (t.pop(), d(t[t.length - 1] || null), u(t));
                      return;
                  }
              }),
              (e[5] = b),
              (e[6] = n),
              (e[7] = g))
            : (g = e[7]);
        const N = g;
        let w;
        e[8] !== n
            ? ((w = t => {
                  if (t === null) {
                      (d(null), u([]));
                      return;
                  }
                  const s = n.slice(0, t + 1);
                  (d(s[s.length - 1] || null), u(s));
              }),
              (e[8] = n),
              (e[9] = w))
            : (w = e[9]);
        const j = w;
        let r;
        e[10] !== N ? ((r = l.jsx(E, { title: 'Finder', onClose: () => N() })), (e[10] = N), (e[11] = r)) : (r = e[11]);
        let o;
        e[12] !== j || e[13] !== n
            ? ((o =
                  n.length > 0 &&
                  l.jsxs('div', {
                      className: 'bg-background flex items-center gap-2 p-5 text-sm',
                      children: [
                          l.jsxs('button', {
                              type: 'button',
                              className: 'flex cursor-pointer items-center gap-2',
                              onClick: () => j(null),
                              children: [
                                  l.jsx('span', { className: 'text-link text-sm', children: 'Portfolio' }),
                                  l.jsx(v, { className: 'text-muted-foreground size-4' }),
                              ],
                          }),
                          n.map((t, s) =>
                              l.jsxs(
                                  'button',
                                  {
                                      type: 'button',
                                      className: 'flex cursor-pointer items-center gap-2',
                                      onClick: () => j(s),
                                      children: [
                                          l.jsx('span', {
                                              className: 'text-link max-w-32 truncate text-sm',
                                              children: t.name,
                                          }),
                                          s !== n.length - 1 && l.jsx(v, { className: 'text-muted-foreground size-4' }),
                                      ],
                                  },
                                  t.id,
                              ),
                          ),
                      ],
                  })),
              (e[12] = j),
              (e[13] = n),
              (e[14] = o))
            : (o = e[14]);
        let i;
        if (e[15] !== k || e[16] !== c) {
            let t;
            (e[18] !== c
                ? ((t = s =>
                      l.jsxs(
                          'li',
                          {
                              onClick: () => c(s),
                              className: 'flex h-full w-full flex-col items-center justify-end gap-2',
                              children: [
                                  s.kind === 'folder'
                                      ? l.jsx('img', { src: '/images/folder.png', alt: s.name, className: W('w-16') })
                                      : l.jsx('img', { src: s.icon, alt: s.name, className: W('w-20') }),
                                  l.jsx('p', {
                                      className: 'line-clamp-2 text-center text-sm font-medium',
                                      children: s.name,
                                  }),
                              ],
                          },
                          s.id,
                      )),
                  (e[18] = c),
                  (e[19] = t))
                : (t = e[19]),
                (i = k.map(t)),
                (e[15] = k),
                (e[16] = c),
                (e[17] = i));
        } else i = e[17];
        let a;
        e[20] !== i
            ? ((a = l.jsx('ul', { className: 'grid grid-cols-3 gap-4 p-5', children: i })), (e[20] = i), (e[21] = a))
            : (a = e[21]);
        let y;
        return (
            e[22] !== r || e[23] !== o || e[24] !== a
                ? ((y = l.jsxs(l.Fragment, { children: [r, o, a] })),
                  (e[22] = r),
                  (e[23] = o),
                  (e[24] = a),
                  (e[25] = y))
                : (y = e[25]),
            y
        );
    },
    G = S(z, 'finder');
export { G as default };

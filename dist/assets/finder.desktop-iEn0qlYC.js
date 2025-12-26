import { c as g, u as y, j as s, l as b, e as w } from './index-DpLs9J7t.js';
import { W as v, a as N } from './window-wrapper-CFcWWu11.js';
import { u as k } from './location-t0i7Jkot.js';
import { w as W } from './window-key-Cjye9NgF.js';
import { S as F } from './search-BTPM-5IR.js';
const S = () => {
        const e = g.c(21),
            { openWindow: m } = y(),
            { setActiveLocation: o, activeLocation: n } = k();
        let x;
        e[0] !== m || e[1] !== o
            ? ((x = r => {
                  if (r.kind === 'file' && r.fileType === 'pdf') {
                      m('resume');
                      return;
                  }
                  if (r.kind === 'folder') {
                      o(r);
                      return;
                  }
                  if (r.kind !== 'file') return;
                  if (r.fileType === 'fig' || r.fileType === 'url') {
                      r.href && window.open(r.href, '_blank', 'noopener,noreferrer');
                      return;
                  }
                  const t = W(r.fileType);
                  t && m(t, r);
              }),
              (e[0] = m),
              (e[1] = o),
              (e[2] = x))
            : (x = e[2]);
        const f = x;
        let p;
        e[3] !== n || e[4] !== o
            ? ((p = (r, t) =>
                  s.jsxs('div', {
                      children: [
                          s.jsx('h3', {
                              className: 'text-muted-foreground mb-1 px-2 text-xs font-medium',
                              children: r,
                          }),
                          s.jsx('ul', {
                              className: 'space-y-1',
                              children: t.map(a =>
                                  s.jsxs(
                                      'li',
                                      {
                                          onClick: () => o(a),
                                          className: w(
                                              'hover:bg-muted-foreground/10 flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 transition-colors',
                                              a.id === n.id ? 'bg-muted-foreground/10 text-blue-500' : null,
                                          ),
                                          children: [
                                              s.jsx('img', { src: a.icon, alt: a.name, className: 'w-4' }),
                                              s.jsx('p', {
                                                  className: 'truncate text-sm font-medium',
                                                  children: a.name,
                                              }),
                                          ],
                                      },
                                      a.id,
                                  ),
                              ),
                          }),
                      ],
                  })),
              (e[3] = n),
              (e[4] = o),
              (e[5] = p))
            : (p = e[5]);
        const u = p;
        let h;
        e[6] === Symbol.for('react.memo_cache_sentinel')
            ? ((h = s.jsxs('div', {
                  id: 'window-header',
                  className:
                      'dark:border-surface-muted border-border bg-muted text-muted-foreground flex items-center justify-between rounded-t-lg border-b px-4 py-3 text-sm select-none',
                  children: [s.jsx(N, { target: 'finder' }), s.jsx(F, { className: 'icon' })],
              })),
              (e[6] = h))
            : (h = e[6]);
        let l;
        e[7] !== u
            ? ((l = s.jsxs('div', {
                  className: 'border-border bg-muted flex w-48 flex-col space-y-3 border-r px-3 py-5',
                  children: [u('Favorites', Object.values(b)), u('My Projects', b.work.children)],
              })),
              (e[7] = u),
              (e[8] = l))
            : (l = e[8]);
        let i;
        e[9] !== n ? ((i = 'children' in n ? n.children : []), (e[9] = n), (e[10] = i)) : (i = e[10]);
        let c;
        if (e[11] !== f || e[12] !== i) {
            let r;
            (e[14] !== f
                ? ((r = t =>
                      s.jsxs(
                          'li',
                          {
                              className: w('absolute flex flex-col items-center gap-3', t.position),
                              onClick: () => f(t),
                              children: [
                                  s.jsx('img', {
                                      src: t.icon,
                                      alt: t.name,
                                      className: 'relative size-16 object-contain object-center group-hover:scale-105',
                                  }),
                                  s.jsx('p', { className: 'w-40 text-center text-sm font-medium', children: t.name }),
                              ],
                          },
                          t.id,
                      )),
                  (e[14] = f),
                  (e[15] = r))
                : (r = e[15]),
                (c = i.map(r)),
                (e[11] = f),
                (e[12] = i),
                (e[13] = c));
        } else c = e[13];
        let d;
        e[16] !== c
            ? ((d = s.jsx('ul', { className: 'bg-card relative max-w-2xl flex-1 p-8', children: c })),
              (e[16] = c),
              (e[17] = d))
            : (d = e[17]);
        let j;
        return (
            e[18] !== l || e[19] !== d
                ? ((j = s.jsxs(s.Fragment, {
                      children: [h, s.jsxs('div', { className: 'flex h-full min-h-[50vh]', children: [l, d] })],
                  })),
                  (e[18] = l),
                  (e[19] = d),
                  (e[20] = j))
                : (j = e[20]),
            j
        );
    },
    K = v(S, 'finder');
export { K as default };

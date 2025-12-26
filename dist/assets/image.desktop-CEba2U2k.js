import { c as l, u as d, j as r } from './index-DpLs9J7t.js';
import { W as c, a as f } from './window-wrapper-CFcWWu11.js';
const u = () => {
        const e = l.c(9),
            { windows: m } = d(),
            t = m.imgfile.data;
        if (!t || t.kind !== 'file') return null;
        const o = t.imageUrl || t.image;
        if (!o) return null;
        let a;
        e[0] === Symbol.for('react.memo_cache_sentinel')
            ? ((a = r.jsx(f, { target: 'imgfile' })), (e[0] = a))
            : (a = e[0]);
        let s;
        e[1] !== t.name
            ? ((s = r.jsxs('div', {
                  id: 'window-header',
                  className:
                      'dark:border-surface-muted border-border bg-muted text-muted-foreground flex items-center justify-between rounded-t-lg border-b px-4 py-3 text-sm select-none',
                  children: [a, r.jsx('p', { className: 'text-muted-foreground font-bold', children: t.name })],
              })),
              (e[1] = t.name),
              (e[2] = s))
            : (s = e[2]);
        let n;
        e[3] !== t.name || e[4] !== o
            ? ((n = r.jsx('div', {
                  className: 'bg-muted max-h-[70vh] p-2',
                  children: r.jsx('img', {
                      src: o,
                      alt: t.name,
                      className: 'h-fit w-full object-contain object-center',
                  }),
              })),
              (e[3] = t.name),
              (e[4] = o),
              (e[5] = n))
            : (n = e[5]);
        let i;
        return (
            e[6] !== s || e[7] !== n
                ? ((i = r.jsxs(r.Fragment, { children: [s, n] })), (e[6] = s), (e[7] = n), (e[8] = i))
                : (i = e[8]),
            i
        );
    },
    p = c(u, 'imgfile');
export { p as default };

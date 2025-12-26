import { c as x, u as f, j as s } from './index-DpLs9J7t.js';
import { W as u, a as p } from './window-wrapper-CFcWWu11.js';
const b = () => {
        const e = x.c(17),
            { windows: m } = f(),
            t = m.txtfile.data;
        if (!t || t.kind !== 'file') return null;
        const a = t.image || t.imageUrl;
        let d;
        e[0] === Symbol.for('react.memo_cache_sentinel')
            ? ((d = s.jsx(p, { target: 'txtfile' })), (e[0] = d))
            : (d = e[0]);
        let r;
        e[1] !== t.name
            ? ((r = s.jsxs('div', {
                  id: 'window-header',
                  className:
                      'dark:border-surface-muted border-border bg-muted text-muted-foreground flex items-center justify-between rounded-t-lg border-b px-4 py-3 text-sm select-none',
                  children: [d, s.jsx('h2', { className: 'w-full text-center text-sm font-bold', children: t.name })],
              })),
              (e[1] = t.name),
              (e[2] = r))
            : (r = e[2]);
        let l;
        e[3] !== t.name || e[4] !== a
            ? ((l =
                  a &&
                  s.jsx('div', {
                      className: 'overflow-hidden rounded-lg',
                      children: s.jsx('img', { src: a, alt: t.name, className: 'h-48 w-full object-cover' }),
                  })),
              (e[3] = t.name),
              (e[4] = a),
              (e[5] = l))
            : (l = e[5]);
        let i;
        e[6] !== t.subtitle
            ? ((i =
                  t.subtitle &&
                  s.jsx('h3', { className: 'text-foreground text-lg font-semibold', children: t.subtitle })),
              (e[6] = t.subtitle),
              (e[7] = i))
            : (i = e[7]);
        let n;
        e[8] !== t.description ? ((n = t.description?.map(g)), (e[8] = t.description), (e[9] = n)) : (n = e[9]);
        let o;
        e[10] !== l || e[11] !== i || e[12] !== n
            ? ((o = s.jsxs('div', { className: 'bg-card space-y-4 p-5', children: [l, i, n] })),
              (e[10] = l),
              (e[11] = i),
              (e[12] = n),
              (e[13] = o))
            : (o = e[13]);
        let c;
        return (
            e[14] !== r || e[15] !== o
                ? ((c = s.jsxs(s.Fragment, { children: [r, o] })), (e[14] = r), (e[15] = o), (e[16] = c))
                : (c = e[16]),
            c
        );
    },
    w = u(b, 'txtfile');
function g(e, m) {
    return s.jsx('p', { className: 'text-muted-foreground text-sm leading-relaxed', children: e }, m);
}
export { w as default };

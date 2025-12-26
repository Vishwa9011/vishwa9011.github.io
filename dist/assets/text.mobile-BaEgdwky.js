import { c as f, u, j as s } from './index-DpLs9J7t.js';
import { M as p, a as b } from './mobile-window-header-BgefJ9BZ.js';
import './chevron-left-DgpI3LmR.js';
const g = () => {
        const e = f.c(19),
            { windows: m, closeWindow: x } = u(),
            t = m.txtfile.data;
        if (!t || t.kind !== 'file') return null;
        const d = t.image || t.imageUrl;
        let i;
        e[0] !== x ? ((i = () => x('txtfile')), (e[0] = x), (e[1] = i)) : (i = e[1]);
        let l;
        e[2] !== t.name || e[3] !== i
            ? ((l = s.jsx(b, { title: t.name, onClose: i })), (e[2] = t.name), (e[3] = i), (e[4] = l))
            : (l = e[4]);
        let o;
        e[5] !== t.name || e[6] !== d
            ? ((o =
                  d &&
                  s.jsx('div', {
                      className: 'overflow-hidden rounded-lg',
                      children: s.jsx('img', { src: d, alt: t.name, className: 'h-48 w-full object-cover' }),
                  })),
              (e[5] = t.name),
              (e[6] = d),
              (e[7] = o))
            : (o = e[7]);
        let n;
        e[8] !== t.subtitle
            ? ((n =
                  t.subtitle &&
                  s.jsx('h3', { className: 'text-foreground text-lg font-semibold', children: t.subtitle })),
              (e[8] = t.subtitle),
              (e[9] = n))
            : (n = e[9]);
        let a;
        e[10] !== t.description ? ((a = t.description?.map(j)), (e[10] = t.description), (e[11] = a)) : (a = e[11]);
        let r;
        e[12] !== o || e[13] !== n || e[14] !== a
            ? ((r = s.jsxs('div', { className: 'bg-card space-y-4 p-5', children: [o, n, a] })),
              (e[12] = o),
              (e[13] = n),
              (e[14] = a),
              (e[15] = r))
            : (r = e[15]);
        let c;
        return (
            e[16] !== l || e[17] !== r
                ? ((c = s.jsxs(s.Fragment, { children: [l, r] })), (e[16] = l), (e[17] = r), (e[18] = c))
                : (c = e[18]),
            c
        );
    },
    M = p(g, 'txtfile');
function j(e, m) {
    return s.jsx('p', { className: 'text-foreground text-base leading-relaxed sm:text-sm', children: e }, m);
}
export { M as default };

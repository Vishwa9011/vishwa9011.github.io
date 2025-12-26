import { c as d, u as p, j as o } from './index-DpLs9J7t.js';
import { C as u } from './chevron-left-DgpI3LmR.js';
function N(m, e) {
    const a = t => {
            const s = d.c(7),
                { windows: l } = p(),
                { isOpen: i, zIndex: n } = l[e];
            if (!i) return null;
            let c;
            s[0] !== n ? ((c = { zIndex: n }), (s[0] = n), (s[1] = c)) : (c = s[1]);
            let r;
            s[2] !== t ? ((r = o.jsx(m, { ...t })), (s[2] = t), (s[3] = r)) : (r = s[3]);
            let x;
            return (
                s[4] !== c || s[5] !== r
                    ? ((x = o.jsx('section', {
                          id: `mobile-${e}`,
                          className:
                              'bg-card pt-nav-height fixed inset-0 z-50 flex h-full w-full flex-col overflow-y-auto overscroll-contain',
                          style: c,
                          children: r,
                      })),
                      (s[4] = c),
                      (s[5] = r),
                      (s[6] = x))
                    : (x = s[6]),
                x
            );
        },
        f = m.displayName ?? m.name ?? 'Component';
    return ((a.displayName = `MobileWindowWrapper(${f})`), a);
}
function b(m) {
    const e = d.c(9),
        { title: a, onClose: f } = m;
    let t, s;
    e[0] === Symbol.for('react.memo_cache_sentinel')
        ? ((t = o.jsx(u, { className: 'size-4' })),
          (s = o.jsx('span', { className: 'text-link text-sm', children: 'Go Back ' })),
          (e[0] = t),
          (e[1] = s))
        : ((t = e[0]), (s = e[1]));
    let l;
    e[2] !== f
        ? ((l = o.jsxs('div', {
              className: 'flex flex-1 cursor-pointer items-center gap-1',
              onClick: f,
              children: [t, s],
          })),
          (e[2] = f),
          (e[3] = l))
        : (l = e[3]);
    let i;
    e[4] !== a
        ? ((i = o.jsx('div', {
              className: 'flex-[1.5]',
              children: o.jsx('h2', { className: 'text-lg font-medium', children: a }),
          })),
          (e[4] = a),
          (e[5] = i))
        : (i = e[5]);
    let n;
    return (
        e[6] !== l || e[7] !== i
            ? ((n = o.jsxs('div', {
                  className: 'z-10 flex h-10 w-full items-center gap-5 px-3 pt-2 pb-3',
                  children: [l, i],
              })),
              (e[6] = l),
              (e[7] = i),
              (e[8] = n))
            : (n = e[8]),
        n
    );
}
export { N as M, b as a };

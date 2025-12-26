import { c as n, u as m, j as s, t as d, p as x } from './index-DpLs9J7t.js';
import { M as f, a as h } from './mobile-window-header-BgefJ9BZ.js';
import { C as p } from './chevron-right-D2W9Sk_G.js';
import { C as j, F as u } from './flag-BzdECdw3.js';
import './chevron-left-DgpI3LmR.js';
const b = () => {
        const e = n.c(8),
            { closeWindow: r } = m();
        let l;
        e[0] !== r
            ? ((l = s.jsx(h, { onClose: () => r('terminal'), title: 'Tech Stack' })), (e[0] = r), (e[1] = l))
            : (l = e[1]);
        let c;
        e[2] === Symbol.for('react.memo_cache_sentinel')
            ? ((c = s.jsxs('p', {
                  children: [
                      s.jsxs('span', { className: 'font-bold', children: ['@', x.terminalHandle, ' % '] }),
                      'show tech stack',
                  ],
              })),
              (e[2] = c))
            : (c = e[2]);
        let t;
        e[3] === Symbol.for('react.memo_cache_sentinel')
            ? ((t = s.jsx('ul', { className: 'border-border mb-5 border-b py-5', children: d.map(N) })), (e[3] = t))
            : (t = e[3]);
        let o;
        e[4] === Symbol.for('react.memo_cache_sentinel')
            ? ((o = s.jsxs('div', {
                  className: 'text-success flex items-center gap-2',
                  children: [
                      s.jsx(j, { size: 20, className: 'mr-5' }),
                      s.jsx('p', { children: '5 of 5 stacks loaded successfully (100%)' }),
                  ],
              })),
              (e[4] = o))
            : (o = e[4]);
        let a;
        e[5] === Symbol.for('react.memo_cache_sentinel')
            ? ((a = s.jsxs('div', {
                  className: 'font-roboto overflow-x-hidden overflow-y-auto p-5',
                  children: [
                      c,
                      t,
                      s.jsxs('div', {
                          className: '',
                          children: [
                              o,
                              s.jsxs('div', {
                                  className: 'text-foreground mt-2 flex items-center gap-2',
                                  children: [
                                      s.jsx(u, { size: 15, className: 'text-foreground mr-6' }),
                                      s.jsx('p', { children: 'Render time: 0.023s' }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              })),
              (e[5] = a))
            : (a = e[5]);
        let i;
        return (e[6] !== l ? ((i = s.jsxs(s.Fragment, { children: [l, a] })), (e[6] = l), (e[7] = i)) : (i = e[7]), i);
    },
    S = f(b, 'terminal');
function N(e) {
    const { category: r, items: l } = e;
    return s.jsxs(
        'li',
        {
            className: 'mb-4 flex flex-col',
            children: [
                s.jsxs('div', {
                    className: 'flex items-center gap-2',
                    children: [
                        s.jsx(p, { className: 'text-success', size: 20 }),
                        s.jsx('h3', { className: 'text-success', children: r }),
                    ],
                }),
                s.jsx('ul', {
                    className: 'ml-8',
                    children: l.map((c, t) => s.jsxs('li', { children: ['- ', c, t !== l.length - 1 && ','] }, t)),
                }),
            ],
        },
        r,
    );
}
export { S as default };

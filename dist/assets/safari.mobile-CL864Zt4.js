import { a as n, c as m, u as d, j as e, b as x } from './index-DpLs9J7t.js';
import { M as h, a as f } from './mobile-window-header-BgefJ9BZ.js';
import { M as p, S as j, C as b } from './share-DtNMseg3.js';
import { S as N } from './search-BTPM-5IR.js';
import { C as v } from './chevron-left-DgpI3LmR.js';
import { C as u } from './chevron-right-D2W9Sk_G.js';
const y = [
        ['path', { d: 'M12 7v14', key: '1akyts' }],
        [
            'path',
            {
                d: 'M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z',
                key: 'ruj8y',
            },
        ],
    ],
    k = n('book-open', y);
const g = [
        ['path', { d: 'M12 19v3', key: 'npa21l' }],
        ['path', { d: 'M19 10v2a7 7 0 0 1-14 0v-2', key: '1vc78b' }],
        ['rect', { x: '9', y: '2', width: '6', height: '13', rx: '3', key: 's6n7sd' }],
    ],
    _ = n('mic', g),
    M = () => {
        const s = m.c(8),
            { closeWindow: r } = d();
        let a;
        s[0] !== r
            ? ((a = e.jsx(f, { title: 'Safari', onClose: () => r('safari') })), (s[0] = r), (s[1] = a))
            : (a = s[1]);
        let l;
        s[2] === Symbol.for('react.memo_cache_sentinel')
            ? ((l = e.jsx('h2', { className: 'text-brand text-xl font-bold', children: 'My Developer Blog' })),
              (s[2] = l))
            : (l = s[2]);
        let o;
        s[3] === Symbol.for('react.memo_cache_sentinel')
            ? ((o = e.jsxs('div', {
                  className: 'flex min-h-0 flex-1 flex-col gap-5 p-5',
                  children: [l, e.jsx('div', { className: 'space-y-8 overflow-y-auto', children: x.map(S) })],
              })),
              (s[3] = o))
            : (o = s[3]);
        let t;
        s[4] === Symbol.for('react.memo_cache_sentinel')
            ? ((t = e.jsxs('div', {
                  className: 'border-border flex items-center rounded-xl border px-3 py-2',
                  children: [
                      e.jsx(N, { className: 'size-5' }),
                      e.jsx('input', {
                          type: 'text',
                          placeholder: 'Search or enter website name',
                          className: 'ml-2 w-full text-sm outline-none',
                      }),
                      e.jsx(_, { className: 'size-5' }),
                  ],
              })),
              (s[4] = t))
            : (t = s[4]);
        let i;
        s[5] === Symbol.for('react.memo_cache_sentinel')
            ? ((i = e.jsxs('div', {
                  className: 'flex h-[calc(100dvh-48px-60px)] flex-col gap-5',
                  children: [
                      o,
                      e.jsxs('div', {
                          className: 'border-border rounded-2xl border-t p-5',
                          children: [
                              t,
                              e.jsxs('div', {
                                  className: 'mt-4 flex items-center justify-between',
                                  children: [
                                      e.jsx(v, { className: 'size-6' }),
                                      e.jsx(u, { className: 'size-6' }),
                                      e.jsx(j, { className: 'text-link size-6' }),
                                      e.jsx(k, { className: 'text-link size-6' }),
                                      e.jsx(b, { className: 'text-link size-6' }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              })),
              (s[5] = i))
            : (i = s[5]);
        let c;
        return (s[6] !== a ? ((c = e.jsxs(e.Fragment, { children: [a, i] })), (s[6] = a), (s[7] = c)) : (c = s[7]), c);
    },
    E = h(M, 'safari');
function S(s) {
    const { id: r, date: a, image: l, link: o, title: t } = s;
    return e.jsxs(
        'div',
        {
            className: 'grid grid-cols-3 items-center',
            children: [
                e.jsx('div', { className: '', children: e.jsx('img', { src: l, alt: t }) }),
                e.jsxs('div', {
                    className: 'col-span-2 flex h-full flex-col justify-center gap-2',
                    children: [
                        e.jsx('p', { className: 'text-sm', children: a }),
                        e.jsx('h3', { className: 'font-semibold', children: t }),
                        e.jsxs('a', {
                            href: o,
                            target: '_blank',
                            rel: 'noopener noreferrer',
                            className: 'text-link text-sm',
                            children: ['Check out the full post ', e.jsx(p, { className: 'icon-hover' })],
                        }),
                    ],
                }),
            ],
        },
        r,
    );
}
export { E as default };

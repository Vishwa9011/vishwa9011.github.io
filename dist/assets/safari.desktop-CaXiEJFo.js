import { a as m, c as d, j as e, b as x } from './index-DpLs9J7t.js';
import { W as h, a as f } from './window-wrapper-CFcWWu11.js';
import { M as p, S as j, C as b } from './share-DtNMseg3.js';
import { C as u } from './chevron-left-DgpI3LmR.js';
import { C as N } from './chevron-right-D2W9Sk_G.js';
import { S as g } from './search-BTPM-5IR.js';
const y = [
        ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2', key: 'afitv7' }],
        ['path', { d: 'M9 3v18', key: 'fh3hqa' }],
    ],
    _ = m('panel-left', y);
const v = [
        ['path', { d: 'M5 12h14', key: '1ays0h' }],
        ['path', { d: 'M12 5v14', key: 's699le' }],
    ],
    S = m('plus', v);
const k = [
        [
            'path',
            {
                d: 'M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z',
                key: 'oel41y',
            },
        ],
        ['path', { d: 'M12 22V2', key: 'zs6s6o' }],
    ],
    w = m('shield-half', k),
    C = () => {
        const s = d.c(8);
        let t, r;
        s[0] === Symbol.for('react.memo_cache_sentinel')
            ? ((t = e.jsx(f, { target: 'safari' })),
              (r = e.jsx(_, { className: 'icon ml-10' })),
              (s[0] = t),
              (s[1] = r))
            : ((t = s[0]), (r = s[1]));
        let o;
        s[2] === Symbol.for('react.memo_cache_sentinel')
            ? ((o = e.jsxs('div', {
                  className: 'ml-5 flex items-center gap-1',
                  children: [e.jsx(u, { className: 'icon' }), e.jsx(N, { className: 'icon' })],
              })),
              (s[2] = o))
            : (o = s[2]);
        let l;
        s[3] === Symbol.for('react.memo_cache_sentinel')
            ? ((l = e.jsx(w, { className: 'icon' })), (s[3] = l))
            : (l = s[3]);
        let a;
        s[4] === Symbol.for('react.memo_cache_sentinel')
            ? ((a = e.jsxs('div', {
                  className: 'flex-center flex-1 gap-3',
                  children: [
                      l,
                      e.jsxs('div', {
                          className: 'border-border bg-card flex w-2/3 items-center gap-3 rounded-lg border px-3 py-2',
                          children: [
                              e.jsx(g, { className: 'icon' }),
                              e.jsx('input', {
                                  type: 'text',
                                  placeholder: 'Search or enter website name',
                                  className: 'placeholder:text-muted-foreground flex-1',
                              }),
                          ],
                      }),
                  ],
              })),
              (s[4] = a))
            : (a = s[4]);
        let c;
        s[5] === Symbol.for('react.memo_cache_sentinel')
            ? ((c = e.jsxs('div', {
                  id: 'window-header',
                  className:
                      'dark:border-surface-muted border-border bg-muted text-muted-foreground flex items-center justify-between rounded-t-lg border-b px-4 py-3 text-sm select-none',
                  children: [
                      t,
                      r,
                      o,
                      a,
                      e.jsxs('div', {
                          className: 'flex items-center gap-5',
                          children: [
                              e.jsx(j, { className: 'icon' }),
                              e.jsx(S, { className: 'icon' }),
                              e.jsx(b, { className: 'icon' }),
                          ],
                      }),
                  ],
              })),
              (s[5] = c))
            : (c = s[5]);
        let n;
        s[6] === Symbol.for('react.memo_cache_sentinel')
            ? ((n = e.jsx('h2', { className: 'text-brand mb-10 text-xl font-bold', children: 'My Developer Blog' })),
              (s[6] = n))
            : (n = s[6]);
        let i;
        return (
            s[7] === Symbol.for('react.memo_cache_sentinel')
                ? ((i = e.jsxs(e.Fragment, {
                      children: [
                          c,
                          e.jsxs('div', {
                              className: 'bg-card mx-auto max-w-3xl p-10',
                              children: [n, e.jsx('div', { className: 'space-y-8', children: x.map(M) })],
                          }),
                      ],
                  })),
                  (s[7] = i))
                : (i = s[7]),
            i
        );
    },
    $ = h(C, 'safari');
function M(s) {
    const { id: t, date: r, image: o, link: l, title: a } = s;
    return e.jsxs(
        'div',
        {
            className: 'grid grid-cols-12 space-x-5',
            children: [
                e.jsx('div', {
                    className: 'col-span-2',
                    children: e.jsx('img', { src: o, alt: a, className: 'size-full rounded-md object-cover' }),
                }),
                e.jsxs('div', {
                    className: 'col-span-10 space-y-3',
                    children: [
                        e.jsx('p', { className: 'text-muted-foreground text-xs', children: r }),
                        e.jsx('h3', { className: 'text-foreground text-base font-semibold', children: a }),
                        e.jsxs('a', {
                            href: l,
                            target: '_blank',
                            rel: 'noopener noreferrer',
                            className: 'text-accent flex items-center gap-3 text-xs hover:underline',
                            children: ['Check out the full post ', e.jsx(p, { className: 'icon-hover' })],
                        }),
                    ],
                }),
            ],
        },
        t,
    );
}
export { $ as default };

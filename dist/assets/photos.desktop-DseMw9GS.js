import { a as x, c as f, u, j as s, k as g, m as d } from './index-DpLs9J7t.js';
import { W as h, a as j } from './window-wrapper-CFcWWu11.js';
import { S as w } from './search-BTPM-5IR.js';
const b = [
        ['path', { d: 'm22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7', key: '132q7q' }],
        ['rect', { x: '2', y: '4', width: '20', height: '16', rx: '2', key: 'izxlao' }],
    ],
    y = x('mail', b),
    N = () => {
        const e = f.c(7),
            { openWindow: a } = u();
        let o;
        e[0] === Symbol.for('react.memo_cache_sentinel')
            ? ((o = s.jsx(j, { target: 'photos' })), (e[0] = o))
            : (o = e[0]);
        let t;
        e[1] === Symbol.for('react.memo_cache_sentinel')
            ? ((t = s.jsxs('div', {
                  id: 'window-header',
                  className:
                      'dark:border-surface-muted border-border bg-muted text-muted-foreground flex items-center justify-between rounded-t-lg border-b px-4 py-3 text-sm select-none',
                  children: [
                      o,
                      s.jsxs('div', {
                          className: 'text-muted-foreground flex w-full items-center justify-end gap-3',
                          children: [s.jsx(y, { className: 'icon' }), s.jsx(w, { className: 'icon' })],
                      }),
                  ],
              })),
              (e[1] = t))
            : (t = e[1]);
        let l;
        e[2] === Symbol.for('react.memo_cache_sentinel')
            ? ((l = s.jsxs('div', {
                  className: 'border-border bg-muted flex w-3/12 flex-none flex-col border-r px-2 py-5',
                  children: [
                      s.jsx('h2', {
                          className: 'text-muted-foreground mb-1 px-3 text-xs font-medium',
                          children: 'Photos',
                      }),
                      s.jsx('ul', { children: g.map(_) }),
                  ],
              })),
              (e[2] = l))
            : (l = e[2]);
        let r;
        e[3] !== a
            ? ((r = d.map((p, c) => {
                  const { id: n, img: m } = p;
                  return s.jsx(
                      'li',
                      {
                          className:
                              c === 0
                                  ? 'col-span-3 col-start-1 row-span-3 row-start-1'
                                  : c === 1
                                    ? 'col-span-2 col-start-4 row-span-3 row-start-1'
                                    : c === 2
                                      ? 'col-span-3 col-start-3 row-span-2 row-start-4'
                                      : c === d.length - 1
                                        ? 'col-span-2 col-start-1 row-span-2 row-start-4'
                                        : void 0,
                          onClick: () =>
                              a('imgfile', {
                                  id: n,
                                  name: 'Gallery image',
                                  icon: '/images/image.png',
                                  kind: 'file',
                                  fileType: 'img',
                                  imageUrl: m,
                              }),
                          children: s.jsx('img', {
                              src: m,
                              alt: `Gallery image ${n}`,
                              className: 'size-full rounded-lg object-cover',
                          }),
                      },
                      n,
                  );
              })),
              (e[3] = a),
              (e[4] = r))
            : (r = e[4]);
        let i;
        return (
            e[5] !== r
                ? ((i = s.jsxs(s.Fragment, {
                      children: [
                          t,
                          s.jsxs('div', {
                              className: 'flex w-2xl',
                              children: [
                                  l,
                                  s.jsx('div', {
                                      className: 'p-5',
                                      children: s.jsx('ul', {
                                          className: 'grid grid-cols-5 grid-rows-5 gap-2.5',
                                          children: r,
                                      }),
                                  }),
                              ],
                          }),
                      ],
                  })),
                  (e[5] = r),
                  (e[6] = i))
                : (i = e[6]),
            i
        );
    },
    S = h(N, 'photos');
function _(e) {
    const { id: a, icon: o, title: t } = e;
    return s.jsxs(
        'li',
        {
            className:
                'first:bg-accent/20 first:text-accent flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 transition-colors',
            children: [
                s.jsx('img', { src: o, alt: t, className: 'size-4' }),
                s.jsx('p', { className: 'text-sm font-medium', children: t }),
            ],
        },
        a,
    );
}
export { S as default };

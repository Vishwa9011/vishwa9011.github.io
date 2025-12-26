import { c as m, j as e, t as i, p as d } from './index-DpLs9J7t.js';
import { W as x, a as f } from './window-wrapper-CFcWWu11.js';
import { C as n, F as h } from './flag-BzdECdw3.js';
const p = () => {
        const s = m.c(6);
        let t;
        s[0] === Symbol.for('react.memo_cache_sentinel')
            ? ((t = e.jsxs('div', {
                  id: 'window-header',
                  className:
                      'dark:border-surface-muted border-border bg-muted text-muted-foreground flex items-center justify-between rounded-t-lg border-b px-4 py-3 text-sm select-none',
                  children: [
                      e.jsx(f, { target: 'terminal' }),
                      e.jsx('h2', { className: 'w-full text-center text-sm font-bold', children: 'Tech Stack' }),
                  ],
              })),
              (s[0] = t))
            : (t = s[0]);
        let r;
        s[1] === Symbol.for('react.memo_cache_sentinel')
            ? ((r = e.jsxs('p', {
                  children: [
                      e.jsxs('span', { className: 'font-bold', children: ['@', d.terminalHandle, ' % '] }),
                      'show tech stack',
                  ],
              })),
              (s[1] = r))
            : (r = s[1]);
        let c;
        s[2] === Symbol.for('react.memo_cache_sentinel')
            ? ((c = e.jsxs('div', {
                  className: 'ms-10 mt-7 flex items-center',
                  children: [
                      e.jsx('p', { className: 'w-32', children: 'Category' }),
                      e.jsx('p', { children: 'Technologies' }),
                  ],
              })),
              (s[2] = c))
            : (c = s[2]);
        let l;
        s[3] === Symbol.for('react.memo_cache_sentinel')
            ? ((l = e.jsx('ul', {
                  className: 'border-border my-5 space-y-1 border-y border-dashed py-5',
                  children: i.map(j),
              })),
              (s[3] = l))
            : (l = s[3]);
        let a;
        s[4] === Symbol.for('react.memo_cache_sentinel')
            ? ((a = e.jsxs('p', {
                  className: 'flex items-center',
                  children: [
                      e.jsx(n, { size: 20, className: 'me-5 w-5' }),
                      ' 5 of 5 stacks loaded successfully (100%)',
                  ],
              })),
              (s[4] = a))
            : (a = s[4]);
        let o;
        return (
            s[5] === Symbol.for('react.memo_cache_sentinel')
                ? ((o = e.jsxs(e.Fragment, {
                      children: [
                          t,
                          e.jsxs('div', {
                              className: 'font-roboto p-5 text-sm',
                              children: [
                                  r,
                                  c,
                                  l,
                                  e.jsxs('div', {
                                      className: 'text-success space-y-1',
                                      children: [
                                          a,
                                          e.jsxs('p', {
                                              className: 'text-foreground flex items-center',
                                              children: [
                                                  e.jsx(h, { size: 15, className: 'text-foreground me-5 w-5' }),
                                                  ' Render time: 0.023s',
                                              ],
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                      ],
                  })),
                  (s[5] = o))
                : (o = s[5]),
            o
        );
    },
    N = x(p, 'terminal');
function j(s) {
    const { category: t, items: r } = s;
    return e.jsxs(
        'li',
        {
            className: 'flex items-center',
            children: [
                e.jsx(n, { className: 'text-success w-5', size: 20 }),
                e.jsx('h3', { className: 'text-success ms-5 w-32 font-semibold', children: t }),
                e.jsx('ul', {
                    className: 'flex items-center gap-3',
                    children: r.map((c, l) => e.jsxs('li', { children: [c, l !== r.length - 1 && ','] }, l)),
                }),
            ],
        },
        t,
    );
}
export { N as default };

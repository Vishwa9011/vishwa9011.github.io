import { c as i, j as t, s as d, p as c } from './index-DpLs9J7t.js';
import { W as m, a as x } from './window-wrapper-CFcWWu11.js';
const f = () => {
        const e = i.c(6);
        let s;
        e[0] === Symbol.for('react.memo_cache_sentinel')
            ? ((s = t.jsxs('div', {
                  id: 'window-header',
                  className:
                      'dark:border-surface-muted border-border bg-muted text-muted-foreground flex items-center justify-between rounded-t-lg border-b px-4 py-3 text-sm select-none',
                  children: [
                      t.jsx(x, { target: 'contact' }),
                      t.jsx('h2', { className: 'w-full text-center text-sm font-bold', children: 'Contact Me' }),
                  ],
              })),
              (e[0] = s))
            : (s = e[0]);
        let n, a, r, o;
        e[1] === Symbol.for('react.memo_cache_sentinel')
            ? ((n = t.jsx('img', { src: '/images/vishwa.webp', alt: c.fullName, className: 'w-20 rounded-full' })),
              (a = t.jsx('h3', { className: 'text-xl font-semibold', children: "Let's Connect" })),
              (r = t.jsx('p', {
                  className: 'text-muted-foreground',
                  children: "Got an idea? A bug to squash? Or just wanna talk tech? I'm in.",
              })),
              (o = t.jsx('p', {
                  children: t.jsx('a', {
                      href: `mailTo:${c.email}`,
                      target: '_blank',
                      rel: 'noopener noreferrer',
                      className: 'text-link hover:text-link-hover underline underline-offset-2',
                      children: c.email,
                  }),
              })),
              (e[1] = n),
              (e[2] = a),
              (e[3] = r),
              (e[4] = o))
            : ((n = e[1]), (a = e[2]), (r = e[3]), (o = e[4]));
        let l;
        return (
            e[5] === Symbol.for('react.memo_cache_sentinel')
                ? ((l = t.jsxs(t.Fragment, {
                      children: [
                          s,
                          t.jsxs('div', {
                              className: 'space-y-5 p-5',
                              children: [
                                  n,
                                  a,
                                  r,
                                  o,
                                  t.jsx('ul', { className: 'flex items-center gap-3', children: d.map(u) }),
                              ],
                          }),
                      ],
                  })),
                  (e[5] = l))
                : (l = e[5]),
            l
        );
    },
    b = m(f, 'contact');
function u(e) {
    const { id: s, link: n, icon: a, text: r } = e;
    return t.jsx(
        'li',
        {
            className:
                'border-border bg-card text-foreground hover:bg-muted w-60 origin-center rounded-lg border p-3 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105',
            children: t.jsxs('a', {
                href: n,
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'space-y-5',
                children: [
                    t.jsx('img', { src: a, alt: r, className: 'invert dark:invert-0' }),
                    t.jsx('p', { className: 'text-sm font-semibold', children: r }),
                ],
            }),
        },
        s,
    );
}
export { b as default };

import { c as d, u as x, j as t, s as f, p as m } from './index-DpLs9J7t.js';
import { M as p, a as u } from './mobile-window-header-BgefJ9BZ.js';
import './chevron-left-DgpI3LmR.js';
const h = () => {
        const e = d.c(9),
            { closeWindow: o } = x();
        let l;
        e[0] !== o
            ? ((l = t.jsx(u, { title: 'Contact Me', onClose: () => o('contact') })), (e[0] = o), (e[1] = l))
            : (l = e[1]);
        let r, s, a, n;
        e[2] === Symbol.for('react.memo_cache_sentinel')
            ? ((r = t.jsx('img', { src: '/images/vishwa.webp', alt: m.fullName, className: 'w-20 rounded-full' })),
              (s = t.jsx('h3', { className: 'text-xl font-semibold', children: "Let's Connect" })),
              (a = t.jsx('p', {
                  className: 'text-muted-foreground',
                  children: "Got an idea? A bug to squash? Or just wanna talk tech? I'm in.",
              })),
              (n = t.jsx('p', {
                  children: t.jsx('a', {
                      href: `mailTo:${m.email}`,
                      target: '_blank',
                      rel: 'noopener noreferrer',
                      className: 'text-link hover:text-link-hover underline underline-offset-2',
                      children: m.email,
                  }),
              })),
              (e[2] = r),
              (e[3] = s),
              (e[4] = a),
              (e[5] = n))
            : ((r = e[2]), (s = e[3]), (a = e[4]), (n = e[5]));
        let i;
        e[6] === Symbol.for('react.memo_cache_sentinel')
            ? ((i = t.jsxs('div', {
                  className: 'space-y-5 p-5',
                  children: [
                      r,
                      s,
                      a,
                      n,
                      t.jsx('ul', { className: 'flex flex-col justify-center gap-2', children: f.map(j) }),
                  ],
              })),
              (e[6] = i))
            : (i = e[6]);
        let c;
        return (e[7] !== l ? ((c = t.jsxs(t.Fragment, { children: [l, i] })), (e[7] = l), (e[8] = c)) : (c = e[8]), c);
    },
    w = p(h, 'contact');
function j(e) {
    const { id: o, link: l, icon: r, text: s } = e;
    return t.jsx(
        'li',
        {
            className: 'border-border bg-card text-foreground rounded-xl border',
            children: t.jsxs('a', {
                href: l,
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'flex flex-col gap-4 p-2',
                children: [t.jsx('img', { className: 'size-5', src: r, alt: s }), t.jsx('p', { children: s })],
            }),
        },
        o,
    );
}
export { w as default };

import { c as u, u as x, e as p, j as c } from './index-DpLs9J7t.js';
const g = () => {
    const e = u.c(15),
        { openWindow: t } = x();
    let s;
    e[0] !== t ? ((s = () => t('resume')), (e[0] = t), (e[1] = s)) : (s = e[1]);
    let a, o;
    e[2] === Symbol.for('react.memo_cache_sentinel')
        ? ((a = p('group inline-flex size-20 items-center justify-center select-none')),
          (o = c.jsx('img', {
              src: '/images/pages.png',
              alt: 'Resume',
              className: 'w-full object-contain object-center',
          })),
          (e[2] = a),
          (e[3] = o))
        : ((a = e[2]), (o = e[3]));
    let l;
    e[4] !== s
        ? ((l = c.jsx('li', { onClick: s, className: a, children: o }, 'pages')), (e[4] = s), (e[5] = l))
        : (l = e[5]);
    let i;
    e[6] !== t ? ((i = () => t('terminal')), (e[6] = t), (e[7] = i)) : (i = e[7]);
    let r, m;
    e[8] === Symbol.for('react.memo_cache_sentinel')
        ? ((r = p('group inline-flex size-[84px] items-center justify-center select-none')),
          (m = c.jsx('img', {
              src: '/images/terminal.png',
              alt: 'Terminal',
              className: 'w-full object-contain object-center',
          })),
          (e[8] = r),
          (e[9] = m))
        : ((r = e[8]), (m = e[9]));
    let n;
    e[10] !== i
        ? ((n = c.jsx('li', { onClick: i, className: r, children: m }, 'terminal')), (e[10] = i), (e[11] = n))
        : (n = e[11]);
    let f;
    return (
        e[12] !== l || e[13] !== n
            ? ((f = c.jsx('section', {
                  id: 'home',
                  className: 'relative z-0',
                  children: c.jsxs('ul', { className: 'flex items-center gap-2 px-5', children: [l, n] }),
              })),
              (e[12] = l),
              (e[13] = n),
              (e[14] = f))
            : (f = e[14]),
        f
    );
};
export { g as default };

import { c as m, u as d, f as u, l as f, j as s, e as x, D as p } from './index-DpLs9J7t.js';
import { u as h } from './location-t0i7Jkot.js';
const g = f.work.children,
    v = () => {
        const e = m.c(8),
            { openWindow: l } = d(),
            { setActiveLocation: c } = h();
        let n;
        e[0] !== l || e[1] !== c
            ? ((n = t => {
                  (c(t), l('finder'));
              }),
              (e[0] = l),
              (e[1] = c),
              (e[2] = n))
            : (n = e[2]);
        const a = n;
        let r;
        (e[3] === Symbol.for('react.memo_cache_sentinel') ? ((r = []), (e[3] = r)) : (r = e[3]), u(b, r));
        let o;
        e[4] !== a
            ? ((o = g.map(t =>
                  s.jsxs(
                      'li',
                      {
                          onClick: () => a(t),
                          className: x(
                              'group folder absolute z-0 flex flex-col items-center select-none',
                              t.windowPosition,
                          ),
                          children: [
                              s.jsx('img', {
                                  src: t.icon,
                                  alt: t.name,
                                  className: 'group-hover:bg-foreground/10 rounded-md p-1',
                              }),
                              s.jsx('p', {
                                  className:
                                      'max-w-40 rounded-md px-1 text-center text-sm text-white transition-colors group-hover:bg-blue-500',
                                  children: t.name,
                              }),
                          ],
                      },
                      t.id,
                  ),
              )),
              (e[4] = a),
              (e[5] = o))
            : (o = e[5]);
        let i;
        return (
            e[6] !== o
                ? ((i = s.jsx('section', {
                      id: 'home',
                      className: 'relative z-0',
                      children: s.jsx('ul', { children: o }),
                  })),
                  (e[6] = o),
                  (e[7] = i))
                : (i = e[7]),
            i
        );
    };
function w(e) {
    return e.kill();
}
function b() {
    const e = p.create('.folder');
    return () => {
        e.forEach(w);
    };
}
export { v as default };

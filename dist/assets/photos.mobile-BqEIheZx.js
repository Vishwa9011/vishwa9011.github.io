import { c as d, u as p, m as g, j as l } from './index-DpLs9J7t.js';
import { M as f, a as u } from './mobile-window-header-BgefJ9BZ.js';
import './chevron-left-DgpI3LmR.js';
const x = () => {
        const e = d.c(9),
            { openWindow: a, closeWindow: r } = p();
        let i;
        e[0] !== r
            ? ((i = l.jsx(u, { title: 'Photos', onClose: () => r('photos') })), (e[0] = r), (e[1] = i))
            : (i = e[1]);
        let o;
        e[2] !== a
            ? ((o = g.map(c => {
                  const { id: n, img: m } = c;
                  return l.jsx(
                      'li',
                      {
                          onClick: () =>
                              a('imgfile', {
                                  id: n,
                                  name: 'Gallery image',
                                  icon: '/images/image.png',
                                  kind: 'file',
                                  fileType: 'img',
                                  imageUrl: m,
                              }),
                          children: l.jsx('img', {
                              className: 'aspect-square h-full w-full rounded-2xl object-cover',
                              src: m,
                              alt: `Gallery image ${n}`,
                          }),
                      },
                      n,
                  );
              })),
              (e[2] = a),
              (e[3] = o))
            : (o = e[3]);
        let s;
        e[4] !== o
            ? ((s = l.jsx('div', {
                  className: 'flex w-full p-4',
                  children: l.jsx('ul', { className: 'grid grid-cols-2 gap-2', children: o }),
              })),
              (e[4] = o),
              (e[5] = s))
            : (s = e[5]);
        let t;
        return (
            e[6] !== i || e[7] !== s
                ? ((t = l.jsxs(l.Fragment, { children: [i, s] })), (e[6] = i), (e[7] = s), (e[8] = t))
                : (t = e[8]),
            t
        );
    },
    W = f(x, 'photos');
export { W as default };

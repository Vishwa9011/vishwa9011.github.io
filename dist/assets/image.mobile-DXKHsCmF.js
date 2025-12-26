import { c, u as f, j as n } from './index-DpLs9J7t.js';
import { M as d, a as u } from './mobile-window-header-BgefJ9BZ.js';
import './chevron-left-DgpI3LmR.js';
const g = () => {
        const e = c.c(11),
            { windows: m, closeWindow: r } = f(),
            i = m.imgfile.data;
        if (!i || i.kind !== 'file') return null;
        const a = i.imageUrl || i.image;
        if (!a) return null;
        let t;
        e[0] !== r ? ((t = () => r('imgfile')), (e[0] = r), (e[1] = t)) : (t = e[1]);
        let l;
        e[2] !== i.name || e[3] !== t
            ? ((l = n.jsx(u, { title: i.name, onClose: t })), (e[2] = i.name), (e[3] = t), (e[4] = l))
            : (l = e[4]);
        let s;
        e[5] !== i.name || e[6] !== a
            ? ((s = n.jsx('div', {
                  className: 'flex h-full items-center justify-center p-4',
                  children: n.jsx('img', { src: a, alt: i.name }),
              })),
              (e[5] = i.name),
              (e[6] = a),
              (e[7] = s))
            : (s = e[7]);
        let o;
        return (
            e[8] !== l || e[9] !== s
                ? ((o = n.jsxs(n.Fragment, { children: [l, s] })), (e[8] = l), (e[9] = s), (e[10] = o))
                : (o = e[10]),
            o
        );
    },
    w = d(g, 'imgfile');
export { w as default };

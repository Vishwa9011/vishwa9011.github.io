import { c as R, u as _, r as w, j as t } from './index-DpLs9J7t.js';
import { i as g, D as E, a as N, P as D } from './react-pdf-GTneHgSM.js';
import { M as W, a as F } from './mobile-window-header-BgefJ9BZ.js';
import './chevron-left-DgpI3LmR.js';
g();
const j = '/files/resume.pdf',
    L = 'Vishwa_Vivek_Yadav_Resume.pdf',
    M = () => {
        const e = R.c(15),
            { closeWindow: f } = _(),
            h = w.useRef(null),
            [p, v] = w.useState(300);
        let i, n;
        (e[0] === Symbol.for('react.memo_cache_sentinel')
            ? ((i = () => {
                  const x = h.current;
                  if (!x) return;
                  const u = () => {
                      v(Math.floor(x.getBoundingClientRect().width));
                  };
                  if ((u(), typeof ResizeObserver > 'u'))
                      return (window.addEventListener('resize', u), () => window.removeEventListener('resize', u));
                  const b = new ResizeObserver(u);
                  return (b.observe(x), () => b.disconnect());
              }),
              (n = []),
              (e[0] = i),
              (e[1] = n))
            : ((i = e[0]), (n = e[1])),
            w.useEffect(i, n));
        let s;
        e[2] !== f
            ? ((s = t.jsx(F, { title: 'Resume', onClose: () => f('resume') })), (e[2] = f), (e[3] = s))
            : (s = e[3]);
        let l;
        e[4] === Symbol.for('react.memo_cache_sentinel')
            ? ((l = t.jsx('a', {
                  href: j,
                  download: L,
                  className: 'w-min cursor-pointer pt-2 pr-3 pb-3',
                  title: 'Download resume',
                  children: t.jsx(E, { className: 'size-4' }),
              })),
              (e[4] = l))
            : (l = e[4]);
        let r;
        e[5] !== s
            ? ((r = t.jsxs('div', { className: 'flex items-center justify-between', children: [s, l] })),
              (e[5] = s),
              (e[6] = r))
            : (r = e[6]);
        let a, d, c;
        e[7] === Symbol.for('react.memo_cache_sentinel')
            ? ((a = t.jsx('div', { className: 'text-muted-foreground p-4 text-sm', children: 'Loading PDF…' })),
              (d = t.jsx('div', { className: 'p-4 text-sm text-red-500', children: 'Failed to load PDF.' })),
              (c = t.jsx('div', {
                  className: 'text-muted-foreground p-4 text-sm',
                  children: 'No PDF file specified.',
              })),
              (e[7] = a),
              (e[8] = d),
              (e[9] = c))
            : ((a = e[7]), (d = e[8]), (c = e[9]));
        let o;
        e[10] !== p
            ? ((o = t.jsx('div', {
                  className: 'resume-pdf bg-background w-full p-4',
                  children: t.jsx('div', {
                      ref: h,
                      className: 'flex w-full justify-center',
                      children: t.jsx(N, {
                          file: j,
                          className: 'w-full',
                          loading: a,
                          error: d,
                          noData: c,
                          onLoadError: P,
                          children: t.jsx(D, {
                              pageNumber: 1,
                              width: p,
                              renderAnnotationLayer: !0,
                              renderTextLayer: !0,
                          }),
                      }),
                  }),
              })),
              (e[10] = p),
              (e[11] = o))
            : (o = e[11]);
        let m;
        return (
            e[12] !== r || e[13] !== o
                ? ((m = t.jsxs(t.Fragment, { children: [r, o] })), (e[12] = r), (e[13] = o), (e[14] = m))
                : (m = e[14]),
            m
        );
    },
    A = W(M, 'resume');
function P(e) {
    return console.error('Failed to load resume PDF:', e);
}
export { A as default };

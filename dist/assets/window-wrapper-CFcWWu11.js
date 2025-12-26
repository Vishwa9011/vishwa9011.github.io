import { c as j, u as N, j as f, r as S, f as _, e as k, n as z, D } from './index-DpLs9J7t.js';
const R = s => {
        const o = j.c(7),
            { target: n } = s,
            { closeWindow: u } = N();
        let l;
        o[0] !== u || o[1] !== n
            ? ((l = f.jsx('div', {
                  className: 'bg-destructive size-3.5 cursor-pointer rounded-full',
                  onClick: () => u(n),
              })),
              (o[0] = u),
              (o[1] = n),
              (o[2] = l))
            : (l = o[2]);
        let e, a;
        o[3] === Symbol.for('react.memo_cache_sentinel')
            ? ((e = f.jsx('div', { className: 'bg-warning size-3.5 rounded-full' })),
              (a = f.jsx('div', { className: 'bg-success size-3.5 rounded-full' })),
              (o[3] = e),
              (o[4] = a))
            : ((e = o[3]), (a = o[4]));
        let d;
        return (
            o[5] !== l
                ? ((d = f.jsxs('div', { id: 'window-controls', className: 'flex gap-2', children: [l, e, a] })),
                  (o[5] = l),
                  (o[6] = d))
                : (d = o[6]),
            d
        );
    },
    A = {
        finder: 'bg-card top-20 left-40 w-3xl overflow-hidden rounded-xl shadow-2xl drop-shadow-2xl',
        contact: 'bg-card top-60 left-5/12 max-w-2xl overflow-hidden rounded-xl shadow-2xl drop-shadow-2xl',
        resume: 'bg-card top-16 left-7/12 h-fit w-fit overflow-hidden rounded-xl shadow-2xl drop-shadow-2xl',
        safari: 'bg-card top-40 left-2/12 w-4xl overflow-hidden rounded-xl shadow-2xl drop-shadow-2xl',
        photos: 'bg-card top-96 left-1/2 max-w-3xl -translate-y-1/2 overflow-hidden rounded-xl shadow-2xl drop-shadow-2xl',
        terminal: 'bg-card top-32 left-1/12 w-xl overflow-hidden rounded-xl shadow-2xl drop-shadow-2xl',
        txtfile: 'bg-card top-36 right-32 w-md overflow-hidden rounded-xl shadow-2xl drop-shadow-2xl',
        imgfile: 'bg-card top-40 left-2/12 w-xl overflow-hidden rounded-xl shadow-2xl drop-shadow-2xl',
    },
    $ = (s, o) => {
        const n = l => {
                const e = j.c(19),
                    a = N(C),
                    d = N(O),
                    { isOpen: t, zIndex: y } = a[o],
                    x = S.useRef(null);
                let w, p;
                (e[0] !== t
                    ? ((w = () => {
                          const r = x.current;
                          !r ||
                              !t ||
                              ((r.style.display = 'block'),
                              z.fromTo(
                                  r,
                                  { scale: 0.8, opacity: 0, y: 40 },
                                  { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' },
                              ));
                      }),
                      (p = [t]),
                      (e[0] = t),
                      (e[1] = w),
                      (e[2] = p))
                    : ((w = e[1]), (p = e[2])),
                    _(w, p));
                let h;
                e[3] !== d || e[4] !== t
                    ? ((h = () => {
                          const r = x.current;
                          if (!r || !t) return;
                          const [E] = D.create(r, { onPress: () => d(o) });
                          return () => {
                              E.kill();
                          };
                      }),
                      (e[3] = d),
                      (e[4] = t),
                      (e[5] = h))
                    : (h = e[5]);
                let m;
                (e[6] !== t ? ((m = [t]), (e[6] = t), (e[7] = m)) : (m = e[7]), _(h, m));
                let g, b;
                if (
                    (e[8] !== t
                        ? ((g = () => {
                              const r = x.current;
                              r && (r.style.display = t ? 'block' : 'none');
                          }),
                          (b = [t]),
                          (e[8] = t),
                          (e[9] = g),
                          (e[10] = b))
                        : ((g = e[9]), (b = e[10])),
                    S.useLayoutEffect(g, b),
                    !t)
                )
                    return null;
                let i;
                e[11] !== y ? ((i = { zIndex: y }), (e[11] = y), (e[12] = i)) : (i = e[12]);
                let W;
                e[13] === Symbol.for('react.memo_cache_sentinel')
                    ? ((W = k('absolute', A[o])), (e[13] = W))
                    : (W = e[13]);
                let c;
                e[14] !== l ? ((c = f.jsx(s, { ...l })), (e[14] = l), (e[15] = c)) : (c = e[15]);
                let v;
                return (
                    e[16] !== i || e[17] !== c
                        ? ((v = f.jsx('section', { id: o, ref: x, style: i, className: W, children: c })),
                          (e[16] = i),
                          (e[17] = c),
                          (e[18] = v))
                        : (v = e[18]),
                    v
                );
            },
            u = s.displayName ?? s.name ?? 'Component';
        return ((n.displayName = `WindowWrapper(${u})`), n);
    };
function C(s) {
    return s.windows;
}
function O(s) {
    return s.focusWindow;
}
export { $ as W, R as a };

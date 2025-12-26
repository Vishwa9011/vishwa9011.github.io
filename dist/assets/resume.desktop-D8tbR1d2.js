import { c as m, j as t } from './index-DpLs9J7t.js';
import { W as c, a as u } from './window-wrapper-CFcWWu11.js';
import { i as f, D as x, a as p, P as h } from './react-pdf-GTneHgSM.js';
f();
const i = '/files/resume.pdf',
    j = 'Vishwa_Vivek_Yadav_Resume.pdf',
    _ = () => {
        const e = m.c(7);
        let r, s;
        e[0] === Symbol.for('react.memo_cache_sentinel')
            ? ((r = t.jsx(u, { target: 'resume' })),
              (s = t.jsx('h2', { className: 'flex-1 text-center text-sm font-bold', children: 'Resume.pdf' })),
              (e[0] = r),
              (e[1] = s))
            : ((r = e[0]), (s = e[1]));
        let o;
        e[2] === Symbol.for('react.memo_cache_sentinel')
            ? ((o = t.jsxs('div', {
                  id: 'window-header',
                  className:
                      'dark:border-surface-muted border-border bg-muted text-muted-foreground flex items-center justify-between rounded-t-lg border-b px-4 py-3 text-sm select-none',
                  children: [
                      r,
                      s,
                      t.jsx('a', {
                          href: i,
                          download: j,
                          className: 'cursor-pointer',
                          title: 'Download resume',
                          children: t.jsx(x, { className: 'icon' }),
                      }),
                  ],
              })),
              (e[2] = o))
            : (o = e[2]);
        let a, n, d;
        e[3] === Symbol.for('react.memo_cache_sentinel')
            ? ((a = t.jsx('div', { className: 'text-muted-foreground p-4 text-sm', children: 'Loading PDF…' })),
              (n = t.jsx('div', { className: 'p-4 text-sm text-red-500', children: 'Failed to load PDF.' })),
              (d = t.jsx('div', {
                  className: 'text-muted-foreground p-4 text-sm',
                  children: 'No PDF file specified.',
              })),
              (e[3] = a),
              (e[4] = n),
              (e[5] = d))
            : ((a = e[3]), (n = e[4]), (d = e[5]));
        let l;
        return (
            e[6] === Symbol.for('react.memo_cache_sentinel')
                ? ((l = t.jsxs(t.Fragment, {
                      children: [
                          o,
                          t.jsx('div', {
                              className: 'resume-pdf bg-background flex justify-center p-4',
                              children: t.jsx(p, {
                                  file: i,
                                  loading: a,
                                  error: n,
                                  noData: d,
                                  onLoadError: b,
                                  children: t.jsx(h, { pageNumber: 1, renderAnnotationLayer: !0, renderTextLayer: !0 }),
                              }),
                          }),
                      ],
                  })),
                  (e[6] = l))
                : (l = e[6]),
            l
        );
    },
    w = c(_, 'resume');
function b(e) {
    return console.error('Failed to load resume PDF:', e);
}
export { j as RESUME_DOWNLOAD_FILENAME, i as RESUME_PDF_URL, w as default };

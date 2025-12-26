const __vite__mapDeps = (
    i,
    m = __vite__mapDeps,
    d = m.f ||
        (m.f = [
            'assets/terminal.desktop-DeWCE3Hc.js',
            'assets/window-wrapper-CFcWWu11.js',
            'assets/flag-BzdECdw3.js',
            'assets/terminal.mobile-HXZ8Ddo0.js',
            'assets/mobile-window-header-BgefJ9BZ.js',
            'assets/chevron-left-DgpI3LmR.js',
            'assets/chevron-right-D2W9Sk_G.js',
            'assets/safari.desktop-CaXiEJFo.js',
            'assets/share-DtNMseg3.js',
            'assets/search-BTPM-5IR.js',
            'assets/safari.mobile-CL864Zt4.js',
            'assets/resume.desktop-D8tbR1d2.js',
            'assets/react-pdf-GTneHgSM.js',
            'assets/react-pdf-CBXYWCWZ.css',
            'assets/resume.mobile-BKBS20lH.js',
            'assets/finder.desktop-iEn0qlYC.js',
            'assets/location-t0i7Jkot.js',
            'assets/window-key-Cjye9NgF.js',
            'assets/finder.mobile-iLWKPuGr.js',
            'assets/text.desktop-BHVIa_zk.js',
            'assets/text.mobile-BaEgdwky.js',
            'assets/image.desktop-CEba2U2k.js',
            'assets/image.mobile-DXKHsCmF.js',
            'assets/contact.desktop-O6kstwgG.js',
            'assets/contact.mobile-D5pruKH1.js',
            'assets/home.desktop-DW6g1C7C.js',
            'assets/photos.desktop-DseMw9GS.js',
            'assets/photos.mobile-BqEIheZx.js',
        ]),
) => i.map(i => d[i]);
function nT(i, n) {
    for (var r = 0; r < n.length; r++) {
        const a = n[r];
        if (typeof a != 'string' && !Array.isArray(a)) {
            for (const s in a)
                if (s !== 'default' && !(s in i)) {
                    const u = Object.getOwnPropertyDescriptor(a, s);
                    u && Object.defineProperty(i, s, u.get ? u : { enumerable: !0, get: () => a[s] });
                }
        }
    }
    return Object.freeze(Object.defineProperty(i, Symbol.toStringTag, { value: 'Module' }));
}
(function () {
    const n = document.createElement('link').relList;
    if (n && n.supports && n.supports('modulepreload')) return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]')) a(s);
    new MutationObserver(s => {
        for (const u of s)
            if (u.type === 'childList')
                for (const f of u.addedNodes) f.tagName === 'LINK' && f.rel === 'modulepreload' && a(f);
    }).observe(document, { childList: !0, subtree: !0 });
    function r(s) {
        const u = {};
        return (
            s.integrity && (u.integrity = s.integrity),
            s.referrerPolicy && (u.referrerPolicy = s.referrerPolicy),
            s.crossOrigin === 'use-credentials'
                ? (u.credentials = 'include')
                : s.crossOrigin === 'anonymous'
                  ? (u.credentials = 'omit')
                  : (u.credentials = 'same-origin'),
            u
        );
    }
    function a(s) {
        if (s.ep) return;
        s.ep = !0;
        const u = r(s);
        fetch(s.href, u);
    }
})();
function af(i) {
    return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, 'default') ? i.default : i;
}
var Uh = { exports: {} },
    cs = {};
var X0;
function iT() {
    if (X0) return cs;
    X0 = 1;
    var i = Symbol.for('react.transitional.element'),
        n = Symbol.for('react.fragment');
    function r(a, s, u) {
        var f = null;
        if ((u !== void 0 && (f = '' + u), s.key !== void 0 && (f = '' + s.key), 'key' in s)) {
            u = {};
            for (var d in s) d !== 'key' && (u[d] = s[d]);
        } else u = s;
        return ((s = u.ref), { $$typeof: i, type: a, key: f, ref: s !== void 0 ? s : null, props: u });
    }
    return ((cs.Fragment = n), (cs.jsx = r), (cs.jsxs = r), cs);
}
var q0;
function lT() {
    return (q0 || ((q0 = 1), (Uh.exports = iT())), Uh.exports);
}
var V = lT(),
    jh = { exports: {} },
    Re = {};
var V0;
function rT() {
    if (V0) return Re;
    V0 = 1;
    var i = Symbol.for('react.transitional.element'),
        n = Symbol.for('react.portal'),
        r = Symbol.for('react.fragment'),
        a = Symbol.for('react.strict_mode'),
        s = Symbol.for('react.profiler'),
        u = Symbol.for('react.consumer'),
        f = Symbol.for('react.context'),
        d = Symbol.for('react.forward_ref'),
        p = Symbol.for('react.suspense'),
        m = Symbol.for('react.memo'),
        v = Symbol.for('react.lazy'),
        y = Symbol.for('react.activity'),
        S = Symbol.iterator;
    function g(M) {
        return M === null || typeof M != 'object'
            ? null
            : ((M = (S && M[S]) || M['@@iterator']), typeof M == 'function' ? M : null);
    }
    var x = {
            isMounted: function () {
                return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
        },
        b = Object.assign,
        T = {};
    function O(M, H, F) {
        ((this.props = M), (this.context = H), (this.refs = T), (this.updater = F || x));
    }
    ((O.prototype.isReactComponent = {}),
        (O.prototype.setState = function (M, H) {
            if (typeof M != 'object' && typeof M != 'function' && M != null)
                throw Error(
                    'takes an object of state variables to update or a function which returns an object of state variables.',
                );
            this.updater.enqueueSetState(this, M, H, 'setState');
        }),
        (O.prototype.forceUpdate = function (M) {
            this.updater.enqueueForceUpdate(this, M, 'forceUpdate');
        }));
    function L() {}
    L.prototype = O.prototype;
    function D(M, H, F) {
        ((this.props = M), (this.context = H), (this.refs = T), (this.updater = F || x));
    }
    var k = (D.prototype = new L());
    ((k.constructor = D), b(k, O.prototype), (k.isPureReactComponent = !0));
    var C = Array.isArray;
    function X() {}
    var z = { H: null, A: null, T: null, S: null },
        U = Object.prototype.hasOwnProperty;
    function P(M, H, F) {
        var ee = F.ref;
        return { $$typeof: i, type: M, key: H, ref: ee !== void 0 ? ee : null, props: F };
    }
    function se(M, H) {
        return P(M.type, H, M.props);
    }
    function W(M) {
        return typeof M == 'object' && M !== null && M.$$typeof === i;
    }
    function de(M) {
        var H = { '=': '=0', ':': '=2' };
        return (
            '$' +
            M.replace(/[=:]/g, function (F) {
                return H[F];
            })
        );
    }
    var ue = /\/+/g;
    function ne(M, H) {
        return typeof M == 'object' && M !== null && M.key != null ? de('' + M.key) : H.toString(36);
    }
    function I(M) {
        switch (M.status) {
            case 'fulfilled':
                return M.value;
            case 'rejected':
                throw M.reason;
            default:
                switch (
                    (typeof M.status == 'string'
                        ? M.then(X, X)
                        : ((M.status = 'pending'),
                          M.then(
                              function (H) {
                                  M.status === 'pending' && ((M.status = 'fulfilled'), (M.value = H));
                              },
                              function (H) {
                                  M.status === 'pending' && ((M.status = 'rejected'), (M.reason = H));
                              },
                          )),
                    M.status)
                ) {
                    case 'fulfilled':
                        return M.value;
                    case 'rejected':
                        throw M.reason;
                }
        }
        throw M;
    }
    function A(M, H, F, ee, ge) {
        var ye = typeof M;
        (ye === 'undefined' || ye === 'boolean') && (M = null);
        var he = !1;
        if (M === null) he = !0;
        else
            switch (ye) {
                case 'bigint':
                case 'string':
                case 'number':
                    he = !0;
                    break;
                case 'object':
                    switch (M.$$typeof) {
                        case i:
                        case n:
                            he = !0;
                            break;
                        case v:
                            return ((he = M._init), A(he(M._payload), H, F, ee, ge));
                    }
            }
        if (he)
            return (
                (ge = ge(M)),
                (he = ee === '' ? '.' + ne(M, 0) : ee),
                C(ge)
                    ? ((F = ''),
                      he != null && (F = he.replace(ue, '$&/') + '/'),
                      A(ge, H, F, '', function (Me) {
                          return Me;
                      }))
                    : ge != null &&
                      (W(ge) &&
                          (ge = se(
                              ge,
                              F +
                                  (ge.key == null || (M && M.key === ge.key)
                                      ? ''
                                      : ('' + ge.key).replace(ue, '$&/') + '/') +
                                  he,
                          )),
                      H.push(ge)),
                1
            );
        he = 0;
        var Ae = ee === '' ? '.' : ee + ':';
        if (C(M))
            for (var De = 0; De < M.length; De++) ((ee = M[De]), (ye = Ae + ne(ee, De)), (he += A(ee, H, F, ye, ge)));
        else if (((De = g(M)), typeof De == 'function'))
            for (M = De.call(M), De = 0; !(ee = M.next()).done; )
                ((ee = ee.value), (ye = Ae + ne(ee, De++)), (he += A(ee, H, F, ye, ge)));
        else if (ye === 'object') {
            if (typeof M.then == 'function') return A(I(M), H, F, ee, ge);
            throw (
                (H = String(M)),
                Error(
                    'Objects are not valid as a React child (found: ' +
                        (H === '[object Object]' ? 'object with keys {' + Object.keys(M).join(', ') + '}' : H) +
                        '). If you meant to render a collection of children, use an array instead.',
                )
            );
        }
        return he;
    }
    function B(M, H, F) {
        if (M == null) return M;
        var ee = [],
            ge = 0;
        return (
            A(M, ee, '', '', function (ye) {
                return H.call(F, ye, ge++);
            }),
            ee
        );
    }
    function R(M) {
        if (M._status === -1) {
            var H = M._result;
            ((H = H()),
                H.then(
                    function (F) {
                        (M._status === 0 || M._status === -1) && ((M._status = 1), (M._result = F));
                    },
                    function (F) {
                        (M._status === 0 || M._status === -1) && ((M._status = 2), (M._result = F));
                    },
                ),
                M._status === -1 && ((M._status = 0), (M._result = H)));
        }
        if (M._status === 1) return M._result.default;
        throw M._result;
    }
    var $ =
            typeof reportError == 'function'
                ? reportError
                : function (M) {
                      if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
                          var H = new window.ErrorEvent('error', {
                              bubbles: !0,
                              cancelable: !0,
                              message:
                                  typeof M == 'object' && M !== null && typeof M.message == 'string'
                                      ? String(M.message)
                                      : String(M),
                              error: M,
                          });
                          if (!window.dispatchEvent(H)) return;
                      } else if (typeof process == 'object' && typeof process.emit == 'function') {
                          process.emit('uncaughtException', M);
                          return;
                      }
                      console.error(M);
                  },
        fe = {
            map: B,
            forEach: function (M, H, F) {
                B(
                    M,
                    function () {
                        H.apply(this, arguments);
                    },
                    F,
                );
            },
            count: function (M) {
                var H = 0;
                return (
                    B(M, function () {
                        H++;
                    }),
                    H
                );
            },
            toArray: function (M) {
                return (
                    B(M, function (H) {
                        return H;
                    }) || []
                );
            },
            only: function (M) {
                if (!W(M)) throw Error('React.Children.only expected to receive a single React element child.');
                return M;
            },
        };
    return (
        (Re.Activity = y),
        (Re.Children = fe),
        (Re.Component = O),
        (Re.Fragment = r),
        (Re.Profiler = s),
        (Re.PureComponent = D),
        (Re.StrictMode = a),
        (Re.Suspense = p),
        (Re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = z),
        (Re.__COMPILER_RUNTIME = {
            __proto__: null,
            c: function (M) {
                return z.H.useMemoCache(M);
            },
        }),
        (Re.cache = function (M) {
            return function () {
                return M.apply(null, arguments);
            };
        }),
        (Re.cacheSignal = function () {
            return null;
        }),
        (Re.cloneElement = function (M, H, F) {
            if (M == null) throw Error('The argument must be a React element, but you passed ' + M + '.');
            var ee = b({}, M.props),
                ge = M.key;
            if (H != null)
                for (ye in (H.key !== void 0 && (ge = '' + H.key), H))
                    !U.call(H, ye) ||
                        ye === 'key' ||
                        ye === '__self' ||
                        ye === '__source' ||
                        (ye === 'ref' && H.ref === void 0) ||
                        (ee[ye] = H[ye]);
            var ye = arguments.length - 2;
            if (ye === 1) ee.children = F;
            else if (1 < ye) {
                for (var he = Array(ye), Ae = 0; Ae < ye; Ae++) he[Ae] = arguments[Ae + 2];
                ee.children = he;
            }
            return P(M.type, ge, ee);
        }),
        (Re.createContext = function (M) {
            return (
                (M = {
                    $$typeof: f,
                    _currentValue: M,
                    _currentValue2: M,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null,
                }),
                (M.Provider = M),
                (M.Consumer = { $$typeof: u, _context: M }),
                M
            );
        }),
        (Re.createElement = function (M, H, F) {
            var ee,
                ge = {},
                ye = null;
            if (H != null)
                for (ee in (H.key !== void 0 && (ye = '' + H.key), H))
                    U.call(H, ee) && ee !== 'key' && ee !== '__self' && ee !== '__source' && (ge[ee] = H[ee]);
            var he = arguments.length - 2;
            if (he === 1) ge.children = F;
            else if (1 < he) {
                for (var Ae = Array(he), De = 0; De < he; De++) Ae[De] = arguments[De + 2];
                ge.children = Ae;
            }
            if (M && M.defaultProps) for (ee in ((he = M.defaultProps), he)) ge[ee] === void 0 && (ge[ee] = he[ee]);
            return P(M, ye, ge);
        }),
        (Re.createRef = function () {
            return { current: null };
        }),
        (Re.forwardRef = function (M) {
            return { $$typeof: d, render: M };
        }),
        (Re.isValidElement = W),
        (Re.lazy = function (M) {
            return { $$typeof: v, _payload: { _status: -1, _result: M }, _init: R };
        }),
        (Re.memo = function (M, H) {
            return { $$typeof: m, type: M, compare: H === void 0 ? null : H };
        }),
        (Re.startTransition = function (M) {
            var H = z.T,
                F = {};
            z.T = F;
            try {
                var ee = M(),
                    ge = z.S;
                (ge !== null && ge(F, ee),
                    typeof ee == 'object' && ee !== null && typeof ee.then == 'function' && ee.then(X, $));
            } catch (ye) {
                $(ye);
            } finally {
                (H !== null && F.types !== null && (H.types = F.types), (z.T = H));
            }
        }),
        (Re.unstable_useCacheRefresh = function () {
            return z.H.useCacheRefresh();
        }),
        (Re.use = function (M) {
            return z.H.use(M);
        }),
        (Re.useActionState = function (M, H, F) {
            return z.H.useActionState(M, H, F);
        }),
        (Re.useCallback = function (M, H) {
            return z.H.useCallback(M, H);
        }),
        (Re.useContext = function (M) {
            return z.H.useContext(M);
        }),
        (Re.useDebugValue = function () {}),
        (Re.useDeferredValue = function (M, H) {
            return z.H.useDeferredValue(M, H);
        }),
        (Re.useEffect = function (M, H) {
            return z.H.useEffect(M, H);
        }),
        (Re.useEffectEvent = function (M) {
            return z.H.useEffectEvent(M);
        }),
        (Re.useId = function () {
            return z.H.useId();
        }),
        (Re.useImperativeHandle = function (M, H, F) {
            return z.H.useImperativeHandle(M, H, F);
        }),
        (Re.useInsertionEffect = function (M, H) {
            return z.H.useInsertionEffect(M, H);
        }),
        (Re.useLayoutEffect = function (M, H) {
            return z.H.useLayoutEffect(M, H);
        }),
        (Re.useMemo = function (M, H) {
            return z.H.useMemo(M, H);
        }),
        (Re.useOptimistic = function (M, H) {
            return z.H.useOptimistic(M, H);
        }),
        (Re.useReducer = function (M, H, F) {
            return z.H.useReducer(M, H, F);
        }),
        (Re.useRef = function (M) {
            return z.H.useRef(M);
        }),
        (Re.useState = function (M) {
            return z.H.useState(M);
        }),
        (Re.useSyncExternalStore = function (M, H, F) {
            return z.H.useSyncExternalStore(M, H, F);
        }),
        (Re.useTransition = function () {
            return z.H.useTransition();
        }),
        (Re.version = '19.2.0'),
        Re
    );
}
var P0;
function of() {
    return (P0 || ((P0 = 1), (jh.exports = rT())), jh.exports);
}
var E = of();
const $t = af(E),
    Cb = nT({ __proto__: null, default: $t }, [E]);
var Bh = { exports: {} },
    fs = {},
    Hh = { exports: {} },
    Yh = {};
var Q0;
function aT() {
    return (
        Q0 ||
            ((Q0 = 1),
            (function (i) {
                function n(A, B) {
                    var R = A.length;
                    A.push(B);
                    e: for (; 0 < R; ) {
                        var $ = (R - 1) >>> 1,
                            fe = A[$];
                        if (0 < s(fe, B)) ((A[$] = B), (A[R] = fe), (R = $));
                        else break e;
                    }
                }
                function r(A) {
                    return A.length === 0 ? null : A[0];
                }
                function a(A) {
                    if (A.length === 0) return null;
                    var B = A[0],
                        R = A.pop();
                    if (R !== B) {
                        A[0] = R;
                        e: for (var $ = 0, fe = A.length, M = fe >>> 1; $ < M; ) {
                            var H = 2 * ($ + 1) - 1,
                                F = A[H],
                                ee = H + 1,
                                ge = A[ee];
                            if (0 > s(F, R))
                                ee < fe && 0 > s(ge, F)
                                    ? ((A[$] = ge), (A[ee] = R), ($ = ee))
                                    : ((A[$] = F), (A[H] = R), ($ = H));
                            else if (ee < fe && 0 > s(ge, R)) ((A[$] = ge), (A[ee] = R), ($ = ee));
                            else break e;
                        }
                    }
                    return B;
                }
                function s(A, B) {
                    var R = A.sortIndex - B.sortIndex;
                    return R !== 0 ? R : A.id - B.id;
                }
                if (
                    ((i.unstable_now = void 0), typeof performance == 'object' && typeof performance.now == 'function')
                ) {
                    var u = performance;
                    i.unstable_now = function () {
                        return u.now();
                    };
                } else {
                    var f = Date,
                        d = f.now();
                    i.unstable_now = function () {
                        return f.now() - d;
                    };
                }
                var p = [],
                    m = [],
                    v = 1,
                    y = null,
                    S = 3,
                    g = !1,
                    x = !1,
                    b = !1,
                    T = !1,
                    O = typeof setTimeout == 'function' ? setTimeout : null,
                    L = typeof clearTimeout == 'function' ? clearTimeout : null,
                    D = typeof setImmediate < 'u' ? setImmediate : null;
                function k(A) {
                    for (var B = r(m); B !== null; ) {
                        if (B.callback === null) a(m);
                        else if (B.startTime <= A) (a(m), (B.sortIndex = B.expirationTime), n(p, B));
                        else break;
                        B = r(m);
                    }
                }
                function C(A) {
                    if (((b = !1), k(A), !x))
                        if (r(p) !== null) ((x = !0), X || ((X = !0), de()));
                        else {
                            var B = r(m);
                            B !== null && I(C, B.startTime - A);
                        }
                }
                var X = !1,
                    z = -1,
                    U = 5,
                    P = -1;
                function se() {
                    return T ? !0 : !(i.unstable_now() - P < U);
                }
                function W() {
                    if (((T = !1), X)) {
                        var A = i.unstable_now();
                        P = A;
                        var B = !0;
                        try {
                            e: {
                                ((x = !1), b && ((b = !1), L(z), (z = -1)), (g = !0));
                                var R = S;
                                try {
                                    t: {
                                        for (k(A), y = r(p); y !== null && !(y.expirationTime > A && se()); ) {
                                            var $ = y.callback;
                                            if (typeof $ == 'function') {
                                                ((y.callback = null), (S = y.priorityLevel));
                                                var fe = $(y.expirationTime <= A);
                                                if (((A = i.unstable_now()), typeof fe == 'function')) {
                                                    ((y.callback = fe), k(A), (B = !0));
                                                    break t;
                                                }
                                                (y === r(p) && a(p), k(A));
                                            } else a(p);
                                            y = r(p);
                                        }
                                        if (y !== null) B = !0;
                                        else {
                                            var M = r(m);
                                            (M !== null && I(C, M.startTime - A), (B = !1));
                                        }
                                    }
                                    break e;
                                } finally {
                                    ((y = null), (S = R), (g = !1));
                                }
                                B = void 0;
                            }
                        } finally {
                            B ? de() : (X = !1);
                        }
                    }
                }
                var de;
                if (typeof D == 'function')
                    de = function () {
                        D(W);
                    };
                else if (typeof MessageChannel < 'u') {
                    var ue = new MessageChannel(),
                        ne = ue.port2;
                    ((ue.port1.onmessage = W),
                        (de = function () {
                            ne.postMessage(null);
                        }));
                } else
                    de = function () {
                        O(W, 0);
                    };
                function I(A, B) {
                    z = O(function () {
                        A(i.unstable_now());
                    }, B);
                }
                ((i.unstable_IdlePriority = 5),
                    (i.unstable_ImmediatePriority = 1),
                    (i.unstable_LowPriority = 4),
                    (i.unstable_NormalPriority = 3),
                    (i.unstable_Profiling = null),
                    (i.unstable_UserBlockingPriority = 2),
                    (i.unstable_cancelCallback = function (A) {
                        A.callback = null;
                    }),
                    (i.unstable_forceFrameRate = function (A) {
                        0 > A || 125 < A
                            ? console.error(
                                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                              )
                            : (U = 0 < A ? Math.floor(1e3 / A) : 5);
                    }),
                    (i.unstable_getCurrentPriorityLevel = function () {
                        return S;
                    }),
                    (i.unstable_next = function (A) {
                        switch (S) {
                            case 1:
                            case 2:
                            case 3:
                                var B = 3;
                                break;
                            default:
                                B = S;
                        }
                        var R = S;
                        S = B;
                        try {
                            return A();
                        } finally {
                            S = R;
                        }
                    }),
                    (i.unstable_requestPaint = function () {
                        T = !0;
                    }),
                    (i.unstable_runWithPriority = function (A, B) {
                        switch (A) {
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                                break;
                            default:
                                A = 3;
                        }
                        var R = S;
                        S = A;
                        try {
                            return B();
                        } finally {
                            S = R;
                        }
                    }),
                    (i.unstable_scheduleCallback = function (A, B, R) {
                        var $ = i.unstable_now();
                        switch (
                            (typeof R == 'object' && R !== null
                                ? ((R = R.delay), (R = typeof R == 'number' && 0 < R ? $ + R : $))
                                : (R = $),
                            A)
                        ) {
                            case 1:
                                var fe = -1;
                                break;
                            case 2:
                                fe = 250;
                                break;
                            case 5:
                                fe = 1073741823;
                                break;
                            case 4:
                                fe = 1e4;
                                break;
                            default:
                                fe = 5e3;
                        }
                        return (
                            (fe = R + fe),
                            (A = {
                                id: v++,
                                callback: B,
                                priorityLevel: A,
                                startTime: R,
                                expirationTime: fe,
                                sortIndex: -1,
                            }),
                            R > $
                                ? ((A.sortIndex = R),
                                  n(m, A),
                                  r(p) === null && A === r(m) && (b ? (L(z), (z = -1)) : (b = !0), I(C, R - $)))
                                : ((A.sortIndex = fe), n(p, A), x || g || ((x = !0), X || ((X = !0), de()))),
                            A
                        );
                    }),
                    (i.unstable_shouldYield = se),
                    (i.unstable_wrapCallback = function (A) {
                        var B = S;
                        return function () {
                            var R = S;
                            S = B;
                            try {
                                return A.apply(this, arguments);
                            } finally {
                                S = R;
                            }
                        };
                    }));
            })(Yh)),
        Yh
    );
}
var Z0;
function oT() {
    return (Z0 || ((Z0 = 1), (Hh.exports = aT())), Hh.exports);
}
var Gh = { exports: {} },
    mn = {};
var K0;
function sT() {
    if (K0) return mn;
    K0 = 1;
    var i = of();
    function n(p) {
        var m = 'https://react.dev/errors/' + p;
        if (1 < arguments.length) {
            m += '?args[]=' + encodeURIComponent(arguments[1]);
            for (var v = 2; v < arguments.length; v++) m += '&args[]=' + encodeURIComponent(arguments[v]);
        }
        return (
            'Minified React error #' +
            p +
            '; visit ' +
            m +
            ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
        );
    }
    function r() {}
    var a = {
            d: {
                f: r,
                r: function () {
                    throw Error(n(522));
                },
                D: r,
                C: r,
                L: r,
                m: r,
                X: r,
                S: r,
                M: r,
            },
            p: 0,
            findDOMNode: null,
        },
        s = Symbol.for('react.portal');
    function u(p, m, v) {
        var y = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return { $$typeof: s, key: y == null ? null : '' + y, children: p, containerInfo: m, implementation: v };
    }
    var f = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function d(p, m) {
        if (p === 'font') return '';
        if (typeof m == 'string') return m === 'use-credentials' ? m : '';
    }
    return (
        (mn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = a),
        (mn.createPortal = function (p, m) {
            var v = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
            if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)) throw Error(n(299));
            return u(p, m, null, v);
        }),
        (mn.flushSync = function (p) {
            var m = f.T,
                v = a.p;
            try {
                if (((f.T = null), (a.p = 2), p)) return p();
            } finally {
                ((f.T = m), (a.p = v), a.d.f());
            }
        }),
        (mn.preconnect = function (p, m) {
            typeof p == 'string' &&
                (m
                    ? ((m = m.crossOrigin), (m = typeof m == 'string' ? (m === 'use-credentials' ? m : '') : void 0))
                    : (m = null),
                a.d.C(p, m));
        }),
        (mn.prefetchDNS = function (p) {
            typeof p == 'string' && a.d.D(p);
        }),
        (mn.preinit = function (p, m) {
            if (typeof p == 'string' && m && typeof m.as == 'string') {
                var v = m.as,
                    y = d(v, m.crossOrigin),
                    S = typeof m.integrity == 'string' ? m.integrity : void 0,
                    g = typeof m.fetchPriority == 'string' ? m.fetchPriority : void 0;
                v === 'style'
                    ? a.d.S(p, typeof m.precedence == 'string' ? m.precedence : void 0, {
                          crossOrigin: y,
                          integrity: S,
                          fetchPriority: g,
                      })
                    : v === 'script' &&
                      a.d.X(p, {
                          crossOrigin: y,
                          integrity: S,
                          fetchPriority: g,
                          nonce: typeof m.nonce == 'string' ? m.nonce : void 0,
                      });
            }
        }),
        (mn.preinitModule = function (p, m) {
            if (typeof p == 'string')
                if (typeof m == 'object' && m !== null) {
                    if (m.as == null || m.as === 'script') {
                        var v = d(m.as, m.crossOrigin);
                        a.d.M(p, {
                            crossOrigin: v,
                            integrity: typeof m.integrity == 'string' ? m.integrity : void 0,
                            nonce: typeof m.nonce == 'string' ? m.nonce : void 0,
                        });
                    }
                } else m == null && a.d.M(p);
        }),
        (mn.preload = function (p, m) {
            if (typeof p == 'string' && typeof m == 'object' && m !== null && typeof m.as == 'string') {
                var v = m.as,
                    y = d(v, m.crossOrigin);
                a.d.L(p, v, {
                    crossOrigin: y,
                    integrity: typeof m.integrity == 'string' ? m.integrity : void 0,
                    nonce: typeof m.nonce == 'string' ? m.nonce : void 0,
                    type: typeof m.type == 'string' ? m.type : void 0,
                    fetchPriority: typeof m.fetchPriority == 'string' ? m.fetchPriority : void 0,
                    referrerPolicy: typeof m.referrerPolicy == 'string' ? m.referrerPolicy : void 0,
                    imageSrcSet: typeof m.imageSrcSet == 'string' ? m.imageSrcSet : void 0,
                    imageSizes: typeof m.imageSizes == 'string' ? m.imageSizes : void 0,
                    media: typeof m.media == 'string' ? m.media : void 0,
                });
            }
        }),
        (mn.preloadModule = function (p, m) {
            if (typeof p == 'string')
                if (m) {
                    var v = d(m.as, m.crossOrigin);
                    a.d.m(p, {
                        as: typeof m.as == 'string' && m.as !== 'script' ? m.as : void 0,
                        crossOrigin: v,
                        integrity: typeof m.integrity == 'string' ? m.integrity : void 0,
                    });
                } else a.d.m(p);
        }),
        (mn.requestFormReset = function (p) {
            a.d.r(p);
        }),
        (mn.unstable_batchedUpdates = function (p, m) {
            return p(m);
        }),
        (mn.useFormState = function (p, m, v) {
            return f.H.useFormState(p, m, v);
        }),
        (mn.useFormStatus = function () {
            return f.H.useHostTransitionStatus();
        }),
        (mn.version = '19.2.0'),
        mn
    );
}
var $0;
function Db() {
    if ($0) return Gh.exports;
    $0 = 1;
    function i() {
        if (
            !(
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
            )
        )
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
            } catch (n) {
                console.error(n);
            }
    }
    return (i(), (Gh.exports = sT()), Gh.exports);
}
var F0;
function uT() {
    if (F0) return fs;
    F0 = 1;
    var i = oT(),
        n = of(),
        r = Db();
    function a(e) {
        var t = 'https://react.dev/errors/' + e;
        if (1 < arguments.length) {
            t += '?args[]=' + encodeURIComponent(arguments[1]);
            for (var l = 2; l < arguments.length; l++) t += '&args[]=' + encodeURIComponent(arguments[l]);
        }
        return (
            'Minified React error #' +
            e +
            '; visit ' +
            t +
            ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
        );
    }
    function s(e) {
        return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
    }
    function u(e) {
        var t = e,
            l = e;
        if (e.alternate) for (; t.return; ) t = t.return;
        else {
            e = t;
            do ((t = e), (t.flags & 4098) !== 0 && (l = t.return), (e = t.return));
            while (e);
        }
        return t.tag === 3 ? l : null;
    }
    function f(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
                return t.dehydrated;
        }
        return null;
    }
    function d(e) {
        if (e.tag === 31) {
            var t = e.memoizedState;
            if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
                return t.dehydrated;
        }
        return null;
    }
    function p(e) {
        if (u(e) !== e) throw Error(a(188));
    }
    function m(e) {
        var t = e.alternate;
        if (!t) {
            if (((t = u(e)), t === null)) throw Error(a(188));
            return t !== e ? null : e;
        }
        for (var l = e, o = t; ; ) {
            var c = l.return;
            if (c === null) break;
            var h = c.alternate;
            if (h === null) {
                if (((o = c.return), o !== null)) {
                    l = o;
                    continue;
                }
                break;
            }
            if (c.child === h.child) {
                for (h = c.child; h; ) {
                    if (h === l) return (p(c), e);
                    if (h === o) return (p(c), t);
                    h = h.sibling;
                }
                throw Error(a(188));
            }
            if (l.return !== o.return) ((l = c), (o = h));
            else {
                for (var _ = !1, w = c.child; w; ) {
                    if (w === l) {
                        ((_ = !0), (l = c), (o = h));
                        break;
                    }
                    if (w === o) {
                        ((_ = !0), (o = c), (l = h));
                        break;
                    }
                    w = w.sibling;
                }
                if (!_) {
                    for (w = h.child; w; ) {
                        if (w === l) {
                            ((_ = !0), (l = h), (o = c));
                            break;
                        }
                        if (w === o) {
                            ((_ = !0), (o = h), (l = c));
                            break;
                        }
                        w = w.sibling;
                    }
                    if (!_) throw Error(a(189));
                }
            }
            if (l.alternate !== o) throw Error(a(190));
        }
        if (l.tag !== 3) throw Error(a(188));
        return l.stateNode.current === l ? e : t;
    }
    function v(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return e;
        for (e = e.child; e !== null; ) {
            if (((t = v(e)), t !== null)) return t;
            e = e.sibling;
        }
        return null;
    }
    var y = Object.assign,
        S = Symbol.for('react.element'),
        g = Symbol.for('react.transitional.element'),
        x = Symbol.for('react.portal'),
        b = Symbol.for('react.fragment'),
        T = Symbol.for('react.strict_mode'),
        O = Symbol.for('react.profiler'),
        L = Symbol.for('react.consumer'),
        D = Symbol.for('react.context'),
        k = Symbol.for('react.forward_ref'),
        C = Symbol.for('react.suspense'),
        X = Symbol.for('react.suspense_list'),
        z = Symbol.for('react.memo'),
        U = Symbol.for('react.lazy'),
        P = Symbol.for('react.activity'),
        se = Symbol.for('react.memo_cache_sentinel'),
        W = Symbol.iterator;
    function de(e) {
        return e === null || typeof e != 'object'
            ? null
            : ((e = (W && e[W]) || e['@@iterator']), typeof e == 'function' ? e : null);
    }
    var ue = Symbol.for('react.client.reference');
    function ne(e) {
        if (e == null) return null;
        if (typeof e == 'function') return e.$$typeof === ue ? null : e.displayName || e.name || null;
        if (typeof e == 'string') return e;
        switch (e) {
            case b:
                return 'Fragment';
            case O:
                return 'Profiler';
            case T:
                return 'StrictMode';
            case C:
                return 'Suspense';
            case X:
                return 'SuspenseList';
            case P:
                return 'Activity';
        }
        if (typeof e == 'object')
            switch (e.$$typeof) {
                case x:
                    return 'Portal';
                case D:
                    return e.displayName || 'Context';
                case L:
                    return (e._context.displayName || 'Context') + '.Consumer';
                case k:
                    var t = e.render;
                    return (
                        (e = e.displayName),
                        e ||
                            ((e = t.displayName || t.name || ''),
                            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
                        e
                    );
                case z:
                    return ((t = e.displayName || null), t !== null ? t : ne(e.type) || 'Memo');
                case U:
                    ((t = e._payload), (e = e._init));
                    try {
                        return ne(e(t));
                    } catch {}
            }
        return null;
    }
    var I = Array.isArray,
        A = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        B = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        R = { pending: !1, data: null, method: null, action: null },
        $ = [],
        fe = -1;
    function M(e) {
        return { current: e };
    }
    function H(e) {
        0 > fe || ((e.current = $[fe]), ($[fe] = null), fe--);
    }
    function F(e, t) {
        (fe++, ($[fe] = e.current), (e.current = t));
    }
    var ee = M(null),
        ge = M(null),
        ye = M(null),
        he = M(null);
    function Ae(e, t) {
        switch ((F(ye, t), F(ge, e), F(ee, null), t.nodeType)) {
            case 9:
            case 11:
                e = (e = t.documentElement) && (e = e.namespaceURI) ? f0(e) : 0;
                break;
            default:
                if (((e = t.tagName), (t = t.namespaceURI))) ((t = f0(t)), (e = d0(t, e)));
                else
                    switch (e) {
                        case 'svg':
                            e = 1;
                            break;
                        case 'math':
                            e = 2;
                            break;
                        default:
                            e = 0;
                    }
        }
        (H(ee), F(ee, e));
    }
    function De() {
        (H(ee), H(ge), H(ye));
    }
    function Me(e) {
        e.memoizedState !== null && F(he, e);
        var t = ee.current,
            l = d0(t, e.type);
        t !== l && (F(ge, e), F(ee, l));
    }
    function Pe(e) {
        (ge.current === e && (H(ee), H(ge)), he.current === e && (H(he), (as._currentValue = R)));
    }
    var Ge, gt;
    function We(e) {
        if (Ge === void 0)
            try {
                throw Error();
            } catch (l) {
                var t = l.stack.trim().match(/\n( *(at )?)/);
                ((Ge = (t && t[1]) || ''),
                    (gt =
                        -1 <
                        l.stack.indexOf(`
    at`)
                            ? ' (<anonymous>)'
                            : -1 < l.stack.indexOf('@')
                              ? '@unknown:0:0'
                              : ''));
            }
        return (
            `
` +
            Ge +
            e +
            gt
        );
    }
    var Le = !1;
    function Si(e, t) {
        if (!e || Le) return '';
        Le = !0;
        var l = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var o = {
                DetermineComponentFrameRoot: function () {
                    try {
                        if (t) {
                            var oe = function () {
                                throw Error();
                            };
                            if (
                                (Object.defineProperty(oe.prototype, 'props', {
                                    set: function () {
                                        throw Error();
                                    },
                                }),
                                typeof Reflect == 'object' && Reflect.construct)
                            ) {
                                try {
                                    Reflect.construct(oe, []);
                                } catch (J) {
                                    var K = J;
                                }
                                Reflect.construct(e, [], oe);
                            } else {
                                try {
                                    oe.call();
                                } catch (J) {
                                    K = J;
                                }
                                e.call(oe.prototype);
                            }
                        } else {
                            try {
                                throw Error();
                            } catch (J) {
                                K = J;
                            }
                            (oe = e()) && typeof oe.catch == 'function' && oe.catch(function () {});
                        }
                    } catch (J) {
                        if (J && K && typeof J.stack == 'string') return [J.stack, K.stack];
                    }
                    return [null, null];
                },
            };
            o.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
            var c = Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot, 'name');
            c &&
                c.configurable &&
                Object.defineProperty(o.DetermineComponentFrameRoot, 'name', { value: 'DetermineComponentFrameRoot' });
            var h = o.DetermineComponentFrameRoot(),
                _ = h[0],
                w = h[1];
            if (_ && w) {
                var N = _.split(`
`),
                    Z = w.split(`
`);
                for (c = o = 0; o < N.length && !N[o].includes('DetermineComponentFrameRoot'); ) o++;
                for (; c < Z.length && !Z[c].includes('DetermineComponentFrameRoot'); ) c++;
                if (o === N.length || c === Z.length)
                    for (o = N.length - 1, c = Z.length - 1; 1 <= o && 0 <= c && N[o] !== Z[c]; ) c--;
                for (; 1 <= o && 0 <= c; o--, c--)
                    if (N[o] !== Z[c]) {
                        if (o !== 1 || c !== 1)
                            do
                                if ((o--, c--, 0 > c || N[o] !== Z[c])) {
                                    var ie =
                                        `
` + N[o].replace(' at new ', ' at ');
                                    return (
                                        e.displayName &&
                                            ie.includes('<anonymous>') &&
                                            (ie = ie.replace('<anonymous>', e.displayName)),
                                        ie
                                    );
                                }
                            while (1 <= o && 0 <= c);
                        break;
                    }
            }
        } finally {
            ((Le = !1), (Error.prepareStackTrace = l));
        }
        return (l = e ? e.displayName || e.name : '') ? We(l) : '';
    }
    function lt(e, t) {
        switch (e.tag) {
            case 26:
            case 27:
            case 5:
                return We(e.type);
            case 16:
                return We('Lazy');
            case 13:
                return e.child !== t && t !== null ? We('Suspense Fallback') : We('Suspense');
            case 19:
                return We('SuspenseList');
            case 0:
            case 15:
                return Si(e.type, !1);
            case 11:
                return Si(e.type.render, !1);
            case 1:
                return Si(e.type, !0);
            case 31:
                return We('Activity');
            default:
                return '';
        }
    }
    function jt(e) {
        try {
            var t = '',
                l = null;
            do ((t += lt(e, l)), (l = e), (e = e.return));
            while (e);
            return t;
        } catch (o) {
            return (
                `
Error generating stack: ` +
                o.message +
                `
` +
                o.stack
            );
        }
    }
    var wn = Object.prototype.hasOwnProperty,
        sn = i.unstable_scheduleCallback,
        rt = i.unstable_cancelCallback,
        Mt = i.unstable_shouldYield,
        Ki = i.unstable_requestPaint,
        vt = i.unstable_now,
        $i = i.unstable_getCurrentPriorityLevel,
        Pt = i.unstable_ImmediatePriority,
        un = i.unstable_UserBlockingPriority,
        Wt = i.unstable_NormalPriority,
        Fi = i.unstable_LowPriority,
        En = i.unstable_IdlePriority,
        Ni = i.log,
        Nl = i.unstable_setDisableYieldValue,
        vn = null,
        bt = null;
    function nt(e) {
        if ((typeof Ni == 'function' && Nl(e), bt && typeof bt.setStrictMode == 'function'))
            try {
                bt.setStrictMode(vn, e);
            } catch {}
    }
    var Ie = Math.clz32 ? Math.clz32 : cn,
        Ii = Math.log,
        jn = Math.LN2;
    function cn(e) {
        return ((e >>>= 0), e === 0 ? 32 : (31 - ((Ii(e) / jn) | 0)) | 0);
    }
    var fn = 256,
        Et = 262144,
        dn = 4194304;
    function en(e) {
        var t = e & 42;
        if (t !== 0) return t;
        switch (e & -e) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
                return 64;
            case 128:
                return 128;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
                return e & 261888;
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return e & 3932160;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return e & 62914560;
            case 67108864:
                return 67108864;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 0;
            default:
                return e;
        }
    }
    function Bn(e, t, l) {
        var o = e.pendingLanes;
        if (o === 0) return 0;
        var c = 0,
            h = e.suspendedLanes,
            _ = e.pingedLanes;
        e = e.warmLanes;
        var w = o & 134217727;
        return (
            w !== 0
                ? ((o = w & ~h),
                  o !== 0
                      ? (c = en(o))
                      : ((_ &= w), _ !== 0 ? (c = en(_)) : l || ((l = w & ~e), l !== 0 && (c = en(l)))))
                : ((w = o & ~h),
                  w !== 0 ? (c = en(w)) : _ !== 0 ? (c = en(_)) : l || ((l = o & ~e), l !== 0 && (c = en(l)))),
            c === 0
                ? 0
                : t !== 0 &&
                    t !== c &&
                    (t & h) === 0 &&
                    ((h = c & -c), (l = t & -t), h >= l || (h === 32 && (l & 4194048) !== 0))
                  ? t
                  : c
        );
    }
    function be(e, t) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function j(e, t) {
        switch (e) {
            case 1:
            case 2:
            case 4:
            case 8:
            case 64:
                return t + 250;
            case 16:
            case 32:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return -1;
            case 67108864:
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1;
        }
    }
    function re() {
        var e = dn;
        return ((dn <<= 1), (dn & 62914560) === 0 && (dn = 4194304), e);
    }
    function G(e) {
        for (var t = [], l = 0; 31 > l; l++) t.push(e);
        return t;
    }
    function te(e, t) {
        ((e.pendingLanes |= t), t !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
    }
    function me(e, t, l, o, c, h) {
        var _ = e.pendingLanes;
        ((e.pendingLanes = l),
            (e.suspendedLanes = 0),
            (e.pingedLanes = 0),
            (e.warmLanes = 0),
            (e.expiredLanes &= l),
            (e.entangledLanes &= l),
            (e.errorRecoveryDisabledLanes &= l),
            (e.shellSuspendCounter = 0));
        var w = e.entanglements,
            N = e.expirationTimes,
            Z = e.hiddenUpdates;
        for (l = _ & ~l; 0 < l; ) {
            var ie = 31 - Ie(l),
                oe = 1 << ie;
            ((w[ie] = 0), (N[ie] = -1));
            var K = Z[ie];
            if (K !== null)
                for (Z[ie] = null, ie = 0; ie < K.length; ie++) {
                    var J = K[ie];
                    J !== null && (J.lane &= -536870913);
                }
            l &= ~oe;
        }
        (o !== 0 && ve(e, o, 0), h !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= h & ~(_ & ~t)));
    }
    function ve(e, t, l) {
        ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
        var o = 31 - Ie(t);
        ((e.entangledLanes |= t), (e.entanglements[o] = e.entanglements[o] | 1073741824 | (l & 261930)));
    }
    function ae(e, t) {
        var l = (e.entangledLanes |= t);
        for (e = e.entanglements; l; ) {
            var o = 31 - Ie(l),
                c = 1 << o;
            ((c & t) | (e[o] & t) && (e[o] |= t), (l &= ~c));
        }
    }
    function ce(e, t) {
        var l = t & -t;
        return ((l = (l & 42) !== 0 ? 1 : pe(l)), (l & (e.suspendedLanes | t)) !== 0 ? 0 : l);
    }
    function pe(e) {
        switch (e) {
            case 2:
                e = 1;
                break;
            case 8:
                e = 4;
                break;
            case 32:
                e = 16;
                break;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                e = 128;
                break;
            case 268435456:
                e = 134217728;
                break;
            default:
                e = 0;
        }
        return e;
    }
    function _e(e) {
        return ((e &= -e), 2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2);
    }
    function Ce() {
        var e = B.p;
        return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : k0(e.type));
    }
    function Qe(e, t) {
        var l = B.p;
        try {
            return ((B.p = e), t());
        } finally {
            B.p = l;
        }
    }
    var Xe = Math.random().toString(36).slice(2),
        ze = '__reactFiber$' + Xe,
        Ue = '__reactProps$' + Xe,
        je = '__reactContainer$' + Xe,
        st = '__reactEvents$' + Xe,
        St = '__reactListeners$' + Xe,
        wr = '__reactHandles$' + Xe,
        tn = '__reactResources$' + Xe,
        Ll = '__reactMarker$' + Xe;
    function aa(e) {
        (delete e[ze], delete e[Ue], delete e[st], delete e[St], delete e[wr]);
    }
    function Ji(e) {
        var t = e[ze];
        if (t) return t;
        for (var l = e.parentNode; l; ) {
            if ((t = l[je] || l[ze])) {
                if (((l = t.alternate), t.child !== null || (l !== null && l.child !== null)))
                    for (e = _0(e); e !== null; ) {
                        if ((l = e[ze])) return l;
                        e = _0(e);
                    }
                return t;
            }
            ((e = l), (l = e.parentNode));
        }
        return null;
    }
    function Wi(e) {
        if ((e = e[ze] || e[je])) {
            var t = e.tag;
            if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
        }
        return null;
    }
    function Ze(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
        throw Error(a(33));
    }
    function hn(e) {
        var t = e[tn];
        return (t || (t = e[tn] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t);
    }
    function Ot(e) {
        e[Ll] = !0;
    }
    var kl = new Set(),
        eu = {};
    function xi(e, t) {
        (oa(e, t), oa(e + 'Capture', t));
    }
    function oa(e, t) {
        for (eu[e] = t, e = 0; e < t.length; e++) kl.add(t[e]);
    }
    var Zx = RegExp(
            '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$',
        ),
        tg = {},
        ng = {};
    function Kx(e) {
        return wn.call(ng, e) ? !0 : wn.call(tg, e) ? !1 : Zx.test(e) ? (ng[e] = !0) : ((tg[e] = !0), !1);
    }
    function tu(e, t, l) {
        if (Kx(t))
            if (l === null) e.removeAttribute(t);
            else {
                switch (typeof l) {
                    case 'undefined':
                    case 'function':
                    case 'symbol':
                        e.removeAttribute(t);
                        return;
                    case 'boolean':
                        var o = t.toLowerCase().slice(0, 5);
                        if (o !== 'data-' && o !== 'aria-') {
                            e.removeAttribute(t);
                            return;
                        }
                }
                e.setAttribute(t, '' + l);
            }
    }
    function nu(e, t, l) {
        if (l === null) e.removeAttribute(t);
        else {
            switch (typeof l) {
                case 'undefined':
                case 'function':
                case 'symbol':
                case 'boolean':
                    e.removeAttribute(t);
                    return;
            }
            e.setAttribute(t, '' + l);
        }
    }
    function el(e, t, l, o) {
        if (o === null) e.removeAttribute(l);
        else {
            switch (typeof o) {
                case 'undefined':
                case 'function':
                case 'symbol':
                case 'boolean':
                    e.removeAttribute(l);
                    return;
            }
            e.setAttributeNS(t, l, '' + o);
        }
    }
    function ii(e) {
        switch (typeof e) {
            case 'bigint':
            case 'boolean':
            case 'number':
            case 'string':
            case 'undefined':
                return e;
            case 'object':
                return e;
            default:
                return '';
        }
    }
    function ig(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
    }
    function $x(e, t, l) {
        var o = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
        if (!e.hasOwnProperty(t) && typeof o < 'u' && typeof o.get == 'function' && typeof o.set == 'function') {
            var c = o.get,
                h = o.set;
            return (
                Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                        return c.call(this);
                    },
                    set: function (_) {
                        ((l = '' + _), h.call(this, _));
                    },
                }),
                Object.defineProperty(e, t, { enumerable: o.enumerable }),
                {
                    getValue: function () {
                        return l;
                    },
                    setValue: function (_) {
                        l = '' + _;
                    },
                    stopTracking: function () {
                        ((e._valueTracker = null), delete e[t]);
                    },
                }
            );
        }
    }
    function Cf(e) {
        if (!e._valueTracker) {
            var t = ig(e) ? 'checked' : 'value';
            e._valueTracker = $x(e, t, '' + e[t]);
        }
    }
    function lg(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var l = t.getValue(),
            o = '';
        return (
            e && (o = ig(e) ? (e.checked ? 'true' : 'false') : e.value),
            (e = o),
            e !== l ? (t.setValue(e), !0) : !1
        );
    }
    function iu(e) {
        if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
        try {
            return e.activeElement || e.body;
        } catch {
            return e.body;
        }
    }
    var Fx = /[\n"\\]/g;
    function li(e) {
        return e.replace(Fx, function (t) {
            return '\\' + t.charCodeAt(0).toString(16) + ' ';
        });
    }
    function Df(e, t, l, o, c, h, _, w) {
        ((e.name = ''),
            _ != null && typeof _ != 'function' && typeof _ != 'symbol' && typeof _ != 'boolean'
                ? (e.type = _)
                : e.removeAttribute('type'),
            t != null
                ? _ === 'number'
                    ? ((t === 0 && e.value === '') || e.value != t) && (e.value = '' + ii(t))
                    : e.value !== '' + ii(t) && (e.value = '' + ii(t))
                : (_ !== 'submit' && _ !== 'reset') || e.removeAttribute('value'),
            t != null ? Rf(e, _, ii(t)) : l != null ? Rf(e, _, ii(l)) : o != null && e.removeAttribute('value'),
            c == null && h != null && (e.defaultChecked = !!h),
            c != null && (e.checked = c && typeof c != 'function' && typeof c != 'symbol'),
            w != null && typeof w != 'function' && typeof w != 'symbol' && typeof w != 'boolean'
                ? (e.name = '' + ii(w))
                : e.removeAttribute('name'));
    }
    function rg(e, t, l, o, c, h, _, w) {
        if (
            (h != null && typeof h != 'function' && typeof h != 'symbol' && typeof h != 'boolean' && (e.type = h),
            t != null || l != null)
        ) {
            if (!((h !== 'submit' && h !== 'reset') || t != null)) {
                Cf(e);
                return;
            }
            ((l = l != null ? '' + ii(l) : ''),
                (t = t != null ? '' + ii(t) : l),
                w || t === e.value || (e.value = t),
                (e.defaultValue = t));
        }
        ((o = o ?? c),
            (o = typeof o != 'function' && typeof o != 'symbol' && !!o),
            (e.checked = w ? e.checked : !!o),
            (e.defaultChecked = !!o),
            _ != null && typeof _ != 'function' && typeof _ != 'symbol' && typeof _ != 'boolean' && (e.name = _),
            Cf(e));
    }
    function Rf(e, t, l) {
        (t === 'number' && iu(e.ownerDocument) === e) || e.defaultValue === '' + l || (e.defaultValue = '' + l);
    }
    function sa(e, t, l, o) {
        if (((e = e.options), t)) {
            t = {};
            for (var c = 0; c < l.length; c++) t['$' + l[c]] = !0;
            for (l = 0; l < e.length; l++)
                ((c = t.hasOwnProperty('$' + e[l].value)),
                    e[l].selected !== c && (e[l].selected = c),
                    c && o && (e[l].defaultSelected = !0));
        } else {
            for (l = '' + ii(l), t = null, c = 0; c < e.length; c++) {
                if (e[c].value === l) {
                    ((e[c].selected = !0), o && (e[c].defaultSelected = !0));
                    return;
                }
                t !== null || e[c].disabled || (t = e[c]);
            }
            t !== null && (t.selected = !0);
        }
    }
    function ag(e, t, l) {
        if (t != null && ((t = '' + ii(t)), t !== e.value && (e.value = t), l == null)) {
            e.defaultValue !== t && (e.defaultValue = t);
            return;
        }
        e.defaultValue = l != null ? '' + ii(l) : '';
    }
    function og(e, t, l, o) {
        if (t == null) {
            if (o != null) {
                if (l != null) throw Error(a(92));
                if (I(o)) {
                    if (1 < o.length) throw Error(a(93));
                    o = o[0];
                }
                l = o;
            }
            (l == null && (l = ''), (t = l));
        }
        ((l = ii(t)),
            (e.defaultValue = l),
            (o = e.textContent),
            o === l && o !== '' && o !== null && (e.value = o),
            Cf(e));
    }
    function ua(e, t) {
        if (t) {
            var l = e.firstChild;
            if (l && l === e.lastChild && l.nodeType === 3) {
                l.nodeValue = t;
                return;
            }
        }
        e.textContent = t;
    }
    var Ix = new Set(
        'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
            ' ',
        ),
    );
    function sg(e, t, l) {
        var o = t.indexOf('--') === 0;
        l == null || typeof l == 'boolean' || l === ''
            ? o
                ? e.setProperty(t, '')
                : t === 'float'
                  ? (e.cssFloat = '')
                  : (e[t] = '')
            : o
              ? e.setProperty(t, l)
              : typeof l != 'number' || l === 0 || Ix.has(t)
                ? t === 'float'
                    ? (e.cssFloat = l)
                    : (e[t] = ('' + l).trim())
                : (e[t] = l + 'px');
    }
    function ug(e, t, l) {
        if (t != null && typeof t != 'object') throw Error(a(62));
        if (((e = e.style), l != null)) {
            for (var o in l)
                !l.hasOwnProperty(o) ||
                    (t != null && t.hasOwnProperty(o)) ||
                    (o.indexOf('--') === 0 ? e.setProperty(o, '') : o === 'float' ? (e.cssFloat = '') : (e[o] = ''));
            for (var c in t) ((o = t[c]), t.hasOwnProperty(c) && l[c] !== o && sg(e, c, o));
        } else for (var h in t) t.hasOwnProperty(h) && sg(e, h, t[h]);
    }
    function zf(e) {
        if (e.indexOf('-') === -1) return !1;
        switch (e) {
            case 'annotation-xml':
            case 'color-profile':
            case 'font-face':
            case 'font-face-src':
            case 'font-face-uri':
            case 'font-face-format':
            case 'font-face-name':
            case 'missing-glyph':
                return !1;
            default:
                return !0;
        }
    }
    var Jx = new Map([
            ['acceptCharset', 'accept-charset'],
            ['htmlFor', 'for'],
            ['httpEquiv', 'http-equiv'],
            ['crossOrigin', 'crossorigin'],
            ['accentHeight', 'accent-height'],
            ['alignmentBaseline', 'alignment-baseline'],
            ['arabicForm', 'arabic-form'],
            ['baselineShift', 'baseline-shift'],
            ['capHeight', 'cap-height'],
            ['clipPath', 'clip-path'],
            ['clipRule', 'clip-rule'],
            ['colorInterpolation', 'color-interpolation'],
            ['colorInterpolationFilters', 'color-interpolation-filters'],
            ['colorProfile', 'color-profile'],
            ['colorRendering', 'color-rendering'],
            ['dominantBaseline', 'dominant-baseline'],
            ['enableBackground', 'enable-background'],
            ['fillOpacity', 'fill-opacity'],
            ['fillRule', 'fill-rule'],
            ['floodColor', 'flood-color'],
            ['floodOpacity', 'flood-opacity'],
            ['fontFamily', 'font-family'],
            ['fontSize', 'font-size'],
            ['fontSizeAdjust', 'font-size-adjust'],
            ['fontStretch', 'font-stretch'],
            ['fontStyle', 'font-style'],
            ['fontVariant', 'font-variant'],
            ['fontWeight', 'font-weight'],
            ['glyphName', 'glyph-name'],
            ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
            ['glyphOrientationVertical', 'glyph-orientation-vertical'],
            ['horizAdvX', 'horiz-adv-x'],
            ['horizOriginX', 'horiz-origin-x'],
            ['imageRendering', 'image-rendering'],
            ['letterSpacing', 'letter-spacing'],
            ['lightingColor', 'lighting-color'],
            ['markerEnd', 'marker-end'],
            ['markerMid', 'marker-mid'],
            ['markerStart', 'marker-start'],
            ['overlinePosition', 'overline-position'],
            ['overlineThickness', 'overline-thickness'],
            ['paintOrder', 'paint-order'],
            ['panose-1', 'panose-1'],
            ['pointerEvents', 'pointer-events'],
            ['renderingIntent', 'rendering-intent'],
            ['shapeRendering', 'shape-rendering'],
            ['stopColor', 'stop-color'],
            ['stopOpacity', 'stop-opacity'],
            ['strikethroughPosition', 'strikethrough-position'],
            ['strikethroughThickness', 'strikethrough-thickness'],
            ['strokeDasharray', 'stroke-dasharray'],
            ['strokeDashoffset', 'stroke-dashoffset'],
            ['strokeLinecap', 'stroke-linecap'],
            ['strokeLinejoin', 'stroke-linejoin'],
            ['strokeMiterlimit', 'stroke-miterlimit'],
            ['strokeOpacity', 'stroke-opacity'],
            ['strokeWidth', 'stroke-width'],
            ['textAnchor', 'text-anchor'],
            ['textDecoration', 'text-decoration'],
            ['textRendering', 'text-rendering'],
            ['transformOrigin', 'transform-origin'],
            ['underlinePosition', 'underline-position'],
            ['underlineThickness', 'underline-thickness'],
            ['unicodeBidi', 'unicode-bidi'],
            ['unicodeRange', 'unicode-range'],
            ['unitsPerEm', 'units-per-em'],
            ['vAlphabetic', 'v-alphabetic'],
            ['vHanging', 'v-hanging'],
            ['vIdeographic', 'v-ideographic'],
            ['vMathematical', 'v-mathematical'],
            ['vectorEffect', 'vector-effect'],
            ['vertAdvY', 'vert-adv-y'],
            ['vertOriginX', 'vert-origin-x'],
            ['vertOriginY', 'vert-origin-y'],
            ['wordSpacing', 'word-spacing'],
            ['writingMode', 'writing-mode'],
            ['xmlnsXlink', 'xmlns:xlink'],
            ['xHeight', 'x-height'],
        ]),
        Wx =
            /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function lu(e) {
        return Wx.test('' + e)
            ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
            : e;
    }
    function tl() {}
    var Nf = null;
    function Lf(e) {
        return (
            (e = e.target || e.srcElement || window),
            e.correspondingUseElement && (e = e.correspondingUseElement),
            e.nodeType === 3 ? e.parentNode : e
        );
    }
    var ca = null,
        fa = null;
    function cg(e) {
        var t = Wi(e);
        if (t && (e = t.stateNode)) {
            var l = e[Ue] || null;
            e: switch (((e = t.stateNode), t.type)) {
                case 'input':
                    if (
                        (Df(e, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name),
                        (t = l.name),
                        l.type === 'radio' && t != null)
                    ) {
                        for (l = e; l.parentNode; ) l = l.parentNode;
                        for (
                            l = l.querySelectorAll('input[name="' + li('' + t) + '"][type="radio"]'), t = 0;
                            t < l.length;
                            t++
                        ) {
                            var o = l[t];
                            if (o !== e && o.form === e.form) {
                                var c = o[Ue] || null;
                                if (!c) throw Error(a(90));
                                Df(
                                    o,
                                    c.value,
                                    c.defaultValue,
                                    c.defaultValue,
                                    c.checked,
                                    c.defaultChecked,
                                    c.type,
                                    c.name,
                                );
                            }
                        }
                        for (t = 0; t < l.length; t++) ((o = l[t]), o.form === e.form && lg(o));
                    }
                    break e;
                case 'textarea':
                    ag(e, l.value, l.defaultValue);
                    break e;
                case 'select':
                    ((t = l.value), t != null && sa(e, !!l.multiple, t, !1));
            }
        }
    }
    var kf = !1;
    function fg(e, t, l) {
        if (kf) return e(t, l);
        kf = !0;
        try {
            var o = e(t);
            return o;
        } finally {
            if (
                ((kf = !1),
                (ca !== null || fa !== null) && (Pu(), ca && ((t = ca), (e = fa), (fa = ca = null), cg(t), e)))
            )
                for (t = 0; t < e.length; t++) cg(e[t]);
        }
    }
    function wo(e, t) {
        var l = e.stateNode;
        if (l === null) return null;
        var o = l[Ue] || null;
        if (o === null) return null;
        l = o[t];
        e: switch (t) {
            case 'onClick':
            case 'onClickCapture':
            case 'onDoubleClick':
            case 'onDoubleClickCapture':
            case 'onMouseDown':
            case 'onMouseDownCapture':
            case 'onMouseMove':
            case 'onMouseMoveCapture':
            case 'onMouseUp':
            case 'onMouseUpCapture':
            case 'onMouseEnter':
                ((o = !o.disabled) ||
                    ((e = e.type), (o = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
                    (e = !o));
                break e;
            default:
                e = !1;
        }
        if (e) return null;
        if (l && typeof l != 'function') throw Error(a(231, t, typeof l));
        return l;
    }
    var nl = !(typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'),
        Uf = !1;
    if (nl)
        try {
            var Eo = {};
            (Object.defineProperty(Eo, 'passive', {
                get: function () {
                    Uf = !0;
                },
            }),
                window.addEventListener('test', Eo, Eo),
                window.removeEventListener('test', Eo, Eo));
        } catch {
            Uf = !1;
        }
    var Ul = null,
        jf = null,
        ru = null;
    function dg() {
        if (ru) return ru;
        var e,
            t = jf,
            l = t.length,
            o,
            c = 'value' in Ul ? Ul.value : Ul.textContent,
            h = c.length;
        for (e = 0; e < l && t[e] === c[e]; e++);
        var _ = l - e;
        for (o = 1; o <= _ && t[l - o] === c[h - o]; o++);
        return (ru = c.slice(e, 1 < o ? 1 - o : void 0));
    }
    function au(e) {
        var t = e.keyCode;
        return (
            'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
            e === 10 && (e = 13),
            32 <= e || e === 13 ? e : 0
        );
    }
    function ou() {
        return !0;
    }
    function hg() {
        return !1;
    }
    function Tn(e) {
        function t(l, o, c, h, _) {
            ((this._reactName = l),
                (this._targetInst = c),
                (this.type = o),
                (this.nativeEvent = h),
                (this.target = _),
                (this.currentTarget = null));
            for (var w in e) e.hasOwnProperty(w) && ((l = e[w]), (this[w] = l ? l(h) : h[w]));
            return (
                (this.isDefaultPrevented = (h.defaultPrevented != null ? h.defaultPrevented : h.returnValue === !1)
                    ? ou
                    : hg),
                (this.isPropagationStopped = hg),
                this
            );
        }
        return (
            y(t.prototype, {
                preventDefault: function () {
                    this.defaultPrevented = !0;
                    var l = this.nativeEvent;
                    l &&
                        (l.preventDefault
                            ? l.preventDefault()
                            : typeof l.returnValue != 'unknown' && (l.returnValue = !1),
                        (this.isDefaultPrevented = ou));
                },
                stopPropagation: function () {
                    var l = this.nativeEvent;
                    l &&
                        (l.stopPropagation
                            ? l.stopPropagation()
                            : typeof l.cancelBubble != 'unknown' && (l.cancelBubble = !0),
                        (this.isPropagationStopped = ou));
                },
                persist: function () {},
                isPersistent: ou,
            }),
            t
        );
    }
    var Er = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
                return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
        },
        su = Tn(Er),
        To = y({}, Er, { view: 0, detail: 0 }),
        ew = Tn(To),
        Bf,
        Hf,
        Ao,
        uu = y({}, To, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Gf,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
                return e.relatedTarget === void 0
                    ? e.fromElement === e.srcElement
                        ? e.toElement
                        : e.fromElement
                    : e.relatedTarget;
            },
            movementX: function (e) {
                return 'movementX' in e
                    ? e.movementX
                    : (e !== Ao &&
                          (Ao && e.type === 'mousemove'
                              ? ((Bf = e.screenX - Ao.screenX), (Hf = e.screenY - Ao.screenY))
                              : (Hf = Bf = 0),
                          (Ao = e)),
                      Bf);
            },
            movementY: function (e) {
                return 'movementY' in e ? e.movementY : Hf;
            },
        }),
        mg = Tn(uu),
        tw = y({}, uu, { dataTransfer: 0 }),
        nw = Tn(tw),
        iw = y({}, To, { relatedTarget: 0 }),
        Yf = Tn(iw),
        lw = y({}, Er, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
        rw = Tn(lw),
        aw = y({}, Er, {
            clipboardData: function (e) {
                return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
            },
        }),
        ow = Tn(aw),
        sw = y({}, Er, { data: 0 }),
        pg = Tn(sw),
        uw = {
            Esc: 'Escape',
            Spacebar: ' ',
            Left: 'ArrowLeft',
            Up: 'ArrowUp',
            Right: 'ArrowRight',
            Down: 'ArrowDown',
            Del: 'Delete',
            Win: 'OS',
            Menu: 'ContextMenu',
            Apps: 'ContextMenu',
            Scroll: 'ScrollLock',
            MozPrintableKey: 'Unidentified',
        },
        cw = {
            8: 'Backspace',
            9: 'Tab',
            12: 'Clear',
            13: 'Enter',
            16: 'Shift',
            17: 'Control',
            18: 'Alt',
            19: 'Pause',
            20: 'CapsLock',
            27: 'Escape',
            32: ' ',
            33: 'PageUp',
            34: 'PageDown',
            35: 'End',
            36: 'Home',
            37: 'ArrowLeft',
            38: 'ArrowUp',
            39: 'ArrowRight',
            40: 'ArrowDown',
            45: 'Insert',
            46: 'Delete',
            112: 'F1',
            113: 'F2',
            114: 'F3',
            115: 'F4',
            116: 'F5',
            117: 'F6',
            118: 'F7',
            119: 'F8',
            120: 'F9',
            121: 'F10',
            122: 'F11',
            123: 'F12',
            144: 'NumLock',
            145: 'ScrollLock',
            224: 'Meta',
        },
        fw = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
    function dw(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = fw[e]) ? !!t[e] : !1;
    }
    function Gf() {
        return dw;
    }
    var hw = y({}, To, {
            key: function (e) {
                if (e.key) {
                    var t = uw[e.key] || e.key;
                    if (t !== 'Unidentified') return t;
                }
                return e.type === 'keypress'
                    ? ((e = au(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
                    : e.type === 'keydown' || e.type === 'keyup'
                      ? cw[e.keyCode] || 'Unidentified'
                      : '';
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Gf,
            charCode: function (e) {
                return e.type === 'keypress' ? au(e) : 0;
            },
            keyCode: function (e) {
                return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
            },
            which: function (e) {
                return e.type === 'keypress' ? au(e) : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
            },
        }),
        mw = Tn(hw),
        pw = y({}, uu, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0,
        }),
        gg = Tn(pw),
        gw = y({}, To, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Gf,
        }),
        vw = Tn(gw),
        yw = y({}, Er, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
        _w = Tn(yw),
        bw = y({}, uu, {
            deltaX: function (e) {
                return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
            },
            deltaY: function (e) {
                return 'deltaY' in e
                    ? e.deltaY
                    : 'wheelDeltaY' in e
                      ? -e.wheelDeltaY
                      : 'wheelDelta' in e
                        ? -e.wheelDelta
                        : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
        }),
        Sw = Tn(bw),
        xw = y({}, Er, { newState: 0, oldState: 0 }),
        ww = Tn(xw),
        Ew = [9, 13, 27, 32],
        Xf = nl && 'CompositionEvent' in window,
        Mo = null;
    nl && 'documentMode' in document && (Mo = document.documentMode);
    var Tw = nl && 'TextEvent' in window && !Mo,
        vg = nl && (!Xf || (Mo && 8 < Mo && 11 >= Mo)),
        yg = ' ',
        _g = !1;
    function bg(e, t) {
        switch (e) {
            case 'keyup':
                return Ew.indexOf(t.keyCode) !== -1;
            case 'keydown':
                return t.keyCode !== 229;
            case 'keypress':
            case 'mousedown':
            case 'focusout':
                return !0;
            default:
                return !1;
        }
    }
    function Sg(e) {
        return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
    }
    var da = !1;
    function Aw(e, t) {
        switch (e) {
            case 'compositionend':
                return Sg(t);
            case 'keypress':
                return t.which !== 32 ? null : ((_g = !0), yg);
            case 'textInput':
                return ((e = t.data), e === yg && _g ? null : e);
            default:
                return null;
        }
    }
    function Mw(e, t) {
        if (da)
            return e === 'compositionend' || (!Xf && bg(e, t))
                ? ((e = dg()), (ru = jf = Ul = null), (da = !1), e)
                : null;
        switch (e) {
            case 'paste':
                return null;
            case 'keypress':
                if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                    if (t.char && 1 < t.char.length) return t.char;
                    if (t.which) return String.fromCharCode(t.which);
                }
                return null;
            case 'compositionend':
                return vg && t.locale !== 'ko' ? null : t.data;
            default:
                return null;
        }
    }
    var Ow = {
        color: !0,
        date: !0,
        datetime: !0,
        'datetime-local': !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0,
    };
    function xg(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === 'input' ? !!Ow[e.type] : t === 'textarea';
    }
    function wg(e, t, l, o) {
        (ca ? (fa ? fa.push(o) : (fa = [o])) : (ca = o),
            (t = Ju(t, 'onChange')),
            0 < t.length && ((l = new su('onChange', 'change', null, l, o)), e.push({ event: l, listeners: t })));
    }
    var Oo = null,
        Co = null;
    function Cw(e) {
        r0(e, 0);
    }
    function cu(e) {
        var t = Ze(e);
        if (lg(t)) return e;
    }
    function Eg(e, t) {
        if (e === 'change') return t;
    }
    var Tg = !1;
    if (nl) {
        var qf;
        if (nl) {
            var Vf = 'oninput' in document;
            if (!Vf) {
                var Ag = document.createElement('div');
                (Ag.setAttribute('oninput', 'return;'), (Vf = typeof Ag.oninput == 'function'));
            }
            qf = Vf;
        } else qf = !1;
        Tg = qf && (!document.documentMode || 9 < document.documentMode);
    }
    function Mg() {
        Oo && (Oo.detachEvent('onpropertychange', Og), (Co = Oo = null));
    }
    function Og(e) {
        if (e.propertyName === 'value' && cu(Co)) {
            var t = [];
            (wg(t, Co, e, Lf(e)), fg(Cw, t));
        }
    }
    function Dw(e, t, l) {
        e === 'focusin' ? (Mg(), (Oo = t), (Co = l), Oo.attachEvent('onpropertychange', Og)) : e === 'focusout' && Mg();
    }
    function Rw(e) {
        if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return cu(Co);
    }
    function zw(e, t) {
        if (e === 'click') return cu(t);
    }
    function Nw(e, t) {
        if (e === 'input' || e === 'change') return cu(t);
    }
    function Lw(e, t) {
        return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
    }
    var Hn = typeof Object.is == 'function' ? Object.is : Lw;
    function Do(e, t) {
        if (Hn(e, t)) return !0;
        if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
        var l = Object.keys(e),
            o = Object.keys(t);
        if (l.length !== o.length) return !1;
        for (o = 0; o < l.length; o++) {
            var c = l[o];
            if (!wn.call(t, c) || !Hn(e[c], t[c])) return !1;
        }
        return !0;
    }
    function Cg(e) {
        for (; e && e.firstChild; ) e = e.firstChild;
        return e;
    }
    function Dg(e, t) {
        var l = Cg(e);
        e = 0;
        for (var o; l; ) {
            if (l.nodeType === 3) {
                if (((o = e + l.textContent.length), e <= t && o >= t)) return { node: l, offset: t - e };
                e = o;
            }
            e: {
                for (; l; ) {
                    if (l.nextSibling) {
                        l = l.nextSibling;
                        break e;
                    }
                    l = l.parentNode;
                }
                l = void 0;
            }
            l = Cg(l);
        }
    }
    function Rg(e, t) {
        return e && t
            ? e === t
                ? !0
                : e && e.nodeType === 3
                  ? !1
                  : t && t.nodeType === 3
                    ? Rg(e, t.parentNode)
                    : 'contains' in e
                      ? e.contains(t)
                      : e.compareDocumentPosition
                        ? !!(e.compareDocumentPosition(t) & 16)
                        : !1
            : !1;
    }
    function zg(e) {
        e =
            e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null
                ? e.ownerDocument.defaultView
                : window;
        for (var t = iu(e.document); t instanceof e.HTMLIFrameElement; ) {
            try {
                var l = typeof t.contentWindow.location.href == 'string';
            } catch {
                l = !1;
            }
            if (l) e = t.contentWindow;
            else break;
            t = iu(e.document);
        }
        return t;
    }
    function Pf(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return (
            t &&
            ((t === 'input' &&
                (e.type === 'text' ||
                    e.type === 'search' ||
                    e.type === 'tel' ||
                    e.type === 'url' ||
                    e.type === 'password')) ||
                t === 'textarea' ||
                e.contentEditable === 'true')
        );
    }
    var kw = nl && 'documentMode' in document && 11 >= document.documentMode,
        ha = null,
        Qf = null,
        Ro = null,
        Zf = !1;
    function Ng(e, t, l) {
        var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
        Zf ||
            ha == null ||
            ha !== iu(o) ||
            ((o = ha),
            'selectionStart' in o && Pf(o)
                ? (o = { start: o.selectionStart, end: o.selectionEnd })
                : ((o = ((o.ownerDocument && o.ownerDocument.defaultView) || window).getSelection()),
                  (o = {
                      anchorNode: o.anchorNode,
                      anchorOffset: o.anchorOffset,
                      focusNode: o.focusNode,
                      focusOffset: o.focusOffset,
                  })),
            (Ro && Do(Ro, o)) ||
                ((Ro = o),
                (o = Ju(Qf, 'onSelect')),
                0 < o.length &&
                    ((t = new su('onSelect', 'select', null, t, l)),
                    e.push({ event: t, listeners: o }),
                    (t.target = ha))));
    }
    function Tr(e, t) {
        var l = {};
        return (
            (l[e.toLowerCase()] = t.toLowerCase()),
            (l['Webkit' + e] = 'webkit' + t),
            (l['Moz' + e] = 'moz' + t),
            l
        );
    }
    var ma = {
            animationend: Tr('Animation', 'AnimationEnd'),
            animationiteration: Tr('Animation', 'AnimationIteration'),
            animationstart: Tr('Animation', 'AnimationStart'),
            transitionrun: Tr('Transition', 'TransitionRun'),
            transitionstart: Tr('Transition', 'TransitionStart'),
            transitioncancel: Tr('Transition', 'TransitionCancel'),
            transitionend: Tr('Transition', 'TransitionEnd'),
        },
        Kf = {},
        Lg = {};
    nl &&
        ((Lg = document.createElement('div').style),
        'AnimationEvent' in window ||
            (delete ma.animationend.animation,
            delete ma.animationiteration.animation,
            delete ma.animationstart.animation),
        'TransitionEvent' in window || delete ma.transitionend.transition);
    function Ar(e) {
        if (Kf[e]) return Kf[e];
        if (!ma[e]) return e;
        var t = ma[e],
            l;
        for (l in t) if (t.hasOwnProperty(l) && l in Lg) return (Kf[e] = t[l]);
        return e;
    }
    var kg = Ar('animationend'),
        Ug = Ar('animationiteration'),
        jg = Ar('animationstart'),
        Uw = Ar('transitionrun'),
        jw = Ar('transitionstart'),
        Bw = Ar('transitioncancel'),
        Bg = Ar('transitionend'),
        Hg = new Map(),
        $f =
            'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
                ' ',
            );
    $f.push('scrollEnd');
    function wi(e, t) {
        (Hg.set(e, t), xi(t, [e]));
    }
    var fu =
            typeof reportError == 'function'
                ? reportError
                : function (e) {
                      if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
                          var t = new window.ErrorEvent('error', {
                              bubbles: !0,
                              cancelable: !0,
                              message:
                                  typeof e == 'object' && e !== null && typeof e.message == 'string'
                                      ? String(e.message)
                                      : String(e),
                              error: e,
                          });
                          if (!window.dispatchEvent(t)) return;
                      } else if (typeof process == 'object' && typeof process.emit == 'function') {
                          process.emit('uncaughtException', e);
                          return;
                      }
                      console.error(e);
                  },
        ri = [],
        pa = 0,
        Ff = 0;
    function du() {
        for (var e = pa, t = (Ff = pa = 0); t < e; ) {
            var l = ri[t];
            ri[t++] = null;
            var o = ri[t];
            ri[t++] = null;
            var c = ri[t];
            ri[t++] = null;
            var h = ri[t];
            if (((ri[t++] = null), o !== null && c !== null)) {
                var _ = o.pending;
                (_ === null ? (c.next = c) : ((c.next = _.next), (_.next = c)), (o.pending = c));
            }
            h !== 0 && Yg(l, c, h);
        }
    }
    function hu(e, t, l, o) {
        ((ri[pa++] = e),
            (ri[pa++] = t),
            (ri[pa++] = l),
            (ri[pa++] = o),
            (Ff |= o),
            (e.lanes |= o),
            (e = e.alternate),
            e !== null && (e.lanes |= o));
    }
    function If(e, t, l, o) {
        return (hu(e, t, l, o), mu(e));
    }
    function Mr(e, t) {
        return (hu(e, null, null, t), mu(e));
    }
    function Yg(e, t, l) {
        e.lanes |= l;
        var o = e.alternate;
        o !== null && (o.lanes |= l);
        for (var c = !1, h = e.return; h !== null; )
            ((h.childLanes |= l),
                (o = h.alternate),
                o !== null && (o.childLanes |= l),
                h.tag === 22 && ((e = h.stateNode), e === null || e._visibility & 1 || (c = !0)),
                (e = h),
                (h = h.return));
        return e.tag === 3
            ? ((h = e.stateNode),
              c &&
                  t !== null &&
                  ((c = 31 - Ie(l)),
                  (e = h.hiddenUpdates),
                  (o = e[c]),
                  o === null ? (e[c] = [t]) : o.push(t),
                  (t.lane = l | 536870912)),
              h)
            : null;
    }
    function mu(e) {
        if (50 < Wo) throw ((Wo = 0), (ah = null), Error(a(185)));
        for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
        return e.tag === 3 ? e.stateNode : null;
    }
    var ga = {};
    function Hw(e, t, l, o) {
        ((this.tag = e),
            (this.key = l),
            (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
            (this.index = 0),
            (this.refCleanup = this.ref = null),
            (this.pendingProps = t),
            (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
            (this.mode = o),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null));
    }
    function Yn(e, t, l, o) {
        return new Hw(e, t, l, o);
    }
    function Jf(e) {
        return ((e = e.prototype), !(!e || !e.isReactComponent));
    }
    function il(e, t) {
        var l = e.alternate;
        return (
            l === null
                ? ((l = Yn(e.tag, t, e.key, e.mode)),
                  (l.elementType = e.elementType),
                  (l.type = e.type),
                  (l.stateNode = e.stateNode),
                  (l.alternate = e),
                  (e.alternate = l))
                : ((l.pendingProps = t), (l.type = e.type), (l.flags = 0), (l.subtreeFlags = 0), (l.deletions = null)),
            (l.flags = e.flags & 65011712),
            (l.childLanes = e.childLanes),
            (l.lanes = e.lanes),
            (l.child = e.child),
            (l.memoizedProps = e.memoizedProps),
            (l.memoizedState = e.memoizedState),
            (l.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
            (l.sibling = e.sibling),
            (l.index = e.index),
            (l.ref = e.ref),
            (l.refCleanup = e.refCleanup),
            l
        );
    }
    function Gg(e, t) {
        e.flags &= 65011714;
        var l = e.alternate;
        return (
            l === null
                ? ((e.childLanes = 0),
                  (e.lanes = t),
                  (e.child = null),
                  (e.subtreeFlags = 0),
                  (e.memoizedProps = null),
                  (e.memoizedState = null),
                  (e.updateQueue = null),
                  (e.dependencies = null),
                  (e.stateNode = null))
                : ((e.childLanes = l.childLanes),
                  (e.lanes = l.lanes),
                  (e.child = l.child),
                  (e.subtreeFlags = 0),
                  (e.deletions = null),
                  (e.memoizedProps = l.memoizedProps),
                  (e.memoizedState = l.memoizedState),
                  (e.updateQueue = l.updateQueue),
                  (e.type = l.type),
                  (t = l.dependencies),
                  (e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext })),
            e
        );
    }
    function pu(e, t, l, o, c, h) {
        var _ = 0;
        if (((o = e), typeof e == 'function')) Jf(e) && (_ = 1);
        else if (typeof e == 'string')
            _ = VE(e, l, ee.current) ? 26 : e === 'html' || e === 'head' || e === 'body' ? 27 : 5;
        else
            e: switch (e) {
                case P:
                    return ((e = Yn(31, l, t, c)), (e.elementType = P), (e.lanes = h), e);
                case b:
                    return Or(l.children, c, h, t);
                case T:
                    ((_ = 8), (c |= 24));
                    break;
                case O:
                    return ((e = Yn(12, l, t, c | 2)), (e.elementType = O), (e.lanes = h), e);
                case C:
                    return ((e = Yn(13, l, t, c)), (e.elementType = C), (e.lanes = h), e);
                case X:
                    return ((e = Yn(19, l, t, c)), (e.elementType = X), (e.lanes = h), e);
                default:
                    if (typeof e == 'object' && e !== null)
                        switch (e.$$typeof) {
                            case D:
                                _ = 10;
                                break e;
                            case L:
                                _ = 9;
                                break e;
                            case k:
                                _ = 11;
                                break e;
                            case z:
                                _ = 14;
                                break e;
                            case U:
                                ((_ = 16), (o = null));
                                break e;
                        }
                    ((_ = 29), (l = Error(a(130, e === null ? 'null' : typeof e, ''))), (o = null));
            }
        return ((t = Yn(_, l, t, c)), (t.elementType = e), (t.type = o), (t.lanes = h), t);
    }
    function Or(e, t, l, o) {
        return ((e = Yn(7, e, o, t)), (e.lanes = l), e);
    }
    function Wf(e, t, l) {
        return ((e = Yn(6, e, null, t)), (e.lanes = l), e);
    }
    function Xg(e) {
        var t = Yn(18, null, null, 0);
        return ((t.stateNode = e), t);
    }
    function ed(e, t, l) {
        return (
            (t = Yn(4, e.children !== null ? e.children : [], e.key, t)),
            (t.lanes = l),
            (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
            t
        );
    }
    var qg = new WeakMap();
    function ai(e, t) {
        if (typeof e == 'object' && e !== null) {
            var l = qg.get(e);
            return l !== void 0 ? l : ((t = { value: e, source: t, stack: jt(t) }), qg.set(e, t), t);
        }
        return { value: e, source: t, stack: jt(t) };
    }
    var va = [],
        ya = 0,
        gu = null,
        zo = 0,
        oi = [],
        si = 0,
        jl = null,
        Li = 1,
        ki = '';
    function ll(e, t) {
        ((va[ya++] = zo), (va[ya++] = gu), (gu = e), (zo = t));
    }
    function Vg(e, t, l) {
        ((oi[si++] = Li), (oi[si++] = ki), (oi[si++] = jl), (jl = e));
        var o = Li;
        e = ki;
        var c = 32 - Ie(o) - 1;
        ((o &= ~(1 << c)), (l += 1));
        var h = 32 - Ie(t) + c;
        if (30 < h) {
            var _ = c - (c % 5);
            ((h = (o & ((1 << _) - 1)).toString(32)),
                (o >>= _),
                (c -= _),
                (Li = (1 << (32 - Ie(t) + c)) | (l << c) | o),
                (ki = h + e));
        } else ((Li = (1 << h) | (l << c) | o), (ki = e));
    }
    function td(e) {
        e.return !== null && (ll(e, 1), Vg(e, 1, 0));
    }
    function nd(e) {
        for (; e === gu; ) ((gu = va[--ya]), (va[ya] = null), (zo = va[--ya]), (va[ya] = null));
        for (; e === jl; )
            ((jl = oi[--si]), (oi[si] = null), (ki = oi[--si]), (oi[si] = null), (Li = oi[--si]), (oi[si] = null));
    }
    function Pg(e, t) {
        ((oi[si++] = Li), (oi[si++] = ki), (oi[si++] = jl), (Li = t.id), (ki = t.overflow), (jl = e));
    }
    var nn = null,
        yt = null,
        Ke = !1,
        Bl = null,
        ui = !1,
        id = Error(a(519));
    function Hl(e) {
        var t = Error(a(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? 'text' : 'HTML', ''));
        throw (No(ai(t, e)), id);
    }
    function Qg(e) {
        var t = e.stateNode,
            l = e.type,
            o = e.memoizedProps;
        switch (((t[ze] = e), (t[Ue] = o), l)) {
            case 'dialog':
                (Ye('cancel', t), Ye('close', t));
                break;
            case 'iframe':
            case 'object':
            case 'embed':
                Ye('load', t);
                break;
            case 'video':
            case 'audio':
                for (l = 0; l < ts.length; l++) Ye(ts[l], t);
                break;
            case 'source':
                Ye('error', t);
                break;
            case 'img':
            case 'image':
            case 'link':
                (Ye('error', t), Ye('load', t));
                break;
            case 'details':
                Ye('toggle', t);
                break;
            case 'input':
                (Ye('invalid', t), rg(t, o.value, o.defaultValue, o.checked, o.defaultChecked, o.type, o.name, !0));
                break;
            case 'select':
                Ye('invalid', t);
                break;
            case 'textarea':
                (Ye('invalid', t), og(t, o.value, o.defaultValue, o.children));
        }
        ((l = o.children),
            (typeof l != 'string' && typeof l != 'number' && typeof l != 'bigint') ||
            t.textContent === '' + l ||
            o.suppressHydrationWarning === !0 ||
            u0(t.textContent, l)
                ? (o.popover != null && (Ye('beforetoggle', t), Ye('toggle', t)),
                  o.onScroll != null && Ye('scroll', t),
                  o.onScrollEnd != null && Ye('scrollend', t),
                  o.onClick != null && (t.onclick = tl),
                  (t = !0))
                : (t = !1),
            t || Hl(e, !0));
    }
    function Zg(e) {
        for (nn = e.return; nn; )
            switch (nn.tag) {
                case 5:
                case 31:
                case 13:
                    ui = !1;
                    return;
                case 27:
                case 3:
                    ui = !0;
                    return;
                default:
                    nn = nn.return;
            }
    }
    function _a(e) {
        if (e !== nn) return !1;
        if (!Ke) return (Zg(e), (Ke = !0), !1);
        var t = e.tag,
            l;
        if (
            ((l = t !== 3 && t !== 27) &&
                ((l = t === 5) &&
                    ((l = e.type), (l = !(l !== 'form' && l !== 'button') || Sh(e.type, e.memoizedProps))),
                (l = !l)),
            l && yt && Hl(e),
            Zg(e),
            t === 13)
        ) {
            if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(a(317));
            yt = y0(e);
        } else if (t === 31) {
            if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(a(317));
            yt = y0(e);
        } else
            t === 27
                ? ((t = yt), Wl(e.type) ? ((e = Ah), (Ah = null), (yt = e)) : (yt = t))
                : (yt = nn ? fi(e.stateNode.nextSibling) : null);
        return !0;
    }
    function Cr() {
        ((yt = nn = null), (Ke = !1));
    }
    function ld() {
        var e = Bl;
        return (e !== null && (Cn === null ? (Cn = e) : Cn.push.apply(Cn, e), (Bl = null)), e);
    }
    function No(e) {
        Bl === null ? (Bl = [e]) : Bl.push(e);
    }
    var rd = M(null),
        Dr = null,
        rl = null;
    function Yl(e, t, l) {
        (F(rd, t._currentValue), (t._currentValue = l));
    }
    function al(e) {
        ((e._currentValue = rd.current), H(rd));
    }
    function ad(e, t, l) {
        for (; e !== null; ) {
            var o = e.alternate;
            if (
                ((e.childLanes & t) !== t
                    ? ((e.childLanes |= t), o !== null && (o.childLanes |= t))
                    : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t),
                e === l)
            )
                break;
            e = e.return;
        }
    }
    function od(e, t, l, o) {
        var c = e.child;
        for (c !== null && (c.return = e); c !== null; ) {
            var h = c.dependencies;
            if (h !== null) {
                var _ = c.child;
                h = h.firstContext;
                e: for (; h !== null; ) {
                    var w = h;
                    h = c;
                    for (var N = 0; N < t.length; N++)
                        if (w.context === t[N]) {
                            ((h.lanes |= l),
                                (w = h.alternate),
                                w !== null && (w.lanes |= l),
                                ad(h.return, l, e),
                                o || (_ = null));
                            break e;
                        }
                    h = w.next;
                }
            } else if (c.tag === 18) {
                if (((_ = c.return), _ === null)) throw Error(a(341));
                ((_.lanes |= l), (h = _.alternate), h !== null && (h.lanes |= l), ad(_, l, e), (_ = null));
            } else _ = c.child;
            if (_ !== null) _.return = c;
            else
                for (_ = c; _ !== null; ) {
                    if (_ === e) {
                        _ = null;
                        break;
                    }
                    if (((c = _.sibling), c !== null)) {
                        ((c.return = _.return), (_ = c));
                        break;
                    }
                    _ = _.return;
                }
            c = _;
        }
    }
    function ba(e, t, l, o) {
        e = null;
        for (var c = t, h = !1; c !== null; ) {
            if (!h) {
                if ((c.flags & 524288) !== 0) h = !0;
                else if ((c.flags & 262144) !== 0) break;
            }
            if (c.tag === 10) {
                var _ = c.alternate;
                if (_ === null) throw Error(a(387));
                if (((_ = _.memoizedProps), _ !== null)) {
                    var w = c.type;
                    Hn(c.pendingProps.value, _.value) || (e !== null ? e.push(w) : (e = [w]));
                }
            } else if (c === he.current) {
                if (((_ = c.alternate), _ === null)) throw Error(a(387));
                _.memoizedState.memoizedState !== c.memoizedState.memoizedState &&
                    (e !== null ? e.push(as) : (e = [as]));
            }
            c = c.return;
        }
        (e !== null && od(t, e, l, o), (t.flags |= 262144));
    }
    function vu(e) {
        for (e = e.firstContext; e !== null; ) {
            if (!Hn(e.context._currentValue, e.memoizedValue)) return !0;
            e = e.next;
        }
        return !1;
    }
    function Rr(e) {
        ((Dr = e), (rl = null), (e = e.dependencies), e !== null && (e.firstContext = null));
    }
    function ln(e) {
        return Kg(Dr, e);
    }
    function yu(e, t) {
        return (Dr === null && Rr(e), Kg(e, t));
    }
    function Kg(e, t) {
        var l = t._currentValue;
        if (((t = { context: t, memoizedValue: l, next: null }), rl === null)) {
            if (e === null) throw Error(a(308));
            ((rl = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288));
        } else rl = rl.next = t;
        return l;
    }
    var Yw =
            typeof AbortController < 'u'
                ? AbortController
                : function () {
                      var e = [],
                          t = (this.signal = {
                              aborted: !1,
                              addEventListener: function (l, o) {
                                  e.push(o);
                              },
                          });
                      this.abort = function () {
                          ((t.aborted = !0),
                              e.forEach(function (l) {
                                  return l();
                              }));
                      };
                  },
        Gw = i.unstable_scheduleCallback,
        Xw = i.unstable_NormalPriority,
        Bt = {
            $$typeof: D,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0,
        };
    function sd() {
        return { controller: new Yw(), data: new Map(), refCount: 0 };
    }
    function Lo(e) {
        (e.refCount--,
            e.refCount === 0 &&
                Gw(Xw, function () {
                    e.controller.abort();
                }));
    }
    var ko = null,
        ud = 0,
        Sa = 0,
        xa = null;
    function qw(e, t) {
        if (ko === null) {
            var l = (ko = []);
            ((ud = 0),
                (Sa = dh()),
                (xa = {
                    status: 'pending',
                    value: void 0,
                    then: function (o) {
                        l.push(o);
                    },
                }));
        }
        return (ud++, t.then($g, $g), t);
    }
    function $g() {
        if (--ud === 0 && ko !== null) {
            xa !== null && (xa.status = 'fulfilled');
            var e = ko;
            ((ko = null), (Sa = 0), (xa = null));
            for (var t = 0; t < e.length; t++) (0, e[t])();
        }
    }
    function Vw(e, t) {
        var l = [],
            o = {
                status: 'pending',
                value: null,
                reason: null,
                then: function (c) {
                    l.push(c);
                },
            };
        return (
            e.then(
                function () {
                    ((o.status = 'fulfilled'), (o.value = t));
                    for (var c = 0; c < l.length; c++) (0, l[c])(t);
                },
                function (c) {
                    for (o.status = 'rejected', o.reason = c, c = 0; c < l.length; c++) (0, l[c])(void 0);
                },
            ),
            o
        );
    }
    var Fg = A.S;
    A.S = function (e, t) {
        ((Ny = vt()),
            typeof t == 'object' && t !== null && typeof t.then == 'function' && qw(e, t),
            Fg !== null && Fg(e, t));
    };
    var zr = M(null);
    function cd() {
        var e = zr.current;
        return e !== null ? e : dt.pooledCache;
    }
    function _u(e, t) {
        t === null ? F(zr, zr.current) : F(zr, t.pool);
    }
    function Ig() {
        var e = cd();
        return e === null ? null : { parent: Bt._currentValue, pool: e };
    }
    var wa = Error(a(460)),
        fd = Error(a(474)),
        bu = Error(a(542)),
        Su = { then: function () {} };
    function Jg(e) {
        return ((e = e.status), e === 'fulfilled' || e === 'rejected');
    }
    function Wg(e, t, l) {
        switch (((l = e[l]), l === void 0 ? e.push(t) : l !== t && (t.then(tl, tl), (t = l)), t.status)) {
            case 'fulfilled':
                return t.value;
            case 'rejected':
                throw ((e = t.reason), tv(e), e);
            default:
                if (typeof t.status == 'string') t.then(tl, tl);
                else {
                    if (((e = dt), e !== null && 100 < e.shellSuspendCounter)) throw Error(a(482));
                    ((e = t),
                        (e.status = 'pending'),
                        e.then(
                            function (o) {
                                if (t.status === 'pending') {
                                    var c = t;
                                    ((c.status = 'fulfilled'), (c.value = o));
                                }
                            },
                            function (o) {
                                if (t.status === 'pending') {
                                    var c = t;
                                    ((c.status = 'rejected'), (c.reason = o));
                                }
                            },
                        ));
                }
                switch (t.status) {
                    case 'fulfilled':
                        return t.value;
                    case 'rejected':
                        throw ((e = t.reason), tv(e), e);
                }
                throw ((Lr = t), wa);
        }
    }
    function Nr(e) {
        try {
            var t = e._init;
            return t(e._payload);
        } catch (l) {
            throw l !== null && typeof l == 'object' && typeof l.then == 'function' ? ((Lr = l), wa) : l;
        }
    }
    var Lr = null;
    function ev() {
        if (Lr === null) throw Error(a(459));
        var e = Lr;
        return ((Lr = null), e);
    }
    function tv(e) {
        if (e === wa || e === bu) throw Error(a(483));
    }
    var Ea = null,
        Uo = 0;
    function xu(e) {
        var t = Uo;
        return ((Uo += 1), Ea === null && (Ea = []), Wg(Ea, e, t));
    }
    function jo(e, t) {
        ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
    }
    function wu(e, t) {
        throw t.$$typeof === S
            ? Error(a(525))
            : ((e = Object.prototype.toString.call(t)),
              Error(a(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)));
    }
    function nv(e) {
        function t(q, Y) {
            if (e) {
                var Q = q.deletions;
                Q === null ? ((q.deletions = [Y]), (q.flags |= 16)) : Q.push(Y);
            }
        }
        function l(q, Y) {
            if (!e) return null;
            for (; Y !== null; ) (t(q, Y), (Y = Y.sibling));
            return null;
        }
        function o(q) {
            for (var Y = new Map(); q !== null; )
                (q.key !== null ? Y.set(q.key, q) : Y.set(q.index, q), (q = q.sibling));
            return Y;
        }
        function c(q, Y) {
            return ((q = il(q, Y)), (q.index = 0), (q.sibling = null), q);
        }
        function h(q, Y, Q) {
            return (
                (q.index = Q),
                e
                    ? ((Q = q.alternate),
                      Q !== null ? ((Q = Q.index), Q < Y ? ((q.flags |= 67108866), Y) : Q) : ((q.flags |= 67108866), Y))
                    : ((q.flags |= 1048576), Y)
            );
        }
        function _(q) {
            return (e && q.alternate === null && (q.flags |= 67108866), q);
        }
        function w(q, Y, Q, le) {
            return Y === null || Y.tag !== 6
                ? ((Y = Wf(Q, q.mode, le)), (Y.return = q), Y)
                : ((Y = c(Y, Q)), (Y.return = q), Y);
        }
        function N(q, Y, Q, le) {
            var Te = Q.type;
            return Te === b
                ? ie(q, Y, Q.props.children, le, Q.key)
                : Y !== null &&
                    (Y.elementType === Te ||
                        (typeof Te == 'object' && Te !== null && Te.$$typeof === U && Nr(Te) === Y.type))
                  ? ((Y = c(Y, Q.props)), jo(Y, Q), (Y.return = q), Y)
                  : ((Y = pu(Q.type, Q.key, Q.props, null, q.mode, le)), jo(Y, Q), (Y.return = q), Y);
        }
        function Z(q, Y, Q, le) {
            return Y === null ||
                Y.tag !== 4 ||
                Y.stateNode.containerInfo !== Q.containerInfo ||
                Y.stateNode.implementation !== Q.implementation
                ? ((Y = ed(Q, q.mode, le)), (Y.return = q), Y)
                : ((Y = c(Y, Q.children || [])), (Y.return = q), Y);
        }
        function ie(q, Y, Q, le, Te) {
            return Y === null || Y.tag !== 7
                ? ((Y = Or(Q, q.mode, le, Te)), (Y.return = q), Y)
                : ((Y = c(Y, Q)), (Y.return = q), Y);
        }
        function oe(q, Y, Q) {
            if ((typeof Y == 'string' && Y !== '') || typeof Y == 'number' || typeof Y == 'bigint')
                return ((Y = Wf('' + Y, q.mode, Q)), (Y.return = q), Y);
            if (typeof Y == 'object' && Y !== null) {
                switch (Y.$$typeof) {
                    case g:
                        return ((Q = pu(Y.type, Y.key, Y.props, null, q.mode, Q)), jo(Q, Y), (Q.return = q), Q);
                    case x:
                        return ((Y = ed(Y, q.mode, Q)), (Y.return = q), Y);
                    case U:
                        return ((Y = Nr(Y)), oe(q, Y, Q));
                }
                if (I(Y) || de(Y)) return ((Y = Or(Y, q.mode, Q, null)), (Y.return = q), Y);
                if (typeof Y.then == 'function') return oe(q, xu(Y), Q);
                if (Y.$$typeof === D) return oe(q, yu(q, Y), Q);
                wu(q, Y);
            }
            return null;
        }
        function K(q, Y, Q, le) {
            var Te = Y !== null ? Y.key : null;
            if ((typeof Q == 'string' && Q !== '') || typeof Q == 'number' || typeof Q == 'bigint')
                return Te !== null ? null : w(q, Y, '' + Q, le);
            if (typeof Q == 'object' && Q !== null) {
                switch (Q.$$typeof) {
                    case g:
                        return Q.key === Te ? N(q, Y, Q, le) : null;
                    case x:
                        return Q.key === Te ? Z(q, Y, Q, le) : null;
                    case U:
                        return ((Q = Nr(Q)), K(q, Y, Q, le));
                }
                if (I(Q) || de(Q)) return Te !== null ? null : ie(q, Y, Q, le, null);
                if (typeof Q.then == 'function') return K(q, Y, xu(Q), le);
                if (Q.$$typeof === D) return K(q, Y, yu(q, Q), le);
                wu(q, Q);
            }
            return null;
        }
        function J(q, Y, Q, le, Te) {
            if ((typeof le == 'string' && le !== '') || typeof le == 'number' || typeof le == 'bigint')
                return ((q = q.get(Q) || null), w(Y, q, '' + le, Te));
            if (typeof le == 'object' && le !== null) {
                switch (le.$$typeof) {
                    case g:
                        return ((q = q.get(le.key === null ? Q : le.key) || null), N(Y, q, le, Te));
                    case x:
                        return ((q = q.get(le.key === null ? Q : le.key) || null), Z(Y, q, le, Te));
                    case U:
                        return ((le = Nr(le)), J(q, Y, Q, le, Te));
                }
                if (I(le) || de(le)) return ((q = q.get(Q) || null), ie(Y, q, le, Te, null));
                if (typeof le.then == 'function') return J(q, Y, Q, xu(le), Te);
                if (le.$$typeof === D) return J(q, Y, Q, yu(Y, le), Te);
                wu(Y, le);
            }
            return null;
        }
        function Se(q, Y, Q, le) {
            for (var Te = null, et = null, Ee = Y, ke = (Y = 0), Ve = null; Ee !== null && ke < Q.length; ke++) {
                Ee.index > ke ? ((Ve = Ee), (Ee = null)) : (Ve = Ee.sibling);
                var tt = K(q, Ee, Q[ke], le);
                if (tt === null) {
                    Ee === null && (Ee = Ve);
                    break;
                }
                (e && Ee && tt.alternate === null && t(q, Ee),
                    (Y = h(tt, Y, ke)),
                    et === null ? (Te = tt) : (et.sibling = tt),
                    (et = tt),
                    (Ee = Ve));
            }
            if (ke === Q.length) return (l(q, Ee), Ke && ll(q, ke), Te);
            if (Ee === null) {
                for (; ke < Q.length; ke++)
                    ((Ee = oe(q, Q[ke], le)),
                        Ee !== null && ((Y = h(Ee, Y, ke)), et === null ? (Te = Ee) : (et.sibling = Ee), (et = Ee)));
                return (Ke && ll(q, ke), Te);
            }
            for (Ee = o(Ee); ke < Q.length; ke++)
                ((Ve = J(Ee, q, ke, Q[ke], le)),
                    Ve !== null &&
                        (e && Ve.alternate !== null && Ee.delete(Ve.key === null ? ke : Ve.key),
                        (Y = h(Ve, Y, ke)),
                        et === null ? (Te = Ve) : (et.sibling = Ve),
                        (et = Ve)));
            return (
                e &&
                    Ee.forEach(function (lr) {
                        return t(q, lr);
                    }),
                Ke && ll(q, ke),
                Te
            );
        }
        function Oe(q, Y, Q, le) {
            if (Q == null) throw Error(a(151));
            for (
                var Te = null, et = null, Ee = Y, ke = (Y = 0), Ve = null, tt = Q.next();
                Ee !== null && !tt.done;
                ke++, tt = Q.next()
            ) {
                Ee.index > ke ? ((Ve = Ee), (Ee = null)) : (Ve = Ee.sibling);
                var lr = K(q, Ee, tt.value, le);
                if (lr === null) {
                    Ee === null && (Ee = Ve);
                    break;
                }
                (e && Ee && lr.alternate === null && t(q, Ee),
                    (Y = h(lr, Y, ke)),
                    et === null ? (Te = lr) : (et.sibling = lr),
                    (et = lr),
                    (Ee = Ve));
            }
            if (tt.done) return (l(q, Ee), Ke && ll(q, ke), Te);
            if (Ee === null) {
                for (; !tt.done; ke++, tt = Q.next())
                    ((tt = oe(q, tt.value, le)),
                        tt !== null && ((Y = h(tt, Y, ke)), et === null ? (Te = tt) : (et.sibling = tt), (et = tt)));
                return (Ke && ll(q, ke), Te);
            }
            for (Ee = o(Ee); !tt.done; ke++, tt = Q.next())
                ((tt = J(Ee, q, ke, tt.value, le)),
                    tt !== null &&
                        (e && tt.alternate !== null && Ee.delete(tt.key === null ? ke : tt.key),
                        (Y = h(tt, Y, ke)),
                        et === null ? (Te = tt) : (et.sibling = tt),
                        (et = tt)));
            return (
                e &&
                    Ee.forEach(function (tT) {
                        return t(q, tT);
                    }),
                Ke && ll(q, ke),
                Te
            );
        }
        function ft(q, Y, Q, le) {
            if (
                (typeof Q == 'object' && Q !== null && Q.type === b && Q.key === null && (Q = Q.props.children),
                typeof Q == 'object' && Q !== null)
            ) {
                switch (Q.$$typeof) {
                    case g:
                        e: {
                            for (var Te = Q.key; Y !== null; ) {
                                if (Y.key === Te) {
                                    if (((Te = Q.type), Te === b)) {
                                        if (Y.tag === 7) {
                                            (l(q, Y.sibling), (le = c(Y, Q.props.children)), (le.return = q), (q = le));
                                            break e;
                                        }
                                    } else if (
                                        Y.elementType === Te ||
                                        (typeof Te == 'object' && Te !== null && Te.$$typeof === U && Nr(Te) === Y.type)
                                    ) {
                                        (l(q, Y.sibling), (le = c(Y, Q.props)), jo(le, Q), (le.return = q), (q = le));
                                        break e;
                                    }
                                    l(q, Y);
                                    break;
                                } else t(q, Y);
                                Y = Y.sibling;
                            }
                            Q.type === b
                                ? ((le = Or(Q.props.children, q.mode, le, Q.key)), (le.return = q), (q = le))
                                : ((le = pu(Q.type, Q.key, Q.props, null, q.mode, le)),
                                  jo(le, Q),
                                  (le.return = q),
                                  (q = le));
                        }
                        return _(q);
                    case x:
                        e: {
                            for (Te = Q.key; Y !== null; ) {
                                if (Y.key === Te)
                                    if (
                                        Y.tag === 4 &&
                                        Y.stateNode.containerInfo === Q.containerInfo &&
                                        Y.stateNode.implementation === Q.implementation
                                    ) {
                                        (l(q, Y.sibling), (le = c(Y, Q.children || [])), (le.return = q), (q = le));
                                        break e;
                                    } else {
                                        l(q, Y);
                                        break;
                                    }
                                else t(q, Y);
                                Y = Y.sibling;
                            }
                            ((le = ed(Q, q.mode, le)), (le.return = q), (q = le));
                        }
                        return _(q);
                    case U:
                        return ((Q = Nr(Q)), ft(q, Y, Q, le));
                }
                if (I(Q)) return Se(q, Y, Q, le);
                if (de(Q)) {
                    if (((Te = de(Q)), typeof Te != 'function')) throw Error(a(150));
                    return ((Q = Te.call(Q)), Oe(q, Y, Q, le));
                }
                if (typeof Q.then == 'function') return ft(q, Y, xu(Q), le);
                if (Q.$$typeof === D) return ft(q, Y, yu(q, Q), le);
                wu(q, Q);
            }
            return (typeof Q == 'string' && Q !== '') || typeof Q == 'number' || typeof Q == 'bigint'
                ? ((Q = '' + Q),
                  Y !== null && Y.tag === 6
                      ? (l(q, Y.sibling), (le = c(Y, Q)), (le.return = q), (q = le))
                      : (l(q, Y), (le = Wf(Q, q.mode, le)), (le.return = q), (q = le)),
                  _(q))
                : l(q, Y);
        }
        return function (q, Y, Q, le) {
            try {
                Uo = 0;
                var Te = ft(q, Y, Q, le);
                return ((Ea = null), Te);
            } catch (Ee) {
                if (Ee === wa || Ee === bu) throw Ee;
                var et = Yn(29, Ee, null, q.mode);
                return ((et.lanes = le), (et.return = q), et);
            } finally {
            }
        };
    }
    var kr = nv(!0),
        iv = nv(!1),
        Gl = !1;
    function dd(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, lanes: 0, hiddenCallbacks: null },
            callbacks: null,
        };
    }
    function hd(e, t) {
        ((e = e.updateQueue),
            t.updateQueue === e &&
                (t.updateQueue = {
                    baseState: e.baseState,
                    firstBaseUpdate: e.firstBaseUpdate,
                    lastBaseUpdate: e.lastBaseUpdate,
                    shared: e.shared,
                    callbacks: null,
                }));
    }
    function Xl(e) {
        return { lane: e, tag: 0, payload: null, callback: null, next: null };
    }
    function ql(e, t, l) {
        var o = e.updateQueue;
        if (o === null) return null;
        if (((o = o.shared), (it & 2) !== 0)) {
            var c = o.pending;
            return (
                c === null ? (t.next = t) : ((t.next = c.next), (c.next = t)),
                (o.pending = t),
                (t = mu(e)),
                Yg(e, null, l),
                t
            );
        }
        return (hu(e, o, t, l), mu(e));
    }
    function Bo(e, t, l) {
        if (((t = t.updateQueue), t !== null && ((t = t.shared), (l & 4194048) !== 0))) {
            var o = t.lanes;
            ((o &= e.pendingLanes), (l |= o), (t.lanes = l), ae(e, l));
        }
    }
    function md(e, t) {
        var l = e.updateQueue,
            o = e.alternate;
        if (o !== null && ((o = o.updateQueue), l === o)) {
            var c = null,
                h = null;
            if (((l = l.firstBaseUpdate), l !== null)) {
                do {
                    var _ = { lane: l.lane, tag: l.tag, payload: l.payload, callback: null, next: null };
                    (h === null ? (c = h = _) : (h = h.next = _), (l = l.next));
                } while (l !== null);
                h === null ? (c = h = t) : (h = h.next = t);
            } else c = h = t;
            ((l = {
                baseState: o.baseState,
                firstBaseUpdate: c,
                lastBaseUpdate: h,
                shared: o.shared,
                callbacks: o.callbacks,
            }),
                (e.updateQueue = l));
            return;
        }
        ((e = l.lastBaseUpdate), e === null ? (l.firstBaseUpdate = t) : (e.next = t), (l.lastBaseUpdate = t));
    }
    var pd = !1;
    function Ho() {
        if (pd) {
            var e = xa;
            if (e !== null) throw e;
        }
    }
    function Yo(e, t, l, o) {
        pd = !1;
        var c = e.updateQueue;
        Gl = !1;
        var h = c.firstBaseUpdate,
            _ = c.lastBaseUpdate,
            w = c.shared.pending;
        if (w !== null) {
            c.shared.pending = null;
            var N = w,
                Z = N.next;
            ((N.next = null), _ === null ? (h = Z) : (_.next = Z), (_ = N));
            var ie = e.alternate;
            ie !== null &&
                ((ie = ie.updateQueue),
                (w = ie.lastBaseUpdate),
                w !== _ && (w === null ? (ie.firstBaseUpdate = Z) : (w.next = Z), (ie.lastBaseUpdate = N)));
        }
        if (h !== null) {
            var oe = c.baseState;
            ((_ = 0), (ie = Z = N = null), (w = h));
            do {
                var K = w.lane & -536870913,
                    J = K !== w.lane;
                if (J ? (qe & K) === K : (o & K) === K) {
                    (K !== 0 && K === Sa && (pd = !0),
                        ie !== null &&
                            (ie = ie.next = { lane: 0, tag: w.tag, payload: w.payload, callback: null, next: null }));
                    e: {
                        var Se = e,
                            Oe = w;
                        K = t;
                        var ft = l;
                        switch (Oe.tag) {
                            case 1:
                                if (((Se = Oe.payload), typeof Se == 'function')) {
                                    oe = Se.call(ft, oe, K);
                                    break e;
                                }
                                oe = Se;
                                break e;
                            case 3:
                                Se.flags = (Se.flags & -65537) | 128;
                            case 0:
                                if (
                                    ((Se = Oe.payload),
                                    (K = typeof Se == 'function' ? Se.call(ft, oe, K) : Se),
                                    K == null)
                                )
                                    break e;
                                oe = y({}, oe, K);
                                break e;
                            case 2:
                                Gl = !0;
                        }
                    }
                    ((K = w.callback),
                        K !== null &&
                            ((e.flags |= 64),
                            J && (e.flags |= 8192),
                            (J = c.callbacks),
                            J === null ? (c.callbacks = [K]) : J.push(K)));
                } else
                    ((J = { lane: K, tag: w.tag, payload: w.payload, callback: w.callback, next: null }),
                        ie === null ? ((Z = ie = J), (N = oe)) : (ie = ie.next = J),
                        (_ |= K));
                if (((w = w.next), w === null)) {
                    if (((w = c.shared.pending), w === null)) break;
                    ((J = w), (w = J.next), (J.next = null), (c.lastBaseUpdate = J), (c.shared.pending = null));
                }
            } while (!0);
            (ie === null && (N = oe),
                (c.baseState = N),
                (c.firstBaseUpdate = Z),
                (c.lastBaseUpdate = ie),
                h === null && (c.shared.lanes = 0),
                (Kl |= _),
                (e.lanes = _),
                (e.memoizedState = oe));
        }
    }
    function lv(e, t) {
        if (typeof e != 'function') throw Error(a(191, e));
        e.call(t);
    }
    function rv(e, t) {
        var l = e.callbacks;
        if (l !== null) for (e.callbacks = null, e = 0; e < l.length; e++) lv(l[e], t);
    }
    var Ta = M(null),
        Eu = M(0);
    function av(e, t) {
        ((e = pl), F(Eu, e), F(Ta, t), (pl = e | t.baseLanes));
    }
    function gd() {
        (F(Eu, pl), F(Ta, Ta.current));
    }
    function vd() {
        ((pl = Eu.current), H(Ta), H(Eu));
    }
    var Gn = M(null),
        ci = null;
    function Vl(e) {
        var t = e.alternate;
        (F(zt, zt.current & 1),
            F(Gn, e),
            ci === null && (t === null || Ta.current !== null || t.memoizedState !== null) && (ci = e));
    }
    function yd(e) {
        (F(zt, zt.current), F(Gn, e), ci === null && (ci = e));
    }
    function ov(e) {
        e.tag === 22 ? (F(zt, zt.current), F(Gn, e), ci === null && (ci = e)) : Pl();
    }
    function Pl() {
        (F(zt, zt.current), F(Gn, Gn.current));
    }
    function Xn(e) {
        (H(Gn), ci === e && (ci = null), H(zt));
    }
    var zt = M(0);
    function Tu(e) {
        for (var t = e; t !== null; ) {
            if (t.tag === 13) {
                var l = t.memoizedState;
                if (l !== null && ((l = l.dehydrated), l === null || Eh(l) || Th(l))) return t;
            } else if (
                t.tag === 19 &&
                (t.memoizedProps.revealOrder === 'forwards' ||
                    t.memoizedProps.revealOrder === 'backwards' ||
                    t.memoizedProps.revealOrder === 'unstable_legacy-backwards' ||
                    t.memoizedProps.revealOrder === 'together')
            ) {
                if ((t.flags & 128) !== 0) return t;
            } else if (t.child !== null) {
                ((t.child.return = t), (t = t.child));
                continue;
            }
            if (t === e) break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) return null;
                t = t.return;
            }
            ((t.sibling.return = t.return), (t = t.sibling));
        }
        return null;
    }
    var ol = 0,
        Ne = null,
        ut = null,
        Ht = null,
        Au = !1,
        Aa = !1,
        Ur = !1,
        Mu = 0,
        Go = 0,
        Ma = null,
        Pw = 0;
    function Ct() {
        throw Error(a(321));
    }
    function _d(e, t) {
        if (t === null) return !1;
        for (var l = 0; l < t.length && l < e.length; l++) if (!Hn(e[l], t[l])) return !1;
        return !0;
    }
    function bd(e, t, l, o, c, h) {
        return (
            (ol = h),
            (Ne = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (A.H = e === null || e.memoizedState === null ? Vv : kd),
            (Ur = !1),
            (h = l(o, c)),
            (Ur = !1),
            Aa && (h = uv(t, l, o, c)),
            sv(e),
            h
        );
    }
    function sv(e) {
        A.H = Vo;
        var t = ut !== null && ut.next !== null;
        if (((ol = 0), (Ht = ut = Ne = null), (Au = !1), (Go = 0), (Ma = null), t)) throw Error(a(300));
        e === null || Yt || ((e = e.dependencies), e !== null && vu(e) && (Yt = !0));
    }
    function uv(e, t, l, o) {
        Ne = e;
        var c = 0;
        do {
            if ((Aa && (Ma = null), (Go = 0), (Aa = !1), 25 <= c)) throw Error(a(301));
            if (((c += 1), (Ht = ut = null), e.updateQueue != null)) {
                var h = e.updateQueue;
                ((h.lastEffect = null),
                    (h.events = null),
                    (h.stores = null),
                    h.memoCache != null && (h.memoCache.index = 0));
            }
            ((A.H = Pv), (h = t(l, o)));
        } while (Aa);
        return h;
    }
    function Qw() {
        var e = A.H,
            t = e.useState()[0];
        return (
            (t = typeof t.then == 'function' ? Xo(t) : t),
            (e = e.useState()[0]),
            (ut !== null ? ut.memoizedState : null) !== e && (Ne.flags |= 1024),
            t
        );
    }
    function Sd() {
        var e = Mu !== 0;
        return ((Mu = 0), e);
    }
    function xd(e, t, l) {
        ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l));
    }
    function wd(e) {
        if (Au) {
            for (e = e.memoizedState; e !== null; ) {
                var t = e.queue;
                (t !== null && (t.pending = null), (e = e.next));
            }
            Au = !1;
        }
        ((ol = 0), (Ht = ut = Ne = null), (Aa = !1), (Go = Mu = 0), (Ma = null));
    }
    function yn() {
        var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
        return (Ht === null ? (Ne.memoizedState = Ht = e) : (Ht = Ht.next = e), Ht);
    }
    function Nt() {
        if (ut === null) {
            var e = Ne.alternate;
            e = e !== null ? e.memoizedState : null;
        } else e = ut.next;
        var t = Ht === null ? Ne.memoizedState : Ht.next;
        if (t !== null) ((Ht = t), (ut = e));
        else {
            if (e === null) throw Ne.alternate === null ? Error(a(467)) : Error(a(310));
            ((ut = e),
                (e = {
                    memoizedState: ut.memoizedState,
                    baseState: ut.baseState,
                    baseQueue: ut.baseQueue,
                    queue: ut.queue,
                    next: null,
                }),
                Ht === null ? (Ne.memoizedState = Ht = e) : (Ht = Ht.next = e));
        }
        return Ht;
    }
    function Ou() {
        return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function Xo(e) {
        var t = Go;
        return (
            (Go += 1),
            Ma === null && (Ma = []),
            (e = Wg(Ma, e, t)),
            (t = Ne),
            (Ht === null ? t.memoizedState : Ht.next) === null &&
                ((t = t.alternate), (A.H = t === null || t.memoizedState === null ? Vv : kd)),
            e
        );
    }
    function Cu(e) {
        if (e !== null && typeof e == 'object') {
            if (typeof e.then == 'function') return Xo(e);
            if (e.$$typeof === D) return ln(e);
        }
        throw Error(a(438, String(e)));
    }
    function Ed(e) {
        var t = null,
            l = Ne.updateQueue;
        if ((l !== null && (t = l.memoCache), t == null)) {
            var o = Ne.alternate;
            o !== null &&
                ((o = o.updateQueue),
                o !== null &&
                    ((o = o.memoCache),
                    o != null &&
                        (t = {
                            data: o.data.map(function (c) {
                                return c.slice();
                            }),
                            index: 0,
                        })));
        }
        if (
            (t == null && (t = { data: [], index: 0 }),
            l === null && ((l = Ou()), (Ne.updateQueue = l)),
            (l.memoCache = t),
            (l = t.data[t.index]),
            l === void 0)
        )
            for (l = t.data[t.index] = Array(e), o = 0; o < e; o++) l[o] = se;
        return (t.index++, l);
    }
    function sl(e, t) {
        return typeof t == 'function' ? t(e) : t;
    }
    function Du(e) {
        var t = Nt();
        return Td(t, ut, e);
    }
    function Td(e, t, l) {
        var o = e.queue;
        if (o === null) throw Error(a(311));
        o.lastRenderedReducer = l;
        var c = e.baseQueue,
            h = o.pending;
        if (h !== null) {
            if (c !== null) {
                var _ = c.next;
                ((c.next = h.next), (h.next = _));
            }
            ((t.baseQueue = c = h), (o.pending = null));
        }
        if (((h = e.baseState), c === null)) e.memoizedState = h;
        else {
            t = c.next;
            var w = (_ = null),
                N = null,
                Z = t,
                ie = !1;
            do {
                var oe = Z.lane & -536870913;
                if (oe !== Z.lane ? (qe & oe) === oe : (ol & oe) === oe) {
                    var K = Z.revertLane;
                    if (K === 0)
                        (N !== null &&
                            (N = N.next =
                                {
                                    lane: 0,
                                    revertLane: 0,
                                    gesture: null,
                                    action: Z.action,
                                    hasEagerState: Z.hasEagerState,
                                    eagerState: Z.eagerState,
                                    next: null,
                                }),
                            oe === Sa && (ie = !0));
                    else if ((ol & K) === K) {
                        ((Z = Z.next), K === Sa && (ie = !0));
                        continue;
                    } else
                        ((oe = {
                            lane: 0,
                            revertLane: Z.revertLane,
                            gesture: null,
                            action: Z.action,
                            hasEagerState: Z.hasEagerState,
                            eagerState: Z.eagerState,
                            next: null,
                        }),
                            N === null ? ((w = N = oe), (_ = h)) : (N = N.next = oe),
                            (Ne.lanes |= K),
                            (Kl |= K));
                    ((oe = Z.action), Ur && l(h, oe), (h = Z.hasEagerState ? Z.eagerState : l(h, oe)));
                } else
                    ((K = {
                        lane: oe,
                        revertLane: Z.revertLane,
                        gesture: Z.gesture,
                        action: Z.action,
                        hasEagerState: Z.hasEagerState,
                        eagerState: Z.eagerState,
                        next: null,
                    }),
                        N === null ? ((w = N = K), (_ = h)) : (N = N.next = K),
                        (Ne.lanes |= oe),
                        (Kl |= oe));
                Z = Z.next;
            } while (Z !== null && Z !== t);
            if (
                (N === null ? (_ = h) : (N.next = w),
                !Hn(h, e.memoizedState) && ((Yt = !0), ie && ((l = xa), l !== null)))
            )
                throw l;
            ((e.memoizedState = h), (e.baseState = _), (e.baseQueue = N), (o.lastRenderedState = h));
        }
        return (c === null && (o.lanes = 0), [e.memoizedState, o.dispatch]);
    }
    function Ad(e) {
        var t = Nt(),
            l = t.queue;
        if (l === null) throw Error(a(311));
        l.lastRenderedReducer = e;
        var o = l.dispatch,
            c = l.pending,
            h = t.memoizedState;
        if (c !== null) {
            l.pending = null;
            var _ = (c = c.next);
            do ((h = e(h, _.action)), (_ = _.next));
            while (_ !== c);
            (Hn(h, t.memoizedState) || (Yt = !0),
                (t.memoizedState = h),
                t.baseQueue === null && (t.baseState = h),
                (l.lastRenderedState = h));
        }
        return [h, o];
    }
    function cv(e, t, l) {
        var o = Ne,
            c = Nt(),
            h = Ke;
        if (h) {
            if (l === void 0) throw Error(a(407));
            l = l();
        } else l = t();
        var _ = !Hn((ut || c).memoizedState, l);
        if (
            (_ && ((c.memoizedState = l), (Yt = !0)),
            (c = c.queue),
            Cd(hv.bind(null, o, c, e), [e]),
            c.getSnapshot !== t || _ || (Ht !== null && Ht.memoizedState.tag & 1))
        ) {
            if (((o.flags |= 2048), Oa(9, { destroy: void 0 }, dv.bind(null, o, c, l, t), null), dt === null))
                throw Error(a(349));
            h || (ol & 127) !== 0 || fv(o, t, l);
        }
        return l;
    }
    function fv(e, t, l) {
        ((e.flags |= 16384),
            (e = { getSnapshot: t, value: l }),
            (t = Ne.updateQueue),
            t === null
                ? ((t = Ou()), (Ne.updateQueue = t), (t.stores = [e]))
                : ((l = t.stores), l === null ? (t.stores = [e]) : l.push(e)));
    }
    function dv(e, t, l, o) {
        ((t.value = l), (t.getSnapshot = o), mv(t) && pv(e));
    }
    function hv(e, t, l) {
        return l(function () {
            mv(t) && pv(e);
        });
    }
    function mv(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var l = t();
            return !Hn(e, l);
        } catch {
            return !0;
        }
    }
    function pv(e) {
        var t = Mr(e, 2);
        t !== null && Dn(t, e, 2);
    }
    function Md(e) {
        var t = yn();
        if (typeof e == 'function') {
            var l = e;
            if (((e = l()), Ur)) {
                nt(!0);
                try {
                    l();
                } finally {
                    nt(!1);
                }
            }
        }
        return (
            (t.memoizedState = t.baseState = e),
            (t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: sl, lastRenderedState: e }),
            t
        );
    }
    function gv(e, t, l, o) {
        return ((e.baseState = l), Td(e, ut, typeof o == 'function' ? o : sl));
    }
    function Zw(e, t, l, o, c) {
        if (Nu(e)) throw Error(a(485));
        if (((e = t.action), e !== null)) {
            var h = {
                payload: c,
                action: e,
                next: null,
                isTransition: !0,
                status: 'pending',
                value: null,
                reason: null,
                listeners: [],
                then: function (_) {
                    h.listeners.push(_);
                },
            };
            (A.T !== null ? l(!0) : (h.isTransition = !1),
                o(h),
                (l = t.pending),
                l === null ? ((h.next = t.pending = h), vv(t, h)) : ((h.next = l.next), (t.pending = l.next = h)));
        }
    }
    function vv(e, t) {
        var l = t.action,
            o = t.payload,
            c = e.state;
        if (t.isTransition) {
            var h = A.T,
                _ = {};
            A.T = _;
            try {
                var w = l(c, o),
                    N = A.S;
                (N !== null && N(_, w), yv(e, t, w));
            } catch (Z) {
                Od(e, t, Z);
            } finally {
                (h !== null && _.types !== null && (h.types = _.types), (A.T = h));
            }
        } else
            try {
                ((h = l(c, o)), yv(e, t, h));
            } catch (Z) {
                Od(e, t, Z);
            }
    }
    function yv(e, t, l) {
        l !== null && typeof l == 'object' && typeof l.then == 'function'
            ? l.then(
                  function (o) {
                      _v(e, t, o);
                  },
                  function (o) {
                      return Od(e, t, o);
                  },
              )
            : _v(e, t, l);
    }
    function _v(e, t, l) {
        ((t.status = 'fulfilled'),
            (t.value = l),
            bv(t),
            (e.state = l),
            (t = e.pending),
            t !== null && ((l = t.next), l === t ? (e.pending = null) : ((l = l.next), (t.next = l), vv(e, l))));
    }
    function Od(e, t, l) {
        var o = e.pending;
        if (((e.pending = null), o !== null)) {
            o = o.next;
            do ((t.status = 'rejected'), (t.reason = l), bv(t), (t = t.next));
            while (t !== o);
        }
        e.action = null;
    }
    function bv(e) {
        e = e.listeners;
        for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function Sv(e, t) {
        return t;
    }
    function xv(e, t) {
        if (Ke) {
            var l = dt.formState;
            if (l !== null) {
                e: {
                    var o = Ne;
                    if (Ke) {
                        if (yt) {
                            t: {
                                for (var c = yt, h = ui; c.nodeType !== 8; ) {
                                    if (!h) {
                                        c = null;
                                        break t;
                                    }
                                    if (((c = fi(c.nextSibling)), c === null)) {
                                        c = null;
                                        break t;
                                    }
                                }
                                ((h = c.data), (c = h === 'F!' || h === 'F' ? c : null));
                            }
                            if (c) {
                                ((yt = fi(c.nextSibling)), (o = c.data === 'F!'));
                                break e;
                            }
                        }
                        Hl(o);
                    }
                    o = !1;
                }
                o && (t = l[0]);
            }
        }
        return (
            (l = yn()),
            (l.memoizedState = l.baseState = t),
            (o = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Sv, lastRenderedState: t }),
            (l.queue = o),
            (l = Gv.bind(null, Ne, o)),
            (o.dispatch = l),
            (o = Md(!1)),
            (h = Ld.bind(null, Ne, !1, o.queue)),
            (o = yn()),
            (c = { state: t, dispatch: null, action: e, pending: null }),
            (o.queue = c),
            (l = Zw.bind(null, Ne, c, h, l)),
            (c.dispatch = l),
            (o.memoizedState = e),
            [t, l, !1]
        );
    }
    function wv(e) {
        var t = Nt();
        return Ev(t, ut, e);
    }
    function Ev(e, t, l) {
        if (((t = Td(e, t, Sv)[0]), (e = Du(sl)[0]), typeof t == 'object' && t !== null && typeof t.then == 'function'))
            try {
                var o = Xo(t);
            } catch (_) {
                throw _ === wa ? bu : _;
            }
        else o = t;
        t = Nt();
        var c = t.queue,
            h = c.dispatch;
        return (
            l !== t.memoizedState && ((Ne.flags |= 2048), Oa(9, { destroy: void 0 }, Kw.bind(null, c, l), null)),
            [o, h, e]
        );
    }
    function Kw(e, t) {
        e.action = t;
    }
    function Tv(e) {
        var t = Nt(),
            l = ut;
        if (l !== null) return Ev(t, l, e);
        (Nt(), (t = t.memoizedState), (l = Nt()));
        var o = l.queue.dispatch;
        return ((l.memoizedState = e), [t, o, !1]);
    }
    function Oa(e, t, l, o) {
        return (
            (e = { tag: e, create: l, deps: o, inst: t, next: null }),
            (t = Ne.updateQueue),
            t === null && ((t = Ou()), (Ne.updateQueue = t)),
            (l = t.lastEffect),
            l === null ? (t.lastEffect = e.next = e) : ((o = l.next), (l.next = e), (e.next = o), (t.lastEffect = e)),
            e
        );
    }
    function Av() {
        return Nt().memoizedState;
    }
    function Ru(e, t, l, o) {
        var c = yn();
        ((Ne.flags |= e), (c.memoizedState = Oa(1 | t, { destroy: void 0 }, l, o === void 0 ? null : o)));
    }
    function zu(e, t, l, o) {
        var c = Nt();
        o = o === void 0 ? null : o;
        var h = c.memoizedState.inst;
        ut !== null && o !== null && _d(o, ut.memoizedState.deps)
            ? (c.memoizedState = Oa(t, h, l, o))
            : ((Ne.flags |= e), (c.memoizedState = Oa(1 | t, h, l, o)));
    }
    function Mv(e, t) {
        Ru(8390656, 8, e, t);
    }
    function Cd(e, t) {
        zu(2048, 8, e, t);
    }
    function $w(e) {
        Ne.flags |= 4;
        var t = Ne.updateQueue;
        if (t === null) ((t = Ou()), (Ne.updateQueue = t), (t.events = [e]));
        else {
            var l = t.events;
            l === null ? (t.events = [e]) : l.push(e);
        }
    }
    function Ov(e) {
        var t = Nt().memoizedState;
        return (
            $w({ ref: t, nextImpl: e }),
            function () {
                if ((it & 2) !== 0) throw Error(a(440));
                return t.impl.apply(void 0, arguments);
            }
        );
    }
    function Cv(e, t) {
        return zu(4, 2, e, t);
    }
    function Dv(e, t) {
        return zu(4, 4, e, t);
    }
    function Rv(e, t) {
        if (typeof t == 'function') {
            e = e();
            var l = t(e);
            return function () {
                typeof l == 'function' ? l() : t(null);
            };
        }
        if (t != null)
            return (
                (e = e()),
                (t.current = e),
                function () {
                    t.current = null;
                }
            );
    }
    function zv(e, t, l) {
        ((l = l != null ? l.concat([e]) : null), zu(4, 4, Rv.bind(null, t, e), l));
    }
    function Dd() {}
    function Nv(e, t) {
        var l = Nt();
        t = t === void 0 ? null : t;
        var o = l.memoizedState;
        return t !== null && _d(t, o[1]) ? o[0] : ((l.memoizedState = [e, t]), e);
    }
    function Lv(e, t) {
        var l = Nt();
        t = t === void 0 ? null : t;
        var o = l.memoizedState;
        if (t !== null && _d(t, o[1])) return o[0];
        if (((o = e()), Ur)) {
            nt(!0);
            try {
                e();
            } finally {
                nt(!1);
            }
        }
        return ((l.memoizedState = [o, t]), o);
    }
    function Rd(e, t, l) {
        return l === void 0 || ((ol & 1073741824) !== 0 && (qe & 261930) === 0)
            ? (e.memoizedState = t)
            : ((e.memoizedState = l), (e = ky()), (Ne.lanes |= e), (Kl |= e), l);
    }
    function kv(e, t, l, o) {
        return Hn(l, t)
            ? l
            : Ta.current !== null
              ? ((e = Rd(e, l, o)), Hn(e, t) || (Yt = !0), e)
              : (ol & 42) === 0 || ((ol & 1073741824) !== 0 && (qe & 261930) === 0)
                ? ((Yt = !0), (e.memoizedState = l))
                : ((e = ky()), (Ne.lanes |= e), (Kl |= e), t);
    }
    function Uv(e, t, l, o, c) {
        var h = B.p;
        B.p = h !== 0 && 8 > h ? h : 8;
        var _ = A.T,
            w = {};
        ((A.T = w), Ld(e, !1, t, l));
        try {
            var N = c(),
                Z = A.S;
            if ((Z !== null && Z(w, N), N !== null && typeof N == 'object' && typeof N.then == 'function')) {
                var ie = Vw(N, o);
                qo(e, t, ie, Pn(e));
            } else qo(e, t, o, Pn(e));
        } catch (oe) {
            qo(e, t, { then: function () {}, status: 'rejected', reason: oe }, Pn());
        } finally {
            ((B.p = h), _ !== null && w.types !== null && (_.types = w.types), (A.T = _));
        }
    }
    function Fw() {}
    function zd(e, t, l, o) {
        if (e.tag !== 5) throw Error(a(476));
        var c = jv(e).queue;
        Uv(
            e,
            c,
            t,
            R,
            l === null
                ? Fw
                : function () {
                      return (Bv(e), l(o));
                  },
        );
    }
    function jv(e) {
        var t = e.memoizedState;
        if (t !== null) return t;
        t = {
            memoizedState: R,
            baseState: R,
            baseQueue: null,
            queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: sl, lastRenderedState: R },
            next: null,
        };
        var l = {};
        return (
            (t.next = {
                memoizedState: l,
                baseState: l,
                baseQueue: null,
                queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: sl, lastRenderedState: l },
                next: null,
            }),
            (e.memoizedState = t),
            (e = e.alternate),
            e !== null && (e.memoizedState = t),
            t
        );
    }
    function Bv(e) {
        var t = jv(e);
        (t.next === null && (t = e.alternate.memoizedState), qo(e, t.next.queue, {}, Pn()));
    }
    function Nd() {
        return ln(as);
    }
    function Hv() {
        return Nt().memoizedState;
    }
    function Yv() {
        return Nt().memoizedState;
    }
    function Iw(e) {
        for (var t = e.return; t !== null; ) {
            switch (t.tag) {
                case 24:
                case 3:
                    var l = Pn();
                    e = Xl(l);
                    var o = ql(t, e, l);
                    (o !== null && (Dn(o, t, l), Bo(o, t, l)), (t = { cache: sd() }), (e.payload = t));
                    return;
            }
            t = t.return;
        }
    }
    function Jw(e, t, l) {
        var o = Pn();
        ((l = { lane: o, revertLane: 0, gesture: null, action: l, hasEagerState: !1, eagerState: null, next: null }),
            Nu(e) ? Xv(t, l) : ((l = If(e, t, l, o)), l !== null && (Dn(l, e, o), qv(l, t, o))));
    }
    function Gv(e, t, l) {
        var o = Pn();
        qo(e, t, l, o);
    }
    function qo(e, t, l, o) {
        var c = { lane: o, revertLane: 0, gesture: null, action: l, hasEagerState: !1, eagerState: null, next: null };
        if (Nu(e)) Xv(t, c);
        else {
            var h = e.alternate;
            if (e.lanes === 0 && (h === null || h.lanes === 0) && ((h = t.lastRenderedReducer), h !== null))
                try {
                    var _ = t.lastRenderedState,
                        w = h(_, l);
                    if (((c.hasEagerState = !0), (c.eagerState = w), Hn(w, _)))
                        return (hu(e, t, c, 0), dt === null && du(), !1);
                } catch {
                } finally {
                }
            if (((l = If(e, t, c, o)), l !== null)) return (Dn(l, e, o), qv(l, t, o), !0);
        }
        return !1;
    }
    function Ld(e, t, l, o) {
        if (
            ((o = {
                lane: 2,
                revertLane: dh(),
                gesture: null,
                action: o,
                hasEagerState: !1,
                eagerState: null,
                next: null,
            }),
            Nu(e))
        ) {
            if (t) throw Error(a(479));
        } else ((t = If(e, l, o, 2)), t !== null && Dn(t, e, 2));
    }
    function Nu(e) {
        var t = e.alternate;
        return e === Ne || (t !== null && t === Ne);
    }
    function Xv(e, t) {
        Aa = Au = !0;
        var l = e.pending;
        (l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)), (e.pending = t));
    }
    function qv(e, t, l) {
        if ((l & 4194048) !== 0) {
            var o = t.lanes;
            ((o &= e.pendingLanes), (l |= o), (t.lanes = l), ae(e, l));
        }
    }
    var Vo = {
        readContext: ln,
        use: Cu,
        useCallback: Ct,
        useContext: Ct,
        useEffect: Ct,
        useImperativeHandle: Ct,
        useLayoutEffect: Ct,
        useInsertionEffect: Ct,
        useMemo: Ct,
        useReducer: Ct,
        useRef: Ct,
        useState: Ct,
        useDebugValue: Ct,
        useDeferredValue: Ct,
        useTransition: Ct,
        useSyncExternalStore: Ct,
        useId: Ct,
        useHostTransitionStatus: Ct,
        useFormState: Ct,
        useActionState: Ct,
        useOptimistic: Ct,
        useMemoCache: Ct,
        useCacheRefresh: Ct,
    };
    Vo.useEffectEvent = Ct;
    var Vv = {
            readContext: ln,
            use: Cu,
            useCallback: function (e, t) {
                return ((yn().memoizedState = [e, t === void 0 ? null : t]), e);
            },
            useContext: ln,
            useEffect: Mv,
            useImperativeHandle: function (e, t, l) {
                ((l = l != null ? l.concat([e]) : null), Ru(4194308, 4, Rv.bind(null, t, e), l));
            },
            useLayoutEffect: function (e, t) {
                return Ru(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
                Ru(4, 2, e, t);
            },
            useMemo: function (e, t) {
                var l = yn();
                t = t === void 0 ? null : t;
                var o = e();
                if (Ur) {
                    nt(!0);
                    try {
                        e();
                    } finally {
                        nt(!1);
                    }
                }
                return ((l.memoizedState = [o, t]), o);
            },
            useReducer: function (e, t, l) {
                var o = yn();
                if (l !== void 0) {
                    var c = l(t);
                    if (Ur) {
                        nt(!0);
                        try {
                            l(t);
                        } finally {
                            nt(!1);
                        }
                    }
                } else c = t;
                return (
                    (o.memoizedState = o.baseState = c),
                    (e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: c }),
                    (o.queue = e),
                    (e = e.dispatch = Jw.bind(null, Ne, e)),
                    [o.memoizedState, e]
                );
            },
            useRef: function (e) {
                var t = yn();
                return ((e = { current: e }), (t.memoizedState = e));
            },
            useState: function (e) {
                e = Md(e);
                var t = e.queue,
                    l = Gv.bind(null, Ne, t);
                return ((t.dispatch = l), [e.memoizedState, l]);
            },
            useDebugValue: Dd,
            useDeferredValue: function (e, t) {
                var l = yn();
                return Rd(l, e, t);
            },
            useTransition: function () {
                var e = Md(!1);
                return ((e = Uv.bind(null, Ne, e.queue, !0, !1)), (yn().memoizedState = e), [!1, e]);
            },
            useSyncExternalStore: function (e, t, l) {
                var o = Ne,
                    c = yn();
                if (Ke) {
                    if (l === void 0) throw Error(a(407));
                    l = l();
                } else {
                    if (((l = t()), dt === null)) throw Error(a(349));
                    (qe & 127) !== 0 || fv(o, t, l);
                }
                c.memoizedState = l;
                var h = { value: l, getSnapshot: t };
                return (
                    (c.queue = h),
                    Mv(hv.bind(null, o, h, e), [e]),
                    (o.flags |= 2048),
                    Oa(9, { destroy: void 0 }, dv.bind(null, o, h, l, t), null),
                    l
                );
            },
            useId: function () {
                var e = yn(),
                    t = dt.identifierPrefix;
                if (Ke) {
                    var l = ki,
                        o = Li;
                    ((l = (o & ~(1 << (32 - Ie(o) - 1))).toString(32) + l),
                        (t = '_' + t + 'R_' + l),
                        (l = Mu++),
                        0 < l && (t += 'H' + l.toString(32)),
                        (t += '_'));
                } else ((l = Pw++), (t = '_' + t + 'r_' + l.toString(32) + '_'));
                return (e.memoizedState = t);
            },
            useHostTransitionStatus: Nd,
            useFormState: xv,
            useActionState: xv,
            useOptimistic: function (e) {
                var t = yn();
                t.memoizedState = t.baseState = e;
                var l = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
                return ((t.queue = l), (t = Ld.bind(null, Ne, !0, l)), (l.dispatch = t), [e, t]);
            },
            useMemoCache: Ed,
            useCacheRefresh: function () {
                return (yn().memoizedState = Iw.bind(null, Ne));
            },
            useEffectEvent: function (e) {
                var t = yn(),
                    l = { impl: e };
                return (
                    (t.memoizedState = l),
                    function () {
                        if ((it & 2) !== 0) throw Error(a(440));
                        return l.impl.apply(void 0, arguments);
                    }
                );
            },
        },
        kd = {
            readContext: ln,
            use: Cu,
            useCallback: Nv,
            useContext: ln,
            useEffect: Cd,
            useImperativeHandle: zv,
            useInsertionEffect: Cv,
            useLayoutEffect: Dv,
            useMemo: Lv,
            useReducer: Du,
            useRef: Av,
            useState: function () {
                return Du(sl);
            },
            useDebugValue: Dd,
            useDeferredValue: function (e, t) {
                var l = Nt();
                return kv(l, ut.memoizedState, e, t);
            },
            useTransition: function () {
                var e = Du(sl)[0],
                    t = Nt().memoizedState;
                return [typeof e == 'boolean' ? e : Xo(e), t];
            },
            useSyncExternalStore: cv,
            useId: Hv,
            useHostTransitionStatus: Nd,
            useFormState: wv,
            useActionState: wv,
            useOptimistic: function (e, t) {
                var l = Nt();
                return gv(l, ut, e, t);
            },
            useMemoCache: Ed,
            useCacheRefresh: Yv,
        };
    kd.useEffectEvent = Ov;
    var Pv = {
        readContext: ln,
        use: Cu,
        useCallback: Nv,
        useContext: ln,
        useEffect: Cd,
        useImperativeHandle: zv,
        useInsertionEffect: Cv,
        useLayoutEffect: Dv,
        useMemo: Lv,
        useReducer: Ad,
        useRef: Av,
        useState: function () {
            return Ad(sl);
        },
        useDebugValue: Dd,
        useDeferredValue: function (e, t) {
            var l = Nt();
            return ut === null ? Rd(l, e, t) : kv(l, ut.memoizedState, e, t);
        },
        useTransition: function () {
            var e = Ad(sl)[0],
                t = Nt().memoizedState;
            return [typeof e == 'boolean' ? e : Xo(e), t];
        },
        useSyncExternalStore: cv,
        useId: Hv,
        useHostTransitionStatus: Nd,
        useFormState: Tv,
        useActionState: Tv,
        useOptimistic: function (e, t) {
            var l = Nt();
            return ut !== null ? gv(l, ut, e, t) : ((l.baseState = e), [e, l.queue.dispatch]);
        },
        useMemoCache: Ed,
        useCacheRefresh: Yv,
    };
    Pv.useEffectEvent = Ov;
    function Ud(e, t, l, o) {
        ((t = e.memoizedState),
            (l = l(o, t)),
            (l = l == null ? t : y({}, t, l)),
            (e.memoizedState = l),
            e.lanes === 0 && (e.updateQueue.baseState = l));
    }
    var jd = {
        enqueueSetState: function (e, t, l) {
            e = e._reactInternals;
            var o = Pn(),
                c = Xl(o);
            ((c.payload = t),
                l != null && (c.callback = l),
                (t = ql(e, c, o)),
                t !== null && (Dn(t, e, o), Bo(t, e, o)));
        },
        enqueueReplaceState: function (e, t, l) {
            e = e._reactInternals;
            var o = Pn(),
                c = Xl(o);
            ((c.tag = 1),
                (c.payload = t),
                l != null && (c.callback = l),
                (t = ql(e, c, o)),
                t !== null && (Dn(t, e, o), Bo(t, e, o)));
        },
        enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var l = Pn(),
                o = Xl(l);
            ((o.tag = 2), t != null && (o.callback = t), (t = ql(e, o, l)), t !== null && (Dn(t, e, l), Bo(t, e, l)));
        },
    };
    function Qv(e, t, l, o, c, h, _) {
        return (
            (e = e.stateNode),
            typeof e.shouldComponentUpdate == 'function'
                ? e.shouldComponentUpdate(o, h, _)
                : t.prototype && t.prototype.isPureReactComponent
                  ? !Do(l, o) || !Do(c, h)
                  : !0
        );
    }
    function Zv(e, t, l, o) {
        ((e = t.state),
            typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(l, o),
            typeof t.UNSAFE_componentWillReceiveProps == 'function' && t.UNSAFE_componentWillReceiveProps(l, o),
            t.state !== e && jd.enqueueReplaceState(t, t.state, null));
    }
    function jr(e, t) {
        var l = t;
        if ('ref' in t) {
            l = {};
            for (var o in t) o !== 'ref' && (l[o] = t[o]);
        }
        if ((e = e.defaultProps)) {
            l === t && (l = y({}, l));
            for (var c in e) l[c] === void 0 && (l[c] = e[c]);
        }
        return l;
    }
    function Kv(e) {
        fu(e);
    }
    function $v(e) {
        console.error(e);
    }
    function Fv(e) {
        fu(e);
    }
    function Lu(e, t) {
        try {
            var l = e.onUncaughtError;
            l(t.value, { componentStack: t.stack });
        } catch (o) {
            setTimeout(function () {
                throw o;
            });
        }
    }
    function Iv(e, t, l) {
        try {
            var o = e.onCaughtError;
            o(l.value, { componentStack: l.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
        } catch (c) {
            setTimeout(function () {
                throw c;
            });
        }
    }
    function Bd(e, t, l) {
        return (
            (l = Xl(l)),
            (l.tag = 3),
            (l.payload = { element: null }),
            (l.callback = function () {
                Lu(e, t);
            }),
            l
        );
    }
    function Jv(e) {
        return ((e = Xl(e)), (e.tag = 3), e);
    }
    function Wv(e, t, l, o) {
        var c = l.type.getDerivedStateFromError;
        if (typeof c == 'function') {
            var h = o.value;
            ((e.payload = function () {
                return c(h);
            }),
                (e.callback = function () {
                    Iv(t, l, o);
                }));
        }
        var _ = l.stateNode;
        _ !== null &&
            typeof _.componentDidCatch == 'function' &&
            (e.callback = function () {
                (Iv(t, l, o), typeof c != 'function' && ($l === null ? ($l = new Set([this])) : $l.add(this)));
                var w = o.stack;
                this.componentDidCatch(o.value, { componentStack: w !== null ? w : '' });
            });
    }
    function Ww(e, t, l, o, c) {
        if (((l.flags |= 32768), o !== null && typeof o == 'object' && typeof o.then == 'function')) {
            if (((t = l.alternate), t !== null && ba(t, l, c, !0), (l = Gn.current), l !== null)) {
                switch (l.tag) {
                    case 31:
                    case 13:
                        return (
                            ci === null ? Qu() : l.alternate === null && Dt === 0 && (Dt = 3),
                            (l.flags &= -257),
                            (l.flags |= 65536),
                            (l.lanes = c),
                            o === Su
                                ? (l.flags |= 16384)
                                : ((t = l.updateQueue),
                                  t === null ? (l.updateQueue = new Set([o])) : t.add(o),
                                  uh(e, o, c)),
                            !1
                        );
                    case 22:
                        return (
                            (l.flags |= 65536),
                            o === Su
                                ? (l.flags |= 16384)
                                : ((t = l.updateQueue),
                                  t === null
                                      ? ((t = { transitions: null, markerInstances: null, retryQueue: new Set([o]) }),
                                        (l.updateQueue = t))
                                      : ((l = t.retryQueue), l === null ? (t.retryQueue = new Set([o])) : l.add(o)),
                                  uh(e, o, c)),
                            !1
                        );
                }
                throw Error(a(435, l.tag));
            }
            return (uh(e, o, c), Qu(), !1);
        }
        if (Ke)
            return (
                (t = Gn.current),
                t !== null
                    ? ((t.flags & 65536) === 0 && (t.flags |= 256),
                      (t.flags |= 65536),
                      (t.lanes = c),
                      o !== id && ((e = Error(a(422), { cause: o })), No(ai(e, l))))
                    : (o !== id && ((t = Error(a(423), { cause: o })), No(ai(t, l))),
                      (e = e.current.alternate),
                      (e.flags |= 65536),
                      (c &= -c),
                      (e.lanes |= c),
                      (o = ai(o, l)),
                      (c = Bd(e.stateNode, o, c)),
                      md(e, c),
                      Dt !== 4 && (Dt = 2)),
                !1
            );
        var h = Error(a(520), { cause: o });
        if (((h = ai(h, l)), Jo === null ? (Jo = [h]) : Jo.push(h), Dt !== 4 && (Dt = 2), t === null)) return !0;
        ((o = ai(o, l)), (l = t));
        do {
            switch (l.tag) {
                case 3:
                    return (
                        (l.flags |= 65536),
                        (e = c & -c),
                        (l.lanes |= e),
                        (e = Bd(l.stateNode, o, e)),
                        md(l, e),
                        !1
                    );
                case 1:
                    if (
                        ((t = l.type),
                        (h = l.stateNode),
                        (l.flags & 128) === 0 &&
                            (typeof t.getDerivedStateFromError == 'function' ||
                                (h !== null &&
                                    typeof h.componentDidCatch == 'function' &&
                                    ($l === null || !$l.has(h)))))
                    )
                        return (
                            (l.flags |= 65536),
                            (c &= -c),
                            (l.lanes |= c),
                            (c = Jv(c)),
                            Wv(c, e, l, o),
                            md(l, c),
                            !1
                        );
            }
            l = l.return;
        } while (l !== null);
        return !1;
    }
    var Hd = Error(a(461)),
        Yt = !1;
    function rn(e, t, l, o) {
        t.child = e === null ? iv(t, null, l, o) : kr(t, e.child, l, o);
    }
    function ey(e, t, l, o, c) {
        l = l.render;
        var h = t.ref;
        if ('ref' in o) {
            var _ = {};
            for (var w in o) w !== 'ref' && (_[w] = o[w]);
        } else _ = o;
        return (
            Rr(t),
            (o = bd(e, t, l, _, h, c)),
            (w = Sd()),
            e !== null && !Yt ? (xd(e, t, c), ul(e, t, c)) : (Ke && w && td(t), (t.flags |= 1), rn(e, t, o, c), t.child)
        );
    }
    function ty(e, t, l, o, c) {
        if (e === null) {
            var h = l.type;
            return typeof h == 'function' && !Jf(h) && h.defaultProps === void 0 && l.compare === null
                ? ((t.tag = 15), (t.type = h), ny(e, t, h, o, c))
                : ((e = pu(l.type, null, o, t, t.mode, c)), (e.ref = t.ref), (e.return = t), (t.child = e));
        }
        if (((h = e.child), !Zd(e, c))) {
            var _ = h.memoizedProps;
            if (((l = l.compare), (l = l !== null ? l : Do), l(_, o) && e.ref === t.ref)) return ul(e, t, c);
        }
        return ((t.flags |= 1), (e = il(h, o)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    function ny(e, t, l, o, c) {
        if (e !== null) {
            var h = e.memoizedProps;
            if (Do(h, o) && e.ref === t.ref)
                if (((Yt = !1), (t.pendingProps = o = h), Zd(e, c))) (e.flags & 131072) !== 0 && (Yt = !0);
                else return ((t.lanes = e.lanes), ul(e, t, c));
        }
        return Yd(e, t, l, o, c);
    }
    function iy(e, t, l, o) {
        var c = o.children,
            h = e !== null ? e.memoizedState : null;
        if (
            (e === null &&
                t.stateNode === null &&
                (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }),
            o.mode === 'hidden')
        ) {
            if ((t.flags & 128) !== 0) {
                if (((h = h !== null ? h.baseLanes | l : l), e !== null)) {
                    for (o = t.child = e.child, c = 0; o !== null; )
                        ((c = c | o.lanes | o.childLanes), (o = o.sibling));
                    o = c & ~h;
                } else ((o = 0), (t.child = null));
                return ly(e, t, h, l, o);
            }
            if ((l & 536870912) !== 0)
                ((t.memoizedState = { baseLanes: 0, cachePool: null }),
                    e !== null && _u(t, h !== null ? h.cachePool : null),
                    h !== null ? av(t, h) : gd(),
                    ov(t));
            else return ((o = t.lanes = 536870912), ly(e, t, h !== null ? h.baseLanes | l : l, l, o));
        } else
            h !== null
                ? (_u(t, h.cachePool), av(t, h), Pl(), (t.memoizedState = null))
                : (e !== null && _u(t, null), gd(), Pl());
        return (rn(e, t, c, l), t.child);
    }
    function Po(e, t) {
        return (
            (e !== null && e.tag === 22) ||
                t.stateNode !== null ||
                (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }),
            t.sibling
        );
    }
    function ly(e, t, l, o, c) {
        var h = cd();
        return (
            (h = h === null ? null : { parent: Bt._currentValue, pool: h }),
            (t.memoizedState = { baseLanes: l, cachePool: h }),
            e !== null && _u(t, null),
            gd(),
            ov(t),
            e !== null && ba(e, t, o, !0),
            (t.childLanes = c),
            null
        );
    }
    function ku(e, t) {
        return (
            (t = ju({ mode: t.mode, children: t.children }, e.mode)),
            (t.ref = e.ref),
            (e.child = t),
            (t.return = e),
            t
        );
    }
    function ry(e, t, l) {
        return (
            kr(t, e.child, null, l),
            (e = ku(t, t.pendingProps)),
            (e.flags |= 2),
            Xn(t),
            (t.memoizedState = null),
            e
        );
    }
    function eE(e, t, l) {
        var o = t.pendingProps,
            c = (t.flags & 128) !== 0;
        if (((t.flags &= -129), e === null)) {
            if (Ke) {
                if (o.mode === 'hidden') return ((e = ku(t, o)), (t.lanes = 536870912), Po(null, e));
                if (
                    (yd(t),
                    (e = yt)
                        ? ((e = v0(e, ui)),
                          (e = e !== null && e.data === '&' ? e : null),
                          e !== null &&
                              ((t.memoizedState = {
                                  dehydrated: e,
                                  treeContext: jl !== null ? { id: Li, overflow: ki } : null,
                                  retryLane: 536870912,
                                  hydrationErrors: null,
                              }),
                              (l = Xg(e)),
                              (l.return = t),
                              (t.child = l),
                              (nn = t),
                              (yt = null)))
                        : (e = null),
                    e === null)
                )
                    throw Hl(t);
                return ((t.lanes = 536870912), null);
            }
            return ku(t, o);
        }
        var h = e.memoizedState;
        if (h !== null) {
            var _ = h.dehydrated;
            if ((yd(t), c))
                if (t.flags & 256) ((t.flags &= -257), (t = ry(e, t, l)));
                else if (t.memoizedState !== null) ((t.child = e.child), (t.flags |= 128), (t = null));
                else throw Error(a(558));
            else if ((Yt || ba(e, t, l, !1), (c = (l & e.childLanes) !== 0), Yt || c)) {
                if (((o = dt), o !== null && ((_ = ce(o, l)), _ !== 0 && _ !== h.retryLane)))
                    throw ((h.retryLane = _), Mr(e, _), Dn(o, e, _), Hd);
                (Qu(), (t = ry(e, t, l)));
            } else
                ((e = h.treeContext),
                    (yt = fi(_.nextSibling)),
                    (nn = t),
                    (Ke = !0),
                    (Bl = null),
                    (ui = !1),
                    e !== null && Pg(t, e),
                    (t = ku(t, o)),
                    (t.flags |= 4096));
            return t;
        }
        return (
            (e = il(e.child, { mode: o.mode, children: o.children })),
            (e.ref = t.ref),
            (t.child = e),
            (e.return = t),
            e
        );
    }
    function Uu(e, t) {
        var l = t.ref;
        if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
        else {
            if (typeof l != 'function' && typeof l != 'object') throw Error(a(284));
            (e === null || e.ref !== l) && (t.flags |= 4194816);
        }
    }
    function Yd(e, t, l, o, c) {
        return (
            Rr(t),
            (l = bd(e, t, l, o, void 0, c)),
            (o = Sd()),
            e !== null && !Yt ? (xd(e, t, c), ul(e, t, c)) : (Ke && o && td(t), (t.flags |= 1), rn(e, t, l, c), t.child)
        );
    }
    function ay(e, t, l, o, c, h) {
        return (
            Rr(t),
            (t.updateQueue = null),
            (l = uv(t, o, l, c)),
            sv(e),
            (o = Sd()),
            e !== null && !Yt ? (xd(e, t, h), ul(e, t, h)) : (Ke && o && td(t), (t.flags |= 1), rn(e, t, l, h), t.child)
        );
    }
    function oy(e, t, l, o, c) {
        if ((Rr(t), t.stateNode === null)) {
            var h = ga,
                _ = l.contextType;
            (typeof _ == 'object' && _ !== null && (h = ln(_)),
                (h = new l(o, h)),
                (t.memoizedState = h.state !== null && h.state !== void 0 ? h.state : null),
                (h.updater = jd),
                (t.stateNode = h),
                (h._reactInternals = t),
                (h = t.stateNode),
                (h.props = o),
                (h.state = t.memoizedState),
                (h.refs = {}),
                dd(t),
                (_ = l.contextType),
                (h.context = typeof _ == 'object' && _ !== null ? ln(_) : ga),
                (h.state = t.memoizedState),
                (_ = l.getDerivedStateFromProps),
                typeof _ == 'function' && (Ud(t, l, _, o), (h.state = t.memoizedState)),
                typeof l.getDerivedStateFromProps == 'function' ||
                    typeof h.getSnapshotBeforeUpdate == 'function' ||
                    (typeof h.UNSAFE_componentWillMount != 'function' && typeof h.componentWillMount != 'function') ||
                    ((_ = h.state),
                    typeof h.componentWillMount == 'function' && h.componentWillMount(),
                    typeof h.UNSAFE_componentWillMount == 'function' && h.UNSAFE_componentWillMount(),
                    _ !== h.state && jd.enqueueReplaceState(h, h.state, null),
                    Yo(t, o, h, c),
                    Ho(),
                    (h.state = t.memoizedState)),
                typeof h.componentDidMount == 'function' && (t.flags |= 4194308),
                (o = !0));
        } else if (e === null) {
            h = t.stateNode;
            var w = t.memoizedProps,
                N = jr(l, w);
            h.props = N;
            var Z = h.context,
                ie = l.contextType;
            ((_ = ga), typeof ie == 'object' && ie !== null && (_ = ln(ie)));
            var oe = l.getDerivedStateFromProps;
            ((ie = typeof oe == 'function' || typeof h.getSnapshotBeforeUpdate == 'function'),
                (w = t.pendingProps !== w),
                ie ||
                    (typeof h.UNSAFE_componentWillReceiveProps != 'function' &&
                        typeof h.componentWillReceiveProps != 'function') ||
                    ((w || Z !== _) && Zv(t, h, o, _)),
                (Gl = !1));
            var K = t.memoizedState;
            ((h.state = K),
                Yo(t, o, h, c),
                Ho(),
                (Z = t.memoizedState),
                w || K !== Z || Gl
                    ? (typeof oe == 'function' && (Ud(t, l, oe, o), (Z = t.memoizedState)),
                      (N = Gl || Qv(t, l, N, o, K, Z, _))
                          ? (ie ||
                                (typeof h.UNSAFE_componentWillMount != 'function' &&
                                    typeof h.componentWillMount != 'function') ||
                                (typeof h.componentWillMount == 'function' && h.componentWillMount(),
                                typeof h.UNSAFE_componentWillMount == 'function' && h.UNSAFE_componentWillMount()),
                            typeof h.componentDidMount == 'function' && (t.flags |= 4194308))
                          : (typeof h.componentDidMount == 'function' && (t.flags |= 4194308),
                            (t.memoizedProps = o),
                            (t.memoizedState = Z)),
                      (h.props = o),
                      (h.state = Z),
                      (h.context = _),
                      (o = N))
                    : (typeof h.componentDidMount == 'function' && (t.flags |= 4194308), (o = !1)));
        } else {
            ((h = t.stateNode),
                hd(e, t),
                (_ = t.memoizedProps),
                (ie = jr(l, _)),
                (h.props = ie),
                (oe = t.pendingProps),
                (K = h.context),
                (Z = l.contextType),
                (N = ga),
                typeof Z == 'object' && Z !== null && (N = ln(Z)),
                (w = l.getDerivedStateFromProps),
                (Z = typeof w == 'function' || typeof h.getSnapshotBeforeUpdate == 'function') ||
                    (typeof h.UNSAFE_componentWillReceiveProps != 'function' &&
                        typeof h.componentWillReceiveProps != 'function') ||
                    ((_ !== oe || K !== N) && Zv(t, h, o, N)),
                (Gl = !1),
                (K = t.memoizedState),
                (h.state = K),
                Yo(t, o, h, c),
                Ho());
            var J = t.memoizedState;
            _ !== oe || K !== J || Gl || (e !== null && e.dependencies !== null && vu(e.dependencies))
                ? (typeof w == 'function' && (Ud(t, l, w, o), (J = t.memoizedState)),
                  (ie = Gl || Qv(t, l, ie, o, K, J, N) || (e !== null && e.dependencies !== null && vu(e.dependencies)))
                      ? (Z ||
                            (typeof h.UNSAFE_componentWillUpdate != 'function' &&
                                typeof h.componentWillUpdate != 'function') ||
                            (typeof h.componentWillUpdate == 'function' && h.componentWillUpdate(o, J, N),
                            typeof h.UNSAFE_componentWillUpdate == 'function' && h.UNSAFE_componentWillUpdate(o, J, N)),
                        typeof h.componentDidUpdate == 'function' && (t.flags |= 4),
                        typeof h.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
                      : (typeof h.componentDidUpdate != 'function' ||
                            (_ === e.memoizedProps && K === e.memoizedState) ||
                            (t.flags |= 4),
                        typeof h.getSnapshotBeforeUpdate != 'function' ||
                            (_ === e.memoizedProps && K === e.memoizedState) ||
                            (t.flags |= 1024),
                        (t.memoizedProps = o),
                        (t.memoizedState = J)),
                  (h.props = o),
                  (h.state = J),
                  (h.context = N),
                  (o = ie))
                : (typeof h.componentDidUpdate != 'function' ||
                      (_ === e.memoizedProps && K === e.memoizedState) ||
                      (t.flags |= 4),
                  typeof h.getSnapshotBeforeUpdate != 'function' ||
                      (_ === e.memoizedProps && K === e.memoizedState) ||
                      (t.flags |= 1024),
                  (o = !1));
        }
        return (
            (h = o),
            Uu(e, t),
            (o = (t.flags & 128) !== 0),
            h || o
                ? ((h = t.stateNode),
                  (l = o && typeof l.getDerivedStateFromError != 'function' ? null : h.render()),
                  (t.flags |= 1),
                  e !== null && o
                      ? ((t.child = kr(t, e.child, null, c)), (t.child = kr(t, null, l, c)))
                      : rn(e, t, l, c),
                  (t.memoizedState = h.state),
                  (e = t.child))
                : (e = ul(e, t, c)),
            e
        );
    }
    function sy(e, t, l, o) {
        return (Cr(), (t.flags |= 256), rn(e, t, l, o), t.child);
    }
    var Gd = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
    function Xd(e) {
        return { baseLanes: e, cachePool: Ig() };
    }
    function qd(e, t, l) {
        return ((e = e !== null ? e.childLanes & ~l : 0), t && (e |= Vn), e);
    }
    function uy(e, t, l) {
        var o = t.pendingProps,
            c = !1,
            h = (t.flags & 128) !== 0,
            _;
        if (
            ((_ = h) || (_ = e !== null && e.memoizedState === null ? !1 : (zt.current & 2) !== 0),
            _ && ((c = !0), (t.flags &= -129)),
            (_ = (t.flags & 32) !== 0),
            (t.flags &= -33),
            e === null)
        ) {
            if (Ke) {
                if (
                    (c ? Vl(t) : Pl(),
                    (e = yt)
                        ? ((e = v0(e, ui)),
                          (e = e !== null && e.data !== '&' ? e : null),
                          e !== null &&
                              ((t.memoizedState = {
                                  dehydrated: e,
                                  treeContext: jl !== null ? { id: Li, overflow: ki } : null,
                                  retryLane: 536870912,
                                  hydrationErrors: null,
                              }),
                              (l = Xg(e)),
                              (l.return = t),
                              (t.child = l),
                              (nn = t),
                              (yt = null)))
                        : (e = null),
                    e === null)
                )
                    throw Hl(t);
                return (Th(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
            }
            var w = o.children;
            return (
                (o = o.fallback),
                c
                    ? (Pl(),
                      (c = t.mode),
                      (w = ju({ mode: 'hidden', children: w }, c)),
                      (o = Or(o, c, l, null)),
                      (w.return = t),
                      (o.return = t),
                      (w.sibling = o),
                      (t.child = w),
                      (o = t.child),
                      (o.memoizedState = Xd(l)),
                      (o.childLanes = qd(e, _, l)),
                      (t.memoizedState = Gd),
                      Po(null, o))
                    : (Vl(t), Vd(t, w))
            );
        }
        var N = e.memoizedState;
        if (N !== null && ((w = N.dehydrated), w !== null)) {
            if (h)
                t.flags & 256
                    ? (Vl(t), (t.flags &= -257), (t = Pd(e, t, l)))
                    : t.memoizedState !== null
                      ? (Pl(), (t.child = e.child), (t.flags |= 128), (t = null))
                      : (Pl(),
                        (w = o.fallback),
                        (c = t.mode),
                        (o = ju({ mode: 'visible', children: o.children }, c)),
                        (w = Or(w, c, l, null)),
                        (w.flags |= 2),
                        (o.return = t),
                        (w.return = t),
                        (o.sibling = w),
                        (t.child = o),
                        kr(t, e.child, null, l),
                        (o = t.child),
                        (o.memoizedState = Xd(l)),
                        (o.childLanes = qd(e, _, l)),
                        (t.memoizedState = Gd),
                        (t = Po(null, o)));
            else if ((Vl(t), Th(w))) {
                if (((_ = w.nextSibling && w.nextSibling.dataset), _)) var Z = _.dgst;
                ((_ = Z),
                    (o = Error(a(419))),
                    (o.stack = ''),
                    (o.digest = _),
                    No({ value: o, source: null, stack: null }),
                    (t = Pd(e, t, l)));
            } else if ((Yt || ba(e, t, l, !1), (_ = (l & e.childLanes) !== 0), Yt || _)) {
                if (((_ = dt), _ !== null && ((o = ce(_, l)), o !== 0 && o !== N.retryLane)))
                    throw ((N.retryLane = o), Mr(e, o), Dn(_, e, o), Hd);
                (Eh(w) || Qu(), (t = Pd(e, t, l)));
            } else
                Eh(w)
                    ? ((t.flags |= 192), (t.child = e.child), (t = null))
                    : ((e = N.treeContext),
                      (yt = fi(w.nextSibling)),
                      (nn = t),
                      (Ke = !0),
                      (Bl = null),
                      (ui = !1),
                      e !== null && Pg(t, e),
                      (t = Vd(t, o.children)),
                      (t.flags |= 4096));
            return t;
        }
        return c
            ? (Pl(),
              (w = o.fallback),
              (c = t.mode),
              (N = e.child),
              (Z = N.sibling),
              (o = il(N, { mode: 'hidden', children: o.children })),
              (o.subtreeFlags = N.subtreeFlags & 65011712),
              Z !== null ? (w = il(Z, w)) : ((w = Or(w, c, l, null)), (w.flags |= 2)),
              (w.return = t),
              (o.return = t),
              (o.sibling = w),
              (t.child = o),
              Po(null, o),
              (o = t.child),
              (w = e.child.memoizedState),
              w === null
                  ? (w = Xd(l))
                  : ((c = w.cachePool),
                    c !== null
                        ? ((N = Bt._currentValue), (c = c.parent !== N ? { parent: N, pool: N } : c))
                        : (c = Ig()),
                    (w = { baseLanes: w.baseLanes | l, cachePool: c })),
              (o.memoizedState = w),
              (o.childLanes = qd(e, _, l)),
              (t.memoizedState = Gd),
              Po(e.child, o))
            : (Vl(t),
              (l = e.child),
              (e = l.sibling),
              (l = il(l, { mode: 'visible', children: o.children })),
              (l.return = t),
              (l.sibling = null),
              e !== null && ((_ = t.deletions), _ === null ? ((t.deletions = [e]), (t.flags |= 16)) : _.push(e)),
              (t.child = l),
              (t.memoizedState = null),
              l);
    }
    function Vd(e, t) {
        return ((t = ju({ mode: 'visible', children: t }, e.mode)), (t.return = e), (e.child = t));
    }
    function ju(e, t) {
        return ((e = Yn(22, e, null, t)), (e.lanes = 0), e);
    }
    function Pd(e, t, l) {
        return (
            kr(t, e.child, null, l),
            (e = Vd(t, t.pendingProps.children)),
            (e.flags |= 2),
            (t.memoizedState = null),
            e
        );
    }
    function cy(e, t, l) {
        e.lanes |= t;
        var o = e.alternate;
        (o !== null && (o.lanes |= t), ad(e.return, t, l));
    }
    function Qd(e, t, l, o, c, h) {
        var _ = e.memoizedState;
        _ === null
            ? (e.memoizedState = {
                  isBackwards: t,
                  rendering: null,
                  renderingStartTime: 0,
                  last: o,
                  tail: l,
                  tailMode: c,
                  treeForkCount: h,
              })
            : ((_.isBackwards = t),
              (_.rendering = null),
              (_.renderingStartTime = 0),
              (_.last = o),
              (_.tail = l),
              (_.tailMode = c),
              (_.treeForkCount = h));
    }
    function fy(e, t, l) {
        var o = t.pendingProps,
            c = o.revealOrder,
            h = o.tail;
        o = o.children;
        var _ = zt.current,
            w = (_ & 2) !== 0;
        if (
            (w ? ((_ = (_ & 1) | 2), (t.flags |= 128)) : (_ &= 1),
            F(zt, _),
            rn(e, t, o, l),
            (o = Ke ? zo : 0),
            !w && e !== null && (e.flags & 128) !== 0)
        )
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13) e.memoizedState !== null && cy(e, l, t);
                else if (e.tag === 19) cy(e, l, t);
                else if (e.child !== null) {
                    ((e.child.return = e), (e = e.child));
                    continue;
                }
                if (e === t) break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return;
                }
                ((e.sibling.return = e.return), (e = e.sibling));
            }
        switch (c) {
            case 'forwards':
                for (l = t.child, c = null; l !== null; )
                    ((e = l.alternate), e !== null && Tu(e) === null && (c = l), (l = l.sibling));
                ((l = c),
                    l === null ? ((c = t.child), (t.child = null)) : ((c = l.sibling), (l.sibling = null)),
                    Qd(t, !1, c, l, h, o));
                break;
            case 'backwards':
            case 'unstable_legacy-backwards':
                for (l = null, c = t.child, t.child = null; c !== null; ) {
                    if (((e = c.alternate), e !== null && Tu(e) === null)) {
                        t.child = c;
                        break;
                    }
                    ((e = c.sibling), (c.sibling = l), (l = c), (c = e));
                }
                Qd(t, !0, l, null, h, o);
                break;
            case 'together':
                Qd(t, !1, null, null, void 0, o);
                break;
            default:
                t.memoizedState = null;
        }
        return t.child;
    }
    function ul(e, t, l) {
        if ((e !== null && (t.dependencies = e.dependencies), (Kl |= t.lanes), (l & t.childLanes) === 0))
            if (e !== null) {
                if ((ba(e, t, l, !1), (l & t.childLanes) === 0)) return null;
            } else return null;
        if (e !== null && t.child !== e.child) throw Error(a(153));
        if (t.child !== null) {
            for (e = t.child, l = il(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null; )
                ((e = e.sibling), (l = l.sibling = il(e, e.pendingProps)), (l.return = t));
            l.sibling = null;
        }
        return t.child;
    }
    function Zd(e, t) {
        return (e.lanes & t) !== 0 ? !0 : ((e = e.dependencies), !!(e !== null && vu(e)));
    }
    function tE(e, t, l) {
        switch (t.tag) {
            case 3:
                (Ae(t, t.stateNode.containerInfo), Yl(t, Bt, e.memoizedState.cache), Cr());
                break;
            case 27:
            case 5:
                Me(t);
                break;
            case 4:
                Ae(t, t.stateNode.containerInfo);
                break;
            case 10:
                Yl(t, t.type, t.memoizedProps.value);
                break;
            case 31:
                if (t.memoizedState !== null) return ((t.flags |= 128), yd(t), null);
                break;
            case 13:
                var o = t.memoizedState;
                if (o !== null)
                    return o.dehydrated !== null
                        ? (Vl(t), (t.flags |= 128), null)
                        : (l & t.child.childLanes) !== 0
                          ? uy(e, t, l)
                          : (Vl(t), (e = ul(e, t, l)), e !== null ? e.sibling : null);
                Vl(t);
                break;
            case 19:
                var c = (e.flags & 128) !== 0;
                if (((o = (l & t.childLanes) !== 0), o || (ba(e, t, l, !1), (o = (l & t.childLanes) !== 0)), c)) {
                    if (o) return fy(e, t, l);
                    t.flags |= 128;
                }
                if (
                    ((c = t.memoizedState),
                    c !== null && ((c.rendering = null), (c.tail = null), (c.lastEffect = null)),
                    F(zt, zt.current),
                    o)
                )
                    break;
                return null;
            case 22:
                return ((t.lanes = 0), iy(e, t, l, t.pendingProps));
            case 24:
                Yl(t, Bt, e.memoizedState.cache);
        }
        return ul(e, t, l);
    }
    function dy(e, t, l) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps) Yt = !0;
            else {
                if (!Zd(e, l) && (t.flags & 128) === 0) return ((Yt = !1), tE(e, t, l));
                Yt = (e.flags & 131072) !== 0;
            }
        else ((Yt = !1), Ke && (t.flags & 1048576) !== 0 && Vg(t, zo, t.index));
        switch (((t.lanes = 0), t.tag)) {
            case 16:
                e: {
                    var o = t.pendingProps;
                    if (((e = Nr(t.elementType)), (t.type = e), typeof e == 'function'))
                        Jf(e)
                            ? ((o = jr(e, o)), (t.tag = 1), (t = oy(null, t, e, o, l)))
                            : ((t.tag = 0), (t = Yd(null, t, e, o, l)));
                    else {
                        if (e != null) {
                            var c = e.$$typeof;
                            if (c === k) {
                                ((t.tag = 11), (t = ey(null, t, e, o, l)));
                                break e;
                            } else if (c === z) {
                                ((t.tag = 14), (t = ty(null, t, e, o, l)));
                                break e;
                            }
                        }
                        throw ((t = ne(e) || e), Error(a(306, t, '')));
                    }
                }
                return t;
            case 0:
                return Yd(e, t, t.type, t.pendingProps, l);
            case 1:
                return ((o = t.type), (c = jr(o, t.pendingProps)), oy(e, t, o, c, l));
            case 3:
                e: {
                    if ((Ae(t, t.stateNode.containerInfo), e === null)) throw Error(a(387));
                    o = t.pendingProps;
                    var h = t.memoizedState;
                    ((c = h.element), hd(e, t), Yo(t, o, null, l));
                    var _ = t.memoizedState;
                    if (
                        ((o = _.cache),
                        Yl(t, Bt, o),
                        o !== h.cache && od(t, [Bt], l, !0),
                        Ho(),
                        (o = _.element),
                        h.isDehydrated)
                    )
                        if (
                            ((h = { element: o, isDehydrated: !1, cache: _.cache }),
                            (t.updateQueue.baseState = h),
                            (t.memoizedState = h),
                            t.flags & 256)
                        ) {
                            t = sy(e, t, o, l);
                            break e;
                        } else if (o !== c) {
                            ((c = ai(Error(a(424)), t)), No(c), (t = sy(e, t, o, l)));
                            break e;
                        } else {
                            switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                                case 9:
                                    e = e.body;
                                    break;
                                default:
                                    e = e.nodeName === 'HTML' ? e.ownerDocument.body : e;
                            }
                            for (
                                yt = fi(e.firstChild),
                                    nn = t,
                                    Ke = !0,
                                    Bl = null,
                                    ui = !0,
                                    l = iv(t, null, o, l),
                                    t.child = l;
                                l;
                            )
                                ((l.flags = (l.flags & -3) | 4096), (l = l.sibling));
                        }
                    else {
                        if ((Cr(), o === c)) {
                            t = ul(e, t, l);
                            break e;
                        }
                        rn(e, t, o, l);
                    }
                    t = t.child;
                }
                return t;
            case 26:
                return (
                    Uu(e, t),
                    e === null
                        ? (l = w0(t.type, null, t.pendingProps, null))
                            ? (t.memoizedState = l)
                            : Ke ||
                              ((l = t.type),
                              (e = t.pendingProps),
                              (o = Wu(ye.current).createElement(l)),
                              (o[ze] = t),
                              (o[Ue] = e),
                              an(o, l, e),
                              Ot(o),
                              (t.stateNode = o))
                        : (t.memoizedState = w0(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
                    null
                );
            case 27:
                return (
                    Me(t),
                    e === null &&
                        Ke &&
                        ((o = t.stateNode = b0(t.type, t.pendingProps, ye.current)),
                        (nn = t),
                        (ui = !0),
                        (c = yt),
                        Wl(t.type) ? ((Ah = c), (yt = fi(o.firstChild))) : (yt = c)),
                    rn(e, t, t.pendingProps.children, l),
                    Uu(e, t),
                    e === null && (t.flags |= 4194304),
                    t.child
                );
            case 5:
                return (
                    e === null &&
                        Ke &&
                        ((c = o = yt) &&
                            ((o = RE(o, t.type, t.pendingProps, ui)),
                            o !== null
                                ? ((t.stateNode = o), (nn = t), (yt = fi(o.firstChild)), (ui = !1), (c = !0))
                                : (c = !1)),
                        c || Hl(t)),
                    Me(t),
                    (c = t.type),
                    (h = t.pendingProps),
                    (_ = e !== null ? e.memoizedProps : null),
                    (o = h.children),
                    Sh(c, h) ? (o = null) : _ !== null && Sh(c, _) && (t.flags |= 32),
                    t.memoizedState !== null && ((c = bd(e, t, Qw, null, null, l)), (as._currentValue = c)),
                    Uu(e, t),
                    rn(e, t, o, l),
                    t.child
                );
            case 6:
                return (
                    e === null &&
                        Ke &&
                        ((e = l = yt) &&
                            ((l = zE(l, t.pendingProps, ui)),
                            l !== null ? ((t.stateNode = l), (nn = t), (yt = null), (e = !0)) : (e = !1)),
                        e || Hl(t)),
                    null
                );
            case 13:
                return uy(e, t, l);
            case 4:
                return (
                    Ae(t, t.stateNode.containerInfo),
                    (o = t.pendingProps),
                    e === null ? (t.child = kr(t, null, o, l)) : rn(e, t, o, l),
                    t.child
                );
            case 11:
                return ey(e, t, t.type, t.pendingProps, l);
            case 7:
                return (rn(e, t, t.pendingProps, l), t.child);
            case 8:
                return (rn(e, t, t.pendingProps.children, l), t.child);
            case 12:
                return (rn(e, t, t.pendingProps.children, l), t.child);
            case 10:
                return ((o = t.pendingProps), Yl(t, t.type, o.value), rn(e, t, o.children, l), t.child);
            case 9:
                return (
                    (c = t.type._context),
                    (o = t.pendingProps.children),
                    Rr(t),
                    (c = ln(c)),
                    (o = o(c)),
                    (t.flags |= 1),
                    rn(e, t, o, l),
                    t.child
                );
            case 14:
                return ty(e, t, t.type, t.pendingProps, l);
            case 15:
                return ny(e, t, t.type, t.pendingProps, l);
            case 19:
                return fy(e, t, l);
            case 31:
                return eE(e, t, l);
            case 22:
                return iy(e, t, l, t.pendingProps);
            case 24:
                return (
                    Rr(t),
                    (o = ln(Bt)),
                    e === null
                        ? ((c = cd()),
                          c === null &&
                              ((c = dt),
                              (h = sd()),
                              (c.pooledCache = h),
                              h.refCount++,
                              h !== null && (c.pooledCacheLanes |= l),
                              (c = h)),
                          (t.memoizedState = { parent: o, cache: c }),
                          dd(t),
                          Yl(t, Bt, c))
                        : ((e.lanes & l) !== 0 && (hd(e, t), Yo(t, null, null, l), Ho()),
                          (c = e.memoizedState),
                          (h = t.memoizedState),
                          c.parent !== o
                              ? ((c = { parent: o, cache: o }),
                                (t.memoizedState = c),
                                t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = c),
                                Yl(t, Bt, o))
                              : ((o = h.cache), Yl(t, Bt, o), o !== c.cache && od(t, [Bt], l, !0))),
                    rn(e, t, t.pendingProps.children, l),
                    t.child
                );
            case 29:
                throw t.pendingProps;
        }
        throw Error(a(156, t.tag));
    }
    function cl(e) {
        e.flags |= 4;
    }
    function Kd(e, t, l, o, c) {
        if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
            if (((e.flags |= 16777216), (c & 335544128) === c))
                if (e.stateNode.complete) e.flags |= 8192;
                else if (Hy()) e.flags |= 8192;
                else throw ((Lr = Su), fd);
        } else e.flags &= -16777217;
    }
    function hy(e, t) {
        if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0) e.flags &= -16777217;
        else if (((e.flags |= 16777216), !O0(t)))
            if (Hy()) e.flags |= 8192;
            else throw ((Lr = Su), fd);
    }
    function Bu(e, t) {
        (t !== null && (e.flags |= 4),
            e.flags & 16384 && ((t = e.tag !== 22 ? re() : 536870912), (e.lanes |= t), (za |= t)));
    }
    function Qo(e, t) {
        if (!Ke)
            switch (e.tailMode) {
                case 'hidden':
                    t = e.tail;
                    for (var l = null; t !== null; ) (t.alternate !== null && (l = t), (t = t.sibling));
                    l === null ? (e.tail = null) : (l.sibling = null);
                    break;
                case 'collapsed':
                    l = e.tail;
                    for (var o = null; l !== null; ) (l.alternate !== null && (o = l), (l = l.sibling));
                    o === null
                        ? t || e.tail === null
                            ? (e.tail = null)
                            : (e.tail.sibling = null)
                        : (o.sibling = null);
            }
    }
    function _t(e) {
        var t = e.alternate !== null && e.alternate.child === e.child,
            l = 0,
            o = 0;
        if (t)
            for (var c = e.child; c !== null; )
                ((l |= c.lanes | c.childLanes),
                    (o |= c.subtreeFlags & 65011712),
                    (o |= c.flags & 65011712),
                    (c.return = e),
                    (c = c.sibling));
        else
            for (c = e.child; c !== null; )
                ((l |= c.lanes | c.childLanes), (o |= c.subtreeFlags), (o |= c.flags), (c.return = e), (c = c.sibling));
        return ((e.subtreeFlags |= o), (e.childLanes = l), t);
    }
    function nE(e, t, l) {
        var o = t.pendingProps;
        switch ((nd(t), t.tag)) {
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return (_t(t), null);
            case 1:
                return (_t(t), null);
            case 3:
                return (
                    (l = t.stateNode),
                    (o = null),
                    e !== null && (o = e.memoizedState.cache),
                    t.memoizedState.cache !== o && (t.flags |= 2048),
                    al(Bt),
                    De(),
                    l.pendingContext && ((l.context = l.pendingContext), (l.pendingContext = null)),
                    (e === null || e.child === null) &&
                        (_a(t)
                            ? cl(t)
                            : e === null ||
                              (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                              ((t.flags |= 1024), ld())),
                    _t(t),
                    null
                );
            case 26:
                var c = t.type,
                    h = t.memoizedState;
                return (
                    e === null
                        ? (cl(t), h !== null ? (_t(t), hy(t, h)) : (_t(t), Kd(t, c, null, o, l)))
                        : h
                          ? h !== e.memoizedState
                              ? (cl(t), _t(t), hy(t, h))
                              : (_t(t), (t.flags &= -16777217))
                          : ((e = e.memoizedProps), e !== o && cl(t), _t(t), Kd(t, c, e, o, l)),
                    null
                );
            case 27:
                if ((Pe(t), (l = ye.current), (c = t.type), e !== null && t.stateNode != null))
                    e.memoizedProps !== o && cl(t);
                else {
                    if (!o) {
                        if (t.stateNode === null) throw Error(a(166));
                        return (_t(t), null);
                    }
                    ((e = ee.current), _a(t) ? Qg(t) : ((e = b0(c, o, l)), (t.stateNode = e), cl(t)));
                }
                return (_t(t), null);
            case 5:
                if ((Pe(t), (c = t.type), e !== null && t.stateNode != null)) e.memoizedProps !== o && cl(t);
                else {
                    if (!o) {
                        if (t.stateNode === null) throw Error(a(166));
                        return (_t(t), null);
                    }
                    if (((h = ee.current), _a(t))) Qg(t);
                    else {
                        var _ = Wu(ye.current);
                        switch (h) {
                            case 1:
                                h = _.createElementNS('http://www.w3.org/2000/svg', c);
                                break;
                            case 2:
                                h = _.createElementNS('http://www.w3.org/1998/Math/MathML', c);
                                break;
                            default:
                                switch (c) {
                                    case 'svg':
                                        h = _.createElementNS('http://www.w3.org/2000/svg', c);
                                        break;
                                    case 'math':
                                        h = _.createElementNS('http://www.w3.org/1998/Math/MathML', c);
                                        break;
                                    case 'script':
                                        ((h = _.createElement('div')),
                                            (h.innerHTML = '<script><\/script>'),
                                            (h = h.removeChild(h.firstChild)));
                                        break;
                                    case 'select':
                                        ((h =
                                            typeof o.is == 'string'
                                                ? _.createElement('select', { is: o.is })
                                                : _.createElement('select')),
                                            o.multiple ? (h.multiple = !0) : o.size && (h.size = o.size));
                                        break;
                                    default:
                                        h =
                                            typeof o.is == 'string'
                                                ? _.createElement(c, { is: o.is })
                                                : _.createElement(c);
                                }
                        }
                        ((h[ze] = t), (h[Ue] = o));
                        e: for (_ = t.child; _ !== null; ) {
                            if (_.tag === 5 || _.tag === 6) h.appendChild(_.stateNode);
                            else if (_.tag !== 4 && _.tag !== 27 && _.child !== null) {
                                ((_.child.return = _), (_ = _.child));
                                continue;
                            }
                            if (_ === t) break e;
                            for (; _.sibling === null; ) {
                                if (_.return === null || _.return === t) break e;
                                _ = _.return;
                            }
                            ((_.sibling.return = _.return), (_ = _.sibling));
                        }
                        t.stateNode = h;
                        e: switch ((an(h, c, o), c)) {
                            case 'button':
                            case 'input':
                            case 'select':
                            case 'textarea':
                                o = !!o.autoFocus;
                                break e;
                            case 'img':
                                o = !0;
                                break e;
                            default:
                                o = !1;
                        }
                        o && cl(t);
                    }
                }
                return (_t(t), Kd(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, l), null);
            case 6:
                if (e && t.stateNode != null) e.memoizedProps !== o && cl(t);
                else {
                    if (typeof o != 'string' && t.stateNode === null) throw Error(a(166));
                    if (((e = ye.current), _a(t))) {
                        if (((e = t.stateNode), (l = t.memoizedProps), (o = null), (c = nn), c !== null))
                            switch (c.tag) {
                                case 27:
                                case 5:
                                    o = c.memoizedProps;
                            }
                        ((e[ze] = t),
                            (e = !!(
                                e.nodeValue === l ||
                                (o !== null && o.suppressHydrationWarning === !0) ||
                                u0(e.nodeValue, l)
                            )),
                            e || Hl(t, !0));
                    } else ((e = Wu(e).createTextNode(o)), (e[ze] = t), (t.stateNode = e));
                }
                return (_t(t), null);
            case 31:
                if (((l = t.memoizedState), e === null || e.memoizedState !== null)) {
                    if (((o = _a(t)), l !== null)) {
                        if (e === null) {
                            if (!o) throw Error(a(318));
                            if (((e = t.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
                                throw Error(a(557));
                            e[ze] = t;
                        } else (Cr(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
                        (_t(t), (e = !1));
                    } else
                        ((l = ld()),
                            e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l),
                            (e = !0));
                    if (!e) return t.flags & 256 ? (Xn(t), t) : (Xn(t), null);
                    if ((t.flags & 128) !== 0) throw Error(a(558));
                }
                return (_t(t), null);
            case 13:
                if (
                    ((o = t.memoizedState),
                    e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
                ) {
                    if (((c = _a(t)), o !== null && o.dehydrated !== null)) {
                        if (e === null) {
                            if (!c) throw Error(a(318));
                            if (((c = t.memoizedState), (c = c !== null ? c.dehydrated : null), !c))
                                throw Error(a(317));
                            c[ze] = t;
                        } else (Cr(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
                        (_t(t), (c = !1));
                    } else
                        ((c = ld()),
                            e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = c),
                            (c = !0));
                    if (!c) return t.flags & 256 ? (Xn(t), t) : (Xn(t), null);
                }
                return (
                    Xn(t),
                    (t.flags & 128) !== 0
                        ? ((t.lanes = l), t)
                        : ((l = o !== null),
                          (e = e !== null && e.memoizedState !== null),
                          l &&
                              ((o = t.child),
                              (c = null),
                              o.alternate !== null &&
                                  o.alternate.memoizedState !== null &&
                                  o.alternate.memoizedState.cachePool !== null &&
                                  (c = o.alternate.memoizedState.cachePool.pool),
                              (h = null),
                              o.memoizedState !== null &&
                                  o.memoizedState.cachePool !== null &&
                                  (h = o.memoizedState.cachePool.pool),
                              h !== c && (o.flags |= 2048)),
                          l !== e && l && (t.child.flags |= 8192),
                          Bu(t, t.updateQueue),
                          _t(t),
                          null)
                );
            case 4:
                return (De(), e === null && gh(t.stateNode.containerInfo), _t(t), null);
            case 10:
                return (al(t.type), _t(t), null);
            case 19:
                if ((H(zt), (o = t.memoizedState), o === null)) return (_t(t), null);
                if (((c = (t.flags & 128) !== 0), (h = o.rendering), h === null))
                    if (c) Qo(o, !1);
                    else {
                        if (Dt !== 0 || (e !== null && (e.flags & 128) !== 0))
                            for (e = t.child; e !== null; ) {
                                if (((h = Tu(e)), h !== null)) {
                                    for (
                                        t.flags |= 128,
                                            Qo(o, !1),
                                            e = h.updateQueue,
                                            t.updateQueue = e,
                                            Bu(t, e),
                                            t.subtreeFlags = 0,
                                            e = l,
                                            l = t.child;
                                        l !== null;
                                    )
                                        (Gg(l, e), (l = l.sibling));
                                    return (F(zt, (zt.current & 1) | 2), Ke && ll(t, o.treeForkCount), t.child);
                                }
                                e = e.sibling;
                            }
                        o.tail !== null && vt() > qu && ((t.flags |= 128), (c = !0), Qo(o, !1), (t.lanes = 4194304));
                    }
                else {
                    if (!c)
                        if (((e = Tu(h)), e !== null)) {
                            if (
                                ((t.flags |= 128),
                                (c = !0),
                                (e = e.updateQueue),
                                (t.updateQueue = e),
                                Bu(t, e),
                                Qo(o, !0),
                                o.tail === null && o.tailMode === 'hidden' && !h.alternate && !Ke)
                            )
                                return (_t(t), null);
                        } else
                            2 * vt() - o.renderingStartTime > qu &&
                                l !== 536870912 &&
                                ((t.flags |= 128), (c = !0), Qo(o, !1), (t.lanes = 4194304));
                    o.isBackwards
                        ? ((h.sibling = t.child), (t.child = h))
                        : ((e = o.last), e !== null ? (e.sibling = h) : (t.child = h), (o.last = h));
                }
                return o.tail !== null
                    ? ((e = o.tail),
                      (o.rendering = e),
                      (o.tail = e.sibling),
                      (o.renderingStartTime = vt()),
                      (e.sibling = null),
                      (l = zt.current),
                      F(zt, c ? (l & 1) | 2 : l & 1),
                      Ke && ll(t, o.treeForkCount),
                      e)
                    : (_t(t), null);
            case 22:
            case 23:
                return (
                    Xn(t),
                    vd(),
                    (o = t.memoizedState !== null),
                    e !== null ? (e.memoizedState !== null) !== o && (t.flags |= 8192) : o && (t.flags |= 8192),
                    o
                        ? (l & 536870912) !== 0 &&
                          (t.flags & 128) === 0 &&
                          (_t(t), t.subtreeFlags & 6 && (t.flags |= 8192))
                        : _t(t),
                    (l = t.updateQueue),
                    l !== null && Bu(t, l.retryQueue),
                    (l = null),
                    e !== null &&
                        e.memoizedState !== null &&
                        e.memoizedState.cachePool !== null &&
                        (l = e.memoizedState.cachePool.pool),
                    (o = null),
                    t.memoizedState !== null &&
                        t.memoizedState.cachePool !== null &&
                        (o = t.memoizedState.cachePool.pool),
                    o !== l && (t.flags |= 2048),
                    e !== null && H(zr),
                    null
                );
            case 24:
                return (
                    (l = null),
                    e !== null && (l = e.memoizedState.cache),
                    t.memoizedState.cache !== l && (t.flags |= 2048),
                    al(Bt),
                    _t(t),
                    null
                );
            case 25:
                return null;
            case 30:
                return null;
        }
        throw Error(a(156, t.tag));
    }
    function iE(e, t) {
        switch ((nd(t), t.tag)) {
            case 1:
                return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
            case 3:
                return (
                    al(Bt),
                    De(),
                    (e = t.flags),
                    (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
                );
            case 26:
            case 27:
            case 5:
                return (Pe(t), null);
            case 31:
                if (t.memoizedState !== null) {
                    if ((Xn(t), t.alternate === null)) throw Error(a(340));
                    Cr();
                }
                return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
            case 13:
                if ((Xn(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
                    if (t.alternate === null) throw Error(a(340));
                    Cr();
                }
                return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
            case 19:
                return (H(zt), null);
            case 4:
                return (De(), null);
            case 10:
                return (al(t.type), null);
            case 22:
            case 23:
                return (
                    Xn(t),
                    vd(),
                    e !== null && H(zr),
                    (e = t.flags),
                    e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
                );
            case 24:
                return (al(Bt), null);
            case 25:
                return null;
            default:
                return null;
        }
    }
    function my(e, t) {
        switch ((nd(t), t.tag)) {
            case 3:
                (al(Bt), De());
                break;
            case 26:
            case 27:
            case 5:
                Pe(t);
                break;
            case 4:
                De();
                break;
            case 31:
                t.memoizedState !== null && Xn(t);
                break;
            case 13:
                Xn(t);
                break;
            case 19:
                H(zt);
                break;
            case 10:
                al(t.type);
                break;
            case 22:
            case 23:
                (Xn(t), vd(), e !== null && H(zr));
                break;
            case 24:
                al(Bt);
        }
    }
    function Zo(e, t) {
        try {
            var l = t.updateQueue,
                o = l !== null ? l.lastEffect : null;
            if (o !== null) {
                var c = o.next;
                l = c;
                do {
                    if ((l.tag & e) === e) {
                        o = void 0;
                        var h = l.create,
                            _ = l.inst;
                        ((o = h()), (_.destroy = o));
                    }
                    l = l.next;
                } while (l !== c);
            }
        } catch (w) {
            ot(t, t.return, w);
        }
    }
    function Ql(e, t, l) {
        try {
            var o = t.updateQueue,
                c = o !== null ? o.lastEffect : null;
            if (c !== null) {
                var h = c.next;
                o = h;
                do {
                    if ((o.tag & e) === e) {
                        var _ = o.inst,
                            w = _.destroy;
                        if (w !== void 0) {
                            ((_.destroy = void 0), (c = t));
                            var N = l,
                                Z = w;
                            try {
                                Z();
                            } catch (ie) {
                                ot(c, N, ie);
                            }
                        }
                    }
                    o = o.next;
                } while (o !== h);
            }
        } catch (ie) {
            ot(t, t.return, ie);
        }
    }
    function py(e) {
        var t = e.updateQueue;
        if (t !== null) {
            var l = e.stateNode;
            try {
                rv(t, l);
            } catch (o) {
                ot(e, e.return, o);
            }
        }
    }
    function gy(e, t, l) {
        ((l.props = jr(e.type, e.memoizedProps)), (l.state = e.memoizedState));
        try {
            l.componentWillUnmount();
        } catch (o) {
            ot(e, t, o);
        }
    }
    function Ko(e, t) {
        try {
            var l = e.ref;
            if (l !== null) {
                switch (e.tag) {
                    case 26:
                    case 27:
                    case 5:
                        var o = e.stateNode;
                        break;
                    case 30:
                        o = e.stateNode;
                        break;
                    default:
                        o = e.stateNode;
                }
                typeof l == 'function' ? (e.refCleanup = l(o)) : (l.current = o);
            }
        } catch (c) {
            ot(e, t, c);
        }
    }
    function Ui(e, t) {
        var l = e.ref,
            o = e.refCleanup;
        if (l !== null)
            if (typeof o == 'function')
                try {
                    o();
                } catch (c) {
                    ot(e, t, c);
                } finally {
                    ((e.refCleanup = null), (e = e.alternate), e != null && (e.refCleanup = null));
                }
            else if (typeof l == 'function')
                try {
                    l(null);
                } catch (c) {
                    ot(e, t, c);
                }
            else l.current = null;
    }
    function vy(e) {
        var t = e.type,
            l = e.memoizedProps,
            o = e.stateNode;
        try {
            e: switch (t) {
                case 'button':
                case 'input':
                case 'select':
                case 'textarea':
                    l.autoFocus && o.focus();
                    break e;
                case 'img':
                    l.src ? (o.src = l.src) : l.srcSet && (o.srcset = l.srcSet);
            }
        } catch (c) {
            ot(e, e.return, c);
        }
    }
    function $d(e, t, l) {
        try {
            var o = e.stateNode;
            (TE(o, e.type, l, t), (o[Ue] = t));
        } catch (c) {
            ot(e, e.return, c);
        }
    }
    function yy(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 26 || (e.tag === 27 && Wl(e.type)) || e.tag === 4;
    }
    function Fd(e) {
        e: for (;;) {
            for (; e.sibling === null; ) {
                if (e.return === null || yy(e.return)) return null;
                e = e.return;
            }
            for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
                if ((e.tag === 27 && Wl(e.type)) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
                ((e.child.return = e), (e = e.child));
            }
            if (!(e.flags & 2)) return e.stateNode;
        }
    }
    function Id(e, t, l) {
        var o = e.tag;
        if (o === 5 || o === 6)
            ((e = e.stateNode),
                t
                    ? (l.nodeType === 9 ? l.body : l.nodeName === 'HTML' ? l.ownerDocument.body : l).insertBefore(e, t)
                    : ((t = l.nodeType === 9 ? l.body : l.nodeName === 'HTML' ? l.ownerDocument.body : l),
                      t.appendChild(e),
                      (l = l._reactRootContainer),
                      l != null || t.onclick !== null || (t.onclick = tl)));
        else if (o !== 4 && (o === 27 && Wl(e.type) && ((l = e.stateNode), (t = null)), (e = e.child), e !== null))
            for (Id(e, t, l), e = e.sibling; e !== null; ) (Id(e, t, l), (e = e.sibling));
    }
    function Hu(e, t, l) {
        var o = e.tag;
        if (o === 5 || o === 6) ((e = e.stateNode), t ? l.insertBefore(e, t) : l.appendChild(e));
        else if (o !== 4 && (o === 27 && Wl(e.type) && (l = e.stateNode), (e = e.child), e !== null))
            for (Hu(e, t, l), e = e.sibling; e !== null; ) (Hu(e, t, l), (e = e.sibling));
    }
    function _y(e) {
        var t = e.stateNode,
            l = e.memoizedProps;
        try {
            for (var o = e.type, c = t.attributes; c.length; ) t.removeAttributeNode(c[0]);
            (an(t, o, l), (t[ze] = e), (t[Ue] = l));
        } catch (h) {
            ot(e, e.return, h);
        }
    }
    var fl = !1,
        Gt = !1,
        Jd = !1,
        by = typeof WeakSet == 'function' ? WeakSet : Set,
        Ft = null;
    function lE(e, t) {
        if (((e = e.containerInfo), (_h = ac), (e = zg(e)), Pf(e))) {
            if ('selectionStart' in e) var l = { start: e.selectionStart, end: e.selectionEnd };
            else
                e: {
                    l = ((l = e.ownerDocument) && l.defaultView) || window;
                    var o = l.getSelection && l.getSelection();
                    if (o && o.rangeCount !== 0) {
                        l = o.anchorNode;
                        var c = o.anchorOffset,
                            h = o.focusNode;
                        o = o.focusOffset;
                        try {
                            (l.nodeType, h.nodeType);
                        } catch {
                            l = null;
                            break e;
                        }
                        var _ = 0,
                            w = -1,
                            N = -1,
                            Z = 0,
                            ie = 0,
                            oe = e,
                            K = null;
                        t: for (;;) {
                            for (
                                var J;
                                oe !== l || (c !== 0 && oe.nodeType !== 3) || (w = _ + c),
                                    oe !== h || (o !== 0 && oe.nodeType !== 3) || (N = _ + o),
                                    oe.nodeType === 3 && (_ += oe.nodeValue.length),
                                    (J = oe.firstChild) !== null;
                            )
                                ((K = oe), (oe = J));
                            for (;;) {
                                if (oe === e) break t;
                                if (
                                    (K === l && ++Z === c && (w = _),
                                    K === h && ++ie === o && (N = _),
                                    (J = oe.nextSibling) !== null)
                                )
                                    break;
                                ((oe = K), (K = oe.parentNode));
                            }
                            oe = J;
                        }
                        l = w === -1 || N === -1 ? null : { start: w, end: N };
                    } else l = null;
                }
            l = l || { start: 0, end: 0 };
        } else l = null;
        for (bh = { focusedElem: e, selectionRange: l }, ac = !1, Ft = t; Ft !== null; )
            if (((t = Ft), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) ((e.return = t), (Ft = e));
            else
                for (; Ft !== null; ) {
                    switch (((t = Ft), (h = t.alternate), (e = t.flags), t.tag)) {
                        case 0:
                            if ((e & 4) !== 0 && ((e = t.updateQueue), (e = e !== null ? e.events : null), e !== null))
                                for (l = 0; l < e.length; l++) ((c = e[l]), (c.ref.impl = c.nextImpl));
                            break;
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if ((e & 1024) !== 0 && h !== null) {
                                ((e = void 0),
                                    (l = t),
                                    (c = h.memoizedProps),
                                    (h = h.memoizedState),
                                    (o = l.stateNode));
                                try {
                                    var Se = jr(l.type, c);
                                    ((e = o.getSnapshotBeforeUpdate(Se, h)),
                                        (o.__reactInternalSnapshotBeforeUpdate = e));
                                } catch (Oe) {
                                    ot(l, l.return, Oe);
                                }
                            }
                            break;
                        case 3:
                            if ((e & 1024) !== 0) {
                                if (((e = t.stateNode.containerInfo), (l = e.nodeType), l === 9)) wh(e);
                                else if (l === 1)
                                    switch (e.nodeName) {
                                        case 'HEAD':
                                        case 'HTML':
                                        case 'BODY':
                                            wh(e);
                                            break;
                                        default:
                                            e.textContent = '';
                                    }
                            }
                            break;
                        case 5:
                        case 26:
                        case 27:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            if ((e & 1024) !== 0) throw Error(a(163));
                    }
                    if (((e = t.sibling), e !== null)) {
                        ((e.return = t.return), (Ft = e));
                        break;
                    }
                    Ft = t.return;
                }
    }
    function Sy(e, t, l) {
        var o = l.flags;
        switch (l.tag) {
            case 0:
            case 11:
            case 15:
                (hl(e, l), o & 4 && Zo(5, l));
                break;
            case 1:
                if ((hl(e, l), o & 4))
                    if (((e = l.stateNode), t === null))
                        try {
                            e.componentDidMount();
                        } catch (_) {
                            ot(l, l.return, _);
                        }
                    else {
                        var c = jr(l.type, t.memoizedProps);
                        t = t.memoizedState;
                        try {
                            e.componentDidUpdate(c, t, e.__reactInternalSnapshotBeforeUpdate);
                        } catch (_) {
                            ot(l, l.return, _);
                        }
                    }
                (o & 64 && py(l), o & 512 && Ko(l, l.return));
                break;
            case 3:
                if ((hl(e, l), o & 64 && ((e = l.updateQueue), e !== null))) {
                    if (((t = null), l.child !== null))
                        switch (l.child.tag) {
                            case 27:
                            case 5:
                                t = l.child.stateNode;
                                break;
                            case 1:
                                t = l.child.stateNode;
                        }
                    try {
                        rv(e, t);
                    } catch (_) {
                        ot(l, l.return, _);
                    }
                }
                break;
            case 27:
                t === null && o & 4 && _y(l);
            case 26:
            case 5:
                (hl(e, l), t === null && o & 4 && vy(l), o & 512 && Ko(l, l.return));
                break;
            case 12:
                hl(e, l);
                break;
            case 31:
                (hl(e, l), o & 4 && Ey(e, l));
                break;
            case 13:
                (hl(e, l),
                    o & 4 && Ty(e, l),
                    o & 64 &&
                        ((e = l.memoizedState),
                        e !== null && ((e = e.dehydrated), e !== null && ((l = hE.bind(null, l)), NE(e, l)))));
                break;
            case 22:
                if (((o = l.memoizedState !== null || fl), !o)) {
                    ((t = (t !== null && t.memoizedState !== null) || Gt), (c = fl));
                    var h = Gt;
                    ((fl = o), (Gt = t) && !h ? ml(e, l, (l.subtreeFlags & 8772) !== 0) : hl(e, l), (fl = c), (Gt = h));
                }
                break;
            case 30:
                break;
            default:
                hl(e, l);
        }
    }
    function xy(e) {
        var t = e.alternate;
        (t !== null && ((e.alternate = null), xy(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            e.tag === 5 && ((t = e.stateNode), t !== null && aa(t)),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null));
    }
    var xt = null,
        An = !1;
    function dl(e, t, l) {
        for (l = l.child; l !== null; ) (wy(e, t, l), (l = l.sibling));
    }
    function wy(e, t, l) {
        if (bt && typeof bt.onCommitFiberUnmount == 'function')
            try {
                bt.onCommitFiberUnmount(vn, l);
            } catch {}
        switch (l.tag) {
            case 26:
                (Gt || Ui(l, t),
                    dl(e, t, l),
                    l.memoizedState
                        ? l.memoizedState.count--
                        : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l)));
                break;
            case 27:
                Gt || Ui(l, t);
                var o = xt,
                    c = An;
                (Wl(l.type) && ((xt = l.stateNode), (An = !1)), dl(e, t, l), is(l.stateNode), (xt = o), (An = c));
                break;
            case 5:
                Gt || Ui(l, t);
            case 6:
                if (((o = xt), (c = An), (xt = null), dl(e, t, l), (xt = o), (An = c), xt !== null))
                    if (An)
                        try {
                            (xt.nodeType === 9
                                ? xt.body
                                : xt.nodeName === 'HTML'
                                  ? xt.ownerDocument.body
                                  : xt
                            ).removeChild(l.stateNode);
                        } catch (h) {
                            ot(l, t, h);
                        }
                    else
                        try {
                            xt.removeChild(l.stateNode);
                        } catch (h) {
                            ot(l, t, h);
                        }
                break;
            case 18:
                xt !== null &&
                    (An
                        ? ((e = xt),
                          p0(e.nodeType === 9 ? e.body : e.nodeName === 'HTML' ? e.ownerDocument.body : e, l.stateNode),
                          Ya(e))
                        : p0(xt, l.stateNode));
                break;
            case 4:
                ((o = xt), (c = An), (xt = l.stateNode.containerInfo), (An = !0), dl(e, t, l), (xt = o), (An = c));
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                (Ql(2, l, t), Gt || Ql(4, l, t), dl(e, t, l));
                break;
            case 1:
                (Gt || (Ui(l, t), (o = l.stateNode), typeof o.componentWillUnmount == 'function' && gy(l, t, o)),
                    dl(e, t, l));
                break;
            case 21:
                dl(e, t, l);
                break;
            case 22:
                ((Gt = (o = Gt) || l.memoizedState !== null), dl(e, t, l), (Gt = o));
                break;
            default:
                dl(e, t, l);
        }
    }
    function Ey(e, t) {
        if (t.memoizedState === null && ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))) {
            e = e.dehydrated;
            try {
                Ya(e);
            } catch (l) {
                ot(t, t.return, l);
            }
        }
    }
    function Ty(e, t) {
        if (
            t.memoizedState === null &&
            ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
        )
            try {
                Ya(e);
            } catch (l) {
                ot(t, t.return, l);
            }
    }
    function rE(e) {
        switch (e.tag) {
            case 31:
            case 13:
            case 19:
                var t = e.stateNode;
                return (t === null && (t = e.stateNode = new by()), t);
            case 22:
                return ((e = e.stateNode), (t = e._retryCache), t === null && (t = e._retryCache = new by()), t);
            default:
                throw Error(a(435, e.tag));
        }
    }
    function Yu(e, t) {
        var l = rE(e);
        t.forEach(function (o) {
            if (!l.has(o)) {
                l.add(o);
                var c = mE.bind(null, e, o);
                o.then(c, c);
            }
        });
    }
    function Mn(e, t) {
        var l = t.deletions;
        if (l !== null)
            for (var o = 0; o < l.length; o++) {
                var c = l[o],
                    h = e,
                    _ = t,
                    w = _;
                e: for (; w !== null; ) {
                    switch (w.tag) {
                        case 27:
                            if (Wl(w.type)) {
                                ((xt = w.stateNode), (An = !1));
                                break e;
                            }
                            break;
                        case 5:
                            ((xt = w.stateNode), (An = !1));
                            break e;
                        case 3:
                        case 4:
                            ((xt = w.stateNode.containerInfo), (An = !0));
                            break e;
                    }
                    w = w.return;
                }
                if (xt === null) throw Error(a(160));
                (wy(h, _, c),
                    (xt = null),
                    (An = !1),
                    (h = c.alternate),
                    h !== null && (h.return = null),
                    (c.return = null));
            }
        if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) (Ay(t, e), (t = t.sibling));
    }
    var Ei = null;
    function Ay(e, t) {
        var l = e.alternate,
            o = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                (Mn(t, e), On(e), o & 4 && (Ql(3, e, e.return), Zo(3, e), Ql(5, e, e.return)));
                break;
            case 1:
                (Mn(t, e),
                    On(e),
                    o & 512 && (Gt || l === null || Ui(l, l.return)),
                    o & 64 &&
                        fl &&
                        ((e = e.updateQueue),
                        e !== null &&
                            ((o = e.callbacks),
                            o !== null &&
                                ((l = e.shared.hiddenCallbacks),
                                (e.shared.hiddenCallbacks = l === null ? o : l.concat(o))))));
                break;
            case 26:
                var c = Ei;
                if ((Mn(t, e), On(e), o & 512 && (Gt || l === null || Ui(l, l.return)), o & 4)) {
                    var h = l !== null ? l.memoizedState : null;
                    if (((o = e.memoizedState), l === null))
                        if (o === null)
                            if (e.stateNode === null) {
                                e: {
                                    ((o = e.type), (l = e.memoizedProps), (c = c.ownerDocument || c));
                                    t: switch (o) {
                                        case 'title':
                                            ((h = c.getElementsByTagName('title')[0]),
                                                (!h ||
                                                    h[Ll] ||
                                                    h[ze] ||
                                                    h.namespaceURI === 'http://www.w3.org/2000/svg' ||
                                                    h.hasAttribute('itemprop')) &&
                                                    ((h = c.createElement(o)),
                                                    c.head.insertBefore(h, c.querySelector('head > title'))),
                                                an(h, o, l),
                                                (h[ze] = e),
                                                Ot(h),
                                                (o = h));
                                            break e;
                                        case 'link':
                                            var _ = A0('link', 'href', c).get(o + (l.href || ''));
                                            if (_) {
                                                for (var w = 0; w < _.length; w++)
                                                    if (
                                                        ((h = _[w]),
                                                        h.getAttribute('href') ===
                                                            (l.href == null || l.href === '' ? null : l.href) &&
                                                            h.getAttribute('rel') === (l.rel == null ? null : l.rel) &&
                                                            h.getAttribute('title') ===
                                                                (l.title == null ? null : l.title) &&
                                                            h.getAttribute('crossorigin') ===
                                                                (l.crossOrigin == null ? null : l.crossOrigin))
                                                    ) {
                                                        _.splice(w, 1);
                                                        break t;
                                                    }
                                            }
                                            ((h = c.createElement(o)), an(h, o, l), c.head.appendChild(h));
                                            break;
                                        case 'meta':
                                            if ((_ = A0('meta', 'content', c).get(o + (l.content || '')))) {
                                                for (w = 0; w < _.length; w++)
                                                    if (
                                                        ((h = _[w]),
                                                        h.getAttribute('content') ===
                                                            (l.content == null ? null : '' + l.content) &&
                                                            h.getAttribute('name') ===
                                                                (l.name == null ? null : l.name) &&
                                                            h.getAttribute('property') ===
                                                                (l.property == null ? null : l.property) &&
                                                            h.getAttribute('http-equiv') ===
                                                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                                                            h.getAttribute('charset') ===
                                                                (l.charSet == null ? null : l.charSet))
                                                    ) {
                                                        _.splice(w, 1);
                                                        break t;
                                                    }
                                            }
                                            ((h = c.createElement(o)), an(h, o, l), c.head.appendChild(h));
                                            break;
                                        default:
                                            throw Error(a(468, o));
                                    }
                                    ((h[ze] = e), Ot(h), (o = h));
                                }
                                e.stateNode = o;
                            } else M0(c, e.type, e.stateNode);
                        else e.stateNode = T0(c, o, e.memoizedProps);
                    else
                        h !== o
                            ? (h === null
                                  ? l.stateNode !== null && ((l = l.stateNode), l.parentNode.removeChild(l))
                                  : h.count--,
                              o === null ? M0(c, e.type, e.stateNode) : T0(c, o, e.memoizedProps))
                            : o === null && e.stateNode !== null && $d(e, e.memoizedProps, l.memoizedProps);
                }
                break;
            case 27:
                (Mn(t, e),
                    On(e),
                    o & 512 && (Gt || l === null || Ui(l, l.return)),
                    l !== null && o & 4 && $d(e, e.memoizedProps, l.memoizedProps));
                break;
            case 5:
                if ((Mn(t, e), On(e), o & 512 && (Gt || l === null || Ui(l, l.return)), e.flags & 32)) {
                    c = e.stateNode;
                    try {
                        ua(c, '');
                    } catch (Se) {
                        ot(e, e.return, Se);
                    }
                }
                (o & 4 && e.stateNode != null && ((c = e.memoizedProps), $d(e, c, l !== null ? l.memoizedProps : c)),
                    o & 1024 && (Jd = !0));
                break;
            case 6:
                if ((Mn(t, e), On(e), o & 4)) {
                    if (e.stateNode === null) throw Error(a(162));
                    ((o = e.memoizedProps), (l = e.stateNode));
                    try {
                        l.nodeValue = o;
                    } catch (Se) {
                        ot(e, e.return, Se);
                    }
                }
                break;
            case 3:
                if (
                    ((nc = null),
                    (c = Ei),
                    (Ei = ec(t.containerInfo)),
                    Mn(t, e),
                    (Ei = c),
                    On(e),
                    o & 4 && l !== null && l.memoizedState.isDehydrated)
                )
                    try {
                        Ya(t.containerInfo);
                    } catch (Se) {
                        ot(e, e.return, Se);
                    }
                Jd && ((Jd = !1), My(e));
                break;
            case 4:
                ((o = Ei), (Ei = ec(e.stateNode.containerInfo)), Mn(t, e), On(e), (Ei = o));
                break;
            case 12:
                (Mn(t, e), On(e));
                break;
            case 31:
                (Mn(t, e), On(e), o & 4 && ((o = e.updateQueue), o !== null && ((e.updateQueue = null), Yu(e, o))));
                break;
            case 13:
                (Mn(t, e),
                    On(e),
                    e.child.flags & 8192 &&
                        (e.memoizedState !== null) != (l !== null && l.memoizedState !== null) &&
                        (Xu = vt()),
                    o & 4 && ((o = e.updateQueue), o !== null && ((e.updateQueue = null), Yu(e, o))));
                break;
            case 22:
                c = e.memoizedState !== null;
                var N = l !== null && l.memoizedState !== null,
                    Z = fl,
                    ie = Gt;
                if (((fl = Z || c), (Gt = ie || N), Mn(t, e), (Gt = ie), (fl = Z), On(e), o & 8192))
                    e: for (
                        t = e.stateNode,
                            t._visibility = c ? t._visibility & -2 : t._visibility | 1,
                            c && (l === null || N || fl || Gt || Br(e)),
                            l = null,
                            t = e;
                        ;
                    ) {
                        if (t.tag === 5 || t.tag === 26) {
                            if (l === null) {
                                N = l = t;
                                try {
                                    if (((h = N.stateNode), c))
                                        ((_ = h.style),
                                            typeof _.setProperty == 'function'
                                                ? _.setProperty('display', 'none', 'important')
                                                : (_.display = 'none'));
                                    else {
                                        w = N.stateNode;
                                        var oe = N.memoizedProps.style,
                                            K = oe != null && oe.hasOwnProperty('display') ? oe.display : null;
                                        w.style.display = K == null || typeof K == 'boolean' ? '' : ('' + K).trim();
                                    }
                                } catch (Se) {
                                    ot(N, N.return, Se);
                                }
                            }
                        } else if (t.tag === 6) {
                            if (l === null) {
                                N = t;
                                try {
                                    N.stateNode.nodeValue = c ? '' : N.memoizedProps;
                                } catch (Se) {
                                    ot(N, N.return, Se);
                                }
                            }
                        } else if (t.tag === 18) {
                            if (l === null) {
                                N = t;
                                try {
                                    var J = N.stateNode;
                                    c ? g0(J, !0) : g0(N.stateNode, !1);
                                } catch (Se) {
                                    ot(N, N.return, Se);
                                }
                            }
                        } else if (
                            ((t.tag !== 22 && t.tag !== 23) || t.memoizedState === null || t === e) &&
                            t.child !== null
                        ) {
                            ((t.child.return = t), (t = t.child));
                            continue;
                        }
                        if (t === e) break e;
                        for (; t.sibling === null; ) {
                            if (t.return === null || t.return === e) break e;
                            (l === t && (l = null), (t = t.return));
                        }
                        (l === t && (l = null), (t.sibling.return = t.return), (t = t.sibling));
                    }
                o & 4 &&
                    ((o = e.updateQueue),
                    o !== null && ((l = o.retryQueue), l !== null && ((o.retryQueue = null), Yu(e, l))));
                break;
            case 19:
                (Mn(t, e), On(e), o & 4 && ((o = e.updateQueue), o !== null && ((e.updateQueue = null), Yu(e, o))));
                break;
            case 30:
                break;
            case 21:
                break;
            default:
                (Mn(t, e), On(e));
        }
    }
    function On(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                for (var l, o = e.return; o !== null; ) {
                    if (yy(o)) {
                        l = o;
                        break;
                    }
                    o = o.return;
                }
                if (l == null) throw Error(a(160));
                switch (l.tag) {
                    case 27:
                        var c = l.stateNode,
                            h = Fd(e);
                        Hu(e, h, c);
                        break;
                    case 5:
                        var _ = l.stateNode;
                        l.flags & 32 && (ua(_, ''), (l.flags &= -33));
                        var w = Fd(e);
                        Hu(e, w, _);
                        break;
                    case 3:
                    case 4:
                        var N = l.stateNode.containerInfo,
                            Z = Fd(e);
                        Id(e, Z, N);
                        break;
                    default:
                        throw Error(a(161));
                }
            } catch (ie) {
                ot(e, e.return, ie);
            }
            e.flags &= -3;
        }
        t & 4096 && (e.flags &= -4097);
    }
    function My(e) {
        if (e.subtreeFlags & 1024)
            for (e = e.child; e !== null; ) {
                var t = e;
                (My(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), (e = e.sibling));
            }
    }
    function hl(e, t) {
        if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) (Sy(e, t.alternate, t), (t = t.sibling));
    }
    function Br(e) {
        for (e = e.child; e !== null; ) {
            var t = e;
            switch (t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    (Ql(4, t, t.return), Br(t));
                    break;
                case 1:
                    Ui(t, t.return);
                    var l = t.stateNode;
                    (typeof l.componentWillUnmount == 'function' && gy(t, t.return, l), Br(t));
                    break;
                case 27:
                    is(t.stateNode);
                case 26:
                case 5:
                    (Ui(t, t.return), Br(t));
                    break;
                case 22:
                    t.memoizedState === null && Br(t);
                    break;
                case 30:
                    Br(t);
                    break;
                default:
                    Br(t);
            }
            e = e.sibling;
        }
    }
    function ml(e, t, l) {
        for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
            var o = t.alternate,
                c = e,
                h = t,
                _ = h.flags;
            switch (h.tag) {
                case 0:
                case 11:
                case 15:
                    (ml(c, h, l), Zo(4, h));
                    break;
                case 1:
                    if ((ml(c, h, l), (o = h), (c = o.stateNode), typeof c.componentDidMount == 'function'))
                        try {
                            c.componentDidMount();
                        } catch (Z) {
                            ot(o, o.return, Z);
                        }
                    if (((o = h), (c = o.updateQueue), c !== null)) {
                        var w = o.stateNode;
                        try {
                            var N = c.shared.hiddenCallbacks;
                            if (N !== null) for (c.shared.hiddenCallbacks = null, c = 0; c < N.length; c++) lv(N[c], w);
                        } catch (Z) {
                            ot(o, o.return, Z);
                        }
                    }
                    (l && _ & 64 && py(h), Ko(h, h.return));
                    break;
                case 27:
                    _y(h);
                case 26:
                case 5:
                    (ml(c, h, l), l && o === null && _ & 4 && vy(h), Ko(h, h.return));
                    break;
                case 12:
                    ml(c, h, l);
                    break;
                case 31:
                    (ml(c, h, l), l && _ & 4 && Ey(c, h));
                    break;
                case 13:
                    (ml(c, h, l), l && _ & 4 && Ty(c, h));
                    break;
                case 22:
                    (h.memoizedState === null && ml(c, h, l), Ko(h, h.return));
                    break;
                case 30:
                    break;
                default:
                    ml(c, h, l);
            }
            t = t.sibling;
        }
    }
    function Wd(e, t) {
        var l = null;
        (e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (l = e.memoizedState.cachePool.pool),
            (e = null),
            t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool),
            e !== l && (e != null && e.refCount++, l != null && Lo(l)));
    }
    function eh(e, t) {
        ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && Lo(e)));
    }
    function Ti(e, t, l, o) {
        if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) (Oy(e, t, l, o), (t = t.sibling));
    }
    function Oy(e, t, l, o) {
        var c = t.flags;
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                (Ti(e, t, l, o), c & 2048 && Zo(9, t));
                break;
            case 1:
                Ti(e, t, l, o);
                break;
            case 3:
                (Ti(e, t, l, o),
                    c & 2048 &&
                        ((e = null),
                        t.alternate !== null && (e = t.alternate.memoizedState.cache),
                        (t = t.memoizedState.cache),
                        t !== e && (t.refCount++, e != null && Lo(e))));
                break;
            case 12:
                if (c & 2048) {
                    (Ti(e, t, l, o), (e = t.stateNode));
                    try {
                        var h = t.memoizedProps,
                            _ = h.id,
                            w = h.onPostCommit;
                        typeof w == 'function' &&
                            w(_, t.alternate === null ? 'mount' : 'update', e.passiveEffectDuration, -0);
                    } catch (N) {
                        ot(t, t.return, N);
                    }
                } else Ti(e, t, l, o);
                break;
            case 31:
                Ti(e, t, l, o);
                break;
            case 13:
                Ti(e, t, l, o);
                break;
            case 23:
                break;
            case 22:
                ((h = t.stateNode),
                    (_ = t.alternate),
                    t.memoizedState !== null
                        ? h._visibility & 2
                            ? Ti(e, t, l, o)
                            : $o(e, t)
                        : h._visibility & 2
                          ? Ti(e, t, l, o)
                          : ((h._visibility |= 2), Ca(e, t, l, o, (t.subtreeFlags & 10256) !== 0 || !1)),
                    c & 2048 && Wd(_, t));
                break;
            case 24:
                (Ti(e, t, l, o), c & 2048 && eh(t.alternate, t));
                break;
            default:
                Ti(e, t, l, o);
        }
    }
    function Ca(e, t, l, o, c) {
        for (c = c && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
            var h = e,
                _ = t,
                w = l,
                N = o,
                Z = _.flags;
            switch (_.tag) {
                case 0:
                case 11:
                case 15:
                    (Ca(h, _, w, N, c), Zo(8, _));
                    break;
                case 23:
                    break;
                case 22:
                    var ie = _.stateNode;
                    (_.memoizedState !== null
                        ? ie._visibility & 2
                            ? Ca(h, _, w, N, c)
                            : $o(h, _)
                        : ((ie._visibility |= 2), Ca(h, _, w, N, c)),
                        c && Z & 2048 && Wd(_.alternate, _));
                    break;
                case 24:
                    (Ca(h, _, w, N, c), c && Z & 2048 && eh(_.alternate, _));
                    break;
                default:
                    Ca(h, _, w, N, c);
            }
            t = t.sibling;
        }
    }
    function $o(e, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; ) {
                var l = e,
                    o = t,
                    c = o.flags;
                switch (o.tag) {
                    case 22:
                        ($o(l, o), c & 2048 && Wd(o.alternate, o));
                        break;
                    case 24:
                        ($o(l, o), c & 2048 && eh(o.alternate, o));
                        break;
                    default:
                        $o(l, o);
                }
                t = t.sibling;
            }
    }
    var Fo = 8192;
    function Da(e, t, l) {
        if (e.subtreeFlags & Fo) for (e = e.child; e !== null; ) (Cy(e, t, l), (e = e.sibling));
    }
    function Cy(e, t, l) {
        switch (e.tag) {
            case 26:
                (Da(e, t, l), e.flags & Fo && e.memoizedState !== null && PE(l, Ei, e.memoizedState, e.memoizedProps));
                break;
            case 5:
                Da(e, t, l);
                break;
            case 3:
            case 4:
                var o = Ei;
                ((Ei = ec(e.stateNode.containerInfo)), Da(e, t, l), (Ei = o));
                break;
            case 22:
                e.memoizedState === null &&
                    ((o = e.alternate),
                    o !== null && o.memoizedState !== null
                        ? ((o = Fo), (Fo = 16777216), Da(e, t, l), (Fo = o))
                        : Da(e, t, l));
                break;
            default:
                Da(e, t, l);
        }
    }
    function Dy(e) {
        var t = e.alternate;
        if (t !== null && ((e = t.child), e !== null)) {
            t.child = null;
            do ((t = e.sibling), (e.sibling = null), (e = t));
            while (e !== null);
        }
    }
    function Io(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var l = 0; l < t.length; l++) {
                    var o = t[l];
                    ((Ft = o), zy(o, e));
                }
            Dy(e);
        }
        if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) (Ry(e), (e = e.sibling));
    }
    function Ry(e) {
        switch (e.tag) {
            case 0:
            case 11:
            case 15:
                (Io(e), e.flags & 2048 && Ql(9, e, e.return));
                break;
            case 3:
                Io(e);
                break;
            case 12:
                Io(e);
                break;
            case 22:
                var t = e.stateNode;
                e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13)
                    ? ((t._visibility &= -3), Gu(e))
                    : Io(e);
                break;
            default:
                Io(e);
        }
    }
    function Gu(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var l = 0; l < t.length; l++) {
                    var o = t[l];
                    ((Ft = o), zy(o, e));
                }
            Dy(e);
        }
        for (e = e.child; e !== null; ) {
            switch (((t = e), t.tag)) {
                case 0:
                case 11:
                case 15:
                    (Ql(8, t, t.return), Gu(t));
                    break;
                case 22:
                    ((l = t.stateNode), l._visibility & 2 && ((l._visibility &= -3), Gu(t)));
                    break;
                default:
                    Gu(t);
            }
            e = e.sibling;
        }
    }
    function zy(e, t) {
        for (; Ft !== null; ) {
            var l = Ft;
            switch (l.tag) {
                case 0:
                case 11:
                case 15:
                    Ql(8, l, t);
                    break;
                case 23:
                case 22:
                    if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
                        var o = l.memoizedState.cachePool.pool;
                        o != null && o.refCount++;
                    }
                    break;
                case 24:
                    Lo(l.memoizedState.cache);
            }
            if (((o = l.child), o !== null)) ((o.return = l), (Ft = o));
            else
                e: for (l = e; Ft !== null; ) {
                    o = Ft;
                    var c = o.sibling,
                        h = o.return;
                    if ((xy(o), o === l)) {
                        Ft = null;
                        break e;
                    }
                    if (c !== null) {
                        ((c.return = h), (Ft = c));
                        break e;
                    }
                    Ft = h;
                }
        }
    }
    var aE = {
            getCacheForType: function (e) {
                var t = ln(Bt),
                    l = t.data.get(e);
                return (l === void 0 && ((l = e()), t.data.set(e, l)), l);
            },
            cacheSignal: function () {
                return ln(Bt).controller.signal;
            },
        },
        oE = typeof WeakMap == 'function' ? WeakMap : Map,
        it = 0,
        dt = null,
        He = null,
        qe = 0,
        at = 0,
        qn = null,
        Zl = !1,
        Ra = !1,
        th = !1,
        pl = 0,
        Dt = 0,
        Kl = 0,
        Hr = 0,
        nh = 0,
        Vn = 0,
        za = 0,
        Jo = null,
        Cn = null,
        ih = !1,
        Xu = 0,
        Ny = 0,
        qu = 1 / 0,
        Vu = null,
        $l = null,
        Qt = 0,
        Fl = null,
        Na = null,
        gl = 0,
        lh = 0,
        rh = null,
        Ly = null,
        Wo = 0,
        ah = null;
    function Pn() {
        return (it & 2) !== 0 && qe !== 0 ? qe & -qe : A.T !== null ? dh() : Ce();
    }
    function ky() {
        if (Vn === 0)
            if ((qe & 536870912) === 0 || Ke) {
                var e = Et;
                ((Et <<= 1), (Et & 3932160) === 0 && (Et = 262144), (Vn = e));
            } else Vn = 536870912;
        return ((e = Gn.current), e !== null && (e.flags |= 32), Vn);
    }
    function Dn(e, t, l) {
        (((e === dt && (at === 2 || at === 9)) || e.cancelPendingCommit !== null) && (La(e, 0), Il(e, qe, Vn, !1)),
            te(e, l),
            ((it & 2) === 0 || e !== dt) &&
                (e === dt && ((it & 2) === 0 && (Hr |= l), Dt === 4 && Il(e, qe, Vn, !1)), ji(e)));
    }
    function Uy(e, t, l) {
        if ((it & 6) !== 0) throw Error(a(327));
        var o = (!l && (t & 127) === 0 && (t & e.expiredLanes) === 0) || be(e, t),
            c = o ? cE(e, t) : sh(e, t, !0),
            h = o;
        do {
            if (c === 0) {
                Ra && !o && Il(e, t, 0, !1);
                break;
            } else {
                if (((l = e.current.alternate), h && !sE(l))) {
                    ((c = sh(e, t, !1)), (h = !1));
                    continue;
                }
                if (c === 2) {
                    if (((h = t), e.errorRecoveryDisabledLanes & h)) var _ = 0;
                    else ((_ = e.pendingLanes & -536870913), (_ = _ !== 0 ? _ : _ & 536870912 ? 536870912 : 0));
                    if (_ !== 0) {
                        t = _;
                        e: {
                            var w = e;
                            c = Jo;
                            var N = w.current.memoizedState.isDehydrated;
                            if ((N && (La(w, _).flags |= 256), (_ = sh(w, _, !1)), _ !== 2)) {
                                if (th && !N) {
                                    ((w.errorRecoveryDisabledLanes |= h), (Hr |= h), (c = 4));
                                    break e;
                                }
                                ((h = Cn), (Cn = c), h !== null && (Cn === null ? (Cn = h) : Cn.push.apply(Cn, h)));
                            }
                            c = _;
                        }
                        if (((h = !1), c !== 2)) continue;
                    }
                }
                if (c === 1) {
                    (La(e, 0), Il(e, t, 0, !0));
                    break;
                }
                e: {
                    switch (((o = e), (h = c), h)) {
                        case 0:
                        case 1:
                            throw Error(a(345));
                        case 4:
                            if ((t & 4194048) !== t) break;
                        case 6:
                            Il(o, t, Vn, !Zl);
                            break e;
                        case 2:
                            Cn = null;
                            break;
                        case 3:
                        case 5:
                            break;
                        default:
                            throw Error(a(329));
                    }
                    if ((t & 62914560) === t && ((c = Xu + 300 - vt()), 10 < c)) {
                        if ((Il(o, t, Vn, !Zl), Bn(o, 0, !0) !== 0)) break e;
                        ((gl = t),
                            (o.timeoutHandle = h0(
                                jy.bind(null, o, l, Cn, Vu, ih, t, Vn, Hr, za, Zl, h, 'Throttled', -0, 0),
                                c,
                            )));
                        break e;
                    }
                    jy(o, l, Cn, Vu, ih, t, Vn, Hr, za, Zl, h, null, -0, 0);
                }
            }
            break;
        } while (!0);
        ji(e);
    }
    function jy(e, t, l, o, c, h, _, w, N, Z, ie, oe, K, J) {
        if (((e.timeoutHandle = -1), (oe = t.subtreeFlags), oe & 8192 || (oe & 16785408) === 16785408)) {
            ((oe = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: tl,
            }),
                Cy(t, h, oe));
            var Se = (h & 62914560) === h ? Xu - vt() : (h & 4194048) === h ? Ny - vt() : 0;
            if (((Se = QE(oe, Se)), Se !== null)) {
                ((gl = h),
                    (e.cancelPendingCommit = Se(Py.bind(null, e, t, h, l, o, c, _, w, N, ie, oe, null, K, J))),
                    Il(e, h, _, !Z));
                return;
            }
        }
        Py(e, t, h, l, o, c, _, w, N);
    }
    function sE(e) {
        for (var t = e; ; ) {
            var l = t.tag;
            if (
                (l === 0 || l === 11 || l === 15) &&
                t.flags & 16384 &&
                ((l = t.updateQueue), l !== null && ((l = l.stores), l !== null))
            )
                for (var o = 0; o < l.length; o++) {
                    var c = l[o],
                        h = c.getSnapshot;
                    c = c.value;
                    try {
                        if (!Hn(h(), c)) return !1;
                    } catch {
                        return !1;
                    }
                }
            if (((l = t.child), t.subtreeFlags & 16384 && l !== null)) ((l.return = t), (t = l));
            else {
                if (t === e) break;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e) return !0;
                    t = t.return;
                }
                ((t.sibling.return = t.return), (t = t.sibling));
            }
        }
        return !0;
    }
    function Il(e, t, l, o) {
        ((t &= ~nh),
            (t &= ~Hr),
            (e.suspendedLanes |= t),
            (e.pingedLanes &= ~t),
            o && (e.warmLanes |= t),
            (o = e.expirationTimes));
        for (var c = t; 0 < c; ) {
            var h = 31 - Ie(c),
                _ = 1 << h;
            ((o[h] = -1), (c &= ~_));
        }
        l !== 0 && ve(e, l, t);
    }
    function Pu() {
        return (it & 6) === 0 ? (es(0), !1) : !0;
    }
    function oh() {
        if (He !== null) {
            if (at === 0) var e = He.return;
            else ((e = He), (rl = Dr = null), wd(e), (Ea = null), (Uo = 0), (e = He));
            for (; e !== null; ) (my(e.alternate, e), (e = e.return));
            He = null;
        }
    }
    function La(e, t) {
        var l = e.timeoutHandle;
        (l !== -1 && ((e.timeoutHandle = -1), OE(l)),
            (l = e.cancelPendingCommit),
            l !== null && ((e.cancelPendingCommit = null), l()),
            (gl = 0),
            oh(),
            (dt = e),
            (He = l = il(e.current, null)),
            (qe = t),
            (at = 0),
            (qn = null),
            (Zl = !1),
            (Ra = be(e, t)),
            (th = !1),
            (za = Vn = nh = Hr = Kl = Dt = 0),
            (Cn = Jo = null),
            (ih = !1),
            (t & 8) !== 0 && (t |= t & 32));
        var o = e.entangledLanes;
        if (o !== 0)
            for (e = e.entanglements, o &= t; 0 < o; ) {
                var c = 31 - Ie(o),
                    h = 1 << c;
                ((t |= e[c]), (o &= ~h));
            }
        return ((pl = t), du(), l);
    }
    function By(e, t) {
        ((Ne = null),
            (A.H = Vo),
            t === wa || t === bu
                ? ((t = ev()), (at = 3))
                : t === fd
                  ? ((t = ev()), (at = 4))
                  : (at = t === Hd ? 8 : t !== null && typeof t == 'object' && typeof t.then == 'function' ? 6 : 1),
            (qn = t),
            He === null && ((Dt = 1), Lu(e, ai(t, e.current))));
    }
    function Hy() {
        var e = Gn.current;
        return e === null
            ? !0
            : (qe & 4194048) === qe
              ? ci === null
              : (qe & 62914560) === qe || (qe & 536870912) !== 0
                ? e === ci
                : !1;
    }
    function Yy() {
        var e = A.H;
        return ((A.H = Vo), e === null ? Vo : e);
    }
    function Gy() {
        var e = A.A;
        return ((A.A = aE), e);
    }
    function Qu() {
        ((Dt = 4),
            Zl || ((qe & 4194048) !== qe && Gn.current !== null) || (Ra = !0),
            ((Kl & 134217727) === 0 && (Hr & 134217727) === 0) || dt === null || Il(dt, qe, Vn, !1));
    }
    function sh(e, t, l) {
        var o = it;
        it |= 2;
        var c = Yy(),
            h = Gy();
        ((dt !== e || qe !== t) && ((Vu = null), La(e, t)), (t = !1));
        var _ = Dt;
        e: do
            try {
                if (at !== 0 && He !== null) {
                    var w = He,
                        N = qn;
                    switch (at) {
                        case 8:
                            (oh(), (_ = 6));
                            break e;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            Gn.current === null && (t = !0);
                            var Z = at;
                            if (((at = 0), (qn = null), ka(e, w, N, Z), l && Ra)) {
                                _ = 0;
                                break e;
                            }
                            break;
                        default:
                            ((Z = at), (at = 0), (qn = null), ka(e, w, N, Z));
                    }
                }
                (uE(), (_ = Dt));
                break;
            } catch (ie) {
                By(e, ie);
            }
        while (!0);
        return (
            t && e.shellSuspendCounter++,
            (rl = Dr = null),
            (it = o),
            (A.H = c),
            (A.A = h),
            He === null && ((dt = null), (qe = 0), du()),
            _
        );
    }
    function uE() {
        for (; He !== null; ) Xy(He);
    }
    function cE(e, t) {
        var l = it;
        it |= 2;
        var o = Yy(),
            c = Gy();
        dt !== e || qe !== t ? ((Vu = null), (qu = vt() + 500), La(e, t)) : (Ra = be(e, t));
        e: do
            try {
                if (at !== 0 && He !== null) {
                    t = He;
                    var h = qn;
                    t: switch (at) {
                        case 1:
                            ((at = 0), (qn = null), ka(e, t, h, 1));
                            break;
                        case 2:
                        case 9:
                            if (Jg(h)) {
                                ((at = 0), (qn = null), qy(t));
                                break;
                            }
                            ((t = function () {
                                ((at !== 2 && at !== 9) || dt !== e || (at = 7), ji(e));
                            }),
                                h.then(t, t));
                            break e;
                        case 3:
                            at = 7;
                            break e;
                        case 4:
                            at = 5;
                            break e;
                        case 7:
                            Jg(h) ? ((at = 0), (qn = null), qy(t)) : ((at = 0), (qn = null), ka(e, t, h, 7));
                            break;
                        case 5:
                            var _ = null;
                            switch (He.tag) {
                                case 26:
                                    _ = He.memoizedState;
                                case 5:
                                case 27:
                                    var w = He;
                                    if (_ ? O0(_) : w.stateNode.complete) {
                                        ((at = 0), (qn = null));
                                        var N = w.sibling;
                                        if (N !== null) He = N;
                                        else {
                                            var Z = w.return;
                                            Z !== null ? ((He = Z), Zu(Z)) : (He = null);
                                        }
                                        break t;
                                    }
                            }
                            ((at = 0), (qn = null), ka(e, t, h, 5));
                            break;
                        case 6:
                            ((at = 0), (qn = null), ka(e, t, h, 6));
                            break;
                        case 8:
                            (oh(), (Dt = 6));
                            break e;
                        default:
                            throw Error(a(462));
                    }
                }
                fE();
                break;
            } catch (ie) {
                By(e, ie);
            }
        while (!0);
        return ((rl = Dr = null), (A.H = o), (A.A = c), (it = l), He !== null ? 0 : ((dt = null), (qe = 0), du(), Dt));
    }
    function fE() {
        for (; He !== null && !Mt(); ) Xy(He);
    }
    function Xy(e) {
        var t = dy(e.alternate, e, pl);
        ((e.memoizedProps = e.pendingProps), t === null ? Zu(e) : (He = t));
    }
    function qy(e) {
        var t = e,
            l = t.alternate;
        switch (t.tag) {
            case 15:
            case 0:
                t = ay(l, t, t.pendingProps, t.type, void 0, qe);
                break;
            case 11:
                t = ay(l, t, t.pendingProps, t.type.render, t.ref, qe);
                break;
            case 5:
                wd(t);
            default:
                (my(l, t), (t = He = Gg(t, pl)), (t = dy(l, t, pl)));
        }
        ((e.memoizedProps = e.pendingProps), t === null ? Zu(e) : (He = t));
    }
    function ka(e, t, l, o) {
        ((rl = Dr = null), wd(t), (Ea = null), (Uo = 0));
        var c = t.return;
        try {
            if (Ww(e, c, t, l, qe)) {
                ((Dt = 1), Lu(e, ai(l, e.current)), (He = null));
                return;
            }
        } catch (h) {
            if (c !== null) throw ((He = c), h);
            ((Dt = 1), Lu(e, ai(l, e.current)), (He = null));
            return;
        }
        t.flags & 32768
            ? (Ke || o === 1
                  ? (e = !0)
                  : Ra || (qe & 536870912) !== 0
                    ? (e = !1)
                    : ((Zl = e = !0),
                      (o === 2 || o === 9 || o === 3 || o === 6) &&
                          ((o = Gn.current), o !== null && o.tag === 13 && (o.flags |= 16384))),
              Vy(t, e))
            : Zu(t);
    }
    function Zu(e) {
        var t = e;
        do {
            if ((t.flags & 32768) !== 0) {
                Vy(t, Zl);
                return;
            }
            e = t.return;
            var l = nE(t.alternate, t, pl);
            if (l !== null) {
                He = l;
                return;
            }
            if (((t = t.sibling), t !== null)) {
                He = t;
                return;
            }
            He = t = e;
        } while (t !== null);
        Dt === 0 && (Dt = 5);
    }
    function Vy(e, t) {
        do {
            var l = iE(e.alternate, e);
            if (l !== null) {
                ((l.flags &= 32767), (He = l));
                return;
            }
            if (
                ((l = e.return),
                l !== null && ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
                !t && ((e = e.sibling), e !== null))
            ) {
                He = e;
                return;
            }
            He = e = l;
        } while (e !== null);
        ((Dt = 6), (He = null));
    }
    function Py(e, t, l, o, c, h, _, w, N) {
        e.cancelPendingCommit = null;
        do Ku();
        while (Qt !== 0);
        if ((it & 6) !== 0) throw Error(a(327));
        if (t !== null) {
            if (t === e.current) throw Error(a(177));
            if (
                ((h = t.lanes | t.childLanes),
                (h |= Ff),
                me(e, l, h, _, w, N),
                e === dt && ((He = dt = null), (qe = 0)),
                (Na = t),
                (Fl = e),
                (gl = l),
                (lh = h),
                (rh = c),
                (Ly = o),
                (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
                    ? ((e.callbackNode = null),
                      (e.callbackPriority = 0),
                      pE(Wt, function () {
                          return (Fy(), null);
                      }))
                    : ((e.callbackNode = null), (e.callbackPriority = 0)),
                (o = (t.flags & 13878) !== 0),
                (t.subtreeFlags & 13878) !== 0 || o)
            ) {
                ((o = A.T), (A.T = null), (c = B.p), (B.p = 2), (_ = it), (it |= 4));
                try {
                    lE(e, t, l);
                } finally {
                    ((it = _), (B.p = c), (A.T = o));
                }
            }
            ((Qt = 1), Qy(), Zy(), Ky());
        }
    }
    function Qy() {
        if (Qt === 1) {
            Qt = 0;
            var e = Fl,
                t = Na,
                l = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || l) {
                ((l = A.T), (A.T = null));
                var o = B.p;
                B.p = 2;
                var c = it;
                it |= 4;
                try {
                    Ay(t, e);
                    var h = bh,
                        _ = zg(e.containerInfo),
                        w = h.focusedElem,
                        N = h.selectionRange;
                    if (_ !== w && w && w.ownerDocument && Rg(w.ownerDocument.documentElement, w)) {
                        if (N !== null && Pf(w)) {
                            var Z = N.start,
                                ie = N.end;
                            if ((ie === void 0 && (ie = Z), 'selectionStart' in w))
                                ((w.selectionStart = Z), (w.selectionEnd = Math.min(ie, w.value.length)));
                            else {
                                var oe = w.ownerDocument || document,
                                    K = (oe && oe.defaultView) || window;
                                if (K.getSelection) {
                                    var J = K.getSelection(),
                                        Se = w.textContent.length,
                                        Oe = Math.min(N.start, Se),
                                        ft = N.end === void 0 ? Oe : Math.min(N.end, Se);
                                    !J.extend && Oe > ft && ((_ = ft), (ft = Oe), (Oe = _));
                                    var q = Dg(w, Oe),
                                        Y = Dg(w, ft);
                                    if (
                                        q &&
                                        Y &&
                                        (J.rangeCount !== 1 ||
                                            J.anchorNode !== q.node ||
                                            J.anchorOffset !== q.offset ||
                                            J.focusNode !== Y.node ||
                                            J.focusOffset !== Y.offset)
                                    ) {
                                        var Q = oe.createRange();
                                        (Q.setStart(q.node, q.offset),
                                            J.removeAllRanges(),
                                            Oe > ft
                                                ? (J.addRange(Q), J.extend(Y.node, Y.offset))
                                                : (Q.setEnd(Y.node, Y.offset), J.addRange(Q)));
                                    }
                                }
                            }
                        }
                        for (oe = [], J = w; (J = J.parentNode); )
                            J.nodeType === 1 && oe.push({ element: J, left: J.scrollLeft, top: J.scrollTop });
                        for (typeof w.focus == 'function' && w.focus(), w = 0; w < oe.length; w++) {
                            var le = oe[w];
                            ((le.element.scrollLeft = le.left), (le.element.scrollTop = le.top));
                        }
                    }
                    ((ac = !!_h), (bh = _h = null));
                } finally {
                    ((it = c), (B.p = o), (A.T = l));
                }
            }
            ((e.current = t), (Qt = 2));
        }
    }
    function Zy() {
        if (Qt === 2) {
            Qt = 0;
            var e = Fl,
                t = Na,
                l = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || l) {
                ((l = A.T), (A.T = null));
                var o = B.p;
                B.p = 2;
                var c = it;
                it |= 4;
                try {
                    Sy(e, t.alternate, t);
                } finally {
                    ((it = c), (B.p = o), (A.T = l));
                }
            }
            Qt = 3;
        }
    }
    function Ky() {
        if (Qt === 4 || Qt === 3) {
            ((Qt = 0), Ki());
            var e = Fl,
                t = Na,
                l = gl,
                o = Ly;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
                ? (Qt = 5)
                : ((Qt = 0), (Na = Fl = null), $y(e, e.pendingLanes));
            var c = e.pendingLanes;
            if ((c === 0 && ($l = null), _e(l), (t = t.stateNode), bt && typeof bt.onCommitFiberRoot == 'function'))
                try {
                    bt.onCommitFiberRoot(vn, t, void 0, (t.current.flags & 128) === 128);
                } catch {}
            if (o !== null) {
                ((t = A.T), (c = B.p), (B.p = 2), (A.T = null));
                try {
                    for (var h = e.onRecoverableError, _ = 0; _ < o.length; _++) {
                        var w = o[_];
                        h(w.value, { componentStack: w.stack });
                    }
                } finally {
                    ((A.T = t), (B.p = c));
                }
            }
            ((gl & 3) !== 0 && Ku(),
                ji(e),
                (c = e.pendingLanes),
                (l & 261930) !== 0 && (c & 42) !== 0 ? (e === ah ? Wo++ : ((Wo = 0), (ah = e))) : (Wo = 0),
                es(0));
        }
    }
    function $y(e, t) {
        (e.pooledCacheLanes &= t) === 0 && ((t = e.pooledCache), t != null && ((e.pooledCache = null), Lo(t)));
    }
    function Ku() {
        return (Qy(), Zy(), Ky(), Fy());
    }
    function Fy() {
        if (Qt !== 5) return !1;
        var e = Fl,
            t = lh;
        lh = 0;
        var l = _e(gl),
            o = A.T,
            c = B.p;
        try {
            ((B.p = 32 > l ? 32 : l), (A.T = null), (l = rh), (rh = null));
            var h = Fl,
                _ = gl;
            if (((Qt = 0), (Na = Fl = null), (gl = 0), (it & 6) !== 0)) throw Error(a(331));
            var w = it;
            if (
                ((it |= 4),
                Ry(h.current),
                Oy(h, h.current, _, l),
                (it = w),
                es(0, !1),
                bt && typeof bt.onPostCommitFiberRoot == 'function')
            )
                try {
                    bt.onPostCommitFiberRoot(vn, h);
                } catch {}
            return !0;
        } finally {
            ((B.p = c), (A.T = o), $y(e, t));
        }
    }
    function Iy(e, t, l) {
        ((t = ai(l, t)), (t = Bd(e.stateNode, t, 2)), (e = ql(e, t, 2)), e !== null && (te(e, 2), ji(e)));
    }
    function ot(e, t, l) {
        if (e.tag === 3) Iy(e, e, l);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    Iy(t, e, l);
                    break;
                } else if (t.tag === 1) {
                    var o = t.stateNode;
                    if (
                        typeof t.type.getDerivedStateFromError == 'function' ||
                        (typeof o.componentDidCatch == 'function' && ($l === null || !$l.has(o)))
                    ) {
                        ((e = ai(l, e)),
                            (l = Jv(2)),
                            (o = ql(t, l, 2)),
                            o !== null && (Wv(l, o, t, e), te(o, 2), ji(o)));
                        break;
                    }
                }
                t = t.return;
            }
    }
    function uh(e, t, l) {
        var o = e.pingCache;
        if (o === null) {
            o = e.pingCache = new oE();
            var c = new Set();
            o.set(t, c);
        } else ((c = o.get(t)), c === void 0 && ((c = new Set()), o.set(t, c)));
        c.has(l) || ((th = !0), c.add(l), (e = dE.bind(null, e, t, l)), t.then(e, e));
    }
    function dE(e, t, l) {
        var o = e.pingCache;
        (o !== null && o.delete(t),
            (e.pingedLanes |= e.suspendedLanes & l),
            (e.warmLanes &= ~l),
            dt === e &&
                (qe & l) === l &&
                (Dt === 4 || (Dt === 3 && (qe & 62914560) === qe && 300 > vt() - Xu)
                    ? (it & 2) === 0 && La(e, 0)
                    : (nh |= l),
                za === qe && (za = 0)),
            ji(e));
    }
    function Jy(e, t) {
        (t === 0 && (t = re()), (e = Mr(e, t)), e !== null && (te(e, t), ji(e)));
    }
    function hE(e) {
        var t = e.memoizedState,
            l = 0;
        (t !== null && (l = t.retryLane), Jy(e, l));
    }
    function mE(e, t) {
        var l = 0;
        switch (e.tag) {
            case 31:
            case 13:
                var o = e.stateNode,
                    c = e.memoizedState;
                c !== null && (l = c.retryLane);
                break;
            case 19:
                o = e.stateNode;
                break;
            case 22:
                o = e.stateNode._retryCache;
                break;
            default:
                throw Error(a(314));
        }
        (o !== null && o.delete(t), Jy(e, l));
    }
    function pE(e, t) {
        return sn(e, t);
    }
    var $u = null,
        Ua = null,
        ch = !1,
        Fu = !1,
        fh = !1,
        Jl = 0;
    function ji(e) {
        (e !== Ua && e.next === null && (Ua === null ? ($u = Ua = e) : (Ua = Ua.next = e)),
            (Fu = !0),
            ch || ((ch = !0), vE()));
    }
    function es(e, t) {
        if (!fh && Fu) {
            fh = !0;
            do
                for (var l = !1, o = $u; o !== null; ) {
                    if (e !== 0) {
                        var c = o.pendingLanes;
                        if (c === 0) var h = 0;
                        else {
                            var _ = o.suspendedLanes,
                                w = o.pingedLanes;
                            ((h = (1 << (31 - Ie(42 | e) + 1)) - 1),
                                (h &= c & ~(_ & ~w)),
                                (h = h & 201326741 ? (h & 201326741) | 1 : h ? h | 2 : 0));
                        }
                        h !== 0 && ((l = !0), n0(o, h));
                    } else
                        ((h = qe),
                            (h = Bn(o, o === dt ? h : 0, o.cancelPendingCommit !== null || o.timeoutHandle !== -1)),
                            (h & 3) === 0 || be(o, h) || ((l = !0), n0(o, h)));
                    o = o.next;
                }
            while (l);
            fh = !1;
        }
    }
    function gE() {
        Wy();
    }
    function Wy() {
        Fu = ch = !1;
        var e = 0;
        Jl !== 0 && ME() && (e = Jl);
        for (var t = vt(), l = null, o = $u; o !== null; ) {
            var c = o.next,
                h = e0(o, t);
            (h === 0
                ? ((o.next = null), l === null ? ($u = c) : (l.next = c), c === null && (Ua = l))
                : ((l = o), (e !== 0 || (h & 3) !== 0) && (Fu = !0)),
                (o = c));
        }
        ((Qt !== 0 && Qt !== 5) || es(e), Jl !== 0 && (Jl = 0));
    }
    function e0(e, t) {
        for (
            var l = e.suspendedLanes, o = e.pingedLanes, c = e.expirationTimes, h = e.pendingLanes & -62914561;
            0 < h;
        ) {
            var _ = 31 - Ie(h),
                w = 1 << _,
                N = c[_];
            (N === -1 ? ((w & l) === 0 || (w & o) !== 0) && (c[_] = j(w, t)) : N <= t && (e.expiredLanes |= w),
                (h &= ~w));
        }
        if (
            ((t = dt),
            (l = qe),
            (l = Bn(e, e === t ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
            (o = e.callbackNode),
            l === 0 || (e === t && (at === 2 || at === 9)) || e.cancelPendingCommit !== null)
        )
            return (o !== null && o !== null && rt(o), (e.callbackNode = null), (e.callbackPriority = 0));
        if ((l & 3) === 0 || be(e, l)) {
            if (((t = l & -l), t === e.callbackPriority)) return t;
            switch ((o !== null && rt(o), _e(l))) {
                case 2:
                case 8:
                    l = un;
                    break;
                case 32:
                    l = Wt;
                    break;
                case 268435456:
                    l = En;
                    break;
                default:
                    l = Wt;
            }
            return ((o = t0.bind(null, e)), (l = sn(l, o)), (e.callbackPriority = t), (e.callbackNode = l), t);
        }
        return (o !== null && o !== null && rt(o), (e.callbackPriority = 2), (e.callbackNode = null), 2);
    }
    function t0(e, t) {
        if (Qt !== 0 && Qt !== 5) return ((e.callbackNode = null), (e.callbackPriority = 0), null);
        var l = e.callbackNode;
        if (Ku() && e.callbackNode !== l) return null;
        var o = qe;
        return (
            (o = Bn(e, e === dt ? o : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
            o === 0
                ? null
                : (Uy(e, o, t), e0(e, vt()), e.callbackNode != null && e.callbackNode === l ? t0.bind(null, e) : null)
        );
    }
    function n0(e, t) {
        if (Ku()) return null;
        Uy(e, t, !0);
    }
    function vE() {
        CE(function () {
            (it & 6) !== 0 ? sn(Pt, gE) : Wy();
        });
    }
    function dh() {
        if (Jl === 0) {
            var e = Sa;
            (e === 0 && ((e = fn), (fn <<= 1), (fn & 261888) === 0 && (fn = 256)), (Jl = e));
        }
        return Jl;
    }
    function i0(e) {
        return e == null || typeof e == 'symbol' || typeof e == 'boolean'
            ? null
            : typeof e == 'function'
              ? e
              : lu('' + e);
    }
    function l0(e, t) {
        var l = t.ownerDocument.createElement('input');
        return (
            (l.name = t.name),
            (l.value = t.value),
            e.id && l.setAttribute('form', e.id),
            t.parentNode.insertBefore(l, t),
            (e = new FormData(e)),
            l.parentNode.removeChild(l),
            e
        );
    }
    function yE(e, t, l, o, c) {
        if (t === 'submit' && l && l.stateNode === c) {
            var h = i0((c[Ue] || null).action),
                _ = o.submitter;
            _ &&
                ((t = (t = _[Ue] || null) ? i0(t.formAction) : _.getAttribute('formAction')),
                t !== null && ((h = t), (_ = null)));
            var w = new su('action', 'action', null, o, c);
            e.push({
                event: w,
                listeners: [
                    {
                        instance: null,
                        listener: function () {
                            if (o.defaultPrevented) {
                                if (Jl !== 0) {
                                    var N = _ ? l0(c, _) : new FormData(c);
                                    zd(l, { pending: !0, data: N, method: c.method, action: h }, null, N);
                                }
                            } else
                                typeof h == 'function' &&
                                    (w.preventDefault(),
                                    (N = _ ? l0(c, _) : new FormData(c)),
                                    zd(l, { pending: !0, data: N, method: c.method, action: h }, h, N));
                        },
                        currentTarget: c,
                    },
                ],
            });
        }
    }
    for (var hh = 0; hh < $f.length; hh++) {
        var mh = $f[hh],
            _E = mh.toLowerCase(),
            bE = mh[0].toUpperCase() + mh.slice(1);
        wi(_E, 'on' + bE);
    }
    (wi(kg, 'onAnimationEnd'),
        wi(Ug, 'onAnimationIteration'),
        wi(jg, 'onAnimationStart'),
        wi('dblclick', 'onDoubleClick'),
        wi('focusin', 'onFocus'),
        wi('focusout', 'onBlur'),
        wi(Uw, 'onTransitionRun'),
        wi(jw, 'onTransitionStart'),
        wi(Bw, 'onTransitionCancel'),
        wi(Bg, 'onTransitionEnd'),
        oa('onMouseEnter', ['mouseout', 'mouseover']),
        oa('onMouseLeave', ['mouseout', 'mouseover']),
        oa('onPointerEnter', ['pointerout', 'pointerover']),
        oa('onPointerLeave', ['pointerout', 'pointerover']),
        xi('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
        xi(
            'onSelect',
            'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' '),
        ),
        xi('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
        xi('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
        xi('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' ')),
        xi('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')));
    var ts =
            'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
                ' ',
            ),
        SE = new Set('beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(ts));
    function r0(e, t) {
        t = (t & 4) !== 0;
        for (var l = 0; l < e.length; l++) {
            var o = e[l],
                c = o.event;
            o = o.listeners;
            e: {
                var h = void 0;
                if (t)
                    for (var _ = o.length - 1; 0 <= _; _--) {
                        var w = o[_],
                            N = w.instance,
                            Z = w.currentTarget;
                        if (((w = w.listener), N !== h && c.isPropagationStopped())) break e;
                        ((h = w), (c.currentTarget = Z));
                        try {
                            h(c);
                        } catch (ie) {
                            fu(ie);
                        }
                        ((c.currentTarget = null), (h = N));
                    }
                else
                    for (_ = 0; _ < o.length; _++) {
                        if (
                            ((w = o[_]),
                            (N = w.instance),
                            (Z = w.currentTarget),
                            (w = w.listener),
                            N !== h && c.isPropagationStopped())
                        )
                            break e;
                        ((h = w), (c.currentTarget = Z));
                        try {
                            h(c);
                        } catch (ie) {
                            fu(ie);
                        }
                        ((c.currentTarget = null), (h = N));
                    }
            }
        }
    }
    function Ye(e, t) {
        var l = t[st];
        l === void 0 && (l = t[st] = new Set());
        var o = e + '__bubble';
        l.has(o) || (a0(t, e, 2, !1), l.add(o));
    }
    function ph(e, t, l) {
        var o = 0;
        (t && (o |= 4), a0(l, e, o, t));
    }
    var Iu = '_reactListening' + Math.random().toString(36).slice(2);
    function gh(e) {
        if (!e[Iu]) {
            ((e[Iu] = !0),
                kl.forEach(function (l) {
                    l !== 'selectionchange' && (SE.has(l) || ph(l, !1, e), ph(l, !0, e));
                }));
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Iu] || ((t[Iu] = !0), ph('selectionchange', !1, t));
        }
    }
    function a0(e, t, l, o) {
        switch (k0(t)) {
            case 2:
                var c = $E;
                break;
            case 8:
                c = FE;
                break;
            default:
                c = Rh;
        }
        ((l = c.bind(null, t, l, e)),
            (c = void 0),
            !Uf || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (c = !0),
            o
                ? c !== void 0
                    ? e.addEventListener(t, l, { capture: !0, passive: c })
                    : e.addEventListener(t, l, !0)
                : c !== void 0
                  ? e.addEventListener(t, l, { passive: c })
                  : e.addEventListener(t, l, !1));
    }
    function vh(e, t, l, o, c) {
        var h = o;
        if ((t & 1) === 0 && (t & 2) === 0 && o !== null)
            e: for (;;) {
                if (o === null) return;
                var _ = o.tag;
                if (_ === 3 || _ === 4) {
                    var w = o.stateNode.containerInfo;
                    if (w === c) break;
                    if (_ === 4)
                        for (_ = o.return; _ !== null; ) {
                            var N = _.tag;
                            if ((N === 3 || N === 4) && _.stateNode.containerInfo === c) return;
                            _ = _.return;
                        }
                    for (; w !== null; ) {
                        if (((_ = Ji(w)), _ === null)) return;
                        if (((N = _.tag), N === 5 || N === 6 || N === 26 || N === 27)) {
                            o = h = _;
                            continue e;
                        }
                        w = w.parentNode;
                    }
                }
                o = o.return;
            }
        fg(function () {
            var Z = h,
                ie = Lf(l),
                oe = [];
            e: {
                var K = Hg.get(e);
                if (K !== void 0) {
                    var J = su,
                        Se = e;
                    switch (e) {
                        case 'keypress':
                            if (au(l) === 0) break e;
                        case 'keydown':
                        case 'keyup':
                            J = mw;
                            break;
                        case 'focusin':
                            ((Se = 'focus'), (J = Yf));
                            break;
                        case 'focusout':
                            ((Se = 'blur'), (J = Yf));
                            break;
                        case 'beforeblur':
                        case 'afterblur':
                            J = Yf;
                            break;
                        case 'click':
                            if (l.button === 2) break e;
                        case 'auxclick':
                        case 'dblclick':
                        case 'mousedown':
                        case 'mousemove':
                        case 'mouseup':
                        case 'mouseout':
                        case 'mouseover':
                        case 'contextmenu':
                            J = mg;
                            break;
                        case 'drag':
                        case 'dragend':
                        case 'dragenter':
                        case 'dragexit':
                        case 'dragleave':
                        case 'dragover':
                        case 'dragstart':
                        case 'drop':
                            J = nw;
                            break;
                        case 'touchcancel':
                        case 'touchend':
                        case 'touchmove':
                        case 'touchstart':
                            J = vw;
                            break;
                        case kg:
                        case Ug:
                        case jg:
                            J = rw;
                            break;
                        case Bg:
                            J = _w;
                            break;
                        case 'scroll':
                        case 'scrollend':
                            J = ew;
                            break;
                        case 'wheel':
                            J = Sw;
                            break;
                        case 'copy':
                        case 'cut':
                        case 'paste':
                            J = ow;
                            break;
                        case 'gotpointercapture':
                        case 'lostpointercapture':
                        case 'pointercancel':
                        case 'pointerdown':
                        case 'pointermove':
                        case 'pointerout':
                        case 'pointerover':
                        case 'pointerup':
                            J = gg;
                            break;
                        case 'toggle':
                        case 'beforetoggle':
                            J = ww;
                    }
                    var Oe = (t & 4) !== 0,
                        ft = !Oe && (e === 'scroll' || e === 'scrollend'),
                        q = Oe ? (K !== null ? K + 'Capture' : null) : K;
                    Oe = [];
                    for (var Y = Z, Q; Y !== null; ) {
                        var le = Y;
                        if (
                            ((Q = le.stateNode),
                            (le = le.tag),
                            (le !== 5 && le !== 26 && le !== 27) ||
                                Q === null ||
                                q === null ||
                                ((le = wo(Y, q)), le != null && Oe.push(ns(Y, le, Q))),
                            ft)
                        )
                            break;
                        Y = Y.return;
                    }
                    0 < Oe.length && ((K = new J(K, Se, null, l, ie)), oe.push({ event: K, listeners: Oe }));
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (
                        ((K = e === 'mouseover' || e === 'pointerover'),
                        (J = e === 'mouseout' || e === 'pointerout'),
                        K && l !== Nf && (Se = l.relatedTarget || l.fromElement) && (Ji(Se) || Se[je]))
                    )
                        break e;
                    if (
                        (J || K) &&
                        ((K =
                            ie.window === ie ? ie : (K = ie.ownerDocument) ? K.defaultView || K.parentWindow : window),
                        J
                            ? ((Se = l.relatedTarget || l.toElement),
                              (J = Z),
                              (Se = Se ? Ji(Se) : null),
                              Se !== null &&
                                  ((ft = u(Se)), (Oe = Se.tag), Se !== ft || (Oe !== 5 && Oe !== 27 && Oe !== 6)) &&
                                  (Se = null))
                            : ((J = null), (Se = Z)),
                        J !== Se)
                    ) {
                        if (
                            ((Oe = mg),
                            (le = 'onMouseLeave'),
                            (q = 'onMouseEnter'),
                            (Y = 'mouse'),
                            (e === 'pointerout' || e === 'pointerover') &&
                                ((Oe = gg), (le = 'onPointerLeave'), (q = 'onPointerEnter'), (Y = 'pointer')),
                            (ft = J == null ? K : Ze(J)),
                            (Q = Se == null ? K : Ze(Se)),
                            (K = new Oe(le, Y + 'leave', J, l, ie)),
                            (K.target = ft),
                            (K.relatedTarget = Q),
                            (le = null),
                            Ji(ie) === Z &&
                                ((Oe = new Oe(q, Y + 'enter', Se, l, ie)),
                                (Oe.target = Q),
                                (Oe.relatedTarget = ft),
                                (le = Oe)),
                            (ft = le),
                            J && Se)
                        )
                            t: {
                                for (Oe = xE, q = J, Y = Se, Q = 0, le = q; le; le = Oe(le)) Q++;
                                le = 0;
                                for (var Te = Y; Te; Te = Oe(Te)) le++;
                                for (; 0 < Q - le; ) ((q = Oe(q)), Q--);
                                for (; 0 < le - Q; ) ((Y = Oe(Y)), le--);
                                for (; Q--; ) {
                                    if (q === Y || (Y !== null && q === Y.alternate)) {
                                        Oe = q;
                                        break t;
                                    }
                                    ((q = Oe(q)), (Y = Oe(Y)));
                                }
                                Oe = null;
                            }
                        else Oe = null;
                        (J !== null && o0(oe, K, J, Oe, !1), Se !== null && ft !== null && o0(oe, ft, Se, Oe, !0));
                    }
                }
                e: {
                    if (
                        ((K = Z ? Ze(Z) : window),
                        (J = K.nodeName && K.nodeName.toLowerCase()),
                        J === 'select' || (J === 'input' && K.type === 'file'))
                    )
                        var et = Eg;
                    else if (xg(K))
                        if (Tg) et = Nw;
                        else {
                            et = Rw;
                            var Ee = Dw;
                        }
                    else
                        ((J = K.nodeName),
                            !J || J.toLowerCase() !== 'input' || (K.type !== 'checkbox' && K.type !== 'radio')
                                ? Z && zf(Z.elementType) && (et = Eg)
                                : (et = zw));
                    if (et && (et = et(e, Z))) {
                        wg(oe, et, l, ie);
                        break e;
                    }
                    (Ee && Ee(e, K, Z),
                        e === 'focusout' &&
                            Z &&
                            K.type === 'number' &&
                            Z.memoizedProps.value != null &&
                            Rf(K, 'number', K.value));
                }
                switch (((Ee = Z ? Ze(Z) : window), e)) {
                    case 'focusin':
                        (xg(Ee) || Ee.contentEditable === 'true') && ((ha = Ee), (Qf = Z), (Ro = null));
                        break;
                    case 'focusout':
                        Ro = Qf = ha = null;
                        break;
                    case 'mousedown':
                        Zf = !0;
                        break;
                    case 'contextmenu':
                    case 'mouseup':
                    case 'dragend':
                        ((Zf = !1), Ng(oe, l, ie));
                        break;
                    case 'selectionchange':
                        if (kw) break;
                    case 'keydown':
                    case 'keyup':
                        Ng(oe, l, ie);
                }
                var ke;
                if (Xf)
                    e: {
                        switch (e) {
                            case 'compositionstart':
                                var Ve = 'onCompositionStart';
                                break e;
                            case 'compositionend':
                                Ve = 'onCompositionEnd';
                                break e;
                            case 'compositionupdate':
                                Ve = 'onCompositionUpdate';
                                break e;
                        }
                        Ve = void 0;
                    }
                else
                    da
                        ? bg(e, l) && (Ve = 'onCompositionEnd')
                        : e === 'keydown' && l.keyCode === 229 && (Ve = 'onCompositionStart');
                (Ve &&
                    (vg &&
                        l.locale !== 'ko' &&
                        (da || Ve !== 'onCompositionStart'
                            ? Ve === 'onCompositionEnd' && da && (ke = dg())
                            : ((Ul = ie), (jf = 'value' in Ul ? Ul.value : Ul.textContent), (da = !0))),
                    (Ee = Ju(Z, Ve)),
                    0 < Ee.length &&
                        ((Ve = new pg(Ve, e, null, l, ie)),
                        oe.push({ event: Ve, listeners: Ee }),
                        ke ? (Ve.data = ke) : ((ke = Sg(l)), ke !== null && (Ve.data = ke)))),
                    (ke = Tw ? Aw(e, l) : Mw(e, l)) &&
                        ((Ve = Ju(Z, 'onBeforeInput')),
                        0 < Ve.length &&
                            ((Ee = new pg('onBeforeInput', 'beforeinput', null, l, ie)),
                            oe.push({ event: Ee, listeners: Ve }),
                            (Ee.data = ke))),
                    yE(oe, e, Z, l, ie));
            }
            r0(oe, t);
        });
    }
    function ns(e, t, l) {
        return { instance: e, listener: t, currentTarget: l };
    }
    function Ju(e, t) {
        for (var l = t + 'Capture', o = []; e !== null; ) {
            var c = e,
                h = c.stateNode;
            if (
                ((c = c.tag),
                (c !== 5 && c !== 26 && c !== 27) ||
                    h === null ||
                    ((c = wo(e, l)),
                    c != null && o.unshift(ns(e, c, h)),
                    (c = wo(e, t)),
                    c != null && o.push(ns(e, c, h))),
                e.tag === 3)
            )
                return o;
            e = e.return;
        }
        return [];
    }
    function xE(e) {
        if (e === null) return null;
        do e = e.return;
        while (e && e.tag !== 5 && e.tag !== 27);
        return e || null;
    }
    function o0(e, t, l, o, c) {
        for (var h = t._reactName, _ = []; l !== null && l !== o; ) {
            var w = l,
                N = w.alternate,
                Z = w.stateNode;
            if (((w = w.tag), N !== null && N === o)) break;
            ((w !== 5 && w !== 26 && w !== 27) ||
                Z === null ||
                ((N = Z),
                c
                    ? ((Z = wo(l, h)), Z != null && _.unshift(ns(l, Z, N)))
                    : c || ((Z = wo(l, h)), Z != null && _.push(ns(l, Z, N)))),
                (l = l.return));
        }
        _.length !== 0 && e.push({ event: t, listeners: _ });
    }
    var wE = /\r\n?/g,
        EE = /\u0000|\uFFFD/g;
    function s0(e) {
        return (typeof e == 'string' ? e : '' + e)
            .replace(
                wE,
                `
`,
            )
            .replace(EE, '');
    }
    function u0(e, t) {
        return ((t = s0(t)), s0(e) === t);
    }
    function ct(e, t, l, o, c, h) {
        switch (l) {
            case 'children':
                typeof o == 'string'
                    ? t === 'body' || (t === 'textarea' && o === '') || ua(e, o)
                    : (typeof o == 'number' || typeof o == 'bigint') && t !== 'body' && ua(e, '' + o);
                break;
            case 'className':
                nu(e, 'class', o);
                break;
            case 'tabIndex':
                nu(e, 'tabindex', o);
                break;
            case 'dir':
            case 'role':
            case 'viewBox':
            case 'width':
            case 'height':
                nu(e, l, o);
                break;
            case 'style':
                ug(e, o, h);
                break;
            case 'data':
                if (t !== 'object') {
                    nu(e, 'data', o);
                    break;
                }
            case 'src':
            case 'href':
                if (o === '' && (t !== 'a' || l !== 'href')) {
                    e.removeAttribute(l);
                    break;
                }
                if (o == null || typeof o == 'function' || typeof o == 'symbol' || typeof o == 'boolean') {
                    e.removeAttribute(l);
                    break;
                }
                ((o = lu('' + o)), e.setAttribute(l, o));
                break;
            case 'action':
            case 'formAction':
                if (typeof o == 'function') {
                    e.setAttribute(
                        l,
                        "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
                    );
                    break;
                } else
                    typeof h == 'function' &&
                        (l === 'formAction'
                            ? (t !== 'input' && ct(e, t, 'name', c.name, c, null),
                              ct(e, t, 'formEncType', c.formEncType, c, null),
                              ct(e, t, 'formMethod', c.formMethod, c, null),
                              ct(e, t, 'formTarget', c.formTarget, c, null))
                            : (ct(e, t, 'encType', c.encType, c, null),
                              ct(e, t, 'method', c.method, c, null),
                              ct(e, t, 'target', c.target, c, null)));
                if (o == null || typeof o == 'symbol' || typeof o == 'boolean') {
                    e.removeAttribute(l);
                    break;
                }
                ((o = lu('' + o)), e.setAttribute(l, o));
                break;
            case 'onClick':
                o != null && (e.onclick = tl);
                break;
            case 'onScroll':
                o != null && Ye('scroll', e);
                break;
            case 'onScrollEnd':
                o != null && Ye('scrollend', e);
                break;
            case 'dangerouslySetInnerHTML':
                if (o != null) {
                    if (typeof o != 'object' || !('__html' in o)) throw Error(a(61));
                    if (((l = o.__html), l != null)) {
                        if (c.children != null) throw Error(a(60));
                        e.innerHTML = l;
                    }
                }
                break;
            case 'multiple':
                e.multiple = o && typeof o != 'function' && typeof o != 'symbol';
                break;
            case 'muted':
                e.muted = o && typeof o != 'function' && typeof o != 'symbol';
                break;
            case 'suppressContentEditableWarning':
            case 'suppressHydrationWarning':
            case 'defaultValue':
            case 'defaultChecked':
            case 'innerHTML':
            case 'ref':
                break;
            case 'autoFocus':
                break;
            case 'xlinkHref':
                if (o == null || typeof o == 'function' || typeof o == 'boolean' || typeof o == 'symbol') {
                    e.removeAttribute('xlink:href');
                    break;
                }
                ((l = lu('' + o)), e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', l));
                break;
            case 'contentEditable':
            case 'spellCheck':
            case 'draggable':
            case 'value':
            case 'autoReverse':
            case 'externalResourcesRequired':
            case 'focusable':
            case 'preserveAlpha':
                o != null && typeof o != 'function' && typeof o != 'symbol'
                    ? e.setAttribute(l, '' + o)
                    : e.removeAttribute(l);
                break;
            case 'inert':
            case 'allowFullScreen':
            case 'async':
            case 'autoPlay':
            case 'controls':
            case 'default':
            case 'defer':
            case 'disabled':
            case 'disablePictureInPicture':
            case 'disableRemotePlayback':
            case 'formNoValidate':
            case 'hidden':
            case 'loop':
            case 'noModule':
            case 'noValidate':
            case 'open':
            case 'playsInline':
            case 'readOnly':
            case 'required':
            case 'reversed':
            case 'scoped':
            case 'seamless':
            case 'itemScope':
                o && typeof o != 'function' && typeof o != 'symbol' ? e.setAttribute(l, '') : e.removeAttribute(l);
                break;
            case 'capture':
            case 'download':
                o === !0
                    ? e.setAttribute(l, '')
                    : o !== !1 && o != null && typeof o != 'function' && typeof o != 'symbol'
                      ? e.setAttribute(l, o)
                      : e.removeAttribute(l);
                break;
            case 'cols':
            case 'rows':
            case 'size':
            case 'span':
                o != null && typeof o != 'function' && typeof o != 'symbol' && !isNaN(o) && 1 <= o
                    ? e.setAttribute(l, o)
                    : e.removeAttribute(l);
                break;
            case 'rowSpan':
            case 'start':
                o == null || typeof o == 'function' || typeof o == 'symbol' || isNaN(o)
                    ? e.removeAttribute(l)
                    : e.setAttribute(l, o);
                break;
            case 'popover':
                (Ye('beforetoggle', e), Ye('toggle', e), tu(e, 'popover', o));
                break;
            case 'xlinkActuate':
                el(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', o);
                break;
            case 'xlinkArcrole':
                el(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', o);
                break;
            case 'xlinkRole':
                el(e, 'http://www.w3.org/1999/xlink', 'xlink:role', o);
                break;
            case 'xlinkShow':
                el(e, 'http://www.w3.org/1999/xlink', 'xlink:show', o);
                break;
            case 'xlinkTitle':
                el(e, 'http://www.w3.org/1999/xlink', 'xlink:title', o);
                break;
            case 'xlinkType':
                el(e, 'http://www.w3.org/1999/xlink', 'xlink:type', o);
                break;
            case 'xmlBase':
                el(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', o);
                break;
            case 'xmlLang':
                el(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', o);
                break;
            case 'xmlSpace':
                el(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', o);
                break;
            case 'is':
                tu(e, 'is', o);
                break;
            case 'innerText':
            case 'textContent':
                break;
            default:
                (!(2 < l.length) || (l[0] !== 'o' && l[0] !== 'O') || (l[1] !== 'n' && l[1] !== 'N')) &&
                    ((l = Jx.get(l) || l), tu(e, l, o));
        }
    }
    function yh(e, t, l, o, c, h) {
        switch (l) {
            case 'style':
                ug(e, o, h);
                break;
            case 'dangerouslySetInnerHTML':
                if (o != null) {
                    if (typeof o != 'object' || !('__html' in o)) throw Error(a(61));
                    if (((l = o.__html), l != null)) {
                        if (c.children != null) throw Error(a(60));
                        e.innerHTML = l;
                    }
                }
                break;
            case 'children':
                typeof o == 'string' ? ua(e, o) : (typeof o == 'number' || typeof o == 'bigint') && ua(e, '' + o);
                break;
            case 'onScroll':
                o != null && Ye('scroll', e);
                break;
            case 'onScrollEnd':
                o != null && Ye('scrollend', e);
                break;
            case 'onClick':
                o != null && (e.onclick = tl);
                break;
            case 'suppressContentEditableWarning':
            case 'suppressHydrationWarning':
            case 'innerHTML':
            case 'ref':
                break;
            case 'innerText':
            case 'textContent':
                break;
            default:
                if (!eu.hasOwnProperty(l))
                    e: {
                        if (
                            l[0] === 'o' &&
                            l[1] === 'n' &&
                            ((c = l.endsWith('Capture')),
                            (t = l.slice(2, c ? l.length - 7 : void 0)),
                            (h = e[Ue] || null),
                            (h = h != null ? h[l] : null),
                            typeof h == 'function' && e.removeEventListener(t, h, c),
                            typeof o == 'function')
                        ) {
                            (typeof h != 'function' &&
                                h !== null &&
                                (l in e ? (e[l] = null) : e.hasAttribute(l) && e.removeAttribute(l)),
                                e.addEventListener(t, o, c));
                            break e;
                        }
                        l in e ? (e[l] = o) : o === !0 ? e.setAttribute(l, '') : tu(e, l, o);
                    }
        }
    }
    function an(e, t, l) {
        switch (t) {
            case 'div':
            case 'span':
            case 'svg':
            case 'path':
            case 'a':
            case 'g':
            case 'p':
            case 'li':
                break;
            case 'img':
                (Ye('error', e), Ye('load', e));
                var o = !1,
                    c = !1,
                    h;
                for (h in l)
                    if (l.hasOwnProperty(h)) {
                        var _ = l[h];
                        if (_ != null)
                            switch (h) {
                                case 'src':
                                    o = !0;
                                    break;
                                case 'srcSet':
                                    c = !0;
                                    break;
                                case 'children':
                                case 'dangerouslySetInnerHTML':
                                    throw Error(a(137, t));
                                default:
                                    ct(e, t, h, _, l, null);
                            }
                    }
                (c && ct(e, t, 'srcSet', l.srcSet, l, null), o && ct(e, t, 'src', l.src, l, null));
                return;
            case 'input':
                Ye('invalid', e);
                var w = (h = _ = c = null),
                    N = null,
                    Z = null;
                for (o in l)
                    if (l.hasOwnProperty(o)) {
                        var ie = l[o];
                        if (ie != null)
                            switch (o) {
                                case 'name':
                                    c = ie;
                                    break;
                                case 'type':
                                    _ = ie;
                                    break;
                                case 'checked':
                                    N = ie;
                                    break;
                                case 'defaultChecked':
                                    Z = ie;
                                    break;
                                case 'value':
                                    h = ie;
                                    break;
                                case 'defaultValue':
                                    w = ie;
                                    break;
                                case 'children':
                                case 'dangerouslySetInnerHTML':
                                    if (ie != null) throw Error(a(137, t));
                                    break;
                                default:
                                    ct(e, t, o, ie, l, null);
                            }
                    }
                rg(e, h, w, N, Z, _, c, !1);
                return;
            case 'select':
                (Ye('invalid', e), (o = _ = h = null));
                for (c in l)
                    if (l.hasOwnProperty(c) && ((w = l[c]), w != null))
                        switch (c) {
                            case 'value':
                                h = w;
                                break;
                            case 'defaultValue':
                                _ = w;
                                break;
                            case 'multiple':
                                o = w;
                            default:
                                ct(e, t, c, w, l, null);
                        }
                ((t = h), (l = _), (e.multiple = !!o), t != null ? sa(e, !!o, t, !1) : l != null && sa(e, !!o, l, !0));
                return;
            case 'textarea':
                (Ye('invalid', e), (h = c = o = null));
                for (_ in l)
                    if (l.hasOwnProperty(_) && ((w = l[_]), w != null))
                        switch (_) {
                            case 'value':
                                o = w;
                                break;
                            case 'defaultValue':
                                c = w;
                                break;
                            case 'children':
                                h = w;
                                break;
                            case 'dangerouslySetInnerHTML':
                                if (w != null) throw Error(a(91));
                                break;
                            default:
                                ct(e, t, _, w, l, null);
                        }
                og(e, o, c, h);
                return;
            case 'option':
                for (N in l)
                    if (l.hasOwnProperty(N) && ((o = l[N]), o != null))
                        switch (N) {
                            case 'selected':
                                e.selected = o && typeof o != 'function' && typeof o != 'symbol';
                                break;
                            default:
                                ct(e, t, N, o, l, null);
                        }
                return;
            case 'dialog':
                (Ye('beforetoggle', e), Ye('toggle', e), Ye('cancel', e), Ye('close', e));
                break;
            case 'iframe':
            case 'object':
                Ye('load', e);
                break;
            case 'video':
            case 'audio':
                for (o = 0; o < ts.length; o++) Ye(ts[o], e);
                break;
            case 'image':
                (Ye('error', e), Ye('load', e));
                break;
            case 'details':
                Ye('toggle', e);
                break;
            case 'embed':
            case 'source':
            case 'link':
                (Ye('error', e), Ye('load', e));
            case 'area':
            case 'base':
            case 'br':
            case 'col':
            case 'hr':
            case 'keygen':
            case 'meta':
            case 'param':
            case 'track':
            case 'wbr':
            case 'menuitem':
                for (Z in l)
                    if (l.hasOwnProperty(Z) && ((o = l[Z]), o != null))
                        switch (Z) {
                            case 'children':
                            case 'dangerouslySetInnerHTML':
                                throw Error(a(137, t));
                            default:
                                ct(e, t, Z, o, l, null);
                        }
                return;
            default:
                if (zf(t)) {
                    for (ie in l) l.hasOwnProperty(ie) && ((o = l[ie]), o !== void 0 && yh(e, t, ie, o, l, void 0));
                    return;
                }
        }
        for (w in l) l.hasOwnProperty(w) && ((o = l[w]), o != null && ct(e, t, w, o, l, null));
    }
    function TE(e, t, l, o) {
        switch (t) {
            case 'div':
            case 'span':
            case 'svg':
            case 'path':
            case 'a':
            case 'g':
            case 'p':
            case 'li':
                break;
            case 'input':
                var c = null,
                    h = null,
                    _ = null,
                    w = null,
                    N = null,
                    Z = null,
                    ie = null;
                for (J in l) {
                    var oe = l[J];
                    if (l.hasOwnProperty(J) && oe != null)
                        switch (J) {
                            case 'checked':
                                break;
                            case 'value':
                                break;
                            case 'defaultValue':
                                N = oe;
                            default:
                                o.hasOwnProperty(J) || ct(e, t, J, null, o, oe);
                        }
                }
                for (var K in o) {
                    var J = o[K];
                    if (((oe = l[K]), o.hasOwnProperty(K) && (J != null || oe != null)))
                        switch (K) {
                            case 'type':
                                h = J;
                                break;
                            case 'name':
                                c = J;
                                break;
                            case 'checked':
                                Z = J;
                                break;
                            case 'defaultChecked':
                                ie = J;
                                break;
                            case 'value':
                                _ = J;
                                break;
                            case 'defaultValue':
                                w = J;
                                break;
                            case 'children':
                            case 'dangerouslySetInnerHTML':
                                if (J != null) throw Error(a(137, t));
                                break;
                            default:
                                J !== oe && ct(e, t, K, J, o, oe);
                        }
                }
                Df(e, _, w, N, Z, ie, h, c);
                return;
            case 'select':
                J = _ = w = K = null;
                for (h in l)
                    if (((N = l[h]), l.hasOwnProperty(h) && N != null))
                        switch (h) {
                            case 'value':
                                break;
                            case 'multiple':
                                J = N;
                            default:
                                o.hasOwnProperty(h) || ct(e, t, h, null, o, N);
                        }
                for (c in o)
                    if (((h = o[c]), (N = l[c]), o.hasOwnProperty(c) && (h != null || N != null)))
                        switch (c) {
                            case 'value':
                                K = h;
                                break;
                            case 'defaultValue':
                                w = h;
                                break;
                            case 'multiple':
                                _ = h;
                            default:
                                h !== N && ct(e, t, c, h, o, N);
                        }
                ((t = w),
                    (l = _),
                    (o = J),
                    K != null
                        ? sa(e, !!l, K, !1)
                        : !!o != !!l && (t != null ? sa(e, !!l, t, !0) : sa(e, !!l, l ? [] : '', !1)));
                return;
            case 'textarea':
                J = K = null;
                for (w in l)
                    if (((c = l[w]), l.hasOwnProperty(w) && c != null && !o.hasOwnProperty(w)))
                        switch (w) {
                            case 'value':
                                break;
                            case 'children':
                                break;
                            default:
                                ct(e, t, w, null, o, c);
                        }
                for (_ in o)
                    if (((c = o[_]), (h = l[_]), o.hasOwnProperty(_) && (c != null || h != null)))
                        switch (_) {
                            case 'value':
                                K = c;
                                break;
                            case 'defaultValue':
                                J = c;
                                break;
                            case 'children':
                                break;
                            case 'dangerouslySetInnerHTML':
                                if (c != null) throw Error(a(91));
                                break;
                            default:
                                c !== h && ct(e, t, _, c, o, h);
                        }
                ag(e, K, J);
                return;
            case 'option':
                for (var Se in l)
                    if (((K = l[Se]), l.hasOwnProperty(Se) && K != null && !o.hasOwnProperty(Se)))
                        switch (Se) {
                            case 'selected':
                                e.selected = !1;
                                break;
                            default:
                                ct(e, t, Se, null, o, K);
                        }
                for (N in o)
                    if (((K = o[N]), (J = l[N]), o.hasOwnProperty(N) && K !== J && (K != null || J != null)))
                        switch (N) {
                            case 'selected':
                                e.selected = K && typeof K != 'function' && typeof K != 'symbol';
                                break;
                            default:
                                ct(e, t, N, K, o, J);
                        }
                return;
            case 'img':
            case 'link':
            case 'area':
            case 'base':
            case 'br':
            case 'col':
            case 'embed':
            case 'hr':
            case 'keygen':
            case 'meta':
            case 'param':
            case 'source':
            case 'track':
            case 'wbr':
            case 'menuitem':
                for (var Oe in l)
                    ((K = l[Oe]),
                        l.hasOwnProperty(Oe) && K != null && !o.hasOwnProperty(Oe) && ct(e, t, Oe, null, o, K));
                for (Z in o)
                    if (((K = o[Z]), (J = l[Z]), o.hasOwnProperty(Z) && K !== J && (K != null || J != null)))
                        switch (Z) {
                            case 'children':
                            case 'dangerouslySetInnerHTML':
                                if (K != null) throw Error(a(137, t));
                                break;
                            default:
                                ct(e, t, Z, K, o, J);
                        }
                return;
            default:
                if (zf(t)) {
                    for (var ft in l)
                        ((K = l[ft]),
                            l.hasOwnProperty(ft) &&
                                K !== void 0 &&
                                !o.hasOwnProperty(ft) &&
                                yh(e, t, ft, void 0, o, K));
                    for (ie in o)
                        ((K = o[ie]),
                            (J = l[ie]),
                            !o.hasOwnProperty(ie) ||
                                K === J ||
                                (K === void 0 && J === void 0) ||
                                yh(e, t, ie, K, o, J));
                    return;
                }
        }
        for (var q in l)
            ((K = l[q]), l.hasOwnProperty(q) && K != null && !o.hasOwnProperty(q) && ct(e, t, q, null, o, K));
        for (oe in o)
            ((K = o[oe]),
                (J = l[oe]),
                !o.hasOwnProperty(oe) || K === J || (K == null && J == null) || ct(e, t, oe, K, o, J));
    }
    function c0(e) {
        switch (e) {
            case 'css':
            case 'script':
            case 'font':
            case 'img':
            case 'image':
            case 'input':
            case 'link':
                return !0;
            default:
                return !1;
        }
    }
    function AE() {
        if (typeof performance.getEntriesByType == 'function') {
            for (var e = 0, t = 0, l = performance.getEntriesByType('resource'), o = 0; o < l.length; o++) {
                var c = l[o],
                    h = c.transferSize,
                    _ = c.initiatorType,
                    w = c.duration;
                if (h && w && c0(_)) {
                    for (_ = 0, w = c.responseEnd, o += 1; o < l.length; o++) {
                        var N = l[o],
                            Z = N.startTime;
                        if (Z > w) break;
                        var ie = N.transferSize,
                            oe = N.initiatorType;
                        ie && c0(oe) && ((N = N.responseEnd), (_ += ie * (N < w ? 1 : (w - Z) / (N - Z))));
                    }
                    if ((--o, (t += (8 * (h + _)) / (c.duration / 1e3)), e++, 10 < e)) break;
                }
            }
            if (0 < e) return t / e / 1e6;
        }
        return navigator.connection && ((e = navigator.connection.downlink), typeof e == 'number') ? e : 5;
    }
    var _h = null,
        bh = null;
    function Wu(e) {
        return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function f0(e) {
        switch (e) {
            case 'http://www.w3.org/2000/svg':
                return 1;
            case 'http://www.w3.org/1998/Math/MathML':
                return 2;
            default:
                return 0;
        }
    }
    function d0(e, t) {
        if (e === 0)
            switch (t) {
                case 'svg':
                    return 1;
                case 'math':
                    return 2;
                default:
                    return 0;
            }
        return e === 1 && t === 'foreignObject' ? 0 : e;
    }
    function Sh(e, t) {
        return (
            e === 'textarea' ||
            e === 'noscript' ||
            typeof t.children == 'string' ||
            typeof t.children == 'number' ||
            typeof t.children == 'bigint' ||
            (typeof t.dangerouslySetInnerHTML == 'object' &&
                t.dangerouslySetInnerHTML !== null &&
                t.dangerouslySetInnerHTML.__html != null)
        );
    }
    var xh = null;
    function ME() {
        var e = window.event;
        return e && e.type === 'popstate' ? (e === xh ? !1 : ((xh = e), !0)) : ((xh = null), !1);
    }
    var h0 = typeof setTimeout == 'function' ? setTimeout : void 0,
        OE = typeof clearTimeout == 'function' ? clearTimeout : void 0,
        m0 = typeof Promise == 'function' ? Promise : void 0,
        CE =
            typeof queueMicrotask == 'function'
                ? queueMicrotask
                : typeof m0 < 'u'
                  ? function (e) {
                        return m0.resolve(null).then(e).catch(DE);
                    }
                  : h0;
    function DE(e) {
        setTimeout(function () {
            throw e;
        });
    }
    function Wl(e) {
        return e === 'head';
    }
    function p0(e, t) {
        var l = t,
            o = 0;
        do {
            var c = l.nextSibling;
            if ((e.removeChild(l), c && c.nodeType === 8))
                if (((l = c.data), l === '/$' || l === '/&')) {
                    if (o === 0) {
                        (e.removeChild(c), Ya(t));
                        return;
                    }
                    o--;
                } else if (l === '$' || l === '$?' || l === '$~' || l === '$!' || l === '&') o++;
                else if (l === 'html') is(e.ownerDocument.documentElement);
                else if (l === 'head') {
                    ((l = e.ownerDocument.head), is(l));
                    for (var h = l.firstChild; h; ) {
                        var _ = h.nextSibling,
                            w = h.nodeName;
                        (h[Ll] ||
                            w === 'SCRIPT' ||
                            w === 'STYLE' ||
                            (w === 'LINK' && h.rel.toLowerCase() === 'stylesheet') ||
                            l.removeChild(h),
                            (h = _));
                    }
                } else l === 'body' && is(e.ownerDocument.body);
            l = c;
        } while (l);
        Ya(t);
    }
    function g0(e, t) {
        var l = e;
        e = 0;
        do {
            var o = l.nextSibling;
            if (
                (l.nodeType === 1
                    ? t
                        ? ((l._stashedDisplay = l.style.display), (l.style.display = 'none'))
                        : ((l.style.display = l._stashedDisplay || ''),
                          l.getAttribute('style') === '' && l.removeAttribute('style'))
                    : l.nodeType === 3 &&
                      (t ? ((l._stashedText = l.nodeValue), (l.nodeValue = '')) : (l.nodeValue = l._stashedText || '')),
                o && o.nodeType === 8)
            )
                if (((l = o.data), l === '/$')) {
                    if (e === 0) break;
                    e--;
                } else (l !== '$' && l !== '$?' && l !== '$~' && l !== '$!') || e++;
            l = o;
        } while (l);
    }
    function wh(e) {
        var t = e.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
            var l = t;
            switch (((t = t.nextSibling), l.nodeName)) {
                case 'HTML':
                case 'HEAD':
                case 'BODY':
                    (wh(l), aa(l));
                    continue;
                case 'SCRIPT':
                case 'STYLE':
                    continue;
                case 'LINK':
                    if (l.rel.toLowerCase() === 'stylesheet') continue;
            }
            e.removeChild(l);
        }
    }
    function RE(e, t, l, o) {
        for (; e.nodeType === 1; ) {
            var c = l;
            if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!o && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
            } else if (o) {
                if (!e[Ll])
                    switch (t) {
                        case 'meta':
                            if (!e.hasAttribute('itemprop')) break;
                            return e;
                        case 'link':
                            if (((h = e.getAttribute('rel')), h === 'stylesheet' && e.hasAttribute('data-precedence')))
                                break;
                            if (
                                h !== c.rel ||
                                e.getAttribute('href') !== (c.href == null || c.href === '' ? null : c.href) ||
                                e.getAttribute('crossorigin') !== (c.crossOrigin == null ? null : c.crossOrigin) ||
                                e.getAttribute('title') !== (c.title == null ? null : c.title)
                            )
                                break;
                            return e;
                        case 'style':
                            if (e.hasAttribute('data-precedence')) break;
                            return e;
                        case 'script':
                            if (
                                ((h = e.getAttribute('src')),
                                (h !== (c.src == null ? null : c.src) ||
                                    e.getAttribute('type') !== (c.type == null ? null : c.type) ||
                                    e.getAttribute('crossorigin') !== (c.crossOrigin == null ? null : c.crossOrigin)) &&
                                    h &&
                                    e.hasAttribute('async') &&
                                    !e.hasAttribute('itemprop'))
                            )
                                break;
                            return e;
                        default:
                            return e;
                    }
            } else if (t === 'input' && e.type === 'hidden') {
                var h = c.name == null ? null : '' + c.name;
                if (c.type === 'hidden' && e.getAttribute('name') === h) return e;
            } else return e;
            if (((e = fi(e.nextSibling)), e === null)) break;
        }
        return null;
    }
    function zE(e, t, l) {
        if (t === '') return null;
        for (; e.nodeType !== 3; )
            if (
                ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !l) ||
                ((e = fi(e.nextSibling)), e === null)
            )
                return null;
        return e;
    }
    function v0(e, t) {
        for (; e.nodeType !== 8; )
            if (
                ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !t) ||
                ((e = fi(e.nextSibling)), e === null)
            )
                return null;
        return e;
    }
    function Eh(e) {
        return e.data === '$?' || e.data === '$~';
    }
    function Th(e) {
        return e.data === '$!' || (e.data === '$?' && e.ownerDocument.readyState !== 'loading');
    }
    function NE(e, t) {
        var l = e.ownerDocument;
        if (e.data === '$~') e._reactRetry = t;
        else if (e.data !== '$?' || l.readyState !== 'loading') t();
        else {
            var o = function () {
                (t(), l.removeEventListener('DOMContentLoaded', o));
            };
            (l.addEventListener('DOMContentLoaded', o), (e._reactRetry = o));
        }
    }
    function fi(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3) break;
            if (t === 8) {
                if (
                    ((t = e.data),
                    t === '$' || t === '$!' || t === '$?' || t === '$~' || t === '&' || t === 'F!' || t === 'F')
                )
                    break;
                if (t === '/$' || t === '/&') return null;
            }
        }
        return e;
    }
    var Ah = null;
    function y0(e) {
        e = e.nextSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var l = e.data;
                if (l === '/$' || l === '/&') {
                    if (t === 0) return fi(e.nextSibling);
                    t--;
                } else (l !== '$' && l !== '$!' && l !== '$?' && l !== '$~' && l !== '&') || t++;
            }
            e = e.nextSibling;
        }
        return null;
    }
    function _0(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var l = e.data;
                if (l === '$' || l === '$!' || l === '$?' || l === '$~' || l === '&') {
                    if (t === 0) return e;
                    t--;
                } else (l !== '/$' && l !== '/&') || t++;
            }
            e = e.previousSibling;
        }
        return null;
    }
    function b0(e, t, l) {
        switch (((t = Wu(l)), e)) {
            case 'html':
                if (((e = t.documentElement), !e)) throw Error(a(452));
                return e;
            case 'head':
                if (((e = t.head), !e)) throw Error(a(453));
                return e;
            case 'body':
                if (((e = t.body), !e)) throw Error(a(454));
                return e;
            default:
                throw Error(a(451));
        }
    }
    function is(e) {
        for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
        aa(e);
    }
    var di = new Map(),
        S0 = new Set();
    function ec(e) {
        return typeof e.getRootNode == 'function' ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
    }
    var vl = B.d;
    B.d = { f: LE, r: kE, D: UE, C: jE, L: BE, m: HE, X: GE, S: YE, M: XE };
    function LE() {
        var e = vl.f(),
            t = Pu();
        return e || t;
    }
    function kE(e) {
        var t = Wi(e);
        t !== null && t.tag === 5 && t.type === 'form' ? Bv(t) : vl.r(e);
    }
    var ja = typeof document > 'u' ? null : document;
    function x0(e, t, l) {
        var o = ja;
        if (o && typeof t == 'string' && t) {
            var c = li(t);
            ((c = 'link[rel="' + e + '"][href="' + c + '"]'),
                typeof l == 'string' && (c += '[crossorigin="' + l + '"]'),
                S0.has(c) ||
                    (S0.add(c),
                    (e = { rel: e, crossOrigin: l, href: t }),
                    o.querySelector(c) === null &&
                        ((t = o.createElement('link')), an(t, 'link', e), Ot(t), o.head.appendChild(t))));
        }
    }
    function UE(e) {
        (vl.D(e), x0('dns-prefetch', e, null));
    }
    function jE(e, t) {
        (vl.C(e, t), x0('preconnect', e, t));
    }
    function BE(e, t, l) {
        vl.L(e, t, l);
        var o = ja;
        if (o && e && t) {
            var c = 'link[rel="preload"][as="' + li(t) + '"]';
            t === 'image' && l && l.imageSrcSet
                ? ((c += '[imagesrcset="' + li(l.imageSrcSet) + '"]'),
                  typeof l.imageSizes == 'string' && (c += '[imagesizes="' + li(l.imageSizes) + '"]'))
                : (c += '[href="' + li(e) + '"]');
            var h = c;
            switch (t) {
                case 'style':
                    h = Ba(e);
                    break;
                case 'script':
                    h = Ha(e);
            }
            di.has(h) ||
                ((e = y({ rel: 'preload', href: t === 'image' && l && l.imageSrcSet ? void 0 : e, as: t }, l)),
                di.set(h, e),
                o.querySelector(c) !== null ||
                    (t === 'style' && o.querySelector(ls(h))) ||
                    (t === 'script' && o.querySelector(rs(h))) ||
                    ((t = o.createElement('link')), an(t, 'link', e), Ot(t), o.head.appendChild(t)));
        }
    }
    function HE(e, t) {
        vl.m(e, t);
        var l = ja;
        if (l && e) {
            var o = t && typeof t.as == 'string' ? t.as : 'script',
                c = 'link[rel="modulepreload"][as="' + li(o) + '"][href="' + li(e) + '"]',
                h = c;
            switch (o) {
                case 'audioworklet':
                case 'paintworklet':
                case 'serviceworker':
                case 'sharedworker':
                case 'worker':
                case 'script':
                    h = Ha(e);
            }
            if (
                !di.has(h) &&
                ((e = y({ rel: 'modulepreload', href: e }, t)), di.set(h, e), l.querySelector(c) === null)
            ) {
                switch (o) {
                    case 'audioworklet':
                    case 'paintworklet':
                    case 'serviceworker':
                    case 'sharedworker':
                    case 'worker':
                    case 'script':
                        if (l.querySelector(rs(h))) return;
                }
                ((o = l.createElement('link')), an(o, 'link', e), Ot(o), l.head.appendChild(o));
            }
        }
    }
    function YE(e, t, l) {
        vl.S(e, t, l);
        var o = ja;
        if (o && e) {
            var c = hn(o).hoistableStyles,
                h = Ba(e);
            t = t || 'default';
            var _ = c.get(h);
            if (!_) {
                var w = { loading: 0, preload: null };
                if ((_ = o.querySelector(ls(h)))) w.loading = 5;
                else {
                    ((e = y({ rel: 'stylesheet', href: e, 'data-precedence': t }, l)), (l = di.get(h)) && Mh(e, l));
                    var N = (_ = o.createElement('link'));
                    (Ot(N),
                        an(N, 'link', e),
                        (N._p = new Promise(function (Z, ie) {
                            ((N.onload = Z), (N.onerror = ie));
                        })),
                        N.addEventListener('load', function () {
                            w.loading |= 1;
                        }),
                        N.addEventListener('error', function () {
                            w.loading |= 2;
                        }),
                        (w.loading |= 4),
                        tc(_, t, o));
                }
                ((_ = { type: 'stylesheet', instance: _, count: 1, state: w }), c.set(h, _));
            }
        }
    }
    function GE(e, t) {
        vl.X(e, t);
        var l = ja;
        if (l && e) {
            var o = hn(l).hoistableScripts,
                c = Ha(e),
                h = o.get(c);
            h ||
                ((h = l.querySelector(rs(c))),
                h ||
                    ((e = y({ src: e, async: !0 }, t)),
                    (t = di.get(c)) && Oh(e, t),
                    (h = l.createElement('script')),
                    Ot(h),
                    an(h, 'link', e),
                    l.head.appendChild(h)),
                (h = { type: 'script', instance: h, count: 1, state: null }),
                o.set(c, h));
        }
    }
    function XE(e, t) {
        vl.M(e, t);
        var l = ja;
        if (l && e) {
            var o = hn(l).hoistableScripts,
                c = Ha(e),
                h = o.get(c);
            h ||
                ((h = l.querySelector(rs(c))),
                h ||
                    ((e = y({ src: e, async: !0, type: 'module' }, t)),
                    (t = di.get(c)) && Oh(e, t),
                    (h = l.createElement('script')),
                    Ot(h),
                    an(h, 'link', e),
                    l.head.appendChild(h)),
                (h = { type: 'script', instance: h, count: 1, state: null }),
                o.set(c, h));
        }
    }
    function w0(e, t, l, o) {
        var c = (c = ye.current) ? ec(c) : null;
        if (!c) throw Error(a(446));
        switch (e) {
            case 'meta':
            case 'title':
                return null;
            case 'style':
                return typeof l.precedence == 'string' && typeof l.href == 'string'
                    ? ((t = Ba(l.href)),
                      (l = hn(c).hoistableStyles),
                      (o = l.get(t)),
                      o || ((o = { type: 'style', instance: null, count: 0, state: null }), l.set(t, o)),
                      o)
                    : { type: 'void', instance: null, count: 0, state: null };
            case 'link':
                if (l.rel === 'stylesheet' && typeof l.href == 'string' && typeof l.precedence == 'string') {
                    e = Ba(l.href);
                    var h = hn(c).hoistableStyles,
                        _ = h.get(e);
                    if (
                        (_ ||
                            ((c = c.ownerDocument || c),
                            (_ = {
                                type: 'stylesheet',
                                instance: null,
                                count: 0,
                                state: { loading: 0, preload: null },
                            }),
                            h.set(e, _),
                            (h = c.querySelector(ls(e))) && !h._p && ((_.instance = h), (_.state.loading = 5)),
                            di.has(e) ||
                                ((l = {
                                    rel: 'preload',
                                    as: 'style',
                                    href: l.href,
                                    crossOrigin: l.crossOrigin,
                                    integrity: l.integrity,
                                    media: l.media,
                                    hrefLang: l.hrefLang,
                                    referrerPolicy: l.referrerPolicy,
                                }),
                                di.set(e, l),
                                h || qE(c, e, l, _.state))),
                        t && o === null)
                    )
                        throw Error(a(528, ''));
                    return _;
                }
                if (t && o !== null) throw Error(a(529, ''));
                return null;
            case 'script':
                return (
                    (t = l.async),
                    (l = l.src),
                    typeof l == 'string' && t && typeof t != 'function' && typeof t != 'symbol'
                        ? ((t = Ha(l)),
                          (l = hn(c).hoistableScripts),
                          (o = l.get(t)),
                          o || ((o = { type: 'script', instance: null, count: 0, state: null }), l.set(t, o)),
                          o)
                        : { type: 'void', instance: null, count: 0, state: null }
                );
            default:
                throw Error(a(444, e));
        }
    }
    function Ba(e) {
        return 'href="' + li(e) + '"';
    }
    function ls(e) {
        return 'link[rel="stylesheet"][' + e + ']';
    }
    function E0(e) {
        return y({}, e, { 'data-precedence': e.precedence, precedence: null });
    }
    function qE(e, t, l, o) {
        e.querySelector('link[rel="preload"][as="style"][' + t + ']')
            ? (o.loading = 1)
            : ((t = e.createElement('link')),
              (o.preload = t),
              t.addEventListener('load', function () {
                  return (o.loading |= 1);
              }),
              t.addEventListener('error', function () {
                  return (o.loading |= 2);
              }),
              an(t, 'link', l),
              Ot(t),
              e.head.appendChild(t));
    }
    function Ha(e) {
        return '[src="' + li(e) + '"]';
    }
    function rs(e) {
        return 'script[async]' + e;
    }
    function T0(e, t, l) {
        if ((t.count++, t.instance === null))
            switch (t.type) {
                case 'style':
                    var o = e.querySelector('style[data-href~="' + li(l.href) + '"]');
                    if (o) return ((t.instance = o), Ot(o), o);
                    var c = y({}, l, {
                        'data-href': l.href,
                        'data-precedence': l.precedence,
                        href: null,
                        precedence: null,
                    });
                    return (
                        (o = (e.ownerDocument || e).createElement('style')),
                        Ot(o),
                        an(o, 'style', c),
                        tc(o, l.precedence, e),
                        (t.instance = o)
                    );
                case 'stylesheet':
                    c = Ba(l.href);
                    var h = e.querySelector(ls(c));
                    if (h) return ((t.state.loading |= 4), (t.instance = h), Ot(h), h);
                    ((o = E0(l)),
                        (c = di.get(c)) && Mh(o, c),
                        (h = (e.ownerDocument || e).createElement('link')),
                        Ot(h));
                    var _ = h;
                    return (
                        (_._p = new Promise(function (w, N) {
                            ((_.onload = w), (_.onerror = N));
                        })),
                        an(h, 'link', o),
                        (t.state.loading |= 4),
                        tc(h, l.precedence, e),
                        (t.instance = h)
                    );
                case 'script':
                    return (
                        (h = Ha(l.src)),
                        (c = e.querySelector(rs(h)))
                            ? ((t.instance = c), Ot(c), c)
                            : ((o = l),
                              (c = di.get(h)) && ((o = y({}, l)), Oh(o, c)),
                              (e = e.ownerDocument || e),
                              (c = e.createElement('script')),
                              Ot(c),
                              an(c, 'link', o),
                              e.head.appendChild(c),
                              (t.instance = c))
                    );
                case 'void':
                    return null;
                default:
                    throw Error(a(443, t.type));
            }
        else
            t.type === 'stylesheet' &&
                (t.state.loading & 4) === 0 &&
                ((o = t.instance), (t.state.loading |= 4), tc(o, l.precedence, e));
        return t.instance;
    }
    function tc(e, t, l) {
        for (
            var o = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
                c = o.length ? o[o.length - 1] : null,
                h = c,
                _ = 0;
            _ < o.length;
            _++
        ) {
            var w = o[_];
            if (w.dataset.precedence === t) h = w;
            else if (h !== c) break;
        }
        h
            ? h.parentNode.insertBefore(e, h.nextSibling)
            : ((t = l.nodeType === 9 ? l.head : l), t.insertBefore(e, t.firstChild));
    }
    function Mh(e, t) {
        (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
            e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
            e.title == null && (e.title = t.title));
    }
    function Oh(e, t) {
        (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
            e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
            e.integrity == null && (e.integrity = t.integrity));
    }
    var nc = null;
    function A0(e, t, l) {
        if (nc === null) {
            var o = new Map(),
                c = (nc = new Map());
            c.set(l, o);
        } else ((c = nc), (o = c.get(l)), o || ((o = new Map()), c.set(l, o)));
        if (o.has(e)) return o;
        for (o.set(e, null), l = l.getElementsByTagName(e), c = 0; c < l.length; c++) {
            var h = l[c];
            if (
                !(h[Ll] || h[ze] || (e === 'link' && h.getAttribute('rel') === 'stylesheet')) &&
                h.namespaceURI !== 'http://www.w3.org/2000/svg'
            ) {
                var _ = h.getAttribute(t) || '';
                _ = e + _;
                var w = o.get(_);
                w ? w.push(h) : o.set(_, [h]);
            }
        }
        return o;
    }
    function M0(e, t, l) {
        ((e = e.ownerDocument || e), e.head.insertBefore(l, t === 'title' ? e.querySelector('head > title') : null));
    }
    function VE(e, t, l) {
        if (l === 1 || t.itemProp != null) return !1;
        switch (e) {
            case 'meta':
            case 'title':
                return !0;
            case 'style':
                if (typeof t.precedence != 'string' || typeof t.href != 'string' || t.href === '') break;
                return !0;
            case 'link':
                if (typeof t.rel != 'string' || typeof t.href != 'string' || t.href === '' || t.onLoad || t.onError)
                    break;
                switch (t.rel) {
                    case 'stylesheet':
                        return ((e = t.disabled), typeof t.precedence == 'string' && e == null);
                    default:
                        return !0;
                }
            case 'script':
                if (
                    t.async &&
                    typeof t.async != 'function' &&
                    typeof t.async != 'symbol' &&
                    !t.onLoad &&
                    !t.onError &&
                    t.src &&
                    typeof t.src == 'string'
                )
                    return !0;
        }
        return !1;
    }
    function O0(e) {
        return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0);
    }
    function PE(e, t, l, o) {
        if (
            l.type === 'stylesheet' &&
            (typeof o.media != 'string' || matchMedia(o.media).matches !== !1) &&
            (l.state.loading & 4) === 0
        ) {
            if (l.instance === null) {
                var c = Ba(o.href),
                    h = t.querySelector(ls(c));
                if (h) {
                    ((t = h._p),
                        t !== null &&
                            typeof t == 'object' &&
                            typeof t.then == 'function' &&
                            (e.count++, (e = ic.bind(e)), t.then(e, e)),
                        (l.state.loading |= 4),
                        (l.instance = h),
                        Ot(h));
                    return;
                }
                ((h = t.ownerDocument || t),
                    (o = E0(o)),
                    (c = di.get(c)) && Mh(o, c),
                    (h = h.createElement('link')),
                    Ot(h));
                var _ = h;
                ((_._p = new Promise(function (w, N) {
                    ((_.onload = w), (_.onerror = N));
                })),
                    an(h, 'link', o),
                    (l.instance = h));
            }
            (e.stylesheets === null && (e.stylesheets = new Map()),
                e.stylesheets.set(l, t),
                (t = l.state.preload) &&
                    (l.state.loading & 3) === 0 &&
                    (e.count++, (l = ic.bind(e)), t.addEventListener('load', l), t.addEventListener('error', l)));
        }
    }
    var Ch = 0;
    function QE(e, t) {
        return (
            e.stylesheets && e.count === 0 && rc(e, e.stylesheets),
            0 < e.count || 0 < e.imgCount
                ? function (l) {
                      var o = setTimeout(function () {
                          if ((e.stylesheets && rc(e, e.stylesheets), e.unsuspend)) {
                              var h = e.unsuspend;
                              ((e.unsuspend = null), h());
                          }
                      }, 6e4 + t);
                      0 < e.imgBytes && Ch === 0 && (Ch = 62500 * AE());
                      var c = setTimeout(
                          function () {
                              if (
                                  ((e.waitingForImages = !1),
                                  e.count === 0 && (e.stylesheets && rc(e, e.stylesheets), e.unsuspend))
                              ) {
                                  var h = e.unsuspend;
                                  ((e.unsuspend = null), h());
                              }
                          },
                          (e.imgBytes > Ch ? 50 : 800) + t,
                      );
                      return (
                          (e.unsuspend = l),
                          function () {
                              ((e.unsuspend = null), clearTimeout(o), clearTimeout(c));
                          }
                      );
                  }
                : null
        );
    }
    function ic() {
        if ((this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))) {
            if (this.stylesheets) rc(this, this.stylesheets);
            else if (this.unsuspend) {
                var e = this.unsuspend;
                ((this.unsuspend = null), e());
            }
        }
    }
    var lc = null;
    function rc(e, t) {
        ((e.stylesheets = null),
            e.unsuspend !== null && (e.count++, (lc = new Map()), t.forEach(ZE, e), (lc = null), ic.call(e)));
    }
    function ZE(e, t) {
        if (!(t.state.loading & 4)) {
            var l = lc.get(e);
            if (l) var o = l.get(null);
            else {
                ((l = new Map()), lc.set(e, l));
                for (
                    var c = e.querySelectorAll('link[data-precedence],style[data-precedence]'), h = 0;
                    h < c.length;
                    h++
                ) {
                    var _ = c[h];
                    (_.nodeName === 'LINK' || _.getAttribute('media') !== 'not all') &&
                        (l.set(_.dataset.precedence, _), (o = _));
                }
                o && l.set(null, o);
            }
            ((c = t.instance),
                (_ = c.getAttribute('data-precedence')),
                (h = l.get(_) || o),
                h === o && l.set(null, c),
                l.set(_, c),
                this.count++,
                (o = ic.bind(this)),
                c.addEventListener('load', o),
                c.addEventListener('error', o),
                h
                    ? h.parentNode.insertBefore(c, h.nextSibling)
                    : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(c, e.firstChild)),
                (t.state.loading |= 4));
        }
    }
    var as = { $$typeof: D, Provider: null, Consumer: null, _currentValue: R, _currentValue2: R, _threadCount: 0 };
    function KE(e, t, l, o, c, h, _, w, N) {
        ((this.tag = 1),
            (this.containerInfo = e),
            (this.pingCache = this.current = this.pendingChildren = null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null),
            (this.callbackPriority = 0),
            (this.expirationTimes = G(-1)),
            (this.entangledLanes =
                this.shellSuspendCounter =
                this.errorRecoveryDisabledLanes =
                this.expiredLanes =
                this.warmLanes =
                this.pingedLanes =
                this.suspendedLanes =
                this.pendingLanes =
                    0),
            (this.entanglements = G(0)),
            (this.hiddenUpdates = G(null)),
            (this.identifierPrefix = o),
            (this.onUncaughtError = c),
            (this.onCaughtError = h),
            (this.onRecoverableError = _),
            (this.pooledCache = null),
            (this.pooledCacheLanes = 0),
            (this.formState = N),
            (this.incompleteTransitions = new Map()));
    }
    function C0(e, t, l, o, c, h, _, w, N, Z, ie, oe) {
        return (
            (e = new KE(e, t, l, _, N, Z, ie, oe, w)),
            (t = 1),
            h === !0 && (t |= 24),
            (h = Yn(3, null, null, t)),
            (e.current = h),
            (h.stateNode = e),
            (t = sd()),
            t.refCount++,
            (e.pooledCache = t),
            t.refCount++,
            (h.memoizedState = { element: o, isDehydrated: l, cache: t }),
            dd(h),
            e
        );
    }
    function D0(e) {
        return e ? ((e = ga), e) : ga;
    }
    function R0(e, t, l, o, c, h) {
        ((c = D0(c)),
            o.context === null ? (o.context = c) : (o.pendingContext = c),
            (o = Xl(t)),
            (o.payload = { element: l }),
            (h = h === void 0 ? null : h),
            h !== null && (o.callback = h),
            (l = ql(e, o, t)),
            l !== null && (Dn(l, e, t), Bo(l, e, t)));
    }
    function z0(e, t) {
        if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
            var l = e.retryLane;
            e.retryLane = l !== 0 && l < t ? l : t;
        }
    }
    function Dh(e, t) {
        (z0(e, t), (e = e.alternate) && z0(e, t));
    }
    function N0(e) {
        if (e.tag === 13 || e.tag === 31) {
            var t = Mr(e, 67108864);
            (t !== null && Dn(t, e, 67108864), Dh(e, 67108864));
        }
    }
    function L0(e) {
        if (e.tag === 13 || e.tag === 31) {
            var t = Pn();
            t = pe(t);
            var l = Mr(e, t);
            (l !== null && Dn(l, e, t), Dh(e, t));
        }
    }
    var ac = !0;
    function $E(e, t, l, o) {
        var c = A.T;
        A.T = null;
        var h = B.p;
        try {
            ((B.p = 2), Rh(e, t, l, o));
        } finally {
            ((B.p = h), (A.T = c));
        }
    }
    function FE(e, t, l, o) {
        var c = A.T;
        A.T = null;
        var h = B.p;
        try {
            ((B.p = 8), Rh(e, t, l, o));
        } finally {
            ((B.p = h), (A.T = c));
        }
    }
    function Rh(e, t, l, o) {
        if (ac) {
            var c = zh(o);
            if (c === null) (vh(e, t, o, oc, l), U0(e, o));
            else if (JE(c, e, t, l, o)) o.stopPropagation();
            else if ((U0(e, o), t & 4 && -1 < IE.indexOf(e))) {
                for (; c !== null; ) {
                    var h = Wi(c);
                    if (h !== null)
                        switch (h.tag) {
                            case 3:
                                if (((h = h.stateNode), h.current.memoizedState.isDehydrated)) {
                                    var _ = en(h.pendingLanes);
                                    if (_ !== 0) {
                                        var w = h;
                                        for (w.pendingLanes |= 2, w.entangledLanes |= 2; _; ) {
                                            var N = 1 << (31 - Ie(_));
                                            ((w.entanglements[1] |= N), (_ &= ~N));
                                        }
                                        (ji(h), (it & 6) === 0 && ((qu = vt() + 500), es(0)));
                                    }
                                }
                                break;
                            case 31:
                            case 13:
                                ((w = Mr(h, 2)), w !== null && Dn(w, h, 2), Pu(), Dh(h, 2));
                        }
                    if (((h = zh(o)), h === null && vh(e, t, o, oc, l), h === c)) break;
                    c = h;
                }
                c !== null && o.stopPropagation();
            } else vh(e, t, o, null, l);
        }
    }
    function zh(e) {
        return ((e = Lf(e)), Nh(e));
    }
    var oc = null;
    function Nh(e) {
        if (((oc = null), (e = Ji(e)), e !== null)) {
            var t = u(e);
            if (t === null) e = null;
            else {
                var l = t.tag;
                if (l === 13) {
                    if (((e = f(t)), e !== null)) return e;
                    e = null;
                } else if (l === 31) {
                    if (((e = d(t)), e !== null)) return e;
                    e = null;
                } else if (l === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated)
                        return t.tag === 3 ? t.stateNode.containerInfo : null;
                    e = null;
                } else t !== e && (e = null);
            }
        }
        return ((oc = e), null);
    }
    function k0(e) {
        switch (e) {
            case 'beforetoggle':
            case 'cancel':
            case 'click':
            case 'close':
            case 'contextmenu':
            case 'copy':
            case 'cut':
            case 'auxclick':
            case 'dblclick':
            case 'dragend':
            case 'dragstart':
            case 'drop':
            case 'focusin':
            case 'focusout':
            case 'input':
            case 'invalid':
            case 'keydown':
            case 'keypress':
            case 'keyup':
            case 'mousedown':
            case 'mouseup':
            case 'paste':
            case 'pause':
            case 'play':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointerup':
            case 'ratechange':
            case 'reset':
            case 'resize':
            case 'seeked':
            case 'submit':
            case 'toggle':
            case 'touchcancel':
            case 'touchend':
            case 'touchstart':
            case 'volumechange':
            case 'change':
            case 'selectionchange':
            case 'textInput':
            case 'compositionstart':
            case 'compositionend':
            case 'compositionupdate':
            case 'beforeblur':
            case 'afterblur':
            case 'beforeinput':
            case 'blur':
            case 'fullscreenchange':
            case 'focus':
            case 'hashchange':
            case 'popstate':
            case 'select':
            case 'selectstart':
                return 2;
            case 'drag':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'mousemove':
            case 'mouseout':
            case 'mouseover':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'scroll':
            case 'touchmove':
            case 'wheel':
            case 'mouseenter':
            case 'mouseleave':
            case 'pointerenter':
            case 'pointerleave':
                return 8;
            case 'message':
                switch ($i()) {
                    case Pt:
                        return 2;
                    case un:
                        return 8;
                    case Wt:
                    case Fi:
                        return 32;
                    case En:
                        return 268435456;
                    default:
                        return 32;
                }
            default:
                return 32;
        }
    }
    var Lh = !1,
        er = null,
        tr = null,
        nr = null,
        os = new Map(),
        ss = new Map(),
        ir = [],
        IE =
            'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
                ' ',
            );
    function U0(e, t) {
        switch (e) {
            case 'focusin':
            case 'focusout':
                er = null;
                break;
            case 'dragenter':
            case 'dragleave':
                tr = null;
                break;
            case 'mouseover':
            case 'mouseout':
                nr = null;
                break;
            case 'pointerover':
            case 'pointerout':
                os.delete(t.pointerId);
                break;
            case 'gotpointercapture':
            case 'lostpointercapture':
                ss.delete(t.pointerId);
        }
    }
    function us(e, t, l, o, c, h) {
        return e === null || e.nativeEvent !== h
            ? ((e = { blockedOn: t, domEventName: l, eventSystemFlags: o, nativeEvent: h, targetContainers: [c] }),
              t !== null && ((t = Wi(t)), t !== null && N0(t)),
              e)
            : ((e.eventSystemFlags |= o), (t = e.targetContainers), c !== null && t.indexOf(c) === -1 && t.push(c), e);
    }
    function JE(e, t, l, o, c) {
        switch (t) {
            case 'focusin':
                return ((er = us(er, e, t, l, o, c)), !0);
            case 'dragenter':
                return ((tr = us(tr, e, t, l, o, c)), !0);
            case 'mouseover':
                return ((nr = us(nr, e, t, l, o, c)), !0);
            case 'pointerover':
                var h = c.pointerId;
                return (os.set(h, us(os.get(h) || null, e, t, l, o, c)), !0);
            case 'gotpointercapture':
                return ((h = c.pointerId), ss.set(h, us(ss.get(h) || null, e, t, l, o, c)), !0);
        }
        return !1;
    }
    function j0(e) {
        var t = Ji(e.target);
        if (t !== null) {
            var l = u(t);
            if (l !== null) {
                if (((t = l.tag), t === 13)) {
                    if (((t = f(l)), t !== null)) {
                        ((e.blockedOn = t),
                            Qe(e.priority, function () {
                                L0(l);
                            }));
                        return;
                    }
                } else if (t === 31) {
                    if (((t = d(l)), t !== null)) {
                        ((e.blockedOn = t),
                            Qe(e.priority, function () {
                                L0(l);
                            }));
                        return;
                    }
                } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
                    return;
                }
            }
        }
        e.blockedOn = null;
    }
    function sc(e) {
        if (e.blockedOn !== null) return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
            var l = zh(e.nativeEvent);
            if (l === null) {
                l = e.nativeEvent;
                var o = new l.constructor(l.type, l);
                ((Nf = o), l.target.dispatchEvent(o), (Nf = null));
            } else return ((t = Wi(l)), t !== null && N0(t), (e.blockedOn = l), !1);
            t.shift();
        }
        return !0;
    }
    function B0(e, t, l) {
        sc(e) && l.delete(t);
    }
    function WE() {
        ((Lh = !1),
            er !== null && sc(er) && (er = null),
            tr !== null && sc(tr) && (tr = null),
            nr !== null && sc(nr) && (nr = null),
            os.forEach(B0),
            ss.forEach(B0));
    }
    function uc(e, t) {
        e.blockedOn === t &&
            ((e.blockedOn = null), Lh || ((Lh = !0), i.unstable_scheduleCallback(i.unstable_NormalPriority, WE)));
    }
    var cc = null;
    function H0(e) {
        cc !== e &&
            ((cc = e),
            i.unstable_scheduleCallback(i.unstable_NormalPriority, function () {
                cc === e && (cc = null);
                for (var t = 0; t < e.length; t += 3) {
                    var l = e[t],
                        o = e[t + 1],
                        c = e[t + 2];
                    if (typeof o != 'function') {
                        if (Nh(o || l) === null) continue;
                        break;
                    }
                    var h = Wi(l);
                    h !== null &&
                        (e.splice(t, 3), (t -= 3), zd(h, { pending: !0, data: c, method: l.method, action: o }, o, c));
                }
            }));
    }
    function Ya(e) {
        function t(N) {
            return uc(N, e);
        }
        (er !== null && uc(er, e), tr !== null && uc(tr, e), nr !== null && uc(nr, e), os.forEach(t), ss.forEach(t));
        for (var l = 0; l < ir.length; l++) {
            var o = ir[l];
            o.blockedOn === e && (o.blockedOn = null);
        }
        for (; 0 < ir.length && ((l = ir[0]), l.blockedOn === null); ) (j0(l), l.blockedOn === null && ir.shift());
        if (((l = (e.ownerDocument || e).$$reactFormReplay), l != null))
            for (o = 0; o < l.length; o += 3) {
                var c = l[o],
                    h = l[o + 1],
                    _ = c[Ue] || null;
                if (typeof h == 'function') _ || H0(l);
                else if (_) {
                    var w = null;
                    if (h && h.hasAttribute('formAction')) {
                        if (((c = h), (_ = h[Ue] || null))) w = _.formAction;
                        else if (Nh(c) !== null) continue;
                    } else w = _.action;
                    (typeof w == 'function' ? (l[o + 1] = w) : (l.splice(o, 3), (o -= 3)), H0(l));
                }
            }
    }
    function Y0() {
        function e(h) {
            h.canIntercept &&
                h.info === 'react-transition' &&
                h.intercept({
                    handler: function () {
                        return new Promise(function (_) {
                            return (c = _);
                        });
                    },
                    focusReset: 'manual',
                    scroll: 'manual',
                });
        }
        function t() {
            (c !== null && (c(), (c = null)), o || setTimeout(l, 20));
        }
        function l() {
            if (!o && !navigation.transition) {
                var h = navigation.currentEntry;
                h &&
                    h.url != null &&
                    navigation.navigate(h.url, { state: h.getState(), info: 'react-transition', history: 'replace' });
            }
        }
        if (typeof navigation == 'object') {
            var o = !1,
                c = null;
            return (
                navigation.addEventListener('navigate', e),
                navigation.addEventListener('navigatesuccess', t),
                navigation.addEventListener('navigateerror', t),
                setTimeout(l, 100),
                function () {
                    ((o = !0),
                        navigation.removeEventListener('navigate', e),
                        navigation.removeEventListener('navigatesuccess', t),
                        navigation.removeEventListener('navigateerror', t),
                        c !== null && (c(), (c = null)));
                }
            );
        }
    }
    function kh(e) {
        this._internalRoot = e;
    }
    ((fc.prototype.render = kh.prototype.render =
        function (e) {
            var t = this._internalRoot;
            if (t === null) throw Error(a(409));
            var l = t.current,
                o = Pn();
            R0(l, o, e, t, null, null);
        }),
        (fc.prototype.unmount = kh.prototype.unmount =
            function () {
                var e = this._internalRoot;
                if (e !== null) {
                    this._internalRoot = null;
                    var t = e.containerInfo;
                    (R0(e.current, 2, null, e, null, null), Pu(), (t[je] = null));
                }
            }));
    function fc(e) {
        this._internalRoot = e;
    }
    fc.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
            var t = Ce();
            e = { blockedOn: null, target: e, priority: t };
            for (var l = 0; l < ir.length && t !== 0 && t < ir[l].priority; l++);
            (ir.splice(l, 0, e), l === 0 && j0(e));
        }
    };
    var G0 = n.version;
    if (G0 !== '19.2.0') throw Error(a(527, G0, '19.2.0'));
    B.findDOMNode = function (e) {
        var t = e._reactInternals;
        if (t === void 0)
            throw typeof e.render == 'function' ? Error(a(188)) : ((e = Object.keys(e).join(',')), Error(a(268, e)));
        return ((e = m(t)), (e = e !== null ? v(e) : null), (e = e === null ? null : e.stateNode), e);
    };
    var eT = {
        bundleType: 0,
        version: '19.2.0',
        rendererPackageName: 'react-dom',
        currentDispatcherRef: A,
        reconcilerVersion: '19.2.0',
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
        var dc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!dc.isDisabled && dc.supportsFiber)
            try {
                ((vn = dc.inject(eT)), (bt = dc));
            } catch {}
    }
    return (
        (fs.createRoot = function (e, t) {
            if (!s(e)) throw Error(a(299));
            var l = !1,
                o = '',
                c = Kv,
                h = $v,
                _ = Fv;
            return (
                t != null &&
                    (t.unstable_strictMode === !0 && (l = !0),
                    t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
                    t.onUncaughtError !== void 0 && (c = t.onUncaughtError),
                    t.onCaughtError !== void 0 && (h = t.onCaughtError),
                    t.onRecoverableError !== void 0 && (_ = t.onRecoverableError)),
                (t = C0(e, 1, !1, null, null, l, o, null, c, h, _, Y0)),
                (e[je] = t.current),
                gh(e),
                new kh(t)
            );
        }),
        (fs.hydrateRoot = function (e, t, l) {
            if (!s(e)) throw Error(a(299));
            var o = !1,
                c = '',
                h = Kv,
                _ = $v,
                w = Fv,
                N = null;
            return (
                l != null &&
                    (l.unstable_strictMode === !0 && (o = !0),
                    l.identifierPrefix !== void 0 && (c = l.identifierPrefix),
                    l.onUncaughtError !== void 0 && (h = l.onUncaughtError),
                    l.onCaughtError !== void 0 && (_ = l.onCaughtError),
                    l.onRecoverableError !== void 0 && (w = l.onRecoverableError),
                    l.formState !== void 0 && (N = l.formState)),
                (t = C0(e, 1, !0, t, l ?? null, o, c, N, h, _, w, Y0)),
                (t.context = D0(null)),
                (l = t.current),
                (o = Pn()),
                (o = pe(o)),
                (c = Xl(o)),
                (c.callback = null),
                ql(l, c, o),
                (l = o),
                (t.current.lanes = l),
                te(t, l),
                ji(t),
                (e[je] = t.current),
                gh(e),
                new fc(t)
            );
        }),
        (fs.version = '19.2.0'),
        fs
    );
}
var I0;
function cT() {
    if (I0) return Bh.exports;
    I0 = 1;
    function i() {
        if (
            !(
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
            )
        )
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
            } catch (n) {
                console.error(n);
            }
    }
    return (i(), (Bh.exports = uT()), Bh.exports);
}
var fT = cT(),
    dT = (i, n, r, a, s, u, f, d) => {
        let p = document.documentElement,
            m = ['light', 'dark'];
        function v(g) {
            ((Array.isArray(i) ? i : [i]).forEach(x => {
                let b = x === 'class',
                    T = b && u ? s.map(O => u[O] || O) : s;
                b ? (p.classList.remove(...T), p.classList.add(u && u[g] ? u[g] : g)) : p.setAttribute(x, g);
            }),
                y(g));
        }
        function y(g) {
            d && m.includes(g) && (p.style.colorScheme = g);
        }
        function S() {
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        if (a) v(a);
        else
            try {
                let g = localStorage.getItem(n) || r,
                    x = f && g === 'system' ? S() : g;
                v(x);
            } catch {}
    },
    J0 = ['light', 'dark'],
    Rb = '(prefers-color-scheme: dark)',
    hT = typeof window > 'u',
    fp = E.createContext(void 0),
    mT = { setTheme: i => {}, themes: [] },
    pT = () => {
        var i;
        return (i = E.useContext(fp)) != null ? i : mT;
    },
    gT = i => (E.useContext(fp) ? E.createElement(E.Fragment, null, i.children) : E.createElement(yT, { ...i })),
    vT = ['light', 'dark'],
    yT = ({
        forcedTheme: i,
        disableTransitionOnChange: n = !1,
        enableSystem: r = !0,
        enableColorScheme: a = !0,
        storageKey: s = 'theme',
        themes: u = vT,
        defaultTheme: f = r ? 'system' : 'light',
        attribute: d = 'data-theme',
        value: p,
        children: m,
        nonce: v,
        scriptProps: y,
    }) => {
        let [S, g] = E.useState(() => bT(s, f)),
            [x, b] = E.useState(() => (S === 'system' ? Xh() : S)),
            T = p ? Object.values(p) : u,
            O = E.useCallback(
                C => {
                    let X = C;
                    if (!X) return;
                    C === 'system' && r && (X = Xh());
                    let z = p ? p[X] : X,
                        U = n ? ST(v) : null,
                        P = document.documentElement,
                        se = W => {
                            W === 'class'
                                ? (P.classList.remove(...T), z && P.classList.add(z))
                                : W.startsWith('data-') && (z ? P.setAttribute(W, z) : P.removeAttribute(W));
                        };
                    if ((Array.isArray(d) ? d.forEach(se) : se(d), a)) {
                        let W = J0.includes(f) ? f : null,
                            de = J0.includes(X) ? X : W;
                        P.style.colorScheme = de;
                    }
                    U?.();
                },
                [v],
            ),
            L = E.useCallback(
                C => {
                    let X = typeof C == 'function' ? C(S) : C;
                    g(X);
                    try {
                        localStorage.setItem(s, X);
                    } catch {}
                },
                [S],
            ),
            D = E.useCallback(
                C => {
                    let X = Xh(C);
                    (b(X), S === 'system' && r && !i && O('system'));
                },
                [S, i],
            );
        (E.useEffect(() => {
            let C = window.matchMedia(Rb);
            return (C.addListener(D), D(C), () => C.removeListener(D));
        }, [D]),
            E.useEffect(() => {
                let C = X => {
                    X.key === s && (X.newValue ? g(X.newValue) : L(f));
                };
                return (window.addEventListener('storage', C), () => window.removeEventListener('storage', C));
            }, [L]),
            E.useEffect(() => {
                O(i ?? S);
            }, [i, S]));
        let k = E.useMemo(
            () => ({
                theme: S,
                setTheme: L,
                forcedTheme: i,
                resolvedTheme: S === 'system' ? x : S,
                themes: r ? [...u, 'system'] : u,
                systemTheme: r ? x : void 0,
            }),
            [S, L, i, x, r, u],
        );
        return E.createElement(
            fp.Provider,
            { value: k },
            E.createElement(_T, {
                forcedTheme: i,
                storageKey: s,
                attribute: d,
                enableSystem: r,
                enableColorScheme: a,
                defaultTheme: f,
                value: p,
                themes: u,
                nonce: v,
                scriptProps: y,
            }),
            m,
        );
    },
    _T = E.memo(
        ({
            forcedTheme: i,
            storageKey: n,
            attribute: r,
            enableSystem: a,
            enableColorScheme: s,
            defaultTheme: u,
            value: f,
            themes: d,
            nonce: p,
            scriptProps: m,
        }) => {
            let v = JSON.stringify([r, n, u, i, d, f, a, s]).slice(1, -1);
            return E.createElement('script', {
                ...m,
                suppressHydrationWarning: !0,
                nonce: typeof window > 'u' ? p : '',
                dangerouslySetInnerHTML: { __html: `(${dT.toString()})(${v})` },
            });
        },
    ),
    bT = (i, n) => {
        if (hT) return;
        let r;
        try {
            r = localStorage.getItem(i) || void 0;
        } catch {}
        return r || n;
    },
    ST = i => {
        let n = document.createElement('style');
        return (
            i && n.setAttribute('nonce', i),
            n.appendChild(
                document.createTextNode(
                    '*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}',
                ),
            ),
            document.head.appendChild(n),
            () => {
                (window.getComputedStyle(document.body),
                    setTimeout(() => {
                        document.head.removeChild(n);
                    }, 1));
            }
        );
    },
    Xh = i => (i || (i = window.matchMedia(Rb)), i.matches ? 'dark' : 'light'),
    qh = { exports: {} },
    Vh = {};
var W0;
function xT() {
    if (W0) return Vh;
    W0 = 1;
    var i = of().__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    return (
        (Vh.c = function (n) {
            return i.H.useMemoCache(n);
        }),
        Vh
    );
}
var e_;
function wT() {
    return (e_ || ((e_ = 1), (qh.exports = xT())), qh.exports);
}
var Ut = wT();
function bl(i) {
    if (i === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return i;
}
function zb(i, n) {
    ((i.prototype = Object.create(n.prototype)), (i.prototype.constructor = i), (i.__proto__ = n));
}
var Jn = { autoSleep: 120, force3D: 'auto', nullTargetWarn: 1, units: { lineHeight: '' } },
    ao = { duration: 0.5, overwrite: !1, delay: 0 },
    dp,
    on,
    wt,
    vi = 1e8,
    pt = 1 / vi,
    xm = Math.PI * 2,
    ET = xm / 4,
    TT = 0,
    Nb = Math.sqrt,
    AT = Math.cos,
    MT = Math.sin,
    It = function (n) {
        return typeof n == 'string';
    },
    Rt = function (n) {
        return typeof n == 'function';
    },
    Al = function (n) {
        return typeof n == 'number';
    },
    hp = function (n) {
        return typeof n > 'u';
    },
    Pi = function (n) {
        return typeof n == 'object';
    },
    Rn = function (n) {
        return n !== !1;
    },
    mp = function () {
        return typeof window < 'u';
    },
    hc = function (n) {
        return Rt(n) || It(n);
    },
    Lb = (typeof ArrayBuffer == 'function' && ArrayBuffer.isView) || function () {},
    gn = Array.isArray,
    wm = /(?:-?\.?\d|\.)+/gi,
    kb = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    Fa = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    Ph = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    Ub = /[+-]=-?[.\d]+/,
    jb = /[^,'"\[\]\s]+/gi,
    OT = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    Tt,
    Hi,
    Em,
    pp,
    ti = {},
    Bc = {},
    Bb,
    Hb = function (n) {
        return (Bc = oo(n, ti)) && kn;
    },
    gp = function (n, r) {
        return console.warn('Invalid property', n, 'set to', r, 'Missing plugin? gsap.registerPlugin()');
    },
    Os = function (n, r) {
        return !r && console.warn(n);
    },
    Yb = function (n, r) {
        return (n && (ti[n] = r) && Bc && (Bc[n] = r)) || ti;
    },
    Cs = function () {
        return 0;
    },
    CT = { suppressEvents: !0, isStart: !0, kill: !1 },
    Ac = { suppressEvents: !0, kill: !1 },
    DT = { suppressEvents: !0 },
    vp = {},
    mr = [],
    Tm = {},
    Gb,
    Qn = {},
    Qh = {},
    t_ = 30,
    Mc = [],
    yp = '',
    _p = function (n) {
        var r = n[0],
            a,
            s;
        if ((Pi(r) || Rt(r) || (n = [n]), !(a = (r._gsap || {}).harness))) {
            for (s = Mc.length; s-- && !Mc[s].targetTest(r); );
            a = Mc[s];
        }
        for (s = n.length; s--; ) (n[s] && (n[s]._gsap || (n[s]._gsap = new f1(n[s], a)))) || n.splice(s, 1);
        return n;
    },
    Kr = function (n) {
        return n._gsap || _p(yi(n))[0]._gsap;
    },
    Xb = function (n, r, a) {
        return (a = n[r]) && Rt(a) ? n[r]() : (hp(a) && n.getAttribute && n.getAttribute(r)) || a;
    },
    zn = function (n, r) {
        return (n = n.split(',')).forEach(r) || n;
    },
    kt = function (n) {
        return Math.round(n * 1e5) / 1e5 || 0;
    },
    Vt = function (n) {
        return Math.round(n * 1e7) / 1e7 || 0;
    },
    Ja = function (n, r) {
        var a = r.charAt(0),
            s = parseFloat(r.substr(2));
        return ((n = parseFloat(n)), a === '+' ? n + s : a === '-' ? n - s : a === '*' ? n * s : n / s);
    },
    RT = function (n, r) {
        for (var a = r.length, s = 0; n.indexOf(r[s]) < 0 && ++s < a; );
        return s < a;
    },
    Hc = function () {
        var n = mr.length,
            r = mr.slice(0),
            a,
            s;
        for (Tm = {}, mr.length = 0, a = 0; a < n; a++)
            ((s = r[a]), s && s._lazy && (s.render(s._lazy[0], s._lazy[1], !0)._lazy = 0));
    },
    bp = function (n) {
        return !!(n._initted || n._startAt || n.add);
    },
    qb = function (n, r, a, s) {
        (mr.length && !on && Hc(), n.render(r, a, !!(on && r < 0 && bp(n))), mr.length && !on && Hc());
    },
    Vb = function (n) {
        var r = parseFloat(n);
        return (r || r === 0) && (n + '').match(jb).length < 2 ? r : It(n) ? n.trim() : n;
    },
    Pb = function (n) {
        return n;
    },
    ni = function (n, r) {
        for (var a in r) a in n || (n[a] = r[a]);
        return n;
    },
    zT = function (n) {
        return function (r, a) {
            for (var s in a) s in r || (s === 'duration' && n) || s === 'ease' || (r[s] = a[s]);
        };
    },
    oo = function (n, r) {
        for (var a in r) n[a] = r[a];
        return n;
    },
    n_ = function i(n, r) {
        for (var a in r)
            a !== '__proto__' &&
                a !== 'constructor' &&
                a !== 'prototype' &&
                (n[a] = Pi(r[a]) ? i(n[a] || (n[a] = {}), r[a]) : r[a]);
        return n;
    },
    Yc = function (n, r) {
        var a = {},
            s;
        for (s in n) s in r || (a[s] = n[s]);
        return a;
    },
    xs = function (n) {
        var r = n.parent || Tt,
            a = n.keyframes ? zT(gn(n.keyframes)) : ni;
        if (Rn(n.inherit)) for (; r; ) (a(n, r.vars.defaults), (r = r.parent || r._dp));
        return n;
    },
    NT = function (n, r) {
        for (var a = n.length, s = a === r.length; s && a-- && n[a] === r[a]; );
        return a < 0;
    },
    Qb = function (n, r, a, s, u) {
        var f = n[s],
            d;
        if (u) for (d = r[u]; f && f[u] > d; ) f = f._prev;
        return (
            f ? ((r._next = f._next), (f._next = r)) : ((r._next = n[a]), (n[a] = r)),
            r._next ? (r._next._prev = r) : (n[s] = r),
            (r._prev = f),
            (r.parent = r._dp = n),
            r
        );
    },
    sf = function (n, r, a, s) {
        (a === void 0 && (a = '_first'), s === void 0 && (s = '_last'));
        var u = r._prev,
            f = r._next;
        (u ? (u._next = f) : n[a] === r && (n[a] = f),
            f ? (f._prev = u) : n[s] === r && (n[s] = u),
            (r._next = r._prev = r.parent = null));
    },
    gr = function (n, r) {
        (n.parent && (!r || n.parent.autoRemoveChildren) && n.parent.remove && n.parent.remove(n), (n._act = 0));
    },
    $r = function (n, r) {
        if (n && (!r || r._end > n._dur || r._start < 0)) for (var a = n; a; ) ((a._dirty = 1), (a = a.parent));
        return n;
    },
    LT = function (n) {
        for (var r = n.parent; r && r.parent; ) ((r._dirty = 1), r.totalDuration(), (r = r.parent));
        return n;
    },
    Am = function (n, r, a, s) {
        return (
            n._startAt &&
            (on ? n._startAt.revert(Ac) : (n.vars.immediateRender && !n.vars.autoRevert) || n._startAt.render(r, !0, s))
        );
    },
    kT = function i(n) {
        return !n || (n._ts && i(n.parent));
    },
    i_ = function (n) {
        return n._repeat ? so(n._tTime, (n = n.duration() + n._rDelay)) * n : 0;
    },
    so = function (n, r) {
        var a = Math.floor((n = Vt(n / r)));
        return n && a === n ? a - 1 : a;
    },
    Gc = function (n, r) {
        return (n - r._start) * r._ts + (r._ts >= 0 ? 0 : r._dirty ? r.totalDuration() : r._tDur);
    },
    uf = function (n) {
        return (n._end = Vt(n._start + (n._tDur / Math.abs(n._ts || n._rts || pt) || 0)));
    },
    cf = function (n, r) {
        var a = n._dp;
        return (
            a &&
                a.smoothChildTiming &&
                n._ts &&
                ((n._start = Vt(
                    a._time - (n._ts > 0 ? r / n._ts : ((n._dirty ? n.totalDuration() : n._tDur) - r) / -n._ts),
                )),
                uf(n),
                a._dirty || $r(a, n)),
            n
        );
    },
    Zb = function (n, r) {
        var a;
        if (
            ((r._time || (!r._dur && r._initted) || (r._start < n._time && (r._dur || !r.add))) &&
                ((a = Gc(n.rawTime(), r)), (!r._dur || Vs(0, r.totalDuration(), a) - r._tTime > pt) && r.render(a, !0)),
            $r(n, r)._dp && n._initted && n._time >= n._dur && n._ts)
        ) {
            if (n._dur < n.duration()) for (a = n; a._dp; ) (a.rawTime() >= 0 && a.totalTime(a._tTime), (a = a._dp));
            n._zTime = -pt;
        }
    },
    Yi = function (n, r, a, s) {
        return (
            r.parent && gr(r),
            (r._start = Vt((Al(a) ? a : a || n !== Tt ? gi(n, a, r) : n._time) + r._delay)),
            (r._end = Vt(r._start + (r.totalDuration() / Math.abs(r.timeScale()) || 0))),
            Qb(n, r, '_first', '_last', n._sort ? '_start' : 0),
            Mm(r) || (n._recent = r),
            s || Zb(n, r),
            n._ts < 0 && cf(n, n._tTime),
            n
        );
    },
    Kb = function (n, r) {
        return (ti.ScrollTrigger || gp('scrollTrigger', r)) && ti.ScrollTrigger.create(r, n);
    },
    $b = function (n, r, a, s, u) {
        if ((xp(n, r, u), !n._initted)) return 1;
        if (!a && n._pt && !on && ((n._dur && n.vars.lazy !== !1) || (!n._dur && n.vars.lazy)) && Gb !== Kn.frame)
            return (mr.push(n), (n._lazy = [u, s]), 1);
    },
    UT = function i(n) {
        var r = n.parent;
        return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || i(r));
    },
    Mm = function (n) {
        var r = n.data;
        return r === 'isFromStart' || r === 'isStart';
    },
    jT = function (n, r, a, s) {
        var u = n.ratio,
            f =
                r < 0 ||
                (!r && ((!n._start && UT(n) && !(!n._initted && Mm(n))) || ((n._ts < 0 || n._dp._ts < 0) && !Mm(n))))
                    ? 0
                    : 1,
            d = n._rDelay,
            p = 0,
            m,
            v,
            y;
        if (
            (d &&
                n._repeat &&
                ((p = Vs(0, n._tDur, r)),
                (v = so(p, d)),
                n._yoyo && v & 1 && (f = 1 - f),
                v !== so(n._tTime, d) && ((u = 1 - f), n.vars.repeatRefresh && n._initted && n.invalidate())),
            f !== u || on || s || n._zTime === pt || (!r && n._zTime))
        ) {
            if (!n._initted && $b(n, r, s, a, p)) return;
            for (
                y = n._zTime,
                    n._zTime = r || (a ? pt : 0),
                    a || (a = r && !y),
                    n.ratio = f,
                    n._from && (f = 1 - f),
                    n._time = 0,
                    n._tTime = p,
                    m = n._pt;
                m;
            )
                (m.r(f, m.d), (m = m._next));
            (r < 0 && Am(n, r, a, !0),
                n._onUpdate && !a && Fn(n, 'onUpdate'),
                p && n._repeat && !a && n.parent && Fn(n, 'onRepeat'),
                (r >= n._tDur || r < 0) &&
                    n.ratio === f &&
                    (f && gr(n, 1),
                    !a && !on && (Fn(n, f ? 'onComplete' : 'onReverseComplete', !0), n._prom && n._prom())));
        } else n._zTime || (n._zTime = r);
    },
    BT = function (n, r, a) {
        var s;
        if (a > r)
            for (s = n._first; s && s._start <= a; ) {
                if (s.data === 'isPause' && s._start > r) return s;
                s = s._next;
            }
        else
            for (s = n._last; s && s._start >= a; ) {
                if (s.data === 'isPause' && s._start < r) return s;
                s = s._prev;
            }
    },
    uo = function (n, r, a, s) {
        var u = n._repeat,
            f = Vt(r) || 0,
            d = n._tTime / n._tDur;
        return (
            d && !s && (n._time *= f / n._dur),
            (n._dur = f),
            (n._tDur = u ? (u < 0 ? 1e10 : Vt(f * (u + 1) + n._rDelay * u)) : f),
            d > 0 && !s && cf(n, (n._tTime = n._tDur * d)),
            n.parent && uf(n),
            a || $r(n.parent, n),
            n
        );
    },
    l_ = function (n) {
        return n instanceof _n ? $r(n) : uo(n, n._dur);
    },
    HT = { _start: 0, endTime: Cs, totalDuration: Cs },
    gi = function i(n, r, a) {
        var s = n.labels,
            u = n._recent || HT,
            f = n.duration() >= vi ? u.endTime(!1) : n._dur,
            d,
            p,
            m;
        return It(r) && (isNaN(r) || r in s)
            ? ((p = r.charAt(0)),
              (m = r.substr(-1) === '%'),
              (d = r.indexOf('=')),
              p === '<' || p === '>'
                  ? (d >= 0 && (r = r.replace(/=/, '')),
                    (p === '<' ? u._start : u.endTime(u._repeat >= 0)) +
                        (parseFloat(r.substr(1)) || 0) * (m ? (d < 0 ? u : a).totalDuration() / 100 : 1))
                  : d < 0
                    ? (r in s || (s[r] = f), s[r])
                    : ((p = parseFloat(r.charAt(d - 1) + r.substr(d + 1))),
                      m && a && (p = (p / 100) * (gn(a) ? a[0] : a).totalDuration()),
                      d > 1 ? i(n, r.substr(0, d - 1), a) + p : f + p))
            : r == null
              ? f
              : +r;
    },
    ws = function (n, r, a) {
        var s = Al(r[1]),
            u = (s ? 2 : 1) + (n < 2 ? 0 : 1),
            f = r[u],
            d,
            p;
        if ((s && (f.duration = r[1]), (f.parent = a), n)) {
            for (d = f, p = a; p && !('immediateRender' in d); )
                ((d = p.vars.defaults || {}), (p = Rn(p.vars.inherit) && p.parent));
            ((f.immediateRender = Rn(d.immediateRender)), n < 2 ? (f.runBackwards = 1) : (f.startAt = r[u - 1]));
        }
        return new qt(r[0], f, r[u + 1]);
    },
    xr = function (n, r) {
        return n || n === 0 ? r(n) : r;
    },
    Vs = function (n, r, a) {
        return a < n ? n : a > r ? r : a;
    },
    pn = function (n, r) {
        return !It(n) || !(r = OT.exec(n)) ? '' : r[1];
    },
    YT = function (n, r, a) {
        return xr(a, function (s) {
            return Vs(n, r, s);
        });
    },
    Om = [].slice,
    Fb = function (n, r) {
        return (
            n &&
            Pi(n) &&
            'length' in n &&
            ((!r && !n.length) || (n.length - 1 in n && Pi(n[0]))) &&
            !n.nodeType &&
            n !== Hi
        );
    },
    GT = function (n, r, a) {
        return (
            a === void 0 && (a = []),
            n.forEach(function (s) {
                var u;
                return (It(s) && !r) || Fb(s, 1) ? (u = a).push.apply(u, yi(s)) : a.push(s);
            }) || a
        );
    },
    yi = function (n, r, a) {
        return wt && !r && wt.selector
            ? wt.selector(n)
            : It(n) && !a && (Em || !co())
              ? Om.call((r || pp).querySelectorAll(n), 0)
              : gn(n)
                ? GT(n, a)
                : Fb(n)
                  ? Om.call(n, 0)
                  : n
                    ? [n]
                    : [];
    },
    Cm = function (n) {
        return (
            (n = yi(n)[0] || Os('Invalid scope') || {}),
            function (r) {
                var a = n.current || n.nativeElement || n;
                return yi(r, a.querySelectorAll ? a : a === n ? Os('Invalid scope') || pp.createElement('div') : n);
            }
        );
    },
    Ib = function (n) {
        return n.sort(function () {
            return 0.5 - Math.random();
        });
    },
    Jb = function (n) {
        if (Rt(n)) return n;
        var r = Pi(n) ? n : { each: n },
            a = Fr(r.ease),
            s = r.from || 0,
            u = parseFloat(r.base) || 0,
            f = {},
            d = s > 0 && s < 1,
            p = isNaN(s) || d,
            m = r.axis,
            v = s,
            y = s;
        return (
            It(s) ? (v = y = { center: 0.5, edges: 0.5, end: 1 }[s] || 0) : !d && p && ((v = s[0]), (y = s[1])),
            function (S, g, x) {
                var b = (x || r).length,
                    T = f[b],
                    O,
                    L,
                    D,
                    k,
                    C,
                    X,
                    z,
                    U,
                    P;
                if (!T) {
                    if (((P = r.grid === 'auto' ? 0 : (r.grid || [1, vi])[1]), !P)) {
                        for (z = -vi; z < (z = x[P++].getBoundingClientRect().left) && P < b; );
                        P < b && P--;
                    }
                    for (
                        T = f[b] = [],
                            O = p ? Math.min(P, b) * v - 0.5 : s % P,
                            L = P === vi ? 0 : p ? (b * y) / P - 0.5 : (s / P) | 0,
                            z = 0,
                            U = vi,
                            X = 0;
                        X < b;
                        X++
                    )
                        ((D = (X % P) - O),
                            (k = L - ((X / P) | 0)),
                            (T[X] = C = m ? Math.abs(m === 'y' ? k : D) : Nb(D * D + k * k)),
                            C > z && (z = C),
                            C < U && (U = C));
                    (s === 'random' && Ib(T),
                        (T.max = z - U),
                        (T.min = U),
                        (T.v = b =
                            (parseFloat(r.amount) ||
                                parseFloat(r.each) *
                                    (P > b ? b - 1 : m ? (m === 'y' ? b / P : P) : Math.max(P, b / P)) ||
                                0) * (s === 'edges' ? -1 : 1)),
                        (T.b = b < 0 ? u - b : u),
                        (T.u = pn(r.amount || r.each) || 0),
                        (a = a && b < 0 ? s1(a) : a));
                }
                return ((b = (T[S] - T.min) / T.max || 0), Vt(T.b + (a ? a(b) : b) * T.v) + T.u);
            }
        );
    },
    Dm = function (n) {
        var r = Math.pow(10, ((n + '').split('.')[1] || '').length);
        return function (a) {
            var s = Vt(Math.round(parseFloat(a) / n) * n * r);
            return (s - (s % 1)) / r + (Al(a) ? 0 : pn(a));
        };
    },
    Wb = function (n, r) {
        var a = gn(n),
            s,
            u;
        return (
            !a &&
                Pi(n) &&
                ((s = a = n.radius || vi),
                n.values ? ((n = yi(n.values)), (u = !Al(n[0])) && (s *= s)) : (n = Dm(n.increment))),
            xr(
                r,
                a
                    ? Rt(n)
                        ? function (f) {
                              return ((u = n(f)), Math.abs(u - f) <= s ? u : f);
                          }
                        : function (f) {
                              for (
                                  var d = parseFloat(u ? f.x : f),
                                      p = parseFloat(u ? f.y : 0),
                                      m = vi,
                                      v = 0,
                                      y = n.length,
                                      S,
                                      g;
                                  y--;
                              )
                                  (u
                                      ? ((S = n[y].x - d), (g = n[y].y - p), (S = S * S + g * g))
                                      : (S = Math.abs(n[y] - d)),
                                      S < m && ((m = S), (v = y)));
                              return ((v = !s || m <= s ? n[v] : f), u || v === f || Al(f) ? v : v + pn(f));
                          }
                    : Dm(n),
            )
        );
    },
    e1 = function (n, r, a, s) {
        return xr(gn(n) ? !r : a === !0 ? !!(a = 0) : !s, function () {
            return gn(n)
                ? n[~~(Math.random() * n.length)]
                : (a = a || 1e-5) &&
                      (s = a < 1 ? Math.pow(10, (a + '').length - 2) : 1) &&
                      Math.floor(Math.round((n - a / 2 + Math.random() * (r - n + a * 0.99)) / a) * a * s) / s;
        });
    },
    XT = function () {
        for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
        return function (s) {
            return r.reduce(function (u, f) {
                return f(u);
            }, s);
        };
    },
    qT = function (n, r) {
        return function (a) {
            return n(parseFloat(a)) + (r || pn(a));
        };
    },
    VT = function (n, r, a) {
        return n1(n, r, 0, 1, a);
    },
    t1 = function (n, r, a) {
        return xr(a, function (s) {
            return n[~~r(s)];
        });
    },
    PT = function i(n, r, a) {
        var s = r - n;
        return gn(n)
            ? t1(n, i(0, n.length), r)
            : xr(a, function (u) {
                  return ((s + ((u - n) % s)) % s) + n;
              });
    },
    QT = function i(n, r, a) {
        var s = r - n,
            u = s * 2;
        return gn(n)
            ? t1(n, i(0, n.length - 1), r)
            : xr(a, function (f) {
                  return ((f = (u + ((f - n) % u)) % u || 0), n + (f > s ? u - f : f));
              });
    },
    Ds = function (n) {
        for (var r = 0, a = '', s, u, f, d; ~(s = n.indexOf('random(', r)); )
            ((f = n.indexOf(')', s)),
                (d = n.charAt(s + 7) === '['),
                (u = n.substr(s + 7, f - s - 7).match(d ? jb : wm)),
                (a += n.substr(r, s - r) + e1(d ? u : +u[0], d ? 0 : +u[1], +u[2] || 1e-5)),
                (r = f + 1));
        return a + n.substr(r, n.length - r);
    },
    n1 = function (n, r, a, s, u) {
        var f = r - n,
            d = s - a;
        return xr(u, function (p) {
            return a + (((p - n) / f) * d || 0);
        });
    },
    ZT = function i(n, r, a, s) {
        var u = isNaN(n + r)
            ? 0
            : function (g) {
                  return (1 - g) * n + g * r;
              };
        if (!u) {
            var f = It(n),
                d = {},
                p,
                m,
                v,
                y,
                S;
            if ((a === !0 && (s = 1) && (a = null), f)) ((n = { p: n }), (r = { p: r }));
            else if (gn(n) && !gn(r)) {
                for (v = [], y = n.length, S = y - 2, m = 1; m < y; m++) v.push(i(n[m - 1], n[m]));
                (y--,
                    (u = function (x) {
                        x *= y;
                        var b = Math.min(S, ~~x);
                        return v[b](x - b);
                    }),
                    (a = r));
            } else s || (n = oo(gn(n) ? [] : {}, n));
            if (!v) {
                for (p in r) Sp.call(d, n, p, 'get', r[p]);
                u = function (x) {
                    return Tp(x, d) || (f ? n.p : n);
                };
            }
        }
        return xr(a, u);
    },
    r_ = function (n, r, a) {
        var s = n.labels,
            u = vi,
            f,
            d,
            p;
        for (f in s) ((d = s[f] - r), d < 0 == !!a && d && u > (d = Math.abs(d)) && ((p = f), (u = d)));
        return p;
    },
    Fn = function (n, r, a) {
        var s = n.vars,
            u = s[r],
            f = wt,
            d = n._ctx,
            p,
            m,
            v;
        if (u)
            return (
                (p = s[r + 'Params']),
                (m = s.callbackScope || n),
                a && mr.length && Hc(),
                d && (wt = d),
                (v = p ? u.apply(m, p) : u.call(m)),
                (wt = f),
                v
            );
    },
    ps = function (n) {
        return (gr(n), n.scrollTrigger && n.scrollTrigger.kill(!!on), n.progress() < 1 && Fn(n, 'onInterrupt'), n);
    },
    Ia,
    i1 = [],
    l1 = function (n) {
        if (n)
            if (((n = (!n.name && n.default) || n), mp() || n.headless)) {
                var r = n.name,
                    a = Rt(n),
                    s =
                        r && !a && n.init
                            ? function () {
                                  this._props = [];
                              }
                            : n,
                    u = { init: Cs, render: Tp, add: Sp, kill: uA, modifier: sA, rawVars: 0 },
                    f = { targetTest: 0, get: 0, getSetter: Ep, aliases: {}, register: 0 };
                if ((co(), n !== s)) {
                    if (Qn[r]) return;
                    (ni(s, ni(Yc(n, u), f)),
                        oo(s.prototype, oo(u, Yc(n, f))),
                        (Qn[(s.prop = r)] = s),
                        n.targetTest && (Mc.push(s), (vp[r] = 1)),
                        (r = (r === 'css' ? 'CSS' : r.charAt(0).toUpperCase() + r.substr(1)) + 'Plugin'));
                }
                (Yb(r, s), n.register && n.register(kn, s, Nn));
            } else i1.push(n);
    },
    ht = 255,
    gs = {
        aqua: [0, ht, ht],
        lime: [0, ht, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, ht],
        navy: [0, 0, 128],
        white: [ht, ht, ht],
        olive: [128, 128, 0],
        yellow: [ht, ht, 0],
        orange: [ht, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [ht, 0, 0],
        pink: [ht, 192, 203],
        cyan: [0, ht, ht],
        transparent: [ht, ht, ht, 0],
    },
    Zh = function (n, r, a) {
        return (
            (n += n < 0 ? 1 : n > 1 ? -1 : 0),
            ((n * 6 < 1 ? r + (a - r) * n * 6 : n < 0.5 ? a : n * 3 < 2 ? r + (a - r) * (2 / 3 - n) * 6 : r) * ht +
                0.5) |
                0
        );
    },
    r1 = function (n, r, a) {
        var s = n ? (Al(n) ? [n >> 16, (n >> 8) & ht, n & ht] : 0) : gs.black,
            u,
            f,
            d,
            p,
            m,
            v,
            y,
            S,
            g,
            x;
        if (!s) {
            if ((n.substr(-1) === ',' && (n = n.substr(0, n.length - 1)), gs[n])) s = gs[n];
            else if (n.charAt(0) === '#') {
                if (
                    (n.length < 6 &&
                        ((u = n.charAt(1)),
                        (f = n.charAt(2)),
                        (d = n.charAt(3)),
                        (n = '#' + u + u + f + f + d + d + (n.length === 5 ? n.charAt(4) + n.charAt(4) : ''))),
                    n.length === 9)
                )
                    return (
                        (s = parseInt(n.substr(1, 6), 16)),
                        [s >> 16, (s >> 8) & ht, s & ht, parseInt(n.substr(7), 16) / 255]
                    );
                ((n = parseInt(n.substr(1), 16)), (s = [n >> 16, (n >> 8) & ht, n & ht]));
            } else if (n.substr(0, 3) === 'hsl') {
                if (((s = x = n.match(wm)), !r))
                    ((p = (+s[0] % 360) / 360),
                        (m = +s[1] / 100),
                        (v = +s[2] / 100),
                        (f = v <= 0.5 ? v * (m + 1) : v + m - v * m),
                        (u = v * 2 - f),
                        s.length > 3 && (s[3] *= 1),
                        (s[0] = Zh(p + 1 / 3, u, f)),
                        (s[1] = Zh(p, u, f)),
                        (s[2] = Zh(p - 1 / 3, u, f)));
                else if (~n.indexOf('=')) return ((s = n.match(kb)), a && s.length < 4 && (s[3] = 1), s);
            } else s = n.match(wm) || gs.transparent;
            s = s.map(Number);
        }
        return (
            r &&
                !x &&
                ((u = s[0] / ht),
                (f = s[1] / ht),
                (d = s[2] / ht),
                (y = Math.max(u, f, d)),
                (S = Math.min(u, f, d)),
                (v = (y + S) / 2),
                y === S
                    ? (p = m = 0)
                    : ((g = y - S),
                      (m = v > 0.5 ? g / (2 - y - S) : g / (y + S)),
                      (p = y === u ? (f - d) / g + (f < d ? 6 : 0) : y === f ? (d - u) / g + 2 : (u - f) / g + 4),
                      (p *= 60)),
                (s[0] = ~~(p + 0.5)),
                (s[1] = ~~(m * 100 + 0.5)),
                (s[2] = ~~(v * 100 + 0.5))),
            a && s.length < 4 && (s[3] = 1),
            s
        );
    },
    a1 = function (n) {
        var r = [],
            a = [],
            s = -1;
        return (
            n.split(pr).forEach(function (u) {
                var f = u.match(Fa) || [];
                (r.push.apply(r, f), a.push((s += f.length + 1)));
            }),
            (r.c = a),
            r
        );
    },
    a_ = function (n, r, a) {
        var s = '',
            u = (n + s).match(pr),
            f = r ? 'hsla(' : 'rgba(',
            d = 0,
            p,
            m,
            v,
            y;
        if (!u) return n;
        if (
            ((u = u.map(function (S) {
                return (S = r1(S, r, 1)) && f + (r ? S[0] + ',' + S[1] + '%,' + S[2] + '%,' + S[3] : S.join(',')) + ')';
            })),
            a && ((v = a1(n)), (p = a.c), p.join(s) !== v.c.join(s)))
        )
            for (m = n.replace(pr, '1').split(Fa), y = m.length - 1; d < y; d++)
                s += m[d] + (~p.indexOf(d) ? u.shift() || f + '0,0,0,0)' : (v.length ? v : u.length ? u : a).shift());
        if (!m) for (m = n.split(pr), y = m.length - 1; d < y; d++) s += m[d] + u[d];
        return s + m[y];
    },
    pr = (function () {
        var i = '(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b',
            n;
        for (n in gs) i += '|' + n + '\\b';
        return new RegExp(i + ')', 'gi');
    })(),
    KT = /hsl[a]?\(/,
    o1 = function (n) {
        var r = n.join(' '),
            a;
        if (((pr.lastIndex = 0), pr.test(r)))
            return ((a = KT.test(r)), (n[1] = a_(n[1], a)), (n[0] = a_(n[0], a, a1(n[1]))), !0);
    },
    Rs,
    Kn = (function () {
        var i = Date.now,
            n = 500,
            r = 33,
            a = i(),
            s = a,
            u = 1e3 / 240,
            f = u,
            d = [],
            p,
            m,
            v,
            y,
            S,
            g,
            x = function b(T) {
                var O = i() - s,
                    L = T === !0,
                    D,
                    k,
                    C,
                    X;
                if (
                    ((O > n || O < 0) && (a += O - r),
                    (s += O),
                    (C = s - a),
                    (D = C - f),
                    (D > 0 || L) &&
                        ((X = ++y.frame),
                        (S = C - y.time * 1e3),
                        (y.time = C = C / 1e3),
                        (f += D + (D >= u ? 4 : u - D)),
                        (k = 1)),
                    L || (p = m(b)),
                    k)
                )
                    for (g = 0; g < d.length; g++) d[g](C, S, X, T);
            };
        return (
            (y = {
                time: 0,
                frame: 0,
                tick: function () {
                    x(!0);
                },
                deltaRatio: function (T) {
                    return S / (1e3 / (T || 60));
                },
                wake: function () {
                    Bb &&
                        (!Em &&
                            mp() &&
                            ((Hi = Em = window),
                            (pp = Hi.document || {}),
                            (ti.gsap = kn),
                            (Hi.gsapVersions || (Hi.gsapVersions = [])).push(kn.version),
                            Hb(Bc || Hi.GreenSockGlobals || (!Hi.gsap && Hi) || {}),
                            i1.forEach(l1)),
                        (v = typeof requestAnimationFrame < 'u' && requestAnimationFrame),
                        p && y.sleep(),
                        (m =
                            v ||
                            function (T) {
                                return setTimeout(T, (f - y.time * 1e3 + 1) | 0);
                            }),
                        (Rs = 1),
                        x(2));
                },
                sleep: function () {
                    ((v ? cancelAnimationFrame : clearTimeout)(p), (Rs = 0), (m = Cs));
                },
                lagSmoothing: function (T, O) {
                    ((n = T || 1 / 0), (r = Math.min(O || 33, n)));
                },
                fps: function (T) {
                    ((u = 1e3 / (T || 240)), (f = y.time * 1e3 + u));
                },
                add: function (T, O, L) {
                    var D = O
                        ? function (k, C, X, z) {
                              (T(k, C, X, z), y.remove(D));
                          }
                        : T;
                    return (y.remove(T), d[L ? 'unshift' : 'push'](D), co(), D);
                },
                remove: function (T, O) {
                    ~(O = d.indexOf(T)) && d.splice(O, 1) && g >= O && g--;
                },
                _listeners: d,
            }),
            y
        );
    })(),
    co = function () {
        return !Rs && Kn.wake();
    },
    Fe = {},
    $T = /^[\d.\-M][\d.\-,\s]/,
    FT = /["']/g,
    IT = function (n) {
        for (var r = {}, a = n.substr(1, n.length - 3).split(':'), s = a[0], u = 1, f = a.length, d, p, m; u < f; u++)
            ((p = a[u]),
                (d = u !== f - 1 ? p.lastIndexOf(',') : p.length),
                (m = p.substr(0, d)),
                (r[s] = isNaN(m) ? m.replace(FT, '').trim() : +m),
                (s = p.substr(d + 1).trim()));
        return r;
    },
    JT = function (n) {
        var r = n.indexOf('(') + 1,
            a = n.indexOf(')'),
            s = n.indexOf('(', r);
        return n.substring(r, ~s && s < a ? n.indexOf(')', a + 1) : a);
    },
    WT = function (n) {
        var r = (n + '').split('('),
            a = Fe[r[0]];
        return a && r.length > 1 && a.config
            ? a.config.apply(null, ~n.indexOf('{') ? [IT(r[1])] : JT(n).split(',').map(Vb))
            : Fe._CE && $T.test(n)
              ? Fe._CE('', n)
              : a;
    },
    s1 = function (n) {
        return function (r) {
            return 1 - n(1 - r);
        };
    },
    u1 = function i(n, r) {
        for (var a = n._first, s; a; )
            (a instanceof _n
                ? i(a, r)
                : a.vars.yoyoEase &&
                  (!a._yoyo || !a._repeat) &&
                  a._yoyo !== r &&
                  (a.timeline
                      ? i(a.timeline, r)
                      : ((s = a._ease), (a._ease = a._yEase), (a._yEase = s), (a._yoyo = r))),
                (a = a._next));
    },
    Fr = function (n, r) {
        return (n && (Rt(n) ? n : Fe[n] || WT(n))) || r;
    },
    ia = function (n, r, a, s) {
        (a === void 0 &&
            (a = function (p) {
                return 1 - r(1 - p);
            }),
            s === void 0 &&
                (s = function (p) {
                    return p < 0.5 ? r(p * 2) / 2 : 1 - r((1 - p) * 2) / 2;
                }));
        var u = { easeIn: r, easeOut: a, easeInOut: s },
            f;
        return (
            zn(n, function (d) {
                ((Fe[d] = ti[d] = u), (Fe[(f = d.toLowerCase())] = a));
                for (var p in u)
                    Fe[f + (p === 'easeIn' ? '.in' : p === 'easeOut' ? '.out' : '.inOut')] = Fe[d + '.' + p] = u[p];
            }),
            u
        );
    },
    c1 = function (n) {
        return function (r) {
            return r < 0.5 ? (1 - n(1 - r * 2)) / 2 : 0.5 + n((r - 0.5) * 2) / 2;
        };
    },
    Kh = function i(n, r, a) {
        var s = r >= 1 ? r : 1,
            u = (a || (n ? 0.3 : 0.45)) / (r < 1 ? r : 1),
            f = (u / xm) * (Math.asin(1 / s) || 0),
            d = function (v) {
                return v === 1 ? 1 : s * Math.pow(2, -10 * v) * MT((v - f) * u) + 1;
            },
            p =
                n === 'out'
                    ? d
                    : n === 'in'
                      ? function (m) {
                            return 1 - d(1 - m);
                        }
                      : c1(d);
        return (
            (u = xm / u),
            (p.config = function (m, v) {
                return i(n, m, v);
            }),
            p
        );
    },
    $h = function i(n, r) {
        r === void 0 && (r = 1.70158);
        var a = function (f) {
                return f ? --f * f * ((r + 1) * f + r) + 1 : 0;
            },
            s =
                n === 'out'
                    ? a
                    : n === 'in'
                      ? function (u) {
                            return 1 - a(1 - u);
                        }
                      : c1(a);
        return (
            (s.config = function (u) {
                return i(n, u);
            }),
            s
        );
    };
zn('Linear,Quad,Cubic,Quart,Quint,Strong', function (i, n) {
    var r = n < 5 ? n + 1 : n;
    ia(
        i + ',Power' + (r - 1),
        n
            ? function (a) {
                  return Math.pow(a, r);
              }
            : function (a) {
                  return a;
              },
        function (a) {
            return 1 - Math.pow(1 - a, r);
        },
        function (a) {
            return a < 0.5 ? Math.pow(a * 2, r) / 2 : 1 - Math.pow((1 - a) * 2, r) / 2;
        },
    );
});
Fe.Linear.easeNone = Fe.none = Fe.Linear.easeIn;
ia('Elastic', Kh('in'), Kh('out'), Kh());
(function (i, n) {
    var r = 1 / n,
        a = 2 * r,
        s = 2.5 * r,
        u = function (d) {
            return d < r
                ? i * d * d
                : d < a
                  ? i * Math.pow(d - 1.5 / n, 2) + 0.75
                  : d < s
                    ? i * (d -= 2.25 / n) * d + 0.9375
                    : i * Math.pow(d - 2.625 / n, 2) + 0.984375;
        };
    ia(
        'Bounce',
        function (f) {
            return 1 - u(1 - f);
        },
        u,
    );
})(7.5625, 2.75);
ia('Expo', function (i) {
    return Math.pow(2, 10 * (i - 1)) * i + i * i * i * i * i * i * (1 - i);
});
ia('Circ', function (i) {
    return -(Nb(1 - i * i) - 1);
});
ia('Sine', function (i) {
    return i === 1 ? 1 : -AT(i * ET) + 1;
});
ia('Back', $h('in'), $h('out'), $h());
Fe.SteppedEase =
    Fe.steps =
    ti.SteppedEase =
        {
            config: function (n, r) {
                n === void 0 && (n = 1);
                var a = 1 / n,
                    s = n + (r ? 0 : 1),
                    u = r ? 1 : 0,
                    f = 1 - pt;
                return function (d) {
                    return (((s * Vs(0, f, d)) | 0) + u) * a;
                };
            },
        };
ao.ease = Fe['quad.out'];
zn('onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt', function (i) {
    return (yp += i + ',' + i + 'Params,');
});
var f1 = function (n, r) {
        ((this.id = TT++),
            (n._gsap = this),
            (this.target = n),
            (this.harness = r),
            (this.get = r ? r.get : Xb),
            (this.set = r ? r.getSetter : Ep));
    },
    zs = (function () {
        function i(r) {
            ((this.vars = r),
                (this._delay = +r.delay || 0),
                (this._repeat = r.repeat === 1 / 0 ? -2 : r.repeat || 0) &&
                    ((this._rDelay = r.repeatDelay || 0), (this._yoyo = !!r.yoyo || !!r.yoyoEase)),
                (this._ts = 1),
                uo(this, +r.duration, 1, 1),
                (this.data = r.data),
                wt && ((this._ctx = wt), wt.data.push(this)),
                Rs || Kn.wake());
        }
        var n = i.prototype;
        return (
            (n.delay = function (a) {
                return a || a === 0
                    ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + a - this._delay),
                      (this._delay = a),
                      this)
                    : this._delay;
            }),
            (n.duration = function (a) {
                return arguments.length
                    ? this.totalDuration(this._repeat > 0 ? a + (a + this._rDelay) * this._repeat : a)
                    : this.totalDuration() && this._dur;
            }),
            (n.totalDuration = function (a) {
                return arguments.length
                    ? ((this._dirty = 0),
                      uo(this, this._repeat < 0 ? a : (a - this._repeat * this._rDelay) / (this._repeat + 1)))
                    : this._tDur;
            }),
            (n.totalTime = function (a, s) {
                if ((co(), !arguments.length)) return this._tTime;
                var u = this._dp;
                if (u && u.smoothChildTiming && this._ts) {
                    for (cf(this, a), !u._dp || u.parent || Zb(u, this); u && u.parent; )
                        (u.parent._time !==
                            u._start + (u._ts >= 0 ? u._tTime / u._ts : (u.totalDuration() - u._tTime) / -u._ts) &&
                            u.totalTime(u._tTime, !0),
                            (u = u.parent));
                    !this.parent &&
                        this._dp.autoRemoveChildren &&
                        ((this._ts > 0 && a < this._tDur) || (this._ts < 0 && a > 0) || (!this._tDur && !a)) &&
                        Yi(this._dp, this, this._start - this._delay);
                }
                return (
                    (this._tTime !== a ||
                        (!this._dur && !s) ||
                        (this._initted && Math.abs(this._zTime) === pt) ||
                        (!a && !this._initted && (this.add || this._ptLookup))) &&
                        (this._ts || (this._pTime = a), qb(this, a, s)),
                    this
                );
            }),
            (n.time = function (a, s) {
                return arguments.length
                    ? this.totalTime(
                          Math.min(this.totalDuration(), a + i_(this)) % (this._dur + this._rDelay) ||
                              (a ? this._dur : 0),
                          s,
                      )
                    : this._time;
            }),
            (n.totalProgress = function (a, s) {
                return arguments.length
                    ? this.totalTime(this.totalDuration() * a, s)
                    : this.totalDuration()
                      ? Math.min(1, this._tTime / this._tDur)
                      : this.rawTime() >= 0 && this._initted
                        ? 1
                        : 0;
            }),
            (n.progress = function (a, s) {
                return arguments.length
                    ? this.totalTime(
                          this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - a : a) + i_(this),
                          s,
                      )
                    : this.duration()
                      ? Math.min(1, this._time / this._dur)
                      : this.rawTime() > 0
                        ? 1
                        : 0;
            }),
            (n.iteration = function (a, s) {
                var u = this.duration() + this._rDelay;
                return arguments.length
                    ? this.totalTime(this._time + (a - 1) * u, s)
                    : this._repeat
                      ? so(this._tTime, u) + 1
                      : 1;
            }),
            (n.timeScale = function (a, s) {
                if (!arguments.length) return this._rts === -pt ? 0 : this._rts;
                if (this._rts === a) return this;
                var u = this.parent && this._ts ? Gc(this.parent._time, this) : this._tTime;
                return (
                    (this._rts = +a || 0),
                    (this._ts = this._ps || a === -pt ? 0 : this._rts),
                    this.totalTime(Vs(-Math.abs(this._delay), this.totalDuration(), u), s !== !1),
                    uf(this),
                    LT(this)
                );
            }),
            (n.paused = function (a) {
                return arguments.length
                    ? (this._ps !== a &&
                          ((this._ps = a),
                          a
                              ? ((this._pTime = this._tTime || Math.max(-this._delay, this.rawTime())),
                                (this._ts = this._act = 0))
                              : (co(),
                                (this._ts = this._rts),
                                this.totalTime(
                                    this.parent && !this.parent.smoothChildTiming
                                        ? this.rawTime()
                                        : this._tTime || this._pTime,
                                    this.progress() === 1 && Math.abs(this._zTime) !== pt && (this._tTime -= pt),
                                ))),
                      this)
                    : this._ps;
            }),
            (n.startTime = function (a) {
                if (arguments.length) {
                    this._start = a;
                    var s = this.parent || this._dp;
                    return (s && (s._sort || !this.parent) && Yi(s, this, a - this._delay), this);
                }
                return this._start;
            }),
            (n.endTime = function (a) {
                return this._start + (Rn(a) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
            }),
            (n.rawTime = function (a) {
                var s = this.parent || this._dp;
                return s
                    ? a && (!this._ts || (this._repeat && this._time && this.totalProgress() < 1))
                        ? this._tTime % (this._dur + this._rDelay)
                        : this._ts
                          ? Gc(s.rawTime(a), this)
                          : this._tTime
                    : this._tTime;
            }),
            (n.revert = function (a) {
                a === void 0 && (a = DT);
                var s = on;
                return (
                    (on = a),
                    bp(this) && (this.timeline && this.timeline.revert(a), this.totalTime(-0.01, a.suppressEvents)),
                    this.data !== 'nested' && a.kill !== !1 && this.kill(),
                    (on = s),
                    this
                );
            }),
            (n.globalTime = function (a) {
                for (var s = this, u = arguments.length ? a : s.rawTime(); s; )
                    ((u = s._start + u / (Math.abs(s._ts) || 1)), (s = s._dp));
                return !this.parent && this._sat ? this._sat.globalTime(a) : u;
            }),
            (n.repeat = function (a) {
                return arguments.length
                    ? ((this._repeat = a === 1 / 0 ? -2 : a), l_(this))
                    : this._repeat === -2
                      ? 1 / 0
                      : this._repeat;
            }),
            (n.repeatDelay = function (a) {
                if (arguments.length) {
                    var s = this._time;
                    return ((this._rDelay = a), l_(this), s ? this.time(s) : this);
                }
                return this._rDelay;
            }),
            (n.yoyo = function (a) {
                return arguments.length ? ((this._yoyo = a), this) : this._yoyo;
            }),
            (n.seek = function (a, s) {
                return this.totalTime(gi(this, a), Rn(s));
            }),
            (n.restart = function (a, s) {
                return (this.play().totalTime(a ? -this._delay : 0, Rn(s)), this._dur || (this._zTime = -pt), this);
            }),
            (n.play = function (a, s) {
                return (a != null && this.seek(a, s), this.reversed(!1).paused(!1));
            }),
            (n.reverse = function (a, s) {
                return (a != null && this.seek(a || this.totalDuration(), s), this.reversed(!0).paused(!1));
            }),
            (n.pause = function (a, s) {
                return (a != null && this.seek(a, s), this.paused(!0));
            }),
            (n.resume = function () {
                return this.paused(!1);
            }),
            (n.reversed = function (a) {
                return arguments.length
                    ? (!!a !== this.reversed() && this.timeScale(-this._rts || (a ? -pt : 0)), this)
                    : this._rts < 0;
            }),
            (n.invalidate = function () {
                return ((this._initted = this._act = 0), (this._zTime = -pt), this);
            }),
            (n.isActive = function () {
                var a = this.parent || this._dp,
                    s = this._start,
                    u;
                return !!(
                    !a ||
                    (this._ts && this._initted && a.isActive() && (u = a.rawTime(!0)) >= s && u < this.endTime(!0) - pt)
                );
            }),
            (n.eventCallback = function (a, s, u) {
                var f = this.vars;
                return arguments.length > 1
                    ? (s
                          ? ((f[a] = s), u && (f[a + 'Params'] = u), a === 'onUpdate' && (this._onUpdate = s))
                          : delete f[a],
                      this)
                    : f[a];
            }),
            (n.then = function (a) {
                var s = this;
                return new Promise(function (u) {
                    var f = Rt(a) ? a : Pb,
                        d = function () {
                            var m = s.then;
                            ((s.then = null),
                                Rt(f) && (f = f(s)) && (f.then || f === s) && (s.then = m),
                                u(f),
                                (s.then = m));
                        };
                    (s._initted && s.totalProgress() === 1 && s._ts >= 0) || (!s._tTime && s._ts < 0)
                        ? d()
                        : (s._prom = d);
                });
            }),
            (n.kill = function () {
                ps(this);
            }),
            i
        );
    })();
ni(zs.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -pt,
    _prom: 0,
    _ps: !1,
    _rts: 1,
});
var _n = (function (i) {
    zb(n, i);
    function n(a, s) {
        var u;
        return (
            a === void 0 && (a = {}),
            (u = i.call(this, a) || this),
            (u.labels = {}),
            (u.smoothChildTiming = !!a.smoothChildTiming),
            (u.autoRemoveChildren = !!a.autoRemoveChildren),
            (u._sort = Rn(a.sortChildren)),
            Tt && Yi(a.parent || Tt, bl(u), s),
            a.reversed && u.reverse(),
            a.paused && u.paused(!0),
            a.scrollTrigger && Kb(bl(u), a.scrollTrigger),
            u
        );
    }
    var r = n.prototype;
    return (
        (r.to = function (s, u, f) {
            return (ws(0, arguments, this), this);
        }),
        (r.from = function (s, u, f) {
            return (ws(1, arguments, this), this);
        }),
        (r.fromTo = function (s, u, f, d) {
            return (ws(2, arguments, this), this);
        }),
        (r.set = function (s, u, f) {
            return (
                (u.duration = 0),
                (u.parent = this),
                xs(u).repeatDelay || (u.repeat = 0),
                (u.immediateRender = !!u.immediateRender),
                new qt(s, u, gi(this, f), 1),
                this
            );
        }),
        (r.call = function (s, u, f) {
            return Yi(this, qt.delayedCall(0, s, u), f);
        }),
        (r.staggerTo = function (s, u, f, d, p, m, v) {
            return (
                (f.duration = u),
                (f.stagger = f.stagger || d),
                (f.onComplete = m),
                (f.onCompleteParams = v),
                (f.parent = this),
                new qt(s, f, gi(this, p)),
                this
            );
        }),
        (r.staggerFrom = function (s, u, f, d, p, m, v) {
            return (
                (f.runBackwards = 1),
                (xs(f).immediateRender = Rn(f.immediateRender)),
                this.staggerTo(s, u, f, d, p, m, v)
            );
        }),
        (r.staggerFromTo = function (s, u, f, d, p, m, v, y) {
            return (
                (d.startAt = f),
                (xs(d).immediateRender = Rn(d.immediateRender)),
                this.staggerTo(s, u, d, p, m, v, y)
            );
        }),
        (r.render = function (s, u, f) {
            var d = this._time,
                p = this._dirty ? this.totalDuration() : this._tDur,
                m = this._dur,
                v = s <= 0 ? 0 : Vt(s),
                y = this._zTime < 0 != s < 0 && (this._initted || !m),
                S,
                g,
                x,
                b,
                T,
                O,
                L,
                D,
                k,
                C,
                X,
                z;
            if ((this !== Tt && v > p && s >= 0 && (v = p), v !== this._tTime || f || y)) {
                if (
                    (d !== this._time && m && ((v += this._time - d), (s += this._time - d)),
                    (S = v),
                    (k = this._start),
                    (D = this._ts),
                    (O = !D),
                    y && (m || (d = this._zTime), (s || !u) && (this._zTime = s)),
                    this._repeat)
                ) {
                    if (((X = this._yoyo), (T = m + this._rDelay), this._repeat < -1 && s < 0))
                        return this.totalTime(T * 100 + s, u, f);
                    if (
                        ((S = Vt(v % T)),
                        v === p
                            ? ((b = this._repeat), (S = m))
                            : ((C = Vt(v / T)), (b = ~~C), b && b === C && ((S = m), b--), S > m && (S = m)),
                        (C = so(this._tTime, T)),
                        !d && this._tTime && C !== b && this._tTime - C * T - this._dur <= 0 && (C = b),
                        X && b & 1 && ((S = m - S), (z = 1)),
                        b !== C && !this._lock)
                    ) {
                        var U = X && C & 1,
                            P = U === (X && b & 1);
                        if (
                            (b < C && (U = !U),
                            (d = U ? 0 : v % m ? m : v),
                            (this._lock = 1),
                            (this.render(d || (z ? 0 : Vt(b * T)), u, !m)._lock = 0),
                            (this._tTime = v),
                            !u && this.parent && Fn(this, 'onRepeat'),
                            this.vars.repeatRefresh && !z && (this.invalidate()._lock = 1),
                            (d && d !== this._time) ||
                                O !== !this._ts ||
                                (this.vars.onRepeat && !this.parent && !this._act))
                        )
                            return this;
                        if (
                            ((m = this._dur),
                            (p = this._tDur),
                            P &&
                                ((this._lock = 2),
                                (d = U ? m : -1e-4),
                                this.render(d, !0),
                                this.vars.repeatRefresh && !z && this.invalidate()),
                            (this._lock = 0),
                            !this._ts && !O)
                        )
                            return this;
                        u1(this, z);
                    }
                }
                if (
                    (this._hasPause &&
                        !this._forcing &&
                        this._lock < 2 &&
                        ((L = BT(this, Vt(d), Vt(S))), L && (v -= S - (S = L._start))),
                    (this._tTime = v),
                    (this._time = S),
                    (this._act = !D),
                    this._initted ||
                        ((this._onUpdate = this.vars.onUpdate), (this._initted = 1), (this._zTime = s), (d = 0)),
                    !d && v && !u && !C && (Fn(this, 'onStart'), this._tTime !== v))
                )
                    return this;
                if (S >= d && s >= 0)
                    for (g = this._first; g; ) {
                        if (((x = g._next), (g._act || S >= g._start) && g._ts && L !== g)) {
                            if (g.parent !== this) return this.render(s, u, f);
                            if (
                                (g.render(
                                    g._ts > 0
                                        ? (S - g._start) * g._ts
                                        : (g._dirty ? g.totalDuration() : g._tDur) + (S - g._start) * g._ts,
                                    u,
                                    f,
                                ),
                                S !== this._time || (!this._ts && !O))
                            ) {
                                ((L = 0), x && (v += this._zTime = -pt));
                                break;
                            }
                        }
                        g = x;
                    }
                else {
                    g = this._last;
                    for (var se = s < 0 ? s : S; g; ) {
                        if (((x = g._prev), (g._act || se <= g._end) && g._ts && L !== g)) {
                            if (g.parent !== this) return this.render(s, u, f);
                            if (
                                (g.render(
                                    g._ts > 0
                                        ? (se - g._start) * g._ts
                                        : (g._dirty ? g.totalDuration() : g._tDur) + (se - g._start) * g._ts,
                                    u,
                                    f || (on && bp(g)),
                                ),
                                S !== this._time || (!this._ts && !O))
                            ) {
                                ((L = 0), x && (v += this._zTime = se ? -pt : pt));
                                break;
                            }
                        }
                        g = x;
                    }
                }
                if (L && !u && (this.pause(), (L.render(S >= d ? 0 : -pt)._zTime = S >= d ? 1 : -1), this._ts))
                    return ((this._start = k), uf(this), this.render(s, u, f));
                (this._onUpdate && !u && Fn(this, 'onUpdate', !0),
                    ((v === p && this._tTime >= this.totalDuration()) || (!v && d)) &&
                        (k === this._start || Math.abs(D) !== Math.abs(this._ts)) &&
                        (this._lock ||
                            ((s || !m) && ((v === p && this._ts > 0) || (!v && this._ts < 0)) && gr(this, 1),
                            !u &&
                                !(s < 0 && !d) &&
                                (v || d || !p) &&
                                (Fn(this, v === p && s >= 0 ? 'onComplete' : 'onReverseComplete', !0),
                                this._prom && !(v < p && this.timeScale() > 0) && this._prom()))));
            }
            return this;
        }),
        (r.add = function (s, u) {
            var f = this;
            if ((Al(u) || (u = gi(this, u, s)), !(s instanceof zs))) {
                if (gn(s))
                    return (
                        s.forEach(function (d) {
                            return f.add(d, u);
                        }),
                        this
                    );
                if (It(s)) return this.addLabel(s, u);
                if (Rt(s)) s = qt.delayedCall(0, s);
                else return this;
            }
            return this !== s ? Yi(this, s, u) : this;
        }),
        (r.getChildren = function (s, u, f, d) {
            (s === void 0 && (s = !0), u === void 0 && (u = !0), f === void 0 && (f = !0), d === void 0 && (d = -vi));
            for (var p = [], m = this._first; m; )
                (m._start >= d &&
                    (m instanceof qt
                        ? u && p.push(m)
                        : (f && p.push(m), s && p.push.apply(p, m.getChildren(!0, u, f)))),
                    (m = m._next));
            return p;
        }),
        (r.getById = function (s) {
            for (var u = this.getChildren(1, 1, 1), f = u.length; f--; ) if (u[f].vars.id === s) return u[f];
        }),
        (r.remove = function (s) {
            return It(s)
                ? this.removeLabel(s)
                : Rt(s)
                  ? this.killTweensOf(s)
                  : (s.parent === this && sf(this, s), s === this._recent && (this._recent = this._last), $r(this));
        }),
        (r.totalTime = function (s, u) {
            return arguments.length
                ? ((this._forcing = 1),
                  !this._dp &&
                      this._ts &&
                      (this._start = Vt(
                          Kn.time - (this._ts > 0 ? s / this._ts : (this.totalDuration() - s) / -this._ts),
                      )),
                  i.prototype.totalTime.call(this, s, u),
                  (this._forcing = 0),
                  this)
                : this._tTime;
        }),
        (r.addLabel = function (s, u) {
            return ((this.labels[s] = gi(this, u)), this);
        }),
        (r.removeLabel = function (s) {
            return (delete this.labels[s], this);
        }),
        (r.addPause = function (s, u, f) {
            var d = qt.delayedCall(0, u || Cs, f);
            return ((d.data = 'isPause'), (this._hasPause = 1), Yi(this, d, gi(this, s)));
        }),
        (r.removePause = function (s) {
            var u = this._first;
            for (s = gi(this, s); u; ) (u._start === s && u.data === 'isPause' && gr(u), (u = u._next));
        }),
        (r.killTweensOf = function (s, u, f) {
            for (var d = this.getTweensOf(s, f), p = d.length; p--; ) cr !== d[p] && d[p].kill(s, u);
            return this;
        }),
        (r.getTweensOf = function (s, u) {
            for (var f = [], d = yi(s), p = this._first, m = Al(u), v; p; )
                (p instanceof qt
                    ? RT(p._targets, d) &&
                      (m
                          ? (!cr || (p._initted && p._ts)) &&
                            p.globalTime(0) <= u &&
                            p.globalTime(p.totalDuration()) > u
                          : !u || p.isActive()) &&
                      f.push(p)
                    : (v = p.getTweensOf(d, u)).length && f.push.apply(f, v),
                    (p = p._next));
            return f;
        }),
        (r.tweenTo = function (s, u) {
            u = u || {};
            var f = this,
                d = gi(f, s),
                p = u,
                m = p.startAt,
                v = p.onStart,
                y = p.onStartParams,
                S = p.immediateRender,
                g,
                x = qt.to(
                    f,
                    ni(
                        {
                            ease: u.ease || 'none',
                            lazy: !1,
                            immediateRender: !1,
                            time: d,
                            overwrite: 'auto',
                            duration:
                                u.duration ||
                                Math.abs((d - (m && 'time' in m ? m.time : f._time)) / f.timeScale()) ||
                                pt,
                            onStart: function () {
                                if ((f.pause(), !g)) {
                                    var T =
                                        u.duration ||
                                        Math.abs((d - (m && 'time' in m ? m.time : f._time)) / f.timeScale());
                                    (x._dur !== T && uo(x, T, 0, 1).render(x._time, !0, !0), (g = 1));
                                }
                                v && v.apply(x, y || []);
                            },
                        },
                        u,
                    ),
                );
            return S ? x.render(0) : x;
        }),
        (r.tweenFromTo = function (s, u, f) {
            return this.tweenTo(u, ni({ startAt: { time: gi(this, s) } }, f));
        }),
        (r.recent = function () {
            return this._recent;
        }),
        (r.nextLabel = function (s) {
            return (s === void 0 && (s = this._time), r_(this, gi(this, s)));
        }),
        (r.previousLabel = function (s) {
            return (s === void 0 && (s = this._time), r_(this, gi(this, s), 1));
        }),
        (r.currentLabel = function (s) {
            return arguments.length ? this.seek(s, !0) : this.previousLabel(this._time + pt);
        }),
        (r.shiftChildren = function (s, u, f) {
            f === void 0 && (f = 0);
            for (var d = this._first, p = this.labels, m; d; )
                (d._start >= f && ((d._start += s), (d._end += s)), (d = d._next));
            if (u) for (m in p) p[m] >= f && (p[m] += s);
            return $r(this);
        }),
        (r.invalidate = function (s) {
            var u = this._first;
            for (this._lock = 0; u; ) (u.invalidate(s), (u = u._next));
            return i.prototype.invalidate.call(this, s);
        }),
        (r.clear = function (s) {
            s === void 0 && (s = !0);
            for (var u = this._first, f; u; ) ((f = u._next), this.remove(u), (u = f));
            return (this._dp && (this._time = this._tTime = this._pTime = 0), s && (this.labels = {}), $r(this));
        }),
        (r.totalDuration = function (s) {
            var u = 0,
                f = this,
                d = f._last,
                p = vi,
                m,
                v,
                y;
            if (arguments.length)
                return f.timeScale((f._repeat < 0 ? f.duration() : f.totalDuration()) / (f.reversed() ? -s : s));
            if (f._dirty) {
                for (y = f.parent; d; )
                    ((m = d._prev),
                        d._dirty && d.totalDuration(),
                        (v = d._start),
                        v > p && f._sort && d._ts && !f._lock
                            ? ((f._lock = 1), (Yi(f, d, v - d._delay, 1)._lock = 0))
                            : (p = v),
                        v < 0 &&
                            d._ts &&
                            ((u -= v),
                            ((!y && !f._dp) || (y && y.smoothChildTiming)) &&
                                ((f._start += v / f._ts), (f._time -= v), (f._tTime -= v)),
                            f.shiftChildren(-v, !1, -1 / 0),
                            (p = 0)),
                        d._end > u && d._ts && (u = d._end),
                        (d = m));
                (uo(f, f === Tt && f._time > u ? f._time : u, 1, 1), (f._dirty = 0));
            }
            return f._tDur;
        }),
        (n.updateRoot = function (s) {
            if ((Tt._ts && (qb(Tt, Gc(s, Tt)), (Gb = Kn.frame)), Kn.frame >= t_)) {
                t_ += Jn.autoSleep || 120;
                var u = Tt._first;
                if ((!u || !u._ts) && Jn.autoSleep && Kn._listeners.length < 2) {
                    for (; u && !u._ts; ) u = u._next;
                    u || Kn.sleep();
                }
            }
        }),
        n
    );
})(zs);
ni(_n.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var eA = function (n, r, a, s, u, f, d) {
        var p = new Nn(this._pt, n, r, 0, 1, v1, null, u),
            m = 0,
            v = 0,
            y,
            S,
            g,
            x,
            b,
            T,
            O,
            L;
        for (
            p.b = a,
                p.e = s,
                a += '',
                s += '',
                (O = ~s.indexOf('random(')) && (s = Ds(s)),
                f && ((L = [a, s]), f(L, n, r), (a = L[0]), (s = L[1])),
                S = a.match(Ph) || [];
            (y = Ph.exec(s));
        )
            ((x = y[0]),
                (b = s.substring(m, y.index)),
                g ? (g = (g + 1) % 5) : b.substr(-5) === 'rgba(' && (g = 1),
                x !== S[v++] &&
                    ((T = parseFloat(S[v - 1]) || 0),
                    (p._pt = {
                        _next: p._pt,
                        p: b || v === 1 ? b : ',',
                        s: T,
                        c: x.charAt(1) === '=' ? Ja(T, x) - T : parseFloat(x) - T,
                        m: g && g < 4 ? Math.round : 0,
                    }),
                    (m = Ph.lastIndex)));
        return (
            (p.c = m < s.length ? s.substring(m, s.length) : ''),
            (p.fp = d),
            (Ub.test(s) || O) && (p.e = 0),
            (this._pt = p),
            p
        );
    },
    Sp = function (n, r, a, s, u, f, d, p, m, v) {
        Rt(s) && (s = s(u || 0, n, f));
        var y = n[r],
            S =
                a !== 'get'
                    ? a
                    : Rt(y)
                      ? m
                          ? n[r.indexOf('set') || !Rt(n['get' + r.substr(3)]) ? r : 'get' + r.substr(3)](m)
                          : n[r]()
                      : y,
            g = Rt(y) ? (m ? rA : p1) : wp,
            x;
        if (
            (It(s) &&
                (~s.indexOf('random(') && (s = Ds(s)),
                s.charAt(1) === '=' && ((x = Ja(S, s) + (pn(S) || 0)), (x || x === 0) && (s = x))),
            !v || S !== s || Rm)
        )
            return !isNaN(S * s) && s !== ''
                ? ((x = new Nn(this._pt, n, r, +S || 0, s - (S || 0), typeof y == 'boolean' ? oA : g1, 0, g)),
                  m && (x.fp = m),
                  d && x.modifier(d, this, n),
                  (this._pt = x))
                : (!y && !(r in n) && gp(r, s), eA.call(this, n, r, S, s, g, p || Jn.stringFilter, m));
    },
    tA = function (n, r, a, s, u) {
        if ((Rt(n) && (n = Es(n, u, r, a, s)), !Pi(n) || (n.style && n.nodeType) || gn(n) || Lb(n)))
            return It(n) ? Es(n, u, r, a, s) : n;
        var f = {},
            d;
        for (d in n) f[d] = Es(n[d], u, r, a, s);
        return f;
    },
    d1 = function (n, r, a, s, u, f) {
        var d, p, m, v;
        if (
            Qn[n] &&
            (d = new Qn[n]()).init(u, d.rawVars ? r[n] : tA(r[n], s, u, f, a), a, s, f) !== !1 &&
            ((a._pt = p = new Nn(a._pt, u, n, 0, 1, d.render, d, 0, d.priority)), a !== Ia)
        )
            for (m = a._ptLookup[a._targets.indexOf(u)], v = d._props.length; v--; ) m[d._props[v]] = p;
        return d;
    },
    cr,
    Rm,
    xp = function i(n, r, a) {
        var s = n.vars,
            u = s.ease,
            f = s.startAt,
            d = s.immediateRender,
            p = s.lazy,
            m = s.onUpdate,
            v = s.runBackwards,
            y = s.yoyoEase,
            S = s.keyframes,
            g = s.autoRevert,
            x = n._dur,
            b = n._startAt,
            T = n._targets,
            O = n.parent,
            L = O && O.data === 'nested' ? O.vars.targets : T,
            D = n._overwrite === 'auto' && !dp,
            k = n.timeline,
            C,
            X,
            z,
            U,
            P,
            se,
            W,
            de,
            ue,
            ne,
            I,
            A,
            B;
        if (
            (k && (!S || !u) && (u = 'none'),
            (n._ease = Fr(u, ao.ease)),
            (n._yEase = y ? s1(Fr(y === !0 ? u : y, ao.ease)) : 0),
            y && n._yoyo && !n._repeat && ((y = n._yEase), (n._yEase = n._ease), (n._ease = y)),
            (n._from = !k && !!s.runBackwards),
            !k || (S && !s.stagger))
        ) {
            if (
                ((de = T[0] ? Kr(T[0]).harness : 0),
                (A = de && s[de.prop]),
                (C = Yc(s, vp)),
                b &&
                    (b._zTime < 0 && b.progress(1),
                    r < 0 && v && d && !g ? b.render(-1, !0) : b.revert(v && x ? Ac : CT),
                    (b._lazy = 0)),
                f)
            ) {
                if (
                    (gr(
                        (n._startAt = qt.set(
                            T,
                            ni(
                                {
                                    data: 'isStart',
                                    overwrite: !1,
                                    parent: O,
                                    immediateRender: !0,
                                    lazy: !b && Rn(p),
                                    startAt: null,
                                    delay: 0,
                                    onUpdate:
                                        m &&
                                        function () {
                                            return Fn(n, 'onUpdate');
                                        },
                                    stagger: 0,
                                },
                                f,
                            ),
                        )),
                    ),
                    (n._startAt._dp = 0),
                    (n._startAt._sat = n),
                    r < 0 && (on || (!d && !g)) && n._startAt.revert(Ac),
                    d && x && r <= 0 && a <= 0)
                ) {
                    r && (n._zTime = r);
                    return;
                }
            } else if (v && x && !b) {
                if (
                    (r && (d = !1),
                    (z = ni(
                        {
                            overwrite: !1,
                            data: 'isFromStart',
                            lazy: d && !b && Rn(p),
                            immediateRender: d,
                            stagger: 0,
                            parent: O,
                        },
                        C,
                    )),
                    A && (z[de.prop] = A),
                    gr((n._startAt = qt.set(T, z))),
                    (n._startAt._dp = 0),
                    (n._startAt._sat = n),
                    r < 0 && (on ? n._startAt.revert(Ac) : n._startAt.render(-1, !0)),
                    (n._zTime = r),
                    !d)
                )
                    i(n._startAt, pt, pt);
                else if (!r) return;
            }
            for (n._pt = n._ptCache = 0, p = (x && Rn(p)) || (p && !x), X = 0; X < T.length; X++) {
                if (
                    ((P = T[X]),
                    (W = P._gsap || _p(T)[X]._gsap),
                    (n._ptLookup[X] = ne = {}),
                    Tm[W.id] && mr.length && Hc(),
                    (I = L === T ? X : L.indexOf(P)),
                    de &&
                        (ue = new de()).init(P, A || C, n, I, L) !== !1 &&
                        ((n._pt = U = new Nn(n._pt, P, ue.name, 0, 1, ue.render, ue, 0, ue.priority)),
                        ue._props.forEach(function (R) {
                            ne[R] = U;
                        }),
                        ue.priority && (se = 1)),
                    !de || A)
                )
                    for (z in C)
                        Qn[z] && (ue = d1(z, C, n, I, P, L))
                            ? ue.priority && (se = 1)
                            : (ne[z] = U = Sp.call(n, P, z, 'get', C[z], I, L, 0, s.stringFilter));
                (n._op && n._op[X] && n.kill(P, n._op[X]),
                    D && n._pt && ((cr = n), Tt.killTweensOf(P, ne, n.globalTime(r)), (B = !n.parent), (cr = 0)),
                    n._pt && p && (Tm[W.id] = 1));
            }
            (se && y1(n), n._onInit && n._onInit(n));
        }
        ((n._onUpdate = m), (n._initted = (!n._op || n._pt) && !B), S && r <= 0 && k.render(vi, !0, !0));
    },
    nA = function (n, r, a, s, u, f, d, p) {
        var m = ((n._pt && n._ptCache) || (n._ptCache = {}))[r],
            v,
            y,
            S,
            g;
        if (!m)
            for (m = n._ptCache[r] = [], S = n._ptLookup, g = n._targets.length; g--; ) {
                if (((v = S[g][r]), v && v.d && v.d._pt)) for (v = v.d._pt; v && v.p !== r && v.fp !== r; ) v = v._next;
                if (!v)
                    return (
                        (Rm = 1),
                        (n.vars[r] = '+=0'),
                        xp(n, d),
                        (Rm = 0),
                        p ? Os(r + ' not eligible for reset') : 1
                    );
                m.push(v);
            }
        for (g = m.length; g--; )
            ((y = m[g]),
                (v = y._pt || y),
                (v.s = (s || s === 0) && !u ? s : v.s + (s || 0) + f * v.c),
                (v.c = a - v.s),
                y.e && (y.e = kt(a) + pn(y.e)),
                y.b && (y.b = v.s + pn(y.b)));
    },
    iA = function (n, r) {
        var a = n[0] ? Kr(n[0]).harness : 0,
            s = a && a.aliases,
            u,
            f,
            d,
            p;
        if (!s) return r;
        u = oo({}, r);
        for (f in s) if (f in u) for (p = s[f].split(','), d = p.length; d--; ) u[p[d]] = u[f];
        return u;
    },
    lA = function (n, r, a, s) {
        var u = r.ease || s || 'power1.inOut',
            f,
            d;
        if (gn(r))
            ((d = a[n] || (a[n] = [])),
                r.forEach(function (p, m) {
                    return d.push({ t: (m / (r.length - 1)) * 100, v: p, e: u });
                }));
        else for (f in r) ((d = a[f] || (a[f] = [])), f === 'ease' || d.push({ t: parseFloat(n), v: r[f], e: u }));
    },
    Es = function (n, r, a, s, u) {
        return Rt(n) ? n.call(r, a, s, u) : It(n) && ~n.indexOf('random(') ? Ds(n) : n;
    },
    h1 = yp + 'repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert',
    m1 = {};
zn(h1 + ',id,stagger,delay,duration,paused,scrollTrigger', function (i) {
    return (m1[i] = 1);
});
var qt = (function (i) {
    zb(n, i);
    function n(a, s, u, f) {
        var d;
        (typeof s == 'number' && ((u.duration = s), (s = u), (u = null)), (d = i.call(this, f ? s : xs(s)) || this));
        var p = d.vars,
            m = p.duration,
            v = p.delay,
            y = p.immediateRender,
            S = p.stagger,
            g = p.overwrite,
            x = p.keyframes,
            b = p.defaults,
            T = p.scrollTrigger,
            O = p.yoyoEase,
            L = s.parent || Tt,
            D = (gn(a) || Lb(a) ? Al(a[0]) : 'length' in s) ? [a] : yi(a),
            k,
            C,
            X,
            z,
            U,
            P,
            se,
            W;
        if (
            ((d._targets = D.length
                ? _p(D)
                : Os('GSAP target ' + a + ' not found. https://gsap.com', !Jn.nullTargetWarn) || []),
            (d._ptLookup = []),
            (d._overwrite = g),
            x || S || hc(m) || hc(v))
        ) {
            if (
                ((s = d.vars),
                (k = d.timeline =
                    new _n({
                        data: 'nested',
                        defaults: b || {},
                        targets: L && L.data === 'nested' ? L.vars.targets : D,
                    })),
                k.kill(),
                (k.parent = k._dp = bl(d)),
                (k._start = 0),
                S || hc(m) || hc(v))
            ) {
                if (((z = D.length), (se = S && Jb(S)), Pi(S)))
                    for (U in S) ~h1.indexOf(U) && (W || (W = {}), (W[U] = S[U]));
                for (C = 0; C < z; C++)
                    ((X = Yc(s, m1)),
                        (X.stagger = 0),
                        O && (X.yoyoEase = O),
                        W && oo(X, W),
                        (P = D[C]),
                        (X.duration = +Es(m, bl(d), C, P, D)),
                        (X.delay = (+Es(v, bl(d), C, P, D) || 0) - d._delay),
                        !S && z === 1 && X.delay && ((d._delay = v = X.delay), (d._start += v), (X.delay = 0)),
                        k.to(P, X, se ? se(C, P, D) : 0),
                        (k._ease = Fe.none));
                k.duration() ? (m = v = 0) : (d.timeline = 0);
            } else if (x) {
                (xs(ni(k.vars.defaults, { ease: 'none' })), (k._ease = Fr(x.ease || s.ease || 'none')));
                var de = 0,
                    ue,
                    ne,
                    I;
                if (gn(x))
                    (x.forEach(function (A) {
                        return k.to(D, A, '>');
                    }),
                        k.duration());
                else {
                    X = {};
                    for (U in x) U === 'ease' || U === 'easeEach' || lA(U, x[U], X, x.easeEach);
                    for (U in X)
                        for (
                            ue = X[U].sort(function (A, B) {
                                return A.t - B.t;
                            }),
                                de = 0,
                                C = 0;
                            C < ue.length;
                            C++
                        )
                            ((ne = ue[C]),
                                (I = { ease: ne.e, duration: ((ne.t - (C ? ue[C - 1].t : 0)) / 100) * m }),
                                (I[U] = ne.v),
                                k.to(D, I, de),
                                (de += I.duration));
                    k.duration() < m && k.to({}, { duration: m - k.duration() });
                }
            }
            m || d.duration((m = k.duration()));
        } else d.timeline = 0;
        return (
            g === !0 && !dp && ((cr = bl(d)), Tt.killTweensOf(D), (cr = 0)),
            Yi(L, bl(d), u),
            s.reversed && d.reverse(),
            s.paused && d.paused(!0),
            (y || (!m && !x && d._start === Vt(L._time) && Rn(y) && kT(bl(d)) && L.data !== 'nested')) &&
                ((d._tTime = -pt), d.render(Math.max(0, -v) || 0)),
            T && Kb(bl(d), T),
            d
        );
    }
    var r = n.prototype;
    return (
        (r.render = function (s, u, f) {
            var d = this._time,
                p = this._tDur,
                m = this._dur,
                v = s < 0,
                y = s > p - pt && !v ? p : s < pt ? 0 : s,
                S,
                g,
                x,
                b,
                T,
                O,
                L,
                D,
                k;
            if (!m) jT(this, s, u, f);
            else if (
                y !== this._tTime ||
                !s ||
                f ||
                (!this._initted && this._tTime) ||
                (this._startAt && this._zTime < 0 !== v) ||
                this._lazy
            ) {
                if (((S = y), (D = this.timeline), this._repeat)) {
                    if (((b = m + this._rDelay), this._repeat < -1 && v)) return this.totalTime(b * 100 + s, u, f);
                    if (
                        ((S = Vt(y % b)),
                        y === p
                            ? ((x = this._repeat), (S = m))
                            : ((T = Vt(y / b)), (x = ~~T), x && x === T ? ((S = m), x--) : S > m && (S = m)),
                        (O = this._yoyo && x & 1),
                        O && ((k = this._yEase), (S = m - S)),
                        (T = so(this._tTime, b)),
                        S === d && !f && this._initted && x === T)
                    )
                        return ((this._tTime = y), this);
                    x !== T &&
                        (D && this._yEase && u1(D, O),
                        this.vars.repeatRefresh &&
                            !O &&
                            !this._lock &&
                            S !== b &&
                            this._initted &&
                            ((this._lock = f = 1), (this.render(Vt(b * x), !0).invalidate()._lock = 0)));
                }
                if (!this._initted) {
                    if ($b(this, v ? s : S, f, u, y)) return ((this._tTime = 0), this);
                    if (d !== this._time && !(f && this.vars.repeatRefresh && x !== T)) return this;
                    if (m !== this._dur) return this.render(s, u, f);
                }
                if (
                    ((this._tTime = y),
                    (this._time = S),
                    !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                    (this.ratio = L = (k || this._ease)(S / m)),
                    this._from && (this.ratio = L = 1 - L),
                    !d && y && !u && !T && (Fn(this, 'onStart'), this._tTime !== y))
                )
                    return this;
                for (g = this._pt; g; ) (g.r(L, g.d), (g = g._next));
                ((D && D.render(s < 0 ? s : D._dur * D._ease(S / this._dur), u, f)) ||
                    (this._startAt && (this._zTime = s)),
                    this._onUpdate && !u && (v && Am(this, s, u, f), Fn(this, 'onUpdate')),
                    this._repeat && x !== T && this.vars.onRepeat && !u && this.parent && Fn(this, 'onRepeat'),
                    (y === this._tDur || !y) &&
                        this._tTime === y &&
                        (v && !this._onUpdate && Am(this, s, !0, !0),
                        (s || !m) && ((y === this._tDur && this._ts > 0) || (!y && this._ts < 0)) && gr(this, 1),
                        !u &&
                            !(v && !d) &&
                            (y || d || O) &&
                            (Fn(this, y === p ? 'onComplete' : 'onReverseComplete', !0),
                            this._prom && !(y < p && this.timeScale() > 0) && this._prom())));
            }
            return this;
        }),
        (r.targets = function () {
            return this._targets;
        }),
        (r.invalidate = function (s) {
            return (
                (!s || !this.vars.runBackwards) && (this._startAt = 0),
                (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
                (this._ptLookup = []),
                this.timeline && this.timeline.invalidate(s),
                i.prototype.invalidate.call(this, s)
            );
        }),
        (r.resetTo = function (s, u, f, d, p) {
            (Rs || Kn.wake(), this._ts || this.play());
            var m = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
                v;
            return (
                this._initted || xp(this, m),
                (v = this._ease(m / this._dur)),
                nA(this, s, u, f, d, v, m, p)
                    ? this.resetTo(s, u, f, d, 1)
                    : (cf(this, 0),
                      this.parent || Qb(this._dp, this, '_first', '_last', this._dp._sort ? '_start' : 0),
                      this.render(0))
            );
        }),
        (r.kill = function (s, u) {
            if ((u === void 0 && (u = 'all'), !s && (!u || u === 'all')))
                return (
                    (this._lazy = this._pt = 0),
                    this.parent ? ps(this) : this.scrollTrigger && this.scrollTrigger.kill(!!on),
                    this
                );
            if (this.timeline) {
                var f = this.timeline.totalDuration();
                return (
                    this.timeline.killTweensOf(s, u, cr && cr.vars.overwrite !== !0)._first || ps(this),
                    this.parent &&
                        f !== this.timeline.totalDuration() &&
                        uo(this, (this._dur * this.timeline._tDur) / f, 0, 1),
                    this
                );
            }
            var d = this._targets,
                p = s ? yi(s) : d,
                m = this._ptLookup,
                v = this._pt,
                y,
                S,
                g,
                x,
                b,
                T,
                O;
            if ((!u || u === 'all') && NT(d, p)) return (u === 'all' && (this._pt = 0), ps(this));
            for (
                y = this._op = this._op || [],
                    u !== 'all' &&
                        (It(u) &&
                            ((b = {}),
                            zn(u, function (L) {
                                return (b[L] = 1);
                            }),
                            (u = b)),
                        (u = iA(d, u))),
                    O = d.length;
                O--;
            )
                if (~p.indexOf(d[O])) {
                    ((S = m[O]), u === 'all' ? ((y[O] = u), (x = S), (g = {})) : ((g = y[O] = y[O] || {}), (x = u)));
                    for (b in x)
                        ((T = S && S[b]),
                            T && ((!('kill' in T.d) || T.d.kill(b) === !0) && sf(this, T, '_pt'), delete S[b]),
                            g !== 'all' && (g[b] = 1));
                }
            return (this._initted && !this._pt && v && ps(this), this);
        }),
        (n.to = function (s, u) {
            return new n(s, u, arguments[2]);
        }),
        (n.from = function (s, u) {
            return ws(1, arguments);
        }),
        (n.delayedCall = function (s, u, f, d) {
            return new n(u, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: s,
                onComplete: u,
                onReverseComplete: u,
                onCompleteParams: f,
                onReverseCompleteParams: f,
                callbackScope: d,
            });
        }),
        (n.fromTo = function (s, u, f) {
            return ws(2, arguments);
        }),
        (n.set = function (s, u) {
            return ((u.duration = 0), u.repeatDelay || (u.repeat = 0), new n(s, u));
        }),
        (n.killTweensOf = function (s, u, f) {
            return Tt.killTweensOf(s, u, f);
        }),
        n
    );
})(zs);
ni(qt.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
zn('staggerTo,staggerFrom,staggerFromTo', function (i) {
    qt[i] = function () {
        var n = new _n(),
            r = Om.call(arguments, 0);
        return (r.splice(i === 'staggerFromTo' ? 5 : 4, 0, 0), n[i].apply(n, r));
    };
});
var wp = function (n, r, a) {
        return (n[r] = a);
    },
    p1 = function (n, r, a) {
        return n[r](a);
    },
    rA = function (n, r, a, s) {
        return n[r](s.fp, a);
    },
    aA = function (n, r, a) {
        return n.setAttribute(r, a);
    },
    Ep = function (n, r) {
        return Rt(n[r]) ? p1 : hp(n[r]) && n.setAttribute ? aA : wp;
    },
    g1 = function (n, r) {
        return r.set(r.t, r.p, Math.round((r.s + r.c * n) * 1e6) / 1e6, r);
    },
    oA = function (n, r) {
        return r.set(r.t, r.p, !!(r.s + r.c * n), r);
    },
    v1 = function (n, r) {
        var a = r._pt,
            s = '';
        if (!n && r.b) s = r.b;
        else if (n === 1 && r.e) s = r.e;
        else {
            for (; a; )
                ((s = a.p + (a.m ? a.m(a.s + a.c * n) : Math.round((a.s + a.c * n) * 1e4) / 1e4) + s), (a = a._next));
            s += r.c;
        }
        r.set(r.t, r.p, s, r);
    },
    Tp = function (n, r) {
        for (var a = r._pt; a; ) (a.r(n, a.d), (a = a._next));
    },
    sA = function (n, r, a, s) {
        for (var u = this._pt, f; u; ) ((f = u._next), u.p === s && u.modifier(n, r, a), (u = f));
    },
    uA = function (n) {
        for (var r = this._pt, a, s; r; )
            ((s = r._next), (r.p === n && !r.op) || r.op === n ? sf(this, r, '_pt') : r.dep || (a = 1), (r = s));
        return !a;
    },
    cA = function (n, r, a, s) {
        s.mSet(n, r, s.m.call(s.tween, a, s.mt), s);
    },
    y1 = function (n) {
        for (var r = n._pt, a, s, u, f; r; ) {
            for (a = r._next, s = u; s && s.pr > r.pr; ) s = s._next;
            ((r._prev = s ? s._prev : f) ? (r._prev._next = r) : (u = r),
                (r._next = s) ? (s._prev = r) : (f = r),
                (r = a));
        }
        n._pt = u;
    },
    Nn = (function () {
        function i(r, a, s, u, f, d, p, m, v) {
            ((this.t = a),
                (this.s = u),
                (this.c = f),
                (this.p = s),
                (this.r = d || g1),
                (this.d = p || this),
                (this.set = m || wp),
                (this.pr = v || 0),
                (this._next = r),
                r && (r._prev = this));
        }
        var n = i.prototype;
        return (
            (n.modifier = function (a, s, u) {
                ((this.mSet = this.mSet || this.set), (this.set = cA), (this.m = a), (this.mt = u), (this.tween = s));
            }),
            i
        );
    })();
zn(
    yp +
        'parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger',
    function (i) {
        return (vp[i] = 1);
    },
);
ti.TweenMax = ti.TweenLite = qt;
ti.TimelineLite = ti.TimelineMax = _n;
Tt = new _n({ sortChildren: !1, defaults: ao, autoRemoveChildren: !0, id: 'root', smoothChildTiming: !0 });
Jn.stringFilter = o1;
var Ir = [],
    Oc = {},
    fA = [],
    o_ = 0,
    dA = 0,
    Fh = function (n) {
        return (Oc[n] || fA).map(function (r) {
            return r();
        });
    },
    zm = function () {
        var n = Date.now(),
            r = [];
        n - o_ > 2 &&
            (Fh('matchMediaInit'),
            Ir.forEach(function (a) {
                var s = a.queries,
                    u = a.conditions,
                    f,
                    d,
                    p,
                    m;
                for (d in s) ((f = Hi.matchMedia(s[d]).matches), f && (p = 1), f !== u[d] && ((u[d] = f), (m = 1)));
                m && (a.revert(), p && r.push(a));
            }),
            Fh('matchMediaRevert'),
            r.forEach(function (a) {
                return a.onMatch(a, function (s) {
                    return a.add(null, s);
                });
            }),
            (o_ = n),
            Fh('matchMedia'));
    },
    _1 = (function () {
        function i(r, a) {
            ((this.selector = a && Cm(a)),
                (this.data = []),
                (this._r = []),
                (this.isReverted = !1),
                (this.id = dA++),
                r && this.add(r));
        }
        var n = i.prototype;
        return (
            (n.add = function (a, s, u) {
                Rt(a) && ((u = s), (s = a), (a = Rt));
                var f = this,
                    d = function () {
                        var m = wt,
                            v = f.selector,
                            y;
                        return (
                            m && m !== f && m.data.push(f),
                            u && (f.selector = Cm(u)),
                            (wt = f),
                            (y = s.apply(f, arguments)),
                            Rt(y) && f._r.push(y),
                            (wt = m),
                            (f.selector = v),
                            (f.isReverted = !1),
                            y
                        );
                    };
                return (
                    (f.last = d),
                    a === Rt
                        ? d(f, function (p) {
                              return f.add(null, p);
                          })
                        : a
                          ? (f[a] = d)
                          : d
                );
            }),
            (n.ignore = function (a) {
                var s = wt;
                ((wt = null), a(this), (wt = s));
            }),
            (n.getTweens = function () {
                var a = [];
                return (
                    this.data.forEach(function (s) {
                        return s instanceof i
                            ? a.push.apply(a, s.getTweens())
                            : s instanceof qt && !(s.parent && s.parent.data === 'nested') && a.push(s);
                    }),
                    a
                );
            }),
            (n.clear = function () {
                this._r.length = this.data.length = 0;
            }),
            (n.kill = function (a, s) {
                var u = this;
                if (
                    (a
                        ? (function () {
                              for (var d = u.getTweens(), p = u.data.length, m; p--; )
                                  ((m = u.data[p]),
                                      m.data === 'isFlip' &&
                                          (m.revert(),
                                          m.getChildren(!0, !0, !1).forEach(function (v) {
                                              return d.splice(d.indexOf(v), 1);
                                          })));
                              for (
                                  d
                                      .map(function (v) {
                                          return {
                                              g:
                                                  v._dur || v._delay || (v._sat && !v._sat.vars.immediateRender)
                                                      ? v.globalTime(0)
                                                      : -1 / 0,
                                              t: v,
                                          };
                                      })
                                      .sort(function (v, y) {
                                          return y.g - v.g || -1 / 0;
                                      })
                                      .forEach(function (v) {
                                          return v.t.revert(a);
                                      }),
                                      p = u.data.length;
                                  p--;
                              )
                                  ((m = u.data[p]),
                                      m instanceof _n
                                          ? m.data !== 'nested' &&
                                            (m.scrollTrigger && m.scrollTrigger.revert(), m.kill())
                                          : !(m instanceof qt) && m.revert && m.revert(a));
                              (u._r.forEach(function (v) {
                                  return v(a, u);
                              }),
                                  (u.isReverted = !0));
                          })()
                        : this.data.forEach(function (d) {
                              return d.kill && d.kill();
                          }),
                    this.clear(),
                    s)
                )
                    for (var f = Ir.length; f--; ) Ir[f].id === this.id && Ir.splice(f, 1);
            }),
            (n.revert = function (a) {
                this.kill(a || {});
            }),
            i
        );
    })(),
    hA = (function () {
        function i(r) {
            ((this.contexts = []), (this.scope = r), wt && wt.data.push(this));
        }
        var n = i.prototype;
        return (
            (n.add = function (a, s, u) {
                Pi(a) || (a = { matches: a });
                var f = new _1(0, u || this.scope),
                    d = (f.conditions = {}),
                    p,
                    m,
                    v;
                (wt && !f.selector && (f.selector = wt.selector),
                    this.contexts.push(f),
                    (s = f.add('onMatch', s)),
                    (f.queries = a));
                for (m in a)
                    m === 'all'
                        ? (v = 1)
                        : ((p = Hi.matchMedia(a[m])),
                          p &&
                              (Ir.indexOf(f) < 0 && Ir.push(f),
                              (d[m] = p.matches) && (v = 1),
                              p.addListener ? p.addListener(zm) : p.addEventListener('change', zm)));
                return (
                    v &&
                        s(f, function (y) {
                            return f.add(null, y);
                        }),
                    this
                );
            }),
            (n.revert = function (a) {
                this.kill(a || {});
            }),
            (n.kill = function (a) {
                this.contexts.forEach(function (s) {
                    return s.kill(a, !0);
                });
            }),
            i
        );
    })(),
    Xc = {
        registerPlugin: function () {
            for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
            r.forEach(function (s) {
                return l1(s);
            });
        },
        timeline: function (n) {
            return new _n(n);
        },
        getTweensOf: function (n, r) {
            return Tt.getTweensOf(n, r);
        },
        getProperty: function (n, r, a, s) {
            It(n) && (n = yi(n)[0]);
            var u = Kr(n || {}).get,
                f = a ? Pb : Vb;
            return (
                a === 'native' && (a = ''),
                n &&
                    (r
                        ? f(((Qn[r] && Qn[r].get) || u)(n, r, a, s))
                        : function (d, p, m) {
                              return f(((Qn[d] && Qn[d].get) || u)(n, d, p, m));
                          })
            );
        },
        quickSetter: function (n, r, a) {
            if (((n = yi(n)), n.length > 1)) {
                var s = n.map(function (v) {
                        return kn.quickSetter(v, r, a);
                    }),
                    u = s.length;
                return function (v) {
                    for (var y = u; y--; ) s[y](v);
                };
            }
            n = n[0] || {};
            var f = Qn[r],
                d = Kr(n),
                p = (d.harness && (d.harness.aliases || {})[r]) || r,
                m = f
                    ? function (v) {
                          var y = new f();
                          ((Ia._pt = 0), y.init(n, a ? v + a : v, Ia, 0, [n]), y.render(1, y), Ia._pt && Tp(1, Ia));
                      }
                    : d.set(n, p);
            return f
                ? m
                : function (v) {
                      return m(n, p, a ? v + a : v, d, 1);
                  };
        },
        quickTo: function (n, r, a) {
            var s,
                u = kn.to(n, ni(((s = {}), (s[r] = '+=0.1'), (s.paused = !0), (s.stagger = 0), s), a || {})),
                f = function (p, m, v) {
                    return u.resetTo(r, p, m, v);
                };
            return ((f.tween = u), f);
        },
        isTweening: function (n) {
            return Tt.getTweensOf(n, !0).length > 0;
        },
        defaults: function (n) {
            return (n && n.ease && (n.ease = Fr(n.ease, ao.ease)), n_(ao, n || {}));
        },
        config: function (n) {
            return n_(Jn, n || {});
        },
        registerEffect: function (n) {
            var r = n.name,
                a = n.effect,
                s = n.plugins,
                u = n.defaults,
                f = n.extendTimeline;
            ((s || '').split(',').forEach(function (d) {
                return d && !Qn[d] && !ti[d] && Os(r + ' effect requires ' + d + ' plugin.');
            }),
                (Qh[r] = function (d, p, m) {
                    return a(yi(d), ni(p || {}, u), m);
                }),
                f &&
                    (_n.prototype[r] = function (d, p, m) {
                        return this.add(Qh[r](d, Pi(p) ? p : (m = p) && {}, this), m);
                    }));
        },
        registerEase: function (n, r) {
            Fe[n] = Fr(r);
        },
        parseEase: function (n, r) {
            return arguments.length ? Fr(n, r) : Fe;
        },
        getById: function (n) {
            return Tt.getById(n);
        },
        exportRoot: function (n, r) {
            n === void 0 && (n = {});
            var a = new _n(n),
                s,
                u;
            for (
                a.smoothChildTiming = Rn(n.smoothChildTiming),
                    Tt.remove(a),
                    a._dp = 0,
                    a._time = a._tTime = Tt._time,
                    s = Tt._first;
                s;
            )
                ((u = s._next),
                    (r || !(!s._dur && s instanceof qt && s.vars.onComplete === s._targets[0])) &&
                        Yi(a, s, s._start - s._delay),
                    (s = u));
            return (Yi(Tt, a, 0), a);
        },
        context: function (n, r) {
            return n ? new _1(n, r) : wt;
        },
        matchMedia: function (n) {
            return new hA(n);
        },
        matchMediaRefresh: function () {
            return (
                Ir.forEach(function (n) {
                    var r = n.conditions,
                        a,
                        s;
                    for (s in r) r[s] && ((r[s] = !1), (a = 1));
                    a && n.revert();
                }) || zm()
            );
        },
        addEventListener: function (n, r) {
            var a = Oc[n] || (Oc[n] = []);
            ~a.indexOf(r) || a.push(r);
        },
        removeEventListener: function (n, r) {
            var a = Oc[n],
                s = a && a.indexOf(r);
            s >= 0 && a.splice(s, 1);
        },
        utils: {
            wrap: PT,
            wrapYoyo: QT,
            distribute: Jb,
            random: e1,
            snap: Wb,
            normalize: VT,
            getUnit: pn,
            clamp: YT,
            splitColor: r1,
            toArray: yi,
            selector: Cm,
            mapRange: n1,
            pipe: XT,
            unitize: qT,
            interpolate: ZT,
            shuffle: Ib,
        },
        install: Hb,
        effects: Qh,
        ticker: Kn,
        updateRoot: _n.updateRoot,
        plugins: Qn,
        globalTimeline: Tt,
        core: {
            PropTween: Nn,
            globals: Yb,
            Tween: qt,
            Timeline: _n,
            Animation: zs,
            getCache: Kr,
            _removeLinkedListItem: sf,
            reverting: function () {
                return on;
            },
            context: function (n) {
                return (n && wt && (wt.data.push(n), (n._ctx = wt)), wt);
            },
            suppressOverwrites: function (n) {
                return (dp = n);
            },
        },
    };
zn('to,from,fromTo,delayedCall,set,killTweensOf', function (i) {
    return (Xc[i] = qt[i]);
});
Kn.add(_n.updateRoot);
Ia = Xc.to({}, { duration: 0 });
var mA = function (n, r) {
        for (var a = n._pt; a && a.p !== r && a.op !== r && a.fp !== r; ) a = a._next;
        return a;
    },
    pA = function (n, r) {
        var a = n._targets,
            s,
            u,
            f;
        for (s in r)
            for (u = a.length; u--; )
                ((f = n._ptLookup[u][s]),
                    f && (f = f.d) && (f._pt && (f = mA(f, s)), f && f.modifier && f.modifier(r[s], n, a[u], s)));
    },
    Ih = function (n, r) {
        return {
            name: n,
            headless: 1,
            rawVars: 1,
            init: function (s, u, f) {
                f._onInit = function (d) {
                    var p, m;
                    if (
                        (It(u) &&
                            ((p = {}),
                            zn(u, function (v) {
                                return (p[v] = 1);
                            }),
                            (u = p)),
                        r)
                    ) {
                        p = {};
                        for (m in u) p[m] = r(u[m]);
                        u = p;
                    }
                    pA(d, u);
                };
            },
        };
    },
    kn =
        Xc.registerPlugin(
            {
                name: 'attr',
                init: function (n, r, a, s, u) {
                    var f, d, p;
                    this.tween = a;
                    for (f in r)
                        ((p = n.getAttribute(f) || ''),
                            (d = this.add(n, 'setAttribute', (p || 0) + '', r[f], s, u, 0, 0, f)),
                            (d.op = f),
                            (d.b = p),
                            this._props.push(f));
                },
                render: function (n, r) {
                    for (var a = r._pt; a; ) (on ? a.set(a.t, a.p, a.b, a) : a.r(n, a.d), (a = a._next));
                },
            },
            {
                name: 'endArray',
                headless: 1,
                init: function (n, r) {
                    for (var a = r.length; a--; ) this.add(n, a, n[a] || 0, r[a], 0, 0, 0, 0, 0, 1);
                },
            },
            Ih('roundProps', Dm),
            Ih('modifiers'),
            Ih('snap', Wb),
        ) || Xc;
qt.version = _n.version = kn.version = '3.13.0';
Bb = 1;
mp() && co();
Fe.Power0;
Fe.Power1;
Fe.Power2;
Fe.Power3;
Fe.Power4;
Fe.Linear;
Fe.Quad;
Fe.Cubic;
Fe.Quart;
Fe.Quint;
Fe.Strong;
Fe.Elastic;
Fe.Back;
Fe.SteppedEase;
Fe.Bounce;
Fe.Sine;
Fe.Expo;
Fe.Circ;
var s_,
    fr,
    Wa,
    Ap,
    Zr,
    u_,
    Mp,
    gA = function () {
        return typeof window < 'u';
    },
    Ml = {},
    Pr = 180 / Math.PI,
    eo = Math.PI / 180,
    Ga = Math.atan2,
    c_ = 1e8,
    Op = /([A-Z])/g,
    vA = /(left|right|width|margin|padding|x)/i,
    yA = /[\s,\(]\S/,
    Xi = { autoAlpha: 'opacity,visibility', scale: 'scaleX,scaleY', alpha: 'opacity' },
    Nm = function (n, r) {
        return r.set(r.t, r.p, Math.round((r.s + r.c * n) * 1e4) / 1e4 + r.u, r);
    },
    _A = function (n, r) {
        return r.set(r.t, r.p, n === 1 ? r.e : Math.round((r.s + r.c * n) * 1e4) / 1e4 + r.u, r);
    },
    bA = function (n, r) {
        return r.set(r.t, r.p, n ? Math.round((r.s + r.c * n) * 1e4) / 1e4 + r.u : r.b, r);
    },
    SA = function (n, r) {
        var a = r.s + r.c * n;
        r.set(r.t, r.p, ~~(a + (a < 0 ? -0.5 : 0.5)) + r.u, r);
    },
    b1 = function (n, r) {
        return r.set(r.t, r.p, n ? r.e : r.b, r);
    },
    S1 = function (n, r) {
        return r.set(r.t, r.p, n !== 1 ? r.b : r.e, r);
    },
    xA = function (n, r, a) {
        return (n.style[r] = a);
    },
    wA = function (n, r, a) {
        return n.style.setProperty(r, a);
    },
    EA = function (n, r, a) {
        return (n._gsap[r] = a);
    },
    TA = function (n, r, a) {
        return (n._gsap.scaleX = n._gsap.scaleY = a);
    },
    AA = function (n, r, a, s, u) {
        var f = n._gsap;
        ((f.scaleX = f.scaleY = a), f.renderTransform(u, f));
    },
    MA = function (n, r, a, s, u) {
        var f = n._gsap;
        ((f[r] = a), f.renderTransform(u, f));
    },
    At = 'transform',
    Ln = At + 'Origin',
    OA = function i(n, r) {
        var a = this,
            s = this.target,
            u = s.style,
            f = s._gsap;
        if (n in Ml && u) {
            if (((this.tfm = this.tfm || {}), n !== 'transform'))
                ((n = Xi[n] || n),
                    ~n.indexOf(',')
                        ? n.split(',').forEach(function (d) {
                              return (a.tfm[d] = Sl(s, d));
                          })
                        : (this.tfm[n] = f.x ? f[n] : Sl(s, n)),
                    n === Ln && (this.tfm.zOrigin = f.zOrigin));
            else
                return Xi.transform.split(',').forEach(function (d) {
                    return i.call(a, d, r);
                });
            if (this.props.indexOf(At) >= 0) return;
            (f.svg && ((this.svgo = s.getAttribute('data-svg-origin')), this.props.push(Ln, r, '')), (n = At));
        }
        (u || r) && this.props.push(n, r, u[n]);
    },
    x1 = function (n) {
        n.translate && (n.removeProperty('translate'), n.removeProperty('scale'), n.removeProperty('rotate'));
    },
    CA = function () {
        var n = this.props,
            r = this.target,
            a = r.style,
            s = r._gsap,
            u,
            f;
        for (u = 0; u < n.length; u += 3)
            n[u + 1]
                ? n[u + 1] === 2
                    ? r[n[u]](n[u + 2])
                    : (r[n[u]] = n[u + 2])
                : n[u + 2]
                  ? (a[n[u]] = n[u + 2])
                  : a.removeProperty(n[u].substr(0, 2) === '--' ? n[u] : n[u].replace(Op, '-$1').toLowerCase());
        if (this.tfm) {
            for (f in this.tfm) s[f] = this.tfm[f];
            (s.svg && (s.renderTransform(), r.setAttribute('data-svg-origin', this.svgo || '')),
                (u = Mp()),
                (!u || !u.isStart) &&
                    !a[At] &&
                    (x1(a),
                    s.zOrigin && a[Ln] && ((a[Ln] += ' ' + s.zOrigin + 'px'), (s.zOrigin = 0), s.renderTransform()),
                    (s.uncache = 1)));
        }
    },
    w1 = function (n, r) {
        var a = { target: n, props: [], revert: CA, save: OA };
        return (
            n._gsap || kn.core.getCache(n),
            r &&
                n.style &&
                n.nodeType &&
                r.split(',').forEach(function (s) {
                    return a.save(s);
                }),
            a
        );
    },
    E1,
    Lm = function (n, r) {
        var a = fr.createElementNS
            ? fr.createElementNS((r || 'http://www.w3.org/1999/xhtml').replace(/^https/, 'http'), n)
            : fr.createElement(n);
        return a && a.style ? a : fr.createElement(n);
    },
    _i = function i(n, r, a) {
        var s = getComputedStyle(n);
        return (
            s[r] ||
            s.getPropertyValue(r.replace(Op, '-$1').toLowerCase()) ||
            s.getPropertyValue(r) ||
            (!a && i(n, fo(r) || r, 1)) ||
            ''
        );
    },
    f_ = 'O,Moz,ms,Ms,Webkit'.split(','),
    fo = function (n, r, a) {
        var s = r || Zr,
            u = s.style,
            f = 5;
        if (n in u && !a) return n;
        for (n = n.charAt(0).toUpperCase() + n.substr(1); f-- && !(f_[f] + n in u); );
        return f < 0 ? null : (f === 3 ? 'ms' : f >= 0 ? f_[f] : '') + n;
    },
    km = function () {
        gA() &&
            window.document &&
            ((s_ = window),
            (fr = s_.document),
            (Wa = fr.documentElement),
            (Zr = Lm('div') || { style: {} }),
            Lm('div'),
            (At = fo(At)),
            (Ln = At + 'Origin'),
            (Zr.style.cssText = 'border-width:0;line-height:0;position:absolute;padding:0'),
            (E1 = !!fo('perspective')),
            (Mp = kn.core.reverting),
            (Ap = 1));
    },
    d_ = function (n) {
        var r = n.ownerSVGElement,
            a = Lm('svg', (r && r.getAttribute('xmlns')) || 'http://www.w3.org/2000/svg'),
            s = n.cloneNode(!0),
            u;
        ((s.style.display = 'block'), a.appendChild(s), Wa.appendChild(a));
        try {
            u = s.getBBox();
        } catch {}
        return (a.removeChild(s), Wa.removeChild(a), u);
    },
    h_ = function (n, r) {
        for (var a = r.length; a--; ) if (n.hasAttribute(r[a])) return n.getAttribute(r[a]);
    },
    T1 = function (n) {
        var r, a;
        try {
            r = n.getBBox();
        } catch {
            ((r = d_(n)), (a = 1));
        }
        return (
            (r && (r.width || r.height)) || a || (r = d_(n)),
            r && !r.width && !r.x && !r.y
                ? { x: +h_(n, ['x', 'cx', 'x1']) || 0, y: +h_(n, ['y', 'cy', 'y1']) || 0, width: 0, height: 0 }
                : r
        );
    },
    A1 = function (n) {
        return !!(n.getCTM && (!n.parentNode || n.ownerSVGElement) && T1(n));
    },
    ea = function (n, r) {
        if (r) {
            var a = n.style,
                s;
            (r in Ml && r !== Ln && (r = At),
                a.removeProperty
                    ? ((s = r.substr(0, 2)),
                      (s === 'ms' || r.substr(0, 6) === 'webkit') && (r = '-' + r),
                      a.removeProperty(s === '--' ? r : r.replace(Op, '-$1').toLowerCase()))
                    : a.removeAttribute(r));
        }
    },
    dr = function (n, r, a, s, u, f) {
        var d = new Nn(n._pt, r, a, 0, 1, f ? S1 : b1);
        return ((n._pt = d), (d.b = s), (d.e = u), n._props.push(a), d);
    },
    m_ = { deg: 1, rad: 1, turn: 1 },
    DA = { grid: 1, flex: 1 },
    vr = function i(n, r, a, s) {
        var u = parseFloat(a) || 0,
            f = (a + '').trim().substr((u + '').length) || 'px',
            d = Zr.style,
            p = vA.test(r),
            m = n.tagName.toLowerCase() === 'svg',
            v = (m ? 'client' : 'offset') + (p ? 'Width' : 'Height'),
            y = 100,
            S = s === 'px',
            g = s === '%',
            x,
            b,
            T,
            O;
        if (s === f || !u || m_[s] || m_[f]) return u;
        if (
            (f !== 'px' && !S && (u = i(n, r, a, 'px')),
            (O = n.getCTM && A1(n)),
            (g || f === '%') && (Ml[r] || ~r.indexOf('adius')))
        )
            return ((x = O ? n.getBBox()[p ? 'width' : 'height'] : n[v]), kt(g ? (u / x) * y : (u / 100) * x));
        if (
            ((d[p ? 'width' : 'height'] = y + (S ? f : s)),
            (b = (s !== 'rem' && ~r.indexOf('adius')) || (s === 'em' && n.appendChild && !m) ? n : n.parentNode),
            O && (b = (n.ownerSVGElement || {}).parentNode),
            (!b || b === fr || !b.appendChild) && (b = fr.body),
            (T = b._gsap),
            T && g && T.width && p && T.time === Kn.time && !T.uncache)
        )
            return kt((u / T.width) * y);
        if (g && (r === 'height' || r === 'width')) {
            var L = n.style[r];
            ((n.style[r] = y + s), (x = n[v]), L ? (n.style[r] = L) : ea(n, r));
        } else
            ((g || f === '%') && !DA[_i(b, 'display')] && (d.position = _i(n, 'position')),
                b === n && (d.position = 'static'),
                b.appendChild(Zr),
                (x = Zr[v]),
                b.removeChild(Zr),
                (d.position = 'absolute'));
        return (
            p && g && ((T = Kr(b)), (T.time = Kn.time), (T.width = b[v])),
            kt(S ? (x * u) / y : x && u ? (y / x) * u : 0)
        );
    },
    Sl = function (n, r, a, s) {
        var u;
        return (
            Ap || km(),
            r in Xi && r !== 'transform' && ((r = Xi[r]), ~r.indexOf(',') && (r = r.split(',')[0])),
            Ml[r] && r !== 'transform'
                ? ((u = Ls(n, s)),
                  (u = r !== 'transformOrigin' ? u[r] : u.svg ? u.origin : Vc(_i(n, Ln)) + ' ' + u.zOrigin + 'px'))
                : ((u = n.style[r]),
                  (!u || u === 'auto' || s || ~(u + '').indexOf('calc(')) &&
                      (u = (qc[r] && qc[r](n, r, a)) || _i(n, r) || Xb(n, r) || (r === 'opacity' ? 1 : 0))),
            a && !~(u + '').trim().indexOf(' ') ? vr(n, r, u, a) + a : u
        );
    },
    RA = function (n, r, a, s) {
        if (!a || a === 'none') {
            var u = fo(r, n, 1),
                f = u && _i(n, u, 1);
            f && f !== a ? ((r = u), (a = f)) : r === 'borderColor' && (a = _i(n, 'borderTopColor'));
        }
        var d = new Nn(this._pt, n.style, r, 0, 1, v1),
            p = 0,
            m = 0,
            v,
            y,
            S,
            g,
            x,
            b,
            T,
            O,
            L,
            D,
            k,
            C;
        if (
            ((d.b = a),
            (d.e = s),
            (a += ''),
            (s += ''),
            s.substring(0, 6) === 'var(--' && (s = _i(n, s.substring(4, s.indexOf(')')))),
            s === 'auto' && ((b = n.style[r]), (n.style[r] = s), (s = _i(n, r) || s), b ? (n.style[r] = b) : ea(n, r)),
            (v = [a, s]),
            o1(v),
            (a = v[0]),
            (s = v[1]),
            (S = a.match(Fa) || []),
            (C = s.match(Fa) || []),
            C.length)
        ) {
            for (; (y = Fa.exec(s)); )
                ((T = y[0]),
                    (L = s.substring(p, y.index)),
                    x ? (x = (x + 1) % 5) : (L.substr(-5) === 'rgba(' || L.substr(-5) === 'hsla(') && (x = 1),
                    T !== (b = S[m++] || '') &&
                        ((g = parseFloat(b) || 0),
                        (k = b.substr((g + '').length)),
                        T.charAt(1) === '=' && (T = Ja(g, T) + k),
                        (O = parseFloat(T)),
                        (D = T.substr((O + '').length)),
                        (p = Fa.lastIndex - D.length),
                        D || ((D = D || Jn.units[r] || k), p === s.length && ((s += D), (d.e += D))),
                        k !== D && (g = vr(n, r, b, D) || 0),
                        (d._pt = {
                            _next: d._pt,
                            p: L || m === 1 ? L : ',',
                            s: g,
                            c: O - g,
                            m: (x && x < 4) || r === 'zIndex' ? Math.round : 0,
                        })));
            d.c = p < s.length ? s.substring(p, s.length) : '';
        } else d.r = r === 'display' && s === 'none' ? S1 : b1;
        return (Ub.test(s) && (d.e = 0), (this._pt = d), d);
    },
    p_ = { top: '0%', bottom: '100%', left: '0%', right: '100%', center: '50%' },
    zA = function (n) {
        var r = n.split(' '),
            a = r[0],
            s = r[1] || '50%';
        return (
            (a === 'top' || a === 'bottom' || s === 'left' || s === 'right') && ((n = a), (a = s), (s = n)),
            (r[0] = p_[a] || a),
            (r[1] = p_[s] || s),
            r.join(' ')
        );
    },
    NA = function (n, r) {
        if (r.tween && r.tween._time === r.tween._dur) {
            var a = r.t,
                s = a.style,
                u = r.u,
                f = a._gsap,
                d,
                p,
                m;
            if (u === 'all' || u === !0) ((s.cssText = ''), (p = 1));
            else
                for (u = u.split(','), m = u.length; --m > -1; )
                    ((d = u[m]), Ml[d] && ((p = 1), (d = d === 'transformOrigin' ? Ln : At)), ea(a, d));
            p &&
                (ea(a, At),
                f &&
                    (f.svg && a.removeAttribute('transform'),
                    (s.scale = s.rotate = s.translate = 'none'),
                    Ls(a, 1),
                    (f.uncache = 1),
                    x1(s)));
        }
    },
    qc = {
        clearProps: function (n, r, a, s, u) {
            if (u.data !== 'isFromStart') {
                var f = (n._pt = new Nn(n._pt, r, a, 0, 0, NA));
                return ((f.u = s), (f.pr = -10), (f.tween = u), n._props.push(a), 1);
            }
        },
    },
    Ns = [1, 0, 0, 1, 0, 0],
    M1 = {},
    O1 = function (n) {
        return n === 'matrix(1, 0, 0, 1, 0, 0)' || n === 'none' || !n;
    },
    g_ = function (n) {
        var r = _i(n, At);
        return O1(r) ? Ns : r.substr(7).match(kb).map(kt);
    },
    Cp = function (n, r) {
        var a = n._gsap || Kr(n),
            s = n.style,
            u = g_(n),
            f,
            d,
            p,
            m;
        return a.svg && n.getAttribute('transform')
            ? ((p = n.transform.baseVal.consolidate().matrix),
              (u = [p.a, p.b, p.c, p.d, p.e, p.f]),
              u.join(',') === '1,0,0,1,0,0' ? Ns : u)
            : (u === Ns &&
                  !n.offsetParent &&
                  n !== Wa &&
                  !a.svg &&
                  ((p = s.display),
                  (s.display = 'block'),
                  (f = n.parentNode),
                  (!f || (!n.offsetParent && !n.getBoundingClientRect().width)) &&
                      ((m = 1), (d = n.nextElementSibling), Wa.appendChild(n)),
                  (u = g_(n)),
                  p ? (s.display = p) : ea(n, 'display'),
                  m && (d ? f.insertBefore(n, d) : f ? f.appendChild(n) : Wa.removeChild(n))),
              r && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
    },
    Um = function (n, r, a, s, u, f) {
        var d = n._gsap,
            p = u || Cp(n, !0),
            m = d.xOrigin || 0,
            v = d.yOrigin || 0,
            y = d.xOffset || 0,
            S = d.yOffset || 0,
            g = p[0],
            x = p[1],
            b = p[2],
            T = p[3],
            O = p[4],
            L = p[5],
            D = r.split(' '),
            k = parseFloat(D[0]) || 0,
            C = parseFloat(D[1]) || 0,
            X,
            z,
            U,
            P;
        (a
            ? p !== Ns &&
              (z = g * T - x * b) &&
              ((U = k * (T / z) + C * (-b / z) + (b * L - T * O) / z),
              (P = k * (-x / z) + C * (g / z) - (g * L - x * O) / z),
              (k = U),
              (C = P))
            : ((X = T1(n)),
              (k = X.x + (~D[0].indexOf('%') ? (k / 100) * X.width : k)),
              (C = X.y + (~(D[1] || D[0]).indexOf('%') ? (C / 100) * X.height : C))),
            s || (s !== !1 && d.smooth)
                ? ((O = k - m),
                  (L = C - v),
                  (d.xOffset = y + (O * g + L * b) - O),
                  (d.yOffset = S + (O * x + L * T) - L))
                : (d.xOffset = d.yOffset = 0),
            (d.xOrigin = k),
            (d.yOrigin = C),
            (d.smooth = !!s),
            (d.origin = r),
            (d.originIsAbsolute = !!a),
            (n.style[Ln] = '0px 0px'),
            f &&
                (dr(f, d, 'xOrigin', m, k),
                dr(f, d, 'yOrigin', v, C),
                dr(f, d, 'xOffset', y, d.xOffset),
                dr(f, d, 'yOffset', S, d.yOffset)),
            n.setAttribute('data-svg-origin', k + ' ' + C));
    },
    Ls = function (n, r) {
        var a = n._gsap || new f1(n);
        if ('x' in a && !r && !a.uncache) return a;
        var s = n.style,
            u = a.scaleX < 0,
            f = 'px',
            d = 'deg',
            p = getComputedStyle(n),
            m = _i(n, Ln) || '0',
            v,
            y,
            S,
            g,
            x,
            b,
            T,
            O,
            L,
            D,
            k,
            C,
            X,
            z,
            U,
            P,
            se,
            W,
            de,
            ue,
            ne,
            I,
            A,
            B,
            R,
            $,
            fe,
            M,
            H,
            F,
            ee,
            ge;
        return (
            (v = y = S = b = T = O = L = D = k = 0),
            (g = x = 1),
            (a.svg = !!(n.getCTM && A1(n))),
            p.translate &&
                ((p.translate !== 'none' || p.scale !== 'none' || p.rotate !== 'none') &&
                    (s[At] =
                        (p.translate !== 'none'
                            ? 'translate3d(' + (p.translate + ' 0 0').split(' ').slice(0, 3).join(', ') + ') '
                            : '') +
                        (p.rotate !== 'none' ? 'rotate(' + p.rotate + ') ' : '') +
                        (p.scale !== 'none' ? 'scale(' + p.scale.split(' ').join(',') + ') ' : '') +
                        (p[At] !== 'none' ? p[At] : '')),
                (s.scale = s.rotate = s.translate = 'none')),
            (z = Cp(n, a.svg)),
            a.svg &&
                (a.uncache
                    ? ((R = n.getBBox()), (m = a.xOrigin - R.x + 'px ' + (a.yOrigin - R.y) + 'px'), (B = ''))
                    : (B = !r && n.getAttribute('data-svg-origin')),
                Um(n, B || m, !!B || a.originIsAbsolute, a.smooth !== !1, z)),
            (C = a.xOrigin || 0),
            (X = a.yOrigin || 0),
            z !== Ns &&
                ((W = z[0]),
                (de = z[1]),
                (ue = z[2]),
                (ne = z[3]),
                (v = I = z[4]),
                (y = A = z[5]),
                z.length === 6
                    ? ((g = Math.sqrt(W * W + de * de)),
                      (x = Math.sqrt(ne * ne + ue * ue)),
                      (b = W || de ? Ga(de, W) * Pr : 0),
                      (L = ue || ne ? Ga(ue, ne) * Pr + b : 0),
                      L && (x *= Math.abs(Math.cos(L * eo))),
                      a.svg && ((v -= C - (C * W + X * ue)), (y -= X - (C * de + X * ne))))
                    : ((ge = z[6]),
                      (F = z[7]),
                      (fe = z[8]),
                      (M = z[9]),
                      (H = z[10]),
                      (ee = z[11]),
                      (v = z[12]),
                      (y = z[13]),
                      (S = z[14]),
                      (U = Ga(ge, H)),
                      (T = U * Pr),
                      U &&
                          ((P = Math.cos(-U)),
                          (se = Math.sin(-U)),
                          (B = I * P + fe * se),
                          (R = A * P + M * se),
                          ($ = ge * P + H * se),
                          (fe = I * -se + fe * P),
                          (M = A * -se + M * P),
                          (H = ge * -se + H * P),
                          (ee = F * -se + ee * P),
                          (I = B),
                          (A = R),
                          (ge = $)),
                      (U = Ga(-ue, H)),
                      (O = U * Pr),
                      U &&
                          ((P = Math.cos(-U)),
                          (se = Math.sin(-U)),
                          (B = W * P - fe * se),
                          (R = de * P - M * se),
                          ($ = ue * P - H * se),
                          (ee = ne * se + ee * P),
                          (W = B),
                          (de = R),
                          (ue = $)),
                      (U = Ga(de, W)),
                      (b = U * Pr),
                      U &&
                          ((P = Math.cos(U)),
                          (se = Math.sin(U)),
                          (B = W * P + de * se),
                          (R = I * P + A * se),
                          (de = de * P - W * se),
                          (A = A * P - I * se),
                          (W = B),
                          (I = R)),
                      T && Math.abs(T) + Math.abs(b) > 359.9 && ((T = b = 0), (O = 180 - O)),
                      (g = kt(Math.sqrt(W * W + de * de + ue * ue))),
                      (x = kt(Math.sqrt(A * A + ge * ge))),
                      (U = Ga(I, A)),
                      (L = Math.abs(U) > 2e-4 ? U * Pr : 0),
                      (k = ee ? 1 / (ee < 0 ? -ee : ee) : 0)),
                a.svg &&
                    ((B = n.getAttribute('transform')),
                    (a.forceCSS = n.setAttribute('transform', '') || !O1(_i(n, At))),
                    B && n.setAttribute('transform', B))),
            Math.abs(L) > 90 &&
                Math.abs(L) < 270 &&
                (u
                    ? ((g *= -1), (L += b <= 0 ? 180 : -180), (b += b <= 0 ? 180 : -180))
                    : ((x *= -1), (L += L <= 0 ? 180 : -180))),
            (r = r || a.uncache),
            (a.x =
                v -
                ((a.xPercent =
                    v && ((!r && a.xPercent) || (Math.round(n.offsetWidth / 2) === Math.round(-v) ? -50 : 0)))
                    ? (n.offsetWidth * a.xPercent) / 100
                    : 0) +
                f),
            (a.y =
                y -
                ((a.yPercent =
                    y && ((!r && a.yPercent) || (Math.round(n.offsetHeight / 2) === Math.round(-y) ? -50 : 0)))
                    ? (n.offsetHeight * a.yPercent) / 100
                    : 0) +
                f),
            (a.z = S + f),
            (a.scaleX = kt(g)),
            (a.scaleY = kt(x)),
            (a.rotation = kt(b) + d),
            (a.rotationX = kt(T) + d),
            (a.rotationY = kt(O) + d),
            (a.skewX = L + d),
            (a.skewY = D + d),
            (a.transformPerspective = k + f),
            (a.zOrigin = parseFloat(m.split(' ')[2]) || (!r && a.zOrigin) || 0) && (s[Ln] = Vc(m)),
            (a.xOffset = a.yOffset = 0),
            (a.force3D = Jn.force3D),
            (a.renderTransform = a.svg ? kA : E1 ? C1 : LA),
            (a.uncache = 0),
            a
        );
    },
    Vc = function (n) {
        return (n = n.split(' '))[0] + ' ' + n[1];
    },
    Jh = function (n, r, a) {
        var s = pn(r);
        return kt(parseFloat(r) + parseFloat(vr(n, 'x', a + 'px', s))) + s;
    },
    LA = function (n, r) {
        ((r.z = '0px'), (r.rotationY = r.rotationX = '0deg'), (r.force3D = 0), C1(n, r));
    },
    Yr = '0deg',
    ds = '0px',
    Gr = ') ',
    C1 = function (n, r) {
        var a = r || this,
            s = a.xPercent,
            u = a.yPercent,
            f = a.x,
            d = a.y,
            p = a.z,
            m = a.rotation,
            v = a.rotationY,
            y = a.rotationX,
            S = a.skewX,
            g = a.skewY,
            x = a.scaleX,
            b = a.scaleY,
            T = a.transformPerspective,
            O = a.force3D,
            L = a.target,
            D = a.zOrigin,
            k = '',
            C = (O === 'auto' && n && n !== 1) || O === !0;
        if (D && (y !== Yr || v !== Yr)) {
            var X = parseFloat(v) * eo,
                z = Math.sin(X),
                U = Math.cos(X),
                P;
            ((X = parseFloat(y) * eo),
                (P = Math.cos(X)),
                (f = Jh(L, f, z * P * -D)),
                (d = Jh(L, d, -Math.sin(X) * -D)),
                (p = Jh(L, p, U * P * -D + D)));
        }
        (T !== ds && (k += 'perspective(' + T + Gr),
            (s || u) && (k += 'translate(' + s + '%, ' + u + '%) '),
            (C || f !== ds || d !== ds || p !== ds) &&
                (k +=
                    p !== ds || C ? 'translate3d(' + f + ', ' + d + ', ' + p + ') ' : 'translate(' + f + ', ' + d + Gr),
            m !== Yr && (k += 'rotate(' + m + Gr),
            v !== Yr && (k += 'rotateY(' + v + Gr),
            y !== Yr && (k += 'rotateX(' + y + Gr),
            (S !== Yr || g !== Yr) && (k += 'skew(' + S + ', ' + g + Gr),
            (x !== 1 || b !== 1) && (k += 'scale(' + x + ', ' + b + Gr),
            (L.style[At] = k || 'translate(0, 0)'));
    },
    kA = function (n, r) {
        var a = r || this,
            s = a.xPercent,
            u = a.yPercent,
            f = a.x,
            d = a.y,
            p = a.rotation,
            m = a.skewX,
            v = a.skewY,
            y = a.scaleX,
            S = a.scaleY,
            g = a.target,
            x = a.xOrigin,
            b = a.yOrigin,
            T = a.xOffset,
            O = a.yOffset,
            L = a.forceCSS,
            D = parseFloat(f),
            k = parseFloat(d),
            C,
            X,
            z,
            U,
            P;
        ((p = parseFloat(p)),
            (m = parseFloat(m)),
            (v = parseFloat(v)),
            v && ((v = parseFloat(v)), (m += v), (p += v)),
            p || m
                ? ((p *= eo),
                  (m *= eo),
                  (C = Math.cos(p) * y),
                  (X = Math.sin(p) * y),
                  (z = Math.sin(p - m) * -S),
                  (U = Math.cos(p - m) * S),
                  m &&
                      ((v *= eo),
                      (P = Math.tan(m - v)),
                      (P = Math.sqrt(1 + P * P)),
                      (z *= P),
                      (U *= P),
                      v && ((P = Math.tan(v)), (P = Math.sqrt(1 + P * P)), (C *= P), (X *= P))),
                  (C = kt(C)),
                  (X = kt(X)),
                  (z = kt(z)),
                  (U = kt(U)))
                : ((C = y), (U = S), (X = z = 0)),
            ((D && !~(f + '').indexOf('px')) || (k && !~(d + '').indexOf('px'))) &&
                ((D = vr(g, 'x', f, 'px')), (k = vr(g, 'y', d, 'px'))),
            (x || b || T || O) && ((D = kt(D + x - (x * C + b * z) + T)), (k = kt(k + b - (x * X + b * U) + O))),
            (s || u) && ((P = g.getBBox()), (D = kt(D + (s / 100) * P.width)), (k = kt(k + (u / 100) * P.height))),
            (P = 'matrix(' + C + ',' + X + ',' + z + ',' + U + ',' + D + ',' + k + ')'),
            g.setAttribute('transform', P),
            L && (g.style[At] = P));
    },
    UA = function (n, r, a, s, u) {
        var f = 360,
            d = It(u),
            p = parseFloat(u) * (d && ~u.indexOf('rad') ? Pr : 1),
            m = p - s,
            v = s + m + 'deg',
            y,
            S;
        return (
            d &&
                ((y = u.split('_')[1]),
                y === 'short' && ((m %= f), m !== m % (f / 2) && (m += m < 0 ? f : -f)),
                y === 'cw' && m < 0
                    ? (m = ((m + f * c_) % f) - ~~(m / f) * f)
                    : y === 'ccw' && m > 0 && (m = ((m - f * c_) % f) - ~~(m / f) * f)),
            (n._pt = S = new Nn(n._pt, r, a, s, m, _A)),
            (S.e = v),
            (S.u = 'deg'),
            n._props.push(a),
            S
        );
    },
    v_ = function (n, r) {
        for (var a in r) n[a] = r[a];
        return n;
    },
    jA = function (n, r, a) {
        var s = v_({}, a._gsap),
            u = 'perspective,force3D,transformOrigin,svgOrigin',
            f = a.style,
            d,
            p,
            m,
            v,
            y,
            S,
            g,
            x;
        s.svg
            ? ((m = a.getAttribute('transform')),
              a.setAttribute('transform', ''),
              (f[At] = r),
              (d = Ls(a, 1)),
              ea(a, At),
              a.setAttribute('transform', m))
            : ((m = getComputedStyle(a)[At]), (f[At] = r), (d = Ls(a, 1)), (f[At] = m));
        for (p in Ml)
            ((m = s[p]),
                (v = d[p]),
                m !== v &&
                    u.indexOf(p) < 0 &&
                    ((g = pn(m)),
                    (x = pn(v)),
                    (y = g !== x ? vr(a, p, m, x) : parseFloat(m)),
                    (S = parseFloat(v)),
                    (n._pt = new Nn(n._pt, d, p, y, S - y, Nm)),
                    (n._pt.u = x || 0),
                    n._props.push(p)));
        v_(d, s);
    };
zn('padding,margin,Width,Radius', function (i, n) {
    var r = 'Top',
        a = 'Right',
        s = 'Bottom',
        u = 'Left',
        f = (n < 3 ? [r, a, s, u] : [r + u, r + a, s + a, s + u]).map(function (d) {
            return n < 2 ? i + d : 'border' + d + i;
        });
    qc[n > 1 ? 'border' + i : i] = function (d, p, m, v, y) {
        var S, g;
        if (arguments.length < 4)
            return (
                (S = f.map(function (x) {
                    return Sl(d, x, m);
                })),
                (g = S.join(' ')),
                g.split(S[0]).length === 5 ? S[0] : g
            );
        ((S = (v + '').split(' ')),
            (g = {}),
            f.forEach(function (x, b) {
                return (g[x] = S[b] = S[b] || S[((b - 1) / 2) | 0]);
            }),
            d.init(p, g, y));
    };
});
var D1 = {
    name: 'css',
    register: km,
    targetTest: function (n) {
        return n.style && n.nodeType;
    },
    init: function (n, r, a, s, u) {
        var f = this._props,
            d = n.style,
            p = a.vars.startAt,
            m,
            v,
            y,
            S,
            g,
            x,
            b,
            T,
            O,
            L,
            D,
            k,
            C,
            X,
            z,
            U;
        (Ap || km(), (this.styles = this.styles || w1(n)), (U = this.styles.props), (this.tween = a));
        for (b in r)
            if (b !== 'autoRound' && ((v = r[b]), !(Qn[b] && d1(b, r, a, s, n, u)))) {
                if (
                    ((g = typeof v),
                    (x = qc[b]),
                    g === 'function' && ((v = v.call(a, s, n, u)), (g = typeof v)),
                    g === 'string' && ~v.indexOf('random(') && (v = Ds(v)),
                    x)
                )
                    x(this, n, b, v, a) && (z = 1);
                else if (b.substr(0, 2) === '--')
                    ((m = (getComputedStyle(n).getPropertyValue(b) + '').trim()),
                        (v += ''),
                        (pr.lastIndex = 0),
                        pr.test(m) || ((T = pn(m)), (O = pn(v))),
                        O ? T !== O && (m = vr(n, b, m, O) + O) : T && (v += T),
                        this.add(d, 'setProperty', m, v, s, u, 0, 0, b),
                        f.push(b),
                        U.push(b, 0, d[b]));
                else if (g !== 'undefined') {
                    if (
                        (p && b in p
                            ? ((m = typeof p[b] == 'function' ? p[b].call(a, s, n, u) : p[b]),
                              It(m) && ~m.indexOf('random(') && (m = Ds(m)),
                              pn(m + '') || m === 'auto' || (m += Jn.units[b] || pn(Sl(n, b)) || ''),
                              (m + '').charAt(1) === '=' && (m = Sl(n, b)))
                            : (m = Sl(n, b)),
                        (S = parseFloat(m)),
                        (L = g === 'string' && v.charAt(1) === '=' && v.substr(0, 2)),
                        L && (v = v.substr(2)),
                        (y = parseFloat(v)),
                        b in Xi &&
                            (b === 'autoAlpha' &&
                                (S === 1 && Sl(n, 'visibility') === 'hidden' && y && (S = 0),
                                U.push('visibility', 0, d.visibility),
                                dr(this, d, 'visibility', S ? 'inherit' : 'hidden', y ? 'inherit' : 'hidden', !y)),
                            b !== 'scale' &&
                                b !== 'transform' &&
                                ((b = Xi[b]), ~b.indexOf(',') && (b = b.split(',')[0]))),
                        (D = b in Ml),
                        D)
                    ) {
                        if (
                            (this.styles.save(b),
                            g === 'string' &&
                                v.substring(0, 6) === 'var(--' &&
                                ((v = _i(n, v.substring(4, v.indexOf(')')))), (y = parseFloat(v))),
                            k ||
                                ((C = n._gsap),
                                (C.renderTransform && !r.parseTransform) || Ls(n, r.parseTransform),
                                (X = r.smoothOrigin !== !1 && C.smooth),
                                (k = this._pt = new Nn(this._pt, d, At, 0, 1, C.renderTransform, C, 0, -1)),
                                (k.dep = 1)),
                            b === 'scale')
                        )
                            ((this._pt = new Nn(
                                this._pt,
                                C,
                                'scaleY',
                                C.scaleY,
                                (L ? Ja(C.scaleY, L + y) : y) - C.scaleY || 0,
                                Nm,
                            )),
                                (this._pt.u = 0),
                                f.push('scaleY', b),
                                (b += 'X'));
                        else if (b === 'transformOrigin') {
                            (U.push(Ln, 0, d[Ln]),
                                (v = zA(v)),
                                C.svg
                                    ? Um(n, v, 0, X, 0, this)
                                    : ((O = parseFloat(v.split(' ')[2]) || 0),
                                      O !== C.zOrigin && dr(this, C, 'zOrigin', C.zOrigin, O),
                                      dr(this, d, b, Vc(m), Vc(v))));
                            continue;
                        } else if (b === 'svgOrigin') {
                            Um(n, v, 1, X, 0, this);
                            continue;
                        } else if (b in M1) {
                            UA(this, C, b, S, L ? Ja(S, L + v) : v);
                            continue;
                        } else if (b === 'smoothOrigin') {
                            dr(this, C, 'smooth', C.smooth, v);
                            continue;
                        } else if (b === 'force3D') {
                            C[b] = v;
                            continue;
                        } else if (b === 'transform') {
                            jA(this, v, n);
                            continue;
                        }
                    } else b in d || (b = fo(b) || b);
                    if (D || ((y || y === 0) && (S || S === 0) && !yA.test(v) && b in d))
                        ((T = (m + '').substr((S + '').length)),
                            y || (y = 0),
                            (O = pn(v) || (b in Jn.units ? Jn.units[b] : T)),
                            T !== O && (S = vr(n, b, m, O)),
                            (this._pt = new Nn(
                                this._pt,
                                D ? C : d,
                                b,
                                S,
                                (L ? Ja(S, L + y) : y) - S,
                                !D && (O === 'px' || b === 'zIndex') && r.autoRound !== !1 ? SA : Nm,
                            )),
                            (this._pt.u = O || 0),
                            T !== O && O !== '%' && ((this._pt.b = m), (this._pt.r = bA)));
                    else if (b in d) RA.call(this, n, b, m, L ? L + v : v);
                    else if (b in n) this.add(n, b, m || n[b], L ? L + v : v, s, u);
                    else if (b !== 'parseTransform') {
                        gp(b, v);
                        continue;
                    }
                    (D ||
                        (b in d
                            ? U.push(b, 0, d[b])
                            : typeof n[b] == 'function'
                              ? U.push(b, 2, n[b]())
                              : U.push(b, 1, m || n[b])),
                        f.push(b));
                }
            }
        z && y1(this);
    },
    render: function (n, r) {
        if (r.tween._time || !Mp()) for (var a = r._pt; a; ) (a.r(n, a.d), (a = a._next));
        else r.styles.revert();
    },
    get: Sl,
    aliases: Xi,
    getSetter: function (n, r, a) {
        var s = Xi[r];
        return (
            s && s.indexOf(',') < 0 && (r = s),
            r in Ml && r !== Ln && (n._gsap.x || Sl(n, 'x'))
                ? a && u_ === a
                    ? r === 'scale'
                        ? TA
                        : EA
                    : (u_ = a || {}) && (r === 'scale' ? AA : MA)
                : n.style && !hp(n.style[r])
                  ? xA
                  : ~r.indexOf('-')
                    ? wA
                    : Ep(n, r)
        );
    },
    core: { _removeProperty: ea, _getMatrix: Cp },
};
kn.utils.checkPrefix = fo;
kn.core.getStyleSaver = w1;
(function (i, n, r, a) {
    var s = zn(i + ',' + n + ',' + r, function (u) {
        Ml[u] = 1;
    });
    (zn(n, function (u) {
        ((Jn.units[u] = 'deg'), (M1[u] = 1));
    }),
        (Xi[s[13]] = i + ',' + n),
        zn(a, function (u) {
            var f = u.split(':');
            Xi[f[1]] = s[f[0]];
        }));
})(
    'x,y,z,scale,scaleX,scaleY,xPercent,yPercent',
    'rotation,rotationX,rotationY,skewX,skewY',
    'transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective',
    '0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY',
);
zn('x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective', function (i) {
    Jn.units[i] = 'px';
});
kn.registerPlugin(D1);
var vo = kn.registerPlugin(D1) || kn;
vo.core.Tween;
var El,
    Jr,
    Dp,
    ff,
    vs,
    Cc,
    Pc,
    Ts,
    Ci = 'transform',
    jm = Ci + 'Origin',
    R1,
    z1 = function (n) {
        var r = n.ownerDocument || n;
        for (
            !(Ci in n.style) && ('msTransform' in n.style) && ((Ci = 'msTransform'), (jm = Ci + 'Origin'));
            r.parentNode && (r = r.parentNode);
        );
        if (((Jr = window), (Pc = new ta()), r)) {
            ((El = r),
                (Dp = r.documentElement),
                (ff = r.body),
                (Ts = El.createElementNS('http://www.w3.org/2000/svg', 'g')),
                (Ts.style.transform = 'none'));
            var a = r.createElement('div'),
                s = r.createElement('div'),
                u = r && (r.body || r.firstElementChild);
            u &&
                u.appendChild &&
                (u.appendChild(a),
                a.appendChild(s),
                a.setAttribute('style', 'position:static;transform:translate3d(0,0,1px)'),
                (R1 = s.offsetParent !== a),
                u.removeChild(a));
        }
        return r;
    },
    BA = function (n) {
        for (var r, a; n && n !== ff; )
            ((a = n._gsap),
                a && a.uncache && a.get(n, 'x'),
                a &&
                    !a.scaleX &&
                    !a.scaleY &&
                    a.renderTransform &&
                    ((a.scaleX = a.scaleY = 1e-4), a.renderTransform(1, a), r ? r.push(a) : (r = [a])),
                (n = n.parentNode));
        return r;
    },
    N1 = [],
    L1 = [],
    HA = function () {
        return Jr.pageYOffset || El.scrollTop || Dp.scrollTop || ff.scrollTop || 0;
    },
    YA = function () {
        return Jr.pageXOffset || El.scrollLeft || Dp.scrollLeft || ff.scrollLeft || 0;
    },
    Rp = function (n) {
        return n.ownerSVGElement || ((n.tagName + '').toLowerCase() === 'svg' ? n : null);
    },
    GA = function i(n) {
        if (Jr.getComputedStyle(n).position === 'fixed') return !0;
        if (((n = n.parentNode), n && n.nodeType === 1)) return i(n);
    },
    Wh = function i(n, r) {
        if (n.parentNode && (El || z1(n))) {
            var a = Rp(n),
                s = a ? a.getAttribute('xmlns') || 'http://www.w3.org/2000/svg' : 'http://www.w3.org/1999/xhtml',
                u = a ? (r ? 'rect' : 'g') : 'div',
                f = r !== 2 ? 0 : 100,
                d = r === 3 ? 100 : 0,
                p = 'position:absolute;display:block;pointer-events:none;margin:0;padding:0;',
                m = El.createElementNS ? El.createElementNS(s.replace(/^https/, 'http'), u) : El.createElement(u);
            return (
                r &&
                    (a
                        ? (Cc || (Cc = i(n)),
                          m.setAttribute('width', 0.01),
                          m.setAttribute('height', 0.01),
                          m.setAttribute('transform', 'translate(' + f + ',' + d + ')'),
                          Cc.appendChild(m))
                        : (vs || ((vs = i(n)), (vs.style.cssText = p)),
                          (m.style.cssText = p + 'width:0.1px;height:0.1px;top:' + d + 'px;left:' + f + 'px'),
                          vs.appendChild(m))),
                m
            );
        }
        throw 'Need document and parent.';
    },
    XA = function (n) {
        for (var r = new ta(), a = 0; a < n.numberOfItems; a++) r.multiply(n.getItem(a).matrix);
        return r;
    },
    qA = function (n) {
        var r = n.getCTM(),
            a;
        return (
            r ||
                ((a = n.style[Ci]),
                (n.style[Ci] = 'none'),
                n.appendChild(Ts),
                (r = Ts.getCTM()),
                n.removeChild(Ts),
                a ? (n.style[Ci] = a) : n.style.removeProperty(Ci.replace(/([A-Z])/g, '-$1').toLowerCase())),
            r || Pc.clone()
        );
    },
    VA = function (n, r) {
        var a = Rp(n),
            s = n === a,
            u = a ? N1 : L1,
            f = n.parentNode,
            d = f && !a && f.shadowRoot && f.shadowRoot.appendChild ? f.shadowRoot : f,
            p,
            m,
            v,
            y,
            S,
            g;
        if (n === Jr) return n;
        if ((u.length || u.push(Wh(n, 1), Wh(n, 2), Wh(n, 3)), (p = a ? Cc : vs), a))
            (s
                ? ((v = qA(n)), (y = -v.e / v.a), (S = -v.f / v.d), (m = Pc))
                : n.getBBox
                  ? ((v = n.getBBox()),
                    (m = n.transform ? n.transform.baseVal : {}),
                    (m = m.numberOfItems ? (m.numberOfItems > 1 ? XA(m) : m.getItem(0).matrix) : Pc),
                    (y = m.a * v.x + m.c * v.y),
                    (S = m.b * v.x + m.d * v.y))
                  : ((m = new ta()), (y = S = 0)),
                (s ? a : f).appendChild(p),
                p.setAttribute(
                    'transform',
                    'matrix(' + m.a + ',' + m.b + ',' + m.c + ',' + m.d + ',' + (m.e + y) + ',' + (m.f + S) + ')',
                ));
        else {
            if (((y = S = 0), R1))
                for (m = n.offsetParent, v = n; v && (v = v.parentNode) && v !== m && v.parentNode; )
                    (Jr.getComputedStyle(v)[Ci] + '').length > 4 && ((y = v.offsetLeft), (S = v.offsetTop), (v = 0));
            if (((g = Jr.getComputedStyle(n)), g.position !== 'absolute' && g.position !== 'fixed'))
                for (m = n.offsetParent; f && f !== m; )
                    ((y += f.scrollLeft || 0), (S += f.scrollTop || 0), (f = f.parentNode));
            ((v = p.style),
                (v.top = n.offsetTop - S + 'px'),
                (v.left = n.offsetLeft - y + 'px'),
                (v[Ci] = g[Ci]),
                (v[jm] = g[jm]),
                (v.position = g.position === 'fixed' ? 'fixed' : 'absolute'),
                d.appendChild(p));
        }
        return p;
    },
    em = function (n, r, a, s, u, f, d) {
        return ((n.a = r), (n.b = a), (n.c = s), (n.d = u), (n.e = f), (n.f = d), n);
    },
    ta = (function () {
        function i(r, a, s, u, f, d) {
            (r === void 0 && (r = 1),
                a === void 0 && (a = 0),
                s === void 0 && (s = 0),
                u === void 0 && (u = 1),
                f === void 0 && (f = 0),
                d === void 0 && (d = 0),
                em(this, r, a, s, u, f, d));
        }
        var n = i.prototype;
        return (
            (n.inverse = function () {
                var a = this.a,
                    s = this.b,
                    u = this.c,
                    f = this.d,
                    d = this.e,
                    p = this.f,
                    m = a * f - s * u || 1e-10;
                return em(this, f / m, -s / m, -u / m, a / m, (u * p - f * d) / m, -(a * p - s * d) / m);
            }),
            (n.multiply = function (a) {
                var s = this.a,
                    u = this.b,
                    f = this.c,
                    d = this.d,
                    p = this.e,
                    m = this.f,
                    v = a.a,
                    y = a.c,
                    S = a.b,
                    g = a.d,
                    x = a.e,
                    b = a.f;
                return em(
                    this,
                    v * s + S * f,
                    v * u + S * d,
                    y * s + g * f,
                    y * u + g * d,
                    p + x * s + b * f,
                    m + x * u + b * d,
                );
            }),
            (n.clone = function () {
                return new i(this.a, this.b, this.c, this.d, this.e, this.f);
            }),
            (n.equals = function (a) {
                var s = this.a,
                    u = this.b,
                    f = this.c,
                    d = this.d,
                    p = this.e,
                    m = this.f;
                return s === a.a && u === a.b && f === a.c && d === a.d && p === a.e && m === a.f;
            }),
            (n.apply = function (a, s) {
                s === void 0 && (s = {});
                var u = a.x,
                    f = a.y,
                    d = this.a,
                    p = this.b,
                    m = this.c,
                    v = this.d,
                    y = this.e,
                    S = this.f;
                return ((s.x = u * d + f * m + y || 0), (s.y = u * p + f * v + S || 0), s);
            }),
            i
        );
    })();
function Qr(i, n, r, a) {
    if (!i || !i.parentNode || (El || z1(i)).documentElement === i) return new ta();
    var s = BA(i),
        u = Rp(i),
        f = u ? N1 : L1,
        d = VA(i),
        p = f[0].getBoundingClientRect(),
        m = f[1].getBoundingClientRect(),
        v = f[2].getBoundingClientRect(),
        y = d.parentNode,
        S = GA(i),
        g = new ta(
            (m.left - p.left) / 100,
            (m.top - p.top) / 100,
            (v.left - p.left) / 100,
            (v.top - p.top) / 100,
            p.left + (S ? 0 : YA()),
            p.top + (S ? 0 : HA()),
        );
    if ((y.removeChild(d), s))
        for (p = s.length; p--; ) ((m = s[p]), (m.scaleX = m.scaleY = 0), m.renderTransform(1, m));
    return n ? g.inverse() : g;
}
function y_(i) {
    if (i === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return i;
}
function PA(i, n) {
    ((i.prototype = Object.create(n.prototype)), (i.prototype.constructor = i), (i.__proto__ = n));
}
var $e,
    mt,
    $n,
    Di,
    Tl,
    tm,
    xl,
    Bm,
    ys,
    hr,
    k1,
    Hm,
    ks,
    zp,
    _s,
    Ai,
    bs,
    Dc,
    U1,
    Ym,
    Qc = 0,
    j1 = function () {
        return typeof window < 'u';
    },
    B1 = function () {
        return $e || (j1() && ($e = window.gsap) && $e.registerPlugin && $e);
    },
    ur = function (n) {
        return typeof n == 'function';
    },
    As = function (n) {
        return typeof n == 'object';
    },
    Mi = function (n) {
        return typeof n > 'u';
    },
    Rc = function () {
        return !1;
    },
    Ms = 'transform',
    Gm = 'transformOrigin',
    rr = function (n) {
        return Math.round(n * 1e4) / 1e4;
    },
    hs = Array.isArray,
    mc = function (n, r) {
        var a = $n.createElementNS
            ? $n.createElementNS('http://www.w3.org/1999/xhtml'.replace(/^https/, 'http'), n)
            : $n.createElement(n);
        return a.style ? a : $n.createElement(n);
    },
    __ = 180 / Math.PI,
    Xr = 1e20,
    QA = new ta(),
    ar =
        Date.now ||
        function () {
            return new Date().getTime();
        },
    Wr = [],
    to = {},
    ZA = 0,
    KA = /^(?:a|input|textarea|button|select)$/i,
    b_ = 0,
    Xa = {},
    _l = {},
    H1 = function (n, r) {
        var a = {},
            s;
        for (s in n) a[s] = r ? n[s] * r : n[s];
        return a;
    },
    $A = function (n, r) {
        for (var a in r) a in n || (n[a] = r[a]);
        return n;
    },
    S_ = function i(n, r) {
        for (var a = n.length, s; a--; )
            (r ? (n[a].style.touchAction = r) : n[a].style.removeProperty('touch-action'),
                (s = n[a].children),
                s && s.length && i(s, r));
    },
    Y1 = function () {
        return Wr.forEach(function (n) {
            return n();
        });
    },
    FA = function (n) {
        (Wr.push(n), Wr.length === 1 && $e.ticker.add(Y1));
    },
    x_ = function () {
        return !Wr.length && $e.ticker.remove(Y1);
    },
    w_ = function (n) {
        for (var r = Wr.length; r--; ) Wr[r] === n && Wr.splice(r, 1);
        $e.to(x_, { overwrite: !0, delay: 15, duration: 0, onComplete: x_, data: '_draggable' });
    },
    IA = function (n, r) {
        for (var a in r) a in n || (n[a] = r[a]);
        return n;
    },
    Kt = function (n, r, a, s) {
        if (n.addEventListener) {
            var u = ks[r];
            ((s = s || (k1 ? { passive: !1 } : null)),
                n.addEventListener(u || r, a, s),
                u && r !== u && n.addEventListener(r, a, s));
        }
    },
    Xt = function (n, r, a, s) {
        if (n.removeEventListener) {
            var u = ks[r];
            (n.removeEventListener(u || r, a, s), u && r !== u && n.removeEventListener(r, a, s));
        }
    },
    hi = function (n) {
        (n.preventDefault && n.preventDefault(), n.preventManipulation && n.preventManipulation());
    },
    JA = function (n, r) {
        for (var a = n.length; a--; ) if (n[a].identifier === r) return !0;
    },
    WA = function i(n) {
        ((zp = n.touches && Qc < n.touches.length), Xt(n.target, 'touchend', i));
    },
    E_ = function (n) {
        ((zp = n.touches && Qc < n.touches.length), Kt(n.target, 'touchend', WA));
    },
    no = function (n) {
        return mt.pageYOffset || n.scrollTop || n.documentElement.scrollTop || n.body.scrollTop || 0;
    },
    io = function (n) {
        return mt.pageXOffset || n.scrollLeft || n.documentElement.scrollLeft || n.body.scrollLeft || 0;
    },
    T_ = function i(n, r) {
        (Kt(n, 'scroll', r), ho(n.parentNode) || i(n.parentNode, r));
    },
    A_ = function i(n, r) {
        (Xt(n, 'scroll', r), ho(n.parentNode) || i(n.parentNode, r));
    },
    ho = function (n) {
        return !n || n === Di || n.nodeType === 9 || n === $n.body || n === mt || !n.nodeType || !n.parentNode;
    },
    M_ = function (n, r) {
        var a = r === 'x' ? 'Width' : 'Height',
            s = 'scroll' + a,
            u = 'client' + a;
        return Math.max(0, ho(n) ? Math.max(Di[s], Tl[s]) - (mt['inner' + a] || Di[u] || Tl[u]) : n[s] - n[u]);
    },
    nm = function i(n, r) {
        var a = M_(n, 'x'),
            s = M_(n, 'y');
        (ho(n) ? (n = _l) : i(n.parentNode, r),
            (n._gsMaxScrollX = a),
            (n._gsMaxScrollY = s),
            r || ((n._gsScrollX = n.scrollLeft || 0), (n._gsScrollY = n.scrollTop || 0)));
    },
    im = function (n, r, a) {
        var s = n.style;
        s &&
            (Mi(s[r]) && (r = ys(r, n) || r),
            a == null ? s.removeProperty && s.removeProperty(r.replace(/([A-Z])/g, '-$1').toLowerCase()) : (s[r] = a));
    },
    Us = function (n) {
        return mt.getComputedStyle(n instanceof Element ? n : n.host || (n.parentNode || {}).host || n);
    },
    qr = {},
    qa = function (n) {
        if (n === mt)
            return (
                (qr.left = qr.top = 0),
                (qr.width = qr.right = Di.clientWidth || n.innerWidth || Tl.clientWidth || 0),
                (qr.height = qr.bottom =
                    (n.innerHeight || 0) - 20 < Di.clientHeight
                        ? Di.clientHeight
                        : n.innerHeight || Tl.clientHeight || 0),
                qr
            );
        var r = n.ownerDocument || $n,
            a = Mi(n.pageX)
                ? !n.nodeType && !Mi(n.left) && !Mi(n.top)
                    ? n
                    : hr(n)[0].getBoundingClientRect()
                : {
                      left: n.pageX - io(r),
                      top: n.pageY - no(r),
                      right: n.pageX - io(r) + 1,
                      bottom: n.pageY - no(r) + 1,
                  };
        return (
            Mi(a.right) && !Mi(a.width)
                ? ((a.right = a.left + a.width), (a.bottom = a.top + a.height))
                : Mi(a.width) &&
                  (a = {
                      width: a.right - a.left,
                      height: a.bottom - a.top,
                      right: a.right,
                      left: a.left,
                      bottom: a.bottom,
                      top: a.top,
                  }),
            a
        );
    },
    Lt = function (n, r, a) {
        var s = n.vars,
            u = s[a],
            f = n._listeners[r],
            d;
        return (
            ur(u) && (d = u.apply(s.callbackScope || n, s[a + 'Params'] || [n.pointerEvent])),
            f && n.dispatchEvent(r) === !1 && (d = !1),
            d
        );
    },
    O_ = function (n, r) {
        var a = hr(n)[0],
            s,
            u,
            f;
        return !a.nodeType && a !== mt
            ? Mi(n.left)
                ? ((u = n.min || n.minX || n.minRotation || 0),
                  (s = n.min || n.minY || 0),
                  {
                      left: u,
                      top: s,
                      width: (n.max || n.maxX || n.maxRotation || 0) - u,
                      height: (n.max || n.maxY || 0) - s,
                  })
                : ((f = { x: 0, y: 0 }), { left: n.left - f.x, top: n.top - f.y, width: n.width, height: n.height })
            : eM(a, r);
    },
    mi = {},
    eM = function (n, r) {
        r = hr(r)[0];
        var a = n.getBBox && n.ownerSVGElement,
            s = n.ownerDocument || $n,
            u,
            f,
            d,
            p,
            m,
            v,
            y,
            S,
            g,
            x,
            b,
            T,
            O;
        if (n === mt)
            ((d = no(s)),
                (u = io(s)),
                (f = u + (s.documentElement.clientWidth || n.innerWidth || s.body.clientWidth || 0)),
                (p =
                    d +
                    ((n.innerHeight || 0) - 20 < s.documentElement.clientHeight
                        ? s.documentElement.clientHeight
                        : n.innerHeight || s.body.clientHeight || 0)));
        else {
            if (r === mt || Mi(r)) return n.getBoundingClientRect();
            ((u = d = 0),
                a
                    ? ((x = n.getBBox()), (b = x.width), (T = x.height))
                    : (n.viewBox &&
                          (x = n.viewBox.baseVal) &&
                          ((u = x.x || 0), (d = x.y || 0), (b = x.width), (T = x.height)),
                      b ||
                          ((O = Us(n)),
                          (x = O.boxSizing === 'border-box'),
                          (b =
                              (parseFloat(O.width) || n.clientWidth || 0) +
                              (x ? 0 : parseFloat(O.borderLeftWidth) + parseFloat(O.borderRightWidth))),
                          (T =
                              (parseFloat(O.height) || n.clientHeight || 0) +
                              (x ? 0 : parseFloat(O.borderTopWidth) + parseFloat(O.borderBottomWidth))))),
                (f = b),
                (p = T));
        }
        return n === r
            ? { left: u, top: d, width: f - u, height: p - d }
            : ((m = Qr(r, !0).multiply(Qr(n))),
              (v = m.apply({ x: u, y: d })),
              (y = m.apply({ x: f, y: d })),
              (S = m.apply({ x: f, y: p })),
              (g = m.apply({ x: u, y: p })),
              (u = Math.min(v.x, y.x, S.x, g.x)),
              (d = Math.min(v.y, y.y, S.y, g.y)),
              { left: u, top: d, width: Math.max(v.x, y.x, S.x, g.x) - u, height: Math.max(v.y, y.y, S.y, g.y) - d });
    },
    lm = function (n, r, a, s, u, f) {
        var d = {},
            p,
            m,
            v;
        if (r)
            if (u !== 1 && r instanceof Array) {
                if (((d.end = p = []), (v = r.length), As(r[0]))) for (m = 0; m < v; m++) p[m] = H1(r[m], u);
                else for (m = 0; m < v; m++) p[m] = r[m] * u;
                ((a += 1.1), (s -= 1.1));
            } else
                ur(r)
                    ? (d.end = function (y) {
                          var S = r.call(n, y),
                              g,
                              x;
                          if (u !== 1)
                              if (As(S)) {
                                  g = {};
                                  for (x in S) g[x] = S[x] * u;
                                  S = g;
                              } else S *= u;
                          return S;
                      })
                    : (d.end = r);
        return ((a || a === 0) && (d.max = a), (s || s === 0) && (d.min = s), f && (d.velocity = 0), d);
    },
    tM = function i(n) {
        var r;
        return !n || !n.getAttribute || n === Tl
            ? !1
            : (r = n.getAttribute('data-clickable')) === 'true' ||
                (r !== 'false' && (KA.test(n.nodeName + '') || n.getAttribute('contentEditable') === 'true'))
              ? !0
              : i(n.parentNode);
    },
    pc = function (n, r) {
        for (var a = n.length, s; a--; )
            ((s = n[a]),
                (s.ondragstart = s.onselectstart = r ? null : Rc),
                $e.set(s, { lazy: !0, userSelect: r ? 'text' : 'none' }));
    },
    nM = function i(n) {
        if (Us(n).position === 'fixed') return !0;
        if (((n = n.parentNode), n && n.nodeType === 1)) return i(n);
    },
    G1,
    Xm,
    iM = function (n, r) {
        ((n = $e.utils.toArray(n)[0]), (r = r || {}));
        var a = document.createElement('div'),
            s = a.style,
            u = n.firstChild,
            f = 0,
            d = 0,
            p = n.scrollTop,
            m = n.scrollLeft,
            v = n.scrollWidth,
            y = n.scrollHeight,
            S = 0,
            g = 0,
            x = 0,
            b,
            T,
            O,
            L,
            D,
            k;
        (G1 && r.force3D !== !1 ? ((D = 'translate3d('), (k = 'px,0px)')) : Ms && ((D = 'translate('), (k = 'px)')),
            (this.scrollTop = function (C, X) {
                if (!arguments.length) return -this.top();
                this.top(-C, X);
            }),
            (this.scrollLeft = function (C, X) {
                if (!arguments.length) return -this.left();
                this.left(-C, X);
            }),
            (this.left = function (C, X) {
                if (!arguments.length) return -(n.scrollLeft + d);
                var z = n.scrollLeft - m,
                    U = d;
                if ((z > 2 || z < -2) && !X) {
                    ((m = n.scrollLeft),
                        $e.killTweensOf(this, { left: 1, scrollLeft: 1 }),
                        this.left(-m),
                        r.onKill && r.onKill());
                    return;
                }
                ((C = -C),
                    C < 0 ? ((d = (C - 0.5) | 0), (C = 0)) : C > g ? ((d = (C - g) | 0), (C = g)) : (d = 0),
                    (d || U) &&
                        (this._skip || (s[Ms] = D + -d + 'px,' + -f + k),
                        d + S >= 0 && (s.paddingRight = d + S + 'px')),
                    (n.scrollLeft = C | 0),
                    (m = n.scrollLeft));
            }),
            (this.top = function (C, X) {
                if (!arguments.length) return -(n.scrollTop + f);
                var z = n.scrollTop - p,
                    U = f;
                if ((z > 2 || z < -2) && !X) {
                    ((p = n.scrollTop),
                        $e.killTweensOf(this, { top: 1, scrollTop: 1 }),
                        this.top(-p),
                        r.onKill && r.onKill());
                    return;
                }
                ((C = -C),
                    C < 0 ? ((f = (C - 0.5) | 0), (C = 0)) : C > x ? ((f = (C - x) | 0), (C = x)) : (f = 0),
                    (f || U) && (this._skip || (s[Ms] = D + -d + 'px,' + -f + k)),
                    (n.scrollTop = C | 0),
                    (p = n.scrollTop));
            }),
            (this.maxScrollTop = function () {
                return x;
            }),
            (this.maxScrollLeft = function () {
                return g;
            }),
            (this.disable = function () {
                for (u = a.firstChild; u; ) ((L = u.nextSibling), n.appendChild(u), (u = L));
                n === a.parentNode && n.removeChild(a);
            }),
            (this.enable = function () {
                if (((u = n.firstChild), u !== a)) {
                    for (; u; ) ((L = u.nextSibling), a.appendChild(u), (u = L));
                    (n.appendChild(a), this.calibrate());
                }
            }),
            (this.calibrate = function (C) {
                var X = n.clientWidth === b,
                    z,
                    U,
                    P;
                ((p = n.scrollTop),
                    (m = n.scrollLeft),
                    !(
                        X &&
                        n.clientHeight === T &&
                        a.offsetHeight === O &&
                        v === n.scrollWidth &&
                        y === n.scrollHeight &&
                        !C
                    ) &&
                        ((f || d) &&
                            ((U = this.left()), (P = this.top()), this.left(-n.scrollLeft), this.top(-n.scrollTop)),
                        (z = Us(n)),
                        (!X || C) &&
                            ((s.display = 'block'),
                            (s.width = 'auto'),
                            (s.paddingRight = '0px'),
                            (S = Math.max(0, n.scrollWidth - n.clientWidth)),
                            S && (S += parseFloat(z.paddingLeft) + (Xm ? parseFloat(z.paddingRight) : 0))),
                        (s.display = 'inline-block'),
                        (s.position = 'relative'),
                        (s.overflow = 'visible'),
                        (s.verticalAlign = 'top'),
                        (s.boxSizing = 'content-box'),
                        (s.width = '100%'),
                        (s.paddingRight = S + 'px'),
                        Xm && (s.paddingBottom = z.paddingBottom),
                        (b = n.clientWidth),
                        (T = n.clientHeight),
                        (v = n.scrollWidth),
                        (y = n.scrollHeight),
                        (g = n.scrollWidth - b),
                        (x = n.scrollHeight - T),
                        (O = a.offsetHeight),
                        (s.display = 'block'),
                        (U || P) && (this.left(U), this.top(P))));
            }),
            (this.content = a),
            (this.element = n),
            (this._skip = !1),
            this.enable());
    },
    rm = function (n) {
        if (j1() && document.body) {
            var r = window && window.navigator;
            ((mt = window),
                ($n = document),
                (Di = $n.documentElement),
                (Tl = $n.body),
                (tm = mc('div')),
                (Dc = !!window.PointerEvent),
                (xl = mc('div')),
                (xl.style.cssText =
                    'visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab'),
                (bs = xl.style.cursor === 'grab' ? 'grab' : 'move'),
                (_s = r && r.userAgent.toLowerCase().indexOf('android') !== -1),
                (Hm =
                    ('ontouchstart' in Di && 'orientation' in mt) ||
                    (r && (r.MaxTouchPoints > 0 || r.msMaxTouchPoints > 0))),
                (Xm = (function () {
                    var a = mc('div'),
                        s = mc('div'),
                        u = s.style,
                        f = Tl,
                        d;
                    return (
                        (u.display = 'inline-block'),
                        (u.position = 'relative'),
                        (a.style.cssText = 'width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden'),
                        a.appendChild(s),
                        f.appendChild(a),
                        (d = s.offsetHeight + 18 > a.scrollHeight),
                        f.removeChild(a),
                        d
                    );
                })()),
                (ks = (function (a) {
                    for (
                        var s = a.split(','),
                            u = (
                                ('onpointerdown' in tm)
                                    ? 'pointerdown,pointermove,pointerup,pointercancel'
                                    : ('onmspointerdown' in tm)
                                      ? 'MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel'
                                      : a
                            ).split(','),
                            f = {},
                            d = 4;
                        --d > -1;
                    )
                        ((f[s[d]] = u[d]), (f[u[d]] = s[d]));
                    try {
                        Di.addEventListener(
                            'test',
                            null,
                            Object.defineProperty({}, 'passive', {
                                get: function () {
                                    k1 = 1;
                                },
                            }),
                        );
                    } catch {}
                    return f;
                })('touchstart,touchmove,touchend,touchcancel')),
                Kt($n, 'touchcancel', Rc),
                Kt(mt, 'touchmove', Rc),
                Tl && Tl.addEventListener('touchstart', Rc),
                Kt($n, 'contextmenu', function () {
                    for (var a in to) to[a].isPressed && to[a].endDrag();
                }),
                ($e = Bm = B1()));
        }
        $e
            ? ((Ai = $e.plugins.inertia),
              (U1 = $e.core.context || function () {}),
              (ys = $e.utils.checkPrefix),
              (Ms = ys(Ms)),
              (Gm = ys(Gm)),
              (hr = $e.utils.toArray),
              (Ym = $e.core.getStyleSaver),
              (G1 = !!ys('perspective')))
            : n && console.warn('Please gsap.registerPlugin(Draggable)');
    },
    lM = (function () {
        function i(r) {
            ((this._listeners = {}), (this.target = r || this));
        }
        var n = i.prototype;
        return (
            (n.addEventListener = function (a, s) {
                var u = this._listeners[a] || (this._listeners[a] = []);
                ~u.indexOf(s) || u.push(s);
            }),
            (n.removeEventListener = function (a, s) {
                var u = this._listeners[a],
                    f = u && u.indexOf(s);
                f >= 0 && u.splice(f, 1);
            }),
            (n.dispatchEvent = function (a) {
                var s = this,
                    u;
                return (
                    (this._listeners[a] || []).forEach(function (f) {
                        return f.call(s, { type: a, target: s.target }) === !1 && (u = !1);
                    }),
                    u
                );
            }),
            i
        );
    })(),
    Ps = (function (i) {
        PA(n, i);
        function n(r, a) {
            var s;
            ((s = i.call(this) || this),
                Bm || rm(1),
                (r = hr(r)[0]),
                (s.styles = Ym && Ym(r, 'transform,left,top')),
                Ai || (Ai = $e.plugins.inertia),
                (s.vars = a = H1(a || {})),
                (s.target = r),
                (s.x = s.y = s.rotation = 0),
                (s.dragResistance = parseFloat(a.dragResistance) || 0),
                (s.edgeResistance = isNaN(a.edgeResistance) ? 1 : parseFloat(a.edgeResistance) || 0),
                (s.lockAxis = a.lockAxis),
                (s.autoScroll = a.autoScroll || 0),
                (s.lockedAxis = null),
                (s.allowEventDefault = !!a.allowEventDefault),
                $e.getProperty(r, 'x'));
            var u = (a.type || 'x,y').toLowerCase(),
                f = ~u.indexOf('x') || ~u.indexOf('y'),
                d = u.indexOf('rotation') !== -1,
                p = d ? 'rotation' : f ? 'x' : 'left',
                m = f ? 'y' : 'top',
                v = !!(~u.indexOf('x') || ~u.indexOf('left') || u === 'scroll'),
                y = !!(~u.indexOf('y') || ~u.indexOf('top') || u === 'scroll'),
                S = a.minimumMovement || 2,
                g = y_(s),
                x = hr(a.trigger || a.handle || r),
                b = {},
                T = 0,
                O = !1,
                L = a.autoScrollMarginTop || 40,
                D = a.autoScrollMarginRight || 40,
                k = a.autoScrollMarginBottom || 40,
                C = a.autoScrollMarginLeft || 40,
                X = a.clickableTest || tM,
                z = 0,
                U = r._gsap || $e.core.getCache(r),
                P = nM(r),
                se = function (j, re) {
                    return parseFloat(U.get(r, j, re));
                },
                W = r.ownerDocument || $n,
                de,
                ue,
                ne,
                I,
                A,
                B,
                R,
                $,
                fe,
                M,
                H,
                F,
                ee,
                ge,
                ye,
                he,
                Ae,
                De,
                Me,
                Pe,
                Ge,
                gt,
                We,
                Le,
                Si,
                lt,
                jt,
                wn,
                sn,
                rt,
                Mt,
                Ki,
                vt,
                $i = function (j) {
                    return (hi(j), j.stopImmediatePropagation && j.stopImmediatePropagation(), !1);
                },
                Pt = function be(j) {
                    if (g.autoScroll && g.isDragging && (O || Ae)) {
                        var re = r,
                            G = g.autoScroll * 15,
                            te,
                            me,
                            ve,
                            ae,
                            ce,
                            pe,
                            _e,
                            Ce;
                        for (
                            O = !1,
                                _l.scrollTop =
                                    mt.pageYOffset != null
                                        ? mt.pageYOffset
                                        : W.documentElement.scrollTop != null
                                          ? W.documentElement.scrollTop
                                          : W.body.scrollTop,
                                _l.scrollLeft =
                                    mt.pageXOffset != null
                                        ? mt.pageXOffset
                                        : W.documentElement.scrollLeft != null
                                          ? W.documentElement.scrollLeft
                                          : W.body.scrollLeft,
                                ae = g.pointerX - _l.scrollLeft,
                                ce = g.pointerY - _l.scrollTop;
                            re && !me;
                        )
                            ((me = ho(re.parentNode)),
                                (te = me ? _l : re.parentNode),
                                (ve = me
                                    ? {
                                          bottom: Math.max(Di.clientHeight, mt.innerHeight || 0),
                                          right: Math.max(Di.clientWidth, mt.innerWidth || 0),
                                          left: 0,
                                          top: 0,
                                      }
                                    : te.getBoundingClientRect()),
                                (pe = _e = 0),
                                y &&
                                    ((Ce = te._gsMaxScrollY - te.scrollTop),
                                    Ce < 0
                                        ? (_e = Ce)
                                        : ce > ve.bottom - k && Ce
                                          ? ((O = !0),
                                            (_e = Math.min(Ce, (G * (1 - Math.max(0, ve.bottom - ce) / k)) | 0)))
                                          : ce < ve.top + L &&
                                            te.scrollTop &&
                                            ((O = !0),
                                            (_e = -Math.min(
                                                te.scrollTop,
                                                (G * (1 - Math.max(0, ce - ve.top) / L)) | 0,
                                            ))),
                                    _e && (te.scrollTop += _e)),
                                v &&
                                    ((Ce = te._gsMaxScrollX - te.scrollLeft),
                                    Ce < 0
                                        ? (pe = Ce)
                                        : ae > ve.right - D && Ce
                                          ? ((O = !0),
                                            (pe = Math.min(Ce, (G * (1 - Math.max(0, ve.right - ae) / D)) | 0)))
                                          : ae < ve.left + C &&
                                            te.scrollLeft &&
                                            ((O = !0),
                                            (pe = -Math.min(
                                                te.scrollLeft,
                                                (G * (1 - Math.max(0, ae - ve.left) / C)) | 0,
                                            ))),
                                    pe && (te.scrollLeft += pe)),
                                me &&
                                    (pe || _e) &&
                                    (mt.scrollTo(te.scrollLeft, te.scrollTop), fn(g.pointerX + pe, g.pointerY + _e)),
                                (re = te));
                    }
                    if (Ae) {
                        var Qe = g.x,
                            Xe = g.y;
                        (d
                            ? ((g.deltaX = Qe - parseFloat(U.rotation)),
                              (g.rotation = Qe),
                              (U.rotation = Qe + 'deg'),
                              U.renderTransform(1, U))
                            : ue
                              ? (y && ((g.deltaY = Xe - ue.top()), ue.top(Xe)),
                                v && ((g.deltaX = Qe - ue.left()), ue.left(Qe)))
                              : f
                                ? (y && ((g.deltaY = Xe - parseFloat(U.y)), (U.y = Xe + 'px')),
                                  v && ((g.deltaX = Qe - parseFloat(U.x)), (U.x = Qe + 'px')),
                                  U.renderTransform(1, U))
                                : (y && ((g.deltaY = Xe - parseFloat(r.style.top || 0)), (r.style.top = Xe + 'px')),
                                  v && ((g.deltaX = Qe - parseFloat(r.style.left || 0)), (r.style.left = Qe + 'px'))),
                            $ &&
                                !j &&
                                !wn &&
                                ((wn = !0),
                                Lt(g, 'drag', 'onDrag') === !1 &&
                                    (v && (g.x -= g.deltaX), y && (g.y -= g.deltaY), be(!0)),
                                (wn = !1)));
                    }
                    Ae = !1;
                },
                un = function (j, re) {
                    var G = g.x,
                        te = g.y,
                        me,
                        ve;
                    (r._gsap || (U = $e.core.getCache(r)),
                        U.uncache && $e.getProperty(r, 'x'),
                        f
                            ? ((g.x = parseFloat(U.x)), (g.y = parseFloat(U.y)))
                            : d
                              ? (g.x = g.rotation = parseFloat(U.rotation))
                              : ue
                                ? ((g.y = ue.top()), (g.x = ue.left()))
                                : ((g.y = parseFloat(r.style.top || ((ve = Us(r)) && ve.top)) || 0),
                                  (g.x = parseFloat(r.style.left || (ve || {}).left) || 0)),
                        (Me || Pe || Ge) &&
                            !re &&
                            (g.isDragging || g.isThrowing) &&
                            (Ge &&
                                ((Xa.x = g.x),
                                (Xa.y = g.y),
                                (me = Ge(Xa)),
                                me.x !== g.x && ((g.x = me.x), (Ae = !0)),
                                me.y !== g.y && ((g.y = me.y), (Ae = !0))),
                            Me && ((me = Me(g.x)), me !== g.x && ((g.x = me), d && (g.rotation = me), (Ae = !0))),
                            Pe && ((me = Pe(g.y)), me !== g.y && (g.y = me), (Ae = !0))),
                        Ae && Pt(!0),
                        j || ((g.deltaX = g.x - G), (g.deltaY = g.y - te), Lt(g, 'throwupdate', 'onThrowUpdate')));
                },
                Wt = function (j, re, G, te) {
                    return (
                        re == null && (re = -Xr),
                        G == null && (G = Xr),
                        ur(j)
                            ? function (me) {
                                  var ve = g.isPressed ? 1 - g.edgeResistance : 1;
                                  return (
                                      j.call(
                                          g,
                                          (me > G ? G + (me - G) * ve : me < re ? re + (me - re) * ve : me) * te,
                                      ) * te
                                  );
                              }
                            : hs(j)
                              ? function (me) {
                                    for (var ve = j.length, ae = 0, ce = Xr, pe, _e; --ve > -1; )
                                        ((pe = j[ve]),
                                            (_e = pe - me),
                                            _e < 0 && (_e = -_e),
                                            _e < ce && pe >= re && pe <= G && ((ae = ve), (ce = _e)));
                                    return j[ae];
                                }
                              : isNaN(j)
                                ? function (me) {
                                      return me;
                                  }
                                : function () {
                                      return j * te;
                                  }
                    );
                },
                Fi = function (j, re, G, te, me, ve, ae) {
                    return (
                        (ve = ve && ve < Xr ? ve * ve : Xr),
                        ur(j)
                            ? function (ce) {
                                  var pe = g.isPressed ? 1 - g.edgeResistance : 1,
                                      _e = ce.x,
                                      Ce = ce.y,
                                      Qe,
                                      Xe,
                                      ze;
                                  return (
                                      (ce.x = _e = _e > G ? G + (_e - G) * pe : _e < re ? re + (_e - re) * pe : _e),
                                      (ce.y = Ce = Ce > me ? me + (Ce - me) * pe : Ce < te ? te + (Ce - te) * pe : Ce),
                                      (Qe = j.call(g, ce)),
                                      Qe !== ce && ((ce.x = Qe.x), (ce.y = Qe.y)),
                                      ae !== 1 && ((ce.x *= ae), (ce.y *= ae)),
                                      ve < Xr &&
                                          ((Xe = ce.x - _e),
                                          (ze = ce.y - Ce),
                                          Xe * Xe + ze * ze > ve && ((ce.x = _e), (ce.y = Ce))),
                                      ce
                                  );
                              }
                            : hs(j)
                              ? function (ce) {
                                    for (var pe = j.length, _e = 0, Ce = Xr, Qe, Xe, ze, Ue; --pe > -1; )
                                        ((ze = j[pe]),
                                            (Qe = ze.x - ce.x),
                                            (Xe = ze.y - ce.y),
                                            (Ue = Qe * Qe + Xe * Xe),
                                            Ue < Ce && ((_e = pe), (Ce = Ue)));
                                    return Ce <= ve ? j[_e] : ce;
                                }
                              : function (ce) {
                                    return ce;
                                }
                    );
                },
                En = function () {
                    var j, re, G, te;
                    ((R = !1),
                        ue
                            ? (ue.calibrate(),
                              (g.minX = H = -ue.maxScrollLeft()),
                              (g.minY = ee = -ue.maxScrollTop()),
                              (g.maxX = M = g.maxY = F = 0),
                              (R = !0))
                            : a.bounds &&
                              ((j = O_(a.bounds, r.parentNode)),
                              d
                                  ? ((g.minX = H = j.left),
                                    (g.maxX = M = j.left + j.width),
                                    (g.minY = ee = g.maxY = F = 0))
                                  : !Mi(a.bounds.maxX) || !Mi(a.bounds.maxY)
                                    ? ((j = a.bounds),
                                      (g.minX = H = j.minX),
                                      (g.minY = ee = j.minY),
                                      (g.maxX = M = j.maxX),
                                      (g.maxY = F = j.maxY))
                                    : ((re = O_(r, r.parentNode)),
                                      (g.minX = H = Math.round(se(p, 'px') + j.left - re.left)),
                                      (g.minY = ee = Math.round(se(m, 'px') + j.top - re.top)),
                                      (g.maxX = M = Math.round(H + (j.width - re.width))),
                                      (g.maxY = F = Math.round(ee + (j.height - re.height)))),
                              H > M && ((g.minX = M), (g.maxX = M = H), (H = g.minX)),
                              ee > F && ((g.minY = F), (g.maxY = F = ee), (ee = g.minY)),
                              d && ((g.minRotation = H), (g.maxRotation = M)),
                              (R = !0)),
                        a.liveSnap &&
                            ((G = a.liveSnap === !0 ? a.snap || {} : a.liveSnap),
                            (te = hs(G) || ur(G)),
                            d
                                ? ((Me = Wt(te ? G : G.rotation, H, M, 1)), (Pe = null))
                                : G.points
                                  ? (Ge = Fi(te ? G : G.points, H, M, ee, F, G.radius, ue ? -1 : 1))
                                  : (v && (Me = Wt(te ? G : G.x || G.left || G.scrollLeft, H, M, ue ? -1 : 1)),
                                    y && (Pe = Wt(te ? G : G.y || G.top || G.scrollTop, ee, F, ue ? -1 : 1)))));
                },
                Ni = function () {
                    ((g.isThrowing = !1), Lt(g, 'throwcomplete', 'onThrowComplete'));
                },
                Nl = function () {
                    g.isThrowing = !1;
                },
                vn = function (j, re) {
                    var G, te, me, ve;
                    j && Ai
                        ? (j === !0 &&
                              ((G = a.snap || a.liveSnap || {}),
                              (te = hs(G) || ur(G)),
                              (j = { resistance: (a.throwResistance || a.resistance || 1e3) / (d ? 10 : 1) }),
                              d
                                  ? (j.rotation = lm(g, te ? G : G.rotation, M, H, 1, re))
                                  : (v &&
                                        (j[p] = lm(
                                            g,
                                            te ? G : G.points || G.x || G.left,
                                            M,
                                            H,
                                            ue ? -1 : 1,
                                            re || g.lockedAxis === 'x',
                                        )),
                                    y &&
                                        (j[m] = lm(
                                            g,
                                            te ? G : G.points || G.y || G.top,
                                            F,
                                            ee,
                                            ue ? -1 : 1,
                                            re || g.lockedAxis === 'y',
                                        )),
                                    (G.points || (hs(G) && As(G[0]))) &&
                                        ((j.linkedProps = p + ',' + m), (j.radius = G.radius)))),
                          (g.isThrowing = !0),
                          (ve = isNaN(a.overshootTolerance)
                              ? a.edgeResistance === 1
                                  ? 0
                                  : 1 - g.edgeResistance + 0.2
                              : a.overshootTolerance),
                          j.duration ||
                              (j.duration = {
                                  max: Math.max(a.minDuration || 0, 'maxDuration' in a ? a.maxDuration : 2),
                                  min: isNaN(a.minDuration)
                                      ? ve === 0 || (As(j) && j.resistance > 1e3)
                                          ? 0
                                          : 0.5
                                      : a.minDuration,
                                  overshoot: ve,
                              }),
                          (g.tween = me =
                              $e.to(ue || r, {
                                  inertia: j,
                                  data: '_draggable',
                                  inherit: !1,
                                  onComplete: Ni,
                                  onInterrupt: Nl,
                                  onUpdate: a.fastMode ? Lt : un,
                                  onUpdateParams: a.fastMode
                                      ? [g, 'onthrowupdate', 'onThrowUpdate']
                                      : G && G.radius
                                        ? [!1, !0]
                                        : [],
                              })),
                          a.fastMode ||
                              (ue && (ue._skip = !0),
                              me.render(1e9, !0, !0),
                              un(!0, !0),
                              (g.endX = g.x),
                              (g.endY = g.y),
                              d && (g.endRotation = g.x),
                              me.play(0),
                              un(!0, !0),
                              ue && (ue._skip = !1)))
                        : R && g.applyBounds();
                },
                bt = function (j) {
                    var re = Le,
                        G;
                    ((Le = Qr(r.parentNode, !0)),
                        j &&
                            g.isPressed &&
                            !Le.equals(re || new ta()) &&
                            ((G = re.inverse().apply({ x: ne, y: I })), Le.apply(G, G), (ne = G.x), (I = G.y)),
                        Le.equals(QA) && (Le = null));
                },
                nt = function () {
                    var j = 1 - g.edgeResistance,
                        re = P ? io(W) : 0,
                        G = P ? no(W) : 0,
                        te,
                        me,
                        ve;
                    (f && ((U.x = se(p, 'px') + 'px'), (U.y = se(m, 'px') + 'px'), U.renderTransform()),
                        bt(!1),
                        (mi.x = g.pointerX - re),
                        (mi.y = g.pointerY - G),
                        Le && Le.apply(mi, mi),
                        (ne = mi.x),
                        (I = mi.y),
                        Ae && (fn(g.pointerX, g.pointerY), Pt(!0)),
                        (Ki = Qr(r)),
                        ue
                            ? (En(), (B = ue.top()), (A = ue.left()))
                            : (Ie() ? (un(!0, !0), En()) : g.applyBounds(),
                              d
                                  ? ((te = r.ownerSVGElement
                                        ? [U.xOrigin - r.getBBox().x, U.yOrigin - r.getBBox().y]
                                        : (Us(r)[Gm] || '0 0').split(' ')),
                                    (he = g.rotationOrigin =
                                        Qr(r).apply({ x: parseFloat(te[0]) || 0, y: parseFloat(te[1]) || 0 })),
                                    un(!0, !0),
                                    (me = g.pointerX - he.x - re),
                                    (ve = he.y - g.pointerY + G),
                                    (A = g.x),
                                    (B = g.y = Math.atan2(ve, me) * __))
                                  : ((B = se(m, 'px')), (A = se(p, 'px')))),
                        R &&
                            j &&
                            (A > M ? (A = M + (A - M) / j) : A < H && (A = H - (H - A) / j),
                            d || (B > F ? (B = F + (B - F) / j) : B < ee && (B = ee - (ee - B) / j))),
                        (g.startX = A = rr(A)),
                        (g.startY = B = rr(B)));
                },
                Ie = function () {
                    return g.tween && g.tween.isActive();
                },
                Ii = function () {
                    xl.parentNode && !Ie() && !g.isDragging && xl.parentNode.removeChild(xl);
                },
                jn = function (j, re) {
                    var G;
                    if (
                        !de ||
                        g.isPressed ||
                        !j ||
                        ((j.type === 'mousedown' || j.type === 'pointerdown') &&
                            !re &&
                            ar() - z < 30 &&
                            ks[g.pointerEvent.type])
                    ) {
                        Mt && j && de && hi(j);
                        return;
                    }
                    if (
                        ((Si = Ie()),
                        (vt = !1),
                        (g.pointerEvent = j),
                        ks[j.type]
                            ? ((We = ~j.type.indexOf('touch') ? j.currentTarget || j.target : W),
                              Kt(We, 'touchend', Et),
                              Kt(We, 'touchmove', cn),
                              Kt(We, 'touchcancel', Et),
                              Kt(W, 'touchstart', E_))
                            : ((We = null), Kt(W, 'mousemove', cn)),
                        (jt = null),
                        (!Dc || !We) && (Kt(W, 'mouseup', Et), j && j.target && Kt(j.target, 'mouseup', Et)),
                        (gt = X.call(g, j.target) && a.dragClickables === !1 && !re),
                        gt)
                    ) {
                        (Kt(j.target, 'change', Et),
                            Lt(g, 'pressInit', 'onPressInit'),
                            Lt(g, 'press', 'onPress'),
                            pc(x, !0),
                            (Mt = !1));
                        return;
                    }
                    if (
                        ((lt =
                            !We ||
                            v === y ||
                            g.vars.allowNativeTouchScrolling === !1 ||
                            (g.vars.allowContextMenu && j && (j.ctrlKey || j.which > 2))
                                ? !1
                                : v
                                  ? 'y'
                                  : 'x'),
                        (Mt = !lt && !g.allowEventDefault),
                        Mt && (hi(j), Kt(mt, 'touchforcechange', hi)),
                        j.changedTouches
                            ? ((j = ge = j.changedTouches[0]), (ye = j.identifier))
                            : j.pointerId
                              ? (ye = j.pointerId)
                              : (ge = ye = null),
                        Qc++,
                        FA(Pt),
                        (I = g.pointerY = j.pageY),
                        (ne = g.pointerX = j.pageX),
                        Lt(g, 'pressInit', 'onPressInit'),
                        (lt || g.autoScroll) && nm(r.parentNode),
                        r.parentNode &&
                            g.autoScroll &&
                            !ue &&
                            !d &&
                            r.parentNode._gsMaxScrollX &&
                            !xl.parentNode &&
                            !r.getBBox &&
                            ((xl.style.width = r.parentNode.scrollWidth + 'px'), r.parentNode.appendChild(xl)),
                        nt(),
                        g.tween && g.tween.kill(),
                        (g.isThrowing = !1),
                        $e.killTweensOf(ue || r, b, !0),
                        ue && $e.killTweensOf(r, { scrollTo: 1 }, !0),
                        (g.tween = g.lockedAxis = null),
                        (a.zIndexBoost || (!d && !ue && a.zIndexBoost !== !1)) && (r.style.zIndex = n.zIndex++),
                        (g.isPressed = !0),
                        ($ = !!(a.onDrag || g._listeners.drag)),
                        (fe = !!(a.onMove || g._listeners.move)),
                        a.cursor !== !1 || a.activeCursor)
                    )
                        for (G = x.length; --G > -1; )
                            $e.set(x[G], { cursor: a.activeCursor || a.cursor || (bs === 'grab' ? 'grabbing' : bs) });
                    Lt(g, 'press', 'onPress');
                },
                cn = function (j) {
                    var re = j,
                        G,
                        te,
                        me,
                        ve,
                        ae,
                        ce;
                    if (!de || zp || !g.isPressed || !j) {
                        Mt && j && de && hi(j);
                        return;
                    }
                    if (((g.pointerEvent = j), (G = j.changedTouches), G)) {
                        if (((j = G[0]), j !== ge && j.identifier !== ye)) {
                            for (ve = G.length; --ve > -1 && (j = G[ve]).identifier !== ye && j.target !== r; );
                            if (ve < 0) return;
                        }
                    } else if (j.pointerId && ye && j.pointerId !== ye) return;
                    if (
                        We &&
                        lt &&
                        !jt &&
                        ((mi.x = j.pageX - (P ? io(W) : 0)),
                        (mi.y = j.pageY - (P ? no(W) : 0)),
                        Le && Le.apply(mi, mi),
                        (te = mi.x),
                        (me = mi.y),
                        (ae = Math.abs(te - ne)),
                        (ce = Math.abs(me - I)),
                        ((ae !== ce && (ae > S || ce > S)) || (_s && lt === jt)) &&
                            ((jt = ae > ce && v ? 'x' : 'y'),
                            lt && jt !== lt && Kt(mt, 'touchforcechange', hi),
                            g.vars.lockAxisOnTouchScroll !== !1 &&
                                v &&
                                y &&
                                ((g.lockedAxis = jt === 'x' ? 'y' : 'x'),
                                ur(g.vars.onLockAxis) && g.vars.onLockAxis.call(g, re)),
                            _s && lt === jt))
                    ) {
                        Et(re);
                        return;
                    }
                    (!g.allowEventDefault && (!lt || (jt && lt !== jt)) && re.cancelable !== !1
                        ? (hi(re), (Mt = !0))
                        : Mt && (Mt = !1),
                        g.autoScroll && (O = !0),
                        fn(j.pageX, j.pageY, fe));
                },
                fn = function (j, re, G) {
                    var te = 1 - g.dragResistance,
                        me = 1 - g.edgeResistance,
                        ve = g.pointerX,
                        ae = g.pointerY,
                        ce = B,
                        pe = g.x,
                        _e = g.y,
                        Ce = g.endX,
                        Qe = g.endY,
                        Xe = g.endRotation,
                        ze = Ae,
                        Ue,
                        je,
                        st,
                        St,
                        wr,
                        tn;
                    ((g.pointerX = j),
                        (g.pointerY = re),
                        P && ((j -= io(W)), (re -= no(W))),
                        d
                            ? ((St = Math.atan2(he.y - re, j - he.x) * __),
                              (wr = g.y - St),
                              wr > 180 ? ((B -= 360), (g.y = St)) : wr < -180 && ((B += 360), (g.y = St)),
                              g.x !== A || Math.max(Math.abs(ne - j), Math.abs(I - re)) > S
                                  ? ((g.y = St), (st = A + (B - St) * te))
                                  : (st = A))
                            : (Le && ((tn = j * Le.a + re * Le.c + Le.e), (re = j * Le.b + re * Le.d + Le.f), (j = tn)),
                              (je = re - I),
                              (Ue = j - ne),
                              je < S && je > -S && (je = 0),
                              Ue < S && Ue > -S && (Ue = 0),
                              (g.lockAxis || g.lockedAxis) &&
                                  (Ue || je) &&
                                  ((tn = g.lockedAxis),
                                  tn ||
                                      ((g.lockedAxis = tn = v && Math.abs(Ue) > Math.abs(je) ? 'y' : y ? 'x' : null),
                                      tn && ur(g.vars.onLockAxis) && g.vars.onLockAxis.call(g, g.pointerEvent)),
                                  tn === 'y' ? (je = 0) : tn === 'x' && (Ue = 0)),
                              (st = rr(A + Ue * te)),
                              (St = rr(B + je * te))),
                        (Me || Pe || Ge) &&
                            (g.x !== st || (g.y !== St && !d)) &&
                            (Ge && ((Xa.x = st), (Xa.y = St), (tn = Ge(Xa)), (st = rr(tn.x)), (St = rr(tn.y))),
                            Me && (st = rr(Me(st))),
                            Pe && (St = rr(Pe(St)))),
                        R &&
                            (st > M
                                ? (st = M + Math.round((st - M) * me))
                                : st < H && (st = H + Math.round((st - H) * me)),
                            d ||
                                (St > F
                                    ? (St = Math.round(F + (St - F) * me))
                                    : St < ee && (St = Math.round(ee + (St - ee) * me)))),
                        (g.x !== st || (g.y !== St && !d)) &&
                            (d
                                ? ((g.endRotation = g.x = g.endX = st), (Ae = !0))
                                : (y && ((g.y = g.endY = St), (Ae = !0)), v && ((g.x = g.endX = st), (Ae = !0))),
                            !G || Lt(g, 'move', 'onMove') !== !1
                                ? !g.isDragging &&
                                  g.isPressed &&
                                  ((g.isDragging = vt = !0), Lt(g, 'dragstart', 'onDragStart'))
                                : ((g.pointerX = ve),
                                  (g.pointerY = ae),
                                  (B = ce),
                                  (g.x = pe),
                                  (g.y = _e),
                                  (g.endX = Ce),
                                  (g.endY = Qe),
                                  (g.endRotation = Xe),
                                  (Ae = ze))));
                },
                Et = function be(j, re) {
                    if (
                        !de ||
                        !g.isPressed ||
                        (j &&
                            ye != null &&
                            !re &&
                            ((j.pointerId && j.pointerId !== ye && j.target !== r) ||
                                (j.changedTouches && !JA(j.changedTouches, ye))))
                    ) {
                        Mt && j && de && hi(j);
                        return;
                    }
                    g.isPressed = !1;
                    var G = j,
                        te = g.isDragging,
                        me = g.vars.allowContextMenu && j && (j.ctrlKey || j.which > 2),
                        ve = $e.delayedCall(0.001, Ii),
                        ae,
                        ce,
                        pe,
                        _e,
                        Ce;
                    if (
                        (We
                            ? (Xt(We, 'touchend', be),
                              Xt(We, 'touchmove', cn),
                              Xt(We, 'touchcancel', be),
                              Xt(W, 'touchstart', E_))
                            : Xt(W, 'mousemove', cn),
                        Xt(mt, 'touchforcechange', hi),
                        (!Dc || !We) && (Xt(W, 'mouseup', be), j && j.target && Xt(j.target, 'mouseup', be)),
                        (Ae = !1),
                        te && ((T = b_ = ar()), (g.isDragging = !1)),
                        w_(Pt),
                        gt && !me)
                    ) {
                        (j && (Xt(j.target, 'change', be), (g.pointerEvent = G)),
                            pc(x, !1),
                            Lt(g, 'release', 'onRelease'),
                            Lt(g, 'click', 'onClick'),
                            (gt = !1));
                        return;
                    }
                    for (ce = x.length; --ce > -1; ) im(x[ce], 'cursor', a.cursor || (a.cursor !== !1 ? bs : null));
                    if ((Qc--, j)) {
                        if (((ae = j.changedTouches), ae && ((j = ae[0]), j !== ge && j.identifier !== ye))) {
                            for (ce = ae.length; --ce > -1 && (j = ae[ce]).identifier !== ye && j.target !== r; );
                            if (ce < 0 && !re) return;
                        }
                        ((g.pointerEvent = G), (g.pointerX = j.pageX), (g.pointerY = j.pageY));
                    }
                    return (
                        me && G
                            ? (hi(G), (Mt = !0), Lt(g, 'release', 'onRelease'))
                            : G && !te
                              ? ((Mt = !1),
                                Si && (a.snap || a.bounds) && vn(a.inertia || a.throwProps),
                                Lt(g, 'release', 'onRelease'),
                                (!_s || G.type !== 'touchmove') &&
                                    G.type.indexOf('cancel') === -1 &&
                                    (Lt(g, 'click', 'onClick'),
                                    ar() - z < 300 && Lt(g, 'doubleclick', 'onDoubleClick'),
                                    (_e = G.target || r),
                                    (z = ar()),
                                    (Ce = function () {
                                        z !== sn &&
                                            g.enabled() &&
                                            !g.isPressed &&
                                            !G.defaultPrevented &&
                                            (_e.click
                                                ? _e.click()
                                                : W.createEvent &&
                                                  ((pe = W.createEvent('MouseEvents')),
                                                  pe.initMouseEvent(
                                                      'click',
                                                      !0,
                                                      !0,
                                                      mt,
                                                      1,
                                                      g.pointerEvent.screenX,
                                                      g.pointerEvent.screenY,
                                                      g.pointerX,
                                                      g.pointerY,
                                                      !1,
                                                      !1,
                                                      !1,
                                                      !1,
                                                      0,
                                                      null,
                                                  ),
                                                  _e.dispatchEvent(pe)));
                                    }),
                                    !_s && !G.defaultPrevented && $e.delayedCall(0.05, Ce)))
                              : (vn(a.inertia || a.throwProps),
                                !g.allowEventDefault &&
                                G &&
                                (a.dragClickables !== !1 || !X.call(g, G.target)) &&
                                te &&
                                (!lt || (jt && lt === jt)) &&
                                G.cancelable !== !1
                                    ? ((Mt = !0), hi(G))
                                    : (Mt = !1),
                                Lt(g, 'release', 'onRelease')),
                        Ie() && ve.duration(g.tween.duration()),
                        te && Lt(g, 'dragend', 'onDragEnd'),
                        !0
                    );
                },
                dn = function (j) {
                    if (j && g.isDragging && !ue) {
                        var re = j.target || r.parentNode,
                            G = re.scrollLeft - re._gsScrollX,
                            te = re.scrollTop - re._gsScrollY;
                        (G || te) &&
                            (Le ? ((ne -= G * Le.a + te * Le.c), (I -= te * Le.d + G * Le.b)) : ((ne -= G), (I -= te)),
                            (re._gsScrollX += G),
                            (re._gsScrollY += te),
                            fn(g.pointerX, g.pointerY));
                    }
                },
                en = function (j) {
                    var re = ar(),
                        G = re - z < 100,
                        te = re - T < 50,
                        me = G && sn === z,
                        ve = g.pointerEvent && g.pointerEvent.defaultPrevented,
                        ae = G && rt === z,
                        ce = j.isTrusted || (j.isTrusted == null && G && me);
                    if (
                        ((me || (te && g.vars.suppressClickOnDrag !== !1)) &&
                            j.stopImmediatePropagation &&
                            j.stopImmediatePropagation(),
                        G && !(g.pointerEvent && g.pointerEvent.defaultPrevented) && (!me || (ce && !ae)))
                    ) {
                        (ce && me && (rt = z), (sn = z));
                        return;
                    }
                    ((g.isPressed || te || G) && (!ce || !j.detail || !G || ve) && hi(j),
                        !G && !te && !vt && (j && j.target && (g.pointerEvent = j), Lt(g, 'click', 'onClick')));
                },
                Bn = function (j) {
                    return Le
                        ? { x: j.x * Le.a + j.y * Le.c + Le.e, y: j.x * Le.b + j.y * Le.d + Le.f }
                        : { x: j.x, y: j.y };
                };
            return (
                (De = n.get(r)),
                De && De.kill(),
                (s.startDrag = function (be, j) {
                    var re, G, te, me;
                    (jn(be || g.pointerEvent, !0),
                        j &&
                            !g.hitTest(be || g.pointerEvent) &&
                            ((re = qa(be || g.pointerEvent)),
                            (G = qa(r)),
                            (te = Bn({ x: re.left + re.width / 2, y: re.top + re.height / 2 })),
                            (me = Bn({ x: G.left + G.width / 2, y: G.top + G.height / 2 })),
                            (ne -= te.x - me.x),
                            (I -= te.y - me.y)),
                        g.isDragging || ((g.isDragging = vt = !0), Lt(g, 'dragstart', 'onDragStart')));
                }),
                (s.drag = cn),
                (s.endDrag = function (be) {
                    return Et(be || g.pointerEvent, !0);
                }),
                (s.timeSinceDrag = function () {
                    return g.isDragging ? 0 : (ar() - T) / 1e3;
                }),
                (s.timeSinceClick = function () {
                    return (ar() - z) / 1e3;
                }),
                (s.hitTest = function (be, j) {
                    return n.hitTest(g.target, be, j);
                }),
                (s.getDirection = function (be, j) {
                    var re = be === 'velocity' && Ai ? be : As(be) && !d ? 'element' : 'start',
                        G,
                        te,
                        me,
                        ve,
                        ae,
                        ce;
                    return (
                        re === 'element' && ((ae = qa(g.target)), (ce = qa(be))),
                        (G =
                            re === 'start'
                                ? g.x - A
                                : re === 'velocity'
                                  ? Ai.getVelocity(r, p)
                                  : ae.left + ae.width / 2 - (ce.left + ce.width / 2)),
                        d
                            ? G < 0
                                ? 'counter-clockwise'
                                : 'clockwise'
                            : ((j = j || 2),
                              (te =
                                  re === 'start'
                                      ? g.y - B
                                      : re === 'velocity'
                                        ? Ai.getVelocity(r, m)
                                        : ae.top + ae.height / 2 - (ce.top + ce.height / 2)),
                              (me = Math.abs(G / te)),
                              (ve = me < 1 / j ? '' : G < 0 ? 'left' : 'right'),
                              me < j && (ve !== '' && (ve += '-'), (ve += te < 0 ? 'up' : 'down')),
                              ve)
                    );
                }),
                (s.applyBounds = function (be, j) {
                    var re, G, te, me, ve, ae;
                    if (be && a.bounds !== be) return ((a.bounds = be), g.update(!0, j));
                    if ((un(!0), En(), R && !Ie())) {
                        if (
                            ((re = g.x),
                            (G = g.y),
                            re > M ? (re = M) : re < H && (re = H),
                            G > F ? (G = F) : G < ee && (G = ee),
                            (g.x !== re || g.y !== G) &&
                                ((te = !0),
                                (g.x = g.endX = re),
                                d ? (g.endRotation = re) : (g.y = g.endY = G),
                                (Ae = !0),
                                Pt(!0),
                                g.autoScroll && !g.isDragging))
                        )
                            for (
                                nm(r.parentNode),
                                    me = r,
                                    _l.scrollTop =
                                        mt.pageYOffset != null
                                            ? mt.pageYOffset
                                            : W.documentElement.scrollTop != null
                                              ? W.documentElement.scrollTop
                                              : W.body.scrollTop,
                                    _l.scrollLeft =
                                        mt.pageXOffset != null
                                            ? mt.pageXOffset
                                            : W.documentElement.scrollLeft != null
                                              ? W.documentElement.scrollLeft
                                              : W.body.scrollLeft;
                                me && !ae;
                            )
                                ((ae = ho(me.parentNode)),
                                    (ve = ae ? _l : me.parentNode),
                                    y && ve.scrollTop > ve._gsMaxScrollY && (ve.scrollTop = ve._gsMaxScrollY),
                                    v && ve.scrollLeft > ve._gsMaxScrollX && (ve.scrollLeft = ve._gsMaxScrollX),
                                    (me = ve));
                        g.isThrowing &&
                            (te || g.endX > M || g.endX < H || g.endY > F || g.endY < ee) &&
                            vn(a.inertia || a.throwProps, te);
                    }
                    return g;
                }),
                (s.update = function (be, j, re) {
                    if (j && g.isPressed) {
                        var G = Qr(r),
                            te = Ki.apply({ x: g.x - A, y: g.y - B }),
                            me = Qr(r.parentNode, !0);
                        (me.apply({ x: G.e - te.x, y: G.f - te.y }, te),
                            (g.x -= te.x - me.e),
                            (g.y -= te.y - me.f),
                            Pt(!0),
                            nt());
                    }
                    var ve = g.x,
                        ae = g.y;
                    return (
                        bt(!j),
                        be ? g.applyBounds() : (Ae && re && Pt(!0), un(!0)),
                        j && (fn(g.pointerX, g.pointerY), Ae && Pt(!0)),
                        g.isPressed &&
                            !j &&
                            ((v && Math.abs(ve - g.x) > 0.01) || (y && Math.abs(ae - g.y) > 0.01 && !d)) &&
                            nt(),
                        g.autoScroll &&
                            (nm(r.parentNode, g.isDragging), (O = g.isDragging), Pt(!0), A_(r, dn), T_(r, dn)),
                        g
                    );
                }),
                (s.enable = function (be) {
                    var j = { lazy: !0 },
                        re,
                        G,
                        te;
                    if (
                        (a.cursor !== !1 && (j.cursor = a.cursor || bs),
                        $e.utils.checkPrefix('touchCallout') && (j.touchCallout = 'none'),
                        be !== 'soft')
                    ) {
                        for (
                            S_(
                                x,
                                v === y
                                    ? 'none'
                                    : (a.allowNativeTouchScrolling &&
                                            (r.scrollHeight === r.clientHeight) ==
                                                (r.scrollWidth === r.clientHeight)) ||
                                        a.allowEventDefault
                                      ? 'manipulation'
                                      : v
                                        ? 'pan-y'
                                        : 'pan-x',
                            ),
                                G = x.length;
                            --G > -1;
                        )
                            ((te = x[G]),
                                Dc || Kt(te, 'mousedown', jn),
                                Kt(te, 'touchstart', jn),
                                Kt(te, 'click', en, !0),
                                $e.set(te, j),
                                te.getBBox &&
                                    te.ownerSVGElement &&
                                    v !== y &&
                                    $e.set(te.ownerSVGElement, {
                                        touchAction:
                                            a.allowNativeTouchScrolling || a.allowEventDefault
                                                ? 'manipulation'
                                                : v
                                                  ? 'pan-y'
                                                  : 'pan-x',
                                    }),
                                a.allowContextMenu || Kt(te, 'contextmenu', $i));
                        pc(x, !1);
                    }
                    return (
                        T_(r, dn),
                        (de = !0),
                        Ai && be !== 'soft' && Ai.track(ue || r, f ? 'x,y' : d ? 'rotation' : 'top,left'),
                        (r._gsDragID = re = r._gsDragID || 'd' + ZA++),
                        (to[re] = g),
                        ue && (ue.enable(), (ue.element._gsDragID = re)),
                        (a.bounds || d) && nt(),
                        a.bounds && g.applyBounds(),
                        g
                    );
                }),
                (s.disable = function (be) {
                    for (var j = g.isDragging, re = x.length, G; --re > -1; ) im(x[re], 'cursor', null);
                    if (be !== 'soft') {
                        for (S_(x, null), re = x.length; --re > -1; )
                            ((G = x[re]),
                                im(G, 'touchCallout', null),
                                Xt(G, 'mousedown', jn),
                                Xt(G, 'touchstart', jn),
                                Xt(G, 'click', en, !0),
                                Xt(G, 'contextmenu', $i));
                        (pc(x, !0),
                            We && (Xt(We, 'touchcancel', Et), Xt(We, 'touchend', Et), Xt(We, 'touchmove', cn)),
                            Xt(W, 'mouseup', Et),
                            Xt(W, 'mousemove', cn));
                    }
                    return (
                        A_(r, dn),
                        (de = !1),
                        Ai &&
                            be !== 'soft' &&
                            (Ai.untrack(ue || r, f ? 'x,y' : d ? 'rotation' : 'top,left'), g.tween && g.tween.kill()),
                        ue && ue.disable(),
                        w_(Pt),
                        (g.isDragging = g.isPressed = gt = !1),
                        j && Lt(g, 'dragend', 'onDragEnd'),
                        g
                    );
                }),
                (s.enabled = function (be, j) {
                    return arguments.length ? (be ? g.enable(j) : g.disable(j)) : de;
                }),
                (s.kill = function () {
                    return (
                        (g.isThrowing = !1),
                        g.tween && g.tween.kill(),
                        g.disable(),
                        $e.set(x, { clearProps: 'userSelect' }),
                        delete to[r._gsDragID],
                        g
                    );
                }),
                (s.revert = function () {
                    (this.kill(), this.styles && this.styles.revert());
                }),
                ~u.indexOf('scroll') &&
                    ((ue = s.scrollProxy =
                        new iM(
                            r,
                            $A(
                                {
                                    onKill: function () {
                                        g.isPressed && Et(null);
                                    },
                                },
                                a,
                            ),
                        )),
                    (r.style.overflowY = y && !Hm ? 'auto' : 'hidden'),
                    (r.style.overflowX = v && !Hm ? 'auto' : 'hidden'),
                    (r = ue.content)),
                d ? (b.rotation = 1) : (v && (b[p] = 1), y && (b[m] = 1)),
                (U.force3D = 'force3D' in a ? a.force3D : !0),
                U1(y_(s)),
                s.enable(),
                s
            );
        }
        return (
            (n.register = function (a) {
                (($e = a), rm());
            }),
            (n.create = function (a, s) {
                return (
                    Bm || rm(!0),
                    hr(a).map(function (u) {
                        return new n(u, s);
                    })
                );
            }),
            (n.get = function (a) {
                return to[(hr(a)[0] || {})._gsDragID];
            }),
            (n.timeSinceDrag = function () {
                return (ar() - b_) / 1e3;
            }),
            (n.hitTest = function (a, s, u) {
                if (a === s) return !1;
                var f = qa(a),
                    d = qa(s),
                    p = f.top,
                    m = f.left,
                    v = f.right,
                    y = f.bottom,
                    S = f.width,
                    g = f.height,
                    x = d.left > v || d.right < m || d.top > y || d.bottom < p,
                    b,
                    T,
                    O;
                return x || !u
                    ? !x
                    : ((O = (u + '').indexOf('%') !== -1),
                      (u = parseFloat(u) || 0),
                      (b = { left: Math.max(m, d.left), top: Math.max(p, d.top) }),
                      (b.width = Math.min(v, d.right) - b.left),
                      (b.height = Math.min(y, d.bottom) - b.top),
                      b.width < 0 || b.height < 0
                          ? !1
                          : O
                            ? ((u *= 0.01), (T = b.width * b.height), T >= S * g * u || T >= d.width * d.height * u)
                            : b.width > u && b.height > u);
            }),
            n
        );
    })(lM);
IA(Ps.prototype, {
    pointerX: 0,
    pointerY: 0,
    startX: 0,
    startY: 0,
    deltaX: 0,
    deltaY: 0,
    isDragging: !1,
    isPressed: !1,
});
Ps.zIndex = 1e3;
Ps.version = '3.13.0';
B1() && $e.registerPlugin(Ps);
const C_ = i => {
        let n;
        const r = new Set(),
            a = (m, v) => {
                const y = typeof m == 'function' ? m(n) : m;
                if (!Object.is(y, n)) {
                    const S = n;
                    ((n = (v ?? (typeof y != 'object' || y === null)) ? y : Object.assign({}, n, y)),
                        r.forEach(g => g(n, S)));
                }
            },
            s = () => n,
            d = { setState: a, getState: s, getInitialState: () => p, subscribe: m => (r.add(m), () => r.delete(m)) },
            p = (n = i(a, s, d));
        return d;
    },
    rM = i => (i ? C_(i) : C_),
    aM = i => i;
function oM(i, n = aM) {
    const r = $t.useSyncExternalStore(
        i.subscribe,
        $t.useCallback(() => n(i.getState()), [i, n]),
        $t.useCallback(() => n(i.getInitialState()), [i, n]),
    );
    return ($t.useDebugValue(r), r);
}
const D_ = i => {
        const n = rM(i),
            r = a => oM(n, a);
        return (Object.assign(r, n), r);
    },
    X1 = i => (i ? D_(i) : D_),
    q1 = X1(i => ({ isMobile: null, setIsMobile: n => i({ isMobile: n }) }));
let R_ = typeof document < 'u' ? E.useLayoutEffect : E.useEffect,
    z_ = i => i && !Array.isArray(i) && typeof i == 'object',
    gc = [],
    sM = {},
    V1 = vo;
const df = (i, n = gc) => {
    let r = sM;
    (z_(i)
        ? ((r = i), (i = null), (n = 'dependencies' in r ? r.dependencies : gc))
        : z_(n) && ((r = n), (n = 'dependencies' in r ? r.dependencies : gc)),
        i && typeof i != 'function' && console.warn('First parameter must be a function or config object'));
    const { scope: a, revertOnUpdate: s } = r,
        u = E.useRef(!1),
        f = E.useRef(V1.context(() => {}, a)),
        d = E.useRef(m => f.current.add(null, m)),
        p = n && n.length && !s;
    return (
        p && R_(() => ((u.current = !0), () => f.current.revert()), gc),
        R_(() => {
            if ((i && f.current.add(i, a), !p || !u.current)) return () => f.current.revert();
        }, n),
        { context: f.current, contextSafe: d.current }
    );
};
df.register = i => {
    V1 = i;
};
df.headless = !0;
const uM = ['top', 'right', 'bottom', 'left'],
    yr = Math.min,
    Zn = Math.max,
    Zc = Math.round,
    vc = Math.floor,
    Vi = i => ({ x: i, y: i }),
    cM = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' },
    fM = { start: 'end', end: 'start' };
function qm(i, n, r) {
    return Zn(i, yr(n, r));
}
function Ol(i, n) {
    return typeof i == 'function' ? i(n) : i;
}
function Cl(i) {
    return i.split('-')[0];
}
function yo(i) {
    return i.split('-')[1];
}
function Np(i) {
    return i === 'x' ? 'y' : 'x';
}
function Lp(i) {
    return i === 'y' ? 'height' : 'width';
}
const dM = new Set(['top', 'bottom']);
function qi(i) {
    return dM.has(Cl(i)) ? 'y' : 'x';
}
function kp(i) {
    return Np(qi(i));
}
function hM(i, n, r) {
    r === void 0 && (r = !1);
    const a = yo(i),
        s = kp(i),
        u = Lp(s);
    let f = s === 'x' ? (a === (r ? 'end' : 'start') ? 'right' : 'left') : a === 'start' ? 'bottom' : 'top';
    return (n.reference[u] > n.floating[u] && (f = Kc(f)), [f, Kc(f)]);
}
function mM(i) {
    const n = Kc(i);
    return [Vm(i), n, Vm(n)];
}
function Vm(i) {
    return i.replace(/start|end/g, n => fM[n]);
}
const N_ = ['left', 'right'],
    L_ = ['right', 'left'],
    pM = ['top', 'bottom'],
    gM = ['bottom', 'top'];
function vM(i, n, r) {
    switch (i) {
        case 'top':
        case 'bottom':
            return r ? (n ? L_ : N_) : n ? N_ : L_;
        case 'left':
        case 'right':
            return n ? pM : gM;
        default:
            return [];
    }
}
function yM(i, n, r, a) {
    const s = yo(i);
    let u = vM(Cl(i), r === 'start', a);
    return (s && ((u = u.map(f => f + '-' + s)), n && (u = u.concat(u.map(Vm)))), u);
}
function Kc(i) {
    return i.replace(/left|right|bottom|top/g, n => cM[n]);
}
function _M(i) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...i };
}
function P1(i) {
    return typeof i != 'number' ? _M(i) : { top: i, right: i, bottom: i, left: i };
}
function $c(i) {
    const { x: n, y: r, width: a, height: s } = i;
    return { width: a, height: s, top: r, left: n, right: n + a, bottom: r + s, x: n, y: r };
}
function k_(i, n, r) {
    let { reference: a, floating: s } = i;
    const u = qi(n),
        f = kp(n),
        d = Lp(f),
        p = Cl(n),
        m = u === 'y',
        v = a.x + a.width / 2 - s.width / 2,
        y = a.y + a.height / 2 - s.height / 2,
        S = a[d] / 2 - s[d] / 2;
    let g;
    switch (p) {
        case 'top':
            g = { x: v, y: a.y - s.height };
            break;
        case 'bottom':
            g = { x: v, y: a.y + a.height };
            break;
        case 'right':
            g = { x: a.x + a.width, y };
            break;
        case 'left':
            g = { x: a.x - s.width, y };
            break;
        default:
            g = { x: a.x, y: a.y };
    }
    switch (yo(n)) {
        case 'start':
            g[f] -= S * (r && m ? -1 : 1);
            break;
        case 'end':
            g[f] += S * (r && m ? -1 : 1);
            break;
    }
    return g;
}
const bM = async (i, n, r) => {
    const { placement: a = 'bottom', strategy: s = 'absolute', middleware: u = [], platform: f } = r,
        d = u.filter(Boolean),
        p = await (f.isRTL == null ? void 0 : f.isRTL(n));
    let m = await f.getElementRects({ reference: i, floating: n, strategy: s }),
        { x: v, y } = k_(m, a, p),
        S = a,
        g = {},
        x = 0;
    for (let b = 0; b < d.length; b++) {
        const { name: T, fn: O } = d[b],
            {
                x: L,
                y: D,
                data: k,
                reset: C,
            } = await O({
                x: v,
                y,
                initialPlacement: a,
                placement: S,
                strategy: s,
                middlewareData: g,
                rects: m,
                platform: f,
                elements: { reference: i, floating: n },
            });
        ((v = L ?? v),
            (y = D ?? y),
            (g = { ...g, [T]: { ...g[T], ...k } }),
            C &&
                x <= 50 &&
                (x++,
                typeof C == 'object' &&
                    (C.placement && (S = C.placement),
                    C.rects &&
                        (m =
                            C.rects === !0
                                ? await f.getElementRects({ reference: i, floating: n, strategy: s })
                                : C.rects),
                    ({ x: v, y } = k_(m, S, p))),
                (b = -1)));
    }
    return { x: v, y, placement: S, strategy: s, middlewareData: g };
};
async function js(i, n) {
    var r;
    n === void 0 && (n = {});
    const { x: a, y: s, platform: u, rects: f, elements: d, strategy: p } = i,
        {
            boundary: m = 'clippingAncestors',
            rootBoundary: v = 'viewport',
            elementContext: y = 'floating',
            altBoundary: S = !1,
            padding: g = 0,
        } = Ol(n, i),
        x = P1(g),
        T = d[S ? (y === 'floating' ? 'reference' : 'floating') : y],
        O = $c(
            await u.getClippingRect({
                element:
                    (r = await (u.isElement == null ? void 0 : u.isElement(T))) == null || r
                        ? T
                        : T.contextElement ||
                          (await (u.getDocumentElement == null ? void 0 : u.getDocumentElement(d.floating))),
                boundary: m,
                rootBoundary: v,
                strategy: p,
            }),
        ),
        L = y === 'floating' ? { x: a, y: s, width: f.floating.width, height: f.floating.height } : f.reference,
        D = await (u.getOffsetParent == null ? void 0 : u.getOffsetParent(d.floating)),
        k = (await (u.isElement == null ? void 0 : u.isElement(D)))
            ? (await (u.getScale == null ? void 0 : u.getScale(D))) || { x: 1, y: 1 }
            : { x: 1, y: 1 },
        C = $c(
            u.convertOffsetParentRelativeRectToViewportRelativeRect
                ? await u.convertOffsetParentRelativeRectToViewportRelativeRect({
                      elements: d,
                      rect: L,
                      offsetParent: D,
                      strategy: p,
                  })
                : L,
        );
    return {
        top: (O.top - C.top + x.top) / k.y,
        bottom: (C.bottom - O.bottom + x.bottom) / k.y,
        left: (O.left - C.left + x.left) / k.x,
        right: (C.right - O.right + x.right) / k.x,
    };
}
const SM = i => ({
        name: 'arrow',
        options: i,
        async fn(n) {
            const { x: r, y: a, placement: s, rects: u, platform: f, elements: d, middlewareData: p } = n,
                { element: m, padding: v = 0 } = Ol(i, n) || {};
            if (m == null) return {};
            const y = P1(v),
                S = { x: r, y: a },
                g = kp(s),
                x = Lp(g),
                b = await f.getDimensions(m),
                T = g === 'y',
                O = T ? 'top' : 'left',
                L = T ? 'bottom' : 'right',
                D = T ? 'clientHeight' : 'clientWidth',
                k = u.reference[x] + u.reference[g] - S[g] - u.floating[x],
                C = S[g] - u.reference[g],
                X = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(m));
            let z = X ? X[D] : 0;
            (!z || !(await (f.isElement == null ? void 0 : f.isElement(X)))) && (z = d.floating[D] || u.floating[x]);
            const U = k / 2 - C / 2,
                P = z / 2 - b[x] / 2 - 1,
                se = yr(y[O], P),
                W = yr(y[L], P),
                de = se,
                ue = z - b[x] - W,
                ne = z / 2 - b[x] / 2 + U,
                I = qm(de, ne, ue),
                A = !p.arrow && yo(s) != null && ne !== I && u.reference[x] / 2 - (ne < de ? se : W) - b[x] / 2 < 0,
                B = A ? (ne < de ? ne - de : ne - ue) : 0;
            return {
                [g]: S[g] + B,
                data: { [g]: I, centerOffset: ne - I - B, ...(A && { alignmentOffset: B }) },
                reset: A,
            };
        },
    }),
    xM = function (i) {
        return (
            i === void 0 && (i = {}),
            {
                name: 'flip',
                options: i,
                async fn(n) {
                    var r, a;
                    const {
                            placement: s,
                            middlewareData: u,
                            rects: f,
                            initialPlacement: d,
                            platform: p,
                            elements: m,
                        } = n,
                        {
                            mainAxis: v = !0,
                            crossAxis: y = !0,
                            fallbackPlacements: S,
                            fallbackStrategy: g = 'bestFit',
                            fallbackAxisSideDirection: x = 'none',
                            flipAlignment: b = !0,
                            ...T
                        } = Ol(i, n);
                    if ((r = u.arrow) != null && r.alignmentOffset) return {};
                    const O = Cl(s),
                        L = qi(d),
                        D = Cl(d) === d,
                        k = await (p.isRTL == null ? void 0 : p.isRTL(m.floating)),
                        C = S || (D || !b ? [Kc(d)] : mM(d)),
                        X = x !== 'none';
                    !S && X && C.push(...yM(d, b, x, k));
                    const z = [d, ...C],
                        U = await js(n, T),
                        P = [];
                    let se = ((a = u.flip) == null ? void 0 : a.overflows) || [];
                    if ((v && P.push(U[O]), y)) {
                        const ne = hM(s, f, k);
                        P.push(U[ne[0]], U[ne[1]]);
                    }
                    if (((se = [...se, { placement: s, overflows: P }]), !P.every(ne => ne <= 0))) {
                        var W, de;
                        const ne = (((W = u.flip) == null ? void 0 : W.index) || 0) + 1,
                            I = z[ne];
                        if (
                            I &&
                            (!(y === 'alignment' ? L !== qi(I) : !1) ||
                                se.every(R => (qi(R.placement) === L ? R.overflows[0] > 0 : !0)))
                        )
                            return { data: { index: ne, overflows: se }, reset: { placement: I } };
                        let A =
                            (de = se
                                .filter(B => B.overflows[0] <= 0)
                                .sort((B, R) => B.overflows[1] - R.overflows[1])[0]) == null
                                ? void 0
                                : de.placement;
                        if (!A)
                            switch (g) {
                                case 'bestFit': {
                                    var ue;
                                    const B =
                                        (ue = se
                                            .filter(R => {
                                                if (X) {
                                                    const $ = qi(R.placement);
                                                    return $ === L || $ === 'y';
                                                }
                                                return !0;
                                            })
                                            .map(R => [
                                                R.placement,
                                                R.overflows.filter($ => $ > 0).reduce(($, fe) => $ + fe, 0),
                                            ])
                                            .sort((R, $) => R[1] - $[1])[0]) == null
                                            ? void 0
                                            : ue[0];
                                    B && (A = B);
                                    break;
                                }
                                case 'initialPlacement':
                                    A = d;
                                    break;
                            }
                        if (s !== A) return { reset: { placement: A } };
                    }
                    return {};
                },
            }
        );
    };
function U_(i, n) {
    return { top: i.top - n.height, right: i.right - n.width, bottom: i.bottom - n.height, left: i.left - n.width };
}
function j_(i) {
    return uM.some(n => i[n] >= 0);
}
const wM = function (i) {
        return (
            i === void 0 && (i = {}),
            {
                name: 'hide',
                options: i,
                async fn(n) {
                    const { rects: r } = n,
                        { strategy: a = 'referenceHidden', ...s } = Ol(i, n);
                    switch (a) {
                        case 'referenceHidden': {
                            const u = await js(n, { ...s, elementContext: 'reference' }),
                                f = U_(u, r.reference);
                            return { data: { referenceHiddenOffsets: f, referenceHidden: j_(f) } };
                        }
                        case 'escaped': {
                            const u = await js(n, { ...s, altBoundary: !0 }),
                                f = U_(u, r.floating);
                            return { data: { escapedOffsets: f, escaped: j_(f) } };
                        }
                        default:
                            return {};
                    }
                },
            }
        );
    },
    Q1 = new Set(['left', 'top']);
async function EM(i, n) {
    const { placement: r, platform: a, elements: s } = i,
        u = await (a.isRTL == null ? void 0 : a.isRTL(s.floating)),
        f = Cl(r),
        d = yo(r),
        p = qi(r) === 'y',
        m = Q1.has(f) ? -1 : 1,
        v = u && p ? -1 : 1,
        y = Ol(n, i);
    let {
        mainAxis: S,
        crossAxis: g,
        alignmentAxis: x,
    } = typeof y == 'number'
        ? { mainAxis: y, crossAxis: 0, alignmentAxis: null }
        : { mainAxis: y.mainAxis || 0, crossAxis: y.crossAxis || 0, alignmentAxis: y.alignmentAxis };
    return (
        d && typeof x == 'number' && (g = d === 'end' ? x * -1 : x),
        p ? { x: g * v, y: S * m } : { x: S * m, y: g * v }
    );
}
const TM = function (i) {
        return (
            i === void 0 && (i = 0),
            {
                name: 'offset',
                options: i,
                async fn(n) {
                    var r, a;
                    const { x: s, y: u, placement: f, middlewareData: d } = n,
                        p = await EM(n, i);
                    return f === ((r = d.offset) == null ? void 0 : r.placement) &&
                        (a = d.arrow) != null &&
                        a.alignmentOffset
                        ? {}
                        : { x: s + p.x, y: u + p.y, data: { ...p, placement: f } };
                },
            }
        );
    },
    AM = function (i) {
        return (
            i === void 0 && (i = {}),
            {
                name: 'shift',
                options: i,
                async fn(n) {
                    const { x: r, y: a, placement: s } = n,
                        {
                            mainAxis: u = !0,
                            crossAxis: f = !1,
                            limiter: d = {
                                fn: T => {
                                    let { x: O, y: L } = T;
                                    return { x: O, y: L };
                                },
                            },
                            ...p
                        } = Ol(i, n),
                        m = { x: r, y: a },
                        v = await js(n, p),
                        y = qi(Cl(s)),
                        S = Np(y);
                    let g = m[S],
                        x = m[y];
                    if (u) {
                        const T = S === 'y' ? 'top' : 'left',
                            O = S === 'y' ? 'bottom' : 'right',
                            L = g + v[T],
                            D = g - v[O];
                        g = qm(L, g, D);
                    }
                    if (f) {
                        const T = y === 'y' ? 'top' : 'left',
                            O = y === 'y' ? 'bottom' : 'right',
                            L = x + v[T],
                            D = x - v[O];
                        x = qm(L, x, D);
                    }
                    const b = d.fn({ ...n, [S]: g, [y]: x });
                    return { ...b, data: { x: b.x - r, y: b.y - a, enabled: { [S]: u, [y]: f } } };
                },
            }
        );
    },
    MM = function (i) {
        return (
            i === void 0 && (i = {}),
            {
                options: i,
                fn(n) {
                    const { x: r, y: a, placement: s, rects: u, middlewareData: f } = n,
                        { offset: d = 0, mainAxis: p = !0, crossAxis: m = !0 } = Ol(i, n),
                        v = { x: r, y: a },
                        y = qi(s),
                        S = Np(y);
                    let g = v[S],
                        x = v[y];
                    const b = Ol(d, n),
                        T = typeof b == 'number' ? { mainAxis: b, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...b };
                    if (p) {
                        const D = S === 'y' ? 'height' : 'width',
                            k = u.reference[S] - u.floating[D] + T.mainAxis,
                            C = u.reference[S] + u.reference[D] - T.mainAxis;
                        g < k ? (g = k) : g > C && (g = C);
                    }
                    if (m) {
                        var O, L;
                        const D = S === 'y' ? 'width' : 'height',
                            k = Q1.has(Cl(s)),
                            C =
                                u.reference[y] -
                                u.floating[D] +
                                ((k && ((O = f.offset) == null ? void 0 : O[y])) || 0) +
                                (k ? 0 : T.crossAxis),
                            X =
                                u.reference[y] +
                                u.reference[D] +
                                (k ? 0 : ((L = f.offset) == null ? void 0 : L[y]) || 0) -
                                (k ? T.crossAxis : 0);
                        x < C ? (x = C) : x > X && (x = X);
                    }
                    return { [S]: g, [y]: x };
                },
            }
        );
    },
    OM = function (i) {
        return (
            i === void 0 && (i = {}),
            {
                name: 'size',
                options: i,
                async fn(n) {
                    var r, a;
                    const { placement: s, rects: u, platform: f, elements: d } = n,
                        { apply: p = () => {}, ...m } = Ol(i, n),
                        v = await js(n, m),
                        y = Cl(s),
                        S = yo(s),
                        g = qi(s) === 'y',
                        { width: x, height: b } = u.floating;
                    let T, O;
                    y === 'top' || y === 'bottom'
                        ? ((T = y),
                          (O =
                              S === ((await (f.isRTL == null ? void 0 : f.isRTL(d.floating))) ? 'start' : 'end')
                                  ? 'left'
                                  : 'right'))
                        : ((O = y), (T = S === 'end' ? 'top' : 'bottom'));
                    const L = b - v.top - v.bottom,
                        D = x - v.left - v.right,
                        k = yr(b - v[T], L),
                        C = yr(x - v[O], D),
                        X = !n.middlewareData.shift;
                    let z = k,
                        U = C;
                    if (
                        ((r = n.middlewareData.shift) != null && r.enabled.x && (U = D),
                        (a = n.middlewareData.shift) != null && a.enabled.y && (z = L),
                        X && !S)
                    ) {
                        const se = Zn(v.left, 0),
                            W = Zn(v.right, 0),
                            de = Zn(v.top, 0),
                            ue = Zn(v.bottom, 0);
                        g
                            ? (U = x - 2 * (se !== 0 || W !== 0 ? se + W : Zn(v.left, v.right)))
                            : (z = b - 2 * (de !== 0 || ue !== 0 ? de + ue : Zn(v.top, v.bottom)));
                    }
                    await p({ ...n, availableWidth: U, availableHeight: z });
                    const P = await f.getDimensions(d.floating);
                    return x !== P.width || b !== P.height ? { reset: { rects: !0 } } : {};
                },
            }
        );
    };
function hf() {
    return typeof window < 'u';
}
function _o(i) {
    return Z1(i) ? (i.nodeName || '').toLowerCase() : '#document';
}
function Wn(i) {
    var n;
    return (i == null || (n = i.ownerDocument) == null ? void 0 : n.defaultView) || window;
}
function Zi(i) {
    var n;
    return (n = (Z1(i) ? i.ownerDocument : i.document) || window.document) == null ? void 0 : n.documentElement;
}
function Z1(i) {
    return hf() ? i instanceof Node || i instanceof Wn(i).Node : !1;
}
function Ri(i) {
    return hf() ? i instanceof Element || i instanceof Wn(i).Element : !1;
}
function Qi(i) {
    return hf() ? i instanceof HTMLElement || i instanceof Wn(i).HTMLElement : !1;
}
function B_(i) {
    return !hf() || typeof ShadowRoot > 'u' ? !1 : i instanceof ShadowRoot || i instanceof Wn(i).ShadowRoot;
}
const CM = new Set(['inline', 'contents']);
function Qs(i) {
    const { overflow: n, overflowX: r, overflowY: a, display: s } = zi(i);
    return /auto|scroll|overlay|hidden|clip/.test(n + a + r) && !CM.has(s);
}
const DM = new Set(['table', 'td', 'th']);
function RM(i) {
    return DM.has(_o(i));
}
const zM = [':popover-open', ':modal'];
function mf(i) {
    return zM.some(n => {
        try {
            return i.matches(n);
        } catch {
            return !1;
        }
    });
}
const NM = ['transform', 'translate', 'scale', 'rotate', 'perspective'],
    LM = ['transform', 'translate', 'scale', 'rotate', 'perspective', 'filter'],
    kM = ['paint', 'layout', 'strict', 'content'];
function Up(i) {
    const n = jp(),
        r = Ri(i) ? zi(i) : i;
    return (
        NM.some(a => (r[a] ? r[a] !== 'none' : !1)) ||
        (r.containerType ? r.containerType !== 'normal' : !1) ||
        (!n && (r.backdropFilter ? r.backdropFilter !== 'none' : !1)) ||
        (!n && (r.filter ? r.filter !== 'none' : !1)) ||
        LM.some(a => (r.willChange || '').includes(a)) ||
        kM.some(a => (r.contain || '').includes(a))
    );
}
function UM(i) {
    let n = _r(i);
    for (; Qi(n) && !mo(n); ) {
        if (Up(n)) return n;
        if (mf(n)) return null;
        n = _r(n);
    }
    return null;
}
function jp() {
    return typeof CSS > 'u' || !CSS.supports ? !1 : CSS.supports('-webkit-backdrop-filter', 'none');
}
const jM = new Set(['html', 'body', '#document']);
function mo(i) {
    return jM.has(_o(i));
}
function zi(i) {
    return Wn(i).getComputedStyle(i);
}
function pf(i) {
    return Ri(i)
        ? { scrollLeft: i.scrollLeft, scrollTop: i.scrollTop }
        : { scrollLeft: i.scrollX, scrollTop: i.scrollY };
}
function _r(i) {
    if (_o(i) === 'html') return i;
    const n = i.assignedSlot || i.parentNode || (B_(i) && i.host) || Zi(i);
    return B_(n) ? n.host : n;
}
function K1(i) {
    const n = _r(i);
    return mo(n) ? (i.ownerDocument ? i.ownerDocument.body : i.body) : Qi(n) && Qs(n) ? n : K1(n);
}
function Bs(i, n, r) {
    var a;
    (n === void 0 && (n = []), r === void 0 && (r = !0));
    const s = K1(i),
        u = s === ((a = i.ownerDocument) == null ? void 0 : a.body),
        f = Wn(s);
    if (u) {
        const d = Pm(f);
        return n.concat(f, f.visualViewport || [], Qs(s) ? s : [], d && r ? Bs(d) : []);
    }
    return n.concat(s, Bs(s, [], r));
}
function Pm(i) {
    return i.parent && Object.getPrototypeOf(i.parent) ? i.frameElement : null;
}
function $1(i) {
    const n = zi(i);
    let r = parseFloat(n.width) || 0,
        a = parseFloat(n.height) || 0;
    const s = Qi(i),
        u = s ? i.offsetWidth : r,
        f = s ? i.offsetHeight : a,
        d = Zc(r) !== u || Zc(a) !== f;
    return (d && ((r = u), (a = f)), { width: r, height: a, $: d });
}
function Bp(i) {
    return Ri(i) ? i : i.contextElement;
}
function lo(i) {
    const n = Bp(i);
    if (!Qi(n)) return Vi(1);
    const r = n.getBoundingClientRect(),
        { width: a, height: s, $: u } = $1(n);
    let f = (u ? Zc(r.width) : r.width) / a,
        d = (u ? Zc(r.height) : r.height) / s;
    return ((!f || !Number.isFinite(f)) && (f = 1), (!d || !Number.isFinite(d)) && (d = 1), { x: f, y: d });
}
const BM = Vi(0);
function F1(i) {
    const n = Wn(i);
    return !jp() || !n.visualViewport ? BM : { x: n.visualViewport.offsetLeft, y: n.visualViewport.offsetTop };
}
function HM(i, n, r) {
    return (n === void 0 && (n = !1), !r || (n && r !== Wn(i)) ? !1 : n);
}
function na(i, n, r, a) {
    (n === void 0 && (n = !1), r === void 0 && (r = !1));
    const s = i.getBoundingClientRect(),
        u = Bp(i);
    let f = Vi(1);
    n && (a ? Ri(a) && (f = lo(a)) : (f = lo(i)));
    const d = HM(u, r, a) ? F1(u) : Vi(0);
    let p = (s.left + d.x) / f.x,
        m = (s.top + d.y) / f.y,
        v = s.width / f.x,
        y = s.height / f.y;
    if (u) {
        const S = Wn(u),
            g = a && Ri(a) ? Wn(a) : a;
        let x = S,
            b = Pm(x);
        for (; b && a && g !== x; ) {
            const T = lo(b),
                O = b.getBoundingClientRect(),
                L = zi(b),
                D = O.left + (b.clientLeft + parseFloat(L.paddingLeft)) * T.x,
                k = O.top + (b.clientTop + parseFloat(L.paddingTop)) * T.y;
            ((p *= T.x), (m *= T.y), (v *= T.x), (y *= T.y), (p += D), (m += k), (x = Wn(b)), (b = Pm(x)));
        }
    }
    return $c({ width: v, height: y, x: p, y: m });
}
function gf(i, n) {
    const r = pf(i).scrollLeft;
    return n ? n.left + r : na(Zi(i)).left + r;
}
function I1(i, n) {
    const r = i.getBoundingClientRect(),
        a = r.left + n.scrollLeft - gf(i, r),
        s = r.top + n.scrollTop;
    return { x: a, y: s };
}
function YM(i) {
    let { elements: n, rect: r, offsetParent: a, strategy: s } = i;
    const u = s === 'fixed',
        f = Zi(a),
        d = n ? mf(n.floating) : !1;
    if (a === f || (d && u)) return r;
    let p = { scrollLeft: 0, scrollTop: 0 },
        m = Vi(1);
    const v = Vi(0),
        y = Qi(a);
    if ((y || (!y && !u)) && ((_o(a) !== 'body' || Qs(f)) && (p = pf(a)), Qi(a))) {
        const g = na(a);
        ((m = lo(a)), (v.x = g.x + a.clientLeft), (v.y = g.y + a.clientTop));
    }
    const S = f && !y && !u ? I1(f, p) : Vi(0);
    return {
        width: r.width * m.x,
        height: r.height * m.y,
        x: r.x * m.x - p.scrollLeft * m.x + v.x + S.x,
        y: r.y * m.y - p.scrollTop * m.y + v.y + S.y,
    };
}
function GM(i) {
    return Array.from(i.getClientRects());
}
function XM(i) {
    const n = Zi(i),
        r = pf(i),
        a = i.ownerDocument.body,
        s = Zn(n.scrollWidth, n.clientWidth, a.scrollWidth, a.clientWidth),
        u = Zn(n.scrollHeight, n.clientHeight, a.scrollHeight, a.clientHeight);
    let f = -r.scrollLeft + gf(i);
    const d = -r.scrollTop;
    return (
        zi(a).direction === 'rtl' && (f += Zn(n.clientWidth, a.clientWidth) - s),
        { width: s, height: u, x: f, y: d }
    );
}
const H_ = 25;
function qM(i, n) {
    const r = Wn(i),
        a = Zi(i),
        s = r.visualViewport;
    let u = a.clientWidth,
        f = a.clientHeight,
        d = 0,
        p = 0;
    if (s) {
        ((u = s.width), (f = s.height));
        const v = jp();
        (!v || (v && n === 'fixed')) && ((d = s.offsetLeft), (p = s.offsetTop));
    }
    const m = gf(a);
    if (m <= 0) {
        const v = a.ownerDocument,
            y = v.body,
            S = getComputedStyle(y),
            g = (v.compatMode === 'CSS1Compat' && parseFloat(S.marginLeft) + parseFloat(S.marginRight)) || 0,
            x = Math.abs(a.clientWidth - y.clientWidth - g);
        x <= H_ && (u -= x);
    } else m <= H_ && (u += m);
    return { width: u, height: f, x: d, y: p };
}
const VM = new Set(['absolute', 'fixed']);
function PM(i, n) {
    const r = na(i, !0, n === 'fixed'),
        a = r.top + i.clientTop,
        s = r.left + i.clientLeft,
        u = Qi(i) ? lo(i) : Vi(1),
        f = i.clientWidth * u.x,
        d = i.clientHeight * u.y,
        p = s * u.x,
        m = a * u.y;
    return { width: f, height: d, x: p, y: m };
}
function Y_(i, n, r) {
    let a;
    if (n === 'viewport') a = qM(i, r);
    else if (n === 'document') a = XM(Zi(i));
    else if (Ri(n)) a = PM(n, r);
    else {
        const s = F1(i);
        a = { x: n.x - s.x, y: n.y - s.y, width: n.width, height: n.height };
    }
    return $c(a);
}
function J1(i, n) {
    const r = _r(i);
    return r === n || !Ri(r) || mo(r) ? !1 : zi(r).position === 'fixed' || J1(r, n);
}
function QM(i, n) {
    const r = n.get(i);
    if (r) return r;
    let a = Bs(i, [], !1).filter(d => Ri(d) && _o(d) !== 'body'),
        s = null;
    const u = zi(i).position === 'fixed';
    let f = u ? _r(i) : i;
    for (; Ri(f) && !mo(f); ) {
        const d = zi(f),
            p = Up(f);
        (!p && d.position === 'fixed' && (s = null),
            (u ? !p && !s : (!p && d.position === 'static' && !!s && VM.has(s.position)) || (Qs(f) && !p && J1(i, f)))
                ? (a = a.filter(v => v !== f))
                : (s = d),
            (f = _r(f)));
    }
    return (n.set(i, a), a);
}
function ZM(i) {
    let { element: n, boundary: r, rootBoundary: a, strategy: s } = i;
    const f = [...(r === 'clippingAncestors' ? (mf(n) ? [] : QM(n, this._c)) : [].concat(r)), a],
        d = f[0],
        p = f.reduce(
            (m, v) => {
                const y = Y_(n, v, s);
                return (
                    (m.top = Zn(y.top, m.top)),
                    (m.right = yr(y.right, m.right)),
                    (m.bottom = yr(y.bottom, m.bottom)),
                    (m.left = Zn(y.left, m.left)),
                    m
                );
            },
            Y_(n, d, s),
        );
    return { width: p.right - p.left, height: p.bottom - p.top, x: p.left, y: p.top };
}
function KM(i) {
    const { width: n, height: r } = $1(i);
    return { width: n, height: r };
}
function $M(i, n, r) {
    const a = Qi(n),
        s = Zi(n),
        u = r === 'fixed',
        f = na(i, !0, u, n);
    let d = { scrollLeft: 0, scrollTop: 0 };
    const p = Vi(0);
    function m() {
        p.x = gf(s);
    }
    if (a || (!a && !u))
        if (((_o(n) !== 'body' || Qs(s)) && (d = pf(n)), a)) {
            const g = na(n, !0, u, n);
            ((p.x = g.x + n.clientLeft), (p.y = g.y + n.clientTop));
        } else s && m();
    u && !a && s && m();
    const v = s && !a && !u ? I1(s, d) : Vi(0),
        y = f.left + d.scrollLeft - p.x - v.x,
        S = f.top + d.scrollTop - p.y - v.y;
    return { x: y, y: S, width: f.width, height: f.height };
}
function am(i) {
    return zi(i).position === 'static';
}
function G_(i, n) {
    if (!Qi(i) || zi(i).position === 'fixed') return null;
    if (n) return n(i);
    let r = i.offsetParent;
    return (Zi(i) === r && (r = r.ownerDocument.body), r);
}
function W1(i, n) {
    const r = Wn(i);
    if (mf(i)) return r;
    if (!Qi(i)) {
        let s = _r(i);
        for (; s && !mo(s); ) {
            if (Ri(s) && !am(s)) return s;
            s = _r(s);
        }
        return r;
    }
    let a = G_(i, n);
    for (; a && RM(a) && am(a); ) a = G_(a, n);
    return a && mo(a) && am(a) && !Up(a) ? r : a || UM(i) || r;
}
const FM = async function (i) {
    const n = this.getOffsetParent || W1,
        r = this.getDimensions,
        a = await r(i.floating);
    return {
        reference: $M(i.reference, await n(i.floating), i.strategy),
        floating: { x: 0, y: 0, width: a.width, height: a.height },
    };
};
function IM(i) {
    return zi(i).direction === 'rtl';
}
const JM = {
    convertOffsetParentRelativeRectToViewportRelativeRect: YM,
    getDocumentElement: Zi,
    getClippingRect: ZM,
    getOffsetParent: W1,
    getElementRects: FM,
    getClientRects: GM,
    getDimensions: KM,
    getScale: lo,
    isElement: Ri,
    isRTL: IM,
};
function eS(i, n) {
    return i.x === n.x && i.y === n.y && i.width === n.width && i.height === n.height;
}
function WM(i, n) {
    let r = null,
        a;
    const s = Zi(i);
    function u() {
        var d;
        (clearTimeout(a), (d = r) == null || d.disconnect(), (r = null));
    }
    function f(d, p) {
        (d === void 0 && (d = !1), p === void 0 && (p = 1), u());
        const m = i.getBoundingClientRect(),
            { left: v, top: y, width: S, height: g } = m;
        if ((d || n(), !S || !g)) return;
        const x = vc(y),
            b = vc(s.clientWidth - (v + S)),
            T = vc(s.clientHeight - (y + g)),
            O = vc(v),
            D = { rootMargin: -x + 'px ' + -b + 'px ' + -T + 'px ' + -O + 'px', threshold: Zn(0, yr(1, p)) || 1 };
        let k = !0;
        function C(X) {
            const z = X[0].intersectionRatio;
            if (z !== p) {
                if (!k) return f();
                z
                    ? f(!1, z)
                    : (a = setTimeout(() => {
                          f(!1, 1e-7);
                      }, 1e3));
            }
            (z === 1 && !eS(m, i.getBoundingClientRect()) && f(), (k = !1));
        }
        try {
            r = new IntersectionObserver(C, { ...D, root: s.ownerDocument });
        } catch {
            r = new IntersectionObserver(C, D);
        }
        r.observe(i);
    }
    return (f(!0), u);
}
function tS(i, n, r, a) {
    a === void 0 && (a = {});
    const {
            ancestorScroll: s = !0,
            ancestorResize: u = !0,
            elementResize: f = typeof ResizeObserver == 'function',
            layoutShift: d = typeof IntersectionObserver == 'function',
            animationFrame: p = !1,
        } = a,
        m = Bp(i),
        v = s || u ? [...(m ? Bs(m) : []), ...Bs(n)] : [];
    v.forEach(O => {
        (s && O.addEventListener('scroll', r, { passive: !0 }), u && O.addEventListener('resize', r));
    });
    const y = m && d ? WM(m, r) : null;
    let S = -1,
        g = null;
    f &&
        ((g = new ResizeObserver(O => {
            let [L] = O;
            (L &&
                L.target === m &&
                g &&
                (g.unobserve(n),
                cancelAnimationFrame(S),
                (S = requestAnimationFrame(() => {
                    var D;
                    (D = g) == null || D.observe(n);
                }))),
                r());
        })),
        m && !p && g.observe(m),
        g.observe(n));
    let x,
        b = p ? na(i) : null;
    p && T();
    function T() {
        const O = na(i);
        (b && !eS(b, O) && r(), (b = O), (x = requestAnimationFrame(T)));
    }
    return (
        r(),
        () => {
            var O;
            (v.forEach(L => {
                (s && L.removeEventListener('scroll', r), u && L.removeEventListener('resize', r));
            }),
                y?.(),
                (O = g) == null || O.disconnect(),
                (g = null),
                p && cancelAnimationFrame(x));
        }
    );
}
const nS = TM,
    iS = AM,
    lS = xM,
    eO = OM,
    tO = wM,
    Qm = SM,
    nO = MM,
    Zm = (i, n, r) => {
        const a = new Map(),
            s = { platform: JM, ...r },
            u = { ...s.platform, _c: a };
        return bM(i, n, { ...s, platform: u });
    };
var om = { exports: {} };
var X_;
function iO() {
    return (
        X_ ||
            ((X_ = 1),
            (function (i) {
                (function () {
                    var n = {}.hasOwnProperty;
                    function r() {
                        for (var u = '', f = 0; f < arguments.length; f++) {
                            var d = arguments[f];
                            d && (u = s(u, a(d)));
                        }
                        return u;
                    }
                    function a(u) {
                        if (typeof u == 'string' || typeof u == 'number') return u;
                        if (typeof u != 'object') return '';
                        if (Array.isArray(u)) return r.apply(null, u);
                        if (
                            u.toString !== Object.prototype.toString &&
                            !u.toString.toString().includes('[native code]')
                        )
                            return u.toString();
                        var f = '';
                        for (var d in u) n.call(u, d) && u[d] && (f = s(f, d));
                        return f;
                    }
                    function s(u, f) {
                        return f ? (u ? u + ' ' + f : u + f) : u;
                    }
                    i.exports ? ((r.default = r), (i.exports = r)) : (window.classNames = r);
                })();
            })(om)),
        om.exports
    );
}
var lO = iO();
const Km = af(lO);
var q_ = {};
const rO = 'react-tooltip-core-styles',
    aO = 'react-tooltip-base-styles',
    V_ = { core: !1, base: !1 };
function P_({ css: i, id: n = aO, type: r = 'base', ref: a }) {
    var s, u;
    if (
        !i ||
        typeof document > 'u' ||
        V_[r] ||
        (r === 'core' &&
            typeof process < 'u' &&
            !((s = process == null ? void 0 : q_) === null || s === void 0) &&
            s.REACT_TOOLTIP_DISABLE_CORE_STYLES) ||
        (r !== 'base' &&
            typeof process < 'u' &&
            !((u = process == null ? void 0 : q_) === null || u === void 0) &&
            u.REACT_TOOLTIP_DISABLE_BASE_STYLES)
    )
        return;
    (r === 'core' && (n = rO), a || (a = {}));
    const { insertAt: f } = a;
    if (document.getElementById(n)) return;
    const d = document.head || document.getElementsByTagName('head')[0],
        p = document.createElement('style');
    ((p.id = n),
        (p.type = 'text/css'),
        f === 'top' && d.firstChild ? d.insertBefore(p, d.firstChild) : d.appendChild(p),
        p.styleSheet ? (p.styleSheet.cssText = i) : p.appendChild(document.createTextNode(i)),
        (V_[r] = !0));
}
const Q_ = async ({
        elementReference: i = null,
        tooltipReference: n = null,
        tooltipArrowReference: r = null,
        place: a = 'top',
        offset: s = 10,
        strategy: u = 'absolute',
        middlewares: f = [nS(Number(s)), lS({ fallbackAxisSideDirection: 'start' }), iS({ padding: 5 })],
        border: d,
        arrowSize: p = 8,
    }) => {
        if (!i) return { tooltipStyles: {}, tooltipArrowStyles: {}, place: a };
        if (n === null) return { tooltipStyles: {}, tooltipArrowStyles: {}, place: a };
        const m = f;
        return r
            ? (m.push(Qm({ element: r, padding: 5 })),
              Zm(i, n, { placement: a, strategy: u, middleware: m }).then(
                  ({ x: v, y, placement: S, middlewareData: g }) => {
                      var x, b;
                      const T = { left: `${v}px`, top: `${y}px`, border: d },
                          { x: O, y: L } = (x = g.arrow) !== null && x !== void 0 ? x : { x: 0, y: 0 },
                          D =
                              (b = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' }[S.split('-')[0]]) !==
                                  null && b !== void 0
                                  ? b
                                  : 'bottom',
                          k = d && { borderBottom: d, borderRight: d };
                      let C = 0;
                      if (d) {
                          const X = `${d}`.match(/(\d+)px/);
                          C = X?.[1] ? Number(X[1]) : 1;
                      }
                      return {
                          tooltipStyles: T,
                          tooltipArrowStyles: {
                              left: O != null ? `${O}px` : '',
                              top: L != null ? `${L}px` : '',
                              right: '',
                              bottom: '',
                              ...k,
                              [D]: `-${p / 2 + C}px`,
                          },
                          place: S,
                      };
                  },
              ))
            : Zm(i, n, { placement: 'bottom', strategy: u, middleware: m }).then(({ x: v, y, placement: S }) => ({
                  tooltipStyles: { left: `${v}px`, top: `${y}px` },
                  tooltipArrowStyles: {},
                  place: S,
              }));
    },
    Z_ = (i, n) => !('CSS' in window && 'supports' in window.CSS) || window.CSS.supports(i, n),
    K_ = (i, n, r) => {
        let a = null;
        const s = function (...u) {
            const f = () => {
                a = null;
            };
            !a && (i.apply(this, u), (a = setTimeout(f, n)));
        };
        return (
            (s.cancel = () => {
                a && (clearTimeout(a), (a = null));
            }),
            s
        );
    },
    $_ = i => i !== null && !Array.isArray(i) && typeof i == 'object',
    $m = (i, n) => {
        if (i === n) return !0;
        if (Array.isArray(i) && Array.isArray(n)) return i.length === n.length && i.every((s, u) => $m(s, n[u]));
        if (Array.isArray(i) !== Array.isArray(n)) return !1;
        if (!$_(i) || !$_(n)) return i === n;
        const r = Object.keys(i),
            a = Object.keys(n);
        return r.length === a.length && r.every(s => $m(i[s], n[s]));
    },
    oO = i => {
        if (!(i instanceof HTMLElement || i instanceof SVGElement)) return !1;
        const n = getComputedStyle(i);
        return ['overflow', 'overflow-x', 'overflow-y'].some(r => {
            const a = n.getPropertyValue(r);
            return a === 'auto' || a === 'scroll';
        });
    },
    F_ = i => {
        if (!i) return null;
        let n = i.parentElement;
        for (; n; ) {
            if (oO(n)) return n;
            n = n.parentElement;
        }
        return document.scrollingElement || document.documentElement;
    },
    sO = typeof window < 'u' ? E.useLayoutEffect : E.useEffect,
    pi = i => {
        i.current && (clearTimeout(i.current), (i.current = null));
    },
    uO = 'DEFAULT_TOOLTIP_ID',
    cO = {
        anchorRefs: new Set(),
        activeAnchor: { current: null },
        attach: () => {},
        detach: () => {},
        setActiveAnchor: () => {},
    },
    fO = E.createContext({ getTooltipData: () => cO });
function rS(i = uO) {
    return E.useContext(fO).getTooltipData(i);
}
var Va = {
        tooltip: 'core-styles-module_tooltip__3vRRp',
        fixed: 'core-styles-module_fixed__pcSol',
        arrow: 'core-styles-module_arrow__cvMwQ',
        noArrow: 'core-styles-module_noArrow__xock6',
        clickable: 'core-styles-module_clickable__ZuTTB',
        show: 'core-styles-module_show__Nt9eE',
        closing: 'core-styles-module_closing__sGnxF',
    },
    sm = {
        tooltip: 'styles-module_tooltip__mnnfp',
        arrow: 'styles-module_arrow__K0L3T',
        dark: 'styles-module_dark__xNqje',
        light: 'styles-module_light__Z6W-X',
        success: 'styles-module_success__A2AKt',
        warning: 'styles-module_warning__SCK0X',
        error: 'styles-module_error__JvumD',
        info: 'styles-module_info__BWdHW',
    };
const dO = ({
        forwardRef: i,
        id: n,
        className: r,
        classNameArrow: a,
        variant: s = 'dark',
        anchorId: u,
        anchorSelect: f,
        place: d = 'top',
        offset: p = 10,
        events: m = ['hover'],
        openOnClick: v = !1,
        positionStrategy: y = 'absolute',
        middlewares: S,
        wrapper: g,
        delayShow: x = 0,
        delayHide: b = 0,
        float: T = !1,
        hidden: O = !1,
        noArrow: L = !1,
        clickable: D = !1,
        closeOnEsc: k = !1,
        closeOnScroll: C = !1,
        closeOnResize: X = !1,
        openEvents: z,
        closeEvents: U,
        globalCloseEvents: P,
        imperativeModeOnly: se,
        style: W,
        position: de,
        afterShow: ue,
        afterHide: ne,
        disableTooltip: I,
        content: A,
        contentWrapperRef: B,
        isOpen: R,
        defaultIsOpen: $ = !1,
        setIsOpen: fe,
        previousActiveAnchor: M,
        activeAnchor: H,
        setActiveAnchor: F,
        border: ee,
        opacity: ge,
        arrowColor: ye,
        arrowSize: he = 8,
        role: Ae = 'tooltip',
    }) => {
        var De;
        const Me = E.useRef(null),
            Pe = E.useRef(null),
            Ge = E.useRef(null),
            gt = E.useRef(null),
            We = E.useRef(null),
            [Le, Si] = E.useState({ tooltipStyles: {}, tooltipArrowStyles: {}, place: d }),
            [lt, jt] = E.useState(!1),
            [wn, sn] = E.useState(!1),
            [rt, Mt] = E.useState(null),
            Ki = E.useRef(!1),
            vt = E.useRef(null),
            { anchorRefs: $i, setActiveAnchor: Pt } = rS(n),
            un = E.useRef(!1),
            [Wt, Fi] = E.useState([]),
            En = E.useRef(!1),
            Ni = v || m.includes('click'),
            Nl = Ni || z?.click || z?.dblclick || z?.mousedown,
            vn = z ? { ...z } : { mouseover: !0, focus: !0, mouseenter: !1, click: !1, dblclick: !1, mousedown: !1 };
        !z && Ni && Object.assign(vn, { mouseenter: !1, focus: !1, mouseover: !1, click: !0 });
        const bt = U ? { ...U } : { mouseout: !0, blur: !0, mouseleave: !1, click: !1, dblclick: !1, mouseup: !1 };
        !U && Ni && Object.assign(bt, { mouseleave: !1, blur: !1, mouseout: !1 });
        const nt = P ? { ...P } : { escape: k || !1, scroll: C || !1, resize: X || !1, clickOutsideAnchor: Nl || !1 };
        (se &&
            (Object.assign(vn, { mouseover: !1, focus: !1, mouseenter: !1, click: !1, dblclick: !1, mousedown: !1 }),
            Object.assign(bt, { mouseout: !1, blur: !1, mouseleave: !1, click: !1, dblclick: !1, mouseup: !1 }),
            Object.assign(nt, { escape: !1, scroll: !1, resize: !1, clickOutsideAnchor: !1 })),
            sO(
                () => (
                    (En.current = !0),
                    () => {
                        En.current = !1;
                    }
                ),
                [],
            ));
        const Ie = ae => {
            En.current &&
                (ae && sn(!0),
                setTimeout(() => {
                    En.current && (fe?.(ae), R === void 0 && jt(ae));
                }, 10));
        };
        (E.useEffect(() => {
            if (n) {
                if (lt) {
                    ce(M);
                    const pe = ae(H),
                        _e = [...new Set([...pe, n])].filter(Boolean).join(' ');
                    H?.setAttribute('aria-describedby', _e);
                } else ce(H);
                return () => {
                    (ce(H), ce(M));
                };
            }
            function ae(pe) {
                var _e;
                return (
                    ((_e = pe?.getAttribute('aria-describedby')) === null || _e === void 0 ? void 0 : _e.split(' ')) ||
                    []
                );
            }
            function ce(pe) {
                const _e = ae(pe).filter(Ce => Ce !== n);
                _e.length
                    ? pe?.setAttribute('aria-describedby', _e.join(' '))
                    : pe?.removeAttribute('aria-describedby');
            }
        }, [H, lt, n, M]),
            E.useEffect(() => {
                if (R === void 0) return () => null;
                R && sn(!0);
                const ae = setTimeout(() => {
                    jt(R);
                }, 10);
                return () => {
                    clearTimeout(ae);
                };
            }, [R]),
            E.useEffect(() => {
                if (lt !== Ki.current)
                    if ((pi(We), (Ki.current = lt), lt)) ue?.();
                    else {
                        const ae = (ce => {
                            const pe = ce.match(/^([\d.]+)(ms|s)$/);
                            if (!pe) return 0;
                            const [, _e, Ce] = pe;
                            return Number(_e) * (Ce === 'ms' ? 1 : 1e3);
                        })(getComputedStyle(document.body).getPropertyValue('--rt-transition-show-delay'));
                        We.current = setTimeout(() => {
                            (sn(!1), Mt(null), ne?.());
                        }, ae + 25);
                    }
            }, [lt]));
        const Ii = ae => {
                Si(ce => ($m(ce, ae) ? ce : ae));
            },
            jn = (ae = x) => {
                (pi(Ge),
                    wn
                        ? Ie(!0)
                        : (Ge.current = setTimeout(() => {
                              Ie(!0);
                          }, ae)));
            },
            cn = (ae = b) => {
                (pi(gt),
                    (gt.current = setTimeout(() => {
                        un.current || Ie(!1);
                    }, ae)));
            },
            fn = ae => {
                var ce;
                if (!ae) return;
                const pe = (ce = ae.currentTarget) !== null && ce !== void 0 ? ce : ae.target;
                if (!pe?.isConnected) return (F(null), void Pt({ current: null }));
                (x ? jn() : Ie(!0), F(pe), Pt({ current: pe }), pi(gt));
            },
            Et = () => {
                (D ? cn(b || 100) : b ? cn() : Ie(!1), pi(Ge));
            },
            dn = ({ x: ae, y: ce }) => {
                var pe;
                const _e = {
                    getBoundingClientRect: () => ({
                        x: ae,
                        y: ce,
                        width: 0,
                        height: 0,
                        top: ce,
                        left: ae,
                        right: ae,
                        bottom: ce,
                    }),
                };
                Q_({
                    place: (pe = rt?.place) !== null && pe !== void 0 ? pe : d,
                    offset: p,
                    elementReference: _e,
                    tooltipReference: Me.current,
                    tooltipArrowReference: Pe.current,
                    strategy: y,
                    middlewares: S,
                    border: ee,
                    arrowSize: he,
                }).then(Ce => {
                    Ii(Ce);
                });
            },
            en = ae => {
                if (!ae) return;
                const ce = ae,
                    pe = { x: ce.clientX, y: ce.clientY };
                (dn(pe), (vt.current = pe));
            },
            Bn = ae => {
                var ce;
                if (!lt) return;
                const pe = ae.target;
                pe.isConnected &&
                    ((!((ce = Me.current) === null || ce === void 0) && ce.contains(pe)) ||
                        [document.querySelector(`[id='${u}']`), ...Wt].some(_e => _e?.contains(pe)) ||
                        (Ie(!1), pi(Ge)));
            },
            be = K_(fn, 50),
            j = K_(Et, 50),
            re = ae => {
                (j.cancel(), be(ae));
            },
            G = () => {
                (be.cancel(), j());
            },
            te = E.useCallback(() => {
                var ae, ce;
                const pe = (ae = rt?.position) !== null && ae !== void 0 ? ae : de;
                pe
                    ? dn(pe)
                    : T
                      ? vt.current && dn(vt.current)
                      : H?.isConnected &&
                        Q_({
                            place: (ce = rt?.place) !== null && ce !== void 0 ? ce : d,
                            offset: p,
                            elementReference: H,
                            tooltipReference: Me.current,
                            tooltipArrowReference: Pe.current,
                            strategy: y,
                            middlewares: S,
                            border: ee,
                            arrowSize: he,
                        }).then(_e => {
                            En.current && Ii(_e);
                        });
            }, [lt, H, A, W, d, rt?.place, p, y, de, rt?.position, T, he]);
        (E.useEffect(() => {
            var ae, ce;
            const pe = new Set($i);
            Wt.forEach(Ze => {
                I?.(Ze) || pe.add({ current: Ze });
            });
            const _e = document.querySelector(`[id='${u}']`);
            _e && !I?.(_e) && pe.add({ current: _e });
            const Ce = () => {
                    Ie(!1);
                },
                Qe = F_(H),
                Xe = F_(Me.current);
            nt.scroll &&
                (window.addEventListener('scroll', Ce),
                Qe?.addEventListener('scroll', Ce),
                Xe?.addEventListener('scroll', Ce));
            let ze = null;
            nt.resize
                ? window.addEventListener('resize', Ce)
                : H &&
                  Me.current &&
                  (ze = tS(H, Me.current, te, { ancestorResize: !0, elementResize: !0, layoutShift: !0 }));
            const Ue = Ze => {
                Ze.key === 'Escape' && Ie(!1);
            };
            (nt.escape && window.addEventListener('keydown', Ue),
                nt.clickOutsideAnchor && window.addEventListener('click', Bn));
            const je = [],
                st = Ze => !!(Ze?.target && H?.contains(Ze.target)),
                St = Ze => {
                    (lt && st(Ze)) || fn(Ze);
                },
                wr = Ze => {
                    lt && st(Ze) && Et();
                },
                tn = ['mouseover', 'mouseout', 'mouseenter', 'mouseleave', 'focus', 'blur'],
                Ll = ['click', 'dblclick', 'mousedown', 'mouseup'];
            (Object.entries(vn).forEach(([Ze, hn]) => {
                hn &&
                    (tn.includes(Ze)
                        ? je.push({ event: Ze, listener: re })
                        : Ll.includes(Ze) && je.push({ event: Ze, listener: St }));
            }),
                Object.entries(bt).forEach(([Ze, hn]) => {
                    hn &&
                        (tn.includes(Ze)
                            ? je.push({ event: Ze, listener: G })
                            : Ll.includes(Ze) && je.push({ event: Ze, listener: wr }));
                }),
                T && je.push({ event: 'pointermove', listener: en }));
            const aa = () => {
                    un.current = !0;
                },
                Ji = () => {
                    ((un.current = !1), Et());
                },
                Wi = D && (bt.mouseout || bt.mouseleave);
            return (
                Wi &&
                    ((ae = Me.current) === null || ae === void 0 || ae.addEventListener('mouseover', aa),
                    (ce = Me.current) === null || ce === void 0 || ce.addEventListener('mouseout', Ji)),
                je.forEach(({ event: Ze, listener: hn }) => {
                    pe.forEach(Ot => {
                        var kl;
                        (kl = Ot.current) === null || kl === void 0 || kl.addEventListener(Ze, hn);
                    });
                }),
                () => {
                    var Ze, hn;
                    (nt.scroll &&
                        (window.removeEventListener('scroll', Ce),
                        Qe?.removeEventListener('scroll', Ce),
                        Xe?.removeEventListener('scroll', Ce)),
                        nt.resize ? window.removeEventListener('resize', Ce) : ze?.(),
                        nt.clickOutsideAnchor && window.removeEventListener('click', Bn),
                        nt.escape && window.removeEventListener('keydown', Ue),
                        Wi &&
                            ((Ze = Me.current) === null || Ze === void 0 || Ze.removeEventListener('mouseover', aa),
                            (hn = Me.current) === null || hn === void 0 || hn.removeEventListener('mouseout', Ji)),
                        je.forEach(({ event: Ot, listener: kl }) => {
                            pe.forEach(eu => {
                                var xi;
                                (xi = eu.current) === null || xi === void 0 || xi.removeEventListener(Ot, kl);
                            });
                        }));
                }
            );
        }, [H, te, wn, $i, Wt, z, U, P, Ni, x, b]),
            E.useEffect(() => {
                var ae, ce;
                let pe =
                    (ce = (ae = rt?.anchorSelect) !== null && ae !== void 0 ? ae : f) !== null && ce !== void 0
                        ? ce
                        : '';
                !pe && n && (pe = `[data-tooltip-id='${n.replace(/'/g, "\\'")}']`);
                const _e = new MutationObserver(Ce => {
                    const Qe = [],
                        Xe = [];
                    (Ce.forEach(ze => {
                        if (
                            (ze.type === 'attributes' &&
                                ze.attributeName === 'data-tooltip-id' &&
                                (ze.target.getAttribute('data-tooltip-id') === n
                                    ? Qe.push(ze.target)
                                    : ze.oldValue === n && Xe.push(ze.target)),
                            ze.type === 'childList')
                        ) {
                            if (H) {
                                const Ue = [...ze.removedNodes].filter(je => je.nodeType === 1);
                                if (pe)
                                    try {
                                        (Xe.push(...Ue.filter(je => je.matches(pe))),
                                            Xe.push(...Ue.flatMap(je => [...je.querySelectorAll(pe)])));
                                    } catch {}
                                Ue.some(je => {
                                    var st;
                                    return (
                                        !!(!((st = je?.contains) === null || st === void 0) && st.call(je, H)) &&
                                        (sn(!1), Ie(!1), F(null), pi(Ge), pi(gt), !0)
                                    );
                                });
                            }
                            if (pe)
                                try {
                                    const Ue = [...ze.addedNodes].filter(je => je.nodeType === 1);
                                    (Qe.push(...Ue.filter(je => je.matches(pe))),
                                        Qe.push(...Ue.flatMap(je => [...je.querySelectorAll(pe)])));
                                } catch {}
                        }
                    }),
                        (Qe.length || Xe.length) && Fi(ze => [...ze.filter(Ue => !Xe.includes(Ue)), ...Qe]));
                });
                return (
                    _e.observe(document.body, {
                        childList: !0,
                        subtree: !0,
                        attributes: !0,
                        attributeFilter: ['data-tooltip-id'],
                        attributeOldValue: !0,
                    }),
                    () => {
                        _e.disconnect();
                    }
                );
            }, [n, f, rt?.anchorSelect, H]),
            E.useEffect(() => {
                te();
            }, [te]),
            E.useEffect(() => {
                if (!B?.current) return () => null;
                const ae = new ResizeObserver(() => {
                    setTimeout(() => te());
                });
                return (
                    ae.observe(B.current),
                    () => {
                        ae.disconnect();
                    }
                );
            }, [A, B?.current]),
            E.useEffect(() => {
                var ae;
                const ce = document.querySelector(`[id='${u}']`),
                    pe = [...Wt, ce];
                (H && pe.includes(H)) || F((ae = Wt[0]) !== null && ae !== void 0 ? ae : ce);
            }, [u, Wt, H]),
            E.useEffect(
                () => (
                    $ && Ie(!0),
                    () => {
                        (pi(Ge), pi(gt));
                    }
                ),
                [],
            ),
            E.useEffect(() => {
                var ae;
                let ce = (ae = rt?.anchorSelect) !== null && ae !== void 0 ? ae : f;
                if ((!ce && n && (ce = `[data-tooltip-id='${n.replace(/'/g, "\\'")}']`), ce))
                    try {
                        const pe = Array.from(document.querySelectorAll(ce));
                        Fi(pe);
                    } catch {
                        Fi([]);
                    }
            }, [n, f, rt?.anchorSelect]),
            E.useEffect(() => {
                Ge.current && (pi(Ge), jn(x));
            }, [x]));
        const me = (De = rt?.content) !== null && De !== void 0 ? De : A,
            ve = lt && Object.keys(Le.tooltipStyles).length > 0;
        return (
            E.useImperativeHandle(i, () => ({
                open: ae => {
                    if (ae?.anchorSelect)
                        try {
                            document.querySelector(ae.anchorSelect);
                        } catch {
                            return void console.warn(
                                `[react-tooltip] "${ae.anchorSelect}" is not a valid CSS selector`,
                            );
                        }
                    (Mt(ae ?? null), ae?.delay ? jn(ae.delay) : Ie(!0));
                },
                close: ae => {
                    ae?.delay ? cn(ae.delay) : Ie(!1);
                },
                activeAnchor: H,
                place: Le.place,
                isOpen: !!(wn && !O && me && ve),
            })),
            wn && !O && me
                ? $t.createElement(
                      g,
                      {
                          id: n,
                          role: Ae,
                          className: Km(
                              'react-tooltip',
                              Va.tooltip,
                              sm.tooltip,
                              sm[s],
                              r,
                              `react-tooltip__place-${Le.place}`,
                              Va[ve ? 'show' : 'closing'],
                              ve ? 'react-tooltip__show' : 'react-tooltip__closing',
                              y === 'fixed' && Va.fixed,
                              D && Va.clickable,
                          ),
                          onTransitionEnd: ae => {
                              (pi(We), lt || ae.propertyName !== 'opacity' || (sn(!1), Mt(null), ne?.()));
                          },
                          style: { ...W, ...Le.tooltipStyles, opacity: ge !== void 0 && ve ? ge : void 0 },
                          ref: Me,
                      },
                      me,
                      $t.createElement(g, {
                          className: Km('react-tooltip-arrow', Va.arrow, sm.arrow, a, L && Va.noArrow),
                          style: {
                              ...Le.tooltipArrowStyles,
                              background: ye ? `linear-gradient(to right bottom, transparent 50%, ${ye} 50%)` : void 0,
                              '--rt-arrow-size': `${he}px`,
                          },
                          ref: Pe,
                      }),
                  )
                : null
        );
    },
    hO = ({ content: i }) => $t.createElement('span', { dangerouslySetInnerHTML: { __html: i } }),
    mO = $t.forwardRef(
        (
            {
                id: i,
                anchorId: n,
                anchorSelect: r,
                content: a,
                html: s,
                render: u,
                className: f,
                classNameArrow: d,
                variant: p = 'dark',
                place: m = 'top',
                offset: v = 10,
                wrapper: y = 'div',
                children: S = null,
                events: g = ['hover'],
                openOnClick: x = !1,
                positionStrategy: b = 'absolute',
                middlewares: T,
                delayShow: O = 0,
                delayHide: L = 0,
                float: D = !1,
                hidden: k = !1,
                noArrow: C = !1,
                clickable: X = !1,
                closeOnEsc: z = !1,
                closeOnScroll: U = !1,
                closeOnResize: P = !1,
                openEvents: se,
                closeEvents: W,
                globalCloseEvents: de,
                imperativeModeOnly: ue = !1,
                style: ne,
                position: I,
                isOpen: A,
                defaultIsOpen: B = !1,
                disableStyleInjection: R = !1,
                border: $,
                opacity: fe,
                arrowColor: M,
                arrowSize: H,
                setIsOpen: F,
                afterShow: ee,
                afterHide: ge,
                disableTooltip: ye,
                role: he = 'tooltip',
            },
            Ae,
        ) => {
            const [De, Me] = E.useState(a),
                [Pe, Ge] = E.useState(s),
                [gt, We] = E.useState(m),
                [Le, Si] = E.useState(p),
                [lt, jt] = E.useState(v),
                [wn, sn] = E.useState(O),
                [rt, Mt] = E.useState(L),
                [Ki, vt] = E.useState(D),
                [$i, Pt] = E.useState(k),
                [un, Wt] = E.useState(y),
                [Fi, En] = E.useState(g),
                [Ni, Nl] = E.useState(b),
                [vn, bt] = E.useState(null),
                [nt, Ie] = E.useState(null),
                Ii = E.useRef(null),
                jn = E.useRef(R),
                { anchorRefs: cn, activeAnchor: fn } = rS(i),
                Et = j =>
                    j?.getAttributeNames().reduce((re, G) => {
                        var te;
                        return (
                            G.startsWith('data-tooltip-') &&
                                (re[G.replace(/^data-tooltip-/, '')] =
                                    (te = j?.getAttribute(G)) !== null && te !== void 0 ? te : null),
                            re
                        );
                    }, {}),
                dn = j => {
                    const re = {
                        place: G => {
                            var te;
                            We((te = G) !== null && te !== void 0 ? te : m);
                        },
                        content: G => {
                            Me(G ?? a);
                        },
                        html: G => {
                            Ge(G ?? s);
                        },
                        variant: G => {
                            var te;
                            Si((te = G) !== null && te !== void 0 ? te : p);
                        },
                        offset: G => {
                            jt(G === null ? v : Number(G));
                        },
                        wrapper: G => {
                            var te;
                            Wt((te = G) !== null && te !== void 0 ? te : y);
                        },
                        events: G => {
                            const te = G?.split(' ');
                            En(te ?? g);
                        },
                        'position-strategy': G => {
                            var te;
                            Nl((te = G) !== null && te !== void 0 ? te : b);
                        },
                        'delay-show': G => {
                            sn(G === null ? O : Number(G));
                        },
                        'delay-hide': G => {
                            Mt(G === null ? L : Number(G));
                        },
                        float: G => {
                            vt(G === null ? D : G === 'true');
                        },
                        hidden: G => {
                            Pt(G === null ? k : G === 'true');
                        },
                        'class-name': G => {
                            bt(G);
                        },
                    };
                    (Object.values(re).forEach(G => G(null)),
                        Object.entries(j).forEach(([G, te]) => {
                            var me;
                            (me = re[G]) === null || me === void 0 || me.call(re, te);
                        }));
                };
            (E.useEffect(() => {
                Me(a);
            }, [a]),
                E.useEffect(() => {
                    Ge(s);
                }, [s]),
                E.useEffect(() => {
                    We(m);
                }, [m]),
                E.useEffect(() => {
                    Si(p);
                }, [p]),
                E.useEffect(() => {
                    jt(v);
                }, [v]),
                E.useEffect(() => {
                    sn(O);
                }, [O]),
                E.useEffect(() => {
                    Mt(L);
                }, [L]),
                E.useEffect(() => {
                    vt(D);
                }, [D]),
                E.useEffect(() => {
                    Pt(k);
                }, [k]),
                E.useEffect(() => {
                    Nl(b);
                }, [b]),
                E.useEffect(() => {
                    jn.current !== R &&
                        console.warn('[react-tooltip] Do not change `disableStyleInjection` dynamically.');
                }, [R]),
                E.useEffect(() => {
                    typeof window < 'u' &&
                        window.dispatchEvent(
                            new CustomEvent('react-tooltip-inject-styles', {
                                detail: { disableCore: R === 'core', disableBase: R },
                            }),
                        );
                }, []),
                E.useEffect(() => {
                    var j;
                    const re = new Set(cn);
                    let G = r;
                    if ((!G && i && (G = `[data-tooltip-id='${i.replace(/'/g, "\\'")}']`), G))
                        try {
                            document.querySelectorAll(G).forEach(ce => {
                                re.add({ current: ce });
                            });
                        } catch {
                            console.warn(`[react-tooltip] "${G}" is not a valid CSS selector`);
                        }
                    const te = document.querySelector(`[id='${n}']`);
                    if ((te && re.add({ current: te }), !re.size)) return () => null;
                    const me = (j = nt ?? te) !== null && j !== void 0 ? j : fn.current,
                        ve = new MutationObserver(ce => {
                            ce.forEach(pe => {
                                var _e;
                                if (
                                    !me ||
                                    pe.type !== 'attributes' ||
                                    !(
                                        !((_e = pe.attributeName) === null || _e === void 0) &&
                                        _e.startsWith('data-tooltip-')
                                    )
                                )
                                    return;
                                const Ce = Et(me);
                                dn(Ce);
                            });
                        }),
                        ae = { attributes: !0, childList: !1, subtree: !1 };
                    if (me) {
                        const ce = Et(me);
                        (dn(ce), ve.observe(me, ae));
                    }
                    return () => {
                        ve.disconnect();
                    };
                }, [cn, fn, nt, n, r]),
                E.useEffect(() => {
                    (ne?.border &&
                        console.warn('[react-tooltip] Do not set `style.border`. Use `border` prop instead.'),
                        $ && !Z_('border', `${$}`) && console.warn(`[react-tooltip] "${$}" is not a valid \`border\`.`),
                        ne?.opacity &&
                            console.warn('[react-tooltip] Do not set `style.opacity`. Use `opacity` prop instead.'),
                        fe &&
                            !Z_('opacity', `${fe}`) &&
                            console.warn(`[react-tooltip] "${fe}" is not a valid \`opacity\`.`));
                }, []));
            let en = S;
            const Bn = E.useRef(null);
            if (u) {
                const j = u({ content: nt?.getAttribute('data-tooltip-content') || De || null, activeAnchor: nt });
                en = j ? $t.createElement('div', { ref: Bn, className: 'react-tooltip-content-wrapper' }, j) : null;
            } else De && (en = De);
            Pe && (en = $t.createElement(hO, { content: Pe }));
            const be = {
                forwardRef: Ae,
                id: i,
                anchorId: n,
                anchorSelect: r,
                className: Km(f, vn),
                classNameArrow: d,
                content: en,
                contentWrapperRef: Bn,
                place: gt,
                variant: Le,
                offset: lt,
                wrapper: un,
                events: Fi,
                openOnClick: x,
                positionStrategy: Ni,
                middlewares: T,
                delayShow: wn,
                delayHide: rt,
                float: Ki,
                hidden: $i,
                noArrow: C,
                clickable: X,
                closeOnEsc: z,
                closeOnScroll: U,
                closeOnResize: P,
                openEvents: se,
                closeEvents: W,
                globalCloseEvents: de,
                imperativeModeOnly: ue,
                style: ne,
                position: I,
                isOpen: A,
                defaultIsOpen: B,
                border: $,
                opacity: fe,
                arrowColor: M,
                arrowSize: H,
                setIsOpen: F,
                afterShow: ee,
                afterHide: ge,
                disableTooltip: ye,
                activeAnchor: nt,
                previousActiveAnchor: Ii.current,
                setActiveAnchor: j => {
                    Ie(re => (j?.isSameNode(re) || (Ii.current = re), j));
                },
                role: he,
            };
            return $t.createElement(dO, { ...be });
        },
    );
typeof window < 'u' &&
    window.addEventListener('react-tooltip-inject-styles', i => {
        (i.detail.disableCore ||
            P_({
                css: ':root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9;--rt-transition-show-delay:0.15s;--rt-transition-closing-delay:0.15s;--rt-arrow-size:8px}.core-styles-module_tooltip__3vRRp{position:absolute;top:0;left:0;pointer-events:none;opacity:0;will-change:opacity}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit;z-index:-1}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{opacity:var(--rt-opacity);transition:opacity var(--rt-transition-show-delay)ease-out}.core-styles-module_closing__sGnxF{opacity:0;transition:opacity var(--rt-transition-closing-delay)ease-in}',
                type: 'core',
            }),
            i.detail.disableBase ||
                P_({
                    css: `
.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:var(--rt-arrow-size);height:var(--rt-arrow-size)}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}`,
                    type: 'base',
                }));
    });
const Fm = {
        fullName: 'Vishwa Vivek Yadav',
        firstName: 'Vishwa Vivek',
        terminalHandle: 'vishwavivek',
        email: 'vishu842301@gmail.com',
    },
    pO = [
        { id: 1, name: 'Projects', type: 'finder' },
        { id: 3, name: 'Contact', type: 'contact' },
        { id: 4, name: 'Resume', type: 'resume' },
    ],
    gO = [
        { id: 1, img: '/icons/wifi.svg' },
        { id: 2, img: '/icons/search.svg' },
        { id: 3, img: '/icons/user.svg' },
        { id: 4, img: '/icons/mode.svg', action: 'theme' },
    ],
    vO = [
        { id: 'finder', name: 'Portfolio', icon: 'finder.png', mobileVisibility: !0, canOpen: !0 },
        { id: 'safari', name: 'Articles', icon: 'safari.png', mobileVisibility: !0, canOpen: !0 },
        { id: 'photos', name: 'Gallery', icon: 'photos.png', mobileVisibility: !0, canOpen: !0 },
        { id: 'contact', name: 'Contact', icon: 'contact.png', canOpen: !0, mobileVisibility: !0 },
        { id: 'terminal', name: 'Skills', icon: 'terminal.png', canOpen: !0, mobileVisibility: !1 },
        { id: 'trash', name: 'Archive', icon: 'trash.png', mobileVisibility: !1, canOpen: !1 },
    ],
    w3 = [
        {
            id: 1,
            date: 'Sep 2, 2025',
            title: 'TypeScript Explained: What It Is, Why It Matters, and How to Master It',
            image: '/images/blog1.png',
            link: 'https://medium.com/@vishwa9011/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it-3ad3eb1821b2',
        },
        {
            id: 2,
            date: 'Dec 25, 2025',
            title: 'Zustand: Simple State Management That Just Makes Sense',
            image: '/images/blog2.png',
            link: 'https://medium.com/@vishwa9011/zustand-simple-state-management-that-just-makes-sense-0cd5ccfff835',
        },
        {
            id: 3,
            date: 'Aug 15, 2025',
            title: 'The Ultimate Guide to Mastering GSAP Animations',
            image: '/images/blog3.png',
            link: 'https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations',
        },
    ],
    E3 = [
        { category: 'Frontend', items: ['React.js', 'Next.js', 'TypeScript'] },
        { category: 'Backend', items: ['Node.js', 'Express.js', 'NestJS'] },
        { category: 'Database', items: ['MongoDB', 'PostgreSQL'] },
        { category: 'Blockchain', items: ['Solidity', 'Ethereum', 'Hardhat', 'Foundry'] },
        { category: 'Dev Tools', items: ['Git', 'GitHub', 'Docker'] },
    ],
    T3 = [
        { id: 1, text: 'Github', icon: '/icons/github.svg', bg: '#f4656b', link: 'https://github.com/vishwa9011' },
        {
            id: 4,
            text: 'LinkedIn',
            icon: '/icons/linkedin.svg',
            bg: '#05b6f6',
            link: 'https://www.linkedin.com/in/vishwa-vivek-yadav',
        },
    ],
    A3 = [
        { id: 1, icon: '/icons/gicon1.svg', title: 'Library' },
        { id: 2, icon: '/icons/gicon2.svg', title: 'Memories' },
        { id: 3, icon: '/icons/file.svg', title: 'Places' },
        { id: 4, icon: '/icons/gicon4.svg', title: 'People' },
        { id: 5, icon: '/icons/gicon5.svg', title: 'Favorites' },
    ],
    M3 = [
        { id: 1, img: '/images/gal1.webp' },
        { id: 2, img: '/images/gal1.webp' },
        { id: 3, img: '/images/gal1.webp' },
        { id: 4, img: '/images/gal1.webp' },
    ],
    yO = {
        id: 1,
        type: 'work',
        name: 'Work',
        icon: '/icons/work.svg',
        kind: 'folder',
        children: [
            {
                id: 5,
                name: 'AuditForge',
                icon: '/images/folder.png',
                kind: 'folder',
                position: 'top-10 left-5',
                windowPosition: 'top-[5vh] left-14',
                children: [
                    {
                        id: 1,
                        name: 'auditForge.txt',
                        icon: '/images/txt.png',
                        kind: 'file',
                        fileType: 'txt',
                        position: 'top-5 left-10',
                        description: [
                            'AuditForge is a frontend-first, IDE-style platform built for auditing Solidity smart contracts.',
                            'Rather than a simple code viewer, it provides a focused developer environment with a Monaco-based editor, virtual filesystem, and keyboard-first workflow.',
                            'Think of it as a lightweight auditing IDE that runs directly in the browser, without hidden automation or backend dependencies.',
                            'It emphasizes explicit user actions, transparency, and performance, helping developers analyze contracts with clarity and control.',
                        ],
                    },
                    {
                        id: 2,
                        name: 'live demo',
                        icon: '/images/safari.png',
                        kind: 'file',
                        fileType: 'url',
                        href: 'https://auditforge.vercel.app',
                        position: 'top-10 right-20',
                    },
                    {
                        id: 4,
                        name: 'auditforge.png',
                        icon: '/images/image.png',
                        kind: 'file',
                        fileType: 'img',
                        position: 'top-52 right-80',
                        imageUrl: '/images/project-1.webp',
                    },
                ],
            },
        ],
    },
    _O = {
        id: 2,
        type: 'about',
        name: 'About me',
        icon: '/icons/info.svg',
        kind: 'folder',
        children: [
            {
                id: 1,
                name: 'me.png',
                icon: '/images/image.png',
                kind: 'file',
                fileType: 'img',
                position: 'top-10 left-5',
                imageUrl: '/images/vishwa.webp',
            },
            {
                id: 2,
                name: 'casual-me.png',
                icon: '/images/image.png',
                kind: 'file',
                fileType: 'img',
                position: 'top-28 right-72',
                imageUrl: '/images/vishwa.webp',
            },
            {
                id: 3,
                name: 'conference-me.png',
                icon: '/images/image.png',
                kind: 'file',
                fileType: 'img',
                position: 'top-52 left-80',
                imageUrl: '/images/vishwa.webp',
            },
            {
                id: 4,
                name: 'about-me.txt',
                icon: '/images/txt.png',
                kind: 'file',
                fileType: 'txt',
                position: 'top-60 left-5',
                subtitle: 'Full Stack Engineer',
                image: '/images/vishwa.webp',
                description: [
                    'Full Stack Engineer with 2+ years of experience building scalable MERN applications and Ethereum smart contracts.',
                    'Skilled in React, Next.js, Node.js, MongoDB, and Solidity.',
                    'Hands-on experience with Hardhat and Foundry for secure contract development and testing.',
                ],
            },
        ],
    },
    bO = {
        id: 3,
        type: 'resume',
        name: 'Resume',
        icon: '/icons/file.svg',
        kind: 'folder',
        children: [{ id: 1, name: 'Resume.pdf', icon: '/images/pdf.png', kind: 'file', fileType: 'pdf' }],
    },
    SO = {
        id: 4,
        type: 'trash',
        name: 'Trash',
        icon: '/icons/trash.svg',
        kind: 'folder',
        children: [
            {
                id: 1,
                name: 'trash1.png',
                icon: '/images/image.png',
                kind: 'file',
                fileType: 'img',
                position: 'top-10 left-10',
                imageUrl: '/images/trash-1.png',
            },
            {
                id: 2,
                name: 'trash2.png',
                icon: '/images/image.png',
                kind: 'file',
                fileType: 'img',
                position: 'top-40 left-80',
                imageUrl: '/images/trash-2.png',
            },
        ],
    },
    O3 = { work: yO, about: _O, resume: bO, trash: SO },
    Bi = 1e3,
    xO = {
        finder: { isOpen: !1, zIndex: Bi, data: null },
        contact: { isOpen: !1, zIndex: Bi, data: null },
        resume: { isOpen: !1, zIndex: Bi, data: null },
        safari: { isOpen: !1, zIndex: Bi, data: null },
        photos: { isOpen: !1, zIndex: Bi, data: null },
        terminal: { isOpen: !1, zIndex: Bi, data: null },
        txtfile: { isOpen: !1, zIndex: Bi, data: null },
        imgfile: { isOpen: !1, zIndex: Bi, data: null },
    };
var aS = Symbol.for('immer-nothing'),
    I_ = Symbol.for('immer-draftable'),
    bn = Symbol.for('immer-state');
function Oi(i, ...n) {
    throw new Error(`[Immer] minified error nr: ${i}. Full error at: https://bit.ly/3cXEKWf`);
}
var In = Object,
    po = In.getPrototypeOf,
    Fc = 'constructor',
    vf = 'prototype',
    Im = 'configurable',
    Ic = 'enumerable',
    zc = 'writable',
    Hs = 'value',
    br = i => !!i && !!i[bn];
function Dl(i) {
    return i ? oS(i) || yf(i) || !!i[I_] || !!i[Fc]?.[I_] || _f(i) || bf(i) : !1;
}
var wO = In[vf][Fc].toString(),
    J_ = new WeakMap();
function oS(i) {
    if (!i || !Hp(i)) return !1;
    const n = po(i);
    if (n === null || n === In[vf]) return !0;
    const r = In.hasOwnProperty.call(n, Fc) && n[Fc];
    if (r === Object) return !0;
    if (!$a(r)) return !1;
    let a = J_.get(r);
    return (a === void 0 && ((a = Function.toString.call(r)), J_.set(r, a)), a === wO);
}
function Zs(i, n, r = !0) {
    Ks(i) === 0
        ? (r ? Reflect.ownKeys(i) : In.keys(i)).forEach(s => {
              n(s, i[s], i);
          })
        : i.forEach((a, s) => n(s, a, i));
}
function Ks(i) {
    const n = i[bn];
    return n ? n.type_ : yf(i) ? 1 : _f(i) ? 2 : bf(i) ? 3 : 0;
}
var W_ = (i, n, r = Ks(i)) => (r === 2 ? i.has(n) : In[vf].hasOwnProperty.call(i, n)),
    Jm = (i, n, r = Ks(i)) => (r === 2 ? i.get(n) : i[n]),
    Jc = (i, n, r, a = Ks(i)) => {
        a === 2 ? i.set(n, r) : a === 3 ? i.add(r) : (i[n] = r);
    };
function EO(i, n) {
    return i === n ? i !== 0 || 1 / i === 1 / n : i !== i && n !== n;
}
var yf = Array.isArray,
    _f = i => i instanceof Map,
    bf = i => i instanceof Set,
    Hp = i => typeof i == 'object',
    $a = i => typeof i == 'function',
    um = i => typeof i == 'boolean',
    wl = i => i.copy_ || i.base_,
    Yp = i => (i.modified_ ? i.copy_ : i.base_);
function Wm(i, n) {
    if (_f(i)) return new Map(i);
    if (bf(i)) return new Set(i);
    if (yf(i)) return Array[vf].slice.call(i);
    const r = oS(i);
    if (n === !0 || (n === 'class_only' && !r)) {
        const a = In.getOwnPropertyDescriptors(i);
        delete a[bn];
        let s = Reflect.ownKeys(a);
        for (let u = 0; u < s.length; u++) {
            const f = s[u],
                d = a[f];
            (d[zc] === !1 && ((d[zc] = !0), (d[Im] = !0)),
                (d.get || d.set) && (a[f] = { [Im]: !0, [zc]: !0, [Ic]: d[Ic], [Hs]: i[f] }));
        }
        return In.create(po(i), a);
    } else {
        const a = po(i);
        if (a !== null && r) return { ...i };
        const s = In.create(a);
        return In.assign(s, i);
    }
}
function Gp(i, n = !1) {
    return (
        Sf(i) ||
            br(i) ||
            !Dl(i) ||
            (Ks(i) > 1 && In.defineProperties(i, { set: yc, add: yc, clear: yc, delete: yc }),
            In.freeze(i),
            n &&
                Zs(
                    i,
                    (r, a) => {
                        Gp(a, !0);
                    },
                    !1,
                )),
        i
    );
}
function TO() {
    Oi(2);
}
var yc = { [Hs]: TO };
function Sf(i) {
    return i === null || !Hp(i) ? !0 : In.isFrozen(i);
}
var Wc = 'MapSet',
    ep = 'Patches',
    sS = {};
function go(i) {
    const n = sS[i];
    return (n || Oi(0, i), n);
}
var AO = i => !!sS[i],
    Ys,
    uS = () => Ys,
    MO = (i, n) => ({
        drafts_: [],
        parent_: i,
        immer_: n,
        canAutoFreeze_: !0,
        unfinalizedDrafts_: 0,
        handledSet_: new Set(),
        processedForPatches_: new Set(),
        mapSetPlugin_: AO(Wc) ? go(Wc) : void 0,
    });
function eb(i, n) {
    n && ((i.patchPlugin_ = go(ep)), (i.patches_ = []), (i.inversePatches_ = []), (i.patchListener_ = n));
}
function tp(i) {
    (np(i), i.drafts_.forEach(OO), (i.drafts_ = null));
}
function np(i) {
    i === Ys && (Ys = i.parent_);
}
var tb = i => (Ys = MO(Ys, i));
function OO(i) {
    const n = i[bn];
    n.type_ === 0 || n.type_ === 1 ? n.revoke_() : (n.revoked_ = !0);
}
function nb(i, n) {
    n.unfinalizedDrafts_ = n.drafts_.length;
    const r = n.drafts_[0];
    if (i !== void 0 && i !== r) {
        (r[bn].modified_ && (tp(n), Oi(4)), Dl(i) && (i = ib(n, i)));
        const { patchPlugin_: s } = n;
        s && s.generateReplacementPatches_(r[bn].base_, i, n);
    } else i = ib(n, r);
    return (CO(n, i, !0), tp(n), n.patches_ && n.patchListener_(n.patches_, n.inversePatches_), i !== aS ? i : void 0);
}
function ib(i, n) {
    if (Sf(n)) return n;
    const r = n[bn];
    if (!r) return Xp(n, i.handledSet_, i);
    if (!xf(r, i)) return n;
    if (!r.modified_) return r.base_;
    if (!r.finalized_) {
        const { callbacks_: a } = r;
        if (a) for (; a.length > 0; ) a.pop()(i);
        dS(r, i);
    }
    return r.copy_;
}
function CO(i, n, r = !1) {
    !i.parent_ && i.immer_.autoFreeze_ && i.canAutoFreeze_ && Gp(n, r);
}
function cS(i) {
    ((i.finalized_ = !0), i.scope_.unfinalizedDrafts_--);
}
var xf = (i, n) => i.scope_ === n,
    DO = [];
function fS(i, n, r, a) {
    const s = wl(i),
        u = i.type_;
    if (a !== void 0 && Jm(s, a, u) === n) {
        Jc(s, a, r, u);
        return;
    }
    if (!i.draftLocations_) {
        const d = (i.draftLocations_ = new Map());
        Zs(s, (p, m) => {
            if (br(m)) {
                const v = d.get(m) || [];
                (v.push(p), d.set(m, v));
            }
        });
    }
    const f = i.draftLocations_.get(n) ?? DO;
    for (const d of f) Jc(s, d, r, u);
}
function RO(i, n, r) {
    i.callbacks_.push(function (s) {
        const u = n;
        if (!u || !xf(u, s)) return;
        s.mapSetPlugin_?.fixSetContents(u);
        const f = Yp(u);
        (fS(i, u.draft_ ?? u, f, r), dS(u, s));
    });
}
function dS(i, n) {
    if (i.modified_ && !i.finalized_ && (i.type_ === 3 || (i.assigned_?.size ?? 0) > 0)) {
        const { patchPlugin_: a } = n;
        if (a) {
            const s = a.getPath(i);
            s && a.generatePatches_(i, s, n);
        }
        cS(i);
    }
}
function zO(i, n, r) {
    const { scope_: a } = i;
    if (br(r)) {
        const s = r[bn];
        xf(s, a) &&
            s.callbacks_.push(function () {
                Nc(i);
                const f = Yp(s);
                fS(i, r, f, n);
            });
    } else
        Dl(r) &&
            i.callbacks_.push(function () {
                const u = wl(i);
                Jm(u, n, i.type_) === r &&
                    a.drafts_.length > 1 &&
                    (i.assigned_.get(n) ?? !1) === !0 &&
                    i.copy_ &&
                    Xp(Jm(i.copy_, n, i.type_), a.handledSet_, a);
            });
}
function Xp(i, n, r) {
    return (
        (!r.immer_.autoFreeze_ && r.unfinalizedDrafts_ < 1) ||
            br(i) ||
            n.has(i) ||
            !Dl(i) ||
            Sf(i) ||
            (n.add(i),
            Zs(i, (a, s) => {
                if (br(s)) {
                    const u = s[bn];
                    if (xf(u, r)) {
                        const f = Yp(u);
                        (Jc(i, a, f, i.type_), cS(u));
                    }
                } else Dl(s) && Xp(s, n, r);
            })),
        i
    );
}
function NO(i, n) {
    const r = yf(i),
        a = {
            type_: r ? 1 : 0,
            scope_: n ? n.scope_ : uS(),
            modified_: !1,
            finalized_: !1,
            assigned_: void 0,
            parent_: n,
            base_: i,
            draft_: null,
            copy_: null,
            revoke_: null,
            isManual_: !1,
            callbacks_: void 0,
        };
    let s = a,
        u = qp;
    r && ((s = [a]), (u = Gs));
    const { revoke: f, proxy: d } = Proxy.revocable(s, u);
    return ((a.draft_ = d), (a.revoke_ = f), [d, a]);
}
var qp = {
        get(i, n) {
            if (n === bn) return i;
            const r = wl(i);
            if (!W_(r, n, i.type_)) return LO(i, r, n);
            const a = r[n];
            if (i.finalized_ || !Dl(a)) return a;
            if (a === cm(i.base_, n)) {
                Nc(i);
                const s = i.type_ === 1 ? +n : n,
                    u = lp(i.scope_, a, i, s);
                return (i.copy_[s] = u);
            }
            return a;
        },
        has(i, n) {
            return n in wl(i);
        },
        ownKeys(i) {
            return Reflect.ownKeys(wl(i));
        },
        set(i, n, r) {
            const a = hS(wl(i), n);
            if (a?.set) return (a.set.call(i.draft_, r), !0);
            if (!i.modified_) {
                const s = cm(wl(i), n),
                    u = s?.[bn];
                if (u && u.base_ === r) return ((i.copy_[n] = r), i.assigned_.set(n, !1), !0);
                if (EO(r, s) && (r !== void 0 || W_(i.base_, n, i.type_))) return !0;
                (Nc(i), ip(i));
            }
            return (
                (i.copy_[n] === r && (r !== void 0 || n in i.copy_)) ||
                    (Number.isNaN(r) && Number.isNaN(i.copy_[n])) ||
                    ((i.copy_[n] = r), i.assigned_.set(n, !0), zO(i, n, r)),
                !0
            );
        },
        deleteProperty(i, n) {
            return (
                Nc(i),
                cm(i.base_, n) !== void 0 || n in i.base_ ? (i.assigned_.set(n, !1), ip(i)) : i.assigned_.delete(n),
                i.copy_ && delete i.copy_[n],
                !0
            );
        },
        getOwnPropertyDescriptor(i, n) {
            const r = wl(i),
                a = Reflect.getOwnPropertyDescriptor(r, n);
            return a && { [zc]: !0, [Im]: i.type_ !== 1 || n !== 'length', [Ic]: a[Ic], [Hs]: r[n] };
        },
        defineProperty() {
            Oi(11);
        },
        getPrototypeOf(i) {
            return po(i.base_);
        },
        setPrototypeOf() {
            Oi(12);
        },
    },
    Gs = {};
Zs(qp, (i, n) => {
    Gs[i] = function () {
        const r = arguments;
        return ((r[0] = r[0][0]), n.apply(this, r));
    };
});
Gs.deleteProperty = function (i, n) {
    return Gs.set.call(this, i, n, void 0);
};
Gs.set = function (i, n, r) {
    return qp.set.call(this, i[0], n, r, i[0]);
};
function cm(i, n) {
    const r = i[bn];
    return (r ? wl(r) : i)[n];
}
function LO(i, n, r) {
    const a = hS(n, r);
    return a ? (Hs in a ? a[Hs] : a.get?.call(i.draft_)) : void 0;
}
function hS(i, n) {
    if (!(n in i)) return;
    let r = po(i);
    for (; r; ) {
        const a = Object.getOwnPropertyDescriptor(r, n);
        if (a) return a;
        r = po(r);
    }
}
function ip(i) {
    i.modified_ || ((i.modified_ = !0), i.parent_ && ip(i.parent_));
}
function Nc(i) {
    i.copy_ || ((i.assigned_ = new Map()), (i.copy_ = Wm(i.base_, i.scope_.immer_.useStrictShallowCopy_)));
}
var kO = class {
    constructor(i) {
        ((this.autoFreeze_ = !0),
            (this.useStrictShallowCopy_ = !1),
            (this.useStrictIteration_ = !1),
            (this.produce = (n, r, a) => {
                if ($a(n) && !$a(r)) {
                    const u = r;
                    r = n;
                    const f = this;
                    return function (p = u, ...m) {
                        return f.produce(p, v => r.call(this, v, ...m));
                    };
                }
                ($a(r) || Oi(6), a !== void 0 && !$a(a) && Oi(7));
                let s;
                if (Dl(n)) {
                    const u = tb(this),
                        f = lp(u, n, void 0);
                    let d = !0;
                    try {
                        ((s = r(f)), (d = !1));
                    } finally {
                        d ? tp(u) : np(u);
                    }
                    return (eb(u, a), nb(s, u));
                } else if (!n || !Hp(n)) {
                    if (
                        ((s = r(n)),
                        s === void 0 && (s = n),
                        s === aS && (s = void 0),
                        this.autoFreeze_ && Gp(s, !0),
                        a)
                    ) {
                        const u = [],
                            f = [];
                        (go(ep).generateReplacementPatches_(n, s, { patches_: u, inversePatches_: f }), a(u, f));
                    }
                    return s;
                } else Oi(1, n);
            }),
            (this.produceWithPatches = (n, r) => {
                if ($a(n)) return (f, ...d) => this.produceWithPatches(f, p => n(p, ...d));
                let a, s;
                return [
                    this.produce(n, r, (f, d) => {
                        ((a = f), (s = d));
                    }),
                    a,
                    s,
                ];
            }),
            um(i?.autoFreeze) && this.setAutoFreeze(i.autoFreeze),
            um(i?.useStrictShallowCopy) && this.setUseStrictShallowCopy(i.useStrictShallowCopy),
            um(i?.useStrictIteration) && this.setUseStrictIteration(i.useStrictIteration));
    }
    createDraft(i) {
        (Dl(i) || Oi(8), br(i) && (i = UO(i)));
        const n = tb(this),
            r = lp(n, i, void 0);
        return ((r[bn].isManual_ = !0), np(n), r);
    }
    finishDraft(i, n) {
        const r = i && i[bn];
        (!r || !r.isManual_) && Oi(9);
        const { scope_: a } = r;
        return (eb(a, n), nb(void 0, a));
    }
    setAutoFreeze(i) {
        this.autoFreeze_ = i;
    }
    setUseStrictShallowCopy(i) {
        this.useStrictShallowCopy_ = i;
    }
    setUseStrictIteration(i) {
        this.useStrictIteration_ = i;
    }
    shouldUseStrictIteration() {
        return this.useStrictIteration_;
    }
    applyPatches(i, n) {
        let r;
        for (r = n.length - 1; r >= 0; r--) {
            const s = n[r];
            if (s.path.length === 0 && s.op === 'replace') {
                i = s.value;
                break;
            }
        }
        r > -1 && (n = n.slice(r + 1));
        const a = go(ep).applyPatches_;
        return br(i) ? a(i, n) : this.produce(i, s => a(s, n));
    }
};
function lp(i, n, r, a) {
    const [s, u] = _f(n) ? go(Wc).proxyMap_(n, r) : bf(n) ? go(Wc).proxySet_(n, r) : NO(n, r);
    return (
        (r?.scope_ ?? uS()).drafts_.push(s),
        (u.callbacks_ = r?.callbacks_ ?? []),
        (u.key_ = a),
        r && a !== void 0
            ? RO(r, u, a)
            : u.callbacks_.push(function (p) {
                  p.mapSetPlugin_?.fixSetContents(u);
                  const { patchPlugin_: m } = p;
                  u.modified_ && m && m.generatePatches_(u, [], p);
              }),
        s
    );
}
function UO(i) {
    return (br(i) || Oi(10, i), mS(i));
}
function mS(i) {
    if (!Dl(i) || Sf(i)) return i;
    const n = i[bn];
    let r,
        a = !0;
    if (n) {
        if (!n.modified_) return n.base_;
        ((n.finalized_ = !0),
            (r = Wm(i, n.scope_.immer_.useStrictShallowCopy_)),
            (a = n.scope_.immer_.shouldUseStrictIteration()));
    } else r = Wm(i, !0);
    return (
        Zs(
            r,
            (s, u) => {
                Jc(r, s, mS(u));
            },
            a,
        ),
        n && (n.finalized_ = !1),
        r
    );
}
var jO = new kO(),
    BO = jO.produce;
const HO = i => (n, r, a) => (
        (a.setState = (s, u, ...f) => {
            const d = typeof s == 'function' ? BO(s) : s;
            return n(d, u, ...f);
        }),
        i(a.setState, r, a)
    ),
    YO = HO,
    ei = X1()(
        YO(i => ({
            windows: xO,
            nextZIndex: Bi + 1,
            openWindow: (n, r = null) =>
                i(a => {
                    const s = a.windows[n];
                    ((s.isOpen = !0), (s.zIndex = a.nextZIndex), (s.data = r ?? s.data), a.nextZIndex++);
                }),
            closeWindow: n =>
                i(r => {
                    const a = r.windows[n];
                    ((a.isOpen = !1), (a.zIndex = Bi), (a.data = null));
                }),
            focusWindow: n =>
                i(r => {
                    const a = r.windows[n];
                    ((a.zIndex = r.nextZIndex), r.nextZIndex++);
                }),
        })),
    );
function pS() {
    return q1(GO);
}
function GO(i) {
    return i.isMobile;
}
function gS(i) {
    var n,
        r,
        a = '';
    if (typeof i == 'string' || typeof i == 'number') a += i;
    else if (typeof i == 'object')
        if (Array.isArray(i)) {
            var s = i.length;
            for (n = 0; n < s; n++) i[n] && (r = gS(i[n])) && (a && (a += ' '), (a += r));
        } else for (r in i) i[r] && (a && (a += ' '), (a += r));
    return a;
}
function XO() {
    for (var i, n, r = 0, a = '', s = arguments.length; r < s; r++)
        (i = arguments[r]) && (n = gS(i)) && (a && (a += ' '), (a += n));
    return a;
}
const qO = (i, n) => {
        const r = new Array(i.length + n.length);
        for (let a = 0; a < i.length; a++) r[a] = i[a];
        for (let a = 0; a < n.length; a++) r[i.length + a] = n[a];
        return r;
    },
    VO = (i, n) => ({ classGroupId: i, validator: n }),
    vS = (i = new Map(), n = null, r) => ({ nextPart: i, validators: n, classGroupId: r }),
    ef = '-',
    lb = [],
    PO = 'arbitrary..',
    QO = i => {
        const n = KO(i),
            { conflictingClassGroups: r, conflictingClassGroupModifiers: a } = i;
        return {
            getClassGroupId: f => {
                if (f.startsWith('[') && f.endsWith(']')) return ZO(f);
                const d = f.split(ef),
                    p = d[0] === '' && d.length > 1 ? 1 : 0;
                return yS(d, p, n);
            },
            getConflictingClassGroupIds: (f, d) => {
                if (d) {
                    const p = a[f],
                        m = r[f];
                    return p ? (m ? qO(m, p) : p) : m || lb;
                }
                return r[f] || lb;
            },
        };
    },
    yS = (i, n, r) => {
        if (i.length - n === 0) return r.classGroupId;
        const s = i[n],
            u = r.nextPart.get(s);
        if (u) {
            const m = yS(i, n + 1, u);
            if (m) return m;
        }
        const f = r.validators;
        if (f === null) return;
        const d = n === 0 ? i.join(ef) : i.slice(n).join(ef),
            p = f.length;
        for (let m = 0; m < p; m++) {
            const v = f[m];
            if (v.validator(d)) return v.classGroupId;
        }
    },
    ZO = i =>
        i.slice(1, -1).indexOf(':') === -1
            ? void 0
            : (() => {
                  const n = i.slice(1, -1),
                      r = n.indexOf(':'),
                      a = n.slice(0, r);
                  return a ? PO + a : void 0;
              })(),
    KO = i => {
        const { theme: n, classGroups: r } = i;
        return $O(r, n);
    },
    $O = (i, n) => {
        const r = vS();
        for (const a in i) {
            const s = i[a];
            Vp(s, r, a, n);
        }
        return r;
    },
    Vp = (i, n, r, a) => {
        const s = i.length;
        for (let u = 0; u < s; u++) {
            const f = i[u];
            FO(f, n, r, a);
        }
    },
    FO = (i, n, r, a) => {
        if (typeof i == 'string') {
            IO(i, n, r);
            return;
        }
        if (typeof i == 'function') {
            JO(i, n, r, a);
            return;
        }
        WO(i, n, r, a);
    },
    IO = (i, n, r) => {
        const a = i === '' ? n : _S(n, i);
        a.classGroupId = r;
    },
    JO = (i, n, r, a) => {
        if (eC(i)) {
            Vp(i(a), n, r, a);
            return;
        }
        (n.validators === null && (n.validators = []), n.validators.push(VO(r, i)));
    },
    WO = (i, n, r, a) => {
        const s = Object.entries(i),
            u = s.length;
        for (let f = 0; f < u; f++) {
            const [d, p] = s[f];
            Vp(p, _S(n, d), r, a);
        }
    },
    _S = (i, n) => {
        let r = i;
        const a = n.split(ef),
            s = a.length;
        for (let u = 0; u < s; u++) {
            const f = a[u];
            let d = r.nextPart.get(f);
            (d || ((d = vS()), r.nextPart.set(f, d)), (r = d));
        }
        return r;
    },
    eC = i => 'isThemeGetter' in i && i.isThemeGetter === !0,
    tC = i => {
        if (i < 1) return { get: () => {}, set: () => {} };
        let n = 0,
            r = Object.create(null),
            a = Object.create(null);
        const s = (u, f) => {
            ((r[u] = f), n++, n > i && ((n = 0), (a = r), (r = Object.create(null))));
        };
        return {
            get(u) {
                let f = r[u];
                if (f !== void 0) return f;
                if ((f = a[u]) !== void 0) return (s(u, f), f);
            },
            set(u, f) {
                u in r ? (r[u] = f) : s(u, f);
            },
        };
    },
    rp = '!',
    rb = ':',
    nC = [],
    ab = (i, n, r, a, s) => ({
        modifiers: i,
        hasImportantModifier: n,
        baseClassName: r,
        maybePostfixModifierPosition: a,
        isExternal: s,
    }),
    iC = i => {
        const { prefix: n, experimentalParseClassName: r } = i;
        let a = s => {
            const u = [];
            let f = 0,
                d = 0,
                p = 0,
                m;
            const v = s.length;
            for (let b = 0; b < v; b++) {
                const T = s[b];
                if (f === 0 && d === 0) {
                    if (T === rb) {
                        (u.push(s.slice(p, b)), (p = b + 1));
                        continue;
                    }
                    if (T === '/') {
                        m = b;
                        continue;
                    }
                }
                T === '[' ? f++ : T === ']' ? f-- : T === '(' ? d++ : T === ')' && d--;
            }
            const y = u.length === 0 ? s : s.slice(p);
            let S = y,
                g = !1;
            y.endsWith(rp) ? ((S = y.slice(0, -1)), (g = !0)) : y.startsWith(rp) && ((S = y.slice(1)), (g = !0));
            const x = m && m > p ? m - p : void 0;
            return ab(u, g, S, x);
        };
        if (n) {
            const s = n + rb,
                u = a;
            a = f => (f.startsWith(s) ? u(f.slice(s.length)) : ab(nC, !1, f, void 0, !0));
        }
        if (r) {
            const s = a;
            a = u => r({ className: u, parseClassName: s });
        }
        return a;
    },
    lC = i => {
        const n = new Map();
        return (
            i.orderSensitiveModifiers.forEach((r, a) => {
                n.set(r, 1e6 + a);
            }),
            r => {
                const a = [];
                let s = [];
                for (let u = 0; u < r.length; u++) {
                    const f = r[u],
                        d = f[0] === '[',
                        p = n.has(f);
                    d || p ? (s.length > 0 && (s.sort(), a.push(...s), (s = [])), a.push(f)) : s.push(f);
                }
                return (s.length > 0 && (s.sort(), a.push(...s)), a);
            }
        );
    },
    rC = i => ({ cache: tC(i.cacheSize), parseClassName: iC(i), sortModifiers: lC(i), ...QO(i) }),
    aC = /\s+/,
    oC = (i, n) => {
        const { parseClassName: r, getClassGroupId: a, getConflictingClassGroupIds: s, sortModifiers: u } = n,
            f = [],
            d = i.trim().split(aC);
        let p = '';
        for (let m = d.length - 1; m >= 0; m -= 1) {
            const v = d[m],
                {
                    isExternal: y,
                    modifiers: S,
                    hasImportantModifier: g,
                    baseClassName: x,
                    maybePostfixModifierPosition: b,
                } = r(v);
            if (y) {
                p = v + (p.length > 0 ? ' ' + p : p);
                continue;
            }
            let T = !!b,
                O = a(T ? x.substring(0, b) : x);
            if (!O) {
                if (!T) {
                    p = v + (p.length > 0 ? ' ' + p : p);
                    continue;
                }
                if (((O = a(x)), !O)) {
                    p = v + (p.length > 0 ? ' ' + p : p);
                    continue;
                }
                T = !1;
            }
            const L = S.length === 0 ? '' : S.length === 1 ? S[0] : u(S).join(':'),
                D = g ? L + rp : L,
                k = D + O;
            if (f.indexOf(k) > -1) continue;
            f.push(k);
            const C = s(O, T);
            for (let X = 0; X < C.length; ++X) {
                const z = C[X];
                f.push(D + z);
            }
            p = v + (p.length > 0 ? ' ' + p : p);
        }
        return p;
    },
    sC = (...i) => {
        let n = 0,
            r,
            a,
            s = '';
        for (; n < i.length; ) (r = i[n++]) && (a = bS(r)) && (s && (s += ' '), (s += a));
        return s;
    },
    bS = i => {
        if (typeof i == 'string') return i;
        let n,
            r = '';
        for (let a = 0; a < i.length; a++) i[a] && (n = bS(i[a])) && (r && (r += ' '), (r += n));
        return r;
    },
    uC = (i, ...n) => {
        let r, a, s, u;
        const f = p => {
                const m = n.reduce((v, y) => y(v), i());
                return ((r = rC(m)), (a = r.cache.get), (s = r.cache.set), (u = d), d(p));
            },
            d = p => {
                const m = a(p);
                if (m) return m;
                const v = oC(p, r);
                return (s(p, v), v);
            };
        return ((u = f), (...p) => u(sC(...p)));
    },
    cC = [],
    Zt = i => {
        const n = r => r[i] || cC;
        return ((n.isThemeGetter = !0), n);
    },
    SS = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
    xS = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
    fC = /^\d+\/\d+$/,
    dC = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    hC =
        /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    mC = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
    pC = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    gC = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    Pa = i => fC.test(i),
    Be = i => !!i && !Number.isNaN(Number(i)),
    or = i => !!i && Number.isInteger(Number(i)),
    fm = i => i.endsWith('%') && Be(i.slice(0, -1)),
    yl = i => dC.test(i),
    vC = () => !0,
    yC = i => hC.test(i) && !mC.test(i),
    wS = () => !1,
    _C = i => pC.test(i),
    bC = i => gC.test(i),
    SC = i => !xe(i) && !we(i),
    xC = i => bo(i, AS, wS),
    xe = i => SS.test(i),
    Vr = i => bo(i, MS, yC),
    dm = i => bo(i, MC, Be),
    ob = i => bo(i, ES, wS),
    wC = i => bo(i, TS, bC),
    _c = i => bo(i, OS, _C),
    we = i => xS.test(i),
    ms = i => So(i, MS),
    EC = i => So(i, OC),
    sb = i => So(i, ES),
    TC = i => So(i, AS),
    AC = i => So(i, TS),
    bc = i => So(i, OS, !0),
    bo = (i, n, r) => {
        const a = SS.exec(i);
        return a ? (a[1] ? n(a[1]) : r(a[2])) : !1;
    },
    So = (i, n, r = !1) => {
        const a = xS.exec(i);
        return a ? (a[1] ? n(a[1]) : r) : !1;
    },
    ES = i => i === 'position' || i === 'percentage',
    TS = i => i === 'image' || i === 'url',
    AS = i => i === 'length' || i === 'size' || i === 'bg-size',
    MS = i => i === 'length',
    MC = i => i === 'number',
    OC = i => i === 'family-name',
    OS = i => i === 'shadow',
    CC = () => {
        const i = Zt('color'),
            n = Zt('font'),
            r = Zt('text'),
            a = Zt('font-weight'),
            s = Zt('tracking'),
            u = Zt('leading'),
            f = Zt('breakpoint'),
            d = Zt('container'),
            p = Zt('spacing'),
            m = Zt('radius'),
            v = Zt('shadow'),
            y = Zt('inset-shadow'),
            S = Zt('text-shadow'),
            g = Zt('drop-shadow'),
            x = Zt('blur'),
            b = Zt('perspective'),
            T = Zt('aspect'),
            O = Zt('ease'),
            L = Zt('animate'),
            D = () => ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'],
            k = () => [
                'center',
                'top',
                'bottom',
                'left',
                'right',
                'top-left',
                'left-top',
                'top-right',
                'right-top',
                'bottom-right',
                'right-bottom',
                'bottom-left',
                'left-bottom',
            ],
            C = () => [...k(), we, xe],
            X = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'],
            z = () => ['auto', 'contain', 'none'],
            U = () => [we, xe, p],
            P = () => [Pa, 'full', 'auto', ...U()],
            se = () => [or, 'none', 'subgrid', we, xe],
            W = () => ['auto', { span: ['full', or, we, xe] }, or, we, xe],
            de = () => [or, 'auto', we, xe],
            ue = () => ['auto', 'min', 'max', 'fr', we, xe],
            ne = () => [
                'start',
                'end',
                'center',
                'between',
                'around',
                'evenly',
                'stretch',
                'baseline',
                'center-safe',
                'end-safe',
            ],
            I = () => ['start', 'end', 'center', 'stretch', 'center-safe', 'end-safe'],
            A = () => ['auto', ...U()],
            B = () => [Pa, 'auto', 'full', 'dvw', 'dvh', 'lvw', 'lvh', 'svw', 'svh', 'min', 'max', 'fit', ...U()],
            R = () => [i, we, xe],
            $ = () => [...k(), sb, ob, { position: [we, xe] }],
            fe = () => ['no-repeat', { repeat: ['', 'x', 'y', 'space', 'round'] }],
            M = () => ['auto', 'cover', 'contain', TC, xC, { size: [we, xe] }],
            H = () => [fm, ms, Vr],
            F = () => ['', 'none', 'full', m, we, xe],
            ee = () => ['', Be, ms, Vr],
            ge = () => ['solid', 'dashed', 'dotted', 'double'],
            ye = () => [
                'normal',
                'multiply',
                'screen',
                'overlay',
                'darken',
                'lighten',
                'color-dodge',
                'color-burn',
                'hard-light',
                'soft-light',
                'difference',
                'exclusion',
                'hue',
                'saturation',
                'color',
                'luminosity',
            ],
            he = () => [Be, fm, sb, ob],
            Ae = () => ['', 'none', x, we, xe],
            De = () => ['none', Be, we, xe],
            Me = () => ['none', Be, we, xe],
            Pe = () => [Be, we, xe],
            Ge = () => [Pa, 'full', ...U()];
        return {
            cacheSize: 500,
            theme: {
                animate: ['spin', 'ping', 'pulse', 'bounce'],
                aspect: ['video'],
                blur: [yl],
                breakpoint: [yl],
                color: [vC],
                container: [yl],
                'drop-shadow': [yl],
                ease: ['in', 'out', 'in-out'],
                font: [SC],
                'font-weight': [
                    'thin',
                    'extralight',
                    'light',
                    'normal',
                    'medium',
                    'semibold',
                    'bold',
                    'extrabold',
                    'black',
                ],
                'inset-shadow': [yl],
                leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose'],
                perspective: ['dramatic', 'near', 'normal', 'midrange', 'distant', 'none'],
                radius: [yl],
                shadow: [yl],
                spacing: ['px', Be],
                text: [yl],
                'text-shadow': [yl],
                tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest'],
            },
            classGroups: {
                aspect: [{ aspect: ['auto', 'square', Pa, xe, we, T] }],
                container: ['container'],
                columns: [{ columns: [Be, xe, we, d] }],
                'break-after': [{ 'break-after': D() }],
                'break-before': [{ 'break-before': D() }],
                'break-inside': [{ 'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column'] }],
                'box-decoration': [{ 'box-decoration': ['slice', 'clone'] }],
                box: [{ box: ['border', 'content'] }],
                display: [
                    'block',
                    'inline-block',
                    'inline',
                    'flex',
                    'inline-flex',
                    'table',
                    'inline-table',
                    'table-caption',
                    'table-cell',
                    'table-column',
                    'table-column-group',
                    'table-footer-group',
                    'table-header-group',
                    'table-row-group',
                    'table-row',
                    'flow-root',
                    'grid',
                    'inline-grid',
                    'contents',
                    'list-item',
                    'hidden',
                ],
                sr: ['sr-only', 'not-sr-only'],
                float: [{ float: ['right', 'left', 'none', 'start', 'end'] }],
                clear: [{ clear: ['left', 'right', 'both', 'none', 'start', 'end'] }],
                isolation: ['isolate', 'isolation-auto'],
                'object-fit': [{ object: ['contain', 'cover', 'fill', 'none', 'scale-down'] }],
                'object-position': [{ object: C() }],
                overflow: [{ overflow: X() }],
                'overflow-x': [{ 'overflow-x': X() }],
                'overflow-y': [{ 'overflow-y': X() }],
                overscroll: [{ overscroll: z() }],
                'overscroll-x': [{ 'overscroll-x': z() }],
                'overscroll-y': [{ 'overscroll-y': z() }],
                position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
                inset: [{ inset: P() }],
                'inset-x': [{ 'inset-x': P() }],
                'inset-y': [{ 'inset-y': P() }],
                start: [{ start: P() }],
                end: [{ end: P() }],
                top: [{ top: P() }],
                right: [{ right: P() }],
                bottom: [{ bottom: P() }],
                left: [{ left: P() }],
                visibility: ['visible', 'invisible', 'collapse'],
                z: [{ z: [or, 'auto', we, xe] }],
                basis: [{ basis: [Pa, 'full', 'auto', d, ...U()] }],
                'flex-direction': [{ flex: ['row', 'row-reverse', 'col', 'col-reverse'] }],
                'flex-wrap': [{ flex: ['nowrap', 'wrap', 'wrap-reverse'] }],
                flex: [{ flex: [Be, Pa, 'auto', 'initial', 'none', xe] }],
                grow: [{ grow: ['', Be, we, xe] }],
                shrink: [{ shrink: ['', Be, we, xe] }],
                order: [{ order: [or, 'first', 'last', 'none', we, xe] }],
                'grid-cols': [{ 'grid-cols': se() }],
                'col-start-end': [{ col: W() }],
                'col-start': [{ 'col-start': de() }],
                'col-end': [{ 'col-end': de() }],
                'grid-rows': [{ 'grid-rows': se() }],
                'row-start-end': [{ row: W() }],
                'row-start': [{ 'row-start': de() }],
                'row-end': [{ 'row-end': de() }],
                'grid-flow': [{ 'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'] }],
                'auto-cols': [{ 'auto-cols': ue() }],
                'auto-rows': [{ 'auto-rows': ue() }],
                gap: [{ gap: U() }],
                'gap-x': [{ 'gap-x': U() }],
                'gap-y': [{ 'gap-y': U() }],
                'justify-content': [{ justify: [...ne(), 'normal'] }],
                'justify-items': [{ 'justify-items': [...I(), 'normal'] }],
                'justify-self': [{ 'justify-self': ['auto', ...I()] }],
                'align-content': [{ content: ['normal', ...ne()] }],
                'align-items': [{ items: [...I(), { baseline: ['', 'last'] }] }],
                'align-self': [{ self: ['auto', ...I(), { baseline: ['', 'last'] }] }],
                'place-content': [{ 'place-content': ne() }],
                'place-items': [{ 'place-items': [...I(), 'baseline'] }],
                'place-self': [{ 'place-self': ['auto', ...I()] }],
                p: [{ p: U() }],
                px: [{ px: U() }],
                py: [{ py: U() }],
                ps: [{ ps: U() }],
                pe: [{ pe: U() }],
                pt: [{ pt: U() }],
                pr: [{ pr: U() }],
                pb: [{ pb: U() }],
                pl: [{ pl: U() }],
                m: [{ m: A() }],
                mx: [{ mx: A() }],
                my: [{ my: A() }],
                ms: [{ ms: A() }],
                me: [{ me: A() }],
                mt: [{ mt: A() }],
                mr: [{ mr: A() }],
                mb: [{ mb: A() }],
                ml: [{ ml: A() }],
                'space-x': [{ 'space-x': U() }],
                'space-x-reverse': ['space-x-reverse'],
                'space-y': [{ 'space-y': U() }],
                'space-y-reverse': ['space-y-reverse'],
                size: [{ size: B() }],
                w: [{ w: [d, 'screen', ...B()] }],
                'min-w': [{ 'min-w': [d, 'screen', 'none', ...B()] }],
                'max-w': [{ 'max-w': [d, 'screen', 'none', 'prose', { screen: [f] }, ...B()] }],
                h: [{ h: ['screen', 'lh', ...B()] }],
                'min-h': [{ 'min-h': ['screen', 'lh', 'none', ...B()] }],
                'max-h': [{ 'max-h': ['screen', 'lh', ...B()] }],
                'font-size': [{ text: ['base', r, ms, Vr] }],
                'font-smoothing': ['antialiased', 'subpixel-antialiased'],
                'font-style': ['italic', 'not-italic'],
                'font-weight': [{ font: [a, we, dm] }],
                'font-stretch': [
                    {
                        'font-stretch': [
                            'ultra-condensed',
                            'extra-condensed',
                            'condensed',
                            'semi-condensed',
                            'normal',
                            'semi-expanded',
                            'expanded',
                            'extra-expanded',
                            'ultra-expanded',
                            fm,
                            xe,
                        ],
                    },
                ],
                'font-family': [{ font: [EC, xe, n] }],
                'fvn-normal': ['normal-nums'],
                'fvn-ordinal': ['ordinal'],
                'fvn-slashed-zero': ['slashed-zero'],
                'fvn-figure': ['lining-nums', 'oldstyle-nums'],
                'fvn-spacing': ['proportional-nums', 'tabular-nums'],
                'fvn-fraction': ['diagonal-fractions', 'stacked-fractions'],
                tracking: [{ tracking: [s, we, xe] }],
                'line-clamp': [{ 'line-clamp': [Be, 'none', we, dm] }],
                leading: [{ leading: [u, ...U()] }],
                'list-image': [{ 'list-image': ['none', we, xe] }],
                'list-style-position': [{ list: ['inside', 'outside'] }],
                'list-style-type': [{ list: ['disc', 'decimal', 'none', we, xe] }],
                'text-alignment': [{ text: ['left', 'center', 'right', 'justify', 'start', 'end'] }],
                'placeholder-color': [{ placeholder: R() }],
                'text-color': [{ text: R() }],
                'text-decoration': ['underline', 'overline', 'line-through', 'no-underline'],
                'text-decoration-style': [{ decoration: [...ge(), 'wavy'] }],
                'text-decoration-thickness': [{ decoration: [Be, 'from-font', 'auto', we, Vr] }],
                'text-decoration-color': [{ decoration: R() }],
                'underline-offset': [{ 'underline-offset': [Be, 'auto', we, xe] }],
                'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
                'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
                'text-wrap': [{ text: ['wrap', 'nowrap', 'balance', 'pretty'] }],
                indent: [{ indent: U() }],
                'vertical-align': [
                    {
                        align: [
                            'baseline',
                            'top',
                            'middle',
                            'bottom',
                            'text-top',
                            'text-bottom',
                            'sub',
                            'super',
                            we,
                            xe,
                        ],
                    },
                ],
                whitespace: [{ whitespace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces'] }],
                break: [{ break: ['normal', 'words', 'all', 'keep'] }],
                wrap: [{ wrap: ['break-word', 'anywhere', 'normal'] }],
                hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
                content: [{ content: ['none', we, xe] }],
                'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
                'bg-clip': [{ 'bg-clip': ['border', 'padding', 'content', 'text'] }],
                'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
                'bg-position': [{ bg: $() }],
                'bg-repeat': [{ bg: fe() }],
                'bg-size': [{ bg: M() }],
                'bg-image': [
                    {
                        bg: [
                            'none',
                            {
                                linear: [{ to: ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'] }, or, we, xe],
                                radial: ['', we, xe],
                                conic: [or, we, xe],
                            },
                            AC,
                            wC,
                        ],
                    },
                ],
                'bg-color': [{ bg: R() }],
                'gradient-from-pos': [{ from: H() }],
                'gradient-via-pos': [{ via: H() }],
                'gradient-to-pos': [{ to: H() }],
                'gradient-from': [{ from: R() }],
                'gradient-via': [{ via: R() }],
                'gradient-to': [{ to: R() }],
                rounded: [{ rounded: F() }],
                'rounded-s': [{ 'rounded-s': F() }],
                'rounded-e': [{ 'rounded-e': F() }],
                'rounded-t': [{ 'rounded-t': F() }],
                'rounded-r': [{ 'rounded-r': F() }],
                'rounded-b': [{ 'rounded-b': F() }],
                'rounded-l': [{ 'rounded-l': F() }],
                'rounded-ss': [{ 'rounded-ss': F() }],
                'rounded-se': [{ 'rounded-se': F() }],
                'rounded-ee': [{ 'rounded-ee': F() }],
                'rounded-es': [{ 'rounded-es': F() }],
                'rounded-tl': [{ 'rounded-tl': F() }],
                'rounded-tr': [{ 'rounded-tr': F() }],
                'rounded-br': [{ 'rounded-br': F() }],
                'rounded-bl': [{ 'rounded-bl': F() }],
                'border-w': [{ border: ee() }],
                'border-w-x': [{ 'border-x': ee() }],
                'border-w-y': [{ 'border-y': ee() }],
                'border-w-s': [{ 'border-s': ee() }],
                'border-w-e': [{ 'border-e': ee() }],
                'border-w-t': [{ 'border-t': ee() }],
                'border-w-r': [{ 'border-r': ee() }],
                'border-w-b': [{ 'border-b': ee() }],
                'border-w-l': [{ 'border-l': ee() }],
                'divide-x': [{ 'divide-x': ee() }],
                'divide-x-reverse': ['divide-x-reverse'],
                'divide-y': [{ 'divide-y': ee() }],
                'divide-y-reverse': ['divide-y-reverse'],
                'border-style': [{ border: [...ge(), 'hidden', 'none'] }],
                'divide-style': [{ divide: [...ge(), 'hidden', 'none'] }],
                'border-color': [{ border: R() }],
                'border-color-x': [{ 'border-x': R() }],
                'border-color-y': [{ 'border-y': R() }],
                'border-color-s': [{ 'border-s': R() }],
                'border-color-e': [{ 'border-e': R() }],
                'border-color-t': [{ 'border-t': R() }],
                'border-color-r': [{ 'border-r': R() }],
                'border-color-b': [{ 'border-b': R() }],
                'border-color-l': [{ 'border-l': R() }],
                'divide-color': [{ divide: R() }],
                'outline-style': [{ outline: [...ge(), 'none', 'hidden'] }],
                'outline-offset': [{ 'outline-offset': [Be, we, xe] }],
                'outline-w': [{ outline: ['', Be, ms, Vr] }],
                'outline-color': [{ outline: R() }],
                shadow: [{ shadow: ['', 'none', v, bc, _c] }],
                'shadow-color': [{ shadow: R() }],
                'inset-shadow': [{ 'inset-shadow': ['none', y, bc, _c] }],
                'inset-shadow-color': [{ 'inset-shadow': R() }],
                'ring-w': [{ ring: ee() }],
                'ring-w-inset': ['ring-inset'],
                'ring-color': [{ ring: R() }],
                'ring-offset-w': [{ 'ring-offset': [Be, Vr] }],
                'ring-offset-color': [{ 'ring-offset': R() }],
                'inset-ring-w': [{ 'inset-ring': ee() }],
                'inset-ring-color': [{ 'inset-ring': R() }],
                'text-shadow': [{ 'text-shadow': ['none', S, bc, _c] }],
                'text-shadow-color': [{ 'text-shadow': R() }],
                opacity: [{ opacity: [Be, we, xe] }],
                'mix-blend': [{ 'mix-blend': [...ye(), 'plus-darker', 'plus-lighter'] }],
                'bg-blend': [{ 'bg-blend': ye() }],
                'mask-clip': [
                    { 'mask-clip': ['border', 'padding', 'content', 'fill', 'stroke', 'view'] },
                    'mask-no-clip',
                ],
                'mask-composite': [{ mask: ['add', 'subtract', 'intersect', 'exclude'] }],
                'mask-image-linear-pos': [{ 'mask-linear': [Be] }],
                'mask-image-linear-from-pos': [{ 'mask-linear-from': he() }],
                'mask-image-linear-to-pos': [{ 'mask-linear-to': he() }],
                'mask-image-linear-from-color': [{ 'mask-linear-from': R() }],
                'mask-image-linear-to-color': [{ 'mask-linear-to': R() }],
                'mask-image-t-from-pos': [{ 'mask-t-from': he() }],
                'mask-image-t-to-pos': [{ 'mask-t-to': he() }],
                'mask-image-t-from-color': [{ 'mask-t-from': R() }],
                'mask-image-t-to-color': [{ 'mask-t-to': R() }],
                'mask-image-r-from-pos': [{ 'mask-r-from': he() }],
                'mask-image-r-to-pos': [{ 'mask-r-to': he() }],
                'mask-image-r-from-color': [{ 'mask-r-from': R() }],
                'mask-image-r-to-color': [{ 'mask-r-to': R() }],
                'mask-image-b-from-pos': [{ 'mask-b-from': he() }],
                'mask-image-b-to-pos': [{ 'mask-b-to': he() }],
                'mask-image-b-from-color': [{ 'mask-b-from': R() }],
                'mask-image-b-to-color': [{ 'mask-b-to': R() }],
                'mask-image-l-from-pos': [{ 'mask-l-from': he() }],
                'mask-image-l-to-pos': [{ 'mask-l-to': he() }],
                'mask-image-l-from-color': [{ 'mask-l-from': R() }],
                'mask-image-l-to-color': [{ 'mask-l-to': R() }],
                'mask-image-x-from-pos': [{ 'mask-x-from': he() }],
                'mask-image-x-to-pos': [{ 'mask-x-to': he() }],
                'mask-image-x-from-color': [{ 'mask-x-from': R() }],
                'mask-image-x-to-color': [{ 'mask-x-to': R() }],
                'mask-image-y-from-pos': [{ 'mask-y-from': he() }],
                'mask-image-y-to-pos': [{ 'mask-y-to': he() }],
                'mask-image-y-from-color': [{ 'mask-y-from': R() }],
                'mask-image-y-to-color': [{ 'mask-y-to': R() }],
                'mask-image-radial': [{ 'mask-radial': [we, xe] }],
                'mask-image-radial-from-pos': [{ 'mask-radial-from': he() }],
                'mask-image-radial-to-pos': [{ 'mask-radial-to': he() }],
                'mask-image-radial-from-color': [{ 'mask-radial-from': R() }],
                'mask-image-radial-to-color': [{ 'mask-radial-to': R() }],
                'mask-image-radial-shape': [{ 'mask-radial': ['circle', 'ellipse'] }],
                'mask-image-radial-size': [
                    { 'mask-radial': [{ closest: ['side', 'corner'], farthest: ['side', 'corner'] }] },
                ],
                'mask-image-radial-pos': [{ 'mask-radial-at': k() }],
                'mask-image-conic-pos': [{ 'mask-conic': [Be] }],
                'mask-image-conic-from-pos': [{ 'mask-conic-from': he() }],
                'mask-image-conic-to-pos': [{ 'mask-conic-to': he() }],
                'mask-image-conic-from-color': [{ 'mask-conic-from': R() }],
                'mask-image-conic-to-color': [{ 'mask-conic-to': R() }],
                'mask-mode': [{ mask: ['alpha', 'luminance', 'match'] }],
                'mask-origin': [{ 'mask-origin': ['border', 'padding', 'content', 'fill', 'stroke', 'view'] }],
                'mask-position': [{ mask: $() }],
                'mask-repeat': [{ mask: fe() }],
                'mask-size': [{ mask: M() }],
                'mask-type': [{ 'mask-type': ['alpha', 'luminance'] }],
                'mask-image': [{ mask: ['none', we, xe] }],
                filter: [{ filter: ['', 'none', we, xe] }],
                blur: [{ blur: Ae() }],
                brightness: [{ brightness: [Be, we, xe] }],
                contrast: [{ contrast: [Be, we, xe] }],
                'drop-shadow': [{ 'drop-shadow': ['', 'none', g, bc, _c] }],
                'drop-shadow-color': [{ 'drop-shadow': R() }],
                grayscale: [{ grayscale: ['', Be, we, xe] }],
                'hue-rotate': [{ 'hue-rotate': [Be, we, xe] }],
                invert: [{ invert: ['', Be, we, xe] }],
                saturate: [{ saturate: [Be, we, xe] }],
                sepia: [{ sepia: ['', Be, we, xe] }],
                'backdrop-filter': [{ 'backdrop-filter': ['', 'none', we, xe] }],
                'backdrop-blur': [{ 'backdrop-blur': Ae() }],
                'backdrop-brightness': [{ 'backdrop-brightness': [Be, we, xe] }],
                'backdrop-contrast': [{ 'backdrop-contrast': [Be, we, xe] }],
                'backdrop-grayscale': [{ 'backdrop-grayscale': ['', Be, we, xe] }],
                'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [Be, we, xe] }],
                'backdrop-invert': [{ 'backdrop-invert': ['', Be, we, xe] }],
                'backdrop-opacity': [{ 'backdrop-opacity': [Be, we, xe] }],
                'backdrop-saturate': [{ 'backdrop-saturate': [Be, we, xe] }],
                'backdrop-sepia': [{ 'backdrop-sepia': ['', Be, we, xe] }],
                'border-collapse': [{ border: ['collapse', 'separate'] }],
                'border-spacing': [{ 'border-spacing': U() }],
                'border-spacing-x': [{ 'border-spacing-x': U() }],
                'border-spacing-y': [{ 'border-spacing-y': U() }],
                'table-layout': [{ table: ['auto', 'fixed'] }],
                caption: [{ caption: ['top', 'bottom'] }],
                transition: [{ transition: ['', 'all', 'colors', 'opacity', 'shadow', 'transform', 'none', we, xe] }],
                'transition-behavior': [{ transition: ['normal', 'discrete'] }],
                duration: [{ duration: [Be, 'initial', we, xe] }],
                ease: [{ ease: ['linear', 'initial', O, we, xe] }],
                delay: [{ delay: [Be, we, xe] }],
                animate: [{ animate: ['none', L, we, xe] }],
                backface: [{ backface: ['hidden', 'visible'] }],
                perspective: [{ perspective: [b, we, xe] }],
                'perspective-origin': [{ 'perspective-origin': C() }],
                rotate: [{ rotate: De() }],
                'rotate-x': [{ 'rotate-x': De() }],
                'rotate-y': [{ 'rotate-y': De() }],
                'rotate-z': [{ 'rotate-z': De() }],
                scale: [{ scale: Me() }],
                'scale-x': [{ 'scale-x': Me() }],
                'scale-y': [{ 'scale-y': Me() }],
                'scale-z': [{ 'scale-z': Me() }],
                'scale-3d': ['scale-3d'],
                skew: [{ skew: Pe() }],
                'skew-x': [{ 'skew-x': Pe() }],
                'skew-y': [{ 'skew-y': Pe() }],
                transform: [{ transform: [we, xe, '', 'none', 'gpu', 'cpu'] }],
                'transform-origin': [{ origin: C() }],
                'transform-style': [{ transform: ['3d', 'flat'] }],
                translate: [{ translate: Ge() }],
                'translate-x': [{ 'translate-x': Ge() }],
                'translate-y': [{ 'translate-y': Ge() }],
                'translate-z': [{ 'translate-z': Ge() }],
                'translate-none': ['translate-none'],
                accent: [{ accent: R() }],
                appearance: [{ appearance: ['none', 'auto'] }],
                'caret-color': [{ caret: R() }],
                'color-scheme': [{ scheme: ['normal', 'dark', 'light', 'light-dark', 'only-dark', 'only-light'] }],
                cursor: [
                    {
                        cursor: [
                            'auto',
                            'default',
                            'pointer',
                            'wait',
                            'text',
                            'move',
                            'help',
                            'not-allowed',
                            'none',
                            'context-menu',
                            'progress',
                            'cell',
                            'crosshair',
                            'vertical-text',
                            'alias',
                            'copy',
                            'no-drop',
                            'grab',
                            'grabbing',
                            'all-scroll',
                            'col-resize',
                            'row-resize',
                            'n-resize',
                            'e-resize',
                            's-resize',
                            'w-resize',
                            'ne-resize',
                            'nw-resize',
                            'se-resize',
                            'sw-resize',
                            'ew-resize',
                            'ns-resize',
                            'nesw-resize',
                            'nwse-resize',
                            'zoom-in',
                            'zoom-out',
                            we,
                            xe,
                        ],
                    },
                ],
                'field-sizing': [{ 'field-sizing': ['fixed', 'content'] }],
                'pointer-events': [{ 'pointer-events': ['auto', 'none'] }],
                resize: [{ resize: ['none', '', 'y', 'x'] }],
                'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
                'scroll-m': [{ 'scroll-m': U() }],
                'scroll-mx': [{ 'scroll-mx': U() }],
                'scroll-my': [{ 'scroll-my': U() }],
                'scroll-ms': [{ 'scroll-ms': U() }],
                'scroll-me': [{ 'scroll-me': U() }],
                'scroll-mt': [{ 'scroll-mt': U() }],
                'scroll-mr': [{ 'scroll-mr': U() }],
                'scroll-mb': [{ 'scroll-mb': U() }],
                'scroll-ml': [{ 'scroll-ml': U() }],
                'scroll-p': [{ 'scroll-p': U() }],
                'scroll-px': [{ 'scroll-px': U() }],
                'scroll-py': [{ 'scroll-py': U() }],
                'scroll-ps': [{ 'scroll-ps': U() }],
                'scroll-pe': [{ 'scroll-pe': U() }],
                'scroll-pt': [{ 'scroll-pt': U() }],
                'scroll-pr': [{ 'scroll-pr': U() }],
                'scroll-pb': [{ 'scroll-pb': U() }],
                'scroll-pl': [{ 'scroll-pl': U() }],
                'snap-align': [{ snap: ['start', 'end', 'center', 'align-none'] }],
                'snap-stop': [{ snap: ['normal', 'always'] }],
                'snap-type': [{ snap: ['none', 'x', 'y', 'both'] }],
                'snap-strictness': [{ snap: ['mandatory', 'proximity'] }],
                touch: [{ touch: ['auto', 'none', 'manipulation'] }],
                'touch-x': [{ 'touch-pan': ['x', 'left', 'right'] }],
                'touch-y': [{ 'touch-pan': ['y', 'up', 'down'] }],
                'touch-pz': ['touch-pinch-zoom'],
                select: [{ select: ['none', 'text', 'all', 'auto'] }],
                'will-change': [{ 'will-change': ['auto', 'scroll', 'contents', 'transform', we, xe] }],
                fill: [{ fill: ['none', ...R()] }],
                'stroke-w': [{ stroke: [Be, ms, Vr, dm] }],
                stroke: [{ stroke: ['none', ...R()] }],
                'forced-color-adjust': [{ 'forced-color-adjust': ['auto', 'none'] }],
            },
            conflictingClassGroups: {
                overflow: ['overflow-x', 'overflow-y'],
                overscroll: ['overscroll-x', 'overscroll-y'],
                inset: ['inset-x', 'inset-y', 'start', 'end', 'top', 'right', 'bottom', 'left'],
                'inset-x': ['right', 'left'],
                'inset-y': ['top', 'bottom'],
                flex: ['basis', 'grow', 'shrink'],
                gap: ['gap-x', 'gap-y'],
                p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
                px: ['pr', 'pl'],
                py: ['pt', 'pb'],
                m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
                mx: ['mr', 'ml'],
                my: ['mt', 'mb'],
                size: ['w', 'h'],
                'font-size': ['leading'],
                'fvn-normal': ['fvn-ordinal', 'fvn-slashed-zero', 'fvn-figure', 'fvn-spacing', 'fvn-fraction'],
                'fvn-ordinal': ['fvn-normal'],
                'fvn-slashed-zero': ['fvn-normal'],
                'fvn-figure': ['fvn-normal'],
                'fvn-spacing': ['fvn-normal'],
                'fvn-fraction': ['fvn-normal'],
                'line-clamp': ['display', 'overflow'],
                rounded: [
                    'rounded-s',
                    'rounded-e',
                    'rounded-t',
                    'rounded-r',
                    'rounded-b',
                    'rounded-l',
                    'rounded-ss',
                    'rounded-se',
                    'rounded-ee',
                    'rounded-es',
                    'rounded-tl',
                    'rounded-tr',
                    'rounded-br',
                    'rounded-bl',
                ],
                'rounded-s': ['rounded-ss', 'rounded-es'],
                'rounded-e': ['rounded-se', 'rounded-ee'],
                'rounded-t': ['rounded-tl', 'rounded-tr'],
                'rounded-r': ['rounded-tr', 'rounded-br'],
                'rounded-b': ['rounded-br', 'rounded-bl'],
                'rounded-l': ['rounded-tl', 'rounded-bl'],
                'border-spacing': ['border-spacing-x', 'border-spacing-y'],
                'border-w': [
                    'border-w-x',
                    'border-w-y',
                    'border-w-s',
                    'border-w-e',
                    'border-w-t',
                    'border-w-r',
                    'border-w-b',
                    'border-w-l',
                ],
                'border-w-x': ['border-w-r', 'border-w-l'],
                'border-w-y': ['border-w-t', 'border-w-b'],
                'border-color': [
                    'border-color-x',
                    'border-color-y',
                    'border-color-s',
                    'border-color-e',
                    'border-color-t',
                    'border-color-r',
                    'border-color-b',
                    'border-color-l',
                ],
                'border-color-x': ['border-color-r', 'border-color-l'],
                'border-color-y': ['border-color-t', 'border-color-b'],
                translate: ['translate-x', 'translate-y', 'translate-none'],
                'translate-none': ['translate', 'translate-x', 'translate-y', 'translate-z'],
                'scroll-m': [
                    'scroll-mx',
                    'scroll-my',
                    'scroll-ms',
                    'scroll-me',
                    'scroll-mt',
                    'scroll-mr',
                    'scroll-mb',
                    'scroll-ml',
                ],
                'scroll-mx': ['scroll-mr', 'scroll-ml'],
                'scroll-my': ['scroll-mt', 'scroll-mb'],
                'scroll-p': [
                    'scroll-px',
                    'scroll-py',
                    'scroll-ps',
                    'scroll-pe',
                    'scroll-pt',
                    'scroll-pr',
                    'scroll-pb',
                    'scroll-pl',
                ],
                'scroll-px': ['scroll-pr', 'scroll-pl'],
                'scroll-py': ['scroll-pt', 'scroll-pb'],
                touch: ['touch-x', 'touch-y', 'touch-pz'],
                'touch-x': ['touch'],
                'touch-y': ['touch'],
                'touch-pz': ['touch'],
            },
            conflictingClassGroupModifiers: { 'font-size': ['leading'] },
            orderSensitiveModifiers: [
                '*',
                '**',
                'after',
                'backdrop',
                'before',
                'details-content',
                'file',
                'first-letter',
                'first-line',
                'marker',
                'placeholder',
                'selection',
            ],
        };
    },
    DC = uC(CC);
function wf(...i) {
    return DC(XO(i));
}
const RC = () => {
    const i = Ut.c(15),
        n = pS(),
        r = ei(zC),
        a = ei(NC),
        s = ei(LC),
        u = E.useRef(null);
    let f;
    i[0] !== n ? ((f = D => (n ? D.mobileVisibility !== !1 : !0)), (i[0] = n), (i[1] = f)) : (f = i[1]);
    const d = vO.filter(f);
    let p;
    i[2] !== s || i[3] !== a || i[4] !== r
        ? ((p = D => {
              if (!D.canOpen) return;
              const k = D.id,
                  C = r[k];
              if (!C) throw new Error(`Window with id ${k} does not exist in the store.`);
              C.isOpen ? s(k) : a(k);
          }),
          (i[2] = s),
          (i[3] = a),
          (i[4] = r),
          (i[5] = p))
        : (p = i[5]);
    const m = p;
    let v, y;
    (i[6] === Symbol.for('react.memo_cache_sentinel')
        ? ((v = () => {
              const D = u.current;
              if (!D) return;
              const k = D.querySelectorAll('.dock-icon'),
                  C = U => {
                      const { left: P } = D.getBoundingClientRect();
                      k.forEach(se => {
                          const { left: W, width: de } = se.getBoundingClientRect(),
                              ue = W - P + de / 2,
                              ne = Math.abs(U - ue),
                              I = Math.exp(-(ne ** 2.5) / 2e4);
                          vo.to(se, { scale: 1 + 0.25 * I, y: -15 * I, duration: 0.2, ease: 'power1.out' });
                      });
                  },
                  X = U => {
                      const P = D.getBoundingClientRect().left,
                          se = U.clientX - P;
                      C(se);
                  },
                  z = () => {
                      k.forEach(kC);
                  };
              return (
                  D.addEventListener('mousemove', X),
                  D.addEventListener('mouseleave', z),
                  () => {
                      (D.removeEventListener('mousemove', X), D.removeEventListener('mouseleave', z));
                  }
              );
          }),
          (y = []),
          (i[6] = v),
          (i[7] = y))
        : ((v = i[6]), (y = i[7])),
        df(v, y));
    const S = 'dock',
        g = 'absolute bottom-5 left-1/2 z-50 w-full -translate-x-1/2 px-5 select-none sm:w-auto sm:px-0',
        x =
            'bg-card/20 flex items-end justify-between gap-1.5 rounded-2xl p-1.5 backdrop-blur-sm motion-reduce:backdrop-blur-none sm:backdrop-blur-md';
    let b;
    i[8] !== m
        ? ((b = D => {
              const { id: k, name: C, icon: X, canOpen: z } = D;
              return V.jsx(
                  'div',
                  {
                      className: 'relative flex justify-center',
                      children: V.jsx('button', {
                          type: 'button',
                          className: 'dock-icon cursor-pointer',
                          'aria-label': C,
                          'data-tooltip-id': 'dock-tooltip',
                          'data-tooltip-content': C,
                          'data-tooltip-delay-show': 150,
                          disabled: !z,
                          onClick: () => m({ id: k, canOpen: z }),
                          children: V.jsx('img', {
                              src: `/images/${X}`,
                              alt: `icon-${C}`,
                              loading: 'lazy',
                              className: wf(
                                  'size-14',
                                  z ? 'object-cover object-center' : 'object-cover object-center opacity-60',
                              ),
                          }),
                      }),
                  },
                  k,
              );
          }),
          (i[8] = m),
          (i[9] = b))
        : (b = i[9]);
    const T = d.map(b);
    let O;
    i[10] !== n
        ? ((O =
              n === !1 &&
              V.jsx(mO, {
                  id: 'dock-tooltip',
                  place: 'top',
                  className:
                      '!bg-accent/80 !text-accent-foreground !w-fit !rounded-md !px-3 !py-1 !text-center !text-xs !shadow-2xl',
              })),
          (i[10] = n),
          (i[11] = O))
        : (O = i[11]);
    let L;
    return (
        i[12] !== T || i[13] !== O
            ? ((L = V.jsx('section', {
                  id: S,
                  className: g,
                  children: V.jsxs('div', { ref: u, className: x, children: [T, O] }),
              })),
              (i[12] = T),
              (i[13] = O),
              (i[14] = L))
            : (L = i[14]),
        L
    );
};
function zC(i) {
    return i.windows;
}
function NC(i) {
    return i.openWindow;
}
function LC(i) {
    return i.closeWindow;
}
function kC(i) {
    vo.to(i, { scale: 1, y: 0, duration: 0.3, ease: 'power2.out' });
}
var Lc = { exports: {} },
    UC = Lc.exports,
    ub;
function jC() {
    return (
        ub ||
            ((ub = 1),
            (function (i, n) {
                (function (r, a) {
                    i.exports = a();
                })(UC, function () {
                    var r = 1e3,
                        a = 6e4,
                        s = 36e5,
                        u = 'millisecond',
                        f = 'second',
                        d = 'minute',
                        p = 'hour',
                        m = 'day',
                        v = 'week',
                        y = 'month',
                        S = 'quarter',
                        g = 'year',
                        x = 'date',
                        b = 'Invalid Date',
                        T =
                            /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
                        O = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
                        L = {
                            name: 'en',
                            weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
                            months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
                                '_',
                            ),
                            ordinal: function (ne) {
                                var I = ['th', 'st', 'nd', 'rd'],
                                    A = ne % 100;
                                return '[' + ne + (I[(A - 20) % 10] || I[A] || I[0]) + ']';
                            },
                        },
                        D = function (ne, I, A) {
                            var B = String(ne);
                            return !B || B.length >= I ? ne : '' + Array(I + 1 - B.length).join(A) + ne;
                        },
                        k = {
                            s: D,
                            z: function (ne) {
                                var I = -ne.utcOffset(),
                                    A = Math.abs(I),
                                    B = Math.floor(A / 60),
                                    R = A % 60;
                                return (I <= 0 ? '+' : '-') + D(B, 2, '0') + ':' + D(R, 2, '0');
                            },
                            m: function ne(I, A) {
                                if (I.date() < A.date()) return -ne(A, I);
                                var B = 12 * (A.year() - I.year()) + (A.month() - I.month()),
                                    R = I.clone().add(B, y),
                                    $ = A - R < 0,
                                    fe = I.clone().add(B + ($ ? -1 : 1), y);
                                return +(-(B + (A - R) / ($ ? R - fe : fe - R)) || 0);
                            },
                            a: function (ne) {
                                return ne < 0 ? Math.ceil(ne) || 0 : Math.floor(ne);
                            },
                            p: function (ne) {
                                return (
                                    { M: y, y: g, w: v, d: m, D: x, h: p, m: d, s: f, ms: u, Q: S }[ne] ||
                                    String(ne || '')
                                        .toLowerCase()
                                        .replace(/s$/, '')
                                );
                            },
                            u: function (ne) {
                                return ne === void 0;
                            },
                        },
                        C = 'en',
                        X = {};
                    X[C] = L;
                    var z = '$isDayjsObject',
                        U = function (ne) {
                            return ne instanceof de || !(!ne || !ne[z]);
                        },
                        P = function ne(I, A, B) {
                            var R;
                            if (!I) return C;
                            if (typeof I == 'string') {
                                var $ = I.toLowerCase();
                                (X[$] && (R = $), A && ((X[$] = A), (R = $)));
                                var fe = I.split('-');
                                if (!R && fe.length > 1) return ne(fe[0]);
                            } else {
                                var M = I.name;
                                ((X[M] = I), (R = M));
                            }
                            return (!B && R && (C = R), R || (!B && C));
                        },
                        se = function (ne, I) {
                            if (U(ne)) return ne.clone();
                            var A = typeof I == 'object' ? I : {};
                            return ((A.date = ne), (A.args = arguments), new de(A));
                        },
                        W = k;
                    ((W.l = P),
                        (W.i = U),
                        (W.w = function (ne, I) {
                            return se(ne, { locale: I.$L, utc: I.$u, x: I.$x, $offset: I.$offset });
                        }));
                    var de = (function () {
                            function ne(A) {
                                ((this.$L = P(A.locale, null, !0)),
                                    this.parse(A),
                                    (this.$x = this.$x || A.x || {}),
                                    (this[z] = !0));
                            }
                            var I = ne.prototype;
                            return (
                                (I.parse = function (A) {
                                    ((this.$d = (function (B) {
                                        var R = B.date,
                                            $ = B.utc;
                                        if (R === null) return new Date(NaN);
                                        if (W.u(R)) return new Date();
                                        if (R instanceof Date) return new Date(R);
                                        if (typeof R == 'string' && !/Z$/i.test(R)) {
                                            var fe = R.match(T);
                                            if (fe) {
                                                var M = fe[2] - 1 || 0,
                                                    H = (fe[7] || '0').substring(0, 3);
                                                return $
                                                    ? new Date(
                                                          Date.UTC(
                                                              fe[1],
                                                              M,
                                                              fe[3] || 1,
                                                              fe[4] || 0,
                                                              fe[5] || 0,
                                                              fe[6] || 0,
                                                              H,
                                                          ),
                                                      )
                                                    : new Date(
                                                          fe[1],
                                                          M,
                                                          fe[3] || 1,
                                                          fe[4] || 0,
                                                          fe[5] || 0,
                                                          fe[6] || 0,
                                                          H,
                                                      );
                                            }
                                        }
                                        return new Date(R);
                                    })(A)),
                                        this.init());
                                }),
                                (I.init = function () {
                                    var A = this.$d;
                                    ((this.$y = A.getFullYear()),
                                        (this.$M = A.getMonth()),
                                        (this.$D = A.getDate()),
                                        (this.$W = A.getDay()),
                                        (this.$H = A.getHours()),
                                        (this.$m = A.getMinutes()),
                                        (this.$s = A.getSeconds()),
                                        (this.$ms = A.getMilliseconds()));
                                }),
                                (I.$utils = function () {
                                    return W;
                                }),
                                (I.isValid = function () {
                                    return this.$d.toString() !== b;
                                }),
                                (I.isSame = function (A, B) {
                                    var R = se(A);
                                    return this.startOf(B) <= R && R <= this.endOf(B);
                                }),
                                (I.isAfter = function (A, B) {
                                    return se(A) < this.startOf(B);
                                }),
                                (I.isBefore = function (A, B) {
                                    return this.endOf(B) < se(A);
                                }),
                                (I.$g = function (A, B, R) {
                                    return W.u(A) ? this[B] : this.set(R, A);
                                }),
                                (I.unix = function () {
                                    return Math.floor(this.valueOf() / 1e3);
                                }),
                                (I.valueOf = function () {
                                    return this.$d.getTime();
                                }),
                                (I.startOf = function (A, B) {
                                    var R = this,
                                        $ = !!W.u(B) || B,
                                        fe = W.p(A),
                                        M = function (De, Me) {
                                            var Pe = W.w(R.$u ? Date.UTC(R.$y, Me, De) : new Date(R.$y, Me, De), R);
                                            return $ ? Pe : Pe.endOf(m);
                                        },
                                        H = function (De, Me) {
                                            return W.w(
                                                R.toDate()[De].apply(
                                                    R.toDate('s'),
                                                    ($ ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Me),
                                                ),
                                                R,
                                            );
                                        },
                                        F = this.$W,
                                        ee = this.$M,
                                        ge = this.$D,
                                        ye = 'set' + (this.$u ? 'UTC' : '');
                                    switch (fe) {
                                        case g:
                                            return $ ? M(1, 0) : M(31, 11);
                                        case y:
                                            return $ ? M(1, ee) : M(0, ee + 1);
                                        case v:
                                            var he = this.$locale().weekStart || 0,
                                                Ae = (F < he ? F + 7 : F) - he;
                                            return M($ ? ge - Ae : ge + (6 - Ae), ee);
                                        case m:
                                        case x:
                                            return H(ye + 'Hours', 0);
                                        case p:
                                            return H(ye + 'Minutes', 1);
                                        case d:
                                            return H(ye + 'Seconds', 2);
                                        case f:
                                            return H(ye + 'Milliseconds', 3);
                                        default:
                                            return this.clone();
                                    }
                                }),
                                (I.endOf = function (A) {
                                    return this.startOf(A, !1);
                                }),
                                (I.$set = function (A, B) {
                                    var R,
                                        $ = W.p(A),
                                        fe = 'set' + (this.$u ? 'UTC' : ''),
                                        M = ((R = {}),
                                        (R[m] = fe + 'Date'),
                                        (R[x] = fe + 'Date'),
                                        (R[y] = fe + 'Month'),
                                        (R[g] = fe + 'FullYear'),
                                        (R[p] = fe + 'Hours'),
                                        (R[d] = fe + 'Minutes'),
                                        (R[f] = fe + 'Seconds'),
                                        (R[u] = fe + 'Milliseconds'),
                                        R)[$],
                                        H = $ === m ? this.$D + (B - this.$W) : B;
                                    if ($ === y || $ === g) {
                                        var F = this.clone().set(x, 1);
                                        (F.$d[M](H),
                                            F.init(),
                                            (this.$d = F.set(x, Math.min(this.$D, F.daysInMonth())).$d));
                                    } else M && this.$d[M](H);
                                    return (this.init(), this);
                                }),
                                (I.set = function (A, B) {
                                    return this.clone().$set(A, B);
                                }),
                                (I.get = function (A) {
                                    return this[W.p(A)]();
                                }),
                                (I.add = function (A, B) {
                                    var R,
                                        $ = this;
                                    A = Number(A);
                                    var fe = W.p(B),
                                        M = function (ee) {
                                            var ge = se($);
                                            return W.w(ge.date(ge.date() + Math.round(ee * A)), $);
                                        };
                                    if (fe === y) return this.set(y, this.$M + A);
                                    if (fe === g) return this.set(g, this.$y + A);
                                    if (fe === m) return M(1);
                                    if (fe === v) return M(7);
                                    var H = ((R = {}), (R[d] = a), (R[p] = s), (R[f] = r), R)[fe] || 1,
                                        F = this.$d.getTime() + A * H;
                                    return W.w(F, this);
                                }),
                                (I.subtract = function (A, B) {
                                    return this.add(-1 * A, B);
                                }),
                                (I.format = function (A) {
                                    var B = this,
                                        R = this.$locale();
                                    if (!this.isValid()) return R.invalidDate || b;
                                    var $ = A || 'YYYY-MM-DDTHH:mm:ssZ',
                                        fe = W.z(this),
                                        M = this.$H,
                                        H = this.$m,
                                        F = this.$M,
                                        ee = R.weekdays,
                                        ge = R.months,
                                        ye = R.meridiem,
                                        he = function (Me, Pe, Ge, gt) {
                                            return (Me && (Me[Pe] || Me(B, $))) || Ge[Pe].slice(0, gt);
                                        },
                                        Ae = function (Me) {
                                            return W.s(M % 12 || 12, Me, '0');
                                        },
                                        De =
                                            ye ||
                                            function (Me, Pe, Ge) {
                                                var gt = Me < 12 ? 'AM' : 'PM';
                                                return Ge ? gt.toLowerCase() : gt;
                                            };
                                    return $.replace(O, function (Me, Pe) {
                                        return (
                                            Pe ||
                                            (function (Ge) {
                                                switch (Ge) {
                                                    case 'YY':
                                                        return String(B.$y).slice(-2);
                                                    case 'YYYY':
                                                        return W.s(B.$y, 4, '0');
                                                    case 'M':
                                                        return F + 1;
                                                    case 'MM':
                                                        return W.s(F + 1, 2, '0');
                                                    case 'MMM':
                                                        return he(R.monthsShort, F, ge, 3);
                                                    case 'MMMM':
                                                        return he(ge, F);
                                                    case 'D':
                                                        return B.$D;
                                                    case 'DD':
                                                        return W.s(B.$D, 2, '0');
                                                    case 'd':
                                                        return String(B.$W);
                                                    case 'dd':
                                                        return he(R.weekdaysMin, B.$W, ee, 2);
                                                    case 'ddd':
                                                        return he(R.weekdaysShort, B.$W, ee, 3);
                                                    case 'dddd':
                                                        return ee[B.$W];
                                                    case 'H':
                                                        return String(M);
                                                    case 'HH':
                                                        return W.s(M, 2, '0');
                                                    case 'h':
                                                        return Ae(1);
                                                    case 'hh':
                                                        return Ae(2);
                                                    case 'a':
                                                        return De(M, H, !0);
                                                    case 'A':
                                                        return De(M, H, !1);
                                                    case 'm':
                                                        return String(H);
                                                    case 'mm':
                                                        return W.s(H, 2, '0');
                                                    case 's':
                                                        return String(B.$s);
                                                    case 'ss':
                                                        return W.s(B.$s, 2, '0');
                                                    case 'SSS':
                                                        return W.s(B.$ms, 3, '0');
                                                    case 'Z':
                                                        return fe;
                                                }
                                                return null;
                                            })(Me) ||
                                            fe.replace(':', '')
                                        );
                                    });
                                }),
                                (I.utcOffset = function () {
                                    return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
                                }),
                                (I.diff = function (A, B, R) {
                                    var $,
                                        fe = this,
                                        M = W.p(B),
                                        H = se(A),
                                        F = (H.utcOffset() - this.utcOffset()) * a,
                                        ee = this - H,
                                        ge = function () {
                                            return W.m(fe, H);
                                        };
                                    switch (M) {
                                        case g:
                                            $ = ge() / 12;
                                            break;
                                        case y:
                                            $ = ge();
                                            break;
                                        case S:
                                            $ = ge() / 3;
                                            break;
                                        case v:
                                            $ = (ee - F) / 6048e5;
                                            break;
                                        case m:
                                            $ = (ee - F) / 864e5;
                                            break;
                                        case p:
                                            $ = ee / s;
                                            break;
                                        case d:
                                            $ = ee / a;
                                            break;
                                        case f:
                                            $ = ee / r;
                                            break;
                                        default:
                                            $ = ee;
                                    }
                                    return R ? $ : W.a($);
                                }),
                                (I.daysInMonth = function () {
                                    return this.endOf(y).$D;
                                }),
                                (I.$locale = function () {
                                    return X[this.$L];
                                }),
                                (I.locale = function (A, B) {
                                    if (!A) return this.$L;
                                    var R = this.clone(),
                                        $ = P(A, B, !0);
                                    return ($ && (R.$L = $), R);
                                }),
                                (I.clone = function () {
                                    return W.w(this.$d, this);
                                }),
                                (I.toDate = function () {
                                    return new Date(this.valueOf());
                                }),
                                (I.toJSON = function () {
                                    return this.isValid() ? this.toISOString() : null;
                                }),
                                (I.toISOString = function () {
                                    return this.$d.toISOString();
                                }),
                                (I.toString = function () {
                                    return this.$d.toUTCString();
                                }),
                                ne
                            );
                        })(),
                        ue = de.prototype;
                    return (
                        (se.prototype = ue),
                        [
                            ['$ms', u],
                            ['$s', f],
                            ['$m', d],
                            ['$H', p],
                            ['$W', m],
                            ['$M', y],
                            ['$y', g],
                            ['$D', x],
                        ].forEach(function (ne) {
                            ue[ne[1]] = function (I) {
                                return this.$g(I, ne[0], ne[1]);
                            };
                        }),
                        (se.extend = function (ne, I) {
                            return (ne.$i || (ne(I, de, se), (ne.$i = !0)), se);
                        }),
                        (se.locale = P),
                        (se.isDayjs = U),
                        (se.unix = function (ne) {
                            return se(1e3 * ne);
                        }),
                        (se.en = X[C]),
                        (se.Ls = X),
                        (se.p = {}),
                        se
                    );
                });
            })(Lc)),
        Lc.exports
    );
}
var BC = jC();
const CS = af(BC);
function Je(i, n, { checkForDefaultPrevented: r = !0 } = {}) {
    return function (s) {
        if ((i?.(s), r === !1 || !s.defaultPrevented)) return n?.(s);
    };
}
function cb(i, n) {
    if (typeof i == 'function') return i(n);
    i != null && (i.current = n);
}
function Ef(...i) {
    return n => {
        let r = !1;
        const a = i.map(s => {
            const u = cb(s, n);
            return (!r && typeof u == 'function' && (r = !0), u);
        });
        if (r)
            return () => {
                for (let s = 0; s < a.length; s++) {
                    const u = a[s];
                    typeof u == 'function' ? u() : cb(i[s], null);
                }
            };
    };
}
function Un(...i) {
    return E.useCallback(Ef(...i), i);
}
function $s(i, n = []) {
    let r = [];
    function a(u, f) {
        const d = E.createContext(f),
            p = r.length;
        r = [...r, f];
        const m = y => {
            const { scope: S, children: g, ...x } = y,
                b = S?.[i]?.[p] || d,
                T = E.useMemo(() => x, Object.values(x));
            return V.jsx(b.Provider, { value: T, children: g });
        };
        m.displayName = u + 'Provider';
        function v(y, S) {
            const g = S?.[i]?.[p] || d,
                x = E.useContext(g);
            if (x) return x;
            if (f !== void 0) return f;
            throw new Error(`\`${y}\` must be used within \`${u}\``);
        }
        return [m, v];
    }
    const s = () => {
        const u = r.map(f => E.createContext(f));
        return function (d) {
            const p = d?.[i] || u;
            return E.useMemo(() => ({ [`__scope${i}`]: { ...d, [i]: p } }), [d, p]);
        };
    };
    return ((s.scopeName = i), [a, HC(s, ...n)]);
}
function HC(...i) {
    const n = i[0];
    if (i.length === 1) return n;
    const r = () => {
        const a = i.map(s => ({ useScope: s(), scopeName: s.scopeName }));
        return function (u) {
            const f = a.reduce((d, { useScope: p, scopeName: m }) => {
                const y = p(u)[`__scope${m}`];
                return { ...d, ...y };
            }, {});
            return E.useMemo(() => ({ [`__scope${n.scopeName}`]: f }), [f]);
        };
    };
    return ((r.scopeName = n.scopeName), r);
}
var Sr = globalThis?.document ? E.useLayoutEffect : () => {},
    YC = Cb[' useInsertionEffect '.trim().toString()] || Sr;
function DS({ prop: i, defaultProp: n, onChange: r = () => {}, caller: a }) {
    const [s, u, f] = GC({ defaultProp: n, onChange: r }),
        d = i !== void 0,
        p = d ? i : s;
    {
        const v = E.useRef(i !== void 0);
        E.useEffect(() => {
            const y = v.current;
            (y !== d &&
                console.warn(
                    `${a} is changing from ${y ? 'controlled' : 'uncontrolled'} to ${d ? 'controlled' : 'uncontrolled'}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
                ),
                (v.current = d));
        }, [d, a]);
    }
    const m = E.useCallback(
        v => {
            if (d) {
                const y = XC(v) ? v(i) : v;
                y !== i && f.current?.(y);
            } else u(v);
        },
        [d, i, u, f],
    );
    return [p, m];
}
function GC({ defaultProp: i, onChange: n }) {
    const [r, a] = E.useState(i),
        s = E.useRef(r),
        u = E.useRef(n);
    return (
        YC(() => {
            u.current = n;
        }, [n]),
        E.useEffect(() => {
            s.current !== r && (u.current?.(r), (s.current = r));
        }, [r, s]),
        [r, a, u]
    );
}
function XC(i) {
    return typeof i == 'function';
}
var Pp = Db();
const qC = af(Pp);
function tf(i) {
    const n = VC(i),
        r = E.forwardRef((a, s) => {
            const { children: u, ...f } = a,
                d = E.Children.toArray(u),
                p = d.find(QC);
            if (p) {
                const m = p.props.children,
                    v = d.map(y =>
                        y === p
                            ? E.Children.count(m) > 1
                                ? E.Children.only(null)
                                : E.isValidElement(m)
                                  ? m.props.children
                                  : null
                            : y,
                    );
                return V.jsx(n, { ...f, ref: s, children: E.isValidElement(m) ? E.cloneElement(m, void 0, v) : null });
            }
            return V.jsx(n, { ...f, ref: s, children: u });
        });
    return ((r.displayName = `${i}.Slot`), r);
}
function VC(i) {
    const n = E.forwardRef((r, a) => {
        const { children: s, ...u } = r;
        if (E.isValidElement(s)) {
            const f = KC(s),
                d = ZC(u, s.props);
            return (s.type !== E.Fragment && (d.ref = a ? Ef(a, f) : f), E.cloneElement(s, d));
        }
        return E.Children.count(s) > 1 ? E.Children.only(null) : null;
    });
    return ((n.displayName = `${i}.SlotClone`), n);
}
var PC = Symbol('radix.slottable');
function QC(i) {
    return E.isValidElement(i) && typeof i.type == 'function' && '__radixId' in i.type && i.type.__radixId === PC;
}
function ZC(i, n) {
    const r = { ...n };
    for (const a in n) {
        const s = i[a],
            u = n[a];
        /^on[A-Z]/.test(a)
            ? s && u
                ? (r[a] = (...d) => {
                      const p = u(...d);
                      return (s(...d), p);
                  })
                : s && (r[a] = s)
            : a === 'style'
              ? (r[a] = { ...s, ...u })
              : a === 'className' && (r[a] = [s, u].filter(Boolean).join(' '));
    }
    return { ...i, ...r };
}
function KC(i) {
    let n = Object.getOwnPropertyDescriptor(i.props, 'ref')?.get,
        r = n && 'isReactWarning' in n && n.isReactWarning;
    return r
        ? i.ref
        : ((n = Object.getOwnPropertyDescriptor(i, 'ref')?.get),
          (r = n && 'isReactWarning' in n && n.isReactWarning),
          r ? i.props.ref : i.props.ref || i.ref);
}
var $C = [
        'a',
        'button',
        'div',
        'form',
        'h2',
        'h3',
        'img',
        'input',
        'label',
        'li',
        'nav',
        'ol',
        'p',
        'select',
        'span',
        'svg',
        'ul',
    ],
    Sn = $C.reduce((i, n) => {
        const r = tf(`Primitive.${n}`),
            a = E.forwardRef((s, u) => {
                const { asChild: f, ...d } = s,
                    p = f ? r : n;
                return (typeof window < 'u' && (window[Symbol.for('radix-ui')] = !0), V.jsx(p, { ...d, ref: u }));
            });
        return ((a.displayName = `Primitive.${n}`), { ...i, [n]: a });
    }, {});
function RS(i, n) {
    i && Pp.flushSync(() => i.dispatchEvent(n));
}
function zS(i) {
    const n = i + 'CollectionProvider',
        [r, a] = $s(n),
        [s, u] = r(n, { collectionRef: { current: null }, itemMap: new Map() }),
        f = b => {
            const { scope: T, children: O } = b,
                L = $t.useRef(null),
                D = $t.useRef(new Map()).current;
            return V.jsx(s, { scope: T, itemMap: D, collectionRef: L, children: O });
        };
    f.displayName = n;
    const d = i + 'CollectionSlot',
        p = tf(d),
        m = $t.forwardRef((b, T) => {
            const { scope: O, children: L } = b,
                D = u(d, O),
                k = Un(T, D.collectionRef);
            return V.jsx(p, { ref: k, children: L });
        });
    m.displayName = d;
    const v = i + 'CollectionItemSlot',
        y = 'data-radix-collection-item',
        S = tf(v),
        g = $t.forwardRef((b, T) => {
            const { scope: O, children: L, ...D } = b,
                k = $t.useRef(null),
                C = Un(T, k),
                X = u(v, O);
            return (
                $t.useEffect(() => (X.itemMap.set(k, { ref: k, ...D }), () => void X.itemMap.delete(k))),
                V.jsx(S, { [y]: '', ref: C, children: L })
            );
        });
    g.displayName = v;
    function x(b) {
        const T = u(i + 'CollectionConsumer', b);
        return $t.useCallback(() => {
            const L = T.collectionRef.current;
            if (!L) return [];
            const D = Array.from(L.querySelectorAll(`[${y}]`));
            return Array.from(T.itemMap.values()).sort((X, z) => D.indexOf(X.ref.current) - D.indexOf(z.ref.current));
        }, [T.collectionRef, T.itemMap]);
    }
    return [{ Provider: f, Slot: m, ItemSlot: g }, x, a];
}
var FC = E.createContext(void 0);
function NS(i) {
    const n = E.useContext(FC);
    return i || n || 'ltr';
}
function Rl(i) {
    const n = E.useRef(i);
    return (
        E.useEffect(() => {
            n.current = i;
        }),
        E.useMemo(
            () =>
                (...r) =>
                    n.current?.(...r),
            [],
        )
    );
}
function IC(i, n = globalThis?.document) {
    const r = Rl(i);
    E.useEffect(() => {
        const a = s => {
            s.key === 'Escape' && r(s);
        };
        return (
            n.addEventListener('keydown', a, { capture: !0 }),
            () => n.removeEventListener('keydown', a, { capture: !0 })
        );
    }, [r, n]);
}
var JC = 'DismissableLayer',
    ap = 'dismissableLayer.update',
    WC = 'dismissableLayer.pointerDownOutside',
    e2 = 'dismissableLayer.focusOutside',
    fb,
    LS = E.createContext({ layers: new Set(), layersWithOutsidePointerEventsDisabled: new Set(), branches: new Set() }),
    kS = E.forwardRef((i, n) => {
        const {
                disableOutsidePointerEvents: r = !1,
                onEscapeKeyDown: a,
                onPointerDownOutside: s,
                onFocusOutside: u,
                onInteractOutside: f,
                onDismiss: d,
                ...p
            } = i,
            m = E.useContext(LS),
            [v, y] = E.useState(null),
            S = v?.ownerDocument ?? globalThis?.document,
            [, g] = E.useState({}),
            x = Un(n, z => y(z)),
            b = Array.from(m.layers),
            [T] = [...m.layersWithOutsidePointerEventsDisabled].slice(-1),
            O = b.indexOf(T),
            L = v ? b.indexOf(v) : -1,
            D = m.layersWithOutsidePointerEventsDisabled.size > 0,
            k = L >= O,
            C = i2(z => {
                const U = z.target,
                    P = [...m.branches].some(se => se.contains(U));
                !k || P || (s?.(z), f?.(z), z.defaultPrevented || d?.());
            }, S),
            X = l2(z => {
                const U = z.target;
                [...m.branches].some(se => se.contains(U)) || (u?.(z), f?.(z), z.defaultPrevented || d?.());
            }, S);
        return (
            IC(z => {
                L === m.layers.size - 1 && (a?.(z), !z.defaultPrevented && d && (z.preventDefault(), d()));
            }, S),
            E.useEffect(() => {
                if (v)
                    return (
                        r &&
                            (m.layersWithOutsidePointerEventsDisabled.size === 0 &&
                                ((fb = S.body.style.pointerEvents), (S.body.style.pointerEvents = 'none')),
                            m.layersWithOutsidePointerEventsDisabled.add(v)),
                        m.layers.add(v),
                        db(),
                        () => {
                            r &&
                                m.layersWithOutsidePointerEventsDisabled.size === 1 &&
                                (S.body.style.pointerEvents = fb);
                        }
                    );
            }, [v, S, r, m]),
            E.useEffect(
                () => () => {
                    v && (m.layers.delete(v), m.layersWithOutsidePointerEventsDisabled.delete(v), db());
                },
                [v, m],
            ),
            E.useEffect(() => {
                const z = () => g({});
                return (document.addEventListener(ap, z), () => document.removeEventListener(ap, z));
            }, []),
            V.jsx(Sn.div, {
                ...p,
                ref: x,
                style: { pointerEvents: D ? (k ? 'auto' : 'none') : void 0, ...i.style },
                onFocusCapture: Je(i.onFocusCapture, X.onFocusCapture),
                onBlurCapture: Je(i.onBlurCapture, X.onBlurCapture),
                onPointerDownCapture: Je(i.onPointerDownCapture, C.onPointerDownCapture),
            })
        );
    });
kS.displayName = JC;
var t2 = 'DismissableLayerBranch',
    n2 = E.forwardRef((i, n) => {
        const r = E.useContext(LS),
            a = E.useRef(null),
            s = Un(n, a);
        return (
            E.useEffect(() => {
                const u = a.current;
                if (u)
                    return (
                        r.branches.add(u),
                        () => {
                            r.branches.delete(u);
                        }
                    );
            }, [r.branches]),
            V.jsx(Sn.div, { ...i, ref: s })
        );
    });
n2.displayName = t2;
function i2(i, n = globalThis?.document) {
    const r = Rl(i),
        a = E.useRef(!1),
        s = E.useRef(() => {});
    return (
        E.useEffect(() => {
            const u = d => {
                    if (d.target && !a.current) {
                        let p = function () {
                            US(WC, r, m, { discrete: !0 });
                        };
                        const m = { originalEvent: d };
                        d.pointerType === 'touch'
                            ? (n.removeEventListener('click', s.current),
                              (s.current = p),
                              n.addEventListener('click', s.current, { once: !0 }))
                            : p();
                    } else n.removeEventListener('click', s.current);
                    a.current = !1;
                },
                f = window.setTimeout(() => {
                    n.addEventListener('pointerdown', u);
                }, 0);
            return () => {
                (window.clearTimeout(f),
                    n.removeEventListener('pointerdown', u),
                    n.removeEventListener('click', s.current));
            };
        }, [n, r]),
        { onPointerDownCapture: () => (a.current = !0) }
    );
}
function l2(i, n = globalThis?.document) {
    const r = Rl(i),
        a = E.useRef(!1);
    return (
        E.useEffect(() => {
            const s = u => {
                u.target && !a.current && US(e2, r, { originalEvent: u }, { discrete: !1 });
            };
            return (n.addEventListener('focusin', s), () => n.removeEventListener('focusin', s));
        }, [n, r]),
        { onFocusCapture: () => (a.current = !0), onBlurCapture: () => (a.current = !1) }
    );
}
function db() {
    const i = new CustomEvent(ap);
    document.dispatchEvent(i);
}
function US(i, n, r, { discrete: a }) {
    const s = r.originalEvent.target,
        u = new CustomEvent(i, { bubbles: !1, cancelable: !0, detail: r });
    (n && s.addEventListener(i, n, { once: !0 }), a ? RS(s, u) : s.dispatchEvent(u));
}
var hm = 0;
function r2() {
    E.useEffect(() => {
        const i = document.querySelectorAll('[data-radix-focus-guard]');
        return (
            document.body.insertAdjacentElement('afterbegin', i[0] ?? hb()),
            document.body.insertAdjacentElement('beforeend', i[1] ?? hb()),
            hm++,
            () => {
                (hm === 1 && document.querySelectorAll('[data-radix-focus-guard]').forEach(n => n.remove()), hm--);
            }
        );
    }, []);
}
function hb() {
    const i = document.createElement('span');
    return (
        i.setAttribute('data-radix-focus-guard', ''),
        (i.tabIndex = 0),
        (i.style.outline = 'none'),
        (i.style.opacity = '0'),
        (i.style.position = 'fixed'),
        (i.style.pointerEvents = 'none'),
        i
    );
}
var mm = 'focusScope.autoFocusOnMount',
    pm = 'focusScope.autoFocusOnUnmount',
    mb = { bubbles: !1, cancelable: !0 },
    a2 = 'FocusScope',
    jS = E.forwardRef((i, n) => {
        const { loop: r = !1, trapped: a = !1, onMountAutoFocus: s, onUnmountAutoFocus: u, ...f } = i,
            [d, p] = E.useState(null),
            m = Rl(s),
            v = Rl(u),
            y = E.useRef(null),
            S = Un(n, b => p(b)),
            g = E.useRef({
                paused: !1,
                pause() {
                    this.paused = !0;
                },
                resume() {
                    this.paused = !1;
                },
            }).current;
        (E.useEffect(() => {
            if (a) {
                let b = function (D) {
                        if (g.paused || !d) return;
                        const k = D.target;
                        d.contains(k) ? (y.current = k) : sr(y.current, { select: !0 });
                    },
                    T = function (D) {
                        if (g.paused || !d) return;
                        const k = D.relatedTarget;
                        k !== null && (d.contains(k) || sr(y.current, { select: !0 }));
                    },
                    O = function (D) {
                        if (document.activeElement === document.body)
                            for (const C of D) C.removedNodes.length > 0 && sr(d);
                    };
                (document.addEventListener('focusin', b), document.addEventListener('focusout', T));
                const L = new MutationObserver(O);
                return (
                    d && L.observe(d, { childList: !0, subtree: !0 }),
                    () => {
                        (document.removeEventListener('focusin', b),
                            document.removeEventListener('focusout', T),
                            L.disconnect());
                    }
                );
            }
        }, [a, d, g.paused]),
            E.useEffect(() => {
                if (d) {
                    gb.add(g);
                    const b = document.activeElement;
                    if (!d.contains(b)) {
                        const O = new CustomEvent(mm, mb);
                        (d.addEventListener(mm, m),
                            d.dispatchEvent(O),
                            O.defaultPrevented ||
                                (o2(d2(BS(d)), { select: !0 }), document.activeElement === b && sr(d)));
                    }
                    return () => {
                        (d.removeEventListener(mm, m),
                            setTimeout(() => {
                                const O = new CustomEvent(pm, mb);
                                (d.addEventListener(pm, v),
                                    d.dispatchEvent(O),
                                    O.defaultPrevented || sr(b ?? document.body, { select: !0 }),
                                    d.removeEventListener(pm, v),
                                    gb.remove(g));
                            }, 0));
                    };
                }
            }, [d, m, v, g]));
        const x = E.useCallback(
            b => {
                if ((!r && !a) || g.paused) return;
                const T = b.key === 'Tab' && !b.altKey && !b.ctrlKey && !b.metaKey,
                    O = document.activeElement;
                if (T && O) {
                    const L = b.currentTarget,
                        [D, k] = s2(L);
                    D && k
                        ? !b.shiftKey && O === k
                            ? (b.preventDefault(), r && sr(D, { select: !0 }))
                            : b.shiftKey && O === D && (b.preventDefault(), r && sr(k, { select: !0 }))
                        : O === L && b.preventDefault();
                }
            },
            [r, a, g.paused],
        );
        return V.jsx(Sn.div, { tabIndex: -1, ...f, ref: S, onKeyDown: x });
    });
jS.displayName = a2;
function o2(i, { select: n = !1 } = {}) {
    const r = document.activeElement;
    for (const a of i) if ((sr(a, { select: n }), document.activeElement !== r)) return;
}
function s2(i) {
    const n = BS(i),
        r = pb(n, i),
        a = pb(n.reverse(), i);
    return [r, a];
}
function BS(i) {
    const n = [],
        r = document.createTreeWalker(i, NodeFilter.SHOW_ELEMENT, {
            acceptNode: a => {
                const s = a.tagName === 'INPUT' && a.type === 'hidden';
                return a.disabled || a.hidden || s
                    ? NodeFilter.FILTER_SKIP
                    : a.tabIndex >= 0
                      ? NodeFilter.FILTER_ACCEPT
                      : NodeFilter.FILTER_SKIP;
            },
        });
    for (; r.nextNode(); ) n.push(r.currentNode);
    return n;
}
function pb(i, n) {
    for (const r of i) if (!u2(r, { upTo: n })) return r;
}
function u2(i, { upTo: n }) {
    if (getComputedStyle(i).visibility === 'hidden') return !0;
    for (; i; ) {
        if (n !== void 0 && i === n) return !1;
        if (getComputedStyle(i).display === 'none') return !0;
        i = i.parentElement;
    }
    return !1;
}
function c2(i) {
    return i instanceof HTMLInputElement && 'select' in i;
}
function sr(i, { select: n = !1 } = {}) {
    if (i && i.focus) {
        const r = document.activeElement;
        (i.focus({ preventScroll: !0 }), i !== r && c2(i) && n && i.select());
    }
}
var gb = f2();
function f2() {
    let i = [];
    return {
        add(n) {
            const r = i[0];
            (n !== r && r?.pause(), (i = vb(i, n)), i.unshift(n));
        },
        remove(n) {
            ((i = vb(i, n)), i[0]?.resume());
        },
    };
}
function vb(i, n) {
    const r = [...i],
        a = r.indexOf(n);
    return (a !== -1 && r.splice(a, 1), r);
}
function d2(i) {
    return i.filter(n => n.tagName !== 'A');
}
var h2 = Cb[' useId '.trim().toString()] || (() => {}),
    m2 = 0;
function op(i) {
    const [n, r] = E.useState(h2());
    return (
        Sr(() => {
            r(a => a ?? String(m2++));
        }, [i]),
        n ? `radix-${n}` : ''
    );
}
var p2 = typeof document < 'u',
    g2 = function () {},
    kc = p2 ? E.useLayoutEffect : g2;
function nf(i, n) {
    if (i === n) return !0;
    if (typeof i != typeof n) return !1;
    if (typeof i == 'function' && i.toString() === n.toString()) return !0;
    let r, a, s;
    if (i && n && typeof i == 'object') {
        if (Array.isArray(i)) {
            if (((r = i.length), r !== n.length)) return !1;
            for (a = r; a-- !== 0; ) if (!nf(i[a], n[a])) return !1;
            return !0;
        }
        if (((s = Object.keys(i)), (r = s.length), r !== Object.keys(n).length)) return !1;
        for (a = r; a-- !== 0; ) if (!{}.hasOwnProperty.call(n, s[a])) return !1;
        for (a = r; a-- !== 0; ) {
            const u = s[a];
            if (!(u === '_owner' && i.$$typeof) && !nf(i[u], n[u])) return !1;
        }
        return !0;
    }
    return i !== i && n !== n;
}
function HS(i) {
    return typeof window > 'u' ? 1 : (i.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function yb(i, n) {
    const r = HS(i);
    return Math.round(n * r) / r;
}
function gm(i) {
    const n = E.useRef(i);
    return (
        kc(() => {
            n.current = i;
        }),
        n
    );
}
function v2(i) {
    i === void 0 && (i = {});
    const {
            placement: n = 'bottom',
            strategy: r = 'absolute',
            middleware: a = [],
            platform: s,
            elements: { reference: u, floating: f } = {},
            transform: d = !0,
            whileElementsMounted: p,
            open: m,
        } = i,
        [v, y] = E.useState({ x: 0, y: 0, strategy: r, placement: n, middlewareData: {}, isPositioned: !1 }),
        [S, g] = E.useState(a);
    nf(S, a) || g(a);
    const [x, b] = E.useState(null),
        [T, O] = E.useState(null),
        L = E.useCallback(R => {
            R !== X.current && ((X.current = R), b(R));
        }, []),
        D = E.useCallback(R => {
            R !== z.current && ((z.current = R), O(R));
        }, []),
        k = u || x,
        C = f || T,
        X = E.useRef(null),
        z = E.useRef(null),
        U = E.useRef(v),
        P = p != null,
        se = gm(p),
        W = gm(s),
        de = gm(m),
        ue = E.useCallback(() => {
            if (!X.current || !z.current) return;
            const R = { placement: n, strategy: r, middleware: S };
            (W.current && (R.platform = W.current),
                Zm(X.current, z.current, R).then($ => {
                    const fe = { ...$, isPositioned: de.current !== !1 };
                    ne.current &&
                        !nf(U.current, fe) &&
                        ((U.current = fe),
                        Pp.flushSync(() => {
                            y(fe);
                        }));
                }));
        }, [S, n, r, W, de]);
    kc(() => {
        m === !1 && U.current.isPositioned && ((U.current.isPositioned = !1), y(R => ({ ...R, isPositioned: !1 })));
    }, [m]);
    const ne = E.useRef(!1);
    (kc(
        () => (
            (ne.current = !0),
            () => {
                ne.current = !1;
            }
        ),
        [],
    ),
        kc(() => {
            if ((k && (X.current = k), C && (z.current = C), k && C)) {
                if (se.current) return se.current(k, C, ue);
                ue();
            }
        }, [k, C, ue, se, P]));
    const I = E.useMemo(() => ({ reference: X, floating: z, setReference: L, setFloating: D }), [L, D]),
        A = E.useMemo(() => ({ reference: k, floating: C }), [k, C]),
        B = E.useMemo(() => {
            const R = { position: r, left: 0, top: 0 };
            if (!A.floating) return R;
            const $ = yb(A.floating, v.x),
                fe = yb(A.floating, v.y);
            return d
                ? {
                      ...R,
                      transform: 'translate(' + $ + 'px, ' + fe + 'px)',
                      ...(HS(A.floating) >= 1.5 && { willChange: 'transform' }),
                  }
                : { position: r, left: $, top: fe };
        }, [r, d, A.floating, v.x, v.y]);
    return E.useMemo(() => ({ ...v, update: ue, refs: I, elements: A, floatingStyles: B }), [v, ue, I, A, B]);
}
const y2 = i => {
        function n(r) {
            return {}.hasOwnProperty.call(r, 'current');
        }
        return {
            name: 'arrow',
            options: i,
            fn(r) {
                const { element: a, padding: s } = typeof i == 'function' ? i(r) : i;
                return a && n(a)
                    ? a.current != null
                        ? Qm({ element: a.current, padding: s }).fn(r)
                        : {}
                    : a
                      ? Qm({ element: a, padding: s }).fn(r)
                      : {};
            },
        };
    },
    _2 = (i, n) => ({ ...nS(i), options: [i, n] }),
    b2 = (i, n) => ({ ...iS(i), options: [i, n] }),
    S2 = (i, n) => ({ ...nO(i), options: [i, n] }),
    x2 = (i, n) => ({ ...lS(i), options: [i, n] }),
    w2 = (i, n) => ({ ...eO(i), options: [i, n] }),
    E2 = (i, n) => ({ ...tO(i), options: [i, n] }),
    T2 = (i, n) => ({ ...y2(i), options: [i, n] });
var A2 = 'Arrow',
    YS = E.forwardRef((i, n) => {
        const { children: r, width: a = 10, height: s = 5, ...u } = i;
        return V.jsx(Sn.svg, {
            ...u,
            ref: n,
            width: a,
            height: s,
            viewBox: '0 0 30 10',
            preserveAspectRatio: 'none',
            children: i.asChild ? r : V.jsx('polygon', { points: '0,0 30,0 15,10' }),
        });
    });
YS.displayName = A2;
var M2 = YS;
function O2(i) {
    const [n, r] = E.useState(void 0);
    return (
        Sr(() => {
            if (i) {
                r({ width: i.offsetWidth, height: i.offsetHeight });
                const a = new ResizeObserver(s => {
                    if (!Array.isArray(s) || !s.length) return;
                    const u = s[0];
                    let f, d;
                    if ('borderBoxSize' in u) {
                        const p = u.borderBoxSize,
                            m = Array.isArray(p) ? p[0] : p;
                        ((f = m.inlineSize), (d = m.blockSize));
                    } else ((f = i.offsetWidth), (d = i.offsetHeight));
                    r({ width: f, height: d });
                });
                return (a.observe(i, { box: 'border-box' }), () => a.unobserve(i));
            } else r(void 0);
        }, [i]),
        n
    );
}
var Qp = 'Popper',
    [GS, XS] = $s(Qp),
    [C2, qS] = GS(Qp),
    VS = i => {
        const { __scopePopper: n, children: r } = i,
            [a, s] = E.useState(null);
        return V.jsx(C2, { scope: n, anchor: a, onAnchorChange: s, children: r });
    };
VS.displayName = Qp;
var PS = 'PopperAnchor',
    QS = E.forwardRef((i, n) => {
        const { __scopePopper: r, virtualRef: a, ...s } = i,
            u = qS(PS, r),
            f = E.useRef(null),
            d = Un(n, f),
            p = E.useRef(null);
        return (
            E.useEffect(() => {
                const m = p.current;
                ((p.current = a?.current || f.current), m !== p.current && u.onAnchorChange(p.current));
            }),
            a ? null : V.jsx(Sn.div, { ...s, ref: d })
        );
    });
QS.displayName = PS;
var Zp = 'PopperContent',
    [D2, R2] = GS(Zp),
    ZS = E.forwardRef((i, n) => {
        const {
                __scopePopper: r,
                side: a = 'bottom',
                sideOffset: s = 0,
                align: u = 'center',
                alignOffset: f = 0,
                arrowPadding: d = 0,
                avoidCollisions: p = !0,
                collisionBoundary: m = [],
                collisionPadding: v = 0,
                sticky: y = 'partial',
                hideWhenDetached: S = !1,
                updatePositionStrategy: g = 'optimized',
                onPlaced: x,
                ...b
            } = i,
            T = qS(Zp, r),
            [O, L] = E.useState(null),
            D = Un(n, he => L(he)),
            [k, C] = E.useState(null),
            X = O2(k),
            z = X?.width ?? 0,
            U = X?.height ?? 0,
            P = a + (u !== 'center' ? '-' + u : ''),
            se = typeof v == 'number' ? v : { top: 0, right: 0, bottom: 0, left: 0, ...v },
            W = Array.isArray(m) ? m : [m],
            de = W.length > 0,
            ue = { padding: se, boundary: W.filter(N2), altBoundary: de },
            {
                refs: ne,
                floatingStyles: I,
                placement: A,
                isPositioned: B,
                middlewareData: R,
            } = v2({
                strategy: 'fixed',
                placement: P,
                whileElementsMounted: (...he) => tS(...he, { animationFrame: g === 'always' }),
                elements: { reference: T.anchor },
                middleware: [
                    _2({ mainAxis: s + U, alignmentAxis: f }),
                    p && b2({ mainAxis: !0, crossAxis: !1, limiter: y === 'partial' ? S2() : void 0, ...ue }),
                    p && x2({ ...ue }),
                    w2({
                        ...ue,
                        apply: ({ elements: he, rects: Ae, availableWidth: De, availableHeight: Me }) => {
                            const { width: Pe, height: Ge } = Ae.reference,
                                gt = he.floating.style;
                            (gt.setProperty('--radix-popper-available-width', `${De}px`),
                                gt.setProperty('--radix-popper-available-height', `${Me}px`),
                                gt.setProperty('--radix-popper-anchor-width', `${Pe}px`),
                                gt.setProperty('--radix-popper-anchor-height', `${Ge}px`));
                        },
                    }),
                    k && T2({ element: k, padding: d }),
                    L2({ arrowWidth: z, arrowHeight: U }),
                    S && E2({ strategy: 'referenceHidden', ...ue }),
                ],
            }),
            [$, fe] = FS(A),
            M = Rl(x);
        Sr(() => {
            B && M?.();
        }, [B, M]);
        const H = R.arrow?.x,
            F = R.arrow?.y,
            ee = R.arrow?.centerOffset !== 0,
            [ge, ye] = E.useState();
        return (
            Sr(() => {
                O && ye(window.getComputedStyle(O).zIndex);
            }, [O]),
            V.jsx('div', {
                ref: ne.setFloating,
                'data-radix-popper-content-wrapper': '',
                style: {
                    ...I,
                    transform: B ? I.transform : 'translate(0, -200%)',
                    minWidth: 'max-content',
                    zIndex: ge,
                    '--radix-popper-transform-origin': [R.transformOrigin?.x, R.transformOrigin?.y].join(' '),
                    ...(R.hide?.referenceHidden && { visibility: 'hidden', pointerEvents: 'none' }),
                },
                dir: i.dir,
                children: V.jsx(D2, {
                    scope: r,
                    placedSide: $,
                    onArrowChange: C,
                    arrowX: H,
                    arrowY: F,
                    shouldHideArrow: ee,
                    children: V.jsx(Sn.div, {
                        'data-side': $,
                        'data-align': fe,
                        ...b,
                        ref: D,
                        style: { ...b.style, animation: B ? void 0 : 'none' },
                    }),
                }),
            })
        );
    });
ZS.displayName = Zp;
var KS = 'PopperArrow',
    z2 = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' },
    $S = E.forwardRef(function (n, r) {
        const { __scopePopper: a, ...s } = n,
            u = R2(KS, a),
            f = z2[u.placedSide];
        return V.jsx('span', {
            ref: u.onArrowChange,
            style: {
                position: 'absolute',
                left: u.arrowX,
                top: u.arrowY,
                [f]: 0,
                transformOrigin: { top: '', right: '0 0', bottom: 'center 0', left: '100% 0' }[u.placedSide],
                transform: {
                    top: 'translateY(100%)',
                    right: 'translateY(50%) rotate(90deg) translateX(-50%)',
                    bottom: 'rotate(180deg)',
                    left: 'translateY(50%) rotate(-90deg) translateX(50%)',
                }[u.placedSide],
                visibility: u.shouldHideArrow ? 'hidden' : void 0,
            },
            children: V.jsx(M2, { ...s, ref: r, style: { ...s.style, display: 'block' } }),
        });
    });
$S.displayName = KS;
function N2(i) {
    return i !== null;
}
var L2 = i => ({
    name: 'transformOrigin',
    options: i,
    fn(n) {
        const { placement: r, rects: a, middlewareData: s } = n,
            f = s.arrow?.centerOffset !== 0,
            d = f ? 0 : i.arrowWidth,
            p = f ? 0 : i.arrowHeight,
            [m, v] = FS(r),
            y = { start: '0%', center: '50%', end: '100%' }[v],
            S = (s.arrow?.x ?? 0) + d / 2,
            g = (s.arrow?.y ?? 0) + p / 2;
        let x = '',
            b = '';
        return (
            m === 'bottom'
                ? ((x = f ? y : `${S}px`), (b = `${-p}px`))
                : m === 'top'
                  ? ((x = f ? y : `${S}px`), (b = `${a.floating.height + p}px`))
                  : m === 'right'
                    ? ((x = `${-p}px`), (b = f ? y : `${g}px`))
                    : m === 'left' && ((x = `${a.floating.width + p}px`), (b = f ? y : `${g}px`)),
            { data: { x, y: b } }
        );
    },
});
function FS(i) {
    const [n, r = 'center'] = i.split('-');
    return [n, r];
}
var k2 = VS,
    U2 = QS,
    j2 = ZS,
    B2 = $S,
    H2 = 'Portal',
    IS = E.forwardRef((i, n) => {
        const { container: r, ...a } = i,
            [s, u] = E.useState(!1);
        Sr(() => u(!0), []);
        const f = r || (s && globalThis?.document?.body);
        return f ? qC.createPortal(V.jsx(Sn.div, { ...a, ref: n }), f) : null;
    });
IS.displayName = H2;
function Y2(i, n) {
    return E.useReducer((r, a) => n[r][a] ?? r, i);
}
var Fs = i => {
    const { present: n, children: r } = i,
        a = G2(n),
        s = typeof r == 'function' ? r({ present: a.isPresent }) : E.Children.only(r),
        u = Un(a.ref, X2(s));
    return typeof r == 'function' || a.isPresent ? E.cloneElement(s, { ref: u }) : null;
};
Fs.displayName = 'Presence';
function G2(i) {
    const [n, r] = E.useState(),
        a = E.useRef(null),
        s = E.useRef(i),
        u = E.useRef('none'),
        f = i ? 'mounted' : 'unmounted',
        [d, p] = Y2(f, {
            mounted: { UNMOUNT: 'unmounted', ANIMATION_OUT: 'unmountSuspended' },
            unmountSuspended: { MOUNT: 'mounted', ANIMATION_END: 'unmounted' },
            unmounted: { MOUNT: 'mounted' },
        });
    return (
        E.useEffect(() => {
            const m = Sc(a.current);
            u.current = d === 'mounted' ? m : 'none';
        }, [d]),
        Sr(() => {
            const m = a.current,
                v = s.current;
            if (v !== i) {
                const S = u.current,
                    g = Sc(m);
                (i
                    ? p('MOUNT')
                    : g === 'none' || m?.display === 'none'
                      ? p('UNMOUNT')
                      : p(v && S !== g ? 'ANIMATION_OUT' : 'UNMOUNT'),
                    (s.current = i));
            }
        }, [i, p]),
        Sr(() => {
            if (n) {
                let m;
                const v = n.ownerDocument.defaultView ?? window,
                    y = g => {
                        const b = Sc(a.current).includes(CSS.escape(g.animationName));
                        if (g.target === n && b && (p('ANIMATION_END'), !s.current)) {
                            const T = n.style.animationFillMode;
                            ((n.style.animationFillMode = 'forwards'),
                                (m = v.setTimeout(() => {
                                    n.style.animationFillMode === 'forwards' && (n.style.animationFillMode = T);
                                })));
                        }
                    },
                    S = g => {
                        g.target === n && (u.current = Sc(a.current));
                    };
                return (
                    n.addEventListener('animationstart', S),
                    n.addEventListener('animationcancel', y),
                    n.addEventListener('animationend', y),
                    () => {
                        (v.clearTimeout(m),
                            n.removeEventListener('animationstart', S),
                            n.removeEventListener('animationcancel', y),
                            n.removeEventListener('animationend', y));
                    }
                );
            } else p('ANIMATION_END');
        }, [n, p]),
        {
            isPresent: ['mounted', 'unmountSuspended'].includes(d),
            ref: E.useCallback(m => {
                ((a.current = m ? getComputedStyle(m) : null), r(m));
            }, []),
        }
    );
}
function Sc(i) {
    return i?.animationName || 'none';
}
function X2(i) {
    let n = Object.getOwnPropertyDescriptor(i.props, 'ref')?.get,
        r = n && 'isReactWarning' in n && n.isReactWarning;
    return r
        ? i.ref
        : ((n = Object.getOwnPropertyDescriptor(i, 'ref')?.get),
          (r = n && 'isReactWarning' in n && n.isReactWarning),
          r ? i.props.ref : i.props.ref || i.ref);
}
var vm = 'rovingFocusGroup.onEntryFocus',
    q2 = { bubbles: !1, cancelable: !0 },
    Is = 'RovingFocusGroup',
    [sp, JS, V2] = zS(Is),
    [P2, WS] = $s(Is, [V2]),
    [Q2, Z2] = P2(Is),
    ex = E.forwardRef((i, n) =>
        V.jsx(sp.Provider, {
            scope: i.__scopeRovingFocusGroup,
            children: V.jsx(sp.Slot, { scope: i.__scopeRovingFocusGroup, children: V.jsx(K2, { ...i, ref: n }) }),
        }),
    );
ex.displayName = Is;
var K2 = E.forwardRef((i, n) => {
        const {
                __scopeRovingFocusGroup: r,
                orientation: a,
                loop: s = !1,
                dir: u,
                currentTabStopId: f,
                defaultCurrentTabStopId: d,
                onCurrentTabStopIdChange: p,
                onEntryFocus: m,
                preventScrollOnEntryFocus: v = !1,
                ...y
            } = i,
            S = E.useRef(null),
            g = Un(n, S),
            x = NS(u),
            [b, T] = DS({ prop: f, defaultProp: d ?? null, onChange: p, caller: Is }),
            [O, L] = E.useState(!1),
            D = Rl(m),
            k = JS(r),
            C = E.useRef(!1),
            [X, z] = E.useState(0);
        return (
            E.useEffect(() => {
                const U = S.current;
                if (U) return (U.addEventListener(vm, D), () => U.removeEventListener(vm, D));
            }, [D]),
            V.jsx(Q2, {
                scope: r,
                orientation: a,
                dir: x,
                loop: s,
                currentTabStopId: b,
                onItemFocus: E.useCallback(U => T(U), [T]),
                onItemShiftTab: E.useCallback(() => L(!0), []),
                onFocusableItemAdd: E.useCallback(() => z(U => U + 1), []),
                onFocusableItemRemove: E.useCallback(() => z(U => U - 1), []),
                children: V.jsx(Sn.div, {
                    tabIndex: O || X === 0 ? -1 : 0,
                    'data-orientation': a,
                    ...y,
                    ref: g,
                    style: { outline: 'none', ...i.style },
                    onMouseDown: Je(i.onMouseDown, () => {
                        C.current = !0;
                    }),
                    onFocus: Je(i.onFocus, U => {
                        const P = !C.current;
                        if (U.target === U.currentTarget && P && !O) {
                            const se = new CustomEvent(vm, q2);
                            if ((U.currentTarget.dispatchEvent(se), !se.defaultPrevented)) {
                                const W = k().filter(A => A.focusable),
                                    de = W.find(A => A.active),
                                    ue = W.find(A => A.id === b),
                                    I = [de, ue, ...W].filter(Boolean).map(A => A.ref.current);
                                ix(I, v);
                            }
                        }
                        C.current = !1;
                    }),
                    onBlur: Je(i.onBlur, () => L(!1)),
                }),
            })
        );
    }),
    tx = 'RovingFocusGroupItem',
    nx = E.forwardRef((i, n) => {
        const { __scopeRovingFocusGroup: r, focusable: a = !0, active: s = !1, tabStopId: u, children: f, ...d } = i,
            p = op(),
            m = u || p,
            v = Z2(tx, r),
            y = v.currentTabStopId === m,
            S = JS(r),
            { onFocusableItemAdd: g, onFocusableItemRemove: x, currentTabStopId: b } = v;
        return (
            E.useEffect(() => {
                if (a) return (g(), () => x());
            }, [a, g, x]),
            V.jsx(sp.ItemSlot, {
                scope: r,
                id: m,
                focusable: a,
                active: s,
                children: V.jsx(Sn.span, {
                    tabIndex: y ? 0 : -1,
                    'data-orientation': v.orientation,
                    ...d,
                    ref: n,
                    onMouseDown: Je(i.onMouseDown, T => {
                        a ? v.onItemFocus(m) : T.preventDefault();
                    }),
                    onFocus: Je(i.onFocus, () => v.onItemFocus(m)),
                    onKeyDown: Je(i.onKeyDown, T => {
                        if (T.key === 'Tab' && T.shiftKey) {
                            v.onItemShiftTab();
                            return;
                        }
                        if (T.target !== T.currentTarget) return;
                        const O = I2(T, v.orientation, v.dir);
                        if (O !== void 0) {
                            if (T.metaKey || T.ctrlKey || T.altKey || T.shiftKey) return;
                            T.preventDefault();
                            let D = S()
                                .filter(k => k.focusable)
                                .map(k => k.ref.current);
                            if (O === 'last') D.reverse();
                            else if (O === 'prev' || O === 'next') {
                                O === 'prev' && D.reverse();
                                const k = D.indexOf(T.currentTarget);
                                D = v.loop ? J2(D, k + 1) : D.slice(k + 1);
                            }
                            setTimeout(() => ix(D));
                        }
                    }),
                    children: typeof f == 'function' ? f({ isCurrentTabStop: y, hasTabStop: b != null }) : f,
                }),
            })
        );
    });
nx.displayName = tx;
var $2 = {
    ArrowLeft: 'prev',
    ArrowUp: 'prev',
    ArrowRight: 'next',
    ArrowDown: 'next',
    PageUp: 'first',
    Home: 'first',
    PageDown: 'last',
    End: 'last',
};
function F2(i, n) {
    return n !== 'rtl' ? i : i === 'ArrowLeft' ? 'ArrowRight' : i === 'ArrowRight' ? 'ArrowLeft' : i;
}
function I2(i, n, r) {
    const a = F2(i.key, r);
    if (
        !(n === 'vertical' && ['ArrowLeft', 'ArrowRight'].includes(a)) &&
        !(n === 'horizontal' && ['ArrowUp', 'ArrowDown'].includes(a))
    )
        return $2[a];
}
function ix(i, n = !1) {
    const r = document.activeElement;
    for (const a of i) if (a === r || (a.focus({ preventScroll: n }), document.activeElement !== r)) return;
}
function J2(i, n) {
    return i.map((r, a) => i[(n + a) % i.length]);
}
var W2 = ex,
    eD = nx,
    tD = function (i) {
        if (typeof document > 'u') return null;
        var n = Array.isArray(i) ? i[0] : i;
        return n.ownerDocument.body;
    },
    Qa = new WeakMap(),
    xc = new WeakMap(),
    wc = {},
    ym = 0,
    lx = function (i) {
        return i && (i.host || lx(i.parentNode));
    },
    nD = function (i, n) {
        return n
            .map(function (r) {
                if (i.contains(r)) return r;
                var a = lx(r);
                return a && i.contains(a)
                    ? a
                    : (console.error('aria-hidden', r, 'in not contained inside', i, '. Doing nothing'), null);
            })
            .filter(function (r) {
                return !!r;
            });
    },
    iD = function (i, n, r, a) {
        var s = nD(n, Array.isArray(i) ? i : [i]);
        wc[r] || (wc[r] = new WeakMap());
        var u = wc[r],
            f = [],
            d = new Set(),
            p = new Set(s),
            m = function (y) {
                !y || d.has(y) || (d.add(y), m(y.parentNode));
            };
        s.forEach(m);
        var v = function (y) {
            !y ||
                p.has(y) ||
                Array.prototype.forEach.call(y.children, function (S) {
                    if (d.has(S)) v(S);
                    else
                        try {
                            var g = S.getAttribute(a),
                                x = g !== null && g !== 'false',
                                b = (Qa.get(S) || 0) + 1,
                                T = (u.get(S) || 0) + 1;
                            (Qa.set(S, b),
                                u.set(S, T),
                                f.push(S),
                                b === 1 && x && xc.set(S, !0),
                                T === 1 && S.setAttribute(r, 'true'),
                                x || S.setAttribute(a, 'true'));
                        } catch (O) {
                            console.error('aria-hidden: cannot operate on ', S, O);
                        }
                });
        };
        return (
            v(n),
            d.clear(),
            ym++,
            function () {
                (f.forEach(function (y) {
                    var S = Qa.get(y) - 1,
                        g = u.get(y) - 1;
                    (Qa.set(y, S),
                        u.set(y, g),
                        S || (xc.has(y) || y.removeAttribute(a), xc.delete(y)),
                        g || y.removeAttribute(r));
                }),
                    ym--,
                    ym || ((Qa = new WeakMap()), (Qa = new WeakMap()), (xc = new WeakMap()), (wc = {})));
            }
        );
    },
    lD = function (i, n, r) {
        r === void 0 && (r = 'data-aria-hidden');
        var a = Array.from(Array.isArray(i) ? i : [i]),
            s = tD(i);
        return s
            ? (a.push.apply(a, Array.from(s.querySelectorAll('[aria-live], script'))), iD(a, s, r, 'aria-hidden'))
            : function () {
                  return null;
              };
    },
    Gi = function () {
        return (
            (Gi =
                Object.assign ||
                function (n) {
                    for (var r, a = 1, s = arguments.length; a < s; a++) {
                        r = arguments[a];
                        for (var u in r) Object.prototype.hasOwnProperty.call(r, u) && (n[u] = r[u]);
                    }
                    return n;
                }),
            Gi.apply(this, arguments)
        );
    };
function rx(i, n) {
    var r = {};
    for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && n.indexOf(a) < 0 && (r[a] = i[a]);
    if (i != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var s = 0, a = Object.getOwnPropertySymbols(i); s < a.length; s++)
            n.indexOf(a[s]) < 0 && Object.prototype.propertyIsEnumerable.call(i, a[s]) && (r[a[s]] = i[a[s]]);
    return r;
}
function rD(i, n, r) {
    if (r || arguments.length === 2)
        for (var a = 0, s = n.length, u; a < s; a++)
            (u || !(a in n)) && (u || (u = Array.prototype.slice.call(n, 0, a)), (u[a] = n[a]));
    return i.concat(u || Array.prototype.slice.call(n));
}
var Uc = 'right-scroll-bar-position',
    jc = 'width-before-scroll-bar',
    aD = 'with-scroll-bars-hidden',
    oD = '--removed-body-scroll-bar-size';
function _m(i, n) {
    return (typeof i == 'function' ? i(n) : i && (i.current = n), i);
}
function sD(i, n) {
    var r = E.useState(function () {
        return {
            value: i,
            callback: n,
            facade: {
                get current() {
                    return r.value;
                },
                set current(a) {
                    var s = r.value;
                    s !== a && ((r.value = a), r.callback(a, s));
                },
            },
        };
    })[0];
    return ((r.callback = n), r.facade);
}
var uD = typeof window < 'u' ? E.useLayoutEffect : E.useEffect,
    _b = new WeakMap();
function cD(i, n) {
    var r = sD(null, function (a) {
        return i.forEach(function (s) {
            return _m(s, a);
        });
    });
    return (
        uD(
            function () {
                var a = _b.get(r);
                if (a) {
                    var s = new Set(a),
                        u = new Set(i),
                        f = r.current;
                    (s.forEach(function (d) {
                        u.has(d) || _m(d, null);
                    }),
                        u.forEach(function (d) {
                            s.has(d) || _m(d, f);
                        }));
                }
                _b.set(r, i);
            },
            [i],
        ),
        r
    );
}
function fD(i) {
    return i;
}
function dD(i, n) {
    n === void 0 && (n = fD);
    var r = [],
        a = !1,
        s = {
            read: function () {
                if (a)
                    throw new Error(
                        'Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.',
                    );
                return r.length ? r[r.length - 1] : i;
            },
            useMedium: function (u) {
                var f = n(u, a);
                return (
                    r.push(f),
                    function () {
                        r = r.filter(function (d) {
                            return d !== f;
                        });
                    }
                );
            },
            assignSyncMedium: function (u) {
                for (a = !0; r.length; ) {
                    var f = r;
                    ((r = []), f.forEach(u));
                }
                r = {
                    push: function (d) {
                        return u(d);
                    },
                    filter: function () {
                        return r;
                    },
                };
            },
            assignMedium: function (u) {
                a = !0;
                var f = [];
                if (r.length) {
                    var d = r;
                    ((r = []), d.forEach(u), (f = r));
                }
                var p = function () {
                        var v = f;
                        ((f = []), v.forEach(u));
                    },
                    m = function () {
                        return Promise.resolve().then(p);
                    };
                (m(),
                    (r = {
                        push: function (v) {
                            (f.push(v), m());
                        },
                        filter: function (v) {
                            return ((f = f.filter(v)), r);
                        },
                    }));
            },
        };
    return s;
}
function hD(i) {
    i === void 0 && (i = {});
    var n = dD(null);
    return ((n.options = Gi({ async: !0, ssr: !1 }, i)), n);
}
var ax = function (i) {
    var n = i.sideCar,
        r = rx(i, ['sideCar']);
    if (!n) throw new Error('Sidecar: please provide `sideCar` property to import the right car');
    var a = n.read();
    if (!a) throw new Error('Sidecar medium not found');
    return E.createElement(a, Gi({}, r));
};
ax.isSideCarExport = !0;
function mD(i, n) {
    return (i.useMedium(n), ax);
}
var ox = hD(),
    bm = function () {},
    Tf = E.forwardRef(function (i, n) {
        var r = E.useRef(null),
            a = E.useState({ onScrollCapture: bm, onWheelCapture: bm, onTouchMoveCapture: bm }),
            s = a[0],
            u = a[1],
            f = i.forwardProps,
            d = i.children,
            p = i.className,
            m = i.removeScrollBar,
            v = i.enabled,
            y = i.shards,
            S = i.sideCar,
            g = i.noRelative,
            x = i.noIsolation,
            b = i.inert,
            T = i.allowPinchZoom,
            O = i.as,
            L = O === void 0 ? 'div' : O,
            D = i.gapMode,
            k = rx(i, [
                'forwardProps',
                'children',
                'className',
                'removeScrollBar',
                'enabled',
                'shards',
                'sideCar',
                'noRelative',
                'noIsolation',
                'inert',
                'allowPinchZoom',
                'as',
                'gapMode',
            ]),
            C = S,
            X = cD([r, n]),
            z = Gi(Gi({}, k), s);
        return E.createElement(
            E.Fragment,
            null,
            v &&
                E.createElement(C, {
                    sideCar: ox,
                    removeScrollBar: m,
                    shards: y,
                    noRelative: g,
                    noIsolation: x,
                    inert: b,
                    setCallbacks: u,
                    allowPinchZoom: !!T,
                    lockRef: r,
                    gapMode: D,
                }),
            f
                ? E.cloneElement(E.Children.only(d), Gi(Gi({}, z), { ref: X }))
                : E.createElement(L, Gi({}, z, { className: p, ref: X }), d),
        );
    });
Tf.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Tf.classNames = { fullWidth: jc, zeroRight: Uc };
var pD = function () {
    if (typeof __webpack_nonce__ < 'u') return __webpack_nonce__;
};
function gD() {
    if (!document) return null;
    var i = document.createElement('style');
    i.type = 'text/css';
    var n = pD();
    return (n && i.setAttribute('nonce', n), i);
}
function vD(i, n) {
    i.styleSheet ? (i.styleSheet.cssText = n) : i.appendChild(document.createTextNode(n));
}
function yD(i) {
    var n = document.head || document.getElementsByTagName('head')[0];
    n.appendChild(i);
}
var _D = function () {
        var i = 0,
            n = null;
        return {
            add: function (r) {
                (i == 0 && (n = gD()) && (vD(n, r), yD(n)), i++);
            },
            remove: function () {
                (i--, !i && n && (n.parentNode && n.parentNode.removeChild(n), (n = null)));
            },
        };
    },
    bD = function () {
        var i = _D();
        return function (n, r) {
            E.useEffect(
                function () {
                    return (
                        i.add(n),
                        function () {
                            i.remove();
                        }
                    );
                },
                [n && r],
            );
        };
    },
    sx = function () {
        var i = bD(),
            n = function (r) {
                var a = r.styles,
                    s = r.dynamic;
                return (i(a, s), null);
            };
        return n;
    },
    SD = { left: 0, top: 0, right: 0, gap: 0 },
    Sm = function (i) {
        return parseInt(i || '', 10) || 0;
    },
    xD = function (i) {
        var n = window.getComputedStyle(document.body),
            r = n[i === 'padding' ? 'paddingLeft' : 'marginLeft'],
            a = n[i === 'padding' ? 'paddingTop' : 'marginTop'],
            s = n[i === 'padding' ? 'paddingRight' : 'marginRight'];
        return [Sm(r), Sm(a), Sm(s)];
    },
    wD = function (i) {
        if ((i === void 0 && (i = 'margin'), typeof window > 'u')) return SD;
        var n = xD(i),
            r = document.documentElement.clientWidth,
            a = window.innerWidth;
        return { left: n[0], top: n[1], right: n[2], gap: Math.max(0, a - r + n[2] - n[0]) };
    },
    ED = sx(),
    ro = 'data-scroll-locked',
    TD = function (i, n, r, a) {
        var s = i.left,
            u = i.top,
            f = i.right,
            d = i.gap;
        return (
            r === void 0 && (r = 'margin'),
            `
  .`
                .concat(
                    aD,
                    ` {
   overflow: hidden `,
                )
                .concat(
                    a,
                    `;
   padding-right: `,
                )
                .concat(d, 'px ')
                .concat(
                    a,
                    `;
  }
  body[`,
                )
                .concat(
                    ro,
                    `] {
    overflow: hidden `,
                )
                .concat(
                    a,
                    `;
    overscroll-behavior: contain;
    `,
                )
                .concat(
                    [
                        n && 'position: relative '.concat(a, ';'),
                        r === 'margin' &&
                            `
    padding-left: `
                                .concat(
                                    s,
                                    `px;
    padding-top: `,
                                )
                                .concat(
                                    u,
                                    `px;
    padding-right: `,
                                )
                                .concat(
                                    f,
                                    `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                                )
                                .concat(d, 'px ')
                                .concat(
                                    a,
                                    `;
    `,
                                ),
                        r === 'padding' && 'padding-right: '.concat(d, 'px ').concat(a, ';'),
                    ]
                        .filter(Boolean)
                        .join(''),
                    `
  }
  
  .`,
                )
                .concat(
                    Uc,
                    ` {
    right: `,
                )
                .concat(d, 'px ')
                .concat(
                    a,
                    `;
  }
  
  .`,
                )
                .concat(
                    jc,
                    ` {
    margin-right: `,
                )
                .concat(d, 'px ')
                .concat(
                    a,
                    `;
  }
  
  .`,
                )
                .concat(Uc, ' .')
                .concat(
                    Uc,
                    ` {
    right: 0 `,
                )
                .concat(
                    a,
                    `;
  }
  
  .`,
                )
                .concat(jc, ' .')
                .concat(
                    jc,
                    ` {
    margin-right: 0 `,
                )
                .concat(
                    a,
                    `;
  }
  
  body[`,
                )
                .concat(
                    ro,
                    `] {
    `,
                )
                .concat(oD, ': ')
                .concat(
                    d,
                    `px;
  }
`,
                )
        );
    },
    bb = function () {
        var i = parseInt(document.body.getAttribute(ro) || '0', 10);
        return isFinite(i) ? i : 0;
    },
    AD = function () {
        E.useEffect(function () {
            return (
                document.body.setAttribute(ro, (bb() + 1).toString()),
                function () {
                    var i = bb() - 1;
                    i <= 0 ? document.body.removeAttribute(ro) : document.body.setAttribute(ro, i.toString());
                }
            );
        }, []);
    },
    MD = function (i) {
        var n = i.noRelative,
            r = i.noImportant,
            a = i.gapMode,
            s = a === void 0 ? 'margin' : a;
        AD();
        var u = E.useMemo(
            function () {
                return wD(s);
            },
            [s],
        );
        return E.createElement(ED, { styles: TD(u, !n, s, r ? '' : '!important') });
    },
    up = !1;
if (typeof window < 'u')
    try {
        var Ec = Object.defineProperty({}, 'passive', {
            get: function () {
                return ((up = !0), !0);
            },
        });
        (window.addEventListener('test', Ec, Ec), window.removeEventListener('test', Ec, Ec));
    } catch {
        up = !1;
    }
var Za = up ? { passive: !1 } : !1,
    OD = function (i) {
        return i.tagName === 'TEXTAREA';
    },
    ux = function (i, n) {
        if (!(i instanceof Element)) return !1;
        var r = window.getComputedStyle(i);
        return r[n] !== 'hidden' && !(r.overflowY === r.overflowX && !OD(i) && r[n] === 'visible');
    },
    CD = function (i) {
        return ux(i, 'overflowY');
    },
    DD = function (i) {
        return ux(i, 'overflowX');
    },
    Sb = function (i, n) {
        var r = n.ownerDocument,
            a = n;
        do {
            typeof ShadowRoot < 'u' && a instanceof ShadowRoot && (a = a.host);
            var s = cx(i, a);
            if (s) {
                var u = fx(i, a),
                    f = u[1],
                    d = u[2];
                if (f > d) return !0;
            }
            a = a.parentNode;
        } while (a && a !== r.body);
        return !1;
    },
    RD = function (i) {
        var n = i.scrollTop,
            r = i.scrollHeight,
            a = i.clientHeight;
        return [n, r, a];
    },
    zD = function (i) {
        var n = i.scrollLeft,
            r = i.scrollWidth,
            a = i.clientWidth;
        return [n, r, a];
    },
    cx = function (i, n) {
        return i === 'v' ? CD(n) : DD(n);
    },
    fx = function (i, n) {
        return i === 'v' ? RD(n) : zD(n);
    },
    ND = function (i, n) {
        return i === 'h' && n === 'rtl' ? -1 : 1;
    },
    LD = function (i, n, r, a, s) {
        var u = ND(i, window.getComputedStyle(n).direction),
            f = u * a,
            d = r.target,
            p = n.contains(d),
            m = !1,
            v = f > 0,
            y = 0,
            S = 0;
        do {
            if (!d) break;
            var g = fx(i, d),
                x = g[0],
                b = g[1],
                T = g[2],
                O = b - T - u * x;
            (x || O) && cx(i, d) && ((y += O), (S += x));
            var L = d.parentNode;
            d = L && L.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? L.host : L;
        } while ((!p && d !== document.body) || (p && (n.contains(d) || n === d)));
        return (((v && Math.abs(y) < 1) || (!v && Math.abs(S) < 1)) && (m = !0), m);
    },
    Tc = function (i) {
        return 'changedTouches' in i ? [i.changedTouches[0].clientX, i.changedTouches[0].clientY] : [0, 0];
    },
    xb = function (i) {
        return [i.deltaX, i.deltaY];
    },
    wb = function (i) {
        return i && 'current' in i ? i.current : i;
    },
    kD = function (i, n) {
        return i[0] === n[0] && i[1] === n[1];
    },
    UD = function (i) {
        return `
  .block-interactivity-`
            .concat(
                i,
                ` {pointer-events: none;}
  .allow-interactivity-`,
            )
            .concat(
                i,
                ` {pointer-events: all;}
`,
            );
    },
    jD = 0,
    Ka = [];
function BD(i) {
    var n = E.useRef([]),
        r = E.useRef([0, 0]),
        a = E.useRef(),
        s = E.useState(jD++)[0],
        u = E.useState(sx)[0],
        f = E.useRef(i);
    (E.useEffect(
        function () {
            f.current = i;
        },
        [i],
    ),
        E.useEffect(
            function () {
                if (i.inert) {
                    document.body.classList.add('block-interactivity-'.concat(s));
                    var b = rD([i.lockRef.current], (i.shards || []).map(wb), !0).filter(Boolean);
                    return (
                        b.forEach(function (T) {
                            return T.classList.add('allow-interactivity-'.concat(s));
                        }),
                        function () {
                            (document.body.classList.remove('block-interactivity-'.concat(s)),
                                b.forEach(function (T) {
                                    return T.classList.remove('allow-interactivity-'.concat(s));
                                }));
                        }
                    );
                }
            },
            [i.inert, i.lockRef.current, i.shards],
        ));
    var d = E.useCallback(function (b, T) {
            if (('touches' in b && b.touches.length === 2) || (b.type === 'wheel' && b.ctrlKey))
                return !f.current.allowPinchZoom;
            var O = Tc(b),
                L = r.current,
                D = 'deltaX' in b ? b.deltaX : L[0] - O[0],
                k = 'deltaY' in b ? b.deltaY : L[1] - O[1],
                C,
                X = b.target,
                z = Math.abs(D) > Math.abs(k) ? 'h' : 'v';
            if ('touches' in b && z === 'h' && X.type === 'range') return !1;
            var U = window.getSelection(),
                P = U && U.anchorNode,
                se = P ? P === X || P.contains(X) : !1;
            if (se) return !1;
            var W = Sb(z, X);
            if (!W) return !0;
            if ((W ? (C = z) : ((C = z === 'v' ? 'h' : 'v'), (W = Sb(z, X))), !W)) return !1;
            if ((!a.current && 'changedTouches' in b && (D || k) && (a.current = C), !C)) return !0;
            var de = a.current || C;
            return LD(de, T, b, de === 'h' ? D : k);
        }, []),
        p = E.useCallback(function (b) {
            var T = b;
            if (!(!Ka.length || Ka[Ka.length - 1] !== u)) {
                var O = 'deltaY' in T ? xb(T) : Tc(T),
                    L = n.current.filter(function (C) {
                        return (
                            C.name === T.type &&
                            (C.target === T.target || T.target === C.shadowParent) &&
                            kD(C.delta, O)
                        );
                    })[0];
                if (L && L.should) {
                    T.cancelable && T.preventDefault();
                    return;
                }
                if (!L) {
                    var D = (f.current.shards || [])
                            .map(wb)
                            .filter(Boolean)
                            .filter(function (C) {
                                return C.contains(T.target);
                            }),
                        k = D.length > 0 ? d(T, D[0]) : !f.current.noIsolation;
                    k && T.cancelable && T.preventDefault();
                }
            }
        }, []),
        m = E.useCallback(function (b, T, O, L) {
            var D = { name: b, delta: T, target: O, should: L, shadowParent: HD(O) };
            (n.current.push(D),
                setTimeout(function () {
                    n.current = n.current.filter(function (k) {
                        return k !== D;
                    });
                }, 1));
        }, []),
        v = E.useCallback(function (b) {
            ((r.current = Tc(b)), (a.current = void 0));
        }, []),
        y = E.useCallback(function (b) {
            m(b.type, xb(b), b.target, d(b, i.lockRef.current));
        }, []),
        S = E.useCallback(function (b) {
            m(b.type, Tc(b), b.target, d(b, i.lockRef.current));
        }, []);
    E.useEffect(function () {
        return (
            Ka.push(u),
            i.setCallbacks({ onScrollCapture: y, onWheelCapture: y, onTouchMoveCapture: S }),
            document.addEventListener('wheel', p, Za),
            document.addEventListener('touchmove', p, Za),
            document.addEventListener('touchstart', v, Za),
            function () {
                ((Ka = Ka.filter(function (b) {
                    return b !== u;
                })),
                    document.removeEventListener('wheel', p, Za),
                    document.removeEventListener('touchmove', p, Za),
                    document.removeEventListener('touchstart', v, Za));
            }
        );
    }, []);
    var g = i.removeScrollBar,
        x = i.inert;
    return E.createElement(
        E.Fragment,
        null,
        x ? E.createElement(u, { styles: UD(s) }) : null,
        g ? E.createElement(MD, { noRelative: i.noRelative, gapMode: i.gapMode }) : null,
    );
}
function HD(i) {
    for (var n = null; i !== null; ) (i instanceof ShadowRoot && ((n = i.host), (i = i.host)), (i = i.parentNode));
    return n;
}
const YD = mD(ox, BD);
var dx = E.forwardRef(function (i, n) {
    return E.createElement(Tf, Gi({}, i, { ref: n, sideCar: YD }));
});
dx.classNames = Tf.classNames;
var cp = ['Enter', ' '],
    GD = ['ArrowDown', 'PageUp', 'Home'],
    hx = ['ArrowUp', 'PageDown', 'End'],
    XD = [...GD, ...hx],
    qD = { ltr: [...cp, 'ArrowRight'], rtl: [...cp, 'ArrowLeft'] },
    VD = { ltr: ['ArrowLeft'], rtl: ['ArrowRight'] },
    Js = 'Menu',
    [Xs, PD, QD] = zS(Js),
    [la, mx] = $s(Js, [QD, XS, WS]),
    Af = XS(),
    px = WS(),
    [ZD, ra] = la(Js),
    [KD, Ws] = la(Js),
    gx = i => {
        const { __scopeMenu: n, open: r = !1, children: a, dir: s, onOpenChange: u, modal: f = !0 } = i,
            d = Af(n),
            [p, m] = E.useState(null),
            v = E.useRef(!1),
            y = Rl(u),
            S = NS(s);
        return (
            E.useEffect(() => {
                const g = () => {
                        ((v.current = !0),
                            document.addEventListener('pointerdown', x, { capture: !0, once: !0 }),
                            document.addEventListener('pointermove', x, { capture: !0, once: !0 }));
                    },
                    x = () => (v.current = !1);
                return (
                    document.addEventListener('keydown', g, { capture: !0 }),
                    () => {
                        (document.removeEventListener('keydown', g, { capture: !0 }),
                            document.removeEventListener('pointerdown', x, { capture: !0 }),
                            document.removeEventListener('pointermove', x, { capture: !0 }));
                    }
                );
            }, []),
            V.jsx(k2, {
                ...d,
                children: V.jsx(ZD, {
                    scope: n,
                    open: r,
                    onOpenChange: y,
                    content: p,
                    onContentChange: m,
                    children: V.jsx(KD, {
                        scope: n,
                        onClose: E.useCallback(() => y(!1), [y]),
                        isUsingKeyboardRef: v,
                        dir: S,
                        modal: f,
                        children: a,
                    }),
                }),
            })
        );
    };
gx.displayName = Js;
var $D = 'MenuAnchor',
    Kp = E.forwardRef((i, n) => {
        const { __scopeMenu: r, ...a } = i,
            s = Af(r);
        return V.jsx(U2, { ...s, ...a, ref: n });
    });
Kp.displayName = $D;
var $p = 'MenuPortal',
    [FD, vx] = la($p, { forceMount: void 0 }),
    yx = i => {
        const { __scopeMenu: n, forceMount: r, children: a, container: s } = i,
            u = ra($p, n);
        return V.jsx(FD, {
            scope: n,
            forceMount: r,
            children: V.jsx(Fs, {
                present: r || u.open,
                children: V.jsx(IS, { asChild: !0, container: s, children: a }),
            }),
        });
    };
yx.displayName = $p;
var bi = 'MenuContent',
    [ID, Fp] = la(bi),
    _x = E.forwardRef((i, n) => {
        const r = vx(bi, i.__scopeMenu),
            { forceMount: a = r.forceMount, ...s } = i,
            u = ra(bi, i.__scopeMenu),
            f = Ws(bi, i.__scopeMenu);
        return V.jsx(Xs.Provider, {
            scope: i.__scopeMenu,
            children: V.jsx(Fs, {
                present: a || u.open,
                children: V.jsx(Xs.Slot, {
                    scope: i.__scopeMenu,
                    children: f.modal ? V.jsx(JD, { ...s, ref: n }) : V.jsx(WD, { ...s, ref: n }),
                }),
            }),
        });
    }),
    JD = E.forwardRef((i, n) => {
        const r = ra(bi, i.__scopeMenu),
            a = E.useRef(null),
            s = Un(n, a);
        return (
            E.useEffect(() => {
                const u = a.current;
                if (u) return lD(u);
            }, []),
            V.jsx(Ip, {
                ...i,
                ref: s,
                trapFocus: r.open,
                disableOutsidePointerEvents: r.open,
                disableOutsideScroll: !0,
                onFocusOutside: Je(i.onFocusOutside, u => u.preventDefault(), { checkForDefaultPrevented: !1 }),
                onDismiss: () => r.onOpenChange(!1),
            })
        );
    }),
    WD = E.forwardRef((i, n) => {
        const r = ra(bi, i.__scopeMenu);
        return V.jsx(Ip, {
            ...i,
            ref: n,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            disableOutsideScroll: !1,
            onDismiss: () => r.onOpenChange(!1),
        });
    }),
    eR = tf('MenuContent.ScrollLock'),
    Ip = E.forwardRef((i, n) => {
        const {
                __scopeMenu: r,
                loop: a = !1,
                trapFocus: s,
                onOpenAutoFocus: u,
                onCloseAutoFocus: f,
                disableOutsidePointerEvents: d,
                onEntryFocus: p,
                onEscapeKeyDown: m,
                onPointerDownOutside: v,
                onFocusOutside: y,
                onInteractOutside: S,
                onDismiss: g,
                disableOutsideScroll: x,
                ...b
            } = i,
            T = ra(bi, r),
            O = Ws(bi, r),
            L = Af(r),
            D = px(r),
            k = PD(r),
            [C, X] = E.useState(null),
            z = E.useRef(null),
            U = Un(n, z, T.onContentChange),
            P = E.useRef(0),
            se = E.useRef(''),
            W = E.useRef(0),
            de = E.useRef(null),
            ue = E.useRef('right'),
            ne = E.useRef(0),
            I = x ? dx : E.Fragment,
            A = x ? { as: eR, allowPinchZoom: !0 } : void 0,
            B = $ => {
                const fe = se.current + $,
                    M = k().filter(he => !he.disabled),
                    H = document.activeElement,
                    F = M.find(he => he.ref.current === H)?.textValue,
                    ee = M.map(he => he.textValue),
                    ge = dR(ee, fe, F),
                    ye = M.find(he => he.textValue === ge)?.ref.current;
                ((function he(Ae) {
                    ((se.current = Ae),
                        window.clearTimeout(P.current),
                        Ae !== '' && (P.current = window.setTimeout(() => he(''), 1e3)));
                })(fe),
                    ye && setTimeout(() => ye.focus()));
            };
        (E.useEffect(() => () => window.clearTimeout(P.current), []), r2());
        const R = E.useCallback($ => ue.current === de.current?.side && mR($, de.current?.area), []);
        return V.jsx(ID, {
            scope: r,
            searchRef: se,
            onItemEnter: E.useCallback(
                $ => {
                    R($) && $.preventDefault();
                },
                [R],
            ),
            onItemLeave: E.useCallback(
                $ => {
                    R($) || (z.current?.focus(), X(null));
                },
                [R],
            ),
            onTriggerLeave: E.useCallback(
                $ => {
                    R($) && $.preventDefault();
                },
                [R],
            ),
            pointerGraceTimerRef: W,
            onPointerGraceIntentChange: E.useCallback($ => {
                de.current = $;
            }, []),
            children: V.jsx(I, {
                ...A,
                children: V.jsx(jS, {
                    asChild: !0,
                    trapped: s,
                    onMountAutoFocus: Je(u, $ => {
                        ($.preventDefault(), z.current?.focus({ preventScroll: !0 }));
                    }),
                    onUnmountAutoFocus: f,
                    children: V.jsx(kS, {
                        asChild: !0,
                        disableOutsidePointerEvents: d,
                        onEscapeKeyDown: m,
                        onPointerDownOutside: v,
                        onFocusOutside: y,
                        onInteractOutside: S,
                        onDismiss: g,
                        children: V.jsx(W2, {
                            asChild: !0,
                            ...D,
                            dir: O.dir,
                            orientation: 'vertical',
                            loop: a,
                            currentTabStopId: C,
                            onCurrentTabStopIdChange: X,
                            onEntryFocus: Je(p, $ => {
                                O.isUsingKeyboardRef.current || $.preventDefault();
                            }),
                            preventScrollOnEntryFocus: !0,
                            children: V.jsx(j2, {
                                role: 'menu',
                                'aria-orientation': 'vertical',
                                'data-state': kx(T.open),
                                'data-radix-menu-content': '',
                                dir: O.dir,
                                ...L,
                                ...b,
                                ref: U,
                                style: { outline: 'none', ...b.style },
                                onKeyDown: Je(b.onKeyDown, $ => {
                                    const M = $.target.closest('[data-radix-menu-content]') === $.currentTarget,
                                        H = $.ctrlKey || $.altKey || $.metaKey,
                                        F = $.key.length === 1;
                                    M && ($.key === 'Tab' && $.preventDefault(), !H && F && B($.key));
                                    const ee = z.current;
                                    if ($.target !== ee || !XD.includes($.key)) return;
                                    $.preventDefault();
                                    const ye = k()
                                        .filter(he => !he.disabled)
                                        .map(he => he.ref.current);
                                    (hx.includes($.key) && ye.reverse(), cR(ye));
                                }),
                                onBlur: Je(i.onBlur, $ => {
                                    $.currentTarget.contains($.target) ||
                                        (window.clearTimeout(P.current), (se.current = ''));
                                }),
                                onPointerMove: Je(
                                    i.onPointerMove,
                                    qs($ => {
                                        const fe = $.target,
                                            M = ne.current !== $.clientX;
                                        if ($.currentTarget.contains(fe) && M) {
                                            const H = $.clientX > ne.current ? 'right' : 'left';
                                            ((ue.current = H), (ne.current = $.clientX));
                                        }
                                    }),
                                ),
                            }),
                        }),
                    }),
                }),
            }),
        });
    });
_x.displayName = bi;
var tR = 'MenuGroup',
    Jp = E.forwardRef((i, n) => {
        const { __scopeMenu: r, ...a } = i;
        return V.jsx(Sn.div, { role: 'group', ...a, ref: n });
    });
Jp.displayName = tR;
var nR = 'MenuLabel',
    bx = E.forwardRef((i, n) => {
        const { __scopeMenu: r, ...a } = i;
        return V.jsx(Sn.div, { ...a, ref: n });
    });
bx.displayName = nR;
var lf = 'MenuItem',
    Eb = 'menu.itemSelect',
    Mf = E.forwardRef((i, n) => {
        const { disabled: r = !1, onSelect: a, ...s } = i,
            u = E.useRef(null),
            f = Ws(lf, i.__scopeMenu),
            d = Fp(lf, i.__scopeMenu),
            p = Un(n, u),
            m = E.useRef(!1),
            v = () => {
                const y = u.current;
                if (!r && y) {
                    const S = new CustomEvent(Eb, { bubbles: !0, cancelable: !0 });
                    (y.addEventListener(Eb, g => a?.(g), { once: !0 }),
                        RS(y, S),
                        S.defaultPrevented ? (m.current = !1) : f.onClose());
                }
            };
        return V.jsx(Sx, {
            ...s,
            ref: p,
            disabled: r,
            onClick: Je(i.onClick, v),
            onPointerDown: y => {
                (i.onPointerDown?.(y), (m.current = !0));
            },
            onPointerUp: Je(i.onPointerUp, y => {
                m.current || y.currentTarget?.click();
            }),
            onKeyDown: Je(i.onKeyDown, y => {
                const S = d.searchRef.current !== '';
                r || (S && y.key === ' ') || (cp.includes(y.key) && (y.currentTarget.click(), y.preventDefault()));
            }),
        });
    });
Mf.displayName = lf;
var Sx = E.forwardRef((i, n) => {
        const { __scopeMenu: r, disabled: a = !1, textValue: s, ...u } = i,
            f = Fp(lf, r),
            d = px(r),
            p = E.useRef(null),
            m = Un(n, p),
            [v, y] = E.useState(!1),
            [S, g] = E.useState('');
        return (
            E.useEffect(() => {
                const x = p.current;
                x && g((x.textContent ?? '').trim());
            }, [u.children]),
            V.jsx(Xs.ItemSlot, {
                scope: r,
                disabled: a,
                textValue: s ?? S,
                children: V.jsx(eD, {
                    asChild: !0,
                    ...d,
                    focusable: !a,
                    children: V.jsx(Sn.div, {
                        role: 'menuitem',
                        'data-highlighted': v ? '' : void 0,
                        'aria-disabled': a || void 0,
                        'data-disabled': a ? '' : void 0,
                        ...u,
                        ref: m,
                        onPointerMove: Je(
                            i.onPointerMove,
                            qs(x => {
                                a
                                    ? f.onItemLeave(x)
                                    : (f.onItemEnter(x),
                                      x.defaultPrevented || x.currentTarget.focus({ preventScroll: !0 }));
                            }),
                        ),
                        onPointerLeave: Je(
                            i.onPointerLeave,
                            qs(x => f.onItemLeave(x)),
                        ),
                        onFocus: Je(i.onFocus, () => y(!0)),
                        onBlur: Je(i.onBlur, () => y(!1)),
                    }),
                }),
            })
        );
    }),
    iR = 'MenuCheckboxItem',
    xx = E.forwardRef((i, n) => {
        const { checked: r = !1, onCheckedChange: a, ...s } = i;
        return V.jsx(Mx, {
            scope: i.__scopeMenu,
            checked: r,
            children: V.jsx(Mf, {
                role: 'menuitemcheckbox',
                'aria-checked': rf(r) ? 'mixed' : r,
                ...s,
                ref: n,
                'data-state': eg(r),
                onSelect: Je(s.onSelect, () => a?.(rf(r) ? !0 : !r), { checkForDefaultPrevented: !1 }),
            }),
        });
    });
xx.displayName = iR;
var wx = 'MenuRadioGroup',
    [lR, rR] = la(wx, { value: void 0, onValueChange: () => {} }),
    Ex = E.forwardRef((i, n) => {
        const { value: r, onValueChange: a, ...s } = i,
            u = Rl(a);
        return V.jsx(lR, { scope: i.__scopeMenu, value: r, onValueChange: u, children: V.jsx(Jp, { ...s, ref: n }) });
    });
Ex.displayName = wx;
var Tx = 'MenuRadioItem',
    Ax = E.forwardRef((i, n) => {
        const { value: r, ...a } = i,
            s = rR(Tx, i.__scopeMenu),
            u = r === s.value;
        return V.jsx(Mx, {
            scope: i.__scopeMenu,
            checked: u,
            children: V.jsx(Mf, {
                role: 'menuitemradio',
                'aria-checked': u,
                ...a,
                ref: n,
                'data-state': eg(u),
                onSelect: Je(a.onSelect, () => s.onValueChange?.(r), { checkForDefaultPrevented: !1 }),
            }),
        });
    });
Ax.displayName = Tx;
var Wp = 'MenuItemIndicator',
    [Mx, aR] = la(Wp, { checked: !1 }),
    Ox = E.forwardRef((i, n) => {
        const { __scopeMenu: r, forceMount: a, ...s } = i,
            u = aR(Wp, r);
        return V.jsx(Fs, {
            present: a || rf(u.checked) || u.checked === !0,
            children: V.jsx(Sn.span, { ...s, ref: n, 'data-state': eg(u.checked) }),
        });
    });
Ox.displayName = Wp;
var oR = 'MenuSeparator',
    Cx = E.forwardRef((i, n) => {
        const { __scopeMenu: r, ...a } = i;
        return V.jsx(Sn.div, { role: 'separator', 'aria-orientation': 'horizontal', ...a, ref: n });
    });
Cx.displayName = oR;
var sR = 'MenuArrow',
    Dx = E.forwardRef((i, n) => {
        const { __scopeMenu: r, ...a } = i,
            s = Af(r);
        return V.jsx(B2, { ...s, ...a, ref: n });
    });
Dx.displayName = sR;
var uR = 'MenuSub',
    [C3, Rx] = la(uR),
    Ss = 'MenuSubTrigger',
    zx = E.forwardRef((i, n) => {
        const r = ra(Ss, i.__scopeMenu),
            a = Ws(Ss, i.__scopeMenu),
            s = Rx(Ss, i.__scopeMenu),
            u = Fp(Ss, i.__scopeMenu),
            f = E.useRef(null),
            { pointerGraceTimerRef: d, onPointerGraceIntentChange: p } = u,
            m = { __scopeMenu: i.__scopeMenu },
            v = E.useCallback(() => {
                (f.current && window.clearTimeout(f.current), (f.current = null));
            }, []);
        return (
            E.useEffect(() => v, [v]),
            E.useEffect(() => {
                const y = d.current;
                return () => {
                    (window.clearTimeout(y), p(null));
                };
            }, [d, p]),
            V.jsx(Kp, {
                asChild: !0,
                ...m,
                children: V.jsx(Sx, {
                    id: s.triggerId,
                    'aria-haspopup': 'menu',
                    'aria-expanded': r.open,
                    'aria-controls': s.contentId,
                    'data-state': kx(r.open),
                    ...i,
                    ref: Ef(n, s.onTriggerChange),
                    onClick: y => {
                        (i.onClick?.(y),
                            !(i.disabled || y.defaultPrevented) &&
                                (y.currentTarget.focus(), r.open || r.onOpenChange(!0)));
                    },
                    onPointerMove: Je(
                        i.onPointerMove,
                        qs(y => {
                            (u.onItemEnter(y),
                                !y.defaultPrevented &&
                                    !i.disabled &&
                                    !r.open &&
                                    !f.current &&
                                    (u.onPointerGraceIntentChange(null),
                                    (f.current = window.setTimeout(() => {
                                        (r.onOpenChange(!0), v());
                                    }, 100))));
                        }),
                    ),
                    onPointerLeave: Je(
                        i.onPointerLeave,
                        qs(y => {
                            v();
                            const S = r.content?.getBoundingClientRect();
                            if (S) {
                                const g = r.content?.dataset.side,
                                    x = g === 'right',
                                    b = x ? -5 : 5,
                                    T = S[x ? 'left' : 'right'],
                                    O = S[x ? 'right' : 'left'];
                                (u.onPointerGraceIntentChange({
                                    area: [
                                        { x: y.clientX + b, y: y.clientY },
                                        { x: T, y: S.top },
                                        { x: O, y: S.top },
                                        { x: O, y: S.bottom },
                                        { x: T, y: S.bottom },
                                    ],
                                    side: g,
                                }),
                                    window.clearTimeout(d.current),
                                    (d.current = window.setTimeout(() => u.onPointerGraceIntentChange(null), 300)));
                            } else {
                                if ((u.onTriggerLeave(y), y.defaultPrevented)) return;
                                u.onPointerGraceIntentChange(null);
                            }
                        }),
                    ),
                    onKeyDown: Je(i.onKeyDown, y => {
                        const S = u.searchRef.current !== '';
                        i.disabled ||
                            (S && y.key === ' ') ||
                            (qD[a.dir].includes(y.key) && (r.onOpenChange(!0), r.content?.focus(), y.preventDefault()));
                    }),
                }),
            })
        );
    });
zx.displayName = Ss;
var Nx = 'MenuSubContent',
    Lx = E.forwardRef((i, n) => {
        const r = vx(bi, i.__scopeMenu),
            { forceMount: a = r.forceMount, ...s } = i,
            u = ra(bi, i.__scopeMenu),
            f = Ws(bi, i.__scopeMenu),
            d = Rx(Nx, i.__scopeMenu),
            p = E.useRef(null),
            m = Un(n, p);
        return V.jsx(Xs.Provider, {
            scope: i.__scopeMenu,
            children: V.jsx(Fs, {
                present: a || u.open,
                children: V.jsx(Xs.Slot, {
                    scope: i.__scopeMenu,
                    children: V.jsx(Ip, {
                        id: d.contentId,
                        'aria-labelledby': d.triggerId,
                        ...s,
                        ref: m,
                        align: 'start',
                        side: f.dir === 'rtl' ? 'left' : 'right',
                        disableOutsidePointerEvents: !1,
                        disableOutsideScroll: !1,
                        trapFocus: !1,
                        onOpenAutoFocus: v => {
                            (f.isUsingKeyboardRef.current && p.current?.focus(), v.preventDefault());
                        },
                        onCloseAutoFocus: v => v.preventDefault(),
                        onFocusOutside: Je(i.onFocusOutside, v => {
                            v.target !== d.trigger && u.onOpenChange(!1);
                        }),
                        onEscapeKeyDown: Je(i.onEscapeKeyDown, v => {
                            (f.onClose(), v.preventDefault());
                        }),
                        onKeyDown: Je(i.onKeyDown, v => {
                            const y = v.currentTarget.contains(v.target),
                                S = VD[f.dir].includes(v.key);
                            y && S && (u.onOpenChange(!1), d.trigger?.focus(), v.preventDefault());
                        }),
                    }),
                }),
            }),
        });
    });
Lx.displayName = Nx;
function kx(i) {
    return i ? 'open' : 'closed';
}
function rf(i) {
    return i === 'indeterminate';
}
function eg(i) {
    return rf(i) ? 'indeterminate' : i ? 'checked' : 'unchecked';
}
function cR(i) {
    const n = document.activeElement;
    for (const r of i) if (r === n || (r.focus(), document.activeElement !== n)) return;
}
function fR(i, n) {
    return i.map((r, a) => i[(n + a) % i.length]);
}
function dR(i, n, r) {
    const s = n.length > 1 && Array.from(n).every(m => m === n[0]) ? n[0] : n,
        u = r ? i.indexOf(r) : -1;
    let f = fR(i, Math.max(u, 0));
    s.length === 1 && (f = f.filter(m => m !== r));
    const p = f.find(m => m.toLowerCase().startsWith(s.toLowerCase()));
    return p !== r ? p : void 0;
}
function hR(i, n) {
    const { x: r, y: a } = i;
    let s = !1;
    for (let u = 0, f = n.length - 1; u < n.length; f = u++) {
        const d = n[u],
            p = n[f],
            m = d.x,
            v = d.y,
            y = p.x,
            S = p.y;
        v > a != S > a && r < ((y - m) * (a - v)) / (S - v) + m && (s = !s);
    }
    return s;
}
function mR(i, n) {
    if (!n) return !1;
    const r = { x: i.clientX, y: i.clientY };
    return hR(r, n);
}
function qs(i) {
    return n => (n.pointerType === 'mouse' ? i(n) : void 0);
}
var pR = gx,
    gR = Kp,
    vR = yx,
    yR = _x,
    _R = Jp,
    bR = bx,
    SR = Mf,
    xR = xx,
    wR = Ex,
    ER = Ax,
    TR = Ox,
    AR = Cx,
    MR = Dx,
    OR = zx,
    CR = Lx,
    Of = 'DropdownMenu',
    [DR] = $s(Of, [mx]),
    xn = mx(),
    [RR, Ux] = DR(Of),
    jx = i => {
        const {
                __scopeDropdownMenu: n,
                children: r,
                dir: a,
                open: s,
                defaultOpen: u,
                onOpenChange: f,
                modal: d = !0,
            } = i,
            p = xn(n),
            m = E.useRef(null),
            [v, y] = DS({ prop: s, defaultProp: u ?? !1, onChange: f, caller: Of });
        return V.jsx(RR, {
            scope: n,
            triggerId: op(),
            triggerRef: m,
            contentId: op(),
            open: v,
            onOpenChange: y,
            onOpenToggle: E.useCallback(() => y(S => !S), [y]),
            modal: d,
            children: V.jsx(pR, { ...p, open: v, onOpenChange: y, dir: a, modal: d, children: r }),
        });
    };
jx.displayName = Of;
var Bx = 'DropdownMenuTrigger',
    Hx = E.forwardRef((i, n) => {
        const { __scopeDropdownMenu: r, disabled: a = !1, ...s } = i,
            u = Ux(Bx, r),
            f = xn(r);
        return V.jsx(gR, {
            asChild: !0,
            ...f,
            children: V.jsx(Sn.button, {
                type: 'button',
                id: u.triggerId,
                'aria-haspopup': 'menu',
                'aria-expanded': u.open,
                'aria-controls': u.open ? u.contentId : void 0,
                'data-state': u.open ? 'open' : 'closed',
                'data-disabled': a ? '' : void 0,
                disabled: a,
                ...s,
                ref: Ef(n, u.triggerRef),
                onPointerDown: Je(i.onPointerDown, d => {
                    !a && d.button === 0 && d.ctrlKey === !1 && (u.onOpenToggle(), u.open || d.preventDefault());
                }),
                onKeyDown: Je(i.onKeyDown, d => {
                    a ||
                        (['Enter', ' '].includes(d.key) && u.onOpenToggle(),
                        d.key === 'ArrowDown' && u.onOpenChange(!0),
                        ['Enter', ' ', 'ArrowDown'].includes(d.key) && d.preventDefault());
                }),
            }),
        });
    });
Hx.displayName = Bx;
var zR = 'DropdownMenuPortal',
    Yx = i => {
        const { __scopeDropdownMenu: n, ...r } = i,
            a = xn(n);
        return V.jsx(vR, { ...a, ...r });
    };
Yx.displayName = zR;
var Gx = 'DropdownMenuContent',
    Xx = E.forwardRef((i, n) => {
        const { __scopeDropdownMenu: r, ...a } = i,
            s = Ux(Gx, r),
            u = xn(r),
            f = E.useRef(!1);
        return V.jsx(yR, {
            id: s.contentId,
            'aria-labelledby': s.triggerId,
            ...u,
            ...a,
            ref: n,
            onCloseAutoFocus: Je(i.onCloseAutoFocus, d => {
                (f.current || s.triggerRef.current?.focus(), (f.current = !1), d.preventDefault());
            }),
            onInteractOutside: Je(i.onInteractOutside, d => {
                const p = d.detail.originalEvent,
                    m = p.button === 0 && p.ctrlKey === !0,
                    v = p.button === 2 || m;
                (!s.modal || v) && (f.current = !0);
            }),
            style: {
                ...i.style,
                '--radix-dropdown-menu-content-transform-origin': 'var(--radix-popper-transform-origin)',
                '--radix-dropdown-menu-content-available-width': 'var(--radix-popper-available-width)',
                '--radix-dropdown-menu-content-available-height': 'var(--radix-popper-available-height)',
                '--radix-dropdown-menu-trigger-width': 'var(--radix-popper-anchor-width)',
                '--radix-dropdown-menu-trigger-height': 'var(--radix-popper-anchor-height)',
            },
        });
    });
Xx.displayName = Gx;
var NR = 'DropdownMenuGroup',
    LR = E.forwardRef((i, n) => {
        const { __scopeDropdownMenu: r, ...a } = i,
            s = xn(r);
        return V.jsx(_R, { ...s, ...a, ref: n });
    });
LR.displayName = NR;
var kR = 'DropdownMenuLabel',
    UR = E.forwardRef((i, n) => {
        const { __scopeDropdownMenu: r, ...a } = i,
            s = xn(r);
        return V.jsx(bR, { ...s, ...a, ref: n });
    });
UR.displayName = kR;
var jR = 'DropdownMenuItem',
    BR = E.forwardRef((i, n) => {
        const { __scopeDropdownMenu: r, ...a } = i,
            s = xn(r);
        return V.jsx(SR, { ...s, ...a, ref: n });
    });
BR.displayName = jR;
var HR = 'DropdownMenuCheckboxItem',
    YR = E.forwardRef((i, n) => {
        const { __scopeDropdownMenu: r, ...a } = i,
            s = xn(r);
        return V.jsx(xR, { ...s, ...a, ref: n });
    });
YR.displayName = HR;
var GR = 'DropdownMenuRadioGroup',
    qx = E.forwardRef((i, n) => {
        const { __scopeDropdownMenu: r, ...a } = i,
            s = xn(r);
        return V.jsx(wR, { ...s, ...a, ref: n });
    });
qx.displayName = GR;
var XR = 'DropdownMenuRadioItem',
    Vx = E.forwardRef((i, n) => {
        const { __scopeDropdownMenu: r, ...a } = i,
            s = xn(r);
        return V.jsx(ER, { ...s, ...a, ref: n });
    });
Vx.displayName = XR;
var qR = 'DropdownMenuItemIndicator',
    Px = E.forwardRef((i, n) => {
        const { __scopeDropdownMenu: r, ...a } = i,
            s = xn(r);
        return V.jsx(TR, { ...s, ...a, ref: n });
    });
Px.displayName = qR;
var VR = 'DropdownMenuSeparator',
    PR = E.forwardRef((i, n) => {
        const { __scopeDropdownMenu: r, ...a } = i,
            s = xn(r);
        return V.jsx(AR, { ...s, ...a, ref: n });
    });
PR.displayName = VR;
var QR = 'DropdownMenuArrow',
    ZR = E.forwardRef((i, n) => {
        const { __scopeDropdownMenu: r, ...a } = i,
            s = xn(r);
        return V.jsx(MR, { ...s, ...a, ref: n });
    });
ZR.displayName = QR;
var KR = 'DropdownMenuSubTrigger',
    $R = E.forwardRef((i, n) => {
        const { __scopeDropdownMenu: r, ...a } = i,
            s = xn(r);
        return V.jsx(OR, { ...s, ...a, ref: n });
    });
$R.displayName = KR;
var FR = 'DropdownMenuSubContent',
    IR = E.forwardRef((i, n) => {
        const { __scopeDropdownMenu: r, ...a } = i,
            s = xn(r);
        return V.jsx(CR, {
            ...s,
            ...a,
            ref: n,
            style: {
                ...i.style,
                '--radix-dropdown-menu-content-transform-origin': 'var(--radix-popper-transform-origin)',
                '--radix-dropdown-menu-content-available-width': 'var(--radix-popper-available-width)',
                '--radix-dropdown-menu-content-available-height': 'var(--radix-popper-available-height)',
                '--radix-dropdown-menu-trigger-width': 'var(--radix-popper-anchor-width)',
                '--radix-dropdown-menu-trigger-height': 'var(--radix-popper-anchor-height)',
            },
        });
    });
IR.displayName = FR;
var JR = jx,
    WR = Hx,
    ez = Yx,
    tz = Xx,
    nz = qx,
    iz = Vx,
    lz = Px;
const rz = i => i.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
    az = i => i.replace(/^([A-Z])|[\s-_]+(\w)/g, (n, r, a) => (a ? a.toUpperCase() : r.toLowerCase())),
    Tb = i => {
        const n = az(i);
        return n.charAt(0).toUpperCase() + n.slice(1);
    },
    Qx = (...i) =>
        i
            .filter((n, r, a) => !!n && n.trim() !== '' && a.indexOf(n) === r)
            .join(' ')
            .trim(),
    oz = i => {
        for (const n in i) if (n.startsWith('aria-') || n === 'role' || n === 'title') return !0;
    };
var sz = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
};
const uz = E.forwardRef(
    (
        {
            color: i = 'currentColor',
            size: n = 24,
            strokeWidth: r = 2,
            absoluteStrokeWidth: a,
            className: s = '',
            children: u,
            iconNode: f,
            ...d
        },
        p,
    ) =>
        E.createElement(
            'svg',
            {
                ref: p,
                ...sz,
                width: n,
                height: n,
                stroke: i,
                strokeWidth: a ? (Number(r) * 24) / Number(n) : r,
                className: Qx('lucide', s),
                ...(!u && !oz(d) && { 'aria-hidden': 'true' }),
                ...d,
            },
            [...f.map(([m, v]) => E.createElement(m, v)), ...(Array.isArray(u) ? u : [u])],
        ),
);
const xo = (i, n) => {
    const r = E.forwardRef(({ className: a, ...s }, u) =>
        E.createElement(uz, { ref: u, iconNode: n, className: Qx(`lucide-${rz(Tb(i))}`, `lucide-${i}`, a), ...s }),
    );
    return ((r.displayName = Tb(i)), r);
};
const cz = [
        ['path', { d: 'M 22 14 L 22 10', key: 'nqc4tb' }],
        ['rect', { x: '2', y: '6', width: '16', height: '12', rx: '2', key: '13zb55' }],
    ],
    fz = xo('battery', cz);
const dz = [['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }]],
    hz = xo('circle', dz);
const mz = [
        ['rect', { width: '18', height: '12', x: '3', y: '4', rx: '2', ry: '2', key: '1qhy41' }],
        ['line', { x1: '2', x2: '22', y1: '20', y2: '20', key: 'ni3hll' }],
    ],
    pz = xo('laptop-minimal', mz);
const gz = [
        [
            'path',
            {
                d: 'M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401',
                key: 'kfwtm',
            },
        ],
    ],
    vz = xo('moon', gz);
const yz = [
        ['circle', { cx: '12', cy: '12', r: '4', key: '4exip2' }],
        ['path', { d: 'M12 2v2', key: 'tus03m' }],
        ['path', { d: 'M12 20v2', key: '1lh1kg' }],
        ['path', { d: 'm4.93 4.93 1.41 1.41', key: '149t6j' }],
        ['path', { d: 'm17.66 17.66 1.41 1.41', key: 'ptbguv' }],
        ['path', { d: 'M2 12h2', key: '1t8f8n' }],
        ['path', { d: 'M20 12h2', key: '1q8mjw' }],
        ['path', { d: 'm6.34 17.66-1.41 1.41', key: '1m8zz5' }],
        ['path', { d: 'm19.07 4.93-1.41 1.41', key: '1shlcs' }],
    ],
    _z = xo('sun', yz);
const bz = [
        ['path', { d: 'M12 20h.01', key: 'zekei9' }],
        ['path', { d: 'M2 8.82a15 15 0 0 1 20 0', key: 'dnpr2z' }],
        ['path', { d: 'M5 12.859a10 10 0 0 1 14 0', key: '1x1e6c' }],
        ['path', { d: 'M8.5 16.429a5 5 0 0 1 7 0', key: '1bycff' }],
    ],
    Sz = xo('wifi', bz);
function xz(i) {
    const n = Ut.c(4);
    let r;
    n[0] !== i ? (({ ...r } = i), (n[0] = i), (n[1] = r)) : (r = n[1]);
    let a;
    return (
        n[2] !== r ? ((a = V.jsx(JR, { 'data-slot': 'dropdown-menu', ...r })), (n[2] = r), (n[3] = a)) : (a = n[3]),
        a
    );
}
function wz(i) {
    const n = Ut.c(4);
    let r;
    n[0] !== i ? (({ ...r } = i), (n[0] = i), (n[1] = r)) : (r = n[1]);
    let a;
    return (
        n[2] !== r
            ? ((a = V.jsx(WR, { 'data-slot': 'dropdown-menu-trigger', ...r })), (n[2] = r), (n[3] = a))
            : (a = n[3]),
        a
    );
}
function Ez(i) {
    const n = Ut.c(10);
    let r, a, s;
    n[0] !== i
        ? (({ className: r, sideOffset: s, ...a } = i), (n[0] = i), (n[1] = r), (n[2] = a), (n[3] = s))
        : ((r = n[1]), (a = n[2]), (s = n[3]));
    const u = s === void 0 ? 4 : s;
    let f;
    n[4] !== r
        ? ((f = wf(
              'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 border-border z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md',
              r,
          )),
          (n[4] = r),
          (n[5] = f))
        : (f = n[5]);
    let d;
    return (
        n[6] !== a || n[7] !== u || n[8] !== f
            ? ((d = V.jsx(ez, {
                  children: V.jsx(tz, { 'data-slot': 'dropdown-menu-content', sideOffset: u, className: f, ...a }),
              })),
              (n[6] = a),
              (n[7] = u),
              (n[8] = f),
              (n[9] = d))
            : (d = n[9]),
        d
    );
}
function Tz(i) {
    const n = Ut.c(4);
    let r;
    n[0] !== i ? (({ ...r } = i), (n[0] = i), (n[1] = r)) : (r = n[1]);
    let a;
    return (
        n[2] !== r
            ? ((a = V.jsx(nz, { 'data-slot': 'dropdown-menu-radio-group', ...r })), (n[2] = r), (n[3] = a))
            : (a = n[3]),
        a
    );
}
function Az(i) {
    const n = Ut.c(11);
    let r, a, s;
    n[0] !== i
        ? (({ className: a, children: r, ...s } = i), (n[0] = i), (n[1] = r), (n[2] = a), (n[3] = s))
        : ((r = n[1]), (a = n[2]), (s = n[3]));
    let u;
    n[4] !== a
        ? ((u = wf(
              "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              a,
          )),
          (n[4] = a),
          (n[5] = u))
        : (u = n[5]);
    let f;
    n[6] === Symbol.for('react.memo_cache_sentinel')
        ? ((f = V.jsx('span', {
              className: 'pointer-events-none absolute left-2 flex size-3.5 items-center justify-center',
              children: V.jsx(lz, { children: V.jsx(hz, { className: 'size-2 fill-current' }) }),
          })),
          (n[6] = f))
        : (f = n[6]);
    let d;
    return (
        n[7] !== r || n[8] !== s || n[9] !== u
            ? ((d = V.jsxs(iz, { 'data-slot': 'dropdown-menu-radio-item', className: u, ...s, children: [f, r] })),
              (n[7] = r),
              (n[8] = s),
              (n[9] = u),
              (n[10] = d))
            : (d = n[10]),
        d
    );
}
const Mz = [
        { value: 'light', label: 'Light', Icon: _z },
        { value: 'dark', label: 'Dark', Icon: vz },
        { value: 'system', label: 'System', Icon: pz },
    ],
    Oz = i => {
        const n = Ut.c(16),
            { iconSrc: r } = i,
            { theme: a, resolvedTheme: s, setTheme: u } = pT(),
            [f, d] = E.useState(!1);
        let p, m;
        (n[0] === Symbol.for('react.memo_cache_sentinel')
            ? ((p = () => {
                  d(!0);
              }),
              (m = []),
              (n[0] = p),
              (n[1] = m))
            : ((p = n[0]), (m = n[1])),
            E.useEffect(p, m));
        let v;
        e: {
            if (!f) {
                v = 'Toggle theme';
                break e;
            }
            if (a === 'system') {
                v = `System (${s || 'light'})`;
                break e;
            }
            v = a === 'dark' ? 'Dark mode' : 'Light mode';
        }
        const y = v,
            S = f ? (a ?? 'system') : 'system';
        let g;
        n[2] !== u
            ? ((g = k => {
                  u(k);
              }),
              (n[2] = u),
              (n[3] = g))
            : (g = n[3]);
        const x = g;
        let b;
        n[4] !== r
            ? ((b = V.jsx('img', { src: r, alt: 'toggle-theme', className: 'icon nav-icon dark:invert' })),
              (n[4] = r),
              (n[5] = b))
            : (b = n[5]);
        let T;
        n[6] !== y || n[7] !== b
            ? ((T = V.jsx(wz, {
                  asChild: !0,
                  className: 'cursor-pointer focus-visible:outline-none',
                  children: V.jsx('button', {
                      type: 'button',
                      className: 'mt-1.5',
                      'aria-label': y,
                      title: y,
                      children: b,
                  }),
              })),
              (n[6] = y),
              (n[7] = b),
              (n[8] = T))
            : (T = n[8]);
        let O;
        n[9] === Symbol.for('react.memo_cache_sentinel') ? ((O = Mz.map(Cz)), (n[9] = O)) : (O = n[9]);
        let L;
        n[10] !== x || n[11] !== S
            ? ((L = V.jsx(Ez, {
                  align: 'center',
                  sideOffset: 8,
                  className:
                      'border-border bg-card text-foreground w-32 rounded-xl border p-1 shadow-2xl backdrop-blur-md',
                  children: V.jsx(Tz, { value: S, onValueChange: x, children: O }),
              })),
              (n[10] = x),
              (n[11] = S),
              (n[12] = L))
            : (L = n[12]);
        let D;
        return (
            n[13] !== T || n[14] !== L
                ? ((D = V.jsxs(xz, { children: [T, L] })), (n[13] = T), (n[14] = L), (n[15] = D))
                : (D = n[15]),
            D
        );
    };
function Cz(i) {
    const { value: n, label: r, Icon: a } = i;
    return V.jsxs(
        Az,
        {
            value: n,
            className:
                'text-muted-foreground hover:bg-muted hover:text-foreground data-[state=checked]:bg-muted data-[state=checked]:text-foreground data-[state=checked]:[&_svg]:text-accent flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors',
            children: [V.jsx(a, { size: 16, className: 'text-foreground' }), V.jsx('span', { children: r })],
        },
        n,
    );
}
const Dz = () => {
    const i = Ut.c(24),
        n = ei().openWindow;
    let r, a, s, u, f;
    if (i[0] !== n) {
        const x = gO.filter(Nz);
        u =
            'bg-card/60 text-foreground hidden items-center justify-between p-2 px-5 backdrop-blur-3xl select-none sm:flex';
        let b;
        i[6] === Symbol.for('react.memo_cache_sentinel')
            ? ((b = V.jsxs('div', {
                  className: 'flex cursor-pointer items-center gap-3',
                  children: [
                      V.jsx('img', { src: '/images/logo.svg', alt: 'logo', className: 'dark:invert' }),
                      V.jsx('p', { className: 'font-bold', children: Fm.fullName }),
                  ],
              })),
              (i[6] = b))
            : (b = i[6]);
        const T = pO.map(O => {
            const { id: L, name: D, type: k } = O;
            return V.jsx(
                'li',
                {
                    onClick: () => n(k),
                    children: V.jsx('p', {
                        className: 'cursor-pointer text-sm transition-all hover:underline',
                        children: D,
                    }),
                },
                L,
            );
        });
        (i[7] !== T
            ? ((f = V.jsxs('div', {
                  className: 'flex items-center gap-5 max-sm:w-full max-sm:justify-center',
                  children: [
                      b,
                      V.jsx('ul', { className: 'text-foreground flex items-center gap-5 max-sm:hidden', children: T }),
                  ],
              })),
              (i[7] = T),
              (i[8] = f))
            : (f = i[8]),
            (s = 'flex items-center gap-5 max-sm:hidden'),
            (r = 'text-foreground flex items-center gap-5 max-sm:hidden'),
            (a = x.map(Lz)),
            (i[0] = n),
            (i[1] = r),
            (i[2] = a),
            (i[3] = s),
            (i[4] = u),
            (i[5] = f));
    } else ((r = i[1]), (a = i[2]), (s = i[3]), (u = i[4]), (f = i[5]));
    let d;
    i[9] === Symbol.for('react.memo_cache_sentinel')
        ? ((d = V.jsx('li', { children: V.jsx(Oz, { iconSrc: '/icons/mode.svg' }) })), (i[9] = d))
        : (d = i[9]);
    let p;
    i[10] !== r || i[11] !== a
        ? ((p = V.jsxs('ul', { className: r, children: [a, d] })), (i[10] = r), (i[11] = a), (i[12] = p))
        : (p = i[12]);
    let m;
    i[13] === Symbol.for('react.memo_cache_sentinel')
        ? ((m = V.jsx('time', {
              className: 'text-foreground text-sm font-medium',
              children: CS().format('ddd MMM D h:mm A'),
          })),
          (i[13] = m))
        : (m = i[13]);
    let v;
    i[14] !== s || i[15] !== p
        ? ((v = V.jsxs('div', { className: s, children: [p, m] })), (i[14] = s), (i[15] = p), (i[16] = v))
        : (v = i[16]);
    let y;
    i[17] !== u || i[18] !== f || i[19] !== v
        ? ((y = V.jsxs('nav', { className: u, children: [f, v] })), (i[17] = u), (i[18] = f), (i[19] = v), (i[20] = y))
        : (y = i[20]);
    let S;
    i[21] === Symbol.for('react.memo_cache_sentinel') ? ((S = V.jsx(Rz, {})), (i[21] = S)) : (S = i[21]);
    let g;
    return (i[22] !== y ? ((g = V.jsxs(V.Fragment, { children: [y, S] })), (i[22] = y), (i[23] = g)) : (g = i[23]), g);
};
function Rz() {
    const i = Ut.c(10),
        { nextZIndex: n, windows: r } = ei(),
        s = !Object.values(r).some(zz) && 'text-white';
    let u;
    i[0] !== s
        ? ((u = wf(
              'text-foreground h-nav-height relative flex items-center justify-between gap-5 px-5 py-3 sm:hidden dark:bg-transparent',
              s,
          )),
          (i[0] = s),
          (i[1] = u))
        : (u = i[1]);
    let f;
    i[2] !== n ? ((f = { zIndex: n }), (i[2] = n), (i[3] = f)) : (f = i[3]);
    let d, p;
    i[4] === Symbol.for('react.memo_cache_sentinel')
        ? ((d = V.jsx('p', { children: CS().format('h:mm A') })),
          (p = V.jsx('div', { className: 'mx-auto h-6 w-40 rounded-full bg-black/80' })),
          (i[4] = d),
          (i[5] = p))
        : ((d = i[4]), (p = i[5]));
    let m;
    i[6] === Symbol.for('react.memo_cache_sentinel')
        ? ((m = V.jsxs('ul', {
              className: 'flex items-center gap-2',
              children: [
                  V.jsx('li', { children: V.jsx(Sz, { className: 'size-4' }) }),
                  V.jsx('li', { children: V.jsx(fz, { className: 'size-4' }) }),
              ],
          })),
          (i[6] = m))
        : (m = i[6]);
    let v;
    return (
        i[7] !== u || i[8] !== f
            ? ((v = V.jsxs('section', { className: u, style: f, children: [d, p, m] })),
              (i[7] = u),
              (i[8] = f),
              (i[9] = v))
            : (v = i[9]),
        v
    );
}
function zz(i) {
    return i.isOpen;
}
function Nz(i) {
    return i.action !== 'theme';
}
function Lz(i) {
    const { id: n, img: r } = i;
    return V.jsx('li', { children: V.jsx('img', { src: r, className: 'icon dark:invert', alt: `icon-${n}` }) }, n);
}
const kz = { subtitle: { min: 100, max: 400, default: 100 }, title: { min: 400, max: 900, default: 400 } },
    Ab = (i, n, r = 400) =>
        [...i].map((a, s) =>
            V.jsx(
                'span',
                { className: n, style: { fontVariationSettings: `'wght' ${r}` }, children: a === ' ' ? ' ' : a },
                s,
            ),
        ),
    Mb = (i, n) => {
        if (!i) return () => {};
        const r = i.querySelectorAll('span'),
            { min: a, max: s, default: u } = kz[n],
            f = (m, v, y = 0.25) => vo.to(m, { duration: y, ease: 'power2.out', fontVariationSettings: `'wght' ${v}` }),
            d = m => {
                const { left: v } = i.getBoundingClientRect(),
                    y = m.clientX - v;
                r.forEach(S => {
                    const { left: g, width: x } = S.getBoundingClientRect(),
                        b = Math.abs(y - (g - v + x / 2)),
                        T = Math.exp(-(b ** 2) / 2e4);
                    f(S, a + (s - a) * T);
                });
            },
            p = () => {
                r.forEach(m => {
                    f(m, u);
                });
            };
        return (
            i.addEventListener('mousemove', d),
            i.addEventListener('mouseleave', p),
            () => {
                (i.removeEventListener('mousemove', d), i.removeEventListener('mouseleave', p));
            }
        );
    },
    Uz = () => {
        const i = Ut.c(5),
            n = E.useRef(null),
            r = E.useRef(null);
        let a, s;
        (i[0] === Symbol.for('react.memo_cache_sentinel')
            ? ((a = () => {
                  const p = Mb(n.current, 'title'),
                      m = Mb(r.current, 'subtitle');
                  return () => {
                      (p(), m());
                  };
              }),
              (s = []),
              (i[0] = a),
              (i[1] = s))
            : ((a = i[0]), (s = i[1])),
            df(a, s));
        let u;
        i[2] === Symbol.for('react.memo_cache_sentinel')
            ? ((u = V.jsx('h1', { className: 'sr-only', children: Fm.fullName })), (i[2] = u))
            : (u = i[2]);
        let f;
        i[3] === Symbol.for('react.memo_cache_sentinel')
            ? ((f = V.jsx('p', {
                  ref: r,
                  className: 'mb-3',
                  children: Ab(`Hey, I'm! ${Fm.firstName} Welcome to my`, 'text-2xl sm:text-3xl font-georama', 100),
              })),
              (i[3] = f))
            : (f = i[3]);
        let d;
        return (
            i[4] === Symbol.for('react.memo_cache_sentinel')
                ? ((d = V.jsxs('section', {
                      id: 'welcome',
                      className:
                          'abs-center flex flex-col items-center justify-center text-white select-none max-sm:h-screen max-sm:w-full max-sm:px-10',
                      children: [
                          u,
                          f,
                          V.jsx('h2', {
                              ref: n,
                              children: Ab('portfolio', 'sm:text-9xl text-7xl italic font-georama', 400),
                          }),
                      ],
                  })),
                  (i[4] = d))
                : (d = i[4]),
            d
        );
    },
    jz = 'modulepreload',
    Bz = function (i) {
        return '/' + i;
    },
    Ob = {},
    Jt = function (n, r, a) {
        let s = Promise.resolve();
        if (r && r.length > 0) {
            let p = function (m) {
                return Promise.all(
                    m.map(v =>
                        Promise.resolve(v).then(
                            y => ({ status: 'fulfilled', value: y }),
                            y => ({ status: 'rejected', reason: y }),
                        ),
                    ),
                );
            };
            document.getElementsByTagName('link');
            const f = document.querySelector('meta[property=csp-nonce]'),
                d = f?.nonce || f?.getAttribute('nonce');
            s = p(
                r.map(m => {
                    if (((m = Bz(m)), m in Ob)) return;
                    Ob[m] = !0;
                    const v = m.endsWith('.css'),
                        y = v ? '[rel="stylesheet"]' : '';
                    if (document.querySelector(`link[href="${m}"]${y}`)) return;
                    const S = document.createElement('link');
                    if (
                        ((S.rel = v ? 'stylesheet' : jz),
                        v || (S.as = 'script'),
                        (S.crossOrigin = ''),
                        (S.href = m),
                        d && S.setAttribute('nonce', d),
                        document.head.appendChild(S),
                        v)
                    )
                        return new Promise((g, x) => {
                            (S.addEventListener('load', g),
                                S.addEventListener('error', () => x(new Error(`Unable to preload CSS for ${m}`))));
                        });
                }),
            );
        }
        function u(f) {
            const d = new Event('vite:preloadError', { cancelable: !0 });
            if (((d.payload = f), window.dispatchEvent(d), !d.defaultPrevented)) throw f;
        }
        return s.then(f => {
            for (const d of f || []) d.status === 'rejected' && u(d.reason);
            return n().catch(u);
        });
    };
function zl(i) {
    const n = Ut.c(4),
        { Mobile: r, Desktop: a } = i,
        s = pS();
    if (s === null) return null;
    let u;
    return (
        n[0] !== a || n[1] !== r || n[2] !== s
            ? ((u = V.jsx(E.Suspense, { fallback: null, children: s ? V.jsx(r, {}) : V.jsx(a, {}) })),
              (n[0] = a),
              (n[1] = r),
              (n[2] = s),
              (n[3] = u))
            : (u = n[3]),
        u
    );
}
const Hz = E.lazy(() => Jt(() => import('./terminal.desktop-DeWCE3Hc.js'), __vite__mapDeps([0, 1, 2]))),
    Yz = E.lazy(() => Jt(() => import('./terminal.mobile-HXZ8Ddo0.js'), __vite__mapDeps([3, 4, 5, 6, 2])));
function Gz() {
    const i = Ut.c(1);
    if (!ei(Xz)) return null;
    let r;
    return (
        i[0] === Symbol.for('react.memo_cache_sentinel')
            ? ((r = V.jsx(zl, { Mobile: Yz, Desktop: Hz })), (i[0] = r))
            : (r = i[0]),
        r
    );
}
function Xz(i) {
    return i.windows.terminal.isOpen;
}
const qz = E.lazy(() => Jt(() => import('./safari.desktop-CaXiEJFo.js'), __vite__mapDeps([7, 1, 8, 5, 6, 9]))),
    Vz = E.lazy(() => Jt(() => import('./safari.mobile-CL864Zt4.js'), __vite__mapDeps([10, 4, 5, 8, 9, 6])));
function Pz() {
    const i = Ut.c(1);
    if (!ei(Qz)) return null;
    let r;
    return (
        i[0] === Symbol.for('react.memo_cache_sentinel')
            ? ((r = V.jsx(zl, { Mobile: Vz, Desktop: qz })), (i[0] = r))
            : (r = i[0]),
        r
    );
}
function Qz(i) {
    return i.windows.safari.isOpen;
}
const Zz = E.lazy(() => Jt(() => import('./resume.desktop-D8tbR1d2.js'), __vite__mapDeps([11, 1, 12, 13]))),
    Kz = E.lazy(() => Jt(() => import('./resume.mobile-BKBS20lH.js'), __vite__mapDeps([14, 12, 13, 4, 5])));
function $z() {
    const i = Ut.c(1);
    if (!ei(Fz)) return null;
    let r;
    return (
        i[0] === Symbol.for('react.memo_cache_sentinel')
            ? ((r = V.jsx(zl, { Mobile: Kz, Desktop: Zz })), (i[0] = r))
            : (r = i[0]),
        r
    );
}
function Fz(i) {
    return i.windows.resume.isOpen;
}
const Iz = E.lazy(() => Jt(() => import('./finder.desktop-iEn0qlYC.js'), __vite__mapDeps([15, 1, 16, 17, 9]))),
    Jz = E.lazy(() => Jt(() => import('./finder.mobile-iLWKPuGr.js'), __vite__mapDeps([18, 4, 5, 17, 6])));
function Wz() {
    const i = Ut.c(1);
    if (!ei(e3)) return null;
    let r;
    return (
        i[0] === Symbol.for('react.memo_cache_sentinel')
            ? ((r = V.jsx(zl, { Mobile: Jz, Desktop: Iz })), (i[0] = r))
            : (r = i[0]),
        r
    );
}
function e3(i) {
    return i.windows.finder.isOpen;
}
const t3 = E.lazy(() => Jt(() => import('./text.desktop-BHVIa_zk.js'), __vite__mapDeps([19, 1]))),
    n3 = E.lazy(() => Jt(() => import('./text.mobile-BaEgdwky.js'), __vite__mapDeps([20, 4, 5])));
function i3() {
    const i = Ut.c(1);
    if (!ei(l3)) return null;
    let r;
    return (
        i[0] === Symbol.for('react.memo_cache_sentinel')
            ? ((r = V.jsx(zl, { Mobile: n3, Desktop: t3 })), (i[0] = r))
            : (r = i[0]),
        r
    );
}
function l3(i) {
    return i.windows.txtfile.isOpen;
}
const r3 = E.lazy(() => Jt(() => import('./image.desktop-CEba2U2k.js'), __vite__mapDeps([21, 1]))),
    a3 = E.lazy(() => Jt(() => import('./image.mobile-DXKHsCmF.js'), __vite__mapDeps([22, 4, 5])));
function o3() {
    const i = Ut.c(1);
    if (!ei(s3)) return null;
    let r;
    return (
        i[0] === Symbol.for('react.memo_cache_sentinel')
            ? ((r = V.jsx(zl, { Mobile: a3, Desktop: r3 })), (i[0] = r))
            : (r = i[0]),
        r
    );
}
function s3(i) {
    return i.windows.imgfile.isOpen;
}
const u3 = E.lazy(() => Jt(() => import('./contact.desktop-O6kstwgG.js'), __vite__mapDeps([23, 1]))),
    c3 = E.lazy(() => Jt(() => import('./contact.mobile-D5pruKH1.js'), __vite__mapDeps([24, 4, 5])));
function f3() {
    const i = Ut.c(1);
    if (!ei(d3)) return null;
    let r;
    return (
        i[0] === Symbol.for('react.memo_cache_sentinel')
            ? ((r = V.jsx(zl, { Mobile: c3, Desktop: u3 })), (i[0] = r))
            : (r = i[0]),
        r
    );
}
function d3(i) {
    return i.windows.contact.isOpen;
}
const h3 = E.lazy(() => Jt(() => import('./home.desktop-DW6g1C7C.js'), __vite__mapDeps([25, 16]))),
    m3 = E.lazy(() => Jt(() => import('./home.mobile-C_NQfAMB.js'), []));
function p3() {
    const i = Ut.c(1);
    let n;
    return (
        i[0] === Symbol.for('react.memo_cache_sentinel')
            ? ((n = V.jsx(zl, { Mobile: m3, Desktop: h3 })), (i[0] = n))
            : (n = i[0]),
        n
    );
}
const g3 = E.lazy(() => Jt(() => import('./photos.desktop-DseMw9GS.js'), __vite__mapDeps([26, 1, 9]))),
    v3 = E.lazy(() => Jt(() => import('./photos.mobile-BqEIheZx.js'), __vite__mapDeps([27, 4, 5])));
function y3() {
    const i = Ut.c(1);
    if (!ei(_3)) return null;
    let r;
    return (
        i[0] === Symbol.for('react.memo_cache_sentinel')
            ? ((r = V.jsx(zl, { Mobile: v3, Desktop: g3 })), (i[0] = r))
            : (r = i[0]),
        r
    );
}
function _3(i) {
    return i.windows.photos.isOpen;
}
vo.registerPlugin(Ps);
const b3 = () => {
    const i = Ut.c(2);
    let n;
    (i[0] === Symbol.for('react.memo_cache_sentinel') ? ((n = []), (i[0] = n)) : (n = i[0]), E.useEffect(x3, n));
    let r;
    return (
        i[1] === Symbol.for('react.memo_cache_sentinel')
            ? ((r = V.jsxs('main', {
                  className: 'h-dvh w-dvw overflow-hidden',
                  children: [
                      V.jsx(Dz, {}),
                      V.jsx(Uz, {}),
                      V.jsx(RC, {}),
                      V.jsx(Gz, {}),
                      V.jsx(Pz, {}),
                      V.jsx(i3, {}),
                      V.jsx(o3, {}),
                      V.jsx($z, {}),
                      V.jsx(Wz, {}),
                      V.jsx(f3, {}),
                      V.jsx(p3, {}),
                      V.jsx(y3, {}),
                  ],
              })),
              (i[1] = r))
            : (r = i[1]),
        r
    );
};
function S3() {
    q1.getState().setIsMobile(window.innerWidth < 640);
}
function x3() {
    const i = S3;
    return (i(), window.addEventListener('resize', i), () => window.removeEventListener('resize', i));
}
fT.createRoot(document.getElementById('root')).render(
    V.jsx(E.StrictMode, {
        children: V.jsx(gT, { attribute: 'class', defaultTheme: 'system', enableSystem: !0, children: V.jsx(b3, {}) }),
    }),
);
export {
    Ps as D,
    xo as a,
    w3 as b,
    Ut as c,
    XO as d,
    wf as e,
    df as f,
    af as g,
    X1 as h,
    YO as i,
    V as j,
    A3 as k,
    O3 as l,
    M3 as m,
    vo as n,
    Fm as p,
    E as r,
    T3 as s,
    E3 as t,
    ei as u,
};

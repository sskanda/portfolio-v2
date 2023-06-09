/*!
 * fullPage 3.1.2 - Extensions 0.2.2
 * https://github.com/alvarotrigo/fullPage.js
 * @license http://alvarotrigo.com/fullPage/extensions/#license
 *
 * Copyright (C) 2018 alvarotrigo.com - A project by Alvaro Trigo
 */
!function (e, t, n, o, r) {
    "function" == typeof define && define.amd ? define(function () {
        return e.fullpage = o(t, n),
            e.fullpage
    }) : "object" == typeof exports ? module.exports = o(t, n) : t.fullpage = o(t, n)
}(this, window, document, function (cn, sn) {
    "use strict";
    var un = "fullpage-wrapper"
        , fn = "." + un
        , dn = "fp-responsive"
        , vn = "fp-notransition"
        , pn = "fp-destroyed"
        , hn = "fp-enabled"
        , gn = "fp-viewing"
        , mn = "active"
        , Sn = "." + mn
        , bn = "fp-completely"
        , wn = "fp-section"
        , yn = "." + wn
        , En = yn + Sn
        , xn = "fp-tableCell"
        , Ln = "." + xn
        , An = "fp-auto-height"
        , Mn = "fp-normal-scroll"
        , Tn = "fp-nav"
        , On = "#" + Tn
        , kn = "fp-tooltip"
        , Cn = "fp-slide"
        , Hn = "." + Cn
        , zn = Hn + Sn
        , Rn = "fp-slides"
        , In = "." + Rn
        , Nn = "fp-slidesContainer"
        , Bn = "." + Nn
        , jn = "fp-table"
        , Pn = "fp-slidesNav"
        , Yn = "." + Pn
        , Wn = Yn + " a"
        , e = "fp-controlArrow"
        , Dn = "." + e
        , Vn = "fp-prev"
        , Zn = Dn + ".fp-prev"
        , Xn = Dn + ".fp-next";
    function Gn(e, t) {
        cn.console && cn.console[e] && cn.console[e]("fullPage: " + t)
    }
    function Un(e, t) {
        return (t = 1 < arguments.length ? t : sn) ? t.querySelectorAll(e) : null
    }
    function Fn(e) {
        e = e || {};
        for (var t = 1, n = arguments.length; t < n; ++t) {
            var o = arguments[t];
            if (o)
                for (var r in o)
                    o.hasOwnProperty(r) && ("[object Object]" !== Object.prototype.toString.call(o[r]) ? e[r] = o[r] : e[r] = Fn(e[r], o[r]))
        }
        return e
    }
    function _n(e, t) {
        return null != e && (e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className))
    }
    function Qn() {
        return "innerHeight" in cn ? cn.innerHeight : sn.documentElement.offsetHeight
    }
    function Jn() {
        return cn.innerWidth
    }
    function Kn(e, t) {
        var n;
        for (n in e = l(e),
            t)
            if (t.hasOwnProperty(n) && null !== n)
                for (var o = 0; o < e.length; o++) {
                    e[o].style[n] = t[n]
                }
        return e
    }
    function n(e, t, n) {
        for (var o = e[n]; o && !Eo(o, t);)
            o = o[n];
        return o
    }
    function $n(e, t) {
        return n(e, t, "previousElementSibling")
    }
    function qn(e, t) {
        return n(e, t, "nextElementSibling")
    }
    function eo(e, t) {
        if (null == t)
            return e.previousElementSibling;
        var n = eo(e);
        return n && Eo(n, t) ? n : null
    }
    function to(e, t) {
        if (null == t)
            return e.nextElementSibling;
        var n = to(e);
        return n && Eo(n, t) ? n : null
    }
    function no(e) {
        return e[e.length - 1]
    }
    function oo(e, t) {
        e = lo(e) ? e[0] : e;
        for (var n = null != t ? Un(t, e.parentNode) : e.parentNode.childNodes, o = 0, r = 0; r < n.length; r++) {
            if (n[r] == e)
                return o;
            1 == n[r].nodeType && o++
        }
        return -1
    }
    function l(e) {
        return lo(e) ? e : [e]
    }
    function ro(e) {
        e = l(e);
        for (var t = 0; t < e.length; t++)
            e[t].style.display = "none";
        return e
    }
    function io(e) {
        e = l(e);
        for (var t = 0; t < e.length; t++)
            e[t].style.display = "block";
        return e
    }
    function lo(e) {
        return "[object Array]" === Object.prototype.toString.call(e) || "[object NodeList]" === Object.prototype.toString.call(e)
    }
    function ao(e, t) {
        e = l(e);
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.classList ? o.classList.add(t) : o.className += " " + t
        }
        return e
    }
    function co(e, t) {
        e = l(e);
        for (var n = t.split(" "), o = 0; o < n.length; o++) {
            t = n[o];
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.classList ? i.classList.remove(t) : i.className = i.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " ")
            }
        }
        return e
    }
    function so(e, t) {
        t.appendChild(e)
    }
    function o(e, t, n) {
        var o;
        t = t || sn.createElement("div");
        for (var r = 0; r < e.length; r++) {
            var i = e[r];
            (n && !r || !n) && (o = t.cloneNode(!0),
                i.parentNode.insertBefore(o, i)),
                o.appendChild(i)
        }
        return e
    }
    function uo(e, t) {
        o(e, t, !0)
    }
    function fo(e, t) {
        for ("string" == typeof t && (t = Lo(t)),
            e.appendChild(t); e.firstChild !== t;)
            t.appendChild(e.firstChild)
    }
    function vo(e) {
        for (var t = sn.createDocumentFragment(); e.firstChild;)
            t.appendChild(e.firstChild);
        e.parentNode.replaceChild(t, e)
    }
    function po(e, t) {
        return e && 1 === e.nodeType ? Eo(e, t) ? e : po(e.parentNode, t) : null
    }
    function ho(e, t) {
        r(e, e.nextSibling, t)
    }
    function go(e, t) {
        r(e, e, t)
    }
    function r(e, t, n) {
        lo(n) || ("string" == typeof n && (n = Lo(n)),
            n = [n]);
        for (var o = 0; o < n.length; o++)
            e.parentNode.insertBefore(n[o], t)
    }
    function mo() {
        var e = sn.documentElement;
        return (cn.pageYOffset || e.scrollTop) - (e.clientTop || 0)
    }
    function So(t) {
        return Array.prototype.filter.call(t.parentNode.children, function (e) {
            return e !== t
        })
    }
    function bo(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = !1
    }
    function wo(e) {
        if ("function" == typeof e)
            return !0;
        var t = Object.prototype.toString(e);
        return "[object Function]" === t || "[object GeneratorFunction]" === t
    }
    function yo(e, t, n) {
        var o;
        n = void 0 === n ? {} : n,
            "function" == typeof cn.CustomEvent ? o = new CustomEvent(t, {
                detail: n
            }) : (o = sn.createEvent("CustomEvent")).initCustomEvent(t, !0, !0, n),
            e.dispatchEvent(o)
    }
    function Eo(e, t) {
        return (e.matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector).call(e, t)
    }
    function xo(e, t) {
        if ("boolean" == typeof t)
            for (var n = 0; n < e.length; n++)
                e[n].style.display = t ? "block" : "none";
        return e
    }
    function Lo(e) {
        var t = sn.createElement("div");
        return t.innerHTML = e.trim(),
            t.firstChild
    }
    function Ao(e) {
        e = l(e);
        for (var t = 0; t < e.length; t++) {
            var n = e[t];
            n && n.parentElement && n.parentNode.removeChild(n)
        }
    }
    function i(e, t, n) {
        for (var o = e[n], r = []; o;)
            (Eo(o, t) || null == t) && r.push(o),
                o = o[n];
        return r
    }
    function Mo(e, t) {
        return i(e, t, "nextElementSibling")
    }
    function To(e, t) {
        return i(e, t, "previousElementSibling")
    }
    function Oo(e, t) {
        e.insertBefore(t, e.firstChild)
    }
    return cn.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function (e, t) {
        t = t || cn;
        for (var n = 0; n < this.length; n++)
            e.call(t, this[n], n, this)
    }
    ),
        cn.fp_utils = {
            $: Un,
            deepExtend: Fn,
            hasClass: _n,
            getWindowHeight: Qn,
            css: Kn,
            until: n,
            prevUntil: $n,
            nextUntil: qn,
            prev: eo,
            next: to,
            last: no,
            index: oo,
            getList: l,
            hide: ro,
            show: io,
            isArrayOrList: lo,
            addClass: ao,
            removeClass: co,
            appendTo: so,
            wrap: o,
            wrapAll: uo,
            wrapInner: fo,
            unwrap: vo,
            closest: po,
            after: ho,
            before: go,
            insertBefore: r,
            getScrollTop: mo,
            siblings: So,
            preventDefault: bo,
            isFunction: wo,
            trigger: yo,
            matches: Eo,
            toggle: xo,
            createElementFromHTML: Lo,
            remove: Ao,
            filter: function (e, t) {
                Array.prototype.filter.call(e, t)
            },
            untilAll: i,
            nextAll: Mo,
            prevAll: To,
            showError: Gn,
            prependTo: Oo,
            toggleClass: function (e, t, n) {
                if (e.classList && null == n)
                    e.classList.toggle(t);
                else {
                    var o = _n(e, t);
                    o && null == n || !n ? co(e, t) : (!o && null == n || n) && ao(e, t)
                }
            }
        },
        function (e, b) {
            var n = b && new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$").test("31EB1867-F27C4C2E-90C981D3-01B86BEC") || -1 < sn.domain.indexOf("alvarotrigo.com")
                , s = Un("html, body")
                , c = Un("html")[0]
                , g = Un("body")[0];
            if (!_n(c, hn)) {
                var m = {};
                b = Fn({
                    menu: !1,
                    anchors: [],
                    lockAnchors: !1,
                    navigation: !1,
                    navigationPosition: "right",
                    navigationTooltips: [],
                    showActiveTooltip: !1,
                    slidesNavigation: !1,
                    slidesNavPosition: "bottom",
                    scrollBar: !1,
                    hybrid: !1,
                    css3: !0,
                    scrollingSpeed: 700,
                    autoScrolling: !0,
                    fitToSection: !0,
                    fitToSectionDelay: 1e3,
                    easing: "easeInOutCubic",
                    easingcss3: "ease",
                    loopBottom: !1,
                    loopTop: !1,
                    loopHorizontal: !0,
                    continuousVertical: !1,
                    continuousHorizontal: !1,
                    scrollHorizontally: !1,
                    interlockedSlides: !1,
                    dragAndMove: !1,
                    offsetSections: !1,
                    resetSliders: !1,
                    fadingEffect: !1,
                    normalScrollElements: null,
                    scrollOverflow: !1,
                    scrollOverflowReset: !1,
                    scrollOverflowHandler: cn.fp_scrolloverflow ? cn.fp_scrolloverflow.iscrollHandler : null,
                    scrollOverflowOptions: null,
                    touchSensitivity: 5,
                    touchWrapper: "string" == typeof e ? Un(e)[0] : e,
                    bigSectionsDestination: null,
                    keyboardScrolling: !0,
                    animateAnchor: !0,
                    recordHistory: !0,
                    controlArrows: !0,
                    controlArrowColor: "#fff",
                    verticalCentered: !0,
                    sectionsColor: [],
                    paddingTop: 0,
                    paddingBottom: 0,
                    fixedElements: null,
                    responsive: 0,
                    responsiveWidth: 0,
                    responsiveHeight: 0,
                    responsiveSlides: !1,
                    parallax: !1,
                    parallaxOptions: {
                        type: "reveal",
                        percentage: 62,
                        property: "translate"
                    },
                    cards: !1,
                    cardsOptions: {
                        perspective: 100,
                        fadeContent: !0,
                        fadeBackground: !0
                    },
                    sectionSelector: ".section",
                    slideSelector: ".slide",
                    v2compatible: !1,
                    afterLoad: null,
                    onLeave: null,
                    afterRender: null,
                    afterResize: null,
                    afterReBuild: null,
                    afterSlideLoad: null,
                    onSlideLeave: null,
                    afterResponsive: null,
                    lazyLoading: !0
                }, b);
                var S, l, u, o, a = !1, r = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/), i = "ontouchstart" in cn || 0 < navigator.msMaxTouchPoints || navigator.maxTouchPoints, w = "string" == typeof e ? Un(e)[0] : e, y = Qn(), f = Jn(), E = !1, t = !0, x = !0, d = [], v = {
                    m: {
                        up: !0,
                        down: !0,
                        left: !0,
                        right: !0
                    }
                };
                v.k = Fn({}, v.m);
                var p, h, L, A, M, T, O, k, C, H, z = Vt(), R = {
                    touchmove: "ontouchmove" in cn ? "touchmove" : z.move,
                    touchstart: "ontouchstart" in cn ? "touchstart" : z.down
                }, I = !1, N = !_n(g, ot("OHNsd3AtZnVsbHBhZ2UtanM5T20=")), B = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]', j = !1;
                try {
                    var P = Object.defineProperty({}, "passive", {
                        get: function () {
                            j = !0
                        }
                    });
                    cn.addEventListener("testPassive", null, P),
                        cn.removeEventListener("testPassive", null, P)
                } catch (e) { }
                var Y, W, D, V = Fn({}, b), Z = !1, X = !0, G = {};
                tn(),
                    cn.fp_easings = Fn(cn.fp_easings, {
                        easeInOutCubic: function (e, t, n, o) {
                            return (e /= o / 2) < 1 ? n / 2 * e * e * e + t : n / 2 * ((e -= 2) * e * e + 2) + t
                        }
                    }),
                    w && (m.version = "3.1.1",
                        m.setAutoScrolling = re,
                        m.setRecordHistory = ie,
                        m.setScrollingSpeed = le,
                        m.setFitToSection = ae,
                        m.setLockAnchors = function (e) {
                            b.lockAnchors = e
                        }
                        ,
                        m.setMouseWheelScrolling = ce,
                        m.setAllowScrolling = se,
                        m.setKeyboardScrolling = fe,
                        m.moveSectionUp = de,
                        m.moveSectionDown = ve,
                        m.silentMoveTo = pe,
                        m.moveTo = he,
                        m.moveSlideRight = ge,
                        m.moveSlideLeft = me,
                        m.fitToSection = ze,
                        m.reBuild = Se,
                        m.setResponsive = we,
                        m.getFullpageData = function () {
                            return {
                                options: b,
                                internals: {
                                    container: w,
                                    canScroll: x,
                                    isScrollAllowed: v,
                                    getDestinationPosition: Ve,
                                    isTouch: i,
                                    c: at,
                                    getXmovement: Ht,
                                    removeAnimation: Ot,
                                    getTransforms: Ut,
                                    lazyLoad: Ke,
                                    addAnimation: Tt,
                                    performHorizontalMove: xt,
                                    landscapeScroll: wt,
                                    silentLandscapeScroll: Xt,
                                    keepSlidesPosition: De,
                                    silentScroll: Gt,
                                    styleSlides: Me,
                                    styleSection: Oe,
                                    scrollHandler: He,
                                    getEventsPage: Zt,
                                    getMSPointer: Vt,
                                    isReallyTouch: Be,
                                    usingExtension: Jt,
                                    toggleControlArrows: yt,
                                    touchStartHandler: je,
                                    touchMoveHandler: Ne,
                                    nullOrSection: Ge
                                }
                            }
                        }
                        ,
                        m.destroy = function (e) {
                            yo(w, "destroy", e),
                                re(!1, "internal"),
                                se(!0),
                                ue(!1),
                                fe(!1),
                                ao(w, pn),
                                [M, A, h, T, O, C, L, D].forEach(function (e) {
                                    clearTimeout(e)
                                }),
                                cn.removeEventListener("scroll", He),
                                cn.removeEventListener("hashchange", ut),
                                cn.removeEventListener("resize", Lt),
                                sn.removeEventListener("keydown", dt),
                                sn.removeEventListener("keyup", vt),
                                ["click", "touchstart"].forEach(function (e) {
                                    sn.removeEventListener(e, ye)
                                }),
                                ["mouseenter", "touchstart", "mouseleave", "touchend"].forEach(function (e) {
                                    sn.removeEventListener(e, xe, !0)
                                }),
                                Kt("dragAndMove", "destroy"),
                                e && (Gt(0),
                                    Un("img[data-src], source[data-src], audio[data-src], iframe[data-src]", w).forEach(function (e) {
                                        Qe(e, "src")
                                    }),
                                    Un("img[data-srcset]").forEach(function (e) {
                                        Qe(e, "srcset")
                                    }),
                                    Ao(Un(On + ", " + Yn + ", " + Dn)),
                                    Kn(Un(yn), {
                                        height: "",
                                        "background-color": "",
                                        padding: ""
                                    }),
                                    Kn(Un(Hn), {
                                        width: ""
                                    }),
                                    Kn(w, {
                                        height: "",
                                        position: "",
                                        "-ms-touch-action": "",
                                        "touch-action": ""
                                    }),
                                    Kn(s, {
                                        overflow: "",
                                        height: ""
                                    }),
                                    co(c, hn),
                                    co(g, dn),
                                    g.className.split(/\s+/).forEach(function (e) {
                                        0 === e.indexOf(gn) && co(g, e)
                                    }),
                                    Un(yn + ", " + Hn).forEach(function (e) {
                                        b.scrollOverflowHandler && b.scrollOverflow && b.scrollOverflowHandler.remove(e),
                                            co(e, jn + " " + mn + " " + bn);
                                        var t = e.getAttribute("data-fp-styles");
                                        t && e.setAttribute("style", e.getAttribute("data-fp-styles")),
                                            _n(e, wn) && !Z && e.removeAttribute("data-anchor")
                                    }),
                                    _t(w),
                                    [Ln, Bn, In].forEach(function (e) {
                                        Un(e, w).forEach(function (e) {
                                            vo(e)
                                        })
                                    }),
                                    cn.scrollTo(0, 0),
                                    [wn, Cn, Nn].forEach(function (e) {
                                        co(Un("." + e), e)
                                    }))
                        }
                        ,
                        m.getActiveSection = function () {
                            return new ln(Un(En)[0])
                        }
                        ,
                        m.getActiveSlide = function () {
                            return Ue(Un(zn, Un(En)[0])[0])
                        }
                        ,
                        m.landscapeScroll = wt,
                        m.test = {
                            top: "0px",
                            translate3d: "translate3d(0px, 0px, 0px)",
                            translate3dH: function () {
                                for (var e = [], t = 0; t < Un(b.sectionSelector, w).length; t++)
                                    e.push("translate3d(0px, 0px, 0px)");
                                return e
                            }(),
                            left: function () {
                                for (var e = [], t = 0; t < Un(b.sectionSelector, w).length; t++)
                                    e.push(0);
                                return e
                            }(),
                            options: b,
                            setAutoScrolling: re
                        },
                        m.shared = {
                            afterRenderActions: Ce,
                            isNormalScrollElement: !1
                        },
                        cn.fullpage_api = m,
                        cn.fullpage_extensions = !0,
                        b.$ && Object.keys(m).forEach(function (e) {
                            b.$.fn.fullpage[e] = m[e]
                        }),
                        Ae("continuousHorizontal"),
                        Ae("scrollHorizontally"),
                        Ae("resetSliders"),
                        Ae("interlockedSlides"),
                        Ae("responsiveSlides"),
                        Ae("fadingEffect"),
                        Ae("dragAndMove"),
                        Ae("offsetSections"),
                        Ae("scrollOverflowReset"),
                        Ae("parallax"),
                        Ae("cards"),
                        Ae("dropEffect"),
                        Ae("waterEffect"),
                        Kt("dragAndMove", "init"),
                        b.css3 && (b.css3 = function () {
                            var e, t = sn.createElement("p"), n = {
                                webkitTransform: "-webkit-transform",
                                OTransform: "-o-transform",
                                msTransform: "-ms-transform",
                                MozTransform: "-moz-transform",
                                transform: "transform"
                            };
                            for (var o in t.style.display = "block",
                                sn.body.insertBefore(t, null),
                                n)
                                void 0 !== t.style[o] && (t.style[o] = "translate3d(1px,1px,1px)",
                                    e = cn.getComputedStyle(t).getPropertyValue(n[o]));
                            return sn.body.removeChild(t),
                                void 0 !== e && 0 < e.length && "none" !== e
                        }()),
                        b.scrollBar = b.scrollBar || b.hybrid,
                        function () {
                            if (!b.anchors.length) {
                                var e = "[data-anchor]"
                                    , t = Un(b.sectionSelector.split(",").join(e + ",") + e, w);
                                t.length && t.length === Un(b.sectionSelector, w).length && (Z = !0,
                                    t.forEach(function (e) {
                                        b.anchors.push(e.getAttribute("data-anchor").toString())
                                    }))
                            }
                            if (!b.navigationTooltips.length) {
                                var n = "[data-tooltip]"
                                    , o = Un(b.sectionSelector.split(",").join(n + ",") + n, w);
                                o.length && o.forEach(function (e) {
                                    b.navigationTooltips.push(e.getAttribute("data-tooltip").toString())
                                })
                            }
                        }(),
                        function () {
                            Kn(w, {
                                height: "100%",
                                position: "relative"
                            }),
                                ao(w, un),
                                ao(c, hn),
                                y = Qn(),
                                co(w, pn),
                                ao(Un(b.sectionSelector, w), wn),
                                ao(Un(b.slideSelector, w), Cn),
                                Kt("parallax", "init");
                            for (var e = Un(yn), t = 0; t < e.length; t++) {
                                var n = t
                                    , o = e[t]
                                    , r = Un(Hn, o)
                                    , i = r.length;
                                o.setAttribute("data-fp-styles", o.getAttribute("style")),
                                    Oe(o, n),
                                    l = o,
                                    a = n,
                                    void 0 !== b.anchors[a] && _n(l, mn) && kt(b.anchors[a], a),
                                    b.menu && b.css3 && null != po(Un(b.menu)[0], fn) && Un(b.menu).forEach(function (e) {
                                        g.appendChild(e)
                                    }),
                                    0 < i ? Me(o, r, i) : b.verticalCentered && zt(o)
                            }
                            var l, a;
                            b.fixedElements && b.css3 && Un(b.fixedElements).forEach(function (e) {
                                g.appendChild(e)
                            }),
                                b.navigation && function () {
                                    var e = sn.createElement("div");
                                    e.setAttribute("id", Tn);
                                    var t = sn.createElement("ul");
                                    e.appendChild(t),
                                        so(e, g);
                                    var n = Un(On)[0];
                                    ao(n, "fp-" + b.navigationPosition),
                                        b.showActiveTooltip && ao(n, "fp-show-active");
                                    for (var o = "", r = 0; r < Un(yn).length; r++) {
                                        var i = "";
                                        b.anchors.length && (i = b.anchors[r]),
                                            o += '<li><a href="#' + i + '"><span class="fp-sr-only">' + ke(r, "Section") + "</span><span></span></a>";
                                        var l = b.navigationTooltips[r];
                                        void 0 !== l && "" !== l && (o += '<div class="' + kn + " fp-" + b.navigationPosition + '">' + l + "</div>"),
                                            o += "</li>"
                                    }
                                    Un("ul", n)[0].innerHTML = o,
                                        ao(Un("a", Un("li", Un(On)[0])[oo(Un(En)[0], yn)]), mn)
                                }(),
                                Un('iframe[src*="youtube.com/embed/"]', w).forEach(function (e) {
                                    var t, n, o;
                                    n = "enablejsapi=1",
                                        o = (t = e).getAttribute("src"),
                                        t.setAttribute("src", o + (/\?/.test(o) ? "&" : "?") + n)
                                }),
                                Kt("fadingEffect", "apply"),
                                Kt("dropEffect", "init"),
                                Kt("waterEffect", "init"),
                                Kt("cards", "init"),
                                b.scrollOverflow && (p = b.scrollOverflowHandler.init(b))
                        }(),
                        se(!0),
                        ue(!0),
                        re(b.autoScrolling, "internal"),
                        Mt(),
                        Dt(),
                        "complete" === sn.readyState && st(),
                        cn.addEventListener("load", st),
                        b.scrollOverflow || Ce(),
                        function () {
                            for (var e = 1; e < 4; e++)
                                C = setTimeout(Le, 350 * e)
                        }(),
                        N || at("l"),
                        cn.addEventListener("scroll", He),
                        cn.addEventListener("hashchange", ut),
                        cn.addEventListener("focus", mt),
                        cn.addEventListener("blur", St),
                        cn.addEventListener("resize", Lt),
                        sn.addEventListener("keydown", dt),
                        sn.addEventListener("keyup", vt),
                        ["click", "touchstart"].forEach(function (e) {
                            sn.addEventListener(e, ye)
                        }),
                        b.normalScrollElements && (["mouseenter", "touchstart"].forEach(function (e) {
                            Ee(e, !1)
                        }),
                            ["mouseleave", "touchend"].forEach(function (e) {
                                Ee(e, !0)
                            })),
                        Kt("dragAndMove", "turnOffTouch"));
                var U, F, _, Q = !1, J = 0, K = 0, $ = 0, q = 0, ee = (new Date).getTime(), te = 0, ne = 0, oe = y;
                return m
            }
            function re(e, t) {
                e || Gt(0),
                    en("autoScrolling", e, t);
                var n = Un(En)[0];
                if (b.autoScrolling && !b.scrollBar)
                    Kn(s, {
                        overflow: "hidden",
                        height: "100%"
                    }),
                        ie(V.recordHistory, "internal"),
                        Kn(w, {
                            "-ms-touch-action": "none",
                            "touch-action": "none"
                        }),
                        null != n && Gt(n.offsetTop);
                else if (Kn(s, {
                    overflow: "visible",
                    height: "initial"
                }),
                    ie(!!b.autoScrolling && V.recordHistory, "internal"),
                    Kn(w, {
                        "-ms-touch-action": "",
                        "touch-action": ""
                    }),
                    _t(w),
                    null != n) {
                    var o = Fe(n.offsetTop);
                    o.element.scrollTo(0, o.options)
                }
                yo(w, "setAutoScrolling", e)
            }
            function ie(e, t) {
                en("recordHistory", e, t)
            }
            function le(e, t) {
                "internal" !== t && Jt("fadingEffect") && m.fadingEffect.update(e),
                    Jt("cards") && m.cards.update(e),
                    en("scrollingSpeed", e, t)
            }
            function ae(e, t) {
                en("fitToSection", e, t)
            }
            function ce(e) {
                e ? (function () {
                    var e, t = "";
                    cn.addEventListener ? e = "addEventListener" : (e = "attachEvent",
                        t = "on");
                    var n = "onwheel" in sn.createElement("div") ? "wheel" : void 0 !== sn.onmousewheel ? "mousewheel" : "DOMMouseScroll"
                        , o = !!j && {
                            passive: !1
                        };
                    "DOMMouseScroll" == n ? sn[e](t + "MozMousePixelScroll", Ye, o) : sn[e](t + n, Ye, o)
                }(),
                    w.addEventListener("mousedown", pt),
                    w.addEventListener("mouseup", ht)) : (sn.addEventListener ? (sn.removeEventListener("mousewheel", Ye, !1),
                        sn.removeEventListener("wheel", Ye, !1),
                        sn.removeEventListener("MozMousePixelScroll", Ye, !1)) : sn.detachEvent("onmousewheel", Ye),
                        w.removeEventListener("mousedown", pt),
                        w.removeEventListener("mouseup", ht))
            }
            function se(t, e) {
                void 0 !== e ? (e = e.replace(/ /g, "").split(",")).forEach(function (e) {
                    Ft(t, e, "m")
                }) : Ft(t, "all", "m"),
                    yo(w, "setAllowScrolling", {
                        value: t,
                        directions: e
                    })
            }
            function ue(e) {
                e ? (ce(!0),
                    function () {
                        if ((r || i) && (!Jt("dragAndMove") || "mouseonly" === b.dragAndMove)) {
                            b.autoScrolling && (g.removeEventListener(R.touchmove, Ie, {
                                passive: !1
                            }),
                                g.addEventListener(R.touchmove, Ie, {
                                    passive: !1
                                }));
                            var e = b.touchWrapper;
                            e.removeEventListener(R.touchstart, je),
                                e.removeEventListener(R.touchmove, Ne, {
                                    passive: !1
                                }),
                                e.addEventListener(R.touchstart, je),
                                e.addEventListener(R.touchmove, Ne, {
                                    passive: !1
                                })
                        }
                    }()) : (ce(!1),
                        function () {
                            if (r || i) {
                                b.autoScrolling && (g.removeEventListener(R.touchmove, Ne, {
                                    passive: !1
                                }),
                                    g.removeEventListener(R.touchmove, Ie, {
                                        passive: !1
                                    }));
                                var e = b.touchWrapper;
                                e.removeEventListener(R.touchstart, je),
                                    e.removeEventListener(R.touchmove, Ne, {
                                        passive: !1
                                    })
                            }
                        }())
            }
            function fe(t, e) {
                void 0 !== e ? (e = e.replace(/ /g, "").split(",")).forEach(function (e) {
                    Ft(t, e, "k")
                }) : (Ft(t, "all", "k"),
                    b.keyboardScrolling = t)
            }
            function de() {
                var e = $n(Un(En)[0], yn);
                e || !b.loopTop && !b.continuousVertical || (e = no(Un(yn))),
                    null != e && Ze(e, null, !0)
            }
            function ve() {
                var e = qn(Un(En)[0], yn);
                e || !b.loopBottom && !b.continuousVertical || (e = Un(yn)[0]),
                    null != e && Ze(e, null, !1)
            }
            function pe(e, t) {
                le(0, "internal"),
                    he(e, t),
                    le(V.scrollingSpeed, "internal")
            }
            function he(e, t) {
                var n = Nt(e);
                void 0 !== t ? Bt(e, t) : null != n && Ze(n)
            }
            function ge(e) {
                We("right", e)
            }
            function me(e) {
                We("left", e)
            }
            function Se(e) {
                if (!_n(w, pn)) {
                    E = !0,
                        y = Qn(),
                        f = Jn();
                    for (var t = Un(yn), n = 0; n < t.length; ++n) {
                        var o = t[n]
                            , r = Un(In, o)[0]
                            , i = Un(Hn, o);
                        b.verticalCentered && Kn(Un(Ln, o), {
                            height: Rt(o) + "px"
                        }),
                            Kn(o, {
                                height: Te(o) + "px"
                            }),
                            1 < i.length && wt(r, Un(zn, r)[0])
                    }
                    b.scrollOverflow && p.createScrollBarForAll();
                    var l = oo(Un(En)[0], yn);
                    !l || Jt("fadingEffect") || Jt("dropEffect") || Jt("waterEffect") || pe(l + 1),
                        E = !1,
                        wo(b.afterResize) && e && b.afterResize.call(w, cn.innerWidth, cn.innerHeight),
                        wo(b.afterReBuild) && !e && b.afterReBuild.call(w),
                        yo(w, "afterRebuild")
                }
            }
            function be() {
                return _n(g, dn)
            }
            function we(e) {
                var t = be();
                e ? t || (re(!1, "internal"),
                    ae(!1, "internal"),
                    ro(Un(On)),
                    ao(g, dn),
                    wo(b.afterResponsive) && b.afterResponsive.call(w, e),
                    Kt("responsiveSlides", "toSections"),
                    yo(w, "afterResponsive", e),
                    b.scrollOverflow && p.createScrollBarForAll()) : t && (re(V.autoScrolling, "internal"),
                        ae(V.autoScrolling, "internal"),
                        io(Un(On)),
                        co(g, dn),
                        wo(b.afterResponsive) && b.afterResponsive.call(w, e),
                        Kt("responsiveSlides", "toSlides"),
                        yo(w, "afterResponsive", e))
            }
            function ye(e) {
                var t = e.target;
                t && po(t, On + " a") ? function (e) {
                    bo(e);
                    var t = oo(po(this, On + " li"));
                    Ze(Un(yn)[t])
                }
                    .call(t, e) : Eo(t, ".fp-tooltip") ? function () {
                        yo(eo(this), "click")
                    }
                        .call(t) : Eo(t, Dn) ? function () {
                            var e = po(this, yn);
                            _n(this, Vn) ? v.m.left && me(e) : v.m.right && ge(e)
                        }
                            .call(t, e) : Eo(t, Wn) || null != po(t, Wn) ? function (e) {
                                bo(e);
                                var t = Un(In, po(this, yn))[0]
                                    , n = Un(Hn, t)[oo(po(this, "li"))];
                                wt(t, n)
                            }
                                .call(t, e) : po(t, b.menu + " [data-menuanchor]") && function (e) {
                                    !Un(b.menu)[0] || !b.lockAnchors && b.anchors.length || (bo(e),
                                        he(this.getAttribute("data-menuanchor")))
                                }
                                    .call(t, e)
            }
            function Ee(e, t) {
                sn["fp_" + e] = t,
                    sn.addEventListener(e, xe, !0)
            }
            function xe(e) {
                var t = e.type
                    , o = !1
                    , r = b.scrollOverflow
                    , i = "mouseleave" === t ? e.toElement || e.relatedTarget : e.target;
                if (i == sn || !i)
                    return ue(!0),
                        void (r && b.scrollOverflowHandler.setIscroll(i, !0));
                "touchend" === t && (X = !1,
                    setTimeout(function () {
                        X = !0
                    }, 800)),
                    ("mouseenter" !== t || X) && (b.normalScrollElements.split(",").forEach(function (e) {
                        if (!o) {
                            var t = Eo(i, e)
                                , n = po(i, e);
                            (t || n) && (m.shared.isNormalScrollElement || (ue(!1),
                                r && b.scrollOverflowHandler.setIscroll(i, !1)),
                                m.shared.isNormalScrollElement = !0,
                                o = !0)
                        }
                    }),
                        !o && m.shared.isNormalScrollElement && (ue(!0),
                            r && b.scrollOverflowHandler.setIscroll(i, !0),
                            m.shared.isNormalScrollElement = !1))
            }
            function Le() {
                var e = Qn()
                    , t = Jn();
                y === e && f === t || (y = e,
                    f = t,
                    Se(!0))
            }
            function Ae(e) {
                var t = ["NTY3YnVuZGxlNzg5", "NTU1S2V5Nzc3"]
                    , n = ot(t[0])
                    , o = ot(t[1])
                    , r = void 0 !== b[n + o]
                    , i = "fp_" + e + "Extension";
                G[e] = r ? b[n + o] : b[e + o],
                    m[e] = void 0 !== cn[i] ? new cn[i] : null,
                    m[e] && m[e].c(e)
            }
            function Me(e, t, n) {
                var o = 100 * n
                    , r = 100 / n
                    , i = sn.createElement("div");
                i.className = Rn,
                    uo(t, i);
                var l, a, c = sn.createElement("div");
                c.className = Nn,
                    uo(t, c),
                    Kn(Un(Bn, e), {
                        width: o + "%"
                    }),
                    1 < n && (b.controlArrows && (l = e,
                        a = [Lo('<div class="fp-controlArrow fp-prev"></div>'), Lo('<div class="fp-controlArrow fp-next"></div>')],
                        ho(Un(In, l)[0], a),
                        "#fff" !== b.controlArrowColor && (Kn(Un(Xn, l), {
                            "border-color": "transparent transparent transparent " + b.controlArrowColor
                        }),
                            Kn(Un(Zn, l), {
                                "border-color": "transparent " + b.controlArrowColor + " transparent transparent"
                            })),
                        b.loopHorizontal || ro(Un(Zn, l))),
                        b.slidesNavigation && function (e, t) {
                            so(Lo('<div class="' + Pn + '"><ul></ul></div>'), e);
                            var n = Un(Yn, e)[0];
                            ao(n, "fp-" + b.slidesNavPosition);
                            for (var o = 0; o < t; o++) {
                                var r = Un(Hn, e)[o];
                                so(Lo('<li><a href="#"><span class="fp-sr-only">' + ke(o, "Slide", r) + "</span><span></span></a></li>"), Un("ul", n)[0])
                            }
                            Kn(n, {
                                "margin-left": "-" + n.innerWidth / 2 + "px"
                            }),
                                ao(Un("a", Un("li", n)[0]), mn)
                        }(e, n)),
                    t.forEach(function (e) {
                        Kn(e, {
                            width: r + "%"
                        }),
                            b.verticalCentered && zt(e)
                    });
                var s = Un(zn, e)[0];
                null != s && (0 !== oo(Un(En), yn) || 0 === oo(Un(En), yn) && 0 !== oo(s)) ? (Xt(s, "internal"),
                    ao(s, "fp-initial")) : ao(t[0], mn)
            }
            function Te(e) {
                return b.offsetSections && m.offsetSections ? Math.round(m.offsetSections.getWindowHeight(e)) : Qn()
            }
            function Oe(e, t) {
                t || null != Un(En)[0] || ao(e, mn),
                    o = Un(En)[0],
                    Kn(e, {
                        height: Te(e) + "px"
                    }),
                    b.paddingTop && Kn(e, {
                        "padding-top": b.paddingTop
                    }),
                    b.paddingBottom && Kn(e, {
                        "padding-bottom": b.paddingBottom
                    }),
                    void 0 !== b.sectionsColor[t] && Kn(e, {
                        "background-color": b.sectionsColor[t]
                    }),
                    void 0 !== b.anchors[t] && e.setAttribute("data-anchor", b.anchors[t])
            }
            function ke(e, t, n) {
                var o = "Section" === t ? b.anchors[e] : n.getAttribute("data-anchor");
                return b.navigationTooltips[e] || o || t + " " + (e + 1)
            }
            function Ce() {
                var e, t, n = Un(En)[0];
                ao(n, bn),
                    Ke(n),
                    Je(),
                    qe(n),
                    b.scrollOverflow && b.scrollOverflowHandler.afterLoad(),
                    e = ft(),
                    t = Nt(e.section),
                    e.section && t && (void 0 === t || oo(t) !== oo(o)) || !wo(b.afterLoad) || Xe("afterLoad", {
                        activeSection: n,
                        element: n,
                        direction: null,
                        anchorLink: n.getAttribute("data-anchor"),
                        sectionIndex: oo(n, yn)
                    }),
                    wo(b.afterRender) && Xe("afterRender"),
                    yo(w, "afterRender")
            }
            function He() {
                var e;
                if (yo(w, "onScroll"),
                    !E && (!b.autoScrolling || b.scrollBar || Jt("dragAndMove")) && !qt()) {
                    var t = Jt("dragAndMove") ? Math.abs(m.dragAndMove.getCurrentScroll()) : mo()
                        , n = 0
                        , o = t + Qn() / 2
                        , r = (Jt("dragAndMove") ? m.dragAndMove.getDocumentHeight() : g.offsetHeight - Qn()) === t
                        , i = Un(yn);
                    if (r)
                        n = i.length - 1;
                    else if (t)
                        for (var l = 0; l < i.length; ++l)
                            i[l].offsetTop <= o && (n = l);
                    else
                        n = 0;
                    if (!_n(e = i[n], mn)) {
                        Q = !0;
                        var a, c, s = Un(En)[0], u = oo(s, yn) + 1, f = Ct(e), d = e.getAttribute("data-anchor"), v = oo(e, yn) + 1, p = Un(zn, e)[0], h = {
                            activeSection: s,
                            sectionIndex: v - 1,
                            anchorLink: d,
                            element: e,
                            leavingSection: u,
                            direction: f
                        };
                        p && (c = p.getAttribute("data-anchor"),
                            a = oo(p)),
                            x && (ao(e, mn),
                                co(So(e), mn),
                                Kt("parallax", "afterLoad"),
                                wo(b.onLeave) && Xe("onLeave", h),
                                wo(b.afterLoad) && Xe("afterLoad", h),
                                Jt("resetSliders") && m.resetSliders.apply({
                                    localIsResizing: E,
                                    leavingSection: u
                                }),
                                tt(s),
                                Ke(e),
                                qe(e),
                                kt(d, v - 1),
                                b.anchors.length && (S = d),
                                Pt(a, c, d)),
                            clearTimeout(T),
                            T = setTimeout(function () {
                                Q = !1
                            }, 100)
                    }
                    b.fitToSection && (clearTimeout(O),
                        O = setTimeout(function () {
                            b.fitToSection && Un(En)[0].offsetHeight <= y && ze()
                        }, b.fitToSectionDelay))
                }
            }
            function ze() {
                x && (E = !0,
                    Ze(Un(En)[0]),
                    E = !1)
            }
            function Re(e) {
                if (v.m[e]) {
                    var t = "down" === e ? ve : de;
                    if (Jt("scrollHorizontally") && (t = m.scrollHorizontally.getScrollSection(e, t)),
                        b.scrollOverflow) {
                        var n = b.scrollOverflowHandler.scrollable(Un(En)[0])
                            , o = "down" === e ? "bottom" : "top";
                        if (null != n) {
                            if (!b.scrollOverflowHandler.isScrolled(o, n))
                                return !0;
                            t()
                        } else
                            t()
                    } else
                        t()
                }
            }
            function Ie(e) {
                b.autoScrolling && Be(e) && v.m.up && bo(e)
            }
            function Ne(e) {
                var t = po(e.target, yn) || Un(En)[0];
                if (Be(e)) {
                    b.autoScrolling && bo(e);
                    var n = Zt(e);
                    $ = n.y,
                        q = n.x,
                        Un(In, t).length && Math.abs(K - q) > Math.abs(J - $) ? !a && Math.abs(K - q) > Jn() / 100 * b.touchSensitivity && (q < K ? v.m.right && ge(t) : v.m.left && me(t)) : b.autoScrolling && x && Math.abs(J - $) > cn.innerHeight / 100 * b.touchSensitivity && ($ < J ? Re("down") : J < $ && Re("up"))
                }
            }
            function Be(e) {
                return void 0 === e.pointerType || "mouse" != e.pointerType
            }
            function je(e) {
                if (b.fitToSection && (Y = !1),
                    Be(e)) {
                    var t = Zt(e);
                    J = t.y,
                        K = t.x
                }
            }
            function Pe(e, t) {
                for (var n = 0, o = e.slice(Math.max(e.length - t, 1)), r = 0; r < o.length; r++)
                    n += o[r];
                return Math.ceil(n / t)
            }
            function Ye(e) {
                var t = (new Date).getTime()
                    , n = _n(Un(".fp-completely")[0], Mn);
                if (!v.m.down && !v.m.up)
                    return bo(e),
                        !1;
                if (b.autoScrolling && !u && !n) {
                    var o = (e = e || cn.event).wheelDelta || -e.deltaY || -e.detail
                        , r = Math.max(-1, Math.min(1, o))
                        , i = void 0 !== e.wheelDeltaX || void 0 !== e.deltaX
                        , l = Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta) || Math.abs(e.deltaX) < Math.abs(e.deltaY) || !i;
                    149 < d.length && d.shift(),
                        d.push(Math.abs(o)),
                        b.scrollBar && bo(e);
                    var a = t - ee;
                    if (ee = t,
                        200 < a && (d = []),
                        x && !$t()) {
                        var c = Pe(d, 10);
                        Pe(d, 70) <= c && l && Re(r < 0 ? "down" : "up")
                    }
                    return !1
                }
                b.fitToSection && (Y = !1)
            }
            function We(e, t) {
                var n = null == t ? Un(En)[0] : t
                    , o = Un(In, n)[0];
                if (!(null == o || $t() || a || Un(Hn, o).length < 2)) {
                    var r = Un(zn, o)[0]
                        , i = null;
                    if (null == (i = "left" === e ? $n(r, Hn) : qn(r, Hn))) {
                        if (!b.loopHorizontal)
                            return;
                        var l = So(r);
                        i = "left" === e ? l[l.length - 1] : l[0]
                    }
                    a = !m.test.isTesting,
                        wt(o, i, e)
                }
            }
            function De() {
                for (var e = Un(zn), t = 0; t < e.length; t++)
                    Xt(e[t], "internal")
            }
            function Ve(e) {
                var t = e.offsetHeight
                    , n = e.offsetTop
                    , o = n
                    , r = Jt("dragAndMove") && m.dragAndMove.isGrabbing ? m.dragAndMove.isScrollingDown() : te < n
                    , i = o - y + t
                    , l = b.bigSectionsDestination;
                return y < t ? (r || l) && "bottom" !== l || (o = i) : (r || E && null == to(e)) && (o = i),
                    b.offsetSections && m.offsetSections && (o = m.offsetSections.getSectionPosition(r, o, e)),
                    te = o
            }
            function Ze(e, t, n) {
                if (null != e) {
                    var o, r, i = {
                        element: e,
                        callback: t,
                        isMovementUp: n,
                        dtop: Ve(e),
                        yMovement: Ct(e),
                        anchorLink: e.getAttribute("data-anchor"),
                        sectionIndex: oo(e, yn),
                        activeSlide: Un(zn, e)[0],
                        activeSection: Un(En)[0],
                        leavingSection: oo(Un(En), yn) + 1,
                        localIsResizing: E
                    };
                    if (!(i.activeSection == e && !E || b.scrollBar && mo() === i.dtop && !_n(e, An))) {
                        if (null != i.activeSlide && (o = i.activeSlide.getAttribute("data-anchor"),
                            r = oo(i.activeSlide)),
                            !i.localIsResizing) {
                            var l = i.yMovement;
                            if (void 0 !== n && (l = n ? "up" : "down"),
                                i.direction = l,
                                Qt("dropEffect") && m.dropEffect.onLeave(i),
                                Qt("waterEffect") && m.waterEffect.onLeave(i),
                                wo(b.onLeave) && !1 === Xe("onLeave", i))
                                return
                        }
                        var a;
                        Kt("parallax", "apply", i),
                            Kt("cards", "apply", i),
                            Kt("dropEffect", "apply", i),
                            Kt("waterEffect", "apply", i),
                            b.autoScrolling && b.continuousVertical && void 0 !== i.isMovementUp && (!i.isMovementUp && "up" == i.yMovement || i.isMovementUp && "down" == i.yMovement) && ((c = i).isMovementUp ? go(Un(En)[0], Mo(c.activeSection, yn)) : ho(Un(En)[0], To(c.activeSection, yn).reverse()),
                                Gt(Un(En)[0].offsetTop),
                                De(),
                                c.wrapAroundElements = c.activeSection,
                                c.dtop = c.element.offsetTop,
                                c.yMovement = Ct(c.element),
                                c.leavingSection = oo(c.activeSection, yn) + 1,
                                c.sectionIndex = oo(c.element, yn),
                                yo(Un(fn)[0], "onContinuousVertical", c),
                                i = c),
                            Jt("scrollOverflowReset") && m.scrollOverflowReset.setPrevious(i.activeSection),
                            i.localIsResizing || tt(i.activeSection),
                            b.scrollOverflow && b.scrollOverflowHandler.beforeLeave(),
                            Jt("dropEffect") && b.dropEffect || (ao(e, mn),
                                co(So(e), mn)),
                            Ke(e),
                            b.scrollOverflow && b.scrollOverflowHandler.onLeave(),
                            x = m.test.isTesting,
                            Pt(r, o, i.anchorLink, i.sectionIndex),
                            function (e) {
                                var t = b.scrollingSpeed < 700
                                    , n = t ? 700 : b.scrollingSpeed;
                                if (b.css3 && b.autoScrolling && !b.scrollBar) {
                                    var o = "translate3d(0px, -" + Math.round(e.dtop) + "px, 0px)";
                                    It(o, !0),
                                        b.scrollingSpeed ? (clearTimeout(A),
                                            A = setTimeout(function () {
                                                _e(e),
                                                    x = !t
                                            }, b.scrollingSpeed)) : _e(e)
                                } else {
                                    var r = Fe(e.dtop);
                                    m.test.top = -e.dtop + "px",
                                        Kn(s, {
                                            "scroll-behavior": "unset"
                                        }),
                                        nn(r.element, r.options, b.scrollingSpeed, function () {
                                            b.scrollBar ? setTimeout(function () {
                                                _e(e)
                                            }, 30) : (_e(e),
                                                x = !t)
                                        })
                                }
                                t && (clearTimeout(D),
                                    D = setTimeout(function () {
                                        x = !0
                                    }, n))
                            }(i),
                            S = i.anchorLink,
                            kt(i.anchorLink, null == (a = i).wrapAroundElements ? a.sectionIndex : a.isMovementUp ? Un(yn).length - 1 : 0)
                    }
                }
                var c
            }
            function Xe(e, t) {
                var n, o, r, i, l = (o = e,
                    r = t,
                    (i = b.v2compatible ? {
                        afterRender: function () {
                            return [w]
                        },
                        onLeave: function () {
                            return [r.activeSection, r.leavingSection, r.sectionIndex + 1, r.direction]
                        },
                        afterLoad: function () {
                            return [r.element, r.anchorLink, r.sectionIndex + 1]
                        },
                        afterSlideLoad: function () {
                            return [r.destiny, r.anchorLink, r.sectionIndex + 1, r.slideAnchor, r.slideIndex]
                        },
                        onSlideLeave: function () {
                            return [r.prevSlide, r.anchorLink, r.sectionIndex + 1, r.prevSlideIndex, r.direction, r.slideIndex]
                        }
                    } : {
                        afterRender: function () {
                            return {
                                section: Ge(Un(En)[0]),
                                slide: Ue(Un(zn, Un(En)[0])[0])
                            }
                        },
                        onLeave: function () {
                            return {
                                origin: Ge(r.activeSection),
                                destination: Ge(r.element),
                                direction: r.direction
                            }
                        },
                        afterLoad: function () {
                            return i.onLeave()
                        },
                        afterSlideLoad: function () {
                            return {
                                section: Ge(r.section),
                                origin: Ue(r.prevSlide),
                                destination: Ue(r.destiny),
                                direction: r.direction
                            }
                        },
                        onSlideLeave: function () {
                            return i.afterSlideLoad()
                        }
                    })[o]());
                if (b.v2compatible) {
                    if (!1 === b[e].apply(l[0], l.slice(1)))
                        return !1
                } else if (yo(w, e, l),
                    !1 === b[e].apply(l[Object.keys(l)[0]], (n = l,
                        Object.keys(n).map(function (e) {
                            return n[e]
                        }))))
                    return !1;
                return !0
            }
            function Ge(e) {
                return e ? new ln(e) : null
            }
            function Ue(e) {
                return e ? new an(e) : null
            }
            function Fe(e) {
                var t = {};
                return b.autoScrolling && !b.scrollBar ? (t.options = -e,
                    t.element = Un(fn)[0]) : (t.options = e,
                        t.element = cn),
                    t
            }
            function _e(e) {
                var t;
                null != (t = e).wrapAroundElements && (t.isMovementUp ? go(Un(yn)[0], t.wrapAroundElements) : ho(Un(yn)[Un(yn).length - 1], t.wrapAroundElements),
                    Gt(Un(En)[0].offsetTop),
                    De(),
                    t.sectionIndex = oo(t.element, yn),
                    t.leavingSection = oo(t.activeSection, yn) + 1),
                    wo(b.afterLoad) && !e.localIsResizing && Xe("afterLoad", e),
                    b.scrollOverflow && b.scrollOverflowHandler.afterLoad(),
                    Kt("parallax", "afterLoad"),
                    Kt("dropEffect", "afterLoad"),
                    Kt("waterEffect", "afterLoad"),
                    Kt("scrollOverflowReset", "reset"),
                    Jt("resetSliders") && m.resetSliders.apply(e),
                    e.localIsResizing || qe(e.element),
                    ao(e.element, bn),
                    co(So(e.element), bn),
                    Je(),
                    x = !0,
                    wo(e.callback) && e.callback()
            }
            function Qe(e, t) {
                e.setAttribute(t, e.getAttribute("data-" + t)),
                    e.removeAttribute("data-" + t)
            }
            function Je() {
                var e = Un(".fp-auto-height")[0] || be() && Un(".fp-auto-height-responsive")[0];
                b.lazyLoading && e && Un(yn + ":not(" + Sn + ")").forEach(function (e) {
                    var t, n, o;
                    t = e.getBoundingClientRect(),
                        n = t.top,
                        o = t.bottom,
                        (n + 2 < y && 0 < n || 2 < o && o < y) && Ke(e)
                })
            }
            function Ke(o) {
                b.lazyLoading && Un("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]", nt(o)).forEach(function (n) {
                    if (["src", "srcset"].forEach(function (e) {
                        var t = n.getAttribute("data-" + e);
                        null != t && t && (Qe(n, e),
                            n.addEventListener("load", function () {
                                $e(o)
                            }))
                    }),
                        Eo(n, "source")) {
                        var e = po(n, "video, audio");
                        e && (e.load(),
                            e.onloadeddata = function () {
                                $e(o)
                            }
                        )
                    }
                })
            }
            function $e(e) {
                b.scrollOverflow && (clearTimeout(W),
                    W = setTimeout(function () {
                        _n(g, dn) || p.createScrollBar(e)
                    }, 200))
            }
            function qe(e) {
                var t = nt(e);
                Un("video, audio", t).forEach(function (e) {
                    e.hasAttribute("data-autoplay") && "function" == typeof e.play && e.play()
                }),
                    Un('iframe[src*="youtube.com/embed/"]', t).forEach(function (e) {
                        e.hasAttribute("data-autoplay") && et(e),
                            e.onload = function () {
                                e.hasAttribute("data-autoplay") && et(e)
                            }
                    })
            }
            function et(e) {
                e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
            }
            function tt(e) {
                var t = nt(e);
                Un("video, audio", t).forEach(function (e) {
                    e.hasAttribute("data-keepplaying") || "function" != typeof e.pause || e.pause()
                }),
                    Un('iframe[src*="youtube.com/embed/"]', t).forEach(function (e) {
                        /youtube\.com\/embed\//.test(e.getAttribute("src")) && !e.hasAttribute("data-keepplaying") && e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
                    })
            }
            function nt(e) {
                var t = Un(zn, e);
                return t.length && (e = t[0]),
                    e
            }
            function ot(e) {
                var s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                function o(e) {
                    var t, n, o, r, i, l, a = "", c = 0;
                    for (e = e.replace(/[^A-Za-z0-9+/=]/g, ""); c < e.length;)
                        t = s.indexOf(e.charAt(c++)) << 2 | (r = s.indexOf(e.charAt(c++))) >> 4,
                            n = (15 & r) << 4 | (i = s.indexOf(e.charAt(c++))) >> 2,
                            o = (3 & i) << 6 | (l = s.indexOf(e.charAt(c++))),
                            a += String.fromCharCode(t),
                            64 != i && (a += String.fromCharCode(n)),
                            64 != l && (a += String.fromCharCode(o));
                    return a = function (e) {
                        for (var t, n = "", o = 0, r = 0, i = 0; o < e.length;)
                            (r = e.charCodeAt(o)) < 128 ? (n += String.fromCharCode(r),
                                o++) : 191 < r && r < 224 ? (i = e.charCodeAt(o + 1),
                                    n += String.fromCharCode((31 & r) << 6 | 63 & i),
                                    o += 2) : (i = e.charCodeAt(o + 1),
                                        t = e.charCodeAt(o + 2),
                                        n += String.fromCharCode((15 & r) << 12 | (63 & i) << 6 | 63 & t),
                                        o += 3);
                        return n
                    }(a)
                }
                function r(e) {
                    return e.slice(3).slice(0, -3)
                }
                return function (e) {
                    var t = e.split("_");
                    if (1 < t.length) {
                        var n = t[1];
                        return e.replace(r(t[1]), "").split("_")[0] + "_" + o(n.slice(3).slice(0, -3))
                    }
                    return r(e)
                }(o(e))
            }
            function rt(g) {
                var m = void 0 !== G[g] && G[g].length
                    , e = []
                    , S = !1;
                return lo(G[g]) ? e = G[g] : e.push(G[g]),
                    e.forEach(function (e) {
                        var t = function () {
                            if (sn.domain.length) {
                                for (var e = sn.domain.replace(/^(www\.)/, "").split("."); 2 < e.length;)
                                    e.shift();
                                return e.join(".").replace(/(^\.*)|(\.*$)/g, "")
                            }
                            return ""
                        }()
                            , n = ["MTM0bG9jYWxob3N0MjM0", "MTM0MC4xMjM0", "MTM0anNoZWxsLm5ldDIzNA==", "UDdDQU5ZNlNN", "NTY3YnVuZGxlNzg5", "NTU1S2V5Nzc3"]
                            , o = ot(n[0])
                            , r = ot(n[1])
                            , i = ot(n[2])
                            , l = ot(n[3])
                            , a = ot(n[4])
                            , c = ot(n[5])
                            , s = void 0 !== b[a + c];
                        m = m || s;
                        var u = [o, r, i].indexOf(t) < 0 && 0 !== t.length;
                        if (!m && !s && u)
                            return !1;
                        var f = m ? ot(e) : ""
                            , d = 1 < (f = f.split("_")).length && -1 < f[1].indexOf(g, f[1].length - g.length)
                            , v = 1 < f.length && -1 < f[1].toLowerCase().indexOf(a)
                            , p = f[0].indexOf(t, f[0].length - t.length) < 0
                            , h = d || v;
                        S = S || !(p && u && l != f[0]) && h || !u
                    }),
                    S
            }
            function it(e) {
                e.forEach(function (e) {
                    if (e.removedNodes[0] && e.removedNodes[0].isEqualNode(F)) {
                        clearTimeout(_);
                        var t = ot("bDIwc2V0VGltZW91dDAzbA==");
                        _ = cn[t](lt, 900)
                    }
                })
            }
            function lt() {
                I = !1
            }
            function at(e) {
                if (F = sn.createElement("div"),
                    U = ot("MTIzPGRpdj48YSBocmVmPSJodHRwOi8vYWx2YXJvdHJpZ28uY29tL2Z1bGxQYWdlL2V4dGVuc2lvbnMvIiBzdHlsZT0iY29sb3I6ICNmZmYgIWltcG9ydGFudDsgdGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudDsiPlVubGljZW5zZWQgZnVsbFBhZ2UuanMgRXh0ZW5zaW9uPC9hPjwvZGl2PjEyMw=="),
                    N || (U = U.replace("extensions/", "").replace("Extension", "")),
                    F.innerHTML = U,
                    F = F.firstChild,
                    "MutationObserver" in cn && new MutationObserver(it).observe(sn.body, {
                        childList: !0,
                        subtree: !1
                    }),
                    (!N || Jt(e) && m[e]) && (!rt(e) || !N)) {
                    ct();
                    var t = ot("MzQ1c2V0SW50ZXJ2YWwxMjM=");
                    cn[t](ct, 2e3)
                }
            }
            function ct() {
                F && (I || (Math.random() < .5 ? Oo(g, F) : so(F, g),
                    I = !0),
                    F.setAttribute("style", ot("MTIzei1pbmRleDo5OTk5OTk5O3Bvc2l0aW9uOmZpeGVkO3RvcDoyMHB4O2JvdHRvbTphdXRvO2xlZnQ6MjBweDtyaWdodDphdXRvO2JhY2tncm91bmQ6cmVkO3BhZGRpbmc6N3B4IDE1cHg7Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6YXJpYWw7Y29sb3I6I2ZmZjtkaXNwbGF5OmlubGluZS1ibG9jazt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MTtoZWlnaHQ6YXV0bzt3aWR0aDphdXRvO3pvb206MTttYXJnaW46YXV0bztib3JkZXI6bm9uZTt2aXNpYmlsaXR5OnZpc2libGU7Y2xpcC1wYXRoOm5vbmU7MTIz").replace(/;/g, ot("MTIzICFpbXBvcnRhbnQ7MzQ1"))))
            }
            function st() {
                var e = ft()
                    , t = e.section
                    , n = e.slide;
                t && (b.animateAnchor ? Bt(t, n) : pe(t, n))
            }
            function ut(e) {
                if (!Q && !b.lockAnchors) {
                    var t = ft()
                        , n = t.section
                        , o = t.slide
                        , r = void 0 === S
                        , i = void 0 === S && void 0 === o && !a;
                    n && n.length && (n && n !== S && !r || i && !$t() || !a && l != o && !$t()) && Bt(n, o)
                }
            }
            function ft() {
                var e, t, n = cn.location.hash;
                if (n.length) {
                    var o = n.replace("#", "").split("/")
                        , r = -1 < n.indexOf("#/");
                    e = r ? "/" + o[1] : decodeURIComponent(o[0]);
                    var i = r ? o[2] : o[1];
                    i && i.length && (t = decodeURIComponent(i))
                }
                return {
                    section: e,
                    slide: t
                }
            }
            function dt(e) {
                clearTimeout(k);
                var t = sn.activeElement
                    , n = e.keyCode;
                9 === n ? function (e) {
                    var t, n, o, r, i, l, a, c = e.shiftKey, s = sn.activeElement, u = gt(nt(Un(En)[0]));
                    function f(e) {
                        return bo(e),
                            u[0] ? u[0].focus() : null
                    }
                    (t = e,
                        n = gt(sn),
                        o = n.indexOf(sn.activeElement),
                        r = t.shiftKey ? o - 1 : o + 1,
                        i = n[r],
                        l = Ue(po(i, Hn)),
                        a = Ge(po(i, yn)),
                        l || a) && (s ? null == po(s, En + "," + En + " " + zn) && (s = f(e)) : f(e),
                            (!c && s == u[u.length - 1] || c && s == u[0]) && bo(e))
                }(e) : Eo(t, "textarea") || Eo(t, "input") || Eo(t, "select") || "true" === t.getAttribute("contentEditable") || "" === t.getAttribute("contentEditable") || !b.keyboardScrolling || !b.autoScrolling || (-1 < [40, 38, 32, 33, 34].indexOf(n) && bo(e),
                    u = e.ctrlKey,
                    k = setTimeout(function () {
                        !function (e) {
                            var t = e.shiftKey
                                , n = sn.activeElement
                                , o = Eo(n, "video") || Eo(n, "audio");
                            if (x || !([37, 39].indexOf(e.keyCode) < 0))
                                switch (e.keyCode) {
                                    case 38:
                                    case 33:
                                        v.k.up && de();
                                        break;
                                    case 32:
                                        if (t && v.k.up && !o) {
                                            de();
                                            break
                                        }
                                    case 40:
                                    case 34:
                                        v.k.down && (32 === e.keyCode && o || ve());
                                        break;
                                    case 36:
                                        v.k.up && he(1);
                                        break;
                                    case 35:
                                        v.k.down && he(Un(yn).length);
                                        break;
                                    case 37:
                                        v.k.left && me();
                                        break;
                                    case 39:
                                        v.k.right && ge()
                                }
                        }(e)
                    }, 150))
            }
            function vt(e) {
                t && (u = e.ctrlKey)
            }
            function pt(e) {
                2 == e.which && (ne = e.pageY,
                    w.addEventListener("mousemove", bt))
            }
            function ht(e) {
                2 == e.which && w.removeEventListener("mousemove", bt)
            }
            function gt(e) {
                return [].slice.call(Un(B, e)).filter(function (e) {
                    return "-1" !== e.getAttribute("tabindex") && null !== e.offsetParent
                })
            }
            function mt() {
                t = !0
            }
            function St() {
                u = t = !1
            }
            function bt(e) {
                b.autoScrolling && (x && (e.pageY < ne && v.m.up ? de() : e.pageY > ne && v.m.down && ve()),
                    ne = e.pageY)
            }
            function wt(e, t, n) {
                var o = po(e, yn)
                    , r = {
                        slides: e,
                        destiny: t,
                        direction: n,
                        destinyPos: {
                            left: t.offsetLeft
                        },
                        slideIndex: oo(t),
                        section: o,
                        sectionIndex: oo(o, yn),
                        anchorLink: o.getAttribute("data-anchor"),
                        slidesNav: Un(Yn, o)[0],
                        slideAnchor: Wt(t),
                        prevSlide: Un(zn, o)[0],
                        prevSlideIndex: oo(Un(zn, o)[0]),
                        localIsResizing: E
                    };
                r.xMovement = Ht(r.prevSlideIndex, r.slideIndex),
                    r.direction = r.direction ? r.direction : r.xMovement,
                    r.localIsResizing || (x = !1),
                    Kt("parallax", "applyHorizontal", r),
                    Kt("cards", "apply", r),
                    Kt("dropEffect", "apply", r),
                    Kt("waterEffect", "apply", r),
                    b.onSlideLeave && !r.localIsResizing && "none" !== r.xMovement && wo(b.onSlideLeave) && !1 === Xe("onSlideLeave", r) ? a = !1 : (Jt("dropEffect") && b.dropEffect || (ao(t, mn),
                        co(So(t), mn)),
                        r.localIsResizing || (tt(r.prevSlide),
                            Ke(t)),
                        yt(r),
                        _n(o, mn) && !r.localIsResizing && Pt(r.slideIndex, r.slideAnchor, r.anchorLink, r.sectionIndex),
                        m.continuousHorizontal && m.continuousHorizontal.apply(r),
                        qt() ? Et(r) : xt(e, r, !0),
                        b.interlockedSlides && m.interlockedSlides && (Jt("continuousHorizontal") && void 0 !== n && n !== r.xMovement || m.interlockedSlides.apply(r)))
            }
            function yt(e) {
                !b.loopHorizontal && b.controlArrows && (xo(Un(Zn, e.section), 0 !== e.slideIndex),
                    xo(Un(Xn, e.section), null != to(e.destiny)))
            }
            function Et(e) {
                var t, n;
                m.continuousHorizontal && m.continuousHorizontal.afterSlideLoads(e),
                    t = e.slidesNav,
                    n = e.slideIndex,
                    b.slidesNavigation && null != t && (co(Un(Sn, t), mn),
                        ao(Un("a", Un("li", t)[n]), mn)),
                    e.localIsResizing || (Kt("parallax", "afterSlideLoads"),
                        Kt("scrollOverflowReset", "setPrevious", e.prevSlide),
                        Kt("scrollOverflowReset", "reset"),
                        wo(b.afterSlideLoad) && Xe("afterSlideLoad", e),
                        x = !0,
                        qe(e.destiny)),
                    a = !1,
                    Jt("interlockedSlides") && m.interlockedSlides.apply(e)
            }
            function xt(e, t, n) {
                var o = t.destinyPos;
                if (b.css3) {
                    var r = "translate3d(-" + Math.round(o.left) + "px, 0px, 0px)";
                    m.test.translate3dH[t.sectionIndex] = r,
                        Jt("dragAndMove") && void 0 !== t.isInterlockedSlide || Tt(Un(Bn, e)),
                        Kn(Un(Bn, e), Ut(r)),
                        M = setTimeout(function () {
                            n && Et(t)
                        }, b.scrollingSpeed)
                } else
                    m.test.left[t.sectionIndex] = Math.round(o.left),
                        nn(e, Math.round(o.left), b.scrollingSpeed, function () {
                            n && Et(t)
                        })
            }
            function Lt() {
                clearTimeout(h),
                    h = setTimeout(function () {
                        for (var e = 0; e < 4; e++)
                            L = setTimeout(At, 200 * e)
                    }, 200)
            }
            function At() {
                if (E = !0,
                    yo(w, "onResize"),
                    Mt(),
                    r) {
                    var e = sn.activeElement;
                    if (!Eo(e, "textarea") && !Eo(e, "input") && !Eo(e, "select")) {
                        var t = Qn();
                        Math.abs(t - oe) > 20 * Math.max(oe, t) / 100 && (Se(!0),
                            oe = t)
                    }
                } else
                    Le();
                E = !1
            }
            function Mt() {
                var e = b.responsive || b.responsiveWidth
                    , t = b.responsiveHeight
                    , n = e && cn.innerWidth < e
                    , o = t && cn.innerHeight < t;
                e && t ? we(n || o) : e ? we(n) : t && we(o)
            }
            function Tt(e) {
                var t = "all " + b.scrollingSpeed + "ms " + b.easingcss3;
                return co(e, vn),
                    Kn(e, {
                        "-webkit-transition": t,
                        transition: t
                    })
            }
            function Ot(e) {
                return ao(e, vn)
            }
            function kt(e, t) {
                var n, o, r, i;
                n = e,
                    Un(b.menu).forEach(function (e) {
                        b.menu && null != e && (co(Un(Sn, e), mn),
                            ao(Un('[data-menuanchor="' + n + '"]', e), mn))
                    }),
                    o = e,
                    r = t,
                    i = Un(On)[0],
                    b.navigation && null != i && "none" !== i.style.display && (co(Un(Sn, Un(On)[0]), mn),
                        ao(o ? Un('a[href="#' + o + '"]', Un(On)[0]) : Un("a", Un("li", Un(On)[0])[r]), mn))
            }
            function Ct(e) {
                var t = oo(Un(En)[0], yn)
                    , n = oo(e, yn);
                return t == n ? "none" : n < t ? "up" : "down"
            }
            function Ht(e, t) {
                return e == t ? "none" : t < e ? "left" : "right"
            }
            function zt(e) {
                if (!_n(e, jn)) {
                    var t = sn.createElement("div");
                    t.className = xn,
                        t.style.height = Rt(e) + "px",
                        ao(e, jn),
                        fo(e, t)
                }
            }
            function Rt(e) {
                var t = Te(e);
                if (b.paddingTop || b.paddingBottom) {
                    var n = e;
                    _n(n, wn) || (n = po(e, yn)),
                        t -= parseInt(getComputedStyle(n)["padding-top"]) + parseInt(getComputedStyle(n)["padding-bottom"])
                }
                return t
            }
            function It(e, t) {
                t ? Tt(w) : Ot(w),
                    clearTimeout(H),
                    Kn(w, Ut(e)),
                    m.test.translate3d = e,
                    H = setTimeout(function () {
                        co(w, vn)
                    }, 10)
            }
            function Nt(e) {
                var t = Un(yn + '[data-anchor="' + e + '"]', w)[0];
                if (!t) {
                    var n = void 0 !== e ? e - 1 : 0;
                    t = Un(yn)[n]
                }
                return t
            }
            function Bt(e, t) {
                var n = Nt(e);
                if (null != n) {
                    var o, r, i, l = (null == (i = Un(Hn + '[data-anchor="' + (o = t) + '"]', r = n)[0]) && (o = void 0 !== o ? o : 0,
                        i = Un(Hn, r)[o]),
                        i);
                    Wt(n) === S || _n(n, mn) ? jt(l) : Ze(n, function () {
                        jt(l)
                    })
                }
            }
            function jt(e) {
                null != e && wt(po(e, In), e)
            }
            function Pt(e, t, n, o) {
                var r = "";
                b.anchors.length && !b.lockAnchors && (e ? (null != n && (r = n),
                    null == t && (t = e),
                    Yt(r + "/" + (l = t))) : (null != e && (l = t),
                        Yt(n))),
                    Dt()
            }
            function Yt(e) {
                if (b.recordHistory)
                    location.hash = e;
                else if (r || i)
                    cn.history.replaceState(void 0, void 0, "#" + e);
                else {
                    var t = cn.location.href.split("#")[0];
                    cn.location.replace(t + "#" + e)
                }
            }
            function Wt(e) {
                if (!e)
                    return null;
                var t = e.getAttribute("data-anchor")
                    , n = oo(e);
                return null == t && (t = n),
                    t
            }
            function Dt() {
                var e = Un(En)[0]
                    , t = Un(zn, e)[0]
                    , n = Wt(e)
                    , o = Wt(t)
                    , r = String(n);
                t && (r = r + "-" + o),
                    r = r.replace("/", "-").replace("#", "");
                var i = new RegExp("\\b\\s?" + gn + "-[^\\s]+\\b", "g");
                g.className = g.className.replace(i, ""),
                    ao(g, gn + "-" + r)
            }
            function Vt() {
                return cn.PointerEvent ? {
                    down: "pointerdown",
                    move: "pointermove"
                } : {
                    down: "MSPointerDown",
                    move: "MSPointerMove"
                }
            }
            function Zt(e) {
                var t = [];
                return t.y = void 0 !== e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY,
                    t.x = void 0 !== e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX,
                    i && Be(e) && b.scrollBar && void 0 !== e.touches && (t.y = e.touches[0].pageY,
                        t.x = e.touches[0].pageX),
                    t
            }
            function Xt(e, t) {
                le(0, "internal"),
                    void 0 !== t && (E = !0),
                    wt(po(e, In), e),
                    void 0 !== t && (E = !1),
                    le(V.scrollingSpeed, "internal")
            }
            function Gt(e) {
                var t = Math.round(e);
                if (b.css3 && b.autoScrolling && !b.scrollBar)
                    It("translate3d(0px, -" + t + "px, 0px)", !1);
                else if (b.autoScrolling && !b.scrollBar)
                    Kn(w, {
                        top: -t + "px"
                    }),
                        m.test.top = -t + "px";
                else {
                    var n = Fe(t);
                    on(n.element, n.options)
                }
            }
            function Ut(e) {
                return {
                    "-webkit-transform": e,
                    "-moz-transform": e,
                    "-ms-transform": e,
                    transform: e
                }
            }
            function Ft(t, e, n) {
                "all" !== e ? v[n][e] = t : Object.keys(v[n]).forEach(function (e) {
                    v[n][e] = t
                })
            }
            function _t(e) {
                return Kn(e, {
                    "-webkit-transition": "none",
                    transition: "none"
                })
            }
            function Qt(e) {
                return void 0 !== cn["fp_" + e + "Extension"]
            }
            function Jt(e) {
                return null !== b[e] && "[object Array]" === Object.prototype.toString.call(b[e]) ? b[e].length && m[e] : b[e] && m[e]
            }
            function Kt(e, t, n) {
                if (Jt(e))
                    return m[e][t](n)
            }
            function $t() {
                return Jt("dragAndMove") && m.dragAndMove.isAnimating
            }
            function qt() {
                return Jt("dragAndMove") && m.dragAndMove.isGrabbing
            }
            function en(e, t, n) {
                b[e] = t,
                    "internal" !== n && (V[e] = t)
            }
            function tn() {
                var e = "31EB1867-F27C4C2E-90C981D3-01B86BEC"
                    , t = "font-size: 15px;background:yellow;";
                n ? e && e.length < 20 && (console.warn("%c This website was made using fullPage.js slider. More info on the following website:", t),
                    console.warn("%c https://alvarotrigo.com/fullPage/", t)) : (Gn("error", "Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:"),
                        Gn("error", "https://github.com/alvarotrigo/fullPage.js#options")),
                    _n(c, hn) ? Gn("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (b.continuousVertical && (b.loopTop || b.loopBottom) && (b.continuousVertical = !1,
                        Gn("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),
                        !b.scrollOverflow || !b.scrollBar && b.autoScrolling || Gn("warn", "Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"),
                        !b.continuousVertical || !b.scrollBar && b.autoScrolling || (b.continuousVertical = !1,
                            Gn("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),
                        b.scrollOverflow && null == b.scrollOverflowHandler && (b.scrollOverflow = !1,
                            Gn("error", "The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")),
                        b.anchors.forEach(function (t) {
                            var e = [].slice.call(Un("[name]")).filter(function (e) {
                                return e.getAttribute("name") && e.getAttribute("name").toLowerCase() == t.toLowerCase()
                            })
                                , n = [].slice.call(Un("[id]")).filter(function (e) {
                                    return e.getAttribute("id") && e.getAttribute("id").toLowerCase() == t.toLowerCase()
                                });
                            if (n.length || e.length) {
                                Gn("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");
                                var o = n.length ? "id" : "name";
                                (n.length || e.length) && Gn("error", '"' + t + '" is is being used by another element `' + o + "` property")
                            }
                        }))
            }
            function nn(t, n, o, r) {
                var e, i = (e = t).self != cn && _n(e, Rn) ? e.scrollLeft : !b.autoScrolling || b.scrollBar ? mo() : e.offsetTop, l = n - i, a = 0;
                Y = !0;
                var c = function () {
                    if (Y) {
                        var e = n;
                        a += 20,
                            o && (e = cn.fp_easings[b.easing](a, i, l, o)),
                            on(t, e),
                            a < o ? setTimeout(c, 20) : void 0 !== r && r()
                    } else
                        a < o && r()
                };
                c()
            }
            function on(e, t) {
                !b.autoScrolling || b.scrollBar || e.self != cn && _n(e, Rn) ? e.self != cn && _n(e, Rn) ? e.scrollLeft = t : e.scrollTo(0, t) : e.style.top = t + "px"
            }
            function rn(e, t) {
                this.anchor = e.getAttribute("data-anchor"),
                    this.item = e,
                    this.index = oo(e, t),
                    this.isLast = this.index === e.parentElement.querySelectorAll(t).length - 1,
                    this.isFirst = !this.index
            }
            function ln(e) {
                rn.call(this, e, yn)
            }
            function an(e) {
                rn.call(this, e, Hn)
            }
            tn()
        }
}),
    window.jQuery && window.fullpage && function (t, n) {
        "use strict";
        t && n ? t.fn.fullpage = function (e) {
            e = t.extend({}, e, {
                $: t
            });
            new n(this[0], e)
        }
            : window.fp_utils.showError("error", "jQuery is required to use the jQuery fullpage adapter!")
    }(window.jQuery, window.fullpage);

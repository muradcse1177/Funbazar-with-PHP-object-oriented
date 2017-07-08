(function(k, f, c, j, d, l, g) { /*! Jssor */
    new(function() {});
    var e = k.$JssorEasing$ = {
            $EaseSwing: function(a) {
                return -c.cos(a * c.PI) / 2 + .5
            },
            $EaseLinear: function(a) {
                return a
            },
            $EaseInQuad: function(a) {
                return a * a
            },
            $EaseOutQuad: function(a) {
                return -a * (a - 2)
            },
            $EaseInOutQuad: function(a) {
                return (a *= 2) < 1 ? 1 / 2 * a * a : -1 / 2 * (--a * (a - 2) - 1)
            },
            $EaseInCubic: function(a) {
                return a * a * a
            },
            $EaseOutCubic: function(a) {
                return (a -= 1) * a * a + 1
            },
            $EaseInOutCubic: function(a) {
                return (a *= 2) < 1 ? 1 / 2 * a * a * a : 1 / 2 * ((a -= 2) * a * a + 2)
            },
            $EaseInQuart: function(a) {
                return a * a * a * a
            },
            $EaseOutQuart: function(a) {
                return -((a -= 1) * a * a * a - 1)
            },
            $EaseInOutQuart: function(a) {
                return (a *= 2) < 1 ? 1 / 2 * a * a * a * a : -1 / 2 * ((a -= 2) * a * a * a - 2)
            },
            $EaseInQuint: function(a) {
                return a * a * a * a * a
            },
            $EaseOutQuint: function(a) {
                return (a -= 1) * a * a * a * a + 1
            },
            $EaseInOutQuint: function(a) {
                return (a *= 2) < 1 ? 1 / 2 * a * a * a * a * a : 1 / 2 * ((a -= 2) * a * a * a * a + 2)
            },
            $EaseInSine: function(a) {
                return 1 - c.cos(a * c.PI / 2)
            },
            $EaseOutSine: function(a) {
                return c.sin(a * c.PI / 2)
            },
            $EaseInOutSine: function(a) {
                return -1 / 2 * (c.cos(c.PI * a) - 1)
            },
            $EaseInExpo: function(a) {
                return a == 0 ? 0 : c.pow(2, 10 * (a - 1))
            },
            $EaseOutExpo: function(a) {
                return a == 1 ? 1 : -c.pow(2, -10 * a) + 1
            },
            $EaseInOutExpo: function(a) {
                return a == 0 || a == 1 ? a : (a *= 2) < 1 ? 1 / 2 * c.pow(2, 10 * (a - 1)) : 1 / 2 * (-c.pow(2, -10 * --a) + 2)
            },
            $EaseInCirc: function(a) {
                return -(c.sqrt(1 - a * a) - 1)
            },
            $EaseOutCirc: function(a) {
                return c.sqrt(1 - (a -= 1) * a)
            },
            $EaseInOutCirc: function(a) {
                return (a *= 2) < 1 ? -1 / 2 * (c.sqrt(1 - a * a) - 1) : 1 / 2 * (c.sqrt(1 - (a -= 2) * a) + 1)
            },
            $EaseInElastic: function(a) {
                if (!a || a == 1) return a;
                var b = .3,
                    d = .075;
                return -(c.pow(2, 10 * (a -= 1)) * c.sin((a - d) * 2 * c.PI / b))
            },
            $EaseOutElastic: function(a) {
                if (!a || a == 1) return a;
                var b = .3,
                    d = .075;
                return c.pow(2, -10 * a) * c.sin((a - d) * 2 * c.PI / b) + 1
            },
            $EaseInOutElastic: function(a) {
                if (!a || a == 1) return a;
                var b = .45,
                    d = .1125;
                return (a *= 2) < 1 ? -.5 * c.pow(2, 10 * (a -= 1)) * c.sin((a - d) * 2 * c.PI / b) : c.pow(2, -10 * (a -= 1)) * c.sin((a - d) * 2 * c.PI / b) * .5 + 1
            },
            $EaseInBack: function(a) {
                var b = 1.70158;
                return a * a * ((b + 1) * a - b)
            },
            $EaseOutBack: function(a) {
                var b = 1.70158;
                return (a -= 1) * a * ((b + 1) * a + b) + 1
            },
            $EaseInOutBack: function(a) {
                var b = 1.70158;
                return (a *= 2) < 1 ? 1 / 2 * a * a * (((b *= 1.525) + 1) * a - b) : 1 / 2 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2)
            },
            $EaseInBounce: function(a) {
                return 1 - e.$EaseOutBounce(1 - a)
            },
            $EaseOutBounce: function(a) {
                return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
            },
            $EaseInOutBounce: function(a) {
                return a < 1 / 2 ? e.$EaseInBounce(a * 2) * .5 : e.$EaseOutBounce(a * 2 - 1) * .5 + .5
            },
            $EaseGoBack: function(a) {
                return 1 - c.abs(2 - 1)
            },
            $EaseInWave: function(a) {
                return 1 - c.cos(a * c.PI * 2)
            },
            $EaseOutWave: function(a) {
                return c.sin(a * c.PI * 2)
            },
            $EaseOutJump: function(a) {
                return 1 - ((a *= 2) < 1 ? (a = 1 - a) * a * a : (a -= 1) * a * a)
            },
            $EaseInJump: function(a) {
                return (a *= 2) < 1 ? a * a * a : (a = 2 - a) * a * a
            }
        },
        h = k.$Jease$ = {
            $Swing: e.$EaseSwing,
            $Linear: e.$EaseLinear,
            $InQuad: e.$EaseInQuad,
            $OutQuad: e.$EaseOutQuad,
            $InOutQuad: e.$EaseInOutQuad,
            $InCubic: e.$EaseInCubic,
            $OutCubic: e.$EaseOutCubic,
            $InOutCubic: e.$EaseInOutCubic,
            $InQuart: e.$EaseInQuart,
            $OutQuart: e.$EaseOutQuart,
            $InOutQuart: e.$EaseInOutQuart,
            $InQuint: e.$EaseInQuint,
            $OutQuint: e.$EaseOutQuint,
            $InOutQuint: e.$EaseInOutQuint,
            $InSine: e.$EaseInSine,
            $OutSine: e.$EaseOutSine,
            $InOutSine: e.$EaseInOutSine,
            $InExpo: e.$EaseInExpo,
            $OutExpo: e.$EaseOutExpo,
            $InOutExpo: e.$EaseInOutExpo,
            $InCirc: e.$EaseInCirc,
            $OutCirc: e.$EaseOutCirc,
            $InOutCirc: e.$EaseInOutCirc,
            $InElastic: e.$EaseInElastic,
            $OutElastic: e.$EaseOutElastic,
            $InOutElastic: e.$EaseInOutElastic,
            $InBack: e.$EaseInBack,
            $OutBack: e.$EaseOutBack,
            $InOutBack: e.$EaseInOutBack,
            $InBounce: e.$EaseInBounce,
            $OutBounce: e.$EaseOutBounce,
            $InOutBounce: e.$EaseInOutBounce,
            $GoBack: e.$EaseGoBack,
            $InWave: e.$EaseInWave,
            $OutWave: e.$EaseOutWave,
            $OutJump: e.$EaseOutJump,
            $InJump: e.$EaseInJump
        };
    var b = new function() {
        var h = this,
            Ab = /\S+/g,
            L = 1,
            jb = 2,
            nb = 3,
            mb = 4,
            rb = 5,
            M, s = 0,
            i = 0,
            t = 0,
            z = 0,
            A = 0,
            D = navigator,
            vb = D.appName,
            o = D.userAgent,
            q = parseFloat;

        function Jb() {
            if (!M) {
                M = {
                    Wf: "ontouchstart" in k || "createTouch" in f
                };
                var a;
                if (D.pointerEnabled || (a = D.msPointerEnabled)) M.md = a ? "msTouchAction" : "touchAction"
            }
            return M
        }

        function v(h) {
            if (!s) {
                s = -1;
                if (vb == "Microsoft Internet Explorer" && !!k.attachEvent && !!k.ActiveXObject) {
                    var e = o.indexOf("MSIE");
                    s = L;
                    t = q(o.substring(e + 5, o.indexOf(";", e))); /*@cc_on z=@_jscript_version@*/ ;
                    i = f.documentMode || t
                } else if (vb == "Netscape" && !!k.addEventListener) {
                    var d = o.indexOf("Firefox"),
                        b = o.indexOf("Safari"),
                        g = o.indexOf("Chrome"),
                        c = o.indexOf("AppleWebKit");
                    if (d >= 0) {
                        s = jb;
                        i = q(o.substring(d + 8))
                    } else if (b >= 0) {
                        var j = o.substring(0, b).lastIndexOf("/");
                        s = g >= 0 ? mb : nb;
                        i = q(o.substring(j + 1, b))
                    } else {
                        var a = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(o);
                        if (a) {
                            s = L;
                            i = t = q(a[1])
                        }
                    }
                    if (c >= 0) A = q(o.substring(c + 12))
                } else {
                    var a = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(o);
                    if (a) {
                        s = rb;
                        i = q(a[2])
                    }
                }
            }
            return h == s
        }

        function r() {
            return v(L)
        }

        function T() {
            return r() && (i < 6 || f.compatMode == "BackCompat")
        }

        function lb() {
            return v(nb)
        }

        function qb() {
            return v(rb)
        }

        function gb() {
            return lb() && A > 534 && A < 535
        }

        function H() {
            v();
            return A > 537 || i > 42 || s == L && i >= 11
        }

        function R() {
            return r() && i < 9
        }

        function hb(a) {
            var b, c;
            return function(f) {
                if (!b) {
                    b = d;
                    var e = a.substr(0, 1).toUpperCase() + a.substr(1);
                    n([a].concat(["WebKit", "ms", "Moz", "O", "webkit"]), function(h, d) {
                        var b = a;
                        if (d) b = h + e;
                        if (f.style[b] != g) return c = b
                    })
                }
                return c
            }
        }

        function fb(b) {
            var a;
            return function(c) {
                a = a || hb(b)(c) || b;
                return a
            }
        }
        var N = fb("transform");

        function ub(a) {
            return {}.toString.call(a)
        }
        var K;

        function Gb() {
            if (!K) {
                K = {};
                n(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"], function(a) {
                    K["[object " + a + "]"] = a.toLowerCase()
                })
            }
            return K
        }

        function n(b, d) {
            var a, c;
            if (ub(b) == "[object Array]") {
                for (a = 0; a < b.length; a++)
                    if (c = d(b[a], a, b)) return c
            } else
                for (a in b)
                    if (c = d(b[a], a, b)) return c
        }

        function F(a) {
            return a == j ? String(a) : Gb()[ub(a)] || "object"
        }

        function sb(a) {
            for (var b in a) return d
        }

        function B(a) {
            try {
                return F(a) == "object" && !a.nodeType && a != a.window && (!a.constructor || {}.hasOwnProperty.call(a.constructor.prototype, "isPrototypeOf"))
            } catch (b) {}
        }

        function p(a, b) {
            return {
                x: a,
                y: b
            }
        }

        function yb(b, a) {
            setTimeout(b, a || 0)
        }

        function C(b, d, c) {
            var a = !b || b == "inherit" ? "" : b;
            n(d, function(c) {
                var b = c.exec(a);
                if (b) {
                    var d = a.substr(0, b.index),
                        e = a.substr(b.index + b[0].length + 1, a.length - 1);
                    a = d + e
                }
            });
            a = c + (!a.indexOf(" ") ? "" : " ") + a;
            return a
        }

        function U(b, a) {
            if (i < 9) b.style.filter = a
        }
        h.kf = Jb;
        h.pd = r;
        h.jf = lb;
        h.Ed = qb;
        h.nf = H;
        h.nb = R;
        hb("transform");
        h.Id = function() {
            return i
        };
        h.lf = function() {
            v();
            return A
        };
        h.$Delay = yb;

        function bb(a) {
            a.constructor === bb.caller && a.Kd && a.Kd.apply(a, bb.caller.arguments)
        }
        h.Kd = bb;
        h.ob = function(a) {
            if (h.cf(a)) a = f.getElementById(a);
            return a
        };

        function u(a) {
            return a || k.event
        }
        h.Fd = u;
        h.jc = function(b) {
            b = u(b);
            var a = b.target || b.srcElement || f;
            if (a.nodeType == 3) a = h.Ld(a);
            return a
        };
        h.Nd = function(a) {
            a = u(a);
            return {
                x: a.pageX || a.clientX || 0,
                y: a.pageY || a.clientY || 0
            }
        };

        function G(c, d, a) {
            if (a !== g) c.style[d] = a == g ? "" : a;
            else {
                var b = c.currentStyle || c.style;
                a = b[d];
                if (a == "" && k.getComputedStyle) {
                    b = c.ownerDocument.defaultView.getComputedStyle(c, j);
                    b && (a = b.getPropertyValue(d) || b[d])
                }
                return a
            }
        }

        function db(b, c, a, d) {
            if (a !== g) {
                if (a == j) a = "";
                else d && (a += "px");
                G(b, c, a)
            } else return q(G(b, c))
        }

        function m(c, a) {
            var d = a ? db : G,
                b;
            if (a & 4) b = fb(c);
            return function(e, f) {
                return d(e, b ? b(e) : c, f, a & 2)
            }
        }

        function Db(b) {
            if (r() && t < 9) {
                var a = /opacity=([^)]*)/.exec(b.style.filter || "");
                return a ? q(a[1]) / 100 : 1
            } else return q(b.style.opacity || "1")
        }

        function Fb(b, a, f) {
            if (r() && t < 9) {
                var h = b.style.filter || "",
                    i = new RegExp(/[\s]*alpha\([^\)]*\)/g),
                    e = c.round(100 * a),
                    d = "";
                if (e < 100 || f) d = "alpha(opacity=" + e + ") ";
                var g = C(h, [i], d);
                U(b, g)
            } else b.style.opacity = a == 1 ? "" : c.round(a * 100) / 100
        }
        var O = {
            $Rotate: ["rotate"],
            $RotateX: ["rotateX"],
            $RotateY: ["rotateY"],
            $SkewX: ["skewX"],
            $SkewY: ["skewY"]
        };
        if (!H()) O = E(O, {
            $ScaleX: ["scaleX", 2],
            $ScaleY: ["scaleY", 2],
            $TranslateZ: ["translateZ", 1]
        });

        function P(d, a) {
            var c = "";
            if (a) {
                if (r() && i && i < 10) {
                    delete a.$RotateX;
                    delete a.$RotateY;
                    delete a.$TranslateZ
                }
                b.a(a, function(d, b) {
                    var a = O[b];
                    if (a) {
                        var e = a[1] || 0;
                        if (Q[b] != d) c += " " + a[0] + "(" + d + (["deg", "px", ""])[e] + ")"
                    }
                });
                if (H()) {
                    if (a.$TranslateX || a.$TranslateY || a.$TranslateZ) c += " translate3d(" + (a.$TranslateX || 0) + "px," + (a.$TranslateY || 0) + "px," + (a.$TranslateZ || 0) + "px)";
                    if (a.$ScaleX == g) a.$ScaleX = 1;
                    if (a.$ScaleY == g) a.$ScaleY = 1;
                    if (a.$ScaleX != 1 || a.$ScaleY != 1) c += " scale3d(" + a.$ScaleX + ", " + a.$ScaleY + ", 1)"
                }
            }
            d.style[N(d)] = c
        }
        h.Hc = m("transformOrigin", 4);
        h.zf = m("backfaceVisibility", 4);
        h.yf = m("transformStyle", 4);
        h.xf = m("perspective", 6);
        h.qf = m("perspectiveOrigin", 4);
        h.pf = function(a, b) {
            if (r() && t < 9 || t < 10 && T()) a.style.zoom = b == 1 ? "" : b;
            else {
                var c = N(a),
                    f = "scale(" + b + ")",
                    e = a.style[c],
                    g = new RegExp(/[\s]*scale\(.*?\)/g),
                    d = C(e, [g], f);
                a.style[c] = d
            }
        };
        h.Jb = function(b, a) {
            return function(c) {
                c = u(c);
                var e = c.type,
                    d = c.relatedTarget || (e == "mouseout" ? c.toElement : c.fromElement);
                (!d || d !== a && !h.of(a, d)) && b(c)
            }
        };
        h.e = function(a, c, d, b) {
            a = h.ob(a);
            if (a.addEventListener) {
                c == "mousewheel" && a.addEventListener("DOMMouseScroll", d, b);
                a.addEventListener(c, d, b)
            } else if (a.attachEvent) {
                a.attachEvent("on" + c, d);
                b && a.setCapture && a.setCapture()
            }
        };
        h.N = function(a, c, d, b) {
            a = h.ob(a);
            if (a.removeEventListener) {
                c == "mousewheel" && a.removeEventListener("DOMMouseScroll", d, b);
                a.removeEventListener(c, d, b)
            } else if (a.detachEvent) {
                a.detachEvent("on" + c, d);
                b && a.releaseCapture && a.releaseCapture()
            }
        };
        h.Kb = function(a) {
            a = u(a);
            a.preventDefault && a.preventDefault();
            a.cancel = d;
            a.returnValue = l
        };
        h.rf = function(a) {
            a = u(a);
            a.stopPropagation && a.stopPropagation();
            a.cancelBubble = d
        };
        h.E = function(d, c) {
            var a = [].slice.call(arguments, 2),
                b = function() {
                    var b = a.concat([].slice.call(arguments, 0));
                    return c.apply(d, b)
                };
            return b
        };
        h.Ig = function(a, b) {
            if (b == g) return a.textContent || a.innerText;
            var c = f.createTextNode(b);
            h.sc(a);
            a.appendChild(c)
        };
        h.Ab = function(d, c) {
            for (var b = [], a = d.firstChild; a; a = a.nextSibling)(c || a.nodeType == 1) && b.push(a);
            return b
        };

        function tb(a, c, e, b) {
            b = b || "u";
            for (a = a ? a.firstChild : j; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    if (Y(a, b) == c) return a;
                    if (!e) {
                        var d = tb(a, c, e, b);
                        if (d) return d
                    }
                }
        }
        h.A = tb;

        function W(a, d, f, b) {
            b = b || "u";
            var c = [];
            for (a = a ? a.firstChild : j; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    Y(a, b) == d && c.push(a);
                    if (!f) {
                        var e = W(a, d, f, b);
                        if (e.length) c = c.concat(e)
                    }
                }
            return c
        }

        function ob(a, c, d) {
            for (a = a ? a.firstChild : j; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    if (a.tagName == c) return a;
                    if (!d) {
                        var b = ob(a, c, d);
                        if (b) return b
                    }
                }
        }
        h.Jg = ob;

        function ib(a, c, e) {
            var b = [];
            for (a = a ? a.firstChild : j; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    (!c || a.tagName == c) && b.push(a);
                    if (!e) {
                        var d = ib(a, c, e);
                        if (d.length) b = b.concat(d)
                    }
                }
            return b
        }
        h.Ng = ib;
        h.Bg = function(b, a) {
            return b.getElementsByTagName(a)
        };

        function E() {
            var e = arguments,
                d, c, b, a, h = 1 & e[0],
                f = 1 + h;
            d = e[f - 1] || {};
            for (; f < e.length; f++)
                if (c = e[f])
                    for (b in c) {
                        a = c[b];
                        if (a !== g) {
                            a = c[b];
                            var i = d[b];
                            d[b] = h && (B(i) || B(a)) ? E(h, {}, i, a) : a
                        }
                    }
            return d
        }
        h.s = E;

        function cb(f, g) {
            var d = {},
                c, a, b;
            for (c in f) {
                a = f[c];
                b = g[c];
                if (a !== b) {
                    var e;
                    if (B(a) && B(b)) {
                        a = cb(a, b);
                        e = !sb(a)
                    }!e && (d[c] = a)
                }
            }
            return d
        }
        h.Xc = function(a) {
            return F(a) == "function"
        };
        h.cf = function(a) {
            return F(a) == "string"
        };
        h.Ub = function(a) {
            return !isNaN(q(a)) && isFinite(a)
        };
        h.a = n;
        h.Zc = B;

        function V(a) {
            return f.createElement(a)
        }
        h.eb = function() {
            return V("DIV")
        };
        h.Dg = function() {
            return V("SPAN")
        };
        h.Uc = function() {};

        function Z(b, c, a) {
            if (a == g) return b.getAttribute(c);
            b.setAttribute(c, a)
        }

        function Y(a, b) {
            return Z(a, b) || Z(a, "data-" + b)
        }
        h.z = Z;
        h.j = Y;

        function x(b, a) {
            if (a == g) return b.className;
            b.className = a
        }
        h.bd = x;

        function xb(b) {
            var a = {};
            n(b, function(b) {
                a[b] = b
            });
            return a
        }

        function zb(b, a) {
            return b.match(a || Ab)
        }

        function S(b, a) {
            return xb(zb(b || "", a))
        }
        h.hg = zb;

        function eb(b, c) {
            var a = "";
            n(c, function(c) {
                a && (a += b);
                a += c
            });
            return a
        }

        function J(a, c, b) {
            x(a, eb(" ", E(cb(S(x(a)), S(c)), S(b))))
        }
        h.Ld = function(a) {
            return a.parentNode
        };
        h.S = function(a) {
            h.T(a, "none")
        };
        h.C = function(a, b) {
            h.T(a, b ? "none" : "")
        };
        h.fg = function(b, a) {
            b.removeAttribute(a)
        };
        h.ag = function() {
            return r() && i < 10
        };
        h.Zf = function(d, a) {
            if (a) d.style.clip = "rect(" + c.round(a.$Top) + "px " + c.round(a.$Right) + "px " + c.round(a.$Bottom) + "px " + c.round(a.$Left) + "px)";
            else if (a !== g) {
                var h = d.style.cssText,
                    f = [new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i), new RegExp(/[\s]*cliptop: .*?[;]?/i), new RegExp(/[\s]*clipright: .*?[;]?/i), new RegExp(/[\s]*clipbottom: .*?[;]?/i), new RegExp(/[\s]*clipleft: .*?[;]?/i)],
                    e = C(h, f, "");
                b.ac(d, e)
            }
        };
        h.O = function() {
            return +new Date
        };
        h.F = function(b, a) {
            b.appendChild(a)
        };
        h.Zb = function(b, a, c) {
            (c || a.parentNode).insertBefore(b, a)
        };
        h.zb = function(b, a) {
            a = a || b.parentNode;
            a && a.removeChild(b)
        };
        h.yg = function(a, b) {
            n(a, function(a) {
                h.zb(a, b)
            })
        };
        h.sc = function(a) {
            h.yg(h.Ab(a, d), a)
        };
        h.xg = function(a, b) {
            var c = h.Ld(a);
            b & 1 && h.v(a, (h.m(c) - h.m(a)) / 2);
            b & 2 && h.D(a, (h.k(c) - h.k(a)) / 2)
        };
        h.vc = function(b, a) {
            return parseInt(b, a || 10)
        };
        h.ng = q;
        h.of = function(b, a) {
            var c = f.body;
            while (a && b !== a && c !== a) try {
                a = a.parentNode
            } catch (d) {
                return l
            }
            return b === a
        };

        function ab(d, c, b) {
            var a = d.cloneNode(!c);
            !b && h.fg(a, "id");
            return a
        }
        h.cb = ab;
        h.yb = function(e, f) {
            var a = new Image;

            function b(e, d) {
                h.N(a, "load", b);
                h.N(a, "abort", c);
                h.N(a, "error", c);
                f && f(a, d)
            }

            function c(a) {
                b(a, d)
            }
            if (qb() && i < 11.6 || !e) b(!e);
            else {
                h.e(a, "load", b);
                h.e(a, "abort", c);
                h.e(a, "error", c);
                a.src = e
            }
        };
        h.qg = function(d, a, e) {
            var c = d.length + 1;

            function b(b) {
                c--;
                if (a && b && b.src == a.src) a = b;
                !c && e && e(a)
            }
            n(d, function(a) {
                h.yb(a.src, b)
            });
            b()
        };
        h.Nc = function(a, g, i, h) {
            if (h) a = ab(a);
            var c = W(a, g);
            if (!c.length) c = b.Bg(a, g);
            for (var f = c.length - 1; f > -1; f--) {
                var d = c[f],
                    e = ab(i);
                x(e, x(d));
                b.ac(e, d.style.cssText);
                b.Zb(e, d);
                b.zb(d)
            }
            return a
        };

        function Hb(a) {
            var l = this,
                p = "",
                r = ["av", "pv", "ds", "dn"],
                e = [],
                q, k = 0,
                i = 0,
                d = 0;

            function j() {
                J(a, q, e[d || k || i & 2 || i]);
                b.ab(a, "pointer-events", d ? "none" : "")
            }

            function c() {
                k = 0;
                j();
                h.N(f, "mouseup", c);
                h.N(f, "touchend", c);
                h.N(f, "touchcancel", c)
            }

            function o(a) {
                if (d) h.Kb(a);
                else {
                    k = 4;
                    j();
                    h.e(f, "mouseup", c);
                    h.e(f, "touchend", c);
                    h.e(f, "touchcancel", c)
                }
            }
            l.Jc = function(a) {
                if (a === g) return i;
                i = a & 2 || a & 1;
                j()
            };
            l.$Enable = function(a) {
                if (a === g) return !d;
                d = a ? 0 : 3;
                j()
            };
            l.$Elmt = a = h.ob(a);
            var m = b.hg(x(a));
            if (m) p = m.shift();
            n(r, function(a) {
                e.push(p + a)
            });
            q = eb(" ", e);
            e.unshift("");
            h.e(a, "mousedown", o);
            h.e(a, "touchstart", o)
        }
        h.Lb = function(a) {
            return new Hb(a)
        };
        h.ab = G;
        h.kb = m("overflow");
        h.D = m("top", 2);
        h.v = m("left", 2);
        h.m = m("width", 2);
        h.k = m("height", 2);
        h.Af = m("marginLeft", 2);
        h.Qf = m("marginTop", 2);
        h.u = m("position");
        h.T = m("display");
        h.H = m("zIndex", 1);
        h.Bb = function(b, a, c) {
            if (a != g) Fb(b, a, c);
            else return Db(b)
        };
        h.ac = function(a, b) {
            if (b != g) a.style.cssText = b;
            else return a.style.cssText
        };
        var X = {
            $Opacity: h.Bb,
            $Top: h.D,
            $Left: h.v,
            P: h.m,
            Q: h.k,
            Eb: h.u,
            Ih: h.T,
            $ZIndex: h.H
        };

        function w(f, l) {
            var e = R(),
                b = H(),
                d = gb(),
                i = N(f);

            function k(b, d, a) {
                var e = b.mb(p(-d / 2, -a / 2)),
                    f = b.mb(p(d / 2, -a / 2)),
                    g = b.mb(p(d / 2, a / 2)),
                    h = b.mb(p(-d / 2, a / 2));
                b.mb(p(300, 300));
                return p(c.min(e.x, f.x, g.x, h.x) + d / 2, c.min(e.y, f.y, g.y, h.y) + a / 2)
            }

            function a(d, a) {
                a = a || {};
                var f = a.$TranslateZ || 0,
                    l = (a.$RotateX || 0) % 360,
                    m = (a.$RotateY || 0) % 360,
                    o = (a.$Rotate || 0) % 360,
                    p = a.Jh;
                if (e) {
                    f = 0;
                    l = 0;
                    m = 0;
                    p = 0
                }
                var c = new Cb(a.$TranslateX, a.$TranslateY, f);
                c.$RotateX(l);
                c.$RotateY(m);
                c.Wd(o);
                c.Sd(a.$SkewX, a.$SkewY);
                c.$Scale(a.$ScaleX, a.$ScaleY, p);
                if (b) {
                    c.$Move(a.R, a.K);
                    d.style[i] = c.Pe()
                } else if (!z || z < 9) {
                    var j = "";
                    if (o || a.$ScaleX != g && a.$ScaleX != 1 || a.$ScaleY != g && a.$ScaleY != 1) {
                        var n = k(c, a.$OriginalWidth, a.$OriginalHeight);
                        h.Qf(d, n.y);
                        h.Af(d, n.x);
                        j = c.Oe()
                    }
                    var r = d.style.filter,
                        s = new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g),
                        q = C(r, [s], j);
                    U(d, q)
                }
            }
            w = function(e, c) {
                c = c || {};
                var i = c.R,
                    k = c.K,
                    f;
                n(X, function(a, b) {
                    f = c[b];
                    f !== g && a(e, f)
                });
                h.Zf(e, c.$Clip);
                if (!b) {
                    i != g && h.v(e, c.hd + i);
                    k != g && h.D(e, c.Vc + k)
                }
                if (c.Me)
                    if (d) yb(h.E(j, P, e, c));
                    else a(e, c)
            };
            h.Db = P;
            if (d) h.Db = w;
            if (e) h.Db = a;
            else if (!b) a = P;
            h.I = w;
            w(f, l)
        }
        h.Db = w;
        h.I = w;

        function Cb(k, l, p) {
            var d = this,
                b = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, k || 0, l || 0, p || 0, 1],
                i = c.sin,
                h = c.cos,
                m = c.tan;

            function f(a) {
                return a * c.PI / 180
            }

            function o(a, b) {
                return {
                    x: a,
                    y: b
                }
            }

            function n(b, c, f, g, i, l, n, o, q, t, u, w, y, A, C, F, a, d, e, h, j, k, m, p, r, s, v, x, z, B, D, E) {
                return [b * a + c * j + f * r + g * z, b * d + c * k + f * s + g * B, b * e + c * m + f * v + g * D, b * h + c * p + f * x + g * E, i * a + l * j + n * r + o * z, i * d + l * k + n * s + o * B, i * e + l * m + n * v + o * D, i * h + l * p + n * x + o * E, q * a + t * j + u * r + w * z, q * d + t * k + u * s + w * B, q * e + t * m + u * v + w * D, q * h + t * p + u * x + w * E, y * a + A * j + C * r + F * z, y * d + A * k + C * s + F * B, y * e + A * m + C * v + F * D, y * h + A * p + C * x + F * E]
            }

            function e(c, a) {
                return n.apply(j, (a || b).concat(c))
            }
            d.$Scale = function(a, c, d) {
                if (a == g) a = 1;
                if (c == g) c = 1;
                if (d == g) d = 1;
                if (a != 1 || c != 1 || d != 1) b = e([a, 0, 0, 0, 0, c, 0, 0, 0, 0, d, 0, 0, 0, 0, 1])
            };
            d.$Move = function(a, c, d) {
                b[12] += a || 0;
                b[13] += c || 0;
                b[14] += d || 0
            };
            d.$RotateX = function(c) {
                if (c) {
                    a = f(c);
                    var d = h(a),
                        g = i(a);
                    b = e([1, 0, 0, 0, 0, d, g, 0, 0, -g, d, 0, 0, 0, 0, 1])
                }
            };
            d.$RotateY = function(c) {
                if (c) {
                    a = f(c);
                    var d = h(a),
                        g = i(a);
                    b = e([d, 0, -g, 0, 0, 1, 0, 0, g, 0, d, 0, 0, 0, 0, 1])
                }
            };
            d.Wd = function(c) {
                if (c) {
                    a = f(c);
                    var d = h(a),
                        g = i(a);
                    b = e([d, g, 0, 0, -g, d, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
                }
            };
            d.Sd = function(a, c) {
                if (a || c) {
                    k = f(a);
                    l = f(c);
                    b = e([1, m(l), 0, 0, m(k), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
                }
            };
            d.mb = function(c) {
                var a = e(b, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, c.x, c.y, 0, 1]);
                return o(a[12], a[13])
            };
            d.Pe = function() {
                return "matrix3d(" + b.join(",") + ")"
            };
            d.Oe = function() {
                return "progid:DXImageTransform.Microsoft.Matrix(M11=" + b[0] + ", M12=" + b[4] + ", M21=" + b[1] + ", M22=" + b[5] + ", SizingMethod='auto expand')"
            }
        }
        new(function() {
            var a = this;

            function b(d, g) {
                for (var j = d[0].length, i = d.length, h = g[0].length, f = [], c = 0; c < i; c++)
                    for (var k = f[c] = [], b = 0; b < h; b++) {
                        for (var e = 0, a = 0; a < j; a++) e += d[c][a] * g[a][b];
                        k[b] = e
                    }
                return f
            }
            a.$ScaleX = function(b, c) {
                return a.Yc(b, c, 0)
            };
            a.$ScaleY = function(b, c) {
                return a.Yc(b, 0, c)
            };
            a.Yc = function(a, c, d) {
                return b(a, [
                    [c, 0],
                    [0, d]
                ])
            };
            a.mb = function(d, c) {
                var a = b(d, [
                    [c.x],
                    [c.y]
                ]);
                return p(a[0][0], a[1][0])
            }
        });
        var Q = {
            hd: 0,
            Vc: 0,
            R: 0,
            K: 0,
            $Zoom: 1,
            $ScaleX: 1,
            $ScaleY: 1,
            $Rotate: 0,
            $RotateX: 0,
            $RotateY: 0,
            $TranslateX: 0,
            $TranslateY: 0,
            $TranslateZ: 0,
            $SkewX: 0,
            $SkewY: 0
        };
        h.gc = function(a) {
            var c = a || {};
            if (a)
                if (b.Xc(a)) c = {
                    fc: c
                };
                else if (b.Xc(a.$Clip)) c.$Clip = {
                fc: a.$Clip
            };
            return c
        };

        function wb(c, a) {
            var b = {};
            n(c, function(c, d) {
                var e = c;
                if (a[d] != g)
                    if (h.Ub(c)) e = c + a[d];
                    else e = wb(c, a[d]);
                b[d] = e
            });
            return b
        }
        h.Ve = wb;
        h.Tc = function(l, m, w, n, y, z, o) {
            var a = m;
            if (l) {
                a = {};
                for (var h in m) {
                    var A = z[h] || 1,
                        v = y[h] || [0, 1],
                        f = (w - v[0]) / v[1];
                    f = c.min(c.max(f, 0), 1);
                    f = f * A;
                    var u = c.floor(f);
                    if (f != u) f -= u;
                    var i = n.fc || e.$EaseSwing,
                        k, B = l[h],
                        q = m[h];
                    if (b.Ub(q)) {
                        i = n[h] || i;
                        var x = i(f);
                        k = B + q * x
                    } else {
                        k = b.s({
                            Ib: {}
                        }, l[h]);
                        b.a(q.Ib || q, function(d, a) {
                            if (n.$Clip) i = n.$Clip[a] || n.$Clip.fc || i;
                            var c = i(f),
                                b = d * c;
                            k.Ib[a] = b;
                            k[a] += b
                        })
                    }
                    a[h] = k
                }
                var t = b.a(m, function(b, a) {
                    return Q[a] != g
                });
                t && b.a(Q, function(c, b) {
                    if (a[b] == g && l[b] !== g) a[b] = l[b]
                });
                if (t) {
                    if (a.$Zoom) a.$ScaleX = a.$ScaleY = a.$Zoom;
                    a.$OriginalWidth = o.$OriginalWidth;
                    a.$OriginalHeight = o.$OriginalHeight;
                    a.Me = d
                }
            }
            if (m.$Clip && o.$Move) {
                var p = a.$Clip.Ib,
                    s = (p.$Top || 0) + (p.$Bottom || 0),
                    r = (p.$Left || 0) + (p.$Right || 0);
                a.$Left = (a.$Left || 0) + r;
                a.$Top = (a.$Top || 0) + s;
                a.$Clip.$Left -= r;
                a.$Clip.$Right -= r;
                a.$Clip.$Top -= s;
                a.$Clip.$Bottom -= s
            }
            if (a.$Clip && b.ag() && !a.$Clip.$Top && !a.$Clip.$Left && a.$Clip.$Right == o.$OriginalWidth && a.$Clip.$Bottom == o.$OriginalHeight) a.$Clip = j;
            return a
        }
    };

    function n() {
        var a = this,
            d = [];

        function h(a, b) {
            d.push({
                qc: a,
                tc: b
            })
        }

        function g(a, c) {
            b.a(d, function(b, e) {
                b.qc == a && b.tc === c && d.splice(e, 1)
            })
        }
        a.$On = a.addEventListener = h;
        a.$Off = a.removeEventListener = g;
        a.l = function(a) {
            var c = [].slice.call(arguments, 1);
            b.a(d, function(b) {
                b.qc == a && b.tc.apply(k, c)
            })
        }
    }
    var m = function(z, C, h, L, O, J) {
        z = z || 0;
        var a = this,
            q, n, o, v, A = 0,
            H, I, G, B, y = 0,
            g = 0,
            m = 0,
            D, i, f, e, p, w = [],
            x;

        function P(a) {
            f += a;
            e += a;
            i += a;
            g += a;
            m += a;
            y += a
        }

        function u(o) {
            var j = o;
            if (p && (j >= e || j <= f)) j = ((j - f) % p + p) % p + f;
            if (!D || v || g != j) {
                var k = c.min(j, e);
                k = c.max(k, f);
                if (!D || v || k != m) {
                    if (J) {
                        var l = (k - i) / (C || 1);
                        if (h.$Reverse) l = 1 - l;
                        var n = b.Tc(O, J, l, H, G, I, h);
                        if (x) b.a(n, function(b, a) {
                            x[a] && x[a](L, b)
                        });
                        else b.I(L, n)
                    }
                    a.nc(m - i, k - i);
                    m = k;
                    b.a(w, function(b, c) {
                        var a = o < g ? w[w.length - c - 1] : b;
                        a.B(m - y)
                    });
                    var r = g,
                        q = m;
                    g = j;
                    D = d;
                    a.Nb(r, q)
                }
            }
        }

        function E(a, b, d) {
            b && a.$Shift(e);
            if (!d) {
                f = c.min(f, a.lc() + y);
                e = c.max(e, a.Xb() + y)
            }
            w.push(a)
        }
        var r = k.requestAnimationFrame || k.webkitRequestAnimationFrame || k.mozRequestAnimationFrame || k.msRequestAnimationFrame;
        if (b.jf() && b.Id() < 7) r = j;
        r = r || function(a) {
            b.$Delay(a, h.$Interval)
        };

        function K() {
            if (q) {
                var d = b.O(),
                    e = c.min(d - A, h.Rc),
                    a = g + e * o;
                A = d;
                if (a * o >= n * o) a = n;
                u(a);
                if (!v && a * o >= n * o) M(B);
                else r(K)
            }
        }

        function t(h, i, j) {
            if (!q) {
                q = d;
                v = j;
                B = i;
                h = c.max(h, f);
                h = c.min(h, e);
                n = h;
                o = n < g ? -1 : 1;
                a.Oc();
                A = b.O();
                r(K)
            }
        }

        function M(b) {
            if (q) {
                v = q = B = l;
                a.Ic();
                b && b()
            }
        }
        a.$Play = function(a, b, c) {
            t(a ? g + a : e, b, c)
        };
        a.Gc = t;
        a.ib = M;
        a.De = function(a) {
            t(a)
        };
        a.Y = function() {
            return g
        };
        a.Hd = function() {
            return n
        };
        a.sb = function() {
            return m
        };
        a.B = u;
        a.$Move = function(a) {
            u(g + a)
        };
        a.$IsPlaying = function() {
            return q
        };
        a.He = function(a) {
            p = a
        };
        a.$Shift = P;
        a.xb = function(a, b) {
            E(a, 0, b)
        };
        a.oc = function(a) {
            E(a, 1)
        };
        a.Ie = function(a) {
            e += a
        };
        a.lc = function() {
            return f
        };
        a.Xb = function() {
            return e
        };
        a.Nb = a.Oc = a.Ic = a.nc = b.Uc;
        a.mc = b.O();
        h = b.s({
            $Interval: 16,
            Rc: 50
        }, h);
        p = h.od;
        x = h.te;
        f = i = z;
        e = z + C;
        I = h.$Round || {};
        G = h.$During || {};
        H = b.gc(h.$Easing)
    };
    var p = k.$JssorSlideshowFormations$ = new function() {
        var h = this,
            b = 0,
            a = 1,
            f = 2,
            e = 3,
            s = 1,
            r = 2,
            t = 4,
            q = 8,
            w = 256,
            x = 512,
            v = 1024,
            u = 2048,
            j = u + s,
            i = u + r,
            o = x + s,
            m = x + r,
            n = w + t,
            k = w + q,
            l = v + t,
            p = v + q;

        function y(a) {
            return (a & r) == r
        }

        function z(a) {
            return (a & t) == t
        }

        function g(b, a, c) {
            c.push(a);
            b[a] = b[a] || [];
            b[a].push(c)
        }
        h.$FormationStraight = function(f) {
            for (var d = f.$Cols, e = f.$Rows, s = f.$Assembly, t = f.Ob, r = [], a = 0, b = 0, p = d - 1, q = e - 1, h = t - 1, c, b = 0; b < e; b++)
                for (a = 0; a < d; a++) {
                    switch (s) {
                        case j:
                            c = h - (a * e + (q - b));
                            break;
                        case l:
                            c = h - (b * d + (p - a));
                            break;
                        case o:
                            c = h - (a * e + b);
                        case n:
                            c = h - (b * d + a);
                            break;
                        case i:
                            c = a * e + b;
                            break;
                        case k:
                            c = b * d + (p - a);
                            break;
                        case m:
                            c = a * e + (q - b);
                            break;
                        default:
                            c = b * d + a
                    }
                    g(r, c, [b, a])
                }
            return r
        };
        h.$FormationSwirl = function(q) {
            var x = q.$Cols,
                y = q.$Rows,
                B = q.$Assembly,
                w = q.Ob,
                A = [],
                z = [],
                u = 0,
                c = 0,
                h = 0,
                r = x - 1,
                s = y - 1,
                t, p, v = 0;
            switch (B) {
                case j:
                    c = r;
                    h = 0;
                    p = [f, a, e, b];
                    break;
                case l:
                    c = 0;
                    h = s;
                    p = [b, e, a, f];
                    break;
                case o:
                    c = r;
                    h = s;
                    p = [e, a, f, b];
                    break;
                case n:
                    c = r;
                    h = s;
                    p = [a, e, b, f];
                    break;
                case i:
                    c = 0;
                    h = 0;
                    p = [f, b, e, a];
                    break;
                case k:
                    c = r;
                    h = 0;
                    p = [a, f, b, e];
                    break;
                case m:
                    c = 0;
                    h = s;
                    p = [e, b, f, a];
                    break;
                default:
                    c = 0;
                    h = 0;
                    p = [b, f, a, e]
            }
            u = 0;
            while (u < w) {
                t = h + "," + c;
                if (c >= 0 && c < x && h >= 0 && h < y && !z[t]) {
                    z[t] = d;
                    g(A, u++, [h, c])
                } else switch (p[v++ % p.length]) {
                    case b:
                        c--;
                        break;
                    case f:
                        h--;
                        break;
                    case a:
                        c++;
                        break;
                    case e:
                        h++
                }
                switch (p[v % p.length]) {
                    case b:
                        c++;
                        break;
                    case f:
                        h++;
                        break;
                    case a:
                        c--;
                        break;
                    case e:
                        h--
                }
            }
            return A
        };
        h.$FormationZigZag = function(p) {
            var w = p.$Cols,
                x = p.$Rows,
                z = p.$Assembly,
                v = p.Ob,
                t = [],
                u = 0,
                c = 0,
                d = 0,
                q = w - 1,
                r = x - 1,
                y, h, s = 0;
            switch (z) {
                case j:
                    c = q;
                    d = 0;
                    h = [f, a, e, a];
                    break;
                case l:
                    c = 0;
                    d = r;
                    h = [b, e, a, e];
                    break;
                case o:
                    c = q;
                    d = r;
                    h = [e, a, f, a];
                    break;
                case n:
                    c = q;
                    d = r;
                    h = [a, e, b, e];
                    break;
                case i:
                    c = 0;
                    d = 0;
                    h = [f, b, e, b];
                    break;
                case k:
                    c = q;
                    d = 0;
                    h = [a, f, b, f];
                    break;
                case m:
                    c = 0;
                    d = r;
                    h = [e, b, f, b];
                    break;
                default:
                    c = 0;
                    d = 0;
                    h = [b, f, a, f]
            }
            u = 0;
            while (u < v) {
                y = d + "," + c;
                if (c >= 0 && c < w && d >= 0 && d < x && typeof t[y] == "undefined") {
                    g(t, u++, [d, c]);
                    switch (h[s % h.length]) {
                        case b:
                            c++;
                            break;
                        case f:
                            d++;
                            break;
                        case a:
                            c--;
                            break;
                        case e:
                            d--
                    }
                } else {
                    switch (h[s++ % h.length]) {
                        case b:
                            c--;
                            break;
                        case f:
                            d--;
                            break;
                        case a:
                            c++;
                            break;
                        case e:
                            d++
                    }
                    switch (h[s++ % h.length]) {
                        case b:
                            c++;
                            break;
                        case f:
                            d++;
                            break;
                        case a:
                            c--;
                            break;
                        case e:
                            d--
                    }
                }
            }
            return t
        };
        h.$FormationStraightStairs = function(q) {
            var u = q.$Cols,
                v = q.$Rows,
                e = q.$Assembly,
                t = q.Ob,
                r = [],
                s = 0,
                c = 0,
                d = 0,
                f = u - 1,
                h = v - 1,
                x = t - 1;
            switch (e) {
                case j:
                case m:
                case o:
                case i:
                    var a = 0,
                        b = 0;
                    break;
                case k:
                case l:
                case n:
                case p:
                    var a = f,
                        b = 0;
                    break;
                default:
                    e = p;
                    var a = f,
                        b = 0
            }
            c = a;
            d = b;
            while (s < t) {
                if (z(e) || y(e)) g(r, x - s++, [d, c]);
                else g(r, s++, [d, c]);
                switch (e) {
                    case j:
                    case m:
                        c--;
                        d++;
                        break;
                    case o:
                    case i:
                        c++;
                        d--;
                        break;
                    case k:
                    case l:
                        c--;
                        d--;
                        break;
                    case p:
                    case n:
                    default:
                        c++;
                        d++
                }
                if (c < 0 || d < 0 || c > f || d > h) {
                    switch (e) {
                        case j:
                        case m:
                            a++;
                            break;
                        case k:
                        case l:
                        case o:
                        case i:
                            b++;
                            break;
                        case p:
                        case n:
                        default:
                            a--
                    }
                    if (a < 0 || b < 0 || a > f || b > h) {
                        switch (e) {
                            case j:
                            case m:
                                a = f;
                                b++;
                                break;
                            case o:
                            case i:
                                b = h;
                                a++;
                                break;
                            case k:
                            case l:
                                b = h;
                                a--;
                                break;
                            case p:
                            case n:
                            default:
                                a = 0;
                                b++
                        }
                        if (b > h) b = h;
                        else if (b < 0) b = 0;
                        else if (a > f) a = f;
                        else if (a < 0) a = 0
                    }
                    d = b;
                    c = a
                }
            }
            return r
        };
        h.$FormationSquare = function(i) {
            var a = i.$Cols || 1,
                b = i.$Rows || 1,
                j = [],
                d, e, f, h, k;
            f = a < b ? (b - a) / 2 : 0;
            h = a > b ? (a - b) / 2 : 0;
            k = c.round(c.max(a / 2, b / 2)) + 1;
            for (d = 0; d < a; d++)
                for (e = 0; e < b; e++) g(j, k - c.min(d + 1 + f, e + 1 + h, a - d + f, b - e + h), [e, d]);
            return j
        };
        h.$FormationRectangle = function(f) {
            var d = f.$Cols || 1,
                e = f.$Rows || 1,
                h = [],
                a, b, i;
            i = c.round(c.min(d / 2, e / 2)) + 1;
            for (a = 0; a < d; a++)
                for (b = 0; b < e; b++) g(h, i - c.min(a + 1, b + 1, d - a, e - b), [b, a]);
            return h
        };
        h.$FormationRandom = function(d) {
            for (var e = [], a, b = 0; b < d.$Rows; b++)
                for (a = 0; a < d.$Cols; a++) g(e, c.ceil(1e5 * c.random()) % 13, [b, a]);
            return e
        };
        h.$FormationCircle = function(d) {
            for (var e = d.$Cols || 1, f = d.$Rows || 1, h = [], a, i = e / 2 - .5, j = f / 2 - .5, b = 0; b < e; b++)
                for (a = 0; a < f; a++) g(h, c.round(c.sqrt(c.pow(b - i, 2) + c.pow(a - j, 2))), [a, b]);
            return h
        };
        h.$FormationCross = function(d) {
            for (var e = d.$Cols || 1, f = d.$Rows || 1, h = [], a, i = e / 2 - .5, j = f / 2 - .5, b = 0; b < e; b++)
                for (a = 0; a < f; a++) g(h, c.round(c.min(c.abs(b - i), c.abs(a - j))), [a, b]);
            return h
        };
        h.$FormationRectangleCross = function(f) {
            for (var h = f.$Cols || 1, i = f.$Rows || 1, j = [], a, d = h / 2 - .5, e = i / 2 - .5, k = c.max(d, e) + 1, b = 0; b < h; b++)
                for (a = 0; a < i; a++) g(j, c.round(k - c.max(d - c.abs(b - d), e - c.abs(a - e))) - 1, [a, b]);
            return j
        }
    };
    k.$JssorSlideshowRunner$ = function(k, s, q, u, z) {
        var f = this,
            v, g, a, y = 0,
            x = u.$TransitionsOrder,
            r, h = 8;

        function t(a) {
            if (a.$Top) a.K = a.$Top;
            if (a.$Left) a.R = a.$Left;
            b.a(a, function(a) {
                b.Zc(a) && t(a)
            })
        }

        function i(g, f) {
            var a = {
                $Interval: f,
                $Duration: 1,
                $Delay: 0,
                $Cols: 1,
                $Rows: 1,
                $Opacity: 0,
                $Zoom: 0,
                $Clip: 0,
                $Move: l,
                $SlideOut: l,
                $Reverse: l,
                $Formation: p.$FormationRandom,
                $Assembly: 1032,
                $ChessMode: {
                    $Column: 0,
                    $Row: 0
                },
                $Easing: e.$EaseSwing,
                $Round: {},
                cc: [],
                $During: {}
            };
            b.s(a, g);
            t(a);
            a.Ob = a.$Cols * a.$Rows;
            a.$Easing = b.gc(a.$Easing);
            a.me = c.ceil(a.$Duration / a.$Interval);
            a.le = function(c, b) {
                c /= a.$Cols;
                b /= a.$Rows;
                var f = c + "x" + b;
                if (!a.cc[f]) {
                    a.cc[f] = {
                        P: c,
                        Q: b
                    };
                    for (var d = 0; d < a.$Cols; d++)
                        for (var e = 0; e < a.$Rows; e++) a.cc[f][e + "," + d] = {
                            $Top: e * b,
                            $Right: d * c + c,
                            $Bottom: e * b + b,
                            $Left: d * c
                        }
                }
                return a.cc[f]
            };
            if (a.$Brother) {
                a.$Brother = i(a.$Brother, f);
                a.$SlideOut = d
            }
            return a
        }

        function o(B, h, a, w, o, m) {
            var z = this,
                u, v = {},
                i = {},
                n = [],
                f, e, s, q = a.$ChessMode.$Column || 0,
                r = a.$ChessMode.$Row || 0,
                g = a.le(o, m),
                p = C(a),
                D = p.length - 1,
                t = a.$Duration + a.$Delay * D,
                x = w + t,
                k = a.$SlideOut,
                y;
            x += 50;

            function C(a) {
                var b = a.$Formation(a);
                return a.$Reverse ? b.reverse() : b
            }
            z.kd = x;
            z.dc = function(d) {
                d -= w;
                var e = d < t;
                if (e || y) {
                    y = e;
                    if (!k) d = t - d;
                    var f = c.ceil(d / a.$Interval);
                    b.a(i, function(a, e) {
                        var d = c.max(f, a.pe);
                        d = c.min(d, a.length - 1);
                        if (a.qd != d) {
                            if (!a.qd && !k) b.C(n[e]);
                            else d == a.he && k && b.S(n[e]);
                            a.qd = d;
                            b.I(n[e], a[d])
                        }
                    })
                }
            };
            h = b.cb(h);
            b.Db(h, j);
            if (b.nb()) {
                var E = !h["no-image"],
                    A = b.Ng(h);
                b.a(A, function(a) {
                    (E || a["jssor-slider"]) && b.Bb(a, b.Bb(a), d)
                })
            }
            b.a(p, function(h, j) {
                b.a(h, function(G) {
                    var K = G[0],
                        J = G[1],
                        t = K + "," + J,
                        n = l,
                        p = l,
                        x = l;
                    if (q && J % 2) {
                        if (q & 3) n = !n;
                        if (q & 12) p = !p;
                        if (q & 16) x = !x
                    }
                    if (r && K % 2) {
                        if (r & 3) n = !n;
                        if (r & 12) p = !p;
                        if (r & 16) x = !x
                    }
                    a.$Top = a.$Top || a.$Clip & 4;
                    a.$Bottom = a.$Bottom || a.$Clip & 8;
                    a.$Left = a.$Left || a.$Clip & 1;
                    a.$Right = a.$Right || a.$Clip & 2;
                    var C = p ? a.$Bottom : a.$Top,
                        z = p ? a.$Top : a.$Bottom,
                        B = n ? a.$Right : a.$Left,
                        A = n ? a.$Left : a.$Right;
                    a.$Clip = C || z || B || A;
                    s = {};
                    e = {
                        K: 0,
                        R: 0,
                        $Opacity: 1,
                        P: o,
                        Q: m
                    };
                    f = b.s({}, e);
                    u = b.s({}, g[t]);
                    if (a.$Opacity) e.$Opacity = 2 - a.$Opacity;
                    if (a.$ZIndex) {
                        e.$ZIndex = a.$ZIndex;
                        f.$ZIndex = 0
                    }
                    var I = a.$Cols * a.$Rows > 1 || a.$Clip;
                    if (a.$Zoom || a.$Rotate) {
                        var H = d;
                        if (b.nb())
                            if (a.$Cols * a.$Rows > 1) H = l;
                            else I = l;
                        if (H) {
                            e.$Zoom = a.$Zoom ? a.$Zoom - 1 : 1;
                            f.$Zoom = 1;
                            if (b.nb() || b.Ed()) e.$Zoom = c.min(e.$Zoom, 2);
                            var N = a.$Rotate || 0;
                            e.$Rotate = N * 360 * (x ? -1 : 1);
                            f.$Rotate = 0
                        }
                    }
                    if (I) {
                        var h = u.Ib = {};
                        if (a.$Clip) {
                            var w = a.$ScaleClip || 1;
                            if (C && z) {
                                h.$Top = g.Q / 2 * w;
                                h.$Bottom = -h.$Top
                            } else if (C) h.$Bottom = -g.Q * w;
                            else if (z) h.$Top = g.Q * w;
                            if (B && A) {
                                h.$Left = g.P / 2 * w;
                                h.$Right = -h.$Left
                            } else if (B) h.$Right = -g.P * w;
                            else if (A) h.$Left = g.P * w
                        }
                        s.$Clip = u;
                        f.$Clip = g[t]
                    }
                    var L = n ? 1 : -1,
                        M = p ? 1 : -1;
                    if (a.x) e.R += o * a.x * L;
                    if (a.y) e.K += m * a.y * M;
                    b.a(e, function(a, c) {
                        if (b.Ub(a))
                            if (a != f[c]) s[c] = a - f[c]
                    });
                    v[t] = k ? f : e;
                    var D = a.me,
                        y = c.round(j * a.$Delay / a.$Interval);
                    i[t] = new Array(y);
                    i[t].pe = y;
                    i[t].he = y + D - 1;
                    for (var F = 0; F <= D; F++) {
                        var E = b.Tc(f, s, F / D, a.$Easing, a.$During, a.$Round, {
                            $Move: a.$Move,
                            $OriginalWidth: o,
                            $OriginalHeight: m
                        });
                        E.$ZIndex = E.$ZIndex || 1;
                        i[t].push(E)
                    }
                })
            });
            p.reverse();
            b.a(p, function(a) {
                b.a(a, function(c) {
                    var f = c[0],
                        e = c[1],
                        d = f + "," + e,
                        a = h;
                    if (e || f) a = b.cb(h);
                    b.I(a, v[d]);
                    b.kb(a, "hidden");
                    b.u(a, "absolute");
                    B.ne(a);
                    n[d] = a;
                    b.C(a, !k)
                })
            })
        }

        function w() {
            var b = this,
                c = 0;
            m.call(b, 0, v);
            b.Nb = function(d, b) {
                if (b - c > h) {
                    c = b;
                    a && a.dc(b);
                    g && g.dc(b)
                }
            };
            b.wc = r
        }
        f.ae = function() {
            var a = 0,
                b = u.$Transitions,
                d = b.length;
            if (x) a = y++ % d;
            else a = c.floor(c.random() * d);
            b[a] && (b[a].hb = a);
            return b[a]
        };
        f.fe = function(w, x, l, m, b) {
            r = b;
            b = i(b, h);
            var j = m.vd,
                e = l.vd;
            j["no-image"] = !m.Hb;
            e["no-image"] = !l.Hb;
            var n = j,
                p = e,
                u = b,
                d = b.$Brother || i({}, h);
            if (!b.$SlideOut) {
                n = e;
                p = j
            }
            var t = d.$Shift || 0;
            g = new o(k, p, d, c.max(t - d.$Interval, 0), s, q);
            a = new o(k, n, u, c.max(d.$Interval - t, 0), s, q);
            g.dc(0);
            a.dc(0);
            v = c.max(g.kd, a.kd);
            f.hb = w
        };
        f.wb = function() {
            k.wb();
            g = j;
            a = j
        };
        f.Qe = function() {
            var b = j;
            if (a) b = new w;
            return b
        };
        if (b.nb() || b.Ed() || z && b.lf() < 537) h = 16;
        n.call(f);
        m.call(f, -1e7, 1e7)
    };
    var i = k.$JssorSlider$ = function(p, hc) {
        var h = this;

        function Fc() {
            var a = this;
            m.call(a, -1e8, 2e8);
            a.Ke = function() {
                var b = a.sb(),
                    d = c.floor(b),
                    f = t(d),
                    e = b - c.floor(b);
                return {
                    hb: f,
                    Ne: d,
                    Eb: e
                }
            };
            a.Nb = function(b, a) {
                var e = c.floor(a);
                if (e != a && a > b) e++;
                Wb(e, d);
                h.l(i.$EVT_POSITION_CHANGE, t(a), t(b), a, b)
            }
        }

        function Ec() {
            var a = this;
            m.call(a, 0, 0, {
                od: r
            });
            b.a(C, function(b) {
                D & 1 && b.He(r);
                a.oc(b);
                b.$Shift(fb / dc)
            })
        }

        function Dc() {
            var a = this,
                b = Vb.$Elmt;
            m.call(a, -1, 2, {
                $Easing: e.$EaseLinear,
                te: {
                    Eb: bc
                },
                od: r
            }, b, {
                Eb: 1
            }, {
                Eb: -2
            });
            a.Pb = b
        }

        function rc(o, n) {
            var b = this,
                e, f, g, k, c;
            m.call(b, -1e8, 2e8, {
                Rc: 100
            });
            b.Oc = function() {
                O = d;
                R = j;
                h.l(i.$EVT_SWIPE_START, t(w.Y()), w.Y())
            };
            b.Ic = function() {
                O = l;
                k = l;
                var a = w.Ke();
                h.l(i.$EVT_SWIPE_END, t(w.Y()), w.Y());
                !a.Eb && Hc(a.Ne, s)
            };
            b.Nb = function(i, h) {
                var b;
                if (k) b = c;
                else {
                    b = f;
                    if (g) {
                        var d = h / g;
                        b = a.$SlideEasing(d) * (f - e) + e
                    }
                }
                w.B(b)
            };
            b.Sb = function(a, d, c, h) {
                e = a;
                f = d;
                g = c;
                w.B(a);
                b.B(0);
                b.Gc(c, h)
            };
            b.we = function(a) {
                k = d;
                c = a;
                b.$Play(a, j, d)
            };
            b.ze = function(a) {
                c = a
            };
            w = new Fc;
            w.xb(o);
            w.xb(n)
        }

        function sc() {
            var c = this,
                a = Zb();
            b.H(a, 0);
            b.ab(a, "pointerEvents", "none");
            c.$Elmt = a;
            c.ne = function(c) {
                b.F(a, c);
                b.C(a)
            };
            c.wb = function() {
                b.S(a);
                b.sc(a)
            }
        }

        function Bc(k, f) {
            var e = this,
                q, H, x, o, y = [],
                w, B, W, G, Q, F, g, v, p;
            m.call(e, -u, u + 1, {});

            function E(a) {
                q && q.Cd();
                T(k, a, 0);
                F = d;
                q = new I.$Class(k, I, b.ng(b.j(k, "idle")) || qc);
                q.B(0)
            }

            function Y() {
                q.mc < I.mc && E()
            }

            function N(p, r, n) {
                if (!G) {
                    G = d;
                    if (o && n) {
                        var g = n.width,
                            c = n.height,
                            m = g,
                            k = c;
                        if (g && c && a.$FillMode) {
                            if (a.$FillMode & 3 && (!(a.$FillMode & 4) || g > K || c > J)) {
                                var j = l,
                                    q = K / J * c / g;
                                if (a.$FillMode & 1) j = q > 1;
                                else if (a.$FillMode & 2) j = q < 1;
                                m = j ? g * J / c : K;
                                k = j ? J : c * K / g
                            }
                            b.m(o, m);
                            b.k(o, k);
                            b.D(o, (J - k) / 2);
                            b.v(o, (K - m) / 2)
                        }
                        b.u(o, "absolute");
                        h.l(i.$EVT_LOAD_END, f)
                    }
                }
                b.S(r);
                p && p(e)
            }

            function X(b, c, d, g) {
                if (g == R && s == f && P)
                    if (!Gc) {
                        var a = t(b);
                        A.fe(a, f, c, e, d);
                        c.Ee();
                        U.$Shift(a - U.lc() - 1);
                        U.B(a);
                        z.Sb(b, b, 0)
                    }
            }

            function ab(b) {
                if (b == R && s == f) {
                    if (!g) {
                        var a = j;
                        if (A)
                            if (A.hb == f) a = A.Qe();
                            else A.wb();
                        Y();
                        g = new zc(k, f, a, q);
                        g.Md(p)
                    }!g.$IsPlaying() && g.ic()
                }
            }

            function S(d, h, l) {
                if (d == f) {
                    if (d != h) C[h] && C[h].Fe();
                    else !l && g && g.Ge();
                    p && p.$Enable();
                    var m = R = b.O();
                    e.yb(b.E(j, ab, m))
                } else {
                    var k = c.min(f, d),
                        i = c.max(f, d),
                        o = c.min(i - k, k + r - i),
                        n = u + a.$LazyLoading - 1;
                    (!Q || o <= n) && e.yb()
                }
            }

            function bb() {
                if (s == f && g) {
                    g.ib();
                    p && p.$Quit();
                    p && p.$Disable();
                    g.gd()
                }
            }

            function db() {
                s == f && g && g.ib()
            }

            function Z(a) {
                !M && h.l(i.$EVT_CLICK, f, a)
            }

            function O() {
                p = v.pInstance;
                g && g.Md(p)
            }
            e.yb = function(c, a) {
                a = a || x;
                if (y.length && !G) {
                    b.C(a);
                    if (!W) {
                        W = d;
                        h.l(i.$EVT_LOAD_START, f);
                        b.a(y, function(a) {
                            if (!b.z(a, "src")) {
                                a.src = b.j(a, "src2");
                                b.T(a, a["display-origin"])
                            }
                        })
                    }
                    b.qg(y, o, b.E(j, N, c, a))
                } else N(c, a)
            };
            e.af = function() {
                var h = f;
                if (a.$AutoPlaySteps < 0) h -= r;
                var d = h + a.$AutoPlaySteps * xc;
                if (D & 2) d = t(d);
                if (!(D & 1)) d = c.max(0, c.min(d, r - u));
                if (d != f) {
                    if (A) {
                        var e = A.ae(r);
                        if (e) {
                            var i = R = b.O(),
                                g = C[t(d)];
                            return g.yb(b.E(j, X, d, g, e, i), x)
                        }
                    }
                    nb(d)
                }
            };
            e.zc = function() {
                S(f, f, d)
            };
            e.Fe = function() {
                p && p.$Quit();
                p && p.$Disable();
                e.Kc();
                g && g.ce();
                g = j;
                E()
            };
            e.Ee = function() {
                b.S(k)
            };
            e.Kc = function() {
                b.C(k)
            };
            e.ee = function() {
                p && p.$Enable()
            };

            function T(a, c, e) {
                if (b.z(a, "jssor-slider")) return;
                if (!F) {
                    if (a.tagName == "IMG") {
                        y.push(a);
                        if (!b.z(a, "src")) {
                            Q = d;
                            a["display-origin"] = b.T(a);
                            b.S(a)
                        }
                    }
                    b.nb() && b.H(a, (b.H(a) || 0) + 1)
                }
                var f = b.Ab(a);
                b.a(f, function(f) {
                    var h = f.tagName,
                        i = b.j(f, "u");
                    if (i == "player" && !v) {
                        v = f;
                        if (v.pInstance) O();
                        else b.e(v, "dataavailable", O)
                    }
                    if (i == "caption") {
                        if (c) {
                            b.Hc(f, b.j(f, "to"));
                            b.zf(f, b.j(f, "bf"));
                            b.j(f, "3d") && b.yf(f, "preserve-3d")
                        } else if (!b.pd()) {
                            var g = b.cb(f, l, d);
                            b.Zb(g, f, a);
                            b.zb(f, a);
                            f = g;
                            c = d
                        }
                    } else if (!F && !e && !o) {
                        if (h == "A") {
                            if (b.j(f, "u") == "image") o = b.Jg(f, "IMG");
                            else o = b.A(f, "image", d);
                            if (o) {
                                w = f;
                                b.T(w, "block");
                                b.I(w, V);
                                B = b.cb(w, d);
                                b.u(w, "relative");
                                b.Bb(B, 0);
                                b.ab(B, "backgroundColor", "#000")
                            }
                        } else if (h == "IMG" && b.j(f, "u") == "image") o = f;
                        if (o) {
                            o.border = 0;
                            b.I(o, V)
                        }
                    }
                    T(f, c, e + 1)
                })
            }
            e.nc = function(c, b) {
                var a = u - b;
                bc(H, a)
            };
            e.hb = f;
            n.call(e);
            b.xf(k, b.j(k, "p"));
            b.qf(k, b.j(k, "po"));
            var L = b.A(k, "thumb", d);
            if (L) {
                e.de = b.cb(L);
                b.S(L)
            }
            b.C(k);
            x = b.cb(cb);
            b.H(x, 1e3);
            b.e(k, "click", Z);
            E(d);
            e.Hb = o;
            e.Pc = B;
            e.vd = k;
            e.Pb = H = k;
            b.F(H, x);
            h.$On(203, S);
            h.$On(28, db);
            h.$On(24, bb)
        }

        function zc(y, f, p, q) {
            var a = this,
                n = 0,
                u = 0,
                g, j, e, c, k, t, r, o = C[f];
            m.call(a, 0, 0);

            function v() {
                b.sc(N);
                fc && k && o.Pc && b.F(N, o.Pc);
                b.C(N, !k && o.Hb)
            }

            function w() {
                a.ic()
            }

            function x(b) {
                r = b;
                a.ib();
                a.ic()
            }
            a.ic = function() {
                var b = a.sb();
                if (!B && !O && !r && s == f) {
                    if (!b) {
                        if (g && !k) {
                            k = d;
                            a.gd(d);
                            h.l(i.$EVT_SLIDESHOW_START, f, n, u, g, c)
                        }
                        v()
                    }
                    var l, p = i.$EVT_STATE_CHANGE;
                    if (b != c)
                        if (b == e) l = c;
                        else if (b == j) l = e;
                    else if (!b) l = j;
                    else l = a.Hd();
                    h.l(p, f, b, n, j, e, c);
                    var m = P && (!E || F);
                    if (b == c)(e != c && !(E & 12) || m) && o.af();
                    else(m || b != e) && a.Gc(l, w)
                }
            };
            a.Ge = function() {
                e == c && e == a.sb() && a.B(j)
            };
            a.ce = function() {
                A && A.hb == f && A.wb();
                var b = a.sb();
                b < c && h.l(i.$EVT_STATE_CHANGE, f, -b - 1, n, j, e, c)
            };
            a.gd = function(a) {
                p && b.kb(hb, a && p.wc.$Outside ? "" : "hidden")
            };
            a.nc = function(b, a) {
                if (k && a >= g) {
                    k = l;
                    v();
                    o.Kc();
                    A.wb();
                    h.l(i.$EVT_SLIDESHOW_END, f, n, u, g, c)
                }
                h.l(i.$EVT_PROGRESS_CHANGE, f, a, n, j, e, c)
            };
            a.Md = function(a) {
                if (a && !t) {
                    t = a;
                    a.$On($JssorPlayer$.xe, x)
                }
            };
            p && a.oc(p);
            g = a.Xb();
            a.oc(q);
            j = g + q.cd;
            e = g + q.id;
            c = a.Xb()
        }

        function Mb(a, c, d) {
            b.v(a, c);
            b.D(a, d)
        }

        function bc(c, b) {
            var a = x > 0 ? x : gb,
                d = Bb * b * (a & 1),
                e = Cb * b * (a >> 1 & 1);
            Mb(c, d, e)
        }

        function Rb() {
            pb = O;
            Kb = z.Hd();
            G = w.Y()
        }

        function ic() {
            Rb();
            if (B || !F && E & 12) {
                z.ib();
                h.l(i.gg)
            }
        }

        function gc(f) {
            if (!B && (F || !(E & 12)) && !z.$IsPlaying()) {
                var d = w.Y(),
                    b = c.ceil(G);
                if (f && c.abs(H) >= a.$MinDragOffsetToSlide) {
                    b = c.ceil(d);
                    b += eb
                }
                if (!(D & 1)) b = c.min(r - u, c.max(b, 0));
                var e = c.abs(b - d);
                e = 1 - c.pow(1 - e, 5);
                if (!M && pb) z.De(Kb);
                else if (d == b) {
                    tb.ee();
                    tb.zc()
                } else z.Sb(d, b, e * Xb)
            }
        }

        function Ib(a) {
            !b.j(b.jc(a), "nodrag") && b.Kb(a)
        }

        function vc(a) {
            ac(a, 1)
        }

        function ac(a, c) {
            a = b.Fd(a);
            var k = b.jc(a);
            if (!L && !b.j(k, "nodrag") && wc() && (!c || a.touches.length == 1)) {
                B = d;
                Ab = l;
                R = j;
                b.e(f, c ? "touchmove" : "mousemove", Db);
                b.O();
                M = 0;
                ic();
                if (!pb) x = 0;
                if (c) {
                    var g = a.touches[0];
                    vb = g.clientX;
                    wb = g.clientY
                } else {
                    var e = b.Nd(a);
                    vb = e.x;
                    wb = e.y
                }
                H = 0;
                bb = 0;
                eb = 0;
                h.l(i.$EVT_DRAG_START, t(G), G, a)
            }
        }

        function Db(e) {
            if (B) {
                e = b.Fd(e);
                var f;
                if (e.type != "mousemove") {
                    var l = e.touches[0];
                    f = {
                        x: l.clientX,
                        y: l.clientY
                    }
                } else f = b.Nd(e);
                if (f) {
                    var j = f.x - vb,
                        k = f.y - wb;
                    if (c.floor(G) != G) x = x || gb & L;
                    if ((j || k) && !x) {
                        if (L == 3)
                            if (c.abs(k) > c.abs(j)) x = 2;
                            else x = 1;
                        else x = L;
                        if (jb && x == 1 && c.abs(k) - c.abs(j) > 3) Ab = d
                    }
                    if (x) {
                        var a = k,
                            i = Cb;
                        if (x == 1) {
                            a = j;
                            i = Bb
                        }
                        if (!(D & 1)) {
                            if (a > 0) {
                                var g = i * s,
                                    h = a - g;
                                if (h > 0) a = g + c.sqrt(h) * 5
                            }
                            if (a < 0) {
                                var g = i * (r - u - s),
                                    h = -a - g;
                                if (h > 0) a = -g - c.sqrt(h) * 5
                            }
                        }
                        if (H - bb < -2) eb = 0;
                        else if (H - bb > 2) eb = -1;
                        bb = H;
                        H = a;
                        sb = G - H / i / (Z || 1);
                        if (H && x && !Ab) {
                            b.Kb(e);
                            if (!O) z.we(sb);
                            else z.ze(sb)
                        }
                    }
                }
            }
        }

        function mb() {
            tc();
            if (B) {
                B = l;
                b.O();
                b.N(f, "mousemove", Db);
                b.N(f, "touchmove", Db);
                M = H;
                z.ib();
                var a = w.Y();
                h.l(i.$EVT_DRAG_END, t(a), a, t(G), G);
                E & 12 && Rb();
                gc(d)
            }
        }

        function mc(c) {
            if (M) {
                b.rf(c);
                var a = b.jc(c);
                while (a && v !== a) {
                    a.tagName == "A" && b.Kb(c);
                    try {
                        a = a.parentNode
                    } catch (d) {
                        break
                    }
                }
            }
        }

        function Lb(a) {
            C[s];
            s = t(a);
            tb = C[s];
            Wb(a);
            return s
        }

        function Hc(a, b) {
            x = 0;
            Lb(a);
            h.l(i.$EVT_PARK, t(a), b)
        }

        function Wb(a, c) {
            yb = a;
            b.a(S, function(b) {
                b.Dc(t(a), a, c)
            })
        }

        function wc() {
            var b = i.ad || 0,
                a = Y;
            if (jb) a & 1 && (a &= 1);
            i.ad |= a;
            return L = a & ~b
        }

        function tc() {
            if (L) {
                i.ad &= ~Y;
                L = 0
            }
        }

        function Zb() {
            var a = b.eb();
            b.I(a, V);
            b.u(a, "absolute");
            return a
        }

        function t(a) {
            return (a % r + r) % r
        }

        function nc(b, d) {
            if (d)
                if (!D) {
                    b = c.min(c.max(b + yb, 0), r - u);
                    d = l
                } else if (D & 2) {
                b = t(b + yb);
                d = l
            }
            nb(b, a.$SlideDuration, d)
        }

        function zb() {
            b.a(S, function(a) {
                a.ec(a.Tb.$ChanceToShow <= F)
            })
        }

        function kc() {
            if (!F) {
                F = 1;
                zb();
                if (!B) {
                    E & 12 && gc();
                    E & 3 && C[s].zc()
                }
            }
        }

        function jc() {
            if (F) {
                F = 0;
                zb();
                B || !(E & 12) || ic()
            }
        }

        function lc() {
            V = {
                P: K,
                Q: J,
                $Top: 0,
                $Left: 0
            };
            b.a(T, function(a) {
                b.I(a, V);
                b.u(a, "absolute");
                b.kb(a, "hidden");
                b.S(a)
            });
            b.I(cb, V)
        }

        function lb(b, a) {
            nb(b, a, d)
        }

        function nb(h, f, k) {
            if (Tb && (!B && (F || !(E & 12)) || a.$NaviQuitDrag)) {
                O = d;
                B = l;
                z.ib();
                if (f == g) f = Xb;
                var e = Eb.sb(),
                    b = h;
                if (k) {
                    b = e + h;
                    if (h > 0) b = c.ceil(b);
                    else b = c.floor(b)
                }
                if (D & 2) b = t(b);
                if (!(D & 1)) b = c.max(0, c.min(b, r - u));
                var j = (b - e) % r;
                b = e + j;
                var i = e == b ? 0 : f * c.abs(j);
                i = c.min(i, f * u * 1.5);
                z.Sb(e, b, i || 1)
            }
        }
        h.$PlayTo = nb;
        h.$GoTo = function(a) {
            w.B(Lb(a))
        };
        h.$Next = function() {
            lb(1)
        };
        h.$Prev = function() {
            lb(-1)
        };
        h.$Pause = function() {
            P = l
        };
        h.$Play = function() {
            if (!P) {
                P = d;
                C[s] && C[s].zc()
            }
        };
        h.$SetSlideshowTransitions = function(b) {
            a.$SlideshowOptions.$Transitions = b
        };
        h.$SetCaptionTransitions = function(a) {
            I.$Transitions = a;
            I.mc = b.O()
        };
        h.$SlidesCount = function() {
            return T.length
        };
        h.$CurrentIndex = function() {
            return s
        };
        h.$IsAutoPlaying = function() {
            return P
        };
        h.$IsDragging = function() {
            return B
        };
        h.$IsSliding = function() {
            return O
        };
        h.$IsMouseOver = function() {
            return !F
        };
        h.$LastDragSucceded = function() {
            return M
        };

        function X() {
            return b.m(y || p)
        }

        function ib() {
            return b.k(y || p)
        }
        h.$OriginalWidth = h.$GetOriginalWidth = X;
        h.$OriginalHeight = h.$GetOriginalHeight = ib;

        function Gb(c, d) {
            if (c == g) return b.m(p);
            if (!y) {
                var a = b.eb(f);
                b.bd(a, b.bd(p));
                b.ac(a, b.ac(p));
                b.T(a, "block");
                b.u(a, "relative");
                b.D(a, 0);
                b.v(a, 0);
                b.kb(a, "visible");
                y = b.eb(f);
                b.u(y, "absolute");
                b.D(y, 0);
                b.v(y, 0);
                b.m(y, b.m(p));
                b.k(y, b.k(p));
                b.Hc(y, "0 0");
                b.F(y, a);
                var i = b.Ab(p);
                b.F(p, y);
                b.ab(p, "backgroundImage", "");
                b.a(i, function(c) {
                    b.F(b.j(c, "noscale") ? p : a, c);
                    b.j(c, "autocenter") && Nb.push(c)
                })
            }
            Z = c / (d ? b.k : b.m)(y);
            b.pf(y, Z);
            var h = d ? Z * X() : c,
                e = d ? c : Z * ib();
            b.m(p, h);
            b.k(p, e);
            b.a(Nb, function(a) {
                var c = b.vc(b.j(a, "autocenter"));
                b.xg(a, c)
            })
        }
        h.$ScaleHeight = h.$GetScaleHeight = function(a) {
            if (a == g) return b.k(p);
            Gb(a, d)
        };
        h.$ScaleWidth = h.$SetScaleWidth = h.$GetScaleWidth = Gb;
        h.sd = function(a) {
            var d = c.ceil(t(fb / dc)),
                b = t(a - s + d);
            if (b > u) {
                if (a - s > r / 2) a -= r;
                else if (a - s <= -r / 2) a += r
            } else a = s + b - d;
            return a
        };
        n.call(h);
        h.$Elmt = p = b.ob(p);
        var a = b.s({
            $FillMode: 0,
            $LazyLoading: 1,
            $ArrowKeyNavigation: 1,
            $StartIndex: 0,
            $AutoPlay: l,
            $Loop: 1,
            $HWA: d,
            $NaviQuitDrag: d,
            $AutoPlaySteps: 1,
            $AutoPlayInterval: 3e3,
            $PauseOnHover: 1,
            $SlideDuration: 500,
            $SlideEasing: e.$EaseOutQuad,
            $MinDragOffsetToSlide: 20,
            $SlideSpacing: 0,
            $Cols: 1,
            $Align: 0,
            $UISearchMode: 1,
            $PlayOrientation: 1,
            $DragOrientation: 1
        }, hc);
        a.$HWA = a.$HWA && b.nf();
        if (a.$Idle != g) a.$AutoPlayInterval = a.$Idle;
        if (a.$ParkingPosition != g) a.$Align = a.$ParkingPosition;
        var gb = a.$PlayOrientation & 3,
            xc = (a.$PlayOrientation & 4) / -4 || 1,
            db = a.$SlideshowOptions,
            I = b.s({
                $Class: q,
                $PlayInMode: 1,
                $PlayOutMode: 1,
                $HWA: a.$HWA
            }, a.$CaptionSliderOptions);
        I.$Transitions = I.$Transitions || I.$CaptionTransitions;
        var qb = a.$BulletNavigatorOptions,
            W = a.$ArrowNavigatorOptions,
            ab = a.$ThumbnailNavigatorOptions,
            Q = !a.$UISearchMode,
            y, v = b.A(p, "slides", Q),
            cb = b.A(p, "loading", Q) || b.eb(f),
            Jb = b.A(p, "navigator", Q),
            ec = b.A(p, "arrowleft", Q),
            cc = b.A(p, "arrowright", Q),
            Hb = b.A(p, "thumbnavigator", Q),
            pc = b.m(v),
            oc = b.k(v),
            V, T = [],
            yc = b.Ab(v);
        b.a(yc, function(a) {
            if (a.tagName == "DIV" && !b.j(a, "u")) T.push(a);
            else b.nb() && b.H(a, (b.H(a) || 0) + 1)
        });
        var s = -1,
            yb, tb, r = T.length,
            K = a.$SlideWidth || pc,
            J = a.$SlideHeight || oc,
            Yb = a.$SlideSpacing,
            Bb = K + Yb,
            Cb = J + Yb,
            dc = gb & 1 ? Bb : Cb,
            u = c.min(a.$Cols, r),
            hb, x, L, Ab, S = [],
            Sb, Ub, Qb, fc, Gc, P, E = a.$PauseOnHover,
            qc = a.$AutoPlayInterval,
            Xb = a.$SlideDuration,
            rb, ub, fb, Tb = u < r,
            D = Tb ? a.$Loop : 0,
            Y, M, F = 1,
            O, B, R, vb = 0,
            wb = 0,
            H, bb, eb, Eb, w, U, z, Vb = new sc,
            Z, Nb = [];
        if (r) {
            if (a.$HWA) Mb = function(a, c, d) {
                b.Db(a, {
                    $TranslateX: c,
                    $TranslateY: d
                })
            };
            P = a.$AutoPlay;
            h.Tb = hc;
            lc();
            b.z(p, "jssor-slider", d);
            b.H(v, b.H(v) || 0);
            b.u(v, "absolute");
            hb = b.cb(v, d);
            b.Zb(hb, v);
            if (db) {
                fc = db.$ShowLink;
                rb = db.$Class;
                ub = u == 1 && r > 1 && rb && (!b.pd() || b.Id() >= 8)
            }
            fb = ub || u >= r || !(D & 1) ? 0 : a.$Align;
            Y = (u > 1 || fb ? gb : -1) & a.$DragOrientation;
            var xb = v,
                C = [],
                A, N, Fb = b.kf(),
                jb = Fb.Wf,
                G, pb, Kb, sb;
            Fb.md && b.ab(xb, Fb.md, ([j, "pan-y", "pan-x", "none"])[Y] || "");
            U = new Dc;
            if (ub) A = new rb(Vb, K, J, db, jb);
            b.F(hb, U.Pb);
            b.kb(v, "hidden");
            N = Zb();
            b.ab(N, "backgroundColor", "#000");
            b.Bb(N, 0);
            b.Zb(N, xb.firstChild, xb);
            for (var ob = 0; ob < T.length; ob++) {
                var Ac = T[ob],
                    Cc = new Bc(Ac, ob);
                C.push(Cc)
            }
            b.S(cb);
            Eb = new Ec;
            z = new rc(Eb, U);
            if (Y) {
                b.e(v, "mousedown", ac);
                b.e(v, "touchstart", vc);
                b.e(v, "dragstart", Ib);
                b.e(v, "selectstart", Ib);
                b.e(f, "mouseup", mb);
                b.e(f, "touchend", mb);
                b.e(f, "touchcancel", mb);
                b.e(k, "blur", mb)
            }
            E &= jb ? 10 : 5;
            if (Jb && qb) {
                Sb = new qb.$Class(Jb, qb, X(), ib());
                S.push(Sb)
            }
            if (W && ec && cc) {
                W.$Loop = D;
                W.$Cols = u;
                Ub = new W.$Class(ec, cc, W, X(), ib());
                S.push(Ub)
            }
            if (Hb && ab) {
                ab.$StartIndex = a.$StartIndex;
                Qb = new ab.$Class(Hb, ab);
                S.push(Qb)
            }
            b.a(S, function(a) {
                a.yc(r, C, cb);
                a.$On(o.Vb, nc)
            });
            b.ab(p, "visibility", "visible");
            Gb(X());
            b.e(v, "click", mc, d);
            b.e(p, "mouseout", b.Jb(kc, p));
            b.e(p, "mouseover", b.Jb(jc, p));
            zb();
            a.$ArrowKeyNavigation && b.e(f, "keydown", function(b) {
                if (b.keyCode == 37) lb(-a.$ArrowKeyNavigation);
                else b.keyCode == 39 && lb(a.$ArrowKeyNavigation)
            });
            var kb = a.$StartIndex;
            if (!(D & 1)) kb = c.max(0, c.min(kb, r - u));
            z.Sb(kb, kb, 0)
        }
    };
    i.$EVT_CLICK = 21;
    i.$EVT_DRAG_START = 22;
    i.$EVT_DRAG_END = 23;
    i.$EVT_SWIPE_START = 24;
    i.$EVT_SWIPE_END = 25;
    i.$EVT_LOAD_START = 26;
    i.$EVT_LOAD_END = 27;
    i.gg = 28;
    i.$EVT_POSITION_CHANGE = 202;
    i.$EVT_PARK = 203;
    i.$EVT_SLIDESHOW_START = 206;
    i.$EVT_SLIDESHOW_END = 207;
    i.$EVT_PROGRESS_CHANGE = 208;
    i.$EVT_STATE_CHANGE = 209;
    var o = {
        Vb: 1
    };
    k.$JssorBulletNavigator$ = function(e, C) {
        var f = this;
        n.call(f);
        e = b.ob(e);
        var s, A, z, r, k = 0,
            a, m, i, w, x, h, g, q, p, B = [],
            y = [];

        function v(a) {
            a != -1 && y[a].Jc(a == k)
        }

        function t(a) {
            f.l(o.Vb, a * m)
        }
        f.$Elmt = e;
        f.Dc = function(a) {
            if (a != r) {
                var d = k,
                    b = c.floor(a / m);
                k = b;
                r = a;
                v(d);
                v(b)
            }
        };
        f.ec = function(a) {
            b.C(e, a)
        };
        var u;
        f.yc = function(E) {
            if (!u) {
                s = c.ceil(E / m);
                k = 0;
                var o = q + w,
                    r = p + x,
                    n = c.ceil(s / i) - 1;
                A = q + o * (!h ? n : i - 1);
                z = p + r * (h ? n : i - 1);
                b.m(e, A);
                b.k(e, z);
                for (var f = 0; f < s; f++) {
                    var C = b.Dg();
                    b.Ig(C, f + 1);
                    var l = b.Nc(g, "numbertemplate", C, d);
                    b.u(l, "absolute");
                    var v = f % (n + 1);
                    b.v(l, !h ? o * v : f % i * o);
                    b.D(l, h ? r * v : c.floor(f / (n + 1)) * r);
                    b.F(e, l);
                    B[f] = l;
                    a.$ActionMode & 1 && b.e(l, "click", b.E(j, t, f));
                    a.$ActionMode & 2 && b.e(l, "mouseover", b.Jb(b.E(j, t, f), l));
                    y[f] = b.Lb(l)
                }
                u = d
            }
        };
        f.Tb = a = b.s({
            $SpacingX: 10,
            $SpacingY: 10,
            $Orientation: 1,
            $ActionMode: 1
        }, C);
        g = b.A(e, "prototype");
        q = b.m(g);
        p = b.k(g);
        b.zb(g, e);
        m = a.$Steps || 1;
        i = a.$Rows || 1;
        w = a.$SpacingX;
        x = a.$SpacingY;
        h = a.$Orientation - 1;
        a.$Scale == l && b.z(e, "noscale", d);
        a.$AutoCenter && b.z(e, "autocenter", a.$AutoCenter)
    };
    k.$JssorArrowNavigator$ = function(a, g, h) {
        var c = this;
        n.call(c);
        var r, q, e, f, i;
        b.m(a);
        b.k(a);

        function k(a) {
            c.l(o.Vb, a, d)
        }

        function p(c) {
            b.C(a, c || !h.$Loop && e == 0);
            b.C(g, c || !h.$Loop && e >= q - h.$Cols);
            r = c
        }
        c.Dc = function(b, a, c) {
            if (c) e = a;
            else {
                e = b;
                p(r)
            }
        };
        c.ec = p;
        var m;
        c.yc = function(c) {
            q = c;
            e = 0;
            if (!m) {
                b.e(a, "click", b.E(j, k, -i));
                b.e(g, "click", b.E(j, k, i));
                b.Lb(a);
                b.Lb(g);
                m = d
            }
        };
        c.Tb = f = b.s({
            $Steps: 1
        }, h);
        i = f.$Steps;
        if (f.$Scale == l) {
            b.z(a, "noscale", d);
            b.z(g, "noscale", d)
        }
        if (f.$AutoCenter) {
            b.z(a, "autocenter", f.$AutoCenter);
            b.z(g, "autocenter", f.$AutoCenter)
        }
    };
    k.$JssorThumbnailNavigator$ = function(g, B) {
        var h = this,
            y, p, a, v = [],
            z, x, e, q, r, u, t, m, s, f, k;
        n.call(h);
        g = b.ob(g);

        function A(n, f) {
            var g = this,
                c, m, l;

            function q() {
                m.Jc(p == f)
            }

            function i(d) {
                if (d || !s.$LastDragSucceded()) {
                    var a = e - f % e,
                        b = s.sd((f + a) / e - 1),
                        c = b * e + e - a;
                    h.l(o.Vb, c)
                }
            }
            g.hb = f;
            g.ld = q;
            l = n.de || n.Hb || b.eb();
            g.Pb = c = b.Nc(k, "thumbnailtemplate", l, d);
            m = b.Lb(c);
            a.$ActionMode & 1 && b.e(c, "click", b.E(j, i, 0));
            a.$ActionMode & 2 && b.e(c, "mouseover", b.Jb(b.E(j, i, 1), c))
        }
        h.Dc = function(b, d, f) {
            var a = p;
            p = b;
            a != -1 && v[a].ld();
            v[b].ld();
            !f && s.$PlayTo(s.sd(c.floor(d / e)))
        };
        h.ec = function(a) {
            b.C(g, a)
        };
        var w;
        h.yc = function(F, D) {
            if (!w) {
                y = F;
                c.ceil(y / e);
                p = -1;
                m = c.min(m, D.length);
                var h = a.$Orientation & 1,
                    n = u + (u + q) * (e - 1) * (1 - h),
                    k = t + (t + r) * (e - 1) * h,
                    B = n + (n + q) * (m - 1) * h,
                    o = k + (k + r) * (m - 1) * (1 - h);
                b.u(f, "absolute");
                b.kb(f, "hidden");
                a.$AutoCenter & 1 && b.v(f, (z - B) / 2);
                a.$AutoCenter & 2 && b.D(f, (x - o) / 2);
                b.m(f, B);
                b.k(f, o);
                var j = [];
                b.a(D, function(l, g) {
                    var i = new A(l, g),
                        d = i.Pb,
                        a = c.floor(g / e),
                        k = g % e;
                    b.v(d, (u + q) * k * (1 - h));
                    b.D(d, (t + r) * k * h);
                    if (!j[a]) {
                        j[a] = b.eb();
                        b.F(f, j[a])
                    }
                    b.F(j[a], d);
                    v.push(i)
                });
                var E = b.s({
                    $AutoPlay: l,
                    $NaviQuitDrag: l,
                    $SlideWidth: n,
                    $SlideHeight: k,
                    $SlideSpacing: q * h + r * (1 - h),
                    $MinDragOffsetToSlide: 12,
                    $SlideDuration: 200,
                    $PauseOnHover: 1,
                    $PlayOrientation: a.$Orientation,
                    $DragOrientation: a.$NoDrag || a.$DisableDrag ? 0 : a.$Orientation
                }, a);
                s = new i(g, E);
                w = d
            }
        };
        h.Tb = a = b.s({
            $SpacingX: 0,
            $SpacingY: 0,
            $Cols: 1,
            $Orientation: 1,
            $AutoCenter: 3,
            $ActionMode: 1
        }, B);
        z = b.m(g);
        x = b.k(g);
        f = b.A(g, "slides", d);
        k = b.A(f, "prototype");
        u = b.m(k);
        t = b.k(k);
        b.zb(k, f);
        e = a.$Rows || 1;
        q = a.$SpacingX;
        r = a.$SpacingY;
        m = a.$Cols;
        a.$Scale == l && b.z(g, "noscale", d)
    };

    function q(e, d, c) {
        var a = this;
        m.call(a, 0, c);
        a.Cd = b.Uc;
        a.cd = 0;
        a.id = c
    }
    k.$JssorCaptionSlideo$ = function(n, f, l) {
        var a = this,
            o, g = {},
            i = f.$Transitions,
            c = new m(0, 0);
        m.call(a, 0, 0);

        function j(d, c) {
            var a = {};
            b.a(d, function(d, f) {
                var e = g[f];
                if (e) {
                    if (b.Zc(d)) d = j(d, c || f == "e");
                    else if (c)
                        if (b.Ub(d)) d = o[d];
                    a[e] = d
                }
            });
            return a
        }

        function k(e, c) {
            var a = [],
                d = b.Ab(e);
            b.a(d, function(d) {
                var h = b.j(d, "u") == "caption";
                if (h) {
                    var e = b.j(d, "t"),
                        g = i[b.vc(e)] || i[e],
                        f = {
                            $Elmt: d,
                            wc: g
                        };
                    a.push(f)
                }
                if (c < 5) a = a.concat(k(d, c + 1))
            });
            return a
        }

        function r(d, e, a) {
            b.a(e, function(g) {
                var e = j(g),
                    f = b.gc(e.$Easing);
                if (e.$Left) {
                    e.R = e.$Left;
                    f.R = f.$Left;
                    delete e.$Left
                }
                if (e.$Top) {
                    e.K = e.$Top;
                    f.K = f.$Top;
                    delete e.$Top
                }
                var h = {
                        $Easing: f,
                        $OriginalWidth: a.P,
                        $OriginalHeight: a.Q
                    },
                    i = new m(g.b, g.d, h, d, a, e);
                c.xb(i);
                a = b.Ve(a, e)
            });
            return a
        }

        function q(a) {
            b.a(a, function(f) {
                var a = f.$Elmt,
                    e = b.m(a),
                    d = b.k(a),
                    c = {
                        $Left: b.v(a),
                        $Top: b.D(a),
                        R: 0,
                        K: 0,
                        $Opacity: 1,
                        $ZIndex: b.H(a) || 0,
                        $Rotate: 0,
                        $RotateX: 0,
                        $RotateY: 0,
                        $ScaleX: 1,
                        $ScaleY: 1,
                        $TranslateX: 0,
                        $TranslateY: 0,
                        $TranslateZ: 0,
                        $SkewX: 0,
                        $SkewY: 0,
                        P: e,
                        Q: d,
                        $Clip: {
                            $Top: 0,
                            $Right: e,
                            $Bottom: d,
                            $Left: 0
                        }
                    };
                c.hd = c.$Left;
                c.Vc = c.$Top;
                r(a, f.wc, c)
            })
        }

        function t(g, f, h) {
            var e = g.b - f;
            if (e) {
                var b = new m(f, e);
                b.xb(c, d);
                b.$Shift(h);
                a.xb(b)
            }
            a.Ie(g.d);
            return e
        }

        function s(f) {
            var d = c.lc(),
                e = 0;
            b.a(f, function(c, f) {
                c = b.s({
                    d: l
                }, c);
                t(c, d, e);
                d = c.b;
                e += c.d;
                if (!f || c.t == 2) {
                    a.cd = d;
                    a.id = d + c.d
                }
            })
        }
        a.Cd = function() {
            a.B(-1, d)
        };
        o = [h.$Swing, h.$Linear, h.$InQuad, h.$OutQuad, h.$InOutQuad, h.$InCubic, h.$OutCubic, h.$InOutCubic, h.$InQuart, h.$OutQuart, h.$InOutQuart, h.$InQuint, h.$OutQuint, h.$InOutQuint, h.$InSine, h.$OutSine, h.$InOutSine, h.$InExpo, h.$OutExpo, h.$InOutExpo, h.$InCirc, h.$OutCirc, h.$InOutCirc, h.$InElastic, h.$OutElastic, h.$InOutElastic, h.$InBack, h.$OutBack, h.$InOutBack, h.$InBounce, h.$OutBounce, h.$InOutBounce, h.$GoBack, h.$InWave, h.$OutWave, h.$OutJump, h.$InJump];
        var u = {
            $Top: "y",
            $Left: "x",
            $Bottom: "m",
            $Right: "t",
            $Rotate: "r",
            $RotateX: "rX",
            $RotateY: "rY",
            $ScaleX: "sX",
            $ScaleY: "sY",
            $TranslateX: "tX",
            $TranslateY: "tY",
            $TranslateZ: "tZ",
            $SkewX: "kX",
            $SkewY: "kY",
            $Opacity: "o",
            $Easing: "e",
            $ZIndex: "i",
            $Clip: "c"
        };
        b.a(u, function(b, a) {
            g[b] = a
        });
        q(k(n, 1));
        c.B(-1);
        var p = f.$Breaks || [],
            e = [].concat(p[b.vc(b.j(n, "b"))] || []);
        e.push({
            b: c.Xb(),
            d: e.length ? 0 : l
        });
        s(e);
        a.B(-1)
    }
})(window, document, Math, null, true, false)
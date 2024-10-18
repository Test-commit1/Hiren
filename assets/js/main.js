/*! For license information please see main.js.LICENSE.txt */
(() => {
    var t = {
            48: t => {
                t.exports = ({
                    diameter: t = 80,
                    borderWidth: e = 1,
                    borderColor: i = "#fff",
                    easing: n = 4,
                    background: r = "transparent"
                } = {}) => {
                    let s = !1;
                    const o = {
                            x: 0,
                            y: 0,
                            o: 1,
                            d: t
                        },
                        a = {
                            x: 0,
                            y: 0,
                            o: 0,
                            d: t
                        },
                        l = document.createElement("div"),
                        c = n / 15;
                    l.style = `position:fixed;top:0;left:0;border-radius:100%;pointer-events:none;opacity:0;height:${t}px;width:${t}px;background:${r};border:${e}px solid ${i};mix-blend-mode:exclusion;transition:background ${c}s,border ${c}s;will-change:transform`, document.addEventListener("mousemove", (t => {
                        o.x = t.clientX, o.y = t.clientY, l.style.opacity = 1, s || (document.body.append(l), a.x = o.x, a.y = o.y, s = !0, h())
                    }));
                    const h = () => {
                        const t = o.x - a.x,
                            e = o.y - a.y;
                        a.x += t / n, a.y += e / n;
                        const i = `translate3d(${a.x-a.d/2}px,${a.y-a.d/2}px,0)`;
                        l.style.webkitTransform = i, l.style.transform = i;
                        const r = o.o - a.o;
                        a.o += r / n, l.style.opacity = a.o;
                        const s = o.d - a.d;
                        a.d += s / n, l.style.height = a.d + "px", l.style.width = a.d + "px";
                        try {
                            requestAnimationFrame(h)
                        } catch (t) {
                            setImmediate(h)
                        }
                    };
                    return l.over = (e, n) => {
                        const s = e => {
                            e.addEventListener("mouseover", (e => {
                                n.background && (l.style.backgroundColor = n.background), n.borderColor && (l.style.borderColor = n.borderColor), n.scale && (o.d = t * n.scale)
                            })), e.addEventListener("mouseout", (e => {
                                n.background && (l.style.backgroundColor = r), n.borderColor && (l.style.borderColor = i), n.scale && (o.d = t)
                            }))
                        };
                        var a, c;
                        e instanceof HTMLElement ? s(e) : (c = e, "[object String]" === Object.prototype.toString.call(c) && (a = e, Array.prototype.slice.call(document.querySelectorAll(a))).forEach(s))
                    }, l
                }
            },
            614: function(t) {
                var e;
                e = function() {
                    return function(t) {
                        var e = {};

                        function i(n) {
                            if (e[n]) return e[n].exports;
                            var r = e[n] = {
                                exports: {},
                                id: n,
                                loaded: !1
                            };
                            return t[n].call(r.exports, r, r.exports, i), r.loaded = !0, r.exports
                        }
                        return i.m = t, i.c = e, i.p = "", i(0)
                    }([function(t, e, i) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                        var n = function() {
                                function t(t, e) {
                                    for (var i = 0; i < e.length; i++) {
                                        var n = e[i];
                                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                                    }
                                }
                                return function(e, i, n) {
                                    return i && t(e.prototype, i), n && t(e, n), e
                                }
                            }(),
                            r = i(1),
                            s = i(3),
                            o = function() {
                                function t(e, i) {
                                    ! function(t, e) {
                                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                    }(this, t), r.initializer.load(this, i, e), this.begin()
                                }
                                return n(t, [{
                                    key: "toggle",
                                    value: function() {
                                        this.pause.status ? this.start() : this.stop()
                                    }
                                }, {
                                    key: "stop",
                                    value: function() {
                                        this.typingComplete || this.pause.status || (this.toggleBlinking(!0), this.pause.status = !0, this.options.onStop(this.arrayPos, this))
                                    }
                                }, {
                                    key: "start",
                                    value: function() {
                                        this.typingComplete || this.pause.status && (this.pause.status = !1, this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos), this.options.onStart(this.arrayPos, this))
                                    }
                                }, {
                                    key: "destroy",
                                    value: function() {
                                        this.reset(!1), this.options.onDestroy(this)
                                    }
                                }, {
                                    key: "reset",
                                    value: function() {
                                        var t = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                                        clearInterval(this.timeout), this.replaceText(""), this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor), this.cursor = null), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, t && (this.insertCursor(), this.options.onReset(this), this.begin())
                                    }
                                }, {
                                    key: "begin",
                                    value: function() {
                                        var t = this;
                                        this.options.onBegin(this), this.typingComplete = !1, this.shuffleStringsIfNeeded(this), this.insertCursor(), this.bindInputFocusEvents && this.bindFocusEvents(), this.timeout = setTimeout((function() {
                                            t.currentElContent && 0 !== t.currentElContent.length ? t.backspace(t.currentElContent, t.currentElContent.length) : t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos)
                                        }), this.startDelay)
                                    }
                                }, {
                                    key: "typewrite",
                                    value: function(t, e) {
                                        var i = this;
                                        this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass), this.cursor && this.cursor.classList.remove(this.fadeOutClass));
                                        var n = this.humanizer(this.typeSpeed),
                                            r = 1;
                                        !0 !== this.pause.status ? this.timeout = setTimeout((function() {
                                            e = s.htmlParser.typeHtmlChars(t, e, i);
                                            var n = 0,
                                                o = t.substr(e);
                                            if ("^" === o.charAt(0) && /^\^\d+/.test(o)) {
                                                var a = 1;
                                                a += (o = /\d+/.exec(o)[0]).length, n = parseInt(o), i.temporaryPause = !0, i.options.onTypingPaused(i.arrayPos, i), t = t.substring(0, e) + t.substring(e + a), i.toggleBlinking(!0)
                                            }
                                            if ("`" === o.charAt(0)) {
                                                for (;
                                                    "`" !== t.substr(e + r).charAt(0) && (r++, !(e + r > t.length)););
                                                var l = t.substring(0, e),
                                                    c = t.substring(l.length + 1, e + r),
                                                    h = t.substring(e + r + 1);
                                                t = l + c + h, r--
                                            }
                                            i.timeout = setTimeout((function() {
                                                i.toggleBlinking(!1), e >= t.length ? i.doneTyping(t, e) : i.keepTyping(t, e, r), i.temporaryPause && (i.temporaryPause = !1, i.options.onTypingResumed(i.arrayPos, i))
                                            }), n)
                                        }), n) : this.setPauseStatus(t, e, !0)
                                    }
                                }, {
                                    key: "keepTyping",
                                    value: function(t, e, i) {
                                        0 === e && (this.toggleBlinking(!1), this.options.preStringTyped(this.arrayPos, this)), e += i;
                                        var n = t.substr(0, e);
                                        this.replaceText(n), this.typewrite(t, e)
                                    }
                                }, {
                                    key: "doneTyping",
                                    value: function(t, e) {
                                        var i = this;
                                        this.options.onStringTyped(this.arrayPos, this), this.toggleBlinking(!0), this.arrayPos === this.strings.length - 1 && (this.complete(), !1 === this.loop || this.curLoop === this.loopCount) || (this.timeout = setTimeout((function() {
                                            i.backspace(t, e)
                                        }), this.backDelay))
                                    }
                                }, {
                                    key: "backspace",
                                    value: function(t, e) {
                                        var i = this;
                                        if (!0 !== this.pause.status) {
                                            if (this.fadeOut) return this.initFadeOut();
                                            this.toggleBlinking(!1);
                                            var n = this.humanizer(this.backSpeed);
                                            this.timeout = setTimeout((function() {
                                                e = s.htmlParser.backSpaceHtmlChars(t, e, i);
                                                var n = t.substr(0, e);
                                                if (i.replaceText(n), i.smartBackspace) {
                                                    var r = i.strings[i.arrayPos + 1];
                                                    r && n === r.substr(0, e) ? i.stopNum = e : i.stopNum = 0
                                                }
                                                e > i.stopNum ? (e--, i.backspace(t, e)) : e <= i.stopNum && (i.arrayPos++, i.arrayPos === i.strings.length ? (i.arrayPos = 0, i.options.onLastStringBackspaced(), i.shuffleStringsIfNeeded(), i.begin()) : i.typewrite(i.strings[i.sequence[i.arrayPos]], e))
                                            }), n)
                                        } else this.setPauseStatus(t, e, !1)
                                    }
                                }, {
                                    key: "complete",
                                    value: function() {
                                        this.options.onComplete(this), this.loop ? this.curLoop++ : this.typingComplete = !0
                                    }
                                }, {
                                    key: "setPauseStatus",
                                    value: function(t, e, i) {
                                        this.pause.typewrite = i, this.pause.curString = t, this.pause.curStrPos = e
                                    }
                                }, {
                                    key: "toggleBlinking",
                                    value: function(t) {
                                        this.cursor && (this.pause.status || this.cursorBlinking !== t && (this.cursorBlinking = t, t ? this.cursor.classList.add("typed-cursor--blink") : this.cursor.classList.remove("typed-cursor--blink")))
                                    }
                                }, {
                                    key: "humanizer",
                                    value: function(t) {
                                        return Math.round(Math.random() * t / 2) + t
                                    }
                                }, {
                                    key: "shuffleStringsIfNeeded",
                                    value: function() {
                                        this.shuffle && (this.sequence = this.sequence.sort((function() {
                                            return Math.random() - .5
                                        })))
                                    }
                                }, {
                                    key: "initFadeOut",
                                    value: function() {
                                        var t = this;
                                        return this.el.className += " " + this.fadeOutClass, this.cursor && (this.cursor.className += " " + this.fadeOutClass), setTimeout((function() {
                                            t.arrayPos++, t.replaceText(""), t.strings.length > t.arrayPos ? t.typewrite(t.strings[t.sequence[t.arrayPos]], 0) : (t.typewrite(t.strings[0], 0), t.arrayPos = 0)
                                        }), this.fadeOutDelay)
                                    }
                                }, {
                                    key: "replaceText",
                                    value: function(t) {
                                        this.attr ? this.el.setAttribute(this.attr, t) : this.isInput ? this.el.value = t : "html" === this.contentType ? this.el.innerHTML = t : this.el.textContent = t
                                    }
                                }, {
                                    key: "bindFocusEvents",
                                    value: function() {
                                        var t = this;
                                        this.isInput && (this.el.addEventListener("focus", (function(e) {
                                            t.stop()
                                        })), this.el.addEventListener("blur", (function(e) {
                                            t.el.value && 0 !== t.el.value.length || t.start()
                                        })))
                                    }
                                }, {
                                    key: "insertCursor",
                                    value: function() {
                                        this.showCursor && (this.cursor || (this.cursor = document.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.setAttribute("aria-hidden", !0), this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)))
                                    }
                                }]), t
                            }();
                        e.default = o, t.exports = e.default
                    }, function(t, e, i) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                        var n, r = Object.assign || function(t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var i = arguments[e];
                                    for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
                                }
                                return t
                            },
                            s = function() {
                                function t(t, e) {
                                    for (var i = 0; i < e.length; i++) {
                                        var n = e[i];
                                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                                    }
                                }
                                return function(e, i, n) {
                                    return i && t(e.prototype, i), n && t(e, n), e
                                }
                            }(),
                            o = (n = i(2)) && n.__esModule ? n : {
                                default: n
                            },
                            a = function() {
                                function t() {
                                    ! function(t, e) {
                                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                    }(this, t)
                                }
                                return s(t, [{
                                    key: "load",
                                    value: function(t, e, i) {
                                        if (t.el = "string" == typeof i ? document.querySelector(i) : i, t.options = r({}, o.default, e), t.isInput = "input" === t.el.tagName.toLowerCase(), t.attr = t.options.attr, t.bindInputFocusEvents = t.options.bindInputFocusEvents, t.showCursor = !t.isInput && t.options.showCursor, t.cursorChar = t.options.cursorChar, t.cursorBlinking = !0, t.elContent = t.attr ? t.el.getAttribute(t.attr) : t.el.textContent, t.contentType = t.options.contentType, t.typeSpeed = t.options.typeSpeed, t.startDelay = t.options.startDelay, t.backSpeed = t.options.backSpeed, t.smartBackspace = t.options.smartBackspace, t.backDelay = t.options.backDelay, t.fadeOut = t.options.fadeOut, t.fadeOutClass = t.options.fadeOutClass, t.fadeOutDelay = t.options.fadeOutDelay, t.isPaused = !1, t.strings = t.options.strings.map((function(t) {
                                                return t.trim()
                                            })), "string" == typeof t.options.stringsElement ? t.stringsElement = document.querySelector(t.options.stringsElement) : t.stringsElement = t.options.stringsElement, t.stringsElement) {
                                            t.strings = [], t.stringsElement.style.display = "none";
                                            var n = Array.prototype.slice.apply(t.stringsElement.children),
                                                s = n.length;
                                            if (s)
                                                for (var a = 0; a < s; a += 1) {
                                                    var l = n[a];
                                                    t.strings.push(l.innerHTML.trim())
                                                }
                                        }
                                        for (var a in t.strPos = 0, t.arrayPos = 0, t.stopNum = 0, t.loop = t.options.loop, t.loopCount = t.options.loopCount, t.curLoop = 0, t.shuffle = t.options.shuffle, t.sequence = [], t.pause = {
                                                status: !1,
                                                typewrite: !0,
                                                curString: "",
                                                curStrPos: 0
                                            }, t.typingComplete = !1, t.strings) t.sequence[a] = a;
                                        t.currentElContent = this.getCurrentElContent(t), t.autoInsertCss = t.options.autoInsertCss, this.appendAnimationCss(t)
                                    }
                                }, {
                                    key: "getCurrentElContent",
                                    value: function(t) {
                                        return t.attr ? t.el.getAttribute(t.attr) : t.isInput ? t.el.value : "html" === t.contentType ? t.el.innerHTML : t.el.textContent
                                    }
                                }, {
                                    key: "appendAnimationCss",
                                    value: function(t) {
                                        var e = "data-typed-js-css";
                                        if (t.autoInsertCss && (t.showCursor || t.fadeOut) && !document.querySelector("[" + e + "]")) {
                                            var i = document.createElement("style");
                                            i.type = "text/css", i.setAttribute(e, !0);
                                            var n = "";
                                            t.showCursor && (n += "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "), t.fadeOut && (n += "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "), 0 !== i.length && (i.innerHTML = n, document.body.appendChild(i))
                                        }
                                    }
                                }]), t
                            }();
                        e.default = a;
                        var l = new a;
                        e.initializer = l
                    }, function(t, e) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                        e.default = {
                            strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
                            stringsElement: null,
                            typeSpeed: 0,
                            startDelay: 0,
                            backSpeed: 0,
                            smartBackspace: !0,
                            shuffle: !1,
                            backDelay: 700,
                            fadeOut: !1,
                            fadeOutClass: "typed-fade-out",
                            fadeOutDelay: 500,
                            loop: !1,
                            loopCount: 1 / 0,
                            showCursor: !0,
                            cursorChar: "|",
                            autoInsertCss: !0,
                            attr: null,
                            bindInputFocusEvents: !1,
                            contentType: "html",
                            onBegin: function(t) {},
                            onComplete: function(t) {},
                            preStringTyped: function(t, e) {},
                            onStringTyped: function(t, e) {},
                            onLastStringBackspaced: function(t) {},
                            onTypingPaused: function(t, e) {},
                            onTypingResumed: function(t, e) {},
                            onReset: function(t) {},
                            onStop: function(t, e) {},
                            onStart: function(t, e) {},
                            onDestroy: function(t) {}
                        }, t.exports = e.default
                    }, function(t, e) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                        var i = function() {
                                function t(t, e) {
                                    for (var i = 0; i < e.length; i++) {
                                        var n = e[i];
                                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                                    }
                                }
                                return function(e, i, n) {
                                    return i && t(e.prototype, i), n && t(e, n), e
                                }
                            }(),
                            n = function() {
                                function t() {
                                    ! function(t, e) {
                                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                    }(this, t)
                                }
                                return i(t, [{
                                    key: "typeHtmlChars",
                                    value: function(t, e, i) {
                                        if ("html" !== i.contentType) return e;
                                        var n = t.substr(e).charAt(0);
                                        if ("<" === n || "&" === n) {
                                            var r;
                                            for (r = "<" === n ? ">" : ";"; t.substr(e + 1).charAt(0) !== r && !(1 + ++e > t.length););
                                            e++
                                        }
                                        return e
                                    }
                                }, {
                                    key: "backSpaceHtmlChars",
                                    value: function(t, e, i) {
                                        if ("html" !== i.contentType) return e;
                                        var n = t.substr(e).charAt(0);
                                        if (">" === n || ";" === n) {
                                            var r;
                                            for (r = ">" === n ? "<" : "&"; t.substr(e - 1).charAt(0) !== r && !(--e < 0););
                                            e--
                                        }
                                        return e
                                    }
                                }]), t
                            }();
                        e.default = n;
                        var r = new n;
                        e.htmlParser = r
                    }])
                }, t.exports = e()
            },
            662: t => {
                "use strict";
                var e = function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    },
                    i = function() {
                        function t(i) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            if (e(this, t), !(i instanceof Node)) throw "Can't initialize VanillaTilt because " + i + " is not a Node.";
                            this.width = null, this.height = null, this.clientWidth = null, this.clientHeight = null, this.left = null, this.top = null, this.gammazero = null, this.betazero = null, this.lastgammazero = null, this.lastbetazero = null, this.transitionTimeout = null, this.updateCall = null, this.event = null, this.updateBind = this.update.bind(this), this.resetBind = this.reset.bind(this), this.element = i, this.settings = this.extendSettings(n), this.reverse = this.settings.reverse ? -1 : 1, this.glare = t.isSettingTrue(this.settings.glare), this.glarePrerender = t.isSettingTrue(this.settings["glare-prerender"]), this.fullPageListening = t.isSettingTrue(this.settings["full-page-listening"]), this.gyroscope = t.isSettingTrue(this.settings.gyroscope), this.gyroscopeSamples = this.settings.gyroscopeSamples, this.elementListener = this.getElementListener(), this.glare && this.prepareGlare(), this.fullPageListening && this.updateClientSize(), this.addEventListeners(), this.reset(), this.updateInitialPosition()
                        }
                        return t.isSettingTrue = function(t) {
                            return "" === t || !0 === t || 1 === t
                        }, t.prototype.getElementListener = function() {
                            if (this.fullPageListening) return window.document;
                            if ("string" == typeof this.settings["mouse-event-element"]) {
                                var t = document.querySelector(this.settings["mouse-event-element"]);
                                if (t) return t
                            }
                            return this.settings["mouse-event-element"] instanceof Node ? this.settings["mouse-event-element"] : this.element
                        }, t.prototype.addEventListeners = function() {
                            this.onMouseEnterBind = this.onMouseEnter.bind(this), this.onMouseMoveBind = this.onMouseMove.bind(this), this.onMouseLeaveBind = this.onMouseLeave.bind(this), this.onWindowResizeBind = this.onWindowResize.bind(this), this.onDeviceOrientationBind = this.onDeviceOrientation.bind(this), this.elementListener.addEventListener("mouseenter", this.onMouseEnterBind), this.elementListener.addEventListener("mouseleave", this.onMouseLeaveBind), this.elementListener.addEventListener("mousemove", this.onMouseMoveBind), (this.glare || this.fullPageListening) && window.addEventListener("resize", this.onWindowResizeBind), this.gyroscope && window.addEventListener("deviceorientation", this.onDeviceOrientationBind)
                        }, t.prototype.removeEventListeners = function() {
                            this.elementListener.removeEventListener("mouseenter", this.onMouseEnterBind), this.elementListener.removeEventListener("mouseleave", this.onMouseLeaveBind), this.elementListener.removeEventListener("mousemove", this.onMouseMoveBind), this.gyroscope && window.removeEventListener("deviceorientation", this.onDeviceOrientationBind), (this.glare || this.fullPageListening) && window.removeEventListener("resize", this.onWindowResizeBind)
                        }, t.prototype.destroy = function() {
                            clearTimeout(this.transitionTimeout), null !== this.updateCall && cancelAnimationFrame(this.updateCall), this.reset(), this.removeEventListeners(), this.element.vanillaTilt = null, delete this.element.vanillaTilt, this.element = null
                        }, t.prototype.onDeviceOrientation = function(t) {
                            if (null !== t.gamma && null !== t.beta) {
                                this.updateElementPosition(), this.gyroscopeSamples > 0 && (this.lastgammazero = this.gammazero, this.lastbetazero = this.betazero, null === this.gammazero ? (this.gammazero = t.gamma, this.betazero = t.beta) : (this.gammazero = (t.gamma + this.lastgammazero) / 2, this.betazero = (t.beta + this.lastbetazero) / 2), this.gyroscopeSamples -= 1);
                                var e = this.settings.gyroscopeMaxAngleX - this.settings.gyroscopeMinAngleX,
                                    i = this.settings.gyroscopeMaxAngleY - this.settings.gyroscopeMinAngleY,
                                    n = e / this.width,
                                    r = i / this.height,
                                    s = (t.gamma - (this.settings.gyroscopeMinAngleX + this.gammazero)) / n,
                                    o = (t.beta - (this.settings.gyroscopeMinAngleY + this.betazero)) / r;
                                null !== this.updateCall && cancelAnimationFrame(this.updateCall), this.event = {
                                    clientX: s + this.left,
                                    clientY: o + this.top
                                }, this.updateCall = requestAnimationFrame(this.updateBind)
                            }
                        }, t.prototype.onMouseEnter = function() {
                            this.updateElementPosition(), this.element.style.willChange = "transform", this.setTransition()
                        }, t.prototype.onMouseMove = function(t) {
                            null !== this.updateCall && cancelAnimationFrame(this.updateCall), this.event = t, this.updateCall = requestAnimationFrame(this.updateBind)
                        }, t.prototype.onMouseLeave = function() {
                            this.setTransition(), this.settings.reset && requestAnimationFrame(this.resetBind)
                        }, t.prototype.reset = function() {
                            this.event = {
                                clientX: this.left + this.width / 2,
                                clientY: this.top + this.height / 2
                            }, this.element && this.element.style && (this.element.style.transform = "perspective(" + this.settings.perspective + "px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"), this.resetGlare()
                        }, t.prototype.resetGlare = function() {
                            this.glare && (this.glareElement.style.transform = "rotate(180deg) translate(-50%, -50%)", this.glareElement.style.opacity = "0")
                        }, t.prototype.updateInitialPosition = function() {
                            if (0 !== this.settings.startX || 0 !== this.settings.startY) {
                                this.onMouseEnter(), this.fullPageListening ? this.event = {
                                    clientX: (this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.clientWidth,
                                    clientY: (this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.clientHeight
                                } : this.event = {
                                    clientX: this.left + (this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.width,
                                    clientY: this.top + (this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.height
                                };
                                var t = this.settings.scale;
                                this.settings.scale = 1, this.update(), this.settings.scale = t, this.resetGlare()
                            }
                        }, t.prototype.getValues = function() {
                            var t = void 0,
                                e = void 0;
                            return this.fullPageListening ? (t = this.event.clientX / this.clientWidth, e = this.event.clientY / this.clientHeight) : (t = (this.event.clientX - this.left) / this.width, e = (this.event.clientY - this.top) / this.height), t = Math.min(Math.max(t, 0), 1), e = Math.min(Math.max(e, 0), 1), {
                                tiltX: (this.reverse * (this.settings.max - t * this.settings.max * 2)).toFixed(2),
                                tiltY: (this.reverse * (e * this.settings.max * 2 - this.settings.max)).toFixed(2),
                                percentageX: 100 * t,
                                percentageY: 100 * e,
                                angle: Math.atan2(this.event.clientX - (this.left + this.width / 2), -(this.event.clientY - (this.top + this.height / 2))) * (180 / Math.PI)
                            }
                        }, t.prototype.updateElementPosition = function() {
                            var t = this.element.getBoundingClientRect();
                            this.width = this.element.offsetWidth, this.height = this.element.offsetHeight, this.left = t.left, this.top = t.top
                        }, t.prototype.update = function() {
                            var t = this.getValues();
                            this.element.style.transform = "perspective(" + this.settings.perspective + "px) rotateX(" + ("x" === this.settings.axis ? 0 : t.tiltY) + "deg) rotateY(" + ("y" === this.settings.axis ? 0 : t.tiltX) + "deg) scale3d(" + this.settings.scale + ", " + this.settings.scale + ", " + this.settings.scale + ")", this.glare && (this.glareElement.style.transform = "rotate(" + t.angle + "deg) translate(-50%, -50%)", this.glareElement.style.opacity = "" + t.percentageY * this.settings["max-glare"] / 100), this.element.dispatchEvent(new CustomEvent("tiltChange", {
                                detail: t
                            })), this.updateCall = null
                        }, t.prototype.prepareGlare = function() {
                            if (!this.glarePrerender) {
                                var t = document.createElement("div");
                                t.classList.add("js-tilt-glare");
                                var e = document.createElement("div");
                                e.classList.add("js-tilt-glare-inner"), t.appendChild(e), this.element.appendChild(t)
                            }
                            this.glareElementWrapper = this.element.querySelector(".js-tilt-glare"), this.glareElement = this.element.querySelector(".js-tilt-glare-inner"), this.glarePrerender || (Object.assign(this.glareElementWrapper.style, {
                                position: "absolute",
                                top: "0",
                                left: "0",
                                width: "100%",
                                height: "100%",
                                overflow: "hidden",
                                "pointer-events": "none"
                            }), Object.assign(this.glareElement.style, {
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                "pointer-events": "none",
                                "background-image": "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
                                transform: "rotate(180deg) translate(-50%, -50%)",
                                "transform-origin": "0% 0%",
                                opacity: "0"
                            }), this.updateGlareSize())
                        }, t.prototype.updateGlareSize = function() {
                            if (this.glare) {
                                var t = 2 * (this.element.offsetWidth > this.element.offsetHeight ? this.element.offsetWidth : this.element.offsetHeight);
                                Object.assign(this.glareElement.style, {
                                    width: t + "px",
                                    height: t + "px"
                                })
                            }
                        }, t.prototype.updateClientSize = function() {
                            this.clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, this.clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
                        }, t.prototype.onWindowResize = function() {
                            this.updateGlareSize(), this.updateClientSize()
                        }, t.prototype.setTransition = function() {
                            var t = this;
                            clearTimeout(this.transitionTimeout), this.element.style.transition = this.settings.speed + "ms " + this.settings.easing, this.glare && (this.glareElement.style.transition = "opacity " + this.settings.speed + "ms " + this.settings.easing), this.transitionTimeout = setTimeout((function() {
                                t.element.style.transition = "", t.glare && (t.glareElement.style.transition = "")
                            }), this.settings.speed)
                        }, t.prototype.extendSettings = function(t) {
                            var e = {
                                    reverse: !1,
                                    max: 15,
                                    startX: 0,
                                    startY: 0,
                                    perspective: 1e3,
                                    easing: "cubic-bezier(.03,.98,.52,.99)",
                                    scale: 1,
                                    speed: 300,
                                    transition: !0,
                                    axis: null,
                                    glare: !1,
                                    "max-glare": 1,
                                    "glare-prerender": !1,
                                    "full-page-listening": !1,
                                    "mouse-event-element": null,
                                    reset: !0,
                                    gyroscope: !0,
                                    gyroscopeMinAngleX: -45,
                                    gyroscopeMaxAngleX: 45,
                                    gyroscopeMinAngleY: -45,
                                    gyroscopeMaxAngleY: 45,
                                    gyroscopeSamples: 10
                                },
                                i = {};
                            for (var n in e)
                                if (n in t) i[n] = t[n];
                                else if (this.element.hasAttribute("data-tilt-" + n)) {
                                var r = this.element.getAttribute("data-tilt-" + n);
                                try {
                                    i[n] = JSON.parse(r)
                                } catch (t) {
                                    i[n] = r
                                }
                            } else i[n] = e[n];
                            return i
                        }, t.init = function(e, i) {
                            e instanceof Node && (e = [e]), e instanceof NodeList && (e = [].slice.call(e)), e instanceof Array && e.forEach((function(e) {
                                "vanillaTilt" in e || (e.vanillaTilt = new t(e, i))
                            }))
                        }, t
                    }();
                "undefined" != typeof document && (window.VanillaTilt = i, i.init(document.querySelectorAll("[data-tilt]"))), t.exports = i
            }
        },
        e = {};

    function i(n) {
        var r = e[n];
        if (void 0 !== r) return r.exports;
        var s = e[n] = {
            exports: {}
        };
        return t[n].call(s.exports, s, s.exports, i), s.exports
    }
    i.n = t => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return i.d(e, {
            a: e
        }), e
    }, i.d = (t, e) => {
        for (var n in e) i.o(e, n) && !i.o(t, n) && Object.defineProperty(t, n, {
            enumerable: !0,
            get: e[n]
        })
    }, i.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window) return window
        }
    }(), i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), (() => {
        "use strict";

        function t(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }

        function e(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
        }
        var n, r, s, o, a, l, c, h, u, f, d, p, g, m, v, y = {
                autoSleep: 120,
                force3D: "auto",
                nullTargetWarn: 1,
                units: {
                    lineHeight: ""
                }
            },
            _ = {
                duration: .5,
                overwrite: !1,
                delay: 0
            },
            b = 1e8,
            w = 1e-8,
            x = 2 * Math.PI,
            T = x / 4,
            k = 0,
            S = Math.sqrt,
            E = Math.cos,
            O = Math.sin,
            C = function(t) {
                return "string" == typeof t
            },
            M = function(t) {
                return "function" == typeof t
            },
            A = function(t) {
                return "number" == typeof t
            },
            P = function(t) {
                return void 0 === t
            },
            D = function(t) {
                return "object" == typeof t
            },
            L = function(t) {
                return !1 !== t
            },
            B = function() {
                return "undefined" != typeof window
            },
            R = function(t) {
                return M(t) || C(t)
            },
            z = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
            I = Array.isArray,
            Y = /(?:-?\.?\d|\.)+/gi,
            j = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
            F = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
            X = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
            H = /[+-]=-?[.\d]+/,
            W = /[^,'"\[\]\s]+/gi,
            q = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
            N = {},
            V = {},
            U = function(t) {
                return (V = wt(t, N)) && bi
            },
            G = function(t, e) {
                return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
            },
            $ = function(t, e) {
                return !e && console.warn(t)
            },
            K = function(t, e) {
                return t && (N[t] = e) && V && (V[t] = e) || N
            },
            Q = function() {
                return 0
            },
            Z = {
                suppressEvents: !0,
                isStart: !0
            },
            J = {
                suppressEvents: !0
            },
            tt = {},
            et = [],
            it = {},
            nt = {},
            rt = {},
            st = 30,
            ot = [],
            at = "",
            lt = function(t) {
                var e, i, n = t[0];
                if (D(n) || M(n) || (t = [t]), !(e = (n._gsap || {}).harness)) {
                    for (i = ot.length; i-- && !ot[i].targetTest(n););
                    e = ot[i]
                }
                for (i = t.length; i--;) t[i] && (t[i]._gsap || (t[i]._gsap = new Re(t[i], e))) || t.splice(i, 1);
                return t
            },
            ct = function(t) {
                return t._gsap || lt(Jt(t))[0]._gsap
            },
            ht = function(t, e, i) {
                return (i = t[e]) && M(i) ? t[e]() : P(i) && t.getAttribute && t.getAttribute(e) || i
            },
            ut = function(t, e) {
                return (t = t.split(",")).forEach(e) || t
            },
            ft = function(t) {
                return Math.round(1e5 * t) / 1e5 || 0
            },
            dt = function(t) {
                return Math.round(1e7 * t) / 1e7 || 0
            },
            pt = function(t, e) {
                var i = e.charAt(0),
                    n = parseFloat(e.substr(2));
                return t = parseFloat(t), "+" === i ? t + n : "-" === i ? t - n : "*" === i ? t * n : t / n
            },
            gt = function(t, e) {
                for (var i = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < i;);
                return n < i
            },
            mt = function() {
                var t, e, i = et.length,
                    n = et.slice(0);
                for (it = {}, et.length = 0, t = 0; t < i; t++)(e = n[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
            },
            vt = function(t, e, i, n) {
                et.length && mt(), t.render(e, i, n || r), et.length && mt()
            },
            yt = function(t) {
                var e = parseFloat(t);
                return (e || 0 === e) && (t + "").match(W).length < 2 ? e : C(t) ? t.trim() : t
            },
            _t = function(t) {
                return t
            },
            bt = function(t, e) {
                for (var i in e) i in t || (t[i] = e[i]);
                return t
            },
            wt = function(t, e) {
                for (var i in e) t[i] = e[i];
                return t
            },
            xt = function t(e, i) {
                for (var n in i) "__proto__" !== n && "constructor" !== n && "prototype" !== n && (e[n] = D(i[n]) ? t(e[n] || (e[n] = {}), i[n]) : i[n]);
                return e
            },
            Tt = function(t, e) {
                var i, n = {};
                for (i in t) i in e || (n[i] = t[i]);
                return n
            },
            kt = function(t) {
                var e, i = t.parent || o,
                    n = t.keyframes ? (e = I(t.keyframes), function(t, i) {
                        for (var n in i) n in t || "duration" === n && e || "ease" === n || (t[n] = i[n])
                    }) : bt;
                if (L(t.inherit))
                    for (; i;) n(t, i.vars.defaults), i = i.parent || i._dp;
                return t
            },
            St = function(t, e, i, n, r) {
                void 0 === i && (i = "_first"), void 0 === n && (n = "_last");
                var s, o = t[n];
                if (r)
                    for (s = e[r]; o && o[r] > s;) o = o._prev;
                return o ? (e._next = o._next, o._next = e) : (e._next = t[i], t[i] = e), e._next ? e._next._prev = e : t[n] = e, e._prev = o, e.parent = e._dp = t, e
            },
            Et = function(t, e, i, n) {
                void 0 === i && (i = "_first"), void 0 === n && (n = "_last");
                var r = e._prev,
                    s = e._next;
                r ? r._next = s : t[i] === e && (t[i] = s), s ? s._prev = r : t[n] === e && (t[n] = r), e._next = e._prev = e.parent = null
            },
            Ot = function(t, e) {
                t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), t._act = 0
            },
            Ct = function(t, e) {
                if (t && (!e || e._end > t._dur || e._start < 0))
                    for (var i = t; i;) i._dirty = 1, i = i.parent;
                return t
            },
            Mt = function(t) {
                for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
                return t
            },
            At = function(t, e, i, n) {
                return t._startAt && (r ? t._startAt.revert(J) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, n))
            },
            Pt = function t(e) {
                return !e || e._ts && t(e.parent)
            },
            Dt = function(t) {
                return t._repeat ? Lt(t._tTime, t = t.duration() + t._rDelay) * t : 0
            },
            Lt = function(t, e) {
                var i = Math.floor(t /= e);
                return t && i === t ? i - 1 : i
            },
            Bt = function(t, e) {
                return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
            },
            Rt = function(t) {
                return t._end = dt(t._start + (t._tDur / Math.abs(t._ts || t._rts || w) || 0))
            },
            zt = function(t, e) {
                var i = t._dp;
                return i && i.smoothChildTiming && t._ts && (t._start = dt(i._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Rt(t), i._dirty || Ct(i, t)), t
            },
            It = function(t, e) {
                var i;
                if ((e._time || e._initted && !e._dur) && (i = Bt(t.rawTime(), e), (!e._dur || $t(0, e.totalDuration(), i) - e._tTime > w) && e.render(i, !0)), Ct(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
                    if (t._dur < t.duration())
                        for (i = t; i._dp;) i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
                    t._zTime = -1e-8
                }
            },
            Yt = function(t, e, i, n) {
                return e.parent && Ot(e), e._start = dt((A(i) ? i : i || t !== o ? Vt(t, i, e) : t._time) + e._delay), e._end = dt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), St(t, e, "_first", "_last", t._sort ? "_start" : 0), Ht(e) || (t._recent = e), n || It(t, e), t._ts < 0 && zt(t, t._tTime), t
            },
            jt = function(t, e) {
                return (N.ScrollTrigger || G("scrollTrigger", e)) && N.ScrollTrigger.create(e, t)
            },
            Ft = function(t, e, i, n) {
                return We(t, e), t._initted ? !i && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && u !== xe.frame ? (et.push(t), t._lazy = [e, n], 1) : void 0 : 1
            },
            Xt = function t(e) {
                var i = e.parent;
                return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || t(i))
            },
            Ht = function(t) {
                var e = t.data;
                return "isFromStart" === e || "isStart" === e
            },
            Wt = function(t, e, i, n) {
                var r = t._repeat,
                    s = dt(e) || 0,
                    o = t._tTime / t._tDur;
                return o && !n && (t._time *= s / t._dur), t._dur = s, t._tDur = r ? r < 0 ? 1e10 : dt(s * (r + 1) + t._rDelay * r) : s, o > 0 && !n ? zt(t, t._tTime = t._tDur * o) : t.parent && Rt(t), i || Ct(t.parent, t), t
            },
            qt = function(t) {
                return t instanceof Ie ? Ct(t) : Wt(t, t._dur)
            },
            Nt = {
                _start: 0,
                endTime: Q,
                totalDuration: Q
            },
            Vt = function t(e, i, n) {
                var r, s, o, a = e.labels,
                    l = e._recent || Nt,
                    c = e.duration() >= b ? l.endTime(!1) : e._dur;
                return C(i) && (isNaN(i) || i in a) ? (s = i.charAt(0), o = "%" === i.substr(-1), r = i.indexOf("="), "<" === s || ">" === s ? (r >= 0 && (i = i.replace(/=/, "")), ("<" === s ? l._start : l.endTime(l._repeat >= 0)) + (parseFloat(i.substr(1)) || 0) * (o ? (r < 0 ? l : n).totalDuration() / 100 : 1)) : r < 0 ? (i in a || (a[i] = c), a[i]) : (s = parseFloat(i.charAt(r - 1) + i.substr(r + 1)), o && n && (s = s / 100 * (I(n) ? n[0] : n).totalDuration()), r > 1 ? t(e, i.substr(0, r - 1), n) + s : c + s)) : null == i ? c : +i
            },
            Ut = function(t, e, i) {
                var n, r, s = A(e[1]),
                    o = (s ? 2 : 1) + (t < 2 ? 0 : 1),
                    a = e[o];
                if (s && (a.duration = e[1]), a.parent = i, t) {
                    for (n = a, r = i; r && !("immediateRender" in n);) n = r.vars.defaults || {}, r = L(r.vars.inherit) && r.parent;
                    a.immediateRender = L(n.immediateRender), t < 2 ? a.runBackwards = 1 : a.startAt = e[o - 1]
                }
                return new Ge(e[0], a, e[o + 1])
            },
            Gt = function(t, e) {
                return t || 0 === t ? e(t) : e
            },
            $t = function(t, e, i) {
                return i < t ? t : i > e ? e : i
            },
            Kt = function(t, e) {
                return C(t) && (e = q.exec(t)) ? e[1] : ""
            },
            Qt = [].slice,
            Zt = function(t, e) {
                return t && D(t) && "length" in t && (!e && !t.length || t.length - 1 in t && D(t[0])) && !t.nodeType && t !== a
            },
            Jt = function(t, e, i) {
                return s && !e && s.selector ? s.selector(t) : !C(t) || i || !l && Te() ? I(t) ? function(t, e, i) {
                    return void 0 === i && (i = []), t.forEach((function(t) {
                        var n;
                        return C(t) && !e || Zt(t, 1) ? (n = i).push.apply(n, Jt(t)) : i.push(t)
                    })) || i
                }(t, i) : Zt(t) ? Qt.call(t, 0) : t ? [t] : [] : Qt.call((e || c).querySelectorAll(t), 0)
            },
            te = function(t) {
                return t = Jt(t)[0] || $("Invalid scope") || {},
                    function(e) {
                        var i = t.current || t.nativeElement || t;
                        return Jt(e, i.querySelectorAll ? i : i === t ? $("Invalid scope") || c.createElement("div") : t)
                    }
            },
            ee = function(t) {
                return t.sort((function() {
                    return .5 - Math.random()
                }))
            },
            ie = function(t) {
                if (M(t)) return t;
                var e = D(t) ? t : {
                        each: t
                    },
                    i = Ae(e.ease),
                    n = e.from || 0,
                    r = parseFloat(e.base) || 0,
                    s = {},
                    o = n > 0 && n < 1,
                    a = isNaN(n) || o,
                    l = e.axis,
                    c = n,
                    h = n;
                return C(n) ? c = h = {
                        center: .5,
                        edges: .5,
                        end: 1
                    } [n] || 0 : !o && a && (c = n[0], h = n[1]),
                    function(t, o, u) {
                        var f, d, p, g, m, v, y, _, w, x = (u || e).length,
                            T = s[x];
                        if (!T) {
                            if (!(w = "auto" === e.grid ? 0 : (e.grid || [1, b])[1])) {
                                for (y = -b; y < (y = u[w++].getBoundingClientRect().left) && w < x;);
                                w--
                            }
                            for (T = s[x] = [], f = a ? Math.min(w, x) * c - .5 : n % w, d = w === b ? 0 : a ? x * h / w - .5 : n / w | 0, y = 0, _ = b, v = 0; v < x; v++) p = v % w - f, g = d - (v / w | 0), T[v] = m = l ? Math.abs("y" === l ? g : p) : S(p * p + g * g), m > y && (y = m), m < _ && (_ = m);
                            "random" === n && ee(T), T.max = y - _, T.min = _, T.v = x = (parseFloat(e.amount) || parseFloat(e.each) * (w > x ? x - 1 : l ? "y" === l ? x / w : w : Math.max(w, x / w)) || 0) * ("edges" === n ? -1 : 1), T.b = x < 0 ? r - x : r, T.u = Kt(e.amount || e.each) || 0, i = i && x < 0 ? Ce(i) : i
                        }
                        return x = (T[t] - T.min) / T.max || 0, dt(T.b + (i ? i(x) : x) * T.v) + T.u
                    }
            },
            ne = function(t) {
                var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
                return function(i) {
                    var n = dt(Math.round(parseFloat(i) / t) * t * e);
                    return (n - n % 1) / e + (A(i) ? 0 : Kt(i))
                }
            },
            re = function(t, e) {
                var i, n, r = I(t);
                return !r && D(t) && (i = r = t.radius || b, t.values ? (t = Jt(t.values), (n = !A(t[0])) && (i *= i)) : t = ne(t.increment)), Gt(e, r ? M(t) ? function(e) {
                    return n = t(e), Math.abs(n - e) <= i ? n : e
                } : function(e) {
                    for (var r, s, o = parseFloat(n ? e.x : e), a = parseFloat(n ? e.y : 0), l = b, c = 0, h = t.length; h--;)(r = n ? (r = t[h].x - o) * r + (s = t[h].y - a) * s : Math.abs(t[h] - o)) < l && (l = r, c = h);
                    return c = !i || l <= i ? t[c] : e, n || c === e || A(e) ? c : c + Kt(e)
                } : ne(t))
            },
            se = function(t, e, i, n) {
                return Gt(I(t) ? !e : !0 === i ? !!(i = 0) : !n, (function() {
                    return I(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (n = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + .99 * i)) / i) * i * n) / n
                }))
            },
            oe = function(t, e, i) {
                return Gt(i, (function(i) {
                    return t[~~e(i)]
                }))
            },
            ae = function(t) {
                for (var e, i, n, r, s = 0, o = ""; ~(e = t.indexOf("random(", s));) n = t.indexOf(")", e), r = "[" === t.charAt(e + 7), i = t.substr(e + 7, n - e - 7).match(r ? W : Y), o += t.substr(s, e - s) + se(r ? i : +i[0], r ? 0 : +i[1], +i[2] || 1e-5), s = n + 1;
                return o + t.substr(s, t.length - s)
            },
            le = function(t, e, i, n, r) {
                var s = e - t,
                    o = n - i;
                return Gt(r, (function(e) {
                    return i + ((e - t) / s * o || 0)
                }))
            },
            ce = function(t, e, i) {
                var n, r, s, o = t.labels,
                    a = b;
                for (n in o)(r = o[n] - e) < 0 == !!i && r && a > (r = Math.abs(r)) && (s = n, a = r);
                return s
            },
            he = function(t, e, i) {
                var n, r, o, a = t.vars,
                    l = a[e],
                    c = s,
                    h = t._ctx;
                if (l) return n = a[e + "Params"], r = a.callbackScope || t, i && et.length && mt(), h && (s = h), o = n ? l.apply(r, n) : l.call(r), s = c, o
            },
            ue = function(t) {
                return Ot(t), t.scrollTrigger && t.scrollTrigger.kill(!1), t.progress() < 1 && he(t, "onInterrupt"), t
            },
            fe = function(t) {
                var e = (t = !t.name && t.default || t).name,
                    i = M(t),
                    n = e && !i && t.init ? function() {
                        this._props = []
                    } : t,
                    r = {
                        init: Q,
                        render: ni,
                        add: Xe,
                        kill: si,
                        modifier: ri,
                        rawVars: 0
                    },
                    s = {
                        targetTest: 0,
                        get: 0,
                        getSetter: Je,
                        aliases: {},
                        register: 0
                    };
                if (Te(), t !== n) {
                    if (nt[e]) return;
                    bt(n, bt(Tt(t, r), s)), wt(n.prototype, wt(r, Tt(t, s))), nt[n.prop = e] = n, t.targetTest && (ot.push(n), tt[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                }
                K(e, n), t.register && t.register(bi, n, li)
            },
            de = 255,
            pe = {
                aqua: [0, de, de],
                lime: [0, de, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, de],
                navy: [0, 0, 128],
                white: [de, de, de],
                olive: [128, 128, 0],
                yellow: [de, de, 0],
                orange: [de, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [de, 0, 0],
                pink: [de, 192, 203],
                cyan: [0, de, de],
                transparent: [de, de, de, 0]
            },
            ge = function(t, e, i) {
                return (6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) * de + .5 | 0
            },
            me = function(t, e, i) {
                var n, r, s, o, a, l, c, h, u, f, d = t ? A(t) ? [t >> 16, t >> 8 & de, t & de] : 0 : pe.black;
                if (!d) {
                    if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), pe[t]) d = pe[t];
                    else if ("#" === t.charAt(0)) {
                        if (t.length < 6 && (n = t.charAt(1), r = t.charAt(2), s = t.charAt(3), t = "#" + n + n + r + r + s + s + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(d = parseInt(t.substr(1, 6), 16)) >> 16, d >> 8 & de, d & de, parseInt(t.substr(7), 16) / 255];
                        d = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & de, t & de]
                    } else if ("hsl" === t.substr(0, 3))
                        if (d = f = t.match(Y), e) {
                            if (~t.indexOf("=")) return d = t.match(j), i && d.length < 4 && (d[3] = 1), d
                        } else o = +d[0] % 360 / 360, a = +d[1] / 100, n = 2 * (l = +d[2] / 100) - (r = l <= .5 ? l * (a + 1) : l + a - l * a), d.length > 3 && (d[3] *= 1), d[0] = ge(o + 1 / 3, n, r), d[1] = ge(o, n, r), d[2] = ge(o - 1 / 3, n, r);
                    else d = t.match(Y) || pe.transparent;
                    d = d.map(Number)
                }
                return e && !f && (n = d[0] / de, r = d[1] / de, s = d[2] / de, l = ((c = Math.max(n, r, s)) + (h = Math.min(n, r, s))) / 2, c === h ? o = a = 0 : (u = c - h, a = l > .5 ? u / (2 - c - h) : u / (c + h), o = c === n ? (r - s) / u + (r < s ? 6 : 0) : c === r ? (s - n) / u + 2 : (n - r) / u + 4, o *= 60), d[0] = ~~(o + .5), d[1] = ~~(100 * a + .5), d[2] = ~~(100 * l + .5)), i && d.length < 4 && (d[3] = 1), d
            },
            ve = function(t) {
                var e = [],
                    i = [],
                    n = -1;
                return t.split(_e).forEach((function(t) {
                    var r = t.match(F) || [];
                    e.push.apply(e, r), i.push(n += r.length + 1)
                })), e.c = i, e
            },
            ye = function(t, e, i) {
                var n, r, s, o, a = "",
                    l = (t + a).match(_e),
                    c = e ? "hsla(" : "rgba(",
                    h = 0;
                if (!l) return t;
                if (l = l.map((function(t) {
                        return (t = me(t, e, 1)) && c + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
                    })), i && (s = ve(t), (n = i.c).join(a) !== s.c.join(a)))
                    for (o = (r = t.replace(_e, "1").split(F)).length - 1; h < o; h++) a += r[h] + (~n.indexOf(h) ? l.shift() || c + "0,0,0,0)" : (s.length ? s : l.length ? l : i).shift());
                if (!r)
                    for (o = (r = t.split(_e)).length - 1; h < o; h++) a += r[h] + l[h];
                return a + r[o]
            },
            _e = function() {
                var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
                for (t in pe) e += "|" + t + "\\b";
                return new RegExp(e + ")", "gi")
            }(),
            be = /hsl[a]?\(/,
            we = function(t) {
                var e, i = t.join(" ");
                if (_e.lastIndex = 0, _e.test(i)) return e = be.test(i), t[1] = ye(t[1], e), t[0] = ye(t[0], e, ve(t[1])), !0
            },
            xe = function() {
                var t, e, i, n, r, s, o = Date.now,
                    u = 500,
                    f = 33,
                    p = o(),
                    g = p,
                    m = 1e3 / 240,
                    v = m,
                    y = [],
                    _ = function i(a) {
                        var l, c, h, d, _ = o() - g,
                            b = !0 === a;
                        if (_ > u && (p += _ - f), ((l = (h = (g += _) - p) - v) > 0 || b) && (d = ++n.frame, r = h - 1e3 * n.time, n.time = h /= 1e3, v += l + (l >= m ? 4 : m - l), c = 1), b || (t = e(i)), c)
                            for (s = 0; s < y.length; s++) y[s](h, r, d, a)
                    };
                return n = {
                    time: 0,
                    frame: 0,
                    tick: function() {
                        _(!0)
                    },
                    deltaRatio: function(t) {
                        return r / (1e3 / (t || 60))
                    },
                    wake: function() {
                        h && (!l && B() && (a = l = window, c = a.document || {}, N.gsap = bi, (a.gsapVersions || (a.gsapVersions = [])).push(bi.version), U(V || a.GreenSockGlobals || !a.gsap && a || {}), i = a.requestAnimationFrame), t && n.sleep(), e = i || function(t) {
                            return setTimeout(t, v - 1e3 * n.time + 1 | 0)
                        }, d = 1, _(2))
                    },
                    sleep: function() {
                        (i ? a.cancelAnimationFrame : clearTimeout)(t), d = 0, e = Q
                    },
                    lagSmoothing: function(t, e) {
                        u = t || 1e8, f = Math.min(e, u, 0)
                    },
                    fps: function(t) {
                        m = 1e3 / (t || 240), v = 1e3 * n.time + m
                    },
                    add: function(t, e, i) {
                        var r = e ? function(e, i, s, o) {
                            t(e, i, s, o), n.remove(r)
                        } : t;
                        return n.remove(t), y[i ? "unshift" : "push"](r), Te(), r
                    },
                    remove: function(t, e) {
                        ~(e = y.indexOf(t)) && y.splice(e, 1) && s >= e && s--
                    },
                    _listeners: y
                }
            }(),
            Te = function() {
                return !d && xe.wake()
            },
            ke = {},
            Se = /^[\d.\-M][\d.\-,\s]/,
            Ee = /["']/g,
            Oe = function(t) {
                for (var e, i, n, r = {}, s = t.substr(1, t.length - 3).split(":"), o = s[0], a = 1, l = s.length; a < l; a++) i = s[a], e = a !== l - 1 ? i.lastIndexOf(",") : i.length, n = i.substr(0, e), r[o] = isNaN(n) ? n.replace(Ee, "").trim() : +n, o = i.substr(e + 1).trim();
                return r
            },
            Ce = function(t) {
                return function(e) {
                    return 1 - t(1 - e)
                }
            },
            Me = function t(e, i) {
                for (var n, r = e._first; r;) r instanceof Ie ? t(r, i) : !r.vars.yoyoEase || r._yoyo && r._repeat || r._yoyo === i || (r.timeline ? t(r.timeline, i) : (n = r._ease, r._ease = r._yEase, r._yEase = n, r._yoyo = i)), r = r._next
            },
            Ae = function(t, e) {
                return t && (M(t) ? t : ke[t] || function(t) {
                    var e, i, n, r, s = (t + "").split("("),
                        o = ke[s[0]];
                    return o && s.length > 1 && o.config ? o.config.apply(null, ~t.indexOf("{") ? [Oe(s[1])] : (e = t, i = e.indexOf("(") + 1, n = e.indexOf(")"), r = e.indexOf("(", i), e.substring(i, ~r && r < n ? e.indexOf(")", n + 1) : n)).split(",").map(yt)) : ke._CE && Se.test(t) ? ke._CE("", t) : o
                }(t)) || e
            },
            Pe = function(t, e, i, n) {
                void 0 === i && (i = function(t) {
                    return 1 - e(1 - t)
                }), void 0 === n && (n = function(t) {
                    return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
                });
                var r, s = {
                    easeIn: e,
                    easeOut: i,
                    easeInOut: n
                };
                return ut(t, (function(t) {
                    for (var e in ke[t] = N[t] = s, ke[r = t.toLowerCase()] = i, s) ke[r + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = ke[t + "." + e] = s[e]
                })), s
            },
            De = function(t) {
                return function(e) {
                    return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
                }
            },
            Le = function t(e, i, n) {
                var r = i >= 1 ? i : 1,
                    s = (n || (e ? .3 : .45)) / (i < 1 ? i : 1),
                    o = s / x * (Math.asin(1 / r) || 0),
                    a = function(t) {
                        return 1 === t ? 1 : r * Math.pow(2, -10 * t) * O((t - o) * s) + 1
                    },
                    l = "out" === e ? a : "in" === e ? function(t) {
                        return 1 - a(1 - t)
                    } : De(a);
                return s = x / s, l.config = function(i, n) {
                    return t(e, i, n)
                }, l
            },
            Be = function t(e, i) {
                void 0 === i && (i = 1.70158);
                var n = function(t) {
                        return t ? --t * t * ((i + 1) * t + i) + 1 : 0
                    },
                    r = "out" === e ? n : "in" === e ? function(t) {
                        return 1 - n(1 - t)
                    } : De(n);
                return r.config = function(i) {
                    return t(e, i)
                }, r
            };
        ut("Linear,Quad,Cubic,Quart,Quint,Strong", (function(t, e) {
            var i = e < 5 ? e + 1 : e;
            Pe(t + ",Power" + (i - 1), e ? function(t) {
                return Math.pow(t, i)
            } : function(t) {
                return t
            }, (function(t) {
                return 1 - Math.pow(1 - t, i)
            }), (function(t) {
                return t < .5 ? Math.pow(2 * t, i) / 2 : 1 - Math.pow(2 * (1 - t), i) / 2
            }))
        })), ke.Linear.easeNone = ke.none = ke.Linear.easeIn, Pe("Elastic", Le("in"), Le("out"), Le()), p = 7.5625, m = 1 / (g = 2.75), Pe("Bounce", (function(t) {
            return 1 - v(1 - t)
        }), v = function(t) {
            return t < m ? p * t * t : t < .7272727272727273 ? p * Math.pow(t - 1.5 / g, 2) + .75 : t < .9090909090909092 ? p * (t -= 2.25 / g) * t + .9375 : p * Math.pow(t - 2.625 / g, 2) + .984375
        }), Pe("Expo", (function(t) {
            return t ? Math.pow(2, 10 * (t - 1)) : 0
        })), Pe("Circ", (function(t) {
            return -(S(1 - t * t) - 1)
        })), Pe("Sine", (function(t) {
            return 1 === t ? 1 : 1 - E(t * T)
        })), Pe("Back", Be("in"), Be("out"), Be()), ke.SteppedEase = ke.steps = N.SteppedEase = {
            config: function(t, e) {
                void 0 === t && (t = 1);
                var i = 1 / t,
                    n = t + (e ? 0 : 1),
                    r = e ? 1 : 0;
                return function(t) {
                    return ((n * $t(0, .99999999, t) | 0) + r) * i
                }
            }
        }, _.ease = ke["quad.out"], ut("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function(t) {
            return at += t + "," + t + "Params,"
        }));
        var Re = function(t, e) {
                this.id = k++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : ht, this.set = e ? e.getSetter : Je
            },
            ze = function() {
                function t(t) {
                    this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Wt(this, +t.duration, 1, 1), this.data = t.data, s && (this._ctx = s, s.data.push(this)), d || xe.wake()
                }
                var e = t.prototype;
                return e.delay = function(t) {
                    return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
                }, e.duration = function(t) {
                    return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
                }, e.totalDuration = function(t) {
                    return arguments.length ? (this._dirty = 0, Wt(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
                }, e.totalTime = function(t, e) {
                    if (Te(), !arguments.length) return this._tTime;
                    var i = this._dp;
                    if (i && i.smoothChildTiming && this._ts) {
                        for (zt(this, t), !i._dp || i.parent || It(i, this); i && i.parent;) i.parent._time !== i._start + (i._ts >= 0 ? i._tTime / i._ts : (i.totalDuration() - i._tTime) / -i._ts) && i.totalTime(i._tTime, !0), i = i.parent;
                        !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && Yt(this._dp, this, this._start - this._delay)
                    }
                    return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === w || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), vt(this, t, e)), this
                }, e.time = function(t, e) {
                    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Dt(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
                }, e.totalProgress = function(t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
                }, e.progress = function(t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Dt(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
                }, e.iteration = function(t, e) {
                    var i = this.duration() + this._rDelay;
                    return arguments.length ? this.totalTime(this._time + (t - 1) * i, e) : this._repeat ? Lt(this._tTime, i) + 1 : 1
                }, e.timeScale = function(t) {
                    if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
                    if (this._rts === t) return this;
                    var e = this.parent && this._ts ? Bt(this.parent._time, this) : this._tTime;
                    return this._rts = +t || 0, this._ts = this._ps || -1e-8 === t ? 0 : this._rts, this.totalTime($t(-this._delay, this._tDur, e), !0), Rt(this), Mt(this)
                }, e.paused = function(t) {
                    return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Te(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== w && (this._tTime -= w)))), this) : this._ps
                }, e.startTime = function(t) {
                    if (arguments.length) {
                        this._start = t;
                        var e = this.parent || this._dp;
                        return e && (e._sort || !this.parent) && Yt(e, this, t - this._delay), this
                    }
                    return this._start
                }, e.endTime = function(t) {
                    return this._start + (L(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
                }, e.rawTime = function(t) {
                    var e = this.parent || this._dp;
                    return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Bt(e.rawTime(t), this) : this._tTime : this._tTime
                }, e.revert = function(t) {
                    void 0 === t && (t = J);
                    var e = r;
                    return r = t, this.timeline && this.timeline.revert(t), this.totalTime(-.01, t.suppressEvents), "nested" !== this.data && Ot(this), r = e, this
                }, e.globalTime = function(t) {
                    for (var e = this, i = arguments.length ? t : e.rawTime(); e;) i = e._start + i / (e._ts || 1), e = e._dp;
                    return !this.parent && this.vars.immediateRender ? -1 : i
                }, e.repeat = function(t) {
                    return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, qt(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
                }, e.repeatDelay = function(t) {
                    if (arguments.length) {
                        var e = this._time;
                        return this._rDelay = t, qt(this), e ? this.time(e) : this
                    }
                    return this._rDelay
                }, e.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, e.seek = function(t, e) {
                    return this.totalTime(Vt(this, t), L(e))
                }, e.restart = function(t, e) {
                    return this.play().totalTime(t ? -this._delay : 0, L(e))
                }, e.play = function(t, e) {
                    return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
                }, e.reverse = function(t, e) {
                    return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
                }, e.pause = function(t, e) {
                    return null != t && this.seek(t, e), this.paused(!0)
                }, e.resume = function() {
                    return this.paused(!1)
                }, e.reversed = function(t) {
                    return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0
                }, e.invalidate = function() {
                    return this._initted = this._act = 0, this._zTime = -1e-8, this
                }, e.isActive = function() {
                    var t, e = this.parent || this._dp,
                        i = this._start;
                    return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= i && t < this.endTime(!0) - w))
                }, e.eventCallback = function(t, e, i) {
                    var n = this.vars;
                    return arguments.length > 1 ? (e ? (n[t] = e, i && (n[t + "Params"] = i), "onUpdate" === t && (this._onUpdate = e)) : delete n[t], this) : n[t]
                }, e.then = function(t) {
                    var e = this;
                    return new Promise((function(i) {
                        var n = M(t) ? t : _t,
                            r = function() {
                                var t = e.then;
                                e.then = null, M(n) && (n = n(e)) && (n.then || n === e) && (e.then = t), i(n), e.then = t
                            };
                        e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? r() : e._prom = r
                    }))
                }, e.kill = function() {
                    ue(this)
                }, t
            }();
        bt(ze.prototype, {
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
            _zTime: -1e-8,
            _prom: 0,
            _ps: !1,
            _rts: 1
        });
        var Ie = function(i) {
            function n(e, n) {
                var r;
                return void 0 === e && (e = {}), (r = i.call(this, e) || this).labels = {}, r.smoothChildTiming = !!e.smoothChildTiming, r.autoRemoveChildren = !!e.autoRemoveChildren, r._sort = L(e.sortChildren), o && Yt(e.parent || o, t(r), n), e.reversed && r.reverse(), e.paused && r.paused(!0), e.scrollTrigger && jt(t(r), e.scrollTrigger), r
            }
            e(n, i);
            var s = n.prototype;
            return s.to = function(t, e, i) {
                return Ut(0, arguments, this), this
            }, s.from = function(t, e, i) {
                return Ut(1, arguments, this), this
            }, s.fromTo = function(t, e, i, n) {
                return Ut(2, arguments, this), this
            }, s.set = function(t, e, i) {
                return e.duration = 0, e.parent = this, kt(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Ge(t, e, Vt(this, i), 1), this
            }, s.call = function(t, e, i) {
                return Yt(this, Ge.delayedCall(0, t, e), i)
            }, s.staggerTo = function(t, e, i, n, r, s, o) {
                return i.duration = e, i.stagger = i.stagger || n, i.onComplete = s, i.onCompleteParams = o, i.parent = this, new Ge(t, i, Vt(this, r)), this
            }, s.staggerFrom = function(t, e, i, n, r, s, o) {
                return i.runBackwards = 1, kt(i).immediateRender = L(i.immediateRender), this.staggerTo(t, e, i, n, r, s, o)
            }, s.staggerFromTo = function(t, e, i, n, r, s, o, a) {
                return n.startAt = i, kt(n).immediateRender = L(n.immediateRender), this.staggerTo(t, e, n, r, s, o, a)
            }, s.render = function(t, e, i) {
                var n, s, a, l, c, h, u, f, d, p, g, m, v = this._time,
                    y = this._dirty ? this.totalDuration() : this._tDur,
                    _ = this._dur,
                    b = t <= 0 ? 0 : dt(t),
                    x = this._zTime < 0 != t < 0 && (this._initted || !_);
                if (this !== o && b > y && t >= 0 && (b = y), b !== this._tTime || i || x) {
                    if (v !== this._time && _ && (b += this._time - v, t += this._time - v), n = b, d = this._start, h = !(f = this._ts), x && (_ || (v = this._zTime), (t || !e) && (this._zTime = t)), this._repeat) {
                        if (g = this._yoyo, c = _ + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * c + t, e, i);
                        if (n = dt(b % c), b === y ? (l = this._repeat, n = _) : ((l = ~~(b / c)) && l === b / c && (n = _, l--), n > _ && (n = _)), p = Lt(this._tTime, c), !v && this._tTime && p !== l && (p = l), g && 1 & l && (n = _ - n, m = 1), l !== p && !this._lock) {
                            var T = g && 1 & p,
                                k = T === (g && 1 & l);
                            if (l < p && (T = !T), v = T ? 0 : _, this._lock = 1, this.render(v || (m ? 0 : dt(l * c)), e, !_)._lock = 0, this._tTime = b, !e && this.parent && he(this, "onRepeat"), this.vars.repeatRefresh && !m && (this.invalidate()._lock = 1), v && v !== this._time || h !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                            if (_ = this._dur, y = this._tDur, k && (this._lock = 2, v = T ? _ : -1e-4, this.render(v, !0), this.vars.repeatRefresh && !m && this.invalidate()), this._lock = 0, !this._ts && !h) return this;
                            Me(this, m)
                        }
                    }
                    if (this._hasPause && !this._forcing && this._lock < 2 && (u = function(t, e, i) {
                            var n;
                            if (i > e)
                                for (n = t._first; n && n._start <= i;) {
                                    if ("isPause" === n.data && n._start > e) return n;
                                    n = n._next
                                } else
                                    for (n = t._last; n && n._start >= i;) {
                                        if ("isPause" === n.data && n._start < e) return n;
                                        n = n._prev
                                    }
                        }(this, dt(v), dt(n)), u && (b -= n - (n = u._start))), this._tTime = b, this._time = n, this._act = !f, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, v = 0), !v && n && !e && (he(this, "onStart"), this._tTime !== b)) return this;
                    if (n >= v && t >= 0)
                        for (s = this._first; s;) {
                            if (a = s._next, (s._act || n >= s._start) && s._ts && u !== s) {
                                if (s.parent !== this) return this.render(t, e, i);
                                if (s.render(s._ts > 0 ? (n - s._start) * s._ts : (s._dirty ? s.totalDuration() : s._tDur) + (n - s._start) * s._ts, e, i), n !== this._time || !this._ts && !h) {
                                    u = 0, a && (b += this._zTime = -1e-8);
                                    break
                                }
                            }
                            s = a
                        } else {
                            i = i || r, s = this._last;
                            for (var S = t < 0 ? t : n; s;) {
                                if (a = s._prev, (s._act || S <= s._end) && s._ts && u !== s) {
                                    if (s.parent !== this) return this.render(t, e, i);
                                    if (s.render(s._ts > 0 ? (S - s._start) * s._ts : (s._dirty ? s.totalDuration() : s._tDur) + (S - s._start) * s._ts, e, i), n !== this._time || !this._ts && !h) {
                                        u = 0, a && (b += this._zTime = S ? -1e-8 : w);
                                        break
                                    }
                                }
                                s = a
                            }
                        }
                    if (u && !e && (this.pause(), u.render(n >= v ? 0 : -1e-8)._zTime = n >= v ? 1 : -1, this._ts)) return this._start = d, Rt(this), this.render(t, e, i);
                    this._onUpdate && !e && he(this, "onUpdate", !0), (b === y && this._tTime >= this.totalDuration() || !b && v) && (d !== this._start && Math.abs(f) === Math.abs(this._ts) || this._lock || ((t || !_) && (b === y && this._ts > 0 || !b && this._ts < 0) && Ot(this, 1), e || t < 0 && !v || !b && !v && y || (he(this, b === y && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(b < y && this.timeScale() > 0) && this._prom())))
                }
                return this
            }, s.add = function(t, e) {
                var i = this;
                if (A(e) || (e = Vt(this, e, t)), !(t instanceof ze)) {
                    if (I(t)) return t.forEach((function(t) {
                        return i.add(t, e)
                    })), this;
                    if (C(t)) return this.addLabel(t, e);
                    if (!M(t)) return this;
                    t = Ge.delayedCall(0, t)
                }
                return this !== t ? Yt(this, t, e) : this
            }, s.getChildren = function(t, e, i, n) {
                void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === i && (i = !0), void 0 === n && (n = -b);
                for (var r = [], s = this._first; s;) s._start >= n && (s instanceof Ge ? e && r.push(s) : (i && r.push(s), t && r.push.apply(r, s.getChildren(!0, e, i)))), s = s._next;
                return r
            }, s.getById = function(t) {
                for (var e = this.getChildren(1, 1, 1), i = e.length; i--;)
                    if (e[i].vars.id === t) return e[i]
            }, s.remove = function(t) {
                return C(t) ? this.removeLabel(t) : M(t) ? this.killTweensOf(t) : (Et(this, t), t === this._recent && (this._recent = this._last), Ct(this))
            }, s.totalTime = function(t, e) {
                return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = dt(xe.time - (this._ts > 0 ? t / this._ts : (this.totalDuration() - t) / -this._ts))), i.prototype.totalTime.call(this, t, e), this._forcing = 0, this) : this._tTime
            }, s.addLabel = function(t, e) {
                return this.labels[t] = Vt(this, e), this
            }, s.removeLabel = function(t) {
                return delete this.labels[t], this
            }, s.addPause = function(t, e, i) {
                var n = Ge.delayedCall(0, e || Q, i);
                return n.data = "isPause", this._hasPause = 1, Yt(this, n, Vt(this, t))
            }, s.removePause = function(t) {
                var e = this._first;
                for (t = Vt(this, t); e;) e._start === t && "isPause" === e.data && Ot(e), e = e._next
            }, s.killTweensOf = function(t, e, i) {
                for (var n = this.getTweensOf(t, i), r = n.length; r--;) Ye !== n[r] && n[r].kill(t, e);
                return this
            }, s.getTweensOf = function(t, e) {
                for (var i, n = [], r = Jt(t), s = this._first, o = A(e); s;) s instanceof Ge ? gt(s._targets, r) && (o ? (!Ye || s._initted && s._ts) && s.globalTime(0) <= e && s.globalTime(s.totalDuration()) > e : !e || s.isActive()) && n.push(s) : (i = s.getTweensOf(r, e)).length && n.push.apply(n, i), s = s._next;
                return n
            }, s.tweenTo = function(t, e) {
                e = e || {};
                var i, n = this,
                    r = Vt(n, t),
                    s = e,
                    o = s.startAt,
                    a = s.onStart,
                    l = s.onStartParams,
                    c = s.immediateRender,
                    h = Ge.to(n, bt({
                        ease: e.ease || "none",
                        lazy: !1,
                        immediateRender: !1,
                        time: r,
                        overwrite: "auto",
                        duration: e.duration || Math.abs((r - (o && "time" in o ? o.time : n._time)) / n.timeScale()) || w,
                        onStart: function() {
                            if (n.pause(), !i) {
                                var t = e.duration || Math.abs((r - (o && "time" in o ? o.time : n._time)) / n.timeScale());
                                h._dur !== t && Wt(h, t, 0, 1).render(h._time, !0, !0), i = 1
                            }
                            a && a.apply(h, l || [])
                        }
                    }, e));
                return c ? h.render(0) : h
            }, s.tweenFromTo = function(t, e, i) {
                return this.tweenTo(e, bt({
                    startAt: {
                        time: Vt(this, t)
                    }
                }, i))
            }, s.recent = function() {
                return this._recent
            }, s.nextLabel = function(t) {
                return void 0 === t && (t = this._time), ce(this, Vt(this, t))
            }, s.previousLabel = function(t) {
                return void 0 === t && (t = this._time), ce(this, Vt(this, t), 1)
            }, s.currentLabel = function(t) {
                return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + w)
            }, s.shiftChildren = function(t, e, i) {
                void 0 === i && (i = 0);
                for (var n, r = this._first, s = this.labels; r;) r._start >= i && (r._start += t, r._end += t), r = r._next;
                if (e)
                    for (n in s) s[n] >= i && (s[n] += t);
                return Ct(this)
            }, s.invalidate = function() {
                var t = this._first;
                for (this._lock = 0; t;) t.invalidate(), t = t._next;
                return i.prototype.invalidate.call(this)
            }, s.clear = function(t) {
                void 0 === t && (t = !0);
                for (var e, i = this._first; i;) e = i._next, this.remove(i), i = e;
                return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), Ct(this)
            }, s.totalDuration = function(t) {
                var e, i, n, r = 0,
                    s = this,
                    a = s._last,
                    l = b;
                if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -t : t));
                if (s._dirty) {
                    for (n = s.parent; a;) e = a._prev, a._dirty && a.totalDuration(), (i = a._start) > l && s._sort && a._ts && !s._lock ? (s._lock = 1, Yt(s, a, i - a._delay, 1)._lock = 0) : l = i, i < 0 && a._ts && (r -= i, (!n && !s._dp || n && n.smoothChildTiming) && (s._start += i / s._ts, s._time -= i, s._tTime -= i), s.shiftChildren(-i, !1, -Infinity), l = 0), a._end > r && a._ts && (r = a._end), a = e;
                    Wt(s, s === o && s._time > r ? s._time : r, 1, 1), s._dirty = 0
                }
                return s._tDur
            }, n.updateRoot = function(t) {
                if (o._ts && (vt(o, Bt(t, o)), u = xe.frame), xe.frame >= st) {
                    st += y.autoSleep || 120;
                    var e = o._first;
                    if ((!e || !e._ts) && y.autoSleep && xe._listeners.length < 2) {
                        for (; e && !e._ts;) e = e._next;
                        e || xe.sleep()
                    }
                }
            }, n
        }(ze);
        bt(Ie.prototype, {
            _lock: 0,
            _hasPause: 0,
            _forcing: 0
        });
        var Ye, je, Fe = function(t, e, i, n, r, s, o) {
                var a, l, c, h, u, f, d, p, g = new li(this._pt, t, e, 0, 1, ii, null, r),
                    m = 0,
                    v = 0;
                for (g.b = i, g.e = n, i += "", (d = ~(n += "").indexOf("random(")) && (n = ae(n)), s && (s(p = [i, n], t, e), i = p[0], n = p[1]), l = i.match(X) || []; a = X.exec(n);) h = a[0], u = n.substring(m, a.index), c ? c = (c + 1) % 5 : "rgba(" === u.substr(-5) && (c = 1), h !== l[v++] && (f = parseFloat(l[v - 1]) || 0, g._pt = {
                    _next: g._pt,
                    p: u || 1 === v ? u : ",",
                    s: f,
                    c: "=" === h.charAt(1) ? pt(f, h) - f : parseFloat(h) - f,
                    m: c && c < 4 ? Math.round : 0
                }, m = X.lastIndex);
                return g.c = m < n.length ? n.substring(m, n.length) : "", g.fp = o, (H.test(n) || d) && (g.e = 0), this._pt = g, g
            },
            Xe = function(t, e, i, n, r, s, o, a, l, c) {
                M(n) && (n = n(r || 0, t, s));
                var h, u = t[e],
                    f = "get" !== i ? i : M(u) ? l ? t[e.indexOf("set") || !M(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : u,
                    d = M(u) ? l ? Qe : Ke : $e;
                if (C(n) && (~n.indexOf("random(") && (n = ae(n)), "=" === n.charAt(1) && ((h = pt(f, n) + (Kt(f) || 0)) || 0 === h) && (n = h)), !c || f !== n || je) return isNaN(f * n) || "" === n ? (!u && !(e in t) && G(e, n), Fe.call(this, t, e, f, n, d, a || y.stringFilter, l)) : (h = new li(this._pt, t, e, +f || 0, n - (f || 0), "boolean" == typeof u ? ei : ti, 0, d), l && (h.fp = l), o && h.modifier(o, this, t), this._pt = h)
            },
            He = function(t, e, i, n, r, s) {
                var o, a, l, c;
                if (nt[t] && !1 !== (o = new nt[t]).init(r, o.rawVars ? e[t] : function(t, e, i, n, r) {
                        if (M(t) && (t = Ne(t, r, e, i, n)), !D(t) || t.style && t.nodeType || I(t) || z(t)) return C(t) ? Ne(t, r, e, i, n) : t;
                        var s, o = {};
                        for (s in t) o[s] = Ne(t[s], r, e, i, n);
                        return o
                    }(e[t], n, r, s, i), i, n, s) && (i._pt = a = new li(i._pt, r, t, 0, 1, o.render, o, 0, o.priority), i !== f))
                    for (l = i._ptLookup[i._targets.indexOf(r)], c = o._props.length; c--;) l[o._props[c]] = a;
                return o
            },
            We = function t(e, i) {
                var s, a, l, c, h, u, f, d, p, g, m, v, y, x = e.vars,
                    T = x.ease,
                    k = x.startAt,
                    S = x.immediateRender,
                    E = x.lazy,
                    O = x.onUpdate,
                    C = x.onUpdateParams,
                    M = x.callbackScope,
                    A = x.runBackwards,
                    P = x.yoyoEase,
                    D = x.keyframes,
                    B = x.autoRevert,
                    R = e._dur,
                    z = e._startAt,
                    I = e._targets,
                    Y = e.parent,
                    j = Y && "nested" === Y.data ? Y.vars.targets : I,
                    F = "auto" === e._overwrite && !n,
                    X = e.timeline;
                if (X && (!D || !T) && (T = "none"), e._ease = Ae(T, _.ease), e._yEase = P ? Ce(Ae(!0 === P ? T : P, _.ease)) : 0, P && e._yoyo && !e._repeat && (P = e._yEase, e._yEase = e._ease, e._ease = P), e._from = !X && !!x.runBackwards, !X || D && !x.stagger) {
                    if (v = (d = I[0] ? ct(I[0]).harness : 0) && x[d.prop], s = Tt(x, tt), z && (i < 0 && A && S && !B ? z.render(-1, !0) : z.revert(A && R ? J : Z), z._lazy = 0), k) {
                        if (Ot(e._startAt = Ge.set(I, bt({
                                data: "isStart",
                                overwrite: !1,
                                parent: Y,
                                immediateRender: !0,
                                lazy: L(E),
                                startAt: null,
                                delay: 0,
                                onUpdate: O,
                                onUpdateParams: C,
                                callbackScope: M,
                                stagger: 0
                            }, k))), i < 0 && (r || !S && !B) && e._startAt.revert(J), S && R && i <= 0) return void(i && (e._zTime = i))
                    } else if (A && R && !z)
                        if (i && (S = !1), l = bt({
                                overwrite: !1,
                                data: "isFromStart",
                                lazy: S && L(E),
                                immediateRender: S,
                                stagger: 0,
                                parent: Y
                            }, s), v && (l[d.prop] = v), Ot(e._startAt = Ge.set(I, l)), i < 0 && (r ? e._startAt.revert(J) : e._startAt.render(-1, !0)), e._zTime = i, S) {
                            if (!i) return
                        } else t(e._startAt, w);
                    for (e._pt = e._ptCache = 0, E = R && L(E) || E && !R, a = 0; a < I.length; a++) {
                        if (f = (h = I[a])._gsap || lt(I)[a]._gsap, e._ptLookup[a] = g = {}, it[f.id] && et.length && mt(), m = j === I ? a : j.indexOf(h), d && !1 !== (p = new d).init(h, v || s, e, m, j) && (e._pt = c = new li(e._pt, h, p.name, 0, 1, p.render, p, 0, p.priority), p._props.forEach((function(t) {
                                g[t] = c
                            })), p.priority && (u = 1)), !d || v)
                            for (l in s) nt[l] && (p = He(l, s, e, m, h, j)) ? p.priority && (u = 1) : g[l] = c = Xe.call(e, h, l, "get", s[l], m, j, 0, x.stringFilter);
                        e._op && e._op[a] && e.kill(h, e._op[a]), F && e._pt && (Ye = e, o.killTweensOf(h, g, e.globalTime(i)), y = !e.parent, Ye = 0), e._pt && E && (it[f.id] = 1)
                    }
                    u && ai(e), e._onInit && e._onInit(e)
                }
                e._onUpdate = O, e._initted = (!e._op || e._pt) && !y, D && i <= 0 && X.render(b, !0, !0)
            },
            qe = function(t, e, i, n) {
                var r, s, o = e.ease || n || "power1.inOut";
                if (I(e)) s = i[t] || (i[t] = []), e.forEach((function(t, i) {
                    return s.push({
                        t: i / (e.length - 1) * 100,
                        v: t,
                        e: o
                    })
                }));
                else
                    for (r in e) s = i[r] || (i[r] = []), "ease" === r || s.push({
                        t: parseFloat(t),
                        v: e[r],
                        e: o
                    })
            },
            Ne = function(t, e, i, n, r) {
                return M(t) ? t.call(e, i, n, r) : C(t) && ~t.indexOf("random(") ? ae(t) : t
            },
            Ve = at + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
            Ue = {};
        ut(Ve + ",id,stagger,delay,duration,paused,scrollTrigger", (function(t) {
            return Ue[t] = 1
        }));
        var Ge = function(i) {
            function s(e, r, s, a) {
                var l;
                "number" == typeof r && (s.duration = r, r = s, s = null);
                var c, h, u, f, d, p, g, m, v = (l = i.call(this, a ? r : kt(r)) || this).vars,
                    _ = v.duration,
                    b = v.delay,
                    w = v.immediateRender,
                    x = v.stagger,
                    T = v.overwrite,
                    k = v.keyframes,
                    S = v.defaults,
                    E = v.scrollTrigger,
                    O = v.yoyoEase,
                    C = r.parent || o,
                    M = (I(e) || z(e) ? A(e[0]) : "length" in r) ? [e] : Jt(e);
                if (l._targets = M.length ? lt(M) : $("GSAP target " + e + " not found. https://greensock.com", !y.nullTargetWarn) || [], l._ptLookup = [], l._overwrite = T, k || x || R(_) || R(b)) {
                    if (r = l.vars, (c = l.timeline = new Ie({
                            data: "nested",
                            defaults: S || {},
                            targets: C && "nested" === C.data ? C.vars.targets : M
                        })).kill(), c.parent = c._dp = t(l), c._start = 0, x || R(_) || R(b)) {
                        if (f = M.length, g = x && ie(x), D(x))
                            for (d in x) ~Ve.indexOf(d) && (m || (m = {}), m[d] = x[d]);
                        for (h = 0; h < f; h++)(u = Tt(r, Ue)).stagger = 0, O && (u.yoyoEase = O), m && wt(u, m), p = M[h], u.duration = +Ne(_, t(l), h, p, M), u.delay = (+Ne(b, t(l), h, p, M) || 0) - l._delay, !x && 1 === f && u.delay && (l._delay = b = u.delay, l._start += b, u.delay = 0), c.to(p, u, g ? g(h, p, M) : 0), c._ease = ke.none;
                        c.duration() ? _ = b = 0 : l.timeline = 0
                    } else if (k) {
                        kt(bt(c.vars.defaults, {
                            ease: "none"
                        })), c._ease = Ae(k.ease || r.ease || "none");
                        var P, B, Y, j = 0;
                        if (I(k)) k.forEach((function(t) {
                            return c.to(M, t, ">")
                        })), c.duration();
                        else {
                            for (d in u = {}, k) "ease" === d || "easeEach" === d || qe(d, k[d], u, k.easeEach);
                            for (d in u)
                                for (P = u[d].sort((function(t, e) {
                                        return t.t - e.t
                                    })), j = 0, h = 0; h < P.length; h++)(Y = {
                                    ease: (B = P[h]).e,
                                    duration: (B.t - (h ? P[h - 1].t : 0)) / 100 * _
                                })[d] = B.v, c.to(M, Y, j), j += Y.duration;
                            c.duration() < _ && c.to({}, {
                                duration: _ - c.duration()
                            })
                        }
                    }
                    _ || l.duration(_ = c.duration())
                } else l.timeline = 0;
                return !0 !== T || n || (Ye = t(l), o.killTweensOf(M), Ye = 0), Yt(C, t(l), s), r.reversed && l.reverse(), r.paused && l.paused(!0), (w || !_ && !k && l._start === dt(C._time) && L(w) && Pt(t(l)) && "nested" !== C.data) && (l._tTime = -1e-8, l.render(Math.max(0, -b))), E && jt(t(l), E), l
            }
            e(s, i);
            var a = s.prototype;
            return a.render = function(t, e, i) {
                var n, s, o, a, l, c, h, u, f, d = this._time,
                    p = this._tDur,
                    g = this._dur,
                    m = t < 0,
                    v = t > p - w && !m ? p : t < w ? 0 : t;
                if (g) {
                    if (v !== this._tTime || !t || i || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== m) {
                        if (n = v, u = this.timeline, this._repeat) {
                            if (a = g + this._rDelay, this._repeat < -1 && m) return this.totalTime(100 * a + t, e, i);
                            if (n = dt(v % a), v === p ? (o = this._repeat, n = g) : ((o = ~~(v / a)) && o === v / a && (n = g, o--), n > g && (n = g)), (c = this._yoyo && 1 & o) && (f = this._yEase, n = g - n), l = Lt(this._tTime, a), n === d && !i && this._initted) return this._tTime = v, this;
                            o !== l && (u && this._yEase && Me(u, c), !this.vars.repeatRefresh || c || this._lock || (this._lock = i = 1, this.render(dt(a * o), !0).invalidate()._lock = 0))
                        }
                        if (!this._initted) {
                            if (Ft(this, m ? t : n, i, e)) return this._tTime = 0, this;
                            if (d !== this._time) return this;
                            if (g !== this._dur) return this.render(t, e, i)
                        }
                        if (this._tTime = v, this._time = n, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = h = (f || this._ease)(n / g), this._from && (this.ratio = h = 1 - h), n && !d && !e && (he(this, "onStart"), this._tTime !== v)) return this;
                        for (s = this._pt; s;) s.r(h, s.d), s = s._next;
                        u && u.render(t < 0 ? t : !n && c ? -1e-8 : u._dur * u._ease(n / this._dur), e, i) || this._startAt && (this._zTime = t), this._onUpdate && !e && (m && At(this, t, 0, i), he(this, "onUpdate")), this._repeat && o !== l && this.vars.onRepeat && !e && this.parent && he(this, "onRepeat"), v !== this._tDur && v || this._tTime !== v || (m && !this._onUpdate && At(this, t, 0, !0), (t || !g) && (v === this._tDur && this._ts > 0 || !v && this._ts < 0) && Ot(this, 1), e || m && !d || !v && !d || (he(this, v === p ? "onComplete" : "onReverseComplete", !0), this._prom && !(v < p && this.timeScale() > 0) && this._prom()))
                    }
                } else ! function(t, e, i, n) {
                    var s, o, a, l = t.ratio,
                        c = e < 0 || !e && (!t._start && Xt(t) && (t._initted || !Ht(t)) || (t._ts < 0 || t._dp._ts < 0) && !Ht(t)) ? 0 : 1,
                        h = t._rDelay,
                        u = 0;
                    if (h && t._repeat && (u = $t(0, t._tDur, e), o = Lt(u, h), t._yoyo && 1 & o && (c = 1 - c), o !== Lt(t._tTime, h) && (l = 1 - c, t.vars.repeatRefresh && t._initted && t.invalidate())), c !== l || r || n || t._zTime === w || !e && t._zTime) {
                        if (!t._initted && Ft(t, e, n, i)) return;
                        for (a = t._zTime, t._zTime = e || (i ? w : 0), i || (i = e && !a), t.ratio = c, t._from && (c = 1 - c), t._time = 0, t._tTime = u, s = t._pt; s;) s.r(c, s.d), s = s._next;
                        e < 0 && At(t, e, 0, !0), t._onUpdate && !i && he(t, "onUpdate"), u && t._repeat && !i && t.parent && he(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === c && (c && Ot(t, 1), i || r || (he(t, c ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
                    } else t._zTime || (t._zTime = e)
                }(this, t, e, i);
                return this
            }, a.targets = function() {
                return this._targets
            }, a.invalidate = function() {
                return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), i.prototype.invalidate.call(this)
            }, a.resetTo = function(t, e, i, n) {
                d || xe.wake(), this._ts || this.play();
                var r = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
                return this._initted || We(this, r),
                    function(t, e, i, n, r, s, o) {
                        var a, l, c, h, u = (t._pt && t._ptCache || (t._ptCache = {}))[e];
                        if (!u)
                            for (u = t._ptCache[e] = [], c = t._ptLookup, h = t._targets.length; h--;) {
                                if ((a = c[h][e]) && a.d && a.d._pt)
                                    for (a = a.d._pt; a && a.p !== e && a.fp !== e;) a = a._next;
                                if (!a) return je = 1, t.vars[e] = "+=0", We(t, o), je = 0, 1;
                                u.push(a)
                            }
                        for (h = u.length; h--;)(a = (l = u[h])._pt || l).s = !n && 0 !== n || r ? a.s + (n || 0) + s * a.c : n, a.c = i - a.s, l.e && (l.e = ft(i) + Kt(l.e)), l.b && (l.b = a.s + Kt(l.b))
                    }(this, t, e, i, n, this._ease(r / this._dur), r) ? this.resetTo(t, e, i, n) : (zt(this, 0), this.parent || St(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
            }, a.kill = function(t, e) {
                if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? ue(this) : this;
                if (this.timeline) {
                    var i = this.timeline.totalDuration();
                    return this.timeline.killTweensOf(t, e, Ye && !0 !== Ye.vars.overwrite)._first || ue(this), this.parent && i !== this.timeline.totalDuration() && Wt(this, this._dur * this.timeline._tDur / i, 0, 1), this
                }
                var n, r, s, o, a, l, c, h = this._targets,
                    u = t ? Jt(t) : h,
                    f = this._ptLookup,
                    d = this._pt;
                if ((!e || "all" === e) && function(t, e) {
                        for (var i = t.length, n = i === e.length; n && i-- && t[i] === e[i];);
                        return i < 0
                    }(h, u)) return "all" === e && (this._pt = 0), ue(this);
                for (n = this._op = this._op || [], "all" !== e && (C(e) && (a = {}, ut(e, (function(t) {
                        return a[t] = 1
                    })), e = a), e = function(t, e) {
                        var i, n, r, s, o = t[0] ? ct(t[0]).harness : 0,
                            a = o && o.aliases;
                        if (!a) return e;
                        for (n in i = wt({}, e), a)
                            if (n in i)
                                for (r = (s = a[n].split(",")).length; r--;) i[s[r]] = i[n];
                        return i
                    }(h, e)), c = h.length; c--;)
                    if (~u.indexOf(h[c]))
                        for (a in r = f[c], "all" === e ? (n[c] = e, o = r, s = {}) : (s = n[c] = n[c] || {}, o = e), o)(l = r && r[a]) && ("kill" in l.d && !0 !== l.d.kill(a) || Et(this, l, "_pt"), delete r[a]), "all" !== s && (s[a] = 1);
                return this._initted && !this._pt && d && ue(this), this
            }, s.to = function(t, e) {
                return new s(t, e, arguments[2])
            }, s.from = function(t, e) {
                return Ut(1, arguments)
            }, s.delayedCall = function(t, e, i, n) {
                return new s(e, 0, {
                    immediateRender: !1,
                    lazy: !1,
                    overwrite: !1,
                    delay: t,
                    onComplete: e,
                    onReverseComplete: e,
                    onCompleteParams: i,
                    onReverseCompleteParams: i,
                    callbackScope: n
                })
            }, s.fromTo = function(t, e, i) {
                return Ut(2, arguments)
            }, s.set = function(t, e) {
                return e.duration = 0, e.repeatDelay || (e.repeat = 0), new s(t, e)
            }, s.killTweensOf = function(t, e, i) {
                return o.killTweensOf(t, e, i)
            }, s
        }(ze);
        bt(Ge.prototype, {
            _targets: [],
            _lazy: 0,
            _startAt: 0,
            _op: 0,
            _onInit: 0
        }), ut("staggerTo,staggerFrom,staggerFromTo", (function(t) {
            Ge[t] = function() {
                var e = new Ie,
                    i = Qt.call(arguments, 0);
                return i.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, i)
            }
        }));
        var $e = function(t, e, i) {
                return t[e] = i
            },
            Ke = function(t, e, i) {
                return t[e](i)
            },
            Qe = function(t, e, i, n) {
                return t[e](n.fp, i)
            },
            Ze = function(t, e, i) {
                return t.setAttribute(e, i)
            },
            Je = function(t, e) {
                return M(t[e]) ? Ke : P(t[e]) && t.setAttribute ? Ze : $e
            },
            ti = function(t, e) {
                return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
            },
            ei = function(t, e) {
                return e.set(e.t, e.p, !!(e.s + e.c * t), e)
            },
            ii = function(t, e) {
                var i = e._pt,
                    n = "";
                if (!t && e.b) n = e.b;
                else if (1 === t && e.e) n = e.e;
                else {
                    for (; i;) n = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round(1e4 * (i.s + i.c * t)) / 1e4) + n, i = i._next;
                    n += e.c
                }
                e.set(e.t, e.p, n, e)
            },
            ni = function(t, e) {
                for (var i = e._pt; i;) i.r(t, i.d), i = i._next
            },
            ri = function(t, e, i, n) {
                for (var r, s = this._pt; s;) r = s._next, s.p === n && s.modifier(t, e, i), s = r
            },
            si = function(t) {
                for (var e, i, n = this._pt; n;) i = n._next, n.p === t && !n.op || n.op === t ? Et(this, n, "_pt") : n.dep || (e = 1), n = i;
                return !e
            },
            oi = function(t, e, i, n) {
                n.mSet(t, e, n.m.call(n.tween, i, n.mt), n)
            },
            ai = function(t) {
                for (var e, i, n, r, s = t._pt; s;) {
                    for (e = s._next, i = n; i && i.pr > s.pr;) i = i._next;
                    (s._prev = i ? i._prev : r) ? s._prev._next = s: n = s, (s._next = i) ? i._prev = s : r = s, s = e
                }
                t._pt = n
            },
            li = function() {
                function t(t, e, i, n, r, s, o, a, l) {
                    this.t = e, this.s = n, this.c = r, this.p = i, this.r = s || ti, this.d = o || this, this.set = a || $e, this.pr = l || 0, this._next = t, t && (t._prev = this)
                }
                return t.prototype.modifier = function(t, e, i) {
                    this.mSet = this.mSet || this.set, this.set = oi, this.m = t, this.mt = i, this.tween = e
                }, t
            }();
        ut(at + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function(t) {
            return tt[t] = 1
        })), N.TweenMax = N.TweenLite = Ge, N.TimelineLite = N.TimelineMax = Ie, o = new Ie({
            sortChildren: !1,
            defaults: _,
            autoRemoveChildren: !0,
            id: "root",
            smoothChildTiming: !0
        }), y.stringFilter = we;
        var ci = [],
            hi = {},
            ui = [],
            fi = 0,
            di = function(t) {
                return (hi[t] || ui).map((function(t) {
                    return t()
                }))
            },
            pi = function() {
                var t = Date.now(),
                    e = [];
                t - fi > 2 && (di("matchMediaInit"), ci.forEach((function(t) {
                    var i, n, r, s, o = t.queries,
                        l = t.conditions;
                    for (n in o)(i = a.matchMedia(o[n]).matches) && (r = 1), i !== l[n] && (l[n] = i, s = 1);
                    s && (t.revert(), r && e.push(t))
                })), di("matchMediaRevert"), e.forEach((function(t) {
                    return t.onMatch(t)
                })), fi = t, di("matchMedia"))
            },
            gi = function() {
                function t(t, e) {
                    this.selector = e && te(e), this.data = [], this._r = [], this.isReverted = !1, t && this.add(t)
                }
                var e = t.prototype;
                return e.add = function(t, e, i) {
                    M(t) && (i = e, e = t, t = M);
                    var n = this,
                        r = function() {
                            var t, r = s,
                                o = n.selector;
                            return r && r !== n && r.data.push(n), i && (n.selector = te(i)), s = n, t = e.apply(n, arguments), M(t) && n._r.push(t), s = r, n.selector = o, n.isReverted = !1, t
                        };
                    return n.last = r, t === M ? r(n) : t ? n[t] = r : r
                }, e.ignore = function(t) {
                    var e = s;
                    s = null, t(this), s = e
                }, e.getTweens = function() {
                    var e = [];
                    return this.data.forEach((function(i) {
                        return i instanceof t ? e.push.apply(e, i.getTweens()) : i instanceof Ge && e.push(i)
                    })), e
                }, e.clear = function() {
                    this._r.length = this.data.length = 0
                }, e.kill = function(t, e) {
                    var i = this;
                    if (t ? (this.getTweens().map((function(t) {
                            return {
                                g: t.globalTime(0),
                                t
                            }
                        })).sort((function(t, e) {
                            return e.g - t.g || -1
                        })).forEach((function(e) {
                            return e.t.revert(t)
                        })), this.data.forEach((function(e) {
                            return !(e instanceof ze) && e.revert && e.revert(t)
                        })), this._r.forEach((function(e) {
                            return e(t, i)
                        })), this.isReverted = !0) : this.data.forEach((function(t) {
                            return t.kill && t.kill()
                        })), this.clear(), e) {
                        var n = ci.indexOf(this);
                        ~n && ci.splice(n, 1)
                    }
                }, e.revert = function(t) {
                    this.kill(t || {})
                }, t
            }(),
            mi = function() {
                function t(t) {
                    this.contexts = [], this.scope = t
                }
                var e = t.prototype;
                return e.add = function(t, e, i) {
                    D(t) || (t = {
                        matches: t
                    });
                    var n, r, s, o = new gi(0, i || this.scope),
                        l = o.conditions = {};
                    for (r in this.contexts.push(o), e = o.add("onMatch", e), o.queries = t, t) "all" === r ? s = 1 : (n = a.matchMedia(t[r])) && (ci.indexOf(o) < 0 && ci.push(o), (l[r] = n.matches) && (s = 1), n.addListener ? n.addListener(pi) : n.addEventListener("change", pi));
                    return s && e(o), this
                }, e.revert = function(t) {
                    this.kill(t || {})
                }, e.kill = function(t) {
                    this.contexts.forEach((function(e) {
                        return e.kill(t, !0)
                    }))
                }, t
            }(),
            vi = {
                registerPlugin: function() {
                    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                    e.forEach((function(t) {
                        return fe(t)
                    }))
                },
                timeline: function(t) {
                    return new Ie(t)
                },
                getTweensOf: function(t, e) {
                    return o.getTweensOf(t, e)
                },
                getProperty: function(t, e, i, n) {
                    C(t) && (t = Jt(t)[0]);
                    var r = ct(t || {}).get,
                        s = i ? _t : yt;
                    return "native" === i && (i = ""), t ? e ? s((nt[e] && nt[e].get || r)(t, e, i, n)) : function(e, i, n) {
                        return s((nt[e] && nt[e].get || r)(t, e, i, n))
                    } : t
                },
                quickSetter: function(t, e, i) {
                    if ((t = Jt(t)).length > 1) {
                        var n = t.map((function(t) {
                                return bi.quickSetter(t, e, i)
                            })),
                            r = n.length;
                        return function(t) {
                            for (var e = r; e--;) n[e](t)
                        }
                    }
                    t = t[0] || {};
                    var s = nt[e],
                        o = ct(t),
                        a = o.harness && (o.harness.aliases || {})[e] || e,
                        l = s ? function(e) {
                            var n = new s;
                            f._pt = 0, n.init(t, i ? e + i : e, f, 0, [t]), n.render(1, n), f._pt && ni(1, f)
                        } : o.set(t, a);
                    return s ? l : function(e) {
                        return l(t, a, i ? e + i : e, o, 1)
                    }
                },
                quickTo: function(t, e, i) {
                    var n, r = bi.to(t, wt(((n = {})[e] = "+=0.1", n.paused = !0, n), i || {})),
                        s = function(t, i, n) {
                            return r.resetTo(e, t, i, n)
                        };
                    return s.tween = r, s
                },
                isTweening: function(t) {
                    return o.getTweensOf(t, !0).length > 0
                },
                defaults: function(t) {
                    return t && t.ease && (t.ease = Ae(t.ease, _.ease)), xt(_, t || {})
                },
                config: function(t) {
                    return xt(y, t || {})
                },
                registerEffect: function(t) {
                    var e = t.name,
                        i = t.effect,
                        n = t.plugins,
                        r = t.defaults,
                        s = t.extendTimeline;
                    (n || "").split(",").forEach((function(t) {
                        return t && !nt[t] && !N[t] && $(e + " effect requires " + t + " plugin.")
                    })), rt[e] = function(t, e, n) {
                        return i(Jt(t), bt(e || {}, r), n)
                    }, s && (Ie.prototype[e] = function(t, i, n) {
                        return this.add(rt[e](t, D(i) ? i : (n = i) && {}, this), n)
                    })
                },
                registerEase: function(t, e) {
                    ke[t] = Ae(e)
                },
                parseEase: function(t, e) {
                    return arguments.length ? Ae(t, e) : ke
                },
                getById: function(t) {
                    return o.getById(t)
                },
                exportRoot: function(t, e) {
                    void 0 === t && (t = {});
                    var i, n, r = new Ie(t);
                    for (r.smoothChildTiming = L(t.smoothChildTiming), o.remove(r), r._dp = 0, r._time = r._tTime = o._time, i = o._first; i;) n = i._next, !e && !i._dur && i instanceof Ge && i.vars.onComplete === i._targets[0] || Yt(r, i, i._start - i._delay), i = n;
                    return Yt(o, r, 0), r
                },
                context: function(t, e) {
                    return t ? new gi(t, e) : s
                },
                matchMedia: function(t) {
                    return new mi(t)
                },
                matchMediaRefresh: function() {
                    return ci.forEach((function(t) {
                        var e, i, n = t.conditions;
                        for (i in n) n[i] && (n[i] = !1, e = 1);
                        e && t.revert()
                    })) || pi()
                },
                addEventListener: function(t, e) {
                    var i = hi[t] || (hi[t] = []);
                    ~i.indexOf(e) || i.push(e)
                },
                removeEventListener: function(t, e) {
                    var i = hi[t],
                        n = i && i.indexOf(e);
                    n >= 0 && i.splice(n, 1)
                },
                utils: {
                    wrap: function t(e, i, n) {
                        var r = i - e;
                        return I(e) ? oe(e, t(0, e.length), i) : Gt(n, (function(t) {
                            return (r + (t - e) % r) % r + e
                        }))
                    },
                    wrapYoyo: function t(e, i, n) {
                        var r = i - e,
                            s = 2 * r;
                        return I(e) ? oe(e, t(0, e.length - 1), i) : Gt(n, (function(t) {
                            return e + ((t = (s + (t - e) % s) % s || 0) > r ? s - t : t)
                        }))
                    },
                    distribute: ie,
                    random: se,
                    snap: re,
                    normalize: function(t, e, i) {
                        return le(t, e, 0, 1, i)
                    },
                    getUnit: Kt,
                    clamp: function(t, e, i) {
                        return Gt(i, (function(i) {
                            return $t(t, e, i)
                        }))
                    },
                    splitColor: me,
                    toArray: Jt,
                    selector: te,
                    mapRange: le,
                    pipe: function() {
                        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                        return function(t) {
                            return e.reduce((function(t, e) {
                                return e(t)
                            }), t)
                        }
                    },
                    unitize: function(t, e) {
                        return function(i) {
                            return t(parseFloat(i)) + (e || Kt(i))
                        }
                    },
                    interpolate: function t(e, i, n, r) {
                        var s = isNaN(e + i) ? 0 : function(t) {
                            return (1 - t) * e + t * i
                        };
                        if (!s) {
                            var o, a, l, c, h, u = C(e),
                                f = {};
                            if (!0 === n && (r = 1) && (n = null), u) e = {
                                p: e
                            }, i = {
                                p: i
                            };
                            else if (I(e) && !I(i)) {
                                for (l = [], c = e.length, h = c - 2, a = 1; a < c; a++) l.push(t(e[a - 1], e[a]));
                                c--, s = function(t) {
                                    t *= c;
                                    var e = Math.min(h, ~~t);
                                    return l[e](t - e)
                                }, n = i
                            } else r || (e = wt(I(e) ? [] : {}, e));
                            if (!l) {
                                for (o in i) Xe.call(f, e, o, "get", i[o]);
                                s = function(t) {
                                    return ni(t, f) || (u ? e.p : e)
                                }
                            }
                        }
                        return Gt(n, s)
                    },
                    shuffle: ee
                },
                install: U,
                effects: rt,
                ticker: xe,
                updateRoot: Ie.updateRoot,
                plugins: nt,
                globalTimeline: o,
                core: {
                    PropTween: li,
                    globals: K,
                    Tween: Ge,
                    Timeline: Ie,
                    Animation: ze,
                    getCache: ct,
                    _removeLinkedListItem: Et,
                    reverting: function() {
                        return r
                    },
                    context: function(t) {
                        return t && s && (s.data.push(t), t._ctx = s), s
                    },
                    suppressOverwrites: function(t) {
                        return n = t
                    }
                }
            };
        ut("to,from,fromTo,delayedCall,set,killTweensOf", (function(t) {
            return vi[t] = Ge[t]
        })), xe.add(Ie.updateRoot), f = vi.to({}, {
            duration: 0
        });
        var yi = function(t, e) {
                for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e;) i = i._next;
                return i
            },
            _i = function(t, e) {
                return {
                    name: t,
                    rawVars: 1,
                    init: function(t, i, n) {
                        n._onInit = function(t) {
                            var n, r;
                            if (C(i) && (n = {}, ut(i, (function(t) {
                                    return n[t] = 1
                                })), i = n), e) {
                                for (r in n = {}, i) n[r] = e(i[r]);
                                i = n
                            }! function(t, e) {
                                var i, n, r, s = t._targets;
                                for (i in e)
                                    for (n = s.length; n--;)(r = t._ptLookup[n][i]) && (r = r.d) && (r._pt && (r = yi(r, i)), r && r.modifier && r.modifier(e[i], t, s[n], i))
                            }(t, i)
                        }
                    }
                }
            },
            bi = vi.registerPlugin({
                name: "attr",
                init: function(t, e, i, n, r) {
                    var s, o, a;
                    for (s in this.tween = i, e) a = t.getAttribute(s) || "", (o = this.add(t, "setAttribute", (a || 0) + "", e[s], n, r, 0, 0, s)).op = s, o.b = a, this._props.push(s)
                },
                render: function(t, e) {
                    for (var i = e._pt; i;) r ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d), i = i._next
                }
            }, {
                name: "endArray",
                init: function(t, e) {
                    for (var i = e.length; i--;) this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1)
                }
            }, _i("roundProps", ne), _i("modifiers"), _i("snap", re)) || vi;
        Ge.version = Ie.version = bi.version = "3.11.1", h = 1, B() && Te(), ke.Power0, ke.Power1, ke.Power2, ke.Power3, ke.Power4, ke.Linear, ke.Quad, ke.Cubic, ke.Quart, ke.Quint, ke.Strong, ke.Elastic, ke.Back, ke.SteppedEase, ke.Bounce, ke.Sine, ke.Expo, ke.Circ;
        var wi, xi, Ti, ki, Si, Ei, Oi, Ci, Mi = {},
            Ai = 180 / Math.PI,
            Pi = Math.PI / 180,
            Di = Math.atan2,
            Li = /([A-Z])/g,
            Bi = /(left|right|width|margin|padding|x)/i,
            Ri = /[\s,\(]\S/,
            zi = {
                autoAlpha: "opacity,visibility",
                scale: "scaleX,scaleY",
                alpha: "opacity"
            },
            Ii = function(t, e) {
                return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
            },
            Yi = function(t, e) {
                return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
            },
            ji = function(t, e) {
                return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
            },
            Fi = function(t, e) {
                var i = e.s + e.c * t;
                e.set(e.t, e.p, ~~(i + (i < 0 ? -.5 : .5)) + e.u, e)
            },
            Xi = function(t, e) {
                return e.set(e.t, e.p, t ? e.e : e.b, e)
            },
            Hi = function(t, e) {
                return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
            },
            Wi = function(t, e, i) {
                return t.style[e] = i
            },
            qi = function(t, e, i) {
                return t.style.setProperty(e, i)
            },
            Ni = function(t, e, i) {
                return t._gsap[e] = i
            },
            Vi = function(t, e, i) {
                return t._gsap.scaleX = t._gsap.scaleY = i
            },
            Ui = function(t, e, i, n, r) {
                var s = t._gsap;
                s.scaleX = s.scaleY = i, s.renderTransform(r, s)
            },
            Gi = function(t, e, i, n, r) {
                var s = t._gsap;
                s[e] = i, s.renderTransform(r, s)
            },
            $i = "transform",
            Ki = $i + "Origin",
            Qi = function(t) {
                var e = this,
                    i = this.target,
                    n = i.style;
                if (t in Mi) {
                    if (this.tfm = this.tfm || {}, "transform" !== t && (~(t = zi[t] || t).indexOf(",") ? t.split(",").forEach((function(t) {
                            return e.tfm[t] = mn(i, t)
                        })) : this.tfm[t] = i._gsap.x ? i._gsap[t] : mn(i, t)), this.props.indexOf($i) >= 0) return;
                    i._gsap.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(Ki, "")), t = $i
                }
                n && this.props.push(t, n[t])
            },
            Zi = function(t) {
                t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"))
            },
            Ji = function() {
                var t, e, i = this.props,
                    n = this.target,
                    r = n.style,
                    s = n._gsap;
                for (t = 0; t < i.length; t += 2) i[t + 1] ? r[i[t]] = i[t + 1] : r.removeProperty(i[t].replace(Li, "-$1").toLowerCase());
                if (this.tfm) {
                    for (e in this.tfm) s[e] = this.tfm[e];
                    s.svg && (s.renderTransform(), n.setAttribute("data-svg-origin", this.svgo || "")), !(t = Oi()) || t.isStart || r[$i] || (Zi(r), s.uncache = 1)
                }
            },
            tn = function(t, e) {
                var i = {
                    target: t,
                    props: [],
                    revert: Ji,
                    save: Qi
                };
                return e && e.split(",").forEach((function(t) {
                    return i.save(t)
                })), i
            },
            en = function(t, e) {
                var i = xi.createElementNS ? xi.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : xi.createElement(t);
                return i.style ? i : xi.createElement(t)
            },
            nn = function t(e, i, n) {
                var r = getComputedStyle(e);
                return r[i] || r.getPropertyValue(i.replace(Li, "-$1").toLowerCase()) || r.getPropertyValue(i) || !n && t(e, sn(i) || i, 1) || ""
            },
            rn = "O,Moz,ms,Ms,Webkit".split(","),
            sn = function(t, e, i) {
                var n = (e || Si).style,
                    r = 5;
                if (t in n && !i) return t;
                for (t = t.charAt(0).toUpperCase() + t.substr(1); r-- && !(rn[r] + t in n););
                return r < 0 ? null : (3 === r ? "ms" : r >= 0 ? rn[r] : "") + t
            },
            on = function() {
                "undefined" != typeof window && window.document && (wi = window, xi = wi.document, Ti = xi.documentElement, Si = en("div") || {
                    style: {}
                }, en("div"), $i = sn($i), Ki = $i + "Origin", Si.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Ci = !!sn("perspective"), Oi = bi.core.reverting, ki = 1)
            },
            an = function t(e) {
                var i, n = en("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                    r = this.parentNode,
                    s = this.nextSibling,
                    o = this.style.cssText;
                if (Ti.appendChild(n), n.appendChild(this), this.style.display = "block", e) try {
                    i = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t
                } catch (t) {} else this._gsapBBox && (i = this._gsapBBox());
                return r && (s ? r.insertBefore(this, s) : r.appendChild(this)), Ti.removeChild(n), this.style.cssText = o, i
            },
            ln = function(t, e) {
                for (var i = e.length; i--;)
                    if (t.hasAttribute(e[i])) return t.getAttribute(e[i])
            },
            cn = function(t) {
                var e;
                try {
                    e = t.getBBox()
                } catch (i) {
                    e = an.call(t, !0)
                }
                return e && (e.width || e.height) || t.getBBox === an || (e = an.call(t, !0)), !e || e.width || e.x || e.y ? e : {
                    x: +ln(t, ["x", "cx", "x1"]) || 0,
                    y: +ln(t, ["y", "cy", "y1"]) || 0,
                    width: 0,
                    height: 0
                }
            },
            hn = function(t) {
                return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !cn(t))
            },
            un = function(t, e) {
                if (e) {
                    var i = t.style;
                    e in Mi && e !== Ki && (e = $i), i.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), i.removeProperty(e.replace(Li, "-$1").toLowerCase())) : i.removeAttribute(e)
                }
            },
            fn = function(t, e, i, n, r, s) {
                var o = new li(t._pt, e, i, 0, 1, s ? Hi : Xi);
                return t._pt = o, o.b = n, o.e = r, t._props.push(i), o
            },
            dn = {
                deg: 1,
                rad: 1,
                turn: 1
            },
            pn = {
                grid: 1,
                flex: 1
            },
            gn = function t(e, i, n, r) {
                var s, o, a, l, c = parseFloat(n) || 0,
                    h = (n + "").trim().substr((c + "").length) || "px",
                    u = Si.style,
                    f = Bi.test(i),
                    d = "svg" === e.tagName.toLowerCase(),
                    p = (d ? "client" : "offset") + (f ? "Width" : "Height"),
                    g = 100,
                    m = "px" === r,
                    v = "%" === r;
                return r === h || !c || dn[r] || dn[h] ? c : ("px" !== h && !m && (c = t(e, i, n, "px")), l = e.getCTM && hn(e), !v && "%" !== h || !Mi[i] && !~i.indexOf("adius") ? (u[f ? "width" : "height"] = g + (m ? h : r), o = ~i.indexOf("adius") || "em" === r && e.appendChild && !d ? e : e.parentNode, l && (o = (e.ownerSVGElement || {}).parentNode), o && o !== xi && o.appendChild || (o = xi.body), (a = o._gsap) && v && a.width && f && a.time === xe.time && !a.uncache ? ft(c / a.width * g) : ((v || "%" === h) && !pn[nn(o, "display")] && (u.position = nn(e, "position")), o === e && (u.position = "static"), o.appendChild(Si), s = Si[p], o.removeChild(Si), u.position = "absolute", f && v && ((a = ct(o)).time = xe.time, a.width = o[p]), ft(m ? s * c / g : s && c ? g / s * c : 0))) : (s = l ? e.getBBox()[f ? "width" : "height"] : e[p], ft(v ? c / s * g : c / 100 * s)))
            },
            mn = function(t, e, i, n) {
                var r;
                return ki || on(), e in zi && "transform" !== e && ~(e = zi[e]).indexOf(",") && (e = e.split(",")[0]), Mi[e] && "transform" !== e ? (r = On(t, n), r = "transformOrigin" !== e ? r[e] : r.svg ? r.origin : Cn(nn(t, Ki)) + " " + r.zOrigin + "px") : (!(r = t.style[e]) || "auto" === r || n || ~(r + "").indexOf("calc(")) && (r = bn[e] && bn[e](t, e, i) || nn(t, e) || ht(t, e) || ("opacity" === e ? 1 : 0)), i && !~(r + "").trim().indexOf(" ") ? gn(t, e, r, i) + i : r
            },
            vn = function(t, e, i, n) {
                if (!i || "none" === i) {
                    var r = sn(e, t, 1),
                        s = r && nn(t, r, 1);
                    s && s !== i ? (e = r, i = s) : "borderColor" === e && (i = nn(t, "borderTopColor"))
                }
                var o, a, l, c, h, u, f, d, p, g, m, v = new li(this._pt, t.style, e, 0, 1, ii),
                    _ = 0,
                    b = 0;
                if (v.b = i, v.e = n, i += "", "auto" == (n += "") && (t.style[e] = n, n = nn(t, e) || n, t.style[e] = i), we(o = [i, n]), n = o[1], l = (i = o[0]).match(F) || [], (n.match(F) || []).length) {
                    for (; a = F.exec(n);) f = a[0], p = n.substring(_, a.index), h ? h = (h + 1) % 5 : "rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5) || (h = 1), f !== (u = l[b++] || "") && (c = parseFloat(u) || 0, m = u.substr((c + "").length), "=" === f.charAt(1) && (f = pt(c, f) + m), d = parseFloat(f), g = f.substr((d + "").length), _ = F.lastIndex - g.length, g || (g = g || y.units[e] || m, _ === n.length && (n += g, v.e += g)), m !== g && (c = gn(t, e, u, g) || 0), v._pt = {
                        _next: v._pt,
                        p: p || 1 === b ? p : ",",
                        s: c,
                        c: d - c,
                        m: h && h < 4 || "zIndex" === e ? Math.round : 0
                    });
                    v.c = _ < n.length ? n.substring(_, n.length) : ""
                } else v.r = "display" === e && "none" === n ? Hi : Xi;
                return H.test(n) && (v.e = 0), this._pt = v, v
            },
            yn = {
                top: "0%",
                bottom: "100%",
                left: "0%",
                right: "100%",
                center: "50%"
            },
            _n = function(t, e) {
                if (e.tween && e.tween._time === e.tween._dur) {
                    var i, n, r, s = e.t,
                        o = s.style,
                        a = e.u,
                        l = s._gsap;
                    if ("all" === a || !0 === a) o.cssText = "", n = 1;
                    else
                        for (r = (a = a.split(",")).length; --r > -1;) i = a[r], Mi[i] && (n = 1, i = "transformOrigin" === i ? Ki : $i), un(s, i);
                    n && (un(s, $i), l && (l.svg && s.removeAttribute("transform"), On(s, 1), l.uncache = 1, Zi(o)))
                }
            },
            bn = {
                clearProps: function(t, e, i, n, r) {
                    if ("isFromStart" !== r.data) {
                        var s = t._pt = new li(t._pt, e, i, 0, 0, _n);
                        return s.u = n, s.pr = -10, s.tween = r, t._props.push(i), 1
                    }
                }
            },
            wn = [1, 0, 0, 1, 0, 0],
            xn = {},
            Tn = function(t) {
                return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
            },
            kn = function(t) {
                var e = nn(t, $i);
                return Tn(e) ? wn : e.substr(7).match(j).map(ft)
            },
            Sn = function(t, e) {
                var i, n, r, s, o = t._gsap || ct(t),
                    a = t.style,
                    l = kn(t);
                return o.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (l = [(r = t.transform.baseVal.consolidate().matrix).a, r.b, r.c, r.d, r.e, r.f]).join(",") ? wn : l : (l !== wn || t.offsetParent || t === Ti || o.svg || (r = a.display, a.display = "block", (i = t.parentNode) && t.offsetParent || (s = 1, n = t.nextElementSibling, Ti.appendChild(t)), l = kn(t), r ? a.display = r : un(t, "display"), s && (n ? i.insertBefore(t, n) : i ? i.appendChild(t) : Ti.removeChild(t))), e && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l)
            },
            En = function(t, e, i, n, r, s) {
                var o, a, l, c = t._gsap,
                    h = r || Sn(t, !0),
                    u = c.xOrigin || 0,
                    f = c.yOrigin || 0,
                    d = c.xOffset || 0,
                    p = c.yOffset || 0,
                    g = h[0],
                    m = h[1],
                    v = h[2],
                    y = h[3],
                    _ = h[4],
                    b = h[5],
                    w = e.split(" "),
                    x = parseFloat(w[0]) || 0,
                    T = parseFloat(w[1]) || 0;
                i ? h !== wn && (a = g * y - m * v) && (l = x * (-m / a) + T * (g / a) - (g * b - m * _) / a, x = x * (y / a) + T * (-v / a) + (v * b - y * _) / a, T = l) : (x = (o = cn(t)).x + (~w[0].indexOf("%") ? x / 100 * o.width : x), T = o.y + (~(w[1] || w[0]).indexOf("%") ? T / 100 * o.height : T)), n || !1 !== n && c.smooth ? (_ = x - u, b = T - f, c.xOffset = d + (_ * g + b * v) - _, c.yOffset = p + (_ * m + b * y) - b) : c.xOffset = c.yOffset = 0, c.xOrigin = x, c.yOrigin = T, c.smooth = !!n, c.origin = e, c.originIsAbsolute = !!i, t.style[Ki] = "0px 0px", s && (fn(s, c, "xOrigin", u, x), fn(s, c, "yOrigin", f, T), fn(s, c, "xOffset", d, c.xOffset), fn(s, c, "yOffset", p, c.yOffset)), t.setAttribute("data-svg-origin", x + " " + T)
            },
            On = function(t, e) {
                var i = t._gsap || new Re(t);
                if ("x" in i && !e && !i.uncache) return i;
                var n, r, s, o, a, l, c, h, u, f, d, p, g, m, v, _, b, w, x, T, k, S, E, O, C, M, A, P, D, L, B, R, z = t.style,
                    I = i.scaleX < 0,
                    Y = "px",
                    j = "deg",
                    F = getComputedStyle(t),
                    X = nn(t, Ki) || "0";
                return n = r = s = l = c = h = u = f = d = 0, o = a = 1, i.svg = !(!t.getCTM || !hn(t)), F.translate && ("none" === F.translate && "none" === F.scale && "none" === F.rotate || (z[$i] = ("none" !== F.translate ? "translate3d(" + (F.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== F.rotate ? "rotate(" + F.rotate + ") " : "") + ("none" !== F.scale ? "scale(" + F.scale.split(" ").join(",") + ") " : "") + F[$i]), z.scale = z.rotate = z.translate = "none"), m = Sn(t, i.svg), i.svg && (i.uncache ? (C = t.getBBox(), X = i.xOrigin - C.x + "px " + (i.yOrigin - C.y) + "px", O = "") : O = !e && t.getAttribute("data-svg-origin"), En(t, O || X, !!O || i.originIsAbsolute, !1 !== i.smooth, m)), p = i.xOrigin || 0, g = i.yOrigin || 0, m !== wn && (w = m[0], x = m[1], T = m[2], k = m[3], n = S = m[4], r = E = m[5], 6 === m.length ? (o = Math.sqrt(w * w + x * x), a = Math.sqrt(k * k + T * T), l = w || x ? Di(x, w) * Ai : 0, (u = T || k ? Di(T, k) * Ai + l : 0) && (a *= Math.abs(Math.cos(u * Pi))), i.svg && (n -= p - (p * w + g * T), r -= g - (p * x + g * k))) : (R = m[6], L = m[7], A = m[8], P = m[9], D = m[10], B = m[11], n = m[12], r = m[13], s = m[14], c = (v = Di(R, D)) * Ai, v && (O = S * (_ = Math.cos(-v)) + A * (b = Math.sin(-v)), C = E * _ + P * b, M = R * _ + D * b, A = S * -b + A * _, P = E * -b + P * _, D = R * -b + D * _, B = L * -b + B * _, S = O, E = C, R = M), h = (v = Di(-T, D)) * Ai, v && (_ = Math.cos(-v), B = k * (b = Math.sin(-v)) + B * _, w = O = w * _ - A * b, x = C = x * _ - P * b, T = M = T * _ - D * b), l = (v = Di(x, w)) * Ai, v && (O = w * (_ = Math.cos(v)) + x * (b = Math.sin(v)), C = S * _ + E * b, x = x * _ - w * b, E = E * _ - S * b, w = O, S = C), c && Math.abs(c) + Math.abs(l) > 359.9 && (c = l = 0, h = 180 - h), o = ft(Math.sqrt(w * w + x * x + T * T)), a = ft(Math.sqrt(E * E + R * R)), v = Di(S, E), u = Math.abs(v) > 2e-4 ? v * Ai : 0, d = B ? 1 / (B < 0 ? -B : B) : 0), i.svg && (O = t.getAttribute("transform"), i.forceCSS = t.setAttribute("transform", "") || !Tn(nn(t, $i)), O && t.setAttribute("transform", O))), Math.abs(u) > 90 && Math.abs(u) < 270 && (I ? (o *= -1, u += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (a *= -1, u += u <= 0 ? 180 : -180)), e = e || i.uncache, i.x = n - ((i.xPercent = n && (!e && i.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetWidth * i.xPercent / 100 : 0) + Y, i.y = r - ((i.yPercent = r && (!e && i.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-r) ? -50 : 0))) ? t.offsetHeight * i.yPercent / 100 : 0) + Y, i.z = s + Y, i.scaleX = ft(o), i.scaleY = ft(a), i.rotation = ft(l) + j, i.rotationX = ft(c) + j, i.rotationY = ft(h) + j, i.skewX = u + j, i.skewY = f + j, i.transformPerspective = d + Y, (i.zOrigin = parseFloat(X.split(" ")[2]) || 0) && (z[Ki] = Cn(X)), i.xOffset = i.yOffset = 0, i.force3D = y.force3D, i.renderTransform = i.svg ? Rn : Ci ? Bn : An, i.uncache = 0, i
            },
            Cn = function(t) {
                return (t = t.split(" "))[0] + " " + t[1]
            },
            Mn = function(t, e, i) {
                var n = Kt(e);
                return ft(parseFloat(e) + parseFloat(gn(t, "x", i + "px", n))) + n
            },
            An = function(t, e) {
                e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Bn(t, e)
            },
            Pn = "0deg",
            Dn = "0px",
            Ln = ") ",
            Bn = function(t, e) {
                var i = e || this,
                    n = i.xPercent,
                    r = i.yPercent,
                    s = i.x,
                    o = i.y,
                    a = i.z,
                    l = i.rotation,
                    c = i.rotationY,
                    h = i.rotationX,
                    u = i.skewX,
                    f = i.skewY,
                    d = i.scaleX,
                    p = i.scaleY,
                    g = i.transformPerspective,
                    m = i.force3D,
                    v = i.target,
                    y = i.zOrigin,
                    _ = "",
                    b = "auto" === m && t && 1 !== t || !0 === m;
                if (y && (h !== Pn || c !== Pn)) {
                    var w, x = parseFloat(c) * Pi,
                        T = Math.sin(x),
                        k = Math.cos(x);
                    x = parseFloat(h) * Pi, w = Math.cos(x), s = Mn(v, s, T * w * -y), o = Mn(v, o, -Math.sin(x) * -y), a = Mn(v, a, k * w * -y + y)
                }
                g !== Dn && (_ += "perspective(" + g + Ln), (n || r) && (_ += "translate(" + n + "%, " + r + "%) "), (b || s !== Dn || o !== Dn || a !== Dn) && (_ += a !== Dn || b ? "translate3d(" + s + ", " + o + ", " + a + ") " : "translate(" + s + ", " + o + Ln), l !== Pn && (_ += "rotate(" + l + Ln), c !== Pn && (_ += "rotateY(" + c + Ln), h !== Pn && (_ += "rotateX(" + h + Ln), u === Pn && f === Pn || (_ += "skew(" + u + ", " + f + Ln), 1 === d && 1 === p || (_ += "scale(" + d + ", " + p + Ln), v.style[$i] = _ || "translate(0, 0)"
            },
            Rn = function(t, e) {
                var i, n, r, s, o, a = e || this,
                    l = a.xPercent,
                    c = a.yPercent,
                    h = a.x,
                    u = a.y,
                    f = a.rotation,
                    d = a.skewX,
                    p = a.skewY,
                    g = a.scaleX,
                    m = a.scaleY,
                    v = a.target,
                    y = a.xOrigin,
                    _ = a.yOrigin,
                    b = a.xOffset,
                    w = a.yOffset,
                    x = a.forceCSS,
                    T = parseFloat(h),
                    k = parseFloat(u);
                f = parseFloat(f), d = parseFloat(d), (p = parseFloat(p)) && (d += p = parseFloat(p), f += p), f || d ? (f *= Pi, d *= Pi, i = Math.cos(f) * g, n = Math.sin(f) * g, r = Math.sin(f - d) * -m, s = Math.cos(f - d) * m, d && (p *= Pi, o = Math.tan(d - p), r *= o = Math.sqrt(1 + o * o), s *= o, p && (o = Math.tan(p), i *= o = Math.sqrt(1 + o * o), n *= o)), i = ft(i), n = ft(n), r = ft(r), s = ft(s)) : (i = g, s = m, n = r = 0), (T && !~(h + "").indexOf("px") || k && !~(u + "").indexOf("px")) && (T = gn(v, "x", h, "px"), k = gn(v, "y", u, "px")), (y || _ || b || w) && (T = ft(T + y - (y * i + _ * r) + b), k = ft(k + _ - (y * n + _ * s) + w)), (l || c) && (o = v.getBBox(), T = ft(T + l / 100 * o.width), k = ft(k + c / 100 * o.height)), o = "matrix(" + i + "," + n + "," + r + "," + s + "," + T + "," + k + ")", v.setAttribute("transform", o), x && (v.style[$i] = o)
            },
            zn = function(t, e, i, n, r) {
                var s, o, a = 360,
                    l = C(r),
                    c = parseFloat(r) * (l && ~r.indexOf("rad") ? Ai : 1) - n,
                    h = n + c + "deg";
                return l && ("short" === (s = r.split("_")[1]) && (c %= a) != c % 180 && (c += c < 0 ? a : -360), "cw" === s && c < 0 ? c = (c + 36e9) % a - ~~(c / a) * a : "ccw" === s && c > 0 && (c = (c - 36e9) % a - ~~(c / a) * a)), t._pt = o = new li(t._pt, e, i, n, c, Yi), o.e = h, o.u = "deg", t._props.push(i), o
            },
            In = function(t, e) {
                for (var i in e) t[i] = e[i];
                return t
            },
            Yn = function(t, e, i) {
                var n, r, s, o, a, l, c, h = In({}, i._gsap),
                    u = i.style;
                for (r in h.svg ? (s = i.getAttribute("transform"), i.setAttribute("transform", ""), u[$i] = e, n = On(i, 1), un(i, $i), i.setAttribute("transform", s)) : (s = getComputedStyle(i)[$i], u[$i] = e, n = On(i, 1), u[$i] = s), Mi)(s = h[r]) !== (o = n[r]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) < 0 && (a = Kt(s) !== (c = Kt(o)) ? gn(i, r, s, c) : parseFloat(s), l = parseFloat(o), t._pt = new li(t._pt, n, r, a, l - a, Ii), t._pt.u = c || 0, t._props.push(r));
                In(n, h)
            };
        ut("padding,margin,Width,Radius", (function(t, e) {
            var i = "Top",
                n = "Right",
                r = "Bottom",
                s = "Left",
                o = (e < 3 ? [i, n, r, s] : [i + s, i + n, r + n, r + s]).map((function(i) {
                    return e < 2 ? t + i : "border" + i + t
                }));
            bn[e > 1 ? "border" + t : t] = function(t, e, i, n, r) {
                var s, a;
                if (arguments.length < 4) return s = o.map((function(e) {
                    return mn(t, e, i)
                })), 5 === (a = s.join(" ")).split(s[0]).length ? s[0] : a;
                s = (n + "").split(" "), a = {}, o.forEach((function(t, e) {
                    return a[t] = s[e] = s[e] || s[(e - 1) / 2 | 0]
                })), t.init(e, a, r)
            }
        }));
        var jn, Fn, Xn = {
            name: "css",
            register: on,
            targetTest: function(t) {
                return t.style && t.nodeType
            },
            init: function(t, e, i, n, r) {
                var s, o, a, l, c, h, u, f, d, p, g, m, v, _, b, w, x, T, k, S, E = this._props,
                    O = t.style,
                    M = i.vars.startAt;
                for (u in ki || on(), this.styles = this.styles || tn(t), w = this.styles.props, this.tween = i, e)
                    if ("autoRound" !== u && (o = e[u], !nt[u] || !He(u, e, i, n, t, r)))
                        if (c = typeof o, h = bn[u], "function" === c && (c = typeof(o = o.call(i, n, t, r))), "string" === c && ~o.indexOf("random(") && (o = ae(o)), h) h(this, t, u, o, i) && (b = 1);
                        else if ("--" === u.substr(0, 2)) s = (getComputedStyle(t).getPropertyValue(u) + "").trim(), o += "", _e.lastIndex = 0, _e.test(s) || (f = Kt(s), d = Kt(o)), d ? f !== d && (s = gn(t, u, s, d) + d) : f && (o += f), this.add(O, "setProperty", s, o, n, r, 0, 0, u), E.push(u), w.push(u, O[u]);
                else if ("undefined" !== c) {
                    if (M && u in M ? (s = "function" == typeof M[u] ? M[u].call(i, n, t, r) : M[u], C(s) && ~s.indexOf("random(") && (s = ae(s)), Kt(s + "") || (s += y.units[u] || Kt(mn(t, u)) || ""), "=" === (s + "").charAt(1) && (s = mn(t, u))) : s = mn(t, u), l = parseFloat(s), (p = "string" === c && "=" === o.charAt(1) && o.substr(0, 2)) && (o = o.substr(2)), a = parseFloat(o), u in zi && ("autoAlpha" === u && (1 === l && "hidden" === mn(t, "visibility") && a && (l = 0), w.push("visibility", O.visibility), fn(this, O, "visibility", l ? "inherit" : "hidden", a ? "inherit" : "hidden", !a)), "scale" !== u && "transform" !== u && ~(u = zi[u]).indexOf(",") && (u = u.split(",")[0])), g = u in Mi)
                        if (this.styles.save(u), m || ((v = t._gsap).renderTransform && !e.parseTransform || On(t, e.parseTransform), _ = !1 !== e.smoothOrigin && v.smooth, (m = this._pt = new li(this._pt, O, $i, 0, 1, v.renderTransform, v, 0, -1)).dep = 1), "scale" === u) this._pt = new li(this._pt, v, "scaleY", v.scaleY, (p ? pt(v.scaleY, p + a) : a) - v.scaleY || 0, Ii), this._pt.u = 0, E.push("scaleY", u), u += "X";
                        else {
                            if ("transformOrigin" === u) {
                                w.push(Ki, O[Ki]), T = void 0, k = void 0, S = void 0, k = (T = (x = o).split(" "))[0], S = T[1] || "50%", "top" !== k && "bottom" !== k && "left" !== S && "right" !== S || (x = k, k = S, S = x), T[0] = yn[k] || k, T[1] = yn[S] || S, o = T.join(" "), v.svg ? En(t, o, 0, _, 0, this) : ((d = parseFloat(o.split(" ")[2]) || 0) !== v.zOrigin && fn(this, v, "zOrigin", v.zOrigin, d), fn(this, O, u, Cn(s), Cn(o)));
                                continue
                            }
                            if ("svgOrigin" === u) {
                                En(t, o, 1, _, 0, this);
                                continue
                            }
                            if (u in xn) {
                                zn(this, v, u, l, p ? pt(l, p + o) : o);
                                continue
                            }
                            if ("smoothOrigin" === u) {
                                fn(this, v, "smooth", v.smooth, o);
                                continue
                            }
                            if ("force3D" === u) {
                                v[u] = o;
                                continue
                            }
                            if ("transform" === u) {
                                Yn(this, o, t);
                                continue
                            }
                        }
                    else u in O || (u = sn(u) || u);
                    if (g || (a || 0 === a) && (l || 0 === l) && !Ri.test(o) && u in O) a || (a = 0), (f = (s + "").substr((l + "").length)) !== (d = Kt(o) || (u in y.units ? y.units[u] : f)) && (l = gn(t, u, s, d)), this._pt = new li(this._pt, g ? v : O, u, l, (p ? pt(l, p + a) : a) - l, g || "px" !== d && "zIndex" !== u || !1 === e.autoRound ? Ii : Fi), this._pt.u = d || 0, f !== d && "%" !== d && (this._pt.b = s, this._pt.r = ji);
                    else if (u in O) vn.call(this, t, u, s, p ? p + o : o);
                    else {
                        if (!(u in t)) {
                            G(u, o);
                            continue
                        }
                        this.add(t, u, s || t[u], p ? p + o : o, n, r)
                    }
                    g || w.push(u, O[u]), E.push(u)
                }
                b && ai(this)
            },
            render: function(t, e) {
                if (e.tween._time || !Oi())
                    for (var i = e._pt; i;) i.r(t, i.d), i = i._next;
                else e.styles.revert()
            },
            get: mn,
            aliases: zi,
            getSetter: function(t, e, i) {
                var n = zi[e];
                return n && n.indexOf(",") < 0 && (e = n), e in Mi && e !== Ki && (t._gsap.x || mn(t, "x")) ? i && Ei === i ? "scale" === e ? Vi : Ni : (Ei = i || {}) && ("scale" === e ? Ui : Gi) : t.style && !P(t.style[e]) ? Wi : ~e.indexOf("-") ? qi : Je(t, e)
            },
            core: {
                _removeProperty: un,
                _getMatrix: Sn
            }
        };
        bi.utils.checkPrefix = sn, bi.core.getStyleSaver = tn, Fn = ut("x,y,z,scale,scaleX,scaleY,xPercent,yPercent" + "," + (jn = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function(t) {
            Mi[t] = 1
        })), ut(jn, (function(t) {
            y.units[t] = "deg", xn[t] = 1
        })), zi[Fn[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + jn, ut("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function(t) {
            var e = t.split(":");
            zi[e[1]] = Fn[e[0]]
        })), ut("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function(t) {
            y.units[t] = "px"
        })), bi.registerPlugin(Xn);
        var Hn = bi.registerPlugin(Xn) || bi;

        function Wn(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }
        Hn.core.Tween;
        var qn, Nn, Vn, Un, Gn, $n, Kn, Qn, Zn, Jn, tr, er, ir = function() {
                return qn || "undefined" != typeof window && (qn = window.gsap) && qn.registerPlugin && qn
            },
            nr = 1,
            rr = [],
            sr = [],
            or = [],
            ar = Date.now,
            lr = function(t, e) {
                return e
            },
            cr = function(t, e) {
                return ~or.indexOf(t) && or[or.indexOf(t) + 1][e]
            },
            hr = function(t) {
                return !!~Jn.indexOf(t)
            },
            ur = function(t, e, i, n, r) {
                return t.addEventListener(e, i, {
                    passive: !n,
                    capture: !!r
                })
            },
            fr = function(t, e, i, n) {
                return t.removeEventListener(e, i, !!n)
            },
            dr = function() {
                return tr && tr.isPressed || sr.cache++
            },
            pr = function(t, e) {
                var i = function i(n) {
                    if (n || 0 === n) {
                        nr && (Vn.history.scrollRestoration = "manual");
                        var r = tr && tr.isPressed;
                        n = i.v = Math.round(n) || (tr && tr.iOS ? 1 : 0), t(n), i.cacheID = sr.cache, r && lr("ss", n)
                    } else(e || sr.cache !== i.cacheID || lr("ref")) && (i.cacheID = sr.cache, i.v = t());
                    return i.v + i.offset
                };
                return i.offset = 0, t && i
            },
            gr = {
                s: "scrollLeft",
                p: "left",
                p2: "Left",
                os: "right",
                os2: "Right",
                d: "width",
                d2: "Width",
                a: "x",
                sc: pr((function(t) {
                    return arguments.length ? Vn.scrollTo(t, mr.sc()) : Vn.pageXOffset || Un.scrollLeft || Gn.scrollLeft || $n.scrollLeft || 0
                }))
            },
            mr = {
                s: "scrollTop",
                p: "top",
                p2: "Top",
                os: "bottom",
                os2: "Bottom",
                d: "height",
                d2: "Height",
                a: "y",
                op: gr,
                sc: pr((function(t) {
                    return arguments.length ? Vn.scrollTo(gr.sc(), t) : Vn.pageYOffset || Un.scrollTop || Gn.scrollTop || $n.scrollTop || 0
                }))
            },
            vr = function(t) {
                return qn.utils.toArray(t)[0] || ("string" == typeof t && !1 !== qn.config().nullTargetWarn ? console.warn("Element not found:", t) : null)
            },
            yr = function(t, e) {
                var i = e.s,
                    n = e.sc,
                    r = sr.indexOf(t),
                    s = n === mr.sc ? 1 : 2;
                return !~r && (r = sr.push(t) - 1), sr[r + s] || (sr[r + s] = pr(cr(t, i), !0) || (hr(t) ? n : pr((function(e) {
                    return arguments.length ? t[i] = e : t[i]
                }))))
            },
            _r = function(t, e, i) {
                var n = t,
                    r = t,
                    s = ar(),
                    o = s,
                    a = e || 50,
                    l = Math.max(500, 3 * a),
                    c = function(t, e) {
                        var l = ar();
                        e || l - s > a ? (r = n, n = t, o = s, s = l) : i ? n += t : n = r + (t - r) / (l - o) * (s - o)
                    };
                return {
                    update: c,
                    reset: function() {
                        r = n = i ? 0 : n, o = s = 0
                    },
                    getVelocity: function(t) {
                        var e = o,
                            a = r,
                            h = ar();
                        return (t || 0 === t) && t !== n && c(t), s === o || h - o > l ? 0 : (n + (i ? a : -a)) / ((i ? h : s) - e) * 1e3
                    }
                }
            },
            br = function(t, e) {
                return e && !t._gsapAllow && t.preventDefault(), t.changedTouches ? t.changedTouches[0] : t
            },
            wr = function(t) {
                var e = Math.max.apply(Math, t),
                    i = Math.min.apply(Math, t);
                return Math.abs(e) >= Math.abs(i) ? e : i
            },
            xr = function() {
                var t, e, i, n;
                (Zn = qn.core.globals().ScrollTrigger) && Zn.core && (t = Zn.core, e = t.bridge || {}, i = t._scrollers, n = t._proxies, i.push.apply(i, sr), n.push.apply(n, or), sr = i, or = n, lr = function(t, i) {
                    return e[t](i)
                })
            },
            Tr = function(t) {
                return (qn = t || ir()) && "undefined" != typeof document && document.body && (Vn = window, Un = document, Gn = Un.documentElement, $n = Un.body, Jn = [Vn, Un, Gn, $n], qn.utils.clamp, Qn = "onpointerenter" in $n ? "pointer" : "mouse", Kn = kr.isTouch = Vn.matchMedia && Vn.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in Vn || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, er = kr.eventTypes = ("ontouchstart" in Gn ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in Gn ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout((function() {
                    return nr = 0
                }), 500), xr(), Nn = 1), Nn
            };
        gr.op = mr, sr.cache = 0;
        var kr = function() {
            function t(t) {
                this.init(t)
            }
            var e, i;
            return t.prototype.init = function(t) {
                Nn || Tr(qn) || console.warn("Please gsap.registerPlugin(Observer)"), Zn || xr();
                var e = t.tolerance,
                    i = t.dragMinimum,
                    n = t.type,
                    r = t.target,
                    s = t.lineHeight,
                    o = t.debounce,
                    a = t.preventDefault,
                    l = t.onStop,
                    c = t.onStopDelay,
                    h = t.ignore,
                    u = t.wheelSpeed,
                    f = t.event,
                    d = t.onDragStart,
                    p = t.onDragEnd,
                    g = t.onDrag,
                    m = t.onPress,
                    v = t.onRelease,
                    y = t.onRight,
                    _ = t.onLeft,
                    b = t.onUp,
                    w = t.onDown,
                    x = t.onChangeX,
                    T = t.onChangeY,
                    k = t.onChange,
                    S = t.onToggleX,
                    E = t.onToggleY,
                    O = t.onHover,
                    C = t.onHoverEnd,
                    M = t.onMove,
                    A = t.ignoreCheck,
                    P = t.isNormalizer,
                    D = t.onGestureStart,
                    L = t.onGestureEnd,
                    B = t.onWheel,
                    R = t.onEnable,
                    z = t.onDisable,
                    I = t.onClick,
                    Y = t.scrollSpeed,
                    j = t.capture,
                    F = t.allowClicks,
                    X = t.lockAxis,
                    H = t.onLockAxis;
                this.target = r = vr(r) || Gn, this.vars = t, h && (h = qn.utils.toArray(h)), e = e || 1e-9, i = i || 0, u = u || 1, Y = Y || 1, n = n || "wheel,touch,pointer", o = !1 !== o, s || (s = parseFloat(Vn.getComputedStyle($n).lineHeight) || 22);
                var W, q, N, V, U, G, $, K = this,
                    Q = 0,
                    Z = 0,
                    J = yr(r, gr),
                    tt = yr(r, mr),
                    et = J(),
                    it = tt(),
                    nt = ~n.indexOf("touch") && !~n.indexOf("pointer") && "pointerdown" === er[0],
                    rt = hr(r),
                    st = r.ownerDocument || Un,
                    ot = [0, 0, 0],
                    at = [0, 0, 0],
                    lt = 0,
                    ct = function() {
                        return lt = ar()
                    },
                    ht = function(t, e) {
                        return (K.event = t) && h && ~h.indexOf(t.target) || e && nt && "touch" !== t.pointerType || A && A(t, e)
                    },
                    ut = function() {
                        var t = K.deltaX = wr(ot),
                            i = K.deltaY = wr(at),
                            n = Math.abs(t) >= e,
                            r = Math.abs(i) >= e;
                        k && (n || r) && k(K, t, i, ot, at), n && (y && K.deltaX > 0 && y(K), _ && K.deltaX < 0 && _(K), x && x(K), S && K.deltaX < 0 != Q < 0 && S(K), Q = K.deltaX, ot[0] = ot[1] = ot[2] = 0), r && (w && K.deltaY > 0 && w(K), b && K.deltaY < 0 && b(K), T && T(K), E && K.deltaY < 0 != Z < 0 && E(K), Z = K.deltaY, at[0] = at[1] = at[2] = 0), (V || N) && (M && M(K), N && (g(K), N = !1), V = !1), G && !(G = !1) && H && H(K), U && (B(K), U = !1), W = 0
                    },
                    ft = function(t, e, i) {
                        ot[i] += t, at[i] += e, K._vx.update(t), K._vy.update(e), o ? W || (W = requestAnimationFrame(ut)) : ut()
                    },
                    dt = function(t, e) {
                        X && !$ && (K.axis = $ = Math.abs(t) > Math.abs(e) ? "x" : "y", G = !0), "y" !== $ && (ot[2] += t, K._vx.update(t, !0)), "x" !== $ && (at[2] += e, K._vy.update(e, !0)), o ? W || (W = requestAnimationFrame(ut)) : ut()
                    },
                    pt = function(t) {
                        if (!ht(t, 1)) {
                            var e = (t = br(t, a)).clientX,
                                n = t.clientY,
                                r = e - K.x,
                                s = n - K.y,
                                o = K.isDragging;
                            K.x = e, K.y = n, (o || Math.abs(K.startX - e) >= i || Math.abs(K.startY - n) >= i) && (g && (N = !0), o || (K.isDragging = !0), dt(r, s), o || d && d(K))
                        }
                    },
                    gt = K.onPress = function(t) {
                        ht(t, 1) || (K.axis = $ = null, q.pause(), K.isPressed = !0, t = br(t), Q = Z = 0, K.startX = K.x = t.clientX, K.startY = K.y = t.clientY, K._vx.reset(), K._vy.reset(), ur(P ? r : st, er[1], pt, a, !0), K.deltaX = K.deltaY = 0, m && m(K))
                    },
                    mt = function(t) {
                        if (!ht(t, 1)) {
                            fr(P ? r : st, er[1], pt, !0);
                            var e = K.isDragging && (Math.abs(K.x - K.startX) > 3 || Math.abs(K.y - K.startY) > 3),
                                i = br(t);
                            e || (K._vx.reset(), K._vy.reset(), a && F && qn.delayedCall(.08, (function() {
                                if (ar() - lt > 300 && !t.defaultPrevented)
                                    if (t.target.click) t.target.click();
                                    else if (st.createEvent) {
                                    var e = st.createEvent("MouseEvents");
                                    e.initMouseEvent("click", !0, !0, Vn, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(e)
                                }
                            }))), K.isDragging = K.isGesturing = K.isPressed = !1, l && !P && q.restart(!0), p && e && p(K), v && v(K, e)
                        }
                    },
                    vt = function(t) {
                        return t.touches && t.touches.length > 1 && (K.isGesturing = !0) && D(t, K.isDragging)
                    },
                    yt = function() {
                        return (K.isGesturing = !1) || L(K)
                    },
                    _t = function(t) {
                        if (!ht(t)) {
                            var e = J(),
                                i = tt();
                            ft((e - et) * Y, (i - it) * Y, 1), et = e, it = i, l && q.restart(!0)
                        }
                    },
                    bt = function(t) {
                        if (!ht(t)) {
                            t = br(t, a), B && (U = !0);
                            var e = (1 === t.deltaMode ? s : 2 === t.deltaMode ? Vn.innerHeight : 1) * u;
                            ft(t.deltaX * e, t.deltaY * e, 0), l && !P && q.restart(!0)
                        }
                    },
                    wt = function(t) {
                        if (!ht(t)) {
                            var e = t.clientX,
                                i = t.clientY,
                                n = e - K.x,
                                r = i - K.y;
                            K.x = e, K.y = i, V = !0, (n || r) && dt(n, r)
                        }
                    },
                    xt = function(t) {
                        K.event = t, O(K)
                    },
                    Tt = function(t) {
                        K.event = t, C(K)
                    },
                    kt = function(t) {
                        return ht(t) || br(t, a) && I(K)
                    };
                q = K._dc = qn.delayedCall(c || .25, (function() {
                    K._vx.reset(), K._vy.reset(), q.pause(), l && l(K)
                })).pause(), K.deltaX = K.deltaY = 0, K._vx = _r(0, 50, !0), K._vy = _r(0, 50, !0), K.scrollX = J, K.scrollY = tt, K.isDragging = K.isGesturing = K.isPressed = !1, K.enable = function(t) {
                    return K.isEnabled || (ur(rt ? st : r, "scroll", dr), n.indexOf("scroll") >= 0 && ur(rt ? st : r, "scroll", _t, a, j), n.indexOf("wheel") >= 0 && ur(r, "wheel", bt, a, j), (n.indexOf("touch") >= 0 && Kn || n.indexOf("pointer") >= 0) && (ur(r, er[0], gt, a, j), ur(st, er[2], mt), ur(st, er[3], mt), F && ur(r, "click", ct, !1, !0), I && ur(r, "click", kt), D && ur(st, "gesturestart", vt), L && ur(st, "gestureend", yt), O && ur(r, Qn + "enter", xt), C && ur(r, Qn + "leave", Tt), M && ur(r, Qn + "move", wt)), K.isEnabled = !0, t && t.type && gt(t), R && R(K)), K
                }, K.disable = function() {
                    K.isEnabled && (rr.filter((function(t) {
                        return t !== K && hr(t.target)
                    })).length || fr(rt ? st : r, "scroll", dr), K.isPressed && (K._vx.reset(), K._vy.reset(), fr(P ? r : st, er[1], pt, !0)), fr(rt ? st : r, "scroll", _t, j), fr(r, "wheel", bt, j), fr(r, er[0], gt, j), fr(st, er[2], mt), fr(st, er[3], mt), fr(r, "click", ct, !0), fr(r, "click", kt), fr(st, "gesturestart", vt), fr(st, "gestureend", yt), fr(r, Qn + "enter", xt), fr(r, Qn + "leave", Tt), fr(r, Qn + "move", wt), K.isEnabled = K.isPressed = K.isDragging = !1, z && z(K))
                }, K.kill = function() {
                    K.disable();
                    var t = rr.indexOf(K);
                    t >= 0 && rr.splice(t, 1), tr === K && (tr = 0)
                }, rr.push(K), P && hr(r) && (tr = K), K.enable(f)
            }, e = t, (i = [{
                key: "velocityX",
                get: function() {
                    return this._vx.getVelocity()
                }
            }, {
                key: "velocityY",
                get: function() {
                    return this._vy.getVelocity()
                }
            }]) && Wn(e.prototype, i), t
        }();
        kr.version = "3.11.1", kr.create = function(t) {
            return new kr(t)
        }, kr.register = Tr, kr.getAll = function() {
            return rr.slice()
        }, kr.getById = function(t) {
            return rr.filter((function(e) {
                return e.vars.id === t
            }))[0]
        }, ir() && qn.registerPlugin(kr);
        var Sr, Er, Or, Cr, Mr, Ar, Pr, Dr, Lr, Br, Rr, zr, Ir, Yr, jr, Fr, Xr, Hr, Wr, qr, Nr, Vr, Ur, Gr, $r, Kr, Qr, Zr, Jr, ts, es, is, ns = 1,
            rs = Date.now,
            ss = rs(),
            os = 0,
            as = 0,
            ls = function() {
                return Yr = 1
            },
            cs = function() {
                return Yr = 0
            },
            hs = function(t) {
                return t
            },
            us = function(t) {
                return Math.round(1e5 * t) / 1e5 || 0
            },
            fs = function() {
                return "undefined" != typeof window
            },
            ds = function() {
                return Sr || fs() && (Sr = window.gsap) && Sr.registerPlugin && Sr
            },
            ps = function(t) {
                return !!~Pr.indexOf(t)
            },
            gs = function(t) {
                return cr(t, "getBoundingClientRect") || (ps(t) ? function() {
                    return wo.width = Or.innerWidth, wo.height = Or.innerHeight, wo
                } : function() {
                    return Rs(t)
                })
            },
            ms = function(t, e) {
                var i = e.s,
                    n = e.d2,
                    r = e.d,
                    s = e.a;
                return (i = "scroll" + n) && (s = cr(t, i)) ? s() - gs(t)()[r] : ps(t) ? (Mr[i] || Ar[i]) - (Or["inner" + n] || Mr["client" + n] || Ar["client" + n]) : t[i] - t["offset" + n]
            },
            vs = function(t, e) {
                for (var i = 0; i < Wr.length; i += 3)(!e || ~e.indexOf(Wr[i + 1])) && t(Wr[i], Wr[i + 1], Wr[i + 2])
            },
            ys = function(t) {
                return "string" == typeof t
            },
            _s = function(t) {
                return "function" == typeof t
            },
            bs = function(t) {
                return "number" == typeof t
            },
            ws = function(t) {
                return "object" == typeof t
            },
            xs = function(t, e, i) {
                return t && t.progress(e ? 0 : 1) && i && t.pause()
            },
            Ts = function(t, e) {
                if (t.enabled) {
                    var i = e(t);
                    i && i.totalTime && (t.callbackAnimation = i)
                }
            },
            ks = Math.abs,
            Ss = "right",
            Es = "bottom",
            Os = "width",
            Cs = "height",
            Ms = "padding",
            As = "margin",
            Ps = "Width",
            Ds = "px",
            Ls = function(t) {
                return Or.getComputedStyle(t)
            },
            Bs = function(t, e) {
                for (var i in e) i in t || (t[i] = e[i]);
                return t
            },
            Rs = function(t, e) {
                var i = e && "matrix(1, 0, 0, 1, 0, 0)" !== Ls(t)[jr] && Sr.to(t, {
                        x: 0,
                        y: 0,
                        xPercent: 0,
                        yPercent: 0,
                        rotation: 0,
                        rotationX: 0,
                        rotationY: 0,
                        scale: 1,
                        skewX: 0,
                        skewY: 0
                    }).progress(1),
                    n = t.getBoundingClientRect();
                return i && i.progress(0).kill(), n
            },
            zs = function(t, e) {
                var i = e.d2;
                return t["offset" + i] || t["client" + i] || 0
            },
            Is = function(t) {
                var e, i = [],
                    n = t.labels,
                    r = t.duration();
                for (e in n) i.push(n[e] / r);
                return i
            },
            Ys = function(t) {
                var e = Sr.utils.snap(t),
                    i = Array.isArray(t) && t.slice(0).sort((function(t, e) {
                        return t - e
                    }));
                return i ? function(t, n, r) {
                    var s;
                    if (void 0 === r && (r = .001), !n) return e(t);
                    if (n > 0) {
                        for (t -= r, s = 0; s < i.length; s++)
                            if (i[s] >= t) return i[s];
                        return i[s - 1]
                    }
                    for (s = i.length, t += r; s--;)
                        if (i[s] <= t) return i[s];
                    return i[0]
                } : function(i, n, r) {
                    void 0 === r && (r = .001);
                    var s = e(i);
                    return !n || Math.abs(s - i) < r || s - i < 0 == n < 0 ? s : e(n < 0 ? i - t : i + t)
                }
            },
            js = function(t, e, i, n) {
                return i.split(",").forEach((function(i) {
                    return t(e, i, n)
                }))
            },
            Fs = function(t, e, i, n, r) {
                return t.addEventListener(e, i, {
                    passive: !n,
                    capture: !!r
                })
            },
            Xs = function(t, e, i, n) {
                return t.removeEventListener(e, i, !!n)
            },
            Hs = function(t, e, i) {
                return i && i.wheelHandler && t(e, "wheel", i)
            },
            Ws = {
                startColor: "green",
                endColor: "red",
                indent: 0,
                fontSize: "16px",
                fontWeight: "normal"
            },
            qs = {
                toggleActions: "play",
                anticipatePin: 0
            },
            Ns = {
                top: 0,
                left: 0,
                center: .5,
                bottom: 1,
                right: 1
            },
            Vs = function(t, e) {
                if (ys(t)) {
                    var i = t.indexOf("="),
                        n = ~i ? +(t.charAt(i - 1) + 1) * parseFloat(t.substr(i + 1)) : 0;
                    ~i && (t.indexOf("%") > i && (n *= e / 100), t = t.substr(0, i - 1)), t = n + (t in Ns ? Ns[t] * e : ~t.indexOf("%") ? parseFloat(t) * e / 100 : parseFloat(t) || 0)
                }
                return t
            },
            Us = function(t, e, i, n, r, s, o, a) {
                var l = r.startColor,
                    c = r.endColor,
                    h = r.fontSize,
                    u = r.indent,
                    f = r.fontWeight,
                    d = Cr.createElement("div"),
                    p = ps(i) || "fixed" === cr(i, "pinType"),
                    g = -1 !== t.indexOf("scroller"),
                    m = p ? Ar : i,
                    v = -1 !== t.indexOf("start"),
                    y = v ? l : c,
                    _ = "border-color:" + y + ";font-size:" + h + ";color:" + y + ";font-weight:" + f + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
                return _ += "position:" + ((g || a) && p ? "fixed;" : "absolute;"), (g || a || !p) && (_ += (n === mr ? Ss : Es) + ":" + (s + parseFloat(u)) + "px;"), o && (_ += "box-sizing:border-box;text-align:left;width:" + o.offsetWidth + "px;"), d._isStart = v, d.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")), d.style.cssText = _, d.innerText = e || 0 === e ? t + "-" + e : t, m.children[0] ? m.insertBefore(d, m.children[0]) : m.appendChild(d), d._offset = d["offset" + n.op.d2], Gs(d, 0, n, v), d
            },
            Gs = function(t, e, i, n) {
                var r = {
                        display: "block"
                    },
                    s = i[n ? "os2" : "p2"],
                    o = i[n ? "p2" : "os2"];
                t._isFlipped = n, r[i.a + "Percent"] = n ? -100 : 0, r[i.a] = n ? "1px" : 0, r["border" + s + Ps] = 1, r["border" + o + Ps] = 0, r[i.p] = e + "px", Sr.set(t, r)
            },
            $s = [],
            Ks = {},
            Qs = function() {
                return rs() - os > 34 && po()
            },
            Zs = function() {
                (!Ur || !Ur.isPressed || Ur.startX > Ar.clientWidth) && (sr.cache++, ts || (ts = requestAnimationFrame(po)), os || ro("scrollStart"), os = rs())
            },
            Js = function() {
                Kr = Or.innerWidth, $r = Or.innerHeight
            },
            to = function() {
                sr.cache++, !Ir && !Vr && !Cr.fullscreenElement && !Cr.webkitFullscreenElement && (!Gr || Kr !== Or.innerWidth || Math.abs(Or.innerHeight - $r) > .25 * Or.innerHeight) && Dr.restart(!0)
            },
            eo = {},
            io = [],
            no = function t() {
                return Xs(Eo, "scrollEnd", t) || ho(!0)
            },
            ro = function(t) {
                return eo[t] && eo[t].map((function(t) {
                    return t()
                })) || io
            },
            so = [],
            oo = function(t) {
                for (var e = 0; e < so.length; e += 5)(!t || so[e + 4] && so[e + 4].query === t) && (so[e].style.cssText = so[e + 1], so[e].getBBox && so[e].setAttribute("transform", so[e + 2] || ""), so[e + 3].uncache = 1)
            },
            ao = function(t, e) {
                var i;
                for (Fr = 0; Fr < $s.length; Fr++) !(i = $s[Fr]) || e && i._ctx !== e || (t ? i.kill(1) : i.revert(!0, !0));
                e && oo(e), e || ro("revert")
            },
            lo = function() {
                return sr.cache++ && sr.forEach((function(t) {
                    return "function" == typeof t && (t.rec = 0)
                }))
            },
            co = 0,
            ho = function(t, e) {
                if (!os || t) {
                    es = !0;
                    var i = ro("refreshInit");
                    qr && Eo.sort(), e || ao(), $s.slice(0).forEach((function(t) {
                        return t.refresh()
                    })), $s.forEach((function(t) {
                        return "max" === t.vars.end && t.setPositions(t.start, Math.max(t.start + 1, ms(t.scroller, t._dir)))
                    })), i.forEach((function(t) {
                        return t && t.render && t.render(-1)
                    })), sr.forEach((function(t) {
                        return "function" == typeof t && t(t.rec)
                    })), lo(), Dr.pause(), co++, es = !1, ro("refresh")
                } else Fs(Eo, "scrollEnd", no)
            },
            uo = 0,
            fo = 1,
            po = function() {
                if (!es) {
                    Eo.isUpdating = !0, is && is.update(0);
                    var t = $s.length,
                        e = rs(),
                        i = e - ss >= 50,
                        n = t && $s[0].scroll();
                    if (fo = uo > n ? -1 : 1, uo = n, i && (os && !Yr && e - os > 200 && (os = 0, ro("scrollEnd")), Rr = ss, ss = e), fo < 0) {
                        for (Fr = t; Fr-- > 0;) $s[Fr] && $s[Fr].update(0, i);
                        fo = 1
                    } else
                        for (Fr = 0; Fr < t; Fr++) $s[Fr] && $s[Fr].update(0, i);
                    Eo.isUpdating = !1
                }
                ts = 0
            },
            go = ["left", "top", Es, Ss, "marginBottom", "marginRight", "marginTop", "marginLeft", "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
            mo = go.concat([Os, Cs, "boxSizing", "maxWidth", "maxHeight", "position", As, Ms, "paddingTop", "paddingRight", "paddingBottom", "paddingLeft"]),
            vo = function(t, e, i, n) {
                if (!t._gsap.swappedIn) {
                    for (var r, s = go.length, o = e.style, a = t.style; s--;) o[r = go[s]] = i[r];
                    o.position = "absolute" === i.position ? "absolute" : "relative", "inline" === i.display && (o.display = "inline-block"), a.bottom = a.right = "auto", o.flexBasis = i.flexBasis || "auto", o.overflow = "visible", o.boxSizing = "border-box", o.width = zs(t, gr) + Ds, o.height = zs(t, mr) + Ds, o.padding = a.margin = a.top = a.left = "0", _o(n), a.width = a.maxWidth = i.width, a.height = a.maxHeight = i.height, a.padding = i.padding, t.parentNode !== e && (t.parentNode.insertBefore(e, t), e.appendChild(t)), t._gsap.swappedIn = !0
                }
            },
            yo = /([A-Z])/g,
            _o = function(t) {
                if (t) {
                    var e, i, n = t.t.style,
                        r = t.length,
                        s = 0;
                    for ((t.t._gsap || Sr.core.getCache(t.t)).uncache = 1; s < r; s += 2) i = t[s + 1], e = t[s], i ? n[e] = i : n[e] && n.removeProperty(e.replace(yo, "-$1").toLowerCase())
                }
            },
            bo = function(t) {
                for (var e = mo.length, i = t.style, n = [], r = 0; r < e; r++) n.push(mo[r], i[mo[r]]);
                return n.t = t, n
            },
            wo = {
                left: 0,
                top: 0
            },
            xo = function(t, e, i, n, r, s, o, a, l, c, h, u, f) {
                _s(t) && (t = t(a)), ys(t) && "max" === t.substr(0, 3) && (t = u + ("=" === t.charAt(4) ? Vs("0" + t.substr(3), i) : 0));
                var d, p, g, m = f ? f.time() : 0;
                if (f && f.seek(0), bs(t)) o && Gs(o, i, n, !0);
                else {
                    _s(e) && (e = e(a));
                    var v, y, _, b, w = (t || "0").split(" ");
                    g = vr(e) || Ar, (v = Rs(g) || {}) && (v.left || v.top) || "none" !== Ls(g).display || (b = g.style.display, g.style.display = "block", v = Rs(g), b ? g.style.display = b : g.style.removeProperty("display")), y = Vs(w[0], v[n.d]), _ = Vs(w[1] || "0", i), t = v[n.p] - l[n.p] - c + y + r - _, o && Gs(o, _, n, i - _ < 20 || o._isStart && _ > 20), i -= i - _
                }
                if (s) {
                    var x = t + i,
                        T = s._isStart;
                    d = "scroll" + n.d2, Gs(s, x, n, T && x > 20 || !T && (h ? Math.max(Ar[d], Mr[d]) : s.parentNode[d]) <= x + 1), h && (l = Rs(o), h && (s.style[n.op.p] = l[n.op.p] - n.op.m - s._offset + Ds))
                }
                return f && g && (d = Rs(g), f.seek(u), p = Rs(g), f._caScrollDist = d[n.p] - p[n.p], t = t / f._caScrollDist * u), f && f.seek(m), f ? t : Math.round(t)
            },
            To = /(webkit|moz|length|cssText|inset)/i,
            ko = function(t, e, i, n) {
                if (t.parentNode !== e) {
                    var r, s, o = t.style;
                    if (e === Ar) {
                        for (r in t._stOrig = o.cssText, s = Ls(t)) + r || To.test(r) || !s[r] || "string" != typeof o[r] || "0" === r || (o[r] = s[r]);
                        o.top = i, o.left = n
                    } else o.cssText = t._stOrig;
                    Sr.core.getCache(t).uncache = 1, e.appendChild(t)
                }
            },
            So = function(t, e) {
                var i, n, r = yr(t, e),
                    s = "_scroll" + e.p2,
                    o = function e(o, a, l, c, h) {
                        var u = e.tween,
                            f = a.onComplete,
                            d = {};
                        return l = l || r(), h = c && h || 0, c = c || o - l, u && u.kill(), i = Math.round(l), a[s] = o, a.modifiers = d, d[s] = function(t) {
                            return (t = Math.round(r())) !== i && t !== n && Math.abs(t - i) > 3 && Math.abs(t - n) > 3 ? (u.kill(), e.tween = 0) : t = l + c * u.ratio + h * u.ratio * u.ratio, n = i, i = Math.round(t)
                        }, a.onComplete = function() {
                            e.tween = 0, f && f.call(u)
                        }, u = e.tween = Sr.to(t, a)
                    };
                return t[s] = r, r.wheelHandler = function() {
                    return o.tween && o.tween.kill() && (o.tween = 0)
                }, Fs(t, "wheel", r.wheelHandler), o
            },
            Eo = function() {
                function t(e, i) {
                    Er || t.register(Sr) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(e, i)
                }
                return t.prototype.init = function(e, i) {
                    if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), as) {
                        var n, r, s, o, a, l, c, h, u, f, d, p, g, m, v, y, _, b, w, x, T, k, S, E, O, C, M, A, P, D, L, B, R, z, I, Y, j, F, X, H, W, q = e = Bs(ys(e) || bs(e) || e.nodeType ? {
                                trigger: e
                            } : e, qs),
                            N = q.onUpdate,
                            V = q.toggleClass,
                            U = q.id,
                            G = q.onToggle,
                            $ = q.onRefresh,
                            K = q.scrub,
                            Q = q.trigger,
                            Z = q.pin,
                            J = q.pinSpacing,
                            tt = q.invalidateOnRefresh,
                            et = q.anticipatePin,
                            it = q.onScrubComplete,
                            nt = q.onSnapComplete,
                            rt = q.once,
                            st = q.snap,
                            ot = q.pinReparent,
                            at = q.pinSpacer,
                            lt = q.containerAnimation,
                            ct = q.fastScrollEnd,
                            ht = q.preventOverlaps,
                            ut = e.horizontal || e.containerAnimation && !1 !== e.horizontal ? gr : mr,
                            ft = !K && 0 !== K,
                            dt = vr(e.scroller || Or),
                            pt = Sr.core.getCache(dt),
                            gt = ps(dt),
                            mt = "fixed" === ("pinType" in e ? e.pinType : cr(dt, "pinType") || gt && "fixed"),
                            vt = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
                            yt = ft && e.toggleActions.split(" "),
                            _t = "markers" in e ? e.markers : qs.markers,
                            bt = gt ? 0 : parseFloat(Ls(dt)["border" + ut.p2 + Ps]) || 0,
                            wt = this,
                            xt = e.onRefreshInit && function() {
                                return e.onRefreshInit(wt)
                            },
                            Tt = function(t, e, i) {
                                var n = i.d,
                                    r = i.d2,
                                    s = i.a;
                                return (s = cr(t, "getBoundingClientRect")) ? function() {
                                    return s()[n]
                                } : function() {
                                    return (e ? Or["inner" + r] : t["client" + r]) || 0
                                }
                            }(dt, gt, ut),
                            kt = function(t, e) {
                                return !e || ~or.indexOf(t) ? gs(t) : function() {
                                    return wo
                                }
                            }(dt, gt),
                            St = 0,
                            Et = 0,
                            Ot = yr(dt, ut);
                        if (Zr(wt), wt._dir = ut, et *= 45, wt.scroller = dt, wt.scroll = lt ? lt.time.bind(lt) : Ot, o = Ot(), wt.vars = e, i = i || e.animation, "refreshPriority" in e && (qr = 1, -9999 === e.refreshPriority && (is = wt)), pt.tweenScroll = pt.tweenScroll || {
                                top: So(dt, mr),
                                left: So(dt, gr)
                            }, wt.tweenTo = n = pt.tweenScroll[ut.p], wt.scrubDuration = function(t) {
                                (L = bs(t) && t) ? D ? D.duration(t) : D = Sr.to(i, {
                                    ease: "expo",
                                    totalProgress: "+=0.001",
                                    duration: L,
                                    paused: !0,
                                    onComplete: function() {
                                        return it && it(wt)
                                    }
                                }): (D && D.progress(1).kill(), D = 0)
                            }, i && (i.vars.lazy = !1, i._initted || !1 !== i.vars.immediateRender && !1 !== e.immediateRender && i.render(0, !0, !0), wt.animation = i.pause(), i.scrollTrigger = wt, wt.scrubDuration(K), A = 0, U || (U = i.vars.id)), $s.push(wt), st && (ws(st) && !st.push || (st = {
                                snapTo: st
                            }), "scrollBehavior" in Ar.style && Sr.set(gt ? [Ar, Mr] : dt, {
                                scrollBehavior: "auto"
                            }), s = _s(st.snapTo) ? st.snapTo : "labels" === st.snapTo ? function(t) {
                                return function(e) {
                                    return Sr.utils.snap(Is(t), e)
                                }
                            }(i) : "labelsDirectional" === st.snapTo ? (X = i, function(t, e) {
                                return Ys(Is(X))(t, e.direction)
                            }) : !1 !== st.directional ? function(t, e) {
                                return Ys(st.snapTo)(t, rs() - Et < 500 ? 0 : e.direction)
                            } : Sr.utils.snap(st.snapTo), B = st.duration || {
                                min: .1,
                                max: 2
                            }, B = ws(B) ? Br(B.min, B.max) : Br(B, B), R = Sr.delayedCall(st.delay || L / 2 || .1, (function() {
                                var t = Ot(),
                                    e = rs() - Et < 500,
                                    r = n.tween;
                                if (!(e || Math.abs(wt.getVelocity()) < 10) || r || Yr || St === t) wt.isActive && St !== t && R.restart(!0);
                                else {
                                    var o = (t - l) / g,
                                        a = i && !ft ? i.totalProgress() : o,
                                        h = e ? 0 : (a - P) / (rs() - Rr) * 1e3 || 0,
                                        u = Sr.utils.clamp(-o, 1 - o, ks(h / 2) * h / .185),
                                        f = o + (!1 === st.inertia ? 0 : u),
                                        d = Br(0, 1, s(f, wt)),
                                        p = Math.round(l + d * g),
                                        m = st,
                                        v = m.onStart,
                                        y = m.onInterrupt,
                                        _ = m.onComplete;
                                    if (t <= c && t >= l && p !== t) {
                                        if (r && !r._initted && r.data <= ks(p - t)) return;
                                        !1 === st.inertia && (u = d - o), n(p, {
                                            duration: B(ks(.185 * Math.max(ks(f - a), ks(d - a)) / h / .05 || 0)),
                                            ease: st.ease || "power3",
                                            data: ks(p - t),
                                            onInterrupt: function() {
                                                return R.restart(!0) && y && y(wt)
                                            },
                                            onComplete: function() {
                                                wt.update(), St = Ot(), A = P = i && !ft ? i.totalProgress() : wt.progress, nt && nt(wt), _ && _(wt)
                                            }
                                        }, t, u * g, p - t - u * g), v && v(wt, n.tween)
                                    }
                                }
                            })).pause()), U && (Ks[U] = wt), (F = (Q = wt.trigger = vr(Q || Z)) && Q._gsap && Q._gsap.stRevert) && (F = F(wt)), Z = !0 === Z ? Q : vr(Z), ys(V) && (V = {
                                targets: Q,
                                className: V
                            }), Z && (!1 === J || J === As || (J = !(!J && "flex" === Ls(Z.parentNode).display) && Ms), wt.pin = Z, !1 !== e.force3D && Sr.set(Z, {
                                force3D: !0
                            }), (r = Sr.core.getCache(Z)).spacer ? m = r.pinState : (at && ((at = vr(at)) && !at.nodeType && (at = at.current || at.nativeElement), r.spacerIsNative = !!at, at && (r.spacerState = bo(at))), r.spacer = _ = at || Cr.createElement("div"), _.classList.add("pin-spacer"), U && _.classList.add("pin-spacer-" + U), r.pinState = m = bo(Z)), wt.spacer = _ = r.spacer, M = Ls(Z), S = M[J + ut.os2], w = Sr.getProperty(Z), x = Sr.quickSetter(Z, ut.a, Ds), vo(Z, _, M), y = bo(Z)), _t) {
                            p = ws(_t) ? Bs(_t, Ws) : Ws, f = Us("scroller-start", U, dt, ut, p, 0), d = Us("scroller-end", U, dt, ut, p, 0, f), b = f["offset" + ut.op.d2];
                            var Ct = vr(cr(dt, "content") || dt);
                            h = this.markerStart = Us("start", U, Ct, ut, p, b, 0, lt), u = this.markerEnd = Us("end", U, Ct, ut, p, b, 0, lt), lt && (j = Sr.quickSetter([h, u], ut.a, Ds)), mt || or.length && !0 === cr(dt, "fixedMarkers") || (W = Ls(H = gt ? Ar : dt).position, H.style.position = "absolute" === W || "fixed" === W ? W : "relative", Sr.set([f, d], {
                                force3D: !0
                            }), O = Sr.quickSetter(f, ut.a, Ds), C = Sr.quickSetter(d, ut.a, Ds))
                        }
                        if (lt) {
                            var Mt = lt.vars.onUpdate,
                                At = lt.vars.onUpdateParams;
                            lt.eventCallback("onUpdate", (function() {
                                wt.update(0, 0, 1), Mt && Mt.apply(At || [])
                            }))
                        }
                        wt.previous = function() {
                            return $s[$s.indexOf(wt) - 1]
                        }, wt.next = function() {
                            return $s[$s.indexOf(wt) + 1]
                        }, wt.revert = function(t, e) {
                            if (!e) return wt.kill(!0);
                            var n = !1 !== t || !wt.enabled,
                                r = Ir;
                            n !== wt.isReverted && (n && (wt.scroll.rec || !Ir && !es || (wt.scroll.rec = Ot(), es && Ot(0)), I = Math.max(Ot(), wt.scroll.rec || 0), z = wt.progress, Y = i && i.progress()), h && [h, u, f, d].forEach((function(t) {
                                return t.style.display = n ? "none" : "block"
                            })), n && (Ir = 1), wt.update(n), Ir = r, Z && (n ? function(t, e, i) {
                                _o(i);
                                var n = t._gsap;
                                if (n.spacerIsNative) _o(n.spacerState);
                                else if (t._gsap.swappedIn) {
                                    var r = e.parentNode;
                                    r && (r.insertBefore(t, e), r.removeChild(e))
                                }
                                t._gsap.swappedIn = !1
                            }(Z, _, m) : (!ot || !wt.isActive) && vo(Z, _, Ls(Z), E)), wt.isReverted = n)
                        }, wt.refresh = function(r, s) {
                            if (!Ir && wt.enabled || s)
                                if (Z && r && os) Fs(t, "scrollEnd", no);
                                else {
                                    !es && xt && xt(wt), Ir = 1, Et = rs(), n.tween && (n.tween.kill(), n.tween = 0), D && D.pause(), tt && i && i.revert().invalidate(), wt.isReverted || wt.revert(!0, !0);
                                    for (var p, b, x, S, O, C, M, A, P, L, B = Tt(), j = kt(), F = lt ? lt.duration() : ms(dt, ut), X = 0, H = 0, W = e.end, q = e.endTrigger || Q, N = e.start || (0 !== e.start && Q ? Z ? "0 0" : "0 100%" : 0), V = wt.pinnedContainer = e.pinnedContainer && vr(e.pinnedContainer), U = Q && Math.max(0, $s.indexOf(wt)) || 0, G = U; G--;)(C = $s[G]).end || C.refresh(0, 1) || (Ir = 1), !(M = C.pin) || M !== Q && M !== Z || C.isReverted || (L || (L = []), L.unshift(C), C.revert(!0, !0)), C !== $s[G] && (U--, G--);
                                    for (_s(N) && (N = N(wt)), l = xo(N, Q, B, ut, Ot(), h, f, wt, j, bt, mt, F, lt) || (Z ? -.001 : 0), _s(W) && (W = W(wt)), ys(W) && !W.indexOf("+=") && (~W.indexOf(" ") ? W = (ys(N) ? N.split(" ")[0] : "") + W : (X = Vs(W.substr(2), B), W = ys(N) ? N : l + X, q = Q)), c = Math.max(l, xo(W || (q ? "100% 0" : F), q, B, ut, Ot() + X, u, d, wt, j, bt, mt, F, lt)) || -.001, g = c - l || (l -= .01) && .001, X = 0, G = U; G--;)(M = (C = $s[G]).pin) && C.start - C._pinPush < l && !lt && C.end > 0 && (p = C.end - C.start, M !== Q && M !== V || bs(N) || (X += p * (1 - C.progress)), M === Z && (H += p));
                                    if (l += X, c += X, wt._pinPush = H, h && X && ((p = {})[ut.a] = "+=" + X, V && (p[ut.p] = "-=" + Ot()), Sr.set([h, u], p)), Z) p = Ls(Z), S = ut === mr, x = Ot(), T = parseFloat(w(ut.a)) + H, !F && c > 1 && ((gt ? Ar : dt).style["overflow-" + ut.a] = "scroll"), vo(Z, _, p), y = bo(Z), b = Rs(Z, !0), A = mt && yr(dt, S ? gr : mr)(), J && ((E = [J + ut.os2, g + H + Ds]).t = _, (G = J === Ms ? zs(Z, ut) + g + H : 0) && E.push(ut.d, G + Ds), _o(E), mt && Ot(I)), mt && ((O = {
                                        top: b.top + (S ? x - l : A) + Ds,
                                        left: b.left + (S ? A : x - l) + Ds,
                                        boxSizing: "border-box",
                                        position: "fixed"
                                    }).width = O.maxWidth = Math.ceil(b.width) + Ds, O.height = O.maxHeight = Math.ceil(b.height) + Ds, O.margin = O.marginTop = O.marginRight = O.marginBottom = O.marginLeft = "0", O.padding = p.padding, O.paddingTop = p.paddingTop, O.paddingRight = p.paddingRight, O.paddingBottom = p.paddingBottom, O.paddingLeft = p.paddingLeft, v = function(t, e, i) {
                                        for (var n, r = [], s = t.length, o = i ? 8 : 0; o < s; o += 2) n = t[o], r.push(n, n in e ? e[n] : t[o + 1]);
                                        return r.t = t.t, r
                                    }(m, O, ot), es && Ot(0)), i ? (P = i._initted, Nr(1), i.render(i.duration(), !0, !0), k = w(ut.a) - T + g + H, g !== k && mt && v.splice(v.length - 2, 2), i.render(0, !0, !0), P || i.invalidate(), Nr(0)) : k = g;
                                    else if (Q && Ot() && !lt)
                                        for (b = Q.parentNode; b && b !== Ar;) b._pinOffset && (l -= b._pinOffset, c -= b._pinOffset), b = b.parentNode;
                                    L && L.forEach((function(t) {
                                        return t.revert(!1, !0)
                                    })), wt.start = l, wt.end = c, o = a = Ot(), lt || es || (o < I && Ot(I), wt.scroll.rec = 0), wt.revert(!1, !0), R && (St = -1, wt.isActive && Ot(l + g * z), R.restart(!0)), Ir = 0, i && ft && (i._initted || Y) && i.progress() !== Y && i.progress(Y, !0).render(i.time(), !0, !0), (z !== wt.progress || lt) && (i && !ft && i.totalProgress(z, !0), wt.progress = (o - l) / g === z ? 0 : z, wt.update(0, 0, 1)), Z && J && (_._pinOffset = Math.round(wt.progress * k)), $ && $(wt)
                                }
                        }, wt.getVelocity = function() {
                            return (Ot() - a) / (rs() - Rr) * 1e3 || 0
                        }, wt.endAnimation = function() {
                            xs(wt.callbackAnimation), i && (D ? D.progress(1) : i.paused() ? ft || xs(i, wt.direction < 0, 1) : xs(i, i.reversed()))
                        }, wt.labelToScroll = function(t) {
                            return i && i.labels && (l || wt.refresh() || l) + i.labels[t] / i.duration() * g || 0
                        }, wt.getTrailing = function(t) {
                            var e = $s.indexOf(wt),
                                i = wt.direction > 0 ? $s.slice(0, e).reverse() : $s.slice(e + 1);
                            return (ys(t) ? i.filter((function(e) {
                                return e.vars.preventOverlaps === t
                            })) : i).filter((function(t) {
                                return wt.direction > 0 ? t.end <= l : t.start >= c
                            }))
                        }, wt.update = function(t, e, r) {
                            if (!lt || r || t) {
                                var s, h, u, d, p, m, b, w = wt.scroll(),
                                    E = t ? 0 : (w - l) / g,
                                    M = E < 0 ? 0 : E > 1 ? 1 : E || 0,
                                    L = wt.progress;
                                if (e && (a = o, o = lt ? Ot() : w, st && (P = A, A = i && !ft ? i.totalProgress() : M)), et && !M && Z && !Ir && !ns && os && l < w + (w - a) / (rs() - Rr) * et && (M = 1e-4), M !== L && wt.enabled) {
                                    if (d = (p = (s = wt.isActive = !!M && M < 1) != (!!L && L < 1)) || !!M != !!L, wt.direction = M > L ? 1 : -1, wt.progress = M, d && !Ir && (h = M && !L ? 0 : 1 === M ? 1 : 1 === L ? 2 : 3, ft && (u = !p && "none" !== yt[h + 1] && yt[h + 1] || yt[h], b = i && ("complete" === u || "reset" === u || u in i))), ht && (p || b) && (b || K || !i) && (_s(ht) ? ht(wt) : wt.getTrailing(ht).forEach((function(t) {
                                            return t.endAnimation()
                                        }))), ft || (!D || Ir || ns ? i && i.totalProgress(M, !!Ir) : ((lt || is && is !== wt) && D.render(D._dp._time - D._start), D.resetTo ? D.resetTo("totalProgress", M, i._tTime / i._tDur) : (D.vars.totalProgress = M, D.invalidate().restart()))), Z)
                                        if (t && J && (_.style[J + ut.os2] = S), mt) {
                                            if (d) {
                                                if (m = !t && M > L && c + 1 > w && w + 1 >= ms(dt, ut), ot)
                                                    if (t || !s && !m) ko(Z, _);
                                                    else {
                                                        var B = Rs(Z, !0),
                                                            z = w - l;
                                                        ko(Z, Ar, B.top + (ut === mr ? z : 0) + Ds, B.left + (ut === mr ? 0 : z) + Ds)
                                                    } _o(s || m ? v : y), k !== g && M < 1 && s || x(T + (1 !== M || m ? 0 : k))
                                            }
                                        } else x(us(T + k * M));
                                    st && !n.tween && !Ir && !ns && R.restart(!0), V && (p || rt && M && (M < 1 || !Jr)) && Lr(V.targets).forEach((function(t) {
                                        return t.classList[s || rt ? "add" : "remove"](V.className)
                                    })), N && !ft && !t && N(wt), d && !Ir ? (ft && (b && ("complete" === u ? i.pause().totalProgress(1) : "reset" === u ? i.restart(!0).pause() : "restart" === u ? i.restart(!0) : i[u]()), N && N(wt)), !p && Jr || (G && p && Ts(wt, G), vt[h] && Ts(wt, vt[h]), rt && (1 === M ? wt.kill(!1, 1) : vt[h] = 0), p || vt[h = 1 === M ? 1 : 3] && Ts(wt, vt[h])), ct && !s && Math.abs(wt.getVelocity()) > (bs(ct) ? ct : 2500) && (xs(wt.callbackAnimation), D ? D.progress(1) : xs(i, "reverse" === u ? 1 : !M, 1))) : ft && N && !Ir && N(wt)
                                }
                                if (C) {
                                    var I = lt ? w / lt.duration() * (lt._caScrollDist || 0) : w;
                                    O(I + (f._isFlipped ? 1 : 0)), C(I)
                                }
                                j && j(-w / lt.duration() * (lt._caScrollDist || 0))
                            }
                        }, wt.enable = function(e, i) {
                            wt.enabled || (wt.enabled = !0, Fs(dt, "resize", to), Fs(gt ? Cr : dt, "scroll", Zs), xt && Fs(t, "refreshInit", xt), !1 !== e && (wt.progress = z = 0, o = a = St = Ot()), !1 !== i && wt.refresh())
                        }, wt.getTween = function(t) {
                            return t && n ? n.tween : D
                        }, wt.setPositions = function(t, e) {
                            Z && (T += t - l, k += e - t - g), wt.start = l = t, wt.end = c = e, g = e - t, wt.update()
                        }, wt.disable = function(e, i) {
                            if (wt.enabled && (!1 !== e && wt.revert(!0, !0), wt.enabled = wt.isActive = !1, i || D && D.pause(), I = 0, r && (r.uncache = 1), xt && Xs(t, "refreshInit", xt), R && (R.pause(), n.tween && n.tween.kill() && (n.tween = 0)), !gt)) {
                                for (var s = $s.length; s--;)
                                    if ($s[s].scroller === dt && $s[s] !== wt) return;
                                Xs(dt, "resize", to), Xs(dt, "scroll", Zs)
                            }
                        }, wt.kill = function(t, n) {
                            wt.disable(t, n), D && !n && D.kill(), U && delete Ks[U];
                            var s = $s.indexOf(wt);
                            s >= 0 && $s.splice(s, 1), s === Fr && fo > 0 && Fr--, s = 0, $s.forEach((function(t) {
                                return t.scroller === wt.scroller && (s = 1)
                            })), s || es || (wt.scroll.rec = 0), i && (i.scrollTrigger = null, t && i.render(-1), n || i.kill()), h && [h, u, f, d].forEach((function(t) {
                                return t.parentNode && t.parentNode.removeChild(t)
                            })), is === wt && (is = 0), Z && (r && (r.uncache = 1), s = 0, $s.forEach((function(t) {
                                return t.pin === Z && s++
                            })), s || (r.spacer = 0)), e.onKill && e.onKill(wt)
                        }, wt.enable(!1, !1), F && F(wt), i && i.add && !g ? Sr.delayedCall(.01, (function() {
                            return l || c || wt.refresh()
                        })) && (g = .01) && (l = c = 0) : wt.refresh()
                    } else this.update = this.refresh = this.kill = hs
                }, t.register = function(e) {
                    return Er || (Sr = e || ds(), fs() && window.document && t.enable(), Er = as), Er
                }, t.defaults = function(t) {
                    if (t)
                        for (var e in t) qs[e] = t[e];
                    return qs
                }, t.disable = function(t, e) {
                    as = 0, $s.forEach((function(i) {
                        return i[e ? "kill" : "disable"](t)
                    })), Xs(Or, "wheel", Zs), Xs(Cr, "scroll", Zs), clearInterval(zr), Xs(Cr, "touchcancel", hs), Xs(Ar, "touchstart", hs), js(Xs, Cr, "pointerdown,touchstart,mousedown", ls), js(Xs, Cr, "pointerup,touchend,mouseup", cs), Dr.kill(), vs(Xs);
                    for (var i = 0; i < sr.length; i += 3) Hs(Xs, sr[i], sr[i + 1]), Hs(Xs, sr[i], sr[i + 2])
                }, t.enable = function() {
                    if (Or = window, Cr = document, Mr = Cr.documentElement, Ar = Cr.body, Sr && (Lr = Sr.utils.toArray, Br = Sr.utils.clamp, Zr = Sr.core.context || hs, Nr = Sr.core.suppressOverwrites || hs, Sr.core.globals("ScrollTrigger", t), Ar)) {
                        as = 1, kr.register(Sr), t.isTouch = kr.isTouch, Qr = kr.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), Fs(Or, "wheel", Zs), Pr = [Or, Cr, Mr, Ar], Sr.matchMedia ? (t.matchMedia = function(t) {
                            var e, i = Sr.matchMedia();
                            for (e in t) i.add(e, t[e]);
                            return i
                        }, Sr.addEventListener("matchMediaInit", (function() {
                            return ao()
                        })), Sr.addEventListener("matchMediaRevert", (function() {
                            return oo()
                        })), Sr.addEventListener("matchMedia", (function() {
                            ho(0, 1), ro("matchMedia")
                        })), Sr.matchMedia("(orientation: portrait)", (function() {
                            return Js(), Js
                        }))) : console.warn("Requires GSAP 3.11.0 or later"), Fs(Cr, "scroll", Zs);
                        var e, i, n = Ar.style,
                            r = n.borderTopStyle,
                            s = Sr.core.Animation.prototype;
                        for (s.revert || Object.defineProperty(s, "revert", {
                                value: function() {
                                    return this.time(-.01, !0)
                                }
                            }), n.borderTopStyle = "solid", e = Rs(Ar), mr.m = Math.round(e.top + mr.sc()) || 0, gr.m = Math.round(e.left + gr.sc()) || 0, r ? n.borderTopStyle = r : n.removeProperty("border-top-style"), zr = setInterval(Qs, 250), Sr.delayedCall(.5, (function() {
                                return ns = 0
                            })), Fs(Cr, "touchcancel", hs), Fs(Ar, "touchstart", hs), js(Fs, Cr, "pointerdown,touchstart,mousedown", ls), js(Fs, Cr, "pointerup,touchend,mouseup", cs), jr = Sr.utils.checkPrefix("transform"), mo.push(jr), Er = rs(), Dr = Sr.delayedCall(.2, ho).pause(), Wr = [Cr, "visibilitychange", function() {
                                var t = Or.innerWidth,
                                    e = Or.innerHeight;
                                Cr.hidden ? (Xr = t, Hr = e) : Xr === t && Hr === e || to()
                            }, Cr, "DOMContentLoaded", ho, Or, "load", ho, Or, "resize", to], vs(Fs), $s.forEach((function(t) {
                                return t.enable(0, 1)
                            })), i = 0; i < sr.length; i += 3) Hs(Xs, sr[i], sr[i + 1]), Hs(Xs, sr[i], sr[i + 2])
                    }
                }, t.config = function(e) {
                    "limitCallbacks" in e && (Jr = !!e.limitCallbacks);
                    var i = e.syncInterval;
                    i && clearInterval(zr) || (zr = i) && setInterval(Qs, i), "ignoreMobileResize" in e && (Gr = 1 === t.isTouch && e.ignoreMobileResize), "autoRefreshEvents" in e && (vs(Xs) || vs(Fs, e.autoRefreshEvents || "none"), Vr = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
                }, t.scrollerProxy = function(t, e) {
                    var i = vr(t),
                        n = sr.indexOf(i),
                        r = ps(i);
                    ~n && sr.splice(n, r ? 6 : 2), e && (r ? or.unshift(Or, e, Ar, e, Mr, e) : or.unshift(i, e))
                }, t.clearMatchMedia = function(t) {
                    $s.forEach((function(e) {
                        return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0)
                    }))
                }, t.isInViewport = function(t, e, i) {
                    var n = (ys(t) ? vr(t) : t).getBoundingClientRect(),
                        r = n[i ? Os : Cs] * e || 0;
                    return i ? n.right - r > 0 && n.left + r < Or.innerWidth : n.bottom - r > 0 && n.top + r < Or.innerHeight
                }, t.positionInViewport = function(t, e, i) {
                    ys(t) && (t = vr(t));
                    var n = t.getBoundingClientRect(),
                        r = n[i ? Os : Cs],
                        s = null == e ? r / 2 : e in Ns ? Ns[e] * r : ~e.indexOf("%") ? parseFloat(e) * r / 100 : parseFloat(e) || 0;
                    return i ? (n.left + s) / Or.innerWidth : (n.top + s) / Or.innerHeight
                }, t.killAll = function(t) {
                    if ($s.forEach((function(t) {
                            return "ScrollSmoother" !== t.vars.id && t.kill()
                        })), !0 !== t) {
                        var e = eo.killAll || [];
                        eo = {}, e.forEach((function(t) {
                            return t()
                        }))
                    }
                }, t
            }();
        Eo.version = "3.11.1", Eo.saveStyles = function(t) {
            return t ? Lr(t).forEach((function(t) {
                if (t && t.style) {
                    var e = so.indexOf(t);
                    e >= 0 && so.splice(e, 5), so.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), Sr.core.getCache(t), Zr())
                }
            })) : so
        }, Eo.revert = function(t, e) {
            return ao(!t, e)
        }, Eo.create = function(t, e) {
            return new Eo(t, e)
        }, Eo.refresh = function(t) {
            return t ? to() : (Er || Eo.register()) && ho(!0)
        }, Eo.update = po, Eo.clearScrollMemory = lo, Eo.maxScroll = function(t, e) {
            return ms(t, e ? gr : mr)
        }, Eo.getScrollFunc = function(t, e) {
            return yr(vr(t), e ? gr : mr)
        }, Eo.getById = function(t) {
            return Ks[t]
        }, Eo.getAll = function() {
            return $s.filter((function(t) {
                return "ScrollSmoother" !== t.vars.id
            }))
        }, Eo.isScrolling = function() {
            return !!os
        }, Eo.snapDirectional = Ys, Eo.addEventListener = function(t, e) {
            var i = eo[t] || (eo[t] = []);
            ~i.indexOf(e) || i.push(e)
        }, Eo.removeEventListener = function(t, e) {
            var i = eo[t],
                n = i && i.indexOf(e);
            n >= 0 && i.splice(n, 1)
        }, Eo.batch = function(t, e) {
            var i, n = [],
                r = {},
                s = e.interval || .016,
                o = e.batchMax || 1e9,
                a = function(t, e) {
                    var i = [],
                        n = [],
                        r = Sr.delayedCall(s, (function() {
                            e(i, n), i = [], n = []
                        })).pause();
                    return function(t) {
                        i.length || r.restart(!0), i.push(t.trigger), n.push(t), o <= i.length && r.progress(1)
                    }
                };
            for (i in e) r[i] = "on" === i.substr(0, 2) && _s(e[i]) && "onRefreshInit" !== i ? a(0, e[i]) : e[i];
            return _s(o) && (o = o(), Fs(Eo, "refresh", (function() {
                return o = e.batchMax()
            }))), Lr(t).forEach((function(t) {
                var e = {};
                for (i in r) e[i] = r[i];
                e.trigger = t, n.push(Eo.create(e))
            })), n
        };
        var Oo, Co = function(t, e, i, n) {
                return e > n ? t(n) : e < 0 && t(0), i > n ? (n - e) / (i - e) : i < 0 ? e / (e - i) : 1
            },
            Mo = function t(e, i) {
                !0 === i ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === i ? "auto" : i ? "pan-" + i + (kr.isTouch ? " pinch-zoom" : "") : "none", e === Mr && t(Ar, i)
            },
            Ao = {
                auto: 1,
                scroll: 1
            },
            Po = function(t) {
                var e, i = t.event,
                    n = t.target,
                    r = t.axis,
                    s = (i.changedTouches ? i.changedTouches[0] : i).target,
                    o = s._gsap || Sr.core.getCache(s),
                    a = rs();
                if (!o._isScrollT || a - o._isScrollT > 2e3) {
                    for (; s && s.scrollHeight <= s.clientHeight;) s = s.parentNode;
                    o._isScroll = s && !ps(s) && s !== n && (Ao[(e = Ls(s)).overflowY] || Ao[e.overflowX]), o._isScrollT = a
                }(o._isScroll || "x" === r) && (i.stopPropagation(), i._gsapAllow = !0)
            },
            Do = function(t, e, i, n) {
                return kr.create({
                    target: t,
                    capture: !0,
                    debounce: !1,
                    lockAxis: !0,
                    type: e,
                    onWheel: n = n && Po,
                    onPress: n,
                    onDrag: n,
                    onScroll: n,
                    onEnable: function() {
                        return i && Fs(Cr, kr.eventTypes[0], Bo, !1, !0)
                    },
                    onDisable: function() {
                        return Xs(Cr, kr.eventTypes[0], Bo, !0)
                    }
                })
            },
            Lo = /(input|label|select|textarea)/i,
            Bo = function(t) {
                var e = Lo.test(t.target.tagName);
                (e || Oo) && (t._gsapAllow = !0, Oo = e)
            };

        function Ro(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function zo(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }

        function Io(t, e, i) {
            return e && zo(t.prototype, e), i && zo(t, i), t
        }

        function Yo(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }

        function jo(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, n)
            }
            return i
        }

        function Fo(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? jo(Object(i), !0).forEach((function(e) {
                    Yo(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : jo(Object(i)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }

        function Xo(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && Wo(t, e)
        }

        function Ho(t) {
            return Ho = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }, Ho(t)
        }

        function Wo(t, e) {
            return Wo = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t
            }, Wo(t, e)
        }

        function qo(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }

        function No(t, e) {
            return !e || "object" != typeof e && "function" != typeof e ? qo(t) : e
        }

        function Vo(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var i, n = Ho(t);
                if (e) {
                    var r = Ho(this).constructor;
                    i = Reflect.construct(n, arguments, r)
                } else i = n.apply(this, arguments);
                return No(this, i)
            }
        }

        function Uo(t, e, i) {
            return Uo = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, i) {
                var n = function(t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Ho(t)););
                    return t
                }(t, e);
                if (n) {
                    var r = Object.getOwnPropertyDescriptor(n, e);
                    return r.get ? r.get.call(i) : r.value
                }
            }, Uo(t, e, i || t)
        }

        function Go(t, e) {
            return function(t) {
                if (Array.isArray(t)) return t
            }(t) || function(t, e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                    var i = [],
                        n = !0,
                        r = !1,
                        s = void 0;
                    try {
                        for (var o, a = t[Symbol.iterator](); !(n = (o = a.next()).done) && (i.push(o.value), !e || i.length !== e); n = !0);
                    } catch (t) {
                        r = !0, s = t
                    } finally {
                        try {
                            n || null == a.return || a.return()
                        } finally {
                            if (r) throw s
                        }
                    }
                    return i
                }
            }(t, e) || Ko(t, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function $o(t) {
            return function(t) {
                if (Array.isArray(t)) return Qo(t)
            }(t) || function(t) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
            }(t) || Ko(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function Ko(t, e) {
            if (t) {
                if ("string" == typeof t) return Qo(t, e);
                var i = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? Qo(t, e) : void 0
            }
        }

        function Qo(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
            return n
        }
        Eo.sort = function(t) {
            return $s.sort(t || function(t, e) {
                return -1e6 * (t.vars.refreshPriority || 0) + t.start - (e.start + -1e6 * (e.vars.refreshPriority || 0))
            })
        }, Eo.observe = function(t) {
            return new kr(t)
        }, Eo.normalizeScroll = function(t) {
            if (void 0 === t) return Ur;
            if (!0 === t && Ur) return Ur.enable();
            if (!1 === t) return Ur && Ur.kill();
            var e = t instanceof kr ? t : function(t) {
                ws(t) || (t = {}), t.preventDefault = t.isNormalizer = t.allowClicks = !0, t.type || (t.type = "wheel,touch"), t.debounce = !!t.debounce, t.id = t.id || "normalizer";
                var e, i, n, r, s, o, a, l, c = t,
                    h = c.normalizeScrollX,
                    u = c.momentum,
                    f = c.allowNestedScroll,
                    d = vr(t.target) || Mr,
                    p = Sr.core.globals().ScrollSmoother,
                    g = p && p.get(),
                    m = Qr && (t.content && vr(t.content) || g && !1 !== t.content && !g.smooth() && g.content()),
                    v = yr(d, mr),
                    y = yr(d, gr),
                    _ = 1,
                    b = (kr.isTouch && Or.visualViewport ? Or.visualViewport.scale * Or.visualViewport.width : Or.outerWidth) / Or.innerWidth,
                    w = 0,
                    x = _s(u) ? function() {
                        return u(e)
                    } : function() {
                        return u || 2.8
                    },
                    T = Do(d, t.type, !0, f),
                    k = function() {
                        return r = !1
                    },
                    S = hs,
                    E = hs,
                    O = function() {
                        i = ms(d, mr), E = Br(Qr ? 1 : 0, i), h && (S = Br(0, ms(d, gr))), n = co
                    },
                    C = function() {
                        m._gsap.y = us(parseFloat(m._gsap.y) + v.offset) + "px", m.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(m._gsap.y) + ", 0, 1)", v.offset = v.cacheID = 0
                    },
                    M = function() {
                        O(), s.isActive() && s.vars.scrollY > i && (v() > i ? s.progress(1) && v(i) : s.resetTo("scrollY", i))
                    };
                return m && Sr.set(m, {
                    y: "+=0"
                }), t.ignoreCheck = function(t) {
                    return Qr && "touchmove" === t.type && function() {
                        if (r) {
                            requestAnimationFrame(k);
                            var t = us(e.deltaY / 2),
                                i = E(v.v - t);
                            if (m && i !== v.v + v.offset) {
                                v.offset = i - v.v;
                                var n = us((parseFloat(m && m._gsap.y) || 0) - v.offset);
                                m.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + n + ", 0, 1)", m._gsap.y = n + "px", v.cacheID = sr.cache, po()
                            }
                            return !0
                        }
                        v.offset && C(), r = !0
                    }() || _ > 1.05 && "touchstart" !== t.type || e.isGesturing || t.touches && t.touches.length > 1
                }, t.onPress = function() {
                    var t = _;
                    _ = us((Or.visualViewport && Or.visualViewport.scale || 1) / b), s.pause(), t !== _ && Mo(d, _ > 1.01 || !h && "x"), o = y(), a = v(), O(), n = co
                }, t.onRelease = t.onGestureStart = function(t, e) {
                    if (v.offset && C(), e) {
                        sr.cache++;
                        var n, r, o = x();
                        h && (r = (n = y()) + .05 * o * -t.velocityX / .227, o *= Co(y, n, r, ms(d, gr)), s.vars.scrollX = S(r)), r = (n = v()) + .05 * o * -t.velocityY / .227, o *= Co(v, n, r, ms(d, mr)), s.vars.scrollY = E(r), s.invalidate().duration(o).play(.01), (Qr && s.vars.scrollY >= i || n >= i - 1) && Sr.to({}, {
                            onUpdate: M,
                            duration: o
                        })
                    } else l.restart(!0)
                }, t.onWheel = function() {
                    s._ts && s.pause(), rs() - w > 1e3 && (n = 0, w = rs())
                }, t.onChange = function(t, e, i, r, s) {
                    if (co !== n && O(), e && h && y(S(r[2] === e ? o + (t.startX - t.x) : y() + e - r[1])), i) {
                        v.offset && C();
                        var l = s[2] === i,
                            c = l ? a + t.startY - t.y : v() + i - s[1],
                            u = E(c);
                        l && c !== u && (a += u - c), v(u)
                    }(i || e) && po()
                }, t.onEnable = function() {
                    Mo(d, !h && "x"), Fs(Or, "resize", M), T.enable()
                }, t.onDisable = function() {
                    Mo(d, !0), Xs(Or, "resize", M), T.kill()
                }, t.lockAxis = !1 !== t.lockAxis, (e = new kr(t)).iOS = Qr, Qr && !v() && v(1), Qr && Sr.ticker.add(hs), l = e._dc, s = Sr.to(e, {
                    ease: "power4",
                    paused: !0,
                    scrollX: h ? "+=0.1" : "+=0",
                    scrollY: "+=0.1",
                    onComplete: l.vars.onComplete
                }), e
            }(t);
            return Ur && Ur.target === e.target && Ur.kill(), ps(e.target) && (Ur = e), e
        }, Eo.core = {
            _getVelocityProp: _r,
            _inputObserver: Do,
            _scrollers: sr,
            _proxies: or,
            bridge: {
                ss: function() {
                    os || ro("scrollStart"), os = rs()
                },
                ref: function() {
                    return Ir
                }
            }
        }, ds() && Sr.registerPlugin(Eo);
        var Zo = {
                el: document,
                name: "scroll",
                offset: [0, 0],
                repeat: !1,
                smooth: !1,
                initPosition: {
                    x: 0,
                    y: 0
                },
                direction: "vertical",
                gestureDirection: "vertical",
                reloadOnContextChange: !1,
                lerp: .1,
                class: "is-inview",
                scrollbarContainer: !1,
                scrollbarClass: "c-scrollbar",
                scrollingClass: "has-scroll-scrolling",
                draggingClass: "has-scroll-dragging",
                smoothClass: "has-scroll-smooth",
                initClass: "has-scroll-init",
                getSpeed: !1,
                getDirection: !1,
                scrollFromAnywhere: !1,
                multiplier: 1,
                firefoxMultiplier: 50,
                touchMultiplier: 2,
                resetNativeScroll: !0,
                tablet: {
                    smooth: !1,
                    direction: "vertical",
                    gestureDirection: "vertical",
                    breakpoint: 1024
                },
                smartphone: {
                    smooth: !1,
                    direction: "vertical",
                    gestureDirection: "vertical"
                }
            },
            Jo = function() {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    Ro(this, t), Object.assign(this, Zo, e), this.smartphone = Zo.smartphone, e.smartphone && Object.assign(this.smartphone, e.smartphone), this.tablet = Zo.tablet, e.tablet && Object.assign(this.tablet, e.tablet), this.namespace = "locomotive", this.html = document.documentElement, this.windowHeight = window.innerHeight, this.windowWidth = window.innerWidth, this.windowMiddle = {
                        x: this.windowWidth / 2,
                        y: this.windowHeight / 2
                    }, this.els = {}, this.currentElements = {}, this.listeners = {}, this.hasScrollTicking = !1, this.hasCallEventSet = !1, this.checkScroll = this.checkScroll.bind(this), this.checkResize = this.checkResize.bind(this), this.checkEvent = this.checkEvent.bind(this), this.instance = {
                        scroll: {
                            x: 0,
                            y: 0
                        },
                        limit: {
                            x: this.html.offsetWidth,
                            y: this.html.offsetHeight
                        },
                        currentElements: this.currentElements
                    }, this.isMobile ? this.isTablet ? this.context = "tablet" : this.context = "smartphone" : this.context = "desktop", this.isMobile && (this.direction = this[this.context].direction), "horizontal" === this.direction ? this.directionAxis = "x" : this.directionAxis = "y", this.getDirection && (this.instance.direction = null), this.getDirection && (this.instance.speed = 0), this.html.classList.add(this.initClass), window.addEventListener("resize", this.checkResize, !1)
                }
                return Io(t, [{
                    key: "init",
                    value: function() {
                        this.initEvents()
                    }
                }, {
                    key: "checkScroll",
                    value: function() {
                        this.dispatchScroll()
                    }
                }, {
                    key: "checkResize",
                    value: function() {
                        var t = this;
                        this.resizeTick || (this.resizeTick = !0, requestAnimationFrame((function() {
                            t.resize(), t.resizeTick = !1
                        })))
                    }
                }, {
                    key: "resize",
                    value: function() {}
                }, {
                    key: "checkContext",
                    value: function() {
                        if (this.reloadOnContextChange) {
                            this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 || this.windowWidth < this.tablet.breakpoint, this.isTablet = this.isMobile && this.windowWidth >= this.tablet.breakpoint;
                            var t = this.context;
                            this.isMobile ? this.isTablet ? this.context = "tablet" : this.context = "smartphone" : this.context = "desktop", t != this.context && ("desktop" == t ? this.smooth : this[t].smooth) != ("desktop" == this.context ? this.smooth : this[this.context].smooth) && window.location.reload()
                        }
                    }
                }, {
                    key: "initEvents",
                    value: function() {
                        var t = this;
                        this.scrollToEls = this.el.querySelectorAll("[data-".concat(this.name, "-to]")), this.setScrollTo = this.setScrollTo.bind(this), this.scrollToEls.forEach((function(e) {
                            e.addEventListener("click", t.setScrollTo, !1)
                        }))
                    }
                }, {
                    key: "setScrollTo",
                    value: function(t) {
                        t.preventDefault(), this.scrollTo(t.currentTarget.getAttribute("data-".concat(this.name, "-href")) || t.currentTarget.getAttribute("href"), {
                            offset: t.currentTarget.getAttribute("data-".concat(this.name, "-offset"))
                        })
                    }
                }, {
                    key: "addElements",
                    value: function() {}
                }, {
                    key: "detectElements",
                    value: function(t) {
                        var e = this,
                            i = this.instance.scroll.y,
                            n = i + this.windowHeight,
                            r = this.instance.scroll.x,
                            s = r + this.windowWidth;
                        Object.entries(this.els).forEach((function(o) {
                            var a = Go(o, 2),
                                l = a[0],
                                c = a[1];
                            if (!c || c.inView && !t || ("horizontal" === e.direction ? s >= c.left && r < c.right && e.setInView(c, l) : n >= c.top && i < c.bottom && e.setInView(c, l)), c && c.inView)
                                if ("horizontal" === e.direction) {
                                    var h = c.right - c.left;
                                    c.progress = (e.instance.scroll.x - (c.left - e.windowWidth)) / (h + e.windowWidth), (s < c.left || r > c.right) && e.setOutOfView(c, l)
                                } else {
                                    var u = c.bottom - c.top;
                                    c.progress = (e.instance.scroll.y - (c.top - e.windowHeight)) / (u + e.windowHeight), (n < c.top || i > c.bottom) && e.setOutOfView(c, l)
                                }
                        })), this.hasScrollTicking = !1
                    }
                }, {
                    key: "setInView",
                    value: function(t, e) {
                        this.els[e].inView = !0, t.el.classList.add(t.class), this.currentElements[e] = t, t.call && this.hasCallEventSet && (this.dispatchCall(t, "enter"), t.repeat || (this.els[e].call = !1))
                    }
                }, {
                    key: "setOutOfView",
                    value: function(t, e) {
                        var i = this;
                        this.els[e].inView = !1, Object.keys(this.currentElements).forEach((function(t) {
                            t === e && delete i.currentElements[t]
                        })), t.call && this.hasCallEventSet && this.dispatchCall(t, "exit"), t.repeat && t.el.classList.remove(t.class)
                    }
                }, {
                    key: "dispatchCall",
                    value: function(t, e) {
                        this.callWay = e, this.callValue = t.call.split(",").map((function(t) {
                            return t.trim()
                        })), this.callObj = t, 1 == this.callValue.length && (this.callValue = this.callValue[0]);
                        var i = new Event(this.namespace + "call");
                        this.el.dispatchEvent(i)
                    }
                }, {
                    key: "dispatchScroll",
                    value: function() {
                        var t = new Event(this.namespace + "scroll");
                        this.el.dispatchEvent(t)
                    }
                }, {
                    key: "setEvents",
                    value: function(t, e) {
                        this.listeners[t] || (this.listeners[t] = []);
                        var i = this.listeners[t];
                        i.push(e), 1 === i.length && this.el.addEventListener(this.namespace + t, this.checkEvent, !1), "call" === t && (this.hasCallEventSet = !0, this.detectElements(!0))
                    }
                }, {
                    key: "unsetEvents",
                    value: function(t, e) {
                        if (this.listeners[t]) {
                            var i = this.listeners[t],
                                n = i.indexOf(e);
                            n < 0 || (i.splice(n, 1), 0 === i.index && this.el.removeEventListener(this.namespace + t, this.checkEvent, !1))
                        }
                    }
                }, {
                    key: "checkEvent",
                    value: function(t) {
                        var e = this,
                            i = t.type.replace(this.namespace, ""),
                            n = this.listeners[i];
                        n && 0 !== n.length && n.forEach((function(t) {
                            switch (i) {
                                case "scroll":
                                    return t(e.instance);
                                case "call":
                                    return t(e.callValue, e.callWay, e.callObj);
                                default:
                                    return t()
                            }
                        }))
                    }
                }, {
                    key: "startScroll",
                    value: function() {}
                }, {
                    key: "stopScroll",
                    value: function() {}
                }, {
                    key: "setScroll",
                    value: function(t, e) {
                        this.instance.scroll = {
                            x: 0,
                            y: 0
                        }
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        var t = this;
                        window.removeEventListener("resize", this.checkResize, !1), Object.keys(this.listeners).forEach((function(e) {
                            t.el.removeEventListener(t.namespace + e, t.checkEvent, !1)
                        })), this.listeners = {}, this.scrollToEls.forEach((function(e) {
                            e.removeEventListener("click", t.setScrollTo, !1)
                        })), this.html.classList.remove(this.initClass)
                    }
                }]), t
            }(),
            ta = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== i.g ? i.g : "undefined" != typeof self ? self : {};

        function ea(t, e) {
            return t(e = {
                exports: {}
            }, e.exports), e.exports
        }
        var ia = ea((function(t, e) {
                t.exports = {
                    polyfill: function() {
                        var t = window,
                            e = document;
                        if (!("scrollBehavior" in e.documentElement.style) || !0 === t.__forceSmoothScrollPolyfill__) {
                            var i, n = t.HTMLElement || t.Element,
                                r = {
                                    scroll: t.scroll || t.scrollTo,
                                    scrollBy: t.scrollBy,
                                    elementScroll: n.prototype.scroll || a,
                                    scrollIntoView: n.prototype.scrollIntoView
                                },
                                s = t.performance && t.performance.now ? t.performance.now.bind(t.performance) : Date.now,
                                o = (i = t.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(i) ? 1 : 0);
                            t.scroll = t.scrollTo = function() {
                                void 0 !== arguments[0] && (!0 !== l(arguments[0]) ? p.call(t, e.body, void 0 !== arguments[0].left ? ~~arguments[0].left : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : t.scrollY || t.pageYOffset) : r.scroll.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : t.scrollY || t.pageYOffset))
                            }, t.scrollBy = function() {
                                void 0 !== arguments[0] && (l(arguments[0]) ? r.scrollBy.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : p.call(t, e.body, ~~arguments[0].left + (t.scrollX || t.pageXOffset), ~~arguments[0].top + (t.scrollY || t.pageYOffset)))
                            }, n.prototype.scroll = n.prototype.scrollTo = function() {
                                if (void 0 !== arguments[0])
                                    if (!0 !== l(arguments[0])) {
                                        var t = arguments[0].left,
                                            e = arguments[0].top;
                                        p.call(this, this, void 0 === t ? this.scrollLeft : ~~t, void 0 === e ? this.scrollTop : ~~e)
                                    } else {
                                        if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
                                        r.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                                    }
                            }, n.prototype.scrollBy = function() {
                                void 0 !== arguments[0] && (!0 !== l(arguments[0]) ? this.scroll({
                                    left: ~~arguments[0].left + this.scrollLeft,
                                    top: ~~arguments[0].top + this.scrollTop,
                                    behavior: arguments[0].behavior
                                }) : r.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
                            }, n.prototype.scrollIntoView = function() {
                                if (!0 !== l(arguments[0])) {
                                    var i = f(this),
                                        n = i.getBoundingClientRect(),
                                        s = this.getBoundingClientRect();
                                    i !== e.body ? (p.call(this, i, i.scrollLeft + s.left - n.left, i.scrollTop + s.top - n.top), "fixed" !== t.getComputedStyle(i).position && t.scrollBy({
                                        left: n.left,
                                        top: n.top,
                                        behavior: "smooth"
                                    })) : t.scrollBy({
                                        left: s.left,
                                        top: s.top,
                                        behavior: "smooth"
                                    })
                                } else r.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
                            }
                        }

                        function a(t, e) {
                            this.scrollLeft = t, this.scrollTop = e
                        }

                        function l(t) {
                            if (null === t || "object" != typeof t || void 0 === t.behavior || "auto" === t.behavior || "instant" === t.behavior) return !0;
                            if ("object" == typeof t && "smooth" === t.behavior) return !1;
                            throw new TypeError("behavior member of ScrollOptions " + t.behavior + " is not a valid value for enumeration ScrollBehavior.")
                        }

                        function c(t, e) {
                            return "Y" === e ? t.clientHeight + o < t.scrollHeight : "X" === e ? t.clientWidth + o < t.scrollWidth : void 0
                        }

                        function h(e, i) {
                            var n = t.getComputedStyle(e, null)["overflow" + i];
                            return "auto" === n || "scroll" === n
                        }

                        function u(t) {
                            var e = c(t, "Y") && h(t, "Y"),
                                i = c(t, "X") && h(t, "X");
                            return e || i
                        }

                        function f(t) {
                            for (; t !== e.body && !1 === u(t);) t = t.parentNode || t.host;
                            return t
                        }

                        function d(e) {
                            var i, n, r, o, a = (s() - e.startTime) / 468;
                            o = a = a > 1 ? 1 : a, i = .5 * (1 - Math.cos(Math.PI * o)), n = e.startX + (e.x - e.startX) * i, r = e.startY + (e.y - e.startY) * i, e.method.call(e.scrollable, n, r), n === e.x && r === e.y || t.requestAnimationFrame(d.bind(t, e))
                        }

                        function p(i, n, o) {
                            var l, c, h, u, f = s();
                            i === e.body ? (l = t, c = t.scrollX || t.pageXOffset, h = t.scrollY || t.pageYOffset, u = r.scroll) : (l = i, c = i.scrollLeft, h = i.scrollTop, u = a), d({
                                scrollable: l,
                                method: u,
                                startTime: f,
                                startX: c,
                                startY: h,
                                x: n,
                                y: o
                            })
                        }
                    }
                }
            })),
            na = (ia.polyfill, function(t) {
                Xo(i, t);
                var e = Vo(i);

                function i() {
                    var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return Ro(this, i), (t = e.call(this, n)).resetNativeScroll && (history.scrollRestoration && (history.scrollRestoration = "manual"), window.scrollTo(0, 0)), window.addEventListener("scroll", t.checkScroll, !1), void 0 === window.smoothscrollPolyfill && (window.smoothscrollPolyfill = ia, window.smoothscrollPolyfill.polyfill()), t
                }
                return Io(i, [{
                    key: "init",
                    value: function() {
                        this.instance.scroll.y = window.pageYOffset, this.addElements(), this.detectElements(), Uo(Ho(i.prototype), "init", this).call(this)
                    }
                }, {
                    key: "checkScroll",
                    value: function() {
                        var t = this;
                        Uo(Ho(i.prototype), "checkScroll", this).call(this), this.getDirection && this.addDirection(), this.getSpeed && (this.addSpeed(), this.speedTs = Date.now()), this.instance.scroll.y = window.pageYOffset, Object.entries(this.els).length && (this.hasScrollTicking || (requestAnimationFrame((function() {
                            t.detectElements()
                        })), this.hasScrollTicking = !0))
                    }
                }, {
                    key: "addDirection",
                    value: function() {
                        window.pageYOffset > this.instance.scroll.y ? "down" !== this.instance.direction && (this.instance.direction = "down") : window.pageYOffset < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up")
                    }
                }, {
                    key: "addSpeed",
                    value: function() {
                        window.pageYOffset != this.instance.scroll.y ? this.instance.speed = (window.pageYOffset - this.instance.scroll.y) / Math.max(1, Date.now() - this.speedTs) : this.instance.speed = 0
                    }
                }, {
                    key: "resize",
                    value: function() {
                        Object.entries(this.els).length && (this.windowHeight = window.innerHeight, this.updateElements())
                    }
                }, {
                    key: "addElements",
                    value: function() {
                        var t = this;
                        this.els = {}, this.el.querySelectorAll("[data-" + this.name + "]").forEach((function(e, i) {
                            e.getBoundingClientRect();
                            var n, r, s, o = e.dataset[t.name + "Class"] || t.class,
                                a = "string" == typeof e.dataset[t.name + "Id"] ? e.dataset[t.name + "Id"] : i,
                                l = "string" == typeof e.dataset[t.name + "Offset"] ? e.dataset[t.name + "Offset"].split(",") : t.offset,
                                c = e.dataset[t.name + "Repeat"],
                                h = e.dataset[t.name + "Call"],
                                u = e.dataset[t.name + "Target"],
                                f = (s = void 0 !== u ? document.querySelector("".concat(u)) : e).getBoundingClientRect();
                            n = f.top + t.instance.scroll.y, r = f.left + t.instance.scroll.x;
                            var d = n + s.offsetHeight,
                                p = r + s.offsetWidth;
                            c = "false" != c && (null != c || t.repeat);
                            var g = t.getRelativeOffset(l),
                                m = {
                                    el: e,
                                    targetEl: s,
                                    id: a,
                                    class: o,
                                    top: n += g[0],
                                    bottom: d -= g[1],
                                    left: r,
                                    right: p,
                                    offset: l,
                                    progress: 0,
                                    repeat: c,
                                    inView: !1,
                                    call: h
                                };
                            t.els[a] = m, e.classList.contains(o) && t.setInView(t.els[a], a)
                        }))
                    }
                }, {
                    key: "updateElements",
                    value: function() {
                        var t = this;
                        Object.entries(this.els).forEach((function(e) {
                            var i = Go(e, 2),
                                n = i[0],
                                r = i[1],
                                s = r.targetEl.getBoundingClientRect().top + t.instance.scroll.y,
                                o = s + r.targetEl.offsetHeight,
                                a = t.getRelativeOffset(r.offset);
                            t.els[n].top = s + a[0], t.els[n].bottom = o - a[1]
                        })), this.hasScrollTicking = !1
                    }
                }, {
                    key: "getRelativeOffset",
                    value: function(t) {
                        var e = [0, 0];
                        if (t)
                            for (var i = 0; i < t.length; i++) "string" == typeof t[i] ? t[i].includes("%") ? e[i] = parseInt(t[i].replace("%", "") * this.windowHeight / 100) : e[i] = parseInt(t[i]) : e[i] = t[i];
                        return e
                    }
                }, {
                    key: "scrollTo",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            i = parseInt(e.offset) || 0,
                            n = !!e.callback && e.callback;
                        if ("string" == typeof t) {
                            if ("top" === t) t = this.html;
                            else if ("bottom" === t) t = this.html.offsetHeight - window.innerHeight;
                            else if (!(t = document.querySelector(t))) return
                        } else if ("number" == typeof t) t = parseInt(t);
                        else if (!t || !t.tagName) return void console.warn("`target` parameter is not valid");
                        i = "number" != typeof t ? t.getBoundingClientRect().top + i + this.instance.scroll.y : t + i;
                        var r = function() {
                            return parseInt(window.pageYOffset) === parseInt(i)
                        };
                        if (n) {
                            if (r()) return void n();
                            var s = function t() {
                                r() && (window.removeEventListener("scroll", t), n())
                            };
                            window.addEventListener("scroll", s)
                        }
                        window.scrollTo({
                            top: i,
                            behavior: 0 === e.duration ? "auto" : "smooth"
                        })
                    }
                }, {
                    key: "update",
                    value: function() {
                        this.addElements(), this.detectElements()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        Uo(Ho(i.prototype), "destroy", this).call(this), window.removeEventListener("scroll", this.checkScroll, !1)
                    }
                }]), i
            }(Jo)),
            ra = Object.getOwnPropertySymbols,
            sa = Object.prototype.hasOwnProperty,
            oa = Object.prototype.propertyIsEnumerable;

        function aa(t) {
            if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(t)
        }
        var la = function() {
            try {
                if (!Object.assign) return !1;
                var t = new String("abc");
                if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
                for (var e = {}, i = 0; i < 10; i++) e["_" + String.fromCharCode(i)] = i;
                var n = Object.getOwnPropertyNames(e).map((function(t) {
                    return e[t]
                }));
                if ("0123456789" !== n.join("")) return !1;
                var r = {};
                return "abcdefghijklmnopqrst".split("").forEach((function(t) {
                    r[t] = t
                })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
            } catch (t) {
                return !1
            }
        }() ? Object.assign : function(t, e) {
            for (var i, n, r = aa(t), s = 1; s < arguments.length; s++) {
                for (var o in i = Object(arguments[s])) sa.call(i, o) && (r[o] = i[o]);
                if (ra) {
                    n = ra(i);
                    for (var a = 0; a < n.length; a++) oa.call(i, n[a]) && (r[n[a]] = i[n[a]])
                }
            }
            return r
        };

        function ca() {}
        ca.prototype = {
            on: function(t, e, i) {
                var n = this.e || (this.e = {});
                return (n[t] || (n[t] = [])).push({
                    fn: e,
                    ctx: i
                }), this
            },
            once: function(t, e, i) {
                var n = this;

                function r() {
                    n.off(t, r), e.apply(i, arguments)
                }
                return r._ = e, this.on(t, r, i)
            },
            emit: function(t) {
                for (var e = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[t] || []).slice(), n = 0, r = i.length; n < r; n++) i[n].fn.apply(i[n].ctx, e);
                return this
            },
            off: function(t, e) {
                var i = this.e || (this.e = {}),
                    n = i[t],
                    r = [];
                if (n && e)
                    for (var s = 0, o = n.length; s < o; s++) n[s].fn !== e && n[s].fn._ !== e && r.push(n[s]);
                return r.length ? i[t] = r : delete i[t], this
            }
        };
        var ha = ca,
            ua = ea((function(t, e) {
                (function() {
                    (null !== e ? e : this).Lethargy = function() {
                        function t(t, e, i, n) {
                            this.stability = null != t ? Math.abs(t) : 8, this.sensitivity = null != e ? 1 + Math.abs(e) : 100, this.tolerance = null != i ? 1 + Math.abs(i) : 1.1, this.delay = null != n ? n : 150, this.lastUpDeltas = function() {
                                var t, e, i;
                                for (i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) i.push(null);
                                return i
                            }.call(this), this.lastDownDeltas = function() {
                                var t, e, i;
                                for (i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) i.push(null);
                                return i
                            }.call(this), this.deltasTimestamp = function() {
                                var t, e, i;
                                for (i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) i.push(null);
                                return i
                            }.call(this)
                        }
                        return t.prototype.check = function(t) {
                            var e;
                            return null != (t = t.originalEvent || t).wheelDelta ? e = t.wheelDelta : null != t.deltaY ? e = -40 * t.deltaY : null == t.detail && 0 !== t.detail || (e = -40 * t.detail), this.deltasTimestamp.push(Date.now()), this.deltasTimestamp.shift(), e > 0 ? (this.lastUpDeltas.push(e), this.lastUpDeltas.shift(), this.isInertia(1)) : (this.lastDownDeltas.push(e), this.lastDownDeltas.shift(), this.isInertia(-1))
                        }, t.prototype.isInertia = function(t) {
                            var e, i, n, r, s, o, a;
                            return null === (e = -1 === t ? this.lastDownDeltas : this.lastUpDeltas)[0] ? t : !(this.deltasTimestamp[2 * this.stability - 2] + this.delay > Date.now() && e[0] === e[2 * this.stability - 1]) && (n = e.slice(0, this.stability), i = e.slice(this.stability, 2 * this.stability), a = n.reduce((function(t, e) {
                                return t + e
                            })), s = i.reduce((function(t, e) {
                                return t + e
                            })), o = a / n.length, r = s / i.length, Math.abs(o) < Math.abs(r * this.tolerance) && this.sensitivity < Math.abs(r) && t)
                        }, t.prototype.showLastUpDeltas = function() {
                            return this.lastUpDeltas
                        }, t.prototype.showLastDownDeltas = function() {
                            return this.lastDownDeltas
                        }, t
                    }()
                }).call(ta)
            })),
            fa = "onwheel" in document,
            da = "onmousewheel" in document,
            pa = "ontouchstart" in window || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch,
            ga = navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
            ma = !!window.navigator.msPointerEnabled,
            va = "onkeydown" in document,
            ya = navigator.userAgent.indexOf("Firefox") > -1,
            _a = Object.prototype.toString,
            ba = Object.prototype.hasOwnProperty;

        function wa(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        }
        var xa = ua.Lethargy,
            Ta = "virtualscroll",
            ka = Sa;

        function Sa(t) {
            ! function(t) {
                if (!t) return console.warn("bindAll requires at least one argument.");
                var e = Array.prototype.slice.call(arguments, 1);
                if (0 === e.length)
                    for (var i in t) ba.call(t, i) && "function" == typeof t[i] && "[object Function]" == _a.call(t[i]) && e.push(i);
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    t[r] = wa(t[r], t)
                }
            }(this, "_onWheel", "_onMouseWheel", "_onTouchStart", "_onTouchMove", "_onKeyDown"), this.el = window, t && t.el && (this.el = t.el, delete t.el), this.options = la({
                mouseMultiplier: 1,
                touchMultiplier: 2,
                firefoxMultiplier: 15,
                keyStep: 120,
                preventTouch: !1,
                unpreventTouchClass: "vs-touchmove-allowed",
                limitInertia: !1,
                useKeyboard: !0,
                useTouch: !0
            }, t), this.options.limitInertia && (this._lethargy = new xa), this._emitter = new ha, this._event = {
                y: 0,
                x: 0,
                deltaX: 0,
                deltaY: 0
            }, this.touchStartX = null, this.touchStartY = null, this.bodyTouchAction = null, void 0 !== this.options.passive && (this.listenerOptions = {
                passive: this.options.passive
            })
        }

        function Ea(t, e, i) {
            return (1 - i) * t + i * e
        }

        function Oa(t) {
            var e = {};
            if (window.getComputedStyle) {
                var i = getComputedStyle(t),
                    n = i.transform || i.webkitTransform || i.mozTransform,
                    r = n.match(/^matrix3d\((.+)\)$/);
                return r ? (e.x = r ? parseFloat(r[1].split(", ")[12]) : 0, e.y = r ? parseFloat(r[1].split(", ")[13]) : 0) : (r = n.match(/^matrix\((.+)\)$/), e.x = r ? parseFloat(r[1].split(", ")[4]) : 0, e.y = r ? parseFloat(r[1].split(", ")[5]) : 0), e
            }
        }

        function Ca(t) {
            for (var e = []; t && t !== document; t = t.parentNode) e.push(t);
            return e
        }
        Sa.prototype._notify = function(t) {
            var e = this._event;
            e.x += e.deltaX, e.y += e.deltaY, this._emitter.emit(Ta, {
                x: e.x,
                y: e.y,
                deltaX: e.deltaX,
                deltaY: e.deltaY,
                originalEvent: t
            })
        }, Sa.prototype._onWheel = function(t) {
            var e = this.options;
            if (!this._lethargy || !1 !== this._lethargy.check(t)) {
                var i = this._event;
                i.deltaX = t.wheelDeltaX || -1 * t.deltaX, i.deltaY = t.wheelDeltaY || -1 * t.deltaY, ya && 1 == t.deltaMode && (i.deltaX *= e.firefoxMultiplier, i.deltaY *= e.firefoxMultiplier), i.deltaX *= e.mouseMultiplier, i.deltaY *= e.mouseMultiplier, this._notify(t)
            }
        }, Sa.prototype._onMouseWheel = function(t) {
            if (!this.options.limitInertia || !1 !== this._lethargy.check(t)) {
                var e = this._event;
                e.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0, e.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta, this._notify(t)
            }
        }, Sa.prototype._onTouchStart = function(t) {
            var e = t.targetTouches ? t.targetTouches[0] : t;
            this.touchStartX = e.pageX, this.touchStartY = e.pageY
        }, Sa.prototype._onTouchMove = function(t) {
            var e = this.options;
            e.preventTouch && !t.target.classList.contains(e.unpreventTouchClass) && t.preventDefault();
            var i = this._event,
                n = t.targetTouches ? t.targetTouches[0] : t;
            i.deltaX = (n.pageX - this.touchStartX) * e.touchMultiplier, i.deltaY = (n.pageY - this.touchStartY) * e.touchMultiplier, this.touchStartX = n.pageX, this.touchStartY = n.pageY, this._notify(t)
        }, Sa.prototype._onKeyDown = function(t) {
            var e = this._event;
            e.deltaX = e.deltaY = 0;
            var i = window.innerHeight - 40;
            switch (t.keyCode) {
                case 37:
                case 38:
                    e.deltaY = this.options.keyStep;
                    break;
                case 39:
                case 40:
                    e.deltaY = -this.options.keyStep;
                    break;
                case t.shiftKey:
                    e.deltaY = i;
                    break;
                case 32:
                    e.deltaY = -i;
                    break;
                default:
                    return
            }
            this._notify(t)
        }, Sa.prototype._bind = function() {
            fa && this.el.addEventListener("wheel", this._onWheel, this.listenerOptions), da && this.el.addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions), pa && this.options.useTouch && (this.el.addEventListener("touchstart", this._onTouchStart, this.listenerOptions), this.el.addEventListener("touchmove", this._onTouchMove, this.listenerOptions)), ma && ga && (this.bodyTouchAction = document.body.style.msTouchAction, document.body.style.msTouchAction = "none", this.el.addEventListener("MSPointerDown", this._onTouchStart, !0), this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)), va && this.options.useKeyboard && document.addEventListener("keydown", this._onKeyDown)
        }, Sa.prototype._unbind = function() {
            fa && this.el.removeEventListener("wheel", this._onWheel), da && this.el.removeEventListener("mousewheel", this._onMouseWheel), pa && (this.el.removeEventListener("touchstart", this._onTouchStart), this.el.removeEventListener("touchmove", this._onTouchMove)), ma && ga && (document.body.style.msTouchAction = this.bodyTouchAction, this.el.removeEventListener("MSPointerDown", this._onTouchStart, !0), this.el.removeEventListener("MSPointerMove", this._onTouchMove, !0)), va && this.options.useKeyboard && document.removeEventListener("keydown", this._onKeyDown)
        }, Sa.prototype.on = function(t, e) {
            this._emitter.on(Ta, t, e);
            var i = this._emitter.e;
            i && i[Ta] && 1 === i[Ta].length && this._bind()
        }, Sa.prototype.off = function(t, e) {
            this._emitter.off(Ta, t, e);
            var i = this._emitter.e;
            (!i[Ta] || i[Ta].length <= 0) && this._unbind()
        }, Sa.prototype.reset = function() {
            var t = this._event;
            t.x = 0, t.y = 0
        }, Sa.prototype.destroy = function() {
            this._emitter.off(), this._unbind()
        };
        var Ma = .1,
            Aa = "function" == typeof Float32Array;

        function Pa(t, e) {
            return 1 - 3 * e + 3 * t
        }

        function Da(t, e) {
            return 3 * e - 6 * t
        }

        function La(t) {
            return 3 * t
        }

        function Ba(t, e, i) {
            return ((Pa(e, i) * t + Da(e, i)) * t + La(e)) * t
        }

        function Ra(t, e, i) {
            return 3 * Pa(e, i) * t * t + 2 * Da(e, i) * t + La(e)
        }

        function za(t) {
            return t
        }
        var Ia = function(t, e, i, n) {
                if (!(0 <= t && t <= 1 && 0 <= i && i <= 1)) throw new Error("bezier x values must be in [0, 1] range");
                if (t === e && i === n) return za;
                for (var r = Aa ? new Float32Array(11) : new Array(11), s = 0; s < 11; ++s) r[s] = Ba(s * Ma, t, i);
                return function(s) {
                    return 0 === s ? 0 : 1 === s ? 1 : Ba(function(e) {
                        for (var n = 0, s = 1; 10 !== s && r[s] <= e; ++s) n += Ma;
                        --s;
                        var o = n + (e - r[s]) / (r[s + 1] - r[s]) * Ma,
                            a = Ra(o, t, i);
                        return a >= .001 ? function(t, e, i, n) {
                            for (var r = 0; r < 4; ++r) {
                                var s = Ra(e, i, n);
                                if (0 === s) return e;
                                e -= (Ba(e, i, n) - t) / s
                            }
                            return e
                        }(e, o, t, i) : 0 === a ? o : function(t, e, i, n, r) {
                            var s, o, a = 0;
                            do {
                                (s = Ba(o = e + (i - e) / 2, n, r) - t) > 0 ? i = o : e = o
                            } while (Math.abs(s) > 1e-7 && ++a < 10);
                            return o
                        }(e, n, n + Ma, t, i)
                    }(s), e, n)
                }
            },
            Ya = function(t) {
                Xo(i, t);
                var e = Vo(i);

                function i() {
                    var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return Ro(this, i), history.scrollRestoration && (history.scrollRestoration = "manual"), window.scrollTo(0, 0), (t = e.call(this, n)).inertia && (t.lerp = .1 * t.inertia), t.isScrolling = !1, t.isDraggingScrollbar = !1, t.isTicking = !1, t.hasScrollTicking = !1, t.parallaxElements = {}, t.stop = !1, t.scrollbarContainer = n.scrollbarContainer, t.checkKey = t.checkKey.bind(qo(t)), window.addEventListener("keydown", t.checkKey, !1), t
                }
                return Io(i, [{
                    key: "init",
                    value: function() {
                        var t = this;
                        this.html.classList.add(this.smoothClass), this.html.setAttribute("data-".concat(this.name, "-direction"), this.direction), this.instance = Fo({
                            delta: {
                                x: this.initPosition.x,
                                y: this.initPosition.y
                            },
                            scroll: {
                                x: this.initPosition.x,
                                y: this.initPosition.y
                            }
                        }, this.instance), this.vs = new ka({
                            el: this.scrollFromAnywhere ? document : this.el,
                            mouseMultiplier: navigator.platform.indexOf("Win") > -1 ? 1 : .4,
                            firefoxMultiplier: this.firefoxMultiplier,
                            touchMultiplier: this.touchMultiplier,
                            useKeyboard: !1,
                            passive: !0
                        }), this.vs.on((function(e) {
                            t.stop || t.isDraggingScrollbar || requestAnimationFrame((function() {
                                t.updateDelta(e), t.isScrolling || t.startScrolling()
                            }))
                        })), this.setScrollLimit(), this.initScrollBar(), this.addSections(), this.addElements(), this.checkScroll(!0), this.transformElements(!0, !0), Uo(Ho(i.prototype), "init", this).call(this)
                    }
                }, {
                    key: "setScrollLimit",
                    value: function() {
                        if (this.instance.limit.y = this.el.offsetHeight - this.windowHeight, "horizontal" === this.direction) {
                            for (var t = 0, e = this.el.children, i = 0; i < e.length; i++) t += e[i].offsetWidth;
                            this.instance.limit.x = t - this.windowWidth
                        }
                    }
                }, {
                    key: "startScrolling",
                    value: function() {
                        this.startScrollTs = Date.now(), this.isScrolling = !0, this.checkScroll(), this.html.classList.add(this.scrollingClass)
                    }
                }, {
                    key: "stopScrolling",
                    value: function() {
                        cancelAnimationFrame(this.checkScrollRaf), this.startScrollTs = void 0, this.scrollToRaf && (cancelAnimationFrame(this.scrollToRaf), this.scrollToRaf = null), this.isScrolling = !1, this.instance.scroll.y = Math.round(this.instance.scroll.y), this.html.classList.remove(this.scrollingClass)
                    }
                }, {
                    key: "checkKey",
                    value: function(t) {
                        var e = this;
                        if (this.stop) 9 == t.keyCode && requestAnimationFrame((function() {
                            e.html.scrollTop = 0, document.body.scrollTop = 0, e.html.scrollLeft = 0, document.body.scrollLeft = 0
                        }));
                        else {
                            switch (t.keyCode) {
                                case 9:
                                    requestAnimationFrame((function() {
                                        e.html.scrollTop = 0, document.body.scrollTop = 0, e.html.scrollLeft = 0, document.body.scrollLeft = 0, e.scrollTo(document.activeElement, {
                                            offset: -window.innerHeight / 2
                                        })
                                    }));
                                    break;
                                case 38:
                                    this.isActiveElementScrollSensitive() && (this.instance.delta[this.directionAxis] -= 240);
                                    break;
                                case 40:
                                    this.isActiveElementScrollSensitive() && (this.instance.delta[this.directionAxis] += 240);
                                    break;
                                case 33:
                                    this.instance.delta[this.directionAxis] -= window.innerHeight;
                                    break;
                                case 34:
                                    this.instance.delta[this.directionAxis] += window.innerHeight;
                                    break;
                                case 36:
                                    this.instance.delta[this.directionAxis] -= this.instance.limit[this.directionAxis];
                                    break;
                                case 35:
                                    this.instance.delta[this.directionAxis] += this.instance.limit[this.directionAxis];
                                    break;
                                case 32:
                                    this.isActiveElementScrollSensitive() && (t.shiftKey ? this.instance.delta[this.directionAxis] -= window.innerHeight : this.instance.delta[this.directionAxis] += window.innerHeight);
                                    break;
                                default:
                                    return
                            }
                            this.instance.delta[this.directionAxis] < 0 && (this.instance.delta[this.directionAxis] = 0), this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis] && (this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis]), this.stopScrolling(), this.isScrolling = !0, this.checkScroll(), this.html.classList.add(this.scrollingClass)
                        }
                    }
                }, {
                    key: "isActiveElementScrollSensitive",
                    value: function() {
                        return !(document.activeElement instanceof HTMLInputElement || document.activeElement instanceof HTMLTextAreaElement || document.activeElement instanceof HTMLButtonElement || document.activeElement instanceof HTMLSelectElement)
                    }
                }, {
                    key: "checkScroll",
                    value: function() {
                        var t = this,
                            e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        if (e || this.isScrolling || this.isDraggingScrollbar) {
                            this.hasScrollTicking || (this.checkScrollRaf = requestAnimationFrame((function() {
                                return t.checkScroll()
                            })), this.hasScrollTicking = !0), this.updateScroll();
                            var n = Math.abs(this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]),
                                r = Date.now() - this.startScrollTs;
                            if (!this.animatingScroll && r > 100 && (n < .5 && 0 != this.instance.delta[this.directionAxis] || n < .5 && 0 == this.instance.delta[this.directionAxis]) && this.stopScrolling(), Object.entries(this.sections).forEach((function(i) {
                                    var n = Go(i, 2),
                                        r = (n[0], n[1]);
                                    r.persistent || t.instance.scroll[t.directionAxis] > r.offset[t.directionAxis] && t.instance.scroll[t.directionAxis] < r.limit[t.directionAxis] ? ("horizontal" === t.direction ? t.transform(r.el, -t.instance.scroll[t.directionAxis], 0) : t.transform(r.el, 0, -t.instance.scroll[t.directionAxis]), r.inView || (r.inView = !0, r.el.style.opacity = 1, r.el.style.pointerEvents = "all", r.el.setAttribute("data-".concat(t.name, "-section-inview"), ""))) : ((r.inView || e) && (r.inView = !1, r.el.style.opacity = 0, r.el.style.pointerEvents = "none", r.el.removeAttribute("data-".concat(t.name, "-section-inview"))), t.transform(r.el, 0, 0))
                                })), this.getDirection && this.addDirection(), this.getSpeed && (this.addSpeed(), this.speedTs = Date.now()), this.detectElements(), this.transformElements(), this.hasScrollbar) {
                                var s = this.instance.scroll[this.directionAxis] / this.instance.limit[this.directionAxis] * this.scrollBarLimit[this.directionAxis];
                                "horizontal" === this.direction ? this.transform(this.scrollbarThumb, s, 0) : this.transform(this.scrollbarThumb, 0, s)
                            }
                            Uo(Ho(i.prototype), "checkScroll", this).call(this), this.hasScrollTicking = !1
                        }
                    }
                }, {
                    key: "resize",
                    value: function() {
                        this.windowHeight = window.innerHeight, this.windowWidth = window.innerWidth, this.checkContext(), this.windowMiddle = {
                            x: this.windowWidth / 2,
                            y: this.windowHeight / 2
                        }, this.update()
                    }
                }, {
                    key: "updateDelta",
                    value: function(t) {
                        var e, i = this[this.context] && this[this.context].gestureDirection ? this[this.context].gestureDirection : this.gestureDirection;
                        e = "both" === i ? t.deltaX + t.deltaY : "vertical" === i ? t.deltaY : "horizontal" === i ? t.deltaX : t.deltaY, this.instance.delta[this.directionAxis] -= e * this.multiplier, this.instance.delta[this.directionAxis] < 0 && (this.instance.delta[this.directionAxis] = 0), this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis] && (this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis])
                    }
                }, {
                    key: "updateScroll",
                    value: function(t) {
                        this.isScrolling || this.isDraggingScrollbar ? this.instance.scroll[this.directionAxis] = Ea(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis], this.lerp) : this.instance.scroll[this.directionAxis] > this.instance.limit[this.directionAxis] ? this.setScroll(this.instance.scroll[this.directionAxis], this.instance.limit[this.directionAxis]) : this.instance.scroll.y < 0 ? this.setScroll(this.instance.scroll[this.directionAxis], 0) : this.setScroll(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis])
                    }
                }, {
                    key: "addDirection",
                    value: function() {
                        this.instance.delta.y > this.instance.scroll.y ? "down" !== this.instance.direction && (this.instance.direction = "down") : this.instance.delta.y < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up"), this.instance.delta.x > this.instance.scroll.x ? "right" !== this.instance.direction && (this.instance.direction = "right") : this.instance.delta.x < this.instance.scroll.x && "left" !== this.instance.direction && (this.instance.direction = "left")
                    }
                }, {
                    key: "addSpeed",
                    value: function() {
                        this.instance.delta[this.directionAxis] != this.instance.scroll[this.directionAxis] ? this.instance.speed = (this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]) / Math.max(1, Date.now() - this.speedTs) : this.instance.speed = 0
                    }
                }, {
                    key: "initScrollBar",
                    value: function() {
                        if (this.scrollbar = document.createElement("span"), this.scrollbarThumb = document.createElement("span"), this.scrollbar.classList.add("".concat(this.scrollbarClass)), this.scrollbarThumb.classList.add("".concat(this.scrollbarClass, "_thumb")), this.scrollbar.append(this.scrollbarThumb), this.scrollbarContainer ? this.scrollbarContainer.append(this.scrollbar) : document.body.append(this.scrollbar), this.getScrollBar = this.getScrollBar.bind(this), this.releaseScrollBar = this.releaseScrollBar.bind(this), this.moveScrollBar = this.moveScrollBar.bind(this), this.scrollbarThumb.addEventListener("mousedown", this.getScrollBar), window.addEventListener("mouseup", this.releaseScrollBar), window.addEventListener("mousemove", this.moveScrollBar), this.hasScrollbar = !1, "horizontal" == this.direction) {
                            if (this.instance.limit.x + this.windowWidth <= this.windowWidth) return
                        } else if (this.instance.limit.y + this.windowHeight <= this.windowHeight) return;
                        this.hasScrollbar = !0, this.scrollbarBCR = this.scrollbar.getBoundingClientRect(), this.scrollbarHeight = this.scrollbarBCR.height, this.scrollbarWidth = this.scrollbarBCR.width, "horizontal" === this.direction ? this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px") : this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px"), this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect(), this.scrollBarLimit = {
                            x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                            y: this.scrollbarHeight - this.scrollbarThumbBCR.height
                        }
                    }
                }, {
                    key: "reinitScrollBar",
                    value: function() {
                        if (this.hasScrollbar = !1, "horizontal" == this.direction) {
                            if (this.instance.limit.x + this.windowWidth <= this.windowWidth) return
                        } else if (this.instance.limit.y + this.windowHeight <= this.windowHeight) return;
                        this.hasScrollbar = !0, this.scrollbarBCR = this.scrollbar.getBoundingClientRect(), this.scrollbarHeight = this.scrollbarBCR.height, this.scrollbarWidth = this.scrollbarBCR.width, "horizontal" === this.direction ? this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px") : this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px"), this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect(), this.scrollBarLimit = {
                            x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                            y: this.scrollbarHeight - this.scrollbarThumbBCR.height
                        }
                    }
                }, {
                    key: "destroyScrollBar",
                    value: function() {
                        this.scrollbarThumb.removeEventListener("mousedown", this.getScrollBar), window.removeEventListener("mouseup", this.releaseScrollBar), window.removeEventListener("mousemove", this.moveScrollBar), this.scrollbar.remove()
                    }
                }, {
                    key: "getScrollBar",
                    value: function(t) {
                        this.isDraggingScrollbar = !0, this.checkScroll(), this.html.classList.remove(this.scrollingClass), this.html.classList.add(this.draggingClass)
                    }
                }, {
                    key: "releaseScrollBar",
                    value: function(t) {
                        this.isDraggingScrollbar = !1, this.isScrolling && this.html.classList.add(this.scrollingClass), this.html.classList.remove(this.draggingClass)
                    }
                }, {
                    key: "moveScrollBar",
                    value: function(t) {
                        var e = this;
                        this.isDraggingScrollbar && requestAnimationFrame((function() {
                            var i = 100 * (t.clientX - e.scrollbarBCR.left) / e.scrollbarWidth * e.instance.limit.x / 100,
                                n = 100 * (t.clientY - e.scrollbarBCR.top) / e.scrollbarHeight * e.instance.limit.y / 100;
                            n > 0 && n < e.instance.limit.y && (e.instance.delta.y = n), i > 0 && i < e.instance.limit.x && (e.instance.delta.x = i)
                        }))
                    }
                }, {
                    key: "addElements",
                    value: function() {
                        var t = this;
                        this.els = {}, this.parallaxElements = {}, this.el.querySelectorAll("[data-".concat(this.name, "]")).forEach((function(e, i) {
                            var n, r, s, o = Ca(e),
                                a = Object.entries(t.sections).map((function(t) {
                                    var e = Go(t, 2);
                                    return e[0], e[1]
                                })).find((function(t) {
                                    return o.includes(t.el)
                                })),
                                l = e.dataset[t.name + "Class"] || t.class,
                                c = "string" == typeof e.dataset[t.name + "Id"] ? e.dataset[t.name + "Id"] : "el" + i,
                                h = e.dataset[t.name + "Repeat"],
                                u = e.dataset[t.name + "Call"],
                                f = e.dataset[t.name + "Position"],
                                d = e.dataset[t.name + "Delay"],
                                p = e.dataset[t.name + "Direction"],
                                g = "string" == typeof e.dataset[t.name + "Sticky"],
                                m = !!e.dataset[t.name + "Speed"] && parseFloat(e.dataset[t.name + "Speed"]) / 10,
                                v = "string" == typeof e.dataset[t.name + "Offset"] ? e.dataset[t.name + "Offset"].split(",") : t.offset,
                                y = e.dataset[t.name + "Target"],
                                _ = (s = void 0 !== y ? document.querySelector("".concat(y)) : e).getBoundingClientRect();
                            null === a || a.inView ? (n = _.top + t.instance.scroll.y - Oa(s).y, r = _.left + t.instance.scroll.x - Oa(s).x) : (n = _.top - Oa(a.el).y - Oa(s).y, r = _.left - Oa(a.el).x - Oa(s).x);
                            var b = n + s.offsetHeight,
                                w = r + s.offsetWidth,
                                x = {
                                    x: (w - r) / 2 + r,
                                    y: (b - n) / 2 + n
                                };
                            if (g) {
                                var T = e.getBoundingClientRect(),
                                    k = T.top,
                                    S = T.left,
                                    E = {
                                        x: S - r,
                                        y: k - n
                                    };
                                n += window.innerHeight, r += window.innerWidth, b = k + s.offsetHeight - e.offsetHeight - E[t.directionAxis], x = {
                                    x: ((w = S + s.offsetWidth - e.offsetWidth - E[t.directionAxis]) - r) / 2 + r,
                                    y: (b - n) / 2 + n
                                }
                            }
                            h = "false" != h && (null != h || t.repeat);
                            var O = [0, 0];
                            if (v)
                                if ("horizontal" === t.direction) {
                                    for (var C = 0; C < v.length; C++) "string" == typeof v[C] ? v[C].includes("%") ? O[C] = parseInt(v[C].replace("%", "") * t.windowWidth / 100) : O[C] = parseInt(v[C]) : O[C] = v[C];
                                    r += O[0], w -= O[1]
                                } else {
                                    for (C = 0; C < v.length; C++) "string" == typeof v[C] ? v[C].includes("%") ? O[C] = parseInt(v[C].replace("%", "") * t.windowHeight / 100) : O[C] = parseInt(v[C]) : O[C] = v[C];
                                    n += O[0], b -= O[1]
                                } var M = {
                                el: e,
                                id: c,
                                class: l,
                                section: a,
                                top: n,
                                middle: x,
                                bottom: b,
                                left: r,
                                right: w,
                                offset: v,
                                progress: 0,
                                repeat: h,
                                inView: !1,
                                call: u,
                                speed: m,
                                delay: d,
                                position: f,
                                target: s,
                                direction: p,
                                sticky: g
                            };
                            t.els[c] = M, e.classList.contains(l) && t.setInView(t.els[c], c), (!1 !== m || g) && (t.parallaxElements[c] = M)
                        }))
                    }
                }, {
                    key: "addSections",
                    value: function() {
                        var t = this;
                        this.sections = {};
                        var e = this.el.querySelectorAll("[data-".concat(this.name, "-section]"));
                        0 === e.length && (e = [this.el]), e.forEach((function(e, i) {
                            var n = "string" == typeof e.dataset[t.name + "Id"] ? e.dataset[t.name + "Id"] : "section" + i,
                                r = e.getBoundingClientRect(),
                                s = {
                                    x: r.left - 1.5 * window.innerWidth - Oa(e).x,
                                    y: r.top - 1.5 * window.innerHeight - Oa(e).y
                                },
                                o = {
                                    x: s.x + r.width + 2 * window.innerWidth,
                                    y: s.y + r.height + 2 * window.innerHeight
                                },
                                a = "string" == typeof e.dataset[t.name + "Persistent"];
                            e.setAttribute("data-scroll-section-id", n);
                            var l = {
                                el: e,
                                offset: s,
                                limit: o,
                                inView: !1,
                                persistent: a,
                                id: n
                            };
                            t.sections[n] = l
                        }))
                    }
                }, {
                    key: "transform",
                    value: function(t, e, i, n) {
                        var r;
                        if (n) {
                            var s = Oa(t),
                                o = Ea(s.x, e, n),
                                a = Ea(s.y, i, n);
                            r = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(o, ",").concat(a, ",0,1)")
                        } else r = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(e, ",").concat(i, ",0,1)");
                        t.style.webkitTransform = r, t.style.msTransform = r, t.style.transform = r
                    }
                }, {
                    key: "transformElements",
                    value: function(t) {
                        var e = this,
                            i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = this.instance.scroll.x + this.windowWidth,
                            r = this.instance.scroll.y + this.windowHeight,
                            s = {
                                x: this.instance.scroll.x + this.windowMiddle.x,
                                y: this.instance.scroll.y + this.windowMiddle.y
                            };
                        Object.entries(this.parallaxElements).forEach((function(o) {
                            var a = Go(o, 2),
                                l = (a[0], a[1]),
                                c = !1;
                            if (t && (c = 0), l.inView || i) switch (l.position) {
                                case "top":
                                case "left":
                                    c = e.instance.scroll[e.directionAxis] * -l.speed;
                                    break;
                                case "elementTop":
                                    c = (r - l.top) * -l.speed;
                                    break;
                                case "bottom":
                                    c = (e.instance.limit[e.directionAxis] - r + e.windowHeight) * l.speed;
                                    break;
                                case "elementLeft":
                                    c = (n - l.left) * -l.speed;
                                    break;
                                case "right":
                                    c = (e.instance.limit[e.directionAxis] - n + e.windowHeight) * l.speed;
                                    break;
                                default:
                                    c = (s[e.directionAxis] - l.middle[e.directionAxis]) * -l.speed
                            }
                            l.sticky && (c = l.inView ? "horizontal" === e.direction ? e.instance.scroll.x - l.left + window.innerWidth : e.instance.scroll.y - l.top + window.innerHeight : "horizontal" === e.direction ? e.instance.scroll.x < l.left - window.innerWidth && e.instance.scroll.x < l.left - window.innerWidth / 2 ? 0 : e.instance.scroll.x > l.right && e.instance.scroll.x > l.right + 100 && l.right - l.left + window.innerWidth : e.instance.scroll.y < l.top - window.innerHeight && e.instance.scroll.y < l.top - window.innerHeight / 2 ? 0 : e.instance.scroll.y > l.bottom && e.instance.scroll.y > l.bottom + 100 && l.bottom - l.top + window.innerHeight), !1 !== c && ("horizontal" === l.direction || "horizontal" === e.direction && "vertical" !== l.direction ? e.transform(l.el, c, 0, !t && l.delay) : e.transform(l.el, 0, c, !t && l.delay))
                        }))
                    }
                }, {
                    key: "scrollTo",
                    value: function(t) {
                        var e = this,
                            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = parseInt(i.offset) || 0,
                            r = isNaN(parseInt(i.duration)) ? 1e3 : parseInt(i.duration),
                            s = i.easing || [.25, 0, .35, 1],
                            o = !!i.disableLerp,
                            a = !!i.callback && i.callback;
                        if (s = Ia.apply(void 0, $o(s)), "string" == typeof t) {
                            if ("top" === t) t = 0;
                            else if ("bottom" === t) t = this.instance.limit.y;
                            else if ("left" === t) t = 0;
                            else if ("right" === t) t = this.instance.limit.x;
                            else if (!(t = document.querySelector(t))) return
                        } else if ("number" == typeof t) t = parseInt(t);
                        else if (!t || !t.tagName) return void console.warn("`target` parameter is not valid");
                        if ("number" != typeof t) {
                            var l = Ca(t).includes(this.el);
                            if (!l) return;
                            var c = t.getBoundingClientRect(),
                                h = c.top,
                                u = c.left,
                                f = Ca(t),
                                d = f.find((function(t) {
                                    return Object.entries(e.sections).map((function(t) {
                                        var e = Go(t, 2);
                                        return e[0], e[1]
                                    })).find((function(e) {
                                        return e.el == t
                                    }))
                                })),
                                p = 0;
                            p = d ? Oa(d)[this.directionAxis] : -this.instance.scroll[this.directionAxis], n = "horizontal" === this.direction ? u + n - p : h + n - p
                        } else n = t + n;
                        var g = parseFloat(this.instance.delta[this.directionAxis]),
                            m = Math.max(0, Math.min(n, this.instance.limit[this.directionAxis])),
                            v = m - g,
                            y = function(t) {
                                o ? "horizontal" === e.direction ? e.setScroll(g + v * t, e.instance.delta.y) : e.setScroll(e.instance.delta.x, g + v * t) : e.instance.delta[e.directionAxis] = g + v * t
                            };
                        this.animatingScroll = !0, this.stopScrolling(), this.startScrolling();
                        var _ = Date.now(),
                            b = function t() {
                                var i = (Date.now() - _) / r;
                                i > 1 ? (y(1), e.animatingScroll = !1, 0 == r && e.update(), a && a()) : (e.scrollToRaf = requestAnimationFrame(t), y(s(i)))
                            };
                        b()
                    }
                }, {
                    key: "update",
                    value: function() {
                        this.setScrollLimit(), this.addSections(), this.addElements(), this.detectElements(), this.updateScroll(), this.transformElements(!0), this.reinitScrollBar(), this.checkScroll(!0)
                    }
                }, {
                    key: "startScroll",
                    value: function() {
                        this.stop = !1
                    }
                }, {
                    key: "stopScroll",
                    value: function() {
                        this.stop = !0
                    }
                }, {
                    key: "setScroll",
                    value: function(t, e) {
                        this.instance = Fo(Fo({}, this.instance), {}, {
                            scroll: {
                                x: t,
                                y: e
                            },
                            delta: {
                                x: t,
                                y: e
                            },
                            speed: 0
                        })
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        Uo(Ho(i.prototype), "destroy", this).call(this), this.stopScrolling(), this.html.classList.remove(this.smoothClass), this.vs.destroy(), this.destroyScrollBar(), window.removeEventListener("keydown", this.checkKey, !1)
                    }
                }]), i
            }(Jo);
        const ja = function() {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                Ro(this, t), this.options = e, Object.assign(this, Zo, e), this.smartphone = Zo.smartphone, e.smartphone && Object.assign(this.smartphone, e.smartphone), this.tablet = Zo.tablet, e.tablet && Object.assign(this.tablet, e.tablet), this.smooth || "horizontal" != this.direction || console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible"), this.tablet.smooth || "horizontal" != this.tablet.direction || console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (tablet)"), this.smartphone.smooth || "horizontal" != this.smartphone.direction || console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (smartphone)"), this.init()
            }
            return Io(t, [{
                key: "init",
                value: function() {
                    if (this.options.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 || window.innerWidth < this.tablet.breakpoint, this.options.isTablet = this.options.isMobile && window.innerWidth >= this.tablet.breakpoint, this.smooth && !this.options.isMobile || this.tablet.smooth && this.options.isTablet || this.smartphone.smooth && this.options.isMobile && !this.options.isTablet ? this.scroll = new Ya(this.options) : this.scroll = new na(this.options), this.scroll.init(), window.location.hash) {
                        var t = window.location.hash.slice(1, window.location.hash.length),
                            e = document.getElementById(t);
                        e && this.scroll.scrollTo(e)
                    }
                }
            }, {
                key: "update",
                value: function() {
                    this.scroll.update()
                }
            }, {
                key: "start",
                value: function() {
                    this.scroll.startScroll()
                }
            }, {
                key: "stop",
                value: function() {
                    this.scroll.stopScroll()
                }
            }, {
                key: "scrollTo",
                value: function(t, e) {
                    this.scroll.scrollTo(t, e)
                }
            }, {
                key: "setScroll",
                value: function(t, e) {
                    this.scroll.setScroll(t, e)
                }
            }, {
                key: "on",
                value: function(t, e) {
                    this.scroll.setEvents(t, e)
                }
            }, {
                key: "off",
                value: function(t, e) {
                    this.scroll.unsetEvents(t, e)
                }
            }, {
                key: "destroy",
                value: function() {
                    this.scroll.destroy()
                }
            }]), t
        }();
        var Fa = i(614),
            Xa = i.n(Fa),
            Ha = i(48),
            Wa = i.n(Ha),
            qa = i(662),
            Na = i.n(qa);
        Hn.registerPlugin(Eo);
        const Va = new ja({
            el: document.querySelector(".smooth-scroll"),
            smooth: !0
        });
        Va.on("scroll", Eo.update), Eo.scrollerProxy(".smooth-scroll", {
            scrollTop(t) {
                return arguments.length ? Va.scrollTo(t, 0, 0) : Va.scroll.instance.scroll.y
            },
            getBoundingClientRect: () => ({
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            }),
            pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
        });
        const Ua = document.getElementById("banner-name");
        if (new(Xa())(Ua, {
                strings: ["Hiren Dabhi", "WordPress Developer"],
                typeSpeed: 50,
                startDelay: 500,
                backSpeed: 50,
                backDelay: 1e3,
                loop: !0
            }), document.querySelectorAll("a[href^=\\#]:not([href$=\\#])").forEach((t => {
                let e = t.getAttribute("href"),
                    i = document.querySelector(e);
                t.addEventListener("click", (t => {
                    t.preventDefault(), t.stopPropagation(), Va.scrollTo(i)
                }))
            })), Hn.timeline().from(".glass-effect", {
                opacity: 0,
                scale: 0,
                "background-color": "rgb(255, 180, 0)",
                duration: 1,
                ease: "power1.out"
            }).from(".banner-sub-title", {
                opacity: 0,
                y: 20,
                duration: .5,
                ease: "power1.out"
            }).from(".banner-title", {
                opacity: 0,
                y: 20,
                duration: .5,
                ease: "power1.out"
            }, "-=0.2").from(".banner-desc", {
                opacity: 0,
                y: 20,
                duration: .5,
                ease: "power1.out"
            }, "-=0.2").from(".banner-btn", {
                opacity: 0,
                y: 20,
                duration: .5,
                ease: "power1.out"
            }, "-=0.2"), Hn.timeline({
                scrollTrigger: {
                    trigger: ".about-section",
                    scroller: ".smooth-scroll",
                    start: "top 80%"
                }
            }).from(".about-title", {
                opacity: 0,
                y: 20,
                duration: .5,
                ease: "power1.out"
            }).from(".about-sub-title", {
                opacity: 0,
                y: 20,
                duration: .5,
                ease: "power1.out"
            }, "-=0.2").from(".about-section .h4", {
                opacity: 0,
                y: 20,
                duration: .5,
                ease: "power1.out",
                stagger: .5
            }, "-=0.2").from(".about-bio .col-12", {
                opacity: 0,
                y: 20,
                duration: .5,
                ease: "power1.out",
                stagger: .1
            }, "-=0.2").from(".resume-items .item", {
                opacity: 0,
                y: 20,
                duration: 1,
                ease: "power1.out",
                stagger: .3
            }, "-=0.2"), Hn.timeline({
                scrollTrigger: {
                    trigger: ".skill-section",
                    scroller: ".smooth-scroll",
                    start: "top 80%"
                }
            }).from(".skill-title", {
                opacity: 0,
                y: 20,
                duration: .8,
                ease: "power1.out"
            }).from(".skill-layout .card ", {
                opacity: 0,
                y: 20,
                duration: .2,
                ease: "power1.out",
                stagger: .2
            }, "-=0.2").from(".skill-list > li ", {
                opacity: 0,
                y: 20,
                duration: .8,
                ease: "power1.out",
                stagger: .1
            }, "-=0.2"), Hn.timeline({
                scrollTrigger: {
                    trigger: ".contatc-section",
                    scroller: ".smooth-scroll",
                    start: "top 90%"
                }
            }).from(".contact-title", {
                opacity: 0,
                y: 20,
                duration: .8,
                ease: "power1.out"
            }).from(".social-media li", {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "bounce",
                stagger: .1,
                yoyo: "repeat"
            }, "-=0.2").from(".copyrights", {
                opacity: 0,
                y: 20,
                duration: .5,
                ease: "power1.out"
            }, "-=0.5"), Eo.addEventListener("refresh", (() => Va.update())), Eo.refresh(), window.innerWidth >= 767) {
            const t = Wa()({
                diameter: 50,
                borderWidth: 2,
                borderColor: "#ffb400",
                easing: 10
            });
            t.over("a", {
                scale: 1.5,
                background: "#fff",
                borderWidth: 0
            }), t.style.zIndex = 5500, Na().init(document.querySelector(".VanillaTilt"), {
                max: 5,
                speed: 1e3,
                perspective: 2e3
            })
        }
    })()
})();
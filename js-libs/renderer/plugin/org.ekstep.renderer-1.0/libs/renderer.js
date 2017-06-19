Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
    value: function(predicate) {
        if (null == this) throw new TypeError('"this" is null or not defined');
        var o = Object(this), len = o.length >>> 0;
        if ("function" != typeof predicate) throw new TypeError("predicate must be a function");
        for (var thisArg = arguments[1], k = 0; k < len; ) {
            var kValue = o[k];
            if (predicate.call(thisArg, kValue, k, o)) return kValue;
            k++;
        }
    }
}), Array.prototype.filter || (Array.prototype.filter = function(fun) {
    "use strict";
    if (void 0 === this || null === this) throw new TypeError();
    var t = Object(this), len = t.length >>> 0;
    if ("function" != typeof fun) throw new TypeError();
    for (var res = [], thisArg = arguments.length >= 2 ? arguments[1] : void 0, i = 0; i < len; i++) if (i in t) {
        var val = t[i];
        fun.call(thisArg, val, i, t) && res.push(val);
    }
    return res;
}), Array.prototype.forEach || (Array.prototype.forEach = function(callback) {
    var T, k;
    if (null == this) throw new TypeError("this is null or not defined");
    var O = Object(this), len = O.length >>> 0;
    if ("function" != typeof callback) throw new TypeError(callback + " is not a function");
    for (arguments.length > 1 && (T = arguments[1]), k = 0; k < len; ) {
        var kValue;
        k in O && (kValue = O[k], callback.call(T, kValue, k, O)), k++;
    }
}), Array.prototype.every || (Array.prototype.every = function(callbackfn, thisArg) {
    "use strict";
    var T, k;
    if (null == this) throw new TypeError("this is null or not defined");
    var O = Object(this), len = O.length >>> 0;
    if ("function" != typeof callbackfn) throw new TypeError();
    for (arguments.length > 1 && (T = thisArg), k = 0; k < len; ) {
        var kValue;
        if (k in O) {
            kValue = O[k];
            if (!callbackfn.call(T, kValue, k, O)) return !1;
        }
        k++;
    }
    return !0;
}), Array.prototype.indexOf || (Array.prototype.indexOf = function(searchElement, fromIndex) {
    var k;
    if (null == this) throw new TypeError('"this" is null or not defined');
    var o = Object(this), len = o.length >>> 0;
    if (0 === len) return -1;
    var n = 0 | fromIndex;
    if (n >= len) return -1;
    for (k = Math.max(n >= 0 ? n : len - Math.abs(n), 0); k < len; ) {
        if (k in o && o[k] === searchElement) return k;
        k++;
    }
    return -1;
}), Array.prototype.map || (Array.prototype.map = function(callback) {
    var T, A, k;
    if (null == this) throw new TypeError("this is null or not defined");
    var O = Object(this), len = O.length >>> 0;
    if ("function" != typeof callback) throw new TypeError(callback + " is not a function");
    for (arguments.length > 1 && (T = arguments[1]), A = new Array(len), k = 0; k < len; ) {
        var kValue, mappedValue;
        k in O && (kValue = O[k], mappedValue = callback.call(T, kValue, k, O), A[k] = mappedValue), 
        k++;
    }
    return A;
}), Array.prototype.lastIndexOf || (Array.prototype.lastIndexOf = function(searchElement) {
    "use strict";
    if (void 0 === this || null === this) throw new TypeError();
    var n, k, t = Object(this), len = t.length >>> 0;
    if (0 === len) return -1;
    for (n = len - 1, arguments.length > 1 && (n = Number(arguments[1]), n != n ? n = 0 : 0 != n && n != 1 / 0 && n != -1 / 0 && (n = (n > 0 || -1) * Math.floor(Math.abs(n)))), 
    k = n >= 0 ? Math.min(n, len - 1) : len - Math.abs(n); k >= 0; k--) if (k in t && t[k] === searchElement) return k;
    return -1;
}), Array.prototype.reduce || Object.defineProperty(Array.prototype, "reduce", {
    value: function(callback) {
        if (null === this) throw new TypeError("Array.prototype.reduce called on null or undefined");
        if ("function" != typeof callback) throw new TypeError(callback + " is not a function");
        var value, o = Object(this), len = o.length >>> 0, k = 0;
        if (arguments.length >= 2) value = arguments[1]; else {
            for (;k < len && !(k in o); ) k++;
            if (k >= len) throw new TypeError("Reduce of empty array with no initial value");
            value = o[k++];
        }
        for (;k < len; ) k in o && (value = callback(value, o[k], k, o)), k++;
        return value;
    }
}), "function" != typeof Array.prototype.reduceRight && (Array.prototype.reduceRight = function(callback) {
    "use strict";
    if (null === this || void 0 === this) throw new TypeError("Array.prototype.reduce called on null or undefined");
    if ("function" != typeof callback) throw new TypeError(callback + " is not a function");
    var value, t = Object(this), len = t.length >>> 0, k = len - 1;
    if (arguments.length >= 2) value = arguments[1]; else {
        for (;k >= 0 && !(k in t); ) k--;
        if (k < 0) throw new TypeError("Reduce of empty array with no initial value");
        value = t[k--];
    }
    for (;k >= 0; k--) k in t && (value = callback(value, t[k], k, t));
    return value;
}), Array.isArray || (Array.isArray = function(arg) {
    return "[object Array]" === Object.prototype.toString.call(arg);
}), function() {
    var initializing = !1, fnTest = /xyz/.test(function() {
        xyz;
    }) ? /\b_super\b/ : /.*/;
    this.Class = function() {}, Class.extend = function(prop) {
        function Class() {
            !initializing && this.init && this.init.apply(this, arguments);
        }
        var _super = this.prototype;
        initializing = !0;
        var prototype = new this();
        initializing = !1;
        for (var name in prop) prototype[name] = "function" == typeof prop[name] && "function" == typeof _super[name] && fnTest.test(prop[name]) ? function(name, fn) {
            return function() {
                var tmp = this._super;
                this._super = _super[name];
                var ret = fn.apply(this, arguments);
                return this._super = tmp, ret;
            };
        }(name, prop[name]) : prop[name];
        return Class.prototype = prototype, Class.prototype.constructor = Class, Class.extend = arguments.callee, 
        Class;
    };
}(), function(root, factory) {
    "object" == typeof exports && "object" == typeof module ? module.exports = factory() : "function" == typeof define && define.amd ? define("EventBus", [], factory) : "object" == typeof exports ? exports.EventBus = factory() : root.EventBus = factory();
}(this, function() {
    var EventBusClass = {};
    return EventBusClass = function() {
        this.listeners = {};
    }, EventBusClass.prototype = {
        addEventListener: function(type, callback, scope) {
            for (var args = [], numOfArgs = arguments.length, i = 0; i < numOfArgs; i++) args.push(arguments[i]);
            args = args.length > 3 ? args.splice(3, args.length - 1) : [], void 0 !== this.listeners[type] ? this.listeners[type].push({
                scope: scope,
                callback: callback,
                args: args
            }) : this.listeners[type] = [ {
                scope: scope,
                callback: callback,
                args: args
            } ];
        },
        removeEventListener: function(type, callback, scope) {
            if (void 0 !== this.listeners[type]) {
                for (var numOfCallbacks = this.listeners[type].length, newArray = [], i = 0; i < numOfCallbacks; i++) {
                    var listener = this.listeners[type][i];
                    listener.scope == scope && listener.callback == callback || newArray.push(listener);
                }
                this.listeners[type] = newArray;
            }
        },
        hasEventListener: function(type, callback, scope) {
            if (void 0 !== this.listeners[type]) {
                var numOfCallbacks = this.listeners[type].length;
                if (void 0 === callback && void 0 === scope) return numOfCallbacks > 0;
                for (var i = 0; i < numOfCallbacks; i++) {
                    var listener = this.listeners[type][i];
                    if ((!scope || listener.scope == scope) && listener.callback == callback) return !0;
                }
            }
            return !1;
        },
        dispatch: function(type, target) {
            for (var numOfListeners = 0, event = {
                type: type,
                target: target
            }, args = [], numOfArgs = arguments.length, i = 0; i < numOfArgs; i++) args.push(arguments[i]);
            if (args = args.length > 2 ? args.splice(2, args.length - 1) : [], args = [ event ].concat(args), 
            void 0 !== this.listeners[type]) for (var numOfCallbacks = this.listeners[type].length, i = 0; i < numOfCallbacks; i++) {
                var listener = this.listeners[type][i];
                if (listener && listener.callback) {
                    var concatArgs = args.concat(listener.args);
                    listener.callback.apply(listener.scope, concatArgs), numOfListeners += 1;
                }
            }
        },
        getEvents: function() {
            var str = "";
            for (var type in this.listeners) for (var numOfCallbacks = this.listeners[type].length, i = 0; i < numOfCallbacks; i++) {
                var listener = this.listeners[type][i];
                str += listener.scope && listener.scope.className ? listener.scope.className : "anonymous", 
                str += " listen for '" + type + "'\n";
            }
            return str;
        }
    }, new EventBusClass();
}), function(r, t, g) {
    function u(a, b, h) {
        a.addEventListener ? a.addEventListener(b, h, !1) : a.attachEvent("on" + b, h);
    }
    function y(a) {
        if ("keypress" == a.type) {
            var b = String.fromCharCode(a.which);
            return a.shiftKey || (b = b.toLowerCase()), b;
        }
        return k[a.which] ? k[a.which] : p[a.which] ? p[a.which] : String.fromCharCode(a.which).toLowerCase();
    }
    function D(a) {
        var b = [];
        return a.shiftKey && b.push("shift"), a.altKey && b.push("alt"), a.ctrlKey && b.push("ctrl"), 
        a.metaKey && b.push("meta"), b;
    }
    function v(a) {
        return "shift" == a || "ctrl" == a || "alt" == a || "meta" == a;
    }
    function z(a, b) {
        var h, c, e, g = [];
        for (h = a, "+" === h ? h = [ "+" ] : (h = h.replace(/\+{2}/g, "+plus"), h = h.split("+")), 
        e = 0; e < h.length; ++e) c = h[e], A[c] && (c = A[c]), b && "keypress" != b && B[c] && (c = B[c], 
        g.push("shift")), v(c) && g.push(c);
        if (h = c, !(e = b)) {
            if (!n) {
                n = {};
                for (var l in k) 95 < l && 112 > l || k.hasOwnProperty(l) && (n[k[l]] = l);
            }
            e = n[h] ? "keydown" : "keypress";
        }
        return "keypress" == e && g.length && (e = "keydown"), {
            key: c,
            modifiers: g,
            action: e
        };
    }
    function C(a, b) {
        return null !== a && a !== t && (a === b || C(a.parentNode, b));
    }
    function c(a) {
        function b(a) {
            a = a || {};
            var m, b = !1;
            for (m in n) a[m] ? b = !0 : n[m] = 0;
            b || (w = !1);
        }
        function h(a, b, m, f, c, h) {
            var g, e, k = [], l = m.type;
            if (!d._callbacks[a]) return [];
            for ("keyup" == l && v(a) && (b = [ a ]), g = 0; g < d._callbacks[a].length; ++g) if (e = d._callbacks[a][g], 
            (f || !e.seq || n[e.seq] == e.level) && l == e.action) {
                var q;
                (q = "keypress" == l && !m.metaKey && !m.ctrlKey) || (q = e.modifiers, q = b.sort().join(",") === q.sort().join(",")), 
                q && (q = f && e.seq == f && e.level == h, (!f && e.combo == c || q) && d._callbacks[a].splice(g, 1), 
                k.push(e));
            }
            return k;
        }
        function g(a, b, m, f) {
            d.stopCallback(b, b.target || b.srcElement, m, f) || !1 !== a(b, m) || (b.preventDefault ? b.preventDefault() : b.returnValue = !1, 
            b.stopPropagation ? b.stopPropagation() : b.cancelBubble = !0);
        }
        function e(a) {
            "number" != typeof a.which && (a.which = a.keyCode);
            var b = y(a);
            b && ("keyup" == a.type && x === b ? x = !1 : d.handleKey(b, D(a), a));
        }
        function k(a, c, m, f) {
            function e(c) {
                return function() {
                    w = c, ++n[a], clearTimeout(r), r = setTimeout(b, 1e3);
                };
            }
            function h(c) {
                g(m, c, a), "keyup" !== f && (x = y(c)), setTimeout(b, 10);
            }
            for (var d = n[a] = 0; d < c.length; ++d) {
                var p = d + 1 === c.length ? h : e(f || z(c[d + 1]).action);
                l(c[d], p, f, a, d);
            }
        }
        function l(a, b, c, f, e) {
            d._directMap[a + ":" + c] = b, a = a.replace(/\s+/g, " ");
            var g = a.split(" ");
            1 < g.length ? k(a, g, b, c) : (c = z(a, c), d._callbacks[c.key] = d._callbacks[c.key] || [], 
            h(c.key, c.modifiers, {
                type: c.action
            }, f, a, e), d._callbacks[c.key][f ? "unshift" : "push"]({
                callback: b,
                modifiers: c.modifiers,
                action: c.action,
                seq: f,
                level: e,
                combo: a
            }));
        }
        var d = this;
        if (a = a || t, !(d instanceof c)) return new c(a);
        d.target = a, d._callbacks = {}, d._directMap = {};
        var r, n = {}, x = !1, p = !1, w = !1;
        d._handleKey = function(a, c, e) {
            var d, f = h(a, c, e);
            c = {};
            var k = 0, l = !1;
            for (d = 0; d < f.length; ++d) f[d].seq && (k = Math.max(k, f[d].level));
            for (d = 0; d < f.length; ++d) f[d].seq ? f[d].level == k && (l = !0, c[f[d].seq] = 1, 
            g(f[d].callback, e, f[d].combo, f[d].seq)) : l || g(f[d].callback, e, f[d].combo);
            f = "keypress" == e.type && p, e.type != w || v(a) || f || b(c), p = l && "keydown" == e.type;
        }, d._bindMultiple = function(a, b, c) {
            for (var d = 0; d < a.length; ++d) l(a[d], b, c);
        }, u(a, "keypress", e), u(a, "keydown", e), u(a, "keyup", e);
    }
    if (r) {
        var n, k = {
            8: "backspace",
            9: "tab",
            13: "enter",
            16: "shift",
            17: "ctrl",
            18: "alt",
            20: "capslock",
            27: "esc",
            32: "space",
            33: "pageup",
            34: "pagedown",
            35: "end",
            36: "home",
            37: "left",
            38: "up",
            39: "right",
            40: "down",
            45: "ins",
            46: "del",
            91: "meta",
            93: "meta",
            224: "meta"
        }, p = {
            106: "*",
            107: "+",
            109: "-",
            110: ".",
            111: "/",
            186: ";",
            187: "=",
            188: ",",
            189: "-",
            190: ".",
            191: "/",
            192: "`",
            219: "[",
            220: "\\",
            221: "]",
            222: "'"
        }, B = {
            "~": "`",
            "!": "1",
            "@": "2",
            "#": "3",
            $: "4",
            "%": "5",
            "^": "6",
            "&": "7",
            "*": "8",
            "(": "9",
            ")": "0",
            _: "-",
            "+": "=",
            ":": ";",
            '"': "'",
            "<": ",",
            ">": ".",
            "?": "/",
            "|": "\\"
        }, A = {
            option: "alt",
            command: "meta",
            return: "enter",
            escape: "esc",
            plus: "+",
            mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "meta" : "ctrl"
        };
        for (g = 1; 20 > g; ++g) k[111 + g] = "f" + g;
        for (g = 0; 9 >= g; ++g) k[g + 96] = g;
        c.prototype.bind = function(a, b, c) {
            return a = a instanceof Array ? a : [ a ], this._bindMultiple.call(this, a, b, c), 
            this;
        }, c.prototype.unbind = function(a, b) {
            return this.bind.call(this, a, function() {}, b);
        }, c.prototype.trigger = function(a, b) {
            return this._directMap[a + ":" + b] && this._directMap[a + ":" + b]({}, a), this;
        }, c.prototype.reset = function() {
            return this._callbacks = {}, this._directMap = {}, this;
        }, c.prototype.stopCallback = function(a, b) {
            return !(-1 < (" " + b.className + " ").indexOf(" mousetrap ") || C(b, this.target)) && ("INPUT" == b.tagName || "SELECT" == b.tagName || "TEXTAREA" == b.tagName || b.isContentEditable);
        }, c.prototype.handleKey = function() {
            return this._handleKey.apply(this, arguments);
        }, c.addKeycodes = function(a) {
            for (var b in a) a.hasOwnProperty(b) && (k[b] = a[b]);
            n = null;
        }, c.init = function() {
            var b, a = c(t);
            for (b in a) "_" !== b.charAt(0) && (c[b] = function(b) {
                return function() {
                    return a[b].apply(a, arguments);
                };
            }(b));
        }, c.init(), r.Mousetrap = c, "undefined" != typeof module && module.exports && (module.exports = c), 
        "function" == typeof define && define.amd && define(function() {
            return c;
        });
    }
}("undefined" != typeof window ? window : null, "undefined" != typeof window ? document : null), 
window.org = {
    ekstep: {}
};

var plugin_framework = function() {};

plugin_framework.prototype.initialize = function(config) {
    if (config = config || {}, org.ekstep.pluginframework.config = org.ekstep.pluginframework.config || {}, 
    !config.env) throw "Framework should be initialized with environment!";
    org.ekstep.pluginframework.env = config.env, org.ekstep.pluginframework.jQuery = config.jQuery || window.$, 
    org.ekstep.pluginframework.async = config.async || window.async, org.ekstep.pluginframework.config.build_number = config.build_number || "BUILD_NUMBER", 
    org.ekstep.pluginframework.config.pluginRepo = config.pluginRepo || "/content-plugins";
}, window.org.ekstep.pluginframework = new plugin_framework(), plugin_framework = void 0;

var services_framework = function() {};

window.org.ekstep.services = new services_framework(), services_framework = void 0, 
org.ekstep.pluginframework.resourceManager = new (Class.extend({
    init: function() {},
    buildNumber: void 0,
    registeredRepos: [],
    initialize: function() {},
    discoverManifest: function(pluginId, pluginVer, cb, publishedTime) {
        var ayncTasks = [];
        this.registeredRepos.forEach(function(repo, index) {
            var Fns = function() {
                return 0 == index ? function(callback) {
                    repo.discoverManifest(pluginId, pluginVer, callback, publishedTime);
                } : function(data, callback) {
                    void 0 == data.manifest ? repo.discoverManifest(pluginId, pluginVer, callback, publishedTime) : callback(null, data);
                };
            };
            ayncTasks.push(Fns());
        }), org.ekstep.pluginframework.async.waterfall(ayncTasks, function(err, result) {
            void 0 !== result.manifest ? cb(void 0, result) : cb("Plugin not found in any repo or manifest", void 0);
        });
    },
    addRepo: function(repo, position) {
        this.registeredRepos.find(function(rp) {
            return rp.id == repo.id;
        }) ? console.error(repo.id + ": Repo already registered!") : "number" == typeof position ? this.registeredRepos.splice(position, 0, repo) : this.registeredRepos.push(repo);
    },
    getResource: function(pluginId, pluginVer, src, dataType, repo, callback, publishedTime) {
        var resource = repo.resolveResource(pluginId, pluginVer, src);
        this.loadResource(resource, dataType, callback, publishedTime);
    },
    loadExternalPluginResource: function(type, pluginId, pluginVer, src, repo, publishedTime, callback) {
        var resource = repo.resolveResource(pluginId, pluginVer, src) + "?" + (publishedTime || "");
        this.loadExternalResource(resource, type, publishedTime, callback);
    },
    loadExternalResource: function(resource, type, publishedTime, callback) {
        switch (type) {
          case "js":
            callback ? this.loadResource(resource, "script", callback, publishedTime) : org.ekstep.pluginframework.jQuery("body").append($("<script type='text/javascript' src=" + resource + ">"));
            break;

          case "css":
            org.ekstep.pluginframework.jQuery("head").append("<link rel='stylesheet' type='text/css' href='" + resource + "'>"), 
            callback && callback();
            break;

          default:
            callback && callback();
        }
    },
    loadResource: function(url, dataType, callback, publishedTime) {
        url = url + "?" + (org.ekstep.pluginframework.config ? org.ekstep.pluginframework.config.build_number : ""), 
        publishedTime && (url = url + "&" + publishedTime), org.ekstep.pluginframework.jQuery.ajax({
            async: !1,
            url: url,
            dataType: dataType
        }).done(function(data) {
            callback(null, data);
        }).fail(function(jqXHR, textStatus, errorThrown) {
            "OK" === jqXHR.statusText && console.log("Unable to load resource:", url, "error:", errorThrown), 
            callback(errorThrown);
        });
    }
}))(), org.ekstep.pluginframework.eventManager = new (Class.extend({
    enableEvents: !0,
    addEventListener: function(type, callback, scope) {
        EventBus.addEventListener(type, callback, scope);
    },
    dispatchEvent: function(type, data, target) {
        this.enableEvents && EventBus.dispatch(type, target, data);
    },
    removeEventListener: function(type, callback, scope) {
        EventBus.removeEventListener(type, callback, scope);
    }
}))(), org.ekstep.pluginframework.pluginManager = new (Class.extend({
    pluginManifests: {},
    plugins: {},
    pluginObjs: {},
    pluginInstances: {},
    pluginVisited: {},
    errors: [],
    init: function() {
        console.log("Plugin manager initialized");
    },
    _registerPlugin: function(pluginId, pluginVer, plugin, manifest, repo) {
        this.plugins[pluginId] = {
            p: plugin,
            m: manifest,
            repo: repo
        }, this._registerNameSpace(pluginId, plugin), manifest && (this.pluginManifests[manifest.id] = manifest), 
        org.ekstep.pluginframework.eventManager.dispatchEvent("plugin:load", {
            plugin: pluginId,
            version: pluginVer
        }), org.ekstep.pluginframework.eventManager.dispatchEvent(pluginId + ":load");
        var p = new plugin(manifest);
        manifest && (this.pluginObjs[manifest.id] = p);
    },
    registerPlugin: function(manifest, plugin, repo) {
        repo = repo || org.ekstep.pluginframework.publishedRepo, this._registerPlugin(manifest.id, manifest.ver, plugin, manifest, repo);
    },
    loadCustomPlugin: function(dependency, callback, publishedTime) {
        var instance = this;
        org.ekstep.pluginframework.resourceManager.loadResource(dependency.src, "text", function(err, data) {
            if (err) console.error("Unable to load editor plugin", "plugin:" + dependency.id + "-" + dependency.ver, "resource:", "Error:", err); else try {
                instance.isPluginDefined(dependency.id) ? console.info("Plugin is already registered: ", dependency.id) : (data = eval(data), 
                instance._registerPlugin(dependency.id, void 0, data, void 0, void 0));
            } catch (e) {
                console.error("Error while loading plugin", "plugin:" + dependency.id + "-" + dependency.ver, "Error:", e);
            }
            callback && callback();
        }, publishedTime);
    },
    loadPluginByManifest: function(manifest, repo, pluginType, publishedTime) {
        var instance = this, scope = org.ekstep.pluginframework.env;
        org.ekstep.pluginframework.resourceManager.getResource(manifest.id, manifest.ver, manifest[scope].main, "text", repo, function(err, data) {
            if (err) console.error("Unable to load editor plugin", "plugin:" + manifest.id + "-" + manifest.ver, "resource:" + manifest[scope].main, "Error:", err); else try {
                instance.isPluginDefined(manifest.id) ? console.info("Plugin is already registered: ", manifest.id) : "library" == pluginType ? org.ekstep.pluginframework.jQuery.globalEval(data) : data && instance.registerPlugin(manifest, eval(data), repo);
            } catch (e) {
                console.error("Error while loading plugin", "plugin:" + manifest.id + "-" + manifest.ver, "Error:", e);
            }
        }, publishedTime);
    },
    _registerNameSpace: function(pluginId, clazz) {
        var names = pluginId.split("."), baseNameSpace = names[0], lastKey = names[names.length - 1];
        names.splice(0, 1);
        var pluginClazz = "editor" === org.ekstep.pluginframework.env ? Class.extend({
            init: function(data, parent, override) {
                org.ekstep.pluginframework.pluginManager.invoke(pluginId, data, parent, override);
            }
        }) : Class.extend({
            init: function(data, parent, stage, theme) {
                org.ekstep.pluginframework.pluginManager.invokeRenderer(pluginId, data, parent, stage, theme);
            }
        });
        pluginClazz.extend = function(subClazz) {
            return clazz.extend(subClazz);
        }, names.length > 0 ? (window[baseNameSpace] || (window[baseNameSpace] = {}), names.reduce(function(o, s) {
            var val = s === lastKey ? pluginClazz : {};
            return void 0 === o[s] ? o[s] = val : o[s];
        }, window[baseNameSpace])) : void 0 === window[baseNameSpace] && (window[baseNameSpace] = pluginClazz);
    },
    loadAndInitPlugin: function(pluginId, version, publishedTime, parent) {
        if (this.loadPluginWithDependencies(pluginId, version, void 0, publishedTime, function() {}), 
        this.isPluginDefined(pluginId)) {
            var pluginManifest = this.getPluginManifest(pluginId);
            return pluginManifest.type && "widget" === pluginManifest.type.toLowerCase() && this.invoke(pluginId, JSON.parse(JSON.stringify(pluginManifest[org.ekstep.pluginframework.env]["init-data"] || {})), parent), 
            0;
        }
        return 1;
    },
    loadPluginWithDependencies: function(pluginId, pluginVer, pluginType, publishedTime, callback) {
        var instance = this;
        this.plugins[pluginId] || this.pluginVisited[pluginId] ? (console.log('A plugin with id "' + pluginId + '" and ver "' + pluginVer + '" is already loaded'), 
        callback()) : org.ekstep.pluginframework.resourceManager.discoverManifest(pluginId, pluginVer, function(err, data) {
            err || void 0 == data ? (console.error("Unable to load plugin manifest", "plugin:" + pluginId + "-" + pluginVer, "Error:", err), 
            callback()) : (instance.pluginVisited[pluginId] = !0, instance.loadManifestDependencies(data.manifest.dependencies, publishedTime, function() {
                if ("renderer" === pluginType) callback(); else {
                    var queue = instance.queueDependencies(data.manifest, data.repo, publishedTime);
                    console.log("queue.length", queue.length()), queue.length() > 0 ? queue.drain = function() {
                        instance.loadPluginByManifest(data.manifest, data.repo, pluginType, publishedTime), 
                        callback();
                    } : (instance.loadPluginByManifest(data.manifest, data.repo, pluginType, publishedTime), 
                    callback());
                }
            }));
        }, publishedTime);
    },
    queueDependencies: function(manifest, repo, publishedTime) {
        var scope = org.ekstep.pluginframework.env, queue = org.ekstep.pluginframework.async.queue(function(task, callback) {
            "plugin" == task.type ? "renderer" == org.ekstep.pluginframework.env ? instance.loadCustomPlugin({
                id: task.plugin,
                src: task.repo.resolveResource(task.id, task.ver, task.src)
            }, callback, void 0) : instance.loadPluginWithDependencies(task.plugin, task.ver, task.type, publishedTime, callback) : org.ekstep.pluginframework.resourceManager.loadExternalPluginResource(task.type, task.id, task.ver, task.src, task.repo, task.publishedTime, callback);
        }, 1), instance = this;
        return Array.isArray(manifest[scope].dependencies) && manifest[scope].dependencies.forEach(function(dependency) {
            "plugin" == dependency.type ? "renderer" == org.ekstep.pluginframework.env ? queue.push({
                type: dependency.type,
                id: manifest.id,
                ver: manifest.ver,
                src: dependency.src,
                repo: repo,
                plugin: dependency.id
            }, function() {}) : queue.push(dependency, function() {}) : "js" != dependency.type && "css" != dependency.type || queue.push({
                type: dependency.type,
                id: manifest.id,
                ver: manifest.ver,
                src: dependency.src,
                repo: repo,
                publishedTime: publishedTime
            }, function() {});
        }), queue;
    },
    loadManifestDependencies: function(dependencies, publishedTime, callback) {
        var instance = this;
        if (Array.isArray(dependencies) && dependencies.length > 0) {
            var queue = org.ekstep.pluginframework.async.queue(function(plugin, pluginCallback) {
                instance.loadPluginWithDependencies(plugin.id, plugin.ver, plugin.type, plugin.pt, pluginCallback);
            }, 1);
            dependencies.forEach(function(dep) {
                "renderer" == org.ekstep.pluginframework.env ? dep.scope != org.ekstep.pluginframework.env && "all" != dep.scope || queue.push({
                    id: dep.plugin,
                    ver: dep.ver,
                    type: dep.type,
                    pt: publishedTime
                }, function(err) {}) : queue.push({
                    id: dep.plugin,
                    ver: dep.ver,
                    type: dep.type,
                    pt: publishedTime
                }, function(err) {});
            }), queue.length() > 0 ? queue.drain = function() {
                callback();
            } : callback();
        } else callback();
    },
    isManifestDefined: function(id) {
        return !!this.pluginManifests[id];
    },
    isPluginDefined: function(id) {
        return !!this.plugins[id];
    },
    loadPlugin: function(pluginId, pluginVer, callback) {
        this.loadPluginWithDependencies(pluginId, pluginVer, "plugin", void 0, function() {
            console.log("Plugin loaded: ", pluginId), callback && callback();
        });
    },
    loadAllPlugins: function(plugins, otherDependencies, callback) {
        var instance = this;
        if (Array.isArray(plugins) && plugins.length) {
            var preloadPlugin = plugins.find(function(plugin) {
                return !0 === plugin.preload || "true" === plugin.preload;
            });
            preloadPlugin ? instance.loadPlugin(preloadPlugin.id, preloadPlugin.ver, function() {
                instance._loadPlugins(plugins, otherDependencies, callback);
            }) : instance._loadPlugins(plugins, otherDependencies, callback);
        } else Array.isArray(otherDependencies) && otherDependencies.length ? instance.loadOtherDependencies(otherDependencies, callback) : callback();
    },
    _loadPlugins: function(plugins, otherDependencies, callback) {
        var instance = this, q = org.ekstep.pluginframework.async.queue(function(plugin, pluginCallback) {
            instance.loadPluginWithDependencies(plugin.id, plugin.ver, plugin.type, plugin.pt, pluginCallback);
        }, 6);
        q.drain = function() {
            instance.loadOtherDependencies(otherDependencies, callback);
        }, plugins.forEach(function(plugin) {
            q.push({
                id: plugin.id,
                ver: plugin.ver,
                type: plugin.type,
                pt: void 0
            }, function(err) {});
        });
    },
    loadOtherDependencies: function(otherDependencies, callback) {
        var instance = this;
        if (Array.isArray(otherDependencies) && otherDependencies.length) {
            var queue = org.ekstep.pluginframework.async.queue(function(dependency, cb) {
                "plugin" == dependency.type ? instance.loadCustomPlugin(dependency, cb) : org.ekstep.pluginframework.resourceManager.loadExternalResource(dependency.src, dependency.type, void 0, cb);
            }, 1);
            otherDependencies.forEach(function(dep) {
                queue.push(dep, function(err) {});
            }), queue.length() > 0 ? queue.drain = function() {
                callback && callback();
            } : callback && callback();
        } else callback && callback();
    },
    invoke: function(id, data, parent, override) {
        var instance = this, p = void 0, plugin = this.plugins[id];
        if (plugin) {
            var pluginClass = override ? plugin.p.extend(override) : plugin.p, pluginManifest = plugin.m;
            try {
                Array.isArray(data) ? data.forEach(function(d) {
                    p = new pluginClass(pluginManifest, d, parent), instance.addPluginInstance(p), p.initPlugin(), 
                    org.ekstep.pluginframework.eventManager.dispatchEvent("plugin:add", {
                        plugin: pluginManifest.id,
                        version: pluginManifest.ver,
                        instanceId: p.id
                    }), org.ekstep.pluginframework.eventManager.dispatchEvent(pluginManifest.id + ":add");
                }) : (p = new pluginClass(pluginManifest, data, parent), instance.addPluginInstance(p), 
                p.initPlugin(), org.ekstep.pluginframework.eventManager.dispatchEvent("plugin:add", {
                    plugin: pluginManifest.id,
                    version: pluginManifest.ver,
                    instanceId: p.id
                }), org.ekstep.pluginframework.eventManager.dispatchEvent(pluginManifest.id + ":add"));
            } catch (e) {
                throw delete instance.pluginInstances[p.id], e;
            }
        } else this.addError("No plugin found for - " + id);
        return p;
    },
    invokeRenderer: function(id, data, parent, stage, theme) {
        var instance = this, p = void 0, plugin = this.plugins[id];
        if (plugin) try {
            var pluginClass = plugin.p, pluginManifest = plugin.m || {
                id: id,
                ver: void 0
            };
            Array.isArray(data) ? data.forEach(function(d) {
                p = new pluginClass(d, parent, stage, theme), instance.addPluginInstance(p), org.ekstep.pluginframework.eventManager.dispatchEvent("plugin:add", {
                    plugin: pluginManifest.id,
                    version: pluginManifest.ver,
                    instanceId: p.id
                }), org.ekstep.pluginframework.eventManager.dispatchEvent(pluginManifest.id + ":add");
            }) : (p = new pluginClass(data, parent, stage, theme), instance.addPluginInstance(p), 
            org.ekstep.pluginframework.eventManager.dispatchEvent("plugin:add", {
                plugin: pluginManifest.id,
                version: pluginManifest.ver,
                instanceId: p.id
            }), org.ekstep.pluginframework.eventManager.dispatchEvent(pluginManifest.id + ":add"));
        } catch (e) {
            throw delete instance.pluginInstances[p.id], e;
        } else this.addError("No plugin found for - " + id);
        return p;
    },
    addPluginInstance: function(pluginObj) {
        this.pluginInstances[pluginObj.id] = pluginObj;
    },
    removePluginInstance: function(pluginObj) {
        pluginObj && pluginObj.remove();
    },
    getPluginInstance: function(id) {
        return this.pluginInstances[id];
    },
    getPluginInstances: function() {
        return this.pluginInstances;
    },
    getPluginManifest: function(id) {
        var plugin = this.plugins[id];
        return plugin ? plugin.m : void 0;
    },
    addError: function(error) {
        this.errors.push(error);
    },
    getErrors: function() {
        return this.errors;
    },
    cleanUp: function() {
        this.pluginInstances = {}, this.pluginManifests = {}, this.pluginVisited = {}, this.plugins = {}, 
        this.errors = [];
    },
    getPlugins: function() {
        return Object.keys(this.plugins);
    },
    getPluginType: function(id) {
        return this.pluginInstances[id] ? this.pluginInstances[id].getType() : "";
    },
    loadPluginResource: function(pluginId, pluginVer, src, dataType, callback) {
        this.plugins[pluginId] ? org.ekstep.pluginframework.resourceManager.getResource(pluginId, pluginVer, src, dataType, this.plugins[pluginId].repo, callback) : callback(new Error("unable load plugin resource " + src), void 0);
    },
    getPluginVersion: function(id) {
        return this.pluginInstances[id] ? this.pluginInstances[id].getVersion() : "";
    },
    resolvePluginResource: function(id, ver, resource) {
        return !(!this.plugins[id] || !this.plugins[id].repo) && this.plugins[id].repo.resolveResource(id, ver, resource);
    }
}))(), org.ekstep.pluginframework.keyboardManager = new (Class.extend({
    registry: {},
    initialize: function() {},
    registerKeyCombination: function(command, callback) {
        if (void 0 === command || void 0 === callback) throw "The given key combination is invalid.";
        Mousetrap.bind(command, callback);
    },
    resolveKeyCombination: function(event) {}
}))(), org.ekstep.services.iService = Class.extend({
    getBaseURL: function() {
        return org.ekstep.services.config.baseURL;
    },
    getAPISlug: function() {
        return org.ekstep.services.config.apislug;
    },
    init: function(config) {
        this.initService(config);
    },
    initService: function(config) {},
    _dispatchTelemetry: function(data) {
        var status = data.res.responseCode || data.res.statusText;
        org.ekstep.services.telemetryService.apiCall({
            path: data.url,
            method: data.method,
            request: data.request,
            response: "",
            responseTime: data.res.responseTime,
            status: status,
            uip: ""
        });
    },
    get: function(url, config, cb) {
        var requestTimestamp, instance = this;
        if (config = config || {}, config.headers = config.headers || {}, "function" != typeof cb) throw "iservice expects callback to be function";
        org.ekstep.pluginframework.jQuery.ajax({
            type: "GET",
            url: url,
            headers: config.headers,
            beforeSend: function(xhrObject, settings) {
                requestTimestamp = new Date().getTime();
            },
            success: function(res) {
                res.responseTime = new Date().getTime() - requestTimestamp, instance._dispatchTelemetry({
                    url: url,
                    method: "GET",
                    request: "",
                    res: res
                }), res = {
                    data: res
                }, cb(null, res);
            },
            error: function(err) {
                err.responseTime = new Date().getTime() - requestTimestamp, cb(err, null), instance._dispatchTelemetry({
                    url: url,
                    method: "GET",
                    request: "",
                    res: err
                });
            }
        });
    },
    post: function(url, data, config, cb) {
        var requestTimestamp, instance = this;
        if (data = data || {}, config = config || {}, config.headers = config.headers || {}, 
        "function" != typeof cb) throw "iservice expects callback to be function";
        "object" == typeof data && (data = JSON.stringify(data)), org.ekstep.pluginframework.jQuery.ajax({
            type: "POST",
            url: url,
            data: data,
            headers: config.headers,
            beforeSend: function(xhrObject, settings) {
                requestTimestamp = new Date().getTime();
            },
            success: function(res) {
                res.responseTime = new Date().getTime() - requestTimestamp, instance._dispatchTelemetry({
                    url: url,
                    method: "POST",
                    request: data,
                    res: res
                }), res = {
                    data: res
                }, cb(null, res);
            },
            error: function(err) {
                err.responseTime = new Date().getTime() - requestTimestamp, cb(err, null), instance._dispatchTelemetry({
                    url: url,
                    method: "POST",
                    request: data,
                    res: err
                });
            }
        });
    },
    patch: function(url, data, config, cb) {
        var requestTimestamp, instance = this;
        if (data = data || {}, config = config || {}, config.headers = config.headers || {}, 
        "function" != typeof cb) throw "iservice expects callback to be function";
        "object" == typeof data && (data = JSON.stringify(data)), org.ekstep.pluginframework.jQuery.ajax({
            type: "PATCH",
            url: url,
            data: data,
            headers: config.headers,
            beforeSend: function(xhrObject, settings) {
                requestTimestamp = new Date().getTime();
            },
            success: function(res) {
                res.responseTime = new Date().getTime() - requestTimestamp, instance._dispatchTelemetry({
                    url: url,
                    method: "PATCH",
                    request: data,
                    res: res
                }), res = {
                    data: res
                }, cb(null, res);
            },
            error: function(xhr, status, error) {
                xhr.responseTime = new Date().getTime() - requestTimestamp, cb(xhr, null), instance._dispatchTelemetry({
                    url: url,
                    method: "PATCH",
                    request: data,
                    res: xhr
                });
            }
        });
    },
    postFromService: function(url, data, headers, callback) {
        this.post(url, JSON.stringify(data), headers, function(err, res) {
            callback(err, res);
        });
    },
    getFromService: function(url, headers, callback) {
        this.get(url, headers, function(err, res) {
            callback(err, res);
        });
    }
}), org.ekstep.services.contentService = new (org.ekstep.services.iService.extend({
    serviceURL: function() {
        return this.getBaseURL() + this.getAPISlug() + "/learning/";
    },
    content: {},
    initService: function() {},
    contentFields: "body,editorState,stageIcons,templateId,languageCode,template,gradeLevel,status,concepts,versionKey,name,appIcon,contentType,owner,domain,code,visibility,portalOwner,description,language,mediaType,mimeType,osId,languageCode,createdOn,lastUpdatedOn",
    requestHeaders: {
        headers: {
            "content-type": "application/json",
            "user-id": "content-editor"
        }
    },
    _setContentMeta: function(id, contentMeta) {
        if (id && contentMeta) {
            var meta = {};
            for (k in contentMeta) "body" != k && "stageIcons" != k && (meta[k] = contentMeta[k]);
            this.content[id] = meta;
        }
    },
    getContentMeta: function(id) {
        return this.content[id] || {};
    },
    saveContent: function(contentId, metadata, body, callback) {
        this._saveContent(contentId, metadata, body, callback);
    },
    _saveContent: function(contentId, metadata, body, callback) {
        var instance = this, versionKey = instance.content[contentId] && instance.content[contentId].versionKey;
        if (contentId && versionKey) {
            var update = !1, content = {
                versionKey: versionKey,
                lastUpdatedBy: window.context.user.id
            };
            if (metadata) {
                update = !0;
                for (k in metadata) content[k] = metadata[k];
            }
            if (body && (content.compatibilityLevel = body.theme.compatibilityVersion, content.body = JSON.stringify(body), 
            update = !0), update) {
                var headers = {
                    headers: {
                        "content-type": "application/json",
                        "user-id": "ATTool"
                    }
                }, requestObj = {
                    request: {
                        content: content
                    }
                };
                instance.patch(this.serviceURL() + "v2/content/" + contentId, requestObj, headers, function(err, res) {
                    res && "OK" == res.data.responseCode ? (instance.content[contentId].versionKey = res.data.result.versionKey, 
                    callback(void 0, res)) : callback(!0, err);
                });
            } else callback("Nothing to save");
        } else callback("Cannot find content id or version key to update content");
    },
    getContent: function(contentId, callback) {
        var instance = this;
        if (contentId) {
            var metaDataFields = "?mode=edit&fields=" + instance.contentFields;
            instance.get(this.serviceURL() + "v2/content/" + contentId + metaDataFields, {}, function(err, res) {
                err && callback(err, void 0), !err && res.data && res.data.result && res.data.result.content ? (instance._setContentMeta(contentId, res.data.result.content), 
                callback(err, res.data.result.content)) : callback(new Error("no content found!"), void 0);
            });
        } else callback("Content id is required to get content from platform", void 0);
    },
    getContentVersionKey: function(contentId, callback) {
        var instance = this;
        if (contentId) {
            instance.get(this.serviceURL() + "v2/content/" + contentId + "?mode=edit&fields=versionKey", {}, function(err, res) {
                err && callback(err, void 0), !err && res.data && res.data.result && res.data.result.content ? (instance._setContentMeta(contentId, res.data.result.content), 
                callback(err, res.data.result.content)) : callback(new Error("no content found!"), void 0);
            });
        } else callback("Content id is required to get versionKey from platform", void 0);
    },
    getTemplateData: function(templateId, callback) {
        this.get(this.serviceURL() + "v2/content/" + templateId + "?taxonomyId=literacy_v2&fields=body,editorState,templateId,languageCode", this.requestHeaders, function(err, res) {
            callback(err, res);
        });
    },
    downloadContent: function(contentId, fileName, callback) {
        var data = {
            request: {
                content_identifiers: [ contentId ],
                file_name: fileName
            }
        };
        this.postFromService(this.serviceURL() + "v2/content/bundle", data, this.requestHeaders, callback);
    }
}))(), org.ekstep.services.assessmentService = new (org.ekstep.services.iService.extend({
    learningURL: function() {
        return this.getBaseURL() + this.getAPISlug() + "/learning/";
    },
    requestHeaders: {
        headers: {
            "content-type": "application/json",
            "user-id": "content-editor"
        }
    },
    getQuestions: function(data, callback) {
        org.ekstep.services.searchService.search(data, callback);
    },
    getItem: function(itemId, callback) {
        this.getFromService(this.learningURL() + "v1/assessmentitem/" + itemId, this.requestHeaders, callback);
    },
    getTemplate: function(templateId, callback) {
        org.ekstep.services.contentService.getTemplateData(templateId, callback);
    }
}))(), org.ekstep.services.assetService = new (org.ekstep.services.iService.extend({
    learningURL: function() {
        return this.getBaseURL() + this.getAPISlug() + "/learning/";
    },
    asset: {},
    requestHeaders: {
        headers: {
            "content-type": "application/json",
            "user-id": "content-editor"
        }
    },
    initService: function() {},
    setAssetMeta: function(id, assetMeta) {
        id && assetMeta && (void 0 == this.asset[id] && (this.asset[id] = {}), this.asset[id].assetMeta = assetMeta);
    },
    getAssetMeta: function(id) {
        return this.asset[id] || {};
    },
    saveAsset: function(assetId, content, callback) {
        var instance = this, requestObj = {
            request: {
                content: content
            }
        };
        assetId ? instance.patch(this.learningURL() + "v2/content/", requestObj, this.requestHeaders, function(err, res) {
            callback(err, res);
        }) : instance.post(this.learningURL() + "v2/content", requestObj, this.requestHeaders, function(err, res) {
            callback(err, res);
        });
    }
}))(), org.ekstep.services.metaService = new (org.ekstep.services.iService.extend({
    learningURL: function() {
        return this.getBaseURL() + this.getAPISlug() + "/learning/";
    },
    configURL: function() {
        return this.getBaseURL() + this.getAPISlug() + "/config/";
    },
    requestHeaders: {
        headers: {
            "content-type": "application/json",
            "user-id": "content-editor"
        }
    },
    getDefinitions: function(objectType, callback) {
        this.getFromService(this.learningURL() + "taxonomy/domain/definition/" + objectType, this.requestHeaders, callback);
    },
    getResourceBundles: function(languageCode, callback) {
        this.getFromService(this.configURL() + "v2/config/resourcebundles/" + languageCode, this.requestHeaders, callback);
    }
}))(), org.ekstep.services.languageService = new (org.ekstep.services.iService.extend({
    learningURL: function() {
        return this.getBaseURL() + this.getAPISlug() + "/learning/";
    },
    languageURL: function() {
        return this.getBaseURL() + this.getAPISlug() + "/language/";
    },
    requestHeaders: {
        headers: {
            "content-type": "application/json",
            "user-id": "content-editor"
        }
    },
    wordHeaders: {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI5OGNlN2RmNmNkOTk0YWQ5YjZlYTRjNDJlNmVjYjY5MCJ9.rtr4188EwDYZywtP7S9uuv1LsivoucFxOvJFDCWvq0Y"
        }
    },
    getLanguages: function(callback) {
        this.getFromService(this.learningURL() + "v1/language", this.requestHeaders, callback);
    },
    getVowel: function(language, callback) {
        this.getFromService(this.languageURL() + "v1/language/dictionary/varna/Vowel/list/" + language, this.requestHeaders, callback);
    },
    getConsonant: function(language, callback) {
        this.getFromService(this.languageURL() + "v1/language/dictionary/varna/Consonant/list/" + language, this.requestHeaders, callback);
    },
    getWords: function(data, callback) {
        this.postFromService(this.languageURL() + "v2/language/search", data, this.wordHeaders, callback);
    },
    getWordDefinition: function(callback) {
        this.getFromService(this.learningURL() + "taxonomy/en/definition/Word", this.requestHeaders, callback);
    },
    getKeyWords: function(data, callback) {
        this.postFromService(this.languageURL() + "v1/language/parser", data, this.requestHeaders, callback);
    },
    getTransliteration: function(data, callback) {
        this.getFromService(this.getBaseURL() + "/api/language/v2/language/transliteration/" + data.text + "?languages=" + data.languages.toString(), this.requestHeaders, callback);
    },
    getTranslation: function(data, callback) {
        this.getFromService(this.getBaseURL() + "/api/language/v2/language/translations/" + data.wordLang + "/" + data.word + "?languages=" + data.languages, this.requestHeaders, callback);
    }
}))(), org.ekstep.services.searchService = new (org.ekstep.services.iService.extend({
    searchURL: function() {
        return this.getBaseURL() + this.getAPISlug() + "/search/";
    },
    requestHeaders: {
        headers: {
            "content-type": "application/json",
            "user-id": "content-editor"
        }
    },
    initService: function() {},
    search: function(request, callback) {
        this.postFromService(this.searchURL() + "v2/search", request, this.requestHeaders, callback);
    }
}))(), org.ekstep.pluginframework.iRepo = Class.extend({
    discoverManifest: function(pluginId, pluginVer, callback) {
        callback(void 0, void 0);
    },
    resolveResource: function(pluginId, pluginVer, resource) {}
}), org.ekstep.pluginframework.publishedRepo = new (org.ekstep.pluginframework.iRepo.extend({
    id: "published",
    discoverManifest: function(pluginId, pluginVer, callback, publishedTime) {
        var instance = this;
        org.ekstep.pluginframework.resourceManager.loadResource(this.resolveResource(pluginId, pluginVer, "manifest.json"), "json", function(err, response) {
            callback(void 0, {
                manifest: response,
                repo: instance
            });
        }, publishedTime);
    },
    resolveResource: function(id, ver, resource) {
        return org.ekstep.pluginframework.config.pluginRepo + "/" + id + "-" + ver + "/" + resource;
    }
}))(), org.ekstep.pluginframework.resourceManager.addRepo(org.ekstep.pluginframework.publishedRepo);

var Plugin = Class.extend({
    _isContainer: !1,
    _defaultFont: void 0,
    _render: !0,
    _theme: void 0,
    _parent: void 0,
    _stage: void 0,
    _data: void 0,
    _currIndex: 0,
    _index: 0,
    _self: void 0,
    _dimensions: void 0,
    _id: void 0,
    _childIds: [],
    _enableEvents: !0,
    events: [],
    appEvents: [],
    borderShape: void 0,
    _pluginParams: {},
    _manifest: {},
    _unSupportedFonts: [ "notosans", "verdana", "notosans oriya" ],
    init: function(data, parent, stage, theme) {
        if (1 == arguments.length) {
            if (_.isUndefined(data)) return void this.initialize();
            if (!data.canvasId) return this._manifest = data, void this.initialize();
        }
        try {
            this.events = [], this.appEvents = [], this._childIds = [], this._pluginParams = {}, 
            this._theme = theme, this._stage = stage, this._parent = parent, this._data = data, 
            this.handleFont(data), this.initPlugin(data);
            var dims = this.relativeDims();
            dims && this._self && (this._self.origX = dims.x, this._self.origY = dims.y, this._self.width = dims.w, 
            this._self.height = dims.h), data.enableDrag && this.enableDrag(this._self, data.snapTo);
            var instance = this;
            if (_.isUndefined(data.appEvents) || (_.isArray(data.appEvents) ? _.each(data.appEvents, function(value, key) {
                instance.appEvents.push.apply(instance.appEvents, data.appEvents[key].list.split(/[\s,]+/));
            }) : this.appEvents.push.apply(this.appEvents, data.appEvents.list.split(/[\s,]+/))), 
            this._enableEvents && EventManager.registerEvents(this, this._data), this._id = this.id = this._data.id || this._data.asset || _.uniqueId("plugin"), 
            PluginManager.registerPluginObject(this), this._self && !1 === data.visible && (this._self.visible = !1), 
            data["ev-if"]) {
                var expr = data["ev-if"].trim(), modelExpr = expr = this.replaceExpressions(expr);
                "${" != expr.substring(0, 2) && (expr = "${" + expr), "}" != expr.substring(expr.length - 1, expr.length) && (expr += "}");
                var exprVal = this.evaluateExpr(expr);
                void 0 === exprVal && this._stage && (exprVal = this._stage.getModelValue(modelExpr)), 
                void 0 !== exprVal && this._self && (this._self.visible = this._self.visible && exprVal);
            }
            this._self && (this._self["z-index"] = data["z-index"]), this._render && (this._isContainer && "stage" == this._type && this.cache(), 
            this.render()), this._self && this._self.visible && (this.drawBorder(data, dims), 
            data.shadow && this.addShadow()), this._self && this.rotation(data);
        } catch (e) {
            var pluginName;
            _.isUndefined(data) || (pluginName = data.pluginType ? data.pluginType : "Custom"), 
            EkstepRendererAPI.logErrorEvent(e, {
                type: "plugin",
                objectType: data.pluginType,
                action: data.event ? data.event.action ? data.event.action.command : data.event.type : "transistion",
                objectId: data.id || data._id
            }), showToaster("error", pluginName + ":Plugin failed"), console.warn("Plugin init is failed due to", e);
        }
    },
    handleFont: function(data) {
        data.font && (data.font = data.font.trim()), (_.isEmpty(data.font) || !_.isUndefined(data.font) && this._unSupportedFonts.indexOf(data.font.toLowerCase()) > -1) && (data.font = this.getDefaultFont());
    },
    cache: function() {
        this._self.cache(this._dimensions.x, this._dimensions.y, this._dimensions.w, this._dimensions.h);
    },
    uncache: function() {
        this._self.uncache();
    },
    setIndex: function(idx) {
        this._index = idx;
    },
    setDimensions: function() {
        var dims = this.relativeDims();
        this._self.x = dims.x ? dims.x : 0, this._self.y = dims.y ? dims.y : 0, this._self.width = dims.w ? dims.w : 1, 
        this._self.height = dims.h ? dims.h : 1;
    },
    addChild: function(child, childPlugin) {
        var nextIdx = this._currIndex++;
        this._self.addChildAt(child, this._self.children.length), childPlugin && (childPlugin.setIndex(nextIdx), 
        childPlugin._id && this._childIds.push(childPlugin._id));
    },
    removeChildAt: function(idx) {
        this._self.removeChildAt(idx);
    },
    removeChild: function(child) {
        this._self.removeChild(child);
    },
    render: function() {
        this._self ? this._parent.addChild(this._self, this) : console.warn("Skipped rendering the plugin object: ", this._id);
    },
    update: function() {
        this._theme.update();
    },
    dimensions: function() {
        return this._dimensions;
    },
    relativeDims: function() {
        if (this._parent) {
            var parentDims = this._parent.dimensions();
            this._dimensions = {
                x: parseFloat(parentDims.w * (this._data.x || 0) / 100),
                y: parseFloat(parentDims.h * (this._data.y || 0) / 100),
                w: parseFloat(parentDims.w * (this._data.w || 0) / 100),
                h: parseFloat(parentDims.h * (this._data.h || 0) / 100),
                stretch: void 0 === this._data.stretch || this._data.stretch
            };
        }
        return this._dimensions;
    },
    getRelativeDims: function(data) {
        var parentDims = this._parent.dimensions();
        return {
            x: parseFloat(parentDims.w * (data.x || 0) / 100),
            y: parseFloat(parentDims.h * (data.y || 0) / 100),
            w: parseFloat(parentDims.w * (data.w || 0) / 100),
            h: parseFloat(parentDims.h * (data.h || 0) / 100),
            stretch: void 0 === data.stretch || data.stretch
        };
    },
    setScale: function() {
        var sb = this._self.getBounds(), dims = this.relativeDims(), parentDims = this._parent.dimensions();
        dims.stretch || 0 != dims.h && 0 != dims.w && (sb.height > sb.width ? dims.h = 0 : dims.w = 0), 
        0 == dims.h && (dims.h = dims.w * sb.height / sb.width, parentDims.h < dims.h && (dims.h = parentDims.h, 
        dims.w = dims.h * sb.width / sb.height)), 0 == dims.w && (dims.w = dims.h * sb.width / sb.height, 
        parentDims.w < dims.w && (dims.w = parentDims.w, dims.h = dims.w * sb.height / sb.width)), 
        this._dimensions.h = dims.h, this._dimensions.w = dims.w, this._self && (this._self.scaleY = dims.h / sb.height, 
        this._self.scaleX = dims.w / sb.width);
    },
    initialize: function() {},
    initPlugin: function(data) {
        throw PluginManager.addError("Subclasses of plugin should implement this function"), 
        "Subclasses of plugin should implement this function";
    },
    play: function() {
        PluginManager.addError("Subclasses of plugin should implement play()");
    },
    pause: function() {
        PluginManager.addError("Subclasses of plugin should implement pause()");
    },
    stop: function() {
        PluginManager.addError("Subclasses of plugin should implement stop()");
    },
    togglePlay: function() {
        PluginManager.addError("Subclasses of plugin should implement togglePlay()");
    },
    refresh: function() {
        PluginManager.addError("Subclasses of plugin should implement refresh()");
    },
    show: function(action) {
        _.contains(this.events, "show") ? EventManager.dispatchEvent(this._data.id, "show") : this._self.visible || (this._self.visible = !0, 
        EventManager.processAppTelemetry(action, "SHOW", this)), Renderer.update = !0;
    },
    hide: function(action) {
        _.contains(this.events, "hide") ? EventManager.dispatchEvent(this._data.id, "hide") : this._self && this._self.visible && (this._self.visible = !1, 
        EventManager.processAppTelemetry(action, "HIDE", this)), Renderer.update = !0;
    },
    toggleShow: function(action) {
        _.contains(this.events, "toggleShow") ? EventManager.dispatchEvent(this._data.id, "toggleShow") : (this._self.visible = !this._self.visible, 
        EventManager.processAppTelemetry(action, this._self.visible ? "SHOW" : "HIDE", this)), 
        Renderer.update = !0;
    },
    toggleShadow: function(action) {
        var isVisible = !1;
        return this.hasShadow() ? (this.removeShadow(), isVisible = !1) : (this.addShadow(), 
        isVisible = !0), Renderer.update = !0, isVisible;
    },
    addShadow: function() {
        var shadowObj = this._self.shadow;
        if (shadowObj && shadowObj._self && "visible" in shadowObj._self) shadowObj._self.visible = !0; else {
            var shadowColor = this._data.shadowColor || "#cccccc";
            shadowColor = this._data.shadow || shadowColor;
            var offsetX = this._data.offsetX || 0, offsetY = this._data.offsetY || 0, blur = this._data.blur || 5;
            this._self.shadow = new createjs.Shadow(shadowColor, offsetX, offsetY, blur);
        }
    },
    removeShadow: function() {
        var shadowObj = this._self.shadow;
        shadowObj && shadowObj._self && "visible" in shadowObj._self ? shadowObj._self.visible = !1 : this._self.shadow = void 0;
    },
    hasShadow: function() {
        var visibleShadow = !1, shadowObj = this._self.shadow;
        return shadowObj && shadowObj._self && "visible" in shadowObj._self ? visibleShadow = shadowObj._self.visible : this._self.shadow && (visibleShadow = !0), 
        visibleShadow;
    },
    drawBorder: function(data, dims) {
        if (data.stroke) {
            var strokeWidth = data["stroke-width"] || 1, graphics = this._self.graphics;
            this._self.graphics || (this.borderShape = new createjs.Shape(), this.borderShape.x = this._self.x, 
            this.borderShape.y = this._self.y, graphics = this.borderShape.graphics), graphics.beginStroke(data.stroke), 
            this.borderShape.alpha = data["stroke-opacity"] || 1, graphics.setStrokeStyle(strokeWidth), 
            graphics.dr(0, 0, dims.w, dims.h), this._self.graphics || this._parent.addChild(this.borderShape), 
            Renderer.update = !0;
        }
    },
    rotation: function(data) {
        var degreeRotation = 0;
        data.rotate ? degreeRotation = data.rotate : _.isNumber(data) && (degreeRotation = data), 
        _.isUndefined(this.borderShape) || (this.borderShape.rotation = degreeRotation), 
        this._self.rotation = degreeRotation;
    },
    enableDrag: function(asset, snapTo) {
        asset.cursor = "pointer", asset.on("mousedown", function(evt) {
            this.parent.addChild(this), this.offset = {
                x: this.x - evt.stageX,
                y: this.y - evt.stageY
            };
        }), asset.on("pressmove", function(evt) {
            this.x = evt.stageX + this.offset.x, this.y = evt.stageY + this.offset.y, Renderer.update = !0;
        }), snapTo && asset.on("pressup", function(evt) {
            var plugin = PluginManager.getPluginObject(snapTo), dims = plugin._dimensions, xFactor = parseFloat(.5 * this.width), yFactor = parseFloat(.5 * this.height), x = dims.x - xFactor, y = dims.y - yFactor, maxX = dims.x + dims.w + xFactor, maxY = dims.y + dims.h + yFactor, snapSuccess = !1;
            this.x >= x && this.x + this.width <= maxX && this.y >= y && this.y + this.height <= maxY && (snapSuccess = !0), 
            snapSuccess ? (plugin._data.snapX && (this.x = dims.x + dims.w * plugin._data.snapX / 100), 
            plugin._data.snapY && (this.y = dims.y + dims.h * plugin._data.snapY / 100)) : (this.x = this.origX, 
            this.y = this.origY), Renderer.update = !0;
        });
    },
    evaluateExpr: function(expr) {
        if (!expr) return "";
        var app = GlobalContext._params, stage = {};
        this._stage ? stage = this._stage.params : "stage" == this._type && (stage = this.params);
        var content = {};
        this._theme && (content = this._theme._contentParams);
        var value = void 0;
        try {
            expr = expr.trim(), "${" == expr.substring(0, 2) && "}" == expr.substring(expr.length - 1, expr.length) ? (expr = expr.substring(2, expr.length), 
            expr = expr.substring(0, expr.length - 1), value = eval(expr)) : value = eval(expr);
        } catch (err) {
            console.warn("expr: " + expr + " evaluation faild:", err.message);
        }
        return value;
    },
    replaceExpressions: function(model) {
        for (var arr = [], idx = 0, nextIdx = model.indexOf("${", idx), endIdx = model.indexOf("}", idx + 1); -1 != nextIdx && -1 != endIdx; ) {
            var expr = model.substring(nextIdx, endIdx + 1);
            arr.push(expr), idx = endIdx, nextIdx = model.indexOf("${", idx), endIdx = model.indexOf("}", idx + 1);
        }
        if (arr.length > 0) for (var i = 0; i < arr.length; i++) {
            var val = this.evaluateExpr(arr[i]);
            model = model.replace(arr[i], val);
        }
        return model;
    },
    getParam: function(param) {
        var value, tokens = param.split(".");
        if (tokens.length >= 2) {
            var scope = tokens[0], idx = param.indexOf("."), paramName = param.substring(idx + 1);
            value = scope && "app" == scope.toLowerCase() ? GlobalContext.getParam(paramName) : scope && "stage" == scope.toLowerCase() ? this._stage.getParam(paramName) : this._theme.getParam(paramName);
        } else this._stage && (value = this._stage.getParam(param));
        return value;
    },
    getDefaultFont: function() {
        return this._defaultFont = "NotoSans, NotoSansGujarati, NotoSansOriya, NotoSansMalayalam", 
        this._defaultFont;
    },
    transitionTo: function() {
        PluginManager.addError("Subclasses of plugin should implement transitionTo()");
    },
    evaluate: function() {
        PluginManager.addError("Subclasses of plugin should implement evaluate()");
    },
    reload: function() {
        PluginManager.addError("Subclasses of plugin should implement reload()");
    },
    restart: function() {
        PluginManager.addError("Subclasses of plugin should implement reload()");
    },
    blur: function(action) {
        var instance = this, obj = instance._self, blurFilter = new createjs.BlurFilter(25, 25, 1);
        obj.filters = [ blurFilter ];
        var bounds = instance.relativeDims();
        obj.cache(bounds.x, bounds.y, bounds.w, bounds.h), Renderer.update = !0;
    },
    unblur: function(action) {
        var instance = this;
        instance._self.filters = [], instance._self.uncache(), Renderer.update = !0;
    },
    invokeChildren: function(data, parent, stage, theme) {
        var children = [];
        for (k in data) PluginManager.isPlugin(k) && (_.isArray(data[k]) ? _.each(data[k], function(item) {
            item.pluginType = k, item["z-index"] || (item["z-index"] = -1), children.push(item);
        }) : (data[k].pluginType = k, data[k]["z-index"] || (data[k]["z-index"] = -1), children.push(data[k])));
        for (k in children) {
            var item = children[k];
            item.pluginType && PluginManager.invoke(item.pluginType, item, parent, stage, theme);
        }
        parent._self && parent._self.sortChildren(function(obj1, obj2, options) {
            return _.isUndefined(obj2["z-index"]) && (obj2["z-index"] = -1), _.isUndefined(obj1["z-index"]) && (obj1["z-index"] = -1), 
            obj1["z-index"] > obj2["z-index"] ? 1 : obj1["z-index"] < obj2["z-index"] ? -1 : 0;
        });
    },
    getPluginParam: function(param) {
        var instance = this, params = instance._pluginParams, expr = "params." + param;
        return eval(expr);
    },
    setPluginParam: function(param, value, incr, max) {
        var instance = this, fval = instance._pluginParams[param];
        incr ? (fval || (fval = 0), fval += incr) : fval = value, 0 > fval && (fval = 0), 
        void 0 !== max && fval >= max && (fval = 0), instance._pluginParams[param] = fval;
    },
    setPluginParamValue: function(action) {
        var val, scope = action.scope, param = action.param, paramExpr = action["ev-value"], paramModel = action["ev-model"];
        if (paramExpr) val = this.getPluginParam(paramExpr); else if (paramModel) {
            if (this._stage) {
                var model = this.replaceExpressions(paramModel);
                val = this._stage.getModelValue(model);
            }
        } else val = action["param-value"];
        var incr = action["param-incr"];
        scope && "app" == scope.toLowerCase() ? GlobalContext.setParam(param, val, incr) : scope && "stage" == scope.toLowerCase() ? this._stage.setParam(param, val, incr) : scope && "content" == scope.toLowerCase() ? this._theme.setParam(param, val, incr) : this.setPluginParam(param, val, incr);
    },
    getInnerECML: function(data) {
        var children = {};
        data = void 0 === data ? this._data : data;
        for (k in data) PluginManager.isPlugin(k) && _.isObject(data[k]) && !_.isEmpty(data[k]) && (children[k] = data[k]);
        return children;
    },
    setState: function(param, value, isStateChanged) {
        _.isUndefined(isStateChanged) || this._stage.isStageStateChanged(isStateChanged), 
        this._stage.setParam(param.toLowerCase(), value);
    },
    getState: function(param) {
        if (!_.isUndefined(this._stage._currentState)) return this._stage._currentState[param];
    }
}), HTMLPlugin = Plugin.extend({
    _div: void 0,
    _isContainer: !1,
    _render: !0
});

AnimationManager = {
    animationsCache: {},
    pluginMap: {},
    pluginObjMap: {},
    handle: function(action) {
        var instance;
        if (action.asset) {
            instance = PluginManager.getPluginObject(action.asset), !0 === action.parent && instance._parent && (instance = instance._parent);
            for (k in action) if (AnimationManager.isPlugin(k)) {
                var data = action[k], pluginObj = void 0;
                data.id && (pluginObj = AnimationManager.getPluginObject(data.id)), void 0 === pluginObj ? pluginObj = AnimationManager.invokePlugin(k, action[k], instance) : console.info("Playing from cache..."), 
                pluginObj.animate(instance, action.cb);
            }
        }
    },
    widthHandler: function(event, plugin) {
        var sb = plugin.getBounds();
        plugin.scaleY = plugin.height / sb.height, plugin.scaleX = plugin.width / sb.width;
    },
    isPlugin: function(id) {
        return !!AnimationManager.pluginMap[id];
    },
    registerPlugin: function(id, plugin) {
        AnimationManager.pluginMap[id] = plugin, createjs.EventDispatcher.initialize(plugin.prototype);
    },
    invokePlugin: function(id, data, plugin) {
        var p, pluginMap = AnimationManager.pluginMap;
        return pluginMap[id] ? _.isArray(data) ? data.forEach(function(d) {
            new pluginMap[id](d, plugin);
        }) : p = new pluginMap[id](data, plugin) : AnimationManager.addError("No plugin found for - " + id), 
        p;
    },
    registerPluginObject: function(pluginObj) {
        AnimationManager.pluginObjMap[pluginObj._id] = pluginObj;
    },
    getPluginObject: function(id) {
        return AnimationManager.pluginObjMap[id];
    },
    cleanUp: function() {
        AnimationManager.pluginObjMap = {};
    }
}, AssetManager = {
    strategy: void 0,
    stageAudios: {},
    init: function(themeData, basePath) {
        AssetManager.strategy = new LoadByStageStrategy(themeData, basePath);
    },
    getAsset: function(stageId, assetId) {
        return AssetManager.strategy.getAsset(stageId, assetId);
    },
    initStage: function(stageId, nextStageId, prevStageId, cb) {
        nextStageId && AssetManager.stopStageAudio(nextStageId), prevStageId && AssetManager.stopStageAudio(prevStageId), 
        AssetManager.strategy.initStage(stageId, nextStageId, prevStageId, cb);
    },
    destroy: function() {
        _.isUndefined(AssetManager.strategy) || (AssetManager.strategy.destroy(), AssetManager.strategy = void 0), 
        AssetManager.stageAudios = {};
    },
    stopStageAudio: function(stageId) {
        AssetManager.stageAudios[stageId] && AssetManager.stageAudios[stageId].length > 0 && AssetManager.stageAudios[stageId].forEach(function(audioAsset) {
            AudioManager.stop({
                stageId: stageId,
                asset: audioAsset,
                disableTelemetry: !0
            });
        });
    },
    addStageAudio: function(stageId, audioId) {
        AssetManager.stageAudios[stageId] && AssetManager.stageAudios[stageId].push(audioId);
    },
    loadAsset: function(stageId, assetId, path) {
        AssetManager.strategy ? AssetManager.strategy.loadAsset(stageId, assetId, path) : console.info("asset not loaded because AssetManager not initialised or failed to initialize.");
    },
    getManifest: function(content) {
        var manifest = {};
        return manifest.media = [], _.each(content.stage, function(stage) {
            _.isUndefined(stage.manifest) || _.isUndefined(stage.manifest.media) || (_.isArray(stage.manifest.media) || (stage.manifest.media = [ stage.manifest.media ]), 
            _.each(stage.manifest.media, function(media) {
                manifest.media.push(media);
            }));
        }), manifest;
    }
}, AudioManager = {
    instances: {},
    MAX_INSTANCES: 10,
    muted: !1,
    uniqueId: function(action) {
        return action.stageId + ":" + action.asset;
    },
    play: function(action, instance) {
        return void 0 !== action && void 0 !== action.asset && null != action.asset ? (instance = instance || AudioManager.instances[AudioManager.uniqueId(action)] || {}, 
        instance.object ? (instance.object.volume = 1, instance.object.paused ? instance.object.paused = !1 : -1 !== [ createjs.Sound.PLAY_FINISHED, createjs.Sound.PLAY_INTERRUPTED, createjs.Sound.PLAY_FAILED ].indexOf(instance.object.playState) && instance.object.play(), 
        instance.object.muted = this.muted) : (AudioManager.reclaim(), instance.object = createjs.Sound.play(action.asset, {
            interrupt: createjs.Sound.INTERRUPT_ANY
        }), instance.object.muted = this.muted, instance._data = {
            id: AudioManager.uniqueId(action)
        }, AudioManager.instances[AudioManager.uniqueId(action)] = instance, AssetManager.addStageAudio(Renderer.theme._currentStage, action.asset)), 
        createjs.Sound.PLAY_FAILED != instance.object.playState ? (EventManager.processAppTelemetry(action, "LISTEN", instance, {
            subtype: "PLAY"
        }), instance.object.on("complete", function() {
            void 0 !== action.cb && action.cb({
                status: "success"
            });
        }, action)) : (delete AudioManager.instances[AudioManager.uniqueId(action)], console.info("Audio with 'id :" + action.asset + "' is not found..")), 
        instance) : (console.warn("Asset is not given to play.", action), {});
    },
    togglePlay: function(action) {
        if (void 0 !== action && void 0 !== action.asset && null != action.asset) {
            var instance = AudioManager.instances[AudioManager.uniqueId(action)] || {};
            instance && instance.object ? instance.object.playState === createjs.Sound.PLAY_FINISHED || instance.object.paused ? AudioManager.play(action, instance) : instance.object.paused || AudioManager.pause(action, instance) : AudioManager.play(action, instance);
        } else console.warn("Asset is not given to toggle play.", action);
    },
    pause: function(action, instance) {
        void 0 !== action && void 0 !== action.asset && null != action.asset ? (instance = instance || AudioManager.instances[AudioManager.uniqueId(action)]) && instance.object && instance.object.playState === createjs.Sound.PLAY_SUCCEEDED && (instance.object.paused = !0, 
        EventManager.processAppTelemetry(action, "LISTEN", instance, {
            subtype: "PAUSE"
        })) : console.warn("Asset is not given to toggle pause.", action);
    },
    stop: function(action) {
        var instance = AudioManager.instances[AudioManager.uniqueId(action)] || {};
        instance && instance.object && instance.object.playState !== createjs.Sound.PLAY_FINISHED && (instance.object.volume = 0, 
        instance.object.stop(), EventManager.processAppTelemetry(action, "LISTEN", instance, {
            subtype: "STOP"
        }));
    },
    stopAll: function(action) {
        for (var data in AudioManager.instances) AudioManager.instances[data].object.volume = 0;
        createjs.Sound.stop(), action && EventManager.processAppTelemetry(action, "LISTEN", "", {
            subtype: "STOP_ALL"
        });
    },
    reclaim: function() {
        var keys = _.keys(AudioManager.instances);
        if (keys.length > AudioManager.MAX_INSTANCES) for (index in keys) {
            var key = keys[index], instance = AudioManager.instances[key];
            if (instance && instance.object.playState != createjs.Sound.PLAY_INITED && instance.object.playState != createjs.Sound.PLAY_SUCCEEDED) {
                AudioManager.destroyObject(instance, key);
                break;
            }
        }
    },
    destroy: function(stageId, assetId) {
        var soundId = AudioManager.uniqueId({
            stageId: stageId,
            asset: assetId
        }), instance = AudioManager.instances[soundId] || {};
        AudioManager.destroyObject(instance, soundId);
    },
    destroyObject: function(instance, soundId) {
        if (instance.object) {
            try {
                instance.object.destroy();
            } catch (err) {
                console.log("Error", err);
            }
            instance.object = void 0, instance.state = void 0, delete AudioManager.instances[soundId];
        }
    },
    cleanUp: function() {
        AudioManager.instances = {};
    },
    mute: function() {
        this.muted = !0, _.isEmpty(AudioManager.instances) || _.map(_.pluck(_.values(AudioManager.instances), "object"), function(obj) {
            return obj.muted = !0, obj;
        });
    },
    unmute: function() {
        this.muted = !1, _.isEmpty(AudioManager.instances) || _.map(_.pluck(_.values(AudioManager.instances), "object"), function(obj) {
            return obj.muted = !1, obj;
        });
    }
}, CommandManager = {
    commandMap: {},
    registerCommand: function(id, command) {
        CommandManager.commandMap[id] = command;
    },
    handle: function(action) {
        try {
            if (action.stageInstanceId = _.clone(Renderer.theme._currentScene._stageInstanceId), 
            action.delay) TimerManager.start(action); else {
                var cId = "";
                if (this._canHandle(action)) {
                    this._setAnimationAsCommand(action), this._setActionAsset(action), _.isString(action.command) && (cId = action.command.toUpperCase());
                    var command = CommandManager.commandMap[cId];
                    command ? new command(action) : console.warn("No command registered with name: ", cId);
                } else console.info("action ev-if failed. So, it is not called.");
            }
        } catch (e) {
            EkstepRendererAPI.logErrorEvent(e, {
                type: "asset",
                action: action.command,
                asset: action.asset,
                objectId: action.id
            }), _.isUndefined(action) ? showToaster("error", "Command failed") : showToaster("error", action.command + ": Command failed"), 
            console.warn(action + "Failed due to", e);
        }
    },
    _setAnimationAsCommand: function(action) {
        "animation" === action.type && (action.type = "command", action.command = "ANIMATE");
    },
    _setDataAttributes: function(action) {
        var dataAttributes = {};
        _.keys(action).forEach(function(key) {
            var lowerKey = key.toLowerCase();
            "data-" == lowerKey.substring(0, 5) && (dataAttributes[lowerKey.replace("data-", "")] = action[key]);
        }), action.dataAttributes = dataAttributes, action.stageId = Renderer.theme._currentStage;
    },
    _setActionAsset: function(action) {
        var plugin = PluginManager.getPluginObject(action.pluginId), stage = plugin._stage;
        stage && null != stage || (stage = plugin), stage && "stage" === stage._type && (action.param && (action.value = stage.getParam(action.param) || ""), 
        action.asset || action.asset_param || action.asset_model ? action.asset_param ? action.asset = stage.getParam(action.asset_param) || "" : action.asset_model && (action.asset = stage.getModelValue(action.asset_model) || "") : action.asset = plugin._id);
    },
    _canHandle: function(action) {
        var handle = !0, plugin = PluginManager.getPluginObject(action.pluginId);
        if (action["ev-if"]) {
            var expr = action["ev-if"].trim();
            "${" != expr.substring(0, 2) && (expr = "${" + expr), "}" != expr.substring(expr.length - 1, expr.length) && (expr += "}"), 
            handle = plugin.evaluateExpr(expr);
        }
        return handle;
    },
    displayAllHtmlElements: function(visibility) {
        jQuery("#" + Renderer.divIds.gameArea).children().each(function() {
            jQuery(this).is("canvas") || (visibility ? jQuery(this).show() : jQuery(this).hide());
        });
    }
}, ControllerManager = {
    controllerMap: {},
    instanceMap: {},
    errors: [],
    reset: function() {
        ControllerManager.instanceMap = {};
    },
    registerController: function(type, controller) {
        ControllerManager.controllerMap[type] = controller;
    },
    isController: function(type) {
        return !!ControllerManager.controllerMap[type];
    },
    get: function(c, baseDir) {
        var d, controllerMap = ControllerManager.controllerMap;
        if (c.type && c.id) if (controllerMap[c.type]) {
            var controllerId = c.type + "." + c.id;
            d = ControllerManager.getControllerInstance(controllerId), d || (d = new controllerMap[c.type](c, baseDir));
        } else ControllerManager.addError("No Controller found for - " + c.type);
        return d;
    },
    registerControllerInstance: function(id, instance) {
        ControllerManager.instanceMap[id] = instance;
    },
    getControllerInstance: function(id) {
        return ControllerManager.instanceMap[id];
    },
    addError: function(error) {
        ControllerManager.errors.push(error);
    },
    getErrors: function() {
        return ControllerManager.errors;
    }
}, EventManager = {
    registerEvents: function(plugin, data) {
        try {
            var events = void 0;
            data.events ? _.isArray(data.events) ? (events = [], data.events.forEach(function(e) {
                events.push.apply(events, e.event);
            })) : events = data.events.event : events = data.event, _.isArray(events) ? events.forEach(function(e) {
                EventManager.registerEvent(e, plugin);
            }) : events && EventManager.registerEvent(events, plugin);
        } catch (e) {
            showToaster("error", "Event fails to register"), console.warn("Event fails to register due to", e);
        }
    },
    registerEvent: function(evt, plugin) {
        var register = !0;
        if (evt["ev-if"]) {
            var expr = evt["ev-if"].trim(), modelExpr = expr = plugin.replaceExpressions(expr);
            "${" != expr.substring(0, 2) && (expr = "${" + expr), "}" != expr.substring(expr.length - 1, expr.length) && (expr += "}"), 
            register = plugin.evaluateExpr(expr), void 0 === register && plugin._stage && (register = plugin._stage.getModelValue(modelExpr));
        }
        if (register) if (plugin.events.push(evt.type), _.contains(createjs.DisplayObject._MOUSE_EVENTS, evt.type)) {
            var element = plugin._self;
            element && (plugin instanceof HTMLPlugin ? (element = plugin._self.htmlElement, 
            element.style.cursor = "pointer") : element.cursor = "pointer", element.addEventListener(evt.type, function(event) {
                EventManager.processMouseTelemetry(evt, event, plugin), EventManager.handleActions(evt, plugin);
            }));
        } else plugin.on(evt.type, function() {
            EventManager.handleActions(evt, plugin);
        });
    },
    dispatchEvent: function(id, event) {
        var plugin = PluginManager.getPluginObject(id);
        _.contains(createjs.DisplayObject._MOUSE_EVENTS, event) ? plugin._self.dispatchEvent(event) : plugin.dispatchEvent(event);
    },
    handleActions: function(evt, plugin) {
        try {
            var disableTelemetry = !1;
            EventManager._setPluginId(evt.action, plugin._id);
            var unmuteActions = _.clone(evt.action);
            if (evt.action = EventManager._chainActions(evt.action, unmuteActions), "click" !== evt.type && (disableTelemetry = !0), 
            _.isArray(evt.action)) {
                var data = JSON.parse(JSON.stringify(evt.action));
                delete evt.action, evt.action = data, evt.action.forEach(function(a) {
                    a.disableTelemetry = disableTelemetry;
                    var action = _.clone(a);
                    action.pluginId = plugin._id, CommandManager.handle(action);
                });
            } else if (evt.action) {
                evt.action.disableTelemetry = disableTelemetry;
                var action = _.clone(evt.action);
                action.pluginId = plugin._id, CommandManager.handle(action);
            }
        } catch (e) {
            _.isUndefined(evt) ? showToaster("error", "Event failed") : showToaster("error", evt.type + ": Event failed"), 
            EkstepRendererAPI.logErrorEvent(e, {
                type: "asset",
                objectId: evt.action.id,
                asset: evt.action.asset,
                action: evt.action ? evt.action.command : ""
            }), console.warn("Event fails to handle due to", e);
        }
    },
    _setPluginId: function(actions, pluginId) {
        _.isArray(actions) ? actions.forEach(function(action) {
            action.pluginId = pluginId;
        }) : actions && (actions.pluginId = pluginId);
    },
    _chainActions: function(actions, unmuteActions) {
        if (_.isArray(actions)) {
            var filter = _.filter(actions, function(action) {
                return action.with || action.after;
            });
            if (filter.length > 0) {
                var action = filter[0], parentId = action.after || action.with, p = _.findWhere(unmuteActions, {
                    id: parentId
                });
                return p ? (action.after && (p.children || (p.children = []), p.children.push(action)), 
                action.with && (p.siblings || (p.siblings = []), p.siblings.push(action)), actions = _.without(actions, action)) : console.warn("Didn't find action with id:", parentId), 
                delete action.after, delete action.with, EventManager._chainActions(actions, unmuteActions);
            }
            return actions;
        }
        return actions;
    },
    processMouseTelemetry: function(action, event, plugin) {
        var data = {
            type: event.type,
            x: event.stageX,
            y: event.stageY
        }, type = TelemetryService.getMouseEventMapping()[action.type];
        EventManager.processAppTelemetry(action, type, plugin, data);
    },
    processAppTelemetry: function(action, type, plugin, data) {
        if (plugin || (plugin = {
            _data: {
                id: "",
                asset: ""
            }
        }), action || (action = {
            disableTelemetry: !0
        }), !0 !== action.disableTelemetry && type) {
            var id = plugin._data.id || plugin._data.asset;
            if (id || (id = action.asset), !id) {
                var actionObj = action.action;
                _.isArray(actionObj) && actionObj.length >= 1 && (actionObj = actionObj[0]), actionObj && (id = actionObj.asset);
            }
            if (id || (id = plugin._type || "none"), id) {
                var stageId = Renderer.theme ? Renderer.theme._currentStage : "";
                data && (data.stageId = stageId), TelemetryService.interact(type, id, type, data || {
                    stageId: stageId
                });
            }
        }
    }
}, LoadByStageStrategy = Class.extend({
    MAX_CONNECTIONS: 50,
    assetMap: {},
    spriteSheetMap: {},
    commonAssets: [],
    templateAssets: [],
    loaders: {},
    commonLoader: void 0,
    templateLoader: void 0,
    stageManifests: {},
    init: function(themeData, basePath) {
        var instance = this;
        createjs.Sound.registerPlugins([ createjs.CordovaAudioPlugin, createjs.WebAudioPlugin, createjs.HTMLAudioPlugin ]), 
        createjs.Sound.alternateExtensions = [ "mp3" ], this.destroy(), this.loadAppAssets(), 
        _.isUndefined(themeData.manifest) || _.isUndefined(themeData.manifest.media) ? console.log("==== manifest media not defined ====") : (_.isArray(themeData.manifest.media) || (themeData.manifest.media = [ themeData.manifest.media ]), 
        themeData.manifest.media.forEach(function(media) {
            if (media && media.src) if ("http" != media.src.substring(0, 4) && (isbrowserpreview ? media.src = AppConfig.host + media.src : media.src = basePath + media.src), 
            createjs.CordovaAudioPlugin.isSupported() && "sound" !== media.type && "audiosprite" !== media.type && (media.src = "file:///" + media.src), 
            "json" == media.type) instance.commonAssets.push(_.clone(media)); else if ("spritesheet" == media.type) {
                var imgId = media.id + "_image";
                instance.commonAssets.push({
                    id: imgId,
                    src: media.src,
                    type: "image"
                }), media.images = [];
                var animations = {};
                if (media.animations) for (k in media.animations) animations[k] = JSON.parse(media.animations[k]);
                media.animations = animations, instance.spriteSheetMap[media.id] = media;
            } else "audiosprite" == media.type && (_.isArray(media.data.audioSprite) || (media.data.audioSprite = [ media.data.audioSprite ])), 
            "true" !== media.preload && !0 !== media.preload || instance.commonAssets.push(_.clone(media)), 
            instance.assetMap[media.id] = media;
        }));
        var stages = themeData.stage;
        _.isArray(stages) || (stages = [ stages ]), stages.forEach(function(stage) {
            instance.stageManifests[stage.id] = [], AssetManager.stageAudios[stage.id] = [], 
            instance.populateAssets(stage, stage.id, stage.preload, themeData.startStage);
        }), instance.loadCommonAssets();
        var templates = themeData.template;
        _.isArray(templates) || (templates = [ templates ]), templates.forEach(function(template) {
            instance.populateTemplateAssets(template);
        }), instance.loadTemplateAssets();
    },
    loadAppAssets: function() {
        var localPath = "undefined" == typeof cordova ? "" : "file:///android_asset/www/";
        this.commonAssets.push({
            id: "goodjob_sound",
            src: localPath + "assets/sounds/goodjob.mp3"
        }), this.commonAssets.push({
            id: "tryagain_sound",
            src: localPath + "assets/sounds/letstryagain.mp3"
        });
    },
    populateAssets: function(data, stageId, preload, startStageId) {
        var instance = this;
        for (k in data) {
            var plugins = data[k];
            _.isArray(plugins) || (plugins = [ plugins ]), PluginManager.isPlugin(k) && "g" == k || "manifest" == k ? plugins.forEach(function(plugin) {
                instance.populateAssets(plugin, stageId, preload, startStageId);
            }) : plugins.forEach(function(plugin) {
                if (!_.isNull(plugin)) {
                    var assetId = plugin.asset || plugin.audio || plugin.assetId;
                    if (assetId) {
                        var asset = instance.assetMap[assetId];
                        asset && (!0 === preload && stageId !== startStageId && instance.commonAssets.push(_.clone(asset)), 
                        instance.stageManifests[stageId].push(_.clone(asset)));
                    }
                }
            });
        }
    },
    populateTemplateAssets: function(data) {
        var instance = this;
        for (k in data) {
            var plugins = data[k];
            _.isArray(plugins) || (plugins = [ plugins ]), PluginManager.isPlugin(k) && "g" == k ? plugins.forEach(function(plugin) {
                instance.populateTemplateAssets(plugin);
            }) : plugins.forEach(function(plugin) {
                if (plugin && plugin.asset) {
                    var asset = instance.assetMap[plugin.asset];
                    asset && instance.templateAssets.push(_.clone(asset));
                }
            });
        }
    },
    getAsset: function(stageId, assetId) {
        var asset = void 0;
        if (this.loaders[stageId] && (asset = this.loaders[stageId].getResult(assetId)), 
        asset || (asset = this.commonLoader.getResult(assetId)), asset || (asset = this.templateLoader.getResult(assetId)), 
        asset || (asset = this.spriteSheetMap[assetId]), !asset) {
            if (this.assetMap[assetId]) return console.error("Asset not found. Returning - " + this.assetMap[assetId].src), 
            this.assetMap[assetId].src;
            console.error('"' + assetId + '" Asset not found. Please check index.ecml.'), EkstepRendererAPI.logErrorEvent({
                message: "Asset not found. Please check index.ecml"
            }, {
                type: "content",
                severity: "error",
                action: "play",
                asset: assetId,
                objectId: assetId
            });
        }
        return asset;
    },
    initStage: function(stageId, nextStageId, prevStageId, cb) {
        var instance = this;
        this.loadStage(stageId, cb);
        var deleteStages = _.difference(_.keys(instance.loaders), [ stageId, nextStageId, prevStageId ]);
        deleteStages.length > 0 && deleteStages.forEach(function(stageId) {
            instance.destroyStage(stageId);
        }), nextStageId && instance.loadStage(nextStageId), prevStageId && instance.loadStage(prevStageId), 
        instance.loaders = _.pick(instance.loaders, stageId, nextStageId, prevStageId);
    },
    loadStage: function(stageId, callback) {
        var instance = this;
        if (!instance.loaders[stageId]) {
            var mediaList = JSON.parse(JSON.stringify(instance.stageManifests[stageId]));
            if (mediaList = _.uniq(mediaList, function(media) {
                return media.assetId || media.id;
            }), _.isArray(mediaList) && mediaList.length > 0) {
                var loader = this._createLoader();
                loader.stageLoaded = !1, loader.on("complete", function() {
                    loader.stageLoaded = !0;
                }, null, !0), loader.on("error", function(evt) {
                    console.error("StageLoader Asset preload error", evt);
                }), loader.setMaxConnections(instance.MAX_CONNECTIONS), loader.installPlugin(createjs.Sound), 
                loader.loadManifest(mediaList, !0), instance.loaders[stageId] = loader;
            }
        }
        this.handleStageCallback(stageId, callback);
    },
    handleStageCallback: function(stageId, cb) {
        var instance = this;
        if (cb) if (_.isUndefined(this.loaders[stageId]) || this.loaders[stageId].stageLoaded) {
            var data = Renderer.theme && Renderer.theme._currentStage ? Renderer.theme._currentStage : stageId;
            stageId == data && (EventBus.dispatch(data + "_assetsLoaded"), cb());
        } else this.loaders[stageId].on("complete", function() {
            instance.loaders[stageId].stageLoaded = !0;
            var data = Renderer.theme && Renderer.theme._currentStage ? Renderer.theme._currentStage : stageId;
            stageId == data && (EventBus.dispatch(data + "_assetsLoaded"), cb());
        }, null, !0);
    },
    loadCommonAssets: function() {
        var loader = this._createLoader();
        loader.setMaxConnections(this.MAX_CONNECTIONS), loader.installPlugin(createjs.Sound), 
        loader.loadManifest(this.commonAssets, !0), loader.on("error", function(evt) {
            console.error("CommonLoader - asset preload error", evt);
        }), this.commonLoader = loader;
    },
    loadTemplateAssets: function() {
        var loader = this._createLoader();
        loader.setMaxConnections(this.MAX_CONNECTIONS), loader.installPlugin(createjs.Sound), 
        loader.loadManifest(this.templateAssets, !0), loader.on("error", function(evt) {
            console.error("TemplateLoader - asset preload error", evt);
        }), this.templateLoader = loader;
    },
    loadAsset: function(stageId, assetId, path, cb) {
        if (_.isUndefined(assetId) || _.isUndefined(path)) return void console.warn("Asset can't be loaded: AssetId - " + assetId + ",  Path - " + path);
        var loader = this.loaders[stageId];
        if (loader) loader.installPlugin(createjs.Sound), loader.on("complete", function() {
            loader.stageLoaded = !0, cb && cb();
        }, this), loader.loadFile({
            id: assetId,
            src: path
        }), loader.stageLoaded = !1; else {
            loader = this._createLoader();
            var instance = this;
            loader.on("complete", function(event) {
                _.isUndefined(instance.loaders) && (instance.loaders = {}), instance.loaders[stageId] = event.target, 
                instance.loaders[stageId].stageLoaded = !0, cb && cb();
            }, this), loader.on("error", function(evt) {
                console.error("AssetLoader - asset preload error", evt);
            }), loader.loadFile({
                id: assetId,
                src: path
            }), loader.stageLoaded = !1;
        }
    },
    destroy: function() {
        var instance = this;
        for (k in instance.loaders) instance.destroyStage(k);
        instance.assetMap = {}, instance.loaders = {}, instance.stageManifests = {};
        try {
            createjs.Sound.removeAllSounds();
        } catch (err) {}
    },
    destroyStage: function(stageId) {
        this.loaders[stageId] && (this.loaders[stageId].destroy(), AssetManager.stageAudios[stageId].forEach(function(audioAsset) {
            AudioManager.destroy(stageId, audioAsset);
        }));
    },
    _createLoader: function() {
        return "undefined" == typeof cordova ? new createjs.LoadQueue(!0, null, !0) : new createjs.LoadQueue(!1);
    },
    isStageAssetsLoaded: function(stageId) {
        var manifest = JSON.parse(JSON.stringify(this.stageManifests[stageId]));
        return !(_.isUndefined(this.loaders[stageId]) || !this.loaders[stageId].stageLoaded) || !(!_.isArray(manifest) || 0 != manifest.length);
    }
}), OverlayManager = {
    _constants: {
        overlayNext: "overlayNext",
        overlayPrevious: "overlayPrevious",
        overlaySubmit: "overlaySubmit",
        overlayMenu: "overlayMenu",
        overlayReload: "overlayReload",
        overlayGoodJob: "overlayGoodJob",
        overlayTryAgain: "overlayTryAgain"
    },
    _eventsArray: [],
    _reloadInProgress: !1,
    _contentConfig: {},
    _stageConfig: {},
    init: function() {
        this.clean(), this._reloadInProgress = !1, this._eventsArray = [ this._constants.overlayNext, this._constants.overlayPrevious, this._constants.overlaySubmit, this._constants.overlayMenu, this._constants.overlayReload, this._constants.overlayGoodJob, this._constants.overlayTryAgain ], 
        this.setContentConfig(), EventBus.addEventListener("actionNavigateSkip", this.skipAndNavigateNext, this), 
        EventBus.addEventListener("actionNavigateNext", this.navigateNext, this), EventBus.addEventListener("actionNavigatePrevious", this.navigatePrevious, this), 
        EventBus.addEventListener("actionDefaultSubmit", this.defaultSubmit, this), EventBus.addEventListener("actionReload", this.actionReload, this), 
        (_.isUndefined(EventBus.listeners.actionReplay) || _.isArray(EventBus.listeners.actionReplay) && 0 == EventBus.listeners.actionReplay.length) && EventBus.addEventListener("actionReplay", this.actionReplay, this);
    },
    setStageData: function() {
        _.isUndefined(Renderer.theme) || EventBus.dispatch("sceneEnter", Renderer.theme._currentScene);
    },
    setContentConfig: function() {
        var evtLenth = this._eventsArray.length;
        for (i = 0; i < evtLenth; i++) {
            var val, eventName = this._eventsArray[i];
            _.isUndefined(Renderer.theme) || _.isUndefined(Renderer.theme._currentScene) || (val = Renderer.theme.getParam(eventName)), 
            _.isUndefined(val) || (this._contentConfig[eventName] = val);
        }
        this.setStageConfig();
    },
    setStageConfig: function() {
        this._stageConfig = _.clone(this._contentConfig);
        var evtLenth = this._eventsArray.length;
        for (i = 0; i < evtLenth; i++) {
            var val, eventName = this._eventsArray[i];
            if (_.isUndefined(Renderer.theme) || _.isUndefined(Renderer.theme._currentScene) || (val = Renderer.theme._currentScene.getParam(eventName)), 
            _.isUndefined(val)) {
                var contentConfigVal = this._contentConfig[eventName];
                val = _.isUndefined(contentConfigVal) ? "on" : contentConfigVal;
            }
            this._stageConfig[eventName] = val;
        }
        this.setStageData(), this.handleNext(), this.handlePrevious(), this.handleSubmit();
    },
    handleNext: function() {
        var eventName = this._constants.overlayNext, val = this._stageConfig[eventName];
        EventBus.dispatch(eventName, val), this.handleEcmlElements(eventName, val);
    },
    handlePrevious: function() {
        if (!_.isUndefined(Renderer.theme._currentScene)) {
            var eventName = this._constants.overlayPrevious, val = this._stageConfig[eventName], navigateToStage = this.getNavigateTo("previous");
            "on" == val && (_.isUndefined(navigateToStage) ? (val = "disable", Renderer.theme._currentScene.isItemScene() && Renderer.theme._currentScene._stageController.hasPrevious() && (val = "enable")) : val = "enable"), 
            EventBus.dispatch(eventName, val), this.handleEcmlElements(eventName, val);
        }
    },
    handleSubmit: function() {
        var eventName = this._constants.overlaySubmit, val = this._stageConfig[eventName];
        if (_.isUndefined(Renderer.theme.getParam(eventName)) && _.isUndefined(Renderer.theme._currentScene.getParam(eventName)) && (val = AppConfig.OVERLAY_SUBMIT), 
        _.isUndefined(Renderer.theme) || _.isUndefined(Renderer.theme._currentScene) || !Renderer.theme._currentScene.isItemScene()) EventBus.dispatch(eventName, "off"); else {
            if ("on" == val) {
                val = !0 === Renderer.theme._currentScene.isReadyToEvaluate() ? "enable" : "disable";
            }
            EventBus.dispatch(eventName, val), this.handleEcmlElements(eventName, val);
        }
    },
    showFeeback: function(showOverlayGoodJob) {
        var returnVal = !0;
        return showOverlayGoodJob ? (returnVal = "on" == this._stageConfig.overlayGoodJob, 
        this.showGoodJobFb(returnVal)) : (returnVal = "on" == this._stageConfig.overlayTryAgain, 
        this.showTryAgainFb(returnVal)), returnVal;
    },
    showGoodJobFb: function(value) {
        1 == value ? (AudioManager.play({
            stageId: Renderer.theme._currentStage,
            asset: "goodjob_sound"
        }), EventBus.dispatch(this._constants.overlayGoodJob, "on")) : EventBus.dispatch(this._constants.overlayGoodJob, "off");
    },
    showTryAgainFb: function(value) {
        1 == value ? (AudioManager.play({
            stageId: Renderer.theme._currentStage,
            asset: "tryagain_sound"
        }), EventBus.dispatch(this._constants.overlayTryAgain, "on")) : EventBus.dispatch(this._constants.overlayTryAgain, "off");
    },
    navigateNext: function() {
        try {
            if (_.isUndefined(Renderer.theme._currentScene)) return;
            if (Renderer.theme._currentScene.isItemScene()) return void this.defaultSubmit();
            this.skipAndNavigateNext();
        } catch (e) {
            showToaster("error", "Current scene having some issue"), EkstepRendererAPI.logErrorEvent(e, {
                severity: "fatal",
                type: "content",
                action: "transitionTo"
            }), console.warn("Fails to navigate to next due to", e);
        }
    },
    skipAndNavigateNext: function() {
        try {
            this.clean(), TelemetryService.interact("TOUCH", "next", null, {
                stageId: Renderer.theme._currentStage
            });
            var navigateTo = this.getNavigateTo("next");
            if (void 0 === navigateTo) {
                if (_.isUndefined(Renderer.theme._currentScene)) return;
                Renderer.theme._currentScene.isItemScene() && !_.isUndefined(Renderer.theme._currentScene._stageController) && Renderer.theme._currentScene._stageController.hasNext() ? this.defaultNavigation("next", navigateTo) : this.moveToEndPage();
            } else this.defaultNavigation("next", navigateTo);
        } catch (e) {
            showToaster("error", "Current scene having some issue"), EkstepRendererAPI.logErrorEvent(e, {
                severity: "fatal",
                type: "content",
                action: "transitionTo"
            }), console.warn("Fails to skip and navigate due to", e);
        }
    },
    moveToEndPage: function() {
        if (config.showEndPage) {
            console.info("redirecting to endpage.");
            var stage = Renderer.theme._currentScene;
            Renderer.theme.setParam(stage.getStagestateKey(), stage._currentState), window.location.hash = "/content/end/" + GlobalContext.currentContentId, 
            AudioManager.stopAll();
        } else console.warn("Cannot move to end page of the content. please check the configurations..");
    },
    clean: function() {
        EventBus.removeEventListener("actionNavigateSkip", this.skipAndNavigateNext, this), 
        EventBus.removeEventListener("actionNavigateNext", this.navigateNext, this), EventBus.removeEventListener("actionNavigatePrevious", this.navigatePrevious, this), 
        EventBus.removeEventListener("actionDefaultSubmit", this.defaultSubmit, this);
    },
    reset: function() {
        this.clean(), this._contentConfig = {}, this._stageConfig = {};
    },
    navigatePrevious: function() {
        try {
            if (_.isUndefined(Renderer.theme._currentScene)) return;
            var navigateToStage = this.getNavigateTo("previous");
            if (_.isUndefined(navigateToStage) && (!Renderer.theme._currentScene.isItemScene() || !Renderer.theme._currentScene._stageController.hasPrevious())) return;
            var navigateTo = this.getNavigateTo("previous");
            if (_.isUndefined(Renderer.theme._currentScene)) return;
            this.defaultNavigation("previous", navigateTo);
        } catch (e) {
            EkstepRendererAPI.logErrorEvent(e, {
                severity: "fatal",
                type: "content",
                action: "transitionTo"
            }), showToaster("error", "Stage having some issue"), console.warn("Fails to navigate to previous due to", e);
        }
    },
    showOrHideEcmlElement: function(id, showEle) {
        var plugin = PluginManager.getPluginObject(id);
        plugin && ("off" == showEle ? plugin.show() : plugin.hide());
    },
    handleEcmlElements: function(eventName, val) {
        if (!_.isUndefined(Renderer.theme) && !_.isUndefined(Renderer.theme._currentScene)) {
            var stage_data = Renderer.theme.getStagesToPreLoad(Renderer.theme._currentScene._data);
            stage_data.next, stage_data.prev;
        }
        switch (eventName) {
          case "overlayNext":
            this.showOrHideEcmlElement("next", val), this.showOrHideEcmlElement("nextContainer", val);
            break;

          case "overlayPrevious":
            this.showOrHideEcmlElement("previous", val), this.showOrHideEcmlElement("previousContainer", val);
            break;

          case "overlaySubmit":
            this.showOrHideEcmlElement("validate", val);
            break;

          case "overlayMenu":
          case "overlayReload":
          case "overlayGoodJob":
          case "overlayTryAGain":
            break;

          default:
            console.log("Default case got called..");
        }
    },
    getNavigateTo: function(navType) {
        var stageParams = [], stageId = void 0;
        if (!_.isUndefined(Renderer.theme) && !_.isUndefined(Renderer.theme._currentScene) && !_.isEmpty(Renderer.theme._currentScene._data.param)) {
            stageParams = _.isArray(Renderer.theme._currentScene._data.param) ? Renderer.theme._currentScene._data.param : [ Renderer.theme._currentScene._data.param ];
            var navParam = _.findWhere(stageParams, {
                name: navType
            });
            navParam && (stageId = navParam.value);
        }
        return stageId;
    },
    defaultSubmit: function() {
        var action = {
            type: "command",
            command: "eval",
            asset: Renderer.theme._currentStage,
            pluginId: Renderer.theme._currentStage
        };
        action.success = "correct_answer", action.failure = "wrong_answer", CommandManager.handle(action);
    },
    defaultNavigation: function(navType, navigateTo) {
        var action = {
            asset: Renderer.theme._id,
            command: "transitionTo",
            duration: "100",
            ease: "linear",
            effect: "fadeIn",
            type: "command",
            pluginId: Renderer.theme._id,
            value: navigateTo
        };
        action.transitionType = navType, CommandManager.handle(action);
    },
    actionReload: function() {
        if (!this._reloadInProgress) {
            var plugin, currentStage = Renderer.theme._currentStage;
            this._reloadInProgress = !0, setTimeout(function() {
                (plugin = PluginManager.getPluginObject(currentStage)) && plugin.reload({
                    type: "command",
                    command: "reload",
                    duration: "100",
                    ease: "linear",
                    effect: "fadeIn",
                    asset: currentStage
                });
            }, 500), TelemetryService.interact("TOUCH", "gc_reload", "TOUCH", {
                stageId: currentStage
            });
        }
    },
    actionReplay: function(data) {
        var version = TelemetryService.getGameVer();
        TelemetryService.end(), GlobalContext.currentContentId && version && startTelemetry(GlobalContext.currentContentId, version), 
        (data.target && data.target.menuReplay || _.isUndefined(data.target)) && (EkstepRendererAPI.removeHtmlElements(), 
        Renderer.theme.reRender());
    }
}, PluginManager = {
    defaultResWidth: 1920,
    defaultResHeight: 1200,
    pluginMap: {},
    pluginObjMap: {},
    init: function(gamePath) {
        EkstepRendererAPI.hasEventListener("plugin:error") || EkstepRendererAPI.addEventListener("plugin:error", this.logErrorEventTelemetry, this);
        var pluginsPath = isbrowserpreview ? AppConfig.PREVIEW_PLUGINSPATH : AppConfig.DEVICE_PLUGINSPATH, pluginRepo = gamePath + pluginsPath, pfConfig = {
            env: "renderer",
            async: async,
            pluginRepo: pluginRepo,
            repos: [ org.ekstep.pluginframework.publishedRepo ]
        };
        org.ekstep.pluginframework.initialize(pfConfig);
    },
    loadPlugins: function(pluginManifest, manifestMedia, cb) {
        var pluginObj = [];
        Array.isArray(pluginManifest) || (pluginObj.push(pluginManifest), pluginManifest = pluginObj), 
        _.each(pluginManifest, function(p) {
            p.ver = parseFloat(p.ver).toFixed(1);
        }), org.ekstep.pluginframework.pluginManager.loadAllPlugins(pluginManifest, manifestMedia, function() {
            console.info("Framework Loaded the plugins"), PluginManager.pluginMap = org.ekstep.pluginframework.pluginManager.plugins, 
            cb && cb();
        });
    },
    registerPlugin: function(id, plugin) {
        org.ekstep.pluginframework.pluginManager._registerPlugin(id, void 0, plugin), createjs.EventDispatcher.initialize(plugin.prototype);
    },
    isPlugin: function(id) {
        return org.ekstep.pluginframework.pluginManager.isPluginDefined(id);
    },
    invoke: function(id, data, parent, stage, theme) {
        return org.ekstep.pluginframework.pluginManager.invokeRenderer(id, data, parent, stage, theme);
    },
    registerPluginObject: function(pluginObj) {
        PluginManager.pluginObjMap[pluginObj.id] = pluginObj, org.ekstep.pluginframework.pluginManager.addPluginInstance(pluginObj);
    },
    getPluginObject: function(id) {
        return org.ekstep.pluginframework.pluginManager.getPluginInstance(id);
    },
    addError: function(error) {
        org.ekstep.pluginframework.pluginManager.addError(error);
    },
    getErrors: function() {
        return org.ekstep.pluginframework.pluginManager.getErrors();
    },
    cleanUp: function() {
        org.ekstep.pluginframework.pluginManager.cleanUp();
    },
    getPlugins: function() {
        return org.ekstep.pluginframework.pluginManager.getPlugins();
    },
    logErrorEventTelemetry: function(event, data) {
        EkstepRendererAPI.logErrorEvent(data.err, {
            type: "plugin",
            action: data.action,
            objectType: data.plugin,
            objectId: data.objectid
        });
    }
}, RecorderManager = {
    mediaInstance: void 0,
    recording: !1,
    appDataDirectory: void 0,
    mediaFiles: [],
    _autostop: {
        default_success: "rec_stopped",
        default_failure: "rec_stop_failed",
        method: void 0,
        action: void 0
    },
    _root: void 0,
    init: function() {
        document.addEventListener("deviceready", function() {
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem) {
                RecorderManager._root = fileSystem.root;
            }, function(e) {
                console.log("[ERROR] Problem setting up root filesystem for running! Error to follow."), 
                console.log(JSON.stringify(e));
            }), RecorderManager.appDataDirectory = cordova.file.externalDataDirectory || cordova.file.dataDirectory;
        });
    },
    startRecording: function(action) {
        AudioManager.stopAll();
        var plugin = PluginManager.getPluginObject(action.asset), stagePlugin = plugin._stage || plugin, stageId = stagePlugin._id, path = RecorderManager._getFilePath(stageId);
        RecorderManager.recording || (speech.startRecording(path, function(response) {
            "success" == response.status && action.success ? stagePlugin.dispatchEvent(action.success) : "error" == response.status && action.failure && stagePlugin.dispatchEvent(action.failure);
        }), RecorderManager._setAutostopAction(action), RecorderManager._autostop.method = setTimeout(function() {
            RecorderManager.stopRecording(RecorderManager._autostop.action);
        }, action.timeout ? action.timeout : 1e4)), RecorderManager.recording = !0;
    },
    stopRecording: function(action) {
        1 == RecorderManager.recording && speech.stopRecording(function(response) {
            if (RecorderManager.recording = !1, "success" == response.status && RecorderManager._cleanRecording(), 
            void 0 !== action && action.asset) {
                var plugin = PluginManager.getPluginObject(action.asset), stagePlugin = plugin._stage || plugin, stageId = stagePlugin._id;
                if ("success" == response.status) {
                    var currentRecId = "current_rec";
                    AssetManager.loadAsset(stageId, currentRecId, response.filePath), AudioManager.destroy(stageId, currentRecId), 
                    action.success && stagePlugin.dispatchEvent(action.success);
                } else "error" == response.status && action.failure && stagePlugin.dispatchEvent(action.failure);
            }
        });
    },
    processRecording: function(action) {
        var plugin = PluginManager.getPluginObject(action.asset), stagePlugin = plugin._stage || plugin, lineindex = stagePlugin.evaluateExpr(action.dataAttributes.lineindex);
        speech.processRecording(lineindex, null, function(response) {
            "success" == response.status && response.result ? (console.info("Processed recording result:", JSON.stringify(response)), 
            1 == response.result.totalScore ? action.success && stagePlugin.dispatchEvent(action.success) : action.failure && stagePlugin.dispatchEvent(action.failure)) : (console.info("Error while processing audio:", JSON.stringify(response)), 
            action.failure && stagePlugin.dispatchEvent(action.failure));
        });
    },
    _getFilePath: function(stageId) {
        var currentDate = new Date(), path = "";
        return RecorderManager.appDataDirectory && (path += RecorderManager.appDataDirectory), 
        GlobalContext && GlobalContext.user && GlobalContext.user.uid && (path = path + GlobalContext.user.uid + "_"), 
        TelemetryService && TelemetryService._gameData && TelemetryService._gameData.id && (path = path + TelemetryService._gameData.id + "_"), 
        path = path + stageId + "_" + currentDate.getTime() + ".wav", RecorderManager.mediaFiles.push(path), 
        path;
    },
    _getTimeoutEventName: function(status, action) {
        var eventName = "";
        return void 0 !== action["timeout-" + status] ? eventName = action["timeout-" + status] : Renderer.theme._currentScene.appEvents.indexOf(RecorderManager._autostop["default_" + status]) > -1 ? eventName = RecorderManager._autostop["default_" + status] : console.error("Invalid stopRecord events for timeout:", Renderer.theme._currentScene.appEvents), 
        eventName;
    },
    _setAutostopAction: function(startAction) {
        var stopAction = _.clone(startAction);
        stopAction.success = RecorderManager._getTimeoutEventName("success", stopAction), 
        stopAction.failure = RecorderManager._getTimeoutEventName("failure", stopAction), 
        RecorderManager._autostop.action = stopAction;
    },
    _cleanRecording: function() {
        clearTimeout(RecorderManager._autostop.method), RecorderManager._autostop.method = void 0, 
        RecorderManager._autostop.action = void 0;
    }
}, TimerManager = {
    instances: {},
    start: function(action) {
        var delay = action.delay || 0, stageId = Renderer.theme._currentStage, instance = setTimeout(function() {
            stageId == Renderer.theme._currentStage && CommandManager.handle(_.omit(action, "delay"));
        }, delay);
        console.info("action: " + (action.command || action.type) + " delayed by " + action.delay + "ms."), 
        TimerManager.instances[stageId] ? TimerManager.instances[stageId].push({
            timeout: instance,
            action: action
        }) : TimerManager.instances[stageId] = [ {
            timeout: instance,
            action: action
        } ];
    },
    stop: function() {},
    pause: function() {},
    resume: function() {},
    stopAll: function(stageId) {
        var timoutInsts = TimerManager.instances[stageId];
        timoutInsts && _.isArray(timoutInsts) && (timoutInsts.forEach(function(inst) {
            clearTimeout(inst.timeout);
        }), delete TimerManager.instances[stageId]);
    },
    destroy: function() {
        var instances = TimerManager.instances;
        for (stageId in instances) TimerManager.stopAll(stageId);
        TimerManager.instances = {};
    }
};

var Command = Class.extend({
    _name: void 0,
    _methodName: void 0,
    _action: void 0,
    _isPluginAction: !0,
    _isAsync: !1,
    init: function(action) {
        this._action = action, CommandManager._setDataAttributes(action), this._action.cb = this._callBack.bind(this), 
        this.invoke(this._action), this._invokeRelatedActions("siblings"), this._isAsync || this._action.cb({
            status: "success"
        });
    },
    getPluginObject: function() {
        var plugin = PluginManager.getPluginObject(this._action.asset);
        return !0 === this._action.parent && plugin && plugin._parent && (plugin = plugin._parent), 
        plugin || (plugin = this._action.pluginObj), plugin;
    },
    invoke: function(action) {
        this.getPluginObject()[this._methodName](action);
    },
    _invokeRelatedActions: function(relation) {
        (_.isUndefined(this._action.stageInstanceId) || this._action.stageInstanceId == Renderer.theme._currentScene._stageInstanceId) && this._action[relation] && this._action[relation].length > 0 && _.each(this._action[relation], function(action) {
            CommandManager.handle(action);
        });
    },
    _callBack: function(response) {
        _(Renderer.theme).isUndefined() || void 0 !== response && "success" == response.status && (console.info(this._name + " completed."), 
        this._invokeRelatedActions("children"));
    }
}), AnimateCommand = Command.extend({
    _name: "ANIMATE",
    _isAsync: !0,
    invoke: function(action) {
        AnimationManager.handle(action);
    }
});

CommandManager.registerCommand("ANIMATE", AnimateCommand);

var BlurCommand = Command.extend({
    _name: "BLUR",
    _methodName: "blur"
});

CommandManager.registerCommand("BLUR", BlurCommand);

var CustomCommand = Command.extend({
    _name: "CUSTOM",
    _isPluginAction: !1,
    invoke: function(action) {
        var plugin = this.getPluginObject();
        plugin && action.invoke && plugin[action.invoke](action);
    }
});

CommandManager.registerCommand("CUSTOM", CustomCommand);

var DefaultNextCommand = Command.extend({
    _name: "DEFAULTNEXT",
    _methodName: "defaultNext",
    invoke: function(action) {
        console.log("Theme : action", action), EventBus.dispatch("actionNavigateNext", action);
    }
});

CommandManager.registerCommand("DEFAULTNEXT", DefaultNextCommand);

var EraseCommand = Command.extend({
    _name: "ERASE",
    _methodName: "clear",
    initCommand: function(action) {}
});

CommandManager.registerCommand("ERASE", EraseCommand);

var EvalCommand = Command.extend({
    _name: "EVAL",
    _methodName: "evaluate",
    invoke: function(action) {
        this.getPluginObject().evaluate(action);
    }
});

CommandManager.registerCommand("EVAL", EvalCommand);

var EventCommand = Command.extend({
    _name: "EVENT",
    _isPluginAction: !1,
    initCommand: function(action) {},
    invoke: function(action) {
        EventManager.dispatchEvent(action.asset, action.value);
    }
});

CommandManager.registerCommand("EVENT", EventCommand);

var ExternalCommand = Command.extend({
    _name: "EXTERNAL",
    _isPluginAction: !1,
    invoke: function(action) {
        action.href ? window.open(action.href, "_system") : startApp(action.app);
    }
});

CommandManager.registerCommand("EXTERNAL", ExternalCommand);

var HideCommand = Command.extend({
    _name: "HIDE",
    _methodName: "hide",
    initCommand: function(action) {}
});

CommandManager.registerCommand("HIDE", HideCommand);

var HideHTMLElementsCommand = Command.extend({
    _name: "HIDEHTMLELEMENTS",
    _isPluginAction: !1,
    invoke: function(action) {
        CommandManager.displayAllHtmlElements(!1);
    }
});

CommandManager.registerCommand("HIDEHTMLELEMENTS", HideHTMLElementsCommand);

var PauseCommand = Command.extend({
    _name: "PAUSE",
    _methodName: "pause",
    invoke: function(action) {
        var plugin = this.getPluginObject();
        void 0 === plugin && (plugin = AudioManager), plugin[this._methodName](action);
    }
});

CommandManager.registerCommand("PAUSE", PauseCommand);

var PlayCommand = Command.extend({
    _name: "PLAY",
    _methodName: "play",
    _isAsync: !0,
    invoke: function(action) {
        var plugin = this.getPluginObject();
        void 0 === plugin && (plugin = AudioManager), plugin[this._methodName](action);
    }
});

CommandManager.registerCommand("PLAY", PlayCommand);

var ProcessRecordCommand = Command.extend({
    _name: "PROCESSRECORD",
    _isPluginAction: !1,
    invoke: function(action) {
        RecorderManager.processRecording(action);
    }
});

CommandManager.registerCommand("PROCESSRECORD", ProcessRecordCommand);

var RefreshCommand = Command.extend({
    _name: "REFRESH",
    _methodName: "refresh",
    initCommand: function(action) {}
});

CommandManager.registerCommand("REFRESH", RefreshCommand);

var ReloadCommand = Command.extend({
    _name: "RELOAD",
    _methodName: "reload",
    initCommand: function(action) {}
});

CommandManager.registerCommand("RELOAD", ReloadCommand);

var ResetCommand = Command.extend({
    _name: "RESET",
    _isPluginAction: !1,
    invoke: function(action) {
        var c = ControllerManager.instanceMap[action.cType + "." + action.controller];
        void 0 !== c ? c.reset() : console.warn("No controller find with id:", action.controller);
    }
});

CommandManager.registerCommand("RESET", ResetCommand);

var RestartCommand = Command.extend({
    _name: "RESTART",
    _methodName: "restart",
    initCommand: function(action) {}
});

CommandManager.registerCommand("RESTART", RestartCommand);

var SetCommand = Command.extend({
    _name: "SET",
    invoke: function(action) {
        var plugin = this.getPluginObject();
        plugin && "set" == plugin._type ? plugin.setParamValue(action) : plugin && plugin.setPluginParamValue(action);
    }
});

CommandManager.registerCommand("SET", SetCommand);

var ShowCommand = Command.extend({
    _name: "SHOW",
    _methodName: "show",
    initCommand: function(action) {}
});

CommandManager.registerCommand("SHOW", ShowCommand);

var ShowHTMLElementsCommand = Command.extend({
    _name: "SHOWHTMLELEMENTS",
    _isPluginAction: !1,
    invoke: function(action) {
        CommandManager.displayAllHtmlElements(!0);
    }
});

CommandManager.registerCommand("SHOWHTMLELEMENTS", ShowHTMLElementsCommand);

var StartGenieCommand = Command.extend({
    _name: "STARTGENIE",
    _isPluginAction: !1,
    invoke: function(action) {
        TelemetryService._gameData.id != packageName && TelemetryService._gameData.id != packageNameDelhi ? (TelemetryService.end(TelemetryService._gameData.id), 
        setTimeout(function() {
            exitApp();
        }, 500)) : exitApp();
    }
});

CommandManager.registerCommand("STARTGENIE", StartGenieCommand);

var StartRecordCommand = Command.extend({
    _name: "STARTRECORD",
    _isPluginAction: !1,
    invoke: function(action) {
        RecorderManager.startRecording(action);
    }
});

CommandManager.registerCommand("STARTRECORD", StartRecordCommand);

var StopCommand = Command.extend({
    _name: "STOP",
    _stopMethod: "stop",
    _stopAllMethod: "stopAll",
    invoke: function(action) {
        var plugin = this.getPluginObject();
        void 0 === plugin && (plugin = AudioManager), !0 === action.sound ? AudioManager[this._stopAllMethod](action) : plugin[this._stopMethod](action);
    }
});

CommandManager.registerCommand("STOP", StopCommand);

var StopRecordCommand = Command.extend({
    _name: "STOPRECORD",
    _isPluginAction: !1,
    invoke: function(action) {
        RecorderManager.stopRecording(action);
    }
});

CommandManager.registerCommand("STOPRECORD", StopRecordCommand);

var TogglePlayCommand = Command.extend({
    _name: "TOGGLEPLAY",
    _methodName: "togglePlay",
    _isAsync: !0,
    invoke: function(action) {
        var plugin = this.getPluginObject();
        void 0 === plugin && (plugin = AudioManager), plugin[this._methodName](action);
    }
});

CommandManager.registerCommand("TOGGLEPLAY", TogglePlayCommand);

var ToggleShadowCommand = Command.extend({
    _name: "TOGGLESHADOW",
    _methodName: "toggleShadow",
    initCommand: function(action) {}
});

CommandManager.registerCommand("TOGGLESHADOW", ToggleShadowCommand);

var ToggleShowCommand = Command.extend({
    _name: "TOGGLESHOW",
    _methodName: "toggleShow",
    initCommand: function(action) {}
});

CommandManager.registerCommand("TOGGLESHOW", ToggleShowCommand);

var TransitionToCommand = Command.extend({
    _name: "TRANSITIONTO",
    _methodName: "transitionTo",
    initCommand: function(action) {}
});

CommandManager.registerCommand("TRANSITIONTO", TransitionToCommand);

var UnblurCommand = Command.extend({
    _name: "UNBLUR",
    _methodName: "unblur",
    initCommand: function(action) {}
});

CommandManager.registerCommand("UNBLUR", UnblurCommand);

var WindowEventCommand = Command.extend({
    _name: "WINDOWEVENT",
    _isPluginAction: !1,
    invoke: function(action) {
        var mimeType = GlobalContext.previousContentMimeType ? GlobalContext.previousContentMimeType : GlobalContext.currentContentMimeType;
        GlobalContext.previousContentMimeType || COLLECTION_MIMETYPE == mimeType ? window.location.hash = "#/content/list/" + GlobalContext.previousContentId : CONTENT_MIMETYPES.indexOf(mimeType) > -1 ? window.location.hash = "#/show/content/" + GlobalContext.currentContentId : console.warn("Invalid mimeType to handle WINDOWEVENT:", mimeType);
    }
});

CommandManager.registerCommand("WINDOWEVENT", WindowEventCommand);

var Controller = Class.extend({
    _id: "",
    _data: void 0,
    _type: void 0,
    _model: void 0,
    _repeat: 0,
    _index: -1,
    _loaded: !1,
    _error: !1,
    init: function(c, baseDir) {
        this._type = c.type, this._id = c.type + "." + c.id, this.initController(c, baseDir);
    },
    initController: function(c, baseDir) {
        ControllerManager.addError("Subclasses of Controller should implement initController()");
    },
    onLoad: function(data, model) {
        ControllerManager.addError("Subclasses of Controller should implement onLoad()");
    },
    reset: function() {
        this._index = -1;
    },
    setIndex: function(idx) {
        this._loaded && (idx && (this._index = idx), this._index < -1 && (this._index = -1), 
        this._index >= this._repeat && (this._index = this._repeat - 1));
    },
    incrIndex: function(incr) {
        this._loaded && (incr || (incr = 1), this._index = this._index + incr, this._index >= this._repeat && (this._index = this._repeat - 1));
    },
    decrIndex: function(decr) {
        this._loaded && (decr || (decr = 1), this._index = this._index - decr, this._index < -1 && (this._index = -1));
    },
    getModel: function() {
        var m;
        if (_.isArray(this._model)) {
            var index = this._index;
            index < 0 && (index = 0), m = this._model[index];
        } else m = this._model;
        return m;
    },
    getTemplate: function() {
        var t;
        if (this._model) {
            var m = this.getModel();
            m && m.template && (t = m.template);
        }
        return t;
    },
    getModelValue: function(param) {
        var val;
        if (this._model && param) {
            var m = this.getModel();
            if (m) {
                try {
                    val = eval("m." + param);
                } catch (e) {}
                if (!val && m.model) {
                    m = m.model;
                    try {
                        val = eval("m." + param);
                    } catch (e) {}
                }
            }
        } else this._model && (val = this.getModel());
        return val;
    },
    setModelValue: function(name, val, param) {
        if (name) {
            var m = this.getModel();
            if (m) {
                var o = eval("m." + name);
                !o && m.model && (m = m.model);
                var expr = "m." + name;
                param && (expr += "." + param), expr += " = " + JSON.stringify(val);
                try {
                    eval(expr);
                } catch (e) {}
            }
        }
    },
    getCount: function() {
        return this._repeat;
    },
    hasNext: function() {
        return !!this._loaded && this._index < this._repeat - 1;
    },
    hasPrevious: function() {
        return !!this._loaded && this._index > 0;
    },
    next: function() {
        var d;
        return this.hasNext() && (this._index += 1, d = this._getCurrentModelItem()), d;
    },
    previous: function() {
        var d;
        return this.hasPrevious() && (this._index -= 1, d = this._getCurrentModelItem()), 
        d;
    },
    current: function() {
        var d;
        return this._loaded && this._index >= 0 && this._index <= this._repeat - 1 && (d = this._getCurrentModelItem()), 
        d;
    },
    evalItem: function() {
        ControllerManager.addError("evalItem() is not supported by this Controller");
    },
    feedback: function() {
        ControllerManager.addError("feedback() is not supported by this Controller");
    },
    _getCurrentModelItem: function() {
        var item;
        return item = _.isArray(this._model) ? this._model[this._index] : this._model, item && item.model && (item = item.model), 
        item;
    }
}), DataController = Controller.extend({
    initController: function(dc, baseDir) {
        if (dc.__cdata) {
            var data = _.isString(dc.__cdata) ? JSON.parse(dc.__cdata) : dc.__cdata;
            this.onLoad(data);
        } else DataGenerator.loadData(baseDir, dc.type, dc.id, this);
    },
    onLoad: function(data) {
        data ? (ControllerManager.registerControllerInstance(this._id, this), this._data = data, 
        this._loaded = !0, data.model ? this._model = data.model : this._model = data, _.isArray(this._model) ? this._repeat = this._model.length : this._repeat = 1) : this._error = !0;
    }
});

ControllerManager.registerController("data", DataController);

var ItemController = Controller.extend({
    assessStartEvent: void 0,
    initController: function(ic, baseDir) {
        if (ic.__cdata) {
            var data = _.isString(ic.__cdata) ? JSON.parse(ic.__cdata) : ic.__cdata;
            ItemDataGenerator._onLoad(data, this);
        } else ItemDataGenerator.loadData(baseDir, ic.type, ic.id, this);
    },
    onLoad: function(data, model) {
        _.isObject(data) && _.isArray(model) ? (ControllerManager.registerControllerInstance(this._id, this), 
        this._data = data, this._loaded = !0, this._model = model, this._repeat = this._model.length) : this._error = !0;
    },
    next: function() {
        var d;
        try {
            if (this.hasNext()) {
                this._index += 1;
                var item = this._model[this._index];
                if (item) {
                    this.resetItem(item), void 0 !== item.model && null != item.model || (item.model = {}), 
                    d = item.model;
                    try {
                        this.assessStartEvent = TelemetryService.assess(_.isString(item.identifier) && !_.isEmpty(item.identifier) ? item.identifier : item.qid.trim(), this._data.subject, item.qlevel, {
                            maxscore: item.max_score
                        }).start();
                    } catch (e) {
                        EkstepRendererAPI.logErrorEvent(e, {
                            type: "content",
                            severity: "fatal",
                            action: "transitionTo",
                            objectId: item.identifier,
                            objectType: "question"
                        }), ControllerManager.addError("ItemController.next() - OE_ASSESS_START error: " + e);
                    }
                }
            } else this.resetItem(this._model[this._index]);
            return d;
        } catch (e) {
            EkstepRendererAPI.logErrorEvent(e, {
                type: "content",
                severity: "fatal",
                action: "transitionTo"
            }), showToaster("error", "Invalid questions"), console.warn("Item controller have some issue due to", e);
        }
    },
    resetItem: function(item) {
        item && ("ftb" == item.type.toLowerCase() ? FTBEvaluator.reset(item) : "mcq" == item.type.toLowerCase() || "mmcq" == item.type.toLowerCase() ? MCQEvaluator.reset(item) : "mtf" == item.type.toLowerCase() && MTFEvaluator.reset(item));
    },
    evalItem: function() {
        try {
            var result, item = this.getModel();
            "ftb" == item.type.toLowerCase() ? result = FTBEvaluator.evaluate(item) : "mcq" == item.type.toLowerCase() || "mmcq" == item.type.toLowerCase() ? result = MCQEvaluator.evaluate(item) : "mtf" == item.type.toLowerCase() && (result = MTFEvaluator.evaluate(item)), 
            result && (result.pass, item.score = result.score);
            var data = {
                pass: result.pass,
                score: item.score,
                res: result.res,
                mmc: item.mmc,
                qindex: item.qindex,
                mc: _.pluck(item.concepts, "identifier"),
                qtitle: item.title,
                qdesc: item.description ? item.description : ""
            };
            TelemetryService.assessEnd(this.assessStartEvent, data);
        } catch (e) {
            console.warn("Item controller failed due to", e), EkstepRendererAPI.logErrorEvent(e, {
                type: "content",
                severity: "error",
                action: "eval",
                objectId: item.identifier,
                objectType: "question"
            }), showToaster("error", "Evaluation Fails"), ControllerManager.addError("ItemController.evalItem() - OE_ASSESS_END error: " + e);
        }
        return console.info("Item Eval result:", result), result;
    },
    feedback: function() {
        var message, feedback = this._data.feedback;
        if (feedback) {
            var score = 0;
            this._model && (_.isArray(this._model) ? this._model.forEach(function(item) {
                item.score && (score += item.score);
            }) : this._model.score && (score = this._model.score));
            var percent = parseInt(score / this._data.max_score * 100);
            feedback.forEach(function(range) {
                var min = 0, max = 100;
                range.range && (range.range.min && (min = range.range.min), range.range.max && (max = range.range.max)), 
                percent >= min && percent <= max && (message = range.message);
            });
        }
        return message;
    }
});

ControllerManager.registerController("items", ItemController);

var DataGenerator = {
    _loaderMap: {},
    loadData: function(baseDir, type, id, controller, dataType) {
        var folder = type;
        dataType = dataType ? dataType.toLowerCase() : "json";
        var filename = id + "." + dataType, fullPath = baseDir + "/" + folder + "/" + filename;
        jQuery.getJSON(fullPath, function(data) {
            DataGenerator._onLoad(data, controller);
        }).fail(function() {
            console.error("error while fetching json: " + fullPath);
        });
    },
    _onLoad: function(data, controller) {
        controller.onLoad(data);
    }
}, ItemDataGenerator = {
    _loaderMap: {},
    loadData: function(baseDir, type, id, controller) {
        var folder = type, filename = id + ".json", fullPath = baseDir + "/" + folder + "/" + filename;
        jQuery.getJSON(fullPath, function(data) {
            ItemDataGenerator._onLoad(data, controller);
        }).fail(function() {
            console.error("error while fetching json: " + fullPath);
        });
    },
    _onLoad: function(data, controller) {
        var model = ItemDataGenerator._getItems(data);
        data = _.omit(data, "items"), controller.onLoad(data, model);
    },
    _getItems: function(data) {
        var list = [];
        if (_.isObject(data)) {
            var total_items = data.total_items, item_sets = data.item_sets, items = data.items, shuffle = !0, optionShuffle = !0;
            if (void 0 !== data.shuffle && (shuffle = data.shuffle), void 0 !== data.optionShuffle && (optionShuffle = data.optionShuffle), 
            item_sets && items) {
                var cumulativeIndex = 0;
                item_sets.forEach(function(map, setidx) {
                    items[map.id] && (list = ItemDataGenerator._addItems(map.id, map.count, items, list, shuffle, optionShuffle, cumulativeIndex), 
                    cumulativeIndex += items[map.id].length);
                }), total_items && list.length > total_items && (list = _.first(list, total_items));
            }
        }
        return list;
    },
    _addItems: function(id, count, items, list, shuffle, optionShuffle, cumulativeIndex) {
        var set = items[id];
        if (_.isArray(set)) {
            for (var indexArr = [], i = 0; i < set.length; i++) indexArr[i] = i;
            set.length < count && (count = set.length);
            for (var pick = [], qindex = 0, i = 0; i < count; i++) {
                if (shuffle) {
                    var randNum = _.random(0, indexArr.length - 1);
                    pick[i] = set[indexArr[randNum]], qindex = indexArr[randNum], indexArr[randNum] = indexArr[indexArr.length - 1], 
                    indexArr.splice(indexArr.length - 1, 1);
                } else pick[i] = set[indexArr[i]], qindex = i;
                var item = pick[i];
                "mcq" == item.type.toLowerCase() || "mmcq" == item.type.toLowerCase() ? (optionShuffle && (item.options = _.shuffle(item.options)), 
                ItemDataGenerator._registerResValues(item.options)) : "mtf" == item.type.toLowerCase() && (optionShuffle && (item.rhs_options = _.shuffle(item.rhs_options)), 
                ItemDataGenerator._registerResValues(item.lhs_options), ItemDataGenerator._registerResValues(item.rhs_options)), 
                pick[i].qindex = cumulativeIndex + qindex + 1;
            }
            list = _.union(list, pick);
        }
        return list;
    },
    _registerResValues: function(options) {
        _.each(options, function(option, index) {
            void 0 === option.value.resvalue && (option.value.resvalue = option.value.asset || option.value.text || option.value.image || option.value.count || option.value.audio || "option" + index), 
            option.value.resindex = index;
        });
    }
}, TemplateDataGenerator = {
    _getItems: function(data) {
        var list = [];
        if (_.isObject(data)) {
            var total_items = data.total_items, item_sets = data.item_sets, items = data.items;
            if (item_sets && items && (item_sets.forEach(function(map) {
                list = TemplateDataGenerator._selectTemplate(map.id, map.count, items, list);
            }), total_items && list.length > total_items && (list = _.first(list, total_items))), 
            list.length != total_items) return console.log("list contains insufficent number of items."), 
            list = [];
        }
        return list;
    },
    _selectTemplate: function(id, count, items, list) {
        for (var set = items[id], i = 0; i < count; i++) {
            var randNum = _.random(0, set.length - 1);
            list = TemplateDataGenerator._generateItems(set[randNum], list);
        }
        return list;
    },
    _generateItems: function(pick, list) {
        var item, tempItem;
        if (pick.parameterized) {
            item = JSON.stringify(pick), item = JSON.parse(item), tempItem = JSON.stringify(pick), 
            tempItem = JSON.parse(tempItem), item.model && (item = TemplateDataGenerator._getParamsData(item, tempItem));
            var count = 0;
            if (item.restrictions) for (;!TemplateDataGenerator._applyRestrictions(item); ) if (item = TemplateDataGenerator._getParamsData(item, tempItem), 
            ++count > 25) return console.log("Unable to satisfy restrictions. Check restriction conditions."), 
            list;
            item.answer && _.map(item.answer, function(param, key) {
                _.map(item.answer[key], function(obj, key1) {
                    _.isString(obj) && "$" == obj.substring(0, 1) && (item.answer[key][key1] = TemplateDataGenerator._computeExpression(obj, item));
                });
            });
        }
        return item.restrictions && delete item.restrictions, list.push(item), list;
    },
    _getParamsData: function(item, tempItem) {
        return tempItem.model && _.map(tempItem.model, function(param, key) {
            _.map(tempItem.model[key], function(count, key1) {
                _.isObject(count) && (item.model[key][key1] = _.random(count.min, count.max)), _.isString(count) && "$" == count.substring(0, 1) && (item.model[key][key1] = TemplateDataGenerator._computeExpression(count, item));
            });
        }), item;
    },
    _applyRestrictions: function(item) {
        var bool = !0;
        return item.restrictions && _.each(item.restrictions, function(str) {
            for (var tempArr = TemplateDataGenerator._splitByOperator(str.substring(2, str.length - 1)), paramList = [], fn = "(function()  {return function(", j = 0; j < tempArr.length; j += 2) parseInt(tempArr[j]) || (fn += tempArr[j] + ",", 
            paramList.push(item.model[tempArr[j]]));
            fn = fn.substring(0, fn.length - 1) + "){return(" + str.substring(2, str.length - 1) + ")}})()", 
            bool *= eval(fn).apply(null, paramList);
        }), bool;
    },
    _computeExpression: function(str, item) {
        for (var paramList = [], tempArr = TemplateDataGenerator._splitByOperator(str.substring(2, str.length - 1)), fn = "(function()  {return function(", k = 0; k < tempArr.length; k++) fn += tempArr[k] + ",", 
        paramList.push(item.model[tempArr[k]]);
        return fn = fn.substring(0, fn.length - 1) + "){return(" + str.substring(2, str.length - 1) + ")}})()", 
        eval(fn).apply(null, paramList);
    },
    _splitByOperator: function(str) {
        for (var matchPattern = /[^\s()*\/%+-]+/g, temp = str.match(matchPattern), tempArr = [], i = 0; i < temp.length; i++) {
            var temp1 = temp[i].split(".");
            tempArr.push(temp1[0]);
        }
        return tempArr;
    }
};

MCQEvaluator = {
    evaluate: function(item) {
        var result = {}, pass = !0, score = 0, res = [];
        if (item) {
            var options = item.options;
            if (_.isArray(options)) {
                var isMCQ = !1, answersCount = 0;
                if (options.forEach(function(opt) {
                    1 == opt.answer && answersCount++;
                }), answersCount > 1) isMCQ = !1; else {
                    if (1 != answersCount) return void console.warn("Its not MCQ and MMCQ");
                    isMCQ = !0;
                }
                options.forEach(function(opt) {
                    if (opt.selected) {
                        var tuple = {};
                        tuple[opt.value.resindex] = opt.value.resvalue, res.push(tuple);
                    }
                    !0 === opt.answer ? opt.selected ? score += _.isNumber(opt.score) ? opt.score : 1 : pass = !1 : !0 === opt.selected && (pass = !1, 
                    1 == isMCQ && delete opt.selected);
                });
            }
            pass || (result.feedback = item.feedback, item.partial_scoring || (score = 0));
        }
        return result.pass = pass, result.score = score, result.res = res, result;
    },
    reset: function(item) {
        if (item) {
            var options = item.options;
            _.isArray(options) && options.forEach(function(opt) {
                opt.selected = void 0;
            });
        }
    }
}, FTBEvaluator = {
    evaluate: function(item) {
        var result = {}, pass = !0, score = 0, res = [];
        if (item) {
            var answer = item.answer, passCount = 0, model = item.model || {};
            for (var ans in answer) {
                if (model[ans]) {
                    var obj = {};
                    obj[ans] = model[ans], res.push(obj);
                }
                if (void 0 !== model[ans] && void 0 !== answer[ans] && void 0 !== answer[ans].value) {
                    var isCorrect = this._isCorrectAnswer(answer[ans].value, model[ans]);
                    if (console.info(isCorrect, "isCorrect"), isCorrect) {
                        var s = answer[ans].score;
                        score += _.isNumber(s) ? s : 1, passCount++;
                    } else passCount--;
                    pass = passCount == res.length;
                } else console.warn("Answer is undefined", answer), pass = !1;
            }
            pass || (result.feedback = item.feedback, item.partial_scoring || (score = 0));
        }
        return result.pass = pass, result.score = score, result.res = res, result;
    },
    _isCorrectAnswer: function(actual, given) {
        var isCorrect = !1;
        if (actual = _.isString(actual) ? actual.toLowerCase() : actual, given = _.isString(given) ? given.toLowerCase() : given, 
        _.isString(actual)) if (-1 < actual.indexOf(",")) {
            var actualList = actual.split(",");
            for (var index in actualList) if (actualList[index] == given) {
                isCorrect = !0;
                break;
            }
        } else isCorrect = actual == given; else isCorrect = actual == given;
        return isCorrect;
    },
    reset: function(item) {
        if (item) {
            var answer = item.answer, model = item.model || {};
            for (var ans in answer) model[ans] && (model[ans] = "");
        }
    }
}, MTFEvaluator = {
    evaluate: function(item) {
        var result = {}, pass = !0, score = 0, res = [];
        if (item) {
            var options = item.rhs_options;
            if (_.isArray(options) && _.each(options, function(opt) {
                if (void 0 !== opt.selected) {
                    var obj = {};
                    obj[opt.value.resvalue] = opt.value.mapped, res.push(obj);
                }
                void 0 !== opt.answer ? opt.answer == opt.selected && (score += _.isNumber(opt.score) ? opt.score : 1) : void 0 !== opt.selected && (pass = !1);
            }), pass) {
                var ansMatched = _.isEqual(_.pluck(options, "selected"), _.pluck(options, "answer"));
                pass = ansMatched;
            }
            pass || (result.feedback = item.feedback, item.partial_scoring || (score = 0));
        }
        return result.pass = pass, result.score = score, result.res = res, result;
    },
    reset: function(item) {
        if (item) {
            var options = item.rhs_options;
            _.isArray(options) && options.forEach(function(opt) {
                opt.selected = void 0, delete opt.value.mapped;
            });
        }
    }
};

var LayoutPlugin = Plugin.extend({
    _isContainer: !0,
    _render: !0,
    _cells: [],
    _cellsCount: 0,
    _iterateModel: void 0,
    initPlugin: function(data) {
        this._cells = [], this._cellsCount = 0, this._self = new createjs.Container();
        var dims = this.relativeDims();
        if (this._self.x = dims.x, this._self.y = dims.y, _.isUndefined(data.iterate) && _.isUndefined(data.count)) return void console.warn("LayoutPlugin require iterate or count", data);
        void 0 !== data.count && (this._cellsCount = data.count);
        var model = data.iterate;
        model = this._iterateModel = this.replaceExpressions(model);
        var dataObjs = this._stage.getModelValue(model);
        if (dataObjs) {
            var length = dataObjs.length;
            this._cellsCount = length < this._cellsCount || 0 == this._cellsCount ? length : this._cellsCount;
        }
        this.generateLayout(), this.renderLayout(), this._enableEvents = !1;
    },
    generateLayout: function() {
        PluginManager.addError("Subclasses of layout plugin should implement generateLayout()");
    },
    renderLayout: function() {
        var instance = this, index = 0;
        this._cells.forEach(function(data) {
            var cellECML = instance.getInnerECML(), cellEvents = instance.getCellEvents();
            instance._stage._templateVars[instance._data.var] = instance._iterateModel + "[" + index + "]", 
            instance._addCellAttributes(data), Object.assign && Object.assign(data, cellECML);
            var resolvedEvents = instance.resolveActionModelValues(cellEvents);
            Object.assign && Object.assign(data, resolvedEvents), PluginManager.invoke("g", data, instance, instance._stage, instance._theme), 
            index++;
        });
    },
    _addCellAttributes: function(data) {
        data.padX = this._data.padX || 0, data.padY = this._data.padY || 0, data.snapX = this._data.snapX, 
        data.snapY = this._data.snapY, data.stroke = this._data.stroke, data["stroke-width"] = this._data["stroke-width"], 
        data.events = this._data.events, data.event = this._data.event, this._data.shadow && (data.shadowColor = this._data.shadow), 
        this._data.highlight && (data.highlight = this._data._highlight), _.isFinite(this._data.blur) && (data.blur = this._data.blur), 
        _.isFinite(this._data.offsetX) && (data.offsetX = this._data.offsetX), _.isFinite(this._data.offsetY) && (data.offsetY = this._data.offsetY), 
        this._data.opacity && (data.opacity = this._data.opacity);
    },
    getCellEvents: function() {
        var events = void 0, instance = this;
        return instance._data.events ? _.isArray(instance._data.events) ? (events = [], 
        instance._data.events.forEach(function(e) {
            events.push.apply(events, e.event);
        })) : events = instance._data.events.event : events = instance._data.event, events;
    },
    resolveActionModelValues: function(events) {
        var returnEvents = void 0, instance = this, updateAction = function(tempAction) {
            var action = _.clone(tempAction);
            if (action.asset_model) {
                var model = action.asset_model, val = instance._stage.getModelValue(model);
                action.asset = val, delete action.asset_model;
            }
            if (action["ev-model"]) {
                var model = action["ev-model"], val = instance._stage.getModelValue(model);
                action.value = val, action["param-value"] = val, delete action["ev-model"];
            }
            return action;
        }, updateEvent = function(evt) {
            var returnEvent = {
                type: evt.type
            };
            return _.isArray(evt.action) ? (returnEvent.action = [], evt.action.forEach(function(action) {
                returnEvent.action.push(updateAction(action));
            })) : evt.action && (returnEvent.action = updateAction(evt.action)), returnEvent;
        };
        return _.isArray(events) ? (returnEvents = {
            events: [],
            hitArea: !0
        }, events.forEach(function(e) {
            returnEvents.events.push(updateEvent(e));
        })) : events && (returnEvents = {
            hitArea: !0
        }, returnEvents.event = updateEvent(events)), returnEvents;
    }
}), ShapePlugin = Plugin.extend({
    _type: "shape",
    _isContainer: !1,
    _render: !0,
    initPlugin: function(data) {
        this._self = new createjs.Shape();
        var graphics = this._self.graphics, dims = this.relativeDims();
        data.fill && graphics.beginFill(data.fill), data.stroke && graphics.beginStroke(data.stroke), 
        data["stroke-width"] && graphics.setStrokeStyle(data["stroke-width"]);
        var radius = data.radius || 10;
        switch (data.type = data.type ? data.type.toLowerCase() : "rect", data.type) {
          case "rect":
            if (graphics.dr(0, 0, dims.w, dims.h), data.hitArea) {
                var hit = new createjs.Shape();
                hit.graphics.beginFill("#000").r(0, 0, dims.w, dims.h), this._self.hitArea = hit;
            }
            break;

          case "roundrect":
            if (graphics.drawRoundRect(0, 0, dims.w, dims.h, radius), data.hitArea) {
                var hit = new createjs.Shape();
                hit.graphics.beginFill("#000").r(0, 0, dims.w, dims.h), this._self.hitArea = hit;
            }
            break;

          case "circle":
            if (graphics.dc(0, 0, dims.r || dims.w), data.hitArea) {
                var hit = new createjs.Shape();
                hit.graphics.beginFill("#000").dc(0, 0, dims.w), this._self.hitArea = hit;
            }
            break;

          case "ellipse":
            if (graphics.de(0, 0, dims.w, dims.h), data.hitArea) {
                var hit = new createjs.Shape();
                hit.graphics.beginFill("#000").de(0, 0, dims.w, dims.h), this._self.hitArea = hit;
            }
            break;

          default:
            this.drawPolygon(data, dims, graphics);
        }
        graphics.cp(), this._self.x = dims.x, this._self.y = dims.y, _.isUndefined(data.opacity) || (this._self.alpha = data.opacity);
    },
    drawBorder: function() {},
    drawPolygon: function(data, dims, graphics) {
        var points = this.getPoints(data);
        if (!points) return void console.log("Unsupported shape");
        var end = points[points.length - 1], x = dims.w * (end.x || 0) / 100, y = dims.h * (end.y || 0) / 100;
        graphics.moveTo(x, y), points.forEach(function(point) {
            x = dims.w * (point.x || 0) / 100, y = dims.h * (point.y || 0) / 100, graphics.lineTo(x, y);
        });
    },
    getPoints: function(data) {
        var shape = data.type, sides = data.sides, corners = data.corners;
        "trapezium" != shape && (sides ? shape = sides + "polygon" : corners && (shape = corners + "star"));
        var points;
        if (this.shapes.hasOwnProperty(shape)) points = this.shapes[shape]; else if (data.config.__cdata) try {
            var config = JSON.parse(data.config.__cdata);
            points = config.points;
        } catch (err) {
            console.log("Points array not available");
        }
        return points;
    },
    shapes: {
        "4star": [ {
            x: 100,
            y: 50
        }, {
            x: 62.7,
            y: 62.7
        }, {
            x: 50,
            y: 100
        }, {
            x: 37.3,
            y: 62.7
        }, {
            x: 0,
            y: 50
        }, {
            x: 37.3,
            y: 37.3
        }, {
            x: 50,
            y: 0
        }, {
            x: 62.7,
            y: 37.3
        } ],
        "5star": [ {
            x: 50,
            y: 0
        }, {
            x: 60.9,
            y: 35
        }, {
            x: 100,
            y: 35
        }, {
            x: 67.6,
            y: 60
        }, {
            x: 79.4,
            y: 100
        }, {
            x: 50,
            y: 72
        }, {
            x: 20.6,
            y: 100
        }, {
            x: 32.4,
            y: 60
        }, {
            x: 0,
            y: 35
        }, {
            x: 39.1,
            y: 35
        } ],
        "6star": [ {
            x: 50,
            y: 100
        }, {
            x: 35,
            y: 76
        }, {
            x: 0,
            y: 75
        }, {
            x: 20,
            y: 50
        }, {
            x: 0,
            y: 25
        }, {
            x: 35,
            y: 24
        }, {
            x: 50,
            y: 0
        }, {
            x: 65,
            y: 24
        }, {
            x: 100,
            y: 25
        }, {
            x: 80,
            y: 50
        }, {
            x: 100,
            y: 75
        }, {
            x: 65,
            y: 76
        } ],
        "7star": [ {
            x: 100,
            y: 59.8
        }, {
            x: 74,
            y: 68
        }, {
            x: 72.9,
            y: 100
        }, {
            x: 50.8,
            y: 80
        }, {
            x: 29.6,
            y: 100
        }, {
            x: 27.1,
            y: 69.4
        }, {
            x: 0,
            y: 62.5
        }, {
            x: 20.6,
            y: 44.1
        }, {
            x: 10,
            y: 19.9
        }, {
            x: 36.2,
            y: 23.3
        }, {
            x: 48.6,
            y: 0
        }, {
            x: 62.3,
            y: 22.6
        }, {
            x: 88.2,
            y: 17.7
        }, {
            x: 79,
            y: 42.5
        } ],
        "8star": [ {
            x: 100,
            y: 50
        }, {
            x: 82.3,
            y: 63.4
        }, {
            x: 85.4,
            y: 85.4
        }, {
            x: 63.4,
            y: 82.3
        }, {
            x: 50,
            y: 100
        }, {
            x: 36.6,
            y: 82.3
        }, {
            x: 14.6,
            y: 85.4
        }, {
            x: 17.7,
            y: 63.4
        }, {
            x: 0,
            y: 50
        }, {
            x: 17.7,
            y: 36.6
        }, {
            x: 14.6,
            y: 14.6
        }, {
            x: 36.6,
            y: 17.7
        }, {
            x: 50,
            y: 0
        }, {
            x: 63.4,
            y: 17.7
        }, {
            x: 85.4,
            y: 14.6
        }, {
            x: 82.3,
            y: 36.6
        } ],
        "9star": [ {
            x: 100,
            y: 40.2
        }, {
            x: 84.6,
            y: 55.3
        }, {
            x: 93.8,
            y: 74
        }, {
            x: 73.1,
            y: 76.3
        }, {
            x: 68.1,
            y: 100
        }, {
            x: 50.8,
            y: 85
        }, {
            x: 33.9,
            y: 100
        }, {
            x: 28.1,
            y: 77.3
        }, {
            x: 7.3,
            y: 75.9
        }, {
            x: 15.7,
            y: 56.8
        }, {
            x: 0,
            y: 42.4
        }, {
            x: 19.3,
            y: 33.2
        }, {
            x: 17,
            y: 12.4
        }, {
            x: 37.3,
            y: 17.4
        }, {
            x: 48.9,
            y: 0
        }, {
            x: 61.3,
            y: 16.9
        }, {
            x: 81.3,
            y: 11
        }, {
            x: 79.9,
            y: 31.8
        } ],
        "10star": [ {
            x: 100,
            y: 65.5
        }, {
            x: 78.3,
            y: 70.6
        }, {
            x: 79.4,
            y: 90.5
        }, {
            x: 60.8,
            y: 83.3
        }, {
            x: 50,
            y: 100
        }, {
            x: 39.2,
            y: 83.3
        }, {
            x: 20.6,
            y: 90.5
        }, {
            x: 21.7,
            y: 70.6
        }, {
            x: 0,
            y: 65.5
        }, {
            x: 15,
            y: 50
        }, {
            x: 0,
            y: 34.5
        }, {
            x: 21.7,
            y: 29.4
        }, {
            x: 20.6,
            y: 9.5
        }, {
            x: 39.2,
            y: 16.7
        }, {
            x: 50,
            y: 0
        }, {
            x: 60.8,
            y: 16.7
        }, {
            x: 79.4,
            y: 9.5
        }, {
            x: 78.3,
            y: 29.4
        }, {
            x: 100,
            y: 34.5
        }, {
            x: 85,
            y: 50
        } ],
        "3polygon": [ {
            x: 50,
            y: 0
        }, {
            x: 100,
            y: 100
        }, {
            x: 0,
            y: 100
        } ],
        "4polygon": [ {
            x: 50,
            y: 0
        }, {
            x: 100,
            y: 50
        }, {
            x: 50,
            y: 100
        }, {
            x: 0,
            y: 50
        } ],
        "5polygon": [ {
            x: 50,
            y: 0
        }, {
            x: 100,
            y: 34.5
        }, {
            x: 79.4,
            y: 100
        }, {
            x: 20.6,
            y: 100
        }, {
            x: 0,
            y: 34.5
        } ],
        "6polygon": [ {
            x: 100,
            y: 50
        }, {
            x: 75,
            y: 100
        }, {
            x: 25,
            y: 100
        }, {
            x: 0,
            y: 50
        }, {
            x: 25,
            y: 0
        }, {
            x: 75,
            y: 0
        } ],
        "7polygon": [ {
            x: 50,
            y: 0
        }, {
            x: 89.1,
            y: 18.8
        }, {
            x: 100,
            y: 61.1
        }, {
            x: 71.7,
            y: 100
        }, {
            x: 28.3,
            y: 100
        }, {
            x: 0,
            y: 61.1
        }, {
            x: 10.9,
            y: 18.8
        } ],
        "8polygon": [ {
            x: 100,
            y: 69.1
        }, {
            x: 69.1,
            y: 100
        }, {
            x: 30.9,
            y: 100
        }, {
            x: 0,
            y: 69.1
        }, {
            x: 0,
            y: 30.9
        }, {
            x: 30.9,
            y: 0
        }, {
            x: 69.1,
            y: 0
        }, {
            x: 100,
            y: 30.9
        } ],
        "9polygon": [ {
            x: 50,
            y: 0
        }, {
            x: 82.1,
            y: 11.7
        }, {
            x: 100,
            y: 41.3
        }, {
            x: 93.3,
            y: 75
        }, {
            x: 67.1,
            y: 100
        }, {
            x: 32.9,
            y: 100
        }, {
            x: 6.7,
            y: 75
        }, {
            x: 0,
            y: 41.3
        }, {
            x: 17.9,
            y: 11.7
        } ],
        "10polygon": [ {
            x: 100,
            y: 50
        }, {
            x: 90.5,
            y: 79.4
        }, {
            x: 65.5,
            y: 100
        }, {
            x: 34.5,
            y: 100
        }, {
            x: 9.5,
            y: 79.4
        }, {
            x: 0,
            y: 50
        }, {
            x: 9.5,
            y: 20.6
        }, {
            x: 34.5,
            y: 0
        }, {
            x: 65.5,
            y: 0
        }, {
            x: 90.5,
            y: 20.6
        } ],
        trapezium: [ {
            x: 25,
            y: 0
        }, {
            x: 75,
            y: 0
        }, {
            x: 100,
            y: 100
        }, {
            x: 0,
            y: 100
        } ]
    }
});

PluginManager.registerPlugin("shape", ShapePlugin), AnimationPlugin = Class.extend({
    _data: void 0,
    init: function(data, plugin) {
        this._data = data, this._id = data.id || _.uniqueId("animation"), this.initPlugin(data, plugin), 
        AnimationManager.registerPluginObject(this);
    },
    initPlugin: function(data, plugin) {
        PluginManager.addError("Subclasses of AnimationPlugin should implement this function");
    },
    animate: function(plugin) {
        PluginManager.addError("Subclasses of AnimationPlugin should implement play()");
    }
});

var AudioPlugin = Plugin.extend({
    _type: "audio",
    _isContainer: !1,
    _id: void 0,
    _state: "stop",
    _render: !1,
    initPlugin: function(data) {
        this._id = data.asset;
    },
    play: function(action) {
        AudioManager.play(action);
    },
    togglePlay: function(action) {
        AudioManager.togglePlay(action);
    },
    pause: function(action) {
        AudioManager.pause(action);
    },
    stop: function(action) {
        !0 === action.sound ? AudioManager.stopAll(action) : AudioManager.stop(action);
    },
    stopAll: function(action) {
        AudioManager.stopAll(action);
    }
});

PluginManager.registerPlugin("audio", AudioPlugin);

var ContainerPlugin = Plugin.extend({
    _type: "g",
    _isContainer: !0,
    _render: !0,
    initPlugin: function(data) {
        this._self = new createjs.Container();
        var dims = this.relativeDims();
        if (this._self.x = dims.x, this._self.y = dims.y, data.hitArea) {
            var hit = new createjs.Shape();
            hit.graphics.beginFill("#000").r(0, 0, dims.w, dims.h), this._self.hitArea = hit;
        }
        data.rotate && this.rotation(data), this.invokeChildren(data, this, this._stage, this._theme);
    },
    refresh: function() {
        if (_.isArray(this._childIds)) for (var i = 0; i < this._childIds.length; i++) {
            var childPlugin = PluginManager.getPluginObject(this._childIds[i]);
            childPlugin && childPlugin.refresh();
        }
    }
});

PluginManager.registerPlugin("g", ContainerPlugin);

var DivPlugin = HTMLPlugin.extend({
    _type: "div",
    initPlugin: function(data) {
        this._input = void 0;
        var dims = this.relativeDims(), div = document.getElementById(data.id);
        div && jQuery("#" + data.id).remove(), div = document.createElement("div"), data.style && div.setAttribute("style", data.style), 
        div.id = data.id, div.style.width = dims.w + "px", div.style.height = dims.h + "px", 
        div.style.position = "absolute";
        var parentDiv = document.getElementById(Renderer.divIds.gameArea);
        parentDiv.insertBefore(div, parentDiv.childNodes[0]);
        var textStr = "";
        data.$t || data.__text ? textStr = data.$t || data.__text : data.model ? textStr = this._stage.getModelValue(data.model) || "" : data.param && (textStr = this.getParam(data.param.trim()) || "");
        data.__cdata;
        jQuery("#" + data.id).append(data.__cdata), this._div = div, this._self = new createjs.DOMElement(div), 
        this._self.x = dims.x, this._self.y = dims.y, this.registerEvents(data.id);
    },
    registerEvents: function(id) {
        var instance = this;
        jQuery("#" + id).children().each(function() {
            var data = jQuery(this).data();
            data && data.event && jQuery(this).click(function(event) {
                event.preventDefault(), instance._triggerEvent(data.event), console.info("Triggered event ", data.event);
            });
        });
    },
    _triggerEvent: function(event) {
        var plugin = PluginManager.getPluginObject(Renderer.theme._currentStage);
        event = new createjs.Event(event), plugin && plugin.dispatchEvent(event);
    }
});

PluginManager.registerPlugin("div", DivPlugin);

var EmbedPlugin = Plugin.extend({
    _type: "embed",
    _isContainer: !1,
    _render: !0,
    initPlugin: function(data) {
        if (data.template || data["template-name"]) {
            var templateId = data["template-name"] ? data["template-name"] : this._stage.getTemplate(data.template), template = this._theme._templateMap[templateId];
            if (template) {
                for (var k in data) if ("template" !== k && "template-name" !== k) if ("var-" == k.substring(0, 4)) this._stage._templateVars[k.substring(4)] = data[k]; else if ("ev-" == k.substring(0, 3)) {
                    var expr = this.replaceExpressions(data[k]);
                    this._stage._templateVars[k.substring(3)] = expr;
                } else this._stage._templateVars[k] = data[k];
                this._self = new createjs.Container(), data.w = data.w || 100, data.h = data.h || 100;
                var dims = this.relativeDims();
                this._self.x = dims.x, this._self.y = dims.y, this.invokeChildren(template, this, this._stage, this._theme);
            }
        }
    },
    refresh: function() {
        if (_.isArray(this._childIds)) for (var i = 0; i < this._childIds.length; i++) {
            var childPlugin = PluginManager.getPluginObject(this._childIds[i]);
            childPlugin && childPlugin.refresh();
        }
    },
    replaceExpressions: function(model) {
        for (var arr = [], idx = 0, nextIdx = model.indexOf("${", idx), endIdx = model.indexOf("}", idx + 1); -1 != nextIdx && -1 != endIdx; ) {
            var expr = model.substring(nextIdx, endIdx + 1);
            arr.push(expr), idx = endIdx, nextIdx = model.indexOf("${", idx), endIdx = model.indexOf("}", idx + 1);
        }
        if (arr.length > 0) for (var i = 0; i < arr.length; i++) {
            var val = this.evaluateExpr(arr[i]);
            model = model.replace(arr[i], val);
        }
        return model;
    }
});

PluginManager.registerPlugin("embed", EmbedPlugin);

var GridlayoutPlugin = LayoutPlugin.extend({
    _type: "grid",
    generateLayout: function() {
        var tableProps = this.getTableProperties(), marginX = 0;
        _.isFinite(this._data.marginX) && (marginX = this._data.marginX);
        var marginY = 0;
        _.isFinite(this._data.marginY) && (marginY = this._data.marginY);
        for (var cw = (100 - (tableProps.cols - 1) * marginX) / tableProps.cols, ch = (100 - (tableProps.rows - 1) * marginY) / tableProps.rows, r = 0; r < tableProps.rows; r++) for (var c = 0; c < tableProps.cols; c++) if (this._cells.length < this._cellsCount) {
            var data = {};
            data.x = c * (cw + marginX), data.y = r * (ch + marginY), data.w = cw, data.h = ch, 
            this._cells.push(data);
        }
    },
    getTableProperties: function() {
        var cols = void 0, rows = void 0, count = this._cellsCount;
        return this._data.rows && this._data.cols ? (cols = this._data.cols, rows = Math.ceil(count / cols)) : (this._data.rows && (rows = this._data.rows), 
        this._data.cols && (cols = this._data.cols), this._data.rows ? cols = Math.ceil(count / rows) : rows = Math.ceil(count / cols)), 
        {
            cols: cols,
            rows: rows
        };
    }
});

PluginManager.registerPlugin("grid", GridlayoutPlugin);

var HighlightTextPlugin = HTMLPlugin.extend({
    _type: "htext",
    _wordIds: [],
    _timings: [],
    _isPlaying: !1,
    _isPaused: !1,
    _wordClass: "gc-ht-word",
    _listener: void 0,
    _audioInstance: void 0,
    _position: {
        previous: 0,
        current: 0,
        pause: 0
    },
    _time: 0,
    initPlugin: function(data) {
        this._cleanupHighlight();
        var font, dims = this.relativeDims();
        data.id || (data.id = this._data.id = _.uniqueId("plugin")), data.highlight || (data.highlight = this._data.highlight = "#DDDDDD");
        var div = document.createElement("div");
        div.id = data.id, div.style.width = dims.w + "px", div.style.height = dims.h + "px", 
        div.style.top = "-1000px", div.style.position = "relative";
        var fontsize = "1.2em";
        if (data.fontsize && (fontsize = data.fontsize), isFinite(fontsize) && data.w) {
            var exp = parseFloat(PluginManager.defaultResWidth * data.w / 100), cw = this._parent.dimensions().w, width = parseFloat(cw * data.w / 100), scale = parseFloat(width / exp);
            fontsize = parseFloat(fontsize * scale), fontsize += "px";
        }
        var h_offset = data.offsetX ? data.offsetX : 0, v_offset = data.offsetY ? data.offsetY : 0, Blur = data.blur ? data.blur : 1, shadow_color = data.shadow ? data.shadow : "#ccc", shadow = h_offset + "px " + v_offset + "px " + Blur + "px " + shadow_color;
        1 == /\d/.test(data.font) ? (font = data.font, div.style.font = data.font) : (font = fontsize + " " + data.font, 
        div.style["font-family"] = data.font, div.style["font-size"] = fontsize), data.weight && (div.style.font = data.weight + " " + font), 
        div.style.outline = data.outline ? data.outline : 0, div.style["line-height"] = data.lineHeight ? data.lineHeight : "1.2em", 
        div.style["text-align"] = data.align ? data.align : "left", div.style["vertical-align"] = data.valign ? data.valign : "top", 
        div.style.color = data.color ? data.color : "black", div.style.textShadow = shadow;
        var parentDiv = document.getElementById(Renderer.divIds.gameArea);
        parentDiv.insertBefore(div, parentDiv.childNodes[0]), data.timings && (this._timings = _.map(data.timings.split(","), function(time) {
            return Number(Number(time).toFixed(0));
        }));
        var text = this._getText(), htmlText = this._tokenize(text);
        jQuery("#" + data.id).append(htmlText), this._div = div, this._self = new createjs.DOMElement(div), 
        this._self.x = dims.x, this._self.y = dims.y + 1e3, this._registerEvents(data.id);
    },
    getWordId: function(index) {
        return this._stage._data.id + "-text-" + this._data.id + "-word-" + index;
    },
    play: function(action) {
        var instance = this, audio = action.audio || this._data.audio;
        if (this._timings.length > 0) if (this._isPaused) instance._resume(action); else {
            this._isPlaying = !0;
            if (audio) {
                var soundInstance = this._playAudio(audio);
                soundInstance.on("complete", function() {
                    instance._cleanupHighlight(), void 0 !== action.cb && action.cb({
                        status: "success"
                    });
                }), this._listener = function() {
                    if ((_.isUndefined(instance._audioInstance) || _.isUndefined(instance._audioInstance.object)) && instance._listener) return void createjs.Ticker.removeEventListener("tick", instance._listener);
                    instance._position.current = Number(instance._audioInstance.object.position.toFixed(0)), 
                    instance._highlight(), instance._position.previous = instance._position.current;
                };
            } else this._time = Date.now(), this._listener = function() {
                instance._isPaused || (instance._position.current = Date.now() - instance._time + instance._position.pause, 
                instance._highlight(), instance._position.previous > instance._timings[instance._timings.length - 1] + 500 && (instance._cleanupHighlight(), 
                void 0 !== action.cb && action.cb({
                    status: "success"
                })), instance._position.previous = instance._position.current);
            };
            createjs.Ticker.addEventListener("tick", instance._listener);
        } else console.info("No timing data to play highlight text:", this._id);
    },
    pause: function(action) {
        if (this._isPlaying) {
            var instance = this, audio = action.audio || this._data.audio;
            this._timings.length > 0 ? (instance._isPaused = !0, audio ? AudioManager.pause({
                asset: audio
            }, instance._audioInstance) : instance._position.pause = instance._position.current) : console.info("No timing data:", this._id);
        } else console.info("highlight is not playing to pause:", this._id);
    },
    togglePlay: function(action) {
        this._isPlaying && !this._isPaused ? (this.pause(action), void 0 !== action.cb && action.cb({
            status: "success"
        })) : this.play(action);
    },
    _resume: function(action) {
        var instance = this, audio = action.audio || this._data.audio;
        this._timings.length > 0 ? (instance._isPaused = !1, audio ? AudioManager.play({
            asset: audio,
            stageId: instance._stage._id
        }, instance._audioInstance) : instance._time = Date.now()) : console.info("No timing data:", this._id);
    },
    stop: function(action) {
        var instance = this, audio = action.audio || this._data.audio;
        this._timings.length > 0 ? (audio && AudioManager.stop({
            asset: audio,
            stageId: instance._stage._id
        }), instance._cleanupHighlight()) : console.info("No timing data:", this._id);
    },
    _playAudio: function(audio) {
        var instance = this;
        return instance._data.audio = audio, instance._audioInstance = AudioManager.play({
            asset: audio,
            stageId: this._stage._id
        }), instance._audioInstance.object;
    },
    _highlight: function() {
        var instance = this;
        if (instance._position.current && instance._isPlaying) {
            var matches = _.filter(instance._timings, function(time) {
                return time >= instance._position.previous && time < instance._position.current;
            });
            matches.length > 0 && _.each(matches, function(match) {
                var index = instance._timings.indexOf(match), wordId = instance.getWordId(index);
                instance._removeHighlight(), instance._addHighlight(wordId);
            });
        }
    },
    _cleanupHighlight: function() {
        this._isPlaying = !1, this._removeHighlight(), this._listener && createjs.Ticker.removeEventListener("tick", this._listener), 
        this._audioInstance && (this._audioInstance = void 0), this._time = 0, this._position = {
            previous: 0,
            current: 0,
            pause: 0
        };
    },
    _removeHighlight: function() {
        jQuery("." + this._wordClass).css({
            "background-color": "none",
            padding: "0px"
        });
    },
    _addHighlight: function(id) {
        jQuery("#" + id).css({
            background: this._data.highlight
        });
    },
    _tokenize: function(text) {
        var htmlText = "";
        Replaced_text = text.replace(/(\r\n|\n|\r)/gm, " </br> ");
        var words = Replaced_text.split(" ");
        this._wordIds = [];
        var index = 0;
        for (i = 0; i < words.length; i++) if ("" === words[i]) htmlText += '<span class="gc-ht-word">&nbsp;</span> '; else if ("</br>" === words[i]) htmlText += '<span class="gc-ht-word"></br></span> '; else {
            var wordId = this.getWordId(index);
            this._wordIds.push(wordId), htmlText += '<span id="' + wordId + '" class="gc-ht-word">' + words[i] + "</span> ", 
            index++;
        }
        return htmlText;
    },
    _getText: function() {
        var textStr = "";
        return this._data.$t || this._data.__text ? textStr = this._data.$t || this._data.__text : this._data.model ? textStr = this._stage.getModelValue(this._data.model) || "" : this._data.param && (textStr = this.getParam(this._data.param.trim()) || ""), 
        textStr;
    },
    _registerEvents: function(id) {
        var instance = this;
        jQuery("#" + id).children().each(function() {
            var data = jQuery(this).data();
            data && data.event && jQuery(this).click(function(event) {
                event.preventDefault(), instance._triggerEvent(data.event), console.info("Triggered event ", data.event);
            });
        });
    },
    _triggerEvent: function(event) {
        var plugin = PluginManager.getPluginObject(Renderer.theme._currentStage);
        event = new createjs.Event(event), plugin.dispatchEvent(event);
    }
});

PluginManager.registerPlugin("htext", HighlightTextPlugin);

var HotspotPlugin = ShapePlugin.extend({
    _type: "hotspot",
    _isContainer: !1,
    _render: !0,
    initPlugin: function(data) {
        data.fill = void 0, data.hitArea = !0, this._super(data);
    }
});

PluginManager.registerPlugin("hotspot", HotspotPlugin);

var ImagePlugin = Plugin.extend({
    _type: "image",
    _isContainer: !1,
    _render: !0,
    initPlugin: function(data) {
        var instance = this, asset = "";
        if (data.asset ? ("validate" !== data.asset && "next" !== data.asset && "previous" !== data.asset || (data.visible = !1), 
        asset = data.asset) : data.model ? asset = this._stage.getModelValue(data.model) : data.param && (asset = this.getParam(data.param)), 
        _.isEmpty(asset)) this._render = !1, console.warn("ImagePlugin: Asset not found", data); else {
            var img, assetSrc = this._theme.getAsset(asset);
            _.isString(assetSrc) ? (img = new Image(), img.crossOrigin = "Anonymous", img.src = assetSrc) : img = assetSrc;
            var s = new createjs.Bitmap(img);
            this._self = s;
            var dims = this.relativeDims();
            if (_.isString(assetSrc)) this._self.visible = !1, AssetManager.strategy.loadAsset(this._stage._data.id, asset, assetSrc, function() {
                Renderer.update = !0, setTimeout(function() {
                    s.getBounds() && instance.setScale(), dims = instance.alignDims(), s.x = dims.x, 
                    s.y = dims.y, instance._self.visible = !!_.isUndefined(instance._data.visible) || instance._data.visible, 
                    Renderer.update = !0;
                }, 100);
            }); else {
                s.getBounds() && this.setScale();
            }
            dims = this.alignDims(), s.x = dims.x, s.y = dims.y, Renderer.update = !0;
        }
    },
    alignDims: function() {
        var parentDims = this._parent.dimensions(), dims = this._dimensions, align = this._data.align ? this._data.align.toLowerCase() : "", valign = this._data.valign ? this._data.valign.toLowerCase() : "";
        return "left" == align ? dims.x = 0 : "right" == align ? dims.x = parentDims.w - dims.w : "center" == align && (dims.x = (parentDims.w - dims.w) / 2), 
        "top" == valign ? dims.y = 0 : "bottom" == valign ? dims.y = parentDims.h - dims.h : "middle" == valign && (dims.y = (parentDims.h - dims.h) / 2), 
        this._dimensions;
    },
    refresh: function() {
        var asset = "";
        if ((asset = this._data.model ? this._stage.getModelValue(this._data.model) : this._data.param ? this.getParam(this._data.param) : this._data.asset) && this._theme && this._self) {
            var image = this._theme.getAsset(asset);
            this._self.image = image, Renderer.update = !0;
        }
    }
});

PluginManager.registerPlugin("image", ImagePlugin);

var InputPlugin = HTMLPlugin.extend({
    _type: "input",
    _input: void 0,
    initPlugin: function(data) {
        this._input = void 0;
        var controller = this._stage._stageController;
        _.isUndefined(controller) ? console.warn("there is no FTB item") : (plugindata = this.getState(controller._model[controller._index].type), 
        _.isUndefined(plugindata) || (controller._model[controller._index].model = _.isEmpty(plugindata) ? controller._model[controller._index].model : plugindata));
        var fontsize = data.fontsize || "1.6em", fontweight = data.weight || "normal", color = data.color || "#000000", background = data.fill || "white", font = data.font || "Arial", border = data.stroke || "#000000";
        data.stroke = "";
        var dims = this.relativeDims(), input = document.getElementById(data.id);
        input && jQuery("#" + data.id).remove(), input = document.createElement("input"), 
        input.id = data.id, input.type = data.type, input.style.top = "-1000px", input.style.width = dims.w + "px", 
        input.style.height = dims.h + "px", input.style.minWidth = dims.w + "px", input.style.minHeight = dims.h + "px", 
        input.style.setProperty("font-size", fontsize, "important"), input.style.setProperty("font-weight", fontweight, "important"), 
        input.style.setProperty("font-family", font, "important"), input.style.setProperty("color", color, "important"), 
        input.style.setProperty("background-color", background, "important"), input.style.setProperty("border-color", border, "important"), 
        input.className = data.class, input.style.display = "none";
        var val, instance = this;
        if (data.model) {
            var model = data.model;
            val = this._stage.getModelValue(model);
        } else data.param && (val = this._stage.params[data.param.trim()]);
        input.value = val || "";
        var div = document.getElementById("gameArea");
        div.insertBefore(input, div.childNodes[0]), this._input = input, this._self = new createjs.DOMElement(input), 
        this._self.x = dims.x, this._self.y = dims.y + 1e3, this._theme.inputs.push(data.id), 
        this._stage._inputs.push(this);
        var instance = this;
        $("input").on("change", function() {
            instance.updateState(!0);
        }), instance.updateState(!1);
    },
    setModelValue: function() {
        if (this._data.model) {
            var model = this._data.model;
            this._stage.setModelValue(model, this._input.value);
        }
    },
    updateState: function(isStateChanged) {
        this.setModelValue();
        var controller = this._stage._stageController;
        if (_.isUndefined(controller)) console.warn("There is no ctrl in this stage"), this.setState(this._data.id, this._input.value, isStateChanged); else {
            var cModel = controller._model[controller._index];
            this.setState(cModel.type, cModel.model, isStateChanged);
        }
    }
});

PluginManager.registerPlugin("input", InputPlugin), PluginManager.registerPlugin("launcher", Plugin.extend({
    initialize: function() {
        EkstepRendererAPI.addEventListener("renderer:launcher:initLauncher", this.initLauncher, this);
    },
    initLauncher: function(evt, content) {
        console.info("launcher init is calling..");
        var dispatcher = [ {
            mimeType: "application/vnd.ekstep.html-archive",
            event: "renderer:html:launch",
            id: "org.ekstep.htmlrenderer",
            ver: 1,
            type: "plugin"
        }, {
            mimeType: "application/vnd.ekstep.ecml-archive",
            event: "renderer:ecml:launch",
            id: "org.ekstep.renderer",
            ver: 1,
            type: "plugin"
        } ], contentTypePlugin = _.findWhere(dispatcher, {
            mimeType: content.mimeType
        });
        _.isUndefined(contentTypePlugin) ? Renderer.start(content.baseDir, "gameCanvas", content) : (PluginManager.init("/renderer"), 
        this.loadPlugin(contentTypePlugin, content));
    },
    loadPlugin: function(plugin, content) {
        PluginManager.loadPlugins(plugin, [], function() {
            EkstepRendererAPI.dispatchEvent(plugin.event, void 0, content);
        });
    }
}));

var MCQPlugin = Plugin.extend({
    _type: "mcq",
    _isContainer: !0,
    _render: !0,
    _multi_select: !1,
    _options: [],
    _controller: void 0,
    _shadow: "#0470D8",
    _blur: 30,
    _offsetX: 0,
    _offsetY: 0,
    _highlight: "#E89241",
    initPlugin: function(data) {
        this._multi_select = !1, this._options = [], this._shadow = "#0470D8", this._blur = 30, 
        this._offsetX = 0, this._offsetY = 0;
        var model = data.model;
        if (model) {
            var controller = this._stage.getController(model), plugindata = this.getState(this._type);
            if (_.isUndefined(plugindata) || (controller._model[controller._index].options = _.isEmpty(plugindata) ? controller._model[controller._index].options : plugindata), 
            controller) {
                this.updateState(controller, !1), this._controller = controller, this._multi_select = data.multi_select, 
                void 0 !== this._multi_select && null != this._multi_select || (this._multi_select = !1), 
                this._data.x = this._parent._data.x, this._data.y = this._parent._data.y, this._data.w = this._parent._data.w, 
                this._data.h = this._parent._data.h, this._self = new createjs.Container();
                var dims = this.relativeDims();
                this._self.x = dims.x, this._self.y = dims.y, data.shadow && (this._shadow = data.shadow, 
                data.shadow = void 0), data.highlight && (this._highlight = data.highlight), _.isFinite(data.blur) && (this._blur = data.blur), 
                _.isFinite(data.offsetX) && (this._offsetX = data.offsetX), _.isFinite(data.offsetY) && (this._offsetY = data.offsetY), 
                this._multi_select = this.isMultiSelect(), this.invokeChildren(data, this, this._stage, this._theme);
            }
        }
    },
    isMultiSelect: function() {
        var ansLength = 0, options = this._controller ? this._controller.getModelValue("options") : void 0;
        return options && (ansLength = _.filter(options, function(option) {
            return 1 == option.answer;
        }).length), ansLength > 1;
    },
    selectOption: function(option) {
        var controller = this._controller;
        this._multi_select || this._options.forEach(function(o) {
            o._index != option._index && o.hasShadow() && (o.removeShadow(), controller.setModelValue(o._model, !1, "selected"));
        });
        var val = void 0;
        return option && (val = option.toggleShadow(), controller.setModelValue(option._model, val, "selected")), 
        this.updateState(controller, !0), Renderer.update = !0, val;
    },
    updateState: function(controller, isStateChanged) {
        if (!_.isUndefined(controller._model)) {
            var model = controller._model[controller._index];
            this.setState(model.type, model.options, isStateChanged);
        }
    }
});

PluginManager.registerPlugin("mcq", MCQPlugin);

var MTFPlugin = Plugin.extend({
    _type: "mtf",
    _isContainer: !0,
    _render: !0,
    _lhs_options: [],
    _rhs_options: [],
    _force: !1,
    _controller: void 0,
    initPlugin: function(data) {
        this._lhs_options = [], this._rhs_options = [], this._force = !1;
        var model = data.model;
        if (model) {
            var controller = this._stage.getController(model), plugindata = this.getState(this._type);
            if (_.isUndefined(plugindata) || (controller._model[controller._index].rhs_options = _.isEmpty(plugindata) ? controller._model[controller._index].rhs_options : plugindata), 
            controller) {
                this.updateState(controller, !1), this._controller = controller, this._force = data.force, 
                void 0 !== this._force && null != this._force || (this._force = !1), this._data.x = this._parent._data.x, 
                this._data.y = this._parent._data.y, this._data.w = this._parent._data.w, this._data.h = this._parent._data.h, 
                this._self = new createjs.Container();
                var dims = this.relativeDims();
                this._self.x = dims.x, this._self.y = dims.y, this.invokeChildren(data, this, this._stage, this._theme);
            }
        }
    },
    getLhsOption: function(index) {
        var option;
        return this._lhs_options.forEach(function(opt) {
            opt._index == index && (option = opt);
        }), option;
    },
    setAnswer: function(rhsOption, lhsIndex) {
        this._controller.setModelValue(rhsOption._model, lhsIndex, "selected");
    },
    setAnswerMapping: function(rhsOption, lhsOption) {
        _.isUndefined(lhsOption) ? (delete rhsOption._value.mapped, this._controller.setModelValue(rhsOption._model, void 0, "selected")) : (rhsOption._value.mapped = lhsOption._value.resvalue, 
        this._controller.setModelValue(rhsOption._model, lhsOption._index, "selected")), 
        this.updateState(this._controller, !0);
    },
    removeAnswer: function(rhsOption, lhsIndex) {
        this._controller.setModelValue(rhsOption._model, lhsIndex, "");
    },
    updateState: function(controller, isStateChanged) {
        if (!_.isUndefined(controller._model)) {
            var model = controller._model[controller._index];
            this.setState(model.type, model.rhs_options, isStateChanged);
        }
    }
});

PluginManager.registerPlugin("mtf", MTFPlugin);

var OptionPlugin = Plugin.extend({
    _type: "option",
    _isContainer: !1,
    _render: !1,
    _index: -1,
    _model: void 0,
    _value: void 0,
    _answer: void 0,
    _multiple: !1,
    _mapedTo: void 0,
    _uniqueId: void 0,
    _modelValue: void 0,
    initPlugin: function(data) {
        this._model = void 0, this._value = void 0, this._answer = void 0, this._index = -1, 
        this._uniqueId = _.uniqueId("opt_");
        var model = data.option, value = void 0;
        if (data.multiple && (this._multiple = data.multiple), this._parent._controller && model) {
            this._model = model;
            value = this._parent._controller.getModelValue(model), this._index = parseInt(model.substring(model.indexOf("[") + 1, model.length - 1));
            var varName = this._data.var ? this._data.var : "option";
            this._stage._templateVars[varName] = this._parent._data.model + "." + model, this._modelValue = this._stage.getModelValue(this._parent._data.model + "." + model);
        }
        if (value && _.isFinite(this._index) && this._index > -1) {
            this._self = new createjs.Container();
            var dims = this.relativeDims();
            this._self.x = dims.x, this._self.y = dims.y, this._self.origX = dims.x, this._self.origY = dims.y, 
            this._self.width = dims.w, this._self.height = dims.h;
            var hit = new createjs.Shape();
            hit.graphics.beginFill("#000").r(0, 0, dims.w, dims.h), this._self.hitArea = hit, 
            this._value = value.value, this.setOptionIndex(data), this.initShadow(data);
            var innerECML = this.getInnerECML();
            _.isEmpty(innerECML) ? "image" == value.value.type ? this.renderImage(value.value) : "text" == value.value.type && this.renderText(value.value) : this.renderInnerECML(), 
            "mcq" == this._parent._type ? this.renderMCQOption() : "mtf" == this._parent._type && this.renderMTFOption(value), 
            this.resolveModelValue(this._data), this._render = !0;
        }
    },
    renderMCQOption: function() {
        var controller = this._parent._controller, itemId = controller.getModelValue("identifier");
        this._parent._options.push(this), this._self.cursor = "pointer";
        var instance = this;
        !0 === this._modelValue.selected && this.addShadow(), this._self.on("click", function(event) {
            var val = instance._parent.selectOption(instance);
            OverlayManager.handleSubmit();
            var data = {
                type: event.type,
                x: event.stageX,
                y: event.stageY,
                choice_id: instance._value.resindex,
                itemId: itemId,
                res: [ {
                    option: instance._value.resvalue
                } ],
                state: val ? "SELECTED" : "UNSELECTED",
                optionTag: "MCQ"
            };
            EventBus.dispatch("optionSelected", instance._value), EventManager.processAppTelemetry({}, "CHOOSE", instance, data);
        });
    },
    renderMTFOption: function(value) {
        var enableDrag = !1, dragPos = {}, dragItem = {}, controller = this._parent._controller, instance = this, itemId = controller.getModelValue("identifier");
        if (_.isFinite(value.index) ? (this._index = value.index, this._parent._lhs_options.push(this)) : (this._parent._rhs_options.push(this), 
        enableDrag = !0), void 0 != value.selected) {
            var snapTo;
            snapTo = instance._parent._lhs_options;
            var plugin = snapTo[value.selected], dims = plugin._dimensions;
            _.isUndefined(plugin._data.snapX) || (this._self.x = dims.x + dims.w * plugin._data.snapX / 100), 
            _.isUndefined(plugin._data.snapY) || (this._self.y = dims.y + dims.h * (plugin._data.snapY / 100));
        }
        if (enableDrag) {
            var instance = this, asset = this._self;
            asset.cursor = "pointer", asset.on("mousedown", function(evt) {
                this.parent.addChild(this), this.offset = {
                    x: this.x - evt.stageX,
                    y: this.y - evt.stageY
                }, dragItem = instance._value.resvalue, dragPos = {
                    x: evt.stageX,
                    y: evt.stageY
                };
                var data = {
                    type: evt.type,
                    x: evt.stageX,
                    y: evt.stageY,
                    drag_id: instance._value.resvalue,
                    itemId: itemId
                };
                EventBus.dispatch("optionDrag", instance._value), EventManager.processAppTelemetry({}, "DRAG", instance, data);
            }), asset.on("pressmove", function(evt) {
                this.x = evt.stageX + this.offset.x, this.y = evt.stageY + this.offset.y, instance.addShadow(), 
                Renderer.update = !0;
            }), asset.on("pressup", function(evt) {
                var snapTo;
                snapTo = !0 === instance._parent._force ? instance._parent.getLhsOption(value.answer) : instance._parent._lhs_options;
                var plugin, dims, snapSuccess = !1;
                if (_.isArray(snapTo)) for (var i = 0; i < snapTo.length && !snapSuccess; i++) {
                    plugin = snapTo[i], dims = plugin._dimensions;
                    var xFactor = parseFloat(.5 * this.width), yFactor = parseFloat(.5 * this.height), x = dims.x - xFactor, y = dims.y - yFactor, maxX = dims.x + dims.w + xFactor, maxY = dims.y + dims.h + yFactor;
                    this.x >= x && this.x + this.width <= maxX && this.y >= y && this.y + this.height <= maxY && (this._mapedTo = snapTo[i], 
                    snapSuccess = !0);
                } else if (snapTo) {
                    plugin = snapTo, dims = plugin._dimensions;
                    var xFactor = parseFloat(.5 * this.width), yFactor = parseFloat(.5 * this.height), x = dims.x - xFactor, y = dims.y - yFactor, maxX = dims.x + dims.w + xFactor, maxY = dims.y + dims.h + yFactor;
                    this.x >= x && this.x + this.width <= maxX && this.y >= y && this.y + this.height <= maxY && (snapSuccess = !0);
                }
                var drop_id = snapSuccess ? plugin._id : "", drop_idx = snapSuccess ? plugin._index : "", drop_rsv = snapSuccess ? plugin._value.resvalue : "", drag_rsv = instance._value.resvalue;
                if (snapSuccess) {
                    var flag = !0;
                    if (plugin._multiple && (flag = !1), plugin._answer && flag) {
                        var existing = plugin._answer;
                        existing._parent.setAnswerMapping(existing, void 0), existing._self.x = existing._self.origX, 
                        existing._self.y = existing._self.origY;
                    }
                    if (_.isUndefined(plugin._data.snapX) || (this.x = dims.x + dims.w * plugin._data.snapX / 100), 
                    _.isUndefined(plugin._data.snapY) || (this.y = dims.y + dims.h * (plugin._data.snapY / 100)), 
                    instance._parent.setAnswerMapping(instance, plugin), _.isArray(snapTo)) for (var i = 0; i < snapTo.length; i++) {
                        var rhsOption = snapTo[i];
                        rhsOption._answer == instance && (rhsOption._answer = void 0);
                    } else snapTo && snapTo._answer == instance && (snapTo._answer = void 0);
                    plugin._answer = instance;
                } else if (this.x = this.origX, this.y = this.origY, _.isArray(snapTo)) for (var i = 0; i < snapTo.length; i++) {
                    var lhsQues = snapTo[i];
                    if (lhsQues._answer && lhsQues._answer._uniqueId == instance._uniqueId) {
                        lhsQues._answer = void 0, instance._parent.setAnswerMapping(instance, void 0);
                        break;
                    }
                }
                OverlayManager.handleSubmit(), void 0 !== drop_idx && "" !== drop_idx || instance._parent.setAnswerMapping(instance, void 0), 
                instance.removeShadow();
                var data = {
                    type: evt.type,
                    x: evt.stageX,
                    y: evt.stageY,
                    choice_id: instance._value.resindex,
                    itemId: itemId,
                    drop_id: drop_id,
                    drop_idx: drop_idx,
                    pos: [ {
                        x: evt.stageX,
                        y: evt.stageY
                    }, dragPos ],
                    res: [ {
                        rhs: drag_rsv
                    }, {
                        lhs: drop_rsv
                    } ],
                    state: void 0 !== drop_idx && "" !== drop_idx ? "SELECTED" : "UNSELECTED",
                    optionTag: "MTF"
                };
                EventBus.dispatch("optionDrop", instance._value), EventManager.processAppTelemetry({}, "DROP", instance, data), 
                Renderer.update = !0;
            });
        }
    },
    renderImage: function(value) {
        var data = {};
        data.asset = value.asset;
        var padx = this._data.padX || 0, pady = this._data.padY || 0;
        data.x = padx, data.y = pady, data.w = 100 - 2 * padx, data.h = 100 - 2 * pady, 
        value.count ? (data.count = value.count, data.type = "gridLayout", PluginManager.invoke("placeholder", data, this, this._stage, this._theme)) : PluginManager.invoke("image", data, this, this._stage, this._theme), 
        this._data.asset = value.asset;
    },
    renderText: function(data) {
        data.$t = data.asset;
        var padx = this._data.padX || 0, pady = this._data.padY || 0;
        data.x = padx, data.y = pady, data.w = 100 - 2 * padx, data.h = 100 - 2 * pady, 
        data.fontsize = data.fontsize ? data.fontsize : 200;
        var align = this._data.align ? this._data.align.toLowerCase() : "center", valign = this._data.valign ? this._data.valign.toLowerCase() : "middle";
        data.align = align, data.valign = valign, PluginManager.invoke("text", data, this, this._stage, this._theme), 
        this._data.asset = data.asset;
    },
    initShadow: function(data) {
        var highlightColor = this._data.highlight || "#E89241", shadowColor = this._data.shadowColor || "#cccccc", shadowData = {
            x: 0,
            y: 0,
            w: 100,
            h: 100,
            type: "roundrect",
            fill: highlightColor,
            visible: !1,
            opacity: this._data.opacity || 1
        };
        this._self.shadow = PluginManager.invoke("shape", shadowData, this, this._stage, this._theme);
        var offsetX = this._data.offsetX || 0, offsetY = this._data.offsetY || 0, blur = this._data.blur || 2;
        this._self.shadow._self.shadow = new createjs.Shadow(shadowColor, offsetX, offsetY, blur);
    },
    setOptionIndex: function(data) {
        data = JSON.stringify(data), data = data.replace(new RegExp("\\$current", "g"), this._index), 
        data = JSON.parse(data), this._data = data;
    },
    renderInnerECML: function() {
        var innerECML = this.getInnerECML();
        if (!_.isEmpty(innerECML)) {
            var data = {}, padx = this._data.padX || 0, pady = this._data.padY || 0;
            data.x = padx, data.y = pady, data.w = 100 - 2 * padx, data.h = 100 - 2 * pady, 
            Object.assign(data, innerECML), PluginManager.invoke("g", data, this, this._stage, this._theme);
        }
    },
    resolveModelValue: function(data) {
        var instance = this, updateAction = function(action) {
            if (action.asset_model) {
                var model = action.asset_model, val = instance._stage.getModelValue(model);
                action.asset = val, delete action.asset_model;
            }
        }, updateEvent = function(evt) {
            _.isArray(evt.action) ? evt.action.forEach(function(action) {
                updateAction(action);
            }) : evt.action && updateAction(evt.action);
        }, events = void 0;
        data.events ? _.isArray(data.events) ? (events = [], data.events.forEach(function(e) {
            events.push.apply(events, e.event);
        })) : events = data.events.event : events = data.event, _.isArray(events) ? events.forEach(function(e) {
            updateEvent(e);
        }) : events && updateEvent(events);
    }
});

PluginManager.registerPlugin("option", OptionPlugin);

var OptionsPlugin = Plugin.extend({
    _type: "options",
    _isContainer: !1,
    _render: !1,
    initPlugin: function(data) {
        var model = data.options, value = void 0;
        this._parent._controller && model && (value = this._parent._controller.getModelValue(model));
        var layout = data.layout;
        value && _.isArray(value) && value.length > 0 && "table" === layout && (_.isFinite(data.cols) || _.isFinite(data.rows)) && this.renderTableLayout(value);
    },
    renderTableLayout: function(value) {
        var cols = void 0, rows = void 0, count = value.length;
        this._data.cols ? (cols = Math.min(count, this._data.cols), rows = Math.ceil(count / cols)) : this._data.rows ? (rows = Math.min(count, this._data.rows), 
        cols = Math.ceil(count / rows)) : (rows = 1, cols = Math.min(count, this._data.cols));
        var instance = this, marginX = 0;
        _.isFinite(this._data.marginX) && (marginX = this._data.marginX);
        var marginY = 0;
        _.isFinite(this._data.marginY) && (marginY = this._data.marginY);
        for (var padX = this._data.padX || 0, padY = this._data.padY || 0, cw = (this._data.w - (cols - 1) * marginX) / cols, ch = (this._data.h - (rows - 1) * marginY) / rows, index = 0, r = 0; r < rows; r++) for (var c = 0; c < cols; c++) if (c * r < count) {
            var data = {};
            data.x = instance._data.x + c * (cw + marginX), data.y = instance._data.y + r * (ch + marginY), 
            data.w = cw, data.h = ch, data.padX = padX, data.padY = padY, data.snapX = instance._data.snapX, 
            data.snapY = instance._data.snapY, data.stroke = instance._data.stroke, data["stroke-width"] = instance._data["stroke-width"], 
            data.events = instance._data.events, data.event = instance._data.event, this._parent._shadow && (data.shadowColor = this._parent._shadow), 
            this._parent._highlight && (data.highlight = this._parent._highlight), _.isFinite(this._parent._blur) && (data.blur = this._parent._blur), 
            _.isFinite(this._parent._offsetX) && (data.offsetX = this._parent._offsetX), _.isFinite(this._parent._offsetY) && (data.offsetY = this._parent.offsetY), 
            this._data.multiple && (data.multiple = !0), this._data.opacity && (data.opacity = this._data.opacity), 
            data.option = instance._data.options + "[" + index + "]";
            var innerECML = this.getInnerECML();
            _.isEmpty(innerECML) || ("function" != typeof Object.assign && objectAssign(), Object.assign(data, innerECML)), 
            index += 1, PluginManager.invoke("option", data, instance._parent, instance._stage, instance._theme);
        }
    }
});

PluginManager.registerPlugin("options", OptionsPlugin);

var PlaceHolderPlugin = Plugin.extend({
    _type: "placeholder",
    _isContainer: !0,
    _render: !0,
    initPlugin: function(data) {
        this._self = new createjs.Container();
        var dims = this.relativeDims();
        this._self.x = dims.x, this._self.y = dims.y;
        var instance = this;
        this.renderPlaceHolder(instance);
    },
    renderPlaceHolder: function(instance) {
        var data = instance._data;
        if (data.model) instance.param = instance._stage.getModelValue(data.model); else if (data.param) instance.param = instance._stage.params[data.param.trim()]; else {
            var type = data.type;
            void 0 === type && (data["param-type"] ? type = instance.evaluateExpr(data["param-type"].trim()) : data["model-type"] && (type = instance._stage.getModelValue(data["model-type"].trim())));
            var count = data.count;
            void 0 === count && (data["param-count"] ? count = instance.evaluateExpr(data["param-count"].trim()) : data["model-count"] && (count = instance._stage.getModelValue(data["model-count"].trim()))), 
            void 0 !== count && "" !== count || (count = 1);
            var asset = data.asset;
            void 0 === asset && (data["param-asset"] ? asset = instance.evaluateExpr(data["param-asset"].trim()) : data["model-asset"] && (asset = instance._stage.getModelValue(data["model-asset"].trim()))), 
            instance.param = {
                type: type,
                asset: asset,
                count: count
            };
        }
        instance.param && instance.param.asset && ("gridLayout" == instance.param.type ? instance.renderGridLayout(instance, instance, data) : "image" == instance.param.type ? instance.renderImage(instance) : "text" == instance.param.type && instance.renderText(instance));
    },
    renderText: function(instance) {
        var param = instance.param, data = instance._data;
        data.$t = param.asset, PluginManager.invoke("text", data, instance._parent, instance._stage, instance._theme);
    },
    renderImage: function(instance) {
        var param = instance.param, data = instance._data;
        data.asset = param.asset, PluginManager.invoke("image", data, instance._parent, instance._stage, instance._theme);
    },
    getAssetBound: function(img, pad) {
        var imgBounds = img.getBounds(), imgW = imgBounds.width, imgH = imgBounds.height;
        img.x = parseFloat(pad / 2), img.y = parseFloat(pad / 2);
        var imgCont = new createjs.Container();
        return imgCont.addChild(img), imgCont.cache(0, 0, imgW + pad, imgH + pad), imgCont;
    },
    computePixel: function(area, repeat) {
        return Math.floor(Math.sqrt(parseFloat(area / repeat)));
    },
    renderGridLayout: function(parent, instance, data) {
        var assetId = instance.param.asset, assetSrc = instance._theme.getAsset(assetId), img = new createjs.Bitmap(assetSrc), getImage = function(cb) {
            if (_.isUndefined(assetSrc)) return void console.error('"' + assetId + '" Asset not found. Please check index.ecml.');
            AssetManager.strategy.loadAsset(instance._stage._data.id, assetId, assetSrc, function() {
                assetSrc = instance._theme.getAsset(assetId), img = new createjs.Bitmap(assetSrc), 
                _.isNull(img.getBounds()) ? console.warn("Unable to find the Bounds value for " + assetId + ",  Source - " + assetSrc) : cb();
            });
        }, enableDrag = function(asset, snapTo) {
            asset.cursor = "pointer", asset.on("mousedown", function(evt) {
                this.parent.addChild(this), this.offset = {
                    x: this.x - evt.stageX,
                    y: this.y - evt.stageY
                };
            }), asset.on("pressmove", function(evt) {
                this.x = evt.stageX + this.offset.x, this.y = evt.stageY + this.offset.y, Renderer.update = !0;
            }), snapTo && asset.on("pressup", function(evt) {
                var plugin = PluginManager.getPluginObject(data.snapTo), dims = plugin._dimensions, x = dims.x, y = dims.y, maxX = dims.x + dims.w, maxY = dims.y + dims.h, snapSuccess = !1;
                this.x >= x && this.x <= maxX && this.y >= y && this.y <= maxY && (snapSuccess = !0), 
                snapSuccess || (this.x = this.origX, this.y = this.origY);
            });
        }, renderGridImages = function() {
            var x = 0, y = 0, area = instance.dimensions().w * instance.dimensions().h, pad = instance.dimensions().pad || 0, repeat = instance.param.count, pixelPerImg = instance.computePixel(area, repeat) - parseFloat(pad / 1.5), param = instance.param, paddedImg = instance.getAssetBound(img, pad), assetBounds = paddedImg.getBounds(), assetW = assetBounds.width, assetH = assetBounds.height;
            paddedImg.scaleY = parseFloat(pixelPerImg / assetH), paddedImg.scaleX = parseFloat(pixelPerImg / assetW), 
            paddedImg.x = x + pad, paddedImg.y = y + pad;
            for (var instanceBoundary = 0 + instance.dimensions().w, i = 0; i < param.count; i++) {
                var clonedAsset = paddedImg.clone(!0);
                x + pixelPerImg > instanceBoundary && (x = 0, y += pixelPerImg + pad), clonedAsset.x = x + pad, 
                clonedAsset.y = y + pad, clonedAsset.origX = x + pad, clonedAsset.origY = y + pad, 
                x += pixelPerImg, instance._data.enabledrag && enableDrag(clonedAsset, data.snapTo), 
                Renderer.update = !0, parent.addChild(clonedAsset);
            }
        };
        _.isNull(img.getBounds()) ? getImage(renderGridImages) : renderGridImages();
    },
    refresh: function() {
        this._self.removeAllChildren(), this._currIndex = 0, this.renderPlaceHolder(this), 
        Renderer.update = !0;
    }
});

PluginManager.registerPlugin("placeholder", PlaceHolderPlugin);

var RepoPlugin = Plugin.extend({
    initialize: function() {
        EkstepRendererAPI.addEventListener("repo:intialize", this.initializeRepo, this);
    },
    initializeRepo: function() {
        var instance = this, contextObj = EkstepRendererAPI.getPreviewData();
        contextObj.config.repos && (_.isObject(contextObj.config.repos) ? _.each(contextObj.config.repos, function(repoPath, index) {
            instance.createRepoInstance(repoPath, index);
        }) : instance.createRepoInstance(contextObj.config.repos));
    },
    initPlugin: function() {
        console.info("Repo plugin init");
    },
    createRepoInstance: function(repoPath, index) {
        var repoInstance = new (org.ekstep.pluginframework.iRepo.extend({
            id: "ekstepPluginRepo_" + index,
            basePath: repoPath,
            discoverManifest: function(pluginId, pluginVer, callback, publishedTime) {
                var instance = this;
                org.ekstep.pluginframework.resourceManager.loadResource(this.resolveResource(pluginId, pluginVer, "manifest.json"), "json", function(err, response) {
                    callback(void 0, {
                        manifest: response,
                        repo: instance
                    });
                }, publishedTime);
            },
            resolveResource: function(pluginId, pluginVer, resource) {
                return this.basePath + "/" + pluginId + "-" + pluginVer + "/" + resource;
            }
        }))();
        this.addRepoInstance(repoInstance, repoPath);
    },
    addRepoInstance: function(repoInstance, repoPath) {
        org.ekstep.pluginframework.resourceManager.addRepo(repoInstance);
    }
});

PluginManager.registerPlugin("RepoPlugin", RepoPlugin);

var ScribblePlugin = Plugin.extend({
    _type: "scribble",
    _render: !0,
    _isContainer: !0,
    _data: void 0,
    _oldPt: void 0,
    _oldMidPt: void 0,
    _startPoint: void 0,
    _endPoint: void 0,
    initPlugin: function(data) {
        this._data = data;
        var dims = (data.color, data.fill, this.relativeDims());
        this._self = new createjs.Container(), this._self.x = dims.x, this._self.y = dims.y, 
        this._self.on("mousedown", this.handleMouseDown.bind(this), !0), createjs.Ticker.setFPS(50);
        var shapeData = {
            shape: {
                type: "rect",
                x: 0,
                y: 0,
                w: 100,
                h: 100
            }
        };
        data.fill && (shapeData.shape.fill = data.fill), data.stroke && (shapeData.shape.stroke = data.stroke), 
        _.isUndefined(data.opacity) || (shapeData.shape.opacity = data.opacity), data["stroke-width"] && (shapeData.shape["stroke-width"] = data["stroke-width"]), 
        data.rotate && (shapeData.shape.rotate = data.rotate), this.invokeChildren(shapeData, this, this._stage, this._theme), 
        this.paintBrush = new createjs.Shape(), this.paintBrush.x = 0, this.paintBrush.y = 0, 
        this._self.addChild(this.paintBrush);
    },
    setBounderies: function() {
        if (!this._startPoint || !this._endPoint) {
            var dims = this.relativeDims(), startPoint = this._self.localToGlobal(0, 0);
            this._startPoint = new createjs.Point(startPoint.x + 5, startPoint.y + 5);
            var x = startPoint.x + dims.w - 5, y = startPoint.y + dims.h - 5;
            this._endPoint = new createjs.Point(x, y);
        }
    },
    handleMouseDown: function(event) {
        this.setBounderies();
        var mousePoint = {
            x: event.stageX,
            y: event.stageY
        };
        mousePoint = this._self.globalToLocal(mousePoint.x, mousePoint.y), this._oldPt = new createjs.Point(mousePoint.x, mousePoint.y), 
        this._self.on("pressmove", this.handleMouseMove.bind(this), !0), this._self.on("pressup", this.handleMouseUp.bind(this), !0);
    },
    handleMouseMove: function(event) {
        var mousePoint = {
            x: event.stageX,
            y: event.stageY
        }, thickness = this.isInt(this._data.thickness) ? this._data.thickness : 3;
        mousePoint.x > this._startPoint.x && mousePoint.x < this._endPoint.x && mousePoint.y > this._startPoint.y && mousePoint.y < this._endPoint.y && (mousePoint = this._self.globalToLocal(mousePoint.x, mousePoint.y), 
        this.paintBrush.graphics.setStrokeStyle(thickness, "round").beginStroke(this._data.color || "#000"), 
        this.paintBrush.graphics.mt(this._oldPt.x, this._oldPt.y).lineTo(mousePoint.x, mousePoint.y), 
        this._oldPt = new createjs.Point(mousePoint.x, mousePoint.y), Renderer.update = !0);
    },
    handleMouseUp: function(event) {
        this._self.off("pressmove", this.handleMouseMove), this._self.off("pressup", this.handleMouseUp);
    },
    clear: function(action) {
        this.paintBrush.graphics.clear(), Renderer.update = !0;
    },
    isInt: function(value) {
        var x = parseFloat(value);
        return !isNaN(value) && (0 | x) === x;
    },
    drawBorder: function() {}
});

PluginManager.registerPlugin("scribble", ScribblePlugin);

var SetPlugin = Plugin.extend({
    _type: "set",
    _isContainer: !1,
    _modelName: void 0,
    _model: void 0,
    _index: 0,
    _render: !1,
    initPlugin: function(data) {
        this._modelName = void 0, this._model = void 0, this._index = 0;
        var value = data.value;
        if (data["ev-value"]) this._modelName = data.param, this._model = this.evaluateExpr(data["ev-value"]), 
        value = _.isArray(this._model) ? this._model[0] : this._model; else if (data.model) this._stage && (value = this._stage.getModelValue(data.model)); else if (data["ev-model"] && this._stage) {
            var model = this.replaceExpressions(data["ev-model"]);
            this._modelName = data.param, this._model = this._stage.getModelValue(model), value = _.isArray(this._model) ? this._model[0] : this._model;
        }
        this.setParam(data.param, value, void 0, data.scope);
    },
    replaceExpressions: function(model) {
        for (var arr = [], idx = 0, nextIdx = model.indexOf("${", idx), endIdx = model.indexOf("}", idx + 1); -1 != nextIdx && -1 != endIdx; ) {
            var expr = model.substring(nextIdx, endIdx + 1);
            arr.push(expr), idx = endIdx, nextIdx = model.indexOf("${", idx), endIdx = model.indexOf("}", idx + 1);
        }
        if (arr.length > 0) for (var i = 0; i < arr.length; i++) {
            var val = this.evaluateExpr(arr[i]);
            model = model.replace(arr[i], val);
        }
        return model;
    },
    setParamValue: function(action) {
        var val, scope = action.scope, param = action.param, paramIdx = action["param-index"], paramKey = action["param-key"], paramExpr = action["ev-value"], paramModel = action["ev-model"];
        if (paramIdx) "previous" == paramIdx ? _.isArray(this._model) && this._model.length > 0 ? (this._index > 0 ? this._index = this._index - 1 : this._index = this._model.length - 1, 
        val = this._model[this._index]) : val = this._model : _.isArray(this._model) ? (this._index < this._model.length - 1 ? this._index = this._index + 1 : this._index = 0, 
        val = this._model[this._index]) : val = this._model; else if (paramKey) val = _.isObject(this._model) && this.model[paramKey] ? this.model[paramKey] : ""; else if (paramExpr) this._model = this.evaluateExpr(paramExpr), 
        val = _.isArray(this._model) ? this._model[0] : this._model; else if (paramModel) {
            if (this._stage) {
                var model = this.replaceExpressions(paramModel);
                this._model = this._stage.getModelValue(model), val = _.isArray(this._model) ? this._model[0] : this._model;
            }
        } else val = action["param-value"];
        var max = void 0;
        action["param-max"] && (max = this.evaluateExpr(action["param-max"]), val >= max && (val = action["param-incr"] = 0)), 
        this.setParam(param, val, action["param-incr"], scope, max);
    },
    setParam: function(param, value, incr, scope, max) {
        scope && "app" == scope.toLowerCase() ? GlobalContext.setParam(param, value, incr, max) : scope && "stage" == scope.toLowerCase() ? this._stage.setParam(param, value, incr, max) : scope && "parent" == scope.toLowerCase() ? this._parent.setPluginParam(param, value, incr, max) : this._theme && this._theme.setParam(param, value, incr, max);
    },
    getParam: function(param) {
        var value = GlobalContext.getParam(param);
        return value || _.isUndefined(this._theme) || (value = this._theme.getParam(param)), 
        value || (value = this._stage.getParam(param)), value || _.isUndefined(this._theme) || (value = this._parent.getPluginParam(param)), 
        value;
    }
});

PluginManager.registerPlugin("set", SetPlugin);

var SpritePlugin = Plugin.extend({
    _type: "sprite",
    _isContainer: !1,
    _render: !0,
    initPlugin: function(data) {
        var dims = this.relativeDims(), spriteJSON = this._theme.getAsset(data.asset), spriteImage = this._theme.getAsset(data.asset + "_image");
        if (spriteJSON && spriteImage) {
            spriteJSON.images.push(spriteImage);
            var spritesheet = new createjs.SpriteSheet(spriteJSON), grant = new createjs.Sprite(spritesheet);
            data.start && grant.gotoAndPlay(data.start), grant.x = dims.x, grant.y = dims.y, 
            this._self = grant, this._self.scaleX = dims.w / spriteJSON.frames.width, this._self.scaleY = dims.h / spriteJSON.frames.height, 
            grant.addEventListener("change", function() {
                Renderer.update = !0;
            });
        } else console.error("Sprite sheet definition or image not found.");
    },
    play: function(action) {
        this._self.visible || (this._self.visible = !0), this._self.gotoAndPlay(action.animation);
    },
    togglePlay: function(action) {
        this._self.paused ? this._self.gotoAndPlay(action.animation) : this._self.paused = !0;
    },
    pause: function() {
        this._self.paused = !0;
    },
    stop: function() {
        this._self.stop();
    }
});

PluginManager.registerPlugin("sprite", SpritePlugin);

var StagePlugin = Plugin.extend({
    _type: "stage",
    _isContainer: !0,
    _render: !0,
    params: {},
    _stageParams: {},
    _stageController: void 0,
    _stageControllerName: void 0,
    _templateVars: {},
    _controllerMap: {},
    _inputs: [],
    _startDrag: void 0,
    _doDrag: void 0,
    _stageInstanceId: void 0,
    _currentState: {},
    isStageStateChanged: void 0,
    maxTimeToLoad: 5e3,
    timeInstance: {},
    initPlugin: function(data) {
        var instance = this;
        this.destroyTimeInstance(data), this._inputs = [], this.params = {}, this._self = new creatine.Scene();
        var dims = this.relativeDims();
        if (this._self.x = dims.x, this._self.y = dims.y, this._stageInstanceId = this._theme._currentStage + "__" + Math.random().toString(36).substr(2, 9), 
        data.iterate && data.var) {
            var controllerName = data.var.trim(), stageController = this._theme._controllerMap[data.iterate.trim()];
            stageController && (this._stageControllerName = controllerName, this._stageController = stageController, 
            this._stageController.next());
        }
        for (k in data) if ("param" === k) if (_.isArray(data[k])) {
            var instance = this;
            data[k].forEach(function(param) {
                instance.setParamValue(param);
            });
        } else this.setParamValue(data[k]); else "controller" === k && (_.isArray(data[k]) ? data[k].forEach(function(p) {
            this.addController(p);
        }) : this.addController(data[k]));
        this._startDrag = this.startDrag.bind(this), this._doDrag = this.doDrag.bind(this), 
        window.addEventListener("native.keyboardshow", this.keyboardShowHandler.bind(this), !0), 
        window.addEventListener("native.keyboardhide", this.keyboardHideHandler.bind(this), !0);
        var stageKey = this.getStagestateKey();
        "function" == typeof this._theme.getParam && (this._currentState = this._theme.getParam(stageKey), 
        _.isUndefined(this._currentState) && this.setParam(this._type, {
            id: Renderer.theme._currentStage,
            stateId: stageKey
        }));
        var isStageLoaded;
        if (_.isUndefined(AssetManager.strategy) || (isStageLoaded = AssetManager.strategy.isStageAssetsLoaded(data.id)), 
        0 == isStageLoaded) {
            var timeInst;
            return EventBus.addEventListener(data.id + "_assetsLoaded", instance.invokeRenderElements, this), 
            timeInst = setTimeout(function() {
                (isStageLoaded = AssetManager.strategy.isStageAssetsLoaded(data.id)) || instance._theme._currentStage != data.id || (instance.showHideLoader("block"), 
                timeInst = setTimeout(function() {
                    "block" == jQuery("#loaderArea").css("display") && instance._theme._currentStage == instance._data.id && instance.invokeRenderElements();
                }, instance.maxTimeToLoad), instance.timeInstance[data.id] = timeInst);
            }, 500), void (this.timeInstance[data.id] = timeInst);
        }
        this.invokeChildren(data, this, this, this._theme);
    },
    destroyTimeInstance: function(data) {
        if (Renderer.theme && Renderer.theme.getStagesToPreLoad) {
            var stages = Renderer.theme.getStagesToPreLoad(data);
            !_.isUndefined(stages.next) && this.timeInstance[stages.next] && (clearTimeout(this.timeInstance[stages.next]), 
            delete this.timeInstance[stages.next]), !_.isUndefined(stages.prev) && this.timeInstance[stages.prev] && (clearTimeout(this.timeInstance[stages.prev]), 
            delete this.timeInstance[stages.prev]);
        }
    },
    invokeRenderElements: function() {
        this.invokeChildren(this._data, this, this, this._theme), Renderer.update = !0, 
        this.showHideLoader("none"), _.isUndefined(Renderer.theme) || _.isUndefined(Renderer.theme._currentScene) || Renderer.theme._currentScene.dispatchEvent("enter"), 
        EventBus.removeEventListener(this._data.id + "_assetsLoaded", this.invokeRenderElements, this);
    },
    keyboardShowHandler: function(e) {
        if (this._self.y = -e.keyboardHeight, !this._self.hitArea) {
            var hit = new createjs.Shape();
            hit.graphics.beginFill("#000").drawRect(0, 0, this._self.width, this._self.height), 
            this._self.hitArea = hit, console.info("HitArea added to the stage.");
        }
        Renderer.update = !0, this.keyboardH = e.keyboardHeight, this._self.addEventListener("mousedown", this._startDrag), 
        this.offset = new createjs.Point();
    },
    startDrag: function() {
        this.offset.x = Renderer.theme._self.mouseX - this._self.x, this.offset.y = Renderer.theme._self.mouseY - this._self.y, 
        this._self.addEventListener("pressmove", this._doDrag);
    },
    doDrag: function(event) {
        (this._self.y >= this.keyboardH || this._self.y >= -this.keyboardH) && (this._self.y = event.stageY - this.offset.y, 
        this._self.y < -this.keyboardH && (this._self.y = 1 - this.keyboardH), this._self.y > 0 && (this._self.y = 0), 
        Renderer.update = !0);
    },
    keyboardHideHandler: function(e) {
        this._self.y = 0, this._self.removeEventListener("mousedown", this._startDrag), 
        this._self.removeEventListener("pressmove", this._doDrag), Renderer.update = !0;
    },
    setParamValue: function(p) {
        p.value ? this.params[p.name] = p.value : p.model && (this.params[p.name] = this.getModelValue(p.model));
    },
    addController: function(p) {
        var add = !0;
        if (p["ev-if"]) {
            var expr = p["ev-if"].trim();
            "${" != expr.substring(0, 2) && (expr = "${" + expr), "}" != expr.substring(expr.length - 1, expr.length) && (expr += "}"), 
            add = this.evaluateExpr(expr);
        }
        if (add) {
            var controller = ControllerManager.get(p, this._theme.baseDir);
            controller && (this._controllerMap[p.name] = controller);
        }
    },
    getController: function(name) {
        var c;
        return this._templateVars[name] && (name = this._templateVars[name]), this._stageControllerName === name ? c = this._stageController : this._controllerMap[name] ? c = this._controllerMap[name] : this._theme._controllerMap[name] && (c = this._theme._controllerMap[name]), 
        c;
    },
    getTemplate: function(controller) {
        var t, c = this.getController(controller);
        return c && (t = c.getTemplate()), t;
    },
    getModelValue: function(param) {
        var val;
        if (param) {
            var tokens = param.split(".");
            if (tokens.length >= 2) {
                var name = tokens[0].trim(), idx = param.indexOf("."), paramName = param.substring(idx + 1);
                this._templateVars[name] && (name = this._templateVars[name], name.indexOf(".") > 0 && (paramName = name.substring(name.indexOf(".") + 1) + "." + paramName, 
                name = name.substring(0, name.indexOf("."))));
                var controller = this.getController(name);
                controller && (val = controller.getModelValue(paramName));
            } else {
                var controller = this.getController(param);
                controller && (val = controller.getModelValue());
            }
        }
        return val;
    },
    setModelValue: function(param, val) {
        if (param) {
            var tokens = param.split(".");
            if (tokens.length >= 2) {
                var name = tokens[0].trim(), idx = param.indexOf("."), paramName = param.substring(idx + 1), controller = this.getController(name);
                controller && (val = controller.setModelValue(paramName, val));
            }
        }
    },
    isStageStateChanged: function(isChanged) {
        this._isStageStateChanged = isChanged, isChanged && (this._currentState.isEvaluated = !1);
    },
    evaluate: function(action) {
        var isEvaluated = !_.isUndefined(this._currentState) && this._currentState.isEvaluated;
        if (!1 !== this._isStageStateChanged || !isEvaluated) {
            var valid = !1, showImmediateFeedback = !0;
            if (this._stageController) {
                _.isUndefined(this._stageController._data.showImmediateFeedback) || (showImmediateFeedback = this._stageController._data.showImmediateFeedback), 
                this._inputs.forEach(function(input) {
                    input.setModelValue();
                });
                var result = this._stageController.evalItem();
                if (result && (valid = result.pass), this._currentState.isEvaluated = !0, EventBus.dispatch("evaluated", result), 
                showImmediateFeedback) {
                    if (1 == valid) {
                        OverlayManager.showFeeback(valid) || this.dispatchEvent(action.success);
                    } else {
                        OverlayManager.showFeeback(valid) || this.dispatchEvent(action.failure);
                    }
                    return;
                }
            }
        }
        OverlayManager.skipAndNavigateNext();
    },
    reload: function(action) {
        this._stageController && this._stageController.decrIndex(1), this._theme.replaceStage(this._data.id, action);
    },
    getStagestateKey: function() {
        return _.isUndefined(this._stageController) ? Renderer.theme._currentStage : Renderer.theme._currentStage + "_" + this._stageController._id + "_" + this._stageController._index;
    },
    setParam: function(param, value, incr, max) {
        var instance = this, fval = instance.params[param];
        incr ? (fval || (fval = 0), fval += incr) : fval = value, 0 > fval && (fval = 0), 
        void 0 !== max && fval >= max && (fval = 0), instance.params[param] = fval, this.stateConfig && (instance._currentState = $.extend({}, instance._currentState, instance.params), 
        instance._currentState = JSON.parse(JSON.stringify(instance._currentState)));
    },
    stateConfig: function() {
        return !!_.isUndefined(this._stageController) || (void 0 == this._stageController._data.saveState || 1 == this._stageController._data.saveState);
    },
    getParam: function(param) {
        var instance = this, params = instance.params, expr = "params." + param;
        return eval(expr);
    },
    isItemScene: function() {
        var stageCtrl = this._stageController;
        return !_.isUndefined(stageCtrl) && !_.isUndefined(stageCtrl._model) && "items" == stageCtrl._type;
    },
    isReadyToEvaluate: function() {
        var enableEval = !1, stageCtrl = this._stageController;
        if (!_.isUndefined(stageCtrl) && "items" == stageCtrl._type && !_.isUndefined(stageCtrl._model)) {
            var modelItem = stageCtrl._model[stageCtrl._index];
            modelItem && "ftb" == modelItem.type.toLowerCase() ? enableEval = !0 : _.isUndefined(this._currentState) || _.isUndefined(this._currentState.isEvaluated) || (enableEval = !this._currentState.isEvaluated);
        }
        return enableEval;
    },
    showHideLoader: function(val) {
        var elem = document.getElementById("loaderArea");
        _.isNull(elem) || (elem.style.display = val);
    }
});

PluginManager.registerPlugin("stage", StagePlugin);

var SummaryPlugin = Plugin.extend({
    _type: "summary",
    _isContainer: !1,
    _render: !1,
    initPlugin: function(data) {
        if (data.controller) {
            var message, controller = data.controller;
            this._theme._controllerMap[controller] ? message = this._theme._controllerMap[controller].feedback() : this._stage._stageControllerName === controller ? message = this._stage._stageController.feedback() : this._stage._controllerMap[controller] && (message = this._stage._controllerMap[controller].feedback()), 
            message && "text" == message.type && this.renderTextSummary(message.asset, data);
        }
    },
    renderTextSummary: function(text, data) {
        data.$t = text, PluginManager.invoke("text", data, this._parent, this._stage, this._theme);
    }
});

PluginManager.registerPlugin("summary", SummaryPlugin);

var TelemetryPlugin = Plugin.extend({
    _type: "telemetry",
    _isContainer: !1,
    _render: !0,
    _teleData: [],
    _maxTeleInstance: 10,
    _requiredFields: {},
    initPlugin: function(data) {
        console.log("Telemetry plugin init done !!!");
    },
    initialize: function() {
        EkstepRendererAPI.addEventListener("telemetryPlugin:intialize", this.initializeTelemetryPlugin, this);
    },
    initializeTelemetryPlugin: function() {
        if ("undefined" == typeof cordova) {
            this.listenTelementryEvent();
            var did = detectClient();
            this._requiredFields = {};
            var extConfig = EkstepRendererAPI.getPreviewData();
            this._requiredFields.uid = extConfig.context.uid || "anonymous", this._requiredFields.sid = extConfig.context.sid || CryptoJS.MD5(Math.random().toString()).toString(), 
            this._requiredFields.did = extConfig.context.did || CryptoJS.MD5(JSON.stringify(did)).toString();
        }
    },
    listenTelementryEvent: function() {
        var instance = this;
        EventBus.addEventListener("telemetryEvent", function(data) {
            data = JSON.parse(data.target), data = instance.appendRequiredFields(data), instance.addToQueue(data);
        });
    },
    appendRequiredFields: function(data) {
        return _.extend(data, this._requiredFields), data.mid = "OE_" + CryptoJS.MD5(JSON.stringify(data)).toString(), 
        data;
    },
    sendTelemetry: function(telemetryData) {
        var currentTimeStamp = new Date().getTime(), teleObj = {
            id: "ekstep.telemetry",
            ver: "2.0",
            ets: currentTimeStamp,
            events: telemetryData
        }, configuration = EkstepRendererAPI.getPreviewData(), headers = {};
        _.isUndefined(configuration.context.authToken) || (headers.Authorization = "Bearer " + configuration.context.authToken), 
        genieservice.sendTelemetry(teleObj, headers).then(function(data) {
            console.log("Telemetry API success", data);
        });
    },
    addToQueue: function(data) {
        if (this._teleData.push(data), "OE_END" == data.eid.toUpperCase() || this._teleData.length >= this._maxTeleInstance) {
            var telemetryData = _.clone(this._teleData);
            this._teleData = [], this.sendTelemetry(telemetryData);
        }
    }
});

PluginManager.registerPlugin("telemetry", TelemetryPlugin);

var TestcasePlugin = Plugin.extend({
    _type: "testcase",
    _render: !0,
    _isContainer: !0,
    _header: {
        g: {
            id: "hint",
            visible: "true",
            shape: {
                w: "100",
                h: "100",
                x: "0",
                y: "0",
                hitArea: !0,
                type: "rect"
            },
            text: [ {
                id: "yes",
                font: "Georgia",
                fontsize: "80",
                h: "100",
                w: "10",
                weight: "bold",
                x: "80",
                y: "10",
                __text: "Yes",
                valign: "middle"
            }, {
                id: "no",
                font: "Georgia",
                fontsize: "80",
                h: "100",
                w: "10",
                weight: "bold",
                x: "90",
                y: "10",
                __text: "No",
                valign: "middle"
            } ]
        }
    },
    initPlugin: function(data) {
        this._self = new createjs.Container();
        var dims = this.relativeDims();
        this._self.x = dims.x, this._self.y = dims.y;
        var hit = new createjs.Shape();
        hit.graphics.beginFill("#000").r(0, 0, dims.w, dims.h), this._self.hitArea = hit, 
        this.createHeader(data), this.invokeChildren(data, this, this._stage, this._theme);
    },
    createHeader: function(data) {
        var uniqueId = _.uniqueId("testcase");
        this._header.g.x = data.x, this._header.g.y = data.y, this._header.g.w = data.w, 
        this._header.g.h = this._getHeaderHeight(data.h), this._header.g.text[0].id += uniqueId, 
        this._header.g.text[1].id += uniqueId, data.stroke && (this._header.g.shape.fill = data.stroke), 
        this.invokeChildren(this._header, this._stage, this._stage, this._theme);
        var pass = PluginManager.getPluginObject(this._header.g.text[0].id), fail = PluginManager.getPluginObject(this._header.g.text[1].id);
        this.registerTestActions(pass), this.registerTestActions(fail);
    },
    registerTestActions: function(plugin) {
        var instance = this;
        if (plugin._self) {
            var element = plugin._self;
            element.cursor = "pointer", element.addEventListener("click", function(event) {
                var pass = "Yes" == plugin._data.__text;
                TelemetryService.assess(instance._id, "TESTCASE", "MEDIUM").start().end(pass);
            });
        }
    },
    _getHeaderHeight: function(h) {
        return h / 10;
    }
});

PluginManager.registerPlugin("testcase", TestcasePlugin);

var TextPlugin = Plugin.extend({
    _type: "text",
    _isContainer: !1,
    _render: !0,
    initPlugin: function(data) {
        var fontsize = data.fontsize || 20, dims = this.relativeDims(), lineHeight = data.lineHeight ? data.lineHeight : 0, outline = data.outline ? data.outline : 0;
        if (_.isFinite(fontsize) && data.w) {
            var exp = parseFloat(PluginManager.defaultResWidth * data.w / 100), cw = this._parent.dimensions().w, width = parseFloat(cw * data.w / 100), scale = parseFloat(width / exp);
            fontsize = parseFloat(fontsize * scale), fontsize += "px";
        }
        var font = fontsize + " " + data.font;
        data.weight && (font = data.weight + " " + font);
        var textStr = "";
        data.$t || data.__text ? textStr = data.$t || data.__text : data.model ? textStr = this._stage.getModelValue(data.model) || "" : data.param && (textStr = this.getParam(data.param.trim()) || "");
        var text = new createjs.Text(textStr, font, data.color || "#000000");
        text.lineWidth = dims.w, text.x = dims.x, text.y = dims.y, text.lineHeight = lineHeight * text.getMeasuredLineHeight(), 
        text.outline = outline;
        var align = data.align ? data.align.toLowerCase() : "left", valign = data.valign ? data.valign.toLowerCase() : "top";
        "left" == align ? text.x = dims.x : "right" == align ? text.regX = -dims.w : "center" == align && (text.x = dims.x, 
        text.regX = -dims.w / 2), "top" == valign ? (text.y = dims.y, text.textBaseline = "hanging") : "bottom" == valign ? (text.y = dims.y + dims.h - text.getMeasuredHeight(), 
        text.textBaseline = "hanging") : "middle" == valign && (text.y = dims.y + dims.h / 2 - text.getMeasuredHeight() / 2, 
        data.textBaseline ? text.textBaseline = "top" : text.textBaseline = "hanging"), 
        data.textBaseline && (text.textBaseline = data.textBaseline), text.textAlign = align, 
        text.valign = valign, this._self = text;
    },
    refresh: function() {
        var instance = this, textStr = "";
        instance._data.$t || instance._data.__text ? textStr = instance._data.$t || instance._data.__text : instance._data.model ? textStr = this._stage.getModelValue(instance._data.model) || "" : instance._data.param && (textStr = this.getParam(instance._data.param.trim()) || ""), 
        textStr && "" != textStr && (this._self.text = textStr, Renderer.update = !0);
    }
});

PluginManager.registerPlugin("text", TextPlugin);

var ThemePlugin = Plugin.extend({
    _type: "theme",
    _render: !1,
    update: !1,
    baseDir: "",
    loader: void 0,
    _director: !1,
    _currentScene: void 0,
    _currentStage: void 0,
    _previousStage: void 0,
    _canvasId: void 0,
    inputs: [],
    htmlElements: [],
    _animationEffect: {
        effect: "moveOut"
    },
    _themeData: void 0,
    _controllerMap: {},
    _isContainer: !1,
    _templateMap: {},
    _contentParams: {},
    _isSceneChanging: !1,
    _saveState: !0,
    _basePath: void 0,
    initPlugin: function(data) {
        this.addLoaderElement(), this._controllerMap = {}, this._canvasId = data.canvasId, 
        this._self = new createjs.Stage(data.canvasId), this._director = new creatine.Director(this._self), 
        this._dimensions = {
            x: 0,
            y: 0,
            w: this._self.canvas.width,
            h: this._self.canvas.height
        }, createjs.Touch.enable(this._self), this._self.enableMouseOver(10), this._self.mouseMoveOutside = !0, 
        this._contentParams = {}, _.isUndefined(data.saveState) || (this._saveState = data.saveState);
    },
    mousePoint: function() {
        return {
            x: this._self.mouseX,
            y: this._self.mouseY
        };
    },
    updateCanvas: function(w, h) {
        this._self.canvas.width = w, this._self.canvas.height = h, this._dimensions = {
            x: 0,
            y: 0,
            w: this._self.canvas.width,
            h: this._self.canvas.height
        };
    },
    start: function(basePath) {
        try {
            var instance = this;
            if (instance._basePath = basePath, RecorderManager.init(), _.isArray(this._data.stage)) var startStage = _.find(this._data.stage, function(stage) {
                return stage.id == instance._data.startStage;
            }); else if (this._data.stage.id == instance._data.startStage) var startStage = this._data.stage.id;
            if (_.isUndefined(startStage)) {
                var firstStage = _.find(this._data.stage, function(stage) {
                    if (stage.param && _.isUndefined(firstStage)) return stage;
                });
                _.isUndefined(firstStage) ? checkStage("showAlert") : (_.isUndefined(this._data.startStage) ? console.warn("No start stage is defined, loading first stage") : console.warn("Startstage is not available, loading first stage"), 
                this._data.startStage = firstStage.id);
            }
            AssetManager.init(this._data, basePath), AssetManager.initStage(this._data.startStage, null, null, function() {
                instance.render();
            });
        } catch (e) {
            showToaster("error", "Content fails to start"), EkstepRendererAPI.logErrorEvent(e, {
                severity: "fatal",
                type: "content",
                action: "play"
            }), console.warn("Theme start is failed due to", e);
        }
    },
    render: function() {
        var instance = this;
        ControllerManager.reset(), OverlayManager.reset(), this._data.controller && (_.isArray(this._data.controller) ? this._data.controller.forEach(function(p) {
            instance.addController(p);
        }) : instance.addController(this._data.controller)), this._data.template && (_.isArray(this._data.template) ? this._data.template.forEach(function(t) {
            instance._templateMap[t.id] = t;
        }) : instance._templateMap[this._data.template.id] = this._data.template), _.isArray(this._data.stage) || (this._data.stage = [ this._data.stage ]), 
        this._data.stage && (this._data.stage.forEach(function(s) {
            instance.initStageControllers(s);
        }), this.invokeStage(this._data.startStage)), this.update(), jQuery("#progressBar").width(100), 
        jQuery("#loading").hide(), jQuery("#overlay").show();
    },
    addController: function(p) {
        var controller = ControllerManager.get(p, this.baseDir);
        controller && (this._controllerMap[p.name] = controller);
    },
    initStageControllers: function(stage) {
        stage.controller && (_.isArray(stage.controller) ? stage.controller.forEach(function(p) {
            ControllerManager.get(p, this.baseDir);
        }) : ControllerManager.get(stage.controller, this.baseDir));
    },
    reRender: function() {
        var controller;
        for (k in this._controllerMap) controller = this._controllerMap[k], controller.reset();
        this._contentParams = {}, this._self.clear(), this._self.removeAllChildren(), this.render();
    },
    update: function() {
        this._self.update();
    },
    tick: function() {
        this._self.tick();
    },
    restart: function() {
        var gameId = TelemetryService.getGameId(), version = TelemetryService.getGameVer(), instance = this;
        TelemetryService.end(), AssetManager.initStage(this._data.startStage, null, null, function() {
            gameId && version && TelemetryService.start(gameId, version), instance.render();
        });
    },
    getAsset: function(aid) {
        return AssetManager.getAsset(this._currentStage, aid);
    },
    getMedia: function(aid) {
        return _.find(this._data.manifest.media, function(item) {
            return item.id == aid;
        });
    },
    addChild: function(child, childPlugin) {
        var instance = this;
        child.on("sceneenter", function() {
            instance.enableInputs(), instance._isSceneChanging = !1, instance.preloadStages(), 
            childPlugin.uncache(), _.isUndefined(Renderer.theme._previousStage) || Renderer.theme._previousStage == Renderer.theme._currentStage || TelemetryService.navigate(Renderer.theme._previousStage, Renderer.theme._currentStage), 
            OverlayManager.init(), Renderer.update = !0;
        });
        var nextIdx = this._currIndex++;
        this._currentScene ? (this._currentScene.dispatchEvent("exit"), this._currentScene = childPlugin, 
        this._director.replace(child, this.getTransitionEffect(this._animationEffect))) : (this._currentScene = childPlugin, 
        this._director.replace(child)), childPlugin.setIndex(nextIdx);
    },
    replaceStage: function(stageId, effect) {
        AudioManager.stopAll(), RecorderManager.stopRecording(), this.disableInputs(), this.inputs = [], 
        this.removeHtmlElements(), this.htmlElements = [], this._animationEffect = effect, 
        TimerManager.destroy(), _.isUndefined(this._currentScene) || EventBus.removeEventListener(this._currentScene._id + "_assetsLoaded", this._currentScene.invokeRenderElements, this), 
        stageId ? this.invokeStage(stageId) : OverlayManager.moveToEndPage();
    },
    invokeStage: function(stageId) {
        var stage = _.clone(_.findWhere(this._data.stage, {
            id: stageId
        }));
        stage && stage.extends && (baseStage = _.findWhere(this._data.stage, {
            id: stage.extends
        }), stage = this.mergeStages(stage, baseStage)), this._previousStage = this._currentStage, 
        this._currentStage = stageId, PluginManager.invoke("stage", stage, this, null, this);
    },
    preloadStages: function() {
        var stagesToLoad = this.getStagesToPreLoad(this._currentScene._data), instance = this;
        AssetManager.initStage(stagesToLoad.stage, stagesToLoad.next, stagesToLoad.prev, function() {
            instance._currentScene.dispatchEvent("enter");
        });
    },
    mergeStages: function(stage1, stage2) {
        for (k in stage2) if ("id" !== k) {
            var attr = stage2[k];
            stage1[k] ? (_.isArray(stage1[k]) || (stage1[k] = [ stage1[k] ]), _.isArray(attr) ? stage1[k].push.apply(stage1[k], attr) : stage1[k].push(attr)) : stage1[k] = attr;
        }
        return stage1;
    },
    isStageChanging: function() {
        return this._isSceneChanging;
    },
    transitionTo: function(action) {
        if (!this._isSceneChanging) {
            var stage = this._currentScene;
            this.setParam(stage.getStagestateKey(), stage._currentState), RecorderManager.stopRecording(), 
            AudioManager.stopAll(), TimerManager.stopAll(this._currentStage), action.transitionType || (action.transitionType = action.param), 
            "previous" === action.transitionType ? (this._isSceneChanging = !0, stage._stageController && stage._stageController.hasPrevious() ? (stage._stageController.decrIndex(2), 
            this.replaceStage(stage._data.id, action)) : (stage._stageController && (stage._stageController.setIndex(-1), 
            1 == action.reset && stage._stageController.reset()), this.replaceStage(action.value, action))) : "skip" === action.transitionType ? (stage._stageController && 1 == action.reset && stage._stageController.reset(), 
            this.replaceStage(action.value, action)) : (this._isSceneChanging = !0, stage._stageController && stage._stageController.hasNext() ? this.replaceStage(stage._data.id, action) : (stage._stageController && 1 == action.reset && stage._stageController.reset(), 
            this.replaceStage(action.value, action)));
        }
    },
    removeHtmlElements: function() {
        var gameAreaEle = jQuery("#" + Renderer.divIds.gameArea), chilElemtns = gameAreaEle.children();
        jQuery(chilElemtns).each(function() {
            "overlay" !== this.id && "gameCanvas" !== this.id && jQuery(this).remove();
        });
    },
    disableInputs: function() {
        this.inputs.forEach(function(inputId) {
            var element = document.getElementById(inputId);
            _.isNull(element) || (element.style.display = "none");
        });
    },
    enableInputs: function() {
        this.inputs.forEach(function(inputId) {
            var element = document.getElementById(inputId);
            _.isNull(element) || (element.style.display = "block");
        });
    },
    getTransitionEffect: function(animation) {
        var d = this.getDirection(animation.direction), e = this.getEase(animation.ease), t = animation.duration;
        animation.effect = animation.effect || "scroll";
        var effect;
        switch (animation.effect.toUpperCase()) {
          case "SCALEIN":
            effect = new creatine.transitions.ScaleIn(e, t);
            break;

          case "SCALEOUT":
            effect = new creatine.transitions.ScaleOut(e, t);
            break;

          case "SCALEINOUT":
            effect = new creatine.transitions.ScaleInOut(e, t);
            break;

          case "MOVEIN":
            effect = new creatine.transitions.MoveIn(d, e, t);
            break;

          case "SCROLL":
            effect = new creatine.transitions.Scroll(d, e, t);
            break;

          case "FADEIN":
            effect = new creatine.transitions.FadeIn(e, t);
            break;

          case "FADEOUT":
            effect = new creatine.transitions.FadeOut(e, t);
            break;

          case "FADEINOUT":
            effect = new creatine.transitions.FadeInOut(e, t);
            break;

          default:
            effect = new creatine.transitions.MoveOut(d, e, t);
        }
        return effect;
    },
    getDirection: function(d) {
        return void 0 === d ? d : eval("creatine." + d.toUpperCase());
    },
    getEase: function(e) {
        return void 0 === e ? e : eval("createjs.Ease." + e);
    },
    getStagesToPreLoad: function(stageData) {
        var params = stageData.param;
        params || (params = []), _.isArray(params) || (params = [ params ]);
        var next = _.findWhere(params, {
            name: "next"
        }), prev = _.findWhere(params, {
            name: "previous"
        }), nextStageId = void 0, prevStageId = void 0;
        return next && (nextStageId = next.value), prev && (prevStageId = prev.value), {
            stage: stageData.id,
            next: nextStageId,
            prev: prevStageId
        };
    },
    cleanUp: function() {
        createjs.Touch.disable(this._self);
    },
    pause: function() {
        this._currentStage && AssetManager.stopStageAudio(this._currentStage), TelemetryService.interrupt("BACKGROUND", this._currentStage);
    },
    resume: function() {
        TelemetryService.interrupt("RESUME", this._currentStage);
    },
    setParam: function(param, value, incr, max) {
        var instance = this, fval = instance._contentParams[param];
        incr ? (void 0 === fval && (fval = 0), fval += incr) : fval = value, 0 > fval && (fval = 0), 
        void 0 !== max && fval >= max && (fval = 0), instance._contentParams[param] = fval;
    },
    getParam: function(param) {
        var instance = this, params;
        if (instance._saveState) return instance._contentParams[param];
        var params = instance._contentParams, expr = "params." + param;
        return eval(expr);
    },
    addLoaderElement: function() {
        var gameArea = document.getElementById(Renderer.divIds.gameArea), loaderArea = document.createElement("div");
        loaderArea.id = "loaderArea", loaderArea.innerHTML = '<div class="preloader-wrapper"><div class="spinner-layer"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div></div>', 
        gameArea.parentElement.appendChild(loaderArea);
    },
    getStageDataById: function(stageId) {
        var stageData = void 0;
        return this._data.stage.forEach(function(element, index) {
            element.id === stageId && (stageData = element);
        }), stageData;
    }
});

PluginManager.registerPlugin("theme", ThemePlugin);

var TweenPlugin = AnimationPlugin.extend({
    _animateFn: void 0,
    initPlugin: function(data, plugin) {
        var to = data.to, loop = data.loop;
        _.isArray(to) || (to = [ to ]);
        var loopStr = "";
        loop && (loopStr = ", loop:true");
        var fn = "(function() {return function(plugin, cb){";
        fn += "createjs.Tween.get(plugin, {override:true " + loopStr + "})", to.forEach(function(to) {
            var data = _.isString(to.__cdata) ? JSON.parse(to.__cdata) : to.__cdata, relDims = plugin.getRelativeDims(data);
            data.x = relDims.x, data.y = relDims.y, data.width = relDims.w, data.height = relDims.h, 
            data.scaleX = plugin._self.scaleX * data.scaleX, data.scaleY = plugin._self.scaleY * data.scaleY, 
            fn += ".to(" + JSON.stringify(data) + "," + to.duration + ", createjs.Ease." + to.ease + ")";
        }), fn += '.call(function() {cb({status: "success"})})', fn += '.addEventListener("change", function(event) {Renderer.update = true;', 
        data.widthChangeEvent && (fn += "AnimationManager.widthHandler(event, plugin);"), 
        fn += "})}})()", this._animateFn = fn;
    },
    animate: function(plugin, cb) {
        cb || (cb = function(resp) {
            console.info("Tween execution completed.");
        });
        var fn = this._animateFn.replace("COMPLETE_CALLBACK", cb.toString()), animationFn = eval(fn);
        animationFn.apply(null, [ plugin._self, cb ]);
    }
});

AnimationManager.registerPlugin("tween", TweenPlugin);

var VideoPlugin = Plugin.extend({
    _type: "video",
    _render: !0,
    _data: void 0,
    _instance: void 0,
    _defaultStart: 50,
    initPlugin: function(data) {
        this._data = data, this._data && (_.isUndefined(this._data.autoplay) && (this._data.autoplay = !0), 
        _.isUndefined(this._data.controls) && (this._data.controls = !1), _.isUndefined(this._data.muted) && (this._data.muted = !1)), 
        this.loadVideo(data), _instance = this;
    },
    loadVideo: function(data) {
        if (!data.asset) return !1;
        var lItem = this.createVideoElement();
        this.getVideo(data).load(), this.registerEvents(), this._self = new createjs.Bitmap(lItem), 
        1 == data.autoplay && this.play();
    },
    registerEvents: function() {
        var videoEle = this.getVideo(this._data);
        jQuery(videoEle).bind("play", this.handleTelemetryLog), jQuery(videoEle).bind("pause", this.handleTelemetryLog), 
        jQuery(videoEle).bind("error", this.logConsole), jQuery(videoEle).bind("abort", this.logConsole), 
        jQuery(videoEle).bind("loadeddata", this.onLoadData);
    },
    handleTelemetryLog: function(event) {
        var action = {}, videoEle = event.target;
        action.asset = videoEle.id, action.stageId = Renderer.theme._currentStage, "pause" === event.type && (event.type = videoEle.currentTime > 0 ? "pause" : "stop", 
        videoEle.ended || _instance.sendTelemeteryData(action, event.type)), "play" === event.type && (videoEle.autoplay || _instance.sendTelemeteryData(action, event.type), 
        videoEle.autoplay = void 0);
    },
    onLoadData: function() {
        1 == _instance.autoplay && _instance.play();
    },
    logConsole: function(e) {
        console.warn("This video has", e.type);
    },
    sendTelemeteryData: function(action, subType) {
        action && EventManager.processAppTelemetry(action, "OTHER", this._instance, {
            subtype: subType.toUpperCase()
        });
    },
    play: function(action) {
        var videoEle = this.getVideo(action);
        videoEle.paused && videoEle.readyState > 2 ? this.start(videoEle) : console.warn("Video is not ready to play", videoEle.readyState);
    },
    pause: function(action) {
        var videoEle = this.getVideo(action);
        _.isUndefined(videoEle) ? console.info("video pause failed") : videoEle.pause();
    },
    stop: function(action) {
        var videoEle = this.getVideo(action);
        videoEle.pause(), videoEle.currentTime = 0;
    },
    replay: function() {
        this.getVideo(this._data).currentTime = 0, this.play();
    },
    start: function(videoEle) {
        var delay = _.isUndefined(this._data.delay) ? this._defaultStart : this._data.delay;
        this._data.delay = this._defaultStart, setTimeout(function() {
            videoEle.play();
        }, delay);
    },
    getVideo: function(action) {
        return _.isUndefined(action) ? (console.info("Video started without any ECML action"), 
        document.getElementById(this._data.asset)) : document.getElementById(action.asset);
    },
    setVideoStyle: function(jqVideoEle) {
        var dims = this.relativeDims();
        jQuery(jqVideoEle).attr("id", this._data.asset).prop({
            autoplay: this._data.autoplay,
            muted: this._data.muted,
            controls: this._data.controls,
            width: dims.w,
            height: dims.h
        }).css({
            position: "absolute",
            left: dims.x + "px",
            top: dims.y + "px",
            display: "block"
        });
    },
    addVideoElement: function(jqVideoEle) {
        this._theme.htmlElements.push(jQuery(jqVideoEle).attr("id"));
        var videoEle = this.getVideo(this._data), div = document.getElementById("gameArea");
        div.insertBefore(videoEle, div.childNodes[0]);
    },
    createVideoElement: function() {
        var videoAsset;
        if ((videoAsset = this._theme.getAsset(this._data.asset)) instanceof HTMLElement == 0) {
            var src = videoAsset;
            videoAsset = document.createElement("video"), videoAsset.src = src;
        }
        var jqVideoEle = jQuery(videoAsset).insertBefore("#gameArea");
        _.isUndefined(this._data.type) ? console.warn("Video type is not defined") : jQuery(jqVideoEle).attr("type", this._data.type), 
        this.setVideoStyle(jqVideoEle), this.addVideoElement(jqVideoEle);
        var videoEle = this.getVideo(this._data);
        return new createjs.Bitmap(videoEle);
    }
});

PluginManager.registerPlugin("video", VideoPlugin), CanvasPreview = {
    loader: void 0,
    theme: void 0,
    update: !0,
    gdata: void 0,
    running: !1,
    preview: !1,
    divIds: {
        gameArea: "gameArea",
        canvas: "gameCanvas"
    },
    resizeGame: function(disableDraw) {
        document.getElementById(CanvasPreview.divIds.gameArea);
        CanvasPreview.theme.updateCanvas(720, 450), disableDraw || CanvasPreview.theme.reRender();
    },
    start: function(gameRelPath, canvasId, gameId, data, preview) {
        Renderer = this, CanvasPreview.running && CanvasPreview.cleanUp(), CanvasPreview.running = !0, 
        CanvasPreview.preview = preview, CanvasPreview.init(data, canvasId, gameRelPath);
    },
    init: function(data, canvasId, gameRelPath) {
        CanvasPreview.gdata = data, data.theme.canvasId = canvasId, CanvasPreview.theme = new ThemePlugin(data.theme), 
        CanvasPreview.resizeGame(!0), CanvasPreview.theme.baseDir = gameRelPath, PluginManager.registerCustomPlugins(data.theme.manifest, ""), 
        CanvasPreview.preview ? CanvasPreview.theme.start(gameRelPath) : CanvasPreview.theme.start(gameRelPath.replace("file:///", "") + "/assets/"), 
        createjs.Ticker.addEventListener("tick", function() {
            CanvasPreview.update ? (CanvasPreview.theme.update(), CanvasPreview.update = !1) : CanvasPreview.theme && CanvasPreview.theme.tick();
        });
    },
    cleanUp: function() {
        Renderer.running = !1, PluginManager.cleanUp(), AnimationManager.cleanUp(), AssetManager.destroy(), 
        TimerManager.destroy(), AudioManager.cleanUp(), Renderer.theme.cleanUp(), Renderer.theme = void 0, 
        TelemetryService.end();
    },
    pause: function() {
        CanvasPreview.theme && CanvasPreview.theme.pause();
    },
    resume: function() {
        CanvasPreview.theme && CanvasPreview.theme.resume();
    }
}, Renderer = {
    loader: void 0,
    theme: void 0,
    update: !0,
    gdata: void 0,
    running: !1,
    preview: !1,
    divIds: {
        gameArea: "gameArea",
        canvas: "gameCanvas"
    },
    resizeGame: function(disableDraw) {
        var gameArea = document.getElementById(Renderer.divIds.gameArea), widthToHeight = 16 / 9, newWidth = window.innerWidth, newHeight = window.innerHeight;
        newWidth / newHeight > widthToHeight ? (newWidth = newHeight * widthToHeight, gameArea.style.height = newHeight + "px", 
        gameArea.style.width = newWidth + "px") : (newHeight = newWidth / widthToHeight, 
        gameArea.style.width = newWidth + "px", gameArea.style.height = newHeight + "px"), 
        gameArea.style.marginTop = -newHeight / 2 + "px", gameArea.style.marginLeft = -newWidth / 2 + "px", 
        Renderer.theme.updateCanvas(newWidth, newHeight), disableDraw || Renderer.theme.reRender();
    },
    start: function(gameRelPath, canvasId, game, data, preview) {
        try {
            Renderer.running && (Renderer.cleanUp(), TelemetryService.start(game.identifier, game.pkgVersion)), 
            Renderer.running = !0, Renderer.preview = preview || !1, data ? Renderer.init(data, canvasId, gameRelPath) : (Renderer.initByJSON(gameRelPath, canvasId), 
            "undefined" != typeof sensibol && sensibol.recorder.init(gameRelPath + "/lesson.metadata").then(function(res) {
                console.info("Init lesson successful.", res);
            }).catch(function(err) {
                console.error("Error while init lesson:", err);
            }));
        } catch (e) {
            showToaster("error", "Lesson fails to play"), EkstepRendererAPI.logErrorEvent(e, {
                severity: "fatal",
                type: "content",
                action: "play"
            }), console.warn("Canvas Renderer init is failed", e);
        }
    },
    initByJSON: function(gameRelPath, canvasId) {
        jQuery.getJSON(gameRelPath + "/index.json", function(data) {
            Renderer.init(data, canvasId, gameRelPath);
        }).fail(function() {
            Renderer.initByXML(gameRelPath, canvasId);
        });
    },
    initByXML: function(gameRelPath, canvasId) {
        jQuery.get(gameRelPath + "/index.ecml", function(data) {
            Renderer.init(data, canvasId, gameRelPath);
        }, null, "xml").fail(function(err) {
            EkstepRendererAPI.logErrorEvent(err, {
                severity: "fatal",
                type: "content",
                action: "play"
            }), alert("Invalid ECML please correct the Ecml : ", err), checkStage();
        });
    },
    init: function(data, canvasId, gameRelPath) {
        var instance = this;
        if (tempData = data, !jQuery.isPlainObject(data)) {
            data = new X2JS({
                attributePrefix: "none"
            }).xml2json(data);
        }
        Renderer.gdata = data;
        var content = data.theme || data.ecml;
        content.canvasId = canvasId, Renderer.theme = new ThemePlugin(content), Renderer.resizeGame(!0), 
        Renderer.theme.baseDir = gameRelPath;
        var manifest = content.manifest ? content.manifest : AssetManager.getManifest(content);
        PluginManager.init(gameRelPath);
        var resource = instance.handleRelativePath(instance.getResource(manifest), gameRelPath + "/widgets/"), pluginManifest = content["plugin-manifest"];
        (_.isUndefined(pluginManifest) || _.isEmpty(pluginManifest)) && (pluginManifest = {
            plugin: []
        });
        var previewPlugins = EkstepRendererAPI.getPreviewData().config.plugins;
        previewPlugins && _.each(previewPlugins, function(item) {
            pluginManifest.plugin.push({
                id: item.id,
                ver: item.ver || 1,
                type: item.type || "plugin",
                depends: item.depends || ""
            });
        });
        try {
            PluginManager.loadPlugins(pluginManifest.plugin, resource, function() {
                Renderer.theme.start(gameRelPath.replace("file:///", "") + "/assets/");
            });
        } catch (e) {
            console.warn("Framework fails to load plugins", e), EkstepRendererAPI.logErrorEvent(e, {
                severity: "fatal",
                type: "system",
                action: "play"
            }), showToaster("error", "Framework fails to load plugins");
        }
        createjs.Ticker.addEventListener("tick", function() {
            Renderer.update ? _(Renderer.theme).isUndefined() || (Renderer.theme.update(), Renderer.update = !1) : Renderer.theme && Renderer.theme.tick();
        });
    },
    handleRelativePath: function(manifestMedia, pluginPath) {
        return _.each(manifestMedia, function(p) {
            "http" != p.src.substring(0, 4) && (isbrowserpreview ? p.src = AppConfig.host + p.src : p.src = pluginPath + p.src);
        }), manifestMedia;
    },
    getResource: function(manifest) {
        return _.filter(_.isArray(manifest.media) ? manifest.media : [ manifest.media ], function(media) {
            return "css" === media.type || "js" === media.type || "plugin" === media.type || " library" === media.type;
        });
    },
    cleanUp: function() {
        Renderer.running = !1, AnimationManager.cleanUp(), AssetManager.destroy(), TimerManager.destroy(), 
        AudioManager.cleanUp(), Renderer.theme.cleanUp(), Renderer.theme = void 0;
    },
    pause: function() {
        Renderer.theme && Renderer.theme.pause();
    },
    resume: function() {
        Renderer.theme && Renderer.theme.resume();
    }
}, HTMLRenderer = {
    running: !1,
    start: function(gameRelPath, canvasId, game, cb) {
        HTMLRenderer.running && HTMLRenderer.cleanUp(), HTMLRenderer.running = !0, game && game.identifier && game.pkgVersion ? TelemetryService.start(game.identifier, game.pkgVersion) : TelemetryService.start(), 
        HTMLRenderer.resizeFrame(), cb();
    },
    resizeFrame: function() {
        var gameArea = document.getElementById("htmlFrame"), widthToHeight = 16 / 9, newWidth = window.innerWidth, newHeight = window.innerHeight;
        newWidth / newHeight > widthToHeight ? (newWidth = newHeight * widthToHeight, gameArea.style.height = newHeight + "px", 
        gameArea.style.width = newWidth + "px") : (newHeight = newWidth / widthToHeight, 
        gameArea.style.width = newWidth + "px", gameArea.style.height = newHeight + "px");
    },
    cleanUp: function() {
        HTMLRenderer.running = !1, TelemetryService.end();
    }
}, window.EkstepRendererAPI = {
    baseURL: "",
    addEventListener: function(type, callback, scope) {
        EventBus.addEventListener(type, callback, scope);
    },
    dispatchEvent: function(type, data, target) {
        EventBus.dispatch(type, data, target);
    },
    getEvents: function() {
        return EventBus.getEvents();
    },
    hasEventListener: function(eventName) {
        return EventBus.hasEventListener(eventName);
    },
    removeEventListener: function(type, callback, scope) {
        EventBus.removeEventListener(type, callback, scope);
    },
    render: function() {
        Renderer.update = !0;
    },
    getManifest: function() {
        return Renderer.theme._data.manifest;
    },
    removeHtmlElements: function() {
        Renderer.theme.removeHtmlElements();
    },
    refreshStage: function() {
        EventBus.dispatch("actionReload");
    },
    getAllStages: function() {
        return Renderer.theme._data.stage;
    },
    getCurrentStage: function() {
        return Renderer.theme._currentScene;
    },
    getCurrentStageId: function() {
        return Renderer.theme._currentStage;
    },
    getCanvas: function() {
        return document.getElementById("gameCanvas");
    },
    getBaseURL: function() {
        return Renderer.theme._basePath;
    },
    getContentData: function() {
        return Renderer.theme._data;
    },
    getPluginInstance: function(pluginId) {
        return PluginManager.getPluginObject(pluginId);
    },
    cleanRenderer: function() {
        Renderer.cleanUp();
    },
    addController: function(controller) {
        Renderer.theme.addController(controller);
    },
    getController: function(cType, cId) {
        var c = cType + "." + cId;
        return ControllerManager.getControllerInstance(c);
    },
    getCurrentController: function() {
        var currentStage = EkstepRendererAPI.getCurrentStage();
        if (currentStage) return currentStage._stageController;
    },
    setParam: function(scope, paramName, value) {
        if ("theme" === scope && Renderer.theme.setParam(paramName, value), "stage" === scope) {
            var currentStage = EkstepRendererAPI.getCurrentStage();
            currentStage && currentStage.setParam(paramName, value);
        }
        "app" === scope && GlobalContext.setParam(paramName, value);
    },
    getStageParam: function(paramName) {
        var paramData, currentStage = EkstepRendererAPI.getCurrentStage();
        return paramName && currentStage ? paramData = currentStage.getParam(paramName) : currentStage && (paramData = currentStage.params), 
        paramData;
    },
    getParam: function(scope, paramName) {
        var paramData = "";
        return "theme" === scope && (paramData = Renderer.theme.getParam(paramName)), "stage" === scope && (paramData = EkstepRendererAPI.getStageParam(paramName)), 
        "app" === scope && (paramData = GlobalContext.getParam(paramName)), paramData;
    },
    getParams: function(scope) {
        var paramData = "";
        return "theme" === scope && (paramData = Renderer.theme._contentParams), "stage" === scope && (paramData = EkstepRendererAPI.getStageParam()), 
        "app" === scope && (paramData = GlobalContext._params), paramData;
    },
    getStage: function(stageId) {
        return Renderer.theme.getStageDataById(stageId);
    },
    getState: function(paramName) {
        var currentStage = EkstepRendererAPI.getCurrentStage();
        if (currentStage) return currentStage.getState(paramName);
    },
    setState: function(param, value, isStateChanged) {
        var currentStage = EkstepRendererAPI.getCurrentStage();
        currentStage && currentStage.setState(param, value, isStateChanged);
    },
    invokeAction: function(action) {
        CommandManager.handle(action);
    },
    getTelemetryService: function() {
        return TelemetryService;
    },
    getTelemetryData: function() {
        return TelemetryService._data;
    },
    instantiatePlugin: function(id, data, parent) {
        return PluginManager.invoke(id, data, parent, Renderer.theme._currentScene, Renderer.theme);
    },
    tansitionTo: function(stageId) {
        var props = {
            duration: "100",
            ease: "linear",
            effect: "fadeIn",
            value: stageId,
            pluginId: Renderer.theme._id,
            transitionType: "next"
        };
        this.invokeCommand("transitionTo", Renderer.theme._id, props);
    },
    getGameArea: function() {
        return document.getElementById("gameArea");
    },
    getAsset: function(assetId) {
        return AssetManager.strategy.assetMap[assetId];
    },
    loadAsset: function(assetId) {
        var asset = AssetManager.strategy.assetMap[assetId];
        return AssetManager.loadAsset(Renderer.theme._currentStage, asset.id, asset.src);
    },
    play: function(assetId) {
        this.invokeCommand("play", assetId);
    },
    pause: function(assetId) {
        this.invokeCommand("pause", assetId);
    },
    stop: function(assetId) {
        this.invokeCommand("stop", assetId);
    },
    toggelPlay: function(assetId) {
        this.invokeCommand("togglePlay", assetId);
    },
    stopAll: function() {
        this.invokeCommand("stop", "", {
            sound: !0
        });
    },
    muteAudio: function() {
        AudioManager.mute();
    },
    unMuteAudio: function() {
        AudioManager.unmute();
    },
    startRecording: function(assetId) {
        var action = {
            type: "command",
            command: "startRecord",
            asset: assetId,
            disableTelemetry: !1,
            success: "recordingInfo",
            stageInstanceId: Renderer.theme._currentScene._stageInstanceId,
            stageId: Renderer.theme._currentStage
        };
        RecorderManager.startRecording(action);
    },
    stopRecording: function(assetId) {
        var action = {
            type: "command",
            command: "stopRecord",
            asset: assetId,
            disableTelemetry: !1,
            success: "recordingInfo",
            stageInstanceId: Renderer.theme._currentScene._stageInstanceId,
            stageId: Renderer.theme._currentStage
        };
        RecorderManager.stopRecording(action);
    },
    invokeCommand: function(name, assetId, props) {
        var stageId = this.getCurrentStage()._id;
        (_.isUndefined(assetId) || _.isEmpty(assetId)) && (assetId = stageId);
        var action = {
            type: "command",
            command: name,
            asset: assetId,
            pluginId: stageId
        };
        props && _.extend(action, props), this.invokeAction(action);
    },
    next: function() {
        EventBus.dispatch("actionNavigateNext", "next");
    },
    previous: function() {
        EventBus.dispatch("actionNavigatePrevious", "previous");
    },
    skip: function() {
        EventBus.dispatch("actionNavigateSkip", "skip");
    },
    addChild: function(pluginId, child) {
        this.getPluginInstance(pluginId).addChild(child._self, child), this.render();
    },
    removeChildAt: function(pluginId, index) {
        this.getPluginInstance(pluginId).removeChildAt(index), this.render();
    },
    removeChild: function(pluginId, child) {
        this.getPluginInstance(pluginId).removeChild(child._self), this.render();
    },
    dimensions: function(pluginId) {
        return this.getPluginInstance(pluginId).dimensions();
    },
    relativeDims: function(pluginId) {
        return this.getPluginInstance(pluginId).relativeDims();
    },
    show: function(assetId, delay) {
        var props = {
            delay: delay || 0
        };
        this.invokeCommand("show", assetId, props);
    },
    hide: function(assetId, delay) {
        var props = {
            delay: delay || 0
        };
        this.invokeCommand("hide", assetId, props);
    },
    toggleShow: function(assetId, delay) {
        var props = {
            delay: delay || 0
        };
        this.invokeCommand("toggleShow", assetId, props);
    },
    toggleShadow: function(pluginId) {
        this.getPluginInstance(pluginId).toggleShadow();
    },
    addShadow: function(pluginId) {
        this.getPluginInstance(pluginId).addShadow();
    },
    removeShadow: function(pluginId) {
        this.getPluginInstance(pluginId).removeShadow();
    },
    hasShadow: function(pluginId) {
        return this.getPluginInstance(pluginId).hasShadow();
    },
    drawBorder: function(pluginId, dims) {
        var plugin = this.getPluginInstance(pluginId);
        plugin.drawBorder(plugin, dims);
    },
    rotation: function(pluginId, rotate) {
        var plugin = this.getPluginInstance(pluginId);
        plugin.rotate = rotate, plugin.rotation(plugin);
    },
    blur: function(pluginId) {
        this.getPluginInstance(pluginId).blur();
    },
    unblur: function(pluginId) {
        this.getPluginInstance(pluginId).unblur();
    },
    invokeChildren: function(pluginId, scope) {
        this.getPluginInstance(pluginId).invokeChildren(scope, scope._parent, scope._stage, scope._theme);
    },
    getMedia: function(assetId) {
        return Renderer.theme.getMedia(assetId);
    },
    currentItem: function() {
        var ctrl = this.getCurrentController();
        return ctrl._model[ctrl._index];
    },
    previousItem: function() {
        var ctrl = this.getCurrentController();
        return ctrl._index > 0 && ctrl._index < ctrl._model.length ? ctrl._model[ctrl._index - 1] : "Item not available";
    },
    mergeStages: function(stage1, stage2) {
        return Renderer.theme.mergeStages(stage1, stage2);
    },
    getStageItems: function() {
        var currentController = EkstepRendererAPI.getCurrentController();
        return currentController && currentController._model ? currentController._model : "Item not available.";
    },
    getPreviewData: function() {
        return window.previewData;
    },
    replayContent: function(data, target) {
        EkstepRendererAPI.dispatchEvent("actionReplay", data, target);
    },
    getCurrentUser: function() {
        return EkstepRendererAPI.dispatchEvent("event:getcurrentuser"), console.log("currentUser: ", currentUser), 
        currentUser;
    },
    getUserList: function() {
        return EkstepRendererAPI.dispatchEvent("event:getuserlist"), console.log("userList: ", userList), 
        userList;
    },
    showUser: function(value) {
        EkstepRendererAPI.dispatchEvent("event:showuser", value);
    },
    userSwitcherEnabled: function(value) {
        EkstepRendererAPI.dispatchEvent("event:userswitcherenabled", value);
    },
    openUserSwitcher: function() {
        EkstepRendererAPI.dispatchEvent("event:openuserswitcher");
    },
    closeUserSwitcher: function() {
        EkstepRendererAPI.dispatchEvent("event:closeuserswitcher");
    },
    logErrorEvent: function(errorStack, data) {
        try {
            data && (data.env = "undefined" != typeof cordova ? "mobile" : EkstepRendererAPI.getPreviewData().context.mode || "preview", 
            data.type = _.isUndefined(data.type) ? "OTHER" : data.type.toUpperCase(), data.stageId = Renderer.theme ? EkstepRendererAPI.getCurrentStageId() : "", 
            data.objectType || (data.objectType = _.isUndefined(this.getPluginInstance(data.asset)) ? "" : this.getPluginInstance(data.asset)._data.pluginType), 
            "fatal" !== data.severity && ("theme" === data.objectType || "stage" === data.objectType || "transitionTo" === data.action ? data.severity = "fatal" : data.severity = "error"), 
            errorStack && (data.err = errorStack.message || errorStack, data.data = errorStack.stack), 
            EkstepRendererAPI.getTelemetryService().error(data));
        } catch (e) {
            console.warn("OE_ERROR event fails to log", e);
        }
    }
};
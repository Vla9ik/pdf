(self["webpackChunkfls_start"] = self["webpackChunkfls_start"] || []).push([ [ 661 ], {
    3491: function(module) {
        (function() {
            var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;
            if (typeof performance !== "undefined" && performance !== null && performance.now) module.exports = function() {
                return performance.now();
            }; else if (typeof process !== "undefined" && process !== null && process.hrtime) {
                module.exports = function() {
                    return (getNanoSeconds() - nodeLoadTime) / 1e6;
                };
                hrtime = process.hrtime;
                getNanoSeconds = function() {
                    var hr;
                    hr = hrtime();
                    return hr[0] * 1e9 + hr[1];
                };
                moduleLoadTime = getNanoSeconds();
                upTime = process.uptime() * 1e9;
                nodeLoadTime = moduleLoadTime - upTime;
            } else if (Date.now) {
                module.exports = function() {
                    return Date.now() - loadTime;
                };
                loadTime = Date.now();
            } else {
                module.exports = function() {
                    return (new Date).getTime() - loadTime;
                };
                loadTime = (new Date).getTime();
            }
        }).call(this);
    },
    3146: (module, __unused_webpack_exports, __webpack_require__) => {
        var now = __webpack_require__(3491), root = typeof window === "undefined" ? __webpack_require__.g : window, vendors = [ "moz", "webkit" ], suffix = "AnimationFrame", raf = root["request" + suffix], caf = root["cancel" + suffix] || root["cancelRequest" + suffix];
        for (var i = 0; !raf && i < vendors.length; i++) {
            raf = root[vendors[i] + "Request" + suffix];
            caf = root[vendors[i] + "Cancel" + suffix] || root[vendors[i] + "CancelRequest" + suffix];
        }
        if (!raf || !caf) {
            var last = 0, id = 0, queue = [], frameDuration = 1e3 / 60;
            raf = function(callback) {
                if (queue.length === 0) {
                    var _now = now(), next = Math.max(0, frameDuration - (_now - last));
                    last = next + _now;
                    setTimeout((function() {
                        var cp = queue.slice(0);
                        queue.length = 0;
                        for (var i = 0; i < cp.length; i++) if (!cp[i].cancelled) try {
                            cp[i].callback(last);
                        } catch (e) {
                            setTimeout((function() {
                                throw e;
                            }), 0);
                        }
                    }), Math.round(next));
                }
                queue.push({
                    handle: ++id,
                    callback,
                    cancelled: false
                });
                return id;
            };
            caf = function(handle) {
                for (var i = 0; i < queue.length; i++) if (queue[i].handle === handle) queue[i].cancelled = true;
            };
        }
        module.exports = function(fn) {
            return raf.call(root, fn);
        };
        module.exports.cancel = function() {
            caf.apply(root, arguments);
        };
        module.exports.polyfill = function(object) {
            if (!object) object = root;
            object.requestAnimationFrame = raf;
            object.cancelAnimationFrame = caf;
        };
    },
    2855: module => {
        module.exports = function(color_string) {
            this.ok = false;
            this.alpha = 1;
            if (color_string.charAt(0) == "#") color_string = color_string.substr(1, 6);
            color_string = color_string.replace(/ /g, "");
            color_string = color_string.toLowerCase();
            var simple_colors = {
                aliceblue: "f0f8ff",
                antiquewhite: "faebd7",
                aqua: "00ffff",
                aquamarine: "7fffd4",
                azure: "f0ffff",
                beige: "f5f5dc",
                bisque: "ffe4c4",
                black: "000000",
                blanchedalmond: "ffebcd",
                blue: "0000ff",
                blueviolet: "8a2be2",
                brown: "a52a2a",
                burlywood: "deb887",
                cadetblue: "5f9ea0",
                chartreuse: "7fff00",
                chocolate: "d2691e",
                coral: "ff7f50",
                cornflowerblue: "6495ed",
                cornsilk: "fff8dc",
                crimson: "dc143c",
                cyan: "00ffff",
                darkblue: "00008b",
                darkcyan: "008b8b",
                darkgoldenrod: "b8860b",
                darkgray: "a9a9a9",
                darkgreen: "006400",
                darkkhaki: "bdb76b",
                darkmagenta: "8b008b",
                darkolivegreen: "556b2f",
                darkorange: "ff8c00",
                darkorchid: "9932cc",
                darkred: "8b0000",
                darksalmon: "e9967a",
                darkseagreen: "8fbc8f",
                darkslateblue: "483d8b",
                darkslategray: "2f4f4f",
                darkturquoise: "00ced1",
                darkviolet: "9400d3",
                deeppink: "ff1493",
                deepskyblue: "00bfff",
                dimgray: "696969",
                dodgerblue: "1e90ff",
                feldspar: "d19275",
                firebrick: "b22222",
                floralwhite: "fffaf0",
                forestgreen: "228b22",
                fuchsia: "ff00ff",
                gainsboro: "dcdcdc",
                ghostwhite: "f8f8ff",
                gold: "ffd700",
                goldenrod: "daa520",
                gray: "808080",
                green: "008000",
                greenyellow: "adff2f",
                honeydew: "f0fff0",
                hotpink: "ff69b4",
                indianred: "cd5c5c",
                indigo: "4b0082",
                ivory: "fffff0",
                khaki: "f0e68c",
                lavender: "e6e6fa",
                lavenderblush: "fff0f5",
                lawngreen: "7cfc00",
                lemonchiffon: "fffacd",
                lightblue: "add8e6",
                lightcoral: "f08080",
                lightcyan: "e0ffff",
                lightgoldenrodyellow: "fafad2",
                lightgrey: "d3d3d3",
                lightgreen: "90ee90",
                lightpink: "ffb6c1",
                lightsalmon: "ffa07a",
                lightseagreen: "20b2aa",
                lightskyblue: "87cefa",
                lightslateblue: "8470ff",
                lightslategray: "778899",
                lightsteelblue: "b0c4de",
                lightyellow: "ffffe0",
                lime: "00ff00",
                limegreen: "32cd32",
                linen: "faf0e6",
                magenta: "ff00ff",
                maroon: "800000",
                mediumaquamarine: "66cdaa",
                mediumblue: "0000cd",
                mediumorchid: "ba55d3",
                mediumpurple: "9370d8",
                mediumseagreen: "3cb371",
                mediumslateblue: "7b68ee",
                mediumspringgreen: "00fa9a",
                mediumturquoise: "48d1cc",
                mediumvioletred: "c71585",
                midnightblue: "191970",
                mintcream: "f5fffa",
                mistyrose: "ffe4e1",
                moccasin: "ffe4b5",
                navajowhite: "ffdead",
                navy: "000080",
                oldlace: "fdf5e6",
                olive: "808000",
                olivedrab: "6b8e23",
                orange: "ffa500",
                orangered: "ff4500",
                orchid: "da70d6",
                palegoldenrod: "eee8aa",
                palegreen: "98fb98",
                paleturquoise: "afeeee",
                palevioletred: "d87093",
                papayawhip: "ffefd5",
                peachpuff: "ffdab9",
                peru: "cd853f",
                pink: "ffc0cb",
                plum: "dda0dd",
                powderblue: "b0e0e6",
                purple: "800080",
                rebeccapurple: "663399",
                red: "ff0000",
                rosybrown: "bc8f8f",
                royalblue: "4169e1",
                saddlebrown: "8b4513",
                salmon: "fa8072",
                sandybrown: "f4a460",
                seagreen: "2e8b57",
                seashell: "fff5ee",
                sienna: "a0522d",
                silver: "c0c0c0",
                skyblue: "87ceeb",
                slateblue: "6a5acd",
                slategray: "708090",
                snow: "fffafa",
                springgreen: "00ff7f",
                steelblue: "4682b4",
                tan: "d2b48c",
                teal: "008080",
                thistle: "d8bfd8",
                tomato: "ff6347",
                turquoise: "40e0d0",
                violet: "ee82ee",
                violetred: "d02090",
                wheat: "f5deb3",
                white: "ffffff",
                whitesmoke: "f5f5f5",
                yellow: "ffff00",
                yellowgreen: "9acd32"
            };
            color_string = simple_colors[color_string] || color_string;
            var color_defs = [ {
                re: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*((?:\d?\.)?\d)\)$/,
                example: [ "rgba(123, 234, 45, 0.8)", "rgba(255,234,245,1.0)" ],
                process: function(bits) {
                    return [ parseInt(bits[1]), parseInt(bits[2]), parseInt(bits[3]), parseFloat(bits[4]) ];
                }
            }, {
                re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
                example: [ "rgb(123, 234, 45)", "rgb(255,234,245)" ],
                process: function(bits) {
                    return [ parseInt(bits[1]), parseInt(bits[2]), parseInt(bits[3]) ];
                }
            }, {
                re: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
                example: [ "#00ff00", "336699" ],
                process: function(bits) {
                    return [ parseInt(bits[1], 16), parseInt(bits[2], 16), parseInt(bits[3], 16) ];
                }
            }, {
                re: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                example: [ "#fb0", "f0f" ],
                process: function(bits) {
                    return [ parseInt(bits[1] + bits[1], 16), parseInt(bits[2] + bits[2], 16), parseInt(bits[3] + bits[3], 16) ];
                }
            } ];
            for (var i = 0; i < color_defs.length; i++) {
                var re = color_defs[i].re;
                var processor = color_defs[i].process;
                var bits = re.exec(color_string);
                if (bits) {
                    var channels = processor(bits);
                    this.r = channels[0];
                    this.g = channels[1];
                    this.b = channels[2];
                    if (channels.length > 3) this.alpha = channels[3];
                    this.ok = true;
                }
            }
            this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r;
            this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g;
            this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b;
            this.alpha = this.alpha < 0 ? 0 : this.alpha > 1 || isNaN(this.alpha) ? 1 : this.alpha;
            this.toRGB = function() {
                return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
            };
            this.toRGBA = function() {
                return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.alpha + ")";
            };
            this.toHex = function() {
                var r = this.r.toString(16);
                var g = this.g.toString(16);
                var b = this.b.toString(16);
                if (r.length == 1) r = "0" + r;
                if (g.length == 1) g = "0" + g;
                if (b.length == 1) b = "0" + b;
                return "#" + r + g + b;
            };
            this.getHelpXML = function() {
                var examples = new Array;
                for (var i = 0; i < color_defs.length; i++) {
                    var example = color_defs[i].example;
                    for (var j = 0; j < example.length; j++) examples[examples.length] = example[j];
                }
                for (var sc in simple_colors) examples[examples.length] = sc;
                var xml = document.createElement("ul");
                xml.setAttribute("id", "rgbcolor-examples");
                for (i = 0; i < examples.length; i++) try {
                    var list_item = document.createElement("li");
                    var list_color = new RGBColor(examples[i]);
                    var example_div = document.createElement("div");
                    example_div.style.cssText = "margin: 3px; " + "border: 1px solid black; " + "background:" + list_color.toHex() + "; " + "color:" + list_color.toHex();
                    example_div.appendChild(document.createTextNode("test"));
                    var list_item_value = document.createTextNode(" " + examples[i] + " -> " + list_color.toRGB() + " -> " + list_color.toHex());
                    list_item.appendChild(example_div);
                    list_item.appendChild(list_item_value);
                    xml.appendChild(list_item);
                } catch (e) {}
                return xml;
            };
        };
    },
    6547: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var isCallable = __webpack_require__(6214);
        var tryToString = __webpack_require__(3460);
        var $TypeError = TypeError;
        module.exports = function(argument) {
            if (isCallable(argument)) return argument;
            throw new $TypeError(tryToString(argument) + " is not a function");
        };
    },
    8679: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var isConstructor = __webpack_require__(4512);
        var tryToString = __webpack_require__(3460);
        var $TypeError = TypeError;
        module.exports = function(argument) {
            if (isConstructor(argument)) return argument;
            throw new $TypeError(tryToString(argument) + " is not a constructor");
        };
    },
    935: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var isPossiblePrototype = __webpack_require__(150);
        var $String = String;
        var $TypeError = TypeError;
        module.exports = function(argument) {
            if (isPossiblePrototype(argument)) return argument;
            throw new $TypeError("Can't set " + $String(argument) + " as a prototype");
        };
    },
    4080: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var wellKnownSymbol = __webpack_require__(8292);
        var create = __webpack_require__(7847);
        var defineProperty = __webpack_require__(7696).f;
        var UNSCOPABLES = wellKnownSymbol("unscopables");
        var ArrayPrototype = Array.prototype;
        if (ArrayPrototype[UNSCOPABLES] === void 0) defineProperty(ArrayPrototype, UNSCOPABLES, {
            configurable: true,
            value: create(null)
        });
        module.exports = function(key) {
            ArrayPrototype[UNSCOPABLES][key] = true;
        };
    },
    5428: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var charAt = __webpack_require__(650).charAt;
        module.exports = function(S, index, unicode) {
            return index + (unicode ? charAt(S, index).length : 1);
        };
    },
    6784: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var isPrototypeOf = __webpack_require__(1180);
        var $TypeError = TypeError;
        module.exports = function(it, Prototype) {
            if (isPrototypeOf(Prototype, it)) return it;
            throw new $TypeError("Incorrect invocation");
        };
    },
    6092: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var isObject = __webpack_require__(8785);
        var $String = String;
        var $TypeError = TypeError;
        module.exports = function(argument) {
            if (isObject(argument)) return argument;
            throw new $TypeError($String(argument) + " is not an object");
        };
    },
    7408: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var toIndexedObject = __webpack_require__(9538);
        var toAbsoluteIndex = __webpack_require__(5429);
        var lengthOfArrayLike = __webpack_require__(1083);
        var createMethod = function(IS_INCLUDES) {
            return function($this, el, fromIndex) {
                var O = toIndexedObject($this);
                var length = lengthOfArrayLike(O);
                if (length === 0) return !IS_INCLUDES && -1;
                var index = toAbsoluteIndex(fromIndex, length);
                var value;
                if (IS_INCLUDES && el !== el) while (length > index) {
                    value = O[index++];
                    if (value !== value) return true;
                } else for (;length > index; index++) if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
                return !IS_INCLUDES && -1;
            };
        };
        module.exports = {
            includes: createMethod(true),
            indexOf: createMethod(false)
        };
    },
    8307: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var fails = __webpack_require__(5536);
        module.exports = function(METHOD_NAME, argument) {
            var method = [][METHOD_NAME];
            return !!method && fails((function() {
                method.call(null, argument || function() {
                    return 1;
                }, 1);
            }));
        };
    },
    9031: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var aCallable = __webpack_require__(6547);
        var toObject = __webpack_require__(1622);
        var IndexedObject = __webpack_require__(5254);
        var lengthOfArrayLike = __webpack_require__(1083);
        var $TypeError = TypeError;
        var REDUCE_EMPTY = "Reduce of empty array with no initial value";
        var createMethod = function(IS_RIGHT) {
            return function(that, callbackfn, argumentsLength, memo) {
                var O = toObject(that);
                var self = IndexedObject(O);
                var length = lengthOfArrayLike(O);
                aCallable(callbackfn);
                if (length === 0 && argumentsLength < 2) throw new $TypeError(REDUCE_EMPTY);
                var index = IS_RIGHT ? length - 1 : 0;
                var i = IS_RIGHT ? -1 : 1;
                if (argumentsLength < 2) while (true) {
                    if (index in self) {
                        memo = self[index];
                        index += i;
                        break;
                    }
                    index += i;
                    if (IS_RIGHT ? index < 0 : length <= index) throw new $TypeError(REDUCE_EMPTY);
                }
                for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) memo = callbackfn(memo, self[index], index, O);
                return memo;
            };
        };
        module.exports = {
            left: createMethod(false),
            right: createMethod(true)
        };
    },
    7519: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var uncurryThis = __webpack_require__(8407);
        module.exports = uncurryThis([].slice);
    },
    7301: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var wellKnownSymbol = __webpack_require__(8292);
        var ITERATOR = wellKnownSymbol("iterator");
        var SAFE_CLOSING = false;
        try {
            var called = 0;
            var iteratorWithReturn = {
                next: function() {
                    return {
                        done: !!called++
                    };
                },
                return: function() {
                    SAFE_CLOSING = true;
                }
            };
            iteratorWithReturn[ITERATOR] = function() {
                return this;
            };
            Array.from(iteratorWithReturn, (function() {
                throw 2;
            }));
        } catch (error) {}
        module.exports = function(exec, SKIP_CLOSING) {
            try {
                if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
            } catch (error) {
                return false;
            }
            var ITERATION_SUPPORT = false;
            try {
                var object = {};
                object[ITERATOR] = function() {
                    return {
                        next: function() {
                            return {
                                done: ITERATION_SUPPORT = true
                            };
                        }
                    };
                };
                exec(object);
            } catch (error) {}
            return ITERATION_SUPPORT;
        };
    },
    9547: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var uncurryThis = __webpack_require__(8407);
        var toString = uncurryThis({}.toString);
        var stringSlice = uncurryThis("".slice);
        module.exports = function(it) {
            return stringSlice(toString(it), 8, -1);
        };
    },
    5736: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var TO_STRING_TAG_SUPPORT = __webpack_require__(4363);
        var isCallable = __webpack_require__(6214);
        var classofRaw = __webpack_require__(9547);
        var wellKnownSymbol = __webpack_require__(8292);
        var TO_STRING_TAG = wellKnownSymbol("toStringTag");
        var $Object = Object;
        var CORRECT_ARGUMENTS = classofRaw(function() {
            return arguments;
        }()) === "Arguments";
        var tryGet = function(it, key) {
            try {
                return it[key];
            } catch (error) {}
        };
        module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
            var O, tag, result;
            return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) === "Object" && isCallable(O.callee) ? "Arguments" : result;
        };
    },
    951: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var hasOwn = __webpack_require__(1960);
        var ownKeys = __webpack_require__(1206);
        var getOwnPropertyDescriptorModule = __webpack_require__(290);
        var definePropertyModule = __webpack_require__(7696);
        module.exports = function(target, source, exceptions) {
            var keys = ownKeys(source);
            var defineProperty = definePropertyModule.f;
            var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
            }
        };
    },
    1979: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var wellKnownSymbol = __webpack_require__(8292);
        var MATCH = wellKnownSymbol("match");
        module.exports = function(METHOD_NAME) {
            var regexp = /./;
            try {
                "/./"[METHOD_NAME](regexp);
            } catch (error1) {
                try {
                    regexp[MATCH] = false;
                    return "/./"[METHOD_NAME](regexp);
                } catch (error2) {}
            }
            return false;
        };
    },
    1658: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var fails = __webpack_require__(5536);
        module.exports = !fails((function() {
            function F() {}
            F.prototype.constructor = null;
            return Object.getPrototypeOf(new F) !== F.prototype;
        }));
    },
    4186: module => {
        "use strict";
        module.exports = function(value, done) {
            return {
                value,
                done
            };
        };
    },
    6590: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var DESCRIPTORS = __webpack_require__(5515);
        var definePropertyModule = __webpack_require__(7696);
        var createPropertyDescriptor = __webpack_require__(1285);
        module.exports = DESCRIPTORS ? function(object, key, value) {
            return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
        } : function(object, key, value) {
            object[key] = value;
            return object;
        };
    },
    1285: module => {
        "use strict";
        module.exports = function(bitmap, value) {
            return {
                enumerable: !(bitmap & 1),
                configurable: !(bitmap & 2),
                writable: !(bitmap & 4),
                value
            };
        };
    },
    7615: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var makeBuiltIn = __webpack_require__(7660);
        var defineProperty = __webpack_require__(7696);
        module.exports = function(target, name, descriptor) {
            if (descriptor.get) makeBuiltIn(descriptor.get, name, {
                getter: true
            });
            if (descriptor.set) makeBuiltIn(descriptor.set, name, {
                setter: true
            });
            return defineProperty.f(target, name, descriptor);
        };
    },
    6403: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var isCallable = __webpack_require__(6214);
        var definePropertyModule = __webpack_require__(7696);
        var makeBuiltIn = __webpack_require__(7660);
        var defineGlobalProperty = __webpack_require__(928);
        module.exports = function(O, key, value, options) {
            if (!options) options = {};
            var simple = options.enumerable;
            var name = options.name !== void 0 ? options.name : key;
            if (isCallable(value)) makeBuiltIn(value, name, options);
            if (options.global) if (simple) O[key] = value; else defineGlobalProperty(key, value); else {
                try {
                    if (!options.unsafe) delete O[key]; else if (O[key]) simple = true;
                } catch (error) {}
                if (simple) O[key] = value; else definePropertyModule.f(O, key, {
                    value,
                    enumerable: false,
                    configurable: !options.nonConfigurable,
                    writable: !options.nonWritable
                });
            }
            return O;
        };
    },
    928: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var global = __webpack_require__(6750);
        var defineProperty = Object.defineProperty;
        module.exports = function(key, value) {
            try {
                defineProperty(global, key, {
                    value,
                    configurable: true,
                    writable: true
                });
            } catch (error) {
                global[key] = value;
            }
            return value;
        };
    },
    5515: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var fails = __webpack_require__(5536);
        module.exports = !fails((function() {
            return Object.defineProperty({}, 1, {
                get: function() {
                    return 7;
                }
            })[1] !== 7;
        }));
    },
    9820: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var global = __webpack_require__(6750);
        var isObject = __webpack_require__(8785);
        var document = global.document;
        var EXISTS = isObject(document) && isObject(document.createElement);
        module.exports = function(it) {
            return EXISTS ? document.createElement(it) : {};
        };
    },
    8379: module => {
        "use strict";
        module.exports = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
        };
    },
    337: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var documentCreateElement = __webpack_require__(9820);
        var classList = documentCreateElement("span").classList;
        var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;
        module.exports = DOMTokenListPrototype === Object.prototype ? void 0 : DOMTokenListPrototype;
    },
    7841: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var IS_DENO = __webpack_require__(3757);
        var IS_NODE = __webpack_require__(7097);
        module.exports = !IS_DENO && !IS_NODE && typeof window == "object" && typeof document == "object";
    },
    3757: module => {
        "use strict";
        module.exports = typeof Deno == "object" && Deno && typeof Deno.version == "object";
    },
    1153: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var userAgent = __webpack_require__(5215);
        module.exports = /ipad|iphone|ipod/i.test(userAgent) && typeof Pebble != "undefined";
    },
    8016: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var userAgent = __webpack_require__(5215);
        module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);
    },
    7097: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var global = __webpack_require__(6750);
        var classof = __webpack_require__(9547);
        module.exports = classof(global.process) === "process";
    },
    8428: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var userAgent = __webpack_require__(5215);
        module.exports = /web0s(?!.*chrome)/i.test(userAgent);
    },
    5215: module => {
        "use strict";
        module.exports = typeof navigator != "undefined" && String(navigator.userAgent) || "";
    },
    695: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var global = __webpack_require__(6750);
        var userAgent = __webpack_require__(5215);
        var process = global.process;
        var Deno = global.Deno;
        var versions = process && process.versions || Deno && Deno.version;
        var v8 = versions && versions.v8;
        var match, version;
        if (v8) {
            match = v8.split(".");
            version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
        }
        if (!version && userAgent) {
            match = userAgent.match(/Edge\/(\d+)/);
            if (!match || match[1] >= 74) {
                match = userAgent.match(/Chrome\/(\d+)/);
                if (match) version = +match[1];
            }
        }
        module.exports = version;
    },
    324: module => {
        "use strict";
        module.exports = [ "constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf" ];
    },
    2679: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var global = __webpack_require__(6750);
        var getOwnPropertyDescriptor = __webpack_require__(290).f;
        var createNonEnumerableProperty = __webpack_require__(6590);
        var defineBuiltIn = __webpack_require__(6403);
        var defineGlobalProperty = __webpack_require__(928);
        var copyConstructorProperties = __webpack_require__(951);
        var isForced = __webpack_require__(2131);
        module.exports = function(options, source) {
            var TARGET = options.target;
            var GLOBAL = options.global;
            var STATIC = options.stat;
            var FORCED, target, key, targetProperty, sourceProperty, descriptor;
            if (GLOBAL) target = global; else if (STATIC) target = global[TARGET] || defineGlobalProperty(TARGET, {}); else target = global[TARGET] && global[TARGET].prototype;
            if (target) for (key in source) {
                sourceProperty = source[key];
                if (options.dontCallGetSet) {
                    descriptor = getOwnPropertyDescriptor(target, key);
                    targetProperty = descriptor && descriptor.value;
                } else targetProperty = target[key];
                FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
                if (!FORCED && targetProperty !== void 0) {
                    if (typeof sourceProperty == typeof targetProperty) continue;
                    copyConstructorProperties(sourceProperty, targetProperty);
                }
                if (options.sham || targetProperty && targetProperty.sham) createNonEnumerableProperty(sourceProperty, "sham", true);
                defineBuiltIn(target, key, sourceProperty, options);
            }
        };
    },
    5536: module => {
        "use strict";
        module.exports = function(exec) {
            try {
                return !!exec();
            } catch (error) {
                return true;
            }
        };
    },
    6641: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__(6954);
        var call = __webpack_require__(5798);
        var defineBuiltIn = __webpack_require__(6403);
        var regexpExec = __webpack_require__(4664);
        var fails = __webpack_require__(5536);
        var wellKnownSymbol = __webpack_require__(8292);
        var createNonEnumerableProperty = __webpack_require__(6590);
        var SPECIES = wellKnownSymbol("species");
        var RegExpPrototype = RegExp.prototype;
        module.exports = function(KEY, exec, FORCED, SHAM) {
            var SYMBOL = wellKnownSymbol(KEY);
            var DELEGATES_TO_SYMBOL = !fails((function() {
                var O = {};
                O[SYMBOL] = function() {
                    return 7;
                };
                return ""[KEY](O) !== 7;
            }));
            var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails((function() {
                var execCalled = false;
                var re = /a/;
                if (KEY === "split") {
                    re = {};
                    re.constructor = {};
                    re.constructor[SPECIES] = function() {
                        return re;
                    };
                    re.flags = "";
                    re[SYMBOL] = /./[SYMBOL];
                }
                re.exec = function() {
                    execCalled = true;
                    return null;
                };
                re[SYMBOL]("");
                return !execCalled;
            }));
            if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || FORCED) {
                var nativeRegExpMethod = /./[SYMBOL];
                var methods = exec(SYMBOL, ""[KEY], (function(nativeMethod, regexp, str, arg2, forceStringMethod) {
                    var $exec = regexp.exec;
                    if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
                        if (DELEGATES_TO_SYMBOL && !forceStringMethod) return {
                            done: true,
                            value: call(nativeRegExpMethod, regexp, str, arg2)
                        };
                        return {
                            done: true,
                            value: call(nativeMethod, str, regexp, arg2)
                        };
                    }
                    return {
                        done: false
                    };
                }));
                defineBuiltIn(String.prototype, KEY, methods[0]);
                defineBuiltIn(RegExpPrototype, SYMBOL, methods[1]);
            }
            if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], "sham", true);
        };
    },
    9524: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var NATIVE_BIND = __webpack_require__(509);
        var FunctionPrototype = Function.prototype;
        var apply = FunctionPrototype.apply;
        var call = FunctionPrototype.call;
        module.exports = typeof Reflect == "object" && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function() {
            return call.apply(apply, arguments);
        });
    },
    1571: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var uncurryThis = __webpack_require__(5013);
        var aCallable = __webpack_require__(6547);
        var NATIVE_BIND = __webpack_require__(509);
        var bind = uncurryThis(uncurryThis.bind);
        module.exports = function(fn, that) {
            aCallable(fn);
            return that === void 0 ? fn : NATIVE_BIND ? bind(fn, that) : function() {
                return fn.apply(that, arguments);
            };
        };
    },
    509: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var fails = __webpack_require__(5536);
        module.exports = !fails((function() {
            var test = function() {}.bind();
            return typeof test != "function" || test.hasOwnProperty("prototype");
        }));
    },
    5798: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var NATIVE_BIND = __webpack_require__(509);
        var call = Function.prototype.call;
        module.exports = NATIVE_BIND ? call.bind(call) : function() {
            return call.apply(call, arguments);
        };
    },
    5573: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var DESCRIPTORS = __webpack_require__(5515);
        var hasOwn = __webpack_require__(1960);
        var FunctionPrototype = Function.prototype;
        var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
        var EXISTS = hasOwn(FunctionPrototype, "name");
        var PROPER = EXISTS && function something() {}.name === "something";
        var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
        module.exports = {
            EXISTS,
            PROPER,
            CONFIGURABLE
        };
    },
    1699: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var uncurryThis = __webpack_require__(8407);
        var aCallable = __webpack_require__(6547);
        module.exports = function(object, key, method) {
            try {
                return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
            } catch (error) {}
        };
    },
    5013: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var classofRaw = __webpack_require__(9547);
        var uncurryThis = __webpack_require__(8407);
        module.exports = function(fn) {
            if (classofRaw(fn) === "Function") return uncurryThis(fn);
        };
    },
    8407: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var NATIVE_BIND = __webpack_require__(509);
        var FunctionPrototype = Function.prototype;
        var call = FunctionPrototype.call;
        var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
        module.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
            return function() {
                return call.apply(fn, arguments);
            };
        };
    },
    6578: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var global = __webpack_require__(6750);
        var isCallable = __webpack_require__(6214);
        var aFunction = function(argument) {
            return isCallable(argument) ? argument : void 0;
        };
        module.exports = function(namespace, method) {
            return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
        };
    },
    3532: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var classof = __webpack_require__(5736);
        var getMethod = __webpack_require__(7851);
        var isNullOrUndefined = __webpack_require__(2412);
        var Iterators = __webpack_require__(786);
        var wellKnownSymbol = __webpack_require__(8292);
        var ITERATOR = wellKnownSymbol("iterator");
        module.exports = function(it) {
            if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR) || getMethod(it, "@@iterator") || Iterators[classof(it)];
        };
    },
    6904: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var call = __webpack_require__(5798);
        var aCallable = __webpack_require__(6547);
        var anObject = __webpack_require__(6092);
        var tryToString = __webpack_require__(3460);
        var getIteratorMethod = __webpack_require__(3532);
        var $TypeError = TypeError;
        module.exports = function(argument, usingIterator) {
            var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
            if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
            throw new $TypeError(tryToString(argument) + " is not iterable");
        };
    },
    7851: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var aCallable = __webpack_require__(6547);
        var isNullOrUndefined = __webpack_require__(2412);
        module.exports = function(V, P) {
            var func = V[P];
            return isNullOrUndefined(func) ? void 0 : aCallable(func);
        };
    },
    9083: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var uncurryThis = __webpack_require__(8407);
        var toObject = __webpack_require__(1622);
        var floor = Math.floor;
        var charAt = uncurryThis("".charAt);
        var replace = uncurryThis("".replace);
        var stringSlice = uncurryThis("".slice);
        var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
        var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;
        module.exports = function(matched, str, position, captures, namedCaptures, replacement) {
            var tailPos = position + matched.length;
            var m = captures.length;
            var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
            if (namedCaptures !== void 0) {
                namedCaptures = toObject(namedCaptures);
                symbols = SUBSTITUTION_SYMBOLS;
            }
            return replace(replacement, symbols, (function(match, ch) {
                var capture;
                switch (charAt(ch, 0)) {
                  case "$":
                    return "$";

                  case "&":
                    return matched;

                  case "`":
                    return stringSlice(str, 0, position);

                  case "'":
                    return stringSlice(str, tailPos);

                  case "<":
                    capture = namedCaptures[stringSlice(ch, 1, -1)];
                    break;

                  default:
                    var n = +ch;
                    if (n === 0) return match;
                    if (n > m) {
                        var f = floor(n / 10);
                        if (f === 0) return match;
                        if (f <= m) return captures[f - 1] === void 0 ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
                        return match;
                    }
                    capture = captures[n - 1];
                }
                return capture === void 0 ? "" : capture;
            }));
        };
    },
    6750: function(module, __unused_webpack_exports, __webpack_require__) {
        "use strict";
        var check = function(it) {
            return it && it.Math === Math && it;
        };
        module.exports = check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || check(typeof self == "object" && self) || check(typeof __webpack_require__.g == "object" && __webpack_require__.g) || check(typeof this == "object" && this) || function() {
            return this;
        }() || Function("return this")();
    },
    1960: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var uncurryThis = __webpack_require__(8407);
        var toObject = __webpack_require__(1622);
        var hasOwnProperty = uncurryThis({}.hasOwnProperty);
        module.exports = Object.hasOwn || function hasOwn(it, key) {
            return hasOwnProperty(toObject(it), key);
        };
    },
    838: module => {
        "use strict";
        module.exports = {};
    },
    1956: module => {
        "use strict";
        module.exports = function(a, b) {
            try {
                arguments.length === 1 ? console.error(a) : console.error(a, b);
            } catch (error) {}
        };
    },
    3940: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var getBuiltIn = __webpack_require__(6578);
        module.exports = getBuiltIn("document", "documentElement");
    },
    6500: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var DESCRIPTORS = __webpack_require__(5515);
        var fails = __webpack_require__(5536);
        var createElement = __webpack_require__(9820);
        module.exports = !DESCRIPTORS && !fails((function() {
            return Object.defineProperty(createElement("div"), "a", {
                get: function() {
                    return 7;
                }
            }).a !== 7;
        }));
    },
    5254: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var uncurryThis = __webpack_require__(8407);
        var fails = __webpack_require__(5536);
        var classof = __webpack_require__(9547);
        var $Object = Object;
        var split = uncurryThis("".split);
        module.exports = fails((function() {
            return !$Object("z").propertyIsEnumerable(0);
        })) ? function(it) {
            return classof(it) === "String" ? split(it, "") : $Object(it);
        } : $Object;
    },
    3067: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var uncurryThis = __webpack_require__(8407);
        var isCallable = __webpack_require__(6214);
        var store = __webpack_require__(140);
        var functionToString = uncurryThis(Function.toString);
        if (!isCallable(store.inspectSource)) store.inspectSource = function(it) {
            return functionToString(it);
        };
        module.exports = store.inspectSource;
    },
    9192: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var NATIVE_WEAK_MAP = __webpack_require__(91);
        var global = __webpack_require__(6750);
        var isObject = __webpack_require__(8785);
        var createNonEnumerableProperty = __webpack_require__(6590);
        var hasOwn = __webpack_require__(1960);
        var shared = __webpack_require__(140);
        var sharedKey = __webpack_require__(8806);
        var hiddenKeys = __webpack_require__(838);
        var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
        var TypeError = global.TypeError;
        var WeakMap = global.WeakMap;
        var set, get, has;
        var enforce = function(it) {
            return has(it) ? get(it) : set(it, {});
        };
        var getterFor = function(TYPE) {
            return function(it) {
                var state;
                if (!isObject(it) || (state = get(it)).type !== TYPE) throw new TypeError("Incompatible receiver, " + TYPE + " required");
                return state;
            };
        };
        if (NATIVE_WEAK_MAP || shared.state) {
            var store = shared.state || (shared.state = new WeakMap);
            store.get = store.get;
            store.has = store.has;
            store.set = store.set;
            set = function(it, metadata) {
                if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
                metadata.facade = it;
                store.set(it, metadata);
                return metadata;
            };
            get = function(it) {
                return store.get(it) || {};
            };
            has = function(it) {
                return store.has(it);
            };
        } else {
            var STATE = sharedKey("state");
            hiddenKeys[STATE] = true;
            set = function(it, metadata) {
                if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
                metadata.facade = it;
                createNonEnumerableProperty(it, STATE, metadata);
                return metadata;
            };
            get = function(it) {
                return hasOwn(it, STATE) ? it[STATE] : {};
            };
            has = function(it) {
                return hasOwn(it, STATE);
            };
        }
        module.exports = {
            set,
            get,
            has,
            enforce,
            getterFor
        };
    },
    1200: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var wellKnownSymbol = __webpack_require__(8292);
        var Iterators = __webpack_require__(786);
        var ITERATOR = wellKnownSymbol("iterator");
        var ArrayPrototype = Array.prototype;
        module.exports = function(it) {
            return it !== void 0 && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
        };
    },
    4901: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var classof = __webpack_require__(9547);
        module.exports = Array.isArray || function isArray(argument) {
            return classof(argument) === "Array";
        };
    },
    6214: module => {
        "use strict";
        var documentAll = typeof document == "object" && document.all;
        module.exports = typeof documentAll == "undefined" && documentAll !== void 0 ? function(argument) {
            return typeof argument == "function" || argument === documentAll;
        } : function(argument) {
            return typeof argument == "function";
        };
    },
    4512: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var uncurryThis = __webpack_require__(8407);
        var fails = __webpack_require__(5536);
        var isCallable = __webpack_require__(6214);
        var classof = __webpack_require__(5736);
        var getBuiltIn = __webpack_require__(6578);
        var inspectSource = __webpack_require__(3067);
        var noop = function() {};
        var construct = getBuiltIn("Reflect", "construct");
        var constructorRegExp = /^\s*(?:class|function)\b/;
        var exec = uncurryThis(constructorRegExp.exec);
        var INCORRECT_TO_STRING = !constructorRegExp.test(noop);
        var isConstructorModern = function isConstructor(argument) {
            if (!isCallable(argument)) return false;
            try {
                construct(noop, [], argument);
                return true;
            } catch (error) {
                return false;
            }
        };
        var isConstructorLegacy = function isConstructor(argument) {
            if (!isCallable(argument)) return false;
            switch (classof(argument)) {
              case "AsyncFunction":
              case "GeneratorFunction":
              case "AsyncGeneratorFunction":
                return false;
            }
            try {
                return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
            } catch (error) {
                return true;
            }
        };
        isConstructorLegacy.sham = true;
        module.exports = !construct || fails((function() {
            var called;
            return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern((function() {
                called = true;
            })) || called;
        })) ? isConstructorLegacy : isConstructorModern;
    },
    2131: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var fails = __webpack_require__(5536);
        var isCallable = __webpack_require__(6214);
        var replacement = /#|\.prototype\./;
        var isForced = function(feature, detection) {
            var value = data[normalize(feature)];
            return value === POLYFILL ? true : value === NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
        };
        var normalize = isForced.normalize = function(string) {
            return String(string).replace(replacement, ".").toLowerCase();
        };
        var data = isForced.data = {};
        var NATIVE = isForced.NATIVE = "N";
        var POLYFILL = isForced.POLYFILL = "P";
        module.exports = isForced;
    },
    2412: module => {
        "use strict";
        module.exports = function(it) {
            return it === null || it === void 0;
        };
    },
    8785: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var isCallable = __webpack_require__(6214);
        module.exports = function(it) {
            return typeof it == "object" ? it !== null : isCallable(it);
        };
    },
    150: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var isObject = __webpack_require__(8785);
        module.exports = function(argument) {
            return isObject(argument) || argument === null;
        };
    },
    572: module => {
        "use strict";
        module.exports = false;
    },
    3035: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var isObject = __webpack_require__(8785);
        var classof = __webpack_require__(9547);
        var wellKnownSymbol = __webpack_require__(8292);
        var MATCH = wellKnownSymbol("match");
        module.exports = function(it) {
            var isRegExp;
            return isObject(it) && ((isRegExp = it[MATCH]) !== void 0 ? !!isRegExp : classof(it) === "RegExp");
        };
    },
    4062: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var getBuiltIn = __webpack_require__(6578);
        var isCallable = __webpack_require__(6214);
        var isPrototypeOf = __webpack_require__(1180);
        var USE_SYMBOL_AS_UID = __webpack_require__(6939);
        var $Object = Object;
        module.exports = USE_SYMBOL_AS_UID ? function(it) {
            return typeof it == "symbol";
        } : function(it) {
            var $Symbol = getBuiltIn("Symbol");
            return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
        };
    },
    2283: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var bind = __webpack_require__(1571);
        var call = __webpack_require__(5798);
        var anObject = __webpack_require__(6092);
        var tryToString = __webpack_require__(3460);
        var isArrayIteratorMethod = __webpack_require__(1200);
        var lengthOfArrayLike = __webpack_require__(1083);
        var isPrototypeOf = __webpack_require__(1180);
        var getIterator = __webpack_require__(6904);
        var getIteratorMethod = __webpack_require__(3532);
        var iteratorClose = __webpack_require__(5558);
        var $TypeError = TypeError;
        var Result = function(stopped, result) {
            this.stopped = stopped;
            this.result = result;
        };
        var ResultPrototype = Result.prototype;
        module.exports = function(iterable, unboundFunction, options) {
            var that = options && options.that;
            var AS_ENTRIES = !!(options && options.AS_ENTRIES);
            var IS_RECORD = !!(options && options.IS_RECORD);
            var IS_ITERATOR = !!(options && options.IS_ITERATOR);
            var INTERRUPTED = !!(options && options.INTERRUPTED);
            var fn = bind(unboundFunction, that);
            var iterator, iterFn, index, length, result, next, step;
            var stop = function(condition) {
                if (iterator) iteratorClose(iterator, "normal", condition);
                return new Result(true, condition);
            };
            var callFn = function(value) {
                if (AS_ENTRIES) {
                    anObject(value);
                    return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
                }
                return INTERRUPTED ? fn(value, stop) : fn(value);
            };
            if (IS_RECORD) iterator = iterable.iterator; else if (IS_ITERATOR) iterator = iterable; else {
                iterFn = getIteratorMethod(iterable);
                if (!iterFn) throw new $TypeError(tryToString(iterable) + " is not iterable");
                if (isArrayIteratorMethod(iterFn)) {
                    for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
                        result = callFn(iterable[index]);
                        if (result && isPrototypeOf(ResultPrototype, result)) return result;
                    }
                    return new Result(false);
                }
                iterator = getIterator(iterable, iterFn);
            }
            next = IS_RECORD ? iterable.next : iterator.next;
            while (!(step = call(next, iterator)).done) {
                try {
                    result = callFn(step.value);
                } catch (error) {
                    iteratorClose(iterator, "throw", error);
                }
                if (typeof result == "object" && result && isPrototypeOf(ResultPrototype, result)) return result;
            }
            return new Result(false);
        };
    },
    5558: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var call = __webpack_require__(5798);
        var anObject = __webpack_require__(6092);
        var getMethod = __webpack_require__(7851);
        module.exports = function(iterator, kind, value) {
            var innerResult, innerError;
            anObject(iterator);
            try {
                innerResult = getMethod(iterator, "return");
                if (!innerResult) {
                    if (kind === "throw") throw value;
                    return value;
                }
                innerResult = call(innerResult, iterator);
            } catch (error) {
                innerError = true;
                innerResult = error;
            }
            if (kind === "throw") throw value;
            if (innerError) throw innerResult;
            anObject(innerResult);
            return value;
        };
    },
    137: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var IteratorPrototype = __webpack_require__(4112).IteratorPrototype;
        var create = __webpack_require__(7847);
        var createPropertyDescriptor = __webpack_require__(1285);
        var setToStringTag = __webpack_require__(5996);
        var Iterators = __webpack_require__(786);
        var returnThis = function() {
            return this;
        };
        module.exports = function(IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
            var TO_STRING_TAG = NAME + " Iterator";
            IteratorConstructor.prototype = create(IteratorPrototype, {
                next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next)
            });
            setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
            Iterators[TO_STRING_TAG] = returnThis;
            return IteratorConstructor;
        };
    },
    459: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var $ = __webpack_require__(2679);
        var call = __webpack_require__(5798);
        var IS_PURE = __webpack_require__(572);
        var FunctionName = __webpack_require__(5573);
        var isCallable = __webpack_require__(6214);
        var createIteratorConstructor = __webpack_require__(137);
        var getPrototypeOf = __webpack_require__(3336);
        var setPrototypeOf = __webpack_require__(116);
        var setToStringTag = __webpack_require__(5996);
        var createNonEnumerableProperty = __webpack_require__(6590);
        var defineBuiltIn = __webpack_require__(6403);
        var wellKnownSymbol = __webpack_require__(8292);
        var Iterators = __webpack_require__(786);
        var IteratorsCore = __webpack_require__(4112);
        var PROPER_FUNCTION_NAME = FunctionName.PROPER;
        var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
        var IteratorPrototype = IteratorsCore.IteratorPrototype;
        var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
        var ITERATOR = wellKnownSymbol("iterator");
        var KEYS = "keys";
        var VALUES = "values";
        var ENTRIES = "entries";
        var returnThis = function() {
            return this;
        };
        module.exports = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
            createIteratorConstructor(IteratorConstructor, NAME, next);
            var getIterationMethod = function(KIND) {
                if (KIND === DEFAULT && defaultIterator) return defaultIterator;
                if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype) return IterablePrototype[KIND];
                switch (KIND) {
                  case KEYS:
                    return function keys() {
                        return new IteratorConstructor(this, KIND);
                    };

                  case VALUES:
                    return function values() {
                        return new IteratorConstructor(this, KIND);
                    };

                  case ENTRIES:
                    return function entries() {
                        return new IteratorConstructor(this, KIND);
                    };
                }
                return function() {
                    return new IteratorConstructor(this);
                };
            };
            var TO_STRING_TAG = NAME + " Iterator";
            var INCORRECT_VALUES_NAME = false;
            var IterablePrototype = Iterable.prototype;
            var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype["@@iterator"] || DEFAULT && IterablePrototype[DEFAULT];
            var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
            var anyNativeIterator = NAME === "Array" ? IterablePrototype.entries || nativeIterator : nativeIterator;
            var CurrentIteratorPrototype, methods, KEY;
            if (anyNativeIterator) {
                CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable));
                if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
                    if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) if (setPrototypeOf) setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype); else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);
                    setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
                    if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
                }
            }
            if (PROPER_FUNCTION_NAME && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) createNonEnumerableProperty(IterablePrototype, "name", VALUES); else {
                INCORRECT_VALUES_NAME = true;
                defaultIterator = function values() {
                    return call(nativeIterator, this);
                };
            }
            if (DEFAULT) {
                methods = {
                    values: getIterationMethod(VALUES),
                    keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
                    entries: getIterationMethod(ENTRIES)
                };
                if (FORCED) {
                    for (KEY in methods) if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
                } else $({
                    target: NAME,
                    proto: true,
                    forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
                }, methods);
            }
            if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, {
                name: DEFAULT
            });
            Iterators[NAME] = defaultIterator;
            return methods;
        };
    },
    4112: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var fails = __webpack_require__(5536);
        var isCallable = __webpack_require__(6214);
        var isObject = __webpack_require__(8785);
        var create = __webpack_require__(7847);
        var getPrototypeOf = __webpack_require__(3336);
        var defineBuiltIn = __webpack_require__(6403);
        var wellKnownSymbol = __webpack_require__(8292);
        var IS_PURE = __webpack_require__(572);
        var ITERATOR = wellKnownSymbol("iterator");
        var BUGGY_SAFARI_ITERATORS = false;
        var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;
        if ([].keys) {
            arrayIterator = [].keys();
            if (!("next" in arrayIterator)) BUGGY_SAFARI_ITERATORS = true; else {
                PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
                if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
            }
        }
        var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails((function() {
            var test = {};
            return IteratorPrototype[ITERATOR].call(test) !== test;
        }));
        if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {}; else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);
        if (!isCallable(IteratorPrototype[ITERATOR])) defineBuiltIn(IteratorPrototype, ITERATOR, (function() {
            return this;
        }));
        module.exports = {
            IteratorPrototype,
            BUGGY_SAFARI_ITERATORS
        };
    },
    786: module => {
        "use strict";
        module.exports = {};
    },
    1083: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var toLength = __webpack_require__(7925);
        module.exports = function(obj) {
            return toLength(obj.length);
        };
    },
    7660: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var uncurryThis = __webpack_require__(8407);
        var fails = __webpack_require__(5536);
        var isCallable = __webpack_require__(6214);
        var hasOwn = __webpack_require__(1960);
        var DESCRIPTORS = __webpack_require__(5515);
        var CONFIGURABLE_FUNCTION_NAME = __webpack_require__(5573).CONFIGURABLE;
        var inspectSource = __webpack_require__(3067);
        var InternalStateModule = __webpack_require__(9192);
        var enforceInternalState = InternalStateModule.enforce;
        var getInternalState = InternalStateModule.get;
        var $String = String;
        var defineProperty = Object.defineProperty;
        var stringSlice = uncurryThis("".slice);
        var replace = uncurryThis("".replace);
        var join = uncurryThis([].join);
        var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails((function() {
            return defineProperty((function() {}), "length", {
                value: 8
            }).length !== 8;
        }));
        var TEMPLATE = String(String).split("String");
        var makeBuiltIn = module.exports = function(value, name, options) {
            if (stringSlice($String(name), 0, 7) === "Symbol(") name = "[" + replace($String(name), /^Symbol\(([^)]*)\).*$/, "$1") + "]";
            if (options && options.getter) name = "get " + name;
            if (options && options.setter) name = "set " + name;
            if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) if (DESCRIPTORS) defineProperty(value, "name", {
                value: name,
                configurable: true
            }); else value.name = name;
            if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity) defineProperty(value, "length", {
                value: options.arity
            });
            try {
                if (options && hasOwn(options, "constructor") && options.constructor) {
                    if (DESCRIPTORS) defineProperty(value, "prototype", {
                        writable: false
                    });
                } else if (value.prototype) value.prototype = void 0;
            } catch (error) {}
            var state = enforceInternalState(value);
            if (!hasOwn(state, "source")) state.source = join(TEMPLATE, typeof name == "string" ? name : "");
            return value;
        };
        Function.prototype.toString = makeBuiltIn((function toString() {
            return isCallable(this) && getInternalState(this).source || inspectSource(this);
        }), "toString");
    },
    1652: module => {
        "use strict";
        var ceil = Math.ceil;
        var floor = Math.floor;
        module.exports = Math.trunc || function trunc(x) {
            var n = +x;
            return (n > 0 ? floor : ceil)(n);
        };
    },
    9440: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var global = __webpack_require__(6750);
        var safeGetBuiltIn = __webpack_require__(8166);
        var bind = __webpack_require__(1571);
        var macrotask = __webpack_require__(1316).set;
        var Queue = __webpack_require__(590);
        var IS_IOS = __webpack_require__(8016);
        var IS_IOS_PEBBLE = __webpack_require__(1153);
        var IS_WEBOS_WEBKIT = __webpack_require__(8428);
        var IS_NODE = __webpack_require__(7097);
        var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
        var document = global.document;
        var process = global.process;
        var Promise = global.Promise;
        var microtask = safeGetBuiltIn("queueMicrotask");
        var notify, toggle, node, promise, then;
        if (!microtask) {
            var queue = new Queue;
            var flush = function() {
                var parent, fn;
                if (IS_NODE && (parent = process.domain)) parent.exit();
                while (fn = queue.get()) try {
                    fn();
                } catch (error) {
                    if (queue.head) notify();
                    throw error;
                }
                if (parent) parent.enter();
            };
            if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
                toggle = true;
                node = document.createTextNode("");
                new MutationObserver(flush).observe(node, {
                    characterData: true
                });
                notify = function() {
                    node.data = toggle = !toggle;
                };
            } else if (!IS_IOS_PEBBLE && Promise && Promise.resolve) {
                promise = Promise.resolve(void 0);
                promise.constructor = Promise;
                then = bind(promise.then, promise);
                notify = function() {
                    then(flush);
                };
            } else if (IS_NODE) notify = function() {
                process.nextTick(flush);
            }; else {
                macrotask = bind(macrotask, global);
                notify = function() {
                    macrotask(flush);
                };
            }
            microtask = function(fn) {
                if (!queue.head) notify();
                queue.add(fn);
            };
        }
        module.exports = microtask;
    },
    8090: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var aCallable = __webpack_require__(6547);
        var $TypeError = TypeError;
        var PromiseCapability = function(C) {
            var resolve, reject;
            this.promise = new C((function($$resolve, $$reject) {
                if (resolve !== void 0 || reject !== void 0) throw new $TypeError("Bad Promise constructor");
                resolve = $$resolve;
                reject = $$reject;
            }));
            this.resolve = aCallable(resolve);
            this.reject = aCallable(reject);
        };
        module.exports.f = function(C) {
            return new PromiseCapability(C);
        };
    },
    6582: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var isRegExp = __webpack_require__(3035);
        var $TypeError = TypeError;
        module.exports = function(it) {
            if (isRegExp(it)) throw new $TypeError("The method doesn't accept regular expressions");
            return it;
        };
    },
    7847: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var anObject = __webpack_require__(6092);
        var definePropertiesModule = __webpack_require__(4776);
        var enumBugKeys = __webpack_require__(324);
        var hiddenKeys = __webpack_require__(838);
        var html = __webpack_require__(3940);
        var documentCreateElement = __webpack_require__(9820);
        var sharedKey = __webpack_require__(8806);
        var GT = ">";
        var LT = "<";
        var PROTOTYPE = "prototype";
        var SCRIPT = "script";
        var IE_PROTO = sharedKey("IE_PROTO");
        var EmptyConstructor = function() {};
        var scriptTag = function(content) {
            return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
        };
        var NullProtoObjectViaActiveX = function(activeXDocument) {
            activeXDocument.write(scriptTag(""));
            activeXDocument.close();
            var temp = activeXDocument.parentWindow.Object;
            activeXDocument = null;
            return temp;
        };
        var NullProtoObjectViaIFrame = function() {
            var iframe = documentCreateElement("iframe");
            var JS = "java" + SCRIPT + ":";
            var iframeDocument;
            iframe.style.display = "none";
            html.appendChild(iframe);
            iframe.src = String(JS);
            iframeDocument = iframe.contentWindow.document;
            iframeDocument.open();
            iframeDocument.write(scriptTag("document.F=Object"));
            iframeDocument.close();
            return iframeDocument.F;
        };
        var activeXDocument;
        var NullProtoObject = function() {
            try {
                activeXDocument = new ActiveXObject("htmlfile");
            } catch (error) {}
            NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
            var length = enumBugKeys.length;
            while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
            return NullProtoObject();
        };
        hiddenKeys[IE_PROTO] = true;
        module.exports = Object.create || function create(O, Properties) {
            var result;
            if (O !== null) {
                EmptyConstructor[PROTOTYPE] = anObject(O);
                result = new EmptyConstructor;
                EmptyConstructor[PROTOTYPE] = null;
                result[IE_PROTO] = O;
            } else result = NullProtoObject();
            return Properties === void 0 ? result : definePropertiesModule.f(result, Properties);
        };
    },
    4776: (__unused_webpack_module, exports, __webpack_require__) => {
        "use strict";
        var DESCRIPTORS = __webpack_require__(5515);
        var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(5721);
        var definePropertyModule = __webpack_require__(7696);
        var anObject = __webpack_require__(6092);
        var toIndexedObject = __webpack_require__(9538);
        var objectKeys = __webpack_require__(9527);
        exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
            anObject(O);
            var props = toIndexedObject(Properties);
            var keys = objectKeys(Properties);
            var length = keys.length;
            var index = 0;
            var key;
            while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
            return O;
        };
    },
    7696: (__unused_webpack_module, exports, __webpack_require__) => {
        "use strict";
        var DESCRIPTORS = __webpack_require__(5515);
        var IE8_DOM_DEFINE = __webpack_require__(6500);
        var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(5721);
        var anObject = __webpack_require__(6092);
        var toPropertyKey = __webpack_require__(7322);
        var $TypeError = TypeError;
        var $defineProperty = Object.defineProperty;
        var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        var ENUMERABLE = "enumerable";
        var CONFIGURABLE = "configurable";
        var WRITABLE = "writable";
        exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
            anObject(O);
            P = toPropertyKey(P);
            anObject(Attributes);
            if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
                var current = $getOwnPropertyDescriptor(O, P);
                if (current && current[WRITABLE]) {
                    O[P] = Attributes.value;
                    Attributes = {
                        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
                        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
                        writable: false
                    };
                }
            }
            return $defineProperty(O, P, Attributes);
        } : $defineProperty : function defineProperty(O, P, Attributes) {
            anObject(O);
            P = toPropertyKey(P);
            anObject(Attributes);
            if (IE8_DOM_DEFINE) try {
                return $defineProperty(O, P, Attributes);
            } catch (error) {}
            if ("get" in Attributes || "set" in Attributes) throw new $TypeError("Accessors not supported");
            if ("value" in Attributes) O[P] = Attributes.value;
            return O;
        };
    },
    290: (__unused_webpack_module, exports, __webpack_require__) => {
        "use strict";
        var DESCRIPTORS = __webpack_require__(5515);
        var call = __webpack_require__(5798);
        var propertyIsEnumerableModule = __webpack_require__(8610);
        var createPropertyDescriptor = __webpack_require__(1285);
        var toIndexedObject = __webpack_require__(9538);
        var toPropertyKey = __webpack_require__(7322);
        var hasOwn = __webpack_require__(1960);
        var IE8_DOM_DEFINE = __webpack_require__(6500);
        var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
            O = toIndexedObject(O);
            P = toPropertyKey(P);
            if (IE8_DOM_DEFINE) try {
                return $getOwnPropertyDescriptor(O, P);
            } catch (error) {}
            if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
        };
    },
    5335: (__unused_webpack_module, exports, __webpack_require__) => {
        "use strict";
        var internalObjectKeys = __webpack_require__(1097);
        var enumBugKeys = __webpack_require__(324);
        var hiddenKeys = enumBugKeys.concat("length", "prototype");
        exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
            return internalObjectKeys(O, hiddenKeys);
        };
    },
    9086: (__unused_webpack_module, exports) => {
        "use strict";
        exports.f = Object.getOwnPropertySymbols;
    },
    3336: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var hasOwn = __webpack_require__(1960);
        var isCallable = __webpack_require__(6214);
        var toObject = __webpack_require__(1622);
        var sharedKey = __webpack_require__(8806);
        var CORRECT_PROTOTYPE_GETTER = __webpack_require__(1658);
        var IE_PROTO = sharedKey("IE_PROTO");
        var $Object = Object;
        var ObjectPrototype = $Object.prototype;
        module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function(O) {
            var object = toObject(O);
            if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
            var constructor = object.constructor;
            if (isCallable(constructor) && object instanceof constructor) return constructor.prototype;
            return object instanceof $Object ? ObjectPrototype : null;
        };
    },
    1180: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var uncurryThis = __webpack_require__(8407);
        module.exports = uncurryThis({}.isPrototypeOf);
    },
    1097: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var uncurryThis = __webpack_require__(8407);
        var hasOwn = __webpack_require__(1960);
        var toIndexedObject = __webpack_require__(9538);
        var indexOf = __webpack_require__(7408).indexOf;
        var hiddenKeys = __webpack_require__(838);
        var push = uncurryThis([].push);
        module.exports = function(object, names) {
            var O = toIndexedObject(object);
            var i = 0;
            var result = [];
            var key;
            for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
            while (names.length > i) if (hasOwn(O, key = names[i++])) ~indexOf(result, key) || push(result, key);
            return result;
        };
    },
    9527: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var internalObjectKeys = __webpack_require__(1097);
        var enumBugKeys = __webpack_require__(324);
        module.exports = Object.keys || function keys(O) {
            return internalObjectKeys(O, enumBugKeys);
        };
    },
    8610: (__unused_webpack_module, exports) => {
        "use strict";
        var $propertyIsEnumerable = {}.propertyIsEnumerable;
        var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
            1: 2
        }, 1);
        exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
            var descriptor = getOwnPropertyDescriptor(this, V);
            return !!descriptor && descriptor.enumerable;
        } : $propertyIsEnumerable;
    },
    116: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var uncurryThisAccessor = __webpack_require__(1699);
        var isObject = __webpack_require__(8785);
        var requireObjectCoercible = __webpack_require__(6283);
        var aPossiblePrototype = __webpack_require__(935);
        module.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
            var CORRECT_SETTER = false;
            var test = {};
            var setter;
            try {
                setter = uncurryThisAccessor(Object.prototype, "__proto__", "set");
                setter(test, []);
                CORRECT_SETTER = test instanceof Array;
            } catch (error) {}
            return function setPrototypeOf(O, proto) {
                requireObjectCoercible(O);
                aPossiblePrototype(proto);
                if (!isObject(O)) return O;
                if (CORRECT_SETTER) setter(O, proto); else O.__proto__ = proto;
                return O;
            };
        }() : void 0);
    },
    49: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var call = __webpack_require__(5798);
        var isCallable = __webpack_require__(6214);
        var isObject = __webpack_require__(8785);
        var $TypeError = TypeError;
        module.exports = function(input, pref) {
            var fn, val;
            if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
            if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
            if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
            throw new $TypeError("Can't convert object to primitive value");
        };
    },
    1206: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var getBuiltIn = __webpack_require__(6578);
        var uncurryThis = __webpack_require__(8407);
        var getOwnPropertyNamesModule = __webpack_require__(5335);
        var getOwnPropertySymbolsModule = __webpack_require__(9086);
        var anObject = __webpack_require__(6092);
        var concat = uncurryThis([].concat);
        module.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
            var keys = getOwnPropertyNamesModule.f(anObject(it));
            var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
            return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
        };
    },
    8360: module => {
        "use strict";
        module.exports = function(exec) {
            try {
                return {
                    error: false,
                    value: exec()
                };
            } catch (error) {
                return {
                    error: true,
                    value: error
                };
            }
        };
    },
    7107: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var global = __webpack_require__(6750);
        var NativePromiseConstructor = __webpack_require__(9051);
        var isCallable = __webpack_require__(6214);
        var isForced = __webpack_require__(2131);
        var inspectSource = __webpack_require__(3067);
        var wellKnownSymbol = __webpack_require__(8292);
        var IS_BROWSER = __webpack_require__(7841);
        var IS_DENO = __webpack_require__(3757);
        var IS_PURE = __webpack_require__(572);
        var V8_VERSION = __webpack_require__(695);
        var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
        var SPECIES = wellKnownSymbol("species");
        var SUBCLASSING = false;
        var NATIVE_PROMISE_REJECTION_EVENT = isCallable(global.PromiseRejectionEvent);
        var FORCED_PROMISE_CONSTRUCTOR = isForced("Promise", (function() {
            var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor);
            var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor);
            if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
            if (IS_PURE && !(NativePromisePrototype["catch"] && NativePromisePrototype["finally"])) return true;
            if (!V8_VERSION || V8_VERSION < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
                var promise = new NativePromiseConstructor((function(resolve) {
                    resolve(1);
                }));
                var FakePromise = function(exec) {
                    exec((function() {}), (function() {}));
                };
                var constructor = promise.constructor = {};
                constructor[SPECIES] = FakePromise;
                SUBCLASSING = promise.then((function() {})) instanceof FakePromise;
                if (!SUBCLASSING) return true;
            }
            return !GLOBAL_CORE_JS_PROMISE && (IS_BROWSER || IS_DENO) && !NATIVE_PROMISE_REJECTION_EVENT;
        }));
        module.exports = {
            CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR,
            REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT,
            SUBCLASSING
        };
    },
    9051: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var global = __webpack_require__(6750);
        module.exports = global.Promise;
    },
    3517: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var anObject = __webpack_require__(6092);
        var isObject = __webpack_require__(8785);
        var newPromiseCapability = __webpack_require__(8090);
        module.exports = function(C, x) {
            anObject(C);
            if (isObject(x) && x.constructor === C) return x;
            var promiseCapability = newPromiseCapability.f(C);
            var resolve = promiseCapability.resolve;
            resolve(x);
            return promiseCapability.promise;
        };
    },
    3262: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var NativePromiseConstructor = __webpack_require__(9051);
        var checkCorrectnessOfIteration = __webpack_require__(7301);
        var FORCED_PROMISE_CONSTRUCTOR = __webpack_require__(7107).CONSTRUCTOR;
        module.exports = FORCED_PROMISE_CONSTRUCTOR || !checkCorrectnessOfIteration((function(iterable) {
            NativePromiseConstructor.all(iterable).then(void 0, (function() {}));
        }));
    },
    590: module => {
        "use strict";
        var Queue = function() {
            this.head = null;
            this.tail = null;
        };
        Queue.prototype = {
            add: function(item) {
                var entry = {
                    item,
                    next: null
                };
                var tail = this.tail;
                if (tail) tail.next = entry; else this.head = entry;
                this.tail = entry;
            },
            get: function() {
                var entry = this.head;
                if (entry) {
                    var next = this.head = entry.next;
                    if (next === null) this.tail = null;
                    return entry.item;
                }
            }
        };
        module.exports = Queue;
    },
    9199: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var call = __webpack_require__(5798);
        var anObject = __webpack_require__(6092);
        var isCallable = __webpack_require__(6214);
        var classof = __webpack_require__(9547);
        var regexpExec = __webpack_require__(4664);
        var $TypeError = TypeError;
        module.exports = function(R, S) {
            var exec = R.exec;
            if (isCallable(exec)) {
                var result = call(exec, R, S);
                if (result !== null) anObject(result);
                return result;
            }
            if (classof(R) === "RegExp") return call(regexpExec, R, S);
            throw new $TypeError("RegExp#exec called on incompatible receiver");
        };
    },
    4664: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var call = __webpack_require__(5798);
        var uncurryThis = __webpack_require__(8407);
        var toString = __webpack_require__(9540);
        var regexpFlags = __webpack_require__(8602);
        var stickyHelpers = __webpack_require__(9906);
        var shared = __webpack_require__(6980);
        var create = __webpack_require__(7847);
        var getInternalState = __webpack_require__(9192).get;
        var UNSUPPORTED_DOT_ALL = __webpack_require__(8130);
        var UNSUPPORTED_NCG = __webpack_require__(3231);
        var nativeReplace = shared("native-string-replace", String.prototype.replace);
        var nativeExec = RegExp.prototype.exec;
        var patchedExec = nativeExec;
        var charAt = uncurryThis("".charAt);
        var indexOf = uncurryThis("".indexOf);
        var replace = uncurryThis("".replace);
        var stringSlice = uncurryThis("".slice);
        var UPDATES_LAST_INDEX_WRONG = function() {
            var re1 = /a/;
            var re2 = /b*/g;
            call(nativeExec, re1, "a");
            call(nativeExec, re2, "a");
            return re1.lastIndex !== 0 || re2.lastIndex !== 0;
        }();
        var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;
        var NPCG_INCLUDED = /()??/.exec("")[1] !== void 0;
        var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;
        if (PATCH) patchedExec = function exec(string) {
            var re = this;
            var state = getInternalState(re);
            var str = toString(string);
            var raw = state.raw;
            var result, reCopy, lastIndex, match, i, object, group;
            if (raw) {
                raw.lastIndex = re.lastIndex;
                result = call(patchedExec, raw, str);
                re.lastIndex = raw.lastIndex;
                return result;
            }
            var groups = state.groups;
            var sticky = UNSUPPORTED_Y && re.sticky;
            var flags = call(regexpFlags, re);
            var source = re.source;
            var charsAdded = 0;
            var strCopy = str;
            if (sticky) {
                flags = replace(flags, "y", "");
                if (indexOf(flags, "g") === -1) flags += "g";
                strCopy = stringSlice(str, re.lastIndex);
                if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt(str, re.lastIndex - 1) !== "\n")) {
                    source = "(?: " + source + ")";
                    strCopy = " " + strCopy;
                    charsAdded++;
                }
                reCopy = new RegExp("^(?:" + source + ")", flags);
            }
            if (NPCG_INCLUDED) reCopy = new RegExp("^" + source + "$(?!\\s)", flags);
            if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
            match = call(nativeExec, sticky ? reCopy : re, strCopy);
            if (sticky) if (match) {
                match.input = stringSlice(match.input, charsAdded);
                match[0] = stringSlice(match[0], charsAdded);
                match.index = re.lastIndex;
                re.lastIndex += match[0].length;
            } else re.lastIndex = 0; else if (UPDATES_LAST_INDEX_WRONG && match) re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
            if (NPCG_INCLUDED && match && match.length > 1) call(nativeReplace, match[0], reCopy, (function() {
                for (i = 1; i < arguments.length - 2; i++) if (arguments[i] === void 0) match[i] = void 0;
            }));
            if (match && groups) {
                match.groups = object = create(null);
                for (i = 0; i < groups.length; i++) {
                    group = groups[i];
                    object[group[0]] = match[group[1]];
                }
            }
            return match;
        };
        module.exports = patchedExec;
    },
    8602: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var anObject = __webpack_require__(6092);
        module.exports = function() {
            var that = anObject(this);
            var result = "";
            if (that.hasIndices) result += "d";
            if (that.global) result += "g";
            if (that.ignoreCase) result += "i";
            if (that.multiline) result += "m";
            if (that.dotAll) result += "s";
            if (that.unicode) result += "u";
            if (that.unicodeSets) result += "v";
            if (that.sticky) result += "y";
            return result;
        };
    },
    8859: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var call = __webpack_require__(5798);
        var hasOwn = __webpack_require__(1960);
        var isPrototypeOf = __webpack_require__(1180);
        var regExpFlags = __webpack_require__(8602);
        var RegExpPrototype = RegExp.prototype;
        module.exports = function(R) {
            var flags = R.flags;
            return flags === void 0 && !("flags" in RegExpPrototype) && !hasOwn(R, "flags") && isPrototypeOf(RegExpPrototype, R) ? call(regExpFlags, R) : flags;
        };
    },
    9906: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var fails = __webpack_require__(5536);
        var global = __webpack_require__(6750);
        var $RegExp = global.RegExp;
        var UNSUPPORTED_Y = fails((function() {
            var re = $RegExp("a", "y");
            re.lastIndex = 2;
            return re.exec("abcd") !== null;
        }));
        var MISSED_STICKY = UNSUPPORTED_Y || fails((function() {
            return !$RegExp("a", "y").sticky;
        }));
        var BROKEN_CARET = UNSUPPORTED_Y || fails((function() {
            var re = $RegExp("^r", "gy");
            re.lastIndex = 2;
            return re.exec("str") !== null;
        }));
        module.exports = {
            BROKEN_CARET,
            MISSED_STICKY,
            UNSUPPORTED_Y
        };
    },
    8130: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var fails = __webpack_require__(5536);
        var global = __webpack_require__(6750);
        var $RegExp = global.RegExp;
        module.exports = fails((function() {
            var re = $RegExp(".", "s");
            return !(re.dotAll && re.test("\n") && re.flags === "s");
        }));
    },
    3231: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var fails = __webpack_require__(5536);
        var global = __webpack_require__(6750);
        var $RegExp = global.RegExp;
        module.exports = fails((function() {
            var re = $RegExp("(?<a>b)", "g");
            return re.exec("b").groups.a !== "b" || "b".replace(re, "$<a>c") !== "bc";
        }));
    },
    6283: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var isNullOrUndefined = __webpack_require__(2412);
        var $TypeError = TypeError;
        module.exports = function(it) {
            if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
            return it;
        };
    },
    8166: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var global = __webpack_require__(6750);
        var DESCRIPTORS = __webpack_require__(5515);
        var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        module.exports = function(name) {
            if (!DESCRIPTORS) return global[name];
            var descriptor = getOwnPropertyDescriptor(global, name);
            return descriptor && descriptor.value;
        };
    },
    7466: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var getBuiltIn = __webpack_require__(6578);
        var defineBuiltInAccessor = __webpack_require__(7615);
        var wellKnownSymbol = __webpack_require__(8292);
        var DESCRIPTORS = __webpack_require__(5515);
        var SPECIES = wellKnownSymbol("species");
        module.exports = function(CONSTRUCTOR_NAME) {
            var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
            if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) defineBuiltInAccessor(Constructor, SPECIES, {
                configurable: true,
                get: function() {
                    return this;
                }
            });
        };
    },
    5996: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var defineProperty = __webpack_require__(7696).f;
        var hasOwn = __webpack_require__(1960);
        var wellKnownSymbol = __webpack_require__(8292);
        var TO_STRING_TAG = wellKnownSymbol("toStringTag");
        module.exports = function(target, TAG, STATIC) {
            if (target && !STATIC) target = target.prototype;
            if (target && !hasOwn(target, TO_STRING_TAG)) defineProperty(target, TO_STRING_TAG, {
                configurable: true,
                value: TAG
            });
        };
    },
    8806: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var shared = __webpack_require__(6980);
        var uid = __webpack_require__(7927);
        var keys = shared("keys");
        module.exports = function(key) {
            return keys[key] || (keys[key] = uid(key));
        };
    },
    140: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var IS_PURE = __webpack_require__(572);
        var globalThis = __webpack_require__(6750);
        var defineGlobalProperty = __webpack_require__(928);
        var SHARED = "__core-js_shared__";
        var store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});
        (store.versions || (store.versions = [])).push({
            version: "3.36.1",
            mode: IS_PURE ? "pure" : "global",
            copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
            license: "https://github.com/zloirock/core-js/blob/v3.36.1/LICENSE",
            source: "https://github.com/zloirock/core-js"
        });
    },
    6980: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var store = __webpack_require__(140);
        module.exports = function(key, value) {
            return store[key] || (store[key] = value || {});
        };
    },
    814: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var anObject = __webpack_require__(6092);
        var aConstructor = __webpack_require__(8679);
        var isNullOrUndefined = __webpack_require__(2412);
        var wellKnownSymbol = __webpack_require__(8292);
        var SPECIES = wellKnownSymbol("species");
        module.exports = function(O, defaultConstructor) {
            var C = anObject(O).constructor;
            var S;
            return C === void 0 || isNullOrUndefined(S = anObject(C)[SPECIES]) ? defaultConstructor : aConstructor(S);
        };
    },
    650: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var uncurryThis = __webpack_require__(8407);
        var toIntegerOrInfinity = __webpack_require__(6878);
        var toString = __webpack_require__(9540);
        var requireObjectCoercible = __webpack_require__(6283);
        var charAt = uncurryThis("".charAt);
        var charCodeAt = uncurryThis("".charCodeAt);
        var stringSlice = uncurryThis("".slice);
        var createMethod = function(CONVERT_TO_STRING) {
            return function($this, pos) {
                var S = toString(requireObjectCoercible($this));
                var position = toIntegerOrInfinity(pos);
                var size = S.length;
                var first, second;
                if (position < 0 || position >= size) return CONVERT_TO_STRING ? "" : void 0;
                first = charCodeAt(S, position);
                return first < 55296 || first > 56319 || position + 1 === size || (second = charCodeAt(S, position + 1)) < 56320 || second > 57343 ? CONVERT_TO_STRING ? charAt(S, position) : first : CONVERT_TO_STRING ? stringSlice(S, position, position + 2) : (first - 55296 << 10) + (second - 56320) + 65536;
            };
        };
        module.exports = {
            codeAt: createMethod(false),
            charAt: createMethod(true)
        };
    },
    6991: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var PROPER_FUNCTION_NAME = __webpack_require__(5573).PROPER;
        var fails = __webpack_require__(5536);
        var whitespaces = __webpack_require__(431);
        var non = "​᠎";
        module.exports = function(METHOD_NAME) {
            return fails((function() {
                return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() !== non || PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME;
            }));
        };
    },
    9405: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var uncurryThis = __webpack_require__(8407);
        var requireObjectCoercible = __webpack_require__(6283);
        var toString = __webpack_require__(9540);
        var whitespaces = __webpack_require__(431);
        var replace = uncurryThis("".replace);
        var ltrim = RegExp("^[" + whitespaces + "]+");
        var rtrim = RegExp("(^|[^" + whitespaces + "])[" + whitespaces + "]+$");
        var createMethod = function(TYPE) {
            return function($this) {
                var string = toString(requireObjectCoercible($this));
                if (TYPE & 1) string = replace(string, ltrim, "");
                if (TYPE & 2) string = replace(string, rtrim, "$1");
                return string;
            };
        };
        module.exports = {
            start: createMethod(1),
            end: createMethod(2),
            trim: createMethod(3)
        };
    },
    7506: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var V8_VERSION = __webpack_require__(695);
        var fails = __webpack_require__(5536);
        var global = __webpack_require__(6750);
        var $String = global.String;
        module.exports = !!Object.getOwnPropertySymbols && !fails((function() {
            var symbol = Symbol("symbol detection");
            return !$String(symbol) || !(Object(symbol) instanceof Symbol) || !Symbol.sham && V8_VERSION && V8_VERSION < 41;
        }));
    },
    1316: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var global = __webpack_require__(6750);
        var apply = __webpack_require__(9524);
        var bind = __webpack_require__(1571);
        var isCallable = __webpack_require__(6214);
        var hasOwn = __webpack_require__(1960);
        var fails = __webpack_require__(5536);
        var html = __webpack_require__(3940);
        var arraySlice = __webpack_require__(7519);
        var createElement = __webpack_require__(9820);
        var validateArgumentsLength = __webpack_require__(1239);
        var IS_IOS = __webpack_require__(8016);
        var IS_NODE = __webpack_require__(7097);
        var set = global.setImmediate;
        var clear = global.clearImmediate;
        var process = global.process;
        var Dispatch = global.Dispatch;
        var Function = global.Function;
        var MessageChannel = global.MessageChannel;
        var String = global.String;
        var counter = 0;
        var queue = {};
        var ONREADYSTATECHANGE = "onreadystatechange";
        var $location, defer, channel, port;
        fails((function() {
            $location = global.location;
        }));
        var run = function(id) {
            if (hasOwn(queue, id)) {
                var fn = queue[id];
                delete queue[id];
                fn();
            }
        };
        var runner = function(id) {
            return function() {
                run(id);
            };
        };
        var eventListener = function(event) {
            run(event.data);
        };
        var globalPostMessageDefer = function(id) {
            global.postMessage(String(id), $location.protocol + "//" + $location.host);
        };
        if (!set || !clear) {
            set = function setImmediate(handler) {
                validateArgumentsLength(arguments.length, 1);
                var fn = isCallable(handler) ? handler : Function(handler);
                var args = arraySlice(arguments, 1);
                queue[++counter] = function() {
                    apply(fn, void 0, args);
                };
                defer(counter);
                return counter;
            };
            clear = function clearImmediate(id) {
                delete queue[id];
            };
            if (IS_NODE) defer = function(id) {
                process.nextTick(runner(id));
            }; else if (Dispatch && Dispatch.now) defer = function(id) {
                Dispatch.now(runner(id));
            }; else if (MessageChannel && !IS_IOS) {
                channel = new MessageChannel;
                port = channel.port2;
                channel.port1.onmessage = eventListener;
                defer = bind(port.postMessage, port);
            } else if (global.addEventListener && isCallable(global.postMessage) && !global.importScripts && $location && $location.protocol !== "file:" && !fails(globalPostMessageDefer)) {
                defer = globalPostMessageDefer;
                global.addEventListener("message", eventListener, false);
            } else if (ONREADYSTATECHANGE in createElement("script")) defer = function(id) {
                html.appendChild(createElement("script"))[ONREADYSTATECHANGE] = function() {
                    html.removeChild(this);
                    run(id);
                };
            }; else defer = function(id) {
                setTimeout(runner(id), 0);
            };
        }
        module.exports = {
            set,
            clear
        };
    },
    5429: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var toIntegerOrInfinity = __webpack_require__(6878);
        var max = Math.max;
        var min = Math.min;
        module.exports = function(index, length) {
            var integer = toIntegerOrInfinity(index);
            return integer < 0 ? max(integer + length, 0) : min(integer, length);
        };
    },
    9538: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var IndexedObject = __webpack_require__(5254);
        var requireObjectCoercible = __webpack_require__(6283);
        module.exports = function(it) {
            return IndexedObject(requireObjectCoercible(it));
        };
    },
    6878: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var trunc = __webpack_require__(1652);
        module.exports = function(argument) {
            var number = +argument;
            return number !== number || number === 0 ? 0 : trunc(number);
        };
    },
    7925: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var toIntegerOrInfinity = __webpack_require__(6878);
        var min = Math.min;
        module.exports = function(argument) {
            var len = toIntegerOrInfinity(argument);
            return len > 0 ? min(len, 9007199254740991) : 0;
        };
    },
    1622: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var requireObjectCoercible = __webpack_require__(6283);
        var $Object = Object;
        module.exports = function(argument) {
            return $Object(requireObjectCoercible(argument));
        };
    },
    9472: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var call = __webpack_require__(5798);
        var isObject = __webpack_require__(8785);
        var isSymbol = __webpack_require__(4062);
        var getMethod = __webpack_require__(7851);
        var ordinaryToPrimitive = __webpack_require__(49);
        var wellKnownSymbol = __webpack_require__(8292);
        var $TypeError = TypeError;
        var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
        module.exports = function(input, pref) {
            if (!isObject(input) || isSymbol(input)) return input;
            var exoticToPrim = getMethod(input, TO_PRIMITIVE);
            var result;
            if (exoticToPrim) {
                if (pref === void 0) pref = "default";
                result = call(exoticToPrim, input, pref);
                if (!isObject(result) || isSymbol(result)) return result;
                throw new $TypeError("Can't convert object to primitive value");
            }
            if (pref === void 0) pref = "number";
            return ordinaryToPrimitive(input, pref);
        };
    },
    7322: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var toPrimitive = __webpack_require__(9472);
        var isSymbol = __webpack_require__(4062);
        module.exports = function(argument) {
            var key = toPrimitive(argument, "string");
            return isSymbol(key) ? key : key + "";
        };
    },
    4363: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var wellKnownSymbol = __webpack_require__(8292);
        var TO_STRING_TAG = wellKnownSymbol("toStringTag");
        var test = {};
        test[TO_STRING_TAG] = "z";
        module.exports = String(test) === "[object z]";
    },
    9540: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var classof = __webpack_require__(5736);
        var $String = String;
        module.exports = function(argument) {
            if (classof(argument) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
            return $String(argument);
        };
    },
    3460: module => {
        "use strict";
        var $String = String;
        module.exports = function(argument) {
            try {
                return $String(argument);
            } catch (error) {
                return "Object";
            }
        };
    },
    7927: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var uncurryThis = __webpack_require__(8407);
        var id = 0;
        var postfix = Math.random();
        var toString = uncurryThis(1..toString);
        module.exports = function(key) {
            return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString(++id + postfix, 36);
        };
    },
    6939: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var NATIVE_SYMBOL = __webpack_require__(7506);
        module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
    },
    5721: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var DESCRIPTORS = __webpack_require__(5515);
        var fails = __webpack_require__(5536);
        module.exports = DESCRIPTORS && fails((function() {
            return Object.defineProperty((function() {}), "prototype", {
                value: 42,
                writable: false
            }).prototype !== 42;
        }));
    },
    1239: module => {
        "use strict";
        var $TypeError = TypeError;
        module.exports = function(passed, required) {
            if (passed < required) throw new $TypeError("Not enough arguments");
            return passed;
        };
    },
    91: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var global = __webpack_require__(6750);
        var isCallable = __webpack_require__(6214);
        var WeakMap = global.WeakMap;
        module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));
    },
    8292: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var global = __webpack_require__(6750);
        var shared = __webpack_require__(6980);
        var hasOwn = __webpack_require__(1960);
        var uid = __webpack_require__(7927);
        var NATIVE_SYMBOL = __webpack_require__(7506);
        var USE_SYMBOL_AS_UID = __webpack_require__(6939);
        var Symbol = global.Symbol;
        var WellKnownSymbolsStore = shared("wks");
        var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol["for"] || Symbol : Symbol && Symbol.withoutSetter || uid;
        module.exports = function(name) {
            if (!hasOwn(WellKnownSymbolsStore, name)) WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name) ? Symbol[name] : createWellKnownSymbol("Symbol." + name);
            return WellKnownSymbolsStore[name];
        };
    },
    431: module => {
        "use strict";
        module.exports = "\t\n\v\f\r      " + "          　\u2028\u2029\ufeff";
    },
    635: (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var $ = __webpack_require__(2679);
        var uncurryThis = __webpack_require__(5013);
        var $indexOf = __webpack_require__(7408).indexOf;
        var arrayMethodIsStrict = __webpack_require__(8307);
        var nativeIndexOf = uncurryThis([].indexOf);
        var NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([ 1 ], 1, -0) < 0;
        var FORCED = NEGATIVE_ZERO || !arrayMethodIsStrict("indexOf");
        $({
            target: "Array",
            proto: true,
            forced: FORCED
        }, {
            indexOf: function indexOf(searchElement) {
                var fromIndex = arguments.length > 1 ? arguments[1] : void 0;
                return NEGATIVE_ZERO ? nativeIndexOf(this, searchElement, fromIndex) || 0 : $indexOf(this, searchElement, fromIndex);
            }
        });
    },
    7495: (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var toIndexedObject = __webpack_require__(9538);
        var addToUnscopables = __webpack_require__(4080);
        var Iterators = __webpack_require__(786);
        var InternalStateModule = __webpack_require__(9192);
        var defineProperty = __webpack_require__(7696).f;
        var defineIterator = __webpack_require__(459);
        var createIterResultObject = __webpack_require__(4186);
        var IS_PURE = __webpack_require__(572);
        var DESCRIPTORS = __webpack_require__(5515);
        var ARRAY_ITERATOR = "Array Iterator";
        var setInternalState = InternalStateModule.set;
        var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);
        module.exports = defineIterator(Array, "Array", (function(iterated, kind) {
            setInternalState(this, {
                type: ARRAY_ITERATOR,
                target: toIndexedObject(iterated),
                index: 0,
                kind
            });
        }), (function() {
            var state = getInternalState(this);
            var target = state.target;
            var index = state.index++;
            if (!target || index >= target.length) {
                state.target = void 0;
                return createIterResultObject(void 0, true);
            }
            switch (state.kind) {
              case "keys":
                return createIterResultObject(index, false);

              case "values":
                return createIterResultObject(target[index], false);
            }
            return createIterResultObject([ index, target[index] ], false);
        }), "values");
        var values = Iterators.Arguments = Iterators.Array;
        addToUnscopables("keys");
        addToUnscopables("values");
        addToUnscopables("entries");
        if (!IS_PURE && DESCRIPTORS && values.name !== "values") try {
            defineProperty(values, "name", {
                value: "values"
            });
        } catch (error) {}
    },
    3751: (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var $ = __webpack_require__(2679);
        var $reduce = __webpack_require__(9031).left;
        var arrayMethodIsStrict = __webpack_require__(8307);
        var CHROME_VERSION = __webpack_require__(695);
        var IS_NODE = __webpack_require__(7097);
        var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
        var FORCED = CHROME_BUG || !arrayMethodIsStrict("reduce");
        $({
            target: "Array",
            proto: true,
            forced: FORCED
        }, {
            reduce: function reduce(callbackfn) {
                var length = arguments.length;
                return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : void 0);
            }
        });
    },
    4491: (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var $ = __webpack_require__(2679);
        var uncurryThis = __webpack_require__(8407);
        var isArray = __webpack_require__(4901);
        var nativeReverse = uncurryThis([].reverse);
        var test = [ 1, 2 ];
        $({
            target: "Array",
            proto: true,
            forced: String(test) === String(test.reverse())
        }, {
            reverse: function reverse() {
                if (isArray(this)) this.length = this.length;
                return nativeReverse(this);
            }
        });
    },
    1594: (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var $ = __webpack_require__(2679);
        var call = __webpack_require__(5798);
        var aCallable = __webpack_require__(6547);
        var newPromiseCapabilityModule = __webpack_require__(8090);
        var perform = __webpack_require__(8360);
        var iterate = __webpack_require__(2283);
        var PROMISE_STATICS_INCORRECT_ITERATION = __webpack_require__(3262);
        $({
            target: "Promise",
            stat: true,
            forced: PROMISE_STATICS_INCORRECT_ITERATION
        }, {
            all: function all(iterable) {
                var C = this;
                var capability = newPromiseCapabilityModule.f(C);
                var resolve = capability.resolve;
                var reject = capability.reject;
                var result = perform((function() {
                    var $promiseResolve = aCallable(C.resolve);
                    var values = [];
                    var counter = 0;
                    var remaining = 1;
                    iterate(iterable, (function(promise) {
                        var index = counter++;
                        var alreadyCalled = false;
                        remaining++;
                        call($promiseResolve, C, promise).then((function(value) {
                            if (alreadyCalled) return;
                            alreadyCalled = true;
                            values[index] = value;
                            --remaining || resolve(values);
                        }), reject);
                    }));
                    --remaining || resolve(values);
                }));
                if (result.error) reject(result.value);
                return capability.promise;
            }
        });
    },
    7110: (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var $ = __webpack_require__(2679);
        var IS_PURE = __webpack_require__(572);
        var FORCED_PROMISE_CONSTRUCTOR = __webpack_require__(7107).CONSTRUCTOR;
        var NativePromiseConstructor = __webpack_require__(9051);
        var getBuiltIn = __webpack_require__(6578);
        var isCallable = __webpack_require__(6214);
        var defineBuiltIn = __webpack_require__(6403);
        var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
        $({
            target: "Promise",
            proto: true,
            forced: FORCED_PROMISE_CONSTRUCTOR,
            real: true
        }, {
            catch: function(onRejected) {
                return this.then(void 0, onRejected);
            }
        });
        if (!IS_PURE && isCallable(NativePromiseConstructor)) {
            var method = getBuiltIn("Promise").prototype["catch"];
            if (NativePromisePrototype["catch"] !== method) defineBuiltIn(NativePromisePrototype, "catch", method, {
                unsafe: true
            });
        }
    },
    6309: (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var $ = __webpack_require__(2679);
        var IS_PURE = __webpack_require__(572);
        var IS_NODE = __webpack_require__(7097);
        var global = __webpack_require__(6750);
        var call = __webpack_require__(5798);
        var defineBuiltIn = __webpack_require__(6403);
        var setPrototypeOf = __webpack_require__(116);
        var setToStringTag = __webpack_require__(5996);
        var setSpecies = __webpack_require__(7466);
        var aCallable = __webpack_require__(6547);
        var isCallable = __webpack_require__(6214);
        var isObject = __webpack_require__(8785);
        var anInstance = __webpack_require__(6784);
        var speciesConstructor = __webpack_require__(814);
        var task = __webpack_require__(1316).set;
        var microtask = __webpack_require__(9440);
        var hostReportErrors = __webpack_require__(1956);
        var perform = __webpack_require__(8360);
        var Queue = __webpack_require__(590);
        var InternalStateModule = __webpack_require__(9192);
        var NativePromiseConstructor = __webpack_require__(9051);
        var PromiseConstructorDetection = __webpack_require__(7107);
        var newPromiseCapabilityModule = __webpack_require__(8090);
        var PROMISE = "Promise";
        var FORCED_PROMISE_CONSTRUCTOR = PromiseConstructorDetection.CONSTRUCTOR;
        var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
        var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
        var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
        var setInternalState = InternalStateModule.set;
        var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
        var PromiseConstructor = NativePromiseConstructor;
        var PromisePrototype = NativePromisePrototype;
        var TypeError = global.TypeError;
        var document = global.document;
        var process = global.process;
        var newPromiseCapability = newPromiseCapabilityModule.f;
        var newGenericPromiseCapability = newPromiseCapability;
        var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
        var UNHANDLED_REJECTION = "unhandledrejection";
        var REJECTION_HANDLED = "rejectionhandled";
        var PENDING = 0;
        var FULFILLED = 1;
        var REJECTED = 2;
        var HANDLED = 1;
        var UNHANDLED = 2;
        var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;
        var isThenable = function(it) {
            var then;
            return isObject(it) && isCallable(then = it.then) ? then : false;
        };
        var callReaction = function(reaction, state) {
            var value = state.value;
            var ok = state.state === FULFILLED;
            var handler = ok ? reaction.ok : reaction.fail;
            var resolve = reaction.resolve;
            var reject = reaction.reject;
            var domain = reaction.domain;
            var result, then, exited;
            try {
                if (handler) {
                    if (!ok) {
                        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
                        state.rejection = HANDLED;
                    }
                    if (handler === true) result = value; else {
                        if (domain) domain.enter();
                        result = handler(value);
                        if (domain) {
                            domain.exit();
                            exited = true;
                        }
                    }
                    if (result === reaction.promise) reject(new TypeError("Promise-chain cycle")); else if (then = isThenable(result)) call(then, result, resolve, reject); else resolve(result);
                } else reject(value);
            } catch (error) {
                if (domain && !exited) domain.exit();
                reject(error);
            }
        };
        var notify = function(state, isReject) {
            if (state.notified) return;
            state.notified = true;
            microtask((function() {
                var reactions = state.reactions;
                var reaction;
                while (reaction = reactions.get()) callReaction(reaction, state);
                state.notified = false;
                if (isReject && !state.rejection) onUnhandled(state);
            }));
        };
        var dispatchEvent = function(name, promise, reason) {
            var event, handler;
            if (DISPATCH_EVENT) {
                event = document.createEvent("Event");
                event.promise = promise;
                event.reason = reason;
                event.initEvent(name, false, true);
                global.dispatchEvent(event);
            } else event = {
                promise,
                reason
            };
            if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global["on" + name])) handler(event); else if (name === UNHANDLED_REJECTION) hostReportErrors("Unhandled promise rejection", reason);
        };
        var onUnhandled = function(state) {
            call(task, global, (function() {
                var promise = state.facade;
                var value = state.value;
                var IS_UNHANDLED = isUnhandled(state);
                var result;
                if (IS_UNHANDLED) {
                    result = perform((function() {
                        if (IS_NODE) process.emit("unhandledRejection", value, promise); else dispatchEvent(UNHANDLED_REJECTION, promise, value);
                    }));
                    state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
                    if (result.error) throw result.value;
                }
            }));
        };
        var isUnhandled = function(state) {
            return state.rejection !== HANDLED && !state.parent;
        };
        var onHandleUnhandled = function(state) {
            call(task, global, (function() {
                var promise = state.facade;
                if (IS_NODE) process.emit("rejectionHandled", promise); else dispatchEvent(REJECTION_HANDLED, promise, state.value);
            }));
        };
        var bind = function(fn, state, unwrap) {
            return function(value) {
                fn(state, value, unwrap);
            };
        };
        var internalReject = function(state, value, unwrap) {
            if (state.done) return;
            state.done = true;
            if (unwrap) state = unwrap;
            state.value = value;
            state.state = REJECTED;
            notify(state, true);
        };
        var internalResolve = function(state, value, unwrap) {
            if (state.done) return;
            state.done = true;
            if (unwrap) state = unwrap;
            try {
                if (state.facade === value) throw new TypeError("Promise can't be resolved itself");
                var then = isThenable(value);
                if (then) microtask((function() {
                    var wrapper = {
                        done: false
                    };
                    try {
                        call(then, value, bind(internalResolve, wrapper, state), bind(internalReject, wrapper, state));
                    } catch (error) {
                        internalReject(wrapper, error, state);
                    }
                })); else {
                    state.value = value;
                    state.state = FULFILLED;
                    notify(state, false);
                }
            } catch (error) {
                internalReject({
                    done: false
                }, error, state);
            }
        };
        if (FORCED_PROMISE_CONSTRUCTOR) {
            PromiseConstructor = function Promise(executor) {
                anInstance(this, PromisePrototype);
                aCallable(executor);
                call(Internal, this);
                var state = getInternalPromiseState(this);
                try {
                    executor(bind(internalResolve, state), bind(internalReject, state));
                } catch (error) {
                    internalReject(state, error);
                }
            };
            PromisePrototype = PromiseConstructor.prototype;
            Internal = function Promise(executor) {
                setInternalState(this, {
                    type: PROMISE,
                    done: false,
                    notified: false,
                    parent: false,
                    reactions: new Queue,
                    rejection: false,
                    state: PENDING,
                    value: void 0
                });
            };
            Internal.prototype = defineBuiltIn(PromisePrototype, "then", (function then(onFulfilled, onRejected) {
                var state = getInternalPromiseState(this);
                var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
                state.parent = true;
                reaction.ok = isCallable(onFulfilled) ? onFulfilled : true;
                reaction.fail = isCallable(onRejected) && onRejected;
                reaction.domain = IS_NODE ? process.domain : void 0;
                if (state.state === PENDING) state.reactions.add(reaction); else microtask((function() {
                    callReaction(reaction, state);
                }));
                return reaction.promise;
            }));
            OwnPromiseCapability = function() {
                var promise = new Internal;
                var state = getInternalPromiseState(promise);
                this.promise = promise;
                this.resolve = bind(internalResolve, state);
                this.reject = bind(internalReject, state);
            };
            newPromiseCapabilityModule.f = newPromiseCapability = function(C) {
                return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
            };
            if (!IS_PURE && isCallable(NativePromiseConstructor) && NativePromisePrototype !== Object.prototype) {
                nativeThen = NativePromisePrototype.then;
                if (!NATIVE_PROMISE_SUBCLASSING) defineBuiltIn(NativePromisePrototype, "then", (function then(onFulfilled, onRejected) {
                    var that = this;
                    return new PromiseConstructor((function(resolve, reject) {
                        call(nativeThen, that, resolve, reject);
                    })).then(onFulfilled, onRejected);
                }), {
                    unsafe: true
                });
                try {
                    delete NativePromisePrototype.constructor;
                } catch (error) {}
                if (setPrototypeOf) setPrototypeOf(NativePromisePrototype, PromisePrototype);
            }
        }
        $({
            global: true,
            constructor: true,
            wrap: true,
            forced: FORCED_PROMISE_CONSTRUCTOR
        }, {
            Promise: PromiseConstructor
        });
        setToStringTag(PromiseConstructor, PROMISE, false, true);
        setSpecies(PROMISE);
    },
    4151: (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__(6309);
        __webpack_require__(1594);
        __webpack_require__(7110);
        __webpack_require__(2420);
        __webpack_require__(3082);
        __webpack_require__(2533);
    },
    2420: (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var $ = __webpack_require__(2679);
        var call = __webpack_require__(5798);
        var aCallable = __webpack_require__(6547);
        var newPromiseCapabilityModule = __webpack_require__(8090);
        var perform = __webpack_require__(8360);
        var iterate = __webpack_require__(2283);
        var PROMISE_STATICS_INCORRECT_ITERATION = __webpack_require__(3262);
        $({
            target: "Promise",
            stat: true,
            forced: PROMISE_STATICS_INCORRECT_ITERATION
        }, {
            race: function race(iterable) {
                var C = this;
                var capability = newPromiseCapabilityModule.f(C);
                var reject = capability.reject;
                var result = perform((function() {
                    var $promiseResolve = aCallable(C.resolve);
                    iterate(iterable, (function(promise) {
                        call($promiseResolve, C, promise).then(capability.resolve, reject);
                    }));
                }));
                if (result.error) reject(result.value);
                return capability.promise;
            }
        });
    },
    3082: (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var $ = __webpack_require__(2679);
        var newPromiseCapabilityModule = __webpack_require__(8090);
        var FORCED_PROMISE_CONSTRUCTOR = __webpack_require__(7107).CONSTRUCTOR;
        $({
            target: "Promise",
            stat: true,
            forced: FORCED_PROMISE_CONSTRUCTOR
        }, {
            reject: function reject(r) {
                var capability = newPromiseCapabilityModule.f(this);
                var capabilityReject = capability.reject;
                capabilityReject(r);
                return capability.promise;
            }
        });
    },
    2533: (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var $ = __webpack_require__(2679);
        var getBuiltIn = __webpack_require__(6578);
        var IS_PURE = __webpack_require__(572);
        var NativePromiseConstructor = __webpack_require__(9051);
        var FORCED_PROMISE_CONSTRUCTOR = __webpack_require__(7107).CONSTRUCTOR;
        var promiseResolve = __webpack_require__(3517);
        var PromiseConstructorWrapper = getBuiltIn("Promise");
        var CHECK_WRAPPER = IS_PURE && !FORCED_PROMISE_CONSTRUCTOR;
        $({
            target: "Promise",
            stat: true,
            forced: IS_PURE || FORCED_PROMISE_CONSTRUCTOR
        }, {
            resolve: function resolve(x) {
                return promiseResolve(CHECK_WRAPPER && this === PromiseConstructorWrapper ? NativePromiseConstructor : this, x);
            }
        });
    },
    6954: (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var $ = __webpack_require__(2679);
        var exec = __webpack_require__(4664);
        $({
            target: "RegExp",
            proto: true,
            forced: /./.exec !== exec
        }, {
            exec
        });
    },
    6286: (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var PROPER_FUNCTION_NAME = __webpack_require__(5573).PROPER;
        var defineBuiltIn = __webpack_require__(6403);
        var anObject = __webpack_require__(6092);
        var $toString = __webpack_require__(9540);
        var fails = __webpack_require__(5536);
        var getRegExpFlags = __webpack_require__(8859);
        var TO_STRING = "toString";
        var RegExpPrototype = RegExp.prototype;
        var nativeToString = RegExpPrototype[TO_STRING];
        var NOT_GENERIC = fails((function() {
            return nativeToString.call({
                source: "a",
                flags: "b"
            }) !== "/a/b";
        }));
        var INCORRECT_NAME = PROPER_FUNCTION_NAME && nativeToString.name !== TO_STRING;
        if (NOT_GENERIC || INCORRECT_NAME) defineBuiltIn(RegExpPrototype, TO_STRING, (function toString() {
            var R = anObject(this);
            var pattern = $toString(R.source);
            var flags = $toString(getRegExpFlags(R));
            return "/" + pattern + "/" + flags;
        }), {
            unsafe: true
        });
    },
    4010: (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var $ = __webpack_require__(2679);
        var uncurryThis = __webpack_require__(5013);
        var getOwnPropertyDescriptor = __webpack_require__(290).f;
        var toLength = __webpack_require__(7925);
        var toString = __webpack_require__(9540);
        var notARegExp = __webpack_require__(6582);
        var requireObjectCoercible = __webpack_require__(6283);
        var correctIsRegExpLogic = __webpack_require__(1979);
        var IS_PURE = __webpack_require__(572);
        var slice = uncurryThis("".slice);
        var min = Math.min;
        var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic("endsWith");
        var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function() {
            var descriptor = getOwnPropertyDescriptor(String.prototype, "endsWith");
            return descriptor && !descriptor.writable;
        }();
        $({
            target: "String",
            proto: true,
            forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC
        }, {
            endsWith: function endsWith(searchString) {
                var that = toString(requireObjectCoercible(this));
                notARegExp(searchString);
                var endPosition = arguments.length > 1 ? arguments[1] : void 0;
                var len = that.length;
                var end = endPosition === void 0 ? len : min(toLength(endPosition), len);
                var search = toString(searchString);
                return slice(that, end - search.length, end) === search;
            }
        });
    },
    9958: (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var $ = __webpack_require__(2679);
        var uncurryThis = __webpack_require__(8407);
        var notARegExp = __webpack_require__(6582);
        var requireObjectCoercible = __webpack_require__(6283);
        var toString = __webpack_require__(9540);
        var correctIsRegExpLogic = __webpack_require__(1979);
        var stringIndexOf = uncurryThis("".indexOf);
        $({
            target: "String",
            proto: true,
            forced: !correctIsRegExpLogic("includes")
        }, {
            includes: function includes(searchString) {
                return !!~stringIndexOf(toString(requireObjectCoercible(this)), toString(notARegExp(searchString)), arguments.length > 1 ? arguments[1] : void 0);
            }
        });
    },
    3018: (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var call = __webpack_require__(5798);
        var fixRegExpWellKnownSymbolLogic = __webpack_require__(6641);
        var anObject = __webpack_require__(6092);
        var isNullOrUndefined = __webpack_require__(2412);
        var toLength = __webpack_require__(7925);
        var toString = __webpack_require__(9540);
        var requireObjectCoercible = __webpack_require__(6283);
        var getMethod = __webpack_require__(7851);
        var advanceStringIndex = __webpack_require__(5428);
        var regExpExec = __webpack_require__(9199);
        fixRegExpWellKnownSymbolLogic("match", (function(MATCH, nativeMatch, maybeCallNative) {
            return [ function match(regexp) {
                var O = requireObjectCoercible(this);
                var matcher = isNullOrUndefined(regexp) ? void 0 : getMethod(regexp, MATCH);
                return matcher ? call(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString(O));
            }, function(string) {
                var rx = anObject(this);
                var S = toString(string);
                var res = maybeCallNative(nativeMatch, rx, S);
                if (res.done) return res.value;
                if (!rx.global) return regExpExec(rx, S);
                var fullUnicode = rx.unicode;
                rx.lastIndex = 0;
                var A = [];
                var n = 0;
                var result;
                while ((result = regExpExec(rx, S)) !== null) {
                    var matchStr = toString(result[0]);
                    A[n] = matchStr;
                    if (matchStr === "") rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
                    n++;
                }
                return n === 0 ? null : A;
            } ];
        }));
    },
    191: (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var apply = __webpack_require__(9524);
        var call = __webpack_require__(5798);
        var uncurryThis = __webpack_require__(8407);
        var fixRegExpWellKnownSymbolLogic = __webpack_require__(6641);
        var fails = __webpack_require__(5536);
        var anObject = __webpack_require__(6092);
        var isCallable = __webpack_require__(6214);
        var isNullOrUndefined = __webpack_require__(2412);
        var toIntegerOrInfinity = __webpack_require__(6878);
        var toLength = __webpack_require__(7925);
        var toString = __webpack_require__(9540);
        var requireObjectCoercible = __webpack_require__(6283);
        var advanceStringIndex = __webpack_require__(5428);
        var getMethod = __webpack_require__(7851);
        var getSubstitution = __webpack_require__(9083);
        var regExpExec = __webpack_require__(9199);
        var wellKnownSymbol = __webpack_require__(8292);
        var REPLACE = wellKnownSymbol("replace");
        var max = Math.max;
        var min = Math.min;
        var concat = uncurryThis([].concat);
        var push = uncurryThis([].push);
        var stringIndexOf = uncurryThis("".indexOf);
        var stringSlice = uncurryThis("".slice);
        var maybeToString = function(it) {
            return it === void 0 ? it : String(it);
        };
        var REPLACE_KEEPS_$0 = function() {
            return "a".replace(/./, "$0") === "$0";
        }();
        var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = function() {
            if (/./[REPLACE]) return /./[REPLACE]("a", "$0") === "";
            return false;
        }();
        var REPLACE_SUPPORTS_NAMED_GROUPS = !fails((function() {
            var re = /./;
            re.exec = function() {
                var result = [];
                result.groups = {
                    a: "7"
                };
                return result;
            };
            return "".replace(re, "$<a>") !== "7";
        }));
        fixRegExpWellKnownSymbolLogic("replace", (function(_, nativeReplace, maybeCallNative) {
            var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? "$" : "$0";
            return [ function replace(searchValue, replaceValue) {
                var O = requireObjectCoercible(this);
                var replacer = isNullOrUndefined(searchValue) ? void 0 : getMethod(searchValue, REPLACE);
                return replacer ? call(replacer, searchValue, O, replaceValue) : call(nativeReplace, toString(O), searchValue, replaceValue);
            }, function(string, replaceValue) {
                var rx = anObject(this);
                var S = toString(string);
                if (typeof replaceValue == "string" && stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 && stringIndexOf(replaceValue, "$<") === -1) {
                    var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
                    if (res.done) return res.value;
                }
                var functionalReplace = isCallable(replaceValue);
                if (!functionalReplace) replaceValue = toString(replaceValue);
                var global = rx.global;
                var fullUnicode;
                if (global) {
                    fullUnicode = rx.unicode;
                    rx.lastIndex = 0;
                }
                var results = [];
                var result;
                while (true) {
                    result = regExpExec(rx, S);
                    if (result === null) break;
                    push(results, result);
                    if (!global) break;
                    var matchStr = toString(result[0]);
                    if (matchStr === "") rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
                }
                var accumulatedResult = "";
                var nextSourcePosition = 0;
                for (var i = 0; i < results.length; i++) {
                    result = results[i];
                    var matched = toString(result[0]);
                    var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
                    var captures = [];
                    var replacement;
                    for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
                    var namedCaptures = result.groups;
                    if (functionalReplace) {
                        var replacerArgs = concat([ matched ], captures, position, S);
                        if (namedCaptures !== void 0) push(replacerArgs, namedCaptures);
                        replacement = toString(apply(replaceValue, void 0, replacerArgs));
                    } else replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
                    if (position >= nextSourcePosition) {
                        accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
                        nextSourcePosition = position + matched.length;
                    }
                }
                return accumulatedResult + stringSlice(S, nextSourcePosition);
            } ];
        }), !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);
    },
    9903: (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var call = __webpack_require__(5798);
        var uncurryThis = __webpack_require__(8407);
        var fixRegExpWellKnownSymbolLogic = __webpack_require__(6641);
        var anObject = __webpack_require__(6092);
        var isNullOrUndefined = __webpack_require__(2412);
        var requireObjectCoercible = __webpack_require__(6283);
        var speciesConstructor = __webpack_require__(814);
        var advanceStringIndex = __webpack_require__(5428);
        var toLength = __webpack_require__(7925);
        var toString = __webpack_require__(9540);
        var getMethod = __webpack_require__(7851);
        var regExpExec = __webpack_require__(9199);
        var stickyHelpers = __webpack_require__(9906);
        var fails = __webpack_require__(5536);
        var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
        var MAX_UINT32 = 4294967295;
        var min = Math.min;
        var push = uncurryThis([].push);
        var stringSlice = uncurryThis("".slice);
        var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails((function() {
            var re = /(?:)/;
            var originalExec = re.exec;
            re.exec = function() {
                return originalExec.apply(this, arguments);
            };
            var result = "ab".split(re);
            return result.length !== 2 || result[0] !== "a" || result[1] !== "b";
        }));
        var BUGGY = "abbc".split(/(b)*/)[1] === "c" || "test".split(/(?:)/, -1).length !== 4 || "ab".split(/(?:ab)*/).length !== 2 || ".".split(/(.?)(.?)/).length !== 4 || ".".split(/()()/).length > 1 || "".split(/.?/).length;
        fixRegExpWellKnownSymbolLogic("split", (function(SPLIT, nativeSplit, maybeCallNative) {
            var internalSplit = "0".split(void 0, 0).length ? function(separator, limit) {
                return separator === void 0 && limit === 0 ? [] : call(nativeSplit, this, separator, limit);
            } : nativeSplit;
            return [ function split(separator, limit) {
                var O = requireObjectCoercible(this);
                var splitter = isNullOrUndefined(separator) ? void 0 : getMethod(separator, SPLIT);
                return splitter ? call(splitter, separator, O, limit) : call(internalSplit, toString(O), separator, limit);
            }, function(string, limit) {
                var rx = anObject(this);
                var S = toString(string);
                if (!BUGGY) {
                    var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);
                    if (res.done) return res.value;
                }
                var C = speciesConstructor(rx, RegExp);
                var unicodeMatching = rx.unicode;
                var flags = (rx.ignoreCase ? "i" : "") + (rx.multiline ? "m" : "") + (rx.unicode ? "u" : "") + (UNSUPPORTED_Y ? "g" : "y");
                var splitter = new C(UNSUPPORTED_Y ? "^(?:" + rx.source + ")" : rx, flags);
                var lim = limit === void 0 ? MAX_UINT32 : limit >>> 0;
                if (lim === 0) return [];
                if (S.length === 0) return regExpExec(splitter, S) === null ? [ S ] : [];
                var p = 0;
                var q = 0;
                var A = [];
                while (q < S.length) {
                    splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
                    var z = regExpExec(splitter, UNSUPPORTED_Y ? stringSlice(S, q) : S);
                    var e;
                    if (z === null || (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p) q = advanceStringIndex(S, q, unicodeMatching); else {
                        push(A, stringSlice(S, p, q));
                        if (A.length === lim) return A;
                        for (var i = 1; i <= z.length - 1; i++) {
                            push(A, z[i]);
                            if (A.length === lim) return A;
                        }
                        q = p = e;
                    }
                }
                push(A, stringSlice(S, p));
                return A;
            } ];
        }), BUGGY || !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);
    },
    7471: (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var $ = __webpack_require__(2679);
        var uncurryThis = __webpack_require__(5013);
        var getOwnPropertyDescriptor = __webpack_require__(290).f;
        var toLength = __webpack_require__(7925);
        var toString = __webpack_require__(9540);
        var notARegExp = __webpack_require__(6582);
        var requireObjectCoercible = __webpack_require__(6283);
        var correctIsRegExpLogic = __webpack_require__(1979);
        var IS_PURE = __webpack_require__(572);
        var stringSlice = uncurryThis("".slice);
        var min = Math.min;
        var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic("startsWith");
        var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function() {
            var descriptor = getOwnPropertyDescriptor(String.prototype, "startsWith");
            return descriptor && !descriptor.writable;
        }();
        $({
            target: "String",
            proto: true,
            forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC
        }, {
            startsWith: function startsWith(searchString) {
                var that = toString(requireObjectCoercible(this));
                notARegExp(searchString);
                var index = toLength(min(arguments.length > 1 ? arguments[1] : void 0, that.length));
                var search = toString(searchString);
                return stringSlice(that, index, index + search.length) === search;
            }
        });
    },
    283: (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var $ = __webpack_require__(2679);
        var $trim = __webpack_require__(9405).trim;
        var forcedStringTrimMethod = __webpack_require__(6991);
        $({
            target: "String",
            proto: true,
            forced: forcedStringTrimMethod("trim")
        }, {
            trim: function trim() {
                return $trim(this);
            }
        });
    },
    620: (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var global = __webpack_require__(6750);
        var DOMIterables = __webpack_require__(8379);
        var DOMTokenListPrototype = __webpack_require__(337);
        var ArrayIteratorMethods = __webpack_require__(7495);
        var createNonEnumerableProperty = __webpack_require__(6590);
        var setToStringTag = __webpack_require__(5996);
        var wellKnownSymbol = __webpack_require__(8292);
        var ITERATOR = wellKnownSymbol("iterator");
        var ArrayValues = ArrayIteratorMethods.values;
        var handlePrototype = function(CollectionPrototype, COLLECTION_NAME) {
            if (CollectionPrototype) {
                if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
                    createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
                } catch (error) {
                    CollectionPrototype[ITERATOR] = ArrayValues;
                }
                setToStringTag(CollectionPrototype, COLLECTION_NAME, true);
                if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
                    createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
                } catch (error) {
                    CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
                }
            }
        };
        for (var COLLECTION_NAME in DOMIterables) handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype, COLLECTION_NAME);
        handlePrototype(DOMTokenListPrototype, "DOMTokenList");
    },
    661: (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
            AElement: () => AElement,
            AnimateColorElement: () => AnimateColorElement,
            AnimateElement: () => AnimateElement,
            AnimateTransformElement: () => AnimateTransformElement,
            BoundingBox: () => BoundingBox,
            CB1: () => CB1,
            CB2: () => CB2,
            CB3: () => CB3,
            CB4: () => CB4,
            Canvg: () => Canvg,
            CircleElement: () => CircleElement,
            ClipPathElement: () => ClipPathElement,
            DefsElement: () => DefsElement,
            DescElement: () => DescElement,
            Document: () => Document,
            Element: () => Element,
            EllipseElement: () => EllipseElement,
            FeColorMatrixElement: () => FeColorMatrixElement,
            FeCompositeElement: () => FeCompositeElement,
            FeDropShadowElement: () => FeDropShadowElement,
            FeGaussianBlurElement: () => FeGaussianBlurElement,
            FeMorphologyElement: () => FeMorphologyElement,
            FilterElement: () => FilterElement,
            Font: () => Font,
            FontElement: () => FontElement,
            FontFaceElement: () => FontFaceElement,
            GElement: () => GElement,
            GlyphElement: () => GlyphElement,
            GradientElement: () => GradientElement,
            ImageElement: () => ImageElement,
            LineElement: () => LineElement,
            LinearGradientElement: () => LinearGradientElement,
            MarkerElement: () => MarkerElement,
            MaskElement: () => MaskElement,
            Matrix: () => Matrix,
            MissingGlyphElement: () => MissingGlyphElement,
            Mouse: () => Mouse,
            PSEUDO_ZERO: () => PSEUDO_ZERO,
            Parser: () => Parser,
            PathElement: () => PathElement,
            PathParser: () => PathParser,
            PatternElement: () => PatternElement,
            Point: () => Point,
            PolygonElement: () => PolygonElement,
            PolylineElement: () => PolylineElement,
            Property: () => Property,
            QB1: () => QB1,
            QB2: () => QB2,
            QB3: () => QB3,
            RadialGradientElement: () => RadialGradientElement,
            RectElement: () => RectElement,
            RenderedElement: () => RenderedElement,
            Rotate: () => Rotate,
            SVGElement: () => SVGElement,
            SVGFontLoader: () => SVGFontLoader,
            Scale: () => Scale,
            Screen: () => Screen,
            Skew: () => Skew,
            SkewX: () => SkewX,
            SkewY: () => SkewY,
            StopElement: () => StopElement,
            StyleElement: () => StyleElement,
            SymbolElement: () => SymbolElement,
            TRefElement: () => TRefElement,
            TSpanElement: () => TSpanElement,
            TextElement: () => TextElement,
            TextPathElement: () => TextPathElement,
            TitleElement: () => TitleElement,
            Transform: () => Transform,
            Translate: () => Translate,
            UnknownElement: () => UnknownElement,
            UseElement: () => UseElement,
            ViewPort: () => ViewPort,
            compressSpaces: () => compressSpaces,
            default: () => Canvg,
            getSelectorSpecificity: () => getSelectorSpecificity,
            normalizeAttributeName: () => normalizeAttributeName,
            normalizeColor: () => normalizeColor,
            parseExternalUrl: () => parseExternalUrl,
            presets: () => index,
            toNumbers: () => toNumbers,
            trimLeft: () => trimLeft,
            trimRight: () => trimRight,
            vectorMagnitude: () => vectorMagnitude,
            vectorsAngle: () => vectorsAngle,
            vectorsRatio: () => vectorsRatio
        });
        __webpack_require__(4151);
        function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
            try {
                var info = gen[key](arg);
                var value = info.value;
            } catch (error) {
                reject(error);
                return;
            }
            if (info.done) resolve(value); else Promise.resolve(value).then(_next, _throw);
        }
        function _asyncToGenerator(fn) {
            return function() {
                var self = this, args = arguments;
                return new Promise((function(resolve, reject) {
                    var gen = fn.apply(self, args);
                    function _next(value) {
                        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
                    }
                    function _throw(err) {
                        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
                    }
                    _next(void 0);
                }));
            };
        }
        __webpack_require__(3018);
        __webpack_require__(191);
        __webpack_require__(7471);
        __webpack_require__(7495);
        __webpack_require__(620);
        var esm_typeof = __webpack_require__(2284);
        function toPrimitive(t, r) {
            if ("object" != (0, esm_typeof.A)(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var i = e.call(t, r || "default");
                if ("object" != (0, esm_typeof.A)(i)) return i;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === r ? String : Number)(t);
        }
        function toPropertyKey(t) {
            var i = toPrimitive(t, "string");
            return "symbol" == (0, esm_typeof.A)(i) ? i : i + "";
        }
        function _defineProperty(obj, key, value) {
            key = toPropertyKey(key);
            if (key in obj) Object.defineProperty(obj, key, {
                value,
                enumerable: true,
                configurable: true,
                writable: true
            }); else obj[key] = value;
            return obj;
        }
        __webpack_require__(3751);
        __webpack_require__(4010);
        __webpack_require__(9903);
        var raf = __webpack_require__(3146);
        __webpack_require__(283);
        var rgbcolor = __webpack_require__(2855);
        __webpack_require__(635);
        __webpack_require__(9958);
        __webpack_require__(4491);
        /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
        var t = function(r, e) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(t, r) {
                t.__proto__ = r;
            } || function(t, r) {
                for (var e in r) Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e]);
            })(r, e);
        };
        function r(r, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
            function i() {
                this.constructor = r;
            }
            t(r, e), r.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, 
            new i);
        }
        function e(t) {
            var r = "";
            Array.isArray(t) || (t = [ t ]);
            for (var e = 0; e < t.length; e++) {
                var i = t[e];
                if (i.type === _.CLOSE_PATH) r += "z"; else if (i.type === _.HORIZ_LINE_TO) r += (i.relative ? "h" : "H") + i.x; else if (i.type === _.VERT_LINE_TO) r += (i.relative ? "v" : "V") + i.y; else if (i.type === _.MOVE_TO) r += (i.relative ? "m" : "M") + i.x + " " + i.y; else if (i.type === _.LINE_TO) r += (i.relative ? "l" : "L") + i.x + " " + i.y; else if (i.type === _.CURVE_TO) r += (i.relative ? "c" : "C") + i.x1 + " " + i.y1 + " " + i.x2 + " " + i.y2 + " " + i.x + " " + i.y; else if (i.type === _.SMOOTH_CURVE_TO) r += (i.relative ? "s" : "S") + i.x2 + " " + i.y2 + " " + i.x + " " + i.y; else if (i.type === _.QUAD_TO) r += (i.relative ? "q" : "Q") + i.x1 + " " + i.y1 + " " + i.x + " " + i.y; else if (i.type === _.SMOOTH_QUAD_TO) r += (i.relative ? "t" : "T") + i.x + " " + i.y; else {
                    if (i.type !== _.ARC) throw new Error('Unexpected command type "' + i.type + '" at index ' + e + ".");
                    r += (i.relative ? "a" : "A") + i.rX + " " + i.rY + " " + i.xRot + " " + +i.lArcFlag + " " + +i.sweepFlag + " " + i.x + " " + i.y;
                }
            }
            return r;
        }
        function i(t, r) {
            var e = t[0], i = t[1];
            return [ e * Math.cos(r) - i * Math.sin(r), e * Math.sin(r) + i * Math.cos(r) ];
        }
        function a() {
            for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
            for (var e = 0; e < t.length; e++) if ("number" != typeof t[e]) throw new Error("assertNumbers arguments[" + e + "] is not a number. " + typeof t[e] + " == typeof " + t[e]);
            return !0;
        }
        var n = Math.PI;
        function o(t, r, e) {
            t.lArcFlag = 0 === t.lArcFlag ? 0 : 1, t.sweepFlag = 0 === t.sweepFlag ? 0 : 1;
            var a = t.rX, o = t.rY, s = t.x, u = t.y;
            a = Math.abs(t.rX), o = Math.abs(t.rY);
            var h = i([ (r - s) / 2, (e - u) / 2 ], -t.xRot / 180 * n), c = h[0], y = h[1], p = Math.pow(c, 2) / Math.pow(a, 2) + Math.pow(y, 2) / Math.pow(o, 2);
            1 < p && (a *= Math.sqrt(p), o *= Math.sqrt(p)), t.rX = a, t.rY = o;
            var m = Math.pow(a, 2) * Math.pow(y, 2) + Math.pow(o, 2) * Math.pow(c, 2), O = (t.lArcFlag !== t.sweepFlag ? 1 : -1) * Math.sqrt(Math.max(0, (Math.pow(a, 2) * Math.pow(o, 2) - m) / m)), l = a * y / o * O, T = -o * c / a * O, v = i([ l, T ], t.xRot / 180 * n);
            t.cX = v[0] + (r + s) / 2, t.cY = v[1] + (e + u) / 2, t.phi1 = Math.atan2((y - T) / o, (c - l) / a), 
            t.phi2 = Math.atan2((-y - T) / o, (-c - l) / a), 0 === t.sweepFlag && t.phi2 > t.phi1 && (t.phi2 -= 2 * n), 
            1 === t.sweepFlag && t.phi2 < t.phi1 && (t.phi2 += 2 * n), t.phi1 *= 180 / n, t.phi2 *= 180 / n;
        }
        function s(t, r, e) {
            a(t, r, e);
            var i = t * t + r * r - e * e;
            if (0 > i) return [];
            if (0 === i) return [ [ t * e / (t * t + r * r), r * e / (t * t + r * r) ] ];
            var n = Math.sqrt(i);
            return [ [ (t * e + r * n) / (t * t + r * r), (r * e - t * n) / (t * t + r * r) ], [ (t * e - r * n) / (t * t + r * r), (r * e + t * n) / (t * t + r * r) ] ];
        }
        var u, h = Math.PI / 180;
        function c(t, r, e) {
            return (1 - e) * t + e * r;
        }
        function y(t, r, e, i) {
            return t + Math.cos(i / 180 * n) * r + Math.sin(i / 180 * n) * e;
        }
        function p(t, r, e, i) {
            var a = 1e-6, n = r - t, o = e - r, s = 3 * n + 3 * (i - e) - 6 * o, u = 6 * (o - n), h = 3 * n;
            return Math.abs(s) < a ? [ -h / u ] : function(t, r, e) {
                void 0 === e && (e = 1e-6);
                var i = t * t / 4 - r;
                if (i < -e) return [];
                if (i <= e) return [ -t / 2 ];
                var a = Math.sqrt(i);
                return [ -t / 2 - a, -t / 2 + a ];
            }(u / s, h / s, a);
        }
        function m(t, r, e, i, a) {
            var n = 1 - a;
            return t * (n * n * n) + r * (3 * n * n * a) + e * (3 * n * a * a) + i * (a * a * a);
        }
        !function(t) {
            function r() {
                return u((function(t, r, e) {
                    return t.relative && (void 0 !== t.x1 && (t.x1 += r), void 0 !== t.y1 && (t.y1 += e), 
                    void 0 !== t.x2 && (t.x2 += r), void 0 !== t.y2 && (t.y2 += e), void 0 !== t.x && (t.x += r), 
                    void 0 !== t.y && (t.y += e), t.relative = !1), t;
                }));
            }
            function e() {
                var t = NaN, r = NaN, e = NaN, i = NaN;
                return u((function(a, n, o) {
                    return a.type & _.SMOOTH_CURVE_TO && (a.type = _.CURVE_TO, t = isNaN(t) ? n : t, 
                    r = isNaN(r) ? o : r, a.x1 = a.relative ? n - t : 2 * n - t, a.y1 = a.relative ? o - r : 2 * o - r), 
                    a.type & _.CURVE_TO ? (t = a.relative ? n + a.x2 : a.x2, r = a.relative ? o + a.y2 : a.y2) : (t = NaN, 
                    r = NaN), a.type & _.SMOOTH_QUAD_TO && (a.type = _.QUAD_TO, e = isNaN(e) ? n : e, 
                    i = isNaN(i) ? o : i, a.x1 = a.relative ? n - e : 2 * n - e, a.y1 = a.relative ? o - i : 2 * o - i), 
                    a.type & _.QUAD_TO ? (e = a.relative ? n + a.x1 : a.x1, i = a.relative ? o + a.y1 : a.y1) : (e = NaN, 
                    i = NaN), a;
                }));
            }
            function n() {
                var t = NaN, r = NaN;
                return u((function(e, i, a) {
                    if (e.type & _.SMOOTH_QUAD_TO && (e.type = _.QUAD_TO, t = isNaN(t) ? i : t, r = isNaN(r) ? a : r, 
                    e.x1 = e.relative ? i - t : 2 * i - t, e.y1 = e.relative ? a - r : 2 * a - r), e.type & _.QUAD_TO) {
                        t = e.relative ? i + e.x1 : e.x1, r = e.relative ? a + e.y1 : e.y1;
                        var n = e.x1, o = e.y1;
                        e.type = _.CURVE_TO, e.x1 = ((e.relative ? 0 : i) + 2 * n) / 3, e.y1 = ((e.relative ? 0 : a) + 2 * o) / 3, 
                        e.x2 = (e.x + 2 * n) / 3, e.y2 = (e.y + 2 * o) / 3;
                    } else t = NaN, r = NaN;
                    return e;
                }));
            }
            function u(t) {
                var r = 0, e = 0, i = NaN, a = NaN;
                return function(n) {
                    if (isNaN(i) && !(n.type & _.MOVE_TO)) throw new Error("path must start with moveto");
                    var o = t(n, r, e, i, a);
                    return n.type & _.CLOSE_PATH && (r = i, e = a), void 0 !== n.x && (r = n.relative ? r + n.x : n.x), 
                    void 0 !== n.y && (e = n.relative ? e + n.y : n.y), n.type & _.MOVE_TO && (i = r, 
                    a = e), o;
                };
            }
            function O(t, r, e, i, n, o) {
                return a(t, r, e, i, n, o), u((function(a, s, u, h) {
                    var c = a.x1, y = a.x2, p = a.relative && !isNaN(h), m = void 0 !== a.x ? a.x : p ? 0 : s, O = void 0 !== a.y ? a.y : p ? 0 : u;
                    function l(t) {
                        return t * t;
                    }
                    a.type & _.HORIZ_LINE_TO && 0 !== r && (a.type = _.LINE_TO, a.y = a.relative ? 0 : u), 
                    a.type & _.VERT_LINE_TO && 0 !== e && (a.type = _.LINE_TO, a.x = a.relative ? 0 : s), 
                    void 0 !== a.x && (a.x = a.x * t + O * e + (p ? 0 : n)), void 0 !== a.y && (a.y = m * r + a.y * i + (p ? 0 : o)), 
                    void 0 !== a.x1 && (a.x1 = a.x1 * t + a.y1 * e + (p ? 0 : n)), void 0 !== a.y1 && (a.y1 = c * r + a.y1 * i + (p ? 0 : o)), 
                    void 0 !== a.x2 && (a.x2 = a.x2 * t + a.y2 * e + (p ? 0 : n)), void 0 !== a.y2 && (a.y2 = y * r + a.y2 * i + (p ? 0 : o));
                    var T = t * i - r * e;
                    if (void 0 !== a.xRot && (1 !== t || 0 !== r || 0 !== e || 1 !== i)) if (0 === T) delete a.rX, 
                    delete a.rY, delete a.xRot, delete a.lArcFlag, delete a.sweepFlag, a.type = _.LINE_TO; else {
                        var v = a.xRot * Math.PI / 180, f = Math.sin(v), N = Math.cos(v), x = 1 / l(a.rX), d = 1 / l(a.rY), E = l(N) * x + l(f) * d, A = 2 * f * N * (x - d), C = l(f) * x + l(N) * d, M = E * i * i - A * r * i + C * r * r, R = A * (t * i + r * e) - 2 * (E * e * i + C * t * r), g = E * e * e - A * t * e + C * t * t, I = (Math.atan2(R, M - g) + Math.PI) % Math.PI / 2, S = Math.sin(I), L = Math.cos(I);
                        a.rX = Math.abs(T) / Math.sqrt(M * l(L) + R * S * L + g * l(S)), a.rY = Math.abs(T) / Math.sqrt(M * l(S) - R * S * L + g * l(L)), 
                        a.xRot = 180 * I / Math.PI;
                    }
                    return void 0 !== a.sweepFlag && 0 > T && (a.sweepFlag = +!a.sweepFlag), a;
                }));
            }
            function l() {
                return function(t) {
                    var r = {};
                    for (var e in t) r[e] = t[e];
                    return r;
                };
            }
            t.ROUND = function(t) {
                function r(r) {
                    return Math.round(r * t) / t;
                }
                return void 0 === t && (t = 1e13), a(t), function(t) {
                    return void 0 !== t.x1 && (t.x1 = r(t.x1)), void 0 !== t.y1 && (t.y1 = r(t.y1)), 
                    void 0 !== t.x2 && (t.x2 = r(t.x2)), void 0 !== t.y2 && (t.y2 = r(t.y2)), void 0 !== t.x && (t.x = r(t.x)), 
                    void 0 !== t.y && (t.y = r(t.y)), void 0 !== t.rX && (t.rX = r(t.rX)), void 0 !== t.rY && (t.rY = r(t.rY)), 
                    t;
                };
            }, t.TO_ABS = r, t.TO_REL = function() {
                return u((function(t, r, e) {
                    return t.relative || (void 0 !== t.x1 && (t.x1 -= r), void 0 !== t.y1 && (t.y1 -= e), 
                    void 0 !== t.x2 && (t.x2 -= r), void 0 !== t.y2 && (t.y2 -= e), void 0 !== t.x && (t.x -= r), 
                    void 0 !== t.y && (t.y -= e), t.relative = !0), t;
                }));
            }, t.NORMALIZE_HVZ = function(t, r, e) {
                return void 0 === t && (t = !0), void 0 === r && (r = !0), void 0 === e && (e = !0), 
                u((function(i, a, n, o, s) {
                    if (isNaN(o) && !(i.type & _.MOVE_TO)) throw new Error("path must start with moveto");
                    return r && i.type & _.HORIZ_LINE_TO && (i.type = _.LINE_TO, i.y = i.relative ? 0 : n), 
                    e && i.type & _.VERT_LINE_TO && (i.type = _.LINE_TO, i.x = i.relative ? 0 : a), 
                    t && i.type & _.CLOSE_PATH && (i.type = _.LINE_TO, i.x = i.relative ? o - a : o, 
                    i.y = i.relative ? s - n : s), i.type & _.ARC && (0 === i.rX || 0 === i.rY) && (i.type = _.LINE_TO, 
                    delete i.rX, delete i.rY, delete i.xRot, delete i.lArcFlag, delete i.sweepFlag), 
                    i;
                }));
            }, t.NORMALIZE_ST = e, t.QT_TO_C = n, t.INFO = u, t.SANITIZE = function(t) {
                void 0 === t && (t = 0), a(t);
                var r = NaN, e = NaN, i = NaN, n = NaN;
                return u((function(a, o, s, u, h) {
                    var c = Math.abs, y = !1, p = 0, m = 0;
                    if (a.type & _.SMOOTH_CURVE_TO && (p = isNaN(r) ? 0 : o - r, m = isNaN(e) ? 0 : s - e), 
                    a.type & (_.CURVE_TO | _.SMOOTH_CURVE_TO) ? (r = a.relative ? o + a.x2 : a.x2, e = a.relative ? s + a.y2 : a.y2) : (r = NaN, 
                    e = NaN), a.type & _.SMOOTH_QUAD_TO ? (i = isNaN(i) ? o : 2 * o - i, n = isNaN(n) ? s : 2 * s - n) : a.type & _.QUAD_TO ? (i = a.relative ? o + a.x1 : a.x1, 
                    n = a.relative ? s + a.y1 : a.y2) : (i = NaN, n = NaN), a.type & _.LINE_COMMANDS || a.type & _.ARC && (0 === a.rX || 0 === a.rY || !a.lArcFlag) || a.type & _.CURVE_TO || a.type & _.SMOOTH_CURVE_TO || a.type & _.QUAD_TO || a.type & _.SMOOTH_QUAD_TO) {
                        var O = void 0 === a.x ? 0 : a.relative ? a.x : a.x - o, l = void 0 === a.y ? 0 : a.relative ? a.y : a.y - s;
                        p = isNaN(i) ? void 0 === a.x1 ? p : a.relative ? a.x : a.x1 - o : i - o, m = isNaN(n) ? void 0 === a.y1 ? m : a.relative ? a.y : a.y1 - s : n - s;
                        var T = void 0 === a.x2 ? 0 : a.relative ? a.x : a.x2 - o, v = void 0 === a.y2 ? 0 : a.relative ? a.y : a.y2 - s;
                        c(O) <= t && c(l) <= t && c(p) <= t && c(m) <= t && c(T) <= t && c(v) <= t && (y = !0);
                    }
                    return a.type & _.CLOSE_PATH && c(o - u) <= t && c(s - h) <= t && (y = !0), y ? [] : a;
                }));
            }, t.MATRIX = O, t.ROTATE = function(t, r, e) {
                void 0 === r && (r = 0), void 0 === e && (e = 0), a(t, r, e);
                var i = Math.sin(t), n = Math.cos(t);
                return O(n, i, -i, n, r - r * n + e * i, e - r * i - e * n);
            }, t.TRANSLATE = function(t, r) {
                return void 0 === r && (r = 0), a(t, r), O(1, 0, 0, 1, t, r);
            }, t.SCALE = function(t, r) {
                return void 0 === r && (r = t), a(t, r), O(t, 0, 0, r, 0, 0);
            }, t.SKEW_X = function(t) {
                return a(t), O(1, 0, Math.atan(t), 1, 0, 0);
            }, t.SKEW_Y = function(t) {
                return a(t), O(1, Math.atan(t), 0, 1, 0, 0);
            }, t.X_AXIS_SYMMETRY = function(t) {
                return void 0 === t && (t = 0), a(t), O(-1, 0, 0, 1, t, 0);
            }, t.Y_AXIS_SYMMETRY = function(t) {
                return void 0 === t && (t = 0), a(t), O(1, 0, 0, -1, 0, t);
            }, t.A_TO_C = function() {
                return u((function(t, r, e) {
                    return _.ARC === t.type ? function(t, r, e) {
                        var a, n, s, u;
                        t.cX || o(t, r, e);
                        for (var y = Math.min(t.phi1, t.phi2), p = Math.max(t.phi1, t.phi2) - y, m = Math.ceil(p / 90), O = new Array(m), l = r, T = e, v = 0; v < m; v++) {
                            var f = c(t.phi1, t.phi2, v / m), N = c(t.phi1, t.phi2, (v + 1) / m), x = N - f, d = 4 / 3 * Math.tan(x * h / 4), E = [ Math.cos(f * h) - d * Math.sin(f * h), Math.sin(f * h) + d * Math.cos(f * h) ], A = E[0], C = E[1], M = [ Math.cos(N * h), Math.sin(N * h) ], R = M[0], g = M[1], I = [ R + d * Math.sin(N * h), g - d * Math.cos(N * h) ], S = I[0], L = I[1];
                            O[v] = {
                                relative: t.relative,
                                type: _.CURVE_TO
                            };
                            var H = function(r, e) {
                                var a = i([ r * t.rX, e * t.rY ], t.xRot), n = a[0], o = a[1];
                                return [ t.cX + n, t.cY + o ];
                            };
                            a = H(A, C), O[v].x1 = a[0], O[v].y1 = a[1], n = H(S, L), O[v].x2 = n[0], O[v].y2 = n[1], 
                            s = H(R, g), O[v].x = s[0], O[v].y = s[1], t.relative && (O[v].x1 -= l, O[v].y1 -= T, 
                            O[v].x2 -= l, O[v].y2 -= T, O[v].x -= l, O[v].y -= T), l = (u = [ O[v].x, O[v].y ])[0], 
                            T = u[1];
                        }
                        return O;
                    }(t, t.relative ? 0 : r, t.relative ? 0 : e) : t;
                }));
            }, t.ANNOTATE_ARCS = function() {
                return u((function(t, r, e) {
                    return t.relative && (r = 0, e = 0), _.ARC === t.type && o(t, r, e), t;
                }));
            }, t.CLONE = l, t.CALCULATE_BOUNDS = function() {
                var t = function(t) {
                    var r = {};
                    for (var e in t) r[e] = t[e];
                    return r;
                }, i = r(), a = n(), h = e(), c = u((function(r, e, n) {
                    var u = h(a(i(t(r))));
                    function O(t) {
                        t > c.maxX && (c.maxX = t), t < c.minX && (c.minX = t);
                    }
                    function l(t) {
                        t > c.maxY && (c.maxY = t), t < c.minY && (c.minY = t);
                    }
                    if (u.type & _.DRAWING_COMMANDS && (O(e), l(n)), u.type & _.HORIZ_LINE_TO && O(u.x), 
                    u.type & _.VERT_LINE_TO && l(u.y), u.type & _.LINE_TO && (O(u.x), l(u.y)), u.type & _.CURVE_TO) {
                        O(u.x), l(u.y);
                        for (var T = 0, v = p(e, u.x1, u.x2, u.x); T < v.length; T++) 0 < (w = v[T]) && 1 > w && O(m(e, u.x1, u.x2, u.x, w));
                        for (var f = 0, N = p(n, u.y1, u.y2, u.y); f < N.length; f++) 0 < (w = N[f]) && 1 > w && l(m(n, u.y1, u.y2, u.y, w));
                    }
                    if (u.type & _.ARC) {
                        O(u.x), l(u.y), o(u, e, n);
                        for (var x = u.xRot / 180 * Math.PI, d = Math.cos(x) * u.rX, E = Math.sin(x) * u.rX, A = -Math.sin(x) * u.rY, C = Math.cos(x) * u.rY, M = u.phi1 < u.phi2 ? [ u.phi1, u.phi2 ] : -180 > u.phi2 ? [ u.phi2 + 360, u.phi1 + 360 ] : [ u.phi2, u.phi1 ], R = M[0], g = M[1], I = function(t) {
                            var r = t[0], e = t[1], i = 180 * Math.atan2(e, r) / Math.PI;
                            return i < R ? i + 360 : i;
                        }, S = 0, L = s(A, -d, 0).map(I); S < L.length; S++) (w = L[S]) > R && w < g && O(y(u.cX, d, A, w));
                        for (var H = 0, U = s(C, -E, 0).map(I); H < U.length; H++) {
                            var w;
                            (w = U[H]) > R && w < g && l(y(u.cY, E, C, w));
                        }
                    }
                    return r;
                }));
                return c.minX = 1 / 0, c.maxX = -1 / 0, c.minY = 1 / 0, c.maxY = -1 / 0, c;
            };
        }(u || (u = {}));
        var O, l = function() {
            function t() {}
            return t.prototype.round = function(t) {
                return this.transform(u.ROUND(t));
            }, t.prototype.toAbs = function() {
                return this.transform(u.TO_ABS());
            }, t.prototype.toRel = function() {
                return this.transform(u.TO_REL());
            }, t.prototype.normalizeHVZ = function(t, r, e) {
                return this.transform(u.NORMALIZE_HVZ(t, r, e));
            }, t.prototype.normalizeST = function() {
                return this.transform(u.NORMALIZE_ST());
            }, t.prototype.qtToC = function() {
                return this.transform(u.QT_TO_C());
            }, t.prototype.aToC = function() {
                return this.transform(u.A_TO_C());
            }, t.prototype.sanitize = function(t) {
                return this.transform(u.SANITIZE(t));
            }, t.prototype.translate = function(t, r) {
                return this.transform(u.TRANSLATE(t, r));
            }, t.prototype.scale = function(t, r) {
                return this.transform(u.SCALE(t, r));
            }, t.prototype.rotate = function(t, r, e) {
                return this.transform(u.ROTATE(t, r, e));
            }, t.prototype.matrix = function(t, r, e, i, a, n) {
                return this.transform(u.MATRIX(t, r, e, i, a, n));
            }, t.prototype.skewX = function(t) {
                return this.transform(u.SKEW_X(t));
            }, t.prototype.skewY = function(t) {
                return this.transform(u.SKEW_Y(t));
            }, t.prototype.xSymmetry = function(t) {
                return this.transform(u.X_AXIS_SYMMETRY(t));
            }, t.prototype.ySymmetry = function(t) {
                return this.transform(u.Y_AXIS_SYMMETRY(t));
            }, t.prototype.annotateArcs = function() {
                return this.transform(u.ANNOTATE_ARCS());
            }, t;
        }(), T = function(t) {
            return " " === t || "\t" === t || "\r" === t || "\n" === t;
        }, v = function(t) {
            return "0".charCodeAt(0) <= t.charCodeAt(0) && t.charCodeAt(0) <= "9".charCodeAt(0);
        }, f = function(t) {
            function e() {
                var r = t.call(this) || this;
                return r.curNumber = "", r.curCommandType = -1, r.curCommandRelative = !1, r.canParseCommandOrComma = !0, 
                r.curNumberHasExp = !1, r.curNumberHasExpDigits = !1, r.curNumberHasDecimal = !1, 
                r.curArgs = [], r;
            }
            return r(e, t), e.prototype.finish = function(t) {
                if (void 0 === t && (t = []), this.parse(" ", t), 0 !== this.curArgs.length || !this.canParseCommandOrComma) throw new SyntaxError("Unterminated command at the path end.");
                return t;
            }, e.prototype.parse = function(t, r) {
                var e = this;
                void 0 === r && (r = []);
                for (var i = function(t) {
                    r.push(t), e.curArgs.length = 0, e.canParseCommandOrComma = !0;
                }, a = 0; a < t.length; a++) {
                    var n = t[a], o = !(this.curCommandType !== _.ARC || 3 !== this.curArgs.length && 4 !== this.curArgs.length || 1 !== this.curNumber.length || "0" !== this.curNumber && "1" !== this.curNumber), s = v(n) && ("0" === this.curNumber && "0" === n || o);
                    if (!v(n) || s) if ("e" !== n && "E" !== n) if ("-" !== n && "+" !== n || !this.curNumberHasExp || this.curNumberHasExpDigits) if ("." !== n || this.curNumberHasExp || this.curNumberHasDecimal || o) {
                        if (this.curNumber && -1 !== this.curCommandType) {
                            var u = Number(this.curNumber);
                            if (isNaN(u)) throw new SyntaxError("Invalid number ending at " + a);
                            if (this.curCommandType === _.ARC) if (0 === this.curArgs.length || 1 === this.curArgs.length) {
                                if (0 > u) throw new SyntaxError('Expected positive number, got "' + u + '" at index "' + a + '"');
                            } else if ((3 === this.curArgs.length || 4 === this.curArgs.length) && "0" !== this.curNumber && "1" !== this.curNumber) throw new SyntaxError('Expected a flag, got "' + this.curNumber + '" at index "' + a + '"');
                            this.curArgs.push(u), this.curArgs.length === N[this.curCommandType] && (_.HORIZ_LINE_TO === this.curCommandType ? i({
                                type: _.HORIZ_LINE_TO,
                                relative: this.curCommandRelative,
                                x: u
                            }) : _.VERT_LINE_TO === this.curCommandType ? i({
                                type: _.VERT_LINE_TO,
                                relative: this.curCommandRelative,
                                y: u
                            }) : this.curCommandType === _.MOVE_TO || this.curCommandType === _.LINE_TO || this.curCommandType === _.SMOOTH_QUAD_TO ? (i({
                                type: this.curCommandType,
                                relative: this.curCommandRelative,
                                x: this.curArgs[0],
                                y: this.curArgs[1]
                            }), _.MOVE_TO === this.curCommandType && (this.curCommandType = _.LINE_TO)) : this.curCommandType === _.CURVE_TO ? i({
                                type: _.CURVE_TO,
                                relative: this.curCommandRelative,
                                x1: this.curArgs[0],
                                y1: this.curArgs[1],
                                x2: this.curArgs[2],
                                y2: this.curArgs[3],
                                x: this.curArgs[4],
                                y: this.curArgs[5]
                            }) : this.curCommandType === _.SMOOTH_CURVE_TO ? i({
                                type: _.SMOOTH_CURVE_TO,
                                relative: this.curCommandRelative,
                                x2: this.curArgs[0],
                                y2: this.curArgs[1],
                                x: this.curArgs[2],
                                y: this.curArgs[3]
                            }) : this.curCommandType === _.QUAD_TO ? i({
                                type: _.QUAD_TO,
                                relative: this.curCommandRelative,
                                x1: this.curArgs[0],
                                y1: this.curArgs[1],
                                x: this.curArgs[2],
                                y: this.curArgs[3]
                            }) : this.curCommandType === _.ARC && i({
                                type: _.ARC,
                                relative: this.curCommandRelative,
                                rX: this.curArgs[0],
                                rY: this.curArgs[1],
                                xRot: this.curArgs[2],
                                lArcFlag: this.curArgs[3],
                                sweepFlag: this.curArgs[4],
                                x: this.curArgs[5],
                                y: this.curArgs[6]
                            })), this.curNumber = "", this.curNumberHasExpDigits = !1, this.curNumberHasExp = !1, 
                            this.curNumberHasDecimal = !1, this.canParseCommandOrComma = !0;
                        }
                        if (!T(n)) if ("," === n && this.canParseCommandOrComma) this.canParseCommandOrComma = !1; else if ("+" !== n && "-" !== n && "." !== n) if (s) this.curNumber = n, 
                        this.curNumberHasDecimal = !1; else {
                            if (0 !== this.curArgs.length) throw new SyntaxError("Unterminated command at index " + a + ".");
                            if (!this.canParseCommandOrComma) throw new SyntaxError('Unexpected character "' + n + '" at index ' + a + ". Command cannot follow comma");
                            if (this.canParseCommandOrComma = !1, "z" !== n && "Z" !== n) if ("h" === n || "H" === n) this.curCommandType = _.HORIZ_LINE_TO, 
                            this.curCommandRelative = "h" === n; else if ("v" === n || "V" === n) this.curCommandType = _.VERT_LINE_TO, 
                            this.curCommandRelative = "v" === n; else if ("m" === n || "M" === n) this.curCommandType = _.MOVE_TO, 
                            this.curCommandRelative = "m" === n; else if ("l" === n || "L" === n) this.curCommandType = _.LINE_TO, 
                            this.curCommandRelative = "l" === n; else if ("c" === n || "C" === n) this.curCommandType = _.CURVE_TO, 
                            this.curCommandRelative = "c" === n; else if ("s" === n || "S" === n) this.curCommandType = _.SMOOTH_CURVE_TO, 
                            this.curCommandRelative = "s" === n; else if ("q" === n || "Q" === n) this.curCommandType = _.QUAD_TO, 
                            this.curCommandRelative = "q" === n; else if ("t" === n || "T" === n) this.curCommandType = _.SMOOTH_QUAD_TO, 
                            this.curCommandRelative = "t" === n; else {
                                if ("a" !== n && "A" !== n) throw new SyntaxError('Unexpected character "' + n + '" at index ' + a + ".");
                                this.curCommandType = _.ARC, this.curCommandRelative = "a" === n;
                            } else r.push({
                                type: _.CLOSE_PATH
                            }), this.canParseCommandOrComma = !0, this.curCommandType = -1;
                        } else this.curNumber = n, this.curNumberHasDecimal = "." === n;
                    } else this.curNumber += n, this.curNumberHasDecimal = !0; else this.curNumber += n; else this.curNumber += n, 
                    this.curNumberHasExp = !0; else this.curNumber += n, this.curNumberHasExpDigits = this.curNumberHasExp;
                }
                return r;
            }, e.prototype.transform = function(t) {
                return Object.create(this, {
                    parse: {
                        value: function(r, e) {
                            void 0 === e && (e = []);
                            for (var i = 0, a = Object.getPrototypeOf(this).parse.call(this, r); i < a.length; i++) {
                                var n = a[i], o = t(n);
                                Array.isArray(o) ? e.push.apply(e, o) : e.push(o);
                            }
                            return e;
                        }
                    }
                });
            }, e;
        }(l), _ = function(t) {
            function i(r) {
                var e = t.call(this) || this;
                return e.commands = "string" == typeof r ? i.parse(r) : r, e;
            }
            return r(i, t), i.prototype.encode = function() {
                return i.encode(this.commands);
            }, i.prototype.getBounds = function() {
                var t = u.CALCULATE_BOUNDS();
                return this.transform(t), t;
            }, i.prototype.transform = function(t) {
                for (var r = [], e = 0, i = this.commands; e < i.length; e++) {
                    var a = t(i[e]);
                    Array.isArray(a) ? r.push.apply(r, a) : r.push(a);
                }
                return this.commands = r, this;
            }, i.encode = function(t) {
                return e(t);
            }, i.parse = function(t) {
                var r = new f, e = [];
                return r.parse(t, e), r.finish(e), e;
            }, i.CLOSE_PATH = 1, i.MOVE_TO = 2, i.HORIZ_LINE_TO = 4, i.VERT_LINE_TO = 8, i.LINE_TO = 16, 
            i.CURVE_TO = 32, i.SMOOTH_CURVE_TO = 64, i.QUAD_TO = 128, i.SMOOTH_QUAD_TO = 256, 
            i.ARC = 512, i.LINE_COMMANDS = i.LINE_TO | i.HORIZ_LINE_TO | i.VERT_LINE_TO, i.DRAWING_COMMANDS = i.HORIZ_LINE_TO | i.VERT_LINE_TO | i.LINE_TO | i.CURVE_TO | i.SMOOTH_CURVE_TO | i.QUAD_TO | i.SMOOTH_QUAD_TO | i.ARC, 
            i;
        }(l), N = ((O = {})[_.MOVE_TO] = 2, O[_.LINE_TO] = 2, O[_.HORIZ_LINE_TO] = 1, O[_.VERT_LINE_TO] = 1, 
        O[_.CLOSE_PATH] = 0, O[_.QUAD_TO] = 4, O[_.SMOOTH_QUAD_TO] = 2, O[_.CURVE_TO] = 6, 
        O[_.SMOOTH_CURVE_TO] = 4, O[_.ARC] = 7, O);
        __webpack_require__(6286);
        function _typeof(obj) {
            "@babel/helpers - typeof";
            if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function(obj) {
                return typeof obj;
            }; else _typeof = function(obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            return _typeof(obj);
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        var mulTable = [ 512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259 ];
        var shgTable = [ 9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24 ];
        function getImageDataFromCanvas(canvas, topX, topY, width, height) {
            if (typeof canvas === "string") canvas = document.getElementById(canvas);
            if (!canvas || _typeof(canvas) !== "object" || !("getContext" in canvas)) throw new TypeError("Expecting canvas with `getContext` method " + "in processCanvasRGB(A) calls!");
            var context = canvas.getContext("2d");
            try {
                return context.getImageData(topX, topY, width, height);
            } catch (e) {
                throw new Error("unable to access image data: " + e);
            }
        }
        function processCanvasRGBA(canvas, topX, topY, width, height, radius) {
            if (isNaN(radius) || radius < 1) return;
            radius |= 0;
            var imageData = getImageDataFromCanvas(canvas, topX, topY, width, height);
            imageData = processImageDataRGBA(imageData, topX, topY, width, height, radius);
            canvas.getContext("2d").putImageData(imageData, topX, topY);
        }
        function processImageDataRGBA(imageData, topX, topY, width, height, radius) {
            var pixels = imageData.data;
            var div = 2 * radius + 1;
            var widthMinus1 = width - 1;
            var heightMinus1 = height - 1;
            var radiusPlus1 = radius + 1;
            var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;
            var stackStart = new BlurStack;
            var stack = stackStart;
            var stackEnd;
            for (var i = 1; i < div; i++) {
                stack = stack.next = new BlurStack;
                if (i === radiusPlus1) stackEnd = stack;
            }
            stack.next = stackStart;
            var stackIn = null, stackOut = null, yw = 0, yi = 0;
            var mulSum = mulTable[radius];
            var shgSum = shgTable[radius];
            for (var y = 0; y < height; y++) {
                stack = stackStart;
                var pr = pixels[yi], pg = pixels[yi + 1], pb = pixels[yi + 2], pa = pixels[yi + 3];
                for (var _i = 0; _i < radiusPlus1; _i++) {
                    stack.r = pr;
                    stack.g = pg;
                    stack.b = pb;
                    stack.a = pa;
                    stack = stack.next;
                }
                var rInSum = 0, gInSum = 0, bInSum = 0, aInSum = 0, rOutSum = radiusPlus1 * pr, gOutSum = radiusPlus1 * pg, bOutSum = radiusPlus1 * pb, aOutSum = radiusPlus1 * pa, rSum = sumFactor * pr, gSum = sumFactor * pg, bSum = sumFactor * pb, aSum = sumFactor * pa;
                for (var _i2 = 1; _i2 < radiusPlus1; _i2++) {
                    var p = yi + ((widthMinus1 < _i2 ? widthMinus1 : _i2) << 2);
                    var r = pixels[p], g = pixels[p + 1], b = pixels[p + 2], a = pixels[p + 3];
                    var rbs = radiusPlus1 - _i2;
                    rSum += (stack.r = r) * rbs;
                    gSum += (stack.g = g) * rbs;
                    bSum += (stack.b = b) * rbs;
                    aSum += (stack.a = a) * rbs;
                    rInSum += r;
                    gInSum += g;
                    bInSum += b;
                    aInSum += a;
                    stack = stack.next;
                }
                stackIn = stackStart;
                stackOut = stackEnd;
                for (var x = 0; x < width; x++) {
                    var paInitial = aSum * mulSum >>> shgSum;
                    pixels[yi + 3] = paInitial;
                    if (paInitial !== 0) {
                        var _a2 = 255 / paInitial;
                        pixels[yi] = (rSum * mulSum >>> shgSum) * _a2;
                        pixels[yi + 1] = (gSum * mulSum >>> shgSum) * _a2;
                        pixels[yi + 2] = (bSum * mulSum >>> shgSum) * _a2;
                    } else pixels[yi] = pixels[yi + 1] = pixels[yi + 2] = 0;
                    rSum -= rOutSum;
                    gSum -= gOutSum;
                    bSum -= bOutSum;
                    aSum -= aOutSum;
                    rOutSum -= stackIn.r;
                    gOutSum -= stackIn.g;
                    bOutSum -= stackIn.b;
                    aOutSum -= stackIn.a;
                    var _p = x + radius + 1;
                    _p = yw + (_p < widthMinus1 ? _p : widthMinus1) << 2;
                    rInSum += stackIn.r = pixels[_p];
                    gInSum += stackIn.g = pixels[_p + 1];
                    bInSum += stackIn.b = pixels[_p + 2];
                    aInSum += stackIn.a = pixels[_p + 3];
                    rSum += rInSum;
                    gSum += gInSum;
                    bSum += bInSum;
                    aSum += aInSum;
                    stackIn = stackIn.next;
                    var _stackOut = stackOut, _r = _stackOut.r, _g = _stackOut.g, _b = _stackOut.b, _a = _stackOut.a;
                    rOutSum += _r;
                    gOutSum += _g;
                    bOutSum += _b;
                    aOutSum += _a;
                    rInSum -= _r;
                    gInSum -= _g;
                    bInSum -= _b;
                    aInSum -= _a;
                    stackOut = stackOut.next;
                    yi += 4;
                }
                yw += width;
            }
            for (var _x = 0; _x < width; _x++) {
                yi = _x << 2;
                var _pr = pixels[yi], _pg = pixels[yi + 1], _pb = pixels[yi + 2], _pa = pixels[yi + 3], _rOutSum = radiusPlus1 * _pr, _gOutSum = radiusPlus1 * _pg, _bOutSum = radiusPlus1 * _pb, _aOutSum = radiusPlus1 * _pa, _rSum = sumFactor * _pr, _gSum = sumFactor * _pg, _bSum = sumFactor * _pb, _aSum = sumFactor * _pa;
                stack = stackStart;
                for (var _i3 = 0; _i3 < radiusPlus1; _i3++) {
                    stack.r = _pr;
                    stack.g = _pg;
                    stack.b = _pb;
                    stack.a = _pa;
                    stack = stack.next;
                }
                var yp = width;
                var _gInSum = 0, _bInSum = 0, _aInSum = 0, _rInSum = 0;
                for (var _i4 = 1; _i4 <= radius; _i4++) {
                    yi = yp + _x << 2;
                    var _rbs = radiusPlus1 - _i4;
                    _rSum += (stack.r = _pr = pixels[yi]) * _rbs;
                    _gSum += (stack.g = _pg = pixels[yi + 1]) * _rbs;
                    _bSum += (stack.b = _pb = pixels[yi + 2]) * _rbs;
                    _aSum += (stack.a = _pa = pixels[yi + 3]) * _rbs;
                    _rInSum += _pr;
                    _gInSum += _pg;
                    _bInSum += _pb;
                    _aInSum += _pa;
                    stack = stack.next;
                    if (_i4 < heightMinus1) yp += width;
                }
                yi = _x;
                stackIn = stackStart;
                stackOut = stackEnd;
                for (var _y = 0; _y < height; _y++) {
                    var _p2 = yi << 2;
                    pixels[_p2 + 3] = _pa = _aSum * mulSum >>> shgSum;
                    if (_pa > 0) {
                        _pa = 255 / _pa;
                        pixels[_p2] = (_rSum * mulSum >>> shgSum) * _pa;
                        pixels[_p2 + 1] = (_gSum * mulSum >>> shgSum) * _pa;
                        pixels[_p2 + 2] = (_bSum * mulSum >>> shgSum) * _pa;
                    } else pixels[_p2] = pixels[_p2 + 1] = pixels[_p2 + 2] = 0;
                    _rSum -= _rOutSum;
                    _gSum -= _gOutSum;
                    _bSum -= _bOutSum;
                    _aSum -= _aOutSum;
                    _rOutSum -= stackIn.r;
                    _gOutSum -= stackIn.g;
                    _bOutSum -= stackIn.b;
                    _aOutSum -= stackIn.a;
                    _p2 = _x + ((_p2 = _y + radiusPlus1) < heightMinus1 ? _p2 : heightMinus1) * width << 2;
                    _rSum += _rInSum += stackIn.r = pixels[_p2];
                    _gSum += _gInSum += stackIn.g = pixels[_p2 + 1];
                    _bSum += _bInSum += stackIn.b = pixels[_p2 + 2];
                    _aSum += _aInSum += stackIn.a = pixels[_p2 + 3];
                    stackIn = stackIn.next;
                    _rOutSum += _pr = stackOut.r;
                    _gOutSum += _pg = stackOut.g;
                    _bOutSum += _pb = stackOut.b;
                    _aOutSum += _pa = stackOut.a;
                    _rInSum -= _pr;
                    _gInSum -= _pg;
                    _bInSum -= _pb;
                    _aInSum -= _pa;
                    stackOut = stackOut.next;
                    yi += width;
                }
            }
            return imageData;
        }
        var BlurStack = function BlurStack() {
            _classCallCheck(this, BlurStack);
            this.r = 0;
            this.g = 0;
            this.b = 0;
            this.a = 0;
            this.next = null;
        };
        function offscreen() {
            var {DOMParser: DOMParserFallback} = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            var preset = {
                window: null,
                ignoreAnimation: true,
                ignoreMouse: true,
                DOMParser: DOMParserFallback,
                createCanvas(width, height) {
                    return new OffscreenCanvas(width, height);
                },
                createImage(url) {
                    return _asyncToGenerator((function*() {
                        var response = yield fetch(url);
                        var blob = yield response.blob();
                        var img = yield createImageBitmap(blob);
                        return img;
                    }))();
                }
            };
            if (typeof DOMParser !== "undefined" || typeof DOMParserFallback === "undefined") Reflect.deleteProperty(preset, "DOMParser");
            return preset;
        }
        function node(_ref) {
            var {DOMParser, canvas, fetch} = _ref;
            return {
                window: null,
                ignoreAnimation: true,
                ignoreMouse: true,
                DOMParser,
                fetch,
                createCanvas: canvas.createCanvas,
                createImage: canvas.loadImage
            };
        }
        var index = Object.freeze({
            __proto__: null,
            offscreen,
            node
        });
        function compressSpaces(str) {
            return str.replace(/(?!\u3000)\s+/gm, " ");
        }
        function trimLeft(str) {
            return str.replace(/^[\n \t]+/, "");
        }
        function trimRight(str) {
            return str.replace(/[\n \t]+$/, "");
        }
        function toNumbers(str) {
            var matches = (str || "").match(/-?(\d+(?:\.\d*(?:[eE][+-]?\d+)?)?|\.\d+)(?=\D|$)/gm) || [];
            return matches.map(parseFloat);
        }
        var allUppercase = /^[A-Z-]+$/;
        function normalizeAttributeName(name) {
            if (allUppercase.test(name)) return name.toLowerCase();
            return name;
        }
        function parseExternalUrl(url) {
            var urlMatch = /url\(('([^']+)'|"([^"]+)"|([^'")]+))\)/.exec(url) || [];
            return urlMatch[2] || urlMatch[3] || urlMatch[4];
        }
        function normalizeColor(color) {
            if (!color.startsWith("rgb")) return color;
            var rgbParts = 3;
            var normalizedColor = color.replace(/\d+(\.\d+)?/g, ((num, isFloat) => rgbParts-- && isFloat ? String(Math.round(parseFloat(num))) : num));
            return normalizedColor;
        }
        var attributeRegex = /(\[[^\]]+\])/g;
        var idRegex = /(#[^\s+>~.[:]+)/g;
        var classRegex = /(\.[^\s+>~.[:]+)/g;
        var pseudoElementRegex = /(::[^\s+>~.[:]+|:first-line|:first-letter|:before|:after)/gi;
        var pseudoClassWithBracketsRegex = /(:[\w-]+\([^)]*\))/gi;
        var pseudoClassRegex = /(:[^\s+>~.[:]+)/g;
        var elementRegex = /([^\s+>~.[:]+)/g;
        function findSelectorMatch(selector, regex) {
            var matches = regex.exec(selector);
            if (!matches) return [ selector, 0 ];
            return [ selector.replace(regex, " "), matches.length ];
        }
        function getSelectorSpecificity(selector) {
            var specificity = [ 0, 0, 0 ];
            var currentSelector = selector.replace(/:not\(([^)]*)\)/g, "     $1 ").replace(/{[\s\S]*/gm, " ");
            var delta = 0;
            [currentSelector, delta] = findSelectorMatch(currentSelector, attributeRegex);
            specificity[1] += delta;
            [currentSelector, delta] = findSelectorMatch(currentSelector, idRegex);
            specificity[0] += delta;
            [currentSelector, delta] = findSelectorMatch(currentSelector, classRegex);
            specificity[1] += delta;
            [currentSelector, delta] = findSelectorMatch(currentSelector, pseudoElementRegex);
            specificity[2] += delta;
            [currentSelector, delta] = findSelectorMatch(currentSelector, pseudoClassWithBracketsRegex);
            specificity[1] += delta;
            [currentSelector, delta] = findSelectorMatch(currentSelector, pseudoClassRegex);
            specificity[1] += delta;
            currentSelector = currentSelector.replace(/[*\s+>~]/g, " ").replace(/[#.]/g, " ");
            [currentSelector, delta] = findSelectorMatch(currentSelector, elementRegex);
            specificity[2] += delta;
            return specificity.join("");
        }
        var PSEUDO_ZERO = 1e-8;
        function vectorMagnitude(v) {
            return Math.sqrt(Math.pow(v[0], 2) + Math.pow(v[1], 2));
        }
        function vectorsRatio(u, v) {
            return (u[0] * v[0] + u[1] * v[1]) / (vectorMagnitude(u) * vectorMagnitude(v));
        }
        function vectorsAngle(u, v) {
            return (u[0] * v[1] < u[1] * v[0] ? -1 : 1) * Math.acos(vectorsRatio(u, v));
        }
        function CB1(t) {
            return t * t * t;
        }
        function CB2(t) {
            return 3 * t * t * (1 - t);
        }
        function CB3(t) {
            return 3 * t * (1 - t) * (1 - t);
        }
        function CB4(t) {
            return (1 - t) * (1 - t) * (1 - t);
        }
        function QB1(t) {
            return t * t;
        }
        function QB2(t) {
            return 2 * t * (1 - t);
        }
        function QB3(t) {
            return (1 - t) * (1 - t);
        }
        class Property {
            constructor(document, name, value) {
                this.document = document;
                this.name = name;
                this.value = value;
                this.isNormalizedColor = false;
            }
            static empty(document) {
                return new Property(document, "EMPTY", "");
            }
            split() {
                var separator = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : " ";
                var {document, name} = this;
                return compressSpaces(this.getString()).trim().split(separator).map((value => new Property(document, name, value)));
            }
            hasValue(zeroIsValue) {
                var {value} = this;
                return value !== null && value !== "" && (zeroIsValue || value !== 0) && typeof value !== "undefined";
            }
            isString(regexp) {
                var {value} = this;
                var result = typeof value === "string";
                if (!result || !regexp) return result;
                return regexp.test(value);
            }
            isUrlDefinition() {
                return this.isString(/^url\(/);
            }
            isPixels() {
                if (!this.hasValue()) return false;
                var asString = this.getString();
                switch (true) {
                  case asString.endsWith("px"):
                  case /^[0-9]+$/.test(asString):
                    return true;

                  default:
                    return false;
                }
            }
            setValue(value) {
                this.value = value;
                return this;
            }
            getValue(def) {
                if (typeof def === "undefined" || this.hasValue()) return this.value;
                return def;
            }
            getNumber(def) {
                if (!this.hasValue()) {
                    if (typeof def === "undefined") return 0;
                    return parseFloat(def);
                }
                var {value} = this;
                var n = parseFloat(value);
                if (this.isString(/%$/)) n /= 100;
                return n;
            }
            getString(def) {
                if (typeof def === "undefined" || this.hasValue()) return typeof this.value === "undefined" ? "" : String(this.value);
                return String(def);
            }
            getColor(def) {
                var color = this.getString(def);
                if (this.isNormalizedColor) return color;
                this.isNormalizedColor = true;
                color = normalizeColor(color);
                this.value = color;
                return color;
            }
            getDpi() {
                return 96;
            }
            getRem() {
                return this.document.rootEmSize;
            }
            getEm() {
                return this.document.emSize;
            }
            getUnits() {
                return this.getString().replace(/[0-9.-]/g, "");
            }
            getPixels(axisOrIsFontSize) {
                var processPercent = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                if (!this.hasValue()) return 0;
                var [axis, isFontSize] = typeof axisOrIsFontSize === "boolean" ? [ void 0, axisOrIsFontSize ] : [ axisOrIsFontSize ];
                var {viewPort} = this.document.screen;
                switch (true) {
                  case this.isString(/vmin$/):
                    return this.getNumber() / 100 * Math.min(viewPort.computeSize("x"), viewPort.computeSize("y"));

                  case this.isString(/vmax$/):
                    return this.getNumber() / 100 * Math.max(viewPort.computeSize("x"), viewPort.computeSize("y"));

                  case this.isString(/vw$/):
                    return this.getNumber() / 100 * viewPort.computeSize("x");

                  case this.isString(/vh$/):
                    return this.getNumber() / 100 * viewPort.computeSize("y");

                  case this.isString(/rem$/):
                    return this.getNumber() * this.getRem();

                  case this.isString(/em$/):
                    return this.getNumber() * this.getEm();

                  case this.isString(/ex$/):
                    return this.getNumber() * this.getEm() / 2;

                  case this.isString(/px$/):
                    return this.getNumber();

                  case this.isString(/pt$/):
                    return this.getNumber() * this.getDpi() * (1 / 72);

                  case this.isString(/pc$/):
                    return this.getNumber() * 15;

                  case this.isString(/cm$/):
                    return this.getNumber() * this.getDpi() / 2.54;

                  case this.isString(/mm$/):
                    return this.getNumber() * this.getDpi() / 25.4;

                  case this.isString(/in$/):
                    return this.getNumber() * this.getDpi();

                  case this.isString(/%$/) && isFontSize:
                    return this.getNumber() * this.getEm();

                  case this.isString(/%$/):
                    return this.getNumber() * viewPort.computeSize(axis);

                  default:
                    var n = this.getNumber();
                    if (processPercent && n < 1) return n * viewPort.computeSize(axis);
                    return n;
                }
            }
            getMilliseconds() {
                if (!this.hasValue()) return 0;
                if (this.isString(/ms$/)) return this.getNumber();
                return this.getNumber() * 1e3;
            }
            getRadians() {
                if (!this.hasValue()) return 0;
                switch (true) {
                  case this.isString(/deg$/):
                    return this.getNumber() * (Math.PI / 180);

                  case this.isString(/grad$/):
                    return this.getNumber() * (Math.PI / 200);

                  case this.isString(/rad$/):
                    return this.getNumber();

                  default:
                    return this.getNumber() * (Math.PI / 180);
                }
            }
            getDefinition() {
                var asString = this.getString();
                var name = /#([^)'"]+)/.exec(asString);
                if (name) name = name[1];
                if (!name) name = asString;
                return this.document.definitions[name];
            }
            getFillStyleDefinition(element, opacity) {
                var def = this.getDefinition();
                if (!def) return null;
                if (typeof def.createGradient === "function") return def.createGradient(this.document.ctx, element, opacity);
                if (typeof def.createPattern === "function") {
                    if (def.getHrefAttribute().hasValue()) {
                        var patternTransform = def.getAttribute("patternTransform");
                        def = def.getHrefAttribute().getDefinition();
                        if (patternTransform.hasValue()) def.getAttribute("patternTransform", true).setValue(patternTransform.value);
                    }
                    return def.createPattern(this.document.ctx, element, opacity);
                }
                return null;
            }
            getTextBaseline() {
                if (!this.hasValue()) return null;
                return Property.textBaselineMapping[this.getString()];
            }
            addOpacity(opacity) {
                var value = this.getColor();
                var len = value.length;
                var commas = 0;
                for (var i = 0; i < len; i++) {
                    if (value[i] === ",") commas++;
                    if (commas === 3) break;
                }
                if (opacity.hasValue() && this.isString() && commas !== 3) {
                    var color = new rgbcolor(value);
                    if (color.ok) {
                        color.alpha = opacity.getNumber();
                        value = color.toRGBA();
                    }
                }
                return new Property(this.document, this.name, value);
            }
        }
        Property.textBaselineMapping = {
            baseline: "alphabetic",
            "before-edge": "top",
            "text-before-edge": "top",
            middle: "middle",
            central: "middle",
            "after-edge": "bottom",
            "text-after-edge": "bottom",
            ideographic: "ideographic",
            alphabetic: "alphabetic",
            hanging: "hanging",
            mathematical: "alphabetic"
        };
        class ViewPort {
            constructor() {
                this.viewPorts = [];
            }
            clear() {
                this.viewPorts = [];
            }
            setCurrent(width, height) {
                this.viewPorts.push({
                    width,
                    height
                });
            }
            removeCurrent() {
                this.viewPorts.pop();
            }
            getCurrent() {
                var {viewPorts} = this;
                return viewPorts[viewPorts.length - 1];
            }
            get width() {
                return this.getCurrent().width;
            }
            get height() {
                return this.getCurrent().height;
            }
            computeSize(d) {
                if (typeof d === "number") return d;
                if (d === "x") return this.width;
                if (d === "y") return this.height;
                return Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2)) / Math.sqrt(2);
            }
        }
        class Point {
            constructor(x, y) {
                this.x = x;
                this.y = y;
            }
            static parse(point) {
                var defaultValue = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
                var [x = defaultValue, y = defaultValue] = toNumbers(point);
                return new Point(x, y);
            }
            static parseScale(scale) {
                var defaultValue = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
                var [x = defaultValue, y = x] = toNumbers(scale);
                return new Point(x, y);
            }
            static parsePath(path) {
                var points = toNumbers(path);
                var len = points.length;
                var pathPoints = [];
                for (var i = 0; i < len; i += 2) pathPoints.push(new Point(points[i], points[i + 1]));
                return pathPoints;
            }
            angleTo(point) {
                return Math.atan2(point.y - this.y, point.x - this.x);
            }
            applyTransform(transform) {
                var {x, y} = this;
                var xp = x * transform[0] + y * transform[2] + transform[4];
                var yp = x * transform[1] + y * transform[3] + transform[5];
                this.x = xp;
                this.y = yp;
            }
        }
        class Mouse {
            constructor(screen) {
                this.screen = screen;
                this.working = false;
                this.events = [];
                this.eventElements = [];
                this.onClick = this.onClick.bind(this);
                this.onMouseMove = this.onMouseMove.bind(this);
            }
            isWorking() {
                return this.working;
            }
            start() {
                if (this.working) return;
                var {screen, onClick, onMouseMove} = this;
                var canvas = screen.ctx.canvas;
                canvas.onclick = onClick;
                canvas.onmousemove = onMouseMove;
                this.working = true;
            }
            stop() {
                if (!this.working) return;
                var canvas = this.screen.ctx.canvas;
                this.working = false;
                canvas.onclick = null;
                canvas.onmousemove = null;
            }
            hasEvents() {
                return this.working && this.events.length > 0;
            }
            runEvents() {
                if (!this.working) return;
                var {screen: document, events, eventElements} = this;
                var {style} = document.ctx.canvas;
                if (style) style.cursor = "";
                events.forEach(((_ref, i) => {
                    var {run} = _ref;
                    var element = eventElements[i];
                    while (element) {
                        run(element);
                        element = element.parent;
                    }
                }));
                this.events = [];
                this.eventElements = [];
            }
            checkPath(element, ctx) {
                if (!this.working || !ctx) return;
                var {events, eventElements} = this;
                events.forEach(((_ref2, i) => {
                    var {x, y} = _ref2;
                    if (!eventElements[i] && ctx.isPointInPath && ctx.isPointInPath(x, y)) eventElements[i] = element;
                }));
            }
            checkBoundingBox(element, boundingBox) {
                if (!this.working || !boundingBox) return;
                var {events, eventElements} = this;
                events.forEach(((_ref3, i) => {
                    var {x, y} = _ref3;
                    if (!eventElements[i] && boundingBox.isPointInBox(x, y)) eventElements[i] = element;
                }));
            }
            mapXY(x, y) {
                var {window, ctx} = this.screen;
                var point = new Point(x, y);
                var element = ctx.canvas;
                while (element) {
                    point.x -= element.offsetLeft;
                    point.y -= element.offsetTop;
                    element = element.offsetParent;
                }
                if (window.scrollX) point.x += window.scrollX;
                if (window.scrollY) point.y += window.scrollY;
                return point;
            }
            onClick(event) {
                var {x, y} = this.mapXY(event.clientX, event.clientY);
                this.events.push({
                    type: "onclick",
                    x,
                    y,
                    run(eventTarget) {
                        if (eventTarget.onClick) eventTarget.onClick();
                    }
                });
            }
            onMouseMove(event) {
                var {x, y} = this.mapXY(event.clientX, event.clientY);
                this.events.push({
                    type: "onmousemove",
                    x,
                    y,
                    run(eventTarget) {
                        if (eventTarget.onMouseMove) eventTarget.onMouseMove();
                    }
                });
            }
        }
        var defaultWindow = typeof window !== "undefined" ? window : null;
        var defaultFetch$1 = typeof fetch !== "undefined" ? fetch.bind(void 0) : null;
        class Screen {
            constructor(ctx) {
                var {fetch = defaultFetch$1, window = defaultWindow} = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                this.ctx = ctx;
                this.FRAMERATE = 30;
                this.MAX_VIRTUAL_PIXELS = 3e4;
                this.CLIENT_WIDTH = 800;
                this.CLIENT_HEIGHT = 600;
                this.viewPort = new ViewPort;
                this.mouse = new Mouse(this);
                this.animations = [];
                this.waits = [];
                this.frameDuration = 0;
                this.isReadyLock = false;
                this.isFirstRender = true;
                this.intervalId = null;
                this.window = window;
                this.fetch = fetch;
            }
            wait(checker) {
                this.waits.push(checker);
            }
            ready() {
                if (!this.readyPromise) return Promise.resolve();
                return this.readyPromise;
            }
            isReady() {
                if (this.isReadyLock) return true;
                var isReadyLock = this.waits.every((_ => _()));
                if (isReadyLock) {
                    this.waits = [];
                    if (this.resolveReady) this.resolveReady();
                }
                this.isReadyLock = isReadyLock;
                return isReadyLock;
            }
            setDefaults(ctx) {
                ctx.strokeStyle = "rgba(0,0,0,0)";
                ctx.lineCap = "butt";
                ctx.lineJoin = "miter";
                ctx.miterLimit = 4;
            }
            setViewBox(_ref) {
                var {document, ctx, aspectRatio, width, desiredWidth, height, desiredHeight, minX = 0, minY = 0, refX, refY, clip = false, clipX = 0, clipY = 0} = _ref;
                var cleanAspectRatio = compressSpaces(aspectRatio).replace(/^defer\s/, "");
                var [aspectRatioAlign, aspectRatioMeetOrSlice] = cleanAspectRatio.split(" ");
                var align = aspectRatioAlign || "xMidYMid";
                var meetOrSlice = aspectRatioMeetOrSlice || "meet";
                var scaleX = width / desiredWidth;
                var scaleY = height / desiredHeight;
                var scaleMin = Math.min(scaleX, scaleY);
                var scaleMax = Math.max(scaleX, scaleY);
                var finalDesiredWidth = desiredWidth;
                var finalDesiredHeight = desiredHeight;
                if (meetOrSlice === "meet") {
                    finalDesiredWidth *= scaleMin;
                    finalDesiredHeight *= scaleMin;
                }
                if (meetOrSlice === "slice") {
                    finalDesiredWidth *= scaleMax;
                    finalDesiredHeight *= scaleMax;
                }
                var refXProp = new Property(document, "refX", refX);
                var refYProp = new Property(document, "refY", refY);
                var hasRefs = refXProp.hasValue() && refYProp.hasValue();
                if (hasRefs) ctx.translate(-scaleMin * refXProp.getPixels("x"), -scaleMin * refYProp.getPixels("y"));
                if (clip) {
                    var scaledClipX = scaleMin * clipX;
                    var scaledClipY = scaleMin * clipY;
                    ctx.beginPath();
                    ctx.moveTo(scaledClipX, scaledClipY);
                    ctx.lineTo(width, scaledClipY);
                    ctx.lineTo(width, height);
                    ctx.lineTo(scaledClipX, height);
                    ctx.closePath();
                    ctx.clip();
                }
                if (!hasRefs) {
                    var isMeetMinY = meetOrSlice === "meet" && scaleMin === scaleY;
                    var isSliceMaxY = meetOrSlice === "slice" && scaleMax === scaleY;
                    var isMeetMinX = meetOrSlice === "meet" && scaleMin === scaleX;
                    var isSliceMaxX = meetOrSlice === "slice" && scaleMax === scaleX;
                    if (align.startsWith("xMid") && (isMeetMinY || isSliceMaxY)) ctx.translate(width / 2 - finalDesiredWidth / 2, 0);
                    if (align.endsWith("YMid") && (isMeetMinX || isSliceMaxX)) ctx.translate(0, height / 2 - finalDesiredHeight / 2);
                    if (align.startsWith("xMax") && (isMeetMinY || isSliceMaxY)) ctx.translate(width - finalDesiredWidth, 0);
                    if (align.endsWith("YMax") && (isMeetMinX || isSliceMaxX)) ctx.translate(0, height - finalDesiredHeight);
                }
                switch (true) {
                  case align === "none":
                    ctx.scale(scaleX, scaleY);
                    break;

                  case meetOrSlice === "meet":
                    ctx.scale(scaleMin, scaleMin);
                    break;

                  case meetOrSlice === "slice":
                    ctx.scale(scaleMax, scaleMax);
                    break;
                }
                ctx.translate(-minX, -minY);
            }
            start(element) {
                var {enableRedraw = false, ignoreMouse = false, ignoreAnimation = false, ignoreDimensions = false, ignoreClear = false, forceRedraw, scaleWidth, scaleHeight, offsetX, offsetY} = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                var {FRAMERATE, mouse} = this;
                var frameDuration = 1e3 / FRAMERATE;
                this.frameDuration = frameDuration;
                this.readyPromise = new Promise((resolve => {
                    this.resolveReady = resolve;
                }));
                if (this.isReady()) this.render(element, ignoreDimensions, ignoreClear, scaleWidth, scaleHeight, offsetX, offsetY);
                if (!enableRedraw) return;
                var now = Date.now();
                var then = now;
                var delta = 0;
                var tick = () => {
                    now = Date.now();
                    delta = now - then;
                    if (delta >= frameDuration) {
                        then = now - delta % frameDuration;
                        if (this.shouldUpdate(ignoreAnimation, forceRedraw)) {
                            this.render(element, ignoreDimensions, ignoreClear, scaleWidth, scaleHeight, offsetX, offsetY);
                            mouse.runEvents();
                        }
                    }
                    this.intervalId = raf(tick);
                };
                if (!ignoreMouse) mouse.start();
                this.intervalId = raf(tick);
            }
            stop() {
                if (this.intervalId) {
                    raf.cancel(this.intervalId);
                    this.intervalId = null;
                }
                this.mouse.stop();
            }
            shouldUpdate(ignoreAnimation, forceRedraw) {
                if (!ignoreAnimation) {
                    var {frameDuration} = this;
                    var shouldUpdate = this.animations.reduce(((shouldUpdate, animation) => animation.update(frameDuration) || shouldUpdate), false);
                    if (shouldUpdate) return true;
                }
                if (typeof forceRedraw === "function" && forceRedraw()) return true;
                if (!this.isReadyLock && this.isReady()) return true;
                if (this.mouse.hasEvents()) return true;
                return false;
            }
            render(element, ignoreDimensions, ignoreClear, scaleWidth, scaleHeight, offsetX, offsetY) {
                var {CLIENT_WIDTH, CLIENT_HEIGHT, viewPort, ctx, isFirstRender} = this;
                var canvas = ctx.canvas;
                viewPort.clear();
                if (canvas.width && canvas.height) viewPort.setCurrent(canvas.width, canvas.height); else viewPort.setCurrent(CLIENT_WIDTH, CLIENT_HEIGHT);
                var widthStyle = element.getStyle("width");
                var heightStyle = element.getStyle("height");
                if (!ignoreDimensions && (isFirstRender || typeof scaleWidth !== "number" && typeof scaleHeight !== "number")) {
                    if (widthStyle.hasValue()) {
                        canvas.width = widthStyle.getPixels("x");
                        if (canvas.style) canvas.style.width = "".concat(canvas.width, "px");
                    }
                    if (heightStyle.hasValue()) {
                        canvas.height = heightStyle.getPixels("y");
                        if (canvas.style) canvas.style.height = "".concat(canvas.height, "px");
                    }
                }
                var cWidth = canvas.clientWidth || canvas.width;
                var cHeight = canvas.clientHeight || canvas.height;
                if (ignoreDimensions && widthStyle.hasValue() && heightStyle.hasValue()) {
                    cWidth = widthStyle.getPixels("x");
                    cHeight = heightStyle.getPixels("y");
                }
                viewPort.setCurrent(cWidth, cHeight);
                if (typeof offsetX === "number") element.getAttribute("x", true).setValue(offsetX);
                if (typeof offsetY === "number") element.getAttribute("y", true).setValue(offsetY);
                if (typeof scaleWidth === "number" || typeof scaleHeight === "number") {
                    var viewBox = toNumbers(element.getAttribute("viewBox").getString());
                    var xRatio = 0;
                    var yRatio = 0;
                    if (typeof scaleWidth === "number") {
                        var _widthStyle = element.getStyle("width");
                        if (_widthStyle.hasValue()) xRatio = _widthStyle.getPixels("x") / scaleWidth; else if (!isNaN(viewBox[2])) xRatio = viewBox[2] / scaleWidth;
                    }
                    if (typeof scaleHeight === "number") {
                        var _heightStyle = element.getStyle("height");
                        if (_heightStyle.hasValue()) yRatio = _heightStyle.getPixels("y") / scaleHeight; else if (!isNaN(viewBox[3])) yRatio = viewBox[3] / scaleHeight;
                    }
                    if (!xRatio) xRatio = yRatio;
                    if (!yRatio) yRatio = xRatio;
                    element.getAttribute("width", true).setValue(scaleWidth);
                    element.getAttribute("height", true).setValue(scaleHeight);
                    var transformStyle = element.getStyle("transform", true, true);
                    transformStyle.setValue("".concat(transformStyle.getString(), " scale(").concat(1 / xRatio, ", ").concat(1 / yRatio, ")"));
                }
                if (!ignoreClear) ctx.clearRect(0, 0, cWidth, cHeight);
                element.render(ctx);
                if (isFirstRender) this.isFirstRender = false;
            }
        }
        Screen.defaultWindow = defaultWindow;
        Screen.defaultFetch = defaultFetch$1;
        var {defaultFetch} = Screen;
        var DefaultDOMParser = typeof DOMParser !== "undefined" ? DOMParser : null;
        class Parser {
            constructor() {
                var {fetch = defaultFetch, DOMParser = DefaultDOMParser} = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                this.fetch = fetch;
                this.DOMParser = DOMParser;
            }
            parse(resource) {
                var _this = this;
                return _asyncToGenerator((function*() {
                    if (resource.startsWith("<")) return _this.parseFromString(resource);
                    return _this.load(resource);
                }))();
            }
            parseFromString(xml) {
                var parser = new this.DOMParser;
                try {
                    return this.checkDocument(parser.parseFromString(xml, "image/svg+xml"));
                } catch (err) {
                    return this.checkDocument(parser.parseFromString(xml, "text/xml"));
                }
            }
            checkDocument(document) {
                var parserError = document.getElementsByTagName("parsererror")[0];
                if (parserError) throw new Error(parserError.textContent);
                return document;
            }
            load(url) {
                var _this2 = this;
                return _asyncToGenerator((function*() {
                    var response = yield _this2.fetch(url);
                    var xml = yield response.text();
                    return _this2.parseFromString(xml);
                }))();
            }
        }
        class Translate {
            constructor(_, point) {
                this.type = "translate";
                this.point = null;
                this.point = Point.parse(point);
            }
            apply(ctx) {
                var {x, y} = this.point;
                ctx.translate(x || 0, y || 0);
            }
            unapply(ctx) {
                var {x, y} = this.point;
                ctx.translate(-1 * x || 0, -1 * y || 0);
            }
            applyToPoint(point) {
                var {x, y} = this.point;
                point.applyTransform([ 1, 0, 0, 1, x || 0, y || 0 ]);
            }
        }
        class Rotate {
            constructor(document, rotate, transformOrigin) {
                this.type = "rotate";
                this.angle = null;
                this.originX = null;
                this.originY = null;
                this.cx = 0;
                this.cy = 0;
                var numbers = toNumbers(rotate);
                this.angle = new Property(document, "angle", numbers[0]);
                this.originX = transformOrigin[0];
                this.originY = transformOrigin[1];
                this.cx = numbers[1] || 0;
                this.cy = numbers[2] || 0;
            }
            apply(ctx) {
                var {cx, cy, originX, originY, angle} = this;
                var tx = cx + originX.getPixels("x");
                var ty = cy + originY.getPixels("y");
                ctx.translate(tx, ty);
                ctx.rotate(angle.getRadians());
                ctx.translate(-tx, -ty);
            }
            unapply(ctx) {
                var {cx, cy, originX, originY, angle} = this;
                var tx = cx + originX.getPixels("x");
                var ty = cy + originY.getPixels("y");
                ctx.translate(tx, ty);
                ctx.rotate(-1 * angle.getRadians());
                ctx.translate(-tx, -ty);
            }
            applyToPoint(point) {
                var {cx, cy, angle} = this;
                var rad = angle.getRadians();
                point.applyTransform([ 1, 0, 0, 1, cx || 0, cy || 0 ]);
                point.applyTransform([ Math.cos(rad), Math.sin(rad), -Math.sin(rad), Math.cos(rad), 0, 0 ]);
                point.applyTransform([ 1, 0, 0, 1, -cx || 0, -cy || 0 ]);
            }
        }
        class Scale {
            constructor(_, scale, transformOrigin) {
                this.type = "scale";
                this.scale = null;
                this.originX = null;
                this.originY = null;
                var scaleSize = Point.parseScale(scale);
                if (scaleSize.x === 0 || scaleSize.y === 0) {
                    scaleSize.x = PSEUDO_ZERO;
                    scaleSize.y = PSEUDO_ZERO;
                }
                this.scale = scaleSize;
                this.originX = transformOrigin[0];
                this.originY = transformOrigin[1];
            }
            apply(ctx) {
                var {scale: {x, y}, originX, originY} = this;
                var tx = originX.getPixels("x");
                var ty = originY.getPixels("y");
                ctx.translate(tx, ty);
                ctx.scale(x, y || x);
                ctx.translate(-tx, -ty);
            }
            unapply(ctx) {
                var {scale: {x, y}, originX, originY} = this;
                var tx = originX.getPixels("x");
                var ty = originY.getPixels("y");
                ctx.translate(tx, ty);
                ctx.scale(1 / x, 1 / y || x);
                ctx.translate(-tx, -ty);
            }
            applyToPoint(point) {
                var {x, y} = this.scale;
                point.applyTransform([ x || 0, 0, 0, y || 0, 0, 0 ]);
            }
        }
        class Matrix {
            constructor(_, matrix, transformOrigin) {
                this.type = "matrix";
                this.matrix = [];
                this.originX = null;
                this.originY = null;
                this.matrix = toNumbers(matrix);
                this.originX = transformOrigin[0];
                this.originY = transformOrigin[1];
            }
            apply(ctx) {
                var {originX, originY, matrix} = this;
                var tx = originX.getPixels("x");
                var ty = originY.getPixels("y");
                ctx.translate(tx, ty);
                ctx.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
                ctx.translate(-tx, -ty);
            }
            unapply(ctx) {
                var {originX, originY, matrix} = this;
                var a = matrix[0];
                var b = matrix[2];
                var c = matrix[4];
                var d = matrix[1];
                var e = matrix[3];
                var f = matrix[5];
                var g = 0;
                var h = 0;
                var i = 1;
                var det = 1 / (a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g));
                var tx = originX.getPixels("x");
                var ty = originY.getPixels("y");
                ctx.translate(tx, ty);
                ctx.transform(det * (e * i - f * h), det * (f * g - d * i), det * (c * h - b * i), det * (a * i - c * g), det * (b * f - c * e), det * (c * d - a * f));
                ctx.translate(-tx, -ty);
            }
            applyToPoint(point) {
                point.applyTransform(this.matrix);
            }
        }
        class Skew extends Matrix {
            constructor(document, skew, transformOrigin) {
                super(document, skew, transformOrigin);
                this.type = "skew";
                this.angle = null;
                this.angle = new Property(document, "angle", skew);
            }
        }
        class SkewX extends Skew {
            constructor(document, skew, transformOrigin) {
                super(document, skew, transformOrigin);
                this.type = "skewX";
                this.matrix = [ 1, 0, Math.tan(this.angle.getRadians()), 1, 0, 0 ];
            }
        }
        class SkewY extends Skew {
            constructor(document, skew, transformOrigin) {
                super(document, skew, transformOrigin);
                this.type = "skewY";
                this.matrix = [ 1, Math.tan(this.angle.getRadians()), 0, 1, 0, 0 ];
            }
        }
        function parseTransforms(transform) {
            return compressSpaces(transform).trim().replace(/\)([a-zA-Z])/g, ") $1").replace(/\)(\s?,\s?)/g, ") ").split(/\s(?=[a-z])/);
        }
        function parseTransform(transform) {
            var [type, value] = transform.split("(");
            return [ type.trim(), value.trim().replace(")", "") ];
        }
        class Transform {
            constructor(document, transform, transformOrigin) {
                this.document = document;
                this.transforms = [];
                var data = parseTransforms(transform);
                data.forEach((transform => {
                    if (transform === "none") return;
                    var [type, value] = parseTransform(transform);
                    var TransformType = Transform.transformTypes[type];
                    if (typeof TransformType !== "undefined") this.transforms.push(new TransformType(this.document, value, transformOrigin));
                }));
            }
            static fromElement(document, element) {
                var transformStyle = element.getStyle("transform", false, true);
                var [transformOriginXProperty, transformOriginYProperty = transformOriginXProperty] = element.getStyle("transform-origin", false, true).split();
                var transformOrigin = [ transformOriginXProperty, transformOriginYProperty ];
                if (transformStyle.hasValue()) return new Transform(document, transformStyle.getString(), transformOrigin);
                return null;
            }
            apply(ctx) {
                var {transforms} = this;
                var len = transforms.length;
                for (var i = 0; i < len; i++) transforms[i].apply(ctx);
            }
            unapply(ctx) {
                var {transforms} = this;
                var len = transforms.length;
                for (var i = len - 1; i >= 0; i--) transforms[i].unapply(ctx);
            }
            applyToPoint(point) {
                var {transforms} = this;
                var len = transforms.length;
                for (var i = 0; i < len; i++) transforms[i].applyToPoint(point);
            }
        }
        Transform.transformTypes = {
            translate: Translate,
            rotate: Rotate,
            scale: Scale,
            matrix: Matrix,
            skewX: SkewX,
            skewY: SkewY
        };
        class Element {
            constructor(document, node) {
                var captureTextNodes = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
                this.document = document;
                this.node = node;
                this.captureTextNodes = captureTextNodes;
                this.attributes = {};
                this.styles = {};
                this.stylesSpecificity = {};
                this.animationFrozen = false;
                this.animationFrozenValue = "";
                this.parent = null;
                this.children = [];
                if (!node || node.nodeType !== 1) return;
                Array.from(node.attributes).forEach((attribute => {
                    var nodeName = normalizeAttributeName(attribute.nodeName);
                    this.attributes[nodeName] = new Property(document, nodeName, attribute.value);
                }));
                this.addStylesFromStyleDefinition();
                if (this.getAttribute("style").hasValue()) {
                    var styles = this.getAttribute("style").getString().split(";").map((_ => _.trim()));
                    styles.forEach((style => {
                        if (!style) return;
                        var [name, value] = style.split(":").map((_ => _.trim()));
                        this.styles[name] = new Property(document, name, value);
                    }));
                }
                var {definitions} = document;
                var id = this.getAttribute("id");
                if (id.hasValue()) if (!definitions[id.getString()]) definitions[id.getString()] = this;
                Array.from(node.childNodes).forEach((childNode => {
                    if (childNode.nodeType === 1) this.addChild(childNode); else if (captureTextNodes && (childNode.nodeType === 3 || childNode.nodeType === 4)) {
                        var textNode = document.createTextNode(childNode);
                        if (textNode.getText().length > 0) this.addChild(textNode);
                    }
                }));
            }
            getAttribute(name) {
                var createIfNotExists = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                var attr = this.attributes[name];
                if (!attr && createIfNotExists) {
                    var _attr = new Property(this.document, name, "");
                    this.attributes[name] = _attr;
                    return _attr;
                }
                return attr || Property.empty(this.document);
            }
            getHrefAttribute() {
                for (var key in this.attributes) if (key === "href" || key.endsWith(":href")) return this.attributes[key];
                return Property.empty(this.document);
            }
            getStyle(name) {
                var createIfNotExists = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                var skipAncestors = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
                var style = this.styles[name];
                if (style) return style;
                var attr = this.getAttribute(name);
                if (attr !== null && attr !== void 0 && attr.hasValue()) {
                    this.styles[name] = attr;
                    return attr;
                }
                if (!skipAncestors) {
                    var {parent} = this;
                    if (parent) {
                        var parentStyle = parent.getStyle(name);
                        if (parentStyle !== null && parentStyle !== void 0 && parentStyle.hasValue()) return parentStyle;
                    }
                }
                if (createIfNotExists) {
                    var _style = new Property(this.document, name, "");
                    this.styles[name] = _style;
                    return _style;
                }
                return style || Property.empty(this.document);
            }
            render(ctx) {
                if (this.getStyle("display").getString() === "none" || this.getStyle("visibility").getString() === "hidden") return;
                ctx.save();
                if (this.getStyle("mask").hasValue()) {
                    var mask = this.getStyle("mask").getDefinition();
                    if (mask) {
                        this.applyEffects(ctx);
                        mask.apply(ctx, this);
                    }
                } else if (this.getStyle("filter").getValue("none") !== "none") {
                    var filter = this.getStyle("filter").getDefinition();
                    if (filter) {
                        this.applyEffects(ctx);
                        filter.apply(ctx, this);
                    }
                } else {
                    this.setContext(ctx);
                    this.renderChildren(ctx);
                    this.clearContext(ctx);
                }
                ctx.restore();
            }
            setContext(_) {}
            applyEffects(ctx) {
                var transform = Transform.fromElement(this.document, this);
                if (transform) transform.apply(ctx);
                var clipPathStyleProp = this.getStyle("clip-path", false, true);
                if (clipPathStyleProp.hasValue()) {
                    var clip = clipPathStyleProp.getDefinition();
                    if (clip) clip.apply(ctx);
                }
            }
            clearContext(_) {}
            renderChildren(ctx) {
                this.children.forEach((child => {
                    child.render(ctx);
                }));
            }
            addChild(childNode) {
                var child = childNode instanceof Element ? childNode : this.document.createElement(childNode);
                child.parent = this;
                if (!Element.ignoreChildTypes.includes(child.type)) this.children.push(child);
            }
            matchesSelector(selector) {
                var _node$getAttribute;
                var {node} = this;
                if (typeof node.matches === "function") return node.matches(selector);
                var styleClasses = (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node, "class");
                if (!styleClasses || styleClasses === "") return false;
                return styleClasses.split(" ").some((styleClass => ".".concat(styleClass) === selector));
            }
            addStylesFromStyleDefinition() {
                var {styles, stylesSpecificity} = this.document;
                for (var selector in styles) if (!selector.startsWith("@") && this.matchesSelector(selector)) {
                    var style = styles[selector];
                    var specificity = stylesSpecificity[selector];
                    if (style) for (var name in style) {
                        var existingSpecificity = this.stylesSpecificity[name];
                        if (typeof existingSpecificity === "undefined") existingSpecificity = "000";
                        if (specificity >= existingSpecificity) {
                            this.styles[name] = style[name];
                            this.stylesSpecificity[name] = specificity;
                        }
                    }
                }
            }
            removeStyles(element, ignoreStyles) {
                var toRestore = ignoreStyles.reduce(((toRestore, name) => {
                    var styleProp = element.getStyle(name);
                    if (!styleProp.hasValue()) return toRestore;
                    var value = styleProp.getString();
                    styleProp.setValue("");
                    return [ ...toRestore, [ name, value ] ];
                }), []);
                return toRestore;
            }
            restoreStyles(element, styles) {
                styles.forEach((_ref => {
                    var [name, value] = _ref;
                    element.getStyle(name, true).setValue(value);
                }));
            }
            isFirstChild() {
                var _this$parent;
                return ((_this$parent = this.parent) === null || _this$parent === void 0 ? void 0 : _this$parent.children.indexOf(this)) === 0;
            }
        }
        Element.ignoreChildTypes = [ "title" ];
        class UnknownElement extends Element {
            constructor(document, node, captureTextNodes) {
                super(document, node, captureTextNodes);
            }
        }
        function wrapFontFamily(fontFamily) {
            var trimmed = fontFamily.trim();
            return /^('|")/.test(trimmed) ? trimmed : '"'.concat(trimmed, '"');
        }
        function prepareFontFamily(fontFamily) {
            return typeof process === "undefined" ? fontFamily : fontFamily.trim().split(",").map(wrapFontFamily).join(",");
        }
        function prepareFontStyle(fontStyle) {
            if (!fontStyle) return "";
            var targetFontStyle = fontStyle.trim().toLowerCase();
            switch (targetFontStyle) {
              case "normal":
              case "italic":
              case "oblique":
              case "inherit":
              case "initial":
              case "unset":
                return targetFontStyle;

              default:
                if (/^oblique\s+(-|)\d+deg$/.test(targetFontStyle)) return targetFontStyle;
                return "";
            }
        }
        function prepareFontWeight(fontWeight) {
            if (!fontWeight) return "";
            var targetFontWeight = fontWeight.trim().toLowerCase();
            switch (targetFontWeight) {
              case "normal":
              case "bold":
              case "lighter":
              case "bolder":
              case "inherit":
              case "initial":
              case "unset":
                return targetFontWeight;

              default:
                if (/^[\d.]+$/.test(targetFontWeight)) return targetFontWeight;
                return "";
            }
        }
        class Font {
            constructor(fontStyle, fontVariant, fontWeight, fontSize, fontFamily, inherit) {
                var inheritFont = inherit ? typeof inherit === "string" ? Font.parse(inherit) : inherit : {};
                this.fontFamily = fontFamily || inheritFont.fontFamily;
                this.fontSize = fontSize || inheritFont.fontSize;
                this.fontStyle = fontStyle || inheritFont.fontStyle;
                this.fontWeight = fontWeight || inheritFont.fontWeight;
                this.fontVariant = fontVariant || inheritFont.fontVariant;
            }
            static parse() {
                var font = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
                var inherit = arguments.length > 1 ? arguments[1] : void 0;
                var fontStyle = "";
                var fontVariant = "";
                var fontWeight = "";
                var fontSize = "";
                var fontFamily = "";
                var parts = compressSpaces(font).trim().split(" ");
                var set = {
                    fontSize: false,
                    fontStyle: false,
                    fontWeight: false,
                    fontVariant: false
                };
                parts.forEach((part => {
                    switch (true) {
                      case !set.fontStyle && Font.styles.includes(part):
                        if (part !== "inherit") fontStyle = part;
                        set.fontStyle = true;
                        break;

                      case !set.fontVariant && Font.variants.includes(part):
                        if (part !== "inherit") fontVariant = part;
                        set.fontStyle = true;
                        set.fontVariant = true;
                        break;

                      case !set.fontWeight && Font.weights.includes(part):
                        if (part !== "inherit") fontWeight = part;
                        set.fontStyle = true;
                        set.fontVariant = true;
                        set.fontWeight = true;
                        break;

                      case !set.fontSize:
                        if (part !== "inherit") [fontSize] = part.split("/");
                        set.fontStyle = true;
                        set.fontVariant = true;
                        set.fontWeight = true;
                        set.fontSize = true;
                        break;

                      default:
                        if (part !== "inherit") fontFamily += part;
                    }
                }));
                return new Font(fontStyle, fontVariant, fontWeight, fontSize, fontFamily, inherit);
            }
            toString() {
                return [ prepareFontStyle(this.fontStyle), this.fontVariant, prepareFontWeight(this.fontWeight), this.fontSize, prepareFontFamily(this.fontFamily) ].join(" ").trim();
            }
        }
        Font.styles = "normal|italic|oblique|inherit";
        Font.variants = "normal|small-caps|inherit";
        Font.weights = "normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit";
        class BoundingBox {
            constructor() {
                var x1 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Number.NaN;
                var y1 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.NaN;
                var x2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Number.NaN;
                var y2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Number.NaN;
                this.x1 = x1;
                this.y1 = y1;
                this.x2 = x2;
                this.y2 = y2;
                this.addPoint(x1, y1);
                this.addPoint(x2, y2);
            }
            get x() {
                return this.x1;
            }
            get y() {
                return this.y1;
            }
            get width() {
                return this.x2 - this.x1;
            }
            get height() {
                return this.y2 - this.y1;
            }
            addPoint(x, y) {
                if (typeof x !== "undefined") {
                    if (isNaN(this.x1) || isNaN(this.x2)) {
                        this.x1 = x;
                        this.x2 = x;
                    }
                    if (x < this.x1) this.x1 = x;
                    if (x > this.x2) this.x2 = x;
                }
                if (typeof y !== "undefined") {
                    if (isNaN(this.y1) || isNaN(this.y2)) {
                        this.y1 = y;
                        this.y2 = y;
                    }
                    if (y < this.y1) this.y1 = y;
                    if (y > this.y2) this.y2 = y;
                }
            }
            addX(x) {
                this.addPoint(x, null);
            }
            addY(y) {
                this.addPoint(null, y);
            }
            addBoundingBox(boundingBox) {
                if (!boundingBox) return;
                var {x1, y1, x2, y2} = boundingBox;
                this.addPoint(x1, y1);
                this.addPoint(x2, y2);
            }
            sumCubic(t, p0, p1, p2, p3) {
                return Math.pow(1 - t, 3) * p0 + 3 * Math.pow(1 - t, 2) * t * p1 + 3 * (1 - t) * Math.pow(t, 2) * p2 + Math.pow(t, 3) * p3;
            }
            bezierCurveAdd(forX, p0, p1, p2, p3) {
                var b = 6 * p0 - 12 * p1 + 6 * p2;
                var a = -3 * p0 + 9 * p1 - 9 * p2 + 3 * p3;
                var c = 3 * p1 - 3 * p0;
                if (a === 0) {
                    if (b === 0) return;
                    var t = -c / b;
                    if (0 < t && t < 1) if (forX) this.addX(this.sumCubic(t, p0, p1, p2, p3)); else this.addY(this.sumCubic(t, p0, p1, p2, p3));
                    return;
                }
                var b2ac = Math.pow(b, 2) - 4 * c * a;
                if (b2ac < 0) return;
                var t1 = (-b + Math.sqrt(b2ac)) / (2 * a);
                if (0 < t1 && t1 < 1) if (forX) this.addX(this.sumCubic(t1, p0, p1, p2, p3)); else this.addY(this.sumCubic(t1, p0, p1, p2, p3));
                var t2 = (-b - Math.sqrt(b2ac)) / (2 * a);
                if (0 < t2 && t2 < 1) if (forX) this.addX(this.sumCubic(t2, p0, p1, p2, p3)); else this.addY(this.sumCubic(t2, p0, p1, p2, p3));
            }
            addBezierCurve(p0x, p0y, p1x, p1y, p2x, p2y, p3x, p3y) {
                this.addPoint(p0x, p0y);
                this.addPoint(p3x, p3y);
                this.bezierCurveAdd(true, p0x, p1x, p2x, p3x);
                this.bezierCurveAdd(false, p0y, p1y, p2y, p3y);
            }
            addQuadraticCurve(p0x, p0y, p1x, p1y, p2x, p2y) {
                var cp1x = p0x + 2 / 3 * (p1x - p0x);
                var cp1y = p0y + 2 / 3 * (p1y - p0y);
                var cp2x = cp1x + 1 / 3 * (p2x - p0x);
                var cp2y = cp1y + 1 / 3 * (p2y - p0y);
                this.addBezierCurve(p0x, p0y, cp1x, cp2x, cp1y, cp2y, p2x, p2y);
            }
            isPointInBox(x, y) {
                var {x1, y1, x2, y2} = this;
                return x1 <= x && x <= x2 && y1 <= y && y <= y2;
            }
        }
        class PathParser extends _ {
            constructor(path) {
                super(path.replace(/([+\-.])\s+/gm, "$1").replace(/[^MmZzLlHhVvCcSsQqTtAae\d\s.,+-].*/g, ""));
                this.control = null;
                this.start = null;
                this.current = null;
                this.command = null;
                this.commands = this.commands;
                this.i = -1;
                this.previousCommand = null;
                this.points = [];
                this.angles = [];
            }
            reset() {
                this.i = -1;
                this.command = null;
                this.previousCommand = null;
                this.start = new Point(0, 0);
                this.control = new Point(0, 0);
                this.current = new Point(0, 0);
                this.points = [];
                this.angles = [];
            }
            isEnd() {
                var {i, commands} = this;
                return i >= commands.length - 1;
            }
            next() {
                var command = this.commands[++this.i];
                this.previousCommand = this.command;
                this.command = command;
                return command;
            }
            getPoint() {
                var xProp = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "x";
                var yProp = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "y";
                var point = new Point(this.command[xProp], this.command[yProp]);
                return this.makeAbsolute(point);
            }
            getAsControlPoint(xProp, yProp) {
                var point = this.getPoint(xProp, yProp);
                this.control = point;
                return point;
            }
            getAsCurrentPoint(xProp, yProp) {
                var point = this.getPoint(xProp, yProp);
                this.current = point;
                return point;
            }
            getReflectedControlPoint() {
                var previousCommand = this.previousCommand.type;
                if (previousCommand !== _.CURVE_TO && previousCommand !== _.SMOOTH_CURVE_TO && previousCommand !== _.QUAD_TO && previousCommand !== _.SMOOTH_QUAD_TO) return this.current;
                var {current: {x: cx, y: cy}, control: {x: ox, y: oy}} = this;
                var point = new Point(2 * cx - ox, 2 * cy - oy);
                return point;
            }
            makeAbsolute(point) {
                if (this.command.relative) {
                    var {x, y} = this.current;
                    point.x += x;
                    point.y += y;
                }
                return point;
            }
            addMarker(point, from, priorTo) {
                var {points, angles} = this;
                if (priorTo && angles.length > 0 && !angles[angles.length - 1]) angles[angles.length - 1] = points[points.length - 1].angleTo(priorTo);
                this.addMarkerAngle(point, from ? from.angleTo(point) : null);
            }
            addMarkerAngle(point, angle) {
                this.points.push(point);
                this.angles.push(angle);
            }
            getMarkerPoints() {
                return this.points;
            }
            getMarkerAngles() {
                var {angles} = this;
                var len = angles.length;
                for (var i = 0; i < len; i++) if (!angles[i]) for (var j = i + 1; j < len; j++) if (angles[j]) {
                    angles[i] = angles[j];
                    break;
                }
                return angles;
            }
        }
        class RenderedElement extends Element {
            constructor() {
                super(...arguments);
                this.modifiedEmSizeStack = false;
            }
            calculateOpacity() {
                var opacity = 1;
                var element = this;
                while (element) {
                    var opacityStyle = element.getStyle("opacity", false, true);
                    if (opacityStyle.hasValue(true)) opacity *= opacityStyle.getNumber();
                    element = element.parent;
                }
                return opacity;
            }
            setContext(ctx) {
                var fromMeasure = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                if (!fromMeasure) {
                    var fillStyleProp = this.getStyle("fill");
                    var fillOpacityStyleProp = this.getStyle("fill-opacity");
                    var strokeStyleProp = this.getStyle("stroke");
                    var strokeOpacityProp = this.getStyle("stroke-opacity");
                    if (fillStyleProp.isUrlDefinition()) {
                        var fillStyle = fillStyleProp.getFillStyleDefinition(this, fillOpacityStyleProp);
                        if (fillStyle) ctx.fillStyle = fillStyle;
                    } else if (fillStyleProp.hasValue()) {
                        if (fillStyleProp.getString() === "currentColor") fillStyleProp.setValue(this.getStyle("color").getColor());
                        var _fillStyle = fillStyleProp.getColor();
                        if (_fillStyle !== "inherit") ctx.fillStyle = _fillStyle === "none" ? "rgba(0,0,0,0)" : _fillStyle;
                    }
                    if (fillOpacityStyleProp.hasValue()) {
                        var _fillStyle2 = new Property(this.document, "fill", ctx.fillStyle).addOpacity(fillOpacityStyleProp).getColor();
                        ctx.fillStyle = _fillStyle2;
                    }
                    if (strokeStyleProp.isUrlDefinition()) {
                        var strokeStyle = strokeStyleProp.getFillStyleDefinition(this, strokeOpacityProp);
                        if (strokeStyle) ctx.strokeStyle = strokeStyle;
                    } else if (strokeStyleProp.hasValue()) {
                        if (strokeStyleProp.getString() === "currentColor") strokeStyleProp.setValue(this.getStyle("color").getColor());
                        var _strokeStyle = strokeStyleProp.getString();
                        if (_strokeStyle !== "inherit") ctx.strokeStyle = _strokeStyle === "none" ? "rgba(0,0,0,0)" : _strokeStyle;
                    }
                    if (strokeOpacityProp.hasValue()) {
                        var _strokeStyle2 = new Property(this.document, "stroke", ctx.strokeStyle).addOpacity(strokeOpacityProp).getString();
                        ctx.strokeStyle = _strokeStyle2;
                    }
                    var strokeWidthStyleProp = this.getStyle("stroke-width");
                    if (strokeWidthStyleProp.hasValue()) {
                        var newLineWidth = strokeWidthStyleProp.getPixels();
                        ctx.lineWidth = !newLineWidth ? PSEUDO_ZERO : newLineWidth;
                    }
                    var strokeLinecapStyleProp = this.getStyle("stroke-linecap");
                    var strokeLinejoinStyleProp = this.getStyle("stroke-linejoin");
                    var strokeMiterlimitProp = this.getStyle("stroke-miterlimit");
                    var strokeDasharrayStyleProp = this.getStyle("stroke-dasharray");
                    var strokeDashoffsetProp = this.getStyle("stroke-dashoffset");
                    if (strokeLinecapStyleProp.hasValue()) ctx.lineCap = strokeLinecapStyleProp.getString();
                    if (strokeLinejoinStyleProp.hasValue()) ctx.lineJoin = strokeLinejoinStyleProp.getString();
                    if (strokeMiterlimitProp.hasValue()) ctx.miterLimit = strokeMiterlimitProp.getNumber();
                    if (strokeDasharrayStyleProp.hasValue() && strokeDasharrayStyleProp.getString() !== "none") {
                        var gaps = toNumbers(strokeDasharrayStyleProp.getString());
                        if (typeof ctx.setLineDash !== "undefined") ctx.setLineDash(gaps); else if (typeof ctx.webkitLineDash !== "undefined") ctx.webkitLineDash = gaps; else if (typeof ctx.mozDash !== "undefined" && !(gaps.length === 1 && gaps[0] === 0)) ctx.mozDash = gaps;
                        var offset = strokeDashoffsetProp.getPixels();
                        if (typeof ctx.lineDashOffset !== "undefined") ctx.lineDashOffset = offset; else if (typeof ctx.webkitLineDashOffset !== "undefined") ctx.webkitLineDashOffset = offset; else if (typeof ctx.mozDashOffset !== "undefined") ctx.mozDashOffset = offset;
                    }
                }
                this.modifiedEmSizeStack = false;
                if (typeof ctx.font !== "undefined") {
                    var fontStyleProp = this.getStyle("font");
                    var fontStyleStyleProp = this.getStyle("font-style");
                    var fontVariantStyleProp = this.getStyle("font-variant");
                    var fontWeightStyleProp = this.getStyle("font-weight");
                    var fontSizeStyleProp = this.getStyle("font-size");
                    var fontFamilyStyleProp = this.getStyle("font-family");
                    var font = new Font(fontStyleStyleProp.getString(), fontVariantStyleProp.getString(), fontWeightStyleProp.getString(), fontSizeStyleProp.hasValue() ? "".concat(fontSizeStyleProp.getPixels(true), "px") : "", fontFamilyStyleProp.getString(), Font.parse(fontStyleProp.getString(), ctx.font));
                    fontStyleStyleProp.setValue(font.fontStyle);
                    fontVariantStyleProp.setValue(font.fontVariant);
                    fontWeightStyleProp.setValue(font.fontWeight);
                    fontSizeStyleProp.setValue(font.fontSize);
                    fontFamilyStyleProp.setValue(font.fontFamily);
                    ctx.font = font.toString();
                    if (fontSizeStyleProp.isPixels()) {
                        this.document.emSize = fontSizeStyleProp.getPixels();
                        this.modifiedEmSizeStack = true;
                    }
                }
                if (!fromMeasure) {
                    this.applyEffects(ctx);
                    ctx.globalAlpha = this.calculateOpacity();
                }
            }
            clearContext(ctx) {
                super.clearContext(ctx);
                if (this.modifiedEmSizeStack) this.document.popEmSize();
            }
        }
        class PathElement extends RenderedElement {
            constructor(document, node, captureTextNodes) {
                super(document, node, captureTextNodes);
                this.type = "path";
                this.pathParser = null;
                this.pathParser = new PathParser(this.getAttribute("d").getString());
            }
            path(ctx) {
                var {pathParser} = this;
                var boundingBox = new BoundingBox;
                pathParser.reset();
                if (ctx) ctx.beginPath();
                while (!pathParser.isEnd()) switch (pathParser.next().type) {
                  case PathParser.MOVE_TO:
                    this.pathM(ctx, boundingBox);
                    break;

                  case PathParser.LINE_TO:
                    this.pathL(ctx, boundingBox);
                    break;

                  case PathParser.HORIZ_LINE_TO:
                    this.pathH(ctx, boundingBox);
                    break;

                  case PathParser.VERT_LINE_TO:
                    this.pathV(ctx, boundingBox);
                    break;

                  case PathParser.CURVE_TO:
                    this.pathC(ctx, boundingBox);
                    break;

                  case PathParser.SMOOTH_CURVE_TO:
                    this.pathS(ctx, boundingBox);
                    break;

                  case PathParser.QUAD_TO:
                    this.pathQ(ctx, boundingBox);
                    break;

                  case PathParser.SMOOTH_QUAD_TO:
                    this.pathT(ctx, boundingBox);
                    break;

                  case PathParser.ARC:
                    this.pathA(ctx, boundingBox);
                    break;

                  case PathParser.CLOSE_PATH:
                    this.pathZ(ctx, boundingBox);
                    break;
                }
                return boundingBox;
            }
            getBoundingBox(_) {
                return this.path();
            }
            getMarkers() {
                var {pathParser} = this;
                var points = pathParser.getMarkerPoints();
                var angles = pathParser.getMarkerAngles();
                var markers = points.map(((point, i) => [ point, angles[i] ]));
                return markers;
            }
            renderChildren(ctx) {
                this.path(ctx);
                this.document.screen.mouse.checkPath(this, ctx);
                var fillRuleStyleProp = this.getStyle("fill-rule");
                if (ctx.fillStyle !== "") if (fillRuleStyleProp.getString("inherit") !== "inherit") ctx.fill(fillRuleStyleProp.getString()); else ctx.fill();
                if (ctx.strokeStyle !== "") if (this.getAttribute("vector-effect").getString() === "non-scaling-stroke") {
                    ctx.save();
                    ctx.setTransform(1, 0, 0, 1, 0, 0);
                    ctx.stroke();
                    ctx.restore();
                } else ctx.stroke();
                var markers = this.getMarkers();
                if (markers) {
                    var markersLastIndex = markers.length - 1;
                    var markerStartStyleProp = this.getStyle("marker-start");
                    var markerMidStyleProp = this.getStyle("marker-mid");
                    var markerEndStyleProp = this.getStyle("marker-end");
                    if (markerStartStyleProp.isUrlDefinition()) {
                        var marker = markerStartStyleProp.getDefinition();
                        var [point, angle] = markers[0];
                        marker.render(ctx, point, angle);
                    }
                    if (markerMidStyleProp.isUrlDefinition()) {
                        var _marker = markerMidStyleProp.getDefinition();
                        for (var i = 1; i < markersLastIndex; i++) {
                            var [_point, _angle] = markers[i];
                            _marker.render(ctx, _point, _angle);
                        }
                    }
                    if (markerEndStyleProp.isUrlDefinition()) {
                        var _marker2 = markerEndStyleProp.getDefinition();
                        var [_point2, _angle2] = markers[markersLastIndex];
                        _marker2.render(ctx, _point2, _angle2);
                    }
                }
            }
            static pathM(pathParser) {
                var point = pathParser.getAsCurrentPoint();
                pathParser.start = pathParser.current;
                return {
                    point
                };
            }
            pathM(ctx, boundingBox) {
                var {pathParser} = this;
                var {point} = PathElement.pathM(pathParser);
                var {x, y} = point;
                pathParser.addMarker(point);
                boundingBox.addPoint(x, y);
                if (ctx) ctx.moveTo(x, y);
            }
            static pathL(pathParser) {
                var {current} = pathParser;
                var point = pathParser.getAsCurrentPoint();
                return {
                    current,
                    point
                };
            }
            pathL(ctx, boundingBox) {
                var {pathParser} = this;
                var {current, point} = PathElement.pathL(pathParser);
                var {x, y} = point;
                pathParser.addMarker(point, current);
                boundingBox.addPoint(x, y);
                if (ctx) ctx.lineTo(x, y);
            }
            static pathH(pathParser) {
                var {current, command} = pathParser;
                var point = new Point((command.relative ? current.x : 0) + command.x, current.y);
                pathParser.current = point;
                return {
                    current,
                    point
                };
            }
            pathH(ctx, boundingBox) {
                var {pathParser} = this;
                var {current, point} = PathElement.pathH(pathParser);
                var {x, y} = point;
                pathParser.addMarker(point, current);
                boundingBox.addPoint(x, y);
                if (ctx) ctx.lineTo(x, y);
            }
            static pathV(pathParser) {
                var {current, command} = pathParser;
                var point = new Point(current.x, (command.relative ? current.y : 0) + command.y);
                pathParser.current = point;
                return {
                    current,
                    point
                };
            }
            pathV(ctx, boundingBox) {
                var {pathParser} = this;
                var {current, point} = PathElement.pathV(pathParser);
                var {x, y} = point;
                pathParser.addMarker(point, current);
                boundingBox.addPoint(x, y);
                if (ctx) ctx.lineTo(x, y);
            }
            static pathC(pathParser) {
                var {current} = pathParser;
                var point = pathParser.getPoint("x1", "y1");
                var controlPoint = pathParser.getAsControlPoint("x2", "y2");
                var currentPoint = pathParser.getAsCurrentPoint();
                return {
                    current,
                    point,
                    controlPoint,
                    currentPoint
                };
            }
            pathC(ctx, boundingBox) {
                var {pathParser} = this;
                var {current, point, controlPoint, currentPoint} = PathElement.pathC(pathParser);
                pathParser.addMarker(currentPoint, controlPoint, point);
                boundingBox.addBezierCurve(current.x, current.y, point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
                if (ctx) ctx.bezierCurveTo(point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
            }
            static pathS(pathParser) {
                var {current} = pathParser;
                var point = pathParser.getReflectedControlPoint();
                var controlPoint = pathParser.getAsControlPoint("x2", "y2");
                var currentPoint = pathParser.getAsCurrentPoint();
                return {
                    current,
                    point,
                    controlPoint,
                    currentPoint
                };
            }
            pathS(ctx, boundingBox) {
                var {pathParser} = this;
                var {current, point, controlPoint, currentPoint} = PathElement.pathS(pathParser);
                pathParser.addMarker(currentPoint, controlPoint, point);
                boundingBox.addBezierCurve(current.x, current.y, point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
                if (ctx) ctx.bezierCurveTo(point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
            }
            static pathQ(pathParser) {
                var {current} = pathParser;
                var controlPoint = pathParser.getAsControlPoint("x1", "y1");
                var currentPoint = pathParser.getAsCurrentPoint();
                return {
                    current,
                    controlPoint,
                    currentPoint
                };
            }
            pathQ(ctx, boundingBox) {
                var {pathParser} = this;
                var {current, controlPoint, currentPoint} = PathElement.pathQ(pathParser);
                pathParser.addMarker(currentPoint, controlPoint, controlPoint);
                boundingBox.addQuadraticCurve(current.x, current.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
                if (ctx) ctx.quadraticCurveTo(controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
            }
            static pathT(pathParser) {
                var {current} = pathParser;
                var controlPoint = pathParser.getReflectedControlPoint();
                pathParser.control = controlPoint;
                var currentPoint = pathParser.getAsCurrentPoint();
                return {
                    current,
                    controlPoint,
                    currentPoint
                };
            }
            pathT(ctx, boundingBox) {
                var {pathParser} = this;
                var {current, controlPoint, currentPoint} = PathElement.pathT(pathParser);
                pathParser.addMarker(currentPoint, controlPoint, controlPoint);
                boundingBox.addQuadraticCurve(current.x, current.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
                if (ctx) ctx.quadraticCurveTo(controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
            }
            static pathA(pathParser) {
                var {current, command} = pathParser;
                var {rX, rY, xRot, lArcFlag, sweepFlag} = command;
                var xAxisRotation = xRot * (Math.PI / 180);
                var currentPoint = pathParser.getAsCurrentPoint();
                var currp = new Point(Math.cos(xAxisRotation) * (current.x - currentPoint.x) / 2 + Math.sin(xAxisRotation) * (current.y - currentPoint.y) / 2, -Math.sin(xAxisRotation) * (current.x - currentPoint.x) / 2 + Math.cos(xAxisRotation) * (current.y - currentPoint.y) / 2);
                var l = Math.pow(currp.x, 2) / Math.pow(rX, 2) + Math.pow(currp.y, 2) / Math.pow(rY, 2);
                if (l > 1) {
                    rX *= Math.sqrt(l);
                    rY *= Math.sqrt(l);
                }
                var s = (lArcFlag === sweepFlag ? -1 : 1) * Math.sqrt((Math.pow(rX, 2) * Math.pow(rY, 2) - Math.pow(rX, 2) * Math.pow(currp.y, 2) - Math.pow(rY, 2) * Math.pow(currp.x, 2)) / (Math.pow(rX, 2) * Math.pow(currp.y, 2) + Math.pow(rY, 2) * Math.pow(currp.x, 2)));
                if (isNaN(s)) s = 0;
                var cpp = new Point(s * rX * currp.y / rY, s * -rY * currp.x / rX);
                var centp = new Point((current.x + currentPoint.x) / 2 + Math.cos(xAxisRotation) * cpp.x - Math.sin(xAxisRotation) * cpp.y, (current.y + currentPoint.y) / 2 + Math.sin(xAxisRotation) * cpp.x + Math.cos(xAxisRotation) * cpp.y);
                var a1 = vectorsAngle([ 1, 0 ], [ (currp.x - cpp.x) / rX, (currp.y - cpp.y) / rY ]);
                var u = [ (currp.x - cpp.x) / rX, (currp.y - cpp.y) / rY ];
                var v = [ (-currp.x - cpp.x) / rX, (-currp.y - cpp.y) / rY ];
                var ad = vectorsAngle(u, v);
                if (vectorsRatio(u, v) <= -1) ad = Math.PI;
                if (vectorsRatio(u, v) >= 1) ad = 0;
                return {
                    currentPoint,
                    rX,
                    rY,
                    sweepFlag,
                    xAxisRotation,
                    centp,
                    a1,
                    ad
                };
            }
            pathA(ctx, boundingBox) {
                var {pathParser} = this;
                var {currentPoint, rX, rY, sweepFlag, xAxisRotation, centp, a1, ad} = PathElement.pathA(pathParser);
                var dir = 1 - sweepFlag ? 1 : -1;
                var ah = a1 + dir * (ad / 2);
                var halfWay = new Point(centp.x + rX * Math.cos(ah), centp.y + rY * Math.sin(ah));
                pathParser.addMarkerAngle(halfWay, ah - dir * Math.PI / 2);
                pathParser.addMarkerAngle(currentPoint, ah - dir * Math.PI);
                boundingBox.addPoint(currentPoint.x, currentPoint.y);
                if (ctx && !isNaN(a1) && !isNaN(ad)) {
                    var r = rX > rY ? rX : rY;
                    var sx = rX > rY ? 1 : rX / rY;
                    var sy = rX > rY ? rY / rX : 1;
                    ctx.translate(centp.x, centp.y);
                    ctx.rotate(xAxisRotation);
                    ctx.scale(sx, sy);
                    ctx.arc(0, 0, r, a1, a1 + ad, Boolean(1 - sweepFlag));
                    ctx.scale(1 / sx, 1 / sy);
                    ctx.rotate(-xAxisRotation);
                    ctx.translate(-centp.x, -centp.y);
                }
            }
            static pathZ(pathParser) {
                pathParser.current = pathParser.start;
            }
            pathZ(ctx, boundingBox) {
                PathElement.pathZ(this.pathParser);
                if (ctx) if (boundingBox.x1 !== boundingBox.x2 && boundingBox.y1 !== boundingBox.y2) ctx.closePath();
            }
        }
        class GlyphElement extends PathElement {
            constructor(document, node, captureTextNodes) {
                super(document, node, captureTextNodes);
                this.type = "glyph";
                this.horizAdvX = this.getAttribute("horiz-adv-x").getNumber();
                this.unicode = this.getAttribute("unicode").getString();
                this.arabicForm = this.getAttribute("arabic-form").getString();
            }
        }
        class TextElement extends RenderedElement {
            constructor(document, node, captureTextNodes) {
                super(document, node, new.target === TextElement ? true : captureTextNodes);
                this.type = "text";
                this.x = 0;
                this.y = 0;
                this.measureCache = -1;
            }
            setContext(ctx) {
                var fromMeasure = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                super.setContext(ctx, fromMeasure);
                var textBaseline = this.getStyle("dominant-baseline").getTextBaseline() || this.getStyle("alignment-baseline").getTextBaseline();
                if (textBaseline) ctx.textBaseline = textBaseline;
            }
            initializeCoordinates() {
                this.x = 0;
                this.y = 0;
                this.leafTexts = [];
                this.textChunkStart = 0;
                this.minX = Number.POSITIVE_INFINITY;
                this.maxX = Number.NEGATIVE_INFINITY;
            }
            getBoundingBox(ctx) {
                if (this.type !== "text") return this.getTElementBoundingBox(ctx);
                this.initializeCoordinates();
                this.adjustChildCoordinatesRecursive(ctx);
                var boundingBox = null;
                this.children.forEach(((_, i) => {
                    var childBoundingBox = this.getChildBoundingBox(ctx, this, this, i);
                    if (!boundingBox) boundingBox = childBoundingBox; else boundingBox.addBoundingBox(childBoundingBox);
                }));
                return boundingBox;
            }
            getFontSize() {
                var {document, parent} = this;
                var inheritFontSize = Font.parse(document.ctx.font).fontSize;
                var fontSize = parent.getStyle("font-size").getNumber(inheritFontSize);
                return fontSize;
            }
            getTElementBoundingBox(ctx) {
                var fontSize = this.getFontSize();
                return new BoundingBox(this.x, this.y - fontSize, this.x + this.measureText(ctx), this.y);
            }
            getGlyph(font, text, i) {
                var char = text[i];
                var glyph = null;
                if (font.isArabic) {
                    var len = text.length;
                    var prevChar = text[i - 1];
                    var nextChar = text[i + 1];
                    var arabicForm = "isolated";
                    if ((i === 0 || prevChar === " ") && i < len - 1 && nextChar !== " ") arabicForm = "terminal";
                    if (i > 0 && prevChar !== " " && i < len - 1 && nextChar !== " ") arabicForm = "medial";
                    if (i > 0 && prevChar !== " " && (i === len - 1 || nextChar === " ")) arabicForm = "initial";
                    if (typeof font.glyphs[char] !== "undefined") {
                        var maybeGlyph = font.glyphs[char];
                        glyph = maybeGlyph instanceof GlyphElement ? maybeGlyph : maybeGlyph[arabicForm];
                    }
                } else glyph = font.glyphs[char];
                if (!glyph) glyph = font.missingGlyph;
                return glyph;
            }
            getText() {
                return "";
            }
            getTextFromNode(node) {
                var textNode = node || this.node;
                var childNodes = Array.from(textNode.parentNode.childNodes);
                var index = childNodes.indexOf(textNode);
                var lastIndex = childNodes.length - 1;
                var text = compressSpaces(textNode.textContent || "");
                if (index === 0) text = trimLeft(text);
                if (index === lastIndex) text = trimRight(text);
                return text;
            }
            renderChildren(ctx) {
                if (this.type !== "text") {
                    this.renderTElementChildren(ctx);
                    return;
                }
                this.initializeCoordinates();
                this.adjustChildCoordinatesRecursive(ctx);
                this.children.forEach(((_, i) => {
                    this.renderChild(ctx, this, this, i);
                }));
                var {mouse} = this.document.screen;
                if (mouse.isWorking()) mouse.checkBoundingBox(this, this.getBoundingBox(ctx));
            }
            renderTElementChildren(ctx) {
                var {document, parent} = this;
                var renderText = this.getText();
                var customFont = parent.getStyle("font-family").getDefinition();
                if (customFont) {
                    var {unitsPerEm} = customFont.fontFace;
                    var ctxFont = Font.parse(document.ctx.font);
                    var fontSize = parent.getStyle("font-size").getNumber(ctxFont.fontSize);
                    var fontStyle = parent.getStyle("font-style").getString(ctxFont.fontStyle);
                    var scale = fontSize / unitsPerEm;
                    var text = customFont.isRTL ? renderText.split("").reverse().join("") : renderText;
                    var dx = toNumbers(parent.getAttribute("dx").getString());
                    var len = text.length;
                    for (var i = 0; i < len; i++) {
                        var glyph = this.getGlyph(customFont, text, i);
                        ctx.translate(this.x, this.y);
                        ctx.scale(scale, -scale);
                        var lw = ctx.lineWidth;
                        ctx.lineWidth = ctx.lineWidth * unitsPerEm / fontSize;
                        if (fontStyle === "italic") ctx.transform(1, 0, .4, 1, 0, 0);
                        glyph.render(ctx);
                        if (fontStyle === "italic") ctx.transform(1, 0, -.4, 1, 0, 0);
                        ctx.lineWidth = lw;
                        ctx.scale(1 / scale, -1 / scale);
                        ctx.translate(-this.x, -this.y);
                        this.x += fontSize * (glyph.horizAdvX || customFont.horizAdvX) / unitsPerEm;
                        if (typeof dx[i] !== "undefined" && !isNaN(dx[i])) this.x += dx[i];
                    }
                    return;
                }
                var {x, y} = this;
                if (ctx.fillStyle) ctx.fillText(renderText, x, y);
                if (ctx.strokeStyle) ctx.strokeText(renderText, x, y);
            }
            applyAnchoring() {
                if (this.textChunkStart >= this.leafTexts.length) return;
                var firstElement = this.leafTexts[this.textChunkStart];
                var textAnchor = firstElement.getStyle("text-anchor").getString("start");
                var isRTL = false;
                var shift = 0;
                if (textAnchor === "start" && !isRTL || textAnchor === "end" && isRTL) shift = firstElement.x - this.minX; else if (textAnchor === "end" && !isRTL || textAnchor === "start" && isRTL) shift = firstElement.x - this.maxX; else shift = firstElement.x - (this.minX + this.maxX) / 2;
                for (var i = this.textChunkStart; i < this.leafTexts.length; i++) this.leafTexts[i].x += shift;
                this.minX = Number.POSITIVE_INFINITY;
                this.maxX = Number.NEGATIVE_INFINITY;
                this.textChunkStart = this.leafTexts.length;
            }
            adjustChildCoordinatesRecursive(ctx) {
                this.children.forEach(((_, i) => {
                    this.adjustChildCoordinatesRecursiveCore(ctx, this, this, i);
                }));
                this.applyAnchoring();
            }
            adjustChildCoordinatesRecursiveCore(ctx, textParent, parent, i) {
                var child = parent.children[i];
                if (child.children.length > 0) child.children.forEach(((_, i) => {
                    textParent.adjustChildCoordinatesRecursiveCore(ctx, textParent, child, i);
                })); else this.adjustChildCoordinates(ctx, textParent, parent, i);
            }
            adjustChildCoordinates(ctx, textParent, parent, i) {
                var child = parent.children[i];
                if (typeof child.measureText !== "function") return child;
                ctx.save();
                child.setContext(ctx, true);
                var xAttr = child.getAttribute("x");
                var yAttr = child.getAttribute("y");
                var dxAttr = child.getAttribute("dx");
                var dyAttr = child.getAttribute("dy");
                var customFont = child.getStyle("font-family").getDefinition();
                var isRTL = Boolean(customFont) && customFont.isRTL;
                if (i === 0) {
                    if (!xAttr.hasValue()) xAttr.setValue(child.getInheritedAttribute("x"));
                    if (!yAttr.hasValue()) yAttr.setValue(child.getInheritedAttribute("y"));
                    if (!dxAttr.hasValue()) dxAttr.setValue(child.getInheritedAttribute("dx"));
                    if (!dyAttr.hasValue()) dyAttr.setValue(child.getInheritedAttribute("dy"));
                }
                var width = child.measureText(ctx);
                if (isRTL) textParent.x -= width;
                if (xAttr.hasValue()) {
                    textParent.applyAnchoring();
                    child.x = xAttr.getPixels("x");
                    if (dxAttr.hasValue()) child.x += dxAttr.getPixels("x");
                } else {
                    if (dxAttr.hasValue()) textParent.x += dxAttr.getPixels("x");
                    child.x = textParent.x;
                }
                textParent.x = child.x;
                if (!isRTL) textParent.x += width;
                if (yAttr.hasValue()) {
                    child.y = yAttr.getPixels("y");
                    if (dyAttr.hasValue()) child.y += dyAttr.getPixels("y");
                } else {
                    if (dyAttr.hasValue()) textParent.y += dyAttr.getPixels("y");
                    child.y = textParent.y;
                }
                textParent.y = child.y;
                textParent.leafTexts.push(child);
                textParent.minX = Math.min(textParent.minX, child.x, child.x + width);
                textParent.maxX = Math.max(textParent.maxX, child.x, child.x + width);
                child.clearContext(ctx);
                ctx.restore();
                return child;
            }
            getChildBoundingBox(ctx, textParent, parent, i) {
                var child = parent.children[i];
                if (typeof child.getBoundingBox !== "function") return null;
                var boundingBox = child.getBoundingBox(ctx);
                if (!boundingBox) return null;
                child.children.forEach(((_, i) => {
                    var childBoundingBox = textParent.getChildBoundingBox(ctx, textParent, child, i);
                    boundingBox.addBoundingBox(childBoundingBox);
                }));
                return boundingBox;
            }
            renderChild(ctx, textParent, parent, i) {
                var child = parent.children[i];
                child.render(ctx);
                child.children.forEach(((_, i) => {
                    textParent.renderChild(ctx, textParent, child, i);
                }));
            }
            measureText(ctx) {
                var {measureCache} = this;
                if (~measureCache) return measureCache;
                var renderText = this.getText();
                var measure = this.measureTargetText(ctx, renderText);
                this.measureCache = measure;
                return measure;
            }
            measureTargetText(ctx, targetText) {
                if (!targetText.length) return 0;
                var {parent} = this;
                var customFont = parent.getStyle("font-family").getDefinition();
                if (customFont) {
                    var fontSize = this.getFontSize();
                    var text = customFont.isRTL ? targetText.split("").reverse().join("") : targetText;
                    var dx = toNumbers(parent.getAttribute("dx").getString());
                    var len = text.length;
                    var _measure = 0;
                    for (var i = 0; i < len; i++) {
                        var glyph = this.getGlyph(customFont, text, i);
                        _measure += (glyph.horizAdvX || customFont.horizAdvX) * fontSize / customFont.fontFace.unitsPerEm;
                        if (typeof dx[i] !== "undefined" && !isNaN(dx[i])) _measure += dx[i];
                    }
                    return _measure;
                }
                if (!ctx.measureText) return targetText.length * 10;
                ctx.save();
                this.setContext(ctx, true);
                var {width: measure} = ctx.measureText(targetText);
                this.clearContext(ctx);
                ctx.restore();
                return measure;
            }
            getInheritedAttribute(name) {
                var current = this;
                while (current instanceof TextElement && current.isFirstChild()) {
                    var parentAttr = current.parent.getAttribute(name);
                    if (parentAttr.hasValue(true)) return parentAttr.getValue("0");
                    current = current.parent;
                }
                return null;
            }
        }
        class TSpanElement extends TextElement {
            constructor(document, node, captureTextNodes) {
                super(document, node, new.target === TSpanElement ? true : captureTextNodes);
                this.type = "tspan";
                this.text = this.children.length > 0 ? "" : this.getTextFromNode();
            }
            getText() {
                return this.text;
            }
        }
        class TextNode extends TSpanElement {
            constructor() {
                super(...arguments);
                this.type = "textNode";
            }
        }
        class SVGElement extends RenderedElement {
            constructor() {
                super(...arguments);
                this.type = "svg";
                this.root = false;
            }
            setContext(ctx) {
                var _this$node$parentNode;
                var {document} = this;
                var {screen, window} = document;
                var canvas = ctx.canvas;
                screen.setDefaults(ctx);
                if (canvas.style && typeof ctx.font !== "undefined" && window && typeof window.getComputedStyle !== "undefined") {
                    ctx.font = window.getComputedStyle(canvas).getPropertyValue("font");
                    var fontSizeProp = new Property(document, "fontSize", Font.parse(ctx.font).fontSize);
                    if (fontSizeProp.hasValue()) {
                        document.rootEmSize = fontSizeProp.getPixels("y");
                        document.emSize = document.rootEmSize;
                    }
                }
                if (!this.getAttribute("x").hasValue()) this.getAttribute("x", true).setValue(0);
                if (!this.getAttribute("y").hasValue()) this.getAttribute("y", true).setValue(0);
                var {width, height} = screen.viewPort;
                if (!this.getStyle("width").hasValue()) this.getStyle("width", true).setValue("100%");
                if (!this.getStyle("height").hasValue()) this.getStyle("height", true).setValue("100%");
                if (!this.getStyle("color").hasValue()) this.getStyle("color", true).setValue("black");
                var refXAttr = this.getAttribute("refX");
                var refYAttr = this.getAttribute("refY");
                var viewBoxAttr = this.getAttribute("viewBox");
                var viewBox = viewBoxAttr.hasValue() ? toNumbers(viewBoxAttr.getString()) : null;
                var clip = !this.root && this.getStyle("overflow").getValue("hidden") !== "visible";
                var minX = 0;
                var minY = 0;
                var clipX = 0;
                var clipY = 0;
                if (viewBox) {
                    minX = viewBox[0];
                    minY = viewBox[1];
                }
                if (!this.root) {
                    width = this.getStyle("width").getPixels("x");
                    height = this.getStyle("height").getPixels("y");
                    if (this.type === "marker") {
                        clipX = minX;
                        clipY = minY;
                        minX = 0;
                        minY = 0;
                    }
                }
                screen.viewPort.setCurrent(width, height);
                if (this.node && (!this.parent || ((_this$node$parentNode = this.node.parentNode) === null || _this$node$parentNode === void 0 ? void 0 : _this$node$parentNode.nodeName) === "foreignObject") && this.getStyle("transform", false, true).hasValue() && !this.getStyle("transform-origin", false, true).hasValue()) this.getStyle("transform-origin", true, true).setValue("50% 50%");
                super.setContext(ctx);
                ctx.translate(this.getAttribute("x").getPixels("x"), this.getAttribute("y").getPixels("y"));
                if (viewBox) {
                    width = viewBox[2];
                    height = viewBox[3];
                }
                document.setViewBox({
                    ctx,
                    aspectRatio: this.getAttribute("preserveAspectRatio").getString(),
                    width: screen.viewPort.width,
                    desiredWidth: width,
                    height: screen.viewPort.height,
                    desiredHeight: height,
                    minX,
                    minY,
                    refX: refXAttr.getValue(),
                    refY: refYAttr.getValue(),
                    clip,
                    clipX,
                    clipY
                });
                if (viewBox) {
                    screen.viewPort.removeCurrent();
                    screen.viewPort.setCurrent(width, height);
                }
            }
            clearContext(ctx) {
                super.clearContext(ctx);
                this.document.screen.viewPort.removeCurrent();
            }
            resize(width) {
                var height = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : width;
                var preserveAspectRatio = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
                var widthAttr = this.getAttribute("width", true);
                var heightAttr = this.getAttribute("height", true);
                var viewBoxAttr = this.getAttribute("viewBox");
                var styleAttr = this.getAttribute("style");
                var originWidth = widthAttr.getNumber(0);
                var originHeight = heightAttr.getNumber(0);
                if (preserveAspectRatio) if (typeof preserveAspectRatio === "string") this.getAttribute("preserveAspectRatio", true).setValue(preserveAspectRatio); else {
                    var preserveAspectRatioAttr = this.getAttribute("preserveAspectRatio");
                    if (preserveAspectRatioAttr.hasValue()) preserveAspectRatioAttr.setValue(preserveAspectRatioAttr.getString().replace(/^\s*(\S.*\S)\s*$/, "$1"));
                }
                widthAttr.setValue(width);
                heightAttr.setValue(height);
                if (!viewBoxAttr.hasValue()) viewBoxAttr.setValue("0 0 ".concat(originWidth || width, " ").concat(originHeight || height));
                if (styleAttr.hasValue()) {
                    var widthStyle = this.getStyle("width");
                    var heightStyle = this.getStyle("height");
                    if (widthStyle.hasValue()) widthStyle.setValue("".concat(width, "px"));
                    if (heightStyle.hasValue()) heightStyle.setValue("".concat(height, "px"));
                }
            }
        }
        class RectElement extends PathElement {
            constructor() {
                super(...arguments);
                this.type = "rect";
            }
            path(ctx) {
                var x = this.getAttribute("x").getPixels("x");
                var y = this.getAttribute("y").getPixels("y");
                var width = this.getStyle("width", false, true).getPixels("x");
                var height = this.getStyle("height", false, true).getPixels("y");
                var rxAttr = this.getAttribute("rx");
                var ryAttr = this.getAttribute("ry");
                var rx = rxAttr.getPixels("x");
                var ry = ryAttr.getPixels("y");
                if (rxAttr.hasValue() && !ryAttr.hasValue()) ry = rx;
                if (ryAttr.hasValue() && !rxAttr.hasValue()) rx = ry;
                rx = Math.min(rx, width / 2);
                ry = Math.min(ry, height / 2);
                if (ctx) {
                    var KAPPA = 4 * ((Math.sqrt(2) - 1) / 3);
                    ctx.beginPath();
                    if (height > 0 && width > 0) {
                        ctx.moveTo(x + rx, y);
                        ctx.lineTo(x + width - rx, y);
                        ctx.bezierCurveTo(x + width - rx + KAPPA * rx, y, x + width, y + ry - KAPPA * ry, x + width, y + ry);
                        ctx.lineTo(x + width, y + height - ry);
                        ctx.bezierCurveTo(x + width, y + height - ry + KAPPA * ry, x + width - rx + KAPPA * rx, y + height, x + width - rx, y + height);
                        ctx.lineTo(x + rx, y + height);
                        ctx.bezierCurveTo(x + rx - KAPPA * rx, y + height, x, y + height - ry + KAPPA * ry, x, y + height - ry);
                        ctx.lineTo(x, y + ry);
                        ctx.bezierCurveTo(x, y + ry - KAPPA * ry, x + rx - KAPPA * rx, y, x + rx, y);
                        ctx.closePath();
                    }
                }
                return new BoundingBox(x, y, x + width, y + height);
            }
            getMarkers() {
                return null;
            }
        }
        class CircleElement extends PathElement {
            constructor() {
                super(...arguments);
                this.type = "circle";
            }
            path(ctx) {
                var cx = this.getAttribute("cx").getPixels("x");
                var cy = this.getAttribute("cy").getPixels("y");
                var r = this.getAttribute("r").getPixels();
                if (ctx && r > 0) {
                    ctx.beginPath();
                    ctx.arc(cx, cy, r, 0, Math.PI * 2, false);
                    ctx.closePath();
                }
                return new BoundingBox(cx - r, cy - r, cx + r, cy + r);
            }
            getMarkers() {
                return null;
            }
        }
        class EllipseElement extends PathElement {
            constructor() {
                super(...arguments);
                this.type = "ellipse";
            }
            path(ctx) {
                var KAPPA = 4 * ((Math.sqrt(2) - 1) / 3);
                var rx = this.getAttribute("rx").getPixels("x");
                var ry = this.getAttribute("ry").getPixels("y");
                var cx = this.getAttribute("cx").getPixels("x");
                var cy = this.getAttribute("cy").getPixels("y");
                if (ctx && rx > 0 && ry > 0) {
                    ctx.beginPath();
                    ctx.moveTo(cx + rx, cy);
                    ctx.bezierCurveTo(cx + rx, cy + KAPPA * ry, cx + KAPPA * rx, cy + ry, cx, cy + ry);
                    ctx.bezierCurveTo(cx - KAPPA * rx, cy + ry, cx - rx, cy + KAPPA * ry, cx - rx, cy);
                    ctx.bezierCurveTo(cx - rx, cy - KAPPA * ry, cx - KAPPA * rx, cy - ry, cx, cy - ry);
                    ctx.bezierCurveTo(cx + KAPPA * rx, cy - ry, cx + rx, cy - KAPPA * ry, cx + rx, cy);
                    ctx.closePath();
                }
                return new BoundingBox(cx - rx, cy - ry, cx + rx, cy + ry);
            }
            getMarkers() {
                return null;
            }
        }
        class LineElement extends PathElement {
            constructor() {
                super(...arguments);
                this.type = "line";
            }
            getPoints() {
                return [ new Point(this.getAttribute("x1").getPixels("x"), this.getAttribute("y1").getPixels("y")), new Point(this.getAttribute("x2").getPixels("x"), this.getAttribute("y2").getPixels("y")) ];
            }
            path(ctx) {
                var [{x: x0, y: y0}, {x: x1, y: y1}] = this.getPoints();
                if (ctx) {
                    ctx.beginPath();
                    ctx.moveTo(x0, y0);
                    ctx.lineTo(x1, y1);
                }
                return new BoundingBox(x0, y0, x1, y1);
            }
            getMarkers() {
                var [p0, p1] = this.getPoints();
                var a = p0.angleTo(p1);
                return [ [ p0, a ], [ p1, a ] ];
            }
        }
        class PolylineElement extends PathElement {
            constructor(document, node, captureTextNodes) {
                super(document, node, captureTextNodes);
                this.type = "polyline";
                this.points = [];
                this.points = Point.parsePath(this.getAttribute("points").getString());
            }
            path(ctx) {
                var {points} = this;
                var [{x: x0, y: y0}] = points;
                var boundingBox = new BoundingBox(x0, y0);
                if (ctx) {
                    ctx.beginPath();
                    ctx.moveTo(x0, y0);
                }
                points.forEach((_ref => {
                    var {x, y} = _ref;
                    boundingBox.addPoint(x, y);
                    if (ctx) ctx.lineTo(x, y);
                }));
                return boundingBox;
            }
            getMarkers() {
                var {points} = this;
                var lastIndex = points.length - 1;
                var markers = [];
                points.forEach(((point, i) => {
                    if (i === lastIndex) return;
                    markers.push([ point, point.angleTo(points[i + 1]) ]);
                }));
                if (markers.length > 0) markers.push([ points[points.length - 1], markers[markers.length - 1][1] ]);
                return markers;
            }
        }
        class PolygonElement extends PolylineElement {
            constructor() {
                super(...arguments);
                this.type = "polygon";
            }
            path(ctx) {
                var boundingBox = super.path(ctx);
                var [{x, y}] = this.points;
                if (ctx) {
                    ctx.lineTo(x, y);
                    ctx.closePath();
                }
                return boundingBox;
            }
        }
        class PatternElement extends Element {
            constructor() {
                super(...arguments);
                this.type = "pattern";
            }
            createPattern(ctx, _, parentOpacityProp) {
                var width = this.getStyle("width").getPixels("x", true);
                var height = this.getStyle("height").getPixels("y", true);
                var patternSvg = new SVGElement(this.document, null);
                patternSvg.attributes.viewBox = new Property(this.document, "viewBox", this.getAttribute("viewBox").getValue());
                patternSvg.attributes.width = new Property(this.document, "width", "".concat(width, "px"));
                patternSvg.attributes.height = new Property(this.document, "height", "".concat(height, "px"));
                patternSvg.attributes.transform = new Property(this.document, "transform", this.getAttribute("patternTransform").getValue());
                patternSvg.children = this.children;
                var patternCanvas = this.document.createCanvas(width, height);
                var patternCtx = patternCanvas.getContext("2d");
                var xAttr = this.getAttribute("x");
                var yAttr = this.getAttribute("y");
                if (xAttr.hasValue() && yAttr.hasValue()) patternCtx.translate(xAttr.getPixels("x", true), yAttr.getPixels("y", true));
                if (parentOpacityProp.hasValue()) this.styles["fill-opacity"] = parentOpacityProp; else Reflect.deleteProperty(this.styles, "fill-opacity");
                for (var x = -1; x <= 1; x++) for (var y = -1; y <= 1; y++) {
                    patternCtx.save();
                    patternSvg.attributes.x = new Property(this.document, "x", x * patternCanvas.width);
                    patternSvg.attributes.y = new Property(this.document, "y", y * patternCanvas.height);
                    patternSvg.render(patternCtx);
                    patternCtx.restore();
                }
                var pattern = ctx.createPattern(patternCanvas, "repeat");
                return pattern;
            }
        }
        class MarkerElement extends Element {
            constructor() {
                super(...arguments);
                this.type = "marker";
            }
            render(ctx, point, angle) {
                if (!point) return;
                var {x, y} = point;
                var orient = this.getAttribute("orient").getString("auto");
                var markerUnits = this.getAttribute("markerUnits").getString("strokeWidth");
                ctx.translate(x, y);
                if (orient === "auto") ctx.rotate(angle);
                if (markerUnits === "strokeWidth") ctx.scale(ctx.lineWidth, ctx.lineWidth);
                ctx.save();
                var markerSvg = new SVGElement(this.document, null);
                markerSvg.type = this.type;
                markerSvg.attributes.viewBox = new Property(this.document, "viewBox", this.getAttribute("viewBox").getValue());
                markerSvg.attributes.refX = new Property(this.document, "refX", this.getAttribute("refX").getValue());
                markerSvg.attributes.refY = new Property(this.document, "refY", this.getAttribute("refY").getValue());
                markerSvg.attributes.width = new Property(this.document, "width", this.getAttribute("markerWidth").getValue());
                markerSvg.attributes.height = new Property(this.document, "height", this.getAttribute("markerHeight").getValue());
                markerSvg.attributes.overflow = new Property(this.document, "overflow", this.getAttribute("overflow").getValue());
                markerSvg.attributes.fill = new Property(this.document, "fill", this.getAttribute("fill").getColor("black"));
                markerSvg.attributes.stroke = new Property(this.document, "stroke", this.getAttribute("stroke").getValue("none"));
                markerSvg.children = this.children;
                markerSvg.render(ctx);
                ctx.restore();
                if (markerUnits === "strokeWidth") ctx.scale(1 / ctx.lineWidth, 1 / ctx.lineWidth);
                if (orient === "auto") ctx.rotate(-angle);
                ctx.translate(-x, -y);
            }
        }
        class DefsElement extends Element {
            constructor() {
                super(...arguments);
                this.type = "defs";
            }
            render() {}
        }
        class GElement extends RenderedElement {
            constructor() {
                super(...arguments);
                this.type = "g";
            }
            getBoundingBox(ctx) {
                var boundingBox = new BoundingBox;
                this.children.forEach((child => {
                    boundingBox.addBoundingBox(child.getBoundingBox(ctx));
                }));
                return boundingBox;
            }
        }
        class GradientElement extends Element {
            constructor(document, node, captureTextNodes) {
                super(document, node, captureTextNodes);
                this.attributesToInherit = [ "gradientUnits" ];
                this.stops = [];
                var {stops, children} = this;
                children.forEach((child => {
                    if (child.type === "stop") stops.push(child);
                }));
            }
            getGradientUnits() {
                return this.getAttribute("gradientUnits").getString("objectBoundingBox");
            }
            createGradient(ctx, element, parentOpacityProp) {
                var stopsContainer = this;
                if (this.getHrefAttribute().hasValue()) {
                    stopsContainer = this.getHrefAttribute().getDefinition();
                    this.inheritStopContainer(stopsContainer);
                }
                var {stops} = stopsContainer;
                var gradient = this.getGradient(ctx, element);
                if (!gradient) return this.addParentOpacity(parentOpacityProp, stops[stops.length - 1].color);
                stops.forEach((stop => {
                    gradient.addColorStop(stop.offset, this.addParentOpacity(parentOpacityProp, stop.color));
                }));
                if (this.getAttribute("gradientTransform").hasValue()) {
                    var {document} = this;
                    var {MAX_VIRTUAL_PIXELS, viewPort} = document.screen;
                    var [rootView] = viewPort.viewPorts;
                    var rect = new RectElement(document, null);
                    rect.attributes.x = new Property(document, "x", -MAX_VIRTUAL_PIXELS / 3);
                    rect.attributes.y = new Property(document, "y", -MAX_VIRTUAL_PIXELS / 3);
                    rect.attributes.width = new Property(document, "width", MAX_VIRTUAL_PIXELS);
                    rect.attributes.height = new Property(document, "height", MAX_VIRTUAL_PIXELS);
                    var group = new GElement(document, null);
                    group.attributes.transform = new Property(document, "transform", this.getAttribute("gradientTransform").getValue());
                    group.children = [ rect ];
                    var patternSvg = new SVGElement(document, null);
                    patternSvg.attributes.x = new Property(document, "x", 0);
                    patternSvg.attributes.y = new Property(document, "y", 0);
                    patternSvg.attributes.width = new Property(document, "width", rootView.width);
                    patternSvg.attributes.height = new Property(document, "height", rootView.height);
                    patternSvg.children = [ group ];
                    var patternCanvas = document.createCanvas(rootView.width, rootView.height);
                    var patternCtx = patternCanvas.getContext("2d");
                    patternCtx.fillStyle = gradient;
                    patternSvg.render(patternCtx);
                    return patternCtx.createPattern(patternCanvas, "no-repeat");
                }
                return gradient;
            }
            inheritStopContainer(stopsContainer) {
                this.attributesToInherit.forEach((attributeToInherit => {
                    if (!this.getAttribute(attributeToInherit).hasValue() && stopsContainer.getAttribute(attributeToInherit).hasValue()) this.getAttribute(attributeToInherit, true).setValue(stopsContainer.getAttribute(attributeToInherit).getValue());
                }));
            }
            addParentOpacity(parentOpacityProp, color) {
                if (parentOpacityProp.hasValue()) {
                    var colorProp = new Property(this.document, "color", color);
                    return colorProp.addOpacity(parentOpacityProp).getColor();
                }
                return color;
            }
        }
        class LinearGradientElement extends GradientElement {
            constructor(document, node, captureTextNodes) {
                super(document, node, captureTextNodes);
                this.type = "linearGradient";
                this.attributesToInherit.push("x1", "y1", "x2", "y2");
            }
            getGradient(ctx, element) {
                var isBoundingBoxUnits = this.getGradientUnits() === "objectBoundingBox";
                var boundingBox = isBoundingBoxUnits ? element.getBoundingBox(ctx) : null;
                if (isBoundingBoxUnits && !boundingBox) return null;
                if (!this.getAttribute("x1").hasValue() && !this.getAttribute("y1").hasValue() && !this.getAttribute("x2").hasValue() && !this.getAttribute("y2").hasValue()) {
                    this.getAttribute("x1", true).setValue(0);
                    this.getAttribute("y1", true).setValue(0);
                    this.getAttribute("x2", true).setValue(1);
                    this.getAttribute("y2", true).setValue(0);
                }
                var x1 = isBoundingBoxUnits ? boundingBox.x + boundingBox.width * this.getAttribute("x1").getNumber() : this.getAttribute("x1").getPixels("x");
                var y1 = isBoundingBoxUnits ? boundingBox.y + boundingBox.height * this.getAttribute("y1").getNumber() : this.getAttribute("y1").getPixels("y");
                var x2 = isBoundingBoxUnits ? boundingBox.x + boundingBox.width * this.getAttribute("x2").getNumber() : this.getAttribute("x2").getPixels("x");
                var y2 = isBoundingBoxUnits ? boundingBox.y + boundingBox.height * this.getAttribute("y2").getNumber() : this.getAttribute("y2").getPixels("y");
                if (x1 === x2 && y1 === y2) return null;
                return ctx.createLinearGradient(x1, y1, x2, y2);
            }
        }
        class RadialGradientElement extends GradientElement {
            constructor(document, node, captureTextNodes) {
                super(document, node, captureTextNodes);
                this.type = "radialGradient";
                this.attributesToInherit.push("cx", "cy", "r", "fx", "fy", "fr");
            }
            getGradient(ctx, element) {
                var isBoundingBoxUnits = this.getGradientUnits() === "objectBoundingBox";
                var boundingBox = element.getBoundingBox(ctx);
                if (isBoundingBoxUnits && !boundingBox) return null;
                if (!this.getAttribute("cx").hasValue()) this.getAttribute("cx", true).setValue("50%");
                if (!this.getAttribute("cy").hasValue()) this.getAttribute("cy", true).setValue("50%");
                if (!this.getAttribute("r").hasValue()) this.getAttribute("r", true).setValue("50%");
                var cx = isBoundingBoxUnits ? boundingBox.x + boundingBox.width * this.getAttribute("cx").getNumber() : this.getAttribute("cx").getPixels("x");
                var cy = isBoundingBoxUnits ? boundingBox.y + boundingBox.height * this.getAttribute("cy").getNumber() : this.getAttribute("cy").getPixels("y");
                var fx = cx;
                var fy = cy;
                if (this.getAttribute("fx").hasValue()) fx = isBoundingBoxUnits ? boundingBox.x + boundingBox.width * this.getAttribute("fx").getNumber() : this.getAttribute("fx").getPixels("x");
                if (this.getAttribute("fy").hasValue()) fy = isBoundingBoxUnits ? boundingBox.y + boundingBox.height * this.getAttribute("fy").getNumber() : this.getAttribute("fy").getPixels("y");
                var r = isBoundingBoxUnits ? (boundingBox.width + boundingBox.height) / 2 * this.getAttribute("r").getNumber() : this.getAttribute("r").getPixels();
                var fr = this.getAttribute("fr").getPixels();
                return ctx.createRadialGradient(fx, fy, fr, cx, cy, r);
            }
        }
        class StopElement extends Element {
            constructor(document, node, captureTextNodes) {
                super(document, node, captureTextNodes);
                this.type = "stop";
                var offset = Math.max(0, Math.min(1, this.getAttribute("offset").getNumber()));
                var stopOpacity = this.getStyle("stop-opacity");
                var stopColor = this.getStyle("stop-color", true);
                if (stopColor.getString() === "") stopColor.setValue("#000");
                if (stopOpacity.hasValue()) stopColor = stopColor.addOpacity(stopOpacity);
                this.offset = offset;
                this.color = stopColor.getColor();
            }
        }
        class AnimateElement extends Element {
            constructor(document, node, captureTextNodes) {
                super(document, node, captureTextNodes);
                this.type = "animate";
                this.duration = 0;
                this.initialValue = null;
                this.initialUnits = "";
                this.removed = false;
                this.frozen = false;
                document.screen.animations.push(this);
                this.begin = this.getAttribute("begin").getMilliseconds();
                this.maxDuration = this.begin + this.getAttribute("dur").getMilliseconds();
                this.from = this.getAttribute("from");
                this.to = this.getAttribute("to");
                this.values = new Property(document, "values", null);
                var valuesAttr = this.getAttribute("values");
                if (valuesAttr.hasValue()) this.values.setValue(valuesAttr.getString().split(";"));
            }
            getProperty() {
                var attributeType = this.getAttribute("attributeType").getString();
                var attributeName = this.getAttribute("attributeName").getString();
                if (attributeType === "CSS") return this.parent.getStyle(attributeName, true);
                return this.parent.getAttribute(attributeName, true);
            }
            calcValue() {
                var {initialUnits} = this;
                var {progress, from, to} = this.getProgress();
                var newValue = from.getNumber() + (to.getNumber() - from.getNumber()) * progress;
                if (initialUnits === "%") newValue *= 100;
                return "".concat(newValue).concat(initialUnits);
            }
            update(delta) {
                var {parent} = this;
                var prop = this.getProperty();
                if (!this.initialValue) {
                    this.initialValue = prop.getString();
                    this.initialUnits = prop.getUnits();
                }
                if (this.duration > this.maxDuration) {
                    var fill = this.getAttribute("fill").getString("remove");
                    if (this.getAttribute("repeatCount").getString() === "indefinite" || this.getAttribute("repeatDur").getString() === "indefinite") this.duration = 0; else if (fill === "freeze" && !this.frozen) {
                        this.frozen = true;
                        parent.animationFrozen = true;
                        parent.animationFrozenValue = prop.getString();
                    } else if (fill === "remove" && !this.removed) {
                        this.removed = true;
                        prop.setValue(parent.animationFrozen ? parent.animationFrozenValue : this.initialValue);
                        return true;
                    }
                    return false;
                }
                this.duration += delta;
                var updated = false;
                if (this.begin < this.duration) {
                    var newValue = this.calcValue();
                    var typeAttr = this.getAttribute("type");
                    if (typeAttr.hasValue()) {
                        var type = typeAttr.getString();
                        newValue = "".concat(type, "(").concat(newValue, ")");
                    }
                    prop.setValue(newValue);
                    updated = true;
                }
                return updated;
            }
            getProgress() {
                var {document, values} = this;
                var result = {
                    progress: (this.duration - this.begin) / (this.maxDuration - this.begin)
                };
                if (values.hasValue()) {
                    var p = result.progress * (values.getValue().length - 1);
                    var lb = Math.floor(p);
                    var ub = Math.ceil(p);
                    result.from = new Property(document, "from", parseFloat(values.getValue()[lb]));
                    result.to = new Property(document, "to", parseFloat(values.getValue()[ub]));
                    result.progress = (p - lb) / (ub - lb);
                } else {
                    result.from = this.from;
                    result.to = this.to;
                }
                return result;
            }
        }
        class AnimateColorElement extends AnimateElement {
            constructor() {
                super(...arguments);
                this.type = "animateColor";
            }
            calcValue() {
                var {progress, from, to} = this.getProgress();
                var colorFrom = new rgbcolor(from.getColor());
                var colorTo = new rgbcolor(to.getColor());
                if (colorFrom.ok && colorTo.ok) {
                    var r = colorFrom.r + (colorTo.r - colorFrom.r) * progress;
                    var g = colorFrom.g + (colorTo.g - colorFrom.g) * progress;
                    var b = colorFrom.b + (colorTo.b - colorFrom.b) * progress;
                    return "rgb(".concat(Math.floor(r), ", ").concat(Math.floor(g), ", ").concat(Math.floor(b), ")");
                }
                return this.getAttribute("from").getColor();
            }
        }
        class AnimateTransformElement extends AnimateElement {
            constructor() {
                super(...arguments);
                this.type = "animateTransform";
            }
            calcValue() {
                var {progress, from, to} = this.getProgress();
                var transformFrom = toNumbers(from.getString());
                var transformTo = toNumbers(to.getString());
                var newValue = transformFrom.map(((from, i) => {
                    var to = transformTo[i];
                    return from + (to - from) * progress;
                })).join(" ");
                return newValue;
            }
        }
        class FontElement extends Element {
            constructor(document, node, captureTextNodes) {
                super(document, node, captureTextNodes);
                this.type = "font";
                this.glyphs = {};
                this.horizAdvX = this.getAttribute("horiz-adv-x").getNumber();
                var {definitions} = document;
                var {children} = this;
                for (var child of children) switch (child.type) {
                  case "font-face":
                    this.fontFace = child;
                    var fontFamilyStyle = child.getStyle("font-family");
                    if (fontFamilyStyle.hasValue()) definitions[fontFamilyStyle.getString()] = this;
                    break;

                  case "missing-glyph":
                    this.missingGlyph = child;
                    break;

                  case "glyph":
                    var glyph = child;
                    if (glyph.arabicForm) {
                        this.isRTL = true;
                        this.isArabic = true;
                        if (typeof this.glyphs[glyph.unicode] === "undefined") this.glyphs[glyph.unicode] = {};
                        this.glyphs[glyph.unicode][glyph.arabicForm] = glyph;
                    } else this.glyphs[glyph.unicode] = glyph;
                    break;
                }
            }
            render() {}
        }
        class FontFaceElement extends Element {
            constructor(document, node, captureTextNodes) {
                super(document, node, captureTextNodes);
                this.type = "font-face";
                this.ascent = this.getAttribute("ascent").getNumber();
                this.descent = this.getAttribute("descent").getNumber();
                this.unitsPerEm = this.getAttribute("units-per-em").getNumber();
            }
        }
        class MissingGlyphElement extends PathElement {
            constructor() {
                super(...arguments);
                this.type = "missing-glyph";
                this.horizAdvX = 0;
            }
        }
        class TRefElement extends TextElement {
            constructor() {
                super(...arguments);
                this.type = "tref";
            }
            getText() {
                var element = this.getHrefAttribute().getDefinition();
                if (element) {
                    var firstChild = element.children[0];
                    if (firstChild) return firstChild.getText();
                }
                return "";
            }
        }
        class AElement extends TextElement {
            constructor(document, node, captureTextNodes) {
                super(document, node, captureTextNodes);
                this.type = "a";
                var {childNodes} = node;
                var firstChild = childNodes[0];
                var hasText = childNodes.length > 0 && Array.from(childNodes).every((node => node.nodeType === 3));
                this.hasText = hasText;
                this.text = hasText ? this.getTextFromNode(firstChild) : "";
            }
            getText() {
                return this.text;
            }
            renderChildren(ctx) {
                if (this.hasText) {
                    super.renderChildren(ctx);
                    var {document, x, y} = this;
                    var {mouse} = document.screen;
                    var fontSize = new Property(document, "fontSize", Font.parse(document.ctx.font).fontSize);
                    if (mouse.isWorking()) mouse.checkBoundingBox(this, new BoundingBox(x, y - fontSize.getPixels("y"), x + this.measureText(ctx), y));
                } else if (this.children.length > 0) {
                    var g = new GElement(this.document, null);
                    g.children = this.children;
                    g.parent = this;
                    g.render(ctx);
                }
            }
            onClick() {
                var {window} = this.document;
                if (window) window.open(this.getHrefAttribute().getString());
            }
            onMouseMove() {
                var ctx = this.document.ctx;
                ctx.canvas.style.cursor = "pointer";
            }
        }
        function ownKeys$2(object, enumerableOnly) {
            var keys = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var symbols = Object.getOwnPropertySymbols(object);
                if (enumerableOnly) symbols = symbols.filter((function(sym) {
                    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                }));
                keys.push.apply(keys, symbols);
            }
            return keys;
        }
        function _objectSpread$2(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i] != null ? arguments[i] : {};
                if (i % 2) ownKeys$2(Object(source), true).forEach((function(key) {
                    _defineProperty(target, key, source[key]);
                })); else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); else ownKeys$2(Object(source)).forEach((function(key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                }));
            }
            return target;
        }
        class TextPathElement extends TextElement {
            constructor(document, node, captureTextNodes) {
                super(document, node, captureTextNodes);
                this.type = "textPath";
                this.textWidth = 0;
                this.textHeight = 0;
                this.pathLength = -1;
                this.glyphInfo = null;
                this.letterSpacingCache = [];
                this.measuresCache = new Map([ [ "", 0 ] ]);
                var pathElement = this.getHrefAttribute().getDefinition();
                this.text = this.getTextFromNode();
                this.dataArray = this.parsePathData(pathElement);
            }
            getText() {
                return this.text;
            }
            path(ctx) {
                var {dataArray} = this;
                if (ctx) ctx.beginPath();
                dataArray.forEach((_ref => {
                    var {type, points} = _ref;
                    switch (type) {
                      case PathParser.LINE_TO:
                        if (ctx) ctx.lineTo(points[0], points[1]);
                        break;

                      case PathParser.MOVE_TO:
                        if (ctx) ctx.moveTo(points[0], points[1]);
                        break;

                      case PathParser.CURVE_TO:
                        if (ctx) ctx.bezierCurveTo(points[0], points[1], points[2], points[3], points[4], points[5]);
                        break;

                      case PathParser.QUAD_TO:
                        if (ctx) ctx.quadraticCurveTo(points[0], points[1], points[2], points[3]);
                        break;

                      case PathParser.ARC:
                        var [cx, cy, rx, ry, theta, dTheta, psi, fs] = points;
                        var r = rx > ry ? rx : ry;
                        var scaleX = rx > ry ? 1 : rx / ry;
                        var scaleY = rx > ry ? ry / rx : 1;
                        if (ctx) {
                            ctx.translate(cx, cy);
                            ctx.rotate(psi);
                            ctx.scale(scaleX, scaleY);
                            ctx.arc(0, 0, r, theta, theta + dTheta, Boolean(1 - fs));
                            ctx.scale(1 / scaleX, 1 / scaleY);
                            ctx.rotate(-psi);
                            ctx.translate(-cx, -cy);
                        }
                        break;

                      case PathParser.CLOSE_PATH:
                        if (ctx) ctx.closePath();
                        break;
                    }
                }));
            }
            renderChildren(ctx) {
                this.setTextData(ctx);
                ctx.save();
                var textDecoration = this.parent.getStyle("text-decoration").getString();
                var fontSize = this.getFontSize();
                var {glyphInfo} = this;
                var fill = ctx.fillStyle;
                if (textDecoration === "underline") ctx.beginPath();
                glyphInfo.forEach(((glyph, i) => {
                    var {p0, p1, rotation, text: partialText} = glyph;
                    ctx.save();
                    ctx.translate(p0.x, p0.y);
                    ctx.rotate(rotation);
                    if (ctx.fillStyle) ctx.fillText(partialText, 0, 0);
                    if (ctx.strokeStyle) ctx.strokeText(partialText, 0, 0);
                    ctx.restore();
                    if (textDecoration === "underline") {
                        if (i === 0) ctx.moveTo(p0.x, p0.y + fontSize / 8);
                        ctx.lineTo(p1.x, p1.y + fontSize / 5);
                    }
                }));
                if (textDecoration === "underline") {
                    ctx.lineWidth = fontSize / 20;
                    ctx.strokeStyle = fill;
                    ctx.stroke();
                    ctx.closePath();
                }
                ctx.restore();
            }
            getLetterSpacingAt() {
                var idx = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
                return this.letterSpacingCache[idx] || 0;
            }
            findSegmentToFitChar(ctx, anchor, textFullWidth, fullPathWidth, spacesNumber, inputOffset, dy, c, charI) {
                var offset = inputOffset;
                var glyphWidth = this.measureText(ctx, c);
                if (c === " " && anchor === "justify" && textFullWidth < fullPathWidth) glyphWidth += (fullPathWidth - textFullWidth) / spacesNumber;
                if (charI > -1) offset += this.getLetterSpacingAt(charI);
                var splineStep = this.textHeight / 20;
                var p0 = this.getEquidistantPointOnPath(offset, splineStep, 0);
                var p1 = this.getEquidistantPointOnPath(offset + glyphWidth, splineStep, 0);
                var segment = {
                    p0,
                    p1
                };
                var rotation = p0 && p1 ? Math.atan2(p1.y - p0.y, p1.x - p0.x) : 0;
                if (dy) {
                    var dyX = Math.cos(Math.PI / 2 + rotation) * dy;
                    var dyY = Math.cos(-rotation) * dy;
                    segment.p0 = _objectSpread$2(_objectSpread$2({}, p0), {}, {
                        x: p0.x + dyX,
                        y: p0.y + dyY
                    });
                    segment.p1 = _objectSpread$2(_objectSpread$2({}, p1), {}, {
                        x: p1.x + dyX,
                        y: p1.y + dyY
                    });
                }
                offset += glyphWidth;
                return {
                    offset,
                    segment,
                    rotation
                };
            }
            measureText(ctx, text) {
                var {measuresCache} = this;
                var targetText = text || this.getText();
                if (measuresCache.has(targetText)) return measuresCache.get(targetText);
                var measure = this.measureTargetText(ctx, targetText);
                measuresCache.set(targetText, measure);
                return measure;
            }
            setTextData(ctx) {
                if (this.glyphInfo) return;
                var renderText = this.getText();
                var chars = renderText.split("");
                var spacesNumber = renderText.split(" ").length - 1;
                var dx = this.parent.getAttribute("dx").split().map((_ => _.getPixels("x")));
                var dy = this.parent.getAttribute("dy").getPixels("y");
                var anchor = this.parent.getStyle("text-anchor").getString("start");
                var thisSpacing = this.getStyle("letter-spacing");
                var parentSpacing = this.parent.getStyle("letter-spacing");
                var letterSpacing = 0;
                if (!thisSpacing.hasValue() || thisSpacing.getValue() === "inherit") letterSpacing = parentSpacing.getPixels(); else if (thisSpacing.hasValue()) if (thisSpacing.getValue() !== "initial" && thisSpacing.getValue() !== "unset") letterSpacing = thisSpacing.getPixels();
                var letterSpacingCache = [];
                var textLen = renderText.length;
                this.letterSpacingCache = letterSpacingCache;
                for (var i = 0; i < textLen; i++) letterSpacingCache.push(typeof dx[i] !== "undefined" ? dx[i] : letterSpacing);
                var dxSum = letterSpacingCache.reduce(((acc, cur, i) => i === 0 ? 0 : acc + cur || 0), 0);
                var textWidth = this.measureText(ctx);
                var textFullWidth = Math.max(textWidth + dxSum, 0);
                this.textWidth = textWidth;
                this.textHeight = this.getFontSize();
                this.glyphInfo = [];
                var fullPathWidth = this.getPathLength();
                var startOffset = this.getStyle("startOffset").getNumber(0) * fullPathWidth;
                var offset = 0;
                if (anchor === "middle" || anchor === "center") offset = -textFullWidth / 2;
                if (anchor === "end" || anchor === "right") offset = -textFullWidth;
                offset += startOffset;
                chars.forEach(((char, i) => {
                    var {offset: nextOffset, segment, rotation} = this.findSegmentToFitChar(ctx, anchor, textFullWidth, fullPathWidth, spacesNumber, offset, dy, char, i);
                    offset = nextOffset;
                    if (!segment.p0 || !segment.p1) return;
                    this.glyphInfo.push({
                        text: chars[i],
                        p0: segment.p0,
                        p1: segment.p1,
                        rotation
                    });
                }));
            }
            parsePathData(path) {
                this.pathLength = -1;
                if (!path) return [];
                var pathCommands = [];
                var {pathParser} = path;
                pathParser.reset();
                while (!pathParser.isEnd()) {
                    var {current} = pathParser;
                    var startX = current ? current.x : 0;
                    var startY = current ? current.y : 0;
                    var command = pathParser.next();
                    var nextCommandType = command.type;
                    var points = [];
                    switch (command.type) {
                      case PathParser.MOVE_TO:
                        this.pathM(pathParser, points);
                        break;

                      case PathParser.LINE_TO:
                        nextCommandType = this.pathL(pathParser, points);
                        break;

                      case PathParser.HORIZ_LINE_TO:
                        nextCommandType = this.pathH(pathParser, points);
                        break;

                      case PathParser.VERT_LINE_TO:
                        nextCommandType = this.pathV(pathParser, points);
                        break;

                      case PathParser.CURVE_TO:
                        this.pathC(pathParser, points);
                        break;

                      case PathParser.SMOOTH_CURVE_TO:
                        nextCommandType = this.pathS(pathParser, points);
                        break;

                      case PathParser.QUAD_TO:
                        this.pathQ(pathParser, points);
                        break;

                      case PathParser.SMOOTH_QUAD_TO:
                        nextCommandType = this.pathT(pathParser, points);
                        break;

                      case PathParser.ARC:
                        points = this.pathA(pathParser);
                        break;

                      case PathParser.CLOSE_PATH:
                        PathElement.pathZ(pathParser);
                        break;
                    }
                    if (command.type !== PathParser.CLOSE_PATH) pathCommands.push({
                        type: nextCommandType,
                        points,
                        start: {
                            x: startX,
                            y: startY
                        },
                        pathLength: this.calcLength(startX, startY, nextCommandType, points)
                    }); else pathCommands.push({
                        type: PathParser.CLOSE_PATH,
                        points: [],
                        pathLength: 0
                    });
                }
                return pathCommands;
            }
            pathM(pathParser, points) {
                var {x, y} = PathElement.pathM(pathParser).point;
                points.push(x, y);
            }
            pathL(pathParser, points) {
                var {x, y} = PathElement.pathL(pathParser).point;
                points.push(x, y);
                return PathParser.LINE_TO;
            }
            pathH(pathParser, points) {
                var {x, y} = PathElement.pathH(pathParser).point;
                points.push(x, y);
                return PathParser.LINE_TO;
            }
            pathV(pathParser, points) {
                var {x, y} = PathElement.pathV(pathParser).point;
                points.push(x, y);
                return PathParser.LINE_TO;
            }
            pathC(pathParser, points) {
                var {point, controlPoint, currentPoint} = PathElement.pathC(pathParser);
                points.push(point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
            }
            pathS(pathParser, points) {
                var {point, controlPoint, currentPoint} = PathElement.pathS(pathParser);
                points.push(point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
                return PathParser.CURVE_TO;
            }
            pathQ(pathParser, points) {
                var {controlPoint, currentPoint} = PathElement.pathQ(pathParser);
                points.push(controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
            }
            pathT(pathParser, points) {
                var {controlPoint, currentPoint} = PathElement.pathT(pathParser);
                points.push(controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
                return PathParser.QUAD_TO;
            }
            pathA(pathParser) {
                var {rX, rY, sweepFlag, xAxisRotation, centp, a1, ad} = PathElement.pathA(pathParser);
                if (sweepFlag === 0 && ad > 0) ad -= 2 * Math.PI;
                if (sweepFlag === 1 && ad < 0) ad += 2 * Math.PI;
                return [ centp.x, centp.y, rX, rY, a1, ad, xAxisRotation, sweepFlag ];
            }
            calcLength(x, y, commandType, points) {
                var len = 0;
                var p1 = null;
                var p2 = null;
                var t = 0;
                switch (commandType) {
                  case PathParser.LINE_TO:
                    return this.getLineLength(x, y, points[0], points[1]);

                  case PathParser.CURVE_TO:
                    len = 0;
                    p1 = this.getPointOnCubicBezier(0, x, y, points[0], points[1], points[2], points[3], points[4], points[5]);
                    for (t = .01; t <= 1; t += .01) {
                        p2 = this.getPointOnCubicBezier(t, x, y, points[0], points[1], points[2], points[3], points[4], points[5]);
                        len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
                        p1 = p2;
                    }
                    return len;

                  case PathParser.QUAD_TO:
                    len = 0;
                    p1 = this.getPointOnQuadraticBezier(0, x, y, points[0], points[1], points[2], points[3]);
                    for (t = .01; t <= 1; t += .01) {
                        p2 = this.getPointOnQuadraticBezier(t, x, y, points[0], points[1], points[2], points[3]);
                        len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
                        p1 = p2;
                    }
                    return len;

                  case PathParser.ARC:
                    len = 0;
                    var start = points[4];
                    var dTheta = points[5];
                    var end = points[4] + dTheta;
                    var inc = Math.PI / 180;
                    if (Math.abs(start - end) < inc) inc = Math.abs(start - end);
                    p1 = this.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], start, 0);
                    if (dTheta < 0) for (t = start - inc; t > end; t -= inc) {
                        p2 = this.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], t, 0);
                        len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
                        p1 = p2;
                    } else for (t = start + inc; t < end; t += inc) {
                        p2 = this.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], t, 0);
                        len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
                        p1 = p2;
                    }
                    p2 = this.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], end, 0);
                    len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
                    return len;
                }
                return 0;
            }
            getPointOnLine(dist, p1x, p1y, p2x, p2y) {
                var fromX = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : p1x;
                var fromY = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : p1y;
                var m = (p2y - p1y) / (p2x - p1x + PSEUDO_ZERO);
                var run = Math.sqrt(dist * dist / (1 + m * m));
                if (p2x < p1x) run *= -1;
                var rise = m * run;
                var pt = null;
                if (p2x === p1x) pt = {
                    x: fromX,
                    y: fromY + rise
                }; else if ((fromY - p1y) / (fromX - p1x + PSEUDO_ZERO) === m) pt = {
                    x: fromX + run,
                    y: fromY + rise
                }; else {
                    var ix = 0;
                    var iy = 0;
                    var len = this.getLineLength(p1x, p1y, p2x, p2y);
                    if (len < PSEUDO_ZERO) return null;
                    var u = (fromX - p1x) * (p2x - p1x) + (fromY - p1y) * (p2y - p1y);
                    u /= len * len;
                    ix = p1x + u * (p2x - p1x);
                    iy = p1y + u * (p2y - p1y);
                    var pRise = this.getLineLength(fromX, fromY, ix, iy);
                    var pRun = Math.sqrt(dist * dist - pRise * pRise);
                    run = Math.sqrt(pRun * pRun / (1 + m * m));
                    if (p2x < p1x) run *= -1;
                    rise = m * run;
                    pt = {
                        x: ix + run,
                        y: iy + rise
                    };
                }
                return pt;
            }
            getPointOnPath(distance) {
                var fullLen = this.getPathLength();
                var cumulativePathLength = 0;
                var p = null;
                if (distance < -5e-5 || distance - 5e-5 > fullLen) return null;
                var {dataArray} = this;
                for (var command of dataArray) {
                    if (command && (command.pathLength < 5e-5 || cumulativePathLength + command.pathLength + 5e-5 < distance)) {
                        cumulativePathLength += command.pathLength;
                        continue;
                    }
                    var delta = distance - cumulativePathLength;
                    var currentT = 0;
                    switch (command.type) {
                      case PathParser.LINE_TO:
                        p = this.getPointOnLine(delta, command.start.x, command.start.y, command.points[0], command.points[1], command.start.x, command.start.y);
                        break;

                      case PathParser.ARC:
                        var start = command.points[4];
                        var dTheta = command.points[5];
                        var end = command.points[4] + dTheta;
                        currentT = start + delta / command.pathLength * dTheta;
                        if (dTheta < 0 && currentT < end || dTheta >= 0 && currentT > end) break;
                        p = this.getPointOnEllipticalArc(command.points[0], command.points[1], command.points[2], command.points[3], currentT, command.points[6]);
                        break;

                      case PathParser.CURVE_TO:
                        currentT = delta / command.pathLength;
                        if (currentT > 1) currentT = 1;
                        p = this.getPointOnCubicBezier(currentT, command.start.x, command.start.y, command.points[0], command.points[1], command.points[2], command.points[3], command.points[4], command.points[5]);
                        break;

                      case PathParser.QUAD_TO:
                        currentT = delta / command.pathLength;
                        if (currentT > 1) currentT = 1;
                        p = this.getPointOnQuadraticBezier(currentT, command.start.x, command.start.y, command.points[0], command.points[1], command.points[2], command.points[3]);
                        break;
                    }
                    if (p) return p;
                    break;
                }
                return null;
            }
            getLineLength(x1, y1, x2, y2) {
                return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
            }
            getPathLength() {
                if (this.pathLength === -1) this.pathLength = this.dataArray.reduce(((length, command) => command.pathLength > 0 ? length + command.pathLength : length), 0);
                return this.pathLength;
            }
            getPointOnCubicBezier(pct, p1x, p1y, p2x, p2y, p3x, p3y, p4x, p4y) {
                var x = p4x * CB1(pct) + p3x * CB2(pct) + p2x * CB3(pct) + p1x * CB4(pct);
                var y = p4y * CB1(pct) + p3y * CB2(pct) + p2y * CB3(pct) + p1y * CB4(pct);
                return {
                    x,
                    y
                };
            }
            getPointOnQuadraticBezier(pct, p1x, p1y, p2x, p2y, p3x, p3y) {
                var x = p3x * QB1(pct) + p2x * QB2(pct) + p1x * QB3(pct);
                var y = p3y * QB1(pct) + p2y * QB2(pct) + p1y * QB3(pct);
                return {
                    x,
                    y
                };
            }
            getPointOnEllipticalArc(cx, cy, rx, ry, theta, psi) {
                var cosPsi = Math.cos(psi);
                var sinPsi = Math.sin(psi);
                var pt = {
                    x: rx * Math.cos(theta),
                    y: ry * Math.sin(theta)
                };
                return {
                    x: cx + (pt.x * cosPsi - pt.y * sinPsi),
                    y: cy + (pt.x * sinPsi + pt.y * cosPsi)
                };
            }
            buildEquidistantCache(inputStep, inputPrecision) {
                var fullLen = this.getPathLength();
                var precision = inputPrecision || .25;
                var step = inputStep || fullLen / 100;
                if (!this.equidistantCache || this.equidistantCache.step !== step || this.equidistantCache.precision !== precision) {
                    this.equidistantCache = {
                        step,
                        precision,
                        points: []
                    };
                    var s = 0;
                    for (var l = 0; l <= fullLen; l += precision) {
                        var p0 = this.getPointOnPath(l);
                        var p1 = this.getPointOnPath(l + precision);
                        if (!p0 || !p1) continue;
                        s += this.getLineLength(p0.x, p0.y, p1.x, p1.y);
                        if (s >= step) {
                            this.equidistantCache.points.push({
                                x: p0.x,
                                y: p0.y,
                                distance: l
                            });
                            s -= step;
                        }
                    }
                }
            }
            getEquidistantPointOnPath(targetDistance, step, precision) {
                this.buildEquidistantCache(step, precision);
                if (targetDistance < 0 || targetDistance - this.getPathLength() > 5e-5) return null;
                var idx = Math.round(targetDistance / this.getPathLength() * (this.equidistantCache.points.length - 1));
                return this.equidistantCache.points[idx] || null;
            }
        }
        var dataUriRegex = /^\s*data:(([^/,;]+\/[^/,;]+)(?:;([^,;=]+=[^,;=]+))?)?(?:;(base64))?,(.*)$/i;
        class ImageElement extends RenderedElement {
            constructor(document, node, captureTextNodes) {
                super(document, node, captureTextNodes);
                this.type = "image";
                this.loaded = false;
                var href = this.getHrefAttribute().getString();
                if (!href) return;
                var isSvg = href.endsWith(".svg") || /^\s*data:image\/svg\+xml/i.test(href);
                document.images.push(this);
                if (!isSvg) void this.loadImage(href); else void this.loadSvg(href);
                this.isSvg = isSvg;
            }
            loadImage(href) {
                var _this = this;
                return _asyncToGenerator((function*() {
                    try {
                        var image = yield _this.document.createImage(href);
                        _this.image = image;
                    } catch (err) {
                        console.error('Error while loading image "'.concat(href, '":'), err);
                    }
                    _this.loaded = true;
                }))();
            }
            loadSvg(href) {
                var _this2 = this;
                return _asyncToGenerator((function*() {
                    var match = dataUriRegex.exec(href);
                    if (match) {
                        var data = match[5];
                        if (match[4] === "base64") _this2.image = atob(data); else _this2.image = decodeURIComponent(data);
                    } else try {
                        var response = yield _this2.document.fetch(href);
                        var svg = yield response.text();
                        _this2.image = svg;
                    } catch (err) {
                        console.error('Error while loading image "'.concat(href, '":'), err);
                    }
                    _this2.loaded = true;
                }))();
            }
            renderChildren(ctx) {
                var {document, image, loaded} = this;
                var x = this.getAttribute("x").getPixels("x");
                var y = this.getAttribute("y").getPixels("y");
                var width = this.getStyle("width").getPixels("x");
                var height = this.getStyle("height").getPixels("y");
                if (!loaded || !image || !width || !height) return;
                ctx.save();
                ctx.translate(x, y);
                if (this.isSvg) {
                    var subDocument = document.canvg.forkString(ctx, this.image, {
                        ignoreMouse: true,
                        ignoreAnimation: true,
                        ignoreDimensions: true,
                        ignoreClear: true,
                        offsetX: 0,
                        offsetY: 0,
                        scaleWidth: width,
                        scaleHeight: height
                    });
                    subDocument.document.documentElement.parent = this;
                    void subDocument.render();
                } else {
                    var _image = this.image;
                    document.setViewBox({
                        ctx,
                        aspectRatio: this.getAttribute("preserveAspectRatio").getString(),
                        width,
                        desiredWidth: _image.width,
                        height,
                        desiredHeight: _image.height
                    });
                    if (this.loaded) if (typeof _image.complete === "undefined" || _image.complete) ctx.drawImage(_image, 0, 0);
                }
                ctx.restore();
            }
            getBoundingBox() {
                var x = this.getAttribute("x").getPixels("x");
                var y = this.getAttribute("y").getPixels("y");
                var width = this.getStyle("width").getPixels("x");
                var height = this.getStyle("height").getPixels("y");
                return new BoundingBox(x, y, x + width, y + height);
            }
        }
        class SymbolElement extends RenderedElement {
            constructor() {
                super(...arguments);
                this.type = "symbol";
            }
            render(_) {}
        }
        class SVGFontLoader {
            constructor(document) {
                this.document = document;
                this.loaded = false;
                document.fonts.push(this);
            }
            load(fontFamily, url) {
                var _this = this;
                return _asyncToGenerator((function*() {
                    try {
                        var {document} = _this;
                        var svgDocument = yield document.canvg.parser.load(url);
                        var fonts = svgDocument.getElementsByTagName("font");
                        Array.from(fonts).forEach((fontNode => {
                            var font = document.createElement(fontNode);
                            document.definitions[fontFamily] = font;
                        }));
                    } catch (err) {
                        console.error('Error while loading font "'.concat(url, '":'), err);
                    }
                    _this.loaded = true;
                }))();
            }
        }
        class StyleElement extends Element {
            constructor(document, node, captureTextNodes) {
                super(document, node, captureTextNodes);
                this.type = "style";
                var css = compressSpaces(Array.from(node.childNodes).map((_ => _.textContent)).join("").replace(/(\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm, "").replace(/@import.*;/g, ""));
                var cssDefs = css.split("}");
                cssDefs.forEach((_ => {
                    var def = _.trim();
                    if (!def) return;
                    var cssParts = def.split("{");
                    var cssClasses = cssParts[0].split(",");
                    var cssProps = cssParts[1].split(";");
                    cssClasses.forEach((_ => {
                        var cssClass = _.trim();
                        if (!cssClass) return;
                        var props = document.styles[cssClass] || {};
                        cssProps.forEach((cssProp => {
                            var prop = cssProp.indexOf(":");
                            var name = cssProp.substr(0, prop).trim();
                            var value = cssProp.substr(prop + 1, cssProp.length - prop).trim();
                            if (name && value) props[name] = new Property(document, name, value);
                        }));
                        document.styles[cssClass] = props;
                        document.stylesSpecificity[cssClass] = getSelectorSpecificity(cssClass);
                        if (cssClass === "@font-face") {
                            var fontFamily = props["font-family"].getString().replace(/"|'/g, "");
                            var srcs = props.src.getString().split(",");
                            srcs.forEach((src => {
                                if (src.indexOf('format("svg")') > 0) {
                                    var url = parseExternalUrl(src);
                                    if (url) void new SVGFontLoader(document).load(fontFamily, url);
                                }
                            }));
                        }
                    }));
                }));
            }
        }
        StyleElement.parseExternalUrl = parseExternalUrl;
        class UseElement extends RenderedElement {
            constructor() {
                super(...arguments);
                this.type = "use";
            }
            setContext(ctx) {
                super.setContext(ctx);
                var xAttr = this.getAttribute("x");
                var yAttr = this.getAttribute("y");
                if (xAttr.hasValue()) ctx.translate(xAttr.getPixels("x"), 0);
                if (yAttr.hasValue()) ctx.translate(0, yAttr.getPixels("y"));
            }
            path(ctx) {
                var {element} = this;
                if (element) element.path(ctx);
            }
            renderChildren(ctx) {
                var {document, element} = this;
                if (element) {
                    var tempSvg = element;
                    if (element.type === "symbol") {
                        tempSvg = new SVGElement(document, null);
                        tempSvg.attributes.viewBox = new Property(document, "viewBox", element.getAttribute("viewBox").getString());
                        tempSvg.attributes.preserveAspectRatio = new Property(document, "preserveAspectRatio", element.getAttribute("preserveAspectRatio").getString());
                        tempSvg.attributes.overflow = new Property(document, "overflow", element.getAttribute("overflow").getString());
                        tempSvg.children = element.children;
                        element.styles.opacity = new Property(document, "opacity", this.calculateOpacity());
                    }
                    if (tempSvg.type === "svg") {
                        var widthStyle = this.getStyle("width", false, true);
                        var heightStyle = this.getStyle("height", false, true);
                        if (widthStyle.hasValue()) tempSvg.attributes.width = new Property(document, "width", widthStyle.getString());
                        if (heightStyle.hasValue()) tempSvg.attributes.height = new Property(document, "height", heightStyle.getString());
                    }
                    var oldParent = tempSvg.parent;
                    tempSvg.parent = this;
                    tempSvg.render(ctx);
                    tempSvg.parent = oldParent;
                }
            }
            getBoundingBox(ctx) {
                var {element} = this;
                if (element) return element.getBoundingBox(ctx);
                return null;
            }
            elementTransform() {
                var {document, element} = this;
                return Transform.fromElement(document, element);
            }
            get element() {
                if (!this.cachedElement) this.cachedElement = this.getHrefAttribute().getDefinition();
                return this.cachedElement;
            }
        }
        function imGet(img, x, y, width, _height, rgba) {
            return img[y * width * 4 + x * 4 + rgba];
        }
        function imSet(img, x, y, width, _height, rgba, val) {
            img[y * width * 4 + x * 4 + rgba] = val;
        }
        function index_es_m(matrix, i, v) {
            var mi = matrix[i];
            return mi * v;
        }
        function index_es_c(a, m1, m2, m3) {
            return m1 + Math.cos(a) * m2 + Math.sin(a) * m3;
        }
        class FeColorMatrixElement extends Element {
            constructor(document, node, captureTextNodes) {
                super(document, node, captureTextNodes);
                this.type = "feColorMatrix";
                var matrix = toNumbers(this.getAttribute("values").getString());
                switch (this.getAttribute("type").getString("matrix")) {
                  case "saturate":
                    var s = matrix[0];
                    matrix = [ .213 + .787 * s, .715 - .715 * s, .072 - .072 * s, 0, 0, .213 - .213 * s, .715 + .285 * s, .072 - .072 * s, 0, 0, .213 - .213 * s, .715 - .715 * s, .072 + .928 * s, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1 ];
                    break;

                  case "hueRotate":
                    var a = matrix[0] * Math.PI / 180;
                    matrix = [ index_es_c(a, .213, .787, -.213), index_es_c(a, .715, -.715, -.715), index_es_c(a, .072, -.072, .928), 0, 0, index_es_c(a, .213, -.213, .143), index_es_c(a, .715, .285, .14), index_es_c(a, .072, -.072, -.283), 0, 0, index_es_c(a, .213, -.213, -.787), index_es_c(a, .715, -.715, .715), index_es_c(a, .072, .928, .072), 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1 ];
                    break;

                  case "luminanceToAlpha":
                    matrix = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .2125, .7154, .0721, 0, 0, 0, 0, 0, 0, 1 ];
                    break;
                }
                this.matrix = matrix;
                this.includeOpacity = this.getAttribute("includeOpacity").hasValue();
            }
            apply(ctx, _x, _y, width, height) {
                var {includeOpacity, matrix} = this;
                var srcData = ctx.getImageData(0, 0, width, height);
                for (var y = 0; y < height; y++) for (var x = 0; x < width; x++) {
                    var r = imGet(srcData.data, x, y, width, height, 0);
                    var g = imGet(srcData.data, x, y, width, height, 1);
                    var b = imGet(srcData.data, x, y, width, height, 2);
                    var a = imGet(srcData.data, x, y, width, height, 3);
                    var nr = index_es_m(matrix, 0, r) + index_es_m(matrix, 1, g) + index_es_m(matrix, 2, b) + index_es_m(matrix, 3, a) + index_es_m(matrix, 4, 1);
                    var ng = index_es_m(matrix, 5, r) + index_es_m(matrix, 6, g) + index_es_m(matrix, 7, b) + index_es_m(matrix, 8, a) + index_es_m(matrix, 9, 1);
                    var nb = index_es_m(matrix, 10, r) + index_es_m(matrix, 11, g) + index_es_m(matrix, 12, b) + index_es_m(matrix, 13, a) + index_es_m(matrix, 14, 1);
                    var na = index_es_m(matrix, 15, r) + index_es_m(matrix, 16, g) + index_es_m(matrix, 17, b) + index_es_m(matrix, 18, a) + index_es_m(matrix, 19, 1);
                    if (includeOpacity) {
                        nr = 0;
                        ng = 0;
                        nb = 0;
                        na *= a / 255;
                    }
                    imSet(srcData.data, x, y, width, height, 0, nr);
                    imSet(srcData.data, x, y, width, height, 1, ng);
                    imSet(srcData.data, x, y, width, height, 2, nb);
                    imSet(srcData.data, x, y, width, height, 3, na);
                }
                ctx.clearRect(0, 0, width, height);
                ctx.putImageData(srcData, 0, 0);
            }
        }
        class MaskElement extends Element {
            constructor() {
                super(...arguments);
                this.type = "mask";
            }
            apply(ctx, element) {
                var {document} = this;
                var x = this.getAttribute("x").getPixels("x");
                var y = this.getAttribute("y").getPixels("y");
                var width = this.getStyle("width").getPixels("x");
                var height = this.getStyle("height").getPixels("y");
                if (!width && !height) {
                    var boundingBox = new BoundingBox;
                    this.children.forEach((child => {
                        boundingBox.addBoundingBox(child.getBoundingBox(ctx));
                    }));
                    x = Math.floor(boundingBox.x1);
                    y = Math.floor(boundingBox.y1);
                    width = Math.floor(boundingBox.width);
                    height = Math.floor(boundingBox.height);
                }
                var ignoredStyles = this.removeStyles(element, MaskElement.ignoreStyles);
                var maskCanvas = document.createCanvas(x + width, y + height);
                var maskCtx = maskCanvas.getContext("2d");
                document.screen.setDefaults(maskCtx);
                this.renderChildren(maskCtx);
                new FeColorMatrixElement(document, {
                    nodeType: 1,
                    childNodes: [],
                    attributes: [ {
                        nodeName: "type",
                        value: "luminanceToAlpha"
                    }, {
                        nodeName: "includeOpacity",
                        value: "true"
                    } ]
                }).apply(maskCtx, 0, 0, x + width, y + height);
                var tmpCanvas = document.createCanvas(x + width, y + height);
                var tmpCtx = tmpCanvas.getContext("2d");
                document.screen.setDefaults(tmpCtx);
                element.render(tmpCtx);
                tmpCtx.globalCompositeOperation = "destination-in";
                tmpCtx.fillStyle = maskCtx.createPattern(maskCanvas, "no-repeat");
                tmpCtx.fillRect(0, 0, x + width, y + height);
                ctx.fillStyle = tmpCtx.createPattern(tmpCanvas, "no-repeat");
                ctx.fillRect(0, 0, x + width, y + height);
                this.restoreStyles(element, ignoredStyles);
            }
            render(_) {}
        }
        MaskElement.ignoreStyles = [ "mask", "transform", "clip-path" ];
        var noop = () => {};
        class ClipPathElement extends Element {
            constructor() {
                super(...arguments);
                this.type = "clipPath";
            }
            apply(ctx) {
                var {document} = this;
                var contextProto = Reflect.getPrototypeOf(ctx);
                var {beginPath, closePath} = ctx;
                if (contextProto) {
                    contextProto.beginPath = noop;
                    contextProto.closePath = noop;
                }
                Reflect.apply(beginPath, ctx, []);
                this.children.forEach((child => {
                    if (typeof child.path === "undefined") return;
                    var transform = typeof child.elementTransform !== "undefined" ? child.elementTransform() : null;
                    if (!transform) transform = Transform.fromElement(document, child);
                    if (transform) transform.apply(ctx);
                    child.path(ctx);
                    if (contextProto) contextProto.closePath = closePath;
                    if (transform) transform.unapply(ctx);
                }));
                Reflect.apply(closePath, ctx, []);
                ctx.clip();
                if (contextProto) {
                    contextProto.beginPath = beginPath;
                    contextProto.closePath = closePath;
                }
            }
            render(_) {}
        }
        class FilterElement extends Element {
            constructor() {
                super(...arguments);
                this.type = "filter";
            }
            apply(ctx, element) {
                var {document, children} = this;
                var boundingBox = element.getBoundingBox(ctx);
                if (!boundingBox) return;
                var px = 0;
                var py = 0;
                children.forEach((child => {
                    var efd = child.extraFilterDistance || 0;
                    px = Math.max(px, efd);
                    py = Math.max(py, efd);
                }));
                var width = Math.floor(boundingBox.width);
                var height = Math.floor(boundingBox.height);
                var tmpCanvasWidth = width + 2 * px;
                var tmpCanvasHeight = height + 2 * py;
                if (tmpCanvasWidth < 1 || tmpCanvasHeight < 1) return;
                var x = Math.floor(boundingBox.x);
                var y = Math.floor(boundingBox.y);
                var ignoredStyles = this.removeStyles(element, FilterElement.ignoreStyles);
                var tmpCanvas = document.createCanvas(tmpCanvasWidth, tmpCanvasHeight);
                var tmpCtx = tmpCanvas.getContext("2d");
                document.screen.setDefaults(tmpCtx);
                tmpCtx.translate(-x + px, -y + py);
                element.render(tmpCtx);
                children.forEach((child => {
                    if (typeof child.apply === "function") child.apply(tmpCtx, 0, 0, tmpCanvasWidth, tmpCanvasHeight);
                }));
                ctx.drawImage(tmpCanvas, 0, 0, tmpCanvasWidth, tmpCanvasHeight, x - px, y - py, tmpCanvasWidth, tmpCanvasHeight);
                this.restoreStyles(element, ignoredStyles);
            }
            render(_) {}
        }
        FilterElement.ignoreStyles = [ "filter", "transform", "clip-path" ];
        class FeDropShadowElement extends Element {
            constructor(document, node, captureTextNodes) {
                super(document, node, captureTextNodes);
                this.type = "feDropShadow";
                this.addStylesFromStyleDefinition();
            }
            apply(_, _x, _y, _width, _height) {}
        }
        class FeMorphologyElement extends Element {
            constructor() {
                super(...arguments);
                this.type = "feMorphology";
            }
            apply(_, _x, _y, _width, _height) {}
        }
        class FeCompositeElement extends Element {
            constructor() {
                super(...arguments);
                this.type = "feComposite";
            }
            apply(_, _x, _y, _width, _height) {}
        }
        class FeGaussianBlurElement extends Element {
            constructor(document, node, captureTextNodes) {
                super(document, node, captureTextNodes);
                this.type = "feGaussianBlur";
                this.blurRadius = Math.floor(this.getAttribute("stdDeviation").getNumber());
                this.extraFilterDistance = this.blurRadius;
            }
            apply(ctx, x, y, width, height) {
                var {document, blurRadius} = this;
                var body = document.window ? document.window.document.body : null;
                var canvas = ctx.canvas;
                canvas.id = document.getUniqueId();
                if (body) {
                    canvas.style.display = "none";
                    body.appendChild(canvas);
                }
                processCanvasRGBA(canvas, x, y, width, height, blurRadius);
                if (body) body.removeChild(canvas);
            }
        }
        class TitleElement extends Element {
            constructor() {
                super(...arguments);
                this.type = "title";
            }
        }
        class DescElement extends Element {
            constructor() {
                super(...arguments);
                this.type = "desc";
            }
        }
        var index_es_elements = {
            svg: SVGElement,
            rect: RectElement,
            circle: CircleElement,
            ellipse: EllipseElement,
            line: LineElement,
            polyline: PolylineElement,
            polygon: PolygonElement,
            path: PathElement,
            pattern: PatternElement,
            marker: MarkerElement,
            defs: DefsElement,
            linearGradient: LinearGradientElement,
            radialGradient: RadialGradientElement,
            stop: StopElement,
            animate: AnimateElement,
            animateColor: AnimateColorElement,
            animateTransform: AnimateTransformElement,
            font: FontElement,
            "font-face": FontFaceElement,
            "missing-glyph": MissingGlyphElement,
            glyph: GlyphElement,
            text: TextElement,
            tspan: TSpanElement,
            tref: TRefElement,
            a: AElement,
            textPath: TextPathElement,
            image: ImageElement,
            g: GElement,
            symbol: SymbolElement,
            style: StyleElement,
            use: UseElement,
            mask: MaskElement,
            clipPath: ClipPathElement,
            filter: FilterElement,
            feDropShadow: FeDropShadowElement,
            feMorphology: FeMorphologyElement,
            feComposite: FeCompositeElement,
            feColorMatrix: FeColorMatrixElement,
            feGaussianBlur: FeGaussianBlurElement,
            title: TitleElement,
            desc: DescElement
        };
        function ownKeys$1(object, enumerableOnly) {
            var keys = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var symbols = Object.getOwnPropertySymbols(object);
                if (enumerableOnly) symbols = symbols.filter((function(sym) {
                    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                }));
                keys.push.apply(keys, symbols);
            }
            return keys;
        }
        function _objectSpread$1(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i] != null ? arguments[i] : {};
                if (i % 2) ownKeys$1(Object(source), true).forEach((function(key) {
                    _defineProperty(target, key, source[key]);
                })); else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); else ownKeys$1(Object(source)).forEach((function(key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                }));
            }
            return target;
        }
        function createCanvas(width, height) {
            var canvas = document.createElement("canvas");
            canvas.width = width;
            canvas.height = height;
            return canvas;
        }
        function createImage(_x) {
            return _createImage.apply(this, arguments);
        }
        function _createImage() {
            _createImage = _asyncToGenerator((function*(src) {
                var anonymousCrossOrigin = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                var image = document.createElement("img");
                if (anonymousCrossOrigin) image.crossOrigin = "Anonymous";
                return new Promise(((resolve, reject) => {
                    image.onload = () => {
                        resolve(image);
                    };
                    image.onerror = (_event, _source, _lineno, _colno, error) => {
                        reject(error);
                    };
                    image.src = src;
                }));
            }));
            return _createImage.apply(this, arguments);
        }
        class Document {
            constructor(canvg) {
                var {rootEmSize = 12, emSize = 12, createCanvas = Document.createCanvas, createImage = Document.createImage, anonymousCrossOrigin} = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                this.canvg = canvg;
                this.definitions = {};
                this.styles = {};
                this.stylesSpecificity = {};
                this.images = [];
                this.fonts = [];
                this.emSizeStack = [];
                this.uniqueId = 0;
                this.screen = canvg.screen;
                this.rootEmSize = rootEmSize;
                this.emSize = emSize;
                this.createCanvas = createCanvas;
                this.createImage = this.bindCreateImage(createImage, anonymousCrossOrigin);
                this.screen.wait(this.isImagesLoaded.bind(this));
                this.screen.wait(this.isFontsLoaded.bind(this));
            }
            bindCreateImage(createImage, anonymousCrossOrigin) {
                if (typeof anonymousCrossOrigin === "boolean") return (source, forceAnonymousCrossOrigin) => createImage(source, typeof forceAnonymousCrossOrigin === "boolean" ? forceAnonymousCrossOrigin : anonymousCrossOrigin);
                return createImage;
            }
            get window() {
                return this.screen.window;
            }
            get fetch() {
                return this.screen.fetch;
            }
            get ctx() {
                return this.screen.ctx;
            }
            get emSize() {
                var {emSizeStack} = this;
                return emSizeStack[emSizeStack.length - 1];
            }
            set emSize(value) {
                var {emSizeStack} = this;
                emSizeStack.push(value);
            }
            popEmSize() {
                var {emSizeStack} = this;
                emSizeStack.pop();
            }
            getUniqueId() {
                return "canvg".concat(++this.uniqueId);
            }
            isImagesLoaded() {
                return this.images.every((_ => _.loaded));
            }
            isFontsLoaded() {
                return this.fonts.every((_ => _.loaded));
            }
            createDocumentElement(document) {
                var documentElement = this.createElement(document.documentElement);
                documentElement.root = true;
                documentElement.addStylesFromStyleDefinition();
                this.documentElement = documentElement;
                return documentElement;
            }
            createElement(node) {
                var elementType = node.nodeName.replace(/^[^:]+:/, "");
                var ElementType = Document.elementTypes[elementType];
                if (typeof ElementType !== "undefined") return new ElementType(this, node);
                return new UnknownElement(this, node);
            }
            createTextNode(node) {
                return new TextNode(this, node);
            }
            setViewBox(config) {
                this.screen.setViewBox(_objectSpread$1({
                    document: this
                }, config));
            }
        }
        Document.createCanvas = createCanvas;
        Document.createImage = createImage;
        Document.elementTypes = index_es_elements;
        function ownKeys(object, enumerableOnly) {
            var keys = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var symbols = Object.getOwnPropertySymbols(object);
                if (enumerableOnly) symbols = symbols.filter((function(sym) {
                    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                }));
                keys.push.apply(keys, symbols);
            }
            return keys;
        }
        function _objectSpread(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i] != null ? arguments[i] : {};
                if (i % 2) ownKeys(Object(source), true).forEach((function(key) {
                    _defineProperty(target, key, source[key]);
                })); else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); else ownKeys(Object(source)).forEach((function(key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                }));
            }
            return target;
        }
        class Canvg {
            constructor(ctx, svg) {
                var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                this.parser = new Parser(options);
                this.screen = new Screen(ctx, options);
                this.options = options;
                var document = new Document(this, options);
                var documentElement = document.createDocumentElement(svg);
                this.document = document;
                this.documentElement = documentElement;
            }
            static from(ctx, svg) {
                var _arguments = arguments;
                return _asyncToGenerator((function*() {
                    var options = _arguments.length > 2 && _arguments[2] !== void 0 ? _arguments[2] : {};
                    var parser = new Parser(options);
                    var svgDocument = yield parser.parse(svg);
                    return new Canvg(ctx, svgDocument, options);
                }))();
            }
            static fromString(ctx, svg) {
                var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                var parser = new Parser(options);
                var svgDocument = parser.parseFromString(svg);
                return new Canvg(ctx, svgDocument, options);
            }
            fork(ctx, svg) {
                var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                return Canvg.from(ctx, svg, _objectSpread(_objectSpread({}, this.options), options));
            }
            forkString(ctx, svg) {
                var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                return Canvg.fromString(ctx, svg, _objectSpread(_objectSpread({}, this.options), options));
            }
            ready() {
                return this.screen.ready();
            }
            isReady() {
                return this.screen.isReady();
            }
            render() {
                var _arguments2 = arguments, _this = this;
                return _asyncToGenerator((function*() {
                    var options = _arguments2.length > 0 && _arguments2[0] !== void 0 ? _arguments2[0] : {};
                    _this.start(_objectSpread({
                        enableRedraw: true,
                        ignoreAnimation: true,
                        ignoreMouse: true
                    }, options));
                    yield _this.ready();
                    _this.stop();
                }))();
            }
            start() {
                var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                var {documentElement, screen, options: baseOptions} = this;
                screen.start(documentElement, _objectSpread(_objectSpread({
                    enableRedraw: true
                }, baseOptions), options));
            }
            stop() {
                this.screen.stop();
            }
            resize(width) {
                var height = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : width;
                var preserveAspectRatio = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
                this.documentElement.resize(width, height, preserveAspectRatio);
            }
        }
    }
} ]);
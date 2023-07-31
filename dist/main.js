(() => {
  // node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var u;
  var t;
  var i;
  var o;
  var r;
  var f;
  var e;
  var c = {};
  var s = [];
  var a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  var h = Array.isArray;
  function v(n3, l5) {
    for (var u4 in l5)
      n3[u4] = l5[u4];
    return n3;
  }
  function p(n3) {
    var l5 = n3.parentNode;
    l5 && l5.removeChild(n3);
  }
  function y(l5, u4, t4) {
    var i4, o5, r4, f4 = {};
    for (r4 in u4)
      "key" == r4 ? i4 = u4[r4] : "ref" == r4 ? o5 = u4[r4] : f4[r4] = u4[r4];
    if (arguments.length > 2 && (f4.children = arguments.length > 3 ? n.call(arguments, 2) : t4), "function" == typeof l5 && null != l5.defaultProps)
      for (r4 in l5.defaultProps)
        void 0 === f4[r4] && (f4[r4] = l5.defaultProps[r4]);
    return d(l5, f4, i4, o5, null);
  }
  function d(n3, t4, i4, o5, r4) {
    var f4 = { type: n3, props: t4, key: i4, ref: o5, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r4 ? ++u : r4 };
    return null == r4 && null != l.vnode && l.vnode(f4), f4;
  }
  function k(n3) {
    return n3.children;
  }
  function b(n3, l5) {
    this.props = n3, this.context = l5;
  }
  function g(n3, l5) {
    if (null == l5)
      return n3.__ ? g(n3.__, n3.__.__k.indexOf(n3) + 1) : null;
    for (var u4; l5 < n3.__k.length; l5++)
      if (null != (u4 = n3.__k[l5]) && null != u4.__e)
        return u4.__e;
    return "function" == typeof n3.type ? g(n3) : null;
  }
  function m(n3) {
    var l5, u4;
    if (null != (n3 = n3.__) && null != n3.__c) {
      for (n3.__e = n3.__c.base = null, l5 = 0; l5 < n3.__k.length; l5++)
        if (null != (u4 = n3.__k[l5]) && null != u4.__e) {
          n3.__e = n3.__c.base = u4.__e;
          break;
        }
      return m(n3);
    }
  }
  function w(n3) {
    (!n3.__d && (n3.__d = true) && i.push(n3) && !x.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(x);
  }
  function x() {
    var n3, l5, u4, t4, o5, r4, e4, c5, s4;
    for (i.sort(f); n3 = i.shift(); )
      n3.__d && (l5 = i.length, t4 = void 0, o5 = void 0, r4 = void 0, c5 = (e4 = (u4 = n3).__v).__e, (s4 = u4.__P) && (t4 = [], o5 = [], (r4 = v({}, e4)).__v = e4.__v + 1, L(s4, e4, r4, u4.__n, void 0 !== s4.ownerSVGElement, null != e4.__h ? [c5] : null, t4, null == c5 ? g(e4) : c5, e4.__h, o5), M(t4, e4, o5), e4.__e != c5 && m(e4)), i.length > l5 && i.sort(f));
    x.__r = 0;
  }
  function P(n3, l5, u4, t4, i4, o5, r4, f4, e4, a4, v5) {
    var p5, y3, _4, b4, g4, m3, w4, x2, P2, S, H2 = 0, I2 = t4 && t4.__k || s, T2 = I2.length, j3 = T2, z3 = l5.length;
    for (u4.__k = [], p5 = 0; p5 < z3; p5++)
      null != (b4 = u4.__k[p5] = null == (b4 = l5[p5]) || "boolean" == typeof b4 || "function" == typeof b4 ? null : "string" == typeof b4 || "number" == typeof b4 || "bigint" == typeof b4 ? d(null, b4, null, null, b4) : h(b4) ? d(k, { children: b4 }, null, null, null) : b4.__b > 0 ? d(b4.type, b4.props, b4.key, b4.ref ? b4.ref : null, b4.__v) : b4) && (b4.__ = u4, b4.__b = u4.__b + 1, -1 === (x2 = A(b4, I2, w4 = p5 + H2, j3)) ? _4 = c : (_4 = I2[x2] || c, I2[x2] = void 0, j3--), L(n3, b4, _4, i4, o5, r4, f4, e4, a4, v5), g4 = b4.__e, (y3 = b4.ref) && _4.ref != y3 && (_4.ref && O(_4.ref, null, b4), v5.push(y3, b4.__c || g4, b4)), null != g4 && (null == m3 && (m3 = g4), S = !(P2 = _4 === c || null === _4.__v) && x2 === w4, P2 ? -1 == x2 && H2-- : x2 !== w4 && (x2 === w4 + 1 ? (H2++, S = true) : x2 > w4 ? j3 > z3 - w4 ? (H2 += x2 - w4, S = true) : H2-- : H2 = x2 < w4 && x2 == w4 - 1 ? x2 - w4 : 0), w4 = p5 + H2, S = S || x2 == p5 && !P2, "function" != typeof b4.type || x2 === w4 && _4.__k !== b4.__k ? "function" == typeof b4.type || S ? void 0 !== b4.__d ? (e4 = b4.__d, b4.__d = void 0) : e4 = g4.nextSibling : e4 = $(n3, g4, e4) : e4 = C(b4, e4, n3), "function" == typeof u4.type && (u4.__d = e4)));
    for (u4.__e = m3, p5 = T2; p5--; )
      null != I2[p5] && ("function" == typeof u4.type && null != I2[p5].__e && I2[p5].__e == u4.__d && (u4.__d = I2[p5].__e.nextSibling), q(I2[p5], I2[p5]));
  }
  function C(n3, l5, u4) {
    for (var t4, i4 = n3.__k, o5 = 0; i4 && o5 < i4.length; o5++)
      (t4 = i4[o5]) && (t4.__ = n3, l5 = "function" == typeof t4.type ? C(t4, l5, u4) : $(u4, t4.__e, l5));
    return l5;
  }
  function $(n3, l5, u4) {
    return null == u4 || u4.parentNode !== n3 ? n3.insertBefore(l5, null) : l5 == u4 && null != l5.parentNode || n3.insertBefore(l5, u4), l5.nextSibling;
  }
  function A(n3, l5, u4, t4) {
    var i4 = n3.key, o5 = n3.type, r4 = u4 - 1, f4 = u4 + 1, e4 = l5[u4];
    if (null === e4 || e4 && i4 == e4.key && o5 === e4.type)
      return u4;
    if (t4 > (null != e4 ? 1 : 0))
      for (; r4 >= 0 || f4 < l5.length; ) {
        if (r4 >= 0) {
          if ((e4 = l5[r4]) && i4 == e4.key && o5 === e4.type)
            return r4;
          r4--;
        }
        if (f4 < l5.length) {
          if ((e4 = l5[f4]) && i4 == e4.key && o5 === e4.type)
            return f4;
          f4++;
        }
      }
    return -1;
  }
  function H(n3, l5, u4, t4, i4) {
    var o5;
    for (o5 in u4)
      "children" === o5 || "key" === o5 || o5 in l5 || T(n3, o5, null, u4[o5], t4);
    for (o5 in l5)
      i4 && "function" != typeof l5[o5] || "children" === o5 || "key" === o5 || "value" === o5 || "checked" === o5 || u4[o5] === l5[o5] || T(n3, o5, l5[o5], u4[o5], t4);
  }
  function I(n3, l5, u4) {
    "-" === l5[0] ? n3.setProperty(l5, null == u4 ? "" : u4) : n3[l5] = null == u4 ? "" : "number" != typeof u4 || a.test(l5) ? u4 : u4 + "px";
  }
  function T(n3, l5, u4, t4, i4) {
    var o5;
    n:
      if ("style" === l5)
        if ("string" == typeof u4)
          n3.style.cssText = u4;
        else {
          if ("string" == typeof t4 && (n3.style.cssText = t4 = ""), t4)
            for (l5 in t4)
              u4 && l5 in u4 || I(n3.style, l5, "");
          if (u4)
            for (l5 in u4)
              t4 && u4[l5] === t4[l5] || I(n3.style, l5, u4[l5]);
        }
      else if ("o" === l5[0] && "n" === l5[1])
        o5 = l5 !== (l5 = l5.replace(/Capture$/, "")), l5 = l5.toLowerCase() in n3 ? l5.toLowerCase().slice(2) : l5.slice(2), n3.l || (n3.l = {}), n3.l[l5 + o5] = u4, u4 ? t4 || n3.addEventListener(l5, o5 ? z : j, o5) : n3.removeEventListener(l5, o5 ? z : j, o5);
      else if ("dangerouslySetInnerHTML" !== l5) {
        if (i4)
          l5 = l5.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" !== l5 && "height" !== l5 && "href" !== l5 && "list" !== l5 && "form" !== l5 && "tabIndex" !== l5 && "download" !== l5 && "rowSpan" !== l5 && "colSpan" !== l5 && l5 in n3)
          try {
            n3[l5] = null == u4 ? "" : u4;
            break n;
          } catch (n4) {
          }
        "function" == typeof u4 || (null == u4 || false === u4 && "-" !== l5[4] ? n3.removeAttribute(l5) : n3.setAttribute(l5, u4));
      }
  }
  function j(n3) {
    return this.l[n3.type + false](l.event ? l.event(n3) : n3);
  }
  function z(n3) {
    return this.l[n3.type + true](l.event ? l.event(n3) : n3);
  }
  function L(n3, u4, t4, i4, o5, r4, f4, e4, c5, s4) {
    var a4, p5, y3, d5, _4, g4, m3, w4, x2, C2, S, $2, A2, H2, I2, T2 = u4.type;
    if (void 0 !== u4.constructor)
      return null;
    null != t4.__h && (c5 = t4.__h, e4 = u4.__e = t4.__e, u4.__h = null, r4 = [e4]), (a4 = l.__b) && a4(u4);
    try {
      n:
        if ("function" == typeof T2) {
          if (w4 = u4.props, x2 = (a4 = T2.contextType) && i4[a4.__c], C2 = a4 ? x2 ? x2.props.value : a4.__ : i4, t4.__c ? m3 = (p5 = u4.__c = t4.__c).__ = p5.__E : ("prototype" in T2 && T2.prototype.render ? u4.__c = p5 = new T2(w4, C2) : (u4.__c = p5 = new b(w4, C2), p5.constructor = T2, p5.render = B), x2 && x2.sub(p5), p5.props = w4, p5.state || (p5.state = {}), p5.context = C2, p5.__n = i4, y3 = p5.__d = true, p5.__h = [], p5._sb = []), null == p5.__s && (p5.__s = p5.state), null != T2.getDerivedStateFromProps && (p5.__s == p5.state && (p5.__s = v({}, p5.__s)), v(p5.__s, T2.getDerivedStateFromProps(w4, p5.__s))), d5 = p5.props, _4 = p5.state, p5.__v = u4, y3)
            null == T2.getDerivedStateFromProps && null != p5.componentWillMount && p5.componentWillMount(), null != p5.componentDidMount && p5.__h.push(p5.componentDidMount);
          else {
            if (null == T2.getDerivedStateFromProps && w4 !== d5 && null != p5.componentWillReceiveProps && p5.componentWillReceiveProps(w4, C2), !p5.__e && (null != p5.shouldComponentUpdate && false === p5.shouldComponentUpdate(w4, p5.__s, C2) || u4.__v === t4.__v)) {
              for (u4.__v !== t4.__v && (p5.props = w4, p5.state = p5.__s, p5.__d = false), u4.__e = t4.__e, u4.__k = t4.__k, u4.__k.forEach(function(n4) {
                n4 && (n4.__ = u4);
              }), S = 0; S < p5._sb.length; S++)
                p5.__h.push(p5._sb[S]);
              p5._sb = [], p5.__h.length && f4.push(p5);
              break n;
            }
            null != p5.componentWillUpdate && p5.componentWillUpdate(w4, p5.__s, C2), null != p5.componentDidUpdate && p5.__h.push(function() {
              p5.componentDidUpdate(d5, _4, g4);
            });
          }
          if (p5.context = C2, p5.props = w4, p5.__P = n3, p5.__e = false, $2 = l.__r, A2 = 0, "prototype" in T2 && T2.prototype.render) {
            for (p5.state = p5.__s, p5.__d = false, $2 && $2(u4), a4 = p5.render(p5.props, p5.state, p5.context), H2 = 0; H2 < p5._sb.length; H2++)
              p5.__h.push(p5._sb[H2]);
            p5._sb = [];
          } else
            do {
              p5.__d = false, $2 && $2(u4), a4 = p5.render(p5.props, p5.state, p5.context), p5.state = p5.__s;
            } while (p5.__d && ++A2 < 25);
          p5.state = p5.__s, null != p5.getChildContext && (i4 = v(v({}, i4), p5.getChildContext())), y3 || null == p5.getSnapshotBeforeUpdate || (g4 = p5.getSnapshotBeforeUpdate(d5, _4)), P(n3, h(I2 = null != a4 && a4.type === k && null == a4.key ? a4.props.children : a4) ? I2 : [I2], u4, t4, i4, o5, r4, f4, e4, c5, s4), p5.base = u4.__e, u4.__h = null, p5.__h.length && f4.push(p5), m3 && (p5.__E = p5.__ = null);
        } else
          null == r4 && u4.__v === t4.__v ? (u4.__k = t4.__k, u4.__e = t4.__e) : u4.__e = N(t4.__e, u4, t4, i4, o5, r4, f4, c5, s4);
      (a4 = l.diffed) && a4(u4);
    } catch (n4) {
      u4.__v = null, (c5 || null != r4) && (u4.__e = e4, u4.__h = !!c5, r4[r4.indexOf(e4)] = null), l.__e(n4, u4, t4);
    }
  }
  function M(n3, u4, t4) {
    for (var i4 = 0; i4 < t4.length; i4++)
      O(t4[i4], t4[++i4], t4[++i4]);
    l.__c && l.__c(u4, n3), n3.some(function(u5) {
      try {
        n3 = u5.__h, u5.__h = [], n3.some(function(n4) {
          n4.call(u5);
        });
      } catch (n4) {
        l.__e(n4, u5.__v);
      }
    });
  }
  function N(l5, u4, t4, i4, o5, r4, f4, e4, s4) {
    var a4, v5, y3, d5 = t4.props, _4 = u4.props, k3 = u4.type, b4 = 0;
    if ("svg" === k3 && (o5 = true), null != r4) {
      for (; b4 < r4.length; b4++)
        if ((a4 = r4[b4]) && "setAttribute" in a4 == !!k3 && (k3 ? a4.localName === k3 : 3 === a4.nodeType)) {
          l5 = a4, r4[b4] = null;
          break;
        }
    }
    if (null == l5) {
      if (null === k3)
        return document.createTextNode(_4);
      l5 = o5 ? document.createElementNS("http://www.w3.org/2000/svg", k3) : document.createElement(k3, _4.is && _4), r4 = null, e4 = false;
    }
    if (null === k3)
      d5 === _4 || e4 && l5.data === _4 || (l5.data = _4);
    else {
      if (r4 = r4 && n.call(l5.childNodes), v5 = (d5 = t4.props || c).dangerouslySetInnerHTML, y3 = _4.dangerouslySetInnerHTML, !e4) {
        if (null != r4)
          for (d5 = {}, b4 = 0; b4 < l5.attributes.length; b4++)
            d5[l5.attributes[b4].name] = l5.attributes[b4].value;
        (y3 || v5) && (y3 && (v5 && y3.__html == v5.__html || y3.__html === l5.innerHTML) || (l5.innerHTML = y3 && y3.__html || ""));
      }
      if (H(l5, _4, d5, o5, e4), y3)
        u4.__k = [];
      else if (P(l5, h(b4 = u4.props.children) ? b4 : [b4], u4, t4, i4, o5 && "foreignObject" !== k3, r4, f4, r4 ? r4[0] : t4.__k && g(t4, 0), e4, s4), null != r4)
        for (b4 = r4.length; b4--; )
          null != r4[b4] && p(r4[b4]);
      e4 || ("value" in _4 && void 0 !== (b4 = _4.value) && (b4 !== l5.value || "progress" === k3 && !b4 || "option" === k3 && b4 !== d5.value) && T(l5, "value", b4, d5.value, false), "checked" in _4 && void 0 !== (b4 = _4.checked) && b4 !== l5.checked && T(l5, "checked", b4, d5.checked, false));
    }
    return l5;
  }
  function O(n3, u4, t4) {
    try {
      "function" == typeof n3 ? n3(u4) : n3.current = u4;
    } catch (n4) {
      l.__e(n4, t4);
    }
  }
  function q(n3, u4, t4) {
    var i4, o5;
    if (l.unmount && l.unmount(n3), (i4 = n3.ref) && (i4.current && i4.current !== n3.__e || O(i4, null, u4)), null != (i4 = n3.__c)) {
      if (i4.componentWillUnmount)
        try {
          i4.componentWillUnmount();
        } catch (n4) {
          l.__e(n4, u4);
        }
      i4.base = i4.__P = null, n3.__c = void 0;
    }
    if (i4 = n3.__k)
      for (o5 = 0; o5 < i4.length; o5++)
        i4[o5] && q(i4[o5], u4, t4 || "function" != typeof n3.type);
    t4 || null == n3.__e || p(n3.__e), n3.__ = n3.__e = n3.__d = void 0;
  }
  function B(n3, l5, u4) {
    return this.constructor(n3, u4);
  }
  function D(u4, t4, i4) {
    var o5, r4, f4, e4;
    l.__ && l.__(u4, t4), r4 = (o5 = "function" == typeof i4) ? null : i4 && i4.__k || t4.__k, f4 = [], e4 = [], L(t4, u4 = (!o5 && i4 || t4).__k = y(k, null, [u4]), r4 || c, c, void 0 !== t4.ownerSVGElement, !o5 && i4 ? [i4] : r4 ? null : t4.firstChild ? n.call(t4.childNodes) : null, f4, !o5 && i4 ? i4 : r4 ? r4.__e : t4.firstChild, o5, e4), M(f4, u4, e4);
  }
  n = s.slice, l = { __e: function(n3, l5, u4, t4) {
    for (var i4, o5, r4; l5 = l5.__; )
      if ((i4 = l5.__c) && !i4.__)
        try {
          if ((o5 = i4.constructor) && null != o5.getDerivedStateFromError && (i4.setState(o5.getDerivedStateFromError(n3)), r4 = i4.__d), null != i4.componentDidCatch && (i4.componentDidCatch(n3, t4 || {}), r4 = i4.__d), r4)
            return i4.__E = i4;
        } catch (l6) {
          n3 = l6;
        }
    throw n3;
  } }, u = 0, t = function(n3) {
    return null != n3 && void 0 === n3.constructor;
  }, b.prototype.setState = function(n3, l5) {
    var u4;
    u4 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = v({}, this.state), "function" == typeof n3 && (n3 = n3(v({}, u4), this.props)), n3 && v(u4, n3), null != n3 && this.__v && (l5 && this._sb.push(l5), w(this));
  }, b.prototype.forceUpdate = function(n3) {
    this.__v && (this.__e = true, n3 && this.__h.push(n3), w(this));
  }, b.prototype.render = k, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n3, l5) {
    return n3.__v.__b - l5.__v.__b;
  }, x.__r = 0, e = 0;

  // node_modules/fn-args/index.js
  function functionArguments(function_) {
    if (typeof function_ !== "function") {
      throw new TypeError("Expected a function");
    }
    const commentRegex = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm;
    const quotes = ["`", '"', "'"];
    const functionSource = function_.toString().replace(commentRegex, "");
    let functionWithNoDefaults = "";
    let depth = 0;
    let index = 0;
    for (; index < functionSource.length && functionSource.charAt(index) !== ")"; index += 1) {
      if (functionSource.startsWith("=>", index)) {
        functionWithNoDefaults = functionSource;
        index = functionSource.length;
        break;
      }
      if (functionSource.charAt(index) === "=") {
        for (; index < functionSource.length && (functionSource.charAt(index) !== "," && functionSource.charAt(index) !== ")" || depth !== 0); index += 1) {
          let wasQuote = false;
          for (const quote of quotes) {
            if (functionSource.charAt(index) === quote) {
              index += 1;
              for (; index < functionSource.length && functionSource.charAt(index) !== quote; ) {
                index += 1;
              }
              wasQuote = true;
              break;
            }
          }
          if (wasQuote) {
            continue;
          }
          switch (functionSource.charAt(index)) {
            case "(":
            case "[":
            case "{":
              depth += 1;
              break;
            case ")":
            case "]":
            case "}":
              depth -= 1;
              break;
            default:
          }
        }
        if (functionSource.charAt(index) === ",") {
          functionWithNoDefaults += ",";
        }
        if (functionSource.charAt(index) === ")") {
          functionWithNoDefaults += ")";
          break;
        }
      } else {
        functionWithNoDefaults += functionSource.charAt(index);
      }
    }
    if (index < functionSource.length && functionSource.charAt(index) === ")") {
      functionWithNoDefaults += ")";
    }
    const regexFnArguments = /^(?:async)?([^=()]+)=|\(([^)]+)\)/;
    const match = regexFnArguments.exec(functionWithNoDefaults);
    return match ? (match[1] || match[2]).split(",").map((x2) => x2.trim()).filter(Boolean) : [];
  }

  // node_modules/tslib/tslib.es6.mjs
  var __assign = function() {
    __assign = Object.assign || function __assign2(t4) {
      for (var s4, i4 = 1, n3 = arguments.length; i4 < n3; i4++) {
        s4 = arguments[i4];
        for (var p5 in s4)
          if (Object.prototype.hasOwnProperty.call(s4, p5))
            t4[p5] = s4[p5];
      }
      return t4;
    };
    return __assign.apply(this, arguments);
  };

  // node_modules/lower-case/dist.es2015/index.js
  function lowerCase(str) {
    return str.toLowerCase();
  }

  // node_modules/no-case/dist.es2015/index.js
  var DEFAULT_SPLIT_REGEXP = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g];
  var DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi;
  function noCase(input, options) {
    if (options === void 0) {
      options = {};
    }
    var _a = options.splitRegexp, splitRegexp = _a === void 0 ? DEFAULT_SPLIT_REGEXP : _a, _b = options.stripRegexp, stripRegexp = _b === void 0 ? DEFAULT_STRIP_REGEXP : _b, _c = options.transform, transform = _c === void 0 ? lowerCase : _c, _d = options.delimiter, delimiter = _d === void 0 ? " " : _d;
    var result = replace(replace(input, splitRegexp, "$1\0$2"), stripRegexp, "\0");
    var start = 0;
    var end = result.length;
    while (result.charAt(start) === "\0")
      start++;
    while (result.charAt(end - 1) === "\0")
      end--;
    return result.slice(start, end).split("\0").map(transform).join(delimiter);
  }
  function replace(input, re, value) {
    if (re instanceof RegExp)
      return input.replace(re, value);
    return re.reduce(function(input2, re2) {
      return input2.replace(re2, value);
    }, input);
  }

  // node_modules/dot-case/dist.es2015/index.js
  function dotCase(input, options) {
    if (options === void 0) {
      options = {};
    }
    return noCase(input, __assign({ delimiter: "." }, options));
  }

  // node_modules/param-case/dist.es2015/index.js
  function paramCase(input, options) {
    if (options === void 0) {
      options = {};
    }
    return dotCase(input, __assign({ delimiter: "-" }, options));
  }

  // node_modules/uid/dist/index.mjs
  var IDX = 256;
  var HEX = [];
  var SIZE = 256;
  var BUFFER;
  while (IDX--)
    HEX[IDX] = (IDX + 256).toString(16).substring(1);
  function uid(len) {
    var i4 = 0, tmp = len || 11;
    if (!BUFFER || IDX + tmp > SIZE * 2) {
      for (BUFFER = "", IDX = 0; i4 < SIZE; i4++) {
        BUFFER += HEX[Math.random() * 256 | 0];
      }
    }
    return BUFFER.substring(IDX, IDX++ + tmp);
  }

  // node_modules/as-web-component/src/utils.js
  function getAttributes(func) {
    const args = functionArguments(func);
    return new Map(args.map((arg) => [paramCase(arg), arg]));
  }
  function getName(func) {
    return paramCase(func.name) || "anonymous";
  }
  function getUniqueName(name) {
    if (name.includes("-") && !window.customElements.get(name)) {
      return name;
    }
    return `${name}-${uid(5).toLowerCase()}`;
  }
  function getArgumentValues(instance, attributes) {
    const args = Object.fromEntries(
      Array.from(attributes.entries()).map(([attr, arg]) => {
        let value = instance.getAttribute(attr);
        value = value === null ? void 0 : value;
        return [arg, value];
      })
    );
    return args;
  }
  function getFieldValues(instance, attributes, defaultArgs = {}) {
    const fields = Object.fromEntries(
      Array.from(attributes.entries()).map(([, arg]) => {
        let value = instance[arg] ?? defaultArgs[arg];
        value = value === null ? void 0 : value;
        return [arg, value];
      })
    );
    return fields;
  }
  function decorateWithProps(Comp, attributes, privateFields, privateProps) {
    attributes.forEach((arg) => {
      Object.defineProperty(Comp.prototype, arg, {
        get() {
          return privateFields.get(this)[arg];
        },
        set(value) {
          if (privateFields.get(this)[arg] !== value) {
            privateFields.get(this)[arg] = value;
            privateProps.get(this).self[$emit]();
          }
        }
      });
    });
  }
  var $instance = Symbol("instance");
  function getInstance(self2) {
    return self2[$instance];
  }
  var $emit = Symbol("emit");
  var AsyncGenerator = async function* ag() {
  }.constructor;
  function isGeneratorFunction(func) {
    if (typeof func !== "function")
      return false;
    return func instanceof AsyncGenerator;
  }

  // node_modules/as-web-component/src/ExportWrapper.js
  var ExportWrapper = class extends String {
    constructor(name, Comp) {
      super(name);
      this.element = Comp;
    }
    define(elementName, customElementRegistry = window.customElements, options = void 0) {
      class Clone extends this.element {
      }
      customElementRegistry.define(elementName, Clone, options);
    }
  };

  // node_modules/mutation-iterator/src/mutation-iterator.js
  var finishSymbol = Symbol("end");
  function mutationIterator(targetObj = {}, { yieldInit = false, receiveEmitter = () => {
  } } = {}) {
    let watcher;
    let emitChange = () => null;
    function emitter() {
      emitChange(true);
      watch();
    }
    receiveEmitter(emitter);
    function watch() {
      watcher = new Promise((resolve) => {
        emitChange = resolve;
      });
    }
    const result = new Proxy(targetObj, {
      set(target, prop, value) {
        target[prop] = value;
        emitChange(true);
        watch();
        return true;
      },
      get(target, prop, receiver) {
        if (prop === Symbol.asyncIterator) {
          return async function* iterator() {
            if (yieldInit)
              yield target;
            while (true) {
              const shouldTerminate = !await watcher;
              if (shouldTerminate)
                return target;
              yield target;
            }
          };
        }
        if (prop === finishSymbol) {
          return () => emitChange(false);
        }
        return Reflect.get(target, prop, receiver);
      }
    });
    watch();
    return result;
  }

  // node_modules/as-web-component/src/self.js
  function self(instance, attributes) {
    let selfObj;
    let defaultArgs;
    function base(localArgs) {
      defaultArgs = localArgs;
      return selfObj;
    }
    base[$instance] = instance;
    Object.defineProperty(base, "props", {
      get() {
        const fields = getFieldValues(instance, attributes, defaultArgs);
        return { ...fields };
      }
    });
    Object.defineProperty(base, "children", {
      get() {
        return [...instance.childNodes];
      }
    });
    selfObj = mutationIterator(base, {
      yieldInit: true,
      receiveEmitter: (emitter) => {
        base[$emit] = emitter;
      }
    });
    return selfObj;
  }

  // node_modules/as-web-component/src/exports.js
  function dispatchEvent(selfInstance, ...args) {
    const instance = getInstance(selfInstance);
    return instance.dispatchEvent.call(instance, ...args);
  }
  function getDom(selfInstance) {
    return getInstance(selfInstance).shadowRoot;
  }

  // node_modules/as-web-component/src/asWebComponent.js
  function asWebComponent(func, renderer, options = { extends: void 0, baseClass: HTMLElement }) {
    const component = getName(func);
    const name = getUniqueName(component);
    const attributes = getAttributes(func);
    const isGenerator = isGeneratorFunction(func);
    const privateProps = /* @__PURE__ */ new WeakMap();
    const privateFields = /* @__PURE__ */ new WeakMap();
    class Comp extends options.baseClass {
      constructor() {
        super();
        privateProps.set(this, {});
        privateFields.set(this, {});
        this.attachShadow({ mode: "open" });
        privateProps.get(this).self = self(this, attributes);
        privateProps.get(this).componentFunc = func.bind(
          privateProps.get(this).self
        );
      }
      static get observedAttributes() {
        return Array.from(attributes.keys());
      }
      connectedCallback() {
        this.setAttribute("data-component", component);
        const args = getArgumentValues(this, attributes);
        Object.entries(args).forEach(([arg, value]) => {
          if (value)
            this[arg] = value;
        });
        renderLoop.call(this);
      }
      //
      // adoptedCallback() {
      //   invalidate.call(this);
      // }
      attributeChangedCallback(attr, _4, newValue) {
        const arg = attributes.get(attr);
        this[arg] = newValue;
      }
    }
    async function renderLoop() {
      const { componentFunc } = privateProps.get(this);
      if (!isGenerator) {
        for await (const _4 of privateProps.get(this).self) {
          const fields2 = getFieldValues(this, attributes);
          const content = await componentFunc(...Object.values(fields2));
          renderer(content, this.shadowRoot);
        }
        return;
      }
      const fields = getFieldValues(this, attributes);
      for await (const content of componentFunc(...Object.values(fields))) {
        renderer(content, this.shadowRoot);
      }
    }
    decorateWithProps(Comp, attributes, privateFields, privateProps);
    const exportWrapper = new ExportWrapper(name, Comp);
    exportWrapper.define(name, void 0, options);
    return exportWrapper;
  }

  // node_modules/preact/hooks/dist/hooks.module.js
  var t2;
  var r2;
  var u2;
  var i2;
  var o2 = 0;
  var f2 = [];
  var c2 = [];
  var e2 = l.__b;
  var a2 = l.__r;
  var v2 = l.diffed;
  var l2 = l.__c;
  var m2 = l.unmount;
  function d2(t4, u4) {
    l.__h && l.__h(r2, t4, o2 || u4), o2 = 0;
    var i4 = r2.__H || (r2.__H = { __: [], __h: [] });
    return t4 >= i4.__.length && i4.__.push({ __V: c2 }), i4.__[t4];
  }
  function F(n3, r4) {
    var u4 = d2(t2++, 7);
    return z2(u4.__H, r4) ? (u4.__V = n3(), u4.i = r4, u4.__h = n3, u4.__V) : u4.__;
  }
  function b2() {
    for (var t4; t4 = f2.shift(); )
      if (t4.__P && t4.__H)
        try {
          t4.__H.__h.forEach(k2), t4.__H.__h.forEach(w2), t4.__H.__h = [];
        } catch (r4) {
          t4.__H.__h = [], l.__e(r4, t4.__v);
        }
  }
  l.__b = function(n3) {
    r2 = null, e2 && e2(n3);
  }, l.__r = function(n3) {
    a2 && a2(n3), t2 = 0;
    var i4 = (r2 = n3.__c).__H;
    i4 && (u2 === r2 ? (i4.__h = [], r2.__h = [], i4.__.forEach(function(n4) {
      n4.__N && (n4.__ = n4.__N), n4.__V = c2, n4.__N = n4.i = void 0;
    })) : (i4.__h.forEach(k2), i4.__h.forEach(w2), i4.__h = [], t2 = 0)), u2 = r2;
  }, l.diffed = function(t4) {
    v2 && v2(t4);
    var o5 = t4.__c;
    o5 && o5.__H && (o5.__H.__h.length && (1 !== f2.push(o5) && i2 === l.requestAnimationFrame || ((i2 = l.requestAnimationFrame) || j2)(b2)), o5.__H.__.forEach(function(n3) {
      n3.i && (n3.__H = n3.i), n3.__V !== c2 && (n3.__ = n3.__V), n3.i = void 0, n3.__V = c2;
    })), u2 = r2 = null;
  }, l.__c = function(t4, r4) {
    r4.some(function(t5) {
      try {
        t5.__h.forEach(k2), t5.__h = t5.__h.filter(function(n3) {
          return !n3.__ || w2(n3);
        });
      } catch (u4) {
        r4.some(function(n3) {
          n3.__h && (n3.__h = []);
        }), r4 = [], l.__e(u4, t5.__v);
      }
    }), l2 && l2(t4, r4);
  }, l.unmount = function(t4) {
    m2 && m2(t4);
    var r4, u4 = t4.__c;
    u4 && u4.__H && (u4.__H.__.forEach(function(n3) {
      try {
        k2(n3);
      } catch (n4) {
        r4 = n4;
      }
    }), u4.__H = void 0, r4 && l.__e(r4, u4.__v));
  };
  var g2 = "function" == typeof requestAnimationFrame;
  function j2(n3) {
    var t4, r4 = function() {
      clearTimeout(u4), g2 && cancelAnimationFrame(t4), setTimeout(n3);
    }, u4 = setTimeout(r4, 100);
    g2 && (t4 = requestAnimationFrame(r4));
  }
  function k2(n3) {
    var t4 = r2, u4 = n3.__c;
    "function" == typeof u4 && (n3.__c = void 0, u4()), r2 = t4;
  }
  function w2(n3) {
    var t4 = r2;
    n3.__c = n3.__(), r2 = t4;
  }
  function z2(n3, t4) {
    return !n3 || n3.length !== t4.length || t4.some(function(t5, r4) {
      return t5 !== n3[r4];
    });
  }

  // node_modules/@preact/signals-core/dist/signals-core.module.js
  function i3() {
    throw new Error("Cycle detected");
  }
  function t3() {
    if (!(h2 > 1)) {
      var i4, t4 = false;
      while (void 0 !== n2) {
        var o5 = n2;
        n2 = void 0;
        s2++;
        while (void 0 !== o5) {
          var r4 = o5.o;
          o5.o = void 0;
          o5.f &= -3;
          if (!(8 & o5.f) && c3(o5))
            try {
              o5.c();
            } catch (o6) {
              if (!t4) {
                i4 = o6;
                t4 = true;
              }
            }
          o5 = r4;
        }
      }
      s2 = 0;
      h2--;
      if (t4)
        throw i4;
    } else
      h2--;
  }
  var r3 = void 0;
  var n2 = void 0;
  var h2 = 0;
  var s2 = 0;
  var f3 = 0;
  function v3(i4) {
    if (void 0 !== r3) {
      var t4 = i4.n;
      if (void 0 === t4 || t4.t !== r3) {
        t4 = { i: 0, S: i4, p: r3.s, n: void 0, t: r3, e: void 0, x: void 0, r: t4 };
        if (void 0 !== r3.s)
          r3.s.n = t4;
        r3.s = t4;
        i4.n = t4;
        if (32 & r3.f)
          i4.S(t4);
        return t4;
      } else if (-1 === t4.i) {
        t4.i = 0;
        if (void 0 !== t4.n) {
          t4.n.p = t4.p;
          if (void 0 !== t4.p)
            t4.p.n = t4.n;
          t4.p = r3.s;
          t4.n = void 0;
          r3.s.n = t4;
          r3.s = t4;
        }
        return t4;
      }
    }
  }
  function e3(i4) {
    this.v = i4;
    this.i = 0;
    this.n = void 0;
    this.t = void 0;
  }
  e3.prototype.h = function() {
    return true;
  };
  e3.prototype.S = function(i4) {
    if (this.t !== i4 && void 0 === i4.e) {
      i4.x = this.t;
      if (void 0 !== this.t)
        this.t.e = i4;
      this.t = i4;
    }
  };
  e3.prototype.U = function(i4) {
    if (void 0 !== this.t) {
      var t4 = i4.e, o5 = i4.x;
      if (void 0 !== t4) {
        t4.x = o5;
        i4.e = void 0;
      }
      if (void 0 !== o5) {
        o5.e = t4;
        i4.x = void 0;
      }
      if (i4 === this.t)
        this.t = o5;
    }
  };
  e3.prototype.subscribe = function(i4) {
    var t4 = this;
    return b3(function() {
      var o5 = t4.value, r4 = 32 & this.f;
      this.f &= -33;
      try {
        i4(o5);
      } finally {
        this.f |= r4;
      }
    });
  };
  e3.prototype.valueOf = function() {
    return this.value;
  };
  e3.prototype.toString = function() {
    return this.value + "";
  };
  e3.prototype.toJSON = function() {
    return this.value;
  };
  e3.prototype.peek = function() {
    return this.v;
  };
  Object.defineProperty(e3.prototype, "value", { get: function() {
    var i4 = v3(this);
    if (void 0 !== i4)
      i4.i = this.i;
    return this.v;
  }, set: function(o5) {
    if (r3 instanceof l3)
      !function() {
        throw new Error("Computed cannot have side-effects");
      }();
    if (o5 !== this.v) {
      if (s2 > 100)
        i3();
      this.v = o5;
      this.i++;
      f3++;
      h2++;
      try {
        for (var n3 = this.t; void 0 !== n3; n3 = n3.x)
          n3.t.N();
      } finally {
        t3();
      }
    }
  } });
  function u3(i4) {
    return new e3(i4);
  }
  function c3(i4) {
    for (var t4 = i4.s; void 0 !== t4; t4 = t4.n)
      if (t4.S.i !== t4.i || !t4.S.h() || t4.S.i !== t4.i)
        return true;
    return false;
  }
  function d3(i4) {
    for (var t4 = i4.s; void 0 !== t4; t4 = t4.n) {
      var o5 = t4.S.n;
      if (void 0 !== o5)
        t4.r = o5;
      t4.S.n = t4;
      t4.i = -1;
      if (void 0 === t4.n) {
        i4.s = t4;
        break;
      }
    }
  }
  function a3(i4) {
    var t4 = i4.s, o5 = void 0;
    while (void 0 !== t4) {
      var r4 = t4.p;
      if (-1 === t4.i) {
        t4.S.U(t4);
        if (void 0 !== r4)
          r4.n = t4.n;
        if (void 0 !== t4.n)
          t4.n.p = r4;
      } else
        o5 = t4;
      t4.S.n = t4.r;
      if (void 0 !== t4.r)
        t4.r = void 0;
      t4 = r4;
    }
    i4.s = o5;
  }
  function l3(i4) {
    e3.call(this, void 0);
    this.x = i4;
    this.s = void 0;
    this.g = f3 - 1;
    this.f = 4;
  }
  (l3.prototype = new e3()).h = function() {
    this.f &= -3;
    if (1 & this.f)
      return false;
    if (32 == (36 & this.f))
      return true;
    this.f &= -5;
    if (this.g === f3)
      return true;
    this.g = f3;
    this.f |= 1;
    if (this.i > 0 && !c3(this)) {
      this.f &= -2;
      return true;
    }
    var i4 = r3;
    try {
      d3(this);
      r3 = this;
      var t4 = this.x();
      if (16 & this.f || this.v !== t4 || 0 === this.i) {
        this.v = t4;
        this.f &= -17;
        this.i++;
      }
    } catch (i5) {
      this.v = i5;
      this.f |= 16;
      this.i++;
    }
    r3 = i4;
    a3(this);
    this.f &= -2;
    return true;
  };
  l3.prototype.S = function(i4) {
    if (void 0 === this.t) {
      this.f |= 36;
      for (var t4 = this.s; void 0 !== t4; t4 = t4.n)
        t4.S.S(t4);
    }
    e3.prototype.S.call(this, i4);
  };
  l3.prototype.U = function(i4) {
    if (void 0 !== this.t) {
      e3.prototype.U.call(this, i4);
      if (void 0 === this.t) {
        this.f &= -33;
        for (var t4 = this.s; void 0 !== t4; t4 = t4.n)
          t4.S.U(t4);
      }
    }
  };
  l3.prototype.N = function() {
    if (!(2 & this.f)) {
      this.f |= 6;
      for (var i4 = this.t; void 0 !== i4; i4 = i4.x)
        i4.t.N();
    }
  };
  l3.prototype.peek = function() {
    if (!this.h())
      i3();
    if (16 & this.f)
      throw this.v;
    return this.v;
  };
  Object.defineProperty(l3.prototype, "value", { get: function() {
    if (1 & this.f)
      i3();
    var t4 = v3(this);
    this.h();
    if (void 0 !== t4)
      t4.i = this.i;
    if (16 & this.f)
      throw this.v;
    return this.v;
  } });
  function w3(i4) {
    return new l3(i4);
  }
  function y2(i4) {
    var o5 = i4.u;
    i4.u = void 0;
    if ("function" == typeof o5) {
      h2++;
      var n3 = r3;
      r3 = void 0;
      try {
        o5();
      } catch (t4) {
        i4.f &= -2;
        i4.f |= 8;
        _(i4);
        throw t4;
      } finally {
        r3 = n3;
        t3();
      }
    }
  }
  function _(i4) {
    for (var t4 = i4.s; void 0 !== t4; t4 = t4.n)
      t4.S.U(t4);
    i4.x = void 0;
    i4.s = void 0;
    y2(i4);
  }
  function p2(i4) {
    if (r3 !== this)
      throw new Error("Out-of-order effect");
    a3(this);
    r3 = i4;
    this.f &= -2;
    if (8 & this.f)
      _(this);
    t3();
  }
  function g3(i4) {
    this.x = i4;
    this.u = void 0;
    this.s = void 0;
    this.o = void 0;
    this.f = 32;
  }
  g3.prototype.c = function() {
    var i4 = this.S();
    try {
      if (8 & this.f)
        return;
      if (void 0 === this.x)
        return;
      var t4 = this.x();
      if ("function" == typeof t4)
        this.u = t4;
    } finally {
      i4();
    }
  };
  g3.prototype.S = function() {
    if (1 & this.f)
      i3();
    this.f |= 1;
    this.f &= -9;
    y2(this);
    d3(this);
    h2++;
    var t4 = r3;
    r3 = this;
    return p2.bind(this, t4);
  };
  g3.prototype.N = function() {
    if (!(2 & this.f)) {
      this.f |= 2;
      this.o = n2;
      n2 = this;
    }
  };
  g3.prototype.d = function() {
    this.f |= 8;
    if (!(1 & this.f))
      _(this);
  };
  function b3(i4) {
    var t4 = new g3(i4);
    try {
      t4.c();
    } catch (i5) {
      t4.d();
      throw i5;
    }
    return t4.d.bind(t4);
  }

  // node_modules/@preact/signals/dist/signals.module.js
  var c4;
  var v4;
  function s3(n3, i4) {
    l[n3] = i4.bind(null, l[n3] || function() {
    });
  }
  function l4(n3) {
    if (v4)
      v4();
    v4 = n3 && n3.S();
  }
  function d4(n3) {
    var r4 = this, t4 = n3.data, f4 = useSignal(t4);
    f4.value = t4;
    var o5 = F(function() {
      var n4 = r4.__v;
      while (n4 = n4.__)
        if (n4.__c) {
          n4.__c.__$f |= 4;
          break;
        }
      r4.__$u.c = function() {
        r4.base.data = o5.peek();
      };
      return w3(function() {
        var n5 = f4.value.value;
        return 0 === n5 ? 0 : true === n5 ? "" : n5 || "";
      });
    }, []);
    return o5.value;
  }
  d4.displayName = "_st";
  Object.defineProperties(e3.prototype, { constructor: { configurable: true, value: void 0 }, type: { configurable: true, value: d4 }, props: { configurable: true, get: function() {
    return { data: this };
  } }, __b: { configurable: true, value: 1 } });
  s3("__b", function(n3, r4) {
    if ("string" == typeof r4.type) {
      var i4, t4 = r4.props;
      for (var f4 in t4)
        if ("children" !== f4) {
          var e4 = t4[f4];
          if (e4 instanceof e3) {
            if (!i4)
              r4.__np = i4 = {};
            i4[f4] = e4;
            t4[f4] = e4.peek();
          }
        }
    }
    n3(r4);
  });
  s3("__r", function(n3, r4) {
    l4();
    var i4, t4 = r4.__c;
    if (t4) {
      t4.__$f &= -2;
      if (void 0 === (i4 = t4.__$u))
        t4.__$u = i4 = function(n4) {
          var r5;
          b3(function() {
            r5 = this;
          });
          r5.c = function() {
            t4.__$f |= 1;
            t4.setState({});
          };
          return r5;
        }();
    }
    c4 = t4;
    l4(i4);
    n3(r4);
  });
  s3("__e", function(n3, r4, i4, t4) {
    l4();
    c4 = void 0;
    n3(r4, i4, t4);
  });
  s3("diffed", function(n3, r4) {
    l4();
    c4 = void 0;
    var i4;
    if ("string" == typeof r4.type && (i4 = r4.__e)) {
      var t4 = r4.__np, f4 = r4.props;
      if (t4) {
        var o5 = i4.U;
        if (o5)
          for (var e4 in o5) {
            var u4 = o5[e4];
            if (void 0 !== u4 && !(e4 in t4)) {
              u4.d();
              o5[e4] = void 0;
            }
          }
        else
          i4.U = o5 = {};
        for (var a4 in t4) {
          var v5 = o5[a4], s4 = t4[a4];
          if (void 0 === v5) {
            v5 = p4(i4, a4, s4, f4);
            o5[a4] = v5;
          } else
            v5.o(s4, f4);
        }
      }
    }
    n3(r4);
  });
  function p4(n3, r4, i4, t4) {
    var f4 = r4 in n3 && void 0 === n3.ownerSVGElement, o5 = u3(i4);
    return { o: function(n4, r5) {
      o5.value = n4;
      t4 = r5;
    }, d: b3(function() {
      var i5 = o5.value.value;
      if (t4[r4] !== i5) {
        t4[r4] = i5;
        if (f4)
          n3[r4] = i5;
        else if (i5)
          n3.setAttribute(r4, i5);
        else
          n3.removeAttribute(r4);
      }
    }) };
  }
  s3("unmount", function(n3, r4) {
    if ("string" == typeof r4.type) {
      var i4 = r4.__e;
      if (i4) {
        var t4 = i4.U;
        if (t4) {
          i4.U = void 0;
          for (var f4 in t4) {
            var o5 = t4[f4];
            if (o5)
              o5.d();
          }
        }
      }
    } else {
      var e4 = r4.__c;
      if (e4) {
        var u4 = e4.__$u;
        if (u4) {
          e4.__$u = void 0;
          u4.d();
        }
      }
    }
    n3(r4);
  });
  s3("__h", function(n3, r4, i4, t4) {
    if (t4 < 3 || 9 === t4)
      r4.__$f |= 2;
    n3(r4, i4, t4);
  });
  b.prototype.shouldComponentUpdate = function(n3, r4) {
    var i4 = this.__$u;
    if (!(i4 && void 0 !== i4.s || 4 & this.__$f))
      return true;
    if (3 & this.__$f)
      return true;
    for (var t4 in r4)
      return true;
    for (var f4 in n3)
      if ("__source" !== f4 && n3[f4] !== this.props[f4])
        return true;
    for (var o5 in this.props)
      if (!(o5 in n3))
        return true;
    return false;
  };
  function useSignal(n3) {
    return F(function() {
      return u3(n3);
    }, []);
  }

  // src/services/WakeLockService.js
  var screenLockDisabled = u3(false);
  async function disableScreenLock() {
    try {
      console.log("Requesting WakeLock");
      await navigator.wakeLock.request("screen");
      screenLockDisabled.value = true;
    } catch (error) {
      console.error("WakeLock", error);
      screenLockDisabled.value = false;
    }
  }

  // node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
  var _3 = 0;
  function o4(o5, e4, n3, t4, f4, l5) {
    var s4, u4, a4 = {};
    for (u4 in e4)
      "ref" == u4 ? s4 = e4[u4] : a4[u4] = e4[u4];
    var i4 = { type: o5, props: a4, key: n3, ref: s4, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_3, __source: f4, __self: l5 };
    if ("function" == typeof o5 && (s4 = o5.defaultProps))
      for (u4 in s4)
        void 0 === a4[u4] && (a4[u4] = s4[u4]);
    return l.vnode && l.vnode(i4), i4;
  }

  // src/components/WakeLock.jsx
  async function* WakeLock() {
    this.wakeLockDisabled = false;
    b3(() => {
      this.wakeLockDisabled = screenLockDisabled.value;
    });
    for await (const { wakeLockDisabled } of this) {
      yield /* @__PURE__ */ o4(k, { children: [
        /* @__PURE__ */ o4("link", { rel: "stylesheet", href: "/dist/main.css" }),
        /* @__PURE__ */ o4("style", { children: `
          :host {
             display: grid;
          }
  
          span {
            grid-column: 1;
            grid-row: 1;
          }
        ` }),
        /* @__PURE__ */ o4("span", { children: "\u{1F505}" }),
        !wakeLockDisabled && /* @__PURE__ */ o4("span", { children: "\u{1F6AB}" })
      ] });
    }
  }
  var WakeLock_default = asWebComponent(WakeLock, D);

  // package.json
  var package_default = {
    name: "remote-control",
    version: "1.1.7",
    description: "BLE Remote Control",
    main: "src/index.html",
    directories: {
      doc: "docs"
    },
    scripts: {
      test: "npm run lint && npm run build",
      start: "esbuild src/main.js --bundle --outdir=public/dist --jsx-import-source=preact --jsx=automatic --watch --servedir=public",
      build: "esbuild src/main.js --bundle --outdir=dist/dist --jsx-import-source=preact --jsx=automatic && cp -r public/. dist/",
      lint: "eslint src",
      deploy: "gh-pages -d dist"
    },
    repository: {
      type: "git",
      url: "git+https://github.com/DavidBeale/remote-control.git"
    },
    author: "David Beale",
    license: "MIT",
    bugs: {
      url: "https://github.com/DavidBeale/remote-control/issues"
    },
    homepage: "https://github.com/DavidBeale/remote-control#readme",
    devDependencies: {
      "browser-sync": "^2.27.9",
      esbuild: "^0.18.16",
      eslint: "^8.45.0",
      "eslint-config-airbnb": "^19.0.4",
      "eslint-config-prettier": "^8.8.0",
      "eslint-plugin-prettier": "^5.0.0",
      "gh-pages": "^5.0.0"
    },
    dependencies: {
      "@picocss/pico": "^2.0.0-alpha1",
      "@preact/signals": "^1.1.5",
      "as-web-component": "^0.5.1",
      multirator: "^0.1.0",
      preact: "^10.16.0"
    }
  };

  // src/components/Header.jsx
  function Header() {
    return /* @__PURE__ */ o4(k, { children: [
      /* @__PURE__ */ o4("link", { rel: "stylesheet", href: "/dist/main.css" }),
      /* @__PURE__ */ o4("style", { children: `
        :host {
           background: var(--pico-primary-background);
           display: block;
        }

        header {
          display: flex;
        }

        h1 {
          --pico-font-size: 1rem;
          flex: 2;
          text-align: center;
          margin-bottom: 0;
        }
      ` }),
      /* @__PURE__ */ o4("header", { children: [
        /* @__PURE__ */ o4("h1", { children: [
          "BLE Remote Control (",
          package_default.version,
          ")"
        ] }),
        /* @__PURE__ */ o4(WakeLock_default, {})
      ] })
    ] });
  }
  var Header_default = asWebComponent(Header, D);

  // src/components/DeviceSelector.jsx
  async function DeviceSelector(devices, currentDeviceName) {
    const select = (name) => {
      dispatchEvent(
        this,
        new CustomEvent("change", {
          detail: {
            name
          }
        })
      );
    };
    return /* @__PURE__ */ o4(k, { children: [
      /* @__PURE__ */ o4("link", { rel: "stylesheet", href: "/dist/main.css" }),
      /* @__PURE__ */ o4("style", { children: `
          @namespace css url(http://www.w3.org/2000/css);
  
          :host {
             display: block;
          }
  
          nav {
            border-bottom: 2px solid var(--pico-primary-hover-background);;
            width: 100%;
            margin-top: .5rem;
            padding-inline: 0.5rem;
          }
  
          div[role=group] {
            margin-bottom: 0px;
          }
  
          [role=group] button {
            --pico-form-element-spacing-vertical: .3rem;
            --pico-form-element-spacing-horizontal: 1rem;
            border-radius: 0;
          }
        }
        ` }),
      /* @__PURE__ */ o4("nav", { children: /* @__PURE__ */ o4("div", { role: "group", children: devices.map((name) => {
        if (name === currentDeviceName) {
          return /* @__PURE__ */ o4("button", { "aria-current": "true", children: name });
        }
        return /* @__PURE__ */ o4("button", { class: "secondary", onClick: () => select(name), children: name });
      }) }) })
    ] });
  }
  var DeviceSelector_default = asWebComponent(DeviceSelector, D);

  // src/services/FeatureMap.js
  var FeatureMap_default = {
    "0000000a-0000-1000-8000-00805f9b34fb": {
      name: "engine",
      label: "Engine"
    },
    "0000000b-0000-1000-8000-00805f9b34fb": {
      name: "headlight",
      label: "Head Light"
    },
    "0000000c-0000-1000-8000-00805f9b34fb": {
      name: "cablight",
      label: "Cab Light"
    },
    "0000000d-0000-1000-8000-00805f9b34fb": {
      name: "velocity"
    },
    "0000000e-0000-1000-8000-00805f9b34fb": {
      name: "speed"
    }
  };

  // src/controls/SwitchFeature.jsx
  var template = document.createElement("template");
  template.innerHTML = `
  <label id="label" for="switch"></label>
  <input id="switch" type="checkbox" />
`;
  async function* SwitchFeature(feature) {
    this.checked = false;
    const checked = (event) => {
      if (event.target.checked) {
        this.props.feature.writeValue(Uint8Array.from([1]));
      } else {
        this.props.feature.writeValue(Uint8Array.from([0]));
      }
    };
    for await (const { props } of this(feature)) {
      this.checked = (await props.feature.readValue()).getUint8();
      props.feature.value.map((value) => {
        this.checked = value.getUint8();
        return null;
      });
      yield /* @__PURE__ */ o4(k, { children: [
        /* @__PURE__ */ o4("link", { rel: "stylesheet", href: "/dist/main.css" }),
        /* @__PURE__ */ o4("label", { children: [
          /* @__PURE__ */ o4(
            "input",
            {
              type: "checkbox",
              role: "switch",
              checked: this.checked,
              onChange: checked
            }
          ),
          FeatureMap_default[props.feature.uuid].label
        ] })
      ] });
    }
  }
  var SwitchFeature_default = asWebComponent(SwitchFeature, D);

  // src/controls/Throttle.jsx
  async function* Throttle(speed = 0) {
    yield /* @__PURE__ */ o4(k, { children: [
      /* @__PURE__ */ o4("link", { rel: "stylesheet", href: "/dist/main.css" }),
      /* @__PURE__ */ o4("style", { children: `
        :host {
          display: block;
          position: relative;
          text-align: center;
        }

        #stop {
          --pico-background-color: red;
          --pico-border-color: darkred;

          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 20px;
          margin: auto;
          width: 5rem;
          height: 5rem;
          border-radius: 100%;
          z-index: 100;
        }

        .c-rng {
          --rng-focus: #064374;
          --rng-lower: #6495ED;
          --rng-upper: #CFD8DC;
          --rng-percent: 0%;
          --rng-percent-upper: 80%;
          
          --rng-bdrs: .375rem;
          --rng-bgi: linear-gradient(to right, var(--rng-lower) var(--rng-percent), var(--rng-upper) var(--rng-percent));
          --rng-h: 0.75rem;
          --rng-m: 2rem 0;
          --rng-w: 100%;
          
          --rng-label-c: #333;
          --rng-label-fz: 0.75rem;
          --rng-label-off: 0.25rem;
                
          --rng-thumb-bdrs: 50%;
          --rng-thumb-bxsh: none;
          --rng-thumb-bxsh--focus: inset 0 0 0 0.25rem var(--rng-focus);
          --rng-thumb-bgc: #0960A5;
          --rng-thumb-h: 2rem;
          --rng-thumb-w: 2rem;
          --rng-thumb-z: 1;
  
          background-image: var(--rng-bgi);
          border-radius: var(--rng-bdrs);
          box-sizing: border-box;
          font-family: inherit;
          height: var(--rng-h);
          margin: var(--rng-m);
          outline: none;
          position: relative;
          width: var(--rng-w);
        }
        /* 
        =====
        THUMB
        =====
        */
        .c-rng::-moz-range-thumb {
          background-color: var(--rng-thumb-bgc);
          border-radius: var(--rng-thumb-bdrs);
          box-shadow: var(--rng-thumb-bxsh);
          color: #000;
          cursor: ew-resize;
          height: var(--rng-thumb-h);  
          margin-top: calc(0px - ((var(--rng-thumb-h) - var(--rng-h)) / 2));
          position: relative;
          width: var(--rng-thumb-w);
          z-index: var(--rng-thumb-z);
        }
        .c-rng::-webkit-slider-thumb {
          background-color: var(--rng-thumb-bgc);
          border-radius: var(--rng-thumb-bdrs);
          box-shadow: var(--rng-thumb-bxsh);
          cursor: ew-resize;
          height: var(--rng-thumb-h);  
          margin-top: calc(0px - ((var(--rng-thumb-h) - var(--rng-h)) / 2));
          position: relative;
          width: var(--rng-thumb-w);
          z-index: var(--rng-thumb-z);
        }
        .c-rng:focus::-webkit-slider-thumb {
          box-shadow: var(--rng-thumb-bxsh--focus);
        }
        /* 
        =====
        TRACK
        =====
        */
        .c-rng::-moz-range-track {
          background: transparent;
          background-size: 100%;
          border-radius: var(--rng-bdrs);
          box-sizing: border-box;
          height: var(--rng-h);
        }
        .c-rng::-webkit-slider-runnable-track {
          background: transparent;
          background-size: 100%;
          border-radius: var(--rng-bdrs);
          box-sizing: border-box;
          height: var(--rng-h);
        }
        .c-rng,
        .c-rng::-webkit-slider-runnable-track,
        .c-rng::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
        }
        /* 
        ======
        LABELS
        ======
        */
        .c-rng::after,
        .c-rng::before {
          color: var(--rng-label-c);
          font-size: var(--rng-label-fz);
          line-height: 1;
          position: absolute;
          top: calc(var(--rng-h) + var(--rng-label-off));
          z-index: -1;
        }
        .c-rng[data-range*="labels"]::after {
          content: attr(max);
          right: 0;
        }
        .c-rng[data-range*="labels"]::before {
          content: attr(min);
        }
        .c-rng--labels-above .c-rng::after,
        .c-rng--labels-above .c-rng::before {
          top: -1rem; /* TODO */
        }
  
        /* 
        ======
        OUTPUT
        ======
        */
        .c-rng__output {
          --rng-output-bgc: #444;
          --rng-output-c: #EEE;
          --rng-output-p: 0.25rem 0 0 0;
          --rng-output-t: 0.25rem;
          --rng-output-w: 2rem;
  
          background-color: var(--rng-output-bgc);
          color: var(--rng-output-c);
          display: inline-block;
          font-family: sans-serif;
          font-size: 0.675rem;
          left: calc(1% * var(--rng-unit) - ((var(--rng-thumb-w) / 100) * var(--rng-unit)));
          padding: var(--rng-output-p);
          position: relative;
          text-align: center;
          top: var(--rng-output-t);
          width: var(--rng-output-w);
        }
        .c-rng__output::after {
          border-left: calc(var(--rng-output-w) / 2) solid transparent;
          border-right: calc(var(--rng-output-w) / 2) solid transparent;
          border-top: calc(var(--rng-output-w) / 3) solid var(--rng-output-bgc);
          content: "";
          height: 0; 
          left: 0;
          position: absolute;
          top: 100%;
          width: 0;
        }
        /* 
        =======
        WRAPPER
        =======
        */
        .c-rng__wrapper .c-rng {
          bottom: 1rem;
          left: 0;
          margin: 0;
          position: absolute;
        }
        .c-rng__wrapper .c-rng__output {
          position: absolute;
          top: 0;
        }
        .c-rng__wrapper {
          --rng-ticks-fill: #B0B0B0;
          flex: 1;
          height: 4rem; /* TODO */
          margin-bottom: 1rem;
          position: relative;
        }
        /* 
        =====
        MULTI
        =====
        */
        .c-rng__multi [data-range*="lower"] {
          --rng-bgi: linear-gradient(to right, var(--rng-upper) var(--rng-percent), var(--rng-lower) var(--rng-percent), var(--rng-lower) var(--rng-percent-upper), var(--rng-upper) var(--rng-percent-upper));
        }
        .c-rng__multi [data-range*="upper"] {
          background: none;
        }
        /*
        ========
        CIRCULAR
        ========
        */
        .c-rng--circular {
          --circle-bgc: var(--pico-card-background-color);
          --circle-size: calc(100vw - 70px);
          --track-bgc: var(--pico-switch-background-color);
          --track-fill: var(--pico-primary-background);
          --thumb-size: 30px;
  
          --gradient-start: 0deg;
          --gradient-end: 0deg;
  
          background-image: conic-gradient(var(--track-bgc) 0, var(--track-bgc) var(--gradient-start), var(--track-fill) var(--gradient-start), var(--track-fill) var(--gradient-end), var(--track-bgc) var(--gradient-end), var(--track-bgc));
          border-radius: 50%;
          display: inline-block;
          height: var(--circle-size);
          margin: 0.25rem;
          position: relative;
          touch-action: none;
          width: var(--circle-size);
        }
        .c-rng--circular::before {
          align-items: self-end;
          padding-bottom: 1rem;
          background-color: var(--circle-bgc);
          border-radius: 50%;
          content: attr(data-value);
          display: flex;
          font-family: ui-sans-serif, ui-system, sans-serif;
          font-size: 2rem;
          height: calc(var(--circle-size) - (var(--thumb-size) * 2));
          justify-content: center;
          left: var(--thumb-size);
          position: absolute;
          top: var(--thumb-size);
          width: calc(var(--circle-size) - (var(--thumb-size) * 2));
        }
        .c-rng--circular::after {
          background-color: var(--track-fill);
          border-radius: 50%;
          content: "";
          height: var(--thumb-size);
          position: absolute;
          left: calc(50% - (var(--thumb-size) / 2));
          width: var(--thumb-size);
        }
        .c-rng--circular-output {
          background: transparent;
          position: absolute;
          top: 50%;
          left: 50%;
          height: var(--thumb-size);
          margin-top: calc(var(--thumb-size) / -2);
          transform: rotate(var(--angle));
          transform-origin: center left;
          width: 50%;
          z-index: 1;
        }
        .c-rng--circular-output::before {
          background-color: var(--thumb-bgc, #FFF);
          border: var(--thumb-bdw, 2px) solid var(--track-fill);
          border-radius: 50%;
          box-shadow: var(--thumb-bxsh, none);
          box-sizing: border-box;
          content: "";
          cursor: grab;
          display: inline-block;
          height: var(--thumb-size);
          position: absolute;
          right: 0;
          width: var(--thumb-size);
        }
        .c-rng--circular-output:focus {
          --thumb-bxsh: inset 0 0 0 2px #FFF, inset 0 0 0 10px var(--track-fill);
          outline: none;
        }
        /*
        ======
        TICKS
        ======
        */
        .c-rng--ticks {
          fill: var(--rng-ticks-fill);
          bottom: 0;
          height: 1rem; /* TODO */
          left: 0;
          position: absolute;
          width: calc(100% - var(--rng-thumb-w));
          margin-left: calc(var(--rng-thumb-w) / 2);
        }
        .c-rng--ticks rect:first-of-type {
          transform: translateX(1px);
        }
        .c-rng--ticks rect:last-of-type {
          transform: translateX(-1px);
        }
        .c-rng--ticks-above .c-rng--ticks {
          bottom: auto;
          top: 1.25rem;
        }
        .c-rng--ticks-full .c-rng--ticks {
          --rng-ticks-fill: #ffccd5; /* TODO! */
          height: 2.5rem;
        }
  
        /* Modifiers */
        .c-rng--icons {
          --ico-audio: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 32"><path d="M27.814 28.814c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 2.739-2.739 4.247-6.38 4.247-10.253s-1.508-7.514-4.247-10.253c-0.586-0.586-0.586-1.536 0-2.121s1.536-0.586 2.121 0c3.305 3.305 5.126 7.7 5.126 12.374s-1.82 9.069-5.126 12.374c-0.293 0.293-0.677 0.439-1.061 0.439zM22.485 25.985c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 4.094-4.094 4.094-10.755 0-14.849-0.586-0.586-0.586-1.536 0-2.121s1.536-0.586 2.121 0c2.55 2.55 3.954 5.94 3.954 9.546s-1.404 6.996-3.954 9.546c-0.293 0.293-0.677 0.439-1.061 0.439v0zM17.157 23.157c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 2.534-2.534 2.534-6.658 0-9.192-0.586-0.586-0.586-1.536 0-2.121s1.535-0.586 2.121 0c3.704 3.704 3.704 9.731 0 13.435-0.293 0.293-0.677 0.439-1.061 0.439z"></path><path d="M13 30c-0.26 0-0.516-0.102-0.707-0.293l-7.707-7.707h-3.586c-0.552 0-1-0.448-1-1v-10c0-0.552 0.448-1 1-1h3.586l7.707-7.707c0.286-0.286 0.716-0.372 1.090-0.217s0.617 0.519 0.617 0.924v26c0 0.404-0.244 0.769-0.617 0.924-0.124 0.051-0.254 0.076-0.383 0.076z"></path></svg>');
          --ico-mute: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 32"><path d="M13 30c-0.26 0-0.516-0.102-0.707-0.293l-7.707-7.707h-3.586c-0.552 0-1-0.448-1-1v-10c0-0.552 0.448-1 1-1h3.586l7.707-7.707c0.286-0.286 0.716-0.372 1.090-0.217s0.617 0.519 0.617 0.924v26c0 0.404-0.244 0.769-0.617 0.924-0.124 0.051-0.254 0.076-0.383 0.076z"></path></svg>');
          align-items: center;
          display: flex;
          width: 100%;
        }

        [data-icon] {
          --icon-bgc: #B0B0B0;
          --icon-w: 2rem;
          background-color: var(--icon-bgc);
          height: var(--icon-w);
          margin-top: 0.5rem;
          mask: no-repeat center/var(--icon-w) var(--icon);
          -webkit-mask: no-repeat center/var(--icon-w) var(--icon);
          width: var(--icon-w);
        }
        [data-icon="audio"] { --icon: var(--ico-audio); margin-left: 1rem }
        [data-icon="mute"] { --icon: var(--ico-mute); }
      ` }),
      /* @__PURE__ */ o4(
        "input",
        {
          type: "range",
          value: speed,
          onChange: (event) => dispatchEvent(
            this,
            new CustomEvent("change", { detail: event.target.valueAsNumber })
          ),
          min: "0",
          max: "100",
          step: "5"
        }
      ),
      /* @__PURE__ */ o4(
        "button",
        {
          id: "stop",
          onClick: () => dispatchEvent(this, new CustomEvent("change", { detail: 0 })),
          children: "Stop"
        }
      )
    ] });
    const range = getDom(this).querySelector("input");
    new RangeSlider(range, { range: "circular" });
    for await (const { props } of this({ speed })) {
      range.value = props.speed;
      range.dispatchEvent(new Event("input"));
    }
  }
  var Throttle_default = asWebComponent(Throttle, D);
  var RangeSlider = class {
    constructor(element, settings) {
      this.settings = {
        clsCircular: "c-rng--circular",
        clsCircularOutput: "c-rng--circular-output",
        clsOutput: "c-rng__output",
        clsOutputWrapper: "c-rng--output",
        clsRangeTicks: "c-rng--ticks",
        clsWrapper: "c-rng__wrapper",
        offset: -90,
        varPercent: "--rng-percent",
        varPercentUpper: "--rng-percent-upper",
        varThumb: "--rng-thumb-w",
        varUnit: "--rng-unit",
        varValue: "--rng-value",
        ...stringToType(settings)
      };
      this.range = element;
      this.initRange(this.range);
    }
    /**
     * @function initRange
     * @param {Node} range
     * @description Initialize: Create elements, add eventListeners etc.
     */
    initRange(range) {
      const circular = this.settings.range.includes("circular");
      range.id = range.id || uuid();
      this.lower = this.settings.range.includes("upper") ? range.parentNode.querySelector(`[data-range*="lower"]`) : null;
      this.max = parseInt(range.max, 10) || 100;
      this.min = parseInt(range.min, 10);
      this.multiplier = 100 / (this.max - this.min);
      this.output = this.settings.range.includes("output") || circular ? document.createElement("output") : null;
      this.ticks = parseInt(range.dataset.ticks, 10);
      this.upper = this.settings.range.includes("lower") ? range.parentNode.querySelector(`[data-range*="upper"]`) : null;
      const isMulti = this.lower || this.upper;
      this.wrapper = isMulti ? range.parentNode : document.createElement("div");
      if (this.output) {
        this.output.className = circular ? this.settings.clsCircularOutput : this.settings.clsOutput;
        this.output.for = range.id;
        if (isMulti) {
          this.wrapper.insertBefore(this.output, range);
        } else {
          this.wrapper.classList.add(
            circular ? this.settings.clsCircular : this.settings.clsOutputWrapper
          );
          this.wrapper.appendChild(this.output);
        }
      }
      if (!isMulti) {
        range.parentNode.insertBefore(this.wrapper, range);
        this.wrapper.appendChild(range);
      }
      if (range.dataset.modifier) {
        this.wrapper.classList.add(range.dataset.modifier);
      }
      this.wrapper.classList.add(this.settings.clsWrapper);
      this.wrapper.style.setProperty(
        this.settings.varThumb,
        getComputedStyle(range).getPropertyValue(this.settings.varThumb)
      );
      if (this.ticks) {
        const ticks = [...Array(this.ticks).keys()];
        const svg = `
          <svg class="${this.settings.clsRangeTicks}" width="100%" height="100%">
          ${ticks.map(
          (index) => `<rect x="${100 / this.ticks * index}%" y="5" width="1" height="100%"></rect>`
        ).join("")}
          <rect x="100%" y="5" width="1" height="100%"></rect>
        </svg>`;
        this.wrapper.insertAdjacentHTML("afterbegin", svg);
      }
      if (circular) {
        range.hidden = true;
        const pointerMove = (event) => this.updateCircle(this.rotate(event.pageX, event.pageY));
        this.setCenter();
        this.output.setAttribute("tabindex", 0);
        this.output.addEventListener("keydown", (event) => {
          switch (event.key) {
            case "ArrowLeft":
            case "ArrowDown":
              event.preventDefault();
              this.range.stepDown();
              this.updateCircle();
              break;
            case "ArrowRight":
            case "ArrowUp":
              event.preventDefault();
              this.range.stepUp();
              this.updateCircle();
              break;
            default:
              break;
          }
        });
        this.output.addEventListener(
          "pointerdown",
          () => this.output.addEventListener("pointermove", pointerMove)
        );
        this.output.addEventListener(
          "pointerup",
          () => this.output.removeEventListener("pointermove", pointerMove)
        );
        range.addEventListener("input", () => this.updateCircle(0));
        this.updateCircle();
      } else {
        range.addEventListener("input", () => this.updateRange());
      }
      range.dispatchEvent(new Event("input"));
    }
    /**
     * @function rotate
     * @param {Number} x
     * @param {Number} y
     * @description  Returns angle from center of circle to current mouse x and y
     */
    rotate(x2, y3) {
      return Math.atan2(y3 - this.center.y, x2 - this.center.x) * 180 / Math.PI;
    }
    /**
     * @function setCenter
     * @description Calculates center of circular range
     */
    setCenter() {
      const rect = this.wrapper.getBoundingClientRect();
      this.center = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
      };
    }
    /**
     * @function updateCircle
     * @param {Number} start
     * @description  Updates CSS Custom Props/coniuc-gradient when circular-input is modified
     */
    updateCircle(start) {
      let angle = start;
      const rad = 360 / (this.max - this.min);
      if (!angle) {
        angle = rad * this.range.valueAsNumber + this.settings.offset;
      }
      let end = angle - this.settings.offset;
      if (end < 0) {
        end += 360;
      }
      const value = Math.ceil(end / rad);
      if (value > this.range.max || value < this.range.min)
        return;
      this.range.value = value;
      this.range.dispatchEvent(new Event("change", { bubbles: true }));
      this.wrapper.dataset.value = this.range.value;
      this.wrapper.style.setProperty("--angle", `${angle}deg`);
      this.wrapper.style.setProperty("--gradient-end", `${end}deg`);
    }
    /**
     * @function updateRange
     * @description Updates CSS Custom Props when range-input is modified
     */
    updateRange() {
      if (this.lower) {
        if (this.lower.valueAsNumber > this.range.valueAsNumber) {
          this.range.value = this.lower.valueAsNumber;
          this.range.dispatchEvent(new Event("input", { bubbles: true }));
          return;
        }
      }
      if (this.upper) {
        if (this.upper.valueAsNumber < this.range.valueAsNumber) {
          this.range.value = this.upper.valueAsNumber;
          this.range.dispatchEvent(new Event("input", { bubbles: true }));
          return;
        }
      }
      const value = (this.range.valueAsNumber - this.min) * this.multiplier;
      this.range.style.setProperty(this.settings.varPercent, `${value}%`);
      this.range.style.setProperty(
        this.settings.varValue,
        `${this.range.valueAsNumber}`
      );
      if (this.lower) {
        this.lower.style.setProperty(this.settings.varPercentUpper, `${value}%`);
      }
      if (this.output) {
        this.output.style.setProperty(this.settings.varUnit, `${value}`);
        this.output.innerText = this.range.value;
      }
    }
  };
  function stringToType(obj) {
    const object = { ...obj };
    Object.keys(object).forEach((key) => {
      if (typeof object[key] === "string" && object[key].charAt(0) === ":") {
        object[key] = JSON.parse(object[key].slice(1));
      }
    });
    return object;
  }
  function uuid() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
      /[018]/g,
      (c5) => (c5 ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c5 / 4).toString(16)
    );
  }

  // src/controls/Gear.jsx
  async function Direction(gear, gears = {}, disabled = false, step = 1) {
    const gearEntries = Object.entries(gears);
    const min = Math.min(...gearEntries.map(([, value]) => value));
    const max = Math.max(...gearEntries.map(([, value]) => value));
    return /* @__PURE__ */ o4(k, { children: [
      /* @__PURE__ */ o4("link", { rel: "stylesheet", href: "/dist/main.css" }),
      /* @__PURE__ */ o4("style", { children: `
        :host {
          display: block;
          margin-bottom: 1rem;
        }

        datalist {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
        
        option {
          padding: 0;
        }
        
        input[type="range"] {
          margin: 0;
        }
        
      ` }),
      /* @__PURE__ */ o4(
        "input",
        {
          type: "range",
          value: gear,
          disabled,
          onChange: (event) => dispatchEvent(
            this,
            new CustomEvent("change", { detail: event.target.valueAsNumber })
          ),
          min,
          max,
          step,
          list: "markers"
        }
      ),
      /* @__PURE__ */ o4("datalist", { id: "markers", children: gearEntries.map(([label, value]) => /* @__PURE__ */ o4("option", { value, children: label })) })
    ] });
  }
  var Gear_default = asWebComponent(Direction, D);

  // src/utils/throttle.js
  function throttle(func, delay) {
    let lastCall = 0;
    return function t4(...args) {
      const now = (/* @__PURE__ */ new Date()).getTime();
      if (now - lastCall < delay) {
        return;
      }
      lastCall = now;
      func(...args);
    };
  }

  // src/controls/VelocityFeature.jsx
  async function* VelocityFeature(feature) {
    this.speed = 0;
    this.direction = 1;
    const changeSpeed = throttle((event) => {
      this.speed = event.detail;
      this.props.feature.writeValue(
        Int8Array.from([this.speed * this.direction])
      );
    }, 100);
    const changeDirection = (event) => {
      this.direction = event.detail;
      this.props.feature.writeValue(
        Int8Array.from([this.speed * this.direction])
      );
    };
    [this.speed, this.direction] = splitValues(await feature.readValue());
    for await (const { props } of this(feature)) {
      props.feature.value.map((value) => {
        [this.speed, this.direction] = splitValues(value);
        return null;
      });
      const directionDisabled = this.speed !== 0;
      yield /* @__PURE__ */ o4("article", { children: [
        /* @__PURE__ */ o4("link", { rel: "stylesheet", href: "/dist/main.css" }),
        /* @__PURE__ */ o4("style", { children: `
            article {
              margin-bottom: 0;
              --pico-block-spacing-vertical: .5rem;
            }        
        ` }),
        /* @__PURE__ */ o4(
          Gear_default,
          {
            gear: this.direction,
            gears: {
              Reverse: -1,
              Forward: 1
            },
            step: 2,
            disabled: directionDisabled,
            onChange: changeDirection
          }
        ),
        /* @__PURE__ */ o4(Throttle_default, { speed: this.speed, onChange: changeSpeed })
      ] });
    }
  }
  var VelocityFeature_default = asWebComponent(VelocityFeature, D);
  function splitValues(value) {
    const velocity = value.getInt8(0);
    const speed = Math.abs(velocity);
    let direction = 1;
    if (velocity < 0) {
      direction = -1;
    }
    return [speed, direction];
  }

  // src/controls/Controls.jsx
  async function Controls(service) {
    const { features } = service;
    const velocity = features.find(
      (feature) => FeatureMap_default[feature.uuid]?.name === "velocity"
    );
    return /* @__PURE__ */ o4("section", { children: [
      /* @__PURE__ */ o4("link", { rel: "stylesheet", href: "/dist/main.css" }),
      /* @__PURE__ */ o4("style", { children: `
          section {
            display: flex;
            flex-direction: column;
            padding-block: .5rem;
            height: 100%;
          }

          #connect {
            margin: auto;
          }

          article {
            flex: 1;
            --pico-block-spacing-vertical: .5rem;
            padding-bottom: 0;
          }

          fieldset {
            margin-bottom: 0;
          }
        ` }),
      /* @__PURE__ */ o4("article", { children: /* @__PURE__ */ o4("fieldset", { children: features.filter((feature) => FeatureMap_default[feature.uuid].label).map((feature) => /* @__PURE__ */ o4(SwitchFeature_default, { feature })) }) }),
      velocity && /* @__PURE__ */ o4(VelocityFeature_default, { feature: velocity })
    ] });
  }
  var Controls_default = asWebComponent(Controls, D);

  // node_modules/multirator/src/Iterator.js
  var Iterator = class _Iterator {
    constructor(iterator) {
      this[Symbol.asyncIterator] = async function* iter() {
        for await (const value of iterator) {
          yield value;
        }
      };
    }
    /* Chainable */
    filter(func) {
      return new _Iterator(filter(this, func));
    }
    map(func) {
      return new _Iterator(map(this, func));
    }
    concat(iterator) {
      return new _Iterator(concat(this, iterator));
    }
    /* Leaf */
    async forEach(func) {
      for await (const value of this) {
        func(value);
      }
    }
    async reduce(func, initValue) {
      let acc = initValue;
      for await (const value of this) {
        if (acc === void 0) {
          acc = value;
        } else {
          acc = func(acc, value);
        }
      }
      return acc;
    }
  };
  async function* filter(iterator, func) {
    for await (const value of iterator) {
      if (func(value))
        yield value;
    }
  }
  async function* map(iterator, func) {
    for await (const value of iterator) {
      yield func(value);
    }
  }
  async function* concat(iterator1, iterator2) {
    for await (const value of iterator1) {
      yield value;
    }
    for await (const value of iterator2) {
      yield value;
    }
  }

  // node_modules/multirator/src/Multirator.js
  var Multirator = class extends Iterator {
    constructor(iterator) {
      super(iterator);
      let done = false;
      let value;
      let resolver;
      let rejector;
      let pending2 = new Promise((resolve, reject) => {
        resolver = resolve;
        rejector = reject;
      });
      (async () => {
        while (!done) {
          try {
            const result = await iterator.next();
            done = result.done;
            value = result.value;
            resolver(result);
          } catch (error) {
            rejector(error);
          } finally {
            pending2 = new Promise((resolve, reject) => {
              resolver = resolve;
              rejector = reject;
            });
          }
        }
      })();
      this[Symbol.asyncIterator] = async function* iter() {
        if (!done && value !== void 0)
          yield value;
        while (!done) {
          await pending2;
          if (!done)
            yield value;
        }
      };
    }
  };

  // src/utils/enqueue.js
  var pending = Promise.resolve();
  function enqueue(func) {
    return pending = run(func);
  }
  async function run(func) {
    try {
      await pending;
    } finally {
      return func();
    }
  }

  // src/services/TrainService.js
  var TRAIN_SERVICE_UUID = "e4580f53-0298-41fa-8210-ce8f8bbe23a3";
  var TrainService = class _TrainService {
    constructor(deviceName, statusHandler = () => {
    }) {
      this.deviceName = deviceName;
      this.statusHandler = statusHandler;
      this.device = void 0;
      this.primaryService = void 0;
      this.featureMap = {};
    }
    static async select(name) {
      _TrainService.selectOpen.value = true;
      try {
        const device = await navigator.bluetooth.requestDevice({
          filters: name ? [{ name }] : [
            { services: [TRAIN_SERVICE_UUID] },
            { services: ["6e400001-b5a3-f393-e0a9-e50e24dcca9e"] }
          ]
        });
        return device;
      } finally {
        _TrainService.selectOpen.value = false;
      }
    }
    static selectOpen = u3(false);
    get isConnected() {
      return this.device?.gatt?.connected ?? false;
    }
    get features() {
      return Object.values(this.featureMap);
    }
    async connect(device) {
      this.device = device;
      console.log("Connecting to device", this.device?.name);
      try {
        await this.device.gatt.connect();
        console.log("Connected to device", this.device?.name);
        this.primaryService = await this.device.gatt.getPrimaryService(
          TRAIN_SERVICE_UUID
        );
        this.device.addEventListener(
          "gattserverdisconnected",
          reConnect.bind(this)
        );
        await loadFeatures.call(this);
        this.statusHandler({
          isConnected: this.isConnected
        });
      } catch (error) {
        console.error("Failed to connect to Device");
        console.error(error.stack ?? error);
        console.log("Retrying in 3secs");
        setTimeout(async () => {
          const newDevice = await _TrainService.select(this.device.name);
          this.connect(newDevice);
        }, 3e3);
      }
    }
    async disconnect() {
      this.device.removeEventListener("gattserverdisconnected", reConnect);
      await this.device.disconnect();
    }
  };
  function reConnect() {
    console.log("Disconnected from device", this.device?.name ?? "Unknown");
    this.connect(this.device);
  }
  async function loadFeatures() {
    const features = await this.primaryService.getCharacteristics();
    for (const feature of features) {
      if (!this.featureMap[feature.uuid]) {
        this.featureMap[feature.uuid] = {
          uuid: feature.uuid
        };
        this.featureMap[feature.uuid].value = new Multirator(
          async function* emit() {
            if (feature.value)
              yield feature.value;
            while (true) {
              yield new Promise((resolve) => {
                this.featureMap[feature.uuid].resolver = resolve;
              });
            }
          }.call(this)
        );
      }
      this.featureMap[feature.uuid].writeValue = (value) => enqueue(() => feature.writeValue.call(feature, value));
      this.featureMap[feature.uuid].readValue = () => enqueue(() => feature.readValue.call(feature));
      feature.addEventListener("characteristicvaluechanged", async () => {
        this.featureMap[feature.uuid]?.resolver(feature.value);
      });
      feature.startNotifications();
      this.featureMap[feature.uuid].readValue().then(() => {
        this.featureMap[feature.uuid]?.resolver(feature.value);
      });
    }
  }

  // src/controls/Connect.jsx
  async function Connect(service) {
    const connect = async () => {
      disableScreenLock();
      const device = await TrainService.select();
      service.connect(device);
    };
    return /* @__PURE__ */ o4("section", { children: [
      /* @__PURE__ */ o4("link", { rel: "stylesheet", href: "/dist/main.css" }),
      /* @__PURE__ */ o4("style", { children: `
          section {
            display: flex;
            height: 100%;
          }

          button {
            margin: auto;
          }
        ` }),
      /* @__PURE__ */ o4("button", { onClick: connect, children: "Connect" })
    ] });
  }
  var Connect_default = asWebComponent(Connect, D);

  // src/RemoteControl.jsx
  async function* RemoteControl() {
    const knownDevices = ["Star", "Jessie"];
    const deviceToServiceMap = Object.fromEntries(
      knownDevices.map((name) => [
        name,
        new TrainService(name, (status) => {
          this.status = status;
        })
      ])
    );
    [this.currentDeviceName = ""] = knownDevices;
    this.selectOpen = false;
    const changeDevice = (name) => {
      this.currentDeviceName = name;
    };
    b3(() => {
      this.selectOpen = TrainService.selectOpen.value;
    });
    for await (const { currentDeviceName, selectOpen } of this) {
      const service = deviceToServiceMap[currentDeviceName];
      yield /* @__PURE__ */ o4(k, { children: [
        /* @__PURE__ */ o4("link", { rel: "stylesheet", href: "/dist/main.css" }),
        /* @__PURE__ */ o4("style", { children: `
           :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            ${selectOpen ? "opacity: 10%; pointer-events: none;" : ""}
           }

           main.container-fluid {
            height: 100%;
            display: flex;
            flex-direction: column;
            padding-inline: .5rem;
           }

           main :nth-child(2) {
            flex: 1;
           }
          ` }),
        /* @__PURE__ */ o4(Header_default, {}),
        /* @__PURE__ */ o4("main", { class: "container-fluid", children: [
          /* @__PURE__ */ o4(
            DeviceSelector_default,
            {
              devices: knownDevices,
              currentDeviceName,
              onChange: (event) => changeDevice(event.detail.name)
            }
          ),
          service.isConnected ? /* @__PURE__ */ o4(Controls_default, { service }) : /* @__PURE__ */ o4(Connect_default, { service })
        ] })
      ] });
    }
  }
  var RemoteControl_default = asWebComponent(RemoteControl, D);

  // src/main.js
  if (window.location.hostname === "localhost") {
    new EventSource("/esbuild").addEventListener(
      "change",
      () => window.location.reload()
    );
  }
})();

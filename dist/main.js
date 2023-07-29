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
  function v(n2, l2) {
    for (var u2 in l2)
      n2[u2] = l2[u2];
    return n2;
  }
  function p(n2) {
    var l2 = n2.parentNode;
    l2 && l2.removeChild(n2);
  }
  function y(l2, u2, t2) {
    var i2, o3, r2, f2 = {};
    for (r2 in u2)
      "key" == r2 ? i2 = u2[r2] : "ref" == r2 ? o3 = u2[r2] : f2[r2] = u2[r2];
    if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n.call(arguments, 2) : t2), "function" == typeof l2 && null != l2.defaultProps)
      for (r2 in l2.defaultProps)
        void 0 === f2[r2] && (f2[r2] = l2.defaultProps[r2]);
    return d(l2, f2, i2, o3, null);
  }
  function d(n2, t2, i2, o3, r2) {
    var f2 = { type: n2, props: t2, key: i2, ref: o3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r2 ? ++u : r2 };
    return null == r2 && null != l.vnode && l.vnode(f2), f2;
  }
  function k(n2) {
    return n2.children;
  }
  function b(n2, l2) {
    this.props = n2, this.context = l2;
  }
  function g(n2, l2) {
    if (null == l2)
      return n2.__ ? g(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for (var u2; l2 < n2.__k.length; l2++)
      if (null != (u2 = n2.__k[l2]) && null != u2.__e)
        return u2.__e;
    return "function" == typeof n2.type ? g(n2) : null;
  }
  function m(n2) {
    var l2, u2;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
        if (null != (u2 = n2.__k[l2]) && null != u2.__e) {
          n2.__e = n2.__c.base = u2.__e;
          break;
        }
      return m(n2);
    }
  }
  function w(n2) {
    (!n2.__d && (n2.__d = true) && i.push(n2) && !x.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(x);
  }
  function x() {
    var n2, l2, u2, t2, o3, r2, e2, c2, s2;
    for (i.sort(f); n2 = i.shift(); )
      n2.__d && (l2 = i.length, t2 = void 0, o3 = void 0, r2 = void 0, c2 = (e2 = (u2 = n2).__v).__e, (s2 = u2.__P) && (t2 = [], o3 = [], (r2 = v({}, e2)).__v = e2.__v + 1, L(s2, e2, r2, u2.__n, void 0 !== s2.ownerSVGElement, null != e2.__h ? [c2] : null, t2, null == c2 ? g(e2) : c2, e2.__h, o3), M(t2, e2, o3), e2.__e != c2 && m(e2)), i.length > l2 && i.sort(f));
    x.__r = 0;
  }
  function P(n2, l2, u2, t2, i2, o3, r2, f2, e2, a2, v2) {
    var p2, y2, _2, b2, g2, m2, w2, x2, P2, S, H2 = 0, I2 = t2 && t2.__k || s, T2 = I2.length, j2 = T2, z2 = l2.length;
    for (u2.__k = [], p2 = 0; p2 < z2; p2++)
      null != (b2 = u2.__k[p2] = null == (b2 = l2[p2]) || "boolean" == typeof b2 || "function" == typeof b2 ? null : "string" == typeof b2 || "number" == typeof b2 || "bigint" == typeof b2 ? d(null, b2, null, null, b2) : h(b2) ? d(k, { children: b2 }, null, null, null) : b2.__b > 0 ? d(b2.type, b2.props, b2.key, b2.ref ? b2.ref : null, b2.__v) : b2) && (b2.__ = u2, b2.__b = u2.__b + 1, -1 === (x2 = A(b2, I2, w2 = p2 + H2, j2)) ? _2 = c : (_2 = I2[x2] || c, I2[x2] = void 0, j2--), L(n2, b2, _2, i2, o3, r2, f2, e2, a2, v2), g2 = b2.__e, (y2 = b2.ref) && _2.ref != y2 && (_2.ref && O(_2.ref, null, b2), v2.push(y2, b2.__c || g2, b2)), null != g2 && (null == m2 && (m2 = g2), S = !(P2 = _2 === c || null === _2.__v) && x2 === w2, P2 ? -1 == x2 && H2-- : x2 !== w2 && (x2 === w2 + 1 ? (H2++, S = true) : x2 > w2 ? j2 > z2 - w2 ? (H2 += x2 - w2, S = true) : H2-- : H2 = x2 < w2 && x2 == w2 - 1 ? x2 - w2 : 0), w2 = p2 + H2, S = S || x2 == p2 && !P2, "function" != typeof b2.type || x2 === w2 && _2.__k !== b2.__k ? "function" == typeof b2.type || S ? void 0 !== b2.__d ? (e2 = b2.__d, b2.__d = void 0) : e2 = g2.nextSibling : e2 = $(n2, g2, e2) : e2 = C(b2, e2, n2), "function" == typeof u2.type && (u2.__d = e2)));
    for (u2.__e = m2, p2 = T2; p2--; )
      null != I2[p2] && ("function" == typeof u2.type && null != I2[p2].__e && I2[p2].__e == u2.__d && (u2.__d = I2[p2].__e.nextSibling), q(I2[p2], I2[p2]));
  }
  function C(n2, l2, u2) {
    for (var t2, i2 = n2.__k, o3 = 0; i2 && o3 < i2.length; o3++)
      (t2 = i2[o3]) && (t2.__ = n2, l2 = "function" == typeof t2.type ? C(t2, l2, u2) : $(u2, t2.__e, l2));
    return l2;
  }
  function $(n2, l2, u2) {
    return null == u2 || u2.parentNode !== n2 ? n2.insertBefore(l2, null) : l2 == u2 && null != l2.parentNode || n2.insertBefore(l2, u2), l2.nextSibling;
  }
  function A(n2, l2, u2, t2) {
    var i2 = n2.key, o3 = n2.type, r2 = u2 - 1, f2 = u2 + 1, e2 = l2[u2];
    if (null === e2 || e2 && i2 == e2.key && o3 === e2.type)
      return u2;
    if (t2 > (null != e2 ? 1 : 0))
      for (; r2 >= 0 || f2 < l2.length; ) {
        if (r2 >= 0) {
          if ((e2 = l2[r2]) && i2 == e2.key && o3 === e2.type)
            return r2;
          r2--;
        }
        if (f2 < l2.length) {
          if ((e2 = l2[f2]) && i2 == e2.key && o3 === e2.type)
            return f2;
          f2++;
        }
      }
    return -1;
  }
  function H(n2, l2, u2, t2, i2) {
    var o3;
    for (o3 in u2)
      "children" === o3 || "key" === o3 || o3 in l2 || T(n2, o3, null, u2[o3], t2);
    for (o3 in l2)
      i2 && "function" != typeof l2[o3] || "children" === o3 || "key" === o3 || "value" === o3 || "checked" === o3 || u2[o3] === l2[o3] || T(n2, o3, l2[o3], u2[o3], t2);
  }
  function I(n2, l2, u2) {
    "-" === l2[0] ? n2.setProperty(l2, null == u2 ? "" : u2) : n2[l2] = null == u2 ? "" : "number" != typeof u2 || a.test(l2) ? u2 : u2 + "px";
  }
  function T(n2, l2, u2, t2, i2) {
    var o3;
    n:
      if ("style" === l2)
        if ("string" == typeof u2)
          n2.style.cssText = u2;
        else {
          if ("string" == typeof t2 && (n2.style.cssText = t2 = ""), t2)
            for (l2 in t2)
              u2 && l2 in u2 || I(n2.style, l2, "");
          if (u2)
            for (l2 in u2)
              t2 && u2[l2] === t2[l2] || I(n2.style, l2, u2[l2]);
        }
      else if ("o" === l2[0] && "n" === l2[1])
        o3 = l2 !== (l2 = l2.replace(/Capture$/, "")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + o3] = u2, u2 ? t2 || n2.addEventListener(l2, o3 ? z : j, o3) : n2.removeEventListener(l2, o3 ? z : j, o3);
      else if ("dangerouslySetInnerHTML" !== l2) {
        if (i2)
          l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" !== l2 && "height" !== l2 && "href" !== l2 && "list" !== l2 && "form" !== l2 && "tabIndex" !== l2 && "download" !== l2 && "rowSpan" !== l2 && "colSpan" !== l2 && l2 in n2)
          try {
            n2[l2] = null == u2 ? "" : u2;
            break n;
          } catch (n3) {
          }
        "function" == typeof u2 || (null == u2 || false === u2 && "-" !== l2[4] ? n2.removeAttribute(l2) : n2.setAttribute(l2, u2));
      }
  }
  function j(n2) {
    return this.l[n2.type + false](l.event ? l.event(n2) : n2);
  }
  function z(n2) {
    return this.l[n2.type + true](l.event ? l.event(n2) : n2);
  }
  function L(n2, u2, t2, i2, o3, r2, f2, e2, c2, s2) {
    var a2, p2, y2, d2, _2, g2, m2, w2, x2, C2, S, $2, A2, H2, I2, T2 = u2.type;
    if (void 0 !== u2.constructor)
      return null;
    null != t2.__h && (c2 = t2.__h, e2 = u2.__e = t2.__e, u2.__h = null, r2 = [e2]), (a2 = l.__b) && a2(u2);
    try {
      n:
        if ("function" == typeof T2) {
          if (w2 = u2.props, x2 = (a2 = T2.contextType) && i2[a2.__c], C2 = a2 ? x2 ? x2.props.value : a2.__ : i2, t2.__c ? m2 = (p2 = u2.__c = t2.__c).__ = p2.__E : ("prototype" in T2 && T2.prototype.render ? u2.__c = p2 = new T2(w2, C2) : (u2.__c = p2 = new b(w2, C2), p2.constructor = T2, p2.render = B), x2 && x2.sub(p2), p2.props = w2, p2.state || (p2.state = {}), p2.context = C2, p2.__n = i2, y2 = p2.__d = true, p2.__h = [], p2._sb = []), null == p2.__s && (p2.__s = p2.state), null != T2.getDerivedStateFromProps && (p2.__s == p2.state && (p2.__s = v({}, p2.__s)), v(p2.__s, T2.getDerivedStateFromProps(w2, p2.__s))), d2 = p2.props, _2 = p2.state, p2.__v = u2, y2)
            null == T2.getDerivedStateFromProps && null != p2.componentWillMount && p2.componentWillMount(), null != p2.componentDidMount && p2.__h.push(p2.componentDidMount);
          else {
            if (null == T2.getDerivedStateFromProps && w2 !== d2 && null != p2.componentWillReceiveProps && p2.componentWillReceiveProps(w2, C2), !p2.__e && (null != p2.shouldComponentUpdate && false === p2.shouldComponentUpdate(w2, p2.__s, C2) || u2.__v === t2.__v)) {
              for (u2.__v !== t2.__v && (p2.props = w2, p2.state = p2.__s, p2.__d = false), u2.__e = t2.__e, u2.__k = t2.__k, u2.__k.forEach(function(n3) {
                n3 && (n3.__ = u2);
              }), S = 0; S < p2._sb.length; S++)
                p2.__h.push(p2._sb[S]);
              p2._sb = [], p2.__h.length && f2.push(p2);
              break n;
            }
            null != p2.componentWillUpdate && p2.componentWillUpdate(w2, p2.__s, C2), null != p2.componentDidUpdate && p2.__h.push(function() {
              p2.componentDidUpdate(d2, _2, g2);
            });
          }
          if (p2.context = C2, p2.props = w2, p2.__P = n2, p2.__e = false, $2 = l.__r, A2 = 0, "prototype" in T2 && T2.prototype.render) {
            for (p2.state = p2.__s, p2.__d = false, $2 && $2(u2), a2 = p2.render(p2.props, p2.state, p2.context), H2 = 0; H2 < p2._sb.length; H2++)
              p2.__h.push(p2._sb[H2]);
            p2._sb = [];
          } else
            do {
              p2.__d = false, $2 && $2(u2), a2 = p2.render(p2.props, p2.state, p2.context), p2.state = p2.__s;
            } while (p2.__d && ++A2 < 25);
          p2.state = p2.__s, null != p2.getChildContext && (i2 = v(v({}, i2), p2.getChildContext())), y2 || null == p2.getSnapshotBeforeUpdate || (g2 = p2.getSnapshotBeforeUpdate(d2, _2)), P(n2, h(I2 = null != a2 && a2.type === k && null == a2.key ? a2.props.children : a2) ? I2 : [I2], u2, t2, i2, o3, r2, f2, e2, c2, s2), p2.base = u2.__e, u2.__h = null, p2.__h.length && f2.push(p2), m2 && (p2.__E = p2.__ = null);
        } else
          null == r2 && u2.__v === t2.__v ? (u2.__k = t2.__k, u2.__e = t2.__e) : u2.__e = N(t2.__e, u2, t2, i2, o3, r2, f2, c2, s2);
      (a2 = l.diffed) && a2(u2);
    } catch (n3) {
      u2.__v = null, (c2 || null != r2) && (u2.__e = e2, u2.__h = !!c2, r2[r2.indexOf(e2)] = null), l.__e(n3, u2, t2);
    }
  }
  function M(n2, u2, t2) {
    for (var i2 = 0; i2 < t2.length; i2++)
      O(t2[i2], t2[++i2], t2[++i2]);
    l.__c && l.__c(u2, n2), n2.some(function(u3) {
      try {
        n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
          n3.call(u3);
        });
      } catch (n3) {
        l.__e(n3, u3.__v);
      }
    });
  }
  function N(l2, u2, t2, i2, o3, r2, f2, e2, s2) {
    var a2, v2, y2, d2 = t2.props, _2 = u2.props, k2 = u2.type, b2 = 0;
    if ("svg" === k2 && (o3 = true), null != r2) {
      for (; b2 < r2.length; b2++)
        if ((a2 = r2[b2]) && "setAttribute" in a2 == !!k2 && (k2 ? a2.localName === k2 : 3 === a2.nodeType)) {
          l2 = a2, r2[b2] = null;
          break;
        }
    }
    if (null == l2) {
      if (null === k2)
        return document.createTextNode(_2);
      l2 = o3 ? document.createElementNS("http://www.w3.org/2000/svg", k2) : document.createElement(k2, _2.is && _2), r2 = null, e2 = false;
    }
    if (null === k2)
      d2 === _2 || e2 && l2.data === _2 || (l2.data = _2);
    else {
      if (r2 = r2 && n.call(l2.childNodes), v2 = (d2 = t2.props || c).dangerouslySetInnerHTML, y2 = _2.dangerouslySetInnerHTML, !e2) {
        if (null != r2)
          for (d2 = {}, b2 = 0; b2 < l2.attributes.length; b2++)
            d2[l2.attributes[b2].name] = l2.attributes[b2].value;
        (y2 || v2) && (y2 && (v2 && y2.__html == v2.__html || y2.__html === l2.innerHTML) || (l2.innerHTML = y2 && y2.__html || ""));
      }
      if (H(l2, _2, d2, o3, e2), y2)
        u2.__k = [];
      else if (P(l2, h(b2 = u2.props.children) ? b2 : [b2], u2, t2, i2, o3 && "foreignObject" !== k2, r2, f2, r2 ? r2[0] : t2.__k && g(t2, 0), e2, s2), null != r2)
        for (b2 = r2.length; b2--; )
          null != r2[b2] && p(r2[b2]);
      e2 || ("value" in _2 && void 0 !== (b2 = _2.value) && (b2 !== l2.value || "progress" === k2 && !b2 || "option" === k2 && b2 !== d2.value) && T(l2, "value", b2, d2.value, false), "checked" in _2 && void 0 !== (b2 = _2.checked) && b2 !== l2.checked && T(l2, "checked", b2, d2.checked, false));
    }
    return l2;
  }
  function O(n2, u2, t2) {
    try {
      "function" == typeof n2 ? n2(u2) : n2.current = u2;
    } catch (n3) {
      l.__e(n3, t2);
    }
  }
  function q(n2, u2, t2) {
    var i2, o3;
    if (l.unmount && l.unmount(n2), (i2 = n2.ref) && (i2.current && i2.current !== n2.__e || O(i2, null, u2)), null != (i2 = n2.__c)) {
      if (i2.componentWillUnmount)
        try {
          i2.componentWillUnmount();
        } catch (n3) {
          l.__e(n3, u2);
        }
      i2.base = i2.__P = null, n2.__c = void 0;
    }
    if (i2 = n2.__k)
      for (o3 = 0; o3 < i2.length; o3++)
        i2[o3] && q(i2[o3], u2, t2 || "function" != typeof n2.type);
    t2 || null == n2.__e || p(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
  }
  function B(n2, l2, u2) {
    return this.constructor(n2, u2);
  }
  function D(u2, t2, i2) {
    var o3, r2, f2, e2;
    l.__ && l.__(u2, t2), r2 = (o3 = "function" == typeof i2) ? null : i2 && i2.__k || t2.__k, f2 = [], e2 = [], L(t2, u2 = (!o3 && i2 || t2).__k = y(k, null, [u2]), r2 || c, c, void 0 !== t2.ownerSVGElement, !o3 && i2 ? [i2] : r2 ? null : t2.firstChild ? n.call(t2.childNodes) : null, f2, !o3 && i2 ? i2 : r2 ? r2.__e : t2.firstChild, o3, e2), M(f2, u2, e2);
  }
  n = s.slice, l = { __e: function(n2, l2, u2, t2) {
    for (var i2, o3, r2; l2 = l2.__; )
      if ((i2 = l2.__c) && !i2.__)
        try {
          if ((o3 = i2.constructor) && null != o3.getDerivedStateFromError && (i2.setState(o3.getDerivedStateFromError(n2)), r2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), r2 = i2.__d), r2)
            return i2.__E = i2;
        } catch (l3) {
          n2 = l3;
        }
    throw n2;
  } }, u = 0, t = function(n2) {
    return null != n2 && void 0 === n2.constructor;
  }, b.prototype.setState = function(n2, l2) {
    var u2;
    u2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = v({}, this.state), "function" == typeof n2 && (n2 = n2(v({}, u2), this.props)), n2 && v(u2, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), w(this));
  }, b.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), w(this));
  }, b.prototype.render = k, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n2, l2) {
    return n2.__v.__b - l2.__v.__b;
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
    __assign = Object.assign || function __assign2(t2) {
      for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
        s2 = arguments[i2];
        for (var p2 in s2)
          if (Object.prototype.hasOwnProperty.call(s2, p2))
            t2[p2] = s2[p2];
      }
      return t2;
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
    var i2 = 0, tmp = len || 11;
    if (!BUFFER || IDX + tmp > SIZE * 2) {
      for (BUFFER = "", IDX = 0; i2 < SIZE; i2++) {
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
      attributeChangedCallback(attr, _2, newValue) {
        const arg = attributes.get(attr);
        this[arg] = newValue;
      }
    }
    async function renderLoop() {
      const { componentFunc } = privateProps.get(this);
      if (!isGenerator) {
        for await (const _2 of privateProps.get(this).self) {
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

  // node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
  var _ = 0;
  function o2(o3, e2, n2, t2, f2, l2) {
    var s2, u2, a2 = {};
    for (u2 in e2)
      "ref" == u2 ? s2 = e2[u2] : a2[u2] = e2[u2];
    var i2 = { type: o3, props: a2, key: n2, ref: s2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_, __source: f2, __self: l2 };
    if ("function" == typeof o3 && (s2 = o3.defaultProps))
      for (u2 in s2)
        void 0 === a2[u2] && (a2[u2] = s2[u2]);
    return l.vnode && l.vnode(i2), i2;
  }

  // src/components/WakeLock.jsx
  async function* WakeLock() {
    this.wakeLockDisabled = false;
    const checkWakeLock = async () => {
      try {
        await navigator.wakeLock.request("screen");
        this.wakeLockDisabled = false;
      } catch (error) {
        this.wakeLockDisabled = true;
      }
    };
    setInterval(checkWakeLock, 3e4);
    checkWakeLock();
    for await (const { wakeLockDisabled } of this) {
      yield /* @__PURE__ */ o2(k, { children: [
        /* @__PURE__ */ o2("link", { rel: "stylesheet", href: "/dist/main.css" }),
        /* @__PURE__ */ o2("style", { children: `
          :host {
             display: grid;
          }
  
          span {
            grid-column: 1;
            grid-row: 1;
          }
        ` }),
        /* @__PURE__ */ o2("span", { children: "\u{1F505}" }),
        wakeLockDisabled && /* @__PURE__ */ o2("span", { children: "\u{1F6AB}" })
      ] });
    }
  }
  var WakeLock_default = asWebComponent(WakeLock, D);

  // src/components/Header.jsx
  function Header() {
    return /* @__PURE__ */ o2(k, { children: [
      /* @__PURE__ */ o2("link", { rel: "stylesheet", href: "/dist/main.css" }),
      /* @__PURE__ */ o2("style", { children: `
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
      /* @__PURE__ */ o2("header", { children: [
        /* @__PURE__ */ o2("h1", { children: "Remote Control" }),
        /* @__PURE__ */ o2(WakeLock_default, {})
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
    return /* @__PURE__ */ o2(k, { children: [
      /* @__PURE__ */ o2("link", { rel: "stylesheet", href: "/dist/main.css" }),
      /* @__PURE__ */ o2("style", { children: `
          @namespace css url(http://www.w3.org/2000/css);
  
          :host {
             display: block;
          }
  
          nav {
            border-bottom: 2px solid var(--pico-primary-hover-background);;
            width: 100%;
            margin-top: var(--pico-spacing);
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
      /* @__PURE__ */ o2("nav", { children: /* @__PURE__ */ o2("div", { role: "group", children: devices.map((name) => {
        if (name === currentDeviceName) {
          return /* @__PURE__ */ o2("button", { "aria-current": "true", children: name });
        }
        return /* @__PURE__ */ o2("button", { class: "secondary", onClick: () => select(name), children: name });
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
      yield /* @__PURE__ */ o2(k, { children: [
        /* @__PURE__ */ o2("link", { rel: "stylesheet", href: "/dist/main.css" }),
        /* @__PURE__ */ o2("label", { children: [
          /* @__PURE__ */ o2(
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
    yield /* @__PURE__ */ o2(k, { children: [
      /* @__PURE__ */ o2("link", { rel: "stylesheet", href: "/dist/main.css" }),
      /* @__PURE__ */ o2("style", { children: `
        :host {
          display: block;
          margin-block: 2rem;
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
          --circle-bgc: var(--pico-background-color);
          --circle-size: calc(100vw - 70px);
          --track-bgc: hsl(219, 20%, 85%);
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
          align-items: center;
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
      /* @__PURE__ */ o2(
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
        range.addEventListener("input", (event) => this.updateCircle(0));
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
    rotate(x2, y2) {
      return Math.atan2(y2 - this.center.y, x2 - this.center.x) * 180 / Math.PI;
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
      (c2) => (c2 ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c2 / 4).toString(16)
    );
  }

  // src/controls/Direction.jsx
  async function Direction(direction, disabled) {
    return /* @__PURE__ */ o2(k, { children: [
      /* @__PURE__ */ o2("link", { rel: "stylesheet", href: "/dist/main.css" }),
      /* @__PURE__ */ o2("style", { children: `
        :host {
          display: block;
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
      /* @__PURE__ */ o2(
        "input",
        {
          type: "range",
          value: direction,
          disabled,
          onChange: (event) => dispatchEvent(
            this,
            new CustomEvent("change", { detail: event.target.valueAsNumber })
          ),
          min: "-1",
          max: "1",
          step: "2",
          list: "markers"
        }
      ),
      /* @__PURE__ */ o2("datalist", { id: "markers", children: [
        /* @__PURE__ */ o2("option", { value: "-1", children: "Reverse" }),
        /* @__PURE__ */ o2("option", { value: "1", children: "Forward" })
      ] })
    ] });
  }
  var Direction_default = asWebComponent(Direction, D);

  // src/controls/VelocityFeature.jsx
  var template2 = document.createElement("template");
  template2.innerHTML = `
  <label id="label" for="switch"></label>
  <input id="switch" type="checkbox" />
`;
  async function* VelocityFeature(feature) {
    this.speed = 0;
    this.direction = 1;
    const changeSpeed = (event) => {
      this.speed = event.detail;
      this.props.feature.writeValue(
        Int8Array.from([this.speed * this.direction])
      );
    };
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
      yield /* @__PURE__ */ o2("article", { children: [
        /* @__PURE__ */ o2("link", { rel: "stylesheet", href: "/dist/main.css" }),
        /* @__PURE__ */ o2(
          Direction_default,
          {
            direction: this.direction,
            disabled: directionDisabled,
            onChange: changeDirection
          }
        ),
        /* @__PURE__ */ o2(Throttle_default, { speed: this.speed, onChange: changeSpeed })
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
    return /* @__PURE__ */ o2("section", { children: [
      /* @__PURE__ */ o2("link", { rel: "stylesheet", href: "/dist/main.css" }),
      /* @__PURE__ */ o2("style", { children: `
          section {
            display: flex;
            flex-direction: column;
            height: calc(100vh - 6rem);
            margin-top: 1rem;
          }

          #top {
            flex: 2
          }

          #connect {
            margin: auto;
          }

          article {
            --pico-block-spacing-vertical: var(--pico-spacing);
          }
        ` }),
      /* @__PURE__ */ o2("article", { id: "top", children: /* @__PURE__ */ o2("fieldset", { children: features.filter((feature) => FeatureMap_default[feature.uuid].label).map((feature) => /* @__PURE__ */ o2(SwitchFeature_default, { feature })) }) }),
      velocity && /* @__PURE__ */ o2(VelocityFeature_default, { feature: velocity })
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
  var TrainService = class {
    constructor(deviceName, statusHandler = () => {
    }) {
      this.deviceName = deviceName;
      this.statusHandler = statusHandler;
      this.device = void 0;
      this.primaryService = void 0;
      this.featureMap = {};
    }
    static async select(name) {
      const device = await navigator.bluetooth.requestDevice({
        filters: name ? [{ name }] : [
          { services: [TRAIN_SERVICE_UUID] },
          { services: ["6e400001-b5a3-f393-e0a9-e50e24dcca9e"] }
        ]
      });
      return device;
    }
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
          const newDevice = await navigator.bluetooth.requestDevice({
            filters: [{ name: this.device.name }]
          });
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
      const device = await TrainService.select();
      service.connect(device);
    };
    return /* @__PURE__ */ o2("section", { children: [
      /* @__PURE__ */ o2("link", { rel: "stylesheet", href: "/dist/main.css" }),
      /* @__PURE__ */ o2("style", { children: `
          section {
            display: flex;
            flex-direction: column;
            height: calc(100vh - 5rem);
            margin-top: 1rem;
          }

          section div {
            flex: 2
          }

          button {
            margin: auto;
          }
        ` }),
      /* @__PURE__ */ o2("button", { onClick: connect, children: "Connect" })
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
    const changeDevice = (name) => {
      this.currentDeviceName = name;
    };
    for await (const { currentDeviceName } of this) {
      const service = deviceToServiceMap[currentDeviceName];
      yield /* @__PURE__ */ o2(k, { children: [
        /* @__PURE__ */ o2("link", { rel: "stylesheet", href: "/dist/main.css" }),
        /* @__PURE__ */ o2(Header_default, {}),
        /* @__PURE__ */ o2("main", { class: "container-fluid", children: [
          /* @__PURE__ */ o2(
            DeviceSelector_default,
            {
              devices: knownDevices,
              currentDeviceName,
              onChange: (event) => changeDevice(event.detail.name)
            }
          ),
          service.isConnected ? /* @__PURE__ */ o2(Controls_default, { service }) : /* @__PURE__ */ o2(Connect_default, { service })
        ] })
      ] });
    }
  }
  var RemoteControl_default = asWebComponent(RemoteControl, D);

  // src/main.js
  new EventSource("/esbuild").addEventListener(
    "change",
    () => window.location.reload()
  );
})();

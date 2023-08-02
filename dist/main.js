(()=>{var ae,h,He,Ht,I,ze,We,ve,Wt,H={},$e=[],$t=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,me=Array.isArray;function N(t,e){for(var r in e)t[r]=e[r];return t}function Be(t){var e=t.parentNode;e&&e.removeChild(t)}function Bt(t,e,r){var n,o,i,a={};for(i in e)i=="key"?n=e[i]:i=="ref"?o=e[i]:a[i]=e[i];if(arguments.length>2&&(a.children=arguments.length>3?ae.call(arguments,2):r),typeof t=="function"&&t.defaultProps!=null)for(i in t.defaultProps)a[i]===void 0&&(a[i]=t.defaultProps[i]);return ne(t,a,n,o,null)}function ne(t,e,r,n,o){var i={type:t,props:e,key:r,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o??++He};return o==null&&h.vnode!=null&&h.vnode(i),i}function k(t){return t.children}function W(t,e){this.props=t,this.context=e}function ie(t,e){if(e==null)return t.__?ie(t.__,t.__.__k.indexOf(t)+1):null;for(var r;e<t.__k.length;e++)if((r=t.__k[e])!=null&&r.__e!=null)return r.__e;return typeof t.type=="function"?ie(t):null}function qe(t){var e,r;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((r=t.__k[e])!=null&&r.__e!=null){t.__e=t.__c.base=r.__e;break}return qe(t)}}function Ue(t){(!t.__d&&(t.__d=!0)&&I.push(t)&&!oe.__r++||ze!==h.debounceRendering)&&((ze=h.debounceRendering)||We)(oe)}function oe(){var t,e,r,n,o,i,a,c,l;for(I.sort(ve);t=I.shift();)t.__d&&(e=I.length,n=void 0,o=void 0,i=void 0,c=(a=(r=t).__v).__e,(l=r.__P)&&(n=[],o=[],(i=N({},a)).__v=a.__v+1,ge(l,a,i,r.__n,l.ownerSVGElement!==void 0,a.__h!=null?[c]:null,n,c??ie(a),a.__h,o),Je(n,a,o),a.__e!=c&&qe(a)),I.length>e&&I.sort(ve));oe.__r=0}function Ge(t,e,r,n,o,i,a,c,l,p,d){var s,b,m,f,_,O,v,g,D,T,S=0,A=n&&n.__k||$e,U=A.length,F=U,E=e.length;for(r.__k=[],s=0;s<E;s++)(f=r.__k[s]=(f=e[s])==null||typeof f=="boolean"||typeof f=="function"?null:typeof f=="string"||typeof f=="number"||typeof f=="bigint"?ne(null,f,null,null,f):me(f)?ne(k,{children:f},null,null,null):f.__b>0?ne(f.type,f.props,f.key,f.ref?f.ref:null,f.__v):f)!=null&&(f.__=r,f.__b=r.__b+1,(g=qt(f,A,v=s+S,F))===-1?m=H:(m=A[g]||H,A[g]=void 0,F--),ge(t,f,m,o,i,a,c,l,p,d),_=f.__e,(b=f.ref)&&m.ref!=b&&(m.ref&&be(m.ref,null,f),d.push(b,f.__c||_,f)),_!=null&&(O==null&&(O=_),T=!(D=m===H||m.__v===null)&&g===v,D?g==-1&&S--:g!==v&&(g===v+1?(S++,T=!0):g>v?F>E-v?(S+=g-v,T=!0):S--:S=g<v&&g==v-1?g-v:0),v=s+S,T=T||g==s&&!D,typeof f.type!="function"||g===v&&m.__k!==f.__k?typeof f.type=="function"||T?f.__d!==void 0?(l=f.__d,f.__d=void 0):l=_.nextSibling:l=Ze(t,_,l):l=Xe(f,l,t),typeof r.type=="function"&&(r.__d=l)));for(r.__e=O,s=U;s--;)A[s]!=null&&(typeof r.type=="function"&&A[s].__e!=null&&A[s].__e==r.__d&&(r.__d=A[s].__e.nextSibling),Ke(A[s],A[s]))}function Xe(t,e,r){for(var n,o=t.__k,i=0;o&&i<o.length;i++)(n=o[i])&&(n.__=t,e=typeof n.type=="function"?Xe(n,e,r):Ze(r,n.__e,e));return e}function Ze(t,e,r){return r==null||r.parentNode!==t?t.insertBefore(e,null):e==r&&e.parentNode!=null||t.insertBefore(e,r),e.nextSibling}function qt(t,e,r,n){var o=t.key,i=t.type,a=r-1,c=r+1,l=e[r];if(l===null||l&&o==l.key&&i===l.type)return r;if(n>(l!=null?1:0))for(;a>=0||c<e.length;){if(a>=0){if((l=e[a])&&o==l.key&&i===l.type)return a;a--}if(c<e.length){if((l=e[c])&&o==l.key&&i===l.type)return c;c++}}return-1}function Gt(t,e,r,n,o){var i;for(i in r)i==="children"||i==="key"||i in e||se(t,i,null,r[i],n);for(i in e)o&&typeof e[i]!="function"||i==="children"||i==="key"||i==="value"||i==="checked"||r[i]===e[i]||se(t,i,e[i],r[i],n)}function Fe(t,e,r){e[0]==="-"?t.setProperty(e,r??""):t[e]=r==null?"":typeof r!="number"||$t.test(e)?r:r+"px"}function se(t,e,r,n,o){var i;e:if(e==="style")if(typeof r=="string")t.style.cssText=r;else{if(typeof n=="string"&&(t.style.cssText=n=""),n)for(e in n)r&&e in r||Fe(t.style,e,"");if(r)for(e in r)n&&r[e]===n[e]||Fe(t.style,e,r[e])}else if(e[0]==="o"&&e[1]==="n")i=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+i]=r,r?n||t.addEventListener(e,i?Ve:Ie,i):t.removeEventListener(e,i?Ve:Ie,i);else if(e!=="dangerouslySetInnerHTML"){if(o)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e!=="rowSpan"&&e!=="colSpan"&&e in t)try{t[e]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,r))}}function Ie(t){return this.l[t.type+!1](h.event?h.event(t):t)}function Ve(t){return this.l[t.type+!0](h.event?h.event(t):t)}function ge(t,e,r,n,o,i,a,c,l,p){var d,s,b,m,f,_,O,v,g,D,T,S,A,U,F,E=e.type;if(e.constructor!==void 0)return null;r.__h!=null&&(l=r.__h,c=e.__e=r.__e,e.__h=null,i=[c]),(d=h.__b)&&d(e);try{e:if(typeof E=="function"){if(v=e.props,g=(d=E.contextType)&&n[d.__c],D=d?g?g.props.value:d.__:n,r.__c?O=(s=e.__c=r.__c).__=s.__E:("prototype"in E&&E.prototype.render?e.__c=s=new E(v,D):(e.__c=s=new W(v,D),s.constructor=E,s.render=Zt),g&&g.sub(s),s.props=v,s.state||(s.state={}),s.context=D,s.__n=n,b=s.__d=!0,s.__h=[],s._sb=[]),s.__s==null&&(s.__s=s.state),E.getDerivedStateFromProps!=null&&(s.__s==s.state&&(s.__s=N({},s.__s)),N(s.__s,E.getDerivedStateFromProps(v,s.__s))),m=s.props,f=s.state,s.__v=e,b)E.getDerivedStateFromProps==null&&s.componentWillMount!=null&&s.componentWillMount(),s.componentDidMount!=null&&s.__h.push(s.componentDidMount);else{if(E.getDerivedStateFromProps==null&&v!==m&&s.componentWillReceiveProps!=null&&s.componentWillReceiveProps(v,D),!s.__e&&(s.shouldComponentUpdate!=null&&s.shouldComponentUpdate(v,s.__s,D)===!1||e.__v===r.__v)){for(e.__v!==r.__v&&(s.props=v,s.state=s.__s,s.__d=!1),e.__e=r.__e,e.__k=r.__k,e.__k.forEach(function(re){re&&(re.__=e)}),T=0;T<s._sb.length;T++)s.__h.push(s._sb[T]);s._sb=[],s.__h.length&&a.push(s);break e}s.componentWillUpdate!=null&&s.componentWillUpdate(v,s.__s,D),s.componentDidUpdate!=null&&s.__h.push(function(){s.componentDidUpdate(m,f,_)})}if(s.context=D,s.props=v,s.__P=t,s.__e=!1,S=h.__r,A=0,"prototype"in E&&E.prototype.render){for(s.state=s.__s,s.__d=!1,S&&S(e),d=s.render(s.props,s.state,s.context),U=0;U<s._sb.length;U++)s.__h.push(s._sb[U]);s._sb=[]}else do s.__d=!1,S&&S(e),d=s.render(s.props,s.state,s.context),s.state=s.__s;while(s.__d&&++A<25);s.state=s.__s,s.getChildContext!=null&&(n=N(N({},n),s.getChildContext())),b||s.getSnapshotBeforeUpdate==null||(_=s.getSnapshotBeforeUpdate(m,f)),Ge(t,me(F=d!=null&&d.type===k&&d.key==null?d.props.children:d)?F:[F],e,r,n,o,i,a,c,l,p),s.base=e.__e,e.__h=null,s.__h.length&&a.push(s),O&&(s.__E=s.__=null)}else i==null&&e.__v===r.__v?(e.__k=r.__k,e.__e=r.__e):e.__e=Xt(r.__e,e,r,n,o,i,a,l,p);(d=h.diffed)&&d(e)}catch(re){e.__v=null,(l||i!=null)&&(e.__e=c,e.__h=!!l,i[i.indexOf(c)]=null),h.__e(re,e,r)}}function Je(t,e,r){for(var n=0;n<r.length;n++)be(r[n],r[++n],r[++n]);h.__c&&h.__c(e,t),t.some(function(o){try{t=o.__h,o.__h=[],t.some(function(i){i.call(o)})}catch(i){h.__e(i,o.__v)}})}function Xt(t,e,r,n,o,i,a,c,l){var p,d,s,b=r.props,m=e.props,f=e.type,_=0;if(f==="svg"&&(o=!0),i!=null){for(;_<i.length;_++)if((p=i[_])&&"setAttribute"in p==!!f&&(f?p.localName===f:p.nodeType===3)){t=p,i[_]=null;break}}if(t==null){if(f===null)return document.createTextNode(m);t=o?document.createElementNS("http://www.w3.org/2000/svg",f):document.createElement(f,m.is&&m),i=null,c=!1}if(f===null)b===m||c&&t.data===m||(t.data=m);else{if(i=i&&ae.call(t.childNodes),d=(b=r.props||H).dangerouslySetInnerHTML,s=m.dangerouslySetInnerHTML,!c){if(i!=null)for(b={},_=0;_<t.attributes.length;_++)b[t.attributes[_].name]=t.attributes[_].value;(s||d)&&(s&&(d&&s.__html==d.__html||s.__html===t.innerHTML)||(t.innerHTML=s&&s.__html||""))}if(Gt(t,m,b,o,c),s)e.__k=[];else if(Ge(t,me(_=e.props.children)?_:[_],e,r,n,o&&f!=="foreignObject",i,a,i?i[0]:r.__k&&ie(r,0),c,l),i!=null)for(_=i.length;_--;)i[_]!=null&&Be(i[_]);c||("value"in m&&(_=m.value)!==void 0&&(_!==t.value||f==="progress"&&!_||f==="option"&&_!==b.value)&&se(t,"value",_,b.value,!1),"checked"in m&&(_=m.checked)!==void 0&&_!==t.checked&&se(t,"checked",_,b.checked,!1))}return t}function be(t,e,r){try{typeof t=="function"?t(e):t.current=e}catch(n){h.__e(n,r)}}function Ke(t,e,r){var n,o;if(h.unmount&&h.unmount(t),(n=t.ref)&&(n.current&&n.current!==t.__e||be(n,null,e)),(n=t.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(i){h.__e(i,e)}n.base=n.__P=null,t.__c=void 0}if(n=t.__k)for(o=0;o<n.length;o++)n[o]&&Ke(n[o],e,r||typeof t.type!="function");r||t.__e==null||Be(t.__e),t.__=t.__e=t.__d=void 0}function Zt(t,e,r){return this.constructor(t,r)}function x(t,e,r){var n,o,i,a;h.__&&h.__(t,e),o=(n=typeof r=="function")?null:r&&r.__k||e.__k,i=[],a=[],ge(e,t=(!n&&r||e).__k=Bt(k,null,[t]),o||H,H,e.ownerSVGElement!==void 0,!n&&r?[r]:o?null:e.firstChild?ae.call(e.childNodes):null,i,!n&&r?r:o?o.__e:e.firstChild,n,a),Je(i,t,a)}ae=$e.slice,h={__e:function(t,e,r,n){for(var o,i,a;e=e.__;)if((o=e.__c)&&!o.__)try{if((i=o.constructor)&&i.getDerivedStateFromError!=null&&(o.setState(i.getDerivedStateFromError(t)),a=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(t,n||{}),a=o.__d),a)return o.__E=o}catch(c){t=c}throw t}},He=0,Ht=function(t){return t!=null&&t.constructor===void 0},W.prototype.setState=function(t,e){var r;r=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=N({},this.state),typeof t=="function"&&(t=t(N({},r),this.props)),t&&N(r,t),t!=null&&this.__v&&(e&&this._sb.push(e),Ue(this))},W.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),Ue(this))},W.prototype.render=k,I=[],We=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ve=function(t,e){return t.__v.__b-e.__v.__b},oe.__r=0,Wt=0;function ye(t){if(typeof t!="function")throw new TypeError("Expected a function");let e=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,r=["`",'"',"'"],n=t.toString().replace(e,""),o="",i=0,a=0;for(;a<n.length&&n.charAt(a)!==")";a+=1){if(n.startsWith("=>",a)){o=n,a=n.length;break}if(n.charAt(a)==="="){for(;a<n.length&&(n.charAt(a)!==","&&n.charAt(a)!==")"||i!==0);a+=1){let p=!1;for(let d of r)if(n.charAt(a)===d){for(a+=1;a<n.length&&n.charAt(a)!==d;)a+=1;p=!0;break}if(!p)switch(n.charAt(a)){case"(":case"[":case"{":i+=1;break;case")":case"]":case"}":i-=1;break;default:}}if(n.charAt(a)===","&&(o+=","),n.charAt(a)===")"){o+=")";break}}else o+=n.charAt(a)}a<n.length&&n.charAt(a)===")"&&(o+=")");let l=/^(?:async)?([^=()]+)=|\(([^)]+)\)/.exec(o);return l?(l[1]||l[2]).split(",").map(p=>p.trim()).filter(Boolean):[]}var $=function(){return $=Object.assign||function(e){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},$.apply(this,arguments)};function Qe(t){return t.toLowerCase()}var Jt=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],Kt=/[^A-Z0-9]+/gi;function et(t,e){e===void 0&&(e={});for(var r=e.splitRegexp,n=r===void 0?Jt:r,o=e.stripRegexp,i=o===void 0?Kt:o,a=e.transform,c=a===void 0?Qe:a,l=e.delimiter,p=l===void 0?" ":l,d=Ye(Ye(t,n,"$1\0$2"),i,"\0"),s=0,b=d.length;d.charAt(s)==="\0";)s++;for(;d.charAt(b-1)==="\0";)b--;return d.slice(s,b).split("\0").map(c).join(p)}function Ye(t,e,r){return e instanceof RegExp?t.replace(e,r):e.reduce(function(n,o){return n.replace(o,r)},t)}function tt(t,e){return e===void 0&&(e={}),et(t,$({delimiter:"."},e))}function we(t,e){return e===void 0&&(e={}),tt(t,$({delimiter:"-"},e))}var V=256,nt=[],rt=256,ce;for(;V--;)nt[V]=(V+256).toString(16).substring(1);function it(t){var e=0,r=t||11;if(!ce||V+r>rt*2)for(ce="",V=0;e<rt;e++)ce+=nt[Math.random()*256|0];return ce.substring(V,V+++r)}function ot(t){let e=ye(t);return new Map(e.map(r=>[we(r),r]))}function st(t){return we(t.name)||"anonymous"}function at(t){return t.includes("-")&&!window.customElements.get(t)?t:`${t}-${it(5).toLowerCase()}`}function ct(t,e){return Object.fromEntries(Array.from(e.entries()).map(([n,o])=>{let i=t.getAttribute(n);return i=i===null?void 0:i,[o,i]}))}function G(t,e,r={}){return Object.fromEntries(Array.from(e.entries()).map(([,o])=>{let i=t[o]??r[o];return i=i===null?void 0:i,[o,i]}))}function ut(t,e,r,n){e.forEach(o=>{Object.defineProperty(t.prototype,o,{get(){return r.get(this)[o]},set(i){r.get(this)[o]!==i&&(r.get(this)[o]=i,n.get(this).self[X]())}})})}var xe=Symbol("instance");function ke(t){return t[xe]}var X=Symbol("emit"),Qt=async function*(){}.constructor;function lt(t){return typeof t!="function"?!1:t instanceof Qt}var Z=class extends String{constructor(e,r){super(e),this.element=r}define(e,r=window.customElements,n=void 0){class o extends this.element{}r.define(e,o,n)}};var Yt=Symbol("end");function Ce(t={},{yieldInit:e=!1,receiveEmitter:r=()=>{}}={}){let n,o=()=>null;function i(){o(!0),a()}r(i);function a(){n=new Promise(l=>{o=l})}let c=new Proxy(t,{set(l,p,d){return l[p]=d,o(!0),a(),!0},get(l,p,d){return p===Symbol.asyncIterator?async function*(){for(e&&(yield l);;){if(!await n)return l;yield l}}:p===Yt?()=>o(!1):Reflect.get(l,p,d)}});return a(),c}function Ee(t,e){let r,n;function o(i){return n=i,r}return o[xe]=t,Object.defineProperty(o,"props",{get(){return{...G(t,e,n)}}}),Object.defineProperty(o,"children",{get(){return[...t.childNodes]}}),r=Ce(o,{yieldInit:!0,receiveEmitter:i=>{o[X]=i}}),r}function M(t,...e){let r=ke(t);return r.dispatchEvent.call(r,...e)}function ft(t){return ke(t).shadowRoot}function w(t,e,{baseElement:r=void 0,baseClass:n=HTMLElement,effect:o=void 0}={}){let i=st(t),a=at(i),c=ot(t),l=lt(t),p=new WeakMap,d=new WeakMap;class s extends n{constructor(){super(),p.set(this,{}),d.set(this,{}),this.attachShadow({mode:"open"}),p.get(this).self=Ee(this,c),p.get(this).componentFunc=t.bind(p.get(this).self),p.get(this).isFirstRender=!0}static get observedAttributes(){return Array.from(c.keys())}connectedCallback(){this.setAttribute("data-component",i);let _=ct(this,c);Object.entries(_).forEach(([O,v])=>{v&&(this[O]=v)}),b.call(this)}attributeChangedCallback(_,O,v){let g=c.get(_);this[g]=v}}async function b(){let{componentFunc:f}=p.get(this);if(!l){for await(let O of p.get(this).self){let v=G(this,c),g=await f(...Object.values(v));e(g,this.shadowRoot)}return}let _=G(this,c);for await(let O of f(...Object.values(_)))if(e(O,this.shadowRoot),p.get(this).isFirstRender&&o){p.get(this).isFirstRender=!1;for(let v in p.get(this).self)typeof p.get(this).self[v]=="object"&&"value"in p.get(this).self[v]&&o(()=>{let g=p.get(this).self[v]?.value;p.get(this).self[X]()})}}ut(s,c,d,p);let m=new Z(a,s);return m.define(a,void 0,r?{extends:r}:void 0),m}var Ae,P,Se,pt,ht=0,yt=[],ue=[],dt=h.__b,_t=h.__r,vt=h.diffed,mt=h.__c,gt=h.unmount;function er(t,e){h.__h&&h.__h(P,t,ht||e),ht=0;var r=P.__H||(P.__H={__:[],__h:[]});return t>=r.__.length&&r.__.push({__V:ue}),r.__[t]}function Oe(t,e){var r=er(Ae++,7);return nr(r.__H,e)?(r.__V=t(),r.i=e,r.__h=t,r.__V):r.__}function tr(){for(var t;t=yt.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(le),t.__H.__h.forEach(Pe),t.__H.__h=[]}catch(e){t.__H.__h=[],h.__e(e,t.__v)}}h.__b=function(t){P=null,dt&&dt(t)},h.__r=function(t){_t&&_t(t),Ae=0;var e=(P=t.__c).__H;e&&(Se===P?(e.__h=[],P.__h=[],e.__.forEach(function(r){r.__N&&(r.__=r.__N),r.__V=ue,r.__N=r.i=void 0})):(e.__h.forEach(le),e.__h.forEach(Pe),e.__h=[],Ae=0)),Se=P},h.diffed=function(t){vt&&vt(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(yt.push(e)!==1&&pt===h.requestAnimationFrame||((pt=h.requestAnimationFrame)||rr)(tr)),e.__H.__.forEach(function(r){r.i&&(r.__H=r.i),r.__V!==ue&&(r.__=r.__V),r.i=void 0,r.__V=ue})),Se=P=null},h.__c=function(t,e){e.some(function(r){try{r.__h.forEach(le),r.__h=r.__h.filter(function(n){return!n.__||Pe(n)})}catch(n){e.some(function(o){o.__h&&(o.__h=[])}),e=[],h.__e(n,r.__v)}}),mt&&mt(t,e)},h.unmount=function(t){gt&&gt(t);var e,r=t.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{le(n)}catch(o){e=o}}),r.__H=void 0,e&&h.__e(e,r.__v))};var bt=typeof requestAnimationFrame=="function";function rr(t){var e,r=function(){clearTimeout(n),bt&&cancelAnimationFrame(e),setTimeout(t)},n=setTimeout(r,100);bt&&(e=requestAnimationFrame(r))}function le(t){var e=P,r=t.__c;typeof r=="function"&&(t.__c=void 0,r()),P=e}function Pe(t){var e=P;t.__c=t.__(),P=e}function nr(t,e){return!t||t.length!==e.length||e.some(function(r,n){return r!==t[n]})}function pe(){throw new Error("Cycle detected")}function Te(){if(B>1)B--;else{for(var t,e=!1;J!==void 0;){var r=J;for(J=void 0,De++;r!==void 0;){var n=r.o;if(r.o=void 0,r.f&=-3,!(8&r.f)&&xt(r))try{r.c()}catch(o){e||(t=o,e=!0)}r=n}}if(De=0,B--,e)throw t}}var y=void 0,J=void 0,B=0,De=0,fe=0;function wt(t){if(y!==void 0){var e=t.n;if(e===void 0||e.t!==y)return e={i:0,S:t,p:y.s,n:void 0,t:y,e:void 0,x:void 0,r:e},y.s!==void 0&&(y.s.n=e),y.s=e,t.n=e,32&y.f&&t.S(e),e;if(e.i===-1)return e.i=0,e.n!==void 0&&(e.n.p=e.p,e.p!==void 0&&(e.p.n=e.n),e.p=y.s,e.n=void 0,y.s.n=e,y.s=e),e}}function C(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}C.prototype.h=function(){return!0};C.prototype.S=function(t){this.t!==t&&t.e===void 0&&(t.x=this.t,this.t!==void 0&&(this.t.e=t),this.t=t)};C.prototype.U=function(t){if(this.t!==void 0){var e=t.e,r=t.x;e!==void 0&&(e.x=r,t.e=void 0),r!==void 0&&(r.e=e,t.x=void 0),t===this.t&&(this.t=r)}};C.prototype.subscribe=function(t){var e=this;return j(function(){var r=e.value,n=32&this.f;this.f&=-33;try{t(r)}finally{this.f|=n}})};C.prototype.valueOf=function(){return this.value};C.prototype.toString=function(){return this.value+""};C.prototype.toJSON=function(){return this.value};C.prototype.peek=function(){return this.v};Object.defineProperty(C.prototype,"value",{get:function(){var t=wt(this);return t!==void 0&&(t.i=this.i),this.v},set:function(t){if(y instanceof R&&function(){throw new Error("Computed cannot have side-effects")}(),t!==this.v){De>100&&pe(),this.v=t,this.i++,fe++,B++;try{for(var e=this.t;e!==void 0;e=e.x)e.t.N()}finally{Te()}}}});function L(t){return new C(t)}function xt(t){for(var e=t.s;e!==void 0;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return!0;return!1}function kt(t){for(var e=t.s;e!==void 0;e=e.n){var r=e.S.n;if(r!==void 0&&(e.r=r),e.S.n=e,e.i=-1,e.n===void 0){t.s=e;break}}}function Ct(t){for(var e=t.s,r=void 0;e!==void 0;){var n=e.p;e.i===-1?(e.S.U(e),n!==void 0&&(n.n=e.n),e.n!==void 0&&(e.n.p=n)):r=e,e.S.n=e.r,e.r!==void 0&&(e.r=void 0),e=n}t.s=r}function R(t){C.call(this,void 0),this.x=t,this.s=void 0,this.g=fe-1,this.f=4}(R.prototype=new C).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===fe))return!0;if(this.g=fe,this.f|=1,this.i>0&&!xt(this))return this.f&=-2,!0;var t=y;try{kt(this),y=this;var e=this.x();(16&this.f||this.v!==e||this.i===0)&&(this.v=e,this.f&=-17,this.i++)}catch(r){this.v=r,this.f|=16,this.i++}return y=t,Ct(this),this.f&=-2,!0};R.prototype.S=function(t){if(this.t===void 0){this.f|=36;for(var e=this.s;e!==void 0;e=e.n)e.S.S(e)}C.prototype.S.call(this,t)};R.prototype.U=function(t){if(this.t!==void 0&&(C.prototype.U.call(this,t),this.t===void 0)){this.f&=-33;for(var e=this.s;e!==void 0;e=e.n)e.S.U(e)}};R.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;t!==void 0;t=t.x)t.t.N()}};R.prototype.peek=function(){if(this.h()||pe(),16&this.f)throw this.v;return this.v};Object.defineProperty(R.prototype,"value",{get:function(){1&this.f&&pe();var t=wt(this);if(this.h(),t!==void 0&&(t.i=this.i),16&this.f)throw this.v;return this.v}});function K(t){return new R(t)}function Et(t){var e=t.u;if(t.u=void 0,typeof e=="function"){B++;var r=y;y=void 0;try{e()}catch(n){throw t.f&=-2,t.f|=8,Le(t),n}finally{y=r,Te()}}}function Le(t){for(var e=t.s;e!==void 0;e=e.n)e.S.U(e);t.x=void 0,t.s=void 0,Et(t)}function ir(t){if(y!==this)throw new Error("Out-of-order effect");Ct(this),y=t,this.f&=-2,8&this.f&&Le(this),Te()}function Q(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}Q.prototype.c=function(){var t=this.S();try{if(8&this.f||this.x===void 0)return;var e=this.x();typeof e=="function"&&(this.u=e)}finally{t()}};Q.prototype.S=function(){1&this.f&&pe(),this.f|=1,this.f&=-9,Et(this),kt(this),B++;var t=y;return y=this,ir.bind(this,t)};Q.prototype.N=function(){2&this.f||(this.f|=2,this.o=J,J=this)};Q.prototype.d=function(){this.f|=8,1&this.f||Le(this)};function j(t){var e=new Q(t);try{e.c()}catch(r){throw e.d(),r}return e.d.bind(e)}var Ne,je;function q(t,e){h[t]=e.bind(null,h[t]||function(){})}function he(t){je&&je(),je=t&&t.S()}function St(t){var e=this,r=t.data,n=sr(r);n.value=r;var o=Oe(function(){for(var i=e.__v;i=i.__;)if(i.__c){i.__c.__$f|=4;break}return e.__$u.c=function(){e.base.data=o.peek()},K(function(){var a=n.value.value;return a===0?0:a===!0?"":a||""})},[]);return o.value}St.displayName="_st";Object.defineProperties(C.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:St},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});q("__b",function(t,e){if(typeof e.type=="string"){var r,n=e.props;for(var o in n)if(o!=="children"){var i=n[o];i instanceof C&&(r||(e.__np=r={}),r[o]=i,n[o]=i.peek())}}t(e)});q("__r",function(t,e){he();var r,n=e.__c;n&&(n.__$f&=-2,(r=n.__$u)===void 0&&(n.__$u=r=function(o){var i;return j(function(){i=this}),i.c=function(){n.__$f|=1,n.setState({})},i}())),Ne=n,he(r),t(e)});q("__e",function(t,e,r,n){he(),Ne=void 0,t(e,r,n)});q("diffed",function(t,e){he(),Ne=void 0;var r;if(typeof e.type=="string"&&(r=e.__e)){var n=e.__np,o=e.props;if(n){var i=r.U;if(i)for(var a in i){var c=i[a];c!==void 0&&!(a in n)&&(c.d(),i[a]=void 0)}else r.U=i={};for(var l in n){var p=i[l],d=n[l];p===void 0?(p=or(r,l,d,o),i[l]=p):p.o(d,o)}}}t(e)});function or(t,e,r,n){var o=e in t&&t.ownerSVGElement===void 0,i=L(r);return{o:function(a,c){i.value=a,n=c},d:j(function(){var a=i.value.value;n[e]!==a&&(n[e]=a,o?t[e]=a:a?t.setAttribute(e,a):t.removeAttribute(e))})}}q("unmount",function(t,e){if(typeof e.type=="string"){var r=e.__e;if(r){var n=r.U;if(n){r.U=void 0;for(var o in n){var i=n[o];i&&i.d()}}}}else{var a=e.__c;if(a){var c=a.__$u;c&&(a.__$u=void 0,c.d())}}t(e)});q("__h",function(t,e,r,n){(n<3||n===9)&&(e.__$f|=2),t(e,r,n)});W.prototype.shouldComponentUpdate=function(t,e){var r=this.__$u;if(!(r&&r.s!==void 0||4&this.__$f)||3&this.__$f)return!0;for(var n in e)return!0;for(var o in t)if(o!=="__source"&&t[o]!==this.props[o])return!0;for(var i in this.props)if(!(i in t))return!0;return!1};function sr(t){return Oe(function(){return L(t)},[])}var de=L(!1);async function At(){try{console.log("Requesting WakeLock"),await navigator.wakeLock.request("screen"),de.value=!0}catch(t){console.error("WakeLock",t),de.value=!1}}var ar=0;function u(t,e,r,n,o,i){var a,c,l={};for(c in e)c=="ref"?a=e[c]:l[c]=e[c];var p={type:t,props:l,key:r,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--ar,__source:o,__self:i};if(typeof t=="function"&&(a=t.defaultProps))for(c in a)l[c]===void 0&&(l[c]=a[c]);return h.vnode&&h.vnode(p),p}async function*cr(){this.wakeLockDisabled=de;for await(let{wakeLockDisabled:t}of this)yield u(k,{children:[u("link",{rel:"stylesheet",href:"/dist/main.css"}),u("style",{children:`
          :host {
             display: grid;
          }
  
          span {
            grid-column: 1;
            grid-row: 1;
          }
        `}),u("span",{children:"\u{1F505}"}),!t.value&&u("span",{children:"\u{1F6AB}"})]})}var Pt=w(cr,x,{effect:j});var Ot={name:"remote-control",version:"1.1.8",description:"BLE Remote Control",main:"src/index.html",directories:{doc:"docs"},scripts:{test:"npm run lint && npm run build",start:"esbuild src/main.js --bundle --outdir=public/dist --jsx-import-source=preact --jsx=automatic --watch --servedir=public --sourcemap",build:"esbuild src/main.js --bundle --outdir=dist/dist --jsx-import-source=preact --jsx=automatic --minify && cp -r public/. dist/",lint:"eslint src",deploy:"gh-pages -d dist"},repository:{type:"git",url:"git+https://github.com/DavidBeale/remote-control.git"},author:"David Beale",license:"MIT",bugs:{url:"https://github.com/DavidBeale/remote-control/issues"},homepage:"https://github.com/DavidBeale/remote-control#readme",devDependencies:{"browser-sync":"^2.27.9",esbuild:"^0.18.16",eslint:"^8.45.0","eslint-config-airbnb":"^19.0.4","eslint-config-prettier":"^8.8.0","eslint-plugin-prettier":"^5.0.0","gh-pages":"^5.0.0"},dependencies:{"@picocss/pico":"^2.0.0-alpha1","@preact/signals":"^1.1.5","as-web-component":"^0.6.2",multirator:"^0.1.0",preact:"^10.16.0"}};function lr(){return u(k,{children:[u("link",{rel:"stylesheet",href:"/dist/main.css"}),u("style",{children:`
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
      `}),u("header",{children:[u("h1",{children:["BLE Remote Control (",Ot.version,")"]}),u(Pt,{})]})]})}var Dt=w(lr,x);async function fr(t,e){let r=o=>{M(this,new CustomEvent("change",{detail:{name:o}}))},n=o=>{M(this,new CustomEvent("Menu",{detail:o.target.value})),o.target.value=""};return u(k,{children:[u("link",{rel:"stylesheet",href:"/dist/main.css"}),u("style",{children:`
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

          :host select {
            width: 2rem;
            padding: .3rem;
            background-image: none;
            text-align: center;
            margin: 0;
          }
        }
        `}),u("nav",{children:[u("div",{role:"group",children:t.map(o=>o===e?u("button",{"aria-current":"true",children:o}):u("button",{class:"secondary",onClick:()=>r(o),children:o}))}),u("select",{onChange:n,value:"",children:[u("option",{value:"",disabled:!0,children:"..."}),u("option",{children:"Add Device"}),u("option",{children:"Disconnect"})]})]})]})}var Tt=w(fr,x);var Y={"0000000a-0000-1000-8000-00805f9b34fb":{name:"engine",label:"Engine"},"0000000b-0000-1000-8000-00805f9b34fb":{name:"headlight",label:"Head Light"},"0000000c-0000-1000-8000-00805f9b34fb":{name:"cablight",label:"Cab Light"},"0000000d-0000-1000-8000-00805f9b34fb":{name:"velocity"},"0000000e-0000-1000-8000-00805f9b34fb":{name:"speed"}};var pr=document.createElement("template");pr.innerHTML=`
  <label id="label" for="switch"></label>
  <input id="switch" type="checkbox" />
`;async function*hr(t){this.checked=!1;let e=r=>{r.target.checked?this.props.feature.writeValue(Uint8Array.from([1])):this.props.feature.writeValue(Uint8Array.from([0]))};for await(let{props:r}of this(t))this.checked=(await r.feature.readValue()).getUint8(),r.feature.value.map(n=>(this.checked=n.getUint8(),null)),yield u(k,{children:[u("link",{rel:"stylesheet",href:"/dist/main.css"}),u("label",{children:[u("input",{type:"checkbox",role:"switch",checked:this.checked,onChange:e}),Y[r.feature.uuid].label]})]})}var Lt=w(hr,x);async function*dr(t=0){yield u(k,{children:[u("link",{rel:"stylesheet",href:"/dist/main.css"}),u("style",{children:`
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
      `}),u("input",{type:"range",value:t,onChange:r=>M(this,new CustomEvent("change",{detail:r.target.valueAsNumber})),min:"0",max:"100",step:"5"}),u("button",{id:"stop",onClick:()=>M(this,new CustomEvent("change",{detail:0})),children:"Stop"})]});let e=ft(this).querySelector("input");new Me(e,{range:"circular"});for await(let{props:r}of this({speed:t}))e.value=r.speed,e.dispatchEvent(new Event("input"))}var jt=w(dr,x),Me=class{constructor(e,r){this.settings={clsCircular:"c-rng--circular",clsCircularOutput:"c-rng--circular-output",clsOutput:"c-rng__output",clsOutputWrapper:"c-rng--output",clsRangeTicks:"c-rng--ticks",clsWrapper:"c-rng__wrapper",offset:-90,varPercent:"--rng-percent",varPercentUpper:"--rng-percent-upper",varThumb:"--rng-thumb-w",varUnit:"--rng-unit",varValue:"--rng-value",..._r(r)},this.range=e,this.initRange(this.range)}initRange(e){let r=this.settings.range.includes("circular");e.id=e.id||vr(),this.lower=this.settings.range.includes("upper")?e.parentNode.querySelector('[data-range*="lower"]'):null,this.max=parseInt(e.max,10)||100,this.min=parseInt(e.min,10),this.multiplier=100/(this.max-this.min),this.output=this.settings.range.includes("output")||r?document.createElement("output"):null,this.ticks=parseInt(e.dataset.ticks,10),this.upper=this.settings.range.includes("lower")?e.parentNode.querySelector('[data-range*="upper"]'):null;let n=this.lower||this.upper;if(this.wrapper=n?e.parentNode:document.createElement("div"),this.output&&(this.output.className=r?this.settings.clsCircularOutput:this.settings.clsOutput,this.output.for=e.id,n?this.wrapper.insertBefore(this.output,e):(this.wrapper.classList.add(r?this.settings.clsCircular:this.settings.clsOutputWrapper),this.wrapper.appendChild(this.output))),n||(e.parentNode.insertBefore(this.wrapper,e),this.wrapper.appendChild(e)),e.dataset.modifier&&this.wrapper.classList.add(e.dataset.modifier),this.wrapper.classList.add(this.settings.clsWrapper),this.wrapper.style.setProperty(this.settings.varThumb,getComputedStyle(e).getPropertyValue(this.settings.varThumb)),this.ticks){let o=[...Array(this.ticks).keys()],i=`
          <svg class="${this.settings.clsRangeTicks}" width="100%" height="100%">
          ${o.map(a=>`<rect x="${100/this.ticks*a}%" y="5" width="1" height="100%"></rect>`).join("")}
          <rect x="100%" y="5" width="1" height="100%"></rect>
        </svg>`;this.wrapper.insertAdjacentHTML("afterbegin",i)}if(r){e.hidden=!0;let o=i=>this.updateCircle(this.rotate(i.pageX,i.pageY));this.setCenter(),this.output.setAttribute("tabindex",0),this.output.addEventListener("keydown",i=>{switch(i.key){case"ArrowLeft":case"ArrowDown":i.preventDefault(),this.range.stepDown(),this.updateCircle();break;case"ArrowRight":case"ArrowUp":i.preventDefault(),this.range.stepUp(),this.updateCircle();break;default:break}}),this.output.addEventListener("pointerdown",()=>this.output.addEventListener("pointermove",o)),this.output.addEventListener("pointerup",()=>this.output.removeEventListener("pointermove",o)),e.addEventListener("input",()=>this.updateCircle(0)),this.updateCircle()}else e.addEventListener("input",()=>this.updateRange());e.dispatchEvent(new Event("input"))}rotate(e,r){return Math.atan2(r-this.center.y,e-this.center.x)*180/Math.PI}setCenter(){let e=this.wrapper.getBoundingClientRect();this.center={x:e.left+e.width/2,y:e.top+e.height/2}}updateCircle(e){let r=e,n=360/(this.max-this.min);r||(r=n*this.range.valueAsNumber+this.settings.offset);let o=r-this.settings.offset;o<0&&(o+=360);let i=Math.ceil(o/n);i>this.range.max||i<this.range.min||(this.range.value=i,this.range.dispatchEvent(new Event("change",{bubbles:!0})),this.wrapper.dataset.value=this.range.value,this.wrapper.style.setProperty("--angle",`${r}deg`),this.wrapper.style.setProperty("--gradient-end",`${o}deg`))}updateRange(){if(this.lower&&this.lower.valueAsNumber>this.range.valueAsNumber){this.range.value=this.lower.valueAsNumber,this.range.dispatchEvent(new Event("input",{bubbles:!0}));return}if(this.upper&&this.upper.valueAsNumber<this.range.valueAsNumber){this.range.value=this.upper.valueAsNumber,this.range.dispatchEvent(new Event("input",{bubbles:!0}));return}let e=(this.range.valueAsNumber-this.min)*this.multiplier;this.range.style.setProperty(this.settings.varPercent,`${e}%`),this.range.style.setProperty(this.settings.varValue,`${this.range.valueAsNumber}`),this.lower&&this.lower.style.setProperty(this.settings.varPercentUpper,`${e}%`),this.output&&(this.output.style.setProperty(this.settings.varUnit,`${e}`),this.output.innerText=this.range.value)}};function _r(t){let e={...t};return Object.keys(e).forEach(r=>{typeof e[r]=="string"&&e[r].charAt(0)===":"&&(e[r]=JSON.parse(e[r].slice(1)))}),e}function vr(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,t=>(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16))}async function mr(t,e={},r=!1,n=1){let o=Object.entries(e),i=Math.min(...o.map(([,c])=>c)),a=Math.max(...o.map(([,c])=>c));return u(k,{children:[u("link",{rel:"stylesheet",href:"/dist/main.css"}),u("style",{children:`
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
        
      `}),u("input",{type:"range",value:t,disabled:r,onChange:c=>M(this,new CustomEvent("change",{detail:c.target.valueAsNumber})),min:i,max:a,step:n,list:"markers"}),u("datalist",{id:"markers",children:o.map(([c,l])=>u("option",{value:l,children:c}))})]})}var Nt=w(mr,x);function Re(t,e){let r=0;return function(...o){let i=new Date().getTime();i-r<e||(r=i,t(...o))}}async function*gr(t){this.speed=0,this.direction=1;let e=Re(n=>{this.speed=n.detail,this.props.feature.writeValue(Int8Array.from([this.speed*this.direction]))},100),r=n=>{this.direction=n.detail,this.props.feature.writeValue(Int8Array.from([this.speed*this.direction]))};[this.speed,this.direction]=Mt(await t.readValue());for await(let{props:n}of this(t)){n.feature.value.map(i=>([this.speed,this.direction]=Mt(i),null));let o=this.speed!==0;yield u("article",{children:[u("link",{rel:"stylesheet",href:"/dist/main.css"}),u("style",{children:`
            article {
              margin-bottom: 0;
              --pico-block-spacing-vertical: .5rem;
            }        
        `}),u(Nt,{gear:this.direction,gears:{Reverse:-1,Forward:1},step:2,disabled:o,onChange:r}),u(jt,{speed:this.speed,onChange:e})]})}}var Rt=w(gr,x);function Mt(t){let e=t.getInt8(0),r=Math.abs(e),n=1;return e<0&&(n=-1),[r,n]}async function br(t){let{features:e}=t,r=e.find(n=>Y[n.uuid]?.name==="velocity");return u("section",{children:[u("link",{rel:"stylesheet",href:"/dist/main.css"}),u("style",{children:`
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
        `}),u("article",{children:u("fieldset",{children:e.filter(n=>Y[n.uuid].label).map(n=>u(Lt,{feature:n}))})}),r&&u(Rt,{feature:r})]})}var zt=w(br,x);var ee=class t{constructor(e){this[Symbol.asyncIterator]=async function*(){for await(let n of e)yield n}}filter(e){return new t(yr(this,e))}map(e){return new t(wr(this,e))}concat(e){return new t(xr(this,e))}async forEach(e){for await(let r of this)e(r)}async reduce(e,r){let n=r;for await(let o of this)n===void 0?n=o:n=e(n,o);return n}};async function*yr(t,e){for await(let r of t)e(r)&&(yield r)}async function*wr(t,e){for await(let r of t)yield e(r)}async function*xr(t,e){for await(let r of t)yield r;for await(let r of e)yield r}var te=class extends ee{constructor(e){super(e);let r=!1,n,o,i,a=new Promise((c,l)=>{o=c,i=l});(async()=>{for(;!r;)try{let c=await e.next();r=c.done,n=c.value,o(c)}catch(c){i(c)}finally{a=new Promise((c,l)=>{o=c,i=l})}})(),this[Symbol.asyncIterator]=async function*(){for(!r&&n!==void 0&&(yield n);!r;)await a,r||(yield n)}}};var Ut=Promise.resolve();function _e(t){return Ut=kr(t)}async function kr(t){try{await Ut}finally{return t()}}var Ft="e4580f53-0298-41fa-8210-ce8f8bbe23a3",z=class t{constructor(e){this.deviceName=e,this.device=void 0,this.primaryService=void 0,this.featureMap={},this.isConnected=L(!1)}static async select(e){t.selectOpen.value=!0;try{return await navigator.bluetooth.requestDevice({filters:e?[{name:e}]:[{services:[Ft]},{services:["6e400001-b5a3-f393-e0a9-e50e24dcca9e"]}]})}finally{t.selectOpen.value=!1}}static selectOpen=L(!1);get features(){return Object.values(this.featureMap)}async connect(e){this.device=e,console.log("Connecting to device",this.device?.name);try{await this.device.gatt.connect(),console.log("Connected to device",this.device?.name),this.primaryService=await this.device.gatt.getPrimaryService(Ft),this.device.addEventListener("gattserverdisconnected",It.bind(this)),await Cr.call(this),this.isConnected.value=!0}catch(r){console.error("Failed to connect to Device"),console.error(r.stack??r),console.log("Retrying in 3secs"),this.isConnected.value=!1,setTimeout(async()=>{let n=await t.select(this.device.name);this.connect(n)},3e3)}}disconnect(){this.device&&(this.device.removeEventListener("gattserverdisconnected",It),this.isConnected.value=!1,this.device.gatt.disconnect())}};function It(){this.isConnected.value&&(console.log("Disconnected from device",this.device?.name??"Unknown"),this.connect(this.device))}async function Cr(){let t=await this.primaryService.getCharacteristics();for(let e of t)this.featureMap[e.uuid]||(this.featureMap[e.uuid]={uuid:e.uuid},this.featureMap[e.uuid].value=new te(async function*(){for(e.value&&(yield e.value);;)yield new Promise(n=>{this.featureMap[e.uuid].resolver=n})}.call(this))),this.featureMap[e.uuid].writeValue=r=>_e(()=>e.writeValue.call(e,r)),this.featureMap[e.uuid].readValue=()=>_e(()=>e.readValue.call(e)),e.addEventListener("characteristicvaluechanged",async()=>{this.featureMap[e.uuid]?.resolver(e.value)}),e.startNotifications(),this.featureMap[e.uuid].readValue().then(()=>{this.featureMap[e.uuid]?.resolver(e.value)})}async function Er(t){return u("section",{children:[u("link",{rel:"stylesheet",href:"/dist/main.css"}),u("style",{children:`
          section {
            display: flex;
            height: 100%;
          }

          button {
            margin: auto;
          }
        `}),u("button",{onClick:async()=>{At();let r=await z.select();t.connect(r)},children:"Connect"})]})}var Vt=w(Er,x);async function*Sr(){let t=["Star","Jessie"],e=Object.fromEntries(t.map(o=>[o,new z(o)]));this.status=K(()=>Object.entries(e).map(([,o])=>o.isConnected.value)),[this.currentDeviceName=""]=t,this.selectOpen=z.selectOpen;let r=o=>{this.currentDeviceName=o},n=o=>{switch(o){case"Disconnect":{e[this.currentDeviceName].disconnect();break}}};for await(let{currentDeviceName:o,selectOpen:i}of this){let a=e[o];yield u(k,{children:[u("link",{rel:"stylesheet",href:"/dist/main.css"}),u("style",{children:`
           :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            ${i.value?"opacity: 10%; pointer-events: none;":""}
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
          `}),u(Dt,{}),u("main",{class:"container-fluid",children:[u(Tt,{devices:t,currentDeviceName:o,onChange:c=>r(c.detail.name),onMenu:c=>n(c.detail)}),a.isConnected.value?u(zt,{service:a}):u(Vt,{service:a})]})]})}}var Ii=w(Sr,x,{effect:j});window.location.hostname==="localhost"&&new EventSource("/esbuild").addEventListener("change",()=>window.location.reload());})();

(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K=globalThis,rt=K.ShadowRoot&&(K.ShadyCSS===void 0||K.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,at=Symbol(),ft=new WeakMap;let Ot=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==at)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(rt&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=ft.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&ft.set(e,t))}return t}toString(){return this.cssText}};const Wt=n=>new Ot(typeof n=="string"?n:n+"",void 0,at),P=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((i,s,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[r+1],n[0]);return new Ot(e,n,at)},Jt=(n,t)=>{if(rt)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),s=K.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)}},$t=rt?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Wt(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Kt,defineProperty:Yt,getOwnPropertyDescriptor:Qt,getOwnPropertyNames:Zt,getOwnPropertySymbols:Gt,getPrototypeOf:Xt}=Object,S=globalThis,mt=S.trustedTypes,te=mt?mt.emptyScript:"",tt=S.reactiveElementPolyfillSupport,M=(n,t)=>n,Y={toAttribute(n,t){switch(t){case Boolean:n=n?te:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},lt=(n,t)=>!Kt(n,t),_t={attribute:!0,type:String,converter:Y,reflect:!1,hasChanged:lt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),S.litPropertyMetadata??(S.litPropertyMetadata=new WeakMap);class U extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=_t){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Yt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=Qt(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get(){return s==null?void 0:s.call(this)},set(o){const l=s==null?void 0:s.call(this);r.call(this,o),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??_t}static _$Ei(){if(this.hasOwnProperty(M("elementProperties")))return;const t=Xt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(M("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(M("properties"))){const e=this.properties,i=[...Zt(e),...Gt(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift($t(s))}else t!==void 0&&e.push($t(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Jt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){var r;const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const o=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:Y).toAttribute(e,i.type);this._$Em=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){var r;const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const o=i.getPropertyOptions(s),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)==null?void 0:r.fromAttribute)!==void 0?o.converter:Y;this._$Em=s,this[s]=l.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??lt)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[r,o]of s)o.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],o)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(s=>{var r;return(r=s.hostUpdate)==null?void 0:r.call(s)}),this.update(e)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}U.elementStyles=[],U.shadowRootOptions={mode:"open"},U[M("elementProperties")]=new Map,U[M("finalized")]=new Map,tt==null||tt({ReactiveElement:U}),(S.reactiveElementVersions??(S.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=globalThis,Q=I.trustedTypes,yt=Q?Q.createPolicy("lit-html",{createHTML:n=>n}):void 0,ht="$lit$",y=`lit$${(Math.random()+"").slice(9)}$`,ct="?"+y,ee=`<${ct}>`,C=document,B=()=>C.createComment(""),q=n=>n===null||typeof n!="object"&&typeof n!="function",Nt=Array.isArray,Ut=n=>Nt(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",et=`[ 	
\f\r]`,j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,bt=/-->/g,vt=/>/g,E=RegExp(`>|${et}(?:([^\\s"'>=/]+)(${et}*=${et}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),At=/'/g,St=/"/g,Tt=/^(?:script|style|textarea|title)$/i,se=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),$=se(1),O=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),Et=new WeakMap,w=C.createTreeWalker(C,129);function Lt(n,t){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return yt!==void 0?yt.createHTML(t):t}const Dt=(n,t)=>{const e=n.length-1,i=[];let s,r=t===2?"<svg>":"",o=j;for(let l=0;l<e;l++){const a=n[l];let c,p,h=-1,d=0;for(;d<a.length&&(o.lastIndex=d,p=o.exec(a),p!==null);)d=o.lastIndex,o===j?p[1]==="!--"?o=bt:p[1]!==void 0?o=vt:p[2]!==void 0?(Tt.test(p[2])&&(s=RegExp("</"+p[2],"g")),o=E):p[3]!==void 0&&(o=E):o===E?p[0]===">"?(o=s??j,h=-1):p[1]===void 0?h=-2:(h=o.lastIndex-p[2].length,c=p[1],o=p[3]===void 0?E:p[3]==='"'?St:At):o===St||o===At?o=E:o===bt||o===vt?o=j:(o=E,s=void 0);const u=o===E&&n[l+1].startsWith("/>")?" ":"";r+=o===j?a+ee:h>=0?(i.push(c),a.slice(0,h)+ht+a.slice(h)+y+u):a+y+(h===-2?l:u)}return[Lt(n,r+(n[e]||"<?>")+(t===2?"</svg>":"")),i]};class z{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,o=0;const l=t.length-1,a=this.parts,[c,p]=Dt(t,e);if(this.el=z.createElement(c,i),w.currentNode=this.el.content,e===2){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=w.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const h of s.getAttributeNames())if(h.endsWith(ht)){const d=p[o++],u=s.getAttribute(h).split(y),g=/([.?@])?(.*)/.exec(d);a.push({type:1,index:r,name:g[2],strings:u,ctor:g[1]==="."?jt:g[1]==="?"?Ht:g[1]==="@"?Mt:W}),s.removeAttribute(h)}else h.startsWith(y)&&(a.push({type:6,index:r}),s.removeAttribute(h));if(Tt.test(s.tagName)){const h=s.textContent.split(y),d=h.length-1;if(d>0){s.textContent=Q?Q.emptyScript:"";for(let u=0;u<d;u++)s.append(h[u],B()),w.nextNode(),a.push({type:2,index:++r});s.append(h[d],B())}}}else if(s.nodeType===8)if(s.data===ct)a.push({type:2,index:r});else{let h=-1;for(;(h=s.data.indexOf(y,h+1))!==-1;)a.push({type:7,index:r}),h+=y.length-1}r++}}static createElement(t,e){const i=C.createElement("template");return i.innerHTML=t,i}}function N(n,t,e=n,i){var o,l;if(t===O)return t;let s=i!==void 0?(o=e._$Co)==null?void 0:o[i]:e._$Cl;const r=q(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==r&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),r===void 0?s=void 0:(s=new r(n),s._$AT(n,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=s:e._$Cl=s),s!==void 0&&(t=N(n,s._$AS(n,t.values),s,i)),t}class Rt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=((t==null?void 0:t.creationScope)??C).importNode(e,!0);w.currentNode=s;let r=w.nextNode(),o=0,l=0,a=i[0];for(;a!==void 0;){if(o===a.index){let c;a.type===2?c=new L(r,r.nextSibling,this,t):a.type===1?c=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(c=new It(r,this,t)),this._$AV.push(c),a=i[++l]}o!==(a==null?void 0:a.index)&&(r=w.nextNode(),o++)}return w.currentNode=C,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class L{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=N(this,t,e),q(t)?t===f||t==null||t===""?(this._$AH!==f&&this._$AR(),this._$AH=f):t!==this._$AH&&t!==O&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ut(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==f&&q(this._$AH)?this._$AA.nextSibling.data=t:this.T(C.createTextNode(t)),this._$AH=t}$(t){var r;const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=z.createElement(Lt(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===s)this._$AH.p(e);else{const o=new Rt(s,this),l=o.u(this.options);o.p(e),this.T(l),this._$AH=o}}_$AC(t){let e=Et.get(t.strings);return e===void 0&&Et.set(t.strings,e=new z(t)),e}k(t){Nt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new L(this.S(B()),this.S(B()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class W{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=f,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=f}_$AI(t,e=this,i,s){const r=this.strings;let o=!1;if(r===void 0)t=N(this,t,e,0),o=!q(t)||t!==this._$AH&&t!==O,o&&(this._$AH=t);else{const l=t;let a,c;for(t=r[0],a=0;a<r.length-1;a++)c=N(this,l[i+a],e,a),c===O&&(c=this._$AH[a]),o||(o=!q(c)||c!==this._$AH[a]),c===f?t=f:t!==f&&(t+=(c??"")+r[a+1]),this._$AH[a]=c}o&&!s&&this.j(t)}j(t){t===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class jt extends W{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===f?void 0:t}}class Ht extends W{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==f)}}class Mt extends W{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=N(this,t,e,0)??f)===O)return;const i=this._$AH,s=t===f&&i!==f||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==f&&(i===f||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class It{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const ie={P:ht,A:y,C:ct,M:1,L:Dt,R:Rt,D:Ut,V:N,I:L,H:W,N:Ht,U:Mt,B:jt,F:It},st=I.litHtmlPolyfillSupport;st==null||st(z,L),(I.litHtmlVersions??(I.litHtmlVersions=[])).push("3.1.2");const ne=(n,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let s=i._$litPart$;if(s===void 0){const r=(e==null?void 0:e.renderBefore)??null;i._$litPart$=s=new L(t.insertBefore(B(),r),r,void 0,e??{})}return s._$AI(n),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let b=class extends U{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ne(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return O}};var Ct;b._$litElement$=!0,b.finalized=!0,(Ct=globalThis.litElementHydrateSupport)==null||Ct.call(globalThis,{LitElement:b});const it=globalThis.litElementPolyfillSupport;it==null||it({LitElement:b});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J=n=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(n,t)}):customElements.define(n,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oe={attribute:!0,type:String,converter:Y,reflect:!1,hasChanged:lt},re=(n=oe,t,e)=>{const{kind:i,metadata:s}=e;let r=globalThis.litPropertyMetadata.get(s);if(r===void 0&&globalThis.litPropertyMetadata.set(s,r=new Map),r.set(e.name,n),i==="accessor"){const{name:o}=e;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(o,a,n)},init(l){return l!==void 0&&this.P(o,void 0,n),l}}}if(i==="setter"){const{name:o}=e;return function(l){const a=this[o];t.call(this,l),this.requestUpdate(o,a,n)}}throw Error("Unsupported decorator location: "+i)};function kt(n){return(t,e)=>typeof e=="object"?re(n,t,e):((i,s,r)=>{const o=s.hasOwnProperty(r);return s.constructor.createProperty(r,o?{...i,wrapped:!0}:i),o?Object.getOwnPropertyDescriptor(s,r):void 0})(n,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function D(n){return kt({...n,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ae={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},le=n=>(...t)=>({_$litDirective$:n,values:t});let he=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:ce}=ie,xt=()=>document.createComment(""),H=(n,t,e)=>{var r;const i=n._$AA.parentNode,s=t===void 0?n._$AB:t._$AA;if(e===void 0){const o=i.insertBefore(xt(),s),l=i.insertBefore(xt(),s);e=new ce(o,l,n,n.options)}else{const o=e._$AB.nextSibling,l=e._$AM,a=l!==n;if(a){let c;(r=e._$AQ)==null||r.call(e,n),e._$AM=n,e._$AP!==void 0&&(c=n._$AU)!==l._$AU&&e._$AP(c)}if(o!==s||a){let c=e._$AA;for(;c!==o;){const p=c.nextSibling;i.insertBefore(c,s),c=p}}}return e},x=(n,t,e=n)=>(n._$AI(t,e),n),ue={},de=(n,t=ue)=>n._$AH=t,pe=n=>n._$AH,nt=n=>{var i;(i=n._$AP)==null||i.call(n,!1,!0);let t=n._$AA;const e=n._$AB.nextSibling;for(;t!==e;){const s=t.nextSibling;t.remove(),t=s}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wt=(n,t,e)=>{const i=new Map;for(let s=t;s<=e;s++)i.set(n[s],s);return i},ge=le(class extends he{constructor(n){if(super(n),n.type!==ae.CHILD)throw Error("repeat() can only be used in text expressions")}dt(n,t,e){let i;e===void 0?e=t:t!==void 0&&(i=t);const s=[],r=[];let o=0;for(const l of n)s[o]=i?i(l,o):o,r[o]=e(l,o),o++;return{values:r,keys:s}}render(n,t,e){return this.dt(n,t,e).values}update(n,[t,e,i]){const s=pe(n),{values:r,keys:o}=this.dt(t,e,i);if(!Array.isArray(s))return this.ut=o,r;const l=this.ut??(this.ut=[]),a=[];let c,p,h=0,d=s.length-1,u=0,g=r.length-1;for(;h<=d&&u<=g;)if(s[h]===null)h++;else if(s[d]===null)d--;else if(l[h]===o[u])a[u]=x(s[h],r[u]),h++,u++;else if(l[d]===o[g])a[g]=x(s[d],r[g]),d--,g--;else if(l[h]===o[g])a[g]=x(s[h],r[g]),H(n,a[g+1],s[h]),h++,g--;else if(l[d]===o[u])a[u]=x(s[d],r[u]),H(n,s[h],s[d]),d--,u++;else if(c===void 0&&(c=wt(o,u,g),p=wt(l,h,d)),c.has(l[h]))if(c.has(l[d])){const _=p.get(o[u]),X=_!==void 0?s[_]:null;if(X===null){const gt=H(n,s[h]);x(gt,r[u]),a[u]=gt}else a[u]=x(X,r[u]),H(n,s[h],X),s[_]=null;u++}else nt(s[d]),d--;else nt(s[h]),h++;for(;u<=g;){const _=H(n,a[g+1]);x(_,r[u]),a[u++]=_}for(;h<=d;){const _=s[h++];_!==null&&nt(_)}return this.ut=o,de(n,a),O}}),k=window.location.origin,Bt="/api",ot="JWT_AUTH_TOKEN",qt="https://express-backend-k4hv.onrender.com/api";function fe(n){return k.indexOf("localhost")>0?`${qt}${n}`:`${k}${Bt}${n}`}const A=class A{constructor(){this.authenticated=!1,this.username="",this.signOut=()=>{}}static deauthenticate(t){const e=new A;return console.log("Deauthenticating",t,A._theUser),t===A._theUser&&(localStorage.removeItem(ot),A._theUser=e),e}};A._theUser=new A;let m=A;class v extends m{constructor(t,e){super();const s=t.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),r=decodeURIComponent(window.atob(s).split("").map(function(l){return"%"+("00"+l.charCodeAt(0).toString(16)).slice(-2)}).join("")),o=JSON.parse(r);console.log("Token payload",o),this.token=t,this.authenticated=!0,this.username=o.username,this.signOut=e}static authenticate(t,e){return m._theUser=new v(t,e),localStorage.setItem(ot,t),m._theUser}static authenticateFromLocalStorage(t){const e=localStorage.getItem(ot);return e?v.authenticate(e,t):m._theUser}}class zt{constructor(t){this._base=Bt,this.json=t}base(t=""){return this._base=t,this}get(t){return fetch(this._url(t),{headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}post(t){return fetch(this._url(t),{method:"POST",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}put(t){return fetch(this._url(t),{method:"PUT",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}delete(t){return console.log(t),fetch(this._url(t),{method:"DELETE",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}_headers(){const t=this.json!==void 0,e=m._theUser.authenticated,i={"Content-Type":"application/json"};if(e){const r={Authorization:`Bearer ${m._theUser.token}`};return t?{...i,...r}:r}else return t?{...i}:void 0}_url(t){return console.log(k),k.indexOf("localhost")>0?`${qt}${t}`:`${k}${this._base}${t}`}}class ut extends zt{constructor(t){super(Object.fromEntries(t))}}class $e extends zt{constructor(){super(void 0)}}var me=Object.defineProperty,_e=Object.getOwnPropertyDescriptor,dt=(n,t,e,i)=>{for(var s=i>1?void 0:i?_e(t,e):t,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=(i?o(t,e,s):o(s))||s);return i&&s&&me(t,e,s),s};let T=class extends b{constructor(){super(...arguments),this.sort=1,this.user=v.authenticateFromLocalStorage(()=>this._signOut()),this.username="",this.notes=Array(),this.isAddNote=!1}render(){const n=$`
        <dialog>
            <form @submit=${this._handleAddNote}>
                <h2>Add Note for ${this.username}</h2>
                <input type="hidden" name="username" value="${this.username}">
                <textarea name="text" rows="10" cols="50"></textarea>
                <div>
                    <button type="submit">Add</button>
                    <button type="button" @click=${this._handleAddNoteClose}>close</button>
                </div>
                
            </form>
        </dialog>
        `;return $`
            ${this.isAddNote?n:""}
            <h2>Notes for ${this.username?`${this.username}`:"all users"}</h2>

            <div class="grid">
                <span><strong></strong></span>
                <span><strong>Created By</strong></span>
                <span><strong>Note</strong></span>
                <span><strong>Created Datetime</strong></span>
                <span><strong>Action</strong></span>

                ${ge(this.notes,t=>t._id,(t,e)=>$`
                    <span>${e+1}</span>
                    <span>${t.username}</span>
                    <!-- <span><a @click=${()=>this._getNotesByUser(t.username)}>${t.username}</a></span> -->
                    <span>${t.text}</span>
                    <span>${t.createDate.toLocaleString()}</span>
                    <span><a @click=${()=>this._deleteNote(t._id)}>Delete</a></span>
                `)}
            </div>

            <div class="grid-buttons-container">
                <div><button @click=${this._addNewNoteButtonClick}>Add New Note</button></div>
                <div>
                    <button @click=${this.toggleSort}>Sort Notes By Created Datetime</button>
                </div>
                <div><button @click=${this._signOut}>Sign out</button></div>
                <!-- ${this.username?$`
                        <button @click=${this._getAllNotes}>Show All Notes</button>
                        `:$` `} -->
            </div>
        </div>
    `}toggleSort(){this.sort*=-1,this.notes=[...this.notes.sort((n,t)=>this.sort*(n.username.localeCompare(t.username)||n._id.localeCompare(t._id)))]}connectedCallback(){console.log("connectedCallback"),this._fetchData(),super.connectedCallback()}_getNotesByUser(n){this.username!=n&&(this.username=n,this._fetchData())}_getAllNotes(){this.username&&(this.username="",this._fetchData())}_fetchData(){const n=this.username?`/notes/${this.username}`:"/notes";fetch(fe(n)).then(t=>t.status===200?t.json():null).then(t=>{console.log(t),this.notes=t})}_signOut(){this.user=m.deauthenticate(this.user),document.location.reload()}_deleteNote(n){console.log(n);const t=`/note/${n}`;new $e().delete(t).then(i=>{i.status===200?this._fetchData():console.log(i)})}_addNewNoteButtonClick(){this.isAddNote=!0,this._toggleDialog(!0)}_handleAddNoteClose(){this.isAddNote=!1,this._toggleDialog(!1)}_handleAddNote(n){n.preventDefault();const t=n.target,e=new FormData(t),i=new ut(e);console.log(e),i.base().post("/note").then(s=>{if(s.status===201)return this._fetchData(),this.isAddNote=!1,this._toggleDialog(!1),s.json();console.log(s)})}_toggleDialog(n){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("dialog");t&&(n?(console.log("Showing dialog"),t.showModal()):(console.log("Closing dialog"),t.close()))}};T.properties={notes:{type:Array},isAddNote:{type:Boolean}};T.styles=P`
        :host {
        display: contents;
        }
        .grid {
            display: grid;
            grid-template-columns: 2em 7em 3fr 1.5fr 5em;
            border-top: 1px solid black;
            border-right: 1px solid black;
        }

        .grid > span {
            padding: 8px 8px;
            border-left: 1px solid black;
            border-bottom: 1px solid black;
        }

        .grid-buttons-container{
            display: grid;
            grid-template-columns: auto auto auto;
            align-content: space-evenly;
            gap: 20px;
            padding: 10px 0;
        }

        .grid-buttons-container > div {
            /* background-color: rgba(255, 255, 255, 0.8); */
            /* text-align: center; */
            padding: 20px 0;
            font-size: 20px;
            }
        button{
            padding: 10px 20px;
            font-size: 1em;
        }

        dialog {
            display: flex;
            gap: 4rem;
            border-color: #3333;
        }
        form {
            display: grid;
            grid-template-columns: [start]  1fr [end];
            align-items: baseline;
        }
        form > label {
            display: contents;
        }
        form > h2 {
            grid-column: start / end;
            text-align: center;
        }
        form > textarea {
            padding: 10px;
            font-size: 1em;
            margin-bottom: 20px;
        }
        form > div{
            text-align: center;
        }
    `;dt([D()],T.prototype,"user",2);dt([kt()],T.prototype,"username",2);T=dt([J("note-list")],T);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ye=class extends Event{constructor(t,e,i){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.callback=e,this.subscribe=i??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class be{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,e=!1){const i=e||!Object.is(t,this.o);this.o=t,i&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[e,{disposer:i}]of this.subscriptions)e(this.o,i)},t!==void 0&&(this.value=t)}addCallback(t,e,i){if(!i)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:e});const{disposer:s}=this.subscriptions.get(t);t(this.value,s)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ve=class extends Event{constructor(t){super("context-provider",{bubbles:!0,composed:!0}),this.context=t}};class Pt extends be{constructor(t,e,i){var s,r;super(e.context!==void 0?e.initialValue:i),this.onContextRequest=o=>{const l=o.composedPath()[0];o.context===this.context&&l!==this.host&&(o.stopPropagation(),this.addCallback(o.callback,l,o.subscribe))},this.onProviderRequest=o=>{const l=o.composedPath()[0];if(o.context!==this.context||l===this.host)return;const a=new Set;for(const[c,{consumerHost:p}]of this.subscriptions)a.has(c)||(a.add(c),p.dispatchEvent(new ye(this.context,c,!0)));o.stopPropagation()},this.host=t,e.context!==void 0?this.context=e.context:this.context=e,this.attachListeners(),(r=(s=this.host).addController)==null||r.call(s,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new ve(this.context))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pt({context:n}){return(t,e)=>{const i=new WeakMap;if(typeof e=="object")return e.addInitializer(function(){i.set(this,new Pt(this,{context:n}))}),{get(){return t.get.call(this)},set(s){var r;return(r=i.get(this))==null||r.setValue(s),t.set.call(this,s)},init(s){var r;return(r=i.get(this))==null||r.setValue(s),s}};{t.constructor.addInitializer(o=>{i.set(o,new Pt(o,{context:n}))});const s=Object.getOwnPropertyDescriptor(t,e);let r;if(s===void 0){const o=new WeakMap;r={get:function(){return o.get(this)},set:function(l){i.get(this).setValue(l),o.set(this,l)},configurable:!0,enumerable:!0}}else{const o=s.set;r={...s,set:function(l){i.get(this).setValue(l),o==null||o.call(this,l)}}}return void Object.defineProperty(t,e,r)}}}var Ae=Object.defineProperty,Se=Object.getOwnPropertyDescriptor,R=(n,t,e,i)=>{for(var s=i>1?void 0:i?Se(t,e):t,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=(i?o(t,e,s):o(s))||s);return i&&s&&Ae(t,e,s),s};let Vt="auth",V=class extends b{constructor(){super(...arguments),this.loginStatus=0,this.user=v.authenticateFromLocalStorage(()=>this._signOut())}render(){return $`
        <div id="content">
          <form
          @submit=${this._handleLogin}
          @change=${()=>this.loginStatus=0}>
          <h2>Please Login</h2>
          <label>
            <span>Username</span>
            <input name="username" />
          </label>
          <label>
            <span>Password</span>
            <input type="password" name="password" />
          </label>
          <button type="submit">Sign in</button>
          <p
            >${this.loginStatus?`Login failed: ${this.loginStatus}`:""}</p
          >
        </form>
       
        </div>
        `}_handleLogin(n){n.preventDefault();const t=n.target,e=new FormData(t),i=new ut(e);console.log(e),i.base().post("/login").then(s=>{if(s.status===200)return s.json();this.loginStatus=s.status}).then(s=>{if(s){console.log("Authentication:",s.token),this.user=v.authenticate(s.token,()=>this._signOut()),console.log("this user",this.user),this.requestUpdate();const r=new CustomEvent("myLoggedIn",{detail:{myUsername:this.user.username}});this.dispatchEvent(r)}})}_signOut(){this.user=m.deauthenticate(this.user),document.location.reload()}};V.styles=P`
        :host {
        display: contents;
        }
        form {
        display: grid;
        grid-template-columns: [start] 1fr 2fr [end];
        align-items: baseline;
        }
        form > label {
        display: contents;
        }
        form > h2 {
        grid-column: start / end;
        text-align: center;
        }
        input,
        button {
        font: inherit;
        line-height: inherit;
        margin: 0.25em;
        }
        button {
        grid-column: 2;
        }
        #content {
            font-family: sans-serif;
            justify-content: center;
            margin: auto;
        }
    `;R([D()],V.prototype,"loginStatus",2);R([pt({context:Vt}),D()],V.prototype,"user",2);V=R([J("user-login")],V);let F=class extends b{constructor(){super(...arguments),this.signupStatus=0,this.user=v.authenticateFromLocalStorage(()=>this._signOut())}render(){return $`
    <div id="content">
      <form
      @submit=${this._handleSignup}
      @change=${()=>this.signupStatus=0}>
      <h2>Fill in the fields to signup</h2>
      <label>
        <span>Username</span>
        <input name="username" />
      </label>
      <label>
        <span>Password</span>
        <input type="password" name="password" />
      </label>
      <label>
        <span>First Name</span>
        <input name="firstName" />
      </label>
      <label>
        <span>Last Name</span>
        <input name="lastName" />
      </label>
      <button type="submit">Submit</button>
      <p
        >${this.signupStatus?`Signup failed: ${this.signupStatus}`:""}</p
      >
    </form>

    </div>
    `}_handleSignup(n){this.user=m.deauthenticate(this.user),n.preventDefault();const t=n.target,e=new FormData(t);new ut(e).base().post("/signup").then(s=>{if(s.status===200)return s.json();this.signupStatus=s.status}).then(s=>{if(s){console.log("Authentication:",s.token),this.user=v.authenticate(s.token,()=>this._signOut()),console.log("this user",this.user),this.requestUpdate();const r=new CustomEvent("myLoggedIn",{detail:{myUsername:this.user.username}});this.dispatchEvent(r)}})}_signOut(){this.user=m.deauthenticate(this.user),document.location.reload()}};F.styles=P`
    :host {
    display: contents;
    }
    form {
    display: grid;
    grid-template-columns: [start] 1fr 2fr [end];
    align-items: baseline;
    }
    form > label {
    display: contents;
    }
    form > h2 {
    grid-column: start / end;
    text-align: center;
    }
    input,
    button {
    font: inherit;
    line-height: inherit;
    margin: 0.25em;
    }
    button {
    grid-column: 2;
    }
    #content {
        font-family: sans-serif;
    }
`;R([D()],F.prototype,"signupStatus",2);R([pt({context:Vt}),D()],F.prototype,"user",2);F=R([J("user-signup")],F);var Ee=Object.defineProperty,xe=Object.getOwnPropertyDescriptor,we=(n,t,e,i)=>{for(var s=i>1?void 0:i?xe(t,e):t,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=(i?o(t,e,s):o(s))||s);return i&&s&&Ee(t,e,s),s};let Z=class extends b{constructor(){super(...arguments),this.isSignup=!1}render(){return $`
          <main class="page">
            <div class="userContent">
            ${this.isSignup?$`
                  <user-signup>
                  </user-signup>
                  <p><a @click=${()=>{this.isSignup=!1}}>Click here</a> to login</p>
                `:$`
                  <user-login @myLoggedIn=${this._handleLoggedIn}></user-login> 
                  <p>Don't have an account?  <a @click=${()=>{this.isSignup=!0}}>Click here</a> to signup</p>
                `}
                </div>
          </main>
        `}_handleLoggedIn(n){const t=n.detail;console.log("user-page, myLoggedIn",t),this.requestUpdate();const e=new CustomEvent("myLoggedIn",{detail:{myUsername:t.myUsername}});this.dispatchEvent(e)}};Z.properties={isSignup:{type:Boolean}};Z.styles=[P`
          :host {
            display: contents;
          }
        `,P`
         .userContent {
            width:30em;
            font-family: sans-serif;
            justify-content: center;
            margin: auto;
        }
        `];Z=we([J("user-page")],Z);var Pe=Object.defineProperty,Ce=Object.getOwnPropertyDescriptor,Ft=(n,t,e,i)=>{for(var s=i>1?void 0:i?Ce(t,e):t,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=(i?o(t,e,s):o(s))||s);return i&&s&&Pe(t,e,s),s};let Oe="auth",G=class extends b{constructor(){super(...arguments),this.user=v.authenticateFromLocalStorage(()=>this._signOut())}isAuthenticated(){return console.log("this.user",this.user.authenticated),this.user.authenticated}_signOut(){this.user=m.deauthenticate(this.user),document.location.reload()}render(){const n=$`
        <main class="page">
          <div class="notesContent">
              <note-list username="${this.user.username}">
              </note-list>
          </div>
        </main>
        `;return $`${this.isAuthenticated()?n:$`<user-page @myLoggedIn=${this._handleLoggedIn}></user-page>`}`}_handleLoggedIn(n){const t=n.detail;console.log("note-page, myLoggedIn",t),t.myUsername&&document.location.reload()}};G.styles=[P`
          :host {
            display: contents;
          }
        `,P`
         .notesContent {
            width:55em;
            font-family: sans-serif;
            justify-content: center;
            margin: auto;
        }
        `];Ft([pt({context:Oe}),D()],G.prototype,"user",2);G=Ft([J("notes-page")],G);

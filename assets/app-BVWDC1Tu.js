/**
* @vue/shared v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Qi(e,t){const a=new Set(e.split(","));return t?s=>a.has(s.toLowerCase()):s=>a.has(s)}const Te={},Ra=[],dt=()=>{},Yd=()=>!1,Ls=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Yi=e=>e.startsWith("onUpdate:"),Ce=Object.assign,Zi=(e,t)=>{const a=e.indexOf(t);a>-1&&e.splice(a,1)},Zd=Object.prototype.hasOwnProperty,me=(e,t)=>Zd.call(e,t),X=Array.isArray,Va=e=>xr(e)==="[object Map]",Il=e=>xr(e)==="[object Set]",se=e=>typeof e=="function",Oe=e=>typeof e=="string",Ya=e=>typeof e=="symbol",Ae=e=>e!==null&&typeof e=="object",Ll=e=>(Ae(e)||se(e))&&se(e.then)&&se(e.catch),Sl=Object.prototype.toString,xr=e=>Sl.call(e),Xd=e=>xr(e).slice(8,-1),Pl=e=>xr(e)==="[object Object]",Xi=e=>Oe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ca=Qi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Tr=e=>{const t=Object.create(null);return a=>t[a]||(t[a]=e(a))},ep=/-(\w)/g,it=Tr(e=>e.replace(ep,(t,a)=>a?a.toUpperCase():"")),tp=/\B([A-Z])/g,na=Tr(e=>e.replace(tp,"-$1").toLowerCase()),Ss=Tr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Kr=Tr(e=>e?`on${Ss(e)}`:""),Pt=(e,t)=>!Object.is(e,t),ur=(e,t)=>{for(let a=0;a<e.length;a++)e[a](t)},pr=(e,t,a)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:a})},ki=e=>{const t=parseFloat(e);return isNaN(t)?e:t},ap=e=>{const t=Oe(e)?Number(e):NaN;return isNaN(t)?e:t};let so;const Dl=()=>so||(so=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ar(e){if(X(e)){const t={};for(let a=0;a<e.length;a++){const s=e[a],i=Oe(s)?np(s):Ar(s);if(i)for(const n in i)t[n]=i[n]}return t}else if(Oe(e)||Ae(e))return e}const sp=/;(?![^(]*\))/g,rp=/:([^]+)/,ip=/\/\*[^]*?\*\//g;function np(e){const t={};return e.replace(ip,"").split(sp).forEach(a=>{if(a){const s=a.split(rp);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function jr(e){let t="";if(Oe(e))t=e;else if(X(e))for(let a=0;a<e.length;a++){const s=jr(e[a]);s&&(t+=s+" ")}else if(Ae(e))for(const a in e)e[a]&&(t+=a+" ");return t.trim()}function c3(e){if(!e)return null;let{class:t,style:a}=e;return t&&!Oe(t)&&(e.class=jr(t)),a&&(e.style=Ar(a)),e}const op="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",lp=Qi(op);function Ol(e){return!!e||e===""}const u3=e=>Oe(e)?e:e==null?"":X(e)||Ae(e)&&(e.toString===Sl||!se(e.toString))?JSON.stringify(e,Rl,2):String(e),Rl=(e,t)=>t&&t.__v_isRef?Rl(e,t.value):Va(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((a,[s,i],n)=>(a[Qr(s,n)+" =>"]=i,a),{})}:Il(t)?{[`Set(${t.size})`]:[...t.values()].map(a=>Qr(a))}:Ya(t)?Qr(t):Ae(t)&&!X(t)&&!Pl(t)?String(t):t,Qr=(e,t="")=>{var a;return Ya(e)?`Symbol(${(a=e.description)!=null?a:t})`:e};/**
* @vue/reactivity v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let at;class cp{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=at,!t&&at&&(this.index=(at.scopes||(at.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const a=at;try{return at=this,t()}finally{at=a}}}on(){at=this}off(){at=this.parent}stop(t){if(this._active){let a,s;for(a=0,s=this.effects.length;a<s;a++)this.effects[a].stop();for(a=0,s=this.cleanups.length;a<s;a++)this.cleanups[a]();if(this.scopes)for(a=0,s=this.scopes.length;a<s;a++)this.scopes[a].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function up(e,t=at){t&&t.active&&t.effects.push(e)}function Vl(){return at}function dp(e){at&&at.cleanups.push(e)}let _a;class en{constructor(t,a,s,i){this.fn=t,this.trigger=a,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,up(this,i)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,xa();for(let t=0;t<this._depsLength;t++){const a=this.deps[t];if(a.computed&&(pp(a.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Ta()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=aa,a=_a;try{return aa=!0,_a=this,this._runnings++,ro(this),this.fn()}finally{io(this),this._runnings--,_a=a,aa=t}}stop(){var t;this.active&&(ro(this),io(this),(t=this.onStop)==null||t.call(this),this.active=!1)}}function pp(e){return e.value}function ro(e){e._trackId++,e._depsLength=0}function io(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)Cl(e.deps[t],e);e.deps.length=e._depsLength}}function Cl(e,t){const a=e.get(t);a!==void 0&&t._trackId!==a&&(e.delete(t),e.size===0&&e.cleanup())}let aa=!0,xi=0;const Ml=[];function xa(){Ml.push(aa),aa=!1}function Ta(){const e=Ml.pop();aa=e===void 0?!0:e}function tn(){xi++}function an(){for(xi--;!xi&&Ti.length;)Ti.shift()()}function Hl(e,t,a){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const s=e.deps[e._depsLength];s!==t?(s&&Cl(s,e),e.deps[e._depsLength++]=t):e._depsLength++}}const Ti=[];function Nl(e,t,a){tn();for(const s of e.keys()){let i;s._dirtyLevel<t&&(i??(i=e.get(s)===s._trackId))&&(s._shouldSchedule||(s._shouldSchedule=s._dirtyLevel===0),s._dirtyLevel=t),s._shouldSchedule&&(i??(i=e.get(s)===s._trackId))&&(s.trigger(),(!s._runnings||s.allowRecurse)&&s._dirtyLevel!==2&&(s._shouldSchedule=!1,s.scheduler&&Ti.push(s.scheduler)))}an()}const zl=(e,t)=>{const a=new Map;return a.cleanup=e,a.computed=t,a},mr=new WeakMap,ba=Symbol(""),Ai=Symbol("");function Ze(e,t,a){if(aa&&_a){let s=mr.get(e);s||mr.set(e,s=new Map);let i=s.get(a);i||s.set(a,i=zl(()=>s.delete(a))),Hl(_a,i)}}function zt(e,t,a,s,i,n){const o=mr.get(e);if(!o)return;let c=[];if(t==="clear")c=[...o.values()];else if(a==="length"&&X(e)){const u=Number(s);o.forEach((d,p)=>{(p==="length"||!Ya(p)&&p>=u)&&c.push(d)})}else switch(a!==void 0&&c.push(o.get(a)),t){case"add":X(e)?Xi(a)&&c.push(o.get("length")):(c.push(o.get(ba)),Va(e)&&c.push(o.get(Ai)));break;case"delete":X(e)||(c.push(o.get(ba)),Va(e)&&c.push(o.get(Ai)));break;case"set":Va(e)&&c.push(o.get(ba));break}tn();for(const u of c)u&&Nl(u,4);an()}function mp(e,t){var a;return(a=mr.get(e))==null?void 0:a.get(t)}const hp=Qi("__proto__,__v_isRef,__isVue"),Bl=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ya)),no=fp();function fp(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...a){const s=ue(this);for(let n=0,o=this.length;n<o;n++)Ze(s,"get",n+"");const i=s[t](...a);return i===-1||i===!1?s[t](...a.map(ue)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...a){xa(),tn();const s=ue(this)[t].apply(this,a);return an(),Ta(),s}}),e}function wp(e){const t=ue(this);return Ze(t,"has",e),t.hasOwnProperty(e)}class Fl{constructor(t=!1,a=!1){this._isReadonly=t,this._shallow=a}get(t,a,s){const i=this._isReadonly,n=this._shallow;if(a==="__v_isReactive")return!i;if(a==="__v_isReadonly")return i;if(a==="__v_isShallow")return n;if(a==="__v_raw")return s===(i?n?Lp:Gl:n?Wl:ql).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const o=X(t);if(!i){if(o&&me(no,a))return Reflect.get(no,a,s);if(a==="hasOwnProperty")return wp}const c=Reflect.get(t,a,s);return(Ya(a)?Bl.has(a):hp(a))||(i||Ze(t,"get",a),n)?c:He(c)?o&&Xi(a)?c:c.value:Ae(c)?i?oa(c):Ps(c):c}}class $l extends Fl{constructor(t=!1){super(!1,t)}set(t,a,s,i){let n=t[a];if(!this._shallow){const u=qa(n);if(!hr(s)&&!qa(s)&&(n=ue(n),s=ue(s)),!X(t)&&He(n)&&!He(s))return u?!1:(n.value=s,!0)}const o=X(t)&&Xi(a)?Number(a)<t.length:me(t,a),c=Reflect.set(t,a,s,i);return t===ue(i)&&(o?Pt(s,n)&&zt(t,"set",a,s):zt(t,"add",a,s)),c}deleteProperty(t,a){const s=me(t,a);t[a];const i=Reflect.deleteProperty(t,a);return i&&s&&zt(t,"delete",a,void 0),i}has(t,a){const s=Reflect.has(t,a);return(!Ya(a)||!Bl.has(a))&&Ze(t,"has",a),s}ownKeys(t){return Ze(t,"iterate",X(t)?"length":ba),Reflect.ownKeys(t)}}class gp extends Fl{constructor(t=!1){super(!0,t)}set(t,a){return!0}deleteProperty(t,a){return!0}}const vp=new $l,yp=new gp,_p=new $l(!0),sn=e=>e,Ir=e=>Reflect.getPrototypeOf(e);function Us(e,t,a=!1,s=!1){e=e.__v_raw;const i=ue(e),n=ue(t);a||(Pt(t,n)&&Ze(i,"get",t),Ze(i,"get",n));const{has:o}=Ir(i),c=s?sn:a?on:gs;if(o.call(i,t))return c(e.get(t));if(o.call(i,n))return c(e.get(n));e!==i&&e.get(t)}function Js(e,t=!1){const a=this.__v_raw,s=ue(a),i=ue(e);return t||(Pt(e,i)&&Ze(s,"has",e),Ze(s,"has",i)),e===i?a.has(e):a.has(e)||a.has(i)}function Ks(e,t=!1){return e=e.__v_raw,!t&&Ze(ue(e),"iterate",ba),Reflect.get(e,"size",e)}function oo(e){e=ue(e);const t=ue(this);return Ir(t).has.call(t,e)||(t.add(e),zt(t,"add",e,e)),this}function lo(e,t){t=ue(t);const a=ue(this),{has:s,get:i}=Ir(a);let n=s.call(a,e);n||(e=ue(e),n=s.call(a,e));const o=i.call(a,e);return a.set(e,t),n?Pt(t,o)&&zt(a,"set",e,t):zt(a,"add",e,t),this}function co(e){const t=ue(this),{has:a,get:s}=Ir(t);let i=a.call(t,e);i||(e=ue(e),i=a.call(t,e)),s&&s.call(t,e);const n=t.delete(e);return i&&zt(t,"delete",e,void 0),n}function uo(){const e=ue(this),t=e.size!==0,a=e.clear();return t&&zt(e,"clear",void 0,void 0),a}function Qs(e,t){return function(s,i){const n=this,o=n.__v_raw,c=ue(o),u=t?sn:e?on:gs;return!e&&Ze(c,"iterate",ba),o.forEach((d,p)=>s.call(i,u(d),u(p),n))}}function Ys(e,t,a){return function(...s){const i=this.__v_raw,n=ue(i),o=Va(n),c=e==="entries"||e===Symbol.iterator&&o,u=e==="keys"&&o,d=i[e](...s),p=a?sn:t?on:gs;return!t&&Ze(n,"iterate",u?Ai:ba),{next(){const{value:m,done:h}=d.next();return h?{value:m,done:h}:{value:c?[p(m[0]),p(m[1])]:p(m),done:h}},[Symbol.iterator](){return this}}}}function Wt(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function bp(){const e={get(n){return Us(this,n)},get size(){return Ks(this)},has:Js,add:oo,set:lo,delete:co,clear:uo,forEach:Qs(!1,!1)},t={get(n){return Us(this,n,!1,!0)},get size(){return Ks(this)},has:Js,add:oo,set:lo,delete:co,clear:uo,forEach:Qs(!1,!0)},a={get(n){return Us(this,n,!0)},get size(){return Ks(this,!0)},has(n){return Js.call(this,n,!0)},add:Wt("add"),set:Wt("set"),delete:Wt("delete"),clear:Wt("clear"),forEach:Qs(!0,!1)},s={get(n){return Us(this,n,!0,!0)},get size(){return Ks(this,!0)},has(n){return Js.call(this,n,!0)},add:Wt("add"),set:Wt("set"),delete:Wt("delete"),clear:Wt("clear"),forEach:Qs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(n=>{e[n]=Ys(n,!1,!1),a[n]=Ys(n,!0,!1),t[n]=Ys(n,!1,!0),s[n]=Ys(n,!0,!0)}),[e,a,t,s]}const[Ep,kp,xp,Tp]=bp();function rn(e,t){const a=t?e?Tp:xp:e?kp:Ep;return(s,i,n)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?s:Reflect.get(me(a,i)&&i in s?a:s,i,n)}const Ap={get:rn(!1,!1)},jp={get:rn(!1,!0)},Ip={get:rn(!0,!1)},ql=new WeakMap,Wl=new WeakMap,Gl=new WeakMap,Lp=new WeakMap;function Sp(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Pp(e){return e.__v_skip||!Object.isExtensible(e)?0:Sp(Xd(e))}function Ps(e){return qa(e)?e:nn(e,!1,vp,Ap,ql)}function Ul(e){return nn(e,!1,_p,jp,Wl)}function oa(e){return nn(e,!0,yp,Ip,Gl)}function nn(e,t,a,s,i){if(!Ae(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const n=i.get(e);if(n)return n;const o=Pp(e);if(o===0)return e;const c=new Proxy(e,o===2?s:a);return i.set(e,c),c}function Ma(e){return qa(e)?Ma(e.__v_raw):!!(e&&e.__v_isReactive)}function qa(e){return!!(e&&e.__v_isReadonly)}function hr(e){return!!(e&&e.__v_isShallow)}function Jl(e){return Ma(e)||qa(e)}function ue(e){const t=e&&e.__v_raw;return t?ue(t):e}function Kl(e){return Object.isExtensible(e)&&pr(e,"__v_skip",!0),e}const gs=e=>Ae(e)?Ps(e):e,on=e=>Ae(e)?oa(e):e;class Ql{constructor(t,a,s,i){this._setter=a,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new en(()=>t(this._value),()=>cs(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const t=ue(this);return(!t._cacheable||t.effect.dirty)&&Pt(t._value,t._value=t.effect.run())&&cs(t,4),ln(t),t.effect._dirtyLevel>=2&&cs(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function Dp(e,t,a=!1){let s,i;const n=se(e);return n?(s=e,i=dt):(s=e.get,i=e.set),new Ql(s,i,n||!i,a)}function ln(e){var t;aa&&_a&&(e=ue(e),Hl(_a,(t=e.dep)!=null?t:e.dep=zl(()=>e.dep=void 0,e instanceof Ql?e:void 0)))}function cs(e,t=4,a){e=ue(e);const s=e.dep;s&&Nl(s,t)}function He(e){return!!(e&&e.__v_isRef===!0)}function q(e){return Yl(e,!1)}function le(e){return Yl(e,!0)}function Yl(e,t){return He(e)?e:new Op(e,t)}class Op{constructor(t,a){this.__v_isShallow=a,this.dep=void 0,this.__v_isRef=!0,this._rawValue=a?t:ue(t),this._value=a?t:gs(t)}get value(){return ln(this),this._value}set value(t){const a=this.__v_isShallow||hr(t)||qa(t);t=a?t:ue(t),Pt(t,this._rawValue)&&(this._rawValue=t,this._value=a?t:gs(t),cs(this,4))}}function gt(e){return He(e)?e.value:e}const Rp={get:(e,t,a)=>gt(Reflect.get(e,t,a)),set:(e,t,a,s)=>{const i=e[t];return He(i)&&!He(a)?(i.value=a,!0):Reflect.set(e,t,a,s)}};function Zl(e){return Ma(e)?e:new Proxy(e,Rp)}class Vp{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:a,set:s}=t(()=>ln(this),()=>cs(this));this._get=a,this._set=s}get value(){return this._get()}set value(t){this._set(t)}}function Lr(e){return new Vp(e)}class Cp{constructor(t,a,s){this._object=t,this._key=a,this._defaultValue=s,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return mp(ue(this._object),this._key)}}class Mp{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Za(e,t,a){return He(e)?e:se(e)?new Mp(e):Ae(e)&&arguments.length>1?Hp(e,t,a):q(e)}function Hp(e,t,a){const s=e[t];return He(s)?s:new Cp(e,t,a)}/**
* @vue/runtime-core v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function sa(e,t,a,s){try{return s?e(...s):e()}catch(i){Ds(i,t,a)}}function pt(e,t,a,s){if(se(e)){const n=sa(e,t,a,s);return n&&Ll(n)&&n.catch(o=>{Ds(o,t,a)}),n}const i=[];for(let n=0;n<e.length;n++)i.push(pt(e[n],t,a,s));return i}function Ds(e,t,a,s=!0){const i=t?t.vnode:null;if(t){let n=t.parent;const o=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${a}`;for(;n;){const d=n.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](e,o,c)===!1)return}n=n.parent}const u=t.appContext.config.errorHandler;if(u){sa(u,null,10,[e,o,c]);return}}Np(e,a,i,s)}function Np(e,t,a,s=!0){console.error(e)}let vs=!1,ji=!1;const qe=[];let Lt=0;const Ha=[];let Yt=null,fa=0;const Xl=Promise.resolve();let cn=null;function Ft(e){const t=cn||Xl;return e?t.then(this?e.bind(this):e):t}function zp(e){let t=Lt+1,a=qe.length;for(;t<a;){const s=t+a>>>1,i=qe[s],n=ys(i);n<e||n===e&&i.pre?t=s+1:a=s}return t}function Sr(e){(!qe.length||!qe.includes(e,vs&&e.allowRecurse?Lt+1:Lt))&&(e.id==null?qe.push(e):qe.splice(zp(e.id),0,e),ec())}function ec(){!vs&&!ji&&(ji=!0,cn=Xl.then(tc))}function Bp(e){const t=qe.indexOf(e);t>Lt&&qe.splice(t,1)}function Fp(e){X(e)?Ha.push(...e):(!Yt||!Yt.includes(e,e.allowRecurse?fa+1:fa))&&Ha.push(e),ec()}function po(e,t,a=vs?Lt+1:0){for(;a<qe.length;a++){const s=qe[a];if(s&&s.pre){if(e&&s.id!==e.uid)continue;qe.splice(a,1),a--,s()}}}function fr(e){if(Ha.length){const t=[...new Set(Ha)].sort((a,s)=>ys(a)-ys(s));if(Ha.length=0,Yt){Yt.push(...t);return}for(Yt=t,fa=0;fa<Yt.length;fa++)Yt[fa]();Yt=null,fa=0}}const ys=e=>e.id==null?1/0:e.id,$p=(e,t)=>{const a=ys(e)-ys(t);if(a===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return a};function tc(e){ji=!1,vs=!0,qe.sort($p);try{for(Lt=0;Lt<qe.length;Lt++){const t=qe[Lt];t&&t.active!==!1&&sa(t,null,14)}}finally{Lt=0,qe.length=0,fr(),vs=!1,cn=null,(qe.length||Ha.length)&&tc()}}function qp(e,t,...a){if(e.isUnmounted)return;const s=e.vnode.props||Te;let i=a;const n=t.startsWith("update:"),o=n&&t.slice(7);if(o&&o in s){const p=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:h}=s[p]||Te;h&&(i=a.map(f=>Oe(f)?f.trim():f)),m&&(i=a.map(ki))}let c,u=s[c=Kr(t)]||s[c=Kr(it(t))];!u&&n&&(u=s[c=Kr(na(t))]),u&&pt(u,e,6,i);const d=s[c+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,pt(d,e,6,i)}}function ac(e,t,a=!1){const s=t.emitsCache,i=s.get(e);if(i!==void 0)return i;const n=e.emits;let o={},c=!1;if(!se(e)){const u=d=>{const p=ac(d,t,!0);p&&(c=!0,Ce(o,p))};!a&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!n&&!c?(Ae(e)&&s.set(e,null),null):(X(n)?n.forEach(u=>o[u]=null):Ce(o,n),Ae(e)&&s.set(e,o),o)}function Pr(e,t){return!e||!Ls(t)?!1:(t=t.slice(2).replace(/Once$/,""),me(e,t[0].toLowerCase()+t.slice(1))||me(e,na(t))||me(e,t))}let Me=null,Dr=null;function wr(e){const t=Me;return Me=e,Dr=e&&e.type.__scopeId||null,t}function d3(e){Dr=e}function p3(){Dr=null}function Wp(e,t=Me,a){if(!t||e._n)return e;const s=(...i)=>{s._d&&xo(-1);const n=wr(t);let o;try{o=e(...i)}finally{wr(n),s._d&&xo(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Yr(e){const{type:t,vnode:a,proxy:s,withProxy:i,props:n,propsOptions:[o],slots:c,attrs:u,emit:d,render:p,renderCache:m,data:h,setupState:f,ctx:g,inheritAttrs:E}=e;let k,y;const T=wr(e);try{if(a.shapeFlag&4){const j=i||s,C=j;k=wt(p.call(C,j,m,n,f,h,g)),y=u}else{const j=t;k=wt(j.length>1?j(n,{attrs:u,slots:c,emit:d}):j(n,null)),y=t.props?u:Gp(u)}}catch(j){ms.length=0,Ds(j,e,1),k=De(rt)}let b=k;if(y&&E!==!1){const j=Object.keys(y),{shapeFlag:C}=b;j.length&&C&7&&(o&&j.some(Yi)&&(y=Up(y,o)),b=ra(b,y))}return a.dirs&&(b=ra(b),b.dirs=b.dirs?b.dirs.concat(a.dirs):a.dirs),a.transition&&(b.transition=a.transition),k=b,wr(T),k}const Gp=e=>{let t;for(const a in e)(a==="class"||a==="style"||Ls(a))&&((t||(t={}))[a]=e[a]);return t},Up=(e,t)=>{const a={};for(const s in e)(!Yi(s)||!(s.slice(9)in t))&&(a[s]=e[s]);return a};function Jp(e,t,a){const{props:s,children:i,component:n}=e,{props:o,children:c,patchFlag:u}=t,d=n.emitsOptions;if(t.dirs||t.transition)return!0;if(a&&u>=0){if(u&1024)return!0;if(u&16)return s?mo(s,o,d):!!o;if(u&8){const p=t.dynamicProps;for(let m=0;m<p.length;m++){const h=p[m];if(o[h]!==s[h]&&!Pr(d,h))return!0}}}else return(i||c)&&(!c||!c.$stable)?!0:s===o?!1:s?o?mo(s,o,d):!0:!!o;return!1}function mo(e,t,a){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let i=0;i<s.length;i++){const n=s[i];if(t[n]!==e[n]&&!Pr(a,n))return!0}return!1}function Kp({vnode:e,parent:t},a){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=a,t=t.parent;else break}}const sc="components";function st(e,t){return Yp(sc,e,!0,t)||e}const Qp=Symbol.for("v-ndc");function Yp(e,t,a=!0,s=!1){const i=Me||Be;if(i){const n=i.type;if(e===sc){const c=Wm(n,!1);if(c&&(c===t||c===it(t)||c===Ss(it(t))))return n}const o=ho(i[e]||n[e],t)||ho(i.appContext[e],t);return!o&&s?n:o}}function ho(e,t){return e&&(e[t]||e[it(t)]||e[Ss(it(t))])}const Zp=e=>e.__isSuspense;function rc(e,t){t&&t.pendingBranch?X(e)?t.effects.push(...e):t.effects.push(e):Fp(e)}const Xp=Symbol.for("v-scx"),em=()=>fe(Xp);function un(e,t){return Or(e,null,t)}function tm(e,t){return Or(e,null,{flush:"sync"})}const Zs={};function re(e,t,a){return Or(e,t,a)}function Or(e,t,{immediate:a,deep:s,flush:i,once:n,onTrack:o,onTrigger:c}=Te){if(t&&n){const A=t;t=(...V)=>{A(...V),C()}}const u=Be,d=A=>s===!0?A:va(A,s===!1?1:void 0);let p,m=!1,h=!1;if(He(e)?(p=()=>e.value,m=hr(e)):Ma(e)?(p=()=>d(e),m=!0):X(e)?(h=!0,m=e.some(A=>Ma(A)||hr(A)),p=()=>e.map(A=>{if(He(A))return A.value;if(Ma(A))return d(A);if(se(A))return sa(A,u,2)})):se(e)?t?p=()=>sa(e,u,2):p=()=>(f&&f(),pt(e,u,3,[g])):p=dt,t&&s){const A=p;p=()=>va(A())}let f,g=A=>{f=b.onStop=()=>{sa(A,u,4),f=b.onStop=void 0}},E;if(Vs)if(g=dt,t?a&&pt(t,u,3,[p(),h?[]:void 0,g]):p(),i==="sync"){const A=em();E=A.__watcherHandles||(A.__watcherHandles=[])}else return dt;let k=h?new Array(e.length).fill(Zs):Zs;const y=()=>{if(!(!b.active||!b.dirty))if(t){const A=b.run();(s||m||(h?A.some((V,O)=>Pt(V,k[O])):Pt(A,k)))&&(f&&f(),pt(t,u,3,[A,k===Zs?void 0:h&&k[0]===Zs?[]:k,g]),k=A)}else b.run()};y.allowRecurse=!!t;let T;i==="sync"?T=y:i==="post"?T=()=>Ke(y,u&&u.suspense):(y.pre=!0,u&&(y.id=u.uid),T=()=>Sr(y));const b=new en(p,dt,T),j=Vl(),C=()=>{b.stop(),j&&Zi(j.effects,b)};return t?a?y():k=b.run():i==="post"?Ke(b.run.bind(b),u&&u.suspense):b.run(),E&&E.push(C),C}function am(e,t,a){const s=this.proxy,i=Oe(e)?e.includes(".")?ic(s,e):()=>s[e]:e.bind(s,s);let n;se(t)?n=t:(n=t.handler,a=t);const o=Rs(this),c=Or(i,n.bind(s),a);return o(),c}function ic(e,t){const a=t.split(".");return()=>{let s=e;for(let i=0;i<a.length&&s;i++)s=s[a[i]];return s}}function va(e,t,a=0,s){if(!Ae(e)||e.__v_skip)return e;if(t&&t>0){if(a>=t)return e;a++}if(s=s||new Set,s.has(e))return e;if(s.add(e),He(e))va(e.value,t,a,s);else if(X(e))for(let i=0;i<e.length;i++)va(e[i],t,a,s);else if(Il(e)||Va(e))e.forEach(i=>{va(i,t,a,s)});else if(Pl(e))for(const i in e)va(e[i],t,a,s);return e}function m3(e,t){if(Me===null)return e;const a=Cr(Me)||Me.proxy,s=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[n,o,c,u=Te]=t[i];n&&(se(n)&&(n={mounted:n,updated:n}),n.deep&&va(o),s.push({dir:n,instance:a,value:o,oldValue:void 0,arg:c,modifiers:u}))}return e}function It(e,t,a,s){const i=e.dirs,n=t&&t.dirs;for(let o=0;o<i.length;o++){const c=i[o];n&&(c.oldValue=n[o].value);let u=c.dir[s];u&&(xa(),pt(u,a,8,[e.el,c,e,t]),Ta())}}const Zt=Symbol("_leaveCb"),Xs=Symbol("_enterCb");function nc(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ie(()=>{e.isMounted=!0}),dc(()=>{e.isUnmounting=!0}),e}const lt=[Function,Array],oc={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:lt,onEnter:lt,onAfterEnter:lt,onEnterCancelled:lt,onBeforeLeave:lt,onLeave:lt,onAfterLeave:lt,onLeaveCancelled:lt,onBeforeAppear:lt,onAppear:lt,onAfterAppear:lt,onAppearCancelled:lt},sm={name:"BaseTransition",props:oc,setup(e,{slots:t}){const a=Aa(),s=nc();let i;return()=>{const n=t.default&&dn(t.default(),!0);if(!n||!n.length)return;let o=n[0];if(n.length>1){for(const E of n)if(E.type!==rt){o=E;break}}const c=ue(e),{mode:u}=c;if(s.isLeaving)return Zr(o);const d=fo(o);if(!d)return Zr(o);const p=_s(d,c,s,a);bs(d,p);const m=a.subTree,h=m&&fo(m);let f=!1;const{getTransitionKey:g}=d.type;if(g){const E=g();i===void 0?i=E:E!==i&&(i=E,f=!0)}if(h&&h.type!==rt&&(!ga(d,h)||f)){const E=_s(h,c,s,a);if(bs(h,E),u==="out-in")return s.isLeaving=!0,E.afterLeave=()=>{s.isLeaving=!1,a.update.active!==!1&&(a.effect.dirty=!0,a.update())},Zr(o);u==="in-out"&&d.type!==rt&&(E.delayLeave=(k,y,T)=>{const b=lc(s,h);b[String(h.key)]=h,k[Zt]=()=>{y(),k[Zt]=void 0,delete p.delayedLeave},p.delayedLeave=T})}return o}}},rm=sm;function lc(e,t){const{leavingVNodes:a}=e;let s=a.get(t.type);return s||(s=Object.create(null),a.set(t.type,s)),s}function _s(e,t,a,s){const{appear:i,mode:n,persisted:o=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:m,onLeave:h,onAfterLeave:f,onLeaveCancelled:g,onBeforeAppear:E,onAppear:k,onAfterAppear:y,onAppearCancelled:T}=t,b=String(e.key),j=lc(a,e),C=(O,M)=>{O&&pt(O,s,9,M)},A=(O,M)=>{const B=M[1];C(O,M),X(O)?O.every(Q=>Q.length<=1)&&B():O.length<=1&&B()},V={mode:n,persisted:o,beforeEnter(O){let M=c;if(!a.isMounted)if(i)M=E||c;else return;O[Zt]&&O[Zt](!0);const B=j[b];B&&ga(e,B)&&B.el[Zt]&&B.el[Zt](),C(M,[O])},enter(O){let M=u,B=d,Q=p;if(!a.isMounted)if(i)M=k||u,B=y||d,Q=T||p;else return;let N=!1;const ee=O[Xs]=Se=>{N||(N=!0,Se?C(Q,[O]):C(B,[O]),V.delayedLeave&&V.delayedLeave(),O[Xs]=void 0)};M?A(M,[O,ee]):ee()},leave(O,M){const B=String(e.key);if(O[Xs]&&O[Xs](!0),a.isUnmounting)return M();C(m,[O]);let Q=!1;const N=O[Zt]=ee=>{Q||(Q=!0,M(),ee?C(g,[O]):C(f,[O]),O[Zt]=void 0,j[B]===e&&delete j[B])};j[B]=e,h?A(h,[O,N]):N()},clone(O){return _s(O,t,a,s)}};return V}function Zr(e){if(Os(e))return e=ra(e),e.children=null,e}function fo(e){return Os(e)?e.children?e.children[0]:void 0:e}function bs(e,t){e.shapeFlag&6&&e.component?bs(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function dn(e,t=!1,a){let s=[],i=0;for(let n=0;n<e.length;n++){let o=e[n];const c=a==null?o.key:String(a)+String(o.key!=null?o.key:n);o.type===Ue?(o.patchFlag&128&&i++,s=s.concat(dn(o.children,t,c))):(t||o.type!==rt)&&s.push(c!=null?ra(o,{key:c}):o)}if(i>1)for(let n=0;n<s.length;n++)s[n].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function D(e,t){return se(e)?Ce({name:e.name},t,{setup:e}):e}const Na=e=>!!e.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function wa(e){se(e)&&(e={loader:e});const{loader:t,loadingComponent:a,errorComponent:s,delay:i=200,timeout:n,suspensible:o=!0,onError:c}=e;let u=null,d,p=0;const m=()=>(p++,u=null,h()),h=()=>{let f;return u||(f=u=t().catch(g=>{if(g=g instanceof Error?g:new Error(String(g)),c)return new Promise((E,k)=>{c(g,()=>E(m()),()=>k(g),p+1)});throw g}).then(g=>f!==u&&u?u:(g&&(g.__esModule||g[Symbol.toStringTag]==="Module")&&(g=g.default),d=g,g)))};return D({name:"AsyncComponentWrapper",__asyncLoader:h,get __asyncResolved(){return d},setup(){const f=Be;if(d)return()=>Xr(d,f);const g=T=>{u=null,Ds(T,f,13,!s)};if(o&&f.suspense||Vs)return h().then(T=>()=>Xr(T,f)).catch(T=>(g(T),()=>s?De(s,{error:T}):null));const E=q(!1),k=q(),y=q(!!i);return i&&setTimeout(()=>{y.value=!1},i),n!=null&&setTimeout(()=>{if(!E.value&&!k.value){const T=new Error(`Async component timed out after ${n}ms.`);g(T),k.value=T}},n),h().then(()=>{E.value=!0,f.parent&&Os(f.parent.vnode)&&(f.parent.effect.dirty=!0,Sr(f.parent.update))}).catch(T=>{g(T),k.value=T}),()=>{if(E.value&&d)return Xr(d,f);if(k.value&&s)return De(s,{error:k.value});if(a&&!y.value)return De(a)}}})}function Xr(e,t){const{ref:a,props:s,children:i,ce:n}=t.vnode,o=De(e,s,i);return o.ref=a,o.ce=n,delete t.vnode.ce,o}const Os=e=>e.type.__isKeepAlive;function im(e,t){cc(e,"a",t)}function nm(e,t){cc(e,"da",t)}function cc(e,t,a=Be){const s=e.__wdc||(e.__wdc=()=>{let i=a;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Rr(t,s,a),a){let i=a.parent;for(;i&&i.parent;)Os(i.parent.vnode)&&om(s,t,a,i),i=i.parent}}function om(e,t,a,s){const i=Rr(t,e,s,!0);Dt(()=>{Zi(s[t],i)},a)}function Rr(e,t,a=Be,s=!1){if(a){const i=a[e]||(a[e]=[]),n=t.__weh||(t.__weh=(...o)=>{if(a.isUnmounted)return;xa();const c=Rs(a),u=pt(t,a,e,o);return c(),Ta(),u});return s?i.unshift(n):i.push(n),n}}const $t=e=>(t,a=Be)=>(!Vs||e==="sp")&&Rr(e,(...s)=>t(...s),a),lm=$t("bm"),ie=$t("m"),cm=$t("bu"),uc=$t("u"),dc=$t("bum"),Dt=$t("um"),um=$t("sp"),dm=$t("rtg"),pm=$t("rtc");function mm(e,t=Be){Rr("ec",e,t)}function h3(e,t,a,s){let i;const n=a&&a[s];if(X(e)||Oe(e)){i=new Array(e.length);for(let o=0,c=e.length;o<c;o++)i[o]=t(e[o],o,void 0,n&&n[o])}else if(typeof e=="number"){i=new Array(e);for(let o=0;o<e;o++)i[o]=t(o+1,o,void 0,n&&n[o])}else if(Ae(e))if(e[Symbol.iterator])i=Array.from(e,(o,c)=>t(o,c,void 0,n&&n[c]));else{const o=Object.keys(e);i=new Array(o.length);for(let c=0,u=o.length;c<u;c++){const d=o[c];i[c]=t(e[d],d,c,n&&n[c])}}else i=[];return a&&(a[s]=i),i}function f3(e,t,a={},s,i){if(Me.isCE||Me.parent&&Na(Me.parent)&&Me.parent.isCE)return t!=="default"&&(a.name=t),De("slot",a,s&&s());let n=e[t];n&&n._c&&(n._d=!1),kc();const o=n&&pc(n(a)),c=Tc(Ue,{key:a.key||o&&o.key||`_${t}`},o||(s?s():[]),o&&e._===1?64:-2);return!i&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),n&&n._c&&(n._d=!0),c}function pc(e){return e.some(t=>yr(t)?!(t.type===rt||t.type===Ue&&!pc(t.children)):!0)?e:null}const Ii=e=>e?Lc(e)?Cr(e)||e.proxy:Ii(e.parent):null,us=Ce(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ii(e.parent),$root:e=>Ii(e.root),$emit:e=>e.emit,$options:e=>pn(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,Sr(e.update)}),$nextTick:e=>e.n||(e.n=Ft.bind(e.proxy)),$watch:e=>am.bind(e)}),ei=(e,t)=>e!==Te&&!e.__isScriptSetup&&me(e,t),hm={get({_:e},t){const{ctx:a,setupState:s,data:i,props:n,accessCache:o,type:c,appContext:u}=e;let d;if(t[0]!=="$"){const f=o[t];if(f!==void 0)switch(f){case 1:return s[t];case 2:return i[t];case 4:return a[t];case 3:return n[t]}else{if(ei(s,t))return o[t]=1,s[t];if(i!==Te&&me(i,t))return o[t]=2,i[t];if((d=e.propsOptions[0])&&me(d,t))return o[t]=3,n[t];if(a!==Te&&me(a,t))return o[t]=4,a[t];Li&&(o[t]=0)}}const p=us[t];let m,h;if(p)return t==="$attrs"&&Ze(e,"get",t),p(e);if((m=c.__cssModules)&&(m=m[t]))return m;if(a!==Te&&me(a,t))return o[t]=4,a[t];if(h=u.config.globalProperties,me(h,t))return h[t]},set({_:e},t,a){const{data:s,setupState:i,ctx:n}=e;return ei(i,t)?(i[t]=a,!0):s!==Te&&me(s,t)?(s[t]=a,!0):me(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(n[t]=a,!0)},has({_:{data:e,setupState:t,accessCache:a,ctx:s,appContext:i,propsOptions:n}},o){let c;return!!a[o]||e!==Te&&me(e,o)||ei(t,o)||(c=n[0])&&me(c,o)||me(s,o)||me(us,o)||me(i.config.globalProperties,o)},defineProperty(e,t,a){return a.get!=null?e._.accessCache[t]=0:me(a,"value")&&this.set(e,t,a.value,null),Reflect.defineProperty(e,t,a)}};function wo(e){return X(e)?e.reduce((t,a)=>(t[a]=null,t),{}):e}let Li=!0;function fm(e){const t=pn(e),a=e.proxy,s=e.ctx;Li=!1,t.beforeCreate&&go(t.beforeCreate,e,"bc");const{data:i,computed:n,methods:o,watch:c,provide:u,inject:d,created:p,beforeMount:m,mounted:h,beforeUpdate:f,updated:g,activated:E,deactivated:k,beforeDestroy:y,beforeUnmount:T,destroyed:b,unmounted:j,render:C,renderTracked:A,renderTriggered:V,errorCaptured:O,serverPrefetch:M,expose:B,inheritAttrs:Q,components:N,directives:ee,filters:Se}=t;if(d&&wm(d,s,null),o)for(const te in o){const J=o[te];se(J)&&(s[te]=J.bind(a))}if(i){const te=i.call(a,a);Ae(te)&&(e.data=Ps(te))}if(Li=!0,n)for(const te in n){const J=n[te],Re=se(J)?J.bind(a,a):se(J.get)?J.get.bind(a,a):dt,Tt=!se(J)&&se(J.set)?J.set.bind(a):dt,ot=_({get:Re,set:Tt});Object.defineProperty(s,te,{enumerable:!0,configurable:!0,get:()=>ot.value,set:Ne=>ot.value=Ne})}if(c)for(const te in c)mc(c[te],s,a,te);if(u){const te=se(u)?u.call(a):u;Reflect.ownKeys(te).forEach(J=>{mt(J,te[J])})}p&&go(p,e,"c");function U(te,J){X(J)?J.forEach(Re=>te(Re.bind(a))):J&&te(J.bind(a))}if(U(lm,m),U(ie,h),U(cm,f),U(uc,g),U(im,E),U(nm,k),U(mm,O),U(pm,A),U(dm,V),U(dc,T),U(Dt,j),U(um,M),X(B))if(B.length){const te=e.exposed||(e.exposed={});B.forEach(J=>{Object.defineProperty(te,J,{get:()=>a[J],set:Re=>a[J]=Re})})}else e.exposed||(e.exposed={});C&&e.render===dt&&(e.render=C),Q!=null&&(e.inheritAttrs=Q),N&&(e.components=N),ee&&(e.directives=ee)}function wm(e,t,a=dt){X(e)&&(e=Si(e));for(const s in e){const i=e[s];let n;Ae(i)?"default"in i?n=fe(i.from||s,i.default,!0):n=fe(i.from||s):n=fe(i),He(n)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>n.value,set:o=>n.value=o}):t[s]=n}}function go(e,t,a){pt(X(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,a)}function mc(e,t,a,s){const i=s.includes(".")?ic(a,s):()=>a[s];if(Oe(e)){const n=t[e];se(n)&&re(i,n)}else if(se(e))re(i,e.bind(a));else if(Ae(e))if(X(e))e.forEach(n=>mc(n,t,a,s));else{const n=se(e.handler)?e.handler.bind(a):t[e.handler];se(n)&&re(i,n,e)}}function pn(e){const t=e.type,{mixins:a,extends:s}=t,{mixins:i,optionsCache:n,config:{optionMergeStrategies:o}}=e.appContext,c=n.get(t);let u;return c?u=c:!i.length&&!a&&!s?u=t:(u={},i.length&&i.forEach(d=>gr(u,d,o,!0)),gr(u,t,o)),Ae(t)&&n.set(t,u),u}function gr(e,t,a,s=!1){const{mixins:i,extends:n}=t;n&&gr(e,n,a,!0),i&&i.forEach(o=>gr(e,o,a,!0));for(const o in t)if(!(s&&o==="expose")){const c=gm[o]||a&&a[o];e[o]=c?c(e[o],t[o]):t[o]}return e}const gm={data:vo,props:yo,emits:yo,methods:os,computed:os,beforeCreate:Ge,created:Ge,beforeMount:Ge,mounted:Ge,beforeUpdate:Ge,updated:Ge,beforeDestroy:Ge,beforeUnmount:Ge,destroyed:Ge,unmounted:Ge,activated:Ge,deactivated:Ge,errorCaptured:Ge,serverPrefetch:Ge,components:os,directives:os,watch:ym,provide:vo,inject:vm};function vo(e,t){return t?e?function(){return Ce(se(e)?e.call(this,this):e,se(t)?t.call(this,this):t)}:t:e}function vm(e,t){return os(Si(e),Si(t))}function Si(e){if(X(e)){const t={};for(let a=0;a<e.length;a++)t[e[a]]=e[a];return t}return e}function Ge(e,t){return e?[...new Set([].concat(e,t))]:t}function os(e,t){return e?Ce(Object.create(null),e,t):t}function yo(e,t){return e?X(e)&&X(t)?[...new Set([...e,...t])]:Ce(Object.create(null),wo(e),wo(t??{})):t}function ym(e,t){if(!e)return t;if(!t)return e;const a=Ce(Object.create(null),e);for(const s in t)a[s]=Ge(e[s],t[s]);return a}function hc(){return{app:null,config:{isNativeTag:Yd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _m=0;function bm(e,t){return function(s,i=null){se(s)||(s=Ce({},s)),i!=null&&!Ae(i)&&(i=null);const n=hc(),o=new WeakSet;let c=!1;const u=n.app={_uid:_m++,_component:s,_props:i,_container:null,_context:n,_instance:null,version:Pc,get config(){return n.config},set config(d){},use(d,...p){return o.has(d)||(d&&se(d.install)?(o.add(d),d.install(u,...p)):se(d)&&(o.add(d),d(u,...p))),u},mixin(d){return n.mixins.includes(d)||n.mixins.push(d),u},component(d,p){return p?(n.components[d]=p,u):n.components[d]},directive(d,p){return p?(n.directives[d]=p,u):n.directives[d]},mount(d,p,m){if(!c){const h=De(s,i);return h.appContext=n,m===!0?m="svg":m===!1&&(m=void 0),p&&t?t(h,d):e(h,d,m),c=!0,u._container=d,d.__vue_app__=u,Cr(h.component)||h.component.proxy}},unmount(){c&&(e(null,u._container),delete u._container.__vue_app__)},provide(d,p){return n.provides[d]=p,u},runWithContext(d){const p=ds;ds=u;try{return d()}finally{ds=p}}};return u}}let ds=null;function mt(e,t){if(Be){let a=Be.provides;const s=Be.parent&&Be.parent.provides;s===a&&(a=Be.provides=Object.create(s)),a[e]=t}}function fe(e,t,a=!1){const s=Be||Me;if(s||ds){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:ds._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return a&&se(t)?t.call(s&&s.proxy):t}}function Em(e,t,a,s=!1){const i={},n={};pr(n,Vr,1),e.propsDefaults=Object.create(null),fc(e,t,i,n);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);a?e.props=s?i:Ul(i):e.type.props?e.props=i:e.props=n,e.attrs=n}function km(e,t,a,s){const{props:i,attrs:n,vnode:{patchFlag:o}}=e,c=ue(i),[u]=e.propsOptions;let d=!1;if((s||o>0)&&!(o&16)){if(o&8){const p=e.vnode.dynamicProps;for(let m=0;m<p.length;m++){let h=p[m];if(Pr(e.emitsOptions,h))continue;const f=t[h];if(u)if(me(n,h))f!==n[h]&&(n[h]=f,d=!0);else{const g=it(h);i[g]=Pi(u,c,g,f,e,!1)}else f!==n[h]&&(n[h]=f,d=!0)}}}else{fc(e,t,i,n)&&(d=!0);let p;for(const m in c)(!t||!me(t,m)&&((p=na(m))===m||!me(t,p)))&&(u?a&&(a[m]!==void 0||a[p]!==void 0)&&(i[m]=Pi(u,c,m,void 0,e,!0)):delete i[m]);if(n!==c)for(const m in n)(!t||!me(t,m))&&(delete n[m],d=!0)}d&&zt(e,"set","$attrs")}function fc(e,t,a,s){const[i,n]=e.propsOptions;let o=!1,c;if(t)for(let u in t){if(Ca(u))continue;const d=t[u];let p;i&&me(i,p=it(u))?!n||!n.includes(p)?a[p]=d:(c||(c={}))[p]=d:Pr(e.emitsOptions,u)||(!(u in s)||d!==s[u])&&(s[u]=d,o=!0)}if(n){const u=ue(a),d=c||Te;for(let p=0;p<n.length;p++){const m=n[p];a[m]=Pi(i,u,m,d[m],e,!me(d,m))}}return o}function Pi(e,t,a,s,i,n){const o=e[a];if(o!=null){const c=me(o,"default");if(c&&s===void 0){const u=o.default;if(o.type!==Function&&!o.skipFactory&&se(u)){const{propsDefaults:d}=i;if(a in d)s=d[a];else{const p=Rs(i);s=d[a]=u.call(null,t),p()}}else s=u}o[0]&&(n&&!c?s=!1:o[1]&&(s===""||s===na(a))&&(s=!0))}return s}function wc(e,t,a=!1){const s=t.propsCache,i=s.get(e);if(i)return i;const n=e.props,o={},c=[];let u=!1;if(!se(e)){const p=m=>{u=!0;const[h,f]=wc(m,t,!0);Ce(o,h),f&&c.push(...f)};!a&&t.mixins.length&&t.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}if(!n&&!u)return Ae(e)&&s.set(e,Ra),Ra;if(X(n))for(let p=0;p<n.length;p++){const m=it(n[p]);_o(m)&&(o[m]=Te)}else if(n)for(const p in n){const m=it(p);if(_o(m)){const h=n[p],f=o[m]=X(h)||se(h)?{type:h}:Ce({},h);if(f){const g=ko(Boolean,f.type),E=ko(String,f.type);f[0]=g>-1,f[1]=E<0||g<E,(g>-1||me(f,"default"))&&c.push(m)}}}const d=[o,c];return Ae(e)&&s.set(e,d),d}function _o(e){return e[0]!=="$"&&!Ca(e)}function bo(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function Eo(e,t){return bo(e)===bo(t)}function ko(e,t){return X(t)?t.findIndex(a=>Eo(a,e)):se(t)&&Eo(t,e)?0:-1}const gc=e=>e[0]==="_"||e==="$stable",mn=e=>X(e)?e.map(wt):[wt(e)],xm=(e,t,a)=>{if(t._n)return t;const s=Wp((...i)=>mn(t(...i)),a);return s._c=!1,s},vc=(e,t,a)=>{const s=e._ctx;for(const i in e){if(gc(i))continue;const n=e[i];if(se(n))t[i]=xm(i,n,s);else if(n!=null){const o=mn(n);t[i]=()=>o}}},yc=(e,t)=>{const a=mn(t);e.slots.default=()=>a},Tm=(e,t)=>{if(e.vnode.shapeFlag&32){const a=t._;a?(e.slots=ue(t),pr(t,"_",a)):vc(t,e.slots={})}else e.slots={},t&&yc(e,t);pr(e.slots,Vr,1)},Am=(e,t,a)=>{const{vnode:s,slots:i}=e;let n=!0,o=Te;if(s.shapeFlag&32){const c=t._;c?a&&c===1?n=!1:(Ce(i,t),!a&&c===1&&delete i._):(n=!t.$stable,vc(t,i)),o=t}else t&&(yc(e,t),o={default:1});if(n)for(const c in i)!gc(c)&&o[c]==null&&delete i[c]};function vr(e,t,a,s,i=!1){if(X(e)){e.forEach((h,f)=>vr(h,t&&(X(t)?t[f]:t),a,s,i));return}if(Na(s)&&!i)return;const n=s.shapeFlag&4?Cr(s.component)||s.component.proxy:s.el,o=i?null:n,{i:c,r:u}=e,d=t&&t.r,p=c.refs===Te?c.refs={}:c.refs,m=c.setupState;if(d!=null&&d!==u&&(Oe(d)?(p[d]=null,me(m,d)&&(m[d]=null)):He(d)&&(d.value=null)),se(u))sa(u,c,12,[o,p]);else{const h=Oe(u),f=He(u);if(h||f){const g=()=>{if(e.f){const E=h?me(m,u)?m[u]:p[u]:u.value;i?X(E)&&Zi(E,n):X(E)?E.includes(n)||E.push(n):h?(p[u]=[n],me(m,u)&&(m[u]=p[u])):(u.value=[n],e.k&&(p[e.k]=u.value))}else h?(p[u]=o,me(m,u)&&(m[u]=o)):f&&(u.value=o,e.k&&(p[e.k]=o))};o?(g.id=-1,Ke(g,a)):g()}}}let Gt=!1;const jm=e=>e.namespaceURI.includes("svg")&&e.tagName!=="foreignObject",Im=e=>e.namespaceURI.includes("MathML"),er=e=>{if(jm(e))return"svg";if(Im(e))return"mathml"},tr=e=>e.nodeType===8;function Lm(e){const{mt:t,p:a,o:{patchProp:s,createText:i,nextSibling:n,parentNode:o,remove:c,insert:u,createComment:d}}=e,p=(b,j)=>{if(!j.hasChildNodes()){a(null,b,j),fr(),j._vnode=b;return}Gt=!1,m(j.firstChild,b,null,null,null),fr(),j._vnode=b,Gt&&console.error("Hydration completed but contains mismatches.")},m=(b,j,C,A,V,O=!1)=>{const M=tr(b)&&b.data==="[",B=()=>E(b,j,C,A,V,M),{type:Q,ref:N,shapeFlag:ee,patchFlag:Se}=j;let Ie=b.nodeType;j.el=b,Se===-2&&(O=!1,j.dynamicChildren=null);let U=null;switch(Q){case Wa:Ie!==3?j.children===""?(u(j.el=i(""),o(b),b),U=b):U=B():(b.data!==j.children&&(Gt=!0,b.data=j.children),U=n(b));break;case rt:T(b)?(U=n(b),y(j.el=b.content.firstChild,b,C)):Ie!==8||M?U=B():U=n(b);break;case ps:if(M&&(b=n(b),Ie=b.nodeType),Ie===1||Ie===3){U=b;const te=!j.children.length;for(let J=0;J<j.staticCount;J++)te&&(j.children+=U.nodeType===1?U.outerHTML:U.data),J===j.staticCount-1&&(j.anchor=U),U=n(U);return M?n(U):U}else B();break;case Ue:M?U=g(b,j,C,A,V,O):U=B();break;default:if(ee&1)(Ie!==1||j.type.toLowerCase()!==b.tagName.toLowerCase())&&!T(b)?U=B():U=h(b,j,C,A,V,O);else if(ee&6){j.slotScopeIds=V;const te=o(b);if(M?U=k(b):tr(b)&&b.data==="teleport start"?U=k(b,b.data,"teleport end"):U=n(b),t(j,te,null,C,A,er(te),O),Na(j)){let J;M?(J=De(Ue),J.anchor=U?U.previousSibling:te.lastChild):J=b.nodeType===3?Ic(""):De("div"),J.el=b,j.component.subTree=J}}else ee&64?Ie!==8?U=B():U=j.type.hydrate(b,j,C,A,V,O,e,f):ee&128&&(U=j.type.hydrate(b,j,C,A,er(o(b)),V,O,e,m))}return N!=null&&vr(N,null,A,j),U},h=(b,j,C,A,V,O)=>{O=O||!!j.dynamicChildren;const{type:M,props:B,patchFlag:Q,shapeFlag:N,dirs:ee,transition:Se}=j,Ie=M==="input"||M==="option";if(Ie||Q!==-1){ee&&It(j,null,C,"created");let U=!1;if(T(b)){U=_c(A,Se)&&C&&C.vnode.props&&C.vnode.props.appear;const J=b.content.firstChild;U&&Se.beforeEnter(J),y(J,b,C),j.el=b=J}if(N&16&&!(B&&(B.innerHTML||B.textContent))){let J=f(b.firstChild,j,b,C,A,V,O);for(;J;){Gt=!0;const Re=J;J=J.nextSibling,c(Re)}}else N&8&&b.textContent!==j.children&&(Gt=!0,b.textContent=j.children);if(B)if(Ie||!O||Q&48)for(const J in B)(Ie&&(J.endsWith("value")||J==="indeterminate")||Ls(J)&&!Ca(J)||J[0]===".")&&s(b,J,null,B[J],void 0,void 0,C);else B.onClick&&s(b,"onClick",null,B.onClick,void 0,void 0,C);let te;(te=B&&B.onVnodeBeforeMount)&&ct(te,C,j),ee&&It(j,null,C,"beforeMount"),((te=B&&B.onVnodeMounted)||ee||U)&&rc(()=>{te&&ct(te,C,j),U&&Se.enter(b),ee&&It(j,null,C,"mounted")},A)}return b.nextSibling},f=(b,j,C,A,V,O,M)=>{M=M||!!j.dynamicChildren;const B=j.children,Q=B.length;for(let N=0;N<Q;N++){const ee=M?B[N]:B[N]=wt(B[N]);if(b)b=m(b,ee,A,V,O,M);else{if(ee.type===Wa&&!ee.children)continue;Gt=!0,a(null,ee,C,null,A,V,er(C),O)}}return b},g=(b,j,C,A,V,O)=>{const{slotScopeIds:M}=j;M&&(V=V?V.concat(M):M);const B=o(b),Q=f(n(b),j,B,C,A,V,O);return Q&&tr(Q)&&Q.data==="]"?n(j.anchor=Q):(Gt=!0,u(j.anchor=d("]"),B,Q),Q)},E=(b,j,C,A,V,O)=>{if(Gt=!0,j.el=null,O){const Q=k(b);for(;;){const N=n(b);if(N&&N!==Q)c(N);else break}}const M=n(b),B=o(b);return c(b),a(null,j,B,M,C,A,er(B),V),M},k=(b,j="[",C="]")=>{let A=0;for(;b;)if(b=n(b),b&&tr(b)&&(b.data===j&&A++,b.data===C)){if(A===0)return n(b);A--}return b},y=(b,j,C)=>{const A=j.parentNode;A&&A.replaceChild(b,j);let V=C;for(;V;)V.vnode.el===j&&(V.vnode.el=V.subTree.el=b),V=V.parent},T=b=>b.nodeType===1&&b.tagName.toLowerCase()==="template";return[p,m]}const Ke=rc;function Sm(e){return Pm(e,Lm)}function Pm(e,t){const a=Dl();a.__VUE__=!0;const{insert:s,remove:i,patchProp:n,createElement:o,createText:c,createComment:u,setText:d,setElementText:p,parentNode:m,nextSibling:h,setScopeId:f=dt,insertStaticContent:g}=e,E=(w,v,x,S=null,L=null,H=null,$=void 0,R=null,z=!!v.dynamicChildren)=>{if(w===v)return;w&&!ga(w,v)&&(S=I(w),Ne(w,L,H,!0),w=null),v.patchFlag===-2&&(z=!1,v.dynamicChildren=null);const{type:P,ref:G,shapeFlag:Z}=v;switch(P){case Wa:k(w,v,x,S);break;case rt:y(w,v,x,S);break;case ps:w==null&&T(v,x,S,$);break;case Ue:N(w,v,x,S,L,H,$,R,z);break;default:Z&1?C(w,v,x,S,L,H,$,R,z):Z&6?ee(w,v,x,S,L,H,$,R,z):(Z&64||Z&128)&&P.process(w,v,x,S,L,H,$,R,z,K)}G!=null&&L&&vr(G,w&&w.ref,H,v||w,!v)},k=(w,v,x,S)=>{if(w==null)s(v.el=c(v.children),x,S);else{const L=v.el=w.el;v.children!==w.children&&d(L,v.children)}},y=(w,v,x,S)=>{w==null?s(v.el=u(v.children||""),x,S):v.el=w.el},T=(w,v,x,S)=>{[w.el,w.anchor]=g(w.children,v,x,S,w.el,w.anchor)},b=({el:w,anchor:v},x,S)=>{let L;for(;w&&w!==v;)L=h(w),s(w,x,S),w=L;s(v,x,S)},j=({el:w,anchor:v})=>{let x;for(;w&&w!==v;)x=h(w),i(w),w=x;i(v)},C=(w,v,x,S,L,H,$,R,z)=>{v.type==="svg"?$="svg":v.type==="math"&&($="mathml"),w==null?A(v,x,S,L,H,$,R,z):M(w,v,L,H,$,R,z)},A=(w,v,x,S,L,H,$,R)=>{let z,P;const{props:G,shapeFlag:Z,transition:Y,dirs:ae}=w;if(z=w.el=o(w.type,H,G&&G.is,G),Z&8?p(z,w.children):Z&16&&O(w.children,z,null,S,L,ti(w,H),$,R),ae&&It(w,null,S,"created"),V(z,w,w.scopeId,$,S),G){for(const _e in G)_e!=="value"&&!Ca(_e)&&n(z,_e,null,G[_e],H,w.children,S,L,Ve);"value"in G&&n(z,"value",null,G.value,H),(P=G.onVnodeBeforeMount)&&ct(P,S,w)}ae&&It(w,null,S,"beforeMount");const oe=_c(L,Y);oe&&Y.beforeEnter(z),s(z,v,x),((P=G&&G.onVnodeMounted)||oe||ae)&&Ke(()=>{P&&ct(P,S,w),oe&&Y.enter(z),ae&&It(w,null,S,"mounted")},L)},V=(w,v,x,S,L)=>{if(x&&f(w,x),S)for(let H=0;H<S.length;H++)f(w,S[H]);if(L){let H=L.subTree;if(v===H){const $=L.vnode;V(w,$,$.scopeId,$.slotScopeIds,L.parent)}}},O=(w,v,x,S,L,H,$,R,z=0)=>{for(let P=z;P<w.length;P++){const G=w[P]=R?Xt(w[P]):wt(w[P]);E(null,G,v,x,S,L,H,$,R)}},M=(w,v,x,S,L,H,$)=>{const R=v.el=w.el;let{patchFlag:z,dynamicChildren:P,dirs:G}=v;z|=w.patchFlag&16;const Z=w.props||Te,Y=v.props||Te;let ae;if(x&&pa(x,!1),(ae=Y.onVnodeBeforeUpdate)&&ct(ae,x,v,w),G&&It(v,w,x,"beforeUpdate"),x&&pa(x,!0),P?B(w.dynamicChildren,P,R,x,S,ti(v,L),H):$||J(w,v,R,null,x,S,ti(v,L),H,!1),z>0){if(z&16)Q(R,v,Z,Y,x,S,L);else if(z&2&&Z.class!==Y.class&&n(R,"class",null,Y.class,L),z&4&&n(R,"style",Z.style,Y.style,L),z&8){const oe=v.dynamicProps;for(let _e=0;_e<oe.length;_e++){const Le=oe[_e],ze=Z[Le],ht=Y[Le];(ht!==ze||Le==="value")&&n(R,Le,ze,ht,L,w.children,x,S,Ve)}}z&1&&w.children!==v.children&&p(R,v.children)}else!$&&P==null&&Q(R,v,Z,Y,x,S,L);((ae=Y.onVnodeUpdated)||G)&&Ke(()=>{ae&&ct(ae,x,v,w),G&&It(v,w,x,"updated")},S)},B=(w,v,x,S,L,H,$)=>{for(let R=0;R<v.length;R++){const z=w[R],P=v[R],G=z.el&&(z.type===Ue||!ga(z,P)||z.shapeFlag&70)?m(z.el):x;E(z,P,G,null,S,L,H,$,!0)}},Q=(w,v,x,S,L,H,$)=>{if(x!==S){if(x!==Te)for(const R in x)!Ca(R)&&!(R in S)&&n(w,R,x[R],null,$,v.children,L,H,Ve);for(const R in S){if(Ca(R))continue;const z=S[R],P=x[R];z!==P&&R!=="value"&&n(w,R,P,z,$,v.children,L,H,Ve)}"value"in S&&n(w,"value",x.value,S.value,$)}},N=(w,v,x,S,L,H,$,R,z)=>{const P=v.el=w?w.el:c(""),G=v.anchor=w?w.anchor:c("");let{patchFlag:Z,dynamicChildren:Y,slotScopeIds:ae}=v;ae&&(R=R?R.concat(ae):ae),w==null?(s(P,x,S),s(G,x,S),O(v.children||[],x,G,L,H,$,R,z)):Z>0&&Z&64&&Y&&w.dynamicChildren?(B(w.dynamicChildren,Y,x,L,H,$,R),(v.key!=null||L&&v===L.subTree)&&bc(w,v,!0)):J(w,v,x,G,L,H,$,R,z)},ee=(w,v,x,S,L,H,$,R,z)=>{v.slotScopeIds=R,w==null?v.shapeFlag&512?L.ctx.activate(v,x,S,$,z):Se(v,x,S,L,H,$,z):Ie(w,v,z)},Se=(w,v,x,S,L,H,$)=>{const R=w.component=zm(w,S,L);if(Os(w)&&(R.ctx.renderer=K),Bm(R),R.asyncDep){if(L&&L.registerDep(R,U),!w.el){const z=R.subTree=De(rt);y(null,z,v,x)}}else U(R,w,v,x,L,H,$)},Ie=(w,v,x)=>{const S=v.component=w.component;if(Jp(w,v,x))if(S.asyncDep&&!S.asyncResolved){te(S,v,x);return}else S.next=v,Bp(S.update),S.effect.dirty=!0,S.update();else v.el=w.el,S.vnode=v},U=(w,v,x,S,L,H,$)=>{const R=()=>{if(w.isMounted){let{next:G,bu:Z,u:Y,parent:ae,vnode:oe}=w;{const Ia=Ec(w);if(Ia){G&&(G.el=oe.el,te(w,G,$)),Ia.asyncDep.then(()=>{w.isUnmounted||R()});return}}let _e=G,Le;pa(w,!1),G?(G.el=oe.el,te(w,G,$)):G=oe,Z&&ur(Z),(Le=G.props&&G.props.onVnodeBeforeUpdate)&&ct(Le,ae,G,oe),pa(w,!0);const ze=Yr(w),ht=w.subTree;w.subTree=ze,E(ht,ze,m(ht.el),I(ht),w,L,H),G.el=ze.el,_e===null&&Kp(w,ze.el),Y&&Ke(Y,L),(Le=G.props&&G.props.onVnodeUpdated)&&Ke(()=>ct(Le,ae,G,oe),L)}else{let G;const{el:Z,props:Y}=v,{bm:ae,m:oe,parent:_e}=w,Le=Na(v);if(pa(w,!1),ae&&ur(ae),!Le&&(G=Y&&Y.onVnodeBeforeMount)&&ct(G,_e,v),pa(w,!0),Z&&xe){const ze=()=>{w.subTree=Yr(w),xe(Z,w.subTree,w,L,null)};Le?v.type.__asyncLoader().then(()=>!w.isUnmounted&&ze()):ze()}else{const ze=w.subTree=Yr(w);E(null,ze,x,S,w,L,H),v.el=ze.el}if(oe&&Ke(oe,L),!Le&&(G=Y&&Y.onVnodeMounted)){const ze=v;Ke(()=>ct(G,_e,ze),L)}(v.shapeFlag&256||_e&&Na(_e.vnode)&&_e.vnode.shapeFlag&256)&&w.a&&Ke(w.a,L),w.isMounted=!0,v=x=S=null}},z=w.effect=new en(R,dt,()=>Sr(P),w.scope),P=w.update=()=>{z.dirty&&z.run()};P.id=w.uid,pa(w,!0),P()},te=(w,v,x)=>{v.component=w;const S=w.vnode.props;w.vnode=v,w.next=null,km(w,v.props,S,x),Am(w,v.children,x),xa(),po(w),Ta()},J=(w,v,x,S,L,H,$,R,z=!1)=>{const P=w&&w.children,G=w?w.shapeFlag:0,Z=v.children,{patchFlag:Y,shapeFlag:ae}=v;if(Y>0){if(Y&128){Tt(P,Z,x,S,L,H,$,R,z);return}else if(Y&256){Re(P,Z,x,S,L,H,$,R,z);return}}ae&8?(G&16&&Ve(P,L,H),Z!==P&&p(x,Z)):G&16?ae&16?Tt(P,Z,x,S,L,H,$,R,z):Ve(P,L,H,!0):(G&8&&p(x,""),ae&16&&O(Z,x,S,L,H,$,R,z))},Re=(w,v,x,S,L,H,$,R,z)=>{w=w||Ra,v=v||Ra;const P=w.length,G=v.length,Z=Math.min(P,G);let Y;for(Y=0;Y<Z;Y++){const ae=v[Y]=z?Xt(v[Y]):wt(v[Y]);E(w[Y],ae,x,null,L,H,$,R,z)}P>G?Ve(w,L,H,!0,!1,Z):O(v,x,S,L,H,$,R,z,Z)},Tt=(w,v,x,S,L,H,$,R,z)=>{let P=0;const G=v.length;let Z=w.length-1,Y=G-1;for(;P<=Z&&P<=Y;){const ae=w[P],oe=v[P]=z?Xt(v[P]):wt(v[P]);if(ga(ae,oe))E(ae,oe,x,null,L,H,$,R,z);else break;P++}for(;P<=Z&&P<=Y;){const ae=w[Z],oe=v[Y]=z?Xt(v[Y]):wt(v[Y]);if(ga(ae,oe))E(ae,oe,x,null,L,H,$,R,z);else break;Z--,Y--}if(P>Z){if(P<=Y){const ae=Y+1,oe=ae<G?v[ae].el:S;for(;P<=Y;)E(null,v[P]=z?Xt(v[P]):wt(v[P]),x,oe,L,H,$,R,z),P++}}else if(P>Y)for(;P<=Z;)Ne(w[P],L,H,!0),P++;else{const ae=P,oe=P,_e=new Map;for(P=oe;P<=Y;P++){const tt=v[P]=z?Xt(v[P]):wt(v[P]);tt.key!=null&&_e.set(tt.key,P)}let Le,ze=0;const ht=Y-oe+1;let Ia=!1,eo=0;const as=new Array(ht);for(P=0;P<ht;P++)as[P]=0;for(P=ae;P<=Z;P++){const tt=w[P];if(ze>=ht){Ne(tt,L,H,!0);continue}let jt;if(tt.key!=null)jt=_e.get(tt.key);else for(Le=oe;Le<=Y;Le++)if(as[Le-oe]===0&&ga(tt,v[Le])){jt=Le;break}jt===void 0?Ne(tt,L,H,!0):(as[jt-oe]=P+1,jt>=eo?eo=jt:Ia=!0,E(tt,v[jt],x,null,L,H,$,R,z),ze++)}const to=Ia?Dm(as):Ra;for(Le=to.length-1,P=ht-1;P>=0;P--){const tt=oe+P,jt=v[tt],ao=tt+1<G?v[tt+1].el:S;as[P]===0?E(null,jt,x,ao,L,H,$,R,z):Ia&&(Le<0||P!==to[Le]?ot(jt,x,ao,2):Le--)}}},ot=(w,v,x,S,L=null)=>{const{el:H,type:$,transition:R,children:z,shapeFlag:P}=w;if(P&6){ot(w.component.subTree,v,x,S);return}if(P&128){w.suspense.move(v,x,S);return}if(P&64){$.move(w,v,x,K);return}if($===Ue){s(H,v,x);for(let Z=0;Z<z.length;Z++)ot(z[Z],v,x,S);s(w.anchor,v,x);return}if($===ps){b(w,v,x);return}if(S!==2&&P&1&&R)if(S===0)R.beforeEnter(H),s(H,v,x),Ke(()=>R.enter(H),L);else{const{leave:Z,delayLeave:Y,afterLeave:ae}=R,oe=()=>s(H,v,x),_e=()=>{Z(H,()=>{oe(),ae&&ae()})};Y?Y(H,oe,_e):_e()}else s(H,v,x)},Ne=(w,v,x,S=!1,L=!1)=>{const{type:H,props:$,ref:R,children:z,dynamicChildren:P,shapeFlag:G,patchFlag:Z,dirs:Y}=w;if(R!=null&&vr(R,null,x,w,!0),G&256){v.ctx.deactivate(w);return}const ae=G&1&&Y,oe=!Na(w);let _e;if(oe&&(_e=$&&$.onVnodeBeforeUnmount)&&ct(_e,v,w),G&6)At(w.component,x,S);else{if(G&128){w.suspense.unmount(x,S);return}ae&&It(w,null,v,"beforeUnmount"),G&64?w.type.remove(w,v,x,L,K,S):P&&(H!==Ue||Z>0&&Z&64)?Ve(P,v,x,!1,!0):(H===Ue&&Z&384||!L&&G&16)&&Ve(z,v,x),S&&et(w)}(oe&&(_e=$&&$.onVnodeUnmounted)||ae)&&Ke(()=>{_e&&ct(_e,v,w),ae&&It(w,null,v,"unmounted")},x)},et=w=>{const{type:v,el:x,anchor:S,transition:L}=w;if(v===Ue){Ct(x,S);return}if(v===ps){j(w);return}const H=()=>{i(x),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(w.shapeFlag&1&&L&&!L.persisted){const{leave:$,delayLeave:R}=L,z=()=>$(x,H);R?R(w.el,H,z):z()}else H()},Ct=(w,v)=>{let x;for(;w!==v;)x=h(w),i(w),w=x;i(v)},At=(w,v,x)=>{const{bum:S,scope:L,update:H,subTree:$,um:R}=w;S&&ur(S),L.stop(),H&&(H.active=!1,Ne($,w,v,x)),R&&Ke(R,v),Ke(()=>{w.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},Ve=(w,v,x,S=!1,L=!1,H=0)=>{for(let $=H;$<w.length;$++)Ne(w[$],v,x,S,L)},I=w=>w.shapeFlag&6?I(w.component.subTree):w.shapeFlag&128?w.suspense.next():h(w.anchor||w.el);let W=!1;const F=(w,v,x)=>{w==null?v._vnode&&Ne(v._vnode,null,null,!0):E(v._vnode||null,w,v,null,null,null,x),W||(W=!0,po(),fr(),W=!1),v._vnode=w},K={p:E,um:Ne,m:ot,r:et,mt:Se,mc:O,pc:J,pbc:B,n:I,o:e};let de,xe;return t&&([de,xe]=t(K)),{render:F,hydrate:de,createApp:bm(F,de)}}function ti({type:e,props:t},a){return a==="svg"&&e==="foreignObject"||a==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:a}function pa({effect:e,update:t},a){e.allowRecurse=t.allowRecurse=a}function _c(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function bc(e,t,a=!1){const s=e.children,i=t.children;if(X(s)&&X(i))for(let n=0;n<s.length;n++){const o=s[n];let c=i[n];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=i[n]=Xt(i[n]),c.el=o.el),a||bc(o,c)),c.type===Wa&&(c.el=o.el)}}function Dm(e){const t=e.slice(),a=[0];let s,i,n,o,c;const u=e.length;for(s=0;s<u;s++){const d=e[s];if(d!==0){if(i=a[a.length-1],e[i]<d){t[s]=i,a.push(s);continue}for(n=0,o=a.length-1;n<o;)c=n+o>>1,e[a[c]]<d?n=c+1:o=c;d<e[a[n]]&&(n>0&&(t[s]=a[n-1]),a[n]=s)}}for(n=a.length,o=a[n-1];n-- >0;)a[n]=o,o=t[o];return a}function Ec(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ec(t)}const Om=e=>e.__isTeleport,Ue=Symbol.for("v-fgt"),Wa=Symbol.for("v-txt"),rt=Symbol.for("v-cmt"),ps=Symbol.for("v-stc"),ms=[];let vt=null;function kc(e=!1){ms.push(vt=e?null:[])}function Rm(){ms.pop(),vt=ms[ms.length-1]||null}let Es=1;function xo(e){Es+=e}function xc(e){return e.dynamicChildren=Es>0?vt||Ra:null,Rm(),Es>0&&vt&&vt.push(e),e}function w3(e,t,a,s,i,n){return xc(jc(e,t,a,s,i,n,!0))}function Tc(e,t,a,s,i){return xc(De(e,t,a,s,i,!0))}function yr(e){return e?e.__v_isVNode===!0:!1}function ga(e,t){return e.type===t.type&&e.key===t.key}const Vr="__vInternal",Ac=({key:e})=>e??null,dr=({ref:e,ref_key:t,ref_for:a})=>(typeof e=="number"&&(e=""+e),e!=null?Oe(e)||He(e)||se(e)?{i:Me,r:e,k:t,f:!!a}:e:null);function jc(e,t=null,a=null,s=0,i=null,n=e===Ue?0:1,o=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ac(t),ref:t&&dr(t),scopeId:Dr,slotScopeIds:null,children:a,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:n,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Me};return c?(hn(u,a),n&128&&e.normalize(u)):a&&(u.shapeFlag|=Oe(a)?8:16),Es>0&&!o&&vt&&(u.patchFlag>0||n&6)&&u.patchFlag!==32&&vt.push(u),u}const De=Vm;function Vm(e,t=null,a=null,s=0,i=null,n=!1){if((!e||e===Qp)&&(e=rt),yr(e)){const c=ra(e,t,!0);return a&&hn(c,a),Es>0&&!n&&vt&&(c.shapeFlag&6?vt[vt.indexOf(e)]=c:vt.push(c)),c.patchFlag|=-2,c}if(Gm(e)&&(e=e.__vccOpts),t){t=Cm(t);let{class:c,style:u}=t;c&&!Oe(c)&&(t.class=jr(c)),Ae(u)&&(Jl(u)&&!X(u)&&(u=Ce({},u)),t.style=Ar(u))}const o=Oe(e)?1:Zp(e)?128:Om(e)?64:Ae(e)?4:se(e)?2:0;return jc(e,t,a,s,i,o,n,!0)}function Cm(e){return e?Jl(e)||Vr in e?Ce({},e):e:null}function ra(e,t,a=!1){const{props:s,ref:i,patchFlag:n,children:o}=e,c=t?Mm(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Ac(c),ref:t&&t.ref?a&&i?X(i)?i.concat(dr(t)):[i,dr(t)]:dr(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ue?n===-1?16:n|16:n,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ra(e.ssContent),ssFallback:e.ssFallback&&ra(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Ic(e=" ",t=0){return De(Wa,null,e,t)}function g3(e,t){const a=De(ps,null,e);return a.staticCount=t,a}function v3(e="",t=!1){return t?(kc(),Tc(rt,null,e)):De(rt,null,e)}function wt(e){return e==null||typeof e=="boolean"?De(rt):X(e)?De(Ue,null,e.slice()):typeof e=="object"?Xt(e):De(Wa,null,String(e))}function Xt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ra(e)}function hn(e,t){let a=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(X(t))a=16;else if(typeof t=="object")if(s&65){const i=t.default;i&&(i._c&&(i._d=!1),hn(e,i()),i._c&&(i._d=!0));return}else{a=32;const i=t._;!i&&!(Vr in t)?t._ctx=Me:i===3&&Me&&(Me.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else se(t)?(t={default:t,_ctx:Me},a=32):(t=String(t),s&64?(a=16,t=[Ic(t)]):a=8);e.children=t,e.shapeFlag|=a}function Mm(...e){const t={};for(let a=0;a<e.length;a++){const s=e[a];for(const i in s)if(i==="class")t.class!==s.class&&(t.class=jr([t.class,s.class]));else if(i==="style")t.style=Ar([t.style,s.style]);else if(Ls(i)){const n=t[i],o=s[i];o&&n!==o&&!(X(n)&&n.includes(o))&&(t[i]=n?[].concat(n,o):o)}else i!==""&&(t[i]=s[i])}return t}function ct(e,t,a,s=null){pt(e,t,7,[a,s])}const Hm=hc();let Nm=0;function zm(e,t,a){const s=e.type,i=(t?t.appContext:e.appContext)||Hm,n={uid:Nm++,vnode:e,type:s,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new cp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wc(s,i),emitsOptions:ac(s,i),emit:null,emitted:null,propsDefaults:Te,inheritAttrs:s.inheritAttrs,ctx:Te,data:Te,props:Te,attrs:Te,slots:Te,refs:Te,setupState:Te,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:a,suspenseId:a?a.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return n.ctx={_:n},n.root=t?t.root:n,n.emit=qp.bind(null,n),e.ce&&e.ce(n),n}let Be=null;const Aa=()=>Be||Me;let _r,Di;{const e=Dl(),t=(a,s)=>{let i;return(i=e[a])||(i=e[a]=[]),i.push(s),n=>{i.length>1?i.forEach(o=>o(n)):i[0](n)}};_r=t("__VUE_INSTANCE_SETTERS__",a=>Be=a),Di=t("__VUE_SSR_SETTERS__",a=>Vs=a)}const Rs=e=>{const t=Be;return _r(e),e.scope.on(),()=>{e.scope.off(),_r(t)}},To=()=>{Be&&Be.scope.off(),_r(null)};function Lc(e){return e.vnode.shapeFlag&4}let Vs=!1;function Bm(e,t=!1){t&&Di(t);const{props:a,children:s}=e.vnode,i=Lc(e);Em(e,a,i,t),Tm(e,s);const n=i?Fm(e,t):void 0;return t&&Di(!1),n}function Fm(e,t){const a=e.type;e.accessCache=Object.create(null),e.proxy=Kl(new Proxy(e.ctx,hm));const{setup:s}=a;if(s){const i=e.setupContext=s.length>1?qm(e):null,n=Rs(e);xa();const o=sa(s,e,0,[e.props,i]);if(Ta(),n(),Ll(o)){if(o.then(To,To),t)return o.then(c=>{Ao(e,c,t)}).catch(c=>{Ds(c,e,0)});e.asyncDep=o}else Ao(e,o,t)}else Sc(e,t)}function Ao(e,t,a){se(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Ae(t)&&(e.setupState=Zl(t)),Sc(e,a)}let jo;function Sc(e,t,a){const s=e.type;if(!e.render){if(!t&&jo&&!s.render){const i=s.template||pn(e).template;if(i){const{isCustomElement:n,compilerOptions:o}=e.appContext.config,{delimiters:c,compilerOptions:u}=s,d=Ce(Ce({isCustomElement:n,delimiters:c},o),u);s.render=jo(i,d)}}e.render=s.render||dt}{const i=Rs(e);xa();try{fm(e)}finally{Ta(),i()}}}function $m(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,a){return Ze(e,"get","$attrs"),t[a]}}))}function qm(e){const t=a=>{e.exposed=a||{}};return{get attrs(){return $m(e)},slots:e.slots,emit:e.emit,expose:t}}function Cr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Zl(Kl(e.exposed)),{get(t,a){if(a in t)return t[a];if(a in us)return us[a](e)},has(t,a){return a in t||a in us}}))}function Wm(e,t=!0){return se(e)?e.displayName||e.name:e.name||t&&e.__name}function Gm(e){return se(e)&&"__vccOpts"in e}const _=(e,t)=>Dp(e,t,Vs);function y3(e,t,a=Te){const s=Aa(),i=it(t),n=na(t),o=Lr((u,d)=>{let p;return tm(()=>{const m=e[t];Pt(p,m)&&(p=m,d())}),{get(){return u(),a.get?a.get(p):p},set(m){const h=s.vnode.props;!(h&&(t in h||i in h||n in h)&&(`onUpdate:${t}`in h||`onUpdate:${i}`in h||`onUpdate:${n}`in h))&&Pt(m,p)&&(p=m,d()),s.emit(`update:${t}`,a.set?a.set(m):m)}}}),c=t==="modelValue"?"modelModifiers":`${t}Modifiers`;return o[Symbol.iterator]=()=>{let u=0;return{next(){return u<2?{value:u++?e[c]||{}:o,done:!1}:{done:!0}}}},o}function l(e,t,a){const s=arguments.length;return s===2?Ae(t)&&!X(t)?yr(t)?De(e,null,[t]):De(e,t):De(e,null,t):(s>3?a=Array.prototype.slice.call(arguments,2):s===3&&yr(a)&&(a=[a]),De(e,t,a))}const Pc="3.4.19";/**
* @vue/runtime-dom v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Um="http://www.w3.org/2000/svg",Jm="http://www.w3.org/1998/Math/MathML",ea=typeof document<"u"?document:null,Io=ea&&ea.createElement("template"),Km={insert:(e,t,a)=>{t.insertBefore(e,a||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,a,s)=>{const i=t==="svg"?ea.createElementNS(Um,e):t==="mathml"?ea.createElementNS(Jm,e):ea.createElement(e,a?{is:a}:void 0);return e==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:e=>ea.createTextNode(e),createComment:e=>ea.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ea.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,a,s,i,n){const o=a?a.previousSibling:t.lastChild;if(i&&(i===n||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),a),!(i===n||!(i=i.nextSibling)););else{Io.innerHTML=s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e;const c=Io.content;if(s==="svg"||s==="mathml"){const u=c.firstChild;for(;u.firstChild;)c.appendChild(u.firstChild);c.removeChild(u)}t.insertBefore(c,a)}return[o?o.nextSibling:t.firstChild,a?a.previousSibling:t.lastChild]}},Ut="transition",ss="animation",Ga=Symbol("_vtc"),ia=(e,{slots:t})=>l(rm,Oc(e),t);ia.displayName="Transition";const Dc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Qm=ia.props=Ce({},oc,Dc),ma=(e,t=[])=>{X(e)?e.forEach(a=>a(...t)):e&&e(...t)},Lo=e=>e?X(e)?e.some(t=>t.length>1):e.length>1:!1;function Oc(e){const t={};for(const N in e)N in Dc||(t[N]=e[N]);if(e.css===!1)return t;const{name:a="v",type:s,duration:i,enterFromClass:n=`${a}-enter-from`,enterActiveClass:o=`${a}-enter-active`,enterToClass:c=`${a}-enter-to`,appearFromClass:u=n,appearActiveClass:d=o,appearToClass:p=c,leaveFromClass:m=`${a}-leave-from`,leaveActiveClass:h=`${a}-leave-active`,leaveToClass:f=`${a}-leave-to`}=e,g=Ym(i),E=g&&g[0],k=g&&g[1],{onBeforeEnter:y,onEnter:T,onEnterCancelled:b,onLeave:j,onLeaveCancelled:C,onBeforeAppear:A=y,onAppear:V=T,onAppearCancelled:O=b}=t,M=(N,ee,Se)=>{Kt(N,ee?p:c),Kt(N,ee?d:o),Se&&Se()},B=(N,ee)=>{N._isLeaving=!1,Kt(N,m),Kt(N,f),Kt(N,h),ee&&ee()},Q=N=>(ee,Se)=>{const Ie=N?V:T,U=()=>M(ee,N,Se);ma(Ie,[ee,U]),So(()=>{Kt(ee,N?u:n),Ht(ee,N?p:c),Lo(Ie)||Po(ee,s,E,U)})};return Ce(t,{onBeforeEnter(N){ma(y,[N]),Ht(N,n),Ht(N,o)},onBeforeAppear(N){ma(A,[N]),Ht(N,u),Ht(N,d)},onEnter:Q(!1),onAppear:Q(!0),onLeave(N,ee){N._isLeaving=!0;const Se=()=>B(N,ee);Ht(N,m),Vc(),Ht(N,h),So(()=>{N._isLeaving&&(Kt(N,m),Ht(N,f),Lo(j)||Po(N,s,k,Se))}),ma(j,[N,Se])},onEnterCancelled(N){M(N,!1),ma(b,[N])},onAppearCancelled(N){M(N,!0),ma(O,[N])},onLeaveCancelled(N){B(N),ma(C,[N])}})}function Ym(e){if(e==null)return null;if(Ae(e))return[ai(e.enter),ai(e.leave)];{const t=ai(e);return[t,t]}}function ai(e){return ap(e)}function Ht(e,t){t.split(/\s+/).forEach(a=>a&&e.classList.add(a)),(e[Ga]||(e[Ga]=new Set)).add(t)}function Kt(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const a=e[Ga];a&&(a.delete(t),a.size||(e[Ga]=void 0))}function So(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Zm=0;function Po(e,t,a,s){const i=e._endId=++Zm,n=()=>{i===e._endId&&s()};if(a)return setTimeout(n,a);const{type:o,timeout:c,propCount:u}=Rc(e,t);if(!o)return s();const d=o+"end";let p=0;const m=()=>{e.removeEventListener(d,h),n()},h=f=>{f.target===e&&++p>=u&&m()};setTimeout(()=>{p<u&&m()},c+1),e.addEventListener(d,h)}function Rc(e,t){const a=window.getComputedStyle(e),s=g=>(a[g]||"").split(", "),i=s(`${Ut}Delay`),n=s(`${Ut}Duration`),o=Do(i,n),c=s(`${ss}Delay`),u=s(`${ss}Duration`),d=Do(c,u);let p=null,m=0,h=0;t===Ut?o>0&&(p=Ut,m=o,h=n.length):t===ss?d>0&&(p=ss,m=d,h=u.length):(m=Math.max(o,d),p=m>0?o>d?Ut:ss:null,h=p?p===Ut?n.length:u.length:0);const f=p===Ut&&/\b(transform|all)(,|$)/.test(s(`${Ut}Property`).toString());return{type:p,timeout:m,propCount:h,hasTransform:f}}function Do(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((a,s)=>Oo(a)+Oo(e[s])))}function Oo(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Vc(){return document.body.offsetHeight}function Xm(e,t,a){const s=e[Ga];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):a?e.setAttribute("class",t):e.className=t}const ks=Symbol("_vod"),_3={beforeMount(e,{value:t},{transition:a}){e[ks]=e.style.display==="none"?"":e.style.display,a&&t?a.beforeEnter(e):rs(e,t)},mounted(e,{value:t},{transition:a}){a&&t&&a.enter(e)},updated(e,{value:t,oldValue:a},{transition:s}){!t==!a&&(e.style.display===e[ks]||!t)||(s?t?(s.beforeEnter(e),rs(e,!0),s.enter(e)):s.leave(e,()=>{rs(e,!1)}):rs(e,t))},beforeUnmount(e,{value:t}){rs(e,t)}};function rs(e,t){e.style.display=t?e[ks]:"none"}const eh=Symbol(""),th=/(^|;)\s*display\s*:/;function ah(e,t,a){const s=e.style,i=Oe(a),n=s.display;let o=!1;if(a&&!i){if(t&&!Oe(t))for(const c in t)a[c]==null&&Oi(s,c,"");for(const c in a)c==="display"&&(o=!0),Oi(s,c,a[c])}else if(i){if(t!==a){const c=s[eh];c&&(a+=";"+c),s.cssText=a,o=th.test(a)}}else t&&e.removeAttribute("style");ks in e&&(e[ks]=o?s.display:"",s.display=n)}const Ro=/\s*!important$/;function Oi(e,t,a){if(X(a))a.forEach(s=>Oi(e,t,s));else if(a==null&&(a=""),t.startsWith("--"))e.setProperty(t,a);else{const s=sh(e,t);Ro.test(a)?e.setProperty(na(s),a.replace(Ro,""),"important"):e[s]=a}}const Vo=["Webkit","Moz","ms"],si={};function sh(e,t){const a=si[t];if(a)return a;let s=it(t);if(s!=="filter"&&s in e)return si[t]=s;s=Ss(s);for(let i=0;i<Vo.length;i++){const n=Vo[i]+s;if(n in e)return si[t]=n}return t}const Co="http://www.w3.org/1999/xlink";function rh(e,t,a,s,i){if(s&&t.startsWith("xlink:"))a==null?e.removeAttributeNS(Co,t.slice(6,t.length)):e.setAttributeNS(Co,t,a);else{const n=lp(t);a==null||n&&!Ol(a)?e.removeAttribute(t):e.setAttribute(t,n?"":a)}}function ih(e,t,a,s,i,n,o){if(t==="innerHTML"||t==="textContent"){s&&o(s,i,n),e[t]=a??"";return}const c=e.tagName;if(t==="value"&&c!=="PROGRESS"&&!c.includes("-")){e._value=a;const d=c==="OPTION"?e.getAttribute("value"):e.value,p=a??"";d!==p&&(e.value=p),a==null&&e.removeAttribute(t);return}let u=!1;if(a===""||a==null){const d=typeof e[t];d==="boolean"?a=Ol(a):a==null&&d==="string"?(a="",u=!0):d==="number"&&(a=0,u=!0)}try{e[t]=a}catch{}u&&e.removeAttribute(t)}function Pa(e,t,a,s){e.addEventListener(t,a,s)}function nh(e,t,a,s){e.removeEventListener(t,a,s)}const Mo=Symbol("_vei");function oh(e,t,a,s,i=null){const n=e[Mo]||(e[Mo]={}),o=n[t];if(s&&o)o.value=s;else{const[c,u]=lh(t);if(s){const d=n[t]=dh(s,i);Pa(e,c,d,u)}else o&&(nh(e,c,o,u),n[t]=void 0)}}const Ho=/(?:Once|Passive|Capture)$/;function lh(e){let t;if(Ho.test(e)){t={};let s;for(;s=e.match(Ho);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):na(e.slice(2)),t]}let ri=0;const ch=Promise.resolve(),uh=()=>ri||(ch.then(()=>ri=0),ri=Date.now());function dh(e,t){const a=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=a.attached)return;pt(ph(s,a.value),t,5,[s])};return a.value=e,a.attached=uh(),a}function ph(e,t){if(X(t)){const a=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{a.call(e),e._stopped=!0},t.map(s=>i=>!i._stopped&&s&&s(i))}else return t}const No=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,mh=(e,t,a,s,i,n,o,c,u)=>{const d=i==="svg";t==="class"?Xm(e,s,d):t==="style"?ah(e,a,s):Ls(t)?Yi(t)||oh(e,t,a,s,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):hh(e,t,s,d))?ih(e,t,s,n,o,c,u):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),rh(e,t,s,d))};function hh(e,t,a,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&No(t)&&se(a));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return No(t)&&Oe(a)?!1:t in e}const Cc=new WeakMap,Mc=new WeakMap,br=Symbol("_moveCb"),zo=Symbol("_enterCb"),Hc={name:"TransitionGroup",props:Ce({},Qm,{tag:String,moveClass:String}),setup(e,{slots:t}){const a=Aa(),s=nc();let i,n;return uc(()=>{if(!i.length)return;const o=e.moveClass||`${e.name||"v"}-move`;if(!_h(i[0].el,a.vnode.el,o))return;i.forEach(gh),i.forEach(vh);const c=i.filter(yh);Vc(),c.forEach(u=>{const d=u.el,p=d.style;Ht(d,o),p.transform=p.webkitTransform=p.transitionDuration="";const m=d[br]=h=>{h&&h.target!==d||(!h||/transform$/.test(h.propertyName))&&(d.removeEventListener("transitionend",m),d[br]=null,Kt(d,o))};d.addEventListener("transitionend",m)})}),()=>{const o=ue(e),c=Oc(o);let u=o.tag||Ue;i=n,n=t.default?dn(t.default()):[];for(let d=0;d<n.length;d++){const p=n[d];p.key!=null&&bs(p,_s(p,c,s,a))}if(i)for(let d=0;d<i.length;d++){const p=i[d];bs(p,_s(p,c,s,a)),Cc.set(p,p.el.getBoundingClientRect())}return De(u,null,n)}}},fh=e=>delete e.mode;Hc.props;const wh=Hc;function gh(e){const t=e.el;t[br]&&t[br](),t[zo]&&t[zo]()}function vh(e){Mc.set(e,e.el.getBoundingClientRect())}function yh(e){const t=Cc.get(e),a=Mc.get(e),s=t.left-a.left,i=t.top-a.top;if(s||i){const n=e.el.style;return n.transform=n.webkitTransform=`translate(${s}px,${i}px)`,n.transitionDuration="0s",e}}function _h(e,t,a){const s=e.cloneNode(),i=e[Ga];i&&i.forEach(c=>{c.split(/\s+/).forEach(u=>u&&s.classList.remove(u))}),a.split(/\s+/).forEach(c=>c&&s.classList.add(c)),s.style.display="none";const n=t.nodeType===1?t:t.parentNode;n.appendChild(s);const{hasTransform:o}=Rc(s);return n.removeChild(s),o}const Bo=e=>{const t=e.props["onUpdate:modelValue"]||!1;return X(t)?a=>ur(t,a):t};function bh(e){e.target.composing=!0}function Fo(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ii=Symbol("_assign"),b3={created(e,{modifiers:{lazy:t,trim:a,number:s}},i){e[ii]=Bo(i);const n=s||i.props&&i.props.type==="number";Pa(e,t?"change":"input",o=>{if(o.target.composing)return;let c=e.value;a&&(c=c.trim()),n&&(c=ki(c)),e[ii](c)}),a&&Pa(e,"change",()=>{e.value=e.value.trim()}),t||(Pa(e,"compositionstart",bh),Pa(e,"compositionend",Fo),Pa(e,"change",Fo))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:a,trim:s,number:i}},n){if(e[ii]=Bo(n),e.composing)return;const o=i||e.type==="number"?ki(e.value):e.value,c=t??"";o!==c&&(document.activeElement===e&&e.type!=="range"&&(a||s&&e.value.trim()===c)||(e.value=c))}},Eh=["ctrl","shift","alt","meta"],kh={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Eh.some(a=>e[`${a}Key`]&&!t.includes(a))},E3=(e,t)=>{const a=e._withMods||(e._withMods={}),s=t.join(".");return a[s]||(a[s]=(i,...n)=>{for(let o=0;o<t.length;o++){const c=kh[t[o]];if(c&&c(i,t))return}return e(i,...n)})},xh={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},k3=(e,t)=>{const a=e._withKeys||(e._withKeys={}),s=t.join(".");return a[s]||(a[s]=i=>{if(!("key"in i))return;const n=na(i.key);if(t.some(o=>o===n||xh[o]===n))return e(i)})},Th=Ce({patchProp:mh},Km);let ni,$o=!1;function Ah(){return ni=$o?ni:Sm(Th),$o=!0,ni}const jh=(...e)=>{const t=Ah().createApp(...e),{mount:a}=t;return t.mount=s=>{const i=Lh(s);if(i)return a(i,!0,Ih(i))},t};function Ih(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Lh(e){return Oe(e)?document.querySelector(e):e}var Sh=["link","meta","script","style","noscript","template"],Ph=["title","base"],Dh=([e,t,a])=>Ph.includes(e)?e:Sh.includes(e)?e==="meta"&&t.name?`${e}.${t.name}`:e==="template"&&t.id?`${e}.${t.id}`:JSON.stringify([e,Object.entries(t).map(([s,i])=>typeof i=="boolean"?i?[s,""]:null:[s,i]).filter(s=>s!=null).sort(([s],[i])=>s.localeCompare(i)),a]):null,Oh=e=>{const t=new Set,a=[];return e.forEach(s=>{const i=Dh(s);i&&!t.has(i)&&(t.add(i),a.push(s))}),a},Rh=e=>e[0]==="/"?e:`/${e}`,fn=e=>e[e.length-1]==="/"||e.endsWith(".html")?e:`${e}/`,Et=e=>/^(https?:)?\/\//.test(e),Vh=/.md((\?|#).*)?$/,Ea=(e,t="/")=>!!(Et(e)||e.startsWith("/")&&!e.startsWith(t)&&!Vh.test(e)),Nc=e=>/^[a-z][a-z0-9+.-]*:/.test(e),yt=e=>Object.prototype.toString.call(e)==="[object Object]",Ch=e=>{const[t,...a]=e.split(/(\?|#)/);if(!t||t.endsWith("/"))return e;let s=t.replace(/(^|\/)README.md$/i,"$1index.html");return s.endsWith(".md")?s=s.substring(0,s.length-3)+".html":s.endsWith(".html")||(s=s+".html"),s.endsWith("/index.html")&&(s=s.substring(0,s.length-10)),s+a.join("")},Mr=e=>e[e.length-1]==="/"?e.slice(0,-1):e,zc=e=>e[0]==="/"?e.slice(1):e,Mh=(e,t)=>{const a=Object.keys(e).sort((s,i)=>{const n=i.split("/").length-s.split("/").length;return n!==0?n:i.length-s.length});for(const s of a)if(t.startsWith(s))return s;return"/"},Bc=e=>typeof e=="function",ke=e=>typeof e=="string";const Hh="modulepreload",Nh=function(e){return"/crashcourse/"+e},qo={},r=function(t,a,s){let i=Promise.resolve();if(a&&a.length>0){const n=document.getElementsByTagName("link");i=Promise.all(a.map(o=>{if(o=Nh(o),o in qo)return;qo[o]=!0;const c=o.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(!!s)for(let m=n.length-1;m>=0;m--){const h=n[m];if(h.href===o&&(!c||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${u}`))return;const p=document.createElement("link");if(p.rel=c?"stylesheet":Hh,c||(p.as="script",p.crossOrigin=""),p.href=o,document.head.appendChild(p),c)return new Promise((m,h)=>{p.addEventListener("load",m),p.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${o}`)))})}))}return i.then(()=>t()).catch(n=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=n,window.dispatchEvent(o),!o.defaultPrevented)throw n})},zh=JSON.parse('{"/cpp/nvidia-dli+s-ac-04/":"/cpp/nvidia-dli_s-ac-04/","/cpp/nvidia-dli+s-ac-04/README.md":"/cpp/nvidia-dli_s-ac-04/","/cpp/nvidia-dli+s-ac-07/":"/cpp/nvidia-dli_s-ac-07/","/cpp/nvidia-dli+s-ac-07/README.md":"/cpp/nvidia-dli_s-ac-07/","/cpp/nvidia-dli+s-ac-08/":"/cpp/nvidia-dli_s-ac-08/","/cpp/nvidia-dli+s-ac-08/README.md":"/cpp/nvidia-dli_s-ac-08/","/cpp/nvidia-dli+s-ac-09/":"/cpp/nvidia-dli_s-ac-09/","/cpp/nvidia-dli+s-ac-09/README.md":"/cpp/nvidia-dli_s-ac-09/"}'),Bh=Object.fromEntries([["/",{loader:()=>r(()=>import("./index.html-CUQuuPsb.js"),__vite__mapDeps([0,1])),meta:{y:"h",t:"Home"}}],["/cli/",{loader:()=>r(()=>import("./index.html-DXwVFEt0.js"),__vite__mapDeps([2,1])),meta:{c:["CLI"],g:["crashcourse","cli","sh","shell","gnu","linux","awk"],e:`
<div class="hint-container tip">
<p class="hint-container-title">NOTE</p>
<p>{{ $frontmatter.description }} 관련 정리내용입니다.</p>
</div>
`,r:{minutes:.24,words:73},y:"a",t:"CLI",i:"iconfont icon-shell"}}],["/cpp/",{loader:()=>r(()=>import("./index.html-DuH4rw7y.js"),__vite__mapDeps([3,1])),meta:{c:["cpp"],g:["crashcourse","c","cpp","c-plus-plus","algorithm"],e:`
<div class="hint-container tip">
<p class="hint-container-title">NOTE</p>
<p>{{ $frontmatter.description }} 관련 정리내용입니다.</p>
</div>
`,r:{minutes:.16,words:49},y:"a",t:"cpp",i:"fas fa-dice-two"}}],["/devops/",{loader:()=>r(()=>import("./index.html-BT9-Niar.js"),__vite__mapDeps([4,1])),meta:{c:["DevOps","Gitlab","Kubernetes","Linux","RedHat","AWS"],g:["aws","amazon-web-service","amazon","git","gitlab","kubernetes","linux","redhat"],e:`
<div class="hint-container tip">
<p class="hint-container-title">NOTE</p>
<p>{{ $frontmatter.description }} 관련 정리내용입니다.</p>
</div>
`,r:{minutes:.4,words:121},y:"a",t:"DevOps",i:"fas fa-cubes-stacked"}}],["/haskell/",{loader:()=>r(()=>import("./index.html-Cu3cLCzx.js"),__vite__mapDeps([5,1])),meta:{c:["Haskell"],g:["crashcourse","haskell","parsec","attoparsec","trifecta"],e:`
<div class="hint-container tip">
<p class="hint-container-title">NOTE</p>
<p>{{ $frontmatter.description }} 관련 정리내용입니다.</p>
</div>
`,r:{minutes:.14,words:41},y:"a",t:"Haskell",i:"iconfont icon-haskell"}}],["/java/",{loader:()=>r(()=>import("./index.html-UNxrY2j0.js"),__vite__mapDeps([6,1])),meta:{c:["Java","Kotlin","Spring","Gradle","Android"],g:["crashcourse","java","kotiln","android","gradle"],e:`
<div class="hint-container tip">
<p class="hint-container-title">NOTE</p>
<p>{{ $frontmatter.description }} 관련 정리내용입니다.</p>
</div>
`,r:{minutes:.34,words:103},y:"a",t:"Java / Kotlin / Spring",i:"fa-brands fa-java"}}],["/js/",{loader:()=>r(()=>import("./index.html-BgtFEey6.js"),__vite__mapDeps([7,1])),meta:{g:["javascript","js","typescript","ts"],e:`
<div class="hint-container tip">
<p class="hint-container-title">NOTE</p>
<p>{{ $frontmatter.description }} 관련 정리내용입니다.</p>
</div>
`,r:{minutes:.2,words:60},y:"a",t:"JavaScript",i:"fa-brands fa-js"}}],["/php/",{loader:()=>r(()=>import("./index.html-D5oCSWS1.js"),__vite__mapDeps([8,1])),meta:{g:["php","laravel"],e:`
<div class="hint-container tip">
<p class="hint-container-title">NOTE</p>
<p>{{ $frontmatter.description }} 관련 정리내용입니다.</p>
</div>
`,r:{minutes:.15,words:44},y:"a",t:"PHP",i:"fa-brands fa-php"}}],["/python/",{loader:()=>r(()=>import("./index.html-B3i2d1sK.js"),__vite__mapDeps([9,1])),meta:{c:["Python"],g:["crashcourse","python","py","OpenPyxl","pywin32","xlwings","python-docx","excel"],e:`
<div class="hint-container tip">
<p class="hint-container-title">NOTE</p>
<p>{{ $frontmatter.description }} 관련 정리내용입니다.</p>
</div>
`,r:{minutes:.18,words:55},y:"a",t:"Python",i:"fa-brands fa-python"}}],["/ruby/",{loader:()=>r(()=>import("./index.html-CCVgK14s.js"),__vite__mapDeps([10,1])),meta:{c:["Ruby"],g:["ruby","rb"],e:`
<div class="hint-container tip">
<p class="hint-container-title">NOTE</p>
<p>{{ $frontmatter.description }} 관련 정리내용입니다.</p>
</div>
`,r:{minutes:.14,words:41},y:"a",t:"Ruby",i:"fas fa-gem"}}],["/rust/",{loader:()=>r(()=>import("./index.html-KSwe53R4.js"),__vite__mapDeps([11,1])),meta:{c:["Rust"],g:["crashcourse","rust","rs"],e:`
<div class="hint-container tip">
<p class="hint-container-title">NOTE</p>
<p>{{ $frontmatter.description }} 관련 정리내용입니다.</p>
</div>
`,r:{minutes:.22,words:67},y:"a",t:"Rust",i:"fa-brands fa-rust"}}],["/swift/",{loader:()=>r(()=>import("./index.html-CfxgUKud.js"),__vite__mapDeps([12,1])),meta:{c:["Swift","Objective-C"],g:["crashcourse","swift","objc","objective-c","cocoapods"],e:`
<div class="hint-container tip">
<p class="hint-container-title">NOTE</p>
<p>{{ $frontmatter.description }} 관련 정리내용입니다.</p>
</div>
`,r:{minutes:.35,words:105},y:"a",t:"Swift",i:"fa-brands fa-swift"}}],["/cli/bash-dev/01.html",{loader:()=>r(()=>import("./01.html-BeW7_nlY.js"),__vite__mapDeps([13,1])),meta:{c:["CLI","Linux"],g:["crashcourse","cli","sh","shell","linux"],e:`

<hr>
`,r:{minutes:1.89,words:566},y:"a",t:"1. 리눅스 기초"}}],["/cli/bash-dev/02.html",{loader:()=>r(()=>import("./02.html-D-V1R337.js"),__vite__mapDeps([14,1])),meta:{c:["CLI","Linux"],g:["crashcourse","cli","sh","shell","linux"],e:`

<hr>
`,r:{minutes:.29,words:88},y:"a",t:"2. 명령어"}}],["/cli/bash-dev/03.html",{loader:()=>r(()=>import("./03.html-CuI_FV0x.js"),__vite__mapDeps([15,1])),meta:{c:["CLI","Linux"],g:["crashcourse","cli","sh","shell","linux"],e:`

<hr>
`,r:{minutes:.2,words:60},y:"a",t:"3. 쉘스크립트"}}],["/cli/bash-dev/04.html",{loader:()=>r(()=>import("./04.html-DElwaBhB.js"),__vite__mapDeps([16,1])),meta:{c:["CLI","Linux"],g:["crashcourse","cli","sh","shell","linux"],e:`

<hr>
`,r:{minutes:.2,words:60},y:"a",t:"4. 서비스 운영 스크립트"}}],["/cli/bash-dev/",{loader:()=>r(()=>import("./index.html-BtBlConQ.js"),__vite__mapDeps([17,1])),meta:{c:["CLI","Linux"],g:["crashcourse","cli","sh","shell","linux"],e:`

<hr>
`,r:{minutes:.94,words:282},y:"a",t:"Bash 쉘스크립트 개발 시작하기",i:"iconfont icon-shell"}}],["/cli/mastering-curl-interactive-text-guide/01-the-curl-project.html",{loader:()=>r(()=>import("./01-the-curl-project.html-Dl0VdxS_.js"),__vite__mapDeps([18,1])),meta:{c:["CLI","Linux"],g:["crashcourse","cli","sh","shell","gnu","linux","awk"],e:`

<hr>
`,r:{minutes:1.72,words:515},y:"a",t:"1. The curl Project"}}],["/cli/mastering-curl-interactive-text-guide/02-command-line-options.html",{loader:()=>r(()=>import("./02-command-line-options.html-dd_A82XK.js"),__vite__mapDeps([19,1])),meta:{c:["CLI","Linux"],g:["crashcourse","cli","sh","shell","gnu","linux","awk"],e:`

<hr>
`,r:{minutes:1.57,words:470},y:"a",t:"2. Command line options"}}],["/cli/mastering-curl-interactive-text-guide/03-urls.html",{loader:()=>r(()=>import("./03-urls.html-B-EV-6gW.js"),__vite__mapDeps([20,1])),meta:{c:["CLI","Linux"],g:["crashcourse","cli","sh","shell","gnu","linux","awk"],e:`

<hr>
`,r:{minutes:2.79,words:836},y:"a",t:"3. URLs"}}],["/cli/mastering-curl-interactive-text-guide/04-curl-basics.html",{loader:()=>r(()=>import("./04-curl-basics.html-Biowv99v.js"),__vite__mapDeps([21,1])),meta:{c:["CLI","Linux"],g:["crashcourse","cli","sh","shell","gnu","linux","awk"],e:`

<hr>
`,r:{minutes:7.15,words:2146},y:"a",t:"4. Curl basics"}}],["/cli/mastering-curl-interactive-text-guide/05-http.html",{loader:()=>r(()=>import("./05-http.html-DL2vP0Jn.js"),__vite__mapDeps([22,1])),meta:{c:["CLI","Linux"],g:["crashcourse","cli","sh","shell","gnu","linux","awk"],e:`

<hr>
`,r:{minutes:8.39,words:2517},y:"a",t:"5. HTTP"}}],["/cli/mastering-curl-interactive-text-guide/",{loader:()=>r(()=>import("./index.html-Dslo3LuE.js"),__vite__mapDeps([23,1])),meta:{c:["CLI","Linux"],g:["crashcourse","cli","sh","shell","gnu","linux","awk"],e:`

<hr>
`,r:{minutes:.93,words:278},y:"a",t:"Mastering Curl - Interactive Text Guide",i:"iconfont icon-shell"}}],["/cli/text-processing-w-gnu-awk/01-installation-and-documentation.html",{loader:()=>r(()=>import("./01-installation-and-documentation.html-D8DozBQu.js"),__vite__mapDeps([24,1])),meta:{c:["CLI","Linux"],g:["crashcourse","cli","sh","shell","gnu","linux","awk"],e:`

<hr>
`,r:{minutes:2.36,words:709},y:"a",t:"1. Installation and Documentation"}}],["/cli/text-processing-w-gnu-awk/02-awk-introduction.html",{loader:()=>r(()=>import("./02-awk-introduction.html-D0mAhBV0.js"),__vite__mapDeps([25,1])),meta:{c:["CLI","Linux"],g:["crashcourse","cli","sh","shell","gnu","linux","awk"],e:`

<hr>
`,r:{minutes:8.81,words:2642},y:"a",t:"2. awk Introduction"}}],["/cli/text-processing-w-gnu-awk/03-regular-expressions.html",{loader:()=>r(()=>import("./03-regular-expressions.html-B2Sco0Ma.js"),__vite__mapDeps([26,1])),meta:{c:["CLI","Linux"],g:["crashcourse","cli","sh","shell","gnu","linux","awk"],e:`

<hr>
`,r:{minutes:29.63,words:8889},y:"a",t:"3. Regular Expressions"}}],["/cli/text-processing-w-gnu-awk/04-field-separators.html",{loader:()=>r(()=>import("./04-field-separators.html-Da1S2SVZ.js"),__vite__mapDeps([27,1])),meta:{c:["CLI","Linux"],g:["crashcourse","cli","sh","shell","gnu","linux","awk"],e:`

<hr>
`,r:{minutes:12.65,words:3794},y:"a",t:"4. Field separators"}}],["/cli/text-processing-w-gnu-awk/05-record-separators.html",{loader:()=>r(()=>import("./05-record-separators.html-DJbZbnNt.js"),__vite__mapDeps([28,1])),meta:{c:["CLI","Linux"],g:["crashcourse","cli","sh","shell","gnu","linux","awk"],e:`

<hr>
`,r:{minutes:12.54,words:3763},y:"a",t:"5. Record separators"}}],["/cli/text-processing-w-gnu-awk/06-in-place-file-editing.html",{loader:()=>r(()=>import("./06-in-place-file-editing.html-T2ftFm8f.js"),__vite__mapDeps([29,1])),meta:{c:["CLI","Linux"],g:["crashcourse","cli","sh","shell","gnu","linux","awk"],e:`

<hr>
`,r:{minutes:3.12,words:936},y:"a",t:"6. In-place file editing"}}],["/cli/text-processing-w-gnu-awk/07-using-shell-variables.html",{loader:()=>r(()=>import("./07-using-shell-variables.html-BBWanq1i.js"),__vite__mapDeps([30,1])),meta:{c:["CLI","Linux"],g:["crashcourse","cli","sh","shell","gnu","linux","awk"],e:`

<hr>
`,r:{minutes:2.54,words:763},y:"a",t:"7. Using shell variables"}}],["/cli/text-processing-w-gnu-awk/08-control-structures.html",{loader:()=>r(()=>import("./08-control-structures.html-DEONlG0U.js"),__vite__mapDeps([31,1])),meta:{c:["CLI","Linux"],g:["crashcourse","cli","sh","shell","gnu","linux","awk"],e:`

<hr>
`,r:{minutes:6.01,words:1804},y:"a",t:"8. Control Structures"}}],["/cli/text-processing-w-gnu-awk/09-built-in-functions.html",{loader:()=>r(()=>import("./09-built-in-functions.html-CQ2Lk5Ax.js"),__vite__mapDeps([32,1])),meta:{c:["CLI","Linux"],g:["crashcourse","cli","sh","shell","gnu","linux","awk"],e:`

<hr>
`,r:{minutes:15.99,words:4798},y:"a",t:"9. Built-in functions"}}],["/cli/text-processing-w-gnu-awk/10-multiple-file-input.html",{loader:()=>r(()=>import("./10-multiple-file-input.html-D8Y-1KoW.js"),__vite__mapDeps([33,1])),meta:{c:["CLI","Linux"],g:["crashcourse","cli","sh","shell","gnu","linux","awk"],e:`

<hr>
`,r:{minutes:3.46,words:1038},y:"a",t:"10. Multiple file input"}}],["/cli/text-processing-w-gnu-awk/11-processing-multiple-records.html",{loader:()=>r(()=>import("./11-processing-multiple-records.html-BEFN9yX7.js"),__vite__mapDeps([34,1])),meta:{c:["CLI","Linux"],g:["crashcourse","cli","sh","shell","gnu","linux","awk"],e:`

<hr>
`,r:{minutes:10.78,words:3234},y:"a",t:"11. Processing multiple records"}}],["/cli/text-processing-w-gnu-awk/12-two-file-processing.html",{loader:()=>r(()=>import("./12-two-file-processing.html-OA488Fs1.js"),__vite__mapDeps([35,1])),meta:{c:["CLI","Linux"],g:["crashcourse","cli","sh","shell","gnu","linux","awk"],e:`

<hr>
`,r:{minutes:7.51,words:2253},y:"a",t:"12. Two file processing"}}],["/cli/text-processing-w-gnu-awk/13-dealing-with-duplicates.html",{loader:()=>r(()=>import("./13-dealing-with-duplicates.html-DEIjHzMu.js"),__vite__mapDeps([36,1])),meta:{c:["CLI","Linux"],g:["crashcourse","cli","sh","shell","gnu","linux","awk"],e:`

<hr>
`,r:{minutes:4.28,words:1285},y:"a",t:"13. Dealing with duplicates"}}],["/cli/text-processing-w-gnu-awk/14-awk-scripts.html",{loader:()=>r(()=>import("./14-awk-scripts.html-BpnJN40J.js"),__vite__mapDeps([37,1])),meta:{c:["CLI","Linux"],g:["crashcourse","cli","sh","shell","gnu","linux","awk"],e:`

<hr>
`,r:{minutes:3.54,words:1063},y:"a",t:"14. awk scripts"}}],["/cli/text-processing-w-gnu-awk/15-gotchas-and-tips.html",{loader:()=>r(()=>import("./15-gotchas-and-tips.html-DIeD4Wzh.js"),__vite__mapDeps([38,1])),meta:{c:["CLI","Linux"],g:["crashcourse","cli","sh","shell","gnu","linux","awk"],e:`

<hr>
`,r:{minutes:6.83,words:2049},y:"a",t:"15. Gotchas and Tips"}}],["/cli/text-processing-w-gnu-awk/16-further-reading.html",{loader:()=>r(()=>import("./16-further-reading.html-DvQhoFBl.js"),__vite__mapDeps([39,1])),meta:{c:["CLI","Linux"],g:["crashcourse","cli","sh","shell","gnu","linux","awk"],e:`

<hr>
`,r:{minutes:1.63,words:490},y:"a",t:"16. Further Reading"}}],["/cli/text-processing-w-gnu-awk/",{loader:()=>r(()=>import("./index.html-Dej1wzYW.js"),__vite__mapDeps([40,1])),meta:{c:["CLI","Linux"],g:["crashcourse","cli","sh","shell","gnu","linux","awk"],e:`

<hr>
`,r:{minutes:4.16,words:1249},y:"a",t:"Text Processing with GNU awk",i:"iconfont icon-shell"}}],["/cpp/algorithms-for-competitive-programming/",{loader:()=>r(()=>import("./index.html-3WYJYSA1.js"),__vite__mapDeps([41,1])),meta:{c:["Cpp"],g:["crashcourse","cpp","c-plus-plus","algorithm"],e:`

<hr>
`,r:{minutes:1.23,words:370},y:"a",t:"Algorithms for Competitive Programming",i:"fas fa-dice-two"}}],["/cpp/nvidia-dli_s-ac-04/",{loader:()=>r(()=>import("./index.html-gTV3e_5Y.js"),__vite__mapDeps([42,1])),meta:{c:["Cpp","GPU","CUDA"],g:["crashcourse","cpp","c-plus-plus","accelerated-computing"],e:`

<hr>
`,r:{minutes:1.82,words:546},y:"a",t:"Getting Started with Accelerated Computing in CUDA C/C++ | NVIDIA",i:"fas fa-dice-two"}}],["/cpp/nvidia-dli_s-ac-07/",{loader:()=>r(()=>import("./index.html-Gv_Fjhe1.js"),__vite__mapDeps([43,1])),meta:{c:["Cpp","GPU","CUDA"],g:["crashcourse","cpp","c-plus-plus","accelerated-computing"],e:`

<hr>
`,r:{minutes:.5,words:150},y:"a",t:"Scaling CUDA C++ Applications to Multiple Nodes | NVIDIA",i:"fas fa-dice-two"}}],["/cpp/nvidia-dli_s-ac-08/",{loader:()=>r(()=>import("./index.html-B6ChWb-B.js"),__vite__mapDeps([44,1])),meta:{c:["Cpp","GPU","CUDA"],g:["crashcourse","cpp","c-plus-plus","accelerated-computing"],e:`

<hr>
`,r:{minutes:.5,words:150},y:"a",t:"GPU Acceleration with the C++ Standard Library | NVIDIA",i:"fas fa-dice-two"}}],["/cpp/nvidia-dli_s-ac-09/",{loader:()=>r(()=>import("./index.html-B_vcb48A.js"),__vite__mapDeps([45,1])),meta:{c:["Cpp","GPU"],g:["crashcourse","cpp","c-plus-plus","accelerated-computing"],e:`

<hr>
`,r:{minutes:2.51,words:754},y:"a",t:"Scaling GPU-Accelerated Applications with the C++ Standard Library | NVIDIA",i:"fas fa-dice-two"}}],["/devops/digital-forensics-lab/01.html",{loader:()=>r(()=>import("./01.html-DNIckxJi.js"),__vite__mapDeps([46,1])),meta:{c:["Security"],g:["crashcourse","security","github"],e:`

<hr>
`,r:{minutes:.33,words:100},y:"a",t:"Lab 1 — Introduction to Digital Forensics"}}],["/devops/digital-forensics-lab/02.html",{loader:()=>r(()=>import("./02.html-UAC_GgJh.js"),__vite__mapDeps([47,1])),meta:{c:["Security"],g:["crashcourse","security","github"],e:`

<hr>
`,r:{minutes:.31,words:94},y:"a",t:"Lab 2 — Common Windows Artifacts"}}],["/devops/digital-forensics-lab/03.html",{loader:()=>r(()=>import("./03.html-W_rpTyBx.js"),__vite__mapDeps([48,1])),meta:{c:["Security"],g:["crashcourse","security","github"],e:`

<hr>
`,r:{minutes:.33,words:100},y:"a",t:"Lab 3 — Document Analysis and Steganography"}}],["/devops/digital-forensics-lab/04.html",{loader:()=>r(()=>import("./04.html-BHesD94r.js"),__vite__mapDeps([49,1])),meta:{c:["Security"],g:["crashcourse","security","github"],e:`

<hr>
`,r:{minutes:.31,words:94},y:"a",t:"Lab 4 — Web Attack Forensics"}}],["/devops/digital-forensics-lab/05.html",{loader:()=>r(()=>import("./05.html-Beu0vxNb.js"),__vite__mapDeps([50,1])),meta:{c:["Security"],g:["crashcourse","security","github"],e:`

<hr>
`,r:{minutes:.31,words:94},y:"a",t:"Lab 5 — Network Traffic Forensics"}}],["/devops/digital-forensics-lab/06.html",{loader:()=>r(()=>import("./06.html-zXSiIc5G.js"),__vite__mapDeps([51,1])),meta:{c:["Security"],g:["crashcourse","security","github"],e:`

<hr>
`,r:{minutes:.31,words:94},y:"a",t:"Lab 6 — Disk Image Forensics"}}],["/devops/digital-forensics-lab/07.html",{loader:()=>r(()=>import("./07.html-B2PzMhIn.js"),__vite__mapDeps([52,1])),meta:{c:["Security"],g:["crashcourse","security","github"],e:`

<hr>
`,r:{minutes:.29,words:88},y:"a",t:"Lab 7 — Malware Analysis"}}],["/devops/digital-forensics-lab/08.html",{loader:()=>r(()=>import("./08.html-DWVvJ0HF.js"),__vite__mapDeps([53,1])),meta:{c:["Security"],g:["crashcourse","security","github"],e:`

<hr>
`,r:{minutes:.29,words:88},y:"a",t:"Lab 8 — Memory Forensics"}}],["/devops/digital-forensics-lab/09.html",{loader:()=>r(()=>import("./09.html-ZaBJljH6.js"),__vite__mapDeps([54,1])),meta:{c:["Security"],g:["crashcourse","security","github"],e:`

<hr>
`,r:{minutes:.29,words:88},y:"a",t:"Lab 9 — Container Forensics"}}],["/devops/digital-forensics-lab/10.html",{loader:()=>r(()=>import("./10.html-BogyEtic.js"),__vite__mapDeps([55,1])),meta:{c:["Security"],g:["crashcourse","security","github"],e:`

<hr>
`,r:{minutes:.29,words:88},y:"a",t:"Lab 10 — Cracking Passwords"}}],["/devops/digital-forensics-lab/",{loader:()=>r(()=>import("./index.html-BeGbAbjY.js"),__vite__mapDeps([56,1])),meta:{c:["Security"],g:["crashcourse","security","github"],e:`

<hr>
`,r:{minutes:1.58,words:474},y:"a",t:"CYL2002 - Digital Forensics Lab",i:"fas fa-shield-halved"}}],["/devops/art-of-aws/01.html",{loader:()=>r(()=>import("./01.html-CerO5KEE.js"),__vite__mapDeps([57,1])),meta:{c:["AWS"],g:["crashcourse","pyrasis","aws","amazon-web-services"],e:`

<hr>
`,r:{minutes:1.94,words:582},y:"a",t:"01. 왜 AWS인가?"}}],["/devops/art-of-aws/02.html",{loader:()=>r(()=>import("./02.html-Ck4Z8OWc.js"),__vite__mapDeps([58,1])),meta:{c:["AWS"],g:["crashcourse","pyrasis","aws","amazon-web-services"],e:`

<hr>
`,r:{minutes:1.08,words:325},y:"a",t:"02. AWS 기본 개념 살펴보기"}}],["/devops/art-of-aws/03.html",{loader:()=>r(()=>import("./03.html-DJHmPDjn.js"),__vite__mapDeps([59,1])),meta:{c:["AWS"],g:["crashcourse","pyrasis","aws","amazon-web-services"],e:`

<hr>
`,r:{minutes:.95,words:284},y:"a",t:"03. AWS 계정 생성하기"}}],["/devops/art-of-aws/04.html",{loader:()=>r(()=>import("./04.html-CPWeqv__.js"),__vite__mapDeps([60,1])),meta:{c:["AWS"],g:["crashcourse","pyrasis","aws","amazon-web-services"],e:`

<hr>
`,r:{minutes:11.56,words:3469},y:"a",t:"04. 가상 서버를 제공하는 EC2"}}],["/devops/art-of-aws/05.html",{loader:()=>r(()=>import("./05.html-h0lCCTSL.js"),__vite__mapDeps([61,1])),meta:{c:["AWS"],g:["crashcourse","pyrasis","aws","amazon-web-services"],e:`

<hr>
`,r:{minutes:1.06,words:318},y:"a",t:"05. Security Group으로 방화벽 설정하기"}}],["/devops/art-of-aws/06.html",{loader:()=>r(()=>import("./06.html-D8j6BQ-y.js"),__vite__mapDeps([62,1])),meta:{c:["AWS"],g:["crashcourse","pyrasis","aws","amazon-web-services"],e:`

<hr>
`,r:{minutes:.18,words:54},y:"a",t:"06. 고정 IP를 제공하는 Elastic IP"}}],["/devops/art-of-aws/07.html",{loader:()=>r(()=>import("./07.html-C50qFsVP.js"),__vite__mapDeps([63,1])),meta:{c:["AWS"],g:["crashcourse","pyrasis","aws","amazon-web-services"],e:`

<hr>
`,r:{minutes:.15,words:46},y:"a",t:"07. EC2 인스턴스 접속을 위한 키 쌍"}}],["/devops/art-of-aws/08.html",{loader:()=>r(()=>import("./08.html-B8MU5hp2.js"),__vite__mapDeps([64,1])),meta:{c:["AWS"],g:["crashcourse","pyrasis","aws","amazon-web-services"],e:`

<hr>
`,r:{minutes:.15,words:46},y:"a",t:"08. AMI"}}],["/devops/art-of-aws/09.html",{loader:()=>r(()=>import("./09.html-ROx-M0zj.js"),__vite__mapDeps([65,1])),meta:{c:["AWS"],g:["crashcourse","pyrasis","aws","amazon-web-services"],e:`

<hr>
`,r:{minutes:.15,words:46},y:"a",t:"09. API와 툴 사용을 위한 액세스 키 생성하기"}}],["/devops/art-of-aws/10.html",{loader:()=>r(()=>import("./10.html-B2aY40q0.js"),__vite__mapDeps([66,1])),meta:{c:["AWS"],g:["crashcourse","pyrasis","aws","amazon-web-services"],e:`

<hr>
`,r:{minutes:.17,words:50},y:"a",t:"10. AWS 리소스의 상태를 모니터링하는 CloudWatch"}}],["/devops/art-of-aws/11.html",{loader:()=>r(()=>import("./11.html-DRGcmnCe.js"),__vite__mapDeps([67,1])),meta:{c:["AWS"],g:["crashcourse","pyrasis","aws","amazon-web-services"],e:`

<hr>
`,r:{minutes:.17,words:50},y:"a",t:"11. HTTP 프로토콜과 연동되는 스토리지 S3"}}],["/devops/art-of-aws/12.html",{loader:()=>r(()=>import("./12.html-CAHfJzVl.js"),__vite__mapDeps([68,1])),meta:{c:["AWS"],g:["crashcourse","pyrasis","aws","amazon-web-services"],e:`

<hr>
`,r:{minutes:.17,words:50},y:"a",t:"12. 전 세계에 콘텐츠를 배포하는 CDN 서비스인 CloudFront"}}],["/devops/art-of-aws/13.html",{loader:()=>r(()=>import("./13.html-BI0x6dmv.js"),__vite__mapDeps([69,1])),meta:{c:["AWS"],g:["crashcourse","pyrasis","aws","amazon-web-services"],e:`

<hr>
`,r:{minutes:.15,words:46},y:"a",t:"13. 확장 가능한 관계형 데이터베이스를 제공하는 RDS"}}],["/devops/art-of-aws/14.html",{loader:()=>r(()=>import("./14.html-DQywkDZc.js"),__vite__mapDeps([70,1])),meta:{c:["AWS"],g:["crashcourse","pyrasis","aws","amazon-web-services"],e:`

<hr>
`,r:{minutes:.17,words:50},y:"a",t:"14. 확장 가능한 NoSQL 분산 데이터베이스를 제공하는 DynamoDB"}}],["/devops/art-of-aws/15.html",{loader:()=>r(()=>import("./15.html-CoEQokwl.js"),__vite__mapDeps([71,1])),meta:{c:["AWS"],g:["crashcourse","pyrasis","aws","amazon-web-services"],e:`

<hr>
`,r:{minutes:.15,words:46},y:"a",t:"15. 확장 가능한 분산 인 메모리 캐시를 제공하는 ElastiCache"}}],["/devops/art-of-aws/16.html",{loader:()=>r(()=>import("./16.html-CJ1Zpiij.js"),__vite__mapDeps([72,1])),meta:{c:["AWS"],g:["crashcourse","pyrasis","aws","amazon-web-services"],e:`

<hr>
`,r:{minutes:.15,words:46},y:"a",t:"16. 사용자와 그룹을 생성하여 접근제어 및 권한관리를 제공하는 IAM"}}],["/devops/art-of-aws/17.html",{loader:()=>r(()=>import("./17.html-DGE3UXKV.js"),__vite__mapDeps([73,1])),meta:{c:["AWS"],g:["crashcourse","pyrasis","aws","amazon-web-services"],e:`

<hr>
`,r:{minutes:.19,words:58},y:"a",t:"17. AWS 리소스와 연동 가능한 DNS 서비스 Route 53"}}],["/devops/art-of-aws/18.html",{loader:()=>r(()=>import("./18.html-EZzBni7h.js"),__vite__mapDeps([74,1])),meta:{c:["AWS"],g:["crashcourse","pyrasis","aws","amazon-web-services"],e:`

<hr>
`,r:{minutes:.15,words:46},y:"a",t:"18. 부하 분산과 고가용성을 제공하는 ELB"}}],["/devops/art-of-aws/19.html",{loader:()=>r(()=>import("./19.html-Cbig5pcq.js"),__vite__mapDeps([75,1])),meta:{c:["AWS"],g:["crashcourse","pyrasis","aws","amazon-web-services"],e:`

<hr>
<ol start="20">
<li><a href="/crashcourse/devops/art-of-aws/20.html" target="_blank">가상 네트워크를 제공하는 VPC</a></li>
<li><a href="/crashcourse/devops/art-of-aws/21.html" target="_blank">데이터 보관 및 백업을 위한 매우 저렴한 스토리지 서비스 Glacier</a></li>
<li><a href="/crashcourse/devops/art-of-aws/22.html" target="_blank">서버 구성을 자동화하는 CloudFormation</a></li>
<li><a href="/crashcourse/devops/art-of-aws/23.html" target="_blank">간편하게 사용하는 애플리케이션 플랫폼 서비스 Elastic Beanstalk</a></li>
<li><a href="/crashcourse/devops/art-of-aws/24.html" target="_blank">애플리케이션 구성과 배포를 자동화하는 OpsWorks</a></li>
<li><a href="/crashcourse/devops/art-of-aws/25.html" target="_blank">검색 서비스를 제공하는 CloudSearch</a></li>
<li><a href="/crashcourse/devops/art-of-aws/26.html" target="_blank">푸시 알림 서비스 SNS</a></li>
<li><a href="/crashcourse/devops/art-of-aws/27.html" target="_blank">이메일 전송 서비스 SES</a></li>
<li><a href="/crashcourse/devops/art-of-aws/28.html" target="_blank">메시지 큐를 제공하는 SQS</a></li>
<li><a href="/crashcourse/devops/art-of-aws/29.html" target="_blank">동영상 인코딩 서비스 Elastic Transcoder</a></li>
<li><a href="/crashcourse/devops/art-of-aws/30.html" target="_blank">AWS API, CLI 활용하기</a></li>
<li><a href="/crashcourse/devops/art-of-aws/31.html" target="_blank">글로벌 사진 사이트 구축하기</a></li>
<li><a href="/crashcourse/devops/art-of-aws/32.html" target="_blank">자동 확장 가능한 콘서트 티켓 예매 사이트 구축하기</a></li>
<li><a href="/crashcourse/devops/art-of-aws/33.html" target="_blank">자동 확장 가능한 모바일 게임 서버 구축하기</a></li>
<li><a href="/crashcourse/devops/art-of-aws/a.html" target="_blank">부록</a></li>
</ol>`,r:{minutes:.33,words:99},y:"a",t:"19. 자동으로 EC2 인스턴스를 생성하여 서비스를 확장하는 Auto Scaling"}}],["/devops/art-of-aws/20.html",{loader:()=>r(()=>import("./20.html-BxAwZ3vx.js"),__vite__mapDeps([76,1])),meta:{c:["AWS"],g:["crashcourse","pyrasis","aws","amazon-web-services"],e:`

<hr>
`,r:{minutes:.15,words:46},y:"a",t:"20. 가상 네트워크를 제공하는 VPC"}}],["/devops/art-of-aws/21.html",{loader:()=>r(()=>import("./21.html-DBx-YEk7.js"),__vite__mapDeps([77,1])),meta:{c:["AWS"],g:["crashcourse","pyrasis","aws","amazon-web-services"],e:`

<hr>
`,r:{minutes:.15,words:46},y:"a",t:"21. 데이터 보관 및 백업을 위한 매우 저렴한 스토리지 서비스 Glacier"}}],["/devops/art-of-aws/22.html",{loader:()=>r(()=>import("./22.html-cWdDwf_Y.js"),__vite__mapDeps([78,1])),meta:{c:["AWS"],g:["crashcourse","pyrasis","aws","amazon-web-services"],e:`

<hr>
`,r:{minutes:.15,words:46},y:"a",t:"22. 서버 구성을 자동화하는 CloudFormation"}}],["/devops/art-of-aws/23.html",{loader:()=>r(()=>import("./23.html-_PNvhhuT.js"),__vite__mapDeps([79,1])),meta:{c:["AWS"],g:["crashcourse","pyrasis","aws","amazon-web-services"],e:`

<hr>
`,r:{minutes:.17,words:50},y:"a",t:"23. 간편하게 사용하는 애플리케이션 플랫폼 서비스 Elastic Beanstalk"}}],["/devops/art-of-aws/24.html",{loader:()=>r(()=>import("./24.html-DEwqq5AV.js"),__vite__mapDeps([80,1])),meta:{c:["AWS"],g:["crashcourse","pyrasis","aws","amazon-web-services"],e:`

<hr>
`,r:{minutes:.15,words:46},y:"a",t:"24. 애플리케이션 구성과 배포를 자동화하는 OpsWorks"}}],["/devops/art-of-aws/25.html",{loader:()=>r(()=>import("./25.html-uCVqrzZ8.js"),__vite__mapDeps([81,1])),meta:{c:["AWS"],g:["crashcourse","pyrasis","aws","amazon-web-services"],e:`

<hr>
`,r:{minutes:.15,words:46},y:"a",t:"25. 검색 서비스를 제공하는 CloudSearch"}}],["/devops/art-of-aws/26.html",{loader:()=>r(()=>import("./26.html-D7jVEQ3h.js"),__vite__mapDeps([82,1])),meta:{c:["AWS"],g:["crashcourse","pyrasis","aws","amazon-web-services"],e:`

<hr>
`,r:{minutes:.15,words:46},y:"a",t:"26. 푸시 알림 서비스 SNS"}}],["/devops/art-of-aws/27.html",{loader:()=>r(()=>import("./27.html-RYBqZbhd.js"),__vite__mapDeps([83,1])),meta:{c:["AWS"],g:["crashcourse","pyrasis","aws","amazon-web-services"],e:`

<hr>
`,r:{minutes:.15,words:46},y:"a",t:"27. 이메일 전송 서비스 SES"}}],["/devops/art-of-aws/28.html",{loader:()=>r(()=>import("./28.html-DTWfYlCV.js"),__vite__mapDeps([84,1])),meta:{c:["AWS"],g:["crashcourse","pyrasis","aws","amazon-web-services"],e:`

<hr>
`,r:{minutes:.15,words:46},y:"a",t:"28. 메시지 큐를 제공하는 SQS"}}],["/devops/art-of-aws/29.html",{loader:()=>r(()=>import("./29.html-D3lw8LUo.js"),__vite__mapDeps([85,1])),meta:{c:["AWS"],g:["crashcourse","pyrasis","aws","amazon-web-services"],e:`

<hr>
`,r:{minutes:.17,words:50},y:"a",t:"29. 동영상 인코딩 서비스 Elastic Transcoder"}}],["/devops/art-of-aws/30.html",{loader:()=>r(()=>import("./30.html-5p2C6SjB.js"),__vite__mapDeps([86,1])),meta:{c:["AWS"],g:["crashcourse","pyrasis","aws","amazon-web-services"],e:`

<hr>
`,r:{minutes:.18,words:54},y:"a",t:"30. AWS API, CLI 활용하기"}}],["/devops/art-of-aws/31.html",{loader:()=>r(()=>import("./31.html-NerMhX_r.js"),__vite__mapDeps([87,1])),meta:{c:["AWS"],g:["crashcourse","pyrasis","aws","amazon-web-services"],e:`

<hr>
`,r:{minutes:.14,words:42},y:"a",t:"31. 글로벌 사진 사이트 구축하기"}}],["/devops/art-of-aws/32.html",{loader:()=>r(()=>import("./32.html-BKBXp2sJ.js"),__vite__mapDeps([88,1])),meta:{c:["AWS"],g:["crashcourse","pyrasis","aws","amazon-web-services"],e:`

<hr>
`,r:{minutes:.14,words:42},y:"a",t:"32. 자동 확장 가능한 콘서트 티켓 예매 사이트 구축하기"}}],["/devops/art-of-aws/33.html",{loader:()=>r(()=>import("./33.html-0zmC-U8M.js"),__vite__mapDeps([89,1])),meta:{c:["AWS"],g:["crashcourse","pyrasis","aws","amazon-web-services"],e:`

<hr>
`,r:{minutes:.14,words:42},y:"a",t:"33. 자동 확장 가능한 모바일 게임 서버 구축하기"}}],["/devops/art-of-aws/",{loader:()=>r(()=>import("./index.html-9zmO17o-.js"),__vite__mapDeps([90,1])),meta:{c:["AWS"],g:["crashcourse","pyrasis","aws","amazon-web-services"],e:`

<hr>

<ol>
<li><a href="/crashcourse/devops/art-of-aws/01.html" target="_blank">왜 AWS인가?</a></li>
<li><a href="/crashcourse/devops/art-of-aws/02.html" target="_blank">AWS 기본 개념 살펴보기</a></li>
<li><a href="/crashcourse/devops/art-of-aws/03.html" target="_blank">AWS 계정 생성하기</a></li>
<li><a href="/crashcourse/devops/art-of-aws/04.html" target="_blank">가상 서버를 제공하는 EC2</a></li>
<li><a href="/crashcourse/devops/art-of-aws/05.html" target="_blank">Security Group으로 방화벽 설정하기</a></li>
<li><a href="/crashcourse/devops/art-of-aws/06.html" target="_blank">고정 IP를 제공하는 Elastic IP</a></li>
<li><a href="/crashcourse/devops/art-of-aws/07.html" target="_blank">EC2 인스턴스 접속을 위한 키 쌍</a></li>
<li><a href="/crashcourse/devops/art-of-aws/08.html" target="_blank">AMI</a></li>
<li><a href="/crashcourse/devops/art-of-aws/09.html" target="_blank">API와 툴 사용을 위한 액세스 키 생성하기</a></li>
<li><a href="/crashcourse/devops/art-of-aws/10.html" target="_blank">AWS 리소스의 상태를 모니터링하는 CloudWatch</a></li>
<li><a href="/crashcourse/devops/art-of-aws/11.html" target="_blank">HTTP 프로토콜과 연동되는 스토리지 S3</a></li>
<li><a href="/crashcourse/devops/art-of-aws/12.html" target="_blank">전 세계에 콘텐츠를 배포하는 CDN 서비스인 CloudFront</a></li>
<li><a href="/crashcourse/devops/art-of-aws/13.html" target="_blank">확장 가능한 관계형 데이터베이스를 제공하는 RDS</a></li>
<li><a href="/crashcourse/devops/art-of-aws/14.html" target="_blank">확장 가능한 NoSQL 분산 데이터베이스를 제공하는 DynamoDB</a></li>
<li><a href="/crashcourse/devops/art-of-aws/15.html" target="_blank">확장 가능한 분산 인 메모리 캐시를 제공하는 ElastiCache</a></li>
<li><a href="/crashcourse/devops/art-of-aws/16.html" target="_blank">사용자와 그룹을 생성하여 접근제어 및 권한관리를 제공하는 IAM</a></li>
<li><a href="/crashcourse/devops/art-of-aws/17.html" target="_blank">AWS 리소스와 연동 가능한 DNS 서비스 Route 53</a></li>
<li><a href="/crashcourse/devops/art-of-aws/18.html" target="_blank">부하 분산과 고가용성을 제공하는 ELB</a></li>
<li><a href="/crashcourse/devops/art-of-aws/19.html" target="_blank">자동으로 EC2 인스턴스를 생성하여 서비스를 확장하는 Auto Scaling</a></li>
<li><a href="/crashcourse/devops/art-of-aws/20.html" target="_blank">가상 네트워크를 제공하는 VPC</a></li>
<li><a href="/crashcourse/devops/art-of-aws/21.html" target="_blank">데이터 보관 및 백업을 위한 매우 저렴한 스토리지 서비스 Glacier</a></li>
<li><a href="/crashcourse/devops/art-of-aws/22.html" target="_blank">서버 구성을 자동화하는 CloudFormation</a></li>
<li><a href="/crashcourse/devops/art-of-aws/23.html" target="_blank">간편하게 사용하는 애플리케이션 플랫폼 서비스 Elastic Beanstalk</a></li>
<li><a href="/crashcourse/devops/art-of-aws/24.html" target="_blank">애플리케이션 구성과 배포를 자동화하는 OpsWorks</a></li>
<li><a href="/crashcourse/devops/art-of-aws/25.html" target="_blank">검색 서비스를 제공하는 CloudSearch</a></li>
<li><a href="/crashcourse/devops/art-of-aws/26.html" target="_blank">푸시 알림 서비스 SNS</a></li>
<li><a href="/crashcourse/devops/art-of-aws/27.html" target="_blank">이메일 전송 서비스 SES</a></li>
<li><a href="/crashcourse/devops/art-of-aws/28.html" target="_blank">메시지 큐를 제공하는 SQS</a></li>
<li><a href="/crashcourse/devops/art-of-aws/29.html" target="_blank">동영상 인코딩 서비스 Elastic Transcoder</a></li>
<li><a href="/crashcourse/devops/art-of-aws/30.html" target="_blank">AWS API, CLI 활용하기</a></li>
<li><a href="/crashcourse/devops/art-of-aws/31.html" target="_blank">글로벌 사진 사이트 구축하기</a></li>
<li><a href="/crashcourse/devops/art-of-aws/32.html" target="_blank">자동 확장 가능한 콘서트 티켓 예매 사이트 구축하기</a></li>
<li><a href="/crashcourse/devops/art-of-aws/33.html" target="_blank">자동 확장 가능한 모바일 게임 서버 구축하기</a></li>
<li><a href="/crashcourse/devops/art-of-aws/a.html" target="_blank">부록</a></li>
</ol>`,r:{minutes:.54,words:162},y:"a",t:"아마존 웹 서비스를 다루는 기술 - 실무에서 필요한 AWS 클라우드의 모든 것!",i:"fa-brands fa-aws"}}],["/devops/art-of-aws/a.html",{loader:()=>r(()=>import("./a.html-BOjj3GcA.js"),__vite__mapDeps([91,1])),meta:{c:["AWS"],g:["crashcourse","pyrasis","aws","amazon-web-services"],e:`

<hr>
`,r:{minutes:.14,words:42},y:"a",t:"34. 부록"}}],["/devops/digitalocean-kubernetes/",{loader:()=>r(()=>import("./index.html-Btyovf0u.js"),__vite__mapDeps([92,1])),meta:{c:["Kubernetes"],g:["crashcourse","digitalocean","kubernetes","kubctl"],e:`

<hr>
<h2>2023</h2>
<hr>
<h2>2022</h2>
<ul>
<li><a href="/crashcourse/devops/digitalocean-kubernetes/2022/20221216-how-to-run-serverless-workloads-with-knative-on-digitalocean-kubernetes.html" target="_blank">How To Run Serverless Workloads with Knative on DigitalOcean Kubernetes</a></li>
<li><a href="/crashcourse/devops/digitalocean-kubernetes/2022/20221118-how-to-secure-your-site-in-kubernetes-with-cert-manager-traefik-and-let-s-encrypt.html" target="_blank">How To Secure Your Site in Kubernetes with cert-manager, Traefik, and Let’s Encrypt</a></li>
</ul>`,r:{minutes:3.51,words:1054},y:"a",t:"DigitalOcean - Kubernetes",i:"fas fa-dharmachakra"}}],["/devops/freecodecamp-gitlab-ci/1.html",{loader:()=>r(()=>import("./1.html-BNGEXH5w.js"),__vite__mapDeps([93,1])),meta:{c:["Gitlab"],g:["crashcourse","youtube","freecodecamp","vdespa","gitlab","yaml","ci","cd","cicd"],e:`

<hr>
<h2>1.1 Welcome</h2>
<ul>
<li>this course is for people new to DevOps who want to use GitLab to build, test and deploy their software</li>
<li>you will get hands-on experience building pipelines with GitLab CI and deploying software to AWS</li>
</ul>
`,r:{minutes:5.03,words:1509},y:"a",t:"Unit 1 - Introduction to GitLab"}}],["/devops/freecodecamp-gitlab-ci/2.html",{loader:()=>r(()=>import("./2.html-BEjfgF0g.js"),__vite__mapDeps([94,1])),meta:{c:["Gitlab"],g:["crashcourse","youtube","freecodecamp","vdespa","gitlab","yaml","ci","cd","cicd"],e:`

<hr>
<h2>2.1 Unit overview</h2>
<ul>
<li>we will start working on a simple website project</li>
<li>we want to automate any of the manual steps required for integrating the changes of multiple developers</li>
<li>we will create a pipeline that will build and test the software we are creating</li>
</ul>`,r:{minutes:3,words:901},y:"a",t:"Unit 2 - Continuous Integration with GitLab CI"}}],["/devops/freecodecamp-gitlab-ci/3.html",{loader:()=>r(()=>import("./3.html-BtSVMNe_.js"),__vite__mapDeps([95,1])),meta:{c:["Gitlab"],g:["crashcourse","youtube","freecodecamp","vdespa","gitlab","yaml","ci","cd","cicd"],e:`

<hr>
<h2>3.1 Unit overview</h2>
<ul>
<li>we will learn about deployments and take our website project and deploy it to the AWS cloud.</li>
<li>learn about other DevOps practices such as CI/CD</li>
</ul>
<hr>
<h2>3.2 A quick introduction to AWS</h2>
<ul>
<li>AWS (Amazon Web Services) is a cloud platform provider offering over 200 products &amp; services available in data centers all over the world</li>
<li>you need an AWS account to continue with the rest of the course</li>
</ul>`,r:{minutes:7.88,words:2365},y:"a",t:"Unit 3 - Continuous Deployment with GitLab & AWS"}}],["/devops/freecodecamp-gitlab-ci/4.html",{loader:()=>r(()=>import("./4.html-BF33VLH2.js"),__vite__mapDeps([96,1])),meta:{c:["Gitlab"],g:["crashcourse","youtube","freecodecamp","vdespa","gitlab","yaml","ci","cd","cicd"],e:`

<hr>
<h2>4.1 Section overview</h2>
<ul>
<li>modern applications tend to be more complex, and most of them use Docker</li>
<li>we will build &amp; deploy an application that runs in a Docker container</li>
</ul>
<hr>
<h2>4.2 Introduction to AWS Elastic Beanstalk</h2>
<ul>
<li>AWS Elastic Beanstalk (AWS EB) is a service that allows us to deploy an application in the AWS cloud without having to worry about managing the virtual server(s) that runs it</li>
</ul>`,r:{minutes:4.53,words:1359},y:"a",t:"Unit 4 - Deploying a dockerized application to AWS"}}],["/devops/freecodecamp-gitlab-ci/5.html",{loader:()=>r(()=>import("./5.html-DP9Xzlez.js"),__vite__mapDeps([97,1])),meta:{c:["Gitlab"],g:["crashcourse","youtube","freecodecamp","vdespa","gitlab","yaml","ci","cd","cicd"],e:`

<hr>
<h2>Lesson 1 - Final assignment</h2>
<ul>
<li>request access as a member to the project</li>
<li>add your name to the list of people who have completed this course</li>
</ul>
<h3>📚 Resources</h3>
<ul>
<li><a href="https://gitlab.com/gitlab-course-public/who-is-learning-gitlab-ci" target="_blank" rel="noopener noreferrer">Join the project</a></li>
<li><a href="https://vdespa.medium.com/7f86bf79e58b?sk=b0fd024ce8ddc4a7c3b998be622ab10d" target="_blank" rel="noopener noreferrer">How to fix merge request conflicts</a></li>
</ul>`,r:{minutes:.84,words:252},y:"a",t:"Unit 5 - Conclusion"}}],["/devops/freecodecamp-gitlab-ci/",{loader:()=>r(()=>import("./index.html-yeFTYGbT.js"),__vite__mapDeps([98,1])),meta:{c:"Gitlab",g:["crashcourse","youtube","freecodecamp","vdespa","gitlab","yaml","ci","cd","cicd"],e:`

<hr>

<ul>
<li><a href="/crashcourse/devops/freecodecamp-gitlab-ci/1.html" target="_blank">Unit 1 - Introduction to GitLab</a></li>
<li><a href="/crashcourse/devops/freecodecamp-gitlab-ci/2.html" target="_blank">Unit 2 - Continuous Integration with GitLab CI</a></li>
<li><a href="/crashcourse/devops/freecodecamp-gitlab-ci/3.html" target="_blank">Unit 3 - Continuous Deployment with GitLab &amp; AWS</a></li>
<li><a href="/crashcourse/devops/freecodecamp-gitlab-ci/4.html" target="_blank">Unit 4 - Deploying a dockerized application to AWS</a></li>
<li><a href="/crashcourse/devops/freecodecamp-gitlab-ci/5.html" target="_blank">Unit 5 - Conclusion</a></li>
</ul>`,r:{minutes:.33,words:98},y:"a",t:"Intro",i:"fas-brand fa-gitlab"}}],["/devops/linux-aviation-howto/01-flight.html",{loader:()=>r(()=>import("./01-flight.html-Db4f2S3j.js"),__vite__mapDeps([99,1])),meta:{c:["Linux"],g:["crashcourse","linux","os","aviation"],e:`

<hr>
`,r:{minutes:.25,words:76},y:"a",t:"1. Flight"}}],["/devops/linux-aviation-howto/02-airline.html",{loader:()=>r(()=>import("./02-airline.html-5Foc734M.js"),__vite__mapDeps([100,1])),meta:{c:["Linux"],g:["crashcourse","linux","os","aviation"],e:`

<hr>
`,r:{minutes:.25,words:76},y:"a",t:"2. Airline"}}],["/devops/linux-aviation-howto/03-airport.html",{loader:()=>r(()=>import("./03-airport.html-BkhXI2CN.js"),__vite__mapDeps([101,1])),meta:{c:["Linux"],g:["crashcourse","linux","os","aviation"],e:`

<hr>
`,r:{minutes:.25,words:76},y:"a",t:"3. Airport"}}],["/devops/linux-aviation-howto/04-simulation.html",{loader:()=>r(()=>import("./04-simulation.html-D6KB2w-p.js"),__vite__mapDeps([102,1])),meta:{c:["Linux"],g:["crashcourse","linux","os","aviation"],e:`

<hr>
`,r:{minutes:.25,words:76},y:"a",t:"4. Simulation"}}],["/devops/linux-aviation-howto/05-training.html",{loader:()=>r(()=>import("./05-training.html-CvaVd6zp.js"),__vite__mapDeps([103,1])),meta:{c:["Linux"],g:["crashcourse","linux","os","aviation"],e:`

<hr>
`,r:{minutes:.27,words:81},y:"a",t:"5. Training",i:"fa-brands fa-linux"}}],["/devops/linux-aviation-howto/06-data-sources.html",{loader:()=>r(()=>import("./06-data-sources.html-1KimRoHs.js"),__vite__mapDeps([104,1])),meta:{c:["Linux"],g:["crashcourse","linux","os","aviation"],e:`

<hr>
`,r:{minutes:.28,words:83},y:"a",t:"6. Data Sources"}}],["/devops/linux-aviation-howto/07-websites-and-catalogs.html",{loader:()=>r(()=>import("./07-websites-and-catalogs.html-Cpnasc_y.js"),__vite__mapDeps([105,1])),meta:{c:["Linux"],g:["crashcourse","linux","os","aviation"],e:`

<hr>
`,r:{minutes:.3,words:90},y:"a",t:"7. Websites and Catalogs"}}],["/devops/linux-aviation-howto/",{loader:()=>r(()=>import("./index.html-BOirdXsx.js"),__vite__mapDeps([106,1])),meta:{c:["Linux"],g:["crashcourse","linux","os","aviation"],e:`

<hr>
`,r:{minutes:.56,words:168},y:"a",t:"Linux Aviation HOWTO",i:"fa-brands fa-linux"}}],["/devops/linux-journey/",{loader:()=>r(()=>import("./index.html-D8uMjTQH.js"),__vite__mapDeps([107,1])),meta:{c:["Linux"],g:["crashcourse","linux","os","networking"],e:`

<hr>
`,r:{minutes:.67,words:200},y:"a",t:"Linux Journey",i:"fa-brands fa-linux"}}],["/devops/red-hat-container-tools/01.html",{loader:()=>r(()=>import("./01.html-BdR2HAgX.js"),__vite__mapDeps([108,1])),meta:{c:["RedHat"],g:["crashcourse","redhat","buildah","podman","skopeo","sesearch","semodule"],e:`

<hr>
`,r:{minutes:2.31,words:693},y:"a",t:"1. An Overview of Container Tools"}}],["/devops/red-hat-container-tools/02.html",{loader:()=>r(()=>import("./02.html-Iq-duCJu.js"),__vite__mapDeps([109,1])),meta:{c:["RedHat"],g:["crashcourse","redhat","buildah","podman","skopeo","sesearch","semodule"],e:`

<hr>
`,r:{minutes:4.56,words:1368},y:"a",t:"2. Using the Fast and Stable Streams"}}],["/devops/red-hat-container-tools/03.html",{loader:()=>r(()=>import("./03.html-CWjTfBFQ.js"),__vite__mapDeps([110,1])),meta:{c:["RedHat"],g:["crashcourse","redhat","buildah","podman","skopeo","sesearch","semodule"],e:`

<hr>
`,r:{minutes:5.1,words:1530},y:"a",t:"3. Podman - Familiar Territory"}}],["/devops/red-hat-container-tools/04.html",{loader:()=>r(()=>import("./04.html-ozshAwTn.js"),__vite__mapDeps([111,1])),meta:{c:["RedHat"],g:["crashcourse","redhat","buildah","podman","skopeo","sesearch","semodule"],e:`

<hr>
`,r:{minutes:7.2,words:2159},y:"a",t:"4. Buildah - Granularity & Control"}}],["/devops/red-hat-container-tools/05.html",{loader:()=>r(()=>import("./05.html-C97WN1et.js"),__vite__mapDeps([112,1])),meta:{c:["RedHat"],g:["crashcourse","redhat","buildah","podman","skopeo","sesearch","semodule"],e:`

<hr>
`,r:{minutes:5.23,words:1570},y:"a",t:"5. Skopeo - Moving & Sharing"}}],["/devops/red-hat-container-tools/06.html",{loader:()=>r(()=>import("./06.html-C2PtLv7c.js"),__vite__mapDeps([113,1])),meta:{c:["RedHat"],g:["crashcourse","redhat","buildah","podman","skopeo","sesearch","semodule"],e:`

<hr>
`,r:{minutes:3.53,words:1059},y:"a",t:"6. CRIU - Checkpointing and Restoring"}}],["/devops/red-hat-container-tools/07.html",{loader:()=>r(()=>import("./07.html-SRrH33xx.js"),__vite__mapDeps([114,1])),meta:{c:["RedHat"],g:["crashcourse","redhat","buildah","podman","skopeo","sesearch","semodule"],e:`

<hr>
`,r:{minutes:2.1,words:630},y:"a",t:"7. Udica - Custom SELinux Policies"}}],["/devops/red-hat-container-tools/08.html",{loader:()=>r(()=>import("./08.html-C2O03Ge6.js"),__vite__mapDeps([115,1])),meta:{c:["RedHat"],g:["crashcourse","redhat","buildah","podman","skopeo","sesearch","semodule"],e:`

<hr>
`,r:{minutes:2.87,words:860},y:"a",t:"8. OSCAP Podman - Trust but Verify"}}],["/devops/red-hat-container-tools/",{loader:()=>r(()=>import("./index.html-CBT8xj7R.js"),__vite__mapDeps([116,1])),meta:{c:["DevOps","OS","Linux","RedHat"],g:["crashcourse","redhat","buildah","podman","skopeo","sesearch","semodule"],e:`

<hr>
`,r:{minutes:1.18,words:354},y:"a",t:"Red Hat Container Tools",i:"fa-brands fa-redhat"}}],["/devops/red-hat-containerize-your-application-w-buildah-and-podman/01.html",{loader:()=>r(()=>import("./01.html-DvxSwwtj.js"),__vite__mapDeps([117,1])),meta:{c:["RedHat"],g:["crashcourse","redhat","buildah","podman","skopeo","sesearch","semodule"],e:`

<hr>
`,r:{minutes:4.15,words:1246},y:"a",t:"1. Containerize Your First Application"}}],["/devops/red-hat-containerize-your-application-w-buildah-and-podman/02.html",{loader:()=>r(()=>import("./02.html-DK0riOia.js"),__vite__mapDeps([118,1])),meta:{c:["RedHat"],g:["crashcourse","redhat","buildah","podman","skopeo","sesearch","semodule"],e:`

<hr>
`,r:{minutes:1.75,words:524},y:"a",t:"2. Containerizing and playing Clumsy-Bird"}}],["/devops/red-hat-containerize-your-application-w-buildah-and-podman/03.html",{loader:()=>r(()=>import("./03.html-BKHQdpej.js"),__vite__mapDeps([119,1])),meta:{c:["RedHat"],g:["crashcourse","redhat","buildah","podman","skopeo","sesearch","semodule"],e:`

<hr>
`,r:{minutes:.73,words:219},y:"a",t:"3. Removing the Containers"}}],["/devops/red-hat-containerize-your-application-w-buildah-and-podman/",{loader:()=>r(()=>import("./index.html-Ckwqq7Kp.js"),__vite__mapDeps([120,1])),meta:{c:["RedHat"],g:["crashcourse","redhat","buildah","podman","skopeo","sesearch","semodule"],e:`

<hr>
`,r:{minutes:.83,words:248},y:"a",t:"Containerize Your Application With Buildah And Podman",i:"fa-brands fa-redhat"}}],["/devops/yozm/2464.html",{loader:()=>r(()=>import("./2464.html-ChSM2CK3.js"),__vite__mapDeps([121,1])),meta:{c:["DevOps","Mobile","Security"],g:["blog","security","mobile"],e:`

<hr>
`,r:{minutes:.2,words:60},y:"a",t:"개발자가 알아두면 좋은 ‘코드형 인프라(IaC)’ 개념 정리"}}],["/devops/yozm/2503.html",{loader:()=>r(()=>import("./2503.html-AKVxbfEi.js"),__vite__mapDeps([122,1])),meta:{c:["DevOps","Mobile","Security"],g:["blog","security","mobile"],e:`

<hr>
`,r:{minutes:2.37,words:712},y:"a",t:"앱 개발자를 위협하는 10가지 보안 위험과 대응 방법"}}],["/devops/yozm/",{loader:()=>r(()=>import("./index.html-CsXca1wX.js"),__vite__mapDeps([123,1])),meta:{c:["DevOps","Linux","OS","Git","Ansible"],g:["blog","git","github","gitlab","ansible","linux"],e:`

<hr>
`,r:{minutes:.36,words:109},y:"a",t:"요즘 IT 블로그 - DevOps 관련",i:"fas fa-cubes-stacked"}}],["/haskell/megaparsec/01.html",{loader:()=>r(()=>import("./01.html-D57qN0R0.js"),__vite__mapDeps([124,1])),meta:{c:["🐑Haskell"],g:["crashcourse","haskell","parsec","attoparsec","trifecta"],e:`

<hr>
`,r:{minutes:1.58,words:475},y:"a",t:"01. ParsecT and Parsec monads"}}],["/haskell/megaparsec/02.html",{loader:()=>r(()=>import("./02.html-BiAyUkIx.js"),__vite__mapDeps([125,1])),meta:{c:["🐑Haskell"],g:["crashcourse","haskell","parsec","attoparsec","trifecta"],e:`

<hr>
`,r:{minutes:.29,words:88},y:"a",t:"02. Character and binary streams"}}],["/haskell/megaparsec/03.html",{loader:()=>r(()=>import("./03.html-CWsh7c4M.js"),__vite__mapDeps([126,1])),meta:{c:["🐑Haskell"],g:["crashcourse","haskell","parsec","attoparsec","trifecta"],e:`

<hr>
`,r:{minutes:.29,words:88},y:"a",t:"03. Monadic and applicative syntax"}}],["/haskell/megaparsec/04.html",{loader:()=>r(()=>import("./04.html-BjOX8DVq.js"),__vite__mapDeps([127,1])),meta:{c:["🐑Haskell"],g:["crashcourse","haskell","parsec","attoparsec","trifecta"],e:`

<hr>
`,r:{minutes:.34,words:102},y:"a",t:"04. Forcing consumption of input with eof"}}],["/haskell/megaparsec/05.html",{loader:()=>r(()=>import("./05.html-B8ntXp_p.js"),__vite__mapDeps([128,1])),meta:{c:["🐑Haskell"],g:["crashcourse","haskell","parsec","attoparsec","trifecta"],e:`

<hr>
`,r:{minutes:.27,words:81},y:"a",t:"05. Working with alternatives"}}],["/haskell/megaparsec/06.html",{loader:()=>r(()=>import("./06.html-CMAp0RSI.js"),__vite__mapDeps([129,1])),meta:{c:["🐑Haskell"],g:["crashcourse","haskell","parsec","attoparsec","trifecta"],e:`

<hr>
`,r:{minutes:.29,words:88},y:"a",t:"06. Controlling backtracking with try"}}],["/haskell/megaparsec/07.html",{loader:()=>r(()=>import("./07.html-BrdAejeo.js"),__vite__mapDeps([130,1])),meta:{c:["🐑Haskell"],g:["crashcourse","haskell","parsec","attoparsec","trifecta"],e:`

<hr>
`,r:{minutes:.25,words:74},y:"a",t:"07. Debugging parsers"}}],["/haskell/megaparsec/08.html",{loader:()=>r(()=>import("./08.html-DiZ6rF-z.js"),__vite__mapDeps([131,1])),meta:{c:["🐑Haskell"],g:["crashcourse","haskell","parsec","attoparsec","trifecta"],e:`

<hr>
`,r:{minutes:.29,words:88},y:"a",t:"08. Labeling and hiding things"}}],["/haskell/megaparsec/09.html",{loader:()=>r(()=>import("./09.html-C9jmKx19.js"),__vite__mapDeps([132,1])),meta:{c:["🐑Haskell"],g:["crashcourse","haskell","parsec","attoparsec","trifecta"],e:`

<hr>
`,r:{minutes:.27,words:81},y:"a",t:"09. Running a parser"}}],["/haskell/megaparsec/10.html",{loader:()=>r(()=>import("./10.html-leySExK4.js"),__vite__mapDeps([133,1])),meta:{c:["🐑Haskell"],g:["crashcourse","haskell","parsec","attoparsec","trifecta"],e:`

<hr>
`,r:{minutes:.29,words:88},y:"a",t:"10. The MonadParsec type class"}}],["/haskell/megaparsec/11.html",{loader:()=>r(()=>import("./11.html-Bb1SsPF8.js"),__vite__mapDeps([134,1])),meta:{c:["🐑Haskell"],g:["crashcourse","haskell","parsec","attoparsec","trifecta"],e:`

<hr>
`,r:{minutes:.22,words:67},y:"a",t:"11. Lexing"}}],["/haskell/megaparsec/12.html",{loader:()=>r(()=>import("./12.html-CztJyCT-.js"),__vite__mapDeps([135,1])),meta:{c:["🐑Haskell"],g:["crashcourse","haskell","parsec","attoparsec","trifecta"],e:`

<hr>
`,r:{minutes:.27,words:81},y:"a",t:"12. notFollowedBy and lookAhead"}}],["/haskell/megaparsec/13.html",{loader:()=>r(()=>import("./13.html-COHBoX7g.js"),__vite__mapDeps([136,1])),meta:{c:["🐑Haskell"],g:["crashcourse","haskell","parsec","attoparsec","trifecta"],e:`

<hr>
`,r:{minutes:.25,words:74},y:"a",t:"13. Parsing expressions"}}],["/haskell/megaparsec/14.html",{loader:()=>r(()=>import("./14.html-ppllLHk0.js"),__vite__mapDeps([137,1])),meta:{c:["🐑Haskell"],g:["crashcourse","haskell","parsec","attoparsec","trifecta"],e:`

<hr>
`,r:{minutes:.27,words:80},y:"a",t:"14. Indentation-sensitive parsing"}}],["/haskell/megaparsec/15.html",{loader:()=>r(()=>import("./15.html-BOA8qED7.js"),__vite__mapDeps([138,1])),meta:{c:["🐑Haskell"],g:["crashcourse","haskell","parsec","attoparsec","trifecta"],e:`

<hr>
`,r:{minutes:.27,words:81},y:"a",t:"15. Writing efficient parsers"}}],["/haskell/megaparsec/16.html",{loader:()=>r(()=>import("./16.html-CYokDfLi.js"),__vite__mapDeps([139,1])),meta:{c:["🐑Haskell"],g:["crashcourse","haskell","parsec","attoparsec","trifecta"],e:`

<hr>
`,r:{minutes:.25,words:74},y:"a",t:"16. Parse errors"}}],["/haskell/megaparsec/17.html",{loader:()=>r(()=>import("./17.html-CDFIvL0z.js"),__vite__mapDeps([140,1])),meta:{c:["🐑Haskell"],g:["crashcourse","haskell","parsec","attoparsec","trifecta"],e:`

<hr>
`,r:{minutes:.27,words:81},y:"a",t:"17. Testing Megaparsec parsers"}}],["/haskell/megaparsec/18.html",{loader:()=>r(()=>import("./18.html-BgL6-Y3r.js"),__vite__mapDeps([141,1])),meta:{c:["🐑Haskell"],g:["crashcourse","haskell","parsec","attoparsec","trifecta"],e:`

<hr>
`,r:{minutes:.32,words:95},y:"a",t:"18. Working with custom input streams"}}],["/haskell/megaparsec/",{loader:()=>r(()=>import("./index.html-B1JIPCWw.js"),__vite__mapDeps([142,1])),meta:{c:["Haskell"],g:["crashcourse","haskell","parsec","attoparsec","trifecta"],e:`

<hr>
`,r:{minutes:1.69,words:506},y:"a",t:"Megaparsec tutorial",i:"iconfont icon-haskell"}}],["/haskell/template-haskell/01.html",{loader:()=>r(()=>import("./01.html-XAnl2KZM.js"),__vite__mapDeps([143,1])),meta:{c:["🐑Haskell"],g:["crashcourse","haskell","parsec","attoparsec","trifecta"],e:`

<hr>
`,r:{minutes:.28,words:85},y:"a",t:"01. The Q monad"}}],["/haskell/template-haskell/02.html",{loader:()=>r(()=>import("./02.html-BaES-idH.js"),__vite__mapDeps([144,1])),meta:{c:["🐑Haskell"],g:["crashcourse","haskell","parsec","attoparsec","trifecta"],e:`

<hr>
`,r:{minutes:.24,words:71},y:"a",t:"02. Splicing"}}],["/haskell/template-haskell/03.html",{loader:()=>r(()=>import("./03.html-CMlkfUIp.js"),__vite__mapDeps([145,1])),meta:{c:["🐑Haskell"],g:["crashcourse","haskell","parsec","attoparsec","trifecta"],e:`

<hr>
`,r:{minutes:.28,words:85},y:"a",t:"03. Limitations of TH"}}],["/haskell/template-haskell/04.html",{loader:()=>r(()=>import("./04.html-qp6u7ieA.js"),__vite__mapDeps([146,1])),meta:{c:["🐑Haskell"],g:["crashcourse","haskell","parsec","attoparsec","trifecta"],e:`

<hr>
`,r:{minutes:.24,words:71},y:"a",t:"04. Quotation"}}],["/haskell/template-haskell/05.html",{loader:()=>r(()=>import("./05.html-CAQJ9u1P.js"),__vite__mapDeps([147,1])),meta:{c:["🐑Haskell"],g:["crashcourse","haskell","parsec","attoparsec","trifecta"],e:`

<hr>
`,r:{minutes:.26,words:78},y:"a",t:"05. Typed expressions"}}],["/haskell/template-haskell/06.html",{loader:()=>r(()=>import("./06.html-CwSC6V6X.js"),__vite__mapDeps([148,1])),meta:{c:["🐑Haskell"],g:["crashcourse","haskell","parsec","attoparsec","trifecta"],e:`

<hr>
`,r:{minutes:.33,words:99},y:"a",t:"06. A few words about runQ"}}],["/haskell/template-haskell/07.html",{loader:()=>r(()=>import("./07.html-Bd-ImpTH.js"),__vite__mapDeps([149,1])),meta:{c:["🐑Haskell"],g:["crashcourse","haskell","parsec","attoparsec","trifecta"],e:`

<hr>
`,r:{minutes:.24,words:71},y:"a",t:"07. Names"}}],["/haskell/template-haskell/08.html",{loader:()=>r(()=>import("./08.html-DdoUqmyh.js"),__vite__mapDeps([150,1])),meta:{c:["🐑Haskell"],g:["crashcourse","haskell","parsec","attoparsec","trifecta"],e:`

<hr>
`,r:{minutes:.31,words:92},y:"a",t:"08. Retrieving information about things"}}],["/haskell/template-haskell/09.html",{loader:()=>r(()=>import("./09.html-CiVgGQ1V.js"),__vite__mapDeps([151,1])),meta:{c:["🐑Haskell"],g:["crashcourse","haskell","parsec","attoparsec","trifecta"],e:`

<hr>
`,r:{minutes:.31,words:92},y:"a",t:"09. Example 1 > instance generation"}}],["/haskell/template-haskell/10.html",{loader:()=>r(()=>import("./10.html-CONWZOz2.js"),__vite__mapDeps([152,1])),meta:{c:["🐑Haskell"],g:["crashcourse","haskell","parsec","attoparsec","trifecta"],e:`

<hr>
`,r:{minutes:.31,words:92},y:"a",t:"10. Viewing the generated code"}}],["/haskell/template-haskell/11.html",{loader:()=>r(()=>import("./11.html-CA04L2AM.js"),__vite__mapDeps([153,1])),meta:{c:["🐑Haskell"],g:["crashcourse","haskell","parsec","attoparsec","trifecta"],e:`

<hr>
`,r:{minutes:.35,words:106},y:"a",t:"11. Lifting Haskell values into TH expressions"}}],["/haskell/template-haskell/12.html",{loader:()=>r(()=>import("./12.html-BjdNhd43.js"),__vite__mapDeps([154,1])),meta:{c:["🐑Haskell"],g:["crashcourse","haskell","parsec","attoparsec","trifecta"],e:`

<hr>
`,r:{minutes:.4,words:120},y:"a",t:"12. Example 2 > creating refined values at compile time"}}],["/haskell/template-haskell/13.html",{loader:()=>r(()=>import("./13.html-CTaPcLUo.js"),__vite__mapDeps([155,1])),meta:{c:["🐑Haskell"],g:["crashcourse","haskell","parsec","attoparsec","trifecta"],e:`

<hr>
`,r:{minutes:.31,words:92},y:"a",t:"13. Running IO in Q"}}],["/haskell/template-haskell/14.html",{loader:()=>r(()=>import("./14.html-BiRKKy7_.js"),__vite__mapDeps([156,1])),meta:{c:["🐑Haskell"],g:["crashcourse","haskell","parsec","attoparsec","trifecta"],e:`

<hr>
`,r:{minutes:.35,words:105},y:"a",t:"14. Example 3 > the file-embed package"}}],["/haskell/template-haskell/15.html",{loader:()=>r(()=>import("./15.html-WdYDgIZy.js"),__vite__mapDeps([157,1])),meta:{c:["🐑Haskell"],g:["crashcourse","haskell","parsec","attoparsec","trifecta"],e:`

<hr>
`,r:{minutes:.51,words:153},y:"a",t:"15. Conclusion"}}],["/haskell/template-haskell/",{loader:()=>r(()=>import("./index.html-CRWQNt6g.js"),__vite__mapDeps([158,1])),meta:{c:["🐑Haskell"],g:["crashcourse","haskell","parsec","attoparsec","trifecta"],e:`

<hr>
`,r:{minutes:2.16,words:648},y:"a",t:"🐑Template Haskell tutorial"}}],["/java/aloha-javafx/01.html",{loader:()=>r(()=>import("./01.html-DK7VnXWD.js"),__vite__mapDeps([159,1])),meta:{c:["Java","JavaFX"],g:["crashcourse","java","jdk","jdk8"],e:`

<hr>
`,r:{minutes:.88,words:263},y:"a",t:"Java - 게시판 프로그램",i:"fa-brands fa-java"}}],["/java/aloha-javafx/02.html",{loader:()=>r(()=>import("./02.html-D5LaJmCR.js"),__vite__mapDeps([160,1])),meta:{c:["Java","JavaFX"],g:["crashcourse","java","jdk","jdk8"],e:`

<hr>
`,r:{minutes:.36,words:108},y:"a",t:"Java - 게시판 프로그램",i:"fa-brands fa-java"}}],["/java/aloha-javafx/",{loader:()=>r(()=>import("./index.html-BNC4Ey2k.js"),__vite__mapDeps([161,1])),meta:{c:["Java","JavaFX"],g:["crashcourse","java","jdk","jdk8"],e:`

<hr>
`,r:{minutes:.37,words:111},y:"a",t:"JavaFX 게시판 프로그램",i:"fa-brands fa-java"}}],["/java/effective-java/01-creating-and-destroying-objects.html",{loader:()=>r(()=>import("./01-creating-and-destroying-objects.html-BBnvEJiH.js"),__vite__mapDeps([162,1])),meta:{c:["Java"],g:["crashcourse","java","jdk","jdk8"],e:`

<hr>
<!-- https://yangbongsoo.gitbook.io/study/java-effective-java/creating_and_destroying_objects -->
<p>객체를 만들어야하는 시점과 그 방법, 객체 생성을 피해야 하는 경우와 그 방법, 적절한 순간에 객체가 삭제되도록 보장하는 방법, 그리고 삭제 전에 반드시 이루어져야 하는 청소 작업들을 관리하는 방법을 살펴본다.</p>
<h2>규칙1 : 생성자 대신 정적 팩터리 메서드를 사용할 수 없는지 생각해보라</h2>
<blockquote>
<p>Consider static factory methods instead of consturctors</p>
</blockquote>`,r:{minutes:9.27,words:2780},y:"a",t:"객체의 생성과 삭제"}}],["/java/effective-java/02-methods-common-to-all-objects.html",{loader:()=>r(()=>import("./02-methods-common-to-all-objects.html-CqrGmjcG.js"),__vite__mapDeps([163,1])),meta:{c:["Java"],g:["crashcourse","java","jdk","jdk8"],e:`

<hr>
<!-- https://yangbongsoo.gitbook.io/study/java-effective-java/methods_common_to_all_objects -->`,r:{minutes:.15,words:44},y:"a",t:"모든 객체의 공통 메서드"}}],["/java/effective-java/03-classes-and-interfaces.html",{loader:()=>r(()=>import("./03-classes-and-interfaces.html-Ba4whK9s.js"),__vite__mapDeps([164,1])),meta:{c:["Java"],g:["crashcourse","java","jdk","jdk8"],e:`

<hr>
<!-- https://yangbongsoo.gitbook.io/study/java-effective-java/classes_and_interfaces -->
<hr>
`,r:{minutes:.15,words:44},y:"a",t:"클래스와 인터페이스"}}],["/java/effective-java/04-generics.html",{loader:()=>r(()=>import("./04-generics.html-DhZk5SyF.js"),__vite__mapDeps([165,1])),meta:{c:["Java"],g:["crashcourse","java","jdk","jdk8"],e:`

<hr>
<!-- https://yangbongsoo.gitbook.io/study/java-effective-java/generics -->
<hr>
`,r:{minutes:.14,words:42},y:"a",t:"제네릭"}}],["/java/effective-java/05-enums-and-annotations.html",{loader:()=>r(()=>import("./05-enums-and-annotations.html-DLiHLegL.js"),__vite__mapDeps([166,1])),meta:{c:["Java"],g:["crashcourse","java","jdk","jdk8"],e:`

<hr>
<!-- https://yangbongsoo.gitbook.io/study/java-effective-java/enums_and_annotations -->
<!--

규칙34 : int 상수 대신 enum을 사용하라
// int를 사용한 enum 패턴
public static final int APPLE_FUJI = 0;
public static final int APPLE_PIPPIN = 1;
public static final int APPLE_GRANNY_SMITH = 2;

public static final int ORANGE_NAVEL  = 0;
public static final int ORANGE_TEMPLE = 1;
public static final int ORANGE_BLOOD = 2;
위의 코드는 형안전성 측면에서도 그렇고, 편의성 관점에서도 단점이 많다. String enum 패턴이라 불리는 것은 더 나쁜 패턴이다. 상수 비교를 할 때 문자열 비교를 해야 하므로 성능이 떨어질 수 있고, 사용자가 필드 이름 대신 하드코딩된 문자열 상수를 클라이언트 코드 안에 박어버릴 수 있다는 점이다. 하드코딩된 문자열 상수에 오타가 있는 경우, 컴파일 할 때는 오류를 발견할 수 없기 때문에 실행 도중에 문제가 생기게 될 것이다.
자바 1.5부터 enum 자료형이 생겼다.
public enum Apple { FUJI, PIPPIN, GRANNY_SMITH }
public enum Orange { NAVEL, TEMPLE, BLOOD }
다른 언어들(C, C++, C#)의 enum은 int 값이지만 자바의 enum 자료형은 완전한 기능을 갖춘 클래스다.
enum자료형에 메서드나 필드를 추가하는 이유는 상수에 데이터를 연계시키면 좋기 때문이다. 풍부한 기능을 갖춘 enum 자료형 예제로, 태양계의 여덟 행성을 모델링하는 사례를 살펴보자.
public enum Planet {
    MERCURY(3.33, 2.22),
    VENUS(2.22, 3.33),
    MARS(6.66, 7.77),
    URANUS(8.88,9.99);
    ...

    private final double mass; // 킬로그램 단위
    private final double radius; // 미터단위
    private final double surfaceGravity;

    // 중력 상수
    private final double G = 6.67;

    // 생성자
    Planet(double mass, double radius) {
        this.mass = mass;
        this.radius = radius;
        surfaceGravity = G * mass / (radius * radius);
    }

    public double mass() {return mass;}
    public double radius() {return radius;}
    public double surfaceGravity() {return surfaceGravity;}

    public double surfaceWeigt(double mass){
        return mass * surfaceGravity; // F = ma
    }
enum은 원래 변경 불가능하므로 모든 필드는 final로 선언되어야 한다. 필드는 public으로 선언할 수도 있지만, private로 선언하고 public 접근자를 두는 편이 더 낫다.
enum 자료형에는 자동 생성된 valueOf(String) 메서드가 있는데, 이 메서드는 상수의 이름을 상수 그 자체로 변환하는 역할을 한다. enum 자료형의 toString 메서드를 재정의 할 경우에는 fromString 메서드를 작성해서 toString이 뱉어내는 문자열을 다시 enum 상수로 변환할 수단을 제공해야 할지 생각해 봐야 한다.
// enum 자료형에 대한 fromString 메서드 구현
private static final Map<String, Operation> stringToEnum = new HashMap<>();

static { // 상수 이름을 실제 상수로 대응시키는 맵 초기화
    for (Operation op : values())
        stringToEnum.put(op.toString(), op);
}

// 문자열이 주어지면 그에 대한 Operation 상수 반환. 잘못된 문자열이면 null 반환
public static Operation fromString(String symbol) {
    return stringToEnum.get(symbol);
}
Operation 상수를 stringToEnum 맵에 넣는 것은 상수가 만들어진 다음에 실행되는 static 블록 안에서 한다는 것에 주의하자. 각각의 상수가 생성자 안에서 맵에 자기 자신을 넣도록 하면 컴파일 할 때 오류가 발생한다. enum 생성자 안에서는 enum의 static 필드를 접근할 수 없다(컴파일 시점에 상수인 static 필드는 제외). 생성자가 실행될 때 static 필드는 초기화된 상태가 아니기 때문에 필요한 제약이다.
3rd Edition에서 추가된 부분
private static final Map<String, Operation> stringToEnum = Stream.of(values()).collect(toMap(Object::toString, e -> e));

public static Optional<Operation> fromString(String symbol) {
    return Optional.ofNullable(stringToEnum.get(symbol));
}
상수별 메서드 구현의 단점은 enum 상수끼리 공유하는 코드를 만들기가 어렵다는 것이다. 예를 들어, 급여 명세서에 찍히는 요일을 표현하는 enum 자료형이 있다고 하자. 이 enum 자료형 상수, 그러니까 요일을 나타내는 상수에는 직원의 시급과 해당 요일에 일한 시간을 인자로 주면 해당 요일의 급여를 계산하는 메서드가 있다. 그런데 주중에는 초과근무 시간에 대해서만 초과근무 수당을 주어야 하고, 주말에는 몇 시간을 일했건 전부 초과근무 수당으로 처리해야 한다. switch 문을 만들 때 case 레이블을 경우에 따라 잘 붙이기만 하면 쉽게 원하는 계산을 할 수 있을 것이다.
public enum PayrollDay {
    MONDAY,    TUESDAY, WEDNESDAY,    THURSDAY, FRIDAY, SATURDAY,    SUNDAY;
    private static final int HOURS_PER_SHIFT = 8;

    double pay(double hourWorked, double payRate) {
        double basePay = hourWorked * payRate;

        double overtimePay; // 초과근무수당 계산
        switch (this) {
            case SATURDAY: case SUNDAY:
                overtimePay = hourWorked * payRate /2;
                break;
            default:
                overtimePay = hourWorked <= HOURS_PER_SHIFT ? 0 : (hourWorked - HOURS_PER_SHIFT) * payRate / 2;
        }

        return basePay + overtimePay;
    }
}
분명 간결한 코드다. 하지만 유지보수 관점에서는 위험한 코드다. enum에 새로운 상수를 추가한다고 하자. 아마도 휴가 등을 나타내는 특별한 값일 것이다. 그런데 switch 문에 해당 상수에 대한 case를 추가하는 것을 잊었다면? 컴파일은 되겠지만 휴가 때 일한 시간에 대해서는 같은 급여를 지급하는 프로그램이 되어버릴 것이다.
정말 좋은 방법은 새로운 enum 상수를 추가할 때 초과근무 수당 계산 정책을 반드시 선택하도록 하는 것이다. 기본적인 아이디어는 초과근무 수당을 계산하는 부분을 private로 선언된 중첩 enum 자료형에 넣고, PayrollDay enum 생성자가 이 전략 enum 상수를 인자로 받게 하는 것이다. PayrollDay enum 상수가 초과근무 수당 계산을 이 정책 enum 상수에 위임하도록 하면 switch문이나 상수별 메서드 구현은 없앨 수 있다. 이 패턴을 적용한 코드가 switch 문을 써서 만든 코드보다는 복잡하지만 안전할 뿐더러 유연성도 높다.
public enum PayrollDay {

    MONDAY(PayType.WEEKDAY),
    TUESDAY(PayType.WEEKDAY),
    WEDNESDAY(PayType.WEEKDAY),
    THURSDAY(PayType.WEEKDAY),
    FRIDAY(PayType.WEEKDAY),
    SATURDAY(PayType.WEEKEND),
    SUNDAY(PayType.WEEKEND);

    private final PayType payType;

    //Constructor
    PayrollDay(PayType payType) {
        this.payType = payType;
    }

    double pay(double hoursWorked, double payRate) {
        return payType.pay(hoursWorked, payRate);
    }

    // 정책 enum 자료형
    private enum PayType {
        WEEKDAY {
          double overtimePay(double hours, double payRate) {
              return hours <= HOURS_PER_SHIFT ? 0 : (hours - HOURS_PER_SHIFT) * payRate / 2;
          }
        },
        WEEKEND {
            double overtimePay(double hours, double payRate) {
                return hours * payRate / 2;
            }
        };

        private static final int HOURS_PER_SHIFT = 8;

        abstract double overtimePay(double hrs, double payRate);

        double pay(double hoursWorked, double payRate) {
            double basePay = hoursWorked * payRate;
            return basePay + overtimePay(hoursWorked, payRate);
        }
    }
}
규칙35 : ordinal 대신 객체 필드를 사용하라
//ordinal을 남용한 사례 
public enum Ensemble{
    SOLO, DUET, TRIO;

    public int numberOfMusicians(){
        return ordinal() + 1;
    }
}
모든 enum에는 ordinal이라는 메서드가 있는데, enum 자료형 안에서 enum 상수의 위치를 나타내는 정수값을 반환한다. 하지만 객체필드를 사용해라
public enum Ensemble{
    SOLO(1), DUET(2), TRIO(3);

    private final int num;

    public Ensemble(int size){
        this.num = size;
    }

    public int numberOfMusicians(){
        return num; 
    }
}
규칙36 : 비트 필드 대신 EnumSet을 사용하라
//비트 필드 열거형 상수 - 이제는 피해야 할 구현법
public class Text{
    public static final int STYLE_BOLD          = 1 << 0; //1
    public static final int STYLE_ITALIC        = 1 << 1; //2
    public static final int STYLE_UNDERLINE     = 1 << 2 //4
    public static final int STYLE_STRIKETHROUGH = 1 << 3; //8

    //이 메서드의 인자는 STYLE_상수를 비트별 OR한 값
    public void applyStyles(int styles) { ... } 
}
text.applyStyles(STYLE_BOLD | STYLE_ITALIC); 이렇게 하면 상수들을 집합에 넣을 때 비트별 OR 연산을 사용할 수 있다. 하지만 EnumSet 이라는 더 좋은 방법이 있다.
//EnumSet - 비트필드를 대신할 현대적 기술
public class Text{
    public enum Style {
        BOLD, ITALIC, UNDERLINE, STRIKETHROUGH
    }

    //어떤 Set 객체도 인자로 전달할 수 있으나, EnumSet이 분명 최선 
    public void applyStyles(Set<Style> styles){ ... }
}
text.applyStyles(EnumSet.of(Style.BOLD, Style.ITALIC)); EnumSet의 단점이 하나 있는데 변경 불가능 EnumSet객체를 만들 수 없다. 그래서 EnumSet 객체를 Collections.unmodifiableSet으로 포장하면 되는데, 성능이나 코드 가독성 측면에서 좀 손해를 보게 된다.
규칙37 : ordinal을 배열 첨자로 사용하는 대신 EnumMap을 이용하라
class Herb{
    enum Type { ANNUAL, PERENNIAL, BIENNIAL }

    final String name;
    final Type type;

    Herb(String name, Type type){
        this.name = name;
        this.type = type;
    }

    @Override
    public String toString(){
        return name; 
    }
}
//EnumMap을 사용해  enum 상수별 데이터를 저장하는 프로그램
Herb[] garden = …; 

Map<Herb.Type, Set<Herb>> herbsByType =
    new EnumMap<Herb.Type, Set<Herb>>(Herb.Type.class);

for(Herb.Type t : Herb.Type.values())
    herbsByType.put(t, new HashSet<Herb>());

for(Herb h : garden)
    herbsByType.get(h.type).add(h);

System.out.println(herbsByType);
EnumMap 생성자가 키의 자료형을 나타내는 Class 객체를 인자로 받는다는 것에 주의하자. 이런 Class 객체를 한정적 자료형 토큰이라고 부르는데, 실행시점 제네릭 자료형 정보를 제공한다.
두 번째 예제는 상전이(phase transition) 관계를 표현하기 위해서 중첩 EnumMap을 사용했다.
// EnumMap을 중첩해서 enum 쌍에 대응되는 데이터를 저장한다
public enum Phase{
    SOLID, LIQUID, GAS;

    public enum Transition{
        MELT(SOLID, LIQUID), FREEZE(LIQUID, SOLID),
        BOIL(LIQUID, GAS), CONDENSE(GAS, LIQUID),
        SUBLIME(SOLID, GAS), DEPOSIT(GAS, SOLID);

        private final Phase src;
        private final Phase dat;

        Transition(Phase src, Phase dst){
            this.src = src;
            this.dst = dat;
        }

        //상 전이 맵 초기화 
        private static final Map<Phase, Map<Phase, Transition>> m =
            new EnumMap<Phase, Map<Phase, Transition>>(Phase.class);
        static{
            for(Phase p : Phase.values())
                m.put(p, new EnumMap<Phase, Transition>(Phase.class));

            for(Transition trans : Transition.values())
                m.get(trans.src).put(trans.dst, trans);
        }

        public static Transition from(Phase src, Phase dat) {
            return m.get(src).get(dst);
        }
    }
}

LIQUID쪽을 보면 액체 LIQUID에서 고체 SOLID로 변하는 것은 언다FREEZE라고 한다. 이 맵의 자료형은 Map<Phase, Map<Phase, Transition>>인데, “상전이 이전 상태를, 상전이 이후 상태와 상전이 명칭 사이의 관계를 나타내는 맵에 대응시키는 맵”이라는 뜻이다.
규칙38 : 확장 가능한 enum을 만들어야 한다면 인터페이스를 이용하라
일반적으로 enum 자료형을 계승한다는 것은 바람직하지 않다. 확장된 자료형의 상수들이 기본 자료형의 상수가 될 수 있지만 그 반대가 될 수 없다는 것은 혼란스럽기 때문이다. 또한 기본 자료형과 그 모든 하위 자료형의 enum 상수들을 순차적으로 살펴볼 좋은 방법도 없고 설계와 구현에 관계된 많은 부분이 까다로워진다.
하지만 열거 자료형의 확장이 가능하면 좋은 경우가 적어도 하나 있다. 연산 코드(opcode)를 만들어야 할 때다. 연산 코드는 어떤 기계에서 사용되는 연산을 표현하기 위해 쓰이는 열거 자료형이다. 기본 아이디어는 enum 자료형이 임의의 인터페이스를 구현할 수 있다는 사실을 이용하는 것이다.
먼저 연산 코드 자료형에 대한 인터페이스를 정의한다. 그리고 해당 인터페이스를 구현하는 enum 자료형을 만든다.
// 인터페이스를 이용해 확장 가능하게 만든 enum 자료형 
public interface Operation {
    double apply(double x, double y);
}

public enum BasicOperation implements Operation { 
    PLUS(“+”) {
        public double apply(double x, double y) { return x + y; }
    },
    MINUS(“-“) {
        public double apply(double x, double y) { return x - y; }
    },
    TIMES(“*“) {
         public double apply(double x, double y) { return x * y; }
    },
    DIVIDE(“/“) {
         public double apply(double x, double y) { return x / y; }
    };

    private final String symbol;

    BasicOperation(String symbol) {
        this.symbol = symbol;
    }

    @Override public String toString(){
        return symbol; 
    }
}
BasicOperation은 enum 자료형이라 계승할 수 없지만 Operation은 인터페이스가 확장이 가능하다. 따라서 이 인터페이스를 계승하는 새로운 enum 자료형을 만들면 Operation 객체가 필요한 곳에 해당 enum 자료형의 상수를 이용할 수 있게 된다.
// 인터페이스를 이용해 기존 enum 자료형을 확장하고 테스트하는 프로그램
public static void main(String[] args) {
    double x = Double.parseDouble(args[0]);
    double y = Double.parseDouble(args[1]);
    // Operation을 상속한ExtendedOperation이라는 enum을 새롭게 만든껏임. P224 
    test(ExtendedOperation.class, x, y); 
}

private static <T extends Enum<T> & Operation> void test( Class<T> opSet, double x, double y){
    for (Operation op : opSet.getEnumConstants())
        System.out.printf(“%f %s %f = %f%n”, x, op, y, op.apply(x, y));
}
확장된 연산을 나타내는 자료형의 class 리터럴인 ExtendedOperation.class가 main에서 test로 전달되고 있음에 유의하자. 확장된 연산 집합이 무엇인지 알리기 위한 것이다. 이 class 리터럴은 한정적 자료형 토큰 구실을 한다. opSet의 형인자 T는 굉장히 복잡하게 선언되어 있는데 Class 객체가 나타내는 자료형이 enum 자료형인 동시에 Operation의 하위 자료형이 되도록 한다 라는 뜻이다. 모든 enum 상수를 순차적으로 살펴보면서 해당 상수가 나타내는 연산을 실제로 수행할 수 있으려면 반드시 그래야 한다.
두 번째 방법은 한정적 와일드카드 자료형 Collection<? extends Operation>을 opSet 인자의 자료형으로 사용하는 것이다.
public static void main(String[] args) {
double x = Double.parseDouble(args[0]);
double y = Double.parseDouble(args[1]);
test(Arrays.asList(ExtendedOperation.values()), x, y); 
}

private static void test(Collection<? extends Operation> opSet, double x, double y){
    for(Operation op : opSet) {
        System.out.printf(“%f %s %f = %f%n”, x, op, y, op.apply(x, y));
    }
}
test 메서드의 인자 형태는 메서드를 호출할 때, 여러 enum 자료형에 정의한 연산들을 함께 전달할 수 있도록 하기 위한 것이다. 그러나 이렇게 하면 EnumSet이나 EnumMap을 사용할 수 없기 때문에, 여러 자료형에 정의한 연산들을 함께 전달할 수 있도록 하는 유연성이 필요 없다면, 첫 번째 방식인 한정적 자료형 토큰을 쓰는게 낫다.
인터페이스를 사용해 확장 가능한 enum 자료형을 만드는 방법에는 한 가지 사소한 문제가 있다. enum 구현 자체는 계승할 수 없다는 것이다.
규칙39 : (Prefer annotations to naming patterns)작명 패턴 대신 애노테이션을 사용하라
이번 예제는 Junit의 @Test 애노테이션 기능을 간단하게 직접 구현해보면서, 작명 패턴(naming pattern) 보다 애노테이션이 어떻게 더 좋은지를 설명한다.
작명 패턴의 예로 과거 JUnit은 테스트 메서드 이름을 test로 시작해야 했다. 이러한 작명 패턴에는 몇 가지 문제점이 있는데 첫째, 오타났을 때 프로그램 상 문제가 없기 때문에 알아차리기 어렵다. 둘째, 특정한 프로그램 요소에만 적용되도록 만들 수 없다. 예를 들어 testSafetyMechanisms라는 이름의 클래스를 만들었다 해도 그 클래스의 모든 메서드를 테스트 실행시키지 않는다(클래스 이름 까지는 확인하지 않기 때문에 의미가 없다). 셋째, 프로그램 요소에 인자를 전달할 마땅한 방법이 없다. 메서드 이름에 포함된 문자열로 예외를 알려주는 방법이 있지만 보기 흉할 뿐 아니라 컴파일러가 문자열이 예외 이름인지 알 도리가 없다.
그러므로 애노테이션을 사용하자.
// 표식 애노테이션 자료형(markder annotation type) 선언
import java.lang.annotation.*;

/**
* 애노테이션이 붙은 메서드가 테스트 메서드임을 표시.
* 무인자 정적 메서드(parameterless)에만 사용 가능.
*/
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface BongTest {
}
애노테이션 자료형 BongTest 선언부에도 Retention과 Target이라는 애노테이션이 붙어 있다. 애노테이션 자료형 선언부에 붙는 애노테이션은 메타-애노테이션이라 부른다. @Retention(RetentionPolicy.RUNTIME)은 BongTest가 실행시간(runtime)에도 유지되어야 하는 애노테이션이라는 뜻이다. 그렇지 않으면 BongTest는 테스트 도구에게는 보이지 않는다. @Target(ElementType.METHOD)은 BongTest가 메서드 선언부에만 적용할 수 있는 애노테이션이라는 뜻이다.
public class Sample {

    @BongTest
    public static void noParamStaticMethod() { // 성공해야함
    }

    @BongTest
    public static void oneParamMethod() { // 실패해야함
        throw new RuntimeException("Boom");
    }

    @BongTest
    public void noParamMethod() { // 실패해야함
    }

    @BongTest
    private void privateNoParamMethod() { // 실패해야함
    }

    @BongTest
    public static void oneParamStaticMethod(String ii) { // 실패해야함
    }
}
위와 같이 @BongTest 애노테이션을 적용한 메서드를 Sample 클래스에 선언해 놓고 테스트 실행기를 돌려보자. @BongTest 애노테이션은 Sample 클래스가 동작하는 데 직접적 영향을 미치지 않는다. 해당 애노테이션에 관심 있는 프로그램에게 유용한 정보를 제공할 뿐이다.
public class RunTests {
    public static void main(String[] args) throws Exception {
        int tests = 0;
        int passed = 0;
        Class testClass = Sample.class;
        for (Method m : testClass.getDeclaredMethods()) {
            if (m.isAnnotationPresent(BongTest.class)) {
                tests++;
                try {
                    m.invoke(null);
                    passed++;
                } catch (InvocationTargetException wrappedExc) {
                    Throwable exc = wrappedExc.getCause();
                    System.out.println(m + " failed:" + exc);
                } catch (Exception exc) {
                    System.out.println("INVALID @BongTest" + m);
                    System.out.println(exc);
                }
            }
        }

        System.out.println("Passed :" + passed);
        System.out.println("Failed :" + (tests - passed));
    }
}
이 테스트 실행기는 Sample 클래스의 메서드들 가운데 @BongTest 애노테이션이 붙은 메서드를 전부 찾아내서 리플렉션 기능을 활용해 실행한다(Method.invoke 호출). isAnnotationPresent 메서드는 실행해야 하는 테스트 메서드를 찾는 용도로 사용되었다. 리플렉션을 통해 호출된 메서드가 예외를 발생시키면 해당 예외는 InvocationTargetException으로 wrapping된다. 이 예외가 아닌 다른 예외가 발생되었다면 그것은 컴파일 시에 발견하지 못한, 잘못 사용된 애노테이션이 있다는 뜻이다. 인스턴스 메서드나 private 메서드, 인자가 있는 메서드에 애노테이션을 붙이면 그런일이 생긴다.
이제 특정한 예외가 발생했을 경우만 성공하는 테스트도 지원 가능하도록 고쳐보자. 새로운 애노테이션 자료형이 필요하다.
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface BongTest {
    Class<? extends Exception> value() default BongTest.None.class;

    public static class None extends Exception {
        private None() {
        }
    }
}
추가로 None 클래스를 만들어 default로 놓음으로써 애노테이션의 인자가 없을 때 컴파일 에러가 발생하는것을 막았다.
    @BongTest(ArithmeticException.class)
    public static void arithmeticExceptionTest() {
        int i = 0;
        i = i / i;
    }

    @BongTest(ArrayIndexOutOfBoundsException.class)
    public static void arrayIndexOutOfBoundsExceptionTest() {
        int[] a = new int[0];
        int i = a[1];
    }
위와 같이 발생할 예외를 인자로 보내주면 아래의 테스트 실행기에서 통과 됨을 확인할 수 있다.
public class RunTests {
    public static void main(String[] args) throws Exception {
        int tests = 0;
        int passed = 0;
        Class testClass = Sample.class;
        for (Method m : testClass.getDeclaredMethods()) {
            if (m.isAnnotationPresent(BongTest.class)) {
                tests++;
                try {
                    m.invoke(null);
                    passed++;
                } catch (InvocationTargetException wrappedExc) {
                    Throwable exc = wrappedExc.getCause();
                    Class<? extends Exception> excType = m.getAnnotation(BongTest.class).value();

                    if (excType.isInstance(exc))
                        passed++;
                    else
                        System.out.println(m + " failed:" + exc);
                } catch (Exception exc) {
                    System.out.println("INVALID @BongTest" + m);
                    System.out.println(exc);
                }
            }
        }

        System.out.println("Passed :" + passed);
        System.out.println("Failed :" + (tests - passed));
    }
}
좀 더 발전 시켜서 지정된 예외들 가운데 하나라도 테스트 메서드 안에서 발생하면 테스트가 통과하도록 할 수도 있다.
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface BongTest {
    Class<? extends Exception>[] value() default BongTest.None.class;

    public static class None extends Exception {
        private None() {
        }
    }
}

@BongTest({IndexOutOfBoundsException.class, NullPointerException.class})
public static void doublyBad() {
    List<String> list = new ArrayList<>();
    // 자바 명세에는 아래와 같이 addAll을 호출하면 IndexOutOfBoundsException이나 NullPointerException이 발생한다고 명시되어 있다.
    list.addAll(5, null);
}
public class RunTests {
    public static void main(String[] args) throws Exception {
        int tests = 0;
        int passed = 0;
        Class testClass = Sample.class;
        for (Method m : testClass.getDeclaredMethods()) {
            if (m.isAnnotationPresent(BongTest.class)) {
                tests++;
                try {
                    m.invoke(null);
                    passed++;
                } catch (InvocationTargetException wrappedExc) {
                    Throwable exc = wrappedExc.getCause();
                    Class<? extends Exception>[] excTypes = m.getAnnotation(BongTest.class).value();

                    for (Class<? extends Exception> excType : excTypes) {
                        if (excType.isInstance(exc)) {
                            passed++;
                            break;
                        }
                    }

                    System.out.println(m + " failed:" + exc);

                } catch (Exception exc) {
                    System.out.println("INVALID @BongTest" + m);
                    System.out.println(exc);
                }
            }
        }

        System.out.println("Passed :" + passed);
        System.out.println("Failed :" + (tests - passed));
    }
}
자바8부터 multivalued annotations 하는 또다른 방법이 있다.
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
@Repeatable(BongTestContainer.class)
public @interface BongTest {
    Class<? extends Exception> value() default BongTest.None.class;

    public static class None extends Exception {
        private None() {
        }
    }
}

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface BongTestContainer {
    BongTest[] value();
}

@BongTest(NullPointerException.class)
@BongTest(IndexOutOfBoundsException.class)
public static void doublyBad() {
    List<String> list = new ArrayList<>();
    list.addAll(5, null);
}
@Repeatable 메타 애노테이션으로 단일 요소에 반복적으로 적용할 수 있다. containing annotation type 인자를 받고 그 containing annotation type은 annotation 배열 타입을 갖는다. 주의할 점은 containing annotation type도 반드시 retention 정책과 target에 대한 메타 애노테이션이 있어야 한다. 그렇지 않으면 컴파일이 안된다.
repeatable annotation을 처리하려면 주의가 필요하다. getAnnotationsByType 메서드는 repeated와 non-repeated 애노테이션에 접근하는데 모두 사용될 수 있다. 그러나 isAnnotationPresent 메서드는 BongTest 타입을 검사할 때 BongTestContainer 타입은 자동으로 무시한다. 마찬가지로 BongTestContainer 타입을 검사할 때도 BongTest 타입은 무시한다. 그래서 아래와 같이 두개의 타입 모두를 검사해줘야 한다.
public class RunTests {
    public static void main(String[] args) throws Exception {
        int tests = 0;
        int passed = 0;
        Class testClass = Sample.class;
        for (Method m : testClass.getDeclaredMethods()) {
            if (m.isAnnotationPresent(BongTest.class) || m.isAnnotationPresent(BongTestContainer.class)) {
                tests++;
                try {
                    m.invoke(null);
                    passed++;
                } catch (InvocationTargetException wrappedExc) {
                    Throwable exc = wrappedExc.getCause();
                    BongTest[] excTests = m.getAnnotationsByType(BongTest.class);
                    for (BongTest excTest : excTests) {
                        if (excTest.value().isInstance(exc)) {
                            passed++;
                            break;
                        }
                    }

                    System.out.println(m + " failed:" + exc);

                } catch (Exception exc) {
                    System.out.println("INVALID @BongTest" + m);
                    System.out.println(exc);
                }
            }
        }

        System.out.println("Passed :" + passed);
        System.out.println("Failed :" + (tests - passed));
    }
}
Repeatable 애노테이션은 가독성을 향상시키지만, 애노테이션을 처리하는데 더 많은 상용구(boilerplate)가 있으며 처리하는데 오류를 발생시키기 쉽다.
규칙 40 : Override 애노테이션은 일관되게 사용하라
상위 클래스에 선언된 메서드를 재정의할 때는 반드시 선언부에 Override 애노테이션을 붙여라. 그래야 실수 했을 때 컴파일러에서 검출될 수 있다.
그런데 비-abstract 클래스에서 abstract 메서드를 재정의할 때는 Override 애노테이션을 붙이지 않아도 된다(상위 클래스 메서드를 재정의한다는 사실을 명시적으로 표현하고 싶다면 붙여도 상관 없다).
버전 1.6 이상의 자바를 사용한다면 Override 애노테이션을 통해 찾을 수 있는 버그는 더 많다. 클래스 뿐 아니라 인터페이스에 선언된 메서드를 구현할 때도 Override를 사용할 수 있게 되었기 때문이다. 하지만 인터페이스를 구현할 때 모든 메서드에 반드시 Override를 붙여야 하는 것은 아니다. 인터페이스에 선언된 메서드를 재정의 하지 않으면 어차피 컴파일러가 오류를 내기 때문이다. (마찬가지로 특정 인터페이스 메서드를 재정의하는 메서드라는 사실을 명시적으로 알리고 싶다면 애노테이션을 붙여도 되나, 반드시 필요한 것은 아니다).
규칙 41 : 자료형을 정의할 때 표식 인터페이스를 사용하라
표식 인터페이스(marker interface)는 아무 메서드도 선언하지 않는 인터페이스다. Serializable 인터페이스가 그 예다.
public interface Serializable {
}
이 인터페이스를 구현하는 클래스를 만든다는 것은, 해당 클래스로 만든 객체들은 ObjectOutputStream으로 출력할 수 있다는(“직렬화”할 수 있다는) 뜻이다. 다시 말해 해당 클래스가 어떤 속성을 만족한다는 사실을 표시하는 것과 같다.
표식 애노테이션과 비교했을 때 표식 인터페이스는 두 가지 장점이 있다. 첫 번째 장점은, 표식 인터페이스는 결국 표식 붙은 클래스가 만드는 객체들이 구현하는 자료형이라는 점이다. 표식 애노테이션은 자료형이 아니다. 표식 인터페이스는 자료형이므로, 표식 애노테이션을 쓴다면 프로그램 실행 중에나 발견하게 될 오류를 컴파일 시점에 발견할 수 있도록 한다. 표식 인터페이스 Serializable의 경우를 살펴보자. ObjectOutputStream.write(Object) 메서드는 인자가 Serializable 인터페이스를 구현하지 않은 객체면 오류를 낸다. 두 번째 장점은, 적용 범위를 좀 더 세밀하게 지정할 수 있다는 것이다. 애노테이션 자료형을 선언할 때 target을 ElementType.TYPE으로 지정하면 해당 애노테이션은 어떤 클래스나 인터페이스에도 적용 가능하다. 그런데 특정한 인터페이스를 구현한 클래스에만 적용할 수 있어야 하는 표식이 필요하다고 해 보자. 표식 인터페이스를 쓴다면, 그 특정 인터페이스를 extends 하도록 선언하기만 하면 된다.
표식 애노테이션의 주된 장점은 프로그램 안에서 애노테이션 자료형을 쓰기 시작한 뒤에도 더 많은 정보를 추가할 수 있다는 것이다. 기본값(default)을 갖는 애노테이션 자료형 요소들을 더해 나가면 된다. 표식 인터페이스를 쓰는 경우에는 이런 진화가 불가능하다. 일단 구현이 이루어지고 난 다음에는 새로운 메서드를 추가하는 것이 일반적으로 불가능하기 때문이다(자바8부터 default 메서드를 통해 불가능하지는 않음).
그렇다면 표식 애노테이션과 표식 인터페이스는 각각 어떤 상황에 걸맞나? 클래스나 인터페이스 이외의 프로그램 요소에 적용되어야 하는 표식은 애노테이션으로 만들어야 한다. 하지만 만약 표식이 붙은 객체만 인자로 받을 수 있는 메서드를 만든다면 표식 인터페이스를 사용해야 한다. 그러면 해당 메서드의 인자 자료형으로 해당 인터페이스를 사용할 수 있어서, 컴파일 시간에 형 검사를 진행할 수 있게 된다. 요약하자면, 표식 인터페이스와 표식 애노테이션은 쓰임새가 다르다. 새로운 메서드가 없는 자료형을 정의하고자 한다면 표식 인터페이스를 이용해야 한다. 클래스나 인터페이스 이외의 프로그램 요소에 표식을 달아야 하고, 앞으로 표식에 더 많은 정보를 추가할 가능성이 있다면, 표식 애노테이션을 사용해야 한다.

-->`,r:{minutes:5.54,words:1662},y:"a",t:"열거형(enum)과 어노테이션"}}],["/java/effective-java/06-lambda-and-stream.html",{loader:()=>r(()=>import("./06-lambda-and-stream.html-IpMOCOkE.js"),__vite__mapDeps([167,1])),meta:{c:["Java"],g:["crashcourse","java","jdk","jdk8"],e:`

<hr>
`,r:{minutes:.13,words:40},y:"a",t:"람다와 스트림"}}],["/java/effective-java/07-methods.html",{loader:()=>r(()=>import("./07-methods.html-CKaIDUay.js"),__vite__mapDeps([168,1])),meta:{c:["Java"],g:["crashcourse","java","jdk","jdk8"],e:`

<hr>
<!-- https://yangbongsoo.gitbook.io/study/effective-java/methods -->
<!-- 

이 챕터는 메서드 디자인에 대해서 다룬다. parameter와 return value를 어떻게 다뤄야하는지, 메서드 시그니처를 어떻게 디자인해야 하는지 그리고 어떻게 문서화하는지.
규칙 49 : 파라미터 유효성을 검사하라(Check parameters for validity)
메서드나 생성자를 구현할 때는 받을 수 있는 파라미터에 제한이 있는지 따져봐야 한다(예를 들어 index값은 음수면 안되거나, 객체 참조는 null이면 안되거나). 그리고 제한이 있다면 그 사실을 문서에 남기고 메서드 앞부분에서 검사하도록 해야 한다. 오류는 가급적 빨리 탐지해야한다.
만약 파라미터 유효성을 검사하지 않으면 몇 가지 문제가 생길 수 있다. 처리 도중에 이상한 예외를 내면서 죽어버리는 것이 그 첫 번째이고, 실행이 제대로 되는 것 같기는 한데 잘못된 결과가 나오는 것이 그 두번째다. 최고로 심각한 유형의 문제는, 메서드가 정상적으로 반환값을 내기는 하지만 어떤 객체의 상태가 비정상적으로 바뀌는 경우다. 그러면 나중에 해당 메서드와는 아무 상관도 없는 부분에서 오류가 뜨는데, 그 시간과 위치는 프로그램을 실행할 때마다 바뀐다. 다시 말해, 파라미터 검사를 안하면 규칙76 실패 원자성(failure atomicity)을 위반할 수 있다.
public이나 protected 메서드라면, 파라미터 유효성이 위반되었을 경우에 발생하는 예외를 Javadoc의 @throws 태그를 사용해서 문서화해라. 보통 IllegalArgumentException, IndexOutOfBoundsException, NullPointerException이 이용된다.
    /**
     *
     * @param m mod 연산을 수행할 값. 반드시 양수
     * @return this mod m
     * @throws ArithmeticException (m <= 0일 때)
     */
    public BigInteger mod(BigInteger m) {
        if (m.signum() <= 0) {
            throw new ArithmeticException("Modulus <= 0: " + m);

            // 계산 수행
        }
    }
여기서 doc 코멘트에 "mod 메서드는 파라미터 m이 null일 때 NullPointerException을 throw한다"라는 말이 없음에 주목해라. NullPointerException 예외는 BigInteger 클래스 doc에 코멘트되어 있다. 그러므로 클래스 레벨에 언급된 예외 코멘트를 개별 메서드에 문서화하는것을 피해라.
java7에서 추가된 Objects.requireNonNull(m, "m must not be null");은 유연하고 편리하다. null 체크를 수동으로 더이상 수행할 필요 없다.
 java9에서 java.util.Objects에 range-checking facility가 추가되었다. checkFromIndexSize, checkFromToIndex, checkIndex 3개의 메서드로 구성된다. 이 facility는 null-checking 메서드만큼 유연하진 않다. 사용자만의 디테일한 예외 메세지도 추가할 수 없다. 리스트 및 배열 인덱스에서만 사용되도록 설계됐다. 그리고 닫힌 범위(양쪽 끝점을 포함)는 처리하지 않는다. 그러나 그것이 필요한 것이면 도움이 된다.
public이 아닌 메서드라면 패키지 개발자가 메서드 호출이 이루어지는 상황을 통제할 수 있으므로 항상 유효한 파라미터가 전달될 것으로 생각할 수 있다. 따라서 일반적으로 파라미터 유효성을 검사할 때 확증문(assertion)을 이용한다.
// 재귀적으로 정렬하는 private 도움 함수 
private static void sort(long a[], int offset, int length) {
    assert a != null;
    assert offset >= 0 && offset <= a.length;
    assert length >=0 && length <= a.length - offset;
    … // 계산 수행 
}
확증문은 클라이언트가 패키지를 어떻게 이용하건 확증 조건은 항상 참이 되어야 한다고 주장하는 것이다. 통상적인 유효성검사와는 달리, 확증문은 확증 조건이 만족되지 않으면 AssertionError를 낸다. 또한 통상의 유효성 검사와는 달리, 활성화되지 않은 확증문은 실행되지 않으므로 비용이 0이다. 확증문을 활성화시키려면 java 인터프리터에 -ea(또는 -enableassertions) 옵션을 주어야 한다.
호출된 메서드에서 바로 이용하진 않지만 나중을 위해 보관되는 파라미터의 유효성을 검사하는 것은 특히 중요하다.
    static List<Integer> intArrayAsList(int[] a) {
        Objects.requireNonNull(a);

        return new AbstractList<Integer>() {

            @Override
            public Integer get(int i) {
                return a[i];
            }

            @Override
            public Integer set(int i, Integer val) {
                int oldVal = a[i];
                a[i] = val;
                return oldVal;
            }

            @Override
            public int size() {
                return a.length;
            }
        };
    }
intArrayAsList 메서드는 파라미터로 받은 int 배열에 대한 List view를 반환한다. 해당 메서드의 클라이언트가 null을 전달하면 해당 메서드는 NullPointerException을 발생시키는데 null인 경우를 명시적으로 검사하기 때문이다. 이 검사를 생략했다면 해당 메서드는 새롭게 만들어진 List 객체에 대한 참조를 반환했을 것이다. 그리고 클라이언트가 해당 리스트를 사용하려는 순간 NullPointerException가 일어났을 것이다. 예외가 일어났을 때, 그 List 객체가 대체 어디서 온 것인지 추적하기 어려울 것이다. 따라서 디버깅은 더욱 까다로워진다.
생성자는 나중을 위해 보관될 파라미터의 유효성을 반드시 검사해야 한다는 원칙의 특별한 경우에 해당한다. 클래스 불변식(invariant)을 위반하는 객체가 만들어지는 것을 막으려면, 생성자에 전달되는 파라미터의 유효성을 반드시 검사해야 한다. cf) 불변 클래스는 설계, 구현이 쉽다. 객체의 상태를 변경하는 어떤 메서드도 제공안한다. 모든 필드는 fianl. 상속 불가. private 선언.
메서드가 실제 계산을 수행하기 전에 파라미터를 반드시 검사해야 한다는 원칙에도 예외는 있다. 그 중 가장 중요한 것은 유효성 검사를 실행하는 오버헤드가 너무 크거나 비현실적이고, 계산 과정에서 유효성 검사가 자연스럽게 이루어지는 경우다. 예를 들어, Collections.sort(List)처럼 객체 리스트를 정렬하는 메서드를 생각해 보자. 리스트 내의 모든 객체는 서로 비교 가능해야 한다. 리스트를 정렬하는 과정에서 리스트 내의 모든 객체는 비교된다. 비교 가능하지 않은 객체가 포함되어 있다면 비교 도중에 ClassCastException이 발생할 것이다. 따라서 정렬 전에 모든 객체가 서로 비교 가능한지 검사하는 것은 의미가 없다. 하지만 주의할 것은, 이런 형태의 암묵적인 유효성 검사 방법에 지나치게 기대다 보면 '규칙 76의 실패 원자성'을 잃게 된다는 점이다.
때로는 계산 과정에서 암묵적으로 유효성 검사가 이루어지기는 하는데, 검사가 실패했을 때 엉뚱한 예외가 던져지는 경우가 있다. 계산 도중에 파라미터값이 잘못되어 발생하는 예외가 메서드 문서에 명시된 예외와 다를 수 있다는 것이다. 그런 일이 생기면 예외 변환(exception translation) 숙어를 사용해서(규칙 73) 메서드 문서에 명시된 예외로 변환해야 한다.
이번 절에서 다룬 내용을 잘못 받아들여 "파라미터에 제약을 두는 것은 바람직하다"고 믿어버리면 곤란하다. 메서드는 가능하면 일반적으로 적용될 수 있도록 설계해야 한다. 메서드가 받을 수 있는 읹에 제약이 적으면 적을수록 더 좋다.
규칙 50 : 필요하다면 방어적 복사본을 만들라
여러분이 만드는 클래스의 클라이언트가 불변식을 망가뜨리기 위해 최선을 다할 것이라는 가정하에, 방어적으로 프로그래밍해야 한다. 아래의 클래스는 기간을 나타내는 객체에 대한 변경 불가능 클래스다.
//변경 불가능성이 보장되지 않는 변경 불가능 클래스 
public fianl class Period{
    private final Date start; // 기간의 시작 지점
    private final Date end;  // 기간의 끝 지점. start보다 작은 값일 수 없다. 

    //@throws IllegalArgumentException start가 end보다 뒤면 발생
    //@throws NullPointerException start나 end가 null이면 발생 

    public Period(Date start, Date end){
        if(start.compareTo(end) > 0)
            throw new IllegalArgumentException(start + “after” + end);
        this.start = start;
        this.end = end;
    }

    public Date start(){
        return start;
    }

    public Date end(){
        return end;
    }

    … // 이하 생략

}
얼핏 변경이 불가능한 것으로 보이고, 기간 시작점이 기간 끝점 이후일 수 없다는 불변식도 만족되는 것처럼 보인다. 하지만 Date가 변경 가능 클래스라는 점을 이용하면 불변식을 깨트릴 수 있다.
// Period 객체의 내부 구조를 공격
Date start = new Date();
Date end = new Date();
Period p = new Period(start, end);
end.setYear(78); // p의 내부를 변경 !
따라서 Period 객체의 내부를 보호하려면 생성자로 전달되는 변경 가능 객체를 반드시 방어적으로 복사해서 그 복사본을 Period 객체의 컴포넌트로 이용해야 한다.
// 수정된 생성자 - 인자를 방어적으로 복사함
public Period(Date start, Date end){
    this.start = new Date(start.getTime());
    this.end = new Date(end.getTime());

    if(this.start.compareTo(this.end) > 0)
        throw new IllegalArgumentException(this.start + “after” + this.end);

}
인자의 유효성을 검사하기 전에 방어적 복사본을 만들었다는 것에 유의하자. 유효성 검사는 복사본에 대해서 시행한다. 자연스러워 보이지 않을지도 모르나, 필요한 절차다. 인자를 검사한 직후 복사본이 만들어지기 직전까지의 시간, 그러니까 “취약 구간” 동안에 다른 스레드가 인자를 변경해 버리는 일을 막기 위한 것이다. (TICTOU 공격)
방어적 복사본을 만들 때 Date의 clone 메서드를 이용하지 않았다. Date 클래스는 final 클래스가 아니므로, clone 메서드가 반드시 java.util.Date 객체를 반환할 거라는 보장이 없다. 공격을 위해 특별히 설계된 하위 클래스 객체가 반환될 수도 있다. 이런 공격을 막으려면 인자로 전달된 객체의 자료형이 제 3자가 계승할 수 있는 자료형일 경우, 방어적 복사본을 만들 때 clone을 사용하지 않도록 해야 한다.
접근자를 통한 공격
 위의 생성자를 사용하면 생성자 인자를 통한 공격은 막을 수 있으나 접근자를 통한 공격은 막을 수 없다. 접근자를 호출하여 얻은 객체를 통해 Period 객체 내부를 변경할 수 있기 때문이다.
// Period 객체 내부를 노린 두 번째 공격 형태
Date start = new Date();
Date end = new Date();
Period p = new Period(start, end);
p.end().setYear(78); // p의 내부를 변경 !
이런 공격을 막으려면 변경 가능 내부 필드에 대한 방어적 복사본을 반환하도록 접근자를 수정해야 한다.
// 수정된 접근자 - 내부 필드의 방어적 복사본 생성 
public Date start(){
    return new Date(start.getTime());
}

public Date end(){
    return new Date(end.getTime());
}
이렇게 수정하고 나면 Period는 진정한 변경 불가능 클래스가 된다. 객체 안에 확실히 캡슐화된 필드가 된 것이다.
방어적 복사는 변경 불가능 클래스에서만 쓰이는 기법이 아니다. 클라이언트가 제공한 객체를 내부 자료 구조에 반영하는 생성자나 메서드에는 사용 가능하다. 예를 들어, 클라이언트가 제공한 객체 참조를 내부 Set 객체의 요소로 추가해야 하거나 내부 Map 객체의 키로 써야 하는 경우, 삽입된 객체가 나중에 변경된다면 집합이나 맵의 불변식은 깨지고 말 것이다.
방어적 복사본을 만들도록 하면 성능에서 손해를 보기 때문에, 적절치 않을 때도 있다. 클라이언트가 같은 패키지 안에 있다거나 하는 이유로, 클라이언트가 객체의 내부 상태를 변경하려 하지 않는다는 것이 확실하다면 방어적 복사본은 만들지 않아도 될 것이다. 여기서 배워야 할 진짜 교훈은, 객체의 컴포넌트로는 가능하다면 변경 불가능 객체를 사용해야 한다는 것이다. 그래야 방어적 복사본에 대해서는 신경 쓸 필요가 없어지기 때문이다.
규칙 51 : 메서드 시그니처는 신중하게 설계해라
메서드 이름은 신중하게 고르라.
 편의 메서드를 제공하는 데 너무 열 올리지 마라. 클래스에 메서드가 너무 많으면 학습, 사용, 테스트, 유지보수 등의 모든 측면에서 어렵다.
 인수 리스트(parameter list)를 길게 만들지 마라. 4개 이하가 되도록 애쓰라. 긴 인자 리스트를 짧게 줄이는 방법으로는 첫째, 여러 메서드로 나누는 방법이 있고 둘째, 도움 클래스를 만들어 인자들을 그룹별로 나누는 것이다. 보통 이 도움 클래스들은 static 멤버 클래스다(자주 등장하는 일련의 인자들이 어떤 별도 개체를 나타낼 때 쓰면 좋다). 셋째, 빌더 패턴이 있다.
 인자의 자료형으로는 클래스보다 인터페이스가 좋다.
 인자 자료형으로 boolean을 쓰는 것보다는, 원소가 2개인 enum 자료형을 쓰는 것이 낫다. 

규칙 52 : 오버로딩할 때는 주의하라
아래의 프로그램 목적은 컬렉션을 종류별로(집합이냐, 리스트냐, 아니면 다른 종류의 컬렉션이냐) 분류하는 것이다.
//잘못된 프로그램
public class CollectionClassifier {
    public static String classify(Set<?> s){
        return "Set";
    }

    public static String classify(List<?> lst){
        return "List";
    }

    public static String classify(Collection<?> lst){
        return "Unknown Collection";
    }

    public static void main(String[] args){
        Collection<?>[] collections = {
                new HashSet<String>(),
                new ArrayList<BigInteger>(),
                new HashMap<String, String>().values()
        };

        for(Collection<?> c : collections)
            System.out.println(classify(c));
    }
}
이 프로그램이 Set, List, Unkwon Collection을 순서대로 출력하지 않을까 기대하겠지만 실제로는 Unknown Collection을 세 번 출력한다. 그 이유는 classify 메서드가 오버로딩되어 있으며, 오버로딩된 메서드 가운데 어떤 것이 호출될지는 컴파일 시점에 결정되기 때문이다. 루프가 세 번 도는 동안, 인자의 컴파일 시점 자료형은 전부 Collection<?>으로 동일하다. 각 인자의 실행시점 자료형(runtime type)은 전부 다르지만, 선택 과정에는 영향을 끼치지 못한다. 인자의 컴파일 시점 자료형이 Collection<?>이므로 호출되는 것은 항상 classify(Collection<?>) 메서드다.
이 예제 프로그램은 직관과는 반대로 동작한다. 오버로딩된 메서드는 정적(static)으로 선택되지만, 재정의된 메서드는 동적(dynamic)으로 선택되기 때문이다. 재정의된 메서드의 경우 선택 기준은 메서드 호출 대상 객체의 자료형이다. 객체 자료형에 따라 실행 도중에 결정되는 것이다. 그렇다면 재정의된 메서드란 무엇인가? 상위 클래스에 선언된 메서드와 같은 시그니처를 갖는 하위 클래스 메서드가 재정의된 메서드다. 하위 클래스에서 재정의한 메서드를 하위 클래스 객체에 대해 호출하면, 해당 객체의 컴파일 시점 자료형과는 상관없이, 항상 하위 클래스의 재정의 메서드가 호출된다.
class Wine {
    String name() { return "wine";}
}

class SparklingWine extends Wine {
    @Override String name() { return "sparklingWine"; }
}

class Champagne extends SparklingWine{
    @Override String name() { return "champagne"; }
}

public class Overriding {
    public static void main(String[] args) {
        Wine[] wines = {
                new Wine(), new SparklingWine(), new Champagne()
        };

        for(Wine wine : wines)
            System.out.println(wine.name());
    }
}
name 메서드는 Wine 클래스에 선언되어 있고, sparklingWine과 Champagne은 그 메서드를 재정의한다. 기대대로 위의 프로그램은 순서대로 출력한다. 순환문의 매 루프마다 객체의 컴파일 시점 자료형은 항상 Wine이었는데도 말이다. 재정의 메서드 가운데 하나를 선택할 때 객체의 컴파일 시점 자료형은 영향을 주지 못한다. 오버로딩에서는 반대로 실행시점 자료형이 아무 영향도 주지 못한다. 실행될 메서드는 컴파일 시에, 인자의 컴파일 시점 자료형만을 근거로 결정된다.
오버로딩은 직관적인 예측에 반하므로 혼란스럽다. 따라서 오버로딩을 사용할 때는 혼란스럽지 않게 주의해야 한다. 혼란을 피하는 안전하고 보수적인 전략은, 같은 수의 인자를 갖는 두 개의 오버로딩 메서드를 API에 포함시키지 않는 것이다. 예를 들어 ObjectOutputStream의 경우를 생각해 보자. 이 메서드들은 writeBoolean(boolean), writeInt(int), writeLong(long) 같이 정의되어 있다. 이런 작명 패턴을 따르면 오버로딩에 비해 어떤 점이 좋을까? 각 메서드에 대응되는 read 메서드를 정의할 수 있게 된다. (readBoolean(), readInt(), readLong() 등을 정의할 수 있게 된다).
하지만 생성자에는 다른 이름을 사용할 수 없다. 생성자가 많다면, 그 생성자들은 항상 오버로딩된다. 그게 문제라면 생성자 대신 정적 팩터리 메서드를 사용하는 옵션을 사용할 수도 있다. 하지만 같은 수의 인자를 받는 오버로딩 메서드가 많더라도, 어떤 오버로딩 메서드가 주어진 인자 집합을 처리할 것인지가 분명히 결정된다면 프로그래머는 혼란을 겪지 않을 것이다. 그 조건은, 두 개의 오버로딩 메서드를 비교했을 때 그 형식 인자 가운데 적어도 하나가 “확실히 다르다”면 만족된다. 확실히 다르다라는 것은 두 자료형을 서로 형변환 할 수 없다면 확실히 다른 것이다. 예를 들어 ArrayList에는 int를 받는 생성자와 Collection을 인자로 받는 생성자가 있다. 어떤 상황에서라도 이 두 생성자 간에 혼란의 여지가 있으리라고는 보기 어렵다.
remove(E) vs remove(int)
 자바 1.5 이전에는 모든 기본 자료형은 참조 자료형과는 확실히 달랐다. 하지만 자동 객체화(autoboxing)라는 기능이 도입된 후 이제는 “확실히 다르다”라고 말할 수 없게 됐다.
public class SetList {
    public static void main(String[] args) {
        Set<Integer> set = new TreeSet<>();
        List<Integer> list = new ArrayList<>();

        for(int i = -3 ; i < 3; i++){
            set.add(i);
            list.add(i);
        }

        for(int i =0; i< 3; i++){
            set.remove(i);
            list.remove(i);
        }
        System.out.println(set + " " + list);
    }
}
결과를 [-3, -2, -1] [-3, -2, -1] 이렇게 기대하지만 실상은 그렇지 않다. [-3, -2, -1] [-2, 0, 2] 가 출력된다. set.remove(i)는 인자의 값을 가진 모든 원소가 제거된다. 하지만 list.remove(i)는 해당 i번째 요소의 원소값을 지우게 된다. 그래서 해결을 하려면 Integer로 형변환하여 올바른 오버로딩을 하거나 Integer.valueOf를 적용해야 한다.
for(int i =0; i< 3; i++){
            set.remove(i);
            // 인자로 들어온 값을 지우고 싶기 때문에 remove(int)가 아닌 remove(E)형태가 되야 한다.
            list.remove(Integer.valueOf(i)); // 아니면 remove((Integer) i);
}
이런 일이 발생하는 원인은, List<E> 인터페이스에 remove(E)와 remove(int)라는 오버로딩 메서드 두 개가 존재하기 때문이다.(remove(E)는 인자로 들어온 값을 지우는 메서드, remove(int)는 인자 position의 값을 지우는 메서드) 제네릭이 도입된 자바 1.5 이전에는 List 인터페이스에 remove(E) 대신 remove(Object)가 있었다. Object와 int는 완전히 다른 자료형이므로 문제가 될 것이 없었다. 하지만 제네릭과 자동 객체화(autoboxing)가 도입되면서, E와 int는 더 이상 완전히 다르다고 말할 수 없게 되었다.
인자 개수가 같은 오버로딩 메서드를 추가하는 것은 일반적으로 피해야 한다. 하지만 특히 생성자에 대해서라면 이 충고를 따를 수 없을 지도 모른다. 그럴 때는, 형변환만 추가하면 같은 인자 집합으로 여러 오버로딩 메서드를 호출할 수 있는 상황은 피하는 것이 좋다.
규칙 53 : varargs는 신중히 사용하라
자바 1.5부터 추가된 varargs 메서드는 가변 인자 메서드라고 부른다. 이 메서드는 지정된 자료형의 인자를 0개 이상 받을 수 있다. 동작 원리는 이렇다. 우선 클라이언트에서 전달한 인자 수에 맞는 배열이 자동 생성되고, 모든 인자가 해당 배열에 대입된다. 그리고 마지막으로 해당 배열이 메서드에 인자로 전달된다.
//varargs의 간단한 사용 예 
static int sum(int… args) {
    int sum = 0;
    for ( int arg : args )
        sum += arg;
    return sum; 
}
그런데 때로는 0 이상이 아니라, 하나 이상의 인자가 필요할 때가 있다. 예를 들어 주어진 int 인자 가운데 최소치를 구해야 한다고 생각해 보자. 아래의 함수는 인자 없이 호출될 수 있다고 생각하면 깔끔하게 구현되지 않는다. 실행시점에 배열 길이를 검사해야만 한다.
// 하나 이상의 인자를 받아야 하는 varargs 메서드를 잘못 구현한 사례
static int min(int … args){
    if(args.length == 0)
        throw new IllegalArgumentException(“Too few arguments”);
    int min = args[0];
    for(int i = 1; i < args.length; i++)
        if(args[i] < min )
            min = args[i];
    return min;
}
그러나 이 방법에는 몇 가지 문제가 있다. 클라이언트가 인자 없이 메서드를 호출하는 것이 가능할 뿐 아니라, 컴파일 시점이 아니라 실행 도중에 오류가 난다는 것이다. 또 한 가지 문제는 보기 흉한 코드라는 것이다. args의 유효성을 검사하는 코드를 명시적으로 넣어야 하고, min을 Integer.MAX_VALUE로 초기화하지 않는 한 for-each 문을 사용할 수도 없다.
다행히 더 좋은 방법이 있다. 메서드가 인자를 두 개 받도록 선언하는 것이다. 하나는 지정된 자료형을 갖는 일반 인자고, 다른 하나는 같은 자료형의 varargs 인자다. 이 해법은 앞서 살펴본 방법의 모든 문제를 해결한다.
// 하나 이상의 인자를 받는 varargs 메서드를 제대로 구현한 사례 
static int min(int firstArg, int … remainingArgs){
    int min = firstArg;
    for (int arg : remainingArgs) 
        if(arg < min)
            min = arg;
    return min; 
}
이 예제로 알 수 있듯, varargs는 임의 개수의 인자를 처리하는 메서드를 만들어야 할 때 효과적이다. varargs가 추가된 것은 자바 1.5부터 플랫폼에 추가된 printf 메서드와, varargs를 이용할 수 있도록 개선된 핵심 리플렉션 기능 때문이다. printf와 리플렉션은 varargs를 엄청나게 많이 이용한다.
Arrays.asList 이 메서드는 원래 여러 인자를 하나의 리스트로 합칠 목적으로 설계된 것이 아니었다. 그래서 varargs가 플랫폼에 추가되었을 때, 아래와 같은 코드를 지원할 수 있도록 Arrays.asList를 수정한 것은 좋은 생각 같았다. List<String> homophones = Arrays.asList(“to”, “too”, “two”); 하지만 배열에 직접 toString을 호출하면 쓸모없는 문자열이 출력된다.
int[] myArr = {11, 22};
System.out.println(Arrays.asList(myArr)); // [[I@64889c4e]
이 숙어는 객체 참조 자료형에 대해서만 동작했고 기본 자료형 값의 배열에 적용하면 원하는 것과 거리가 멀고 쓸모없는 값이 나온다. (자바 1.4에서는 컴파일 조차 안됐지만 1.5에서 Arrays.asList를 varargs 메서드로 바꾼 덕분에 오류나 경고 없이 컴파일 된다.)
int[] digits = {3,1,2,3,4,1,2,6,7,5};
System.out.println(Arrays.asList(digits));  // [[I@4678f83a]

Integer[] digits = {3,1,2,3,4,1,2,6,7,5};
System.out.println(Arrays.asList(digits));  // [3, 1, 2, 3, 4, 1, 2, 6, 7, 5]
기본 자료형에 이런 결과가 나오는 이유에 대해서 알아보자. Arrays.asList 메서드는 객체 참조를 모아 배열로 만드는데, 그 결과로 int 배열 digits에 대한 참조가 담긴 길이 1짜리 배열, 즉 배열의 배열이 만들어진다. List<int[]> 객체가 만들어지는 것이다. 이 리스트에 toString을 호출하면 다시 그 내부의 원소(int 배열)의 toString 메서드가 호출되는데, 방금 본 이상한 문자열은 그렇게 만들어지는 것이다.
그나마 다행인 것은 Arrays.asList를 사용하여 배열을 문자열로 변환하는 숙어는 이제 폐기되었다는 것이다. 뒤이어 나온 숙어는 좀 더 안정적이다. Arrays 클래스에는 어떤 자료형의 배열이라도 문자열로 변환할 수 있도록 설계된 Arrays.toString 메서드가 구비되었다(varargs 메서드가 아니다). Arrays.asList 대신 Arrays.toString을 사용하도록 프로그램을 고치면 원하는 결과를 얻을 수 있다.
// 배열을 출력하는 올바른 방법
System.out.println(Arrays.toString(myArr));
varargs는 정말로 임의 개수의 인자를 처리할 수 있는 메서드를 만들어야 할 때만 사용하라. 의심스런 메서드들은 아무 인자 리스트나 받을 수 있는 메서드들이다.
ReturnType1 suspect1 (Object ... args) { }
<T> ReturnType2 suspect2 (T ... args) { }
규칙 54 : null 대신 empty 배열이나 컬렉션을 반환하라
아래와 같이 정의된 메서드는 어렵지 않게 만날 수 있다.
private final List<Cheese> cheeseInStock = …;

//@return 재고가 남은 모든 치즈를 반환. 치즈가 남지 않았을 때는 null을 반환
public List<Cheese> getCheeses() {
    return cheeseInStock.isEmpty() ? null
        : new ArrayList<>(cheeseInStock);
}
그런데 치즈 재고가 없는 상황을 특별하게 처리하도록 강제하는 코드는 바람직하지 않다. 클라이언트 입장에서는 null이 반환될 때를 대비한 코드를 만들어야 하기 때문이다. 아래의 예를 보자.
List<Cheese> cheeses = shop.getCheeses();
if(cheeses != null && cheeses.contains(Cheese.STILTON))
    System.out.println("Jolly good, just the thing.");
빈배열이나 컬렉션을 반환하는 대신에 null을 반환하는 메서드를 사용하면 이런 상황을 겪게 된다. 이런 메서드는 오류를 쉽게 유발한다. 클라이언트가 null 처리를 잊어버릴 수 있기 때문이다.
배열 할당 비용을 피할 수 있으니 null을 반환해야 바람직한 것 아니냐는 주장도 있을 수 있으나, 이 주장은 두 가지 측면에서 틀렸다. 프로파일링 결과로 해당 메서드가 성능 저하의 주범이라는 것이 밝혀지지 않는 한, 그런 수준까지 성능 걱정을 하는 것은 바람직하지 않다는 것이 첫 번째다. 두 번째는 할당 없이 빈 컬렉션이나 배열을 리턴하는게 가능하다.
아래의 코드는 빈 컬렉션을 리턴하는 일반적인 예다.
public List<Cheese> getCheeses() {
    return new ArrayList<>(cheeseInStock);
}
드물 긴하지만 빈 콜렉션을 할당하면 성능에 해를 끼친다는 증거가 있다. immutable 객체가 자유롭게 공유 될 수 있기 때문에 동일한 immutable empty 컬렉션을 반복적으로 반환함으로써 할당을 피할 수있다.
// Optimization - avoids allocating empty collections
public List<Cheese> getCheeses() {
    return cheeseInStock.isEmpty() ? Collections.emptyList()
        : new ArrayList<>(cheeseInStock);
}
set을 반환한다면 Collections.emptySet, map을 반환해야한다면 Collections.emptyMap을 사용하면 된다.
배열의 경우도 똑같다.
// The right way to return a possibly empty array
public Cheese[] getCheeses() {
    return cheeseInStock.toArray(new Cheese[0]);
}
// Optimization - avoids allocating empty arrays
private static final Cheese[] EMPTY_CHEESE_ARRAY = new Cheese[0];

public Cheese[] getCheeses() {
    return cheeseInStock.toArray(EMPTY_CHEESE_ARRAY);
}
최적화 버전에서 모든 toArray 호출에 동일한 빈 배열을 전달한다.이 배열은 cheesesInStock이 비어있을 때마다 getCheeses에서 반환된다. 성능 향상을 위한다고 toArray에 전달된 배열을 미리 할당하면 안된다.
// Don't do this - preallocating the array harms performance!
return cheeseInStock.toArray(new Cheeses[cheeseInStock.size()]);
규칙 55 : Return optionals judiciously
규칙 56 : 모든 API 요소에 문서화 주석을 달라
좋은 API 문서를 만들려면 API에 포함된 모든 클래스, 인터페이스, 생성자, 메서드, 그리고 필드 선언에 문서화 주석을 달아야 한다. 직렬화가 가능한 클래스라면 직렬화 형식도 밝혀야 한다.
메서드 주석 메서드에 대한 무서화 주석은 메서드와 클라이언트 사이의 규약을 간명하게 설명해야 한다. 계승을 위해 설계된 메서드가 아니라면 메서드가 무엇을 하는지를 설명해야지 어떻게 그 일을 하는지를 설명해서는 안된다. 아울러 문서화 주석에는 해당 메서드의 모든 선행조건과 후행조건을 나열해야 한다. 선행조건은 클라이언트가 메서드를 호출하려면 반드시 참이 되어야 하는 조건들이다. 후행조건은 메서드 실행이 성공적으로 끝난 다음에 만족되어야 하는 조건들이다. 보통 선행조건은 무점검 예외(unchecked exception)에 대한 @throws 태그를 통해 암묵적으로 기술한다. 관계된 인자의 @param 태그를 통해 명시할 수도 있다.
선행조건과 후행조건 외에도, 메서드는 부작용(side effect)에 대해서도 문서화 해야한다. 예를 들어 어떤 메서드가 후면 스레드(background thread)를 실행한다면 문서에는 그 사실이 명시되어야 한다.
관습상 @param, @return, @throws 태그 다음에 오는 구나 절에는 마침표를 찍지 않는다.
/**
 * Returns the element at the specified position in this list
 * 
 * <p>This method is <i>not</i> guaranteed to run in constant time. In some implementations it may run in time proportional to the element position.
 *
 * @param index index of element to return; must be
 *              non-negative and less than the size of this list
 * @return the element at the specified position in this list
 * @throws IndexOutOfBoundsException if the index is out of range
 *         ({@code index < 0 || index >= this.size()})
 */
E get(int indxe);
주석에 HTML 태그<p> <i>가 사용되었다는 것에 유의하자. Javadoc 유틸리티는 문서화 주석을 HTML 문서로 변환한다. @throws 절에 폼함된 코드 주변에 {@code} 태그가 사용된 것도 유의하자. 이 태그는 두 가지 일을 한다. 첫 번째는 해당 코드가 코드 서체로 표시되도록 하는 것이고 두 번째는 그 안에 포함된 모든 HTML 마크업이나 Javadoc 태그가 위력을 발휘하지 못하도록 하는 것이다. {@literal} 태그를 사용하면 그 태그 안에 포함된 HTML 마크업이나 Javadoc 태그는 전부 단순 문자로 취급된다. {@code} 태그와 유사하지만, 코드 서체로 표시되지는 않는다는 차이가 있다.
모든 문서화 주석의 첫 번째 “문장”은, 해당 주석에 담긴 내용을 요약한 것이다. 혼란을 막기 위해, 클래스나 인터페이스의 멤버나 생성자들 가운데 요약문이 같은 것은 없어야 한다. 오버로딩을 진행할 때는 특히 주의하라. 같은 요약문을 쓰는 것이 자연스러울 때가 종종 있어서다(하지만 문서화 주석의 경우, 동일한 첫 문장은 곤란하다).
문서화 주석의 요약문은 반드시 완벽한 문장일 필요가 없다. 메서드나 생성자의 경우, 요약문은 메서드가 무슨 일을 하는지 기술하는 완전한 동사구여야 한다. 클래스나 인터페이스의 요약문은 해당 클래스나 인터페이스로 만들어진 객체가 무엇을 나타내는지를 표현하는 명사구여야 한다. 필드의 요약문은 필드가 나타내는 것이 무엇인지를 설명하는 명사구여야 한다.
제네릭, enum, 애노테이션 문서화 주석 제네릭 자료형이나 메서드에 주석을 달 때는 모든 자료형 인자들을 설명해야 한다.
/**
 * An object that maps keys to values. A map cannot contain
 * duplicate keys; each key can map to at most one value.
 *
 * (중간 생략)
 *
 * @param <K> the type of keys maintained by this map
 * @param <V> the type of mapped values 
 */
public interface MyMap<K,V> {
}
enum 자료형에 주석을 달 때는 자료형이나 public 메서드뿐 아니라 상수 각각에도 주석을 달아 주어야 한다.
/**
 * 교향악단에서 쓰이는 악기 종류
 */
public enum OrchestraSection {
    /** 플루트, 클라리넷, 오보에 관한 목관악기.*/ 
    WOODWIND,

    /** 프렌치 혼이나 트럼펫 같은 금관악기. */
    BRASS,

    /** 팀파니나 심벌즈 같은 타악기. */
    PERCUSSION,

    /** 바이올린이나 첼로 같은 현악기. */
    STRING;
}
애노테이션 자료형에 주석을 달 때는 자료형뿐 아니라 모든 멤버에도 주석을 달아야 한다. 멤버에는 마치 필드인 것처럼 명사구 주석을 달라. 자료형 요약문에는 동사구를 써서, 언제 이 자료형을 애노테이션으로 붙어야 하는지 설명하라.
/**
 * 지정된 예외를 반드시 발생시켜야 하는 테스트 메서드임을 명시. 
 */
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface ExceptionTest{

    /**
         * 애노테이션이 붙은 테스트 메서드가 테스트를 통과하기 위해
         * 반드시 발생시켜야 하는 예외. (이 Class 객체가 나타내는 자료형의 
         * 하위 자료형이기만 하면 어떤 예외든 상관없다.)
         */
    Class<? extends Throwable> value();
}

-->`,r:{minutes:4.62,words:1387},y:"a",t:"메서드"}}],["/java/effective-java/08-general-programming.html",{loader:()=>r(()=>import("./08-general-programming.html-BQ6kil9h.js"),__vite__mapDeps([169,1])),meta:{c:["Java"],g:["crashcourse","java","jdk","jdk8"],e:`

<hr>
<!-- https://yangbongsoo.gitbook.io/study/effective-java/general_programming -->
<hr>
<!-- 규칙 57 : 지역 변수의 유효범위를 최소화하라
C와 같은 오래된 프로그래밍 언어는 지역 변수를 블록 앞부분에 선언한다. 그러나 고칠 필요가 있는 습관이다. 지역 변수의 유효범위를 최소화하는 가장 강력한 기법은, 처음으로 사용하는 곳에서 선언하는 것이다. 사용하기 전에 선언하면 프로그램의 의도를 알고자 소스 코드를 읽는 사람만 혼란스럽게 할 뿐이다. 실제로 변수가 사용될 때쯤 되면, 그 변수의 자료형과 초기값이 무엇이었는지는 잊어버리고 말 것이다.
지역 변수를 너무 빨리 선언하면 유효범위가 너무 앞쪽으로 확장될 뿐 아니라, 너무 뒤쪽으로도 확장된다. 지역 변수의 유효범위는 선언된 지점부터 해당 블록 끝까지다. 어떤 블록 밖에서 선언된 변수는 프로그램이 해당 블록 수행을 끝내고 나서도 계속 사용 가능하다. 어떤 변수를 원래 사용하려고 했던 곳 이외의 장소에서 실수로 사용하게 되면, 끔찍한 결과가 초래될 수 있다.
거의 모든 지역 변수 선언에는 초기값이 포함되어야 한다. 그런데 try-catch 블록이 사용 될 때는 예외적 상황이 생길 수 도 있다. 어떤 변수가 점검지정 예외(checked exception)을 던지는 메서드를 통해 초기화된다면 그 변수는 try 블록 안에서 초기되어야 할 것이다. 그런데 그 변수의 값이 try 블록 밖에서도 사용할 수 있어야 하는 값이라면 선언 위치를 try 블록 앞으로 이동시켜야 한다.
순환문(loop)을 잘 쓰면 변수의 유효범위를 최소화할 수 있다. for문이나 for-each문의 경우, 순환문 변수라는 것을 선언할 수 있는데, 그 유효범위는 선언된 지역(즉, for 다음에 오는 순환문 괄호 ()와 순환문 몸체 {} 내부의 코드) 안으로 제한된다. 따라서 while 문보다는 for 문을 쓰는 것이 좋다. 순환문 변수의 내용은 순환문 수행이 끝난 이후에는 필요 없다는 가정하에서. 예를 들어, 컬렉션을 순회할 때는 아래와 같이 하는 것이 좋다.
// 컬렉션을 순회할 때는 이 숙어대로 하는 것이 바람직
for (Element e : c) {
    doSomething(e);
}
이런 for 순환문이 while 문보다 바람직한 이유는 무엇인가? 아래의 코드를 보자. while 문이 두 개 사용되었고, 버그도 하나 있다.
Iterator<Element> i = c.iterator();
while(i.hasNext()){
    doSomething(i.next());
}
…
Iterator<Element> i2 = c2.iterator();
while(i.hasNext()){ // 버그 
    doSomething(i2.next());
}
두 번째 순환문에는 코드를 복붙하다보니 생긴 버그가 하나 있다. 새로운 순환문 변수 i2를 초기화 했으나 실제로는 옛날 변수 i를 써버린 것이다. i가 아직도 유효범위 안에 있는 관계로, 이 코드는 컴파일이 잘 될뿐 아니라 예외도 없이 실행되지만 이상하게 동작할 것이다. 이와 비슷한 복붙 버그가 for 문이나 for-each 문에서도 생길 수 있을까? 컴파일조차 되지 않을 것이므로 어려울 것이다. 첫 번째 순환문 안에서 사용된 요소나 반복자의 유효범위는 두 번째 순환문까지 연장될 수 없다. 아래의 예제를 보자.
for(Iterator<Element> i = c.iterator(); i.hasNext();){
    doSomething(i.next());
}
…
//심볼 i를 찾을 수 없다면서 컴파일 시점에 오류 발생
for(Iterator<Element> i2 = c2.iterator(); i.hasNext();){
    doSomething(i2.next());
}
더욱이 for문을 사용할 때는 순환문마다 다른 이름으 변수를 사용할 필요가 없기 때문에 복붙 버그가 발생할 가능성은 더욱 줄어든다. 각각의 for 문은 서로 의존성이 없으므로, 같은 변수명을 거듭 사용해도 상관없다. 지역 변수의 유효범위를 최소화하는 숙어를 하나 더 살펴보자.
for (int i = 0 , n = expensiveComputation(); i< n ; i++){
    doSomething(i);
}
여기서 주의할 것은 두 개의 순환문 변수가 사용되었다는 것이다. i와 n의 유효범위는 정확히 해당 for문 안으로 제한된다. 두번째 변수 n은 i값의 범위를 제한하는 용도로 쓰이고 있는데, 그 값을 계산하는 비용이 꽤 크다. 따라서 미리 계산해 넣어두고 사용함으로써 매번 재계산할 필요가 없도록 했다. 명심할 것은, 순환문 조건식 안에서 메서드를 호출할 경우, 해당 메서드의 호출 결과로 반환되는 값이 순환문 각 단계마다 달라지지 않는다면, 항상 이 패턴대로 코딩하라는 것이다.
지역 변수의 유효범위를 최소화하는 마지막 전략은 메서드의 크기를 줄이고 특정한 기능에 집중하라는 것이다. 두 가지 서로 다른 기능을 한 메서드 안에 넣어두면 한 가지 기능을 수행하는 데 필요한 지역 변수의 유효범위가 다른 기능까지 확장되는 문제가 생긴다. 이런 일을 막으려면 각 기능을 나눠서 별도 메서드로 구현해야 한다.
규칙 58 : for 문보다는 for-each 문을 사용하라
릴리스 1.5 전에는 컬렉션을 순회할 때 아래으 숙어를 따르는 것이 바람직했다.
// 컬렉션 순회를 위해 한동안 많이 썼던 숙어
for (Iterator i = c.iterator(); i.hasNext(); ){
    doSomething((Element) i.next()); // 1.5 전에는 제네릭 없었음
}
배열을 순회할 때는 이렇게 하는 것이 바람직 했다.
// 배열 순회할 때 한동안 많이 사용한 숙어
for (int i =0; i< a.length; i++){
    doSomething(a[i]);
}
릴리스 1.5부터 도입된 for-each 문은 성가신 코드와 반복자, 첨자 변수들을 완전히 제거해서 오류 가능성을 없앤다.
// 컬렉션이나 배열을 순회할 때는 이 숙어를 따르자
for (Element e : elements){
    doSomething(e);
}
위의 for-each 문에서 : "기호는 안에 있는(in)”이라고 읽는다. 따라서 위의 순환문은 “elements 안에 있는 e 각각에 대해서(for)” 라고 읽으면 된다. for-each 문의 장점은 여러 컬렉션에 중첩되는 순환문을 만들어야 할 때 더 빛난다. 두 개 컬렉션에 대한 순환문을 중첩시킬 때 흔히 저지르는 실수의 사례를 아래에 보였다.
// 버그 있는 코드
enum Suit { CLUB, DIAMOND, HEART, SPADE }
enum Rank { ACE, DEUCE, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, TEN, JACK, QUEEN, KING }
…
Collection<Suit> suits = Arrays.asList(Suit.values());
Collection<Rank> ranks = Arrays.asList(Rank.values());

List<Card> deck = new ArrayList<Card>();
for ( Iterator<Suit> i = suits.iterator(); i.hasNext(); )
    for ( Iterator<Rank> j = rank.iterator(); j.hasNext(); )
        deck.add(new Card(i.next(), j.next()));
바깥쪽 순환문 안에서 카드 종류별로 한 번만 호출되야 하는데 안쪽 순화눈에서 호출되다 보니 너무 빨리 소진되어서 결국 NoSuchElementException이 발생하고 만다. for-each 문을 중첩해서 프로그램을 짜면 이 문제는 바로 사라진다.
// 컬렉션이나 배열에 대한 순환문을 중첩시킬 때 따라야 할 숙어 
for (Suit suit : suits)
    for(Rand rank : ranks)
        deck.add(new Card(suit, rank));
for-each문으로는 컬렉션과 배열뿐 아니라 Iterable 인터페이스를 구현하는 어떤 객체도 순회 할 수 있다. Iterable 인터페이스는 메서드가 하나뿐인 아주 간단한 인터페이스다. for-each 문과 함께 플랫폼에 추가되었으며, 아래처럼 생겼다.
public interface Iterable<E> {
    // 이 Iterable 안에 있는 원소들에 대한 반복자 반환
    Iterator<E> iterator();
}
Iterator 인터페이스는 구현하기 어렵지 않다. 원소들의 그룹을 나타내는 자료형을 작성할 때는, Collection은 구현하지 않더라도 Iterable은 구현하도록 하라. 그러면 클라이언트는 for-each문을 통해 해당 자료형을 순회할 수 있게 될 것이므로 너무 고마워 할 것이다.
그러나 불행히도 아래의 세 경우에 대해서는 for-each문을 적용할 수 없다. 1. 필터링 - 컬렉션을 순회하다가 특정한 원소를 삭제할 필요가 있다면, 반복자를 명시적으로 사용해야 한다. 반복자의 remove 메서드를 호출해야 하기 때문이다. 2. 변환 - 리스트나 배열을 순회하다가 그 원소 가운데 일부 또는 전부의 값을 변경해야 한다면, 원소의 값을 수정하기 위해서 리스트 반복자나 배열 첨자가 필요하다. 3. 병렬 순회 - 여러 컬렉션을 병렬적으로 순회해야 하고, 모든 반복자나 첨자 변수가 발맞춰 나아가도록 구현해야 한다면 반복자나 첨자 변수를 명시적으로 제어할 필요가 있을 것이다.
규칙 59 : 어떤 라이브러리가 있는지 파악하고, 적절히 활용하라
무작위 정수 하나를 생성하고 싶다고 해보자. 값의 범위는 0부터 명시한 수 사이다. 아주 흔히 마주치는 문제로, 많은 프로그래머가 다음과 같은 짤막한 메서드를 만들곤 한다.
static Random rnd = new Random();

static int random(int n) {
    return Math.abs(rnd.nextInt()) % n;
}
괜찮은 듯 보여도 문제를 세 가지나 내포하고 있다. 첫 번째, n이 그리 크지 않은 2의 제곱수라면 얼마 지나지 않아 같은 수열이 반복된다. 두 번째, n이 2의 제곱수가 아니라면 몇몇 숫자가 평균적으로 더 자주 반환된다. n 값이 크면 이 현상은 더 두드러진다.
@Test
public void name() {
    int n =2 * (Integer.MAX_VALUE / 3);
    int low = 0;

    for (int i=0; i<1000000; i++) {
        if (random(n) < n/2) {
            low++;
        }
    }
    System.out.println(low);
}

private int random(int n) {
    Random rnd = new Random();
    return Math.abs(rnd.nextInt()) % n;
}
random 메서드가 이상적으로 동작한다면 약 50만개가 출력돼야 하지만, 실제로 돌려보면 약 66만개에 가까운 값을 얻는다. 무작위로 생성된 수 중에서 2/3 가량이 중간값보다 낮은 쪽으로 쏠린 것이다.
random 메서드의 세 번째 결함으로, 지정한 범위 ‘바깥’의 수가 종종 튀어나올 수 있다. rnd.nextInt()가 반환한 값을 Math.abs를 이용해 음수가 아닌 정수로 매핑하기 때문이다. nextInt()가 Integer.MIN_VALUE를 반환하면 Math.abs도 Integer.MIN_VALUE를 반환하고, 나머지 연산자는 음수를 반환해버린다(n이 2의 제곱수가 아닐 때의 시나리오다). 이렇게 되면 여러분의 프로그램은 실패할 것이고, 문제를 해결하고 싶어도 현상을 재현하기가 쉽지 않을 것이다.
이 결함을 해결하려면 Rnadom.nextInt(int)가 이미 해결해놨으니 가져다 쓰면된다. 하지만 자바 7부터는 Random을 더 이상 사용하지 않는 게 좋다. ThreadLocalRandom으로 대체하면 대부분 잘 작동한다. Random보다 더 고품질의 무작위 수를 생성할 뿐 아니라 속도도 더 빠르다. 한편, 포크-조인 풀이나 병렬 스트림에서는 SplittableRandom을 사용해라.
다음 예제는 지정한 URL의 내용을 가져오는 명령줄 애플리케이션이다(리눅스의 curl 명령을 생각하면 된다).
public static void main(String[] args) throws IOException {
    try (InputStream in = new URL(args[0]).openStream()) {
        in.transferTo(System.out);
    }
}
예전에는 작성하기가 까다로운 기능이었지만, 자바 9에서 InputStream에 추가된 transferTo 메서드를 사용하면 쉽게 구현할 수 있다.
실제로 하려는 일과 큰 관련성도 없는 문제에 대한 해결 방법을 임의로 구현하늬라 시간을 낭비하지 않도록 하자(바퀴를 다시 발명하지 말자). 자바 프로그래머라면 java.lang, java.util, java.io와 그 하위 패키지들에는 익숙해져야 한다.
규칙 60 : 정확한 답이 필요하다면 float와 double은 피하라
float와 double은 이진 부동 소수점 연산을 수행한다. 하지만 정확한 결과를 제공하지는 않기 때문에 정확한 결과가 필요한 곳에는 사용하면 안 된다. float와 double은 특히 돈과 관계된 계산에는 적합하지 않다. 0.1을 비롯한 10의 음의 거듭제곱 수를(10^-1, 10^-2, 10^-3 ...) 정확하게 나타낼 수 없기 때문이다.
System.out.println(1.03 - .42); // 0.6100000000000001 
System.out.println(1.00 - 9 * .10); // 0.09999999999999998
화면에 출력하기 전에 반올림하면 되지 않을까 싶기도 하겠지만, 그 방법은 항상 통하지 않는다. 예를 들어 주머니에 1달러가 있는데 10센트, 20센트, 30센트 등의 가격이 붙은 사탕들이 있다고 하자. 가장 싼 사탕부터 시작해서 차례로 더 비싼 사탕을 구입해 나갈 때, 얼마나 많은 사탕을 살 수 있는가?
double funds = 1.00;
int itemsBought = 0;
for ( double price = .10; funds >= price; price += .10){
    funds -= price;
    itemsBought++;
}
System.out.println(itemsBought+ "item bought.”); // 3item bought.
System.out.println("Change: $"+ funds); // Change: $0.3999999999999999
금전 계산을 하는 이 프로그램을 돌려 보면 살 수 있는 사탕은 세 개이고 잔돈은 $0.3999999999999999라고 출력될 것이다.
돈 계산을 할 때는 BigDecimal,int 또는 long을 사용한다는 원칙을 지켜야 한다.
// double 대신 BigDecimal로 바꾼 코드
final BigDecimal TEN_CENTS = new BigDecimal(".10");
int itemsBought = 0;
BigDecimal funds = new BigDecimal("1.00");
for ( BigDecimal price = TEN_CENTS; funds.compareTo(price)>=0; price = price.add(TEN_CENTS)){
    funds = funds.subtract(price);
    itemsBought++;
}
System.out.println(itemsBought+ "item bought.”); // 4item bought.
System.out.println("Money left over: $"+ funds); // Money left over: $0.00
이렇게 고치면 정확한 답이 나오지만 BigDecimal을 쓰는 방법에는 두 가지 문제가 있다. 첫 째, 기본 산술연산 자료형보다 사용이 불편하며 느리다. BigDecimal의 대안은 int나 long을 사용하는 것이다. 둘 중 어떤 자료형을 쓸 것이냐는 수의 크기, 그리고 소수점 이하 몇 자리까지를 표현할 것이냐에 따라 결정된다. 이 예제에 딱 맞는 접근법은 모든 계산을 달러 대신 센트 단위로 하는 것이다.
int itemsBought = 0;
int funds = 100;
for(int price = 10; funds>= price; price+= 10){
    funds -= price;
    itemsBought++;
}
System.out.println(itemsBought+ "item bought.”); // 4item bought.
System.out.println("Money left over: $"+ funds + " cents”); // Money left over: $0cents
결론 : 기본 자료형보다 사용하기는 불편하고 성능이 떨어져도, 소수점 이하 처리를 시스템이 알아서 해줬으면 좋겠을 때는 BigDecimal을 사용해라. BigDecimal을 쓰면 올림 연산을 어떻게 수행해야 하는지를 여덟 가지 올림 모드 가운데 하나로 지정할 수 있다(법적으로 올림 연산이 필요한 상업적인 계산을 해야 할 때 편리하다). 그러나 성능이 중요하고 소수점 아래 수를 직접 관리해도 상관없으며 계산할 수가 심하게 크지 않을 때는 int나 long을 쓰라(관계된 수치들이 십진수 9개 이하로 표현이 가능할 때는 int, 18개 이하는 long, 그 이상일 때는 BigDecial).
규칙 61 : 객체화된 기본 자료형 대신 기본 자료형을 이용하라
자바의 자료형 시스템은 두 부분으로 나뉜다. 하나는 기본 자료형(int, double, boolean 등)이고 다른 하나는 String과 List 등의 참조 자료형(reference type)이다. 모든 자료형에는 대응되는 참조 자료형이 있는데, 이를 객체화된 기본 자료형이라 부른다. int, double, boolean의 객체화된 기본 자료형은 각각 Integer, Double, Boolean이다.
기본 자료형과 객체화된 기본 자료형 사이에는 세 가지 큰 차이점이 있다. 1. 기본 자료형은 값만 가지지만 객체화된 기본 자료형은 값 외에도 identity를 가진다. 따라서 객체화된 기본 자료형 객체가 두 개 있을 때 그 값은 같더라도 identity는 다를 수 있다. 2. 기본 자료형에 저장되는 값은 전부 기능적으로 완전한 값이지만, 객체화된 자료형에 저장되는 값에는 그 이외에도 아무 기능도 없는 값, 즉 null이 하나 있다는 것이다. 3. 기본 자료형은 시간적이나 공간 요구량 측면에서 일반적으로 객체 표현형보다 효율적이다.
아래의 비교자 예제를 보자.
// 잘못된 반복자 
Comparator<Integer> naturalOrder = new Comparator<Integer>(){
    public int compare(Integer first, Integer second){
        return first < second ? -1 : (first == second ? 0 : 1); 
    }
};
표현식 fisrt < second는 first와 second가 참조하는 Integer 객체를 기본 자료형 값으로 자동 변환한다. 따라서 first의 int 값이 second의 int 값 보다 작다면 음수가 제대로 반환될 것이다. 하지만 first == second 표현식은 두 객체의 identity를 비교한다. 그래서 객체화된 기본 자료형에 == 연산자를 사용하는 것은 거의 항상 오류라고 봐야 한다.
아래의 예제를 보자.
// NullPointerException 에러 발생
public class Unbelievable {
    static Integer i;
    public static void main(String[] args) {
        if(i == 42)
            System.out.println("unb");
    }
}
모든 객체 참조 필드가 그렇듯, 초기값은 null이다. 위의 프로그램이 (i == 42)를 계산할 때 비교되는 것은 Integer 객체와 int 값이다. 거의 모든 경우에, 기본 자료형과 객체화된 기본 자료형을 한 연산 안에 엮어 놓으면 객체화된 기본 자료형은 자동으로 기본 자료형으로 반환된다. 따라서 null인 객체 참조를 기본 자료형을 변환하려 시도하면 NullPointerException이 발생한다.
무시무시할 정도로 느린 프로그램
public static void main(String[] args) {
    Long sum = 0L;
    for( long i = 0; i < Integer.MAX_VALUE; i++){
        sum += i; 
    }
    System.out.println(sum);
}
지역 변수 sum을 long이 아니라 Long으로 선언했기 때문에 오류나 경고 없이 컴파일되는 프로그램이지만 변수가 계속해서 객체화와 비객체화를 반복하기 때문에 성능이 느려진다.
객체화된 기본 자료형은 컬렉션의 요소, 키, 값으로 사용할 때다. 컬렉션에는 기본 자료형을 넣을 수 없으므로 객체화된 자료형을 써야 한다. 리플렉션을 통해 메서드를 호출할 때도 객체화된 기본 자료형을 사용해야 한다.
규칙 62 : 다른 자료형이 적절하다면 문자열 사용은 피하라
문자열은 텍스트 표현과 처리에 걸맞도록 설계되었다. 이번 절에서는 문자열로 해서는 안 되는 일들을 짚어본다. 1. 문자열은 값 자료형(value type)을 대신하기에는 부족하다. 데이터가 파일이나 네트워크나 키보드를 통해서 들어올 때는 보통 문자열 형태다. 그러니 그대로 두려는 경향이 있다. 하지만 데이터가 텍스트 형태일 때나 그렇게 하는 것이 좋다. 숫자라면 int, float, BigInteger 같은 수 자료형으로 변환해야 한다. 적당한 자료형이 없다면 새로 만들어야 한다. 2. 문자열은 enum 자료형을 대신하기에는 부족하다. 3. 문자열은 혼합 자료형을 대신하기엔 부족하다. String compundKey = className + “#” + i.next();이런 접근법에는 많은 문제가 있다. 필드 구분자로 사용한 문자가 필드 안에 들어가버리면 문제가 생긴다. 게다가 각 필드를 사용하려고 하면 문자열을 파싱해야 하는데, 느릴 뿐더러 멍청하고 오류 발생 가능성도 높은 과정이다. 4. 문자열은 권한(capability)을 표현하기엔 부족하다. 때로 문자열을 사용해서 접근 권한을 표현하는 경우가 있다. 스레드 지역 변수 기능을 설계하는 경우를 예로 들어 살펴보자. 스레드마다 다른 변수를 제공하는 기능이다.
// 문자열을 권한으로 사용하는 잘못된 예제
public class ThreadLocal {
    private ThreadLocal() { } // 객체를 만들 수 없다.

    // 주어진 이름이 가리키는 스레드 지역 변수의 값 설정
    public static void set(String key, Object value);

    // 주어진 이름이 가리키는 스레드 지역 변수의 값 반환
    public static Object get(String key);
}
이 접근법의 문제는, 문자열이 스레드 지역 변수의 전역적인 이름공간이라는 것이다. 위 접근법이 통하려면 클라이언트가 제공하는 문자열 키의 유일성이 보장되어야 한다.
위 API의 문제는 문자열 대신 위조 불가능 키로 바꾸면 해결된다(이런 키를 때로 ‘권한’이라 부른다).
public class ThreadLocal {
    private ThreadLocal() { } // 객체를 만들 수 없다.

    public static class Key { // 권한
        Key() { }
    }

    // 유일성이 보장되는, 위조 불가능 키를 생성
    public static Key getKey {
        return new Key();
    }

    public static void set(Key key, Object value);
    public static Object get(Key key); 
}
이 방법으로 문자열 키 유일성 보장과 보안 문제도 해결하지만 아직도 개선의 여지는 있다. 정적 메서드들은 사실 더 이상 필요없다. 키의 인스턴스 메서드로 만들 수 있다. 그렇게 하고 나면 키는 더 이상 스레드 지역 변수의 키가 아니라 그것 자체가 스레드 지역 변수가 된다.
public final class ThreadLocal<T>{
    public ThreadLocal();
    public void set(T value);
    public T get();
}
개략적으로 이것이 바로 java.lang.ThreadLocal이 제공하는 API다.
규칙 63 : 문자열 연결 시 성능에 주의하라
문자열 연결이 많으면 성능에 문제가 생긴다. n개의 문자열에 연결 연산자를 반복 적용해서 연결하는 데 드는 시간은 n^2에 비례한다. 문자열이 변경 불가능 하기 때문이다. 문자열 두 개를 연결할 때, 그 두 문자열의 내용은 전부 복사된다.
// 문자열을 연결하는 잘못된 방법 - 성능이 엉망이다
public String statement() {
    String result = “”;
    for (int i =0 ; i < numItems(); i++){
        result += lineForItem(i); 
    }
}
만족스런 성능을 얻으려면 String 대신 StringBuilder를 써서 저장해야 한다. StringBuilder 클래스는 릴리스 1.5에 추가된 것으로, StringBuffer에서 동기화 기능을 뺀 것이다. StringBuffer는 이제 지원되지 않는다.
public String statement() {
    StringBuilder b = new StringBuilder(numItems() * LINE_WIDTH);
    for (int i =0; i < numItems(); i++)
        b.append(lineForItem(i));

    return b.toString();
}
규칙 64 : 객체를 참조할 때는 그 인터페이스를 사용하라
적당한 인터페이스 자료형이 있다면 인자나 반환값, 변수, 그리고 필드의 자료형은 클래스 대신 인터페이스로 선언하자. 객체의 실제 클래스를 사용해야 할 상황은 오직 생성자로 생성할 때 뿐이다.
// 좋은 예
Set<Son> sonSet = new LinkedHashSet<>();

// 나쁜 예
LinkdHashSet<Son> sonSet = new LinkedHashSet<>();
인터페이스를 자료형으로 쓰는 습관을 들이면 프로그램은 더욱 유연해진다. 단 한 가지 주의할 것이 있다. 원래의 클래스가 인터페이스의 일반 규약 이외의 특별한 기능을 제공하며, 주변 코드가 이 기능에 기대어 동작한다면 새로운 클래스도 반드시 같은 기능을 제공해야 한다. 예컨대 첫 번째 선언의 주변 코드가 LinkedHashSet이 따르는 순서 정책을 가정하고 동작하는 상황에서 이를 HashSet으로 바꾸면 문제가 될 수 있다. HashSet은 반복자의 순회 순서를 보장하지 않기 때문이다.
적합한 인터페이스가 없다면 당연히 클래스로 참조해야 한다. 1. String과 Integer 같은 값 클래스 (값 클래스를 여러 가지로 구현될 수 있다고 생각하고 설계하는 일은 거의 없다) 2. 클래스 기반으로 작성된 프레임워크가 제공하는 객체들 ex) OutputStream 등 java.io 패키지의 여러 클래스 3. 인터페이스에는 없는 특별한 메서드를 제공하는 클래스들 PriorityQueue 클래스는 Queue 인터페이스에 없는 comparator 메서드를 제공한다.
하지만 적합한 인터페이스가 없다면 클래스의 계층구조 중 필요한 기능을 만족하는 가장 덜 구체적인(상위의) 클래스를 타입으로 사용하자.
규칙 65 : 리플렉션 대신 인터페이스를 이용하라
java.lang.reflect의 핵심 리플렉션 기능을 이용하면 메모리에 적재(load)된 클래스의 정보를 가져오는 프로그램을 작성할 수 있다. Class 객체가 주어지면, 해당 객체가 나타내는 클래스의 생성자, 메서드, 필드 등을 나타내는 Constructor, Method Field 객체들을 가져올 수 있는데, 이 객체들을 사용하면 클래스의 멤버 이름이나 필드 자료형, 메서드 시그니처 등의 정보들을 얻어낼 수 있다.
게다가 Constructor, Method Field 객체를 이용하면, 거기 연결되어 있는 실제 생성자, 메서드, 필드들을 반영적으로(reflectively) 조작할 수 있다. 객체를 생성할 수도 있고, 메서드를 호출할 수도 있으며, 필드에 접근할 수도 있다. Constructor, Method Field 객체의 메서드를 통하면 된다. 예를 들어, Method.invoke를 이용하면 어떤 클래스의 어떤 객체에 정의된 어떤 메서드라도 호출할 수있다(물론 일반적인 보안 제약사항은 준수해야 한다). 또한 리플렉션을 이용하면, 소스 코드가 컴파일 될 당시에는 존재하지도 않았던 클래스를 이용할 수 있다.
하지만 이런 능력에는 대가가 따른다. 1. 컴파일 시점에 자료형을 검사함으로써 얻을 수 있는 이점들을 포기해야 한다(예외 검사 포함). 2. 리플렉션 기능을 이용하는 코드는 가독성이 떨어진다. 3. 성능이 낮다. 리플렉션을 통한 메서드 호출 성능은 일반적인 메서드 호출에 비해 훨씬 낮다. 얼마나 낮은지 정확히 말하기는 어렵다. 고려해야 할 요건들이 다양하기 때문. 필자의 컴퓨터에서 속도 차는 2배에서 50배 가량이었다.
명심할 것은, 일반적인 프로그램은 프로그램 실행 중에 리플렉션을 통해 객체를 이용하려 하면 안된다는 것이다. 리플렉션이 필요한 복잡한 프로그램이 몇 가지 있긴 하다. 클래스 브라우저, 객체 검사도구, 코드 분석도구 등이 그 예다. 또한 리플렉션은 스텁 컴파일러가 없는 원격 프로시저 호출(remote procedure call, RPC) 시스템을 구현하는 데 적당하다.
리플렉션을 아주 제한적으로만 사용하면 오버헤드는 피하면서도 리플렉션의 다양한 장점을 누릴 수 있다. 컴파일 시점에는 존재하지 않는 클래스를 이용해야 하는 프로그램 가운데 상당수는, 해당 클래스 객체를 참조하는 데 사용할 수 있는 인터페이스나 상위 클래스는 컴파일 시점에 이미 갖추고 있는 경우가 많다. 그럴 때는, 객체 생성은 리플렉션으로 하고 객체 참조는 인터페이스나 상위 클래스를 통하면 된다. 호출해야 하는 생성자가 아무런 인자도 받지 않을 때는 java.lang.reflect를 이용할 필요조차 없다. Class.newInstance 메서드를 호출하는 것으로 충분하다. 예를 들어 아래의 프로그램은 명령중에 주어진 첫 번째 인자와 같은 이름의 클래스를 이용해 Set<String> 객체를 만든다. 나머지 인자들은 전부 해당 집합에 집어넣고 출력한다.
public class Reflection {
    public static void main(String[] args) {
        Class<?> cl = null;

        try{
            cl = Class.forName(args[0]);
        }catch (ClassNotFoundException e){
            System.err.println("class not found");
            System.exit(1);
        }

        //해당 클래스의 객체 생성
        Set<String> s = null;
        try {
            s = (Set<String>)cl.newInstance();
        } catch (InstantiationException e) {
            System.err.println("class not instantiable");
            System.exit(1);
        } catch (IllegalAccessException e) {
            System.err.println("class not accessible");
            System.exit(1);
        }

        // 집합 이용
        s.addAll(Arrays.asList(args).subList(1,args.length));
        System.out.println(s);
    }
}
첫 번째 인자가 무엇인지에 관계없이, 이 프로그램은 나머지 인자들에서 중복을 제거한 다음에 출력한다. 하지만 출력 순서는 첫 번째 인자로 어떤 클래스를 지정했느냐에 좌우된다. java.util.HashSet을 지정했다면 무작위 순서로 출력될 것이다. java.util.TreeSet을 지정했으면 알파벳 순서대로 출력될 것이다.
이 프로그램은 하나 이상의 객체를 공격적으로 조작하여 해당 구현이 Set의 일반 규약을 준수하는지 검증하는 일반적 집합 검사 도구로 쉽게 변경될 수 있다. 마찬가지로, 일반적 집합 성능 분석 도구로도 쉽게 바꿀 수 있다. 사실 이 기법은 완벽한 ‘서비스 제공자 프레임워크(규칙1)’를 구현할 수 있을 정도로 강력하다. 대부분의 경우, 리플렉션 기능은 이 정도만 사용해도 충분할 것이다.
리플렉션과 특별히 관련은 없으나, 이 예제가 System.exit를 사용하고 있다는 것은 주의할 필요가 있다. 이 메서드를 호출하는 것은 대체로 바람직하지 않다. 이 메서드는 전체 VM을 종료시켜버린다.
규칙 66 : 네이티브 메서드는 신중하게 사용하라
자바의 네이티브 인터페이스는 C나 C++ 등의 네이티브 프로그래밍 언어로 작성된 네이티브 메서드를 호출하는 데 이용되는 기능이다. 전통적으로 네이티브 메서드는 세 가지 용도로 쓰였다. 1. 레지스트리나 파일 락 같은, 특정 플랫폼에 고유한 기능을 이용할 수 있다. 2. 이미 구현되어 있는 라이브러리를 이용할 수 있으며, 그 라이브러리를 통해 기존 데이터를 활용할 수 있다. 3. 성능이 중요한 부분의 처리를 네이티브 언어에 맡길 수 있다.
그러나 네이티브 메서드를 통해 성능을 개선하는 것은 추천하고 싶지 않다. 1.3 이전의 초기 릴리스라면 필요할 때가 자주 있었을 것이나, 현재 JVM은 훨씬 빠르다. 일례로, 릴리스 1.1에 java.math가 추가될 당시 BigInteger는 C로 작성된 다정밀 연산 라이브러리를 이용하고 있었다. 그러나 릴리즈 1.3부터 BigInteger는 완전히 자바로만 구현되었고 신중하게 최적화되었다.
네이티브 메서드에는 심각한 문제가 있다. 네이티브 언어는 안전하지 않으므로 네이티브 메서드를 이용하는 프로그램은 메모리 훼손 문제로부터 자유로울 수 없다. 게다가 네이티브 언어는 플랫폼 종속적이므로 이식성이 낮다. 또한 디버깅하기도 훨씬 어렵다. 굳이 써야 겠다면 성능 개선 용도로만 써라. 저수준 자원이나 기존 라이브러리를 이용하기 위해 네이티브 메서드를 사용해야 한다면, 네이티브 코드는 가능하면 줄이고 광범위한 테스트를 거치기 바란다. 네이티브 코드에 있는 아주 작은 버그라도 시스템 전체를 훼손 시킬 수 있다.
규칙 67 : 신중하게 최적화하라
최적화는 좋을 때보다 나쁠 때가 더 많으며, 섣불리 시도하면 더더욱 나쁘다. 성능 때문에 구조적인 원칙을 희생하지 마라. 빠른 프로그램이 아닌, 좋은 프로그램을 만들려 노력하라.
설계를 할 때는 성능을 제약할 가능성이 있는 결정들을 피하라. 그리고 API를 설계할 때 내리는 결정들이 성능에 어떤 영향을 끼칠지 생각하라. public 자료형을 변경 가능하게 만들면 쓸데없이 방어적 복사를 많이 해야 할 수 있다. 마찬가지로, 구성(composition) 기법이 적절한 public 클래스에 계승 기법을 적용하면 해당 클래스는 영원히 상위 클래스에 묶이는데, 그 결과로 하위 클래스의 성능에 인위적인 제약이 가해질 수도 있다. 또한 인터페이스가 적당할 API에 구현 자료형을 사용해 버리면 해당 API가 특정한 구현에 종속되므로 나중에 더 빠른 구현이 나와도 개선할 수 없게 된다.
프로그램을 신중히 설계한 결과로 명료하고 간결하며 구조가 잘 짜인 구현이 나왔다면, 바로 그때가 최적화를 고민할 시점일 것이다. 물론 그 프로그램의 성능에 만족하지 못한다는 가정하에서. 그리고 최적화를 시도할 때마다, 전후 성능을 측정하고 비교하라. 측정 결과를 보고 놀라게 될지도 모른다. 최적화 결과로 성능이 개선되지 않거나 더 나빠지는 일이 많기 때문이다. 그 주된 이유는, 프로그램이 어디에 시간을 쓰고 있는지 추측하기 어렵다는 것이다. 전통적인 정적 컴파일 언어들에 비해, 프로그래머가 작성한 코드와 CPU가 실행하는 코드 사이의 ‘의미론적 차이’가 훨씬 크기 때문에 최적화 결과로 성능이 얼마나 좋아질지 안정적으로 예측하기 어렵다.
규칙 68 : 일반적으로 통용되는 작명 관습을 따르라
패키지 이름은 마침표를 구분점으로 사용하는 계층적 이름이어야 한다. 패키지 이름을 구성하는 각각의 컴포넌트는 알파벳 소문자로 구성하고, 숫자는 거의 사용하지 않는다. 패키지명 컴포넌트는 짧아야 하며, 보통 여덟 문자 이하로 의미가 확실한 약어를 활용하면 좋다. 즉, utilities 대신 util 이라고 하면 좋다.
enum이나 애노테이션 자료형 이름을 비롯, 클래스나 인터페이스 이름은 하나 이상의 단어로 구성된다. 각 단어의 첫 글자는 대문자다. 그리고 약어 사용은 피해야 한다.
메서드와 필드 이름은 클래스나 인터페이스 이름과 동일한 철자 규칙을 따른다. 다만 첫 글자는 소문자로 한다.
상수 필드의 이름은 하나 이상의 대문자 단어로 구성되며, 단어 사이에는 밑줄 기호(_)를 둔다. VALUES나 NEGATIVE_INFINITY가 그 예다. 상수 필드는 그 값을 변경 할 수 없는(immutable) static final 필드다.
지역 변수 이름은 멤버 이름과 같은 철자 규칙을 따르는데, 약어가 허용된다는 것만 다르다.
자료형 인자의 이름은 보통 하나의 대문자다. 가장 널리 쓰이는 것은 다섯 가지로, 임의 자료형인 경우에 T, 컬렉션의 요소 자료형인 경우에는 E, 맵의 키와 값에 대해서는 각각 K,V 그리고 예외인 경우에는 X를 사용한다. 임의 자료형이 연속되는 경우에는 T, U, V처럼 하거나 T1, T2, T3처럼 나열한다.
특별히 주의해야 하는 메서드 이름도 있다. 객체의 자료형을 변환하는 메서드, 다른 자료형의 독립적 객체를 반환하는 메서드에는 보통 toType 형태의 이름을 붙인다. toString, toArray 같은 이름이 그 예다. 인자로 전달받은 객체와 다른 자료형의 뷰(view) 객체를 반환하는 메서드에는 asType 형태의 이름을 붙인다. asList 같은 이름이 그 예다. 호출 대상 객체와 동일한 기본 자료형 값을 반환하는 메서드에는 typeValue와 같은 형태의 이름을 붙인다. intValue가 그 예다. 정적 팩터리 메서드에는 valueOf, of, getInstance, newInstance, getType, newType 같은 이름을 붙인다.
 -->`,r:{minutes:4.05,words:1214},y:"a",t:"일반적인 프로그래밍 원칙들"}}],["/java/effective-java/09-exceptions.html",{loader:()=>r(()=>import("./09-exceptions.html-Cnb38gqQ.js"),__vite__mapDeps([170,1])),meta:{c:["Java"],g:["crashcourse","java","jdk","jdk8"],e:`

<hr>
<!-- https://yangbongsoo.gitbook.io/study/effective-java/exceptions -->
<!-- 

규칙69 : 예외는 예외적 상황에만 사용하라
// 예외를 끔찍하게 남용한 사례. 이러면 곤란하다.
try {
    int i = 0;
    while(true)
        range[i++].climb();
}catch(ArrayIndexOutOfBoundsException e){ }
range 배열의 원소를 순회하는데 무한 루프를 돌다가 배열 범위 밖에 있는 첫 번째 요소를 참조하는 순간에 발생하는 ArrayIndexOutOfBoundsException 예외를 감지하고 무시하는 과정을 통해 순회를 종료시킨다. 이 코드를 다음과 같이 표준적인 관용구대로 작성했다면 모든 자바 프로그래머가 곧바로 이해했을 것이다.
for (Mountain m : range) {
    m.climb();
}
그런데 예외를 써서 루프를 종료한 이유는 뭘까? 잘못된 추론을 근거로 성능을 높여보려 한 것이다. JVM은 배열에 접근할 때마다 경계를 넘지 않는지 검사하는데, 일반적인 반복문도 배열 경계에 도달하면 종료한다. 따라서 이 검사를 반복문에도 명시하면 같은 일이 중복되므로 하나를 생략한 것이다. 하지만 세 가지 면에서 잘못된 추론이다.
예외는 예외 상황에 쓸 용도로 설계되었으므로 JVM 구현자 입장에서는 명확한 검사만큼 빠르게 만들어야 할 동기가 약하다(최적화에 별로 신경 쓰지 않았을 가능성이 크다).
코드를 try-catch 블록 안에 넣으면 JVM이 적용할 수 있는 최적화가 제한된다.
배열을 순회하는 표준 관용구는 앞서 걱정한 중복 검사를 수행하지 않는다. JVM이 알아서 최적화해 없애준다.
실상은 예외를 사용한 쪽이 표준 관용구보다 훨씬 느리다. 예외를 사용한 반복문의 해악은 코드를 헷갈리게 하고 성능을 떨어뜨리는데서 끝나지 않는다. 심지어 제대로 동작하지 않을 수도 있다. 반복문 안에 버그가 숨어 있다면 흐름 제어에 쓰인 예외가 이 버그를 숨겨 디버깅을 훨씬 어렵게 할 것이다. 예를 들어 위의 코드 climb 메서드에서 내부적으로 다른 배열을 사용하다가 ArrayIndexOutOfBoundsException을 일으켰다고 해보자. 표준 관용구였다면 이 버그는 예외를 잡지 않고 (stack trace 정보를 남기고) 해당 스레드를 즉각 종료시킬 것이다. 반면 예외를 사용한 반복문은 버그 때문에 발생한 엉뚱한 예외를 정상적인 반복문 종료 상황으로 오해하고 넘어간다.
예외는 예외적인 상황에만 사용해야지, 평상시 제어 흐름에 이용해서는 안된다.
이 원칙은 API 설계에도 적용된다. 잘 설계된 API라면 클라이언트가 정상적인 제어 흐름에서 예외를 사용할 일이 없게 해야 한다. 특정 상태에서만 호출할 수 있는 '상태 의존적' 메서드를 제공하는 클래스는 '상태 검사' 메서드도 함께 제공해야 한다. 예를 들어 Iterator 인터페이스에는 상태 의존적 메서드 next가 있고, 상태 검사 메서드 hasNext가 있다. Iterator에 hasNext 메서드가 없었다면 클라이언트는 어쩔 수 없이 아래와 같은 코드를 만들어야 했을 것이다.
// 컬렉션을 이런 식으로 순회하지 말 것!
try {
    Iterator<Foo> i = collection.iterator();
    while(true) {
        Foo foo = i.next();
        ...
    }
} catch (NoSuchElementException e) { }
별도의 상태 검사 메서드 덕분에 다음과 같은 표준 for 관용구를 사용할 수 있다(for-each도 내부적으로 hasNext를 사용한다).
for (Iterator<Foo> i = collection.iterator(); i.hasNext();) {
    Foo foo = i.next();
    ...
}
상태 검사 메서드 대신 사용할 수 있는 선택지도 있다. 올바르지 않은 상태일 때 empty optional 혹은 null 같은 특수한 값을 반환하는 방법이다. 상태 검사 메서드, optional, 특정 값 중 하나를 선택하는 지침을 몇 개 소개하겠다.
외부 동기화 없이 여러 스레드가 동시에 접근할 수 있거나 외부 요인으로 상태가 변할 수 있다면 optional이나 특정 값을 사용한다. 상태 검사 메서드와 상태 의존적 메서드 호출 사이에 객체의 상태가 변할 수 있기 때문이다.
성능이 중요한 상황에서 상태 검사 메서드가 상태 의존적 메서드의 작업 일부를 중복 수행한다면 optional이나 특정 값을 선택한다.
다른 모든 경우엔 상태 검사 메서드 방식이 조금 더 낫다고 할 수 있다. 가독성이 살짝 더 좋고, 잘못 사용했을 때 발견하기가 쉽다. 상태 검사 메서드 호출을 깜빡 잊었다면 상태 의존적 메서드가 예외를 던져 버그를 확실히 드러낼 것이다. 반면 특정 값은 검사하지 않고 지나쳐도 발견하기가 어렵다(optional에는 해당하지 않는 문제다).
규칙70 : 복구 가능 상태에는 점검지정 예외를 사용하고, 프로그래밍 오류에는 실행시점 예외를 이용하라
자바는 세 가지 종류의 ‘throwable’을 제공한다. 점검지정 에외(checked exception), 실행시점 예외(runtime exception), 그리고 오류(error)다. 점검지정 예외를 사용할 것인지 아니면 무점검 예외를 사용할 것인지에 대한 가장 기본적인 규칙은, 호출자(caller) 측에서 복구할 것으로 여겨지는 상황에 대해서는 점검지정 예외를 이용해야 한다는 것이다. 점검지정 예외를 던지는 메서드를 호출한 클라이언트는 해당 예외를 catch 절 안에서 처리하든지, 아니면 계속 밖으로 던져지도록 놔두든지 해야 한다. 따라서 메서드에 선언된 점검지정 예외는 메서드를 호출하면 해당 예외와 관계된 상황이 발생할 수 있음을 API 사용자에게 알리는 구실을 한다.
무점검(unchecked) ‘throwable’에는 실행시점 에외와 오류 두 가지가 있으며, 동작 방식은 같다. 프로그램이 무점검 예외나 오류를 던진다는 것은 복구가 불가능한 상황에 직면했다는 뜻으로, 더 진행해 봐야 득보다 실이 더 크다는 뜻이다.
프로그래밍 오류를 표현할 때는 실행시점 예외를 사용하라 대부분의 실시점 예외는 선행조건 위반을 나타낸다. 즉, 클라이언트가 API 명세에 기술된 규약을 지키지 않았다는 뜻이다. 요약하자면 복구 가능한 상태에는 점검지정 예외를 사용하고, 프로그래밍 오류를 나타내고 싶을 때는 실행시점 예외를 사용하라.
규칙71 : 불필요한 점검지정 예외 사용은 피하라
점검지정 예외는 프로그래머로 하여금 예외적인 상황을 처리하도록 강제함으로써 안정성을 높인다. 하지만 너무 남발하면 사용하기 불편한 API가 될 수 있다는 뜻이기도 하다.
API를 제대로 이용해도 예외 상황이 벌어지는 것을 막을 수 없을 때, 그리고 API 사용자가 예외 상황에 대한 조치를 취할 수 있을 때는, 그 정도의 부담은 참을 수 있을 것이다. 하지만 이 조건 가운데 어디에도 해당되지 않을 때는 무점검 예외를 이용하는 것이 좋다.
} catch (TheCheckedException e) {
    throw new AssertionError(); // 이런 에러가 생길 리 없어요 ! 
}

이렇게 하는 것이 최선인가? 아래 코드는 어떤가? 

} catch (TheCheckedException e) {
    e.printStrackTrace(); // 그래요. 졌습니다. 
    System.exit(1);
}
API 사용자가 이보다 좋은 코드를 만들 수 없다면, 무점검 예외가 적당하다. 이 테스트를 통과하지 못하는 예외의 사례로는 CloneNotSupportedException이 있다. 이 예외는 Cloneable 인터페이스를 구현하지 않은 객체에 Object.clone 메서드를 호출하면 발생하는 예외다. 실제로는, 이 예외를 처리하는 catch 블록이 실행되었다는 것은, 확증이 실패했다는 것이나 마찬가지다. 그런 특성에 어울리지 않게 점검지정 예외로 선언되어 있다는 것이 문제인데, 프로그래머 입장에서는 반갑지 않은 일이다. 프로그램만 복잡해지기 때문이다.
메서드가 던지는 점검지정 예외가 하나뿐일 때 프로그래머가 느끼게 되는 부담은 큰 편이다. 그 하나의 catch 블록 때문에 try 블록 안에서 메서드를 호출해야 하는 것이다. 이런 상황에 처하면, 점검지정 예외를 없앨 방법이 없을지 고민해보는 것이 좋다. 점검지정 예외를 무점검 예외로 바꾸는 한 가지 방법은, 예외를 던지는 메서드를 둘로 나눠서 첫 번째 메서드가 boolean 값을 반환하도록 만드는 것이다.
// 예외를 점검하도록 지정된 메서드 호출 
try {
    obj.action(args);
} catch(TheCheckedException e){
    // 예외적 상황 처리
    …
}
앞서 설명한 대로 메서드를 리팩토링하면 이 코드는 아래와 같이 바뀐다.
// 상태 검사 메서드를 거쳐서 무점검 예외 메서드 호출
if (obj.actionPermitted(args)) {
    obj.action(args);
} else {
    // 예외적 상황 처리
    ...
}
메서드 호출 순서가 이전 방식에 비해 더 깔끔하다고 말하기는 어려우나, 더 유연한 API가 되었음은 사실이다. action 호출이 항상 성공하리라고 확신하거나, 설사 실패해서 스레드가 죽어도 상관없다면 위의 코드는 obj.action(args) 한 줄로 줄일 수 있다. 하지만 그 결과로 만들어지는 API 규칙 57에서 설명한 상태 검사 메서드와 본질적으로 같기 때문에 동일한 문제를 갖는다. 외부적인 동기화 수단 없이 병렬적으로 이용될 가능성이 있는 객체거나, 외부에서 그 상태를 바꿀 가능성이 있는 객체라면 방금 설명한 리팩토링 기법은 적용할 수 없다. actionPermitted를 호출하고 action을 미처 호출하기 전에 객체의 상태가 바뀔 수도 있기 때문이다.
규칙72 : 표준 예외를 사용하라
가장 널리 재사용 되는 예외는 IllegalArgumentException이다. 잘못된 값을 인자로 전달했을 때 일반적으로 발생하는 예외다. 널리 쓰이는 또 다른 예외로는 IllegalStateException이 있다. 현재 객체 상태로는 호출 할 수 없는 메서드를 호출했을 때 일반적으로 발생하는 예외다. 예를 들어 아직 적절히 초기화되지 않은 객체를 사용하려고 시도하면 이 예외가 발생해야 할 것이다.
모든 잘못된 메서드 호출은 결국 잘못된 인자나 잘못된 상태에 관계된 것이라 이해할 수 있다. 하지만 특정 부류의 잘못된 인자나 상태에 표준적으로 이용되는 예외들도 있다. null 인자를 받으면 안되는 메서드에 null을 전달한 경우, 관습적으로는 IllegalArgumentException 대신 NullPointerException이 발생해야 한다. 이와 비슷하게, 어떤 sequence의 첨자를 나타내는 인자에 참조 가능 범위를 벗어난 값이 전달되었을 때는 IndexOutOfBoundsException이 발생해야 한다.
일반적 용도의 예외 가운데 알아둘 만한 것으로는 ConcurrentModificationException도 있다. 하나의 스레드만 사용하도록 설계된 객체나, 외부적인 동기화 수단과 함께 이용되어야 하는 객체를 여러 스레드가 동시에 변경하려 하는 경우에 발생해야 하는 예외다. 또 UnsupportedOperationException도 알아두면 좋다. 어떤 객체가 호출된 메서드를 지원하지 않을 때 발생하는 예외다. 다른 예외들에 비해 사용 빈도가 아주 낮은데, 대부분의 객체는 자기가 구현하는 메서드를 지원하는 것이 보통이기 때문이다. 이 예외는 인터페이스에 정의된 선택적 메서드 가운데 하나 이상을 구현하지 않을 경우에 사용한다.
재사용 할 수 있는 예외라 생각된다면, 사용하도록 하라. 하지만 예외를 발생시키는 조건이 해당 예외의 문서에 기술된 것과 일치해야 한다. 마지막으로 어떤 예외를 재사용하면 좋을 지 결정하는 것은 엄밀한 과학적 절차를 따르지 않는다. 위의 표에 나열한 용례조차도 상호 배제적이지 않다.
규칙73 : 추상화 수준에 맞는 예외를 던져라
상위 계층에서는 하위 계층에서 발생하는 예외를 반드시 받아서 상위 계층 추상화 수준에 맞는 예외로 바꿔서 던져야 한다. 이 숙어를 ‘예외 변환’이라 부른다(exception translation 토비에서는 예외 전환).
// 예외 변환
try {
    // 낮은 수준의 추상화 계층 이용
    ...
} catch (LowerLevelException e) {
    throw new HigherLevelException(…);
}
토비의 스프링 exception translation 예제
public void add() throws DuplicateUserIdException {
    try {
        // JDBC를 이용해 user 정보를 DB에 추가하는 코드 또는
        // 그런 기능이 있는 다른 SQLException을 던지는 메서르르 호출하는 코드 
    }catch (SQLException e){
        if(e.getErrorCode() == MysqlErrorNumbers.ER_DUP_ENTRY)
            throw new DuplicateUserIdException(e); 
    }
}
위의 코드를 보면 예외 연결(exception chaining)도 포함되어 있다. 하위 계층에서 발생한 예제 정보가 상위 계층 예외를 발생시킨 문제를 디버깅하는 데 유용할 때 사용한다.
// 예외 연결 
try {
    // 낮은 수준의 추상화 계층 이용
    ...
} catch (LowerLevelException cause) {
    throw new HigherLevelException(cause);
}
상위 계층 예외 HigherLevelException의 생성자는 문제의 ‘원인’을 예외 연결을 지원하는 상위 클래스 생성자에 넘긴다. 해당 인자는 결국 Throwable의 예외 연결 지원 생성자에 전달된다.
// 예외 연결 지원 생성자를 갖춘 예외
class HigherLevelException extends Exception {
    HigherLevelException (Throwable cause){
        super(cause);
    }
}
대부분의 표준 예외들은 예외 연결 지원 생성자를 구비하고 있다.
예외 처리의 제일 좋은 방법은 하위 계층에서 예외가 생기지 않도록 하는 것이다. 하위 계층 메서드에서 예외가 발생하는 것을 막을 수 없다면 그 다음으로 좋은 방법은 하위 계층에서 생기는 문제를 상위 계층 메서드 호출자로부터 격리시키는 것이다. 하위 계층에서 발생하는 예외를 어떤 식으로든 처리해 버리는 것이다. 그래야 하는 상황이라면 java.util.logging 같은 기능을 활용해서 로그를 남기면 좋을 것이다. 클라이언트나 최종 사용자에게는 문제를 감추지만, 관리자는 나중에 분석할 수 있도록 하는 것이다.
규칙74 : 메서드에서 던져지는 모든 예외에 대해 문서를 남겨라
점검지정 예외는 독립적으로 선언하고, 해당 예외가 발생하는 상황은 Javadoc @throws 태그를 사용해서 정확하게 밝혀라. 메서드가 던질 가능성이 있는 모든 예외를 문서로 남겨라. 점검지정 예외뿐만 아니라, 무점검 예외에도 문서를 만들라(무점검 예외는 보통 프로그래밍 오류를 나타낸다). 점검지정 예외는 메서드의 throws 절에 나열하고, 무점검 예외는 throws 절에는 적지마라.
규칙75 : 어떤 오류인지를 드러내는 정보를 상세한 메세지에 담으라
쉽게 재현할 수 없는 오류라면, stack trace 이상의 정보를 얻기 어렵거나 불가능하다. 그래서 예외의 상세 메세지에는 원인 분석에 이용될 오류 정보가 포착되어 있어야 한다. 오류 정보를 포착해 내기 위해서는, 오류의 상세 메세지에 “예외에 관계된” 모든 인자와 필드의 값을 포함시켜야 한다.
오류를 적절히 포착하는 정보를 상세 메세지에 담는 한 가지 방법은, 상세한 정보를 요구하는 생성자를 만드는 것이다.
public IndexOutOfBoundsException(int lowerBound, int upperBound, int index) {

    // 오류를 포착하는 상세 메세지 생성
    supper(lowerBound, upperBound, index);

    //프로그램에서 이용할 수 있도록 오류 정보 보관
    this.lowerBound = lowerBound;
    this.upperBound = upperBound;
    this.index = index;
}
그리고 예외 객체에 오류 포착 정보를 제공하는 접근자 메서드를 두어도 좋다.
규칙76 : 실패 원자성 달성을 위해 노력하라
일반적으로 이야기해서 호출이 정상적으로 처리되지 못한 객체의 상태는, 메서드 호출 전 상태와 동일해야 한다. 이 속성을 만족하는 메서드는 실패 원자성을 갖추었다고 한다.
실패 원자성을 달성하는 방법은 여러 가지다. 가장 간단한 방법은 변경 불가능 객체로 설계하는 것이다. 변경 불가능한 객체의 경우, 실패 원자성은 덤이다. 변경 가능한 객체의 경우에는 실제 연산을 수행하기 전에 인자 유효성(validity)을 검사하는 것이 가장 보편적인 방법이다. 객체를 변경하는 도중에 예외가 발생하는 것을 막아준다.
public Object pop() {
    if(size == 0)
        throw new EmptyStackException();
    Object result = elements[--size];
    elements[size] = null;
    return result;
}
위 코드를 보면, 빈 스택에서 뭔가를 뽑아내려 하면, 굳이 첫 두줄이 없어도 예외가 나긴 한다. 하지만 첫 두 줄이 없으면 size 필드의 일관성이 깨져서 음수로 바뀌게 된다. 그러니 이 메서드를 다시 호출하면 계속 문제가 생길 것이다. 게다가, 첫 두 줄이 없을 때 발생하는 예외는 해당 클래스에는 어울리지 않는다.
이와 밀접한 관련이 있는 또 다른 접근법 하나는, 실패할 가능성이 있는 코드를 전부 객체 상태를 바꾸는 코드 앞에 배치하는 것이다. 예를 들어 TreeMap에 추가할 원소는 해당 TreeMap의 순서대로 비교가 가능한 자료형이어야 한다. 엉뚱한 자료형의 원소를 넣으려고 하면, 트리를 실제로 변경하기 전에 트리 안에서 해당 원소를 찾다가 ClassCastException이 발생할 것이다.
사용 빈도가 훨씬 낮은 세 번째 접근법은 연산 수행 도중에 발생하는 오류를 가로채는 복구 코드를 작성하는 것이다. 이 복구 코드는 연산이 시작되기 이전 상태로 객체를 되돌린다(roll back)
마지막 접근법은, 객체의 임시 복사본상에서 필요한 연산을 수행하고, 연산이 끝난 다음에 임시 복사본의 내용으로 객체 상태를 바꾸는 것이다. 예를 들어 Collections.sort는 원소들을 참조하는 비용을 줄이기 위해, 인자로 주어진 리스트를 정렬하기 전에 배열에 복사한다. 성능 문제 때문에 내린 조치인데, 그 덕에 정렬이 실패해도 원래 리스트에는 아무런 손상이 가지 않는다.
실패 원자성은 일반적으로 권장되는 덕목이지만 언제나 달성할 수 있는 것은 아니다. 명심할 것은, 예외와는 달리 오류(error)는 복구가 불가능하며, 오류를 던지는 경우에는 실패 원자성을 보존하려 애쓸 필요가 없다는 점이다.
규칙77 : 예외를 무시하지 마라
// catch 블록을 비워 놓으면 예외는 무시된다 - 심히 의심스런 코드!
try {
    ...
}catch(SomeException e){

}
빈 catch 블록은 예외를 선언한 목적, 그러니까 예외적 상황을 반드시 처리하도록 강제한다는 목적에 배치된다.
예외를 무시해도 괜찮은 경우를 하나 예로 들자면, FileInputStream을 닫는 경우일 것이다. 파일 상태를 바꾸지 않았고 그래서 복구 작업을 할 필요도 없으며, 필요한 정보는 파일에서 모두 읽었으니 진행 중인 연산을 중단할 이유도 없다. 하지만 그렇더라도 로그는 남겨두는 것이 좋다. 그래야 예외가 자주 발생하는 것을 알았을 때 그 원인을 분석해 볼 수 있기 때문이다

-->`,r:{minutes:1.5,words:451},y:"a",t:"예외"}}],["/java/effective-java/10-concurrency.html",{loader:()=>r(()=>import("./10-concurrency.html-D9vCvBcb.js"),__vite__mapDeps([171,1])),meta:{c:["Java"],g:["crashcourse","java","jdk","jdk8"],e:`

<hr>
<!-- https://yangbongsoo.gitbook.io/study/effective-java/concurrency -->
<!-- 

규칙78 : 변경 가능 공유 데이터에 대한 접근은 동기화하라
많은 프로그래머는 동기화(synchronization)를 상호 배제적인 관점, 그러니까 다른 스레드가 변경 중인 객체의 상태를 관측할 수 없어야 한다는 관점으로만 바라본다.
이 관점에 따르면 객체는 일관된 상태를 갖도록 생성되며, 해당 객체를 접근하는 메서드는 그 객체에 락을 건다. 락을 건 메서드는 객체의 상태를 관측할 수 있으며, 선택적으로 객체 상태를 변경할 수도 있다. 하나의 일관된 상태에서 다른 일관된 상태로 전이시킬 수 있다는 것이다. 동기화 메커니즘을 적절히 사용하기만 하면, 모든 메서드가 항상 객체의 일관된 상태만 보도록 만들 수 있다.
맞는 말이나 딱 절반만 이야기 했을 뿐이다. 동기화 없이는 한 스레드가 만든 변화를 다른 스레드가 확인할 수 없다. 동기화는 스레드가 일관성이 깨진 객체를 관측할 수 없도록 할 뿐 아니라, 동기화 메서드나 동기화 블록에 진입한 스레드가 동일한 락의 보호 아래 이루어진 모든 변경의 영향을 관측할 수 있도록 보장한다.
자바 언어 명세에는 long이나 double이 아닌 모든 변수는 원자적으로 읽고 쓸 수 있다고 되어 있다. 다시 말해, long이나 double이 아닌 변수를 읽으면 나오는 값은 항상 어떤 스레드가 저장한 값이라는 것이다. 설사 열러 스레드가 그 변수를 동기화 없이 변경했다고 해도 말이다.
"성능을 높이기 위해 원자적 데이터를 읽거나 쓸 때 동기화를 피해야 한다"는 아주 위험한 이야기다. 언어 명세상으로는 필드에서 읽어낸 값은 임의의 값이 될 수 없다고 되어 있으나, 그렇다고 어떤 스레드가 기록한 값을 반드시 다른 스레드가 보게 되리라는 보장은 없다. 상호 배제성뿐 아니라 스레드 간의 안정적 통신을 위해서도 동기화는 반드시 필요하다. 자바 언어 명세의 일부인 메모리 모델 때문이다. 메모리 모델은 한 스레드가 만든 변화를 다른 스레드가 볼 수 있게 되는 시점과, 그 절차를 규정한다.
//잘못된 코드 - 이 프로그램은 얼마나 오랫동안 실행될까?
public class StopThread {
  private static boolean stopRequested;

  public static void main(String[] args) throws InterruptedException {

    Thread backgroundThread = new Thread(new Runnable(){

        public void run(){
          int i = 0;
          while(!stopRequested)
            i++;
        }
    });
    backgroundThread.start();

    TimeUnit.SECONDS.sleep(1);
    stopRequested = true;
  }
}
실행한지 1초가 지나면 main 스레드가 stopRequested의 값을 true로 바꾸므로, background thread가 실행하는 순환문도 그때 중지될 것 같지만 이 프로그램은 절대로 멈추지 않는다. 문제는 동기화 메커니즘을 적용하지 않은 탓에 main 스레드가 변경한 stopRequest의 새로운 값을 background thread가 언제쯤 보게 될지 알 수가 없다는 것이다.
while(!stopRequested)
  i++;

// 동기화가 적용되지 않은 경우, 가상 머신은 위의 코드를 아래와 같이 바꿀 수 있다.
if(!stopRequested)
  while(true)
    i++;
이런 최적화를 끌어올리기(hoisting)라고 하는데, HotSpot 서버 VM이 하는 일이 바로 이런 것이다. 그 덕에 생기는 문제가 바로 생존 오류다. 살아 있기는 하나 더 진행하지는 못하는 프로그램이 되는 것이다. 이 문제를 수정하는 한 가지 방법은 stopRequested 필드를 동기화하는 것이다.
// 적절히 동기화한 스레드 종료 예제
public class StopThread {
  private static boolean stopRequested;

  private static synchronized void requestStop(){
    stopRequested = true;
  }

  private static synchronized boolean stopRequested(){
    return stopRequested;
  }

  public static void main(String[] args) throws InterruptedException { 
    Thread backgroundThread = new Thread(new Runnable(){
          public void run(){
            int i = 0;
            while(!stopRequested())
              i++
          }
      });
      backgroundThread.start();

      TimeUnit.SECONDS.sleep(1);
      requestStop();
  }
}
쓰기 메서드와 읽기 메서드에 동기화 메커니즘이 적용되었음을 유의하자. 읽기 연산과 쓰기 연산에 전부 동기화를 적용하지 않으면 동기화는 아무런 효과도 없다. 그런데 StopThread의 동기화 메서드가 하는 일은 동기화가 없이도 원자적이다. 다시 말해 이들 메서드에 동기화를 적용한 것은 상호 배제성을 달성하기 위해서가 아니라, 순전히 스레드 간 통신 문제를 해결하기 위해서였다는 것이다.
비록 순환문의 각 단계마다 동기화를 실행하는 비용이 크진 않지만, 그 비용을 줄여서 좋은 성능을 내면서도 간결하기까지 한 대안이 있다. 위 코드에 사용된 boolean 필드 stopRequested를 volatile로 선언하는 것이다. 그러면 락은 없어도 된다. 비록 volatile이 상호 배제성을 실현하진 않지만, 어떤 스레드건 가장 최근에 기록된 값을 읽도록 보장한다.
// volatile 필드를 사용해 스레드를 종료시키는 예제
public class StopThread {
    private static volatile boolean stopRequested;

    public static void main(String[] args) throws InterruptedException{
        Thread backgroundThread = new Thread(new Runnable(){

            public void run(){
                int i = 0;
                while(!stopRequested)
                    i++;
            }
        });
        backgroundThread.start();

        TimeUnit.SECONDS.sleep(1);
        stopRequested = true;

    }
}
volatile을 사용할 때는 주의해야 한다. 아래의 메서드를 보자. 일련번호를 만들어 내는 메서드다.
// 잘못된 예제 - 동기화가 필요하다!
private static volatile int nextSerialNumber = 0;

public static int generateSerialNumber(){
  return nextSerialNumber++;
}
이 메서드의 원래 의도는, 호출 될 때마다 다른 값을 반환하는 것이었다. 이 메서드의 상태를 구성하는 것은 원자적으로 접근 가능한 필드 nextSerialNumber이며 이 필드가 가질 수 있는 값은 전부 유효하다. 따라서 불변식을 보호하기 위해 동기화 메커니즘을 사용할 필요가 없다. 그런데도 동기화 없이는 제대로 동작하지 않는다.
문제는 증가 연산자 ++가 원자적이지 않다는 데 있다. 이 연산자는 nextSerialNumber 필드에 두 가지 연산을 순서대로 시행한다. 먼저 값을 읽고, 그 다음에 새로운 값, 즉 읽은 값 더하기 1을 필드에 쓴다. 첫 번째 스레드가 필드의 값을 읽은 후 새 값을 미처 기록하기 전에 두 번째 스레드가 필드에서 같은 값을 읽으면, 두 스레드는 같은 일련번호를 얻게 된다. 이것은 안전 오류다. 프로그램이 잘못된 결과를 계산하는 것이다.
이 문제를 해결하는 한 가지 방법은, 메서드를 synchronized로 선언하는 것이다. 그러면 여러 스레드가 동시에 호출하더라도 서로 겹쳐 실행되지 않는 메서드가 되고, 각각의 메서드 호출은 그전에 행해진 모든 호출의 영향을 관측할 수 있게 된다. synchronized 키워드를 붙였다면, volatile 키워드는 삭제해야 한다. 더 견고한 메서드로 만들려면 int 대신 long을 쓰거나, 아니면 nextSerialNumber가 반환할 값이 다시 0으로 돌아갈 때 예외가 뜨도록 만들라.
더 좋은 방법은 AtomicLong 클래스를 쓰는 것이다. 이 클래스는 java.util.concurrent.atomic의 일부다. 원하는 일은 해주면서도, synchronized 키워드를 사용한 해법보다 성능도 좋다.
private static final AtomicLong nextSerialNum = new AtomicLong();

public static long generateSerialNumber(){
  return nextSerialNum.getAndIncrement();
}
이번 절에서 설명한 문제를 피하는 가장 좋은 방법은 변경 가능 데이터를 공유하지 않는 것이다. 굳이 공유를 해야겠다면 변경 불가능 데이터를 공유하거나 그럴 필요가 없다면 아예 공유하지 마라. 다시 말해 변경 가능 데이터는 한 스레드만 이용하도록 하라는 것이다.
규칙79 : 과도한 동기화는 피하라
상황에 따라서는 동기화를 너무 과도하게 적용하면 성능 저하, 교착 상태(deadlock), 예측할 수 없는 동작 등의 문제가 생길 수 있다. liveness(생존 오류, 응답 불가)나 safety failures(안전 오류, 안전 실패)를 피하고 싶으면, 동기화 메서드나 블록 안에서 클라이언트에게 프로그램 제어 흐름을 넘기지 마라. 다시 말해 동기화가 적용된 영역 안에서는 재정의 가능 메서드나 클라이언트가 제공한 함수 객체 메서드를 호출하지 말라는 것이다.
public class ObservableSet<E> extends ForwardingSet<E> {
    public ObservableSet(Set<E> set) {
        super(set);
    }

    private final List<SetObserver<E>> observers = new ArrayList<>();

    public void addObserver(SetObserver<E> observer) {
        synchronized (observers) {
            observers.add(observer);
        }
    }

    public boolean removeObserver(SetObserver<E> observer) {
        synchronized (observers) {
            return observers.remove(observer);
        }
    }

    private void notifyElementAdded(E element) {
        synchronized (observers) {
            for (SetObserver<E> observer : observers)
                    observer.added(this,element);
        }
    }

    @Override
    public boolean add(E element) {
        boolean added = super.add(element);
        if (added)
            notifyElementAdded(element);
        return added;
    }

    @Override
    public boolean addAll(Collection<? extends E> c) {
        boolean result = false;
        for (E element : c)
            result |= add(element); // notifyElementAdded를 호출한다. 
        return result;
    }
}
관찰자들은 addObserver와 removeObserver 메서드를 호출해 구독을 신청하거나 해지한다. 두 경우 모두 다음 콜백 인터페이스의 인스턴스를 메서드에 건넨다.
@FunctionalInterface  public interface SetObserver<E> {
    //ObservableSet에 원소가 더해지면 호출된다.
    void added(ObservableSet<E> set, E element);
}
public class ObservableSetTest {
    public static void main(String[] args) {
        ObservableSet<Integer> set = new ObservableSet<>(new HashSet<>());
        set.addObserver((s,e)-> System.out.println(e));

        for (int i=0; i<100; i++) {
            set.add(i);
        }
    }
}
위 프로그램은 0부터 99까지를 정상적으로 출력한다.
이제 조금 흥미진진한 시도를 해보자. 평상시에는 앞서와 같이 집합에 추가된 정숫값을 출력하다가, 그 값이 23이면 자기 자신을 제거하는 관찰자를 추가해보자.
public class ObservableSetTest {
    public static void main(String[] args) {
        ObservableSet<Integer> set = new ObservableSet<>(new HashSet<>());
        set.addObserver(new SetObserver<Integer>() {
            @Override
            public void added(ObservableSet<Integer> s, Integer e) {
                System.out.println(e);
                if (e == 23) {
                    s.removeObserver(this);
                }
            }
        });

        for (int i=0; i<100; i++) {
            set.add(i);
        }
    }
}
람다를 사용한 이전 코드와 달리 익명 클래스를 사용했다. s.removeObserver 메서드에 함수 객체 자신을 넘겨야 하기 때문이다. 람다는 자신을 참조할 수단이 없다.
이 프로그램은 0부터 23까지 출력한 후 관찰자 자신을 구독해지한 다음 조용히 종료할 거 같지만 실제로 실행시켜 보면 23까지 출력한 다음 ConcurrentModificationException을 던진다. 관찰자의 add 메서드 호출이 일어난 시점이 notifyElementAdded가 관찰자들의 리스트를 순회하는 도중이기 때문이다.
즉 다시말하면 아래 코드처럼 notifyElementAdded 메서드에서 관찰자를 순회하는데, added 메서드에서 remove를 시켜버린다. 허용되지 않는 동작이다.
    private void notifyElementAdded(E element) {
        synchronized (observers) {
            for (SetObserver<E> observer : observers)
                    observer.added(this,element);
        }
    }

    set.addObserver(new SetObserver<Integer>() {
                @Override
                public void added(ObservableSet<Integer> s, Integer e) {
                    System.out.println(e);
                    if (e == 23) {
                        s.removeObserver(this);
                    }
                }
            });
notifyElementAdded 메서드에서 수행하는 순회는 동기화 블록 안에 있으므로 동시 수정이 일어나지 않도록 보장하지만, 정작 자신이 콜백을 거쳐 되돌아와 수정 하는 것까지 막지는 못한다.
이번에는 이상한 것을 시도 해보자. 구독해지를 하는 관찰자를 작성하는데, removeObserver를 직접 호출하지 않고 실행자 서비스(ExecutorService)를 사용해 다른 스레드한테 부탁할 것이다.
// 쓸데없이 백그라운드 스레드를 사용하는 관찰자
public class ObservableSetTest {
    public static void main(String[] args) {
        ObservableSet<Integer> set = new ObservableSet<>(new HashSet<>());
        set.addObserver(new SetObserver<Integer>() {
            @Override
            public void added(ObservableSet<Integer> s, Integer e) {
                System.out.println(e);
                if (e == 23) {
                    ExecutorService exec = Executors.newSingleThreadExecutor();
                    try {
                        exec.submit(() -> s.removeObserver(this)).get();
                    } catch (ExecutionException | InterruptedException ex) {
                        throw new AssertionError(ex);
                    } finally {
                        exec.shutdown();
                    }
                }
            }
        });

        for (int i=0; i<100; i++) {
            set.add(i);
        }
    }
}
이 프로그램은 예외가 발생하지 않지만 교착상태가 생긴다. 백그라운드 스레드는 s.removeObserver를 호출하는데, 이 메서드는 observers에게 락을 걸려한다. 하지만 락을 걸 수 없다. 왜냐하면 메인 스레드가 이미 락을 잡고 있기 때문이다. 메인 스레드는 백그라운드 스레드가 구독 해제를 끝내기를 기다리면서 락을 계속 들고 있다. 바로 교착상태다.
다행히도 이런 문제는 외계인 메서드(재정의 메서드나 클라이언트가 제공한 함수 객체 메서드)를 호출하는 부분을 동기화 영역 밖으로 옮기면 쉽게 해결할 수 있다. notifyElementAdded 메서드의 경우, observers리스트의 복사본을 만들어서 락 없이도 안전하게 리스트를 순회할 수 있도록 바꾸는 것이다. 이렇게 바꾸면 앞서 보았던 두 예제에서는 더 이상 예외나 교착상태가 일어나지 않는다.
//불가해 메서드를 호출하는 코드를 동기화 영역 밖으로 옮겼다
private void notifyElementAdded(E element) {
        List<SetObserver<E>> snapshot = null;
        synchronized (observers) {
            snapshot = new ArrayList<SetObserver<E>>(observers);
        }

        for (SetObserver<E> observer : snapshot) {
            observer.added(this, element);
        }
}
사실 외계인 메서드 호출 코드를 동기화 영역 밖으로 옮기는 문제라면 더 좋은 해결책이 있다. 릴리스 1.5부터 자바 라이브러리에는 CopyOnWriteArrayList라는 병행성 컬렉션이 추가되었다. 이 리스트는 ArrayList의 변종으로 내부 배열을 통째로 복사하는 방식으로 쓰기 연산을 지원한다. 내부 배열을 절대 수정하지 않으므로 순회 연산만큼은 락을 걸 필요가 없어져서 대단히 빠르다. 이 리스트의 성능은 대체로 끔찍한 수준이지만 관찰자(observer) 리스트에는 딱이다. 관찰자 리스트는 변경할 일이 거의 없는 데다 순회 연산이 압도적으로 많기 때문이다.
// 다중 스레드에 안전한 observer 집합
private final List<SetObserver<E>> observers = new CopyOnWriteArrayList<>();

    public void addObserver(SetObserver<E> observer) {
            observers.add(observer);
    }

    public boolean removeObserver(SetObserver<E> observer) {
            return observers.remove(observer);
    }

    private void notifyElementAdded(E element) {
            for (SetObserver<E> observer : observers)
                observer.added(this,element);
    }
명심해야 할 것은 동기화 영역 안에서 수행되는 작업의 양을 가능한 한 줄여야 한다는 것이다.
이제 성능에 관한 내용을 살펴보자. 변경 가능 클래스의 경우, 병렬적으로 이용될 클래스이거나, 내부적인 동기화를 통해 외부에서 전체 객체에 락을 걸 때보다 높은 병행성을 달성할 수 있을 때만 스레드 안전성을 갖도록 구현해야 한다. 그렇지 않다면 내부적인 동기화는 하지 마라. 예를 들어 StringBuffer 객체는 거의 항상 한 스레드만 이용하는 객체인데도 내부적으로 동기화를 하도록 구현되어 있다. 그래서 결국 StringBuilder로 대체된 것이다. 비슷한 이유로, 스레드 안전한 java.util.Random은 동기화하지 않는 버전인 java.util.concurrent.ThreadLocalRandom으로 대체되었다. 선택하기 어렵다면 동기화하지 말고, 대신 문서에 "스레드 안전하지 않다"고 명기하자.
여러 스레드가 호출할 가능성이 있는 메서드가 정적 필드를 수정한다면 그 필드를 사용하기 전에 반드시 동기해야 한다(비결정적 행동도 용인하는 클래스라면 상관없다). 그런데 클라이언트가 여러 스레드로 복제돼 구동되는 상황이라면 다른 클라이언트에서 이 메서드를 호출하는 걸 막을 수 없으니 외부에서 동기화할 방법이 없다. 결과적으로, 이 정적 필드가 심지어 private라도 서로 관련 없는 스레드들이 동시에 읽고 수정할 수 있게 된다. 사실상 전역 변수와 같아진다는 뜻이다.
//잘못된 예제 - 동기화가 필요하다
private static volatile int nextSerialNumber = 0;
public static int generateSerialNumber() {
     return nextSerialNumber++;
}
규칙80 : 스레드보다는 실행자와 태스크, 스트림을 애용하라
릴리스 1.5부터 자바 플랫폼에는 java.util.concurrent가 추가되었다. 이 패키지에는 실행자 프레임워크(Executor Framework)라는 것이 들어 있는데, 유연성이 높은 인터페이스 기반 태스크 실행 프레임워크다.
ExecutorService executor = Executors.newSingleThreadExecutor();
위의 한줄로 작업 큐를 생성할 수 있게 됐다.
executor.execute(runnable);
다음은 이 실행자에 실행할 태스크(작업)을 넘기는 방법이다.
executor.shutdown();
그리고 다음은 실행자를 우아하게 종료시키는 방법이다(이 작업이 실패하면 VM 자체가 종료되지 않을 것이다).
실행자 서비스의 기능은 이 외에도 많다.
특정 태스크가 완료되기를 기다린다(규칙 79에서 본 get 메서드).
태스크 모음 중 아무것 하나(invokeAny 메서드) 혹은 모든 태스크(invokeAll 메서드)가 완료되기를 기다린다.
실행자 서비스가 종료하기를 기다린다(awaitTermination 메서드).
완료된 태스크들의 결과를 차례로 받는다(ExecutorCompletionService 이용).
태스크를 특정 시간에 혹은 주기적으로 실행하게 한다(ScheduledThreadPoolExecutor 이용).
큐를 둘 이상의 스레드가 처리하게 하고 싶다면 간단히 다른 정적 팩토리를 이용하여 다른 종류의 실행자 서비스(스레드 풀)를 생성하면 된다. 스레드 풀에 담기는 스레드의 숫자는 고정시켜 놓을 수도 있고, 가변적으로 변하도록 설정할 수도 있다. java.util.concurrent.Executors 클래스에는 필요한 실행자 대부분을 생성할 수 있도록 하는 정적 팩터리 메서드들이 들어 있다. 하지만 일반적이지 않은 무언가가 필요할 때는 ThreadPoolExecutor 클래스를 직접 이용할 수도 있다. 이 클래스를 이용하면 스레드 풀의 동작을 거의 모든 측면에서 세밀하게 제어할 수 있다.
작은 프로그램이나 가벼운 서버라면 Executors.newCachedThreadPool이 일반적으로 좋은 선택이다. 특별히 설정할 게 없고 일반적인 용도에 적합하게 동작한다. 하지만 CachedThreadPool은 무거운 프로덕션 서버에는 좋지 못하다. CachedThreadPool에서는 요청받은 태스크들이 큐에 쌓이지 않고 즉시 스레드에 위임돼 실행된다. 가용한 스레드가 없다면 새로 하나를 생성한다. 서버가 아주 무겁다면 CPU 이용률이 100%로 치닫고, 새로운 태스크가 도착하는 족족 또 다른 스레드를 생성하며 상황을 더욱 악화시킨다. 따라서 부하가 심한 환경에 들어갈 서버를 만들 때는 스레드 개수를 고정한 Executors.newFixedThreadPool을 선택하거나 완전히 통제할 수 있는 ThreadPoolExecutor를 직접 사용하는 편이 훨씬 낫다.
작업 큐를 손수 구현하는 것은 삼가야 할 뿐 아니라, 스레드를 직접 다루는 것도 일반적으로 삼가야 한다. 스레드를 직접 다루면 Thread가 작업 단위와 수행 메커니즘 역할을 모두 수행하게 된다. 반면 실행자 프레임워크에서는 작업 단위와 실행 메커니즘이 분리된다. 작업 단위를 나타내는 핵심 추상 개념이 태스크다. 태스크에는 두 가지가 있다. Runnable과, 그 가까운 사촌격인 Callable이다(Runnable과 비슷하지만 값을 반환하고 임의의 예외를 던질 수 있다는 차이가 있다). 그리고 태스크를 수행하는 일반적인 메커니즘이 바로 실행자 서비스(executor service)다. 태스크와 실행자 서비스를 분리해서 생각하게 되면 실행 정책을 더욱 유연하게 정할 수 있게 된다. 핵심은, 컬렉션 프레임워크가 데이터를 모으는 일을 처리하는 것과 마찬가지로, 실행자 프레임워크는 태스크를 실행하는 부분을 담당한다는 것이다.
자바 7이 되면서 실행자 프레임워크는 포크-조인(fork-join) 태스크를 지원하도록 확장되었다. 포크-조인 태스크는 포크-조인 풀이라는 특별한 실행자 서비스가 실행해준다. 포크-조인 태스크, 즉 ForkJoinTask의 인스턴스는 작은 하위 태스크로 나뉠 수 있고, ForkJoinPool을 구성하는 스레드들이 이 태스크들을 처리하며, 일을 먼저 끝낸 스레드는 다른 스레드의 남은 태스크를 가져와 대신 처리할 수도 있다. 이렇게 하여 모든 스레드가 바쁘게 움직여 CPU를 최대한 활용하면서 높은 처리량과 낮은 지연시간을 달성한다.
규칙81 : wait이나 notify 대신 병행성 유틸리티를 이용하라
릴리즈 1.5부터 자바 플랫폼에는 고수준 병행성 유틸리티들이 포함되어, 예전에는 wait과 notify를 사용해 구현해야만 했던 일들을 대신한다. wait과 notify를 정확하게 사용하는 것이 어렵기 때문에, 이 고수준 유틸리티들을 반드시 이용해야 한다. java.util.concurrent에 포함된 이 유틸리티들은 실행자 프레임워크, 병행 컬렉션(concurrent collection), 그리고 동기자(synchronizer)의 세 가지 범주로 나눌 수 있다. 이번 절에서는 병행 컬렉션과 동기자에 대해 간단히 살펴본다.
병행 컬렉션은 List, Queue, Map 등의 표준 컬렉션 인터페이스에 대한 고성능 병행 컬렉션 구현을 제공한다. 이 컬렉션들은 병행성을 높이기 위해 동기화를 내부적으로 처리한다. 따라서 컬렉션 외부에서 병행성을 처리하는 것은 불가능하다. 락을 걸어봐야 아무 효과가 없을 뿐 아니라 프로그램만 느려진다. 따라서 클라이언트는 병행 컬렉션에 대한 메서드 호출을 원자적으로 작성할 수 없다. 그래서 컬렉션 인터페이스 가운데 일부는 상태 종속 변경 연산으로 확장되었는데, 이는 몇 가지 기본 연산들을 하나의 원자적 연산으로 묶은 것이다. 예를 들어 ConcurrentMap은 Map을 확장해서 몇 가지 메서드를 추가했는데, 그 가운데 putIfAbsent(key,value)도 있다. 이 메서드는 키에 해당하는 값이 없을 때만 주어진 값을 넣고, 해당 키가 있는 경우에는 기존 값을 반환한다. 그리고 대응되는 값이 없었을 때는 null을 반환한다. 이 메서드 덕에 다중 스레드에 안전한 정규화 맵을 쉽게 구현할 수 있다.
// ConcurrentMap으로 구현한 병행 정규화 맵
public static String intern(String s){
    String result = map.get(s);
    if(result == null){
        result = map.putIfAbsent(s,s);
        if(result == null)
            result = s;
    }
    return result;
}
병행성이 높을 뿐 아니라, ConcurrentHashMap은 아주 빠르다. 그러니 확실한 이유가 없다면 Collections.synchronizedMap이나 Hashtable 대신 ConcurrentHashMap을 사용하도록 하자.
컬렉션 인터페이스 가운데 몇몇은 봉쇄 연산(blocking operation)이 가능하도록 확장되었다. 성공적으로 수행될 수 있을 때까지 대기(wait)할 수 있도록 확장되었다는 것이다. 예를 들어 BlockingQueue는 Queue를 확장해서 take 같은 연산을 추가하였다. take는 큐의 맨 앞(head) 원소를 제거한 다음 반환하는데, 큐가 비어 있는 경우에는 대기한다. ThreadPoolExecutor를 비롯한 대부분의 ExecutorService 구현은 BlockingQueue를 사용한다.
동기자(synchronizer)는 스레드들이 서로를 기다릴 수 있도록 하여, 상호 협력이 가능하게 한다. 가장 널리 쓰이는 동기자로는 CountDownLatch와 Semaphore가 있다. countdown latch는 일회성 barrier로서 하나 이상의 스레드가 작업을 마칠 때까지 다른 여러 스레드가 대기할 수 있도록 한다. CountDownLatch에 정의된 유일한 생성자는 래치의 countdown 메서드가 호출될 수 있는 횟수를 나타내는 int 값을 인자로 받는다. 대기 중인 스레드가 진행할 수 있으려면 그 횟수만큼 countdown 메서드가 호출되어야 한다.
예를 들어 어떤 작업을 병렬적으로 처리하는 데 드는 시간을 재는 간단한 프레임워크를 만드는 경우를 생각해 보자. 이 프레임워크는 작업을 실행할 실행자(executor)와 병행성 수준(concurrency level)을 나타내는 int 값, 그리고 수행할 작업을 나타내는 Runnable 객체를 인자로 받는 메서드다. 시간을 재는 타이머 스레드가 실행되기 전에 모든 작업 스레드는 작업 실행 준비를 마쳐야 한다. 그 상태에서 타이머 스레드가 “출발 신호를 울리면” 작업 스레드는 작업을 수행하기 시작한다. 마지막 작업 스레드가 일을 마치면 타이머 스레드는 시계를 멈추고 시간을 잰다.
public static long time(Executor executor, int concurrency, final Runnable action)
        throws InterruptedException{
    final CountDownLatch ready = new CountDownLatch(concurrency);
    final CountDownLatch start = new CountDownLatch(1);
    final CountDownLatch done = new CountDownLatch(concurrency);

    for(int i=0; i<concurrency; i++){
        executor.execute(new Runnable() {
            @Override
            public void run() {
                ready.countDown(); // 타이머에게 준비됨을 알림
                try {
                    start.await(); // 다른 작업 스레드가 준비될 때까지 대기
                    action.run();
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                } finally {
                    done.countDown(); // 타이머에게 끝났음을 알림
                }
            }
        });
    }
    ready.await(); // 모든 작업 스레드가 준비될 때까지 대기
    long startNanos = System.nanoTime();
    start.countDown(); // 출발 !
    done.await(); // 모든 작업 스레드가 끝날 때까지 대기
    return System.nanoTime() - startNanos;
}
이 메서드가 세 개의 카운트다운 래치를 사용하고 있음에 유의하자. ready는 작업 스레드가 타이머 스레드에게 실행 준비가 끝났음을 알리려고 사용한다. 그런 다음 작업 스레드는 두 번째 래치 start에서 기다린다. 마지막 작업 스레드가 ready.countDown을 호출하면 타이머 스레드는 작업 시작 시간을 기록하고 start.countDown을 호출하여 모든 작업 스레드가 작업을 시작하도록 한다. 그런 다음 타이머 스레드는 세 번째 래치 done을 이용하여 마지막 작업 스레드가 일을 마친 다음에 done.countDown을 호출할 때까지 기다린다. 모든 작업 스레드가 실행을 마치면 타이머 스레드는 깨어나서 작업에 소요된 시간을 반환한다.
특정 구간의 실행시간을 잴 때는 System.currentTimeMillis 대신 System.nanoTime을 사용해야 한다. 그래야 더 정밀하게 잴 수 있을 뿐더러, 시스테의 실시간 클락(real-time clock) 변동에도 영향을 받지 않게 된다.
wait나 notify로 작성한 기존 코드도 유지할 필요가 있을 것이다. wait 메서드는 스레드로 하여금 어떤 조건이 만족되길 기다리도록 하고 싶을 때 사용한다. 동기화 영역 내에서 호출해야 하며, 호출 대상 객체에는 락이 걸린다. wait 메서드는 아래의 표준적 숙어대로 사용한다.
// wait 메서드를 사용하는 표준적 숙어 
synchronized(obj){
    while( 이 조건이 만족되지 않을 경우에 순환문 실행 )
        obj.wait(); // 락 해제. 깨어나면 다시 락 획득

    … // 조건이 만족되면 그에 맞는 작업 실행
}
wait 메서드를 호출할 때는 반드시 이 대기 순환문(wait loop) 숙어대로 하자. 순환문 밖에서 호출하면 안된다. 이 순환문은 wait 호출 전후로 조건이 만족되었는지 검사하는 역할을 한다.
notify를 쓸 것인가 notifyAll을 쓸 것인가에 대해서는 많은 사람들이 항상 notifyAll을 쓰라고 한다. 깨어날 필요가 있는 모든 스레드를 깨우므로, 항상 정확한 결과가 나올 것이다. 필요 없는 다른 스레드도 깨어날 것이지만 프로그램의 정확성에는 영향을 끼치지 않는다. 대기 조건이 false인 것을 확인하고 나면 다시 대시 상태로 돌아갈 것이기 때문이다.
규칙82 : 스레드 안전성에 대해 문서로 남겨라
클래스와 사용자 사이의 규약 가운데 중요한 것 하나는, 클래스의 객체나 정적 메서드가 병렬적으로 이용되었을 때 어떻게 동작하느냐 하는 것이다. 병렬적으로 사용해도 안전한 클래스가 되려면, 어떤 수준의 스레드 안전성을 제공하는 클래스인지 문서에 명확하게 남겨야 한다.
스레드 안전성을 수준별로 요약하였다.
변경 불가능(immutable) : 이 클래스로 만든 객체들은 상수다. 따라서 외부적인 동기화 메커니즘 없이도 병렬적 이용이 가능하다. String, Long, BigInteger 등이 그 예다.
무조건적 스레드 안전성 : 이 클래스의 객체들은 변경이 가능하지만 적절한 내부 동기화 메커니즘을 갖추고 있어서 외부적으로 동기화 메커니즘을 적용하지 않아도 병렬적으로 사용할 수 있다. Random, ConcurrentHashMap 같은 클래스가 그 예다.
조건부 스레드 안전성 : 무조건적 스레드 안전성과 거의 같은 수준이나 몇몇 스레드는 외부적 동기화가 없이는 병렬적으로 사용할 수 없다. Collections.synchronized 계열 메서드가 반환하는 포장 객체(wrapper)가 그 사례다. 이런 객체의 반복자(iterator)는 외부적 동기화 없이는 병렬적으로 이용할 수 없다.
스레드 안전성 없음 : 이 클래스의 객체들은 변경 가능하다. 해당 객체들을 병렬적으로 사용하려면 클라이언트는 메서드를 호출하는 부분을 클라이언트가 선택한 외부적 동기화 수단으로 감싸야 한다. ArrayList나 HashMap 같은 일반 용도의 컬렉션 구현체들이 그 예다.
다중 스레드에 적대적 : 이런 클래스의 객체는 설마 메서드를 호출하는 모든 부분을 외부적 동기화 수단으로 감싸더라도 안전하지 않다. 이런 클래스가 되는 것은 보통, 동기화 없이 정적 데이터를 변경하기 때문이다. 누구도 이런 클래스를 고의로 만들지는 않는다. 다행히 자바 라이브러리에는 이런 클래스가 별로 없다. System.runFinalizersOnExit 메서드는 스레드에 적대적인 대표적인 메서드로, 지금은 deprecated 되었다.
위에 언급한 범주 각각은 스레드 안전성 애노테이션 Immutable, ThreadSafe, NotThreadSafe 각각에 해당한다. 무조건적/조건적 스레드 안전성 범주는 전부 ThreadSafe 애노테이션에 해당한다.
조건부 스레드 안전성 클래스에 대한 문서를 만들 때는 신중해야 한다. 어떤 순서로 메서드를 호출할 때 외부 동기화 메커니즘을 동원해야 하는지, 그리고 그 순서로 메서드를 실행하려면 어떤 락을 사용해야 하는지 명시해야 한다. 보통은 객체 자체에 락을 걸면 되는데 예외도 있다. 다른 객체에 대한 뷰 역할을 하는 객체의 경우, 클라이언트는 원래 객체에 대해 동기화를 해야 한다. 동기화 없이 직접 변경하는 일을 막기 위해서다.
Map<K, V> m = Collections.synchronizedMap(new HashMap<K,V>();
…
Set<K> s = m.keySet(); // 동기화 블록 안에 있을 필요 없음
…
synchronized(m){ // s가 아니라 m에 대해 동기화 !
    for(K key : s)
        key.f();
}
enum 자료형의 경우, 변경 불가능성을 문서에 밝힐 필요는 없다. 반환값 자료형을 보고 명확하게 알 수 있는 경우를 빼고, 정적 팩토리 메서드는 자기가 반환하는 객체의 스레드 안전성을 문서에 남겨야 한다.
내부적인 동기화 private 락 객체 패턴 외부로 공개한 락을 통해 동기화하도록 하는 클래스의 경우, 클라이언트가 여러 메서드를 한 번에 원자적으로 호출 할 수 있다는 유연성이 있긴 하지만, 높아진 유연성만큼 대가도 따른다. ConcurrentHashMap이나 ConcurrentLinkedQueue 같은 병행 컬렉션에서 사용하는 내부적인 고속 병행성 제어 메커니즘과는 잘 어울리지 않는다. 게다가, 클라이언트가 해당 락을 오랫동안 들고 있으면 DoS 공격도 가능하다. 그런 공격을 막는 한 가지 방법은 동기화 메서드를 쓰는 대신(동기화 메서드는 클래스 외부로 공개된 락이나 다름없다) private 락 객체를 이용하는 것이다.
//DoS 공격을 피하기 위한 private 락 객체 숙어
private final Object lock = new Object();

public void foo(){
    synchronized(lock){
        ...
    }
}
이 private 락 객체는 클래스 바깥에서는 이용할 수 없으므로, 클라이언트는 객체의 동기화 메커니즘에 개입할 수 없다. lock 필드를 final로 선언한 것에 유의하자. 이렇게 하면 실수로 lock 필드의 내용을 변경하는 일을 막을 수 있다.
private 락 객체 패턴은 무조건적 스레드 안전성을 제공하는 클래스에만 적용할 수 있다. 조건부 스레드 안전성을 제공하는 클래스는 이 숙어를 이용할 수 없다. 특정 순서로 메서드들을 호출할 때 클라이언트가 어떤 락을 획득하게 되는지를 문서로 만들어 남겨야 하기 때문이다.
요약하자면, 모든 클래스는 자신의 스레드 안전성 수준을 문서로 분명히 밝혀야 한다. synchronized 키워드는 이런 문서에서는 아무런 역할도 하지 못한다. 무조건적 스레드 안전성을 제공하는 클래스를 구현하는 중이라면 메서드를 synchronized로 선언하는 대신 private락 객체를 이용하면 어떨지 따져보자. 이런 락 객체를 이용하면 클라이언트나 하위 클래스가 동기화에 개입하는 것을 막을 수 있고, 다음번 릴리스에는 좀 더 복잡한 병행성 제어 전략도 쉽게 채택할 수 있게 된다.
규칙83 : 초기화 지연은 신중하게 하라
초기화 지연은 필드 초기화를 그 값이 쓰일 때까지 미루는 것이다. 이 기법은 static 필드와 객체 필드 모두 적용 가능하다. 초기화 지연 기법은 기본적으로 최적화 기법이다. 대부분의 최적화가 다 그렇듯이, 초기화 지연을 적용할 때 따라야 할 최고의 지침은 “정말로 필요하지 않으면 하지 마라”는 것이다. 초기화 지연 기법은 클래스를 초기화하고 객체를 생성하는 비용은 줄이지만, 필드 사용 비용은 증가시킨다. 필드 사용 빈도가 낮고 초기화 비용이 높다면 쓸만할 것이다. 하지만 대부분의 경우 지연된 초기화를 하느니 일반 초기화를 하는 편이 낫다.
아래 코드는 통상적인 방법으로 초기화하는 전형적 필드 선언문이다. final로 선언하고 있음에 주의하자.
//객체 필드를 초기화하는 일반적인 방법
private final FieldType field = computerFieldValue();
초기화 순환성 문제를 해소하기 위해서 초기화를 지연시키는 경우에는 동기화된 접근자를 사용하라.
//동기화된 접근자를 사용한 객체 필드 초기화 지연 방법
private FieldType field;

synchronized FieldType getField(){
    if(field == null)
        field = computerFieldValue();
    return field;
}
성능 문제 때문에 정적 필드 초기화를 지연시키고 싶을 때는 초기화 지연 담당 클래스 숙어를 적용하라. 클래스는 실제로 사용되는 순간에 초기화된다는 점을 이용한 것이다.
//정적 필드에 대한 초기화 지연 담당 클래스 숙어
private static class FieldHolder{
    static final FieldType field = computerFieldValue();
}
static FieldType getField(){
    return FieldHolder.field;
}
FieldHolder 클래스는 FieldHolder.field가 처음으로 이용되는 순간, 그러니까 getField 메서드가 처음으로 호출되는 순간에 초기화된다. 이 숙어가 좋은 점은 getField를 동기화 메서드로 선언하지 않아도 된다는 것이다. 따라서 초기화를 지연시켜도 메서드 이용 비용은 전혀 증가하지 않는다.
성능 문제 때문에 객체 필드 초기화를 지연시키고 싶다면 이중 검사 숙어를 사용하라. 이 숙어를 사용하면 초기화가 끝난 필드를 이용하기 위해 락을 걸어야 하는 비용을 없앨 수 있다. 이 숙어 뒤에 숨은 아이디어는 필드의 값을 두 번 검사하는 것이다. 한번은 락 없이 검사하고, 초기화가 되지 않은 것 같으면 락을 걸어서 검사한다. 이미 초기화된 필드에는 락을 걸지 않으므로, 필드는 반드시 volatile로 선언해야 한다.
//이중 검사 패턴을 통해 객체 필드 초기화를 지연시키는 숙어
private volatile FieldType field; 

FieldType getField() {
    FieldType result = field;
    if (result == null) { // 첫 번째 검사(락 없음)
        synchronized(this){
            result = field;
            if(result == null) // 두 번째 검사(락)
                field = result = computerFieldValue();
        }
    }
    return result;
}
여기서 지역 변수 result가 하는일은, 이미 초기화된 필드는 딱 한 번만 읽도록 하는 것이다.
이중 검사 숙어의 변종 가운데는 주의할 것이 두 가지 있다. 때로 여러 번 초기화되어도 상관없는 객체 필드 초기화를 지연시키고 싶을 때가 있다. 이런 상황이라면 이중 검사 숙어의 두 번째 검사는 없애버려도 된다.
//단일 검사 숙어 - 필드가 여러 번 초기화 될 수도 있다.
private volatile FieldType field; 

FieldType getField() {
    FieldType result = field;
    if(result == null) 
        field = result = computerFieldValue();
    return result;
}
또한 만약 모든 스레드가 필드 값을 재계산하더라도 상관없고 필드 자료형이 long이나 double이 아닌 기본 자료형인 경우에는 단일 검사 숙어에서 volatile 키워드는 빼도 된다.
규칙84 : 스레드 스케줄러에 의존하지 마라
좋은 프로그램이라면 스케줄링 정책에는 의존하지 말아야 한다. 정확성을 보장하거나 성능을 높이기 위해 스레드 스케줄러에 의존하는 프로그램은 이식성이 떨어진다. 안정적이고, 즉각 반응하며 이식성이 좋은 프로그램을 만드는 가장 좋은 방법은, 실행 가능 스레드의 평균적 수가 프로세서 수보다 너무 많아지지 않도록 하는 것이다.
마찬가지로 Thread.yield나 스레드 우선순위에 의존하지도 마라. 이런 것들은 스케줄러 입장에서는 단순한 힌트일 뿐이다.

-->`,r:{minutes:4.27,words:1280},y:"a",t:"병행성"}}],["/java/effective-java/11-serialization.html",{loader:()=>r(()=>import("./11-serialization.html-BMZhhekk.js"),__vite__mapDeps([172,1])),meta:{c:["Java"],g:["crashcourse","java","jdk","jdk8"],e:`

<hr>
<!-- https://yangbongsoo.gitbook.io/study/java-effective-java/serialization -->
<!-- 

규칙85 : 자바 직렬화의 대안을 찾으라
직렬화에 대한 기본정리 코드 및 내용 참조 : http://woowabros.github.io/experience/2017/10/17/java-serialize.html (우아한형제들 기술블로그 이수홍님 자바 직렬화 내용)
자바 직렬화란 자바 시스템 내부에서 사용되는 객체 또는 데이터를 외부의 자바 시스템에서도 사용할 수 있도록 바이트(byte) 형태로 데이터 변환하는 기술과 바이트로 변환된 데이터를 다시 객체로 변환하는 기술(역직렬화)이다. 시스템적으로 이야기하자면 JVM(Java Virtual Machine 이하 JVM)의 메모리에 상주(힙 또는 스택)되어 있는 객체 데이터를 바이트 형태로 변환하는 기술과 직렬화된 바이트 형태의 데이터를 객체로 변환해서 JVM으로 상주시키는 형태를 같이 이야기한다.
여러가지 직렬화 방법이 있지만(csv, json 등) 자바 직렬화 방법을 사용하는 이유는 자바 시스템 간의 데이터 교환을 빠르고 편하게 할 수 있기 때문이다. 많이 사용되는 곳으로는 서블릿 세션(단순히 세션을 메모리 위에서 운용한다면 직렬화를 필요로 하지 않지만, 파일로 저장하거나 세션 클러스터링, DB에 저장하는 옵션을 선택하게 되면 세션 자체가 직렬화 되어 전달된다), 캐시(Ehcache, Redis, Memcached 등), 자바 RMI 가 있다.
public class MainClass {
    public static void main(String[] args) throws Exception {

        // 직렬화
        Member member = new Member("ybs", "abc@naver.com", 30);
        byte[] serializedMember;
        try (ByteArrayOutputStream baos = new ByteArrayOutputStream()) {
            try (ObjectOutputStream oos = new ObjectOutputStream(baos)) {
                oos.writeObject(member);
                serializedMember = baos.toByteArray();
            }

            System.out.println(serializedMember);
        }

        // 역직렬화
        // 역직렬화 조건 : 직렬화 대상이 된 객체의 클래스가 클래스 패스에 존재해야 하며 import 되어 있어야 함
        // 중요한 점은 직렬화와 역직렬화를 진행하는 시스템이 서로 다를 수 있다는 것을 반드시 고려
        // 자바 직렬화 대상 객체는 동일한 serialVersionUID 를 가지고 있어야 함
        try (ByteArrayInputStream bais = new ByteArrayInputStream(serializedMember)) {
            try (ObjectInputStream ois = new ObjectInputStream(bais)) {
                Object objectMember = ois.readObject();
                Member deSerializedMember = (Member) objectMember;
                System.out.println(deSerializedMember);
            }
        }

    }
}
직렬화는 프로그래머가 어렵지 않게 분산 객체를 만들 수 있게 해주지만 보이지 않는 생성자, API와 구현 사이의 모호해진 경계, 잠재적인 정확성 문제, 성능, 보안, 유지보수성 등 그 대가가 컸다. 직렬화의 근본적인 문제는 공격 범위가 너무 넓고 지속적으로 더 넓어져 방어하기 어렵다는 점이다. ObjectInputStream의 readObject 메서드를 호출하면서 객체 그래프가 역직렬화되기 때문이다. readObject 메서드는(Serializable 인터페이스를 구현했다면) 클래스패스 안의 거의 모든 타입의 객체를 만들어낼 수 있는, 사실상 마법 같은 생성자다. 바이트 스트림을 역직렬화하는 과정에서 이 메서드는 그 타입들 안의 모든 코드를 수행할 수 있다. 이 말인즉슨, 그 타입들의 코드 전체가 공격 범위에 들어간다는 뜻이다.
역직렬화에 시간이 오래 걸리는 짧은 스트림을 역직렬화하는 것만으로도 Dos 공격에 쉽게 노출될 수 있다. 이런 스트림을 역직렬화 폭탄(deserialization bomb)이라고 한다.
    // 역직렬화 폭탄 - 이 스트림의 역직렬화는 영원히 계속된다.
    static void makeBomb() {
        Set<Object> root = new HashSet<>();
        Set<Object> s1 = root;
        Set<Object> s2 = new HashSet<>();

        for (int i=0; i<100; i++) {
            Set<Object> t1 = new HashSet<>();
            Set<Object> t2 = new HashSet<>();
            t1.add("foo");
            s1.add(t1); s1.add(t2);
            s2.add(t1); s2.add(t2);
            s1 = t1;
            s2 = t2;
        }

        return serialize(root); // 간결하게 하기 위해 이 메서드의 코드는 생략함
이 객체 그래프는 201개의 HashSet 인스턴스로 구성되며, 그 각각은 3개 이하의 객체 참조를 갖는다. 스트림의 전체 크기는 5,733byte 이지만, 역직렬화는 태양이 불타 식을 때까지도 끝나지 않을 것이다. 문제는 HashSet 인스턴스를 역직렬화하려면 그 원소들의 해시코드를 계산해야 한다는 데 있다. 루트 HashSet에 담긴 두 원소는 각각 다른 HashSet 2개씩을 원소로 갖는 HashSet이다. 그리고 반복문에 의해 이 구조가 깊이 100단계까지 만들어진다. 따라서 이 HashSet을 역직렬화하려면 hashCode 메서드를 2^100번 넘게 호출해야 한다. 역직렬화가 영원히 계속된다는 것도 문제지만, 무언가 잘못되었다는 신호조차 주지 않는다는 것도 큰 문제다. 이 코드는 단 몇 개의 객체만 생성해도 스택 깊이 제한에 걸려버린다.
직렬화 위험을 회피하는 가장 좋은 방법은 아무것도 역직렬화하지 않는 것이다. 대신 JSON(텍스트 기반)이나 프로토콜 버퍼(이진 표현)를 쓰자. 직렬화를 피할 수 없고 역직렬화한 데이터가 안전한지 완전히 확신할 수 없다면 객체 역직렬화 필터링(java.io.ObjectInputFilter)을 사용하자(자바9에 추가되었고, 이전 버전에서도 쓸 수 있도록 이식되었다).
규칙86 : Serializable을 구현할지는 신중히 결정하라
클래스 선언부에 "implements Serializable"만 붙이면 직렬화 가능한 객체를 만드는 클래스를 구현할 수 있을 때도 있다. 너무 간단하기 때문에, 직렬화를 지원하기 위해 프로그래머 입장에서 해야 하는 일이 별로 없다는 잘못된 믿음이 만연해 있지만 사실은 훨씬 더 복잡하다.
Serializable 구현과 관련된 가장 큰 문제는 일단 클래스를 릴리스하고 나면 수정하기 어렵다. Serializable을 구현하면, 그 클래스의 바이트 스트림 인코딩(직렬화 형태)도 공개 API가 된다. 따라서 아무리 잘 설계한 직렬화 형식도 클래스 진화라는 관점에서 보면 족쇄가 될 수 있다.
두 번째 문제는 버그나 보안 취약점이 발생할 가능성이 높아진다. 보통 객체는 생성자를 통해 생성한다. 직렬화는 언어 외적인 객체 생성 메커니즘이다. 기본 동작을 받아들이건 재정의 하건 간에, 역직렬화는 생성자와 동일한 이슈를 갖고 있는 "숨은 생성자"다. 역직렬화 과정에 관계된 생성자가 명시적으로 존재하지 않기 때문에 불변식 훼손이나 불법 접근 문제에 쉽게 노출된다. 기본 직렬화 형태에서는 클래스의 private과 package-private 인스턴스 필드들마저 API로 공개하는 꼴이 된다(캡슐화가 깨진다). 필드로의 접근을 최대한 막아 정보를 은닉하라는 조언도 무력화된다.
세 번째 문제는 새 버전 클래스를 내놓기 위한 테스트 부담이 늘어난다는 것이다. 직렬화 가능 클래스를 수정할 때는, 새 릴리스에서 만들고 직렬화한 객체를 예전 릴리스에서 역직렬화할 수 있는지, 그리고 그 역도 가능한지 검사하는 것이 중요하다.
Serializable 구현 여부는 가볍게 결정할 사안이 아니다 단, 객체를 전송하거나 저장할 때 자바 직렬화를 이용하는 프레임워크용으로 만든 클래스라면 선택의 여지가 없다. Serializable을 반드시 구현해야 하는 다른 클래스의 컴포넌트로 쓰일 클래스도 만찬가지다. 하지만 Serializable 구현에 따르는 비용이 적지 않으니, 클래스를 설계할 때마다 그 이득과 비용을 잘 저울질해야 한다. 역사적으로 BigInteger와 Instant 같은 '값' 클래스와 컬렉션 클래스들은 Serializable을 구현하고, 스레드 풀 처럼 '동작'하는 객체를 표현하는 클래스들은 대부분 Serializable을 구현하지 않았다.
상속을 염두에 두고 설계하는 클래스는 Serializable을 구현하지 않는 것이 바람직하다. 또한 인터페이스는 가급적 Serializable을 상속하지 말아야 한다. 하지만 예를 들어 Serializable을 구현하는 객체만 참여가 가능한 프레임워크가 있을 때, 이런 프레임워크를 이용하려면 클래스나 인터페이스가 Serializable을 구현하거나 계승하도록 해야 할 것이다.
상속용으로 설계된 클래스 중 Serializable을 구현한 예로는 Throwable과 Component가 있다. Throwable은 서버가 RMI를 통해 클라이언트로 예외를 보내기 위해 Serializable을 구현했다. Component는 GUI를 전송하고 저장하고 복원하기 위해 Serializable을 구현했지만 Swing과 AWT가 널리 쓰이던 시절에도 현업에서 이런 용도로는 거의 쓰이지 않았다.
여러분이 작성하는 클래스의 인스턴스 필드가 직렬화와 확장이 모두 가능하다면 주의할 점이 몇 가지 있다. 인스턴스 필드 값 중 불변식을 보장해야 할 게 있다면 반드시 하위 클래스에서 finalize 메서드를 재정의하지 못하게 해야 한다. 즉, finalize 메서드를 자신이 재정의하면서 final로 선언하면 된다. 이렇게 해두지 않으면 finalizer 공격을 당할 수 있다. 마지막으로 인스턴스 필드 중 기본값(정수형은 0, boolean은 false, 객체 참조 타입은 null)으로 초기화되면 위배되는 불변식이 있다면 클래스에 다음의 readObjectNoData 메서드를 반드시 추가해야 한다. 이 메서드는 자바 4에 추가된 것으로, 기존의 직렬화 가능 클래스에 직렬화 가능 상위 클래스를 추가하는 드문 경우를 위한 메서드다.
// 상태가 있고, 확장 가능하고, 직렬화 가능한 클래스용 readObjectNoData 메서드
private void readObjectNoData() throws InvalidObjectException {
  throw new InvalidObjectException("스트림 데이터가 필요합니다");
}
Serializable을 구현하지 않기로 할 때는 한 가지만 주의하면 된다. 상속용 클래스인데 직렬화를 지원하지 않으면 그 하위 클래스에서 직렬화를 지원하려할 때 부담이 늘어난다. 보통은 이런 클래스를 역직렬화하려면 그 상위 클래스는 매개변수가 없는 생성자를 제공해야 하는데 여러분이 이런 생성자를 제공하지 않으면 하위 클래스에서는 어쩔 수 없이 직렬화 프록시 패턴을 사용해야 한다.
// 직렬화가 불가능한 상태유지(stateful) 클래스.
// 하지만 직렬화가 가능한 하위 클래스를 만들 수 있다.
public abstract class AbstractFoo{
  private int x, y; // 상태

  // 아래 enum과 필드는 초기화 과정을 추적하기 위한 것이다.
  private enum State { NEW, INITIALIZING, INITIALIZED };
  private final AtomicReference<State> init = new AtomicReference<State>(State.NEW);

  public AbstractFoo(int x, int y) { initialize(x, y); }

  // 이 생성자와 그 아래 메서드는 하위 클래스의 readObject 메서드가
  // 상태를 초기화할 수 있도록 하기 위한 것이다.
  protected AbstractFoo() { }
  protected final void initialize(int x, int y) {
    if (!init.compareAndSet(State.NEW, State.INITIALIZING))
      throw new IllegalStateException("Already initialized");

    this.x = x;
    this.y = y;

    ... //원래 생성자가 하던 나머지 작업

    init.set(State.INITIALIZED);
  }

  // 이 메서드들은 하위 클래스의 writeObject 메서드에 의해 객체가
  // 수동적으로 직렬화될 수 있도록 내부 상태 정보를 제공하는 역할을 한다.
  protected final int getX() { checkInit(); return x; }
  protected final int getY() { checkInit(); return y; }

  // 모든 public 및 protected 객체 메서드에서 반드시 호출해야 하는 메서드
  private void checkInit() {
    if(init.get() != State.INITIALIZED)
      throw new IllegalStateException("Uninitialized");
  }

  ... // 이하 생략
}
AbstractFoo의 모든 public 및 protected 객체 메서드는 다른 작업을 하기 전에 반드시 checkInit 메서드를 호출해야 한다. 잘못 작성된 하위 클래스가 객체 초기화를 제대로 하지 못한 상태에서 다른 메서드를 호출하면 재빨리, 그리고 깔끔하게 실패하도록 하기 위한 것이다. init 필드가 원자적 참조 필드라는 것에 주의하자. 어떤 악의적 사용자가 오더라도 객체 무결성을 보존할 수 있도록 하기 위한 것이다.
이런 조치가 없었다면? 가령 어떤 스레드가 객체에 initialize를 호출하는 순간에 두 번째 스레드가 그 객체를 사용하려 한다고 해 보자. 그 두 번째 스레드는 상태가 깨진 객체를 이용하게 될 수 있다. compareAndSet을 사용해 enum에 대한 참조를 원자적으로 조작하는 이 패턴은, 다 목적 스레드 안전 상태 기계를 구현하기 좋다. 이 메커니즘을 갖추고 나면, 직렬화 가능 하위 클래스를 구현하는 것은 쉽다.
// 직렬화 불가능 상태유지(stateful) 클래스의 직렬화 가능 하위 클래스
public class Foo extends AbstractFoo implements Serializable{
  private void readObject(ObjectInputStream s)
    throw IOException, ClassNotFountException{
      s.defaultReadObject();

      // 상위 클래스 상태를 수동으로 역직렬화 한 다음 초기화
      int x = s.readInt();
      int y = s.readInt();
      initialize(x, y);
    }

    private void writeObject(ObjectOutputStream s) throws IOException {
      s.defaultWriteObject();

      // 상위 클래스 상태를 수동으로 직렬화
      s.writeInt(getX());
      s.writeInt(getY());
    }

    // 생성자는 이 메커니즘과 상관없음
    public Foo(int x, int y) { super(x, y); }

    private static final long serialVersionUID = 2213124123213123L;
}
내부 클래스는 Serializable을 구현하면 안된다. 내부 클래스에는 바깥 인스턴스의 참조와 유효 범위 안의 지역변수 값들을 저장하기 위해 컴파일러가 생성한 필드들이 자동으로 추가된다. 익명 클래스와 지역 클래스의 이름을 짓는 규칙이 언어 명세에 나와 있지 않듯, 이 필드들이 클래스 정의에 어떻게 추가되는지도 정의되어 있지 않았다. 다시 말해 내부 클래스에 대한 기본 직렬화 형태는 분명하지가 않다. 단 정적 멤버 클래스는 Serializable을 구현해도 된다.
규칙87 : 사용자 지정 직렬화 형식을 사용하면 좋을지 따져 보라
Serializable을 구현한 클래스를 만들면서 기본 직렬화 형식을 그대로 이용하면, 다음번 릴리스때 기존 구현을 빼버리는것이 불가능해진다. 그 직렬화 형식에 영원히 갇혀버리게 되는 것이다. 따라서 어떤 직렬화 형식이 적절할지 따져보지도 않고 기본 직렬화 형식을 그대로 받아들이지 마라.
어떤 객체의 기본 직렬화 형식은 해당 객체가 루트인 객체 그래프의 물리적 표현을 나름 효과적으로 인코딩한 것이다. 다시 말해 객체 안에 담긴 데이터와, 해당 객체를 통해 접근할 수 있는 모든 객체에 담긴 데이터를 기술한다. 또한 이 객체들이 서로 연결된 토폴로지(topology)도 기술한다. 그런데 어떤 객체의 가장 효과적인 직렬화 형식은 해당 객체가 나타내는 논리적 데이터만 담아야 하며, 물리적 표현과는 무관해야 한다. 기본 직렬화 형식은 그 객체의 물리적 표현이 논리적 내용과 동일할 때만 적절하다.
// 기본 직렬화 형식을 그대로 써도 좋은 클래스 후보
public class Name implements Serializable {

    //성(last name) null이 될 수 없다.
    //@Serial
    private final String lastName;

    //이름(first name) null이 될 수 없다.
    //@Serial
    private final String fisrtName;

    //중간 이름(middle name) 없을 때는 null이다.
    //@Serial
    private final String middleName;

    … // 이하 생략
}
논리적으로 말해서 어떤 사람의 이름은 성, 이름, 그리고 중간 이름을 나타내는 문자열 세 개로 구성된다. Name에 선언된 객체 필드들은 그 논리적 내용을 충실히 반영한다. 설사 기본 직렬화 형식이 만족스럽다 하더라도, 불변식이나 보안 조건을 만족시키기 위해서는 readObject 메서드를 구현해야 마땅한 경우도 많다. lastName, fisrtName, middleName은 private 필드임에도 문서화 주석이 달려있다는 것에 주의하자. 이 private 필드들이 pulbic API, 즉 클래스의 직렬화 형식을 규정하기 때문이며, 그래서 반드시 문서화해야 한다. @Serial 태그는 Javadoc 유틸리티에게 직렬화 형식을 다루는 특별한 페이지로 해당 문서를 분리하라는 지시를 내린다.
Name과는 정반대 격인 클래스도 하나 살펴보자. 이 클래스는 문자열의 리스트를 나타낸다.
// 기본 직렬화 형식이 쓸만하지 않은 클래스 사례
public final class StringList implements Serializable {
    private int size = 0;
    private Entry head = null;

    private static class Entry implements Serializable {
        String data;
        Entry next;
        Entry previous;
    }

    …// 이하 생략
}
논리적으로 말해서 이 클래스는 문자열 리스트를 표현한다. 물리적으로 보자면 이 리스트는 이중 연결 리스트다. 기본 직렬화 형태를 그대로 받아들일 경우, 모든 연결 리스트 항목과 항목 간 양방향 연결 구조가 직렬화 형식에 그대로 반영될 것이다. 객체의 물리적 표현 형태가 논리적 내용과 많이 다를 경우 기본 직렬화 형식을 그대로 받아들이면 네 가지 문제가 생기게 된다. 1. 공개 API가 현재 내부 표현 형태에 영원히 종속된다. 2. 너무 많은 공간을 차지하는 문제가 생길 수 있다. 3. 너무 많은 시간을 소비하는 문제가 생길 수 있다. 4. 스팩 오버플로 문제가 생길 수 있다.
StringList의 적절한 직렬화 형식은 그저 리스트에 담기는 문자열의 수 다음에 실제 문자열들이 오는 형태일 것이다. StringList의 논리적 데이터 형태만을 나타내는 형식으로서, 물리적 표현 형태에 대한 세부사항은 제거된 것이다. 아래의 StringList 코드에는 이 직렬화 형식을 구현하는 writeObject와 readObject 메서드가 포함되어 있다.
// 사용자 정의 직렬화 형식을 이용하는 StringList
public final class StringList implements Serializable {
    private transient int size = 0;
    private transient Entry head = null;

    // 더 이상 Serializable일 필요가 없음 ! 
    private static class Entry {
        String data;
        Entry next;
        Entry previous;
    }

    // 주어진 문자열을 리스트에 추가 
    pulbic final void add(String s) { … }

    /**
    * this가 가리키는 {@code StringList} 객체를 직렬화
    *
    *@serialData 리스트의 크기(리스트 내 문자열 개수)가 먼저 기록되고
    *({@code int}), 그 다음에는 모든 문자열({@code String} 각각)이 순서대로 기록된다.
    *
    */
    private void writeObject(ObjectOutputStream s) throws IOException {
        s.defaultWriteObject();
        s.writeInt(size);

        // 순서대로 모든 원소 기록
        for(Entry e = head; e != null; e = e.next)
            s.writeObject(e.data);
    }

    private void readObject(ObjectInputStream s) throws IOException, ClassNotFoundException {
        s.defaultReadObject();
        int numElements = s.readInt();

        // 모든 원소를 읽어 리스트에 저장
        for(int i = 0; i<numElements; i++)
            add((String) s.readObject());
    }

    … // 이하 생략
}
writeObject가 맨 처음으로 defaultWriteObject를 호출하고 있음에 유의하자. readObject가 처음으로 하는 것도 defaultReadObject를 호출하는 것이다. StringList의 모든 필드가 transient임에도 말이다. 객체의 모든 필드가 transient일 때는 defaultWriteObject나 defaultReadObject를 호출하지 않는 것도 기술적으로 가능하긴 하지만 권장하는 사항은 아니다.
어떤 직렬화 형식을 이용하건, 직렬화 가능 클래스를 구현할 때는 직렬 버전 UID를 명시적으로 선언해야 한다. 그렇게 하면 직렬 버전 UID 때문에 생길 수 있는 잠재적 호환성 문제가 사라진다. 성능이 조금 개선되는 효과도 있다. 직렬 버전 UID를 지정하지 않으면 실행시간에 UID를 만드느라 시간이 많이 걸리는 계산을 하게 된다. 직렬 버전 UID를 선언하는 것은 간단하다. 클래스에 아래의 한줄을 추가하기만 하면 된다.
private static final long serialVersionUID = <무작위로 고른 Long 값>;
새 클래스를 만드는 경우에는 위의 <> 자리에 무슨 값을 넣건 상관없다.
규칙88 : readObject 메서드는 방어적으로 구현하라
readObject 메서드가 실질적으로는 public 생성자나 마찬가지고 생성자를 구현할 때와 같은 점에 주의해야 한다. 생성자와 마찬가지로 인자의 유효성을 검사해야 하고 필요하다면 인자를 방어적으로 복사해야 한다. readObject 메서드를 구현할 때 이런 사항들을 망각하면 공격자는 쉽게 클래스의 불변식을 망가뜨릴 수 있게 된다. 간단히 이야기해서, readObject는 바이트 스트림을 인자로 받는 생성자다. 일반적으로 이 바이트 스트림은 정상적인 과정을 통해 만들어진 객체를 직렬화한 결과다. 문제는 인공적으로 만들어진 바이트 스트림을 readObject에 인자로 넘길 때 생긴다. 클래스 불변식을 위반하는 객체를 만들어 낼 수 있게 되는 것이다.
객체를 역으로 직렬화할 때는 클라이언트가 가질 수 없어야 하는 객체 참조를 담은 모든 필드를 방어적으로 복사하도록 해야 한다.
// 방어적 복사와 유효성 검사를 모두 시행하는 readObject 메서드
private void readObject(ObjectInputStream s) throws IOException, ClassNotFoundException {
  s.defaultReadObject();

  // 모든 변경 가능 필드를 방어적으로 복사
  start = new Date(start.getTime());
  end = new Date(end.getTime());

  // 불변식이 만족되는지 검사
  if (start.compareTo(end) > 0)
      throw new InvalidObjectException(start + " after " + end);
}
유효성 검사 이전에 방어적 복사를 시행한다는 점과 final로 선언된 필드에는 방어적 복사를 할 수 없기 때문에 start와 end가 비-final인 것도 주의하자. 릴리즈 1.4부터 방어적 복사 없이도 악의적 객체 참조 공격을 막을 수 있도록 하기 위해 고안된 writeUnshared와 readUnshared 메서드는 사용하지 마라. 필요한 안전성을 제공하지 못한다.
readObject 메서드와 생성자에는 한 가지 유사성이 더 있다. readObject 메서드는 재정의 가능 메서드를 직접적이건 간접적이건 호출해서는 안 된다. 이 규칙을 위반할 경우, 하위 클래스 객체의 상태가 완전히 역직렬화 되기 전에 재정의한 메서드가 실행될 것이며 그 결과로 오류가 발생할 것이다.
요약하자면, readObject 메서드를 구현할 때는 public 생성자를 구현할 때와 같은 마음가짐을 가지라는 것이다.
규칙89 : 개체 통제가 필요하다면 readResolve 대신 enum 자료형을 이용하라
싱글턴 클래스를 만들어도 implements Serializable을 붙이는 순간 이 클래스는 더 이상 싱글턴 클래스가 아니다. 역직렬화되면서 생성된 객체는 초기화될 당시에 만들어진 객체와 다르다. 이때 readResolve를 이용하면 readObject가 만들어낸 객체를 다른 것으로 대체할 수 있다.
// instance control을 위해 readResolve를 활용한 사례
private Object readResolve() {
    //유일한 객체를 반환하도록 하고 여기로 오는 바이트 스트림은 GC 대상이 되도록 한다.
    return INSTANCE;
}
이 메서드는 역으로 직렬화된 객체는 무시하고 클래스가 초기화될 당시에 만들어진 유일한 객체를 반환한다. 사실 instance control을 위해 readResolve를 활용 할 때는 객체 참조 자료형으로 선언된 모든 객체 필드를 반드시 transient로 선언해야 한다.
Enum으로 싱글턴을 구현하면 선언된 상수 이외의 다른 객체는 존재할 수 없다는 확실한 보장이 생긴다.
규칙90 : 직렬화된 객체 대신 직렬화 프락시를 고려해 보라
Serializable 인터페이스를 구현하겠다고 결정을 내리게 되면 버그나 보안 결함이 생길 가능성이 높아진다. 일반 생성자 대신 언어 외적인 메커니즘을 통해 객체를 생성할 수 있게 되기 때문이다. 이런 위험을 줄이기 위한 방법으로 직렬화 프락시 패턴이 있다.
// Period 클래스의 직렬화 프락시
private static class SerializationProxy implements Serializable {
  private final Date start;
  private final Date end;

  SerializationProxy(Period p) {
    this.start = p.start;
    this.end = p.end;
  }

  private static final long serialVersionUID = 2344939929329329L; // 아무 수가 가능 
}
우선 바깥 클래스 객체의 논리적 상태를 간결하게 표현하는 직렬화 가능 클래스를 private static 중첩 클래스로 설계한다. 이 중첩 클래스를 직렬화 프락시라고 부르는데, 바깥 클래스를 인자 자료형으로 사용하는 생성자를 하나만 가진다. 이 생성자는 인자에서 데이터를 복사하기만 한다. 일관성 검사를 할 필요도 없고, 방어적 복사를 할 필요도 없다. 설계상 직렬화 프락시의 기본 직렬화 형식은 바깥 클래스의 완벽한 직렬화 형태다.
// 직렬화 프락시 패턴을 구현하기 위한 writeReplace 메서드
private Object writeReplace() {
  return new SerializationProxy(this);
}
프락시를 추가한 다음 바깥 클래스 아래에 writeReplace 메서드를 구현한다. 이 메서드는 직렬화 프락시가 있는 클래스라면 아무 수정 없이 그대로 사용할 수 있다. 이 메서드가 있으면 직렬화 시스템은 바깥 클래스 객체 대신 SerializationProxy 객체를 직렬화한다. 다시 말해 writeReplace 메서드는 직렬화가 이루어지기 전에 바깥 클래스 객체를 직렬화 프락시 객체로 변환한다.
바깥 클래스로 직렬화된 객체를 악의적으로 만들 수 있기 때문에 readObject 메서드를 추가한다.
// 직렬화 프락시 패턴 구현을 위한 readObject 메서드
private void readObject(ObjectInputStream stream)
  throws InvalidObjectException{
  throw new InvalidObjectException("Proxy required");
}
마지막으로 SerializationProxy 클래스에 자기와 논리적으로 동일한 바깥 클래스 객체를 반환하는 readResolve 메서드를 추가해야 한다. 이 메서드가 있으면 직렬화 시스템은 역직렬화를 끝내자마자 직렬화 프락시 객체를 다시 바깥 클래스 객체로 변환하게 된다.
// Period.SerializationProxy의 readResolve 메서드 
private Object readResolve() {
  return new Period(start, end); // public 생성자 이용
}
마지막으로 직렬화 프락시 패턴은 클라이언트가 확장 할 수 있는 클래스에는 적용할 수 없다.

-->`,r:{minutes:3.09,words:927},y:"a",t:"직렬화"}}],["/java/effective-java/",{loader:()=>r(()=>import("./index.html-gmTK3zUM.js"),__vite__mapDeps([173,1])),meta:{c:["Java"],g:["crashcourse","java","jdk","jdk8"],e:`

<hr>
<!-- https://yangbongsoo.gitbook.io/study/java-effective-java -->

<ul>
<li><a href="/crashcourse/java/effective-java/01-creating-and-destroying-objects.html" target="_blank">객체의 생성과 삭제</a></li>
<li><a href="/crashcourse/java/effective-java/02-methods-common-to-all-objects.html" target="_blank">모든 객체의 공통 메서드</a></li>
<li><a href="/crashcourse/java/effective-java/03-classes-and-interfaces.html" target="_blank">클래스와 인터페이스</a></li>
<li><a href="/crashcourse/java/effective-java/04-generics.html" target="_blank">제네릭</a></li>
<li><a href="/crashcourse/java/effective-java/05-enums-and-annotations.html" target="_blank">열거형(enum)과 어노테이션</a></li>
<li><a href="/crashcourse/java/effective-java/06-lambda-and-stream.html" target="_blank">람다와 스트림</a></li>
<li><a href="/crashcourse/java/effective-java/07-methods.html" target="_blank">메서드</a></li>
<li><a href="/crashcourse/java/effective-java/08-general-programming.html" target="_blank">일반적인 프로그래밍 원칙들</a></li>
<li><a href="/crashcourse/java/effective-java/09-exceptions.html" target="_blank">예외</a></li>
<li><a href="/crashcourse/java/effective-java/10-concurrency.html" target="_blank">병행성</a></li>
<li><a href="/crashcourse/java/effective-java/11-serialization.html" target="_blank">직렬화</a></li>
</ul>`,r:{minutes:.3,words:90},y:"a",t:"Effective Java",i:"fa-brands fa-java"}}],["/java/freecodecamp-quarkus-jpastreamer/01.html",{loader:()=>r(()=>import("./01.html-RuudXbAv.js"),__vite__mapDeps([174,1])),meta:{c:["Java","Quarkus"],g:["crashcourse","freecodecamp","java","jdk","jdk8","stream","quarkus","jpa","jpastreamer"],e:`

<hr>
<h2>Project Setup</h2>
<p>Once you have checked off the list of prerequisites, it's time to create a new Quarkus project. There are multiple ways to do this, but for simplicity, I will use the <a href="https://code.quarkus.io/" target="_blank" rel="noopener noreferrer">Quarkus project configurator</a>. This tool empowers you to quickly assemble a complete build file with the necessary dependencies.</p>`,r:{minutes:5.98,words:1794},y:"a",t:"01. Setup"}}],["/java/freecodecamp-quarkus-jpastreamer/02.html",{loader:()=>r(()=>import("./02.html-BmMRGwfI.js"),__vite__mapDeps([175,1])),meta:{c:["Java","Quarkus"],g:["crashcourse","freecodecamp","java","jdk","jdk8","stream","quarkus","jpa","jpastreamer"],e:`

<hr>
<p>It is now time to look at the application architecture. The objective is to establish endpoints that serve film-related information to clients. For the sake of clarity and separation of concerns, I've chosen to adopt a straightforward Repository Pattern.</p>
<p>Below is a snapshot of how the architectural pieces will fit together when you are done. The Resources class takes on the responsibility of delivering database-derived content to clients. However, this class refrains from conducting the actual database interactions; instead, this task is entrusted to the Repository. This architectural approach neatly segregates the data layer from the other facets of our application.</p>`,r:{minutes:2.15,words:645},y:"a",t:"02. Getting Started"}}],["/java/freecodecamp-quarkus-jpastreamer/03.html",{loader:()=>r(()=>import("./03.html-CF8p0BDM.js"),__vite__mapDeps([176,1])),meta:{c:["Java","Quarkus"],g:["crashcourse","freecodecamp","java","jdk","jdk8","stream","quarkus","jpa","jpastreamer"],e:`

<hr>
<h2>Fetching Films with Java Streams and JPAStreamer</h2>
<p>So far our application has not touched the database, but that is our next move. We start simple and gradually build up Stream queries that are more powerful.</p>
<p>Initiate this process by establishing a dedicated repository package adjacent to the existing model package. Inside this repository section, create a class named FilmRepository. As the name implies, this class will serve as the hub for our database queries. This class needs to be annotated with <code>@ApplicationScoped</code> for it to be injected into your <code>FilmResource</code> later.</p>`,r:{minutes:5.07,words:1520},y:"a",t:"03. JPA & JPAStreamer"}}],["/java/freecodecamp-quarkus-jpastreamer/04.html",{loader:()=>r(()=>import("./04.html-B9Hj-Fea.js"),__vite__mapDeps([177,1])),meta:{c:["Java","Quarkus"],g:["crashcourse","freecodecamp","java","jdk","jdk8","stream","quarkus","jpa","jpastreamer"],e:`

<hr>
<h2>Continuous Testing</h2>
<p>You can configure Quarkus to automatically trigger the execution of your JUnit test suite every time you run your application. Or alternatively, trigger the execution manually by pressing [r] in the Quarkus dev terminal. Before, I understood the value of test-driven-development (TDD) but I have always felt it got in the way of focusing on the business logic as I would only run them occasionally. This does not mean Quarkus writes the tests for you, but they are easy to execute and the dev mode constantly reminds you that they are there.</p>`,r:{minutes:2.5,words:750},y:"a",t:"04. Testing"}}],["/java/freecodecamp-quarkus-jpastreamer/05.html",{loader:()=>r(()=>import("./05.html-Cl8eJNge.js"),__vite__mapDeps([178,1])),meta:{c:["Java","Quarkus"],g:["crashcourse","freecodecamp","java","jdk","jdk8","stream","quarkus","jpa","jpastreamer"],e:`

<hr>
<h2>Running the Debugger with Quarkus Dev Mode</h2>
<p>Frequently, a test may fail without any apparent cause, leaving us perplexed (or perhaps not so much). Ironically, I sometimes find myself attributing my own simple errors to underlying bugs in external libraries. Thankfully, the debugger comes to our rescue, shedding light on where things took a wrong turn and often humbling me by revealing my own mistakes.</p>`,r:{minutes:2.85,words:854},y:"a",t:"05. Others"}}],["/java/freecodecamp-quarkus-jpastreamer/",{loader:()=>r(()=>import("./index.html-6S4LUAMc.js"),__vite__mapDeps([179,1])),meta:{c:["Java","Quarkus"],g:["crashcourse","freecodecamp","java","jdk","jdk8","stream","quarkus","jpa","jpastreamer"],e:`

<hr>
`,r:{minutes:3.21,words:963},y:"a",t:"Java Web App with Quarkus and JPAStreamer",i:"iconfont icon-java"}}],["/java/java-8-in-action/1.html",{loader:()=>r(()=>import("./1.html-DD_He2Za.js"),__vite__mapDeps([180,1])),meta:{c:["Java"],g:["crashcourse","java","jdk","jdk8"],e:`

<hr>
<h2>1장 - 자바8을 눈여겨봐야 하는 이유</h2>
<p><strong>Stream processing</strong>: stream이란 한번에 한 개씩 만들어지는 연속적인 데이터 항목들의 모임을 말한다.</p>
<p><strong>동작 파라미터화</strong>: 메서드를 다른 메서드의 인수로 넘겨주는 기능을 제공한다.</p>
<p><strong>병렬성과 공유 가변 데이터</strong>: 다른 코드와 동시에 실행하더라도 안전하게 실행할 수 있는 코드를 만드려면 공유된 가변 데이터에 접근하지 말아야 한다. 이런 함수를 pure 함수, stateless 함수라 부른다.</p>`,r:{minutes:4.65,words:1394},y:"a",t:"Part 1 기초"}}],["/java/java-8-in-action/2-1.html",{loader:()=>r(()=>import("./2-1.html-C2bxy9TE.js"),__vite__mapDeps([181,1])),meta:{c:["Java"],g:["crashcourse","java","jdk","jdk8"],e:`

<hr>
<h2>4장 - 스트림 소개</h2>
<p>DB에서는 <code>select name from dishes where calorie &lt; 400</code>문장 처럼 선언형으로 연산을 표현할 수 있다(직접 구현할 필요가 없다). SQL 질의 언어에서는 우리가 기대하는 것이 무엇인지 직접 표현할 수 있다.</p>
<h3>스트림이란 무엇인가?</h3>
<p><strong>스트림</strong> 이란 자바 API에 새로 추가된 기능으로, 스트림을 이용하면 선언형(즉, 데이터를 처리하는 임의 구현 코드 대신 질의로 표현할 수 있다)으로 컬렉션 데이터를 처리할 수 있다. 또한 스트림을 이용하면 멀티 스레드 코드를 구현하지 않아도 데이터를 투명하게 병렬로 처리할 수 있다. 다음 예제는 저칼로리의 요리명을 반환하고, 칼로리를 기준으로 요리를 정렬하는 자바7 코드다.</p>`,r:{minutes:4.51,words:1354},y:"a",t:"Part 2-1 함수형 데이터 처리"}}],["/java/java-8-in-action/2-2.html",{loader:()=>r(()=>import("./2-2.html-B_EAJjtl.js"),__vite__mapDeps([182,1])),meta:{c:["Java"],g:["crashcourse","java","jdk","jdk8"],e:`

<hr>
<h2>6장 - 스트림으로 데이터 수집</h2>
<p>4장과 5장에서는 스트림에서 최종 연산 <code>collect</code>를 사용하는 방법을 확인했다. 하지만 toList로 스트림 요소를 항상 리스트로만 변환했다. 이 장에서는 <code>reduce</code>가 그랬던 것처럼 <code>collect</code> 역시 다양한 요소 누적 방식을 인수로 받아서 스트림을 최종 결과로 도출하는 리듀싱 연산을 수행할 수 있음을 설명한다.</p>
<div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 통화별로 트랜잭션을 그룹화한 코드 - 명령형 버전</span>
<span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Currency</span><span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Transaction</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> transactionByCurrencies <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Transaction</span> transaction <span class="token operator">:</span> transactions<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token class-name">Currency</span> currency <span class="token operator">=</span> transaction<span class="token punctuation">.</span><span class="token function">getCurrency</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Transaction</span><span class="token punctuation">&gt;</span></span> transactionForCurrency <span class="token operator">=</span> transactionByCurrencies<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>currency<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">if</span> <span class="token punctuation">(</span>transactionForCurrency <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		transactionForCurrency <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		transactionByCurrencies<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>currency<span class="token punctuation">,</span> transactionForCurrency<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	transactionForCurrency<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>transaction<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:1.63,words:490},y:"a",t:"Part 2-2 함수형 데이터 처리"}}],["/java/java-8-in-action/3-1.html",{loader:()=>r(()=>import("./3-1.html-mo2IazsC.js"),__vite__mapDeps([183,1])),meta:{c:["Java"],g:["crashcourse","java","jdk","jdk8"],e:`

<hr>
<!-- https://yangbongsoo.gitbook.io/study/java8-in-action/part3-1_effective_java8_programming -->
<h2>9장 디폴트 메서드</h2>
<div class="hint-container info">
<p class="hint-container-title">스터디에서 나온 내용</p>
<p>인터페이스를 구현한 클래스에서 바로 사용하기 위해 default 메서드를 사용하면 안된다. 인터페이스를 직접 사용하는 클라이언트가 쉽게 쓰기 위해 사용돼야 한다.</p>
<blockquote>
<p>e.g. <code>list.sort(Compator&lt;? super E&gt; c)</code></p>
</blockquote>
</div>`,r:{minutes:3.72,words:1115},y:"a",t:"Part 3-1 효과적인 자바8 프로그래밍"}}],["/java/java-8-in-action/",{loader:()=>r(()=>import("./index.html-YPooto1D.js"),__vite__mapDeps([184,1])),meta:{c:["Java"],g:["crashcourse","java","jdk","jdk8"],e:`

<!-- https://yangbongsoo.gitbook.io/study/java8-in-action/part1 -->
<hr>

<ul>
<li><a href="/crashcourse/java/java-8-in-action/1.html" target="_blank">1. 기초</a></li>
<li><a href="/crashcourse/java/java-8-in-action/2-1.html" target="_blank">2-1. 함수형 데이터 처리</a></li>
<li><a href="/crashcourse/java/java-8-in-action/2-2.html" target="_blank">2-2. 함수형 데이터 처리</a></li>
<li><a href="/crashcourse/java/java-8-in-action/3-1.html" target="_blank">3-1. 효과적인 자바8 프로그래밍</a></li>
</ul>`,r:{minutes:.26,words:78},y:"a",t:"Java 8 in Action",i:"fa-brands fa-java"}}],["/java/jump-to-spring-boot/01.html",{loader:()=>r(()=>import("./01.html-Cm9YOMeA.js"),__vite__mapDeps([185,1])),meta:{c:["Java","Spring","AWS"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot","aws","aws-ec2"],e:`

<hr>
`,r:{minutes:4.3,words:1289},y:"a",t:"1장 - 스프링부트 개발 준비!"}}],["/java/jump-to-spring-boot/02.html",{loader:()=>r(()=>import("./02.html-Nb75UvNK.js"),__vite__mapDeps([186,1])),meta:{c:["Java","Spring","AWS"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot","aws","aws-ec2"],e:`

<hr>
`,r:{minutes:.28,words:85},y:"a",t:"2장 - 스프링부트의 기본 요소 익히기!"}}],["/java/jump-to-spring-boot/02A.html",{loader:()=>r(()=>import("./02A.html-B3_FFxSg.js"),__vite__mapDeps([187,1])),meta:{c:["Java","Spring","AWS"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot","aws","aws-ec2"],e:`

<hr>
`,r:{minutes:1.09,words:326},y:"a",t:"02A. 스프링부트 프로젝트의 구조"}}],["/java/jump-to-spring-boot/02B.html",{loader:()=>r(()=>import("./02B.html-BJB0Njo0.js"),__vite__mapDeps([188,1])),meta:{c:["Java","Spring","AWS"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot","aws","aws-ec2"],e:`

<hr>
`,r:{minutes:1.09,words:326},y:"a",t:"02B. 컨트롤러 프로젝트의 구조"}}],["/java/jump-to-spring-boot/02C.html",{loader:()=>r(()=>import("./02C.html-2r8Lyfgy.js"),__vite__mapDeps([189,1])),meta:{c:["Java","Spring","AWS"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot","aws","aws-ec2"],e:`

<hr>
`,r:{minutes:2.16,words:649},y:"a",t:"02C. JPA"}}],["/java/jump-to-spring-boot/02D.html",{loader:()=>r(()=>import("./02D.html-DAlsh09d.js"),__vite__mapDeps([190,1])),meta:{c:["Java","Spring","AWS"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot","aws","aws-ec2"],e:`

<hr>
`,r:{minutes:1.88,words:564},y:"a",t:"02D. 엔티티"}}],["/java/jump-to-spring-boot/02E.html",{loader:()=>r(()=>import("./02E.html-IWC6hmyA.js"),__vite__mapDeps([191,1])),meta:{c:["Java","Spring","AWS"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot","aws","aws-ec2"],e:`

<hr>
`,r:{minutes:5.06,words:1519},y:"a",t:"02E. 리포지터리"}}],["/java/jump-to-spring-boot/02F.html",{loader:()=>r(()=>import("./02F.html-C86zl32U.js"),__vite__mapDeps([192,1])),meta:{c:["Java","Spring","AWS"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot","aws","aws-ec2"],e:`

<hr>
`,r:{minutes:.58,words:175},y:"a",t:"02F. 도메인 별로 분류하기"}}],["/java/jump-to-spring-boot/02G.html",{loader:()=>r(()=>import("./02G.html-CqXkklr_.js"),__vite__mapDeps([193,1])),meta:{c:["Java","Spring","AWS"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot","aws","aws-ec2"],e:`

<hr>
`,r:{minutes:2.25,words:676},y:"a",t:"02G. 질문 목록과 템플릿"}}],["/java/jump-to-spring-boot/02H.html",{loader:()=>r(()=>import("./02H.html-m8czuvJR.js"),__vite__mapDeps([194,1])),meta:{c:["Java","Spring","AWS"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot","aws","aws-ec2"],e:`

<hr>
`,r:{minutes:.61,words:183},y:"a",t:"02H. ROOT URL"}}],["/java/jump-to-spring-boot/02I.html",{loader:()=>r(()=>import("./02I.html-C67Lkvjp.js"),__vite__mapDeps([195,1])),meta:{c:["Java","Spring","AWS"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot","aws","aws-ec2"],e:`

<hr>
`,r:{minutes:.84,words:253},y:"a",t:"02I. 서비스"}}],["/java/jump-to-spring-boot/02J.html",{loader:()=>r(()=>import("./02J.html-CNspbEXo.js"),__vite__mapDeps([196,1])),meta:{c:["Java","Spring","AWS"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot","aws","aws-ec2"],e:`

<hr>
`,r:{minutes:2.24,words:672},y:"a",t:"02J. 질문 상세"}}],["/java/jump-to-spring-boot/02K.html",{loader:()=>r(()=>import("./02K.html-DLGfxyu2.js"),__vite__mapDeps([197,1])),meta:{c:["Java","Spring","AWS"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot","aws","aws-ec2"],e:`

<hr>
`,r:{minutes:1.78,words:535},y:"a",t:"02K. 답변 등록"}}],["/java/jump-to-spring-boot/02L.html",{loader:()=>r(()=>import("./02L.html-BFPtNxcD.js"),__vite__mapDeps([198,1])),meta:{c:["Java","Spring","AWS"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot","aws","aws-ec2"],e:`

<hr>
`,r:{minutes:.96,words:289},y:"a",t:"02L. 스태틱 디렉터리와 스타일시트"}}],["/java/jump-to-spring-boot/02M.html",{loader:()=>r(()=>import("./02M.html-DfOm4_wG.js"),__vite__mapDeps([199,1])),meta:{c:["Java","Spring","AWS"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot","aws","aws-ec2"],e:`

<hr>
`,r:{minutes:2.01,words:603},y:"a",t:"02M. 부트스트랩"}}],["/java/jump-to-spring-boot/02N.html",{loader:()=>r(()=>import("./02N.html-DAcWG9rG.js"),__vite__mapDeps([200,1])),meta:{c:["Java","Spring","AWS"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot","aws","aws-ec2"],e:`

<hr>
`,r:{minutes:2.24,words:673},y:"a",t:"02N. 템플릿 상속"}}],["/java/jump-to-spring-boot/02O.html",{loader:()=>r(()=>import("./02O.html-CVyhHUfW.js"),__vite__mapDeps([201,1])),meta:{c:["Java","Spring","AWS"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot","aws","aws-ec2"],e:`

<hr>
`,r:{minutes:4.87,words:1461},y:"a",t:"02O. 질문 등록과 폼"}}],["/java/jump-to-spring-boot/02P.html",{loader:()=>r(()=>import("./02P.html-BEFwN4Mb.js"),__vite__mapDeps([202,1])),meta:{c:["Java","Spring","AWS"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot","aws","aws-ec2"],e:`

<hr>
`,r:{minutes:1.31,words:394},y:"a",t:"02P. 공통 템플릿"}}],["/java/jump-to-spring-boot/03.html",{loader:()=>r(()=>import("./03.html-_UccsSzS.js"),__vite__mapDeps([203,1])),meta:{c:["Java","Spring","AWS"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot","aws","aws-ec2"],e:`

<hr>
`,r:{minutes:.3,words:91},y:"a",t:"3장 - SBB 서비스 개발!"}}],["/java/jump-to-spring-boot/03A.html",{loader:()=>r(()=>import("./03A.html-Bk66qrjo.js"),__vite__mapDeps([204,1])),meta:{c:["Java","Spring","AWS"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot","aws","aws-ec2"],e:`

<hr>
`,r:{minutes:2.68,words:805},y:"a",t:"03A. 내비게이션바"}}],["/java/jump-to-spring-boot/03B.html",{loader:()=>r(()=>import("./03B.html-DMA_h0of.js"),__vite__mapDeps([205,1])),meta:{c:["Java","Spring","AWS"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot","aws","aws-ec2"],e:`

<hr>
`,r:{minutes:3.32,words:997},y:"a",t:"03B. 페이징"}}],["/java/jump-to-spring-boot/03C.html",{loader:()=>r(()=>import("./03C.html-DyFfFu3O.js"),__vite__mapDeps([206,1])),meta:{c:["Java","Spring","AWS"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot","aws","aws-ec2"],e:`

<hr>
`,r:{minutes:.88,words:265},y:"a",t:"03C. 게시물에 일련번호 추가하기"}}],["/java/jump-to-spring-boot/03D.html",{loader:()=>r(()=>import("./03D.html-DvwMW56s.js"),__vite__mapDeps([207,1])),meta:{c:["Java","Spring","AWS"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot","aws","aws-ec2"],e:`

<hr>
`,r:{minutes:.76,words:229},y:"a",t:"03D. 답변 개수 표시"}}],["/java/jump-to-spring-boot/03E.html",{loader:()=>r(()=>import("./03E.html-CChHXJgd.js"),__vite__mapDeps([208,1])),meta:{c:["Java","Spring","AWS"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot","aws","aws-ec2"],e:`

<hr>
`,r:{minutes:1.54,words:461},y:"a",t:"03E. 스프링 시큐리티"}}],["/java/jump-to-spring-boot/03F.html",{loader:()=>r(()=>import("./03F.html-C-gi2XW9.js"),__vite__mapDeps([209,1])),meta:{c:["Java","Spring","AWS"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot","aws","aws-ec2"],e:`

<hr>
`,r:{minutes:3.72,words:1115},y:"a",t:"03F. 회원가입"}}],["/java/jump-to-spring-boot/03G.html",{loader:()=>r(()=>import("./03G.html-CL9ugxNn.js"),__vite__mapDeps([210,1])),meta:{c:["Java","Spring","AWS"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot","aws","aws-ec2"],e:`

<hr>
`,r:{minutes:3.82,words:1145},y:"a",t:"03G. 로그인과 로그아웃"}}],["/java/jump-to-spring-boot/03H.html",{loader:()=>r(()=>import("./03H.html-DQVYFFuA.js"),__vite__mapDeps([211,1])),meta:{c:["Java","Spring","AWS"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot","aws","aws-ec2"],e:`

<hr>
`,r:{minutes:3.46,words:1037},y:"a",t:"03H. 엔티티 변경"}}],["/java/jump-to-spring-boot/03I.html",{loader:()=>r(()=>import("./03I.html-D6sfuQg4.js"),__vite__mapDeps([212,1])),meta:{c:["Java","Spring","AWS"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot","aws","aws-ec2"],e:`

<hr>
`,r:{minutes:1.61,words:482},y:"a",t:"03I. 글쓴이 표시"}}],["/java/jump-to-spring-boot/03J.html",{loader:()=>r(()=>import("./03J.html-vM95o998.js"),__vite__mapDeps([213,1])),meta:{c:["Java","Spring","AWS"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot","aws","aws-ec2"],e:`

<hr>
`,r:{minutes:8.22,words:2467},y:"a",t:"03J. 수정과 삭제"}}],["/java/jump-to-spring-boot/03K.html",{loader:()=>r(()=>import("./03K.html-cmJL1N9c.js"),__vite__mapDeps([214,1])),meta:{c:["Java","Spring","AWS"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot","aws","aws-ec2"],e:`

<hr>
`,r:{minutes:3.03,words:910},y:"a",t:"03K. 추천"}}],["/java/jump-to-spring-boot/03L.html",{loader:()=>r(()=>import("./03L.html-CNwZ2PZu.js"),__vite__mapDeps([215,1])),meta:{c:["Java","Spring","AWS"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot","aws","aws-ec2"],e:`

<hr>
`,r:{minutes:1.55,words:464},y:"a",t:"03L. 앵커"}}],["/java/jump-to-spring-boot/03M.html",{loader:()=>r(()=>import("./03M.html-2yedqq02.js"),__vite__mapDeps([216,1])),meta:{c:["Java","Spring","AWS"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot","aws","aws-ec2"],e:`

<hr>
`,r:{minutes:1.79,words:536},y:"a",t:"03M. 마크다운"}}],["/java/jump-to-spring-boot/03N.html",{loader:()=>r(()=>import("./03N.html-BgwC8m5Z.js"),__vite__mapDeps([217,1])),meta:{c:["Java","Spring","AWS"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot","aws","aws-ec2"],e:`

<hr>
`,r:{minutes:4.73,words:1420},y:"a",t:"03N. 검색"}}],["/java/jump-to-spring-boot/03O.html",{loader:()=>r(()=>import("./03O.html-BSGjgxmO.js"),__vite__mapDeps([218,1])),meta:{c:["Java","Spring","AWS"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot","aws","aws-ec2"],e:`

<hr>
`,r:{minutes:.43,words:128},y:"a",t:"03O. SBB 추가 기능"}}],["/java/jump-to-spring-boot/04.html",{loader:()=>r(()=>import("./04.html-BAo4PWQy.js"),__vite__mapDeps([219,1])),meta:{c:["Java","Spring","AWS"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot","aws","aws-ec2"],e:`

<hr>
`,r:{minutes:.3,words:91},y:"a",t:"4장 - 세상에 선보이는 SBB 서비스!"}}],["/java/jump-to-spring-boot/04A.html",{loader:()=>r(()=>import("./04A.html-Bt0dOEXv.js"),__vite__mapDeps([220,1])),meta:{c:["Java","Spring","AWS"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot","aws","aws-ec2"],e:`

<hr>
`,r:{minutes:.43,words:128},y:"a",t:"4-01. 서버"}}],["/java/jump-to-spring-boot/04B.html",{loader:()=>r(()=>import("./04B.html-tT2c4XCt.js"),__vite__mapDeps([221,1])),meta:{c:["Java","Spring","AWS"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot","aws","aws-ec2"],e:`

<hr>
`,r:{minutes:1.35,words:404},y:"a",t:"4-02. AWS 라이트세일"}}],["/java/jump-to-spring-boot/04C.html",{loader:()=>r(()=>import("./04C.html-mYiFZYK1.js"),__vite__mapDeps([222,1])),meta:{c:["Java","Spring","AWS"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot","aws","aws-ec2"],e:`

<hr>
`,r:{minutes:.7,words:211},y:"a",t:"4-03. 서버 접속 설정"}}],["/java/jump-to-spring-boot/04D.html",{loader:()=>r(()=>import("./04D.html-DQNCF4kY.js"),__vite__mapDeps([223,1])),meta:{c:["☕️Java","🍃Spring","📦AWS"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot","aws","aws-ec2"],e:`

<hr>
`,r:{minutes:1.15,words:345},y:"a",t:"4-04. 서버 접속 프로그램"}}],["/java/jump-to-spring-boot/04E.html",{loader:()=>r(()=>import("./04E.html-DmfFqWx6.js"),__vite__mapDeps([224,1])),meta:{c:["Java","Spring","AWS"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot","aws","aws-ec2"],e:`

<hr>
`,r:{minutes:2.44,words:731},y:"a",t:"4-05. SBB 오픈"}}],["/java/jump-to-spring-boot/04F.html",{loader:()=>r(()=>import("./04F.html-F8R12i7Y.js"),__vite__mapDeps([225,1])),meta:{c:["Java","Spring","AWS"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot","aws","aws-ec2"],e:`

<hr>
`,r:{minutes:1.04,words:313},y:"a",t:"4-06. 서버 스크립트"}}],["/java/jump-to-spring-boot/04G.html",{loader:()=>r(()=>import("./04G.html-Kn-ATgTi.js"),__vite__mapDeps([226,1])),meta:{c:["☕️Java","🍃Spring","📦AWS"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot","aws","aws-ec2"],e:`

<hr>
`,r:{minutes:1.51,words:453},y:"a",t:"4-07. 개발과 서버 환경 분리"}}],["/java/jump-to-spring-boot/04H.html",{loader:()=>r(()=>import("./04H.html-CXDm7fHd.js"),__vite__mapDeps([227,1])),meta:{c:["Java","Spring","AWS"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot","aws","aws-ec2"],e:`

<hr>
`,r:{minutes:1.58,words:473},y:"a",t:"4-08. Nginx"}}],["/java/jump-to-spring-boot/04I.html",{loader:()=>r(()=>import("./04I.html-DByM7qnb.js"),__vite__mapDeps([228,1])),meta:{c:["Java","Spring","AWS"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot","aws","aws-ec2"],e:`

<hr>
`,r:{minutes:1.87,words:560},y:"a",t:"4-09. 로깅"}}],["/java/jump-to-spring-boot/04J.html",{loader:()=>r(()=>import("./04J.html-DuHF1q5t.js"),__vite__mapDeps([229,1])),meta:{c:["Java","Spring","AWS"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot","aws","aws-ec2"],e:`

<hr>
`,r:{minutes:1,words:300},y:"a",t:"4-10. 도메인"}}],["/java/jump-to-spring-boot/04K.html",{loader:()=>r(()=>import("./04K.html-DcUbCYRI.js"),__vite__mapDeps([230,1])),meta:{c:["Java","Spring","AWS"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot","aws","aws-ec2"],e:`

<hr>
`,r:{minutes:1.69,words:506},y:"a",t:"4-11. SSL"}}],["/java/jump-to-spring-boot/04L.html",{loader:()=>r(()=>import("./04L.html-BqU_YnHb.js"),__vite__mapDeps([231,1])),meta:{c:["Java","Spring","AWS"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot","aws","aws-ec2"],e:`

<hr>
`,r:{minutes:1.72,words:516},y:"a",t:"4-12. PostgreSQL"}}],["/java/jump-to-spring-boot/",{loader:()=>r(()=>import("./index.html-Bf6fA0OW.js"),__vite__mapDeps([232,1])),meta:{c:["Java","Spring","AWS"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot"],e:`

<hr>
`,r:{minutes:.72,words:215},y:"a",t:"Jump to Spring Boot",i:"fa-brands fa-envira"}}],["/java/jump-to-spring-boot/a.html",{loader:()=>r(()=>import("./a.html-D8ShJUpm.js"),__vite__mapDeps([233,1])),meta:{c:["Java","Spring","AWS"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot","aws","aws-ec2"],e:`

<hr>
`,r:{minutes:6.37,words:1910},y:"a",t:"A. 부록"}}],["/java/kodeco/247-react-native-tutorial-building-android-apps-with-javascript.html",{loader:()=>r(()=>import("./247-react-native-tutorial-building-android-apps-with-javascript.html-HzDe6bx6.js"),__vite__mapDeps([234,1])),meta:{c:["Java","Kotlin","Android","Gradle"],g:["crashcourse","kodeco","java","kotiln","android","gradle","react","react-native"],e:`

<hr>
`,r:{minutes:3.51,words:1053},y:"a",t:"React Native Tutorial - Building Android Apps with JavaScript"}}],["/java/kodeco/249-gradle-tutorial-for-android-getting-started.html",{loader:()=>r(()=>import("./249-gradle-tutorial-for-android-getting-started.html-DhHm4T5T.js"),__vite__mapDeps([235,1])),meta:{c:["Java","Kotlin","Android","Gradle"],g:["crashcourse","kodeco","java","kotiln","android","gradle"],e:`

<hr>
`,r:{minutes:2.57,words:770},y:"a",t:"Gradle Tutorial for Android - Getting Started"}}],["/java/kodeco/254-getting-started-with-android-wear-with-kotlin.html",{loader:()=>r(()=>import("./254-getting-started-with-android-wear-with-kotlin.html-CYayoxUi.js"),__vite__mapDeps([236,1])),meta:{c:["Java","Kotlin","Android","Gradle"],g:["crashcourse","kodeco","java","kotiln","android","gradle"],e:`

<hr>
`,r:{minutes:15.93,words:4779},y:"a",t:"Getting Started with Android Wear with Kotlin"}}],["/java/kodeco/262-dependency-injection-in-android-with-dagger-2-and-kotlin.html",{loader:()=>r(()=>import("./262-dependency-injection-in-android-with-dagger-2-and-kotlin.html-QykQFdbS.js"),__vite__mapDeps([237,1])),meta:{c:["Java","Kotlin","Android","Gradle"],g:["crashcourse","kodeco","java","kotiln","android","gradle"],e:`

<hr>
`,r:{minutes:8.97,words:2692},y:"a",t:"Dependency Injection in Android with Dagger 2 and Kotlin"}}],["/java/kodeco/272-intermediate-recyclerview-tutorial-with-kotlin.html",{loader:()=>r(()=>import("./272-intermediate-recyclerview-tutorial-with-kotlin.html-doT9R-iu.js"),__vite__mapDeps([238,1])),meta:{c:["Java","Kotlin","Android","Gradle"],g:["crashcourse","kodeco","java","kotiln","android","gradle"],e:`

<hr>
`,r:{minutes:14.36,words:4308},y:"a",t:"Intermediate RecyclerView Tutorial with Kotlin"}}],["/java/kodeco/30067669-documenting-kotlin-code-for-android-using-kdoc-and-dokka.html",{loader:()=>r(()=>import("./30067669-documenting-kotlin-code-for-android-using-kdoc-and-dokka.html-DlyTiQG_.js"),__vite__mapDeps([239,1])),meta:{c:["Java","Kotlin","Android","Gradle"],g:["crashcourse","kodeco","java","kotiln","android","gradle"],e:`

<hr>
`,r:{minutes:15.26,words:4577},y:"a",t:"Documenting Kotlin Code for Android Using KDoc and Dokka"}}],["/java/kodeco/31290959-kotlin-sequences-getting-started.html",{loader:()=>r(()=>import("./31290959-kotlin-sequences-getting-started.html-B7s5CVTw.js"),__vite__mapDeps([240,1])),meta:{c:["Java","Kotlin","Android","Gradle"],g:["crashcourse","kodeco","java","kotiln","android","gradle"],e:`

<hr>
`,r:{minutes:11.95,words:3586},y:"a",t:"Kotlin Sequences - Getting Started"}}],["/java/kodeco/324-viewpager-tutorial-getting-started-in-kotlin.html",{loader:()=>r(()=>import("./324-viewpager-tutorial-getting-started-in-kotlin.html-BA_2z4Y-.js"),__vite__mapDeps([241,1])),meta:{c:["Java","Kotlin","Android","Gradle"],g:["crashcourse","kodeco","java","kotiln","android","gradle"],e:`

<hr>
`,r:{minutes:10.24,words:3071},y:"a",t:"ViewPager Tutorial - Getting Started in Kotlin"}}],["/java/kodeco/523-augmented-reality-in-android-with-google-s-face-api.html",{loader:()=>r(()=>import("./523-augmented-reality-in-android-with-google-s-face-api.html-DTeQXGfS.js"),__vite__mapDeps([242,1])),meta:{c:["Java","Kotlin","Android","Gradle"],g:["crashcourse","kodeco","java","kotiln","android","gradle"],e:`

<hr>
`,r:{minutes:17.07,words:5122},y:"a",t:"Augmented Reality in Android with Google’s Face API"}}],["/java/kodeco/853-couchbase-tutorial-for-android-getting-started.html",{loader:()=>r(()=>import("./853-couchbase-tutorial-for-android-getting-started.html-HpTmqMWP.js"),__vite__mapDeps([243,1])),meta:{c:["Java","Kotlin","Android","Gradle"],g:["crashcourse","kodeco","java","kotiln","android","gradle"],e:`

<hr>
`,r:{minutes:16.72,words:5015},y:"a",t:"Couchbase Tutorial for Android - Getting Started"}}],["/java/kodeco/",{loader:()=>r(()=>import("./index.html-CG1cr8NH.js"),__vite__mapDeps([244,1])),meta:{c:["Java","Kotlin","Android","Gradle"],g:["crashcourse","kodeco","kotiln","android","gradle"],e:`

<hr>
<h2>2023</h2>
`,r:{minutes:43.74,words:13121},y:"a",t:"Kodeco - Android & Kotlin",i:"fa-brands fa-android"}}],["/java/spring-boot-whiteship/01.html",{loader:()=>r(()=>import("./01.html-C3S00bVm.js"),__vite__mapDeps([245,1])),meta:{c:["Java","Spring","Spring Boot"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot"],e:`

<hr>
`,r:{minutes:.82,words:247},y:"a",t:"1. 스프링 부트 시작하기"}}],["/java/spring-boot-whiteship/02.html",{loader:()=>r(()=>import("./02.html-CUbbEd35.js"),__vite__mapDeps([246,1])),meta:{c:["Java","Spring","Spring Boot"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot"],e:`

<hr>
`,r:{minutes:1.71,words:513},y:"a",t:"2. 스프링 부트 원리"}}],["/java/spring-boot-whiteship/03.html",{loader:()=>r(()=>import("./03.html-D_q1sCGm.js"),__vite__mapDeps([247,1])),meta:{c:["Java","Spring","Spring Boot"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot"],e:`

<hr>
`,r:{minutes:4.59,words:1377},y:"a",t:"3. 스프링 부트 활용"}}],["/java/spring-boot-whiteship/04.html",{loader:()=>r(()=>import("./04.html-DByHE44H.js"),__vite__mapDeps([248,1])),meta:{c:["Java","Spring","Spring Boot"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot"],e:`

<hr>
`,r:{minutes:3.94,words:1181},y:"a",t:"4. 스프링 웹 MVC"}}],["/java/spring-boot-whiteship/05.html",{loader:()=>r(()=>import("./05.html-CzkwZ-Vv.js"),__vite__mapDeps([249,1])),meta:{c:["Java","Spring","Spring Boot"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot"],e:`

<hr>
`,r:{minutes:.22,words:65},y:"a",t:"5. 스프링 데이터"}}],["/java/spring-boot-whiteship/06.html",{loader:()=>r(()=>import("./06.html-BnkEdbTC.js"),__vite__mapDeps([250,1])),meta:{c:["Java","Spring","Spring Boot"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot"],e:`

<hr>
`,r:{minutes:.22,words:65},y:"a",t:"6. 스프링 시큐리티"}}],["/java/spring-boot-whiteship/07.html",{loader:()=>r(()=>import("./07.html-CarrWQfm.js"),__vite__mapDeps([251,1])),meta:{c:["Java","Spring","Spring Boot"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot"],e:`

<hr>
`,r:{minutes:.24,words:71},y:"a",t:"7. 스프링 REST 클라이언트"}}],["/java/spring-boot-whiteship/",{loader:()=>r(()=>import("./index.html-DFxh13sp.js"),__vite__mapDeps([252,1])),meta:{c:["Java","Spring","Spring Boot"],g:["crashcourse","java","jdk","jdk8","stream","spring","springframework","springboot"],e:`

<hr>

`,r:{minutes:.6,words:179},y:"a",t:"스프링 부트 개념과 활용",i:"fa-brands fa-envira"}}],["/java/yozm/2457.html",{loader:()=>r(()=>import("./2457.html-DAfgohih.js"),__vite__mapDeps([253,1])),meta:{c:["Java","Kotlin","Intellij Idea","Android"],g:["blog","kotlin","jetbrains","intellij-idea","intellij-idea-plugin","android","android-studio"],e:`

<hr>
`,r:{minutes:2.79,words:838},y:"a",t:"CJ온스타일의 안드로이드 앱 '클린 아키텍처' 도입기"}}],["/java/yozm/2478.html",{loader:()=>r(()=>import("./2478.html-YNXEeNI0.js"),__vite__mapDeps([254,1])),meta:{c:["Java","Kotlin","Algorithms"],g:["blog","kotlin","jetbrains","intellij-idea","algorithms"],e:`

<hr>
`,r:{minutes:1.95,words:584},y:"a",t:"탐욕 알고리즘과 허프만 코딩 구현 방법"}}],["/java/yozm/2499.html",{loader:()=>r(()=>import("./2499.html-BNy7BVcM.js"),__vite__mapDeps([255,1])),meta:{c:["Java","IDE","Code Style","Intellij Idea","Visual Studio Code"],g:["blog","java","jdk","jdk8","google","google-code-style","jetbrains","intellij-idea","windows","vscode","visual-studio-code"],e:`

<hr>
`,r:{minutes:2.11,words:633},y:"a",t:"개발자에게 ‘코드 스타일’ 왜 중요할까?"}}],["/java/yozm/",{loader:()=>r(()=>import("./index.html-Dq4uDg98.js"),__vite__mapDeps([256,1])),meta:{c:["Java","JDK"],g:["blog","java","jdk","jdk8"],e:`

<hr>
`,r:{minutes:.34,words:102},y:"a",t:"요즘 IT 블로그 - Java 관련",i:"fa-brands fa-java"}}],["/js/eloquent-javascript/00.html",{loader:()=>r(()=>import("./00.html-sSF13ifF.js"),__vite__mapDeps([257,1])),meta:{g:["blog","js","javascript"],e:`

<hr>
`,r:{minutes:10.58,words:3175},y:"a",t:"00. Introduction"}}],["/js/eloquent-javascript/01.html",{loader:()=>r(()=>import("./01.html-BmOjxmdB.js"),__vite__mapDeps([258,1])),meta:{g:["blog","js","javascript"],e:`

<hr>
`,r:{minutes:.27,words:80},y:"a",t:"01. Values, Types, and Operators"}}],["/js/eloquent-javascript/02.html",{loader:()=>r(()=>import("./02.html-aGp2JIDO.js"),__vite__mapDeps([259,1])),meta:{g:["blog","js","javascript"],e:`

<hr>
`,r:{minutes:.23,words:68},y:"a",t:"02. Program Structure"}}],["/js/eloquent-javascript/03.html",{loader:()=>r(()=>import("./03.html-WLKLL5Yc.js"),__vite__mapDeps([260,1])),meta:{g:["blog","js","javascript"],e:`

<hr>
`,r:{minutes:.21,words:62},y:"a",t:"03. Functions"}}],["/js/eloquent-javascript/04.html",{loader:()=>r(()=>import("./04.html-DJm7Mcjq.js"),__vite__mapDeps([261,1])),meta:{g:["blog","js","javascript"],e:`

<hr>
`,r:{minutes:.29,words:86},y:"a",t:"04. Data Structures - Objects and Arrays"}}],["/js/eloquent-javascript/05.html",{loader:()=>r(()=>import("./05.html-lMTYEUtV.js"),__vite__mapDeps([262,1])),meta:{g:["blog","js","javascript"],e:`

<hr>
`,r:{minutes:.25,words:74},y:"a",t:"05. Higher-order Functions"}}],["/js/eloquent-javascript/06.html",{loader:()=>r(()=>import("./06.html-CmWuXFqp.js"),__vite__mapDeps([263,1])),meta:{g:["blog","js","javascript"],e:`

<hr>
`,r:{minutes:.29,words:86},y:"a",t:"06. The Secret Life of Objects"}}],["/js/eloquent-javascript/07.html",{loader:()=>r(()=>import("./07.html-Du1iIsQ8.js"),__vite__mapDeps([264,1])),meta:{g:["blog","js","javascript"],e:`

<hr>
`,r:{minutes:.25,words:74},y:"a",t:"07. Project - A Robot"}}],["/js/eloquent-javascript/08.html",{loader:()=>r(()=>import("./08.html-CGCDC10X.js"),__vite__mapDeps([265,1])),meta:{g:["blog","js","javascript"],e:`

<hr>
`,r:{minutes:.25,words:74},y:"a",t:"08. Bugs and Errors"}}],["/js/eloquent-javascript/09.html",{loader:()=>r(()=>import("./09.html-D-GtH5Jt.js"),__vite__mapDeps([266,1])),meta:{g:["blog","js","javascript"],e:`

<hr>
`,r:{minutes:.23,words:68},y:"a",t:"09. Regular Expressions"}}],["/js/eloquent-javascript/10.html",{loader:()=>r(()=>import("./10.html-p-ynmhpT.js"),__vite__mapDeps([267,1])),meta:{g:["blog","js","javascript"],e:`

<hr>
`,r:{minutes:.21,words:62},y:"a",t:"10. Modules"}}],["/js/eloquent-javascript/11.html",{loader:()=>r(()=>import("./11.html-CXJvw1eV.js"),__vite__mapDeps([268,1])),meta:{g:["blog","js","javascript"],e:`

<hr>
`,r:{minutes:.23,words:68},y:"a",t:"11. Asynchronous Programming"}}],["/js/eloquent-javascript/12.html",{loader:()=>r(()=>import("./12.html-fVPZuzvC.js"),__vite__mapDeps([269,1])),meta:{g:["blog","js","javascript"],e:`

<hr>
`,r:{minutes:.27,words:80},y:"a",t:"12. Project - A Programming Language"}}],["/js/eloquent-javascript/13.html",{loader:()=>r(()=>import("./13.html-B4aOHWSn.js"),__vite__mapDeps([270,1])),meta:{g:["blog","js","javascript"],e:`

<hr>
`,r:{minutes:.27,words:80},y:"a",t:"13. JavaScript and the Browser"}}],["/js/eloquent-javascript/14.html",{loader:()=>r(()=>import("./14.html-Bh1Oa6ad.js"),__vite__mapDeps([271,1])),meta:{g:["blog","js","javascript"],e:`

<hr>
`,r:{minutes:.27,words:80},y:"a",t:"14. The Document Object Model"}}],["/js/eloquent-javascript/15.html",{loader:()=>r(()=>import("./15.html-Bxt5BilT.js"),__vite__mapDeps([272,1])),meta:{g:["blog","js","javascript"],e:`

<hr>
`,r:{minutes:.23,words:68},y:"a",t:"15. Handling Events"}}],["/js/eloquent-javascript/16.html",{loader:()=>r(()=>import("./16.html-BjunkQBu.js"),__vite__mapDeps([273,1])),meta:{g:["blog","js","javascript"],e:`

<hr>
`,r:{minutes:.27,words:80},y:"a",t:"16. Project - A Platform Game"}}],["/js/eloquent-javascript/17.html",{loader:()=>r(()=>import("./17.html-Ba0gUbWm.js"),__vite__mapDeps([274,1])),meta:{g:["blog","js","javascript"],e:`

<hr>
`,r:{minutes:.25,words:74},y:"a",t:"17. Drawing on Canvas"}}],["/js/eloquent-javascript/18.html",{loader:()=>r(()=>import("./18.html-B1591Hi6.js"),__vite__mapDeps([275,1])),meta:{g:["blog","js","javascript"],e:`

<hr>
`,r:{minutes:.25,words:74},y:"a",t:"18. HTTP and Forms"}}],["/js/eloquent-javascript/19.html",{loader:()=>r(()=>import("./19.html-ButtbRJL.js"),__vite__mapDeps([276,1])),meta:{g:["blog","js","javascript"],e:`

<hr>
`,r:{minutes:.29,words:86},y:"a",t:"18. Project - A Pixel Art Editor"}}],["/js/eloquent-javascript/20.html",{loader:()=>r(()=>import("./20.html-BGWPCJjE.js"),__vite__mapDeps([277,1])),meta:{g:["blog","js","javascript"],e:`

<hr>
`,r:{minutes:.21,words:62},y:"a",t:"20. Node.js"}}],["/js/eloquent-javascript/21.html",{loader:()=>r(()=>import("./21.html-BAfIRi0y.js"),__vite__mapDeps([278,1])),meta:{g:["blog","js","javascript"],e:`

<hr>
`,r:{minutes:.27,words:80},y:"a",t:"21. Project - Skill-Sharing Website"}}],["/js/eloquent-javascript/",{loader:()=>r(()=>import("./index.html-xWQNBfCA.js"),__vite__mapDeps([279,1])),meta:{c:["JavaScript"],g:["blog","js","javascript"],e:`

<hr>
`,r:{minutes:2.5,words:749},y:"a",t:"Eloquent Javascript",i:"fa-brands fa-js"}}],["/js/learn-ts/",{loader:()=>r(()=>import("./index.html-4erGhHHm.js"),__vite__mapDeps([280,1])),meta:{c:["JavaScript","TypeScript"],g:["blog","js","javascript","ts","typescript"],e:`

<hr>
`,r:{minutes:.77,words:230},y:"a",t:"Learn Typescript",i:"iconfont icon-typescript"}}],["/js/must-know-javascript-api/",{loader:()=>r(()=>import("./index.html-CtMLIAzm.js"),__vite__mapDeps([281,1])),meta:{g:["blog","js","api","broadcast"],e:`

<hr>
<p>Welcome to the Must Know JavaScript API series, this series will learn the JavaScript API with you, so that you can be more proficient in using it like a senior engineer. Let’s start learning together:</p>
`,r:{minutes:.88,words:263},y:"a",t:"Must Know JavaScript API",i:"fa-brands fa-js"}}],["/js/must-know-javascript-api/beacon.html",{loader:()=>r(()=>import("./beacon.html-Co3jXqr3.js"),__vite__mapDeps([282,1])),meta:{g:["blog","js","api","broadcast"],e:`

<hr>
`,r:{minutes:.29,words:87},y:"a",t:"Beacon API"}}],["/js/must-know-javascript-api/broadcast-channel.html",{loader:()=>r(()=>import("./broadcast-channel.html-BwbXog2U.js"),__vite__mapDeps([283,1])),meta:{g:["blog","js","api","broadcast"],e:`

<hr>
`,r:{minutes:3.77,words:1131},y:"a",t:"Broadcast Channel API"}}],["/js/must-know-javascript-api/clipboard.html",{loader:()=>r(()=>import("./clipboard.html-aAj8A-t9.js"),__vite__mapDeps([284,1])),meta:{g:["blog","js","api","broadcast"],e:`

<hr>
`,r:{minutes:3.73,words:1119},y:"a",t:"Clipboard API"}}],["/js/must-know-javascript-api/fetch.html",{loader:()=>r(()=>import("./fetch.html-DhxrQKVn.js"),__vite__mapDeps([285,1])),meta:{g:["blog","js","api","broadcast"],e:`

<hr>
`,r:{minutes:6.29,words:1886},y:"a",t:"Fetch API"}}],["/js/must-know-javascript-api/page-visibility.html",{loader:()=>r(()=>import("./page-visibility.html-CJGQbVTd.js"),__vite__mapDeps([286,1])),meta:{g:["blog","js","api","broadcast"],e:`

<hr>
`,r:{minutes:.32,words:95},y:"a",t:"Page Visibility API"}}],["/js/must-know-javascript-api/resize-observer.html",{loader:()=>r(()=>import("./resize-observer.html-VpOmeWhe.js"),__vite__mapDeps([287,1])),meta:{g:["blog","js","api","broadcast"],e:`

<hr>
`,r:{minutes:4.69,words:1407},y:"a",t:"Resize Observer API"}}],["/js/yozm/2466.html",{loader:()=>r(()=>import("./2466.html-lpeT9ptg.js"),__vite__mapDeps([288,1])),meta:{c:["JavaScript","TypeScript"],g:["blog","js","javascript","ts","typescript"],e:`

<hr>
`,r:{minutes:.23,words:68},y:"a",t:"웹 기반 그래픽 편집기의 구조와 7가지 디자인 패턴 (1)"}}],["/js/yozm/2467.html",{loader:()=>r(()=>import("./2467.html-By7C1P6u.js"),__vite__mapDeps([289,1])),meta:{c:["JavaScript","TypeScript"],g:["blog","js","javascript","ts","typescript"],e:`

<hr>
`,r:{minutes:.23,words:68},y:"a",t:"웹 기반 그래픽 편집기의 구조와 7가지 디자인 패턴 (2)"}}],["/js/yozm/2479.html",{loader:()=>r(()=>import("./2479.html-BTV4rrqh.js"),__vite__mapDeps([290,1])),meta:{c:["JavaScript","TypeScript","React"],g:["blog","js","javascript","ts","typescript","react","reactjs"],e:`

<hr>
`,r:{minutes:1.82,words:547},y:"a",t:"프론트엔드와 SOLID 원칙 살펴보기"}}],["/js/yozm/2483.html",{loader:()=>r(()=>import("./2483.html-BNSSnTHY.js"),__vite__mapDeps([291,1])),meta:{c:["JavaScript","TypeScript","React"],g:["blog","js","javascript","ts","typescript","react","reactjs"],e:`

<hr>
`,r:{minutes:3.93,words:1180},y:"a",t:"프론트엔드 개발자가 알아야 할 ‘유닛 테스트’ 작성법"}}],["/js/yozm/2493.html",{loader:()=>r(()=>import("./2493.html-DWvPzJEg.js"),__vite__mapDeps([292,1])),meta:{c:["JavaScript","TypeScript","React"],g:["blog","js","javascript","ts","typescript","react","reactjs"],e:`

<hr>
`,r:{minutes:1.79,words:536},y:"a",t:"리액트 배칭(Batching)의 모든 것"}}],["/js/yozm/2504.html",{loader:()=>r(()=>import("./2504.html-DGCmokEg.js"),__vite__mapDeps([293,1])),meta:{c:["JavaScript","TypeScript","React"],g:["blog","js","javascript","ts","typescript","react","reactjs"],e:`

<hr>
`,r:{minutes:1.66,words:498},y:"a",t:"SSR 환경(Node.js) 메모리 누수 디버깅 가이드 (1)"}}],["/js/yozm/2505.html",{loader:()=>r(()=>import("./2505.html-C_NCAvF4.js"),__vite__mapDeps([294,1])),meta:{c:["JavaScript","TypeScript","React"],g:["blog","js","javascript","ts","typescript","react","reactjs"],e:`

<hr>
`,r:{minutes:1.58,words:475},y:"a",t:"SSR 환경(Node.js) 메모리 누수 디버깅 가이드 (2)"}}],["/js/yozm/2511.html",{loader:()=>r(()=>import("./2511.html-BhAlWF9B.js"),__vite__mapDeps([295,1])),meta:{c:["JavaScript","TypeScript","Vue","Next.js"],g:["blog","js","javascript","ts","typescript","vue","vuejs","vercel","nextjs"],e:`

<hr>
`,r:{minutes:1.46,words:438},y:"a",t:"Vue+express에서 Next.js로, '숨고'의 마이그레이션 (1,2)"}}],["/js/yozm/2512.html",{loader:()=>r(()=>import("./2512.html-D4gjoJBh.js"),__vite__mapDeps([296,1])),meta:{c:["JavaScript","TypeScript","Vue","Next.js"],g:["blog","js","javascript","ts","typescript","vue","vuejs","vercel","nextjs"],e:`

<hr>
`,r:{minutes:.41,words:123},y:"a",t:"Vue+express에서 Next.js로, '숨고'의 마이그레이션 (2)"}}],["/js/yozm/",{loader:()=>r(()=>import("./index.html-CWdM73oq.js"),__vite__mapDeps([297,1])),meta:{c:["JavaScript","TypeScript","React"],g:["blog","js","javascript","ts","typescript","react","reactjs"],e:`

<hr>
`,r:{minutes:.65,words:195},y:"a",t:"요즘 IT 블로그 - Javascript 관련",i:"fa-brands fa-node-js"}}],["/misc/colt-steele-mastering-css-grid/01-css-grid-basics.html",{loader:()=>r(()=>import("./01-css-grid-basics.html-_r6uW9zH.js"),__vite__mapDeps([298,1])),meta:{c:["CSS"],g:["crashcourse","colt-steele","css","grid"],e:`

<hr>
<h2>01. Enabling CSS Grid</h2>
`,r:{minutes:10.52,words:3155},y:"a",t:"01. CSS Grid Basics"}}],["/misc/colt-steele-mastering-css-grid/02-units-and-utilities.html",{loader:()=>r(()=>import("./02-units-and-utilities.html-BG3-hg-8.js"),__vite__mapDeps([299,1])),meta:{c:["CSS"],g:["crashcourse","colt-steele","css","grid"],e:`

<hr>
<h2>01. Using Percentage Units</h2>
<hr>
<h2>02. Simplify Grid Layouts with Fraction Units</h2>
<hr>
<h2>03. Implement a Layout with Fractional Units</h2>
<hr>
<h2>04. Mixing Fractions and Pixels</h2>
<hr>
<h2>05. Simplify Layout Definitions with repeat</h2>
<hr>
<h2>06. Implement a Checkerboard Layout</h2>`,r:{minutes:.41,words:122},y:"a",t:"02. Units and Utilities"}}],["/misc/colt-steele-mastering-css-grid/03-positioning-elements-by-lines.html",{loader:()=>r(()=>import("./03-positioning-elements-by-lines.html-d_HxLm0n.js"),__vite__mapDeps([300,1])),meta:{c:["CSS"],g:["crashcourse","colt-steele","css","grid"],e:`

<hr>
`,r:{minutes:.24,words:71},y:"a",t:"03. Positioning Elements by Lines"}}],["/misc/colt-steele-mastering-css-grid/04-grid-areas.html",{loader:()=>r(()=>import("./04-grid-areas.html-C8QUW4aV.js"),__vite__mapDeps([301,1])),meta:{c:["CSS"],g:["crashcourse","colt-steele","css","grid"],e:`

<hr>
`,r:{minutes:.2,words:61},y:"a",t:"04. Grid Areas"}}],["/misc/colt-steele-mastering-css-grid/05-the-implicit-grid.html",{loader:()=>r(()=>import("./05-the-implicit-grid.html-CheXMMbM.js"),__vite__mapDeps([302,1])),meta:{c:["CSS"],g:["crashcourse","colt-steele","css","grid"],e:`

<hr>
`,r:{minutes:.22,words:66},y:"a",t:"05. The Implicit Grid"}}],["/misc/colt-steele-mastering-css-grid/06-creating-responsive-grids.html",{loader:()=>r(()=>import("./06-creating-responsive-grids.html-CWM6xfkw.js"),__vite__mapDeps([303,1])),meta:{c:["CSS"],g:["crashcourse","colt-steele","css","grid"],e:`

<hr>
`,r:{minutes:.22,words:66},y:"a",t:"06. Creating Responsive Grids"}}],["/misc/colt-steele-mastering-css-grid/07-building-an-example-layout.html",{loader:()=>r(()=>import("./07-building-an-example-layout.html-Cw9gVSRm.js"),__vite__mapDeps([304,1])),meta:{c:["CSS"],g:["crashcourse","colt-steele","css","grid"],e:`

<hr>
`,r:{minutes:.24,words:71},y:"a",t:"07. Building an Example Layout"}}],["/misc/colt-steele-mastering-css-grid/",{loader:()=>r(()=>import("./index.html-pr0u2qlx.js"),__vite__mapDeps([305,1])),meta:{c:["CSS"],g:["crashcourse","colt-steele","css","grid"],e:`

<hr>
<figure><img src="https://www.coltsteele.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdwppkb069%2Fimage%2Fupload%2Fv1684239486%2Fcss-grid-tutorial_dfsfgn.png&amp;w=1080&amp;q=100" alt="Mastering CSS Grid" tabindex="0" loading="lazy"><figcaption>Mastering CSS Grid</figcaption></figure>`,r:{minutes:1.51,words:453},y:"a",t:"Colt Steele - Mastering CSS Grid",i:"fa-brands fa-css3-alt"}}],["/misc/llm-generative-ai-for-beginners/00-course-setup.html",{loader:()=>r(()=>import("./00-course-setup.html-DGCKJy5S.js"),__vite__mapDeps([306,1])),meta:{c:["LLM"],g:["crashcourse","microsoft","llm","ai","generative-ai"],e:`

<hr>
`,r:{minutes:4.64,words:1392},y:"a",t:"00. Course Introduction - How to Take This Course"}}],["/misc/llm-generative-ai-for-beginners/01-introduction-to-genai.html",{loader:()=>r(()=>import("./01-introduction-to-genai.html-DlISkp44.js"),__vite__mapDeps([307,1])),meta:{c:["LLM"],g:["crashcourse","microsoft","llm","ai","generative-ai"],e:`

<hr>
`,r:{minutes:7.4,words:2220},y:"a",t:"01. Introduction to Generative AI and LLMs"}}],["/misc/llm-generative-ai-for-beginners/02-exploring-and-comparing-different-llms.html",{loader:()=>r(()=>import("./02-exploring-and-comparing-different-llms.html-9Gpd483S.js"),__vite__mapDeps([308,1])),meta:{c:["LLM"],g:["crashcourse","microsoft","llm","ai","generative-ai"],e:`

<hr>
`,r:{minutes:9.84,words:2952},y:"a",t:"02. Exploring and comparing different LLMs"}}],["/misc/llm-generative-ai-for-beginners/",{loader:()=>r(()=>import("./index.html-BDW35BbN.js"),__vite__mapDeps([309,1])),meta:{c:["LLM"],g:["crashcourse","microsoft","llm","ai","generative-ai","jupyter-notebook"],e:`

<hr>
`,r:{minutes:3.58,words:1075},y:"a",t:"Microsoft - Generative AI for Beginners",i:"fas fa-brain"}}],["/misc/oracle-sql-db-tuning/01a.html",{loader:()=>r(()=>import("./01a.html-CVustPdz.js"),__vite__mapDeps([310,1])),meta:{c:["🙆‍♂️Oracle DB"],g:["crashcourse","oracle","oracle-db","oracle-sql"],e:`

<hr>
<h2>⚙️설치</h2>
<ul>
<li><a href="http://www.oracle.com/technetwork/database/database-technologies/express-edition/downloads/index.html" target="_blank" rel="noopener noreferrer">Oracle XE 다운로드 / 설치</a></li>
<li><a href="http://www.oracle.com/technetwork/developer-tools/sql-developer/downloads/index.html" target="_blank" rel="noopener noreferrer">Oracle SQL Developer 설치</a></li>
</ul>`,r:{minutes:.61,words:183},y:"a",t:"01A"}}],["/misc/oracle-sql-db-tuning/01b.html",{loader:()=>r(()=>import("./01b.html-DfdclWQo.js"),__vite__mapDeps([311,1])),meta:{c:["🙆‍♂️Oracle DB"],g:["crashcourse","oracle","oracle-db","oracle-sql"],e:`

<hr>
<h2>기본 Architecture</h2>
<div class="hint-container info">
<p class="hint-container-title">오라클은 데이터베이스와 이를 액세스하는 프로세스 사이에 메모리 캐시 영역(SGA)이 있다.</p>
<figure><img src="https://www.ibm.com/developerworks/data/library/techarticle/dm-0401gupta/fig9.gif" alt="0F" tabindex="0" loading="lazy"><figcaption>0F</figcaption></figure>
<ul>
<li>디스크 I/O 에 비해 메모리 캐시 I/O 는 매우 빠르다.</li>
<li>많은 프로세스가 동시에 데이터를 액세스 하기 때문에 사용자 데이터를 보호하는 Lock 과 공유 메모리 영역인 SGA 에 위치한 데이터 구조 액세스를 직렬화 하기 위한 Latch도 필요.</li>
<li>오라클은 블록 단위로 I/O 하며, DBWR/CKPT 가 주기적으로 캐시-데이터파일 동기화 수행.</li>
</ul>
</div>`,r:{minutes:2.51,words:753},y:"a",t:"01B"}}],["/misc/oracle-sql-db-tuning/01c.html",{loader:()=>r(()=>import("./01c.html-B93QrOp9.js"),__vite__mapDeps([312,1])),meta:{c:["🙆‍♂️Oracle DB"],g:["crashcourse","oracle","oracle-db","oracle-sql"],e:`

<hr>
<h2>Auto Trace</h2>
<h3>개요</h3>
<p>SQL 수행 시 실제 일량 측정 및 튜닝하는데 유용한 정보들을 많이 포함하는 도구</p>
<h3>AutoTrace 옵션</h3>
<blockquote>
<p>아래와 같은 옵션에 따라 필요한 부분만 출력해 볼 수 있음</p>
</blockquote>
<ol>
<li><code>set autotrace on</code>: SQL을 실행하고 그결과와 함께 실행 계획 및 실행통계를 출력</li>
<li><code>set autotrace on explain</code>: SQL을 실행하고 그결과와 함께 실행 계획을 출력</li>
<li><code>set autotrace on statistics</code>: SQL을 실행하고 그결과와 함께 실행통계를 출력</li>
<li><code>set autotrace traceonly</code>: SQL을 실행하지만 그 결과는 출력하지 않고, 실행계획과 실행통계만을 출력</li>
<li><code>set autotrace traceonly explain</code>: SQL을 실행하지않고 실행계획만을 출력</li>
<li><code>set autotrace traceonly statistics</code>: SQL을 실행하지만 그 결과는 출력하지 않고, 실행통계만을 출력</li>
</ol>`,r:{minutes:.74,words:222},y:"a",t:"01C"}}],["/misc/oracle-sql-db-tuning/01d.html",{loader:()=>r(()=>import("./01d.html-BDEkLgAl.js"),__vite__mapDeps([313,1])),meta:{c:["🙆‍♂️Oracle DB"],g:["crashcourse","oracle","oracle-db","oracle-sql"],e:`

<hr>
<h2>인덱스 기본 원리</h2>
<p>B*Tree 인덱스를 정상적으로 사용하려면 범위 스캔 시작지점을 찾기 위해 루트 블록부터 리프블록까지의 수직적 탐색 과정을 거쳐야 함</p>
<h3>인덱스 사용이 불가능 하거나 범위 스캔이 불가능한 경우</h3>
<ul>
<li>정상적인 인덱스 범위 스캔이 불가능한 경우(Index Full Scan은 가능)
<ul>
<li>인덱스 컬럼을 조건절에서 가공: <code>WHERE SUBSTR(업체명, 1, 2) = '대한'</code></li>
<li>부정형 비교: <code>WHERE 직업 &lt;&gt; '학생'</code></li>
<li><code>IS NOT NULL</code> 조건도 부정형 비교에 해당: <code>WHERE 부서코드 IS NOT NULL</code>
<ul>
<li>'부서코드'에 단일 컬럼 인덱스가 존재한다면 인덱스 전체 스캔을 통해 얻은 레코드는 모두 '<code>부서코드 IS NOT NULL</code>' 조건을 만족.</li>
</ul>
</li>
</ul>
</li>
<li>인덱스 사용이 불가능한 경우
<ul>
<li><code>IS NULL</code> 조건만으로 검색할 때: <code>where 연락처 is null</code>
<ul>
<li>예외적으로 해당 컬럼이 <code>not null</code> 제약이 있을 경우 Table Full Scan을 피하기 위해 사용.</li>
</ul>
</li>
<li><code>IS NULL</code> 조건을 사용하더라도 다른 인덱스 구성 컬럼에 <code>is null</code> 이외의 조건식이 하나라도 있으면 Index Range Scan 가능 (인덱스 선두 컬럼이 조건걸에 누락되지 않아야 한다) <code>emp_idx : job + deptno where job is null and deptno = 20</code></li>
</ul>
</li>
</ul>`,r:{minutes:.81,words:242},y:"a",t:"01D"}}],["/misc/oracle-sql-db-tuning/02a.html",{loader:()=>r(()=>import("./02a.html-CNeeaFH5.js"),__vite__mapDeps([314,1])),meta:{c:["🙆‍♂️Oracle DB"],g:["crashcourse","oracle","oracle-db","oracle-sql"],e:`

<hr>
<h2>용어</h2>
<ul>
<li>RBO (Rule-Based Optimizer)</li>
<li>CBO (Cost-based Optimizer)</li>
</ul>
<hr>
<h2>Index 관련 자료</h2>
<ul>
<li>https://use-the-index-luke.com/</li>
<li>http://studybyyourself.com/seminar/sql/course/?lang=en</li>
<li>https://docs.oracle.com/cd/B10501_01/server.920/a96533/optimops.htm</li>
<li>https://oracle-base.com/articles/misc/cost-based-optimizer-and-database-statistics</li>
<li>https://www.siue.edu/~dbock/cmis565/module12-indexes.htm</li>
<li>http://www.dba-oracle.com/art_9i_indexing.htm</li>
<li>http://www.remote-dba.net/t_op_sql_btree_indexes.htm</li>
<li>https://www.morganslibrary.org/reference/indexes.html</li>
<li>https://dev.to/databasestar/a-guide-to-indexes-in-oracle</li>
<li>https://www.1keydata.com/sql/sql-index.html</li>
<li>https://www.tutorialspoint.com/sql/sql-indexes.htm</li>
<li>https://d2.naver.com/helloworld/1155</li>
<li>https://www.geeksforgeeks.org/sql-indexes/</li>
<li>http://www.dba-oracle.com/t_reverse_key_indexes_dml_insert.htm</li>
<li>http://wiki.gurubee.net/pages/viewpage.action?pageId=26741180</li>
<li>https://richardfoote.wordpress.com/2008/01/14/introduction-to-reverse-key-indexes-part-i/</li>
<li>http://wiki.gurubee.net/pages/viewpage.action?pageId=26741180</li>
</ul>`,r:{minutes:1.16,words:348},y:"a",t:"02A"}}],["/misc/oracle-sql-db-tuning/03a.html",{loader:()=>r(()=>import("./03a.html-CD3DqWpt.js"),__vite__mapDeps([315,1])),meta:{c:["🙆‍♂️Oracle DB"],g:["crashcourse","oracle","oracle-db","oracle-sql"],e:`

<hr>
<h2>Hint</h2>
<h3>기본 사용예</h3>
<div class="language-sql" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token comment">/*+ INDEX(idx_col1) */</span> 
  id<span class="token punctuation">,</span> password<span class="token punctuation">,</span> name
<span class="token keyword">FROM</span> 
  emp<span class="token punctuation">;</span>

<span class="token keyword">SELECT</span> <span class="token comment">/*+ ORDERED  INDEX(b idx_col1) */</span> 
  id<span class="token punctuation">,</span> password<span class="token punctuation">,</span> name
<span class="token keyword">FROM</span>
  emp a<span class="token punctuation">,</span> depart b
</code></pre></div>`,r:{minutes:1.18,words:355},y:"a",t:"03A"}}],["/misc/oracle-sql-db-tuning/03b.html",{loader:()=>r(()=>import("./03b.html-DYiK_ex7.js"),__vite__mapDeps([316,1])),meta:{c:["🙆‍♂️Oracle DB"],g:["crashcourse","oracle","oracle-db","oracle-sql"],e:`

<hr>
<h2>trace</h2>
<h3>1. 테스트 테이블 생성</h3>
<div class="language-sql" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> big_table <span class="token keyword">AS</span> 
<span class="token keyword">SELECT</span> 
  <span class="token operator">*</span> 
<span class="token keyword">FROM</span> dba_tables<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> <span class="token keyword">level</span> <span class="token keyword">FROM</span> DUAL <span class="token keyword">CONNECT</span> <span class="token keyword">BY</span> <span class="token keyword">level</span> <span class="token operator">&lt;=</span> <span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token keyword">WHERE</span> <span class="token number">1</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
</code></pre></div>`,r:{minutes:1.01,words:302},y:"a",t:"03B"}}],["/misc/oracle-sql-db-tuning/03c.html",{loader:()=>r(()=>import("./03c.html-B99sBED6.js"),__vite__mapDeps([317,1])),meta:{c:["🙆‍♂️Oracle DB"],g:["crashcourse","oracle","oracle-db","oracle-sql"],e:`

<hr>
<h2>Partitioning</h2>
<h3>Range Partitioning</h3>
<blockquote>
<p>typically by date</p>
</blockquote>
<div class="language-sql" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> 주문<span class="token punctuation">(</span>주문번호 NUMBER<span class="token punctuation">,</span> 주문일자 VARCHAR2<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 고객 ID VARCHAR2<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>
<span class="token keyword">PARTITION</span> <span class="token keyword">BY</span> RANGE<span class="token punctuation">(</span>주문일자<span class="token punctuation">)</span> <span class="token punctuation">(</span>
	<span class="token keyword">PARTITION</span> P2009_Q1 <span class="token keyword">VALUES</span> LESS THAN <span class="token punctuation">(</span><span class="token string">'20090401'</span><span class="token punctuation">)</span>
<span class="token punctuation">,</span>	<span class="token keyword">PARTITION</span> P2009_Q2 <span class="token keyword">VALUES</span> LESS THAN <span class="token punctuation">(</span><span class="token string">'20090701'</span><span class="token punctuation">)</span>
<span class="token punctuation">,</span>	<span class="token keyword">PARTITION</span> P2009_Q3 <span class="token keyword">VALUES</span> LESS THAN <span class="token punctuation">(</span><span class="token string">'20091001'</span><span class="token punctuation">)</span>
<span class="token punctuation">,</span>	<span class="token keyword">PARTITION</span> P2009_Q4 <span class="token keyword">VALUES</span> LESS THAN <span class="token punctuation">(</span><span class="token string">'20100101'</span><span class="token punctuation">)</span>
<span class="token punctuation">,</span>	<span class="token keyword">PARTITION</span> P2010_Q1 <span class="token keyword">VALUES</span> LESS THAN <span class="token punctuation">(</span><span class="token string">'20090701'</span><span class="token punctuation">)</span>
<span class="token punctuation">,</span>	<span class="token keyword">PARTITION</span> P9999_MX <span class="token keyword">VALUES</span> LESS THAN <span class="token punctuation">(</span>MAXVALUE<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,r:{minutes:.43,words:129},y:"a",t:"03C"}}],["/misc/oracle-sql-db-tuning/03d.html",{loader:()=>r(()=>import("./03d.html-BanzJEqm.js"),__vite__mapDeps([318,1])),meta:{c:["🙆‍♂️Oracle DB"],g:["crashcourse","oracle","oracle-db","oracle-sql"],e:`
<h2>JOIN</h2>
<h3>방식</h3>
<ul>
<li>
<h4>NESTED LOOP JOIN</h4>
</li>
<li>
<h4>SORT MERGE JOIN</h4>
</li>
<li>
<h4>HASH JOIN</h4>
</li>
</ul>
<h3>OUTER JOIN</h3>
<h3>NESTED LOOP JOIN</h3>
<ul>
<li>SQL 문</li>
</ul>
<div class="language-sql" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> A<span class="token punctuation">.</span>DNAME<span class="token punctuation">,</span> B<span class="token punctuation">.</span>ENAME<span class="token punctuation">,</span> B<span class="token punctuation">.</span>SAL
  <span class="token keyword">FROM</span> EMP B<span class="token punctuation">,</span> DEPT A
 <span class="token keyword">WHERE</span> A<span class="token punctuation">.</span>DEPTNO <span class="token operator">=</span> B<span class="token punctuation">.</span>DEPTNO
   <span class="token operator">AND</span> B<span class="token punctuation">.</span>SAL <span class="token operator">&gt;</span> <span class="token number">200</span>
   <span class="token operator">AND</span> A<span class="token punctuation">.</span>LOCATION <span class="token operator">=</span> <span class="token string">'DALLAS'</span>
</code></pre></div>`,r:{minutes:.56,words:168},y:"a",t:"03D"}}],["/misc/oracle-sql-db-tuning/",{loader:()=>r(()=>import("./index.html-a8txw3vM.js"),__vite__mapDeps([319,1])),meta:{c:["Oracle DB"],g:["crashcourse","oracle","oracle-db","oracle-sql"],e:`
<div class="hint-container tip">
<p class="hint-container-title">NOTE</p>
<p>{{ $frontmatter.description }} 관련 정리내용입니다.</p>
</div>
<hr>
<h2>학습목표</h2>
<ul>
<li>데이터베이스 성능 상의 문제점 분석</li>
<li>성능개선 목표 설정 및 수행</li>
<li>방법의 정의,&nbsp;성능개선 결과를 정량적 평가</li>
<li>각 단계별 산출물 및 수행 활동을 규정 방법 공부</li>
</ul>
<hr>
`,r:{minutes:.18,words:53},y:"a",t:"DB Server 성능 향상, 분석 및 튜닝 전문가 향상과정",i:"fas fa-database"}}],["/php/three-min-summary/08-final-note.html",{loader:()=>r(()=>import("./08-final-note.html-1RENAFLL.js"),__vite__mapDeps([320,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.42,words:127},y:"a",t:"08. 마치면서",i:"fa-brands fa-php"}}],["/php/three-min-summary/",{loader:()=>r(()=>import("./index.html-CbUUhJJP.js"),__vite__mapDeps([321,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:1.17,words:351},y:"a",t:"PHP 3분 핵심 요약집",i:"fa-brands fa-php"}}],["/python/finance-w-python/01.html",{loader:()=>r(()=>import("./01.html-C11c3Mhl.js"),__vite__mapDeps([322,1])),meta:{c:["Python"],g:["crashcourse","python","py","google","google-colab","jupyter-notebook","numpy","pandas","ipython"],e:`

<hr>
`,r:{minutes:1.98,words:593},y:"a",t:"01. 실습 환경 준비하기"}}],["/python/finance-w-python/02.html",{loader:()=>r(()=>import("./02.html-ByP6PsYp.js"),__vite__mapDeps([323,1])),meta:{c:["Python"],g:["crashcourse","python","py","google","google-colab","jupyter-notebook","numpy","pandas","ipython"],e:`

<hr>
`,r:{minutes:6.05,words:1816},y:"a",t:"02. 파이썬 기본 문법"}}],["/python/finance-w-python/03.html",{loader:()=>r(()=>import("./03.html-DBuym13U.js"),__vite__mapDeps([324,1])),meta:{c:["Python"],g:["crashcourse","python","py","google","google-colab","jupyter-notebook","numpy","pandas","ipython"],e:`

<hr>
`,r:{minutes:7.2,words:2159},y:"a",t:"03. 파이썬을 이용한 날짜와 시간 다루기"}}],["/python/finance-w-python/04.html",{loader:()=>r(()=>import("./04.html-DB5R9evk.js"),__vite__mapDeps([325,1])),meta:{c:["Python"],g:["crashcourse","python","py","google","google-colab","jupyter-notebook","numpy","pandas","ipython"],e:`

<hr>
`,r:{minutes:7.39,words:2218},y:"a",t:"04. 판다스 데이터프레임 기초 이해"}}],["/python/finance-w-python/05.html",{loader:()=>r(()=>import("./05.html--xbdfX1B.js"),__vite__mapDeps([326,1])),meta:{c:["Python"],g:["crashcourse","python","py","google","google-colab","jupyter-notebook","numpy","pandas","ipython"],e:`

<hr>
`,r:{minutes:2.5,words:750},y:"a",t:"05. 웹 스크래핑 기초 익히기"}}],["/python/finance-w-python/06.html",{loader:()=>r(()=>import("./06.html-C5GqUUea.js"),__vite__mapDeps([327,1])),meta:{c:["Python"],g:["crashcourse","python","py","google","google-colab","jupyter-notebook","numpy","pandas","ipython"],e:`

<hr>
`,r:{minutes:2.14,words:642},y:"a",t:"06. 웹 스크래핑 실습 - 종목의 캔들차트"}}],["/python/finance-w-python/07.html",{loader:()=>r(()=>import("./07.html-B0LSI0dH.js"),__vite__mapDeps([328,1])),meta:{c:["Python"],g:["crashcourse","python","py","google","google-colab","jupyter-notebook","numpy","pandas","ipython"],e:`

<hr>
`,r:{minutes:.23,words:69},y:"a",t:"07. 웹 스크래핑 실습 - 금융 뉴스 텍스트 분석"}}],["/python/finance-w-python/08.html",{loader:()=>r(()=>import("./08.html-CXHGARbX.js"),__vite__mapDeps([329,1])),meta:{c:["Python"],g:["crashcourse","python","py","google","google-colab","jupyter-notebook","numpy","pandas","ipython"],e:`

<hr>
`,r:{minutes:.23,words:69},y:"a",t:"08. 회귀 분석과 상관 관계 분석"}}],["/python/finance-w-python/09.html",{loader:()=>r(()=>import("./09.html-BEABMaLT.js"),__vite__mapDeps([330,1])),meta:{c:["Python"],g:["crashcourse","python","py","google","google-colab","jupyter-notebook","numpy","pandas","ipython"],e:`

<hr>
`,r:{minutes:.23,words:69},y:"a",t:"09. 머신 러닝"}}],["/python/finance-w-python/10.html",{loader:()=>r(()=>import("./10.html-BN2gkF08.js"),__vite__mapDeps([331,1])),meta:{c:["Python"],g:["crashcourse","python","py","google","google-colab","jupyter-notebook","numpy","pandas","ipython"],e:`

<hr>
`,r:{minutes:.23,words:69},y:"a",t:"10. 인공 신경망 이론"}}],["/python/finance-w-python/11.html",{loader:()=>r(()=>import("./11.html-DG2BVMXg.js"),__vite__mapDeps([332,1])),meta:{c:["Python"],g:["crashcourse","python","py","google","google-colab","jupyter-notebook","numpy","pandas","ipython"],e:`

<hr>
`,r:{minutes:.23,words:69},y:"a",t:"11. 인공 신경망 실습"}}],["/python/finance-w-python/12.html",{loader:()=>r(()=>import("./12.html-BOT50B6n.js"),__vite__mapDeps([333,1])),meta:{c:["Python"],g:["crashcourse","python","py","google","google-colab","jupyter-notebook","numpy","pandas","ipython"],e:`

<hr>
`,r:{minutes:.23,words:69},y:"a",t:"12. 순환 신경망"}}],["/python/finance-w-python/",{loader:()=>r(()=>import("./index.html-q8KBMtHq.js"),__vite__mapDeps([334,1])),meta:{c:["Python"],g:["crashcourse","python","py","google","google-colab","jupyter-notebook","numpy","pandas","ipython"],e:`

<hr>
`,r:{minutes:.33,words:100},y:"a",t:"Intro",i:"fa-brands fa-python"}}],["/python/opencv-advanced/00.html",{loader:()=>r(()=>import("./00.html-CbmZ7zcO.js"),__vite__mapDeps([335,1])),meta:{c:["Python"],g:["crashcourse","python","py","anaconda","vscode","vscode-extensions"],e:`

<hr>
<p>다양한 운영체제 환경을 지원</p>
<ul>
<li><code>4.8.0</code> 버전은 다양한 언어를 지원하며 최신 알고리즘을 포함, 최근에는 딥러닝 기술에 대한 지원도 포함</li>
<li>윈도우 버전의 경우 약 213 MB</li>
</ul>
`,r:{minutes:.41,words:122},y:"a",t:"00. OpenCV 설치"}}],["/python/opencv-advanced/01.html",{loader:()=>r(()=>import("./01.html-C7S_hqh5.js"),__vite__mapDeps([336,1])),meta:{c:["Python"],g:["crashcourse","python","py","opencv"],e:`

<hr>
<h2>카메라 출력</h2>
<p>OpenCV를 이용하면 카메라 출력을 쉽게 사용할 수 있습니다.</p>
<p>카메라 출력은 카메라가 스트리밍 형태로 동작할 수 있을 때 사용합니다.</p>
<p>즉, 저장된 이미지나 동영상 파일이 아니라 데이터를 실시간으로 받아오고 분석해야 하는 경우 카메라를 이용해 데이터를 처리합니다.</p>
<p>카메라를 사용해 데이터를 받아오기 때문에 연결된 카메라의 장치 번호를 통해 받아오며, 사용중인 플랫폼에서 카메라에 대한 접근 권한이 허용되어야 합니다.</p>
<h3>에제</h3>
<div class="language-python" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> cv2

capture <span class="token operator">=</span> cv2<span class="token punctuation">.</span>VideoCapture<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
capture<span class="token punctuation">.</span><span class="token builtin">set</span><span class="token punctuation">(</span>cv2<span class="token punctuation">.</span>CAP_PROP_FRAME_WIDTH<span class="token punctuation">,</span> <span class="token number">640</span><span class="token punctuation">)</span>
capture<span class="token punctuation">.</span><span class="token builtin">set</span><span class="token punctuation">(</span>cv2<span class="token punctuation">.</span>CAP_PROP_FRAME_HEIGHT<span class="token punctuation">,</span> <span class="token number">480</span><span class="token punctuation">)</span>

<span class="token keyword">while</span> cv2<span class="token punctuation">.</span>waitKey<span class="token punctuation">(</span><span class="token number">33</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">:</span>
  ret<span class="token punctuation">,</span> frame <span class="token operator">=</span> capture<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
  cv2<span class="token punctuation">.</span>imshow<span class="token punctuation">(</span><span class="token string">"VideoFrame"</span><span class="token punctuation">,</span> frame<span class="token punctuation">)</span>

capture<span class="token punctuation">.</span>release<span class="token punctuation">(</span><span class="token punctuation">)</span>
cv2<span class="token punctuation">.</span>destroyAllWindows<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div>`,r:{minutes:.66,words:199},y:"a",t:"01. 출력"}}],["/python/opencv-advanced/02.html",{loader:()=>r(()=>import("./02.html-JQnKzY_7.js"),__vite__mapDeps([337,1])),meta:{c:["Python"],g:["crashcourse","python","py","opencv"],e:`

<hr>
<p>영상이나 이미지를 캡쳐하거나 녹화하기 위해 사용합니다. 영상이나 이미지를 연속적 또는 순간적으로 캡쳐하거나 녹화할 수 있습니다.</p>
<div class="hint-container info">
<p class="hint-container-title">FourCC</p>
<p>Four Character Code: 디지털 미디어 포맷 코드입니다. 즉, 코덱의 인코딩 방식</p>
<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>CVID, Default, DIB, DIVX, H261, H263, H264, IV32, IV41, IV50, IYUB, MJPG, MP42, 
MP43, MPG4, MSVC, PIM1, Prompt, XVI
</code></pre></div></div>`,r:{minutes:3.5,words:1051},y:"a",t:"02. 캡쳐 및 녹화"}}],["/python/opencv-advanced/",{loader:()=>r(()=>import("./index.html-BSLO2Ofa.js"),__vite__mapDeps([338,1])),meta:{c:["Python"],g:["crashcourse","python","py","opencv"],e:`

<hr>

<ul>
<li><a href="/crashcourse/python/opencv-advanced/00.html" target="_blank">00. OpenCV 설치</a></li>
<li><a href="/crashcourse/python/opencv-advanced/01.html" target="_blank">01. 출력</a></li>
<li><a href="/crashcourse/python/opencv-advanced/02.html" target="_blank">02. 캡쳐 및 녹화</a></li>
<li>마우스 콜백</li>
<li>대칭</li>
<li>회전</li>
<li>확대 &amp; 축소</li>
<li>크기 조절</li>
<li>자르기</li>
<li>색상 공간 변환</li>
<li>역상</li>
<li>이진화</li>
<li>흐림 효과</li>
<li>가장자리 검출</li>
<li>HSV</li>
<li>배열 병합</li>
<li>채널 분리 &amp; 병합</li>
<li>도형 그리기</li>
<li>기하학적 변환</li>
<li>윤곽선 검출</li>
<li>다각형 근사</li>
<li>코너 검출</li>
<li>블록 껍질</li>
<li>모멘트</li>
<li>모폴로지 변환</li>
<li>모폴로지 연산</li>
<li>직선 검출 원 검출</li>
<li>이미지 연산 (1)</li>
<li>이미지 연산 (2)</li>
<li>비트 연산</li>
<li>히스토그램</li>
<li>픽셀 접근</li>
<li>트랙</li>
<li>바</li>
<li>적응형 이진화</li>
<li>템플릿 매칭</li>
<li>ORB(Oriented FAST and Rotated BRIEF)</li>
<li>리매핑</li>
<li>색상</li>
<li>맵</li>
<li>K-평균 군집화 알고리즘</li>
<li>K-최근접 이웃 알고리즘</li>
</ul>`,r:{minutes:.22,words:67},y:"a",t:"OpenCV – Python 고급 기법 프로그래밍",i:"fa-brands fa-python"}}],["/python/rpa-excel/01.html",{loader:()=>r(()=>import("./01.html-_9fNSdlN.js"),__vite__mapDeps([339,1])),meta:{c:["Python"],g:["crashcourse","python","py","anaconda","vscode","vscode-extensions"],e:`

<hr>
`,r:{minutes:2.98,words:893},y:"a",t:"01. 개발환경 구축"}}],["/python/rpa-excel/02a.html",{loader:()=>r(()=>import("./02a.html-D19N0WIB.js"),__vite__mapDeps([340,1])),meta:{c:["Python"],g:["crashcourse","python","py","OpenPyxl","pywin32","xlwings","python-docx","excel"],e:`

<hr>
`,r:{minutes:.23,words:70},y:"a",t:"02A. Excel - OpenPyxl 소개"}}],["/python/rpa-excel/02b.html",{loader:()=>r(()=>import("./02b.html-Br8EhfWc.js"),__vite__mapDeps([341,1])),meta:{c:["Python"],g:["crashcourse","python","py","OpenPyxl","pywin32","xlwings","python-docx","excel"],e:`

<hr>
`,r:{minutes:.23,words:70},y:"a",t:"02B. Excel - xlwings 소개"}}],["/python/rpa-excel/02c.html",{loader:()=>r(()=>import("./02c.html-_bwwSUwq.js"),__vite__mapDeps([342,1])),meta:{c:["Python"],g:["crashcourse","python","py","OpenPyxl","pywin32","xlwings","python-docx","excel"],e:`

<hr>
`,r:{minutes:.23,words:70},y:"a",t:"02C. Win32com (pywin32)"}}],["/python/rpa-excel/02d.html",{loader:()=>r(()=>import("./02d.html-CLXFw8EX.js"),__vite__mapDeps([343,1])),meta:{c:["Python"],g:["crashcourse","python","py","OpenPyxl","pywin32","xlwings","python-docx","excel"],e:`

<hr>
`,r:{minutes:.25,words:75},y:"a",t:"02D. Word문서 자동화 (python-docx)"}}],["/python/rpa-excel/02e.html",{loader:()=>r(()=>import("./02e.html-DbrDBjNz.js"),__vite__mapDeps([344,1])),meta:{c:["Python"],g:["crashcourse","python","py","OpenPyxl","pywin32","xlwings","python-docx","excel"],e:`

<hr>
`,r:{minutes:.2,words:60},y:"a",t:"02E. 파일과 폴더 다루기"}}],["/python/rpa-excel/02f.html",{loader:()=>r(()=>import("./02f.html-BeF6Hhfq.js"),__vite__mapDeps([345,1])),meta:{c:["Python"],g:["crashcourse","python","py","OpenPyxl","pywin32","xlwings","python-docx","excel"],e:`

<hr>
`,r:{minutes:.2,words:60},y:"a",t:"02F. 이미지 처리"}}],["/python/rpa-excel/02g.html",{loader:()=>r(()=>import("./02g.html-uoqQgeB_.js"),__vite__mapDeps([346,1])),meta:{c:["Python"],g:["crashcourse","python","py","OpenPyxl","pywin32","xlwings","python-docx","excel"],e:`

<hr>
`,r:{minutes:.22,words:65},y:"a",t:"02G. PyAutoGUI 모듈"}}],["/python/rpa-excel/02h.html",{loader:()=>r(()=>import("./02h.html-CfUDOtK5.js"),__vite__mapDeps([347,1])),meta:{c:["Python"],g:["crashcourse","python","py","OpenPyxl","pywin32","xlwings","python-docx","excel"],e:`

<hr>
`,r:{minutes:.2,words:60},y:"a",t:"02H. 웹크롤링"}}],["/python/rpa-excel/02i.html",{loader:()=>r(()=>import("./02i.html-X1dvDwQn.js"),__vite__mapDeps([348,1])),meta:{c:["Python"],g:["crashcourse","python","py","OpenPyxl","pywin32","xlwings","python-docx","excel"],e:`

<hr>
`,r:{minutes:.2,words:60},y:"a",t:"02I. 기타 유용한 패키지"}}],["/python/rpa-excel/03.html",{loader:()=>r(()=>import("./03.html-rN4zBVlF.js"),__vite__mapDeps([349,1])),meta:{c:["Python"],g:["crashcourse","python","py","OpenPyxl","pywin32","xlwings","python-docx","excel"],e:`

<hr>
`,r:{minutes:.2,words:60},y:"a",t:"03. 업무자동화 프로젝트 사례"}}],["/python/rpa-excel/",{loader:()=>r(()=>import("./index.html-D9hRmlFX.js"),__vite__mapDeps([350,1])),meta:{c:["Python"],g:["crashcourse","python","py","google","google-colab","jupyter-notebook","numpy","pandas","ipython","OpenPyxl","pywin32","xlwings","python-docx","excel"],e:`

<hr>
`,r:{minutes:.35,words:104},y:"a",t:"사장님 몰래 하는 파이썬 업무자동화 (들키면 일 많아짐)",i:"fa-brands fa-python"}}],["/ruby/rubyonjets-learning-content/20180818-introducing-jets-a-ruby-serverless-framework.html",{loader:()=>r(()=>import("./20180818-introducing-jets-a-ruby-serverless-framework.html-C4lnSL23.js"),__vite__mapDeps([351,1])),meta:{c:["Ruby"],g:["crashcourse","ruby","jets","aws","aws-lambda","cloudwatch"],e:`

<hr>
`,r:{minutes:4.53,words:1359},y:"a",t:"Introducing Jets - A Ruby Serverless Framework"}}],["/ruby/rubyonjets-learning-content/20180907-jets-tutorial-crud-app-introduction-part-1.html",{loader:()=>r(()=>import("./20180907-jets-tutorial-crud-app-introduction-part-1.html-CzXKT4rA.js"),__vite__mapDeps([352,1])),meta:{c:["Ruby"],g:["crashcourse","ruby","jets","aws","aws-lambda","cloudwatch"],e:`

<hr>
`,r:{minutes:.73,words:220},y:"a",t:"Intro CRUD App Part 1"}}],["/ruby/rubyonjets-learning-content/20180908-jets-tutorial-deploy-to-aws-lambda-part-2.html",{loader:()=>r(()=>import("./20180908-jets-tutorial-deploy-to-aws-lambda-part-2.html-CyW2FxwU.js"),__vite__mapDeps([353,1])),meta:{c:["Ruby"],g:["crashcourse","ruby","jets","aws","aws-lambda","cloudwatch"],e:`

<hr>
`,r:{minutes:.71,words:214},y:"a",t:"Deploy to AWS Lambda Part 2"}}],["/ruby/rubyonjets-learning-content/20180909-jets-tutorial-debugging-logs-part-3.html",{loader:()=>r(()=>import("./20180909-jets-tutorial-debugging-logs-part-3.html-7j7lu6yX.js"),__vite__mapDeps([354,1])),meta:{c:["Ruby"],g:["crashcourse","ruby","jets","aws","aws-lambda","cloudwatch"],e:`

<hr>
`,r:{minutes:.92,words:277},y:"a",t:"Debugging Logs Part 3"}}],["/ruby/rubyonjets-learning-content/20180910-jets-tutorial-background-jobs-part-4.html",{loader:()=>r(()=>import("./20180910-jets-tutorial-background-jobs-part-4.html-C1nQV6fE.js"),__vite__mapDeps([355,1])),meta:{c:["Ruby"],g:["crashcourse","ruby","jets","aws","aws-lambda","cloudwatch"],e:`

<hr>
`,r:{minutes:.82,words:246},y:"a",t:"Background Jobs Part 4"}}],["/ruby/rubyonjets-learning-content/20180911-jets-tutorial-iam-policies-part-5.html",{loader:()=>r(()=>import("./20180911-jets-tutorial-iam-policies-part-5.html-Dq83IMoF.js"),__vite__mapDeps([356,1])),meta:{c:["Ruby"],g:["crashcourse","ruby","jets","aws","aws-lambda","cloudwatch"],e:`

<hr>
`,r:{minutes:.89,words:266},y:"a",t:"IAM Policies Part 5"}}],["/ruby/rubyonjets-learning-content/20180912-jets-tutorial-function-properties-part-6.html",{loader:()=>r(()=>import("./20180912-jets-tutorial-function-properties-part-6.html-CY-n2AU1.js"),__vite__mapDeps([357,1])),meta:{c:["Ruby"],g:["crashcourse","ruby","jets","aws","aws-lambda","cloudwatch"],e:`

<hr>
`,r:{minutes:.9,words:270},y:"a",t:"Function Properties Part 6"}}],["/ruby/rubyonjets-learning-content/20180913-jets-tutorial-extra-environments-part-7.html",{loader:()=>r(()=>import("./20180913-jets-tutorial-extra-environments-part-7.html-Ch5PjMj_.js"),__vite__mapDeps([358,1])),meta:{c:["Ruby"],g:["crashcourse","ruby","jets","aws","aws-lambda","cloudwatch"],e:`

<hr>
`,r:{minutes:.89,words:267},y:"a",t:"Extra Environments Part 7"}}],["/ruby/rubyonjets-learning-content/20180926-jets-tutorial-different-environments-part-8.html",{loader:()=>r(()=>import("./20180926-jets-tutorial-different-environments-part-8.html-DUpSQrU-.js"),__vite__mapDeps([359,1])),meta:{c:["Ruby"],g:["crashcourse","ruby","jets","aws","aws-lambda","cloudwatch"],e:`

<hr>
`,r:{minutes:.73,words:218},y:"a",t:"Different Environments Part 8"}}],["/ruby/rubyonjets-learning-content/20180927-jets-tutorial-polymorphic-support-part-9.html",{loader:()=>r(()=>import("./20180927-jets-tutorial-polymorphic-support-part-9.html-BZHO8U8y.js"),__vite__mapDeps([360,1])),meta:{c:["Ruby"],g:["crashcourse","ruby","jets","aws","aws-lambda","cloudwatch"],e:`

<hr>
`,r:{minutes:.83,words:250},y:"a",t:"Polymorphic Support Part 9"}}],["/ruby/rubyonjets-learning-content/20181112-jets-tutorial-jets-delete.html",{loader:()=>r(()=>import("./20181112-jets-tutorial-jets-delete.html-Qyg_UhHZ.js"),__vite__mapDeps([361,1])),meta:{c:["Ruby"],g:["crashcourse","ruby","jets","aws","aws-lambda","cloudwatch"],e:`

<hr>
`,r:{minutes:1.25,words:374},y:"a",t:"Jets Delete Tutorial"}}],["/ruby/rubyonjets-learning-content/20181212-official-aws-ruby-support-for-jets-serverless-framework.html",{loader:()=>r(()=>import("./20181212-official-aws-ruby-support-for-jets-serverless-framework.html-BhGzpY2B.js"),__vite__mapDeps([362,1])),meta:{c:["Ruby"],g:["crashcourse","ruby","jets","aws","aws-lambda","cloudwatch"],e:`

<hr>
`,r:{minutes:3.74,words:1122},y:"a",t:"Official AWS Ruby Support for Jets"}}],["/ruby/rubyonjets-learning-content/20181213-jets-image-upload-carrierwave-tutorial-binary-support.html",{loader:()=>r(()=>import("./20181213-jets-image-upload-carrierwave-tutorial-binary-support.html-GnuI4jtr.js"),__vite__mapDeps([363,1])),meta:{c:["Ruby"],g:["crashcourse","ruby","jets","aws","aws-lambda","cloudwatch"],e:`

<hr>
`,r:{minutes:4.24,words:1273},y:"a",t:"Image Upload Carrierwave Tutorial"}}],["/ruby/rubyonjets-learning-content/20181221-jets-afterburner-serverless-rails-on-aws-lambda-in-5-minutes.html",{loader:()=>r(()=>import("./20181221-jets-afterburner-serverless-rails-on-aws-lambda-in-5-minutes.html-CL76Iv2v.js"),__vite__mapDeps([364,1])),meta:{c:["🔻Ruby"],g:["crashcourse","ruby","jets","aws","aws-lambda","cloudwatch"],e:`

<hr>
`,r:{minutes:1.95,words:584},y:"a",t:"Rails Support - Jets Afterburner"}}],["/ruby/rubyonjets-learning-content/20190113-build-an-api-service-with-jets-ruby-serverless-framework.html",{loader:()=>r(()=>import("./20190113-build-an-api-service-with-jets-ruby-serverless-framework.html-3xTea_yO.js"),__vite__mapDeps([365,1])),meta:{c:["Ruby"],g:["crashcourse","ruby","jets","aws","aws-lambda","cloudwatch"],e:`

<hr>
`,r:{minutes:3.22,words:967},y:"a",t:"Build an API with the Jets Ruby Serverless Framework"}}],["/ruby/rubyonjets-learning-content/20190114-serverless-slack-commands-with-ruby.html",{loader:()=>r(()=>import("./20190114-serverless-slack-commands-with-ruby.html-aYkNSnO7.js"),__vite__mapDeps([366,1])),meta:{c:["Ruby"],g:["crashcourse","ruby","jets","aws","aws-lambda","cloudwatch"],e:`

<hr>
`,r:{minutes:.39,words:117},y:"a",t:"Serverless Slack Commands - Fun with AWS Image Recognition"}}],["/ruby/rubyonjets-learning-content/20190204-aws-lambda-function-jets-introductory-series-part-1.html",{loader:()=>r(()=>import("./20190204-aws-lambda-function-jets-introductory-series-part-1.html-D0iYb3Yb.js"),__vite__mapDeps([367,1])),meta:{c:["Ruby"],g:["crashcourse","ruby","jets","aws","aws-lambda","cloudwatch"],e:`

<hr>
`,r:{minutes:.94,words:282},y:"a",t:"AWS Lambda Function - Jets Introduction Series Part 1"}}],["/ruby/rubyonjets-learning-content/20190205-api-gateway-jets-introductory-series-part-2.html",{loader:()=>r(()=>import("./20190205-api-gateway-jets-introductory-series-part-2.html-CUXbufSy.js"),__vite__mapDeps([368,1])),meta:{c:["Ruby"],g:["crashcourse","ruby","jets","aws","aws-lambda","cloudwatch"],e:`

<hr>
`,r:{minutes:.81,words:243},y:"a",t:"API Gateway - Jets Introduction Series Part 2"}}],["/ruby/rubyonjets-learning-content/20190206-cloudwatch-event-rule-jets-introductory-series-part-3.html",{loader:()=>r(()=>import("./20190206-cloudwatch-event-rule-jets-introductory-series-part-3.html-BFcxmllP.js"),__vite__mapDeps([369,1])),meta:{c:["Ruby"],g:["crashcourse","ruby","jets","aws","aws-lambda","cloudwatch"],e:`

<hr>
`,r:{minutes:.71,words:213},y:"a",t:"CloudWatch Event Rule - Jets Introduction Series Part 3"}}],["/ruby/rubyonjets-learning-content/20190211-hello-world-examples-jets-introductory-series-part-4.html",{loader:()=>r(()=>import("./20190211-hello-world-examples-jets-introductory-series-part-4.html-iTvJTrg1.js"),__vite__mapDeps([370,1])),meta:{c:["Ruby"],g:["crashcourse","ruby","jets","aws","aws-lambda","cloudwatch"],e:`

<hr>
`,r:{minutes:.69,words:207},y:"a",t:"Hello World Examples - Jets Introduction Series Part 4"}}],["/ruby/rubyonjets-learning-content/",{loader:()=>r(()=>import("./index.html-CQZyLmys.js"),__vite__mapDeps([371,1])),meta:{c:["Ruby"],g:["crashcourse","ruby","jets","aws","aws-lambda","cloudwatch"],e:`

<hr>
`,r:{minutes:3.61,words:1082},y:"a",t:"Jets - Learning Content",i:"fas fa-gem"}}],["/rust/eventhelix-rust-to-assembly/",{loader:()=>r(()=>import("./index.html-odx6xTYV.js"),__vite__mapDeps([372,1])),meta:{c:["Rust"],g:["crashcourse","digitalocean","eventhelix","rust","rs","wasm","assembly"],e:`

<hr>
<h2>Understanding the Inner Workings of Rust</h2>
<ul>
<li><a href="/crashcourse/rust/eventhelix-rust-to-assembly/rust-enum-and-match-representation-in-assembly.html" target="_blank">Rust enum and match representation in assembly</a></li>
<li><a href="/crashcourse/rust/eventhelix-rust-to-assembly/assembly-code-generated-when-self-is-passed-by-value-reference-or-as-a-smart-pointer.html" target="_blank">Assembly code generated when self is passed by value, reference or as a smart pointer</a></li>
<li><a href="/crashcourse/rust/eventhelix-rust-to-assembly/mapping-arrays-tuples-box-and-option-to-assembly.html" target="_blank">Mapping Arrays, Tuples, Box and Option to assembly</a></li>
<li><a href="/crashcourse/rust/eventhelix-rust-to-assembly/rust-to-assembly-vector-iteration.html" target="_blank">Map Rust vector iteration to assembly</a></li>
</ul>`,r:{minutes:1.98,words:593},y:"a",t:"Rust to Assembly",i:"fa-brands fa-rust"}}],["/rust/eventhelix-rust-to-assembly/assembly-code-generated-when-self-is-passed-by-value-reference-or-as-a-smart-pointer.html",{loader:()=>r(()=>import("./assembly-code-generated-when-self-is-passed-by-value-reference-or-as-a-smart-pointer.html-C0jrOdyh.js"),__vite__mapDeps([373,1])),meta:{c:["Rust"],g:["crashcourse","digitalocean","rust","rs","wasm","assembly"],e:`

<hr>
`,r:{minutes:10.28,words:3084},y:"a",t:"Assembly code generated when self is passed by value, reference or as a smart pointer"}}],["/rust/eventhelix-rust-to-assembly/mapping-arrays-tuples-box-and-option-to-assembly.html",{loader:()=>r(()=>import("./mapping-arrays-tuples-box-and-option-to-assembly.html-DSiYjHDr.js"),__vite__mapDeps([374,1])),meta:{c:["Rust"],g:["crashcourse","digitalocean","rust","rs","wasm","assembly"],e:`

<hr>
`,r:{minutes:9.35,words:2805},y:"a",t:"Mapping Arrays, Tuples, Box and Option to assembly"}}],["/rust/eventhelix-rust-to-assembly/rust-enum-and-match-representation-in-assembly.html",{loader:()=>r(()=>import("./rust-enum-and-match-representation-in-assembly.html-CF9uEPHd.js"),__vite__mapDeps([375,1])),meta:{c:["Rust"],g:["crashcourse","digitalocean","eventhelix","rust","rs","wasm","assembly"],e:`

<hr>
`,r:{minutes:3.68,words:1103},y:"a",t:"Rust enum and match representation in assembly"}}],["/rust/eventhelix-rust-to-assembly/rust-to-assembly-vector-iteration.html",{loader:()=>r(()=>import("./rust-to-assembly-vector-iteration.html-BEulhMuo.js"),__vite__mapDeps([376,1])),meta:{c:["Rust"],g:["crashcourse","digitalocean","eventhelix","rust","rs","wasm","assembly"],e:`

<hr>
`,r:{minutes:10.77,words:3230},y:"a",t:"Map Rust vector iteration to assembly"}}],["/rust/freecodecamp-rust-by-practice/01-elegant-code-base.html",{loader:()=>r(()=>import("./01-elegant-code-base.html-C7bu8pms.js"),__vite__mapDeps([377,1])),meta:{c:["Rust"],g:["crashcourse","freecodecamp","zubiarfan","youtube","rust","rs","wasm","assembly"],e:`

<hr>
`,r:{minutes:1.9,words:569},y:"a",t:"1. Small projects with Elegant code"}}],["/rust/freecodecamp-rust-by-practice/02-variables.html",{loader:()=>r(()=>import("./02-variables.html-r5M0RwZL.js"),__vite__mapDeps([378,1])),meta:{c:["Rust"],g:["crashcourse","freecodecamp","zubiarfan","youtube","rust","rs","wasm","assembly"],e:`

<hr>
`,r:{minutes:6.06,words:1819},y:"a",t:"2. Variables"}}],["/rust/freecodecamp-rust-by-practice/03-basic-types.html",{loader:()=>r(()=>import("./03-basic-types.html-DYU1t4zQ.js"),__vite__mapDeps([379,1])),meta:{c:["Rust"],g:["crashcourse","freecodecamp","zubiarfan","youtube","rust","rs","wasm","assembly"],e:`

<hr>
`,r:{minutes:24.96,words:7489},y:"a",t:"3. Basic Types"}}],["/rust/freecodecamp-rust-by-practice/04-ownership.html",{loader:()=>r(()=>import("./04-ownership.html-kl274VSv.js"),__vite__mapDeps([380,1])),meta:{c:["Rust"],g:["crashcourse","freecodecamp","zubiarfan","youtube","rust","rs","wasm","assembly"],e:`

<hr>
`,r:{minutes:6.38,words:1913},y:"a",t:"4. Ownership and Borrowing"}}],["/rust/freecodecamp-rust-by-practice/05-compound-types.html",{loader:()=>r(()=>import("./05-compound-types.html-CjMPNRdP.js"),__vite__mapDeps([381,1])),meta:{c:["Rust"],g:["crashcourse","freecodecamp","zubiarfan","youtube","rust","rs","wasm","assembly"],e:`

<hr>
`,r:{minutes:.19,words:57},y:"a",t:"5. Compound Types"}}],["/rust/freecodecamp-rust-by-practice/06-flow-contro.html",{loader:()=>r(()=>import("./06-flow-contro.html-DApCzC0a.js"),__vite__mapDeps([382,1])),meta:{c:["Rust"],g:["crashcourse","freecodecamp","zubiarfan","youtube","rust","rs","wasm","assembly"],e:`

<hr>
<hr>
`,r:{minutes:.2,words:59},y:"a",t:"6. Flow Control"}}],["/rust/freecodecamp-rust-by-practice/07-pattern-match.html",{loader:()=>r(()=>import("./07-pattern-match.html-BhM1ta-9.js"),__vite__mapDeps([383,1])),meta:{c:["Rust"],g:["crashcourse","freecodecamp","zubiarfan","youtube","rust","rs","wasm","assembly"],e:`

<hr>
<hr>
`,r:{minutes:.2,words:59},y:"a",t:"7. Pattern Match"}}],["/rust/freecodecamp-rust-by-practice/08-method.html",{loader:()=>r(()=>import("./08-method.html-BsGzlU61.js"),__vite__mapDeps([384,1])),meta:{c:["Rust"],g:["crashcourse","freecodecamp","zubiarfan","youtube","rust","rs","wasm","assembly"],e:`

<hr>
<hr>
`,r:{minutes:.21,words:63},y:"a",t:"8. Method & Associated function"}}],["/rust/freecodecamp-rust-by-practice/09-generics-traits.html",{loader:()=>r(()=>import("./09-generics-traits.html-XM6gSXnp.js"),__vite__mapDeps([385,1])),meta:{c:["Rust"],g:["crashcourse","freecodecamp","zubiarfan","youtube","rust","rs","wasm","assembly"],e:`

<hr>
<hr>
`,r:{minutes:.21,words:63},y:"a",t:"9. Generics and Traits"}}],["/rust/freecodecamp-rust-by-practice/10-collections.html",{loader:()=>r(()=>import("./10-collections.html-BwDRr1d-.js"),__vite__mapDeps([386,1])),meta:{c:["Rust"],g:["crashcourse","freecodecamp","zubiarfan","youtube","rust","rs","wasm","assembly"],e:`

<hr>
<hr>
`,r:{minutes:.2,words:59},y:"a",t:"10. Collection Types"}}],["/rust/freecodecamp-rust-by-practice/11-type-conversions.html",{loader:()=>r(()=>import("./11-type-conversions.html-CLhwLtp2.js"),__vite__mapDeps([387,1])),meta:{c:["Rust"],g:["crashcourse","freecodecamp","zubiarfan","youtube","rust","rs","wasm","assembly"],e:`

<hr>
<hr>
`,r:{minutes:.2,words:59},y:"a",t:"11. Type Conversion"}}],["/rust/freecodecamp-rust-by-practice/12-result-panic.html",{loader:()=>r(()=>import("./12-result-panic.html-OM8l6Knd.js"),__vite__mapDeps([388,1])),meta:{c:["Rust"],g:["crashcourse","freecodecamp","zubiarfan","youtube","rust","rs","wasm","assembly"],e:`

<hr>
<hr>
`,r:{minutes:.21,words:63},y:"a",t:"12. Result and panic"}}],["/rust/freecodecamp-rust-by-practice/13-crate-module.html",{loader:()=>r(()=>import("./13-crate-module.html-CgZ1MMis.js"),__vite__mapDeps([389,1])),meta:{c:["Rust"],g:["crashcourse","freecodecamp","zubiarfan","youtube","rust","rs","wasm","assembly"],e:`

<hr>
<hr>
`,r:{minutes:.21,words:63},y:"a",t:"13. Crate and Module"}}],["/rust/freecodecamp-rust-by-practice/14-comments-docs.html",{loader:()=>r(()=>import("./14-comments-docs.html-PmVxBUiJ.js"),__vite__mapDeps([390,1])),meta:{c:["Rust"],g:["crashcourse","freecodecamp","zubiarfan","youtube","rust","rs","wasm","assembly"],e:`

<hr>
<hr>
`,r:{minutes:.21,words:63},y:"a",t:"14. Comments and Docs"}}],["/rust/freecodecamp-rust-by-practice/15-formatted-output.html",{loader:()=>r(()=>import("./15-formatted-output.html-BL4WRaXP.js"),__vite__mapDeps([391,1])),meta:{c:["Rust"],g:["crashcourse","freecodecamp","zubiarfan","youtube","rust","rs","wasm","assembly"],e:`

<hr>
`,r:{minutes:.19,words:57},y:"a",t:"15. Formatted output"}}],["/rust/freecodecamp-rust-by-practice/16-lifetime.html",{loader:()=>r(()=>import("./16-lifetime.html-B6SDlMd5.js"),__vite__mapDeps([392,1])),meta:{c:["Rust"],g:["crashcourse","freecodecamp","zubiarfan","youtube","rust","rs","wasm","assembly"],e:`

<hr>
<hr>
`,r:{minutes:.18,words:55},y:"a",t:"16. Lifetime"}}],["/rust/freecodecamp-rust-by-practice/17-functional-programing.html",{loader:()=>r(()=>import("./17-functional-programing.html-HcDGpAUl.js"),__vite__mapDeps([393,1])),meta:{c:["Rust"],g:["crashcourse","freecodecamp","zubiarfan","youtube","rust","rs","wasm","assembly"],e:`

<hr>
<hr>
`,r:{minutes:.2,words:59},y:"a",t:"17. Functional programing"}}],["/rust/freecodecamp-rust-by-practice/18-newtype-sized.html",{loader:()=>r(()=>import("./18-newtype-sized.html-BM3qrLJr.js"),__vite__mapDeps([394,1])),meta:{c:["Rust"],g:["crashcourse","freecodecamp","zubiarfan","youtube","rust","rs","wasm","assembly"],e:`

<hr>
<hr>
`,r:{minutes:.21,words:63},y:"a",t:"18. newtype and DST"}}],["/rust/freecodecamp-rust-by-practice/19-smart-pointers.html",{loader:()=>r(()=>import("./19-smart-pointers.html-DfuA1g-F.js"),__vite__mapDeps([395,1])),meta:{c:["Rust"],g:["crashcourse","freecodecamp","zubiarfan","youtube","rust","rs","wasm","assembly"],e:`

<hr>
<hr>
`,r:{minutes:.2,words:59},y:"a",t:"19. Smart pointers"}}],["/rust/freecodecamp-rust-by-practice/20-weak.html",{loader:()=>r(()=>import("./20-weak.html-DJM4n_jv.js"),__vite__mapDeps([396,1])),meta:{c:["Rust"],g:["crashcourse","freecodecamp","zubiarfan","youtube","rust","rs","wasm","assembly"],e:`

<hr>
<hr>
`,r:{minutes:.22,words:67},y:"a",t:"20. Weak and Circle reference"}}],["/rust/freecodecamp-rust-by-practice/21-self-referential.html",{loader:()=>r(()=>import("./21-self-referential.html-Brjj-4nQ.js"),__vite__mapDeps([397,1])),meta:{c:["Rust"],g:["crashcourse","freecodecamp","zubiarfan","youtube","rust","rs","wasm","assembly"],e:`

<hr>
<hr>
`,r:{minutes:.2,words:59},y:"a",t:"21. Self referential"}}],["/rust/freecodecamp-rust-by-practice/22-threads.html",{loader:()=>r(()=>import("./22-threads.html-C_gm92cf.js"),__vite__mapDeps([398,1])),meta:{c:["Rust"],g:["crashcourse","freecodecamp","zubiarfan","youtube","rust","rs","wasm","assembly"],e:`

<hr>
<hr>
`,r:{minutes:.18,words:55},y:"a",t:"22. Threads"}}],["/rust/freecodecamp-rust-by-practice/23-global-variables.html",{loader:()=>r(()=>import("./23-global-variables.html-BAHmlYhL.js"),__vite__mapDeps([399,1])),meta:{c:["Rust"],g:["crashcourse","freecodecamp","zubiarfan","youtube","rust","rs","wasm","assembly"],e:`

<hr>
<hr>
`,r:{minutes:.2,words:59},y:"a",t:"23. Global variables"}}],["/rust/freecodecamp-rust-by-practice/24-errors.html",{loader:()=>r(()=>import("./24-errors.html-Cx3IzGMN.js"),__vite__mapDeps([400,1])),meta:{c:["Rust"],g:["crashcourse","freecodecamp","zubiarfan","youtube","rust","rs","wasm","assembly"],e:`

<hr>
<hr>
`,r:{minutes:.18,words:55},y:"a",t:"24. Errors"}}],["/rust/freecodecamp-rust-by-practice/25-unsafe.html",{loader:()=>r(()=>import("./25-unsafe.html-BbxQnAOq.js"),__vite__mapDeps([401,1])),meta:{c:["Rust"],g:["crashcourse","freecodecamp","zubiarfan","youtube","rust","rs","wasm","assembly"],e:`

<hr>
<hr>
`,r:{minutes:.2,words:59},y:"a",t:"25. Unsafe doing"}}],["/rust/freecodecamp-rust-by-practice/26-macro.html",{loader:()=>r(()=>import("./26-macro.html-CoeHjgxc.js"),__vite__mapDeps([402,1])),meta:{c:["Rust"],g:["crashcourse","freecodecamp","zubiarfan","youtube","rust","rs","wasm","assembly"],e:`

<hr>
<hr>
`,r:{minutes:.18,words:55},y:"a",t:"26. Macro"}}],["/rust/freecodecamp-rust-by-practice/27-tests.html",{loader:()=>r(()=>import("./27-tests.html-s9riZn5I.js"),__vite__mapDeps([403,1])),meta:{c:["Rust"],g:["crashcourse","freecodecamp","zubiarfan","youtube","rust","rs","wasm","assembly"],e:`

<hr>
<hr>
`,r:{minutes:.18,words:55},y:"a",t:"27. Tests"}}],["/rust/freecodecamp-rust-by-practice/28-async.html",{loader:()=>r(()=>import("./28-async.html-DuUSp7Jr.js"),__vite__mapDeps([404,1])),meta:{c:["Rust"],g:["crashcourse","freecodecamp","zubiarfan","youtube","rust","rs","wasm","assembly"],e:`

<hr>
<hr>
`,r:{minutes:.18,words:55},y:"a",t:"28. Async/Await"}}],["/rust/freecodecamp-rust-by-practice/29-std.html",{loader:()=>r(()=>import("./29-std.html-B6THB50I.js"),__vite__mapDeps([405,1])),meta:{c:["Rust"],g:["crashcourse","freecodecamp","zubiarfan","youtube","rust","rs","wasm","assembly"],e:`

<hr>
<hr>
`,r:{minutes:.2,words:59},y:"a",t:"29. Standard Library"}}],["/rust/freecodecamp-rust-by-practice/30-fight-compiler.html",{loader:()=>r(()=>import("./30-fight-compiler.html-D4S1tmiI.js"),__vite__mapDeps([406,1])),meta:{c:["Rust"],g:["crashcourse","freecodecamp","zubiarfan","youtube","rust","rs","wasm","assembly"],e:`

<hr>
<hr>
`,r:{minutes:.21,words:63},y:"a",t:"30. Fighting with Compiler"}}],["/rust/freecodecamp-rust-by-practice/",{loader:()=>r(()=>import("./index.html-BN4wKNeD.js"),__vite__mapDeps([407,1])),meta:{c:["Rust"],g:["crashcourse","freecodecamp","zubiarfan","youtube","rust","rs","wasm","assembly"],e:`

<hr>
`,r:{minutes:1.59,words:477},y:"a",t:"freecodecamp.org - Rust by Practice",i:"fa-brands fa-rust"}}],["/rust/wasm-by-example/01-concepts.html",{loader:()=>r(()=>import("./01-concepts.html-DftN3K3D.js"),__vite__mapDeps([408,1])),meta:{c:["Rust"],g:["crashcourse","rust","rs","wasm","assembly","assemblyscript","c","cpp"],e:`

<hr>
<p>Examples that express some of the major underlying concepts in WebAssembly. Some of these examples are not the most convenient or productive way for building projects with WebAssembly. However, these minimal examples are great for learning, or developing straightforward / lower-level parts of an application.</p>`,r:{minutes:11.08,words:3324},y:"a",t:"01. Concepts"}}],["/rust/wasm-by-example/02-applying-the-concepts.html",{loader:()=>r(()=>import("./02-applying-the-concepts.html-DmSGTnhh.js"),__vite__mapDeps([409,1])),meta:{c:["Rust"],g:["crashcourse","rust","rs","wasm","assembly","assemblyscript","c","cpp"],e:`

<hr>
<p>Examples that expand on the conceptual examples to show how these minimal examples could be used to build common features in larger applications.</p>
<hr>
<h2>Reading and Writing Graphics</h2>
`,r:{minutes:4.52,words:1357},y:"a",t:"02. Applying the Concepts"}}],["/rust/wasm-by-example/03-ecosystem-tools-and-language-features.html",{loader:()=>r(()=>import("./03-ecosystem-tools-and-language-features.html-Dr7rapOy.js"),__vite__mapDeps([410,1])),meta:{c:["Rust"],g:["crashcourse","rust","rs","wasm","assembly","assemblyscript","c","cpp"],e:`

<hr>
<p>Examples that highlight tools, libraries, and features of your selected programming language. These ecosystem components can drastically help in building powerful applications. For example, tools can be used to help pass data between your host runtime and WebAssembly module, and/or languages features can abstract away some of the lower-level parts of WebAssembly such as memory management.</p>`,r:{minutes:.61,words:184},y:"a",t:"03. Ecosystem tools and Language features"}}],["/rust/wasm-by-example/04-webassembly-outside-of-the-browser.html",{loader:()=>r(()=>import("./04-webassembly-outside-of-the-browser.html-BQkmHVQI.js"),__vite__mapDeps([411,1])),meta:{c:["Rust"],g:["crashcourse","rust","rs","wasm","assembly","assemblyscript","c","cpp"],e:`

<p>Examples that highlight the WebAssembly System Interface (WASI), standalone WebAssembly runtimes, tools for applications that use WASI, and use cases for tasks like cloud computing and internet-of-things devices. WebAssembly has a lot of key features that make it great for the browser web, and these same features make it a popular choice for uses outside of the browser as well.</p>`,r:{minutes:.67,words:200},y:"a",t:"04. WebAssembly Outside of the Browser"}}],["/rust/wasm-by-example/",{loader:()=>r(()=>import("./index.html-ZBfuBl-n.js"),__vite__mapDeps([412,1])),meta:{c:["Rust"],g:["crashcourse","rust","rs","wasm","assembly","assemblyscript","c","cpp"],e:`

<hr>
`,r:{minutes:.76,words:227},y:"a",t:"Wasm by Example",i:"fa-brands fa-rust"}}],["/swift/100-days-of-swift/01.html",{loader:()=>r(()=>import("./01.html-C46ojz3v.js"),__vite__mapDeps([413,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:7.27,words:2182},y:"a",t:"Day 01"}}],["/swift/100-days-of-swift/02.html",{loader:()=>r(()=>import("./02.html-eOthT8SC.js"),__vite__mapDeps([414,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:9.9,words:2971},y:"a",t:"Day 02"}}],["/swift/100-days-of-swift/03.html",{loader:()=>r(()=>import("./03.html-B3Jioy4x.js"),__vite__mapDeps([415,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:8.67,words:2601},y:"a",t:"Day 03"}}],["/swift/100-days-of-swift/04.html",{loader:()=>r(()=>import("./04.html-D2XMF-Hs.js"),__vite__mapDeps([416,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:7,words:2100},y:"a",t:"Day 04"}}],["/swift/100-days-of-swift/05.html",{loader:()=>r(()=>import("./05.html-CeXH6m8_.js"),__vite__mapDeps([417,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:10.14,words:3042},y:"a",t:"Day 05"}}],["/swift/100-days-of-swift/06.html",{loader:()=>r(()=>import("./06.html-CXB_4RqG.js"),__vite__mapDeps([418,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:5.2,words:1560},y:"a",t:"Day 06"}}],["/swift/100-days-of-swift/07.html",{loader:()=>r(()=>import("./07.html-rV9oGAVi.js"),__vite__mapDeps([419,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:7.44,words:2232},y:"a",t:"Day 07"}}],["/swift/100-days-of-swift/08.html",{loader:()=>r(()=>import("./08.html-2TAP8mGq.js"),__vite__mapDeps([420,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:7.05,words:2114},y:"a",t:"Day 08"}}],["/swift/100-days-of-swift/09.html",{loader:()=>r(()=>import("./09.html-B2eIvT17.js"),__vite__mapDeps([421,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:5.67,words:1702},y:"a",t:"Day 09"}}],["/swift/100-days-of-swift/10.html",{loader:()=>r(()=>import("./10.html-Ci4C39Ot.js"),__vite__mapDeps([422,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:7.29,words:2188},y:"a",t:"Day 10"}}],["/swift/100-days-of-swift/100.html",{loader:()=>r(()=>import("./100.html-BJv67R06.js"),__vite__mapDeps([423,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:1.79,words:536},y:"a",t:"Day 100"}}],["/swift/100-days-of-swift/101.html",{loader:()=>r(()=>import("./101.html-Dhh6Yj2o.js"),__vite__mapDeps([424,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:3.07,words:921},y:"a",t:"Epilog"}}],["/swift/100-days-of-swift/11.html",{loader:()=>r(()=>import("./11.html-T5cBfHqA.js"),__vite__mapDeps([425,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:5.3,words:1589},y:"a",t:"Day 11"}}],["/swift/100-days-of-swift/12.html",{loader:()=>r(()=>import("./12.html-DFe8ZLXc.js"),__vite__mapDeps([426,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:10.68,words:3204},y:"a",t:"Day 12"}}],["/swift/100-days-of-swift/13.html",{loader:()=>r(()=>import("./13.html-CTUwVRID.js"),__vite__mapDeps([427,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:24.92,words:7475},y:"a",t:"Day 13"}}],["/swift/100-days-of-swift/14.html",{loader:()=>r(()=>import("./14.html-B8iiVoAt.js"),__vite__mapDeps([428,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:26.88,words:8065},y:"a",t:"Day 14"}}],["/swift/100-days-of-swift/15.html",{loader:()=>r(()=>import("./15.html-Bs-c5NxK.js"),__vite__mapDeps([429,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:13.14,words:3942},y:"a",t:"Day 15"}}],["/swift/100-days-of-swift/16.html",{loader:()=>r(()=>import("./16.html-CUrfTmE5.js"),__vite__mapDeps([430,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:20.32,words:6096},y:"a",t:"Day 16"}}],["/swift/100-days-of-swift/17.html",{loader:()=>r(()=>import("./17.html-Cn6lFkjS.js"),__vite__mapDeps([431,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:19.72,words:5917},y:"a",t:"Day 17"}}],["/swift/100-days-of-swift/18.html",{loader:()=>r(()=>import("./18.html-90OpDWX7.js"),__vite__mapDeps([432,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:4.66,words:1397},y:"a",t:"Day 18"}}],["/swift/100-days-of-swift/19.html",{loader:()=>r(()=>import("./19.html-DHpMAf-Z.js"),__vite__mapDeps([433,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:13.29,words:3988},y:"a",t:"Day 19"}}],["/swift/100-days-of-swift/20.html",{loader:()=>r(()=>import("./20.html-9XqEazk1.js"),__vite__mapDeps([434,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:9.43,words:2829},y:"a",t:"Day 20"}}],["/swift/100-days-of-swift/21.html",{loader:()=>r(()=>import("./21.html-C44t16bT.js"),__vite__mapDeps([435,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:2.15,words:646},y:"a",t:"Day 21"}}],["/swift/100-days-of-swift/22.html",{loader:()=>r(()=>import("./22.html-BGSTS9qF.js"),__vite__mapDeps([436,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:7.87,words:2362},y:"a",t:"Day 22"}}],["/swift/100-days-of-swift/23.html",{loader:()=>r(()=>import("./23.html-DF2hlcP3.js"),__vite__mapDeps([437,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:8.22,words:2467},y:"a",t:"Day 23"}}],["/swift/100-days-of-swift/24.html",{loader:()=>r(()=>import("./24.html-MbX29ZHS.js"),__vite__mapDeps([438,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:8.96,words:2689},y:"a",t:"Day 24"}}],["/swift/100-days-of-swift/25.html",{loader:()=>r(()=>import("./25.html-BK3Pf8ie.js"),__vite__mapDeps([439,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:9.99,words:2998},y:"a",t:"Day 25"}}],["/swift/100-days-of-swift/26.html",{loader:()=>r(()=>import("./26.html-DP2uozhq.js"),__vite__mapDeps([440,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:2.14,words:643},y:"a",t:"Day 26"}}],["/swift/100-days-of-swift/27.html",{loader:()=>r(()=>import("./27.html-Beq7efF2.js"),__vite__mapDeps([441,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:20.06,words:6019},y:"a",t:"Day 27"}}],["/swift/100-days-of-swift/28.html",{loader:()=>r(()=>import("./28.html-B_5Xt640.js"),__vite__mapDeps([442,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:12.17,words:3652},y:"a",t:"Day 28"}}],["/swift/100-days-of-swift/29.html",{loader:()=>r(()=>import("./29.html-CXbnqEEN.js"),__vite__mapDeps([443,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:3.43,words:1029},y:"a",t:"Day 29"}}],["/swift/100-days-of-swift/30.html",{loader:()=>r(()=>import("./30.html-D9t6KNsT.js"),__vite__mapDeps([444,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:9.3,words:2791},y:"a",t:"Day 30"}}],["/swift/100-days-of-swift/31.html",{loader:()=>r(()=>import("./31.html-oDx6D79a.js"),__vite__mapDeps([445,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:9.45,words:2836},y:"a",t:"Day 31"}}],["/swift/100-days-of-swift/32.html",{loader:()=>r(()=>import("./32.html-pFcQPYLb.js"),__vite__mapDeps([446,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:6.25,words:1876},y:"a",t:"Day 32"}}],["/swift/100-days-of-swift/33.html",{loader:()=>r(()=>import("./33.html-6O0nRmG5.js"),__vite__mapDeps([447,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:11.73,words:3520},y:"a",t:"Day 33"}}],["/swift/100-days-of-swift/34.html",{loader:()=>r(()=>import("./34.html-b28Abqln.js"),__vite__mapDeps([448,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:7,words:2099},y:"a",t:"Day 34"}}],["/swift/100-days-of-swift/35.html",{loader:()=>r(()=>import("./35.html-BcyjhlUD.js"),__vite__mapDeps([449,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:3.81,words:1142},y:"a",t:"Day 35"}}],["/swift/100-days-of-swift/36.html",{loader:()=>r(()=>import("./36.html-BBD6enIP.js"),__vite__mapDeps([450,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:16.09,words:4828},y:"a",t:"Day 36"}}],["/swift/100-days-of-swift/37.html",{loader:()=>r(()=>import("./37.html-DluyKWyT.js"),__vite__mapDeps([451,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:10.75,words:3224},y:"a",t:"Day 37"}}],["/swift/100-days-of-swift/38.html",{loader:()=>r(()=>import("./38.html-BHaaKrV_.js"),__vite__mapDeps([452,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:2.27,words:682},y:"a",t:"Day 38"}}],["/swift/100-days-of-swift/39.html",{loader:()=>r(()=>import("./39.html-DsPmpvHZ.js"),__vite__mapDeps([453,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:10.31,words:3093},y:"a",t:"Day 39"}}],["/swift/100-days-of-swift/40.html",{loader:()=>r(()=>import("./40.html-BArK-L5c.js"),__vite__mapDeps([454,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:2.18,words:653},y:"a",t:"Day 40"}}],["/swift/100-days-of-swift/41.html",{loader:()=>r(()=>import("./41.html-CT1cShh9.js"),__vite__mapDeps([455,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:6.88,words:2063},y:"a",t:"Day 41"}}],["/swift/100-days-of-swift/42.html",{loader:()=>r(()=>import("./42.html-Cr-NRUXX.js"),__vite__mapDeps([456,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:7.11,words:2132},y:"a",t:"Day 42"}}],["/swift/100-days-of-swift/43.html",{loader:()=>r(()=>import("./43.html-DIdmc431.js"),__vite__mapDeps([457,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:10.24,words:3072},y:"a",t:"Day 43"}}],["/swift/100-days-of-swift/44.html",{loader:()=>r(()=>import("./44.html-DzU5nZI4.js"),__vite__mapDeps([458,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:2.28,words:683},y:"a",t:"Day 44"}}],["/swift/100-days-of-swift/45.html",{loader:()=>r(()=>import("./45.html-qwNaI-p3.js"),__vite__mapDeps([459,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:9.82,words:2946},y:"a",t:"Day 45"}}],["/swift/100-days-of-swift/46.html",{loader:()=>r(()=>import("./46.html-DtwvbU_n.js"),__vite__mapDeps([460,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:12.3,words:3690},y:"a",t:"Day 46"}}],["/swift/100-days-of-swift/47.html",{loader:()=>r(()=>import("./47.html-D9qCIgQ8.js"),__vite__mapDeps([461,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:4.51,words:1353},y:"a",t:"Day 47"}}],["/swift/100-days-of-swift/48.html",{loader:()=>r(()=>import("./48.html-rYJd89En.js"),__vite__mapDeps([462,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:8.28,words:2485},y:"a",t:"Day 48"}}],["/swift/100-days-of-swift/49.html",{loader:()=>r(()=>import("./49.html-Yr_c9Dqd.js"),__vite__mapDeps([463,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:4.64,words:1392},y:"a",t:"Day 49"}}],["/swift/100-days-of-swift/50.html",{loader:()=>r(()=>import("./50.html-Ci_Ptyye.js"),__vite__mapDeps([464,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:5.85,words:1755},y:"a",t:"Day 50"}}],["/swift/100-days-of-swift/51.html",{loader:()=>r(()=>import("./51.html-Bukrg21Y.js"),__vite__mapDeps([465,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:1.63,words:490},y:"a",t:"Day 51"}}],["/swift/100-days-of-swift/52.html",{loader:()=>r(()=>import("./52.html-jLmWejPU.js"),__vite__mapDeps([466,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:6.33,words:1898},y:"a",t:"Day 52"}}],["/swift/100-days-of-swift/53.html",{loader:()=>r(()=>import("./53.html-D2uX7Vme.js"),__vite__mapDeps([467,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:8.5,words:2550},y:"a",t:"Day 53"}}],["/swift/100-days-of-swift/54.html",{loader:()=>r(()=>import("./54.html-CGd3Lt6z.js"),__vite__mapDeps([468,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:2.21,words:664},y:"a",t:"Day 54"}}],["/swift/100-days-of-swift/55.html",{loader:()=>r(()=>import("./55.html-CWowX1ze.js"),__vite__mapDeps([469,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:12.05,words:3615},y:"a",t:"Day 55"}}],["/swift/100-days-of-swift/56.html",{loader:()=>r(()=>import("./56.html-DzpztWp9.js"),__vite__mapDeps([470,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:6.39,words:1917},y:"a",t:"Day 56"}}],["/swift/100-days-of-swift/57.html",{loader:()=>r(()=>import("./57.html-AzBwHMSm.js"),__vite__mapDeps([471,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:8.76,words:2627},y:"a",t:"Day 57"}}],["/swift/100-days-of-swift/58.html",{loader:()=>r(()=>import("./58.html-D2qZHSyi.js"),__vite__mapDeps([472,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:2.29,words:686},y:"a",t:"Day 58"}}],["/swift/100-days-of-swift/59.html",{loader:()=>r(()=>import("./59.html-D1aj1N2X.js"),__vite__mapDeps([473,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:5.62,words:1686},y:"a",t:"Day 59"}}],["/swift/100-days-of-swift/60.html",{loader:()=>r(()=>import("./60.html-CmPU02pc.js"),__vite__mapDeps([474,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:7.37,words:2210},y:"a",t:"Day 60"}}],["/swift/100-days-of-swift/61.html",{loader:()=>r(()=>import("./61.html-DHvMYodA.js"),__vite__mapDeps([475,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:2.21,words:662},y:"a",t:"Day 61"}}],["/swift/100-days-of-swift/62.html",{loader:()=>r(()=>import("./62.html--Mf_BVOC.js"),__vite__mapDeps([476,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:7.49,words:2246},y:"a",t:"Day 62"}}],["/swift/100-days-of-swift/63.html",{loader:()=>r(()=>import("./63.html-BDiU3RfH.js"),__vite__mapDeps([477,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:1.9,words:571},y:"a",t:"Day 63"}}],["/swift/100-days-of-swift/64.html",{loader:()=>r(()=>import("./64.html-D54Mqwx5.js"),__vite__mapDeps([478,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:8.81,words:2642},y:"a",t:"Day 64"}}],["/swift/100-days-of-swift/65.html",{loader:()=>r(()=>import("./65.html-DxBAJFxC.js"),__vite__mapDeps([479,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:2.26,words:678},y:"a",t:"Day 65"}}],["/swift/100-days-of-swift/66.html",{loader:()=>r(()=>import("./66.html-gt0326Ly.js"),__vite__mapDeps([480,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:6.08,words:1823},y:"a",t:"Day 66"}}],["/swift/100-days-of-swift/67.html",{loader:()=>r(()=>import("./67.html-D_0QdDKD.js"),__vite__mapDeps([481,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:8.51,words:2554},y:"a",t:"Day 67"}}],["/swift/100-days-of-swift/68.html",{loader:()=>r(()=>import("./68.html-DfKxKEp4.js"),__vite__mapDeps([482,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:11.51,words:3454},y:"a",t:"Day 68"}}],["/swift/100-days-of-swift/69.html",{loader:()=>r(()=>import("./69.html-33hAdr0K.js"),__vite__mapDeps([483,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:2.2,words:660},y:"a",t:"Day 69"}}],["/swift/100-days-of-swift/70.html",{loader:()=>r(()=>import("./70.html-4un7-G9Y.js"),__vite__mapDeps([484,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:11.03,words:3310},y:"a",t:"Day 70"}}],["/swift/100-days-of-swift/71.html",{loader:()=>r(()=>import("./71.html-Drza7_uD.js"),__vite__mapDeps([485,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:4.26,words:1279},y:"a",t:"Day 71"}}],["/swift/100-days-of-swift/72.html",{loader:()=>r(()=>import("./72.html-C9wNjLE5.js"),__vite__mapDeps([486,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:8.2,words:2461},y:"a",t:"Day 72"}}],["/swift/100-days-of-swift/73.html",{loader:()=>r(()=>import("./73.html-DnFZI8xw.js"),__vite__mapDeps([487,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:2.82,words:846},y:"a",t:"Day 73"}}],["/swift/100-days-of-swift/74.html",{loader:()=>r(()=>import("./74.html-DCwk52yX.js"),__vite__mapDeps([488,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:7.07,words:2121},y:"a",t:"Day 74"}}],["/swift/100-days-of-swift/75.html",{loader:()=>r(()=>import("./75.html-DHaXAa5V.js"),__vite__mapDeps([489,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:10.42,words:3125},y:"a",t:"Day 75"}}],["/swift/100-days-of-swift/76.html",{loader:()=>r(()=>import("./76.html-C9uK7sN2.js"),__vite__mapDeps([490,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:2.44,words:732},y:"a",t:"Day 76"}}],["/swift/100-days-of-swift/77.html",{loader:()=>r(()=>import("./77.html-CPhObdrr.js"),__vite__mapDeps([491,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:14.74,words:4421},y:"a",t:"Day 77"}}],["/swift/100-days-of-swift/78.html",{loader:()=>r(()=>import("./78.html-BYBIjPkx.js"),__vite__mapDeps([492,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:10.1,words:3029},y:"a",t:"Day 78"}}],["/swift/100-days-of-swift/79.html",{loader:()=>r(()=>import("./79.html-BI31yiVv.js"),__vite__mapDeps([493,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:2.17,words:651},y:"a",t:"Day 79"}}],["/swift/100-days-of-swift/80.html",{loader:()=>r(()=>import("./80.html-CVyjnc3W.js"),__vite__mapDeps([494,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:7.9,words:2370},y:"a",t:"Day 80"}}],["/swift/100-days-of-swift/81.html",{loader:()=>r(()=>import("./81.html-CmNziG0l.js"),__vite__mapDeps([495,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:2.2,words:660},y:"a",t:"Day 81"}}],["/swift/100-days-of-swift/82.html",{loader:()=>r(()=>import("./82.html-BtJktvK8.js"),__vite__mapDeps([496,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:7.56,words:2268},y:"a",t:"Day 82"}}],["/swift/100-days-of-swift/83.html",{loader:()=>r(()=>import("./83.html-CeYhWZ01.js"),__vite__mapDeps([497,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:11.44,words:3431},y:"a",t:"Day 83"}}],["/swift/100-days-of-swift/84.html",{loader:()=>r(()=>import("./84.html-DGUnjtYg.js"),__vite__mapDeps([498,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:2.77,words:832},y:"a",t:"Day 84"}}],["/swift/100-days-of-swift/85.html",{loader:()=>r(()=>import("./85.html-CC7or11s.js"),__vite__mapDeps([499,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:7.52,words:2255},y:"a",t:"Day 85"}}],["/swift/100-days-of-swift/86.html",{loader:()=>r(()=>import("./86.html-D49bPV96.js"),__vite__mapDeps([500,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:8.14,words:2441},y:"a",t:"Day 86"}}],["/swift/100-days-of-swift/87.html",{loader:()=>r(()=>import("./87.html-bEjH1Q_B.js"),__vite__mapDeps([501,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:2.67,words:802},y:"a",t:"Day 87"}}],["/swift/100-days-of-swift/88.html",{loader:()=>r(()=>import("./88.html-Dkwz6n5F.js"),__vite__mapDeps([502,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:13.94,words:4182},y:"a",t:"Day 88"}}],["/swift/100-days-of-swift/89.html",{loader:()=>r(()=>import("./89.html-zkcFNL_H.js"),__vite__mapDeps([503,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:2.72,words:817},y:"a",t:"Day 89"}}],["/swift/100-days-of-swift/90.html",{loader:()=>r(()=>import("./90.html-BtGf3oaw.js"),__vite__mapDeps([504,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:5.94,words:1783},y:"a",t:"Day 90"}}],["/swift/100-days-of-swift/91.html",{loader:()=>r(()=>import("./91.html-CxFawr-6.js"),__vite__mapDeps([505,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:1.55,words:465},y:"a",t:"Day 91"}}],["/swift/100-days-of-swift/92.html",{loader:()=>r(()=>import("./92.html-DejL7rwP.js"),__vite__mapDeps([506,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:10.84,words:3251},y:"a",t:"Day 92"}}],["/swift/100-days-of-swift/93.html",{loader:()=>r(()=>import("./93.html-DwcTV3Z_.js"),__vite__mapDeps([507,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:2.24,words:671},y:"a",t:"Day 93"}}],["/swift/100-days-of-swift/94.html",{loader:()=>r(()=>import("./94.html-UbdE_V1j.js"),__vite__mapDeps([508,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:13.14,words:3941},y:"a",t:"Day 94"}}],["/swift/100-days-of-swift/95.html",{loader:()=>r(()=>import("./95.html-Ca-5hoWF.js"),__vite__mapDeps([509,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:13.22,words:3966},y:"a",t:"Day 95"}}],["/swift/100-days-of-swift/96.html",{loader:()=>r(()=>import("./96.html-CnAAMPBz.js"),__vite__mapDeps([510,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:2.1,words:631},y:"a",t:"Day 96"}}],["/swift/100-days-of-swift/97.html",{loader:()=>r(()=>import("./97.html-B-wRh9N6.js"),__vite__mapDeps([511,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:14.64,words:4391},y:"a",t:"Day 97"}}],["/swift/100-days-of-swift/98.html",{loader:()=>r(()=>import("./98.html-BFzKO5OY.js"),__vite__mapDeps([512,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:6.11,words:1833},y:"a",t:"Day 98"}}],["/swift/100-days-of-swift/99.html",{loader:()=>r(()=>import("./99.html-C5Xo00eV.js"),__vite__mapDeps([513,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:8.67,words:2602},y:"a",t:"Day 99"}}],["/swift/100-days-of-swift/",{loader:()=>r(()=>import("./index.html-Bq4wCauI.js"),__vite__mapDeps([514,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],e:`

`,r:{minutes:7.48,words:2244},y:"a",t:"100 Days of Swift",i:"fa-brands fa-swift"}}],["/swift/100-days-of-swiftui/01.html",{loader:()=>r(()=>import("./01.html-DJDrXx_5.js"),__vite__mapDeps([515,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:15.66,words:4698},y:"a",t:"Day 01"}}],["/swift/100-days-of-swiftui/02.html",{loader:()=>r(()=>import("./02.html-DMkV6Wgu.js"),__vite__mapDeps([516,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:7.3,words:2191},y:"a",t:"Day 02"}}],["/swift/100-days-of-swiftui/03.html",{loader:()=>r(()=>import("./03.html-DQcb95Nm.js"),__vite__mapDeps([517,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:14.08,words:4224},y:"a",t:"Day 03"}}],["/swift/100-days-of-swiftui/04.html",{loader:()=>r(()=>import("./04.html-BIOsvht1.js"),__vite__mapDeps([518,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:6.87,words:2060},y:"a",t:"Day 04"}}],["/swift/100-days-of-swiftui/05.html",{loader:()=>r(()=>import("./05.html-BQ0TF5QX.js"),__vite__mapDeps([519,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:16.87,words:5062},y:"a",t:"Day 05"}}],["/swift/100-days-of-swiftui/06.html",{loader:()=>r(()=>import("./06.html-C297UG-7.js"),__vite__mapDeps([520,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
<h2>Loops</h2>
`,r:{minutes:10.12,words:3037},y:"a",t:"Day 06"}}],["/swift/100-days-of-swiftui/07.html",{loader:()=>r(()=>import("./07.html-C57rmlRb.js"),__vite__mapDeps([521,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:17.43,words:5229},y:"a",t:"Day 07"}}],["/swift/100-days-of-swiftui/08.html",{loader:()=>r(()=>import("./08.html-COFUg2F3.js"),__vite__mapDeps([522,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:9.01,words:2702},y:"a",t:"Day 08"}}],["/swift/100-days-of-swiftui/09.html",{loader:()=>r(()=>import("./09.html-CwAavvBi.js"),__vite__mapDeps([523,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:17.13,words:5139},y:"a",t:"Day 09"}}],["/swift/100-days-of-swiftui/10.html",{loader:()=>r(()=>import("./10.html-hlZnnh4p.js"),__vite__mapDeps([524,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:11.98,words:3593},y:"a",t:"Day 10"}}],["/swift/100-days-of-swiftui/100.html",{loader:()=>r(()=>import("./100.html-PAAGB-3i.js"),__vite__mapDeps([525,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:1.83,words:550},y:"a",t:"Day 100"}}],["/swift/100-days-of-swiftui/101.html",{loader:()=>r(()=>import("./101.html-D6T49pVs.js"),__vite__mapDeps([526,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:3.22,words:967},y:"a",t:"Epilog"}}],["/swift/100-days-of-swiftui/11.html",{loader:()=>r(()=>import("./11.html-CgtvK6B_.js"),__vite__mapDeps([527,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:8.25,words:2474},y:"a",t:"Day 11"}}],["/swift/100-days-of-swiftui/12.html",{loader:()=>r(()=>import("./12.html-CsoH-ixg.js"),__vite__mapDeps([528,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:16.69,words:5007},y:"a",t:"Day 12"}}],["/swift/100-days-of-swiftui/13.html",{loader:()=>r(()=>import("./13.html-BKzx_jNT.js"),__vite__mapDeps([529,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:20.11,words:6034},y:"a",t:"Day 13"}}],["/swift/100-days-of-swiftui/14.html",{loader:()=>r(()=>import("./14.html-DtspfIP7.js"),__vite__mapDeps([530,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:14.69,words:4407},y:"a",t:"Day 14"}}],["/swift/100-days-of-swiftui/15.html",{loader:()=>r(()=>import("./15.html-2Q-1QzwR.js"),__vite__mapDeps([531,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:1.64,words:491},y:"a",t:"Day 15"}}],["/swift/100-days-of-swiftui/16.html",{loader:()=>r(()=>import("./16.html-C0lX8g4U.js"),__vite__mapDeps([532,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:18.26,words:5478},y:"a",t:"Day 16"}}],["/swift/100-days-of-swiftui/17.html",{loader:()=>r(()=>import("./17.html-DYOSQnbP.js"),__vite__mapDeps([533,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:15.18,words:4555},y:"a",t:"Day 18"}}],["/swift/100-days-of-swiftui/18.html",{loader:()=>r(()=>import("./18.html-DUJCY7DX.js"),__vite__mapDeps([534,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:2.99,words:898},y:"a",t:"Day 18"}}],["/swift/100-days-of-swiftui/19.html",{loader:()=>r(()=>import("./19.html-C5aPVLlt.js"),__vite__mapDeps([535,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:3.45,words:1035},y:"a",t:"Day 19"}}],["/swift/100-days-of-swiftui/20.html",{loader:()=>r(()=>import("./20.html-CQC4wWte.js"),__vite__mapDeps([536,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:13.78,words:4133},y:"a",t:"Day 20"}}],["/swift/100-days-of-swiftui/21.html",{loader:()=>r(()=>import("./21.html-DJtm6II2.js"),__vite__mapDeps([537,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:11.07,words:3322},y:"a",t:"Day 21"}}],["/swift/100-days-of-swiftui/22.html",{loader:()=>r(()=>import("./22.html-DdM3QJw1.js"),__vite__mapDeps([538,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:2.38,words:715},y:"a",t:"Day 22"}}],["/swift/100-days-of-swiftui/23.html",{loader:()=>r(()=>import("./23.html-C8f5cyw5.js"),__vite__mapDeps([539,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:16.39,words:4916},y:"a",t:"Day 23"}}],["/swift/100-days-of-swiftui/24.html",{loader:()=>r(()=>import("./24.html-Q-pFF4v1.js"),__vite__mapDeps([540,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:2.21,words:664},y:"a",t:"Day 24"}}],["/swift/100-days-of-swiftui/25.html",{loader:()=>r(()=>import("./25.html-B8-LP-Js.js"),__vite__mapDeps([541,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:12.24,words:3672},y:"a",t:"Day 25"}}],["/swift/100-days-of-swiftui/26.html",{loader:()=>r(()=>import("./26.html-DuQx_w18.js"),__vite__mapDeps([542,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:13.82,words:4147},y:"a",t:"Day 26"}}],["/swift/100-days-of-swiftui/27.html",{loader:()=>r(()=>import("./27.html-DRZcS8Zd.js"),__vite__mapDeps([543,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:10.26,words:3077},y:"a",t:"Day 27"}}],["/swift/100-days-of-swiftui/28.html",{loader:()=>r(()=>import("./28.html-BP5dra6a.js"),__vite__mapDeps([544,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:2.59,words:777},y:"a",t:"Day 28"}}],["/swift/100-days-of-swiftui/29.html",{loader:()=>r(()=>import("./29.html-Bo1NqUz_.js"),__vite__mapDeps([545,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:9.41,words:2824},y:"a",t:"Day 29"}}],["/swift/100-days-of-swiftui/30.html",{loader:()=>r(()=>import("./30.html-CFKVd-6T.js"),__vite__mapDeps([546,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:9.66,words:2899},y:"a",t:"Day 30"}}],["/swift/100-days-of-swiftui/31.html",{loader:()=>r(()=>import("./31.html-e-A8YUg6.js"),__vite__mapDeps([547,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:2.23,words:670},y:"a",t:"Day 31"}}],["/swift/100-days-of-swiftui/32.html",{loader:()=>r(()=>import("./32.html-Copk_7_6.js"),__vite__mapDeps([548,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:10.74,words:3222},y:"a",t:"Day 32"}}],["/swift/100-days-of-swiftui/33.html",{loader:()=>r(()=>import("./33.html-XHTNNL2R.js"),__vite__mapDeps([549,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:9.63,words:2890},y:"a",t:"Day 33"}}],["/swift/100-days-of-swiftui/34.html",{loader:()=>r(()=>import("./34.html-jEslcLXq.js"),__vite__mapDeps([550,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:2.32,words:695},y:"a",t:"Day 34"}}],["/swift/100-days-of-swiftui/35.html",{loader:()=>r(()=>import("./35.html-DtDcHEz3.js"),__vite__mapDeps([551,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:10.57,words:3170},y:"a",t:"Day 35"}}],["/swift/100-days-of-swiftui/36.html",{loader:()=>r(()=>import("./36.html-BU8HsGy0.js"),__vite__mapDeps([552,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:18.55,words:5566},y:"a",t:"Day 36"}}],["/swift/100-days-of-swiftui/37.html",{loader:()=>r(()=>import("./37.html-SwW5jndY.js"),__vite__mapDeps([553,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:15.7,words:4709},y:"a",t:"Day 37"}}],["/swift/100-days-of-swiftui/38.html",{loader:()=>r(()=>import("./38.html-BhZbe5ic.js"),__vite__mapDeps([554,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:2.21,words:664},y:"a",t:"Day 38"}}],["/swift/100-days-of-swiftui/39.html",{loader:()=>r(()=>import("./39.html-DRdktFEC.js"),__vite__mapDeps([555,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:12.64,words:3791},y:"a",t:"Day 39"}}],["/swift/100-days-of-swiftui/40.html",{loader:()=>r(()=>import("./40.html-B1GRvoOr.js"),__vite__mapDeps([556,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:14.14,words:4242},y:"a",t:"Day 40"}}],["/swift/100-days-of-swiftui/41.html",{loader:()=>r(()=>import("./41.html-CzA7FlHq.js"),__vite__mapDeps([557,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:7.59,words:2278},y:"a",t:"Day 41"}}],["/swift/100-days-of-swiftui/42.html",{loader:()=>r(()=>import("./42.html-BjszJZCe.js"),__vite__mapDeps([558,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:2.77,words:832},y:"a",t:"Day 42"}}],["/swift/100-days-of-swiftui/43.html",{loader:()=>r(()=>import("./43.html-nxzQkSN6.js"),__vite__mapDeps([559,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:9.44,words:2831},y:"a",t:"Day 43"}}],["/swift/100-days-of-swiftui/44.html",{loader:()=>r(()=>import("./44.html-t7CcMDQn.js"),__vite__mapDeps([560,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:9.04,words:2711},y:"a",t:"Day 44"}}],["/swift/100-days-of-swiftui/45.html",{loader:()=>r(()=>import("./45.html-sAF1mMLA.js"),__vite__mapDeps([561,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:11.61,words:3482},y:"a",t:"Day 45"}}],["/swift/100-days-of-swiftui/46.html",{loader:()=>r(()=>import("./46.html-CeQ0Nrsy.js"),__vite__mapDeps([562,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
<h2>Project 9, part 4</h2>
`,r:{minutes:2.26,words:677},y:"a",t:"Day 46"}}],["/swift/100-days-of-swiftui/47.html",{loader:()=>r(()=>import("./47.html-zM6XSceq.js"),__vite__mapDeps([563,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
<h2>Milestone: Projects 7-9</h2>
`,r:{minutes:8.92,words:2676},y:"a",t:"Day 47"}}],["/swift/100-days-of-swiftui/48.html",{loader:()=>r(()=>import("./48.html-BsbJ7xq0.js"),__vite__mapDeps([564,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
<h2>Expanding your horizons</h2>
`,r:{minutes:1.44,words:432},y:"a",t:"Day 48"}}],["/swift/100-days-of-swiftui/49.html",{loader:()=>r(()=>import("./49.html-M88WOKJ4.js"),__vite__mapDeps([565,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
<h2>Project 10, part 1</h2>
`,r:{minutes:14.03,words:4209},y:"a",t:"Day 49"}}],["/swift/100-days-of-swiftui/50.html",{loader:()=>r(()=>import("./50.html-CiRrTEZf.js"),__vite__mapDeps([566,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
<h2>Project 10, part 2</h2>
`,r:{minutes:8.87,words:2660},y:"a",t:"Day 50"}}],["/swift/100-days-of-swiftui/51.html",{loader:()=>r(()=>import("./51.html-CCnuLCs2.js"),__vite__mapDeps([567,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
<h2>Project 10, part 3</h2>
`,r:{minutes:12.25,words:3675},y:"a",t:"Day 51"}}],["/swift/100-days-of-swiftui/52.html",{loader:()=>r(()=>import("./52.html-BYlJxfG7.js"),__vite__mapDeps([568,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
<h2>Project 10, part 4</h2>
`,r:{minutes:2.47,words:742},y:"a",t:"Day 52"}}],["/swift/100-days-of-swiftui/53.html",{loader:()=>r(()=>import("./53.html-C_3zdZjW.js"),__vite__mapDeps([569,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
<h2>Project 11, part 1</h2>
`,r:{minutes:12.56,words:3767},y:"a",t:"Day 53"}}],["/swift/100-days-of-swiftui/54.html",{loader:()=>r(()=>import("./54.html-Dx5cWx7Y.js"),__vite__mapDeps([570,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
<h2>Project 11, part 2</h2>
`,r:{minutes:8.8,words:2640},y:"a",t:"Day 54"}}],["/swift/100-days-of-swiftui/55.html",{loader:()=>r(()=>import("./55.html-W-hezGJx.js"),__vite__mapDeps([571,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
<h2>Project 11, part 3</h2>
`,r:{minutes:8.92,words:2677},y:"a",t:"Day 55"}}],["/swift/100-days-of-swiftui/56.html",{loader:()=>r(()=>import("./56.html-WR4C1ag_.js"),__vite__mapDeps([572,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
<h2>Project 11, part 4</h2>
`,r:{minutes:2.84,words:851},y:"a",t:"Day 56"}}],["/swift/100-days-of-swiftui/57.html",{loader:()=>r(()=>import("./57.html-efGehPWq.js"),__vite__mapDeps([573,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
<h2>Project 12, part 1</h2>
`,r:{minutes:7.63,words:2290},y:"a",t:"Day 57"}}],["/swift/100-days-of-swiftui/58.html",{loader:()=>r(()=>import("./58.html-C7lyCyNw.js"),__vite__mapDeps([574,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
<h2>Project 12, part 2</h2>
`,r:{minutes:10.98,words:3293},y:"a",t:"Day 58"}}],["/swift/100-days-of-swiftui/59.html",{loader:()=>r(()=>import("./59.html-DZHJnqgp.js"),__vite__mapDeps([575,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
<h2>Project 12, part 3</h2>
`,r:{minutes:1.97,words:591},y:"a",t:"Day 59"}}],["/swift/100-days-of-swiftui/60.html",{loader:()=>r(()=>import("./60.html-B_XEZ8cQ.js"),__vite__mapDeps([576,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
<h2>Milestone: Projects 10-12</h2>
`,r:{minutes:10.86,words:3259},y:"a",t:"Day 60"}}],["/swift/100-days-of-swiftui/61.html",{loader:()=>r(()=>import("./61.html-CSuaKmuw.js"),__vite__mapDeps([577,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
<h2>Time for SwiftData</h2>
`,r:{minutes:1.98,words:595},y:"a",t:"Day 61"}}],["/swift/100-days-of-swiftui/62.html",{loader:()=>r(()=>import("./62.html-GlRgK1_4.js"),__vite__mapDeps([578,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
<h2>Project 13, part 1</h2>
`,r:{minutes:7.82,words:2346},y:"a",t:"Day 62"}}],["/swift/100-days-of-swiftui/63.html",{loader:()=>r(()=>import("./63.html-BgznYOZT.js"),__vite__mapDeps([579,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
<h2>Project 13, part 2</h2>
`,r:{minutes:8.08,words:2423},y:"a",t:"Day 63"}}],["/swift/100-days-of-swiftui/64.html",{loader:()=>r(()=>import("./64.html-C-h3bQbx.js"),__vite__mapDeps([580,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
<h2>Project 13, part 3</h2>
`,r:{minutes:6.26,words:1877},y:"a",t:"Day 64"}}],["/swift/100-days-of-swiftui/65.html",{loader:()=>r(()=>import("./65.html-CiLMD28o.js"),__vite__mapDeps([581,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
<h2>Project 13, part 4</h2>
`,r:{minutes:7.48,words:2244},y:"a",t:"Day 65"}}],["/swift/100-days-of-swiftui/66.html",{loader:()=>r(()=>import("./66.html-DhrnBlck.js"),__vite__mapDeps([582,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
<h2>Project 13, part 5</h2>
`,r:{minutes:6.76,words:2028},y:"a",t:"Day 66"}}],["/swift/100-days-of-swiftui/67.html",{loader:()=>r(()=>import("./67.html-eqtrIovM.js"),__vite__mapDeps([583,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
<h2>Project 13, part 6</h2>
`,r:{minutes:2.1,words:629},y:"a",t:"Day 67"}}],["/swift/100-days-of-swiftui/68.html",{loader:()=>r(()=>import("./68.html-C7rD1xZ_.js"),__vite__mapDeps([584,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:9.7,words:2910},y:"a",t:"Day 68"}}],["/swift/100-days-of-swiftui/69.html",{loader:()=>r(()=>import("./69.html-NbnsDnbs.js"),__vite__mapDeps([585,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:8.23,words:2470},y:"a",t:"Day 69"}}],["/swift/100-days-of-swiftui/70.html",{loader:()=>r(()=>import("./70.html-BCjLuzEa.js"),__vite__mapDeps([586,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:11.16,words:3348},y:"a",t:"Day 70"}}],["/swift/100-days-of-swiftui/71.html",{loader:()=>r(()=>import("./71.html-p6Qh2i61.js"),__vite__mapDeps([587,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:5.11,words:1534},y:"a",t:"Day 71"}}],["/swift/100-days-of-swiftui/72.html",{loader:()=>r(()=>import("./72.html-BVUi6zNz.js"),__vite__mapDeps([588,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:9.92,words:2977},y:"a",t:"Day 72"}}],["/swift/100-days-of-swiftui/73.html",{loader:()=>r(()=>import("./73.html-DYIPLvN1.js"),__vite__mapDeps([589,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:2.04,words:613},y:"a",t:"Day 73"}}],["/swift/100-days-of-swiftui/74.html",{loader:()=>r(()=>import("./74.html-C98Q8duW.js"),__vite__mapDeps([590,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:8.1,words:2429},y:"a",t:"Day 74"}}],["/swift/100-days-of-swiftui/75.html",{loader:()=>r(()=>import("./75.html-Bbv1fElY.js"),__vite__mapDeps([591,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:6.49,words:1947},y:"a",t:"Day 75"}}],["/swift/100-days-of-swiftui/76.html",{loader:()=>r(()=>import("./76.html-C1JSIajh.js"),__vite__mapDeps([592,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:1.97,words:592},y:"a",t:"Day 76"}}],["/swift/100-days-of-swiftui/77.html",{loader:()=>r(()=>import("./77.html-CrfZyZHF.js"),__vite__mapDeps([593,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:7.3,words:2190},y:"a",t:"Day 77"}}],["/swift/100-days-of-swiftui/78.html",{loader:()=>r(()=>import("./78.html-K27BBfCg.js"),__vite__mapDeps([594,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:1.5,words:451},y:"a",t:"Day 78"}}],["/swift/100-days-of-swiftui/79.html",{loader:()=>r(()=>import("./79.html-QKmedscO.js"),__vite__mapDeps([595,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:5.99,words:1797},y:"a",t:"Day 79"}}],["/swift/100-days-of-swiftui/80.html",{loader:()=>r(()=>import("./80.html-DUlFT_oZ.js"),__vite__mapDeps([596,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:6.61,words:1984},y:"a",t:"Day 80"}}],["/swift/100-days-of-swiftui/81.html",{loader:()=>r(()=>import("./81.html-CqvVJzBW.js"),__vite__mapDeps([597,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:7.7,words:2310},y:"a",t:"Day 81"}}],["/swift/100-days-of-swiftui/82.html",{loader:()=>r(()=>import("./82.html-D5eHV070.js"),__vite__mapDeps([598,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:6.04,words:1813},y:"a",t:"Day 82"}}],["/swift/100-days-of-swiftui/83.html",{loader:()=>r(()=>import("./83.html-CP302JK4.js"),__vite__mapDeps([599,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:10.19,words:3056},y:"a",t:"Day 83"}}],["/swift/100-days-of-swiftui/84.html",{loader:()=>r(()=>import("./84.html-CRs9UjEo.js"),__vite__mapDeps([600,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:6,words:1799},y:"a",t:"Day 84"}}],["/swift/100-days-of-swiftui/85.html",{loader:()=>r(()=>import("./85.html-CPk1gwZ1.js"),__vite__mapDeps([601,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:2.13,words:639},y:"a",t:"Day 85"}}],["/swift/100-days-of-swiftui/86.html",{loader:()=>r(()=>import("./86.html-BwICsNs8.js"),__vite__mapDeps([602,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:7.11,words:2132},y:"a",t:"Day 86"}}],["/swift/100-days-of-swiftui/87.html",{loader:()=>r(()=>import("./87.html-d3yd8lLH.js"),__vite__mapDeps([603,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:7.15,words:2144},y:"a",t:"Day 87"}}],["/swift/100-days-of-swiftui/88.html",{loader:()=>r(()=>import("./88.html-BjWUDNJR.js"),__vite__mapDeps([604,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:11.47,words:3441},y:"a",t:"Day 88"}}],["/swift/100-days-of-swiftui/89.html",{loader:()=>r(()=>import("./89.html-_Rlk-99y.js"),__vite__mapDeps([605,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:7.31,words:2194},y:"a",t:"Day 89"}}],["/swift/100-days-of-swiftui/90.html",{loader:()=>r(()=>import("./90.html-DGVPyjws.js"),__vite__mapDeps([606,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:8.62,words:2585},y:"a",t:"Day 90"}}],["/swift/100-days-of-swiftui/91.html",{loader:()=>r(()=>import("./91.html-CCnJGEpu.js"),__vite__mapDeps([607,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:2.37,words:712},y:"a",t:"Day 91"}}],["/swift/100-days-of-swiftui/92.html",{loader:()=>r(()=>import("./92.html-BwEDOJjs.js"),__vite__mapDeps([608,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:14.13,words:4238},y:"a",t:"Day 92"}}],["/swift/100-days-of-swiftui/93.html",{loader:()=>r(()=>import("./93.html-BmOB2Sha.js"),__vite__mapDeps([609,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:10.64,words:3193},y:"a",t:"Day 93"}}],["/swift/100-days-of-swiftui/94.html",{loader:()=>r(()=>import("./94.html-h9If5Gzh.js"),__vite__mapDeps([610,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:2.63,words:789},y:"a",t:"Day 94"}}],["/swift/100-days-of-swiftui/95.html",{loader:()=>r(()=>import("./95.html-BZkEWvs2.js"),__vite__mapDeps([611,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:7.09,words:2127},y:"a",t:"Day 95"}}],["/swift/100-days-of-swiftui/96.html",{loader:()=>r(()=>import("./96.html-D43C4PI9.js"),__vite__mapDeps([612,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:9.46,words:2839},y:"a",t:"Day 96"}}],["/swift/100-days-of-swiftui/97.html",{loader:()=>r(()=>import("./97.html-BTLkSyUt.js"),__vite__mapDeps([613,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:12.38,words:3713},y:"a",t:"Day 97"}}],["/swift/100-days-of-swiftui/98.html",{loader:()=>r(()=>import("./98.html-BzH0IHIB.js"),__vite__mapDeps([614,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:9.68,words:2904},y:"a",t:"Day 98"}}],["/swift/100-days-of-swiftui/99.html",{loader:()=>r(()=>import("./99.html-B1qTj8_H.js"),__vite__mapDeps([615,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:1.88,words:564},y:"a",t:"Day 99"}}],["/swift/100-days-of-swiftui/",{loader:()=>r(()=>import("./index.html-C0BNSYyQ.js"),__vite__mapDeps([616,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

`,r:{minutes:8.06,words:2418},y:"a",t:"100 Days of SwiftUI",i:"fa-brands fa-swift"}}],["/swift/kodeco/6334294-my-app-crashed-now-what.html",{loader:()=>r(()=>import("./6334294-my-app-crashed-now-what.html-ByR9bEnI.js"),__vite__mapDeps([617,1])),meta:{c:["Swift"],g:["crashcourse","kodeco","swift","ios","xcode"],e:`

<hr>
`,r:{minutes:12.71,words:3814},y:"a",t:"My App Crashed, Now What?"}}],["/swift/kodeco/6398124-swiftui-tutorial-for-ios-creating-charts.html",{loader:()=>r(()=>import("./6398124-swiftui-tutorial-for-ios-creating-charts.html-DZvIBlYA.js"),__vite__mapDeps([618,1])),meta:{c:["Swift"],g:["crashcourse","kodeco","swift","ios","xcode"],e:`

<hr>
`,r:{minutes:15.51,words:4653},y:"a",t:"SwiftUI Tutorial for iOS - Creating Charts"}}],["/swift/kodeco/6587213-alamofire-5-tutorial-for-ios-getting-started.html",{loader:()=>r(()=>import("./6587213-alamofire-5-tutorial-for-ios-getting-started.html-LQgs0fuq.js"),__vite__mapDeps([619,1])),meta:{c:["Swift"],g:["crashcourse","kodeco","swift","ios","xcode"],e:`

<hr>
`,r:{minutes:2.61,words:782},y:"a",t:"Alamofire 5 Tutorial for iOS - Getting Started"}}],["/swift/kodeco/6620276-sqlite-with-swift-tutorial-getting-started.html",{loader:()=>r(()=>import("./6620276-sqlite-with-swift-tutorial-getting-started.html-DhbSlvmj.js"),__vite__mapDeps([620,1])),meta:{c:["Swift"],g:["crashcourse","kodeco","swift","ios","xcode"],e:`

<hr>
`,r:{minutes:17.66,words:5298},y:"a",t:"SQLite With Swift Tutorial - Getting Started"}}],["/swift/kodeco/6742901-protocol-oriented-programming-tutorial-in-swift-5-1-getting-started.html",{loader:()=>r(()=>import("./6742901-protocol-oriented-programming-tutorial-in-swift-5-1-getting-started.html-ByrWfQ-4.js"),__vite__mapDeps([621,1])),meta:{c:["Swift"],g:["crashcourse","kodeco","swift","ios","xcode"],e:`

<hr>
`,r:{minutes:10.74,words:3222},y:"a",t:"Protocol-Oriented Programming Tutorial in Swift 5.1 - Getting Started"}}],["/swift/kodeco/6747815-uigesturerecognizer-tutorial-getting-started.html",{loader:()=>r(()=>import("./6747815-uigesturerecognizer-tutorial-getting-started.html-BZF7eLzM.js"),__vite__mapDeps([622,1])),meta:{c:["Swift"],g:["crashcourse","kodeco","swift","ios","xcode"],e:`

<hr>
`,r:{minutes:13.75,words:4125},y:"a",t:"UIGestureRecognizer Tutorial - Getting Started"}}],["/swift/kodeco/6827616-ios-accessibility-getting-started.html",{loader:()=>r(()=>import("./6827616-ios-accessibility-getting-started.html-Cb4NUIfk.js"),__vite__mapDeps([623,1])),meta:{c:["Swift"],g:["crashcourse","kodeco","swift","ios","xcode"],e:`

<hr>
`,r:{minutes:5.35,words:1605},y:"a",t:"iOS Accessibility - Getting Started"}}],["/swift/kodeco/7076593-cocoapods-tutorial-for-swift-getting-started.html",{loader:()=>r(()=>import("./7076593-cocoapods-tutorial-for-swift-getting-started.html-BBkjVY7B.js"),__vite__mapDeps([624,1])),meta:{c:["Swift"],g:["crashcourse","kodeco","swift","ios","xcode"],e:`

<hr>
`,r:{minutes:10.64,words:3192},y:"a",t:"CocoaPods Tutorial for Swift - Getting Started"}}],["/swift/kodeco/7181017-unsafe-swift-using-pointers-and-interacting-with-c.html",{loader:()=>r(()=>import("./7181017-unsafe-swift-using-pointers-and-interacting-with-c.html-Cnxizw7A.js"),__vite__mapDeps([625,1])),meta:{c:["Swift"],g:["crashcourse","kodeco","swift","ios","xcode"],e:`

<hr>
`,r:{minutes:8.24,words:2473},y:"a",t:"Unsafe Swift - Using Pointers and Interacting With C"}}],["/swift/kodeco/",{loader:()=>r(()=>import("./index.html-2MZnJ801.js"),__vite__mapDeps([626,1])),meta:{c:["Swift"],g:["crashcourse","kodeco","swift","ios","xcode"],e:`

<!-- https://www.kodeco.com/library?domain_ids%5B%5D=1&domain_ids%5B%5D=8&content_types%5B%5D=article -->
<hr>
<h2>2023</h2>
`,r:{minutes:42.02,words:12605},y:"a",t:"Kodeco - Swift",i:"fa-brands fa-swift"}}],["/swift/learn-essential-swift-in-one-hour/",{loader:()=>r(()=>import("./index.html-DDIfyRFT.js"),__vite__mapDeps([627,1])),meta:{c:["Swift"],g:["crashcourse","kodeco","swift","ios","xcode"],e:`

<hr>
`,r:{minutes:16.74,words:5022},y:"a",t:"Learn essential Swift in one hour",i:"fa-brands fa-swift"}}],["/swift/shuokai-objc/01.html",{loader:()=>r(()=>import("./01.html-BdbWfkSJ.js"),__vite__mapDeps([628,1])),meta:{c:["Objective-C"],g:["crashcourse","xcode","objective-c","objc"],e:`

<hr>
<h2>A. 객체 개념</h2>
<h3>소프트웨러를 기능중심으로 설계했을 때의 문제점</h3>
<p>C, 파스칼, 오래된 베이직 같은 프로그래밍 언어는 대부분 '이것을 하고 다음엔 저것을 한다'는 식의 시간 순으로 처리할 내용을 적는 <strong>순차 처리</strong>, 조건 성립에 따라 처리 내용을 선택하는 <strong>분기</strong>, 같은 처리를 몇 번이고 되풀이하는 <strong>반복문</strong>, 이렇게 세 가지 기본 유형을 조합해서 프로그램을 만듭니다. 이런 언어가 __절차형 언어__입니다.</p>`,r:{minutes:.6,words:181},y:"a",t:"01. 객체 기반 소프트웨어 작성"}}],["/swift/shuokai-objc/02.html",{loader:()=>r(()=>import("./02.html-CUH4UvL1.js"),__vite__mapDeps([629,1])),meta:{c:["Objective-C"],g:["crashcourse","xcode","objective-c","objc"],e:`

<hr>
<h2>A. 객체와 메시지</h2>
<h3>메시지 표현식</h3>
<h3>메시지 셀렉터</h3>
<h3>인스턴스 생성과 초기화</h3>
<hr>
<h2>B. 클래스 정의</h2>
<h3>클래스 인터페이스</h3>
<h3>클래스 구현 부분</h3>
<h3>클래스 정의 예제</h3>
<hr>
<h2>C. 컴파일</h2>
<h3>간단한 컴파일 방법</h3>
<h3>분할 컴파일</h3>
<hr>
<h2>D. 프로그램 작성법</h2>
<h3>하이브리드 언어</h3>
<h3>C 함수 이용 방법</h3>
<h3>정적 변수 정의</h3>`,r:{minutes:.19,words:58},y:"a",t:"02. Objective-C 프로그램"}}],["/swift/shuokai-objc/03.html",{loader:()=>r(()=>import("./03.html-rwWqvTa3.js"),__vite__mapDeps([630,1])),meta:{c:["Objective-C"],g:["crashcourse","xcode","objective-c","objc"],e:`

<hr>
<h2>A. 상속 개념</h2>
<h3>슈퍼 클래스와 서브 클래스</h3>
<h3>클래스 계층</h3>
<hr>
<h2>B. 상속을 사용한 클래스 정의</h2>
<h3>상속 관계 선언</h3>
<h3>클래스 정의와 헤더 파일</h3>
<h3>상속과 메서드 호출</h3>
<h3>슈퍼 클래스의 메서드 호출</h3>
<h3>초기자 정의</h3>
<hr>
<h2>C. 상속을 사용한 프로그램 예제</h2>
<h3>메서드 추가 예제</h3>
<h3>메서드 재정의 예제</h3>
<hr>
<h2>D. 상속과 메서드 호출</h2>
<h3><code>self</code>를 사용한 메서드 호출</h3>`,r:{minutes:.17,words:52},y:"a",t:"03. 상속과 클래스"}}],["/swift/shuokai-objc/04.html",{loader:()=>r(()=>import("./04.html-chbHl66n.js"),__vite__mapDeps([631,1])),meta:{c:["Objective-C"],g:["crashcourse","xcode","objective-c","objc"],e:`

<hr>
<h2>A. 동적 결합</h2>
<h3>동적 결합이란</h3>
<h3>다형성</h3>
<hr>
<h2>B. 형식과 클래스</h2>
<h3>클래스병을 형식으로 사용</h3>
<h3>빈 포이터 <code>nil</code></h3>
<h3>형식의 정적 확인</h3>
<h3>정적 형식 확인 정리</h3>
<hr>
<h2>C. 프로그래밍과 형식 선언</h2>
<h3>서명이 다를 때</h3>
<h3>클래스 전방 선언</h3>
<h3>캐스트를 사용한 예제</h3>
<hr>
<h2>D. 인스턴스 변수의 정보 은폐</h2>
<h3>인스턴스 변수에 접근</h3>`,r:{minutes:.17,words:51},y:"a",t:"04. 객체 형식과 동적 결합"}}],["/swift/shuokai-objc/05.html",{loader:()=>r(()=>import("./05.html-B8KJFwgp.js"),__vite__mapDeps([632,1])),meta:{c:["Objective-C"],g:["crashcourse","xcode","objective-c","objc"],e:`

<hr>
<h2>A. 동적 메모리 관리</h2>
<h3>메모리 관리의 필요성</h3>
<h3>카운터 관리 방식과 ARC, 가비지 컬랙션</h3>
<hr>
<h2>B. 수동 카운터 관리 방식</h2>
<h3>참조 카운터</h3>
<h3>참조 카운터 확인 프로그램</h3>
<h3>인스턴스를 해제하는 메서드 정의</h3>
<h3>접근자 메서드와 소유권</h3>
<h3>인스턴스 자동 해제</h3>
<h3>자동 해제 풀 사용법과 주의점</h3>
<h3>임시 인스턴스 생성</h3>
<h3>실행 반복과 자동 해제 풀</h3>
<h3>해제되지 않은 객체</h3>`,r:{minutes:.21,words:62},y:"a",t:"05. 참조 카운터를 사용한 메모리 관리 방법"}}],["/swift/shuokai-objc/06.html",{loader:()=>r(()=>import("./06.html-Bn6phx5-.js"),__vite__mapDeps([633,1])),meta:{c:["Objective-C"],g:["crashcourse","xcode","objective-c","objc"],e:`

<hr>
<h2>A. 가비지 컬랙션 개요</h2>
<h3>필요 없는 객체를 찾으려면</h3>
<h3>프로그램 작성 시 주의사항</h3>
<h3>가비지 컬렉터 동작</h3>
<h3><code>finalize</code> 메서드 정의</h3>
<h3>컴파일 관련 설정</h3>
<h3>카운터 관리 방식의 메서드 취급</h3>
<h3>가비지 컬렉션을 사용한 프로그램 정리</h3>
<hr>
<h2>B. 가비지 컬렉션의 자세한 기능</h2>
<h3>세대별 가비지 컬렉션</h3>
<h3>약한 참조</h3>
<h3>제로화</h3>
<h3>가비지 컬렉션으로 회수되는 메모리 영역</h3>`,r:{minutes:.17,words:52},y:"a",t:"06. 가비지 컬렉션"}}],["/swift/shuokai-objc/07.html",{loader:()=>r(()=>import("./07.html-Bduu0BF4.js"),__vite__mapDeps([634,1])),meta:{c:["Objective-C"],g:["crashcourse","xcode","objective-c","objc"],e:`

<hr>
<h2>A. 프로퍼티란</h2>
<h3>프로퍼티를 사용한 프로그래밍</h3>
<h3>프로퍼티 개념</h3>
<hr>
<h2>B. 프로퍼티 선언과 기능</h2>
<h3>명시적인 프로퍼티 선언</h3>
<h3>프로퍼티 구현</h3>
<h3><code>@synthesize</code>의 인스턴스 변수</h3>
<h3><code>@synthesize</code>의 인스턴스 변수 생성</h3>
<h3>프로퍼티 속성 지정</h3>
<h3>값 설정 방법 지정</h3>
<h3><code>atomic</code> 관련 메모리 관리 속성</h3>`,r:{minutes:.17,words:51},y:"a",t:"07. 선언 프로퍼티"}}],["/swift/shuokai-objc/08.html",{loader:()=>r(()=>import("./08.html-DG3JeXJw.js"),__vite__mapDeps([635,1])),meta:{c:["Objective-C"],g:["crashcourse","xcode","objective-c","objc"],e:`

<hr>
<h2>A. <code>NSObject</code> 클래스</h2>
<h3>루트 클래스의 역할</h3>
<h3>클래스와 인스턴스</h3>
<h3>인스턴스 생성과 해제</h3>
<h3>초기화</h3>
<h3>객체 비교</h3>
<h3>객체 내용 설명</h3>
<hr>
<h2>B. 메시지 송신 구조</h2>
<h3>셀렉터와 SEL형</h3>
<h3>메시지 탐색</h3>
<h3>메시지 함수 구현</h3>
<h3><code>self</code>에 대입</h3>
<h3>메시지 송신 실행 속도</h3>
<h3>클래스 객체와 루트 클래스</h3>`,r:{minutes:.24,words:71},y:"a",t:"08. NSObject 클래스와 런타임 시스템"}}],["/swift/shuokai-objc/09.html",{loader:()=>r(()=>import("./09.html-Cnt05uMg.js"),__vite__mapDeps([636,1])),meta:{c:["Objective-C"],g:["crashcourse","xcode","objective-c","objc"],e:`

<hr>
<h2>A. 객체 변경 가능성</h2>
<h3>변경 가능 객체와 불가능 객체</h3>
<h3>변경 가능 객체 작성</h3>
<hr>
<h2>B. 문자열 클래스</h2>
<h3>객체 상수 문자열</h3>
<h3><code>NSString</code></h3>
<h3><code>NSMutableString</code></h3>
<hr>
<h2>C. 데이터 클래스</h2>
<h3><code>NSData</code></h3>
<h3><code>NSMutableData</code></h3>
<hr>
<h2>D. 배열 클래스</h2>`,r:{minutes:.24,words:73},y:"a",t:"09. Foundation 프레임워크의 중요 클래스"}}],["/swift/shuokai-objc/10.html",{loader:()=>r(()=>import("./10.html-20GwEOvX.js"),__vite__mapDeps([637,1])),meta:{c:["Objective-C"],g:["crashcourse","xcode","objective-c","objc"],e:`

<hr>
<h2>A. 카테고리 선언과 정의</h2>
<h3>카테고리란</h3>
<h3>카테고리와 파일 작성</h3>
<h3>서브 모듈로서의 카테고리</h3>
<h3>메서드 전방 선언</h3>
<h3>비공개 메서드</h3>
<h3>클래스 확장</h3>
<h3>카테고리와 선언 프로퍼티</h3>
<hr>
<h2>B. 기존 클래스에 카테고리 추가</h2>
<h3>새로운 메서드 추가</h3>
<h3>메서드 추가 예제</h3>
<h3>기존 메서드 덮어쓰기</h3>
<hr>
<h2>C. 연상 참조</h2>
<h3>연상 참조 개요</h3>
<h3>객체 연결과 참조</h3>`,r:{minutes:.16,words:48},y:"a",t:"10. 카테고리"}}],["/swift/shuokai-objc/11.html",{loader:()=>r(()=>import("./11.html-Dg9VBgCg.js"),__vite__mapDeps([638,1])),meta:{c:["Objective-C"],g:["crashcourse","xcode","objective-c","objc"],e:`

<hr>
<h2>A. 추상 클래스</h2>
<h3>추상 클래스란</h3>
<h3>추상 클래스 예제</h3>
<hr>
<h2>B. 클래스 클러스터</h2>
<h3>클래스 클러스터 개념</h3>
<h3>실험 프로그램</h3>
<h3>프로그래밍 시 주의사항</h3>
<hr>
<h2>C. 클래스 클러스터의 서브 클래스 만들기</h2>
<h3>카테고리 대응</h3>
<h3>원시 메서드 재정의</h3>
<h3>문자열의 서브 클래스 만들기</h3>
`,r:{minutes:.16,words:48},y:"a",t:"11. 추상 클래스와 클래스 클러스터"}}],["/swift/shuokai-objc/12.html",{loader:()=>r(()=>import("./12.html-B2iKvafO.js"),__vite__mapDeps([639,1])),meta:{c:["Objective-C"],g:["crashcourse","xcode","objective-c","objc"],e:`

<hr>
<h2>A. 프로토콜 개념</h2>
<h3>프로토콜이란</h3>
<h3>객체 프로토콜</h3>
<hr>
<h2>B. Objective-C 프로토콜 선언</h2>
<h3>프로토콜 선언</h3>
<h3>프로토콜 채용</h3>
<h3>프로토콜 상속</h3>
<h3>프로토콜 지정 형식 선언</h3>
<h3>프로토콜 전방 선언</h3>
<h3>프로토콜 적합성 확인</h3>
<h3>필수 기능과 옵션 기능 지정</h3>
<h3>프로토콜을 사용한 프로그램 예제</h3>
<hr>
<h2>C. 비형식 프로토콜</h2>
<h3>비형식 프로토콜이란</h3>`,r:{minutes:.17,words:50},y:"a",t:"12. 프로토콜"}}],["/swift/shuokai-objc/13.html",{loader:()=>r(()=>import("./13.html-cgIiLp5b.js"),__vite__mapDeps([640,1])),meta:{c:["Objective-C"],g:["crashcourse","xcode","objective-c","objc"],e:`

<hr>
<h2>A. 객체 복사</h2>
<h3>얕은 복사와 깊은 복사</h3>
<h3>존이란</h3>
<h3>복사 메서드 정의</h3>
<h3><code>copy</code> 메서드 예제</h3>
<h3>변경 가능한 복사의 작성</h3>
<hr>
<h2>B. 아카이브</h2>
<h3>객체 아카이브화</h3>
<h3>Foundation 프레임워크의 아카이브 기능</h3>
<h3>아카이브화 메서드 정의</h3>
<h3>언아카이브 메서드 정의</h3>
<h3>아카이브와 언아카이버의 초키화 메서드</h3>
<hr>
<h2>C. 프로퍼티 리스트</h2>`,r:{minutes:.17,words:51},y:"a",t:"13. 객체 복사와 저장"}}],["/swift/shuokai-objc/14.html",{loader:()=>r(()=>import("./14.html-Dih3S7Yb.js"),__vite__mapDeps([641,1])),meta:{c:["🏛Objective-C"],g:["crashcourse","xcode","objective-c","objc"],e:`

<hr>
<h2>A. 블록 객체란</h2>
<h3>C 컴파일러와 GCD</h3>
<h3>블록 객체 정의</h3>
<h3>블록 객체와 형식 선언</h3>
<h3>블록 객체에 포함된 변수 동작</h3>
<h3>정렬 함수와 블록 객체</h3>
<hr>
<h2>B. 블록 객체 구조</h2>
<h3>블록 객체의 실체와 수명</h3>
<h3>피해야 할 작성 패턴</h3>
<h3>블록 객체의 복사</h3>
<h3>특별한 변수 지정 <code>_block</code></h3>
<hr>
<h2>C. Objective-C와 블록 객체</h2>
<h3>메서드 정의와 블록 객체</h3>`,r:{minutes:.19,words:57},y:"a",t:"14. 블록 객체"}}],["/swift/shuokai-objc/15.html",{loader:()=>r(()=>import("./15.html-BoR5xzUH.js"),__vite__mapDeps([642,1])),meta:{c:["Objective-C"],g:["crashcourse","xcode","objective-c","objc"],e:`

<hr>
<h2>A. 애플리케이션과 실행 반복</h2>
<h3>실행 반복</h3>
<h3>타이머 객체</h3>
<h3>메시지의 지연 실행</h3>
<hr>
<h2>B. 델리게이트</h2>
<h3>델리게이트 개념</h3>
<h3>Cocoa 환경의 델리게이트</h3>
<h3>델리게이트 설정과 프로토콜</h3>
<h3>델리게이트를 사용한 프로그래밍</h3>
<hr>
<h2>C. 알림</h2>
<h3>알림과 알림 센터 개념</h3>
<h3>알림 객체</h3>
<h3>알림 센터</h3>
<h3>알림 큐</h3>
<hr>
<h2>D. 리스폰더 체인</h2>`,r:{minutes:.17,words:52},y:"a",t:"15. 메시지 송신 패턴"}}],["/swift/shuokai-objc/16.html",{loader:()=>r(()=>import("./16.html-CBMR4yCp.js"),__vite__mapDeps([643,1])),meta:{c:["Objective-C"],g:["crashcourse","xcode","objective-c","objc"],e:`

<hr>
<h2>A. 애플리케이션 번들</h2>
<h3>애플리케이션 번들 구조</h3>
<h3><code>nib</code>파일과 각종 언어 리소스</h3>
<h3>정보 파일의 주요 내용</h3>
<h3><code>NSBundle</code>과 리소스 접근</h3>
<h3>iOS와 리소스 접근</h3>
<h3>유니버설 바이너리</h3>
<hr>
<h2>B. <code>nib</code>파일 로드</h2>
<h3><code>nib</code>파일 인스턴스화</h3>
<h3>Mac OS X과 <code>nib</code>파일 로드</h3>`,r:{minutes:.22,words:66},y:"a",t:"16. 애플리케이션 구조"}}],["/swift/shuokai-objc/17.html",{loader:()=>r(()=>import("./17.html-BU4fhXon.js"),__vite__mapDeps([644,1])),meta:{c:["Objective-C"],g:["crashcourse","xcode","objective-c","objc"],e:`

<hr>
<h2>A. Application 프레임워크와 인터페이스 빌더</h2>
<hr>
<h2>B. 프로그램 개요</h2>
<h3>객체 사이의 관계</h3>
<h3>알림</h3>
<h3>되돌리기와 되살리기</h3>
<h3>로더블 번들과 지역화</h3>
<h3>사용자 기본값</h3>
<hr>
<h2>C. 프로그램 해설</h2>
<h3><code>main</code> 함수와 클래스</h3>
<h3>클래스 <code>WinCtrl</code></h3>
<h3>클래스 <code>MyInspector</code></h3>
<hr>
<h2>D. 애플리케이션 번들 구축</h2>`,r:{minutes:.18,words:54},y:"a",t:"17. 예제 - 간단한 이미지 뷰어"}}],["/swift/shuokai-objc/18.html",{loader:()=>r(()=>import("./18.html-oOPwA7r1.js"),__vite__mapDeps([645,1])),meta:{c:["Objective-C"],g:["crashcourse","xcode","objective-c","objc"],e:`

<hr>
<h2>A. 예외란</h2>
<h3>예외 처리 개념</h3>
<h3>Objective-C 예외 처리</h3>
<hr>
<h2>B. 예외 처리 구조 개요</h2>
<h3>예외 핸들러와 예외 처리 도메인</h3>
<h3>예외를 나타내는 클래스 <code>NSException</code></h3>
<h3>예외 처리 구조 구문</h3>
<h3>간단한 예외 처리 예제 프로그램</h3>
<hr>
<h2>C. 예외 발생과 전파</h2>
<h3>예외 전파</h3>
<h3>직접 예외 발생시키기</h3>
<h3>예외를 발생시키는 <code>@throw</code>문</h3>`,r:{minutes:.19,words:58},y:"a",t:"18. 예외와 에러"}}],["/swift/shuokai-objc/19.html",{loader:()=>r(()=>import("./19.html-DjcPleFv.js"),__vite__mapDeps([646,1])),meta:{c:["Objective-C"],g:["crashcourse","xcode","objective-c","objc"],e:`

<hr>
<h2>A. 멀티스레드</h2>
<h3>스레드의 기본 개념</h3>
<h3>스레드 세이프</h3>
<h3>주의사항</h3>
<h3><code>NSThread</code> 사용해 스레드 생성</h3>
<h3>현재 스레드</h3>
<h3>GUI 애플리케이션과 스레드</h3>
<hr>
<h2>B. 상호 배제</h2>
<h3>상호 배제가 필요한 예</h3>
<h3>락</h3>
<h3>교착 상태</h3>
<h3>락 획득 시도</h3>
<h3>조건이 있는 락</h3>
<h3><code>NSRecursiveLock</code></h3>`,r:{minutes:.21,words:64},y:"a",t:"19. 병렬 프로그래밍"}}],["/swift/shuokai-objc/20.html",{loader:()=>r(()=>import("./20.html-Bu2vUUJG.js"),__vite__mapDeps([647,1])),meta:{c:["Objective-C"],g:["crashcourse","xcode","objective-c","objc"],e:`

<hr>
<h2>A. 키-값 코딩 개요</h2>
<h3>키-값 코딩이란</h3>
<h3>키-값 코딩의 기본 동작</h3>
<hr>
<h2>B. 프로퍼티에 접근</h2>
<h3>키-값 코딩의 메서드 동작</h3>
<h3>속성값의 자동 변환</h3>
<h3>사전 객체와 키-값 코딩</h3>
<h3>키 패스를 사용한 접근</h3>
<h3>다대일 관계와 다대다 관계</h3>
<h3>배열 객체와 키-값 코딩</h3>
<hr>
<h2>C. 다대다 관계의 접근</h2>
<h3>인덱스가 있는 접근자 페턴</h3>
<h3>다대다 관계에 변경 가능한 접근</h3>`,r:{minutes:.19,words:56},y:"a",t:"20. 키-값 코딩"}}],["/swift/shuokai-objc/21.html",{loader:()=>r(()=>import("./21.html-cobd0Z6_.js"),__vite__mapDeps([648,1])),meta:{c:["Objective-C"],g:["crashcourse","xcode","objective-c","objc"],e:`

<hr>
<h2>A. Foundaation 프레임워크 개요</h2>
<hr>
<h2>B. Core Foundation 프레임워크 개요</h2>
<hr>
<h2>C. 코딩지침</h2>
<hr>
`,r:{minutes:.17,words:51},y:"a",t:"21. 부록"}}],["/swift/shuokai-objc/",{loader:()=>r(()=>import("./index.html-DnuqpuGs.js"),__vite__mapDeps([649,1])),meta:{c:["Objective-C"],g:["crashcourse","xcode","objective-c","objc"],e:`

<hr>

<ul>
<li><a href="/crashcourse/swift/shuokai-objc/01.html" target="_blank">01. 객체 기반 소프트웨어 작성</a></li>
<li><a href="/crashcourse/swift/shuokai-objc/02.html" target="_blank">02. Objective-C 프로그램</a></li>
<li><a href="/crashcourse/swift/shuokai-objc/03.html" target="_blank">03. 상속과 클래스</a></li>
<li><a href="/crashcourse/swift/shuokai-objc/04.html" target="_blank">04. 객체 형식과 동적 결합</a></li>
<li><a href="/crashcourse/swift/shuokai-objc/05.html" target="_blank">05. 참조 카운터를 사용한 메모리 관리 방법</a></li>
<li><a href="/crashcourse/swift/shuokai-objc/06.html" target="_blank">06. 가비지 컬렉션</a></li>
<li><a href="/crashcourse/swift/shuokai-objc/07.html" target="_blank">07. 선언 프로퍼티</a></li>
<li><a href="/crashcourse/swift/shuokai-objc/08.html" target="_blank">08. <code>NSObject</code> 클래스와 런타임 시스템</a></li>
<li><a href="/crashcourse/swift/shuokai-objc/09.html" target="_blank">09. Foundation 프레임워크의 중요 클래스</a></li>
<li><a href="/crashcourse/swift/shuokai-objc/10.html" target="_blank">10. 카테고리</a></li>
<li><a href="/crashcourse/swift/shuokai-objc/11.html" target="_blank">11. 추상 클래스와 클래스 클러스터</a></li>
<li><a href="/crashcourse/swift/shuokai-objc/12.html" target="_blank">12. 프로토콜</a></li>
<li><a href="/crashcourse/swift/shuokai-objc/13.html" target="_blank">13. 객체 복사와 저장</a></li>
<li><a href="/crashcourse/swift/shuokai-objc/14.html" target="_blank">14. 블록 객체</a></li>
<li><a href="/crashcourse/swift/shuokai-objc/15.html" target="_blank">15. 메시지 송신 패턴</a></li>
<li><a href="/crashcourse/swift/shuokai-objc/16.html" target="_blank">16. 애플리케이션 구조</a></li>
<li><a href="/crashcourse/swift/shuokai-objc/17.html" target="_blank">17. 예제: 간단한 이미지 뷰어</a></li>
<li><a href="/crashcourse/swift/shuokai-objc/18.html" target="_blank">18. 예외와 에러</a></li>
<li><a href="/crashcourse/swift/shuokai-objc/19.html" target="_blank">19. 병렬 프로그래밍</a></li>
<li><a href="/crashcourse/swift/shuokai-objc/20.html" target="_blank">20. 키-값 코딩</a></li>
<li><a href="/crashcourse/swift/shuokai-objc/21.html" target="_blank">21. 부록</a></li>
</ul>`,r:{minutes:.33,words:100},y:"a",t:"OSX 구조를 이해하면서 배우는 Objective-C",i:"fas fa-landmark"}}],["/swift/swiftui-by-example/13-navigation.html",{loader:()=>r(()=>import("./13-navigation.html-Do5PuxQ9.js"),__vite__mapDeps([650,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
<h2>Introduction to navigation</h2>
<details class="hint-container details"><summary>Introduction to navigation</summary>
</details>
<hr>
<h2>How to embed a view in a navigation view</h2>
<details class="hint-container details"><summary>How to embed a view in a navigation view</summary>
</details>`,r:{minutes:2.72,words:817},y:"a",t:"Navigation"}}],["/swift/swiftui-by-example/14-alerts-and-menus.html",{loader:()=>r(()=>import("./14-alerts-and-menus.html-c4Y4uY7n.js"),__vite__mapDeps([651,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
<h2>Working with presentations</h2>
<details class="hint-container details"><summary>Working with presentations</summary>
</details>
<hr>
<h2>How to show an alert</h2>
<details class="hint-container details"><summary>How to show an alert</summary>
</details>
<hr>
<h2>How to add a <code>TextField</code> to an alert</h2>`,r:{minutes:2.07,words:621},y:"a",t:"Alerts and menus"}}],["/swift/swiftui-by-example/15-presenting-views.html",{loader:()=>r(()=>import("./15-presenting-views.html-XQeTa9uM.js"),__vite__mapDeps([652,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
<h2>How to present a new view using sheets</h2>
<details class="hint-container details"><summary>How to present a new view using sheets</summary>
</details>
<hr>
<h2>How to present multiple sheets</h2>
<details class="hint-container details"><summary>How to present multiple sheets</summary>
</details>`,r:{minutes:1.78,words:534},y:"a",t:"Presenting views"}}],["/swift/swiftui-by-example/16-transforming-views.html",{loader:()=>r(()=>import("./16-transforming-views.html-C4aj9Fdt.js"),__vite__mapDeps([653,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
<h2>How to adjust the position of a view using its offset</h2>
<details class="hint-container details"><summary>How to adjust the position of a view using its offset</summary>
</details>
<hr>
<h2>How to color the padding around a view</h2>
<details class="hint-container details"><summary>How to color the padding around a view</summary>
</details>`,r:{minutes:4.48,words:1343},y:"a",t:"Transforming views"}}],["/swift/swiftui-by-example/17-drawing.html",{loader:()=>r(()=>import("./17-drawing.html-DZtizcrB.js"),__vite__mapDeps([654,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
<h2>SwiftUI’s built-in shapes</h2>
<details class="hint-container details"><summary>SwiftUI’s built-in shapes</summary>
</details>
<hr>
<h2>How to draw a custom path</h2>
<details class="hint-container details"><summary>How to draw a custom path</summary>
</details>
<hr>
<h2>How to draw polygons and stars</h2>`,r:{minutes:1.86,words:559},y:"a",t:"Drawing"}}],["/swift/swiftui-by-example/",{loader:()=>r(()=>import("./index.html-D6_Ecn4n.js"),__vite__mapDeps([655,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:35.18,words:10553},y:"a",t:"SwiftUI by Example",i:"fa-brands fa-swift"}}],["/cpp/algorithms-for-competitive-programming/01-algebra/01A.html",{loader:()=>r(()=>import("./01A.html-CcD8En5S.js"),__vite__mapDeps([656,1])),meta:{c:["Cpp"],g:["crashcourse","cpp","c-plus-plus","algorithm"],e:`

<hr>
<h2>Binary Exponentiation</h2>
`,r:{minutes:.75,words:225},y:"a",t:"01A. Fundamentals"}}],["/cpp/algorithms-for-competitive-programming/01-algebra/01B.html",{loader:()=>r(()=>import("./01B.html-DreJOC24.js"),__vite__mapDeps([657,1])),meta:{c:["Cpp"],g:["crashcourse","cpp","c-plus-plus","algorithm"],e:`

<hr>
<h2>Sieve of Eratosthenes</h2>
`,r:{minutes:.59,words:177},y:"a",t:"01B. Prime Numbers"}}],["/cpp/algorithms-for-competitive-programming/01-algebra/01C.html",{loader:()=>r(()=>import("./01C.html-C05cD_2a.js"),__vite__mapDeps([658,1])),meta:{c:["Cpp"],g:["crashcourse","cpp","c-plus-plus","algorithm"],e:`

<hr>
<h2>Euler's totient function</h2>
`,r:{minutes:.47,words:140},y:"a",t:"01C. Number-theoretic functions"}}],["/cpp/algorithms-for-competitive-programming/01-algebra/01D.html",{loader:()=>r(()=>import("./01D.html-DSl96mFQ.js"),__vite__mapDeps([659,1])),meta:{c:["Cpp"],g:["crashcourse","cpp","c-plus-plus","algorithm"],e:`

<hr>
<h2>Modular Inverse</h2>
`,r:{minutes:1.1,words:330},y:"a",t:"01D. Modular arithmetic"}}],["/cpp/algorithms-for-competitive-programming/01-algebra/01E.html",{loader:()=>r(()=>import("./01E.html-DHuk1o7M.js"),__vite__mapDeps([660,1])),meta:{c:["Cpp"],g:["crashcourse","cpp","c-plus-plus","algorithm"],e:`

<hr>
<h2>Balanced Ternary</h2>
`,r:{minutes:.39,words:116},y:"a",t:"01E. Number systems"}}],["/cpp/algorithms-for-competitive-programming/01-algebra/01F.html",{loader:()=>r(()=>import("./01F.html-DmQMiAjt.js"),__vite__mapDeps([661,1])),meta:{c:["Cpp"],g:["crashcourse","cpp","c-plus-plus","algorithm"],e:`

<hr>
<h2>Bit manipulation</h2>
`,r:{minutes:.93,words:279},y:"a",t:"01F. Misc"}}],["/cpp/algorithms-for-competitive-programming/02-data-structures/02A.html",{loader:()=>r(()=>import("./02A.html-CFUqkojN.js"),__vite__mapDeps([662,1])),meta:{c:["Cpp"],g:["crashcourse","cpp","c-plus-plus","algorithm"],e:`

<hr>
<h2>Minimum Stack / Minimum Queue</h2>
`,r:{minutes:.4,words:121},y:"a",t:"02A. Fundamentals"}}],["/cpp/algorithms-for-competitive-programming/02-data-structures/02B.html",{loader:()=>r(()=>import("./02B.html-a03DfnSe.js"),__vite__mapDeps([663,1])),meta:{c:["Cpp"],g:["crashcourse","cpp","c-plus-plus","algorithm"],e:`

<hr>
<h2>Disjoint Set Union</h2>
<details class="hint-container details"><summary>Disjoint Set Union</summary>
</details>
<hr>
<h2>Fenwick Tree</h2>
<details class="hint-container details"><summary>Fenwick Tree</summary>
</details>
<hr>
<h2>Sqrt Decomposition</h2>
<details class="hint-container details"><summary>Sqrt Decomposition</summary>
</details>`,r:{minutes:.91,words:273},y:"a",t:"02B. Trees"}}],["/cpp/algorithms-for-competitive-programming/02-data-structures/02C.html",{loader:()=>r(()=>import("./02C.html-YjcP1lhc.js"),__vite__mapDeps([664,1])),meta:{c:["Cpp"],g:["crashcourse","cpp","c-plus-plus","algorithm"],e:`

<hr>
<h2>Deleting from a data structure in O(T(n) log n)</h2>
`,r:{minutes:.37,words:110},y:"a",t:"02C. Advanced"}}],["/cpp/algorithms-for-competitive-programming/03-dynamic-programming/03A.html",{loader:()=>r(()=>import("./03A.html-CCzlD2Vu.js"),__vite__mapDeps([665,1])),meta:{c:["Cpp"],g:["crashcourse","cpp","c-plus-plus","algorithm"],e:`

<hr>
<h2>Introducton to Dynamic Programming</h2>
`,r:{minutes:.3,words:91},y:"a",t:"03A. Introduction"}}],["/cpp/algorithms-for-competitive-programming/03-dynamic-programming/03B.html",{loader:()=>r(()=>import("./03B.html-DJGIWhn0.js"),__vite__mapDeps([666,1])),meta:{c:["Cpp"],g:["crashcourse","cpp","c-plus-plus","algorithm"],e:`

<hr>
<h2>Divide and Conquer DP</h2>
`,r:{minutes:.43,words:128},y:"a",t:"03B. DP optimizations"}}],["/cpp/algorithms-for-competitive-programming/03-dynamic-programming/03C.html",{loader:()=>r(()=>import("./03C.html-DbSg3EEp.js"),__vite__mapDeps([667,1])),meta:{c:["Cpp"],g:["crashcourse","cpp","c-plus-plus","algorithm"],e:`

<hr>
<h2>Dynamic Programming on Broken Profile. Problem 'Parquet'</h2>
`,r:{minutes:.45,words:136},y:"a",t:"03C. Tasks"}}],["/cpp/algorithms-for-competitive-programming/04-string-processing/04A.html",{loader:()=>r(()=>import("./04A.html-B7wdxZq-.js"),__vite__mapDeps([668,1])),meta:{c:["Cpp"],g:["crashcourse","cpp","c-plus-plus","algorithm"],e:`

<hr>
<h2>String Hashing</h2>
`,r:{minutes:.83,words:249},y:"a",t:"04A. Fundamentals"}}],["/cpp/algorithms-for-competitive-programming/04-string-processing/04B.html",{loader:()=>r(()=>import("./04B.html-Bo7CN_aU.js"),__vite__mapDeps([669,1])),meta:{c:["Cpp"],g:["crashcourse","cpp","c-plus-plus","algorithm"],e:`

<hr>
<h2>Suffix Tree</h2>
`,r:{minutes:.45,words:136},y:"a",t:"04B. Advanced"}}],["/cpp/algorithms-for-competitive-programming/04-string-processing/04C.html",{loader:()=>r(()=>import("./04C.html-BHY8-pOm.js"),__vite__mapDeps([670,1])),meta:{c:["Cpp"],g:["crashcourse","cpp","c-plus-plus","algorithm"],e:`

<hr>
<h2>Expression parsing</h2>
`,r:{minutes:.54,words:163},y:"a",t:"04C. Tasks"}}],["/cpp/algorithms-for-competitive-programming/05-linear-algebra/05A.html",{loader:()=>r(()=>import("./05A.html-BC8T6_uX.js"),__vite__mapDeps([671,1])),meta:{c:["Cpp"],g:["crashcourse","cpp","c-plus-plus","algorithm"],e:`

<hr>
<h2>Gauss &amp; System of Linear Equations</h2>
`,r:{minutes:.62,words:187},y:"a",t:"05A. Matrices"}}],["/cpp/algorithms-for-competitive-programming/06-combinatorics/06A.html",{loader:()=>r(()=>import("./06A.html-SgoRSdcy.js"),__vite__mapDeps([672,1])),meta:{c:["Cpp"],g:["crashcourse","cpp","c-plus-plus","algorithm"],e:`

<hr>
<h2>Finding Power of Factorial Divisor</h2>
`,r:{minutes:.5,words:150},y:"a",t:"06A. Fundamentals"}}],["/cpp/algorithms-for-competitive-programming/06-combinatorics/06B.html",{loader:()=>r(()=>import("./06B.html-DzuJFAtS.js"),__vite__mapDeps([673,1])),meta:{c:["Cpp"],g:["crashcourse","cpp","c-plus-plus","algorithm"],e:`

<hr>
<h2>The Inclusion-Exclusion Principle</h2>
`,r:{minutes:.66,words:197},y:"a",t:"06B. Techniques"}}],["/cpp/algorithms-for-competitive-programming/06-combinatorics/06C.html",{loader:()=>r(()=>import("./06C.html-DF-lsuco.js"),__vite__mapDeps([674,1])),meta:{c:["Cpp"],g:["crashcourse","cpp","c-plus-plus","algorithm"],e:`

<hr>
<h2>Placing Bishops on a Chessboard</h2>
`,r:{minutes:.52,words:155},y:"a",t:"06C. Tasks"}}],["/cpp/algorithms-for-competitive-programming/07-numerical-methods/07A.html",{loader:()=>r(()=>import("./07A.html-DhGqSeU_.js"),__vite__mapDeps([675,1])),meta:{c:["Cpp"],g:["crashcourse","cpp","c-plus-plus","algorithm"],e:`

<hr>
<h2>Binary Search</h2>
`,r:{minutes:.5,words:151},y:"a",t:"07A. Search"}}],["/cpp/algorithms-for-competitive-programming/07-numerical-methods/07B.html",{loader:()=>r(()=>import("./07B.html-m1MDlv8c.js"),__vite__mapDeps([676,1])),meta:{c:["Cpp"],g:["crashcourse","cpp","c-plus-plus","algorithm"],e:`

<hr>
<h2>Integration by Simpson's formula</h2>
`,r:{minutes:.31,words:93},y:"a",t:"07B. Integration"}}],["/cpp/algorithms-for-competitive-programming/08-geometry/08A.html",{loader:()=>r(()=>import("./08A.html-B_9SOJtd.js"),__vite__mapDeps([677,1])),meta:{c:["Cpp"],g:["crashcourse","cpp","c-plus-plus","algorithm"],e:`

<hr>
<h2>Basic Geometry</h2>
`,r:{minutes:1.31,words:393},y:"a",t:"08A. Elementary operations"}}],["/cpp/algorithms-for-competitive-programming/08-geometry/08B.html",{loader:()=>r(()=>import("./08B.html-r1kd6Upq.js"),__vite__mapDeps([678,1])),meta:{c:["Cpp"],g:["crashcourse","cpp","c-plus-plus","algorithm"],e:`

<hr>
<h2>Oriented area of a triangle</h2>
`,r:{minutes:1.04,words:313},y:"a",t:"08B. Polygons"}}],["/cpp/algorithms-for-competitive-programming/08-geometry/08C.html",{loader:()=>r(()=>import("./08C.html-kYF8B4In.js"),__vite__mapDeps([679,1])),meta:{c:["Cpp"],g:["crashcourse","cpp","c-plus-plus","algorithm"],e:`

<hr>
<h2>Convex hull construction</h2>
`,r:{minutes:.44,words:133},y:"a",t:"08C. Convex hull"}}],["/cpp/algorithms-for-competitive-programming/08-geometry/08D.html",{loader:()=>r(()=>import("./08D.html-Dg5GEEJL.js"),__vite__mapDeps([680,1])),meta:{c:["Cpp"],g:["crashcourse","cpp","c-plus-plus","algorithm"],e:`

<hr>
<h2>Search for a pair of intersecting segments</h2>
`,r:{minutes:.34,words:101},y:"a",t:"08D. Sweep-line"}}],["/cpp/algorithms-for-competitive-programming/08-geometry/08E.html",{loader:()=>r(()=>import("./08E.html-B37bvuwQ.js"),__vite__mapDeps([681,1])),meta:{c:["Cpp"],g:["crashcourse","cpp","c-plus-plus","algorithm"],e:`

<hr>
<h2>Finding faces of a planar graph</h2>
`,r:{minutes:.46,words:139},y:"a",t:"08E. Planar graphs"}}],["/cpp/algorithms-for-competitive-programming/08-geometry/08F.html",{loader:()=>r(()=>import("./08F.html-CBYHrkXG.js"),__vite__mapDeps([682,1])),meta:{c:["Cpp"],g:["crashcourse","cpp","c-plus-plus","algorithm"],e:`

<hr>
<h2>Finding the nearest pair of points</h2>
`,r:{minutes:.73,words:218},y:"a",t:"08F. Misc"}}],["/cpp/algorithms-for-competitive-programming/09-graphs/09A.html",{loader:()=>r(()=>import("./09A.html-CIfQKnDB.js"),__vite__mapDeps([683,1])),meta:{c:["Cpp"],g:["crashcourse","cpp","c-plus-plus","algorithm"],e:`

<hr>
<hr>
`,r:{minutes:.19,words:58},y:"a",t:"09A. Graph traversal"}}],["/cpp/algorithms-for-competitive-programming/09-graphs/09B.html",{loader:()=>r(()=>import("./09B.html-w0GQe-LV.js"),__vite__mapDeps([684,1])),meta:{c:["Cpp"],g:["crashcourse","cpp","c-plus-plus","algorithm"],e:`

<hr>
<hr>
`,r:{minutes:.23,words:70},y:"a",t:"09B. Connected components, bridges, articulations points"}}],["/cpp/algorithms-for-competitive-programming/09-graphs/09C.html",{loader:()=>r(()=>import("./09C.html-DJCvFy6D.js"),__vite__mapDeps([685,1])),meta:{c:["Cpp"],g:["crashcourse","cpp","c-plus-plus","algorithm"],e:`

<hr>
<hr>
`,r:{minutes:.22,words:66},y:"a",t:"09C. Single-source shortest paths"}}],["/cpp/algorithms-for-competitive-programming/09-graphs/09D.html",{loader:()=>r(()=>import("./09D.html-DjPPHoxF.js"),__vite__mapDeps([686,1])),meta:{c:["Cpp"],g:["crashcourse","cpp","c-plus-plus","algorithm"],e:`

<hr>
<hr>
`,r:{minutes:.22,words:66},y:"a",t:"09D. All-pairs shortest paths"}}],["/cpp/algorithms-for-competitive-programming/09-graphs/09E.html",{loader:()=>r(()=>import("./09E.html-BeVQwXBX.js"),__vite__mapDeps([687,1])),meta:{c:["Cpp"],g:["crashcourse","cpp","c-plus-plus","algorithm"],e:`

<hr>
<hr>
`,r:{minutes:.19,words:58},y:"a",t:"09E. Spanning trees"}}],["/cpp/algorithms-for-competitive-programming/09-graphs/09F.html",{loader:()=>r(()=>import("./09F.html-Dc_iLFwF.js"),__vite__mapDeps([688,1])),meta:{c:["Cpp"],g:["crashcourse","cpp","c-plus-plus","algorithm"],e:`

<hr>
<hr>
`,r:{minutes:.18,words:54},y:"a",t:"09F. Cycles"}}],["/cpp/algorithms-for-competitive-programming/09-graphs/09G.html",{loader:()=>r(()=>import("./09G.html-sNEWguGP.js"),__vite__mapDeps([689,1])),meta:{c:["Cpp"],g:["crashcourse","cpp","c-plus-plus","algorithm"],e:`

<hr>
<hr>
`,r:{minutes:.21,words:62},y:"a",t:"09G. Lowest common ancestor"}}],["/cpp/algorithms-for-competitive-programming/09-graphs/09H.html",{loader:()=>r(()=>import("./09H.html-B9wSL8VV.js"),__vite__mapDeps([690,1])),meta:{c:["Cpp"],g:["crashcourse","cpp","c-plus-plus","algorithm"],e:`

<hr>
<hr>
`,r:{minutes:.22,words:66},y:"a",t:"09H. Flows and related problems"}}],["/cpp/algorithms-for-competitive-programming/09-graphs/09I.html",{loader:()=>r(()=>import("./09I.html-Cy-IqzDq.js"),__vite__mapDeps([691,1])),meta:{c:["Cpp"],g:["crashcourse","cpp","c-plus-plus","algorithm"],e:`

<hr>
<hr>
`,r:{minutes:.22,words:66},y:"a",t:"09I. Matchings and related problems"}}],["/cpp/algorithms-for-competitive-programming/09-graphs/09J.html",{loader:()=>r(()=>import("./09J.html-i0csNsMf.js"),__vite__mapDeps([692,1])),meta:{c:["Cpp"],g:["crashcourse","cpp","c-plus-plus","algorithm"],e:`

<hr>
<hr>
`,r:{minutes:.18,words:54},y:"a",t:"09J. Misc"}}],["/cpp/algorithms-for-competitive-programming/10-misc/10A.html",{loader:()=>r(()=>import("./10A.html-D2aRFFwo.js"),__vite__mapDeps([693,1])),meta:{c:["Cpp"],g:["crashcourse","cpp","c-plus-plus","algorithm"],e:`

<hr>
<hr>
`,r:{minutes:.18,words:54},y:"a",t:"10A. Sequences"}}],["/cpp/algorithms-for-competitive-programming/10-misc/10B.html",{loader:()=>r(()=>import("./10B.html-DxVssTMZ.js"),__vite__mapDeps([694,1])),meta:{c:["Cpp"],g:["crashcourse","cpp","c-plus-plus","algorithm"],e:`

<hr>
<hr>
`,r:{minutes:.19,words:58},y:"a",t:"10B. Game Theory"}}],["/cpp/algorithms-for-competitive-programming/10-misc/10C.html",{loader:()=>r(()=>import("./10C.html-PSFOB3r9.js"),__vite__mapDeps([695,1])),meta:{c:["Cpp"],g:["crashcourse","cpp","c-plus-plus","algorithm"],e:`

<hr>
<hr>
`,r:{minutes:.18,words:54},y:"a",t:"10C. Schedules"}}],["/cpp/algorithms-for-competitive-programming/10-misc/10D.html",{loader:()=>r(()=>import("./10D.html-CklLlbbT.js"),__vite__mapDeps([696,1])),meta:{c:["Cpp"],g:["crashcourse","cpp","c-plus-plus","algorithm"],e:`

<hr>
<hr>
`,r:{minutes:.18,words:54},y:"a",t:"10D. Misc"}}],["/devops/digitalocean-kubernetes/2022/20221118-how-to-secure-your-site-in-kubernetes-with-cert-manager-traefik-and-let-s-encrypt.html",{loader:()=>r(()=>import("./20221118-how-to-secure-your-site-in-kubernetes-with-cert-manager-traefik-and-let-s-encrypt.html-BGnUuvyH.js"),__vite__mapDeps([697,1])),meta:{c:["Kubernetes"],g:["crashcourse","digitalocean","kubernetes","kubctl","serverless"],e:`

<hr>
`,r:{minutes:10.94,words:3282},y:"a",t:"How To Secure Your Site in Kubernetes with cert-manager, Traefik, and Let’s Encrypt"}}],["/devops/digitalocean-kubernetes/2022/20221216-how-to-run-serverless-workloads-with-knative-on-digitalocean-kubernetes.html",{loader:()=>r(()=>import("./20221216-how-to-run-serverless-workloads-with-knative-on-digitalocean-kubernetes.html-CSF4hjRr.js"),__vite__mapDeps([698,1])),meta:{c:["Kubernetes"],g:["crashcourse","digitalocean","kubernetes","kubctl","serverless"],e:`

<hr>
`,r:{minutes:13.74,words:4123},y:"a",t:"How To Run Serverless Workloads with Knative on DigitalOcean Kubernetes"}}],["/devops/linux-journey/01-grasshopper/01a-getting-started.html",{loader:()=>r(()=>import("./01a-getting-started.html-BGlvhtoS.js"),__vite__mapDeps([699,1])),meta:{c:["Linux"],g:["crashcourse","linux","os","networking"],e:`

<hr>
`,r:{minutes:5.9,words:1770},y:"a",t:"GrassHopper > 01a. Getting Started"}}],["/devops/linux-journey/01-grasshopper/01b-command-line.html",{loader:()=>r(()=>import("./01b-command-line.html-CYTGUw8H.js"),__vite__mapDeps([700,1])),meta:{c:["Linux"],g:["crashcourse","linux","os","networking"],e:`

<hr>
`,r:{minutes:12.32,words:3695},y:"a",t:"GrassHopper > 01b. Command Line"}}],["/devops/linux-journey/01-grasshopper/01c-text-fu.html",{loader:()=>r(()=>import("./01c-text-fu.html-B5ySNi-t.js"),__vite__mapDeps([701,1])),meta:{c:["Linux"],g:["crashcourse","linux","os","networking"],e:`

<hr>
`,r:{minutes:10.7,words:3210},y:"a",t:"GrassHopper > 01c. Text-Fu"}}],["/devops/linux-journey/01-grasshopper/01d-advanced-text-fu.html",{loader:()=>r(()=>import("./01d-advanced-text-fu.html-x0ipAgOl.js"),__vite__mapDeps([702,1])),meta:{c:["Linux"],g:["crashcourse","linux","os","networking"],e:`

<hr>
`,r:{minutes:6.06,words:1818},y:"a",t:"GrassHopper > 01d. Advanced Text-Fu"}}],["/devops/linux-journey/01-grasshopper/01e-user-management.html",{loader:()=>r(()=>import("./01e-user-management.html-DI0TmFie.js"),__vite__mapDeps([703,1])),meta:{c:["Linux"],g:["crashcourse","linux","os","networking"],e:`

<hr>
`,r:{minutes:5.66,words:1698},y:"a",t:"GrassHopper > 01e. User Management"}}],["/devops/linux-journey/01-grasshopper/01f-permissions.html",{loader:()=>r(()=>import("./01f-permissions.html-CRSOg1BE.js"),__vite__mapDeps([704,1])),meta:{c:["Linux"],g:["crashcourse","linux","os","networking"],e:`

<hr>
`,r:{minutes:7.24,words:2172},y:"a",t:"GrassHopper > 01f. Permissions"}}],["/devops/linux-journey/01-grasshopper/01g-processes.html",{loader:()=>r(()=>import("./01g-processes.html-D2HjyAxP.js"),__vite__mapDeps([705,1])),meta:{c:["Linux"],g:["crashcourse","linux","os","networking"],e:`

<hr>
`,r:{minutes:11.01,words:3303},y:"a",t:"GrassHopper > 01g. Processes"}}],["/devops/linux-journey/01-grasshopper/01h-packages.html",{loader:()=>r(()=>import("./01h-packages.html-CHSqSeLL.js"),__vite__mapDeps([706,1])),meta:{c:["Linux"],g:["crashcourse","linux","os","networking"],e:`

<hr>
`,r:{minutes:6.66,words:1999},y:"a",t:"GrassHopper > 01h. Packages"}}],["/devops/linux-journey/02-journeyman/02a-devices.html",{loader:()=>r(()=>import("./02a-devices.html--jGZE1om.js"),__vite__mapDeps([707,1])),meta:{c:["Linux"],g:["crashcourse","linux","os","networking"],e:`

<hr>
`,r:{minutes:6.79,words:2037},y:"a",t:"Journeyman > 02a. Devices"}}],["/devops/linux-journey/02-journeyman/02b-the-filesystem.html",{loader:()=>r(()=>import("./02b-the-filesystem.html-ZfM8yDaV.js"),__vite__mapDeps([708,1])),meta:{c:["Linux"],g:["crashcourse","linux","os","networking"],e:`

<hr>
`,r:{minutes:15.37,words:4610},y:"a",t:"Journeyman > 02b. TThe Filesystem"}}],["/devops/linux-journey/02-journeyman/02c-boot-the-system.html",{loader:()=>r(()=>import("./02c-boot-the-system.html-BUrGy5-v.js"),__vite__mapDeps([709,1])),meta:{c:["Linux"],g:["crashcourse","linux","os","networking"],e:`

<hr>
`,r:{minutes:4.95,words:1485},y:"a",t:"Journeyman > 02c. Boot the System"}}],["/devops/linux-journey/02-journeyman/02d-kernel.html",{loader:()=>r(()=>import("./02d-kernel.html-VELgiRWb.js"),__vite__mapDeps([710,1])),meta:{c:["Linux"],g:["crashcourse","linux","os","networking"],e:`

<hr>
`,r:{minutes:6.17,words:1852},y:"a",t:"Journeyman > 02d. Kernel"}}],["/devops/linux-journey/02-journeyman/02e-init.html",{loader:()=>r(()=>import("./02e-init.html-KEzlKcGq.js"),__vite__mapDeps([711,1])),meta:{c:["Linux"],g:["crashcourse","linux","os","networking"],e:`

<hr>
`,r:{minutes:6.75,words:2025},y:"a",t:"Journeyman > 02e. Init"}}],["/devops/linux-journey/02-journeyman/02f-process-utilization.html",{loader:()=>r(()=>import("./02f-process-utilization.html-BVvQEqqG.js"),__vite__mapDeps([712,1])),meta:{c:["Linux"],g:["crashcourse","linux","os","networking"],e:`

<hr>
`,r:{minutes:8.73,words:2620},y:"a",t:"Journeyman > 02f. Process Utilization"}}],["/devops/linux-journey/02-journeyman/02g-logging.html",{loader:()=>r(()=>import("./02g-logging.html-Cmjy_mPF.js"),__vite__mapDeps([713,1])),meta:{c:["Linux"],g:["crashcourse","linux","os","networking"],e:`

<hr>
`,r:{minutes:3.98,words:1194},y:"a",t:"Journeyman > 02g. Logging"}}],["/devops/linux-journey/03-networking-nomad/03a-network-sharing.html",{loader:()=>r(()=>import("./03a-network-sharing.html-DXV43iy7.js"),__vite__mapDeps([714,1])),meta:{c:["Linux"],g:["crashcourse","linux","os","networking"],e:`

<hr>
`,r:{minutes:4.13,words:1240},y:"a",t:"Networking Nomad > 03a. Network Sharing"}}],["/devops/linux-journey/03-networking-nomad/03b-network-basics.html",{loader:()=>r(()=>import("./03b-network-basics.html-DkwCQ9CF.js"),__vite__mapDeps([715,1])),meta:{c:["Linux"],g:["crashcourse","linux","os","networking"],e:`

<hr>
`,r:{minutes:9.54,words:2862},y:"a",t:"Networking Nomad > 03b. Network Basics"}}],["/devops/linux-journey/03-networking-nomad/03c-subnetting.html",{loader:()=>r(()=>import("./03c-subnetting.html-IUAxZPsj.js"),__vite__mapDeps([716,1])),meta:{c:["Linux"],g:["crashcourse","linux","os","networking"],e:`

<hr>
`,r:{minutes:5.99,words:1796},y:"a",t:"Networking Nomad > 03c. Subnetting"}}],["/devops/linux-journey/03-networking-nomad/03d-routing.html",{loader:()=>r(()=>import("./03d-routing.html-CLRLZikx.js"),__vite__mapDeps([717,1])),meta:{c:["Linux"],g:["crashcourse","linux","os","networking"],e:`

<hr>
`,r:{minutes:5.97,words:1790},y:"a",t:"Networking Nomad > 03d. Routing"}}],["/devops/linux-journey/03-networking-nomad/03e-network-config.html",{loader:()=>r(()=>import("./03e-network-config.html-xnyswmFO.js"),__vite__mapDeps([718,1])),meta:{c:["Linux"],g:["crashcourse","linux","os","networking"],e:`

<hr>
`,r:{minutes:3.88,words:1163},y:"a",t:"Networking Nomad > 03e. Network Config"}}],["/devops/linux-journey/03-networking-nomad/03f-troubleshooting.html",{loader:()=>r(()=>import("./03f-troubleshooting.html-Di55okS0.js"),__vite__mapDeps([719,1])),meta:{c:["Linux"],g:["crashcourse","linux","os","networking"],e:`

<hr>
`,r:{minutes:6.38,words:1915},y:"a",t:"Networking Nomad > 03f. Troubleshooting"}}],["/devops/linux-journey/03-networking-nomad/03g-dns.html",{loader:()=>r(()=>import("./03g-dns.html-DmRPh-ZR.js"),__vite__mapDeps([720,1])),meta:{c:["Linux"],g:["crashcourse","linux","os","networking"],e:`

<hr>
`,r:{minutes:5.52,words:1655},y:"a",t:"Networking Nomad > 03g. DNS"}}],["/js/learn-ts/advanced/01.html",{loader:()=>r(()=>import("./01.html-Dq02mE2m.js"),__vite__mapDeps([721,1])),meta:{c:["JavaScript","TypeScript"],g:["blog","js","javascript","ts","typescript"],e:`

<hr>
`,r:{minutes:.76,words:227},y:"a",t:"01. keyof and typeof Operators"}}],["/js/learn-ts/advanced/02.html",{loader:()=>r(()=>import("./02.html-CVbTe-LE.js"),__vite__mapDeps([722,1])),meta:{c:["JavaScript","TypeScript"],g:["blog","js","javascript","ts","typescript"],e:`

<hr>
`,r:{minutes:.3,words:90},y:"a",t:"02. Type Unions and Intersections"}}],["/js/learn-ts/advanced/03.html",{loader:()=>r(()=>import("./03.html-DAf5UY_X.js"),__vite__mapDeps([723,1])),meta:{c:["JavaScript","TypeScript"],g:["blog","js","javascript","ts","typescript"],e:`

<hr>
`,r:{minutes:.26,words:78},y:"a",t:"03. Conditional Types"}}],["/js/learn-ts/advanced/04.html",{loader:()=>r(()=>import("./04.html-BYy_Hkif.js"),__vite__mapDeps([724,1])),meta:{c:["JavaScript","TypeScript"],g:["blog","js","javascript","ts","typescript"],e:`

<hr>
`,r:{minutes:.26,words:78},y:"a",t:"04. Enum Type"}}],["/js/learn-ts/advanced/05.html",{loader:()=>r(()=>import("./05.html-IPvpsc9L.js"),__vite__mapDeps([725,1])),meta:{c:["JavaScript","TypeScript"],g:["blog","js","javascript","ts","typescript"],e:`

<hr>
`,r:{minutes:.24,words:72},y:"a",t:"05. Generics"}}],["/js/learn-ts/advanced/06.html",{loader:()=>r(()=>import("./06.html-DnDK78hg.js"),__vite__mapDeps([726,1])),meta:{c:["JavaScript","TypeScript"],g:["blog","js","javascript","ts","typescript"],e:`

<hr>
`,r:{minutes:.26,words:78},y:"a",t:"06. Index Types"}}],["/js/learn-ts/advanced/07.html",{loader:()=>r(()=>import("./07.html-0PaPODXt.js"),__vite__mapDeps([727,1])),meta:{c:["JavaScript","TypeScript"],g:["blog","js","javascript","ts","typescript"],e:`

<hr>
`,r:{minutes:.26,words:78},y:"a",t:"07. Literal Types"}}],["/js/learn-ts/advanced/08.html",{loader:()=>r(()=>import("./08.html-BAWhzt_J.js"),__vite__mapDeps([728,1])),meta:{c:["JavaScript","TypeScript"],g:["blog","js","javascript","ts","typescript"],e:`

<hr>
`,r:{minutes:.26,words:78},y:"a",t:"08. Discriminated Unions"}}],["/js/learn-ts/advanced/09.html",{loader:()=>r(()=>import("./09.html-D6RyvIs9.js"),__vite__mapDeps([729,1])),meta:{c:["JavaScript","TypeScript"],g:["blog","js","javascript","ts","typescript"],e:`

<hr>
`,r:{minutes:.26,words:78},y:"a",t:"09. Mapped Types"}}],["/js/learn-ts/advanced/10.html",{loader:()=>r(()=>import("./10.html-DVueIvKu.js"),__vite__mapDeps([730,1])),meta:{c:["JavaScript","TypeScript"],g:["blog","js","javascript","ts","typescript"],e:`

<hr>
`,r:{minutes:.24,words:72},y:"a",t:"10. Mixins"}}],["/js/learn-ts/advanced/11.html",{loader:()=>r(()=>import("./11.html-C2ClYxOS.js"),__vite__mapDeps([731,1])),meta:{c:["JavaScript","TypeScript"],g:["blog","js","javascript","ts","typescript"],e:`

<hr>
`,r:{minutes:.24,words:72},y:"a",t:"11. Namespaces"}}],["/js/learn-ts/advanced/12.html",{loader:()=>r(()=>import("./12.html-DIeAGjhj.js"),__vite__mapDeps([732,1])),meta:{c:["JavaScript","TypeScript"],g:["blog","js","javascript","ts","typescript"],e:`

<hr>
`,r:{minutes:.26,words:78},y:"a",t:"12. Readonly Type"}}],["/js/learn-ts/advanced/13.html",{loader:()=>r(()=>import("./13.html-B9w5b0nJ.js"),__vite__mapDeps([733,1])),meta:{c:["JavaScript","TypeScript"],g:["blog","js","javascript","ts","typescript"],e:`

<hr>
`,r:{minutes:.26,words:78},y:"a",t:"13. Tuple Types"}}],["/js/learn-ts/advanced/14.html",{loader:()=>r(()=>import("./14.html-Ctbv8kBb.js"),__vite__mapDeps([734,1])),meta:{c:["JavaScript","TypeScript"],g:["blog","js","javascript","ts","typescript"],e:`

<hr>
`,r:{minutes:.26,words:78},y:"a",t:"14. Type Aliases"}}],["/js/learn-ts/advanced/15.html",{loader:()=>r(()=>import("./15.html-CyNcvQWW.js"),__vite__mapDeps([735,1])),meta:{c:["JavaScript","TypeScript"],g:["blog","js","javascript","ts","typescript"],e:`

<hr>
`,r:{minutes:.26,words:78},y:"a",t:"15. Type Guards"}}],["/js/learn-ts/advanced/16.html",{loader:()=>r(()=>import("./16.html-Dm3Fbu5a.js"),__vite__mapDeps([736,1])),meta:{c:["JavaScript","TypeScript"],g:["blog","js","javascript","ts","typescript"],e:`

<hr>
`,r:{minutes:.24,words:72},y:"a",t:"16. Decorators"}}],["/js/learn-ts/advanced/17.html",{loader:()=>r(()=>import("./17.html-CDbu5-0b.js"),__vite__mapDeps([737,1])),meta:{c:["JavaScript","TypeScript"],g:["blog","js","javascript","ts","typescript"],e:`

<hr>
`,r:{minutes:.26,words:78},y:"a",t:"17. Utility Types"}}],["/js/learn-ts/advanced/18.html",{loader:()=>r(()=>import("./18.html-CbVNK4qZ.js"),__vite__mapDeps([738,1])),meta:{c:["JavaScript","TypeScript"],g:["blog","js","javascript","ts","typescript"],e:`

<hr>
`,r:{minutes:.26,words:78},y:"a",t:"18. Abstract Classes"}}],["/php/three-min-summary/01-basics/01A.html",{loader:()=>r(()=>import("./01A.html-CdiNPa-8.js"),__vite__mapDeps([739,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.25,words:74},y:"a",t:"01A. PHP와 MySQL 이란"}}],["/php/three-min-summary/01-basics/01B.html",{loader:()=>r(()=>import("./01B.html-DJc4K7U3.js"),__vite__mapDeps([740,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.21,words:64},y:"a",t:"01B. 개발환경 설정"}}],["/php/three-min-summary/01-basics/01C.html",{loader:()=>r(()=>import("./01C.html-Ck1r6bcg.js"),__vite__mapDeps([741,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.23,words:69},y:"a",t:"01C. 첫번째 php 프로그램 만들기"}}],["/php/three-min-summary/01-basics/01D.html",{loader:()=>r(()=>import("./01D.html-DeOYeDyL.js"),__vite__mapDeps([742,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.21,words:64},y:"a",t:"01D. 주석달기"}}],["/php/three-min-summary/01-basics/01E.html",{loader:()=>r(()=>import("./01E.html-ChO8jyjZ.js"),__vite__mapDeps([743,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.21,words:64},y:"a",t:"01E. 변수"}}],["/php/three-min-summary/01-basics/01F.html",{loader:()=>r(()=>import("./01F.html-DVmHGmX2.js"),__vite__mapDeps([744,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.21,words:64},y:"a",t:"01F. 배열"}}],["/php/three-min-summary/01-basics/01G.html",{loader:()=>r(()=>import("./01G.html-HUPuNVaL.js"),__vite__mapDeps([745,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.21,words:64},y:"a",t:"01G. 산술 연산자와 문자열 연산자"}}],["/php/three-min-summary/01-basics/01H.html",{loader:()=>r(()=>import("./01H.html-Darswqz0.js"),__vite__mapDeps([746,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.21,words:64},y:"a",t:"01H. 비교 연산자"}}],["/php/three-min-summary/01-basics/01I.html",{loader:()=>r(()=>import("./01I.html-B3v_YpLS.js"),__vite__mapDeps([747,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.21,words:64},y:"a",t:"01I. 논리 연산자"}}],["/php/three-min-summary/01-basics/01J.html",{loader:()=>r(()=>import("./01J.html-DygBdWkl.js"),__vite__mapDeps([748,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.21,words:64},y:"a",t:"01J. 조건문"}}],["/php/three-min-summary/01-basics/01K.html",{loader:()=>r(()=>import("./01K.html-BDXC2vM9.js"),__vite__mapDeps([749,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.21,words:64},y:"a",t:"01K. 반복문"}}],["/php/three-min-summary/01-basics/01L.html",{loader:()=>r(()=>import("./01L.html-DMfCLj2a.js"),__vite__mapDeps([750,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.21,words:64},y:"a",t:"01L. 함수"}}],["/php/three-min-summary/02-web/02A.html",{loader:()=>r(()=>import("./02A.html-D_ODGIcN.js"),__vite__mapDeps([751,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.23,words:69},y:"a",t:"02A. GET 파라미터"}}],["/php/three-min-summary/02-web/02B.html",{loader:()=>r(()=>import("./02B.html-B53HcIL9.js"),__vite__mapDeps([752,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.23,words:69},y:"a",t:"02B. POST 파라미터"}}],["/php/three-min-summary/02-web/02C.html",{loader:()=>r(()=>import("./02C.html-qj9zDwK-.js"),__vite__mapDeps([753,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.21,words:64},y:"a",t:"02C. 리다이렉트"}}],["/php/three-min-summary/02-web/02D.html",{loader:()=>r(()=>import("./02D.html-DBG1Wegq.js"),__vite__mapDeps([754,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.21,words:64},y:"a",t:"02D. 세션 다루기"}}],["/php/three-min-summary/02-web/02E.html",{loader:()=>r(()=>import("./02E.html-CTwhhdTK.js"),__vite__mapDeps([755,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.23,words:69},y:"a",t:"02E. html 이스케이프 하기"}}],["/php/three-min-summary/02-web/02F.html",{loader:()=>r(()=>import("./02F.html-FhTLL51w.js"),__vite__mapDeps([756,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.21,words:64},y:"a",t:"02F. 비밀번호 암호화하고 매칭하기"}}],["/php/three-min-summary/02-web/02G.html",{loader:()=>r(()=>import("./02G.html-DRLk7gz6.js"),__vite__mapDeps([757,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.21,words:64},y:"a",t:"02G. 파일 읽고 쓰기"}}],["/php/three-min-summary/02-web/02H.html",{loader:()=>r(()=>import("./02H.html-CULdxwRD.js"),__vite__mapDeps([758,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.21,words:64},y:"a",t:"02H. 직렬화와 역직렬화"}}],["/php/three-min-summary/02-web/02I.html",{loader:()=>r(()=>import("./02I.html-wDaNEZCE.js"),__vite__mapDeps([759,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.21,words:64},y:"a",t:"02I. 다른 파일 포함하기"}}],["/php/three-min-summary/02-web/02J.html",{loader:()=>r(()=>import("./02J.html-fRfywu1O.js"),__vite__mapDeps([760,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.21,words:64},y:"a",t:"02J. 날짜 시간 계산하기"}}],["/php/three-min-summary/02-web/02K.html",{loader:()=>r(()=>import("./02K.html-DFSeIF1L.js"),__vite__mapDeps([761,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.23,words:69},y:"a",t:"02K. JSON 다루기"}}],["/php/three-min-summary/03-database/03A.html",{loader:()=>r(()=>import("./03A.html-CStJYn5C.js"),__vite__mapDeps([762,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.23,words:69},y:"a",t:"03A. MySQL 데이터베이스 생성하기"}}],["/php/three-min-summary/03-database/03B.html",{loader:()=>r(()=>import("./03B.html-B_s9RNnE.js"),__vite__mapDeps([763,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.23,words:69},y:"a",t:"03B. MySQL 테이블 생성하기"}}],["/php/three-min-summary/03-database/03C.html",{loader:()=>r(()=>import("./03C.html-4DdNM2Fg.js"),__vite__mapDeps([764,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.23,words:69},y:"a",t:"03C. MySQL 테이블에 값 가져오기"}}],["/php/three-min-summary/03-database/03D.html",{loader:()=>r(()=>import("./03D.html-e9d9Z9TQ.js"),__vite__mapDeps([765,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.23,words:69},y:"a",t:"03D. MySQL 테이블에 값 입력하기"}}],["/php/three-min-summary/03-database/03E.html",{loader:()=>r(()=>import("./03E.html-DlsZemcu.js"),__vite__mapDeps([766,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.23,words:69},y:"a",t:"03E. MySQL 테이블에 값 수정하기"}}],["/php/three-min-summary/03-database/03F.html",{loader:()=>r(()=>import("./03F.html-uMUzAUfb.js"),__vite__mapDeps([767,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.23,words:69},y:"a",t:"03F. MySQL 테이블에 값 삭제하기"}}],["/php/three-min-summary/03-database/03G.html",{loader:()=>r(()=>import("./03G.html-DzP3tBT3.js"),__vite__mapDeps([768,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.25,words:74},y:"a",t:"03G. PHP에서 MySQL 접속하기"}}],["/php/three-min-summary/03-database/03H.html",{loader:()=>r(()=>import("./03H.html-D6Ka4Dzr.js"),__vite__mapDeps([769,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.25,words:74},y:"a",t:"03H. PHP에서 MySQL 값 가져오기"}}],["/php/three-min-summary/03-database/03I.html",{loader:()=>r(()=>import("./03I.html-CAyAwu3P.js"),__vite__mapDeps([770,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.25,words:74},y:"a",t:"03I. PHP에서 MySQL 값 입력하기"}}],["/php/three-min-summary/03-database/03J.html",{loader:()=>r(()=>import("./03J.html-DqIDr8RD.js"),__vite__mapDeps([771,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.26,words:79},y:"a",t:"03J. PHP에서 MySQL 값 수정 / 삭제하기"}}],["/php/three-min-summary/04-string/04A.html",{loader:()=>r(()=>import("./04A.html-SvtBK5HL.js"),__vite__mapDeps([772,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.21,words:64},y:"a",t:"04A. 문자열이 특정 문자열로 시작하는지 검사하기"}}],["/php/three-min-summary/04-string/04B.html",{loader:()=>r(()=>import("./04B.html-CgYm_cBc.js"),__vite__mapDeps([773,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.21,words:64},y:"a",t:"04B. 문자열이 특정 문자열로 끝나는지 검사하기"}}],["/php/three-min-summary/04-string/04C.html",{loader:()=>r(()=>import("./04C.html-CXeso-Vx.js"),__vite__mapDeps([774,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.21,words:64},y:"a",t:"04C. 문자열이 특정 문자열을 포함하는지 검사하기"}}],["/php/three-min-summary/04-string/04D.html",{loader:()=>r(()=>import("./04D.html-DwQdxJc7.js"),__vite__mapDeps([775,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.21,words:64},y:"a",t:"04D. 문자열 자르기"}}],["/php/three-min-summary/04-string/04E.html",{loader:()=>r(()=>import("./04E.html-B8H2tQdu.js"),__vite__mapDeps([776,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.21,words:64},y:"a",t:"04E. 문자열 줄 단위로 자르기"}}],["/php/three-min-summary/04-string/04F.html",{loader:()=>r(()=>import("./04F.html-csYfHrCo.js"),__vite__mapDeps([777,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.21,words:64},y:"a",t:"04F. 문자열 바꾸기"}}],["/php/three-min-summary/05-validation/05A.html",{loader:()=>r(()=>import("./05A.html-27laUc8Q.js"),__vite__mapDeps([778,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.21,words:64},y:"a",t:"05A. 값이 비어있는지 검사하기"}}],["/php/three-min-summary/05-validation/05B.html",{loader:()=>r(()=>import("./05B.html-DXMUYi8v.js"),__vite__mapDeps([779,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.21,words:64},y:"a",t:"05B. 값이 숫자인지 검사하기"}}],["/php/three-min-summary/05-validation/05C.html",{loader:()=>r(()=>import("./05C.html-FDNX7mzc.js"),__vite__mapDeps([780,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.21,words:64},y:"a",t:"05C. 값이 알파벳과 숫자로만 이루어져 있는지 검사하기"}}],["/php/three-min-summary/05-validation/05D.html",{loader:()=>r(()=>import("./05D.html-VDUOtgRn.js"),__vite__mapDeps([781,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.21,words:64},y:"a",t:"05D. 값이 이메일인지 확인하기"}}],["/php/three-min-summary/05-validation/05E.html",{loader:()=>r(()=>import("./05E.html-ByV3Ursh.js"),__vite__mapDeps([782,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.21,words:64},y:"a",t:"05E. 값을 이메일 형식만 남기고 삭제하기"}}],["/php/three-min-summary/06-modern-php/06A.html",{loader:()=>r(()=>import("./06A.html-DjXvQz8A.js"),__vite__mapDeps([783,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.22,words:65},y:"a",t:"06A. 내장 웹서버 실행하기"}}],["/php/three-min-summary/06-modern-php/06B.html",{loader:()=>r(()=>import("./06B.html-Cav5G_w5.js"),__vite__mapDeps([784,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.22,words:65},y:"a",t:"06B. 익명 함수 사용하기"}}],["/php/three-min-summary/06-modern-php/06C.html",{loader:()=>r(()=>import("./06C.html-Crv1rhkv.js"),__vite__mapDeps([785,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.22,words:65},y:"a",t:"06C. 클래스 사용하기"}}],["/php/three-min-summary/06-modern-php/06D.html",{loader:()=>r(()=>import("./06D.html-7ZoD0rHy.js"),__vite__mapDeps([786,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.22,words:65},y:"a",t:"06D. 네임스페이스 사용하기"}}],["/php/three-min-summary/06-modern-php/06E.html",{loader:()=>r(()=>import("./06E.html-Ckhdffjt.js"),__vite__mapDeps([787,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.22,words:65},y:"a",t:"06E. 오토로드 사용하기"}}],["/php/three-min-summary/06-modern-php/06F.html",{loader:()=>r(()=>import("./06F.html-s-57TQHg.js"),__vite__mapDeps([788,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.22,words:65},y:"a",t:"06F. 의존성 라이브러리 관리자 컴포저"}}],["/php/three-min-summary/06-modern-php/06G.html",{loader:()=>r(()=>import("./06G.html-B_jZGGLC.js"),__vite__mapDeps([789,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.22,words:65},y:"a",t:"06G. 유닛 테스트"}}],["/php/three-min-summary/07-miniproject/07A.html",{loader:()=>r(()=>import("./07A.html-BjZtRKg1.js"),__vite__mapDeps([790,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.21,words:64},y:"a",t:"07A. 데이터베이스 생성하기"}}],["/php/three-min-summary/07-miniproject/07B.html",{loader:()=>r(()=>import("./07B.html-CaNhiaAR.js"),__vite__mapDeps([791,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.21,words:64},y:"a",t:"07B. 데이터베이스 유저 생성하기"}}],["/php/three-min-summary/07-miniproject/07C.html",{loader:()=>r(()=>import("./07C.html-mZGgLhUT.js"),__vite__mapDeps([792,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.21,words:64},y:"a",t:"07C. 데이터베이스 유저에 권한 추가하기"}}],["/php/three-min-summary/07-miniproject/07D.html",{loader:()=>r(()=>import("./07D.html-Crm3oq_b.js"),__vite__mapDeps([793,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.21,words:64},y:"a",t:"07D. 데이터베이스 테이블 생성하기"}}],["/php/three-min-summary/07-miniproject/07E.html",{loader:()=>r(()=>import("./07E.html-CFVudoCB.js"),__vite__mapDeps([794,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.23,words:69},y:"a",t:"07E. hosts 설정하기"}}],["/php/three-min-summary/07-miniproject/07F.html",{loader:()=>r(()=>import("./07F.html-CrCO_reO.js"),__vite__mapDeps([795,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.21,words:64},y:"a",t:"07F. 데이터베이스 접속 파일 만들기"}}],["/php/three-min-summary/07-miniproject/07G.html",{loader:()=>r(()=>import("./07G.html-BNJmmKlS.js"),__vite__mapDeps([796,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.21,words:64},y:"a",t:"07G. 공통 헤더 만들기"}}],["/php/three-min-summary/07-miniproject/07H.html",{loader:()=>r(()=>import("./07H.html-BBxAZYJu.js"),__vite__mapDeps([797,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.21,words:64},y:"a",t:"07H. 회원가입 화면 만들기"}}],["/php/three-min-summary/07-miniproject/07I.html",{loader:()=>r(()=>import("./07I.html-DTl5rdrZ.js"),__vite__mapDeps([798,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.21,words:64},y:"a",t:"07I. 회원가입 기능 만들기"}}],["/php/three-min-summary/07-miniproject/07J.html",{loader:()=>r(()=>import("./07J.html-BTHn2v2h.js"),__vite__mapDeps([799,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.21,words:64},y:"a",t:"07J. 로그인 화면 만들기"}}],["/php/three-min-summary/07-miniproject/07K.html",{loader:()=>r(()=>import("./07K.html-BLEc2147.js"),__vite__mapDeps([800,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.21,words:64},y:"a",t:"07K. 로그인 기능 만들기"}}],["/php/three-min-summary/07-miniproject/07L.html",{loader:()=>r(()=>import("./07L.html-DoUiCu5m.js"),__vite__mapDeps([801,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.21,words:64},y:"a",t:"07L. 글쓰기 기능 만들기"}}],["/php/three-min-summary/07-miniproject/07M.html",{loader:()=>r(()=>import("./07M.html-CuKtQo6e.js"),__vite__mapDeps([802,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.23,words:69},y:"a",t:"07M. 글삭제 API 만들기"}}],["/php/three-min-summary/07-miniproject/07N.html",{loader:()=>r(()=>import("./07N.html-CrJhsUEX.js"),__vite__mapDeps([803,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.23,words:69},y:"a",t:"07N. 글목록 API 만들기"}}],["/php/three-min-summary/07-miniproject/07O.html",{loader:()=>r(()=>import("./07O.html-D3nvEocr.js"),__vite__mapDeps([804,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.21,words:64},y:"a",t:"07O. 목록 화면 만들기"}}],["/php/three-min-summary/07-miniproject/07P.html",{loader:()=>r(()=>import("./07P.html-eP417VFF.js"),__vite__mapDeps([805,1])),meta:{c:["PHP","MySQL"],g:["blog","php","mysql","laravel"],e:`

<hr>
`,r:{minutes:.21,words:64},y:"a",t:"07P. 메인 페이지 만들기"}}],["/swift/swiftui-by-example/00-introduction/answering-the-big-question-should-you-learn-swiftui-uikit-or-both.html",{loader:()=>r(()=>import("./answering-the-big-question-should-you-learn-swiftui-uikit-or-both.html-BrQ9P0vP.js"),__vite__mapDeps([806,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
<hr>
<p>lang: ko-KR
title: What is SwiftUI?
description: SwiftUI by Example &gt; What is SwiftUI?
category:</p>
<ul>
<li>Swift
tag:</li>
<li>crashcourse</li>
<li>paul-hudson</li>
<li>swift</li>
<li>swiftui</li>
<li>hacking-with-swift</li>
<li>xcode</li>
<li>appstore
head:</li>
<li>
<ul>
<li>meta:</li>
<li>property: og:title
content: SwiftUI by Example &gt; What is SwiftUI?</li>
<li>property: og:description
content: What is SwiftUI?</li>
<li>property: og:url
content: https://chanhi2000.github.io/crashcourse/swift/swiftui-by-example/00-introduction/what-is-swiftui.html</li>
</ul>
</li>
</ul>`,r:{minutes:4.34,words:1301},y:"a",t:"Answering the big question - should you learn SwiftUI, UIKit, or both?"}}],["/swift/swiftui-by-example/00-introduction/dedication.html",{loader:()=>r(()=>import("./dedication.html-CpOgxFjV.js"),__vite__mapDeps([807,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:1.73,words:520},y:"a",t:"Dedication"}}],["/swift/swiftui-by-example/00-introduction/frequently-asked-questions-about-swiftui.html",{loader:()=>r(()=>import("./frequently-asked-questions-about-swiftui.html-DuMKYdYo.js"),__vite__mapDeps([808,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:2.96,words:888},y:"a",t:"Frequently asked questions about SwiftUI"}}],["/swift/swiftui-by-example/00-introduction/how-to-follow-this-quick-start-guide.html",{loader:()=>r(()=>import("./how-to-follow-this-quick-start-guide.html-wc4KYC_Z.js"),__vite__mapDeps([809,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:1.31,words:392},y:"a",t:"How to follow this quick start guide"}}],["/swift/swiftui-by-example/00-introduction/migrating-from-uikit-to-swiftui.html",{loader:()=>r(()=>import("./migrating-from-uikit-to-swiftui.html-CcULaqhW.js"),__vite__mapDeps([810,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.92,words:277},y:"a",t:"Migrating from UIKit to SwiftUI"}}],["/swift/swiftui-by-example/00-introduction/swiftui-vs-interface-builder-and-storyboards.html",{loader:()=>r(()=>import("./swiftui-vs-interface-builder-and-storyboards.html-Ba0Q8quc.js"),__vite__mapDeps([811,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:2.33,words:699},y:"a",t:"SwiftUI vs Interface Builder and storyboards"}}],["/swift/swiftui-by-example/00-introduction/what-is-swiftui.html",{loader:()=>r(()=>import("./what-is-swiftui.html-iA8HGsYv.js"),__vite__mapDeps([812,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:1.92,words:576},y:"a",t:"What is SwiftUI?"}}],["/swift/swiftui-by-example/00-introduction/whats-in-the-basic-template.html",{loader:()=>r(()=>import("./whats-in-the-basic-template.html-DpZdpNKk.js"),__vite__mapDeps([813,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:2.83,words:848},y:"a",t:"What’s in the basic template?"}}],["/swift/swiftui-by-example/01-building-a-complete-project/adding-items-to-an-order-with-environmentobject.html",{loader:()=>r(()=>import("./adding-items-to-an-order-with-environmentobject.html-BR1wQlVe.js"),__vite__mapDeps([814,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:3.74,words:1123},y:"a",t:"Adding items to an order with @EnvironmentObject"}}],["/swift/swiftui-by-example/01-building-a-complete-project/adding-swipe-to-delete-and-editbutton.html",{loader:()=>r(()=>import("./adding-swipe-to-delete-and-editbutton.html-Lt_Zp9HZ.js"),__vite__mapDeps([815,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:1.9,words:570},y:"a",t:"Adding swipe to delete and EditButton"}}],["/swift/swiftui-by-example/01-building-a-complete-project/adding-tabview-and-tabitem.html",{loader:()=>r(()=>import("./adding-tabview-and-tabitem.html-Dca9_Wa4.js"),__vite__mapDeps([816,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:2.36,words:707},y:"a",t:"Adding TabView and tabItem()"}}],["/swift/swiftui-by-example/01-building-a-complete-project/bindings-and-forms.html",{loader:()=>r(()=>import("./bindings-and-forms.html-CdERSpiw.js"),__vite__mapDeps([817,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:2.79,words:836},y:"a",t:"Bindings and forms"}}],["/swift/swiftui-by-example/01-building-a-complete-project/building-a-menu-using-list.html",{loader:()=>r(()=>import("./building-a-menu-using-list.html-CnTmGp2v.js"),__vite__mapDeps([818,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:6.69,words:2006},y:"a",t:"Building a menu using List"}}],["/swift/swiftui-by-example/01-building-a-complete-project/composing-views-to-create-a-list-row.html",{loader:()=>r(()=>import("./composing-views-to-create-a-list-row.html-6r54-qX_.js"),__vite__mapDeps([819,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:3.93,words:1179},y:"a",t:"Composing views to create a list row"}}],["/swift/swiftui-by-example/01-building-a-complete-project/displaying-a-detail-screen-with-navigationlink.html",{loader:()=>r(()=>import("./displaying-a-detail-screen-with-navigationlink.html-DDjKS0tH.js"),__vite__mapDeps([820,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:5.62,words:1687},y:"a",t:"Displaying a detail screen with NavigationLink"}}],["/swift/swiftui-by-example/01-building-a-complete-project/formatting-interpolated-strings-in-swiftui.html",{loader:()=>r(()=>import("./formatting-interpolated-strings-in-swiftui.html-Bhw8vzrN.js"),__vite__mapDeps([821,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.99,words:297},y:"a",t:"Formatting interpolated strings in SwiftUI"}}],["/swift/swiftui-by-example/01-building-a-complete-project/observable-objects-environment-objects-and-published.html",{loader:()=>r(()=>import("./observable-objects-environment-objects-and-published.html-DZ4R4IHu.js"),__vite__mapDeps([822,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:2.95,words:886},y:"a",t:"Observable objects, environment objects, and @Published"}}],["/swift/swiftui-by-example/01-building-a-complete-project/polishing-designs-with-fonts-and-colors.html",{loader:()=>r(()=>import("./polishing-designs-with-fonts-and-colors.html-4kt-ixoQ.js"),__vite__mapDeps([823,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:3.34,words:1001},y:"a",t:"Polishing designs with fonts and colors"}}],["/swift/swiftui-by-example/01-building-a-complete-project/presenting-an-alert.html",{loader:()=>r(()=>import("./presenting-an-alert.html-USTRpdat.js"),__vite__mapDeps([824,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:1.47,words:440},y:"a",t:"Presenting an alert"}}],["/swift/swiftui-by-example/01-building-a-complete-project/swiftui-tutorial-building-a-complete-project.html",{loader:()=>r(()=>import("./swiftui-tutorial-building-a-complete-project.html-DUmIcWfv.js"),__vite__mapDeps([825,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:2.02,words:607},y:"a",t:"Building a complete project"}}],["/swift/swiftui-by-example/01-building-a-complete-project/two-way-bindings-in-swiftui.html",{loader:()=>r(()=>import("./two-way-bindings-in-swiftui.html-45S2ULne.js"),__vite__mapDeps([826,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:4.77,words:1430},y:"a",t:"Two-way bindings in SwiftUI"}}],["/swift/swiftui-by-example/01-building-a-complete-project/wrap-up-our-swiftui-project-is-complete.html",{loader:()=>r(()=>import("./wrap-up-our-swiftui-project-is-complete.html-BO9AYtEv.js"),__vite__mapDeps([827,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:1.37,words:412},y:"a",t:"Wrap up - our SwiftUI project is complete"}}],["/swift/swiftui-by-example/02-working-with-static-text/how-to-add-advanced-text-styling-using-attributedstring.html",{loader:()=>r(()=>import("./how-to-add-advanced-text-styling-using-attributedstring.html-B1L5csa2.js"),__vite__mapDeps([828,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.44,words:133},y:"a",t:"How to add advanced text styling using AttributedString"}}],["/swift/swiftui-by-example/02-working-with-static-text/how-to-add-spacing-between-letters-in-text.html",{loader:()=>r(()=>import("./how-to-add-spacing-between-letters-in-text.html-Ct5Xnb5z.js"),__vite__mapDeps([829,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.44,words:133},y:"a",t:"How to add spacing between letters in text"}}],["/swift/swiftui-by-example/02-working-with-static-text/how-to-adjust-text-alignment-using-multilinetextalignment.html",{loader:()=>r(()=>import("./how-to-adjust-text-alignment-using-multilinetextalignment.html-FtrP4Zd-.js"),__vite__mapDeps([830,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.42,words:125},y:"a",t:"How to adjust text alignment using multilineTextAlignment()"}}],["/swift/swiftui-by-example/02-working-with-static-text/how-to-create-static-labels-with-a-text-view.html",{loader:()=>r(()=>import("./how-to-create-static-labels-with-a-text-view.html-DWjMkzMR.js"),__vite__mapDeps([831,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.47,words:141},y:"a",t:"How to create static labels with a Text view"}}],["/swift/swiftui-by-example/02-working-with-static-text/how-to-customize-the-way-links-are-opened.html",{loader:()=>r(()=>import("./how-to-customize-the-way-links-are-opened.html-DtbDAHLh.js"),__vite__mapDeps([832,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.44,words:133},y:"a",t:"How to customize the way links are opened"}}],["/swift/swiftui-by-example/02-working-with-static-text/how-to-format-dates-inside-text-views.html",{loader:()=>r(()=>import("./how-to-format-dates-inside-text-views.html-Bx6JYd3W.js"),__vite__mapDeps([833,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.42,words:125},y:"a",t:"How to format dates inside text views"}}],["/swift/swiftui-by-example/02-working-with-static-text/how-to-format-text-inside-text-views.html",{loader:()=>r(()=>import("./how-to-format-text-inside-text-views.html-Bm7bHVu3.js"),__vite__mapDeps([834,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.42,words:125},y:"a",t:"How to format text inside text views"}}],["/swift/swiftui-by-example/02-working-with-static-text/how-to-let-users-select-text.html",{loader:()=>r(()=>import("./how-to-let-users-select-text.html-BNMCHdkT.js"),__vite__mapDeps([835,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.4,words:119},y:"a",t:"How to let users select text"}}],["/swift/swiftui-by-example/02-working-with-static-text/how-to-make-textfield-uppercase-or-lowercase-using-textcase.html",{loader:()=>r(()=>import("./how-to-make-textfield-uppercase-or-lowercase-using-textcase.html-kZZOz5ii.js"),__vite__mapDeps([836,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.47,words:141},y:"a",t:"How to make TextField uppercase or lowercase using textCase()"}}],["/swift/swiftui-by-example/02-working-with-static-text/how-to-mark-content-as-a-placeholder-using-redacted.html",{loader:()=>r(()=>import("./how-to-mark-content-as-a-placeholder-using-redacted.html-DdUXX9Hv.js"),__vite__mapDeps([837,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.47,words:141},y:"a",t:"How to mark content as a placeholder using redacted()"}}],["/swift/swiftui-by-example/02-working-with-static-text/how-to-mark-content-as-private-using-privacysensitive.html",{loader:()=>r(()=>import("./how-to-mark-content-as-private-using-privacysensitive.html-Zoktjnnp.js"),__vite__mapDeps([838,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.44,words:133},y:"a",t:"How to mark content as private using privacySensitive()"}}],["/swift/swiftui-by-example/02-working-with-static-text/how-to-render-markdown-content-in-text.html",{loader:()=>r(()=>import("./how-to-render-markdown-content-in-text.html-Ck_zoJBn.js"),__vite__mapDeps([839,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.42,words:125},y:"a",t:"How to render Markdown content in text"}}],["/swift/swiftui-by-example/02-working-with-static-text/how-to-show-text-and-an-icon-side-by-side-using-label.html",{loader:()=>r(()=>import("./how-to-show-text-and-an-icon-side-by-side-using-label.html-DFQ3VHbZ.js"),__vite__mapDeps([840,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.55,words:165},y:"a",t:"How to show text and an icon side by side using Label"}}],["/swift/swiftui-by-example/02-working-with-static-text/how-to-style-text-views-with-fonts-colors-line-spacing-and-more.html",{loader:()=>r(()=>import("./how-to-style-text-views-with-fonts-colors-line-spacing-and-more.html-BbBQENQH.js"),__vite__mapDeps([841,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.55,words:165},y:"a",t:"How to style text views with fonts, colors, line spacing, and more"}}],["/swift/swiftui-by-example/03-images-shapes-and-media/how-to-adjust-the-way-an-image-is-fitted-to-its-space.html",{loader:()=>r(()=>import("./how-to-adjust-the-way-an-image-is-fitted-to-its-space.html-CetOwetT.js"),__vite__mapDeps([842,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.55,words:165},y:"a",t:"How to adjust the way an image is fitted to its space"}}],["/swift/swiftui-by-example/03-images-shapes-and-media/how-to-display-solid-shapes.html",{loader:()=>r(()=>import("./how-to-display-solid-shapes.html-De2mj0sP.js"),__vite__mapDeps([843,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.36,words:109},y:"a",t:"How to display solid shapes"}}],["/swift/swiftui-by-example/03-images-shapes-and-media/how-to-draw-images-using-image-views.html",{loader:()=>r(()=>import("./how-to-draw-images-using-image-views.html-D4FX8Cyg.js"),__vite__mapDeps([844,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.42,words:125},y:"a",t:"How to draw images using Image views"}}],["/swift/swiftui-by-example/03-images-shapes-and-media/how-to-draw-part-of-a-solid-shape-using-trim.html",{loader:()=>r(()=>import("./how-to-draw-part-of-a-solid-shape-using-trim.html-BwfFVwLt.js"),__vite__mapDeps([845,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.5,words:149},y:"a",t:"How to draw part of a solid shape using trim()"}}],["/swift/swiftui-by-example/03-images-shapes-and-media/how-to-dynamically-adjust-the-color-of-an-sf-symbol.html",{loader:()=>r(()=>import("./how-to-dynamically-adjust-the-color-of-an-sf-symbol.html-Bn7il-o1.js"),__vite__mapDeps([846,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.5,words:149},y:"a",t:"How to dynamically adjust the color of an SF Symbol"}}],["/swift/swiftui-by-example/03-images-shapes-and-media/how-to-fill-and-stroke-shapes-at-the-same-time.html",{loader:()=>r(()=>import("./how-to-fill-and-stroke-shapes-at-the-same-time.html-CJRlZcGD.js"),__vite__mapDeps([847,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.5,words:149},y:"a",t:"How to fill and stroke shapes at the same time"}}],["/swift/swiftui-by-example/03-images-shapes-and-media/how-to-get-custom-colors-and-transparency-with-sf-symbols.html",{loader:()=>r(()=>import("./how-to-get-custom-colors-and-transparency-with-sf-symbols.html-DGB3aa4P.js"),__vite__mapDeps([848,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.5,words:149},y:"a",t:"How to get custom colors and transparency with SF Symbols"}}],["/swift/swiftui-by-example/03-images-shapes-and-media/how-to-integrate-spritekit-using-spriteview.html",{loader:()=>r(()=>import("./how-to-integrate-spritekit-using-spriteview.html-DQ1EecdO.js"),__vite__mapDeps([849,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.39,words:117},y:"a",t:"How to integrate SpriteKit using SpriteView"}}],["/swift/swiftui-by-example/03-images-shapes-and-media/how-to-let-users-import-videos-using-photospicker.html",{loader:()=>r(()=>import("./how-to-let-users-import-videos-using-photospicker.html-04Iz8UVQ.js"),__vite__mapDeps([850,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.44,words:133},y:"a",t:"How to let users import videos using PhotosPicker"}}],["/swift/swiftui-by-example/03-images-shapes-and-media/how-to-let-users-select-pictures-using-photospicker.html",{loader:()=>r(()=>import("./how-to-let-users-select-pictures-using-photospicker.html-CcBit_ZC.js"),__vite__mapDeps([851,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.44,words:133},y:"a",t:"How to let users select pictures using PhotosPicker"}}],["/swift/swiftui-by-example/03-images-shapes-and-media/how-to-load-a-remote-image-from-a-url.html",{loader:()=>r(()=>import("./how-to-load-a-remote-image-from-a-url.html-CQsFbHAe.js"),__vite__mapDeps([852,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.47,words:141},y:"a",t:"How to load a remote image from a URL"}}],["/swift/swiftui-by-example/03-images-shapes-and-media/how-to-play-movies-with-videoplayer.html",{loader:()=>r(()=>import("./how-to-play-movies-with-videoplayer.html-BO-N2mQg.js"),__vite__mapDeps([853,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.39,words:117},y:"a",t:"How to play movies with VideoPlayer"}}],["/swift/swiftui-by-example/03-images-shapes-and-media/how-to-render-a-gradient.html",{loader:()=>r(()=>import("./how-to-render-a-gradient.html-S7PMHAGN.js"),__vite__mapDeps([854,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.36,words:109},y:"a",t:"How to render a gradient"}}],["/swift/swiftui-by-example/03-images-shapes-and-media/how-to-render-images-using-sf-symbols.html",{loader:()=>r(()=>import("./how-to-render-images-using-sf-symbols.html-Cw1fybfl.js"),__vite__mapDeps([855,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.42,words:125},y:"a",t:"How to render images using SF Symbols"}}],["/swift/swiftui-by-example/03-images-shapes-and-media/how-to-tile-an-image.html",{loader:()=>r(()=>import("./how-to-tile-an-image.html-nvkCD2J2.js"),__vite__mapDeps([856,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.36,words:109},y:"a",t:"How to tile an image"}}],["/swift/swiftui-by-example/03-images-shapes-and-media/how-to-use-images-and-other-views-as-a-backgrounds.html",{loader:()=>r(()=>import("./how-to-use-images-and-other-views-as-a-backgrounds.html-CBuGI5XO.js"),__vite__mapDeps([857,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.5,words:149},y:"a",t:"How to use images and other views as a backgrounds"}}],["/swift/swiftui-by-example/03-images-shapes-and-media/when-should-you-use-containerrelativeshape.html",{loader:()=>r(()=>import("./when-should-you-use-containerrelativeshape.html-Dw7JT329.js"),__vite__mapDeps([858,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.36,words:109},y:"a",t:"When should you use ContainerRelativeShape?"}}],["/swift/swiftui-by-example/04-view-layout/how-to-control-layout-priority-using-layoutpriority.html",{loader:()=>r(()=>import("./how-to-control-layout-priority-using-layoutpriority.html-C5oHu_Kk.js"),__vite__mapDeps([859,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.41,words:123},y:"a",t:"How to control layout priority using layoutPriority()"}}],["/swift/swiftui-by-example/04-view-layout/how-to-control-spacing-around-individual-views-using-padding.html",{loader:()=>r(()=>import("./how-to-control-spacing-around-individual-views-using-padding.html-DUJPguYU.js"),__vite__mapDeps([860,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.46,words:139},y:"a",t:"How to control spacing around individual views using padding"}}],["/swift/swiftui-by-example/04-view-layout/how-to-create-a-custom-layout-using-the-layout-protocol.html",{loader:()=>r(()=>import("./how-to-create-a-custom-layout-using-the-layout-protocol.html-DqyjbLOP.js"),__vite__mapDeps([861,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.49,words:147},y:"a",t:"How to create a custom layout using the Layout protocol"}}],["/swift/swiftui-by-example/04-view-layout/how-to-create-an-adaptive-layout-with-viewthatfits.html",{loader:()=>r(()=>import("./how-to-create-an-adaptive-layout-with-viewthatfits.html-vRa-i1AU.js"),__vite__mapDeps([862,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.44,words:131},y:"a",t:"How to create an adaptive layout with ViewThatFits"}}],["/swift/swiftui-by-example/04-view-layout/how-to-create-views-in-a-loop-using-foreach.html",{loader:()=>r(()=>import("./how-to-create-views-in-a-loop-using-foreach.html-DYORLXwY.js"),__vite__mapDeps([863,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.46,words:139},y:"a",t:"How to create views in a loop using ForEach"}}],["/swift/swiftui-by-example/04-view-layout/how-to-dynamically-change-between-vstack-and-hstack.html",{loader:()=>r(()=>import("./how-to-dynamically-change-between-vstack-and-hstack.html-HHO0MhyO.js"),__vite__mapDeps([864,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.44,words:131},y:"a",t:"How to dynamically change between VStack and HStack"}}],["/swift/swiftui-by-example/04-view-layout/how-to-give-a-view-a-custom-frame.html",{loader:()=>r(()=>import("./how-to-give-a-view-a-custom-frame.html-iYdg5Dij.js"),__vite__mapDeps([865,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.44,words:131},y:"a",t:"How to give a view a custom frame"}}],["/swift/swiftui-by-example/04-view-layout/how-to-hide-the-home-indicator-and-other-system-ui.html",{loader:()=>r(()=>import("./how-to-hide-the-home-indicator-and-other-system-ui.html-FNB8g-Mu.js"),__vite__mapDeps([866,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.49,words:147},y:"a",t:"How to hide the home indicator and other system UI"}}],["/swift/swiftui-by-example/04-view-layout/how-to-inset-the-safe-area-with-custom-content.html",{loader:()=>r(()=>import("./how-to-inset-the-safe-area-with-custom-content.html-DIBHhy5N.js"),__vite__mapDeps([867,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.46,words:139},y:"a",t:"How to inset the safe area with custom content"}}],["/swift/swiftui-by-example/04-view-layout/how-to-make-two-views-the-same-width-or-height.html",{loader:()=>r(()=>import("./how-to-make-two-views-the-same-width-or-height.html-B4b2PBpe.js"),__vite__mapDeps([868,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.49,words:147},y:"a",t:"How to make two views the same width or height"}}],["/swift/swiftui-by-example/04-view-layout/how-to-place-content-outside-the-safe-area.html",{loader:()=>r(()=>import("./how-to-place-content-outside-the-safe-area.html-BfsjR2-9.js"),__vite__mapDeps([869,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.44,words:131},y:"a",t:"How to place content outside the safe area"}}],["/swift/swiftui-by-example/04-view-layout/how-to-provide-relative-sizes-using-geometryreader.html",{loader:()=>r(()=>import("./how-to-provide-relative-sizes-using-geometryreader.html-CKIfPx9r.js"),__vite__mapDeps([870,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.41,words:123},y:"a",t:"How to provide relative sizes using GeometryReader"}}],["/swift/swiftui-by-example/04-view-layout/how-to-provide-visual-structure-using-foreground-styles.html",{loader:()=>r(()=>import("./how-to-provide-visual-structure-using-foreground-styles.html-CdqJaTIR.js"),__vite__mapDeps([871,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.44,words:131},y:"a",t:"How to provide visual structure using foreground styles"}}],["/swift/swiftui-by-example/04-view-layout/how-to-return-different-view-types.html",{loader:()=>r(()=>import("./how-to-return-different-view-types.html-DcRMdaCc.js"),__vite__mapDeps([872,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.38,words:115},y:"a",t:"How to return different view types"}}],["/swift/swiftui-by-example/04-view-layout/how-to-stop-system-gestures-from-interfering-with-your-own.html",{loader:()=>r(()=>import("./how-to-stop-system-gestures-from-interfering-with-your-own.html-DUtoBty0.js"),__vite__mapDeps([873,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.49,words:147},y:"a",t:"How to stop system gestures from interfering with your own"}}],["/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-add-horizontal-and-vertical-scrolling-using-scrollview.html",{loader:()=>r(()=>import("./how-to-add-horizontal-and-vertical-scrolling-using-scrollview.html-BrCvUx1y.js"),__vite__mapDeps([874,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.47,words:140},y:"a",t:"How to add horizontal and vertical scrolling using ScrollView"}}],["/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-automatically-switch-between-hstack-and-vstack-based-on-size-class.html",{loader:()=>r(()=>import("./how-to-automatically-switch-between-hstack-and-vstack-based-on-size-class.html-DmspmelQ.js"),__vite__mapDeps([875,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.55,words:164},y:"a",t:"How to automatically switch between HStack and VStack based on size class"}}],["/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-change-the-order-of-view-layering-using-z-index.html",{loader:()=>r(()=>import("./how-to-change-the-order-of-view-layering-using-z-index.html-D_uePDV9.js"),__vite__mapDeps([876,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.52,words:156},y:"a",t:"How to change the order of view layering using Z index"}}],["/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-create-3d-effects-like-cover-flow-using-scrollview-and-geometryreader.html",{loader:()=>r(()=>import("./how-to-create-3d-effects-like-cover-flow-using-scrollview-and-geometryreader.html-BNNAhD8w.js"),__vite__mapDeps([877,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.55,words:164},y:"a",t:"How to create 3D effects like Cover Flow using ScrollView and GeometryReader"}}],["/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-create-different-layouts-using-size-classes.html",{loader:()=>r(()=>import("./how-to-create-different-layouts-using-size-classes.html-GKVOEVAI.js"),__vite__mapDeps([878,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.44,words:132},y:"a",t:"How to create different layouts using size classes"}}],["/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-create-multi-column-lists-using-table.html",{loader:()=>r(()=>import("./how-to-create-multi-column-lists-using-table.html-CQfZZx2q.js"),__vite__mapDeps([879,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.44,words:132},y:"a",t:"How to create multi-column lists using Table"}}],["/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-create-stacks-using-vstack-and-hstack.html",{loader:()=>r(()=>import("./how-to-create-stacks-using-vstack-and-hstack.html-04aDKUPT.js"),__vite__mapDeps([880,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.44,words:132},y:"a",t:"How to create stacks using VStack and HStack"}}],["/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-customize-stack-layouts-with-alignment-and-spacing.html",{loader:()=>r(()=>import("./how-to-customize-stack-layouts-with-alignment-and-spacing.html-Di979dd1.js"),__vite__mapDeps([881,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.47,words:140},y:"a",t:"How to customize stack layouts with alignment and spacing"}}],["/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-dismiss-the-keyboard-when-the-user-scrolls.html",{loader:()=>r(()=>import("./how-to-dismiss-the-keyboard-when-the-user-scrolls.html-Bl9ZaQGW.js"),__vite__mapDeps([882,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.47,words:140},y:"a",t:"How to dismiss the keyboard when the user scrolls"}}],["/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-force-views-to-one-side-inside-a-stack-using-spacer.html",{loader:()=>r(()=>import("./how-to-force-views-to-one-side-inside-a-stack-using-spacer.html-mvnxAvZZ.js"),__vite__mapDeps([883,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.55,words:164},y:"a",t:"How to force views to one side inside a stack using Spacer"}}],["/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-hide-the-scroll-indicators-in-scrollview-list-and-more.html",{loader:()=>r(()=>import("./how-to-hide-the-scroll-indicators-in-scrollview-list-and-more.html-yyfmWlVa.js"),__vite__mapDeps([884,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.52,words:156},y:"a",t:"How to hide the scroll indicators in ScrollView, List, and more"}}],["/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-layer-views-on-top-of-each-other-using-zstack.html",{loader:()=>r(()=>import("./how-to-layer-views-on-top-of-each-other-using-zstack.html-BgC1xj8T.js"),__vite__mapDeps([885,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.52,words:156},y:"a",t:"How to layer views on top of each other using ZStack"}}],["/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-lazy-load-views-using-lazyvstack-and-lazyhstack.html",{loader:()=>r(()=>import("./how-to-lazy-load-views-using-lazyvstack-and-lazyhstack.html-DggKclO7.js"),__vite__mapDeps([886,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.47,words:140},y:"a",t:"How to lazy load views using LazyVStack and LazyHStack"}}],["/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-make-a-fixed-size-spacer.html",{loader:()=>r(()=>import("./how-to-make-a-fixed-size-spacer.html-DRSFQRIS.js"),__vite__mapDeps([887,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.41,words:124},y:"a",t:"How to make a fixed size Spacer"}}],["/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-make-a-scroll-view-move-to-a-location-using-scrollviewreader.html",{loader:()=>r(()=>import("./how-to-make-a-scroll-view-move-to-a-location-using-scrollviewreader.html-BkMfaHet.js"),__vite__mapDeps([888,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.55,words:164},y:"a",t:"How to make a scroll view move to a location using ScrollViewReader"}}],["/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-position-views-in-a-fixed-grid.html",{loader:()=>r(()=>import("./how-to-position-views-in-a-fixed-grid.html-BdRGBpVe.js"),__vite__mapDeps([889,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.44,words:132},y:"a",t:"How to position views in a fixed grid"}}],["/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-position-views-in-a-grid-using-lazyvgrid-and-lazyhgrid.html",{loader:()=>r(()=>import("./how-to-position-views-in-a-grid-using-lazyvgrid-and-lazyhgrid.html-QhcGn85U.js"),__vite__mapDeps([890,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.52,words:156},y:"a",t:"How to position views in a grid using LazyVGrid and LazyHGrid"}}],["/swift/swiftui-by-example/06-user-interface-controls/how-to-add-a-border-to-a-textfield.html",{loader:()=>r(()=>import("./how-to-add-a-border-to-a-textfield.html-BeqzIUT0.js"),__vite__mapDeps([891,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.44,words:132},y:"a",t:"How to add a border to a TextField"}}],["/swift/swiftui-by-example/06-user-interface-controls/how-to-add-a-placeholder-to-a-textfield.html",{loader:()=>r(()=>import("./how-to-add-a-placeholder-to-a-textfield.html-CF58STAo.js"),__vite__mapDeps([892,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.44,words:132},y:"a",t:"How to add a placeholder to a TextField"}}],["/swift/swiftui-by-example/06-user-interface-controls/how-to-create-a-date-picker-and-read-values-from-it.html",{loader:()=>r(()=>import("./how-to-create-a-date-picker-and-read-values-from-it.html-D_89pgtp.js"),__vite__mapDeps([893,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.52,words:156},y:"a",t:"How to create a date picker and read values from it"}}],["/swift/swiftui-by-example/06-user-interface-controls/how-to-create-a-picker-and-read-values-from-it.html",{loader:()=>r(()=>import("./how-to-create-a-picker-and-read-values-from-it.html-BbbMfTP5.js"),__vite__mapDeps([894,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.49,words:148},y:"a",t:"How to create a picker and read values from it"}}],["/swift/swiftui-by-example/06-user-interface-controls/how-to-create-a-segmented-control-and-read-values-from-it.html",{loader:()=>r(()=>import("./how-to-create-a-segmented-control-and-read-values-from-it.html-DA4nGpgK.js"),__vite__mapDeps([895,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.52,words:156},y:"a",t:"How to create a segmented control and read values from it"}}],["/swift/swiftui-by-example/06-user-interface-controls/how-to-create-a-slider-and-read-values-from-it.html",{loader:()=>r(()=>import("./how-to-create-a-slider-and-read-values-from-it.html-Cte_pPpi.js"),__vite__mapDeps([896,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.49,words:148},y:"a",t:"How to create a slider and read values from it"}}],["/swift/swiftui-by-example/06-user-interface-controls/how-to-create-a-stepper-and-read-values-from-it.html",{loader:()=>r(()=>import("./how-to-create-a-stepper-and-read-values-from-it.html-HK-o1qEi.js"),__vite__mapDeps([897,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.49,words:148},y:"a",t:"How to create a stepper and read values from it"}}],["/swift/swiftui-by-example/06-user-interface-controls/how-to-create-a-tappable-button.html",{loader:()=>r(()=>import("./how-to-create-a-tappable-button.html-7_jodYOq.js"),__vite__mapDeps([898,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.39,words:116},y:"a",t:"How to create a tappable button"}}],["/swift/swiftui-by-example/06-user-interface-controls/how-to-create-a-toggle-switch.html",{loader:()=>r(()=>import("./how-to-create-a-toggle-switch.html-DMwIG6uQ.js"),__vite__mapDeps([899,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.39,words:116},y:"a",t:"How to create a toggle switch"}}],["/swift/swiftui-by-example/06-user-interface-controls/how-to-create-multi-line-editable-text-with-texteditor.html",{loader:()=>r(()=>import("./how-to-create-multi-line-editable-text-with-texteditor.html-DpjteYDA.js"),__vite__mapDeps([900,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.47,words:140},y:"a",t:"How to create multi-line editable text with TextEditor"}}],["/swift/swiftui-by-example/06-user-interface-controls/how-to-create-secure-text-fields-using-securefield.html",{loader:()=>r(()=>import("./how-to-create-secure-text-fields-using-securefield.html-CCwTBwJi.js"),__vite__mapDeps([901,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.44,words:132},y:"a",t:"How to create secure text fields using SecureField"}}],["/swift/swiftui-by-example/06-user-interface-controls/how-to-customize-the-submit-button-for-textfield-securefield-and-texteditor.html",{loader:()=>r(()=>import("./how-to-customize-the-submit-button-for-textfield-securefield-and-texteditor.html-BE02Y5_o.js"),__vite__mapDeps([902,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.52,words:156},y:"a",t:"How to customize the submit button for TextField, SecureField, and TextEditor"}}],["/swift/swiftui-by-example/06-user-interface-controls/how-to-disable-autocorrect-in-a-textfield.html",{loader:()=>r(()=>import("./how-to-disable-autocorrect-in-a-textfield.html-CQ4_1w0B.js"),__vite__mapDeps([903,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.41,words:124},y:"a",t:"How to disable autocorrect in a TextField"}}],["/swift/swiftui-by-example/06-user-interface-controls/how-to-disable-the-overlay-color-for-images-inside-button-and-navigationlink.html",{loader:()=>r(()=>import("./how-to-disable-the-overlay-color-for-images-inside-button-and-navigationlink.html-BeC2Xwv0.js"),__vite__mapDeps([904,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.55,words:164},y:"a",t:"How to disable the overlay color for images inside Button and NavigationLink"}}],["/swift/swiftui-by-example/06-user-interface-controls/how-to-dismiss-the-keyboard-for-a-textfield.html",{loader:()=>r(()=>import("./how-to-dismiss-the-keyboard-for-a-textfield.html-Ea7mfMCo.js"),__vite__mapDeps([905,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.44,words:132},y:"a",t:"How to dismiss the keyboard for a TextField"}}],["/swift/swiftui-by-example/06-user-interface-controls/how-to-format-a-textfield-for-numbers.html",{loader:()=>r(()=>import("./how-to-format-a-textfield-for-numbers.html-CWNl4N_P.js"),__vite__mapDeps([906,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.41,words:124},y:"a",t:"How to format a TextField for numbers"}}],["/swift/swiftui-by-example/06-user-interface-controls/how-to-get-bordered-buttons-that-stand-out.html",{loader:()=>r(()=>import("./how-to-get-bordered-buttons-that-stand-out.html-CXVsu4f5.js"),__vite__mapDeps([907,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.44,words:132},y:"a",t:"How to get bordered buttons that stand out"}}],["/swift/swiftui-by-example/06-user-interface-controls/how-to-group-views-together-with-controlgroup.html",{loader:()=>r(()=>import("./how-to-group-views-together-with-controlgroup.html-B8Uwvavk.js"),__vite__mapDeps([908,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.41,words:124},y:"a",t:"How to group views together with ControlGroup"}}],["/swift/swiftui-by-example/06-user-interface-controls/how-to-hide-the-label-of-a-picker-stepper-toggle-and-more-using-labelshidden.html",{loader:()=>r(()=>import("./how-to-hide-the-label-of-a-picker-stepper-toggle-and-more-using-labelshidden.html-BTICVjY4.js"),__vite__mapDeps([909,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.6,words:180},y:"a",t:"How to hide the label of a Picker, Stepper, Toggle, and more using labelsHidden()"}}],["/swift/swiftui-by-example/06-user-interface-controls/how-to-let-the-user-select-multiple-dates.html",{loader:()=>r(()=>import("./how-to-let-the-user-select-multiple-dates.html-BiROvxNn.js"),__vite__mapDeps([910,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.44,words:132},y:"a",t:"How to let the user select multiple dates"}}],["/swift/swiftui-by-example/06-user-interface-controls/how-to-let-users-select-a-color-with-colorpicker.html",{loader:()=>r(()=>import("./how-to-let-users-select-a-color-with-colorpicker.html-owlBsnym.js"),__vite__mapDeps([911,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.47,words:140},y:"a",t:"How to let users select a color with ColorPicker"}}],["/swift/swiftui-by-example/06-user-interface-controls/how-to-make-a-textfield-expand-vertically-as-the-user-types.html",{loader:()=>r(()=>import("./how-to-make-a-textfield-expand-vertically-as-the-user-types.html-DfLsy7K-.js"),__vite__mapDeps([912,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.52,words:156},y:"a",t:"How to make a TextField expand vertically as the user types"}}],["/swift/swiftui-by-example/06-user-interface-controls/how-to-make-a-textfield-or-texteditor-have-default-focus.html",{loader:()=>r(()=>import("./how-to-make-a-textfield-or-texteditor-have-default-focus.html-B9kVHX5Z.js"),__vite__mapDeps([913,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.49,words:148},y:"a",t:"How to make a TextField or TextEditor have default focus"}}],["/swift/swiftui-by-example/06-user-interface-controls/how-to-open-web-links-in-safari.html",{loader:()=>r(()=>import("./how-to-open-web-links-in-safari.html-CiB9wKCX.js"),__vite__mapDeps([914,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.41,words:124},y:"a",t:"How to open web links in Safari"}}],["/swift/swiftui-by-example/06-user-interface-controls/how-to-read-text-from-a-textfield.html",{loader:()=>r(()=>import("./how-to-read-text-from-a-textfield.html-CPuCFzFR.js"),__vite__mapDeps([915,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.41,words:124},y:"a",t:"How to read text from a TextField"}}],["/swift/swiftui-by-example/06-user-interface-controls/how-to-show-a-map-view.html",{loader:()=>r(()=>import("./how-to-show-a-map-view.html-Cm_ggdHW.js"),__vite__mapDeps([916,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.39,words:116},y:"a",t:"How to show a Map view"}}],["/swift/swiftui-by-example/06-user-interface-controls/how-to-show-annotations-in-a-map-view.html",{loader:()=>r(()=>import("./how-to-show-annotations-in-a-map-view.html-3u9sK1GZ.js"),__vite__mapDeps([917,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.44,words:132},y:"a",t:"How to show annotations in a Map view"}}],["/swift/swiftui-by-example/06-user-interface-controls/how-to-show-indeterminate-progress-using-progressview.html",{loader:()=>r(()=>import("./how-to-show-indeterminate-progress-using-progressview.html-DLCEHnwR.js"),__vite__mapDeps([918,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.41,words:124},y:"a",t:"How to show indeterminate progress using ProgressView"}}],["/swift/swiftui-by-example/06-user-interface-controls/how-to-show-progress-on-a-task-using-progressview.html",{loader:()=>r(()=>import("./how-to-show-progress-on-a-task-using-progressview.html-BjitRrlB.js"),__vite__mapDeps([919,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.47,words:140},y:"a",t:"How to show progress on a task using ProgressView"}}],["/swift/swiftui-by-example/06-user-interface-controls/how-to-take-action-when-the-user-submits-a-textfield.html",{loader:()=>r(()=>import("./how-to-take-action-when-the-user-submits-a-textfield.html-Bz11RsQb.js"),__vite__mapDeps([920,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.49,words:148},y:"a",t:"How to take action when the user submits a TextField"}}],["/swift/swiftui-by-example/06-user-interface-controls/working-with-state.html",{loader:()=>r(()=>import("./working-with-state.html-CfcxVGNx.js"),__vite__mapDeps([921,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.31,words:92},y:"a",t:"Working with state"}}],["/swift/swiftui-by-example/07-responding-to-events/how-to-add-a-toolbar-to-the-keyboard.html",{loader:()=>r(()=>import("./how-to-add-a-toolbar-to-the-keyboard.html-B2jOUl41.js"),__vite__mapDeps([922,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.44,words:132},y:"a",t:"How to add a toolbar to the keyboard"}}],["/swift/swiftui-by-example/07-responding-to-events/how-to-add-an-appdelegate-to-a-swiftui-app.html",{loader:()=>r(()=>import("./how-to-add-an-appdelegate-to-a-swiftui-app.html-BPPiUshY.js"),__vite__mapDeps([923,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.47,words:140},y:"a",t:"How to add an AppDelegate to a SwiftUI app"}}],["/swift/swiftui-by-example/07-responding-to-events/how-to-add-keyboard-shortcuts-using-keyboardshortcut.html",{loader:()=>r(()=>import("./how-to-add-keyboard-shortcuts-using-keyboardshortcut.html-iBCiVI_b.js"),__vite__mapDeps([924,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.41,words:124},y:"a",t:"How to add keyboard shortcuts using keyboardShortcut()"}}],["/swift/swiftui-by-example/07-responding-to-events/how-to-control-which-view-is-shown-when-your-app-launches.html",{loader:()=>r(()=>import("./how-to-control-which-view-is-shown-when-your-app-launches.html-DKxJzEXX.js"),__vite__mapDeps([925,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.52,words:156},y:"a",t:"How to control which view is shown when your app launches"}}],["/swift/swiftui-by-example/07-responding-to-events/how-to-detect-device-rotation.html",{loader:()=>r(()=>import("./how-to-detect-device-rotation.html-CT4H1v1s.js"),__vite__mapDeps([926,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.36,words:108},y:"a",t:"How to detect device rotation"}}],["/swift/swiftui-by-example/07-responding-to-events/how-to-detect-when-your-app-moves-to-the-background-or-foreground-with-scenephase.html",{loader:()=>r(()=>import("./how-to-detect-when-your-app-moves-to-the-background-or-foreground-with-scenephase.html-DVfPqRAO.js"),__vite__mapDeps([927,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.6,words:180},y:"a",t:"How to detect when your app moves to the background or foreground with scenePhase"}}],["/swift/swiftui-by-example/07-responding-to-events/how-to-let-the-user-paste-data-into-your-app.html",{loader:()=>r(()=>import("./how-to-let-the-user-paste-data-into-your-app.html-Bn4q2xi3.js"),__vite__mapDeps([928,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.49,words:148},y:"a",t:"How to let the user paste data into your app"}}],["/swift/swiftui-by-example/07-responding-to-events/how-to-let-users-find-and-replace-text.html",{loader:()=>r(()=>import("./how-to-let-users-find-and-replace-text.html-x4Y0z-FV.js"),__vite__mapDeps([929,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.44,words:132},y:"a",t:"How to let users find and replace text"}}],["/swift/swiftui-by-example/07-responding-to-events/how-to-let-users-share-content-using-the-system-share-sheet.html",{loader:()=>r(()=>import("./how-to-let-users-share-content-using-the-system-share-sheet.html-DBnij5PD.js"),__vite__mapDeps([930,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.52,words:156},y:"a",t:"How to let users share content using the system share sheet"}}],["/swift/swiftui-by-example/07-responding-to-events/how-to-respond-to-view-lifecycle-events-onappear-and-ondisappear.html",{loader:()=>r(()=>import("./how-to-respond-to-view-lifecycle-events-onappear-and-ondisappear.html-CpbtLKOj.js"),__vite__mapDeps([931,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.49,words:148},y:"a",t:"How to respond to view lifecycle events - onAppear() and onDisappear()"}}],["/swift/swiftui-by-example/07-responding-to-events/how-to-run-an-asynchronous-task-when-a-view-is-shown.html",{loader:()=>r(()=>import("./how-to-run-an-asynchronous-task-when-a-view-is-shown.html-w_6WTU3S.js"),__vite__mapDeps([932,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.52,words:156},y:"a",t:"How to run an asynchronous task when a view is shown"}}],["/swift/swiftui-by-example/07-responding-to-events/how-to-run-code-when-your-app-launches.html",{loader:()=>r(()=>import("./how-to-run-code-when-your-app-launches.html-B72gOX6U.js"),__vite__mapDeps([933,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.44,words:132},y:"a",t:"How to run code when your app launches"}}],["/swift/swiftui-by-example/07-responding-to-events/how-to-support-drag-and-drop-in-swiftui.html",{loader:()=>r(()=>import("./how-to-support-drag-and-drop-in-swiftui.html-FiMht2Pw.js"),__vite__mapDeps([934,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.44,words:132},y:"a",t:"How to support drag and drop in SwiftUI"}}],["/swift/swiftui-by-example/08-taps-and-gestures/how-to-add-a-gesture-recognizer-to-a-view.md.html",{loader:()=>r(()=>import("./how-to-add-a-gesture-recognizer-to-a-view.md.html-DEMojceR.js"),__vite__mapDeps([935,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.47,words:140},y:"a",t:"How to add a gesture recognizer to a view"}}],["/swift/swiftui-by-example/08-taps-and-gestures/how-to-control-the-tappable-area-of-a-view-using-contentshape.html",{loader:()=>r(()=>import("./how-to-control-the-tappable-area-of-a-view-using-contentshape.html-bLBgR0gU.js"),__vite__mapDeps([936,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.52,words:156},y:"a",t:"How to control the tappable area of a view using contentShape()"}}],["/swift/swiftui-by-example/08-taps-and-gestures/how-to-create-gesture-chains-using-sequencedbefore.html",{loader:()=>r(()=>import("./how-to-create-gesture-chains-using-sequencedbefore.html-00DpN9Z1.js"),__vite__mapDeps([937,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.43,words:130},y:"a",t:"How to create gesture chains using sequenced(before)"}}],["/swift/swiftui-by-example/08-taps-and-gestures/how-to-detect-shake-gestures.html",{loader:()=>r(()=>import("./how-to-detect-shake-gestures.html-PbBQi-ZS.js"),__vite__mapDeps([938,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.36,words:108},y:"a",t:"How to detect shake gestures"}}],["/swift/swiftui-by-example/08-taps-and-gestures/how-to-detect-the-location-of-a-tap-inside-a-view.html",{loader:()=>r(()=>import("./how-to-detect-the-location-of-a-tap-inside-a-view.html-vJjXiFZ4.js"),__vite__mapDeps([939,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.52,words:156},y:"a",t:"How to detect the location of a tap inside a view"}}],["/swift/swiftui-by-example/08-taps-and-gestures/how-to-detect-the-user-hovering-over-a-view.html",{loader:()=>r(()=>import("./how-to-detect-the-user-hovering-over-a-view.html-dD9z7PT9.js"),__vite__mapDeps([940,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.47,words:140},y:"a",t:"How to detect the user hovering over a view"}}],["/swift/swiftui-by-example/08-taps-and-gestures/how-to-disable-taps-for-a-view-using-allowshittesting.html",{loader:()=>r(()=>import("./how-to-disable-taps-for-a-view-using-allowshittesting.html-DwTjViOf.js"),__vite__mapDeps([941,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.47,words:140},y:"a",t:"How to disable taps for a view using allowsHitTesting()"}}],["/swift/swiftui-by-example/08-taps-and-gestures/how-to-force-one-gesture-to-recognize-before-another-using-highprioritygesture.html",{loader:()=>r(()=>import("./how-to-force-one-gesture-to-recognize-before-another-using-highprioritygesture.html-jKSTvBsV.js"),__vite__mapDeps([942,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.52,words:156},y:"a",t:"How to force one gesture to recognize before another using highPriorityGesture()"}}],["/swift/swiftui-by-example/08-taps-and-gestures/how-to-make-two-gestures-recognize-at-the-same-time-using-simultaneousgesture.html",{loader:()=>r(()=>import("./how-to-make-two-gestures-recognize-at-the-same-time-using-simultaneousgesture.html-D_ANeSn_.js"),__vite__mapDeps([943,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.55,words:164},y:"a",t:"How to make two gestures recognize at the same time using simultaneousGesture()"}}],["/swift/swiftui-by-example/08-taps-and-gestures/how-to-read-tap-and-double-tap-gestures.html",{loader:()=>r(()=>import("./how-to-read-tap-and-double-tap-gestures.html-BubR7-bs.js"),__vite__mapDeps([944,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.44,words:132},y:"a",t:"How to read tap and double-tap gestures"}}],["/swift/swiftui-by-example/09-advanced-state/how-to-create-constant-bindings.html",{loader:()=>r(()=>import("./how-to-create-constant-bindings.html-BWIf-Uzz.js"),__vite__mapDeps([945,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.36,words:107},y:"a",t:"How to create constant bindings"}}],["/swift/swiftui-by-example/09-advanced-state/how-to-create-custom-bindings.html",{loader:()=>r(()=>import("./how-to-create-custom-bindings.html-DbCTTrVb.js"),__vite__mapDeps([946,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.36,words:107},y:"a",t:"How to create custom bindings"}}],["/swift/swiftui-by-example/09-advanced-state/how-to-run-some-code-when-state-changes-using-onchange.html",{loader:()=>r(()=>import("./how-to-run-some-code-when-state-changes-using-onchange.html-z72qrGd7.js"),__vite__mapDeps([947,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.49,words:147},y:"a",t:"How to run some code when state changes using onChange()"}}],["/swift/swiftui-by-example/09-advanced-state/how-to-send-state-updates-manually-using-objectwillchange.html",{loader:()=>r(()=>import("./how-to-send-state-updates-manually-using-objectwillchange.html-DGsEUBYF.js"),__vite__mapDeps([948,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.44,words:131},y:"a",t:"How to send state updates manually using objectWillChange"}}],["/swift/swiftui-by-example/09-advanced-state/how-to-show-different-images-and-other-views-in-light-or-dark-mode.html",{loader:()=>r(()=>import("./how-to-show-different-images-and-other-views-in-light-or-dark-mode.html-pbVVTCwV.js"),__vite__mapDeps([949,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.57,words:171},y:"a",t:"How to show different images and other views in light or dark mode"}}],["/swift/swiftui-by-example/09-advanced-state/how-to-use-a-timer-with-swiftui.html",{loader:()=>r(()=>import("./how-to-use-a-timer-with-swiftui.html-Cu228UDR.js"),__vite__mapDeps([950,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.41,words:123},y:"a",t:"How to use a timer with SwiftUI"}}],["/swift/swiftui-by-example/09-advanced-state/how-to-use-environmentobject-to-share-data-between-views.html",{loader:()=>r(()=>import("./how-to-use-environmentobject-to-share-data-between-views.html-CZ_6eKFG.js"),__vite__mapDeps([951,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.46,words:139},y:"a",t:"How to use @EnvironmentObject to share data between views"}}],["/swift/swiftui-by-example/09-advanced-state/how-to-use-observedobject-to-manage-state-from-external-objects.html",{loader:()=>r(()=>import("./how-to-use-observedobject-to-manage-state-from-external-objects.html-rDD53CnS.js"),__vite__mapDeps([952,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.49,words:147},y:"a",t:"How to use @ObservedObject to manage state from external objects"}}],["/swift/swiftui-by-example/09-advanced-state/how-to-use-stateobject-to-create-and-monitor-external-objects.html",{loader:()=>r(()=>import("./how-to-use-stateobject-to-create-and-monitor-external-objects.html-LwWN62oG.js"),__vite__mapDeps([953,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.49,words:147},y:"a",t:"How to use @StateObject to create and monitor external objects"}}],["/swift/swiftui-by-example/09-advanced-state/whats-the-difference-between-observedobject-state-and-environmentobject.html",{loader:()=>r(()=>import("./whats-the-difference-between-observedobject-state-and-environmentobject.html-C6wrYQiP.js"),__vite__mapDeps([954,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
`,r:{minutes:.46,words:137},y:"a",t:"What’s the difference between @ObservedObject, @State, and @EnvironmentObject?"}}],["/swift/swiftui-by-example/10-lists/10-lists.html",{loader:()=>r(()=>import("./10-lists.html-CABvYLSN.js"),__vite__mapDeps([955,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
<h2>Working with lists</h2>
<details class="hint-container details"><summary>Working with lists</summary>
</details>
<hr>
<h2>How to create a list of static items</h2>
<details class="hint-container details"><summary>How to create a list of static items</summary>
</details>
<hr>
<h2>How to create a list of dynamic items</h2>`,r:{minutes:4.52,words:1357},y:"a",t:"Lists"}}],["/swift/swiftui-by-example/11-forms/11-forms.html",{loader:()=>r(()=>import("./11-forms.html-1EyAV1SZ.js"),__vite__mapDeps([956,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
<h2>Working with forms</h2>
<details class="hint-container details"><summary>Working with forms</summary>
</details>
<hr>
<h2>Basic form design</h2>
<details class="hint-container details"><summary>Basic form design</summary>
</details>
<hr>
<h2>Breaking forms into sections</h2>
<details class="hint-container details"><summary>Breaking forms into sections</summary>
</details>`,r:{minutes:1.23,words:368},y:"a",t:"Forms"}}],["/swift/swiftui-by-example/12-containers/12-containers.html",{loader:()=>r(()=>import("./12-containers.html-WDqt-YS4.js"),__vite__mapDeps([957,1])),meta:{c:["Swift"],g:["crashcourse","paul-hudson","swift","swiftui","hacking-with-swift","xcode","appstore"],e:`

<hr>
<h2>Working with containers</h2>
<details class="hint-container details"><summary>Working with containers</summary>
</details>
<hr>
<h2>How to embed views in a tab bar using <code>TabView</code></h2>
<details class="hint-container details"><summary>How to embed views in a tab bar using TabView</summary>
</details>`,r:{minutes:2.71,words:813},y:"a",t:"Containers"}}],["/404.html",{loader:()=>r(()=>import("./404.html-C2fatFWi.js"),__vite__mapDeps([958,1])),meta:{y:"p",t:""}}],["/misc/",{loader:()=>r(()=>import("./index.html-FeG_kOnz.js"),__vite__mapDeps([959,1])),meta:{y:"p",t:"Misc"}}],["/cpp/algorithms-for-competitive-programming/01-algebra/",{loader:()=>r(()=>import("./index.html-CGf1pUsM.js"),__vite__mapDeps([960,1])),meta:{y:"p",t:"01 Algebra"}}],["/cpp/algorithms-for-competitive-programming/02-data-structures/",{loader:()=>r(()=>import("./index.html-D09cQoal.js"),__vite__mapDeps([961,1])),meta:{y:"p",t:"02 Data Structures"}}],["/cpp/algorithms-for-competitive-programming/03-dynamic-programming/",{loader:()=>r(()=>import("./index.html-zlS6Dth5.js"),__vite__mapDeps([962,1])),meta:{y:"p",t:"03 Dynamic Programming"}}],["/cpp/algorithms-for-competitive-programming/04-string-processing/",{loader:()=>r(()=>import("./index.html-BUdqB6OD.js"),__vite__mapDeps([963,1])),meta:{y:"p",t:"04 String Processing"}}],["/cpp/algorithms-for-competitive-programming/05-linear-algebra/",{loader:()=>r(()=>import("./index.html-rjHddlF4.js"),__vite__mapDeps([964,1])),meta:{y:"p",t:"05 Linear Algebra"}}],["/cpp/algorithms-for-competitive-programming/06-combinatorics/",{loader:()=>r(()=>import("./index.html-3TpAG358.js"),__vite__mapDeps([965,1])),meta:{y:"p",t:"06 Combinatorics"}}],["/cpp/algorithms-for-competitive-programming/07-numerical-methods/",{loader:()=>r(()=>import("./index.html-DmFur3Uw.js"),__vite__mapDeps([966,1])),meta:{y:"p",t:"07 Numerical Methods"}}],["/cpp/algorithms-for-competitive-programming/08-geometry/",{loader:()=>r(()=>import("./index.html-CTWJ6vnM.js"),__vite__mapDeps([967,1])),meta:{y:"p",t:"08 Geometry"}}],["/cpp/algorithms-for-competitive-programming/09-graphs/",{loader:()=>r(()=>import("./index.html-CkA1KCkB.js"),__vite__mapDeps([968,1])),meta:{y:"p",t:"09 Graphs"}}],["/cpp/algorithms-for-competitive-programming/10-misc/",{loader:()=>r(()=>import("./index.html-CiRxvxG_.js"),__vite__mapDeps([969,1])),meta:{y:"p",t:"10 Misc"}}],["/devops/digitalocean-kubernetes/2022/",{loader:()=>r(()=>import("./index.html-BMLkiadA.js"),__vite__mapDeps([970,1])),meta:{y:"p",t:"2022"}}],["/devops/linux-journey/01-grasshopper/",{loader:()=>r(()=>import("./index.html-C37OHPqb.js"),__vite__mapDeps([971,1])),meta:{y:"p",t:"01 Grasshopper"}}],["/devops/linux-journey/02-journeyman/",{loader:()=>r(()=>import("./index.html-GwaqkL2H.js"),__vite__mapDeps([972,1])),meta:{y:"p",t:"02 Journeyman"}}],["/devops/linux-journey/03-networking-nomad/",{loader:()=>r(()=>import("./index.html-By5jBpr1.js"),__vite__mapDeps([973,1])),meta:{y:"p",t:"03 Networking Nomad"}}],["/js/learn-ts/advanced/",{loader:()=>r(()=>import("./index.html-klC6t_CQ.js"),__vite__mapDeps([974,1])),meta:{y:"p",t:"Advanced"}}],["/php/three-min-summary/01-basics/",{loader:()=>r(()=>import("./index.html-CNEHkXEZ.js"),__vite__mapDeps([975,1])),meta:{y:"p",t:"01 Basics"}}],["/php/three-min-summary/02-web/",{loader:()=>r(()=>import("./index.html-zvslILlJ.js"),__vite__mapDeps([976,1])),meta:{y:"p",t:"02 Web"}}],["/php/three-min-summary/03-database/",{loader:()=>r(()=>import("./index.html-DoTzf2L4.js"),__vite__mapDeps([977,1])),meta:{y:"p",t:"03 Database"}}],["/php/three-min-summary/04-string/",{loader:()=>r(()=>import("./index.html-YnnudL_H.js"),__vite__mapDeps([978,1])),meta:{y:"p",t:"04 String"}}],["/php/three-min-summary/05-validation/",{loader:()=>r(()=>import("./index.html-BHqwo6t_.js"),__vite__mapDeps([979,1])),meta:{y:"p",t:"05 Validation"}}],["/php/three-min-summary/06-modern-php/",{loader:()=>r(()=>import("./index.html-CijrV6au.js"),__vite__mapDeps([980,1])),meta:{y:"p",t:"06 Modern Php"}}],["/php/three-min-summary/07-miniproject/",{loader:()=>r(()=>import("./index.html-DJn4rkw0.js"),__vite__mapDeps([981,1])),meta:{y:"p",t:"07 Miniproject"}}],["/swift/swiftui-by-example/00-introduction/",{loader:()=>r(()=>import("./index.html-TavN0N4g.js"),__vite__mapDeps([982,1])),meta:{y:"p",t:"00 Introduction"}}],["/swift/swiftui-by-example/01-building-a-complete-project/",{loader:()=>r(()=>import("./index.html-Dv7bdFdV.js"),__vite__mapDeps([983,1])),meta:{y:"p",t:"01 Building A Complete Project"}}],["/swift/swiftui-by-example/02-working-with-static-text/",{loader:()=>r(()=>import("./index.html--sFGEVy5.js"),__vite__mapDeps([984,1])),meta:{y:"p",t:"02 Working with Static Text"}}],["/swift/swiftui-by-example/03-images-shapes-and-media/",{loader:()=>r(()=>import("./index.html-_QanrE_d.js"),__vite__mapDeps([985,1])),meta:{y:"p",t:"03 Images Shapes and Media"}}],["/swift/swiftui-by-example/04-view-layout/",{loader:()=>r(()=>import("./index.html-D14IIe4D.js"),__vite__mapDeps([986,1])),meta:{y:"p",t:"04 View Layout"}}],["/swift/swiftui-by-example/05-stacks-grids-scrollviews/",{loader:()=>r(()=>import("./index.html-Cy0JgDbO.js"),__vite__mapDeps([987,1])),meta:{y:"p",t:"05 Stacks Grids Scrollviews"}}],["/swift/swiftui-by-example/06-user-interface-controls/",{loader:()=>r(()=>import("./index.html-DILaFZZq.js"),__vite__mapDeps([988,1])),meta:{y:"p",t:"06 User Interface Controls"}}],["/swift/swiftui-by-example/07-responding-to-events/",{loader:()=>r(()=>import("./index.html-mDtVaKdp.js"),__vite__mapDeps([989,1])),meta:{y:"p",t:"07 Responding to Events"}}],["/swift/swiftui-by-example/08-taps-and-gestures/",{loader:()=>r(()=>import("./index.html-C0dGdHrC.js"),__vite__mapDeps([990,1])),meta:{y:"p",t:"08 Taps and Gestures"}}],["/swift/swiftui-by-example/09-advanced-state/",{loader:()=>r(()=>import("./index.html-DPlFriV6.js"),__vite__mapDeps([991,1])),meta:{y:"p",t:"09 Advanced State"}}],["/swift/swiftui-by-example/10-lists/",{loader:()=>r(()=>import("./index.html-DMGLtZ3U.js"),__vite__mapDeps([992,1])),meta:{y:"p",t:"10 Lists"}}],["/swift/swiftui-by-example/11-forms/",{loader:()=>r(()=>import("./index.html-BGGgrdBI.js"),__vite__mapDeps([993,1])),meta:{y:"p",t:"11 Forms"}}],["/swift/swiftui-by-example/12-containers/",{loader:()=>r(()=>import("./index.html-CDUh7H21.js"),__vite__mapDeps([994,1])),meta:{y:"p",t:"12 Containers"}}],["/category/",{loader:()=>r(()=>import("./index.html-wA0ooXgu.js"),__vite__mapDeps([995,1])),meta:{y:"p",t:"Category",I:!1}}],["/category/cli/",{loader:()=>r(()=>import("./index.html-B9cjdnLZ.js"),__vite__mapDeps([996,1])),meta:{y:"p",t:"CLI Category",I:!1}}],["/category/cpp/",{loader:()=>r(()=>import("./index.html-B7cnHXZC.js"),__vite__mapDeps([997,1])),meta:{y:"p",t:"cpp Category",I:!1}}],["/category/devops/",{loader:()=>r(()=>import("./index.html-DYdbO1U1.js"),__vite__mapDeps([998,1])),meta:{y:"p",t:"DevOps Category",I:!1}}],["/category/gitlab/",{loader:()=>r(()=>import("./index.html-CCRFx-1x.js"),__vite__mapDeps([999,1])),meta:{y:"p",t:"Gitlab Category",I:!1}}],["/category/kubernetes/",{loader:()=>r(()=>import("./index.html-DrxrR2KZ.js"),__vite__mapDeps([1000,1])),meta:{y:"p",t:"Kubernetes Category",I:!1}}],["/category/linux/",{loader:()=>r(()=>import("./index.html-C6q8VItM.js"),__vite__mapDeps([1001,1])),meta:{y:"p",t:"Linux Category",I:!1}}],["/category/redhat/",{loader:()=>r(()=>import("./index.html-BQ-sO0HF.js"),__vite__mapDeps([1002,1])),meta:{y:"p",t:"RedHat Category",I:!1}}],["/category/aws/",{loader:()=>r(()=>import("./index.html-C2zcq86o.js"),__vite__mapDeps([1003,1])),meta:{y:"p",t:"AWS Category",I:!1}}],["/category/haskell/",{loader:()=>r(()=>import("./index.html-DMGShEqx.js"),__vite__mapDeps([1004,1])),meta:{y:"p",t:"Haskell Category",I:!1}}],["/category/java/",{loader:()=>r(()=>import("./index.html-CT9Qb_2y.js"),__vite__mapDeps([1005,1])),meta:{y:"p",t:"Java Category",I:!1}}],["/category/kotlin/",{loader:()=>r(()=>import("./index.html-Dsk0MWnt.js"),__vite__mapDeps([1006,1])),meta:{y:"p",t:"Kotlin Category",I:!1}}],["/category/spring/",{loader:()=>r(()=>import("./index.html-D0bLie-1.js"),__vite__mapDeps([1007,1])),meta:{y:"p",t:"Spring Category",I:!1}}],["/category/gradle/",{loader:()=>r(()=>import("./index.html-BsuF6A6x.js"),__vite__mapDeps([1008,1])),meta:{y:"p",t:"Gradle Category",I:!1}}],["/category/android/",{loader:()=>r(()=>import("./index.html-CFhvGPE8.js"),__vite__mapDeps([1009,1])),meta:{y:"p",t:"Android Category",I:!1}}],["/category/python/",{loader:()=>r(()=>import("./index.html-Be3WT7FZ.js"),__vite__mapDeps([1010,1])),meta:{y:"p",t:"Python Category",I:!1}}],["/category/ruby/",{loader:()=>r(()=>import("./index.html-C9YH3OTi.js"),__vite__mapDeps([1011,1])),meta:{y:"p",t:"Ruby Category",I:!1}}],["/category/rust/",{loader:()=>r(()=>import("./index.html-DaXgWK1C.js"),__vite__mapDeps([1012,1])),meta:{y:"p",t:"Rust Category",I:!1}}],["/category/swift/",{loader:()=>r(()=>import("./index.html-BLWDkI0g.js"),__vite__mapDeps([1013,1])),meta:{y:"p",t:"Swift Category",I:!1}}],["/category/objective-c/",{loader:()=>r(()=>import("./index.html-Cbu9J9v4.js"),__vite__mapDeps([1014,1])),meta:{y:"p",t:"Objective-C Category",I:!1}}],["/category/cpp/",{loader:()=>r(()=>import("./index.html-B7cnHXZC.js"),__vite__mapDeps([997,1])),meta:{y:"p",t:"Cpp Category",I:!1}}],["/category/gpu/",{loader:()=>r(()=>import("./index.html-HG0dWfHb.js"),__vite__mapDeps([1015,1])),meta:{y:"p",t:"GPU Category",I:!1}}],["/category/cuda/",{loader:()=>r(()=>import("./index.html-CumryISd.js"),__vite__mapDeps([1016,1])),meta:{y:"p",t:"CUDA Category",I:!1}}],["/category/security/",{loader:()=>r(()=>import("./index.html-CPjhLiOm.js"),__vite__mapDeps([1017,1])),meta:{y:"p",t:"Security Category",I:!1}}],["/category/os/",{loader:()=>r(()=>import("./index.html-C-ItrEcM.js"),__vite__mapDeps([1018,1])),meta:{y:"p",t:"OS Category",I:!1}}],["/category/mobile/",{loader:()=>r(()=>import("./index.html-BrV6YX_Z.js"),__vite__mapDeps([1019,1])),meta:{y:"p",t:"Mobile Category",I:!1}}],["/category/git/",{loader:()=>r(()=>import("./index.html-CCiBPNoA.js"),__vite__mapDeps([1020,1])),meta:{y:"p",t:"Git Category",I:!1}}],["/category/ansible/",{loader:()=>r(()=>import("./index.html-CgfcjpaY.js"),__vite__mapDeps([1021,1])),meta:{y:"p",t:"Ansible Category",I:!1}}],["/category/%F0%9F%90%91haskell/",{loader:()=>r(()=>import("./index.html--aDh66SH.js"),__vite__mapDeps([1022,1])),meta:{y:"p",t:"🐑Haskell Category",I:!1}}],["/category/javafx/",{loader:()=>r(()=>import("./index.html-CbQOSZd3.js"),__vite__mapDeps([1023,1])),meta:{y:"p",t:"JavaFX Category",I:!1}}],["/category/quarkus/",{loader:()=>r(()=>import("./index.html-xYTI02LE.js"),__vite__mapDeps([1024,1])),meta:{y:"p",t:"Quarkus Category",I:!1}}],["/category/%E2%98%95%EF%B8%8Fjava/",{loader:()=>r(()=>import("./index.html-BOqtXB5o.js"),__vite__mapDeps([1025,1])),meta:{y:"p",t:"☕️Java Category",I:!1}}],["/category/%F0%9F%8D%83spring/",{loader:()=>r(()=>import("./index.html-CG8rpHB7.js"),__vite__mapDeps([1026,1])),meta:{y:"p",t:"🍃Spring Category",I:!1}}],["/category/%F0%9F%93%A6aws/",{loader:()=>r(()=>import("./index.html-Ck1J7tXT.js"),__vite__mapDeps([1027,1])),meta:{y:"p",t:"📦AWS Category",I:!1}}],["/category/spring-boot/",{loader:()=>r(()=>import("./index.html-CRy5np1T.js"),__vite__mapDeps([1028,1])),meta:{y:"p",t:"Spring Boot Category",I:!1}}],["/category/intellij-idea/",{loader:()=>r(()=>import("./index.html-DQLAPt7u.js"),__vite__mapDeps([1029,1])),meta:{y:"p",t:"Intellij Idea Category",I:!1}}],["/category/algorithms/",{loader:()=>r(()=>import("./index.html-BxTEnGY2.js"),__vite__mapDeps([1030,1])),meta:{y:"p",t:"Algorithms Category",I:!1}}],["/category/ide/",{loader:()=>r(()=>import("./index.html-DMtX3R1z.js"),__vite__mapDeps([1031,1])),meta:{y:"p",t:"IDE Category",I:!1}}],["/category/code-style/",{loader:()=>r(()=>import("./index.html-1eBeCLqA.js"),__vite__mapDeps([1032,1])),meta:{y:"p",t:"Code Style Category",I:!1}}],["/category/visual-studio-code/",{loader:()=>r(()=>import("./index.html-C7a9aaHA.js"),__vite__mapDeps([1033,1])),meta:{y:"p",t:"Visual Studio Code Category",I:!1}}],["/category/jdk/",{loader:()=>r(()=>import("./index.html-BaqIMMCq.js"),__vite__mapDeps([1034,1])),meta:{y:"p",t:"JDK Category",I:!1}}],["/category/javascript/",{loader:()=>r(()=>import("./index.html-SvzqocGv.js"),__vite__mapDeps([1035,1])),meta:{y:"p",t:"JavaScript Category",I:!1}}],["/category/typescript/",{loader:()=>r(()=>import("./index.html-QclCe5N9.js"),__vite__mapDeps([1036,1])),meta:{y:"p",t:"TypeScript Category",I:!1}}],["/category/react/",{loader:()=>r(()=>import("./index.html-BU43jHAz.js"),__vite__mapDeps([1037,1])),meta:{y:"p",t:"React Category",I:!1}}],["/category/vue/",{loader:()=>r(()=>import("./index.html-CSIWdPQC.js"),__vite__mapDeps([1038,1])),meta:{y:"p",t:"Vue Category",I:!1}}],["/category/next.js/",{loader:()=>r(()=>import("./index.html-wXZIhQi4.js"),__vite__mapDeps([1039,1])),meta:{y:"p",t:"Next.js Category",I:!1}}],["/category/css/",{loader:()=>r(()=>import("./index.html-DeVZMlSE.js"),__vite__mapDeps([1040,1])),meta:{y:"p",t:"CSS Category",I:!1}}],["/category/llm/",{loader:()=>r(()=>import("./index.html-ClSiaRQ7.js"),__vite__mapDeps([1041,1])),meta:{y:"p",t:"LLM Category",I:!1}}],["/category/%F0%9F%99%86%E2%80%8D%E2%99%82%EF%B8%8Foracle-db/",{loader:()=>r(()=>import("./index.html-CLLMM4Zq.js"),__vite__mapDeps([1042,1])),meta:{y:"p",t:"🙆‍♂️Oracle DB Category",I:!1}}],["/category/oracle-db/",{loader:()=>r(()=>import("./index.html-BZpMC_RP.js"),__vite__mapDeps([1043,1])),meta:{y:"p",t:"Oracle DB Category",I:!1}}],["/category/php/",{loader:()=>r(()=>import("./index.html-CeebZYdC.js"),__vite__mapDeps([1044,1])),meta:{y:"p",t:"PHP Category",I:!1}}],["/category/mysql/",{loader:()=>r(()=>import("./index.html-BEyEufN6.js"),__vite__mapDeps([1045,1])),meta:{y:"p",t:"MySQL Category",I:!1}}],["/category/%F0%9F%94%BBruby/",{loader:()=>r(()=>import("./index.html-DXvzQzzi.js"),__vite__mapDeps([1046,1])),meta:{y:"p",t:"🔻Ruby Category",I:!1}}],["/category/%F0%9F%8F%9Bobjective-c/",{loader:()=>r(()=>import("./index.html-CNrZRuP_.js"),__vite__mapDeps([1047,1])),meta:{y:"p",t:"🏛Objective-C Category",I:!1}}],["/tag/",{loader:()=>r(()=>import("./index.html-B97Zgoc7.js"),__vite__mapDeps([1048,1])),meta:{y:"p",t:"Tag",I:!1}}],["/tag/crashcourse/",{loader:()=>r(()=>import("./index.html-D2cYhI3a.js"),__vite__mapDeps([1049,1])),meta:{y:"p",t:"Tag: crashcourse",I:!1}}],["/tag/cli/",{loader:()=>r(()=>import("./index.html-BPuYXMd3.js"),__vite__mapDeps([1050,1])),meta:{y:"p",t:"Tag: cli",I:!1}}],["/tag/sh/",{loader:()=>r(()=>import("./index.html-OlzJmAC3.js"),__vite__mapDeps([1051,1])),meta:{y:"p",t:"Tag: sh",I:!1}}],["/tag/shell/",{loader:()=>r(()=>import("./index.html-CDrxDNfV.js"),__vite__mapDeps([1052,1])),meta:{y:"p",t:"Tag: shell",I:!1}}],["/tag/gnu/",{loader:()=>r(()=>import("./index.html-BSUqY0Zh.js"),__vite__mapDeps([1053,1])),meta:{y:"p",t:"Tag: gnu",I:!1}}],["/tag/linux/",{loader:()=>r(()=>import("./index.html-ClzPlBgN.js"),__vite__mapDeps([1054,1])),meta:{y:"p",t:"Tag: linux",I:!1}}],["/tag/awk/",{loader:()=>r(()=>import("./index.html-BBUnGuXZ.js"),__vite__mapDeps([1055,1])),meta:{y:"p",t:"Tag: awk",I:!1}}],["/tag/c/",{loader:()=>r(()=>import("./index.html-ZX6vQZNY.js"),__vite__mapDeps([1056,1])),meta:{y:"p",t:"Tag: c",I:!1}}],["/tag/cpp/",{loader:()=>r(()=>import("./index.html-hIQAYqld.js"),__vite__mapDeps([1057,1])),meta:{y:"p",t:"Tag: cpp",I:!1}}],["/tag/c-plus-plus/",{loader:()=>r(()=>import("./index.html-CesyxSnj.js"),__vite__mapDeps([1058,1])),meta:{y:"p",t:"Tag: c-plus-plus",I:!1}}],["/tag/algorithm/",{loader:()=>r(()=>import("./index.html-DQgjIcTL.js"),__vite__mapDeps([1059,1])),meta:{y:"p",t:"Tag: algorithm",I:!1}}],["/tag/aws/",{loader:()=>r(()=>import("./index.html-Xis63Mds.js"),__vite__mapDeps([1060,1])),meta:{y:"p",t:"Tag: aws",I:!1}}],["/tag/amazon-web-service/",{loader:()=>r(()=>import("./index.html-CPK9MXSY.js"),__vite__mapDeps([1061,1])),meta:{y:"p",t:"Tag: amazon-web-service",I:!1}}],["/tag/amazon/",{loader:()=>r(()=>import("./index.html-DFyJ2ZYF.js"),__vite__mapDeps([1062,1])),meta:{y:"p",t:"Tag: amazon",I:!1}}],["/tag/git/",{loader:()=>r(()=>import("./index.html-CZPVDg0Y.js"),__vite__mapDeps([1063,1])),meta:{y:"p",t:"Tag: git",I:!1}}],["/tag/gitlab/",{loader:()=>r(()=>import("./index.html-B7wbutqk.js"),__vite__mapDeps([1064,1])),meta:{y:"p",t:"Tag: gitlab",I:!1}}],["/tag/kubernetes/",{loader:()=>r(()=>import("./index.html-CN5a3EQz.js"),__vite__mapDeps([1065,1])),meta:{y:"p",t:"Tag: kubernetes",I:!1}}],["/tag/redhat/",{loader:()=>r(()=>import("./index.html-CCbfyDzJ.js"),__vite__mapDeps([1066,1])),meta:{y:"p",t:"Tag: redhat",I:!1}}],["/tag/haskell/",{loader:()=>r(()=>import("./index.html-DWVD-KiN.js"),__vite__mapDeps([1067,1])),meta:{y:"p",t:"Tag: haskell",I:!1}}],["/tag/parsec/",{loader:()=>r(()=>import("./index.html-DarOfBQM.js"),__vite__mapDeps([1068,1])),meta:{y:"p",t:"Tag: parsec",I:!1}}],["/tag/attoparsec/",{loader:()=>r(()=>import("./index.html-dD1bCHak.js"),__vite__mapDeps([1069,1])),meta:{y:"p",t:"Tag: attoparsec",I:!1}}],["/tag/trifecta/",{loader:()=>r(()=>import("./index.html-36X0Gf13.js"),__vite__mapDeps([1070,1])),meta:{y:"p",t:"Tag: trifecta",I:!1}}],["/tag/java/",{loader:()=>r(()=>import("./index.html-PfvUpqPw.js"),__vite__mapDeps([1071,1])),meta:{y:"p",t:"Tag: java",I:!1}}],["/tag/kotiln/",{loader:()=>r(()=>import("./index.html-CiUhRwyF.js"),__vite__mapDeps([1072,1])),meta:{y:"p",t:"Tag: kotiln",I:!1}}],["/tag/android/",{loader:()=>r(()=>import("./index.html-BXNlmxHJ.js"),__vite__mapDeps([1073,1])),meta:{y:"p",t:"Tag: android",I:!1}}],["/tag/gradle/",{loader:()=>r(()=>import("./index.html-DCHCYv4r.js"),__vite__mapDeps([1074,1])),meta:{y:"p",t:"Tag: gradle",I:!1}}],["/tag/javascript/",{loader:()=>r(()=>import("./index.html-TFGJEJkT.js"),__vite__mapDeps([1075,1])),meta:{y:"p",t:"Tag: javascript",I:!1}}],["/tag/js/",{loader:()=>r(()=>import("./index.html-CimCM59l.js"),__vite__mapDeps([1076,1])),meta:{y:"p",t:"Tag: js",I:!1}}],["/tag/typescript/",{loader:()=>r(()=>import("./index.html-DICQXdK1.js"),__vite__mapDeps([1077,1])),meta:{y:"p",t:"Tag: typescript",I:!1}}],["/tag/ts/",{loader:()=>r(()=>import("./index.html-DEmrfy7t.js"),__vite__mapDeps([1078,1])),meta:{y:"p",t:"Tag: ts",I:!1}}],["/tag/php/",{loader:()=>r(()=>import("./index.html-D8oiLt8J.js"),__vite__mapDeps([1079,1])),meta:{y:"p",t:"Tag: php",I:!1}}],["/tag/laravel/",{loader:()=>r(()=>import("./index.html-w32Q864_.js"),__vite__mapDeps([1080,1])),meta:{y:"p",t:"Tag: laravel",I:!1}}],["/tag/python/",{loader:()=>r(()=>import("./index.html-DfIaYeIn.js"),__vite__mapDeps([1081,1])),meta:{y:"p",t:"Tag: python",I:!1}}],["/tag/py/",{loader:()=>r(()=>import("./index.html-rpmJtY7O.js"),__vite__mapDeps([1082,1])),meta:{y:"p",t:"Tag: py",I:!1}}],["/tag/openpyxl/",{loader:()=>r(()=>import("./index.html-oYoYe9Xs.js"),__vite__mapDeps([1083,1])),meta:{y:"p",t:"Tag: OpenPyxl",I:!1}}],["/tag/pywin32/",{loader:()=>r(()=>import("./index.html-pai_MM9h.js"),__vite__mapDeps([1084,1])),meta:{y:"p",t:"Tag: pywin32",I:!1}}],["/tag/xlwings/",{loader:()=>r(()=>import("./index.html-DhmOtsyb.js"),__vite__mapDeps([1085,1])),meta:{y:"p",t:"Tag: xlwings",I:!1}}],["/tag/python-docx/",{loader:()=>r(()=>import("./index.html-jx5nUzHP.js"),__vite__mapDeps([1086,1])),meta:{y:"p",t:"Tag: python-docx",I:!1}}],["/tag/excel/",{loader:()=>r(()=>import("./index.html-BkAXS_kx.js"),__vite__mapDeps([1087,1])),meta:{y:"p",t:"Tag: excel",I:!1}}],["/tag/ruby/",{loader:()=>r(()=>import("./index.html-BqJqH3lT.js"),__vite__mapDeps([1088,1])),meta:{y:"p",t:"Tag: ruby",I:!1}}],["/tag/rb/",{loader:()=>r(()=>import("./index.html-BE2coCC4.js"),__vite__mapDeps([1089,1])),meta:{y:"p",t:"Tag: rb",I:!1}}],["/tag/rust/",{loader:()=>r(()=>import("./index.html-CyC9K76O.js"),__vite__mapDeps([1090,1])),meta:{y:"p",t:"Tag: rust",I:!1}}],["/tag/rs/",{loader:()=>r(()=>import("./index.html-CC_JLfli.js"),__vite__mapDeps([1091,1])),meta:{y:"p",t:"Tag: rs",I:!1}}],["/tag/swift/",{loader:()=>r(()=>import("./index.html-DxbYaoQT.js"),__vite__mapDeps([1092,1])),meta:{y:"p",t:"Tag: swift",I:!1}}],["/tag/objc/",{loader:()=>r(()=>import("./index.html-BOvhiCZa.js"),__vite__mapDeps([1093,1])),meta:{y:"p",t:"Tag: objc",I:!1}}],["/tag/objective-c/",{loader:()=>r(()=>import("./index.html-BJVnZvd_.js"),__vite__mapDeps([1094,1])),meta:{y:"p",t:"Tag: objective-c",I:!1}}],["/tag/cocoapods/",{loader:()=>r(()=>import("./index.html-JBftlFab.js"),__vite__mapDeps([1095,1])),meta:{y:"p",t:"Tag: cocoapods",I:!1}}],["/tag/accelerated-computing/",{loader:()=>r(()=>import("./index.html-Bo6hImpr.js"),__vite__mapDeps([1096,1])),meta:{y:"p",t:"Tag: accelerated-computing",I:!1}}],["/tag/security/",{loader:()=>r(()=>import("./index.html-Bw2XxxGI.js"),__vite__mapDeps([1097,1])),meta:{y:"p",t:"Tag: security",I:!1}}],["/tag/github/",{loader:()=>r(()=>import("./index.html-D1iM264z.js"),__vite__mapDeps([1098,1])),meta:{y:"p",t:"Tag: github",I:!1}}],["/tag/pyrasis/",{loader:()=>r(()=>import("./index.html-D3rkK7zH.js"),__vite__mapDeps([1099,1])),meta:{y:"p",t:"Tag: pyrasis",I:!1}}],["/tag/amazon-web-services/",{loader:()=>r(()=>import("./index.html-Ce6QhC9y.js"),__vite__mapDeps([1100,1])),meta:{y:"p",t:"Tag: amazon-web-services",I:!1}}],["/tag/digitalocean/",{loader:()=>r(()=>import("./index.html-DoCab9_m.js"),__vite__mapDeps([1101,1])),meta:{y:"p",t:"Tag: digitalocean",I:!1}}],["/tag/kubctl/",{loader:()=>r(()=>import("./index.html-DA4FROSN.js"),__vite__mapDeps([1102,1])),meta:{y:"p",t:"Tag: kubctl",I:!1}}],["/tag/youtube/",{loader:()=>r(()=>import("./index.html-Aox0Iz3D.js"),__vite__mapDeps([1103,1])),meta:{y:"p",t:"Tag: youtube",I:!1}}],["/tag/freecodecamp/",{loader:()=>r(()=>import("./index.html-Co_tvmmk.js"),__vite__mapDeps([1104,1])),meta:{y:"p",t:"Tag: freecodecamp",I:!1}}],["/tag/vdespa/",{loader:()=>r(()=>import("./index.html-B5UYaoil.js"),__vite__mapDeps([1105,1])),meta:{y:"p",t:"Tag: vdespa",I:!1}}],["/tag/yaml/",{loader:()=>r(()=>import("./index.html-GGg6i6AA.js"),__vite__mapDeps([1106,1])),meta:{y:"p",t:"Tag: yaml",I:!1}}],["/tag/ci/",{loader:()=>r(()=>import("./index.html-BENjuB06.js"),__vite__mapDeps([1107,1])),meta:{y:"p",t:"Tag: ci",I:!1}}],["/tag/cd/",{loader:()=>r(()=>import("./index.html-yR238lNJ.js"),__vite__mapDeps([1108,1])),meta:{y:"p",t:"Tag: cd",I:!1}}],["/tag/cicd/",{loader:()=>r(()=>import("./index.html-Nno4s6gJ.js"),__vite__mapDeps([1109,1])),meta:{y:"p",t:"Tag: cicd",I:!1}}],["/tag/os/",{loader:()=>r(()=>import("./index.html-Ba5x70vc.js"),__vite__mapDeps([1110,1])),meta:{y:"p",t:"Tag: os",I:!1}}],["/tag/aviation/",{loader:()=>r(()=>import("./index.html-B3IOFCho.js"),__vite__mapDeps([1111,1])),meta:{y:"p",t:"Tag: aviation",I:!1}}],["/tag/networking/",{loader:()=>r(()=>import("./index.html-D7PHd0Ap.js"),__vite__mapDeps([1112,1])),meta:{y:"p",t:"Tag: networking",I:!1}}],["/tag/buildah/",{loader:()=>r(()=>import("./index.html-B5ouTfbK.js"),__vite__mapDeps([1113,1])),meta:{y:"p",t:"Tag: buildah",I:!1}}],["/tag/podman/",{loader:()=>r(()=>import("./index.html-pbhhviq9.js"),__vite__mapDeps([1114,1])),meta:{y:"p",t:"Tag: podman",I:!1}}],["/tag/skopeo/",{loader:()=>r(()=>import("./index.html-CR_LSW1W.js"),__vite__mapDeps([1115,1])),meta:{y:"p",t:"Tag: skopeo",I:!1}}],["/tag/sesearch/",{loader:()=>r(()=>import("./index.html-qw8fhzno.js"),__vite__mapDeps([1116,1])),meta:{y:"p",t:"Tag: sesearch",I:!1}}],["/tag/semodule/",{loader:()=>r(()=>import("./index.html-BQRVbiN-.js"),__vite__mapDeps([1117,1])),meta:{y:"p",t:"Tag: semodule",I:!1}}],["/tag/blog/",{loader:()=>r(()=>import("./index.html-BLXBf-sJ.js"),__vite__mapDeps([1118,1])),meta:{y:"p",t:"Tag: blog",I:!1}}],["/tag/mobile/",{loader:()=>r(()=>import("./index.html-WGCy5RnI.js"),__vite__mapDeps([1119,1])),meta:{y:"p",t:"Tag: mobile",I:!1}}],["/tag/ansible/",{loader:()=>r(()=>import("./index.html-BDBumb8_.js"),__vite__mapDeps([1120,1])),meta:{y:"p",t:"Tag: ansible",I:!1}}],["/tag/jdk/",{loader:()=>r(()=>import("./index.html-D354V8sI.js"),__vite__mapDeps([1121,1])),meta:{y:"p",t:"Tag: jdk",I:!1}}],["/tag/jdk8/",{loader:()=>r(()=>import("./index.html-FESV0RkD.js"),__vite__mapDeps([1122,1])),meta:{y:"p",t:"Tag: jdk8",I:!1}}],["/tag/stream/",{loader:()=>r(()=>import("./index.html-dJd0QbUM.js"),__vite__mapDeps([1123,1])),meta:{y:"p",t:"Tag: stream",I:!1}}],["/tag/quarkus/",{loader:()=>r(()=>import("./index.html-CLWNK29t.js"),__vite__mapDeps([1124,1])),meta:{y:"p",t:"Tag: quarkus",I:!1}}],["/tag/jpa/",{loader:()=>r(()=>import("./index.html-y7lFS8sf.js"),__vite__mapDeps([1125,1])),meta:{y:"p",t:"Tag: jpa",I:!1}}],["/tag/jpastreamer/",{loader:()=>r(()=>import("./index.html-D4e-8fB6.js"),__vite__mapDeps([1126,1])),meta:{y:"p",t:"Tag: jpastreamer",I:!1}}],["/tag/spring/",{loader:()=>r(()=>import("./index.html-D6T7V8wj.js"),__vite__mapDeps([1127,1])),meta:{y:"p",t:"Tag: spring",I:!1}}],["/tag/springframework/",{loader:()=>r(()=>import("./index.html-CPMfXDei.js"),__vite__mapDeps([1128,1])),meta:{y:"p",t:"Tag: springframework",I:!1}}],["/tag/springboot/",{loader:()=>r(()=>import("./index.html-Dv6s9FWX.js"),__vite__mapDeps([1129,1])),meta:{y:"p",t:"Tag: springboot",I:!1}}],["/tag/aws-ec2/",{loader:()=>r(()=>import("./index.html-Do9TSUFn.js"),__vite__mapDeps([1130,1])),meta:{y:"p",t:"Tag: aws-ec2",I:!1}}],["/tag/kodeco/",{loader:()=>r(()=>import("./index.html--LSorIq4.js"),__vite__mapDeps([1131,1])),meta:{y:"p",t:"Tag: kodeco",I:!1}}],["/tag/react/",{loader:()=>r(()=>import("./index.html-B7yY2aHN.js"),__vite__mapDeps([1132,1])),meta:{y:"p",t:"Tag: react",I:!1}}],["/tag/react-native/",{loader:()=>r(()=>import("./index.html-LigH_jHO.js"),__vite__mapDeps([1133,1])),meta:{y:"p",t:"Tag: react-native",I:!1}}],["/tag/kotlin/",{loader:()=>r(()=>import("./index.html-PY0xHU8a.js"),__vite__mapDeps([1134,1])),meta:{y:"p",t:"Tag: kotlin",I:!1}}],["/tag/jetbrains/",{loader:()=>r(()=>import("./index.html-DfpLged-.js"),__vite__mapDeps([1135,1])),meta:{y:"p",t:"Tag: jetbrains",I:!1}}],["/tag/intellij-idea/",{loader:()=>r(()=>import("./index.html-Z-fzblzb.js"),__vite__mapDeps([1136,1])),meta:{y:"p",t:"Tag: intellij-idea",I:!1}}],["/tag/intellij-idea-plugin/",{loader:()=>r(()=>import("./index.html-DrLyehN5.js"),__vite__mapDeps([1137,1])),meta:{y:"p",t:"Tag: intellij-idea-plugin",I:!1}}],["/tag/android-studio/",{loader:()=>r(()=>import("./index.html-BXlAdkU6.js"),__vite__mapDeps([1138,1])),meta:{y:"p",t:"Tag: android-studio",I:!1}}],["/tag/algorithms/",{loader:()=>r(()=>import("./index.html-BDWcmmiq.js"),__vite__mapDeps([1139,1])),meta:{y:"p",t:"Tag: algorithms",I:!1}}],["/tag/google/",{loader:()=>r(()=>import("./index.html-CAfkkprK.js"),__vite__mapDeps([1140,1])),meta:{y:"p",t:"Tag: google",I:!1}}],["/tag/google-code-style/",{loader:()=>r(()=>import("./index.html-CyzAxZVz.js"),__vite__mapDeps([1141,1])),meta:{y:"p",t:"Tag: google-code-style",I:!1}}],["/tag/windows/",{loader:()=>r(()=>import("./index.html-BC8LNDCp.js"),__vite__mapDeps([1142,1])),meta:{y:"p",t:"Tag: windows",I:!1}}],["/tag/vscode/",{loader:()=>r(()=>import("./index.html-HF9CHQFg.js"),__vite__mapDeps([1143,1])),meta:{y:"p",t:"Tag: vscode",I:!1}}],["/tag/visual-studio-code/",{loader:()=>r(()=>import("./index.html-FpHJT_B8.js"),__vite__mapDeps([1144,1])),meta:{y:"p",t:"Tag: visual-studio-code",I:!1}}],["/tag/api/",{loader:()=>r(()=>import("./index.html-BKuBwl83.js"),__vite__mapDeps([1145,1])),meta:{y:"p",t:"Tag: api",I:!1}}],["/tag/broadcast/",{loader:()=>r(()=>import("./index.html-_xyH0o_c.js"),__vite__mapDeps([1146,1])),meta:{y:"p",t:"Tag: broadcast",I:!1}}],["/tag/reactjs/",{loader:()=>r(()=>import("./index.html-lkApk1T7.js"),__vite__mapDeps([1147,1])),meta:{y:"p",t:"Tag: reactjs",I:!1}}],["/tag/vue/",{loader:()=>r(()=>import("./index.html-C7MnsQVS.js"),__vite__mapDeps([1148,1])),meta:{y:"p",t:"Tag: vue",I:!1}}],["/tag/vuejs/",{loader:()=>r(()=>import("./index.html-CyPSd4gB.js"),__vite__mapDeps([1149,1])),meta:{y:"p",t:"Tag: vuejs",I:!1}}],["/tag/vercel/",{loader:()=>r(()=>import("./index.html-BxeAwH2S.js"),__vite__mapDeps([1150,1])),meta:{y:"p",t:"Tag: vercel",I:!1}}],["/tag/nextjs/",{loader:()=>r(()=>import("./index.html-C7wHg8JM.js"),__vite__mapDeps([1151,1])),meta:{y:"p",t:"Tag: nextjs",I:!1}}],["/tag/colt-steele/",{loader:()=>r(()=>import("./index.html-BcZnNGyE.js"),__vite__mapDeps([1152,1])),meta:{y:"p",t:"Tag: colt-steele",I:!1}}],["/tag/css/",{loader:()=>r(()=>import("./index.html-Bk6LNv7R.js"),__vite__mapDeps([1153,1])),meta:{y:"p",t:"Tag: css",I:!1}}],["/tag/grid/",{loader:()=>r(()=>import("./index.html-SLQPH_sQ.js"),__vite__mapDeps([1154,1])),meta:{y:"p",t:"Tag: grid",I:!1}}],["/tag/microsoft/",{loader:()=>r(()=>import("./index.html-DwceoaGt.js"),__vite__mapDeps([1155,1])),meta:{y:"p",t:"Tag: microsoft",I:!1}}],["/tag/llm/",{loader:()=>r(()=>import("./index.html-C4RDFaYc.js"),__vite__mapDeps([1156,1])),meta:{y:"p",t:"Tag: llm",I:!1}}],["/tag/ai/",{loader:()=>r(()=>import("./index.html-DUHH8y6l.js"),__vite__mapDeps([1157,1])),meta:{y:"p",t:"Tag: ai",I:!1}}],["/tag/generative-ai/",{loader:()=>r(()=>import("./index.html-CIB7-_CQ.js"),__vite__mapDeps([1158,1])),meta:{y:"p",t:"Tag: generative-ai",I:!1}}],["/tag/jupyter-notebook/",{loader:()=>r(()=>import("./index.html-CaQGUl3e.js"),__vite__mapDeps([1159,1])),meta:{y:"p",t:"Tag: jupyter-notebook",I:!1}}],["/tag/oracle/",{loader:()=>r(()=>import("./index.html-BhA5C3lf.js"),__vite__mapDeps([1160,1])),meta:{y:"p",t:"Tag: oracle",I:!1}}],["/tag/oracle-db/",{loader:()=>r(()=>import("./index.html-C14tE3k2.js"),__vite__mapDeps([1161,1])),meta:{y:"p",t:"Tag: oracle-db",I:!1}}],["/tag/oracle-sql/",{loader:()=>r(()=>import("./index.html-B7_xRRKm.js"),__vite__mapDeps([1162,1])),meta:{y:"p",t:"Tag: oracle-sql",I:!1}}],["/tag/mysql/",{loader:()=>r(()=>import("./index.html-D2ycGopx.js"),__vite__mapDeps([1163,1])),meta:{y:"p",t:"Tag: mysql",I:!1}}],["/tag/google-colab/",{loader:()=>r(()=>import("./index.html-DfETJ65Y.js"),__vite__mapDeps([1164,1])),meta:{y:"p",t:"Tag: google-colab",I:!1}}],["/tag/numpy/",{loader:()=>r(()=>import("./index.html-R6t4Atgn.js"),__vite__mapDeps([1165,1])),meta:{y:"p",t:"Tag: numpy",I:!1}}],["/tag/pandas/",{loader:()=>r(()=>import("./index.html-ChlOcnF0.js"),__vite__mapDeps([1166,1])),meta:{y:"p",t:"Tag: pandas",I:!1}}],["/tag/ipython/",{loader:()=>r(()=>import("./index.html-DWLf1h7E.js"),__vite__mapDeps([1167,1])),meta:{y:"p",t:"Tag: ipython",I:!1}}],["/tag/anaconda/",{loader:()=>r(()=>import("./index.html-D4CWSVwM.js"),__vite__mapDeps([1168,1])),meta:{y:"p",t:"Tag: anaconda",I:!1}}],["/tag/vscode-extensions/",{loader:()=>r(()=>import("./index.html-D0qn0v_m.js"),__vite__mapDeps([1169,1])),meta:{y:"p",t:"Tag: vscode-extensions",I:!1}}],["/tag/opencv/",{loader:()=>r(()=>import("./index.html-Byu_JU44.js"),__vite__mapDeps([1170,1])),meta:{y:"p",t:"Tag: opencv",I:!1}}],["/tag/jets/",{loader:()=>r(()=>import("./index.html-Cn2ElaoR.js"),__vite__mapDeps([1171,1])),meta:{y:"p",t:"Tag: jets",I:!1}}],["/tag/aws-lambda/",{loader:()=>r(()=>import("./index.html-CMXQ4Vmo.js"),__vite__mapDeps([1172,1])),meta:{y:"p",t:"Tag: aws-lambda",I:!1}}],["/tag/cloudwatch/",{loader:()=>r(()=>import("./index.html-DT97tU6G.js"),__vite__mapDeps([1173,1])),meta:{y:"p",t:"Tag: cloudwatch",I:!1}}],["/tag/eventhelix/",{loader:()=>r(()=>import("./index.html-CprnTTfn.js"),__vite__mapDeps([1174,1])),meta:{y:"p",t:"Tag: eventhelix",I:!1}}],["/tag/wasm/",{loader:()=>r(()=>import("./index.html-CM_VoRhD.js"),__vite__mapDeps([1175,1])),meta:{y:"p",t:"Tag: wasm",I:!1}}],["/tag/assembly/",{loader:()=>r(()=>import("./index.html-D39GGYNC.js"),__vite__mapDeps([1176,1])),meta:{y:"p",t:"Tag: assembly",I:!1}}],["/tag/zubiarfan/",{loader:()=>r(()=>import("./index.html-MdanFJJr.js"),__vite__mapDeps([1177,1])),meta:{y:"p",t:"Tag: zubiarfan",I:!1}}],["/tag/assemblyscript/",{loader:()=>r(()=>import("./index.html-CAw5A8Pj.js"),__vite__mapDeps([1178,1])),meta:{y:"p",t:"Tag: assemblyscript",I:!1}}],["/tag/paul-hudson/",{loader:()=>r(()=>import("./index.html-1nwOL7oM.js"),__vite__mapDeps([1179,1])),meta:{y:"p",t:"Tag: paul-hudson",I:!1}}],["/tag/hacking-with-swift/",{loader:()=>r(()=>import("./index.html-CqTuXkVv.js"),__vite__mapDeps([1180,1])),meta:{y:"p",t:"Tag: hacking-with-swift",I:!1}}],["/tag/xcode/",{loader:()=>r(()=>import("./index.html-D9V_s5n4.js"),__vite__mapDeps([1181,1])),meta:{y:"p",t:"Tag: xcode",I:!1}}],["/tag/appstore/",{loader:()=>r(()=>import("./index.html-D-j5Pffw.js"),__vite__mapDeps([1182,1])),meta:{y:"p",t:"Tag: appstore",I:!1}}],["/tag/swiftui/",{loader:()=>r(()=>import("./index.html-CNvWKnz0.js"),__vite__mapDeps([1183,1])),meta:{y:"p",t:"Tag: swiftui",I:!1}}],["/tag/ios/",{loader:()=>r(()=>import("./index.html-DD9gvI4p.js"),__vite__mapDeps([1184,1])),meta:{y:"p",t:"Tag: ios",I:!1}}],["/tag/serverless/",{loader:()=>r(()=>import("./index.html-C9Z6BxsI.js"),__vite__mapDeps([1185,1])),meta:{y:"p",t:"Tag: serverless",I:!1}}],["/article/",{loader:()=>r(()=>import("./index.html-CH9RLg63.js"),__vite__mapDeps([1186,1])),meta:{y:"p",t:"Articles",I:!1}}],["/star/",{loader:()=>r(()=>import("./index.html--xRu7_Wq.js"),__vite__mapDeps([1187,1])),meta:{y:"p",t:"Star",I:!1}}],["/timeline/",{loader:()=>r(()=>import("./index.html-BxIwz3yV.js"),__vite__mapDeps([1188,1])),meta:{y:"p",t:"Timeline",I:!1}}]]);/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Da=typeof window<"u";function Fh(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ge=Object.assign;function oi(e,t){const a={};for(const s in t){const i=t[s];a[s]=_t(i)?i.map(e):e(i)}return a}const hs=()=>{},_t=Array.isArray,$h=/\/$/,qh=e=>e.replace($h,"");function li(e,t,a="/"){let s,i={},n="",o="";const c=t.indexOf("#");let u=t.indexOf("?");return c<u&&c>=0&&(u=-1),u>-1&&(s=t.slice(0,u),n=t.slice(u+1,c>-1?c:t.length),i=e(n)),c>-1&&(s=s||t.slice(0,c),o=t.slice(c,t.length)),s=Jh(s??t,a),{fullPath:s+(n&&"?")+n+o,path:s,query:i,hash:o}}function Wh(e,t){const a=t.query?e(t.query):"";return t.path+(a&&"?")+a+(t.hash||"")}function Wo(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Gh(e,t,a){const s=t.matched.length-1,i=a.matched.length-1;return s>-1&&s===i&&Ua(t.matched[s],a.matched[i])&&Fc(t.params,a.params)&&e(t.query)===e(a.query)&&t.hash===a.hash}function Ua(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Fc(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const a in e)if(!Uh(e[a],t[a]))return!1;return!0}function Uh(e,t){return _t(e)?Go(e,t):_t(t)?Go(t,e):e===t}function Go(e,t){return _t(t)?e.length===t.length&&e.every((a,s)=>a===t[s]):e.length===1&&e[0]===t}function Jh(e,t){if(e.startsWith("/"))return e;if(!e)return t;const a=t.split("/"),s=e.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let n=a.length-1,o,c;for(o=0;o<s.length;o++)if(c=s[o],c!==".")if(c==="..")n>1&&n--;else break;return a.slice(0,n).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var xs;(function(e){e.pop="pop",e.push="push"})(xs||(xs={}));var fs;(function(e){e.back="back",e.forward="forward",e.unknown=""})(fs||(fs={}));function Kh(e){if(!e)if(Da){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),qh(e)}const Qh=/^[^#]+#/;function Yh(e,t){return e.replace(Qh,"#")+t}function Zh(e,t){const a=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-a.left-(t.left||0),top:s.top-a.top-(t.top||0)}}const Hr=()=>({left:window.pageXOffset,top:window.pageYOffset});function Xh(e){let t;if("el"in e){const a=e.el,s=typeof a=="string"&&a.startsWith("#"),i=typeof a=="string"?s?document.getElementById(a.slice(1)):document.querySelector(a):a;if(!i)return;t=Zh(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Uo(e,t){return(history.state?history.state.position-t:-1)+e}const Ri=new Map;function e0(e,t){Ri.set(e,t)}function t0(e){const t=Ri.get(e);return Ri.delete(e),t}let a0=()=>location.protocol+"//"+location.host;function $c(e,t){const{pathname:a,search:s,hash:i}=t,n=e.indexOf("#");if(n>-1){let c=i.includes(e.slice(n))?e.slice(n).length:1,u=i.slice(c);return u[0]!=="/"&&(u="/"+u),Wo(u,"")}return Wo(a,e)+s+i}function s0(e,t,a,s){let i=[],n=[],o=null;const c=({state:h})=>{const f=$c(e,location),g=a.value,E=t.value;let k=0;if(h){if(a.value=f,t.value=h,o&&o===g){o=null;return}k=E?h.position-E.position:0}else s(f);i.forEach(y=>{y(a.value,g,{delta:k,type:xs.pop,direction:k?k>0?fs.forward:fs.back:fs.unknown})})};function u(){o=a.value}function d(h){i.push(h);const f=()=>{const g=i.indexOf(h);g>-1&&i.splice(g,1)};return n.push(f),f}function p(){const{history:h}=window;h.state&&h.replaceState(ge({},h.state,{scroll:Hr()}),"")}function m(){for(const h of n)h();n=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",p,{passive:!0}),{pauseListeners:u,listen:d,destroy:m}}function Jo(e,t,a,s=!1,i=!1){return{back:e,current:t,forward:a,replaced:s,position:window.history.length,scroll:i?Hr():null}}function r0(e){const{history:t,location:a}=window,s={value:$c(e,a)},i={value:t.state};i.value||n(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function n(u,d,p){const m=e.indexOf("#"),h=m>-1?(a.host&&document.querySelector("base")?e:e.slice(m))+u:a0()+e+u;try{t[p?"replaceState":"pushState"](d,"",h),i.value=d}catch(f){console.error(f),a[p?"replace":"assign"](h)}}function o(u,d){const p=ge({},t.state,Jo(i.value.back,u,i.value.forward,!0),d,{position:i.value.position});n(u,p,!0),s.value=u}function c(u,d){const p=ge({},i.value,t.state,{forward:u,scroll:Hr()});n(p.current,p,!0);const m=ge({},Jo(s.value,u,null),{position:p.position+1},d);n(u,m,!1),s.value=u}return{location:s,state:i,push:c,replace:o}}function i0(e){e=Kh(e);const t=r0(e),a=s0(e,t.state,t.location,t.replace);function s(n,o=!0){o||a.pauseListeners(),history.go(n)}const i=ge({location:"",base:e,go:s,createHref:Yh.bind(null,e)},t,a);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function n0(e){return typeof e=="string"||e&&typeof e=="object"}function qc(e){return typeof e=="string"||typeof e=="symbol"}const Nt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Wc=Symbol("");var Ko;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ko||(Ko={}));function Ja(e,t){return ge(new Error,{type:e,[Wc]:!0},t)}function Mt(e,t){return e instanceof Error&&Wc in e&&(t==null||!!(e.type&t))}const Qo="[^/]+?",o0={sensitive:!1,strict:!1,start:!0,end:!0},l0=/[.+*?^${}()[\]/\\]/g;function c0(e,t){const a=ge({},o0,t),s=[];let i=a.start?"^":"";const n=[];for(const d of e){const p=d.length?[]:[90];a.strict&&!d.length&&(i+="/");for(let m=0;m<d.length;m++){const h=d[m];let f=40+(a.sensitive?.25:0);if(h.type===0)m||(i+="/"),i+=h.value.replace(l0,"\\$&"),f+=40;else if(h.type===1){const{value:g,repeatable:E,optional:k,regexp:y}=h;n.push({name:g,repeatable:E,optional:k});const T=y||Qo;if(T!==Qo){f+=10;try{new RegExp(`(${T})`)}catch(j){throw new Error(`Invalid custom RegExp for param "${g}" (${T}): `+j.message)}}let b=E?`((?:${T})(?:/(?:${T}))*)`:`(${T})`;m||(b=k&&d.length<2?`(?:/${b})`:"/"+b),k&&(b+="?"),i+=b,f+=20,k&&(f+=-8),E&&(f+=-20),T===".*"&&(f+=-50)}p.push(f)}s.push(p)}if(a.strict&&a.end){const d=s.length-1;s[d][s[d].length-1]+=.7000000000000001}a.strict||(i+="/?"),a.end?i+="$":a.strict&&(i+="(?:/|$)");const o=new RegExp(i,a.sensitive?"":"i");function c(d){const p=d.match(o),m={};if(!p)return null;for(let h=1;h<p.length;h++){const f=p[h]||"",g=n[h-1];m[g.name]=f&&g.repeatable?f.split("/"):f}return m}function u(d){let p="",m=!1;for(const h of e){(!m||!p.endsWith("/"))&&(p+="/"),m=!1;for(const f of h)if(f.type===0)p+=f.value;else if(f.type===1){const{value:g,repeatable:E,optional:k}=f,y=g in d?d[g]:"";if(_t(y)&&!E)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const T=_t(y)?y.join("/"):y;if(!T)if(k)h.length<2&&(p.endsWith("/")?p=p.slice(0,-1):m=!0);else throw new Error(`Missing required param "${g}"`);p+=T}}return p||"/"}return{re:o,score:s,keys:n,parse:c,stringify:u}}function u0(e,t){let a=0;for(;a<e.length&&a<t.length;){const s=t[a]-e[a];if(s)return s;a++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function d0(e,t){let a=0;const s=e.score,i=t.score;for(;a<s.length&&a<i.length;){const n=u0(s[a],i[a]);if(n)return n;a++}if(Math.abs(i.length-s.length)===1){if(Yo(s))return 1;if(Yo(i))return-1}return i.length-s.length}function Yo(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const p0={type:0,value:""},m0=/[a-zA-Z0-9_]/;function h0(e){if(!e)return[[]];if(e==="/")return[[p0]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(f){throw new Error(`ERR (${a})/"${d}": ${f}`)}let a=0,s=a;const i=[];let n;function o(){n&&i.push(n),n=[]}let c=0,u,d="",p="";function m(){d&&(a===0?n.push({type:0,value:d}):a===1||a===2||a===3?(n.length>1&&(u==="*"||u==="+")&&t(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),n.push({type:1,value:d,regexp:p,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):t("Invalid state to consume buffer"),d="")}function h(){d+=u}for(;c<e.length;){if(u=e[c++],u==="\\"&&a!==2){s=a,a=4;continue}switch(a){case 0:u==="/"?(d&&m(),o()):u===":"?(m(),a=1):h();break;case 4:h(),a=s;break;case 1:u==="("?a=2:m0.test(u)?h():(m(),a=0,u!=="*"&&u!=="?"&&u!=="+"&&c--);break;case 2:u===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+u:a=3:p+=u;break;case 3:m(),a=0,u!=="*"&&u!=="?"&&u!=="+"&&c--,p="";break;default:t("Unknown state");break}}return a===2&&t(`Unfinished custom RegExp for param "${d}"`),m(),o(),i}function f0(e,t,a){const s=c0(h0(e.path),a),i=ge(s,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function w0(e,t){const a=[],s=new Map;t=el({strict:!1,end:!0,sensitive:!1},t);function i(p){return s.get(p)}function n(p,m,h){const f=!h,g=g0(p);g.aliasOf=h&&h.record;const E=el(t,p),k=[g];if("alias"in p){const b=typeof p.alias=="string"?[p.alias]:p.alias;for(const j of b)k.push(ge({},g,{components:h?h.record.components:g.components,path:j,aliasOf:h?h.record:g}))}let y,T;for(const b of k){const{path:j}=b;if(m&&j[0]!=="/"){const C=m.record.path,A=C[C.length-1]==="/"?"":"/";b.path=m.record.path+(j&&A+j)}if(y=f0(b,m,E),h?h.alias.push(y):(T=T||y,T!==y&&T.alias.push(y),f&&p.name&&!Xo(y)&&o(p.name)),g.children){const C=g.children;for(let A=0;A<C.length;A++)n(C[A],y,h&&h.children[A])}h=h||y,(y.record.components&&Object.keys(y.record.components).length||y.record.name||y.record.redirect)&&u(y)}return T?()=>{o(T)}:hs}function o(p){if(qc(p)){const m=s.get(p);m&&(s.delete(p),a.splice(a.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=a.indexOf(p);m>-1&&(a.splice(m,1),p.record.name&&s.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return a}function u(p){let m=0;for(;m<a.length&&d0(p,a[m])>=0&&(p.record.path!==a[m].record.path||!Gc(p,a[m]));)m++;a.splice(m,0,p),p.record.name&&!Xo(p)&&s.set(p.record.name,p)}function d(p,m){let h,f={},g,E;if("name"in p&&p.name){if(h=s.get(p.name),!h)throw Ja(1,{location:p});E=h.record.name,f=ge(Zo(m.params,h.keys.filter(T=>!T.optional).map(T=>T.name)),p.params&&Zo(p.params,h.keys.map(T=>T.name))),g=h.stringify(f)}else if("path"in p)g=p.path,h=a.find(T=>T.re.test(g)),h&&(f=h.parse(g),E=h.record.name);else{if(h=m.name?s.get(m.name):a.find(T=>T.re.test(m.path)),!h)throw Ja(1,{location:p,currentLocation:m});E=h.record.name,f=ge({},m.params,p.params),g=h.stringify(f)}const k=[];let y=h;for(;y;)k.unshift(y.record),y=y.parent;return{name:E,path:g,params:f,matched:k,meta:y0(k)}}return e.forEach(p=>n(p)),{addRoute:n,resolve:d,removeRoute:o,getRoutes:c,getRecordMatcher:i}}function Zo(e,t){const a={};for(const s of t)s in e&&(a[s]=e[s]);return a}function g0(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:v0(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function v0(e){const t={},a=e.props||!1;if("component"in e)t.default=a;else for(const s in e.components)t[s]=typeof a=="object"?a[s]:a;return t}function Xo(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function y0(e){return e.reduce((t,a)=>ge(t,a.meta),{})}function el(e,t){const a={};for(const s in e)a[s]=s in t?t[s]:e[s];return a}function Gc(e,t){return t.children.some(a=>a===e||Gc(e,a))}const Uc=/#/g,_0=/&/g,b0=/\//g,E0=/=/g,k0=/\?/g,Jc=/\+/g,x0=/%5B/g,T0=/%5D/g,Kc=/%5E/g,A0=/%60/g,Qc=/%7B/g,j0=/%7C/g,Yc=/%7D/g,I0=/%20/g;function wn(e){return encodeURI(""+e).replace(j0,"|").replace(x0,"[").replace(T0,"]")}function L0(e){return wn(e).replace(Qc,"{").replace(Yc,"}").replace(Kc,"^")}function Vi(e){return wn(e).replace(Jc,"%2B").replace(I0,"+").replace(Uc,"%23").replace(_0,"%26").replace(A0,"`").replace(Qc,"{").replace(Yc,"}").replace(Kc,"^")}function S0(e){return Vi(e).replace(E0,"%3D")}function P0(e){return wn(e).replace(Uc,"%23").replace(k0,"%3F")}function D0(e){return e==null?"":P0(e).replace(b0,"%2F")}function Er(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function O0(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<s.length;++i){const n=s[i].replace(Jc," "),o=n.indexOf("="),c=Er(o<0?n:n.slice(0,o)),u=o<0?null:Er(n.slice(o+1));if(c in t){let d=t[c];_t(d)||(d=t[c]=[d]),d.push(u)}else t[c]=u}return t}function tl(e){let t="";for(let a in e){const s=e[a];if(a=S0(a),s==null){s!==void 0&&(t+=(t.length?"&":"")+a);continue}(_t(s)?s.map(n=>n&&Vi(n)):[s&&Vi(s)]).forEach(n=>{n!==void 0&&(t+=(t.length?"&":"")+a,n!=null&&(t+="="+n))})}return t}function R0(e){const t={};for(const a in e){const s=e[a];s!==void 0&&(t[a]=_t(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return t}const V0=Symbol(""),al=Symbol(""),Nr=Symbol(""),gn=Symbol(""),Ci=Symbol("");function is(){let e=[];function t(s){return e.push(s),()=>{const i=e.indexOf(s);i>-1&&e.splice(i,1)}}function a(){e=[]}return{add:t,list:()=>e.slice(),reset:a}}function ta(e,t,a,s,i){const n=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,c)=>{const u=m=>{m===!1?c(Ja(4,{from:a,to:t})):m instanceof Error?c(m):n0(m)?c(Ja(2,{from:t,to:m})):(n&&s.enterCallbacks[i]===n&&typeof m=="function"&&n.push(m),o())},d=e.call(s&&s.instances[i],t,a,u);let p=Promise.resolve(d);e.length<3&&(p=p.then(u)),p.catch(m=>c(m))})}function ci(e,t,a,s){const i=[];for(const n of e)for(const o in n.components){let c=n.components[o];if(!(t!=="beforeRouteEnter"&&!n.instances[o]))if(C0(c)){const d=(c.__vccOpts||c)[t];d&&i.push(ta(d,a,s,n,o))}else{let u=c();i.push(()=>u.then(d=>{if(!d)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${n.path}"`));const p=Fh(d)?d.default:d;n.components[o]=p;const h=(p.__vccOpts||p)[t];return h&&ta(h,a,s,n,o)()}))}}return i}function C0(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function sl(e){const t=fe(Nr),a=fe(gn),s=_(()=>t.resolve(gt(e.to))),i=_(()=>{const{matched:u}=s.value,{length:d}=u,p=u[d-1],m=a.matched;if(!p||!m.length)return-1;const h=m.findIndex(Ua.bind(null,p));if(h>-1)return h;const f=rl(u[d-2]);return d>1&&rl(p)===f&&m[m.length-1].path!==f?m.findIndex(Ua.bind(null,u[d-2])):h}),n=_(()=>i.value>-1&&z0(a.params,s.value.params)),o=_(()=>i.value>-1&&i.value===a.matched.length-1&&Fc(a.params,s.value.params));function c(u={}){return N0(u)?t[gt(e.replace)?"replace":"push"](gt(e.to)).catch(hs):Promise.resolve()}return{route:s,href:_(()=>s.value.href),isActive:n,isExactActive:o,navigate:c}}const M0=D({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:sl,setup(e,{slots:t}){const a=Ps(sl(e)),{options:s}=fe(Nr),i=_(()=>({[il(e.activeClass,s.linkActiveClass,"router-link-active")]:a.isActive,[il(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:a.isExactActive}));return()=>{const n=t.default&&t.default(a);return e.custom?n:l("a",{"aria-current":a.isExactActive?e.ariaCurrentValue:null,href:a.href,onClick:a.navigate,class:i.value},n)}}}),H0=M0;function N0(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function z0(e,t){for(const a in t){const s=t[a],i=e[a];if(typeof s=="string"){if(s!==i)return!1}else if(!_t(i)||i.length!==s.length||s.some((n,o)=>n!==i[o]))return!1}return!0}function rl(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const il=(e,t,a)=>e??t??a,B0=D({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:a}){const s=fe(Ci),i=_(()=>e.route||s.value),n=fe(al,0),o=_(()=>{let d=gt(n);const{matched:p}=i.value;let m;for(;(m=p[d])&&!m.components;)d++;return d}),c=_(()=>i.value.matched[o.value]);mt(al,_(()=>o.value+1)),mt(V0,c),mt(Ci,i);const u=q();return re(()=>[u.value,c.value,e.name],([d,p,m],[h,f,g])=>{p&&(p.instances[m]=d,f&&f!==p&&d&&d===h&&(p.leaveGuards.size||(p.leaveGuards=f.leaveGuards),p.updateGuards.size||(p.updateGuards=f.updateGuards))),d&&p&&(!f||!Ua(p,f)||!h)&&(p.enterCallbacks[m]||[]).forEach(E=>E(d))},{flush:"post"}),()=>{const d=i.value,p=e.name,m=c.value,h=m&&m.components[p];if(!h)return nl(a.default,{Component:h,route:d});const f=m.props[p],g=f?f===!0?d.params:typeof f=="function"?f(d):f:null,k=l(h,ge({},g,t,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(m.instances[p]=null)},ref:u}));return nl(a.default,{Component:k,route:d})||k}}});function nl(e,t){if(!e)return null;const a=e(t);return a.length===1?a[0]:a}const F0=B0;function $0(e){const t=w0(e.routes,e),a=e.parseQuery||O0,s=e.stringifyQuery||tl,i=e.history,n=is(),o=is(),c=is(),u=le(Nt);let d=Nt;Da&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=oi.bind(null,I=>""+I),m=oi.bind(null,D0),h=oi.bind(null,Er);function f(I,W){let F,K;return qc(I)?(F=t.getRecordMatcher(I),K=W):K=I,t.addRoute(K,F)}function g(I){const W=t.getRecordMatcher(I);W&&t.removeRoute(W)}function E(){return t.getRoutes().map(I=>I.record)}function k(I){return!!t.getRecordMatcher(I)}function y(I,W){if(W=ge({},W||u.value),typeof I=="string"){const v=li(a,I,W.path),x=t.resolve({path:v.path},W),S=i.createHref(v.fullPath);return ge(v,x,{params:h(x.params),hash:Er(v.hash),redirectedFrom:void 0,href:S})}let F;if("path"in I)F=ge({},I,{path:li(a,I.path,W.path).path});else{const v=ge({},I.params);for(const x in v)v[x]==null&&delete v[x];F=ge({},I,{params:m(v)}),W.params=m(W.params)}const K=t.resolve(F,W),de=I.hash||"";K.params=p(h(K.params));const xe=Wh(s,ge({},I,{hash:L0(de),path:K.path})),w=i.createHref(xe);return ge({fullPath:xe,hash:de,query:s===tl?R0(I.query):I.query||{}},K,{redirectedFrom:void 0,href:w})}function T(I){return typeof I=="string"?li(a,I,u.value.path):ge({},I)}function b(I,W){if(d!==I)return Ja(8,{from:W,to:I})}function j(I){return V(I)}function C(I){return j(ge(T(I),{replace:!0}))}function A(I){const W=I.matched[I.matched.length-1];if(W&&W.redirect){const{redirect:F}=W;let K=typeof F=="function"?F(I):F;return typeof K=="string"&&(K=K.includes("?")||K.includes("#")?K=T(K):{path:K},K.params={}),ge({query:I.query,hash:I.hash,params:"path"in K?{}:I.params},K)}}function V(I,W){const F=d=y(I),K=u.value,de=I.state,xe=I.force,w=I.replace===!0,v=A(F);if(v)return V(ge(T(v),{state:typeof v=="object"?ge({},de,v.state):de,force:xe,replace:w}),W||F);const x=F;x.redirectedFrom=W;let S;return!xe&&Gh(s,K,F)&&(S=Ja(16,{to:x,from:K}),ot(K,K,!0,!1)),(S?Promise.resolve(S):B(x,K)).catch(L=>Mt(L)?Mt(L,2)?L:Tt(L):J(L,x,K)).then(L=>{if(L){if(Mt(L,2))return V(ge({replace:w},T(L.to),{state:typeof L.to=="object"?ge({},de,L.to.state):de,force:xe}),W||x)}else L=N(x,K,!0,w,de);return Q(x,K,L),L})}function O(I,W){const F=b(I,W);return F?Promise.reject(F):Promise.resolve()}function M(I){const W=Ct.values().next().value;return W&&typeof W.runWithContext=="function"?W.runWithContext(I):I()}function B(I,W){let F;const[K,de,xe]=q0(I,W);F=ci(K.reverse(),"beforeRouteLeave",I,W);for(const v of K)v.leaveGuards.forEach(x=>{F.push(ta(x,I,W))});const w=O.bind(null,I,W);return F.push(w),Ve(F).then(()=>{F=[];for(const v of n.list())F.push(ta(v,I,W));return F.push(w),Ve(F)}).then(()=>{F=ci(de,"beforeRouteUpdate",I,W);for(const v of de)v.updateGuards.forEach(x=>{F.push(ta(x,I,W))});return F.push(w),Ve(F)}).then(()=>{F=[];for(const v of xe)if(v.beforeEnter)if(_t(v.beforeEnter))for(const x of v.beforeEnter)F.push(ta(x,I,W));else F.push(ta(v.beforeEnter,I,W));return F.push(w),Ve(F)}).then(()=>(I.matched.forEach(v=>v.enterCallbacks={}),F=ci(xe,"beforeRouteEnter",I,W),F.push(w),Ve(F))).then(()=>{F=[];for(const v of o.list())F.push(ta(v,I,W));return F.push(w),Ve(F)}).catch(v=>Mt(v,8)?v:Promise.reject(v))}function Q(I,W,F){c.list().forEach(K=>M(()=>K(I,W,F)))}function N(I,W,F,K,de){const xe=b(I,W);if(xe)return xe;const w=W===Nt,v=Da?history.state:{};F&&(K||w?i.replace(I.fullPath,ge({scroll:w&&v&&v.scroll},de)):i.push(I.fullPath,de)),u.value=I,ot(I,W,F,w),Tt()}let ee;function Se(){ee||(ee=i.listen((I,W,F)=>{if(!At.listening)return;const K=y(I),de=A(K);if(de){V(ge(de,{replace:!0}),K).catch(hs);return}d=K;const xe=u.value;Da&&e0(Uo(xe.fullPath,F.delta),Hr()),B(K,xe).catch(w=>Mt(w,12)?w:Mt(w,2)?(V(w.to,K).then(v=>{Mt(v,20)&&!F.delta&&F.type===xs.pop&&i.go(-1,!1)}).catch(hs),Promise.reject()):(F.delta&&i.go(-F.delta,!1),J(w,K,xe))).then(w=>{w=w||N(K,xe,!1),w&&(F.delta&&!Mt(w,8)?i.go(-F.delta,!1):F.type===xs.pop&&Mt(w,20)&&i.go(-1,!1)),Q(K,xe,w)}).catch(hs)}))}let Ie=is(),U=is(),te;function J(I,W,F){Tt(I);const K=U.list();return K.length?K.forEach(de=>de(I,W,F)):console.error(I),Promise.reject(I)}function Re(){return te&&u.value!==Nt?Promise.resolve():new Promise((I,W)=>{Ie.add([I,W])})}function Tt(I){return te||(te=!I,Se(),Ie.list().forEach(([W,F])=>I?F(I):W()),Ie.reset()),I}function ot(I,W,F,K){const{scrollBehavior:de}=e;if(!Da||!de)return Promise.resolve();const xe=!F&&t0(Uo(I.fullPath,0))||(K||!F)&&history.state&&history.state.scroll||null;return Ft().then(()=>de(I,W,xe)).then(w=>w&&Xh(w)).catch(w=>J(w,I,W))}const Ne=I=>i.go(I);let et;const Ct=new Set,At={currentRoute:u,listening:!0,addRoute:f,removeRoute:g,hasRoute:k,getRoutes:E,resolve:y,options:e,push:j,replace:C,go:Ne,back:()=>Ne(-1),forward:()=>Ne(1),beforeEach:n.add,beforeResolve:o.add,afterEach:c.add,onError:U.add,isReady:Re,install(I){const W=this;I.component("RouterLink",H0),I.component("RouterView",F0),I.config.globalProperties.$router=W,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>gt(u)}),Da&&!et&&u.value===Nt&&(et=!0,j(i.location).catch(de=>{}));const F={};for(const de in Nt)Object.defineProperty(F,de,{get:()=>u.value[de],enumerable:!0});I.provide(Nr,W),I.provide(gn,Ul(F)),I.provide(Ci,u);const K=I.unmount;Ct.add(I),I.unmount=function(){Ct.delete(I),Ct.size<1&&(d=Nt,ee&&ee(),ee=null,u.value=Nt,et=!1,te=!1),K()}}};function Ve(I){return I.reduce((W,F)=>W.then(()=>M(F)),Promise.resolve())}return At}function q0(e,t){const a=[],s=[],i=[],n=Math.max(t.matched.length,e.matched.length);for(let o=0;o<n;o++){const c=t.matched[o];c&&(e.matched.find(d=>Ua(d,c))?s.push(c):a.push(c));const u=e.matched[o];u&&(t.matched.find(d=>Ua(d,u))||i.push(u))}return[a,s,i]}function Ot(){return fe(Nr)}function Rt(){return fe(gn)}var vn=Symbol(""),Vt=()=>{const e=fe(vn);if(!e)throw new Error("useClientData() is called without provider.");return e},W0=()=>Vt().pageComponent,we=()=>Vt().pageData,ye=()=>Vt().pageFrontmatter,G0=()=>Vt().pageHead,Zc=()=>Vt().pageLang,U0=()=>Vt().pageLayout,kt=()=>Vt().routeLocale,J0=()=>Vt().routes,Xc=()=>Vt().siteData,Xa=()=>Vt().siteLocaleData,K0=Symbol(""),eu=le(zh),Ts=le(Bh),tu=e=>{const t=Ch(e);if(Ts.value[t])return t;const a=encodeURI(t);return Ts.value[a]?a:eu.value[t]||t},es=e=>{const t=tu(e),a=Ts.value[t]??{...Ts.value["/404.html"],notFound:!0};return{path:t,notFound:!1,...a}},zr=D({name:"ClientOnly",setup(e,t){const a=q(!1);return ie(()=>{a.value=!0}),()=>{var s,i;return a.value?(i=(s=t.slots).default)==null?void 0:i.call(s):null}}}),yn=D({name:"Content",props:{path:{type:String,required:!1,default:""}},setup(e){const t=W0(),a=_(()=>{if(!e.path)return t.value;const s=es(e.path);return wa(()=>s.loader().then(({comp:i})=>i))});return()=>l(a.value)}}),Ee=e=>Et(e)?e:`/crashcourse/${zc(e)}`,Q0=e=>{if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget){const t=e.currentTarget.getAttribute("target");if(t!=null&&t.match(/\b_blank\b/i))return}return e.preventDefault(),!0}},Pe=({active:e=!1,activeClass:t="route-link-active",to:a,...s},{slots:i})=>{var c;const n=Ot(),o=Ee(tu(a));return l("a",{...s,class:["route-link",{[t]:e}],href:o,onClick:(u={})=>{Q0(u)?n.push(a).catch():Promise.resolve()}},(c=i.default)==null?void 0:c.call(i))};Pe.displayName="RouteLink";Pe.props={active:Boolean,activeClass:String,to:String};var Y0="Layout",Z0="en-US",ha=Ps({resolveLayouts:e=>e.reduce((t,a)=>({...t,...a.layouts}),{}),resolvePageHead:(e,t,a)=>{const s=ke(t.description)?t.description:a.description,i=[...Array.isArray(t.head)?t.head:[],...a.head,["title",{},e],["meta",{name:"description",content:s}]];return Oh(i)},resolvePageHeadTitle:(e,t)=>[e.title,t.title].filter(a=>!!a).join(" | "),resolvePageLang:(e,t)=>e.lang||t.lang||Z0,resolvePageLayout:(e,t)=>{const a=ke(e.frontmatter.layout)?e.frontmatter.layout:Y0;if(!t[a])throw new Error(`[vuepress] Cannot resolve layout: ${a}`);return t[a]},resolveRouteLocale:(e,t)=>Mh(e,t),resolveSiteLocaleData:(e,t)=>{var a;return{...e,...e.locales[t],head:[...((a=e.locales[t])==null?void 0:a.head)??[],...e.head??[]]}}});const X0={};var Xe=(e={})=>e;const xt=e=>{const t=kt();return _(()=>e[t.value]??{})};var Je=Uint8Array,Oa=Uint16Array,ef=Int32Array,au=new Je([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),su=new Je([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),tf=new Je([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),ru=function(e,t){for(var a=new Oa(31),s=0;s<31;++s)a[s]=t+=1<<e[s-1];for(var i=new ef(a[30]),s=1;s<30;++s)for(var n=a[s];n<a[s+1];++n)i[n]=n-a[s]<<5|s;return{b:a,r:i}},iu=ru(au,2),nu=iu.b,af=iu.r;nu[28]=258,af[258]=28;var sf=ru(su,0),rf=sf.b,Mi=new Oa(32768);for(var je=0;je<32768;++je){var Jt=(je&43690)>>1|(je&21845)<<1;Jt=(Jt&52428)>>2|(Jt&13107)<<2,Jt=(Jt&61680)>>4|(Jt&3855)<<4,Mi[je]=((Jt&65280)>>8|(Jt&255)<<8)>>1}var ws=function(e,t,a){for(var s=e.length,i=0,n=new Oa(t);i<s;++i)e[i]&&++n[e[i]-1];var o=new Oa(t);for(i=1;i<t;++i)o[i]=o[i-1]+n[i-1]<<1;var c;if(a){c=new Oa(1<<t);var u=15-t;for(i=0;i<s;++i)if(e[i])for(var d=i<<4|e[i],p=t-e[i],m=o[e[i]-1]++<<p,h=m|(1<<p)-1;m<=h;++m)c[Mi[m]>>u]=d}else for(c=new Oa(s),i=0;i<s;++i)e[i]&&(c[i]=Mi[o[e[i]-1]++]>>15-e[i]);return c},Cs=new Je(288);for(var je=0;je<144;++je)Cs[je]=8;for(var je=144;je<256;++je)Cs[je]=9;for(var je=256;je<280;++je)Cs[je]=7;for(var je=280;je<288;++je)Cs[je]=8;var ou=new Je(32);for(var je=0;je<32;++je)ou[je]=5;var nf=ws(Cs,9,1),of=ws(ou,5,1),ui=function(e){for(var t=e[0],a=1;a<e.length;++a)e[a]>t&&(t=e[a]);return t},ft=function(e,t,a){var s=t/8|0;return(e[s]|e[s+1]<<8)>>(t&7)&a},di=function(e,t){var a=t/8|0;return(e[a]|e[a+1]<<8|e[a+2]<<16)>>(t&7)},lf=function(e){return(e+7)/8|0},_n=function(e,t,a){return(t==null||t<0)&&(t=0),(a==null||a>e.length)&&(a=e.length),new Je(e.subarray(t,a))},cf=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],ut=function(e,t,a){var s=new Error(t||cf[e]);if(s.code=e,Error.captureStackTrace&&Error.captureStackTrace(s,ut),!a)throw s;return s},uf=function(e,t,a,s){var i=e.length,n=s?s.length:0;if(!i||t.f&&!t.l)return a||new Je(0);var o=!a,c=o||t.i!=2,u=t.i;o&&(a=new Je(i*3));var d=function(de){var xe=a.length;if(de>xe){var w=new Je(Math.max(xe*2,de));w.set(a),a=w}},p=t.f||0,m=t.p||0,h=t.b||0,f=t.l,g=t.d,E=t.m,k=t.n,y=i*8;do{if(!f){p=ft(e,m,1);var T=ft(e,m+1,3);if(m+=3,T)if(T==1)f=nf,g=of,E=9,k=5;else if(T==2){var A=ft(e,m,31)+257,V=ft(e,m+10,15)+4,O=A+ft(e,m+5,31)+1;m+=14;for(var M=new Je(O),B=new Je(19),Q=0;Q<V;++Q)B[tf[Q]]=ft(e,m+Q*3,7);m+=V*3;for(var N=ui(B),ee=(1<<N)-1,Se=ws(B,N,1),Q=0;Q<O;){var Ie=Se[ft(e,m,ee)];m+=Ie&15;var b=Ie>>4;if(b<16)M[Q++]=b;else{var U=0,te=0;for(b==16?(te=3+ft(e,m,3),m+=2,U=M[Q-1]):b==17?(te=3+ft(e,m,7),m+=3):b==18&&(te=11+ft(e,m,127),m+=7);te--;)M[Q++]=U}}var J=M.subarray(0,A),Re=M.subarray(A);E=ui(J),k=ui(Re),f=ws(J,E,1),g=ws(Re,k,1)}else ut(1);else{var b=lf(m)+4,j=e[b-4]|e[b-3]<<8,C=b+j;if(C>i){u&&ut(0);break}c&&d(h+j),a.set(e.subarray(b,C),h),t.b=h+=j,t.p=m=C*8,t.f=p;continue}if(m>y){u&&ut(0);break}}c&&d(h+131072);for(var Tt=(1<<E)-1,ot=(1<<k)-1,Ne=m;;Ne=m){var U=f[di(e,m)&Tt],et=U>>4;if(m+=U&15,m>y){u&&ut(0);break}if(U||ut(2),et<256)a[h++]=et;else if(et==256){Ne=m,f=null;break}else{var Ct=et-254;if(et>264){var Q=et-257,At=au[Q];Ct=ft(e,m,(1<<At)-1)+nu[Q],m+=At}var Ve=g[di(e,m)&ot],I=Ve>>4;Ve||ut(3),m+=Ve&15;var Re=rf[I];if(I>3){var At=su[I];Re+=di(e,m)&(1<<At)-1,m+=At}if(m>y){u&&ut(0);break}c&&d(h+131072);var W=h+Ct;if(h<Re){var F=n-Re,K=Math.min(Re,W);for(F+h<0&&ut(3);h<K;++h)a[h]=s[F+h]}for(;h<W;++h)a[h]=a[h-Re]}}t.l=f,t.p=Ne,t.b=h,t.f=p,f&&(p=1,t.m=E,t.d=g,t.n=k)}while(!p);return h!=a.length&&o?_n(a,0,h):a.subarray(0,h)},df=new Je(0),pf=function(e,t){return((e[0]&15)!=8||e[0]>>4>7||(e[0]<<8|e[1])%31)&&ut(6,"invalid zlib data"),(e[1]>>5&1)==+!t&&ut(6,"invalid zlib data: "+(e[1]&32?"need":"unexpected")+" dictionary"),(e[1]>>3&4)+2};function mf(e,t){return uf(e.subarray(pf(e,t&&t.dictionary),-4),{i:2},t&&t.out,t&&t.dictionary)}var ol=typeof TextEncoder<"u"&&new TextEncoder,Hi=typeof TextDecoder<"u"&&new TextDecoder,hf=0;try{Hi.decode(df,{stream:!0}),hf=1}catch{}var ff=function(e){for(var t="",a=0;;){var s=e[a++],i=(s>127)+(s>223)+(s>239);if(a+i>e.length)return{s:t,r:_n(e,a-1)};i?i==3?(s=((s&15)<<18|(e[a++]&63)<<12|(e[a++]&63)<<6|e[a++]&63)-65536,t+=String.fromCharCode(55296|s>>10,56320|s&1023)):i&1?t+=String.fromCharCode((s&31)<<6|e[a++]&63):t+=String.fromCharCode((s&15)<<12|(e[a++]&63)<<6|e[a++]&63):t+=String.fromCharCode(s)}};function wf(e,t){if(t){for(var a=new Je(e.length),s=0;s<e.length;++s)a[s]=e.charCodeAt(s);return a}if(ol)return ol.encode(e);for(var i=e.length,n=new Je(e.length+(e.length>>1)),o=0,c=function(p){n[o++]=p},s=0;s<i;++s){if(o+5>n.length){var u=new Je(o+8+(i-s<<1));u.set(n),n=u}var d=e.charCodeAt(s);d<128||t?c(d):d<2048?(c(192|d>>6),c(128|d&63)):d>55295&&d<57344?(d=65536+(d&1047552)|e.charCodeAt(++s)&1023,c(240|d>>18),c(128|d>>12&63),c(128|d>>6&63),c(128|d&63)):(c(224|d>>12),c(128|d>>6&63),c(128|d&63))}return _n(n,0,o)}function gf(e,t){if(t){for(var a="",s=0;s<e.length;s+=16384)a+=String.fromCharCode.apply(null,e.subarray(s,s+16384));return a}else{if(Hi)return Hi.decode(e);var i=ff(e),n=i.s,a=i.r;return a.length&&ut(8),n}}const Bt=e=>{const t=atob(e);return gf(mf(wf(t,!0)))},$e=(e,t)=>{var s;const a=(s=(t==null?void 0:t._instance)||Aa())==null?void 0:s.appContext.components;return a?e in a||it(e)in a||Ss(it(e))in a:!1},bn=e=>typeof e<"u",pi=e=>typeof e=="number",As=Array.isArray,ka=(e,t)=>ke(e)&&e.startsWith(t),lu=(e,t)=>ke(e)&&e.endsWith(t),qt=Object.entries,vf=Object.fromEntries,nt=Object.keys,Ni=(e,...t)=>{if(t.length===0)return e;const a=t.shift()||null;return a&&qt(a).forEach(([s,i])=>{s==="__proto__"||s==="constructor"||(yt(e[s])&&yt(i)?Ni(e[s],i):As(i)?e[s]=[...i]:yt(i)?e[s]={...i}:e[s]=a[s])}),Ni(e,...t)},En=e=>{if(e){if(typeof e=="number")return new Date(e);const t=Date.parse(e.toString());if(!Number.isNaN(t))return new Date(t)}return null},Ms=e=>ka(e,"/");function cu(e,t){let a,s,i;const n=q(!0),o=()=>{n.value=!0,i()};re(e,o,{flush:"sync"});const c=typeof t=="function"?t:t.get,u=typeof t=="function"?void 0:t.set,d=Lr((p,m)=>(s=p,i=m,{get(){return n.value&&(a=c(),n.value=!1),s(),a},set(h){u==null||u(h)}}));return Object.isExtensible(d)&&(d.trigger=o),d}function la(e){return Vl()?(dp(e),!0):!1}function Fe(e){return typeof e=="function"?e():gt(e)}const Hs=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const yf=e=>e!=null,_f=Object.prototype.toString,bf=e=>_f.call(e)==="[object Object]",St=()=>{},zi=Ef();function Ef(){var e,t;return Hs&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((t=window==null?void 0:window.navigator)==null?void 0:t.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function kn(e,t){function a(...s){return new Promise((i,n)=>{Promise.resolve(e(()=>t.apply(this,s),{fn:t,thisArg:this,args:s})).then(i).catch(n)})}return a}const uu=e=>e();function kf(e,t={}){let a,s,i=St;const n=c=>{clearTimeout(c),i(),i=St};return c=>{const u=Fe(e),d=Fe(t.maxWait);return a&&n(a),u<=0||d!==void 0&&d<=0?(s&&(n(s),s=null),Promise.resolve(c())):new Promise((p,m)=>{i=t.rejectOnCancel?m:p,d&&!s&&(s=setTimeout(()=>{a&&n(a),s=null,p(c())},d)),a=setTimeout(()=>{s&&n(s),s=null,p(c())},u)})}}function xf(...e){let t=0,a,s=!0,i=St,n,o,c,u,d;!He(e[0])&&typeof e[0]=="object"?{delay:o,trailing:c=!0,leading:u=!0,rejectOnCancel:d=!1}=e[0]:[o,c=!0,u=!0,d=!1]=e;const p=()=>{a&&(clearTimeout(a),a=void 0,i(),i=St)};return h=>{const f=Fe(o),g=Date.now()-t,E=()=>n=h();return p(),f<=0?(t=Date.now(),E()):(g>f&&(u||!s)?(t=Date.now(),E()):c&&(n=new Promise((k,y)=>{i=d?y:k,a=setTimeout(()=>{t=Date.now(),s=!0,k(E()),p()},Math.max(0,f-g))})),!u&&!a&&(a=setTimeout(()=>s=!0,f)),s=!1,n)}}function Tf(e=uu){const t=q(!0);function a(){t.value=!1}function s(){t.value=!0}const i=(...n)=>{t.value&&e(...n)};return{isActive:oa(t),pause:a,resume:s,eventFilter:i}}function Af(e){let t;function a(){return t||(t=e()),t}return a.reset=async()=>{const s=t;t=void 0,s&&await s},a}function du(e){return e||Aa()}function jf(...e){if(e.length!==1)return Za(...e);const t=e[0];return typeof t=="function"?oa(Lr(()=>({get:t,set:St}))):q(t)}function Br(e,t=200,a={}){return kn(kf(t,a),e)}function If(e,t=200,a=!1,s=!0,i=!1){return kn(xf(t,a,s,i),e)}function Lf(e,t,a={}){const{eventFilter:s=uu,...i}=a;return re(e,kn(s,t),i)}function Sf(e,t,a={}){const{eventFilter:s,...i}=a,{eventFilter:n,pause:o,resume:c,isActive:u}=Tf(s);return{stop:Lf(e,t,{...i,eventFilter:n}),pause:o,resume:c,isActive:u}}function Ns(e,t=!0,a){du()?ie(e,a):t?e():Ft(e)}function Pf(e,t){du(t)&&Dt(e,t)}function Df(e,t,a={}){const{immediate:s=!0}=a,i=q(!1);let n=null;function o(){n&&(clearTimeout(n),n=null)}function c(){i.value=!1,o()}function u(...d){o(),i.value=!0,n=setTimeout(()=>{i.value=!1,n=null,e(...d)},Fe(t))}return s&&(i.value=!0,Hs&&u()),la(c),{isPending:oa(i),start:u,stop:c}}function kr(e=!1,t={}){const{truthyValue:a=!0,falsyValue:s=!1}=t,i=He(e),n=q(e);function o(c){if(arguments.length)return n.value=c,n.value;{const u=Fe(a);return n.value=n.value===u?Fe(s):u,n.value}}return i?o:[n,o]}function Qe(e){var t;const a=Fe(e);return(t=a==null?void 0:a.$el)!=null?t:a}const bt=Hs?window:void 0,xn=Hs?window.document:void 0,pu=Hs?window.navigator:void 0;function ve(...e){let t,a,s,i;if(typeof e[0]=="string"||Array.isArray(e[0])?([a,s,i]=e,t=bt):[t,a,s,i]=e,!t)return St;Array.isArray(a)||(a=[a]),Array.isArray(s)||(s=[s]);const n=[],o=()=>{n.forEach(p=>p()),n.length=0},c=(p,m,h,f)=>(p.addEventListener(m,h,f),()=>p.removeEventListener(m,h,f)),u=re(()=>[Qe(t),Fe(i)],([p,m])=>{if(o(),!p)return;const h=bf(m)?{...m}:m;n.push(...a.flatMap(f=>s.map(g=>c(p,f,g,h))))},{immediate:!0,flush:"post"}),d=()=>{u(),o()};return la(d),d}let ll=!1;function mu(e,t,a={}){const{window:s=bt,ignore:i=[],capture:n=!0,detectIframe:o=!1}=a;if(!s)return St;zi&&!ll&&(ll=!0,Array.from(s.document.body.children).forEach(h=>h.addEventListener("click",St)),s.document.documentElement.addEventListener("click",St));let c=!0;const u=h=>i.some(f=>{if(typeof f=="string")return Array.from(s.document.querySelectorAll(f)).some(g=>g===h.target||h.composedPath().includes(g));{const g=Qe(f);return g&&(h.target===g||h.composedPath().includes(g))}}),p=[ve(s,"click",h=>{const f=Qe(e);if(!(!f||f===h.target||h.composedPath().includes(f))){if(h.detail===0&&(c=!u(h)),!c){c=!0;return}t(h)}},{passive:!0,capture:n}),ve(s,"pointerdown",h=>{const f=Qe(e);c=!u(h)&&!!(f&&!h.composedPath().includes(f))},{passive:!0}),o&&ve(s,"blur",h=>{setTimeout(()=>{var f;const g=Qe(e);((f=s.document.activeElement)==null?void 0:f.tagName)==="IFRAME"&&!(g!=null&&g.contains(s.document.activeElement))&&t(h)},0)})].filter(Boolean);return()=>p.forEach(h=>h())}function Of(){const e=q(!1),t=Aa();return t&&ie(()=>{e.value=!0},t),e}function ts(e){const t=Of();return _(()=>(t.value,!!e()))}function hu(e,t={}){const{window:a=bt}=t,s=ts(()=>a&&"matchMedia"in a&&typeof a.matchMedia=="function");let i;const n=q(!1),o=d=>{n.value=d.matches},c=()=>{i&&("removeEventListener"in i?i.removeEventListener("change",o):i.removeListener(o))},u=un(()=>{s.value&&(c(),i=a.matchMedia(Fe(e)),"addEventListener"in i?i.addEventListener("change",o):i.addListener(o),n.value=i.matches)});return la(()=>{u(),c(),i=void 0}),n}function cl(e,t={}){const{controls:a=!1,navigator:s=pu}=t,i=ts(()=>s&&"permissions"in s);let n;const o=typeof e=="string"?{name:e}:e,c=q(),u=()=>{n&&(c.value=n.state)},d=Af(async()=>{if(i.value){if(!n)try{n=await s.permissions.query(o),ve(n,"change",u),u()}catch{c.value="prompt"}return n}});return d(),a?{state:c,isSupported:i,query:d}:c}function Rf(e={}){const{navigator:t=pu,read:a=!1,source:s,copiedDuring:i=1500,legacy:n=!1}=e,o=ts(()=>t&&"clipboard"in t),c=cl("clipboard-read"),u=cl("clipboard-write"),d=_(()=>o.value||n),p=q(""),m=q(!1),h=Df(()=>m.value=!1,i);function f(){o.value&&c.value!=="denied"?t.clipboard.readText().then(y=>{p.value=y}):p.value=k()}d.value&&a&&ve(["copy","cut"],f);async function g(y=Fe(s)){d.value&&y!=null&&(o.value&&u.value!=="denied"?await t.clipboard.writeText(y):E(y),p.value=y,m.value=!0,h.start())}function E(y){const T=document.createElement("textarea");T.value=y??"",T.style.position="absolute",T.style.opacity="0",document.body.appendChild(T),T.select(),document.execCommand("copy"),T.remove()}function k(){var y,T,b;return(b=(T=(y=document==null?void 0:document.getSelection)==null?void 0:y.call(document))==null?void 0:T.toString())!=null?b:""}return{isSupported:d,text:p,copied:m,copy:g}}const ar=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},sr="__vueuse_ssr_handlers__",Vf=Cf();function Cf(){return sr in ar||(ar[sr]=ar[sr]||{}),ar[sr]}function Mf(e,t){return Vf[e]||t}function Hf(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const Nf={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},ul="vueuse-storage";function Fr(e,t,a,s={}){var i;const{flush:n="pre",deep:o=!0,listenToStorageChanges:c=!0,writeDefaults:u=!0,mergeDefaults:d=!1,shallow:p,window:m=bt,eventFilter:h,onError:f=M=>{console.error(M)},initOnMounted:g}=s,E=(p?le:q)(typeof t=="function"?t():t);if(!a)try{a=Mf("getDefaultStorage",()=>{var M;return(M=bt)==null?void 0:M.localStorage})()}catch(M){f(M)}if(!a)return E;const k=Fe(t),y=Hf(k),T=(i=s.serializer)!=null?i:Nf[y],{pause:b,resume:j}=Sf(E,()=>C(E.value),{flush:n,deep:o,eventFilter:h});return m&&c&&Ns(()=>{ve(m,"storage",O),ve(m,ul,V),g&&O()}),g||O(),E;function C(M){try{const B=a.getItem(e),Q=N=>{m&&m.dispatchEvent(new CustomEvent(ul,{detail:{key:e,oldValue:B,newValue:N,storageArea:a}}))};if(M==null)Q(null),a.removeItem(e);else{const N=T.write(M);B!==N&&(a.setItem(e,N),Q(N))}}catch(B){f(B)}}function A(M){const B=M?M.newValue:a.getItem(e);if(B==null)return u&&k!=null&&a.setItem(e,T.write(k)),k;if(!M&&d){const Q=T.read(B);return typeof d=="function"?d(Q,k):y==="object"&&!Array.isArray(Q)?{...k,...Q}:Q}else return typeof B!="string"?B:T.read(B)}function V(M){O(M.detail)}function O(M){if(!(M&&M.storageArea!==a)){if(M&&M.key==null){E.value=k;return}if(!(M&&M.key!==e)){b();try{(M==null?void 0:M.newValue)!==T.write(E.value)&&(E.value=A(M))}catch(B){f(B)}finally{M?Ft(j):j()}}}}}function zf(e){return hu("(prefers-color-scheme: dark)",e)}function Tn(e,t,a={}){const{window:s=bt,...i}=a;let n;const o=ts(()=>s&&"MutationObserver"in s),c=()=>{n&&(n.disconnect(),n=void 0)},u=_(()=>{const h=Fe(e),f=(Array.isArray(h)?h:[h]).map(Qe).filter(yf);return new Set(f)}),d=re(()=>u.value,h=>{c(),o.value&&s&&h.size&&(n=new MutationObserver(t),h.forEach(f=>n.observe(f,i)))},{immediate:!0,flush:"post"}),p=()=>n==null?void 0:n.takeRecords(),m=()=>{c(),d()};return la(m),{isSupported:o,stop:m,takeRecords:p}}function Bf(e,t,a={}){const{window:s=bt,...i}=a;let n;const o=ts(()=>s&&"ResizeObserver"in s),c=()=>{n&&(n.disconnect(),n=void 0)},u=_(()=>Array.isArray(e)?e.map(m=>Qe(m)):[Qe(e)]),d=re(u,m=>{if(c(),o.value&&s){n=new ResizeObserver(t);for(const h of m)h&&n.observe(h,i)}},{immediate:!0,flush:"post"}),p=()=>{c(),d()};return la(p),{isSupported:o,stop:p}}function Ff(e,t={width:0,height:0},a={}){const{window:s=bt,box:i="content-box"}=a,n=_(()=>{var m,h;return(h=(m=Qe(e))==null?void 0:m.namespaceURI)==null?void 0:h.includes("svg")}),o=q(t.width),c=q(t.height),{stop:u}=Bf(e,([m])=>{const h=i==="border-box"?m.borderBoxSize:i==="content-box"?m.contentBoxSize:m.devicePixelContentBoxSize;if(s&&n.value){const f=Qe(e);if(f){const g=s.getComputedStyle(f);o.value=Number.parseFloat(g.width),c.value=Number.parseFloat(g.height)}}else if(h){const f=Array.isArray(h)?h:[h];o.value=f.reduce((g,{inlineSize:E})=>g+E,0),c.value=f.reduce((g,{blockSize:E})=>g+E,0)}else o.value=m.contentRect.width,c.value=m.contentRect.height},a);Ns(()=>{const m=Qe(e);m&&(o.value="offsetWidth"in m?m.offsetWidth:t.width,c.value="offsetHeight"in m?m.offsetHeight:t.height)});const d=re(()=>Qe(e),m=>{o.value=m?t.width:0,c.value=m?t.height:0});function p(){u(),d()}return{width:o,height:c,stop:p}}const dl=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function An(e,t={}){const{document:a=xn,autoExit:s=!1}=t,i=_(()=>{var y;return(y=Qe(e))!=null?y:a==null?void 0:a.querySelector("html")}),n=q(!1),o=_(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(y=>a&&y in a||i.value&&y in i.value)),c=_(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(y=>a&&y in a||i.value&&y in i.value)),u=_(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(y=>a&&y in a||i.value&&y in i.value)),d=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(y=>a&&y in a),p=ts(()=>i.value&&a&&o.value!==void 0&&c.value!==void 0&&u.value!==void 0),m=()=>d?(a==null?void 0:a[d])===i.value:!1,h=()=>{if(u.value){if(a&&a[u.value]!=null)return a[u.value];{const y=i.value;if((y==null?void 0:y[u.value])!=null)return!!y[u.value]}}return!1};async function f(){if(!(!p.value||!n.value)){if(c.value)if((a==null?void 0:a[c.value])!=null)await a[c.value]();else{const y=i.value;(y==null?void 0:y[c.value])!=null&&await y[c.value]()}n.value=!1}}async function g(){if(!p.value||n.value)return;h()&&await f();const y=i.value;o.value&&(y==null?void 0:y[o.value])!=null&&(await y[o.value](),n.value=!0)}async function E(){await(n.value?f():g())}const k=()=>{const y=h();(!y||y&&m())&&(n.value=y)};return ve(a,dl,k,!1),ve(()=>Qe(i),dl,k,!1),s&&la(f),{isSupported:p,isFullscreen:n,enter:g,exit:f,toggle:E}}function mi(e){return typeof Window<"u"&&e instanceof Window?e.document.documentElement:typeof Document<"u"&&e instanceof Document?e.documentElement:e}function x3(e,t,a={}){const{window:s=bt}=a;return Fr(e,t,s==null?void 0:s.localStorage,a)}function La(e,t=St,a={}){const{immediate:s=!0,manual:i=!1,type:n="text/javascript",async:o=!0,crossOrigin:c,referrerPolicy:u,noModule:d,defer:p,document:m=xn,attrs:h={}}=a,f=q(null);let g=null;const E=T=>new Promise((b,j)=>{const C=O=>(f.value=O,b(O),O);if(!m){b(!1);return}let A=!1,V=m.querySelector(`script[src="${Fe(e)}"]`);V?V.hasAttribute("data-loaded")&&C(V):(V=m.createElement("script"),V.type=n,V.async=o,V.src=Fe(e),p&&(V.defer=p),c&&(V.crossOrigin=c),d&&(V.noModule=d),u&&(V.referrerPolicy=u),Object.entries(h).forEach(([O,M])=>V==null?void 0:V.setAttribute(O,M)),A=!0),V.addEventListener("error",O=>j(O)),V.addEventListener("abort",O=>j(O)),V.addEventListener("load",()=>{V.setAttribute("data-loaded","true"),t(V),C(V)}),A&&(V=m.head.appendChild(V)),T||C(V)}),k=(T=!0)=>(g||(g=E(T)),g),y=()=>{if(!m)return;g=null,f.value&&(f.value=null);const T=m.querySelector(`script[src="${Fe(e)}"]`);T&&m.head.removeChild(T)};return s&&!i&&Ns(k),i||Pf(y),{scriptTag:f,load:k,unload:y}}function fu(e){const t=window.getComputedStyle(e);if(t.overflowX==="scroll"||t.overflowY==="scroll"||t.overflowX==="auto"&&e.clientWidth<e.scrollWidth||t.overflowY==="auto"&&e.clientHeight<e.scrollHeight)return!0;{const a=e.parentNode;return!a||a.tagName==="BODY"?!1:fu(a)}}function $f(e){const t=e||window.event,a=t.target;return fu(a)?!1:t.touches.length>1?!0:(t.preventDefault&&t.preventDefault(),!1)}const rr=new WeakMap;function jn(e,t=!1){const a=q(t);let s=null,i;re(jf(e),c=>{const u=mi(Fe(c));if(u){const d=u;rr.get(d)||rr.set(d,i),a.value&&(d.style.overflow="hidden")}},{immediate:!0});const n=()=>{const c=mi(Fe(e));!c||a.value||(zi&&(s=ve(c,"touchmove",u=>{$f(u)},{passive:!1})),c.style.overflow="hidden",a.value=!0)},o=()=>{var c;const u=mi(Fe(e));!u||!a.value||(zi&&(s==null||s()),u.style.overflow=(c=rr.get(u))!=null?c:"",rr.delete(u),a.value=!1)};return la(o),_({get(){return a.value},set(c){c?n():o()}})}let qf=0;function Wf(e,t={}){const a=q(!1),{document:s=xn,immediate:i=!0,manual:n=!1,id:o=`vueuse_styletag_${++qf}`}=t,c=q(e);let u=()=>{};const d=()=>{if(!s)return;const m=s.getElementById(o)||s.createElement("style");m.isConnected||(m.id=o,t.media&&(m.media=t.media),s.head.appendChild(m)),!a.value&&(u=re(c,h=>{m.textContent=h},{immediate:!0}),a.value=!0)},p=()=>{!s||!a.value||(u(),s.head.removeChild(s.getElementById(o)),a.value=!1)};return i&&!n&&Ns(d),n||la(p),{id:o,css:c,unload:p,load:d,isLoaded:oa(a)}}function Gf(e={}){const{window:t=bt,behavior:a="auto"}=e;if(!t)return{x:q(0),y:q(0)};const s=q(t.scrollX),i=q(t.scrollY),n=_({get(){return s.value},set(c){scrollTo({left:c,behavior:a})}}),o=_({get(){return i.value},set(c){scrollTo({top:c,behavior:a})}});return ve(t,"scroll",()=>{s.value=t.scrollX,i.value=t.scrollY},{capture:!1,passive:!0}),{x:n,y:o}}function Uf(e={}){const{window:t=bt,initialWidth:a=Number.POSITIVE_INFINITY,initialHeight:s=Number.POSITIVE_INFINITY,listenOrientation:i=!0,includeScrollbar:n=!0}=e,o=q(a),c=q(s),u=()=>{t&&(n?(o.value=t.innerWidth,c.value=t.innerHeight):(o.value=t.document.documentElement.clientWidth,c.value=t.document.documentElement.clientHeight))};if(u(),Ns(u),ve("resize",u,{passive:!0}),i){const d=hu("(orientation: portrait)");re(d,()=>u())}return{width:o,height:c}}var Jf=D({name:"VidStack",props:{sources:{type:Array,default:()=>[]},tracks:{type:Array,default:()=>[]}},setup(e,{attrs:t}){return ie(async()=>{await Promise.all([r(()=>import("./vidstack-player-CvSJCBYb.js"),__vite__mapDeps([1189,1190])),r(()=>import("./vidstack-player-layouts-zB0QUYwG.js"),__vite__mapDeps([1191,1190,1192])),r(()=>import("./vidstack-player-ui-VHYGs75p.js"),__vite__mapDeps([1193,1190,1192]))])}),()=>l("media-player",t,[l("media-provider",[t.poster?l("media-poster",{class:"vds-poster",alt:t.alt||t.title}):null,e.sources.map(a=>yt(a)?l("source",a):l("source",{src:a})),e.tracks.map(a=>l("track",a))]),l("media-audio-layout"),l("media-video-layout",t)])}}),Kf=D({name:"FontIcon",props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:[String,Number],default:""}},setup(e){const t=_(()=>{const s=["font-icon icon"],i=`${e.icon}`;return s.push(i),s}),a=_(()=>{const s={};return e.color&&(s.color=e.color),e.size&&(s["font-size"]=Number.isNaN(Number(e.size))?e.size:`${e.size}px`),nt(s).length?s:null});return()=>e.icon?l("span",{key:e.icon,class:t.value,style:a.value}):null}});const wu=({type:e="info",text:t="",vertical:a,color:s},{slots:i})=>{var n;return l("span",{class:["vp-badge",e,{diy:s}],style:{verticalAlign:a??!1,backgroundColor:s??!1}},((n=i.default)==null?void 0:n.call(i))||t)};wu.displayName="Badge";const ne=({name:e="",color:t="currentColor"},{slots:a})=>{var s;return l("svg",{xmlns:"http://www.w3.org/2000/svg",class:["icon",`${e}-icon`],viewBox:"0 0 1024 1024",fill:t,"aria-label":`${e} icon`},(s=a.default)==null?void 0:s.call(a))};ne.displayName="IconBase";const ca=({size:e=48,stroke:t=4,wrapper:a=!0,height:s=2*e})=>{const i=l("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,preserveAspectRatio:"xMidYMid",viewBox:"25 25 50 50"},[l("animateTransform",{attributeName:"transform",type:"rotate",dur:"2s",keyTimes:"0;1",repeatCount:"indefinite",values:"0;360"}),l("circle",{cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":t,"stroke-linecap":"round"},[l("animate",{attributeName:"stroke-dasharray",dur:"1.5s",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"1,200;90,200;1,200"}),l("animate",{attributeName:"stroke-dashoffset",dur:"1.5s",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"0;-35px;-125px"})])]);return a?l("div",{class:"loading-icon-wrapper",style:`display:flex;align-items:center;justify-content:center;height:${s}px`},i):i};ca.displayName="LoadingIcon";const gu=(e,{slots:t})=>{var a;return(a=t.default)==null?void 0:a.call(t)},In=()=>l(ne,{name:"github"},()=>l("path",{d:"M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z"}));In.displayName="GitHubIcon";const Ln=()=>l(ne,{name:"gitlab"},()=>l("path",{d:"M229.333 78.688C223.52 62 199.895 62 193.895 78.688L87.958 406.438h247.5c-.188 0-106.125-327.75-106.125-327.75zM33.77 571.438c-4.875 15 .563 31.687 13.313 41.25l464.812 345L87.77 406.438zm301.5-165 176.813 551.25 176.812-551.25zm655.125 165-54-165-424.312 551.25 464.812-345c12.938-9.563 18.188-26.25 13.5-41.25zM830.27 78.688c-5.812-16.688-29.437-16.688-35.437 0l-106.125 327.75h247.5z"}));Ln.displayName="GitLabIcon";const Sn=()=>l(ne,{name:"gitee"},()=>l("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z"}));Sn.displayName="GiteeIcon";const Pn=()=>l(ne,{name:"bitbucket"},()=>l("path",{d:"M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z"}));Pn.displayName="BitbucketIcon";const Dn=()=>l(ne,{name:"source"},()=>l("path",{d:"M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z"}));Dn.displayName="SourceIcon";function Qf(){const e=q(!1);return Aa()&&ie(()=>{e.value=!0}),e}function Yf(e){return Qf(),_(()=>!!e())}const Zf=()=>Yf(()=>typeof window<"u"&&window.navigator&&"userAgent"in window.navigator),Xf=()=>{const e=Zf();return _(()=>e.value&&/\b(?:Android|iPhone)/i.test(navigator.userAgent))},e1=e=>/\b(?:Android|iPhone)/i.test(e),t1=e=>/version\/([\w.]+) .*(mobile ?safari|safari)/i.test(e),vu=e=>[/\((ipad);[-\w),; ]+apple/i,/applecoremedia\/[\w.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i].some(t=>t.test(e)),a1=e=>[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i].some(t=>t.test(e)),s1=e=>[/(mac os x) ?([\w. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i].some(t=>t.test(e)),$r=(e,t)=>{let a=1;for(let s=0;s<e.length;s++)a+=e.charCodeAt(s),a+=a<<10,a^=a>>6;return a+=a<<3,a^=a>>11,a%t};let r1=class{constructor(){this.messageElements={};const t="message-container",a=document.getElementById(t);a?this.containerElement=a:(this.containerElement=document.createElement("div"),this.containerElement.id=t,document.body.appendChild(this.containerElement))}pop(t,a=2e3){const s=document.createElement("div"),i=Date.now();return s.className="message move-in",s.innerHTML=t,this.containerElement.appendChild(s),this.messageElements[i]=s,a>0&&setTimeout(()=>{this.close(i)},a),i}close(t){if(t){const a=this.messageElements[t];a.classList.remove("move-in"),a.classList.add("move-out"),a.addEventListener("animationend",()=>{a.remove(),delete this.messageElements[t]})}else nt(this.messageElements).forEach(a=>this.close(Number(a)))}destroy(){document.body.removeChild(this.containerElement)}};const yu=/#.*$/u,i1=e=>{const t=yu.exec(e);return t?t[0]:""},pl=e=>decodeURI(e).replace(yu,"").replace(/\/index\.html$/iu,"/").replace(/\.html$/iu,"").replace(/(README|index)?\.md$/iu,""),_u=(e,t)=>{if(!bn(t))return!1;const a=pl(e.path),s=pl(t),i=i1(t);return i?i===e.hash&&(!s||a===s):a===s};let n1=class{constructor(){this.popupElements={};const t="popup-container",a=document.getElementById(t);a?this.containerElement=a:(this.containerElement=document.createElement("div"),this.containerElement.id=t,document.body.appendChild(this.containerElement))}emit(t,a){const s=document.createElement("div"),i=document.createElement("div"),n=Date.now();return this.containerElement.appendChild(s),this.popupElements[n]=s,s.className="popup-wrapper appear",s.appendChild(i),s.addEventListener("click",()=>this.close(n)),i.className="popup-container",i.innerHTML=t,typeof a=="number"&&setTimeout(()=>{this.close(n)},a),n}close(t){if(t){const a=this.popupElements[t];a.classList.replace("appear","disappear"),a.children[0].addEventListener("animationend",()=>{a.remove(),delete this.popupElements[t]})}else nt(this.popupElements).forEach(a=>this.close(Number(a)))}destroy(){document.body.removeChild(this.containerElement)}};const o1=e=>Et(e)?e:`https://github.com/${e}`,On=e=>!Et(e)||/github\.com/.test(e)?"GitHub":/bitbucket\.org/.test(e)?"Bitbucket":/gitlab\.com/.test(e)?"GitLab":/gitee\.com/.test(e)?"Gitee":null,l1=()=>{const{availWidth:e,availHeight:t}=screen,{screenLeft:a,screenTop:s,innerWidth:i,innerHeight:n}=window,o=Math.max(e/2,600),c=Math.max(t/2,400);return{width:o,height:c,left:a+i/2-o/2,top:s+n/2-c/2}},c1=(e,t="_blank",a=["resizable","status"])=>{var c,u;const{width:s,height:i,left:n,top:o}=l1();(u=(c=window.open(e,t,`width=${s},height=${i},left=${n},top=${o},${a.join(",")}`))==null?void 0:c.focus)==null||u.call(c)};var u1=e=>Object.prototype.toString.call(e)==="[object Object]",js=e=>typeof e=="string";const bu=Array.isArray,ml=e=>u1(e)&&js(e.name),Is=(e,t=!1)=>e?bu(e)?e.map(a=>js(a)?{name:a}:ml(a)?a:null).filter(a=>a!==null):js(e)?[{name:e}]:ml(e)?[e]:(console.error(`Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string ${t?"":"| false"} | undefined\`, but got`,e),[]):[],Eu=(e,t)=>{if(e){if(bu(e)&&e.every(js))return e;if(js(e))return[e];console.error(`Expect ${t||"value"} to be \`string[] | string | undefined\`, but got`,e)}return[]},ku=e=>Eu(e,"category"),xu=e=>Eu(e,"tag");var d1=[{name:"twitter",link:"https://twitter.com/intent/tweet?text=[title]&url=[url]&hashtags=[tags][title]",color:"#000",shape:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="m587 451 291-339h-69L555 407 354 112H120l305 446-305 354h68l268-310 213 310h235zM214 163h107l488 699H702z"/></svg>'},{name:"facebook",link:"https://www.facebook.com/sharer/sharer.php?u=[url]&title=[title]&description=[description]&quote=[summary]&hashtag=[tags]",color:"#3c599b",shape:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M295 360h93v-91c0-40 1-101 30-139 30-41 72-68 144-68 118 0 168 17 168 17l-24 138s-39-12-75-12-69 13-69 50v105h149l-10 134H562v468H388V494h-93z"/></svg>'},{name:"reddit",link:"https://www.reddit.com/submit?title=[title]&url=[url]",color:"#ff4501",shape:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M678 779c9 9 9 18 0 27-34 37-90 55-166 55s-132-18-166-55c-9-9-9-18 0-27a17 17 0 0 1 12-6c5 0 9 2 13 6 26 29 74 43 141 43s114-14 141-43a17 17 0 0 1 13-6c5 0 9 2 12 6M400 562a82 82 0 0 1 0 112 70 70 0 0 1-53 23c-20 0-38-8-53-23a78 78 0 0 1-22-56c0-22 7-41 22-56a71 71 0 0 1 106 0m352 56c0 22-7 41-22 56a71 71 0 0 1-53 23c-21 0-38-8-53-23a78 78 0 0 1-22-56c0-22 8-40 22-56 15-16 32-23 53-23 20 0 38 7 53 23 15 15 22 34 22 56m210-106c0-29-10-54-29-74a94 94 0 0 0-71-31c-28 0-52 10-72 31-73-53-160-81-260-85l52-250 168 40c0 21 7 40 21 55 15 16 32 23 53 23s38-7 53-23 22-34 22-56-7-41-22-57a71 71 0 0 0-53-23c-30 0-52 15-67 44L572 63c-10-3-17 2-21 14l-57 276c-101 5-187 33-259 86a94 94 0 0 0-73-32c-28 0-51 10-71 31a105 105 0 0 0-29 74 108 108 0 0 0 57 96 241 241 0 0 0-5 49c0 84 39 156 117 216 78 59 172 89 282 89s205-30 283-89c78-60 117-132 117-216 0-19-2-35-6-50a108 108 0 0 0 55-95"/></svg>'},{name:"telegram",link:"https://t.me/share/url?url=[url]&text=[title]%0D%0A[description|summary]",color:"#158cc7",shape:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="m413 807 13-187 340-307c15-14-3-21-23-8L323 570l-183-58c-39-11-39-38 9-57l709-274c33-14 64 8 51 58L788 807c-8 40-33 50-66 31L538 703l-88 85c-10 10-19 19-37 19"/></svg>'},{name:"whatsapp",link:"https://api.whatsapp.com/send?text=[title]%0D%0A[url]%0D%0A[description|summary]",color:"#31B84C",shape:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="m62 962 64-231a444 444 0 0 1-60-223 448 448 0 0 1 765-315 442 442 0 0 1 131 315c0 246-201 446-448 446a449 449 0 0 1-214-54zm340-640c-9-22-18-19-25-20h-22a41 41 0 0 0-30 14c-10 11-39 38-39 93s40 108 46 115c6 8 79 120 191 168 27 12 48 19 64 24 27 8 51 7 71 4 21-3 66-27 75-53s9-48 7-53c-3-4-11-7-22-13l-76-36c-11-4-18-5-26 6-7 11-28 36-35 43-6 8-13 9-24 3-11-5-47-17-90-55-34-30-56-66-63-77-6-12 0-18 5-23l17-20c6-6 8-11 11-18 4-8 2-14-1-20l-34-83z"/></svg>'},{name:"email",link:"mailto:?subject=[title]&body=[url]%0D%0A%0D%0A[description|summary]",color:"#1384FF",action:"open",shape:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M152 177h720c49 0 89 37 90 83L512 494 63 260c0-46 40-83 89-83M62 349v414c0 46 41 84 90 84h720c49 0 90-38 90-84V349L523 572a24 24 0 0 1-22 0z"/></svg>'}];const ir=e=>{var t;return((t=document.querySelector(`meta[name="${e}"]`))==null?void 0:t.getAttribute("content"))??null},hl=(e,t="")=>{const a=["vp-share-icon",t];return Et(e)||Ms(e)?l("img",{class:a,src:e,loading:"lazy","no-view":""}):ka(e,"<")&&lu(e,">")?l("div",{class:a,innerHTML:e}):l("div",{class:[...a,e]})};var p1=D({name:"ShareService",props:{config:{type:Object,default:()=>({})},plain:Boolean,title:{type:String,required:!1},description:{type:String,required:!1},url:{type:String,required:!1},summary:{type:String,required:!1},cover:{type:String,required:!1},tag:{type:[Array,String],required:!1}},setup(e){let t;const a=we(),s=ye(),i=q(!1),n=()=>{var g;const c=e.title??a.value.title,u=e.description??s.value.description??ir("description")??ir("og:description")??ir("twitter:description"),d=e.url??typeof window>"u"?null:window.location.href,p=e.cover??ir("og:image"),m=(g=document.querySelector(".theme-default-content :not(a) > img"))==null?void 0:g.getAttribute("src"),h=e.tag??s.value.tag??s.value.tags,f=As(h)?h.filter(ke).join(","):ke(h)?h:null;return e.config.link.replace(/\[([^\]]+)\]/g,(E,k)=>{const y=k.split("|");for(const T of y){if(T==="url"&&d)return d;if(T==="title"&&c)return c;if(T==="description"&&u)return u;if(T==="summary"&&e.summary)return e.summary;if(T==="cover"&&p)return p;if(T==="image"&&m)return m;if(T==="tags"&&f)return f}return""})},o=()=>{const c=n();switch(e.config.action){case"navigate":window.open(c);break;case"open":window.open(c,"_blank");break;case"qrcode":r(()=>import("./browser-D6eOinvE.js").then(u=>u.b),__vite__mapDeps([])).then(({toDataURL:u})=>u(c,{errorCorrectionLevel:"H",width:250,scale:1,margin:1.5})).then(u=>{t.emit(`<img src="${u}" alt="qrcode" class="share-qrcode" />`)});break;default:c1(c,"share")}};return ie(()=>{t=new n1}),()=>{const{config:{name:c,icon:u,shape:d,color:p},plain:m}=e;return[l("button",{type:"button",class:["vp-share-button",{plain:m}],"aria-label":c,"data-balloon-pos":"up",onClick:()=>o()},m?hl(d,"plain"):u?hl(u):l("div",{class:"vp-share-icon colorful",style:{background:p},innerHTML:d})),i.value?l("div",{class:"share-popup"}):null]}}});const fl=d1;var m1=D({name:"Share",props:{services:{type:[String,Array],default:()=>fl.map(({name:e})=>e)},titleGetter:{type:Function,default:e=>e.title},descriptionGetter:{type:Function,default:e=>e.frontmatter.description},summaryGetter:{type:Function,default:e=>e.summary},coverGetter:{type:Function,default:e=>e.cover},tagGetter:{type:Function,default:({frontmatter:e})=>e.tag||e.tags},inline:Boolean,colorful:Boolean},setup(e){const t=we(),a=_(()=>(ke(e.services)?e.services.split(","):e.services).map(i=>yt(i)?i.name&&i.link?i:null:fl.find(({name:n})=>n===i)).filter(i=>!!i)),s=_(()=>{const i={};return["titleGetter","descriptionGetter","summaryGetter","coverGetter","tagGetter"].forEach(n=>{if(Bc(e[n])){const o=e[n](t.value);o&&(i[n.replace("Getter","")]=o)}}),i});return()=>l("div",{class:"vp-share-buttons",style:e.inline?{display:"inline-block"}:{}},a.value.map(i=>l(p1,{config:i,...s.value,plain:!e.colorful})))}});const wl=e=>ke(e)?e:`${e}px`,h1=(e,t=0)=>{const a=le(),s=_(()=>wl(gt(e.width)||"100%")),i=q("auto"),n=u=>{if(ke(u)){const[d,p]=u.split(":"),m=Number(d)/Number(p);if(!Number.isNaN(m))return m}return typeof u=="number"?u:16/9},o=u=>{const d=gt(e.height),p=n(gt(e.ratio));return d?wl(d):`${Number(u)/p+gt(t)}px`},c=()=>{a.value&&(i.value=o(a.value.clientWidth))};return ie(()=>{c(),He(t)&&re(t,c),ve("orientationchange",c),ve("resize",c)}),{el:a,width:s,height:i,resize:c}},f1=e=>Et(e)?e:Ee(e);var w1={"/":{hint:"<p>This browser does not support embedding PDFs. Please download the PDF to view it: <a href='[url]' target='_blank'>Download PDF</a></p>"}};const hi=e=>{console.error(`[PDF]: ${e}`)},g1=e=>{for(;e.firstChild;)e.removeChild(e.firstChild)},v1=e=>e==="string"?document.querySelector(e):e instanceof HTMLElement?e:document.body,y1=e=>{let t="";return e&&(t+=qt(e).map(([a,s])=>a==="noToolbar"?`toolbar=${s?0:1}`:`${encodeURIComponent(a)}=${encodeURIComponent(s)}`).join("&"),t&&(t=`#${t.slice(0,t.length-1)}`)),t},_1=(e,t,a,s,i)=>{g1(t);const n=`${e==="pdfjs"?`${fn(Ee(null))}web/viewer.html?file=${encodeURIComponent(a)}`:a}${y1(s)}`,o=e==="pdfjs"||e==="iframe"?"iframe":"embed",c=document.createElement(o);return c.className="pdf-viewer",c.type="application/pdf",c.title=i,c.src=n,c instanceof HTMLIFrameElement&&(c.allow="fullscreen"),t.classList.add("pdf-viewer-container"),t.appendChild(c),t.getElementsByTagName(o)[0]},b1=(e,t,{title:a,hint:s,options:i={}})=>{var g,E;if(typeof window>"u"||!((g=window==null?void 0:window.navigator)!=null&&g.userAgent))return null;const{navigator:n}=window,{userAgent:o}=n,c=bn(window.Promise),u=vu(o)||e1(o),d=!u&&t1(o),p=!u&&/firefox/iu.test(o)&&o.split("rv:").length>1?parseInt(o.split("rv:")[1].split(".")[0],10)>18:!1,m=!u&&(c||p);if(!ke(e))return hi("URL is not valid"),null;const h=v1(t);if(!h)return hi("Target element cannot be determined"),null;const f=a||((E=/\/([^/]+).pdf/.exec(e))==null?void 0:E[1])||"PDF Viewer";return m||!u?_1(d?"iframe":"embed",h,e,i,f):(h.innerHTML=s.replace(/\[url\]/g,e),hi("This browser does not support embedded PDFs"),null)};var E1=D({name:"PDF",props:{url:{type:String,required:!0},title:{type:String,default:""},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:void 0},ratio:{type:[String,Number],default:16/9},page:{type:[String,Number],default:1},noToolbar:Boolean,zoom:{type:[String,Number],default:100}},setup(e){const{el:t,width:a,height:s,resize:i}=h1(e),n=xt(w1);return ie(()=>{b1(f1(e.url),t.value,{title:e.title,hint:n.value.hint,options:{page:e.page,noToolbar:e.noToolbar,zoom:e.zoom}}),i()}),()=>l("div",{class:"pdf-viewer-wrapper",ref:t,style:{width:a.value,height:s.value}})}}),k1={"/":{source:"Source"}},x1=D({name:"SiteInfo",components:{BitbucketIcon:Pn,GiteeIcon:Sn,GitHubIcon:In,GitLabIcon:Ln,SourceIcon:Dn},props:{name:{type:String,required:!0},desc:{type:String,default:""},logo:{type:String,default:""},url:{type:String,required:!0},preview:{type:String,required:!0},repo:{type:String,default:""}},setup(e){const t=xt(k1),a=_(()=>e.repo?On(e.repo):null);return()=>l("div",{class:"vp-site-info","data-name":e.name},[l("a",{class:"vp-site-info-navigator",title:e.name,href:e.url,target:"_blank"}),l("div",{class:"vp-site-info-preview",style:{background:`url(${Ee(e.preview)}) center/cover no-repeat`}}),l("div",{class:"vp-site-info-detail"},[e.logo?l("img",{class:"vp-site-info-logo",src:e.logo,alt:"",loading:"lazy","no-view":""}):null,l("div",{class:"vp-site-info-name"},e.name),l("div",{class:"vp-site-info-desc"},e.desc)]),e.repo?l("div",{class:"vp-site-info-source-wrapper"},l("a",{class:"vp-site-info-source",href:e.repo,"aria-label":t.value.source,"data-balloon-pos":"left",title:t.value.source,target:"_blank"},l(st(`${a.value}Icon`)))):null])}});const Tu=({title:e,desc:t="",logo:a,background:s,color:i,link:n})=>{const o=[a?l("img",{class:"vp-card-logo",src:Ee(a),loading:"lazy","no-view":""}):null,l("div",{class:"vp-card-content"},[l("div",{class:"vp-card-title",innerHTML:e}),l("hr"),l("div",{class:"vp-card-desc",innerHTML:t})])],c={};return s&&(c.background=s),i&&(c.color=i),n?Ea(n)?l("a",{class:"vp-card",href:n,target:"_blank",style:c},o):l(Pe,{to:n,class:"vp-card",style:c},()=>o):l("div",{class:"vp-card",style:c},o)};Tu.displayName="VPCard";const Au=({title:e,content:t="",logo:a="",background:s="",color:i="",actions:n=[]})=>{const o={};return s&&(o.background=s),i&&(o.color=i),l("div",{class:"vp-banner",style:o},[a?l("img",{class:"vp-banner-logo",src:Ee(a),loading:"lazy","no-view":""}):null,l("div",{class:"vp-banner-body"},[l("div",{class:"vp-banner-title",innerHTML:e}),l("p",{class:"vp-banner-content",innerHTML:t}),l("div",{class:"vp-banner-actions"},[...n.map(({link:c,text:u,type:d="primary"})=>Ea(c)?l("a",{class:["vp-banner-action",d],href:c,target:"_blank"},u):l(Pe,{class:["vp-banner-action",d],to:c},()=>u))])])])};Au.displayName="VPBanner";const T1=Xe({enhance:({app:e})=>{$e("VidStack")||e.component("VidStack",Jf),$e("FontIcon")||e.component("FontIcon",Kf),$e("Badge")||e.component("Badge",wu),$e("Share")||e.component("Share",m1),$e("PDF")||e.component("PDF",E1),$e("SiteInfo")||e.component("SiteInfo",x1),$e("VPCard")||e.component("VPCard",Tu),$e("VPBanner")||e.component("VPBanner",Au)},setup:()=>{Wf(`  @import url("https://at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css");
  `),La("https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/solid.min.js",()=>{},{attrs:{"data-auto-replace-svg":"nest"}}),La("https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/fontawesome.min.js",()=>{},{attrs:{"data-auto-replace-svg":"nest"}}),La("https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/brands.min.js",()=>{},{attrs:{"data-auto-replace-svg":"nest"}}),La("https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/solid.min.js",()=>{},{attrs:{"data-auto-replace-svg":"nest"}}),La("https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/fontawesome.min.js",()=>{},{attrs:{"data-auto-replace-svg":"nest"}}),La("https://cdn.jsdelivr.net/npm/iconify-icon@1")},rootComponents:[]}),gl=async(e,t)=>{const{path:a,query:s}=e.currentRoute.value,{scrollBehavior:i}=e.options;e.options.scrollBehavior=void 0,await e.replace({path:a,query:s,hash:t}),e.options.scrollBehavior=i},A1=({headerLinkSelector:e,headerAnchorSelector:t,delay:a,offset:s=5})=>{const i=Ot();ve("scroll",Br(()=>{var g,E;const o=Math.max(window.scrollY,document.documentElement.scrollTop,document.body.scrollTop);if(Math.abs(o-0)<s){gl(i,"");return}const u=window.innerHeight+o,d=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),p=Math.abs(d-u)<s,m=Array.from(document.querySelectorAll(e)),f=Array.from(document.querySelectorAll(t)).filter(k=>m.some(y=>y.hash===k.hash));for(let k=0;k<f.length;k++){const y=f[k],T=f[k+1],b=o>=(((g=y.parentElement)==null?void 0:g.offsetTop)??0)-s,j=!T||o<(((E=T.parentElement)==null?void 0:E.offsetTop)??0)-s;if(!(b&&j))continue;const A=decodeURIComponent(i.currentRoute.value.hash),V=decodeURIComponent(y.hash);if(A===V)return;if(p){for(let O=k+1;O<f.length;O++)if(A===decodeURIComponent(f[O].hash))return}gl(i,V);return}},a))},j1=".vp-sidebar-link, .toc-link",I1=".header-anchor",L1=200,S1=5,P1=Xe({setup(){A1({headerLinkSelector:j1,headerAnchorSelector:I1,delay:L1,offset:S1})}});let ju=e=>ke(e.title)?{title:e.title}:null;const Iu=Symbol(""),D1=e=>{ju=e},O1=()=>fe(Iu),R1=e=>{e.provide(Iu,ju)};var V1={"/":{title:"Catalog",empty:"No catalog"}};const C1=D({name:"Catalog",props:{base:{type:String,default:""},level:{type:Number,default:3},index:Boolean,hideHeading:Boolean},setup(e){const t=O1(),a=xt(V1),s=we(),i=J0(),n=Xc(),c=le(qt(i.value).map(([d,{meta:p}])=>{const m=t(p);if(!m)return null;const h=d.split("/").length;return{level:lu(d,"/")?h-2:h-1,base:d.replace(/\/[^/]+\/?$/,"/"),path:d,...m}}).filter(d=>yt(d)&&ke(d.title))),u=_(()=>{const d=e.base?Rh(fn(e.base)):s.value.path.replace(/\/[^/]+$/,"/"),p=d.split("/").length-2,m=[];return c.value.filter(({level:h,path:f})=>{if(!ka(f,d)||f===d)return!1;if(d==="/"){const g=nt(n.value.locales).filter(E=>E!=="/");if(f==="/404.html"||g.some(E=>ka(f,E)))return!1}return h-p<=e.level}).sort(({title:h,level:f,order:g},{title:E,level:k,order:y})=>{const T=f-k;return T||(pi(g)?pi(y)?g>0?y>0?g-y:-1:y<0?g-y:1:g:pi(y)?y:h.localeCompare(E))}).forEach(h=>{var E;const{base:f,level:g}=h;switch(g-p){case 1:{m.push(h);break}case 2:{const k=m.find(y=>y.path===f);k&&(k.children??(k.children=[])).push(h);break}default:{const k=m.find(y=>y.path===f.replace(/\/[^/]+\/$/,"/"));if(k){const y=(E=k.children)==null?void 0:E.find(T=>T.path===f);y&&(y.children??(y.children=[])).push(h)}}}}),m});return()=>{const d=u.value.some(p=>p.children);return l("div",{class:["vp-catalog-wrapper",{index:e.index}]},[e.hideHeading?null:l("h2",{class:"vp-catalog-main-title"},a.value.title),u.value.length?l(e.index?"ol":"ul",{class:["vp-catalogs",{deep:d}]},u.value.map(({children:p=[],title:m,path:h,content:f})=>{const g=l(Pe,{class:"vp-catalog-title",to:h},()=>f?l(f):m);return l("li",{class:"vp-catalog"},d?[l("h3",{id:m,class:["vp-catalog-child-title",{"has-children":p.length}]},[l("a",{href:`#${m}`,class:"vp-catalog-header-anchor","aria-hidden":!0},"#"),g]),p.length?l(e.index?"ol":"ul",{class:"vp-child-catalogs"},p.map(({children:E=[],content:k,path:y,title:T})=>l("li",{class:"vp-child-catalog"},[l("div",{class:["vp-catalog-sub-title",{"has-children":E.length}]},[l("a",{href:`#${T}`,class:"vp-catalog-header-anchor"},"#"),l(Pe,{class:"vp-catalog-title",to:y},()=>k?l(k):T)]),E.length?l(e.index?"ol":"div",{class:e.index?"vp-sub-catalogs":"vp-sub-catalogs-wrapper"},E.map(({content:b,path:j,title:C})=>e.index?l("li",{class:"vp-sub-catalog"},l(Pe,{to:j},()=>b?l(b):C)):l(Pe,{class:"vp-sub-catalog-link",to:j},()=>b?l(b):C))):null]))):null]:l("div",{class:"vp-catalog-child-title"},g))})):l("p",{class:"vp-empty-catalog"},a.value.empty)])}}}),M1=Xe({enhance:({app:e})=>{R1(e),$e("Catalog",e)||e.component("Catalog",C1)}});var H1={"/":{backToTop:"Back to top"}};const N1=D({name:"BackToTop",setup(e){const t=ye(),a=xt(H1),s=le(),{height:i}=Ff(s),{height:n}=Uf(),{y:o}=Gf(),c=_(()=>t.value.backToTop!==!1&&o.value>100),u=_(()=>o.value/(i.value-n.value)*100);return ie(()=>{s.value=document.body}),()=>l(ia,{name:"back-to-top"},()=>c.value?l("button",{type:"button",class:"vp-back-to-top-button","aria-label":a.value.backToTop,onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},[l("span",{class:"vp-scroll-progress",role:"progressbar","aria-labelledby":"loadinglabel","aria-valuenow":u.value},l("svg",l("circle",{cx:"50%",cy:"50%",style:{"stroke-dasharray":`calc(${Math.PI*u.value}% - ${4*Math.PI}px) calc(${Math.PI*100}% - ${4*Math.PI}px)`}}))),l("div",{class:"back-to-top-icon"})]):null)}}),z1=Xe({rootComponents:[N1]}),B1=l("svg",{class:"external-link-icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},[l("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),l("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})]),Lu=D({name:"ExternalLinkIcon",props:{locales:{type:Object,required:!1,default:()=>({})}},setup(e){const t=kt(),a=_(()=>e.locales[t.value]??{openInNewWindow:"open in new window"});return()=>l("span",[B1,l("span",{class:"external-link-icon-sr-only"},a.value.openInNewWindow)])}});var F1={};const $1=F1,q1=Xe({enhance({app:e}){e.component("ExternalLinkIcon",l(Lu,{locales:$1}))}});/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */const pe={settings:{minimum:.08,easing:"ease",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:"body",template:'<div class="bar" role="bar"></div>'},status:null,set:e=>{const t=pe.isStarted();e=fi(e,pe.settings.minimum,1),pe.status=e===1?null:e;const a=pe.render(!t),s=a.querySelector(pe.settings.barSelector),i=pe.settings.speed,n=pe.settings.easing;return a.offsetWidth,W1(o=>{nr(s,{transform:"translate3d("+vl(e)+"%,0,0)",transition:"all "+i+"ms "+n}),e===1?(nr(a,{transition:"none",opacity:"1"}),a.offsetWidth,setTimeout(function(){nr(a,{transition:"all "+i+"ms linear",opacity:"0"}),setTimeout(function(){pe.remove(),o()},i)},i)):setTimeout(()=>o(),i)}),pe},isStarted:()=>typeof pe.status=="number",start:()=>{pe.status||pe.set(0);const e=()=>{setTimeout(()=>{pe.status&&(pe.trickle(),e())},pe.settings.trickleSpeed)};return pe.settings.trickle&&e(),pe},done:e=>!e&&!pe.status?pe:pe.inc(.3+.5*Math.random()).set(1),inc:e=>{let t=pe.status;return t?(typeof e!="number"&&(e=(1-t)*fi(Math.random()*t,.1,.95)),t=fi(t+e,0,.994),pe.set(t)):pe.start()},trickle:()=>pe.inc(Math.random()*pe.settings.trickleRate),render:e=>{if(pe.isRendered())return document.getElementById("nprogress");yl(document.documentElement,"nprogress-busy");const t=document.createElement("div");t.id="nprogress",t.innerHTML=pe.settings.template;const a=t.querySelector(pe.settings.barSelector),s=e?"-100":vl(pe.status||0),i=document.querySelector(pe.settings.parent);return nr(a,{transition:"all 0 linear",transform:"translate3d("+s+"%,0,0)"}),i!==document.body&&yl(i,"nprogress-custom-parent"),i==null||i.appendChild(t),t},remove:()=>{_l(document.documentElement,"nprogress-busy"),_l(document.querySelector(pe.settings.parent),"nprogress-custom-parent");const e=document.getElementById("nprogress");e&&G1(e)},isRendered:()=>!!document.getElementById("nprogress")},fi=(e,t,a)=>e<t?t:e>a?a:e,vl=e=>(-1+e)*100,W1=function(){const e=[];function t(){const a=e.shift();a&&a(t)}return function(a){e.push(a),e.length===1&&t()}}(),nr=function(){const e=["Webkit","O","Moz","ms"],t={};function a(o){return o.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(c,u){return u.toUpperCase()})}function s(o){const c=document.body.style;if(o in c)return o;let u=e.length;const d=o.charAt(0).toUpperCase()+o.slice(1);let p;for(;u--;)if(p=e[u]+d,p in c)return p;return o}function i(o){return o=a(o),t[o]??(t[o]=s(o))}function n(o,c,u){c=i(c),o.style[c]=u}return function(o,c){for(const u in c){const d=c[u];d!==void 0&&Object.prototype.hasOwnProperty.call(c,u)&&n(o,u,d)}}}(),Su=(e,t)=>(typeof e=="string"?e:Rn(e)).indexOf(" "+t+" ")>=0,yl=(e,t)=>{const a=Rn(e),s=a+t;Su(a,t)||(e.className=s.substring(1))},_l=(e,t)=>{const a=Rn(e);if(!Su(e,t))return;const s=a.replace(" "+t+" "," ");e.className=s.substring(1,s.length-1)},Rn=e=>(" "+(e.className||"")+" ").replace(/\s+/gi," "),G1=e=>{e&&e.parentNode&&e.parentNode.removeChild(e)},U1=()=>{ie(()=>{const e=Ot(),t=new Set;t.add(e.currentRoute.value.path),e.beforeEach(a=>{t.has(a.path)||pe.start()}),e.afterEach(a=>{t.add(a.path),pe.done()})})},J1=Xe({setup(){U1()}}),K1=JSON.parse(`{"encrypt":{},"fullscreen":true,"logo":"/crashcourse/images/ico-school.svg","docsDir":"","lastUpdated":true,"footer":"MIT Licensed | Copyright © 2022-present <a href=\\"https://github.com/chanhi2000\\">Chan Hee Lee</a>","displayFooter":true,"locales":{"/":{"lang":"en-US","navbarLocales":{"langName":"English","selectLangAriaLabel":"Select language"},"metaLocales":{"author":"Author","date":"Writing Date","origin":"Original","views":"Page views","category":"Category","tag":"Tag","readingTime":"Reading Time","words":"Words","toc":"On This Page","prev":"Prev","next":"Next","lastUpdated":"Last update","contributors":"Contributors","editLink":"Edit this page","print":"Print"},"blogLocales":{"article":"Articles","articleList":"Article List","category":"Category","tag":"Tag","timeline":"Timeline","timelineTitle":"Yesterday Once More!","all":"All","intro":"Personal Intro","star":"Star","empty":"No $text"},"paginationLocales":{"prev":"Prev","next":"Next","navigate":"Jump to","action":"Go","errorText":"Please enter a number between 1 and $page !"},"outlookLocales":{"themeColor":"Theme Color","darkmode":"Theme Mode","fullscreen":"Full Screen"},"routeLocales":{"skipToContent":"Skip to main content","notFoundTitle":"Page not found","notFoundMsg":["There’s nothing here.","How did we get here?","That’s a Four-Oh-Four.","Looks like we've got some broken links."],"back":"Go back","home":"Take me home","openInNewWindow":"Open in new window"},"navbar":[{"text":"","icon":"iconfont icon-shell","children":[{"text":"Text Processing with GNU awk","link":"/cli/text-processing-w-gnu-awk/README.md","icon":"iconfont icon-shell"},{"text":"Mastering Curl - Interactive Text Guide","link":"/cli/mastering-curl-interactive-text-guide/README.md","icon":"iconfont icon-shell"},{"text":"Bash 쉘스크립트 개발 시작하기","link":"/cli/bash-dev/README.md","icon":"iconfont icon-shell"}]},{"text":"","icon":"fa-brands fa-swift","children":[{"text":"Learn essential Swift in one hour","icon":"fa-brands fa-swift","link":"/swift/learn-essential-swift-in-one-hour/README.md"},{"text":"100 Days of Swift","link":"/swift/100-days-of-swift/README.md","icon":"fa-brands fa-swift"},{"text":"100 Days of SwiftUI","link":"/swift/100-days-of-swiftui/README.md","icon":"fa-brands fa-swift"},{"text":"SwiftUI by Example","link":"/swift/swiftui-by-example/README.md","icon":"fa-brands fa-swift"},{"text":"Kodeco - Swift","link":"/swift/kodeco/README.md","icon":"fa-brands fa-swift"},{"text":"OSX 구조를 이해하면서 배우는 Objective-C","link":"/swift/shuokai-objc/README.md","icon":"fas fa-landmark"}]},{"text":"","icon":"fa-brands fa-java","children":[{"text":"Java8 in Action","link":"/java/java-8-in-action/README.md","icon":"fa-brands fa-java"},{"text":"Effective Java","link":"/java/effective-java/README.md","icon":"fa-brands fa-java"},{"text":"Kodeco - Android & Kotlin","link":"/java/kodeco/README.md","icon":"fa-brands fa-android"},{"text":"Jump to Spring Boot","link":"/java/jump-to-spring-boot/README.md","icon":"fa-brands fa-envira"},{"text":"스프링부트 개념과 활용","link":"/java/spring-boot-whiteship/README.md","icon":"fa-brands fa-envira"},{"text":"Java Web App with Quarkus and JPAStreamer","link":"/java/freecodecamp-quarkus-jpastreamer/README.md","icon":"iconfont icon-java"},{"text":"요즘 IT 블로그 - Java 관련","link":"/java/yozm/README.md","icon":"fa-brands fa-java"}]},{"text":"","icon":"fa-brands fa-js","children":[{"text":"Learn Typescript","link":"/js/learn-ts/README.md","icon":"iconfont icon-typescript"},{"text":"Must Know JavaScript API","link":"/js/must-know-javascript-api/README.md","icon":"fa-brands fa-js"},{"text":"Eloquent Javascript","link":"/js/eloquent-javascript/README.md","icon":"fa-brands fa-js"},{"text":"요즘 IT 블로그 - Javascript 관련","link":"/js/yozm/README.md","icon":"fa-brands fa-node-js"}]},{"text":"","icon":"fa-brands fa-python","children":[{"text":"Finance with Python","link":"/python/finance-w-python/README.md","icon":"fa-brands fa-python"},{"text":"사장님 몰래 하는 파이썬 업무자동화 (들키면 일 많아짐)","link":"/python/rpa-excel/README.md","icon":"fa-brands fa-python"}]},{"text":"","icon":"fa-brands fa-rust","children":[{"text":"freecodecamp.org - Rust by Practice","link":"/rust/freecodecamp-rust-by-practice/README.md","icon":"fa-brands fa-rust"},{"text":"Wasm by Example","link":"/rust/wasm-by-example/README.md","icon":"fa-brands fa-rust"},{"text":"Rust to Assembly","link":"/rust/eventhelix-rust-to-assembly/README.md","icon":"fa-brands fa-rust"}]},{"text":"","icon":"fa-brands fa-php","children":[{"text":"PHP 3분 핵심 요약집","link":"/php/three-min-summary/README.md","icon":"fa-brands fa-php"}]},{"text":"","icon":"fas fa-dice-two","children":[{"text":"Algorithms for Competitive Programming","link":"/cpp/algorithms-for-competitive-programming/README.md","icon":"fas fa-dice-two"}]},{"text":"","icon":"fas fa-gem","children":[{"text":"Jets - Learning Content","link":"/ruby/rubyonjets-learning-content/README.md","icon":"fas fa-gem"}]},{"text":"🐑","children":[{"text":"🐑Megaparsec tutorial","link":"/haskell/megaparsec/README.md"},{"text":"🐑Template Haskell tutorial","link":"/haskell/template-haskell/README.md"}]},{"text":"","icon":"fas fa-cubes-stacked","children":[{"text":"Red Hat Container Tools","link":"/devops/red-hat-container-tools/README.md","icon":"fa-brands fa-redhat"},{"text":"Containerize Your Application With Buildah And Podman","link":"/devops/red-hat-containerize-your-application-w-buildah-and-podman/README.md","icon":"fa-brands fa-redhat"},{"text":"freecodecamp.org - DevOps with GitLab CI","link":"/devops/freecodecamp-gitlab-ci/README.md","icon":"fa-brands fa-gitlab"},{"text":"DigitalOcean - Kubernetes","link":"/devops/digitalocean-kubernetes/README.md","icon":"fas fa-dharmachakra"},{"text":"아마존 웹 서비스를 다루는 기술 - 실무에서 필요한 AWS 클라우드의 모든 것!","link":"/devops/art-of-aws/README.md","icon":"fa-brands fa-aws"},{"text":"Linux Journey","link":"/devops/linux-journey/README.md","icon":"fa-brands fa-linux"},{"text":"CYL2002 - Digital Forensics Lab","link":"/devops/digital-forensics-lab/README.md","icon":"fas fa-shield-halved"},{"text":"요즘 IT 블로그 - DevOps 관련","link":"/devops/yozm/README.md","icon":"fas fa-cubes-stacked"}]},{"text":"","icon":"fas fa-object-group","children":[{"text":"Colt Steele - Mastering CSS Grid","link":"/misc/colt-steele-mastering-css-grid/README.md","icon":"fa-brands fa-css3-alt"},{"text":"Microsoft - Generative AI for Beginners","link":"/misc/llm-generative-ai-for-beginners/README.md","icon":"fas fa-brain"},{"text":"DB Server 성능 향상 분석 및 튜닝 전문가 향상과정","link":"/misc/oracle-sql-db-tuning/README.md","icon":"fas fa-database"}]}],"sidebar":{"/cli/":[{"text":"CLI","icon":"iconfont icon-shell","children":["/cli/README.md"]},{"text":"Text Processing with GNU awk","collapsible":true,"icon":"iconfont icon-shell","children":["/cli/text-processing-w-gnu-awk/README.md","/cli/text-processing-w-gnu-awk/01-installation-and-documentation.md","/cli/text-processing-w-gnu-awk/02-awk-introduction.md","/cli/text-processing-w-gnu-awk/03-regular-expressions.md","/cli/text-processing-w-gnu-awk/04-field-separators.md","/cli/text-processing-w-gnu-awk/05-record-separators.md","/cli/text-processing-w-gnu-awk/06-in-place-file-editing.md","/cli/text-processing-w-gnu-awk/07-using-shell-variables.md","/cli/text-processing-w-gnu-awk/08-control-structures.md","/cli/text-processing-w-gnu-awk/09-built-in-functions.md","/cli/text-processing-w-gnu-awk/10-multiple-file-input.md","/cli/text-processing-w-gnu-awk/11-processing-multiple-records.md","/cli/text-processing-w-gnu-awk/12-two-file-processing.md","/cli/text-processing-w-gnu-awk/13-dealing-with-duplicates.md","/cli/text-processing-w-gnu-awk/14-awk-scripts.md","/cli/text-processing-w-gnu-awk/15-gotchas-and-tips.md","/cli/text-processing-w-gnu-awk/16-further-reading.md"]},{"text":"Mastering Curl - Interactive Text Guide","collapsible":true,"icon":"iconfont icon-shell","children":["/cli/mastering-curl-interactive-text-guide/README.md","/cli/mastering-curl-interactive-text-guide/01-the-curl-project.md","/cli/mastering-curl-interactive-text-guide/02-command-line-options.md","/cli/mastering-curl-interactive-text-guide/03-urls.md","/cli/mastering-curl-interactive-text-guide/04-curl-basics.md","/cli/mastering-curl-interactive-text-guide/05-http.md"]},{"text":"Bash 쉘스크립트 개발 시작하기","collapsible":true,"icon":"iconfont icon-shell","children":["/cli/bash-dev/README.md","/cli/bash-dev/01.md","/cli/bash-dev/02.md","/cli/bash-dev/03.md","/cli/bash-dev/04.md"]}],"/swift/":[{"text":"Swift","icon":"fa-brands fa-swift","children":["/swift/README.md"]},{"text":"Learn essential Swift in one hour","collapsible":true,"icon":"fa-brands fa-swift","children":["/swift/learn-essential-swift-in-one-hour/README.md"]},{"text":"100 Days of Swift","collapsible":true,"icon":"fa-brands fa-swift","children":["/swift/100-days-of-swift/README.md","/swift/100-days-of-swift/01.md","/swift/100-days-of-swift/02.md","/swift/100-days-of-swift/03.md","/swift/100-days-of-swift/04.md","/swift/100-days-of-swift/05.md","/swift/100-days-of-swift/06.md","/swift/100-days-of-swift/07.md","/swift/100-days-of-swift/08.md","/swift/100-days-of-swift/09.md","/swift/100-days-of-swift/10.md","/swift/100-days-of-swift/11.md","/swift/100-days-of-swift/12.md","/swift/100-days-of-swift/13.md","/swift/100-days-of-swift/14.md","/swift/100-days-of-swift/15.md","/swift/100-days-of-swift/16.md","/swift/100-days-of-swift/17.md","/swift/100-days-of-swift/18.md","/swift/100-days-of-swift/19.md","/swift/100-days-of-swift/20.md","/swift/100-days-of-swift/21.md","/swift/100-days-of-swift/22.md","/swift/100-days-of-swift/23.md","/swift/100-days-of-swift/24.md","/swift/100-days-of-swift/25.md","/swift/100-days-of-swift/26.md","/swift/100-days-of-swift/27.md","/swift/100-days-of-swift/28.md","/swift/100-days-of-swift/29.md","/swift/100-days-of-swift/30.md","/swift/100-days-of-swift/31.md","/swift/100-days-of-swift/32.md","/swift/100-days-of-swift/33.md","/swift/100-days-of-swift/34.md","/swift/100-days-of-swift/35.md","/swift/100-days-of-swift/36.md","/swift/100-days-of-swift/37.md","/swift/100-days-of-swift/38.md","/swift/100-days-of-swift/39.md","/swift/100-days-of-swift/40.md","/swift/100-days-of-swift/41.md","/swift/100-days-of-swift/42.md","/swift/100-days-of-swift/43.md","/swift/100-days-of-swift/44.md","/swift/100-days-of-swift/45.md","/swift/100-days-of-swift/46.md","/swift/100-days-of-swift/47.md","/swift/100-days-of-swift/48.md","/swift/100-days-of-swift/49.md","/swift/100-days-of-swift/50.md","/swift/100-days-of-swift/51.md","/swift/100-days-of-swift/52.md","/swift/100-days-of-swift/53.md","/swift/100-days-of-swift/54.md","/swift/100-days-of-swift/55.md","/swift/100-days-of-swift/56.md","/swift/100-days-of-swift/57.md","/swift/100-days-of-swift/58.md","/swift/100-days-of-swift/59.md","/swift/100-days-of-swift/60.md","/swift/100-days-of-swift/61.md","/swift/100-days-of-swift/62.md","/swift/100-days-of-swift/63.md","/swift/100-days-of-swift/64.md","/swift/100-days-of-swift/65.md","/swift/100-days-of-swift/66.md","/swift/100-days-of-swift/67.md","/swift/100-days-of-swift/68.md","/swift/100-days-of-swift/69.md","/swift/100-days-of-swift/70.md","/swift/100-days-of-swift/71.md","/swift/100-days-of-swift/72.md","/swift/100-days-of-swift/73.md","/swift/100-days-of-swift/74.md","/swift/100-days-of-swift/75.md","/swift/100-days-of-swift/76.md","/swift/100-days-of-swift/77.md","/swift/100-days-of-swift/78.md","/swift/100-days-of-swift/79.md","/swift/100-days-of-swift/80.md","/swift/100-days-of-swift/81.md","/swift/100-days-of-swift/82.md","/swift/100-days-of-swift/83.md","/swift/100-days-of-swift/84.md","/swift/100-days-of-swift/85.md","/swift/100-days-of-swift/86.md","/swift/100-days-of-swift/87.md","/swift/100-days-of-swift/88.md","/swift/100-days-of-swift/89.md","/swift/100-days-of-swift/90.md","/swift/100-days-of-swift/91.md","/swift/100-days-of-swift/92.md","/swift/100-days-of-swift/93.md","/swift/100-days-of-swift/94.md","/swift/100-days-of-swift/95.md","/swift/100-days-of-swift/96.md","/swift/100-days-of-swift/97.md","/swift/100-days-of-swift/98.md","/swift/100-days-of-swift/99.md","/swift/100-days-of-swift/100.md","/swift/100-days-of-swift/101.md"]},{"text":"100 Days of SwiftUI","collapsible":true,"icon":"fa-brands fa-swift","children":["/swift/100-days-of-swiftui/README.md","/swift/100-days-of-swiftui/01.md","/swift/100-days-of-swiftui/02.md","/swift/100-days-of-swiftui/03.md","/swift/100-days-of-swiftui/04.md","/swift/100-days-of-swiftui/05.md","/swift/100-days-of-swiftui/06.md","/swift/100-days-of-swiftui/07.md","/swift/100-days-of-swiftui/08.md","/swift/100-days-of-swiftui/09.md","/swift/100-days-of-swiftui/10.md","/swift/100-days-of-swiftui/11.md","/swift/100-days-of-swiftui/12.md","/swift/100-days-of-swiftui/13.md","/swift/100-days-of-swiftui/14.md","/swift/100-days-of-swiftui/15.md","/swift/100-days-of-swiftui/16.md","/swift/100-days-of-swiftui/17.md","/swift/100-days-of-swiftui/18.md","/swift/100-days-of-swiftui/19.md","/swift/100-days-of-swiftui/20.md","/swift/100-days-of-swiftui/21.md","/swift/100-days-of-swiftui/22.md","/swift/100-days-of-swiftui/23.md","/swift/100-days-of-swiftui/24.md","/swift/100-days-of-swiftui/25.md","/swift/100-days-of-swiftui/26.md","/swift/100-days-of-swiftui/27.md","/swift/100-days-of-swiftui/28.md","/swift/100-days-of-swiftui/29.md","/swift/100-days-of-swiftui/30.md","/swift/100-days-of-swiftui/31.md","/swift/100-days-of-swiftui/32.md","/swift/100-days-of-swiftui/33.md","/swift/100-days-of-swiftui/34.md","/swift/100-days-of-swiftui/35.md","/swift/100-days-of-swiftui/36.md","/swift/100-days-of-swiftui/37.md","/swift/100-days-of-swiftui/38.md","/swift/100-days-of-swiftui/39.md","/swift/100-days-of-swiftui/40.md","/swift/100-days-of-swiftui/41.md","/swift/100-days-of-swiftui/42.md","/swift/100-days-of-swiftui/43.md","/swift/100-days-of-swiftui/44.md","/swift/100-days-of-swiftui/45.md","/swift/100-days-of-swiftui/46.md","/swift/100-days-of-swiftui/47.md","/swift/100-days-of-swiftui/48.md","/swift/100-days-of-swiftui/49.md","/swift/100-days-of-swiftui/50.md","/swift/100-days-of-swiftui/51.md","/swift/100-days-of-swiftui/52.md","/swift/100-days-of-swiftui/53.md","/swift/100-days-of-swiftui/54.md","/swift/100-days-of-swiftui/55.md","/swift/100-days-of-swiftui/56.md","/swift/100-days-of-swiftui/57.md","/swift/100-days-of-swiftui/58.md","/swift/100-days-of-swiftui/59.md","/swift/100-days-of-swiftui/60.md","/swift/100-days-of-swiftui/61.md","/swift/100-days-of-swiftui/62.md","/swift/100-days-of-swiftui/63.md","/swift/100-days-of-swiftui/64.md","/swift/100-days-of-swiftui/65.md","/swift/100-days-of-swiftui/66.md","/swift/100-days-of-swiftui/67.md","/swift/100-days-of-swiftui/68.md","/swift/100-days-of-swiftui/69.md","/swift/100-days-of-swiftui/70.md","/swift/100-days-of-swiftui/71.md","/swift/100-days-of-swiftui/72.md","/swift/100-days-of-swiftui/73.md","/swift/100-days-of-swiftui/74.md","/swift/100-days-of-swiftui/75.md","/swift/100-days-of-swiftui/76.md","/swift/100-days-of-swiftui/77.md","/swift/100-days-of-swiftui/78.md","/swift/100-days-of-swiftui/79.md","/swift/100-days-of-swiftui/80.md","/swift/100-days-of-swiftui/81.md","/swift/100-days-of-swiftui/82.md","/swift/100-days-of-swiftui/83.md","/swift/100-days-of-swiftui/84.md","/swift/100-days-of-swiftui/85.md","/swift/100-days-of-swiftui/85.md","/swift/100-days-of-swiftui/87.md","/swift/100-days-of-swiftui/88.md","/swift/100-days-of-swiftui/89.md","/swift/100-days-of-swiftui/90.md","/swift/100-days-of-swiftui/91.md","/swift/100-days-of-swiftui/92.md","/swift/100-days-of-swiftui/93.md","/swift/100-days-of-swiftui/94.md","/swift/100-days-of-swiftui/95.md","/swift/100-days-of-swiftui/96.md","/swift/100-days-of-swiftui/97.md","/swift/100-days-of-swiftui/98.md","/swift/100-days-of-swiftui/99.md","/swift/100-days-of-swiftui/100.md","/swift/100-days-of-swiftui/101.md"]},{"text":"SwiftUI by Example","collapsible":true,"icon":"fa-brands fa-swift","children":["/swift/swiftui-by-example/README.md",{"text":"Introduction","collapsible":true,"children":["/swift/swiftui-by-example/00-introduction/what-is-swiftui.md","/swift/swiftui-by-example/00-introduction/swiftui-vs-interface-builder-and-storyboards.md","/swift/swiftui-by-example/00-introduction/frequently-asked-questions-about-swiftui.md","/swift/swiftui-by-example/00-introduction/answering-the-big-question-should-you-learn-swiftui-uikit-or-both.md","/swift/swiftui-by-example/00-introduction/how-to-follow-this-quick-start-guide.md","/swift/swiftui-by-example/00-introduction/migrating-from-uikit-to-swiftui.md","/swift/swiftui-by-example/00-introduction/whats-in-the-basic-template.md","/swift/swiftui-by-example/00-introduction/dedication.md"]},{"text":"Building a complete project","collapsible":true,"children":["/swift/swiftui-by-example/01-building-a-complete-project/swiftui-tutorial-building-a-complete-project.md","/swift/swiftui-by-example/01-building-a-complete-project/building-a-menu-using-list.md","/swift/swiftui-by-example/01-building-a-complete-project/composing-views-to-create-a-list-row.md","/swift/swiftui-by-example/01-building-a-complete-project/polishing-designs-with-fonts-and-colors.md","/swift/swiftui-by-example/01-building-a-complete-project/displaying-a-detail-screen-with-navigationlink.md","/swift/swiftui-by-example/01-building-a-complete-project/observable-objects-environment-objects-and-published.md","/swift/swiftui-by-example/01-building-a-complete-project/adding-items-to-an-order-with-environmentobject.md","/swift/swiftui-by-example/01-building-a-complete-project/adding-tabview-and-tabitem.md","/swift/swiftui-by-example/01-building-a-complete-project/bindings-and-forms.md","/swift/swiftui-by-example/01-building-a-complete-project/two-way-bindings-in-swiftui.md","/swift/swiftui-by-example/01-building-a-complete-project/formatting-interpolated-strings-in-swiftui.md","/swift/swiftui-by-example/01-building-a-complete-project/presenting-an-alert.md","/swift/swiftui-by-example/01-building-a-complete-project/adding-swipe-to-delete-and-editbutton.md","/swift/swiftui-by-example/01-building-a-complete-project/wrap-up-our-swiftui-project-is-complete.md"]},{"text":"Working with static text","collapsible":true,"children":["/swift/swiftui-by-example/02-working-with-static-text/how-to-create-static-labels-with-a-text-view.md","/swift/swiftui-by-example/02-working-with-static-text/how-to-style-text-views-with-fonts-colors-line-spacing-and-more.md","/swift/swiftui-by-example/02-working-with-static-text/how-to-add-advanced-text-styling-using-attributedstring.md","/swift/swiftui-by-example/02-working-with-static-text/how-to-adjust-text-alignment-using-multilinetextalignment.md","/swift/swiftui-by-example/02-working-with-static-text/how-to-format-text-inside-text-views.md","/swift/swiftui-by-example/02-working-with-static-text/how-to-add-spacing-between-letters-in-text.md","/swift/swiftui-by-example/02-working-with-static-text/how-to-format-dates-inside-text-views.md","/swift/swiftui-by-example/02-working-with-static-text/how-to-make-textfield-uppercase-or-lowercase-using-textcase.md","/swift/swiftui-by-example/02-working-with-static-text/how-to-show-text-and-an-icon-side-by-side-using-label.md","/swift/swiftui-by-example/02-working-with-static-text/how-to-mark-content-as-a-placeholder-using-redacted.md","/swift/swiftui-by-example/02-working-with-static-text/how-to-mark-content-as-private-using-privacysensitive.md","/swift/swiftui-by-example/02-working-with-static-text/how-to-render-markdown-content-in-text.md","/swift/swiftui-by-example/02-working-with-static-text/how-to-customize-the-way-links-are-opened.md","/swift/swiftui-by-example/02-working-with-static-text/how-to-let-users-select-text.md"]},{"text":"Images, shapes, and media","collapsible":true,"children":["/swift/swiftui-by-example/03-images-shapes-and-media/how-to-draw-images-using-image-views.md","/swift/swiftui-by-example/03-images-shapes-and-media/how-to-adjust-the-way-an-image-is-fitted-to-its-space.md","/swift/swiftui-by-example/03-images-shapes-and-media/how-to-tile-an-image.md","/swift/swiftui-by-example/03-images-shapes-and-media/how-to-render-images-using-sf-symbols.md","/swift/swiftui-by-example/03-images-shapes-and-media/how-to-render-a-gradient.md","/swift/swiftui-by-example/03-images-shapes-and-media/how-to-use-images-and-other-views-as-a-backgrounds.md","/swift/swiftui-by-example/03-images-shapes-and-media/how-to-display-solid-shapes.md","/swift/swiftui-by-example/03-images-shapes-and-media/how-to-fill-and-stroke-shapes-at-the-same-time.md","/swift/swiftui-by-example/03-images-shapes-and-media/how-to-draw-part-of-a-solid-shape-using-trim.md","/swift/swiftui-by-example/03-images-shapes-and-media/when-should-you-use-containerrelativeshape.md","/swift/swiftui-by-example/03-images-shapes-and-media/how-to-play-movies-with-videoplayer.md","/swift/swiftui-by-example/03-images-shapes-and-media/how-to-integrate-spritekit-using-spriteview.md","/swift/swiftui-by-example/03-images-shapes-and-media/how-to-load-a-remote-image-from-a-url.md","/swift/swiftui-by-example/03-images-shapes-and-media/how-to-get-custom-colors-and-transparency-with-sf-symbols.md","/swift/swiftui-by-example/03-images-shapes-and-media/how-to-dynamically-adjust-the-color-of-an-sf-symbol.md","/swift/swiftui-by-example/03-images-shapes-and-media/how-to-let-users-select-pictures-using-photospicker.md","/swift/swiftui-by-example/03-images-shapes-and-media/how-to-let-users-import-videos-using-photospicker.md"]},{"text":"View layout","collapsible":true,"children":["/swift/swiftui-by-example/04-view-layout/how-to-give-a-view-a-custom-frame.md","/swift/swiftui-by-example/04-view-layout/how-to-control-spacing-around-individual-views-using-padding.md","/swift/swiftui-by-example/04-view-layout/how-to-provide-relative-sizes-using-geometryreader.md","/swift/swiftui-by-example/04-view-layout/how-to-place-content-outside-the-safe-area.md","/swift/swiftui-by-example/04-view-layout/how-to-return-different-view-types.md","/swift/swiftui-by-example/04-view-layout/how-to-create-views-in-a-loop-using-foreach.md","/swift/swiftui-by-example/04-view-layout/how-to-control-layout-priority-using-layoutpriority.md","/swift/swiftui-by-example/04-view-layout/how-to-make-two-views-the-same-width-or-height.md","/swift/swiftui-by-example/04-view-layout/how-to-provide-visual-structure-using-foreground-styles.md","/swift/swiftui-by-example/04-view-layout/how-to-inset-the-safe-area-with-custom-content.md","/swift/swiftui-by-example/04-view-layout/how-to-hide-the-home-indicator-and-other-system-ui.md","/swift/swiftui-by-example/04-view-layout/how-to-stop-system-gestures-from-interfering-with-your-own.md","/swift/swiftui-by-example/04-view-layout/how-to-dynamically-change-between-vstack-and-hstack.md","/swift/swiftui-by-example/04-view-layout/how-to-create-a-custom-layout-using-the-layout-protocol.md","/swift/swiftui-by-example/04-view-layout/how-to-create-an-adaptive-layout-with-viewthatfits.md"]},{"text":"Stacks, grids, scrollviews","collapsible":true,"children":["/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-create-stacks-using-vstack-and-hstack.md","/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-customize-stack-layouts-with-alignment-and-spacing.md","/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-force-views-to-one-side-inside-a-stack-using-spacer.md","/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-make-a-fixed-size-spacer.md","/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-layer-views-on-top-of-each-other-using-zstack.md","/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-change-the-order-of-view-layering-using-z-index.md","/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-create-different-layouts-using-size-classes.md","/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-automatically-switch-between-hstack-and-vstack-based-on-size-class.md","/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-add-horizontal-and-vertical-scrolling-using-scrollview.md","/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-make-a-scroll-view-move-to-a-location-using-scrollviewreader.md","/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-create-3d-effects-like-cover-flow-using-scrollview-and-geometryreader.md","/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-lazy-load-views-using-lazyvstack-and-lazyhstack.md","/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-position-views-in-a-fixed-grid.md","/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-position-views-in-a-grid-using-lazyvgrid-and-lazyhgrid.md","/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-dismiss-the-keyboard-when-the-user-scrolls.md","/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-hide-the-scroll-indicators-in-scrollview-list-and-more.md","/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-create-multi-column-lists-using-table.md"]},{"text":"User interface controls","collapsible":true,"children":["/swift/swiftui-by-example/06-user-interface-controls/working-with-state.md","/swift/swiftui-by-example/06-user-interface-controls/how-to-create-a-tappable-button.md","/swift/swiftui-by-example/06-user-interface-controls/how-to-disable-the-overlay-color-for-images-inside-button-and-navigationlink.md","/swift/swiftui-by-example/06-user-interface-controls/how-to-get-bordered-buttons-that-stand-out.md","/swift/swiftui-by-example/06-user-interface-controls/how-to-group-views-together-with-controlgroup.md","/swift/swiftui-by-example/06-user-interface-controls/how-to-read-text-from-a-textfield.md","/swift/swiftui-by-example/06-user-interface-controls/how-to-take-action-when-the-user-submits-a-textfield.md","/swift/swiftui-by-example/06-user-interface-controls/how-to-customize-the-submit-button-for-textfield-securefield-and-texteditor.md","/swift/swiftui-by-example/06-user-interface-controls/how-to-add-a-border-to-a-textfield.md","/swift/swiftui-by-example/06-user-interface-controls/how-to-add-a-placeholder-to-a-textfield.md","/swift/swiftui-by-example/06-user-interface-controls/how-to-disable-autocorrect-in-a-textfield.md","/swift/swiftui-by-example/06-user-interface-controls/how-to-dismiss-the-keyboard-for-a-textfield.md","/swift/swiftui-by-example/06-user-interface-controls/how-to-make-a-textfield-or-texteditor-have-default-focus.md","/swift/swiftui-by-example/06-user-interface-controls/how-to-make-a-textfield-expand-vertically-as-the-user-types.md","/swift/swiftui-by-example/06-user-interface-controls/how-to-format-a-textfield-for-numbers.md","/swift/swiftui-by-example/06-user-interface-controls/how-to-create-secure-text-fields-using-securefield.md","/swift/swiftui-by-example/06-user-interface-controls/how-to-create-a-toggle-switch.md","/swift/swiftui-by-example/06-user-interface-controls/how-to-create-a-slider-and-read-values-from-it.md","/swift/swiftui-by-example/06-user-interface-controls/how-to-create-a-picker-and-read-values-from-it.md","/swift/swiftui-by-example/06-user-interface-controls/how-to-create-a-date-picker-and-read-values-from-it.md","/swift/swiftui-by-example/06-user-interface-controls/how-to-create-a-segmented-control-and-read-values-from-it.md","/swift/swiftui-by-example/06-user-interface-controls/how-to-create-a-stepper-and-read-values-from-it.md","/swift/swiftui-by-example/06-user-interface-controls/how-to-create-multi-line-editable-text-with-texteditor.md","/swift/swiftui-by-example/06-user-interface-controls/how-to-let-users-select-a-color-with-colorpicker.md","/swift/swiftui-by-example/06-user-interface-controls/how-to-show-progress-on-a-task-using-progressview.md","/swift/swiftui-by-example/06-user-interface-controls/how-to-show-indeterminate-progress-using-progressview.md","/swift/swiftui-by-example/06-user-interface-controls/how-to-show-a-map-view.md","/swift/swiftui-by-example/06-user-interface-controls/how-to-show-annotations-in-a-map-view.md","/swift/swiftui-by-example/06-user-interface-controls/how-to-open-web-links-in-safari.md","/swift/swiftui-by-example/06-user-interface-controls/how-to-let-the-user-select-multiple-dates.md","/swift/swiftui-by-example/06-user-interface-controls/how-to-hide-the-label-of-a-picker-stepper-toggle-and-more-using-labelshidden.md"]},{"text":"Responding to events","collapsible":true,"children":["/swift/swiftui-by-example/07-responding-to-events/how-to-detect-when-your-app-moves-to-the-background-or-foreground-with-scenephase.md","/swift/swiftui-by-example/07-responding-to-events/how-to-respond-to-view-lifecycle-events-onappear-and-ondisappear.md","/swift/swiftui-by-example/07-responding-to-events/how-to-add-keyboard-shortcuts-using-keyboardshortcut.md","/swift/swiftui-by-example/07-responding-to-events/how-to-control-which-view-is-shown-when-your-app-launches.md","/swift/swiftui-by-example/07-responding-to-events/how-to-run-code-when-your-app-launches.md","/swift/swiftui-by-example/07-responding-to-events/how-to-add-an-appdelegate-to-a-swiftui-app.md","/swift/swiftui-by-example/07-responding-to-events/how-to-detect-device-rotation.md","/swift/swiftui-by-example/07-responding-to-events/how-to-add-a-toolbar-to-the-keyboard.md","/swift/swiftui-by-example/07-responding-to-events/how-to-run-an-asynchronous-task-when-a-view-is-shown.md","/swift/swiftui-by-example/07-responding-to-events/how-to-let-the-user-paste-data-into-your-app.md","/swift/swiftui-by-example/07-responding-to-events/how-to-let-users-share-content-using-the-system-share-sheet.md","/swift/swiftui-by-example/07-responding-to-events/how-to-let-users-find-and-replace-text.md","/swift/swiftui-by-example/07-responding-to-events/how-to-support-drag-and-drop-in-swiftui.md"]},{"text":"Taps and gestures","collapsible":true,"children":["/swift/swiftui-by-example/08-taps-and-gestures/how-to-add-a-gesture-recognizer-to-a-view.md","/swift/swiftui-by-example/08-taps-and-gestures/how-to-read-tap-and-double-tap-gestures.md","/swift/swiftui-by-example/08-taps-and-gestures/how-to-force-one-gesture-to-recognize-before-another-using-highprioritygesture.md","/swift/swiftui-by-example/08-taps-and-gestures/how-to-make-two-gestures-recognize-at-the-same-time-using-simultaneousgesture.md","/swift/swiftui-by-example/08-taps-and-gestures/how-to-create-gesture-chains-using-sequencedbefore.md","/swift/swiftui-by-example/08-taps-and-gestures/how-to-detect-the-user-hovering-over-a-view.md","/swift/swiftui-by-example/08-taps-and-gestures/how-to-detect-shake-gestures.md","/swift/swiftui-by-example/08-taps-and-gestures/how-to-control-the-tappable-area-of-a-view-using-contentshape.md","/swift/swiftui-by-example/08-taps-and-gestures/how-to-disable-taps-for-a-view-using-allowshittesting.md","/swift/swiftui-by-example/08-taps-and-gestures/how-to-detect-the-location-of-a-tap-inside-a-view.md"]},{"text":"Advanced state","collapsible":true,"children":["/swift/swiftui-by-example/09-advanced-state/whats-the-difference-between-observedobject-state-and-environmentobject.md","/swift/swiftui-by-example/09-advanced-state/how-to-use-stateobject-to-create-and-monitor-external-objects.md","/swift/swiftui-by-example/09-advanced-state/how-to-use-observedobject-to-manage-state-from-external-objects.md","/swift/swiftui-by-example/09-advanced-state/how-to-use-environmentobject-to-share-data-between-views.md","/swift/swiftui-by-example/09-advanced-state/how-to-send-state-updates-manually-using-objectwillchange.md","/swift/swiftui-by-example/09-advanced-state/how-to-create-constant-bindings.md","/swift/swiftui-by-example/09-advanced-state/how-to-create-custom-bindings.md","/swift/swiftui-by-example/09-advanced-state/how-to-use-a-timer-with-swiftui.md","/swift/swiftui-by-example/09-advanced-state/how-to-run-some-code-when-state-changes-using-onchange.md","/swift/swiftui-by-example/09-advanced-state/how-to-show-different-images-and-other-views-in-light-or-dark-mode.md"]},"/swift/swiftui-by-example/13-navigation.md","/swift/swiftui-by-example/14-alerts-and-menus.md","/swift/swiftui-by-example/15-presenting-views.md","/swift/swiftui-by-example/16-transforming-views.md","/swift/swiftui-by-example/17-drawing.md"]},{"text":"Kodeco - Swift","collapsible":true,"icon":"fa-brands fa-swift","children":["/swift/kodeco/README.md","/swift/kodeco/6398124-swiftui-tutorial-for-ios-creating-charts.md","/swift/kodeco/6334294-my-app-crashed-now-what.md","/swift/kodeco/6587213-alamofire-5-tutorial-for-ios-getting-started.md","/swift/kodeco/6620276-sqlite-with-swift-tutorial-getting-started.md","/swift/kodeco/6747815-uigesturerecognizer-tutorial-getting-started.md","/swift/kodeco/6827616-ios-accessibility-getting-started.md","/swift/kodeco/6742901-protocol-oriented-programming-tutorial-in-swift-5-1-getting-started.md","/swift/kodeco/7076593-cocoapods-tutorial-for-swift-getting-started.md","/swift/kodeco/7181017-unsafe-swift-using-pointers-and-interacting-with-c.md"]},{"text":"OSX 구조를 이해하면서 배우는 Objective-C","collapsible":true,"icon":"fas fa-landmark","children":["/swift/shuokai-objc/README.md","/swift/shuokai-objc/01.md","/swift/shuokai-objc/02.md","/swift/shuokai-objc/03.md","/swift/shuokai-objc/04.md","/swift/shuokai-objc/05.md","/swift/shuokai-objc/06.md","/swift/shuokai-objc/07.md","/swift/shuokai-objc/08.md","/swift/shuokai-objc/09.md","/swift/shuokai-objc/10.md","/swift/shuokai-objc/11.md","/swift/shuokai-objc/12.md","/swift/shuokai-objc/13.md","/swift/shuokai-objc/14.md","/swift/shuokai-objc/15.md","/swift/shuokai-objc/16.md","/swift/shuokai-objc/17.md","/swift/shuokai-objc/18.md","/swift/shuokai-objc/19.md","/swift/shuokai-objc/20.md","/swift/shuokai-objc/21.md"]}],"/java/":[{"text":"Java","icon":"fa-brands fa-java","children":["/java/README.md"]},{"text":"Java8 in Action","icon":"fa-brands fa-java","collapsible":true,"children":["/java/java-8-in-action/README.md","/java/java-8-in-action/1.md","/java/java-8-in-action/2-1.md","/java/java-8-in-action/2-2.md","/java/java-8-in-action/3-1.md"]},{"text":"Effective Java","collapsible":true,"icon":"fa-brands fa-java","children":["/java/effective-java/README.md","/java/effective-java/01-creating-and-destroying-objects.md","/java/effective-java/02-methods-common-to-all-objects.md","/java/effective-java/03-classes-and-interfaces.md","/java/effective-java/04-generics.md","/java/effective-java/05-enums-and-annotations.md","/java/effective-java/06-lambda-and-stream.md","/java/effective-java/07-methods.md","/java/effective-java/08-general-programming.md","/java/effective-java/09-exceptions.md","/java/effective-java/10-concurrency.md","/java/effective-java/11-serialization.md"]},{"text":"Kodeco - Android & Kotlin","collapsible":true,"icon":"fa-brands fa-android","children":["/java/kodeco/README.md","/java/kodeco/247-react-native-tutorial-building-android-apps-with-javascript.md","/java/kodeco/249-gradle-tutorial-for-android-getting-started.md","/java/kodeco/254-getting-started-with-android-wear-with-kotlin.md","/java/kodeco/262-dependency-injection-in-android-with-dagger-2-and-kotlin.md","/java/kodeco/272-intermediate-recyclerview-tutorial-with-kotlin.md","/java/kodeco/853-couchbase-tutorial-for-android-getting-started.md","/java/kodeco/523-augmented-reality-in-android-with-google-s-face-api.md","/java/kodeco/324-viewpager-tutorial-getting-started-in-kotlin.md","/java/kodeco/30067669-documenting-kotlin-code-for-android-using-kdoc-and-dokka.md","/java/kodeco/31290959-kotlin-sequences-getting-started.md"]},{"text":"Jump to Spring Boot","collapsible":true,"icon":"fa-brands fa-envira","children":["/java/jump-to-spring-boot/README.md","/java/jump-to-spring-boot/01.md",{"text":"2장 - 스프링부트의 기본 요소 익히기!","collapsible":true,"children":["/java/jump-to-spring-boot/02.md","/java/jump-to-spring-boot/02A.md","/java/jump-to-spring-boot/02B.md","/java/jump-to-spring-boot/02C.md","/java/jump-to-spring-boot/02D.md","/java/jump-to-spring-boot/02E.md","/java/jump-to-spring-boot/02F.md","/java/jump-to-spring-boot/02G.md","/java/jump-to-spring-boot/02H.md","/java/jump-to-spring-boot/02I.md","/java/jump-to-spring-boot/02J.md","/java/jump-to-spring-boot/02K.md","/java/jump-to-spring-boot/02L.md","/java/jump-to-spring-boot/02M.md","/java/jump-to-spring-boot/02N.md","/java/jump-to-spring-boot/02O.md","/java/jump-to-spring-boot/02P.md"]},{"text":"3장 - SBB 서비스 개발!","collapsible":true,"children":["/java/jump-to-spring-boot/03.md","/java/jump-to-spring-boot/03A.md","/java/jump-to-spring-boot/03B.md","/java/jump-to-spring-boot/03C.md","/java/jump-to-spring-boot/03D.md","/java/jump-to-spring-boot/03E.md","/java/jump-to-spring-boot/03F.md","/java/jump-to-spring-boot/03G.md","/java/jump-to-spring-boot/03H.md","/java/jump-to-spring-boot/03I.md","/java/jump-to-spring-boot/03J.md","/java/jump-to-spring-boot/03K.md","/java/jump-to-spring-boot/03L.md","/java/jump-to-spring-boot/03M.md","/java/jump-to-spring-boot/03N.md","/java/jump-to-spring-boot/03O.md"]},{"text":"4장 - 세상에 선보이는 SBB 서비스!","collapsible":true,"children":["/java/jump-to-spring-boot/04.md","/java/jump-to-spring-boot/04A.md","/java/jump-to-spring-boot/04B.md","/java/jump-to-spring-boot/04C.md","/java/jump-to-spring-boot/04D.md","/java/jump-to-spring-boot/04E.md","/java/jump-to-spring-boot/04F.md","/java/jump-to-spring-boot/04G.md","/java/jump-to-spring-boot/04H.md","/java/jump-to-spring-boot/04I.md","/java/jump-to-spring-boot/04J.md","/java/jump-to-spring-boot/04K.md","/java/jump-to-spring-boot/04L.md"]},"/java/jump-to-spring-boot/a.md"]},{"text":"스프링부트 개념과 활용","collapsible":true,"icon":"fa-brands fa-envira","children":["/java/spring-boot-whiteship/README.md","/java/spring-boot-whiteship/01.md","/java/spring-boot-whiteship/02.md","/java/spring-boot-whiteship/03.md","/java/spring-boot-whiteship/04.md","/java/spring-boot-whiteship/05.md","/java/spring-boot-whiteship/06.md","/java/spring-boot-whiteship/07.md"]},{"text":"Java Web App with Quarkus and JPAStreamer","collapsible":true,"icon":"iconfont icon-java","children":["/java/freecodecamp-quarkus-jpastreamer/README.md","/java/freecodecamp-quarkus-jpastreamer/01.md","/java/freecodecamp-quarkus-jpastreamer/02.md","/java/freecodecamp-quarkus-jpastreamer/03.md","/java/freecodecamp-quarkus-jpastreamer/04.md","/java/freecodecamp-quarkus-jpastreamer/05.md"]},{"text":"JavaFX 게시판 프로그램","collapsible":true,"icon":"fa-brands fa-java","children":["/java/aloha-javafx/README.md","/java/aloha-javafx/01.md","/java/aloha-javafx/02.md"]},{"text":"요즘 IT 블로그 - Java 관련","collapsible":true,"icon":"fa-brands fa-java","children":["/java/yozm/README.md","/java/yozm/2457.md","/java/yozm/2478.md","/java/yozm/2499.md"]}],"/js/":[{"text":"JavaScript","icon":"fa-brands fa-js","children":["/js/README.md"]},{"text":"Learn Typescript","icon":"iconfont icon-typescript","collapsible":true,"children":["/js/learn-ts/README.md","/js/learn-ts/advanced/01.md","/js/learn-ts/advanced/02.md","/js/learn-ts/advanced/03.md","/js/learn-ts/advanced/04.md","/js/learn-ts/advanced/05.md","/js/learn-ts/advanced/06.md","/js/learn-ts/advanced/07.md","/js/learn-ts/advanced/08.md","/js/learn-ts/advanced/09.md","/js/learn-ts/advanced/10.md","/js/learn-ts/advanced/11.md","/js/learn-ts/advanced/12.md","/js/learn-ts/advanced/13.md","/js/learn-ts/advanced/14.md","/js/learn-ts/advanced/15.md","/js/learn-ts/advanced/16.md","/js/learn-ts/advanced/17.md","/js/learn-ts/advanced/18.md"]},{"text":"Must Know JavaScript API","collapsible":true,"icon":"fa-brands fa-js","children":["/js/must-know-javascript-api/README.md","/js/must-know-javascript-api/page-visibility.md","/js/must-know-javascript-api/broadcast-channel.md","/js/must-know-javascript-api/resize-observer.md","/js/must-know-javascript-api/beacon.md","/js/must-know-javascript-api/clipboard.md","/js/must-know-javascript-api/fetch.md"]},{"text":"Eloquent Javascript","collapsible":true,"icon":"fa-brands fa-js","children":["/js/eloquent-javascript/README.md","/js/eloquent-javascript/00.md","/js/eloquent-javascript/01.md","/js/eloquent-javascript/02.md","/js/eloquent-javascript/03.md","/js/eloquent-javascript/04.md","/js/eloquent-javascript/05.md","/js/eloquent-javascript/06.md","/js/eloquent-javascript/07.md","/js/eloquent-javascript/08.md","/js/eloquent-javascript/09.md","/js/eloquent-javascript/10.md","/js/eloquent-javascript/11.md","/js/eloquent-javascript/12.md","/js/eloquent-javascript/13.md","/js/eloquent-javascript/14.md","/js/eloquent-javascript/15.md","/js/eloquent-javascript/16.md","/js/eloquent-javascript/17.md","/js/eloquent-javascript/18.md","/js/eloquent-javascript/19.md","/js/eloquent-javascript/20.md","/js/eloquent-javascript/21.md"]},{"text":"요즘 IT 블로그 - JavaScript 관련","collapsible":true,"icon":"fa-brands fa-node-js","children":["/js/yozm/README.md","/js/yozm/2466.md","/js/yozm/2467.md","/js/yozm/2479.md","/js/yozm/2483.md","/js/yozm/2493.md","/js/yozm/2504.md","/js/yozm/2505.md","/js/yozm/2511.md"]}],"/python/":[{"text":"Python","icon":"fa-brands fa-python","children":["/python/README.md"]},{"text":"Finance with Python","collapsible":true,"icon":"fa-brands fa-python","children":["/python/finance-w-python/README.md","/python/finance-w-python/01.md","/python/finance-w-python/02.md","/python/finance-w-python/03.md","/python/finance-w-python/04.md","/python/finance-w-python/05.md","/python/finance-w-python/06.md","/python/finance-w-python/07.md","/python/finance-w-python/08.md","/python/finance-w-python/09.md","/python/finance-w-python/10.md","/python/finance-w-python/11.md","/python/finance-w-python/12.md"]},{"text":"사장님 몰래 하는 파이썬 업무자동화 (들키면 일 많아짐)","collapsible":true,"icon":"fa-brands fa-python","children":["/python/rpa-excel/README.md","/python/rpa-excel/01.md","/python/rpa-excel/02a.md","/python/rpa-excel/02b.md","/python/rpa-excel/02c.md","/python/rpa-excel/02d.md","/python/rpa-excel/02e.md","/python/rpa-excel/02f.md","/python/rpa-excel/02g.md","/python/rpa-excel/02h.md","/python/rpa-excel/02i.md","/python/rpa-excel/03.md"]},{"text":"OpenCV – Python 고급 기법 프로그래밍","collapsible":true,"icon":"fa-brands fa-python","children":["/python/opencv-advacned/README.md","/python/opencv-advacned/00.md","/python/opencv-advacned/01.md","/python/opencv-advacned/02.md"]}],"/rust/":[{"text":"Rust","icon":"fa-brands fa-rust","children":["/rust/README.md"]},{"text":"freecodecamp.org - Rust by Practice","collapsible":true,"icon":"fa-brands fa-rust","children":["/rust/freecodecamp-rust-by-practice/README.md","/rust/freecodecamp-rust-by-practice/01-elegant-code-base.md","/rust/freecodecamp-rust-by-practice/02-variables.md","/rust/freecodecamp-rust-by-practice/03-basic-types.md","/rust/freecodecamp-rust-by-practice/04-ownership.md","/rust/freecodecamp-rust-by-practice/05-compound-types.md","/rust/freecodecamp-rust-by-practice/06-flow-contro.md","/rust/freecodecamp-rust-by-practice/07-pattern-match.md","/rust/freecodecamp-rust-by-practice/08-method.md","/rust/freecodecamp-rust-by-practice/09-generics-traits.md","/rust/freecodecamp-rust-by-practice/10-collections.md","/rust/freecodecamp-rust-by-practice/11-type-conversions.md","/rust/freecodecamp-rust-by-practice/12-result-panic.md","/rust/freecodecamp-rust-by-practice/13-crate-module.md","/rust/freecodecamp-rust-by-practice/14-comments-docs.md","/rust/freecodecamp-rust-by-practice/15-formatted-output.md","/rust/freecodecamp-rust-by-practice/16-lifetime.md","/rust/freecodecamp-rust-by-practice/17-functional-programing.md","/rust/freecodecamp-rust-by-practice/18-newtype-sized.md","/rust/freecodecamp-rust-by-practice/19-smart-pointers.md","/rust/freecodecamp-rust-by-practice/20-weak.md","/rust/freecodecamp-rust-by-practice/21-self-referential.md","/rust/freecodecamp-rust-by-practice/22-threads.md","/rust/freecodecamp-rust-by-practice/23-global-variables.md","/rust/freecodecamp-rust-by-practice/24-errors.md","/rust/freecodecamp-rust-by-practice/25-unsafe.md","/rust/freecodecamp-rust-by-practice/26-macro.md","/rust/freecodecamp-rust-by-practice/27-tests.md","/rust/freecodecamp-rust-by-practice/28-async.md","/rust/freecodecamp-rust-by-practice/29-std.md","/rust/freecodecamp-rust-by-practice/30-fight-compiler.md"]},{"text":"Wasm by Example","collapsible":true,"icon":"fa-brands fa-rust","children":["/rust/wasm-by-example/README.md","/rust/wasm-by-example/01-concepts.md","/rust/wasm-by-example/02-applying-the-concepts.md","/rust/wasm-by-example/03-ecosystem-tools-and-language-features.md","/rust/wasm-by-example/04-webassembly-outside-of-the-browser.md"]},{"text":"Rust to Assembly","collapsible":true,"icon":"fa-brands fa-rust","children":["/rust/eventhelix-rust-to-assembly/README.md","/rust/eventhelix-rust-to-assembly/rust-enum-and-match-representation-in-assembly.md","/rust/eventhelix-rust-to-assembly/assembly-code-generated-when-self-is-passed-by-value-reference-or-as-a-smart-pointer.md","/rust/eventhelix-rust-to-assembly/mapping-arrays-tuples-box-and-option-to-assembly.md","/rust/eventhelix-rust-to-assembly/rust-to-assembly-vector-iteration.md"]}],"/php/":[{"text":"PHP","icon":"fa-brands fa-php","children":["/php/README.md"]},{"text":"PHP","collapsible":true,"icon":"fa-brands fa-php","children":["/php/three-min-summary/README.md",{"text":"01. 개발 환경 설정과 기초 문법","collapsible":true,"children":["/php/three-min-summary/01-basics/01A.md","/php/three-min-summary/01-basics/01B.md","/php/three-min-summary/01-basics/01C.md","/php/three-min-summary/01-basics/01D.md","/php/three-min-summary/01-basics/01E.md","/php/three-min-summary/01-basics/01F.md","/php/three-min-summary/01-basics/01G.md","/php/three-min-summary/01-basics/01H.md","/php/three-min-summary/01-basics/01I.md","/php/three-min-summary/01-basics/01J.md","/php/three-min-summary/01-basics/01K.md","/php/three-min-summary/01-basics/01L.md"]},{"text":"02. 웹 다루기","collapsible":true,"children":["/php/three-min-summary/02-web/02A.md","/php/three-min-summary/02-web/02B.md","/php/three-min-summary/02-web/02C.md","/php/three-min-summary/02-web/02D.md","/php/three-min-summary/02-web/02E.md","/php/three-min-summary/02-web/02F.md","/php/three-min-summary/02-web/02G.md","/php/three-min-summary/02-web/02H.md","/php/three-min-summary/02-web/02I.md","/php/three-min-summary/02-web/02J.md","/php/three-min-summary/02-web/02K.md"]},{"text":"03. 데이터베이스 다루기","collapsible":true,"children":["/php/three-min-summary/03-database/03A.md","/php/three-min-summary/03-database/03B.md","/php/three-min-summary/03-database/03C.md","/php/three-min-summary/03-database/03D.md","/php/three-min-summary/03-database/03E.md","/php/three-min-summary/03-database/03F.md","/php/three-min-summary/03-database/03G.md","/php/three-min-summary/03-database/03H.md","/php/three-min-summary/03-database/03I.md","/php/three-min-summary/03-database/03J.md"]},{"text":"04. 문자열 함수들","collapsible":true,"children":["/php/three-min-summary/04-string/04A.md","/php/three-min-summary/04-string/04B.md","/php/three-min-summary/04-string/04C.md","/php/three-min-summary/04-string/04D.md","/php/three-min-summary/04-string/04E.md","/php/three-min-summary/04-string/04F.md"]},{"text":"05. 유효성 검사와 데이터 정제","collapsible":true,"children":["/php/three-min-summary/05-validation/05A.md","/php/three-min-summary/05-validation/05B.md","/php/three-min-summary/05-validation/05C.md","/php/three-min-summary/05-validation/05D.md","/php/three-min-summary/05-validation/05E.md"]},{"text":"06. 모던 php","collapsible":true,"children":["/php/three-min-summary/06-modern-php/06A.md","/php/three-min-summary/06-modern-php/06B.md","/php/three-min-summary/06-modern-php/06C.md","/php/three-min-summary/06-modern-php/06D.md","/php/three-min-summary/06-modern-php/06E.md","/php/three-min-summary/06-modern-php/06F.md","/php/three-min-summary/06-modern-php/06G.md"]},{"text":"07. 한시간 내에 한줄 메모장 만들기","collapsible":true,"children":["/php/three-min-summary/07-miniproject/07A.md","/php/three-min-summary/07-miniproject/07B.md","/php/three-min-summary/07-miniproject/07C.md","/php/three-min-summary/07-miniproject/07D.md","/php/three-min-summary/07-miniproject/07E.md","/php/three-min-summary/07-miniproject/07F.md","/php/three-min-summary/07-miniproject/07G.md","/php/three-min-summary/07-miniproject/07H.md","/php/three-min-summary/07-miniproject/07I.md","/php/three-min-summary/07-miniproject/07J.md","/php/three-min-summary/07-miniproject/07K.md","/php/three-min-summary/07-miniproject/07L.md","/php/three-min-summary/07-miniproject/07M.md","/php/three-min-summary/07-miniproject/07N.md","/php/three-min-summary/07-miniproject/07O.md","/php/three-min-summary/07-miniproject/07P.md"]},"/php/three-min-summary/08-final-note.md"]}],"/cpp/":[{"text":"Cpp","icon":"fas fa-dice-two","children":["/cpp/README.md"]},{"text":"Algorithms for Competitive Programming","collapsible":true,"icon":"fas fa-dice-two","children":["/cpp/algorithms-for-competitive-programming/README.md",{"text":"01. Algebra","collapsible":true,"children":["/cpp/algorithms-for-competitive-programming/01-algebra/01A.md","/cpp/algorithms-for-competitive-programming/01-algebra/01B.md","/cpp/algorithms-for-competitive-programming/01-algebra/01C.md","/cpp/algorithms-for-competitive-programming/01-algebra/01D.md","/cpp/algorithms-for-competitive-programming/01-algebra/01E.md","/cpp/algorithms-for-competitive-programming/01-algebra/01F.md"]},{"text":"02. Data Structures","collapsible":true,"children":["/cpp/algorithms-for-competitive-programming/02-data-structures/02A.md","/cpp/algorithms-for-competitive-programming/02-data-structures/02B.md","/cpp/algorithms-for-competitive-programming/02-data-structures/02C.md"]},{"text":"03. Dynamic Programming","collapsible":true,"children":["/cpp/algorithms-for-competitive-programming/03-dynamic-programming/03A.md","/cpp/algorithms-for-competitive-programming/03-dynamic-programming/03B.md","/cpp/algorithms-for-competitive-programming/03-dynamic-programming/03C.md"]},{"text":"04. String Processing","collapsible":true,"children":["/cpp/algorithms-for-competitive-programming/04-string-processing/04A.md","/cpp/algorithms-for-competitive-programming/04-string-processing/04B.md","/cpp/algorithms-for-competitive-programming/04-string-processing/04C.md"]},{"text":"05. Linear Algebra","collapsible":true,"children":["/cpp/algorithms-for-competitive-programming/04-string-processing/05A.md"]},{"text":"06. Combinatorics","collapsible":true,"children":["/cpp/algorithms-for-competitive-programming/06-combinatorics/06A.md","/cpp/algorithms-for-competitive-programming/06-combinatorics/06B.md","/cpp/algorithms-for-competitive-programming/06-combinatorics/06C.md"]},{"text":"07. Numerical Methods","collapsible":true,"children":["/cpp/algorithms-for-competitive-programming/07-numerical-methods/07A.md","/cpp/algorithms-for-competitive-programming/07-numerical-methods/07B.md"]},{"text":"08. Geometry","collapsible":true,"children":["/cpp/algorithms-for-competitive-programming/08-geometry/08A.md","/cpp/algorithms-for-competitive-programming/08-geometry/08B.md","/cpp/algorithms-for-competitive-programming/08-geometry/08C.md","/cpp/algorithms-for-competitive-programming/08-geometry/08D.md","/cpp/algorithms-for-competitive-programming/08-geometry/08E.md","/cpp/algorithms-for-competitive-programming/08-geometry/08F.md"]},{"text":"09. Graphs","collapsible":true,"children":["/cpp/algorithms-for-competitive-programming/09-graphs/09A.md","/cpp/algorithms-for-competitive-programming/09-graphs/09B.md","/cpp/algorithms-for-competitive-programming/09-graphs/09C.md","/cpp/algorithms-for-competitive-programming/09-graphs/09D.md","/cpp/algorithms-for-competitive-programming/09-graphs/09E.md","/cpp/algorithms-for-competitive-programming/09-graphs/09F.md","/cpp/algorithms-for-competitive-programming/09-graphs/09G.md","/cpp/algorithms-for-competitive-programming/09-graphs/09H.md","/cpp/algorithms-for-competitive-programming/09-graphs/09I.md","/cpp/algorithms-for-competitive-programming/09-graphs/09J.md"]},{"text":"10. Misc","collapsible":true,"children":["/cpp/algorithms-for-competitive-programming/10-misc/10A.md","/cpp/algorithms-for-competitive-programming/10-misc/10B.md","/cpp/algorithms-for-competitive-programming/10-misc/10C.md","/cpp/algorithms-for-competitive-programming/10-misc/10D.md"]}]}],"/ruby/":[{"text":"Ruby","icon":"fas fa-gem","children":["/ruby/README.md"]},{"text":"Jets - Learning Content","collapsible":true,"icon":"fas fa-gem","children":["/ruby/rubyonjets-learning-content/README.md","/ruby/rubyonjets-learning-content/20190204-aws-lambda-function-jets-introductory-series-part-1.md","/ruby/rubyonjets-learning-content/20190205-api-gateway-jets-introductory-series-part-2.md","/ruby/rubyonjets-learning-content/20190206-cloudwatch-event-rule-jets-introductory-series-part-3.md","/ruby/rubyonjets-learning-content/20190211-hello-world-examples-jets-introductory-series-part-4","/ruby/rubyonjets-learning-content/20180907-jets-tutorial-crud-app-introduction-part-1.md","/ruby/rubyonjets-learning-content/20180908-jets-tutorial-deploy-to-aws-lambda-part-2.md","/ruby/rubyonjets-learning-content/20180909-jets-tutorial-debugging-logs-part-3.md","/ruby/rubyonjets-learning-content/20180910-jets-tutorial-background-jobs-part-4.md","/ruby/rubyonjets-learning-content/20180911-jets-tutorial-iam-policies-part-5.md","/ruby/rubyonjets-learning-content/20180912-jets-tutorial-function-properties-part-6.md","/ruby/rubyonjets-learning-content/20180913-jets-tutorial-extra-environments-part-7.md","/ruby/rubyonjets-learning-content/20180926-jets-tutorial-different-environments-part-8.md","/ruby/rubyonjets-learning-content/20180927-jets-tutorial-polymorphic-support-part-9.md","/ruby/rubyonjets-learning-content/20181112-jets-tutorial-jets-delete.md","/ruby/rubyonjets-learning-content/20180818-introducing-jets-a-ruby-serverless-framework.md","/ruby/rubyonjets-learning-content/20181212-official-aws-ruby-support-for-jets-serverless-framework.md","/ruby/rubyonjets-learning-content/20181213-jets-image-upload-carrierwave-tutorial-binary-support.md","/ruby/rubyonjets-learning-content/20190113-build-an-api-service-with-jets-ruby-serverless-framework.md","/ruby/rubyonjets-learning-content/20190114-serverless-slack-commands-with-ruby.md","/ruby/rubyonjets-learning-content/20181221-jets-afterburner-serverless-rails-on-aws-lambda-in-5-minutes.md"]}],"/haskell/":[{"text":"🐑Haskell","children":["/haskell/README.md"]},{"text":"🐑Megaparsec tutorial","collapsible":true,"children":["/haskell/megaparsec/README.md","/haskell/megaparsec/01.md","/haskell/megaparsec/02.md","/haskell/megaparsec/03.md","/haskell/megaparsec/04.md","/haskell/megaparsec/05.md","/haskell/megaparsec/06.md","/haskell/megaparsec/07.md","/haskell/megaparsec/08.md","/haskell/megaparsec/09.md","/haskell/megaparsec/10.md","/haskell/megaparsec/11.md","/haskell/megaparsec/12.md","/haskell/megaparsec/13.md","/haskell/megaparsec/14.md","/haskell/megaparsec/15.md","/haskell/megaparsec/16.md","/haskell/megaparsec/17.md","/haskell/megaparsec/18.md"]},{"text":"🐑Template Haskell tutorial","collapsible":true,"children":["/haskell/template-haskell/README.md","/haskell/template-haskell/01.md","/haskell/template-haskell/02.md","/haskell/template-haskell/03.md","/haskell/template-haskell/04.md","/haskell/template-haskell/05.md","/haskell/template-haskell/06.md","/haskell/template-haskell/07.md","/haskell/template-haskell/08.md","/haskell/template-haskell/09.md","/haskell/template-haskell/10.md","/haskell/template-haskell/11.md","/haskell/template-haskell/12.md","/haskell/template-haskell/13.md","/haskell/template-haskell/14.md","/haskell/template-haskell/15.md"]}],"/devops/":[{"text":"DevOps","icon":"fas fa-cubes-stacked","children":["/devops/README.md"]},{"text":"Red Hat Container Tools","collapsible":true,"icon":"fa-brands fa-redhat","children":["/devops/red-hat-container-tools/README.md","/devops/red-hat-container-tools/01.md","/devops/red-hat-container-tools/02.md","/devops/red-hat-container-tools/03.md","/devops/red-hat-container-tools/04.md","/devops/red-hat-container-tools/05.md","/devops/red-hat-container-tools/06.md","/devops/red-hat-container-tools/07.md","/devops/red-hat-container-tools/08.md"]},{"text":"Containerize Your Application With Buildah And Podman","collapsible":true,"icon":"fa-brands fa-redhat","children":["/devops/red-hat-containerize-your-application-w-buildah-and-podman/README.md","/devops/red-hat-containerize-your-application-w-buildah-and-podman/01.md","/devops/red-hat-containerize-your-application-w-buildah-and-podman/02.md","/devops/red-hat-containerize-your-application-w-buildah-and-podman/03.md"]},{"text":"freecodecamp.org - DevOps with GitLab CI","collapsible":true,"icon":"fa-brands fa-gitlab","children":["/devops/freecodecamp-gitlab-ci/README.md","/devops/freecodecamp-gitlab-ci/1.md","/devops/freecodecamp-gitlab-ci/2.md","/devops/freecodecamp-gitlab-ci/3.md","/devops/freecodecamp-gitlab-ci/4.md","/devops/freecodecamp-gitlab-ci/5.md"]},{"text":"DigitalOcean - Kubernetes","collapsible":true,"icon":"fas fa-dharmachakra","children":["/devops/digitalocean-kubernetes/README.md","/devops/digitalocean-kubernetes/2022/20221216-how-to-run-serverless-workloads-with-knative-on-digitalocean-kubernetes.md","/devops/digitalocean-kubernetes/2022/20221118-how-to-secure-your-site-in-kubernetes-with-cert-manager-traefik-and-let-s-encrypt.md"]},{"text":"아마존 웹 서비스를 다루는 기술 - 실무에서 필요한 AWS 클라우드의 모든 것!","collapsible":true,"icon":"fa-brands fa-aws","children":["/devops/art-of-aws/README.md","/devops/art-of-aws/01.md","/devops/art-of-aws/02.md","/devops/art-of-aws/03.md","/devops/art-of-aws/04.md","/devops/art-of-aws/05.md","/devops/art-of-aws/06.md","/devops/art-of-aws/07.md","/devops/art-of-aws/08.md","/devops/art-of-aws/09.md","/devops/art-of-aws/10.md","/devops/art-of-aws/11.md","/devops/art-of-aws/12.md","/devops/art-of-aws/13.md","/devops/art-of-aws/14.md","/devops/art-of-aws/15.md","/devops/art-of-aws/16.md","/devops/art-of-aws/17.md","/devops/art-of-aws/18.md","/devops/art-of-aws/19.md","/devops/art-of-aws/20.md","/devops/art-of-aws/21.md","/devops/art-of-aws/22.md","/devops/art-of-aws/23.md","/devops/art-of-aws/24.md","/devops/art-of-aws/25.md","/devops/art-of-aws/26.md","/devops/art-of-aws/27.md","/devops/art-of-aws/28.md","/devops/art-of-aws/29.md","/devops/art-of-aws/30.md","/devops/art-of-aws/31.md","/devops/art-of-aws/32.md","/devops/art-of-aws/33.md","/devops/art-of-aws/a.md"]},{"text":"Linux Journey","collapsible":true,"icon":"fa-brands fa-linux","children":["/devops/linux-journey/README.md",{"text":"Grasshopper","collapsible":true,"children":["/devops/linux-journey/01-grasshopper/01a-getting-started.md","/devops/linux-journey/01-grasshopper/01b-command-line.md","/devops/linux-journey/01-grasshopper/01c-text-fu.md","/devops/linux-journey/01-grasshopper/01d-advanced-text-fu.md","/devops/linux-journey/01-grasshopper/01e-user-management.md","/devops/linux-journey/01-grasshopper/01f-permissions.md","/devops/linux-journey/01-grasshopper/01g-processes.md","/devops/linux-journey/01-grasshopper/01h-packages.md"]},{"text":"Journeyman","collapsible":true,"children":["/devops/linux-journey/02-journeyman/02a-devices.md","/devops/linux-journey/02-journeyman/02b-the-filesystem.md","/devops/linux-journey/02-journeyman/02c-boot-the-system.md","/devops/linux-journey/02-journeyman/02d-kernel.md","/devops/linux-journey/02-journeyman/02e-init.md","/devops/linux-journey/02-journeyman/02f-process-utilization.md","/devops/linux-journey/02-journeyman/02g-logging.md"]},{"text":"Networking Nomad","collapsible":true,"children":["/devops/linux-journey/03-networking-nomad/03a-network-sharing.md","/devops/linux-journey/03-networking-nomad/03b-network-basics.md","/devops/linux-journey/03-networking-nomad/03c-subnetting.md","/devops/linux-journey/03-networking-nomad/03d-routing.md","/devops/linux-journey/03-networking-nomad/03e-network-config.md","/devops/linux-journey/03-networking-nomad/03f-troubleshooting.md","/devops/linux-journey/03-networking-nomad/03g-dns.md"]}]},{"text":"CYL2002 - Digital Forensics Lab","collapsible":true,"icon":"fas fa-shield-halved","children":["/devops/digital-forensics-lab/README.md","/devops/digital-forensics-lab/01.md","/devops/digital-forensics-lab/02.md","/devops/digital-forensics-lab/03.md","/devops/digital-forensics-lab/04.md","/devops/digital-forensics-lab/05.md","/devops/digital-forensics-lab/06.md","/devops/digital-forensics-lab/07.md","/devops/digital-forensics-lab/08.md","/devops/digital-forensics-lab/09.md","/devops/digital-forensics-lab/10.md"]},{"text":"요즘 IT 블로그 - DevOps 관련","collapsible":true,"icon":"fas fa-cubes-stacked","children":["/devops/yozm/README.md","/devops/yozm/2464.md","/devops/yozm/2503.md"]}],"/misc/":[{"text":"Misc.","icon":"fas fa-object-group","children":["/misc/README.md"]},{"text":"Colt Steele - Mastering CSS Grid","collapsible":true,"icon":"fa-brands fa-css3-alt","children":["/misc/colt-steele-mastering-css-grid/README.md","/misc/colt-steele-mastering-css-grid/01-css-grid-basics","/misc/colt-steele-mastering-css-grid/02-units-and-utilities","/misc/colt-steele-mastering-css-grid/03-positioning-elements-by-lines","/misc/colt-steele-mastering-css-grid/04-grid-areas","/misc/colt-steele-mastering-css-grid/05-the-implicit-grid","/misc/colt-steele-mastering-css-grid/06-creating-responsive-grids","/misc/colt-steele-mastering-css-grid/07-building-an-example-layout"]},{"text":"Microsoft - Generative AI for Beginners","collapsible":true,"icon":"fas fa-brain","children":["/misc/llm-generative-ai-for-beginners/README.md","/misc/llm-generative-ai-for-beginners/00-course-setup.md","/misc/llm-generative-ai-for-beginners/01-introduction-to-genai.md","/misc/llm-generative-ai-for-beginners/02-exploring-and-comparing-different-llms.md"]},{"text":"DB Server 성능 향상 분석 및 튜닝 전문가 향상과정","collapsible":true,"icon":"fas fa-database","children":["/misc/oracle-sql-db-tuning/README.md","/misc/oracle-sql-db-tuning/01a.md","/misc/oracle-sql-db-tuning/01b.md","/misc/oracle-sql-db-tuning/01c.md","/misc/oracle-sql-db-tuning/01d.md","/misc/oracle-sql-db-tuning/02a.md","/misc/oracle-sql-db-tuning/03a.md","/misc/oracle-sql-db-tuning/03b.md","/misc/oracle-sql-db-tuning/03c.md"]}]}}},"breadcrumbIcon":true,"blog":{"intro":"https://chanhi2000.github.io","description":"프로그램이 작성되는 환경부터 배포되는 환경까지 적용하는 개발자 이찬희 입니다.","avatar":"https://avatars.githubusercontent.com/u/6296241?v=4","roundAvatar":true,"medias":{"GitHub":"https://github.com/chanhi2000","Facebook":"https://facebook.com/spamlove","Instagram":"https://instagram.com/chanhi2000","Linkedin":"https://linkedin.com/in/chanhi2000","Gmail":"chanhi2000@gmail.com"}}}`),Q1=q(K1),Pu=()=>Q1,Du=Symbol(""),Y1=()=>{const e=fe(Du);if(!e)throw new Error("useThemeLocaleData() is called without provider.");return e},Z1=(e,t)=>{const{locales:a,...s}=e;return{...s,...a==null?void 0:a[t]}},X1=Xe({enhance({app:e}){const t=Pu(),a=e._context.provides[vn],s=_(()=>Z1(t.value,a.routeLocale.value));e.provide(Du,s),Object.defineProperties(e.config.globalProperties,{$theme:{get(){return t.value}},$themeLocale:{get(){return s.value}}})}}),ew=/\b(?:Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini)/i,tw=()=>typeof window<"u"&&window.navigator&&"userAgent"in window.navigator&&ew.test(navigator.userAgent),wi=new Map,aw=({delay:e=500,duration:t=2e3,locales:a,selector:s,showInMobile:i})=>{const{copy:n}=Rf({legacy:!0}),o=xt(a),c=we(),u=m=>{if(!m.hasAttribute("copy-code-registered")){const h=document.createElement("button");h.type="button",h.classList.add("vp-copy-code-button"),h.innerHTML='<div class="vp-copy-icon" />',h.setAttribute("aria-label",o.value.copy),h.setAttribute("data-copied",o.value.copied),m.parentElement&&m.parentElement.insertBefore(h,m),m.setAttribute("copy-code-registered","")}},d=()=>{Ft().then(()=>setTimeout(()=>{s.forEach(m=>{document.querySelectorAll(m).forEach(u)})},e))},p=(m,h,f)=>{let{innerText:g=""}=h;/language-(shellscript|shell|bash|sh|zsh)/.test(m.classList.toString())&&(g=g.replace(/^ *(\$|>) /gm,"")),n(g).then(()=>{f.classList.add("copied"),clearTimeout(wi.get(f));const E=setTimeout(()=>{f.classList.remove("copied"),f.blur(),wi.delete(f)},t);wi.set(f,E)})};ie(()=>{const m=!tw()||i;m&&d(),ve("click",h=>{const f=h.target;if(f.matches('div[class*="language-"] > button.copy')){const g=f.parentElement,E=f.nextElementSibling;E&&p(g,E,f)}else if(f.matches('div[class*="language-"] div.vp-copy-icon')){const g=f.parentElement,E=g.parentElement,k=g.nextElementSibling;k&&p(E,k,g)}}),re(()=>c.value.path,()=>{m&&d()})})};var sw={"/":{copy:"Copy Codes from code block",copied:"Copied"}},rw=['.theme-hope-content div[class*="language-"] pre'];const iw=500,nw=2e3,ow=sw,lw=rw,cw=!1,uw=Xe({setup:()=>{aw({selector:lw,locales:ow,duration:nw,delay:iw,showInMobile:cw})}});var dw={"/":{author:"Copyright by :author",license:"License under :license",link:":link"}},pw={canonical:"",author:"Chan Hee Lee",license:"MIT Licensed",global:!1,disableCopy:!1,disableSelection:!1,triggerLength:100,maxLength:0};const Qt=pw,{canonical:or}=Qt,mw=()=>{const e=ye(),t=xt(dw),a=we(),s=_(()=>!!e.value.copy||e.value.copy!==!1&&Qt.global),i=_(()=>yt(e.value.copy)?e.value.copy:null),n=_(()=>{var f;return((f=i.value)==null?void 0:f.disableCopy)??Qt.disableCopy}),o=_(()=>{var f;return s.value?((f=i.value)==null?void 0:f.disableSelection)??Qt.disableSelection:!1}),c=_(()=>{var f;return s.value?((f=i.value)==null?void 0:f.maxLength)??Qt.maxLength:0}),u=_(()=>{var f;return((f=i.value)==null?void 0:f.triggerLength)??Qt.triggerLength}),d=()=>or?`${Mr(Et(or)?or:`https://${or}`)}${a.value.path}`:window.location.href,p=(f,g)=>{const{author:E,license:k,link:y}=t.value;return[f?E.replace(":author",f):"",g?k.replace(":license",g):"",y.replace(":link",d())].filter(T=>T).join(`
`)},m=()=>{if(ke(a.value.copyright))return a.value.copyright.replace(":link",d());const{author:f,license:g}=a.value.copyright||{};return p(f??Qt.author,g??Qt.license)},h=f=>{const g=getSelection();if(g){const E=g.getRangeAt(0);if(s.value){const k=E.toString().length;if(n.value||c.value&&k>c.value)return f.preventDefault();if(k>=u.value){f.preventDefault();const y=m(),T=document.createElement("div");T.appendChild(g.getRangeAt(0).cloneContents()),f.clipboardData&&(f.clipboardData.setData("text/html",`${T.innerHTML}<hr><div class="copyright">${y.replace(/\\n/g,"<br>")}</div>`),f.clipboardData.setData("text/plain",`${g.getRangeAt(0).cloneContents().textContent||""}
------
${y}`))}}}};ie(()=>{const f=document.querySelector("#app");ve(f,"copy",h),un(()=>{f.style.userSelect=o.value?"none":"auto"})})},hw=Xe({setup:()=>{mw()}}),Ka=()=>{const e=document.documentElement;return e.classList.contains("dark")||e.getAttribute("data-theme")==="dark"},fw=(e,t)=>t==="json"?JSON.parse(e):new Function(`let config,__chart_js_config__;
{
${e}
__chart_js_config__=config;
}
return __chart_js_config__;`)();var ww=D({name:"ChartJS",props:{config:{type:String,required:!0},id:{type:String,required:!0},title:{type:String,default:""},type:{type:String,default:"json"}},setup(e){const t=le(),a=le(),s=q(!1),i=q(!0),n=_(()=>Bt(e.config));let o=!1,c;const u=async d=>{const[{default:p}]=await Promise.all([r(()=>import("./auto-C0MMSKEI.js"),__vite__mapDeps([])),o?Promise.resolve():(o=!0,new Promise(f=>setTimeout(f,800)))]);p.defaults.borderColor=d?"#ccc":"#36A2EB",p.defaults.color=d?"#fff":"#000",p.defaults.maintainAspectRatio=!1;const m=fw(n.value,e.type),h=a.value.getContext("2d");c==null||c.destroy(),c=new p(h,m),i.value=!1};return ie(()=>{s.value=Ka(),Tn(document.documentElement,()=>{s.value=Ka()},{attributeFilter:["class","data-theme"],attributes:!0}),re(s,d=>u(d),{immediate:!0})}),()=>[e.title?l("div",{class:"chartjs-title"},decodeURIComponent(e.title)):null,i.value?l(ca,{class:"chartjs-loading",height:192}):null,l("div",{ref:t,class:"chartjs-wrapper",id:e.id,style:{display:i.value?"none":"block"}},l("canvas",{ref:a,height:400}))]}});const lr=Fr("VUEPRESS_CODE_TAB_STORE",{});var gw=D({name:"CodeTabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},id:{type:String,required:!0},tabId:{type:String,default:""}},slots:Object,setup(e,{slots:t}){const a=q(e.active),s=le([]),i=()=>{e.tabId&&(lr.value[e.tabId]=e.data[a.value].id)},n=(d=a.value)=>{a.value=d<s.value.length-1?d+1:0,s.value[a.value].focus()},o=(d=a.value)=>{a.value=d>0?d-1:s.value.length-1,s.value[a.value].focus()},c=(d,p)=>{d.key===" "||d.key==="Enter"?(d.preventDefault(),a.value=p):d.key==="ArrowRight"?(d.preventDefault(),n()):d.key==="ArrowLeft"&&(d.preventDefault(),o()),e.tabId&&(lr.value[e.tabId]=e.data[a.value].id)},u=()=>{if(e.tabId){const d=e.data.findIndex(({id:p})=>lr.value[e.tabId]===p);if(d!==-1)return d}return e.active};return ie(()=>{a.value=u(),re(()=>lr.value[e.tabId],(d,p)=>{if(e.tabId&&d!==p){const m=e.data.findIndex(({id:h})=>h===d);m!==-1&&(a.value=m)}})}),()=>e.data.length?l("div",{class:"vp-code-tabs"},[l("div",{class:"vp-code-tabs-nav",role:"tablist"},e.data.map(({id:d},p)=>{const m=p===a.value;return l("button",{type:"button",ref:h=>{h&&(s.value[p]=h)},class:["vp-code-tab-nav",{active:m}],role:"tab","aria-controls":`codetab-${e.id}-${p}`,"aria-selected":m,onClick:()=>{a.value=p,i()},onKeydown:h=>c(h,p)},t[`title${p}`]({value:d,isActive:m}))})),e.data.map(({id:d},p)=>{const m=p===a.value;return l("div",{class:["vp-code-tab",{active:m}],id:`codetab-${e.id}-${p}`,role:"tabpanel","aria-expanded":m},[l("div",{class:"vp-code-tab-title"},t[`title${p}`]({value:d,isActive:m})),t[`tab${p}`]({value:d,isActive:m})])})]):null}});const Ou=({active:e=!1},{slots:t})=>{var a;return l("div",{class:["code-group-item",{active:e}],"aria-selected":e},(a=t.default)==null?void 0:a.call(t))};Ou.displayName="CodeGroupItem";const vw=D({name:"CodeGroup",slots:Object,setup(e,{slots:t}){const a=q(-1),s=le([]),i=(c=a.value)=>{a.value=c<s.value.length-1?c+1:0,s.value[a.value].focus()},n=(c=a.value)=>{a.value=c>0?c-1:s.value.length-1,s.value[a.value].focus()},o=(c,u)=>{c.key===" "||c.key==="Enter"?(c.preventDefault(),a.value=u):c.key==="ArrowRight"?(c.preventDefault(),i(u)):c.key==="ArrowLeft"&&(c.preventDefault(),n(u))};return()=>{var u;const c=(((u=t.default)==null?void 0:u.call(t))||[]).filter(d=>d.type.name==="CodeGroupItem").map(d=>(d.props===null&&(d.props={}),d));return c.length===0?null:(a.value<0||a.value>c.length-1?(a.value=c.findIndex(d=>"active"in d.props),a.value===-1&&(a.value=0)):c.forEach((d,p)=>{d.props.active=p===a.value}),l("div",{class:"code-group"},[l("div",{class:"code-group-nav"},c.map((d,p)=>{const m=p===a.value;return l("button",{type:"button",ref:h=>{h&&(s.value[p]=h)},class:["code-group-nav-tab",{active:m}],"aria-pressed":m,"aria-expanded":m,onClick:()=>{a.value=p},onKeydown:h=>o(h,p)},d.props.title)})),c]))}}}),yw=()=>l(ne,{name:"back"},()=>l("path",{d:"M1014.749 449.156v125.688H260.626l345.64 345.64-89.239 89.237L19.307 512l497.72-497.721 89.238 89.238-345.64 345.64h754.124z"})),_w=()=>l(ne,{name:"home"},()=>l("path",{d:"M780.106 420.978L506.994 147.866 233.882 420.978h.045v455.11H780.06v-455.11h.046zm90.977 90.976V876.09a91.022 91.022 0 01-91.023 91.022H233.927a91.022 91.022 0 01-91.022-91.022V511.954l-67.22 67.175-64.307-64.307 431.309-431.31c35.498-35.498 93.115-35.498 128.614 0l431.309 431.31-64.307 64.307L871.083 512z"})),bw='<svg class="codepen-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M123.429 668L468 897.714V692.571L277.143 565.143zM88 585.714L198.286 512 88 438.286v147.428zm468 312L900.571 668 746.857 565.143 556 692.57v205.143zM512 616l155.429-104L512 408 356.571 512zM277.143 458.857L468 331.43V126.286L123.429 356zM825.714 512L936 585.714V438.286zm-78.857-53.143L900.571 356 556 126.286v205.143zM1024 356v312q0 23.429-19.429 36.571l-468 312Q524.571 1024 512 1024t-24.571-7.429l-468-312Q0 691.43 0 668V356q0-23.429 19.429-36.571l468-312Q499.429 0 512 0t24.571 7.429l468 312Q1024 332.57 1024 356z"/></svg>',Ew='<svg class="jsfiddle-icon" viewBox="0 0 1170 1024" xmlns="http://www.w3.org/2000/svg"><path d="M1028.571 441.143q63.429 26.286 102.572 83.143t39.143 126.571q0 93.714-67.429 160.286T940 877.714q-2.286 0-6.571-.285t-6-.286H232q-97.143-5.714-164.571-71.714T0 645.143q0-62.857 31.429-116t84-84q-6.858-22.286-6.858-46.857 0-65.715 46.858-112T269.143 240q54.286 0 98.286 33.143 42.857-88 127.142-141.714t186.572-53.715q94.857 0 174.857 46t126.571 124.857 46.572 172q0 3.429-.286 10.286t-.286 10.286zm-761.142 152q0 69.714 48 110.286T434.286 744q78.285 0 137.143-56.571-9.143-11.429-27.143-32.286t-24.857-28.857q-38.286 37.143-82.286 37.143-31.429 0-53.429-19.143t-22-50q0-30.286 22-49.715T436 525.143q25.143 0 48.286 12T526 568.57t37.143 42.858 39.428 46.857 44 42.857T702 732.57t69.429 12q69.142 0 116.857-40.857T936 594.857q0-69.143-48-109.714T769.714 444.57Q688 444.571 632 500l53.143 61.714q37.714-36.571 81.143-36.571 29.714 0 52.571 18.857t22.857 48q0 32.571-21.143 52.286T766.857 664q-24.571 0-47.143-12t-41.143-31.429-37.428-42.857-39.714-46.857T557.143 488 502 456.571t-67.714-12q-69.715 0-118.286 40.286t-48.571 108.286z"/></svg>';var kw={useBabel:!1,jsLib:[],cssLib:[],codepenLayout:"left",codepenEditors:"101",babel:"https://unpkg.com/@babel/standalone/babel.min.js",vue:"https://unpkg.com/vue/dist/vue.global.prod.js",react:"https://unpkg.com/react/umd/react.production.min.js",reactDOM:"https://unpkg.com/react-dom/umd/react-dom.production.min.js"};const gi=kw,bl={html:{types:["html","slim","haml","md","markdown","vue"],map:{html:"none",vue:"none",md:"markdown"}},js:{types:["js","javascript","coffee","coffeescript","ts","typescript","ls","livescript"],map:{js:"none",javascript:"none",coffee:"coffeescript",ls:"livescript",ts:"typescript"}},css:{types:["css","less","sass","scss","stylus","styl"],map:{css:"none",styl:"stylus"}}},xw=(e,t,a)=>{const s=document.createElement(e);return yt(t)&&nt(t).forEach(i=>{if(i.indexOf("data"))s[i]=t[i];else{const n=i.replace("data","");s.dataset[n]=t[i]}}),a&&a.forEach(i=>{s.appendChild(i)}),s},Vn=e=>({...gi,...e,jsLib:Array.from(new Set([...gi.jsLib||[],...e.jsLib||[]])),cssLib:Array.from(new Set([...gi.cssLib||[],...e.cssLib||[]]))}),za=(e,t)=>{if(bn(e[t]))return e[t];const a=new Promise(s=>{var n;const i=document.createElement("script");i.src=t,(n=document.querySelector("body"))==null||n.appendChild(i),i.onload=()=>{s()}});return e[t]=a,a},Tw=(e,t)=>{if(t.css&&Array.from(e.childNodes).every(a=>a.nodeName!=="STYLE")){const a=xw("style",{innerHTML:t.css});e.appendChild(a)}},Aw=(e,t,a)=>{const s=a.getScript();if(s&&Array.from(t.childNodes).every(i=>i.nodeName!=="SCRIPT")){const i=document.createElement("script");i.appendChild(document.createTextNode(`{const document=window.document.querySelector('#${e} .vp-code-demo-display').shadowRoot;
${s}}`)),t.appendChild(i)}},jw=e=>{const t=nt(e),a={html:[],js:[],css:[],isLegal:!1};return["html","js","css"].forEach(s=>{const i=t.filter(n=>bl[s].types.includes(n));if(i.length){const n=i[0];a[s]=[e[n].replace(/^\n|\n$/g,""),bl[s].map[n]||n]}}),a.isLegal=(!a.html.length||a.html[1]==="none")&&(!a.js.length||a.js[1]==="none")&&(!a.css.length||a.css[1]==="none"),a},Ru=e=>e.replace(/<br \/>/g,"<br>").replace(/<((\S+)[^<]*?)\s+\/>/g,"<$1></$2>"),Vu=e=>`<div id="app">
${Ru(e)}
</div>`,Iw=e=>`${e.replace("export default ","const $reactApp = ").replace(/App\.__style__(\s*)=(\s*)`([\s\S]*)?`/,"")};
ReactDOM.createRoot(document.getElementById("app")).render(React.createElement($reactApp))`,Lw=e=>e.replace(/export\s+default\s*\{(\n*[\s\S]*)\n*\}\s*;?$/u,"Vue.createApp({$1}).mount('#app')").replace(/export\s+default\s*define(Async)?Component\s*\(\s*\{(\n*[\s\S]*)\n*\}\s*\)\s*;?$/u,"Vue.createApp({$1}).mount('#app')").trim(),Cu=e=>`(function(exports){var module={};module.exports=exports;${e};return module.exports.__esModule?module.exports.default:module.exports;})({})`,Sw=(e,t)=>{const a=Vn(t),s=e.js[0]||"";return{...a,html:Ru(e.html[0]||""),js:s,css:e.css[0]||"",isLegal:e.isLegal,getScript:()=>{var i;return a.useBabel?((i=window.Babel.transform(s,{presets:["es2015"]}))==null?void 0:i.code)||"":s}}},Pw=/<template>([\s\S]+)<\/template>/u,Dw=/<script(\s*lang=(['"])(.*?)\2)?>([\s\S]+)<\/script>/u,Ow=/<style(\s*lang=(['"])(.*?)\2)?\s*(?:scoped)?>([\s\S]+)<\/style>/u,Rw=(e,t)=>{const a=Vn(t),s=e.html[0]||"",i=Pw.exec(s),n=Dw.exec(s),o=Ow.exec(s),c=i?i[1].replace(/^\n|\n$/g,""):"",[u="",d=""]=n?[n[4].replace(/^\n|\n$/g,""),n[3]]:[],[p="",m=""]=o?[o[4].replace(/^\n|\n$/g,""),o[3]]:[],h=d===""&&(m===""||m==="css");return{...a,html:Vu(c),js:Lw(u),css:p,isLegal:h,jsLib:[a.vue,...a.jsLib],getScript:()=>{var g,E;const f=t.useBabel?((E=(g=window.Babel)==null?void 0:g.transform(u,{presets:["es2015"]}))==null?void 0:E.code)||"":u.replace(/export\s+default/u,"return");return`const app=window.document.createElement('div');document.firstElementChild.appendChild(app);const appOptions=${Cu(f)};appOptions.template=\`${c.replace("`",'\\`"')}\`;window.Vue.createApp(appOptions).mount(app);`}}},Vw=(e,t)=>{const a=Vn(t);return{...a,html:Vu(""),js:Iw(e.js[0]||""),css:e.css[0]||(e.js[0]?e.js[0].replace(/App\.__style__(?:\s*)=(?:\s*)`([\s\S]*)?`/,"$1").trim():""),isLegal:e.isLegal,jsLib:[a.react,a.reactDOM,...a.jsLib],jsx:!0,getScript:()=>{var i,n;const s=((n=(i=window.Babel)==null?void 0:i.transform(e.js[0]||"",{presets:["es2015","react"]}))==null?void 0:n.code)||"";return`window.ReactDOM.createRoot(document.firstElementChild).render(window.React.createElement(${Cu(s)}))`}}},Ba={},Cw=e=>Promise.all([za(Ba,e.babel),za(Ba,e.react),za(Ba,e.reactDOM)]),Mw=e=>{const t=[za(Ba,e.vue)];return e.useBabel&&t.push(za(Ba,e.babel)),Promise.all(t)},Hw=e=>e.useBabel?za(Ba,e.babel):Promise.resolve();var Nw=D({name:"CodeDemo",props:{id:{type:String,required:!0},type:{type:String,default:"normal"},title:{type:String,default:""},config:{type:String,default:""},code:{type:String,required:!0}},slots:Object,setup(e,{slots:t}){const[a,s]=kr(!1),i=le(),n=le(),o=q("0"),c=q(!1),u=_(()=>JSON.parse(e.config?Bt(e.config):"{}")),d=_(()=>{const g=JSON.parse(Bt(e.code));return jw(g)}),p=_(()=>e.type==="react"?Vw(d.value,u.value):e.type==="vue"?Rw(d.value,u.value):Sw(d.value,u.value)),m=_(()=>p.value.isLegal),h=(g=!1)=>{const E=i.value.attachShadow({mode:"open"}),k=document.createElement("div");k.classList.add("code-demo-app"),E.appendChild(k),m.value?(g&&(k.innerHTML=p.value.html),Tw(E,p.value),Aw(e.id,E,p.value),o.value="0"):o.value="auto",c.value=!0},f=()=>{switch(e.type){case"react":return Cw(p.value).then(()=>h());case"vue":return Mw(p.value).then(()=>h());default:return Hw(p.value).then(()=>h(!0))}};return ve("beforeprint",()=>{s(!0)}),ie(()=>{setTimeout(()=>{f()},800)}),()=>{var g;return l("div",{class:"vp-code-demo",id:e.id},[l("div",{class:"vp-code-demo-header"},[p.value.isLegal?l("button",{type:"button",title:"toggle","aria-hidden":!0,class:["vp-code-demo-toggle-button",a.value?"down":"end"],onClick:()=>{o.value=a.value?"0":`${n.value.clientHeight+13.8}px`,s()}}):null,e.title?l("span",{class:"vp-code-demo-title"},decodeURIComponent(e.title)):null,p.value.isLegal&&p.value.jsfiddle!==!1?l("form",{class:"code-demo-jsfiddle",target:"_blank",action:"https://jsfiddle.net/api/post/library/pure/",method:"post"},[l("input",{type:"hidden",name:"html",value:p.value.html}),l("input",{type:"hidden",name:"js",value:p.value.js}),l("input",{type:"hidden",name:"css",value:p.value.css}),l("input",{type:"hidden",name:"wrap",value:"1"}),l("input",{type:"hidden",name:"panel_js",value:"3"}),l("input",{type:"hidden",name:"resources",value:[...p.value.cssLib,...p.value.jsLib].join(",")}),l("button",{type:"submit",class:"jsfiddle-button",innerHTML:Ew,"aria-label":"JSFiddle","data-balloon-pos":"up"})]):null,!p.value.isLegal||p.value.codepen!==!1?l("form",{class:"code-demo-codepen",target:"_blank",action:"https://codepen.io/pen/define",method:"post"},[l("input",{type:"hidden",name:"data",value:JSON.stringify({html:p.value.html,js:p.value.js,css:p.value.css,js_external:p.value.jsLib.join(";"),css_external:p.value.cssLib.join(";"),layout:p.value.codepenLayout,html_pre_processor:d.value?d.value.html[1]:"none",js_pre_processor:d.value?d.value.js[1]:p.value.jsx?"babel":"none",css_pre_processor:d.value?d.value.css[1]:"none",editors:p.value.codepenEditors})}),l("button",{type:"submit",innerHTML:bw,class:"codepen-button","aria-label":"Codepen","data-balloon-pos":"up"})]):null]),c.value?null:l(ca,{class:"vp-code-demo-loading"}),l("div",{ref:i,class:"vp-code-demo-display",style:{display:m.value&&c.value?"block":"none"}}),l("div",{class:"vp-code-demo-code-wrapper",style:{height:o.value}},l("div",{ref:n,class:"vp-code-demo-codes"},(g=t.default)==null?void 0:g.call(t)))])}}}),zw=D({name:"MdDemo",props:{id:{type:String,required:!0},title:{type:String,default:""}},slots:Object,setup(e,{slots:t}){const[a,s]=kr(!1),i=le(),n=q("0");return ve("beforeprint",()=>{s(!0)}),()=>{var o,c;return l("div",{class:"vp-md-demo",id:e.id},[l("div",{class:"vp-md-demo-header"},[l("button",{type:"button",title:"toggle","aria-hidden":!0,class:["vp-md-demo-toggle-button",a.value?"down":"end"],onClick:()=>{n.value=a.value?"0":`${i.value.clientHeight+13.8}px`,s()}}),e.title?decodeURIComponent(e.title):null]),l("div",{class:"vp-md-demo-display"},(o=t.default)==null?void 0:o.call(t)),l("div",{class:"vp-md-demo-code-wrapper",style:{height:n.value}},l("div",{ref:i,class:"vp-md-demo-codes"},(c=t.code)==null?void 0:c.call(t)))])}}});let Bw={};const Mu=Symbol(""),Fw=()=>fe(Mu),$w=e=>{e.provide(Mu,Bw)},qw=(async()=>{}).constructor,Ww=(e,t,a)=>t==="js"?qw("myChart",`let width,height,option,__echarts_config__;
{
${e}
__echarts_config__={width,height,option};
}
return __echarts_config__;
`)(a):Promise.resolve({option:JSON.parse(e)});var Gw=D({name:"ECharts",props:{config:{type:String,required:!0},id:{type:String,required:!0},title:{type:String,default:""},type:{type:String,default:"json"}},setup(e){const t=Fw(),a=q(!0),s=le();let i;return ve("resize",Br(()=>i==null?void 0:i.resize(),100)),ie(()=>{Promise.all([r(()=>import("./index-BAQFUtjE.js"),__vite__mapDeps([])),new Promise(n=>setTimeout(n,800))]).then(async([n])=>{var u;await((u=t.setup)==null?void 0:u.call(t)),i=n.init(s.value);const{option:o,...c}=await Ww(Bt(e.config),e.type,i);i.resize(c),i.setOption({...t.option,...o}),a.value=!1})}),Dt(()=>{i==null||i.dispose()}),()=>[e.title?l("div",{class:"echarts-title"},decodeURIComponent(e.title)):null,l("div",{class:"echarts-wrapper"},[l("div",{ref:s,class:"echarts-container",id:e.id}),a.value?l(ca,{class:"echarts-loading",height:360}):null])]}}),Cn={x:0,y:0,"line-width":2,"line-length":40,"text-margin":8,"font-size":14,"font-color":"#8DA1AC","line-color":"#8DA1AC","element-color":"black",fill:"white","yes-text":"Yes","no-text":"No","arrow-end":"block",scale:1},Uw={...Cn,symbols:{start:{class:"start-element","font-color":"#fff",fill:"#595959","line-width":"0px"},end:{class:"end-element","font-color":"#fff",fill:"#595959","line-width":"0px"},operation:{class:"operation-element","font-color":"#fff",fill:"#1890ff","line-width":"0px"},inputoutput:{class:"inputoutput-element","font-color":"#fff",fill:"#1890ff","line-width":"0px"},subroutine:{class:"subroutine-element","font-color":"#fff",fill:"#FF485E","element-color":"#fff","line-color":"red"},condition:{class:"condition-element","font-color":"#fff",fill:"#FF485E","line-width":"0px"},parallel:{class:"parallel-element","font-color":"#fff",fill:"#1890ff","line-width":"0px"}}},Jw={...Cn,"line-width":1,symbols:{start:{class:"start-element",fill:"#ccc","line-color":"#5c6ac4","font-color":"#000"},end:{class:"end-element",fill:"#ccc","line-color":"#5c6ac4","font-color":"#000"},operation:{class:"operation-element",fill:"#f1f1f1","line-color":"#5c6ac4","font-color":"#000"},inputoutput:{class:"inputoutput-element",fill:"#f1f1f1","line-color":"#5c6ac4","font-color":"#000"},subroutine:{class:"subroutine-element",fill:"#f1f1f1","line-color":"#5c6ac4","font-color":"#000"},condition:{class:"condition-element",fill:"#f1f1f1","line-color":"#5c6ac4","font-color":"#000"},parallel:{class:"parallel-element",fill:"#f1f1f1","line-color":"#5c6ac4","font-color":"#000"}}},Kw={...Cn,symbols:{start:{class:"start-element","font-color":"#fff",fill:"#2F495F","line-width":"0px"},end:{class:"end-element","font-color":"#fff",fill:"#2F495F","line-width":"0px"},operation:{class:"operation-element","font-color":"#fff",fill:"#00BC7D","line-width":"0px"},inputoutput:{class:"inputoutput-element","font-color":"#fff",fill:"#EB4D5D","line-width":"0px"},subroutine:{class:"subroutine-element","font-color":"#fff",fill:"#937AC4","element-color":"#fff","line-color":"red"},condition:{class:"condition-element","font-color":"#fff",fill:"#FFB500","line-width":"0px"},parallel:{class:"parallel-element","font-color":"#fff",fill:"#2F495F","line-width":"0px"}}};const El={ant:Uw,vue:Kw,pie:Jw};let Qw={};const Hu=Symbol(""),Yw=()=>fe(Hu),Zw=e=>{e.provide(Hu,Qw)};let Xw={};const Nu=Symbol(""),eg=()=>fe(Nu),tg=e=>{e.provide(Nu,Xw)},ag={autoResize:!0,showCompileOutput:!1,clearConsole:!1,layout:"horizontal",ssr:!1};let sg=ag;const zu=Symbol(""),rg=()=>fe(zu),ig=e=>{e.provide(zu,sg)},ng={};let og=ng;const lg=Symbol(""),cg=e=>{e.provide(lg,og)};var ug=D({name:"FlowChart",props:{code:{type:String,required:!0},id:{type:String,required:!0},preset:{type:String,default:"vue"}},setup(e){let t=null;const a=le(),s=q(!0),i=q(1),n=_(()=>El[e.preset]||(console.warn(`[md-enhance:flowchart] Unknown preset: ${e.preset}`),El.vue)),o=c=>c<419?.8:c>1280?1:.9;return ie(()=>{Promise.all([r(()=>import("./flowchart-966sEcGG.js"),__vite__mapDeps([])),new Promise(c=>setTimeout(c,800))]).then(([{parse:c}])=>{t=c(Bt(e.code)),i.value=o(window.innerWidth),s.value=!1,t.draw(e.id,{...n.value,scale:i.value})}),ve("resize",Br(()=>{if(t){const c=o(window.innerWidth);i.value!==c&&(i.value=c,t.draw(e.id,{...n.value,scale:c}))}},100))}),()=>[s.value?l(ca,{class:"flowchart-loading",height:192}):null,l("div",{ref:a,class:["flowchart-wrapper",e.preset],id:e.id,style:{display:s.value?"none":"block"}})]}});const dg=()=>{ve("beforeprint",()=>{document.querySelectorAll("details").forEach(e=>{e.open=!0})})};var pg=D({name:"KotlinPlayground",props:{title:{type:String,default:""},files:{type:String,required:!0},settings:{type:String,default:"{}"}},setup(e){const t=q(!1),a=le(),s=_(()=>JSON.parse(Bt(e.files))),i=_(()=>({theme:t.value?"darcula":"default",...JSON.parse(decodeURIComponent(e.settings))})),n=async()=>{const{default:o}=await r(()=>import("./playground.min-C8EaEQw1.js").then(c=>c.p),__vite__mapDeps([1194,1195]));o(a.value)};return ie(()=>{t.value=Ka(),Tn(document.documentElement,()=>{t.value=Ka()},{attributeFilter:["class","data-theme"],attributes:!0}),re(t,()=>Ft().then(()=>n()),{immediate:!0})}),()=>l("div",{class:"kotlin-playground-wrapper"},[e.title?l("div",{class:"header"},decodeURIComponent(e.title)):null,l("div",{class:"kotlin-playground-container",key:t.value?"dark":"light"},l("div",{class:"kotlin-playground",ref:a,...i.value},[l("pre",s.value[0]),s.value.length>1?s.value.map((o,c)=>c===0?null:l("textarea",{class:"hidden-dependency",readonly:""},o)):null]))])}});const Sa={useMaxWidth:!1},mg=e=>({dark:e,background:e?"#1e1e1e":"#fff",primaryColor:e?"#389d70":"#4abf8a",primaryBorderColor:e?"#389d70":"#4abf8a",primaryTextColor:e?"#fff":"#000",secondaryColor:"#ffb500",secondaryBorderColor:e?"#fff":"#000",secondaryTextColor:e?"#ddd":"#333",tertiaryColor:e?"#282828":"#efeef4",tertiaryBorderColor:e?"#bbb":"#242424",tertiaryTextColor:e?"#ddd":"#333",noteBkgColor:e?"#f6d365":"#fff5ad",noteTextColor:"#242424",noteBorderColor:e?"#f6d365":"#333",lineColor:e?"#d3d3d3":"#333",textColor:e?"#fff":"#242424",mainBkg:e?"#389d70":"#4abf8a",errorBkgColor:"#eb4d5d",errorTextColor:"#fff",nodeBorder:e?"#389d70":"#4abf8a",nodeTextColor:e?"#fff":"#242424",signalTextColor:e?"#9e9e9e":"#242424",classText:"#fff",labelColor:"#fff",attributeBackgroundColorEven:e?"#0d1117":"#fff",attributeBackgroundColorOdd:e?"#161b22":"#f8f8f8",fillType0:e?"#cf1322":"#f1636e",fillType1:"#f39c12",fillType2:"#2ecc71",fillType3:"#fa541c",fillType4:"#25a55b",fillType5:"#13c2c2",fillType6:"#096dd9",fillType7:"#aa6fe9"});var hg=D({name:"Mermaid",props:{id:{type:String,required:!0},code:{type:String,required:!0},title:{type:String,default:""}},setup(e){const{themeVariables:t,...a}=Yw(),s=le(),i=_(()=>Bt(e.code)),n=q(""),o=q(!1);let c=!1;const u=async()=>{const[{default:m}]=await Promise.all([r(()=>import("./mermaid.core-CALYlN9I.js").then(h=>h.b4),__vite__mapDeps([1196,1195])),c?Promise.resolve():(c=!0,new Promise(h=>setTimeout(h,800)))]);m.initialize({theme:"base",themeVariables:{...mg(o.value),...Bc(t)?t(o.value):t},flowchart:Sa,sequence:Sa,journey:Sa,gantt:Sa,er:Sa,pie:Sa,...a,startOnLoad:!1}),n.value=(await m.render(e.id,i.value)).svg},d=()=>{const{body:m}=document,h=document.createElement("div");h.classList.add("mermaid-preview"),h.innerHTML=n.value,m.appendChild(h),h.addEventListener("click",()=>{m.removeChild(h)})},p=()=>{const m=`data:image/svg+xml;charset=utf8,${n.value.replace(/<br>/g,"<br />").replace(/%/g,"%25").replace(/"/g,"%22").replace(/'/g,"%27").replace(/&/g,"%26").replace(/#/g,"%23").replace(/{/g,"%7B").replace(/}/g,"%7D").replace(/</g,"%3C").replace(/>/g,"%3E")}`,h=document.createElement("a");h.setAttribute("href",m),h.setAttribute("download",`${e.title?Bt(e.title):e.id}.svg`),h.click()};return ie(()=>{o.value=Ka(),u(),Tn(document.documentElement,()=>{o.value=Ka()},{attributeFilter:["class","data-theme"],attributes:!0}),re(o,()=>u())}),()=>[l("div",{class:"mermaid-actions"},[l("button",{class:"preview-button",onClick:()=>d(),title:"preview",innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1316 1024" fill="currentColor"><path d="M658.286 0C415.89 0 0 297.106 0 512c0 214.82 415.89 512 658.286 512 242.322 0 658.285-294.839 658.285-512S900.608 0 658.286 0zm0 877.714c-161.573 0-512-221.769-512-365.714 0-144.018 350.427-365.714 512-365.714 161.572 0 512 217.16 512 365.714s-350.428 365.714-512 365.714z"/><path d="M658.286 292.571a219.429 219.429 0 1 0 0 438.858 219.429 219.429 0 0 0 0-438.858zm0 292.572a73.143 73.143 0 1 1 0-146.286 73.143 73.143 0 0 1 0 146.286z"/></svg>'}),l("button",{class:"download-button",onClick:()=>p(),title:"download",innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" fill="currentColor"><path d="M828.976 894.125H190.189c-70.55 0-127.754-57.185-127.754-127.753V606.674c0-17.634 14.31-31.933 31.933-31.933h63.889c17.634 0 31.932 14.299 31.932 31.933v95.822c0 35.282 28.596 63.877 63.877 63.877h511.033c35.281 0 63.877-28.595 63.877-63.877v-95.822c0-17.634 14.298-31.933 31.943-31.933h63.878c17.635 0 31.933 14.299 31.933 31.933v159.7c0 70.566-57.191 127.751-127.754 127.751zM249.939 267.51c12.921-12.92 33.885-12.92 46.807 0l148.97 148.972V94.893c0-17.634 14.302-31.947 31.934-31.947h63.876c17.638 0 31.946 14.313 31.946 31.947v321.589l148.97-148.972c12.922-12.92 33.876-12.92 46.797 0l46.814 46.818c12.922 12.922 12.922 33.874 0 46.807L552.261 624.93c-1.14 1.138-21.664 13.684-42.315 13.693-20.877.01-41.88-12.542-43.021-13.693L203.122 361.135c-12.923-12.934-12.923-33.885 0-46.807l46.817-46.818z"/></svg>'})]),l("div",{ref:s,class:"mermaid-wrapper"},n.value?l("div",{class:"mermaid-content",innerHTML:n.value}):l(ca,{class:"mermaid-loading",height:96}))]}});const fg=()=>[r(()=>import("./reveal.esm-pCLnN5NY.js"),__vite__mapDeps([])),r(()=>import("./markdown.esm-BG2Xu2Hd.js"),__vite__mapDeps([])),r(()=>import("./highlight.esm-DZbuJOj6.js"),__vite__mapDeps([])),r(()=>import("./math.esm-BZ1CfUwa.js"),__vite__mapDeps([])),r(()=>import("./search.esm-D7n3FWhc.js"),__vite__mapDeps([])),r(()=>import("./notes.esm-Dp2Bpauq.js"),__vite__mapDeps([])),r(()=>import("./zoom.esm-Ctj_eavO.js"),__vite__mapDeps([]))];var wg=D({name:"RevealJs",props:{id:{type:String,required:!0},code:{type:String,required:!0},theme:{type:String,default:"auto"}},setup(e){const t=eg(),a=ye(),s=q(""),i=q(!0),n=le();let o=null;const c=async u=>{const d=[new Promise(f=>setTimeout(f,800)),...fg()],[,p,...m]=await Promise.all(d),h=new p.default(u,{backgroundTransition:"slide",hash:a.value.layout==="Slide",mouseWheel:a.value.layout==="Slide",transition:"slide",slideNumber:!0,...t,...a.value.revealJs||{},embedded:a.value.layout!=="Slide",markdown:{separator:`^\r?\\n---\r?
$`,verticalSeparator:`^\r?
--\r?
$`},plugins:[...m.map(({default:f})=>f),...t.plugins??[]]});return await h.initialize(),h};return ie(async()=>{const u=n.value;u&&(s.value=Bt(e.code),u.setAttribute("id",e.id),u.setAttribute("data-theme",e.theme),o=await c(u),i.value=!1)}),Dt(()=>{o==null||o.destroy()}),()=>l("div",{class:"vp-reveal"},[l("div",{ref:n,class:["reveal","reveal-viewport"]},l("div",{class:"slides",innerHTML:`<section data-markdown><script type="text/template">${s.value}<\/script></section>`})),i.value?l(ca,{class:"reveal-loading",height:400}):null])}});const vi=Fr("VUEPRESS_TAB_STORE",{});var gg=D({name:"Tabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},id:{type:String,required:!0},tabId:{type:String,default:""}},slots:Object,setup(e,{slots:t}){const a=q(e.active),s=le([]),i=()=>{e.tabId&&(vi.value[e.tabId]=e.data[a.value].id)},n=(d=a.value)=>{a.value=d<s.value.length-1?d+1:0,s.value[a.value].focus()},o=(d=a.value)=>{a.value=d>0?d-1:s.value.length-1,s.value[a.value].focus()},c=(d,p)=>{d.key===" "||d.key==="Enter"?(d.preventDefault(),a.value=p):d.key==="ArrowRight"?(d.preventDefault(),n()):d.key==="ArrowLeft"&&(d.preventDefault(),o()),i()},u=()=>{if(e.tabId){const d=e.data.findIndex(({id:p})=>vi.value[e.tabId]===p);if(d!==-1)return d}return e.active};return ie(()=>{a.value=u(),re(()=>vi.value[e.tabId],(d,p)=>{if(e.tabId&&d!==p){const m=e.data.findIndex(({id:h})=>h===d);m!==-1&&(a.value=m)}})}),()=>e.data.length?l("div",{class:"vp-tabs"},[l("div",{class:"vp-tabs-nav",role:"tablist"},e.data.map(({id:d},p)=>{const m=p===a.value;return l("button",{type:"button",ref:h=>{h&&(s.value[p]=h)},class:["vp-tab-nav",{active:m}],role:"tab","aria-controls":`tab-${e.id}-${p}`,"aria-selected":m,onClick:()=>{a.value=p,i()},onKeydown:h=>c(h,p)},t[`title${p}`]({value:d,isActive:m}))})),e.data.map(({id:d},p)=>{const m=p===a.value;return l("div",{class:["vp-tab",{active:m}],id:`tab-${e.id}-${p}`,role:"tabpanel","aria-expanded":m},[l("div",{class:"vp-tab-title"},t[`title${p}`]({value:d,isActive:m})),t[`tab${p}`]({value:d,isActive:m})])})]):null}});const vg=e=>JSON.parse(decodeURIComponent(e));var yg=D({name:"VuePlayground",props:{title:{type:String,default:""},files:{type:String,required:!0},settings:{type:String,default:"{}"}},setup(e){const{vueVersion:t=Pc,vueRuntimeDevUrl:a=`https://unpkg.com/@vue/runtime-dom@${t}/dist/runtime-dom.esm-browser.js`,vueRuntimeProdUrl:s=`https://unpkg.com/@vue/runtime-dom@${t}/dist/runtime-dom.esm-browser.prod.js`,vueServerRendererUrl:i=`https://unpkg.com/@vue/server-renderer@${t}/dist/server-renderer.esm-browser.js`,...n}=rg(),o=q(!0),c=le(),u=le(),d=le(),p=_(()=>Ni({},n,vg(e.settings))),m=async()=>{const[{useStore:h,useVueImportMap:f,Repl:g},{default:E}]=await Promise.all([r(()=>import("./vue-repl-CaXs_9TH.js"),__vite__mapDeps([1197,1198])),r(()=>import("./codemirror-editor-pVNjQiv6.js"),__vite__mapDeps([1199,1198]))]);c.value=g,d.value=E;const{importMap:k,vueVersion:y}=f({runtimeDev:a,runtimeProd:s,serverRenderer:i});u.value=h({builtinImportMap:k,vueVersion:y},decodeURIComponent(e.files))};return ie(async()=>{await m(),o.value=!1}),()=>[l("div",{class:"vue-playground-wrapper"},[e.title?l("div",{class:"header"},decodeURIComponent(e.title)):null,l("div",{class:"repl-container"},[o.value?l(ca,{class:"preview-loading",height:192}):null,c.value?l(c.value,{...p.value,editor:d.value,store:u.value}):null])])]}});const _g=Xe({enhance:({app:e})=>{e.component("ChartJS",ww),e.component("CodeTabs",gw),$e("CodeGroup",e)||e.component("CodeGroup",vw),$e("CodeGroupItem",e)||e.component("CodeGroupItem",Ou),e.component("CodeDemo",Nw),e.component("MdDemo",zw),e.component("ECharts",Gw),$w(e),e.component("FlowChart",ug),cg(e),e.component("KotlinPlayground",pg),Zw(e),e.component("Mermaid",hg),tg(e),e.component("RevealJs",wg),e.component("Tabs",gg),ig(e),e.component("VuePlayground",yg)},setup:()=>{dg()}});let bg={};const Bu=Symbol(""),Eg=()=>fe(Bu),kg=e=>{e.provide(Bu,bg)},xg='<div class="photo-swipe-loading"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" preserveAspectRatio="xMidYMid" viewBox="25 25 50 50"><animateTransform attributeName="transform" type="rotate" dur="2s" keyTimes="0;1" repeatCount="indefinite" values="0;360"></animateTransform><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1,200;90,200;1,200"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="0;-35px;-125px"></animate></circle></svg></div>',Tg=e=>ke(e)?Array.from(document.querySelectorAll(e)):e.map(t=>Array.from(document.querySelectorAll(t))).flat(),Fu=e=>new Promise((t,a)=>{e.complete?t({type:"image",element:e,src:e.src,width:e.naturalWidth,height:e.naturalHeight,alt:e.alt,msrc:e.src}):(e.onload=()=>t(Fu(e)),e.onerror=s=>a(s))}),Ag=e=>{const{isSupported:t,toggle:a}=An();e.on("uiRegister",()=>{t.value&&e.ui.registerElement({name:"fullscreen",order:7,isButton:!0,html:'<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>',onClick:()=>{a()}}),e.ui.registerElement({name:"download",order:8,isButton:!0,tagName:"a",html:{isCustomSVG:!0,inner:'<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>',outlineID:"pswp__icn-download"},onInit:(s,i)=>{s.setAttribute("download",""),s.setAttribute("target","_blank"),s.setAttribute("rel","noopener"),i.on("change",()=>{s.setAttribute("href",i.currSlide.data.src)})}}),e.ui.registerElement({name:"bulletsIndicator",className:"photo-swipe-bullets-indicator",appendTo:"wrapper",onInit:(s,i)=>{const n=[];let o=-1;for(let c=0;c<i.getNumItems();c++){const u=document.createElement("div");u.className="photo-swipe-bullet",u.onclick=d=>{i.goTo(n.indexOf(d.target))},n.push(u),s.appendChild(u)}i.on("change",()=>{o>=0&&n[o].classList.remove("active"),n[i.currIndex].classList.add("active"),o=i.currIndex})}})})},jg=(e,t,a=!0)=>r(()=>import("./photoswipe.esm-SzV8tJDW.js"),__vite__mapDeps([])).then(({default:s})=>{let i=null;const n=e.map(o=>({html:xg,element:o,msrc:o.src}));return e.forEach((o,c)=>{const u=()=>{i==null||i.destroy(),i=new s({preloaderDelay:0,showHideAnimationType:"zoom",...t,dataSource:n,index:c,...a?{closeOnVerticalDrag:!0,wheelToZoom:!1}:{}}),Ag(i),i.addFilter("thumbEl",()=>o),i.addFilter("placeholderSrc",()=>o.src),i.init()};o.getAttribute("photo-swipe")||(o.style.cursor="zoom-in",o.addEventListener("click",()=>{u()}),o.addEventListener("keypress",({key:d})=>{d==="Enter"&&u()}),o.setAttribute("photo-swipe","")),Fu(o).then(d=>{n.splice(c,1,d),i==null||i.refreshSlideContent(c)})}),a?ve("wheel",()=>{i==null||i.close()}):()=>{}}),Ig=({selector:e,locales:t,delay:a=500,scrollToClose:s=!0})=>{const i=Eg(),n=xt(t),o=we();let c=null;const u=()=>new Promise(d=>setTimeout(d,a)).then(()=>Ft()).then(async()=>{c=await jg(Tg(e),{...i,...n.value},s)});ie(()=>{u(),re(()=>o.value.path,()=>{c==null||c(),u()})}),Dt(()=>{c==null||c()})};var Lg={"/":{closeTitle:"Close",downloadTitle:"Download Image",fullscreenTitle:"Switch to full screen",zoomTitle:"Zoom in/out",arrowPrevTitle:"Prev (Arrow Left)",arrowNextTitle:"Next (Arrow Right)"}};const Sg=".theme-hope-content :not(a) > img:not([no-view])",Pg=Lg,Dg=800,Og=!0,Rg=Xe({enhance:({app:e})=>{kg(e)},setup:()=>{Ig({selector:Sg,delay:Dg,locales:Pg,scrollToClose:Og})}}),Vg=()=>l(ne,{name:"heading"},()=>l("path",{d:"M250.4 704.6H64V595.4h202.4l26.2-166.6H94V319.6h214.4L352 64h127.8l-43.6 255.4h211.2L691 64h126.2l-43.6 255.4H960v109.2H756.2l-24.6 166.6H930v109.2H717L672 960H545.8l43.6-255.4H376.6L333 960H206.8l43.6-255.4zm168.4-276L394 595.4h211.2l24.6-166.6h-211z"}));Vg.displayName="HeadingIcon";const Cg=()=>l(ne,{name:"heart"},()=>l("path",{d:"M1024 358.156C1024 195.698 892.3 64 729.844 64c-86.362 0-164.03 37.218-217.844 96.49C458.186 101.218 380.518 64 294.156 64 131.698 64 0 195.698 0 358.156 0 444.518 37.218 522.186 96.49 576H96l320 320c32 32 64 64 96 64s64-32 96-64l320-320h-.49c59.272-53.814 96.49-131.482 96.49-217.844zM841.468 481.232 517.49 805.49a2981.962 2981.962 0 0 1-5.49 5.48c-1.96-1.95-3.814-3.802-5.49-5.48L182.532 481.234C147.366 449.306 128 405.596 128 358.156 128 266.538 202.538 192 294.156 192c47.44 0 91.15 19.366 123.076 54.532L512 350.912l94.768-104.378C638.696 211.366 682.404 192 729.844 192 821.462 192 896 266.538 896 358.156c0 47.44-19.368 91.15-54.532 123.076z"}));Cg.displayName="HeartIcon";const Mg=()=>l(ne,{name:"history"},()=>l("path",{d:"M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512zm0-896a384 384 0 1 0 384 384 384 384 0 0 0-384-384zm192 448H512a64 64 0 0 1-64-64V320a64 64 0 0 1 128 0v128h128a64 64 0 0 1 0 128z"}));Mg.displayName="HistoryIcon";const Hg=()=>l(ne,{name:"title"},()=>l("path",{d:"M512 256c70.656 0 134.656 28.672 180.992 75.008A254.933 254.933 0 0 1 768 512c0 83.968-41.024 157.888-103.488 204.48C688.96 748.736 704 788.48 704 832c0 105.984-86.016 192-192 192-106.048 0-192-86.016-192-192h128a64 64 0 1 0 128 0 64 64 0 0 0-64-64 255.19 255.19 0 0 1-181.056-75.008A255.403 255.403 0 0 1 256 512c0-83.968 41.024-157.824 103.488-204.544C335.04 275.264 320 235.584 320 192A192 192 0 0 1 512 0c105.984 0 192 85.952 192 192H576a64.021 64.021 0 0 0-128 0c0 35.328 28.672 64 64 64zM384 512c0 70.656 57.344 128 128 128s128-57.344 128-128-57.344-128-128-128-128 57.344-128 128z"}));Hg.displayName="TitleIcon";const Mn=()=>l(ne,{name:"search"},()=>l("path",{d:"M192 480a256 256 0 1 1 512 0 256 256 0 0 1-512 0m631.776 362.496-143.2-143.168A318.464 318.464 0 0 0 768 480c0-176.736-143.264-320-320-320S128 303.264 128 480s143.264 320 320 320a318.016 318.016 0 0 0 184.16-58.592l146.336 146.368c12.512 12.48 32.768 12.48 45.28 0 12.48-12.512 12.48-32.768 0-45.28"}));Mn.displayName="SearchIcon";const $u=()=>l("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",preserveAspectRatio:"xMidYMid",viewBox:"0 0 100 100"},[l("circle",{cx:"28",cy:"75",r:"11",fill:"currentColor"},l("animate",{attributeName:"fill-opacity",begin:"0s",dur:"1s",keyTimes:"0;0.2;1",repeatCount:"indefinite",values:"0;1;1"})),l("path",{fill:"none",stroke:"#88baf0","stroke-width":"10",d:"M28 47a28 28 0 0 1 28 28"},l("animate",{attributeName:"stroke-opacity",begin:"0.1s",dur:"1s",keyTimes:"0;0.2;1",repeatCount:"indefinite",values:"0;1;1"})),l("path",{fill:"none",stroke:"#88baf0","stroke-width":"10",d:"M28 25a50 50 0 0 1 50 50"},l("animate",{attributeName:"stroke-opacity",begin:"0.2s",dur:"1s",keyTimes:"0;0.2;1",repeatCount:"indefinite",values:"0;1;1"}))]);$u.displayName="LoadingIcon";const qu=({hint:e})=>l("div",{class:"search-pro-result-wrapper loading"},[l($u),e]);qu.displayName="SearchLoading";const Ng='<svg width="20" height="20" viewBox="0 0 20 20"><path d="M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>';var zg={0:{"/":{0:"C",1:"a",2:"t",3:"e",4:"g",5:"o",6:"r",7:"y",8:":",9:" ",10:"$",11:"c",12:"o",13:"n",14:"t",15:"e",16:"n",17:"t"}},1:{"/":{0:"T",1:"a",2:"g",3:":",4:" ",5:"$",6:"c",7:"o",8:"n",9:"t",10:"e",11:"n",12:"t"}}},Bg={"/":{cancel:"Cancel",placeholder:"Search",search:"Search",searching:"Searching",defaultTitle:"Documentation",select:"to select",navigate:"to navigate",autocomplete:"to autocomplete",exit:"to exit",queryHistory:"Search History",resultHistory:"Result History",emptyHistory:"Empty Search History",emptyResult:"No results found",loading:"Loading search indexes..."}},Fg={searchDelay:150,suggestDelay:0,queryHistoryCount:5,resultHistoryCount:5,hotKeys:[{key:"k",ctrl:!0},{key:"/",ctrl:!0}],worker:"search-pro.worker.js"};const Hn=Fg,j3=zg,Wu=Hn.hotKeys,Nn=Bg;new URL("data:text/javascript;base64,aW1wb3J0e3NlYXJjaCBhcyBULGdldFN0b3JlZEZpZWxkcyBhcyB3LGF1dG9TdWdnZXN0IGFzICQsbG9hZEpTT05JbmRleCBhcyBifWZyb20ic2xpbXNlYXJjaCI7aW1wb3J0IEUgZnJvbSJAdGVtcC9zZWFyY2gtcHJvL2luZGV4LmpzIjtpbXBvcnR7ZW50cmllcyBhcyBGfWZyb20iQHZ1ZXByZXNzL2hlbHBlci9jbGllbnQiO2NvbnN0IFM9KGwsZSk9Pntjb25zdCBuPWwudG9Mb3dlckNhc2UoKSxzPWUudG9Mb3dlckNhc2UoKSxvPVtdO2xldCB0PTAsaT0wO2NvbnN0IHI9KGMsZz0hMSk9PntsZXQgdT0iIjtpPT09MD91PWMubGVuZ3RoPjIwP2DigKYgJHtjLnNsaWNlKC0yMCl9YDpjOmc/dT1jLmxlbmd0aCtpPjEwMD9gJHtjLnNsaWNlKDAsMTAwLWkpfeKApiBgOmM6dT1jLmxlbmd0aD4yMD9gJHtjLnNsaWNlKDAsMjApfSDigKYgJHtjLnNsaWNlKC0yMCl9YDpjLHUmJm8ucHVzaCh1KSxpKz11Lmxlbmd0aCxnfHwoby5wdXNoKFsibWFyayIsZV0pLGkrPWUubGVuZ3RoLGk+PTEwMCYmby5wdXNoKCIg4oCmIikpfTtsZXQgaD1uLmluZGV4T2Yocyx0KTtpZihoPT09LTEpcmV0dXJuIG51bGw7Zm9yKDtoPj0wOyl7Y29uc3QgYz1oK3MubGVuZ3RoO2lmKHIobC5zbGljZSh0LGgpKSx0PWMsaT4xMDApYnJlYWs7aD1uLmluZGV4T2Yocyx0KX1yZXR1cm4gaTwxMDAmJnIobC5zbGljZSh0KSwhMCksb30sQz0vW1x1NGUwMC1cdTlmYTVdL2csTT0obD17fSk9Pih7ZnV6enk6LjIscHJlZml4OiEwLHByb2Nlc3NUZXJtOmU9Pntjb25zdCBuPWUubWF0Y2goQyl8fFtdLHM9ZS5yZXBsYWNlKEMsIiIpLnRvTG93ZXJDYXNlKCk7cmV0dXJuIHM/W3MsLi4ubl06Wy4uLm5dfSwuLi5sfSksXz0obCxlKT0+ZS5jb250ZW50cy5yZWR1Y2UoKG4sWyxzXSk9Pm4rcywwKS1sLmNvbnRlbnRzLnJlZHVjZSgobixbLHNdKT0+bitzLDApLGs9KGwsZSk9Pk1hdGgubWF4KC4uLmUuY29udGVudHMubWFwKChbLG5dKT0+bikpLU1hdGgubWF4KC4uLmwuY29udGVudHMubWFwKChbLG5dKT0+bikpLE89KGwsZSxuPXt9KT0+e2NvbnN0IHM9e307cmV0dXJuIFQoZSxsLE0oe2Jvb3N0OntoOjIsdDoxLGM6NH0sLi4ubn0pKS5mb3JFYWNoKG89Pntjb25zdHtpZDp0LHRlcm1zOmksc2NvcmU6cn09byxoPXQuaW5jbHVkZXMoIkAiKSxjPXQuaW5jbHVkZXMoIiMiKSxbZyx1XT10LnNwbGl0KC9bI0BdLyksZj1OdW1iZXIoZyksbT1pLnNvcnQoKHAsYSk9PnAubGVuZ3RoLWEubGVuZ3RoKS5maWx0ZXIoKHAsYSk9Pmkuc2xpY2UoYSsxKS5ldmVyeShkPT4hZC5pbmNsdWRlcyhwKSkpLHtjb250ZW50czp5fT1zW2ZdPz89e3RpdGxlOiIiLGNvbnRlbnRzOltdfTtpZihoKXkucHVzaChbe3R5cGU6ImN1c3RvbUZpZWxkIixpZDpmLGluZGV4OnUsZGlzcGxheTptLm1hcChwPT5vLmMubWFwKGE9PlMoYSxwKSkpLmZsYXQoKS5maWx0ZXIocD0+cCE9PW51bGwpfSxyXSk7ZWxzZXtjb25zdCBwPW0ubWFwKGE9PlMoby5oLGEpKS5maWx0ZXIoYT0+YSE9PW51bGwpO2lmKHAubGVuZ3RoJiZ5LnB1c2goW3t0eXBlOmM/ImhlYWRpbmciOiJ0aXRsZSIsaWQ6ZiwuLi5jJiZ7YW5jaG9yOnV9LGRpc3BsYXk6cH0scl0pLCJ0ImluIG8pZm9yKGNvbnN0IGEgb2Ygby50KXtjb25zdCBkPW0ubWFwKHg9PlMoYSx4KSkuZmlsdGVyKHg9PnghPT1udWxsKTtkLmxlbmd0aCYmeS5wdXNoKFt7dHlwZToidGV4dCIsaWQ6ZiwuLi5jJiZ7YW5jaG9yOnV9LGRpc3BsYXk6ZH0scl0pfX19KSxGKHMpLnNvcnQoKFssb10sWyx0XSk9PlNFQVJDSF9QUk9fU09SVF9TVFJBVEVHWT09PSJ0b3RhbCI/XyhvLHQpOmsobyx0KSkubWFwKChbbyx7dGl0bGU6dCxjb250ZW50czppfV0pPT57aWYoIXQpe2NvbnN0IHI9dyhlLG8pO3ImJih0PXIuaCl9cmV0dXJue3RpdGxlOnQsY29udGVudHM6aS5tYXAoKFtyXSk9PnIpfX0pfSxSPShsLGUsbj17fSk9PiQoZSxsLE0obikpLm1hcCgoe3N1Z2dlc3Rpb246c30pPT5zKTtzZWxmLm9ubWVzc2FnZT1hc3luYyh7ZGF0YTp7dHlwZTpsPSJhbGwiLHF1ZXJ5OmUsbG9jYWxlOm4sb3B0aW9uczpzfX0pPT57Y29uc3R7ZGVmYXVsdDpvfT1hd2FpdCBFW25dKCksdD1iKG8se2ZpZWxkczpbImgiLCJ0IiwiYyJdLHN0b3JlRmllbGRzOlsiaCIsInQiLCJjIl19KTtsPT09InN1Z2dlc3QiP3NlbGYucG9zdE1lc3NhZ2UoUihlLHQscykpOmw9PT0ic2VhcmNoIj9zZWxmLnBvc3RNZXNzYWdlKE8oZSx0LHMpKTpzZWxmLnBvc3RNZXNzYWdlKHtzdWdnZXN0aW9uczpSKGUsdCxzKSxyZXN1bHRzOk8oZSx0LHMpfSl9OwovLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAK",import.meta.url);const $g=()=>{const e=new Worker(`/crashcourse/${Hn.worker}`,{}),t=[];return e.addEventListener("message",({data:a})=>{const{resolve:s}=t.shift();s(a)}),{search:a=>new Promise((s,i)=>{e.postMessage(a),t.push({resolve:s,reject:i})}),terminate:()=>{e.terminate(),t.forEach(({reject:a})=>a(new Error("Worker has been terminated.")))}}};let qg={};const Gu=Symbol(""),Wg=()=>fe(Gu),Gg=e=>{e.provide(Gu,qg)},Ug=(e,t=!1)=>{const a=q(0),s=_(()=>e.value[a.value]),i=()=>{a.value=a.value>0?a.value-1:e.value.length-1},n=()=>{a.value=a.value<e.value.length-1?a.value+1:0};return re(e,()=>{t||(a.value=0)}),{index:a,item:s,prev:i,next:n}},Jg=e=>e instanceof Element?document.activeElement===e&&(["TEXTAREA","SELECT","INPUT"].includes(e.tagName)||e.hasAttribute("contenteditable")):!1,Kg=e=>Wu.some(t=>{const{key:a,ctrl:s=!1,shift:i=!1,alt:n=!1,meta:o=!1}=t;return a===e.key&&s===e.ctrlKey&&i===e.shiftKey&&n===e.altKey&&o===e.metaKey}),Qg='<svg width="15" height="15" aria-label="Enter key" role="img"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"><path d="M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3"></path></g></svg>',Yg='<svg width="15" height="15" aria-label="Arrow down" role="img"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"><path d="M7.5 3.5v8M10.5 8.5l-3 3-3-3"></path></g></svg>',Zg='<svg width="15" height="15" aria-label="Arrow up" role="img"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"><path d="M7.5 11.5v-8M10.5 6.5l-3-3-3 3"></path></g></svg>',Xg='<svg width="15" height="15" aria-label="Escape key" role="img"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"><path d="M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956"></path></g></svg>',zn=Symbol(""),e2=()=>{const e=q(!1);mt(zn,e)},t2=e=>{const t=q([]);{const a=Wg(),s=kt();ie(()=>{const i=Br(c=>{c?n({type:"suggest",query:c,locale:s.value,options:a}).then(u=>{t.value=u.length?ka(u[0],c)&&!u[0].slice(c.length).includes(" ")?u:[c,...u]:[]}).catch(u=>{console.error(u)}):t.value=[]},Hn.suggestDelay),{search:n,terminate:o}=$g();re([e,s],()=>i(e.value),{immediate:!0}),Dt(()=>{o()})})}return{suggestions:t}},yi=Wu[0];var a2=D({name:"SearchBox",setup(){const e=xt(Nn),t=fe(zn),a=q(!1),s=_(()=>yi?[(a.value?["⌃","⇧","⌥","⌘"]:["Ctrl","Shift","Alt","Win"]).filter((i,n)=>yi[["ctrl","shift","alt","meta"][n]]),yi.key.toUpperCase()]:null);return ve("keydown",i=>{!t.value&&Kg(i)&&!Jg(i.target)&&(i.preventDefault(),t.value=!0)}),ie(()=>{const{userAgent:i}=navigator;a.value=s1(i)||a1(i)||vu(i)}),()=>[l("button",{type:"button",class:"search-pro-button","aria-label":e.value.search,onClick:()=>{t.value=!0}},[l(Mn),l("div",{class:"search-pro-placeholder"},e.value.search),s.value?l("div",{class:"search-pro-key-hints"},s.value.map(i=>l("kbd",{class:"search-pro-key"},i))):null])]}});const s2=wa({loader:()=>r(()=>import("./SearchResult-CPEj9zFm.js"),__vite__mapDeps([])),loadingComponent:()=>{const e=xt(Nn);return l(qu,{hint:e.value.loading})}});var r2=D({name:"SearchModal",setup(){const e=fe(zn),t=Xa(),a=Xf(),s=xt(Nn),i=q(""),{suggestions:n}=t2(i),o=q(!1),{index:c,prev:u,next:d}=Ug(n),p=le(),m=le(),h=(f=c.value)=>{i.value=n.value[f],o.value=!1};return ve("keydown",f=>{o.value?f.key==="ArrowUp"?u():f.key==="ArrowDown"?d():f.key==="Enter"?h():f.key==="Escape"&&(o.value=!1):f.key==="Escape"&&(e.value=!1)}),ie(()=>{const f=jn(document.body);re(e,async g=>{var E;f.value=g,g&&(await Ft(),(E=p.value)==null||E.focus())}),mu(m,()=>{o.value=!1}),Dt(()=>{f.value=!1})}),()=>e.value?l("div",{class:"search-pro-modal-wrapper"},[l("div",{class:"search-pro-mask",onClick:()=>{e.value=!1,i.value=""}}),l("div",{class:"search-pro-modal"},[l("div",{class:"search-pro-box"},[l("form",[l("label",{for:"search-pro","aria-label":s.value.search},l(Mn)),l("input",{ref:p,type:"search",class:"search-pro-input",id:"search-pro",placeholder:s.value.placeholder,spellcheck:"false",autocapitalize:"off",autocomplete:"off",autocorrect:"off",name:`${t.value.title}-search`,value:i.value,"aria-controls":"search-pro-results",onKeydown:f=>{const{key:g}=f;n.value.length&&(g==="Tab"?(h(),f.preventDefault()):(g==="ArrowDown"||g==="ArrowUp"||g==="Escape")&&f.preventDefault())},onInput:({target:f})=>{i.value=f.value,o.value=!0,c.value=0}}),i.value?l("button",{type:"reset",class:"search-pro-clear-button",innerHTML:Ng,onClick:()=>{i.value=""}}):null,o.value&&n.value.length?l("ul",{class:"search-pro-suggestions",ref:m},n.value.map((f,g)=>l("li",{class:["search-pro-suggestion",{active:g===c.value}],onClick:()=>{h(g)}},[l("kbd",{class:"search-pro-auto-complete",title:`Tab ${s.value.autocomplete}`},"Tab"),f]))):null]),l("button",{type:"button",class:"search-pro-close-button",onClick:()=>{e.value=!1,i.value=""}},s.value.cancel)]),l(s2,{query:i.value,isFocusing:!o.value,onClose:()=>{e.value=!1},onUpdateQuery:f=>{i.value=f}}),a.value?null:l("div",{class:"search-pro-hints"},[l("span",{class:"search-pro-hint"},[l("kbd",{innerHTML:Qg}),s.value.select]),l("span",{class:"search-pro-hint"},[l("kbd",{innerHTML:Zg}),l("kbd",{innerHTML:Yg}),s.value.navigate]),l("span",{class:"search-pro-hint"},[l("kbd",{innerHTML:Xg}),s.value.exit])])])]):null}}),i2=Xe({enhance({app:e}){Gg(e),e.component("SearchBox",a2)},setup(){e2()},rootComponents:[r2]});const Uu=()=>{const e=we();return _(()=>e.value.readingTime??null)},Ju=(e,t)=>{const{minutes:a,words:s}=e,{less1Minute:i,word:n,time:o}=t;return{time:a<1?i:o.replace("$time",Math.round(a).toString()),words:n.replace("$word",s.toString())}};var kl={"/":{word:"About $word words",less1Minute:"Less than 1 minute",time:"About $time min"}};const xl={words:"",time:""},Bi=typeof kl>"u"?null:kl,Ku=()=>Bi?xt(Bi):_(()=>null),n2=()=>{if(typeof Bi>"u")return _(()=>xl);const e=Uu(),t=Ku();return _(()=>e.value&&t.value?Ju(e.value,t.value):xl)},ua=()=>Pu(),ce=()=>Y1(),ja=()=>{const e=ua();return _(()=>!!e.value.pure)},_i=()=>null,o2="719px",l2="1440px",c2="false",Bn={mobileBreakPoint:o2,pcBreakPoint:l2,enableThemeColor:c2},Fn={},Qu=e=>{const{icon:t="",color:a,size:s}=e,i=a||s?{}:null;return a&&(i.color=a),s&&(i.height=Number.isNaN(Number(s))?s:`${s}px`),Et(t)?l("img",{class:"icon",src:t,alt:"","no-view":"",style:i}):Ms(t)?l("img",{class:"icon",src:Ee(t),alt:"","aria-hidden":"","no-view":"",style:i}):l(st("FontIcon"),e)};Qu.displayName="HopeIcon";var We=Qu;const zs=()=>{const e=Ot(),t=Rt();return a=>{if(a)if(Ms(a))t.path!==a&&e.push(a);else if(Nc(a))window&&window.open(a);else{const s=t.path.slice(0,t.path.lastIndexOf("/"));e.push(`${s}/${encodeURI(a)}`)}}},Yu=()=>{const e=ce(),t=ye();return _(()=>{const{author:a}=t.value;return a?Is(a):a===!1?[]:Is(e.value.author,!1)})},u2=()=>{const e=ye(),t=fe(Symbol.for("categoryMap"));return _(()=>ku(e.value.category).map(a=>{var s;return{name:a,path:((s=t==null?void 0:t.value.map[a])==null?void 0:s.path)||""}}))},d2=()=>{const e=ye(),t=fe(Symbol.for("tagMap"));return _(()=>xu(e.value.tag).map(a=>{var s;return{name:a,path:((s=t==null?void 0:t.value.map[a])==null?void 0:s.path)||""}}))},p2=()=>{const e=ye(),t=we();return _(()=>{const a=En(e.value.date);if(a)return a;const{createdTime:s}=t.value.git||{};return s?new Date(s):null})},m2=()=>{const e=ce(),t=we(),a=ye(),s=Yu(),i=u2(),n=d2(),o=p2(),c=Uu(),u=n2(),d=_(()=>({author:s.value,category:i.value,date:o.value,localizedDate:t.value.localizedDate,tag:n.value,isOriginal:a.value.isOriginal||!1,readingTime:c.value,readingTimeLocale:u.value,pageview:"pageview"in a.value?a.value.pageview:!0})),p=_(()=>"pageInfo"in a.value?a.value.pageInfo:"pageInfo"in e.value?e.value.pageInfo:null);return{info:d,items:p}},{mobileBreakPoint:h2,pcBreakPoint:f2}=Bn,Tl=e=>e.endsWith("px")?Number(e.slice(0,-2)):null,Bs=()=>{const e=q(!1),t=q(!1),a=()=>{e.value=window.innerWidth<=(Tl(h2)??719),t.value=window.innerWidth>=(Tl(f2)??1440)};return ie(()=>{a(),ve("resize",a,!1),ve("orientationchange",a,!1)}),{isMobile:e,isPC:t}},Zu=Symbol(""),Fs=()=>{const e=fe(Zu);if(!e)throw new Error("useDarkmode() is called without provider.");return e},w2=e=>{const t=ua(),a=zf(),s=_(()=>t.value.darkmode||"switch"),i=Fr("vuepress-theme-hope-scheme","auto"),n=_(()=>{const c=s.value;return c==="disable"?!1:c==="enable"?!0:c==="auto"?a.value:c==="toggle"?i.value==="dark":i.value==="dark"||i.value==="auto"&&a.value}),o=_(()=>{const c=s.value;return c==="switch"||c==="toggle"});e.provide(Zu,{canToggle:o,config:s,isDarkmode:n,status:i}),Object.defineProperties(e.config.globalProperties,{$isDarkmode:{get:()=>n.value}})},g2=()=>{const{config:e,isDarkmode:t,status:a}=Fs();un(()=>{e.value==="disable"?a.value="light":e.value==="enable"?a.value="dark":e.value==="toggle"&&a.value==="auto"&&(a.value="light")}),ie(()=>{re(t,s=>document.documentElement.setAttribute("data-theme",s?"dark":"light"),{immediate:!0})})};var Ye=D({name:"AutoLink",inheritAttrs:!1,props:{config:{type:Object,required:!0},exact:Boolean,noExternalLinkIcon:Boolean},emits:["focusout"],slots:Object,setup(e,{attrs:t,emit:a,slots:s}){const i=Rt(),n=Xc(),o=Za(e,"config"),c=_(()=>Et(o.value.link)),u=_(()=>!c.value&&Nc(o.value.link)),d=_(()=>o.value.target||(c.value?"_blank":void 0)),p=_(()=>d.value==="_blank"),m=_(()=>!c.value&&!u.value&&!p.value),h=_(()=>o.value.rel||(p.value?"noopener noreferrer":null)),f=_(()=>o.value.ariaLabel||o.value.text),g=_(()=>{if(e.exact)return!1;const k=nt(n.value.locales);return k.length?k.every(y=>y!==o.value.link):o.value.link!=="/"}),E=_(()=>m.value?o.value.activeMatch?new RegExp(o.value.activeMatch,"u").test(i.path):g.value?ka(i.path,o.value.link):i.path===o.value.link:!1);return()=>{const{before:k,after:y,default:T}=s,{text:b,icon:j,link:C}=o.value;return m.value?l(Pe,{to:C,"aria-label":f.value,...t,class:["nav-link",{active:E.value},t.class],onFocusout:()=>a("focusout")},()=>T?T():[k?k():l(We,{icon:j}),b,y==null?void 0:y()]):l("a",{href:C,rel:h.value,target:d.value,"aria-label":f.value,...t,class:["nav-link",t.class],onFocusout:()=>a("focusout")},T?T():[k?k():l(We,{icon:j}),b,e.noExternalLinkIcon?null:l(Lu),y==null?void 0:y()])}}});const Qa=(e,t,a=!1)=>"activeMatch"in t?new RegExp(t.activeMatch,"u").test(e.path):_u(e,t.link)?!0:t.children&&!a?t.children.some(s=>Qa(e,s)):!1,Xu=(e,t)=>t.type==="group"?t.children.some(a=>a.type==="group"?Xu(e,a):a.type==="page"&&Qa(e,a,!0))||"prefix"in t&&_u(e,t.prefix):!1,ed=(e,t)=>ke(e.link)?l(Ye,{...t,config:e}):l("p",t,[l(We,{icon:e.icon}),e.text]),td=e=>{const t=Rt();return e?l("ul",{class:"vp-sidebar-sub-headers"},e.map(a=>l("li",{class:"vp-sidebar-sub-header"},[ed(a,{class:["vp-sidebar-link","vp-heading",{active:Qa(t,a,!0)}]}),td(a.children)]))):null};var be=(e=>(e.type="y",e.title="t",e.shortTitle="s",e.icon="i",e.author="a",e.date="d",e.localizedDate="l",e.category="c",e.tag="g",e.isEncrypted="n",e.isOriginal="o",e.readingTime="r",e.excerpt="e",e.sticky="u",e.cover="v",e.index="I",e.order="O",e))(be||{}),ad=(e=>(e.article="a",e.home="h",e.slide="s",e.page="p",e))(ad||{});const ya=(e="",t="")=>Ms(t)?t:`${fn(e)}${t}`,Fa=(e,t=!1)=>{const{meta:a,path:s}=es(e);return a?{text:!t&&a[be.shortTitle]?a[be.shortTitle]:a[be.title]||s,link:s,...a[be.icon]?{icon:a[be.icon]}:{}}:{text:s,link:s}},qr=(e,t,a)=>a>0?t.map(s=>({type:"heading",text:s.title,link:`${e.path}#${s.slug}`,children:qr(e,s.children,a-1)})):[],Fi=({config:e,page:t,headerDepth:a,prefix:s=""})=>{const i=(n,o=s)=>{var u;const c=ke(n)?Fa(ya(o,n)):n.link?{...n,...Ea(n.link)?{}:{link:Fa(ya(o,n.link)).link}}:n;if("children"in c){const d=ya(o,c.prefix),p=c.children==="structure"?Fn[d]:c.children;return{type:"group",...c,prefix:d,children:p.map(m=>i(m,d))}}return{type:"page",...c,children:c.link===t.path?qr(t,((u=t.headers[0])==null?void 0:u.level)===1?t.headers[0].children:t.headers,a):[]}};return e.map(n=>i(n))},v2=({config:e,page:t,headerDepth:a})=>{const s=nt(e).sort((i,n)=>n.length-i.length);for(const i of s)if(ka(decodeURI(t.path),i)){const n=e[i];return n?Fi({config:n==="structure"?Fn[i]:n==="heading"?qr(t,t.headers,a):n,page:t,headerDepth:a,prefix:i}):[]}return console.warn(`${t.path} is missing sidebar config.`),[]},y2=({config:e,routeLocale:t,page:a,headerDepth:s})=>e==="heading"?qr(a,a.headers,s):e==="structure"?Fi({config:Fn[t],page:a,headerDepth:s,prefix:t}):As(e)?Fi({config:e,page:a,headerDepth:s}):yt(e)?v2({config:e,page:a,headerDepth:s}):[],sd=Symbol(""),_2=()=>{const e=ye(),t=ce(),a=we(),s=kt(),i=_(()=>e.value.home?!1:e.value.sidebar??t.value.sidebar??"structure"),n=_(()=>e.value.headerDepth??t.value.headerDepth??2),o=cu(()=>[i.value,n.value,a.value.path,null],()=>y2({config:i.value,routeLocale:s.value,page:a.value,headerDepth:n.value}));mt(sd,o)},$n=()=>{const e=fe(sd);if(!e)throw new Error("useSidebarItems() is called without provider.");return e};var b2=D({name:"PageFooter",setup(){const e=ua(),t=ce(),a=ye(),s=Yu(),i=_(()=>{const{copyright:d,footer:p}=a.value;return p!==!1&&!!(d||p||t.value.displayFooter)}),n=_(()=>{const{footer:d}=a.value;return d===!1?!1:ke(d)?d:t.value.footer||""}),o=_(()=>s.value.map(({name:d})=>d).join(", ")),c=d=>`Copyright © ${new Date().getFullYear()} ${o.value} ${d?`${d} Licensed`:""}`,u=_(()=>{const{copyright:d,license:p=""}=a.value,{license:m}=e.value,{copyright:h}=t.value;return d??(p?c(p):ke(h)?h:o.value||m?c(m):!1)});return()=>i.value?l("footer",{class:"vp-footer-wrapper"},[n.value?l("div",{class:"vp-footer",innerHTML:n.value}):null,u.value?l("div",{class:"vp-copyright",innerHTML:u.value}):null]):null}}),E2=D({name:"NavbarDropdownLink",props:{config:{type:Object,required:!0}},slots:Object,setup(e,{slots:t}){const a=we(),s=Za(e,"config"),i=_(()=>s.value.ariaLabel||s.value.text),n=q(!1);re(()=>a.value.path,()=>{n.value=!1});const o=c=>{c.detail===0&&(n.value=!n.value)};return()=>{var c;return l("div",{class:["dropdown-wrapper",{open:n.value}]},[l("button",{type:"button",class:"dropdown-title","aria-label":i.value,onClick:o},[((c=t.title)==null?void 0:c.call(t))||l("span",{class:"title"},[l(We,{icon:s.value.icon}),e.config.text]),l("span",{class:"arrow"}),l("ul",{class:"nav-dropdown"},s.value.children.map((u,d)=>{const p=d===s.value.children.length-1;return l("li",{class:"dropdown-item"},"children"in u?[l("h4",{class:"dropdown-subtitle"},u.link?l(Ye,{config:u,onFocusout:()=>{u.children.length===0&&p&&(n.value=!1)}}):l("span",u.text)),l("ul",{class:"dropdown-subitem-wrapper"},u.children.map((m,h)=>l("li",{class:"dropdown-subitem"},l(Ye,{config:m,onFocusout:()=>{h===u.children.length-1&&p&&(n.value=!1)}}))))]:l(Ye,{config:u,onFocusout:()=>{p&&(n.value=!1)}}))}))])])}}});const rd=(e,t="")=>ke(e)?Fa(ya(t,e)):"children"in e?{...e,...e.link&&!Ea(e.link)?Fa(ya(t,e.link)):{},children:e.children.map(a=>rd(a,ya(t,e.prefix)))}:{...e,link:Ea(e.link)?e.link:Fa(ya(t,e.link)).link},id=()=>{const e=ce(),t=()=>(e.value.navbar||[]).map(a=>rd(a));return cu(()=>e.value.navbar,()=>t())},k2=()=>{const e=ce(),t=_(()=>e.value.repo||null),a=_(()=>t.value?o1(t.value):null),s=_(()=>t.value?On(t.value):null),i=_(()=>a.value?e.value.repoLabel??(s.value===null?"Source":s.value):null);return _(()=>!a.value||!i.value||e.value.repoDisplay===!1?null:{type:s.value||"Source",label:i.value,link:a.value})};var x2=D({name:"NavScreenDropdown",props:{config:{type:Object,required:!0}},setup(e){const t=we(),a=Za(e,"config"),s=_(()=>a.value.ariaLabel||a.value.text),i=q(!1);re(()=>t.value.path,()=>{i.value=!1});const n=(o,c)=>c[c.length-1]===o;return()=>[l("button",{type:"button",class:["nav-screen-dropdown-title",{active:i.value}],"aria-label":s.value,onClick:()=>{i.value=!i.value}},[l("span",{class:"title"},[l(We,{icon:a.value.icon}),e.config.text]),l("span",{class:["arrow",i.value?"down":"end"]})]),l("ul",{class:["nav-screen-dropdown",{hide:!i.value}]},a.value.children.map(o=>l("li",{class:"dropdown-item"},"children"in o?[l("h4",{class:"dropdown-subtitle"},o.link?l(Ye,{config:o,onFocusout:()=>{n(o,a.value.children)&&o.children.length===0&&(i.value=!1)}}):l("span",o.text)),l("ul",{class:"dropdown-subitem-wrapper"},o.children.map(c=>l("li",{class:"dropdown-subitem"},l(Ye,{config:c,onFocusout:()=>{n(c,o.children)&&n(o,a.value.children)&&(i.value=!1)}}))))]:l(Ye,{config:o,onFocusout:()=>{n(o,a.value.children)&&(i.value=!1)}}))))]}}),T2=D({name:"NavScreenLinks",setup(){const e=id();return()=>e.value.length?l("nav",{class:"nav-screen-links"},e.value.map(t=>l("div",{class:"navbar-links-item"},"children"in t?l(x2,{config:t}):l(Ye,{config:t})))):null}});const nd=()=>l(ne,{name:"dark"},()=>l("path",{d:"M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z"}));nd.displayName="DarkIcon";const od=()=>l(ne,{name:"light"},()=>l("path",{d:"M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z"}));od.displayName="LightIcon";const ld=()=>l(ne,{name:"auto"},()=>l("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z"}));ld.displayName="AutoIcon";const cd=()=>l(ne,{name:"enter-fullscreen"},()=>l("path",{d:"M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z"}));cd.displayName="EnterFullScreenIcon";const ud=()=>l(ne,{name:"cancel-fullscreen"},()=>l("path",{d:"M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z"}));ud.displayName="CancelFullScreenIcon";const dd=()=>l(ne,{name:"outlook"},()=>[l("path",{d:"M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z"})]);dd.displayName="OutlookIcon";var pd=D({name:"AppearanceSwitch",setup(){const{config:e,isDarkmode:t,status:a}=Fs(),s=ja(),i=()=>{e.value==="switch"?a.value={light:"dark",dark:"auto",auto:"light"}[a.value]:a.value=a.value==="light"?"dark":"light"},n=async o=>{if(!(document.startViewTransition&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&!s.value)||!o){i();return}const c=o.clientX,u=o.clientY,d=Math.hypot(Math.max(c,innerWidth-c),Math.max(u,innerHeight-u)),p=t.value;await document.startViewTransition(async()=>{i(),await Ft()}).ready,t.value!==p&&document.documentElement.animate({clipPath:t.value?[`circle(${d}px at ${c}px ${u}px)`,`circle(0px at ${c}px ${u}px)`]:[`circle(0px at ${c}px ${u}px)`,`circle(${d}px at ${c}px ${u}px)`]},{duration:400,pseudoElement:t.value?"::view-transition-old(root)":"::view-transition-new(root)"})};return()=>l("button",{type:"button",id:"appearance-switch",onClick:n},[l(ld,{style:{display:a.value==="auto"?"block":"none"}}),l(nd,{style:{display:a.value==="dark"?"block":"none"}}),l(od,{style:{display:a.value==="light"?"block":"none"}})])}}),A2=D({name:"AppearanceMode",setup(){const e=ce(),{canToggle:t}=Fs(),a=_(()=>e.value.outlookLocales.darkmode);return()=>t.value?l("div",{class:"appearance-wrapper"},[l("label",{class:"appearance-title",for:"appearance-switch"},a.value),l(pd)]):null}});const bi="VUEPRESS_THEME_COLOR";var j2=D({name:"ThemeColorPicker",props:{themeColor:{type:Object,required:!0}},setup(e){const t=(a="")=>{const s=document.documentElement.classList,i=nt(e.themeColor);if(!a){localStorage.removeItem(bi),s.remove(...i);return}s.remove(...i.filter(n=>n!==a)),s.add(a),localStorage.setItem(bi,a)};return ie(()=>{const a=localStorage.getItem(bi);a&&t(a)}),()=>l("ul",{id:"theme-color-picker"},[l("li",l("span",{class:"theme-color",onClick:()=>t()})),qt(e.themeColor).map(([a,s])=>l("li",l("span",{style:{background:s},onClick:()=>t(a)})))])}});const $a=Bn.enableThemeColor==="true",I2=$a?vf(qt(Bn).filter(([e])=>e.startsWith("theme-"))):{};var L2=D({name:"ThemeColor",setup(){const e=ce(),t=_(()=>e.value.outlookLocales.themeColor);return()=>$a?l("div",{class:"theme-color-wrapper"},[l("label",{class:"theme-color-title",for:"theme-color-picker"},t.value),l(j2,{themeColor:I2})]):null}}),md=D({name:"ToggleFullScreenButton",setup(){const e=ce(),{isSupported:t,isFullscreen:a,toggle:s}=An(),i=_(()=>e.value.outlookLocales.fullscreen);return()=>t?l("div",{class:"full-screen-wrapper"},[l("label",{class:"full-screen-title",for:"full-screen-switch"},i.value),l("button",{type:"button",id:"full-screen-switch",class:"full-screen",ariaPressed:a.value,onClick:()=>s()},a.value?l(ud):l(cd))]):null}}),hd=D({name:"OutlookSettings",setup(){const e=ua(),t=ja(),a=_(()=>!t.value&&e.value.fullscreen);return()=>l(zr,()=>[$a?l(L2):null,l(A2),a.value?l(md):null])}}),S2=D({name:"NavScreen",props:{show:Boolean},emits:["close"],slots:Object,setup(e,{emit:t,slots:a}){const s=we(),{isMobile:i}=Bs(),n=le(),o=jn(n);return ie(()=>{n.value=document.body,re(i,c=>{!c&&e.show&&(o.value=!1,t("close"))}),re(()=>s.value.path,()=>{o.value=!1,t("close")})}),Dt(()=>{o.value=!1}),()=>l(ia,{name:"fade",onEnter:()=>{o.value=!0},onAfterLeave:()=>{o.value=!1}},()=>{var c,u;return e.show?l("div",{id:"nav-screen"},l("div",{class:"vp-nav-screen-container"},[(c=a.before)==null?void 0:c.call(a),l(T2),l("div",{class:"vp-outlook-wrapper"},l(hd)),(u=a.after)==null?void 0:u.call(a)])):null})}}),P2=D({name:"NavbarBrand",setup(){const e=kt(),t=Xa(),a=ce(),s=_(()=>a.value.home||e.value),i=_(()=>t.value.title),n=_(()=>a.value.navTitle??i.value),o=_(()=>a.value.logo?Ee(a.value.logo):null),c=_(()=>a.value.logoDark?Ee(a.value.logoDark):null);return()=>l(Pe,{to:s.value,class:"vp-brand"},()=>[o.value?l("img",{class:["vp-nav-logo",{light:!!c.value}],src:o.value,alt:""}):null,c.value?l("img",{class:["vp-nav-logo dark"],src:c.value,alt:""}):null,n.value?l("span",{class:["vp-site-name",{"hide-in-pad":o.value&&a.value.hideSiteNameOnMobile!==!1}]},n.value):null])}}),D2=D({name:"NavbarLinks",setup(){const e=id();return()=>e.value.length?l("nav",{class:"vp-nav-links"},e.value.map(t=>l("div",{class:"nav-item hide-in-mobile"},"children"in t?l(E2,{config:t}):l(Ye,{config:t})))):null}}),O2=D({name:"RepoLink",components:{BitbucketIcon:Pn,GiteeIcon:Sn,GitHubIcon:In,GitLabIcon:Ln,SourceIcon:Dn},setup(){const e=k2();return()=>e.value?l("div",{class:"nav-item vp-repo"},l("a",{class:"vp-repo-link",href:e.value.link,target:"_blank",rel:"noopener noreferrer","aria-label":e.value.label},l(st(`${e.value.type}Icon`),{style:{width:"1.25rem",height:"1.25rem",verticalAlign:"middle"}}))):null}});const fd=({active:e=!1},{emit:t})=>l("button",{type:"button",class:["vp-toggle-navbar-button",{"is-active":e}],"aria-label":"Toggle Navbar","aria-expanded":e,"aria-controls":"nav-screen",onClick:()=>t("toggle")},l("span",[l("span",{class:"vp-top"}),l("span",{class:"vp-middle"}),l("span",{class:"vp-bottom"})]));fd.displayName="ToggleNavbarButton";var R2=fd;const $i=(e,{emit:t})=>l("button",{type:"button",class:"vp-toggle-sidebar-button",title:"Toggle Sidebar",onClick:()=>t("toggle")},l("span",{class:"icon"}));$i.displayName="ToggleSidebarButton",$i.emits=["toggle"];var V2=$i,C2=D({name:"OutlookButton",setup(){const{isSupported:e}=An(),t=ua(),a=ja(),s=we(),{canToggle:i}=Fs(),n=q(!1),o=_(()=>!a.value&&t.value.fullscreen&&e);return re(()=>s.value.path,()=>{n.value=!1}),()=>i.value||o.value||$a?l("div",{class:"nav-item hide-in-mobile"},i.value&&!o.value&&!$a?l(pd):o.value&&!i.value&&!$a?l(md):l("button",{type:"button",class:["outlook-button",{open:n.value}],tabindex:"-1","aria-hidden":!0},[l(dd),l("div",{class:"outlook-dropdown"},l(hd))])):null}}),M2=D({name:"NavBar",emits:["toggleSidebar"],slots:Object,setup(e,{emit:t,slots:a}){const s=ce(),{isMobile:i}=Bs(),n=q(!1),o=_(()=>{const{navbarAutoHide:p="mobile"}=s.value;return p!=="none"&&(p==="always"||i.value)}),c=_(()=>s.value.navbarLayout||{start:["Brand"],center:["Links"],end:["Language","Repo","Outlook","Search"]}),u={Brand:P2,Language:_i,Links:D2,Repo:O2,Outlook:C2,Search:$e("Docsearch")?st("Docsearch"):$e("SearchBox")?st("SearchBox"):_i},d=p=>u[p]??($e(p)?st(p):_i);return()=>{var p,m,h,f,g,E;return[l("header",{id:"navbar",class:["vp-navbar",{"auto-hide":o.value,"hide-icon":s.value.navbarIcon===!1}]},[l("div",{class:"vp-navbar-start"},[l(V2,{onToggle:()=>{n.value&&(n.value=!1),t("toggleSidebar")}}),(p=a.startBefore)==null?void 0:p.call(a),(c.value.start||[]).map(k=>l(d(k))),(m=a.startAfter)==null?void 0:m.call(a)]),l("div",{class:"vp-navbar-center"},[(h=a.centerBefore)==null?void 0:h.call(a),(c.value.center||[]).map(k=>l(d(k))),(f=a.centerAfter)==null?void 0:f.call(a)]),l("div",{class:"vp-navbar-end"},[(g=a.endBefore)==null?void 0:g.call(a),(c.value.end||[]).map(k=>l(d(k))),(E=a.endAfter)==null?void 0:E.call(a),l(R2,{active:n.value,onToggle:()=>{n.value=!n.value}})])]),l(S2,{show:n.value,onClose:()=>{n.value=!1}},{before:()=>{var k;return(k=a.screenTop)==null?void 0:k.call(a)},after:()=>{var k;return(k=a.screenBottom)==null?void 0:k.call(a)}})]}}}),H2=D({name:"SidebarChild",props:{config:{type:Object,required:!0}},setup(e){const t=Rt();return()=>[ed(e.config,{class:["vp-sidebar-link",`vp-sidebar-${e.config.type}`,{active:Qa(t,e.config,!0)}],exact:!0}),td(e.config.children)]}}),N2=D({name:"SidebarGroup",props:{config:{type:Object,required:!0},open:{type:Boolean,required:!0}},emits:["toggle"],setup(e,{emit:t}){const a=Rt(),s=_(()=>Qa(a,e.config)),i=_(()=>Qa(a,e.config,!0));return()=>{const{collapsible:n,children:o=[],icon:c,prefix:u,link:d,text:p}=e.config;return l("section",{class:"vp-sidebar-group"},[l(n?"button":"p",{class:["vp-sidebar-heading",{clickable:n||d,exact:i.value,active:s.value}],...n?{type:"button",onClick:()=>t("toggle"),onKeydown:m=>{m.key==="Enter"&&t("toggle")}}:{}},[l(We,{icon:c}),d?l(Ye,{class:"vp-sidebar-title",config:{text:p,link:d},noExternalLinkIcon:!0}):l("span",{class:"vp-sidebar-title"},p),n?l("span",{class:["vp-arrow",e.open?"down":"end"]}):null]),e.open||!n?l(wd,{key:u,config:o}):null])}}}),wd=D({name:"SidebarLinks",props:{config:{type:Array,required:!0}},setup(e){const t=Rt(),a=q(-1),s=i=>{a.value=i===a.value?-1:i};return re(()=>t.path,()=>{const i=e.config.findIndex(n=>Xu(t,n));a.value=i},{immediate:!0,flush:"post"}),()=>l("ul",{class:"vp-sidebar-links"},e.config.map((i,n)=>l("li",i.type==="group"?l(N2,{config:i,open:n===a.value,onToggle:()=>s(n)}):l(H2,{config:i}))))}}),z2=D({name:"SideBar",slots:Object,setup(e,{slots:t}){const a=Rt(),s=ce(),i=$n(),n=le();return ie(()=>{re(()=>a.hash,o=>{const c=document.querySelector(`.vp-sidebar a.vp-sidebar-link[href="${a.path}${o}"]`);if(!c)return;const{top:u,height:d}=n.value.getBoundingClientRect(),{top:p,height:m}=c.getBoundingClientRect();p<u?c.scrollIntoView(!0):p+m>u+d&&c.scrollIntoView(!1)},{immediate:!0})}),()=>{var o,c,u;return l("aside",{ref:n,id:"sidebar",class:["vp-sidebar",{"hide-icon":s.value.sidebarIcon===!1}]},[(o=t.top)==null?void 0:o.call(t),((c=t.default)==null?void 0:c.call(t))||l(wd,{config:i.value}),(u=t.bottom)==null?void 0:u.call(t)])}}}),qn=D({name:"CommonWrapper",props:{containerClass:{type:String,default:""},noNavbar:Boolean,noSidebar:Boolean,noToc:Boolean},slots:Object,setup(e,{slots:t}){const a=Ot(),s=we(),i=ye(),n=ce(),{isMobile:o,isPC:c}=Bs(),[u,d]=kr(!1),[p,m]=kr(!1),h=$n(),f=q(!1),g=_(()=>e.noNavbar||i.value.navbar===!1||n.value.navbar===!1?!1:!!(s.value.title||n.value.logo||n.value.repo||n.value.navbar)),E=_(()=>e.noSidebar?!1:i.value.sidebar!==!1&&h.value.length!==0&&!i.value.home),k=_(()=>e.noToc||i.value.home?!1:i.value.toc||n.value.toc!==!1&&i.value.toc!==!1),y={x:0,y:0},T=A=>{y.x=A.changedTouches[0].clientX,y.y=A.changedTouches[0].clientY},b=A=>{const V=A.changedTouches[0].clientX-y.x,O=A.changedTouches[0].clientY-y.y;Math.abs(V)>Math.abs(O)*1.5&&Math.abs(V)>40&&(V>0&&y.x<=80?d(!0):d(!1))},j=()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;let C=0;return ve("scroll",If(()=>{const A=j();A<=58||A<C?f.value=!1:C+200<A&&!u.value&&(f.value=!0),C=A},300,!0)),re(o,A=>{A||d(!1)}),ie(()=>{const A=jn(document.body);re(u,O=>{A.value=O});const V=a.afterEach(()=>{d(!1)});Dt(()=>{A.value=!1,V()})}),()=>l($e("GlobalEncrypt")?st("GlobalEncrypt"):gu,()=>l("div",{class:["theme-container",{"no-navbar":!g.value,"no-sidebar":!E.value&&!(t.sidebar||t.sidebarTop||t.sidebarBottom),"has-toc":k.value,"hide-navbar":f.value,"sidebar-collapsed":!o.value&&!c.value&&p.value,"sidebar-open":o.value&&u.value},e.containerClass,i.value.containerClass||""],onTouchStart:T,onTouchEnd:b},[g.value?l(M2,{onToggleSidebar:()=>d()},{startBefore:()=>{var A;return(A=t.navbarStartBefore)==null?void 0:A.call(t)},startAfter:()=>{var A;return(A=t.navbarStartAfter)==null?void 0:A.call(t)},centerBefore:()=>{var A;return(A=t.navbarCenterBefore)==null?void 0:A.call(t)},centerAfter:()=>{var A;return(A=t.navbarCenterAfter)==null?void 0:A.call(t)},endBefore:()=>{var A;return(A=t.navbarEndBefore)==null?void 0:A.call(t)},endAfter:()=>{var A;return(A=t.navbarEndAfter)==null?void 0:A.call(t)},screenTop:()=>{var A;return(A=t.navScreenTop)==null?void 0:A.call(t)},screenBottom:()=>{var A;return(A=t.navScreenBottom)==null?void 0:A.call(t)}}):null,l(ia,{name:"fade"},()=>u.value?l("div",{class:"vp-sidebar-mask",onClick:()=>d(!1)}):null),l(ia,{name:"fade"},()=>o.value?null:l("div",{class:"toggle-sidebar-wrapper",onClick:()=>m()},l("span",{class:["arrow",p.value?"end":"start"]}))),l(z2,{},{...t.sidebar?{default:()=>t.sidebar()}:{},top:()=>{var A;return(A=t.sidebarTop)==null?void 0:A.call(t)},bottom:()=>{var A;return(A=t.sidebarBottom)==null?void 0:A.call(t)}}),t.default(),l(b2)]))}}),he=D({name:"DropTransition",props:{type:{type:String,default:"single"},delay:{type:Number,default:0},duration:{type:Number,default:.25},appear:Boolean},slots:Object,setup(e,{slots:t}){const a=i=>{i.style.transition=`transform ${e.duration}s ease-in-out ${e.delay}s, opacity ${e.duration}s ease-in-out ${e.delay}s`,i.style.transform="translateY(-20px)",i.style.opacity="0"},s=i=>{i.style.transform="translateY(0)",i.style.opacity="1"};return()=>l(e.type==="single"?ia:wh,{name:"drop",appear:e.appear,onAppear:a,onAfterAppear:s,onEnter:a,onAfterEnter:s,onBeforeLeave:a},()=>t.default())}});const qi=({custom:e})=>l(yn,{class:["theme-hope-content",{custom:e}]});qi.displayName="MarkdownContent",qi.props={custom:Boolean};var Wn=qi;const gd=()=>l(ne,{name:"author"},()=>l("path",{d:"M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z"}));gd.displayName="AuthorIcon";const vd=()=>l(ne,{name:"calendar"},()=>l("path",{d:"M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z"}));vd.displayName="CalendarIcon";const yd=()=>l(ne,{name:"category"},()=>l("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));yd.displayName="CategoryIcon";const _d=()=>l(ne,{name:"print"},()=>l("path",{d:"M819.2 364.8h-44.8V128c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v236.8h-44.8C145.067 364.8 96 413.867 96 473.6v192c0 59.733 49.067 108.8 108.8 108.8h44.8V896c0 17.067 14.933 32 32 32h460.8c17.067 0 32-14.933 32-32V774.4h44.8c59.733 0 108.8-49.067 108.8-108.8v-192c0-59.733-49.067-108.8-108.8-108.8zM313.6 160h396.8v204.8H313.6V160zm396.8 704H313.6V620.8h396.8V864zM864 665.6c0 25.6-19.2 44.8-44.8 44.8h-44.8V588.8c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v121.6h-44.8c-25.6 0-44.8-19.2-44.8-44.8v-192c0-25.6 19.2-44.8 44.8-44.8h614.4c25.6 0 44.8 19.2 44.8 44.8v192z"}));_d.displayName="PrintIcon";const bd=()=>l(ne,{name:"tag"},()=>l("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));bd.displayName="TagIcon";const Ed=()=>l(ne,{name:"timer"},()=>l("path",{d:"M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z"}));Ed.displayName="TimerIcon";const kd=()=>l(ne,{name:"word"},()=>[l("path",{d:"M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z"}),l("path",{d:"M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z"})]);kd.displayName="WordIcon";const da=()=>{const e=ce();return _(()=>e.value.metaLocales)};var B2=D({name:"AuthorInfo",inheritAttrs:!1,props:{author:{type:Array,required:!0},pure:Boolean},setup(e){const t=da();return()=>e.author.length?l("span",{class:"page-author-info","aria-label":`${t.value.author}${e.pure?"":"🖊"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[l(gd),l("span",e.author.map(a=>a.url?l("a",{class:"page-author-item",href:a.url,target:"_blank",rel:"noopener noreferrer"},a.name):l("span",{class:"page-author-item"},a.name))),l("span",{property:"author",content:e.author.map(a=>a.name).join(", ")})]):null}}),F2=D({name:"CategoryInfo",inheritAttrs:!1,props:{category:{type:Array,required:!0},pure:Boolean},setup(e){const t=Ot(),a=we(),s=da(),i=(n,o="")=>{o&&a.value.path!==o&&(n.preventDefault(),t.push(o))};return()=>e.category.length?l("span",{class:"page-category-info","aria-label":`${s.value.category}${e.pure?"":"🌈"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[l(yd),e.category.map(({name:n,path:o})=>l("span",{class:["page-category-item",{[`category${$r(n,9)}`]:!e.pure,clickable:o}],role:o?"navigation":"",onClick:c=>i(c,o)},n)),l("meta",{property:"articleSection",content:e.category.map(({name:n})=>n).join(",")})]):null}}),$2=D({name:"DateInfo",inheritAttrs:!1,props:{date:{type:Object,default:null},localizedDate:{type:String,default:""},pure:Boolean},setup(e){const t=Zc(),a=da();return()=>e.date?l("span",{class:"page-date-info","aria-label":`${a.value.date}${e.pure?"":"📅"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[l(vd),l("span",l(zr,()=>e.localizedDate||e.date.toLocaleDateString(t.value))),l("meta",{property:"datePublished",content:e.date.toISOString()||""})]):null}}),q2=D({name:"OriginalInfo",inheritAttrs:!1,props:{isOriginal:Boolean},setup(e){const t=da();return()=>e.isOriginal?l("span",{class:"page-original-info"},t.value.origin):null}}),W2=D({name:"ReadingTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},readingTimeLocale:{type:Object,default:()=>null},pure:Boolean},setup(e){const t=da(),a=_(()=>{if(!e.readingTime)return null;const{minutes:s}=e.readingTime;return s<1?"PT1M":`PT${Math.round(s)}M`});return()=>{var s,i;return(s=e.readingTimeLocale)!=null&&s.time?l("span",{class:"page-reading-time-info","aria-label":`${t.value.readingTime}${e.pure?"":"⌛"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[l(Ed),l("span",(i=e.readingTimeLocale)==null?void 0:i.time),l("meta",{property:"timeRequired",content:a.value})]):null}}}),G2=D({name:"TagInfo",inheritAttrs:!1,props:{tag:{type:Array,default:()=>[]},pure:Boolean},setup(e){const t=Ot(),a=we(),s=da(),i=(n,o="")=>{o&&a.value.path!==o&&(n.preventDefault(),t.push(o))};return()=>e.tag.length?l("span",{class:"page-tag-info","aria-label":`${s.value.tag}${e.pure?"":"🏷"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[l(bd),e.tag.map(({name:n,path:o})=>l("span",{class:["page-tag-item",{[`tag${$r(n,9)}`]:!e.pure,clickable:o}],role:o?"navigation":"",onClick:c=>i(c,o)},n)),l("meta",{property:"keywords",content:e.tag.map(({name:n})=>n).join(",")})]):null}}),U2=D({name:"ReadTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},readingTimeLocale:{type:Object,default:()=>null},pure:Boolean},setup(e){const t=da();return()=>{var a,s,i;return(a=e.readingTimeLocale)!=null&&a.words?l("span",{class:"page-word-info","aria-label":`${t.value.words}${e.pure?"":"🔠"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[l(kd),l("span",(s=e.readingTimeLocale)==null?void 0:s.words),l("meta",{property:"wordCount",content:(i=e.readingTime)==null?void 0:i.words})]):null}}}),xd=D({name:"PageInfo",components:{AuthorInfo:B2,CategoryInfo:F2,DateInfo:$2,OriginalInfo:q2,PageViewInfo:()=>null,ReadingTimeInfo:W2,TagInfo:G2,WordInfo:U2},props:{items:{type:[Array,Boolean],default:()=>["Author","Original","Date","PageView","ReadingTime","Category","Tag"]},info:{type:Object,required:!0}},setup(e){const t=ja();return()=>e.items?l("div",{class:"page-info"},e.items.map(a=>l(st(`${a}Info`),{...e.info,pure:t.value}))):null}}),J2=D({name:"PrintButton",setup(){const e=ua(),t=ce();return()=>e.value.print===!1?null:l("button",{type:"button",class:"print-button",title:t.value.metaLocales.print,onClick:()=>{window.print()}},l(_d))}});const K2=({title:e,level:t,slug:a})=>l(Pe,{to:`#${a}`,class:["toc-link",`level${t}`]},()=>e),Wi=(e,t)=>{const a=Rt();return e.length&&t>0?l("ul",{class:"toc-list"},e.map(s=>{const i=Wi(s.children,t-1);return[l("li",{class:["toc-item",{active:a.hash===`#${s.slug}`}]},K2(s)),i?l("li",i):null]})):null};var Td=D({name:"TOC",props:{items:{type:Array,default:()=>[]},headerDepth:{type:Number,default:2}},slots:Object,setup(e,{slots:t}){const a=Rt(),s=we(),i=da(),n=le(),o=q("-1.7rem"),c=d=>{var p;(p=n.value)==null||p.scrollTo({top:d,behavior:"smooth"})},u=()=>{if(n.value){const d=document.querySelector(".toc-item.active");d?o.value=`${d.getBoundingClientRect().top-n.value.getBoundingClientRect().top+n.value.scrollTop}px`:o.value="-1.7rem"}else o.value="-1.7rem"};return ie(()=>{re(()=>a.hash,d=>{if(n.value){const p=document.querySelector(`#toc a.toc-link[href$="${d}"]`);if(!p)return;const{top:m,height:h}=n.value.getBoundingClientRect(),{top:f,height:g}=p.getBoundingClientRect();f<m?c(n.value.scrollTop+f-m):f+g>m+h&&c(n.value.scrollTop+f+g-m-h)}}),re(()=>a.fullPath,u,{flush:"post",immediate:!0})}),()=>{var p,m;const d=e.items.length?Wi(e.items,e.headerDepth):s.value.headers?Wi(s.value.headers,e.headerDepth):null;return d?l("div",{class:"toc-place-holder"},[l("aside",{id:"toc"},[(p=t.before)==null?void 0:p.call(t),l("div",{class:"toc-header"},[i.value.toc,l(J2)]),l("div",{class:"toc-wrapper",ref:n},[d,l("div",{class:"toc-marker",style:{top:o.value}})]),(m=t.after)==null?void 0:m.call(t)])]):null}}}),Gn=D({name:"SkipLink",props:{content:{type:String,default:"main-content"}},setup(e){const t=we(),a=ce(),s=le(),i=({target:n})=>{const o=document.querySelector(n.hash);if(o){const c=()=>{o.removeAttribute("tabindex"),o.removeEventListener("blur",c)};o.setAttribute("tabindex","-1"),o.addEventListener("blur",c),o.focus(),window.scrollTo(0,0)}};return ie(()=>{re(()=>t.value.path,()=>s.value.focus())}),()=>[l("span",{ref:s,tabindex:"-1"}),l("a",{href:`#${e.content}`,class:"vp-skip-link sr-only",onClick:i},a.value.routeLocales.skipToContent)]}});let Ei=null,ns=null;const Q2={wait:()=>Ei,pending:()=>{Ei=new Promise(e=>{ns=e})},resolve:()=>{ns==null||ns(),Ei=null,ns=null}},Ad=()=>Q2;var Y2=D({name:"FadeSlideY",slots:Object,setup(e,{slots:t}){const{resolve:a,pending:s}=Ad();return()=>l(ia,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:a,onBeforeLeave:s},()=>{var i;return(i=t.default)==null?void 0:i.call(t)})}});const Z2=(e,t)=>{const a=e.replace(t,"/").split("/"),s=[];let i=Mr(t);return a.forEach((n,o)=>{o!==a.length-1?(i+=`${n}/`,s.push({link:i,name:n||"Home"})):n!==""&&(i+=n,s.push({link:i,name:n}))}),s},jd=(e,{slots:t})=>{var m,h;const{bgImage:a,bgImageDark:s,bgImageStyle:i,color:n,description:o,image:c,imageDark:u,header:d,features:p=[]}=e;return l("div",{class:"vp-feature-wrapper"},[a?l("div",{class:["vp-feature-bg",{light:s}],style:[{"background-image":`url(${a})`},i]}):null,s?l("div",{class:"vp-feature-bg dark",style:[{"background-image":`url(${s})`},i]}):null,l("div",{class:"vp-feature",style:n?{color:n}:{}},[((m=t.image)==null?void 0:m.call(t,e))||[c?l("img",{class:["vp-feature-image",{light:u}],src:Ee(c),alt:""}):null,u?l("img",{class:"vp-feature-image dark",src:Ee(u),alt:""}):null],((h=t.info)==null?void 0:h.call(t,e))||[d?l("h2",{class:"vp-feature-header"},d):null,o?l("p",{class:"vp-feature-description",innerHTML:o}):null],p.length?l("div",{class:"vp-features"},p.map(({icon:f,title:g,details:E,link:k})=>{const y=[l("h3",{class:"vp-feature-title"},[l(We,{icon:f}),l("span",{innerHTML:g})]),l("p",{class:"vp-feature-details",innerHTML:E})];return k?Ea(k)?l("a",{class:"vp-feature-item link",href:k,"aria-label":g,target:"_blank"},y):l(Pe,{class:"vp-feature-item link",to:k,"aria-label":g},()=>y):l("div",{class:"vp-feature-item"},y)})):null])])};jd.displayName="FeaturePanel";var Al=jd,X2=D({name:"HeroInfo",slots:Object,setup(e,{slots:t}){const a=ye(),s=Xa(),i=_(()=>a.value.heroFullScreen??!1),n=_(()=>{const{heroText:d,tagline:p}=a.value;return{text:d??s.value.title??"Hello",tagline:p??s.value.description??"",isFullScreen:i.value}}),o=_(()=>{const{heroText:d,heroImage:p,heroImageDark:m,heroAlt:h,heroImageStyle:f}=a.value;return{image:p?Ee(p):null,imageDark:m?Ee(m):null,heroStyle:f,alt:h||d||"",isFullScreen:i.value}}),c=_(()=>{const{bgImage:d,bgImageDark:p,bgImageStyle:m}=a.value;return{image:ke(d)?Ee(d):null,imageDark:ke(p)?Ee(p):null,bgStyle:m,isFullScreen:i.value}}),u=_(()=>a.value.actions??[]);return()=>{var d,p,m;return l("header",{class:["vp-hero-info-wrapper",{fullscreen:i.value}]},[((d=t.heroBg)==null?void 0:d.call(t,c.value))||[c.value.image?l("div",{class:["vp-hero-mask",{light:c.value.imageDark}],style:[{"background-image":`url(${c.value.image})`},c.value.bgStyle]}):null,c.value.imageDark?l("div",{class:"vp-hero-mask dark",style:[{"background-image":`url(${c.value.imageDark})`},c.value.bgStyle]}):null],l("div",{class:"vp-hero-info"},[((p=t.heroImage)==null?void 0:p.call(t,o.value))||l(he,{appear:!0,type:"group"},()=>[o.value.image?l("img",{key:"light",class:["vp-hero-image",{light:o.value.imageDark}],style:o.value.heroStyle,src:o.value.image,alt:o.value.alt}):null,o.value.imageDark?l("img",{key:"dark",class:"vp-hero-image dark",style:o.value.heroStyle,src:o.value.imageDark,alt:o.value.alt}):null]),((m=t.heroInfo)==null?void 0:m.call(t,n.value))??l("div",{class:"vp-hero-infos"},[n.value.text?l(he,{appear:!0,delay:.04},()=>l("h1",{id:"main-title"},n.value.text)):null,n.value.tagline?l(he,{appear:!0,delay:.08},()=>l("p",{id:"main-description",innerHTML:n.value.tagline})):null,u.value.length?l(he,{appear:!0,delay:.12},()=>l("p",{class:"vp-hero-actions"},u.value.map(h=>l(Ye,{class:["vp-hero-action",h.type||"default"],config:h,noExternalLinkIcon:!0},h.icon?{before:()=>l(We,{icon:h.icon})}:{})))):null])])])}}});const Id=(e,{slots:t})=>{var h,f,g;const{bgImage:a,bgImageDark:s,bgImageStyle:i,color:n,description:o,image:c,imageDark:u,header:d,highlights:p=[],type:m="un-order"}=e;return l("div",{class:"vp-highlight-wrapper",style:n?{color:n}:{}},[a?l("div",{class:["vp-highlight-bg",{light:s}],style:[{"background-image":`url(${a})`},i]}):null,s?l("div",{class:"vp-highlight-bg dark",style:[{"background-image":`url(${s})`},i]}):null,l("div",{class:"vp-highlight"},[((h=t.image)==null?void 0:h.call(t,e))||[c?l("img",{class:["vp-highlight-image",{light:u}],src:Ee(c),alt:""}):null,u?l("img",{class:"vp-highlight-image dark",src:Ee(u),alt:""}):null],((f=t.info)==null?void 0:f.call(t,e))||[l("div",{class:"vp-highlight-info-wrapper"},l("div",{class:"vp-highlight-info"},[d?l("h2",{class:"vp-highlight-header",innerHTML:d}):null,o?l("p",{class:"vp-highlight-description",innerHTML:o}):null,((g=t.highlights)==null?void 0:g.call(t,p))||l(m==="order"?"ol":m==="no-order"?"dl":"ul",{class:"vp-highlights"},p.map(({icon:E,title:k,details:y,link:T})=>{const b=[l(m==="no-order"?"dt":"h3",{class:"vp-highlight-title"},[E?l(We,{class:"vp-highlight-icon",icon:E}):null,l("span",{innerHTML:k})]),y?l(m==="no-order"?"dd":"p",{class:"vp-highlight-details",innerHTML:y}):null];return l(m==="no-order"?"div":"li",{class:["vp-highlight-item-wrapper",{link:T}]},T?Ea(T)?l("a",{class:"vp-highlight-item link",href:T,"aria-label":k,target:"_blank"},b):l(Pe,{class:"vp-highlight-item link",to:T,"aria-label":k},()=>b):l("div",{class:"vp-highlight-item"},b))}))]))]])])};Id.displayName="HighlightPanel";var ev=Id,tv=D({name:"HomePage",slots:Object,setup(e,{slots:t}){const a=ja(),s=ye(),i=_(()=>{const{features:o}=s.value;return As(o)?o:null}),n=_(()=>{const{highlights:o}=s.value;return As(o)?o:null});return()=>{var o,c,u,d;return l("main",{id:"main-content",class:["vp-project-home ",{pure:a.value}],"aria-labelledby":s.value.heroText===null?"":"main-title"},[(o=t.top)==null?void 0:o.call(t),l(X2),((c=n.value)==null?void 0:c.map(p=>"features"in p?l(Al,p):l(ev,p)))||(i.value?l(he,{appear:!0,delay:.24},()=>l(Al,{features:i.value})):null),(u=t.center)==null?void 0:u.call(t),l(he,{appear:!0,delay:.32},()=>l(Wn)),(d=t.bottom)==null?void 0:d.call(t)])}}}),av=D({name:"BreadCrumb",setup(){const e=we(),t=kt(),a=ye(),s=ce(),i=le([]),n=_(()=>(a.value.breadcrumb||a.value.breadcrumb!==!1&&s.value.breadcrumb!==!1)&&i.value.length>1),o=_(()=>a.value.breadcrumbIcon||a.value.breadcrumbIcon!==!1&&s.value.breadcrumbIcon!==!1),c=()=>{const u=Z2(e.value.path,t.value).map(({link:d,name:p})=>{const{path:m,meta:h}=es(d);return h?{title:h[be.shortTitle]||h[be.title]||p,icon:h[be.icon],path:m}:null}).filter(d=>d!==null);u.length>1&&(i.value=u)};return ie(()=>{re(()=>e.value.path,c,{immediate:!0})}),()=>l("nav",{class:["vp-breadcrumb",{disable:!n.value}]},n.value?l("ol",{vocab:"https://schema.org/",typeof:"BreadcrumbList"},i.value.map((u,d)=>l("li",{class:{"is-active":i.value.length-1===d},property:"itemListElement",typeof:"ListItem"},[l(Pe,{to:u.path,property:"item",typeof:"WebPage"},()=>[o.value?l(We,{icon:u.icon}):null,l("span",{property:"name"},u.title||"Unknown")]),l("meta",{property:"position",content:d+1})]))):[])}});const jl=e=>e===!1||yt(e)?e:ke(e)?Fa(e,!0):null,Gi=(e,t,a)=>{const s=e.findIndex(i=>i.link===t);if(s!==-1){const i=e[s+a];return i!=null&&i.link?i:null}for(const i of e)if(i.children){const n=Gi(i.children,t,a);if(n)return n}return null};var sv=D({name:"PageNav",setup(){const e=ce(),t=ye(),a=$n(),s=we(),i=zs(),n=_(()=>{const c=jl(t.value.prev);return c===!1?null:c||(e.value.prevLink===!1?null:Gi(a.value,s.value.path,-1))}),o=_(()=>{const c=jl(t.value.next);return c===!1?null:c||(e.value.nextLink===!1?null:Gi(a.value,s.value.path,1))});return ve("keydown",c=>{c.altKey&&(c.key==="ArrowRight"?o.value&&(i(o.value.link),c.preventDefault()):c.key==="ArrowLeft"&&n.value&&(i(n.value.link),c.preventDefault()))}),()=>n.value||o.value?l("nav",{class:"vp-page-nav"},[n.value?l(Ye,{class:"prev",config:n.value},()=>{var c,u;return[l("div",{class:"hint"},[l("span",{class:"arrow start"}),e.value.metaLocales.prev]),l("div",{class:"link"},[l(We,{icon:(c=n.value)==null?void 0:c.icon}),(u=n.value)==null?void 0:u.text])]}):null,o.value?l(Ye,{class:"next",config:o.value},()=>{var c,u;return[l("div",{class:"hint"},[e.value.metaLocales.next,l("span",{class:"arrow end"})]),l("div",{class:"link"},[(c=o.value)==null?void 0:c.text,l(We,{icon:(u=o.value)==null?void 0:u.icon})])]}):null]):null}});const rv={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},iv=({docsRepo:e,docsBranch:t,docsDir:a,filePathRelative:s,editLinkPattern:i})=>{if(!s)return null;const n=On(e);let o;return i?o=i:n!==null&&(o=rv[n]),o?o.replace(/:repo/u,Et(e)?e:`https://github.com/${e}`).replace(/:branch/u,t).replace(/:path/u,zc(`${Mr(a)}/${s}`)):null},nv=()=>{const e=ce(),t=we(),a=ye();return _(()=>{const{repo:s,docsRepo:i=s,docsBranch:n="main",docsDir:o="",editLink:c,editLinkPattern:u=""}=e.value;if(!(a.value.editLink??c??!0)||!i)return null;const d=iv({docsRepo:i,docsBranch:n,docsDir:o,editLinkPattern:u,filePathRelative:t.value.filePathRelative});return d?{text:e.value.metaLocales.editLink,link:d}:null})},ov=()=>{const e=Xa(),t=ce(),a=we(),s=ye();return _(()=>{var i,n;return!(s.value.lastUpdated??t.value.lastUpdated??!0)||!((i=a.value.git)!=null&&i.updatedTime)?null:new Date((n=a.value.git)==null?void 0:n.updatedTime).toLocaleString(e.value.lang)})},lv=()=>{const e=ce(),t=we(),a=ye();return _(()=>{var s;return a.value.contributors??e.value.contributors??!0?((s=t.value.git)==null?void 0:s.contributors)??null:null})};var cv=D({name:"PageTitle",setup(){const e=we(),t=ye(),a=ce(),{info:s,items:i}=m2();return()=>l("div",{class:"vp-page-title"},[l("h1",[a.value.titleIcon===!1?null:l(We,{icon:t.value.icon}),e.value.title]),l(xd,{info:s.value,...i.value===null?{}:{items:i.value}}),l("hr")])}});const Ld=()=>l(ne,{name:"edit"},()=>[l("path",{d:"M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"}),l("path",{d:"M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"})]);Ld.displayName="EditIcon";var uv=D({name:"PageMeta",setup(){const e=ce(),t=nv(),a=ov(),s=lv();return()=>{const{metaLocales:i}=e.value;return l("footer",{class:"page-meta"},[t.value?l("div",{class:"meta-item edit-link"},l(Ye,{class:"label",config:t.value},{before:()=>l(Ld)})):null,l("div",{class:"meta-item git-info"},[a.value?l("div",{class:"update-time"},[l("span",{class:"label"},`${i.lastUpdated}: `),l(zr,()=>l("span",{class:"info"},a.value))]):null,s.value&&s.value.length?l("div",{class:"contributors"},[l("span",{class:"label"},`${i.contributors}: `),s.value.map(({email:n,name:o},c)=>[l("span",{class:"contributor",title:`email: ${n}`},o),c!==s.value.length-1?",":""])]):null])])}}}),dv=D({name:"NormalPage",slots:Object,setup(e,{slots:t}){const a=ye(),{isDarkmode:s}=Fs(),i=ce(),n=_(()=>a.value.toc||a.value.toc!==!1&&i.value.toc!==!1);return()=>l("main",{id:"main-content",class:"vp-page"},l($e("LocalEncrypt")?st("LocalEncrypt"):gu,()=>{var o,c,u,d;return[(o=t.top)==null?void 0:o.call(t),a.value.cover?l("div",{class:"page-cover"},l("img",{src:Ee(a.value.cover),alt:"","no-view":""})):null,l(av),l(cv),n.value?l(Td,{headerDepth:a.value.headerDepth??i.value.headerDepth??2},{before:()=>{var p;return(p=t.tocBefore)==null?void 0:p.call(t)},after:()=>{var p;return(p=t.tocAfter)==null?void 0:p.call(t)}}):null,(c=t.contentBefore)==null?void 0:c.call(t),l(Wn),(u=t.contentAfter)==null?void 0:u.call(t),l(uv),l(sv),$e("CommentService")?l(st("CommentService"),{darkmode:s.value}):null,(d=t.bottom)==null?void 0:d.call(t)]}))}}),pv=D({name:"Layout",slots:Object,setup(e,{slots:t}){const a=ua(),s=ce(),i=we(),n=ye(),{isMobile:o}=Bs(),c=_(()=>{var u,d;return((u=s.value.blog)==null?void 0:u.sidebarDisplay)||((d=a.value.blog)==null?void 0:d.sidebarDisplay)||"mobile"});return()=>[l(Gn),l(qn,{},{default:()=>{var u;return((u=t.default)==null?void 0:u.call(t))||(n.value.home?l(tv):l(Y2,()=>l(dv,{key:i.value.path},{top:()=>{var d;return(d=t.top)==null?void 0:d.call(t)},bottom:()=>{var d;return(d=t.bottom)==null?void 0:d.call(t)},contentBefore:()=>{var d;return(d=t.contentBefore)==null?void 0:d.call(t)},contentAfter:()=>{var d;return(d=t.contentAfter)==null?void 0:d.call(t)},tocBefore:()=>{var d;return(d=t.tocBefore)==null?void 0:d.call(t)},tocAfter:()=>{var d;return(d=t.tocAfter)==null?void 0:d.call(t)}})))},...c.value==="none"?{}:{navScreenBottom:()=>l(st("BloggerInfo"))},...!o.value&&c.value==="always"?{sidebar:()=>l(st("BloggerInfo"))}:{}})]}}),mv=D({name:"NotFoundHint",setup(){const e=ce(),t=()=>{const a=e.value.routeLocales.notFoundMsg;return a[Math.floor(Math.random()*a.length)]};return()=>l("div",{class:"not-found-hint"},[l("p",{class:"error-code"},"404"),l("h1",{class:"error-title"},e.value.routeLocales.notFoundTitle),l("p",{class:"error-hint"},t())])}}),hv=D({name:"NotFound",slots:Object,setup(e,{slots:t}){const a=Ot(),s=kt(),i=ce();return()=>[l(Gn),l(qn,{noSidebar:!0},()=>{var n;return l("main",{id:"main-content",class:"vp-page not-found"},((n=t.default)==null?void 0:n.call(t))||[l(mv),l("div",{class:"actions"},[l("button",{type:"button",class:"action-button",onClick:()=>{window.history.go(-1)}},i.value.routeLocales.back),l("button",{type:"button",class:"action-button",onClick:()=>{a.push(i.value.home??s.value)}},i.value.routeLocales.home)])])})]}});const fv={GitHub:'<svg xmlns="http://www.w3.org/2000/svg" class="icon github-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#171515"/><path fill="#fff" d="M509.423 146.442c-200.317 0-362.756 162.42-362.756 362.8 0 160.266 103.936 296.24 248.109 344.217 18.139 3.327 24.76-7.872 24.76-17.486 0-8.613-.313-31.427-.49-61.702-100.912 21.923-122.205-48.63-122.205-48.63-16.495-41.91-40.28-53.067-40.28-53.067-32.937-22.51 2.492-22.053 2.492-22.053 36.407 2.566 55.568 37.386 55.568 37.386 32.362 55.438 84.907 39.43 105.58 30.143 3.296-23.444 12.667-39.43 23.032-48.498-80.557-9.156-165.246-40.28-165.246-179.297 0-39.604 14.135-71.988 37.342-97.348-3.731-9.178-16.18-46.063 3.556-96.009 0 0 30.46-9.754 99.76 37.19 28.937-8.048 59.97-12.071 90.823-12.211 30.807.14 61.843 4.165 90.822 12.21 69.26-46.944 99.663-37.189 99.663-37.189 19.792 49.946 7.34 86.831 3.61 96.01 23.25 25.359 37.29 57.742 37.29 97.347 0 139.366-84.82 170.033-165.637 179.013 13.026 11.2 24.628 33.342 24.628 67.182 0 48.498-.445 87.627-.445 99.521 0 9.702 6.535 20.988 24.945 17.444 144.03-48.067 247.881-183.95 247.881-344.175 0-200.378-162.442-362.798-362.802-362.798z"/></svg>',Facebook:'<svg xmlns="http://www.w3.org/2000/svg" class="icon facebook-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#3c599b"/><path fill="#fff" d="M353.357 400.378h68.151v-66.235c0-29.206.737-74.247 21.952-102.142 22.348-29.542 53.026-49.622 105.794-49.622 85.976 0 122.18 12.263 122.18 12.263L654.4 295.61s-28.407-8.213-54.903-8.213c-26.512 0-50.243 9.5-50.243 35.995v76.988h108.687L650.352 499H549.254v342.602H421.508V499h-68.15v-98.622z"/></svg>',Instagram:'<svg xmlns="http://www.w3.org/2000/svg" class="icon instagram-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#181818"/><path fill="#fff" d="M512 348.16c-88.222 0-163.84 71.417-163.84 163.84 0 88.222 71.417 163.84 163.84 163.84 88.222 0 163.84-71.417 163.84-163.84 0-88.222-75.618-163.84-163.84-163.84zm0 268.866c-58.814 0-105.026-46.212-105.026-105.026S453.186 406.974 512 406.974 617 453.186 617 512s-46.186 105-105 105zM680.041 306.15c-21 0-37.81 16.804-37.81 37.809s16.805 37.81 37.81 37.81 37.81-16.805 37.81-37.81-16.805-37.81-37.81-37.81z"/><path fill="#FFF" d="M659.036 196.923h-16.804c-50.413-4.2-210.051-4.2-260.464 0-96.623-4.2-180.644 71.418-184.845 168.041v16.804c-4.2 50.413-4.2 210.051 0 260.464-4.2 96.623 71.418 180.644 168.041 184.845h16.804c50.413 4.2 210.051 4.2 260.464 0 96.623 4.2 180.644-71.418 184.845-168.041V381.768c4.2-96.623-71.418-180.644-168.041-184.845zM759.86 696.845c-12.604 29.407-33.609 50.412-58.815 58.814-121.83 16.805-247.86 16.805-373.891 0-29.407-12.603-50.412-33.608-58.814-58.814-12.604-63.015-16.805-126-12.604-184.845-4.2-63.015 0-126 12.604-184.845 12.603-29.407 33.608-50.412 58.814-58.814 121.83-16.805 247.86-16.805 373.891 0 29.407 12.603 50.412 33.608 58.815 58.814 12.603 63.015 16.804 126 12.603 184.845 4.2 63.015 0 126-12.603 184.845z"/></svg>',Linkedin:'<svg xmlns="http://www.w3.org/2000/svg" class="icon linkedin-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#4376B1"/><path fill="#F1F2F2" d="M838.301 555.94v225.157h-130.54V571.03c0-52.746-18.847-88.766-66.112-88.766-36.069 0-57.496 24.25-66.959 47.732-3.436 8.391-4.322 20.045-4.322 31.814v219.277h-130.55s1.752-355.784 0-392.613h130.56v55.637c-.263.438-.633.867-.867 1.285h.866v-1.285c17.349-26.694 48.287-64.856 117.651-64.856 85.884 0 150.273 56.114 150.273 176.685zm-535.05-356.72c-44.655 0-73.87 29.314-73.87 67.826 0 37.695 28.368 67.855 72.157 67.855h.847c45.532 0 73.842-30.16 73.842-67.855-.866-38.512-28.31-67.825-72.975-67.825zM237.14 781.098h130.5V388.474h-130.5v392.623z"/></svg>',Gmail:'<svg xmlns="http://www.w3.org/2000/svg" class="icon gmail-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#DB4437"/><path fill="#E67C73" d="M277.48 285.567h465.767v441.362H277.48V285.567z"/><path fill="#FFF" d="M282.543 285.567h-10.645c-25.962 0-47.122 21.808-47.122 48.705v343.952c0 26.897 21.08 48.705 47.122 48.705h24.976V407.954l213.49 169.95 213.489-169.95V726.93h24.975c26.04 0 47.123-21.809 47.123-48.705V334.272c0-26.897-21.134-48.705-47.123-48.705h-10.644L510.364 480.44 282.542 285.567z"/></svg>'},wv={category:{"/":{path:"/category/",map:{CLI:{path:"/category/cli/",indexes:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]},cpp:{path:"/category/cpp/",indexes:[29]},DevOps:{path:"/category/devops/",indexes:[30,31,32,33,34]},Gitlab:{path:"/category/gitlab/",indexes:[30,35,36,37,38,39,40]},Kubernetes:{path:"/category/kubernetes/",indexes:[30,41,42,43]},Linux:{path:"/category/linux/",indexes:[30,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,44,45,46,47,48,49,50,51,52,31,34,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74]},RedHat:{path:"/category/redhat/",indexes:[30,75,76,77,78,79,80,81,82,31,83,84,85,86]},AWS:{path:"/category/aws/",indexes:[30,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168]},Haskell:{path:"/category/haskell/",indexes:[169,170]},Java:{path:"/category/java/",indexes:[171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220]},Kotlin:{path:"/category/kotlin/",indexes:[171,198,199,200,201,202,203,204,205,206,207,208,217,218]},Spring:{path:"/category/spring/",indexes:[171,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,209,210,211,212,213,214,215,216]},Gradle:{path:"/category/gradle/",indexes:[171,198,199,200,201,202,203,204,205,206,207,208]},Android:{path:"/category/android/",indexes:[171,198,199,200,201,202,203,204,205,206,207,208,217]},Python:{path:"/category/python/",indexes:[221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250]},Ruby:{path:"/category/ruby/",indexes:[251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271]},Rust:{path:"/category/rust/",indexes:[272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313]},Swift:{path:"/category/swift/",indexes:[314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687]},"Objective-C":{path:"/category/objective-c/",indexes:[314,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708]},Cpp:{path:"/category/cpp/",indexes:[709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,754]},GPU:{path:"/category/gpu/",indexes:[710,711,712,713]},CUDA:{path:"/category/cuda/",indexes:[710,711,712]},Security:{path:"/category/security/",indexes:[755,756,757,758,759,760,761,762,763,764,765,32,33]},OS:{path:"/category/os/",indexes:[31,34]},Mobile:{path:"/category/mobile/",indexes:[32,33]},Git:{path:"/category/git/",indexes:[34]},Ansible:{path:"/category/ansible/",indexes:[34]},"🐑Haskell":{path:"/category/🐑haskell/",indexes:[766,767,768,769,770,771,772,773,774,775,776,777,778,779,780,781,782,783,784,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799]},JavaFX:{path:"/category/javafx/",indexes:[172,173,174]},Quarkus:{path:"/category/quarkus/",indexes:[187,188,189,190,191,192]},"☕️Java":{path:"/category/☕️java/",indexes:[800,801]},"🍃Spring":{path:"/category/🍃spring/",indexes:[800,801]},"📦AWS":{path:"/category/📦aws/",indexes:[800,801]},"Spring Boot":{path:"/category/spring-boot/",indexes:[209,210,211,212,213,214,215,216]},"Intellij Idea":{path:"/category/intellij-idea/",indexes:[217,219]},Algorithms:{path:"/category/algorithms/",indexes:[218]},IDE:{path:"/category/ide/",indexes:[219]},"Code Style":{path:"/category/code-style/",indexes:[219]},"Visual Studio Code":{path:"/category/visual-studio-code/",indexes:[219]},JDK:{path:"/category/jdk/",indexes:[220]},JavaScript:{path:"/category/javascript/",indexes:[802,803,804,805,806,807,808,809,810,811,812,813,814,815,816,817,818,819,820,821,822,823,824,825,826,827,828,829,830,831]},TypeScript:{path:"/category/typescript/",indexes:[803,804,805,806,807,808,809,810,811,812,813,814,815,816,817,818,819,820,821,822,823,824,825,826,827,828,829,830,831]},React:{path:"/category/react/",indexes:[806,807,808,809,810,813]},Vue:{path:"/category/vue/",indexes:[811,812]},"Next.js":{path:"/category/next.js/",indexes:[811,812]},CSS:{path:"/category/css/",indexes:[832,833,834,835,836,837,838,839]},LLM:{path:"/category/llm/",indexes:[840,841,842,843]},"🙆‍♂️Oracle DB":{path:"/category/🙆‍♂️oracle-db/",indexes:[844,845,846,847,848,849,850,851,852]},"Oracle DB":{path:"/category/oracle-db/",indexes:[853]},PHP:{path:"/category/php/",indexes:[854,855,856,857,858,859,860,861,862,863,864,865,866,867,868,869,870,871,872,873,874,875,876,877,878,879,880,881,882,883,884,885,886,887,888,889,890,891,892,893,894,895,896,897,898,899,900,901,902,903,904,905,906,907,908,909,910,911,912,913,914,915,916,917,918,919,920,921,922]},MySQL:{path:"/category/mysql/",indexes:[854,855,856,857,858,859,860,861,862,863,864,865,866,867,868,869,870,871,872,873,874,875,876,877,878,879,880,881,882,883,884,885,886,887,888,889,890,891,892,893,894,895,896,897,898,899,900,901,902,903,904,905,906,907,908,909,910,911,912,913,914,915,916,917,918,919,920,921,922]},"🔻Ruby":{path:"/category/🔻ruby/",indexes:[923]},"🏛Objective-C":{path:"/category/🏛objective-c/",indexes:[924]}}}},tag:{"/":{path:"/tag/",map:{crashcourse:{path:"/tag/crashcourse/",indexes:[0,29,169,171,221,272,314,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,709,710,711,712,713,755,756,757,758,759,760,761,762,763,764,765,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,41,35,36,37,38,39,40,44,45,46,47,48,49,50,51,52,75,76,77,78,79,80,81,82,31,83,84,85,86,766,767,768,769,770,771,772,773,774,775,776,777,778,779,780,781,782,783,170,784,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,800,160,161,801,162,163,164,165,166,167,168,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,832,833,834,835,836,837,838,839,840,841,842,843,844,845,846,847,848,849,850,851,852,853,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,252,253,254,255,256,257,258,259,260,261,262,263,264,923,265,266,267,268,269,270,271,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,688,689,690,691,692,693,694,695,696,697,698,699,700,924,701,702,703,704,705,706,707,708,530,531,532,533,534,535,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,754,42,43,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687]},cli:{path:"/tag/cli/",indexes:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]},sh:{path:"/tag/sh/",indexes:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]},shell:{path:"/tag/shell/",indexes:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]},gnu:{path:"/tag/gnu/",indexes:[0,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]},linux:{path:"/tag/linux/",indexes:[0,30,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,44,45,46,47,48,49,50,51,52,34,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74]},awk:{path:"/tag/awk/",indexes:[0,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]},c:{path:"/tag/c/",indexes:[29,309,310,311,312,313]},cpp:{path:"/tag/cpp/",indexes:[29,709,710,711,712,713,309,310,311,312,313,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,754]},"c-plus-plus":{path:"/tag/c-plus-plus/",indexes:[29,709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,754]},algorithm:{path:"/tag/algorithm/",indexes:[29,709,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,754]},aws:{path:"/tag/aws/",indexes:[30,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,800,160,161,801,162,163,164,165,166,168,252,253,254,255,256,257,258,259,260,261,262,263,264,923,265,266,267,268,269,270,271]},"amazon-web-service":{path:"/tag/amazon-web-service/",indexes:[30]},amazon:{path:"/tag/amazon/",indexes:[30]},git:{path:"/tag/git/",indexes:[30,34]},gitlab:{path:"/tag/gitlab/",indexes:[30,35,36,37,38,39,40,34]},kubernetes:{path:"/tag/kubernetes/",indexes:[30,41,42,43]},redhat:{path:"/tag/redhat/",indexes:[30,75,76,77,78,79,80,81,82,31,83,84,85,86]},haskell:{path:"/tag/haskell/",indexes:[169,766,767,768,769,770,771,772,773,774,775,776,777,778,779,780,781,782,783,170,784,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799]},parsec:{path:"/tag/parsec/",indexes:[169,766,767,768,769,770,771,772,773,774,775,776,777,778,779,780,781,782,783,170,784,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799]},attoparsec:{path:"/tag/attoparsec/",indexes:[169,766,767,768,769,770,771,772,773,774,775,776,777,778,779,780,781,782,783,170,784,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799]},trifecta:{path:"/tag/trifecta/",indexes:[169,766,767,768,769,770,771,772,773,774,775,776,777,778,779,780,781,782,783,170,784,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799]},java:{path:"/tag/java/",indexes:[171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,800,160,161,801,162,163,164,165,166,167,168,198,199,200,201,202,203,204,205,206,207,209,210,211,212,213,214,215,216,219,220]},kotiln:{path:"/tag/kotiln/",indexes:[171,198,199,200,201,202,203,204,205,206,207,208]},android:{path:"/tag/android/",indexes:[171,198,199,200,201,202,203,204,205,206,207,208,217]},gradle:{path:"/tag/gradle/",indexes:[171,198,199,200,201,202,203,204,205,206,207,208]},javascript:{path:"/tag/javascript/",indexes:[925,926,927,928,929,930,931,932,933,934,935,936,937,938,939,940,941,942,943,944,945,946,947,802,803,804,805,806,807,808,809,810,811,812,813,814,815,816,817,818,819,820,821,822,823,824,825,826,827,828,829,830,831]},js:{path:"/tag/js/",indexes:[925,926,927,928,929,930,931,932,933,934,935,936,937,938,939,940,941,942,943,944,945,946,947,802,803,948,949,950,951,952,953,954,804,805,806,807,808,809,810,811,812,813,814,815,816,817,818,819,820,821,822,823,824,825,826,827,828,829,830,831]},typescript:{path:"/tag/typescript/",indexes:[925,803,804,805,806,807,808,809,810,811,812,813,814,815,816,817,818,819,820,821,822,823,824,825,826,827,828,829,830,831]},ts:{path:"/tag/ts/",indexes:[925,803,804,805,806,807,808,809,810,811,812,813,814,815,816,817,818,819,820,821,822,823,824,825,826,827,828,829,830,831]},php:{path:"/tag/php/",indexes:[955,854,855,856,857,858,859,860,861,862,863,864,865,866,867,868,869,870,871,872,873,874,875,876,877,878,879,880,881,882,883,884,885,886,887,888,889,890,891,892,893,894,895,896,897,898,899,900,901,902,903,904,905,906,907,908,909,910,911,912,913,914,915,916,917,918,919,920,921,922]},laravel:{path:"/tag/laravel/",indexes:[955,854,855,856,857,858,859,860,861,862,863,864,865,866,867,868,869,870,871,872,873,874,875,876,877,878,879,880,881,882,883,884,885,886,887,888,889,890,891,892,893,894,895,896,897,898,899,900,901,902,903,904,905,906,907,908,909,910,911,912,913,914,915,916,917,918,919,920,921,922]},python:{path:"/tag/python/",indexes:[221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250]},py:{path:"/tag/py/",indexes:[221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250]},OpenPyxl:{path:"/tag/openpyxl/",indexes:[221,240,241,242,243,244,245,246,247,248,249,250]},pywin32:{path:"/tag/pywin32/",indexes:[221,240,241,242,243,244,245,246,247,248,249,250]},xlwings:{path:"/tag/xlwings/",indexes:[221,240,241,242,243,244,245,246,247,248,249,250]},"python-docx":{path:"/tag/python-docx/",indexes:[221,240,241,242,243,244,245,246,247,248,249,250]},excel:{path:"/tag/excel/",indexes:[221,240,241,242,243,244,245,246,247,248,249,250]},ruby:{path:"/tag/ruby/",indexes:[251,252,253,254,255,256,257,258,259,260,261,262,263,264,923,265,266,267,268,269,270,271]},rb:{path:"/tag/rb/",indexes:[251]},rust:{path:"/tag/rust/",indexes:[272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313]},rs:{path:"/tag/rs/",indexes:[272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313]},swift:{path:"/tag/swift/",indexes:[314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687]},objc:{path:"/tag/objc/",indexes:[314,688,689,690,691,692,693,694,695,696,697,698,699,700,924,701,702,703,704,705,706,707,708]},"objective-c":{path:"/tag/objective-c/",indexes:[314,688,689,690,691,692,693,694,695,696,697,698,699,700,924,701,702,703,704,705,706,707,708]},cocoapods:{path:"/tag/cocoapods/",indexes:[314]},"accelerated-computing":{path:"/tag/accelerated-computing/",indexes:[710,711,712,713]},security:{path:"/tag/security/",indexes:[755,756,757,758,759,760,761,762,763,764,765,32,33]},github:{path:"/tag/github/",indexes:[755,756,757,758,759,760,761,762,763,764,765,34]},pyrasis:{path:"/tag/pyrasis/",indexes:[87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121]},"amazon-web-services":{path:"/tag/amazon-web-services/",indexes:[87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121]},digitalocean:{path:"/tag/digitalocean/",indexes:[41,273,274,275,276,277,42,43]},kubctl:{path:"/tag/kubctl/",indexes:[41,42,43]},youtube:{path:"/tag/youtube/",indexes:[35,36,37,38,39,40,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308]},freecodecamp:{path:"/tag/freecodecamp/",indexes:[35,36,37,38,39,40,187,188,189,190,191,192,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308]},vdespa:{path:"/tag/vdespa/",indexes:[35,36,37,38,39,40]},yaml:{path:"/tag/yaml/",indexes:[35,36,37,38,39,40]},ci:{path:"/tag/ci/",indexes:[35,36,37,38,39,40]},cd:{path:"/tag/cd/",indexes:[35,36,37,38,39,40]},cicd:{path:"/tag/cicd/",indexes:[35,36,37,38,39,40]},os:{path:"/tag/os/",indexes:[44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74]},aviation:{path:"/tag/aviation/",indexes:[44,45,46,47,48,49,50,51]},networking:{path:"/tag/networking/",indexes:[52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74]},buildah:{path:"/tag/buildah/",indexes:[75,76,77,78,79,80,81,82,31,83,84,85,86]},podman:{path:"/tag/podman/",indexes:[75,76,77,78,79,80,81,82,31,83,84,85,86]},skopeo:{path:"/tag/skopeo/",indexes:[75,76,77,78,79,80,81,82,31,83,84,85,86]},sesearch:{path:"/tag/sesearch/",indexes:[75,76,77,78,79,80,81,82,31,83,84,85,86]},semodule:{path:"/tag/semodule/",indexes:[75,76,77,78,79,80,81,82,31,83,84,85,86]},blog:{path:"/tag/blog/",indexes:[32,33,34,217,218,219,220,926,927,928,929,930,931,932,933,934,935,936,937,938,939,940,941,942,943,944,945,946,947,802,803,948,949,950,951,952,953,954,804,805,806,807,808,809,810,811,812,813,854,855,814,815,816,817,818,819,820,821,822,823,824,825,826,827,828,829,830,831,856,857,858,859,860,861,862,863,864,865,866,867,868,869,870,871,872,873,874,875,876,877,878,879,880,881,882,883,884,885,886,887,888,889,890,891,892,893,894,895,896,897,898,899,900,901,902,903,904,905,906,907,908,909,910,911,912,913,914,915,916,917,918,919,920,921,922]},mobile:{path:"/tag/mobile/",indexes:[32,33]},ansible:{path:"/tag/ansible/",indexes:[34]},jdk:{path:"/tag/jdk/",indexes:[172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,800,160,161,801,162,163,164,165,166,167,168,209,210,211,212,213,214,215,216,219,220]},jdk8:{path:"/tag/jdk8/",indexes:[172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,800,160,161,801,162,163,164,165,166,167,168,209,210,211,212,213,214,215,216,219,220]},stream:{path:"/tag/stream/",indexes:[187,188,189,190,191,192,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,800,160,161,801,162,163,164,165,166,167,168,209,210,211,212,213,214,215,216]},quarkus:{path:"/tag/quarkus/",indexes:[187,188,189,190,191,192]},jpa:{path:"/tag/jpa/",indexes:[187,188,189,190,191,192]},jpastreamer:{path:"/tag/jpastreamer/",indexes:[187,188,189,190,191,192]},spring:{path:"/tag/spring/",indexes:[122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,800,160,161,801,162,163,164,165,166,167,168,209,210,211,212,213,214,215,216]},springframework:{path:"/tag/springframework/",indexes:[122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,800,160,161,801,162,163,164,165,166,167,168,209,210,211,212,213,214,215,216]},springboot:{path:"/tag/springboot/",indexes:[122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,800,160,161,801,162,163,164,165,166,167,168,209,210,211,212,213,214,215,216]},"aws-ec2":{path:"/tag/aws-ec2/",indexes:[122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,800,160,161,801,162,163,164,165,166,168]},kodeco:{path:"/tag/kodeco/",indexes:[198,199,200,201,202,203,204,205,206,207,208,519,520,521,522,523,524,525,526,527,528,529]},react:{path:"/tag/react/",indexes:[198,806,807,808,809,810,813]},"react-native":{path:"/tag/react-native/",indexes:[198]},kotlin:{path:"/tag/kotlin/",indexes:[217,218]},jetbrains:{path:"/tag/jetbrains/",indexes:[217,218,219]},"intellij-idea":{path:"/tag/intellij-idea/",indexes:[217,218,219]},"intellij-idea-plugin":{path:"/tag/intellij-idea-plugin/",indexes:[217]},"android-studio":{path:"/tag/android-studio/",indexes:[217]},algorithms:{path:"/tag/algorithms/",indexes:[218]},google:{path:"/tag/google/",indexes:[219,222,223,224,225,226,227,228,229,230,231,232,233,234,250]},"google-code-style":{path:"/tag/google-code-style/",indexes:[219]},windows:{path:"/tag/windows/",indexes:[219]},vscode:{path:"/tag/vscode/",indexes:[219,235,239]},"visual-studio-code":{path:"/tag/visual-studio-code/",indexes:[219]},api:{path:"/tag/api/",indexes:[948,949,950,951,952,953,954]},broadcast:{path:"/tag/broadcast/",indexes:[948,949,950,951,952,953,954]},reactjs:{path:"/tag/reactjs/",indexes:[806,807,808,809,810,813]},vue:{path:"/tag/vue/",indexes:[811,812]},vuejs:{path:"/tag/vuejs/",indexes:[811,812]},vercel:{path:"/tag/vercel/",indexes:[811,812]},nextjs:{path:"/tag/nextjs/",indexes:[811,812]},"colt-steele":{path:"/tag/colt-steele/",indexes:[832,833,834,835,836,837,838,839]},css:{path:"/tag/css/",indexes:[832,833,834,835,836,837,838,839]},grid:{path:"/tag/grid/",indexes:[832,833,834,835,836,837,838,839]},microsoft:{path:"/tag/microsoft/",indexes:[840,841,842,843]},llm:{path:"/tag/llm/",indexes:[840,841,842,843]},ai:{path:"/tag/ai/",indexes:[840,841,842,843]},"generative-ai":{path:"/tag/generative-ai/",indexes:[840,841,842,843]},"jupyter-notebook":{path:"/tag/jupyter-notebook/",indexes:[843,222,223,224,225,226,227,228,229,230,231,232,233,234,250]},oracle:{path:"/tag/oracle/",indexes:[844,845,846,847,848,849,850,851,852,853]},"oracle-db":{path:"/tag/oracle-db/",indexes:[844,845,846,847,848,849,850,851,852,853]},"oracle-sql":{path:"/tag/oracle-sql/",indexes:[844,845,846,847,848,849,850,851,852,853]},mysql:{path:"/tag/mysql/",indexes:[854,855,856,857,858,859,860,861,862,863,864,865,866,867,868,869,870,871,872,873,874,875,876,877,878,879,880,881,882,883,884,885,886,887,888,889,890,891,892,893,894,895,896,897,898,899,900,901,902,903,904,905,906,907,908,909,910,911,912,913,914,915,916,917,918,919,920,921,922]},"google-colab":{path:"/tag/google-colab/",indexes:[222,223,224,225,226,227,228,229,230,231,232,233,234,250]},numpy:{path:"/tag/numpy/",indexes:[222,223,224,225,226,227,228,229,230,231,232,233,234,250]},pandas:{path:"/tag/pandas/",indexes:[222,223,224,225,226,227,228,229,230,231,232,233,234,250]},ipython:{path:"/tag/ipython/",indexes:[222,223,224,225,226,227,228,229,230,231,232,233,234,250]},anaconda:{path:"/tag/anaconda/",indexes:[235,239]},"vscode-extensions":{path:"/tag/vscode-extensions/",indexes:[235,239]},opencv:{path:"/tag/opencv/",indexes:[236,237,238]},jets:{path:"/tag/jets/",indexes:[252,253,254,255,256,257,258,259,260,261,262,263,264,923,265,266,267,268,269,270,271]},"aws-lambda":{path:"/tag/aws-lambda/",indexes:[252,253,254,255,256,257,258,259,260,261,262,263,264,923,265,266,267,268,269,270,271]},cloudwatch:{path:"/tag/cloudwatch/",indexes:[252,253,254,255,256,257,258,259,260,261,262,263,264,923,265,266,267,268,269,270,271]},eventhelix:{path:"/tag/eventhelix/",indexes:[273,276,277]},wasm:{path:"/tag/wasm/",indexes:[273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313]},assembly:{path:"/tag/assembly/",indexes:[273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313]},zubiarfan:{path:"/tag/zubiarfan/",indexes:[278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308]},assemblyscript:{path:"/tag/assemblyscript/",indexes:[309,310,311,312,313]},"paul-hudson":{path:"/tag/paul-hudson/",indexes:[315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687]},"hacking-with-swift":{path:"/tag/hacking-with-swift/",indexes:[315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687]},xcode:{path:"/tag/xcode/",indexes:[315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,688,689,690,691,692,693,694,695,696,697,698,699,700,924,701,702,703,704,705,706,707,708,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687]},appstore:{path:"/tag/appstore/",indexes:[315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687]},swiftui:{path:"/tag/swiftui/",indexes:[417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687]},ios:{path:"/tag/ios/",indexes:[519,520,521,522,523,524,525,526,527,528,529]},serverless:{path:"/tag/serverless/",indexes:[42,43]}}}}},Sd=["/cli/","/cli/bash-dev/01.html","/cli/bash-dev/02.html","/cli/bash-dev/03.html","/cli/bash-dev/04.html","/cli/bash-dev/","/cli/mastering-curl-interactive-text-guide/01-the-curl-project.html","/cli/mastering-curl-interactive-text-guide/02-command-line-options.html","/cli/mastering-curl-interactive-text-guide/03-urls.html","/cli/mastering-curl-interactive-text-guide/04-curl-basics.html","/cli/mastering-curl-interactive-text-guide/05-http.html","/cli/mastering-curl-interactive-text-guide/","/cli/text-processing-w-gnu-awk/01-installation-and-documentation.html","/cli/text-processing-w-gnu-awk/02-awk-introduction.html","/cli/text-processing-w-gnu-awk/03-regular-expressions.html","/cli/text-processing-w-gnu-awk/04-field-separators.html","/cli/text-processing-w-gnu-awk/05-record-separators.html","/cli/text-processing-w-gnu-awk/06-in-place-file-editing.html","/cli/text-processing-w-gnu-awk/07-using-shell-variables.html","/cli/text-processing-w-gnu-awk/08-control-structures.html","/cli/text-processing-w-gnu-awk/09-built-in-functions.html","/cli/text-processing-w-gnu-awk/10-multiple-file-input.html","/cli/text-processing-w-gnu-awk/11-processing-multiple-records.html","/cli/text-processing-w-gnu-awk/12-two-file-processing.html","/cli/text-processing-w-gnu-awk/13-dealing-with-duplicates.html","/cli/text-processing-w-gnu-awk/14-awk-scripts.html","/cli/text-processing-w-gnu-awk/15-gotchas-and-tips.html","/cli/text-processing-w-gnu-awk/16-further-reading.html","/cli/text-processing-w-gnu-awk/","/cpp/","/devops/","/devops/red-hat-container-tools/","/devops/yozm/2464.html","/devops/yozm/2503.html","/devops/yozm/","/devops/freecodecamp-gitlab-ci/1.html","/devops/freecodecamp-gitlab-ci/2.html","/devops/freecodecamp-gitlab-ci/3.html","/devops/freecodecamp-gitlab-ci/4.html","/devops/freecodecamp-gitlab-ci/5.html","/devops/freecodecamp-gitlab-ci/","/devops/digitalocean-kubernetes/","/devops/digitalocean-kubernetes/2022/20221118-how-to-secure-your-site-in-kubernetes-with-cert-manager-traefik-and-let-s-encrypt.html","/devops/digitalocean-kubernetes/2022/20221216-how-to-run-serverless-workloads-with-knative-on-digitalocean-kubernetes.html","/devops/linux-aviation-howto/01-flight.html","/devops/linux-aviation-howto/02-airline.html","/devops/linux-aviation-howto/03-airport.html","/devops/linux-aviation-howto/04-simulation.html","/devops/linux-aviation-howto/05-training.html","/devops/linux-aviation-howto/06-data-sources.html","/devops/linux-aviation-howto/07-websites-and-catalogs.html","/devops/linux-aviation-howto/","/devops/linux-journey/","/devops/linux-journey/01-grasshopper/01a-getting-started.html","/devops/linux-journey/01-grasshopper/01b-command-line.html","/devops/linux-journey/01-grasshopper/01c-text-fu.html","/devops/linux-journey/01-grasshopper/01d-advanced-text-fu.html","/devops/linux-journey/01-grasshopper/01e-user-management.html","/devops/linux-journey/01-grasshopper/01f-permissions.html","/devops/linux-journey/01-grasshopper/01g-processes.html","/devops/linux-journey/01-grasshopper/01h-packages.html","/devops/linux-journey/02-journeyman/02a-devices.html","/devops/linux-journey/02-journeyman/02b-the-filesystem.html","/devops/linux-journey/02-journeyman/02c-boot-the-system.html","/devops/linux-journey/02-journeyman/02d-kernel.html","/devops/linux-journey/02-journeyman/02e-init.html","/devops/linux-journey/02-journeyman/02f-process-utilization.html","/devops/linux-journey/02-journeyman/02g-logging.html","/devops/linux-journey/03-networking-nomad/03a-network-sharing.html","/devops/linux-journey/03-networking-nomad/03b-network-basics.html","/devops/linux-journey/03-networking-nomad/03c-subnetting.html","/devops/linux-journey/03-networking-nomad/03d-routing.html","/devops/linux-journey/03-networking-nomad/03e-network-config.html","/devops/linux-journey/03-networking-nomad/03f-troubleshooting.html","/devops/linux-journey/03-networking-nomad/03g-dns.html","/devops/red-hat-container-tools/01.html","/devops/red-hat-container-tools/02.html","/devops/red-hat-container-tools/03.html","/devops/red-hat-container-tools/04.html","/devops/red-hat-container-tools/05.html","/devops/red-hat-container-tools/06.html","/devops/red-hat-container-tools/07.html","/devops/red-hat-container-tools/08.html","/devops/red-hat-containerize-your-application-w-buildah-and-podman/01.html","/devops/red-hat-containerize-your-application-w-buildah-and-podman/02.html","/devops/red-hat-containerize-your-application-w-buildah-and-podman/03.html","/devops/red-hat-containerize-your-application-w-buildah-and-podman/","/devops/art-of-aws/01.html","/devops/art-of-aws/02.html","/devops/art-of-aws/03.html","/devops/art-of-aws/04.html","/devops/art-of-aws/05.html","/devops/art-of-aws/06.html","/devops/art-of-aws/07.html","/devops/art-of-aws/08.html","/devops/art-of-aws/09.html","/devops/art-of-aws/10.html","/devops/art-of-aws/11.html","/devops/art-of-aws/12.html","/devops/art-of-aws/13.html","/devops/art-of-aws/14.html","/devops/art-of-aws/15.html","/devops/art-of-aws/16.html","/devops/art-of-aws/17.html","/devops/art-of-aws/18.html","/devops/art-of-aws/19.html","/devops/art-of-aws/20.html","/devops/art-of-aws/21.html","/devops/art-of-aws/22.html","/devops/art-of-aws/23.html","/devops/art-of-aws/24.html","/devops/art-of-aws/25.html","/devops/art-of-aws/26.html","/devops/art-of-aws/27.html","/devops/art-of-aws/28.html","/devops/art-of-aws/29.html","/devops/art-of-aws/30.html","/devops/art-of-aws/31.html","/devops/art-of-aws/32.html","/devops/art-of-aws/33.html","/devops/art-of-aws/","/devops/art-of-aws/a.html","/java/jump-to-spring-boot/01.html","/java/jump-to-spring-boot/02.html","/java/jump-to-spring-boot/02A.html","/java/jump-to-spring-boot/02B.html","/java/jump-to-spring-boot/02C.html","/java/jump-to-spring-boot/02D.html","/java/jump-to-spring-boot/02E.html","/java/jump-to-spring-boot/02F.html","/java/jump-to-spring-boot/02G.html","/java/jump-to-spring-boot/02H.html","/java/jump-to-spring-boot/02I.html","/java/jump-to-spring-boot/02J.html","/java/jump-to-spring-boot/02K.html","/java/jump-to-spring-boot/02L.html","/java/jump-to-spring-boot/02M.html","/java/jump-to-spring-boot/02N.html","/java/jump-to-spring-boot/02O.html","/java/jump-to-spring-boot/02P.html","/java/jump-to-spring-boot/03.html","/java/jump-to-spring-boot/03A.html","/java/jump-to-spring-boot/03B.html","/java/jump-to-spring-boot/03C.html","/java/jump-to-spring-boot/03D.html","/java/jump-to-spring-boot/03E.html","/java/jump-to-spring-boot/03F.html","/java/jump-to-spring-boot/03G.html","/java/jump-to-spring-boot/03H.html","/java/jump-to-spring-boot/03I.html","/java/jump-to-spring-boot/03J.html","/java/jump-to-spring-boot/03K.html","/java/jump-to-spring-boot/03L.html","/java/jump-to-spring-boot/03M.html","/java/jump-to-spring-boot/03N.html","/java/jump-to-spring-boot/03O.html","/java/jump-to-spring-boot/04.html","/java/jump-to-spring-boot/04A.html","/java/jump-to-spring-boot/04B.html","/java/jump-to-spring-boot/04C.html","/java/jump-to-spring-boot/04E.html","/java/jump-to-spring-boot/04F.html","/java/jump-to-spring-boot/04H.html","/java/jump-to-spring-boot/04I.html","/java/jump-to-spring-boot/04J.html","/java/jump-to-spring-boot/04K.html","/java/jump-to-spring-boot/04L.html","/java/jump-to-spring-boot/","/java/jump-to-spring-boot/a.html","/haskell/","/haskell/megaparsec/","/java/","/java/aloha-javafx/01.html","/java/aloha-javafx/02.html","/java/aloha-javafx/","/java/effective-java/01-creating-and-destroying-objects.html","/java/effective-java/02-methods-common-to-all-objects.html","/java/effective-java/03-classes-and-interfaces.html","/java/effective-java/04-generics.html","/java/effective-java/05-enums-and-annotations.html","/java/effective-java/06-lambda-and-stream.html","/java/effective-java/07-methods.html","/java/effective-java/08-general-programming.html","/java/effective-java/09-exceptions.html","/java/effective-java/10-concurrency.html","/java/effective-java/11-serialization.html","/java/effective-java/","/java/freecodecamp-quarkus-jpastreamer/01.html","/java/freecodecamp-quarkus-jpastreamer/02.html","/java/freecodecamp-quarkus-jpastreamer/03.html","/java/freecodecamp-quarkus-jpastreamer/04.html","/java/freecodecamp-quarkus-jpastreamer/05.html","/java/freecodecamp-quarkus-jpastreamer/","/java/java-8-in-action/1.html","/java/java-8-in-action/2-1.html","/java/java-8-in-action/2-2.html","/java/java-8-in-action/3-1.html","/java/java-8-in-action/","/java/kodeco/247-react-native-tutorial-building-android-apps-with-javascript.html","/java/kodeco/249-gradle-tutorial-for-android-getting-started.html","/java/kodeco/254-getting-started-with-android-wear-with-kotlin.html","/java/kodeco/262-dependency-injection-in-android-with-dagger-2-and-kotlin.html","/java/kodeco/272-intermediate-recyclerview-tutorial-with-kotlin.html","/java/kodeco/30067669-documenting-kotlin-code-for-android-using-kdoc-and-dokka.html","/java/kodeco/31290959-kotlin-sequences-getting-started.html","/java/kodeco/324-viewpager-tutorial-getting-started-in-kotlin.html","/java/kodeco/523-augmented-reality-in-android-with-google-s-face-api.html","/java/kodeco/853-couchbase-tutorial-for-android-getting-started.html","/java/kodeco/","/java/spring-boot-whiteship/01.html","/java/spring-boot-whiteship/02.html","/java/spring-boot-whiteship/03.html","/java/spring-boot-whiteship/04.html","/java/spring-boot-whiteship/05.html","/java/spring-boot-whiteship/06.html","/java/spring-boot-whiteship/07.html","/java/spring-boot-whiteship/","/java/yozm/2457.html","/java/yozm/2478.html","/java/yozm/2499.html","/java/yozm/","/python/","/python/finance-w-python/01.html","/python/finance-w-python/02.html","/python/finance-w-python/03.html","/python/finance-w-python/04.html","/python/finance-w-python/05.html","/python/finance-w-python/06.html","/python/finance-w-python/07.html","/python/finance-w-python/08.html","/python/finance-w-python/09.html","/python/finance-w-python/10.html","/python/finance-w-python/11.html","/python/finance-w-python/12.html","/python/finance-w-python/","/python/opencv-advanced/00.html","/python/opencv-advanced/01.html","/python/opencv-advanced/02.html","/python/opencv-advanced/","/python/rpa-excel/01.html","/python/rpa-excel/02a.html","/python/rpa-excel/02b.html","/python/rpa-excel/02c.html","/python/rpa-excel/02d.html","/python/rpa-excel/02e.html","/python/rpa-excel/02f.html","/python/rpa-excel/02g.html","/python/rpa-excel/02h.html","/python/rpa-excel/02i.html","/python/rpa-excel/03.html","/python/rpa-excel/","/ruby/","/ruby/rubyonjets-learning-content/20180818-introducing-jets-a-ruby-serverless-framework.html","/ruby/rubyonjets-learning-content/20180907-jets-tutorial-crud-app-introduction-part-1.html","/ruby/rubyonjets-learning-content/20180908-jets-tutorial-deploy-to-aws-lambda-part-2.html","/ruby/rubyonjets-learning-content/20180909-jets-tutorial-debugging-logs-part-3.html","/ruby/rubyonjets-learning-content/20180910-jets-tutorial-background-jobs-part-4.html","/ruby/rubyonjets-learning-content/20180911-jets-tutorial-iam-policies-part-5.html","/ruby/rubyonjets-learning-content/20180912-jets-tutorial-function-properties-part-6.html","/ruby/rubyonjets-learning-content/20180913-jets-tutorial-extra-environments-part-7.html","/ruby/rubyonjets-learning-content/20180926-jets-tutorial-different-environments-part-8.html","/ruby/rubyonjets-learning-content/20180927-jets-tutorial-polymorphic-support-part-9.html","/ruby/rubyonjets-learning-content/20181112-jets-tutorial-jets-delete.html","/ruby/rubyonjets-learning-content/20181212-official-aws-ruby-support-for-jets-serverless-framework.html","/ruby/rubyonjets-learning-content/20181213-jets-image-upload-carrierwave-tutorial-binary-support.html","/ruby/rubyonjets-learning-content/20190113-build-an-api-service-with-jets-ruby-serverless-framework.html","/ruby/rubyonjets-learning-content/20190114-serverless-slack-commands-with-ruby.html","/ruby/rubyonjets-learning-content/20190204-aws-lambda-function-jets-introductory-series-part-1.html","/ruby/rubyonjets-learning-content/20190205-api-gateway-jets-introductory-series-part-2.html","/ruby/rubyonjets-learning-content/20190206-cloudwatch-event-rule-jets-introductory-series-part-3.html","/ruby/rubyonjets-learning-content/20190211-hello-world-examples-jets-introductory-series-part-4.html","/ruby/rubyonjets-learning-content/","/rust/","/rust/eventhelix-rust-to-assembly/","/rust/eventhelix-rust-to-assembly/assembly-code-generated-when-self-is-passed-by-value-reference-or-as-a-smart-pointer.html","/rust/eventhelix-rust-to-assembly/mapping-arrays-tuples-box-and-option-to-assembly.html","/rust/eventhelix-rust-to-assembly/rust-enum-and-match-representation-in-assembly.html","/rust/eventhelix-rust-to-assembly/rust-to-assembly-vector-iteration.html","/rust/freecodecamp-rust-by-practice/01-elegant-code-base.html","/rust/freecodecamp-rust-by-practice/02-variables.html","/rust/freecodecamp-rust-by-practice/03-basic-types.html","/rust/freecodecamp-rust-by-practice/04-ownership.html","/rust/freecodecamp-rust-by-practice/05-compound-types.html","/rust/freecodecamp-rust-by-practice/06-flow-contro.html","/rust/freecodecamp-rust-by-practice/07-pattern-match.html","/rust/freecodecamp-rust-by-practice/08-method.html","/rust/freecodecamp-rust-by-practice/09-generics-traits.html","/rust/freecodecamp-rust-by-practice/10-collections.html","/rust/freecodecamp-rust-by-practice/11-type-conversions.html","/rust/freecodecamp-rust-by-practice/12-result-panic.html","/rust/freecodecamp-rust-by-practice/13-crate-module.html","/rust/freecodecamp-rust-by-practice/14-comments-docs.html","/rust/freecodecamp-rust-by-practice/15-formatted-output.html","/rust/freecodecamp-rust-by-practice/16-lifetime.html","/rust/freecodecamp-rust-by-practice/17-functional-programing.html","/rust/freecodecamp-rust-by-practice/18-newtype-sized.html","/rust/freecodecamp-rust-by-practice/19-smart-pointers.html","/rust/freecodecamp-rust-by-practice/20-weak.html","/rust/freecodecamp-rust-by-practice/21-self-referential.html","/rust/freecodecamp-rust-by-practice/22-threads.html","/rust/freecodecamp-rust-by-practice/23-global-variables.html","/rust/freecodecamp-rust-by-practice/24-errors.html","/rust/freecodecamp-rust-by-practice/25-unsafe.html","/rust/freecodecamp-rust-by-practice/26-macro.html","/rust/freecodecamp-rust-by-practice/27-tests.html","/rust/freecodecamp-rust-by-practice/28-async.html","/rust/freecodecamp-rust-by-practice/29-std.html","/rust/freecodecamp-rust-by-practice/30-fight-compiler.html","/rust/freecodecamp-rust-by-practice/","/rust/wasm-by-example/01-concepts.html","/rust/wasm-by-example/02-applying-the-concepts.html","/rust/wasm-by-example/03-ecosystem-tools-and-language-features.html","/rust/wasm-by-example/04-webassembly-outside-of-the-browser.html","/rust/wasm-by-example/","/swift/","/swift/100-days-of-swift/01.html","/swift/100-days-of-swift/02.html","/swift/100-days-of-swift/03.html","/swift/100-days-of-swift/04.html","/swift/100-days-of-swift/05.html","/swift/100-days-of-swift/06.html","/swift/100-days-of-swift/07.html","/swift/100-days-of-swift/08.html","/swift/100-days-of-swift/09.html","/swift/100-days-of-swift/10.html","/swift/100-days-of-swift/100.html","/swift/100-days-of-swift/101.html","/swift/100-days-of-swift/11.html","/swift/100-days-of-swift/12.html","/swift/100-days-of-swift/13.html","/swift/100-days-of-swift/14.html","/swift/100-days-of-swift/15.html","/swift/100-days-of-swift/16.html","/swift/100-days-of-swift/17.html","/swift/100-days-of-swift/18.html","/swift/100-days-of-swift/19.html","/swift/100-days-of-swift/20.html","/swift/100-days-of-swift/21.html","/swift/100-days-of-swift/22.html","/swift/100-days-of-swift/23.html","/swift/100-days-of-swift/24.html","/swift/100-days-of-swift/25.html","/swift/100-days-of-swift/26.html","/swift/100-days-of-swift/27.html","/swift/100-days-of-swift/28.html","/swift/100-days-of-swift/29.html","/swift/100-days-of-swift/30.html","/swift/100-days-of-swift/31.html","/swift/100-days-of-swift/32.html","/swift/100-days-of-swift/33.html","/swift/100-days-of-swift/34.html","/swift/100-days-of-swift/35.html","/swift/100-days-of-swift/36.html","/swift/100-days-of-swift/37.html","/swift/100-days-of-swift/38.html","/swift/100-days-of-swift/39.html","/swift/100-days-of-swift/40.html","/swift/100-days-of-swift/41.html","/swift/100-days-of-swift/42.html","/swift/100-days-of-swift/43.html","/swift/100-days-of-swift/44.html","/swift/100-days-of-swift/45.html","/swift/100-days-of-swift/46.html","/swift/100-days-of-swift/47.html","/swift/100-days-of-swift/48.html","/swift/100-days-of-swift/49.html","/swift/100-days-of-swift/50.html","/swift/100-days-of-swift/51.html","/swift/100-days-of-swift/52.html","/swift/100-days-of-swift/53.html","/swift/100-days-of-swift/54.html","/swift/100-days-of-swift/55.html","/swift/100-days-of-swift/56.html","/swift/100-days-of-swift/57.html","/swift/100-days-of-swift/58.html","/swift/100-days-of-swift/59.html","/swift/100-days-of-swift/60.html","/swift/100-days-of-swift/61.html","/swift/100-days-of-swift/62.html","/swift/100-days-of-swift/63.html","/swift/100-days-of-swift/64.html","/swift/100-days-of-swift/65.html","/swift/100-days-of-swift/66.html","/swift/100-days-of-swift/67.html","/swift/100-days-of-swift/68.html","/swift/100-days-of-swift/69.html","/swift/100-days-of-swift/70.html","/swift/100-days-of-swift/71.html","/swift/100-days-of-swift/72.html","/swift/100-days-of-swift/73.html","/swift/100-days-of-swift/74.html","/swift/100-days-of-swift/75.html","/swift/100-days-of-swift/76.html","/swift/100-days-of-swift/77.html","/swift/100-days-of-swift/78.html","/swift/100-days-of-swift/79.html","/swift/100-days-of-swift/80.html","/swift/100-days-of-swift/81.html","/swift/100-days-of-swift/82.html","/swift/100-days-of-swift/83.html","/swift/100-days-of-swift/84.html","/swift/100-days-of-swift/85.html","/swift/100-days-of-swift/86.html","/swift/100-days-of-swift/87.html","/swift/100-days-of-swift/88.html","/swift/100-days-of-swift/89.html","/swift/100-days-of-swift/90.html","/swift/100-days-of-swift/91.html","/swift/100-days-of-swift/92.html","/swift/100-days-of-swift/93.html","/swift/100-days-of-swift/94.html","/swift/100-days-of-swift/95.html","/swift/100-days-of-swift/96.html","/swift/100-days-of-swift/97.html","/swift/100-days-of-swift/98.html","/swift/100-days-of-swift/99.html","/swift/100-days-of-swift/","/swift/100-days-of-swiftui/01.html","/swift/100-days-of-swiftui/02.html","/swift/100-days-of-swiftui/03.html","/swift/100-days-of-swiftui/04.html","/swift/100-days-of-swiftui/05.html","/swift/100-days-of-swiftui/06.html","/swift/100-days-of-swiftui/07.html","/swift/100-days-of-swiftui/08.html","/swift/100-days-of-swiftui/09.html","/swift/100-days-of-swiftui/10.html","/swift/100-days-of-swiftui/100.html","/swift/100-days-of-swiftui/101.html","/swift/100-days-of-swiftui/11.html","/swift/100-days-of-swiftui/12.html","/swift/100-days-of-swiftui/13.html","/swift/100-days-of-swiftui/14.html","/swift/100-days-of-swiftui/15.html","/swift/100-days-of-swiftui/16.html","/swift/100-days-of-swiftui/17.html","/swift/100-days-of-swiftui/18.html","/swift/100-days-of-swiftui/19.html","/swift/100-days-of-swiftui/20.html","/swift/100-days-of-swiftui/21.html","/swift/100-days-of-swiftui/22.html","/swift/100-days-of-swiftui/23.html","/swift/100-days-of-swiftui/24.html","/swift/100-days-of-swiftui/25.html","/swift/100-days-of-swiftui/26.html","/swift/100-days-of-swiftui/27.html","/swift/100-days-of-swiftui/28.html","/swift/100-days-of-swiftui/29.html","/swift/100-days-of-swiftui/30.html","/swift/100-days-of-swiftui/31.html","/swift/100-days-of-swiftui/32.html","/swift/100-days-of-swiftui/33.html","/swift/100-days-of-swiftui/34.html","/swift/100-days-of-swiftui/35.html","/swift/100-days-of-swiftui/36.html","/swift/100-days-of-swiftui/37.html","/swift/100-days-of-swiftui/38.html","/swift/100-days-of-swiftui/39.html","/swift/100-days-of-swiftui/40.html","/swift/100-days-of-swiftui/41.html","/swift/100-days-of-swiftui/42.html","/swift/100-days-of-swiftui/43.html","/swift/100-days-of-swiftui/44.html","/swift/100-days-of-swiftui/45.html","/swift/100-days-of-swiftui/46.html","/swift/100-days-of-swiftui/47.html","/swift/100-days-of-swiftui/48.html","/swift/100-days-of-swiftui/49.html","/swift/100-days-of-swiftui/50.html","/swift/100-days-of-swiftui/51.html","/swift/100-days-of-swiftui/52.html","/swift/100-days-of-swiftui/53.html","/swift/100-days-of-swiftui/54.html","/swift/100-days-of-swiftui/55.html","/swift/100-days-of-swiftui/56.html","/swift/100-days-of-swiftui/57.html","/swift/100-days-of-swiftui/58.html","/swift/100-days-of-swiftui/59.html","/swift/100-days-of-swiftui/60.html","/swift/100-days-of-swiftui/61.html","/swift/100-days-of-swiftui/62.html","/swift/100-days-of-swiftui/63.html","/swift/100-days-of-swiftui/64.html","/swift/100-days-of-swiftui/65.html","/swift/100-days-of-swiftui/66.html","/swift/100-days-of-swiftui/67.html","/swift/100-days-of-swiftui/68.html","/swift/100-days-of-swiftui/69.html","/swift/100-days-of-swiftui/70.html","/swift/100-days-of-swiftui/71.html","/swift/100-days-of-swiftui/72.html","/swift/100-days-of-swiftui/73.html","/swift/100-days-of-swiftui/74.html","/swift/100-days-of-swiftui/75.html","/swift/100-days-of-swiftui/76.html","/swift/100-days-of-swiftui/77.html","/swift/100-days-of-swiftui/78.html","/swift/100-days-of-swiftui/79.html","/swift/100-days-of-swiftui/80.html","/swift/100-days-of-swiftui/81.html","/swift/100-days-of-swiftui/82.html","/swift/100-days-of-swiftui/83.html","/swift/100-days-of-swiftui/84.html","/swift/100-days-of-swiftui/85.html","/swift/100-days-of-swiftui/86.html","/swift/100-days-of-swiftui/87.html","/swift/100-days-of-swiftui/88.html","/swift/100-days-of-swiftui/89.html","/swift/100-days-of-swiftui/90.html","/swift/100-days-of-swiftui/91.html","/swift/100-days-of-swiftui/92.html","/swift/100-days-of-swiftui/93.html","/swift/100-days-of-swiftui/94.html","/swift/100-days-of-swiftui/95.html","/swift/100-days-of-swiftui/96.html","/swift/100-days-of-swiftui/97.html","/swift/100-days-of-swiftui/98.html","/swift/100-days-of-swiftui/99.html","/swift/100-days-of-swiftui/","/swift/kodeco/6334294-my-app-crashed-now-what.html","/swift/kodeco/6398124-swiftui-tutorial-for-ios-creating-charts.html","/swift/kodeco/6587213-alamofire-5-tutorial-for-ios-getting-started.html","/swift/kodeco/6620276-sqlite-with-swift-tutorial-getting-started.html","/swift/kodeco/6742901-protocol-oriented-programming-tutorial-in-swift-5-1-getting-started.html","/swift/kodeco/6747815-uigesturerecognizer-tutorial-getting-started.html","/swift/kodeco/6827616-ios-accessibility-getting-started.html","/swift/kodeco/7076593-cocoapods-tutorial-for-swift-getting-started.html","/swift/kodeco/7181017-unsafe-swift-using-pointers-and-interacting-with-c.html","/swift/kodeco/","/swift/learn-essential-swift-in-one-hour/","/swift/swiftui-by-example/13-navigation.html","/swift/swiftui-by-example/14-alerts-and-menus.html","/swift/swiftui-by-example/15-presenting-views.html","/swift/swiftui-by-example/16-transforming-views.html","/swift/swiftui-by-example/17-drawing.html","/swift/swiftui-by-example/","/swift/swiftui-by-example/00-introduction/answering-the-big-question-should-you-learn-swiftui-uikit-or-both.html","/swift/swiftui-by-example/00-introduction/dedication.html","/swift/swiftui-by-example/00-introduction/frequently-asked-questions-about-swiftui.html","/swift/swiftui-by-example/00-introduction/how-to-follow-this-quick-start-guide.html","/swift/swiftui-by-example/00-introduction/migrating-from-uikit-to-swiftui.html","/swift/swiftui-by-example/00-introduction/swiftui-vs-interface-builder-and-storyboards.html","/swift/swiftui-by-example/00-introduction/what-is-swiftui.html","/swift/swiftui-by-example/00-introduction/whats-in-the-basic-template.html","/swift/swiftui-by-example/01-building-a-complete-project/adding-items-to-an-order-with-environmentobject.html","/swift/swiftui-by-example/01-building-a-complete-project/adding-swipe-to-delete-and-editbutton.html","/swift/swiftui-by-example/01-building-a-complete-project/adding-tabview-and-tabitem.html","/swift/swiftui-by-example/01-building-a-complete-project/bindings-and-forms.html","/swift/swiftui-by-example/01-building-a-complete-project/building-a-menu-using-list.html","/swift/swiftui-by-example/01-building-a-complete-project/composing-views-to-create-a-list-row.html","/swift/swiftui-by-example/01-building-a-complete-project/displaying-a-detail-screen-with-navigationlink.html","/swift/swiftui-by-example/01-building-a-complete-project/formatting-interpolated-strings-in-swiftui.html","/swift/swiftui-by-example/01-building-a-complete-project/observable-objects-environment-objects-and-published.html","/swift/swiftui-by-example/01-building-a-complete-project/polishing-designs-with-fonts-and-colors.html","/swift/swiftui-by-example/01-building-a-complete-project/presenting-an-alert.html","/swift/swiftui-by-example/01-building-a-complete-project/swiftui-tutorial-building-a-complete-project.html","/swift/swiftui-by-example/01-building-a-complete-project/two-way-bindings-in-swiftui.html","/swift/swiftui-by-example/01-building-a-complete-project/wrap-up-our-swiftui-project-is-complete.html","/swift/swiftui-by-example/02-working-with-static-text/how-to-add-advanced-text-styling-using-attributedstring.html","/swift/swiftui-by-example/02-working-with-static-text/how-to-add-spacing-between-letters-in-text.html","/swift/swiftui-by-example/02-working-with-static-text/how-to-adjust-text-alignment-using-multilinetextalignment.html","/swift/swiftui-by-example/02-working-with-static-text/how-to-create-static-labels-with-a-text-view.html","/swift/swiftui-by-example/02-working-with-static-text/how-to-customize-the-way-links-are-opened.html","/swift/swiftui-by-example/02-working-with-static-text/how-to-format-dates-inside-text-views.html","/swift/swiftui-by-example/02-working-with-static-text/how-to-format-text-inside-text-views.html","/swift/swiftui-by-example/02-working-with-static-text/how-to-let-users-select-text.html","/swift/swiftui-by-example/02-working-with-static-text/how-to-make-textfield-uppercase-or-lowercase-using-textcase.html","/swift/swiftui-by-example/02-working-with-static-text/how-to-mark-content-as-a-placeholder-using-redacted.html","/swift/swiftui-by-example/02-working-with-static-text/how-to-mark-content-as-private-using-privacysensitive.html","/swift/swiftui-by-example/02-working-with-static-text/how-to-render-markdown-content-in-text.html","/swift/swiftui-by-example/02-working-with-static-text/how-to-show-text-and-an-icon-side-by-side-using-label.html","/swift/swiftui-by-example/02-working-with-static-text/how-to-style-text-views-with-fonts-colors-line-spacing-and-more.html","/swift/swiftui-by-example/03-images-shapes-and-media/how-to-adjust-the-way-an-image-is-fitted-to-its-space.html","/swift/swiftui-by-example/03-images-shapes-and-media/how-to-display-solid-shapes.html","/swift/swiftui-by-example/03-images-shapes-and-media/how-to-draw-images-using-image-views.html","/swift/swiftui-by-example/03-images-shapes-and-media/how-to-draw-part-of-a-solid-shape-using-trim.html","/swift/swiftui-by-example/03-images-shapes-and-media/how-to-dynamically-adjust-the-color-of-an-sf-symbol.html","/swift/swiftui-by-example/03-images-shapes-and-media/how-to-fill-and-stroke-shapes-at-the-same-time.html","/swift/swiftui-by-example/03-images-shapes-and-media/how-to-get-custom-colors-and-transparency-with-sf-symbols.html","/swift/swiftui-by-example/03-images-shapes-and-media/how-to-integrate-spritekit-using-spriteview.html","/swift/swiftui-by-example/03-images-shapes-and-media/how-to-let-users-import-videos-using-photospicker.html","/swift/swiftui-by-example/03-images-shapes-and-media/how-to-let-users-select-pictures-using-photospicker.html","/swift/swiftui-by-example/03-images-shapes-and-media/how-to-load-a-remote-image-from-a-url.html","/swift/swiftui-by-example/03-images-shapes-and-media/how-to-play-movies-with-videoplayer.html","/swift/swiftui-by-example/03-images-shapes-and-media/how-to-render-a-gradient.html","/swift/swiftui-by-example/03-images-shapes-and-media/how-to-render-images-using-sf-symbols.html","/swift/swiftui-by-example/03-images-shapes-and-media/how-to-tile-an-image.html","/swift/swiftui-by-example/03-images-shapes-and-media/how-to-use-images-and-other-views-as-a-backgrounds.html","/swift/swiftui-by-example/03-images-shapes-and-media/when-should-you-use-containerrelativeshape.html","/swift/swiftui-by-example/04-view-layout/how-to-control-layout-priority-using-layoutpriority.html","/swift/swiftui-by-example/04-view-layout/how-to-control-spacing-around-individual-views-using-padding.html","/swift/swiftui-by-example/04-view-layout/how-to-create-a-custom-layout-using-the-layout-protocol.html","/swift/swiftui-by-example/04-view-layout/how-to-create-an-adaptive-layout-with-viewthatfits.html","/swift/swiftui-by-example/04-view-layout/how-to-create-views-in-a-loop-using-foreach.html","/swift/swiftui-by-example/04-view-layout/how-to-dynamically-change-between-vstack-and-hstack.html","/swift/swiftui-by-example/04-view-layout/how-to-give-a-view-a-custom-frame.html","/swift/swiftui-by-example/04-view-layout/how-to-hide-the-home-indicator-and-other-system-ui.html","/swift/swiftui-by-example/04-view-layout/how-to-inset-the-safe-area-with-custom-content.html","/swift/swiftui-by-example/04-view-layout/how-to-make-two-views-the-same-width-or-height.html","/swift/swiftui-by-example/04-view-layout/how-to-place-content-outside-the-safe-area.html","/swift/swiftui-by-example/04-view-layout/how-to-provide-relative-sizes-using-geometryreader.html","/swift/swiftui-by-example/04-view-layout/how-to-provide-visual-structure-using-foreground-styles.html","/swift/swiftui-by-example/04-view-layout/how-to-return-different-view-types.html","/swift/swiftui-by-example/04-view-layout/how-to-stop-system-gestures-from-interfering-with-your-own.html","/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-add-horizontal-and-vertical-scrolling-using-scrollview.html","/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-automatically-switch-between-hstack-and-vstack-based-on-size-class.html","/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-change-the-order-of-view-layering-using-z-index.html","/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-create-3d-effects-like-cover-flow-using-scrollview-and-geometryreader.html","/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-create-different-layouts-using-size-classes.html","/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-create-multi-column-lists-using-table.html","/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-create-stacks-using-vstack-and-hstack.html","/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-customize-stack-layouts-with-alignment-and-spacing.html","/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-dismiss-the-keyboard-when-the-user-scrolls.html","/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-force-views-to-one-side-inside-a-stack-using-spacer.html","/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-hide-the-scroll-indicators-in-scrollview-list-and-more.html","/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-layer-views-on-top-of-each-other-using-zstack.html","/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-lazy-load-views-using-lazyvstack-and-lazyhstack.html","/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-make-a-fixed-size-spacer.html","/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-make-a-scroll-view-move-to-a-location-using-scrollviewreader.html","/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-position-views-in-a-fixed-grid.html","/swift/swiftui-by-example/05-stacks-grids-scrollviews/how-to-position-views-in-a-grid-using-lazyvgrid-and-lazyhgrid.html","/swift/swiftui-by-example/06-user-interface-controls/how-to-add-a-border-to-a-textfield.html","/swift/swiftui-by-example/06-user-interface-controls/how-to-add-a-placeholder-to-a-textfield.html","/swift/swiftui-by-example/06-user-interface-controls/how-to-create-a-date-picker-and-read-values-from-it.html","/swift/swiftui-by-example/06-user-interface-controls/how-to-create-a-picker-and-read-values-from-it.html","/swift/swiftui-by-example/06-user-interface-controls/how-to-create-a-segmented-control-and-read-values-from-it.html","/swift/swiftui-by-example/06-user-interface-controls/how-to-create-a-slider-and-read-values-from-it.html","/swift/swiftui-by-example/06-user-interface-controls/how-to-create-a-stepper-and-read-values-from-it.html","/swift/swiftui-by-example/06-user-interface-controls/how-to-create-a-tappable-button.html","/swift/swiftui-by-example/06-user-interface-controls/how-to-create-a-toggle-switch.html","/swift/swiftui-by-example/06-user-interface-controls/how-to-create-multi-line-editable-text-with-texteditor.html","/swift/swiftui-by-example/06-user-interface-controls/how-to-create-secure-text-fields-using-securefield.html","/swift/swiftui-by-example/06-user-interface-controls/how-to-customize-the-submit-button-for-textfield-securefield-and-texteditor.html","/swift/swiftui-by-example/06-user-interface-controls/how-to-disable-autocorrect-in-a-textfield.html","/swift/swiftui-by-example/06-user-interface-controls/how-to-disable-the-overlay-color-for-images-inside-button-and-navigationlink.html","/swift/swiftui-by-example/06-user-interface-controls/how-to-dismiss-the-keyboard-for-a-textfield.html","/swift/swiftui-by-example/06-user-interface-controls/how-to-format-a-textfield-for-numbers.html","/swift/swiftui-by-example/06-user-interface-controls/how-to-get-bordered-buttons-that-stand-out.html","/swift/swiftui-by-example/06-user-interface-controls/how-to-group-views-together-with-controlgroup.html","/swift/swiftui-by-example/06-user-interface-controls/how-to-hide-the-label-of-a-picker-stepper-toggle-and-more-using-labelshidden.html","/swift/swiftui-by-example/06-user-interface-controls/how-to-let-the-user-select-multiple-dates.html","/swift/swiftui-by-example/06-user-interface-controls/how-to-let-users-select-a-color-with-colorpicker.html","/swift/swiftui-by-example/06-user-interface-controls/how-to-make-a-textfield-expand-vertically-as-the-user-types.html","/swift/swiftui-by-example/06-user-interface-controls/how-to-make-a-textfield-or-texteditor-have-default-focus.html","/swift/swiftui-by-example/06-user-interface-controls/how-to-open-web-links-in-safari.html","/swift/swiftui-by-example/06-user-interface-controls/how-to-read-text-from-a-textfield.html","/swift/swiftui-by-example/06-user-interface-controls/how-to-show-a-map-view.html","/swift/swiftui-by-example/06-user-interface-controls/how-to-show-annotations-in-a-map-view.html","/swift/swiftui-by-example/06-user-interface-controls/how-to-show-indeterminate-progress-using-progressview.html","/swift/swiftui-by-example/06-user-interface-controls/how-to-show-progress-on-a-task-using-progressview.html","/swift/swiftui-by-example/06-user-interface-controls/how-to-take-action-when-the-user-submits-a-textfield.html","/swift/swiftui-by-example/06-user-interface-controls/working-with-state.html","/swift/swiftui-by-example/07-responding-to-events/how-to-add-a-toolbar-to-the-keyboard.html","/swift/swiftui-by-example/07-responding-to-events/how-to-add-an-appdelegate-to-a-swiftui-app.html","/swift/swiftui-by-example/07-responding-to-events/how-to-add-keyboard-shortcuts-using-keyboardshortcut.html","/swift/swiftui-by-example/07-responding-to-events/how-to-control-which-view-is-shown-when-your-app-launches.html","/swift/swiftui-by-example/07-responding-to-events/how-to-detect-device-rotation.html","/swift/swiftui-by-example/07-responding-to-events/how-to-detect-when-your-app-moves-to-the-background-or-foreground-with-scenephase.html","/swift/swiftui-by-example/07-responding-to-events/how-to-let-the-user-paste-data-into-your-app.html","/swift/swiftui-by-example/07-responding-to-events/how-to-let-users-find-and-replace-text.html","/swift/swiftui-by-example/07-responding-to-events/how-to-let-users-share-content-using-the-system-share-sheet.html","/swift/swiftui-by-example/07-responding-to-events/how-to-respond-to-view-lifecycle-events-onappear-and-ondisappear.html","/swift/swiftui-by-example/07-responding-to-events/how-to-run-an-asynchronous-task-when-a-view-is-shown.html","/swift/swiftui-by-example/07-responding-to-events/how-to-run-code-when-your-app-launches.html","/swift/swiftui-by-example/07-responding-to-events/how-to-support-drag-and-drop-in-swiftui.html","/swift/swiftui-by-example/08-taps-and-gestures/how-to-add-a-gesture-recognizer-to-a-view.md.html","/swift/swiftui-by-example/08-taps-and-gestures/how-to-control-the-tappable-area-of-a-view-using-contentshape.html","/swift/swiftui-by-example/08-taps-and-gestures/how-to-create-gesture-chains-using-sequencedbefore.html","/swift/swiftui-by-example/08-taps-and-gestures/how-to-detect-shake-gestures.html","/swift/swiftui-by-example/08-taps-and-gestures/how-to-detect-the-location-of-a-tap-inside-a-view.html","/swift/swiftui-by-example/08-taps-and-gestures/how-to-detect-the-user-hovering-over-a-view.html","/swift/swiftui-by-example/08-taps-and-gestures/how-to-disable-taps-for-a-view-using-allowshittesting.html","/swift/swiftui-by-example/08-taps-and-gestures/how-to-force-one-gesture-to-recognize-before-another-using-highprioritygesture.html","/swift/swiftui-by-example/08-taps-and-gestures/how-to-make-two-gestures-recognize-at-the-same-time-using-simultaneousgesture.html","/swift/swiftui-by-example/08-taps-and-gestures/how-to-read-tap-and-double-tap-gestures.html","/swift/swiftui-by-example/09-advanced-state/how-to-create-constant-bindings.html","/swift/swiftui-by-example/09-advanced-state/how-to-create-custom-bindings.html","/swift/swiftui-by-example/09-advanced-state/how-to-run-some-code-when-state-changes-using-onchange.html","/swift/swiftui-by-example/09-advanced-state/how-to-send-state-updates-manually-using-objectwillchange.html","/swift/swiftui-by-example/09-advanced-state/how-to-show-different-images-and-other-views-in-light-or-dark-mode.html","/swift/swiftui-by-example/09-advanced-state/how-to-use-a-timer-with-swiftui.html","/swift/swiftui-by-example/09-advanced-state/how-to-use-environmentobject-to-share-data-between-views.html","/swift/swiftui-by-example/09-advanced-state/how-to-use-observedobject-to-manage-state-from-external-objects.html","/swift/swiftui-by-example/09-advanced-state/how-to-use-stateobject-to-create-and-monitor-external-objects.html","/swift/swiftui-by-example/09-advanced-state/whats-the-difference-between-observedobject-state-and-environmentobject.html","/swift/swiftui-by-example/10-lists/10-lists.html","/swift/swiftui-by-example/11-forms/11-forms.html","/swift/swiftui-by-example/12-containers/12-containers.html","/swift/shuokai-objc/01.html","/swift/shuokai-objc/02.html","/swift/shuokai-objc/03.html","/swift/shuokai-objc/04.html","/swift/shuokai-objc/05.html","/swift/shuokai-objc/06.html","/swift/shuokai-objc/07.html","/swift/shuokai-objc/08.html","/swift/shuokai-objc/09.html","/swift/shuokai-objc/10.html","/swift/shuokai-objc/11.html","/swift/shuokai-objc/12.html","/swift/shuokai-objc/13.html","/swift/shuokai-objc/15.html","/swift/shuokai-objc/16.html","/swift/shuokai-objc/17.html","/swift/shuokai-objc/18.html","/swift/shuokai-objc/19.html","/swift/shuokai-objc/20.html","/swift/shuokai-objc/21.html","/swift/shuokai-objc/","/cpp/algorithms-for-competitive-programming/","/cpp/nvidia-dli_s-ac-04/","/cpp/nvidia-dli_s-ac-07/","/cpp/nvidia-dli_s-ac-08/","/cpp/nvidia-dli_s-ac-09/","/cpp/algorithms-for-competitive-programming/01-algebra/01A.html","/cpp/algorithms-for-competitive-programming/01-algebra/01B.html","/cpp/algorithms-for-competitive-programming/01-algebra/01C.html","/cpp/algorithms-for-competitive-programming/01-algebra/01D.html","/cpp/algorithms-for-competitive-programming/01-algebra/01E.html","/cpp/algorithms-for-competitive-programming/01-algebra/01F.html","/cpp/algorithms-for-competitive-programming/02-data-structures/02A.html","/cpp/algorithms-for-competitive-programming/02-data-structures/02B.html","/cpp/algorithms-for-competitive-programming/02-data-structures/02C.html","/cpp/algorithms-for-competitive-programming/03-dynamic-programming/03A.html","/cpp/algorithms-for-competitive-programming/03-dynamic-programming/03B.html","/cpp/algorithms-for-competitive-programming/03-dynamic-programming/03C.html","/cpp/algorithms-for-competitive-programming/04-string-processing/04A.html","/cpp/algorithms-for-competitive-programming/04-string-processing/04B.html","/cpp/algorithms-for-competitive-programming/04-string-processing/04C.html","/cpp/algorithms-for-competitive-programming/05-linear-algebra/05A.html","/cpp/algorithms-for-competitive-programming/06-combinatorics/06A.html","/cpp/algorithms-for-competitive-programming/06-combinatorics/06B.html","/cpp/algorithms-for-competitive-programming/06-combinatorics/06C.html","/cpp/algorithms-for-competitive-programming/07-numerical-methods/07A.html","/cpp/algorithms-for-competitive-programming/07-numerical-methods/07B.html","/cpp/algorithms-for-competitive-programming/08-geometry/08A.html","/cpp/algorithms-for-competitive-programming/08-geometry/08B.html","/cpp/algorithms-for-competitive-programming/08-geometry/08C.html","/cpp/algorithms-for-competitive-programming/08-geometry/08D.html","/cpp/algorithms-for-competitive-programming/08-geometry/08E.html","/cpp/algorithms-for-competitive-programming/08-geometry/08F.html","/cpp/algorithms-for-competitive-programming/09-graphs/09A.html","/cpp/algorithms-for-competitive-programming/09-graphs/09B.html","/cpp/algorithms-for-competitive-programming/09-graphs/09C.html","/cpp/algorithms-for-competitive-programming/09-graphs/09D.html","/cpp/algorithms-for-competitive-programming/09-graphs/09E.html","/cpp/algorithms-for-competitive-programming/09-graphs/09F.html","/cpp/algorithms-for-competitive-programming/09-graphs/09G.html","/cpp/algorithms-for-competitive-programming/09-graphs/09H.html","/cpp/algorithms-for-competitive-programming/09-graphs/09I.html","/cpp/algorithms-for-competitive-programming/09-graphs/09J.html","/cpp/algorithms-for-competitive-programming/10-misc/10A.html","/cpp/algorithms-for-competitive-programming/10-misc/10B.html","/cpp/algorithms-for-competitive-programming/10-misc/10C.html","/cpp/algorithms-for-competitive-programming/10-misc/10D.html","/devops/digital-forensics-lab/01.html","/devops/digital-forensics-lab/02.html","/devops/digital-forensics-lab/03.html","/devops/digital-forensics-lab/04.html","/devops/digital-forensics-lab/05.html","/devops/digital-forensics-lab/06.html","/devops/digital-forensics-lab/07.html","/devops/digital-forensics-lab/08.html","/devops/digital-forensics-lab/09.html","/devops/digital-forensics-lab/10.html","/devops/digital-forensics-lab/","/haskell/megaparsec/01.html","/haskell/megaparsec/02.html","/haskell/megaparsec/03.html","/haskell/megaparsec/04.html","/haskell/megaparsec/05.html","/haskell/megaparsec/06.html","/haskell/megaparsec/07.html","/haskell/megaparsec/08.html","/haskell/megaparsec/09.html","/haskell/megaparsec/10.html","/haskell/megaparsec/11.html","/haskell/megaparsec/12.html","/haskell/megaparsec/13.html","/haskell/megaparsec/14.html","/haskell/megaparsec/15.html","/haskell/megaparsec/16.html","/haskell/megaparsec/17.html","/haskell/megaparsec/18.html","/haskell/template-haskell/01.html","/haskell/template-haskell/02.html","/haskell/template-haskell/03.html","/haskell/template-haskell/04.html","/haskell/template-haskell/05.html","/haskell/template-haskell/06.html","/haskell/template-haskell/07.html","/haskell/template-haskell/08.html","/haskell/template-haskell/09.html","/haskell/template-haskell/10.html","/haskell/template-haskell/11.html","/haskell/template-haskell/12.html","/haskell/template-haskell/13.html","/haskell/template-haskell/14.html","/haskell/template-haskell/15.html","/haskell/template-haskell/","/java/jump-to-spring-boot/04D.html","/java/jump-to-spring-boot/04G.html","/js/eloquent-javascript/","/js/learn-ts/","/js/yozm/2466.html","/js/yozm/2467.html","/js/yozm/2479.html","/js/yozm/2483.html","/js/yozm/2493.html","/js/yozm/2504.html","/js/yozm/2505.html","/js/yozm/2511.html","/js/yozm/2512.html","/js/yozm/","/js/learn-ts/advanced/01.html","/js/learn-ts/advanced/02.html","/js/learn-ts/advanced/03.html","/js/learn-ts/advanced/04.html","/js/learn-ts/advanced/05.html","/js/learn-ts/advanced/06.html","/js/learn-ts/advanced/07.html","/js/learn-ts/advanced/08.html","/js/learn-ts/advanced/09.html","/js/learn-ts/advanced/10.html","/js/learn-ts/advanced/11.html","/js/learn-ts/advanced/12.html","/js/learn-ts/advanced/13.html","/js/learn-ts/advanced/14.html","/js/learn-ts/advanced/15.html","/js/learn-ts/advanced/16.html","/js/learn-ts/advanced/17.html","/js/learn-ts/advanced/18.html","/misc/colt-steele-mastering-css-grid/01-css-grid-basics.html","/misc/colt-steele-mastering-css-grid/02-units-and-utilities.html","/misc/colt-steele-mastering-css-grid/03-positioning-elements-by-lines.html","/misc/colt-steele-mastering-css-grid/04-grid-areas.html","/misc/colt-steele-mastering-css-grid/05-the-implicit-grid.html","/misc/colt-steele-mastering-css-grid/06-creating-responsive-grids.html","/misc/colt-steele-mastering-css-grid/07-building-an-example-layout.html","/misc/colt-steele-mastering-css-grid/","/misc/llm-generative-ai-for-beginners/00-course-setup.html","/misc/llm-generative-ai-for-beginners/01-introduction-to-genai.html","/misc/llm-generative-ai-for-beginners/02-exploring-and-comparing-different-llms.html","/misc/llm-generative-ai-for-beginners/","/misc/oracle-sql-db-tuning/01a.html","/misc/oracle-sql-db-tuning/01b.html","/misc/oracle-sql-db-tuning/01c.html","/misc/oracle-sql-db-tuning/01d.html","/misc/oracle-sql-db-tuning/02a.html","/misc/oracle-sql-db-tuning/03a.html","/misc/oracle-sql-db-tuning/03b.html","/misc/oracle-sql-db-tuning/03c.html","/misc/oracle-sql-db-tuning/03d.html","/misc/oracle-sql-db-tuning/","/php/three-min-summary/08-final-note.html","/php/three-min-summary/","/php/three-min-summary/01-basics/01A.html","/php/three-min-summary/01-basics/01B.html","/php/three-min-summary/01-basics/01C.html","/php/three-min-summary/01-basics/01D.html","/php/three-min-summary/01-basics/01E.html","/php/three-min-summary/01-basics/01F.html","/php/three-min-summary/01-basics/01G.html","/php/three-min-summary/01-basics/01H.html","/php/three-min-summary/01-basics/01I.html","/php/three-min-summary/01-basics/01J.html","/php/three-min-summary/01-basics/01K.html","/php/three-min-summary/01-basics/01L.html","/php/three-min-summary/02-web/02A.html","/php/three-min-summary/02-web/02B.html","/php/three-min-summary/02-web/02C.html","/php/three-min-summary/02-web/02D.html","/php/three-min-summary/02-web/02E.html","/php/three-min-summary/02-web/02F.html","/php/three-min-summary/02-web/02G.html","/php/three-min-summary/02-web/02H.html","/php/three-min-summary/02-web/02I.html","/php/three-min-summary/02-web/02J.html","/php/three-min-summary/02-web/02K.html","/php/three-min-summary/03-database/03A.html","/php/three-min-summary/03-database/03B.html","/php/three-min-summary/03-database/03C.html","/php/three-min-summary/03-database/03D.html","/php/three-min-summary/03-database/03E.html","/php/three-min-summary/03-database/03F.html","/php/three-min-summary/03-database/03G.html","/php/three-min-summary/03-database/03H.html","/php/three-min-summary/03-database/03I.html","/php/three-min-summary/03-database/03J.html","/php/three-min-summary/04-string/04A.html","/php/three-min-summary/04-string/04B.html","/php/three-min-summary/04-string/04C.html","/php/three-min-summary/04-string/04D.html","/php/three-min-summary/04-string/04E.html","/php/three-min-summary/04-string/04F.html","/php/three-min-summary/05-validation/05A.html","/php/three-min-summary/05-validation/05B.html","/php/three-min-summary/05-validation/05C.html","/php/three-min-summary/05-validation/05D.html","/php/three-min-summary/05-validation/05E.html","/php/three-min-summary/06-modern-php/06A.html","/php/three-min-summary/06-modern-php/06B.html","/php/three-min-summary/06-modern-php/06C.html","/php/three-min-summary/06-modern-php/06D.html","/php/three-min-summary/06-modern-php/06E.html","/php/three-min-summary/06-modern-php/06F.html","/php/three-min-summary/06-modern-php/06G.html","/php/three-min-summary/07-miniproject/07A.html","/php/three-min-summary/07-miniproject/07B.html","/php/three-min-summary/07-miniproject/07C.html","/php/three-min-summary/07-miniproject/07D.html","/php/three-min-summary/07-miniproject/07E.html","/php/three-min-summary/07-miniproject/07F.html","/php/three-min-summary/07-miniproject/07G.html","/php/three-min-summary/07-miniproject/07H.html","/php/three-min-summary/07-miniproject/07I.html","/php/three-min-summary/07-miniproject/07J.html","/php/three-min-summary/07-miniproject/07K.html","/php/three-min-summary/07-miniproject/07L.html","/php/three-min-summary/07-miniproject/07M.html","/php/three-min-summary/07-miniproject/07N.html","/php/three-min-summary/07-miniproject/07O.html","/php/three-min-summary/07-miniproject/07P.html","/ruby/rubyonjets-learning-content/20181221-jets-afterburner-serverless-rails-on-aws-lambda-in-5-minutes.html","/swift/shuokai-objc/14.html","/js/","/js/eloquent-javascript/00.html","/js/eloquent-javascript/01.html","/js/eloquent-javascript/02.html","/js/eloquent-javascript/03.html","/js/eloquent-javascript/04.html","/js/eloquent-javascript/05.html","/js/eloquent-javascript/06.html","/js/eloquent-javascript/07.html","/js/eloquent-javascript/08.html","/js/eloquent-javascript/09.html","/js/eloquent-javascript/10.html","/js/eloquent-javascript/11.html","/js/eloquent-javascript/12.html","/js/eloquent-javascript/13.html","/js/eloquent-javascript/14.html","/js/eloquent-javascript/15.html","/js/eloquent-javascript/16.html","/js/eloquent-javascript/17.html","/js/eloquent-javascript/18.html","/js/eloquent-javascript/19.html","/js/eloquent-javascript/20.html","/js/eloquent-javascript/21.html","/js/must-know-javascript-api/","/js/must-know-javascript-api/beacon.html","/js/must-know-javascript-api/broadcast-channel.html","/js/must-know-javascript-api/clipboard.html","/js/must-know-javascript-api/fetch.html","/js/must-know-javascript-api/page-visibility.html","/js/must-know-javascript-api/resize-observer.html","/php/"],Ui=le(wv);oa(Ui);const Pd=e=>{const t=we(),a=ye(),s=kt();return _(()=>{var c;const i=e??((c=a.value.blog)==null?void 0:c.key)??"";if(!i)return console.warn("useBlogCategory: key not found"),{path:"/",map:{}};if(!Ui.value[i])throw new Error(`useBlogCategory: key ${i} is invalid`);const n=Ui.value[i][s.value],o={path:n.path,map:{}};for(const u in n.map){const d=n.map[u];o.map[u]={path:d.path,items:[]};for(const p of d.indexes){const{path:m,meta:h}=es(Sd[p]);o.map[u].items.push({path:m,info:h})}t.value.path===d.path&&(o.currentItems=o.map[u].items)}return o})},gv={article:{"/":{path:"/article/",indexes:[0,29,30,169,171,925,955,221,251,272,314,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,709,710,711,712,713,755,756,757,758,759,760,761,762,763,764,765,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,41,35,36,37,38,39,40,44,45,46,47,48,49,50,51,52,75,76,77,78,79,80,81,82,31,83,84,85,86,32,33,34,766,767,768,769,770,771,772,773,774,775,776,777,778,779,780,781,782,783,170,784,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,800,160,161,801,162,163,164,165,166,167,168,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,926,927,928,929,930,931,932,933,934,935,936,937,938,939,940,941,942,943,944,945,946,947,802,803,948,949,950,951,952,953,954,804,805,806,807,808,809,810,811,812,813,832,833,834,835,836,837,838,839,840,841,842,843,844,845,846,847,848,849,850,851,852,853,854,855,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,252,253,254,255,256,257,258,259,260,261,262,263,264,923,265,266,267,268,269,270,271,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,688,689,690,691,692,693,694,695,696,697,698,699,700,924,701,702,703,704,705,706,707,708,530,531,532,533,534,535,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,754,42,43,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,814,815,816,817,818,819,820,821,822,823,824,825,826,827,828,829,830,831,856,857,858,859,860,861,862,863,864,865,866,867,868,869,870,871,872,873,874,875,876,877,878,879,880,881,882,883,884,885,886,887,888,889,890,891,892,893,894,895,896,897,898,899,900,901,902,903,904,905,906,907,908,909,910,911,912,913,914,915,916,917,918,919,920,921,922,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687]}},star:{"/":{path:"/star/",indexes:[]}},timeline:{"/":{path:"/timeline/",indexes:[]}}},Ji=le(gv);oa(Ji);const Wr=e=>{const t=ye(),a=kt();return _(()=>{var o;const s=e??((o=t.value.blog)==null?void 0:o.key)??"";if(!s)return console.warn("useBlogType: key not found"),{path:"/",items:[]};if(!Ji.value[s])throw new Error(`useBlogType: key ${e} is invalid`);const i=Ji.value[s][a.value],n={path:i.path,items:[]};for(const c of i.indexes){const{path:u,meta:d}=es(Sd[c]);n.items.push({path:u,info:d})}return n})},Dd=()=>l(ne,{name:"lock"},()=>l("path",{d:"M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z"}));Dd.displayName="LockIcon";var vv=[];const Od=Symbol.for("categoryMap"),$s=()=>{const e=fe(Od);if(!e)throw new Error("useCategoryMap() is called without provider.");return e},yv=()=>{const e=Pd("category");mt(Od,e)},qs=()=>{const e=ua(),t=ce();return _(()=>({...e.value.blog,...t.value.blog}))},Rd=Symbol.for("tagMap"),Ws=()=>{const e=fe(Rd);if(!e)throw new Error("useTagMap() is called without provider.");return e},_v=()=>{const e=Pd("tag");mt(Rd,e)},bv=e=>{const t=ce();return _(()=>{const{[be.author]:a}=e.value;return a?Is(a):a===!1?[]:Is(t.value.author,!1)})},Ev=e=>{const t=$s();return _(()=>ku(e.value[be.category]).map(a=>({name:a,path:t.value.map[a].path})))},kv=e=>{const t=Ws();return _(()=>xu(e.value[be.tag]).map(a=>({name:a,path:t.value.map[a].path})))},xv=e=>_(()=>{const{[be.date]:t}=e.value;return En(t)}),Tv=e=>{const t=Za(e,"info"),a=qs(),s=bv(t),i=Ev(t),n=kv(t),o=xv(t),c=Ku(),u=_(()=>({author:s.value,category:i.value,date:o.value,localizedDate:t.value[be.localizedDate]||"",tag:n.value,isOriginal:t.value[be.isOriginal]||!1,readingTime:t.value[be.readingTime]||null,readingTimeLocale:t.value[be.readingTime]&&c.value?Ju(t.value[be.readingTime],c.value):null,pageview:e.path})),d=_(()=>a.value.articleInfo);return{info:u,items:d}},Vd=Symbol(""),Gs=()=>{const e=fe(Vd);if(!e)throw new Error("useArticles() is called without provider.");return e},Av=()=>{const e=Wr("article");mt(Vd,e)},Cd=Symbol(""),Un=()=>{const e=fe(Cd);if(!e)throw new Error("useStars() is called without provider.");return e},jv=()=>{const e=Wr("star");mt(Cd,e)},Md=Symbol(""),Jn=()=>{const e=fe(Md);if(!e)throw new Error("useTimelines() is called without provider.");return e},Iv=()=>{const e=Wr("timeline"),t=_(()=>{const a=[];return e.value.items.forEach(({info:s,path:i})=>{const n=En(s[be.date]);if(n){const o=n.getFullYear(),c=n.getMonth()+1,u=n.getDate();(!a[0]||a[0].year!==o)&&a.unshift({year:o,items:[]}),a[0].items.push({date:`${c}/${u}`,info:s,path:i})}}),{...e.value,config:a.reverse()}});mt(Md,t)},Lv=()=>{Av(),yv(),jv(),_v(),Iv()};var Sv=D({name:"SocialMedia",setup(){const e=qs(),t=ja(),a=_(()=>{const s=e.value.medias;return s?qt(s).map(([i,n])=>({name:i,icon:fv[i],url:n})):[]});return()=>a.value.length?l("div",{class:"vp-social-medias"},a.value.map(({name:s,icon:i,url:n})=>l("a",{class:"vp-social-media",href:n,rel:"noopener noreferrer",target:"_blank","aria-label":s,...t.value?{}:{"data-balloon-pos":"up"},innerHTML:i}))):null}}),Kn=D({name:"BloggerInfo",setup(){const e=qs(),t=Xa(),a=ce(),s=Gs(),i=$s(),n=Ws(),o=Jn(),c=zs(),u=_(()=>{var h;return e.value.name||((h=Is(a.value.author)[0])==null?void 0:h.name)||t.value.title}),d=_(()=>e.value.avatar||a.value.logo),p=_(()=>a.value.blogLocales),m=_(()=>e.value.intro);return()=>{const{article:h,category:f,tag:g,timeline:E}=p.value,k=[[s.value.path,s.value.items.length,h],[i.value.path,nt(i.value.map).length,f],[n.value.path,nt(n.value.map).length,g],[o.value.path,o.value.items.length,E]];return l("div",{class:"vp-blogger-info",vocab:"https://schema.org/",typeof:"Person"},[l("div",{class:"vp-blogger",...m.value?{style:{cursor:"pointer"},"aria-label":p.value.intro,"data-balloon-pos":"down",role:"link",onClick:()=>c(m.value)}:{}},[d.value?l("img",{class:["vp-blogger-avatar",{round:e.value.roundAvatar}],src:Ee(d.value),property:"image",alt:"Blogger Avatar",loading:"lazy"}):null,u.value?l("div",{class:"vp-blogger-name",property:"name"},u.value):null,e.value.description?l("div",{class:"vp-blogger-description",innerHTML:e.value.description}):null,m.value?l("meta",{property:"url",content:Ee(m.value)}):null]),l("div",{class:"vp-blog-counts"},k.map(([y,T,b])=>l(Pe,{class:"vp-blog-count",to:y},()=>[l("div",{class:"count"},T),l("div",b)]))),l(Sv)])}}});const Qn=()=>l(ne,{name:"category"},()=>l("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));Qn.displayName="CategoryIcon";const Yn=()=>l(ne,{name:"tag"},()=>l("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));Yn.displayName="TagIcon";const Zn=()=>l(ne,{name:"timeline"},()=>l("path",{d:"M511.997 70.568c-243.797 0-441.429 197.633-441.429 441.435 0 243.797 197.632 441.429 441.43 441.429S953.431 755.8 953.431 512.002c0-243.796-197.637-441.434-441.435-441.434zm150.158 609.093-15.605 15.61c-8.621 8.615-22.596 8.615-31.215 0L472.197 552.126c-4.95-4.944-4.34-14.888-4.34-24.677V247.14c0-12.19 9.882-22.07 22.07-22.07h22.07c12.19 0 22.07 9.882 22.07 22.07v273.218l128.088 128.088c8.62 8.62 8.62 22.595 0 31.215zm0 0"}));Zn.displayName="TimelineIcon";const Hd=()=>l(ne,{name:"slides"},()=>l("path",{d:"M896 170.667v426.666a85.333 85.333 0 0 1-85.333 85.334h-256v61.184l192.597 115.584-43.861 73.13-148.736-89.173v95.275h-85.334v-95.318l-148.736 89.216-43.861-73.13 192.597-115.627v-61.141h-256A85.333 85.333 0 0 1 128 597.333V170.667H85.333V85.333h853.334v85.334H896zm-682.667 0v426.666h597.334V170.667H213.333zM426.667 512h-85.334V341.333h85.334V512zm128 0h-85.334V256h85.334v256zm128 0h-85.334V384h85.334v128z"}));Hd.displayName="SlideIcon";const Nd=()=>l(ne,{name:"sticky"},()=>[l("path",{d:"m381.3 733.8l-161.9 118c-5.9 4.5-13.2 6.6-20.1 6.6-8.7 0-17.7-3.4-24.3-10-12.2-12.2-13.9-31.3-3.5-45.2l144.5-195.5-113.6-112.9c-11.1-11.1-13.2-28.4-5.5-42 5.5-8.7 52.1-76.4 155.5-51 1.8 0.3 3.5 0.3 5.6 0.7 4.2 0.3 9 0.7 14.2 1.7 21.9 3.5 60.8-13.9 94.5-42.7 32.3-27.5 53.1-59.4 53.1-81.6 0-5.2 0-10.8-0.3-16-0.7-20.8-2.1-52.8 21.5-76.4 28.1-28.1 72.9-30.6 103.9-5.2 0.6 0.3 1 1 1.7 1.7 16.7 16.3 187.5 187.2 189.3 188.9 14.5 14.6 22.9 34.4 22.9 55.3 0 20.8-8 40.2-22.9 54.8-23.7 23.6-56 22.6-77.1 21.6-4.9 0-10.5-0.4-15.7-0.4-20.8 0-45.8 14.6-70.5 41.3-34.3 37.5-55.5 85.8-53.8 107.7 0.7 6.9 2.1 19.1 2.4 20.8 25 101.4-42.7 147.6-50.7 152.8-13.9 8.4-31.6 6.3-42.7-4.8l-112.1-112.2z"})]);Nd.displayName="StickyIcon";const Gr=()=>l(ne,{name:"article"},()=>l("path",{d:"M853.333 938.667H170.667A42.667 42.667 0 0 1 128 896V128a42.667 42.667 0 0 1 42.667-42.667h682.666A42.667 42.667 0 0 1 896 128v768a42.667 42.667 0 0 1-42.667 42.667zm-42.666-85.334V170.667H213.333v682.666h597.334zM298.667 256h170.666v170.667H298.667V256zm0 256h426.666v85.333H298.667V512zm0 170.667h426.666V768H298.667v-85.333zm256-384h170.666V384H554.667v-85.333z"}));Gr.displayName="ArticleIcon";const zd=()=>l(ne,{name:"book"},()=>l("path",{d:"M256 853.333h426.667A85.333 85.333 0 0 0 768 768V256a85.333 85.333 0 0 0-85.333-85.333H469.333a42.667 42.667 0 0 1 0-85.334h213.334A170.667 170.667 0 0 1 853.333 256v512a170.667 170.667 0 0 1-170.666 170.667H213.333A42.667 42.667 0 0 1 170.667 896V128a42.667 42.667 0 0 1 42.666-42.667h128A42.667 42.667 0 0 1 384 128v304.256l61.653-41.088a42.667 42.667 0 0 1 47.36 0l61.654 41.045V256A42.667 42.667 0 0 1 640 256v256a42.667 42.667 0 0 1-66.347 35.499l-104.32-69.547-104.32 69.547A42.667 42.667 0 0 1 298.667 512V170.667H256v682.666z"}));zd.displayName="BookIcon";const Bd=()=>l(ne,{name:"link"},()=>l("path",{d:"M460.8 584.533c17.067 17.067 17.067 42.667 0 59.734-17.067 17.066-42.667 17.066-59.733 0-85.334-85.334-85.334-217.6 0-302.934L554.667 192C640 110.933 776.533 110.933 857.6 196.267c81.067 81.066 81.067 213.333 0 294.4l-68.267 64c0-34.134-4.266-68.267-17.066-102.4l21.333-21.334c51.2-46.933 55.467-128 4.267-179.2s-128-55.466-179.2-4.266c-4.267 0-4.267 4.266-4.267 4.266L465.067 401.067c-51.2 51.2-51.2 132.266-4.267 183.466m123.733-183.466C601.6 384 627.2 384 644.267 401.067c85.333 85.333 85.333 217.6 0 302.933l-153.6 149.333C405.333 934.4 268.8 934.4 187.733 849.067c-81.066-81.067-81.066-213.334 0-294.4l68.267-64c0 34.133 4.267 72.533 17.067 102.4L251.733 614.4C204.8 665.6 204.8 746.667 256 793.6c51.2 46.933 123.733 46.933 174.933 0l149.334-149.333c51.2-51.2 51.2-128 0-179.2-12.8-17.067-17.067-46.934 4.266-64z"}));Bd.displayName="LinkIcon";const Fd=()=>l(ne,{name:"project"},()=>l("path",{d:"M987.456 425.152H864V295.296a36.48 36.48 0 0 0-36.544-36.544h-360l-134.08-128.256A9.344 9.344 0 0 0 327.04 128H36.48A36.48 36.48 0 0 0 0 164.544v676.608a36.48 36.48 0 0 0 36.544 36.544h797.76a36.672 36.672 0 0 0 33.92-22.848L1021.44 475.52a36.48 36.48 0 0 0-33.92-50.304zM82.304 210.304h215.424l136.64 130.752h347.328v84.096H198.848A36.672 36.672 0 0 0 164.928 448L82.304 652.8V210.304zM808.32 795.456H108.544l118.08-292.608h699.904L808.32 795.52z"}));Fd.displayName="ProjectIcon";const $d=()=>l(ne,{name:"friend"},()=>l("path",{d:"M860.16 213.333A268.373 268.373 0 0 0 512 186.027a267.52 267.52 0 0 0-348.16 404.48L428.8 855.893a118.613 118.613 0 0 0 166.4 0l264.96-265.386a267.52 267.52 0 0 0 0-377.174zM800 531.627l-264.96 264.96a32.427 32.427 0 0 1-46.08 0L224 530.347a183.04 183.04 0 0 1 0-256 182.187 182.187 0 0 1 256 0 42.667 42.667 0 0 0 60.587 0 182.187 182.187 0 0 1 256 0 183.04 183.04 0 0 1 3.413 256z"}));$d.displayName="FriendIcon";const Ki=()=>l(ne,{name:"slide-down"},()=>l("path",{d:"M108.775 312.23c13.553 0 27.106 3.734 39.153 11.806l375.205 250.338 363.641-252.808c32.587-21.624 76.499-12.83 98.123 19.757 21.685 32.467 12.95 76.56-19.576 98.184l-402.854 278.89c-23.733 15.901-54.694 15.962-78.547.12L69.501 442.097c-32.647-21.685-41.441-65.777-19.817-98.304 13.734-20.54 36.201-31.563 59.09-31.563Z"}));Ki.displayName="SlideDownIcon";const qd=()=>l("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",class:"empty-icon",viewBox:"0 0 1024 1024",innerHTML:'<defs><linearGradient id="f" x1="512.342" y1="2266.13" x2="512.342" y2="666.063" gradientUnits="userSpaceOnUse"><stop offset=".919" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="g" x1="528.912" y1="774" x2="388.088" y2="612" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#e6e6e6" stop-opacity="0"/></linearGradient><linearGradient id="h" x1="213.219" y1="721.704" x2="251.313" y2="683.61" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d7d7d7"/><stop offset=".485" stop-color="#fafafa"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="i" x1="724.813" y1="821.718" x2="768.656" y2="777.876" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="a" x1="513.493" y1="714.594" x2="471.007" y2="544.188" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#999"/><stop offset="1" stop-color="#ccc"/></linearGradient><linearGradient id="b" x1="440.156" y1="564.031" x2="508.594" y2="495.594" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="l" x1="660.988" y1="754.156" x2="608.637" y2="544.188" xlink:href="#a"/><linearGradient id="m" x1="479.188" y1="774.219" x2="649.782" y2="603.625" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b3b3b3"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="n" x1="447.121" y1="774.219" x2="394.661" y2="563.813" xlink:href="#a"/><linearGradient id="o" x1="494" y1="597" x2="628" y2="463" xlink:href="#b"/><linearGradient id="d" x1="610.485" y1="604.938" x2="697.298" y2="518.125" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="p" x1="457.438" y1="619.25" x2="353.469" y2="619.25" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="q" x1="542.734" y1="674.25" x2="615.672" y2="601.313" xlink:href="#b"/><linearGradient id="c" x1="627.933" y1="358.938" x2="685.192" y2="422.531" gradientUnits="userSpaceOnUse"><stop offset=".4" stop-color="#e6e6e6" stop-opacity=".4"/><stop offset=".443" stop-color="#fff"/><stop offset=".6" stop-color="#ccc"/></linearGradient><linearGradient id="r" x1="618.547" y1="422.531" x2="681.547" y2="359.531" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="s" x1="625" y1="441.5" x2="697" y2="369.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="t" x1="627.681" y1="361.438" x2="692.257" y2="433.156" xlink:href="#c"/><linearGradient id="u" x1="561.414" y1="735.438" x2="573.149" y2="688.375" xlink:href="#d"/><linearGradient id="v" x1="405" y1="485.875" x2="440" y2="450.875" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".702"/></linearGradient><linearGradient id="w" x1="404.61" y1="486.906" x2="441.86" y2="449.656" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".495" stop-color="#ccc" stop-opacity=".702"/><stop offset=".498" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".302"/></linearGradient><radialGradient id="e" cx="329.297" cy="647.578" r="8.172" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fafafa"/><stop offset="1.2" stop-color="#e6e6e6"/></radialGradient><radialGradient id="j" cx="802.297" cy="673.578" r="8.172" xlink:href="#e"/><radialGradient id="k" cx="774.844" cy="642.75" r="5.531" xlink:href="#e"/></defs><path d="M512.33 666.07c441.828 0 800 358.18 800 800.03s-358.172 800.02-800 800.02-800-358.18-800-800.02 358.17-800.03 800-800.03z" style="fill:url(#f);fill-rule:evenodd"/><path d="m272 694 242-82 131 119-188 43z" style="fill:url(#g);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M232.391 723.534a2.4 2.4 0 0 1 2.4 2.4v17.725a2.4 2.4 0 0 1-4.8 0v-17.725a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M232.255 676.559c10.33 0 17.067 15.408 18.7 28.493 1.619 12.942-2.372 23.694-18.7 23.694-16.878 0-20.213-10.733-18.7-23.694 1.633-14.061 8.37-28.493 18.7-28.493z" style="fill:url(#h);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M745.853 826h.938a2.4 2.4 0 0 1 2.4 2.4v22.238a2.4 2.4 0 0 1-2.4 2.4h-.938a2.4 2.4 0 0 1-2.4-2.4V828.4a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M746.727 830.3c-19.438 0-23.278-9.326-21.541-20.59a34.467 34.467 0 0 1 3.289-10.369 16.628 16.628 0 0 1 0-9.112c2.889-12.327 12.059-20.911 18.356-20.911 6.56 0 15.468 9.1 18.356 20.911a14.589 14.589 0 0 1-.335 9.217 34.36 34.36 0 0 1 3.419 10.264c1.861 11.243-2.735 20.59-21.544 20.59z" style="fill:url(#i);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M328.841 654.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.109.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M328.383 653.73a6.567 6.567 0 0 0-5.2-5.027q-4.109-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#e);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M801.841 680.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.108.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M801.383 679.73a6.567 6.567 0 0 0-5.2-5.027q-4.108-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#j);fill-rule:evenodd"/><path d="M774.21 646.9a4.446 4.446 0 0 0-3.517-3.4q-2.778-.643-.023-1.383a4.443 4.443 0 0 0 3.4-3.517q.645-2.778 1.383-.023a4.443 4.443 0 0 0 3.517 3.4q2.778.645.023 1.383a4.446 4.446 0 0 0-3.4 3.517q-.645 2.78-1.383.023z" style="fill:url(#k);fill-rule:evenodd"/><path d="m385.6 714.6.158-150.658L598.9 544.174l-.158 150.658z" style="fill:url(#a);fill-rule:evenodd"/><path d="m385.474 564.031 214.763-19.383-36.171-49.067-215.559 17.634z" style="fill:url(#b);fill-rule:evenodd"/><path d="m598.744 694.832.156-150.658 71.975 59.319-.158 150.658z" style="fill:url(#l);fill-rule:evenodd"/><path d="m457.064 774.209.158-150.658 214.691-19.914-.158 150.663z" style="fill:url(#m);fill-rule:evenodd"/><path d="m384.566 714.459.158-150.659 72.5 59.75-.158 150.658z" style="fill:url(#n);fill-rule:evenodd"/><path d="M494 640s75.357-58.4 42-83-38.887 1.663-37 14 53.847 12.465 54-26c.2-49.979 75-125 75-125" style="fill:none;stroke-width:3px;stroke-dasharray:12 6;stroke:url(#o);fill-rule:evenodd"/><path d="m670.275 604.939-72.041-59.9 38.476-26.909 72.86 58.159z" style="fill:url(#d);fill-rule:evenodd"/><path d="m425.5 674.383-72.042-59.9 31.109-50.347 72.86 58.16z" style="fill:url(#p);fill-rule:evenodd"/><path d="m487.918 674.235 214.482-22.57-31.1-50.346-215.309 20.833z" style="fill:url(#q);fill-rule:evenodd"/><path style="fill:#fff;fill-rule:evenodd" d="m697.363 358.927-69.58 62.511-12.035 1.082z"/><path d="m697.363 358.927-69.58 62.511-12.035 1.082z" style="fill:url(#c);fill-rule:evenodd"/><path d="M615.748 422.52 604 413l92.089-53.46" style="fill:url(#r);fill-rule:evenodd"/><path d="m625 432 12 18 60-89" style="fill:url(#s);fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:#fff;fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:url(#t);fill-rule:evenodd"/><path d="m494.814 735.44 21.293-2.1v-6.613l-13.4 1.319v-6.965l10.977-1.08v-6.613l-10.977 1.08v-6.084l12.917-1.27v-6.525l-20.808 2.047v32.8zM521 732.863l7.054-.694v-11.241a106.361 106.361 0 0 0-1.014-11.274l.176-.017 2.645 7.586 4.453 11.553 4.32-.425 4.408-12.424 2.733-8.116.177-.018a111.811 111.811 0 0 0-1.014 11.474v11.241l7.185-.707V697l-8.552.841-5.025 14.646c-.618 1.956-1.147 4.08-1.808 6.173l-.22.022c-.617-1.968-1.146-3.987-1.808-5.818l-5.2-13.639-8.508.837v32.8zm37.213-3.661 7.891-.776v-10.889l3.835-.377c6.922-.681 12.961-4.714 12.961-12.517 0-8.111-5.951-10.082-13.181-9.371l-11.504 1.128v32.8zm7.891-17.881v-9.478l3.218-.316c3.792-.373 5.908.565 5.908 3.871 0 3.218-1.852 5.208-5.687 5.585zM594 725.682l7.891-.777v-26.274l8.905-.876v-6.524l-25.657 2.524v6.524l8.861-.871v26.274zm27.991-2.754 7.847-.772v-11.594l9.919-22.18-8.244.811-2.733 7.542c-.925 2.56-1.807 4.939-2.733 7.587l-.176.018c-.926-2.466-1.764-4.676-2.645-7.058l-2.734-7-8.375.824 9.874 20.233v11.594z" style="fill:url(#u);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M408.938 457.309a17.5 17.5 0 0 0 21.374 26.725 17.5 17.5 0 1 1-16.306-30.955 17.442 17.442 0 0 0-5.068 4.23z"/><circle cx="422.5" cy="468.375" r="17.5" style="fill:url(#v)"/><path fill="#ccc" fill-rule="evenodd" d="M391.76 451.5c-2.358 4.419 9.827 15.52 27.215 24.8 15.131 8.071 29.212 12.1 34.166 10.093-4.191 2.772-18.943-1.24-34.86-9.73-17.388-9.275-29.573-20.376-27.215-24.8a2.96 2.96 0 0 1 1.585-1.3 2.606 2.606 0 0 0-.891.937z"/><path d="M418.975 476.29c-17.388-9.275-29.573-20.376-27.215-24.8s18.363-.484 35.751 8.791 29.572 20.376 27.215 24.8-18.364.483-35.751-8.791zm31.634 5.732c1.824-3.42-8.789-12.642-23.7-20.6s-28.486-11.633-30.31-8.213 8.789 12.642 23.7 20.6 28.486 11.633 30.31 8.213zm-36.645-29.008-2.775 1.452.032 1.751 28.637 14.183.266-4.559z" style="fill:url(#w);fill-rule:evenodd"/><g class="people"><path style="fill:#f8cfad;fill-rule:evenodd" d="m612.131 676.5 1.362 3.532 3.255-2.324-1.361-3.532zM629.131 665.5l1.362 3.532 3.255-2.324-1.361-3.532z"/><path style="fill:#141a33;fill-rule:evenodd" d="m617.764 678.184-3.162-.078a11.028 11.028 0 0 0-1.034 3.454c-.258 2.006-1.177 5-.449 5.367 1.5 2.659 4.118-.215 4.118-.215s2.187-2.848 1.925-5.265c-.106-.973-1.181-1.869-1.398-3.263zM633.781 665.855l3.019.945a11.008 11.008 0 0 1-.137 3.6c-.4 1.981-.179 4.166-.986 4.277-2.283 2.03-3.827-1.533-3.827-1.533s-1.473-2.456-.444-4.659c.412-.88 1.718-1.385 2.375-2.63z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M599.935 592.534s10.293 9.761 11.95 7.564 3.536-3.463-6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M611.3 596.361c1.674-1.105 11.5 7.048 14.5 11.774s-12.705-4.36-14.632-6.776-1.54-3.893.132-4.998z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M621.815 607.988s1.809 2.549 2.433 1.756 2.475-1.064 2.449-1.138.1-.819 1.288-2.331-3.8-3.632-5.81-.494a2.556 2.556 0 0 0-.36 2.207z"/><path fill="#232c57" fill-rule="evenodd" d="M598 617s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s12.666 11.836 16 19c0 0-4.753-1.629-4 2 0 0-18.132-14.647-19-19s-9.148-18.716-12-31z"/><path d="M589 622s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s4.666 17.836 8 25c0 0-4.753-1.629-4 2 0 0-10.132-20.647-11-25s-9.148-18.716-12-31z" style="fill:#292966;fill-rule:evenodd"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M585.626 597.7s-10.292 9.761-11.95 7.563-3.536-3.463 6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M574.259 601.529c-1.675-1.105-11.5 7.049-14.5 11.774s12.7-4.36 14.631-6.775 1.543-3.894-.131-4.999z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M591.715 577.752s-.606 1.681 1.48 3.716-3.615 5.307-4.645 2.85-.48-2.716-.48-2.716z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M583.527 574.123c-.839 1.043.491 3.873 1.453 5.449s2.749 2.833 3.364 2.428 4.088-2.657 4-4-.228-3.4-.228-3.4 2.562-1.641 2.154-2.916-2.916-.154-2.916-.154a15.853 15.853 0 0 0-.227-2.224c-.189-.929-6.887-1.445-7.827 2.6s.558 1.805.227 2.217z"/><path fill="#232c57" fill-rule="evenodd" d="M584.227 567.758c2.1-.885 7.2-3.684 10.125.318s.842 4.385.989 5.294-1.894 5.69-1.341 6.63-3.865.8-4.657-1.179-2.844-.539-2.227-1.224-1.3-4.456-2.916-2.154a9.252 9.252 0 0 0 .309-1.38c-.115.192.259-3.257-.673-1.32s-2.1 1.037-3.069.762-1.8-1.118-1.071-1.689c.023-.016 2.436-3.172 4.531-4.058z"/><path d="M589 585c-2.584-.47-10.055.362-13 13 0 0 1.9 3.349 5 4s6 21 6 21 24.016 11.06 27-3c-.07-13.826-8-21-8-21s5.829-3.2 5-6-8.016-10.153-11-10-6 0-6 0-2.416 2.47-5 2z" style="fill:#f6bb07;fill-rule:evenodd"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M563.284 612.581s-.986 2.965-1.814 2.389-2.678-.3-2.675-.374-.333-.755-1.912-1.854 2.577-4.583 5.414-2.167a2.551 2.551 0 0 1 .987 2.006z"/></g>'});qd.displayName="EmptyIcon";var Pv=D({name:"ArticleItem",props:{info:{type:Object,required:!0},path:{type:String,required:!0}},slots:Object,setup(e,{slots:t}){const a=Za(e,"info"),{info:s,items:i}=Tv(e);return()=>{var h,f,g;const{[be.title]:n,[be.type]:o,[be.isEncrypted]:c=!1,[be.cover]:u,[be.excerpt]:d,[be.sticky]:p}=a.value,m=s.value;return l("div",{class:"vp-article-wrapper"},l("article",{class:"vp-article-item",vocab:"https://schema.org/",typeof:"Article"},[((h=t.cover)==null?void 0:h.call(t,{cover:u}))||(u?[l("img",{class:"vp-article-cover",src:Ee(u),loading:"lazy"}),l("meta",{property:"image",content:Ee(u)})]:[]),p?l(Nd):null,l(Pe,{to:e.path},()=>{var E;return((E=t.title)==null?void 0:E.call(t,{title:n,isEncrypted:c,type:o}))||l("header",{class:"vp-article-title"},[c?l(Dd):null,o===ad.slide?l(Hd):null,l("span",{property:"headline"},n)])}),((f=t.excerpt)==null?void 0:f.call(t,{excerpt:d}))||(d?l("div",{class:"vp-article-excerpt",innerHTML:d}):null),l("hr",{class:"vp-article-hr"}),((g=t.info)==null?void 0:g.call(t,{info:m}))||l(xd,{info:m,...i.value?{items:i.value}:{}})]))}}}),Dv=D({name:"Pagination",props:{total:{type:Number,default:10},perPage:{type:Number,default:10},current:{type:Number,default:1}},emits:["updateCurrentPage"],setup(e,{emit:t}){let a;const s=ce(),i=q(""),n=_(()=>s.value.paginationLocales),o=_(()=>Math.ceil(e.total/e.perPage)),c=_(()=>!!o.value&&o.value!==1),u=_(()=>o.value<7?!1:e.current>4),d=_(()=>o.value<7?!1:e.current<o.value-3),p=_(()=>{const{current:f}=e;let g=1,E=o.value;const k=[];o.value>=7&&(f<=4&&f<o.value-3?(g=1,E=5):f>4&&f>=o.value-3?(E=o.value,g=o.value-4):o.value>7&&(g=f-2,E=f+2));for(let y=g;y<=E;y++)k.push(y);return k}),m=f=>t("updateCurrentPage",f),h=f=>{const g=parseInt(f,10);g<=o.value&&g>0?m(g):a.pop(`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M64 512a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#FA5151"/><path d="m557.3 512 113.1-113.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L512 466.7 398.9 353.6c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 512 353.6 625.1c-12.5 12.5-12.5 32.8 0 45.3 6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L512 557.3l113.1 113.1c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L557.3 512z" fill="#FFF"/></svg>${n.value.errorText.replace(/\$page/gu,o.value.toString())}`)};return ie(()=>{a=new r1}),()=>l("div",{class:"vp-pagination"},c.value?l("nav",{class:"vp-pagination-list"},[l("div",{class:"vp-pagination-number "},[e.current>1?l("div",{class:"prev",role:"navigation",unselectable:"on",onClick:()=>m(e.current-1)},n.value.prev):null,u.value?[l("div",{role:"navigation",onClick:()=>m(1)},1),l("div",{class:"ellipsis"},"...")]:null,p.value.map(f=>l("div",{key:f,class:{active:e.current===f},role:"navigation",onClick:()=>m(f)},f)),d.value?[l("div",{class:"ellipsis"},"..."),l("div",{role:"navigation",onClick:()=>m(o.value)},o.value)]:null,e.current<o.value?l("div",{class:"next",role:"navigation",unselectable:"on",onClick:()=>m(e.current+1)},n.value.next):null]),l("div",{class:"vp-pagination-nav"},[l("label",{for:"navigation-text"},`${n.value.navigate}: `),l("input",{id:"navigation-text",value:i.value,onInput:({target:f})=>{i.value=f.value},onKeydown:f=>{f.key==="Enter"&&(f.preventDefault(),h(i.value))}}),l("button",{class:"vp-pagination-button",role:"navigation",title:n.value.action,onClick:()=>h(i.value)},n.value.action)])]):[])}}),Xn=D({name:"ArticleList",props:{items:{type:Array,default:()=>[]}},setup(e){const t=Rt(),a=Ot(),s=qs(),i=q(1),n=_(()=>s.value.articlePerPage||10),o=_(()=>e.items.slice((i.value-1)*n.value,i.value*n.value)),c=async u=>{i.value=u;const d={...t.query};!(d.page===u.toString()||u===1&&!d.page)&&(u===1?delete d.page:d.page=u.toString(),await a.push({path:t.path,query:d}))};return ie(()=>{const{page:u}=t.query;c(u?Number(u):1),re(i,()=>{const d=document.querySelector("#article-list").getBoundingClientRect().top+window.scrollY;setTimeout(()=>{window.scrollTo(0,d)},100)})}),()=>l("div",{id:"article-list",class:"vp-article-list",role:"feed"},o.value.length?[...o.value.map(({info:u,path:d},p)=>l(he,{appear:!0,delay:p*.04},()=>l(Pv,{key:d,info:u,path:d}))),l(Dv,{current:i.value,perPage:n.value,total:e.items.length,onUpdateCurrentPage:c})]:l(qd))}}),Wd=D({name:"CategoryList",setup(){const e=we(),t=$s();return()=>l("ul",{class:"vp-category-list"},qt(t.value.map).sort(([,a],[,s])=>s.items.length-a.items.length).map(([a,{path:s,items:i}])=>l("li",{class:["vp-category",`vp-category${$r(a,9)}`,{active:s===e.value.path}]},l(Pe,{to:s},()=>[a,l("span",{class:"count"},i.length)]))))}}),Gd=D({name:"TagList",setup(){const e=ye(),t=Ws(),a=s=>{var i;return s===((i=e.value.blog)==null?void 0:i.name)};return()=>l("ul",{class:"tag-list-wrapper"},qt(t.value.map).sort(([,s],[,i])=>i.items.length-s.items.length).map(([s,{path:i,items:n}])=>l("li",{class:["tag",`tag${$r(s,9)}`,{active:a(s)}]},l(Pe,{to:i},()=>[s,l("span",{class:"tag-num"},n.length)]))))}}),Ov=D({name:"TimelineList",setup(){const e=ce(),t=Jn(),a=zs(),s=_(()=>e.value.blogLocales.timeline);return()=>l("div",{class:"timeline-list-wrapper"},[l("div",{class:"timeline-list-title",onClick:()=>a(t.value.path)},[l(Zn),l("span",{class:"num"},t.value.items.length),s.value]),l("hr"),l("div",{class:"timeline-content"},l("ul",{class:"timeline-list"},t.value.config.map(({year:i,items:n},o)=>l(he,{appear:!0,delay:.08*(o+1)},()=>l("li",[l("h3",{class:"timeline-year"},i),l("ul",{class:"timeline-year-wrapper"},n.map(({date:c,info:u,path:d})=>l("li",{class:"timeline-item"},[l("span",{class:"timeline-date"},c),l(Pe,{class:"timeline-title",to:d},()=>u[be.title])])))])))))])}});const Rv={article:Gr,category:Qn,tag:Yn,timeline:Zn};var Ud=D({name:"InfoList",setup(){const e=ce(),t=Gs(),a=$s(),s=_(()=>nt(a.value.map).length),i=Un(),n=Ws(),o=_(()=>nt(n.value.map).length),c=zs(),u=q("article"),d=_(()=>e.value.blogLocales);return()=>l("div",{class:"vp-blog-infos"},[l("div",{class:"vp-blog-type-switcher"},qt(Rv).map(([p,m])=>l("button",{type:"button",class:"vp-blog-type-button",onClick:()=>{u.value=p}},l("div",{class:["icon-wrapper",{active:u.value===p}],"aria-label":d.value[p],"data-balloon-pos":"up"},l(m))))),l(he,()=>u.value==="article"?l("div",{class:"vp-star-article-wrapper"},[l("div",{class:"title",onClick:()=>c(t.value.path)},[l(Gr),l("span",{class:"num"},t.value.items.length),d.value.article]),l("hr"),i.value.items.length?l("ul",{class:"vp-star-articles"},i.value.items.map(({info:p,path:m},h)=>l(he,{appear:!0,delay:.08*(h+1)},()=>l("li",{class:"vp-star-article"},l(Pe,{to:m},()=>p[be.title]))))):l("div",{class:"vp-star-article-empty"},d.value.empty.replace("$text",d.value.star))]):u.value==="category"?l("div",{class:"vp-category-wrapper"},[s.value?[l("div",{class:"title",onClick:()=>c(a.value.path)},[l(Qn),l("span",{class:"num"},s.value),d.value.category]),l("hr"),l(he,{delay:.04},()=>l(Wd))]:l("div",{class:"vp-category-empty"},d.value.empty.replace("$text",d.value.category))]):u.value==="tag"?l("div",{class:"vp-tag-wrapper"},[o.value?[l("div",{class:"title",onClick:()=>c(n.value.path)},[l(Yn),l("span",{class:"num"},o.value),d.value.tag]),l("hr"),l(he,{delay:.04},()=>l(Gd))]:l("div",{class:"vp-tag-empty"},d.value.empty.replace("$text",d.value.tag))]):l(he,()=>l(Ov)))])}}),Ur=D({name:"BlogWrapper",slots:Object,setup(e,{slots:t}){const{isMobile:a}=Bs();return()=>[l(Gn),l(qn,{noSidebar:!0,noToc:!0},{default:()=>t.default(),navScreenBottom:()=>l(Kn),...a.value?{sidebar:()=>l(Ud)}:{}})]}});const Jd=()=>l("aside",{class:"vp-blog-info-wrapper"},[l(he,()=>l(Kn)),l(he,{delay:.04},()=>l(Ud))]);Jd.displayName="InfoPanel";var Jr=Jd,Vv=D({name:"BlogPage",setup(){const e=we(),t=ye(),a=$s(),s=Ws();return()=>{const{key:i="",name:n=""}=t.value.blog||{},o=n?i==="category"?a.value.map[n].items:i==="tag"?s.value.map[n].items:[]:[];return l(Ur,()=>l("div",{class:"vp-page vp-blog"},l("div",{class:"blog-page-wrapper"},[l("main",{id:"main-content",class:"vp-blog-main"},[l(he,()=>i==="category"?l(Wd):i==="tag"?l(Gd):null),n?l(he,{appear:!0,delay:.24},()=>l(Xn,{key:e.value.path,items:o})):null]),l(he,{delay:.16},()=>l(Jr,{key:"blog"}))])))}}});const Cv="//theme-hope-assets.vuejs.press/hero/default.jpg";var Mv=D({name:"BlogHero",slots:Object,setup(e,{slots:t}){const a=ye(),s=Xa(),i=le(),n=_(()=>a.value.heroFullScreen??!1),o=_(()=>{const{heroText:u,heroImage:d,heroImageDark:p,heroAlt:m,heroImageStyle:h,tagline:f}=a.value;return{text:u??s.value.title??"Hello",image:d?Ee(d):null,imageDark:p?Ee(p):null,heroStyle:h,alt:m||u||"",tagline:f??"",isFullScreen:n.value}}),c=_(()=>{const{bgImage:u,bgImageDark:d,bgImageStyle:p}=a.value;return{image:ke(u)?Ee(u):u===!1?null:Cv,imageDark:ke(d)?Ee(d):null,bgStyle:p,isFullScreen:n.value}});return()=>{var u,d;return a.value.hero===!1?null:l("div",{ref:i,class:["vp-blog-hero",{fullscreen:n.value,"no-bg":!c.value.image}]},[((u=t.heroBg)==null?void 0:u.call(t,c.value))||[c.value.image?l("div",{class:["vp-blog-mask",{light:c.value.imageDark}],style:[{background:`url(${c.value.image}) center/cover no-repeat`},c.value.bgStyle]}):null,c.value.imageDark?l("div",{class:"vp-blog-mask dark",style:[{background:`url(${c.value.imageDark}) center/cover no-repeat`},c.value.bgStyle]}):null],((d=t.heroInfo)==null?void 0:d.call(t,o.value))||[l(he,{appear:!0,type:"group",delay:.04},()=>[o.value.image?l("img",{key:"light",class:["vp-blog-hero-image",{light:o.value.imageDark}],style:o.value.heroStyle,src:o.value.image,alt:o.value.alt}):null,o.value.imageDark?l("img",{key:"dark",class:"vp-blog-hero-image dark",style:o.value.heroStyle,src:o.value.imageDark,alt:o.value.alt}):null]),l(he,{appear:!0,delay:.08},()=>o.value.text?l("h1",{class:"vp-blog-hero-title"},o.value.text):null),l(he,{appear:!0,delay:.12},()=>o.value.tagline?l("p",{class:"vp-blog-hero-description",innerHTML:o.value.tagline}):null)],o.value.isFullScreen?l("button",{type:"button",class:"slide-down-button",onClick:()=>{window.scrollTo({top:i.value.clientHeight,behavior:"smooth"})}},[l(Ki),l(Ki)]):null])}}});const Hv=["link","article","book","project","friend"];var Nv=D({name:"ProjectPanel",components:{ArticleIcon:Gr,BookIcon:zd,FriendIcon:$d,LinkIcon:Bd,ProjectIcon:Fd},props:{items:{type:Array,required:!0}},setup(e){const t=ja(),a=zs(),s=(i="",n="icon")=>Hv.includes(i)?l(st(`${i}-icon`)):Et(i)?l("img",{class:"vp-project-image",src:i,alt:n}):Ms(i)?l("img",{class:"vp-project-image",src:Ee(i),alt:n}):l(We,{icon:i});return()=>l("div",{class:"vp-project-panel"},e.items.map(({icon:i,link:n,name:o,desc:c},u)=>l("div",{class:["vp-project-card",{[`project${u%9}`]:!t.value}],onClick:()=>a(n)},[s(i,o),l("div",{class:"vp-project-name"},o),l("div",{class:"vp-project-desc"},c)])))}}),zv=D({name:"BlogHome",setup(){const e=Gs(),t=ye(),a=_(()=>t.value.projects??[]);return()=>l("div",{class:"vp-page vp-blog"},[l(Mv),l("div",{class:"blog-page-wrapper"},[l("main",{id:"main-content",class:"vp-blog-main"},[a.value.length?l(he,{appear:!0,delay:.16},()=>l(Nv,{items:a.value})):null,l(he,{appear:!0,delay:.24},()=>l(Xn,{items:e.value.items}))]),l(he,{appear:!0,delay:.16},()=>l(Jr,{key:"blog"}))]),l(he,{appear:!0,delay:.28},()=>l(Wn))])}});const Kd=()=>l(Ur,()=>l(zv));Kd.displayName="BlogHomeLayout";var Bv=Kd,Fv=D({name:"ArticleType",setup(){const e=we(),t=kt(),a=ce(),s=Gs(),i=Un(),n=_(()=>{const o=a.value.blogLocales;return[{text:o.all,path:s.value.path},{text:o.star,path:i.value.path},...vv.map(({key:c,path:u})=>({text:o[c],path:u.replace(/^\//,t.value)}))]});return()=>l("ul",{class:"vp-article-type-wrapper"},n.value.map(o=>l("li",{class:["vp-article-type",{active:o.path===e.value.path}]},l(Pe,{to:o.path},()=>o.text))))}}),$v=D({name:"BlogPage",setup(){const e=Wr(),t=ye(),a=we(),s=Gs(),i=Un(),n=_(()=>{const{key:o="",type:c}=t.value.blog||{};return o==="star"?i.value.items:c==="type"&&o?e.value.items:s.value.items});return()=>l(Ur,()=>l("div",{class:"vp-page vp-blog"},l("div",{class:"blog-page-wrapper"},[l("main",{id:"main-content",class:"vp-blog-main"},[l(he,()=>l(Fv)),l(he,{appear:!0,delay:.24},()=>l(Xn,{key:a.value.path,items:n.value}))]),l(he,{delay:.16},()=>l(Jr,{key:"blog"}))])))}}),qv=D({name:"TimelineItems",setup(){const e=qs(),t=ce(),a=Jn(),s=_(()=>e.value.timeline||t.value.blogLocales.timelineTitle),i=_(()=>a.value.config.map(({year:n})=>({title:n.toString(),level:2,slug:n.toString(),children:[]})));return()=>l("div",{class:"timeline-wrapper"},l("ul",{class:"timeline-content"},[l(he,()=>l("li",{class:"motto"},s.value)),l(Td,{items:i.value}),a.value.config.map(({year:n,items:o},c)=>l(he,{appear:!0,delay:.08*(c+1),type:"group"},()=>[l("h3",{key:"title",id:n,class:"timeline-year-title"},l("span",n)),l("li",{key:"content",class:"timeline-year-list"},[l("ul",{class:"timeline-year-wrapper"},o.map(({date:u,info:d,path:p})=>l("li",{class:"timeline-item"},[l("span",{class:"timeline-date"},u),l(Pe,{class:"timeline-title",to:p},()=>d[be.title])])))])]))]))}});const Qd=()=>l(Ur,()=>l("div",{class:"vp-page vp-blog"},l("div",{class:"blog-page-wrapper"},[l("main",{id:"main-content",class:"vp-blog-main"},[l(he,{appear:!0,delay:.24},()=>l(qv))]),l(he,{delay:.16},()=>l(Jr,{key:"blog"}))])));Qd.displayName="Timeline";var Wv=Qd,Gv=D({name:"SlidePage",setup(){const e=Ot(),t=kt(),a=q(!1),s=le(),i=()=>{a.value=!a.value},n=()=>{a.value=!1},o=()=>{n(),window.history.go(-1)},c=()=>{n(),e.push(t.value)};return mu(s,n),()=>l("div",{class:"vp-reveal-page"},[l(yn),l("div",{ref:s,class:["vp-reveal-menu",{active:a.value}]},[l("button",{type:"button",class:"menu-button",onClick:()=>i()},l("span",{class:"icon"})),l("button",{type:"button",class:"back-button",onClick:()=>o()},l(yw)),l("button",{type:"button",class:"home-button",onClick:()=>c()},l(_w))])])}});D1(e=>{const t=e.t,a=e.I!==!1,s=e.i;return a?{title:t,content:s?()=>[l(We,{icon:s}),t]:null,order:e.O,index:e.I}:null});const Uv=Xe({enhance:({app:e,router:t})=>{const{scrollBehavior:a}=t.options;t.options.scrollBehavior=async(...s)=>(await Ad().wait(),a(...s)),w2(e),e.component("HopeIcon",We),e.component("BloggerInfo",Kn)},setup:()=>{g2(),_2(),Lv()},layouts:{Layout:pv,NotFound:hv,BlogCategory:Vv,BlogHome:Bv,BlogType:$v,Timeline:Wv,Slide:Gv}}),Jv={enhance:({app:e})=>{e.component("Profile",wa(()=>r(()=>import("./Profile-CiCtAz_O.js"),__vite__mapDeps([1200,1])))),e.component("Shield",wa(()=>r(()=>import("./Shield-Bs2J37pE.js"),__vite__mapDeps([1201,1])))),e.component("ShieldsGroup",wa(()=>r(()=>import("./ShieldsGroup-CYH2lNsU.js"),__vite__mapDeps([1202,1201,1])))),e.component("TagLinks",wa(()=>r(()=>import("./TagLinks-CliSQQhu.js"),__vite__mapDeps([1203,1200,1])))),e.component("ToCLocal",wa(()=>r(()=>import("./ToCLocal-Dtdtjx6A.js"),__vite__mapDeps([1204,1]))))}},Kv=e=>{if(window.dataLayer&&window.gtag)return;const t=document.createElement("script");t.src=`https://www.googletagmanager.com/gtag/js?id=${e.id}`,t.async=!0,document.head.appendChild(t),window.dataLayer=window.dataLayer||[],window.gtag=function(){dataLayer.push(arguments)},gtag("js",new Date),e.debug?gtag("config",e.id,{debug_mode:!0}):gtag("config",e.id)};var Qv={id:"G-XFRP81YMEP",debug:!0};const Yv=Qv,Zv=Xe({enhance(){Kv(Yv)}}),cr=[X0,T1,P1,M1,z1,q1,J1,X1,uw,hw,_g,Rg,i2,Uv,Jv,Zv],Xv=JSON.parse('{"base":"/crashcourse/","lang":"en-US","title":"🥁crashcourse","description":"My Crashcourse(s)","head":[["link",{"rel":"icon","href":"/crashcourse/images/ico-school.svg"}]],"locales":{"/":{"lang":"en-US"}}}');var ls=le(Xv),e3=i0,t3=()=>{const e=$0({history:e3(Mr("/crashcourse/")),routes:[{name:"vuepress-route",path:"/:catchAll(.*)",components:{}}],scrollBehavior:(t,a,s)=>s||(t.hash?{el:t.hash}:{top:0})});return e.beforeResolve(async(t,a)=>{if(t.path!==a.path||a===Nt){const s=es(t.path);if(s.path!==t.path)return s.path;const i=await s.loader();t.meta={...s.meta,_pageChunk:i}}else t.path===a.path&&(t.meta=a.meta)}),e},a3=e=>{e.component("ClientOnly",zr),e.component("Content",yn),e.component("RouteLink",Pe)},s3=(e,t,a)=>{const s=_(()=>t.currentRoute.value.path),i=Lr((k,y)=>({get(){return k(),t.currentRoute.value.meta._pageChunk},set(T){t.currentRoute.value.meta._pageChunk=T,y()}})),n=_(()=>ha.resolveLayouts(a)),o=_(()=>ha.resolveRouteLocale(ls.value.locales,s.value)),c=_(()=>ha.resolveSiteLocaleData(ls.value,o.value)),u=_(()=>i.value.comp),d=_(()=>i.value.data),p=_(()=>d.value.frontmatter),m=_(()=>ha.resolvePageHeadTitle(d.value,c.value)),h=_(()=>ha.resolvePageHead(m.value,p.value,c.value)),f=_(()=>ha.resolvePageLang(d.value,c.value)),g=_(()=>ha.resolvePageLayout(d.value,n.value)),E={layouts:n,pageData:d,pageComponent:u,pageFrontmatter:p,pageHead:h,pageHeadTitle:m,pageLang:f,pageLayout:g,redirects:eu,routeLocale:o,routePath:s,routes:Ts,siteData:ls,siteLocaleData:c};return e.provide(vn,E),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get:()=>p.value},$head:{get:()=>h.value},$headTitle:{get:()=>m.value},$lang:{get:()=>f.value},$page:{get:()=>d.value},$routeLocale:{get:()=>o.value},$site:{get:()=>ls.value},$siteLocale:{get:()=>c.value},$withBase:{get:()=>Ee}}),E},r3=()=>{const e=G0(),t=Zc();let a=[];const s=()=>{e.value.forEach(o=>{const c=i3(o);c&&a.push(c)})},i=()=>{const o=[];return e.value.forEach(c=>{const u=n3(c);u&&o.push(u)}),o},n=()=>{document.documentElement.lang=t.value;const o=i();a.forEach((c,u)=>{const d=o.findIndex(p=>c.isEqualNode(p));d===-1?(c.remove(),delete a[u]):o.splice(d,1)}),o.forEach(c=>document.head.appendChild(c)),a=[...a.filter(c=>!!c),...o]};mt(K0,n),ie(()=>{s(),re(e,n,{immediate:!1})})},i3=([e,t,a=""])=>{const s=Object.entries(t).map(([c,u])=>ke(u)?`[${c}=${JSON.stringify(u)}]`:u===!0?`[${c}]`:"").join(""),i=`head > ${e}${s}`;return Array.from(document.querySelectorAll(i)).find(c=>c.innerText===a)||null},n3=([e,t,a])=>{if(!ke(e))return null;const s=document.createElement(e);return yt(t)&&Object.entries(t).forEach(([i,n])=>{ke(n)?s.setAttribute(i,n):n===!0&&s.setAttribute(i,"")}),ke(a)&&s.appendChild(document.createTextNode(a)),s},o3=jh,l3=async()=>{var a;const e=o3({name:"Vuepress",setup(){var n;r3();for(const o of cr)(n=o.setup)==null||n.call(o);const s=cr.flatMap(({rootComponents:o=[]})=>o.map(c=>l(c))),i=U0();return()=>[l(i.value),s]}}),t=t3();a3(e),s3(e,t,cr);for(const s of cr)await((a=s.enhance)==null?void 0:a.call(s,{app:e,router:t,siteData:ls}));return e.use(t),{app:e,router:t}};l3().then(({app:e,router:t})=>{t.isReady().then(()=>{e.mount("#app")})});export{E3 as $,qu as A,Hg as B,Vg as C,Cg as D,Wg as E,$g as F,le as G,ie as H,Dt as I,ke as J,j3 as K,yt as L,Br as M,Hn as N,v3 as O,d3 as P,p3 as Q,Pe as R,Ue as S,h3 as T,Tc as U,Pc as V,mt as W,un as X,fe as Y,f3 as Z,r as _,jc as a,Ar as a0,jr as a1,m3 as a2,_3 as a3,gt as a4,ia as a5,b3 as a6,k3 as a7,y3 as a8,De as b,w3 as c,l3 as createVueApp,Ic as d,g3 as e,D as f,Cm as g,Ot as h,kt as i,xt as j,Nn as k,Za as l,Ps as m,c3 as n,kc as o,q as p,_ as q,st as r,ve as s,u3 as t,x3 as u,re as v,Wp as w,l as x,Mg as y,Ng as z};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index.html-CUQuuPsb.js","assets/plugin-vue_export-helper-DlAUqK2U.js","assets/index.html-DXwVFEt0.js","assets/index.html-DuH4rw7y.js","assets/index.html-BT9-Niar.js","assets/index.html-Cu3cLCzx.js","assets/index.html-UNxrY2j0.js","assets/index.html-BgtFEey6.js","assets/index.html-D5oCSWS1.js","assets/index.html-B3i2d1sK.js","assets/index.html-CCVgK14s.js","assets/index.html-KSwe53R4.js","assets/index.html-CfxgUKud.js","assets/01.html-BeW7_nlY.js","assets/02.html-D-V1R337.js","assets/03.html-CuI_FV0x.js","assets/04.html-DElwaBhB.js","assets/index.html-BtBlConQ.js","assets/01-the-curl-project.html-Dl0VdxS_.js","assets/02-command-line-options.html-dd_A82XK.js","assets/03-urls.html-B-EV-6gW.js","assets/04-curl-basics.html-Biowv99v.js","assets/05-http.html-DL2vP0Jn.js","assets/index.html-Dslo3LuE.js","assets/01-installation-and-documentation.html-D8DozBQu.js","assets/02-awk-introduction.html-D0mAhBV0.js","assets/03-regular-expressions.html-B2Sco0Ma.js","assets/04-field-separators.html-Da1S2SVZ.js","assets/05-record-separators.html-DJbZbnNt.js","assets/06-in-place-file-editing.html-T2ftFm8f.js","assets/07-using-shell-variables.html-BBWanq1i.js","assets/08-control-structures.html-DEONlG0U.js","assets/09-built-in-functions.html-CQ2Lk5Ax.js","assets/10-multiple-file-input.html-D8Y-1KoW.js","assets/11-processing-multiple-records.html-BEFN9yX7.js","assets/12-two-file-processing.html-OA488Fs1.js","assets/13-dealing-with-duplicates.html-DEIjHzMu.js","assets/14-awk-scripts.html-BpnJN40J.js","assets/15-gotchas-and-tips.html-DIeD4Wzh.js","assets/16-further-reading.html-DvQhoFBl.js","assets/index.html-Dej1wzYW.js","assets/index.html-3WYJYSA1.js","assets/index.html-gTV3e_5Y.js","assets/index.html-Gv_Fjhe1.js","assets/index.html-B6ChWb-B.js","assets/index.html-B_vcb48A.js","assets/01.html-DNIckxJi.js","assets/02.html-UAC_GgJh.js","assets/03.html-W_rpTyBx.js","assets/04.html-BHesD94r.js","assets/05.html-Beu0vxNb.js","assets/06.html-zXSiIc5G.js","assets/07.html-B2PzMhIn.js","assets/08.html-DWVvJ0HF.js","assets/09.html-ZaBJljH6.js","assets/10.html-BogyEtic.js","assets/index.html-BeGbAbjY.js","assets/01.html-CerO5KEE.js","assets/02.html-Ck4Z8OWc.js","assets/03.html-DJHmPDjn.js","assets/04.html-CPWeqv__.js","assets/05.html-h0lCCTSL.js","assets/06.html-D8j6BQ-y.js","assets/07.html-C50qFsVP.js","assets/08.html-B8MU5hp2.js","assets/09.html-ROx-M0zj.js","assets/10.html-B2aY40q0.js","assets/11.html-DRGcmnCe.js","assets/12.html-CAHfJzVl.js","assets/13.html-BI0x6dmv.js","assets/14.html-DQywkDZc.js","assets/15.html-CoEQokwl.js","assets/16.html-CJ1Zpiij.js","assets/17.html-DGE3UXKV.js","assets/18.html-EZzBni7h.js","assets/19.html-Cbig5pcq.js","assets/20.html-BxAwZ3vx.js","assets/21.html-DBx-YEk7.js","assets/22.html-cWdDwf_Y.js","assets/23.html-_PNvhhuT.js","assets/24.html-DEwqq5AV.js","assets/25.html-uCVqrzZ8.js","assets/26.html-D7jVEQ3h.js","assets/27.html-RYBqZbhd.js","assets/28.html-DTWfYlCV.js","assets/29.html-D3lw8LUo.js","assets/30.html-5p2C6SjB.js","assets/31.html-NerMhX_r.js","assets/32.html-BKBXp2sJ.js","assets/33.html-0zmC-U8M.js","assets/index.html-9zmO17o-.js","assets/a.html-BOjj3GcA.js","assets/index.html-Btyovf0u.js","assets/1.html-BNGEXH5w.js","assets/2.html-BEjfgF0g.js","assets/3.html-BtSVMNe_.js","assets/4.html-BF33VLH2.js","assets/5.html-DP9Xzlez.js","assets/index.html-yeFTYGbT.js","assets/01-flight.html-Db4f2S3j.js","assets/02-airline.html-5Foc734M.js","assets/03-airport.html-BkhXI2CN.js","assets/04-simulation.html-D6KB2w-p.js","assets/05-training.html-CvaVd6zp.js","assets/06-data-sources.html-1KimRoHs.js","assets/07-websites-and-catalogs.html-Cpnasc_y.js","assets/index.html-BOirdXsx.js","assets/index.html-D8uMjTQH.js","assets/01.html-BdR2HAgX.js","assets/02.html-Iq-duCJu.js","assets/03.html-CWjTfBFQ.js","assets/04.html-ozshAwTn.js","assets/05.html-C97WN1et.js","assets/06.html-C2PtLv7c.js","assets/07.html-SRrH33xx.js","assets/08.html-C2O03Ge6.js","assets/index.html-CBT8xj7R.js","assets/01.html-DvxSwwtj.js","assets/02.html-DK0riOia.js","assets/03.html-BKHQdpej.js","assets/index.html-Ckwqq7Kp.js","assets/2464.html-ChSM2CK3.js","assets/2503.html-AKVxbfEi.js","assets/index.html-CsXca1wX.js","assets/01.html-D57qN0R0.js","assets/02.html-BiAyUkIx.js","assets/03.html-CWsh7c4M.js","assets/04.html-BjOX8DVq.js","assets/05.html-B8ntXp_p.js","assets/06.html-CMAp0RSI.js","assets/07.html-BrdAejeo.js","assets/08.html-DiZ6rF-z.js","assets/09.html-C9jmKx19.js","assets/10.html-leySExK4.js","assets/11.html-Bb1SsPF8.js","assets/12.html-CztJyCT-.js","assets/13.html-COHBoX7g.js","assets/14.html-ppllLHk0.js","assets/15.html-BOA8qED7.js","assets/16.html-CYokDfLi.js","assets/17.html-CDFIvL0z.js","assets/18.html-BgL6-Y3r.js","assets/index.html-B1JIPCWw.js","assets/01.html-XAnl2KZM.js","assets/02.html-BaES-idH.js","assets/03.html-CMlkfUIp.js","assets/04.html-qp6u7ieA.js","assets/05.html-CAQJ9u1P.js","assets/06.html-CwSC6V6X.js","assets/07.html-Bd-ImpTH.js","assets/08.html-DdoUqmyh.js","assets/09.html-CiVgGQ1V.js","assets/10.html-CONWZOz2.js","assets/11.html-CA04L2AM.js","assets/12.html-BjdNhd43.js","assets/13.html-CTaPcLUo.js","assets/14.html-BiRKKy7_.js","assets/15.html-WdYDgIZy.js","assets/index.html-CRWQNt6g.js","assets/01.html-DK7VnXWD.js","assets/02.html-D5LaJmCR.js","assets/index.html-BNC4Ey2k.js","assets/01-creating-and-destroying-objects.html-BBnvEJiH.js","assets/02-methods-common-to-all-objects.html-CqrGmjcG.js","assets/03-classes-and-interfaces.html-Ba4whK9s.js","assets/04-generics.html-DhZk5SyF.js","assets/05-enums-and-annotations.html-DLiHLegL.js","assets/06-lambda-and-stream.html-IpMOCOkE.js","assets/07-methods.html-CKaIDUay.js","assets/08-general-programming.html-BQ6kil9h.js","assets/09-exceptions.html-Cnb38gqQ.js","assets/10-concurrency.html-D9vCvBcb.js","assets/11-serialization.html-BMZhhekk.js","assets/index.html-gmTK3zUM.js","assets/01.html-RuudXbAv.js","assets/02.html-BmMRGwfI.js","assets/03.html-CF8p0BDM.js","assets/04.html-B9Hj-Fea.js","assets/05.html-Cl8eJNge.js","assets/index.html-6S4LUAMc.js","assets/1.html-DD_He2Za.js","assets/2-1.html-C2bxy9TE.js","assets/2-2.html-B_EAJjtl.js","assets/3-1.html-mo2IazsC.js","assets/index.html-YPooto1D.js","assets/01.html-Cm9YOMeA.js","assets/02.html-Nb75UvNK.js","assets/02A.html-B3_FFxSg.js","assets/02B.html-BJB0Njo0.js","assets/02C.html-2r8Lyfgy.js","assets/02D.html-DAlsh09d.js","assets/02E.html-IWC6hmyA.js","assets/02F.html-C86zl32U.js","assets/02G.html-CqXkklr_.js","assets/02H.html-m8czuvJR.js","assets/02I.html-C67Lkvjp.js","assets/02J.html-CNspbEXo.js","assets/02K.html-DLGfxyu2.js","assets/02L.html-BFPtNxcD.js","assets/02M.html-DfOm4_wG.js","assets/02N.html-DAcWG9rG.js","assets/02O.html-CVyhHUfW.js","assets/02P.html-BEFwN4Mb.js","assets/03.html-_UccsSzS.js","assets/03A.html-Bk66qrjo.js","assets/03B.html-DMA_h0of.js","assets/03C.html-DyFfFu3O.js","assets/03D.html-DvwMW56s.js","assets/03E.html-CChHXJgd.js","assets/03F.html-C-gi2XW9.js","assets/03G.html-CL9ugxNn.js","assets/03H.html-DQVYFFuA.js","assets/03I.html-D6sfuQg4.js","assets/03J.html-vM95o998.js","assets/03K.html-cmJL1N9c.js","assets/03L.html-CNwZ2PZu.js","assets/03M.html-2yedqq02.js","assets/03N.html-BgwC8m5Z.js","assets/03O.html-BSGjgxmO.js","assets/04.html-BAo4PWQy.js","assets/04A.html-Bt0dOEXv.js","assets/04B.html-tT2c4XCt.js","assets/04C.html-mYiFZYK1.js","assets/04D.html-DQNCF4kY.js","assets/04E.html-DmfFqWx6.js","assets/04F.html-F8R12i7Y.js","assets/04G.html-Kn-ATgTi.js","assets/04H.html-CXDm7fHd.js","assets/04I.html-DByM7qnb.js","assets/04J.html-DuHF1q5t.js","assets/04K.html-DcUbCYRI.js","assets/04L.html-BqU_YnHb.js","assets/index.html-Bf6fA0OW.js","assets/a.html-D8ShJUpm.js","assets/247-react-native-tutorial-building-android-apps-with-javascript.html-HzDe6bx6.js","assets/249-gradle-tutorial-for-android-getting-started.html-DhHm4T5T.js","assets/254-getting-started-with-android-wear-with-kotlin.html-CYayoxUi.js","assets/262-dependency-injection-in-android-with-dagger-2-and-kotlin.html-QykQFdbS.js","assets/272-intermediate-recyclerview-tutorial-with-kotlin.html-doT9R-iu.js","assets/30067669-documenting-kotlin-code-for-android-using-kdoc-and-dokka.html-DlyTiQG_.js","assets/31290959-kotlin-sequences-getting-started.html-B7s5CVTw.js","assets/324-viewpager-tutorial-getting-started-in-kotlin.html-BA_2z4Y-.js","assets/523-augmented-reality-in-android-with-google-s-face-api.html-DTeQXGfS.js","assets/853-couchbase-tutorial-for-android-getting-started.html-HpTmqMWP.js","assets/index.html-CG1cr8NH.js","assets/01.html-C3S00bVm.js","assets/02.html-CUbbEd35.js","assets/03.html-D_q1sCGm.js","assets/04.html-DByHE44H.js","assets/05.html-CzkwZ-Vv.js","assets/06.html-BnkEdbTC.js","assets/07.html-CarrWQfm.js","assets/index.html-DFxh13sp.js","assets/2457.html-DAfgohih.js","assets/2478.html-YNXEeNI0.js","assets/2499.html-BNy7BVcM.js","assets/index.html-Dq4uDg98.js","assets/00.html-sSF13ifF.js","assets/01.html-BmOjxmdB.js","assets/02.html-aGp2JIDO.js","assets/03.html-WLKLL5Yc.js","assets/04.html-DJm7Mcjq.js","assets/05.html-lMTYEUtV.js","assets/06.html-CmWuXFqp.js","assets/07.html-Du1iIsQ8.js","assets/08.html-CGCDC10X.js","assets/09.html-D-GtH5Jt.js","assets/10.html-p-ynmhpT.js","assets/11.html-CXJvw1eV.js","assets/12.html-fVPZuzvC.js","assets/13.html-B4aOHWSn.js","assets/14.html-Bh1Oa6ad.js","assets/15.html-Bxt5BilT.js","assets/16.html-BjunkQBu.js","assets/17.html-Ba0gUbWm.js","assets/18.html-B1591Hi6.js","assets/19.html-ButtbRJL.js","assets/20.html-BGWPCJjE.js","assets/21.html-BAfIRi0y.js","assets/index.html-xWQNBfCA.js","assets/index.html-4erGhHHm.js","assets/index.html-CtMLIAzm.js","assets/beacon.html-Co3jXqr3.js","assets/broadcast-channel.html-BwbXog2U.js","assets/clipboard.html-aAj8A-t9.js","assets/fetch.html-DhxrQKVn.js","assets/page-visibility.html-CJGQbVTd.js","assets/resize-observer.html-VpOmeWhe.js","assets/2466.html-lpeT9ptg.js","assets/2467.html-By7C1P6u.js","assets/2479.html-BTV4rrqh.js","assets/2483.html-BNSSnTHY.js","assets/2493.html-DWvPzJEg.js","assets/2504.html-DGCmokEg.js","assets/2505.html-C_NCAvF4.js","assets/2511.html-BhAlWF9B.js","assets/2512.html-D4gjoJBh.js","assets/index.html-CWdM73oq.js","assets/01-css-grid-basics.html-_r6uW9zH.js","assets/02-units-and-utilities.html-BG3-hg-8.js","assets/03-positioning-elements-by-lines.html-d_HxLm0n.js","assets/04-grid-areas.html-C8QUW4aV.js","assets/05-the-implicit-grid.html-CheXMMbM.js","assets/06-creating-responsive-grids.html-CWM6xfkw.js","assets/07-building-an-example-layout.html-Cw9gVSRm.js","assets/index.html-pr0u2qlx.js","assets/00-course-setup.html-DGCKJy5S.js","assets/01-introduction-to-genai.html-DlISkp44.js","assets/02-exploring-and-comparing-different-llms.html-9Gpd483S.js","assets/index.html-BDW35BbN.js","assets/01a.html-CVustPdz.js","assets/01b.html-DfdclWQo.js","assets/01c.html-B93QrOp9.js","assets/01d.html-BDEkLgAl.js","assets/02a.html-CNeeaFH5.js","assets/03a.html-CD3DqWpt.js","assets/03b.html-DYiK_ex7.js","assets/03c.html-B99sBED6.js","assets/03d.html-BanzJEqm.js","assets/index.html-a8txw3vM.js","assets/08-final-note.html-1RENAFLL.js","assets/index.html-CbUUhJJP.js","assets/01.html-C11c3Mhl.js","assets/02.html-ByP6PsYp.js","assets/03.html-DBuym13U.js","assets/04.html-DB5R9evk.js","assets/05.html--xbdfX1B.js","assets/06.html-C5GqUUea.js","assets/07.html-B0LSI0dH.js","assets/08.html-CXHGARbX.js","assets/09.html-BEABMaLT.js","assets/10.html-BN2gkF08.js","assets/11.html-DG2BVMXg.js","assets/12.html-BOT50B6n.js","assets/index.html-q8KBMtHq.js","assets/00.html-CbmZ7zcO.js","assets/01.html-C7S_hqh5.js","assets/02.html-JQnKzY_7.js","assets/index.html-BSLO2Ofa.js","assets/01.html-_9fNSdlN.js","assets/02a.html-D19N0WIB.js","assets/02b.html-Br8EhfWc.js","assets/02c.html-_bwwSUwq.js","assets/02d.html-CLXFw8EX.js","assets/02e.html-DbrDBjNz.js","assets/02f.html-BeF6Hhfq.js","assets/02g.html-uoqQgeB_.js","assets/02h.html-CfUDOtK5.js","assets/02i.html-X1dvDwQn.js","assets/03.html-rN4zBVlF.js","assets/index.html-D9hRmlFX.js","assets/20180818-introducing-jets-a-ruby-serverless-framework.html-C4lnSL23.js","assets/20180907-jets-tutorial-crud-app-introduction-part-1.html-CzXKT4rA.js","assets/20180908-jets-tutorial-deploy-to-aws-lambda-part-2.html-CyW2FxwU.js","assets/20180909-jets-tutorial-debugging-logs-part-3.html-7j7lu6yX.js","assets/20180910-jets-tutorial-background-jobs-part-4.html-C1nQV6fE.js","assets/20180911-jets-tutorial-iam-policies-part-5.html-Dq83IMoF.js","assets/20180912-jets-tutorial-function-properties-part-6.html-CY-n2AU1.js","assets/20180913-jets-tutorial-extra-environments-part-7.html-Ch5PjMj_.js","assets/20180926-jets-tutorial-different-environments-part-8.html-DUpSQrU-.js","assets/20180927-jets-tutorial-polymorphic-support-part-9.html-BZHO8U8y.js","assets/20181112-jets-tutorial-jets-delete.html-Qyg_UhHZ.js","assets/20181212-official-aws-ruby-support-for-jets-serverless-framework.html-BhGzpY2B.js","assets/20181213-jets-image-upload-carrierwave-tutorial-binary-support.html-GnuI4jtr.js","assets/20181221-jets-afterburner-serverless-rails-on-aws-lambda-in-5-minutes.html-CL76Iv2v.js","assets/20190113-build-an-api-service-with-jets-ruby-serverless-framework.html-3xTea_yO.js","assets/20190114-serverless-slack-commands-with-ruby.html-aYkNSnO7.js","assets/20190204-aws-lambda-function-jets-introductory-series-part-1.html-D0iYb3Yb.js","assets/20190205-api-gateway-jets-introductory-series-part-2.html-CUXbufSy.js","assets/20190206-cloudwatch-event-rule-jets-introductory-series-part-3.html-BFcxmllP.js","assets/20190211-hello-world-examples-jets-introductory-series-part-4.html-iTvJTrg1.js","assets/index.html-CQZyLmys.js","assets/index.html-odx6xTYV.js","assets/assembly-code-generated-when-self-is-passed-by-value-reference-or-as-a-smart-pointer.html-C0jrOdyh.js","assets/mapping-arrays-tuples-box-and-option-to-assembly.html-DSiYjHDr.js","assets/rust-enum-and-match-representation-in-assembly.html-CF9uEPHd.js","assets/rust-to-assembly-vector-iteration.html-BEulhMuo.js","assets/01-elegant-code-base.html-C7bu8pms.js","assets/02-variables.html-r5M0RwZL.js","assets/03-basic-types.html-DYU1t4zQ.js","assets/04-ownership.html-kl274VSv.js","assets/05-compound-types.html-CjMPNRdP.js","assets/06-flow-contro.html-DApCzC0a.js","assets/07-pattern-match.html-BhM1ta-9.js","assets/08-method.html-BsGzlU61.js","assets/09-generics-traits.html-XM6gSXnp.js","assets/10-collections.html-BwDRr1d-.js","assets/11-type-conversions.html-CLhwLtp2.js","assets/12-result-panic.html-OM8l6Knd.js","assets/13-crate-module.html-CgZ1MMis.js","assets/14-comments-docs.html-PmVxBUiJ.js","assets/15-formatted-output.html-BL4WRaXP.js","assets/16-lifetime.html-B6SDlMd5.js","assets/17-functional-programing.html-HcDGpAUl.js","assets/18-newtype-sized.html-BM3qrLJr.js","assets/19-smart-pointers.html-DfuA1g-F.js","assets/20-weak.html-DJM4n_jv.js","assets/21-self-referential.html-Brjj-4nQ.js","assets/22-threads.html-C_gm92cf.js","assets/23-global-variables.html-BAHmlYhL.js","assets/24-errors.html-Cx3IzGMN.js","assets/25-unsafe.html-BbxQnAOq.js","assets/26-macro.html-CoeHjgxc.js","assets/27-tests.html-s9riZn5I.js","assets/28-async.html-DuUSp7Jr.js","assets/29-std.html-B6THB50I.js","assets/30-fight-compiler.html-D4S1tmiI.js","assets/index.html-BN4wKNeD.js","assets/01-concepts.html-DftN3K3D.js","assets/02-applying-the-concepts.html-DmSGTnhh.js","assets/03-ecosystem-tools-and-language-features.html-Dr7rapOy.js","assets/04-webassembly-outside-of-the-browser.html-BQkmHVQI.js","assets/index.html-ZBfuBl-n.js","assets/01.html-C46ojz3v.js","assets/02.html-eOthT8SC.js","assets/03.html-B3Jioy4x.js","assets/04.html-D2XMF-Hs.js","assets/05.html-CeXH6m8_.js","assets/06.html-CXB_4RqG.js","assets/07.html-rV9oGAVi.js","assets/08.html-2TAP8mGq.js","assets/09.html-B2eIvT17.js","assets/10.html-Ci4C39Ot.js","assets/100.html-BJv67R06.js","assets/101.html-Dhh6Yj2o.js","assets/11.html-T5cBfHqA.js","assets/12.html-DFe8ZLXc.js","assets/13.html-CTUwVRID.js","assets/14.html-B8iiVoAt.js","assets/15.html-Bs-c5NxK.js","assets/16.html-CUrfTmE5.js","assets/17.html-Cn6lFkjS.js","assets/18.html-90OpDWX7.js","assets/19.html-DHpMAf-Z.js","assets/20.html-9XqEazk1.js","assets/21.html-C44t16bT.js","assets/22.html-BGSTS9qF.js","assets/23.html-DF2hlcP3.js","assets/24.html-MbX29ZHS.js","assets/25.html-BK3Pf8ie.js","assets/26.html-DP2uozhq.js","assets/27.html-Beq7efF2.js","assets/28.html-B_5Xt640.js","assets/29.html-CXbnqEEN.js","assets/30.html-D9t6KNsT.js","assets/31.html-oDx6D79a.js","assets/32.html-pFcQPYLb.js","assets/33.html-6O0nRmG5.js","assets/34.html-b28Abqln.js","assets/35.html-BcyjhlUD.js","assets/36.html-BBD6enIP.js","assets/37.html-DluyKWyT.js","assets/38.html-BHaaKrV_.js","assets/39.html-DsPmpvHZ.js","assets/40.html-BArK-L5c.js","assets/41.html-CT1cShh9.js","assets/42.html-Cr-NRUXX.js","assets/43.html-DIdmc431.js","assets/44.html-DzU5nZI4.js","assets/45.html-qwNaI-p3.js","assets/46.html-DtwvbU_n.js","assets/47.html-D9qCIgQ8.js","assets/48.html-rYJd89En.js","assets/49.html-Yr_c9Dqd.js","assets/50.html-Ci_Ptyye.js","assets/51.html-Bukrg21Y.js","assets/52.html-jLmWejPU.js","assets/53.html-D2uX7Vme.js","assets/54.html-CGd3Lt6z.js","assets/55.html-CWowX1ze.js","assets/56.html-DzpztWp9.js","assets/57.html-AzBwHMSm.js","assets/58.html-D2qZHSyi.js","assets/59.html-D1aj1N2X.js","assets/60.html-CmPU02pc.js","assets/61.html-DHvMYodA.js","assets/62.html--Mf_BVOC.js","assets/63.html-BDiU3RfH.js","assets/64.html-D54Mqwx5.js","assets/65.html-DxBAJFxC.js","assets/66.html-gt0326Ly.js","assets/67.html-D_0QdDKD.js","assets/68.html-DfKxKEp4.js","assets/69.html-33hAdr0K.js","assets/70.html-4un7-G9Y.js","assets/71.html-Drza7_uD.js","assets/72.html-C9wNjLE5.js","assets/73.html-DnFZI8xw.js","assets/74.html-DCwk52yX.js","assets/75.html-DHaXAa5V.js","assets/76.html-C9uK7sN2.js","assets/77.html-CPhObdrr.js","assets/78.html-BYBIjPkx.js","assets/79.html-BI31yiVv.js","assets/80.html-CVyjnc3W.js","assets/81.html-CmNziG0l.js","assets/82.html-BtJktvK8.js","assets/83.html-CeYhWZ01.js","assets/84.html-DGUnjtYg.js","assets/85.html-CC7or11s.js","assets/86.html-D49bPV96.js","assets/87.html-bEjH1Q_B.js","assets/88.html-Dkwz6n5F.js","assets/89.html-zkcFNL_H.js","assets/90.html-BtGf3oaw.js","assets/91.html-CxFawr-6.js","assets/92.html-DejL7rwP.js","assets/93.html-DwcTV3Z_.js","assets/94.html-UbdE_V1j.js","assets/95.html-Ca-5hoWF.js","assets/96.html-CnAAMPBz.js","assets/97.html-B-wRh9N6.js","assets/98.html-BFzKO5OY.js","assets/99.html-C5Xo00eV.js","assets/index.html-Bq4wCauI.js","assets/01.html-DJDrXx_5.js","assets/02.html-DMkV6Wgu.js","assets/03.html-DQcb95Nm.js","assets/04.html-BIOsvht1.js","assets/05.html-BQ0TF5QX.js","assets/06.html-C297UG-7.js","assets/07.html-C57rmlRb.js","assets/08.html-COFUg2F3.js","assets/09.html-CwAavvBi.js","assets/10.html-hlZnnh4p.js","assets/100.html-PAAGB-3i.js","assets/101.html-D6T49pVs.js","assets/11.html-CgtvK6B_.js","assets/12.html-CsoH-ixg.js","assets/13.html-BKzx_jNT.js","assets/14.html-DtspfIP7.js","assets/15.html-2Q-1QzwR.js","assets/16.html-C0lX8g4U.js","assets/17.html-DYOSQnbP.js","assets/18.html-DUJCY7DX.js","assets/19.html-C5aPVLlt.js","assets/20.html-CQC4wWte.js","assets/21.html-DJtm6II2.js","assets/22.html-DdM3QJw1.js","assets/23.html-C8f5cyw5.js","assets/24.html-Q-pFF4v1.js","assets/25.html-B8-LP-Js.js","assets/26.html-DuQx_w18.js","assets/27.html-DRZcS8Zd.js","assets/28.html-BP5dra6a.js","assets/29.html-Bo1NqUz_.js","assets/30.html-CFKVd-6T.js","assets/31.html-e-A8YUg6.js","assets/32.html-Copk_7_6.js","assets/33.html-XHTNNL2R.js","assets/34.html-jEslcLXq.js","assets/35.html-DtDcHEz3.js","assets/36.html-BU8HsGy0.js","assets/37.html-SwW5jndY.js","assets/38.html-BhZbe5ic.js","assets/39.html-DRdktFEC.js","assets/40.html-B1GRvoOr.js","assets/41.html-CzA7FlHq.js","assets/42.html-BjszJZCe.js","assets/43.html-nxzQkSN6.js","assets/44.html-t7CcMDQn.js","assets/45.html-sAF1mMLA.js","assets/46.html-CeQ0Nrsy.js","assets/47.html-zM6XSceq.js","assets/48.html-BsbJ7xq0.js","assets/49.html-M88WOKJ4.js","assets/50.html-CiRrTEZf.js","assets/51.html-CCnuLCs2.js","assets/52.html-BYlJxfG7.js","assets/53.html-C_3zdZjW.js","assets/54.html-Dx5cWx7Y.js","assets/55.html-W-hezGJx.js","assets/56.html-WR4C1ag_.js","assets/57.html-efGehPWq.js","assets/58.html-C7lyCyNw.js","assets/59.html-DZHJnqgp.js","assets/60.html-B_XEZ8cQ.js","assets/61.html-CSuaKmuw.js","assets/62.html-GlRgK1_4.js","assets/63.html-BgznYOZT.js","assets/64.html-C-h3bQbx.js","assets/65.html-CiLMD28o.js","assets/66.html-DhrnBlck.js","assets/67.html-eqtrIovM.js","assets/68.html-C7rD1xZ_.js","assets/69.html-NbnsDnbs.js","assets/70.html-BCjLuzEa.js","assets/71.html-p6Qh2i61.js","assets/72.html-BVUi6zNz.js","assets/73.html-DYIPLvN1.js","assets/74.html-C98Q8duW.js","assets/75.html-Bbv1fElY.js","assets/76.html-C1JSIajh.js","assets/77.html-CrfZyZHF.js","assets/78.html-K27BBfCg.js","assets/79.html-QKmedscO.js","assets/80.html-DUlFT_oZ.js","assets/81.html-CqvVJzBW.js","assets/82.html-D5eHV070.js","assets/83.html-CP302JK4.js","assets/84.html-CRs9UjEo.js","assets/85.html-CPk1gwZ1.js","assets/86.html-BwICsNs8.js","assets/87.html-d3yd8lLH.js","assets/88.html-BjWUDNJR.js","assets/89.html-_Rlk-99y.js","assets/90.html-DGVPyjws.js","assets/91.html-CCnJGEpu.js","assets/92.html-BwEDOJjs.js","assets/93.html-BmOB2Sha.js","assets/94.html-h9If5Gzh.js","assets/95.html-BZkEWvs2.js","assets/96.html-D43C4PI9.js","assets/97.html-BTLkSyUt.js","assets/98.html-BzH0IHIB.js","assets/99.html-B1qTj8_H.js","assets/index.html-C0BNSYyQ.js","assets/6334294-my-app-crashed-now-what.html-ByR9bEnI.js","assets/6398124-swiftui-tutorial-for-ios-creating-charts.html-DZvIBlYA.js","assets/6587213-alamofire-5-tutorial-for-ios-getting-started.html-LQgs0fuq.js","assets/6620276-sqlite-with-swift-tutorial-getting-started.html-DhbSlvmj.js","assets/6742901-protocol-oriented-programming-tutorial-in-swift-5-1-getting-started.html-ByrWfQ-4.js","assets/6747815-uigesturerecognizer-tutorial-getting-started.html-BZF7eLzM.js","assets/6827616-ios-accessibility-getting-started.html-Cb4NUIfk.js","assets/7076593-cocoapods-tutorial-for-swift-getting-started.html-BBkjVY7B.js","assets/7181017-unsafe-swift-using-pointers-and-interacting-with-c.html-Cnxizw7A.js","assets/index.html-2MZnJ801.js","assets/index.html-DDIfyRFT.js","assets/01.html-BdbWfkSJ.js","assets/02.html-CUH4UvL1.js","assets/03.html-rwWqvTa3.js","assets/04.html-chbHl66n.js","assets/05.html-B8KJFwgp.js","assets/06.html-Bn6phx5-.js","assets/07.html-Bduu0BF4.js","assets/08.html-DG3JeXJw.js","assets/09.html-Cnt05uMg.js","assets/10.html-20GwEOvX.js","assets/11.html-Dg9VBgCg.js","assets/12.html-B2iKvafO.js","assets/13.html-cgIiLp5b.js","assets/14.html-Dih3S7Yb.js","assets/15.html-BoR5xzUH.js","assets/16.html-CBMR4yCp.js","assets/17.html-BU4fhXon.js","assets/18.html-oOPwA7r1.js","assets/19.html-DjcPleFv.js","assets/20.html-Bu2vUUJG.js","assets/21.html-cobd0Z6_.js","assets/index.html-DnuqpuGs.js","assets/13-navigation.html-Do5PuxQ9.js","assets/14-alerts-and-menus.html-c4Y4uY7n.js","assets/15-presenting-views.html-XQeTa9uM.js","assets/16-transforming-views.html-C4aj9Fdt.js","assets/17-drawing.html-DZtizcrB.js","assets/index.html-D6_Ecn4n.js","assets/01A.html-CcD8En5S.js","assets/01B.html-DreJOC24.js","assets/01C.html-C05cD_2a.js","assets/01D.html-DSl96mFQ.js","assets/01E.html-DHuk1o7M.js","assets/01F.html-DmQMiAjt.js","assets/02A.html-CFUqkojN.js","assets/02B.html-a03DfnSe.js","assets/02C.html-YjcP1lhc.js","assets/03A.html-CCzlD2Vu.js","assets/03B.html-DJGIWhn0.js","assets/03C.html-DbSg3EEp.js","assets/04A.html-B7wdxZq-.js","assets/04B.html-Bo7CN_aU.js","assets/04C.html-BHY8-pOm.js","assets/05A.html-BC8T6_uX.js","assets/06A.html-SgoRSdcy.js","assets/06B.html-DzuJFAtS.js","assets/06C.html-DF-lsuco.js","assets/07A.html-DhGqSeU_.js","assets/07B.html-m1MDlv8c.js","assets/08A.html-B_9SOJtd.js","assets/08B.html-r1kd6Upq.js","assets/08C.html-kYF8B4In.js","assets/08D.html-Dg5GEEJL.js","assets/08E.html-B37bvuwQ.js","assets/08F.html-CBYHrkXG.js","assets/09A.html-CIfQKnDB.js","assets/09B.html-w0GQe-LV.js","assets/09C.html-DJCvFy6D.js","assets/09D.html-DjPPHoxF.js","assets/09E.html-BeVQwXBX.js","assets/09F.html-Dc_iLFwF.js","assets/09G.html-sNEWguGP.js","assets/09H.html-B9wSL8VV.js","assets/09I.html-Cy-IqzDq.js","assets/09J.html-i0csNsMf.js","assets/10A.html-D2aRFFwo.js","assets/10B.html-DxVssTMZ.js","assets/10C.html-PSFOB3r9.js","assets/10D.html-CklLlbbT.js","assets/20221118-how-to-secure-your-site-in-kubernetes-with-cert-manager-traefik-and-let-s-encrypt.html-BGnUuvyH.js","assets/20221216-how-to-run-serverless-workloads-with-knative-on-digitalocean-kubernetes.html-CSF4hjRr.js","assets/01a-getting-started.html-BGlvhtoS.js","assets/01b-command-line.html-CYTGUw8H.js","assets/01c-text-fu.html-B5ySNi-t.js","assets/01d-advanced-text-fu.html-x0ipAgOl.js","assets/01e-user-management.html-DI0TmFie.js","assets/01f-permissions.html-CRSOg1BE.js","assets/01g-processes.html-D2HjyAxP.js","assets/01h-packages.html-CHSqSeLL.js","assets/02a-devices.html--jGZE1om.js","assets/02b-the-filesystem.html-ZfM8yDaV.js","assets/02c-boot-the-system.html-BUrGy5-v.js","assets/02d-kernel.html-VELgiRWb.js","assets/02e-init.html-KEzlKcGq.js","assets/02f-process-utilization.html-BVvQEqqG.js","assets/02g-logging.html-Cmjy_mPF.js","assets/03a-network-sharing.html-DXV43iy7.js","assets/03b-network-basics.html-DkwCQ9CF.js","assets/03c-subnetting.html-IUAxZPsj.js","assets/03d-routing.html-CLRLZikx.js","assets/03e-network-config.html-xnyswmFO.js","assets/03f-troubleshooting.html-Di55okS0.js","assets/03g-dns.html-DmRPh-ZR.js","assets/01.html-Dq02mE2m.js","assets/02.html-CVbTe-LE.js","assets/03.html-DAf5UY_X.js","assets/04.html-BYy_Hkif.js","assets/05.html-IPvpsc9L.js","assets/06.html-DnDK78hg.js","assets/07.html-0PaPODXt.js","assets/08.html-BAWhzt_J.js","assets/09.html-D6RyvIs9.js","assets/10.html-DVueIvKu.js","assets/11.html-C2ClYxOS.js","assets/12.html-DIeAGjhj.js","assets/13.html-B9w5b0nJ.js","assets/14.html-Ctbv8kBb.js","assets/15.html-CyNcvQWW.js","assets/16.html-Dm3Fbu5a.js","assets/17.html-CDbu5-0b.js","assets/18.html-CbVNK4qZ.js","assets/01A.html-CdiNPa-8.js","assets/01B.html-DJc4K7U3.js","assets/01C.html-Ck1r6bcg.js","assets/01D.html-DeOYeDyL.js","assets/01E.html-ChO8jyjZ.js","assets/01F.html-DVmHGmX2.js","assets/01G.html-HUPuNVaL.js","assets/01H.html-Darswqz0.js","assets/01I.html-B3v_YpLS.js","assets/01J.html-DygBdWkl.js","assets/01K.html-BDXC2vM9.js","assets/01L.html-DMfCLj2a.js","assets/02A.html-D_ODGIcN.js","assets/02B.html-B53HcIL9.js","assets/02C.html-qj9zDwK-.js","assets/02D.html-DBG1Wegq.js","assets/02E.html-CTwhhdTK.js","assets/02F.html-FhTLL51w.js","assets/02G.html-DRLk7gz6.js","assets/02H.html-CULdxwRD.js","assets/02I.html-wDaNEZCE.js","assets/02J.html-fRfywu1O.js","assets/02K.html-DFSeIF1L.js","assets/03A.html-CStJYn5C.js","assets/03B.html-B_s9RNnE.js","assets/03C.html-4DdNM2Fg.js","assets/03D.html-e9d9Z9TQ.js","assets/03E.html-DlsZemcu.js","assets/03F.html-uMUzAUfb.js","assets/03G.html-DzP3tBT3.js","assets/03H.html-D6Ka4Dzr.js","assets/03I.html-CAyAwu3P.js","assets/03J.html-DqIDr8RD.js","assets/04A.html-SvtBK5HL.js","assets/04B.html-CgYm_cBc.js","assets/04C.html-CXeso-Vx.js","assets/04D.html-DwQdxJc7.js","assets/04E.html-B8H2tQdu.js","assets/04F.html-csYfHrCo.js","assets/05A.html-27laUc8Q.js","assets/05B.html-DXMUYi8v.js","assets/05C.html-FDNX7mzc.js","assets/05D.html-VDUOtgRn.js","assets/05E.html-ByV3Ursh.js","assets/06A.html-DjXvQz8A.js","assets/06B.html-Cav5G_w5.js","assets/06C.html-Crv1rhkv.js","assets/06D.html-7ZoD0rHy.js","assets/06E.html-Ckhdffjt.js","assets/06F.html-s-57TQHg.js","assets/06G.html-B_jZGGLC.js","assets/07A.html-BjZtRKg1.js","assets/07B.html-CaNhiaAR.js","assets/07C.html-mZGgLhUT.js","assets/07D.html-Crm3oq_b.js","assets/07E.html-CFVudoCB.js","assets/07F.html-CrCO_reO.js","assets/07G.html-BNJmmKlS.js","assets/07H.html-BBxAZYJu.js","assets/07I.html-DTl5rdrZ.js","assets/07J.html-BTHn2v2h.js","assets/07K.html-BLEc2147.js","assets/07L.html-DoUiCu5m.js","assets/07M.html-CuKtQo6e.js","assets/07N.html-CrJhsUEX.js","assets/07O.html-D3nvEocr.js","assets/07P.html-eP417VFF.js","assets/answering-the-big-question-should-you-learn-swiftui-uikit-or-both.html-BrQ9P0vP.js","assets/dedication.html-CpOgxFjV.js","assets/frequently-asked-questions-about-swiftui.html-DuMKYdYo.js","assets/how-to-follow-this-quick-start-guide.html-wc4KYC_Z.js","assets/migrating-from-uikit-to-swiftui.html-CcULaqhW.js","assets/swiftui-vs-interface-builder-and-storyboards.html-Ba0Q8quc.js","assets/what-is-swiftui.html-iA8HGsYv.js","assets/whats-in-the-basic-template.html-DpZdpNKk.js","assets/adding-items-to-an-order-with-environmentobject.html-BR1wQlVe.js","assets/adding-swipe-to-delete-and-editbutton.html-Lt_Zp9HZ.js","assets/adding-tabview-and-tabitem.html-Dca9_Wa4.js","assets/bindings-and-forms.html-CdERSpiw.js","assets/building-a-menu-using-list.html-CnTmGp2v.js","assets/composing-views-to-create-a-list-row.html-6r54-qX_.js","assets/displaying-a-detail-screen-with-navigationlink.html-DDjKS0tH.js","assets/formatting-interpolated-strings-in-swiftui.html-Bhw8vzrN.js","assets/observable-objects-environment-objects-and-published.html-DZ4R4IHu.js","assets/polishing-designs-with-fonts-and-colors.html-4kt-ixoQ.js","assets/presenting-an-alert.html-USTRpdat.js","assets/swiftui-tutorial-building-a-complete-project.html-DUmIcWfv.js","assets/two-way-bindings-in-swiftui.html-45S2ULne.js","assets/wrap-up-our-swiftui-project-is-complete.html-BO9AYtEv.js","assets/how-to-add-advanced-text-styling-using-attributedstring.html-B1L5csa2.js","assets/how-to-add-spacing-between-letters-in-text.html-Ct5Xnb5z.js","assets/how-to-adjust-text-alignment-using-multilinetextalignment.html-FtrP4Zd-.js","assets/how-to-create-static-labels-with-a-text-view.html-DWjMkzMR.js","assets/how-to-customize-the-way-links-are-opened.html-DtbDAHLh.js","assets/how-to-format-dates-inside-text-views.html-Bx6JYd3W.js","assets/how-to-format-text-inside-text-views.html-Bm7bHVu3.js","assets/how-to-let-users-select-text.html-BNMCHdkT.js","assets/how-to-make-textfield-uppercase-or-lowercase-using-textcase.html-kZZOz5ii.js","assets/how-to-mark-content-as-a-placeholder-using-redacted.html-DdUXX9Hv.js","assets/how-to-mark-content-as-private-using-privacysensitive.html-Zoktjnnp.js","assets/how-to-render-markdown-content-in-text.html-Ck_zoJBn.js","assets/how-to-show-text-and-an-icon-side-by-side-using-label.html-DFQ3VHbZ.js","assets/how-to-style-text-views-with-fonts-colors-line-spacing-and-more.html-BbBQENQH.js","assets/how-to-adjust-the-way-an-image-is-fitted-to-its-space.html-CetOwetT.js","assets/how-to-display-solid-shapes.html-De2mj0sP.js","assets/how-to-draw-images-using-image-views.html-D4FX8Cyg.js","assets/how-to-draw-part-of-a-solid-shape-using-trim.html-BwfFVwLt.js","assets/how-to-dynamically-adjust-the-color-of-an-sf-symbol.html-Bn7il-o1.js","assets/how-to-fill-and-stroke-shapes-at-the-same-time.html-CJRlZcGD.js","assets/how-to-get-custom-colors-and-transparency-with-sf-symbols.html-DGB3aa4P.js","assets/how-to-integrate-spritekit-using-spriteview.html-DQ1EecdO.js","assets/how-to-let-users-import-videos-using-photospicker.html-04Iz8UVQ.js","assets/how-to-let-users-select-pictures-using-photospicker.html-CcBit_ZC.js","assets/how-to-load-a-remote-image-from-a-url.html-CQsFbHAe.js","assets/how-to-play-movies-with-videoplayer.html-BO-N2mQg.js","assets/how-to-render-a-gradient.html-S7PMHAGN.js","assets/how-to-render-images-using-sf-symbols.html-Cw1fybfl.js","assets/how-to-tile-an-image.html-nvkCD2J2.js","assets/how-to-use-images-and-other-views-as-a-backgrounds.html-CBuGI5XO.js","assets/when-should-you-use-containerrelativeshape.html-Dw7JT329.js","assets/how-to-control-layout-priority-using-layoutpriority.html-C5oHu_Kk.js","assets/how-to-control-spacing-around-individual-views-using-padding.html-DUJPguYU.js","assets/how-to-create-a-custom-layout-using-the-layout-protocol.html-DqyjbLOP.js","assets/how-to-create-an-adaptive-layout-with-viewthatfits.html-vRa-i1AU.js","assets/how-to-create-views-in-a-loop-using-foreach.html-DYORLXwY.js","assets/how-to-dynamically-change-between-vstack-and-hstack.html-HHO0MhyO.js","assets/how-to-give-a-view-a-custom-frame.html-iYdg5Dij.js","assets/how-to-hide-the-home-indicator-and-other-system-ui.html-FNB8g-Mu.js","assets/how-to-inset-the-safe-area-with-custom-content.html-DIBHhy5N.js","assets/how-to-make-two-views-the-same-width-or-height.html-B4b2PBpe.js","assets/how-to-place-content-outside-the-safe-area.html-BfsjR2-9.js","assets/how-to-provide-relative-sizes-using-geometryreader.html-CKIfPx9r.js","assets/how-to-provide-visual-structure-using-foreground-styles.html-CdqJaTIR.js","assets/how-to-return-different-view-types.html-DcRMdaCc.js","assets/how-to-stop-system-gestures-from-interfering-with-your-own.html-DUtoBty0.js","assets/how-to-add-horizontal-and-vertical-scrolling-using-scrollview.html-BrCvUx1y.js","assets/how-to-automatically-switch-between-hstack-and-vstack-based-on-size-class.html-DmspmelQ.js","assets/how-to-change-the-order-of-view-layering-using-z-index.html-D_uePDV9.js","assets/how-to-create-3d-effects-like-cover-flow-using-scrollview-and-geometryreader.html-BNNAhD8w.js","assets/how-to-create-different-layouts-using-size-classes.html-GKVOEVAI.js","assets/how-to-create-multi-column-lists-using-table.html-CQfZZx2q.js","assets/how-to-create-stacks-using-vstack-and-hstack.html-04aDKUPT.js","assets/how-to-customize-stack-layouts-with-alignment-and-spacing.html-Di979dd1.js","assets/how-to-dismiss-the-keyboard-when-the-user-scrolls.html-Bl9ZaQGW.js","assets/how-to-force-views-to-one-side-inside-a-stack-using-spacer.html-mvnxAvZZ.js","assets/how-to-hide-the-scroll-indicators-in-scrollview-list-and-more.html-yyfmWlVa.js","assets/how-to-layer-views-on-top-of-each-other-using-zstack.html-BgC1xj8T.js","assets/how-to-lazy-load-views-using-lazyvstack-and-lazyhstack.html-DggKclO7.js","assets/how-to-make-a-fixed-size-spacer.html-DRSFQRIS.js","assets/how-to-make-a-scroll-view-move-to-a-location-using-scrollviewreader.html-BkMfaHet.js","assets/how-to-position-views-in-a-fixed-grid.html-BdRGBpVe.js","assets/how-to-position-views-in-a-grid-using-lazyvgrid-and-lazyhgrid.html-QhcGn85U.js","assets/how-to-add-a-border-to-a-textfield.html-BeqzIUT0.js","assets/how-to-add-a-placeholder-to-a-textfield.html-CF58STAo.js","assets/how-to-create-a-date-picker-and-read-values-from-it.html-D_89pgtp.js","assets/how-to-create-a-picker-and-read-values-from-it.html-BbbMfTP5.js","assets/how-to-create-a-segmented-control-and-read-values-from-it.html-DA4nGpgK.js","assets/how-to-create-a-slider-and-read-values-from-it.html-Cte_pPpi.js","assets/how-to-create-a-stepper-and-read-values-from-it.html-HK-o1qEi.js","assets/how-to-create-a-tappable-button.html-7_jodYOq.js","assets/how-to-create-a-toggle-switch.html-DMwIG6uQ.js","assets/how-to-create-multi-line-editable-text-with-texteditor.html-DpjteYDA.js","assets/how-to-create-secure-text-fields-using-securefield.html-CCwTBwJi.js","assets/how-to-customize-the-submit-button-for-textfield-securefield-and-texteditor.html-BE02Y5_o.js","assets/how-to-disable-autocorrect-in-a-textfield.html-CQ4_1w0B.js","assets/how-to-disable-the-overlay-color-for-images-inside-button-and-navigationlink.html-BeC2Xwv0.js","assets/how-to-dismiss-the-keyboard-for-a-textfield.html-Ea7mfMCo.js","assets/how-to-format-a-textfield-for-numbers.html-CWNl4N_P.js","assets/how-to-get-bordered-buttons-that-stand-out.html-CXVsu4f5.js","assets/how-to-group-views-together-with-controlgroup.html-B8Uwvavk.js","assets/how-to-hide-the-label-of-a-picker-stepper-toggle-and-more-using-labelshidden.html-BTICVjY4.js","assets/how-to-let-the-user-select-multiple-dates.html-BiROvxNn.js","assets/how-to-let-users-select-a-color-with-colorpicker.html-owlBsnym.js","assets/how-to-make-a-textfield-expand-vertically-as-the-user-types.html-DfLsy7K-.js","assets/how-to-make-a-textfield-or-texteditor-have-default-focus.html-B9kVHX5Z.js","assets/how-to-open-web-links-in-safari.html-CiB9wKCX.js","assets/how-to-read-text-from-a-textfield.html-CPuCFzFR.js","assets/how-to-show-a-map-view.html-Cm_ggdHW.js","assets/how-to-show-annotations-in-a-map-view.html-3u9sK1GZ.js","assets/how-to-show-indeterminate-progress-using-progressview.html-DLCEHnwR.js","assets/how-to-show-progress-on-a-task-using-progressview.html-BjitRrlB.js","assets/how-to-take-action-when-the-user-submits-a-textfield.html-Bz11RsQb.js","assets/working-with-state.html-CfcxVGNx.js","assets/how-to-add-a-toolbar-to-the-keyboard.html-B2jOUl41.js","assets/how-to-add-an-appdelegate-to-a-swiftui-app.html-BPPiUshY.js","assets/how-to-add-keyboard-shortcuts-using-keyboardshortcut.html-iBCiVI_b.js","assets/how-to-control-which-view-is-shown-when-your-app-launches.html-DKxJzEXX.js","assets/how-to-detect-device-rotation.html-CT4H1v1s.js","assets/how-to-detect-when-your-app-moves-to-the-background-or-foreground-with-scenephase.html-DVfPqRAO.js","assets/how-to-let-the-user-paste-data-into-your-app.html-Bn4q2xi3.js","assets/how-to-let-users-find-and-replace-text.html-x4Y0z-FV.js","assets/how-to-let-users-share-content-using-the-system-share-sheet.html-DBnij5PD.js","assets/how-to-respond-to-view-lifecycle-events-onappear-and-ondisappear.html-CpbtLKOj.js","assets/how-to-run-an-asynchronous-task-when-a-view-is-shown.html-w_6WTU3S.js","assets/how-to-run-code-when-your-app-launches.html-B72gOX6U.js","assets/how-to-support-drag-and-drop-in-swiftui.html-FiMht2Pw.js","assets/how-to-add-a-gesture-recognizer-to-a-view.md.html-DEMojceR.js","assets/how-to-control-the-tappable-area-of-a-view-using-contentshape.html-bLBgR0gU.js","assets/how-to-create-gesture-chains-using-sequencedbefore.html-00DpN9Z1.js","assets/how-to-detect-shake-gestures.html-PbBQi-ZS.js","assets/how-to-detect-the-location-of-a-tap-inside-a-view.html-vJjXiFZ4.js","assets/how-to-detect-the-user-hovering-over-a-view.html-dD9z7PT9.js","assets/how-to-disable-taps-for-a-view-using-allowshittesting.html-DwTjViOf.js","assets/how-to-force-one-gesture-to-recognize-before-another-using-highprioritygesture.html-jKSTvBsV.js","assets/how-to-make-two-gestures-recognize-at-the-same-time-using-simultaneousgesture.html-D_ANeSn_.js","assets/how-to-read-tap-and-double-tap-gestures.html-BubR7-bs.js","assets/how-to-create-constant-bindings.html-BWIf-Uzz.js","assets/how-to-create-custom-bindings.html-DbCTTrVb.js","assets/how-to-run-some-code-when-state-changes-using-onchange.html-z72qrGd7.js","assets/how-to-send-state-updates-manually-using-objectwillchange.html-DGsEUBYF.js","assets/how-to-show-different-images-and-other-views-in-light-or-dark-mode.html-pbVVTCwV.js","assets/how-to-use-a-timer-with-swiftui.html-Cu228UDR.js","assets/how-to-use-environmentobject-to-share-data-between-views.html-CZ_6eKFG.js","assets/how-to-use-observedobject-to-manage-state-from-external-objects.html-rDD53CnS.js","assets/how-to-use-stateobject-to-create-and-monitor-external-objects.html-LwWN62oG.js","assets/whats-the-difference-between-observedobject-state-and-environmentobject.html-C6wrYQiP.js","assets/10-lists.html-CABvYLSN.js","assets/11-forms.html-1EyAV1SZ.js","assets/12-containers.html-WDqt-YS4.js","assets/404.html-C2fatFWi.js","assets/index.html-FeG_kOnz.js","assets/index.html-CGf1pUsM.js","assets/index.html-D09cQoal.js","assets/index.html-zlS6Dth5.js","assets/index.html-BUdqB6OD.js","assets/index.html-rjHddlF4.js","assets/index.html-3TpAG358.js","assets/index.html-DmFur3Uw.js","assets/index.html-CTWJ6vnM.js","assets/index.html-CkA1KCkB.js","assets/index.html-CiRxvxG_.js","assets/index.html-BMLkiadA.js","assets/index.html-C37OHPqb.js","assets/index.html-GwaqkL2H.js","assets/index.html-By5jBpr1.js","assets/index.html-klC6t_CQ.js","assets/index.html-CNEHkXEZ.js","assets/index.html-zvslILlJ.js","assets/index.html-DoTzf2L4.js","assets/index.html-YnnudL_H.js","assets/index.html-BHqwo6t_.js","assets/index.html-CijrV6au.js","assets/index.html-DJn4rkw0.js","assets/index.html-TavN0N4g.js","assets/index.html-Dv7bdFdV.js","assets/index.html--sFGEVy5.js","assets/index.html-_QanrE_d.js","assets/index.html-D14IIe4D.js","assets/index.html-Cy0JgDbO.js","assets/index.html-DILaFZZq.js","assets/index.html-mDtVaKdp.js","assets/index.html-C0dGdHrC.js","assets/index.html-DPlFriV6.js","assets/index.html-DMGLtZ3U.js","assets/index.html-BGGgrdBI.js","assets/index.html-CDUh7H21.js","assets/index.html-wA0ooXgu.js","assets/index.html-B9cjdnLZ.js","assets/index.html-B7cnHXZC.js","assets/index.html-DYdbO1U1.js","assets/index.html-CCRFx-1x.js","assets/index.html-DrxrR2KZ.js","assets/index.html-C6q8VItM.js","assets/index.html-BQ-sO0HF.js","assets/index.html-C2zcq86o.js","assets/index.html-DMGShEqx.js","assets/index.html-CT9Qb_2y.js","assets/index.html-Dsk0MWnt.js","assets/index.html-D0bLie-1.js","assets/index.html-BsuF6A6x.js","assets/index.html-CFhvGPE8.js","assets/index.html-Be3WT7FZ.js","assets/index.html-C9YH3OTi.js","assets/index.html-DaXgWK1C.js","assets/index.html-BLWDkI0g.js","assets/index.html-Cbu9J9v4.js","assets/index.html-HG0dWfHb.js","assets/index.html-CumryISd.js","assets/index.html-CPjhLiOm.js","assets/index.html-C-ItrEcM.js","assets/index.html-BrV6YX_Z.js","assets/index.html-CCiBPNoA.js","assets/index.html-CgfcjpaY.js","assets/index.html--aDh66SH.js","assets/index.html-CbQOSZd3.js","assets/index.html-xYTI02LE.js","assets/index.html-BOqtXB5o.js","assets/index.html-CG8rpHB7.js","assets/index.html-Ck1J7tXT.js","assets/index.html-CRy5np1T.js","assets/index.html-DQLAPt7u.js","assets/index.html-BxTEnGY2.js","assets/index.html-DMtX3R1z.js","assets/index.html-1eBeCLqA.js","assets/index.html-C7a9aaHA.js","assets/index.html-BaqIMMCq.js","assets/index.html-SvzqocGv.js","assets/index.html-QclCe5N9.js","assets/index.html-BU43jHAz.js","assets/index.html-CSIWdPQC.js","assets/index.html-wXZIhQi4.js","assets/index.html-DeVZMlSE.js","assets/index.html-ClSiaRQ7.js","assets/index.html-CLLMM4Zq.js","assets/index.html-BZpMC_RP.js","assets/index.html-CeebZYdC.js","assets/index.html-BEyEufN6.js","assets/index.html-DXvzQzzi.js","assets/index.html-CNrZRuP_.js","assets/index.html-B97Zgoc7.js","assets/index.html-D2cYhI3a.js","assets/index.html-BPuYXMd3.js","assets/index.html-OlzJmAC3.js","assets/index.html-CDrxDNfV.js","assets/index.html-BSUqY0Zh.js","assets/index.html-ClzPlBgN.js","assets/index.html-BBUnGuXZ.js","assets/index.html-ZX6vQZNY.js","assets/index.html-hIQAYqld.js","assets/index.html-CesyxSnj.js","assets/index.html-DQgjIcTL.js","assets/index.html-Xis63Mds.js","assets/index.html-CPK9MXSY.js","assets/index.html-DFyJ2ZYF.js","assets/index.html-CZPVDg0Y.js","assets/index.html-B7wbutqk.js","assets/index.html-CN5a3EQz.js","assets/index.html-CCbfyDzJ.js","assets/index.html-DWVD-KiN.js","assets/index.html-DarOfBQM.js","assets/index.html-dD1bCHak.js","assets/index.html-36X0Gf13.js","assets/index.html-PfvUpqPw.js","assets/index.html-CiUhRwyF.js","assets/index.html-BXNlmxHJ.js","assets/index.html-DCHCYv4r.js","assets/index.html-TFGJEJkT.js","assets/index.html-CimCM59l.js","assets/index.html-DICQXdK1.js","assets/index.html-DEmrfy7t.js","assets/index.html-D8oiLt8J.js","assets/index.html-w32Q864_.js","assets/index.html-DfIaYeIn.js","assets/index.html-rpmJtY7O.js","assets/index.html-oYoYe9Xs.js","assets/index.html-pai_MM9h.js","assets/index.html-DhmOtsyb.js","assets/index.html-jx5nUzHP.js","assets/index.html-BkAXS_kx.js","assets/index.html-BqJqH3lT.js","assets/index.html-BE2coCC4.js","assets/index.html-CyC9K76O.js","assets/index.html-CC_JLfli.js","assets/index.html-DxbYaoQT.js","assets/index.html-BOvhiCZa.js","assets/index.html-BJVnZvd_.js","assets/index.html-JBftlFab.js","assets/index.html-Bo6hImpr.js","assets/index.html-Bw2XxxGI.js","assets/index.html-D1iM264z.js","assets/index.html-D3rkK7zH.js","assets/index.html-Ce6QhC9y.js","assets/index.html-DoCab9_m.js","assets/index.html-DA4FROSN.js","assets/index.html-Aox0Iz3D.js","assets/index.html-Co_tvmmk.js","assets/index.html-B5UYaoil.js","assets/index.html-GGg6i6AA.js","assets/index.html-BENjuB06.js","assets/index.html-yR238lNJ.js","assets/index.html-Nno4s6gJ.js","assets/index.html-Ba5x70vc.js","assets/index.html-B3IOFCho.js","assets/index.html-D7PHd0Ap.js","assets/index.html-B5ouTfbK.js","assets/index.html-pbhhviq9.js","assets/index.html-CR_LSW1W.js","assets/index.html-qw8fhzno.js","assets/index.html-BQRVbiN-.js","assets/index.html-BLXBf-sJ.js","assets/index.html-WGCy5RnI.js","assets/index.html-BDBumb8_.js","assets/index.html-D354V8sI.js","assets/index.html-FESV0RkD.js","assets/index.html-dJd0QbUM.js","assets/index.html-CLWNK29t.js","assets/index.html-y7lFS8sf.js","assets/index.html-D4e-8fB6.js","assets/index.html-D6T7V8wj.js","assets/index.html-CPMfXDei.js","assets/index.html-Dv6s9FWX.js","assets/index.html-Do9TSUFn.js","assets/index.html--LSorIq4.js","assets/index.html-B7yY2aHN.js","assets/index.html-LigH_jHO.js","assets/index.html-PY0xHU8a.js","assets/index.html-DfpLged-.js","assets/index.html-Z-fzblzb.js","assets/index.html-DrLyehN5.js","assets/index.html-BXlAdkU6.js","assets/index.html-BDWcmmiq.js","assets/index.html-CAfkkprK.js","assets/index.html-CyzAxZVz.js","assets/index.html-BC8LNDCp.js","assets/index.html-HF9CHQFg.js","assets/index.html-FpHJT_B8.js","assets/index.html-BKuBwl83.js","assets/index.html-_xyH0o_c.js","assets/index.html-lkApk1T7.js","assets/index.html-C7MnsQVS.js","assets/index.html-CyPSd4gB.js","assets/index.html-BxeAwH2S.js","assets/index.html-C7wHg8JM.js","assets/index.html-BcZnNGyE.js","assets/index.html-Bk6LNv7R.js","assets/index.html-SLQPH_sQ.js","assets/index.html-DwceoaGt.js","assets/index.html-C4RDFaYc.js","assets/index.html-DUHH8y6l.js","assets/index.html-CIB7-_CQ.js","assets/index.html-CaQGUl3e.js","assets/index.html-BhA5C3lf.js","assets/index.html-C14tE3k2.js","assets/index.html-B7_xRRKm.js","assets/index.html-D2ycGopx.js","assets/index.html-DfETJ65Y.js","assets/index.html-R6t4Atgn.js","assets/index.html-ChlOcnF0.js","assets/index.html-DWLf1h7E.js","assets/index.html-D4CWSVwM.js","assets/index.html-D0qn0v_m.js","assets/index.html-Byu_JU44.js","assets/index.html-Cn2ElaoR.js","assets/index.html-CMXQ4Vmo.js","assets/index.html-DT97tU6G.js","assets/index.html-CprnTTfn.js","assets/index.html-CM_VoRhD.js","assets/index.html-D39GGYNC.js","assets/index.html-MdanFJJr.js","assets/index.html-CAw5A8Pj.js","assets/index.html-1nwOL7oM.js","assets/index.html-CqTuXkVv.js","assets/index.html-D9V_s5n4.js","assets/index.html-D-j5Pffw.js","assets/index.html-CNvWKnz0.js","assets/index.html-DD9gvI4p.js","assets/index.html-C9Z6BxsI.js","assets/index.html-CH9RLg63.js","assets/index.html--xRu7_Wq.js","assets/index.html-BxIwz3yV.js","assets/vidstack-player-CvSJCBYb.js","assets/vidstack-CVFRE1ST-FRdqOdVG.js","assets/vidstack-player-layouts-zB0QUYwG.js","assets/vidstack-G0VUAMv_-C1mJNUNM.js","assets/vidstack-player-ui-VHYGs75p.js","assets/playground.min-C8EaEQw1.js","assets/commonjsHelpers-Cpj98o6Y.js","assets/mermaid.core-CALYlN9I.js","assets/vue-repl-CaXs_9TH.js","assets/utils-B8VQ4rym-D7HXbP0h.js","assets/codemirror-editor-pVNjQiv6.js","assets/Profile-CiCtAz_O.js","assets/Shield-Bs2J37pE.js","assets/ShieldsGroup-CYH2lNsU.js","assets/TagLinks-CliSQQhu.js","assets/ToCLocal-Dtdtjx6A.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}

import{h as Jn,n as er}from"./chunk-SVG5OEFH.js";Jn();er();var X={context:void 0,registry:void 0,effects:void 0,done:!1,getContextId(){return Zo(this.context.count)},getNextContextId(){return Zo(this.context.count++)}};function Zo(e){let t=String(e),n=t.length-1;return X.context.id+(n?String.fromCharCode(96+n):"")+t}function Rr(e){X.context=e}function Ea(){return{...X.context,id:X.getNextContextId(),count:0}}var Aa=!1,Ma=(e,t)=>e===t,ir=Symbol("solid-proxy"),ui=typeof Proxy=="function",Dn=Symbol("solid-track"),sr={equals:Ma},Jo=null,di=wi,Ke=1,kn=2,fi={owned:null,cleanups:null,context:null,owner:null};var Y=null,_=null,an=null,sn=null,re=null,Se=null,De=null,ur=0;function St(e,t){let n=re,r=Y,o=e.length===0,i=t===void 0?r:t,l=o?fi:{owned:null,cleanups:null,context:i?i.context:null,owner:i},a=o?e:()=>e(()=>pe(()=>Pt(l)));Y=l,re=null;try{return nt(a,!0)}finally{re=n,Y=r}}function z(e,t){t=t?Object.assign({},sr,t):sr;let n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=o=>(typeof o=="function"&&(_&&_.running&&_.sources.has(n)?o=o(n.tValue):o=o(n.value)),bi(n,o));return[pi.bind(n),r]}function gi(e,t,n){let r=dr(e,t,!0,Ke);an&&_&&_.running?Se.push(r):cn(r)}function B(e,t,n){let r=dr(e,t,!1,Ke);an&&_&&_.running?Se.push(r):cn(r)}function V(e,t,n){di=Pa;let r=dr(e,t,!1,Ke),o=zr&&$e(zr);o&&(r.suspense=o),(!n||!n.render)&&(r.user=!0),De?De.push(r):cn(r)}function T(e,t,n){n=n?Object.assign({},sr,n):sr;let r=dr(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,an&&_&&_.running?(r.tState=Ke,Se.push(r)):cn(r),pi.bind(r)}function hi(e){return nt(e,!1)}function pe(e){if(!sn&&re===null)return e();let t=re;re=null;try{return sn?sn.untrack(e):e()}finally{re=t}}function ct(e,t,n){let r=Array.isArray(e),o,i=n&&n.defer;return l=>{let a;if(r){a=Array(e.length);for(let c=0;c<e.length;c++)a[c]=e[c]()}else a=e();if(i)return i=!1,l;let s=pe(()=>t(a,o,l));return o=a,s}}function ut(e){V(()=>pe(e))}function U(e){return Y===null||(Y.cleanups===null?Y.cleanups=[e]:Y.cleanups.push(e)),e}function lr(){return Y}function Ta(e,t){let n=Y,r=re;Y=e,re=null;try{return nt(t,!0)}catch(o){fr(o)}finally{Y=n,re=r}}function yi(e){if(_&&_.running)return e(),_.done;let t=re,n=Y;return Promise.resolve().then(()=>{re=t,Y=n;let r;return(an||zr)&&(r=_||(_={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),r.done||(r.done=new Promise(o=>r.resolve=o)),r.running=!0),nt(e,!1),re=Y=null,r?r.done:void 0})}var[Oa,ei]=z(!1);function mi(){return[Oa,yi]}function Ee(e,t){let n=Symbol("context");return{id:n,Provider:La(n),defaultValue:e}}function $e(e){let t;return Y&&Y.context&&(t=Y.context[e.id])!==void 0?t:e.defaultValue}function vi(e){let t=T(e),n=T(()=>Kr(t()));return n.toArray=()=>{let r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}var zr;function pi(){let e=_&&_.running;if(this.sources&&(e?this.tState:this.state))if((e?this.tState:this.state)===Ke)cn(this);else{let t=Se;Se=null,nt(()=>ar(this),!1),Se=t}if(re){let t=this.observers?this.observers.length:0;re.sources?(re.sources.push(this),re.sourceSlots.push(t)):(re.sources=[this],re.sourceSlots=[t]),this.observers?(this.observers.push(re),this.observerSlots.push(re.sources.length-1)):(this.observers=[re],this.observerSlots=[re.sources.length-1])}return e&&_.sources.has(this)?this.tValue:this.value}function bi(e,t,n){let r=_&&_.running&&_.sources.has(e)?e.tValue:e.value;if(!e.comparator||!e.comparator(r,t)){if(_){let o=_.running;(o||!n&&_.sources.has(e))&&(_.sources.add(e),e.tValue=t),o||(e.value=t)}else e.value=t;e.observers&&e.observers.length&&nt(()=>{for(let o=0;o<e.observers.length;o+=1){let i=e.observers[o],l=_&&_.running;l&&_.disposed.has(i)||((l?!i.tState:!i.state)&&(i.pure?Se.push(i):De.push(i),i.observers&&xi(i)),l?i.tState=Ke:i.state=Ke)}if(Se.length>1e6)throw Se=[],new Error},!1)}return t}function cn(e){if(!e.fn)return;Pt(e);let t=ur;ti(e,_&&_.running&&_.sources.has(e)?e.tValue:e.value,t),_&&!_.running&&_.sources.has(e)&&queueMicrotask(()=>{nt(()=>{_&&(_.running=!0),re=Y=e,ti(e,e.tValue,t),re=Y=null},!1)})}function ti(e,t,n){let r,o=Y,i=re;re=Y=e;try{r=e.fn(t)}catch(l){return e.pure&&(_&&_.running?(e.tState=Ke,e.tOwned&&e.tOwned.forEach(Pt),e.tOwned=void 0):(e.state=Ke,e.owned&&e.owned.forEach(Pt),e.owned=null)),e.updatedAt=n+1,fr(l)}finally{re=i,Y=o}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?bi(e,r,!0):_&&_.running&&e.pure?(_.sources.add(e),e.tValue=r):e.value=r,e.updatedAt=n)}function dr(e,t,n,r=Ke,o){let i={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:Y,context:Y?Y.context:null,pure:n};if(_&&_.running&&(i.state=0,i.tState=r),Y===null||Y!==fi&&(_&&_.running&&Y.pure?Y.tOwned?Y.tOwned.push(i):Y.tOwned=[i]:Y.owned?Y.owned.push(i):Y.owned=[i]),sn&&i.fn){let[l,a]=z(void 0,{equals:!1}),s=sn.factory(i.fn,a);U(()=>s.dispose());let c=()=>yi(a).then(()=>d.dispose()),d=sn.factory(i.fn,c);i.fn=u=>(l(),_&&_.running?d.track(u):s.track(u))}return i}function En(e){let t=_&&_.running;if((t?e.tState:e.state)===0)return;if((t?e.tState:e.state)===kn)return ar(e);if(e.suspense&&pe(e.suspense.inFallback))return e.suspense.effects.push(e);let n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<ur);){if(t&&_.disposed.has(e))return;(t?e.tState:e.state)&&n.push(e)}for(let r=n.length-1;r>=0;r--){if(e=n[r],t){let o=e,i=n[r+1];for(;(o=o.owner)&&o!==i;)if(_.disposed.has(o))return}if((t?e.tState:e.state)===Ke)cn(e);else if((t?e.tState:e.state)===kn){let o=Se;Se=null,nt(()=>ar(e,n[0]),!1),Se=o}}}function nt(e,t){if(Se)return e();let n=!1;t||(Se=[]),De?n=!0:De=[],ur++;try{let r=e();return Da(n),r}catch(r){n||(De=null),Se=null,fr(r)}}function Da(e){if(Se&&(an&&_&&_.running?Ia(Se):wi(Se),Se=null),e)return;let t;if(_){if(!_.promises.size&&!_.queue.size){let r=_.sources,o=_.disposed;De.push.apply(De,_.effects),t=_.resolve;for(let i of De)"tState"in i&&(i.state=i.tState),delete i.tState;_=null,nt(()=>{for(let i of o)Pt(i);for(let i of r){if(i.value=i.tValue,i.owned)for(let l=0,a=i.owned.length;l<a;l++)Pt(i.owned[l]);i.tOwned&&(i.owned=i.tOwned),delete i.tValue,delete i.tOwned,i.tState=0}ei(!1)},!1)}else if(_.running){_.running=!1,_.effects.push.apply(_.effects,De),De=null,ei(!0);return}}let n=De;De=null,n.length&&nt(()=>di(n),!1),t&&t()}function wi(e){for(let t=0;t<e.length;t++)En(e[t])}function Ia(e){for(let t=0;t<e.length;t++){let n=e[t],r=_.queue;r.has(n)||(r.add(n),an(()=>{r.delete(n),nt(()=>{_.running=!0,En(n)},!1),_&&(_.running=!1)}))}}function Pa(e){let t,n=0;for(t=0;t<e.length;t++){let r=e[t];r.user?e[n++]=r:En(r)}if(X.context){if(X.count){X.effects||(X.effects=[]),X.effects.push(...e.slice(0,n));return}Rr()}for(X.effects&&(X.done||!X.count)&&(e=[...X.effects,...e],n+=X.effects.length,delete X.effects),t=0;t<n;t++)En(e[t])}function ar(e,t){let n=_&&_.running;n?e.tState=0:e.state=0;for(let r=0;r<e.sources.length;r+=1){let o=e.sources[r];if(o.sources){let i=n?o.tState:o.state;i===Ke?o!==t&&(!o.updatedAt||o.updatedAt<ur)&&En(o):i===kn&&ar(o,t)}}}function xi(e){let t=_&&_.running;for(let n=0;n<e.observers.length;n+=1){let r=e.observers[n];(t?!r.tState:!r.state)&&(t?r.tState=kn:r.state=kn,r.pure?Se.push(r):De.push(r),r.observers&&xi(r))}}function Pt(e){let t;if(e.sources)for(;e.sources.length;){let n=e.sources.pop(),r=e.sourceSlots.pop(),o=n.observers;if(o&&o.length){let i=o.pop(),l=n.observerSlots.pop();r<o.length&&(i.sourceSlots[l]=r,o[r]=i,n.observerSlots[r]=l)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)Pt(e.tOwned[t]);delete e.tOwned}if(_&&_.running&&e.pure)Si(e,!0);else if(e.owned){for(t=e.owned.length-1;t>=0;t--)Pt(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}_&&_.running?e.tState=0:e.state=0}function Si(e,t){if(t||(e.tState=0,_.disposed.add(e)),e.owned)for(let n=0;n<e.owned.length;n++)Si(e.owned[n])}function Fa(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function ni(e,t,n){try{for(let r of t)r(e)}catch(r){fr(r,n&&n.owner||null)}}function fr(e,t=Y){let n=Jo&&t&&t.context&&t.context[Jo],r=Fa(e);if(!n)throw r;De?De.push({fn(){ni(r,n,t)},state:Ke}):ni(r,n,t)}function Kr(e){if(typeof e=="function"&&!e.length)return Kr(e());if(Array.isArray(e)){let t=[];for(let n=0;n<e.length;n++){let r=Kr(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function La(e,t){return function(r){let o;return B(()=>o=pe(()=>(Y.context={...Y.context,[e]:r.value},vi(()=>r.children))),void 0),o}}var Br=Symbol("fallback");function cr(e){for(let t=0;t<e.length;t++)e[t]()}function qa(e,t,n={}){let r=[],o=[],i=[],l=0,a=t.length>1?[]:null;return U(()=>cr(i)),()=>{let s=e()||[],c=s.length,d,u;return s[Dn],pe(()=>{let h,g,y,v,p,b,w,x,S;if(c===0)l!==0&&(cr(i),i=[],r=[],o=[],l=0,a&&(a=[])),n.fallback&&(r=[Br],o[0]=St(q=>(i[0]=q,n.fallback())),l=1);else if(l===0){for(o=new Array(c),u=0;u<c;u++)r[u]=s[u],o[u]=St(f);l=c}else{for(y=new Array(c),v=new Array(c),a&&(p=new Array(c)),b=0,w=Math.min(l,c);b<w&&r[b]===s[b];b++);for(w=l-1,x=c-1;w>=b&&x>=b&&r[w]===s[x];w--,x--)y[x]=o[w],v[x]=i[w],a&&(p[x]=a[w]);for(h=new Map,g=new Array(x+1),u=x;u>=b;u--)S=s[u],d=h.get(S),g[u]=d===void 0?-1:d,h.set(S,u);for(d=b;d<=w;d++)S=r[d],u=h.get(S),u!==void 0&&u!==-1?(y[u]=o[d],v[u]=i[d],a&&(p[u]=a[d]),u=g[u],h.set(S,u)):i[d]();for(u=b;u<c;u++)u in y?(o[u]=y[u],i[u]=v[u],a&&(a[u]=p[u],a[u](u))):o[u]=St(f);o=o.slice(0,l=c),r=s.slice(0)}return o});function f(h){if(i[u]=h,a){let[g,y]=z(u);return a[u]=y,t(s[u],g)}return t(s[u])}}}function _a(e,t,n={}){let r=[],o=[],i=[],l=[],a=0,s;return U(()=>cr(i)),()=>{let c=e()||[],d=c.length;return c[Dn],pe(()=>{if(d===0)return a!==0&&(cr(i),i=[],r=[],o=[],a=0,l=[]),n.fallback&&(r=[Br],o[0]=St(f=>(i[0]=f,n.fallback())),a=1),o;for(r[0]===Br&&(i[0](),i=[],r=[],o=[],a=0),s=0;s<d;s++)s<r.length&&r[s]!==c[s]?l[s](()=>c[s]):s>=r.length&&(o[s]=St(u));for(;s<r.length;s++)i[s]();return a=l.length=i.length=d,r=c.slice(0),o=o.slice(0,a)});function u(f){i[s]=f;let[h,g]=z(c[s]);return l[s]=g,t(h,s)}}}var Ra=!1;function m(e,t){if(Ra&&X.context){let n=X.context;Rr(Ea());let r=pe(()=>e(t||{}));return Rr(n),r}return pe(()=>e(t||{}))}function tr(){return!0}var Nr={get(e,t,n){return t===ir?n:e.get(t)},has(e,t){return t===ir?!0:e.has(t)},set:tr,deleteProperty:tr,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:tr,deleteProperty:tr}},ownKeys(e){return e.keys()}};function qr(e){return(e=typeof e=="function"?e():e)?e:{}}function za(){for(let e=0,t=this.length;e<t;++e){let n=this[e]();if(n!==void 0)return n}}function W(...e){let t=!1;for(let l=0;l<e.length;l++){let a=e[l];t=t||!!a&&ir in a,e[l]=typeof a=="function"?(t=!0,T(a)):a}if(ui&&t)return new Proxy({get(l){for(let a=e.length-1;a>=0;a--){let s=qr(e[a])[l];if(s!==void 0)return s}},has(l){for(let a=e.length-1;a>=0;a--)if(l in qr(e[a]))return!0;return!1},keys(){let l=[];for(let a=0;a<e.length;a++)l.push(...Object.keys(qr(e[a])));return[...new Set(l)]}},Nr);let n={},r=Object.create(null);for(let l=e.length-1;l>=0;l--){let a=e[l];if(!a)continue;let s=Object.getOwnPropertyNames(a);for(let c=s.length-1;c>=0;c--){let d=s[c];if(d==="__proto__"||d==="constructor")continue;let u=Object.getOwnPropertyDescriptor(a,d);if(!r[d])r[d]=u.get?{enumerable:!0,configurable:!0,get:za.bind(n[d]=[u.get.bind(a)])}:u.value!==void 0?u:void 0;else{let f=n[d];f&&(u.get?f.push(u.get.bind(a)):u.value!==void 0&&f.push(()=>u.value))}}}let o={},i=Object.keys(r);for(let l=i.length-1;l>=0;l--){let a=i[l],s=r[a];s&&s.get?Object.defineProperty(o,a,s):o[a]=s?s.value:void 0}return o}function ee(e,...t){if(ui&&ir in e){let o=new Set(t.length>1?t.flat():t[0]),i=t.map(l=>new Proxy({get(a){return l.includes(a)?e[a]:void 0},has(a){return l.includes(a)&&a in e},keys(){return l.filter(a=>a in e)}},Nr));return i.push(new Proxy({get(l){return o.has(l)?void 0:e[l]},has(l){return o.has(l)?!1:l in e},keys(){return Object.keys(e).filter(l=>!o.has(l))}},Nr)),i}let n={},r=t.map(()=>({}));for(let o of Object.getOwnPropertyNames(e)){let i=Object.getOwnPropertyDescriptor(e,o),l=!i.get&&!i.set&&i.enumerable&&i.writable&&i.configurable,a=!1,s=0;for(let c of t)c.includes(o)&&(a=!0,l?r[s][o]=i.value:Object.defineProperty(r[s],o,i)),++s;a||(l?n[o]=i.value:Object.defineProperty(n,o,i))}return[...r,n]}var Ka=0;function Be(){return X.context?X.getNextContextId():`cl-${Ka++}`}var Ci=e=>`Stale read from <${e}>.`;function $i(e){let t="fallback"in e&&{fallback:()=>e.fallback};return T(qa(()=>e.each,e.children,t||void 0))}function ki(e){let t="fallback"in e&&{fallback:()=>e.fallback};return T(_a(()=>e.each,e.children,t||void 0))}function K(e){let t=e.keyed,n=T(()=>e.when,void 0,void 0),r=t?n:T(n,void 0,{equals:(o,i)=>!o==!i});return T(()=>{let o=r();if(o){let i=e.children;return typeof i=="function"&&i.length>0?pe(()=>i(t?o:()=>{if(!pe(r))throw Ci("Show");return n()})):i}return e.fallback},void 0,void 0)}function Ei(e){let t=vi(()=>e.children),n=T(()=>{let r=t(),o=Array.isArray(r)?r:[r],i=()=>{};for(let l=0;l<o.length;l++){let a=l,s=o[l],c=i,d=T(()=>c()?void 0:s.when,void 0,void 0),u=s.keyed?d:T(d,void 0,{equals:(f,h)=>!f==!h});i=()=>c()||(u()?[a,d,s]:void 0)}return i});return T(()=>{let r=n()();if(!r)return e.fallback;let[o,i,l]=r,a=l.children;return typeof a=="function"&&a.length>0?pe(()=>a(l.keyed?i():()=>{if(pe(n)()?.[0]!==o)throw Ci("Match");return i()})):a},void 0,void 0)}function gr(e){return e}var Ai=void 0,Ba=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Na=new Set(["className","value","readOnly","noValidate","formNoValidate","isMap","noModule","playsInline",...Ba]),Va=new Set(["innerHTML","textContent","innerText","children"]),Ua=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Ha=Object.assign(Object.create(null),{class:"className",novalidate:{$:"noValidate",FORM:1},formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function Ga(e,t){let n=Ha[e];return typeof n=="object"?n[t]?n.$:void 0:n}var ja=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Wa=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),Qa={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"},xe=e=>T(()=>e());function Ya(e,t,n){let r=n.length,o=t.length,i=r,l=0,a=0,s=t[o-1].nextSibling,c=null;for(;l<o||a<i;){if(t[l]===n[a]){l++,a++;continue}for(;t[o-1]===n[i-1];)o--,i--;if(o===l){let d=i<r?a?n[a-1].nextSibling:n[i-a]:s;for(;a<i;)e.insertBefore(n[a++],d)}else if(i===a)for(;l<o;)(!c||!c.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[i-1]&&n[a]===t[o-1]){let d=t[--o].nextSibling;e.insertBefore(n[a++],t[l++].nextSibling),e.insertBefore(n[--i],d),t[o]=n[i]}else{if(!c){c=new Map;let u=a;for(;u<i;)c.set(n[u],u++)}let d=c.get(t[l]);if(d!=null)if(a<d&&d<i){let u=l,f=1,h;for(;++u<o&&u<i&&!((h=c.get(t[u]))==null||h!==d+f);)f++;if(f>d-a){let g=t[l];for(;a<d;)e.insertBefore(n[a++],g)}else e.replaceChild(n[a++],t[l++])}else l++;else t[l++].remove()}}}var Cn="_$DX_DELEGATE";function R(e,t,n,r){let o,i=()=>{let a=r?document.createElementNS("http://www.w3.org/1998/Math/MathML","template"):document.createElement("template");return a.innerHTML=e,n?a.content.firstChild.firstChild:r?a.firstChild:a.content.firstChild},l=t?()=>pe(()=>document.importNode(o||(o=i()),!0)):()=>(o||(o=i())).cloneNode(!0);return l.cloneNode=l,l}function In(e,t=self.document){let n=t[Cn]||(t[Cn]=new Set);for(let r=0,o=e.length;r<o;r++){let i=e[r];n.has(i)||(n.add(i),t.addEventListener(i,Ti))}}function Mi(e=self.document){if(e[Cn]){for(let t of e[Cn].keys())e.removeEventListener(t,Ti);delete e[Cn]}}function A(e,t,n){Ht(e)||(n==null?e.removeAttribute(t):e.setAttribute(t,n))}function Xa(e,t,n,r){Ht(e)||(r==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r))}function Za(e,t,n){Ht(e)||(n?e.setAttribute(t,""):e.removeAttribute(t))}function O(e,t){Ht(e)||(t==null?e.removeAttribute("class"):e.className=t)}function Wr(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){let o=n[0];e.addEventListener(t,n[0]=i=>o.call(e,n[1],i))}else e.addEventListener(t,n,typeof n!="function"&&n)}function Ja(e,t,n={}){let r=Object.keys(t||{}),o=Object.keys(n),i,l;for(i=0,l=o.length;i<l;i++){let a=o[i];!a||a==="undefined"||t[a]||(ri(e,a,!1),delete n[a])}for(i=0,l=r.length;i<l;i++){let a=r[i],s=!!t[a];!a||a==="undefined"||n[a]===s||!s||(ri(e,a,!0),n[a]=s)}return n}function ec(e,t,n){if(!t)return n?A(e,"style"):t;let r=e.style;if(typeof t=="string")return r.cssText=t;typeof n=="string"&&(r.cssText=n=void 0),n||(n={}),t||(t={});let o,i;for(i in n)t[i]==null&&r.removeProperty(i),delete n[i];for(i in t)o=t[i],o!==n[i]&&(r.setProperty(i,o),n[i]=o);return n}function Qr(e,t={},n,r){let o={};return r||B(()=>o.children=An(e,t.children,o.children)),B(()=>typeof t.ref=="function"&&Ut(t.ref,e)),B(()=>tc(e,t,n,!0,o,!0)),o}function Ut(e,t,n){return pe(()=>e(t,n))}function k(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return An(e,t,r,n);B(o=>An(e,t(),o,n),r)}function tc(e,t,n,r,o={},i=!1){t||(t={});for(let l in o)if(!(l in t)){if(l==="children")continue;o[l]=oi(e,l,null,o[l],n,i,t)}for(let l in t){if(l==="children")continue;let a=t[l];o[l]=oi(e,l,a,o[l],n,i,t)}}function nc(e){let t,n;return!Ht()||!(t=X.registry.get(n=oc()))?e():(X.completed&&X.completed.add(t),X.registry.delete(n),t)}function Ht(e){return!!X.context&&!X.done&&(!e||e.isConnected)}function rc(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function ri(e,t,n){let r=t.trim().split(/\s+/);for(let o=0,i=r.length;o<i;o++)e.classList.toggle(r[o],n)}function oi(e,t,n,r,o,i,l){let a,s,c,d,u;if(t==="style")return ec(e,n,r);if(t==="classList")return Ja(e,n,r);if(n===r)return r;if(t==="ref")i||n(e);else if(t.slice(0,3)==="on:"){let f=t.slice(3);r&&e.removeEventListener(f,r,typeof r!="function"&&r),n&&e.addEventListener(f,n,typeof n!="function"&&n)}else if(t.slice(0,10)==="oncapture:"){let f=t.slice(10);r&&e.removeEventListener(f,r,!0),n&&e.addEventListener(f,n,!0)}else if(t.slice(0,2)==="on"){let f=t.slice(2).toLowerCase(),h=ja.has(f);if(!h&&r){let g=Array.isArray(r)?r[0]:r;e.removeEventListener(f,g)}(h||n)&&(Wr(e,f,n,h),h&&In([f]))}else if(t.slice(0,5)==="attr:")A(e,t.slice(5),n);else if(t.slice(0,5)==="bool:")Za(e,t.slice(5),n);else if((u=t.slice(0,5)==="prop:")||(c=Va.has(t))||!o&&((d=Ga(t,e.tagName))||(s=Na.has(t)))||(a=e.nodeName.includes("-")||"is"in l)){if(u)t=t.slice(5),s=!0;else if(Ht(e))return n;t==="class"||t==="className"?O(e,n):a&&!s&&!c?e[rc(t)]=n:e[d||t]=n}else{let f=o&&t.indexOf(":")>-1&&Qa[t.split(":")[0]];f?Xa(e,f,t,n):A(e,Ua[t]||t,n)}return n}function Ti(e){if(X.registry&&X.events&&X.events.find(([s,c])=>c===e))return;let t=e.target,n=`$$${e.type}`,r=e.target,o=e.currentTarget,i=s=>Object.defineProperty(e,"target",{configurable:!0,value:s}),l=()=>{let s=t[n];if(s&&!t.disabled){let c=t[`${n}Data`];if(c!==void 0?s.call(t,c,e):s.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&i(t.host),!0},a=()=>{for(;l()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),X.registry&&!X.done&&(X.done=_$HY.done=!0),e.composedPath){let s=e.composedPath();i(s[0]);for(let c=0;c<s.length-2&&(t=s[c],!!l());c++){if(t._$host){t=t._$host,a();break}if(t.parentNode===o)break}}else a();i(r)}function An(e,t,n,r,o){let i=Ht(e);if(i){!n&&(n=[...e.childNodes]);let s=[];for(let c=0;c<n.length;c++){let d=n[c];d.nodeType===8&&d.data.slice(0,2)==="!$"?d.remove():s.push(d)}n=s}for(;typeof n=="function";)n=n();if(t===n)return n;let l=typeof t,a=r!==void 0;if(e=a&&n[0]&&n[0].parentNode||e,l==="string"||l==="number"){if(i||l==="number"&&(t=t.toString(),t===n))return n;if(a){let s=n[0];s&&s.nodeType===3?s.data!==t&&(s.data=t):s=document.createTextNode(t),n=nn(e,n,r,s)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||l==="boolean"){if(i)return n;n=nn(e,n,r)}else{if(l==="function")return B(()=>{let s=t();for(;typeof s=="function";)s=s();n=An(e,s,n,r)}),()=>n;if(Array.isArray(t)){let s=[],c=n&&Array.isArray(n);if(Vr(s,t,n,o))return B(()=>n=An(e,s,n,r,!0)),()=>n;if(i){if(!s.length)return n;if(r===void 0)return n=[...e.childNodes];let d=s[0];if(d.parentNode!==e)return n;let u=[d];for(;(d=d.nextSibling)!==r;)u.push(d);return n=u}if(s.length===0){if(n=nn(e,n,r),a)return n}else c?n.length===0?ii(e,s,r):Ya(e,n,s):(n&&nn(e),ii(e,s));n=s}else if(t.nodeType){if(i&&t.parentNode)return n=a?[t]:t;if(Array.isArray(n)){if(a)return n=nn(e,n,r,t);nn(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Vr(e,t,n,r){let o=!1;for(let i=0,l=t.length;i<l;i++){let a=t[i],s=n&&n[e.length],c;if(!(a==null||a===!0||a===!1))if((c=typeof a)=="object"&&a.nodeType)e.push(a);else if(Array.isArray(a))o=Vr(e,a,s)||o;else if(c==="function")if(r){for(;typeof a=="function";)a=a();o=Vr(e,Array.isArray(a)?a:[a],Array.isArray(s)?s:[s])||o}else e.push(a),o=!0;else{let d=String(a);s&&s.nodeType===3&&s.data===d?e.push(s):e.push(document.createTextNode(d))}}return o}function ii(e,t,n=null){for(let r=0,o=t.length;r<o;r++)e.insertBefore(t[r],n)}function nn(e,t,n,r){if(n===void 0)return e.textContent="";let o=r||document.createTextNode("");if(t.length){let i=!1;for(let l=t.length-1;l>=0;l--){let a=t[l];if(o!==a){let s=a.parentNode===e;!i&&!l?s?e.replaceChild(o,a):e.insertBefore(o,n):s&&a.remove()}else i=!0}}else e.insertBefore(o,n);return[o]}function oc(){return X.getNextContextId()}var Ie=!1,ic="http://www.w3.org/2000/svg";function Oi(e,t=!1){return t?document.createElementNS(ic,e):document.createElement(e)}function Yr(e){let{useShadow:t}=e,n=document.createTextNode(""),r=()=>e.mount||document.body,o=lr(),i,l=!!X.context;return V(()=>{l&&(lr().user=l=!1),i||(i=Ta(o,()=>T(()=>e.children)));let a=r();if(a instanceof HTMLHeadElement){let[s,c]=z(!1),d=()=>c(!0);St(u=>k(a,()=>s()?u():i(),null)),U(d)}else{let s=Oi(e.isSVG?"g":"div",e.isSVG),c=t&&s.attachShadow?s.attachShadow({mode:"open"}):s;Object.defineProperty(s,"_$host",{get(){return n.parentNode},configurable:!0}),k(c,i),a.appendChild(s),e.ref&&e.ref(s),U(()=>a.removeChild(s))}},void 0,{render:!l}),n}function sc(e,t){let n=T(e);return T(()=>{let r=n();switch(typeof r){case"function":return pe(()=>r(t));case"string":let o=Wa.has(r),i=X.context?nc():Oi(r,o);return Qr(i,t,o),i}})}function Di(e){let[,t]=ee(e,["component"]);return sc(()=>e.component,t)}var lc=class{constructor(){this.keyToValue=new Map,this.valueToKey=new Map}set(e,t){this.keyToValue.set(e,t),this.valueToKey.set(t,e)}getByKey(e){return this.keyToValue.get(e)}getByValue(e){return this.valueToKey.get(e)}clear(){this.keyToValue.clear(),this.valueToKey.clear()}},Ii=class{constructor(e){this.generateIdentifier=e,this.kv=new lc}register(e,t){this.kv.getByValue(e)||(t||(t=this.generateIdentifier(e)),this.kv.set(t,e))}clear(){this.kv.clear()}getIdentifier(e){return this.kv.getByValue(e)}getValue(e){return this.kv.getByKey(e)}},ac=class extends Ii{constructor(){super(e=>e.name),this.classToAllowedProps=new Map}register(e,t){typeof t=="object"?(t.allowProps&&this.classToAllowedProps.set(e,t.allowProps),super.register(e,t.identifier)):super.register(e,t)}getAllowedProps(e){return this.classToAllowedProps.get(e)}};function cc(e){if("values"in Object)return Object.values(e);let t=[];for(let n in e)e.hasOwnProperty(n)&&t.push(e[n]);return t}function uc(e,t){let n=cc(e);if("find"in n)return n.find(t);let r=n;for(let o=0;o<r.length;o++){let i=r[o];if(t(i))return i}}function ln(e,t){Object.entries(e).forEach(([n,r])=>t(r,n))}function or(e,t){return e.indexOf(t)!==-1}function si(e,t){for(let n=0;n<e.length;n++){let r=e[n];if(t(r))return r}}var dc=class{constructor(){this.transfomers={}}register(e){this.transfomers[e.name]=e}findApplicable(e){return uc(this.transfomers,t=>t.isApplicable(e))}findByName(e){return this.transfomers[e]}},fc=e=>Object.prototype.toString.call(e).slice(8,-1),Pi=e=>typeof e>"u",gc=e=>e===null,Mn=e=>typeof e!="object"||e===null||e===Object.prototype?!1:Object.getPrototypeOf(e)===null?!0:Object.getPrototypeOf(e)===Object.prototype,Ur=e=>Mn(e)&&Object.keys(e).length===0,Ft=e=>Array.isArray(e),hc=e=>typeof e=="string",yc=e=>typeof e=="number"&&!isNaN(e),mc=e=>typeof e=="boolean",vc=e=>e instanceof RegExp,Tn=e=>e instanceof Map,On=e=>e instanceof Set,Fi=e=>fc(e)==="Symbol",pc=e=>e instanceof Date&&!isNaN(e.valueOf()),bc=e=>e instanceof Error,li=e=>typeof e=="number"&&isNaN(e),wc=e=>mc(e)||gc(e)||Pi(e)||yc(e)||hc(e)||Fi(e),xc=e=>typeof e=="bigint",Sc=e=>e===1/0||e===-1/0,Cc=e=>ArrayBuffer.isView(e)&&!(e instanceof DataView),$c=e=>e instanceof URL,Li=e=>e.replace(/\./g,"\\."),_r=e=>e.map(String).map(Li).join("."),$n=e=>{let t=[],n="";for(let o=0;o<e.length;o++){let i=e.charAt(o);if(i==="\\"&&e.charAt(o+1)==="."){n+=".",o++;continue}if(i==="."){t.push(n),n="";continue}n+=i}let r=n;return t.push(r),t};function at(e,t,n,r){return{isApplicable:e,annotation:t,transform:n,untransform:r}}var qi=[at(Pi,"undefined",()=>null,()=>{}),at(xc,"bigint",e=>e.toString(),e=>typeof BigInt<"u"?BigInt(e):e),at(pc,"Date",e=>e.toISOString(),e=>new Date(e)),at(bc,"Error",(e,t)=>{let n={name:e.name,message:e.message};return t.allowedErrorProps.forEach(r=>{n[r]=e[r]}),n},(e,t)=>{let n=new Error(e.message);return n.name=e.name,n.stack=e.stack,t.allowedErrorProps.forEach(r=>{n[r]=e[r]}),n}),at(vc,"regexp",e=>""+e,e=>{let t=e.slice(1,e.lastIndexOf("/")),n=e.slice(e.lastIndexOf("/")+1);return new RegExp(t,n)}),at(On,"set",e=>[...e.values()],e=>new Set(e)),at(Tn,"map",e=>[...e.entries()],e=>new Map(e)),at(e=>li(e)||Sc(e),"number",e=>li(e)?"NaN":e>0?"Infinity":"-Infinity",Number),at(e=>e===0&&1/e===-1/0,"number",()=>"-0",Number),at($c,"URL",e=>e.toString(),e=>new URL(e))];function hr(e,t,n,r){return{isApplicable:e,annotation:t,transform:n,untransform:r}}var _i=hr((e,t)=>Fi(e)?!!t.symbolRegistry.getIdentifier(e):!1,(e,t)=>["symbol",t.symbolRegistry.getIdentifier(e)],e=>e.description,(e,t,n)=>{let r=n.symbolRegistry.getValue(t[1]);if(!r)throw new Error("Trying to deserialize unknown symbol");return r}),kc=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,Uint8ClampedArray].reduce((e,t)=>(e[t.name]=t,e),{}),Ri=hr(Cc,e=>["typed-array",e.constructor.name],e=>[...e],(e,t)=>{let n=kc[t[1]];if(!n)throw new Error("Trying to deserialize unknown typed array");return new n(e)});function zi(e,t){return e?.constructor?!!t.classRegistry.getIdentifier(e.constructor):!1}var Ki=hr(zi,(e,t)=>["class",t.classRegistry.getIdentifier(e.constructor)],(e,t)=>{let n=t.classRegistry.getAllowedProps(e.constructor);if(!n)return{...e};let r={};return n.forEach(o=>{r[o]=e[o]}),r},(e,t,n)=>{let r=n.classRegistry.getValue(t[1]);if(!r)throw new Error(`Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);return Object.assign(Object.create(r.prototype),e)}),Bi=hr((e,t)=>!!t.customTransformerRegistry.findApplicable(e),(e,t)=>["custom",t.customTransformerRegistry.findApplicable(e).name],(e,t)=>t.customTransformerRegistry.findApplicable(e).serialize(e),(e,t,n)=>{let r=n.customTransformerRegistry.findByName(t[1]);if(!r)throw new Error("Trying to deserialize unknown custom value");return r.deserialize(e)}),Ec=[Ki,_i,Bi,Ri],ai=(e,t)=>{let n=si(Ec,o=>o.isApplicable(e,t));if(n)return{value:n.transform(e,t),type:n.annotation(e,t)};let r=si(qi,o=>o.isApplicable(e,t));if(r)return{value:r.transform(e,t),type:r.annotation}},Ni={};qi.forEach(e=>{Ni[e.annotation]=e});var Ac=(e,t,n)=>{if(Ft(t))switch(t[0]){case"symbol":return _i.untransform(e,t,n);case"class":return Ki.untransform(e,t,n);case"custom":return Bi.untransform(e,t,n);case"typed-array":return Ri.untransform(e,t,n);default:throw new Error("Unknown transformation: "+t)}else{let r=Ni[t];if(!r)throw new Error("Unknown transformation: "+t);return r.untransform(e,n)}},rn=(e,t)=>{if(t>e.size)throw new Error("index out of bounds");let n=e.keys();for(;t>0;)n.next(),t--;return n.next().value};function Vi(e){if(or(e,"__proto__"))throw new Error("__proto__ is not allowed as a property");if(or(e,"prototype"))throw new Error("prototype is not allowed as a property");if(or(e,"constructor"))throw new Error("constructor is not allowed as a property")}var Mc=(e,t)=>{Vi(t);for(let n=0;n<t.length;n++){let r=t[n];if(On(e))e=rn(e,+r);else if(Tn(e)){let o=+r,i=+t[++n]==0?"key":"value",l=rn(e,o);switch(i){case"key":e=l;break;case"value":e=e.get(l);break}}else e=e[r]}return e},Hr=(e,t,n)=>{if(Vi(t),t.length===0)return n(e);let r=e;for(let i=0;i<t.length-1;i++){let l=t[i];if(Ft(r)){let a=+l;r=r[a]}else if(Mn(r))r=r[l];else if(On(r)){let a=+l;r=rn(r,a)}else if(Tn(r)){if(i===t.length-2)break;let s=+l,c=+t[++i]==0?"key":"value",d=rn(r,s);switch(c){case"key":r=d;break;case"value":r=r.get(d);break}}}let o=t[t.length-1];if(Ft(r)?r[+o]=n(r[+o]):Mn(r)&&(r[o]=n(r[o])),On(r)){let i=rn(r,+o),l=n(i);i!==l&&(r.delete(i),r.add(l))}if(Tn(r)){let i=+t[t.length-2],l=rn(r,i);switch(+o==0?"key":"value"){case"key":{let s=n(l);r.set(s,r.get(l)),s!==l&&r.delete(l);break}case"value":{r.set(l,n(r.get(l)));break}}}return e};function Gr(e,t,n=[]){if(!e)return;if(!Ft(e)){ln(e,(i,l)=>Gr(i,t,[...n,...$n(l)]));return}let[r,o]=e;o&&ln(o,(i,l)=>{Gr(i,t,[...n,...$n(l)])}),t(r,n)}function Tc(e,t,n){return Gr(t,(r,o)=>{e=Hr(e,o,i=>Ac(i,r,n))}),e}function Oc(e,t){function n(r,o){let i=Mc(e,$n(o));r.map($n).forEach(l=>{e=Hr(e,l,()=>i)})}if(Ft(t)){let[r,o]=t;r.forEach(i=>{e=Hr(e,$n(i),()=>e)}),o&&ln(o,n)}else ln(t,n);return e}var Dc=(e,t)=>Mn(e)||Ft(e)||Tn(e)||On(e)||zi(e,t);function Ic(e,t,n){let r=n.get(e);r?r.push(t):n.set(e,[t])}function Pc(e,t){let n={},r;return e.forEach(o=>{if(o.length<=1)return;t||(o=o.map(a=>a.map(String)).sort((a,s)=>a.length-s.length));let[i,...l]=o;i.length===0?r=l.map(_r):n[_r(i)]=l.map(_r)}),r?Ur(n)?[r]:[r,n]:Ur(n)?void 0:n}var Ui=(e,t,n,r,o=[],i=[],l=new Map)=>{let a=wc(e);if(!a){Ic(e,o,t);let h=l.get(e);if(h)return r?{transformedValue:null}:h}if(!Dc(e,n)){let h=ai(e,n),g=h?{transformedValue:h.value,annotations:[h.type]}:{transformedValue:e};return a||l.set(e,g),g}if(or(i,e))return{transformedValue:null};let s=ai(e,n),c=s?.value??e,d=Ft(c)?[]:{},u={};ln(c,(h,g)=>{if(g==="__proto__"||g==="constructor"||g==="prototype")throw new Error(`Detected property ${g}. This is a prototype pollution risk, please remove it from your object.`);let y=Ui(h,t,n,r,[...o,g],[...i,e],l);d[g]=y.transformedValue,Ft(y.annotations)?u[g]=y.annotations:Mn(y.annotations)&&ln(y.annotations,(v,p)=>{u[Li(g)+"."+p]=v})});let f=Ur(u)?{transformedValue:d,annotations:s?[s.type]:void 0}:{transformedValue:d,annotations:s?[s.type,u]:u};return a||l.set(e,f),f};function Hi(e){return Object.prototype.toString.call(e).slice(8,-1)}function ci(e){return Hi(e)==="Array"}function Fc(e){if(Hi(e)!=="Object")return!1;let t=Object.getPrototypeOf(e);return!!t&&t.constructor===Object&&t===Object.prototype}function Lc(e,t,n,r,o){let i={}.propertyIsEnumerable.call(r,t)?"enumerable":"nonenumerable";i==="enumerable"&&(e[t]=n),o&&i==="nonenumerable"&&Object.defineProperty(e,t,{value:n,enumerable:!1,writable:!0,configurable:!0})}function jr(e,t={}){if(ci(e))return e.map(o=>jr(o,t));if(!Fc(e))return e;let n=Object.getOwnPropertyNames(e),r=Object.getOwnPropertySymbols(e);return[...n,...r].reduce((o,i)=>{if(ci(t.props)&&!t.props.includes(i))return o;let l=e[i],a=jr(l,t);return Lc(o,i,a,e,t.nonenumerable),o},{})}var Z=class{constructor({dedupe:e=!1}={}){this.classRegistry=new ac,this.symbolRegistry=new Ii(t=>t.description??""),this.customTransformerRegistry=new dc,this.allowedErrorProps=[],this.dedupe=e}serialize(e){let t=new Map,n=Ui(e,t,this,this.dedupe),r={json:n.transformedValue};n.annotations&&(r.meta={...r.meta,values:n.annotations});let o=Pc(t,this.dedupe);return o&&(r.meta={...r.meta,referentialEqualities:o}),r}deserialize(e){let{json:t,meta:n}=e,r=jr(t);return n?.values&&(r=Tc(r,n.values,this)),n?.referentialEqualities&&(r=Oc(r,n.referentialEqualities)),r}stringify(e){return JSON.stringify(this.serialize(e))}parse(e){return this.deserialize(JSON.parse(e))}registerClass(e,t){this.classRegistry.register(e,t)}registerSymbol(e,t){this.symbolRegistry.register(e,t)}registerCustom(e,t){this.customTransformerRegistry.register({name:t,...e})}allowErrorProps(...e){this.allowedErrorProps.push(...e)}};Z.defaultInstance=new Z;Z.serialize=Z.defaultInstance.serialize.bind(Z.defaultInstance);Z.deserialize=Z.defaultInstance.deserialize.bind(Z.defaultInstance);Z.stringify=Z.defaultInstance.stringify.bind(Z.defaultInstance);Z.parse=Z.defaultInstance.parse.bind(Z.defaultInstance);Z.registerClass=Z.defaultInstance.registerClass.bind(Z.defaultInstance);Z.registerSymbol=Z.defaultInstance.registerSymbol.bind(Z.defaultInstance);Z.registerCustom=Z.defaultInstance.registerCustom.bind(Z.defaultInstance);Z.allowErrorProps=Z.defaultInstance.allowErrorProps.bind(Z.defaultInstance);var Xr=Z.serialize;Z.deserialize;var Gi=Z.stringify;Z.parse;Z.registerClass;Z.registerCustom;Z.registerSymbol;Z.allowErrorProps;function Gt(e){return e.state.fetchStatus==="fetching"?"fetching":e.getObserversCount()?e.state.fetchStatus==="paused"?"paused":e.isStale()?"stale":"fresh":"inactive"}function ji(e,t){return`${e}${t.charAt(0).toUpperCase()+t.slice(1)}`}function Wi({queryState:e,observerCount:t,isStale:n}){return e.fetchStatus==="fetching"?"blue":t?e.fetchStatus==="paused"?"purple":n?"yellow":"green":"gray"}function jt({status:e,isPaused:t}){return t?"purple":e==="error"?"red":e==="pending"?"yellow":e==="success"?"green":"gray"}function Qi(e){return e==="fresh"?"green":e==="stale"?"yellow":e==="paused"?"purple":e==="inactive"?"gray":"blue"}var Pn=(e,t=!1)=>{let{json:n}=Xr(e);return JSON.stringify(n,null,t?2:void 0)},nr=e=>e.state.fetchStatus!=="idle"?0:e.getObserversCount()?e.isStale()?2:1:3,qc=(e,t)=>e.queryHash.localeCompare(t.queryHash),Yi=(e,t)=>e.state.dataUpdatedAt<t.state.dataUpdatedAt?1:-1,_c=(e,t)=>nr(e)===nr(t)?Yi(e,t):nr(e)>nr(t)?1:-1,yr={status:_c,"query hash":qc,"last updated":Yi},rr=e=>e.state.isPaused?0:e.state.status==="error"?2:e.state.status==="pending"?1:3,Xi=(e,t)=>e.state.submittedAt<t.state.submittedAt?1:-1,Rc=(e,t)=>rr(e)===rr(t)?Xi(e,t):rr(e)>rr(t)?1:-1,mr={status:Rc,"last updated":Xi},Zr=e=>e*parseFloat(getComputedStyle(document.documentElement).fontSize),dh=()=>{let[e,t]=z("dark");return ut(()=>{let n=self.matchMedia("(prefers-color-scheme: dark)");t(n.matches?"dark":"light");let r=o=>{t(o.matches?"dark":"light")};n.addEventListener("change",r),U(()=>n.removeEventListener("change",r))}),e},It=(e,t,n)=>{if(t.length===0)return n;if(e instanceof Map){let r=new Map(e);if(t.length===1)return r.set(t[0],n),r;let[o,...i]=t;return r.set(o,It(r.get(o),i,n)),r}if(e instanceof Set){let r=It(Array.from(e),t,n);return new Set(r)}if(Array.isArray(e)){let r=[...e];if(t.length===1)return r[t[0]]=n,r;let[o,...i]=t;return r[o]=It(r[o],i,n),r}if(e instanceof Object){let r={...e};if(t.length===1)return r[t[0]]=n,r;let[o,...i]=t;return r[o]=It(r[o],i,n),r}return e},on=(e,t)=>{if(e instanceof Map){let n=new Map(e);if(t.length===1)return n.delete(t[0]),n;let[r,...o]=t;return n.set(r,on(n.get(r),o)),n}if(e instanceof Set){let n=on(Array.from(e),t);return new Set(n)}if(Array.isArray(e)){let n=[...e];if(t.length===1)return n.filter((i,l)=>l.toString()!==t[0]);let[r,...o]=t;return n[r]=on(n[r],o),n}if(e instanceof Object){let n={...e};if(t.length===1)return delete n[t[0]],n;let[r,...o]=t;return n[r]=on(n[r],o),n}return e};Jn();er();var zc=!Ie,Kc=zc&&!!Ai,Zi=()=>{},Bc=e=>e!=null,Nc=e=>e.filter(Bc);function Vc(e){return(...t)=>{for(let n of e)n&&n(...t)}}var E=e=>typeof e=="function"&&!e.length?e():e,oo=e=>Array.isArray(e)?e:e?[e]:[];function Uc(e,...t){return typeof e=="function"?e(...t):e}var Hc=Kc?e=>lr()?U(e):e:U;function Gc(e,t,n,r){let o=e.length,i=t.length,l=0;if(!i){for(;l<o;l++)n(e[l]);return}if(!o){for(;l<i;l++)r(t[l]);return}for(;l<i&&t[l]===e[l];l++);let a,s;t=t.slice(l),e=e.slice(l);for(a of t)e.includes(a)||r(a);for(s of e)t.includes(s)||n(s)}function jc(e){let[t,n]=z(),r=e?.throw?(f,h)=>{throw n(f instanceof Error?f:new Error(h)),f}:(f,h)=>{n(f instanceof Error?f:new Error(h))},o=e?.api?Array.isArray(e.api)?e.api:[e.api]:[globalThis.localStorage].filter(Boolean),i=e?.prefix?`${e.prefix}.`:"",l=new Map,a=new Proxy({},{get(f,h){let g=l.get(h);g||(g=z(void 0,{equals:!1}),l.set(h,g)),g[0]();let y=o.reduce((v,p)=>{if(v!==null||!p)return v;try{return p.getItem(`${i}${h}`)}catch(b){return r(b,`Error reading ${i}${h} from ${p.name}`),null}},null);return y!==null&&e?.deserializer?e.deserializer(y,h,e.options):y}}),s=(f,h,g)=>{let y=e?.serializer?e.serializer(h,f,g??e.options):h,v=`${i}${f}`;o.forEach(b=>{try{b.getItem(v)!==y&&b.setItem(v,y)}catch(w){r(w,`Error setting ${i}${f} to ${y} in ${b.name}`)}});let p=l.get(f);p&&p[1]()},c=f=>o.forEach(h=>{try{h.removeItem(`${i}${f}`)}catch(g){r(g,`Error removing ${i}${f} from ${h.name}`)}}),d=()=>o.forEach(f=>{try{f.clear()}catch(h){r(h,`Error clearing ${f.name}`)}}),u=()=>{let f={},h=(g,y)=>{if(!f.hasOwnProperty(g)){let v=y&&e?.deserializer?e.deserializer(y,g,e.options):y;v&&(f[g]=v)}};return o.forEach(g=>{if(typeof g.getAll=="function"){let y;try{y=g.getAll()}catch(v){r(v,`Error getting all values from in ${g.name}`)}for(let v of y)h(v,y[v])}else{let y=0,v;try{for(;v=g.key(y++);)f.hasOwnProperty(v)||h(v,g.getItem(v))}catch(p){r(p,`Error getting all values from ${g.name}`)}}}),f};return e?.sync!==!1&&ut(()=>{let f=h=>{let g=!1;o.forEach(y=>{try{y!==h.storageArea&&h.key&&h.newValue!==y.getItem(h.key)&&(h.newValue?y.setItem(h.key,h.newValue):y.removeItem(h.key),g=!0)}catch(v){r(v,`Error synching api ${y.name} from storage event (${h.key}=${h.newValue})`)}}),g&&h.key&&l.get(h.key)?.[1]()};"addEventListener"in globalThis?(globalThis.addEventListener("storage",f),U(()=>globalThis.removeEventListener("storage",f))):(o.forEach(h=>h.addEventListener?.("storage",f)),U(()=>o.forEach(h=>h.removeEventListener?.("storage",f))))}),[a,s,{clear:d,error:t,remove:c,toJSON:u}]}var xh=jc,Wc=e=>(typeof e.clear=="function"||(e.clear=()=>{let t;for(;t=e.key(0);)e.removeItem(t)}),e),Ji=e=>{if(!e)return"";let t="";for(let n in e){if(!e.hasOwnProperty(n))continue;let r=e[n];t+=r instanceof Date?`; ${n}=${r.toUTCString()}`:typeof r=="boolean"?`; ${n}`:`; ${n}=${r}`}return t},je=Wc({_cookies:[globalThis.document,"cookie"],getItem:e=>je._cookies[0][je._cookies[1]].match("(^|;)\\s*"+e+"\\s*=\\s*([^;]+)")?.pop()??null,setItem:(e,t,n)=>{let r=je.getItem(e);je._cookies[0][je._cookies[1]]=`${e}=${t}${Ji(n)}`;let o=Object.assign(new Event("storage"),{key:e,oldValue:r,newValue:t,url:globalThis.document.URL,storageArea:je});self.dispatchEvent(o)},removeItem:e=>{je._cookies[0][je._cookies[1]]=`${e}=deleted${Ji({expires:new Date(0)})}`},key:e=>{let t=null,n=0;return je._cookies[0][je._cookies[1]].replace(/(?:^|;)\s*(.+?)\s*=\s*[^;]+/g,(r,o)=>(!t&&o&&n++===e&&(t=o),"")),t},get length(){let e=0;return je._cookies[0][je._cookies[1]].replace(/(?:^|;)\s*.+?\s*=\s*[^;]+/g,t=>(e+=t?1:0,"")),e}}),Qc=1024,Qt=796,vo=700,Yc="bottom-right",io="bottom",Sh="system",Xc=!1,Gs=500,Zc=500,js=500,Jc=Object.keys(yr)[0],es=1,eu=Object.keys(mr)[0],tu=Ee({client:void 0,onlineManager:void 0,queryFlavor:"",version:"",shadowDOMTarget:void 0});function N(){return $e(tu)}var Ws=Ee(void 0),Ch=e=>{let[t,n]=z(null),r=()=>{let l=t();l!=null&&(l.close(),n(null))},o=(l,a)=>{if(t()!=null)return;let s=self.open("","TSQD-Devtools-Panel",`width=${l},height=${a},popup`);if(!s)throw new Error("Failed to open popup. Please allow popups for this site to view the devtools in picture-in-picture mode.");s.document.head.innerHTML="",s.document.body.innerHTML="",Mi(s.document),s.document.title="TanStack Query Devtools",s.document.body.style.margin="0",s.addEventListener("pagehide",()=>{e.setLocalStore("pip_open","false"),n(null)}),[...(N().shadowDOMTarget||document).styleSheets].forEach(c=>{try{let d=[...c.cssRules].map(g=>g.cssText).join(""),u=document.createElement("style"),f=c.ownerNode,h="";f&&"id"in f&&(h=f.id),h&&u.setAttribute("id",h),u.textContent=d,s.document.head.appendChild(u)}catch{let u=document.createElement("link");if(c.href==null)return;u.rel="stylesheet",u.type=c.type,u.media=c.media.toString(),u.href=c.href,s.document.head.appendChild(u)}}),In(["focusin","focusout","pointermove","keydown","pointerdown","pointerup","click","mousedown","input"],s.document),e.setLocalStore("pip_open","true"),n(s)};V(()=>{(e.localStore.pip_open??"false")==="true"&&!e.disabled&&o(Number(self.innerWidth),Number(e.localStore.height||Zc))}),V(()=>{let l=(N().shadowDOMTarget||document).querySelector("#_goober"),a=t();if(l&&a){let s=new MutationObserver(()=>{let c=(N().shadowDOMTarget||a.document).querySelector("#_goober");c&&(c.textContent=l.textContent)});s.observe(l,{childList:!0,subtree:!0,characterDataOldValue:!0}),U(()=>{s.disconnect()})}});let i=T(()=>({pipWindow:t(),requestPipWindow:o,closePipWindow:r,disabled:e.disabled??!1}));return m(Ws.Provider,{value:i,get children(){return e.children}})},po=()=>T(()=>{let t=$e(Ws);if(!t)throw new Error("usePiPWindow must be used within a PiPProvider");return t()}),nu=Ee(()=>"dark");function Te(){return $e(nu)}var Qs={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u1EA4:"A",\u1EAE:"A",\u1EB2:"A",\u1EB4:"A",\u1EB6:"A",\u00C6:"AE",\u1EA6:"A",\u1EB0:"A",\u0202:"A",\u00C7:"C",\u1E08:"C",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u1EBE:"E",\u1E16:"E",\u1EC0:"E",\u1E14:"E",\u1E1C:"E",\u0206:"E",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u1E2E:"I",\u020A:"I",\u00D0:"D",\u00D1:"N",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u1ED0:"O",\u1E4C:"O",\u1E52:"O",\u020E:"O",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00DD:"Y",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u1EA5:"a",\u1EAF:"a",\u1EB3:"a",\u1EB5:"a",\u1EB7:"a",\u00E6:"ae",\u1EA7:"a",\u1EB1:"a",\u0203:"a",\u00E7:"c",\u1E09:"c",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u1EBF:"e",\u1E17:"e",\u1EC1:"e",\u1E15:"e",\u1E1D:"e",\u0207:"e",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u1E2F:"i",\u020B:"i",\u00F0:"d",\u00F1:"n",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u1ED1:"o",\u1E4D:"o",\u1E53:"o",\u020F:"o",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00FD:"y",\u00FF:"y",\u0100:"A",\u0101:"a",\u0102:"A",\u0103:"a",\u0104:"A",\u0105:"a",\u0106:"C",\u0107:"c",\u0108:"C",\u0109:"c",\u010A:"C",\u010B:"c",\u010C:"C",\u010D:"c",C\u0306:"C",c\u0306:"c",\u010E:"D",\u010F:"d",\u0110:"D",\u0111:"d",\u0112:"E",\u0113:"e",\u0114:"E",\u0115:"e",\u0116:"E",\u0117:"e",\u0118:"E",\u0119:"e",\u011A:"E",\u011B:"e",\u011C:"G",\u01F4:"G",\u011D:"g",\u01F5:"g",\u011E:"G",\u011F:"g",\u0120:"G",\u0121:"g",\u0122:"G",\u0123:"g",\u0124:"H",\u0125:"h",\u0126:"H",\u0127:"h",\u1E2A:"H",\u1E2B:"h",\u0128:"I",\u0129:"i",\u012A:"I",\u012B:"i",\u012C:"I",\u012D:"i",\u012E:"I",\u012F:"i",\u0130:"I",\u0131:"i",\u0132:"IJ",\u0133:"ij",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u1E30:"K",\u1E31:"k",K\u0306:"K",k\u0306:"k",\u0139:"L",\u013A:"l",\u013B:"L",\u013C:"l",\u013D:"L",\u013E:"l",\u013F:"L",\u0140:"l",\u0141:"l",\u0142:"l",\u1E3E:"M",\u1E3F:"m",M\u0306:"M",m\u0306:"m",\u0143:"N",\u0144:"n",\u0145:"N",\u0146:"n",\u0147:"N",\u0148:"n",\u0149:"n",N\u0306:"N",n\u0306:"n",\u014C:"O",\u014D:"o",\u014E:"O",\u014F:"o",\u0150:"O",\u0151:"o",\u0152:"OE",\u0153:"oe",P\u0306:"P",p\u0306:"p",\u0154:"R",\u0155:"r",\u0156:"R",\u0157:"r",\u0158:"R",\u0159:"r",R\u0306:"R",r\u0306:"r",\u0212:"R",\u0213:"r",\u015A:"S",\u015B:"s",\u015C:"S",\u015D:"s",\u015E:"S",\u0218:"S",\u0219:"s",\u015F:"s",\u0160:"S",\u0161:"s",\u0162:"T",\u0163:"t",\u021B:"t",\u021A:"T",\u0164:"T",\u0165:"t",\u0166:"T",\u0167:"t",T\u0306:"T",t\u0306:"t",\u0168:"U",\u0169:"u",\u016A:"U",\u016B:"u",\u016C:"U",\u016D:"u",\u016E:"U",\u016F:"u",\u0170:"U",\u0171:"u",\u0172:"U",\u0173:"u",\u0216:"U",\u0217:"u",V\u0306:"V",v\u0306:"v",\u0174:"W",\u0175:"w",\u1E82:"W",\u1E83:"w",X\u0306:"X",x\u0306:"x",\u0176:"Y",\u0177:"y",\u0178:"Y",Y\u0306:"Y",y\u0306:"y",\u0179:"Z",\u017A:"z",\u017B:"Z",\u017C:"z",\u017D:"Z",\u017E:"z",\u017F:"s",\u0192:"f",\u01A0:"O",\u01A1:"o",\u01AF:"U",\u01B0:"u",\u01CD:"A",\u01CE:"a",\u01CF:"I",\u01D0:"i",\u01D1:"O",\u01D2:"o",\u01D3:"U",\u01D4:"u",\u01D5:"U",\u01D6:"u",\u01D7:"U",\u01D8:"u",\u01D9:"U",\u01DA:"u",\u01DB:"U",\u01DC:"u",\u1EE8:"U",\u1EE9:"u",\u1E78:"U",\u1E79:"u",\u01FA:"A",\u01FB:"a",\u01FC:"AE",\u01FD:"ae",\u01FE:"O",\u01FF:"o",\u00DE:"TH",\u00FE:"th",\u1E54:"P",\u1E55:"p",\u1E64:"S",\u1E65:"s",X\u0301:"X",x\u0301:"x",\u0403:"\u0413",\u0453:"\u0433",\u040C:"\u041A",\u045C:"\u043A",A\u030B:"A",a\u030B:"a",E\u030B:"E",e\u030B:"e",I\u030B:"I",i\u030B:"i",\u01F8:"N",\u01F9:"n",\u1ED2:"O",\u1ED3:"o",\u1E50:"O",\u1E51:"o",\u1EEA:"U",\u1EEB:"u",\u1E80:"W",\u1E81:"w",\u1EF2:"Y",\u1EF3:"y",\u0200:"A",\u0201:"a",\u0204:"E",\u0205:"e",\u0208:"I",\u0209:"i",\u020C:"O",\u020D:"o",\u0210:"R",\u0211:"r",\u0214:"U",\u0215:"u",B\u030C:"B",b\u030C:"b",\u010C\u0323:"C",\u010D\u0323:"c",\u00CA\u030C:"E",\u00EA\u030C:"e",F\u030C:"F",f\u030C:"f",\u01E6:"G",\u01E7:"g",\u021E:"H",\u021F:"h",J\u030C:"J",\u01F0:"j",\u01E8:"K",\u01E9:"k",M\u030C:"M",m\u030C:"m",P\u030C:"P",p\u030C:"p",Q\u030C:"Q",q\u030C:"q",\u0158\u0329:"R",\u0159\u0329:"r",\u1E66:"S",\u1E67:"s",V\u030C:"V",v\u030C:"v",W\u030C:"W",w\u030C:"w",X\u030C:"X",x\u030C:"x",Y\u030C:"Y",y\u030C:"y",A\u0327:"A",a\u0327:"a",B\u0327:"B",b\u0327:"b",\u1E10:"D",\u1E11:"d",\u0228:"E",\u0229:"e",\u0190\u0327:"E",\u025B\u0327:"e",\u1E28:"H",\u1E29:"h",I\u0327:"I",i\u0327:"i",\u0197\u0327:"I",\u0268\u0327:"i",M\u0327:"M",m\u0327:"m",O\u0327:"O",o\u0327:"o",Q\u0327:"Q",q\u0327:"q",U\u0327:"U",u\u0327:"u",X\u0327:"X",x\u0327:"x",Z\u0327:"Z",z\u0327:"z"},ru=Object.keys(Qs).join("|"),ou=new RegExp(ru,"g");function iu(e){return e.replace(ou,t=>Qs[t])}var ze={CASE_SENSITIVE_EQUAL:7,EQUAL:6,STARTS_WITH:5,WORD_STARTS_WITH:4,CONTAINS:3,ACRONYM:2,MATCHES:1,NO_MATCH:0};function ts(e,t,n){var r;if(n=n||{},n.threshold=(r=n.threshold)!=null?r:ze.MATCHES,!n.accessors){let l=ns(e,t,n);return{rankedValue:e,rank:l,accessorIndex:-1,accessorThreshold:n.threshold,passed:l>=n.threshold}}let o=cu(e,n.accessors),i={rankedValue:e,rank:ze.NO_MATCH,accessorIndex:-1,accessorThreshold:n.threshold,passed:!1};for(let l=0;l<o.length;l++){let a=o[l],s=ns(a.itemValue,t,n),{minRanking:c,maxRanking:d,threshold:u=n.threshold}=a.attributes;s<c&&s>=ze.MATCHES?s=c:s>d&&(s=d),s=Math.min(s,d),s>=u&&s>i.rank&&(i.rank=s,i.passed=!0,i.accessorIndex=l,i.accessorThreshold=u,i.rankedValue=a.itemValue)}return i}function ns(e,t,n){return e=rs(e,n),t=rs(t,n),t.length>e.length?ze.NO_MATCH:e===t?ze.CASE_SENSITIVE_EQUAL:(e=e.toLowerCase(),t=t.toLowerCase(),e===t?ze.EQUAL:e.startsWith(t)?ze.STARTS_WITH:e.includes(` ${t}`)?ze.WORD_STARTS_WITH:e.includes(t)?ze.CONTAINS:t.length===1?ze.NO_MATCH:su(e).includes(t)?ze.ACRONYM:lu(e,t))}function su(e){let t="";return e.split(" ").forEach(r=>{r.split("-").forEach(i=>{t+=i.substr(0,1)})}),t}function lu(e,t){let n=0,r=0;function o(s,c,d){for(let u=d,f=c.length;u<f;u++)if(c[u]===s)return n+=1,u+1;return-1}function i(s){let c=1/s,d=n/t.length;return ze.MATCHES+d*c}let l=o(t[0],e,0);if(l<0)return ze.NO_MATCH;r=l;for(let s=1,c=t.length;s<c;s++){let d=t[s];if(r=o(d,e,r),!(r>-1))return ze.NO_MATCH}let a=r-l;return i(a)}function rs(e,t){let{keepDiacritics:n}=t;return e=`${e}`,n||(e=iu(e)),e}function au(e,t){let n=t;typeof t=="object"&&(n=t.accessor);let r=n(e);return r==null?[]:Array.isArray(r)?r:[String(r)]}function cu(e,t){let n=[];for(let r=0,o=t.length;r<o;r++){let i=t[r],l=uu(i),a=au(e,i);for(let s=0,c=a.length;s<c;s++)n.push({itemValue:a[s],attributes:l})}return n}var os={maxRanking:1/0,minRanking:-1/0};function uu(e){return typeof e=="function"?os:{...os,...e}}var du={data:""},fu=e=>typeof self=="object"?((e?e.querySelector("#_goober"):self._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||du,gu=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,hu=/\/\*[^]*?\*\/|  +/g,is=/\n+/g,Wt=(e,t)=>{let n="",r="",o="";for(let i in e){let l=e[i];i[0]=="@"?i[1]=="i"?n=i+" "+l+";":r+=i[1]=="f"?Wt(l,i):i+"{"+Wt(l,i[1]=="k"?"":t)+"}":typeof l=="object"?r+=Wt(l,t?t.replace(/([^,])+/g,a=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,s=>/&/.test(s)?s.replace(/&/g,a):a?a+" "+s:s)):i):l!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=Wt.p?Wt.p(i,l):i+":"+l+";")}return n+(t&&o?t+"{"+o+"}":o)+r},Ct={},Ys=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+Ys(e[n]);return t}return e},yu=(e,t,n,r,o)=>{let i=Ys(e),l=Ct[i]||(Ct[i]=(s=>{let c=0,d=11;for(;c<s.length;)d=101*d+s.charCodeAt(c++)>>>0;return"go"+d})(i));if(!Ct[l]){let s=i!==e?e:(c=>{let d,u,f=[{}];for(;d=gu.exec(c.replace(hu,""));)d[4]?f.shift():d[3]?(u=d[3].replace(is," ").trim(),f.unshift(f[0][u]=f[0][u]||{})):f[0][d[1]]=d[2].replace(is," ").trim();return f[0]})(e);Ct[l]=Wt(o?{["@keyframes "+l]:s}:s,n?"":"."+l)}let a=n&&Ct.g?Ct.g:null;return n&&(Ct.g=Ct[l]),((s,c,d,u)=>{u?c.data=c.data.replace(u,s):c.data.indexOf(s)===-1&&(c.data=d?s+c.data:c.data+s)})(Ct[l],t,r,a),l},mu=(e,t,n)=>e.reduce((r,o,i)=>{let l=t[i];if(l&&l.call){let a=l(n),s=a&&a.props&&a.props.className||/^go/.test(a)&&a;l=s?"."+s:a&&typeof a=="object"?a.props?"":Wt(a,""):a===!1?"":a}return r+o+(l??"")},"");function Q(e){let t=this||{},n=e.call?e(t.p):e;return yu(n.unshift?n.raw?mu(n,[].slice.call(arguments,1),t.p):n.reduce((r,o)=>Object.assign(r,o&&o.call?o(t.p):o),{}):n,fu(t.target),t.g,t.o,t.k)}Q.bind({g:1});Q.bind({k:1});function Xs(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=Xs(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function L(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=Xs(e))&&(r&&(r+=" "),r+=t);return r}function vu(e,t){let n=pe(e);if(Ie){let u=n.slice();return()=>u}let{onChange:r}=t,o=new Set(t.appear?void 0:n),i=new WeakSet,[l,a]=z([],{equals:!1}),[s]=mi(),c=u=>{a(f=>(f.push.apply(f,u),f));for(let f of u)i.delete(f)},d=(u,f,h)=>u.splice(h,0,f);return T(u=>{let f=l(),h=e();if(h[Dn],pe(s))return s(),u;if(f.length){let g=u.filter(y=>!f.includes(y));return f.length=0,r({list:g,added:[],removed:[],unchanged:g,finishRemoved:c}),g}return pe(()=>{let g=new Set(h),y=h.slice(),v=[],p=[],b=[];for(let x of h)(o.has(x)?b:v).push(x);let w=!v.length;for(let x=0;x<u.length;x++){let S=u[x];g.has(S)||(i.has(S)||(p.push(S),i.add(S)),d(y,S,x)),w&&S!==y[x]&&(w=!1)}return!p.length&&w?u:(r({list:y,added:v,removed:p,unchanged:b,finishRemoved:c}),o=g,y)})},t.appear?[]:n.slice())}function _e(...e){return Vc(e)}var ss=Ie?e=>e!=null&&typeof e=="object"&&"t"in e:e=>e instanceof Element;function so(e,t){if(t(e))return e;if(typeof e=="function"&&!e.length)return so(e(),t);if(Array.isArray(e)){let n=[];for(let r of e){let o=so(r,t);o&&(Array.isArray(o)?n.push.apply(n,o):n.push(o))}return n.length?n:null}return null}function pu(e,t=ss,n=ss){let r=T(e),o=T(()=>so(r(),Ie?n:t));return o.toArray=()=>{let i=o();return Array.isArray(i)?i:i?[i]:[]},o}function bu(e){return T(()=>{let t=e.name||"s";return{enterActive:(e.enterActiveClass||t+"-enter-active").split(" "),enter:(e.enterClass||t+"-enter").split(" "),enterTo:(e.enterToClass||t+"-enter-to").split(" "),exitActive:(e.exitActiveClass||t+"-exit-active").split(" "),exit:(e.exitClass||t+"-exit").split(" "),exitTo:(e.exitToClass||t+"-exit-to").split(" "),move:(e.moveClass||t+"-move").split(" ")}})}function Zs(e){requestAnimationFrame(()=>requestAnimationFrame(e))}function wu(e,t,n,r){let{onBeforeEnter:o,onEnter:i,onAfterEnter:l}=t;o?.(n),n.classList.add(...e.enter),n.classList.add(...e.enterActive),queueMicrotask(()=>{if(!n.parentNode)return r?.();i?.(n,()=>a())}),Zs(()=>{n.classList.remove(...e.enter),n.classList.add(...e.enterTo),(!i||i.length<2)&&(n.addEventListener("transitionend",a),n.addEventListener("animationend",a))});function a(s){(!s||s.target===n)&&(n.removeEventListener("transitionend",a),n.removeEventListener("animationend",a),n.classList.remove(...e.enterActive),n.classList.remove(...e.enterTo),l?.(n))}}function xu(e,t,n,r){let{onBeforeExit:o,onExit:i,onAfterExit:l}=t;if(!n.parentNode)return r?.();o?.(n),n.classList.add(...e.exit),n.classList.add(...e.exitActive),i?.(n,()=>a()),Zs(()=>{n.classList.remove(...e.exit),n.classList.add(...e.exitTo),(!i||i.length<2)&&(n.addEventListener("transitionend",a),n.addEventListener("animationend",a))});function a(s){(!s||s.target===n)&&(r?.(),n.removeEventListener("transitionend",a),n.removeEventListener("animationend",a),n.classList.remove(...e.exitActive),n.classList.remove(...e.exitTo),l?.(n))}}var ls=e=>{let t=bu(e);return vu(pu(()=>e.children).toArray,{appear:e.appear,onChange({added:n,removed:r,finishRemoved:o,list:i}){let l=t();for(let s of n)wu(l,e,s);let a=[];for(let s of i)s.isConnected&&(s instanceof HTMLElement||s instanceof SVGElement)&&a.push({el:s,rect:s.getBoundingClientRect()});queueMicrotask(()=>{let s=[];for(let{el:c,rect:d}of a)if(c.isConnected){let u=c.getBoundingClientRect(),f=d.left-u.left,h=d.top-u.top;(f||h)&&(c.style.transform=`translate(${f}px, ${h}px)`,c.style.transitionDuration="0s",s.push(c))}document.body.offsetHeight;for(let c of s){let d=function(u){(u.target===c||/transform$/.test(u.propertyName))&&(c.removeEventListener("transitionend",d),c.classList.remove(...l.move))};c.classList.add(...l.move),c.style.transform=c.style.transitionDuration="",c.addEventListener("transitionend",d)}});for(let s of r)xu(l,e,s,()=>o([s]))}})},Jr=Symbol("fallback");function as(e){for(let t of e)t.dispose()}function Su(e,t,n,r={}){if(Ie){let l=e(),a=[];if(l&&l.length)for(let s=0,c=l.length;s<c;s++)a.push(n(()=>l[s],()=>s));else r.fallback&&(a=[r.fallback()]);return()=>a}let o=new Map;return U(()=>as(o.values())),()=>{let l=e()||[];return l[Dn],pe(()=>{if(!l.length)return as(o.values()),o.clear(),r.fallback?[St(u=>(o.set(Jr,{dispose:u}),r.fallback()))]:[];let a=new Array(l.length),s=o.get(Jr);if(!o.size||s){s?.dispose(),o.delete(Jr);for(let d=0;d<l.length;d++){let u=l[d],f=t(u,d);i(a,u,d,f)}return a}let c=new Set(o.keys());for(let d=0;d<l.length;d++){let u=l[d],f=t(u,d);c.delete(f);let h=o.get(f);h?(a[d]=h.mapped,h.setIndex?.(d),h.setItem(()=>u)):i(a,u,d,f)}for(let d of c)o.get(d)?.dispose(),o.delete(d);return a})};function i(l,a,s,c){St(d=>{let[u,f]=z(a),h={setItem:f,dispose:d};if(n.length>1){let[g,y]=z(s);h.setIndex=y,h.mapped=n(u,g)}else h.mapped=n(u);o.set(c,h),l[s]=h.mapped})}}function wr(e){let{by:t}=e;return T(Su(()=>e.each,typeof t=="function"?t:n=>n[t],e.children,"fallback"in e?{fallback:()=>e.fallback}:void 0))}function Cu(e,t,n,r){return e.addEventListener(t,n,r),Hc(e.removeEventListener.bind(e,t,n,r))}function $u(e,t,n,r){if(Ie)return;let o=()=>{oo(E(e)).forEach(i=>{i&&oo(E(t)).forEach(l=>Cu(i,l,n,r))})};typeof e=="function"?V(o):B(o)}function ku(e,t){if(Ie)return{observe:Zi,unobserve:Zi};let n=new ResizeObserver(e);return U(n.disconnect.bind(n)),{observe:r=>n.observe(r,t),unobserve:n.unobserve.bind(n)}}function Js(e,t,n){if(Ie)return;let r=new WeakMap,{observe:o,unobserve:i}=ku(l=>{for(let a of l){let{contentRect:s,target:c}=a,d=Math.round(s.width),u=Math.round(s.height),f=r.get(c);(!f||f.width!==d||f.height!==u)&&(t(s,c,a),r.set(c,{width:d,height:u}))}},n);V(l=>{let a=Nc(oo(E(e)));return Gc(a,l,o,i),a},[])}var Eu=/((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g;function cs(e){let t={},n;for(;n=Eu.exec(e);)t[n[1]]=n[2];return t}function Ar(e,t){if(typeof e=="string"){if(typeof t=="string")return`${e};${t}`;e=cs(e)}else typeof t=="string"&&(t=cs(t));return{...e,...t}}function Au(e,t,n=-1){return n in e?[...e.slice(0,n),t,...e.slice(n)]:[...e,t]}function lo(e,t){let n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function Mu(e){return typeof e=="number"}function un(e){return Object.prototype.toString.call(e)==="[object String]"}function Tu(e){return typeof e=="function"}function Un(e){return t=>`${e()}-${t}`}function Ye(e,t){return e?e===t||e.contains(t):!1}function Rn(e,t=!1){let{activeElement:n}=gt(e);if(!n?.nodeName)return null;if(el(n)&&n.contentDocument)return Rn(n.contentDocument.body,t);if(t){let r=n.getAttribute("aria-activedescendant");if(r){let o=gt(n).getElementById(r);if(o)return o}}return n}function Ou(e){return gt(e).defaultView||self}function gt(e){return e?e.ownerDocument||e:document}function el(e){return e.tagName==="IFRAME"}var bo=(e=>(e.Escape="Escape",e.Enter="Enter",e.Tab="Tab",e.Space=" ",e.ArrowDown="ArrowDown",e.ArrowLeft="ArrowLeft",e.ArrowRight="ArrowRight",e.ArrowUp="ArrowUp",e.End="End",e.Home="Home",e.PageDown="PageDown",e.PageUp="PageUp",e))(bo||{});function wo(e){return typeof self<"u"&&self.navigator!=null?e.test(self.navigator.userAgentData?.platform||self.navigator.platform):!1}function Mr(){return wo(/^Mac/i)}function Du(){return wo(/^iPhone/i)}function Iu(){return wo(/^iPad/i)||Mr()&&navigator.maxTouchPoints>1}function Pu(){return Du()||Iu()}function Fu(){return Mr()||Pu()}function me(e,t){return t&&(Tu(t)?t(e):t[0](t[1],e)),e?.defaultPrevented}function Me(e){return t=>{for(let n of e)me(t,n)}}function Lu(e){return Mr()?e.metaKey&&!e.ctrlKey:e.ctrlKey&&!e.metaKey}function Fe(e){if(e)if(qu())e.focus({preventScroll:!0});else{let t=_u(e);e.focus(),Ru(t)}}var vr=null;function qu(){if(vr==null){vr=!1;try{document.createElement("div").focus({get preventScroll(){return vr=!0,!0}})}catch{}}return vr}function _u(e){let t=e.parentNode,n=[],r=document.scrollingElement||document.documentElement;for(;t instanceof HTMLElement&&t!==r;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;return r instanceof HTMLElement&&n.push({element:r,scrollTop:r.scrollTop,scrollLeft:r.scrollLeft}),n}function Ru(e){for(let{element:t,scrollTop:n,scrollLeft:r}of e)t.scrollTop=n,t.scrollLeft=r}var tl=["input:not([type='hidden']):not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","[tabindex]","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]:not([contenteditable='false'])"],zu=[...tl,'[tabindex]:not([tabindex="-1"]):not([disabled])'],xo=tl.join(":not([hidden]),")+",[tabindex]:not([disabled]):not([hidden])",Ku=zu.join(':not([hidden]):not([tabindex="-1"]),');function nl(e,t){let r=Array.from(e.querySelectorAll(xo)).filter(us);return t&&us(e)&&r.unshift(e),r.forEach((o,i)=>{if(el(o)&&o.contentDocument){let l=o.contentDocument.body,a=nl(l,!1);r.splice(i,1,...a)}}),r}function us(e){return rl(e)&&!Bu(e)}function rl(e){return e.matches(xo)&&So(e)}function Bu(e){return parseInt(e.getAttribute("tabindex")||"0",10)<0}function So(e,t){return e.nodeName!=="#comment"&&Nu(e)&&Vu(e,t)&&(!e.parentElement||So(e.parentElement,e))}function Nu(e){if(!(e instanceof HTMLElement)&&!(e instanceof SVGElement))return!1;let{display:t,visibility:n}=e.style,r=t!=="none"&&n!=="hidden"&&n!=="collapse";if(r){if(!e.ownerDocument.defaultView)return r;let{getComputedStyle:o}=e.ownerDocument.defaultView,{display:i,visibility:l}=o(e);r=i!=="none"&&l!=="hidden"&&l!=="collapse"}return r}function Vu(e,t){return!e.hasAttribute("hidden")&&(e.nodeName==="DETAILS"&&t&&t.nodeName!=="SUMMARY"?e.hasAttribute("open"):!0)}function Uu(e,t,n){let r=t?.tabbable?Ku:xo,o=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode(i){return t?.from?.contains(i)?NodeFilter.FILTER_REJECT:i.matches(r)&&So(i)&&(!t?.accept||t.accept(i))?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});return t?.from&&(o.currentNode=t.from),o}function ds(e){for(;e&&!Hu(e);)e=e.parentElement;return e||document.scrollingElement||document.documentElement}function Hu(e){let t=self.getComputedStyle(e);return/(auto|scroll)/.test(t.overflow+t.overflowX+t.overflowY)}function Gu(){}function ju(e,t){let[n,r]=e,o=!1,i=t.length;for(let l=i,a=0,s=l-1;a<l;s=a++){let[c,d]=t[a],[u,f]=t[s],[,h]=t[s===0?l-1:s-1]||[0,0],g=(d-f)*(n-c)-(c-u)*(r-d);if(f<d){if(r>=f&&r<d){if(g===0)return!0;g>0&&(r===f?r>h&&(o=!o):o=!o)}}else if(d<f){if(r>d&&r<=f){if(g===0)return!0;g<0&&(r===f?r<h&&(o=!o):o=!o)}}else if(r==d&&(n>=u&&n<=c||n>=c&&n<=u))return!0}return o}function J(e,t){return W(e,t)}var Fn=new Map,fs=new Set;function gs(){if(typeof self>"u")return;let e=n=>{if(!n.target)return;let r=Fn.get(n.target);r||(r=new Set,Fn.set(n.target,r),n.target.addEventListener("transitioncancel",t)),r.add(n.propertyName)},t=n=>{if(!n.target)return;let r=Fn.get(n.target);if(r&&(r.delete(n.propertyName),r.size===0&&(n.target.removeEventListener("transitioncancel",t),Fn.delete(n.target)),Fn.size===0)){for(let o of fs)o();fs.clear()}};document.body.addEventListener("transitionrun",e),document.body.addEventListener("transitionend",t)}typeof document<"u"&&(document.readyState!=="loading"?gs():document.addEventListener("DOMContentLoaded",gs));function ao(e,t){let n=hs(e,t,"left"),r=hs(e,t,"top"),o=t.offsetWidth,i=t.offsetHeight,l=e.scrollLeft,a=e.scrollTop,s=l+e.offsetWidth,c=a+e.offsetHeight;n<=l?l=n:n+o>s&&(l+=n+o-s),r<=a?a=r:r+i>c&&(a+=r+i-c),e.scrollLeft=l,e.scrollTop=a}function hs(e,t,n){let r=n==="left"?"offsetLeft":"offsetTop",o=0;for(;t.offsetParent&&(o+=t[r],t.offsetParent!==e);){if(t.offsetParent.contains(e)){o-=e[r];break}t=t.offsetParent}return o}function Wu(e,t){if(document.contains(e)){let n=document.scrollingElement||document.documentElement;if(self.getComputedStyle(n).overflow==="hidden"){let o=ds(e);for(;e&&o&&e!==n&&o!==n;)ao(o,e),e=o,o=ds(e)}else{let{left:o,top:i}=e.getBoundingClientRect();e?.scrollIntoView?.({block:"nearest"});let{left:l,top:a}=e.getBoundingClientRect();(Math.abs(o-l)>1||Math.abs(i-a)>1)&&e.scrollIntoView?.({block:"nearest"})}}}var ol={border:"0",clip:"rect(0 0 0 0)","clip-path":"inset(50%)",height:"1px",margin:"0 -1px -1px 0",overflow:"hidden",padding:"0",position:"absolute",width:"1px","white-space":"nowrap"};function Xe(e){return t=>(e(t),()=>e(void 0))}function Tr(e,t){let[n,r]=z(ys(t?.()));return V(()=>{r(e()?.tagName.toLowerCase()||ys(t?.()))}),n}function ys(e){return un(e)?e:void 0}function ve(e){let[t,n]=ee(e,["as"]);if(!t.as)throw new Error("[kobalte]: Polymorphic is missing the required `as` prop.");return m(Di,W(n,{get component(){return t.as}}))}var Qu=["id","name","validationState","required","disabled","readOnly"];function Yu(e){let t=`form-control-${Be()}`,n=J({id:t},e),[r,o]=z(),[i,l]=z(),[a,s]=z(),[c,d]=z(),u=(y,v,p)=>{let b=p!=null||r()!=null;return[p,r(),b&&v!=null?y:void 0].filter(Boolean).join(" ")||void 0},f=y=>[a(),c(),y].filter(Boolean).join(" ")||void 0,h=T(()=>({"data-valid":E(n.validationState)==="valid"?"":void 0,"data-invalid":E(n.validationState)==="invalid"?"":void 0,"data-required":E(n.required)?"":void 0,"data-disabled":E(n.disabled)?"":void 0,"data-readonly":E(n.readOnly)?"":void 0}));return{formControlContext:{name:()=>E(n.name)??E(n.id),dataset:h,validationState:()=>E(n.validationState),isRequired:()=>E(n.required),isDisabled:()=>E(n.disabled),isReadOnly:()=>E(n.readOnly),labelId:r,fieldId:i,descriptionId:a,errorMessageId:c,getAriaLabelledBy:u,getAriaDescribedBy:f,generateId:Un(()=>E(n.id)),registerLabel:Xe(o),registerField:Xe(l),registerDescription:Xe(s),registerErrorMessage:Xe(d)}}}var il=Ee();function Hn(){let e=$e(il);if(e===void 0)throw new Error("[kobalte]: `useFormControlContext` must be used within a `FormControlContext.Provider` component");return e}function sl(e){let t=Hn(),n=J({id:t.generateId("description")},e);return V(()=>U(t.registerDescription(n.id))),m(ve,W({as:"div"},()=>t.dataset(),n))}function ll(e){let t=Hn(),n=J({id:t.generateId("error-message")},e),[r,o]=ee(n,["forceMount"]),i=()=>t.validationState()==="invalid";return V(()=>{i()&&U(t.registerErrorMessage(o.id))}),m(K,{get when(){return r.forceMount||i()},get children(){return m(ve,W({as:"div"},()=>t.dataset(),o))}})}function Xu(e){let t,n=Hn(),r=J({id:n.generateId("label")},e),[o,i]=ee(r,["ref"]),l=Tr(()=>t,()=>"label");return V(()=>U(n.registerLabel(i.id))),m(ve,W({as:"label",ref(a){let s=_e(c=>t=c,o.ref);typeof s=="function"&&s(a)},get for(){return xe(()=>l()==="label")()?n.fieldId():void 0}},()=>n.dataset(),i))}function Zu(e,t){V(ct(e,n=>{if(n==null)return;let r=Ju(n);r!=null&&(r.addEventListener("reset",t,{passive:!0}),U(()=>{r.removeEventListener("reset",t)}))}))}function Ju(e){return ed(e)?e.form:e.closest("form")}function ed(e){return e.matches("textarea, input, select, button")}function Gn(e){let[t,n]=z(e.defaultValue?.()),r=T(()=>e.value?.()!==void 0),o=T(()=>r()?e.value?.():t());return[o,l=>{pe(()=>{let a=Uc(l,o());return Object.is(a,o())||(r()||n(a),e.onChange?.(a)),a})}]}function al(e){let[t,n]=Gn(e);return[()=>t()??!1,n]}function td(e){let[t,n]=Gn(e);return[()=>t()??[],n]}function nd(e={}){let[t,n]=al({value:()=>E(e.isSelected),defaultValue:()=>!!E(e.defaultIsSelected),onChange:i=>e.onSelectedChange?.(i)});return{isSelected:t,setIsSelected:i=>{!E(e.isReadOnly)&&!E(e.isDisabled)&&n(i)},toggle:()=>{!E(e.isReadOnly)&&!E(e.isDisabled)&&n(!t())}}}var rd=Object.defineProperty,Or=(e,t)=>{for(var n in t)rd(e,n,{get:t[n],enumerable:!0})},cl=Ee();function ul(){return $e(cl)}function od(){let e=ul();if(e===void 0)throw new Error("[kobalte]: `useDomCollectionContext` must be used within a `DomCollectionProvider` component");return e}function dl(e,t){return!!(t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING)}function id(e,t){let n=t.ref();if(!n)return-1;let r=e.length;if(!r)return-1;for(;r--;){let o=e[r]?.ref();if(o&&dl(o,n))return r+1}return 0}function sd(e){let t=e.map((r,o)=>[o,r]),n=!1;return t.sort(([r,o],[i,l])=>{let a=o.ref(),s=l.ref();return a===s||!a||!s?0:dl(a,s)?(r>i&&(n=!0),-1):(r<i&&(n=!0),1)}),n?t.map(([r,o])=>o):e}function fl(e,t){let n=sd(e);e!==n&&t(n)}function ld(e){let t=e[0],n=e[e.length-1]?.ref(),r=t?.ref()?.parentElement;for(;r;){if(n&&r.contains(n))return r;r=r.parentElement}return gt(r).body}function ad(e,t){V(()=>{let n=setTimeout(()=>{fl(e(),t)});U(()=>clearTimeout(n))})}function cd(e,t){if(typeof IntersectionObserver!="function"){ad(e,t);return}let n=[];V(()=>{let r=()=>{let l=!!n.length;n=e(),l&&fl(e(),t)},o=ld(e()),i=new IntersectionObserver(r,{root:o});for(let l of e()){let a=l.ref();a&&i.observe(a)}U(()=>i.disconnect())})}function ud(e={}){let[t,n]=td({value:()=>E(e.items),onChange:i=>e.onItemsChange?.(i)});cd(t,n);let r=i=>(n(l=>{let a=id(l,i);return Au(l,i,a)}),()=>{n(l=>{let a=l.filter(s=>s.ref()!==i.ref());return l.length===a.length?l:a})});return{DomCollectionProvider:i=>m(cl.Provider,{value:{registerItem:r},get children(){return i.children}})}}function dd(e){let t=od(),n=J({shouldRegisterItem:!0},e);V(()=>{if(!n.shouldRegisterItem)return;let r=t.registerItem(n.getItem());U(r)})}function gl(e){let t=e.startIndex??0,n=e.startLevel??0,r=[],o=s=>{if(s==null)return"";let c=e.getKey??"key",d=un(c)?s[c]:c(s);return d!=null?String(d):""},i=s=>{if(s==null)return"";let c=e.getTextValue??"textValue",d=un(c)?s[c]:c(s);return d!=null?String(d):""},l=s=>{if(s==null)return!1;let c=e.getDisabled??"disabled";return(un(c)?s[c]:c(s))??!1},a=s=>{if(s!=null)return un(e.getSectionChildren)?s[e.getSectionChildren]:e.getSectionChildren?.(s)};for(let s of e.dataSource){if(un(s)||Mu(s)){r.push({type:"item",rawValue:s,key:String(s),textValue:String(s),disabled:l(s),level:n,index:t}),t++;continue}if(a(s)!=null){r.push({type:"section",rawValue:s,key:"",textValue:"",disabled:!1,level:n,index:t}),t++;let c=a(s)??[];if(c.length>0){let d=gl({dataSource:c,getKey:e.getKey,getTextValue:e.getTextValue,getDisabled:e.getDisabled,getSectionChildren:e.getSectionChildren,startIndex:t,startLevel:n+1});r.push(...d),t+=d.length}}else r.push({type:"item",rawValue:s,key:o(s),textValue:i(s),disabled:l(s),level:n,index:t}),t++}return r}function fd(e,t=[]){return T(()=>{let n=gl({dataSource:E(e.dataSource),getKey:E(e.getKey),getTextValue:E(e.getTextValue),getDisabled:E(e.getDisabled),getSectionChildren:E(e.getSectionChildren)});for(let r=0;r<t.length;r++)t[r]();return e.factory(n)})}var gd=new Set(["Avst","Arab","Armi","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),hd=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]);function yd(e){if(Intl.Locale){let n=new Intl.Locale(e).maximize().script??"";return gd.has(n)}let t=e.split("-")[0];return hd.has(t)}function md(e){return yd(e)?"rtl":"ltr"}function hl(){let e=typeof navigator<"u"&&(navigator.language||navigator.userLanguage)||"en-US";return{locale:e,direction:md(e)}}var co=hl(),zn=new Set;function ms(){co=hl();for(let e of zn)e(co)}function vd(){let e={locale:"en-US",direction:"ltr"},[t,n]=z(co),r=T(()=>Ie?e:t());return ut(()=>{zn.size===0&&self.addEventListener("languagechange",ms),zn.add(n),U(()=>{zn.delete(n),zn.size===0&&self.removeEventListener("languagechange",ms)})}),{locale:()=>r().locale,direction:()=>r().direction}}var pd=Ee();function Kt(){let e=vd();return $e(pd)||e}var eo=new Map;function bd(e){let{locale:t}=Kt(),n=T(()=>t()+(e?Object.entries(e).sort((r,o)=>r[0]<o[0]?-1:1).join():""));return T(()=>{let r=n(),o;return eo.has(r)&&(o=eo.get(r)),o||(o=new Intl.Collator(t(),e),eo.set(r,o)),o})}var $t=class yl extends Set{anchorKey;currentKey;constructor(t,n,r){super(t),t instanceof yl?(this.anchorKey=n||t.anchorKey,this.currentKey=r||t.currentKey):(this.anchorKey=n,this.currentKey=r)}};function wd(e){let[t,n]=Gn(e);return[()=>t()??new $t,n]}function ml(e){return Fu()?e.altKey:e.ctrlKey}function dn(e){return Mr()?e.metaKey:e.ctrlKey}function vs(e){return new $t(e)}function xd(e,t){if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0}function Sd(e){let t=J({selectionMode:"none",selectionBehavior:"toggle"},e),[n,r]=z(!1),[o,i]=z(),l=T(()=>{let y=E(t.selectedKeys);return y!=null?vs(y):y}),a=T(()=>{let y=E(t.defaultSelectedKeys);return y!=null?vs(y):new $t}),[s,c]=wd({value:l,defaultValue:a,onChange:y=>t.onSelectionChange?.(y)}),[d,u]=z(E(t.selectionBehavior)),f=()=>E(t.selectionMode),h=()=>E(t.disallowEmptySelection)??!1,g=y=>{(E(t.allowDuplicateSelectionEvents)||!xd(y,s()))&&c(y)};return V(()=>{let y=s();E(t.selectionBehavior)==="replace"&&d()==="toggle"&&typeof y=="object"&&y.size===0&&u("replace")}),V(()=>{u(E(t.selectionBehavior)??"toggle")}),{selectionMode:f,disallowEmptySelection:h,selectionBehavior:d,setSelectionBehavior:u,isFocused:n,setFocused:r,focusedKey:o,setFocusedKey:i,selectedKeys:s,setSelectedKeys:g}}function Cd(e){let[t,n]=z(""),[r,o]=z(-1);return{typeSelectHandlers:{onKeyDown:l=>{if(E(e.isDisabled))return;let a=E(e.keyboardDelegate),s=E(e.selectionManager);if(!a.getKeyForSearch)return;let c=$d(l.key);if(!c||l.ctrlKey||l.metaKey)return;c===" "&&t().trim().length>0&&(l.preventDefault(),l.stopPropagation());let d=n(f=>f+c),u=a.getKeyForSearch(d,s.focusedKey())??a.getKeyForSearch(d);u==null&&kd(d)&&(d=d[0],u=a.getKeyForSearch(d,s.focusedKey())??a.getKeyForSearch(d)),u!=null&&(s.setFocusedKey(u),e.onTypeSelect?.(u)),clearTimeout(r()),o(self.setTimeout(()=>n(""),500))}}}}function $d(e){return e.length===1||!/^[A-Z]/i.test(e)?e:""}function kd(e){return e.split("").every(t=>t===e[0])}function Ed(e,t,n){let o=W({selectOnFocus:()=>E(e.selectionManager).selectionBehavior()==="replace"},e),i=()=>t(),{direction:l}=Kt(),a={top:0,left:0};$u(()=>E(o.isVirtualized)?void 0:i(),"scroll",()=>{let v=i();v&&(a={top:v.scrollTop,left:v.scrollLeft})});let{typeSelectHandlers:s}=Cd({isDisabled:()=>E(o.disallowTypeAhead),keyboardDelegate:()=>E(o.keyboardDelegate),selectionManager:()=>E(o.selectionManager)}),c=()=>E(o.orientation)??"vertical",d=v=>{me(v,s.onKeyDown),v.altKey&&v.key==="Tab"&&v.preventDefault();let p=t();if(!p?.contains(v.target))return;let b=E(o.selectionManager),w=E(o.selectOnFocus),x=P=>{P!=null&&(b.setFocusedKey(P),v.shiftKey&&b.selectionMode()==="multiple"?b.extendSelection(P):w&&!ml(v)&&b.replaceSelection(P))},S=E(o.keyboardDelegate),q=E(o.shouldFocusWrap),D=b.focusedKey();switch(v.key){case(c()==="vertical"?"ArrowDown":"ArrowRight"):{if(S.getKeyBelow){v.preventDefault();let P;D!=null?P=S.getKeyBelow(D):P=S.getFirstKey?.(),P==null&&q&&(P=S.getFirstKey?.(D)),x(P)}break}case(c()==="vertical"?"ArrowUp":"ArrowLeft"):{if(S.getKeyAbove){v.preventDefault();let P;D!=null?P=S.getKeyAbove(D):P=S.getLastKey?.(),P==null&&q&&(P=S.getLastKey?.(D)),x(P)}break}case(c()==="vertical"?"ArrowLeft":"ArrowUp"):{if(S.getKeyLeftOf){v.preventDefault();let P=l()==="rtl",C;D!=null?C=S.getKeyLeftOf(D):C=P?S.getFirstKey?.():S.getLastKey?.(),x(C)}break}case(c()==="vertical"?"ArrowRight":"ArrowDown"):{if(S.getKeyRightOf){v.preventDefault();let P=l()==="rtl",C;D!=null?C=S.getKeyRightOf(D):C=P?S.getLastKey?.():S.getFirstKey?.(),x(C)}break}case"Home":if(S.getFirstKey){v.preventDefault();let P=S.getFirstKey(D,dn(v));P!=null&&(b.setFocusedKey(P),dn(v)&&v.shiftKey&&b.selectionMode()==="multiple"?b.extendSelection(P):w&&b.replaceSelection(P))}break;case"End":if(S.getLastKey){v.preventDefault();let P=S.getLastKey(D,dn(v));P!=null&&(b.setFocusedKey(P),dn(v)&&v.shiftKey&&b.selectionMode()==="multiple"?b.extendSelection(P):w&&b.replaceSelection(P))}break;case"PageDown":if(S.getKeyPageBelow&&D!=null){v.preventDefault();let P=S.getKeyPageBelow(D);x(P)}break;case"PageUp":if(S.getKeyPageAbove&&D!=null){v.preventDefault();let P=S.getKeyPageAbove(D);x(P)}break;case"a":dn(v)&&b.selectionMode()==="multiple"&&E(o.disallowSelectAll)!==!0&&(v.preventDefault(),b.selectAll());break;case"Escape":v.defaultPrevented||(v.preventDefault(),E(o.disallowEmptySelection)||b.clearSelection());break;case"Tab":if(!E(o.allowsTabNavigation)){if(v.shiftKey)p.focus();else{let P=Uu(p,{tabbable:!0}),C,I;do I=P.lastChild(),I&&(C=I);while(I);C&&!C.contains(document.activeElement)&&Fe(C)}break}}},u=v=>{let p=E(o.selectionManager),b=E(o.keyboardDelegate),w=E(o.selectOnFocus);if(p.isFocused()){v.currentTarget.contains(v.target)||p.setFocused(!1);return}if(v.currentTarget.contains(v.target)){if(p.setFocused(!0),p.focusedKey()==null){let x=q=>{q!=null&&(p.setFocusedKey(q),w&&p.replaceSelection(q))},S=v.relatedTarget;S&&v.currentTarget.compareDocumentPosition(S)&Node.DOCUMENT_POSITION_FOLLOWING?x(p.lastSelectedKey()??b.getLastKey?.()):x(p.firstSelectedKey()??b.getFirstKey?.())}else if(!E(o.isVirtualized)){let x=i();if(x){x.scrollTop=a.top,x.scrollLeft=a.left;let S=x.querySelector(`[data-key="${p.focusedKey()}"]`);S&&(Fe(S),ao(x,S))}}}},f=v=>{let p=E(o.selectionManager);v.currentTarget.contains(v.relatedTarget)||p.setFocused(!1)},h=v=>{i()===v.target&&v.preventDefault()},g=()=>{let v=E(o.autoFocus);if(!v)return;let p=E(o.selectionManager),b=E(o.keyboardDelegate),w;v==="first"&&(w=b.getFirstKey?.()),v==="last"&&(w=b.getLastKey?.());let x=p.selectedKeys();x.size&&(w=x.values().next().value),p.setFocused(!0),p.setFocusedKey(w);let S=t();S&&w==null&&!E(o.shouldUseVirtualFocus)&&Fe(S)};return ut(()=>{o.deferAutoFocus?setTimeout(g,0):g()}),V(ct([i,()=>E(o.isVirtualized),()=>E(o.selectionManager).focusedKey()],v=>{let[p,b,w]=v;if(b)w&&o.scrollToKey?.(w);else if(w&&p){let x=p.querySelector(`[data-key="${w}"]`);x&&ao(p,x)}})),{tabIndex:T(()=>{if(!E(o.shouldUseVirtualFocus))return E(o.selectionManager).focusedKey()==null?0:-1}),onKeyDown:d,onMouseDown:h,onFocusIn:u,onFocusOut:f}}function vl(e,t){let n=()=>E(e.selectionManager),r=()=>E(e.key),o=()=>E(e.shouldUseVirtualFocus),i=b=>{n().selectionMode()!=="none"&&(n().selectionMode()==="single"?n().isSelected(r())&&!n().disallowEmptySelection()?n().toggleSelection(r()):n().replaceSelection(r()):b?.shiftKey?n().extendSelection(r()):n().selectionBehavior()==="toggle"||dn(b)||"pointerType"in b&&b.pointerType==="touch"?n().toggleSelection(r()):n().replaceSelection(r()))},l=()=>n().isSelected(r()),a=()=>E(e.disabled)||n().isDisabled(r()),s=()=>!a()&&n().canSelectItem(r()),c=null,d=b=>{s()&&(c=b.pointerType,b.pointerType==="mouse"&&b.button===0&&!E(e.shouldSelectOnPressUp)&&i(b))},u=b=>{s()&&b.pointerType==="mouse"&&b.button===0&&E(e.shouldSelectOnPressUp)&&E(e.allowsDifferentPressOrigin)&&i(b)},f=b=>{s()&&(E(e.shouldSelectOnPressUp)&&!E(e.allowsDifferentPressOrigin)||c!=="mouse")&&i(b)},h=b=>{!s()||!["Enter"," "].includes(b.key)||(ml(b)?n().toggleSelection(r()):i(b))},g=b=>{a()&&b.preventDefault()},y=b=>{let w=t();o()||a()||!w||b.target===w&&n().setFocusedKey(r())},v=T(()=>{if(!(o()||a()))return r()===n().focusedKey()?0:-1}),p=T(()=>E(e.virtualized)?void 0:r());return V(ct([t,r,o,()=>n().focusedKey(),()=>n().isFocused()],([b,w,x,S,q])=>{b&&w===S&&q&&!x&&document.activeElement!==b&&(e.focus?e.focus():Fe(b))})),{isSelected:l,isDisabled:a,allowsSelection:s,tabIndex:v,dataKey:p,onPointerDown:d,onPointerUp:u,onClick:f,onKeyDown:h,onMouseDown:g,onFocus:y}}var Ad=class{collection;state;constructor(e,t){this.collection=e,this.state=t}selectionMode(){return this.state.selectionMode()}disallowEmptySelection(){return this.state.disallowEmptySelection()}selectionBehavior(){return this.state.selectionBehavior()}setSelectionBehavior(e){this.state.setSelectionBehavior(e)}isFocused(){return this.state.isFocused()}setFocused(e){this.state.setFocused(e)}focusedKey(){return this.state.focusedKey()}setFocusedKey(e){(e==null||this.collection().getItem(e))&&this.state.setFocusedKey(e)}selectedKeys(){return this.state.selectedKeys()}isSelected(e){if(this.state.selectionMode()==="none")return!1;let t=this.getKey(e);return t==null?!1:this.state.selectedKeys().has(t)}isEmpty(){return this.state.selectedKeys().size===0}isSelectAll(){if(this.isEmpty())return!1;let e=this.state.selectedKeys();return this.getAllSelectableKeys().every(t=>e.has(t))}firstSelectedKey(){let e;for(let t of this.state.selectedKeys()){let n=this.collection().getItem(t),r=n?.index!=null&&e?.index!=null&&n.index<e.index;(!e||r)&&(e=n)}return e?.key}lastSelectedKey(){let e;for(let t of this.state.selectedKeys()){let n=this.collection().getItem(t),r=n?.index!=null&&e?.index!=null&&n.index>e.index;(!e||r)&&(e=n)}return e?.key}extendSelection(e){if(this.selectionMode()==="none")return;if(this.selectionMode()==="single"){this.replaceSelection(e);return}let t=this.getKey(e);if(t==null)return;let n=this.state.selectedKeys(),r=n.anchorKey||t,o=new $t(n,r,t);for(let i of this.getKeyRange(r,n.currentKey||t))o.delete(i);for(let i of this.getKeyRange(t,r))this.canSelectItem(i)&&o.add(i);this.state.setSelectedKeys(o)}getKeyRange(e,t){let n=this.collection().getItem(e),r=this.collection().getItem(t);return n&&r?n.index!=null&&r.index!=null&&n.index<=r.index?this.getKeyRangeInternal(e,t):this.getKeyRangeInternal(t,e):[]}getKeyRangeInternal(e,t){let n=[],r=e;for(;r!=null;){let o=this.collection().getItem(r);if(o&&o.type==="item"&&n.push(r),r===t)return n;r=this.collection().getKeyAfter(r)}return[]}getKey(e){let t=this.collection().getItem(e);return t?!t||t.type!=="item"?null:t.key:e}toggleSelection(e){if(this.selectionMode()==="none")return;if(this.selectionMode()==="single"&&!this.isSelected(e)){this.replaceSelection(e);return}let t=this.getKey(e);if(t==null)return;let n=new $t(this.state.selectedKeys());n.has(t)?n.delete(t):this.canSelectItem(t)&&(n.add(t),n.anchorKey=t,n.currentKey=t),!(this.disallowEmptySelection()&&n.size===0)&&this.state.setSelectedKeys(n)}replaceSelection(e){if(this.selectionMode()==="none")return;let t=this.getKey(e);if(t==null)return;let n=this.canSelectItem(t)?new $t([t],t,t):new $t;this.state.setSelectedKeys(n)}setSelectedKeys(e){if(this.selectionMode()==="none")return;let t=new $t;for(let n of e){let r=this.getKey(n);if(r!=null&&(t.add(r),this.selectionMode()==="single"))break}this.state.setSelectedKeys(t)}selectAll(){this.selectionMode()==="multiple"&&this.state.setSelectedKeys(new Set(this.getAllSelectableKeys()))}clearSelection(){let e=this.state.selectedKeys();!this.disallowEmptySelection()&&e.size>0&&this.state.setSelectedKeys(new $t)}toggleSelectAll(){this.isSelectAll()?this.clearSelection():this.selectAll()}select(e,t){this.selectionMode()!=="none"&&(this.selectionMode()==="single"?this.isSelected(e)&&!this.disallowEmptySelection()?this.toggleSelection(e):this.replaceSelection(e):this.selectionBehavior()==="toggle"||t&&t.pointerType==="touch"?this.toggleSelection(e):this.replaceSelection(e))}isSelectionEqual(e){if(e===this.state.selectedKeys())return!0;let t=this.selectedKeys();if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;for(let n of t)if(!e.has(n))return!1;return!0}canSelectItem(e){if(this.state.selectionMode()==="none")return!1;let t=this.collection().getItem(e);return t!=null&&!t.disabled}isDisabled(e){let t=this.collection().getItem(e);return!t||t.disabled}getAllSelectableKeys(){let e=[];return(n=>{for(;n!=null;){if(this.canSelectItem(n)){let r=this.collection().getItem(n);if(!r)continue;r.type==="item"&&e.push(n)}n=this.collection().getKeyAfter(n)}})(this.collection().getFirstKey()),e}},ps=class{keyMap=new Map;iterable;firstKey;lastKey;constructor(e){this.iterable=e;for(let r of e)this.keyMap.set(r.key,r);if(this.keyMap.size===0)return;let t,n=0;for(let[r,o]of this.keyMap)t?(t.nextKey=r,o.prevKey=t.key):(this.firstKey=r,o.prevKey=void 0),o.type==="item"&&(o.index=n++),t=o,t.nextKey=void 0;this.lastKey=t.key}*[Symbol.iterator](){yield*this.iterable}getSize(){return this.keyMap.size}getKeys(){return this.keyMap.keys()}getKeyBefore(e){return this.keyMap.get(e)?.prevKey}getKeyAfter(e){return this.keyMap.get(e)?.nextKey}getFirstKey(){return this.firstKey}getLastKey(){return this.lastKey}getItem(e){return this.keyMap.get(e)}at(e){let t=[...this.getKeys()];return this.getItem(t[e])}};function Md(e){let t=Sd(e),r=fd({dataSource:()=>E(e.dataSource),getKey:()=>E(e.getKey),getTextValue:()=>E(e.getTextValue),getDisabled:()=>E(e.getDisabled),getSectionChildren:()=>E(e.getSectionChildren),factory:i=>e.filter?new ps(e.filter(i)):new ps(i)},[()=>e.filter]),o=new Ad(r,t);return gi(()=>{let i=t.focusedKey();i!=null&&!r().getItem(i)&&t.setFocusedKey(void 0)}),{collection:r,selectionManager:()=>o}}var Pe=e=>typeof e=="function"?e():e,Td=e=>{let t=T(()=>{let l=Pe(e.element);if(l)return getComputedStyle(l)}),n=()=>t()?.animationName??"none",[r,o]=z(Pe(e.show)?"present":"hidden"),i="none";return V(l=>{let a=Pe(e.show);return pe(()=>{if(l===a)return a;let s=i,c=n();a?o("present"):c==="none"||t()?.display==="none"?o("hidden"):o(l===!0&&s!==c?"hiding":"hidden")}),a}),V(()=>{let l=Pe(e.element);if(!l)return;let a=c=>{c.target===l&&(i=n())},s=c=>{let u=n().includes(c.animationName);c.target===l&&u&&r()==="hiding"&&o("hidden")};l.addEventListener("animationstart",a),l.addEventListener("animationcancel",s),l.addEventListener("animationend",s),U(()=>{l.removeEventListener("animationstart",a),l.removeEventListener("animationcancel",s),l.removeEventListener("animationend",s)})}),{present:()=>r()==="present"||r()==="hiding",state:r}},Od=Td,pl=Od,xr="data-kb-top-layer",bl,uo=!1,Et=[];function Kn(e){return Et.findIndex(t=>t.node===e)}function Dd(e){return Et[Kn(e)]}function Id(e){return Et[Et.length-1].node===e}function wl(){return Et.filter(e=>e.isPointerBlocking)}function Pd(){return[...wl()].slice(-1)[0]}function Co(){return wl().length>0}function xl(e){let t=Kn(Pd()?.node);return Kn(e)<t}function Fd(e){Et.push(e)}function Ld(e){let t=Kn(e);t<0||Et.splice(t,1)}function qd(){for(let{node:e}of Et)e.style.pointerEvents=xl(e)?"none":"auto"}function _d(e){if(Co()&&!uo){let t=gt(e);bl=document.body.style.pointerEvents,t.body.style.pointerEvents="none",uo=!0}}function Rd(e){if(Co())return;let t=gt(e);t.body.style.pointerEvents=bl,t.body.style.length===0&&t.body.removeAttribute("style"),uo=!1}var Ne={layers:Et,isTopMostLayer:Id,hasPointerBlockingLayer:Co,isBelowPointerBlockingLayer:xl,addLayer:Fd,removeLayer:Ld,indexOf:Kn,find:Dd,assignPointerEventToLayers:qd,disableBodyPointerEvents:_d,restoreBodyPointerEvents:Rd},zd={};Or(zd,{Button:()=>Nd,Root:()=>$o});var Kd=["button","color","file","image","reset","submit"];function Bd(e){let t=e.tagName.toLowerCase();return t==="button"?!0:t==="input"&&e.type?Kd.indexOf(e.type)!==-1:!1}function $o(e){let t,n=J({type:"button"},e),[r,o]=ee(n,["ref","type","disabled"]),i=Tr(()=>t,()=>"button"),l=T(()=>{let c=i();return c==null?!1:Bd({tagName:c,type:r.type})}),a=T(()=>i()==="input"),s=T(()=>i()==="a"&&t?.getAttribute("href")!=null);return m(ve,W({as:"button",ref(c){let d=_e(u=>t=u,r.ref);typeof d=="function"&&d(c)},get type(){return l()||a()?r.type:void 0},get role(){return!l()&&!s()?"button":void 0},get tabIndex(){return!l()&&!s()&&!r.disabled?0:void 0},get disabled(){return l()||a()?r.disabled:void 0},get"aria-disabled"(){return!l()&&!a()&&r.disabled?!0:void 0},get"data-disabled"(){return r.disabled?"":void 0}},o))}var Nd=$o,Vd=["top","right","bottom","left"],ft=Math.min,Ue=Math.max,Sr=Math.round,pr=Math.floor,_t=e=>({x:e,y:e}),Ud={left:"right",right:"left",bottom:"top",top:"bottom"},Hd={start:"end",end:"start"};function fo(e,t,n){return Ue(e,ft(t,n))}function Zt(e,t){return typeof e=="function"?e(t):e}function Rt(e){return e.split("-")[0]}function yn(e){return e.split("-")[1]}function Sl(e){return e==="x"?"y":"x"}function ko(e){return e==="y"?"height":"width"}function Yt(e){return["top","bottom"].includes(Rt(e))?"y":"x"}function Eo(e){return Sl(Yt(e))}function Gd(e,t,n){n===void 0&&(n=!1);let r=yn(e),o=Eo(e),i=ko(o),l=o==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(l=Cr(l)),[l,Cr(l)]}function jd(e){let t=Cr(e);return[go(e),t,go(t)]}function go(e){return e.replace(/start|end/g,t=>Hd[t])}function Wd(e,t,n){let r=["left","right"],o=["right","left"],i=["top","bottom"],l=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:r:t?r:o;case"left":case"right":return t?i:l;default:return[]}}function Qd(e,t,n,r){let o=yn(e),i=Wd(Rt(e),n==="start",r);return o&&(i=i.map(l=>l+"-"+o),t&&(i=i.concat(i.map(go)))),i}function Cr(e){return e.replace(/left|right|bottom|top/g,t=>Ud[t])}function Yd(e){return{top:0,right:0,bottom:0,left:0,...e}}function Cl(e){return typeof e!="number"?Yd(e):{top:e,right:e,bottom:e,left:e}}function $r(e){let{x:t,y:n,width:r,height:o}=e;return{width:r,height:o,top:n,left:t,right:t+r,bottom:n+o,x:t,y:n}}function bs(e,t,n){let{reference:r,floating:o}=e,i=Yt(t),l=Eo(t),a=ko(l),s=Rt(t),c=i==="y",d=r.x+r.width/2-o.width/2,u=r.y+r.height/2-o.height/2,f=r[a]/2-o[a]/2,h;switch(s){case"top":h={x:d,y:r.y-o.height};break;case"bottom":h={x:d,y:r.y+r.height};break;case"right":h={x:r.x+r.width,y:u};break;case"left":h={x:r.x-o.width,y:u};break;default:h={x:r.x,y:r.y}}switch(yn(t)){case"start":h[l]-=f*(n&&c?-1:1);break;case"end":h[l]+=f*(n&&c?-1:1);break}return h}var Xd=async(e,t,n)=>{let{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:l}=n,a=i.filter(Boolean),s=await(l.isRTL==null?void 0:l.isRTL(t)),c=await l.getElementRects({reference:e,floating:t,strategy:o}),{x:d,y:u}=bs(c,r,s),f=r,h={},g=0;for(let y=0;y<a.length;y++){let{name:v,fn:p}=a[y],{x:b,y:w,data:x,reset:S}=await p({x:d,y:u,initialPlacement:r,placement:f,strategy:o,middlewareData:h,rects:c,platform:l,elements:{reference:e,floating:t}});d=b??d,u=w??u,h={...h,[v]:{...h[v],...x}},S&&g<=50&&(g++,typeof S=="object"&&(S.placement&&(f=S.placement),S.rects&&(c=S.rects===!0?await l.getElementRects({reference:e,floating:t,strategy:o}):S.rects),{x:d,y:u}=bs(c,f,s)),y=-1)}return{x:d,y:u,placement:f,strategy:o,middlewareData:h}};async function Bn(e,t){var n;t===void 0&&(t={});let{x:r,y:o,platform:i,rects:l,elements:a,strategy:s}=e,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:u="floating",altBoundary:f=!1,padding:h=0}=Zt(t,e),g=Cl(h),v=a[f?u==="floating"?"reference":"floating":u],p=$r(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(v)))==null||n?v:v.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(a.floating)),boundary:c,rootBoundary:d,strategy:s})),b=u==="floating"?{x:r,y:o,width:l.floating.width,height:l.floating.height}:l.reference,w=await(i.getOffsetParent==null?void 0:i.getOffsetParent(a.floating)),x=await(i.isElement==null?void 0:i.isElement(w))?await(i.getScale==null?void 0:i.getScale(w))||{x:1,y:1}:{x:1,y:1},S=$r(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:b,offsetParent:w,strategy:s}):b);return{top:(p.top-S.top+g.top)/x.y,bottom:(S.bottom-p.bottom+g.bottom)/x.y,left:(p.left-S.left+g.left)/x.x,right:(S.right-p.right+g.right)/x.x}}var Zd=e=>({name:"arrow",options:e,async fn(t){let{x:n,y:r,placement:o,rects:i,platform:l,elements:a,middlewareData:s}=t,{element:c,padding:d=0}=Zt(e,t)||{};if(c==null)return{};let u=Cl(d),f={x:n,y:r},h=Eo(o),g=ko(h),y=await l.getDimensions(c),v=h==="y",p=v?"top":"left",b=v?"bottom":"right",w=v?"clientHeight":"clientWidth",x=i.reference[g]+i.reference[h]-f[h]-i.floating[g],S=f[h]-i.reference[h],q=await(l.getOffsetParent==null?void 0:l.getOffsetParent(c)),D=q?q[w]:0;(!D||!await(l.isElement==null?void 0:l.isElement(q)))&&(D=a.floating[w]||i.floating[g]);let P=x/2-S/2,C=D/2-y[g]/2-1,I=ft(u[p],C),j=ft(u[b],C),H=I,se=D-y[g]-j,oe=D/2-y[g]/2+P,ge=fo(H,oe,se),ue=!s.arrow&&yn(o)!=null&&oe!==ge&&i.reference[g]/2-(oe<H?I:j)-y[g]/2<0,le=ue?oe<H?oe-H:oe-se:0;return{[h]:f[h]+le,data:{[h]:ge,centerOffset:oe-ge-le,...ue&&{alignmentOffset:le}},reset:ue}}}),Jd=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;let{placement:o,middlewareData:i,rects:l,initialPlacement:a,platform:s,elements:c}=t,{mainAxis:d=!0,crossAxis:u=!0,fallbackPlacements:f,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:y=!0,...v}=Zt(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let p=Rt(o),b=Yt(a),w=Rt(a)===a,x=await(s.isRTL==null?void 0:s.isRTL(c.floating)),S=f||(w||!y?[Cr(a)]:jd(a)),q=g!=="none";!f&&q&&S.push(...Qd(a,y,g,x));let D=[a,...S],P=await Bn(t,v),C=[],I=((r=i.flip)==null?void 0:r.overflows)||[];if(d&&C.push(P[p]),u){let oe=Gd(o,l,x);C.push(P[oe[0]],P[oe[1]])}if(I=[...I,{placement:o,overflows:C}],!C.every(oe=>oe<=0)){var j,H;let oe=(((j=i.flip)==null?void 0:j.index)||0)+1,ge=D[oe];if(ge)return{data:{index:oe,overflows:I},reset:{placement:ge}};let ue=(H=I.filter(le=>le.overflows[0]<=0).sort((le,de)=>le.overflows[1]-de.overflows[1])[0])==null?void 0:H.placement;if(!ue)switch(h){case"bestFit":{var se;let le=(se=I.filter(de=>{if(q){let he=Yt(de.placement);return he===b||he==="y"}return!0}).map(de=>[de.placement,de.overflows.filter(he=>he>0).reduce((he,Ce)=>he+Ce,0)]).sort((de,he)=>de[1]-he[1])[0])==null?void 0:se[0];le&&(ue=le);break}case"initialPlacement":ue=a;break}if(o!==ue)return{reset:{placement:ue}}}return{}}}};function ws(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function xs(e){return Vd.some(t=>e[t]>=0)}var ef=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){let{rects:n}=t,{strategy:r="referenceHidden",...o}=Zt(e,t);switch(r){case"referenceHidden":{let i=await Bn(t,{...o,elementContext:"reference"}),l=ws(i,n.reference);return{data:{referenceHiddenOffsets:l,referenceHidden:xs(l)}}}case"escaped":{let i=await Bn(t,{...o,altBoundary:!0}),l=ws(i,n.floating);return{data:{escapedOffsets:l,escaped:xs(l)}}}default:return{}}}}};async function tf(e,t){let{placement:n,platform:r,elements:o}=e,i=await(r.isRTL==null?void 0:r.isRTL(o.floating)),l=Rt(n),a=yn(n),s=Yt(n)==="y",c=["left","top"].includes(l)?-1:1,d=i&&s?-1:1,u=Zt(t,e),{mainAxis:f,crossAxis:h,alignmentAxis:g}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return a&&typeof g=="number"&&(h=a==="end"?g*-1:g),s?{x:h*d,y:f*c}:{x:f*c,y:h*d}}var nf=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,r;let{x:o,y:i,placement:l,middlewareData:a}=t,s=await tf(t,e);return l===((n=a.offset)==null?void 0:n.placement)&&(r=a.arrow)!=null&&r.alignmentOffset?{}:{x:o+s.x,y:i+s.y,data:{...s,placement:l}}}}},rf=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){let{x:n,y:r,placement:o}=t,{mainAxis:i=!0,crossAxis:l=!1,limiter:a={fn:v=>{let{x:p,y:b}=v;return{x:p,y:b}}},...s}=Zt(e,t),c={x:n,y:r},d=await Bn(t,s),u=Yt(Rt(o)),f=Sl(u),h=c[f],g=c[u];if(i){let v=f==="y"?"top":"left",p=f==="y"?"bottom":"right",b=h+d[v],w=h-d[p];h=fo(b,h,w)}if(l){let v=u==="y"?"top":"left",p=u==="y"?"bottom":"right",b=g+d[v],w=g-d[p];g=fo(b,g,w)}let y=a.fn({...t,[f]:h,[u]:g});return{...y,data:{x:y.x-n,y:y.y-r}}}}},of=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){let{placement:n,rects:r,platform:o,elements:i}=t,{apply:l=()=>{},...a}=Zt(e,t),s=await Bn(t,a),c=Rt(n),d=yn(n),u=Yt(n)==="y",{width:f,height:h}=r.floating,g,y;c==="top"||c==="bottom"?(g=c,y=d===(await(o.isRTL==null?void 0:o.isRTL(i.floating))?"start":"end")?"left":"right"):(y=c,g=d==="end"?"top":"bottom");let v=h-s.top-s.bottom,p=f-s.left-s.right,b=ft(h-s[g],v),w=ft(f-s[y],p),x=!t.middlewareData.shift,S=b,q=w;if(u?q=d||x?ft(w,p):p:S=d||x?ft(b,v):v,x&&!d){let P=Ue(s.left,0),C=Ue(s.right,0),I=Ue(s.top,0),j=Ue(s.bottom,0);u?q=f-2*(P!==0||C!==0?P+C:Ue(s.left,s.right)):S=h-2*(I!==0||j!==0?I+j:Ue(s.top,s.bottom))}await l({...t,availableWidth:q,availableHeight:S});let D=await o.getDimensions(i.floating);return f!==D.width||h!==D.height?{reset:{rects:!0}}:{}}}};function mn(e){return $l(e)?(e.nodeName||"").toLowerCase():"#document"}function He(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||self}function At(e){var t;return(t=($l(e)?e.ownerDocument:e.document)||self.document)==null?void 0:t.documentElement}function $l(e){return e instanceof Node||e instanceof He(e).Node}function it(e){return e instanceof Element||e instanceof He(e).Element}function ht(e){return e instanceof HTMLElement||e instanceof He(e).HTMLElement}function Ss(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof He(e).ShadowRoot}function jn(e){let{overflow:t,overflowX:n,overflowY:r,display:o}=st(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function sf(e){return["table","td","th"].includes(mn(e))}function Dr(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function Ao(e){let t=Mo(),n=it(e)?st(e):e;return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function lf(e){let t=zt(e);for(;ht(t)&&!hn(t);){if(Ao(t))return t;if(Dr(t))return null;t=zt(t)}return null}function Mo(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function hn(e){return["html","body","#document"].includes(mn(e))}function st(e){return He(e).getComputedStyle(e)}function Ir(e){return it(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function zt(e){if(mn(e)==="html")return e;let t=e.assignedSlot||e.parentNode||Ss(e)&&e.host||At(e);return Ss(t)?t.host:t}function kl(e){let t=zt(e);return hn(t)?e.ownerDocument?e.ownerDocument.body:e.body:ht(t)&&jn(t)?t:kl(t)}function Nn(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);let o=kl(e),i=o===((r=e.ownerDocument)==null?void 0:r.body),l=He(o);return i?t.concat(l,l.visualViewport||[],jn(o)?o:[],l.frameElement&&n?Nn(l.frameElement):[]):t.concat(o,Nn(o,[],n))}function El(e){let t=st(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,o=ht(e),i=o?e.offsetWidth:n,l=o?e.offsetHeight:r,a=Sr(n)!==i||Sr(r)!==l;return a&&(n=i,r=l),{width:n,height:r,$:a}}function To(e){return it(e)?e:e.contextElement}function gn(e){let t=To(e);if(!ht(t))return _t(1);let n=t.getBoundingClientRect(),{width:r,height:o,$:i}=El(t),l=(i?Sr(n.width):n.width)/r,a=(i?Sr(n.height):n.height)/o;return(!l||!Number.isFinite(l))&&(l=1),(!a||!Number.isFinite(a))&&(a=1),{x:l,y:a}}var af=_t(0);function Al(e){let t=He(e);return!Mo()||!t.visualViewport?af:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function cf(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==He(e)?!1:t}function Xt(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let o=e.getBoundingClientRect(),i=To(e),l=_t(1);t&&(r?it(r)&&(l=gn(r)):l=gn(e));let a=cf(i,n,r)?Al(i):_t(0),s=(o.left+a.x)/l.x,c=(o.top+a.y)/l.y,d=o.width/l.x,u=o.height/l.y;if(i){let f=He(i),h=r&&it(r)?He(r):r,g=f,y=g.frameElement;for(;y&&r&&h!==g;){let v=gn(y),p=y.getBoundingClientRect(),b=st(y),w=p.left+(y.clientLeft+parseFloat(b.paddingLeft))*v.x,x=p.top+(y.clientTop+parseFloat(b.paddingTop))*v.y;s*=v.x,c*=v.y,d*=v.x,u*=v.y,s+=w,c+=x,g=He(y),y=g.frameElement}}return $r({width:d,height:u,x:s,y:c})}function uf(e){let{elements:t,rect:n,offsetParent:r,strategy:o}=e,i=o==="fixed",l=At(r),a=t?Dr(t.floating):!1;if(r===l||a&&i)return n;let s={scrollLeft:0,scrollTop:0},c=_t(1),d=_t(0),u=ht(r);if((u||!u&&!i)&&((mn(r)!=="body"||jn(l))&&(s=Ir(r)),ht(r))){let f=Xt(r);c=gn(r),d.x=f.x+r.clientLeft,d.y=f.y+r.clientTop}return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-s.scrollLeft*c.x+d.x,y:n.y*c.y-s.scrollTop*c.y+d.y}}function df(e){return Array.from(e.getClientRects())}function Ml(e){return Xt(At(e)).left+Ir(e).scrollLeft}function ff(e){let t=At(e),n=Ir(e),r=e.ownerDocument.body,o=Ue(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=Ue(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),l=-n.scrollLeft+Ml(e),a=-n.scrollTop;return st(r).direction==="rtl"&&(l+=Ue(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:l,y:a}}function gf(e,t){let n=He(e),r=At(e),o=n.visualViewport,i=r.clientWidth,l=r.clientHeight,a=0,s=0;if(o){i=o.width,l=o.height;let c=Mo();(!c||c&&t==="fixed")&&(a=o.offsetLeft,s=o.offsetTop)}return{width:i,height:l,x:a,y:s}}function hf(e,t){let n=Xt(e,!0,t==="fixed"),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=ht(e)?gn(e):_t(1),l=e.clientWidth*i.x,a=e.clientHeight*i.y,s=o*i.x,c=r*i.y;return{width:l,height:a,x:s,y:c}}function Cs(e,t,n){let r;if(t==="viewport")r=gf(e,n);else if(t==="document")r=ff(At(e));else if(it(t))r=hf(t,n);else{let o=Al(e);r={...t,x:t.x-o.x,y:t.y-o.y}}return $r(r)}function Tl(e,t){let n=zt(e);return n===t||!it(n)||hn(n)?!1:st(n).position==="fixed"||Tl(n,t)}function yf(e,t){let n=t.get(e);if(n)return n;let r=Nn(e,[],!1).filter(a=>it(a)&&mn(a)!=="body"),o=null,i=st(e).position==="fixed",l=i?zt(e):e;for(;it(l)&&!hn(l);){let a=st(l),s=Ao(l);!s&&a.position==="fixed"&&(o=null),(i?!s&&!o:!s&&a.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||jn(l)&&!s&&Tl(e,l))?r=r.filter(d=>d!==l):o=a,l=zt(l)}return t.set(e,r),r}function mf(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e,l=[...n==="clippingAncestors"?Dr(t)?[]:yf(t,this._c):[].concat(n),r],a=l[0],s=l.reduce((c,d)=>{let u=Cs(t,d,o);return c.top=Ue(u.top,c.top),c.right=ft(u.right,c.right),c.bottom=ft(u.bottom,c.bottom),c.left=Ue(u.left,c.left),c},Cs(t,a,o));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}}function vf(e){let{width:t,height:n}=El(e);return{width:t,height:n}}function pf(e,t,n){let r=ht(t),o=At(t),i=n==="fixed",l=Xt(e,!0,i,t),a={scrollLeft:0,scrollTop:0},s=_t(0);if(r||!r&&!i)if((mn(t)!=="body"||jn(o))&&(a=Ir(t)),r){let u=Xt(t,!0,i,t);s.x=u.x+t.clientLeft,s.y=u.y+t.clientTop}else o&&(s.x=Ml(o));let c=l.left+a.scrollLeft-s.x,d=l.top+a.scrollTop-s.y;return{x:c,y:d,width:l.width,height:l.height}}function to(e){return st(e).position==="static"}function $s(e,t){return!ht(e)||st(e).position==="fixed"?null:t?t(e):e.offsetParent}function Ol(e,t){let n=He(e);if(Dr(e))return n;if(!ht(e)){let o=zt(e);for(;o&&!hn(o);){if(it(o)&&!to(o))return o;o=zt(o)}return n}let r=$s(e,t);for(;r&&sf(r)&&to(r);)r=$s(r,t);return r&&hn(r)&&to(r)&&!Ao(r)?n:r||lf(e)||n}var bf=async function(e){let t=this.getOffsetParent||Ol,n=this.getDimensions,r=await n(e.floating);return{reference:pf(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function wf(e){return st(e).direction==="rtl"}var Dl={convertOffsetParentRelativeRectToViewportRelativeRect:uf,getDocumentElement:At,getClippingRect:mf,getOffsetParent:Ol,getElementRects:bf,getClientRects:df,getDimensions:vf,getScale:gn,isElement:it,isRTL:wf};function xf(e,t){let n=null,r,o=At(e);function i(){var a;clearTimeout(r),(a=n)==null||a.disconnect(),n=null}function l(a,s){a===void 0&&(a=!1),s===void 0&&(s=1),i();let{left:c,top:d,width:u,height:f}=e.getBoundingClientRect();if(a||t(),!u||!f)return;let h=pr(d),g=pr(o.clientWidth-(c+u)),y=pr(o.clientHeight-(d+f)),v=pr(c),b={rootMargin:-h+"px "+-g+"px "+-y+"px "+-v+"px",threshold:Ue(0,ft(1,s))||1},w=!0;function x(S){let q=S[0].intersectionRatio;if(q!==s){if(!w)return l();q?l(!1,q):r=setTimeout(()=>{l(!1,1e-7)},1e3)}w=!1}try{n=new IntersectionObserver(x,{...b,root:o.ownerDocument})}catch{n=new IntersectionObserver(x,b)}n.observe(e)}return l(!0),i}function Sf(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:l=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:s=!1}=r,c=To(e),d=o||i?[...c?Nn(c):[],...Nn(t)]:[];d.forEach(p=>{o&&p.addEventListener("scroll",n,{passive:!0}),i&&p.addEventListener("resize",n)});let u=c&&a?xf(c,n):null,f=-1,h=null;l&&(h=new ResizeObserver(p=>{let[b]=p;b&&b.target===c&&h&&(h.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var w;(w=h)==null||w.observe(t)})),n()}),c&&!s&&h.observe(c),h.observe(t));let g,y=s?Xt(e):null;s&&v();function v(){let p=Xt(e);y&&(p.x!==y.x||p.y!==y.y||p.width!==y.width||p.height!==y.height)&&n(),y=p,g=requestAnimationFrame(v)}return n(),()=>{var p;d.forEach(b=>{o&&b.removeEventListener("scroll",n),i&&b.removeEventListener("resize",n)}),u?.(),(p=h)==null||p.disconnect(),h=null,s&&cancelAnimationFrame(g)}}var Cf=nf,$f=rf,kf=Jd,Ef=of,Af=ef,Mf=Zd,Tf=(e,t,n)=>{let r=new Map,o={platform:Dl,...n},i={...o.platform,_c:r};return Xd(e,t,{...o,platform:i})},Oo=Ee();function Do(){let e=$e(Oo);if(e===void 0)throw new Error("[kobalte]: `usePopperContext` must be used within a `Popper` component");return e}var Of=R('<svg display="block" viewBox="0 0 30 30" style="transform:scale(1.02)"><g><path fill="none" d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z"></path><path stroke="none" d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z">'),ho=30,ks=ho/2,Df={top:180,right:-90,bottom:0,left:90};function Io(e){let t=Do(),n=J({size:ho},e),[r,o]=ee(n,["ref","style","size"]),i=()=>t.currentPlacement().split("-")[0],l=If(t.contentRef),a=()=>l()?.getPropertyValue("background-color")||"none",s=()=>l()?.getPropertyValue(`border-${i()}-color`)||"none",c=()=>l()?.getPropertyValue(`border-${i()}-width`)||"0px",d=()=>Number.parseInt(c())*2*(ho/r.size),u=()=>`rotate(${Df[i()]} ${ks} ${ks}) translate(0 2)`;return m(ve,W({as:"div",ref(f){let h=_e(t.setArrowRef,r.ref);typeof h=="function"&&h(f)},"aria-hidden":"true",get style(){return Ar({position:"absolute","font-size":`${r.size}px`,width:"1em",height:"1em","pointer-events":"none",fill:a(),stroke:s(),"stroke-width":d()},r.style)}},o,{get children(){let f=Of(),h=f.firstChild;return B(()=>A(h,"transform",u())),f}}))}function If(e){let[t,n]=z();return V(()=>{let r=e();r&&n(Ou(r).getComputedStyle(r))}),t}function Pf(e){let t=Do(),[n,r]=ee(e,["ref","style"]);return m(ve,W({as:"div",ref(o){let i=_e(t.setPositionerRef,n.ref);typeof i=="function"&&i(o)},"data-popper-positioner":"",get style(){return Ar({position:"absolute",top:0,left:0,"min-width":"max-content"},n.style)}},r))}function Es(e){let{x:t=0,y:n=0,width:r=0,height:o=0}=e??{};if(typeof DOMRect=="function")return new DOMRect(t,n,r,o);let i={x:t,y:n,width:r,height:o,top:n,right:t+r,bottom:n+o,left:t};return{...i,toJSON:()=>i}}function Ff(e,t){return{contextElement:e,getBoundingClientRect:()=>{let r=t(e);return r?Es(r):e?e.getBoundingClientRect():Es()}}}function Lf(e){return/^(?:top|bottom|left|right)(?:-(?:start|end))?$/.test(e)}var qf={top:"bottom",right:"left",bottom:"top",left:"right"};function _f(e,t){let[n,r]=e.split("-"),o=qf[n];return r?n==="left"||n==="right"?`${o} ${r==="start"?"top":"bottom"}`:r==="start"?`${o} ${t==="rtl"?"right":"left"}`:`${o} ${t==="rtl"?"left":"right"}`:`${o} center`}function Rf(e){let t=J({getAnchorRect:f=>f?.getBoundingClientRect(),placement:"bottom",gutter:0,shift:0,flip:!0,slide:!0,overlap:!1,sameWidth:!1,fitViewport:!1,hideWhenDetached:!1,detachedPadding:0,arrowPadding:4,overflowPadding:8},e),[n,r]=z(),[o,i]=z(),[l,a]=z(t.placement),s=()=>Ff(t.anchorRef?.(),t.getAnchorRect),{direction:c}=Kt();async function d(){let f=s(),h=n(),g=o();if(!f||!h)return;let y=(g?.clientHeight||0)/2,v=typeof t.gutter=="number"?t.gutter+y:t.gutter??y;h.style.setProperty("--kb-popper-content-overflow-padding",`${t.overflowPadding}px`),f.getBoundingClientRect();let p=[Cf(({placement:q})=>{let D=!!q.split("-")[1];return{mainAxis:v,crossAxis:D?void 0:t.shift,alignmentAxis:t.shift}})];if(t.flip!==!1){let q=typeof t.flip=="string"?t.flip.split(" "):void 0;if(q!==void 0&&!q.every(Lf))throw new Error("`flip` expects a spaced-delimited list of placements");p.push(kf({padding:t.overflowPadding,fallbackPlacements:q}))}(t.slide||t.overlap)&&p.push($f({mainAxis:t.slide,crossAxis:t.overlap,padding:t.overflowPadding})),p.push(Ef({padding:t.overflowPadding,apply({availableWidth:q,availableHeight:D,rects:P}){let C=Math.round(P.reference.width);q=Math.floor(q),D=Math.floor(D),h.style.setProperty("--kb-popper-anchor-width",`${C}px`),h.style.setProperty("--kb-popper-content-available-width",`${q}px`),h.style.setProperty("--kb-popper-content-available-height",`${D}px`),t.sameWidth&&(h.style.width=`${C}px`),t.fitViewport&&(h.style.maxWidth=`${q}px`,h.style.maxHeight=`${D}px`)}})),t.hideWhenDetached&&p.push(Af({padding:t.detachedPadding})),g&&p.push(Mf({element:g,padding:t.arrowPadding}));let b=await Tf(f,h,{placement:t.placement,strategy:"absolute",middleware:p,platform:{...Dl,isRTL:()=>c()==="rtl"}});if(a(b.placement),t.onCurrentPlacementChange?.(b.placement),!h)return;h.style.setProperty("--kb-popper-content-transform-origin",_f(b.placement,c()));let w=Math.round(b.x),x=Math.round(b.y),S;if(t.hideWhenDetached&&(S=b.middlewareData.hide?.referenceHidden?"hidden":"visible"),Object.assign(h.style,{top:"0",left:"0",transform:`translate3d(${w}px, ${x}px, 0)`,visibility:S}),g&&b.middlewareData.arrow){let{x:q,y:D}=b.middlewareData.arrow,P=b.placement.split("-")[0];Object.assign(g.style,{left:q!=null?`${q}px`:"",top:D!=null?`${D}px`:"",[P]:"100%"})}}V(()=>{let f=s(),h=n();if(!f||!h)return;let g=Sf(f,h,d,{elementResize:typeof ResizeObserver=="function"});U(g)}),V(()=>{let f=n(),h=t.contentRef?.();!f||!h||queueMicrotask(()=>{f.style.zIndex=getComputedStyle(h).zIndex})});let u={currentPlacement:l,contentRef:()=>t.contentRef?.(),setPositionerRef:r,setArrowRef:i};return m(Oo.Provider,{value:u,get children(){return t.children}})}var Il=Object.assign(Rf,{Arrow:Io,Context:Oo,usePopperContext:Do,Positioner:Pf});function zf(e){let t=n=>{n.key===bo.Escape&&e.onEscapeKeyDown?.(n)};V(()=>{if(Ie||E(e.isDisabled))return;let n=e.ownerDocument?.()??gt();n.addEventListener("keydown",t),U(()=>{n.removeEventListener("keydown",t)})})}var As="interactOutside.pointerDownOutside",Ms="interactOutside.focusOutside";function Kf(e,t){let n,r=Gu,o=()=>gt(t()),i=u=>e.onPointerDownOutside?.(u),l=u=>e.onFocusOutside?.(u),a=u=>e.onInteractOutside?.(u),s=u=>{let f=u.target;return!(f instanceof HTMLElement)||f.closest(`[${xr}]`)||!Ye(o(),f)||Ye(t(),f)?!1:!e.shouldExcludeElement?.(f)},c=u=>{function f(){let h=t(),g=u.target;if(!h||!g||!s(u))return;let y=Me([i,a]);g.addEventListener(As,y,{once:!0});let v=new CustomEvent(As,{bubbles:!1,cancelable:!0,detail:{originalEvent:u,isContextMenu:u.button===2||Lu(u)&&u.button===0}});g.dispatchEvent(v)}u.pointerType==="touch"?(o().removeEventListener("click",f),r=f,o().addEventListener("click",f,{once:!0})):f()},d=u=>{let f=t(),h=u.target;if(!f||!h||!s(u))return;let g=Me([l,a]);h.addEventListener(Ms,g,{once:!0});let y=new CustomEvent(Ms,{bubbles:!1,cancelable:!0,detail:{originalEvent:u,isContextMenu:!1}});h.dispatchEvent(y)};V(()=>{Ie||E(e.isDisabled)||(n=self.setTimeout(()=>{o().addEventListener("pointerdown",c,!0)},0),o().addEventListener("focusin",d,!0),U(()=>{self.clearTimeout(n),o().removeEventListener("click",r),o().removeEventListener("pointerdown",c,!0),o().removeEventListener("focusin",d,!0)}))})}var Pl=Ee();function Bf(){return $e(Pl)}function Nf(e){let t,n=Bf(),[r,o]=ee(e,["ref","disableOutsidePointerEvents","excludedElements","onEscapeKeyDown","onPointerDownOutside","onFocusOutside","onInteractOutside","onDismiss","bypassTopMostLayerCheck"]),i=new Set([]),l=u=>{i.add(u);let f=n?.registerNestedLayer(u);return()=>{i.delete(u),f?.()}};Kf({shouldExcludeElement:u=>t?r.excludedElements?.some(f=>Ye(f(),u))||[...i].some(f=>Ye(f,u)):!1,onPointerDownOutside:u=>{!t||Ne.isBelowPointerBlockingLayer(t)||!r.bypassTopMostLayerCheck&&!Ne.isTopMostLayer(t)||(r.onPointerDownOutside?.(u),r.onInteractOutside?.(u),u.defaultPrevented||r.onDismiss?.())},onFocusOutside:u=>{r.onFocusOutside?.(u),r.onInteractOutside?.(u),u.defaultPrevented||r.onDismiss?.()}},()=>t),zf({ownerDocument:()=>gt(t),onEscapeKeyDown:u=>{!t||!Ne.isTopMostLayer(t)||(r.onEscapeKeyDown?.(u),!u.defaultPrevented&&r.onDismiss&&(u.preventDefault(),r.onDismiss()))}}),ut(()=>{if(!t)return;Ne.addLayer({node:t,isPointerBlocking:r.disableOutsidePointerEvents,dismiss:r.onDismiss});let u=n?.registerNestedLayer(t);Ne.assignPointerEventToLayers(),Ne.disableBodyPointerEvents(t),U(()=>{t&&(Ne.removeLayer(t),u?.(),Ne.assignPointerEventToLayers(),Ne.restoreBodyPointerEvents(t))})}),V(ct([()=>t,()=>r.disableOutsidePointerEvents],([u,f])=>{if(!u)return;let h=Ne.find(u);h&&h.isPointerBlocking!==f&&(h.isPointerBlocking=f,Ne.assignPointerEventToLayers()),f&&Ne.disableBodyPointerEvents(u),U(()=>{Ne.restoreBodyPointerEvents(u)})},{defer:!0}));let d={registerNestedLayer:l};return m(Pl.Provider,{value:d,get children(){return m(ve,W({as:"div",ref(u){let f=_e(h=>t=h,r.ref);typeof f=="function"&&f(u)}},o))}})}function Fl(e={}){let[t,n]=al({value:()=>E(e.open),defaultValue:()=>!!E(e.defaultOpen),onChange:l=>e.onOpenChange?.(l)}),r=()=>{n(!0)},o=()=>{n(!1)};return{isOpen:t,setIsOpen:n,open:r,close:o,toggle:()=>{t()?o():r()}}}var Qe={};Or(Qe,{Description:()=>sl,ErrorMessage:()=>ll,Item:()=>Rl,ItemControl:()=>zl,ItemDescription:()=>Kl,ItemIndicator:()=>Bl,ItemInput:()=>Nl,ItemLabel:()=>Vl,Label:()=>Ul,RadioGroup:()=>Vf,Root:()=>Hl});var Ll=Ee();function ql(){let e=$e(Ll);if(e===void 0)throw new Error("[kobalte]: `useRadioGroupContext` must be used within a `RadioGroup` component");return e}var _l=Ee();function Wn(){let e=$e(_l);if(e===void 0)throw new Error("[kobalte]: `useRadioGroupItemContext` must be used within a `RadioGroup.Item` component");return e}function Rl(e){let t=Hn(),n=ql(),r=`${t.generateId("item")}-${Be()}`,o=J({id:r},e),[i,l]=ee(o,["value","disabled","onPointerDown"]),[a,s]=z(),[c,d]=z(),[u,f]=z(),[h,g]=z(),[y,v]=z(!1),p=T(()=>n.isSelectedValue(i.value)),b=T(()=>i.disabled||t.isDisabled()||!1),w=q=>{me(q,i.onPointerDown),y()&&q.preventDefault()},x=T(()=>({...t.dataset(),"data-disabled":b()?"":void 0,"data-checked":p()?"":void 0})),S={value:()=>i.value,dataset:x,isSelected:p,isDisabled:b,inputId:a,labelId:c,descriptionId:u,inputRef:h,select:()=>n.setSelectedValue(i.value),generateId:Un(()=>l.id),registerInput:Xe(s),registerLabel:Xe(d),registerDescription:Xe(f),setIsFocused:v,setInputRef:g};return m(_l.Provider,{value:S,get children(){return m(ve,W({as:"div",role:"group",onPointerDown:w},x,l))}})}function zl(e){let t=Wn(),n=J({id:t.generateId("control")},e),[r,o]=ee(n,["onClick","onKeyDown"]);return m(ve,W({as:"div",onClick:a=>{me(a,r.onClick),t.select(),t.inputRef()?.focus()},onKeyDown:a=>{me(a,r.onKeyDown),a.key===bo.Space&&(t.select(),t.inputRef()?.focus())}},()=>t.dataset(),o))}function Kl(e){let t=Wn(),n=J({id:t.generateId("description")},e);return V(()=>U(t.registerDescription(n.id))),m(ve,W({as:"div"},()=>t.dataset(),n))}function Bl(e){let t=Wn(),n=J({id:t.generateId("indicator")},e),[r,o]=ee(n,["ref","forceMount"]),[i,l]=z(),{present:a}=pl({show:()=>r.forceMount||t.isSelected(),element:()=>i()??null});return m(K,{get when(){return a()},get children(){return m(ve,W({as:"div",ref(s){let c=_e(l,r.ref);typeof c=="function"&&c(s)}},()=>t.dataset(),o))}})}function Nl(e){let t=Hn(),n=ql(),r=Wn(),o=J({id:r.generateId("input")},e),[i,l]=ee(o,["ref","style","aria-labelledby","aria-describedby","onChange","onFocus","onBlur"]),a=()=>[i["aria-labelledby"],r.labelId(),i["aria-labelledby"]!=null&&l["aria-label"]!=null?l.id:void 0].filter(Boolean).join(" ")||void 0,s=()=>[i["aria-describedby"],r.descriptionId(),n.ariaDescribedBy()].filter(Boolean).join(" ")||void 0,[c,d]=z(!1),u=g=>{if(me(g,i.onChange),g.stopPropagation(),!c()){n.setSelectedValue(r.value());let y=g.target;y.checked=r.isSelected()}d(!1)},f=g=>{me(g,i.onFocus),r.setIsFocused(!0)},h=g=>{me(g,i.onBlur),r.setIsFocused(!1)};return V(ct([()=>r.isSelected(),()=>r.value()],g=>{if(!g[0]&&g[1]===r.value())return;d(!0);let y=r.inputRef();y?.dispatchEvent(new Event("input",{bubbles:!0,cancelable:!0})),y?.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!0}))},{defer:!0})),V(()=>U(r.registerInput(l.id))),m(ve,W({as:"input",ref(g){let y=_e(r.setInputRef,i.ref);typeof y=="function"&&y(g)},type:"radio",get name(){return t.name()},get value(){return r.value()},get checked(){return r.isSelected()},get required(){return t.isRequired()},get disabled(){return r.isDisabled()},get readonly(){return t.isReadOnly()},get style(){return Ar({...ol},i.style)},get"aria-labelledby"(){return a()},get"aria-describedby"(){return s()},onChange:u,onFocus:f,onBlur:h},()=>r.dataset(),l))}function Vl(e){let t=Wn(),n=J({id:t.generateId("label")},e);return V(()=>U(t.registerLabel(n.id))),m(ve,W({as:"label",get for(){return t.inputId()}},()=>t.dataset(),n))}function Ul(e){return m(Xu,W({as:"span"},e))}function Hl(e){let t,n=`radiogroup-${Be()}`,r=J({id:n,orientation:"vertical"},e),[o,i,l]=ee(r,["ref","value","defaultValue","onChange","orientation","aria-labelledby","aria-describedby"],Qu),[a,s]=Gn({value:()=>o.value,defaultValue:()=>o.defaultValue,onChange:g=>o.onChange?.(g)}),{formControlContext:c}=Yu(i);Zu(()=>t,()=>s(o.defaultValue??""));let d=()=>c.getAriaLabelledBy(E(i.id),l["aria-label"],o["aria-labelledby"]),u=()=>c.getAriaDescribedBy(o["aria-describedby"]),f=g=>g===a(),h={ariaDescribedBy:u,isSelectedValue:f,setSelectedValue:g=>{if(!(c.isReadOnly()||c.isDisabled())&&(s(g),t))for(let y of t.querySelectorAll("[type='radio']")){let v=y;v.checked=f(v.value)}}};return m(il.Provider,{value:c,get children(){return m(Ll.Provider,{value:h,get children(){return m(ve,W({as:"div",ref(g){let y=_e(v=>t=v,o.ref);typeof y=="function"&&y(g)},role:"radiogroup",get id(){return E(i.id)},get"aria-invalid"(){return c.validationState()==="invalid"||void 0},get"aria-required"(){return c.isRequired()||void 0},get"aria-disabled"(){return c.isDisabled()||void 0},get"aria-readonly"(){return c.isReadOnly()||void 0},get"aria-orientation"(){return o.orientation},get"aria-labelledby"(){return d()},get"aria-describedby"(){return u()}},()=>c.dataset(),l))}})}})}var Vf=Object.assign(Hl,{Description:sl,ErrorMessage:ll,Item:Rl,ItemControl:zl,ItemDescription:Kl,ItemIndicator:Bl,ItemInput:Nl,ItemLabel:Vl,Label:Ul}),Uf=class{collection;ref;collator;constructor(e,t,n){this.collection=e,this.ref=t,this.collator=n}getKeyBelow(e){let t=this.collection().getKeyAfter(e);for(;t!=null;){let n=this.collection().getItem(t);if(n&&n.type==="item"&&!n.disabled)return t;t=this.collection().getKeyAfter(t)}}getKeyAbove(e){let t=this.collection().getKeyBefore(e);for(;t!=null;){let n=this.collection().getItem(t);if(n&&n.type==="item"&&!n.disabled)return t;t=this.collection().getKeyBefore(t)}}getFirstKey(){let e=this.collection().getFirstKey();for(;e!=null;){let t=this.collection().getItem(e);if(t&&t.type==="item"&&!t.disabled)return e;e=this.collection().getKeyAfter(e)}}getLastKey(){let e=this.collection().getLastKey();for(;e!=null;){let t=this.collection().getItem(e);if(t&&t.type==="item"&&!t.disabled)return e;e=this.collection().getKeyBefore(e)}}getItem(e){return this.ref?.()?.querySelector(`[data-key="${e}"]`)??null}getKeyPageAbove(e){let t=this.ref?.(),n=this.getItem(e);if(!t||!n)return;let r=Math.max(0,n.offsetTop+n.offsetHeight-t.offsetHeight),o=e;for(;o&&n&&n.offsetTop>r;)o=this.getKeyAbove(o),n=o!=null?this.getItem(o):null;return o}getKeyPageBelow(e){let t=this.ref?.(),n=this.getItem(e);if(!t||!n)return;let r=Math.min(t.scrollHeight,n.offsetTop-n.offsetHeight+t.offsetHeight),o=e;for(;o&&n&&n.offsetTop<r;)o=this.getKeyBelow(o),n=o!=null?this.getItem(o):null;return o}getKeyForSearch(e,t){let n=this.collator?.();if(!n)return;let r=t!=null?this.getKeyBelow(t):this.getFirstKey();for(;r!=null;){let o=this.collection().getItem(r);if(o){let i=o.textValue.slice(0,e.length);if(o.textValue&&n.compare(i,e)===0)return r}r=this.getKeyBelow(r)}}};function Hf(e,t,n){let r=bd({usage:"search",sensitivity:"base"}),o=T(()=>{let i=E(e.keyboardDelegate);return i||new Uf(e.collection,t,r)});return Ed({selectionManager:()=>E(e.selectionManager),keyboardDelegate:o,autoFocus:()=>E(e.autoFocus),deferAutoFocus:()=>E(e.deferAutoFocus),shouldFocusWrap:()=>E(e.shouldFocusWrap),disallowEmptySelection:()=>E(e.disallowEmptySelection),selectOnFocus:()=>E(e.selectOnFocus),disallowTypeAhead:()=>E(e.disallowTypeAhead),shouldUseVirtualFocus:()=>E(e.shouldUseVirtualFocus),allowsTabNavigation:()=>E(e.allowsTabNavigation),isVirtualized:()=>E(e.isVirtualized),scrollToKey:i=>E(e.scrollToKey)?.(i),orientation:()=>E(e.orientation)},t)}var no="focusScope.autoFocusOnMount",ro="focusScope.autoFocusOnUnmount",Ts={bubbles:!1,cancelable:!0},Os={stack:[],active(){return this.stack[0]},add(e){e!==this.active()&&this.active()?.pause(),this.stack=lo(this.stack,e),this.stack.unshift(e)},remove(e){this.stack=lo(this.stack,e),this.active()?.resume()}};function Gf(e,t){let[n,r]=z(!1),o={pause(){r(!0)},resume(){r(!1)}},i=null,l=g=>e.onMountAutoFocus?.(g),a=g=>e.onUnmountAutoFocus?.(g),s=()=>gt(t()),c=()=>{let g=s().createElement("span");return g.setAttribute("data-focus-trap",""),g.tabIndex=0,Object.assign(g.style,ol),g},d=()=>{let g=t();return g?nl(g,!0).filter(y=>!y.hasAttribute("data-focus-trap")):[]},u=()=>{let g=d();return g.length>0?g[0]:null},f=()=>{let g=d();return g.length>0?g[g.length-1]:null},h=()=>{let g=t();if(!g)return!1;let y=Rn(g);return!y||Ye(g,y)?!1:rl(y)};V(()=>{if(Ie)return;let g=t();if(!g)return;Os.add(o);let y=Rn(g);if(!Ye(g,y)){let p=new CustomEvent(no,Ts);g.addEventListener(no,l),g.dispatchEvent(p),p.defaultPrevented||setTimeout(()=>{Fe(u()),Rn(g)===y&&Fe(g)},0)}U(()=>{g.removeEventListener(no,l),setTimeout(()=>{let p=new CustomEvent(ro,Ts);h()&&p.preventDefault(),g.addEventListener(ro,a),g.dispatchEvent(p),p.defaultPrevented||Fe(y??s().body),g.removeEventListener(ro,a),Os.remove(o)},0)})}),V(()=>{if(Ie)return;let g=t();if(!g||!E(e.trapFocus)||n())return;let y=p=>{let b=p.target;b?.closest(`[${xr}]`)||(Ye(g,b)?i=b:Fe(i))},v=p=>{let w=p.relatedTarget??Rn(g);w?.closest(`[${xr}]`)||Ye(g,w)||Fe(i)};s().addEventListener("focusin",y),s().addEventListener("focusout",v),U(()=>{s().removeEventListener("focusin",y),s().removeEventListener("focusout",v)})}),V(()=>{if(Ie)return;let g=t();if(!g||!E(e.trapFocus)||n())return;let y=c();g.insertAdjacentElement("afterbegin",y);let v=c();g.insertAdjacentElement("beforeend",v);function p(w){let x=u(),S=f();w.relatedTarget===x?Fe(S):Fe(x)}y.addEventListener("focusin",p),v.addEventListener("focusin",p);let b=new MutationObserver(w=>{for(let x of w)x.previousSibling===v&&(v.remove(),g.insertAdjacentElement("beforeend",v)),x.nextSibling===y&&(y.remove(),g.insertAdjacentElement("afterbegin",y))});b.observe(g,{childList:!0,subtree:!1}),U(()=>{y.removeEventListener("focusin",p),v.removeEventListener("focusin",p),y.remove(),v.remove(),b.disconnect()})})}var jf="data-live-announcer";function Wf(e){V(()=>{E(e.isDisabled)||U(Qf(E(e.targets),E(e.root)))})}var Ln=new WeakMap,We=[];function Qf(e,t=document.body){let n=new Set(e),r=new Set,o=s=>{for(let f of s.querySelectorAll(`[${jf}], [${xr}]`))n.add(f);let c=f=>{if(n.has(f)||f.parentElement&&r.has(f.parentElement)&&f.parentElement.getAttribute("role")!=="row")return NodeFilter.FILTER_REJECT;for(let h of n)if(f.contains(h))return NodeFilter.FILTER_SKIP;return NodeFilter.FILTER_ACCEPT},d=document.createTreeWalker(s,NodeFilter.SHOW_ELEMENT,{acceptNode:c}),u=c(s);if(u===NodeFilter.FILTER_ACCEPT&&i(s),u!==NodeFilter.FILTER_REJECT){let f=d.nextNode();for(;f!=null;)i(f),f=d.nextNode()}},i=s=>{let c=Ln.get(s)??0;s.getAttribute("aria-hidden")==="true"&&c===0||(c===0&&s.setAttribute("aria-hidden","true"),r.add(s),Ln.set(s,c+1))};We.length&&We[We.length-1].disconnect(),o(t);let l=new MutationObserver(s=>{for(let c of s)if(!(c.type!=="childList"||c.addedNodes.length===0)&&![...n,...r].some(d=>d.contains(c.target))){for(let d of c.removedNodes)d instanceof Element&&(n.delete(d),r.delete(d));for(let d of c.addedNodes)(d instanceof HTMLElement||d instanceof SVGElement)&&(d.dataset.liveAnnouncer==="true"||d.dataset.reactAriaTopLayer==="true")?n.add(d):d instanceof Element&&o(d)}});l.observe(t,{childList:!0,subtree:!0});let a={observe(){l.observe(t,{childList:!0,subtree:!0})},disconnect(){l.disconnect()}};return We.push(a),()=>{l.disconnect();for(let s of r){let c=Ln.get(s);if(c==null)return;c===1?(s.removeAttribute("aria-hidden"),Ln.delete(s)):Ln.set(s,c-1)}a===We[We.length-1]?(We.pop(),We.length&&We[We.length-1].observe()):We.splice(We.indexOf(a),1)}}var br=new Map,Yf=e=>{V(()=>{let t=Pe(e.style)??{},n=Pe(e.properties)??[],r={};for(let i in t)r[i]=e.element.style[i];let o=br.get(e.key);o?o.activeCount++:br.set(e.key,{activeCount:1,originalStyles:r,properties:n.map(i=>i.key)}),Object.assign(e.element.style,e.style);for(let i of n)e.element.style.setProperty(i.key,i.value);U(()=>{let i=br.get(e.key);if(i){if(i.activeCount!==1){i.activeCount--;return}br.delete(e.key);for(let[l,a]of Object.entries(i.originalStyles))e.element.style[l]=a;for(let l of i.properties)e.element.style.removeProperty(l);e.element.style.length===0&&e.element.removeAttribute("style"),e.cleanup?.()}})})},Ds=Yf,Xf=(e,t)=>{switch(t){case"x":return[e.clientWidth,e.scrollLeft,e.scrollWidth];case"y":return[e.clientHeight,e.scrollTop,e.scrollHeight]}},Zf=(e,t)=>{let n=getComputedStyle(e),r=t==="x"?n.overflowX:n.overflowY;return r==="auto"||r==="scroll"||e.tagName==="HTML"&&r==="visible"},Jf=(e,t,n)=>{let r=t==="x"&&self.getComputedStyle(e).direction==="rtl"?-1:1,o=e,i=0,l=0,a=!1;do{let[s,c,d]=Xf(o,t),u=d-s-r*c;(c!==0||u!==0)&&Zf(o,t)&&(i+=u,l+=c),o===(n??document.documentElement)?a=!0:o=o._$host??o.parentElement}while(o&&!a);return[i,l]},[Is,Ps]=z([]),e0=e=>Is().indexOf(e)===Is().length-1,t0=e=>{let t=W({element:null,enabled:!0,hideScrollbar:!0,preventScrollbarShift:!0,preventScrollbarShiftMode:"padding",restoreScrollPosition:!0,allowPinchZoom:!1},e),n=Be(),r=[0,0],o=null,i=null;V(()=>{Pe(t.enabled)&&(Ps(c=>[...c,n]),U(()=>{Ps(c=>c.filter(d=>d!==n))}))}),V(()=>{if(!Pe(t.enabled)||!Pe(t.hideScrollbar))return;let{body:c}=document,d=self.innerWidth-c.offsetWidth;if(Pe(t.preventScrollbarShift)){let u={overflow:"hidden"},f=[];d>0&&(Pe(t.preventScrollbarShiftMode)==="padding"?u.paddingRight=`calc(${self.getComputedStyle(c).paddingRight} + ${d}px)`:u.marginRight=`calc(${self.getComputedStyle(c).marginRight} + ${d}px)`,f.push({key:"--scrollbar-width",value:`${d}px`}));let h=self.scrollY,g=self.scrollX;Ds({key:"prevent-scroll",element:c,style:u,properties:f,cleanup:()=>{Pe(t.restoreScrollPosition)&&d>0&&self.scrollTo(g,h)}})}else Ds({key:"prevent-scroll",element:c,style:{overflow:"hidden"}})}),V(()=>{!e0(n)||!Pe(t.enabled)||(document.addEventListener("wheel",a,{passive:!1}),document.addEventListener("touchstart",l,{passive:!1}),document.addEventListener("touchmove",s,{passive:!1}),U(()=>{document.removeEventListener("wheel",a),document.removeEventListener("touchstart",l),document.removeEventListener("touchmove",s)}))});let l=c=>{r=Fs(c),o=null,i=null},a=c=>{let d=c.target,u=Pe(t.element),f=n0(c),h=Math.abs(f[0])>Math.abs(f[1])?"x":"y",g=h==="x"?f[0]:f[1],y=Ls(d,h,g,u),v;u&&yo(u,d)?v=!y:v=!0,v&&c.cancelable&&c.preventDefault()},s=c=>{let d=Pe(t.element),u=c.target,f;if(c.touches.length===2)f=!Pe(t.allowPinchZoom);else{if(o==null||i===null){let h=Fs(c).map((y,v)=>r[v]-y),g=Math.abs(h[0])>Math.abs(h[1])?"x":"y";o=g,i=g==="x"?h[0]:h[1]}if(u.type==="range")f=!1;else{let h=Ls(u,o,i,d);d&&yo(d,u)?f=!h:f=!0}}f&&c.cancelable&&c.preventDefault()}},n0=e=>[e.deltaX,e.deltaY],Fs=e=>e.changedTouches[0]?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0],Ls=(e,t,n,r)=>{let o=r!==null&&yo(r,e),[i,l]=Jf(e,t,o?r:void 0);return!(n>0&&Math.abs(i)<=1||n<0&&Math.abs(l)<1)},yo=(e,t)=>{if(e.contains(t))return!0;let n=t;for(;n;){if(n===e)return!0;n=n._$host??n.parentElement}return!1},r0=t0,o0=r0,Gl=Ee();function jl(){return $e(Gl)}function Mt(){let e=jl();if(e===void 0)throw new Error("[kobalte]: `useMenuContext` must be used within a `Menu` component");return e}var Wl=Ee();function Po(){let e=$e(Wl);if(e===void 0)throw new Error("[kobalte]: `useMenuItemContext` must be used within a `Menu.Item` component");return e}var Ql=Ee();function yt(){let e=$e(Ql);if(e===void 0)throw new Error("[kobalte]: `useMenuRootContext` must be used within a `MenuRoot` component");return e}function Fo(e){let t,n=yt(),r=Mt(),o=J({id:n.generateId(`item-${Be()}`)},e),[i,l]=ee(o,["ref","textValue","disabled","closeOnSelect","checked","indeterminate","onSelect","onPointerMove","onPointerLeave","onPointerDown","onPointerUp","onClick","onKeyDown","onMouseDown","onFocus"]),[a,s]=z(),[c,d]=z(),[u,f]=z(),h=()=>r.listState().selectionManager(),g=()=>l.id,y=()=>h().focusedKey()===g(),v=()=>{i.onSelect?.(),i.closeOnSelect&&setTimeout(()=>{r.close(!0)})};dd({getItem:()=>({ref:()=>t,type:"item",key:g(),textValue:i.textValue??u()?.textContent??t?.textContent??"",disabled:i.disabled??!1})});let p=vl({key:g,selectionManager:h,shouldSelectOnPressUp:!0,allowsDifferentPressOrigin:!0,disabled:()=>i.disabled},()=>t),b=C=>{me(C,i.onPointerMove),C.pointerType==="mouse"&&(i.disabled?r.onItemLeave(C):(r.onItemEnter(C),C.defaultPrevented||(Fe(C.currentTarget),r.listState().selectionManager().setFocused(!0),r.listState().selectionManager().setFocusedKey(g()))))},w=C=>{me(C,i.onPointerLeave),C.pointerType==="mouse"&&r.onItemLeave(C)},x=C=>{me(C,i.onPointerUp),!i.disabled&&C.button===0&&v()},S=C=>{if(me(C,i.onKeyDown),!C.repeat&&!i.disabled)switch(C.key){case"Enter":case" ":v();break}},q=T(()=>{if(i.indeterminate)return"mixed";if(i.checked!=null)return i.checked}),D=T(()=>({"data-indeterminate":i.indeterminate?"":void 0,"data-checked":i.checked&&!i.indeterminate?"":void 0,"data-disabled":i.disabled?"":void 0,"data-highlighted":y()?"":void 0})),P={isChecked:()=>i.checked,dataset:D,setLabelRef:f,generateId:Un(()=>l.id),registerLabel:Xe(s),registerDescription:Xe(d)};return m(Wl.Provider,{value:P,get children(){return m(ve,W({as:"div",ref(C){let I=_e(j=>t=j,i.ref);typeof I=="function"&&I(C)},get tabIndex(){return p.tabIndex()},get"aria-checked"(){return q()},get"aria-disabled"(){return i.disabled},get"aria-labelledby"(){return a()},get"aria-describedby"(){return c()},get"data-key"(){return p.dataKey()},get onPointerDown(){return Me([i.onPointerDown,p.onPointerDown])},get onPointerUp(){return Me([x,p.onPointerUp])},get onClick(){return Me([i.onClick,p.onClick])},get onKeyDown(){return Me([S,p.onKeyDown])},get onMouseDown(){return Me([i.onMouseDown,p.onMouseDown])},get onFocus(){return Me([i.onFocus,p.onFocus])},onPointerMove:b,onPointerLeave:w},D,l))}})}function Yl(e){let t=J({closeOnSelect:!1},e),[n,r]=ee(t,["checked","defaultChecked","onChange","onSelect"]),o=nd({isSelected:()=>n.checked,defaultIsSelected:()=>n.defaultChecked,onSelectedChange:l=>n.onChange?.(l),isDisabled:()=>r.disabled});return m(Fo,W({role:"menuitemcheckbox",get checked(){return o.isSelected()},onSelect:()=>{n.onSelect?.(),o.toggle()}},r))}var i0=Ee();function Pr(){return $e(i0)}var Vn={next:(e,t)=>e==="ltr"?t==="horizontal"?"ArrowRight":"ArrowDown":t==="horizontal"?"ArrowLeft":"ArrowUp",previous:(e,t)=>Vn.next(e==="ltr"?"rtl":"ltr",t)},qs={first:e=>e==="horizontal"?"ArrowDown":"ArrowRight",last:e=>e==="horizontal"?"ArrowUp":"ArrowLeft"};function Xl(e){let t=yt(),n=Mt(),r=Pr(),{direction:o}=Kt(),i=J({id:t.generateId("trigger")},e),[l,a]=ee(i,["ref","id","disabled","onPointerDown","onClick","onKeyDown","onMouseOver","onFocus"]),s=()=>t.value();r!==void 0&&(s=()=>t.value()??l.id,r.lastValue()===void 0&&r.setLastValue(s));let c=Tr(()=>n.triggerRef(),()=>"button"),d=T(()=>c()==="a"&&n.triggerRef()?.getAttribute("href")!=null);V(ct(()=>r?.value(),p=>{d()&&p===s()&&n.triggerRef()?.focus()}));let u=()=>{r!==void 0?n.isOpen()?r.value()===s()&&r.closeMenu():(r.autoFocusMenu()||r.setAutoFocusMenu(!0),n.open(!1)):n.toggle(!0)},f=p=>{me(p,l.onPointerDown),p.currentTarget.dataset.pointerType=p.pointerType,!l.disabled&&p.pointerType!=="touch"&&p.button===0&&u()},h=p=>{me(p,l.onClick),l.disabled||p.currentTarget.dataset.pointerType==="touch"&&u()},g=p=>{if(me(p,l.onKeyDown),!l.disabled){if(d())switch(p.key){case"Enter":case" ":return}switch(p.key){case"Enter":case" ":case qs.first(t.orientation()):p.stopPropagation(),p.preventDefault(),Wu(p.currentTarget),n.open("first"),r?.setAutoFocusMenu(!0),r?.setValue(s);break;case qs.last(t.orientation()):p.stopPropagation(),p.preventDefault(),n.open("last");break;case Vn.next(o(),t.orientation()):if(r===void 0)break;p.stopPropagation(),p.preventDefault(),r.nextMenu();break;case Vn.previous(o(),t.orientation()):if(r===void 0)break;p.stopPropagation(),p.preventDefault(),r.previousMenu();break}}},y=p=>{me(p,l.onMouseOver),n.triggerRef()?.dataset.pointerType!=="touch"&&!l.disabled&&r!==void 0&&r.value()!==void 0&&r.setValue(s)},v=p=>{me(p,l.onFocus),r!==void 0&&p.currentTarget.dataset.pointerType!=="touch"&&r.setValue(s)};return V(()=>U(n.registerTriggerId(l.id))),m($o,W({ref(p){let b=_e(n.setTriggerRef,l.ref);typeof b=="function"&&b(p)},get"data-kb-menu-value-trigger"(){return t.value()},get id(){return l.id},get disabled(){return l.disabled},"aria-haspopup":"true",get"aria-expanded"(){return n.isOpen()},get"aria-controls"(){return xe(()=>!!n.isOpen())()?n.contentId():void 0},get"data-highlighted"(){return s()!==void 0&&r?.value()===s()?!0:void 0},get tabIndex(){return r!==void 0?r.value()===s()||r.lastValue()===s()?0:-1:void 0},onPointerDown:f,onMouseOver:y,onClick:h,onKeyDown:g,onFocus:v,role:r!==void 0?"menuitem":void 0},()=>n.dataset(),a))}var s0=Ee();function Zl(){return $e(s0)}function Jl(e){let t,n=yt(),r=Mt(),o=Pr(),i=Zl(),{direction:l}=Kt(),a=J({id:n.generateId(`content-${Be()}`)},e),[s,c]=ee(a,["ref","id","style","onOpenAutoFocus","onCloseAutoFocus","onEscapeKeyDown","onFocusOutside","onPointerEnter","onPointerMove","onKeyDown","onMouseDown","onFocusIn","onFocusOut"]),d=0,u=()=>r.parentMenuContext()==null&&o===void 0&&n.isModal(),f=Hf({selectionManager:r.listState().selectionManager,collection:r.listState().collection,autoFocus:r.autoFocus,deferAutoFocus:!0,shouldFocusWrap:!0,disallowTypeAhead:()=>!r.listState().selectionManager().isFocused(),orientation:()=>n.orientation()==="horizontal"?"vertical":"horizontal"},()=>t);Gf({trapFocus:()=>u()&&r.isOpen(),onMountAutoFocus:w=>{o===void 0&&s.onOpenAutoFocus?.(w)},onUnmountAutoFocus:s.onCloseAutoFocus},()=>t);let h=w=>{if(Ye(w.currentTarget,w.target)&&(w.key==="Tab"&&r.isOpen()&&w.preventDefault(),o!==void 0&&w.currentTarget.getAttribute("aria-haspopup")!=="true"))switch(w.key){case Vn.next(l(),n.orientation()):w.stopPropagation(),w.preventDefault(),r.close(!0),o.setAutoFocusMenu(!0),o.nextMenu();break;case Vn.previous(l(),n.orientation()):if(w.currentTarget.hasAttribute("data-closed"))break;w.stopPropagation(),w.preventDefault(),r.close(!0),o.setAutoFocusMenu(!0),o.previousMenu();break}},g=w=>{s.onEscapeKeyDown?.(w),o?.setAutoFocusMenu(!1),r.close(!0)},y=w=>{s.onFocusOutside?.(w),n.isModal()&&w.preventDefault()},v=w=>{me(w,s.onPointerEnter),r.isOpen()&&(r.parentMenuContext()?.listState().selectionManager().setFocused(!1),r.parentMenuContext()?.listState().selectionManager().setFocusedKey(void 0))},p=w=>{if(me(w,s.onPointerMove),w.pointerType!=="mouse")return;let x=w.target,S=d!==w.clientX;Ye(w.currentTarget,x)&&S&&(r.setPointerDir(w.clientX>d?"right":"left"),d=w.clientX)};V(()=>U(r.registerContentId(s.id)));let b={ref:_e(w=>{r.setContentRef(w),t=w},s.ref),role:"menu",get id(){return s.id},get tabIndex(){return f.tabIndex()},get"aria-labelledby"(){return r.triggerId()},onKeyDown:Me([s.onKeyDown,f.onKeyDown,h]),onMouseDown:Me([s.onMouseDown,f.onMouseDown]),onFocusIn:Me([s.onFocusIn,f.onFocusIn]),onFocusOut:Me([s.onFocusOut,f.onFocusOut]),onPointerEnter:v,onPointerMove:p,get"data-orientation"(){return n.orientation()}};return m(K,{get when(){return r.contentPresent()},get children(){return m(K,{get when(){return i===void 0||r.parentMenuContext()!=null},get fallback(){return m(ve,W({as:"div"},()=>r.dataset(),b,c))},get children(){return m(Il.Positioner,{get children(){return m(Nf,W({get disableOutsidePointerEvents(){return xe(()=>!!u())()&&r.isOpen()},get excludedElements(){return[r.triggerRef]},bypassTopMostLayerCheck:!0,get style(){return Ar({"--kb-menu-content-transform-origin":"var(--kb-popper-content-transform-origin)",position:"relative"},s.style)},onEscapeKeyDown:g,onFocusOutside:y,get onDismiss(){return r.close}},()=>r.dataset(),b,c))}})}})}})}function l0(e){let t,n=yt(),r=Mt(),[o,i]=ee(e,["ref"]);return o0({element:()=>t??null,enabled:()=>r.contentPresent()&&n.preventScroll()}),m(Jl,W({ref(l){let a=_e(s=>{t=s},o.ref);typeof a=="function"&&a(l)}},i))}var ea=Ee();function a0(){let e=$e(ea);if(e===void 0)throw new Error("[kobalte]: `useMenuGroupContext` must be used within a `Menu.Group` component");return e}function Lo(e){let t=yt(),n=J({id:t.generateId(`group-${Be()}`)},e),[r,o]=z(),i={generateId:Un(()=>n.id),registerLabelId:Xe(o)};return m(ea.Provider,{value:i,get children(){return m(ve,W({as:"div",role:"group",get"aria-labelledby"(){return r()}},n))}})}function ta(e){let t=a0(),n=J({id:t.generateId("label")},e),[r,o]=ee(n,["id"]);return V(()=>U(t.registerLabelId(r.id))),m(ve,W({as:"span",get id(){return r.id},"aria-hidden":"true"},o))}function na(e){let t=Mt(),n=J({children:"\u25BC"},e);return m(ve,W({as:"span","aria-hidden":"true"},()=>t.dataset(),n))}function ra(e){return m(Fo,W({role:"menuitem",closeOnSelect:!0},e))}function oa(e){let t=Po(),n=J({id:t.generateId("description")},e),[r,o]=ee(n,["id"]);return V(()=>U(t.registerDescription(r.id))),m(ve,W({as:"div",get id(){return r.id}},()=>t.dataset(),o))}function ia(e){let t=Po(),n=J({id:t.generateId("indicator")},e),[r,o]=ee(n,["forceMount"]);return m(K,{get when(){return r.forceMount||t.isChecked()},get children(){return m(ve,W({as:"div"},()=>t.dataset(),o))}})}function sa(e){let t=Po(),n=J({id:t.generateId("label")},e),[r,o]=ee(n,["ref","id"]);return V(()=>U(t.registerLabel(r.id))),m(ve,W({as:"div",ref(i){let l=_e(t.setLabelRef,r.ref);typeof l=="function"&&l(i)},get id(){return r.id}},()=>t.dataset(),o))}function la(e){let t=Mt();return m(K,{get when(){return t.contentPresent()},get children(){return m(Yr,e)}})}var aa=Ee();function c0(){let e=$e(aa);if(e===void 0)throw new Error("[kobalte]: `useMenuRadioGroupContext` must be used within a `Menu.RadioGroup` component");return e}function ca(e){let n=yt().generateId(`radiogroup-${Be()}`),r=J({id:n},e),[o,i]=ee(r,["value","defaultValue","onChange","disabled"]),[l,a]=Gn({value:()=>o.value,defaultValue:()=>o.defaultValue,onChange:c=>o.onChange?.(c)}),s={isDisabled:()=>o.disabled,isSelectedValue:c=>c===l(),setSelectedValue:a};return m(aa.Provider,{value:s,get children(){return m(Lo,i)}})}function ua(e){let t=c0(),n=J({closeOnSelect:!1},e),[r,o]=ee(n,["value","onSelect"]);return m(Fo,W({role:"menuitemradio",get checked(){return t.isSelectedValue(r.value)},onSelect:()=>{r.onSelect?.(),t.setSelectedValue(r.value)}},o))}function u0(e,t,n){let r=e.split("-")[0],o=n.getBoundingClientRect(),i=[],l=t.clientX,a=t.clientY;switch(r){case"top":i.push([l,a+5]),i.push([o.left,o.bottom]),i.push([o.left,o.top]),i.push([o.right,o.top]),i.push([o.right,o.bottom]);break;case"right":i.push([l-5,a]),i.push([o.left,o.top]),i.push([o.right,o.top]),i.push([o.right,o.bottom]),i.push([o.left,o.bottom]);break;case"bottom":i.push([l,a-5]),i.push([o.right,o.top]),i.push([o.right,o.bottom]),i.push([o.left,o.bottom]),i.push([o.left,o.top]);break;case"left":i.push([l+5,a]),i.push([o.right,o.bottom]),i.push([o.left,o.bottom]),i.push([o.left,o.top]),i.push([o.right,o.top]);break}return i}function d0(e,t){return t?ju([e.clientX,e.clientY],t):!1}function da(e){let t=yt(),n=ul(),r=jl(),o=Pr(),i=Zl(),l=J({placement:t.orientation()==="horizontal"?"bottom-start":"right-start"},e),[a,s]=ee(l,["open","defaultOpen","onOpenChange"]),c=0,d=null,u="right",[f,h]=z(),[g,y]=z(),[v,p]=z(),[b,w]=z(),[x,S]=z(!0),[q,D]=z(s.placement),[P,C]=z([]),[I,j]=z([]),{DomCollectionProvider:H}=ud({items:I,onItemsChange:j}),se=Fl({open:()=>a.open,defaultOpen:()=>a.defaultOpen,onOpenChange:G=>a.onOpenChange?.(G)}),{present:oe}=pl({show:()=>t.forceMount()||se.isOpen(),element:()=>b()??null}),ge=Md({selectionMode:"none",dataSource:I}),ue=G=>{S(G),se.open()},le=(G=!1)=>{se.close(),G&&r&&r.close(!0)},de=G=>{S(G),se.toggle()},he=()=>{let G=b();G&&(Fe(G),ge.selectionManager().setFocused(!0),ge.selectionManager().setFocusedKey(void 0))},Ce=()=>{i!=null?setTimeout(()=>he()):he()},Re=G=>{C(Oe=>[...Oe,G]);let et=r?.registerNestedMenu(G);return()=>{C(Oe=>lo(Oe,G)),et?.()}},we=G=>u===d?.side&&d0(G,d?.area),Le=G=>{we(G)&&G.preventDefault()},M=G=>{we(G)||Ce()},be=G=>{we(G)&&G.preventDefault()};Wf({isDisabled:()=>!(r==null&&se.isOpen()&&t.isModal()),targets:()=>[b(),...P()].filter(Boolean)}),V(()=>{let G=b();if(!G||!r)return;let et=r.registerNestedMenu(G);U(()=>{et()})}),V(()=>{r===void 0&&o?.registerMenu(t.value(),[b(),...P()])}),V(()=>{r!==void 0||o===void 0||(o.value()===t.value()?(v()?.focus(),o.autoFocusMenu()&&ue(!0)):le())}),V(()=>{r!==void 0||o===void 0||se.isOpen()&&o.setValue(t.value())}),U(()=>{r===void 0&&o?.unregisterMenu(t.value())});let Tt={dataset:T(()=>({"data-expanded":se.isOpen()?"":void 0,"data-closed":se.isOpen()?void 0:""})),isOpen:se.isOpen,contentPresent:oe,nestedMenus:P,currentPlacement:q,pointerGraceTimeoutId:()=>c,autoFocus:x,listState:()=>ge,parentMenuContext:()=>r,triggerRef:v,contentRef:b,triggerId:f,contentId:g,setTriggerRef:p,setContentRef:w,open:ue,close:le,toggle:de,focusContent:Ce,onItemEnter:Le,onItemLeave:M,onTriggerLeave:be,setPointerDir:G=>u=G,setPointerGraceTimeoutId:G=>c=G,setPointerGraceIntent:G=>d=G,registerNestedMenu:Re,registerItemToParentDomCollection:n?.registerItem,registerTriggerId:Xe(h),registerContentId:Xe(y)};return m(H,{get children(){return m(Gl.Provider,{value:Tt,get children(){return m(K,{when:i===void 0,get fallback(){return s.children},get children(){return m(Il,W({anchorRef:v,contentRef:b,onCurrentPlacementChange:D},s))}})}})}})}function fa(e){let{direction:t}=Kt();return m(da,W({get placement(){return t()==="rtl"?"left-start":"right-start"},flip:!0},e))}var f0={close:(e,t)=>e==="ltr"?[t==="horizontal"?"ArrowLeft":"ArrowUp"]:[t==="horizontal"?"ArrowRight":"ArrowDown"]};function ga(e){let t=Mt(),n=yt(),[r,o]=ee(e,["onFocusOutside","onKeyDown"]),{direction:i}=Kt();return m(Jl,W({onOpenAutoFocus:d=>{d.preventDefault()},onCloseAutoFocus:d=>{d.preventDefault()},onFocusOutside:d=>{r.onFocusOutside?.(d);let u=d.target;Ye(t.triggerRef(),u)||t.close()},onKeyDown:d=>{me(d,r.onKeyDown);let u=Ye(d.currentTarget,d.target),f=f0.close(i(),n.orientation()).includes(d.key),h=t.parentMenuContext()!=null;u&&f&&h&&(t.close(),Fe(t.triggerRef()))}},o))}var _s=["Enter"," "],g0={open:(e,t)=>e==="ltr"?[..._s,t==="horizontal"?"ArrowRight":"ArrowDown"]:[..._s,t==="horizontal"?"ArrowLeft":"ArrowUp"]};function ha(e){let t,n=yt(),r=Mt(),o=J({id:n.generateId(`sub-trigger-${Be()}`)},e),[i,l]=ee(o,["ref","id","textValue","disabled","onPointerMove","onPointerLeave","onPointerDown","onPointerUp","onClick","onKeyDown","onMouseDown","onFocus"]),a=null,s=()=>{Ie||(a&&self.clearTimeout(a),a=null)},{direction:c}=Kt(),d=()=>i.id,u=()=>{let w=r.parentMenuContext();if(w==null)throw new Error("[kobalte]: `Menu.SubTrigger` must be used within a `Menu.Sub` component");return w.listState().selectionManager()},f=()=>r.listState().collection(),h=()=>u().focusedKey()===d(),g=vl({key:d,selectionManager:u,shouldSelectOnPressUp:!0,allowsDifferentPressOrigin:!0,disabled:()=>i.disabled},()=>t),y=w=>{me(w,i.onClick),!r.isOpen()&&!i.disabled&&r.open(!0)},v=w=>{if(me(w,i.onPointerMove),w.pointerType!=="mouse")return;let x=r.parentMenuContext();if(x?.onItemEnter(w),!w.defaultPrevented){if(i.disabled){x?.onItemLeave(w);return}!r.isOpen()&&!a&&(r.parentMenuContext()?.setPointerGraceIntent(null),a=self.setTimeout(()=>{r.open(!1),s()},100)),x?.onItemEnter(w),w.defaultPrevented||(r.listState().selectionManager().isFocused()&&(r.listState().selectionManager().setFocused(!1),r.listState().selectionManager().setFocusedKey(void 0)),Fe(w.currentTarget),x?.listState().selectionManager().setFocused(!0),x?.listState().selectionManager().setFocusedKey(d()))}},p=w=>{if(me(w,i.onPointerLeave),w.pointerType!=="mouse")return;s();let x=r.parentMenuContext(),S=r.contentRef();if(S){x?.setPointerGraceIntent({area:u0(r.currentPlacement(),w,S),side:r.currentPlacement().split("-")[0]}),self.clearTimeout(x?.pointerGraceTimeoutId());let q=self.setTimeout(()=>{x?.setPointerGraceIntent(null)},300);x?.setPointerGraceTimeoutId(q)}else{if(x?.onTriggerLeave(w),w.defaultPrevented)return;x?.setPointerGraceIntent(null)}x?.onItemLeave(w)},b=w=>{me(w,i.onKeyDown),!w.repeat&&(i.disabled||g0.open(c(),n.orientation()).includes(w.key)&&(w.stopPropagation(),w.preventDefault(),u().setFocused(!1),u().setFocusedKey(void 0),r.isOpen()||r.open("first"),r.focusContent(),r.listState().selectionManager().setFocused(!0),r.listState().selectionManager().setFocusedKey(f().getFirstKey())))};return V(()=>{if(r.registerItemToParentDomCollection==null)throw new Error("[kobalte]: `Menu.SubTrigger` must be used within a `Menu.Sub` component");let w=r.registerItemToParentDomCollection({ref:()=>t,type:"item",key:d(),textValue:i.textValue??t?.textContent??"",disabled:i.disabled??!1});U(w)}),V(ct(()=>r.parentMenuContext()?.pointerGraceTimeoutId(),w=>{U(()=>{self.clearTimeout(w),r.parentMenuContext()?.setPointerGraceIntent(null)})})),V(()=>U(r.registerTriggerId(i.id))),U(()=>{s()}),m(ve,W({as:"div",ref(w){let x=_e(S=>{r.setTriggerRef(S),t=S},i.ref);typeof x=="function"&&x(w)},get id(){return i.id},role:"menuitem",get tabIndex(){return g.tabIndex()},"aria-haspopup":"true",get"aria-expanded"(){return r.isOpen()},get"aria-controls"(){return xe(()=>!!r.isOpen())()?r.contentId():void 0},get"aria-disabled"(){return i.disabled},get"data-key"(){return g.dataKey()},get"data-highlighted"(){return h()?"":void 0},get"data-disabled"(){return i.disabled?"":void 0},get onPointerDown(){return Me([i.onPointerDown,g.onPointerDown])},get onPointerUp(){return Me([i.onPointerUp,g.onPointerUp])},get onClick(){return Me([y,g.onClick])},get onKeyDown(){return Me([b,g.onKeyDown])},get onMouseDown(){return Me([i.onMouseDown,g.onMouseDown])},get onFocus(){return Me([i.onFocus,g.onFocus])},onPointerMove:v,onPointerLeave:p},()=>r.dataset(),l))}function h0(e){let t=Pr(),n=`menu-${Be()}`,r=J({id:n,modal:!0},e),[o,i]=ee(r,["id","modal","preventScroll","forceMount","open","defaultOpen","onOpenChange","value","orientation"]),l=Fl({open:()=>o.open,defaultOpen:()=>o.defaultOpen,onOpenChange:s=>o.onOpenChange?.(s)}),a={isModal:()=>o.modal??!0,preventScroll:()=>o.preventScroll??a.isModal(),forceMount:()=>o.forceMount??!1,generateId:Un(()=>o.id),value:()=>o.value,orientation:()=>o.orientation??t?.orientation()??"horizontal"};return m(Ql.Provider,{value:a,get children(){return m(da,W({get open(){return l.isOpen()},get onOpenChange(){return l.setIsOpen}},i))}})}var y0={};Or(y0,{Root:()=>Fr,Separator:()=>m0});function Fr(e){let t,n=J({orientation:"horizontal"},e),[r,o]=ee(n,["ref","orientation"]),i=Tr(()=>t,()=>"hr");return m(ve,W({as:"hr",ref(l){let a=_e(s=>t=s,r.ref);typeof a=="function"&&a(l)},get role(){return i()!=="hr"?"separator":void 0},get"aria-orientation"(){return r.orientation==="vertical"?"vertical":void 0},get"data-orientation"(){return r.orientation}},o))}var m0=Fr,ce={};Or(ce,{Arrow:()=>Io,CheckboxItem:()=>Yl,Content:()=>ya,DropdownMenu:()=>v0,Group:()=>Lo,GroupLabel:()=>ta,Icon:()=>na,Item:()=>ra,ItemDescription:()=>oa,ItemIndicator:()=>ia,ItemLabel:()=>sa,Portal:()=>la,RadioGroup:()=>ca,RadioItem:()=>ua,Root:()=>ma,Separator:()=>Fr,Sub:()=>fa,SubContent:()=>ga,SubTrigger:()=>ha,Trigger:()=>Xl});function ya(e){let t=yt(),n=Mt(),[r,o]=ee(e,["onCloseAutoFocus","onInteractOutside"]),i=!1;return m(l0,W({onCloseAutoFocus:s=>{r.onCloseAutoFocus?.(s),i||Fe(n.triggerRef()),i=!1,s.preventDefault()},onInteractOutside:s=>{r.onInteractOutside?.(s),(!t.isModal()||s.detail.isContextMenu)&&(i=!0)}},o))}function ma(e){let t=`dropdownmenu-${Be()}`,n=J({id:t},e);return m(h0,n)}var v0=Object.assign(ma,{Arrow:Io,CheckboxItem:Yl,Content:ya,Group:Lo,GroupLabel:ta,Icon:na,Item:ra,ItemDescription:oa,ItemIndicator:ia,ItemLabel:sa,Portal:la,RadioGroup:ca,RadioItem:ua,Separator:Fr,Sub:fa,SubContent:ga,SubTrigger:ha,Trigger:Xl}),$={colors:{inherit:"inherit",current:"currentColor",transparent:"transparent",black:"#000000",white:"#ffffff",neutral:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},darkGray:{50:"#525c7a",100:"#49536e",200:"#414962",300:"#394056",400:"#313749",500:"#292e3d",600:"#212530",700:"#191c24",800:"#111318",900:"#0b0d10"},gray:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},blue:{25:"#F5FAFF",50:"#EFF8FF",100:"#D1E9FF",200:"#B2DDFF",300:"#84CAFF",400:"#53B1FD",500:"#2E90FA",600:"#1570EF",700:"#175CD3",800:"#1849A9",900:"#194185"},green:{25:"#F6FEF9",50:"#ECFDF3",100:"#D1FADF",200:"#A6F4C5",300:"#6CE9A6",400:"#32D583",500:"#12B76A",600:"#039855",700:"#027A48",800:"#05603A",900:"#054F31"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},yellow:{25:"#FFFCF5",50:"#FFFAEB",100:"#FEF0C7",200:"#FEDF89",300:"#FEC84B",400:"#FDB022",500:"#F79009",600:"#DC6803",700:"#B54708",800:"#93370D",900:"#7A2E0E"},purple:{25:"#FAFAFF",50:"#F4F3FF",100:"#EBE9FE",200:"#D9D6FE",300:"#BDB4FE",400:"#9B8AFB",500:"#7A5AF8",600:"#6938EF",700:"#5925DC",800:"#4A1FB8",900:"#3E1C96"},teal:{25:"#F6FEFC",50:"#F0FDF9",100:"#CCFBEF",200:"#99F6E0",300:"#5FE9D0",400:"#2ED3B7",500:"#15B79E",600:"#0E9384",700:"#107569",800:"#125D56",900:"#134E48"},pink:{25:"#fdf2f8",50:"#fce7f3",100:"#fbcfe8",200:"#f9a8d4",300:"#f472b6",400:"#ec4899",500:"#db2777",600:"#be185d",700:"#9d174d",800:"#831843",900:"#500724"},cyan:{25:"#ecfeff",50:"#cffafe",100:"#a5f3fc",200:"#67e8f9",300:"#22d3ee",400:"#06b6d4",500:"#0891b2",600:"#0e7490",700:"#155e75",800:"#164e63",900:"#083344"}},alpha:{100:"ff",90:"e5",80:"cc",70:"b3",60:"99",50:"80",40:"66",30:"4d",20:"33",10:"1a",0:"00"},font:{size:{"2xs":"calc(var(--tsqd-font-size) * 0.625)",xs:"calc(var(--tsqd-font-size) * 0.75)",sm:"calc(var(--tsqd-font-size) * 0.875)",md:"var(--tsqd-font-size)",lg:"calc(var(--tsqd-font-size) * 1.125)",xl:"calc(var(--tsqd-font-size) * 1.25)","2xl":"calc(var(--tsqd-font-size) * 1.5)","3xl":"calc(var(--tsqd-font-size) * 1.875)","4xl":"calc(var(--tsqd-font-size) * 2.25)","5xl":"calc(var(--tsqd-font-size) * 3)","6xl":"calc(var(--tsqd-font-size) * 3.75)","7xl":"calc(var(--tsqd-font-size) * 4.5)","8xl":"calc(var(--tsqd-font-size) * 6)","9xl":"calc(var(--tsqd-font-size) * 8)"},lineHeight:{xs:"calc(var(--tsqd-font-size) * 1)",sm:"calc(var(--tsqd-font-size) * 1.25)",md:"calc(var(--tsqd-font-size) * 1.5)",lg:"calc(var(--tsqd-font-size) * 1.75)",xl:"calc(var(--tsqd-font-size) * 2)","2xl":"calc(var(--tsqd-font-size) * 2.25)","3xl":"calc(var(--tsqd-font-size) * 2.5)","4xl":"calc(var(--tsqd-font-size) * 2.75)","5xl":"calc(var(--tsqd-font-size) * 3)","6xl":"calc(var(--tsqd-font-size) * 3.25)","7xl":"calc(var(--tsqd-font-size) * 3.5)","8xl":"calc(var(--tsqd-font-size) * 3.75)","9xl":"calc(var(--tsqd-font-size) * 4)"},weight:{thin:"100",extralight:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"}},breakpoints:{xs:"320px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},border:{radius:{none:"0px",xs:"calc(var(--tsqd-font-size) * 0.125)",sm:"calc(var(--tsqd-font-size) * 0.25)",md:"calc(var(--tsqd-font-size) * 0.375)",lg:"calc(var(--tsqd-font-size) * 0.5)",xl:"calc(var(--tsqd-font-size) * 0.75)","2xl":"calc(var(--tsqd-font-size) * 1)","3xl":"calc(var(--tsqd-font-size) * 1.5)",full:"9999px"}},size:{0:"0px",.25:"calc(var(--tsqd-font-size) * 0.0625)",.5:"calc(var(--tsqd-font-size) * 0.125)",1:"calc(var(--tsqd-font-size) * 0.25)",1.5:"calc(var(--tsqd-font-size) * 0.375)",2:"calc(var(--tsqd-font-size) * 0.5)",2.5:"calc(var(--tsqd-font-size) * 0.625)",3:"calc(var(--tsqd-font-size) * 0.75)",3.5:"calc(var(--tsqd-font-size) * 0.875)",4:"calc(var(--tsqd-font-size) * 1)",4.5:"calc(var(--tsqd-font-size) * 1.125)",5:"calc(var(--tsqd-font-size) * 1.25)",5.5:"calc(var(--tsqd-font-size) * 1.375)",6:"calc(var(--tsqd-font-size) * 1.5)",6.5:"calc(var(--tsqd-font-size) * 1.625)",7:"calc(var(--tsqd-font-size) * 1.75)",8:"calc(var(--tsqd-font-size) * 2)",9:"calc(var(--tsqd-font-size) * 2.25)",10:"calc(var(--tsqd-font-size) * 2.5)",11:"calc(var(--tsqd-font-size) * 2.75)",12:"calc(var(--tsqd-font-size) * 3)",14:"calc(var(--tsqd-font-size) * 3.5)",16:"calc(var(--tsqd-font-size) * 4)",20:"calc(var(--tsqd-font-size) * 5)",24:"calc(var(--tsqd-font-size) * 6)",28:"calc(var(--tsqd-font-size) * 7)",32:"calc(var(--tsqd-font-size) * 8)",36:"calc(var(--tsqd-font-size) * 9)",40:"calc(var(--tsqd-font-size) * 10)",44:"calc(var(--tsqd-font-size) * 11)",48:"calc(var(--tsqd-font-size) * 12)",52:"calc(var(--tsqd-font-size) * 13)",56:"calc(var(--tsqd-font-size) * 14)",60:"calc(var(--tsqd-font-size) * 15)",64:"calc(var(--tsqd-font-size) * 16)",72:"calc(var(--tsqd-font-size) * 18)",80:"calc(var(--tsqd-font-size) * 20)",96:"calc(var(--tsqd-font-size) * 24)"},shadow:{xs:(e="rgb(0 0 0 / 0.1)")=>"0 1px 2px 0 rgb(0 0 0 / 0.05)",sm:(e="rgb(0 0 0 / 0.1)")=>`0 1px 3px 0 ${e}, 0 1px 2px -1px ${e}`,md:(e="rgb(0 0 0 / 0.1)")=>`0 4px 6px -1px ${e}, 0 2px 4px -2px ${e}`,lg:(e="rgb(0 0 0 / 0.1)")=>`0 10px 15px -3px ${e}, 0 4px 6px -4px ${e}`,xl:(e="rgb(0 0 0 / 0.1)")=>`0 20px 25px -5px ${e}, 0 8px 10px -6px ${e}`,"2xl":(e="rgb(0 0 0 / 0.25)")=>`0 25px 50px -12px ${e}`,inner:(e="rgb(0 0 0 / 0.05)")=>`inset 0 2px 4px 0 ${e}`,none:()=>"none"},zIndices:{hide:-1,auto:"auto",base:0,docked:10,dropdown:1e3,sticky:1100,banner:1200,overlay:1300,modal:1400,popover:1500,skipLink:1600,toast:1700,tooltip:1800}},p0=R('<svg width=14 height=14 viewBox="0 0 14 14"fill=none xmlns=http://www.w3.org/2000/svg><path d="M13 13L9.00007 9M10.3333 5.66667C10.3333 8.244 8.244 10.3333 5.66667 10.3333C3.08934 10.3333 1 8.244 1 5.66667C1 3.08934 3.08934 1 5.66667 1C8.244 1 10.3333 3.08934 10.3333 5.66667Z"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'),b0=R('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 18.1409 18.8867 17.8 19.485C17.4999 20.0118 17.0472 20.4353 16.5017 20.6997C15.882 21 15.0911 21 13.5093 21H10.4907C8.90891 21 8.11803 21 7.49834 20.6997C6.95276 20.4353 6.50009 20.0118 6.19998 19.485C5.85911 18.8867 5.8065 18.0975 5.70129 16.5193L5 6M10 10.5V15.5M14 10.5V15.5"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),w0=R('<svg width=10 height=6 viewBox="0 0 10 6"fill=none xmlns=http://www.w3.org/2000/svg><path d="M1 1L5 5L9 1"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'),x0=R('<svg width=12 height=12 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M8 13.3333V2.66667M8 2.66667L4 6.66667M8 2.66667L12 6.66667"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'),qo=R('<svg width=12 height=12 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M8 2.66667V13.3333M8 13.3333L4 9.33333M8 13.3333L12 9.33333"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'),S0=R('<svg viewBox="0 0 24 24"height=12 width=12 fill=none xmlns=http://www.w3.org/2000/svg><path d="M12 2v2m0 16v2M4 12H2m4.314-5.686L4.9 4.9m12.786 1.414L19.1 4.9M6.314 17.69 4.9 19.104m12.786-1.414 1.414 1.414M22 12h-2m-3 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),C0=R('<svg viewBox="0 0 24 24"height=12 width=12 fill=none xmlns=http://www.w3.org/2000/svg><path d="M22 15.844a10.424 10.424 0 0 1-4.306.925c-5.779 0-10.463-4.684-10.463-10.462 0-1.536.33-2.994.925-4.307A10.464 10.464 0 0 0 2 11.538C2 17.316 6.684 22 12.462 22c4.243 0 7.896-2.526 9.538-6.156Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),$0=R('<svg viewBox="0 0 24 24"height=12 width=12 fill=none xmlns=http://www.w3.org/2000/svg><path d="M8 21h8m-4-4v4m-5.2-4h10.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 14.72 22 13.88 22 12.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C19.72 3 18.88 3 17.2 3H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 5.28 2 6.12 2 7.8v4.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 17 5.12 17 6.8 17Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),k0=R('<svg stroke=currentColor fill=currentColor stroke-width=0 viewBox="0 0 24 24"height=1em width=1em xmlns=http://www.w3.org/2000/svg><path fill=none d="M0 0h24v24H0z"></path><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z">'),E0=R('<svg stroke-width=0 viewBox="0 0 24 24"height=1em width=1em xmlns=http://www.w3.org/2000/svg><path fill=none d="M24 .01c0-.01 0-.01 0 0L0 0v24h24V.01zM0 0h24v24H0V0zm0 0h24v24H0V0z"></path><path d="M22.99 9C19.15 5.16 13.8 3.76 8.84 4.78l2.52 2.52c3.47-.17 6.99 1.05 9.63 3.7l2-2zm-4 4a9.793 9.793 0 00-4.49-2.56l3.53 3.53.96-.97zM2 3.05L5.07 6.1C3.6 6.82 2.22 7.78 1 9l1.99 2c1.24-1.24 2.67-2.16 4.2-2.77l2.24 2.24A9.684 9.684 0 005 13v.01L6.99 15a7.042 7.042 0 014.92-2.06L18.98 20l1.27-1.26L3.29 1.79 2 3.05zM9 17l3 3 3-3a4.237 4.237 0 00-6 0z">'),A0=R('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9.3951 19.3711L9.97955 20.6856C10.1533 21.0768 10.4368 21.4093 10.7958 21.6426C11.1547 21.8759 11.5737 22.0001 12.0018 22C12.4299 22.0001 12.8488 21.8759 13.2078 21.6426C13.5667 21.4093 13.8503 21.0768 14.024 20.6856L14.6084 19.3711C14.8165 18.9047 15.1664 18.5159 15.6084 18.26C16.0532 18.0034 16.5678 17.8941 17.0784 17.9478L18.5084 18.1C18.9341 18.145 19.3637 18.0656 19.7451 17.8713C20.1265 17.6771 20.4434 17.3763 20.6573 17.0056C20.8715 16.635 20.9735 16.2103 20.9511 15.7829C20.9286 15.3555 20.7825 14.9438 20.5307 14.5978L19.684 13.4344C19.3825 13.0171 19.2214 12.5148 19.224 12C19.2239 11.4866 19.3865 10.9864 19.6884 10.5711L20.5351 9.40778C20.787 9.06175 20.933 8.65007 20.9555 8.22267C20.978 7.79528 20.8759 7.37054 20.6618 7C20.4479 6.62923 20.131 6.32849 19.7496 6.13423C19.3681 5.93997 18.9386 5.86053 18.5129 5.90556L17.0829 6.05778C16.5722 6.11141 16.0577 6.00212 15.6129 5.74556C15.17 5.48825 14.82 5.09736 14.6129 4.62889L14.024 3.31444C13.8503 2.92317 13.5667 2.59072 13.2078 2.3574C12.8488 2.12408 12.4299 1.99993 12.0018 2C11.5737 1.99993 11.1547 2.12408 10.7958 2.3574C10.4368 2.59072 10.1533 2.92317 9.97955 3.31444L9.3951 4.62889C9.18803 5.09736 8.83798 5.48825 8.3951 5.74556C7.95032 6.00212 7.43577 6.11141 6.9251 6.05778L5.49066 5.90556C5.06499 5.86053 4.6354 5.93997 4.25397 6.13423C3.87255 6.32849 3.55567 6.62923 3.34177 7C3.12759 7.37054 3.02555 7.79528 3.04804 8.22267C3.07052 8.65007 3.21656 9.06175 3.46844 9.40778L4.3151 10.5711C4.61704 10.9864 4.77964 11.4866 4.77955 12C4.77964 12.5134 4.61704 13.0137 4.3151 13.4289L3.46844 14.5922C3.21656 14.9382 3.07052 15.3499 3.04804 15.7773C3.02555 16.2047 3.12759 16.6295 3.34177 17C3.55589 17.3706 3.8728 17.6712 4.25417 17.8654C4.63554 18.0596 5.06502 18.1392 5.49066 18.0944L6.92066 17.9422C7.43133 17.8886 7.94587 17.9979 8.39066 18.2544C8.83519 18.511 9.18687 18.902 9.3951 19.3711Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round></path><path d="M12 15C13.6568 15 15 13.6569 15 12C15 10.3431 13.6568 9 12 9C10.3431 9 8.99998 10.3431 8.99998 12C8.99998 13.6569 10.3431 15 12 15Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),M0=R('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M16 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V8M11.5 12.5L17 7M17 7H12M17 7V12M6.2 21H8.8C9.9201 21 10.4802 21 10.908 20.782C11.2843 20.5903 11.5903 20.2843 11.782 19.908C12 19.4802 12 18.9201 12 17.8V15.2C12 14.0799 12 13.5198 11.782 13.092C11.5903 12.7157 11.2843 12.4097 10.908 12.218C10.4802 12 9.92011 12 8.8 12H6.2C5.0799 12 4.51984 12 4.09202 12.218C3.71569 12.4097 3.40973 12.7157 3.21799 13.092C3 13.5198 3 14.0799 3 15.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),T0=R('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path class=copier d="M8 8V5.2C8 4.0799 8 3.51984 8.21799 3.09202C8.40973 2.71569 8.71569 2.40973 9.09202 2.21799C9.51984 2 10.0799 2 11.2 2H18.8C19.9201 2 20.4802 2 20.908 2.21799C21.2843 2.40973 21.5903 2.71569 21.782 3.09202C22 3.51984 22 4.0799 22 5.2V12.8C22 13.9201 22 14.4802 21.782 14.908C21.5903 15.2843 21.2843 15.5903 20.908 15.782C20.4802 16 19.9201 16 18.8 16H16M5.2 22H12.8C13.9201 22 14.4802 22 14.908 21.782C15.2843 21.5903 15.5903 21.2843 15.782 20.908C16 20.4802 16 19.9201 16 18.8V11.2C16 10.0799 16 9.51984 15.782 9.09202C15.5903 8.71569 15.2843 8.40973 14.908 8.21799C14.4802 8 13.9201 8 12.8 8H5.2C4.0799 8 3.51984 8 3.09202 8.21799C2.71569 8.40973 2.40973 8.71569 2.21799 9.09202C2 9.51984 2 10.0799 2 11.2V18.8C2 19.9201 2 20.4802 2.21799 20.908C2.40973 21.2843 2.71569 21.5903 3.09202 21.782C3.51984 22 4.07989 22 5.2 22Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round stroke=currentColor>'),O0=R('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M2.5 21.4998L8.04927 19.3655C8.40421 19.229 8.58168 19.1607 8.74772 19.0716C8.8952 18.9924 9.0358 18.901 9.16804 18.7984C9.31692 18.6829 9.45137 18.5484 9.72028 18.2795L21 6.99982C22.1046 5.89525 22.1046 4.10438 21 2.99981C19.8955 1.89525 18.1046 1.89524 17 2.99981L5.72028 14.2795C5.45138 14.5484 5.31692 14.6829 5.20139 14.8318C5.09877 14.964 5.0074 15.1046 4.92823 15.2521C4.83911 15.4181 4.77085 15.5956 4.63433 15.9506L2.5 21.4998ZM2.5 21.4998L4.55812 16.1488C4.7054 15.7659 4.77903 15.5744 4.90534 15.4867C5.01572 15.4101 5.1523 15.3811 5.2843 15.4063C5.43533 15.4351 5.58038 15.5802 5.87048 15.8703L8.12957 18.1294C8.41967 18.4195 8.56472 18.5645 8.59356 18.7155C8.61877 18.8475 8.58979 18.9841 8.51314 19.0945C8.42545 19.2208 8.23399 19.2944 7.85107 19.4417L2.5 21.4998Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),va=R('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M7.5 12L10.5 15L16.5 9M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),D0=R('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9 9L15 15M15 9L9 15M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"stroke=#F04438 stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),I0=R('<svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 xmlns=http://www.w3.org/2000/svg><rect class=list width=20 height=20 y=2 x=2 rx=2></rect><line class=list-item y1=7 y2=7 x1=6 x2=18></line><line class=list-item y2=12 y1=12 x1=6 x2=18></line><line class=list-item y1=17 y2=17 x1=6 x2=18>'),P0=R('<svg viewBox="0 0 24 24"height=20 width=20 fill=none xmlns=http://www.w3.org/2000/svg><path d="M3 7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V7.8Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),F0=R('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),L0=R('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M12 2V6M12 18V22M6 12H2M22 12H18M19.0784 19.0784L16.25 16.25M19.0784 4.99994L16.25 7.82837M4.92157 19.0784L7.75 16.25M4.92157 4.99994L7.75 7.82837"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round></path><animateTransform attributeName=transform attributeType=XML type=rotate from=0 to=360 dur=2s repeatCount=indefinite>'),q0=R('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),_0=R('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9.5 15V9M14.5 15V9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),R0=R('<svg version=1.0 viewBox="0 0 633 633"><linearGradient x1=-666.45 x2=-666.45 y1=163.28 y2=163.99 gradientTransform="matrix(633 0 0 633 422177 -103358)"gradientUnits=userSpaceOnUse><stop stop-color=#6BDAFF offset=0></stop><stop stop-color=#F9FFB5 offset=.32></stop><stop stop-color=#FFA770 offset=.71></stop><stop stop-color=#FF7373 offset=1></stop></linearGradient><circle cx=316.5 cy=316.5 r=316.5></circle><defs><filter x=-137.5 y=412 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=-137.5 y=412 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=89.5 cy=610.5 rx=214.5 ry=186 fill=#015064 stroke=#00CFE2 stroke-width=25></ellipse></g><defs><filter x=316.5 y=412 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=316.5 y=412 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=543.5 cy=610.5 rx=214.5 ry=186 fill=#015064 stroke=#00CFE2 stroke-width=25></ellipse></g><defs><filter x=-137.5 y=450 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=-137.5 y=450 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=89.5 cy=648.5 rx=214.5 ry=186 fill=#015064 stroke=#00A8B8 stroke-width=25></ellipse></g><defs><filter x=316.5 y=450 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=316.5 y=450 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=543.5 cy=648.5 rx=214.5 ry=186 fill=#015064 stroke=#00A8B8 stroke-width=25></ellipse></g><defs><filter x=-137.5 y=486 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=-137.5 y=486 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=89.5 cy=684.5 rx=214.5 ry=186 fill=#015064 stroke=#007782 stroke-width=25></ellipse></g><defs><filter x=316.5 y=486 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=316.5 y=486 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=543.5 cy=684.5 rx=214.5 ry=186 fill=#015064 stroke=#007782 stroke-width=25></ellipse></g><defs><filter x=272.2 y=308 width=176.9 height=129.3 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=272.2 y=308 width=176.9 height=129.3 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><line x1=436 x2=431 y1=403.2 y2=431.8 fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11></line><line x1=291 x2=280 y1=341.5 y2=403.5 fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11></line><line x1=332.9 x2=328.6 y1=384.1 y2=411.2 fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11></line><linearGradient x1=-670.75 x2=-671.59 y1=164.4 y2=164.49 gradientTransform="matrix(-184.16 -32.472 -11.461 64.997 -121359 -32126)"gradientUnits=userSpaceOnUse><stop stop-color=#EE2700 offset=0></stop><stop stop-color=#FF008E offset=1></stop></linearGradient><path d="m344.1 363 97.7 17.2c5.8 2.1 8.2 6.1 7.1 12.1s-4.7 9.2-11 9.9l-106-18.7-57.5-59.2c-3.2-4.8-2.9-9.1 0.8-12.8s8.3-4.4 13.7-2.1l55.2 53.6z"clip-rule=evenodd fill-rule=evenodd></path><line x1=428.2 x2=429.1 y1=384.5 y2=378 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=395.2 x2=396.1 y1=379.5 y2=373 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=362.2 x2=363.1 y1=373.5 y2=367.4 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=324.2 x2=328.4 y1=351.3 y2=347.4 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=303.2 x2=307.4 y1=331.3 y2=327.4 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line></g><defs><filter x=73.2 y=113.8 width=280.6 height=317.4 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=73.2 y=113.8 width=280.6 height=317.4 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><linearGradient x1=-672.16 x2=-672.16 y1=165.03 y2=166.03 gradientTransform="matrix(-100.18 48.861 97.976 200.88 -83342 -93.059)"gradientUnits=userSpaceOnUse><stop stop-color=#A17500 offset=0></stop><stop stop-color=#5D2100 offset=1></stop></linearGradient><path d="m192.3 203c8.1 37.3 14 73.6 17.8 109.1 3.8 35.4 2.8 75.1-3 119.2l61.2-16.7c-15.6-59-25.2-97.9-28.6-116.6s-10.8-51.9-22.1-99.6l-25.3 4.6"clip-rule=evenodd fill-rule=evenodd></path><g stroke=#2F8A00><linearGradient x1=-660.23 x2=-660.23 y1=166.72 y2=167.72 gradientTransform="matrix(92.683 4.8573 -2.0259 38.657 61680 -3088.6)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m195 183.9s-12.6-22.1-36.5-29.9c-15.9-5.2-34.4-1.5-55.5 11.1 15.9 14.3 29.5 22.6 40.7 24.9 16.8 3.6 51.3-6.1 51.3-6.1z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-661.36 x2=-661.36 y1=164.18 y2=165.18 gradientTransform="matrix(110 5.7648 -6.3599 121.35 73933 -15933)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5s-47.5-8.5-83.2 15.7c-23.8 16.2-34.3 49.3-31.6 99.4 30.3-27.8 52.1-48.5 65.2-61.9 19.8-20.2 49.6-53.2 49.6-53.2z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-656.79 x2=-656.79 y1=165.15 y2=166.15 gradientTransform="matrix(62.954 3.2993 -3.5023 66.828 42156 -8754.1)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m195 183.9c-0.8-21.9 6-38 20.6-48.2s29.8-15.4 45.5-15.3c-6.1 21.4-14.5 35.8-25.2 43.4s-24.4 14.2-40.9 20.1z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-663.07 x2=-663.07 y1=165.44 y2=166.44 gradientTransform="matrix(152.47 7.9907 -3.0936 59.029 101884 -4318.7)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5c31.9-30 64.1-39.7 96.7-29s50.8 30.4 54.6 59.1c-35.2-5.5-60.4-9.6-75.8-12.1-15.3-2.6-40.5-8.6-75.5-18z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-662.57 x2=-662.57 y1=164.44 y2=165.44 gradientTransform="matrix(136.46 7.1517 -5.2163 99.533 91536 -11442)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5c35.8-7.6 65.6-0.2 89.2 22s37.7 49 42.3 80.3c-39.8-9.7-68.3-23.8-85.5-42.4s-32.5-38.5-46-59.9z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-656.43 x2=-656.43 y1=163.86 y2=164.86 gradientTransform="matrix(60.866 3.1899 -8.7773 167.48 41560 -25168)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5c-33.6 13.8-53.6 35.7-60.1 65.6s-3.6 63.1 8.7 99.6c27.4-40.3 43.2-69.6 47.4-88s5.6-44.1 4-77.2z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><path d="m196.5 182.3c-14.8 21.6-25.1 41.4-30.8 59.4s-9.5 33-11.1 45.1"fill=none stroke-linecap=round stroke-width=8></path><path d="m194.9 185.7c-24.4 1.7-43.8 9-58.1 21.8s-24.7 25.4-31.3 37.8"fill=none stroke-linecap=round stroke-width=8></path><path d="m204.5 176.4c29.7-6.7 52-8.4 67-5.1s26.9 8.6 35.8 15.9"fill=none stroke-linecap=round stroke-width=8></path><path d="m196.5 181.4c20.3 9.9 38.2 20.5 53.9 31.9s27.4 22.1 35.1 32"fill=none stroke-linecap=round stroke-width=8></path></g></g><defs><filter x=50.5 y=399 width=532 height=633 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=50.5 y=399 width=532 height=633 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><linearGradient x1=-666.06 x2=-666.23 y1=163.36 y2=163.75 gradientTransform="matrix(532 0 0 633 354760 -102959)"gradientUnits=userSpaceOnUse><stop stop-color=#FFF400 offset=0></stop><stop stop-color=#3C8700 offset=1></stop></linearGradient><ellipse cx=316.5 cy=715.5 rx=266 ry=316.5></ellipse></g><defs><filter x=391 y=-24 width=288 height=283 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=391 y=-24 width=288 height=283 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><linearGradient x1=-664.56 x2=-664.56 y1=163.79 y2=164.79 gradientTransform="matrix(227 0 0 227 151421 -37204)"gradientUnits=userSpaceOnUse><stop stop-color=#FFDF00 offset=0></stop><stop stop-color=#FF9D00 offset=1></stop></linearGradient><circle cx=565.5 cy=89.5 r=113.5></circle><linearGradient x1=-644.5 x2=-645.77 y1=342 y2=342 gradientTransform="matrix(30 0 0 1 19770 -253)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=427 x2=397 y1=89 y2=89 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-641.56 x2=-642.83 y1=196.02 y2=196.07 gradientTransform="matrix(26.5 0 0 5.5 17439 -1025.5)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=430.5 x2=404 y1=55.5 y2=50 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-643.73 x2=-645 y1=185.83 y2=185.9 gradientTransform="matrix(29 0 0 8 19107 -1361)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=431 x2=402 y1=122 y2=130 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-638.94 x2=-640.22 y1=177.09 y2=177.39 gradientTransform="matrix(24 0 0 13 15783 -2145)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=442 x2=418 y1=153 y2=166 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-633.42 x2=-634.7 y1=172.41 y2=173.31 gradientTransform="matrix(20 0 0 19 13137 -3096)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=464 x2=444 y1=180 y2=199 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-619.05 x2=-619.52 y1=170.82 y2=171.82 gradientTransform="matrix(13.83 0 0 22.85 9050 -3703.4)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=491.4 x2=477.5 y1=203 y2=225.9 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-578.5 x2=-578.63 y1=170.31 y2=171.31 gradientTransform="matrix(7.5 0 0 24.5 4860 -3953)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=524.5 x2=517 y1=219.5 y2=244 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=666.5 x2=666.5 y1=170.31 y2=171.31 gradientTransform="matrix(.5 0 0 24.5 231.5 -3944)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=564.5 x2=565 y1=228.5 y2=253 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12>');function z0(){return p0()}function pa(){return b0()}function fn(){return w0()}function Rs(){return x0()}function zs(){return qo()}function K0(){return(()=>{var e=qo();return e.style.setProperty("transform","rotate(90deg)"),e})()}function B0(){return(()=>{var e=qo();return e.style.setProperty("transform","rotate(-90deg)"),e})()}function N0(){return S0()}function V0(){return C0()}function U0(){return $0()}function H0(){return k0()}function G0(){return E0()}function j0(){return A0()}function W0(){return M0()}function Q0(){return T0()}function Y0(){return O0()}function X0(e){return(()=>{var t=va(),n=t.firstChild;return B(()=>A(n,"stroke",e.theme==="dark"?"#12B76A":"#027A48")),t})()}function Z0(){return D0()}function J0(){return I0()}function eg(e){return[m(K,{get when(){return e.checked},get children(){var t=va(),n=t.firstChild;return B(()=>A(n,"stroke",e.theme==="dark"?"#9B8AFB":"#6938EF")),t}}),m(K,{get when(){return!e.checked},get children(){var t=P0(),n=t.firstChild;return B(()=>A(n,"stroke",e.theme==="dark"?"#9B8AFB":"#6938EF")),t}})]}function mo(){return F0()}function tg(){return L0()}function ng(){return q0()}function rg(){return _0()}function Ks(){let e=Be();return(()=>{var t=R0(),n=t.firstChild,r=n.nextSibling,o=r.nextSibling,i=o.firstChild,l=o.nextSibling,a=l.firstChild,s=l.nextSibling,c=s.nextSibling,d=c.firstChild,u=c.nextSibling,f=u.firstChild,h=u.nextSibling,g=h.nextSibling,y=g.firstChild,v=g.nextSibling,p=v.firstChild,b=v.nextSibling,w=b.nextSibling,x=w.firstChild,S=w.nextSibling,q=S.firstChild,D=S.nextSibling,P=D.nextSibling,C=P.firstChild,I=P.nextSibling,j=I.firstChild,H=I.nextSibling,se=H.nextSibling,oe=se.firstChild,ge=se.nextSibling,ue=ge.firstChild,le=ge.nextSibling,de=le.nextSibling,he=de.firstChild,Ce=de.nextSibling,Re=Ce.firstChild,we=Ce.nextSibling,Le=we.firstChild,M=Le.nextSibling,be=M.nextSibling,te=be.nextSibling,Tt=te.nextSibling,G=we.nextSibling,et=G.firstChild,Oe=G.nextSibling,Jt=Oe.firstChild,Ge=Oe.nextSibling,Ot=Ge.firstChild,Bt=Ot.nextSibling,mt=Bt.nextSibling,lt=mt.firstChild,vt=lt.nextSibling,F=vt.nextSibling,ae=F.nextSibling,qe=ae.nextSibling,fe=qe.nextSibling,ie=fe.nextSibling,ye=ie.nextSibling,ke=ye.nextSibling,ne=ke.nextSibling,pt=ne.nextSibling,bt=pt.nextSibling,tt=Ge.nextSibling,Nt=tt.firstChild,wt=tt.nextSibling,Vt=wt.firstChild,xt=wt.nextSibling,Dt=xt.firstChild,Yn=Dt.nextSibling,bn=xt.nextSibling,Xn=bn.firstChild,en=bn.nextSibling,Zn=en.firstChild,wn=en.nextSibling,xn=wn.firstChild,Sn=xn.nextSibling,tn=Sn.nextSibling,Ro=tn.nextSibling,zo=Ro.nextSibling,Ko=zo.nextSibling,Bo=Ko.nextSibling,No=Bo.nextSibling,Vo=No.nextSibling,Uo=Vo.nextSibling,Ho=Uo.nextSibling,Go=Ho.nextSibling,jo=Go.nextSibling,Wo=jo.nextSibling,Qo=Wo.nextSibling,Yo=Qo.nextSibling,Xo=Yo.nextSibling,$a=Xo.nextSibling;return A(n,"id",`a-${e}`),A(r,"fill",`url(#a-${e})`),A(i,"id",`am-${e}`),A(l,"id",`b-${e}`),A(a,"filter",`url(#am-${e})`),A(s,"mask",`url(#b-${e})`),A(d,"id",`ah-${e}`),A(u,"id",`k-${e}`),A(f,"filter",`url(#ah-${e})`),A(h,"mask",`url(#k-${e})`),A(y,"id",`ae-${e}`),A(v,"id",`j-${e}`),A(p,"filter",`url(#ae-${e})`),A(b,"mask",`url(#j-${e})`),A(x,"id",`ai-${e}`),A(S,"id",`i-${e}`),A(q,"filter",`url(#ai-${e})`),A(D,"mask",`url(#i-${e})`),A(C,"id",`aj-${e}`),A(I,"id",`h-${e}`),A(j,"filter",`url(#aj-${e})`),A(H,"mask",`url(#h-${e})`),A(oe,"id",`ag-${e}`),A(ge,"id",`g-${e}`),A(ue,"filter",`url(#ag-${e})`),A(le,"mask",`url(#g-${e})`),A(he,"id",`af-${e}`),A(Ce,"id",`f-${e}`),A(Re,"filter",`url(#af-${e})`),A(we,"mask",`url(#f-${e})`),A(te,"id",`m-${e}`),A(Tt,"fill",`url(#m-${e})`),A(et,"id",`ak-${e}`),A(Oe,"id",`e-${e}`),A(Jt,"filter",`url(#ak-${e})`),A(Ge,"mask",`url(#e-${e})`),A(Ot,"id",`n-${e}`),A(Bt,"fill",`url(#n-${e})`),A(lt,"id",`r-${e}`),A(vt,"fill",`url(#r-${e})`),A(F,"id",`s-${e}`),A(ae,"fill",`url(#s-${e})`),A(qe,"id",`q-${e}`),A(fe,"fill",`url(#q-${e})`),A(ie,"id",`p-${e}`),A(ye,"fill",`url(#p-${e})`),A(ke,"id",`o-${e}`),A(ne,"fill",`url(#o-${e})`),A(pt,"id",`l-${e}`),A(bt,"fill",`url(#l-${e})`),A(Nt,"id",`al-${e}`),A(wt,"id",`d-${e}`),A(Vt,"filter",`url(#al-${e})`),A(xt,"mask",`url(#d-${e})`),A(Dt,"id",`u-${e}`),A(Yn,"fill",`url(#u-${e})`),A(Xn,"id",`ad-${e}`),A(en,"id",`c-${e}`),A(Zn,"filter",`url(#ad-${e})`),A(wn,"mask",`url(#c-${e})`),A(xn,"id",`t-${e}`),A(Sn,"fill",`url(#t-${e})`),A(tn,"id",`v-${e}`),A(Ro,"stroke",`url(#v-${e})`),A(zo,"id",`aa-${e}`),A(Ko,"stroke",`url(#aa-${e})`),A(Bo,"id",`w-${e}`),A(No,"stroke",`url(#w-${e})`),A(Vo,"id",`ac-${e}`),A(Uo,"stroke",`url(#ac-${e})`),A(Ho,"id",`ab-${e}`),A(Go,"stroke",`url(#ab-${e})`),A(jo,"id",`y-${e}`),A(Wo,"stroke",`url(#y-${e})`),A(Qo,"id",`x-${e}`),A(Yo,"stroke",`url(#x-${e})`),A(Xo,"id",`z-${e}`),A($a,"stroke",`url(#z-${e})`),t})()}var og=R('<span><svg width=16 height=16 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M6 12L10 8L6 4"stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),ig=R('<button title="Copy object to clipboard">'),sg=R('<button title="Remove all items"aria-label="Remove all items">'),lg=R('<button title="Delete item"aria-label="Delete item">'),ag=R('<button title="Toggle value"aria-label="Toggle value">'),cg=R('<button title="Bulk Edit Data"aria-label="Bulk Edit Data">'),qn=R("<div>"),ug=R("<div><button> <span></span> <span> "),dg=R("<input>"),Bs=R("<span>"),fg=R("<div><span>:"),gg=R("<div><div><button> [<!>...<!>]");function hg(e,t){let n=0,r=[];for(;n<e.length;)r.push(e.slice(n,n+t)),n=n+t;return r}var Ns=e=>{let t=Te(),n=N().shadowDOMTarget?Q.bind({target:N().shadowDOMTarget}):Q,r=T(()=>t()==="dark"?pn(n):vn(n));return(()=>{var o=og();return B(()=>O(o,L(r().expander,n`
          transform: rotate(${e.expanded?90:0}deg);
        `,e.expanded&&n`
            & svg {
              top: -1px;
            }
          `))),o})()},yg=e=>{let t=Te(),n=N().shadowDOMTarget?Q.bind({target:N().shadowDOMTarget}):Q,r=T(()=>t()==="dark"?pn(n):vn(n)),[o,i]=z("NoCopy");return(()=>{var l=ig();return Wr(l,"click",o()==="NoCopy"?()=>{navigator.clipboard.writeText(Gi(e.value)).then(()=>{i("SuccessCopy"),setTimeout(()=>{i("NoCopy")},1500)},a=>{i("ErrorCopy"),setTimeout(()=>{i("NoCopy")},1500)})}:void 0,!0),k(l,m(Ei,{get children(){return[m(gr,{get when(){return o()==="NoCopy"},get children(){return m(Q0,{})}}),m(gr,{get when(){return o()==="SuccessCopy"},get children(){return m(X0,{get theme(){return t()}})}}),m(gr,{get when(){return o()==="ErrorCopy"},get children(){return m(Z0,{})}})]}})),B(a=>{var s=r().actionButton,c=`${o()==="NoCopy"?"Copy object to clipboard":o()==="SuccessCopy"?"Object copied to clipboard":"Error copying object to clipboard"}`;return s!==a.e&&O(l,a.e=s),c!==a.t&&A(l,"aria-label",a.t=c),a},{e:void 0,t:void 0}),l})()},mg=e=>{let t=Te(),n=N().shadowDOMTarget?Q.bind({target:N().shadowDOMTarget}):Q,r=T(()=>t()==="dark"?pn(n):vn(n)),o=N().client;return(()=>{var i=sg();return i.$$click=()=>{let l=e.activeQuery.state.data,a=It(l,e.dataPath,[]);o.setQueryData(e.activeQuery.queryKey,a)},k(i,m(J0,{})),B(()=>O(i,r().actionButton)),i})()},Vs=e=>{let t=Te(),n=N().shadowDOMTarget?Q.bind({target:N().shadowDOMTarget}):Q,r=T(()=>t()==="dark"?pn(n):vn(n)),o=N().client;return(()=>{var i=lg();return i.$$click=()=>{let l=e.activeQuery.state.data,a=on(l,e.dataPath);o.setQueryData(e.activeQuery.queryKey,a)},k(i,m(pa,{})),B(()=>O(i,L(r().actionButton))),i})()},vg=e=>{let t=Te(),n=N().shadowDOMTarget?Q.bind({target:N().shadowDOMTarget}):Q,r=T(()=>t()==="dark"?pn(n):vn(n)),o=N().client;return(()=>{var i=ag();return i.$$click=()=>{let l=e.activeQuery.state.data,a=It(l,e.dataPath,!e.value);o.setQueryData(e.activeQuery.queryKey,a)},k(i,m(eg,{get theme(){return t()},get checked(){return e.value}})),B(()=>O(i,L(r().actionButton,n`
          width: ${$.size[3.5]};
          height: ${$.size[3.5]};
        `))),i})()};function Us(e){return Symbol.iterator in e}function Lt(e){let t=Te(),n=N().shadowDOMTarget?Q.bind({target:N().shadowDOMTarget}):Q,r=T(()=>t()==="dark"?pn(n):vn(n)),o=N().client,[i,l]=z((e.defaultExpanded||[]).includes(e.label)),a=()=>l(g=>!g),[s,c]=z([]),d=T(()=>Array.isArray(e.value)?e.value.map((g,y)=>({label:y.toString(),value:g})):e.value!==null&&typeof e.value=="object"&&Us(e.value)&&typeof e.value[Symbol.iterator]=="function"?e.value instanceof Map?Array.from(e.value,([g,y])=>({label:g,value:y})):Array.from(e.value,(g,y)=>({label:y.toString(),value:g})):typeof e.value=="object"&&e.value!==null?Object.entries(e.value).map(([g,y])=>({label:g,value:y})):[]),u=T(()=>Array.isArray(e.value)?"array":e.value!==null&&typeof e.value=="object"&&Us(e.value)&&typeof e.value[Symbol.iterator]=="function"?"Iterable":typeof e.value=="object"&&e.value!==null?"object":typeof e.value),f=T(()=>hg(d(),100)),h=e.dataPath??[];return(()=>{var g=qn();return k(g,m(K,{get when(){return f().length},get children(){return[(()=>{var y=ug(),v=y.firstChild,p=v.firstChild,b=p.nextSibling,w=b.nextSibling,x=w.nextSibling,S=x.firstChild;return v.$$click=()=>a(),k(v,m(Ns,{get expanded(){return i()}}),p),k(b,()=>e.label),k(x,()=>String(u()).toLowerCase()==="iterable"?"(Iterable) ":"",S),k(x,()=>d().length,S),k(x,()=>d().length>1?"items":"item",null),k(y,m(K,{get when(){return e.editable},get children(){var q=qn();return k(q,m(yg,{get value(){return e.value}}),null),k(q,m(K,{get when(){return e.itemsDeletable&&e.activeQuery!==void 0},get children(){return m(Vs,{get activeQuery(){return e.activeQuery},dataPath:h})}}),null),k(q,m(K,{get when(){return u()==="array"&&e.activeQuery!==void 0},get children(){return m(mg,{get activeQuery(){return e.activeQuery},dataPath:h})}}),null),k(q,m(K,{get when(){return xe(()=>!!e.onEdit)()&&!Xr(e.value).meta},get children(){var D=cg();return D.$$click=()=>{e.onEdit?.()},k(D,m(Y0,{})),B(()=>O(D,r().actionButton)),D}}),null),B(()=>O(q,r().actions)),q}}),null),B(q=>{var D=r().expanderButtonContainer,P=r().expanderButton,C=r().info;return D!==q.e&&O(y,q.e=D),P!==q.t&&O(v,q.t=P),C!==q.a&&O(x,q.a=C),q},{e:void 0,t:void 0,a:void 0}),y})(),m(K,{get when(){return i()},get children(){return[m(K,{get when(){return f().length===1},get children(){var y=qn();return k(y,m(wr,{get each(){return d()},by:v=>v.label,children:v=>m(Lt,{get defaultExpanded(){return e.defaultExpanded},get label(){return v().label},get value(){return v().value},get editable(){return e.editable},get dataPath(){return[...h,v().label]},get activeQuery(){return e.activeQuery},get itemsDeletable(){return u()==="array"||u()==="Iterable"||u()==="object"}})})),B(()=>O(y,r().subEntry)),y}}),m(K,{get when(){return f().length>1},get children(){var y=qn();return k(y,m(ki,{get each(){return f()},children:(v,p)=>(()=>{var b=gg(),w=b.firstChild,x=w.firstChild,S=x.firstChild,q=S.nextSibling,D=q.nextSibling,P=D.nextSibling;return P.nextSibling,x.$$click=()=>c(C=>C.includes(p)?C.filter(I=>I!==p):[...C,p]),k(x,m(Ns,{get expanded(){return s().includes(p)}}),S),k(x,p*100,q),k(x,p*100+100-1,P),k(w,m(K,{get when(){return s().includes(p)},get children(){var C=qn();return k(C,m(wr,{get each(){return v()},by:I=>I.label,children:I=>m(Lt,{get defaultExpanded(){return e.defaultExpanded},get label(){return I().label},get value(){return I().value},get editable(){return e.editable},get dataPath(){return[...h,I().label]},get activeQuery(){return e.activeQuery}})})),B(()=>O(C,r().subEntry)),C}}),null),B(C=>{var I=r().entry,j=r().expanderButton;return I!==C.e&&O(w,C.e=I),j!==C.t&&O(x,C.t=j),C},{e:void 0,t:void 0}),b})()})),B(()=>O(y,r().subEntry)),y}})]}})]}}),null),k(g,m(K,{get when(){return f().length===0},get children(){var y=fg(),v=y.firstChild,p=v.firstChild;return k(v,()=>e.label,p),k(y,m(K,{get when(){return xe(()=>!!(e.editable&&e.activeQuery!==void 0))()&&(u()==="string"||u()==="number"||u()==="boolean")},get fallback(){return(()=>{var b=Bs();return k(b,()=>Pn(e.value)),B(()=>O(b,r().value)),b})()},get children(){return[m(K,{get when(){return xe(()=>!!(e.editable&&e.activeQuery!==void 0))()&&(u()==="string"||u()==="number")},get children(){var b=dg();return b.addEventListener("change",w=>{let x=e.activeQuery.state.data,S=It(x,h,u()==="number"?w.target.valueAsNumber:w.target.value);o.setQueryData(e.activeQuery.queryKey,S)}),B(w=>{var x=u()==="number"?"number":"text",S=L(r().value,r().editableInput);return x!==w.e&&A(b,"type",w.e=x),S!==w.t&&O(b,w.t=S),w},{e:void 0,t:void 0}),B(()=>b.value=e.value),b}}),m(K,{get when(){return u()==="boolean"},get children(){var b=Bs();return k(b,m(vg,{get activeQuery(){return e.activeQuery},dataPath:h,get value(){return e.value}}),null),k(b,()=>Pn(e.value),null),B(()=>O(b,L(r().value,r().actions,r().editableInput))),b}})]}}),null),k(y,m(K,{get when(){return e.editable&&e.itemsDeletable&&e.activeQuery!==void 0},get children(){return m(Vs,{get activeQuery(){return e.activeQuery},dataPath:h})}}),null),B(b=>{var w=r().row,x=r().label;return w!==b.e&&O(y,b.e=w),x!==b.t&&O(v,b.t=x),b},{e:void 0,t:void 0}),y}}),null),B(()=>O(g,r().entry)),g})()}var ba=(e,t)=>{let{colors:n,font:r,size:o,border:i}=$,l=(a,s)=>e==="light"?a:s;return{entry:t`
      & * {
        font-size: ${r.size.xs};
        font-family:
          ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
      }
      position: relative;
      outline: none;
      word-break: break-word;
    `,subEntry:t`
      margin: 0 0 0 0.5em;
      padding-left: 0.75em;
      border-left: 2px solid ${l(n.gray[300],n.darkGray[400])};
      /* outline: 1px solid ${n.teal[400]}; */
    `,expander:t`
      & path {
        stroke: ${n.gray[400]};
      }
      & svg {
        width: ${o[3]};
        height: ${o[3]};
      }
      display: inline-flex;
      align-items: center;
      transition: all 0.1s ease;
      /* outline: 1px solid ${n.blue[400]}; */
    `,expanderButtonContainer:t`
      display: flex;
      align-items: center;
      line-height: ${o[4]};
      min-height: ${o[4]};
      gap: ${o[2]};
    `,expanderButton:t`
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      height: ${o[5]};
      background: transparent;
      border: none;
      padding: 0;
      display: inline-flex;
      align-items: center;
      gap: ${o[1]};
      position: relative;
      /* outline: 1px solid ${n.green[400]}; */

      &:focus-visible {
        border-radius: ${i.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }

      & svg {
        position: relative;
        left: 1px;
      }
    `,info:t`
      color: ${l(n.gray[500],n.gray[500])};
      font-size: ${r.size.xs};
      margin-left: ${o[1]};
      /* outline: 1px solid ${n.yellow[400]}; */
    `,label:t`
      color: ${l(n.gray[700],n.gray[300])};
      white-space: nowrap;
    `,value:t`
      color: ${l(n.purple[600],n.purple[400])};
      flex-grow: 1;
    `,actions:t`
      display: inline-flex;
      gap: ${o[2]};
      align-items: center;
    `,row:t`
      display: inline-flex;
      gap: ${o[2]};
      width: 100%;
      margin: ${o[.25]} 0px;
      line-height: ${o[4.5]};
      align-items: center;
    `,editableInput:t`
      border: none;
      padding: ${o[.5]} ${o[1]} ${o[.5]} ${o[1.5]};
      flex-grow: 1;
      border-radius: ${i.radius.xs};
      background-color: ${l(n.gray[200],n.darkGray[500])};

      &:hover {
        background-color: ${l(n.gray[300],n.darkGray[600])};
      }
    `,actionButton:t`
      background-color: transparent;
      color: ${l(n.gray[500],n.gray[500])};
      border: none;
      display: inline-flex;
      padding: 0px;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      width: ${o[3]};
      height: ${o[3]};
      position: relative;
      z-index: 1;

      &:hover svg {
        color: ${l(n.gray[600],n.gray[400])};
      }

      &:focus-visible {
        border-radius: ${i.radius.xs};
        outline: 2px solid ${n.blue[800]};
        outline-offset: 2px;
      }
    `}},vn=e=>ba("light",e),pn=e=>ba("dark",e);In(["click"]);var pg=R('<div><div aria-hidden=true></div><button type=button aria-label="Open Tanstack query devtools"class=tsqd-open-btn>'),Qn=R("<div>"),bg=R('<aside aria-label="Tanstack query devtools"><div></div><button aria-label="Close tanstack query devtools">'),wg=R("<select name=tsqd-queries-filter-sort>"),xg=R("<select name=tsqd-mutations-filter-sort>"),Sg=R("<span>Asc"),Cg=R("<span>Desc"),$g=R('<button aria-label="Open in picture-in-picture mode"title="Open in picture-in-picture mode">'),kg=R("<div>Settings"),Eg=R("<span>Position"),Ag=R("<span>Top"),Mg=R("<span>Bottom"),Tg=R("<span>Left"),Og=R("<span>Right"),Dg=R("<span>Theme"),Ig=R("<span>Light"),Pg=R("<span>Dark"),Fg=R("<span>System"),Lg=R("<span>Disabled Queries"),qg=R("<span>Show"),_g=R("<span>Hide"),Rg=R("<div><div class=tsqd-queries-container>"),zg=R("<div><div class=tsqd-mutations-container>"),Kg=R('<div><div><div><button aria-label="Close Tanstack query devtools"><span>TANSTACK</span><span> v</span></button></div></div><div><div><div><input aria-label="Filter queries by query key"type=text placeholder=Filter name=tsqd-query-filter-input></div><div></div><button class=tsqd-query-filter-sort-order-btn></button></div><div><button aria-label="Clear query cache"></button><button>'),Hs=R("<option>Sort by "),Bg=R("<div class=tsqd-query-disabled-indicator>disabled"),Ng=R("<div class=tsqd-query-static-indicator>static"),wa=R("<button><div></div><code class=tsqd-query-hash>"),Vg=R("<div role=tooltip id=tsqd-status-tooltip>"),Ug=R("<span>"),Hg=R("<button><span></span><span>"),Gg=R("<button><span></span> Error"),jg=R('<div><span></span>Trigger Error<select><option value=""disabled selected>'),Wg=R('<div class="tsqd-query-details-explorer-container tsqd-query-details-data-explorer">'),Qg=R("<form><textarea name=data></textarea><div><span></span><div><button type=button>Cancel</button><button>Save"),Yg=R('<div><div>Query Details</div><div><div class=tsqd-query-details-summary><pre><code></code></pre><span></span></div><div class=tsqd-query-details-observers-count><span>Observers:</span><span></span></div><div class=tsqd-query-details-last-updated><span>Last Updated:</span><span></span></div></div><div>Actions</div><div><button><span></span>Refetch</button><button><span></span>Invalidate</button><button><span></span>Reset</button><button><span></span>Remove</button><button><span></span> Loading</button></div><div>Data </div><div>Query Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer">'),Xg=R("<option>"),Zg=R('<div><div>Mutation Details</div><div><div class=tsqd-query-details-summary><pre><code></code></pre><span></span></div><div class=tsqd-query-details-last-updated><span>Submitted At:</span><span></span></div></div><div>Variables Details</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer"></div><div>Context Details</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer"></div><div>Data Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer"></div><div>Mutations Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer">'),[Ve,Lr]=z(null),[qt,xa]=z(null),[ot,_o]=z(0),[_n,Jg]=z(!1),$h=e=>{let t=Te(),n=N().shadowDOMTarget?Q.bind({target:N().shadowDOMTarget}):Q,r=T(()=>t()==="dark"?Je(n):Ze(n)),o=T(()=>N().onlineManager);ut(()=>{let u=o().subscribe(f=>{Jg(!f)});U(()=>{u()})});let i=po(),l=T(()=>N().buttonPosition||Yc),a=T(()=>e.localStore.open==="true"?!0:e.localStore.open==="false"?!1:N().initialIsOpen||Xc),s=T(()=>e.localStore.position||N().position||io),c;V(()=>{let u=c.parentElement,f=e.localStore.height||Gs,h=e.localStore.width||js,g=s();u.style.setProperty("--tsqd-panel-height",`${g==="top"?"-":""}${f}px`),u.style.setProperty("--tsqd-panel-width",`${g==="left"?"-":""}${h}px`)}),ut(()=>{let u=()=>{let f=c.parentElement,h=getComputedStyle(f).fontSize;f.style.setProperty("--tsqd-font-size",h)};u(),self.addEventListener("focus",u),U(()=>{self.removeEventListener("focus",u)})});let d=T(()=>e.localStore.pip_open??"false");return[m(K,{get when(){return xe(()=>!!i().pipWindow)()&&d()=="true"},get children(){return m(Yr,{get mount(){return i().pipWindow?.document.body},get children(){return m(eh,{get children(){return m(Sa,e)}})}})}}),(()=>{var u=Qn(),f=c;return typeof f=="function"?Ut(f,u):c=u,k(u,m(ls,{name:"tsqd-panel-transition",get children(){return m(K,{get when(){return xe(()=>!!(a()&&!i().pipWindow))()&&d()=="false"},get children(){return m(th,{get localStore(){return e.localStore},get setLocalStore(){return e.setLocalStore}})}})}}),null),k(u,m(ls,{name:"tsqd-button-transition",get children(){return m(K,{get when(){return!a()},get children(){var h=pg(),g=h.firstChild,y=g.nextSibling;return k(g,m(Ks,{})),y.$$click=()=>e.setLocalStore("open","true"),k(y,m(Ks,{})),B(()=>O(h,L(r().devtoolsBtn,r()[`devtoolsBtn-position-${l()}`],"tsqd-open-btn-container"))),h}})}}),null),B(()=>O(u,L(n`
            & .tsqd-panel-transition-exit-active,
            & .tsqd-panel-transition-enter-active {
              transition:
                opacity 0.3s,
                transform 0.3s;
            }

            & .tsqd-panel-transition-exit-to,
            & .tsqd-panel-transition-enter {
              ${s()==="top"||s()==="bottom"?"transform: translateY(var(--tsqd-panel-height));":"transform: translateX(var(--tsqd-panel-width));"}
            }

            & .tsqd-button-transition-exit-active,
            & .tsqd-button-transition-enter-active {
              transition:
                opacity 0.3s,
                transform 0.3s;
              opacity: 1;
            }

            & .tsqd-button-transition-exit-to,
            & .tsqd-button-transition-enter {
              transform: ${l()==="relative"?"none;":l()==="top-left"?"translateX(-72px);":l()==="top-right"?"translateX(72px);":"translateY(72px);"};
              opacity: 0;
            }
          `,"tsqd-transitions-container"))),u})()]},eh=e=>{let t=po(),n=Te(),r=N().shadowDOMTarget?Q.bind({target:N().shadowDOMTarget}):Q,o=T(()=>n()==="dark"?Je(r):Ze(r)),i=()=>{let{colors:l}=$,a=(s,c)=>n()==="dark"?c:s;return ot()<Qt?r`
        flex-direction: column;
        background-color: ${a(l.gray[300],l.gray[600])};
      `:r`
      flex-direction: row;
      background-color: ${a(l.gray[200],l.darkGray[900])};
    `};return V(()=>{let l=t().pipWindow,a=()=>{l&&_o(l.innerWidth)};l&&(l.addEventListener("resize",a),a()),U(()=>{l&&l.removeEventListener("resize",a)})}),(()=>{var l=Qn();return l.style.setProperty("--tsqd-font-size","16px"),l.style.setProperty("max-height","100vh"),l.style.setProperty("height","100vh"),l.style.setProperty("width","100vw"),k(l,()=>e.children),B(()=>O(l,L(o().panel,i(),{[r`
            min-width: min-content;
          `]:ot()<vo},"tsqd-main-panel"))),l})()},kh=e=>{let t=Te(),n=N().shadowDOMTarget?Q.bind({target:N().shadowDOMTarget}):Q,r=T(()=>t()==="dark"?Je(n):Ze(n)),o;ut(()=>{Js(o,({width:l},a)=>{a===o&&_o(l)})});let i=()=>{let{colors:l}=$,a=(s,c)=>t()==="dark"?c:s;return ot()<Qt?n`
        flex-direction: column;
        background-color: ${a(l.gray[300],l.gray[600])};
      `:n`
      flex-direction: row;
      background-color: ${a(l.gray[200],l.darkGray[900])};
    `};return(()=>{var l=Qn(),a=o;return typeof a=="function"?Ut(a,l):o=l,l.style.setProperty("--tsqd-font-size","16px"),k(l,()=>e.children),B(()=>O(l,L(r().parentPanel,i(),{[n`
            min-width: min-content;
          `]:ot()<vo},"tsqd-main-panel"))),l})()},th=e=>{let t=Te(),n=N().shadowDOMTarget?Q.bind({target:N().shadowDOMTarget}):Q,r=T(()=>t()==="dark"?Je(n):Ze(n)),[o,i]=z(!1),l=T(()=>e.localStore.position||N().position||io),a=d=>{let u=d.currentTarget.parentElement;if(!u)return;i(!0);let{height:f,width:h}=u.getBoundingClientRect(),g=d.clientX,y=d.clientY,v=0,p=Zr(3.5),b=Zr(12),w=S=>{if(S.preventDefault(),l()==="left"||l()==="right"){let q=l()==="right"?g-S.clientX:S.clientX-g;v=Math.round(h+q),v<b&&(v=b),e.setLocalStore("width",String(Math.round(v)));let D=u.getBoundingClientRect().width;Number(e.localStore.width)<D&&e.setLocalStore("width",String(D))}else{let q=l()==="bottom"?y-S.clientY:S.clientY-y;v=Math.round(f+q),v<p&&(v=p,Lr(null)),e.setLocalStore("height",String(Math.round(v)))}},x=()=>{o()&&i(!1),document.removeEventListener("mousemove",w,!1),document.removeEventListener("mouseUp",x,!1)};document.addEventListener("mousemove",w,!1),document.addEventListener("mouseup",x,!1)},s;ut(()=>{Js(s,({width:d},u)=>{u===s&&_o(d)})}),V(()=>{let d=s.parentElement?.parentElement?.parentElement;if(!d)return;let u=e.localStore.position||io,f=ji("padding",u),h=e.localStore.position==="left"||e.localStore.position==="right",g=(({padding:y,paddingTop:v,paddingBottom:p,paddingLeft:b,paddingRight:w})=>({padding:y,paddingTop:v,paddingBottom:p,paddingLeft:b,paddingRight:w}))(d.style);d.style[f]=`${h?e.localStore.width:e.localStore.height}px`,U(()=>{Object.entries(g).forEach(([y,v])=>{d.style[y]=v})})});let c=()=>{let{colors:d}=$,u=(f,h)=>t()==="dark"?h:f;return ot()<Qt?n`
        flex-direction: column;
        background-color: ${u(d.gray[300],d.gray[600])};
      `:n`
      flex-direction: row;
      background-color: ${u(d.gray[200],d.darkGray[900])};
    `};return(()=>{var d=bg(),u=d.firstChild,f=u.nextSibling,h=s;return typeof h=="function"?Ut(h,d):s=d,u.$$mousedown=a,f.$$click=()=>e.setLocalStore("open","false"),k(f,m(fn,{})),k(d,m(Sa,e),null),B(g=>{var y=L(r().panel,r()[`panel-position-${l()}`],c(),{[n`
            min-width: min-content;
          `]:ot()<vo&&(l()==="right"||l()==="left")},"tsqd-main-panel"),v=l()==="bottom"||l()==="top"?`${e.localStore.height||Gs}px`:"auto",p=l()==="right"||l()==="left"?`${e.localStore.width||js}px`:"auto",b=L(r().dragHandle,r()[`dragHandle-position-${l()}`],"tsqd-drag-handle"),w=L(r().closeBtn,r()[`closeBtn-position-${l()}`],"tsqd-minimize-btn");return y!==g.e&&O(d,g.e=y),v!==g.t&&((g.t=v)!=null?d.style.setProperty("height",v):d.style.removeProperty("height")),p!==g.a&&((g.a=p)!=null?d.style.setProperty("width",p):d.style.removeProperty("width")),b!==g.o&&O(u,g.o=b),w!==g.i&&O(f,g.i=w),g},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),d})()},Sa=e=>{ah(),ch();let t,n=Te(),r=N().shadowDOMTarget?Q.bind({target:N().shadowDOMTarget}):Q,o=T(()=>n()==="dark"?Je(r):Ze(r)),i=po(),[l,a]=z("queries"),s=T(()=>e.localStore.sort||Jc),c=T(()=>Number(e.localStore.sortOrder)||es),d=T(()=>e.localStore.mutationSort||eu),u=T(()=>Number(e.localStore.mutationSortOrder)||es),f=T(()=>yr[s()]),h=T(()=>mr[d()]),g=T(()=>N().onlineManager),y=T(()=>N().client.getQueryCache()),v=T(()=>N().client.getMutationCache()),p=Ae(D=>D().getAll().length,!1),b=T(ct(()=>[p(),e.localStore.filter,s(),c(),e.localStore.hideDisabledQueries],()=>{let D=y().getAll(),P=e.localStore.filter?D.filter(I=>ts(I.queryHash,e.localStore.filter||"").passed):[...D];return e.localStore.hideDisabledQueries==="true"&&(P=P.filter(I=>!I.isDisabled())),f()?P.sort((I,j)=>f()(I,j)*c()):P})),w=rt(D=>D().getAll().length,!1),x=T(ct(()=>[w(),e.localStore.mutationFilter,d(),u()],()=>{let D=v().getAll(),P=e.localStore.mutationFilter?D.filter(I=>{let j=`${I.options.mutationKey?JSON.stringify(I.options.mutationKey)+" - ":""}${new Date(I.state.submittedAt).toLocaleString()}`;return ts(j,e.localStore.mutationFilter||"").passed}):[...D];return h()?P.sort((I,j)=>h()(I,j)*u()):P})),S=D=>{e.setLocalStore("position",D)},q=D=>{let C=getComputedStyle(t).getPropertyValue("--tsqd-font-size");D.style.setProperty("--tsqd-font-size",C)};return[(()=>{var D=Kg(),P=D.firstChild,C=P.firstChild,I=C.firstChild,j=I.firstChild,H=j.nextSibling,se=H.firstChild,oe=P.nextSibling,ge=oe.firstChild,ue=ge.firstChild,le=ue.firstChild,de=ue.nextSibling,he=de.nextSibling,Ce=ge.nextSibling,Re=Ce.firstChild,we=Re.nextSibling,Le=t;return typeof Le=="function"?Ut(Le,D):t=D,I.$$click=()=>{if(!i().pipWindow&&!e.showPanelViewOnly){e.setLocalStore("open","false");return}e.onClose&&e.onClose()},k(H,()=>N().queryFlavor,se),k(H,()=>N().version,null),k(C,m(Qe.Root,{get class(){return L(o().viewToggle)},get value(){return l()},onChange:M=>{a(M),Lr(null),xa(null)},get children(){return[m(Qe.Item,{value:"queries",class:"tsqd-radio-toggle",get children(){return[m(Qe.ItemInput,{}),m(Qe.ItemControl,{get children(){return m(Qe.ItemIndicator,{})}}),m(Qe.ItemLabel,{title:"Toggle Queries View",children:"Queries"})]}}),m(Qe.Item,{value:"mutations",class:"tsqd-radio-toggle",get children(){return[m(Qe.ItemInput,{}),m(Qe.ItemControl,{get children(){return m(Qe.ItemIndicator,{})}}),m(Qe.ItemLabel,{title:"Toggle Mutations View",children:"Mutations"})]}})]}}),null),k(P,m(K,{get when(){return l()==="queries"},get children(){return m(oh,{})}}),null),k(P,m(K,{get when(){return l()==="mutations"},get children(){return m(ih,{})}}),null),k(ue,m(z0,{}),le),le.$$input=M=>{l()==="queries"?e.setLocalStore("filter",M.currentTarget.value):e.setLocalStore("mutationFilter",M.currentTarget.value)},k(de,m(K,{get when(){return l()==="queries"},get children(){var M=wg();return M.addEventListener("change",be=>{e.setLocalStore("sort",be.currentTarget.value)}),k(M,()=>Object.keys(yr).map(be=>(()=>{var te=Hs();return te.firstChild,te.value=be,k(te,be,null),te})())),B(()=>M.value=s()),M}}),null),k(de,m(K,{get when(){return l()==="mutations"},get children(){var M=xg();return M.addEventListener("change",be=>{e.setLocalStore("mutationSort",be.currentTarget.value)}),k(M,()=>Object.keys(mr).map(be=>(()=>{var te=Hs();return te.firstChild,te.value=be,k(te,be,null),te})())),B(()=>M.value=d()),M}}),null),k(de,m(fn,{}),null),he.$$click=()=>{l()==="queries"?e.setLocalStore("sortOrder",String(c()*-1)):e.setLocalStore("mutationSortOrder",String(u()*-1))},k(he,m(K,{get when(){return(l()==="queries"?c():u())===1},get children(){return[Sg(),m(Rs,{})]}}),null),k(he,m(K,{get when(){return(l()==="queries"?c():u())===-1},get children(){return[Cg(),m(zs,{})]}}),null),Re.$$click=()=>{l()==="queries"?(dt({type:"CLEAR_QUERY_CACHE"}),y().clear()):(dt({type:"CLEAR_MUTATION_CACHE"}),v().clear())},k(Re,m(pa,{})),we.$$click=()=>{g().setOnline(!g().isOnline())},k(we,(()=>{var M=xe(()=>!!_n());return()=>M()?m(G0,{}):m(H0,{})})()),k(Ce,m(K,{get when(){return xe(()=>!i().pipWindow)()&&!i().disabled},get children(){var M=$g();return M.$$click=()=>{i().requestPipWindow(Number(self.innerWidth),Number(e.localStore.height??500))},k(M,m(W0,{})),B(()=>O(M,L(o().actionsBtn,"tsqd-actions-btn","tsqd-action-open-pip"))),M}}),null),k(Ce,m(ce.Root,{gutter:4,get children(){return[m(ce.Trigger,{get class(){return L(o().actionsBtn,"tsqd-actions-btn","tsqd-action-settings")},get children(){return m(j0,{})}}),m(ce.Portal,{ref:M=>q(M),get mount(){return xe(()=>!!i().pipWindow)()?i().pipWindow.document.body:document.body},get children(){return m(ce.Content,{get class(){return L(o().settingsMenu,"tsqd-settings-menu")},get children(){return[(()=>{var M=kg();return B(()=>O(M,L(o().settingsMenuHeader,"tsqd-settings-menu-header"))),M})(),m(K,{get when(){return!e.showPanelViewOnly},get children(){return m(ce.Sub,{overlap:!0,gutter:8,shift:-4,get children(){return[m(ce.SubTrigger,{get class(){return L(o().settingsSubTrigger,"tsqd-settings-menu-sub-trigger","tsqd-settings-menu-sub-trigger-position")},get children(){return[Eg(),m(fn,{})]}}),m(ce.Portal,{ref:M=>q(M),get mount(){return xe(()=>!!i().pipWindow)()?i().pipWindow.document.body:document.body},get children(){return m(ce.SubContent,{get class(){return L(o().settingsMenu,"tsqd-settings-submenu")},get children(){return[m(ce.Item,{onSelect:()=>{S("top")},as:"button",get class(){return L(o().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-top")},get children(){return[Ag(),m(Rs,{})]}}),m(ce.Item,{onSelect:()=>{S("bottom")},as:"button",get class(){return L(o().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-bottom")},get children(){return[Mg(),m(zs,{})]}}),m(ce.Item,{onSelect:()=>{S("left")},as:"button",get class(){return L(o().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-left")},get children(){return[Tg(),m(K0,{})]}}),m(ce.Item,{onSelect:()=>{S("right")},as:"button",get class(){return L(o().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-right")},get children(){return[Og(),m(B0,{})]}})]}})}})]}})}}),m(ce.Sub,{overlap:!0,gutter:8,shift:-4,get children(){return[m(ce.SubTrigger,{get class(){return L(o().settingsSubTrigger,"tsqd-settings-menu-sub-trigger","tsqd-settings-menu-sub-trigger-position")},get children(){return[Dg(),m(fn,{})]}}),m(ce.Portal,{ref:M=>q(M),get mount(){return xe(()=>!!i().pipWindow)()?i().pipWindow.document.body:document.body},get children(){return m(ce.SubContent,{get class(){return L(o().settingsMenu,"tsqd-settings-submenu")},get children(){return[m(ce.Item,{onSelect:()=>{e.setLocalStore("theme_preference","light")},as:"button",get class(){return L(o().settingsSubButton,e.localStore.theme_preference==="light"&&o().themeSelectedButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-top")},get children(){return[Ig(),m(N0,{})]}}),m(ce.Item,{onSelect:()=>{e.setLocalStore("theme_preference","dark")},as:"button",get class(){return L(o().settingsSubButton,e.localStore.theme_preference==="dark"&&o().themeSelectedButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-bottom")},get children(){return[Pg(),m(V0,{})]}}),m(ce.Item,{onSelect:()=>{e.setLocalStore("theme_preference","system")},as:"button",get class(){return L(o().settingsSubButton,e.localStore.theme_preference==="system"&&o().themeSelectedButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-left")},get children(){return[Fg(),m(U0,{})]}})]}})}})]}}),m(ce.Sub,{overlap:!0,gutter:8,shift:-4,get children(){return[m(ce.SubTrigger,{get class(){return L(o().settingsSubTrigger,"tsqd-settings-menu-sub-trigger","tsqd-settings-menu-sub-trigger-disabled-queries")},get children(){return[Lg(),m(fn,{})]}}),m(ce.Portal,{ref:M=>q(M),get mount(){return xe(()=>!!i().pipWindow)()?i().pipWindow.document.body:document.body},get children(){return m(ce.SubContent,{get class(){return L(o().settingsMenu,"tsqd-settings-submenu")},get children(){return[m(ce.Item,{onSelect:()=>{e.setLocalStore("hideDisabledQueries","false")},as:"button",get class(){return L(o().settingsSubButton,e.localStore.hideDisabledQueries!=="true"&&o().themeSelectedButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-show")},get children(){return[qg(),m(K,{get when(){return e.localStore.hideDisabledQueries!=="true"},get children(){return m(mo,{})}})]}}),m(ce.Item,{onSelect:()=>{e.setLocalStore("hideDisabledQueries","true")},as:"button",get class(){return L(o().settingsSubButton,e.localStore.hideDisabledQueries==="true"&&o().themeSelectedButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-hide")},get children(){return[_g(),m(K,{get when(){return e.localStore.hideDisabledQueries==="true"},get children(){return m(mo,{})}})]}})]}})}})]}})]}})}})]}}),null),k(D,m(K,{get when(){return l()==="queries"},get children(){var M=Rg(),be=M.firstChild;return k(be,m(wr,{by:te=>te.queryHash,get each(){return b()},children:te=>m(nh,{get query(){return te()}})})),B(()=>O(M,L(o().overflowQueryContainer,"tsqd-queries-overflow-container"))),M}}),null),k(D,m(K,{get when(){return l()==="mutations"},get children(){var M=zg(),be=M.firstChild;return k(be,m(wr,{by:te=>te.mutationId,get each(){return x()},children:te=>m(rh,{get mutation(){return te()}})})),B(()=>O(M,L(o().overflowQueryContainer,"tsqd-mutations-overflow-container"))),M}}),null),B(M=>{var be=L(o().queriesContainer,ot()<Qt&&(Ve()||qt())&&r`
              height: 50%;
              max-height: 50%;
            `,ot()<Qt&&!(Ve()||qt())&&r`
              height: 100%;
              max-height: 100%;
            `,"tsqd-queries-container"),te=L(o().row,"tsqd-header"),Tt=o().logoAndToggleContainer,G=L(o().logo,"tsqd-text-logo-container"),et=L(o().tanstackLogo,"tsqd-text-logo-tanstack"),Oe=L(o().queryFlavorLogo,"tsqd-text-logo-query-flavor"),Jt=L(o().row,"tsqd-filters-actions-container"),Ge=L(o().filtersContainer,"tsqd-filters-container"),Ot=L(o().filterInput,"tsqd-query-filter-textfield-container"),Bt=L("tsqd-query-filter-textfield"),mt=L(o().filterSelect,"tsqd-query-filter-sort-container"),lt=`Sort order ${(l()==="queries"?c():u())===-1?"descending":"ascending"}`,vt=(l()==="queries"?c():u())===-1,F=L(o().actionsContainer,"tsqd-actions-container"),ae=L(o().actionsBtn,"tsqd-actions-btn","tsqd-action-clear-cache"),qe=`Clear ${l()} cache`,fe=L(o().actionsBtn,_n()&&o().actionsBtnOffline,"tsqd-actions-btn","tsqd-action-mock-offline-behavior"),ie=`${_n()?"Unset offline mocking behavior":"Mock offline behavior"}`,ye=_n(),ke=`${_n()?"Unset offline mocking behavior":"Mock offline behavior"}`;return be!==M.e&&O(D,M.e=be),te!==M.t&&O(P,M.t=te),Tt!==M.a&&O(C,M.a=Tt),G!==M.o&&O(I,M.o=G),et!==M.i&&O(j,M.i=et),Oe!==M.n&&O(H,M.n=Oe),Jt!==M.s&&O(oe,M.s=Jt),Ge!==M.h&&O(ge,M.h=Ge),Ot!==M.r&&O(ue,M.r=Ot),Bt!==M.d&&O(le,M.d=Bt),mt!==M.l&&O(de,M.l=mt),lt!==M.u&&A(he,"aria-label",M.u=lt),vt!==M.c&&A(he,"aria-pressed",M.c=vt),F!==M.w&&O(Ce,M.w=F),ae!==M.m&&O(Re,M.m=ae),qe!==M.f&&A(Re,"title",M.f=qe),fe!==M.y&&O(we,M.y=fe),ie!==M.g&&A(we,"aria-label",M.g=ie),ye!==M.p&&A(we,"aria-pressed",M.p=ye),ke!==M.b&&A(we,"title",M.b=ke),M},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0,g:void 0,p:void 0,b:void 0}),B(()=>le.value=l()==="queries"?e.localStore.filter||"":e.localStore.mutationFilter||""),D})(),m(K,{get when(){return xe(()=>l()==="queries")()&&Ve()},get children(){return m(sh,{})}}),m(K,{get when(){return xe(()=>l()==="mutations")()&&qt()},get children(){return m(lh,{})}})]},nh=e=>{let t=Te(),n=N().shadowDOMTarget?Q.bind({target:N().shadowDOMTarget}):Q,r=T(()=>t()==="dark"?Je(n):Ze(n)),{colors:o,alpha:i}=$,l=(g,y)=>t()==="dark"?y:g,a=Ae(g=>g().find({queryKey:e.query.queryKey})?.state,!0,g=>g.query.queryHash===e.query.queryHash),s=Ae(g=>g().find({queryKey:e.query.queryKey})?.isDisabled()??!1,!0,g=>g.query.queryHash===e.query.queryHash),c=Ae(g=>g().find({queryKey:e.query.queryKey})?.isStatic()??!1,!0,g=>g.query.queryHash===e.query.queryHash),d=Ae(g=>g().find({queryKey:e.query.queryKey})?.isStale()??!1,!0,g=>g.query.queryHash===e.query.queryHash),u=Ae(g=>g().find({queryKey:e.query.queryKey})?.getObserversCount()??0,!0,g=>g.query.queryHash===e.query.queryHash),f=T(()=>Wi({queryState:a(),observerCount:u(),isStale:d()})),h=()=>f()==="gray"?n`
        background-color: ${l(o[f()][200],o[f()][700])};
        color: ${l(o[f()][700],o[f()][300])};
      `:n`
      background-color: ${l(o[f()][200]+i[80],o[f()][900])};
      color: ${l(o[f()][800],o[f()][300])};
    `;return m(K,{get when(){return a()},get children(){var g=wa(),y=g.firstChild,v=y.nextSibling;return g.$$click=()=>Lr(e.query.queryHash===Ve()?null:e.query.queryHash),k(y,u),k(v,()=>e.query.queryHash),k(g,m(K,{get when(){return s()},get children(){return Bg()}}),null),k(g,m(K,{get when(){return c()},get children(){return Ng()}}),null),B(p=>{var b=L(r().queryRow,Ve()===e.query.queryHash&&r().selectedQueryRow,"tsqd-query-row"),w=`Query key ${e.query.queryHash}`,x=L(h(),"tsqd-query-observer-count");return b!==p.e&&O(g,p.e=b),w!==p.t&&A(g,"aria-label",p.t=w),x!==p.a&&O(y,p.a=x),p},{e:void 0,t:void 0,a:void 0}),g}})},rh=e=>{let t=Te(),n=N().shadowDOMTarget?Q.bind({target:N().shadowDOMTarget}):Q,r=T(()=>t()==="dark"?Je(n):Ze(n)),{colors:o,alpha:i}=$,l=(f,h)=>t()==="dark"?h:f,a=rt(f=>f().getAll().find(y=>y.mutationId===e.mutation.mutationId)?.state),s=rt(f=>{let g=f().getAll().find(y=>y.mutationId===e.mutation.mutationId);return g?g.state.isPaused:!1}),c=rt(f=>{let g=f().getAll().find(y=>y.mutationId===e.mutation.mutationId);return g?g.state.status:"idle"}),d=T(()=>jt({isPaused:s(),status:c()})),u=()=>d()==="gray"?n`
        background-color: ${l(o[d()][200],o[d()][700])};
        color: ${l(o[d()][700],o[d()][300])};
      `:n`
      background-color: ${l(o[d()][200]+i[80],o[d()][900])};
      color: ${l(o[d()][800],o[d()][300])};
    `;return m(K,{get when(){return a()},get children(){var f=wa(),h=f.firstChild,g=h.nextSibling;return f.$$click=()=>{xa(e.mutation.mutationId===qt()?null:e.mutation.mutationId)},k(h,m(K,{get when(){return d()==="purple"},get children(){return m(rg,{})}}),null),k(h,m(K,{get when(){return d()==="green"},get children(){return m(mo,{})}}),null),k(h,m(K,{get when(){return d()==="red"},get children(){return m(ng,{})}}),null),k(h,m(K,{get when(){return d()==="yellow"},get children(){return m(tg,{})}}),null),k(g,m(K,{get when(){return e.mutation.options.mutationKey},get children(){return[xe(()=>JSON.stringify(e.mutation.options.mutationKey))," -"," "]}}),null),k(g,()=>new Date(e.mutation.state.submittedAt).toLocaleString(),null),B(y=>{var v=L(r().queryRow,qt()===e.mutation.mutationId&&r().selectedQueryRow,"tsqd-query-row"),p=`Mutation submitted at ${new Date(e.mutation.state.submittedAt).toLocaleString()}`,b=L(u(),"tsqd-query-observer-count");return v!==y.e&&O(f,y.e=v),p!==y.t&&A(f,"aria-label",y.t=p),b!==y.a&&O(h,y.a=b),y},{e:void 0,t:void 0,a:void 0}),f}})},oh=()=>{let e=Ae(s=>s().getAll().filter(c=>Gt(c)==="stale").length),t=Ae(s=>s().getAll().filter(c=>Gt(c)==="fresh").length),n=Ae(s=>s().getAll().filter(c=>Gt(c)==="fetching").length),r=Ae(s=>s().getAll().filter(c=>Gt(c)==="paused").length),o=Ae(s=>s().getAll().filter(c=>Gt(c)==="inactive").length),i=Te(),l=N().shadowDOMTarget?Q.bind({target:N().shadowDOMTarget}):Q,a=T(()=>i()==="dark"?Je(l):Ze(l));return(()=>{var s=Qn();return k(s,m(kt,{label:"Fresh",color:"green",get count(){return t()}}),null),k(s,m(kt,{label:"Fetching",color:"blue",get count(){return n()}}),null),k(s,m(kt,{label:"Paused",color:"purple",get count(){return r()}}),null),k(s,m(kt,{label:"Stale",color:"yellow",get count(){return e()}}),null),k(s,m(kt,{label:"Inactive",color:"gray",get count(){return o()}}),null),B(()=>O(s,L(a().queryStatusContainer,"tsqd-query-status-container"))),s})()},ih=()=>{let e=rt(a=>a().getAll().filter(s=>jt({isPaused:s.state.isPaused,status:s.state.status})==="green").length),t=rt(a=>a().getAll().filter(s=>jt({isPaused:s.state.isPaused,status:s.state.status})==="yellow").length),n=rt(a=>a().getAll().filter(s=>jt({isPaused:s.state.isPaused,status:s.state.status})==="purple").length),r=rt(a=>a().getAll().filter(s=>jt({isPaused:s.state.isPaused,status:s.state.status})==="red").length),o=Te(),i=N().shadowDOMTarget?Q.bind({target:N().shadowDOMTarget}):Q,l=T(()=>o()==="dark"?Je(i):Ze(i));return(()=>{var a=Qn();return k(a,m(kt,{label:"Paused",color:"purple",get count(){return n()}}),null),k(a,m(kt,{label:"Pending",color:"yellow",get count(){return t()}}),null),k(a,m(kt,{label:"Success",color:"green",get count(){return e()}}),null),k(a,m(kt,{label:"Error",color:"red",get count(){return r()}}),null),B(()=>O(a,L(l().queryStatusContainer,"tsqd-query-status-container"))),a})()},kt=e=>{let t=Te(),n=N().shadowDOMTarget?Q.bind({target:N().shadowDOMTarget}):Q,r=T(()=>t()==="dark"?Je(n):Ze(n)),{colors:o,alpha:i}=$,l=(h,g)=>t()==="dark"?g:h,a,[s,c]=z(!1),[d,u]=z(!1),f=T(()=>!(Ve()&&ot()<Qc&&ot()>Qt||ot()<Qt));return(()=>{var h=Hg(),g=h.firstChild,y=g.nextSibling,v=a;return typeof v=="function"?Ut(v,h):a=h,h.addEventListener("mouseleave",()=>{c(!1),u(!1)}),h.addEventListener("mouseenter",()=>c(!0)),h.addEventListener("blur",()=>u(!1)),h.addEventListener("focus",()=>u(!0)),Qr(h,W({get disabled(){return f()},get class(){return L(r().queryStatusTag,!f()&&n`
            cursor: pointer;
            &:hover {
              background: ${l(o.gray[200],o.darkGray[400])}${i[80]};
            }
          `,"tsqd-query-status-tag",`tsqd-query-status-tag-${e.label.toLowerCase()}`)}},()=>s()||d()?{"aria-describedby":"tsqd-status-tooltip"}:{}),!1,!0),k(h,m(K,{get when(){return xe(()=>!f())()&&(s()||d())},get children(){var p=Vg();return k(p,()=>e.label),B(()=>O(p,L(r().statusTooltip,"tsqd-query-status-tooltip"))),p}}),g),k(h,m(K,{get when(){return f()},get children(){var p=Ug();return k(p,()=>e.label),B(()=>O(p,L(r().queryStatusTagLabel,"tsqd-query-status-tag-label"))),p}}),y),k(y,()=>e.count),B(p=>{var b=L(n`
            width: ${$.size[1.5]};
            height: ${$.size[1.5]};
            border-radius: ${$.border.radius.full};
            background-color: ${$.colors[e.color][500]};
          `,"tsqd-query-status-tag-dot"),w=L(r().queryStatusCount,e.count>0&&e.color!=="gray"&&n`
              background-color: ${l(o[e.color][100],o[e.color][900])};
              color: ${l(o[e.color][700],o[e.color][300])};
            `,"tsqd-query-status-tag-count");return b!==p.e&&O(g,p.e=b),w!==p.t&&O(y,p.t=w),p},{e:void 0,t:void 0}),h})()},sh=()=>{let e=Te(),t=N().shadowDOMTarget?Q.bind({target:N().shadowDOMTarget}):Q,n=T(()=>e()==="dark"?Je(t):Ze(t)),{colors:r}=$,o=(C,I)=>e()==="dark"?I:C,i=N().client,[l,a]=z(!1),[s,c]=z("view"),[d,u]=z(!1),f=T(()=>N().errorTypes||[]),h=Ae(C=>C().getAll().find(I=>I.queryHash===Ve()),!1),g=Ae(C=>C().getAll().find(I=>I.queryHash===Ve()),!1),y=Ae(C=>C().getAll().find(I=>I.queryHash===Ve())?.state,!1),v=Ae(C=>C().getAll().find(I=>I.queryHash===Ve())?.state.data,!1),p=Ae(C=>{let I=C().getAll().find(j=>j.queryHash===Ve());return I?Gt(I):"inactive"}),b=Ae(C=>{let I=C().getAll().find(j=>j.queryHash===Ve());return I?I.state.status:"pending"}),w=Ae(C=>C().getAll().find(I=>I.queryHash===Ve())?.getObserversCount()??0),x=T(()=>Qi(p())),S=()=>{dt({type:"REFETCH",queryHash:h()?.queryHash}),h()?.fetch()?.catch(()=>{})},q=C=>{let I=h();if(!I)return;dt({type:"TRIGGER_ERROR",queryHash:I.queryHash,metadata:{error:C?.name}});let j=C?.initializer(I)??new Error("Unknown error from devtools"),H=I.options;I.setState({status:"error",error:j,fetchMeta:{...I.state.fetchMeta,__previousQueryOptions:H}})},D=()=>{let C=h();if(!C)return;dt({type:"RESTORE_LOADING",queryHash:C.queryHash});let I=C.state,j=C.state.fetchMeta?C.state.fetchMeta.__previousQueryOptions:null;C.cancel({silent:!0}),C.setState({...I,fetchStatus:"idle",fetchMeta:null}),j&&C.fetch(j)};V(()=>{p()!=="fetching"&&a(!1)});let P=()=>x()==="gray"?t`
        background-color: ${o(r[x()][200],r[x()][700])};
        color: ${o(r[x()][700],r[x()][300])};
        border-color: ${o(r[x()][400],r[x()][600])};
      `:t`
      background-color: ${o(r[x()][100],r[x()][900])};
      color: ${o(r[x()][700],r[x()][300])};
      border-color: ${o(r[x()][400],r[x()][600])};
    `;return m(K,{get when(){return xe(()=>!!h())()&&y()},get children(){var C=Yg(),I=C.firstChild,j=I.nextSibling,H=j.firstChild,se=H.firstChild,oe=se.firstChild,ge=se.nextSibling,ue=H.nextSibling,le=ue.firstChild,de=le.nextSibling,he=ue.nextSibling,Ce=he.firstChild,Re=Ce.nextSibling,we=j.nextSibling,Le=we.nextSibling,M=Le.firstChild,be=M.firstChild,te=M.nextSibling,Tt=te.firstChild,G=te.nextSibling,et=G.firstChild,Oe=G.nextSibling,Jt=Oe.firstChild,Ge=Oe.nextSibling,Ot=Ge.firstChild,Bt=Ot.nextSibling,mt=Le.nextSibling;mt.firstChild;var lt=mt.nextSibling,vt=lt.nextSibling;return k(oe,()=>Pn(h().queryKey,!0)),k(ge,p),k(de,w),k(Re,()=>new Date(y().dataUpdatedAt).toLocaleTimeString()),M.$$click=S,te.$$click=()=>{dt({type:"INVALIDATE",queryHash:h()?.queryHash}),i.invalidateQueries(h())},G.$$click=()=>{dt({type:"RESET",queryHash:h()?.queryHash}),i.resetQueries(h())},Oe.$$click=()=>{dt({type:"REMOVE",queryHash:h()?.queryHash}),i.removeQueries(h()),Lr(null)},Ge.$$click=()=>{if(h()?.state.data===void 0)a(!0),D();else{let F=h();if(!F)return;dt({type:"TRIGGER_LOADING",queryHash:F.queryHash});let ae=F.options;F.fetch({...ae,queryFn:()=>new Promise(()=>{}),gcTime:-1}),F.setState({data:void 0,status:"pending",fetchMeta:{...F.state.fetchMeta,__previousQueryOptions:ae}})}},k(Ge,()=>b()==="pending"?"Restore":"Trigger",Bt),k(Le,m(K,{get when(){return f().length===0||b()==="error"},get children(){var F=Gg(),ae=F.firstChild,qe=ae.nextSibling;return F.$$click=()=>{h().state.error?(dt({type:"RESTORE_ERROR",queryHash:h()?.queryHash}),i.resetQueries(h())):q()},k(F,()=>b()==="error"?"Restore":"Trigger",qe),B(fe=>{var ie=L(t`
                  color: ${o(r.red[500],r.red[400])};
                `,"tsqd-query-details-actions-btn","tsqd-query-details-action-error"),ye=b()==="pending",ke=t`
                  background-color: ${o(r.red[500],r.red[400])};
                `;return ie!==fe.e&&O(F,fe.e=ie),ye!==fe.t&&(F.disabled=fe.t=ye),ke!==fe.a&&O(ae,fe.a=ke),fe},{e:void 0,t:void 0,a:void 0}),F}}),null),k(Le,m(K,{get when(){return!(f().length===0||b()==="error")},get children(){var F=jg(),ae=F.firstChild,qe=ae.nextSibling,fe=qe.nextSibling;return fe.firstChild,fe.addEventListener("change",ie=>{let ye=f().find(ke=>ke.name===ie.currentTarget.value);q(ye)}),k(fe,m($i,{get each(){return f()},children:ie=>(()=>{var ye=Xg();return k(ye,()=>ie.name),B(()=>ye.value=ie.name),ye})()}),null),k(F,m(fn,{}),null),B(ie=>{var ye=L(n().actionsSelect,"tsqd-query-details-actions-btn","tsqd-query-details-action-error-multiple"),ke=t`
                  background-color: ${$.colors.red[400]};
                `,ne=b()==="pending";return ye!==ie.e&&O(F,ie.e=ye),ke!==ie.t&&O(ae,ie.t=ke),ne!==ie.a&&(fe.disabled=ie.a=ne),ie},{e:void 0,t:void 0,a:void 0}),F}}),null),k(mt,()=>s()==="view"?"Explorer":"Editor",null),k(C,m(K,{get when(){return s()==="view"},get children(){var F=Wg();return k(F,m(Lt,{label:"Data",defaultExpanded:["Data"],get value(){return v()},editable:!0,onEdit:()=>c("edit"),get activeQuery(){return h()}})),B(ae=>(ae=$.size[2])!=null?F.style.setProperty("padding",ae):F.style.removeProperty("padding")),F}}),lt),k(C,m(K,{get when(){return s()==="edit"},get children(){var F=Qg(),ae=F.firstChild,qe=ae.nextSibling,fe=qe.firstChild,ie=fe.nextSibling,ye=ie.firstChild,ke=ye.nextSibling;return F.addEventListener("submit",ne=>{ne.preventDefault();let bt=new FormData(ne.currentTarget).get("data");try{let tt=JSON.parse(bt);h().setState({...h().state,data:tt}),c("view")}catch{u(!0)}}),ae.addEventListener("focus",()=>u(!1)),k(fe,()=>d()?"Invalid Value":""),ye.$$click=()=>c("view"),B(ne=>{var pt=L(n().devtoolsEditForm,"tsqd-query-details-data-editor"),bt=n().devtoolsEditTextarea,tt=d(),Nt=n().devtoolsEditFormActions,wt=n().devtoolsEditFormError,Vt=n().devtoolsEditFormActionContainer,xt=L(n().devtoolsEditFormAction,t`
                      color: ${o(r.gray[600],r.gray[300])};
                    `),Dt=L(n().devtoolsEditFormAction,t`
                      color: ${o(r.blue[600],r.blue[400])};
                    `);return pt!==ne.e&&O(F,ne.e=pt),bt!==ne.t&&O(ae,ne.t=bt),tt!==ne.a&&A(ae,"data-error",ne.a=tt),Nt!==ne.o&&O(qe,ne.o=Nt),wt!==ne.i&&O(fe,ne.i=wt),Vt!==ne.n&&O(ie,ne.n=Vt),xt!==ne.s&&O(ye,ne.s=xt),Dt!==ne.h&&O(ke,ne.h=Dt),ne},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0}),B(()=>ae.value=JSON.stringify(v(),null,2)),F}}),lt),k(vt,m(Lt,{label:"Query",defaultExpanded:["Query","queryKey"],get value(){return g()}})),B(F=>{var ae=L(n().detailsContainer,"tsqd-query-details-container"),qe=L(n().detailsHeader,"tsqd-query-details-header"),fe=L(n().detailsBody,"tsqd-query-details-summary-container"),ie=L(n().queryDetailsStatus,P()),ye=L(n().detailsHeader,"tsqd-query-details-header"),ke=L(n().actionsBody,"tsqd-query-details-actions-container"),ne=L(t`
                color: ${o(r.blue[600],r.blue[400])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-refetch"),pt=p()==="fetching",bt=t`
                background-color: ${o(r.blue[600],r.blue[400])};
              `,tt=L(t`
                color: ${o(r.yellow[600],r.yellow[400])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-invalidate"),Nt=b()==="pending",wt=t`
                background-color: ${o(r.yellow[600],r.yellow[400])};
              `,Vt=L(t`
                color: ${o(r.gray[600],r.gray[300])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-reset"),xt=b()==="pending",Dt=t`
                background-color: ${o(r.gray[600],r.gray[400])};
              `,Yn=L(t`
                color: ${o(r.pink[500],r.pink[400])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-remove"),bn=p()==="fetching",Xn=t`
                background-color: ${o(r.pink[500],r.pink[400])};
              `,en=L(t`
                color: ${o(r.cyan[500],r.cyan[400])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-loading"),Zn=l(),wn=t`
                background-color: ${o(r.cyan[500],r.cyan[400])};
              `,xn=L(n().detailsHeader,"tsqd-query-details-header"),Sn=L(n().detailsHeader,"tsqd-query-details-header"),tn=$.size[2];return ae!==F.e&&O(C,F.e=ae),qe!==F.t&&O(I,F.t=qe),fe!==F.a&&O(j,F.a=fe),ie!==F.o&&O(ge,F.o=ie),ye!==F.i&&O(we,F.i=ye),ke!==F.n&&O(Le,F.n=ke),ne!==F.s&&O(M,F.s=ne),pt!==F.h&&(M.disabled=F.h=pt),bt!==F.r&&O(be,F.r=bt),tt!==F.d&&O(te,F.d=tt),Nt!==F.l&&(te.disabled=F.l=Nt),wt!==F.u&&O(Tt,F.u=wt),Vt!==F.c&&O(G,F.c=Vt),xt!==F.w&&(G.disabled=F.w=xt),Dt!==F.m&&O(et,F.m=Dt),Yn!==F.f&&O(Oe,F.f=Yn),bn!==F.y&&(Oe.disabled=F.y=bn),Xn!==F.g&&O(Jt,F.g=Xn),en!==F.p&&O(Ge,F.p=en),Zn!==F.b&&(Ge.disabled=F.b=Zn),wn!==F.T&&O(Ot,F.T=wn),xn!==F.A&&O(mt,F.A=xn),Sn!==F.O&&O(lt,F.O=Sn),tn!==F.I&&((F.I=tn)!=null?vt.style.setProperty("padding",tn):vt.style.removeProperty("padding")),F},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0,g:void 0,p:void 0,b:void 0,T:void 0,A:void 0,O:void 0,I:void 0}),C}})},lh=()=>{let e=Te(),t=N().shadowDOMTarget?Q.bind({target:N().shadowDOMTarget}):Q,n=T(()=>e()==="dark"?Je(t):Ze(t)),{colors:r}=$,o=(d,u)=>e()==="dark"?u:d,i=rt(d=>{let f=d().getAll().find(h=>h.mutationId===qt());return f?f.state.isPaused:!1}),l=rt(d=>{let f=d().getAll().find(h=>h.mutationId===qt());return f?f.state.status:"idle"}),a=T(()=>jt({isPaused:i(),status:l()})),s=rt(d=>d().getAll().find(u=>u.mutationId===qt()),!1),c=()=>a()==="gray"?t`
        background-color: ${o(r[a()][200],r[a()][700])};
        color: ${o(r[a()][700],r[a()][300])};
        border-color: ${o(r[a()][400],r[a()][600])};
      `:t`
      background-color: ${o(r[a()][100],r[a()][900])};
      color: ${o(r[a()][700],r[a()][300])};
      border-color: ${o(r[a()][400],r[a()][600])};
    `;return m(K,{get when(){return s()},get children(){var d=Zg(),u=d.firstChild,f=u.nextSibling,h=f.firstChild,g=h.firstChild,y=g.firstChild,v=g.nextSibling,p=h.nextSibling,b=p.firstChild,w=b.nextSibling,x=f.nextSibling,S=x.nextSibling,q=S.nextSibling,D=q.nextSibling,P=D.nextSibling,C=P.nextSibling,I=C.nextSibling,j=I.nextSibling;return k(y,m(K,{get when(){return s().options.mutationKey},fallback:"No mutationKey found",get children(){return Pn(s().options.mutationKey,!0)}})),k(v,m(K,{get when(){return a()==="purple"},children:"pending"}),null),k(v,m(K,{get when(){return a()!=="purple"},get children(){return l()}}),null),k(w,()=>new Date(s().state.submittedAt).toLocaleTimeString()),k(S,m(Lt,{label:"Variables",defaultExpanded:["Variables"],get value(){return s().state.variables}})),k(D,m(Lt,{label:"Context",defaultExpanded:["Context"],get value(){return s().state.context}})),k(C,m(Lt,{label:"Data",defaultExpanded:["Data"],get value(){return s().state.data}})),k(j,m(Lt,{label:"Mutation",defaultExpanded:["Mutation"],get value(){return s()}})),B(H=>{var se=L(n().detailsContainer,"tsqd-query-details-container"),oe=L(n().detailsHeader,"tsqd-query-details-header"),ge=L(n().detailsBody,"tsqd-query-details-summary-container"),ue=L(n().queryDetailsStatus,c()),le=L(n().detailsHeader,"tsqd-query-details-header"),de=$.size[2],he=L(n().detailsHeader,"tsqd-query-details-header"),Ce=$.size[2],Re=L(n().detailsHeader,"tsqd-query-details-header"),we=$.size[2],Le=L(n().detailsHeader,"tsqd-query-details-header"),M=$.size[2];return se!==H.e&&O(d,H.e=se),oe!==H.t&&O(u,H.t=oe),ge!==H.a&&O(f,H.a=ge),ue!==H.o&&O(v,H.o=ue),le!==H.i&&O(x,H.i=le),de!==H.n&&((H.n=de)!=null?S.style.setProperty("padding",de):S.style.removeProperty("padding")),he!==H.s&&O(q,H.s=he),Ce!==H.h&&((H.h=Ce)!=null?D.style.setProperty("padding",Ce):D.style.removeProperty("padding")),Re!==H.r&&O(P,H.r=Re),we!==H.d&&((H.d=we)!=null?C.style.setProperty("padding",we):C.style.removeProperty("padding")),Le!==H.l&&O(I,H.l=Le),M!==H.u&&((H.u=M)!=null?j.style.setProperty("padding",M):j.style.removeProperty("padding")),H},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0}),d}})},kr=new Map,ah=()=>{let e=T(()=>N().client.getQueryCache()),t=e().subscribe(n=>{hi(()=>{for(let[r,o]of kr.entries())o.shouldUpdate(n)&&o.setter(r(e))})});return U(()=>{kr.clear(),t()}),t},Ae=(e,t=!0,n=()=>!0)=>{let r=T(()=>N().client.getQueryCache()),[o,i]=z(e(r),t?void 0:{equals:!1});return V(()=>{i(e(r))}),kr.set(e,{setter:i,shouldUpdate:n}),U(()=>{kr.delete(e)}),o},Er=new Map,ch=()=>{let e=T(()=>N().client.getMutationCache()),t=e().subscribe(()=>{for(let[n,r]of Er.entries())queueMicrotask(()=>{r(n(e))})});return U(()=>{Er.clear(),t()}),t},rt=(e,t=!0)=>{let n=T(()=>N().client.getMutationCache()),[r,o]=z(e(n),t?void 0:{equals:!1});return V(()=>{o(e(n))}),Er.set(e,o),U(()=>{Er.delete(e)}),r},uh="@tanstack/query-devtools-event",dt=({type:e,queryHash:t,metadata:n})=>{let r=new CustomEvent(uh,{detail:{type:e,queryHash:t,metadata:n},bubbles:!0,cancelable:!0});self.dispatchEvent(r)},Ca=(e,t)=>{let{colors:n,font:r,size:o,alpha:i,shadow:l,border:a}=$,s=(c,d)=>e==="light"?c:d;return{devtoolsBtn:t`
      z-index: 100000;
      position: fixed;
      padding: 4px;
      text-align: left;

      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 9999px;
      box-shadow: ${l.md()};
      overflow: hidden;

      & div {
        position: absolute;
        top: -8px;
        left: -8px;
        right: -8px;
        bottom: -8px;
        border-radius: 9999px;

        & svg {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        filter: blur(6px) saturate(1.2) contrast(1.1);
      }

      &:focus-within {
        outline-offset: 2px;
        outline: 3px solid ${n.green[600]};
      }

      & button {
        position: relative;
        z-index: 1;
        padding: 0;
        border-radius: 9999px;
        background-color: transparent;
        border: none;
        height: 40px;
        display: flex;
        width: 40px;
        overflow: hidden;
        cursor: pointer;
        outline: none;
        & svg {
          position: absolute;
          width: 100%;
          height: 100%;
        }
      }
    `,panel:t`
      position: fixed;
      z-index: 9999;
      display: flex;
      gap: ${$.size[.5]};
      & * {
        box-sizing: border-box;
        text-transform: none;
      }

      & *::-webkit-scrollbar {
        width: 7px;
      }

      & *::-webkit-scrollbar-track {
        background: transparent;
      }

      & *::-webkit-scrollbar-thumb {
        background: ${s(n.gray[300],n.darkGray[200])};
      }

      & *::-webkit-scrollbar-thumb:hover {
        background: ${s(n.gray[400],n.darkGray[300])};
      }
    `,parentPanel:t`
      z-index: 9999;
      display: flex;
      height: 100%;
      gap: ${$.size[.5]};
      & * {
        box-sizing: border-box;
        text-transform: none;
      }

      & *::-webkit-scrollbar {
        width: 7px;
      }

      & *::-webkit-scrollbar-track {
        background: transparent;
      }

      & *::-webkit-scrollbar-thumb {
        background: ${s(n.gray[300],n.darkGray[200])};
      }

      & *::-webkit-scrollbar-thumb:hover {
        background: ${s(n.gray[400],n.darkGray[300])};
      }
    `,"devtoolsBtn-position-bottom-right":t`
      bottom: 12px;
      right: 12px;
    `,"devtoolsBtn-position-bottom-left":t`
      bottom: 12px;
      left: 12px;
    `,"devtoolsBtn-position-top-left":t`
      top: 12px;
      left: 12px;
    `,"devtoolsBtn-position-top-right":t`
      top: 12px;
      right: 12px;
    `,"devtoolsBtn-position-relative":t`
      position: relative;
    `,"panel-position-top":t`
      top: 0;
      right: 0;
      left: 0;
      max-height: 90%;
      min-height: ${o[14]};
      border-bottom: ${s(n.gray[400],n.darkGray[300])} 1px solid;
    `,"panel-position-bottom":t`
      bottom: 0;
      right: 0;
      left: 0;
      max-height: 90%;
      min-height: ${o[14]};
      border-top: ${s(n.gray[400],n.darkGray[300])} 1px solid;
    `,"panel-position-right":t`
      bottom: 0;
      right: 0;
      top: 0;
      border-left: ${s(n.gray[400],n.darkGray[300])} 1px solid;
      max-width: 90%;
    `,"panel-position-left":t`
      bottom: 0;
      left: 0;
      top: 0;
      border-right: ${s(n.gray[400],n.darkGray[300])} 1px solid;
      max-width: 90%;
    `,closeBtn:t`
      position: absolute;
      cursor: pointer;
      z-index: 5;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      background-color: ${s(n.gray[50],n.darkGray[700])};
      &:hover {
        background-color: ${s(n.gray[200],n.darkGray[500])};
      }
      &:focus-visible {
        outline: 2px solid ${n.blue[600]};
      }
      & svg {
        color: ${s(n.gray[600],n.gray[400])};
        width: ${o[2]};
        height: ${o[2]};
      }
    `,"closeBtn-position-top":t`
      bottom: 0;
      right: ${o[2]};
      transform: translate(0, 100%);
      border-right: ${s(n.gray[400],n.darkGray[300])} 1px solid;
      border-left: ${s(n.gray[400],n.darkGray[300])} 1px solid;
      border-top: none;
      border-bottom: ${s(n.gray[400],n.darkGray[300])} 1px solid;
      border-radius: 0px 0px ${a.radius.sm} ${a.radius.sm};
      padding: ${o[.5]} ${o[1.5]} ${o[1]} ${o[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        bottom: 100%;
        left: -${o[2.5]};
        height: ${o[1.5]};
        width: calc(100% + ${o[5]});
      }

      & svg {
        transform: rotate(180deg);
      }
    `,"closeBtn-position-bottom":t`
      top: 0;
      right: ${o[2]};
      transform: translate(0, -100%);
      border-right: ${s(n.gray[400],n.darkGray[300])} 1px solid;
      border-left: ${s(n.gray[400],n.darkGray[300])} 1px solid;
      border-top: ${s(n.gray[400],n.darkGray[300])} 1px solid;
      border-bottom: none;
      border-radius: ${a.radius.sm} ${a.radius.sm} 0px 0px;
      padding: ${o[1]} ${o[1.5]} ${o[.5]} ${o[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        top: 100%;
        left: -${o[2.5]};
        height: ${o[1.5]};
        width: calc(100% + ${o[5]});
      }
    `,"closeBtn-position-right":t`
      bottom: ${o[2]};
      left: 0;
      transform: translate(-100%, 0);
      border-right: none;
      border-left: ${s(n.gray[400],n.darkGray[300])} 1px solid;
      border-top: ${s(n.gray[400],n.darkGray[300])} 1px solid;
      border-bottom: ${s(n.gray[400],n.darkGray[300])} 1px solid;
      border-radius: ${a.radius.sm} 0px 0px ${a.radius.sm};
      padding: ${o[1.5]} ${o[.5]} ${o[1.5]} ${o[1]};

      &::after {
        content: ' ';
        position: absolute;
        left: 100%;
        height: calc(100% + ${o[5]});
        width: ${o[1.5]};
      }

      & svg {
        transform: rotate(-90deg);
      }
    `,"closeBtn-position-left":t`
      bottom: ${o[2]};
      right: 0;
      transform: translate(100%, 0);
      border-left: none;
      border-right: ${s(n.gray[400],n.darkGray[300])} 1px solid;
      border-top: ${s(n.gray[400],n.darkGray[300])} 1px solid;
      border-bottom: ${s(n.gray[400],n.darkGray[300])} 1px solid;
      border-radius: 0px ${a.radius.sm} ${a.radius.sm} 0px;
      padding: ${o[1.5]} ${o[1]} ${o[1.5]} ${o[.5]};

      &::after {
        content: ' ';
        position: absolute;
        right: 100%;
        height: calc(100% + ${o[5]});
        width: ${o[1.5]};
      }

      & svg {
        transform: rotate(90deg);
      }
    `,queriesContainer:t`
      flex: 1 1 700px;
      background-color: ${s(n.gray[50],n.darkGray[700])};
      display: flex;
      flex-direction: column;
      & * {
        font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      }
    `,dragHandle:t`
      position: absolute;
      transition: background-color 0.125s ease;
      &:hover {
        background-color: ${n.purple[400]}${s("",i[90])};
      }
      z-index: 4;
    `,"dragHandle-position-top":t`
      bottom: 0;
      width: 100%;
      height: 3px;
      cursor: ns-resize;
    `,"dragHandle-position-bottom":t`
      top: 0;
      width: 100%;
      height: 3px;
      cursor: ns-resize;
    `,"dragHandle-position-right":t`
      left: 0;
      width: 3px;
      height: 100%;
      cursor: ew-resize;
    `,"dragHandle-position-left":t`
      right: 0;
      width: 3px;
      height: 100%;
      cursor: ew-resize;
    `,row:t`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: ${$.size[2]} ${$.size[2.5]};
      gap: ${$.size[2.5]};
      border-bottom: ${s(n.gray[300],n.darkGray[500])} 1px solid;
      align-items: center;
      & > button {
        padding: 0;
        background: transparent;
        border: none;
        display: flex;
        gap: ${o[.5]};
        flex-direction: column;
      }
    `,logoAndToggleContainer:t`
      display: flex;
      gap: ${$.size[3]};
      align-items: center;
    `,logo:t`
      cursor: pointer;
      display: flex;
      flex-direction: column;
      background-color: transparent;
      border: none;
      gap: ${$.size[.5]};
      padding: 0px;
      &:hover {
        opacity: 0.7;
      }
      &:focus-visible {
        outline-offset: 4px;
        border-radius: ${a.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
    `,tanstackLogo:t`
      font-size: ${r.size.md};
      font-weight: ${r.weight.bold};
      line-height: ${r.lineHeight.xs};
      white-space: nowrap;
      color: ${s(n.gray[600],n.gray[300])};
    `,queryFlavorLogo:t`
      font-weight: ${r.weight.semibold};
      font-size: ${r.size.xs};
      background: linear-gradient(
        to right,
        ${s("#ea4037, #ff9b11","#dd524b, #e9a03b")}
      );
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,queryStatusContainer:t`
      display: flex;
      gap: ${$.size[2]};
      height: min-content;
    `,queryStatusTag:t`
      display: flex;
      gap: ${$.size[1.5]};
      box-sizing: border-box;
      height: ${$.size[6.5]};
      background: ${s(n.gray[50],n.darkGray[500])};
      color: ${s(n.gray[700],n.gray[300])};
      border-radius: ${$.border.radius.sm};
      font-size: ${r.size.sm};
      padding: ${$.size[1]};
      padding-left: ${$.size[1.5]};
      align-items: center;
      font-weight: ${r.weight.medium};
      border: ${s("1px solid "+n.gray[300],"1px solid transparent")};
      user-select: none;
      position: relative;
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${n.blue[800]};
      }
    `,queryStatusTagLabel:t`
      font-size: ${r.size.xs};
    `,queryStatusCount:t`
      font-size: ${r.size.xs};
      padding: 0 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${s(n.gray[500],n.gray[400])};
      background-color: ${s(n.gray[200],n.darkGray[300])};
      border-radius: 2px;
      font-variant-numeric: tabular-nums;
      height: ${$.size[4.5]};
    `,statusTooltip:t`
      position: absolute;
      z-index: 1;
      background-color: ${s(n.gray[50],n.darkGray[500])};
      top: 100%;
      left: 50%;
      transform: translate(-50%, calc(${$.size[2]}));
      padding: ${$.size[.5]} ${$.size[2]};
      border-radius: ${$.border.radius.sm};
      font-size: ${r.size.xs};
      border: 1px solid ${s(n.gray[400],n.gray[600])};
      color: ${s(n.gray[600],n.gray[300])};

      &::before {
        top: 0px;
        content: ' ';
        display: block;
        left: 50%;
        transform: translate(-50%, -100%);
        position: absolute;
        border-color: transparent transparent
          ${s(n.gray[400],n.gray[600])} transparent;
        border-style: solid;
        border-width: 7px;
        /* transform: rotate(180deg); */
      }

      &::after {
        top: 0px;
        content: ' ';
        display: block;
        left: 50%;
        transform: translate(-50%, calc(-100% + 2px));
        position: absolute;
        border-color: transparent transparent
          ${s(n.gray[100],n.darkGray[500])} transparent;
        border-style: solid;
        border-width: 7px;
      }
    `,filtersContainer:t`
      display: flex;
      gap: ${$.size[2]};
      & > button {
        cursor: pointer;
        padding: ${$.size[.5]} ${$.size[1.5]} ${$.size[.5]}
          ${$.size[2]};
        border-radius: ${$.border.radius.sm};
        background-color: ${s(n.gray[100],n.darkGray[400])};
        border: 1px solid ${s(n.gray[300],n.darkGray[200])};
        color: ${s(n.gray[700],n.gray[300])};
        font-size: ${r.size.xs};
        display: flex;
        align-items: center;
        line-height: ${r.lineHeight.sm};
        gap: ${$.size[1.5]};
        max-width: 160px;
        &:focus-visible {
          outline-offset: 2px;
          border-radius: ${a.radius.xs};
          outline: 2px solid ${n.blue[800]};
        }
        & svg {
          width: ${$.size[3]};
          height: ${$.size[3]};
          color: ${s(n.gray[500],n.gray[400])};
        }
      }
    `,filterInput:t`
      padding: ${o[.5]} ${o[2]};
      border-radius: ${$.border.radius.sm};
      background-color: ${s(n.gray[100],n.darkGray[400])};
      display: flex;
      box-sizing: content-box;
      align-items: center;
      gap: ${$.size[1.5]};
      max-width: 160px;
      min-width: 100px;
      border: 1px solid ${s(n.gray[300],n.darkGray[200])};
      height: min-content;
      color: ${s(n.gray[600],n.gray[400])};
      & > svg {
        width: ${o[3]};
        height: ${o[3]};
      }
      & input {
        font-size: ${r.size.xs};
        width: 100%;
        background-color: ${s(n.gray[100],n.darkGray[400])};
        border: none;
        padding: 0;
        line-height: ${r.lineHeight.sm};
        color: ${s(n.gray[700],n.gray[300])};
        &::placeholder {
          color: ${s(n.gray[700],n.gray[300])};
        }
        &:focus {
          outline: none;
        }
      }

      &:focus-within {
        outline-offset: 2px;
        border-radius: ${a.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
    `,filterSelect:t`
      padding: ${$.size[.5]} ${$.size[2]};
      border-radius: ${$.border.radius.sm};
      background-color: ${s(n.gray[100],n.darkGray[400])};
      display: flex;
      align-items: center;
      gap: ${$.size[1.5]};
      box-sizing: content-box;
      max-width: 160px;
      border: 1px solid ${s(n.gray[300],n.darkGray[200])};
      height: min-content;
      & > svg {
        color: ${s(n.gray[600],n.gray[400])};
        width: ${$.size[2]};
        height: ${$.size[2]};
      }
      & > select {
        appearance: none;
        color: ${s(n.gray[700],n.gray[300])};
        min-width: 100px;
        line-height: ${r.lineHeight.sm};
        font-size: ${r.size.xs};
        background-color: ${s(n.gray[100],n.darkGray[400])};
        border: none;
        &:focus {
          outline: none;
        }
      }
      &:focus-within {
        outline-offset: 2px;
        border-radius: ${a.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
    `,actionsContainer:t`
      display: flex;
      gap: ${$.size[2]};
    `,actionsBtn:t`
      border-radius: ${$.border.radius.sm};
      background-color: ${s(n.gray[100],n.darkGray[400])};
      border: 1px solid ${s(n.gray[300],n.darkGray[200])};
      width: ${$.size[6.5]};
      height: ${$.size[6.5]};
      justify-content: center;
      display: flex;
      align-items: center;
      gap: ${$.size[1.5]};
      max-width: 160px;
      cursor: pointer;
      padding: 0;
      &:hover {
        background-color: ${s(n.gray[200],n.darkGray[500])};
      }
      & svg {
        color: ${s(n.gray[700],n.gray[300])};
        width: ${$.size[3]};
        height: ${$.size[3]};
      }
      &:focus-visible {
        outline-offset: 2px;
        border-radius: ${a.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
    `,actionsBtnOffline:t`
      & svg {
        stroke: ${s(n.yellow[700],n.yellow[500])};
        fill: ${s(n.yellow[700],n.yellow[500])};
      }
    `,overflowQueryContainer:t`
      flex: 1;
      overflow-y: auto;
      & > div {
        display: flex;
        flex-direction: column;
      }
    `,queryRow:t`
      display: flex;
      align-items: center;
      padding: 0;
      border: none;
      cursor: pointer;
      color: ${s(n.gray[700],n.gray[300])};
      background-color: ${s(n.gray[50],n.darkGray[700])};
      line-height: 1;
      &:focus {
        outline: none;
      }
      &:focus-visible {
        outline-offset: -2px;
        border-radius: ${a.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
      &:hover .tsqd-query-hash {
        background-color: ${s(n.gray[200],n.darkGray[600])};
      }

      & .tsqd-query-observer-count {
        padding: 0 ${$.size[1]};
        user-select: none;
        min-width: ${$.size[6.5]};
        align-self: stretch;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${r.size.xs};
        font-weight: ${r.weight.medium};
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom: 1px solid ${s(n.gray[300],n.darkGray[700])};
      }
      & .tsqd-query-hash {
        user-select: text;
        font-size: ${r.size.xs};
        display: flex;
        align-items: center;
        min-height: ${$.size[6]};
        flex: 1;
        padding: ${$.size[1]} ${$.size[2]};
        font-family:
          ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
        border-bottom: 1px solid ${s(n.gray[300],n.darkGray[400])};
        text-align: left;
        text-overflow: clip;
        word-break: break-word;
      }

      & .tsqd-query-disabled-indicator {
        align-self: stretch;
        display: flex;
        align-items: center;
        padding: 0 ${$.size[2]};
        color: ${s(n.gray[800],n.gray[300])};
        background-color: ${s(n.gray[300],n.darkGray[600])};
        border-bottom: 1px solid ${s(n.gray[300],n.darkGray[400])};
        font-size: ${r.size.xs};
      }

      & .tsqd-query-static-indicator {
        align-self: stretch;
        display: flex;
        align-items: center;
        padding: 0 ${$.size[2]};
        color: ${s(n.teal[800],n.teal[300])};
        background-color: ${s(n.teal[100],n.teal[900])};
        border-bottom: 1px solid ${s(n.teal[300],n.teal[700])};
        font-size: ${r.size.xs};
      }
    `,selectedQueryRow:t`
      background-color: ${s(n.gray[200],n.darkGray[500])};
    `,detailsContainer:t`
      flex: 1 1 700px;
      background-color: ${s(n.gray[50],n.darkGray[700])};
      color: ${s(n.gray[700],n.gray[300])};
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      display: flex;
      text-align: left;
    `,detailsHeader:t`
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      position: sticky;
      top: 0;
      z-index: 2;
      background-color: ${s(n.gray[200],n.darkGray[600])};
      padding: ${$.size[1.5]} ${$.size[2]};
      font-weight: ${r.weight.medium};
      font-size: ${r.size.xs};
      line-height: ${r.lineHeight.xs};
      text-align: left;
    `,detailsBody:t`
      margin: ${$.size[1.5]} 0px ${$.size[2]} 0px;
      & > div {
        display: flex;
        align-items: stretch;
        padding: 0 ${$.size[2]};
        line-height: ${r.lineHeight.sm};
        justify-content: space-between;
        & > span {
          font-size: ${r.size.xs};
        }
        & > span:nth-child(2) {
          font-variant-numeric: tabular-nums;
        }
      }

      & > div:first-child {
        margin-bottom: ${$.size[1.5]};
      }

      & code {
        font-family:
          ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
        margin: 0;
        font-size: ${r.size.xs};
        line-height: ${r.lineHeight.xs};
      }

      & pre {
        margin: 0;
        display: flex;
        align-items: center;
      }
    `,queryDetailsStatus:t`
      border: 1px solid ${n.darkGray[200]};
      border-radius: ${$.border.radius.sm};
      font-weight: ${r.weight.medium};
      padding: ${$.size[1]} ${$.size[2.5]};
    `,actionsBody:t`
      flex-wrap: wrap;
      margin: ${$.size[2]} 0px ${$.size[2]} 0px;
      display: flex;
      gap: ${$.size[2]};
      padding: 0px ${$.size[2]};
      & > button {
        font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
        font-size: ${r.size.xs};
        padding: ${$.size[1]} ${$.size[2]};
        display: flex;
        border-radius: ${$.border.radius.sm};
        background-color: ${s(n.gray[100],n.darkGray[600])};
        border: 1px solid ${s(n.gray[300],n.darkGray[400])};
        align-items: center;
        gap: ${$.size[2]};
        font-weight: ${r.weight.medium};
        line-height: ${r.lineHeight.xs};
        cursor: pointer;
        &:focus-visible {
          outline-offset: 2px;
          border-radius: ${a.radius.xs};
          outline: 2px solid ${n.blue[800]};
        }
        &:hover {
          background-color: ${s(n.gray[200],n.darkGray[500])};
        }

        &:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        & > span {
          width: ${o[1.5]};
          height: ${o[1.5]};
          border-radius: ${$.border.radius.full};
        }
      }
    `,actionsSelect:t`
      font-size: ${r.size.xs};
      padding: ${$.size[.5]} ${$.size[2]};
      display: flex;
      border-radius: ${$.border.radius.sm};
      overflow: hidden;
      background-color: ${s(n.gray[100],n.darkGray[600])};
      border: 1px solid ${s(n.gray[300],n.darkGray[400])};
      align-items: center;
      gap: ${$.size[2]};
      font-weight: ${r.weight.medium};
      line-height: ${r.lineHeight.sm};
      color: ${s(n.red[500],n.red[400])};
      cursor: pointer;
      position: relative;
      &:hover {
        background-color: ${s(n.gray[200],n.darkGray[500])};
      }
      & > span {
        width: ${o[1.5]};
        height: ${o[1.5]};
        border-radius: ${$.border.radius.full};
      }
      &:focus-within {
        outline-offset: 2px;
        border-radius: ${a.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
      & select {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        appearance: none;
        background-color: transparent;
        border: none;
        color: transparent;
        outline: none;
      }

      & svg path {
        stroke: ${$.colors.red[400]};
      }
      & svg {
        width: ${$.size[2]};
        height: ${$.size[2]};
      }
    `,settingsMenu:t`
      display: flex;
      & * {
        font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      }
      flex-direction: column;
      gap: ${o[.5]};
      border-radius: ${$.border.radius.sm};
      border: 1px solid ${s(n.gray[300],n.gray[700])};
      background-color: ${s(n.gray[50],n.darkGray[600])};
      font-size: ${r.size.xs};
      color: ${s(n.gray[700],n.gray[300])};
      z-index: 99999;
      min-width: 120px;
      padding: ${o[.5]};
    `,settingsSubTrigger:t`
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: ${$.border.radius.xs};
      padding: ${$.size[1]} ${$.size[1]};
      cursor: pointer;
      background-color: transparent;
      border: none;
      color: ${s(n.gray[700],n.gray[300])};
      & svg {
        color: ${s(n.gray[600],n.gray[400])};
        transform: rotate(-90deg);
        width: ${$.size[2]};
        height: ${$.size[2]};
      }
      &:hover {
        background-color: ${s(n.gray[200],n.darkGray[500])};
      }
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${n.blue[800]};
      }
      &.data-disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    `,settingsMenuHeader:t`
      padding: ${$.size[1]} ${$.size[1]};
      font-weight: ${r.weight.medium};
      border-bottom: 1px solid ${s(n.gray[300],n.darkGray[400])};
      color: ${s(n.gray[500],n.gray[400])};
      font-size: ${r.size.xs};
    `,settingsSubButton:t`
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: ${s(n.gray[700],n.gray[300])};
      font-size: ${r.size.xs};
      border-radius: ${$.border.radius.xs};
      padding: ${$.size[1]} ${$.size[1]};
      cursor: pointer;
      background-color: transparent;
      border: none;
      & svg {
        color: ${s(n.gray[600],n.gray[400])};
      }
      &:hover {
        background-color: ${s(n.gray[200],n.darkGray[500])};
      }
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${n.blue[800]};
      }
    `,themeSelectedButton:t`
      background-color: ${s(n.purple[100],n.purple[900])};
      color: ${s(n.purple[700],n.purple[300])};
      & svg {
        color: ${s(n.purple[700],n.purple[300])};
      }
      &:hover {
        background-color: ${s(n.purple[100],n.purple[900])};
      }
    `,viewToggle:t`
      border-radius: ${$.border.radius.sm};
      background-color: ${s(n.gray[200],n.darkGray[600])};
      border: 1px solid ${s(n.gray[300],n.darkGray[200])};
      display: flex;
      padding: 0;
      font-size: ${r.size.xs};
      color: ${s(n.gray[700],n.gray[300])};
      overflow: hidden;

      &:has(:focus-visible) {
        outline: 2px solid ${n.blue[800]};
      }

      & .tsqd-radio-toggle {
        opacity: 0.5;
        display: flex;
        & label {
          display: flex;
          align-items: center;
          cursor: pointer;
          line-height: ${r.lineHeight.md};
        }

        & label:hover {
          background-color: ${s(n.gray[100],n.darkGray[500])};
        }
      }

      & > [data-checked] {
        opacity: 1;
        background-color: ${s(n.gray[100],n.darkGray[400])};
        & label:hover {
          background-color: ${s(n.gray[100],n.darkGray[400])};
        }
      }

      & .tsqd-radio-toggle:first-child {
        & label {
          padding: 0 ${$.size[1.5]} 0 ${$.size[2]};
        }
        border-right: 1px solid ${s(n.gray[300],n.darkGray[200])};
      }

      & .tsqd-radio-toggle:nth-child(2) {
        & label {
          padding: 0 ${$.size[2]} 0 ${$.size[1.5]};
        }
      }
    `,devtoolsEditForm:t`
      padding: ${o[2]};
      & > [data-error='true'] {
        outline: 2px solid ${s(n.red[200],n.red[800])};
        outline-offset: 2px;
        border-radius: ${a.radius.xs};
      }
    `,devtoolsEditTextarea:t`
      width: 100%;
      max-height: 500px;
      font-family: 'Fira Code', monospace;
      font-size: ${r.size.xs};
      border-radius: ${a.radius.sm};
      field-sizing: content;
      padding: ${o[2]};
      background-color: ${s(n.gray[100],n.darkGray[800])};
      color: ${s(n.gray[900],n.gray[100])};
      border: 1px solid ${s(n.gray[200],n.gray[700])};
      resize: none;
      &:focus {
        outline-offset: 2px;
        border-radius: ${a.radius.xs};
        outline: 2px solid ${s(n.blue[200],n.blue[800])};
      }
    `,devtoolsEditFormActions:t`
      display: flex;
      justify-content: space-between;
      gap: ${o[2]};
      align-items: center;
      padding-top: ${o[1]};
      font-size: ${r.size.xs};
    `,devtoolsEditFormError:t`
      color: ${s(n.red[700],n.red[500])};
    `,devtoolsEditFormActionContainer:t`
      display: flex;
      gap: ${o[2]};
    `,devtoolsEditFormAction:t`
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      font-size: ${r.size.xs};
      padding: ${o[1]} ${$.size[2]};
      display: flex;
      border-radius: ${a.radius.sm};
      background-color: ${s(n.gray[100],n.darkGray[600])};
      border: 1px solid ${s(n.gray[300],n.darkGray[400])};
      align-items: center;
      gap: ${o[2]};
      font-weight: ${r.weight.medium};
      line-height: ${r.lineHeight.xs};
      cursor: pointer;
      &:focus-visible {
        outline-offset: 2px;
        border-radius: ${a.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
      &:hover {
        background-color: ${s(n.gray[200],n.darkGray[500])};
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    `}},Ze=e=>Ca("light",e),Je=e=>Ca("dark",e);In(["click","mousedown","input"]);export{T as a,m as b,dh as c,xh as d,Sh as e,tu as f,Ch as g,nu as h,$h as i,kh as j,Sa as k};
/*! Bundled license information:

@tanstack/query-devtools/build/chunk/YPM2AS64.js:
  (*! Bundled license information:
  
  @tanstack/match-sorter-utils/build/lib/index.mjs:
    (**
       * match-sorter-utils
       *
       * Copyright (c) TanStack
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.md file in the root directory of this source tree.
       *
       * @license MIT
       *)
    (**
     * @name match-sorter
     * @license MIT license.
     * @copyright (c) 2099 Kent C. Dodds
     * @author Kent C. Dodds <me@kentcdodds.com> (https://kentcdodds.com)
     *)
  
  @kobalte/utils/dist/index.js:
    (*!
     * Portions of this file are based on code from ariakit.
     * MIT Licensed, Copyright (c) Diego Haz.
     *
     * Credits to the Ariakit team:
     * https://github.com/ariakit/ariakit/blob/da142672eddefa99365773ced72171facc06fdcb/packages/ariakit-utils/src/array.ts
     *)
    (*!
     * Original code by Chakra UI
     * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
     *
     * Credits to the Chakra UI team:
     * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/assertion.ts
     *)
    (*!
     * Portions of this file are based on code from react-spectrum.
     * Apache License Version 2.0, Copyright 2020 Adobe.
     *
     * Credits to the React Spectrum team:
     * https://github.com/solidjs-community/solid-aria/blob/2c5f54feb5cfea514b1ee0a52d0416878f882351/packages/utils/src/createGlobalListeners.ts
     *)
    (*!
     * Portions of this file are based on code from ariakit.
     * MIT Licensed, Copyright (c) Diego Haz.
     *
     * Credits to the Ariakit team:
     * https://github.com/ariakit/ariakit/blob/232bc79018ec20967fec1e097a9474aba3bb5be7/packages/ariakit-utils/src/dom.ts
     *)
    (*!
     * Portions of this file are based on code from react-spectrum.
     * Apache License Version 2.0, Copyright 2020 Adobe.
     *
     * Credits to the React Spectrum team:
     * https://github.com/adobe/react-spectrum/blob/cf9ab24f3255be1530d0f584061a01aa1e8180e6/packages/@react-aria/utils/src/platform.ts
     *)
    (*!
     * Portions of this file are based on code from react-spectrum.
     * Apache License Version 2.0, Copyright 2020 Adobe.
     *
     * Credits to the React Spectrum team:
     * https://github.com/adobe/react-spectrum/blob/a9dea8a3672179e6c38aafd1429daf44c7ea2ff6/packages/@react-aria/utils/src/focusWithoutScrolling.ts
     *)
    (*!
     * Portions of this file are based on code from ariakit.
     * MIT Licensed, Copyright (c) Diego Haz.
     *
     * Credits to the Ariakit team:
     * https://github.com/ariakit/ariakit/blob/main/packages/ariakit-utils/src/focus.ts
     *
     * Portions of this file are based on code from react-spectrum.
     * Apache License Version 2.0, Copyright 2020 Adobe.
     *
     * Credits to the React Spectrum team:
     * https://github.com/adobe/react-spectrum/blob/main/packages/%40react-aria/focus/src/isElementVisible.ts
     * https://github.com/adobe/react-spectrum/blob/8f2f2acb3d5850382ebe631f055f88c704aa7d17/packages/@react-aria/focus/src/FocusScope.tsx
     *)
    (*!
     * Portions of this file are based on code from react-spectrum.
     * Apache License Version 2.0, Copyright 2020 Adobe.
     *
     * Credits to the React Spectrum team:
     * https://github.com/adobe/react-spectrum/blob/f6e686fe9d3b983d48650980c1ecfdde320bc62f/packages/@react-aria/focus/src/FocusScope.tsx
     *)
    (*!
     * Portions of this file are based on code from react-spectrum.
     * Apache License Version 2.0, Copyright 2020 Adobe.
     *
     * Credits to the React Spectrum team:
     * https://github.com/adobe/react-spectrum/blob/a9dea8a3672179e6c38aafd1429daf44c7ea2ff6/packages/@react-aria/utils/src/getScrollParent.ts
     *)
    (*!
     * Portions of this file are based on code from react-spectrum.
     * Apache License Version 2.0, Copyright 2020 Adobe.
     *
     * Credits to the React Spectrum team:
     * https://github.com/adobe/react-spectrum/blob/a9dea8a3672179e6c38aafd1429daf44c7ea2ff6/packages/@react-aria/utils/src/isVirtualEvent.ts
     *)
    (*!
     * Portions of this file are based on code from react-spectrum.
     * Apache License Version 2.0, Copyright 2020 Adobe.
     *
     * Credits to the React Spectrum team:
     * https://github.com/adobe/react-spectrum/blob/ff3e690fffc6c54367b8057e28a0e5b9211f37b5/packages/@react-stately/utils/src/number.ts
     *)
    (*!
     * Portions of this file are based on code from ariakit.
     * MIT Licensed, Copyright (c) Diego Haz.
     *
     * Credits to the Ariakit team:
     * https://github.com/ariakit/ariakit/blob/84e97943ad637a582c01c9b56d880cd95f595737/packages/ariakit/src/hovercard/__utils/polygon.ts
     * https://github.com/ariakit/ariakit/blob/f2a96973de523d67e41eec983263936c489ef3e2/packages/ariakit/src/hovercard/__utils/debug-polygon.ts
     *)
    (*!
     * Portions of this file are based on code from react-spectrum.
     * Apache License Version 2.0, Copyright 2020 Adobe.
     *
     * Credits to the React Spectrum team:
     * https://github.com/adobe/react-spectrum/blob/a9dea8a3672179e6c38aafd1429daf44c7ea2ff6/packages/@react-aria/utils/src/runAfterTransition.ts
     *)
    (*!
     * Portions of this file are based on code from react-spectrum.
     * Apache License Version 2.0, Copyright 2020 Adobe.
     *
     * Credits to the React Spectrum team:
     * https://github.com/adobe/react-spectrum/blob/8f2f2acb3d5850382ebe631f055f88c704aa7d17/packages/@react-aria/utils/src/scrollIntoView.ts
     *)
  *)
*/
//# sourceMappingURL=chunk-DU7GXRSQ.js.map

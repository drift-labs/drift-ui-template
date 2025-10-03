import{c as et}from"./chunk-HX3WMS5S.js";import{l as Je,m as Y}from"./chunk-FVUSQHVT.js";import{Nb as $n,c as s,e as On,ya as X}from"./chunk-BEUYJGED.js";import{f as c,h as v,n as E}from"./chunk-64CIGK2X.js";v();E();v();E();v();E();var R=c(s(),1);v();E();var A=c(s(),1);v();E();var O=c(s(),1);v();E();var nt=c(s(),1),rt=c(s(),1),re=c(s(),1),ut=c(s(),1),Wn=c(s(),1),Re=c(s(),1),it=c(s(),1),ct=c(s(),1),oe=c(s(),1),ae=c(s(),1),Fn=c(s(),1),ft=c(s(),1),ye=c(s(),1),dt=c(s(),1),pt=c(s(),1);function tt(){return!!(typeof self<"u"&&self.document&&self.document.createElement)}function An(t){return!!(t&&{}.toString.call(t)=="[object Function]")}function _n(t,e){if(t!=null)if(An(t))t(e);else try{t.current=e}catch{throw new Error(`Cannot assign value "${e}" to ref "${t}"`)}}function ot(...t){return(0,rt.useCallback)(e=>{for(let n of t)_n(n,e)},t)}function at(t){return tt()?t?t.ownerDocument:document:null}function st(){let[,t]=(0,oe.useState)(Object.create(null));return(0,oe.useCallback)(()=>{t(Object.create(null))},[])}var lt=tt()?ae.useLayoutEffect:ae.useEffect;var mt=c(On(),1);var Un=({children:t,type:e="reach-portal",containerRef:n})=>{let r=O.useRef(null),o=O.useRef(null),u=st();return O.useEffect(()=>{n!=null&&(typeof n!="object"||!("current"in n)?console.warn("@reach/portal: Invalid value passed to the `containerRef` of a `Portal`. The portal will be appended to the document body, but if you want to attach it to another DOM node you must pass a valid React ref object to `containerRef`."):n.current==null&&console.warn("@reach/portal: A ref was passed to the `containerRef` prop of a `Portal`, but no DOM node was attached to it. Be sure to pass the ref to a DOM component.\n\nIf you are forwarding the ref from another component, be sure to use the React.forwardRef API. See https://reactjs.org/docs/forwarding-refs.html."))},[n]),lt(()=>{if(!r.current)return;let a=r.current.ownerDocument,i=n?.current||a.body;return o.current=a?.createElement(e),i.appendChild(o.current),u(),()=>{o.current&&i&&i.removeChild(o.current)}},[e,u,n]),o.current?(0,mt.createPortal)(t,o.current):O.createElement("span",{ref:r})},Ce=({unstable_skipInitialRender:t,...e})=>{let[n,r]=O.useState(!1);return O.useEffect(()=>{t&&r(!0)},[t]),t&&!n?null:O.createElement(Un,{...e})};Ce.displayName="Portal";v();E();var $=c(s(),1);v();E();var Bn=["bottom","height","left","right","top","width"],Hn=function(e,n){return e===void 0&&(e={}),n===void 0&&(n={}),Bn.some(function(r){return e[r]!==n[r]})},B=new Map,ht,jn=function t(){var e=[];B.forEach(function(n,r){var o=r.getBoundingClientRect();Hn(o,n.rect)&&(n.rect=o,e.push(n))}),e.forEach(function(n){n.callbacks.forEach(function(r){return r(n.rect)})}),ht=self.requestAnimationFrame(t)};function Xn(t,e){return{observe:function(){var r=B.size===0;B.has(t)?B.get(t).callbacks.push(e):B.set(t,{rect:void 0,hasRectChanged:!1,callbacks:[e]}),r&&jn()},unobserve:function(){var r=B.get(t);if(r){var o=r.callbacks.indexOf(e);o>=0&&r.callbacks.splice(o,1),r.callbacks.length||B.delete(t),B.size||cancelAnimationFrame(ht)}}}}var wt=Xn;v();E();var gt=c(s(),1),Kn=c(s(),1),ue=c(s(),1),bt=c(s(),1),zn=c(s(),1),Ie=c(s(),1),vt=c(s(),1),Et=c(s(),1),Rt=c(s(),1),ie=c(s(),1),Vn=c(s(),1),yt=c(s(),1),De=c(s(),1),Ct=c(s(),1),xt=c(s(),1);function Yn(){return!!(typeof self<"u"&&self.document&&self.document.createElement)}function xe(t){return typeof t=="boolean"}function Se(t){return!!(t&&{}.toString.call(t)=="[object Function]")}var ce=Yn()?ie.useLayoutEffect:ie.useEffect;var qn=({onChange:t,observe:e=!0,children:n})=>{let r=$.useRef(null),o=se(r,{observe:e,onChange:t});return n({ref:r,rect:o})};qn.displayName="Rect";function se(t,e,n){let r,o;xe(e)?r=e:(r=e?.observe??!0,o=e?.onChange),Se(n)&&(o=n),$.useEffect(()=>{xe(e)&&console.warn("Passing `observe` as the second argument to `useRect` is deprecated and will be removed in a future version of Reach UI. Instead, you can pass an object of options with an `observe` property as the second argument (`useRect(ref, { observe })`).\nSee https://reach.tech/rect#userect-observe")},[e]),$.useEffect(()=>{Se(n)&&console.warn("Passing `onChange` as the third argument to `useRect` is deprecated and will be removed in a future version of Reach UI. Instead, you can pass an object of options with an `onChange` property as the second argument (`useRect(ref, { onChange })`).\nSee https://reach.tech/rect#userect-onchange")},[n]);let[u,a]=$.useState(t.current),i=$.useRef(!1),h=$.useRef(!1),[g,d]=$.useState(null),p=$.useRef(o);return ce(()=>{p.current=o,t.current!==u&&a(t.current)}),ce(()=>{u&&!i.current&&(i.current=!0,d(u.getBoundingClientRect()))},[u]),ce(()=>{if(!r)return;let b=u;if(h.current||(h.current=!0,b=t.current),!b){console.warn("You need to place the ref");return}let m=wt(b,y=>{p.current?.(y),d(y)});return m.observe(),()=>{m.unobserve()}},[r,u,t]),g}v();E();var Qn=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],ke=Qn.join(","),Dt=typeof Element>"u",V=Dt?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Te=!Dt&&Element.prototype.getRootNode?function(t){return t.getRootNode()}:function(t){return t.ownerDocument},Gn=function(e,n,r){var o=Array.prototype.slice.apply(e.querySelectorAll(ke));return n&&V.call(e,ke)&&o.unshift(e),o=o.filter(r),o},Zn=function t(e,n,r){for(var o=[],u=Array.from(e);u.length;){var a=u.shift();if(a.tagName==="SLOT"){var i=a.assignedElements(),h=i.length?i:a.children,g=t(h,!0,r);r.flatten?o.push.apply(o,g):o.push({scope:a,candidates:g})}else{var d=V.call(a,ke);d&&r.filter(a)&&(n||!e.includes(a))&&o.push(a);var p=a.shadowRoot||typeof r.getShadowRoot=="function"&&r.getShadowRoot(a),b=!r.shadowRootFilter||r.shadowRootFilter(a);if(p&&b){var m=t(p===!0?a.children:p.children,!0,r);r.flatten?o.push.apply(o,m):o.push({scope:a,candidates:m})}else u.unshift.apply(u,a.children)}}return o},kt=function(e,n){return e.tabIndex<0&&(n||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||e.isContentEditable)&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex},Jn=function(e,n){return e.tabIndex===n.tabIndex?e.documentOrder-n.documentOrder:e.tabIndex-n.tabIndex},Tt=function(e){return e.tagName==="INPUT"},er=function(e){return Tt(e)&&e.type==="hidden"},tr=function(e){var n=e.tagName==="DETAILS"&&Array.prototype.slice.apply(e.children).some(function(r){return r.tagName==="SUMMARY"});return n},nr=function(e,n){for(var r=0;r<e.length;r++)if(e[r].checked&&e[r].form===n)return e[r]},rr=function(e){if(!e.name)return!0;var n=e.form||Te(e),r=function(i){return n.querySelectorAll('input[type="radio"][name="'+i+'"]')},o;if(typeof self<"u"&&typeof self.CSS<"u"&&typeof self.CSS.escape=="function")o=r(self.CSS.escape(e.name));else try{o=r(e.name)}catch(a){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",a.message),!1}var u=nr(o,e.form);return!u||u===e},or=function(e){return Tt(e)&&e.type==="radio"},ar=function(e){return or(e)&&!rr(e)},St=function(e){var n=e.getBoundingClientRect(),r=n.width,o=n.height;return r===0&&o===0},ur=function(e,n){var r=n.displayCheck,o=n.getShadowRoot;if(getComputedStyle(e).visibility==="hidden")return!0;var u=V.call(e,"details>summary:first-of-type"),a=u?e.parentElement:e;if(V.call(a,"details:not([open]) *"))return!0;var i=Te(e).host,h=i?.ownerDocument.contains(i)||e.ownerDocument.contains(e);if(!r||r==="full"){if(typeof o=="function"){for(var g=e;e;){var d=e.parentElement,p=Te(e);if(d&&!d.shadowRoot&&o(d)===!0)return St(e);e.assignedSlot?e=e.assignedSlot:!d&&p!==e.ownerDocument?e=p.host:e=d}e=g}if(h)return!e.getClientRects().length}else if(r==="non-zero-area")return St(e);return!1},ir=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var n=e.parentElement;n;){if(n.tagName==="FIELDSET"&&n.disabled){for(var r=0;r<n.children.length;r++){var o=n.children.item(r);if(o.tagName==="LEGEND")return V.call(n,"fieldset[disabled] *")?!0:!o.contains(e)}return!0}n=n.parentElement}return!1},cr=function(e,n){return!(n.disabled||er(n)||ur(n,e)||tr(n)||ir(n))},It=function(e,n){return!(ar(n)||kt(n)<0||!cr(e,n))},sr=function(e){var n=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(n)||n>=0)},lr=function t(e){var n=[],r=[];return e.forEach(function(o,u){var a=!!o.scope,i=a?o.scope:o,h=kt(i,a),g=a?t(o.candidates):i;h===0?a?n.push.apply(n,g):n.push(i):r.push({documentOrder:u,tabIndex:h,item:o,isScope:a,content:g})}),r.sort(Jn).reduce(function(o,u){return u.isScope?o.push.apply(o,u.content):o.push(u.content),o},[]).concat(n)},_=function(e,n){n=n||{};var r;return n.getShadowRoot?r=Zn([e],n.includeContainer,{filter:It.bind(null,n),flatten:!1,getShadowRoot:n.getShadowRoot,shadowRootFilter:sr}):r=Gn(e,n.includeContainer,It.bind(null,n)),lr(r)};var q=A.forwardRef(function({unstable_skipInitialPortalRender:e,...n},r){return A.createElement(Ce,{unstable_skipInitialRender:e},A.createElement(Pt,{ref:r,...n}))});q.displayName="Popover";var Pt=A.forwardRef(function({as:e="div",targetRef:n,position:r=pr,unstable_observableRefs:o=[],...u},a){let i=A.useRef(null),h=se(i,{observe:!u.hidden}),g=se(n,{observe:!0}),d=ot(i,a);return hr(n,i),A.createElement(e,{"data-reach-popover":"",ref:d,...u,style:{position:"absolute",...fr(r,g,h,...o),...u.style}})});Pt.displayName="PopoverImpl";function fr(t,e,n,...r){return n?t(e,n,...r.map(o=>o.current)):{visibility:"hidden"}}function dr(t,e,n){return{top:n?`${t.top-e.height+self.pageYOffset}px`:`${t.top+t.height+self.pageYOffset}px`}}var pr=(t,e)=>{if(!t||!e)return{};let{directionRight:n,directionUp:r}=mr(t,e);return{left:n?`${t.right-e.width+self.pageXOffset}px`:`${t.left+self.pageXOffset}px`,...dr(t,e,r)}};function mr(t,e,n=0,r=0){let o={top:t.top-e.height<0,right:self.innerWidth<t.left+e.width-n,bottom:self.innerHeight<t.bottom+e.height-r,left:t.left+t.width-e.width<0},u=o.right&&!o.left,a=o.left&&!o.right,i=o.bottom&&!o.top,h=o.top&&!o.bottom;return{directionRight:u,directionLeft:a,directionUp:i,directionDown:h}}function hr(t,e){let n=at(t.current);function r(l){l.key==="Tab"&&e.current&&_(e.current).length===0||(l.key==="Tab"&&l.shiftKey?g(l)?d(l):p(l)?b(l):y(l)&&D():l.key==="Tab"&&(u()?a(l):i()?h(l):m(l)&&D()))}A.useEffect(()=>(n.addEventListener("keydown",r),()=>{n.removeEventListener("keydown",r)}),[]);function o(){let l=_(n),f=l&&t.current?l.indexOf(t.current):-1,k=l&&l[f+1];return e.current&&e.current.contains(k||null)?!1:k}function u(){return t.current?t.current===n.activeElement:!1}function a(l){let f=e.current&&_(e.current);f&&f[0]&&(l.preventDefault(),f[0].focus())}function i(){if(e.current?e.current.contains(n.activeElement||null):!1){let f=e.current&&_(e.current);return!!(f&&f[f.length-1]===n.activeElement)}return!1}function h(l){let f=o();f&&(l.preventDefault(),f.focus())}function g(l){if(!l.shiftKey)return;let f=o();return l.target===f}function d(l){let f=e.current&&_(e.current),k=f&&f[f.length-1];k&&(l.preventDefault(),k.focus())}function p(l){let f=e.current&&_(e.current);return f?f.length===0?!1:l.target===f[0]:!1}function b(l){l.preventDefault(),t.current?.focus()}function m(l){let f=e.current?_(n).filter(k=>!e.current.contains(k)):null;return f?l.target===f[f.length-1]:!1}function y(l){return l.target===_(n)[0]}let C=[];function D(){let l=e.current&&_(e.current);l&&(l.forEach(f=>{C.push([f,f.tabIndex]),f.tabIndex=-1}),n.addEventListener("focusin",x))}function x(){n.removeEventListener("focusin",x),C.forEach(([l,f])=>{l.tabIndex=f})}}v();E();var w=c(s(),1);v();E();var K=c(s(),1);v();E();var Mt=c(s(),1),Nt=c(s(),1),H=c(s(),1),At=c(s(),1),gr=c(s(),1),Me=c(s(),1),_t=c(s(),1),Wt=c(s(),1),le=c(s(),1),fe=c(s(),1),br=c(s(),1),pe=c(s(),1),Ne=c(s(),1),he=c(s(),1),Bt=c(s(),1);function Lt(){return!!(typeof self<"u"&&self.document&&self.document.createElement)}function L(t,e){return n=>{if(t&&t(n),!n.defaultPrevented)return e(n)}}function Pe(t){return!!(t&&{}.toString.call(t)=="[object Function]")}function Ot(t){return typeof t=="string"}function wr(t,e){if(t!=null)if(Pe(t))t(e);else try{t.current=e}catch{throw new Error(`Cannot assign value "${e}" to ref "${t}"`)}}function Q(...t){return(0,Nt.useCallback)(e=>{for(let n of t)wr(n,e)},t)}function G(t){return Lt()?t?t.ownerDocument:document:null}function $t(t,e){let n=H.createContext(e);function r(u){let{children:a,...i}=u,h=H.useMemo(()=>i,Object.values(i));return H.createElement(n.Provider,{value:h},a)}function o(u){let a=H.useContext(n);if(a)return a;if(e)return e;throw Error(`${u} must be rendered inside of a ${t} component.`)}return n.displayName=`${t}Context`,r.displayName=`${t}Provider`,[r,o]}function Z(t){return"which"in t?t.which===3:"button"in t?t.button===2:!1}function J(...t){return t.filter(e=>e!=null).join("--")}function Le(){}function Ft(){let[,t]=(0,le.useState)(Object.create(null));return(0,le.useCallback)(()=>{t(Object.create(null))},[])}var de=Lt()?fe.useLayoutEffect:fe.useEffect;function me(t){let e=(0,pe.useRef)(null);return(0,pe.useEffect)(()=>{e.current=t},[t]),e.current}function Ut(t,e){let[n,r]=(0,he.useState)(e),o=(0,he.useCallback)(u=>{t.current=u,r(u)},[]);return[n,o]}var Oe=!1,vr=0;function Ht(){return++vr}var jt=K.useId;function Xt(t){if(jt!==void 0){let o=jt();return t??o}let e=t??(Oe?Ht():null),[n,r]=K.useState(e);return de(()=>{n===null&&r(Ht())},[]),K.useEffect(()=>{Oe===!1&&(Oe=!0)},[]),t??n??void 0}v();E();var M=c(s(),1);function Kt(t,e={}){let r=M.createContext({descendants:[],registerDescendant:()=>Le,...e});return r.displayName=t,r}function zt(t,e,n){let r=Ft(),{registerDescendant:o,descendants:u}=M.useContext(e),a=n??u.findIndex(i=>i.element===t.element);return de(()=>(t.element||r(),o({...t,index:a})),[t,r,a,o,...Object.values(t)]),a}function Vt(){return M.useState([])}function qt(t){return M.useContext(t).descendants}function Qt({context:t,children:e,items:n,set:r}){let o=M.useCallback(({element:u,index:a,...i})=>u?(r(h=>{if(a!=null&&a!==-1)return Yt(h,{element:u,index:a,...i},a);if(h.length===0)return[{...i,element:u,index:0}];if(h.find(p=>p.element===u))return console.warn(`[reach-ui]: \`useDescendant\` was called with an element that was already registered.

If you are using the \`@reach/descendants\` package directly, make sure to only register descendants once. Registering a descendant more than once will lead to bugs in your app.

If you are using another \`reach-ui\` package, this is probably our bug!

To report a bug, open a new issue:

  https://github.com/reach/reach-ui/issues/new?assignees=&labels=&template=Bug_report.md

IMPORTANT: this check will only run in the development build, so if you see this warning please be aware that your app may crash when deployed.`),Rr(h);let g=Er(h,u),d;return g===-1?d=[...h,{...i,element:u,index:h.length}]:d=Yt(h,{...i,element:u,index:g},g),d}),()=>{u&&r(h=>h.filter(g=>u!==g.element))}):Le,[]);return M.createElement(t.Provider,{value:M.useMemo(()=>({descendants:n,registerDescendant:o}),[n,o])},e)}function Gt(t,e){let{descendants:n}=M.useContext(t),{callback:r,currentIndex:o,filter:u,key:a="index",orientation:i="vertical",rotate:h=!0,rtl:g=!1}=e;return function(p){if(!["ArrowDown","ArrowUp","ArrowLeft","ArrowRight","PageUp","PageDown","Home","End"].includes(p.key))return;let b=o??-1,m=u?n.filter(u):n;if(!m.length)return;let y=m.findIndex(f=>f.index===o);function C(){return b===l().index?h?x():m[y]:m[(y+1)%m.length]}function D(){return b===x().index?h?l():m[y]:m[(y-1+m.length)%m.length]}function x(){return m[0]}function l(){return m[m.length-1]}switch(p.key){case"ArrowDown":if(i==="vertical"||i==="both"){p.preventDefault();let I=C();r(a==="option"?I:I[a])}break;case"ArrowUp":if(i==="vertical"||i==="both"){p.preventDefault();let I=D();r(a==="option"?I:I[a])}break;case"ArrowLeft":if(i==="horizontal"||i==="both"){p.preventDefault();let I=(g?C:D)();r(a==="option"?I:I[a])}break;case"ArrowRight":if(i==="horizontal"||i==="both"){p.preventDefault();let I=(g?D:C)();r(a==="option"?I:I[a])}break;case"PageUp":p.preventDefault();let f=(p.ctrlKey?D:x)();r(a==="option"?f:f[a]);break;case"Home":p.preventDefault();let k=x();r(a==="option"?k:k[a]);break;case"PageDown":p.preventDefault();let W=(p.ctrlKey?C:l)();r(a==="option"?W:W[a]);break;case"End":p.preventDefault();let N=l();r(a==="option"?N:N[a]);break}}}function Zt(t,e){return!!(e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_PRECEDING)}function Er(t,e){if(!e||!t.length)return-1;let n=t.length;for(;n--;){let r=t[n].element;if(r&&Zt(r,e))return n+1}return-1}function Yt(t,e,n){return n==null||!(n in t)?[...t,e]:[...t.slice(0,n),e,...t.slice(n)]}function Rr(t){return t.sort((e,n)=>!e.element||!n.element?0:Zt(e.element,n.element)?-1:1).map((e,n)=>({...e,index:n}))}var Jt="CLEAR_SELECTION_INDEX",We="CLICK_MENU_ITEM",ee="CLOSE_MENU",yr="OPEN_MENU_AT_FIRST_ITEM",$e="OPEN_MENU_AT_INDEX",en="OPEN_MENU_CLEARED",Ae="SEARCH_FOR_ITEM",j="SELECT_ITEM_AT_INDEX",_e="SET_BUTTON_ID",ge=Kt("DropdownDescendantContext"),[Cr,z]=$t("Dropdown"),xr={triggerId:null,isExpanded:!1,typeaheadQuery:"",selectionIndex:-1},Fe=({id:t,children:e})=>{let n=w.useRef(null),r=w.useRef(null),o=w.useRef(null),[u,a]=Vt(),i=Xt(t),h=t||J("menu",i),g=J("menu-button",h),[d,p]=w.useReducer(Lr,{...xr,triggerId:g}),b=w.useRef(!1),m=w.useRef([]),y=w.useRef(!1),C=w.useRef({x:0,y:0});return w.useEffect(()=>{d.isExpanded?(self.__REACH_DISABLE_TOOLTIPS=!0,self.requestAnimationFrame(()=>{we(r.current)})):self.__REACH_DISABLE_TOOLTIPS=!1},[d.isExpanded]),w.createElement(Qt,{context:ge,items:u,set:a},w.createElement(Cr,{dispatch:p,dropdownId:h,dropdownRef:r,mouseDownStartPosRef:C,popoverRef:o,readyToSelect:y,selectCallbacks:m,state:d,triggerClickedRef:b,triggerRef:n},Pe(e)?e({isExpanded:d.isExpanded,isOpen:d.isExpanded}):e))};Fe.displayName="DropdownProvider";function Ue({onKeyDown:t,onMouseDown:e,id:n,ref:r,...o}){let{dispatch:u,dropdownId:a,mouseDownStartPosRef:i,triggerClickedRef:h,triggerRef:g,state:{triggerId:d,isExpanded:p}}=z("useDropdownTrigger"),b=Q(g,r),m=nn(),y=w.useMemo(()=>m.findIndex(x=>!x.disabled),[m]);w.useEffect(()=>{n!=null&&n!==d&&u({type:_e,payload:n})},[d,u,n]),w.useEffect(()=>{n==null&&u({type:_e,payload:J("menu-button",a)})},[a,u,n]);function C(x){switch(x.key){case"ArrowDown":case"ArrowUp":x.preventDefault(),u({type:$e,payload:{index:y}});break;case"Enter":case" ":u({type:$e,payload:{index:y}});break;default:break}}function D(x){Z(x.nativeEvent)||(i.current={x:x.clientX,y:x.clientY},p||(h.current=!0),u(p?{type:ee}:{type:en}))}return{data:{isExpanded:p,controls:a},props:{...o,ref:b,id:d||void 0,onKeyDown:L(t,C),onMouseDown:L(e,D),type:"button"}}}var Sr=w.forwardRef(({as:t="button",...e},n)=>{let{props:r}=Ue({...e,ref:n});return w.createElement(t,{"data-reach-dropdown-trigger":"",...r})});Sr.displayName="DropdownTrigger";function Be({index:t,isLink:e=!1,onClick:n,onDragStart:r,onMouseDown:o,onMouseEnter:u,onMouseLeave:a,onMouseMove:i,onMouseUp:h,onSelect:g,disabled:d,onFocus:p,valueText:b,ref:m,...y}){let{dispatch:C,dropdownRef:D,mouseDownStartPosRef:x,readyToSelect:l,selectCallbacks:f,triggerRef:k,state:{selectionIndex:W,isExpanded:N}}=z("useDropdownItem"),I=w.useRef(null),[Ee,vn]=w.useState(b||""),En=w.useCallback(S=>{!b&&S?.textContent&&vn(S.textContent)},[b]),te=w.useRef(!1),[Ge,Rn]=Ut(I,null),yn=w.useMemo(()=>({element:Ge,key:Ee,disabled:d,isLink:e}),[d,Ge,e,Ee]),F=zt(yn,ge,t),ne=F===W&&!d,Cn=Q(m,Rn,En);f.current[F]=g;function Ze(){we(k.current),g&&g(),C({type:We})}function xn(S){Z(S.nativeEvent)||e&&(d?S.preventDefault():Ze())}function Sn(S){e&&S.preventDefault()}function In(S){Z(S.nativeEvent)||(e?te.current=!0:S.preventDefault())}function Dn(S){let U=G(D.current);!ne&&F!=null&&!d&&(D?.current&&D.current!==U.activeElement&&I.current!==U.activeElement&&D.current.focus(),C({type:j,payload:{index:F}}))}function kn(S){C({type:Jt})}function Tn(S){if(!l.current){let U=8,Mn=Math.abs(S.clientX-x.current.x),Nn=Math.abs(S.clientY-x.current.y);(Mn>U||Nn>U)&&(l.current=!0)}!ne&&F!=null&&!d&&C({type:j,payload:{index:F,dropdownRef:D}})}function Pn(){l.current=!0,!ne&&F!=null&&!d&&C({type:j,payload:{index:F}})}function Ln(S){if(!Z(S.nativeEvent)){if(!l.current){l.current=!0;return}e?te.current?te.current=!1:I.current&&I.current.click():d||Ze()}}return w.useEffect(()=>{if(N){let S=self.setTimeout(()=>{l.current=!0},400);return()=>{self.clearTimeout(S)}}else l.current=!1},[N,l]),w.useEffect(()=>{let S=G(I.current);return S.addEventListener("mouseup",U),()=>{S.removeEventListener("mouseup",U)};function U(){te.current=!1}},[]),{data:{disabled:d},props:{id:tn(F),tabIndex:-1,...y,ref:Cn,"data-disabled":d?"":void 0,"data-selected":ne?"":void 0,"data-valuetext":Ee,onClick:L(n,xn),onDragStart:L(r,Sn),onMouseDown:L(o,In),onMouseEnter:L(u,Dn),onMouseLeave:L(a,kn),onMouseMove:L(i,Tn),onFocus:L(p,Pn),onMouseUp:L(h,Ln)}}}var Ir=w.forwardRef(({as:t="div",...e},n)=>{let{props:r}=Be({...e,ref:n});return w.createElement(t,{"data-reach-dropdown-item":"",...r})});Ir.displayName="DropdownItem";function He({id:t,onKeyDown:e,ref:n,...r}){let{dispatch:o,triggerRef:u,dropdownRef:a,selectCallbacks:i,dropdownId:h,state:{isExpanded:g,triggerId:d,selectionIndex:p,typeaheadQuery:b}}=z("useDropdownItems"),m=nn(),y=Q(a,n);w.useEffect(()=>{let f=Tr(m,b);b&&f!=null&&o({type:j,payload:{index:f,dropdownRef:a}});let k=self.setTimeout(()=>b&&o({type:Ae,payload:""}),1e3);return()=>self.clearTimeout(k)},[o,m,b,a]);let C=me(m.length),D=me(m[p]),x=me(p);w.useEffect(()=>{p>m.length-1?o({type:j,payload:{index:m.length-1,dropdownRef:a}}):C!==m.length&&p>-1&&D&&x===p&&m[p]!==D&&o({type:j,payload:{index:m.findIndex(f=>f.key===D?.key),dropdownRef:a}})},[a,o,m,C,D,x,p]);let l=L(function(k){let{key:W}=k;if(g)switch(W){case"Enter":case" ":let N=m.find(I=>I.index===p);N&&!N.disabled&&(k.preventDefault(),N.isLink&&N.element?N.element.click():(we(u.current),i.current[N.index]&&i.current[N.index](),o({type:We})));break;case"Escape":we(u.current),o({type:ee});break;case"Tab":k.preventDefault();break;default:if(Ot(W)&&W.length===1){let I=b+W.toLowerCase();o({type:Ae,payload:I})}break}},Gt(ge,{currentIndex:p,orientation:"vertical",rotate:!1,filter:f=>!f.disabled,callback:f=>{o({type:j,payload:{index:f,dropdownRef:a}})},key:"index"}));return{data:{activeDescendant:tn(p)||void 0,triggerId:d},props:{tabIndex:-1,...r,ref:y,id:h,onKeyDown:L(e,l)}}}var Dr=w.forwardRef(({as:t="div",...e},n)=>{let{props:r}=He({...e,ref:n});return w.createElement(t,{"data-reach-dropdown-items":"",...r})});Dr.displayName="DropdownItems";function je({onBlur:t,portal:e=!0,position:n,ref:r,...o}){let{triggerRef:u,triggerClickedRef:a,dispatch:i,dropdownRef:h,popoverRef:g,state:{isExpanded:d}}=z("useDropdownPopover"),p=Q(g,r);return w.useEffect(()=>{if(!d)return;let b=G(g.current);function m(y){a.current?a.current=!1:Pr(g.current,y.target)||i({type:ee})}return b.addEventListener("mousedown",m),()=>{b.removeEventListener("mousedown",m)}},[a,u,i,h,g,d]),{data:{portal:e,position:n,targetRef:u,isExpanded:d},props:{ref:p,hidden:!d,onBlur:L(t,b=>{b.currentTarget.contains(b.relatedTarget)||i({type:ee})}),...o}}}var kr=w.forwardRef(({as:t="div",...e},n)=>{let{data:{portal:r,targetRef:o,position:u},props:a}=je({...e,ref:n}),i={"data-reach-dropdown-popover":""};return r?w.createElement(q,{...a,...i,as:t,targetRef:o,position:u,unstable_skipInitialPortalRender:!0}):w.createElement(t,{...a,...i})});kr.displayName="DropdownPopover";function Tr(t,e=""){if(!e)return null;let n=t.find(r=>r.disabled?!1:r.element?.dataset?.valuetext?.toLowerCase().startsWith(e));return n?t.indexOf(n):null}function tn(t){let{dropdownId:e}=z("useItemId");return t!=null&&t>-1?J(`option-${t}`,e):void 0}function we(t){t&&t.focus()}function Pr(t,e){return!!(t&&t.contains(e))}function Lr(t,e={}){switch(e.type){case We:return{...t,isExpanded:!1,selectionIndex:-1};case ee:return{...t,isExpanded:!1,selectionIndex:-1};case yr:return{...t,isExpanded:!0,selectionIndex:0};case $e:return{...t,isExpanded:!0,selectionIndex:e.payload.index};case en:return{...t,isExpanded:!0,selectionIndex:-1};case j:{let{dropdownRef:n={current:null}}=e.payload;if(e.payload.index>=0&&e.payload.index!==t.selectionIndex){if(n.current){let r=G(n.current);n.current!==r?.activeElement&&n.current.focus()}return{...t,selectionIndex:e.payload.max!=null?Math.min(Math.max(e.payload.index,0),e.payload.max):Math.max(e.payload.index,0)}}return t}case Jt:return{...t,selectionIndex:-1};case _e:return{...t,triggerId:e.payload};case Ae:return typeof e.payload<"u"?{...t,typeaheadQuery:e.payload}:t;default:return t}}function nn(){return qt(ge)}v();E();var rn=c(s(),1),Nr=c(s(),1),be=c(s(),1),on=c(s(),1),Or=c(s(),1),Xe=c(s(),1),un=c(s(),1),cn=c(s(),1),sn=c(s(),1),ve=c(s(),1),$r=c(s(),1),ln=c(s(),1),Ye=c(s(),1),fn=c(s(),1),dn=c(s(),1);function Mr(){return!!(typeof self<"u"&&self.document&&self.document.createElement)}function an(){}var $o=Mr()?ve.useLayoutEffect:ve.useEffect;var pn=c($n(),1);var Ke=R.forwardRef(({as:t=R.Fragment,id:e,children:n,...r},o)=>{let a=R.useMemo(()=>{try{return(0,pn.isFragment)(R.createElement(t,null))}catch{return!1}},[t])?{}:{ref:o,id:e,"data-reach-menu":"",...r};return R.createElement(t,{...a},R.createElement(Fe,{id:e,children:n}))});Ke.displayName="Menu";var ze=R.forwardRef(({as:t="button",...e},n)=>{let{data:{isExpanded:r,controls:o},props:u}=Ue({...e,ref:n});return R.createElement(t,{"aria-expanded":r?!0:void 0,"aria-haspopup":!0,"aria-controls":o,...u,"data-reach-menu-button":""})});ze.displayName="MenuButton";var Ve=R.forwardRef(({as:t="div",...e},n)=>{let{data:{disabled:r},props:o}=Be({...e,ref:n});return R.createElement(t,{role:"menuitem",...o,"aria-disabled":r||void 0,"data-reach-menu-item":""})});Ve.displayName="MenuItemImpl";var qe=R.forwardRef(({as:t="div",...e},n)=>R.createElement(Ve,{...e,ref:n,as:t}));qe.displayName="MenuItem";var mn=R.forwardRef(({as:t="div",...e},n)=>{let{data:{activeDescendant:r,triggerId:o},props:u}=He({...e,ref:n});return R.createElement(t,{"aria-activedescendant":r,"aria-labelledby":o||void 0,role:"menu",...u,"data-reach-menu-items":""})});mn.displayName="MenuItems";var Ar=R.forwardRef(({as:t="a",component:e,onSelect:n,...r},o)=>(R.useEffect(()=>{e&&console.warn("[@reach/menu-button]: Please use the `as` prop instead of `component`")},[e]),R.createElement(Ve,{...r,ref:o,"data-reach-menu-link":"",as:t,isLink:!0,onSelect:n||an})));Ar.displayName="MenuLink";var Qe=R.forwardRef(({portal:t=!0,...e},n)=>R.createElement(hn,{portal:t},R.createElement(mn,{...e,ref:n,"data-reach-menu-list":""})));Qe.displayName="MenuList";var hn=R.forwardRef(({as:t="div",...e},n)=>{let{data:{portal:r,targetRef:o,position:u},props:a}=je({...e,ref:n}),i={"data-reach-menu-popover":""};return r?R.createElement(q,{...a,...i,as:t,targetRef:o,position:u,unstable_skipInitialPortalRender:!0}):R.createElement(t,{...a,...i})});hn.displayName="MenuPopover";var T=c(s());var wn=Y(Qe)`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: ${X.colors.legacy.areaAccent};
  border-radius: 6px;
  padding: 10px 17px;
  margin-top: 4px;
  width: ${t=>t.width};

  /* this is needed for the dropdown to correctly overlay on our settings popups */
  z-index: 999;
  position: relative;
`,gn=Y.div`
  overflow: scroll;
  max-height: ${t=>t.maxHeight};
`,bn=Y(qe)`
  font-size: 16px;
  padding: 7px 0px;
  display: flex;
  color: ${t=>t.variant==="warning"?X.colors.legacy.spotNegative:X.colors.legacy.textBase};
  justify-content: space-between;
  ${t=>{let e=t.variant==="warning"?X.colors.legacy.spotNegative:X.colors.legacy.spotBase;return Je`
      &[data-selected] {
        background: inherit;
        color: ${e};
        p {
          color: ${e};
        }
      }
    `}}
`,_r=Y(bn)`
  padding: 0;
`,Wr=Y.div`
  width: 100%;
  margin: 6px 0px;
  border-bottom: 1px solid ${X.colors.legacy.borderDiminished};
`,ea=({icon:t,items:e,sections:n,onIconClick:r,className:o,children:u,dropdownWidth:a="250px",noDropdownItemPadding:i=!1,disableIconBackground:h=!1})=>{let g="330px",d=(0,T.useMemo)(()=>i?_r:bn,[i]);return T.default.createElement(Ke,null,({isExpanded:p})=>T.default.createElement(T.default.Fragment,null,T.default.createElement(ze,{as:"span",className:o,onClick:r},t?h?t:T.default.createElement(et,{isActive:e&&p},t):u),n?T.default.createElement(wn,{width:a},T.default.createElement(gn,{maxHeight:g},n.map((b,m)=>b.data.length?T.default.createElement("div",{key:b.key},b.data.map((y,C)=>T.default.createElement(d,{"data-testid":`dropdown-section-${m}-item-${C}`,key:y.key,onSelect:y.onClick,variant:y.variant},y.label)),m!==n.length-1?T.default.createElement(Wr,null):null):null))):null,e?T.default.createElement(wn,{width:a},T.default.createElement(gn,{maxHeight:g},e.map((b,m)=>T.default.createElement(d,{"data-testid":`dropdown-item-${m}`,key:b.key,onSelect:b.onClick,variant:b.variant},b.label)))):null))};export{wt as a,ea as b};
/*! Bundled license information:

@reach/utils/dist/reach-utils.mjs:
  (**
    * @reach/utils v0.18.0
    *
    * Copyright (c) 2018-2022, React Training LLC
    *
    * This source code is licensed under the MIT license found in the
    * LICENSE.md file in the root directory of this source tree.
    *
    * @license MIT
    *)

@reach/portal/dist/reach-portal.mjs:
  (**
    * @reach/portal v0.18.0
    *
    * Copyright (c) 2018-2022, React Training LLC
    *
    * This source code is licensed under the MIT license found in the
    * LICENSE.md file in the root directory of this source tree.
    *
    * @license MIT
    *)

@reach/utils/dist/reach-utils.mjs:
  (**
    * @reach/utils v0.18.0
    *
    * Copyright (c) 2018-2022, React Training LLC
    *
    * This source code is licensed under the MIT license found in the
    * LICENSE.md file in the root directory of this source tree.
    *
    * @license MIT
    *)

@reach/rect/dist/reach-rect.mjs:
  (**
    * @reach/rect v0.18.0
    *
    * Copyright (c) 2018-2022, React Training LLC
    *
    * This source code is licensed under the MIT license found in the
    * LICENSE.md file in the root directory of this source tree.
    *
    * @license MIT
    *)

tabbable/dist/index.esm.js:
  (*!
  * tabbable 5.3.3
  * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
  *)

@reach/popover/dist/reach-popover.mjs:
  (**
    * @reach/popover v0.18.0
    *
    * Copyright (c) 2018-2022, React Training LLC
    *
    * This source code is licensed under the MIT license found in the
    * LICENSE.md file in the root directory of this source tree.
    *
    * @license MIT
    *)

@reach/utils/dist/reach-utils.mjs:
  (**
    * @reach/utils v0.18.0
    *
    * Copyright (c) 2018-2022, React Training LLC
    *
    * This source code is licensed under the MIT license found in the
    * LICENSE.md file in the root directory of this source tree.
    *
    * @license MIT
    *)

@reach/auto-id/dist/reach-auto-id.mjs:
  (**
    * @reach/auto-id v0.18.0
    *
    * Copyright (c) 2018-2022, React Training LLC
    *
    * This source code is licensed under the MIT license found in the
    * LICENSE.md file in the root directory of this source tree.
    *
    * @license MIT
    *)

@reach/descendants/dist/reach-descendants.mjs:
  (**
    * @reach/descendants v0.18.0
    *
    * Copyright (c) 2018-2022, React Training LLC
    *
    * This source code is licensed under the MIT license found in the
    * LICENSE.md file in the root directory of this source tree.
    *
    * @license MIT
    *)

@reach/dropdown/dist/reach-dropdown.mjs:
  (**
    * @reach/dropdown v0.18.0
    *
    * Copyright (c) 2018-2022, React Training LLC
    *
    * This source code is licensed under the MIT license found in the
    * LICENSE.md file in the root directory of this source tree.
    *
    * @license MIT
    *)

@reach/utils/dist/reach-utils.mjs:
  (**
    * @reach/utils v0.18.0
    *
    * Copyright (c) 2018-2022, React Training LLC
    *
    * This source code is licensed under the MIT license found in the
    * LICENSE.md file in the root directory of this source tree.
    *
    * @license MIT
    *)

@reach/menu-button/dist/reach-menu-button.mjs:
  (**
    * @reach/menu-button v0.18.0
    *
    * Copyright (c) 2018-2022, React Training LLC
    *
    * This source code is licensed under the MIT license found in the
    * LICENSE.md file in the root directory of this source tree.
    *
    * @license MIT
    *)
*/
//# sourceMappingURL=chunk-BUTFRTU6.js.map

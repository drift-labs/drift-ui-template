import{l as V,s as E}from"./chunk-AARL76MY.js";import{na as B,ya as M}from"./chunk-XZRRLELF.js";import{g as _,i as O}from"./chunk-TALMQQTZ.js";import{c as H}from"./chunk-HX3WMS5S.js";import{_ as $}from"./chunk-YITPJN7X.js";import{b as x}from"./chunk-6N4GZCP2.js";import{c as w,da as L,ea as N,l as d,m as o}from"./chunk-FVUSQHVT.js";import{c as D,ya as v}from"./chunk-BEUYJGED.js";import{f as y,h as m,n as c}from"./chunk-64CIGK2X.js";m();c();var e=y(D());m();c();var f=y(D());var U=5,S=5,p=2,q=S+2*p,A=14,z=A+2*p,W=S+2*p,F=o.div`
  display: flex;
  justify-content: ${t=>t.shouldCenter?"center":"flex-start"};
  align-items: center;
  position: relative;
  overflow: hidden;
  width: ${t=>(t.maxVisible-1)*q+z}px;
`,J=o.div`
  align-items: center;
  display: flex;
  ${t=>t.shouldShift&&d`
      transform: translateX(calc(-${W}px * ${t.shiftAmount}));
      transition: transform 0.3s ease-in-out;
    `}
`,Q=o.div`
  align-items: center;
  background-color: ${v.colors.legacy.textDiminished};
  border-radius: 95px;
  display: flex;
  height: ${U}px;
  justify-content: center;
  margin: 0 ${p}px;
  min-width: ${S}px;
  transition: all 0.3s ease-in-out;
  ${t=>t.isActive&&d`
      min-width: ${A}px;
    `}
  ${t=>t.isSmall&&d`
      min-width: 3px;
      margin: 0 ${p}px;
      height: 3px;
    `}
`,Y=o.div`
  width: ${A}px;
  height: ${U}px;
  border-radius: 95px;
  position: absolute;
  margin: 0 ${p}px;
  background-color: ${v.colors.legacy.spotBase};
  transition: transform 0.3s ease-in-out;
  ${t=>t.position&&d`
      transform: translateX(${t.position*W}px);
    `}
`,Z=({numOfItems:t,currentIndex:i,maxVisible:a=5})=>{let n=t>a?i>a-3:!1,r=n?i-(a-3):0;return f.default.createElement(F,{shouldCenter:a>t,maxVisible:a},f.default.createElement(J,{shouldShift:n,shiftAmount:r},Array.from({length:t}).map((k,l)=>{let h=(l===i-2||l===i+2)&&n;return f.default.createElement(Q,{key:`pagination-dot-${l}`,isActive:i===l,isSmall:h})}),f.default.createElement(Y,{position:i})))},j=Z;var R=o.div`
  height: 0;
  transition: height 0.2s ease-in-out;
  width: 100%;
  ${t=>t.animate?`height: ${t.shouldCollapse?t.itemHeight+26:t.itemHeight+46}px`:""}
`,tt=o.div`
  transition: transform 0.5s ease;
  width: 100%;
`,K=o(H)``,X=o.div`
  visibility: ${t=>t.isVisible?"visible":"hidden"};
`,et=o.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`,nt=o.ul`
  align-items: center;
  display: flex;
  margin-bottom: 8px;
  transition: transform 0.5s ease;
  transform: ${t=>`translateX(${t.currentIndex*-100}%)`};
`,it=o.li`
  align-items: center;
  display: flex;
  flex: 0 0 100%;
  padding: ${t=>t.isActive?"0":t.isNext||t.isPrevious?"0 6px":"0"};
  height: ${t=>t.isActive?t.itemHeight:.9*t.itemHeight}px; /* 0.9 is taken from parallaxAdjacentItemScale from the carousel on mobile */
`,dt=({items:t,onIndexChange:i,itemHeight:a})=>{let[n,r]=(0,e.useState)(0),k=(0,e.useCallback)(()=>{r(s=>s+1)},[]),l=(0,e.useCallback)(()=>{r(s=>s-1)},[]),h=n<t.length-1,b=n>0;(0,e.useEffect)(()=>{!t.length||n>t.length-1||i(n)},[t,i,n]),(0,e.useEffect)(()=>{t.length>0&&n>=t.length&&r(t.length-1)},[n,t]);let C=t.length<=1;return e.default.createElement(R,{animate:t.length>0,shouldCollapse:C,itemHeight:a},e.default.createElement(tt,null,e.default.createElement(nt,{currentIndex:n},t.map((s,g)=>e.default.createElement(it,{key:s.key,isActive:n===g,isNext:n+1===g,isPrevious:n-1===g,itemHeight:a},s.node))),!C&&e.default.createElement(et,null,e.default.createElement(X,{isVisible:b},e.default.createElement(K,{onClick:l},e.default.createElement(L,null))),e.default.createElement(j,{numOfItems:t.length,currentIndex:n,maxVisible:5}),e.default.createElement(X,{isVisible:h},e.default.createElement(K,{onClick:k},e.default.createElement(N,null))))))};m();c();var u=y(D());m();c();var G=t=>{if(t==="Settings: Security & Privacy")return E;if(t==="Settings: Currency")return V};var at=u.default.lazy(()=>import("./FungibleDetailPage-VOMF4D7W.js")),Bt=()=>{let{showSettingsMenu:t}=O(),{handleShowModalVisibility:i}=M(),{pushDetailView:a}=_(),n=$(),r=w();return(0,u.useCallback)((l,h)=>{let{destinationType:b,url:C,caip19:s,tokenCategoryId:g,tokenCategoryName:T}=h;switch(b){case"External Link":x({url:C});break;case"Buy":i("onramp");break;case"Collectibles":r("/",{state:{defaultTab:"collectibles",nonce:Date.now()}});break;case"Explore":r("/explore");break;case"Token Category":{if(!g||!T)return;a(u.default.createElement(B,{category:{id:g,name:T}}));break}case"Swapper":r("/swap");break;case"Settings: Claim Username":i("quickClaimUsername");break;case"Settings: Import Seed Phrase":x({url:"onboarding.html?append=true"});break;case"Connect Hardware Wallet":x({url:"connect_hardware.html"});break;case"Convert to Jito":i(n?"mintPSOLUKInfo":"mintPSOLInfo",{presentNext:!0});break;case"Token":{if(!s)return;a(u.default.createElement(at,{caip19:s,title:void 0,entryPoint:"actionBanner"}));break}default:{let I=G(b);if(!I)return;t(l,u.default.createElement(I,null))}}},[r,t,i,a,n])};export{Bt as a,dt as b};
//# sourceMappingURL=chunk-UDK5WD55.js.map

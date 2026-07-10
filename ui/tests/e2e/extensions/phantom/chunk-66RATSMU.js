import{h as q}from"./chunk-26BEY7UU.js";import{b as E}from"./chunk-IRT22BM2.js";import{a as A}from"./chunk-CEYX4EEL.js";import{W as N}from"./chunk-Q2MU5Q7Q.js";import{c as z}from"./chunk-Y6JOYO4T.js";import{I as P,db as p,ha as U,m as e}from"./chunk-FABKKW5E.js";import{Q as D,U as K}from"./chunk-PJ6PRBE2.js";import{Ba as $,X as L,Ya as W,c as h,wa as V,ya as n}from"./chunk-UTOBJRXZ.js";import{f as b,h as a,n as l}from"./chunk-SVG5OEFH.js";a();l();var s=b(h());var Q=e.div`
  position: relative;
  width: 100%;
`,Y=e.div`
  position: absolute;
  right: 12px;
  top: calc(50% - 27px / 2);
  display: flex;
  align-items: center;
`,_=e(p)`
  margin-right: ${t=>`calc(120px - (${t.textLength}px * 5))`};
`,G=e(p)`
  margin-right: 10px;
`,J=e(z)`
  height: 27px;
`,X=e.div`
  position: relative;
  width: 100%;
  padding: 0px 8px;
  overflow: hidden;
  text-overflow: ellipsis;
`,pt=({symbol:t,alignSymbol:d,buttonText:c,width:m,borderRadius:u,onSetTarget:f,targetButtonDisabled:y,placeholder:x,...o})=>{let{t:C}=L(),k=o.value.toString().length;return s.default.createElement(Q,null,s.default.createElement(q,{placeholder:x??C("maxInputAmount"),borderRadius:u,...o}),s.default.createElement(Y,null,d==="left"?s.default.createElement(_,{size:16,textLength:k,color:n.colors.legacy.textDiminished},t):s.default.createElement(G,{size:16,color:n.colors.legacy.textDiminished},t),s.default.createElement(J,{disabled:y,fontSize:13,width:`${m}px`,borderRadius:"100px",paddingY:4,onClick:f},s.default.createElement(X,null,c))))};a();l();var i=b(h());var Z=e.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${t=>t.color};
  height: ${t=>t.width}px;
  min-width: ${t=>t.width}px;
  border-radius: 6px;
`,R=e.img`
  border-radius: ${t=>t.shape==="square"?"0":"50%"};
  height: ${t=>t.width}px;
  width: ${t=>t.width}px;
`,F=i.default.memo(({alt:t,backgroundColor:d=n.colors.legacy.areaBase,className:c,defaultIcon:m,iconUrl:u,localImageSource:f,questionMarkWidth:y,shape:x="circle",width:o})=>{let[C,k]=(0,i.useState)(!1),[T,H]=(0,i.useState)(!1),O=()=>{k(!0)},M=()=>{H(!0)},g=u;u&&o?g=W(u,o,o):f&&(g=f);let w=C?"clear":d,S=g?i.default.createElement(R,{src:g,alt:t,width:o,shape:x,loading:"lazy",onLoad:O,onError:M}):null,B=m||i.default.createElement(P,{width:y});return x==="square"?i.default.createElement(Z,{className:c,color:w,width:o},g&&!T?S:B):i.default.createElement(E,{className:c,color:w,diameter:o},g&&!T?S:B)});a();l();var r=b(h());var Vt=t=>{let{data:d}=N(t.keybaseUsername),c=t.name??t.keybaseUsername??t.identifier;return r.default.createElement(et,null,r.default.createElement(rt,null,r.default.createElement(nt,{width:28,iconUrl:t.iconUrl??d}),r.default.createElement(p,{textAlign:"left",weight:600,size:16,noWrap:!0},c),t.website&&r.default.createElement(ot,{href:t.website},r.default.createElement(U,null)),t.onInfoClick&&r.default.createElement("div",{className:tt.infoContainer,onClick:t.onInfoClick},r.default.createElement($.InfoCircle,{size:16,color:"textIncidental"}))),r.default.createElement(it,null,t.data.map(m=>r.default.createElement(at,{key:m.label},r.default.createElement(p,{textAlign:"left",color:n.colors.legacy.textDiminished,size:14,lineHeight:17,noWrap:!0},m.label),m.value))))},tt={infoContainer:V({cursor:"pointer"})},et=e.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 47px auto;
  align-items: center;
  justify-content: flex-start;
  background: ${n.colors.legacy.elementBase};
  width: 100%;
  border-radius: 6px;
  margin-top: 12px;
`,rt=e.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 33px 1fr auto;
  align-items: center;
  padding: 9px 14px;
  border-bottom: 0.5px solid ${n.colors.legacy.borderBase};
`,ot=e.a.attrs({target:"_blank",rel:"noopener noreferrer"})`
  margin-left: auto;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
`,nt=e(F)``,it=e.section`
  padding: 14px;
`,at=e.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 36px;
`;a();l();var v=b(h()),j=(t,d)=>A(D(typeof t=="string"?Number(t):t),d),Ut=t=>typeof t.children>"u"?null:v.default.createElement(v.default.Fragment,null,j(t.children,t.format)," SOL"),zt=t=>typeof t.balance>"u"?null:`${j(t.balance,t.format)} SOL`;export{pt as a,F as b,Vt as c,Ut as d,zt as e};
//# sourceMappingURL=chunk-66RATSMU.js.map

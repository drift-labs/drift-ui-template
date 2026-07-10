import{a as T}from"./chunk-6BLAMF36.js";import{a as D}from"./chunk-2DLZSCTQ.js";import{e as H,f as F,g as q}from"./chunk-SAN2LWG5.js";import{a as V}from"./chunk-75HMBX3C.js";import{a as P}from"./chunk-IRT22BM2.js";import{Ca as S}from"./chunk-Q2MU5Q7Q.js";import{q as E}from"./chunk-CCUQPG33.js";import{a as b,c as f,e as v}from"./chunk-Y6JOYO4T.js";import{db as B,m as c}from"./chunk-FABKKW5E.js";import{Ca as A,Da as k,Ia as x,Ma as y,c as w,ya as m}from"./chunk-UTOBJRXZ.js";import{f as L,h as u,n as g}from"./chunk-SVG5OEFH.js";u();g();var d=L(w());u();g();var t=L(w());var I=c.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: ${r=>r.addScreenPadding?"16px":"0"};
`,G=c.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`,N=c.div`
  width: 100%;
  > * {
    margin-top: 10px;
  }
  padding: 16px;
`,O=c(V).attrs({align:"center",justify:"center",margin:"0 0 15px 0"})`
  position: relative;
  border-radius: 50%;
  background-color: ${P(m.colors.legacy.spotBase,.2)};
  box-shadow: 0 0 0 20px ${P(m.colors.legacy.spotBase,.2)};
`,W=c(B).attrs({size:28,weight:500,color:m.colors.legacy.textBase})`
  margin-top: 24px;
  margin-left: 12px;
  margin-right: 12px;
`,X=()=>t.default.createElement(O,null,t.default.createElement(b,{diameter:54,color:m.colors.legacy.spotBase,trackColor:m.colors.legacy.areaAccent})),z=({message:r})=>t.default.createElement(A,{marginX:12,alignItems:"center"},Array.isArray(r)?r.map((i,o)=>t.default.createElement(k,{key:`message-${o}`,font:"body",color:"textDiminished",align:"center",marginX:12,marginTop:16},i)):t.default.createElement(k,{font:"body",marginTop:16,color:"textDiminished",align:"center"},r)),C=({header:r,icon:i,title:o,message:e,txHash:a,txHashTitle:s,isClosable:n,primaryButton:p,secondaryButton:l})=>t.default.createElement(I,null,r,t.default.createElement(G,null,t.default.createElement(x,{mode:"wait",initial:!0},t.default.createElement(y.div,{key:o,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2}},i)),t.default.createElement(W,null,o),t.default.createElement(z,{message:e}),a&&t.default.createElement(x,{mode:"wait",initial:!1},t.default.createElement(y.div,{key:a,initial:{opacity:0,y:16},animate:{opacity:1,y:0},exit:{opacity:0},transition:{duration:.2}},t.default.createElement(D,{txHash:a},s)))),n?t.default.createElement(N,null,l&&p?t.default.createElement(v,{buttons:[{text:l.title,onClick:l.onPress},{theme:"primary",text:p.title,onClick:p.onPress}]}):p?t.default.createElement(f,{theme:"primary",onClick:p.onPress},p.title):l?t.default.createElement(f,{onClick:l.onPress},l.title):null):null),K=({ledgerAction:r,numberOfTransactions:i,cancel:o,ledgerApp:e})=>t.default.createElement(I,{addScreenPadding:!0},t.default.createElement(F,{ledgerAction:r,numberOfTransactions:i,cancel:o,ledgerApp:e})),U=({title:r,message:i,txHash:o,txHashTitle:e,primaryButton:a,showUKDisclaimer:s,openExternalLink:n})=>t.default.createElement(C,{icon:t.default.createElement(X,null),message:i,title:r,txHash:o,txHashTitle:e,primaryButton:a,isClosable:!!o,header:s&&n?t.default.createElement(S,{navigateToExternalLink:n,paddingTop:8}):null}),h=({title:r,message:i,txHash:o,txHashTitle:e,primaryButton:a,showUKDisclaimer:s,openExternalLink:n})=>t.default.createElement(C,{icon:t.default.createElement(T,{type:"failure"}),message:i,title:r,txHash:o,txHashTitle:e,primaryButton:a,isClosable:!0,header:s&&n?t.default.createElement(S,{navigateToExternalLink:n,paddingTop:8}):null}),$=({title:r,message:i,txHash:o,txHashTitle:e,primaryButton:a,secondaryButton:s,showUKDisclaimer:n,openExternalLink:p})=>t.default.createElement(C,{icon:t.default.createElement(T,{type:"success"}),title:r,message:i,txHash:o,txHashTitle:e,isClosable:!0,primaryButton:a,secondaryButton:s,header:n&&p?t.default.createElement(S,{navigateToExternalLink:p,paddingTop:8}):null});var M=({txError:r,addressType:i,statusPageProps:o,executeConvertStake:e,onClose:a})=>H(r)?d.default.createElement(q,{ledgerActionError:r,onRetryClick:e,onCancelClick:a}):o.type==="error"?d.default.createElement(h,{...o}):d.default.createElement(K,{ledgerAction:e,numberOfTransactions:1,cancel:a,ledgerApp:E(i)}),ut=d.default.memo(r=>{let{addressType:i,isLedger:o,statusPageProps:e,txError:a,onClose:s,executeLiquidStake:n}=r;if(o&&!e.txHash)return d.default.createElement(M,{txError:a,addressType:i,statusPageProps:e,executeConvertStake:n,onClose:s});switch(e.type){case"loading":return d.default.createElement(U,{...e});case"error":return d.default.createElement(h,{...e});case"success":return d.default.createElement($,{title:e.title,txHash:e.txHash,txHashTitle:e.txHashTitle,primaryButton:e.primaryButton,secondaryButton:e.secondaryButton,message:e.message,paddingBottom:e.paddingBottom,showUKDisclaimer:e.showUKDisclaimer,openExternalLink:e.openExternalLink});default:throw new Error("Unsupported status page type")}});export{ut as a};
//# sourceMappingURL=chunk-Y3XFVRHK.js.map

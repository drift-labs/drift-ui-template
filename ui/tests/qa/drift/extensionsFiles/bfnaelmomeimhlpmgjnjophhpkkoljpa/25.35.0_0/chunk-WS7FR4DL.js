import{a as T}from"./chunk-BMSAIRR2.js";import{a as O}from"./chunk-YY4B3XV7.js";import{e as q,f as D,g as K}from"./chunk-GROXNBTY.js";import{a as F}from"./chunk-WF3NVBQY.js";import{a as P}from"./chunk-S32BDL22.js";import{za as g}from"./chunk-YITPJN7X.js";import{q as v}from"./chunk-CQIC5IDD.js";import{a as B,c as f,e as V}from"./chunk-ZTFOFBVC.js";import{db as H,m}from"./chunk-FVUSQHVT.js";import{b}from"./chunk-4BKJE7YB.js";import{Ca as E,Da as k,Ia as x,Ma as y,c as A,ya as u}from"./chunk-BEUYJGED.js";import{f as w,h as c,n as S}from"./chunk-64CIGK2X.js";c();S();var p=w(A());c();S();var t=w(A());var $=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: ${r=>r.addScreenPadding?"16px":"0"};
`,G=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`,N=m.div`
  width: 100%;
  > * {
    margin-top: 10px;
  }
  padding: 16px;
`,W=m(F).attrs({align:"center",justify:"center",margin:"0 0 15px 0"})`
  position: relative;
  border-radius: 50%;
  background-color: ${P(u.colors.legacy.spotBase,.2)};
  box-shadow: 0 0 0 20px ${P(u.colors.legacy.spotBase,.2)};
`,X=m(H).attrs({size:28,weight:500,color:u.colors.legacy.textBase})`
  margin-top: 24px;
  margin-left: 12px;
  margin-right: 12px;
`,z=()=>t.default.createElement(W,null,t.default.createElement(B,{diameter:54,color:u.colors.legacy.spotBase,trackColor:u.colors.legacy.areaAccent})),_=({message:r})=>t.default.createElement(E,{marginX:12,alignItems:"center"},Array.isArray(r)?r.map((i,o)=>t.default.createElement(k,{key:`message-${o}`,font:"body",color:"textDiminished",align:"center",marginX:12,marginTop:16},i)):t.default.createElement(k,{font:"body",marginTop:16,color:"textDiminished",align:"center"},r)),h=({header:r,icon:i,title:o,message:n,txHash:e,txHashTitle:l,isClosable:a,primaryButton:s,secondaryButton:d})=>t.default.createElement($,null,r,t.default.createElement(G,null,t.default.createElement(x,{mode:"wait",initial:!0},t.default.createElement(y.div,{key:o,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2}},i)),t.default.createElement(X,null,o),t.default.createElement(_,{message:n}),e&&t.default.createElement(x,{mode:"wait",initial:!1},t.default.createElement(y.div,{key:e,initial:{opacity:0,y:16},animate:{opacity:1,y:0},exit:{opacity:0},transition:{duration:.2}},t.default.createElement(O,{txHash:e},l)))),a?t.default.createElement(N,null,d&&s?t.default.createElement(V,{buttons:[{text:d.title,onClick:d.onPress},{theme:"primary",text:s.title,onClick:s.onPress}]}):s?t.default.createElement(f,{theme:"primary",onClick:s.onPress},s.title):d?t.default.createElement(f,{onClick:d.onPress},d.title):null):null),I=({ledgerAction:r,numberOfTransactions:i,cancel:o,ledgerApp:n})=>t.default.createElement($,{addScreenPadding:!0},t.default.createElement(D,{ledgerAction:r,numberOfTransactions:i,cancel:o,ledgerApp:n})),M=({title:r,message:i,txHash:o,txHashTitle:n,primaryButton:e,showUKDisclaimer:l,openExternalLink:a})=>t.default.createElement(h,{icon:t.default.createElement(z,null),message:i,title:r,txHash:o,txHashTitle:n,primaryButton:e,isClosable:!!o,header:l&&a?t.default.createElement(g,{navigateToExternalLink:a,paddingTop:8}):null}),L=({title:r,message:i,txHash:o,txHashTitle:n,primaryButton:e,showUKDisclaimer:l,openExternalLink:a})=>t.default.createElement(h,{icon:t.default.createElement(T,{type:"failure"}),message:i,title:r,txHash:o,txHashTitle:n,primaryButton:e,isClosable:!0,header:l&&a?t.default.createElement(g,{navigateToExternalLink:a,paddingTop:8}):null}),U=({title:r,message:i,txHash:o,txHashTitle:n,primaryButton:e,secondaryButton:l,showUKDisclaimer:a,openExternalLink:s})=>t.default.createElement(h,{icon:t.default.createElement(T,{type:"success"}),title:r,message:i,txHash:o,txHashTitle:n,isClosable:!0,primaryButton:e,secondaryButton:l,header:a&&s?t.default.createElement(g,{navigateToExternalLink:s,paddingTop:8}):null});var Q=m.a.attrs({target:"_blank",rel:"noopener noreferrer"})`
  color: ${r=>r.theme.purple};
  text-decoration: none;
  cursor: pointer;
`,Y=({txError:r,addressType:i,statusPageProps:o,executeConvertStake:n,onClose:e})=>q(r)?p.default.createElement(K,{ledgerActionError:r,onRetryClick:n,onCancelClick:e}):o.type==="error"?p.default.createElement(L,{...o}):p.default.createElement(I,{ledgerAction:n,numberOfTransactions:1,cancel:e,ledgerApp:v(i)}),ft=p.default.memo(r=>{let{process:i,addressType:o,isLedger:n,statusPageProps:e,txError:l,onClose:a,executeLiquidStake:s,learnMoreLink:d,isJitoSOL:J}=r;if(n&&!e.txHash)return p.default.createElement(Y,{txError:l,addressType:o,statusPageProps:e,executeConvertStake:s,onClose:a});switch(e.type){case"loading":return p.default.createElement(M,{...e});case"error":return p.default.createElement(L,{...e});case"success":{let C=null;return J&&(C=i==="mint"?p.default.createElement(b,{i18nKey:"convertStakeStatusSuccessMessage"},"Earn additional rewards with your JitoSOL ",p.default.createElement(Q,{href:d},"here.")):null),p.default.createElement(U,{title:e.title,txHash:e.txHash,txHashTitle:e.txHashTitle,primaryButton:e.primaryButton,secondaryButton:e.secondaryButton,message:C,paddingBottom:e.paddingBottom,showUKDisclaimer:e.showUKDisclaimer,openExternalLink:e.openExternalLink})}default:throw new Error("Unsupported status page type")}});export{ft as a};
//# sourceMappingURL=chunk-WS7FR4DL.js.map

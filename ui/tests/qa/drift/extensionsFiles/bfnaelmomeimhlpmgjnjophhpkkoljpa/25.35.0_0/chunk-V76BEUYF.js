import{b as s}from"./chunk-3U4MKOCV.js";import{S as l,db as T,m as e}from"./chunk-FVUSQHVT.js";import{a as u}from"./chunk-4BKJE7YB.js";import{g as E}from"./chunk-KY4L2TTE.js";import{b as m,c as y}from"./chunk-W47K3OCY.js";import{c as h}from"./chunk-25TPEQ2Q.js";import{X as b,c as B,v as i,ya as a}from"./chunk-BEUYJGED.js";import{f as P,h as k,n as x}from"./chunk-64CIGK2X.js";k();x();var r=P(B());var w="Unknown Error",D="Looks like you ran into an unknown error. Please close Phantom and try again.",F="Close",f=e(T).attrs({wordBreak:"break-word",color:a.colors.legacy.textDiminished,size:16,lineHeight:20.8,maxWidth:"400px"})``,g=e.a.attrs({target:"_blank",rel:"noopener noreferrer"})`
  display: flex;
  align-items: center;
  margin: 0 auto;
  color: ${a.colors.legacy.spotBase};
  text-decoration: none;
  cursor: pointer;
  svg {
    fill: ${a.colors.legacy.spotBase};
    margin-right: 5px;
  }
`,C=o=>r.default.createElement(u,{fallback:n=>n instanceof E?r.default.createElement(A,null):o.fallback},o.children),A=()=>{let{t:o}=b(),n=()=>{h.capture("walletScreenErrorBoundaryClosed"),self.close()};return r.default.createElement(H,null,r.default.createElement(s,{icon:"error",title:o("transactionsDisabledTitle"),buttonText:o("commandClose"),onClose:n},r.default.createElement(f,{margin:"0 0 5px 0"},o("transactionsDisabledMessage")),r.default.createElement(g,{href:i,onClick:n},r.default.createElement(l,null),"Help & Support")))},H=e.main`
  width: ${m}px;
  height: ${y}px;
  padding: 15px;
`,j=({title:o=w,message:n=D,buttonText:c=F,onReset:t=()=>self.close(),children:d})=>{function p(){return r.default.createElement(S,null,r.default.createElement(s,{icon:"error",title:o,buttonText:c,onClose:t},r.default.createElement(f,{margin:"0 0 5px 0"},n),r.default.createElement(g,{href:i,onClick:t},r.default.createElement(l,null),"Help & Support")))}return r.default.createElement(C,{fallback:r.default.createElement(p,null)},d)},S=e.main`
  min-width: ${m}px;
  height: 100vh;
  padding: 15px;
  width: 100vw;
`,q=({title:o=w,message:n="Looks like you ran into an unknown error. Please refresh the page and try again.",buttonText:c="Refresh",onReset:t=()=>self.location.reload(),children:d})=>{function p(){return r.default.createElement(N,null,r.default.createElement(s,{icon:"error",title:o,buttonText:c,onClose:t},r.default.createElement(f,{margin:"0 0 5px 0"},n),r.default.createElement(g,{href:i,onClick:t},r.default.createElement(l,null),"Help & Support")))}return r.default.createElement(C,{fallback:r.default.createElement(p,null)},d)},N=e.main`
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  width: 400px;
  height: 450px;
  background-color: ${a.colors.legacy.areaBase};
  border: 1px solid ${a.colors.legacy.borderDiminished};
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  padding: 20px;
`;export{C as a,j as b,q as c};
//# sourceMappingURL=chunk-V76BEUYF.js.map

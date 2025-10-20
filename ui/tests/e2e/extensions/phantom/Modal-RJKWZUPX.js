import{a as v}from"./chunk-GDHNPAWS.js";import{c as D}from"./chunk-G46R4HGO.js";import{Fa as u}from"./chunk-QCKHHJ5F.js";import{c as k}from"./chunk-Y6JOYO4T.js";import{R as b,db as g,m as e}from"./chunk-FABKKW5E.js";import"./chunk-F63TUCMM.js";import"./chunk-CJHTJRVG.js";import"./chunk-PJ6PRBE2.js";import"./chunk-DHKCVHRA.js";import{Ba as d,Ca as y,X as T,ac as w,c as H,ya as a}from"./chunk-UTOBJRXZ.js";import"./chunk-3Q6WUW5S.js";import"./chunk-I5GRDOQ7.js";import"./chunk-3KRCODTN.js";import{f as F,h as f,n as h}from"./chunk-SVG5OEFH.js";f();h();var o=F(H());var A=16,I=e.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  height: 100%;
`,B=e.div`
  overflow: scroll;
`,M=e.div`
  margin: 45px 16px 16px 16px;
  padding-top: 16px;
`,$=e(D)`
  left: ${A}px;
  position: absolute;
`,z=e.div`
  align-items: center;
  background: ${a.colors.legacy.areaBase};
  border-bottom: 1px solid ${a.colors.legacy.borderDiminished};
  display: flex;
  height: 46px;
  padding: ${A}px;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`,N=e.div`
  display: flex;
  flex: 1;
  justify-content: center;
`,P=e.footer`
  margin-top: auto;
  flex-shrink: 0;
  min-height: 16px;
`,G=e(g).attrs(r=>({margin:r.margin??"12px 0px"}))`
  text-align: left;
`,W=e(g).attrs({size:16,weight:500,lineHeight:25})``;function L(r){let{actions:i,shortcuts:p,trackAction:n,onClose:s}=r;return(0,o.useMemo)(()=>{let m=i.more.map(t=>{let x=d[u(t.type)],l=t.isDestructive?"spotNegative":"textBase";return{start:o.default.createElement(x,{size:18,type:t.type,color:l}),topLeft:{text:t.text,color:l},onClick:()=>{n(t),s(),t.onClick(t.type)}}}),c=p?.map(t=>{let x=d[u(t.type)],l=t.isDestructive?"spotNegative":"textBase";return{start:o.default.createElement(x,{size:18,color:l}),topLeft:{text:t.text,color:l},onClick:()=>{n(t),s(),t.onClick(t.type)}}})??[];return[{rows:m},{rows:c}]},[i,s,p,n])}function S(r){let{t:i}=T(),{headerText:p,hostname:n,shortcuts:s}=r,C=L(r);return o.default.createElement(I,null,o.default.createElement(B,null,o.default.createElement(z,{onClick:r.onClose},o.default.createElement($,null,o.default.createElement(b,null)),o.default.createElement(N,null,o.default.createElement(W,null,p))),o.default.createElement(M,null,o.default.createElement(y,{gap:"section"},C.map((m,c)=>o.default.createElement(w,{key:`group-${c}`,rows:m.rows}))),o.default.createElement(P,null,n&&s&&s.length>0&&o.default.createElement(G,{color:a.colors.legacy.textDiminished,size:14,lineHeight:17},i("shortcutsWarningDescription",{url:n})))),o.default.createElement(v,{removeFooterExpansion:!0},o.default.createElement(k,{onClick:r.onClose},i("commandClose")))))}var Y=S;export{S as CTAModal,Y as default};
//# sourceMappingURL=Modal-RJKWZUPX.js.map

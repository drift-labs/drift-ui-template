import{E as p,db as m,m as a,o as x,oa as d}from"./chunk-FABKKW5E.js";import{c as L,ya as n}from"./chunk-UTOBJRXZ.js";import{f as R,h as r,n as i}from"./chunk-SVG5OEFH.js";r();i();var o=R(L());r();i();var h=n.colors.legacy.spotWarning,z=n.colors.legacy.spotNegative,g=n.colors.legacy.spotNegative;var _=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,C=x`
  0% {
    top: 15px;
    opacity: 0;
  };
  100% {
    top: 0px;
    opacity: 1;
  };
`,N=a.div`
  animation-name: ${e=>e.animateText?C:"none"};
  animation-duration: ${e=>e.animateText?".5s":"0s"};
  position: relative;
`,k=a(m).attrs(e=>({margin:e.margin??"20px auto 0 auto"}))`
  margin: ${e=>e.margin};
`,v=a(m).attrs(e=>({margin:e.margin??"15px 0px 0px 0px"}))`
  margin: ${e=>e.margin};
`,P=a.div`
  position: relative;
  left: 38px;
  bottom: 22px;
`;var b={large:30,medium:28,small:24},w={large:34,medium:34,small:29},A={large:18,medium:16,small:14},B=({className:e,icon:T,primaryText:c,secondaryText:s,headerStyle:t="medium",showWarning:y=!1,showError:I=!1,animateText:H=!1})=>{t=t??"medium";let S=b[t],f=w[t],u=A[t],E={large:22,medium:19,small:17}[t],l=t==="small"?"16px 0 0 0":void 0,M=I?g:n.colors.legacy.textDiminished;return o.default.createElement(_,{className:e},T??o.default.createElement(p,null),y?o.default.createElement(P,null,o.default.createElement(d,null)):o.default.createElement(o.default.Fragment,null),o.default.createElement(N,{animateText:H},c&&o.default.createElement(k,{margin:l,weight:500,size:S,lineHeight:f,maxWidth:"320px"},c),s&&o.default.createElement(v,{margin:l,wordBreak:"break-word",size:u,lineHeight:E,color:M},s)))};export{h as a,z as b,g as c,B as d};
//# sourceMappingURL=chunk-JVLGNGOV.js.map

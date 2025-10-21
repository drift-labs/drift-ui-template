import{m as l}from"./chunk-FVUSQHVT.js";import{ya as c}from"./chunk-BEUYJGED.js";import{h as r,n as o}from"./chunk-64CIGK2X.js";r();o();var m=(e,t)=>{let i=parseInt(e.slice(1,3),16),a=parseInt(e.slice(3,5),16),n=parseInt(e.slice(5,7),16);return typeof t=="number"?"rgba("+i+", "+a+", "+n+", "+t+")":"rgb("+i+", "+a+", "+n+")"};r();o();var f=l.div.attrs(e=>({color:e.color??c.colors.legacy.elementAccent,diameter:e.diameter??24,opacity:e.opacity??1}))`
  height: ${e=>e.diameter}px;
  width: ${e=>e.diameter}px;
  margin: ${e=>e.margin};
  background-color: ${e=>e.alpha&&e.color?m(e.color,e.alpha):e.color};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  opacity: ${e=>e.opacity};
  overflow: hidden;
  ${e=>e.includeDarkBoxShadow?"box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);":""}
`;export{m as a,f as b};
//# sourceMappingURL=chunk-S32BDL22.js.map

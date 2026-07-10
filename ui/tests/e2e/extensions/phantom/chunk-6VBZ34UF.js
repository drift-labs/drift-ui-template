import{r as h}from"./chunk-N6BAVOMX.js";import{_ as c,db as g,m as r}from"./chunk-FABKKW5E.js";import{c as P,ya as e}from"./chunk-UTOBJRXZ.js";import{f as A,h as f,n as m}from"./chunk-SVG5OEFH.js";f();m();var o=A(P());var V=r.div`
  display: flex;
  ${n=>n.isVisible?"cursor: pointer;":""}
  align-items: center;
  margin-right: ${n=>n.hasChildren?10:0}px;
  p {
    margin-right: 6px;
    ${n=>!n.allowWrap&&"white-space: nowrap;"}
  }
`,W=r.div`
  position: relative;
  top: 1px;
`,M=({children:n,fontWeight:I,fontSize:b=14,iconSize:u,info:l,lineHeight:d,tooltipAlignment:C,noWrap:s,textAlign:x="left",showInfoIcon:w=!0,textColor:T,iconColor:y})=>{let[S,a]=(0,o.useState)(!1),i=!!l,t=i&&S,p=t?e.colors.legacy.spotBase:e.colors.legacy.textDiminished;return o.default.createElement(h,{label:i?l:o.default.createElement(o.default.Fragment,null),ariaLabel:"Info",color:e.colors.legacy.areaBase,alignment:C,isVisible:t,triggerParams:{onMouseEnter:()=>a(!0),onMouseLeave:()=>{a(!1)}}},o.default.createElement(V,{isVisible:t,hasChildren:!!n,allowWrap:!s},o.default.createElement(g,{color:T??p,lineHeight:d,size:b,weight:I,noWrap:s,textAlign:x},n),i&&w?o.default.createElement(W,null,o.default.createElement(c,{fill:y??p,width:u})):null))};export{M as a};
//# sourceMappingURL=chunk-6VBZ34UF.js.map

import{b as t}from"./chunk-IRT22BM2.js";import{A as p,D as u,I as d,m as r,oa as f}from"./chunk-FABKKW5E.js";import{Ia as c,Ma as s,c as w,ya as e}from"./chunk-UTOBJRXZ.js";import{f as h,h as l,n as m}from"./chunk-SVG5OEFH.js";l();m();var i=h(w());var C=r.div`
  position: relative;
`,I=r(s.div)`
  width: ${o=>o.width}px;
  height: ${o=>o.width}px;
`,x=r(s.div)`
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;var D=({type:o,iconWidth:a,defaultIcon:y,backgroundWidth:n=94})=>{let g=()=>{switch(o){case"default":return y??i.default.createElement(d,{width:a??30});case"warning":return i.default.createElement(f,{width:40,height:40,circleFill:e.colors.legacy.spotWarning,exclamationFill:"transparent"});case"failure":return i.default.createElement(p,{width:a??30});case"success":return i.default.createElement(u,{height:"100%",width:a??40,fill:e.colors.legacy.spotPositive})}};return i.default.createElement(C,null,i.default.createElement(c,{mode:"wait",initial:!1},i.default.createElement(I,{width:n,key:o,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2}},(()=>{switch(o){case"default":return i.default.createElement(t,{diameter:n,color:e.colors.legacy.areaAccent,includeDarkBoxShadow:!0});case"warning":return i.default.createElement(t,{diameter:n,color:e.colors.legacy.spotWarning,opacity:.1});case"failure":return i.default.createElement(t,{diameter:n,color:e.colors.legacy.spotNegative,opacity:.1});case"success":return i.default.createElement(t,{diameter:n,color:e.colors.legacy.spotPositive,opacity:.1})}})())),i.default.createElement(c,{mode:"wait",initial:!0},i.default.createElement(x,{key:o,initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:10},transition:{duration:.4,bounce:.4,type:"spring"}},g())))};export{D as a};
//# sourceMappingURL=chunk-6BLAMF36.js.map

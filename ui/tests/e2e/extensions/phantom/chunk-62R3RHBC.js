import{a as h}from"./chunk-6VBZ34UF.js";import{o as m,p as u,s as x}from"./chunk-N6BAVOMX.js";import{db as f,l as g,m as r}from"./chunk-FABKKW5E.js";import{Da as d,c as w,ya as t}from"./chunk-UTOBJRXZ.js";import{f as R,h as s,n as p}from"./chunk-SVG5OEFH.js";s();p();var e=R(w());var I=r.div`
  display: flex;
  height: 49px;
  padding: 0 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  &:last-of-type {
    margin-bottom: 0;
  }
  background-color: ${o=>o.customBackground??t.colors.legacy.elementBase};
  ${o=>o.onClick?g`
          :hover {
            background-color: ${t.colors.legacy.elementAccent};
          }
          cursor: pointer;
        `:""}
`,v=r.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,L=r.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,N=r.div`
  display: flex;
  margin: 2px 4px 0 0;
`,W=r(f).attrs(o=>({color:o.color||t.colors.legacy.textDiminished,size:14,lineHeight:17,weight:400,noWrap:!0,paddingLeft:8}))`
  cursor: ${o=>o.onClick?"pointer":"default"};
  text-decoration: none;
`,A=({children:o,icon:n,fontWeight:i,label:b,lineHeight:k,customBackground:y,color:T,tooltipContent:l,isLoading:c=!1,error:a,onClick:C})=>e.default.createElement(I,{customBackground:y,onClick:c?void 0:C},e.default.createElement(L,null,e.default.createElement(v,null,n?e.default.createElement(N,null,n):null,e.default.createElement(h,{tooltipAlignment:"topLeft",iconSize:12,lineHeight:k??17,fontWeight:i??400,info:l?e.default.createElement(B,{tooltipContent:l}):null,textColor:T||t.colors.legacy.textBase},b)),a?e.default.createElement(d,{color:"spotNegative",font:"label",children:a}):null),c?e.default.createElement(x,{width:"75px",height:"15px",borderRadius:"50px",backgroundColor:t.colors.legacy.borderDiminished}):o),B=({tooltipContent:o})=>e.default.createElement(u,null,typeof o=="string"?e.default.createElement(m,null,o):o),S=({children:o,color:n,onClick:i})=>e.default.createElement(W,{onClick:i,color:n||t.colors.legacy.textDiminished},o||"-");export{A as a,B as b,S as c};
//# sourceMappingURL=chunk-62R3RHBC.js.map

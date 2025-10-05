import{l as f}from"./chunk-3JMYJD4J.js";import{N as S}from"./chunk-IHXFHG2Y.js";import{db as p,m as i}from"./chunk-FABKKW5E.js";import{X as x,c as k,cb as C,ya as n}from"./chunk-UTOBJRXZ.js";import{f as h,h as g,n as m}from"./chunk-SVG5OEFH.js";g();m();var t=h(k());var v=i.div`
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${e=>e.settingsContainerHeight??"100%"};
`,w=i.div``,H=i.div`
  border-radius: 6px;
  overflow: hidden;
  padding-bottom: 32px;
`,b=i.div`
  display: flex;
  background-color: ${e=>e.selected?n.colors.legacy.spotBase:n.colors.legacy.elementBase};
  padding: 16px;
  align-items: center;
  cursor: pointer;

  & + & {
    border-top: 1px solid ${n.colors.legacy.areaBase};
  }
`,B=i.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`,A=({selected:e,title:o,description:r,onClick:a})=>t.default.createElement(b,{onClick:a,selected:e},t.default.createElement(B,null,t.default.createElement(p,{margin:"0 0 7px",lineHeight:16,textAlign:"left",weight:500,size:16,color:e?n.colors.legacy.areaBase:n.colors.legacy.textBase},o),t.default.createElement(p,{textAlign:"left",weight:500,size:12,lineHeight:12,color:e?n.colors.legacy.elementBase:n.colors.legacy.textDiminished},r||t.default.createElement("span",null,"\xA0")))),D=({onSelectTransactionSpeed:e,selectedTransactionSpeed:o,networkID:r,transactionUnitAmount:a,closeModal:c,settingsContainerHeight:s})=>{let{t:l}=x(),{presets:u,transactionSpeed:d}=S(r,o,a),T=(0,t.useCallback)(()=>{e(d),c()},[c,d,e]),y=l("settingsTransactions"),P=l("commandSave");return{headerText:y,primaryText:P,onPress:T,presetViewStates:u,settingsContainerHeight:s}},j=e=>{let o=D(e);return t.default.createElement(U,{...o})},U=t.default.memo(({headerText:e,primaryText:o,onPress:r,settingsContainerHeight:a,presetViewStates:c})=>t.default.createElement(t.default.Fragment,null,t.default.createElement(w,null,t.default.createElement(f,null,e)),t.default.createElement(v,{settingsContainerHeight:a},t.default.createElement(H,null,c.map((s,l)=>t.default.createElement(A,{key:l,onClick:s.onClick,title:s.title,description:s.description,selected:s.selected}))),t.default.createElement(C,{background:"spot",onClick:r},o))));export{j as a};
//# sourceMappingURL=chunk-OHDC6JN5.js.map

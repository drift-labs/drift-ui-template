import{a as S}from"./chunk-D54DG5S6.js";import{b as L}from"./chunk-5F2VOKO3.js";import{o as C}from"./chunk-MOTGUR2H.js";import{a as z}from"./chunk-5AA7BGLC.js";import{ta as k}from"./chunk-QSYOXIBV.js";import{O as I,m as r,w as D}from"./chunk-FVUSQHVT.js";import{c as T}from"./chunk-25TPEQ2Q.js";import{ka as B}from"./chunk-HTY647YJ.js";import{Bd as h}from"./chunk-E2A6YDRV.js";import{Ca as b,Da as f,_b as w,c as V,ya as s}from"./chunk-BEUYJGED.js";import{f as v,h as g,n as x}from"./chunk-64CIGK2X.js";g();x();var t=v(V());g();x();var y={header:"_14rx5di1 _14rx5di0 _51gazn5a _51gazn3o _51gazn6w _51gazn22 _51gazn1kj _51gazn1nq _51gazn1mv _51gaznkv _51gazn2bg _51gazns2 _51gaznxd",summaryContainer:"_14rx5di2 _51gazn1c8 _51gazn1xa"};g();x();var m=v(V()),$=m.default.memo(({address:e,networkID:o,showConcise:a})=>{let{getExistingAccount:d,getKnownAddressLabel:n}=B(),{data:R}=k(e,o),c=R?.address;if(!e)return null;let i=d(e),u=n(e,o),p=i?i.name:u;return c?m.default.createElement(f,null,e," ",m.default.createElement(f,{color:"textDiminished"},"(",h(c,4),")")):p?m.default.createElement(f,null,p," ",m.default.createElement(f,{color:"textDiminished"},"(",h(e,4),")")):m.default.createElement(f,null,a?h(e,4):e)});function _(e){if(!e){let a=parseInt(s.radiusRow.replace("px",""),10);return{borderTopLeftRadius:a,borderTopRightRadius:a,borderBottomRightRadius:a,borderBottomLeftRadius:a}}let o=e.split(" ").map(a=>a.replace("px","")).map(a=>parseInt(a,10));return o.length===1?{borderTopLeftRadius:o[0],borderTopRightRadius:o[0],borderBottomRightRadius:o[0],borderBottomLeftRadius:o[0]}:o.length===2?{borderTopLeftRadius:o[0],borderTopRightRadius:o[1],borderBottomRightRadius:o[0],borderBottomLeftRadius:o[1]}:{borderTopLeftRadius:o[0],borderTopRightRadius:o[1],borderBottomRightRadius:o[2],borderBottomLeftRadius:o[3]}}var F=r.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${s.colors.legacy.areaBase};
  border-bottom-width: ${e=>e.border?1:0}px;
  padding: ${e=>e.padding?e.padding:14}px;
  cursor: ${e=>e.onClick?"pointer":"default"};
`,N=r.div`
  padding-top: 3px;
`,O=r.div`
  display: flex;
  justify-content: space-between;
  font-size: ${e=>e.fontSize?e.fontSize:14}px;
`,j=r.div`
  display: flex;
  justify-content: space-between;
`,E=r.div`
  text-align: left;
  flex: 1;
`,M=r.div`
  text-align: right;
  flex: 1;
`,W=r.div`
  display: flex;
  align-items: center;
  ${e=>e.truncate?"flex: 1; min-width: 0; justify-content:end;":""}
`,H=r.div`
  padding-left: 8px;
  color: ${s.colors.legacy.textDiminished};
`,A=({children:e,showArrow:o})=>t.createElement(W,{truncate:!o},e,o&&t.createElement(H,null,t.createElement(D,{height:12}))),l=r.span`
  color: ${e=>e.color||"white"};
  text-align: ${e=>e.align||"left"};
  font-weight: ${e=>e.weight||400};
  overflow-wrap: break-word;
  ${e=>e.margin?"margin: "+e.margin+";":""};
  ${e=>e.size?"font-size: "+e.size+"px;":""}
  ${e=>e.truncate?"white-space: nowrap; text-overflow: ellipsis; overflow:hidden; width: 100%;"+(e.size?"line-height: "+e.size*1.2+"px;":"line-height: 17px;"):""}
`,U=r.a.attrs({target:"_blank",rel:"noopener noreferrer"})`
  color: ${s.colors.legacy.spotBase};
  text-decoration: none;
  cursor: pointer;
`,q=r.div`
  text-align: center;
  width: 100%;
`,K=({children:e,label:o,tooltipContent:a,fontSize:d})=>t.createElement(t.Fragment,null,t.createElement(S,{tooltipAlignment:"topLeft",iconSize:12,lineHeight:17,fontSize:d,fontWeight:500,info:a?t.createElement(C,null,a):null},o),e),G=e=>{T.capture("activityItemDetailLinkClicked",{data:{hostname:z(e)}})},J=e=>"designSystemOptIn"in e&&e.designSystemOptIn===!0?t.createElement(Q,{...e}):t.createElement(X,{...e}),Q=({header:e,rows:o,borderRadius:a})=>{let d=_(a);return t.createElement(b,{className:y.summaryContainer,...d},e?t.createElement("div",{className:y.header},e):null,t.createElement(w,{rows:o.map(n=>({...n.onPress?{onClick:n.onPress}:{},topLeft:n.tooltipContent?{component:()=>t.createElement(S,{textColor:s.colors.legacy.textDiminished,iconColor:s.colors.legacy.textDiminished,tooltipAlignment:"topLeft",iconSize:12,lineHeight:17,fontSize:14,fontWeight:500,info:t.createElement(C,null,n.tooltipContent)},n.label)}:{text:n.label,font:"captionMedium",color:"textDiminished"},topRight:{text:n.value,font:"captionMedium",color:"textBase"}}))}))},X=({header:e,rows:o,borderRadius:a,padding:d,fontSize:n,networkID:R})=>{let c=_(a);return t.createElement(b,{className:y.summaryContainer,...c}," ",e?t.createElement("div",{className:y.header},e):null,o.map((i,u)=>{if(i.value===void 0)return null;let p=i.onClick?{role:"button"}:void 0;return t.createElement(F,{border:o.length-1!==u,padding:d,onClick:i.onClick,key:`summary-row-${u}`,...p},t.createElement(O,{key:i.label,fontSize:n},typeof i.value=="string"?i.type==="link"?t.createElement(q,null,t.createElement(U,{href:i.value,onClick:()=>G(i.value)},i.label)):t.createElement(K,{label:i.label,tooltipContent:i.tooltipContent,fontSize:n},t.createElement(A,{showArrow:!!i.onClick},i.type==="address"?t.createElement($,{address:i.value,networkID:R??"solana:101"}):t.createElement(l,{color:i.color,weight:500,align:"right",truncate:!i.onClick},i.value))):t.createElement(t.Fragment,null,t.createElement(l,{color:s.colors.legacy.textDiminished,size:n},i.label),t.createElement(A,{showArrow:!!i.onClick},i.value))),t.createElement(j,null,i.leftSubtext?t.createElement(E,null,t.createElement(N,null,t.createElement(l,{color:i.leftSubtextColor||s.colors.legacy.textDiminished,size:13},i.leftSubtext))):null,i.rightSubtext?t.createElement(M,null,t.createElement(N,null,t.createElement(l,{color:i.rightSubtextColor||s.colors.legacy.textDiminished,size:13},i.rightSubtext))):null))}))},at=({name:e,imageURL:o})=>t.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"}},t.createElement(L,{iconUrl:o,width:16}),t.createElement(l,{margin:"0 0 0 5px",weight:500},e)),Y=r.div`
  height: 100%;
  overflow: scroll;
  margin-top: -16px;
  padding-top: 16px;
  padding-bottom: 64px;
`,Z=r.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,ee=r.div`
  margin-top: 10px;
  margin-bottom: 10px;
`,te=r.div`
  margin-top: 10px;
  margin-bottom: 20px;
`,oe=r.div`
  margin-bottom: 10px;
`,ie=r.div`
  position: relative;
  width: 100%;
  text-align: center;
  margin: 10px 0 10px 0;
`,re=r(l)`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 100%;
`,ae=r.div`
  background-color: ${s.colors.legacy.spotWarning};
  width: 100%;
  margin-top: 24px;
  margin-bottom: 14px;
  border-radius: 9px;
  padding: 16px;
  gap: 8px;
  display: flex;
  align-items: flex-start;
  align-self: stretch;
`,ne=r.div`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`,nt=({title:e,primaryText:o,secondaryText:a,image:d,sections:n,leftButton:R,warning:c})=>t.createElement(Y,null,t.createElement(Z,null,t.createElement(ie,null,R||!1,t.createElement(l,{weight:500,size:22},e)),t.createElement(ee,null,d),o.value&&t.createElement(re,{weight:600,size:34,color:o.color,align:"center",margin:"10px 0 10px 0"},o.value),a.value&&t.createElement(l,{size:16,color:s.colors.legacy.textDiminished,margin:"0 0 10px 0"},a.value),c&&t.createElement(ae,null,t.createElement(ne,null,t.createElement(I,null)),t.createElement(l,{size:14,color:s.colors.legacy.areaBase,margin:"3px 0px 3px 8px"},c))),n.map(({title:i,rows:u},p)=>t.createElement(te,{key:`summary-item-${p}`},i&&t.createElement(oe,null,t.createElement(l,{size:14,weight:500,color:s.colors.legacy.textDiminished},i)),t.createElement(J,{rows:u}))));export{J as a,at as b,nt as c};
//# sourceMappingURL=chunk-PSHZSAJN.js.map

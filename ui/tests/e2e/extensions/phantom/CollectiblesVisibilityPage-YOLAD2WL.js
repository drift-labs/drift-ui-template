import{a as Z}from"./chunk-Z5C6HM47.js";import{a as j}from"./chunk-W6HD74YL.js";import{a as G}from"./chunk-TKMN3AOZ.js";import{a as U}from"./chunk-YQ447VW4.js";import{b as F}from"./chunk-SOC5IO6G.js";import{b as $}from"./chunk-TBQILJLR.js";import{ya as K}from"./chunk-ZPSIMYUC.js";import{m as Q}from"./chunk-3W7DN42P.js";import"./chunk-66RATSMU.js";import"./chunk-3CN4PSQF.js";import"./chunk-N6BAVOMX.js";import"./chunk-BV3TS4XT.js";import"./chunk-MSKCA54N.js";import{a as x}from"./chunk-WIVKFT3Y.js";import"./chunk-2DLZSCTQ.js";import"./chunk-DGD53LCE.js";import"./chunk-SAN2LWG5.js";import"./chunk-JVLGNGOV.js";import"./chunk-EMDZTJKZ.js";import{g as B}from"./chunk-26BEY7UU.js";import"./chunk-KHFCJUHU.js";import{a as O}from"./chunk-75HMBX3C.js";import"./chunk-3JMYJD4J.js";import"./chunk-FLIG3OXX.js";import"./chunk-IRT22BM2.js";import{a as V}from"./chunk-GDHNPAWS.js";import"./chunk-QCUZPSGD.js";import"./chunk-4NOCLPPV.js";import"./chunk-HRUBPS3N.js";import"./chunk-G46R4HGO.js";import"./chunk-QY5YIVDQ.js";import"./chunk-MUAOONPW.js";import{$ as E,U as D,ba as A,ca as _,i as P}from"./chunk-BY77CZR3.js";import"./chunk-CEYX4EEL.js";import"./chunk-Q2MU5Q7Q.js";import"./chunk-CCUQPG33.js";import"./chunk-IHXFHG2Y.js";import"./chunk-JAQNMSBC.js";import"./chunk-MYAJJRTU.js";import"./chunk-EBUZAGLB.js";import"./chunk-QCKHHJ5F.js";import"./chunk-HPK5Q66L.js";import"./chunk-MEINW66A.js";import"./chunk-QMDPT5WS.js";import"./chunk-PQHYTRV5.js";import{c as z}from"./chunk-Y6JOYO4T.js";import{C as N,db as y,m as s}from"./chunk-FABKKW5E.js";import"./chunk-ZWNJSFU4.js";import"./chunk-MZPVJTUS.js";import"./chunk-JSLOSOZX.js";import"./chunk-GCJPSL4T.js";import"./chunk-RY7HN3SK.js";import"./chunk-YI2NXTPE.js";import"./chunk-TCB6NDII.js";import"./chunk-R5GARSZH.js";import"./chunk-F24UB3BO.js";import{$a as W}from"./chunk-VOCOWPRG.js";import"./chunk-F63TUCMM.js";import"./chunk-CJHTJRVG.js";import{Jd as M}from"./chunk-PJ6PRBE2.js";import"./chunk-DHKCVHRA.js";import{Ab as L,Ib as k,X as p,c as H,wa as v,ya as f}from"./chunk-UTOBJRXZ.js";import"./chunk-3Q6WUW5S.js";import"./chunk-I5GRDOQ7.js";import"./chunk-3KRCODTN.js";import{f as T,h as S,n as I}from"./chunk-SVG5OEFH.js";S();I();var t=T(H());S();I();var o=T(H());var J=v({marginLeft:4}),Y=s(x).attrs({align:"center",padding:"10px"})`
  background-color: ${f.colors.legacy.elementBase};
  border-radius: 6px;
  height: 74px;
  margin: 4px 0;
`,R=s.div`
  display: flex;
  align-items: center;
`,tt=s(O)`
  flex: 1;
  min-width: 0;
  text-align: left;
  align-items: normal;
`,et=s(y).attrs({size:16,weight:600,lineHeight:19,noWrap:!0,maxWidth:"175px",textAlign:"left"})``,ot=s(y).attrs({color:f.colors.legacy.textDiminished,size:14,lineHeight:17,noWrap:!0})`
  text-align: left;
  margin-top: 5px;
`,it=s.div`
  width: 55px;
  min-width: 55px;
  max-width: 55px;
  height: 55px;
  min-height: 55px;
  max-height: 55px;
  aspect-ratio: 1;
  margin-right: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`,X=o.default.memo(e=>{let{t:n}=p(),{collection:i,unknownItem:m,isHidden:r,isSpam:a,onToggleHidden:d}=e,{name:c,id:g}=i,l=A(i),h=l?.chainData,C=_(i),u=E(l?.media,"image",!1,"small"),b=c||l?.name||m;return o.default.createElement(Y,null,o.default.createElement(it,null,a&&r?o.default.createElement(Z,{width:32}):u?o.default.createElement(F,{uri:u}):P(h)?o.default.createElement(j,{...h.utxoDetails}):o.default.createElement($,{type:"image",width:42})),o.default.createElement(x,null,o.default.createElement(tt,null,o.default.createElement(R,null,o.default.createElement(et,null,b),a?o.default.createElement(N,{className:J,fill:f.colors.legacy.spotWarning,height:16,width:16}):null),o.default.createElement(ot,null,n("collectiblesSearchNrOfItems",{nrOfItems:C})))),o.default.createElement(U,{id:g,label:`${c} visible`,checked:!r,onChange:w=>{d(w.target.checked?"show":"hide")}}))});var nt=74,lt=10,st=nt+lt,rt=20,at=s.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`,mt=s.div`
  position: relative;
  width: 100%;
`,ct=()=>{let{handleHideModalVisibility:e}=K(),{data:n,isPending:i}=W(),{viewState:m,viewStateLoading:r}=D({account:n}),a=(0,t.useCallback)(()=>e("collectiblesVisibility"),[e]),d=(0,t.useMemo)(()=>({...m,handleCloseModal:a}),[a,m]),c=(0,t.useMemo)(()=>i||r,[i,r]);return{data:d,loading:c}},dt=t.default.memo(e=>{let{t:n}=p(),i=(0,t.useRef)(null);return(0,t.useEffect)(()=>{setTimeout(()=>i.current?.focus(),200)},[]),t.default.createElement(t.default.Fragment,null,t.default.createElement(mt,null,t.default.createElement(B,{ref:i,tabIndex:0,placeholder:n("assetListSearch"),maxLength:M,onChange:e.handleSearch,value:e.searchQuery,name:"Search collectibles"})),t.default.createElement(Q,null,t.default.createElement(L,null,({height:m,width:r})=>t.default.createElement(k,{style:{padding:`${rt}px 0`},scrollToIndex:e.searchQuery!==e.debouncedSearchQuery?0:void 0,height:m,width:r,rowCount:e.listItems.length,rowHeight:st,rowRenderer:a=>t.default.createElement(pt,{...a,data:e.listItems,unknownItem:n("assetListUnknownToken"),getIsHidden:e.getIsHidden,getIsSpam:e.getIsSpam,getSpamStatus:e.getSpamStatus,onToggleHidden:e.onToggleHidden})}))))}),pt=e=>{let{index:n,data:i,style:m,unknownItem:r,getIsHidden:a,getIsSpam:d,getSpamStatus:c,onToggleHidden:g}=e,l=i[n],h=a(l),C=d(l),u=c(l),b=(0,t.useCallback)(w=>g({item:l,status:w}),[g,l]);return t.default.createElement("div",{style:m},t.default.createElement(X,{collection:l,unknownItem:r,isHidden:h,isSpam:C,spamStatus:u,onToggleHidden:b}))},gt=()=>{let{data:e,loading:n}=ct(),{t:i}=p();return t.default.createElement(at,null,n?t.default.createElement(G,null):t.default.createElement(dt,{...e}),t.default.createElement(V,null,t.default.createElement(z,{onClick:e.handleCloseModal},i("commandClose"))))},$t=gt;export{gt as CollectiblesVisibilityPage,$t as default};
//# sourceMappingURL=CollectiblesVisibilityPage-YOLAD2WL.js.map

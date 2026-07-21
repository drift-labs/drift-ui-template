import{a as Z}from"./chunk-YMLA7HCE.js";import{a as j}from"./chunk-6OGKJWHQ.js";import{a as G}from"./chunk-6YRKFZ5L.js";import{a as U}from"./chunk-L6OMJUHO.js";import{b as F}from"./chunk-5S2WVLCV.js";import{b as $}from"./chunk-Z6V6CXNV.js";import"./chunk-AJCHDLA7.js";import{ya as K}from"./chunk-XZRRLELF.js";import{m as Q}from"./chunk-HTEWVCFR.js";import"./chunk-5F2VOKO3.js";import"./chunk-VTQFUHCP.js";import"./chunk-MOTGUR2H.js";import"./chunk-J26VE65N.js";import"./chunk-KKMQB65C.js";import{a as x}from"./chunk-7JKUY6KU.js";import"./chunk-YY4B3XV7.js";import"./chunk-L2LS7YZE.js";import"./chunk-GROXNBTY.js";import"./chunk-OZFKX4E3.js";import"./chunk-57E56ETC.js";import{g as B}from"./chunk-HO6FHTKM.js";import"./chunk-H6IC2DCX.js";import{a as O}from"./chunk-WF3NVBQY.js";import"./chunk-TALMQQTZ.js";import"./chunk-WSJ272XI.js";import"./chunk-S32BDL22.js";import{a as V}from"./chunk-GQ5HEJWI.js";import"./chunk-KGWRBMZX.js";import"./chunk-BSK64RRL.js";import"./chunk-BUTFRTU6.js";import"./chunk-HX3WMS5S.js";import"./chunk-ZYPI3ESJ.js";import"./chunk-6EZHAYJL.js";import{R as D,V as E,X as A,Y as _,n as P}from"./chunk-BRQKCECY.js";import"./chunk-YOO3KN23.js";import"./chunk-YITPJN7X.js";import"./chunk-CQIC5IDD.js";import"./chunk-BHIJKWN7.js";import"./chunk-6N4GZCP2.js";import"./chunk-5OF7XKWY.js";import"./chunk-5AA7BGLC.js";import"./chunk-QSYOXIBV.js";import"./chunk-O7KQ5SYD.js";import"./chunk-V76BEUYF.js";import"./chunk-3U4MKOCV.js";import"./chunk-63PE5ZXT.js";import{c as z}from"./chunk-ZTFOFBVC.js";import{C as N,db as y,m as s}from"./chunk-FVUSQHVT.js";import"./chunk-HUS6FTFG.js";import"./chunk-NCSBB2TA.js";import"./chunk-4BKJE7YB.js";import"./chunk-KY4L2TTE.js";import"./chunk-W47K3OCY.js";import"./chunk-25TPEQ2Q.js";import"./chunk-E7B2SEGG.js";import"./chunk-XD32MQ4W.js";import"./chunk-LHPEWMJX.js";import"./chunk-HTY647YJ.js";import{$c as M,gf as W}from"./chunk-E2A6YDRV.js";import"./chunk-4XTMHWN2.js";import{Ab as L,Ib as k,X as p,c as H,wa as v,ya as f}from"./chunk-BEUYJGED.js";import"./chunk-3C334UTS.js";import"./chunk-3JLWNHUO.js";import"./chunk-KHOMEOLW.js";import{f as T,h as S,n as I}from"./chunk-64CIGK2X.js";S();I();var t=T(H());S();I();var o=T(H());var J=v({marginLeft:4}),Y=s(x).attrs({align:"center",padding:"10px"})`
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
//# sourceMappingURL=CollectiblesVisibilityPage-IGIFFVFV.js.map

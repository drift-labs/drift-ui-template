import{a as s,c as f}from"./chunk-62R3RHBC.js";import{a as T}from"./chunk-6BLAMF36.js";import"./chunk-6VBZ34UF.js";import{H as I,ya as b}from"./chunk-ZPSIMYUC.js";import"./chunk-3W7DN42P.js";import"./chunk-66RATSMU.js";import"./chunk-3CN4PSQF.js";import"./chunk-N6BAVOMX.js";import"./chunk-BV3TS4XT.js";import"./chunk-MSKCA54N.js";import"./chunk-WIVKFT3Y.js";import"./chunk-2DLZSCTQ.js";import"./chunk-DGD53LCE.js";import"./chunk-SAN2LWG5.js";import"./chunk-JVLGNGOV.js";import"./chunk-EMDZTJKZ.js";import"./chunk-26BEY7UU.js";import"./chunk-KHFCJUHU.js";import"./chunk-75HMBX3C.js";import"./chunk-3JMYJD4J.js";import"./chunk-FLIG3OXX.js";import"./chunk-IRT22BM2.js";import"./chunk-GDHNPAWS.js";import"./chunk-QCUZPSGD.js";import"./chunk-4NOCLPPV.js";import"./chunk-HRUBPS3N.js";import"./chunk-G46R4HGO.js";import"./chunk-QY5YIVDQ.js";import"./chunk-MUAOONPW.js";import"./chunk-BY77CZR3.js";import"./chunk-CEYX4EEL.js";import"./chunk-Q2MU5Q7Q.js";import"./chunk-CCUQPG33.js";import"./chunk-IHXFHG2Y.js";import"./chunk-JAQNMSBC.js";import"./chunk-MYAJJRTU.js";import"./chunk-EBUZAGLB.js";import"./chunk-QCKHHJ5F.js";import"./chunk-HPK5Q66L.js";import"./chunk-MEINW66A.js";import"./chunk-QMDPT5WS.js";import"./chunk-PQHYTRV5.js";import{c as h,d as C}from"./chunk-Y6JOYO4T.js";import{db as l,m as o}from"./chunk-FABKKW5E.js";import"./chunk-ZWNJSFU4.js";import"./chunk-MZPVJTUS.js";import"./chunk-JSLOSOZX.js";import"./chunk-GCJPSL4T.js";import"./chunk-RY7HN3SK.js";import"./chunk-YI2NXTPE.js";import"./chunk-TCB6NDII.js";import"./chunk-R5GARSZH.js";import"./chunk-F24UB3BO.js";import"./chunk-VOCOWPRG.js";import"./chunk-F63TUCMM.js";import"./chunk-CJHTJRVG.js";import{Zb as c,dc as y,sc as g}from"./chunk-PJ6PRBE2.js";import"./chunk-DHKCVHRA.js";import{Ca as B,X as x,c as D,ya as a}from"./chunk-UTOBJRXZ.js";import"./chunk-3Q6WUW5S.js";import"./chunk-I5GRDOQ7.js";import"./chunk-3KRCODTN.js";import{f as v,h as u,n as d}from"./chunk-SVG5OEFH.js";u();d();var n=v(D());var M=o.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: scroll;
`,P=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 90px;
`,N=o(l).attrs({size:28,weight:500,color:a.colors.legacy.textBase})`
  margin: 16px;
`,S=o(l).attrs({size:14,weight:400,lineHeight:17,color:a.colors.legacy.textDiminished})`
  max-width: 275px;

  span {
    color: white;
  }
`,V=({networkId:t,token:r})=>{let{t:i}=x(),{handleHideModalVisibility:m}=b(),p=(0,n.useCallback)(()=>{m("insufficientBalance")},[m]),w=t&&y(g(c.getChainID(t))),{canBuy:k,openBuy:F}=I({caip19:w||"",context:"modal",analyticsEvent:"fiatOnrampFromInsufficientBalance"}),e=t?c.getTokenSymbol(t):i("tokens");return n.default.createElement(M,null,n.default.createElement("div",null,n.default.createElement(P,null,n.default.createElement(T,{type:"failure",backgroundWidth:75}),n.default.createElement(N,null,i("insufficientBalancePrimaryText",{tokenSymbol:e})),n.default.createElement(S,null,i("insufficientBalanceSecondaryText",{tokenSymbol:e})),r?n.default.createElement(B,{borderRadius:8,gap:1,marginTop:32,width:"100%"},n.default.createElement(s,{label:i("insufficientBalanceRemaining")},n.default.createElement(f,{color:a.colors.legacy.spotNegative},`${r.balance} ${e}`)),n.default.createElement(s,{label:i("insufficientBalanceRequired")},n.default.createElement(f,null,`${r.required} ${e}`))):null)),k?n.default.createElement(C,{primaryText:i("buyAssetInterpolated",{tokenSymbol:e}),onPrimaryClicked:F,secondaryText:i("commandCancel"),onSecondaryClicked:p}):n.default.createElement(h,{onClick:p},i("commandCancel")))},L=V;export{V as InsufficientBalance,L as default};
//# sourceMappingURL=InsufficientBalance-O2YE46OY.js.map

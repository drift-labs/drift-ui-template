import{ya as g}from"./chunk-ZPSIMYUC.js";import"./chunk-3W7DN42P.js";import"./chunk-66RATSMU.js";import"./chunk-3CN4PSQF.js";import"./chunk-N6BAVOMX.js";import"./chunk-BV3TS4XT.js";import"./chunk-MSKCA54N.js";import"./chunk-WIVKFT3Y.js";import"./chunk-2DLZSCTQ.js";import"./chunk-DGD53LCE.js";import"./chunk-SAN2LWG5.js";import"./chunk-JVLGNGOV.js";import"./chunk-EMDZTJKZ.js";import"./chunk-26BEY7UU.js";import"./chunk-KHFCJUHU.js";import"./chunk-75HMBX3C.js";import"./chunk-3JMYJD4J.js";import"./chunk-FLIG3OXX.js";import"./chunk-IRT22BM2.js";import"./chunk-GDHNPAWS.js";import"./chunk-QCUZPSGD.js";import"./chunk-4NOCLPPV.js";import"./chunk-HRUBPS3N.js";import"./chunk-G46R4HGO.js";import{La as u,Tb as y}from"./chunk-QY5YIVDQ.js";import"./chunk-MUAOONPW.js";import"./chunk-BY77CZR3.js";import"./chunk-CEYX4EEL.js";import"./chunk-Q2MU5Q7Q.js";import"./chunk-CCUQPG33.js";import"./chunk-IHXFHG2Y.js";import"./chunk-JAQNMSBC.js";import"./chunk-MYAJJRTU.js";import"./chunk-EBUZAGLB.js";import"./chunk-QCKHHJ5F.js";import"./chunk-HPK5Q66L.js";import"./chunk-MEINW66A.js";import"./chunk-QMDPT5WS.js";import"./chunk-PQHYTRV5.js";import{d as w}from"./chunk-Y6JOYO4T.js";import{db as s,fa as T,m as r}from"./chunk-FABKKW5E.js";import"./chunk-ZWNJSFU4.js";import"./chunk-MZPVJTUS.js";import{b as S}from"./chunk-JSLOSOZX.js";import"./chunk-GCJPSL4T.js";import"./chunk-RY7HN3SK.js";import"./chunk-YI2NXTPE.js";import"./chunk-TCB6NDII.js";import"./chunk-R5GARSZH.js";import"./chunk-F24UB3BO.js";import"./chunk-VOCOWPRG.js";import"./chunk-F63TUCMM.js";import"./chunk-CJHTJRVG.js";import"./chunk-PJ6PRBE2.js";import"./chunk-DHKCVHRA.js";import{X as f,c as x,x as p,y as d,ya as i}from"./chunk-UTOBJRXZ.js";import"./chunk-3Q6WUW5S.js";import"./chunk-I5GRDOQ7.js";import"./chunk-3KRCODTN.js";import{f as C,h as l,n as m}from"./chunk-SVG5OEFH.js";l();m();var e=C(x());var O=r.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  padding: 16px;
`,h=r.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -20px;
`,k=r(s).attrs({size:28,weight:500,color:i.colors.legacy.textBase})`
  margin-top: 24px;
`,b=r(s).attrs({size:16,weight:500,color:i.colors.legacy.textDiminished})`
  padding: 0px 5px;
  margin-top: 9px;
  span {
    color: ${i.colors.legacy.textBase};
  }
  label {
    color: ${i.colors.legacy.spotBase};
    cursor: pointer;
  }
`,P=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
`,A=r.div`
  margin-top: auto;
  width: 100%;
`,B=()=>{let{t:n}=f(),{mutateAsync:t}=y(),{handleHideModalVisibility:o,handleShowModalVisibility:a}=g(),v=(0,e.useCallback)(()=>{a("swapConfirmation",void 0,{event:"showSwapModal",payload:{data:{uiContext:"SwapConfirmation"}}}),o("swapTermsOfService")},[a,o]),c=u({goToConfirmation:v});return{onAgreeClick:(0,e.useCallback)(()=>{t(!0),c()},[t,c]),onCancelClick:()=>{o("swapTermsOfService")},t:n}},M=()=>{self.open(p,"_blank")},F=()=>{self.open(d,"_blank")},L=e.default.memo(({onAgreeClick:n,onCancelClick:t,t:o})=>e.default.createElement(O,null,e.default.createElement(h,null,e.default.createElement(P,null,e.default.createElement(T,null),e.default.createElement(k,null,o("termsOfServicePrimaryText")),e.default.createElement(b,null,e.default.createElement(S,{i18nKey:"termsOfServiceDiscliamerFeesEnabledInterpolated"},"We have revised our Terms of Service. By clicking ",e.default.createElement("span",null,'"I Agree"')," you agree to our new",e.default.createElement("label",{onClick:M},"Terms of Service"),".",e.default.createElement("br",null),e.default.createElement("br",null),"Our new Terms of Service include a new ",e.default.createElement("label",{onClick:F},"fee structure")," for certain products.")))),e.default.createElement(A,null,e.default.createElement(w,{primaryText:o("termsOfServiceActionButtonAgree"),secondaryText:o("commandCancel"),onPrimaryClicked:n,onSecondaryClicked:t})))),_=()=>{let n=B();return e.default.createElement(L,{...n})},X=_;export{_ as SwapTermsOfServicePage,X as default};
//# sourceMappingURL=SwapTermsOfServicePage-URA5GX5W.js.map

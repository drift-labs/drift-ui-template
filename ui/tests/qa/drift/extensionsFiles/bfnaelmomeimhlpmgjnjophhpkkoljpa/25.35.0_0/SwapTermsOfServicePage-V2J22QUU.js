import{ya as g}from"./chunk-XZRRLELF.js";import"./chunk-HTEWVCFR.js";import"./chunk-5F2VOKO3.js";import"./chunk-VTQFUHCP.js";import"./chunk-MOTGUR2H.js";import"./chunk-J26VE65N.js";import"./chunk-KKMQB65C.js";import"./chunk-7JKUY6KU.js";import"./chunk-YY4B3XV7.js";import"./chunk-L2LS7YZE.js";import"./chunk-GROXNBTY.js";import"./chunk-OZFKX4E3.js";import"./chunk-57E56ETC.js";import"./chunk-HO6FHTKM.js";import"./chunk-H6IC2DCX.js";import"./chunk-WF3NVBQY.js";import"./chunk-TALMQQTZ.js";import"./chunk-WSJ272XI.js";import"./chunk-S32BDL22.js";import"./chunk-GQ5HEJWI.js";import"./chunk-KGWRBMZX.js";import"./chunk-BSK64RRL.js";import"./chunk-BUTFRTU6.js";import"./chunk-HX3WMS5S.js";import{Ja as u,Rb as y}from"./chunk-ZYPI3ESJ.js";import"./chunk-6EZHAYJL.js";import"./chunk-BRQKCECY.js";import"./chunk-YOO3KN23.js";import"./chunk-YITPJN7X.js";import"./chunk-CQIC5IDD.js";import"./chunk-BHIJKWN7.js";import"./chunk-6N4GZCP2.js";import"./chunk-5OF7XKWY.js";import"./chunk-5AA7BGLC.js";import"./chunk-QSYOXIBV.js";import"./chunk-O7KQ5SYD.js";import"./chunk-V76BEUYF.js";import"./chunk-3U4MKOCV.js";import"./chunk-63PE5ZXT.js";import{d as w}from"./chunk-ZTFOFBVC.js";import{db as s,fa as T,m as r}from"./chunk-FVUSQHVT.js";import"./chunk-HUS6FTFG.js";import"./chunk-NCSBB2TA.js";import{b as S}from"./chunk-4BKJE7YB.js";import"./chunk-KY4L2TTE.js";import"./chunk-W47K3OCY.js";import"./chunk-25TPEQ2Q.js";import"./chunk-E7B2SEGG.js";import"./chunk-XD32MQ4W.js";import"./chunk-LHPEWMJX.js";import"./chunk-HTY647YJ.js";import"./chunk-E2A6YDRV.js";import"./chunk-4XTMHWN2.js";import{X as f,c as x,x as p,y as d,ya as i}from"./chunk-BEUYJGED.js";import"./chunk-3C334UTS.js";import"./chunk-3JLWNHUO.js";import"./chunk-KHOMEOLW.js";import{f as C,h as l,n as m}from"./chunk-64CIGK2X.js";l();m();var e=C(x());var O=r.div`
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
//# sourceMappingURL=SwapTermsOfServicePage-V2J22QUU.js.map

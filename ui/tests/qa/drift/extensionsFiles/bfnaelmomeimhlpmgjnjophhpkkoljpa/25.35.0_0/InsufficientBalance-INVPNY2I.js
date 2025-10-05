import{a as s,c as f}from"./chunk-LKCENBJT.js";import{a as T}from"./chunk-BMSAIRR2.js";import"./chunk-D54DG5S6.js";import{H as I,ya as b}from"./chunk-XZRRLELF.js";import"./chunk-HTEWVCFR.js";import"./chunk-5F2VOKO3.js";import"./chunk-VTQFUHCP.js";import"./chunk-MOTGUR2H.js";import"./chunk-J26VE65N.js";import"./chunk-KKMQB65C.js";import"./chunk-7JKUY6KU.js";import"./chunk-YY4B3XV7.js";import"./chunk-L2LS7YZE.js";import"./chunk-GROXNBTY.js";import"./chunk-OZFKX4E3.js";import"./chunk-57E56ETC.js";import"./chunk-HO6FHTKM.js";import"./chunk-H6IC2DCX.js";import"./chunk-WF3NVBQY.js";import"./chunk-TALMQQTZ.js";import"./chunk-WSJ272XI.js";import"./chunk-S32BDL22.js";import"./chunk-GQ5HEJWI.js";import"./chunk-KGWRBMZX.js";import"./chunk-BSK64RRL.js";import"./chunk-BUTFRTU6.js";import"./chunk-HX3WMS5S.js";import"./chunk-ZYPI3ESJ.js";import"./chunk-6EZHAYJL.js";import"./chunk-BRQKCECY.js";import"./chunk-YOO3KN23.js";import"./chunk-YITPJN7X.js";import"./chunk-CQIC5IDD.js";import"./chunk-BHIJKWN7.js";import"./chunk-6N4GZCP2.js";import"./chunk-5OF7XKWY.js";import"./chunk-5AA7BGLC.js";import"./chunk-QSYOXIBV.js";import"./chunk-O7KQ5SYD.js";import"./chunk-V76BEUYF.js";import"./chunk-3U4MKOCV.js";import"./chunk-63PE5ZXT.js";import{c as h,d as C}from"./chunk-ZTFOFBVC.js";import{db as l,m as o}from"./chunk-FVUSQHVT.js";import"./chunk-HUS6FTFG.js";import"./chunk-NCSBB2TA.js";import"./chunk-4BKJE7YB.js";import"./chunk-KY4L2TTE.js";import"./chunk-W47K3OCY.js";import"./chunk-25TPEQ2Q.js";import"./chunk-E7B2SEGG.js";import"./chunk-XD32MQ4W.js";import"./chunk-LHPEWMJX.js";import"./chunk-HTY647YJ.js";import{Db as y,Sb as g,xb as c}from"./chunk-E2A6YDRV.js";import"./chunk-4XTMHWN2.js";import{Ca as B,X as x,c as D,ya as a}from"./chunk-BEUYJGED.js";import"./chunk-3C334UTS.js";import"./chunk-3JLWNHUO.js";import"./chunk-KHOMEOLW.js";import{f as v,h as u,n as d}from"./chunk-64CIGK2X.js";u();d();var n=v(D());var M=o.div`
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
//# sourceMappingURL=InsufficientBalance-INVPNY2I.js.map

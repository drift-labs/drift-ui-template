import{a as w,b as N}from"./chunk-2CPNRQPL.js";import{a as k}from"./chunk-MSKCA54N.js";import{a as y}from"./chunk-WIVKFT3Y.js";import"./chunk-KHFCJUHU.js";import{a as u}from"./chunk-75HMBX3C.js";import{k as S}from"./chunk-3JMYJD4J.js";import"./chunk-FLIG3OXX.js";import"./chunk-HRUBPS3N.js";import"./chunk-G46R4HGO.js";import{c as g}from"./chunk-Y6JOYO4T.js";import{db as P,m as t}from"./chunk-FABKKW5E.js";import"./chunk-RY7HN3SK.js";import{B as b}from"./chunk-VOCOWPRG.js";import"./chunk-PJ6PRBE2.js";import"./chunk-DHKCVHRA.js";import{Da as C,X as h,c as A,ya as p}from"./chunk-UTOBJRXZ.js";import"./chunk-3Q6WUW5S.js";import"./chunk-I5GRDOQ7.js";import"./chunk-3KRCODTN.js";import{f as x,h as l,n as c}from"./chunk-SVG5OEFH.js";l();c();var T=x(N()),o=x(A());l();c();var a=x(A());var v=t(g).attrs({borderRadius:"100px",width:"auto",fontSize:14,fontWeight:600})`
  flex-shrink: 0;
  padding: 5px 12px;
`,D=a.default.memo(s=>{let{copyText:e,className:d}=s,{buttonText:r,copy:n}=w(e),f=(0,a.useCallback)(m=>{m.stopPropagation(),n()},[n]);return a.default.createElement(v,{className:d,onClick:f,theme:"primary"},r)});var B=t(u).attrs({align:"center",justify:"space-between"})`
  height: 100%;
`,F=t(T.default)`
  padding: 8px;
  background: ${p.colors.legacy.white};
  border-radius: 6px;
`,E=t(y).attrs({align:"center",justify:"space-between"})`
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);
  padding: 12px 15px;
  background: ${p.colors.legacy.areaAccent};
  border: 1px solid ${p.colors.legacy.borderDiminished};
  border-radius: 6px;
`,z=t(u).attrs({align:"center"})`
  ${E} {
    margin-top: 32px;
    margin-bottom: 11px;
  }
`,H=t(y)`
  p:first-child {
    margin-right: 6px;
  }
`,M=s=>{let{accountName:e,walletAddress:d,address:r,symbol:n,onClose:f}=s,m=n||(r?b(r):void 0),{t:i}=h();return{i18nStrings:(0,o.useMemo)(()=>({depositAssetInterpolated:i("depositAssetDepositInterpolated",{tokenSymbol:m}),secondaryText:i("depositAssetSecondaryText"),transferFromExchange:i("depositAssetTransferFromExchange"),depositAssetShareAddressError1:i("sendInvalidQRCodeLoadingError1"),depositAssetShareAddressError2:i("sendInvalidQRCodeLoadingError2"),close:i("commandClose")}),[i,m]),accountName:e,walletAddress:d,onClose:f}},Q=o.default.memo(s=>{let{i18nStrings:e,accountName:d,walletAddress:r,onClose:n}=s;return o.default.createElement(B,null,o.default.createElement(S,null,e.depositAssetInterpolated),o.default.createElement(z,null,r?o.default.createElement(o.default.Fragment,null,o.default.createElement(F,{value:r,size:160}),o.default.createElement(E,null,o.default.createElement(H,null,o.default.createElement(k,{name:d,publicKey:r})),o.default.createElement(D,{copyText:r})),o.default.createElement(P,{size:14,color:p.colors.legacy.textDiminished,lineHeight:20},e.secondaryText)):o.default.createElement(o.default.Fragment,null,o.default.createElement(C,{align:"center",font:"labelSemibold",children:e.depositAssetShareAddressError1}),o.default.createElement(C,{align:"center",font:"body",children:e.depositAssetShareAddressError2}))),o.default.createElement(u,null,o.default.createElement(g,{onClick:n},e.close)))}),$=o.default.memo(s=>{let e=M(s);return o.default.createElement(Q,{...e})}),to=$;export{to as default};
//# sourceMappingURL=DepositAddressPage-JMTZJX4M.js.map

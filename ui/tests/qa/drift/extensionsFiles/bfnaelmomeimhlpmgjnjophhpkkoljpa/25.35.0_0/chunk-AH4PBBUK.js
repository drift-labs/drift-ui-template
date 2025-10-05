import{a as T}from"./chunk-BMSAIRR2.js";import{f as y}from"./chunk-GROXNBTY.js";import{c as C}from"./chunk-ZTFOFBVC.js";import{S as x,db as c,l as f,m as i}from"./chunk-FVUSQHVT.js";import{Ia as l,Ma as m,X as S,c as P,ya as e}from"./chunk-BEUYJGED.js";import{f as B,h as u,n as w}from"./chunk-64CIGK2X.js";u();w();var o=B(P());var k=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: ${t=>t.addScreenPadding?"16px":"0"};
`,L=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`,A=i.div`
  width: 100%;
  > * {
    margin-top: 10px;
  }
  padding: 16px;
`,D=i.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  width: 100%;
  padding: 16px;
`,$=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,oo=i.div`
  position: relative;
`,to=i.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    fill: ${e.colors.legacy.spotPositive};
  }
`,N=i(c).attrs({size:28,weight:500,color:e.colors.legacy.textBase})`
  margin-top: 24px;
  margin-left: 12px;
  margin-right: 12px;
`,b=i(c).attrs({size:16,weight:400,color:e.colors.legacy.textDiminished})`
  margin-top: 9px;
  margin-left: 12px;
  margin-right: 12px;
  span {
    color: ${e.colors.legacy.textDiminished};
    font-weight: bold;
  }
`,I=i(c).attrs({size:16,weight:500,color:e.colors.legacy.spotBase})`
  margin-top: 18px;
  text-decoration: none;
  ${t=>t.opacity!==0&&f`
      &:hover {
        cursor: pointer;
        color: ${e.colors.legacy.spotAccent};
      }
    `}
`,E=({description:t,header:r,icon:a,onClose:n,title:s,txLink:p,isClosable:d,disclaimer:h})=>{let{t:g}=S(),v=()=>{p&&self.open(p)};return o.default.createElement(k,null,r,o.default.createElement(L,null,o.default.createElement(l,{mode:"wait",initial:!0},o.default.createElement(m.div,{key:s,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2}},a)),o.default.createElement(N,null,s),o.default.createElement(b,null,t),p&&o.default.createElement(l,{mode:"wait",initial:!1},o.default.createElement(m.div,{key:p,initial:{opacity:0,y:16},animate:{opacity:1,y:0},exit:{opacity:0},transition:{duration:.2}},o.default.createElement(I,{opacity:1,onClick:v},g("swapTxConfirmationViewTransaction"))))),d&&n?o.default.createElement(A,null,o.default.createElement(b,null,h),d&&n?o.default.createElement(C,{onClick:n},g("commandClose")):null):null)};var io=({ledgerAction:t,numberOfTransactions:r,cancel:a,ledgerApp:n})=>o.default.createElement(k,{addScreenPadding:!0},o.default.createElement(y,{ledgerAction:t,numberOfTransactions:r,cancel:a,ledgerApp:n}));var F=t=>self.open(t,"_blank"),no=({txErrorTitle:t,txErrorMessage:r,txErrorHelpButtonLink:a,txLink:n,onClose:s})=>o.default.createElement(E,{header:o.default.createElement(D,null,o.default.createElement($,{onClick:()=>F(a)},o.default.createElement(x,{fill:"white"}))),icon:o.default.createElement(T,{type:"failure"}),description:r,onClose:s,title:t,txLink:n,isClosable:!0});export{io as a,no as b};
//# sourceMappingURL=chunk-AH4PBBUK.js.map

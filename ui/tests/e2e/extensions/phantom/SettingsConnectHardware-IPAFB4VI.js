import{a as D,b as L,d as N,e as F,h as G}from"./chunk-O2U7C7WV.js";import{a as S}from"./chunk-A3RRBBHM.js";import"./chunk-6BLAMF36.js";import{a as O}from"./chunk-J4U35X5B.js";import"./chunk-BGMSTZKH.js";import"./chunk-73REJSRN.js";import"./chunk-ENKMXDOR.js";import"./chunk-5XQ3OJBR.js";import"./chunk-ZPSIMYUC.js";import"./chunk-3W7DN42P.js";import"./chunk-66RATSMU.js";import"./chunk-3CN4PSQF.js";import"./chunk-N6BAVOMX.js";import"./chunk-BV3TS4XT.js";import"./chunk-MSKCA54N.js";import{a as _}from"./chunk-WIVKFT3Y.js";import"./chunk-2DLZSCTQ.js";import"./chunk-DGD53LCE.js";import"./chunk-SAN2LWG5.js";import"./chunk-JVLGNGOV.js";import"./chunk-EMDZTJKZ.js";import"./chunk-26BEY7UU.js";import"./chunk-KHFCJUHU.js";import"./chunk-75HMBX3C.js";import{d as T}from"./chunk-3JMYJD4J.js";import"./chunk-FLIG3OXX.js";import{b as u}from"./chunk-IRT22BM2.js";import"./chunk-GDHNPAWS.js";import"./chunk-E3APWDRI.js";import"./chunk-QCUZPSGD.js";import{a as f}from"./chunk-XXMLK64G.js";import"./chunk-4NOCLPPV.js";import"./chunk-HRUBPS3N.js";import"./chunk-G46R4HGO.js";import"./chunk-N5BPASPN.js";import"./chunk-QY5YIVDQ.js";import"./chunk-MUAOONPW.js";import"./chunk-BY77CZR3.js";import"./chunk-CEYX4EEL.js";import"./chunk-Q2MU5Q7Q.js";import"./chunk-CCUQPG33.js";import"./chunk-IHXFHG2Y.js";import"./chunk-JAQNMSBC.js";import"./chunk-MYAJJRTU.js";import"./chunk-EBUZAGLB.js";import"./chunk-QCKHHJ5F.js";import"./chunk-HPK5Q66L.js";import"./chunk-MEINW66A.js";import"./chunk-QMDPT5WS.js";import"./chunk-PQHYTRV5.js";import"./chunk-Y6JOYO4T.js";import{m as s,v as $}from"./chunk-FABKKW5E.js";import"./chunk-ZWNJSFU4.js";import"./chunk-MZPVJTUS.js";import"./chunk-JSLOSOZX.js";import"./chunk-GCJPSL4T.js";import"./chunk-RY7HN3SK.js";import"./chunk-YI2NXTPE.js";import"./chunk-TCB6NDII.js";import"./chunk-R5GARSZH.js";import"./chunk-F24UB3BO.js";import{Qa as v,Xa as B}from"./chunk-VOCOWPRG.js";import"./chunk-F63TUCMM.js";import"./chunk-CJHTJRVG.js";import"./chunk-PJ6PRBE2.js";import"./chunk-DHKCVHRA.js";import{Ia as E,Ma as P,c as H,ya as e}from"./chunk-UTOBJRXZ.js";import"./chunk-3Q6WUW5S.js";import"./chunk-I5GRDOQ7.js";import"./chunk-3KRCODTN.js";import{f as b,h as n,n as i}from"./chunk-SVG5OEFH.js";n();i();var t=b(H());n();i();var a=b(H());n();i();var I=s(u)`
  cursor: pointer;
  width: 24px;
  height: 24px;
  transition: background-color 200ms ease;
  background-color: ${o=>o.$isExpanded?e.colors.legacy.black:e.colors.legacy.elementAccent} !important;
  :hover {
    background-color: ${e.colors.legacy.gray};
    svg {
      fill: white;
    }
  }
  svg {
    fill: ${o=>o.$isExpanded?"white":e.colors.legacy.textDiminished};
    transition: fill 200ms ease;
    position: relative;
    ${o=>o.top?`top: ${o.top}px;`:""}
    ${o=>o.right?`right: ${o.right}px;`:""}
  }
`;var V=s(_).attrs({justify:"space-between"})`
  background-color: ${e.colors.legacy.areaBase};
  padding: 10px 16px;
  border-bottom: 1px solid ${e.colors.legacy.borderDiminished};
  height: 46px;
  opacity: ${o=>o.opacity??"1"};
`,q=s.div`
  display: flex;
  margin-left: 10px;
  > * {
    margin-right: 10px;
  }
`,M=s.div`
  width: 24px;
  height: 24px;
`,W=({onBackClick:o,totalSteps:c,currentStepIndex:l,isHidden:m,showBackButtonOnFirstStep:r,showBackButton:h=!0})=>a.default.createElement(V,{opacity:m?0:1},h&&(r||l!==0)?a.default.createElement(I,{right:1,onClick:o},a.default.createElement($,null)):a.default.createElement(M,null),a.default.createElement(q,null,D(c).map(p=>{let d=p<=l?e.colors.legacy.spotBase:e.colors.legacy.elementAccent;return a.default.createElement(u,{key:p,diameter:12,color:d})})),a.default.createElement(M,null));n();i();var K=()=>{let{mutateAsync:o}=B(),{hardwareStepStack:c,pushStep:l,popStep:m,currentStep:r,setOnConnectHardwareAccounts:h,setOnConnectHardwareDone:x,setExistingAccounts:p}=L(),{data:d=[],isFetched:k,isError:y}=v(),g=T(c,(C,U)=>C?.length===U.length),X=c.length>(g??[]).length,A=g?.length===0,j={initial:{x:A?0:X?150:-150,opacity:A?1:0},animate:{x:0,opacity:1},exit:{opacity:0},transition:{duration:.2}},J=(0,t.useCallback)(()=>{r()?.props.preventBack||(r()?.props.onBackCallback&&r()?.props.onBackCallback?.(),m())},[r,m]);return O(()=>{h(async C=>{await o(C),await f.set(S,!await f.get(S))}),x(()=>self.close()),l(t.default.createElement(G,null))},c.length===0),(0,t.useEffect)(()=>{p({data:d,isFetched:k,isError:y})},[d,k,y,p]),t.default.createElement(N,null,t.default.createElement(W,{totalSteps:3,onBackClick:J,showBackButton:!r()?.props.preventBack,currentStepIndex:c.length-1}),t.default.createElement(E,{mode:"wait"},t.default.createElement(P.div,{style:{display:"flex",flexGrow:1},key:`${c.length}_${g?.length}`,...j},t.default.createElement(F,null,r()))))},Po=K;export{Po as default};
//# sourceMappingURL=SettingsConnectHardware-IPAFB4VI.js.map

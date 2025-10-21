import{a as D,b as L,d as N,e as F,h as G}from"./chunk-VLBDVXSZ.js";import{a as S}from"./chunk-EEKL7TUM.js";import"./chunk-BMSAIRR2.js";import{a as O}from"./chunk-7YGDJKGH.js";import"./chunk-M5X5W2JG.js";import"./chunk-OPP3LADA.js";import"./chunk-F3X3V27F.js";import"./chunk-KWD7GYOW.js";import"./chunk-XZRRLELF.js";import"./chunk-HTEWVCFR.js";import"./chunk-5F2VOKO3.js";import"./chunk-VTQFUHCP.js";import"./chunk-MOTGUR2H.js";import"./chunk-J26VE65N.js";import"./chunk-KKMQB65C.js";import{a as _}from"./chunk-7JKUY6KU.js";import"./chunk-YY4B3XV7.js";import"./chunk-L2LS7YZE.js";import"./chunk-GROXNBTY.js";import"./chunk-OZFKX4E3.js";import"./chunk-57E56ETC.js";import"./chunk-HO6FHTKM.js";import"./chunk-H6IC2DCX.js";import"./chunk-WF3NVBQY.js";import{d as T}from"./chunk-TALMQQTZ.js";import"./chunk-WSJ272XI.js";import{b as u}from"./chunk-S32BDL22.js";import"./chunk-GQ5HEJWI.js";import"./chunk-JVIFB5NQ.js";import"./chunk-KGWRBMZX.js";import{a as f}from"./chunk-3QXXMOWQ.js";import"./chunk-BSK64RRL.js";import"./chunk-BUTFRTU6.js";import"./chunk-HX3WMS5S.js";import"./chunk-2XJQPJ5M.js";import"./chunk-ZYPI3ESJ.js";import"./chunk-6EZHAYJL.js";import"./chunk-BRQKCECY.js";import"./chunk-YOO3KN23.js";import"./chunk-YITPJN7X.js";import"./chunk-CQIC5IDD.js";import"./chunk-BHIJKWN7.js";import"./chunk-6N4GZCP2.js";import"./chunk-5OF7XKWY.js";import"./chunk-5AA7BGLC.js";import"./chunk-QSYOXIBV.js";import"./chunk-O7KQ5SYD.js";import"./chunk-V76BEUYF.js";import"./chunk-3U4MKOCV.js";import"./chunk-63PE5ZXT.js";import"./chunk-ZTFOFBVC.js";import{m as s,v as $}from"./chunk-FVUSQHVT.js";import"./chunk-HUS6FTFG.js";import"./chunk-NCSBB2TA.js";import"./chunk-4BKJE7YB.js";import"./chunk-KY4L2TTE.js";import"./chunk-W47K3OCY.js";import"./chunk-25TPEQ2Q.js";import"./chunk-E7B2SEGG.js";import"./chunk-XD32MQ4W.js";import"./chunk-LHPEWMJX.js";import"./chunk-HTY647YJ.js";import{Xe as v,cf as B}from"./chunk-E2A6YDRV.js";import"./chunk-4XTMHWN2.js";import{Ia as E,Ma as P,c as H,ya as e}from"./chunk-BEUYJGED.js";import"./chunk-3C334UTS.js";import"./chunk-3JLWNHUO.js";import"./chunk-KHOMEOLW.js";import{f as b,h as n,n as i}from"./chunk-64CIGK2X.js";n();i();var t=b(H());n();i();var a=b(H());n();i();var I=s(u)`
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
//# sourceMappingURL=SettingsConnectHardware-ED7RBWDQ.js.map

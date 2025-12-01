import{a as x,b as _}from"./chunk-2CPNRQPL.js";import{a as z}from"./chunk-YLFDBMVI.js";import{d as N}from"./chunk-EMDZTJKZ.js";import{c as P}from"./chunk-26BEY7UU.js";import{a as v}from"./chunk-75HMBX3C.js";import{k as I,l as S}from"./chunk-3JMYJD4J.js";import{a as g}from"./chunk-MYAJJRTU.js";import{c as H}from"./chunk-Y6JOYO4T.js";import{db as l,m as n,z as D}from"./chunk-FABKKW5E.js";import{H as b,e as k,y as w}from"./chunk-VOCOWPRG.js";import{Zb as y}from"./chunk-PJ6PRBE2.js";import{Ha as B,X as A,c as h,wa as T,ya as r}from"./chunk-UTOBJRXZ.js";import{f as u,h as m,n as c}from"./chunk-SVG5OEFH.js";m();c();var p=u(h());var eo=p.default.memo(({chainAddress:i,onQRClick:d})=>{let{networkID:a,address:e}=i,{buttonText:s,copied:f,copy:C}=x(e),M=w(e,4),W=b(i.networkID),$=(0,p.useCallback)(O=>{O.stopPropagation(),C()},[C]);return p.default.createElement(B,{copied:f,copiedText:s,formattedAddress:M,networkBadge:p.default.createElement(N,{networkID:a,address:e}),networkLogo:p.default.createElement(g,{networkID:a,size:40}),networkName:W,onCopyClick:$,onQRClick:d})});m();c();var L=u(_()),o=u(h());m();c();var t=u(h());var j=n.div`
  width: 100%;
`,F=n(P)`
  background: ${r.colors.legacy.areaAccent};
  border: 1px solid ${r.colors.legacy.borderDiminished};
  border-radius: 6px 6px 0 0;
  border-bottom: none;
  margin: 0;
  padding: 16px 22px;
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  text-align: center;
  resize: none;
  overflow: hidden;
`,U=n.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${r.colors.legacy.areaAccent};
  border: 1px solid ${r.colors.legacy.borderDiminished};
  border-radius: 0 0 6px 6px;
  border-top: none;
  height: 40px;
  width: 100%;
  padding: 0;
  cursor: pointer;

  &:hover {
    background: ${r.colors.brand.black};
  }
`,q=n(l).attrs({size:16,weight:600,lineHeight:16})`
  margin-left: 6px;
`,E=({value:i})=>{let{buttonText:d,copy:a}=x(i),e=(0,t.useRef)(null);return(0,t.useEffect)(()=>{(()=>{if(e&&e.current){let f=e.current.scrollHeight;e.current.style.height=f+"px"}})()},[]),t.default.createElement(j,null,t.default.createElement(F,{ref:e,readOnly:!0,value:i}),t.default.createElement(U,{onClick:a},t.default.createElement(D,null),t.default.createElement(q,null,d)))};var G=48,Ho=o.default.memo(({address:i,networkID:d,headerType:a,onCloseClick:e})=>{let{t:s}=A();return o.default.createElement(o.default.Fragment,null,o.default.createElement(a==="page"?I:S,null,s("depositAddress")),o.default.createElement(z,null,o.default.createElement(v,{align:"center",justify:"center",id:"column"},o.default.createElement(Z,{id:"QRCodeWrapper"},o.default.createElement(R,{value:i,size:160,level:"Q",id:"styledqrcode"}),o.default.createElement(g,{networkID:d,size:G,borderColor:"areaBase",className:T({position:"absolute"})}))),o.default.createElement(l,{size:16,lineHeight:22,weight:600,margin:"16px 0 8px"},s("depositAddressChainInterpolated",{chain:y.getNetworkName(d)})),o.default.createElement(E,{value:i}),o.default.createElement(l,{size:14,color:r.colors.legacy.textDiminished,lineHeight:20,margin:"16px 0"},s("depositAssetSecondaryText")," ",o.default.createElement(J,{href:k,target:"_blank",rel:"noopener noreferrer"},s("commandLearnMore")))),o.default.createElement(H,{onClick:e},s("commandClose")))}),R=n(L.default)`
  padding: 8px;
  background: ${r.colors.legacy.white};
  border-radius: 6px;
  position: relative;
`,Z=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`,J=n.a`
  color: ${r.colors.legacy.spotBase};
  text-decoration: none;
  font-weight: 500;
`;export{eo as a,E as b,Ho as c};
//# sourceMappingURL=chunk-OC3LVZQA.js.map

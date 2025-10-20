import{e as ce}from"./chunk-YLFDBMVI.js";import{a as E,c as z,d as K,e as H,f as _}from"./chunk-BCZHKOY6.js";import{a as h}from"./chunk-WIVKFT3Y.js";import{a as pe,b as V}from"./chunk-26BEY7UU.js";import{nc as de,oc as le}from"./chunk-QY5YIVDQ.js";import{a as M}from"./chunk-MYAJJRTU.js";import{db as x,m as a,u as W}from"./chunk-FABKKW5E.js";import{c as ae}from"./chunk-YI2NXTPE.js";import{g as se}from"./chunk-R5GARSZH.js";import{Fa as N,Hb as U,Ia as te,La as oe,T as R,Ta as re,Wb as ie,Y as ee,kb as ne,p as Y,y as Z}from"./chunk-VOCOWPRG.js";import{Ga as G,Pc as Q,Zb as A,jd as J}from"./chunk-PJ6PRBE2.js";import{Ga as v,I as X,J as q,X as g,c as C,gb as b,ya as L}from"./chunk-UTOBJRXZ.js";import{f as I,h as p,n as c}from"./chunk-SVG5OEFH.js";p();c();var n=I(C());p();c();var r=I(C());var ue=({onChange:e,value:t,networkID:o})=>{let d=N(),i=(0,r.useMemo)(()=>{if(!o)return[];let f=A.getAddressTypes(o);return d.filter(l=>f.includes(l))},[d,o]);if(!i||i.length===0)return null;let m=i.includes(t)?t:i[0];return r.default.createElement(Ce,{onChange:e,value:m},({isExpanded:f})=>r.default.createElement(r.default.Fragment,null,r.default.createElement(ve,{isActive:f},r.default.createElement(me,{networkID:o,addressType:m},r.default.createElement(fe,null,r.default.createElement(W,{fill:L.colors.legacy.textDiminished,width:10})))),r.default.createElement(be,{portal:!1},r.default.createElement(H,{maxHeight:"300px"},i?.filter(l=>l!==m)?.map(l=>r.default.createElement(Te,{key:l,value:l},r.default.createElement(me,{networkID:o,addressType:l})))))))},me=({addressType:e,networkID:t,children:o})=>!t||!e?null:r.default.createElement(h,{justify:"space-between"},r.default.createElement(h,null,r.default.createElement(M,{networkID:t,size:32}),r.default.createElement(ke,null,G.getDisplayName(e))),o),Ce=a(E)`
  width: 100%;
  position: relative;
`,fe=a.div`
  display: inline-flex;
  line-height: 0;
`,ve=a(({isActive:e,...t})=>r.default.createElement(z,{...t}))`
  padding: 8px 16px 8px 12px;

  ${fe} {
    svg {
      transform: rotate(${e=>e.isActive?"-180deg":"0"});
      transition: transform 0.2s ease-in-out;
    }
  }
`,be=a(K)`
  z-index: 2;
  width: 100%;
`,Te=a(_)`
  padding: 8px 16px 8px 12px;
  min-height: 50px;
`,ke=a(x).attrs({size:16,weight:400,lineHeight:19,margin:"0 0 0 8px"})``;p();c();var s=I(C());var De=a(E)`
  width: 100%;
  position: relative;
`,ye=a.div`
  display: inline-flex;
  line-height: 0;
`,Be=a(({isActive:e,...t})=>s.default.createElement(z,{...t}))`
  padding: 8px 16px 8px 12px;

  ${ye} {
    svg {
      transform: rotate(${e=>e.isActive?"-180deg":"0"});
      transition: transform 0.2s ease-in-out;
    }
  }
`,Pe=a(K)`
  z-index: 2;
  width: 100%;
`,Fe=a(_)`
  padding: 8px 16px 8px 12px;
  min-height: 50px;
`,Ne=a(x).attrs({size:16,weight:400,lineHeight:19,margin:"0 0 0 8px"})``,Se=({onChange:e,value:t})=>{let o=te();return s.default.createElement(De,{onChange:e,value:t},({isExpanded:d})=>s.default.createElement(s.default.Fragment,null,s.default.createElement(Be,{isActive:d},s.default.createElement(he,{networkID:t},s.default.createElement(ye,null,s.default.createElement(W,{fill:L.colors.legacy.textDiminished,width:10})))),s.default.createElement(Pe,{portal:!1},s.default.createElement(H,{maxHeight:"300px"},o.filter(i=>i!==t).map(i=>s.default.createElement(Fe,{key:i,value:i},s.default.createElement(he,{networkID:i})))))))},he=({networkID:e,children:t})=>s.default.createElement(h,{justify:"space-between"},s.default.createElement(h,null,s.default.createElement(M,{networkID:e,size:32}),s.default.createElement(Ne,null,A.getNetworkName(e))),t);var Tt=({onClick:e,disabled:t})=>{let{t:o}=g(),d=oe();return n.default.createElement(v,{topLeft:{text:o("addAccountImportWalletPrimaryText")},bottomLeft:{text:o(d?"addAccountImportWalletSolanaSecondaryText":"addAccountImportWalletSecondaryText")},start:n.default.createElement(b,{backgroundColor:"borderBase",color:"textBase",icon:"Download",shape:"circle",size:32}),onClick:e,disabled:t})},kt=({control:e,getValues:t,register:o,setValue:d,trigger:i,errors:m,nameValidations:f,privateKey:l,privateKeyValidations:B,addressPreview:T})=>{let{t:k}=g(),P=ie(w=>w.editableAccountMetadata),y=t("networkID"),S=A.getAddressTypes(y),u=N(),Ae=u.filter(w=>S.includes(w));return n.default.createElement(ce,null,n.default.createElement(U,{name:"networkID",control:e,render:({field:{onChange:w,value:O}})=>u.length===1?n.default.createElement(n.default.Fragment,null):n.default.createElement(Se,{onChange:F=>{w(F);let ge=A.getAddressTypes(F),xe=u.filter(Ie=>ge.includes(Ie));d("addressType",xe[0]),l&&i("privateKey")},value:O})}),n.default.createElement(U,{name:"addressType",control:e,render:({field:{onChange:w,value:O}})=>Ae.length===1?n.default.createElement(n.default.Fragment,null):n.default.createElement(ue,{onChange:F=>{w(F),l&&i("privateKey")},value:O,networkID:y})}),n.default.createElement(V.WithWarning,{placeholder:k("addAccountImportAccountName"),defaultValue:P?.name,warning:!!m.name,warningMessage:m.name?.message,autoComplete:"off",maxLength:se,...o("name",f)}),n.default.createElement(We.WithWarning,{placeholder:k("addAccountImportAccountPrivateKey"),defaultValue:"",warning:!!m.privateKey,warningMessage:m.privateKey?.message,autoComplete:"off",...o("privateKey",B)}),T?n.default.createElement(Le,{label:k("settingsWalletAddress"),pubkey:T}):null)},Le=n.default.memo(({label:e,pubkey:t})=>n.default.createElement(h,{justify:"space-between",align:"center",margin:"-7px 0 0"},n.default.createElement(x,{size:16,weight:600},e),n.default.createElement(x,{size:16},Z(t,4)))),Me=a(V).attrs({as:"textarea"})`
  height: 120px;
  text-align: start;
  resize: none;
  -webkit-text-security: disc;
  font-size: 16px;
`,We=pe(Me);p();c();var $=I(C()),Mt=({onClick:e,disabled:t})=>{let{t:o}=g(),d=X||q;return $.default.createElement(v,{topLeft:{text:o("addAccountHardwareWalletPrimaryText")},bottomLeft:{text:o("addAccountHardwareWalletSecondaryText")},start:$.default.createElement(b,{backgroundColor:"borderBase",color:"textBase",icon:"WalletHardware",shape:"circle",size:32}),onClick:e,disabled:t||d})};p();c();var j=I(C()),_t=({onClick:e,disabled:t})=>{let{t:o}=g();return j.default.createElement(v,{topLeft:{text:o("addAccountImportSeedPhrasePrimaryText")},bottomLeft:{text:o("addAccountImportSeedPhraseSecondaryText")},start:j.default.createElement(b,{backgroundColor:"borderBase",color:"textBase",icon:"File",shape:"circle",size:32}),onClick:e,disabled:t})};p();c();var we=I(C());var eo=e=>{let t=ee(),{mutateAsync:o}=ne(),{mutateAsync:d}=re(),i=J();return{handleImportSeed:(0,we.useCallback)(async({mnemonic:f,accountMetas:l,accountName:B,offsetIndex:T=0,seedlessOnboardingType:k})=>{let P={},y=await(e==="seed"?de(f,l,B):le(f,l,B));if(y.forEach((S,u)=>{P[S.identifier]=Y({account:S,index:u,offsetIndex:T})}),y.length===0)throw new Error("Failed to set seed phrase");if(await d({metadataBatch:P}),await o({identifier:y[0].identifier}),e==="seedless"&&k==="seedlessBackup")try{let S=new Set(y.map(u=>u.seedIdentifier));await Promise.all([...S].map(u=>t.addAuthFactor({secretIdentifier:u})))}catch{Q.captureError(new Error("Unable to add auth factor for se*dless!"),"Auth")}ae.capture("addSeedAccount",{data:{walletIndex:T+1}}),R(i)},[d,o,e,i,t])}};export{eo as a,Se as b,Tt as c,kt as d,Mt as e,_t as f};
//# sourceMappingURL=chunk-YM7GDGKR.js.map

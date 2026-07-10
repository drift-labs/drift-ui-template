import{a as P}from"./chunk-6BLAMF36.js";import{a as rt,b as dt}from"./chunk-J4U35X5B.js";import{b as le}from"./chunk-BGMSTZKH.js";import{b as st,c as it,d as Te}from"./chunk-SAN2LWG5.js";import{d as Y}from"./chunk-JVLGNGOV.js";import{b as at}from"./chunk-EMDZTJKZ.js";import{a as Be}from"./chunk-3JMYJD4J.js";import{a as ct}from"./chunk-FLIG3OXX.js";import{a as De}from"./chunk-N5BPASPN.js";import{c as Ke}from"./chunk-QY5YIVDQ.js";import{a as ot}from"./chunk-CEYX4EEL.js";import{b as Je,m as Qe,x as ae}from"./chunk-CCUQPG33.js";import{l as et,m as tt}from"./chunk-JAQNMSBC.js";import{a as se}from"./chunk-MYAJJRTU.js";import{b as ie}from"./chunk-Y6JOYO4T.js";import{db as $,m as s,va as nt}from"./chunk-FABKKW5E.js";import{b as Re}from"./chunk-YI2NXTPE.js";import{Ea as Ye,Fa as be,Ga as Xe,Ia as xe,Vb as Ze,g as we,t as ye,y as qe}from"./chunk-VOCOWPRG.js";import{Kc as Ve,Yb as Ue,Zb as _,ra as je,sa as $e,ta as ze}from"./chunk-PJ6PRBE2.js";import{X as v,c as te,cb as E,ya as O}from"./chunk-UTOBJRXZ.js";import{f as ee,h,n as f}from"./chunk-SVG5OEFH.js";h();f();var kt={existingAccounts:{data:[],isFetched:!1,isError:!1},hardwareStepStack:[],hardwareStepSubStack:{},selectedChains:[],selectedChainsMap:new Map,chainImportStep:1,derivedAccountGroups:[],discoveredAccounts:[],activeAccountsFound:!1,selectedAccounts:{},onConnectHardwareAccounts:e=>Promise.resolve(),onConnectHardwareDone:()=>{}},N=Ze((e,o)=>({...kt,pushStep:t=>{let n=o().hardwareStepStack;e({hardwareStepStack:n.concat(t)})},popStep:()=>{let n=o().hardwareStepStack.length-1;if((o().hardwareStepSubStack[n]??[]).length)return e(we(d=>{d.hardwareStepSubStack[n]=d.hardwareStepSubStack[n].slice(0,-1)}));e(we(d=>{d.hardwareStepStack=d.hardwareStepStack.slice(0,-1)}))},pushSubStep:t=>{let r=o().hardwareStepStack.length-1,d=o().hardwareStepSubStack[r]??[];e(we(y=>{y.hardwareStepSubStack[r]=d.concat([t])}))},currentStep:()=>{let t=o().hardwareStepStack,n=o().hardwareStepSubStack,r=t.length>0?t.length-1:t.length;return n[r]?.length?Be(n[r]):Be(t)},setExistingAccounts:t=>{e({existingAccounts:t})},setSelectedChains:(t,n)=>{e({selectedChains:t,selectedChainsMap:n})},setDecrementChainImportStep:()=>{let t=o().chainImportStep;e({chainImportStep:t-1})},setIncrementChainImportStep:()=>{let t=o().chainImportStep;e({chainImportStep:t+1})},setDerivedAccountGroups:t=>{e({derivedAccountGroups:t})},setDiscoveredAccounts:(t,n)=>{e({discoveredAccounts:t,activeAccountsFound:n})},selectAccount:t=>{let r={...o().selectedAccounts};r[t]=!0,e({selectedAccounts:r})},deselectAccount:t=>{let r={...o().selectedAccounts};delete r[t],e({selectedAccounts:r})},setSelectedAccounts:t=>{e({selectedAccounts:t})},setOnConnectHardwareAccounts:t=>{e({onConnectHardwareAccounts:t})},setOnConnectHardwareDone:t=>{e({onConnectHardwareDone:t})}}));h();f();h();f();h();f();var pt=s.main`
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
  width: ${420}px;
  min-height: ${480}px;
  position: relative;
  overflow: hidden;
  background-color: ${O.colors.legacy.areaBase};
  border: 1px solid ${O.colors.legacy.borderBase};
  border-radius: 16px;
`;var go=s(pt)`
  display: flex;
  flex-direction: column;
`,Ao=s.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  padding: 20px 20px;
`,X=s.div`
  padding-top: 44px;
`,G=s.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  width: 100%;
  overflow: auto;
`;h();f();var H=ee(te());h();f();var a=ee(te());h();f();var k=ee(te());h();f();var W=ee(te());var ve=()=>{let{t:e}=v(),{discoveredAccounts:o,selectedAccounts:t,onConnectHardwareAccounts:n,onConnectHardwareDone:r}=N(),{mutateAsync:d}=Ye(),[y,C]=(0,W.useState)(!1),A=(0,W.useMemo)(()=>o.filter(l=>!!t[l.discoveryIdentifier]),[o,t]);return(0,W.useEffect)(()=>{if(A.length){let l=[],c=new Set;for(let u of A){let{accounts:S,seedIndex:T,accountIndex:b}=u,L=[],I=[];for(let w of S)je(w.derivationPathType)?(I.push({pathType:w.derivationPathType,value:w.publicKey}),(!("amount"in w)||parseFloat(w.amount)!==0)&&c.add(w.chainType)):($e(w.derivationPathType)||ze(w.derivationPathType))&&L.push({pathType:w.derivationPathType,value:w.address});l.push({derivationIndex:T,addresses:L,publicKeys:I,accountIndex:b})}n({accounts:l}).then(()=>{c.size>0&&d({addressTypes:Array.from(c)})}).finally(()=>C(!0))}else C(!0)},[A,n,d]),W.default.createElement(G,null,W.default.createElement(X,null,W.default.createElement(Y,{icon:W.default.createElement(P,{type:"success"}),primaryText:e("connectHardwareAccountsAddedInterpolated",{numOfAccounts:A.length}),headerStyle:"large",secondaryText:e("connectHardwareFinishSecondaryText")})),W.default.createElement(E,{onClick:r,background:"spot",disabled:!y},e("pastParticipleDone")))};h();f();var M=ee(te());h();f();var g=ee(te());var Bt=(e,o,t)=>{switch(o){case"seed":return e("onboardingImportAccountsAccountName",{walletIndex:t});case"ledger":return e("onboardingImportAccountsLedgerAccountName",{walletIndex:t})}},Ot=({account:e})=>{let{t:o}=v();return g.default.createElement(Gt,null,g.default.createElement(Pt,null,g.default.createElement(se,{networkID:e.chain.id,size:40,borderColor:"elementBase"})),g.default.createElement(Nt,null,g.default.createElement(Lt,null,g.default.createElement(at,{networkID:e.chain.id,walletAddress:e.address},g.default.createElement(He,null,e.chain.name)),g.default.createElement(He,null,qe(e.address,4))),g.default.createElement(ke,null,"amount"in e&&"chain"in e?g.default.createElement(ut,null,ot(e.amount)," ",e.chain.symbol):null,"amount"in e&&e.lastActivityTimestamp?g.default.createElement(ut,null,o("onboardingImportAccountsLastActive",{formattedTimestamp:dt(e.lastActivityTimestamp*1e3,!0)})):null)))},lt=g.default.memo(({accountType:e,accounts:o,checked:t,accountIndex:n,onPress:r})=>{let{t:d}=v(),y=n+1;return g.default.createElement(mt,null,g.default.createElement(Ft,null,g.default.createElement(He,null,Bt(d,e,y)),g.default.createElement(le,{checked:t,onChange:r,"data-testid":"account-select-address-row-checkbox"})),o.map((C,A)=>g.default.createElement(Ot,{key:`${C.address}-${A}`,account:C})))}),$o=g.default.memo(({totalAccounts:e,selectedAccounts:o,onPress:t})=>{let{t:n}=v();return g.default.createElement(mt,null,g.default.createElement(Et,null,g.default.createElement(He,null,n("onboardingSelectAccountsNoOfAccountsSelected",{numOfAccounts:o}))," ",g.default.createElement(Mt,null,n("onboardingSelectAccountSelectAllText")," ",g.default.createElement(le,{checked:o===e,onChange:t,"data-testid":"account-select-all-checkbox"}))))}),mt=s.div`
  margin-bottom: 24px;
  width: 100%;
`,Pt=s.div`
  flex-shrink: 0;
  margin-right: 10px;
`,Nt=s.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,ke=s.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,Lt=s(ke)`
  margin-bottom: 2px;
`,Et=s(ke)`
  background: ${O.colors.legacy.elementBase};
  margin-bottom: 1px;
  padding: 12px 10px 12px 14px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Mt=s.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Ft=s(ke)`
  background: ${O.colors.legacy.elementBase};
  margin-bottom: 1px;
  padding: 12px 16px 12px 14px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;

  & > span {
    margin-right: 0;
  }
`,Gt=s.div`
  background: ${O.colors.legacy.elementBase};
  margin-top: 1px;
  padding: 17px 16px 17px 14px;
  width: 100%;
  display: flex;
  align-items: center;

  &:last-of-type {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
`,He=s($).attrs({size:16,lineHeight:19,weight:600})``,ut=s($).attrs({size:14,lineHeight:17,weight:400,color:O.colors.legacy.textDiminished})``;var ht=({activeAccounts:e})=>{let{t:o}=v(),{selectedAccounts:t,selectAccount:n,deselectAccount:r,pushSubStep:d}=N(),y=(0,M.useMemo)(()=>Object.values(t).filter(l=>!!l).length===0,[t]),C=(0,M.useCallback)(()=>{d(M.default.createElement(ve,{preventBack:!0}))},[d]);return M.default.createElement(G,null,M.default.createElement("div",{style:{marginBottom:15}},M.default.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",marginBottom:30}},M.default.createElement($,{weight:500,size:30,lineHeight:34,maxWidth:"320px"},o("connectHardwareSelectAccounts")),M.default.createElement(_t,{wordBreak:"break-word",size:18,lineHeight:22,color:O.colors.legacy.textDiminished},o("connectHardwareChooseAccountsToConnect"))),M.default.createElement("div",{style:{maxHeight:420,overflowY:"scroll"}},e.map(({accounts:A,discoveryIdentifier:l,accountIndex:c})=>{let F=!!t[l];return M.default.createElement(lt,{key:l,accountType:"ledger",accounts:A,accountIndex:c,checked:F,onPress:()=>{F?r(l):n(l)}})}))),M.default.createElement(E,{onClick:C,background:"spot",disabled:y},o("commandContinue")))},_t=s($)`
  margin-top: 15px;
`;var ft=()=>{let{t:e}=v(),{discoveredAccounts:o,activeAccountsFound:t,setSelectedAccounts:n,pushSubStep:r}=N(),d=(0,k.useMemo)(()=>{let A;if(t){let l=o.filter(c=>c.status==="undiscovered"||c.isSelectedByDefault);A=e(l.length===1?"connectHardwareFoundAccountsWithActivitySingular":"connectHardwareFoundAccountsWithActivity",{numOfAccounts:l.length})}else A=e("connectHardwareFoundSomeAccounts");return A},[t,e,o]),y=(0,k.useCallback)(()=>{r(k.default.createElement(ht,{activeAccounts:o}))},[r,o]),C=(0,k.useCallback)(()=>{r(k.default.createElement(ve,{preventBack:!0}))},[r]);return(0,k.useEffect)(()=>{let A=o.reduce((l,c,F)=>((c.status==="discovered"&&c.isSelectedByDefault||F===0)&&(l[c.discoveryIdentifier]=!0),l),{});n(A)},[o,n,t,e]),k.default.createElement(G,null,k.default.createElement(Wt,null,k.default.createElement(Y,{icon:k.default.createElement(P,{type:"success"}),primaryText:e("connectHardwareConnectAccounts"),headerStyle:"large",secondaryText:d})),k.default.createElement(jt,{onClick:y,theme:"default"},e("connectHardwareSelectAccounts")),k.default.createElement(E,{onClick:C,background:"spot"},e("commandContinue")))},Wt=s(X)`
  margin-bottom: 35px;
`,jt=s(E)`
  margin-bottom: 10px;
`;var $t=19,zt=e=>{let o=new Set;for(let t of e)for(let{address:n}of t.addresses)o.add(n);return o},me=()=>{let{chainImportStep:e,setIncrementChainImportStep:o,selectedChains:t,selectedChainsMap:n,pushStep:r,pushSubStep:d,setDiscoveredAccounts:y,setDerivedAccountGroups:C,derivedAccountGroups:A}=N(),l=(0,a.useRef)(A),{t:c,i18n:F}=v(),u=e-1,S=t[u],{data:T=[],isFetched:b,isError:L}=N(p=>p.existingAccounts),[I,w]=(0,a.useState)(!1),D=(0,a.useMemo)(()=>{let p=[],m=n.get(S)||{};for(let[j,J]of Object.entries(m))J&&p.push(j);return[p[0]]},[S,n]),{chainNameTextOr:Z,chainNameTextAnd:oe}=(0,a.useMemo)(()=>{let p=D.map(J=>_.getChainName(ae.get(J).ledgerAppOverride??J)),m=new Intl.ListFormat(F.resolvedLanguage,{style:"long",type:"disjunction"}),j=new Intl.ListFormat(F.resolvedLanguage,{style:"long",type:"conjunction"});return{chainNameTextOr:m.format(p),chainNameTextAnd:j.format(p)}},[D,F]),he=(0,a.useMemo)(()=>D.map(p=>{let m=ae.get(p).ledgerAppOverride??p;return a.default.createElement(se,{key:_.getMainnetNetworkID(ae.get(m).ledgerAppOverride??m),networkID:m,size:72,borderColor:"areaBase"})}),[D]);(0,a.useEffect)(()=>{let p=N.subscribe(m=>l.current=m.derivedAccountGroups);return()=>p()},[]);let U=(0,a.useMemo)(()=>{let p=[];switch(S){case"solana":{p.push({pathType:"bip44Root"});break}case"eip155":{p.push({pathType:"bip44RootEthereum"});break}case"bip122_p2tr":case"bip122_p2wpkh":case"bip122_p2sh":case"bip122_p2pkh":case"sui":break}for(let m=0;m<$t;++m)switch(S){case"solana":{p.push({index:m,pathType:"bip44Change"}),p.push({index:m,pathType:"bip44"});break}case"eip155":{p.push({index:m,pathType:"bip44Ethereum"}),p.push({index:m,pathType:"bip44EthereumSecondary"});break}case"bip122_p2tr":case"bip122_p2wpkh":case"bip122_p2sh":case"bip122_p2pkh":{p.push({index:m,pathType:"bitcoinTaproot"},{index:m,pathType:"bitcoinNativeSegwit"});break}case"sui":throw new Ue("connect hardware")}return p},[S]),[fe,ge]=(0,a.useState)(!0),{data:ne=Je}=it(fe,!0),{data:[At]}=Ve(["kill-ledger-xpub-derivation"]),{data:Q,error:Ne,fetchStatus:St,refetch:Le}=st(ne,U,!0,!At),Ct=St==="fetching",Ie=!ne.isConnected&&ne.status!=="reconnecting",[wt,yt]=(0,a.useState)(!1),{data:Ae,refetch:Ee}=Te(wt,!0);(0,a.useEffect)(()=>{Ie&&ge(!1)},[Ie]),(0,a.useEffect)(()=>{Ae?.type==="granted"&&(ge(!0),yt(!1))},[Ae]);let Me=Xe(),Fe=(0,a.useCallback)(async()=>{if(Q&&Object.keys(Q).length){let p=[...l.current],m=0;for(let j of Object.values(Q)){let de={accounts:{...(p[m]??{accounts:{}}).accounts},derivationIndex:U[m].index},Se=_.getChainIDs(j.addressType).filter(Ce=>Me.includes(Ce));for(let Ce of Se){let pe=_.getNetworkIDs(Ce);for(let ce of pe)D.includes(ce)&&(de.accounts[`${ce}-${j.address}`]={chainType:j.addressType,chainId:ce,address:j.address,publicKey:j.publicKey,pathParams:U[m]})}p[m]=de,m++}if(C(p),b&&t.length===e){w(!0);let j=zt(T),J=p.reduce((i,B)=>{let ue=!1;for(let _e of Object.values(B.accounts))ue=ue||j.has(_e.address);return ue||i.push(B),i},[]),de=[],Se=[];for(let i=0;i<J.length;i+=De.extension){let B=J.slice(i,i+De.extension).map(ue=>Object.entries(ue.accounts).reduce((We,[vt,Ht])=>(We[vt]={account:Ht},We),{}));Se.push(B)}for(let i of Se)de.push(Ke(i));let pe=(await Promise.all(de)).flat().map(i=>{switch(i.status){case"discovered":return{...i,accounts:i.accounts.filter(B=>B.hasAccountActivity||ye(B.derivationPathType))};case"undiscovered":return{...i,accounts:i.accounts.filter(B=>ye(B.derivationPathType))}}}).filter(i=>i.accounts.length>0).map(i=>{let B=Re();return{...i,discoveryIdentifier:B}}),ce=pe.filter(i=>i.status==="undiscovered"||i.isSelectedByDefault),bt=pe.filter(i=>!(i.status==="undiscovered"||i.isSelectedByDefault)).slice(0,2),Ge=ce.length>0,xt=T.filter(i=>i.type==="ledger").length,Tt=(Ge?[...ce,...bt]:pe.filter(i=>!i.accounts.some(B=>!ye(B.derivationPathType))).slice(0,3)).map((i,B)=>({...i,accountIndex:xt+B}));y(Tt,Ge),r(a.default.createElement(ft,{preventBack:!0}))}}},[Q,C,b,t.length,e,U,Me,D,T,y,r]);(0,a.useEffect)(()=>{Q&&Object.keys(Q).length===U.length&&(Fe(),t.length!==e&&(o(),d(a.default.createElement(me,{preventBack:!0}))))},[Q,U,r,d,e,t,Fe,o]);let V,q,K,R,re=()=>{};return L?(V=a.default.createElement(P,{type:"failure"}),q=c("connectHardwareErrorLedgerGeneric"),K=c("connectHardwareErrorLedgerPhantomLocked"),re=async()=>{let p=await et();p.id!==void 0&&tt(p.id)},R=c("commandClose")):Ae&&Ae.type!=="granted"?(V=a.default.createElement(P,{type:"warning"}),q=c("connectHardwarePermissionDeniedPrimary"),K=c("connectHardwarePermissionDeniedSecondary"),R=c("homeErrorButtonText"),re=Ee):Ie?(V=a.default.createElement(P,{type:"warning"}),q=c("connectHardwarePermissionUnableToConnect"),K=c("connectHardwarePermissionUnableToConnectDescription"),R=c("commandConnect"),re=Ee):Ne instanceof Qe?(V=a.default.createElement(P,{type:"failure"}),q=c("connectHardwareErrorLedgerLocked"),K=c("connectHardwareErrorLedgerLockedDescription"),R=c("homeErrorButtonText"),re=Le):Ne?(V=a.default.createElement(P,{type:"failure"}),q=c("connectHardwareErrorLedgerGeneric"),K=c("connectHardwareErrorLedgerGenericDescription"),R=c("homeErrorButtonText"),re=Le):ne.status=="reconnecting"?(V=a.default.createElement(P,{defaultIcon:a.default.createElement(ie,null),type:"default"}),q=c("connectHardwareConnecting"),K=c("connectHardwareConnectingDescription")):I?(V=a.default.createElement(P,{defaultIcon:a.default.createElement(ie,null),type:"default"}),q=c("connectHardwareDiscoveringAccounts"),K=c("connectHardwareDiscoveringAccountsDescription")):Ct?(V=a.default.createElement(P,{defaultIcon:a.default.createElement(ie,null),type:"default"}),q=c("connectHardwareConnectingAccounts"),K=c("connectHardwareFindingAccountsWithActivity",{chainName:oe})):(V=a.default.createElement(Vt,null,he),q=c("connectHardwareMobileOpenAppSingleChain",{chainName:Z}),K=c("connectHardwareOpenAppDescription")),a.default.createElement(G,null,a.default.createElement(X,null,a.default.createElement(Y,{icon:V,primaryText:q,headerStyle:"large",secondaryText:K})),R?a.default.createElement(E,{onClick:re,background:"spot"},R):a.default.createElement(Ut,null,a.default.createElement($,{color:O.colors.legacy.textDiminished,size:14},c("connectHardwareAccountsStepOfSteps",{stepNum:e,totalSteps:t.length}))))},Ut=s.div`
  align-self: center;
  background-color: ${O.colors.legacy.borderDiminished};
  border-radius: 80px;
  padding: 8px 16px;
  max-width: 150px;
`,Vt=s.div`
  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: -12.5px;
  }
`;h();f();var x=ee(te());var gt=()=>{let{t:e}=v(),{pushSubStep:o,selectedChains:t,setSelectedChains:n,selectedChainsMap:r}=N(),d=xe(),y=(0,x.useMemo)(()=>d.filter(u=>ae.get(u).isLedgerEnabled),[d]),C=be(),A=(0,x.useCallback)(u=>{let S=new Map(r),T=_.getAddressTypes(u);for(let L of T){let I=r.get(L),w=I?.[u];S.set(L,{...I,[u]:!w})}let b=C.filter(L=>{let I=S.get(L)||{};return Object.values(I).reduce((D,Z)=>Z?++D:D,0)>0});n(b,S)},[C,n,r]),l=()=>{o(x.default.createElement(me,{preventBack:!0}))};rt(()=>{let u=new Map;for(let S of C)u.set(S,{});for(let S of y){let T=_.getAddressTypes(S);for(let b of T){let L=u.get(b);u.set(b,{...L,[S]:!1})}}n(t,u)},C.length>0&&y.length>0);let c=(0,x.useMemo)(()=>y.map(u=>{let S=_.getAddressTypes(u),T=!1;for(let b of S)T=r.get(b)?.[u]||T;return x.default.createElement(qt,{key:u,icon:x.default.createElement(se,{networkID:u,size:40}),networkID:u,onPressChain:A,isChecked:T})}),[y,r,A]),F=(0,x.useMemo)(()=>{let u=0;for(let S of r.values())u+=Object.values(S).reduce((T,b)=>b?++T:T,0);return u===0},[r]);return x.default.createElement(G,null,x.default.createElement($,{weight:500,size:28,lineHeight:34},e("connectHardwareSelectChains")),x.default.createElement(Xt,null,c),x.default.createElement(E,{onClick:l,background:"spot",disabled:F},e("commandContinue")))},qt=({networkID:e,icon:o,onPressChain:t,isChecked:n})=>x.default.createElement(Kt,{onClick:()=>{t(e)}},x.default.createElement(Zt,null,x.default.createElement(Yt,null,o),x.default.createElement($,{size:16,weight:600},_.getNetworkName(e))),x.default.createElement(le,{checked:n})),Kt=s.div`
  align-items: center;
  background-color: ${O.colors.legacy.elementBase};
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  padding: 16px 24px 16px 12px;

  > span {
    margin-right: 0px;
  }
`,Yt=s.div`
  margin-right: 12px;
`,Xt=s.div`
  margin-top: 20px;
`,Zt=s.div`
  display: flex;
  align-items: center;
`;var Jt=()=>{let{t:e}=v(),{pushStep:o,setSelectedChains:t}=N(),n=xe(),r=be(),{data:d,isFetching:y,refetch:C}=Te(!0,!0),{buttonDisabled:A,defaultIcon:l,primaryText:c,secondaryText:F,buttonText:u,iconType:S,onClick:T}=(0,H.useMemo)(()=>{let b=!1,L=H.default.createElement(ie,null),I,w,D,Z="default",oe=ct;if(y)I=e("connectHardwareSearching"),w=e("connectHardwareMakeSureConnected"),D=e("commandContinue"),b=!0;else if(d?.type==="granted"){let he=d.transport.deviceModel?.productName??"Ledger";Z="success",I=e("connectHardwarePairSuccessPrimary",{productName:he}),w=e("connectHardwarePairSuccessSecondary",{productName:he}),D=e("commandContinue"),b=!1,oe=()=>{if(r.length===1){let U=new Map;U.set(r[0],{});for(let fe of n){let ge=_.getAddressTypes(fe);for(let ne of ge)U.set(ne,{[fe]:!0})}t(r,U),o(H.default.createElement(me,{preventBack:!0}))}else o(H.default.createElement(gt,{onBackCallback:()=>{t([],new Map)}}))}}else d?.type==="denied"?(Z="failure",I=e("connectHardwarePermissionDeniedPrimary"),w=e("connectHardwarePermissionDeniedSecondary"),D=e("commandTryAgain"),b=!1,oe=C):(!d||d.type==="unable-to-connect")&&(Z="failure",I=e("connectHardwarePermissionUnableToConnect"),w=e("connectHardwareWaitingForApplicationSecondaryText"),D=e("commandTryAgain"),b=!1,oe=C);return{buttonDisabled:b,defaultIcon:L,primaryText:I,secondaryText:w,buttonText:D,iconType:Z,onClick:oe}},[n,r,d,o,C,y,t,e]);return H.default.createElement(G,null,H.default.createElement(X,null,H.default.createElement(Y,{icon:H.default.createElement(P,{defaultIcon:l,type:S}),primaryText:c,headerStyle:"large",secondaryText:F})),H.default.createElement(E,{onClick:T,background:"spot",disabled:A},u))},wr=()=>{let{t:e}=v(),{pushSubStep:o}=N(),t=()=>o(H.default.createElement(Jt,null));return H.default.createElement(G,null,H.default.createElement(X,null,H.default.createElement(Y,{icon:H.default.createElement(nt,null),primaryText:e("connectHardwareLedger"),headerStyle:"large",secondaryText:e("connectHardwareStartConnection"),animateText:!0})),H.default.createElement(E,{onClick:t,background:"spot"},e("commandConnect")))};h();f();var Tr=e=>[...Array(e).keys()];export{Tr as a,N as b,pt as c,go as d,Ao as e,lt as f,$o as g,wr as h};
//# sourceMappingURL=chunk-O2U7C7WV.js.map

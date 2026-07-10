import{a as q}from"./chunk-JGEUO3DC.js";import{a as h}from"./chunk-73REJSRN.js";import{a as v}from"./chunk-FLIG3OXX.js";import{f as b}from"./chunk-JAQNMSBC.js";import{m as s}from"./chunk-FABKKW5E.js";import{a as R,b as w}from"./chunk-MZPVJTUS.js";import{a as I}from"./chunk-F24UB3BO.js";import{c as M,ya as l}from"./chunk-UTOBJRXZ.js";import{f as x,h as a,n as c}from"./chunk-SVG5OEFH.js";a();c();var o=x(M()),m=x(I());var T={isConnected:!1,lastMessage:null,postMessage:v},$=o.default.createContext(T);function E(){let[e,r]=(0,o.useState)(null),[u,d]=(0,o.useState)(null),{isSidebarOpen:g}=h(),f=n=>{let t=w(n);!t||typeof t.url!="string"||!t.url||!t.req||typeof t.req.method!="string"||!t.req.method||d({...t,url:q(t.url.toString())})};(0,o.useEffect)(()=>{let n;return(async()=>{if(g){let p=i=>{i.name==="popup/sidepanel"&&(r(i),i.onMessage.addListener(f),i.onDisconnect.addListener(()=>{r(null),d(null)}))};m.default.runtime.onConnect.addListener(p)}else{let i=`notification/${(await b()).id}`;n=m.default.runtime.connect({name:i}),r(n),n.onMessage.addListener(f),n.onDisconnect.addListener(()=>{self.close(),r(null),d(null)})}})(),()=>{n?.disconnect()}},[g]);let C=(0,o.useCallback)(n=>{e&&e.postMessage(R(n))},[e]);return[!!e,u,C]}function y(){let e=(0,o.useContext)($);if(!e)throw new Error("Missing background connection context");return e}function A(){let{lastMessage:e}=y();return e}function N(){let e=A(),{postMessage:r}=y();return(0,o.useCallback)(u=>{if(e){if(e.req.id!==u.id)throw new Error(`Request id: ${e.req.id} does not match response id: ${u.id}`);r(u)}else throw new Error("No request received from the background yet")},[e,r])}a();c();a();c();var B=s.div`
  ${e=>!e.plain&&`
    box-shadow: ${e.theme?.footer?.boxShadow??"0px -6px 10px rgba(0, 0, 0, 0.25)"};
    background-color: ${e.theme?.footer?.backgroundColor??l.colors.legacy.elementBase};
    border-top: ${e.theme?.footer?.borderTop??`1px solid ${l.colors.legacy.borderDiminished}`};
  `}
`;var V=s.div`
  flex: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  > * {
    margin-top: 27px;
  }
`,X=s.div`
  flex: 1;
  overflow: auto;
  padding: 0px 16px;
`,Y=s.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  left: 0;
  bottom: 0;
  background: ${l.colors.legacy.areaBase};
`,Z=s(B)`
  flex: none;
  padding: 14px 20px;
`,ee=s.div`
  padding: 20px;
  height: 100%;
`;export{B as a,$ as b,E as c,A as d,N as e,V as f,X as g,Y as h,Z as i,ee as j};
//# sourceMappingURL=chunk-BNHBUWLX.js.map

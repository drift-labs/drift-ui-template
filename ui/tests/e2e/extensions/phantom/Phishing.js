import{a as D}from"./chunk-LGCSOWLJ.js";import{a as N}from"./chunk-MEINW66A.js";import"./chunk-QMDPT5WS.js";import{a as P}from"./chunk-PQHYTRV5.js";import"./chunk-Y6JOYO4T.js";import{d as U,db as m,k as I,m as l,s as C}from"./chunk-FABKKW5E.js";import{a as A,f as v}from"./chunk-7RX6E7KA.js";import{b as w,f as W}from"./chunk-ZWNJSFU4.js";import"./chunk-MZPVJTUS.js";import{b as B}from"./chunk-JSLOSOZX.js";import"./chunk-GCJPSL4T.js";import"./chunk-RY7HN3SK.js";import{a as L}from"./chunk-YI2NXTPE.js";import{a as T}from"./chunk-TCB6NDII.js";import"./chunk-R5GARSZH.js";import"./chunk-F24UB3BO.js";import"./chunk-VOCOWPRG.js";import{nb as G}from"./chunk-F63TUCMM.js";import"./chunk-CJHTJRVG.js";import{Nc as x}from"./chunk-PJ6PRBE2.js";import"./chunk-DHKCVHRA.js";import{X as y,c as k,ya as c}from"./chunk-UTOBJRXZ.js";import"./chunk-3Q6WUW5S.js";import"./chunk-I5GRDOQ7.js";import"./chunk-3KRCODTN.js";import{f as a,h as n,n as s}from"./chunk-SVG5OEFH.js";n();s();var O=a(k());var $=a(A());n();s();var e=a(k());n();s();var E=a(G());var o=a(k());var g=c.colors.legacy.spotNegative,H=l.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${c.colors.brand.white};
  padding: clamp(24px, 16vh, 256px) 24px;
  box-sizing: border-box;
`,j=l.div`
  margin-bottom: 24px;
  padding-bottom: 8vh;
`,q=l.div`
  max-width: 100ch;
  margin: auto;

  * {
    text-align: left;
  }
`,F=l.a`
  text-decoration: underline;
  color: ${g};
`,d=new L,J=({origin:i,subdomain:t})=>{let{t:p}=y(),f=i?W(i):"",z=i??"",u=new URL(z).hostname,S=t==="true"?u:f,h=(0,E.toUnicode)(S),K=async()=>{if(t==="true"){let b=await d.get("userWhitelistedSubdomains"),r=JSON.parse(`${b}`);r?r.push(u):r=[u],r=[...new Set(r)],d.set("userWhitelistedSubdomains",JSON.stringify(r))}else{let b=await d.get("userWhitelistedOrigins"),r=JSON.parse(`${b}`);r?r.push(f):r=[f],r=[...new Set(r)],d.set("userWhitelistedOrigins",JSON.stringify(r))}self.location.href=i};return o.default.createElement(H,null,o.default.createElement(q,null,o.default.createElement(j,null,o.default.createElement(C,{width:128,fill:c.colors.brand.white})),o.default.createElement(m,{size:30,color:g,weight:"600"},p("blocklistOriginDomainIsBlocked",{domainName:h||p("blocklistOriginThisDomain")})),o.default.createElement(m,{color:g},p("blocklistOriginSiteIsMalicious")),o.default.createElement(m,{color:g},o.default.createElement(B,{i18nKey:"blocklistOriginCommunityDatabaseInterpolated"},"This site has been flagged as part of a",o.default.createElement(F,{href:w,rel:"noopener",target:"_blank"},"community-maintained database"),"of known phishing websites and scams. If you believe the site has been flagged in error,",o.default.createElement(F,{href:w,rel:"noopener",target:"_blank"},"please file an issue"),".")),S?o.default.createElement(m,{color:g,onClick:K,hoverUnderline:!0},p("blocklistOriginIgnoreWarning",{domainName:h})):o.default.createElement(o.default.Fragment,null)))};var Q=()=>{let i;try{i=new URLSearchParams(self.location.search).get("origin")||"",new URL(i)}catch{i=""}return i},R=()=>new URLSearchParams(self.location.search).get("subdomain")||"",M=()=>{let i=(0,e.useMemo)(Q,[]),t=(0,e.useMemo)(R,[]);return e.default.createElement(U,{future:{v7_startTransition:!0}},e.default.createElement(N,null,e.default.createElement(J,{origin:i,subdomain:t})))};T();x.init({provider:D});await v("frontend");var V=document.getElementById("root"),X=(0,$.createRoot)(V);X.render(O.default.createElement(I,{theme:P},O.default.createElement(M,null)));
//# sourceMappingURL=Phishing.js.map

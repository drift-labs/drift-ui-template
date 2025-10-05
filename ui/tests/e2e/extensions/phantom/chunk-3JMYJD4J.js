import{a as w}from"./chunk-FLIG3OXX.js";import{b as U}from"./chunk-HRUBPS3N.js";import{c as W}from"./chunk-G46R4HGO.js";import{R as k,ba as O,da as E,db as R,m as h}from"./chunk-FABKKW5E.js";import{d as H}from"./chunk-RY7HN3SK.js";import{fb as I,g as M}from"./chunk-VOCOWPRG.js";import{Ia as F,Ma as N,Qb as ne,c as g,ya as D}from"./chunk-UTOBJRXZ.js";import{f as x,h as a,n as s}from"./chunk-SVG5OEFH.js";a();s();var B=x(g());a();s();var $=x(g());function z(){var e=(0,$.useRef)(!0);return e.current?(e.current=!1,!0):e.current}var ue=function(e,t){return e===t};function C(e,t){t===void 0&&(t=ue);var o=(0,B.useRef)(),r=(0,B.useRef)(e),d=z();return!d&&!t(r.current,e)&&(o.current=r.current,r.current=e),o.current}a();s();a();s();var G=function(){};function j(e){for(var t=[],o=1;o<arguments.length;o++)t[o-1]=arguments[o];e&&e.addEventListener&&e.addEventListener.apply(e,t)}function K(e){for(var t=[],o=1;o<arguments.length;o++)t[o-1]=arguments[o];e&&e.removeEventListener&&e.removeEventListener.apply(e,t)}var y=typeof self<"u";a();s();var v=x(g());var fe=["mousedown","touchstart"],le=function(e,t,o){o===void 0&&(o=fe);var r=(0,v.useRef)(t);(0,v.useEffect)(function(){r.current=t},[t]),(0,v.useEffect)(function(){for(var d=function(i){var m=e.current;m&&!m.contains(i.target)&&r.current(i)},f=0,l=o;f<l.length;f++){var p=l[f];j(document,p,d)}return function(){for(var i=0,m=o;i<m.length;i++){var L=m[i];K(document,L,d)}}},[o,e])},de=le;a();s();var V=x(g());var pe=y?V.useLayoutEffect:V.useEffect,q=pe;a();s();var b=x(g());function J(e){var t=(0,b.useRef)();return(0,b.useEffect)(function(){t.current=e}),t.current}a();s();var S=x(g());var Q={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};function me(){var e=(0,S.useState)(null),t=e[0],o=e[1],r=(0,S.useState)(Q),d=r[0],f=r[1],l=(0,S.useMemo)(function(){return new self.ResizeObserver(function(p){if(p[0]){var i=p[0].contentRect,m=i.x,L=i.y,te=i.width,oe=i.height,re=i.top,ae=i.left,se=i.bottom,ie=i.right;f({x:m,y:L,width:te,height:oe,top:re,left:ae,bottom:se,right:ie})}})},[]);return q(function(){if(t)return l.observe(t),function(){l.disconnect()}},[t]),[o,d]}var ce=y&&typeof self.ResizeObserver<"u"?me:function(){return[G,Q]};a();s();a();s();var X=e=>{if(e.length!==0)return e[e.length-1]};var Z=x(ne());var n=x(g());var Y=(0,n.createContext)({pushDetailViewCallback:()=>w,pushDetailView:w,popDetailView:w,resetDetailView:w,detailViewStackLength:0}),xe=h(N.div)`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  max-height: ${e=>e.theme?.detailViewMaxHeight??"100%"};
  min-height: ${e=>e.theme?.detailViewMinHeight??"initial"};
`,wt=n.default.memo(({children:e,shouldResetOnAccountChange:t,shouldPushDetailView:o})=>{let{detailViewStack:r,setDetailViewStack:d,pushDetailView:f,...l}=ge(),{data:p}=I();return(0,n.useEffect)(()=>{t&&d([])},[p,d,t]),(0,n.useEffect)(()=>{o&&f(e)},[e,o,f]),n.default.createElement(Y.Provider,{value:{...l,pushDetailView:f,detailViewStackLength:r.length}},n.default.createElement(ve,{stack:r},e))}),he=navigator.webdriver?0:500,ge=()=>{let[e,t]=(0,n.useState)([]),o=(0,n.useMemo)(()=>(0,Z.default)(l=>{t(p=>M(p,i=>{i.push(l)}))},he,{leading:!0,trailing:!1}),[t]),r=(0,n.useCallback)(()=>{t(l=>M(l,p=>{p.pop()}))},[t]),d=(0,n.useCallback)(l=>()=>{o(l)},[o]),f=(0,n.useCallback)(()=>()=>{t([])},[t]);return(0,n.useMemo)(()=>({detailViewStack:e,setDetailViewStack:t,pushDetailView:o,popDetailView:r,resetDetailView:f,pushDetailViewCallback:d}),[e,r,o,f,d])},we=.15,ve=({children:e,stack:t})=>{let o=C(t,(i,m)=>i?.length===m.length),r=X(t),d=t.length>(o??[]).length,f=o===void 0,l=f?0:d?10:-10,p=f?1:0;return n.default.createElement(F,{mode:"wait"},n.default.createElement(xe,{key:`${t.length}_${o?.length}`,initial:{x:l,opacity:p},animate:{x:0,opacity:1},exit:{opacity:0},transition:{duration:we},ref:Se},r||e))},T=()=>{let e=(0,n.useContext)(Y);if(!e)throw new Error("Missing detail view context");return e},Se=e=>{e&&e.parentElement&&(e.parentElement.scrollTop=0)};a();s();var P=x(g()),De=(0,P.createContext)({isOpen:!1,showSettingsMenu:w,hideSettingsMenu:w}),_=()=>(0,P.useContext)(De);a();s();var u=x(g());var Ce=h.section.attrs(e=>({justifyContent:e.justifyContent??"center",height:e.height??H}))`
  z-index: 1;
  background-color: ${D.colors.legacy.areaBase};
  padding: 10px 16px;
  display: flex;
  flex-shrink: 0;
  flex-direction: row;
  align-items: center;
  justify-content: ${e=>e.justifyContent};
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${D.colors.legacy.borderDiminished};
  height: ${e=>e.height}px;
  width: 100%;
`,ye=h(R).attrs(e=>({size:16,weight:500,lineHeight:25,maxWidth:e.maxWidth??"280px",noWrap:e.noWrap??!0}))``,Ve=h.div`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  padding-bottom: 17px;
  position: relative;
  width: 100%;
`,ee=h(U)`
  position: absolute;
  right: 0;
`,A=h(W)`
  position: absolute;
  left: 0;
`,At=({children:e,items:t,sections:o,icon:r,shouldWrap:d,onIconClick:f,onLeftButtonClick:l,useCloseButton:p})=>{let i=Le({withCloseButton:p??!1,onLeftButtonClick:l}),m=o&&o.length>0||t&&t.length>0;return u.default.createElement(Ve,null,i,u.default.createElement(R,{weight:500,size:22,noWrap:!d,maxWidth:"280px"},e),m||f?u.default.createElement(ee,{sections:o,items:t,icon:r||u.default.createElement(O,null),onIconClick:f}):u.default.createElement("div",null))},be=h(Ce).attrs(e=>({justifyContent:e.justifyContent??"center",height:e.height??H}))`
  position: relative;
  border-bottom: none;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: -20px;
    width: calc(100% + 40px);
    border-bottom: 1px solid ${D.colors.legacy.borderDiminished};
  }
`,Pe=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`,It=({children:e,sections:t,items:o,icon:r,shouldWrap:d,onIconClick:f,onLeftButtonClick:l,disableIconBackground:p})=>{let i=Me(l),m=t&&t.length>0||o&&o.length>0;return u.default.createElement(be,null,i,u.default.createElement(Pe,null,typeof e=="string"?u.default.createElement(ye,{noWrap:!d},e):e),m||f?u.default.createElement(ee,{sections:t,items:o,icon:r,onIconClick:f,disableIconBackground:p}):u.default.createElement("div",null))},Le=({withCloseButton:e,onLeftButtonClick:t})=>{let{popDetailView:o,detailViewStackLength:r}=T();return(0,u.useMemo)(()=>r===0?u.default.createElement("div",null):u.default.createElement(A,{onClick:()=>{t?.(),o()},"data-testid":"header--back"},e?u.default.createElement(k,null):u.default.createElement(E,null)),[e])},Me=e=>{let{hideSettingsMenu:t}=_(),{popDetailView:o,detailViewStackLength:r}=T();return(0,u.useMemo)(()=>r>0?u.default.createElement(A,{onClick:()=>{o()},"data-testid":"header--back"},u.default.createElement(E,null)):u.default.createElement(A,{"data-testid":"settings-menu-close-button",onClick:e??t},u.default.createElement(k,null)),[])};export{X as a,de as b,J as c,C as d,ce as e,wt as f,T as g,De as h,_ as i,Ce as j,At as k,It as l};
//# sourceMappingURL=chunk-3JMYJD4J.js.map

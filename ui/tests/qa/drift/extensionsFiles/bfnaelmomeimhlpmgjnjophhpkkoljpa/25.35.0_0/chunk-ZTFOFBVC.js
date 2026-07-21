import{c as w,l,m as p}from"./chunk-FVUSQHVT.js";import{Ia as C,Ma as $,c as S,ya as o}from"./chunk-BEUYJGED.js";import{f as P,h as g,n as u}from"./chunk-64CIGK2X.js";g();u();var i=P(S());var z=({width:e=44,trackColor:a=o.colors.legacy.areaAccent,spinnerColor:n=o.colors.legacy.spotBase})=>i.default.createElement("svg",{width:e,height:e,viewBox:"0 0 26 26"},i.default.createElement("g",null,i.default.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13 23.413c5.751 0 10.413-4.662 10.413-10.413S18.751 2.587 13 2.587 2.587 7.249 2.587 13 7.249 23.413 13 23.413zm0 2.315c7.03 0 12.727-5.699 12.727-12.728S20.03.273 13 .273C5.97.273.273 5.97.273 13 .273 20.03 5.97 25.728 13 25.728z",fill:a})),i.default.createElement("g",null,i.default.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.382 24.125a1.157 1.157 0 01.623-1.513 10.412 10.412 0 005.607-13.617 1.157 1.157 0 112.136-.89 12.726 12.726 0 01-6.853 16.643 1.157 1.157 0 01-1.513-.623z",fill:n}))),A=p.div`
  position: ${e=>e.position};
  height: ${e=>e.diameter}px;
  width: ${e=>e.diameter}px;
  animation: rotate 0.5s linear infinite;
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`,y=({diameter:e=44,color:a,trackColor:n,position:s})=>i.default.createElement(A,{diameter:e,position:s},i.default.createElement(z,{width:e,spinnerColor:a,trackColor:n})),I=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,j=()=>i.default.createElement(I,null,i.default.createElement(y,null));g();u();var r=P(S());var N=p.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${e=>e.paddingY}px 0px;
  width: ${e=>e.width};
  height: ${e=>e.height};
  border-radius: ${e=>e.borderRadius};
  font-size: ${e=>e.fontSize}px;
  font-weight: ${e=>e.fontWeight};
  line-height: ${e=>e.lineHeight}px;
  color: ${o.colors.legacy.textBase};
  pointer-events: auto;
  border: none;
  outline-color: transparent;
  outline-style: none;
  cursor: ${e=>e.disabled?"auto":"pointer"};
  &:disabled {
    opacity: 0.4;
  }
  ${e=>e.noWrap&&l`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
  ${e=>e.theme==="primary"?l`
          background: ${o.colors.legacy.spotBase};
          color: ${o.colors.legacy.areaBase};
          &:hover:enabled {
            background: ${o.colors.legacy.spotAccent};
          }
        `:e.theme==="warning"?l`
            background: ${o.colors.legacy.spotNegative};
            color: ${o.colors.legacy.areaBase};
            &:hover:enabled {
              background: ${o.colors.legacy.spotNegative};
            }
          `:e.theme==="dark"?l`
              background: ${o.colors.legacy.areaAccent};
            `:e.theme==="metamask"?l`
                /* metamask brand color */
                background: #f5841f;
                &:hover:enabled {
                  /* metamask brand color */
                  background: #d0701a;
                }
              `:e.theme==="link"?l`
                  background: transparent;
                  color: ${o.colors.legacy.spotBase};
                  justify-content: flex-start;
                  &:hover:enabled {
                    color: ${o.colors.legacy.spotBase};
                  }
                `:e.theme==="text"?l`
                    background: transparent;
                    padding-left: 4px;
                    padding-right: 4px;
                    justify-content: flex-start;
                    &:hover:enabled {
                      background: ${o.colors.legacy.gray};
                    }
                  `:l`
                    background: ${o.colors.legacy.elementAccent};
                    &:hover:enabled {
                      background: ${o.colors.legacy.gray};
                    }
                  `}
`,h=({children:e,loading:a,to:n,onClick:s,fontSize:d=16,fontWeight:t=600,lineHeight:c=19,paddingY:f=14,width:B="100%",borderRadius:x="16px",theme:k="default",type:v="button",noWrap:m=!0,...H})=>{let b={fontSize:d,fontWeight:t,lineHeight:c,paddingY:f,width:B,borderRadius:x,theme:k,type:v,noWrap:m,...H};return n?r.default.createElement(M,{loading:a,to:n,...b},e):r.default.createElement(N,{...b,onClick:s},a?r.default.createElement(y,{diameter:24,position:"absolute"}):e)};var M=({children:e,loading:a,to:n,...s})=>{let d=w();if(!n)throw new Error("ButtonWithNavigation requires a 'to' prop");return r.default.createElement(N,{...s,onClick:()=>d(n)},a?r.default.createElement(y,{diameter:24,position:"absolute"}):e)},T=p.div`
  display: flex;
  flex-direction: ${e=>e.vertical?"column-reverse":"row"};
  width: 100%;
  gap: 10px;
`;var D={fontSize:14,lineHeight:17,paddingY:10},U=({className:e,primaryText:a,secondaryText:n,onPrimaryClicked:s,onPrimaryHover:d,onSecondaryClicked:t,primaryTheme:c="primary",secondaryTheme:f="default",primaryDisabled:B=!1,primaryLoading:x,secondaryDisabled:k,buttonPairStyle:v="normal"})=>{let m=v==="normal"?{}:D;return r.default.createElement(T,{className:e},r.default.createElement(h,{theme:f,onClick:t,disabled:k,...m,"data-testid":"secondary-button"},n),r.default.createElement(h,{type:"submit",theme:c,disabled:B,loading:x,onClick:s,onMouseEnter:d,...m,"data-testid":"primary-button"},a))};var V=({buttons:e,buttonStyle:a,className:n,vertical:s})=>{let d=a==="small"?D:{};return r.default.createElement(T,{className:n,vertical:s},r.default.createElement(C,null,e.map((t,c)=>typeof t.hideButton>"u"?r.default.createElement(h,{key:t.key??(typeof t.text=="string"&&t.text?t.text:c),type:t.type??"button",theme:t.theme,onClick:t.onClick,disabled:t.disabled,loading:t.loading,className:t.className,"data-testid":t.testID,...d},t.text):t.hideButton?null:r.default.createElement($.div,{key:t.key??(typeof t.text=="string"&&t.text?t.text:c),initial:{opacity:0,scale:.8,width:0},exit:{opacity:0,width:0},animate:{height:"auto",opacity:1,scale:1,width:"100%"},transition:{ease:"easeInOut",duration:.3}},r.default.createElement(h,{type:t.type??"button",theme:t.theme,onClick:t.onClick,disabled:t.disabled,loading:t.loading,className:t.className,"data-testid":t.testID,...d},t.text)))))};export{y as a,j as b,h as c,U as d,V as e};
//# sourceMappingURL=chunk-ZTFOFBVC.js.map

import{m as r}from"./chunk-FVUSQHVT.js";import{X as a,c as y,ya as o}from"./chunk-BEUYJGED.js";import{f as v,h as l,n as g}from"./chunk-64CIGK2X.js";l();g();var t=v(y());var f=r.div`
  position: relative;
  width: ${e=>`${e.width}px`};
  height: ${e=>`${e.height}px`};
  opacity: ${e=>e.disabled?e.disabledToggleOpacity:1};

  input[type="checkbox"] {
    width: ${e=>`${e.width}px`};
    height: ${e=>`${e.height}px`};
    margin: 0;
    &:hover {
      cursor: pointer;
    }
  }

  label {
    width: ${e=>`${e.width}px`};
    height: ${e=>`${e.height}px`};
    background: ${e=>e.disabled?e.disabledBackgroundColor:e.inactiveBackgroundColor};
    border-radius: ${e=>`${(e.height||0)/2}px`};
    cursor: pointer;
    text-indent: -9999px;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
  }

  label:after {
    content: "";
    position: absolute;
    top: ${e=>`${((e.height||0)-(e.toggleHeight||0))/2}px`};
    left: ${e=>`${((e.width||0)-(e.toggleWidth||0)*2)/2}px`};
    width: ${e=>`${e.toggleWidth}px`};
    height: ${e=>`${e.toggleHeight}px`};
    background: ${e=>e.inactiveToggleColor};
    border-radius: 100px;
    transition: 0.3s;
  }

  input:checked + label {
    background: ${e=>e.disabled?e.disabledBackgroundColor:e.activeBackgroundColor};
    &:after {
      background: ${e=>e.disabled?e.disabledToggleColor:e.activeToggleColor};
    }
  }

  input:checked + label:after {
    left: calc(100% - ${e=>`${((e.width||0)-(e.toggleWidth||0)*2)/2}px`});
    transform: translateX(-100%);
  }

  label:active:after {
    width: 14px;
    background: ${o.colors.legacy.textBase};
  }
`,P=t.default.memo(({id:e,width:c=34,height:d=20,toggleWidth:n=14,toggleHeight:h=14,activeBackgroundColor:s=o.colors.legacy.spotBase,activeToggleColor:b=o.colors.legacy.textBase,inactiveBackgroundColor:u=o.colors.legacy.areaAccent,inactiveToggleColor:p=o.colors.legacy.borderAccent,disabledBackgroundColor:$=o.colors.legacy.spotBase,disabledToggleColor:k=o.colors.legacy.textBase,disabledToggleOpacity:x=.4,checked:C=!1,disabled:i=!1,onChange:T,label:w})=>{let{t:m}=a();return t.default.createElement(f,{width:c,height:d,toggleWidth:n,toggleHeight:h,activeBackgroundColor:s,inactiveBackgroundColor:u,disabledBackgroundColor:$,activeToggleColor:b,inactiveToggleColor:p,disabledToggleColor:k,disabledToggleOpacity:x,disabled:i},t.default.createElement("input",{type:"checkbox","aria-label":w??"checkbox",id:e,checked:i||C,onChange:T,disabled:i,"data-testid":e}),t.default.createElement("label",{htmlFor:e},m("switchToggle")))});export{P as a};
//# sourceMappingURL=chunk-L6OMJUHO.js.map

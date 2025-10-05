import{a as f}from"./chunk-Y6JOYO4T.js";import{J as y,l as g,m as n,sa as I}from"./chunk-FABKKW5E.js";import{c as A,ya as r}from"./chunk-UTOBJRXZ.js";import{f as z,h as x,n as m}from"./chunk-SVG5OEFH.js";x();m();var t=z(A());var c=g`
  width: 100%;
  padding: ${e=>e.padding||"14px"};
  background: ${e=>e.backgroundColor||r.colors.legacy.areaAccent};
  border-width: ${e=>e.borderWidth||"1px"};
  border-style: solid;
  border-color: ${e=>e.warning?r.colors.legacy.spotNegative:r.colors.legacy.borderDiminished};
  border-radius: ${e=>e.borderRadius||"6px"};
  color: white;
  font-size: ${e=>e.fontSize||"16px"};
  line-height: 19px;

  &::placeholder {
    color: ${e=>e.placeholderColor||r.colors.legacy.textIncidental};
  }

  &:focus {
    outline: 0;
  }

  ::selection {
    background: ${r.colors.legacy.spotBase};
  }

  ::-moz-selection {
    background: ${r.colors.legacy.spotBase};
  }
`,E=g`
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
`,d=e=>{let s=(0,t.forwardRef)(({warningMessage:o,...a},l)=>t.default.createElement(H,null,t.default.createElement(e,{...a,ref:l}),o&&t.default.createElement(R,null,o))),p=(0,t.forwardRef)(({label:o,...a},l)=>t.default.createElement(N,{label:o},t.default.createElement(e,{...a,ref:l}))),i=e;return i.WithWarning=s,i.WithLabel=p,i},H=n.div`
  width: 100%;
`,u=n.input`
  ${c}
  ${E}
`,R=n.div`
  color: ${r.colors.legacy.spotNegative};
  font-size: 16px;
  line-height: 1.2;
  margin-top: 10px;
  text-align: left;
`,N=n.div`
  position: relative;
  &:after {
    ${e=>e.label?`content: "${e.label}"`:""};
    color: ${r.colors.legacy.textIncidental};
    position: absolute;
    right: 20px;
    bottom: 17px;
    font-size: 16px;
  }
`,Z=d(u),F=n.textarea`
  ${c}
  resize: none;
  padding: 25px;
  line-height: 150%;
  word-spacing: 10px;
  text-align: left;
  white-space: normal;
  &:placeholder-shown {
    word-spacing: 3px;
  }
`,V=n.textarea`
  ${c}
  height: 68px;
  text-align: start;
  resize: none;
`,B=n.textarea`
  ${c}
  height: 68px;
  text-align: start;
  resize: none;
`,K=n.textarea`
  ${c}
  overflow: auto;
  height: 50px;
  text-align: start;
`,_=d(F),ee=d(V),te=d(B),ne=d(K),D=n(u)`
  padding-left: 43px;
  padding-right: 43px;
`,q=n.div`
  width: 100%;
  position: relative;
`,O=n.div`
  position: absolute;
  top: 16px;
  left: 15px;
`,U=n.div`
  position: absolute;
  top: 16px;
  right: 15px;
  cursor: pointer;
`,re=(0,t.forwardRef)((e,s)=>{let{showClearIcon:p,onClear:i,showLoadingIcon:o=!1,...a}=e;return t.default.createElement(q,null,t.default.createElement(O,null,o?t.default.createElement(f,{diameter:17}):t.default.createElement(y,null)),t.default.createElement(D,{...a,ref:s,type:"text"}),p&&t.default.createElement(U,{onClick:i},t.default.createElement(I,null)))}),j=n(u)`
  border: ${({border:e})=>e||"inherit"};
  color: ${({color:e})=>e||"inherit"};

  &:disabled {
    cursor: not-allowed;
  }
`,oe=t.default.memo(function({value:s,placeholder:p,fontSize:i="16px",required:o,warning:a,minLength:l=1,maxLength:W=79,decimalLimit:C=9,border:S,borderRadius:P,disabled:w,"aria-labelledby":v,"aria-label":T,onKeyPress:$,onUserInput:L,name:M}){return t.default.createElement(j,{value:s,required:o,warning:a,border:S,borderRadius:P,color:a?r.colors.legacy.spotNegative:r.colors.legacy.textBase,type:"text",inputMode:"decimal",pattern:`^\\d*(\\.\\d{0,${C}})?$`,autoComplete:"off",autoCorrect:"off",spellCheck:"false",fontSize:i,placeholder:p,step:"any",minLength:l,maxLength:W,disabled:w,name:M,"aria-labelledby":v,"aria-label":T,onKeyPress:$,onInput:h=>{let b=h.target;if(!b.validity.valid)h.preventDefault();else{let k=b.value.replace(/,/g,".");L(k)}}})});export{d as a,Z as b,_ as c,ee as d,te as e,ne as f,re as g,oe as h};
//# sourceMappingURL=chunk-26BEY7UU.js.map

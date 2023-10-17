import{c as a,t as e,s as d}from"./index-828bd9af.js";const o=a`
  width: 100%;
  height: 4px;

  background-color: borderDarkest;

  cursor: pointer;

  border-top: 1;
  border-top-color: borderLight;
  border-right: 2;
  border-right-color: borderLightest;
  border-bottom: 1;
  border-bottom-color: borderLighter;
  border-left: 2;
  border-left-color: borderLightest;

  box-shadow: 0px 1px 0px 0px ${e("colors.borderLightest")};
`,t=a`
  width: 12px;
  height: 20px;

  background-color: material;

  cursor: pointer;

  margin-top: -8;

  border-top: 1;
  border-top-color: borderLightest;
  border-right: 1;
  border-right-color: borderDarkest;
  border-bottom: 1;
  border-bottom-color: borderDarkest;
  border-left: 1;
  border-left-color: borderLightest;

  box-shadow: inset 0px -1px 0px ${e("colors.borderDark")},
    inset -1px 0px 0px ${e("colors.borderDark")},
    inset 0px 1px 0px ${e("colors.borderLighter")},
    inset 1px 0px 0px ${e("colors.borderLighter")};

  -webkit-appearance: none;
`,r=d.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;

  &:hover,
  &:focus,
  &:active {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    ${o}
  }

  &::-webkit-slider-thumb {
    ${t}
  }

  &:focus::-webkit-slider-runnable-track {
    background-color: borderDarkest;
  }

  &::-moz-range-track {
    ${o}
  }

  &::-moz-range-thumb {
    ${t}
  }
`,l=r;try{r.displayName="Range",r.__docgenInfo={description:"",displayName:"Range",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLInputElement | null) => void) | RefObject<HTMLInputElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}export{l as R};
//# sourceMappingURL=Range-5a0f6b0d.js.map

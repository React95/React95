import{s as t,t as o,c as u,j as h,a as d}from"./index-0559674c.js";import{r as x}from"./index-1b03fe98.js";const g=""+new URL("check-1107507c.svg",import.meta.url).href,k=""+new URL("check-disabled-4a8d622d.svg",import.meta.url).href,r=t.span`
  width: 12px;
  height: 12px;

  content: '';
  display: inline-block;

  position: absolute;
  left: 0;

  border-left: 1;
  border-left-color: borderDark;
  border-top: 1;
  border-top-color: borderDark;

  box-shadow: inset -1px -1px 0 0 ${o("colors.material")},
    inset 1px 1px 0 0 ${o("colors.borderDarkest")},
    0.5px 0.5px 0 0.5px ${o("colors.borderLightest")};

  background-color: inputBackground;

  background-repeat: no-repeat;
  background-position: center center;
  background-size: 7px 7px;
`,l=t.span`
  padding: 1;
  user-select: none;
`,a=t.input.attrs({type:"checkbox"})`
  width: 12px;
  height: 12px;

  margin: 0;

  position: absolute;
  top: 0;
  left: 0;

  opacity: 0;

  &:focus ~ ${l}, &:active ~ ${l} {
    border-width: 1;
    border-style: dotted;
    padding: 0;
  }

  &:checked + ${r} {
    background-image: url('${g}');
  }

  &:checked &:disabled + ${r} {
    background-image: url('${k}');
    background-size: 7px 7px, 1.9px 1.9px;
  }

  &:disabled + ${r} {
    background-color: inputBackgroundDisabled;
  }
`;a.displayName="Field";const m=t.label`
  display: inline-block;
  height: 15px;

  line-height: 1.5;

  position: relative;

  margin: 4 0;
  padding-left: 20;

  ${({disabled:e})=>e&&u`
      color: borderDark;
      text-shadow: 0.5px 0.5px ${o("colors.borderLight")};
    `}
`,f=x.forwardRef(({children:e,style:s,checked:c,label:n,disabled:i=!1,...p},b)=>h(m,{style:s,disabled:i,children:[d(a,{checked:c,disabled:i,...p,ref:b}),d(r,{}),d(l,{children:e||n})]})),w=f;try{a.displayName="Field",a.__docgenInfo={description:"",displayName:"Field",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}export{w as C};

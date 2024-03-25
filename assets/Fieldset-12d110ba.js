import{s as o,t as i,j as l,a}from"./index-0559674c.js";import{r as p}from"./index-1b03fe98.js";const b=o.fieldset`
  border-top-style: groove;
  border-top-width: 2;
  border-top-color: borderLighter;

  border-left-style: groove;
  border-left-width: 2;
  border-left-color: borderLighter;

  border-bottom-style: solid;
  border-bottom-width: 1;
  border-bottom-color: borderDark;

  border-right-style: solid;
  border-right-width: 1;
  border-right-color: borderDark;

  box-shadow: 1px 1px 0 0 ${i("colors.borderLighter")};
`,c=o.legend`
  padding-left: 4px;
  padding-right: 1px;
`,e=p.forwardRef(({legend:r,children:t,...d},s)=>l(b,{...d,ref:s,children:[r&&a(c,{children:r}),t]})),h=e;try{e.displayName="Fieldset",e.__docgenInfo={description:"",displayName:"Fieldset",props:{legend:{defaultValue:null,description:"",name:"legend",required:!1,type:{name:"string"}}}}}catch{}export{h as F};

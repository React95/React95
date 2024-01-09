import{s as a,c as m,t,j as h,a as o}from"./index-0559674c.js";import{r as x}from"./index-1b03fe98.js";const u=a.div`
  width: ${({width:e})=>e}px;
  height: 20px;

  position: relative;

  text-align: center;
`,f=a.div`
  width: ${({width:e})=>e}px;
  height: 20px;
  line-height: 20px;

  border-left: 1;
  border-left-color: borderDark;

  border-top: 1;
  border-top-color: borderDark;

  background-color: inputBackground;
  color: materialText;

  ${m`
    box-shadow: inset -1px -1px 0 0 ${t("colors.material")},
      inset 1px 1px 0 0 ${t("colors.borderDarkest")},
      0.5px 0.5px 0 0.5px ${t("colors.borderLightest")};
  `}
`,b=a.div`
  width: ${({percent:e})=>e}%;

  position: absolute;
  top: 0;
  left: 0;

  overflow: hidden;
`,w=a.div`
  width: ${({width:e})=>e}px;
  height: 17px;
  line-height: 18px;

  margin-left: 2;
  margin-top: 2;

  background-color: progress;
  color: ${t("colors.materialTextInvert")};
`,s=x.forwardRef(({width:e,percent:i,...l},g)=>h(u,{width:e,...l,ref:g,children:[o(f,{width:e,children:`${i}%`}),o(b,{percent:i,children:o(w,{width:e,children:`${i}%`})})]}));s.defaultProps={width:150,percent:0};const c=s;try{s.displayName="ProgressBar",s.__docgenInfo={description:"",displayName:"ProgressBar",props:{width:{defaultValue:{value:"150"},description:"",name:"width",required:!1,type:{name:"number"}},percent:{defaultValue:{value:"0"},description:"",name:"percent",required:!1,type:{name:"number"}}}}}catch{}const B={title:"ProgressBar",component:c,tags:["autodocs"]},r={render:()=>o(c,{width:200,percent:49}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A13"}}};var n,d,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <ProgressBar width={200} percent={49} />,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A13'
    }
  }
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const v=["Simple"];export{r as Simple,v as __namedExportsOrder,B as default};

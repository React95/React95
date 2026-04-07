import{r as e,R as n}from"./index-9fa1aa67.js";/* empty css                                   */import{c as d}from"./index-923230fa.js";import{F as u}from"./Frame-a5e28bb8.js";var p="r95_1rnz0nz0",g="r95_1rnz0nz1",f="r95_1rnz0nz2",h="r95_1rnz0nz3";const t=e.forwardRef(({children:r,disabled:c,...a},i)=>n.createElement("label",{className:d(f,a.className)},n.createElement("input",{type:"radio",disabled:c,className:h,ref:i,...a}),n.createElement("span",{className:p}),n.createElement("span",{className:g},r)));t.__docgenInfo={description:"",methods:[],displayName:"RadioButton"};const D={title:"RadioButton",component:t,tags:["autodocs"]},E=()=>{const[r,c]=e.useState("one"),a=i=>c(i.target.value);return e.createElement(u,{display:"flex",flexDirection:"column"},e.createElement(t,{name:"working",value:"one",checked:r==="one",onChange:a},"Working"),e.createElement(t,{name:"working",value:"two",checked:r==="two",onChange:a},"Working"),e.createElement(t,{readOnly:!0,checked:!0,value:"three"},"Checked"),e.createElement(t,{readOnly:!0,disabled:!0,value:"four"},"Disabled"),e.createElement(t,{readOnly:!0,checked:!0,disabled:!0,value:"five"},"Checked & Disabled"))},o={render:()=>e.createElement(E,null),parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A14"}}};var s,l,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <SimpleDemo />,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A14'
    }
  }
}`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const _=["Simple"];export{o as Simple,_ as __namedExportsOrder,D as default};

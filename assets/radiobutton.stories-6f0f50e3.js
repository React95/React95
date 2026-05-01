import{j as e}from"./jsx-runtime-e5910377.js";import{r as l}from"./index-66a3a5c2.js";/* empty css                                   */import{c as m}from"./index-626ba1ae.js";import{F as u}from"./Frame-ad175eaa.js";var p="r95_1rnz0nz0",g="r95_1rnz0nz1",h="r95_1rnz0nz2",x="r95_1rnz0nz3";const r=l.forwardRef(({children:n,disabled:s,...a},o)=>e.jsxs("label",{className:m(h,a.className),children:[e.jsx("input",{type:"radio",disabled:s,className:x,ref:o,...a}),e.jsx("span",{className:p}),e.jsx("span",{className:g,children:n})]}));r.__docgenInfo={description:"",methods:[],displayName:"RadioButton"};const D={title:"RadioButton",component:r,tags:["autodocs"]},f=()=>{const[n,s]=l.useState("one"),a=o=>s(o.target.value);return e.jsxs(u,{display:"flex",flexDirection:"column",children:[e.jsx(r,{name:"working",value:"one",checked:n==="one",onChange:a,children:"Working"}),e.jsx(r,{name:"working",value:"two",checked:n==="two",onChange:a,children:"Working"}),e.jsx(r,{readOnly:!0,checked:!0,value:"three",children:"Checked"}),e.jsx(r,{readOnly:!0,disabled:!0,value:"four",children:"Disabled"}),e.jsx(r,{readOnly:!0,checked:!0,disabled:!0,value:"five",children:"Checked & Disabled"})]})},t={render:()=>e.jsx(f,{}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A14"}}};var i,c,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <SimpleDemo />,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A14'
    }
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const _=["Simple"];export{t as Simple,_ as __namedExportsOrder,D as default};

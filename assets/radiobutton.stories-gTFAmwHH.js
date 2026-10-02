import{r as g,j as e,c as h,F as x}from"./iframe-BJgbW1uk.js";/* empty css                                   *//* empty css                              */var f="r95_1rnz0nz0",y="r95_1rnz0nz1",_="r95_1rnz0nz2",j="r95_1rnz0nz3";const r=g.forwardRef(({children:n,disabled:s,...a},c)=>e.jsxs("label",{className:h(_,a.className),children:[e.jsx("input",{type:"radio",disabled:s,className:j,ref:c,...a}),e.jsx("span",{className:f}),e.jsx("span",{className:y,children:n})]}));try{r.displayName="RadioButton",r.__docgenInfo={description:"",displayName:"RadioButton",filePath:"/home/runner/work/React95/React95/packages/core/components/RadioButton/RadioButton.tsx",methods:[],props:{},tags:{}}}catch{}const b={title:"RadioButton",component:r,tags:["autodocs"]},k=()=>{const[n,s]=g.useState("one"),a=c=>s(c.target.value);return e.jsxs(x,{display:"flex",flexDirection:"column",children:[e.jsx(r,{name:"working",value:"one",checked:n==="one",onChange:a,children:"Working"}),e.jsx(r,{name:"working",value:"two",checked:n==="two",onChange:a,children:"Working"}),e.jsx(r,{readOnly:!0,checked:!0,value:"three",children:"Checked"}),e.jsx(r,{readOnly:!0,disabled:!0,value:"four",children:"Disabled"}),e.jsx(r,{readOnly:!0,checked:!0,disabled:!0,value:"five",children:"Checked & Disabled"})]})},t={render:()=>e.jsx(k,{}),parameters:{controls:{disable:!0},design:{type:"figma",url:"https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A14"}}},o={args:{children:"Option",checked:!1,disabled:!1,readOnly:!0},argTypes:{children:{control:"text"}}},R=["Simple","Playground"];var i,d,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <SimpleDemo />,
  parameters: {
    // a demo of every state; the controls are on Playground
    controls: {
      disable: true
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A14'
    }
  }
}`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var u,m,p;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Option',
    checked: false,
    disabled: false,
    readOnly: true
  },
  argTypes: {
    children: {
      control: 'text'
    }
  }
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const S=Object.freeze(Object.defineProperty({__proto__:null,Playground:o,Simple:t,__namedExportsOrder:R,default:b},Symbol.toStringTag,{value:"Module"}));export{S as R};

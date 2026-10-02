import{j as e,r as R,F as B}from"./iframe-BJgbW1uk.js";import{C as r}from"./Checkbox-vEKwWhu_.js";/* empty css                              */const I={title:"Checkbox",component:r,tags:["autodocs"],argTypes:{children:{control:"text"}}},K=()=>{const[n,o]=R.useState(!0);return e.jsxs(B,{display:"flex",flexDirection:"column",children:[e.jsx(r,{checked:n,onChange:()=>{o(!n)},children:"Working"}),e.jsx(r,{readOnly:!0,checked:!0,children:"Checked"}),e.jsx(r,{readOnly:!0,checked:!1,children:"Unchecked"}),e.jsx(r,{readOnly:!0,disabled:!0,children:"Disabled"}),e.jsx(r,{readOnly:!0,disabled:!0,checked:!0,children:"Checked and Disabled"})]})},s={render:()=>e.jsx(K,{}),parameters:{controls:{disable:!0},design:{type:"figma",url:"https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4"}}},t={args:{children:"Checked",checked:!0,readOnly:!0},parameters:{design:{type:"figma",url:"https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4"}}},a={args:{children:"Unchecked",checked:!1,readOnly:!0},parameters:{design:{type:"figma",url:"https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4"}}},i={args:{children:"Disabled",disabled:!0},parameters:{design:{type:"figma",url:"https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4"}}},c={args:{children:"Checked and Disabled",checked:!0,disabled:!0,readOnly:!0},parameters:{design:{type:"figma",url:"https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4"}}},N=n=>{const[o,q]=R.useState(!0);return e.jsx(r,{...n,checked:o,onChange:()=>q(!o)})},d={args:{children:"Working",disabled:!1},render:n=>e.jsx(N,{...n}),parameters:{design:{type:"figma",url:"https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4"}}},Z=["All","Checked","Unchecked","Disabled","CheckedAndDisabled","Working"];var g,l,m;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <AllDemo />,
  parameters: {
    // a demo of every state; each one also has its own story with controls
    controls: {
      disable: true
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4'
    }
  }
}`,...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var u,p,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Checked',
    checked: true,
    readOnly: true
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4'
    }
  }
}`,...(h=(p=t.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var D,b,k;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: 'Unchecked',
    checked: false,
    readOnly: true
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4'
    }
  }
}`,...(k=(b=a.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var w,f,x;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: 'Disabled',
    disabled: true
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4'
    }
  }
}`,...(x=(f=i.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var y,j,C;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'Checked and Disabled',
    checked: true,
    disabled: true,
    readOnly: true
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4'
    }
  }
}`,...(C=(j=c.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var A,T,O;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: 'Working',
    disabled: false
  },
  render: args => <WorkingDemo {...args} />,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4'
    }
  }
}`,...(O=(T=d.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};const U=Object.freeze(Object.defineProperty({__proto__:null,All:s,Checked:t,CheckedAndDisabled:c,Disabled:i,Unchecked:a,Working:d,__namedExportsOrder:Z,default:I},Symbol.toStringTag,{value:"Module"}));export{U as C};

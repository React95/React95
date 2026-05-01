import{j as e}from"./jsx-runtime-e5910377.js";import{r as B}from"./index-66a3a5c2.js";import{C as r}from"./Checkbox-cc7f8bfd.js";import{F as I}from"./Frame-ad175eaa.js";/* empty css                                */import"./index-626ba1ae.js";const E={title:"Checkbox",component:r,tags:["autodocs"]},K=()=>{const[i,o]=B.useState(!0);return e.jsxs(I,{display:"flex",flexDirection:"column",children:[e.jsx(r,{checked:i,onChange:()=>{o(!i)},children:"Working"}),e.jsx(r,{readOnly:!0,checked:!0,children:"Checked"}),e.jsx(r,{readOnly:!0,checked:!1,children:"Unchecked"}),e.jsx(r,{readOnly:!0,disabled:!0,children:"Disabled"}),e.jsx(r,{readOnly:!0,disabled:!0,checked:!0,children:"Checked and Disabled"})]})},n={render:()=>e.jsx(K,{}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4"}}},c={render:()=>e.jsx(r,{checked:!0,readOnly:!0,children:"Checked"}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4"}}},t={render:()=>e.jsx(r,{readOnly:!0,checked:!1,children:"Unchecked"}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4"}}},s={render:()=>e.jsx(r,{disabled:!0,children:"Disabled"}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4"}}},a={render:()=>e.jsx(r,{readOnly:!0,disabled:!0,checked:!0,children:"Checked and Disabled"}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4"}}},N=()=>{const[i,o]=B.useState(!0);return e.jsx(r,{checked:i,onChange:()=>o(!i),children:"Working"})},d={render:()=>e.jsx(N,{}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4"}}};var m,l,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <AllDemo />,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4'
    }
  }
}`,...(g=(l=n.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var p,u,h;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Checkbox checked readOnly>
      Checked
    </Checkbox>,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4'
    }
  }
}`,...(h=(u=c.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var f,k,x;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Checkbox readOnly checked={false}>
      Unchecked
    </Checkbox>,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4'
    }
  }
}`,...(x=(k=t.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var b,D,w;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Checkbox disabled>Disabled</Checkbox>,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4'
    }
  }
}`,...(w=(D=s.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var j,C,y;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Checkbox readOnly disabled checked>
      Checked and Disabled
    </Checkbox>,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4'
    }
  }
}`,...(y=(C=a.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var A,R,q;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <WorkingDemo />,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4'
    }
  }
}`,...(q=(R=d.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};const _=["All","Checked","Unchecked","Disabled","CheckedAndDisabled","Working"];export{n as All,c as Checked,a as CheckedAndDisabled,s as Disabled,t as Unchecked,d as Working,_ as __namedExportsOrder,E as default};

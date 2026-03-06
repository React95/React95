import{r as e}from"./index-9fa1aa67.js";import{C as r}from"./Checkbox-21fe22df.js";import{F as B}from"./Frame-f7ea70b0.js";/* empty css                                */import"./index-923230fa.js";const S={title:"Checkbox",component:r,tags:["autodocs"]},I=()=>{const[t,o]=e.useState(!0);return e.createElement(B,{display:"flex",flexDirection:"column"},e.createElement(r,{checked:t,onChange:()=>{o(!t)}},"Working"),e.createElement(r,{readOnly:!0,checked:!0},"Checked"),e.createElement(r,{readOnly:!0,checked:!1},"Unchecked"),e.createElement(r,{readOnly:!0,disabled:!0},"Disabled"),e.createElement(r,{readOnly:!0,disabled:!0,checked:!0},"Checked and Disabled"))},a={render:()=>e.createElement(I,null),parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4"}}},n={render:()=>e.createElement(r,{checked:!0,readOnly:!0},"Checked"),parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4"}}},c={render:()=>e.createElement(r,{readOnly:!0,checked:!1},"Unchecked"),parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4"}}},i={render:()=>e.createElement(r,{disabled:!0},"Disabled"),parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4"}}},s={render:()=>e.createElement(r,{readOnly:!0,disabled:!0,checked:!0},"Checked and Disabled"),parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4"}}},K=()=>{const[t,o]=e.useState(!0);return e.createElement(r,{checked:t,onChange:()=>o(!t)},"Working")},d={render:()=>e.createElement(K,null),parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4"}}};var m,l,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <AllDemo />,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4'
    }
  }
}`,...(g=(l=a.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var p,u,h;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Checkbox checked readOnly>
      Checked
    </Checkbox>,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4'
    }
  }
}`,...(h=(u=n.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var f,k,b;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Checkbox readOnly checked={false}>
      Unchecked
    </Checkbox>,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4'
    }
  }
}`,...(b=(k=c.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var D,w,x;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Checkbox disabled>Disabled</Checkbox>,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4'
    }
  }
}`,...(x=(w=i.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var C,y,A;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Checkbox readOnly disabled checked>
      Checked and Disabled
    </Checkbox>,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4'
    }
  }
}`,...(A=(y=s.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var E,j,q;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <WorkingDemo />,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4'
    }
  }
}`,...(q=(j=d.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};const W=["All","Checked","Unchecked","Disabled","CheckedAndDisabled","Working"];export{a as All,n as Checked,s as CheckedAndDisabled,i as Disabled,c as Unchecked,d as Working,W as __namedExportsOrder,S as default};

import{j as B,a as r}from"./jsx-runtime-e43ccb36.js";import{r as q}from"./index-1b03fe98.js";import{C as e}from"./Checkbox-837d2263.js";import{F as I}from"./Frame-9c505601.js";import"./index-7332eacf.js";const U={title:"Checkbox",component:e,tags:["autodocs"]},n={render:()=>{const[c,o]=q.useState(!0);return B(I,{display:"flex",flexDirection:"column",children:[r(e,{checked:c,onChange:()=>{o(!c)},children:"Working"}),r(e,{readOnly:!0,checked:!0,children:"Checked"}),r(e,{readOnly:!0,checked:!1,children:"Unchecked"}),r(e,{readOnly:!0,disabled:!0,children:"Disabled"}),r(e,{readOnly:!0,disabled:!0,checked:!0,children:"Checked and Disabled"})]})},parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4"}}},a={render:()=>r(e,{checked:!0,readOnly:!0,children:"Checked"}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4"}}},i={render:()=>r(e,{readOnly:!0,checked:!1,children:"Unchecked"}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4"}}},d={render:()=>r(e,{disabled:!0,children:"Disabled"}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4"}}},t={render:()=>r(e,{readOnly:!0,disabled:!0,checked:!0,children:"Checked and Disabled"}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4"}}},s={render:()=>{const[c,o]=q.useState(!0);return r(e,{checked:c,onChange:()=>o(!c),children:"Working"})},parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4"}}};var l,h,g;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const [checked, toggleChecked] = React.useState(true);
    return <Frame display="flex" flexDirection="column">
        <Checkbox checked={checked} onChange={() => {
        toggleChecked(!checked);
      }}>
          Working
        </Checkbox>

        <Checkbox readOnly checked>
          Checked
        </Checkbox>
        <Checkbox readOnly checked={false}>
          Unchecked
        </Checkbox>
        <Checkbox readOnly disabled>
          Disabled
        </Checkbox>

        <Checkbox readOnly disabled checked>
          Checked and Disabled
        </Checkbox>
      </Frame>;
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4'
    }
  }
}`,...(g=(h=n.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var m,k,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Checkbox checked readOnly>
      Checked
    </Checkbox>,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4'
    }
  }
}`,...(u=(k=a.parameters)==null?void 0:k.docs)==null?void 0:u.source}}};var p,b,f;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Checkbox readOnly checked={false}>
      Unchecked
    </Checkbox>,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4'
    }
  }
}`,...(f=(b=i.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var C,x,D;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Checkbox disabled>Disabled</Checkbox>,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4'
    }
  }
}`,...(D=(x=d.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var w,y,A;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Checkbox readOnly disabled checked>
      Checked and Disabled
    </Checkbox>,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4'
    }
  }
}`,...(A=(y=t.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var j,O,R;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const [checked, toggleChecked] = React.useState(true);
    return <Checkbox checked={checked} onChange={() => toggleChecked(!checked)}>
        Working
      </Checkbox>;
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4'
    }
  }
}`,...(R=(O=s.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};const W=["All","Checked","Unchecked","Disabled","CheckedAndDisabled","Working"];export{n as All,a as Checked,t as CheckedAndDisabled,d as Disabled,i as Unchecked,s as Working,W as __namedExportsOrder,U as default};

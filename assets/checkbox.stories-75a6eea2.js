import{r as e}from"./index-9fa1aa67.js";import{C as r}from"./Checkbox-21fe22df.js";import{F as j}from"./Frame-d1abb87e.js";/* empty css                                */import"./index-923230fa.js";const T={title:"Checkbox",component:r,tags:["autodocs"]},t={render:()=>{const[c,o]=e.useState(!0);return e.createElement(j,{display:"flex",flexDirection:"column"},e.createElement(r,{checked:c,onChange:()=>{o(!c)}},"Working"),e.createElement(r,{readOnly:!0,checked:!0},"Checked"),e.createElement(r,{readOnly:!0,checked:!1},"Unchecked"),e.createElement(r,{readOnly:!0,disabled:!0},"Disabled"),e.createElement(r,{readOnly:!0,disabled:!0,checked:!0},"Checked and Disabled"))},parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4"}}},a={render:()=>e.createElement(r,{checked:!0,readOnly:!0},"Checked"),parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4"}}},n={render:()=>e.createElement(r,{readOnly:!0,checked:!1},"Unchecked"),parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4"}}},i={render:()=>e.createElement(r,{disabled:!0},"Disabled"),parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4"}}},d={render:()=>e.createElement(r,{readOnly:!0,disabled:!0,checked:!0},"Checked and Disabled"),parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4"}}},s={render:()=>{const[c,o]=e.useState(!0);return e.createElement(r,{checked:c,onChange:()=>o(!c)},"Working")},parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4"}}};var l,m,g;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(g=(m=t.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var h,k,u;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Checkbox checked readOnly>
      Checked
    </Checkbox>,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4'
    }
  }
}`,...(u=(k=a.parameters)==null?void 0:k.docs)==null?void 0:u.source}}};var p,b,f;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Checkbox readOnly checked={false}>
      Unchecked
    </Checkbox>,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4'
    }
  }
}`,...(f=(b=n.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var C,x,D;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Checkbox disabled>Disabled</Checkbox>,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4'
    }
  }
}`,...(D=(x=i.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var w,y,A;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Checkbox readOnly disabled checked>
      Checked and Disabled
    </Checkbox>,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4'
    }
  }
}`,...(A=(y=d.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var O,R,E;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(E=(R=s.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};const Z=["All","Checked","Unchecked","Disabled","CheckedAndDisabled","Working"];export{t as All,a as Checked,d as CheckedAndDisabled,i as Disabled,n as Unchecked,s as Working,Z as __namedExportsOrder,T as default};

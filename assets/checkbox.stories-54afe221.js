import{b as R,j as L,a as r}from"./index-828bd9af.js";import{r as y}from"./index-ebeaab24.js";import{C as e}from"./Checkbox-cb3068d1.js";const _=R.div`
  display: flex;
  flex-direction: column;
`,I={title:"Checkbox",component:e,tags:["autodocs"]},d={render:()=>{const[c,i]=y.useState(!0);return L(_,{children:[r(e,{checked:c,onChange:()=>{i(!c)},children:"Working"}),r(e,{checked:!0,children:"Checked"}),r(e,{checked:!1,children:"Unchecked"}),r(e,{disabled:!0,children:"Disabled"}),r(e,{disabled:!0,checked:!0,children:"Checked and Disabled"})]})},parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4"}}},n={render:()=>r(e,{checked:!0,children:"Checked"}),parameters:{design:{disabled:!0}}},s={render:()=>r(e,{checked:!1,children:"Unchecked"}),parameters:{design:{disabled:!0}}},a={render:()=>r(e,{disabled:!0,children:"Disabled"}),parameters:{design:{disabled:!0}}},t={render:()=>r(e,{disabled:!0,checked:!0,children:"Checked and Disabled"}),parameters:{design:{disabled:!0}}},o={render:()=>{const[c,i]=y.useState(!0);return r(e,{checked:c,onChange:()=>i(!c),children:"Working"})},parameters:{design:{disabled:!0}}};var h,k,l;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const [checked, toggleChecked] = React.useState(true);
    return <CheckboxList>
        <Checkbox checked={checked} onChange={() => {
        toggleChecked(!checked);
      }}>
          Working
        </Checkbox>

        <Checkbox checked>Checked</Checkbox>
        <Checkbox checked={false}>Unchecked</Checkbox>
        <Checkbox disabled>Disabled</Checkbox>

        <Checkbox disabled checked>
          Checked and Disabled
        </Checkbox>
      </CheckboxList>;
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4'
    }
  }
}`,...(l=(k=d.parameters)==null?void 0:k.docs)==null?void 0:l.source}}};var b,u,m;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Checkbox checked>Checked</Checkbox>,
  parameters: {
    design: {
      disabled: true
    }
  }
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,p,C;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Checkbox checked={false}>Unchecked</Checkbox>,
  parameters: {
    design: {
      disabled: true
    }
  }
}`,...(C=(p=s.parameters)==null?void 0:p.docs)==null?void 0:C.source}}};var x,f,D;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Checkbox disabled>Disabled</Checkbox>,
  parameters: {
    design: {
      disabled: true
    }
  }
}`,...(D=(f=a.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var S,w,A;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Checkbox disabled checked>
      Checked and Disabled
    </Checkbox>,
  parameters: {
    design: {
      disabled: true
    }
  }
}`,...(A=(w=t.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var U,W,j;o.parameters={...o.parameters,docs:{...(U=o.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const [checked, toggleChecked] = React.useState(true);
    return <Checkbox checked={checked} onChange={() => toggleChecked(!checked)}>
        Working
      </Checkbox>;
  },
  parameters: {
    design: {
      disabled: true
    }
  }
}`,...(j=(W=o.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};const K=["All","Checked","Unchecked","Disabled","CheckedAndDisabled","Working"];export{d as All,n as Checked,t as CheckedAndDisabled,a as Disabled,s as Unchecked,o as Working,K as __namedExportsOrder,I as default};
//# sourceMappingURL=checkbox.stories-54afe221.js.map

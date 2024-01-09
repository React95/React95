import{b as r,a as e,j as a}from"./index-0559674c.js";import{C as i}from"./Checkbox-a6eb1760.js";import{F as n}from"./Fieldset-12d110ba.js";import"./index-1b03fe98.js";const d=r.div`
  display: flex;
  flex-direction: column;
`,b={title:"Fieldset",component:n,tags:["autodocs"]},t={render:()=>e(n,{legend:"Connection Settings",style:{width:"300px"},children:a(d,{children:[e(i,{checked:!1,children:"Disable Remote Keyboard & Pointer"}),e(i,{checked:!1,children:"Disable Local Keyboard & Pointer"}),e(i,{checked:!0,children:"Remove Desktop Wallpaper"})]})}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A7"}}};var o,s,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <Fieldset legend="Connection Settings" style={{
    width: '300px'
  }}>
      <CheckboxList>
        <Checkbox checked={false}>Disable Remote Keyboard & Pointer</Checkbox>
        <Checkbox checked={false}>Disable Local Keyboard & Pointer</Checkbox>
        <Checkbox checked>Remove Desktop Wallpaper</Checkbox>
      </CheckboxList>
    </Fieldset>,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A7'
    }
  }
}`,...(c=(s=t.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const x=["Simple"];export{t as Simple,x as __namedExportsOrder,b as default};

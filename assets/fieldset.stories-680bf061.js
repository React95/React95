import{r as e}from"./index-9fa1aa67.js";import{F as c}from"./Fieldset-d5757425.js";import{C as r}from"./Checkbox-b7f7dbf3.js";import{F as s}from"./Frame-d1abb87e.js";import"./index-923230fa.js";const f={title:"Fieldset",component:c,tags:["autodocs"]},t={render:()=>e.createElement(c,{legend:"Connection Settings",width:"300px"},e.createElement(s,{display:"flex",flexDirection:"column"},e.createElement(r,{readOnly:!0,checked:!1},"Disable Remote Keyboard & Pointer"),e.createElement(r,{readOnly:!0,checked:!1},"Disable Local Keyboard & Pointer"),e.createElement(r,{readOnly:!0,checked:!0},"Remove Desktop Wallpaper"))),parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A7"}}};var a,o,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <Fieldset legend="Connection Settings" width="300px">
      <Frame display="flex" flexDirection="column">
        <Checkbox readOnly checked={false}>
          Disable Remote Keyboard & Pointer
        </Checkbox>
        <Checkbox readOnly checked={false}>
          Disable Local Keyboard & Pointer
        </Checkbox>
        <Checkbox readOnly checked>
          Remove Desktop Wallpaper
        </Checkbox>
      </Frame>
    </Fieldset>,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A7'
    }
  }
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const x=["Simple"];export{t as Simple,x as __namedExportsOrder,f as default};

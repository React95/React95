import{j as e,F as c}from"./iframe-BP1fKKyq.js";import{F as s}from"./Fieldset-B0AUoW-e.js";import{C as o}from"./Checkbox-BvhHgisT.js";/* empty css                              */const{expect:d,within:m}=__STORYBOOK_MODULE_TEST__,p={title:"Fieldset",component:s,tags:["autodocs"],args:{legend:"Connection Settings",disabled:!1}},n={render:t=>e.jsx(s,{...t,width:"300px",children:e.jsxs(c,{display:"flex",flexDirection:"column",children:[e.jsx(o,{readOnly:!0,checked:!1,children:"Disable Remote Keyboard & Pointer"}),e.jsx(o,{readOnly:!0,checked:!1,children:"Disable Local Keyboard & Pointer"}),e.jsx(o,{readOnly:!0,checked:!0,children:"Remove Desktop Wallpaper"})]})}),play:async({canvas:t})=>{const l=t.getByRole("group",{name:"Connection Settings"});await d(m(l).getAllByRole("checkbox")).toHaveLength(3)},parameters:{design:{type:"figma",url:"https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A7"}}},g=["Simple"];var a,i,r;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => <Fieldset {...args} width="300px">
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
  play: async ({
    canvas
  }) => {
    // the legend names the fieldset only when it's rendered inside it
    const fieldset = canvas.getByRole('group', {
      name: 'Connection Settings'
    });
    await expect(within(fieldset).getAllByRole('checkbox')).toHaveLength(3);
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A7'
    }
  }
}`,...(r=(i=n.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const f=Object.freeze(Object.defineProperty({__proto__:null,Simple:n,__namedExportsOrder:g,default:p},Symbol.toStringTag,{value:"Module"}));export{f as F};

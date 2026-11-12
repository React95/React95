import{I as l}from"./Input-BCG5ywvj.js";const{expect:s}=__STORYBOOK_MODULE_TEST__,p={title:"Input",component:l,tags:["autodocs"],args:{placeholder:"",disabled:!1,readOnly:!1}},e={args:{"aria-label":"Sample text input"},play:async({canvas:r,userEvent:i})=>{const t=r.getByRole("textbox",{name:"Sample text input"});await i.type(t,"Hello, World!"),await s(t).toHaveValue("Hello, World!")},parameters:{design:{type:"figma",url:"https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A10"}}},c=["Simple"];var a,n,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Sample text input'
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    const input = canvas.getByRole('textbox', {
      name: 'Sample text input'
    });
    await userEvent.type(input, 'Hello, World!');
    await expect(input).toHaveValue('Hello, World!');
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A10'
    }
  }
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const m=Object.freeze(Object.defineProperty({__proto__:null,Simple:e,__namedExportsOrder:c,default:p},Symbol.toStringTag,{value:"Module"}));export{m as I};

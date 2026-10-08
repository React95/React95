import{I as i}from"./Input-Boer1S2-.js";const{expect:l}=__STORYBOOK_MODULE_TEST__,c={title:"Input",component:i,tags:["autodocs"],args:{placeholder:"",disabled:!1,readOnly:!1}},e={play:async({canvas:s,userEvent:r})=>{const t=s.getByRole("textbox");await r.type(t,"Hello, World!"),await l(t).toHaveValue("Hello, World!")},parameters:{design:{type:"figma",url:"https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A10"}}},p=["Simple"];var a,n,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    const input = canvas.getByRole('textbox');
    await userEvent.type(input, 'Hello, World!');
    await expect(input).toHaveValue('Hello, World!');
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A10'
    }
  }
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const u=Object.freeze(Object.defineProperty({__proto__:null,Simple:e,__namedExportsOrder:p,default:c},Symbol.toStringTag,{value:"Module"}));export{u as I};

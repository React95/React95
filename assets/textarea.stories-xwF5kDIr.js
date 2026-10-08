import{j as l,r as p}from"./iframe-BP1fKKyq.js";import{T as i}from"./TextArea--TLf_-Gp.js";const{expect:d}=__STORYBOOK_MODULE_TEST__,m={title:"TextArea",component:i,tags:["autodocs"],args:{rows:10,cols:50,placeholder:"",disabled:!1,readOnly:!1}},g=e=>{const[r,a]=p.useState("");return l.jsx(i,{...e,value:r,onChange:({target:{value:c}})=>a(c)})},t={render:e=>l.jsx(g,{...e}),play:async({canvas:e,userEvent:r})=>{const a=e.getByRole("textbox");await r.type(a,"Hello,{enter}World!"),await d(a).toHaveValue(`Hello,
World!`)},parameters:{design:{type:"figma",url:"https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A18"}}},x=["Simple"];var o,n,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <SimpleDemo {...args} />,
  play: async ({
    canvas,
    userEvent
  }) => {
    const textArea = canvas.getByRole('textbox');
    await userEvent.type(textArea, 'Hello,{enter}World!');
    await expect(textArea).toHaveValue('Hello,\\nWorld!');
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A18'
    }
  }
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const _=Object.freeze(Object.defineProperty({__proto__:null,Simple:t,__namedExportsOrder:x,default:m},Symbol.toStringTag,{value:"Module"}));export{_ as T};

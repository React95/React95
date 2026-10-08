import{B as i}from"./Button-CYWwPWGC.js";const{expect:l,fn:g}=__STORYBOOK_MODULE_TEST__,d={title:"Button",component:i,tags:["autodocs"],args:{children:"Ok",disabled:!1},argTypes:{children:{control:"text"}}},e={args:{onClick:g()},play:async({args:o,canvas:s,userEvent:c})=>{const r=s.getByRole("button",{name:"Ok"});await c.click(r),await l(o.onClick).toHaveBeenCalledOnce()},parameters:{design:{type:"figma",url:"https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A3"}}},p=["Simple"];var t,n,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    onClick: fn()
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    const button = canvas.getByRole('button', {
      name: 'Ok'
    });
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledOnce();
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A3'
    }
  }
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const u=Object.freeze(Object.defineProperty({__proto__:null,Simple:e,__namedExportsOrder:p,default:d},Symbol.toStringTag,{value:"Module"}));export{u as B};

import{j as c}from"./iframe-BP1fKKyq.js";import{R as o}from"./Range-Gvi9FpaP.js";const{expect:a}=__STORYBOOK_MODULE_TEST__,g={title:"Range",component:o,tags:["autodocs"],args:{min:0,max:100,step:1,disabled:!1}},e={render:n=>c.jsx(o,{style:{width:100},...n}),play:async({canvas:n})=>{const t=n.getByRole("slider");await a(t).toHaveAttribute("min","0"),await a(t).toHaveAttribute("max","100"),await a(t).toHaveAttribute("step","1"),await a(t).toHaveValue("50")},parameters:{design:{type:"figma",url:"https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A15"}}},p=["Simple"];var r,i,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => <Range style={{
    width: 100
  }} {...args} />,
  play: async ({
    canvas
  }) => {
    const range = canvas.getByRole('slider');
    await expect(range).toHaveAttribute('min', '0');
    await expect(range).toHaveAttribute('max', '100');
    await expect(range).toHaveAttribute('step', '1');
    // with no value, the browser starts it halfway
    await expect(range).toHaveValue('50');
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A15'
    }
  }
}`,...(s=(i=e.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const d=Object.freeze(Object.defineProperty({__proto__:null,Simple:e,__namedExportsOrder:p,default:g},Symbol.toStringTag,{value:"Module"}));export{d as R};

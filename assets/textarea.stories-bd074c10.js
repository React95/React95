import{r as t}from"./index-9fa1aa67.js";import{T as s}from"./TextArea-e8e0d706.js";import"./index-923230fa.js";import"./Frame-8a2a37ef.js";import"./Input.css-f9ede444.js";/* empty css                              */const x={title:"TextArea",component:s,tags:["autodocs"]},e={render:()=>{const[o,i]=t.useState("");return t.createElement(s,{rows:10,cols:50,value:o,onChange:({target:{value:c}})=>i(c)})},parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A18"}}};var r,a,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    const [text, setValue] = React.useState('');
    return <TextArea rows={10} cols={50} value={text} onChange={({
      target: {
        value
      }
    }: React.ChangeEvent<HTMLTextAreaElement>) => setValue(value)} />;
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A18'
    }
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const f=["Simple"];export{e as Simple,f as __namedExportsOrder,x as default};

import{r,R as m}from"./index-9fa1aa67.js";import{c as l}from"./index-923230fa.js";import{F as p}from"./Frame-8a2a37ef.js";import{i as u}from"./Input.css-f9ede444.js";/* empty css                              */const s=r.forwardRef((e,a)=>m.createElement(p,{...e,ref:a,className:l(u,e.className),as:"textarea"}));s.__docgenInfo={description:"",methods:[],displayName:"TextArea"};const T={title:"TextArea",component:s,tags:["autodocs"]},t={render:()=>{const[e,a]=r.useState("");return r.createElement(s,{rows:10,cols:50,value:e,onChange:({target:{value:i}})=>a(i)})},parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A18"}}};var n,o,c;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(c=(o=t.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const A=["Simple"];export{t as Simple,A as __namedExportsOrder,T as default};

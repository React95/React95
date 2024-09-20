import{r,R as m}from"./index-9fa1aa67.js";import{F as p}from"./Frame-8a2a37ef.js";import{i as l}from"./Input.css-f9ede444.js";import"./index-923230fa.js";/* empty css                              */const s=r.forwardRef((t,a)=>m.createElement(p,{...t,ref:a,className:l,as:"textarea"}));s.__docgenInfo={description:"",methods:[],displayName:"TextArea"};const w={title:"TextArea",component:s,tags:["autodocs"]},e={render:()=>{const[t,a]=r.useState("");return r.createElement(s,{rows:10,cols:50,value:t,onChange:({target:{value:c}})=>a(c)})},parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A18"}}};var n,o,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const T=["Simple"];export{e as Simple,T as __namedExportsOrder,w as default};

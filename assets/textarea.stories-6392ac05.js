import{s as l,a as d}from"./index-828bd9af.js";import{r as i}from"./index-ebeaab24.js";import{p as m,b as u,s as g}from"./index.esm-061bac8e.js";const x=l.textarea`
  outline: none;
  border: none;
  cursor: text;

  padding: 3 3 5 3;

  color: materialText;
  background-color: inputBackground;

  border-radius: 0;

  border-top-width: 1;
  border-top-style: 1;
  border-top-color: borderDark;

  border-right-width: 0;
  border-bottom-width: 0;

  border-left-width: 1;
  border-left-style: 1;
  border-left-color: borderDark;

  box-shadow: input;

  -webkit-appearance: none;

  ${m}
  ${u}
  ${g}
`,a=i.forwardRef((e,t)=>d(x,{...e,as:"textarea",ref:t})),c=a;try{a.displayName="TextArea",a.__docgenInfo={description:"",displayName:"TextArea",props:{}}}catch{}const h={title:"TextArea",component:c,tags:["autodocs"]},r={render:()=>{const[e,t]=i.useState("");return d(c,{rows:10,cols:50,value:e,onChange:({target:{value:p}})=>t(p)})},parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A18"}}};var o,n,s;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(s=(n=r.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const T=["Simple"];export{r as Simple,T as __namedExportsOrder,h as default};
//# sourceMappingURL=textarea.stories-6392ac05.js.map

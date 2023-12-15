import{s as l,a as d}from"./index-9af3809b.js";import{r as i}from"./index-ebeaab24.js";import{p as m,b as u,s as g}from"./index.esm-061bac8e.js";import{C as x}from"./Cursor-8657a891.js";const b=l.textarea`
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

  ${x.Text};

  ${m}
  ${u}
  ${g}
`,o=i.forwardRef((e,t)=>d(b,{...e,as:"textarea",ref:t})),c=o;try{o.displayName="TextArea",o.__docgenInfo={description:"",displayName:"TextArea",props:{}}}catch{}const _={title:"TextArea",component:c,tags:["autodocs"]},r={render:()=>{const[e,t]=i.useState("");return d(c,{rows:10,cols:50,value:e,onChange:({target:{value:p}})=>t(p)})},parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A18"}}};var a,s,n;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const A=["Simple"];export{r as Simple,A as __namedExportsOrder,_ as default};
//# sourceMappingURL=textarea.stories-5a2242a5.js.map

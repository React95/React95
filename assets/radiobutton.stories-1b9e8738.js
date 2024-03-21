import{j as l,a as e}from"./jsx-runtime-e43ccb36.js";import{r as u}from"./index-1b03fe98.js";import{F as p}from"./Frame-9c505601.js";import"./index-7332eacf.js";var m="r95_1rnz0nz3",h="r95_1rnz0nz0",g="r95_1rnz0nz2",f="r95_1rnz0nz1";const n=u.forwardRef(({children:t,disabled:r,...a},i)=>l("label",{className:g,children:[e("input",{type:"radio",disabled:r,className:m,ref:i,...a}),e("span",{className:h}),e("span",{className:f,children:t})]}));try{n.displayName="RadioButton",n.__docgenInfo={description:"",displayName:"RadioButton",props:{}}}catch{}const B={title:"RadioButton",component:n,tags:["autodocs"]},o={render:()=>{const[t,r]=u.useState("one"),a=i=>r(i.target.value);return l(p,{display:"flex",flexDirection:"column",children:[e(n,{name:"working",value:"one",checked:t==="one",onChange:a,children:"Working"}),e(n,{name:"working",value:"two",checked:t==="two",onChange:a,children:"Working"}),e(n,{readOnly:!0,checked:!0,value:"three",children:"Checked"}),e(n,{readOnly:!0,disabled:!0,value:"four",children:"Disabled"}),e(n,{readOnly:!0,checked:!0,disabled:!0,value:"five",children:"Checked & Disabled"})]})},parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A14"}}};var d,c,s;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const [selectedOption, setSelectedOption] = React.useState('one');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setSelectedOption(e.target.value);
    return <Frame display="flex" flexDirection="column">
        <RadioButton name="working" value="one" checked={selectedOption === 'one'} onChange={handleChange}>
          Working
        </RadioButton>
        <RadioButton name="working" value="two" checked={selectedOption === 'two'} onChange={handleChange}>
          Working
        </RadioButton>
        <RadioButton readOnly checked value="three">
          Checked
        </RadioButton>
        <RadioButton readOnly disabled value="four">
          Disabled
        </RadioButton>
        <RadioButton readOnly checked disabled value="five">
          Checked & Disabled
        </RadioButton>
      </Frame>;
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A14'
    }
  }
}`,...(s=(c=o.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};const w=["Simple"];export{o as Simple,w as __namedExportsOrder,B as default};

import{r as e,R as o}from"./index-9fa1aa67.js";import{c as u}from"./index-923230fa.js";import{F as m}from"./Frame-8a2a37ef.js";var p="r95_1rnz0nz0",g="r95_1rnz0nz1",h="r95_1rnz0nz2",f="r95_1rnz0nz3";const t=e.forwardRef(({children:n,disabled:i,...a},c)=>o.createElement("label",{className:u(h,a.className)},o.createElement("input",{type:"radio",disabled:i,className:f,ref:c,...a}),o.createElement("span",{className:p}),o.createElement("span",{className:g},n)));t.__docgenInfo={description:"",methods:[],displayName:"RadioButton"};const B={title:"RadioButton",component:t,tags:["autodocs"]},r={render:()=>{const[n,i]=e.useState("one"),a=c=>i(c.target.value);return e.createElement(m,{display:"flex",flexDirection:"column"},e.createElement(t,{name:"working",value:"one",checked:n==="one",onChange:a},"Working"),e.createElement(t,{name:"working",value:"two",checked:n==="two",onChange:a},"Working"),e.createElement(t,{readOnly:!0,checked:!0,value:"three"},"Checked"),e.createElement(t,{readOnly:!0,disabled:!0,value:"four"},"Disabled"),e.createElement(t,{readOnly:!0,checked:!0,disabled:!0,value:"five"},"Checked & Disabled"))},parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A14"}}};var d,l,s;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(s=(l=r.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const w=["Simple"];export{r as Simple,w as __namedExportsOrder,B as default};

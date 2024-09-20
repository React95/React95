import{r as e,R as o}from"./index-9fa1aa67.js";import{F as u}from"./Frame-8a2a37ef.js";import"./index-923230fa.js";var m="r95_1rnz0nz0",p="r95_1rnz0nz1",g="r95_1rnz0nz2",h="r95_1rnz0nz3";const t=e.forwardRef(({children:a,disabled:i,...n},d)=>o.createElement("label",{className:g},o.createElement("input",{type:"radio",disabled:i,className:h,ref:d,...n}),o.createElement("span",{className:m}),o.createElement("span",{className:p},a)));t.__docgenInfo={description:"",methods:[],displayName:"RadioButton"};const v={title:"RadioButton",component:t,tags:["autodocs"]},r={render:()=>{const[a,i]=e.useState("one"),n=d=>i(d.target.value);return e.createElement(u,{display:"flex",flexDirection:"column"},e.createElement(t,{name:"working",value:"one",checked:a==="one",onChange:n},"Working"),e.createElement(t,{name:"working",value:"two",checked:a==="two",onChange:n},"Working"),e.createElement(t,{readOnly:!0,checked:!0,value:"three"},"Checked"),e.createElement(t,{readOnly:!0,disabled:!0,value:"four"},"Disabled"),e.createElement(t,{readOnly:!0,checked:!0,disabled:!0,value:"five"},"Checked & Disabled"))},parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A14"}}};var c,l,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(s=(l=r.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const B=["Simple"];export{r as Simple,B as __namedExportsOrder,v as default};

import{r as e}from"./index-9fa1aa67.js";import{T as s}from"./Tooltip-210aa1f5.js";import"./index-923230fa.js";/* empty css                               */const y={title:"Tooltip",component:s,tags:["autodocs"],argTypes:{delay:{control:{type:"number",step:100}}}};function p(t){const m=["January","February","March","April","May","June","July","August","September","October","November","December"],i=t.getDate(),l=t.getMonth(),c=t.getFullYear();return`${i.toString().padStart(2,"0")} ${m[l]} ${c}`}const r={render:t=>e.createElement(e.Fragment,null,e.createElement("br",null),e.createElement("br",null),e.createElement("br",null),e.createElement(s,{...t},e.createElement("span",null,"Hover me"))),args:{delay:1e3,text:p(new Date)},parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A19"}}};var n,a,o;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (args: Story['args']) => <>
      <br />
      <br />
      <br />
      <Tooltip {...args}>
        <span>Hover me</span>
      </Tooltip>
    </>,
  args: {
    delay: 1000,
    text: formatDate(new Date())
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A19'
    }
  }
}`,...(o=(a=r.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const f=["Simple"];export{r as Simple,f as __namedExportsOrder,y as default};

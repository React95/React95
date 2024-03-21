import{j as l,F as g,a as r}from"./jsx-runtime-e43ccb36.js";import{T as s}from"./Tooltip-35b785ae.js";import"./index-1b03fe98.js";import"./index-7332eacf.js";const D={title:"Tooltip",component:s,tags:["autodocs"],argTypes:{delay:{control:{type:"number",step:100}}}};function d(e){const i=["January","February","March","April","May","June","July","August","September","October","November","December"],m=e.getDate(),p=e.getMonth(),c=e.getFullYear();return`${m.toString().padStart(2,"0")} ${i[p]} ${c}`}const t={render:e=>l(g,{children:[r("br",{}),r("br",{}),r("br",{}),r(s,{...e,children:r("span",{children:"Hover me"})})]}),args:{delay:1e3,text:d(new Date)},parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A19"}}};var n,a,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(o=(a=t.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const h=["Simple"];export{t as Simple,h as __namedExportsOrder,D as default};

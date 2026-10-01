import{j as e}from"./iframe-CUQ9NVYA.js";import{T as s}from"./Tooltip-DwyD3Xfy.js";import"./preload-helper-C1FmrZbK.js";import"./index-BMynro7A.js";/* empty css                               */const y={title:"Tooltip",component:s,tags:["autodocs"],argTypes:{delay:{control:{type:"number",step:100}}}};function g(t){const i=["January","February","March","April","May","June","July","August","September","October","November","December"],m=t.getDate(),p=t.getMonth(),c=t.getFullYear();return`${m.toString().padStart(2,"0")} ${i[p]} ${c}`}const r={render:t=>e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(s,{...t,children:e.jsx("span",{children:"Hover me"})})]}),args:{delay:1e3,text:g(new Date)},parameters:{design:{type:"figma",url:"https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A19"}}},f=["Simple"];var n,o,a;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A19'
    }
  }
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};export{r as Simple,f as __namedExportsOrder,y as default};

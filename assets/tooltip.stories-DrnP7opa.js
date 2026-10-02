import{j as e}from"./iframe-DtakMOZV.js";import{T as s}from"./Tooltip-DKaJKxXP.js";const l={title:"Tooltip",component:s,tags:["autodocs"],argTypes:{delay:{control:{type:"number",step:100}}}};function g(t){const i=["January","February","March","April","May","June","July","August","September","October","November","December"],p=t.getDate(),c=t.getMonth(),m=t.getFullYear();return`${p.toString().padStart(2,"0")} ${i[c]} ${m}`}const r={render:t=>e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(s,{...t,children:e.jsx("span",{children:"Hover me"})})]}),args:{delay:1e3,text:g(new Date)},parameters:{design:{type:"figma",url:"https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A19"}}},d=["Simple"];var n,o,a;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const y=Object.freeze(Object.defineProperty({__proto__:null,Simple:r,__namedExportsOrder:d,default:l},Symbol.toStringTag,{value:"Module"}));export{y as T};

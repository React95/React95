import{j as e}from"./iframe-DtakMOZV.js";import{h as u,D as T}from"./Write1-T9gLY-bW.js";import{T as r}from"./TitleBar-CO_TT_55.js";const B={title:"TitleBar",component:r,tags:["autodocs"],args:{active:!0,title:"UNKNOWN.EXE"},argTypes:{title:{control:"text"}}},a={render:t=>e.jsx(r,{width:"200px",...t}),parameters:{design:{disabled:!0}}},s={args:{active:!1},render:t=>e.jsx(r,{width:"200px",...t})},i={args:{title:"untitled - Paint"},render:t=>e.jsx(r,{...t,icon:e.jsx(T,{variant:"16x16_4"}),width:"300px",children:e.jsxs(r.OptionsBox,{children:[e.jsx(r.Option,{as:"a",href:"https://github.com/React95/React95",children:e.jsx(u,{variant:"16x16_4"})}),e.jsx(r.Help,{}),e.jsx(r.Maximize,{}),e.jsx(r.Minimize,{}),e.jsx(r.Restore,{}),e.jsx(r.Close,{})]})})},h=["Simple","Inactive","Complete"];var n,o,l;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => <TitleBar width="200px" {...args} />,
  parameters: {
    design: {
      disabled: true
    }
  }
}`,...(l=(o=a.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var c,p,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    active: false
  },
  render: args => <TitleBar width="200px" {...args} />
}`,...(d=(p=s.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,x,g;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    title: 'untitled - Paint'
  },
  render: args => <TitleBar {...args} icon={<Doc variant="16x16_4" />} width="300px">
      <TitleBar.OptionsBox>
        <TitleBar.Option as="a" href="https://github.com/React95/React95">
          <Star variant="16x16_4" />
        </TitleBar.Option>
        <TitleBar.Help />
        <TitleBar.Maximize />
        <TitleBar.Minimize />
        <TitleBar.Restore />
        <TitleBar.Close />
      </TitleBar.OptionsBox>
    </TitleBar>
}`,...(g=(x=i.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const O=Object.freeze(Object.defineProperty({__proto__:null,Complete:i,Inactive:s,Simple:a,__namedExportsOrder:h,default:B},Symbol.toStringTag,{value:"Module"}));export{O as T};

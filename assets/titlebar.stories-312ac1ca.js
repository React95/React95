import{j as e}from"./jsx-runtime-e5910377.js";import{D as u,h as B}from"./Write1-229e0d0c.js";import{T as t}from"./TitleBar-41e014c0.js";import"./index-66a3a5c2.js";import"./index-626ba1ae.js";import"./Frame-ad175eaa.js";import"./Button.css-afb77755.js";import"./createRuntimeFn-62c9670f.esm-edc6fb2c.js";const S={title:"TitleBar",component:t,tags:["autodocs"]},r={render:()=>e.jsx(t,{width:"200px"}),parameters:{design:{disabled:!0}}},a={render:()=>e.jsx(t,{active:!1,width:"200px"})},i={render:()=>e.jsx(t,{active:!0,icon:e.jsx(u,{variant:"16x16_4"}),title:"untitled - Paint",width:"300px",children:e.jsxs(t.OptionsBox,{children:[e.jsx(t.Option,{as:"a",href:"https://github.com/React95/React95",children:e.jsx(B,{variant:"16x16_4"})}),e.jsx(t.Help,{}),e.jsx(t.Maximize,{}),e.jsx(t.Minimize,{}),e.jsx(t.Restore,{}),e.jsx(t.Close,{})]})})};var s,o,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <TitleBar width="200px" />,
  parameters: {
    design: {
      disabled: true
    }
  }
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var p,c,l;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <TitleBar active={false} width="200px" />
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,d,x;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <TitleBar active icon={<Doc variant="16x16_4" />} title="untitled - Paint" width="300px">
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
}`,...(x=(d=i.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};const _=["Simple","Inactive","Complete"];export{i as Complete,a as Inactive,r as Simple,_ as __namedExportsOrder,S as default};

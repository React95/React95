import{D as x,n as B}from"./Write1-d677703f.js";import{r as e}from"./index-9fa1aa67.js";import{T as t}from"./TitleBar-cd22ff01.js";import"./index-923230fa.js";import"./Frame-d1abb87e.js";import"./Button.css-afb77755.js";import"./createRuntimeFn-62c9670f.esm-edc6fb2c.js";const S={title:"TitleBar",component:t,tags:["autodocs"]},r={render:()=>e.createElement(t,{width:"200px"}),parameters:{design:{disabled:!0}}},a={render:()=>e.createElement(t,{active:!1,width:"200px"})},n={render:()=>e.createElement(t,{active:!0,icon:e.createElement(x,{variant:"16x16_4"}),title:"untitled - Paint",width:"300px"},e.createElement(t.OptionsBox,null,e.createElement(t.Option,{as:"a",href:"https://github.com/React95/React95"},e.createElement(B,{variant:"16x16_4"})),e.createElement(t.Help,null),e.createElement(t.Maximize,null),e.createElement(t.Minimize,null),e.createElement(t.Restore,null),e.createElement(t.Close,null)))};var i,o,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <TitleBar width="200px" />,
  parameters: {
    design: {
      disabled: true
    }
  }
}`,...(s=(o=r.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var l,c,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <TitleBar active={false} width="200px" />
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,d,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const _=["Simple","Inactive","Complete"];export{n as Complete,a as Inactive,r as Simple,_ as __namedExportsOrder,S as default};

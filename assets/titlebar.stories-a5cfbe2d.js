import{a as r,j as B}from"./index-0559674c.js";import{D as T}from"./Write1-0f5c28b2.js";import{T as e}from"./index-5d7a0789.js";import"./index-1b03fe98.js";import"./Button-1674c104.js";import"./Frame-f3688d20.js";const b={title:"TitleBar",component:e,tags:["autodocs"]},t={render:()=>r(e,{w:200}),parameters:{design:{disabled:!0}}},a={render:()=>r(e,{active:!1,w:200})},i={render:()=>r(e,{active:!0,icon:r(T,{variant:"16x16_4"}),title:"untitled - Paint",className:"draggable",w:200,children:B(e.OptionsBox,{children:[r(e.Option,{children:"?"}),r(e.Option,{children:"X"})]})})};var o,s,n;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <TitleBar w={200} />,
  parameters: {
    design: {
      disabled: true
    }
  }
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var c,l,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <TitleBar active={false} w={200} />
}`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var d,m,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <TitleBar active icon={<Doc variant="16x16_4" />} title="untitled - Paint" className="draggable" w={200}>
      <TitleBar.OptionsBox>
        <TitleBar.Option>?</TitleBar.Option>
        <TitleBar.Option>X</TitleBar.Option>
      </TitleBar.OptionsBox>
    </TitleBar>
}`,...(u=(m=i.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const S=["Simple","Inactive","Complete"];export{i as Complete,a as Inactive,t as Simple,S as __namedExportsOrder,b as default};

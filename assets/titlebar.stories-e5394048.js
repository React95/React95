import{a as r,j as B}from"./index-9af3809b.js";import{k as T}from"./Write1-4d3cd2cb.js";import{T as e}from"./index-1842050f.js";import"./index-ebeaab24.js";import"./Button-c53c5656.js";import"./Frame-b3eb3b92.js";const b={title:"TitleBar",component:e,tags:["autodocs"]},t={render:()=>r(e,{w:200}),parameters:{design:{disabled:!0}}},a={render:()=>r(e,{active:!1,w:200})},i={render:()=>r(e,{active:!0,icon:r(T,{variant:"32x32_4"}),title:"untitled - Paint",className:"draggable",w:200,children:B(e.OptionsBox,{children:[r(e.Option,{children:"?"}),r(e.Option,{children:"X"})]})})};var s,n,o;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <TitleBar w={200} />,
  parameters: {
    design: {
      disabled: true
    }
  }
}`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var c,l,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <TitleBar active={false} w={200} />
}`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var d,m,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <TitleBar active icon={<FileIcons variant="32x32_4" />} title="untitled - Paint" className="draggable" w={200}>
      <TitleBar.OptionsBox>
        <TitleBar.Option>?</TitleBar.Option>
        <TitleBar.Option>X</TitleBar.Option>
      </TitleBar.OptionsBox>
    </TitleBar>
}`,...(u=(m=i.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const S=["Simple","Inactive","Complete"];export{i as Complete,a as Inactive,t as Simple,S as __namedExportsOrder,b as default};
//# sourceMappingURL=titlebar.stories-e5394048.js.map

import{a as e,j as x}from"./jsx-runtime-e43ccb36.js";import{D as B}from"./Write1-31d87498.js";import{H as g,C as T}from"./help-4ccdb1ed.js";import{T as r}from"./TitleBar-4003dbf8.js";import"./index-1b03fe98.js";import"./Frame-9c505601.js";import"./index-7332eacf.js";import"./createRuntimeFn-62c9670f.esm-edc6fb2c.js";import"./Button.css-afb77755.js";const j={title:"TitleBar",component:r,tags:["autodocs"]},t={render:()=>e(r,{width:"200px"}),parameters:{design:{disabled:!0}}},a={render:()=>e(r,{active:!1,width:"200px"})},i={render:()=>e(r,{active:!0,icon:e(B,{variant:"16x16_4"}),title:"untitled - Paint",className:"draggable",width:"200px",children:x(r.OptionsBox,{children:[e(r.Option,{children:e("img",{src:g,alt:"help"})}),e(r.Option,{children:e("img",{src:T,alt:"close"})})]})})};var s,o,n;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <TitleBar width="200px" />,
  parameters: {
    design: {
      disabled: true
    }
  }
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var l,p,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <TitleBar active={false} width="200px" />
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,m,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <TitleBar active icon={<Doc variant="16x16_4" />} title="untitled - Paint" className="draggable" width="200px">
      <TitleBar.OptionsBox>
        <TitleBar.Option>
          <img src={Help} alt="help" />
        </TitleBar.Option>
        <TitleBar.Option>
          <img src={Close} alt="close" />
        </TitleBar.Option>
      </TitleBar.OptionsBox>
    </TitleBar>
}`,...(u=(m=i.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const D=["Simple","Inactive","Complete"];export{i as Complete,a as Inactive,t as Simple,D as __namedExportsOrder,j as default};

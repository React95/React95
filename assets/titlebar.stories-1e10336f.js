import{D as B}from"./Write1-f730c4ea.js";import{r as e}from"./index-ff614419.js";import{H as g,C as x}from"./help-4ccdb1ed.js";import{T as t}from"./TitleBar-dbb9a1f2.js";import"./Frame-43ccd6dd.js";import"./index-a20f67f3.js";import"./createRuntimeFn-62c9670f.esm-edc6fb2c.js";import"./Button.css-afb77755.js";const C={title:"TitleBar",component:t,tags:["autodocs"]},r={render:()=>e.createElement(t,{width:"200px"}),parameters:{design:{disabled:!0}}},a={render:()=>e.createElement(t,{active:!1,width:"200px"})},i={render:()=>e.createElement(t,{active:!0,icon:e.createElement(B,{variant:"16x16_4"}),title:"untitled - Paint",className:"draggable",width:"200px"},e.createElement(t.OptionsBox,null,e.createElement(t.Option,null,e.createElement("img",{src:g,alt:"help"})),e.createElement(t.Option,null,e.createElement("img",{src:x,alt:"close"}))))};var n,o,s;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <TitleBar width="200px" />,
  parameters: {
    design: {
      disabled: true
    }
  }
}`,...(s=(o=r.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var l,c,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <TitleBar active={false} width="200px" />
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,d,u;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(d=i.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const S=["Simple","Inactive","Complete"];export{i as Complete,a as Inactive,r as Simple,S as __namedExportsOrder,C as default};

import{r as e}from"./index-9fa1aa67.js";import{F as c}from"./Frame-8a2a37ef.js";import{T as d}from"./Tree-abd6fbc2.js";import{c as n}from"./contract.css-23ce233e.js";import{c as o}from"./index-d95e5753.js";import{C as b,a as i,M as x,F as $,W as f,b as h}from"./Write1-d677703f.js";import"./index-923230fa.js";import"./createRuntimeFn-62c9670f.esm-edc6fb2c.js";const v={title:"Contract"},C=[{id:0,label:"space",icon:e.createElement(b,{variant:"16x16_4"}),children:Object.entries(n.space).map(([t,r],a)=>({id:a,label:`${t}: ${r}`,icon:e.createElement(i,{variant:"16x16_4"}),onClick:()=>{o(r)}}))},{id:1,label:"colors",icon:e.createElement(x,{variant:"16x16_4"}),children:Object.entries(n.colors).map(([t,r],a)=>({id:a,label:`${t}: ${r}`,icon:e.createElement(i,{variant:"16x16_4"}),onClick:()=>{o(r)}}))},{id:2,label:"zIndices",icon:e.createElement($,{variant:"16x16_4"}),children:Object.entries(n.zIndices).map(([t,r],a)=>({id:a,label:`${t}: ${r}`,icon:e.createElement(i,{variant:"16x16_4"}),onClick:()=>{o(r)}}))},{id:3,label:"shadows",icon:e.createElement(f,{variant:"16x16_4"}),children:Object.entries(n.shadows).map(([t,r],a)=>({id:a,label:`${t}: ${r}`,icon:e.createElement(i,{variant:"16x16_4"}),onClick:()=>{o(r)}}))}],l={render:()=>e.createElement(c,{width:"470px",p:"$10",bgColor:"$material",boxShadow:"$out",display:"flex",flexDirection:"column",gap:"$8"},e.createElement(c,{as:"p",fontWeight:"bold",mt:"$0"},"Contract Theme"),e.createElement(c,{as:"code",bgColor:"white",p:"$6",alignSelf:"start",boxShadow:"$in"},"import ","{"," contract ","}"," from '@react95/core';"),e.createElement(c,null,e.createElement(d,{data:C,root:{id:-1,label:"contract",icon:e.createElement(h,{variant:"16x16_4"}),onClick:()=>{o("import { contract } from '@react95/core';")}}}))),parameters:{design:{disable:!0}}};var m,s,p;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    return <Frame width="470px" p="$10" bgColor="$material" boxShadow="$out" display="flex" flexDirection="column" gap="$8">
        <Frame as="p" fontWeight="bold" mt="$0">
          Contract Theme
        </Frame>
        <Frame as="code" bgColor="white" p="$6" alignSelf="start" boxShadow="$in">
          import {'{'} contract {'}'} from '@react95/core';
        </Frame>
        <Frame>
          <Tree data={treeNodes} root={{
          id: -1,
          label: 'contract',
          icon: <FilePen variant="16x16_4" />,
          onClick: () => {
            copy("import { contract } from '@react95/core';");
          }
        }} />
        </Frame>
      </Frame>;
  },
  parameters: {
    design: {
      disable: true
    }
  }
}`,...(p=(s=l.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const y=["Simple"];export{l as Simple,y as __namedExportsOrder,v as default};

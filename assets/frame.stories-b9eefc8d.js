import{r}from"./index-9fa1aa67.js";import{F as e}from"./Frame-8a2a37ef.js";import{c as $}from"./contract.css-23ce233e.js";import"./index-923230fa.js";const n=Object.keys($.colors).map(o=>`$${o}`),S=Object.keys($.shadows).map(o=>`$${o}`),I={title:"Frame",component:e,tags:["autodocs"],argTypes:{bgColor:{options:n,defaultValue:"$material"},backgroundColor:{options:n},color:{options:n},w:{control:"text"},width:{control:"text"},h:{control:"text"},height:{control:"text"},boxShadow:{options:S,defaultValue:"$out"}}},t={render:o=>r.createElement(e,{...o}),args:{bgColor:"$material",w:"200px",h:"100px",boxShadow:"$out"},parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A8"}}},a={render:()=>r.createElement(e,{w:"200px",h:"100px",bgColor:"$material",boxShadow:"$in"}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A8"}}},i={render:()=>r.createElement(e,{w:"200px",h:"100px",bgColor:"$material",boxShadow:"$out",padding:"$4"},r.createElement(e,{h:"100%",bgColor:"white",boxShadow:"$in"})),parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A8"}}},s={render:()=>r.createElement(e,{w:"200px",h:"100px",bgColor:"$material",boxShadow:"$out",padding:"$4"},r.createElement(e,{h:"100%",bgColor:"white",boxShadow:"$in"})),parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A8"}}};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <Frame {...args} />,
  args: {
    bgColor: '$material',
    w: '200px',
    h: '100px',
    boxShadow: '$out'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A8'
    }
  }
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,g,l;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Frame w="200px" h="100px" bgColor="$material" boxShadow="$in" />,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A8'
    }
  }
}`,...(l=(g=a.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var w,h,x;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Frame w="200px" h="100px" bgColor="$material" boxShadow="$out" padding="$4">
      <Frame h="100%" bgColor="white" boxShadow="$in" />
    </Frame>,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A8'
    }
  }
}`,...(x=(h=i.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var u,b,f;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Frame w="200px" h="100px" bgColor="$material" boxShadow="$out" padding="$4">
      <Frame h="100%" bgColor="white" boxShadow="$in" />
    </Frame>,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A8'
    }
  }
}`,...(f=(b=s.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const F=["Simple","WithBoxShadowIn","WithBoxShadowInOut","WithBackgroundColor"];export{t as Simple,s as WithBackgroundColor,a as WithBoxShadowIn,i as WithBoxShadowInOut,F as __namedExportsOrder,I as default};

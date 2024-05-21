import{a}from"./jsx-runtime-e43ccb36.js";import{F as r}from"./Frame-07ea87a5.js";import"./index-1b03fe98.js";import"./index-7332eacf.js";var f={space:{0:"var(--r95-space-0)",1:"var(--r95-space-1)",2:"var(--r95-space-2)",3:"var(--r95-space-3)",4:"var(--r95-space-4)",5:"var(--r95-space-5)",6:"var(--r95-space-6)",7:"var(--r95-space-7)",8:"var(--r95-space-8)",9:"var(--r95-space-9)",10:"var(--r95-space-10)",11:"var(--r95-space-11)",12:"var(--r95-space-12)",13:"var(--r95-space-13)",14:"var(--r95-space-14)",15:"var(--r95-space-15)",16:"var(--r95-space-16)",17:"var(--r95-space-17)",18:"var(--r95-space-18)",19:"var(--r95-space-19)",20:"var(--r95-space-20)"},colors:{anchor:"var(--r95-color-anchor)",anchorVisited:"var(--r95-color-anchorVisited)",borderDark:"var(--r95-color-borderDark)",borderDarkest:"var(--r95-color-borderDarkest)",borderLight:"var(--r95-color-borderLight)",borderLighter:"var(--r95-color-borderLighter)",borderLightest:"var(--r95-color-borderLightest)",canvas:"var(--r95-color-canvas)",canvasText:"var(--r95-color-canvasText)",headerBackground:"var(--r95-color-headerBackground)",headerNotActiveBackground:"var(--r95-color-headerNotActiveBackground)",headerNotActiveText:"var(--r95-color-headerNotActiveText)",headerText:"var(--r95-color-headerText)",material:"var(--r95-color-material)",materialText:"var(--r95-color-materialText)",materialTextDisabled:"var(--r95-color-materialTextDisabled)",materialTextDisabledShadow:"var(--r95-color-materialTextDisabledShadow)",materialTextInvert:"var(--r95-color-materialTextInvert)",progress:"var(--r95-color-progress)",inputBackground:"var(--r95-color-inputBackground)",inputBackgroundDisabled:"var(--r95-color-inputBackgroundDisabled)"},zIndices:{modal:"var(--r95-zIndex-modal)",tooltip:"var(--r95-zIndex-tooltip)",taskbar:"var(--r95-zIndex-taskbar)"},shadows:{out:"var(--r95-shadow-out)",in:"var(--r95-shadow-in)",input:"var(--r95-shadow-input)"}};const c=Object.keys(f.colors).map(e=>`$${e}`),$=Object.keys(f.shadows).map(e=>`$${e}`),k={title:"Frame",component:r,tags:["autodocs"],argTypes:{bgColor:{options:c,defaultValue:"$material"},backgroundColor:{options:c},color:{options:c},w:{control:"text"},width:{control:"text"},h:{control:"text"},height:{control:"text"},boxShadow:{options:$,defaultValue:"$out"}}},o={render:e=>a(r,{...e}),args:{bgColor:"$material",w:"200px",h:"100px",boxShadow:"$out"},parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A8"}}},t={render:()=>a(r,{w:"200px",h:"100px",bgColor:"$material",boxShadow:"$in"}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A8"}}},i={render:()=>a(r,{w:"200px",h:"100px",bgColor:"$material",boxShadow:"$out",padding:"$4",children:a(r,{h:"100%",bgColor:"white",boxShadow:"$in"})}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A8"}}},s={render:()=>a(r,{w:"200px",h:"100px",bgColor:"$material",boxShadow:"$out",padding:"$4",children:a(r,{h:"100%",bgColor:"white",boxShadow:"$in"})}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A8"}}};var n,d,p;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var l,m,g;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <Frame w="200px" h="100px" bgColor="$material" boxShadow="$in" />,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A8'
    }
  }
}`,...(g=(m=t.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var h,x,w;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Frame w="200px" h="100px" bgColor="$material" boxShadow="$out" padding="$4">
      <Frame h="100%" bgColor="white" boxShadow="$in" />
    </Frame>,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A8'
    }
  }
}`,...(w=(x=i.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var u,v,b;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Frame w="200px" h="100px" bgColor="$material" boxShadow="$out" padding="$4">
      <Frame h="100%" bgColor="white" boxShadow="$in" />
    </Frame>,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A8'
    }
  }
}`,...(b=(v=s.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const I=["Simple","WithBoxShadowIn","WithBoxShadowInOut","WithBackgroundColor"];export{o as Simple,s as WithBackgroundColor,t as WithBoxShadowIn,i as WithBoxShadowInOut,I as __namedExportsOrder,k as default};

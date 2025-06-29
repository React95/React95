import{r as e}from"./index-9fa1aa67.js";import{F as o}from"./Frame-d1abb87e.js";import{c as P}from"./contract.css-23ce233e.js";import"./index-923230fa.js";const m=Object.keys(P.colors).map(t=>`$${t}`),K=Object.keys(P.shadows).map(t=>`$${t}`),L={title:"Frame",component:o,tags:["autodocs"],parameters:{docs:{description:{component:`
Frame is a versatile container component that supports responsive design through breakpoint-based props.

## Basic Usage

Frame supports design tokens and standard CSS values:

\`\`\`tsx
<Frame w="$20" h="$10" padding="$4">
  Using design tokens
</Frame>

<Frame w="200px" h="100px" padding="16px">
  Using CSS values
</Frame>
\`\`\`

## Responsive Usage

Pass objects with breakpoint keys to make props responsive:

\`\`\`tsx
<Frame w={{ mobile: '100%', tablet: '50%', desktop: '$20' }}>
  Responsive content with mixed tokens and CSS values
</Frame>
\`\`\`

**Breakpoints:** mobile (0px+), tablet (768px+), desktop (1024px+)

**Responsive Props:** All layout and spacing props support responsive values including \`w\`, \`h\`, \`padding\`, \`margin\`, \`display\`, etc.

**Value Types:** Both design tokens (\`$4\`, \`$20\`) and CSS values (\`100%\`, \`200px\`) work in both single and responsive formats.
        `}}},argTypes:{bgColor:{options:m,defaultValue:"$material"},backgroundColor:{options:m},color:{options:m},w:{control:"text",description:'Width. Supports responsive objects: { mobile: "100%", tablet: "50%" }'},width:{control:"text",description:'Width. Supports responsive objects: { mobile: "100%", tablet: "50%" }'},h:{control:"text",description:'Height. Supports responsive objects: { mobile: "100px", desktop: "200px" }'},height:{control:"text",description:'Height. Supports responsive objects: { mobile: "100px", desktop: "200px" }'},padding:{control:"text",description:'Padding. Supports responsive objects: { mobile: "$2", desktop: "$4" }'},margin:{control:"text",description:'Margin. Supports responsive objects: { mobile: "$2", desktop: "$4" }'},display:{control:"text",description:'Display type. Supports responsive objects: { mobile: "block", tablet: "flex" }'},boxShadow:{options:K,defaultValue:"$out"}}},a={render:t=>e.createElement(o,{...t}),args:{bgColor:"$material",w:"200px",h:"100px",boxShadow:"$out"},parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A8"}}},i={render:()=>e.createElement(o,{w:"200px",h:"100px",bgColor:"$material",boxShadow:"$in"}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A8"}}},s={render:()=>e.createElement(o,{w:"200px",h:"100px",bgColor:"$material",boxShadow:"$out",padding:"$4"},e.createElement(o,{h:"100%",bgColor:"white",boxShadow:"$in"})),parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A8"}}},n={render:()=>e.createElement(o,{w:"200px",h:"100px",bgColor:"$material",boxShadow:"$out",padding:"$4"},e.createElement(o,{h:"100%",bgColor:"white",boxShadow:"$in"})),parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A8"}}},c=()=>{const[t,I]=e.useState(typeof window<"u"?window.innerWidth:0);e.useEffect(()=>{const r=()=>I(window.innerWidth);return window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]);const T=r=>r>=1024?"desktop":r>=768?"tablet":"mobile";return e.createElement(e.Fragment,null,e.createElement("p",null,e.createElement("strong",null,"Current: ",t,"px (",T(t),")")),e.createElement("p",{style:{marginTop:"4px",fontSize:"12px"}},"mobile: <768px | tablet: 768-1023px | desktop: ≥1024px"))},d={render:()=>e.createElement(e.Fragment,null,e.createElement(c,null),e.createElement(o,{w:{mobile:"100%",tablet:"70%",desktop:"400px"},h:"100px",bgColor:"$material",boxShadow:"$out",padding:"$4"},"Resize window to see responsive width: 100% → 70% → 400px")),parameters:{docs:{description:{story:"Frame width adapts to screen size: 100% on mobile, 70% on tablet, 400px on desktop"}}}},p={render:()=>e.createElement(e.Fragment,null,e.createElement(c,null),e.createElement(o,{w:"300px",bgColor:"$material",boxShadow:"$out",padding:{mobile:"$2",tablet:"$8",desktop:"$16"}},e.createElement(o,{bgColor:"white",boxShadow:"$in",padding:{mobile:"$2",tablet:"$8",desktop:"$16"}},e.createElement("div",{style:{color:"black",fontSize:"14px"}},e.createElement("div",null,"Padding increases with screen size"))))),parameters:{docs:{description:{story:"Padding increases on larger screens: $2 → $8 → $16. Window width is shown in real-time."}}}},l={render:()=>e.createElement(e.Fragment,null,e.createElement(c,null),e.createElement(o,{display:{mobile:"block",tablet:"flex"},w:"100%",bgColor:"$material",boxShadow:"$out",padding:"$4",gap:"$4"},e.createElement(o,{w:{mobile:"100%",tablet:"50%"},h:"80px",bgColor:"white",boxShadow:"$in",padding:"$2",mb:{mobile:"$4",tablet:"$0"}},e.createElement("div",{style:{color:"black",fontSize:"14px"}},"Panel 1")),e.createElement(o,{w:{mobile:"100%",tablet:"50%"},h:"80px",bgColor:"white",boxShadow:"$in",padding:"$2"},e.createElement("div",{style:{color:"black",fontSize:"14px"}},"Panel 2")))),parameters:{docs:{description:{story:"Layout changes from stacked on mobile to side-by-side on tablet+"}}}};var b,g,w;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(w=(g=a.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var h,x,u;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Frame w="200px" h="100px" bgColor="$material" boxShadow="$in" />,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A8'
    }
  }
}`,...(u=(x=i.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var $,S,f;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <Frame w="200px" h="100px" bgColor="$material" boxShadow="$out" padding="$4">
      <Frame h="100%" bgColor="white" boxShadow="$in" />
    </Frame>,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A8'
    }
  }
}`,...(f=(S=s.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var v,k,y;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Frame w="200px" h="100px" bgColor="$material" boxShadow="$out" padding="$4">
      <Frame h="100%" bgColor="white" boxShadow="$in" />
    </Frame>,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A8'
    }
  }
}`,...(y=(k=n.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var F,C,E;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <>
      <ResponsiveDimmensions />
      <Frame w={{
      mobile: '100%',
      tablet: '70%',
      desktop: '400px'
    }} h="100px" bgColor="$material" boxShadow="$out" padding="$4">
        Resize window to see responsive width: 100% → 70% → 400px
      </Frame>
    </>,
  parameters: {
    docs: {
      description: {
        story: 'Frame width adapts to screen size: 100% on mobile, 70% on tablet, 400px on desktop'
      }
    }
  }
}`,...(E=(C=d.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var R,D,j;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    return <>
        <ResponsiveDimmensions />
        <Frame w="300px" bgColor="$material" boxShadow="$out" padding={{
        mobile: '$2',
        tablet: '$8',
        desktop: '$16'
      }}>
          <Frame bgColor="white" boxShadow="$in" padding={{
          mobile: '$2',
          tablet: '$8',
          desktop: '$16'
        }}>
            <div style={{
            color: 'black',
            fontSize: '14px'
          }}>
              <div>Padding increases with screen size</div>
            </div>
          </Frame>
        </Frame>
      </>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Padding increases on larger screens: $2 → $8 → $16. Window width is shown in real-time.'
      }
    }
  }
}`,...(j=(D=p.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var B,W,z;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <>
      <ResponsiveDimmensions />
      <Frame display={{
      mobile: 'block',
      tablet: 'flex'
    }} w="100%" bgColor="$material" boxShadow="$out" padding="$4" gap="$4">
        <Frame w={{
        mobile: '100%',
        tablet: '50%'
      }} h="80px" bgColor="white" boxShadow="$in" padding="$2" mb={{
        mobile: '$4',
        tablet: '$0'
      }}>
          <div style={{
          color: 'black',
          fontSize: '14px'
        }}>Panel 1</div>
        </Frame>
        <Frame w={{
        mobile: '100%',
        tablet: '50%'
      }} h="80px" bgColor="white" boxShadow="$in" padding="$2">
          <div style={{
          color: 'black',
          fontSize: '14px'
        }}>Panel 2</div>
        </Frame>
      </Frame>
    </>,
  parameters: {
    docs: {
      description: {
        story: 'Layout changes from stacked on mobile to side-by-side on tablet+'
      }
    }
  }
}`,...(z=(W=l.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};const O=["Simple","WithBoxShadowIn","WithBoxShadowInOut","WithBackgroundColor","ResponsiveWidth","ResponsivePadding","ResponsiveLayout"];export{l as ResponsiveLayout,p as ResponsivePadding,d as ResponsiveWidth,a as Simple,n as WithBackgroundColor,i as WithBoxShadowIn,s as WithBoxShadowInOut,O as __namedExportsOrder,L as default};

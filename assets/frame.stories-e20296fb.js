import{j as e}from"./jsx-runtime-e5910377.js";import{r as b}from"./index-66a3a5c2.js";import{F as o}from"./Frame-ad175eaa.js";import{c as T}from"./contract.css-24916a0d.js";import"./index-626ba1ae.js";const c=Object.keys(T.colors).map(t=>`$${t}`),q=Object.keys(T.shadows).map(t=>`$${t}`),U={title:"Frame",component:o,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}},argTypes:{bgColor:{options:c,defaultValue:"$material",control:{type:"select"}},backgroundColor:{options:c,control:{type:"select"}},color:{options:c,control:{type:"select"}},w:{control:"text",description:'Width. Supports responsive objects: { mobile: "100%", tablet: "50%" }'},width:{control:"text",description:'Width. Supports responsive objects: { mobile: "100%", tablet: "50%" }'},h:{control:"text",description:'Height. Supports responsive objects: { mobile: "100px", desktop: "200px" }'},height:{control:"text",description:'Height. Supports responsive objects: { mobile: "100px", desktop: "200px" }'},padding:{control:"text",description:'Padding. Supports responsive objects: { mobile: "$2", desktop: "$4" }'},margin:{control:"text",description:'Margin. Supports responsive objects: { mobile: "$2", desktop: "$4" }'},display:{control:"text",description:'Display type. Supports responsive objects: { mobile: "block", tablet: "flex" }'},boxShadow:{options:q,defaultValue:"$out",control:{type:"select"}}}},s={render:t=>e.jsx(o,{...t}),args:{bgColor:"$material",w:"200px",h:"100px",boxShadow:"$out"},parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A8"}}},i={render:()=>e.jsx(o,{w:"200px",h:"100px",bgColor:"$material",boxShadow:"$in"}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A8"}}},a={render:()=>e.jsx(o,{w:"200px",h:"100px",bgColor:"$material",boxShadow:"$out",padding:"$4",children:e.jsx(o,{h:"100%",bgColor:"white",boxShadow:"$in"})}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A8"}}},n={render:()=>e.jsx(o,{w:"200px",h:"100px",bgColor:"$material",boxShadow:"$out",padding:"$4",children:e.jsx(o,{h:"100%",bgColor:"white",boxShadow:"$in"})}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A8"}}},m=()=>{const[t,K]=b.useState(typeof window<"u"?window.innerWidth:0);b.useEffect(()=>{const r=()=>K(window.innerWidth);return window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]);const A=r=>r>=1024?"desktop":r>=768?"tablet":"mobile";return e.jsxs(e.Fragment,{children:[e.jsx("p",{children:e.jsxs("strong",{children:["Current: ",t,"px (",A(t),")"]})}),e.jsx("p",{style:{marginTop:"4px",fontSize:"12px"},children:"mobile: <768px | tablet: 768-1023px | desktop: ≥1024px"})]})},d={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(m,{}),e.jsx(o,{w:{mobile:"100%",tablet:"70%",desktop:"400px"},h:"100px",bgColor:"$material",boxShadow:"$out",padding:"$4",children:"Resize window to see responsive width: 100% → 70% → 400px"})]}),parameters:{docs:{description:{story:"Frame width adapts to screen size: 100% on mobile, 70% on tablet, 400px on desktop"}}}},p={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(m,{}),e.jsx(o,{w:"300px",bgColor:"$material",boxShadow:"$out",padding:{mobile:"$2",tablet:"$8",desktop:"$16"},children:e.jsx(o,{bgColor:"white",boxShadow:"$in",padding:{mobile:"$2",tablet:"$8",desktop:"$16"},children:e.jsx("div",{style:{color:"black",fontSize:"14px"},children:e.jsx("div",{children:"Padding increases with screen size"})})})})]}),parameters:{docs:{description:{story:"Padding increases on larger screens: $2 → $8 → $16. Window width is shown in real-time."}}}},l={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(m,{}),e.jsxs(o,{display:{mobile:"block",tablet:"flex"},w:"100%",bgColor:"$material",boxShadow:"$out",padding:"$4",gap:"$4",children:[e.jsx(o,{w:{mobile:"100%",tablet:"50%"},h:"80px",bgColor:"white",boxShadow:"$in",padding:"$2",mb:{mobile:"$4",tablet:"$0"},children:e.jsx("div",{style:{color:"black",fontSize:"14px"},children:"Panel 1"})}),e.jsx(o,{w:{mobile:"100%",tablet:"50%"},h:"80px",bgColor:"white",boxShadow:"$in",padding:"$2",children:e.jsx("div",{style:{color:"black",fontSize:"14px"},children:"Panel 2"})})]})]}),parameters:{docs:{description:{story:"Layout changes from stacked on mobile to side-by-side on tablet+"}}}};var g,x,h;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var w,u,$;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Frame w="200px" h="100px" bgColor="$material" boxShadow="$in" />,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A8'
    }
  }
}`,...($=(u=i.parameters)==null?void 0:u.docs)==null?void 0:$.source}}};var S,f,v;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Frame w="200px" h="100px" bgColor="$material" boxShadow="$out" padding="$4">
      <Frame h="100%" bgColor="white" boxShadow="$in" />
    </Frame>,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A8'
    }
  }
}`,...(v=(f=a.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var j,y,k;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Frame w="200px" h="100px" bgColor="$material" boxShadow="$out" padding="$4">
      <Frame h="100%" bgColor="white" boxShadow="$in" />
    </Frame>,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A8'
    }
  }
}`,...(k=(y=n.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var F,C,R;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(R=(C=d.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var D,B,W;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(W=(B=p.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var z,P,I;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(I=(P=l.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};const V=["Simple","WithBoxShadowIn","WithBoxShadowInOut","WithBackgroundColor","ResponsiveWidth","ResponsivePadding","ResponsiveLayout"];export{l as ResponsiveLayout,p as ResponsivePadding,d as ResponsiveWidth,s as Simple,n as WithBackgroundColor,i as WithBoxShadowIn,a as WithBoxShadowInOut,V as __namedExportsOrder,U as default};

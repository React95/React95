import{j as s,F as o}from"./iframe-BP1fKKyq.js";import{c}from"./index-CkRtnLQ9.js";/* empty css                              */import"./preload-helper-C1FmrZbK.js";var p={Auto:"r95_22fi80",Text:"r95_22fi81",VerticalText:"r95_22fi82",Help:"r95_22fi83",Crosshair:"r95_22fi84",Pointer:"r95_22fi85",Progress:"r95_22fi86",Wait:"r95_22fi87",Alias:"r95_22fi88",Copy:"r95_22fi89",Move:"r95_22fi8a",None:"r95_22fi8b",NoDrop:"r95_22fi8c",NotAllowed:"r95_22fi8d",Grab:"r95_22fi8e",Grabbing:"r95_22fi8f",ColResize:"r95_22fi8g",RowResize:"r95_22fi8h",NResize:"r95_22fi8i",EResize:"r95_22fi8j",SResize:"r95_22fi8k",WResize:"r95_22fi8l",NsResize:"r95_22fi8m",EwResize:"r95_22fi8n",NeResize:"r95_22fi8o",NwResize:"r95_22fi8p",SeResize:"r95_22fi8q",SwResize:"r95_22fi8r",NeswResize:"r95_22fi8s",NwseResize:"r95_22fi8t",ZoomIn:"r95_22fi8u",ZoomOut:"r95_22fi8v"};const C={title:"Cursor",tags:["autodocs"],parameters:{controls:{disable:!0},interactions:{disable:!0},docs:{codePanel:!1,description:{component:"\n`Cursor` has the Windows 95 cursors as CSS classes, one for each CSS cursor\n(`Cursor.Pointer`, `Cursor.Help`, `Cursor.Wait`…). Add one to an element's\n`className`, and the pointer changes while it's over that element:\n\n```tsx\nimport { Cursor } from '@react95/core';\n\n<button className={Cursor.Pointer}>Click me</button>\n```\n\nHover over a cursor below to try it, and click it to copy its `className`.\n"}},clippy:{phrases:["Hover over each box to try that cursor. Very 1995!","Click a cursor to copy its className."]}}},e={render:(m,{speak:n})=>s.jsx(o,{as:"ul",margin:"0",padding:"0",width:"600px",display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"10px",children:Object.entries(p).map(([r,l])=>s.jsx(o,{as:"li",display:"flex",children:s.jsxs(o,{as:"button",type:"button",className:l,onClick:()=>{c(`className={Cursor.${r}}`),n(`Copied Cursor.${r} to clipboard!`)},w:"100%",h:"50px",border:"none",backgroundColor:"$material",color:"$materialText",boxShadow:"$out",children:["Cursor.",r]})},r))}),parameters:{design:{disable:!0}}},b=["Simple"];var i,a,t;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: (_, {
    speak
  }) => <Frame as="ul" margin="0" padding="0" width="600px" display="grid" gridTemplateColumns="repeat(4, 1fr)" gap="10px">
      {Object.entries(Cursor).map(([name, className]) => <Frame as="li" key={name} display="flex">
          <Frame as="button" type="button" className={className} onClick={() => {
        copy(\`className={Cursor.\${name}}\`);
        speak(\`Copied Cursor.\${name} to clipboard!\`);
      }} w="100%" h="50px" border="none" backgroundColor="$material" color="$materialText" boxShadow="$out">
            Cursor.{name}
          </Frame>
        </Frame>)}
    </Frame>,
  parameters: {
    design: {
      disable: true
    }
  }
}`,...(t=(a=e.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};export{e as Simple,b as __namedExportsOrder,C as default};

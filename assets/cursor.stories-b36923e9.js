import{r as i}from"./index-9fa1aa67.js";/* empty css                              */import{F as a}from"./Frame-d1abb87e.js";import"./index-923230fa.js";var p={Auto:"r95_22fi80",Text:"r95_22fi81",VerticalText:"r95_22fi82",Help:"r95_22fi83",Crosshair:"r95_22fi84",Pointer:"r95_22fi85",Progress:"r95_22fi86",Wait:"r95_22fi87",Alias:"r95_22fi88",Copy:"r95_22fi89",Move:"r95_22fi8a",None:"r95_22fi8b",NoDrop:"r95_22fi8c",NotAllowed:"r95_22fi8d",Grab:"r95_22fi8e",Grabbing:"r95_22fi8f",ColResize:"r95_22fi8g",RowResize:"r95_22fi8h",NResize:"r95_22fi8i",EResize:"r95_22fi8j",SResize:"r95_22fi8k",WResize:"r95_22fi8l",NsResize:"r95_22fi8m",EwResize:"r95_22fi8n",NeResize:"r95_22fi8o",NwResize:"r95_22fi8p",SeResize:"r95_22fi8q",SwResize:"r95_22fi8r",NeswResize:"r95_22fi8s",NwseResize:"r95_22fi8t",ZoomIn:"r95_22fi8u",ZoomOut:"r95_22fi8v"};const d={title:"Cursor"},e={render:()=>i.createElement(a,{as:"ul",margin:"0",padding:"0",width:"600px",display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gap:"10px"},Object.entries(p).map(([r,n])=>i.createElement(a,{className:n,key:r,display:"flex",as:"li",justifyContent:"center",alignItems:"center",w:"100px",h:"50px",backgroundColor:"$material",color:"$materialText",py:"$6",px:"$20",boxShadow:"$out"},r))),parameters:{design:{disable:!0}}};var s,t,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <Frame as="ul" margin="0" padding="0" width="600px" display="grid" gridTemplateColumns="repeat(5, 1fr)" gap="10px">
      {Object.entries(Cursor).map(([type, className]) => <Frame className={className} key={type} display="flex" as="li" justifyContent="center" alignItems="center" w="100px" h="50px" backgroundColor="$material" color="$materialText" py="$6" px="$20" boxShadow="$out">
          {type}
        </Frame>)}
    </Frame>,
  parameters: {
    design: {
      disable: true
    }
  }
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const c=["Simple"];export{e as Simple,c as __namedExportsOrder,d as default};

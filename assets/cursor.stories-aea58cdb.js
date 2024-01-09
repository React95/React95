import{b as n,a as t}from"./index-0559674c.js";import{F as l}from"./Frame-f3688d20.js";import{C as p}from"./Cursor-2670fd72.js";import"./index-1b03fe98.js";const i=n.ul`
  margin: 0;
  padding: 0;
  width: 600px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  list-style: none;
`,m=n(l)`
  ${({type:r})=>p[r]};
`,C={title:"Cursors",component:i},e={render:()=>t(i,{children:Object.keys(p).map(r=>t(m,{display:"flex",as:"li",justifyContent:"center",alignItems:"center",w:100,h:50,backgroundColor:"material",color:"materialText",pt:6,pr:20,pb:6,pl:20,type:r,children:r},r))}),parameters:{design:{disable:!0}}};var s,o,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <Cursors>
      {Object.keys(Cursor).map((type: keyof typeof Cursor) => <CursorItem display="flex" as="li" justifyContent="center" alignItems="center" w={100} h={50} backgroundColor="material" color="materialText" pt={6} pr={20} pb={6} pl={20} key={type} type={type}>
          {type}
        </CursorItem>)}
    </Cursors>,
  parameters: {
    design: {
      disable: true
    }
  }
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const g=["Simple"];export{e as Simple,g as __namedExportsOrder,C as default};

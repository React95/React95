import{r as e}from"./index-9fa1aa67.js";import{h as s,R as a}from"./Write1-d677703f.js";import{M as l}from"./Modal-f30c9f3b.js";import{L as o}from"./List-661317e0.js";import{T as p}from"./TaskBar-ae420107.js";import{T as n}from"./TitleBar-83565a4b.js";import"./Button-9c3a5d19.js";import"./index-923230fa.js";import"./Button.css-afb77755.js";import"./Frame-8a2a37ef.js";import"./createRuntimeFn-62c9670f.esm-edc6fb2c.js";import"./Tooltip-61eba74b.js";const D={title:"TaskBar",component:p,tags:["autodocs"]},t={render:()=>{const[g,i]=e.useState(!1),[x,r]=e.useState(!1),f=()=>i(!1),u=()=>r(!1);return e.createElement(e.Fragment,null,g&&e.createElement(l,{icon:e.createElement(s,{variant:"16x16_4"}),title:"Windows Explorer",titleBarOptions:[e.createElement(n.Close,{key:"close",onClick:f})],width:"300px",height:"200px"}),x&&e.createElement(l,{dragOptions:{defaultPosition:{x:50,y:50}},width:"300px",height:"200px",icon:e.createElement(a,{variant:"16x16_4"}),title:"Local Disk (C:)",titleBarOptions:[e.createElement(n.Close,{key:"close",onClick:u})]}),e.createElement(p,{list:e.createElement(o,null,e.createElement(o.Item,{icon:e.createElement(a,{variant:"32x32_4"}),onClick:()=>r(!0)},"Local Disk (C:)"),e.createElement(o.Item,{icon:e.createElement(s,{variant:"32x32_4"}),onClick:()=>{i(!0)}},"Windows Explorer"))}))},parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A17"}}};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const [first, toggleFirst] = React.useState(false);
    const [second, toggleSecond] = React.useState(false);
    const closeFirst = () => toggleFirst(false);
    const closeSecond = () => toggleSecond(false);
    return <>
        {first && <Modal icon={<WindowsExplorer variant="16x16_4" />} title="Windows Explorer" titleBarOptions={[<TitleBar.Close key="close" onClick={closeFirst} />]} width="300px" height="200px" />}

        {second && <Modal dragOptions={{
        defaultPosition: {
          x: 50,
          y: 50
        }
      }} width="300px" height="200px" icon={<ReaderClosed variant="16x16_4" />} title="Local Disk (C:)" titleBarOptions={[<TitleBar.Close key="close" onClick={closeSecond} />]} />}

        <TaskBar list={<List>
              <List.Item icon={<ReaderClosed variant="32x32_4" />} onClick={() => toggleSecond(true)}>
                Local Disk (C:)
              </List.Item>
              <List.Item icon={<WindowsExplorer variant="32x32_4" />} onClick={() => {
          toggleFirst(true);
        }}>
                Windows Explorer
              </List.Item>
            </List>} />
      </>;
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A17'
    }
  }
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const F=["Simple"];export{t as Simple,F as __namedExportsOrder,D as default};

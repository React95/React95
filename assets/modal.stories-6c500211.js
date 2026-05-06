import{j as e}from"./jsx-runtime-e5910377.js";import{r as f}from"./index-66a3a5c2.js";import{M as t,u as W}from"./Modal-9f9e7f41.js";import{B as l}from"./Button-ab59f6ae.js";import{F as a}from"./Frame-ad175eaa.js";import{L as i}from"./List-35f866bf.js";import{T as L}from"./TaskBar-65497601.js";import{T as x}from"./TitleBar-41e014c0.js";import{j as g,u as k,i as H,R as S,W as F}from"./Write1-229e0d0c.js";/* empty css                             */import"./createRuntimeFn-62c9670f.esm-edc6fb2c.js";import"./index-626ba1ae.js";import"./index-a3deabcc.js";import"./Button.css-afb77755.js";/* empty css                            */import"./Tooltip-0aa2fb9e.js";/* empty css                               *//* empty css                               */var h="r95_1pmeodb0";const de={title:"Modal",component:t,tags:["autodocs"]},K=()=>{const[d,s]=f.useState(!0),c=()=>s(!0),n=()=>s(!1),r=m=>alert(m.currentTarget.value);return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:c,children:"Trigger Modal"}),d&&e.jsx(t,{icon:e.jsx(H,{variant:"16x16_4"}),title:"Browse",dragOptions:{defaultPosition:{x:0,y:20}},titleBarOptions:[e.jsx(x.Help,{onClick:()=>{alert("Help!")}},"help"),e.jsx(x.Close,{onClick:n},"close")],buttons:[{value:"Ok",onClick:r},{value:"Cancel",onClick:r}],menu:[{name:"File",list:e.jsx(i,{width:"200px",children:e.jsx(i.Item,{onClick:n,children:"Exit"})})},{name:"Edit",list:e.jsx(i,{width:"200px",children:e.jsx(i.Item,{children:"Copy"})})}],children:e.jsx(t.Content,{width:"300px",height:"160px",boxShadow:"$in",bgColor:"white",children:"Simple modal"})})]})},M={render:()=>e.jsx(K,{}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A12"}}},o={first:"first-modal",second:"second-modal"},p=()=>{const{remove:d,minimize:s,restore:c,focus:n,add:r}=W(),m=()=>{s(o.first),d(o.first)},j=()=>{s(o.second),d(o.second)},O=()=>{s(o.first),n("no-id")},T=()=>{r({id:o.first,title:"First Modal",icon:e.jsx(g,{variant:"32x32_4"}),hasButton:!0}),c(o.first),n(o.first)},R=()=>n(o.first),A=()=>{s(o.second),n("no-id")},E=()=>{r({id:o.second,title:"Second Modal",icon:e.jsx(k,{variant:"32x32_4"}),hasButton:!0}),c(o.second),n(o.second)},N=()=>n(o.second),u=$=>alert($.currentTarget.value);return e.jsxs(a,{children:[e.jsx(L,{}),e.jsxs(a,{display:"flex",flexDirection:"column",gap:"8px",children:[e.jsxs(a,{display:"flex",gap:"8px",flexWrap:"wrap",children:[e.jsx(l,{onClick:O,children:"Minimize First"}),e.jsx(l,{onClick:T,children:"Restore First"}),e.jsx(l,{onClick:m,children:"Close First"}),e.jsx(l,{onClick:R,children:"Focus First"})]}),e.jsxs(a,{display:"flex",gap:"8px",flexWrap:"wrap",children:[e.jsx(l,{onClick:A,children:"Minimize Second"}),e.jsx(l,{onClick:E,children:"Restore Second"}),e.jsx(l,{onClick:j,children:"Close Second"}),e.jsx(l,{onClick:N,children:"Focus Second"})]})]}),e.jsx(t,{id:"first-modal",icon:e.jsx(g,{variant:"32x32_4"}),title:"First Modal",dragOptions:{defaultPosition:{x:50,y:100}},titleBarOptions:e.jsx(t.Minimize,{}),buttons:[{value:"Ok",onClick:u},{value:"Cancel",onClick:u}],menu:[{name:"File",list:e.jsx(i,{width:"200px",children:e.jsx(i.Item,{onClick:m,children:"Exit"})})},{name:"Edit",list:e.jsx(i,{width:"200px",children:e.jsx(i.Item,{children:"Copy"})})}],children:e.jsx(t.Content,{width:"350px",boxShadow:"$in",bgColor:"white",p:"16px",children:e.jsxs(a,{as:"div",display:"flex",flexDirection:"column",gap:"8px",children:[e.jsx("h4",{children:"Modal Control"}),e.jsxs("p",{children:["This modal is controlled entirely using the"," ",e.jsx("code",{children:"useModal()"})," hook:"]}),e.jsxs("ul",{style:{fontSize:"14px",margin:"8px 0"},children:[e.jsxs("li",{children:[e.jsx("code",{children:"minimize(id)"})," - Minimize modal"]}),e.jsxs("li",{children:[e.jsx("code",{children:"restore(id)"})," - Restore modal"]}),e.jsxs("li",{children:[e.jsx("code",{children:"focus(id)"})," - Bring to focus"]})]}),e.jsx("p",{children:"Try the control buttons above or use the TaskBar below."})]})})}),e.jsx(t,{id:"second-modal",icon:e.jsx(k,{variant:"32x32_4"}),title:"Second Modal",dragOptions:{defaultPosition:{x:200,y:150}},titleBarOptions:e.jsx(x.Close,{onClick:j}),buttons:[{value:"Ok",onClick:u},{value:"Cancel",onClick:u}],menu:[{name:"File",list:e.jsx(i,{width:"200px",children:e.jsx(i.Item,{onClick:j,children:"Exit"})})},{name:"Edit",list:e.jsx(i,{width:"200px",children:e.jsx(i.Item,{children:"Copy"})})}],children:e.jsx(t.Content,{width:"350px",boxShadow:"$in",bgColor:"white",p:"16px",children:e.jsxs(a,{as:"div",display:"flex",flexDirection:"column",gap:"8px",children:[e.jsx("h4",{children:"Complete Modal Management"}),e.jsx("p",{children:"Key features demonstrated:"}),e.jsxs(a,{as:"ul",marginY:"$8",children:[e.jsx("li",{children:"No React state management needed"}),e.jsx("li",{children:"Modals controlled by ID"}),e.jsx("li",{children:"Automatic TaskBar integration"}),e.jsx("li",{children:"Event-driven architecture"})]}),e.jsx("p",{children:"Both modals can be controlled independently using their IDs."})]})})})]})},P=()=>{const[d,s]=f.useState(!0),[c,n]=f.useState(!0),r=()=>s(!1),m=()=>n(!1);return e.jsxs(e.Fragment,{children:[e.jsx(L,{list:e.jsxs(i,{children:[e.jsx(i.Item,{icon:e.jsx(S,{variant:"32x32_4"}),onClick:()=>n(!0),children:"Local Disk (C:)"}),e.jsx(i.Item,{icon:e.jsx(F,{variant:"32x32_4"}),onClick:()=>{s(!0)},children:"Windows Explorer"})]})}),d&&e.jsx(t,{icon:e.jsx(F,{variant:"16x16_4"}),title:"Windows Explorer",titleBarOptions:[e.jsx(x.Minimize,{onClick:()=>{alert("I'm in control")}},"minimize"),e.jsx(x.Close,{onClick:r},"close")],width:"300px",height:"220px",children:e.jsx(t.Content,{boxShadow:"$in",bgColor:"white",children:e.jsxs(a,{as:"p",lineHeight:"1.1rem",children:["You can still use the"," ",e.jsx("code",{className:h,children:"<TitleBar.Minimize />"})," ","component if you want to add the behavior yourself by handling the click event and updating the state or props of your component accordingly."]})})}),c&&e.jsx(t,{dragOptions:{defaultPosition:{x:120,y:120}},width:"300px",height:"220px",icon:e.jsx(S,{variant:"16x16_4"}),title:"Local Disk (C:)",titleBarOptions:[e.jsx(t.Minimize,{},"minimize"),e.jsx(x.Close,{onClick:m},"close")],children:e.jsx(t.Content,{boxShadow:"$in",bgColor:"white",children:e.jsxs(a,{as:"p",lineHeight:"1.1rem",children:["The ",e.jsx("code",{className:h,children:"Modal.Minimize"})," component is a utility component provided by the"," ",e.jsx("code",{className:h,children:"Modal"})," component. It allows you to easily add minimize functionality to your modal. To use it, simply add"," ",e.jsx("code",{className:h,children:"<Modal.Minimize />"})," to the"," ",e.jsx("code",{className:h,children:"titleBarOptions"})," prop of the"," ",e.jsx("code",{className:h,children:"Modal"})," component. This will add the minimize button to the title bar of your modal, and clicking on it will minimize the modal."]})})})]})},C={render:()=>e.jsx(P,{}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A17"}}};p.__docgenInfo={description:"",methods:[],displayName:"Multiple"};var w,B,y;M.parameters={...M.parameters,docs:{...(w=M.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <SimpleDemo />,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A12'
    }
  }
}`,...(y=(B=M.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};var D,v,I;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  const {
    remove,
    minimize,
    restore,
    focus,
    add
  } = useModal();
  const handleCloseFirstModal = () => {
    minimize(MODAL_IDS.first);
    remove(MODAL_IDS.first);
  };
  const handleCloseSecondModal = () => {
    minimize(MODAL_IDS.second);
    remove(MODAL_IDS.second);
  };

  // Handlers for first modal
  const handleMinimizeFirst = () => {
    minimize(MODAL_IDS.first);
    focus('no-id');
  };
  const handleRestoreFirst = () => {
    add({
      id: MODAL_IDS.first,
      title: 'First Modal',
      icon: <Mmsys113 variant="32x32_4" />,
      hasButton: true
    });
    restore(MODAL_IDS.first);
    focus(MODAL_IDS.first);
  };
  const handleFocusFirst = () => focus(MODAL_IDS.first);

  // Handlers for second modal
  const handleMinimizeSecond = () => {
    minimize(MODAL_IDS.second);
    focus('no-id');
  };
  const handleRestoreSecondModal = () => {
    add({
      id: MODAL_IDS.second,
      title: 'Second Modal',
      icon: <Mshtml32534 variant="32x32_4" />,
      hasButton: true
    });
    restore(MODAL_IDS.second);
    focus(MODAL_IDS.second);
  };
  const handleFocusSecond = () => focus(MODAL_IDS.second);
  const handleButtonClick = (e: React.MouseEvent<HTMLLIElement>) => alert(e.currentTarget.value);
  return <Frame>
      <TaskBar />

      <Frame display="flex" flexDirection="column" gap="8px">
        <Frame display="flex" gap="8px" flexWrap="wrap">
          <Button onClick={handleMinimizeFirst}>Minimize First</Button>
          <Button onClick={handleRestoreFirst}>Restore First</Button>
          <Button onClick={handleCloseFirstModal}>Close First</Button>
          <Button onClick={handleFocusFirst}>Focus First</Button>
        </Frame>
        <Frame display="flex" gap="8px" flexWrap="wrap">
          <Button onClick={handleMinimizeSecond}>Minimize Second</Button>
          <Button onClick={handleRestoreSecondModal}>Restore Second</Button>
          <Button onClick={handleCloseSecondModal}>Close Second</Button>
          <Button onClick={handleFocusSecond}>Focus Second</Button>
        </Frame>
      </Frame>

      <Modal id="first-modal" icon={<Mmsys113 variant="32x32_4" />} title="First Modal" dragOptions={{
      defaultPosition: {
        x: 50,
        y: 100
      }
    }} titleBarOptions={<Modal.Minimize />} buttons={[{
      value: 'Ok',
      onClick: handleButtonClick
    }, {
      value: 'Cancel',
      onClick: handleButtonClick
    }]} menu={[{
      name: 'File',
      list: <List width="200px">
                <List.Item onClick={handleCloseFirstModal}>Exit</List.Item>
              </List>
    }, {
      name: 'Edit',
      list: <List width="200px">
                <List.Item>Copy</List.Item>
              </List>
    }]}>
        <Modal.Content width="350px" boxShadow="$in" bgColor="white" p="16px">
          <Frame as="div" display="flex" flexDirection="column" gap="8px">
            <h4>Modal Control</h4>
            <p>
              This modal is controlled entirely using the{' '}
              <code>useModal()</code> hook:
            </p>
            <ul style={{
            fontSize: '14px',
            margin: '8px 0'
          }}>
              <li>
                <code>minimize(id)</code> - Minimize modal
              </li>
              <li>
                <code>restore(id)</code> - Restore modal
              </li>
              <li>
                <code>focus(id)</code> - Bring to focus
              </li>
            </ul>
            <p>Try the control buttons above or use the TaskBar below.</p>
          </Frame>
        </Modal.Content>
      </Modal>

      <Modal id="second-modal" icon={<Mshtml32534 variant="32x32_4" />} title="Second Modal" dragOptions={{
      defaultPosition: {
        x: 200,
        y: 150
      }
    }} titleBarOptions={<TitleBar.Close onClick={handleCloseSecondModal} />} buttons={[{
      value: 'Ok',
      onClick: handleButtonClick
    }, {
      value: 'Cancel',
      onClick: handleButtonClick
    }]} menu={[{
      name: 'File',
      list: <List width="200px">
                <List.Item onClick={handleCloseSecondModal}>Exit</List.Item>
              </List>
    }, {
      name: 'Edit',
      list: <List width="200px">
                <List.Item>Copy</List.Item>
              </List>
    }]}>
        <Modal.Content width="350px" boxShadow="$in" bgColor="white" p="16px">
          <Frame as="div" display="flex" flexDirection="column" gap="8px">
            <h4>Complete Modal Management</h4>
            <p>Key features demonstrated:</p>
            <Frame as="ul" marginY="$8">
              <li>No React state management needed</li>
              <li>Modals controlled by ID</li>
              <li>Automatic TaskBar integration</li>
              <li>Event-driven architecture</li>
            </Frame>
            <p>Both modals can be controlled independently using their IDs.</p>
          </Frame>
        </Modal.Content>
      </Modal>
    </Frame>;
}`,...(I=(v=p.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var b,z,_;C.parameters={...C.parameters,docs:{...(b=C.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <MinimizeDemo />,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A17'
    }
  }
}`,...(_=(z=C.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};const ce=["Simple","Multiple","Minimize"];export{C as Minimize,p as Multiple,M as Simple,ce as __namedExportsOrder,de as default};

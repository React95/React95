import{r as e}from"./index-9fa1aa67.js";import{M as o,u as W}from"./Modal-7dfc58ec.js";import{B as a}from"./Button-a9a82e5e.js";import{F as r}from"./Frame-f7ea70b0.js";import{L as t}from"./List-af164e5a.js";import{T as _}from"./TaskBar-12301bb8.js";import{T as p}from"./TitleBar-c81c9dc6.js";import{j as f,o as g,i as H,R as k,W as S}from"./Write1-423ef17a.js";/* empty css                             */import"./createRuntimeFn-62c9670f.esm-edc6fb2c.js";import"./index-923230fa.js";import"./index-4fd03fd3.js";import"./Button.css-afb77755.js";/* empty css                            */import"./Tooltip-210aa1f5.js";/* empty css                               *//* empty css                               */var u="r95_1pmeodb0";const re={title:"Modal",component:o,tags:["autodocs"]},K=()=>{const[c,l]=e.useState(!0),d=()=>l(!0),i=()=>l(!1),s=m=>alert(m.currentTarget.value);return e.createElement(e.Fragment,null,e.createElement(a,{onClick:d},"Trigger Modal"),c&&e.createElement(o,{icon:e.createElement(H,{variant:"16x16_4"}),title:"Browse",dragOptions:{defaultPosition:{x:0,y:20}},titleBarOptions:[e.createElement(p.Help,{key:"help",onClick:()=>{alert("Help!")}}),e.createElement(p.Close,{key:"close",onClick:i})],buttons:[{value:"Ok",onClick:s},{value:"Cancel",onClick:s}],menu:[{name:"File",list:e.createElement(t,{width:"200px"},e.createElement(t.Item,{onClick:i},"Exit"))},{name:"Edit",list:e.createElement(t,{width:"200px"},e.createElement(t.Item,null,"Copy"))}]},e.createElement(o.Content,{width:"300px",height:"160px",boxShadow:"$in",bgColor:"white"},"Simple modal")))},M={render:()=>e.createElement(K,null),parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A12"}}},n={first:"first-modal",second:"second-modal"},h=()=>{const{remove:c,minimize:l,restore:d,focus:i,add:s}=W(),m=()=>{l(n.first),c(n.first)},x=()=>{l(n.second),c(n.second)},L=()=>{l(n.first),i("no-id")},O=()=>{s({id:n.first,title:"First Modal",icon:e.createElement(f,{variant:"32x32_4"}),hasButton:!0}),d(n.first),i(n.first)},T=()=>i(n.first),A=()=>{l(n.second),i("no-id")},R=()=>{s({id:n.second,title:"Second Modal",icon:e.createElement(g,{variant:"32x32_4"}),hasButton:!0}),d(n.second),i(n.second)},N=()=>i(n.second),E=$=>alert($.currentTarget.value);return e.createElement(r,null,e.createElement(_,null),e.createElement(r,{display:"flex",flexDirection:"column",gap:"8px"},e.createElement(r,{display:"flex",gap:"8px",flexWrap:"wrap"},e.createElement(a,{onClick:L},"Minimize First"),e.createElement(a,{onClick:O},"Restore First"),e.createElement(a,{onClick:m},"Close First"),e.createElement(a,{onClick:T},"Focus First")),e.createElement(r,{display:"flex",gap:"8px",flexWrap:"wrap"},e.createElement(a,{onClick:A},"Minimize Second"),e.createElement(a,{onClick:R},"Restore Second"),e.createElement(a,{onClick:x},"Close Second"),e.createElement(a,{onClick:N},"Focus Second"))),e.createElement(o,{id:"first-modal",icon:e.createElement(f,{variant:"32x32_4"}),title:"First Modal",dragOptions:{defaultPosition:{x:50,y:100}},titleBarOptions:e.createElement(o.Minimize,null),buttons:[{value:"Ok",onClick:E},{value:"Cancel",onClick:E}],menu:[{name:"File",list:e.createElement(t,{width:"200px"},e.createElement(t.Item,{onClick:m},"Exit"))},{name:"Edit",list:e.createElement(t,{width:"200px"},e.createElement(t.Item,null,"Copy"))}]},e.createElement(o.Content,{width:"350px",boxShadow:"$in",bgColor:"white",p:"16px"},e.createElement(r,{as:"div",display:"flex",flexDirection:"column",gap:"8px"},e.createElement("h4",null,"Modal Control"),e.createElement("p",null,"This modal is controlled entirely using the"," ",e.createElement("code",null,"useModal()")," hook:"),e.createElement("ul",{style:{fontSize:"14px",margin:"8px 0"}},e.createElement("li",null,e.createElement("code",null,"minimize(id)")," - Minimize modal"),e.createElement("li",null,e.createElement("code",null,"restore(id)")," - Restore modal"),e.createElement("li",null,e.createElement("code",null,"focus(id)")," - Bring to focus")),e.createElement("p",null,"Try the control buttons above or use the TaskBar below.")))),e.createElement(o,{id:"second-modal",icon:e.createElement(g,{variant:"32x32_4"}),title:"Second Modal",dragOptions:{defaultPosition:{x:200,y:150}},titleBarOptions:e.createElement(p.Close,{onClick:x}),buttons:[{value:"Ok",onClick:E},{value:"Cancel",onClick:E}],menu:[{name:"File",list:e.createElement(t,{width:"200px"},e.createElement(t.Item,{onClick:x},"Exit"))},{name:"Edit",list:e.createElement(t,{width:"200px"},e.createElement(t.Item,null,"Copy"))}]},e.createElement(o.Content,{width:"350px",boxShadow:"$in",bgColor:"white",p:"16px"},e.createElement(r,{as:"div",display:"flex",flexDirection:"column",gap:"8px"},e.createElement("h4",null,"Complete Modal Management"),e.createElement("p",null,"Key features demonstrated:"),e.createElement(r,{as:"ul",marginY:"$8"},e.createElement("li",null,"No React state management needed"),e.createElement("li",null,"Modals controlled by ID"),e.createElement("li",null,"Automatic TaskBar integration"),e.createElement("li",null,"Event-driven architecture")),e.createElement("p",null,"Both modals can be controlled independently using their IDs.")))))},P=()=>{const[c,l]=e.useState(!0),[d,i]=e.useState(!0),s=()=>l(!1),m=()=>i(!1);return e.createElement(e.Fragment,null,e.createElement(_,{list:e.createElement(t,null,e.createElement(t.Item,{icon:e.createElement(k,{variant:"32x32_4"}),onClick:()=>i(!0)},"Local Disk (C:)"),e.createElement(t.Item,{icon:e.createElement(S,{variant:"32x32_4"}),onClick:()=>{l(!0)}},"Windows Explorer"))}),c&&e.createElement(o,{icon:e.createElement(S,{variant:"16x16_4"}),title:"Windows Explorer",titleBarOptions:[e.createElement(p.Minimize,{key:"minimize",onClick:()=>{alert("I'm in control")}}),e.createElement(p.Close,{key:"close",onClick:s})],width:"300px",height:"220px"},e.createElement(o.Content,{boxShadow:"$in",bgColor:"white"},e.createElement(r,{as:"p",lineHeight:"1.1rem"},"You can still use the"," ",e.createElement("code",{className:u},"<TitleBar.Minimize />")," ","component if you want to add the behavior yourself by handling the click event and updating the state or props of your component accordingly."))),d&&e.createElement(o,{dragOptions:{defaultPosition:{x:120,y:120}},width:"300px",height:"220px",icon:e.createElement(k,{variant:"16x16_4"}),title:"Local Disk (C:)",titleBarOptions:[e.createElement(o.Minimize,{key:"minimize"}),e.createElement(p.Close,{key:"close",onClick:m})]},e.createElement(o.Content,{boxShadow:"$in",bgColor:"white"},e.createElement(r,{as:"p",lineHeight:"1.1rem"},"The ",e.createElement("code",{className:u},"Modal.Minimize")," component is a utility component provided by the"," ",e.createElement("code",{className:u},"Modal")," component. It allows you to easily add minimize functionality to your modal. To use it, simply add"," ",e.createElement("code",{className:u},"<Modal.Minimize />")," to the"," ",e.createElement("code",{className:u},"titleBarOptions")," prop of the"," ",e.createElement("code",{className:u},"Modal")," component. This will add the minimize button to the title bar of your modal, and clicking on it will minimize the modal."))))},C={render:()=>e.createElement(P,null),parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A17"}}};h.__docgenInfo={description:"",methods:[],displayName:"Multiple"};var y,F,w;M.parameters={...M.parameters,docs:{...(y=M.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <SimpleDemo />,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A12'
    }
  }
}`,...(w=(F=M.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};var B,D,v;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
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
}`,...(v=(D=h.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};var I,b,z;C.parameters={...C.parameters,docs:{...(I=C.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <MinimizeDemo />,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A17'
    }
  }
}`,...(z=(b=C.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};const se=["Simple","Multiple","Minimize"];export{C as Minimize,h as Multiple,M as Simple,se as __namedExportsOrder,re as default};

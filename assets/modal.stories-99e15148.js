import{r as e}from"./index-9fa1aa67.js";import{M as i,u as W}from"./Modal-70b2fd91.js";import{B as a}from"./Button-e77e23f5.js";import{F as s}from"./Frame-d1abb87e.js";import{L as t}from"./List-9538676d.js";import{T as z}from"./TaskBar-d37b1dcb.js";import{T as p}from"./TitleBar-cd22ff01.js";import{i as $,j as E,u as f,R as k,W as y}from"./Write1-9f388b9d.js";/* empty css                             */import"./createRuntimeFn-62c9670f.esm-edc6fb2c.js";import"./index-923230fa.js";import"./index-4fd03fd3.js";import"./Button.css-afb77755.js";/* empty css                            */import"./Tooltip-210aa1f5.js";/* empty css                               *//* empty css                               */var u="r95_1pmeodb0";const ne={title:"Modal",component:i,tags:["autodocs"]},M={render:()=>{const[c,n]=e.useState(!0),d=()=>n(!0),l=()=>n(!1),r=m=>alert(m.currentTarget.value);return e.createElement(e.Fragment,null,e.createElement(a,{onClick:d},"Trigger Modal"),c&&e.createElement(i,{icon:e.createElement($,{variant:"16x16_4"}),title:"Browse",dragOptions:{defaultPosition:{x:0,y:20}},titleBarOptions:[e.createElement(p.Help,{key:"help",onClick:()=>{alert("Help!")}}),e.createElement(p.Close,{key:"close",onClick:l})],buttons:[{value:"Ok",onClick:r},{value:"Cancel",onClick:r}],menu:[{name:"File",list:e.createElement(t,{width:"200px"},e.createElement(t.Item,{onClick:l},"Exit"))},{name:"Edit",list:e.createElement(t,{width:"200px"},e.createElement(t.Item,null,"Copy"))}]},e.createElement(i.Content,{width:"300px",height:"160px",boxShadow:"$in",bgColor:"white"},"Simple modal")))},parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A12"}}},o={first:"first-modal",second:"second-modal"},h=()=>{const{remove:c,minimize:n,restore:d,focus:l,add:r}=W(),m=()=>{n(o.first),c(o.first)},g=()=>{n(o.second),c(o.second)},O=()=>{n(o.first),l("no-id")},_=()=>{r({id:o.first,title:"First Modal",icon:e.createElement(E,{variant:"32x32_4"}),hasButton:!0}),d(o.first),l(o.first)},T=()=>l(o.first),R=()=>{n(o.second),l("no-id")},A=()=>{r({id:o.second,title:"Second Modal",icon:e.createElement(f,{variant:"32x32_4"}),hasButton:!0}),d(o.second),l(o.second)},N=()=>l(o.second),C=H=>alert(H.currentTarget.value);return e.createElement(s,null,e.createElement(z,null),e.createElement(s,{display:"flex",flexDirection:"column",gap:"8px"},e.createElement(s,{display:"flex",gap:"8px",flexWrap:"wrap"},e.createElement(a,{onClick:O},"Minimize First"),e.createElement(a,{onClick:_},"Restore First"),e.createElement(a,{onClick:m},"Close First"),e.createElement(a,{onClick:T},"Focus First")),e.createElement(s,{display:"flex",gap:"8px",flexWrap:"wrap"},e.createElement(a,{onClick:R},"Minimize Second"),e.createElement(a,{onClick:A},"Restore Second"),e.createElement(a,{onClick:g},"Close Second"),e.createElement(a,{onClick:N},"Focus Second"))),e.createElement(i,{id:"first-modal",icon:e.createElement(E,{variant:"32x32_4"}),title:"First Modal",dragOptions:{defaultPosition:{x:50,y:100}},titleBarOptions:e.createElement(i.Minimize,null),buttons:[{value:"Ok",onClick:C},{value:"Cancel",onClick:C}],menu:[{name:"File",list:e.createElement(t,{width:"200px"},e.createElement(t.Item,{onClick:m},"Exit"))},{name:"Edit",list:e.createElement(t,{width:"200px"},e.createElement(t.Item,null,"Copy"))}]},e.createElement(i.Content,{width:"350px",boxShadow:"$in",bgColor:"white",p:"16px"},e.createElement(s,{as:"div",display:"flex",flexDirection:"column",gap:"8px"},e.createElement("h4",null,"Modal Control"),e.createElement("p",null,"This modal is controlled entirely using the"," ",e.createElement("code",null,"useModal()")," hook:"),e.createElement("ul",{style:{fontSize:"14px",margin:"8px 0"}},e.createElement("li",null,e.createElement("code",null,"minimize(id)")," - Minimize modal"),e.createElement("li",null,e.createElement("code",null,"restore(id)")," - Restore modal"),e.createElement("li",null,e.createElement("code",null,"focus(id)")," - Bring to focus")),e.createElement("p",null,"Try the control buttons above or use the TaskBar below.")))),e.createElement(i,{id:"second-modal",icon:e.createElement(f,{variant:"32x32_4"}),title:"Second Modal",dragOptions:{defaultPosition:{x:200,y:150}},titleBarOptions:e.createElement(p.Close,{onClick:g}),buttons:[{value:"Ok",onClick:C},{value:"Cancel",onClick:C}],menu:[{name:"File",list:e.createElement(t,{width:"200px"},e.createElement(t.Item,{onClick:g},"Exit"))},{name:"Edit",list:e.createElement(t,{width:"200px"},e.createElement(t.Item,null,"Copy"))}]},e.createElement(i.Content,{width:"350px",boxShadow:"$in",bgColor:"white",p:"16px"},e.createElement(s,{as:"div",display:"flex",flexDirection:"column",gap:"8px"},e.createElement("h4",null,"Complete Modal Management"),e.createElement("p",null,"Key features demonstrated:"),e.createElement(s,{as:"ul",marginY:"$8"},e.createElement("li",null,"No React state management needed"),e.createElement("li",null,"Modals controlled by ID"),e.createElement("li",null,"Automatic TaskBar integration"),e.createElement("li",null,"Event-driven architecture")),e.createElement("p",null,"Both modals can be controlled independently using their IDs.")))))},x={render:()=>{const[c,n]=e.useState(!0),[d,l]=e.useState(!0),r=()=>n(!1),m=()=>l(!1);return e.createElement(e.Fragment,null,e.createElement(z,{list:e.createElement(t,null,e.createElement(t.Item,{icon:e.createElement(k,{variant:"32x32_4"}),onClick:()=>l(!0)},"Local Disk (C:)"),e.createElement(t.Item,{icon:e.createElement(y,{variant:"32x32_4"}),onClick:()=>{n(!0)}},"Windows Explorer"))}),c&&e.createElement(i,{icon:e.createElement(y,{variant:"16x16_4"}),title:"Windows Explorer",titleBarOptions:[e.createElement(p.Minimize,{key:"minimize",onClick:()=>{alert("I'm in control")}}),e.createElement(p.Close,{key:"close",onClick:r})],width:"300px",height:"220px"},e.createElement(i.Content,{boxShadow:"$in",bgColor:"white"},e.createElement(s,{as:"p",lineHeight:"1.1rem"},"You can still use the"," ",e.createElement("code",{className:u},"<TitleBar.Minimize />")," ","component if you want to add the behavior yourself by handling the click event and updating the state or props of your component accordingly."))),d&&e.createElement(i,{dragOptions:{defaultPosition:{x:120,y:120}},width:"300px",height:"220px",icon:e.createElement(k,{variant:"16x16_4"}),title:"Local Disk (C:)",titleBarOptions:[e.createElement(i.Minimize,{key:"minimize"}),e.createElement(p.Close,{key:"close",onClick:m})]},e.createElement(i.Content,{boxShadow:"$in",bgColor:"white"},e.createElement(s,{as:"p",lineHeight:"1.1rem"},"The ",e.createElement("code",{className:u},"Modal.Minimize")," ","component is a utility component provided by the"," ",e.createElement("code",{className:u},"Modal")," component. It allows you to easily add minimize functionality to your modal. To use it, simply add"," ",e.createElement("code",{className:u},"<Modal.Minimize />")," to the ",e.createElement("code",{className:u},"titleBarOptions")," prop of the ",e.createElement("code",{className:u},"Modal")," component. This will add the minimize button to the title bar of your modal, and clicking on it will minimize the modal."))))},parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A17"}}};h.__docgenInfo={description:"",methods:[],displayName:"Multiple"};var w,S,B;M.parameters={...M.parameters,docs:{...(w=M.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const [showModal, toggleShowModal] = React.useState(true);
    const handleOpenModal = () => toggleShowModal(true);
    const handleCloseModal = () => toggleShowModal(false);
    const handleButtonClick = (e: React.MouseEvent<HTMLLIElement>) => alert(e.currentTarget.value);
    return <>
        <Button onClick={handleOpenModal}>Trigger Modal</Button>
        {showModal && <Modal icon={<Computer variant="16x16_4" />} title="Browse" dragOptions={{
        defaultPosition: {
          x: 0,
          y: 20
        }
      }} titleBarOptions={[<TitleBar.Help key="help" onClick={() => {
        alert('Help!');
      }} />, <TitleBar.Close key="close" onClick={handleCloseModal} />]} buttons={[{
        value: 'Ok',
        onClick: handleButtonClick
      }, {
        value: 'Cancel',
        onClick: handleButtonClick
      }]} menu={[{
        name: 'File',
        list: <List width="200px">
                    <List.Item onClick={handleCloseModal}>Exit</List.Item>
                  </List>
      }, {
        name: 'Edit',
        list: <List width="200px">
                    <List.Item>Copy</List.Item>
                  </List>
      }]}>
            <Modal.Content width="300px" height="160px" boxShadow="$in" bgColor="white">
              Simple modal
            </Modal.Content>
          </Modal>}
      </>;
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A12'
    }
  }
}`,...(B=(S=M.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var F,v,L;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
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
}`,...(L=(v=h.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};var I,D,b;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const [first, toggleFirst] = React.useState(true);
    const [second, toggleSecond] = React.useState(true);
    const closeFirst = () => toggleFirst(false);
    const closeSecond = () => toggleSecond(false);
    return <>
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

        {first && <Modal icon={<WindowsExplorer variant="16x16_4" />} title="Windows Explorer" titleBarOptions={[<TitleBar.Minimize key="minimize" onClick={() => {
        alert("I'm in control");
      }} />, <TitleBar.Close key="close" onClick={closeFirst} />]} width="300px" height="220px">
            <Modal.Content boxShadow="$in" bgColor="white">
              <Frame as="p" lineHeight="1.1rem">
                You can still use the{' '}
                <code className={styles.code}>{'<TitleBar.Minimize />'}</code>{' '}
                component if you want to add the behavior yourself by handling
                the click event and updating the state or props of your
                component accordingly.
              </Frame>
            </Modal.Content>
          </Modal>}

        {second && <Modal dragOptions={{
        defaultPosition: {
          x: 120,
          y: 120
        }
      }} width="300px" height="220px" icon={<ReaderClosed variant="16x16_4" />} title="Local Disk (C:)" titleBarOptions={[<Modal.Minimize key="minimize" />, <TitleBar.Close key="close" onClick={closeSecond} />]}>
            <Modal.Content boxShadow="$in" bgColor="white">
              <Frame as="p" lineHeight="1.1rem">
                The <code className={styles.code}>Modal.Minimize</code>{' '}
                component is a utility component provided by the{' '}
                <code className={styles.code}>Modal</code> component. It allows
                you to easily add minimize functionality to your modal. To use
                it, simply add{' '}
                <code className={styles.code}>{'<Modal.Minimize />'}</code> to
                the <code className={styles.code}>titleBarOptions</code> prop of
                the <code className={styles.code}>Modal</code> component. This
                will add the minimize button to the title bar of your modal, and
                clicking on it will minimize the modal.
              </Frame>
            </Modal.Content>
          </Modal>}
      </>;
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A17'
    }
  }
}`,...(b=(D=x.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};const ae=["Simple","Multiple","Minimize"];export{x as Minimize,h as Multiple,M as Simple,ae as __namedExportsOrder,ne as default};

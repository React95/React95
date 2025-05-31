import{r as e}from"./index-9fa1aa67.js";import{M as o}from"./Modal-f30c9f3b.js";import{B as g}from"./Button-9c3a5d19.js";import{F as w}from"./Frame-8a2a37ef.js";import{L as t}from"./List-661317e0.js";import{T as I}from"./TaskBar-aee2c90e.js";import{T as n}from"./TitleBar-83565a4b.js";import{i as _,j as z,k as N,R as k,W as x}from"./Write1-9175756e.js";import"./createRuntimeFn-62c9670f.esm-edc6fb2c.js";import"./index-923230fa.js";import"./Button.css-afb77755.js";import"./Tooltip-61eba74b.js";var s="r95_1pmeodb0";const Y={title:"Modal",component:o,tags:["autodocs"]},p={render:()=>{const[r,l]=e.useState(!0),c=()=>l(!0),i=()=>l(!1),a=d=>alert(d.currentTarget.value);return e.createElement(e.Fragment,null,e.createElement(g,{onClick:c},"Trigger Modal"),r&&e.createElement(o,{icon:e.createElement(_,{variant:"16x16_4"}),title:"Browse",dragOptions:{defaultPosition:{x:0,y:20}},titleBarOptions:[e.createElement(n.Help,{key:"help",onClick:()=>{alert("Help!")}}),e.createElement(n.Close,{key:"close",onClick:i})],buttons:[{value:"Ok",onClick:a},{value:"Cancel",onClick:a}],menu:[{name:"File",list:e.createElement(t,{width:"200px"},e.createElement(t.Item,{onClick:i},"Exit"))},{name:"Edit",list:e.createElement(t,{width:"200px"},e.createElement(t.Item,null,"Copy"))}]},e.createElement(o.Content,{width:"300px",height:"160px",boxShadow:"$in",bgColor:"white"},"Simple modal")))},parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A12"}}},m=()=>{const[r,l]=e.useState(!1),[c,i]=e.useState(!1),a=()=>{l(!0),i(!0)},d=()=>l(!0),L=()=>i(!0),C=()=>l(!1),M=()=>i(!1),h=F=>alert(F.currentTarget.value);return e.createElement(e.Fragment,null,e.createElement(g,{onClick:a},"Trigger Both"),e.createElement(g,{onClick:d},"Trigger 1st"),e.createElement(g,{onClick:L},"Trigger 2nd"),r&&e.createElement(o,{icon:e.createElement(z,{variant:"32x32_4"}),title:"First Modal",dragOptions:{defaultPosition:{x:0,y:20}},titleBarOptions:e.createElement(n.Close,{onClick:C}),buttons:[{value:"Ok",onClick:h},{value:"Cancel",onClick:h}],menu:[{name:"File",list:e.createElement(t,{width:"200px"},e.createElement(t.Item,{onClick:C},"Exit"))},{name:"Edit",list:e.createElement(t,{width:"200px"},e.createElement(t.Item,null,"Copy"))}]},e.createElement(o.Content,{width:"300px",height:"160px",boxShadow:"$in",bgColor:"white"},e.createElement("p",null,"The active modal will be based on the order they render, most recently rendered will be the active component. On click of a non-active modal will fire an action to set that modal as the active one."))),c&&e.createElement(o,{icon:e.createElement(N,{variant:"32x32_4"}),title:"Second Modal",dragOptions:{defaultPosition:{x:250,y:100}},titleBarOptions:e.createElement(n.Close,{onClick:M}),buttons:[{value:"Ok",onClick:h},{value:"Cancel",onClick:h}],menu:[{name:"File",list:e.createElement(t,{width:"200px"},e.createElement(t.Item,{onClick:M},"Exit"))},{name:"Edit",list:e.createElement(t,{width:"200px"},e.createElement(t.Item,null,"Copy"))}]},e.createElement(o.Content,{width:"300px",height:"160px",boxShadow:"$in",bgColor:"white"},e.createElement("p",null,"Try playing with the modals. See which one is active, click and drag them. Understand their behavior."))))},u={render:()=>{const[r,l]=e.useState(!0),[c,i]=e.useState(!0),a=()=>l(!1),d=()=>i(!1);return e.createElement(e.Fragment,null,e.createElement(I,{list:e.createElement(t,null,e.createElement(t.Item,{icon:e.createElement(k,{variant:"32x32_4"}),onClick:()=>i(!0)},"Local Disk (C:)"),e.createElement(t.Item,{icon:e.createElement(x,{variant:"32x32_4"}),onClick:()=>{l(!0)}},"Windows Explorer"))}),r&&e.createElement(o,{icon:e.createElement(x,{variant:"16x16_4"}),title:"Windows Explorer",titleBarOptions:[e.createElement(n.Minimize,{key:"minimize",onClick:()=>{alert("I'm in control")}}),e.createElement(n.Close,{key:"close",onClick:a})],width:"300px",height:"220px"},e.createElement(o.Content,{boxShadow:"$in",bgColor:"white"},e.createElement(w,{as:"p",lineHeight:"1.1rem"},"You can still use the"," ",e.createElement("code",{className:s},"<TitleBar.Minimize />")," ","component if you want to add the behavior yourself by handling the click event and updating the state or props of your component accordingly."))),c&&e.createElement(o,{dragOptions:{defaultPosition:{x:120,y:120}},width:"300px",height:"220px",icon:e.createElement(k,{variant:"16x16_4"}),title:"Local Disk (C:)",titleBarOptions:[e.createElement(o.Minimize,{key:"minimize"}),e.createElement(n.Close,{key:"close",onClick:d})]},e.createElement(o.Content,{boxShadow:"$in",bgColor:"white"},e.createElement(w,{as:"p",lineHeight:"1.1rem"},"The ",e.createElement("code",{className:s},"Modal.Minimize")," ","component is a utility component provided by the"," ",e.createElement("code",{className:s},"Modal")," component. It allows you to easily add minimize functionality to your modal. To use it, simply add"," ",e.createElement("code",{className:s},"<Modal.Minimize />")," to the ",e.createElement("code",{className:s},"titleBarOptions")," prop of the ",e.createElement("code",{className:s},"Modal")," component. This will add the minimize button to the title bar of your modal, and clicking on it will minimize the modal."))))},parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A17"}}};m.__docgenInfo={description:"",methods:[],displayName:"Multiple"};var E,y,S;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(S=(y=p.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var f,B,v;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const [showFirstModal, toggleShowFirstModal] = React.useState(false);
  const [showSecondModal, toggleShowSecondModal] = React.useState(false);
  const handleOpenBothModals = () => {
    toggleShowFirstModal(true);
    toggleShowSecondModal(true);
  };
  const handleOpenFirstModal = () => toggleShowFirstModal(true);
  const handleOpenSecondModal = () => toggleShowSecondModal(true);
  const handleCloseFirstModal = () => toggleShowFirstModal(false);
  const handleCloseSecondModal = () => toggleShowSecondModal(false);
  const handleButtonClick = (e: React.MouseEvent<HTMLLIElement>) => alert(e.currentTarget.value);
  return <>
      <Button onClick={handleOpenBothModals}>Trigger Both</Button>
      <Button onClick={handleOpenFirstModal}>Trigger 1st</Button>
      <Button onClick={handleOpenSecondModal}>Trigger 2nd</Button>
      {showFirstModal && <Modal icon={<Mmsys113 variant="32x32_4" />} title="First Modal" dragOptions={{
      defaultPosition: {
        x: 0,
        y: 20
      }
    }} titleBarOptions={<TitleBar.Close onClick={handleCloseFirstModal} />} buttons={[{
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
          <Modal.Content width="300px" height="160px" boxShadow="$in" bgColor="white">
            <p>
              The active modal will be based on the order they render, most
              recently rendered will be the active component. On click of a
              non-active modal will fire an action to set that modal as the
              active one.
            </p>
          </Modal.Content>
        </Modal>}
      {showSecondModal && <Modal icon={<Mshtml32534 variant="32x32_4" />} title="Second Modal" dragOptions={{
      defaultPosition: {
        x: 250,
        y: 100
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
          <Modal.Content width="300px" height="160px" boxShadow="$in" bgColor="white">
            <p>
              Try playing with the modals. See which one is active, click and
              drag them. Understand their behavior.
            </p>
          </Modal.Content>
        </Modal>}
    </>;
}`,...(v=(B=m.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};var b,T,O;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(O=(T=u.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};const G=["Simple","Multiple","Minimize"];export{u as Minimize,m as Multiple,p as Simple,G as __namedExportsOrder,Y as default};

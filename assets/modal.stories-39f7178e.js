import{j as f,F,a as e}from"./jsx-runtime-e43ccb36.js";import{r as p}from"./index-1b03fe98.js";import{M as r}from"./Modal-32e36ab2.js";import{B as s}from"./Button-71983f72.js";import{F as w}from"./Frame-9c505601.js";import{L as n}from"./List-77cf638e.js";import{h as b,i as y,j as I}from"./Write1-31d87498.js";import"./index-f6b105ee.js";import"./index-6fd5a17b.js";import"./TitleBar-4003dbf8.js";import"./createRuntimeFn-62c9670f.esm-edc6fb2c.js";import"./Button.css-afb77755.js";import"./index-7332eacf.js";import"./ModalContext-888db322.js";import"./help-4ccdb1ed.js";const Z={title:"Modal",component:r,tags:["autodocs"]},a={render:()=>{const[c,t]=p.useState(!0),h=()=>t(!0),o=()=>t(!1),l=m=>alert(m.currentTarget.value);return f(F,{children:[e(s,{onClick:h,children:"Trigger Modal"}),c&&e(r,{width:"300px",height:"200px",icon:e(b,{variant:"16x16_4"}),title:"Browse",defaultPosition:{x:0,y:20},onClose:o,onHelp:()=>{console.log("Help!")},buttons:[{value:"Ok",onClick:l},{value:"Cancel",onClick:l}],menu:[{name:"File",list:e(n,{width:"200px",children:e(n.Item,{onClick:o,children:"Exit"})})},{name:"Edit",list:e(n,{width:"200px",children:e(n.Item,{children:"Copy"})})}]})]})},parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A12"}}},d=()=>{const[c,t]=p.useState(!1),[h,o]=p.useState(!1),l=()=>{t(!0),o(!0)},m=()=>t(!0),L=()=>o(!0),u=()=>t(!1),g=()=>o(!1),i=B=>alert(B.currentTarget.value);return f(F,{children:[e(s,{onClick:l,children:"Trigger Both"}),e(s,{onClick:m,children:"Trigger 1st"}),e(s,{onClick:L,children:"Trigger 2nd"}),c&&e(r,{width:"300px",height:"200px",icon:e(y,{variant:"32x32_4"}),title:"First Modal",defaultPosition:{x:0,y:20},onClose:u,buttons:[{value:"Ok",onClick:i},{value:"Cancel",onClick:i}],menu:[{name:"File",list:e(n,{width:"200px",children:e(n.Item,{onClick:u,children:"Exit"})})},{name:"Edit",list:e(n,{width:"200px",children:e(n.Item,{children:"Copy"})})}],children:e(w,{bg:"white",boxShadow:"$in",h:"100%",w:"100%",padding:"0px 5px",children:e("p",{children:"The active modal will be based on the order they render, most recently rendered will be the active component. On click of a non-active modal will fire an action to set that modal as the active one."})})}),h&&e(r,{width:"300px",height:"200px",icon:e(I,{variant:"32x32_4"}),title:"Second Modal",defaultPosition:{x:250,y:100},onClose:g,buttons:[{value:"Ok",onClick:i},{value:"Cancel",onClick:i}],menu:[{name:"File",list:e(n,{width:"200px",children:e(n.Item,{onClick:g,children:"Exit"})})},{name:"Edit",list:e(n,{width:"200px",children:e(n.Item,{children:"Copy"})})}],children:e(w,{bg:"white",boxShadow:"$in",h:"100%",w:"100%",padding:"0px 5px",children:e("p",{children:"Try playing with the modals. See which on is active, click and drag them. Understand their behavior."})})})]})};var M,C,x;a.parameters={...a.parameters,docs:{...(M=a.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const [showModal, toggleShowModal] = React.useState(true);
    const handleOpenModal = () => toggleShowModal(true);
    const handleCloseModal = () => toggleShowModal(false);
    const handleButtonClick = (e: React.MouseEvent<HTMLLIElement>) => alert(e.currentTarget.value);
    return <>
        <Button onClick={handleOpenModal}>Trigger Modal</Button>
        {showModal && <Modal width="300px" height="200px" icon={<Computer variant="16x16_4" />} title="Browse" defaultPosition={{
        x: 0,
        y: 20
      }} onClose={handleCloseModal} onHelp={() => {
        console.log('Help!');
      }} buttons={[{
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
      }]} />}
      </>;
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A12'
    }
  }
}`,...(x=(C=a.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var S,k,v;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
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
      {showFirstModal && <Modal width="300px" height="200px" icon={<Mmsys113 variant="32x32_4" />} title="First Modal" defaultPosition={{
      x: 0,
      y: 20
    }} onClose={handleCloseFirstModal} buttons={[{
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
          <Frame bg="white" boxShadow="$in" h="100%" w="100%" padding="0px 5px">
            <p>
              The active modal will be based on the order they render, most
              recently rendered will be the active component. On click of a
              non-active modal will fire an action to set that modal as the
              active one.
            </p>
          </Frame>
        </Modal>}
      {showSecondModal && <Modal width="300px" height="200px" icon={<Mshtml32534 variant="32x32_4" />} title="Second Modal" defaultPosition={{
      x: 250,
      y: 100
    }} onClose={handleCloseSecondModal} buttons={[{
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
          <Frame bg="white" boxShadow="$in" h="100%" w="100%" padding="0px 5px">
            <p>
              Try playing with the modals. See which on is active, click and
              drag them. Understand their behavior.
            </p>
          </Frame>
        </Modal>}
    </>;
}`,...(v=(k=d.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};const z=["Simple","Multiple"];export{d as Multiple,a as Simple,z as __namedExportsOrder,Z as default};

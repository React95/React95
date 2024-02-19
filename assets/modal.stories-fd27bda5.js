import{j as f,F,a as e}from"./index-0559674c.js";import{r as u}from"./index-1b03fe98.js";import{B as s}from"./Button-1674c104.js";import{F as p}from"./Frame-f3688d20.js";import{L as n}from"./List-87ea133f.js";import{M as r}from"./Modal-a0fc7174.js";import{h as b,i as y,j as I}from"./Write1-0f5c28b2.js";import"./ListDivider-6693db38.js";import"./index-f6b105ee.js";import"./index-6fd5a17b.js";import"./index-5d7a0789.js";import"./ModalContext-69d2d970.js";const N={title:"Modal",component:r,tags:["autodocs"]},i={render:()=>{const[c,t]=u.useState(!0),h=()=>t(!0),o=()=>t(!1),l=m=>alert(m.currentTarget.value);return f(F,{children:[e(s,{onClick:h,children:"Trigger Modal"}),c&&e(r,{width:"300",height:"200",icon:e(b,{variant:"16x16_4"}),title:"Browse",defaultPosition:{x:0,y:20},closeModal:o,buttons:[{value:"Ok",onClick:l},{value:"Cancel",onClick:l}],menu:[{name:"File",list:e(n,{children:e(n.Item,{onClick:o,children:"Exit"})})},{name:"Edit",list:e(n,{children:e(n.Item,{children:"Copy"})})}]})]})},parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A12"}}},d=()=>{const[c,t]=u.useState(!1),[h,o]=u.useState(!1),l=()=>{t(!0),o(!0)},m=()=>t(!0),L=()=>o(!0),g=()=>t(!1),M=()=>o(!1),a=B=>alert(B.currentTarget.value);return f(F,{children:[e(s,{onClick:l,children:"Trigger Both"}),e(s,{onClick:m,children:"Trigger 1st"}),e(s,{onClick:L,children:"Trigger 2nd"}),c&&e(r,{width:"300",height:"200",icon:e(y,{variant:"32x32_4"}),title:"First Modal",defaultPosition:{x:0,y:20},closeModal:g,buttons:[{value:"Ok",onClick:a},{value:"Cancel",onClick:a}],menu:[{name:"File",list:e(n,{children:e(n.Item,{onClick:g,children:"Exit"})})},{name:"Edit",list:e(n,{children:e(n.Item,{children:"Copy"})})}],children:e(p,{bg:"white",boxShadow:"in",h:"100%",w:"100%",padding:"0px 5px",children:e("p",{children:"The active modal will be based on the order they render, most recently rendered will be the active component. On click of a non-active modal will fire an action to set that modal as the active one."})})}),h&&e(r,{width:"300",height:"200",icon:e(I,{variant:"32x32_4"}),title:"Second Modal",defaultPosition:{x:250,y:100},closeModal:M,buttons:[{value:"Ok",onClick:a},{value:"Cancel",onClick:a}],menu:[{name:"File",list:e(n,{children:e(n.Item,{onClick:M,children:"Exit"})})},{name:"Edit",list:e(n,{children:e(n.Item,{children:"Copy"})})}],children:e(p,{bg:"white",boxShadow:"in",h:"100%",w:"100%",padding:"0px 5px",children:e("p",{children:"Try playing with the modals. See which on is active, click and drag them. Understand their behavior."})})})]})};var C,w,S;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const [showModal, toggleShowModal] = React.useState(true);
    const handleOpenModal = () => toggleShowModal(true);
    const handleCloseModal = () => toggleShowModal(false);
    const handleButtonClick = (e: React.MouseEvent<HTMLLIElement>) => alert(e.currentTarget.value);
    return <>
        <Button onClick={handleOpenModal}>Trigger Modal</Button>
        {showModal && <Modal width="300" height="200" icon={<Computer variant="16x16_4" />} title="Browse" defaultPosition={{
        x: 0,
        y: 20
      }} closeModal={handleCloseModal} buttons={[{
        value: 'Ok',
        onClick: handleButtonClick
      }, {
        value: 'Cancel',
        onClick: handleButtonClick
      }]} menu={[{
        name: 'File',
        list: <List>
                    <List.Item onClick={handleCloseModal}>Exit</List.Item>
                  </List>
      }, {
        name: 'Edit',
        list: <List>
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
}`,...(S=(w=i.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var k,x,v;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
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
      {showFirstModal && <Modal width="300" height="200" icon={<Mmsys113 variant="32x32_4" />} title="First Modal" defaultPosition={{
      x: 0,
      y: 20
    }} closeModal={handleCloseFirstModal} buttons={[{
      value: 'Ok',
      onClick: handleButtonClick
    }, {
      value: 'Cancel',
      onClick: handleButtonClick
    }]} menu={[{
      name: 'File',
      list: <List>
                  <List.Item onClick={handleCloseFirstModal}>Exit</List.Item>
                </List>
    }, {
      name: 'Edit',
      list: <List>
                  <List.Item>Copy</List.Item>
                </List>
    }]}>
          <Frame bg="white" boxShadow="in" h="100%" w="100%" padding="0px 5px">
            <p>
              The active modal will be based on the order they render, most
              recently rendered will be the active component. On click of a
              non-active modal will fire an action to set that modal as the
              active one.
            </p>
          </Frame>
        </Modal>}
      {showSecondModal && <Modal width="300" height="200" icon={<Mshtml32534 variant="32x32_4" />} title="Second Modal" defaultPosition={{
      x: 250,
      y: 100
    }} closeModal={handleCloseSecondModal} buttons={[{
      value: 'Ok',
      onClick: handleButtonClick
    }, {
      value: 'Cancel',
      onClick: handleButtonClick
    }]} menu={[{
      name: 'File',
      list: <List>
                  <List.Item onClick={handleCloseSecondModal}>Exit</List.Item>
                </List>
    }, {
      name: 'Edit',
      list: <List>
                  <List.Item>Copy</List.Item>
                </List>
    }]}>
          <Frame bg="white" boxShadow="in" h="100%" w="100%" padding="0px 5px">
            <p>
              Try playing with the modals. See which on is active, click and
              drag them. Understand their behavior.
            </p>
          </Frame>
        </Modal>}
    </>;
}`,...(v=(x=d.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const U=["Simple","Multiple"];export{d as Multiple,i as Simple,U as __namedExportsOrder,N as default};

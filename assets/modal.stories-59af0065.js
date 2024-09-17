import{r as e}from"./index-ff614419.js";import{M as d}from"./Modal-a4c7e6c0.js";import{B as r}from"./Button-2ad9a764.js";import{F as g}from"./Frame-43ccd6dd.js";import{L as t}from"./List-e7819dce.js";import{h as f,i as F,j as L}from"./Write1-f730c4ea.js";import"./index-a1ecae5a.js";import"./index-0c06dfaf.js";import"./TitleBar-dbb9a1f2.js";import"./createRuntimeFn-62c9670f.esm-edc6fb2c.js";import"./Button.css-afb77755.js";import"./index-a20f67f3.js";import"./ModalContext-84fff0fd.js";import"./help-4ccdb1ed.js";const q={title:"Modal",component:d,tags:["autodocs"]},s={render:()=>{const[c,o]=e.useState(!0),h=()=>o(!0),l=()=>o(!1),n=m=>alert(m.currentTarget.value);return e.createElement(e.Fragment,null,e.createElement(r,{onClick:h},"Trigger Modal"),c&&e.createElement(d,{width:"300px",height:"200px",icon:e.createElement(f,{variant:"16x16_4"}),title:"Browse",defaultPosition:{x:0,y:20},onClose:l,onHelp:()=>{console.log("Help!")},buttons:[{value:"Ok",onClick:n},{value:"Cancel",onClick:n}],menu:[{name:"File",list:e.createElement(t,{width:"200px"},e.createElement(t.Item,{onClick:l},"Exit"))},{name:"Edit",list:e.createElement(t,{width:"200px"},e.createElement(t.Item,null,"Copy"))}]}))},parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A12"}}},a=()=>{const[c,o]=e.useState(!1),[h,l]=e.useState(!1),n=()=>{o(!0),l(!0)},m=()=>o(!0),E=()=>l(!0),p=()=>o(!1),u=()=>l(!1),i=v=>alert(v.currentTarget.value);return e.createElement(e.Fragment,null,e.createElement(r,{onClick:n},"Trigger Both"),e.createElement(r,{onClick:m},"Trigger 1st"),e.createElement(r,{onClick:E},"Trigger 2nd"),c&&e.createElement(d,{width:"300px",height:"200px",icon:e.createElement(F,{variant:"32x32_4"}),title:"First Modal",defaultPosition:{x:0,y:20},onClose:p,buttons:[{value:"Ok",onClick:i},{value:"Cancel",onClick:i}],menu:[{name:"File",list:e.createElement(t,{width:"200px"},e.createElement(t.Item,{onClick:p},"Exit"))},{name:"Edit",list:e.createElement(t,{width:"200px"},e.createElement(t.Item,null,"Copy"))}]},e.createElement(g,{bg:"white",boxShadow:"$in",h:"100%",w:"100%",padding:"0px 5px"},e.createElement("p",null,"The active modal will be based on the order they render, most recently rendered will be the active component. On click of a non-active modal will fire an action to set that modal as the active one."))),h&&e.createElement(d,{width:"300px",height:"200px",icon:e.createElement(L,{variant:"32x32_4"}),title:"Second Modal",defaultPosition:{x:250,y:100},onClose:u,buttons:[{value:"Ok",onClick:i},{value:"Cancel",onClick:i}],menu:[{name:"File",list:e.createElement(t,{width:"200px"},e.createElement(t.Item,{onClick:u},"Exit"))},{name:"Edit",list:e.createElement(t,{width:"200px"},e.createElement(t.Item,null,"Copy"))}]},e.createElement(g,{bg:"white",boxShadow:"$in",h:"100%",w:"100%",padding:"0px 5px"},e.createElement("p",null,"Try playing with the modals. See which on is active, click and drag them. Understand their behavior."))))};a.__docgenInfo={description:"",methods:[],displayName:"Multiple"};var M,w,C;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(C=(w=s.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var x,S,k;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
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
}`,...(k=(S=a.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};const A=["Simple","Multiple"];export{a as Multiple,s as Simple,A as __namedExportsOrder,q as default};

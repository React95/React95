import{r as e}from"./index-9fa1aa67.js";import{M as o}from"./Modal-4e7d4003.js";import{B as d}from"./Button-9c3a5d19.js";import{L as t}from"./List-64200f45.js";import{T as c}from"./TitleBar-83565a4b.js";import{h as v,i as f,j as O}from"./Write1-c92272e3.js";import"./Frame-8a2a37ef.js";import"./index-923230fa.js";import"./createRuntimeFn-62c9670f.esm-edc6fb2c.js";import"./Button.css-afb77755.js";const $={title:"Modal",component:o,tags:["autodocs"]},s={render:()=>{const[h,l]=e.useState(!0),m=()=>l(!0),n=()=>l(!1),i=p=>alert(p.currentTarget.value);return e.createElement(e.Fragment,null,e.createElement(d,{onClick:m},"Trigger Modal"),h&&e.createElement(o,{icon:e.createElement(v,{variant:"16x16_4"}),title:"Browse",dragOptions:{defaultPosition:{x:0,y:20}},titleBarOptions:[e.createElement(c.Help,{key:"help",onClick:()=>{alert("Help!")}}),e.createElement(c.Close,{key:"close",onClick:n})],buttons:[{value:"Ok",onClick:i},{value:"Cancel",onClick:i}],menu:[{name:"File",list:e.createElement(t,{width:"200px"},e.createElement(t.Item,{onClick:n},"Exit"))},{name:"Edit",list:e.createElement(t,{width:"200px"},e.createElement(t.Item,null,"Copy"))}]},e.createElement(o.Content,{width:"300px",height:"160px",boxShadow:"$in",bgColor:"white"},"Simple modal")))},parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A12"}}},a=()=>{const[h,l]=e.useState(!1),[m,n]=e.useState(!1),i=()=>{l(!0),n(!0)},p=()=>l(!0),S=()=>n(!0),u=()=>l(!1),C=()=>n(!1),r=B=>alert(B.currentTarget.value);return e.createElement(e.Fragment,null,e.createElement(d,{onClick:i},"Trigger Both"),e.createElement(d,{onClick:p},"Trigger 1st"),e.createElement(d,{onClick:S},"Trigger 2nd"),h&&e.createElement(o,{icon:e.createElement(f,{variant:"32x32_4"}),title:"First Modal",dragOptions:{defaultPosition:{x:0,y:20}},titleBarOptions:e.createElement(c.Close,{onClick:u}),buttons:[{value:"Ok",onClick:r},{value:"Cancel",onClick:r}],menu:[{name:"File",list:e.createElement(t,{width:"200px"},e.createElement(t.Item,{onClick:u},"Exit"))},{name:"Edit",list:e.createElement(t,{width:"200px"},e.createElement(t.Item,null,"Copy"))}]},e.createElement(o.Content,{width:"300px",height:"160px",boxShadow:"$in",bgColor:"white"},e.createElement("p",null,"The active modal will be based on the order they render, most recently rendered will be the active component. On click of a non-active modal will fire an action to set that modal as the active one."))),m&&e.createElement(o,{icon:e.createElement(O,{variant:"32x32_4"}),title:"Second Modal",dragOptions:{defaultPosition:{x:250,y:100}},titleBarOptions:e.createElement(c.Close,{onClick:C}),buttons:[{value:"Ok",onClick:r},{value:"Cancel",onClick:r}],menu:[{name:"File",list:e.createElement(t,{width:"200px"},e.createElement(t.Item,{onClick:C},"Exit"))},{name:"Edit",list:e.createElement(t,{width:"200px"},e.createElement(t.Item,null,"Copy"))}]},e.createElement(o.Content,{width:"300px",height:"160px",boxShadow:"$in",bgColor:"white"},e.createElement("p",null,"Try playing with the modals. See which one is active, click and drag them. Understand their behavior."))))};a.__docgenInfo={description:"",methods:[],displayName:"Multiple"};var g,M,w;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(w=(M=s.parameters)==null?void 0:M.docs)==null?void 0:w.source}}};var k,x,E;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
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
}`,...(E=(x=a.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const D=["Simple","Multiple"];export{a as Multiple,s as Simple,D as __namedExportsOrder,$ as default};

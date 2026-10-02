import{j as n,F as r,r as g}from"./iframe-DtakMOZV.js";import{M as o,u as $}from"./Modal-JKCOabq_.js";import{B as l}from"./Button-DyYqUVhx.js";/* empty css                              */import{L as e}from"./List-CPWjiBOk.js";import{T as O}from"./TaskBar-yC_UAhff.js";import{T as x}from"./TitleBar-CO_TT_55.js";import{j as f,u as k,R as S,W as w,i as H}from"./Write1-T9gLY-bW.js";import"./preload-helper-C1FmrZbK.js";/* empty css                             */import"./createRuntimeFn-62c9670f.esm-BkdTE7RR.js";import"./index-BM63UH-n.js";import"./Button.css-ChH4GoWp.js";/* empty css                            */import"./Tooltip-DKaJKxXP.js";/* empty css                               *//* empty css                               */var h="r95_1pmeodb0";const dn={title:"Modal",component:o,tags:["autodocs"],args:{title:"Browse",hasWindowButton:!0,buttonsAlignment:"flex-end"},argTypes:{title:{control:"text"},buttonsAlignment:{control:"select",options:["flex-start","center","flex-end","space-between"]}}},K=a=>{const[s,d]=g.useState(!0),t=()=>d(!0),c=()=>d(!1),m=p=>alert(p.currentTarget.value);return n.jsxs(n.Fragment,{children:[n.jsx(l,{onClick:t,children:"Trigger Modal"}),s&&n.jsx(o,{...a,icon:n.jsx(H,{variant:"16x16_4"}),dragOptions:{defaultPosition:{x:0,y:20}},titleBarOptions:[n.jsx(x.Help,{onClick:()=>{alert("Help!")}},"help"),n.jsx(x.Close,{onClick:c},"close")],buttons:[{value:"Ok",onClick:m},{value:"Cancel",onClick:m}],menu:[{name:"File",list:n.jsx(e,{width:"200px",children:n.jsx(e.Item,{onClick:c,children:"Exit"})})},{name:"Edit",list:n.jsx(e,{width:"200px",children:n.jsx(e.Item,{children:"Copy"})})}],children:n.jsx(o.Content,{width:"300px",height:"160px",boxShadow:"$in",bgColor:"white",children:"Simple modal"})})]})},M={render:a=>n.jsx(K,{...a}),parameters:{design:{type:"figma",url:"https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A12"}}},i={first:"first-modal",second:"second-modal"},u=()=>{const{remove:a,minimize:s,restore:d,focus:t,add:c}=$(),m=()=>{s(i.first),a(i.first)},p=()=>{s(i.second),a(i.second)},_=()=>{s(i.first),t("no-id")},T=()=>{c({id:i.first,title:"First Modal",icon:n.jsx(f,{variant:"32x32_4"}),hasButton:!0}),d(i.first),t(i.first)},A=()=>t(i.first),R=()=>{s(i.second),t("no-id")},E=()=>{c({id:i.second,title:"Second Modal",icon:n.jsx(k,{variant:"32x32_4"}),hasButton:!0}),d(i.second),t(i.second)},N=()=>t(i.second),C=W=>alert(W.currentTarget.value);return n.jsxs(r,{children:[n.jsx(O,{}),n.jsxs(r,{display:"flex",flexDirection:"column",gap:"8px",children:[n.jsxs(r,{display:"flex",gap:"8px",flexWrap:"wrap",children:[n.jsx(l,{onClick:_,children:"Minimize First"}),n.jsx(l,{onClick:T,children:"Restore First"}),n.jsx(l,{onClick:m,children:"Close First"}),n.jsx(l,{onClick:A,children:"Focus First"})]}),n.jsxs(r,{display:"flex",gap:"8px",flexWrap:"wrap",children:[n.jsx(l,{onClick:R,children:"Minimize Second"}),n.jsx(l,{onClick:E,children:"Restore Second"}),n.jsx(l,{onClick:p,children:"Close Second"}),n.jsx(l,{onClick:N,children:"Focus Second"})]})]}),n.jsx(o,{id:"first-modal",icon:n.jsx(f,{variant:"32x32_4"}),title:"First Modal",dragOptions:{defaultPosition:{x:50,y:100}},titleBarOptions:n.jsx(o.Minimize,{}),buttons:[{value:"Ok",onClick:C},{value:"Cancel",onClick:C}],menu:[{name:"File",list:n.jsx(e,{width:"200px",children:n.jsx(e.Item,{onClick:m,children:"Exit"})})},{name:"Edit",list:n.jsx(e,{width:"200px",children:n.jsx(e.Item,{children:"Copy"})})}],children:n.jsx(o.Content,{width:"350px",boxShadow:"$in",bgColor:"white",p:"16px",children:n.jsxs(r,{as:"div",display:"flex",flexDirection:"column",gap:"8px",children:[n.jsx("h4",{children:"Modal Control"}),n.jsxs("p",{children:["This modal is controlled entirely using the"," ",n.jsx("code",{children:"useModal()"})," hook:"]}),n.jsxs("ul",{style:{fontSize:"14px",margin:"8px 0"},children:[n.jsxs("li",{children:[n.jsx("code",{children:"minimize(id)"})," - Minimize modal"]}),n.jsxs("li",{children:[n.jsx("code",{children:"restore(id)"})," - Restore modal"]}),n.jsxs("li",{children:[n.jsx("code",{children:"focus(id)"})," - Bring to focus"]})]}),n.jsx("p",{children:"Try the control buttons above or use the TaskBar below."})]})})}),n.jsx(o,{id:"second-modal",icon:n.jsx(k,{variant:"32x32_4"}),title:"Second Modal",dragOptions:{defaultPosition:{x:200,y:150}},titleBarOptions:n.jsx(x.Close,{onClick:p}),buttons:[{value:"Ok",onClick:C},{value:"Cancel",onClick:C}],menu:[{name:"File",list:n.jsx(e,{width:"200px",children:n.jsx(e.Item,{onClick:p,children:"Exit"})})},{name:"Edit",list:n.jsx(e,{width:"200px",children:n.jsx(e.Item,{children:"Copy"})})}],children:n.jsx(o.Content,{width:"350px",boxShadow:"$in",bgColor:"white",p:"16px",children:n.jsxs(r,{as:"div",display:"flex",flexDirection:"column",gap:"8px",children:[n.jsx("h4",{children:"Complete Modal Management"}),n.jsx("p",{children:"Key features demonstrated:"}),n.jsxs(r,{as:"ul",marginY:"$8",children:[n.jsx("li",{children:"No React state management needed"}),n.jsx("li",{children:"Modals controlled by ID"}),n.jsx("li",{children:"Automatic TaskBar integration"}),n.jsx("li",{children:"Event-driven architecture"})]}),n.jsx("p",{children:"Both modals can be controlled independently using their IDs."})]})})})]})};u.parameters={controls:{disable:!0}};const P=()=>{const[a,s]=g.useState(!0),[d,t]=g.useState(!0),c=()=>s(!1),m=()=>t(!1);return n.jsxs(n.Fragment,{children:[n.jsx(O,{list:n.jsxs(e,{children:[n.jsx(e.Item,{icon:n.jsx(S,{variant:"32x32_4"}),onClick:()=>t(!0),children:"Local Disk (C:)"}),n.jsx(e.Item,{icon:n.jsx(w,{variant:"32x32_4"}),onClick:()=>{s(!0)},children:"Windows Explorer"})]})}),a&&n.jsx(o,{icon:n.jsx(w,{variant:"16x16_4"}),title:"Windows Explorer",titleBarOptions:[n.jsx(x.Minimize,{onClick:()=>{alert("I'm in control")}},"minimize"),n.jsx(x.Close,{onClick:c},"close")],width:"300px",height:"220px",children:n.jsx(o.Content,{boxShadow:"$in",bgColor:"white",children:n.jsxs(r,{as:"p",lineHeight:"1.1rem",children:["You can still use the"," ",n.jsx("code",{className:h,children:"<TitleBar.Minimize />"})," ","component if you want to add the behavior yourself by handling the click event and updating the state or props of your component accordingly."]})})}),d&&n.jsx(o,{dragOptions:{defaultPosition:{x:120,y:120}},width:"300px",height:"220px",icon:n.jsx(S,{variant:"16x16_4"}),title:"Local Disk (C:)",titleBarOptions:[n.jsx(o.Minimize,{},"minimize"),n.jsx(x.Close,{onClick:m},"close")],children:n.jsx(o.Content,{boxShadow:"$in",bgColor:"white",children:n.jsxs(r,{as:"p",lineHeight:"1.1rem",children:["The ",n.jsx("code",{className:h,children:"Modal.Minimize"})," component is a utility component provided by the"," ",n.jsx("code",{className:h,children:"Modal"})," component. It allows you to easily add minimize functionality to your modal. To use it, simply add"," ",n.jsx("code",{className:h,children:"<Modal.Minimize />"})," to the"," ",n.jsx("code",{className:h,children:"titleBarOptions"})," prop of the"," ",n.jsx("code",{className:h,children:"Modal"})," component. This will add the minimize button to the title bar of your modal, and clicking on it will minimize the modal."]})})})]})},j={render:()=>n.jsx(P,{}),parameters:{controls:{disable:!0},design:{type:"figma",url:"https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A17"}}},cn=["Simple","Multiple","Minimize"];var F,B,y;M.parameters={...M.parameters,docs:{...(F=M.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => <SimpleDemo {...args} />,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A12'
    }
  }
}`,...(y=(B=M.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};var D,b,v;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
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
}`,...(v=(b=u.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var I,z,L;j.parameters={...j.parameters,docs:{...(I=j.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <MinimizeDemo />,
  parameters: {
    // a demo of minimizing to the TaskBar; the controls are on Simple
    controls: {
      disable: true
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A17'
    }
  }
}`,...(L=(z=j.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};export{j as Minimize,u as Multiple,M as Simple,cn as __namedExportsOrder,dn as default};

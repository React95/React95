import{j as a,F as A,a as e}from"./index-9af3809b.js";import{r}from"./index-ebeaab24.js";import{A as g}from"./Alert-afbf2d25.js";import{B as S}from"./Button-c53c5656.js";import{C as f}from"./Checkbox-d5d444c7.js";import{D as C}from"./Dropdown-75460a15.js";import"./Write1-4d3cd2cb.js";import"./Modal-2a1b1d05.js";import"./index-f50b85d6.js";import"./index-9c09ad76.js";import"./index-1842050f.js";import"./Frame-b3eb3b92.js";import"./ModalContext-2b18b259.js";const E={title:"Alert",component:g,tags:["autodocs"]},t={render:()=>{const[d,n]=r.useState(!1),[o,p]=r.useState(!1),[m,h]=r.useState("error"),u=()=>n(!0),s=()=>n(!1);return a(A,{children:[a("div",{style:{marginBottom:10},children:["Alert Type:",e(C,{options:["error","info","question","warning"],onChange:w=>h(w.target.value)}),e(f,{checked:o,onChange:()=>p(!o),children:"sound"})]}),e(S,{onClick:u,children:"Trigger Alert"}),d&&e(g,{title:"Windows Networking",type:m,message:"The Windows password you typed is incorrect.",closeAlert:s,hasSound:o,buttons:[{value:"OK",onClick:s}]})]})},parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=0%3A1"}}};var i,l,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const [showAlert, toggleShowAlert] = React.useState(false);
    const [withSound, toggleWithSound] = React.useState(false);
    const [type, setType] = React.useState<AlertType>('error');
    const handleOpenAlert = () => toggleShowAlert(true);
    const handleCloseAlert = () => toggleShowAlert(false);
    const onImageChange = (e: React.ChangeEvent<HTMLSelectElement>) => setType((e.target.value as AlertType));
    return <>
        <div style={{
        marginBottom: 10
      }}>
          Alert Type:
          <Dropdown options={['error', 'info', 'question', 'warning']} onChange={onImageChange} />
          <Checkbox checked={withSound} onChange={() => toggleWithSound(!withSound)}>
            sound
          </Checkbox>
        </div>
        <Button onClick={handleOpenAlert}>Trigger Alert</Button>
        {showAlert && <Alert title="Windows Networking" type={type} message="The Windows password you typed is incorrect." closeAlert={handleCloseAlert} hasSound={withSound} buttons={[{
        value: 'OK',
        onClick: handleCloseAlert
      }]} />}
      </>;
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=0%3A1'
    }
  }
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const K=["Simple"];export{t as Simple,K as __namedExportsOrder,E as default};
//# sourceMappingURL=alert.stories-f12a8579.js.map

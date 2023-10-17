import{j as a,F as A,a as e}from"./index-828bd9af.js";import{r}from"./index-ebeaab24.js";import{A as g}from"./Alert-72072dc1.js";import{B as S}from"./Button-033dc69c.js";import{C as f}from"./Checkbox-cb3068d1.js";import{D as C}from"./Dropdown-11e6794b.js";import"./Write1-7fc0a614.js";import"./Modal-5ee6d940.js";import"./index-f50b85d6.js";import"./index-9c09ad76.js";import"./index-ab123da1.js";import"./Frame-f46249f2.js";import"./ModalContext-2b18b259.js";const E={title:"Alert",component:g,tags:["autodocs"]},t={render:()=>{const[d,n]=r.useState(!1),[o,p]=r.useState(!1),[m,h]=r.useState("error"),u=()=>n(!0),s=()=>n(!1);return a(A,{children:[a("div",{style:{marginBottom:10},children:["Alert Type:",e(C,{options:["error","info","question","warning"],onChange:w=>h(w.target.value)}),e(f,{checked:o,onChange:()=>p(!o),children:"sound"})]}),e(S,{onClick:u,children:"Trigger Alert"}),d&&e(g,{title:"Windows Networking",type:m,message:"The Windows password you typed is incorrect.",closeAlert:s,hasSound:o,buttons:[{value:"OK",onClick:s}]})]})},parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=0%3A1"}}};var i,l,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
//# sourceMappingURL=alert.stories-162f56f8.js.map

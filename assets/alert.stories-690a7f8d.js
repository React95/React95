import{j as a,F as A,a as e}from"./index-0559674c.js";import{r as o}from"./index-1b03fe98.js";import{A as g}from"./Alert-94802ef2.js";import{B as S}from"./Button-1674c104.js";import{C as f}from"./Checkbox-a6eb1760.js";import{D as C}from"./Dropdown-4d9e4f7e.js";import"./Write1-0f5c28b2.js";import"./Modal-8fadfb13.js";import"./index-f6b105ee.js";import"./index-6fd5a17b.js";import"./index-5d7a0789.js";import"./Frame-f3688d20.js";import"./ModalContext-69d2d970.js";const E={title:"Alert",component:g,tags:["autodocs"]},t={render:()=>{const[d,r]=o.useState(!1),[n,p]=o.useState(!1),[m,h]=o.useState("error"),u=()=>r(!0),s=()=>r(!1);return a(A,{children:[a("div",{style:{marginBottom:10},children:["Alert Type:",e(C,{options:["error","info","question","warning"],onChange:w=>h(w.target.value)}),e(f,{checked:n,onChange:()=>p(!n),children:"sound"})]}),e(S,{onClick:u,children:"Trigger Alert"}),d&&e(g,{title:"Windows Networking",type:m,message:"The Windows password you typed is incorrect.",closeAlert:s,hasSound:n,buttons:[{value:"OK",onClick:s}]})]})},parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=0%3A1"}}};var i,l,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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

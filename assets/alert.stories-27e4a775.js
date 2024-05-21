import{j as a,F as A,a as e}from"./jsx-runtime-e43ccb36.js";import{r as n}from"./index-1b03fe98.js";import{A as p}from"./Alert-b096ec4e.js";import{B as S}from"./Button-6f1fce6a.js";import{C}from"./Checkbox-837d2263.js";import{D as f}from"./Dropdown-dce5debc.js";import"./Write1-31d87498.js";import"./Modal-76db7b12.js";import"./index-f6b105ee.js";import"./index-6fd5a17b.js";import"./TitleBar-88cdf9a5.js";import"./Frame-07ea87a5.js";import"./index-7332eacf.js";import"./createRuntimeFn-62c9670f.esm-edc6fb2c.js";import"./Button.css-afb77755.js";import"./ModalContext-888db322.js";import"./help-4ccdb1ed.js";const _={title:"Alert",component:p,tags:["autodocs"]},t={render:()=>{const[d,r]=n.useState(!1),[o,g]=n.useState(!1),[m,u]=n.useState("error"),h=()=>r(!0),s=()=>r(!1);return a(A,{children:[a("div",{style:{marginBottom:10},children:["Alert Type:",e(f,{options:["error","info","question","warning"],onChange:w=>{u(w.currentTarget.value)}}),e(C,{checked:o,onChange:()=>g(!o),children:"sound"})]}),e(S,{onClick:h,children:"Trigger Alert"}),d&&e(p,{title:"Windows Networking",type:m,message:"The Windows password you typed is incorrect.",onClose:s,hasSound:o,buttons:[{value:"OK",onClick:s}]})]})},parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=0%3A1"}}};var i,l,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const [showAlert, toggleShowAlert] = React.useState(false);
    const [withSound, toggleWithSound] = React.useState(false);
    const [type, setType] = React.useState<AlertType>('error');
    const handleOpenAlert = () => toggleShowAlert(true);
    const handleCloseAlert = () => toggleShowAlert(false);
    const onImageChange = (e: React.FormEvent<HTMLSelectElement>) => {
      setType((e.currentTarget.value as AlertType));
    };
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
        {showAlert && <Alert title="Windows Networking" type={type} message="The Windows password you typed is incorrect." onClose={handleCloseAlert} hasSound={withSound} buttons={[{
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
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const Z=["Simple"];export{t as Simple,Z as __namedExportsOrder,_ as default};

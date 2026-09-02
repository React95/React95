import{j as e}from"./jsx-runtime-e5910377.js";import{T as l,a as r}from"./Tabs-3b9a0032.js";import{C as o}from"./Checkbox-cc7f8bfd.js";import{D as m}from"./Dropdown-448d8450.js";import{F as t}from"./Fieldset-8c79e49f.js";import{I as d}from"./Input-1747b4bf.js";import"./index-66a3a5c2.js";import"./index-626ba1ae.js";import"./createRuntimeFn-62c9670f.esm-edc6fb2c.js";import"./Frame-ad175eaa.js";/* empty css                                *//* empty css                                */import"./Input.css-d0a177e5.js";/* empty css                              */const v={title:"Tabs, Tab",component:l,tags:["autodocs"],subcomponents:{Tab:r}},i={render:()=>e.jsxs(l,{width:"350px",defaultActiveTab:"Compatibility",children:[e.jsxs(r,{title:"General",children:[e.jsxs(t,{legend:"Logon validation",style:{marginBottom:"1em"},children:[e.jsx(o,{readOnly:!0,checked:!0,children:"Log on to Windows NT domain"}),e.jsx("br",{}),e.jsx("p",{style:{marginLeft:22,marginTop:4},children:"When you log on, your password will be verified in a Windows NT domain."}),e.jsx("p",{style:{marginBottom:4,marginLeft:22},children:"Windows NT domain:"}),e.jsx(d,{style:{width:180,marginLeft:22}})]}),e.jsxs(t,{legend:"Network logon options",children:[e.jsx(o,{children:"Quick logon"}),e.jsx("p",{style:{marginBottom:4,marginLeft:22,marginTop:4},children:"Windows logs you onto the network, but network drives are not reconnected until you use them."}),e.jsx(o,{children:"Logon and restore network connections"}),e.jsx("p",{style:{marginBottom:4,marginLeft:22,marginTop:4},children:"When you log onto the network, Windows verifies that each network drive is ready to use."})]})]}),e.jsxs(r,{title:"Compatibility",children:[e.jsx("p",{style:{marginTop:0,marginBottom:"1.6em"},children:"If you have problems with this program and it worked correctly on an earlier version of Windows, select the compatibility mode that matches that earlier version."}),e.jsxs(t,{legend:"Compatibility mode",style:{marginBottom:"1.6em"},children:[e.jsx(o,{readOnly:!0,checked:!0,children:"Run this program in compatibility mode for:"}),e.jsx(m,{style:{width:200},options:["Windows 95"]})]}),e.jsxs(t,{legend:"Display Settings",children:[e.jsx(o,{children:"Run in 256 colors"}),e.jsx(o,{children:"Run in 640 x 480 screen resolution"}),e.jsx(o,{children:"Disable visual themes"})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("p",{children:["Learn more about"," ",e.jsx("a",{href:"https://react95.io",children:"program compatibility."})]})]})]}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A16"}}};var n,s,a;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <Tabs width="350px" defaultActiveTab="Compatibility">
      <Tab title="General">
        <Fieldset legend="Logon validation" style={{
        marginBottom: '1em'
      }}>
          <Checkbox readOnly checked>
            Log on to Windows NT domain
          </Checkbox>
          <br />
          <p style={{
          marginLeft: 22,
          marginTop: 4
        }}>
            When you log on, your password will be verified in a Windows NT
            domain.
          </p>
          <p style={{
          marginBottom: 4,
          marginLeft: 22
        }}>Windows NT domain:</p>
          <Input style={{
          width: 180,
          marginLeft: 22
        }} />
        </Fieldset>

        <Fieldset legend="Network logon options">
          <Checkbox>Quick logon</Checkbox>
          <p style={{
          marginBottom: 4,
          marginLeft: 22,
          marginTop: 4
        }}>
            Windows logs you onto the network, but network drives are not
            reconnected until you use them.
          </p>
          <Checkbox>Logon and restore network connections</Checkbox>
          <p style={{
          marginBottom: 4,
          marginLeft: 22,
          marginTop: 4
        }}>
            When you log onto the network, Windows verifies that each network
            drive is ready to use.
          </p>
        </Fieldset>
      </Tab>
      <Tab title="Compatibility">
        <p style={{
        marginTop: 0,
        marginBottom: '1.6em'
      }}>
          If you have problems with this program and it worked correctly on an
          earlier version of Windows, select the compatibility mode that matches
          that earlier version.
        </p>

        <Fieldset legend="Compatibility mode" style={{
        marginBottom: '1.6em'
      }}>
          <Checkbox readOnly checked>
            Run this program in compatibility mode for:
          </Checkbox>
          <Dropdown style={{
          width: 200
        }} options={['Windows 95']} />
        </Fieldset>

        <Fieldset legend="Display Settings">
          <Checkbox>Run in 256 colors</Checkbox>
          <Checkbox>Run in 640 x 480 screen resolution</Checkbox>
          <Checkbox>Disable visual themes</Checkbox>
        </Fieldset>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>
          Learn more about{' '}
          <a href="https://react95.io">program compatibility.</a>
        </p>
      </Tab>
    </Tabs>,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A16'
    }
  }
}`,...(a=(s=i.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const L=["Simple"];export{i as Simple,L as __namedExportsOrder,v as default};

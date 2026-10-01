import{j as e}from"./iframe-CUQ9NVYA.js";import{T as i,a as m}from"./Tabs-DCRB5MrB.js";import{C as n}from"./Checkbox-C1k7VZPN.js";/* empty css                              */import{D as l}from"./Dropdown-BG5NOMgw.js";import{F as o}from"./Fieldset-CCMHPCRQ.js";import{I as d}from"./Input-S9nvC5hV.js";import"./preload-helper-C1FmrZbK.js";import"./index-BMynro7A.js";import"./createRuntimeFn-62c9670f.esm-BkdTE7RR.js";import"./Frame-CPG3G6Fk.js";/* empty css                                *//* empty css                                */import"./Input.css-LNWrk-Sy.js";const v={title:"Tabs, Tab",component:m,tags:["autodocs"],subcomponents:{Tab:i}},t={render:()=>e.jsxs(m,{width:"350px",defaultActiveTab:"Compatibility",children:[e.jsxs(i,{title:"General",children:[e.jsxs(o,{legend:"Logon validation",style:{marginBottom:"1em"},children:[e.jsx(n,{readOnly:!0,checked:!0,children:"Log on to Windows NT domain"}),e.jsx("br",{}),e.jsx("p",{style:{marginLeft:22,marginTop:4},children:"When you log on, your password will be verified in a Windows NT domain."}),e.jsx("p",{style:{marginBottom:4,marginLeft:22},children:"Windows NT domain:"}),e.jsx(d,{style:{width:180,marginLeft:22}})]}),e.jsxs(o,{legend:"Network logon options",children:[e.jsx(n,{children:"Quick logon"}),e.jsx("p",{style:{marginBottom:4,marginLeft:22,marginTop:4},children:"Windows logs you onto the network, but network drives are not reconnected until you use them."}),e.jsx(n,{children:"Logon and restore network connections"}),e.jsx("p",{style:{marginBottom:4,marginLeft:22,marginTop:4},children:"When you log onto the network, Windows verifies that each network drive is ready to use."})]})]}),e.jsxs(i,{title:"Compatibility",children:[e.jsx("p",{style:{marginTop:0,marginBottom:"1.6em"},children:"If you have problems with this program and it worked correctly on an earlier version of Windows, select the compatibility mode that matches that earlier version."}),e.jsxs(o,{legend:"Compatibility mode",style:{marginBottom:"1.6em"},children:[e.jsx(n,{readOnly:!0,checked:!0,children:"Run this program in compatibility mode for:"}),e.jsx(l,{style:{width:200},options:["Windows 95"]})]}),e.jsxs(o,{legend:"Display Settings",children:[e.jsx(n,{children:"Run in 256 colors"}),e.jsx(n,{children:"Run in 640 x 480 screen resolution"}),e.jsx(n,{children:"Disable visual themes"})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("p",{children:["Learn more about"," ",e.jsx("a",{href:"https://react95.io",children:"program compatibility."})]})]})]}),parameters:{design:{type:"figma",url:"https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A16"}}},L=["Simple"];var r,s,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A16'
    }
  }
}`,...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};export{t as Simple,L as __namedExportsOrder,v as default};

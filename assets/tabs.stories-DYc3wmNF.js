import{j as e}from"./iframe-BJgbW1uk.js";import{T as i,a as d}from"./Tabs-ZrUjt8Vt.js";import{C as n}from"./Checkbox-vEKwWhu_.js";/* empty css                              */import{D as m}from"./Dropdown-BQ7GHv_L.js";import{F as t}from"./Fieldset-BwBmHO0M.js";import{I as c}from"./Input-Bs2vPE7r.js";const p={title:"Tabs, Tab",component:d,tags:["autodocs"],subcomponents:{Tab:i},args:{defaultActiveTab:"Compatibility"},argTypes:{defaultActiveTab:{control:"select",options:["General","Compatibility"]}}},o={render:r=>e.jsxs(d,{width:"350px",...r,children:[e.jsxs(i,{title:"General",children:[e.jsxs(t,{legend:"Logon validation",style:{marginBottom:"1em"},children:[e.jsx(n,{readOnly:!0,checked:!0,children:"Log on to Windows NT domain"}),e.jsx("br",{}),e.jsx("p",{style:{marginLeft:22,marginTop:4},children:"When you log on, your password will be verified in a Windows NT domain."}),e.jsx("p",{style:{marginBottom:4,marginLeft:22},children:"Windows NT domain:"}),e.jsx(c,{style:{width:180,marginLeft:22}})]}),e.jsxs(t,{legend:"Network logon options",children:[e.jsx(n,{children:"Quick logon"}),e.jsx("p",{style:{marginBottom:4,marginLeft:22,marginTop:4},children:"Windows logs you onto the network, but network drives are not reconnected until you use them."}),e.jsx(n,{children:"Logon and restore network connections"}),e.jsx("p",{style:{marginBottom:4,marginLeft:22,marginTop:4},children:"When you log onto the network, Windows verifies that each network drive is ready to use."})]})]}),e.jsxs(i,{title:"Compatibility",children:[e.jsx("p",{style:{marginTop:0,marginBottom:"1.6em"},children:"If you have problems with this program and it worked correctly on an earlier version of Windows, select the compatibility mode that matches that earlier version."}),e.jsxs(t,{legend:"Compatibility mode",style:{marginBottom:"1.6em"},children:[e.jsx(n,{readOnly:!0,checked:!0,children:"Run this program in compatibility mode for:"}),e.jsx(m,{style:{width:200},options:["Windows 95"]})]}),e.jsxs(t,{legend:"Display Settings",children:[e.jsx(n,{children:"Run in 256 colors"}),e.jsx(n,{children:"Run in 640 x 480 screen resolution"}),e.jsx(n,{children:"Disable visual themes"})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("p",{children:["Learn more about"," ",e.jsx("a",{href:"https://react95.io",children:"program compatibility."})]})]})]},r.defaultActiveTab),parameters:{design:{type:"figma",url:"https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A16"}}},h=["Simple"];var s,a,l;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args =>
  // \`defaultActiveTab\` is only read on mount, so a new value remounts Tabs
  <Tabs key={args.defaultActiveTab} width="350px" {...args}>
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
}`,...(l=(a=o.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const j=Object.freeze(Object.defineProperty({__proto__:null,Simple:o,__namedExportsOrder:h,default:p},Symbol.toStringTag,{value:"Module"}));export{j as T};

import{j as e}from"./iframe-BP1fKKyq.js";import{T as d,a as b}from"./Tabs-BiKUkflp.js";import{C as n}from"./Checkbox-BvhHgisT.js";/* empty css                              */import{D as x}from"./Dropdown-BMU1Hee0.js";import{F as r}from"./Fieldset-B0AUoW-e.js";import{I as u}from"./Input-Boer1S2-.js";const{expect:s}=__STORYBOOK_MODULE_TEST__,w={title:"Tabs, Tab",component:b,tags:["autodocs"],subcomponents:{Tab:d},args:{defaultActiveTab:"Compatibility"},argTypes:{defaultActiveTab:{control:"select",options:["General","Compatibility"]}}},t={render:o=>e.jsxs(b,{width:"350px",...o,children:[e.jsxs(d,{title:"General",children:[e.jsxs(r,{legend:"Logon validation",style:{marginBottom:"1em"},children:[e.jsx(n,{readOnly:!0,checked:!0,children:"Log on to Windows NT domain"}),e.jsx("br",{}),e.jsx("p",{style:{marginLeft:22,marginTop:4},children:"When you log on, your password will be verified in a Windows NT domain."}),e.jsx("p",{style:{marginBottom:4,marginLeft:22},children:"Windows NT domain:"}),e.jsx(u,{style:{width:180,marginLeft:22}})]}),e.jsxs(r,{legend:"Network logon options",children:[e.jsx(n,{children:"Quick logon"}),e.jsx("p",{style:{marginBottom:4,marginLeft:22,marginTop:4},children:"Windows logs you onto the network, but network drives are not reconnected until you use them."}),e.jsx(n,{children:"Logon and restore network connections"}),e.jsx("p",{style:{marginBottom:4,marginLeft:22,marginTop:4},children:"When you log onto the network, Windows verifies that each network drive is ready to use."})]})]}),e.jsxs(d,{title:"Compatibility",children:[e.jsx("p",{style:{marginTop:0,marginBottom:"1.6em"},children:"If you have problems with this program and it worked correctly on an earlier version of Windows, select the compatibility mode that matches that earlier version."}),e.jsxs(r,{legend:"Compatibility mode",style:{marginBottom:"1.6em"},children:[e.jsx(n,{readOnly:!0,checked:!0,children:"Run this program in compatibility mode for:"}),e.jsx(x,{style:{width:200},options:["Windows 95"]})]}),e.jsxs(r,{legend:"Display Settings",children:[e.jsx(n,{children:"Run in 256 colors"}),e.jsx(n,{children:"Run in 640 x 480 screen resolution"}),e.jsx(n,{children:"Disable visual themes"})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("p",{children:["Learn more about"," ",e.jsx("a",{href:"https://react95.io",children:"program compatibility."})]})]})]},o.defaultActiveTab),play:async({args:o,canvas:m,userEvent:y})=>{const i={General:"Logon validation",Compatibility:"Compatibility mode"},l=o.defaultActiveTab,c=l==="General"?"Compatibility":"General",a=m.getByRole("list").nextElementSibling;await s(a).toHaveTextContent(i[l]),await s(a).not.toHaveTextContent(i[c]),await y.click(m.getByText(c)),await s(a).toHaveTextContent(i[c]),await s(a).not.toHaveTextContent(i[l])},parameters:{design:{type:"figma",url:"https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A16"}}},f=["Simple"];var p,h,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    // a fieldset only one of the tabs has, to tell which content is shown
    const contentOf = {
      General: 'Logon validation',
      Compatibility: 'Compatibility mode'
    };
    const first = args.defaultActiveTab as keyof typeof contentOf;
    const other = first === 'General' ? 'Compatibility' : 'General';
    // the tabs are a list, and the active tab's content comes right after it
    const content = canvas.getByRole('list').nextElementSibling;

    // the tab from \`defaultActiveTab\` starts active, showing only its content
    await expect(content).toHaveTextContent(contentOf[first]);
    await expect(content).not.toHaveTextContent(contentOf[other]);
    await userEvent.click(canvas.getByText(other));

    // clicking another tab shows its content instead
    await expect(content).toHaveTextContent(contentOf[other]);
    await expect(content).not.toHaveTextContent(contentOf[first]);
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A16'
    }
  }
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const O=Object.freeze(Object.defineProperty({__proto__:null,Simple:t,__namedExportsOrder:f,default:w},Symbol.toStringTag,{value:"Module"}));export{O as T};

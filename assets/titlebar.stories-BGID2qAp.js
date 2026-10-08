import{j as e,a as l}from"./iframe-BP1fKKyq.js";import{S as w,D as f}from"./Write1-CE8UsuL2.js";import{T as a}from"./TitleBar-B13jGq_-.js";import{t as p}from"./theme-color-Bor3p02p.js";const{expect:c,within:m}=__STORYBOOK_MODULE_TEST__,S={title:"TitleBar",component:a,tags:["autodocs"],args:{active:!0,title:"UNKNOWN.EXE"},argTypes:{title:{control:"text"}}},r={render:t=>e.jsx(a,{width:"200px",...t}),play:async({args:t,canvas:o})=>{const n=o.getByText(t.title).parentElement;await c(n).toHaveStyle({backgroundColor:p(l.colors.headerBackground),color:p(l.colors.headerText)})},parameters:{design:{disabled:!0}}},i={args:{active:!1},render:t=>e.jsx(a,{width:"200px",...t}),play:async({args:t,canvas:o})=>{const n=o.getByText(t.title).parentElement;await c(n).toHaveStyle({backgroundColor:p(l.colors.headerNotActiveBackground),color:p(l.colors.headerNotActiveText)})}},s={args:{title:"untitled - Paint"},render:t=>e.jsx(a,{...t,icon:e.jsx(f,{variant:"16x16_4"}),width:"300px",children:e.jsxs(a.OptionsBox,{children:[e.jsx(a.Option,{as:"a",href:"https://github.com/React95/React95",children:e.jsx(w,{variant:"16x16_4"})}),e.jsx(a.Help,{}),e.jsx(a.Maximize,{}),e.jsx(a.Minimize,{}),e.jsx(a.Restore,{}),e.jsx(a.Close,{})]})}),play:async({args:t,canvas:o})=>{const n=o.getByText(t.title).parentElement;await c(n.querySelector(":scope > svg")).toBeInTheDocument();for(const b of["help","maximize","minimize","restore","close"])await c(m(n).getByRole("button",{name:b})).toBeEnabled();await c(m(n).getByRole("link")).toHaveAttribute("href","https://github.com/React95/React95")}},j=["Simple","Inactive","Complete"];var d,h,x;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <TitleBar width="200px" {...args} />,
  play: async ({
    args,
    canvas
  }) => {
    const titleBar = canvas.getByText(args.title).parentElement;

    // an active title bar uses the theme's header colors
    await expect(titleBar).toHaveStyle({
      backgroundColor: themeColor(contract.colors.headerBackground),
      color: themeColor(contract.colors.headerText)
    });
  },
  parameters: {
    design: {
      disabled: true
    }
  }
}`,...(x=(h=r.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var g,B,u;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    active: false
  },
  render: args => <TitleBar width="200px" {...args} />,
  play: async ({
    args,
    canvas
  }) => {
    const titleBar = canvas.getByText(args.title).parentElement;

    // an inactive one, the theme's colors for a header out of focus
    await expect(titleBar).toHaveStyle({
      backgroundColor: themeColor(contract.colors.headerNotActiveBackground),
      color: themeColor(contract.colors.headerNotActiveText)
    });
  }
}`,...(u=(B=i.parameters)==null?void 0:B.docs)==null?void 0:u.source}}};var T,y,v;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    title: 'untitled - Paint'
  },
  render: args => <TitleBar {...args} icon={<Doc variant="16x16_4" />} width="300px">
      <TitleBar.OptionsBox>
        <TitleBar.Option as="a" href="https://github.com/React95/React95">
          <Star variant="16x16_4" />
        </TitleBar.Option>
        <TitleBar.Help />
        <TitleBar.Maximize />
        <TitleBar.Minimize />
        <TitleBar.Restore />
        <TitleBar.Close />
      </TitleBar.OptionsBox>
    </TitleBar>,
  play: async ({
    args,
    canvas
  }) => {
    const titleBar = canvas.getByText(args.title).parentElement!;

    // the icon is shown next to the title (the options have icons too, so
    // only the bar's own children count)
    await expect(titleBar.querySelector(':scope > svg')).toBeInTheDocument();

    // the ready-made options are buttons named after what they do
    for (const option of ['help', 'maximize', 'minimize', 'restore', 'close']) {
      await expect(within(titleBar).getByRole('button', {
        name: option
      })).toBeEnabled();
    }

    // an option can also be a link (\`as="a"\`)
    await expect(within(titleBar).getByRole('link')).toHaveAttribute('href', 'https://github.com/React95/React95');
  }
}`,...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const C=Object.freeze(Object.defineProperty({__proto__:null,Complete:s,Inactive:i,Simple:r,__namedExportsOrder:j,default:S},Symbol.toStringTag,{value:"Module"}));export{C as T};

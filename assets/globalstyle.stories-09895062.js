import{r as e}from"./index-9fa1aa67.js";import{B as p}from"./Button-e77e23f5.js";import{D as E}from"./Dropdown-3ad1daf5.js";import{F as i}from"./Fieldset-d5757425.js";import{F as t}from"./Frame-d1abb87e.js";import{I as c}from"./Input-05301331.js";import{T as C}from"./TextArea-4342d364.js";import{c as v}from"./contract.css-23ce233e.js";import{u as T}from"./index-4fd03fd3.js";import{t as G}from"./all-e1407812.js";import"./index-923230fa.js";import"./Button.css-afb77755.js";/* empty css                                */import"./Input.css-f9ede444.js";/* empty css                              */const k=Object.keys(G),P={title:"GlobalStyle",tags:["autodocs"],parameters:{docs:{description:{component:`
The GlobalStyle component provides essential styling for React95 applications, including:

- **Fonts**: MS Sans Serif font family and React95 Video Numbers for authentic Windows 95 look
- **Scrollbars**: Custom styled scrollbars that match the Windows 95 aesthetic
- **Links**: Styled anchor tags with proper visited and hover states
- **CSS Reset**: Box-sizing and margin/padding normalization

## Installation & Usage

To use GlobalStyle in your project, import it in your main application file:

\`\`\`js
import '@react95/core/GlobalStyle';
import '@react95/core/themes/win95.css'; // Choose your preferred theme
\`\`\`

**Note**: GlobalStyle should be imported **before** any theme to ensure proper styling cascade.

## What GlobalStyle Provides

### 1. Typography
- Sets MS Sans Serif as the default font family
- Normalizes font sizes and weights

### 2. Scrollbars
- Custom webkit scrollbar styling
- Windows 95-style scrollbar tracks and thumbs
- Directional arrow buttons with proper styling

### 3. Base Styles
- CSS reset for consistent rendering
- Proper box-sizing for all elements
- Link styling that matches the Windows 95 theme

### 4. Global Normalization
- Removes default margins and padding
- Sets consistent font rendering
- Establishes proper color inheritance

## Theme Integration

GlobalStyle works with all React95 themes. The styles automatically adapt to the selected theme's color scheme through CSS custom properties defined in the theme contract.
        `}}}},n={render:(o,{speak:s})=>{const[q,m]=T(),[a,x]=e.useState("win95");return e.createElement(t,{p:"$20",maxWidth:"800px"},e.createElement("h1",null,"How to Use GlobalStyle"),e.createElement(t,{boxShadow:"$out",bgColor:"$material",p:"$16",mt:"$16"},e.createElement("h2",null,"1. Installation"),e.createElement("p",null,"GlobalStyle is included with @react95/core. No separate installation needed.")),e.createElement(t,{boxShadow:"$out",bgColor:"$material",p:"$16",mt:"$16"},e.createElement("h2",null,"2. Import in Your App"),e.createElement("p",null,"Add this import to your main application file (usually App.js or index.js):"),e.createElement(t,{display:"flex",gap:"$4"},e.createElement(c,{w:"100%",fontFamily:"monospace",maxWidth:"300px",value:"import '@react95/core/GlobalStyle';"}),e.createElement(p,{onClick:()=>{m("import '@react95/core/GlobalStyle';"),s("Copied GlobalStyle import to clipboard!")}},"Copy"))),e.createElement(t,{boxShadow:"$out",bgColor:"$material",p:"$16",mt:"$16"},e.createElement("h2",null,"3. Choose a Theme"),e.createElement("p",null,"Import a theme after GlobalStyle to complete the setup:"),e.createElement(t,null,e.createElement(i,{legend:"Select Theme"},e.createElement("p",null,"Choose a theme from the dropdown below. This will apply the selected theme's styles globally."),e.createElement(E,{value:a,onChange:F=>{const w=F.target.value;x(w)},options:k}),e.createElement("p",null,"After selecting a theme, import it in your main file to apply the styles."),e.createElement(t,{mt:"$8",display:"flex",gap:"$4"},e.createElement(c,{fontFamily:"monospace",w:"100%",maxWidth:"300px",value:`import '@react95/core/themes/${a}.css';`}),e.createElement(p,{onClick:()=>{m(`import '@react95/core/themes/${a}.css';`),s(`Copied ${a} theme import to clipboard!`)}},"Copy"))))),e.createElement(t,{boxShadow:"$out",bgColor:"$material",p:"$16",mt:"$16"},e.createElement("h2",null,"4. Complete Example"),e.createElement(C,{whiteSpace:"pre-line",rows:16,cols:50,fontFamily:"monospace"},`// App.js
import '@react95/core/GlobalStyle';
import '@react95/core/themes/win95.css';
import { Button, Frame } from '@react95/core';

function App() {
  return (
    <Frame>
      <h1>My React95 App</h1>
      <Button>Click me!</Button>
    </Frame>
  );
}

export default App;`)),e.createElement(t,{boxShadow:"$out",bgColor:"$material",p:"$16",mt:"$16"},e.createElement("h2",null,"5. Important Notes"),e.createElement(t,{as:"ul",pl:"$20"},e.createElement("li",null,"Always import GlobalStyle before any theme"),e.createElement("li",null,"Only import GlobalStyle once in your application"),e.createElement("li",null,"GlobalStyle affects the entire document, not just React95 components"),e.createElement("li",null,"You can override specific styles if needed using CSS specificity"))))},parameters:{docs:{description:{story:`
This story provides step-by-step instructions for implementing GlobalStyle in your React95 application.
Follow these steps to ensure proper styling and the authentic Windows 95 experience.
        `}}}},l={render:()=>e.createElement(t,{maxWidth:"600px"},e.createElement(t,{mb:"$16"},e.createElement("p",null,"This demo shows how GlobalStyle affects various elements throughout your application. The styles are automatically applied globally when you import GlobalStyle.")),e.createElement(t,{boxShadow:"$out",bgColor:"$material",p:"$20"},e.createElement(i,{legend:"Typography"},e.createElement(t,{as:"p",mb:"$12"},"This text uses the MS Sans Serif font family provided by GlobalStyle. It includes proper font weights and spacing."),e.createElement("p",null,e.createElement("strong",null,"Bold text")," and ",e.createElement("em",null,"italic text")," are also properly styled.")),e.createElement(i,{legend:"Links",mt:"$18"},e.createElement("p",null,e.createElement("a",{href:"#",onClick:o=>o.preventDefault()},"This is a normal link")),e.createElement(t,{as:"p",mt:"$8"},e.createElement("a",{href:"#",onClick:o=>o.preventDefault(),style:{color:v.colors.anchorVisited}},"This simulates a visited link"))),e.createElement(i,{legend:"Scrollable Content",mt:"$18"},e.createElement(t,{h:"150px",overflow:"auto",bgColor:"$inputBackground",p:"$8",boxShadow:"$in"},e.createElement("p",null,"This container demonstrates the custom scrollbar styling provided by GlobalStyle. The scrollbars have a Windows 95 aesthetic with proper track, thumb, and button styling."),e.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),e.createElement("p",null,"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),e.createElement("p",null,"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."),e.createElement("p",null,"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.")))))},r={render:()=>e.createElement(t,{p:"$20",maxWidth:"800px"},e.createElement("h1",null,"Font Families in GlobalStyle"),e.createElement(t,{boxShadow:"$out",bgColor:"$material",p:"$16",mt:"$16"},e.createElement("h2",null,"MS Sans Serif (Default)"),e.createElement("p",null,"This is the main font family used throughout React95 components. It provides the authentic Windows 95 look and feel."),e.createElement(t,{mt:"$12",display:"flex",flexDirection:"column",gap:"$8"},e.createElement(t,{fontSize:"16px"},e.createElement("p",null,"Larger text (16px)")),e.createElement(t,{fontSize:"12px"},e.createElement("p",null,"Standard text (12px)")),e.createElement(t,{fontSize:"10px"},e.createElement("p",null,"Small text (10px)")))),e.createElement(t,{boxShadow:"$out",bgColor:"$material",p:"$16",mt:"$16"},e.createElement("h2",null,"React95Video-Numbers"),e.createElement("p",null,"The React95Video-Numbers font was specifically designed for use in the Video component but feel free to use it anywhere you want."),e.createElement(t,{mt:"$12",fontFamily:"React95Video-Numbers, monospace",fontSize:"24px",bgColor:"$canvas",color:"$canvasText",p:"$8",textAlign:"center",boxShadow:"$in"},"01234567890"),e.createElement(t,{mt:"$8",fontSize:"12px"},e.createElement("p",null,"Perfect for creating retro digital displays, counters, and terminal-like interfaces."))),e.createElement(t,{boxShadow:"$out",bgColor:"$material",p:"$16",mt:"$16"},e.createElement("h2",null,"Font Weights"),e.createElement(t,null,e.createElement(t,{fontWeight:"normal"},e.createElement("p",null,"Normal weight text")),e.createElement(t,{fontWeight:"bold"},e.createElement("p",null,"Bold weight text")),e.createElement("p",null,e.createElement("strong",null,"Strong element (bold)")),e.createElement("p",null,e.createElement("em",null,"Emphasized element (italic)")))))};var u,d,h;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: (_, {
    speak
  }) => {
    const [__, copyToClipboard] = useCopyToClipboard();
    const [selectedTheme, setSelectedTheme] = React.useState('win95');
    return <Frame p="$20" maxWidth="800px">
        <h1>How to Use GlobalStyle</h1>

        <Frame boxShadow="$out" bgColor="$material" p="$16" mt="$16">
          <h2>1. Installation</h2>
          <p>
            GlobalStyle is included with @react95/core. No separate installation
            needed.
          </p>
        </Frame>

        <Frame boxShadow="$out" bgColor="$material" p="$16" mt="$16">
          <h2>2. Import in Your App</h2>
          <p>
            Add this import to your main application file (usually App.js or
            index.js):
          </p>

          <Frame display={'flex'} gap="$4">
            <Input w="100%" fontFamily="monospace" maxWidth={'300px'} value="import '@react95/core/GlobalStyle';" />
            <Button onClick={() => {
            copyToClipboard("import '@react95/core/GlobalStyle';");
            speak('Copied GlobalStyle import to clipboard!');
          }}>
              Copy
            </Button>
          </Frame>
        </Frame>

        <Frame boxShadow="$out" bgColor="$material" p="$16" mt="$16">
          <h2>3. Choose a Theme</h2>
          <p>Import a theme after GlobalStyle to complete the setup:</p>

          <Frame>
            <Fieldset legend="Select Theme">
              <p>
                Choose a theme from the dropdown below. This will apply the
                selected theme's styles globally.
              </p>
              <Dropdown value={selectedTheme} onChange={e => {
              const theme = (e.target as HTMLSelectElement).value;
              setSelectedTheme(theme);
            }} options={availableThemes} />
              <p>
                After selecting a theme, import it in your main file to apply
                the styles.
              </p>
              <Frame mt="$8" display="flex" gap="$4">
                <Input fontFamily="monospace" w="100%" maxWidth={'300px'} value={\`import '@react95/core/themes/\${selectedTheme}.css';\`} />
                <Button onClick={() => {
                copyToClipboard(\`import '@react95/core/themes/\${selectedTheme}.css';\`);
                speak(\`Copied \${selectedTheme} theme import to clipboard!\`);
              }}>
                  Copy
                </Button>
              </Frame>
            </Fieldset>
          </Frame>
        </Frame>

        <Frame boxShadow="$out" bgColor="$material" p="$16" mt="$16">
          <h2>4. Complete Example</h2>
          <TextArea whiteSpace="pre-line" rows={16} cols={50} fontFamily="monospace">
            {\`// App.js
import '@react95/core/GlobalStyle';
import '@react95/core/themes/win95.css';
import { Button, Frame } from '@react95/core';

function App() {
  return (
    <Frame>
      <h1>My React95 App</h1>
      <Button>Click me!</Button>
    </Frame>
  );
}

export default App;\`}
          </TextArea>
        </Frame>

        <Frame boxShadow="$out" bgColor="$material" p="$16" mt="$16">
          <h2>5. Important Notes</h2>
          <Frame as="ul" pl="$20">
            <li>Always import GlobalStyle before any theme</li>
            <li>Only import GlobalStyle once in your application</li>
            <li>
              GlobalStyle affects the entire document, not just React95
              components
            </li>
            <li>
              You can override specific styles if needed using CSS specificity
            </li>
          </Frame>
        </Frame>
      </Frame>;
  },
  parameters: {
    docs: {
      description: {
        story: \`
This story provides step-by-step instructions for implementing GlobalStyle in your React95 application.
Follow these steps to ensure proper styling and the authentic Windows 95 experience.
        \`
      }
    }
  }
}`,...(h=(d=n.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var y,b,f;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    return <Frame maxWidth="600px">
        <Frame mb="$16">
          <p>
            This demo shows how GlobalStyle affects various elements throughout
            your application. The styles are automatically applied globally when
            you import GlobalStyle.
          </p>
        </Frame>

        <Frame boxShadow="$out" bgColor="$material" p="$20">
          <Fieldset legend="Typography">
            <Frame as="p" mb="$12">
              This text uses the MS Sans Serif font family provided by
              GlobalStyle. It includes proper font weights and spacing.
            </Frame>
            <p>
              <strong>Bold text</strong> and <em>italic text</em> are also
              properly styled.
            </p>
          </Fieldset>

          <Fieldset legend="Links" mt="$18">
            <p>
              <a href="#" onClick={e => e.preventDefault()}>
                This is a normal link
              </a>
            </p>
            <Frame as="p" mt="$8">
              <a href="#" onClick={e => e.preventDefault()} style={{
              color: contract.colors.anchorVisited
            }}>
                This simulates a visited link
              </a>
            </Frame>
          </Fieldset>

          <Fieldset legend="Scrollable Content" mt="$18">
            <Frame h="150px" overflow="auto" bgColor="$inputBackground" p="$8" boxShadow="$in">
              <p>
                This container demonstrates the custom scrollbar styling
                provided by GlobalStyle. The scrollbars have a Windows 95
                aesthetic with proper track, thumb, and button styling.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt.
              </p>
            </Frame>
          </Fieldset>
        </Frame>
      </Frame>;
  }
}`,...(f=(b=l.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var g,S,$;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    return <Frame p="$20" maxWidth="800px">
        <h1>Font Families in GlobalStyle</h1>

        <Frame boxShadow="$out" bgColor="$material" p="$16" mt="$16">
          <h2>MS Sans Serif (Default)</h2>
          <p>
            This is the main font family used throughout React95 components. It
            provides the authentic Windows 95 look and feel.
          </p>
          <Frame mt="$12" display="flex" flexDirection="column" gap="$8">
            <Frame fontSize="16px">
              <p>Larger text (16px)</p>
            </Frame>
            <Frame fontSize="12px">
              <p>Standard text (12px)</p>
            </Frame>
            <Frame fontSize="10px">
              <p>Small text (10px)</p>
            </Frame>
          </Frame>
        </Frame>

        <Frame boxShadow="$out" bgColor="$material" p="$16" mt="$16">
          <h2>React95Video-Numbers</h2>
          <p>
            The React95Video-Numbers font was specifically designed for use in
            the Video component but feel free to use it anywhere you want.
          </p>
          <Frame mt="$12" fontFamily="React95Video-Numbers, monospace" fontSize="24px" bgColor="$canvas" color="$canvasText" p="$8" textAlign="center" boxShadow="$in">
            01234567890
          </Frame>
          <Frame mt="$8" fontSize="12px">
            <p>
              Perfect for creating retro digital displays, counters, and
              terminal-like interfaces.
            </p>
          </Frame>
        </Frame>

        <Frame boxShadow="$out" bgColor="$material" p="$16" mt="$16">
          <h2>Font Weights</h2>
          <Frame>
            <Frame fontWeight="normal">
              <p>Normal weight text</p>
            </Frame>
            <Frame fontWeight="bold">
              <p>Bold weight text</p>
            </Frame>
            <p>
              <strong>Strong element (bold)</strong>
            </p>
            <p>
              <em>Emphasized element (italic)</em>
            </p>
          </Frame>
        </Frame>
      </Frame>;
  }
}`,...($=(S=r.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};const Y=["UsageInstructions","Overview","FontsDemo"];export{r as FontsDemo,l as Overview,n as UsageInstructions,Y as __namedExportsOrder,P as default};

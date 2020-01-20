import React from "react";
import { GlobalStyle, React95ThemeProvider } from "../../components";

const Frame = storyFn => (
  <React95ThemeProvider>
    <div style={{ padding: 10 }}>
      <GlobalStyle />
      {storyFn()}
    </div>
  </React95ThemeProvider>
);

export default Frame;

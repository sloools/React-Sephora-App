import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Box } from "@mui/material";
import { createGuiTheme } from "@gsretail.com/gui-core";

// 커스텀 컬러셋, 미사용시 default 적용
import customColor from "./customColor.ts";

// 공통 테마
const guiTheme = createGuiTheme(customColor);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={guiTheme}>
      <CssBaseline />
      <Box p={2}>
        <App />
      </Box>
    </ThemeProvider>
  </StrictMode>,
  rootElement
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { extendTheme } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from "react-router-dom";
import ChatProvider from "./Context/ChatProvider.jsx";

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}
const theme = extendTheme({ colors })


createRoot(document.getElementById("root")).render(
    <BrowserRouter>
  <ChatProvider>
      <ChakraProvider  theme={theme}>
        <App />
      </ChakraProvider>
  </ChatProvider>
    </BrowserRouter>
);

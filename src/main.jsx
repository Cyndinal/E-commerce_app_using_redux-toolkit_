import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Provider} from "react-redux";
import store from "./store.js";
import App from './App.jsx'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import StoreCart from "./Store-Cart.jsx";





createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={store}>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<App/>}/>
                  <Route path="/cart" element={<StoreCart/>}/>
              </Routes>
          </BrowserRouter>

      </Provider>

  </StrictMode>,
)

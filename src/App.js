import "./App.css";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './views/Home'
import Noticias from './views/Noticias'
import InfoNoticia from './views/InfoNoticia'
import ListadoNoticias from "./views/ListadoNoticias";

function App() {
  return (
    <>
      <NextUIProvider>
        <div className="App">
            <Router>
              <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/listado-noticias" element={<ListadoNoticias/>}></Route>
                <Route path="/noticias" element={<Noticias/>}></Route>
                <Route path="/info-noticia" element={<InfoNoticia/>}></Route>
              </Routes>
            </Router>
        </div>
      </NextUIProvider>
    </>
  );
}

export default App;

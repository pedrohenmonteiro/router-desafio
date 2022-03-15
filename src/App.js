import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Produtos from "./components/Produtos/Produtos";
import Header from "./components/Header/Header";
import Contato from "./components/Contato/Contato";
import Produto from "./components/Produto/Produto";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Produtos />}></Route>
          <Route path="contato" element={<Contato />} />]
          <Route path="produto/:id" element={<Produto />} />]
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

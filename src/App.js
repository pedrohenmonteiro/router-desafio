import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Produtos from "./components/Produtos/Produtos";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route to="/" element={<Produtos />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

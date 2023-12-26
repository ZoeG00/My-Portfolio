import Rutas from "./components/routes/rutas";
import Menu from "./components/Menu";

import "./App.css";

import { HashRouter } from "react-router-dom";
function App() {
  return (
    <>
      <HashRouter>
        <Rutas />
        <Menu />
      </HashRouter>
    </>
  );
}

export default App;

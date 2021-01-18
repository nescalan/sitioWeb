// import Libraries
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import Styles and Images
import "./App.css";

// import Components
import Navbar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";
import Productos from "./pages/Productos";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/Navbar" component={Navbar} />
        <Route exact path="/Nosotros" component={Nosotros} />
        <Route exact path="/Productos" component={Productos} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

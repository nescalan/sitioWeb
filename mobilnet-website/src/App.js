// import Libraries
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import Styles and Images
import "./App.css";

// import Components
import Inicio from "./pages/Inicio";
import Layout from "./components/Layout";
import Nosotros from "./pages/Nosotros";
import NotFound from "./components/NotFound";
import Productos from "./pages/Productos";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/Nosotros" component={Nosotros} />
          <Route exact path="/Productos" component={Productos} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

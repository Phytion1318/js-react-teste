
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Clients from "./pages/Clients"
import Navbar from "./components/Navbar";

import Home from "./pages/Home"

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path="/clientes" component={Clients}/>
        <Route path="/" component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

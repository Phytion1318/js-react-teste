
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Clients from "./pages/Clients"
import Products from "./pages/Products"
import Home from "./pages/Home"
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path="/clientes" component={Clients}/>
        <Route path="/produtos" component={Products}/>
        <Route path="/" component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

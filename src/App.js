
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home"

function App() {
  return (
    <BrowserRouter>


      <Switch>
      <Route path="/" component={Home}/>
      <Route path="/contatos" component={Contacts}/>

      </Switch>
    </BrowserRouter>
  );
}

export default App;

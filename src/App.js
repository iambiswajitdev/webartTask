import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./assets/css/style.css";
import "./assets/css/responcive.css";
import Header from "./components/header";
import Home from "./components/home";
import NavigationBar from "./components/navigationBar";
import TopBar from "./components/topBar";
import Shop from "./pages/shop";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopBar />
        <Header />
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

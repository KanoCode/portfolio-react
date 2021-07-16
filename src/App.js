import GlobalStyle from "./globalStyles";
import AboutMe from "./components/AboutME";
import NavBar from "./components/NavBar";
//portfolio
import Portfolio from "./pages/Portfolio";
//Contact Page
import Contact from "./pages/Contact";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <GlobalStyle />

      <Switch>
        <Route path="/" exact>
          <AboutMe />
        </Route>

        <Route path="/portfolio">
          <Portfolio />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

import GlobalStyle from "./globalStyles";
import AboutMe from "./components/AboutME";
import NavBar from "./components/NavBar";
import styled from "styled-components";
import MoreInfo from "./components/MoreAbout";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <GlobalStyle />

      <Switch>
        <Route path="/">
          <AboutMe />
        </Route>
        <Route path="./MoreInfo">
          <MoreInfo />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

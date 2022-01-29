import * as React from "react";
import AboutMe from "./components/pages/AboutMe"
import Portfolio from "./components/pages/Portfolio"
import Contact from "./components/pages/Contact"
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main-Page/main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <Switch>
      <Route path = "/about-me" exact>
          <AboutMe></AboutMe>
        </Route>
        <Route path = "/contact" exact>
          <Contact></Contact>
        </Route>
        <Route path = "/portfolio" exact>
          <Portfolio></Portfolio>
        </Route>
        <Route path = "/">
          <Main></Main>
        </Route>
      </Switch>
      <Footer></Footer>
      {/* <Button variant="contained">Hello World</Button> */}
    </>
  );
}
export default App;

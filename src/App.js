import * as React from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";
import Header from "./components/Header/Header";
import Main from "./components/Main-Page/main";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
      {/* <Button variant="contained">Hello World</Button> */}
    </>
  );
}
export default App;

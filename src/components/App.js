import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Nav from "./Nav/Nav";

const App = () => {
  return (
    <>
      <div className="wrapper">
        <Nav />
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
};
export default App;

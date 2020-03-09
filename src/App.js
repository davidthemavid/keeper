import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import "./styles/styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Note />
      <Note />
      <Footer />
    </div>
  );
}

export default App;

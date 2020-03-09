import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import "./styles/styles.css";

const notes = [
  {
    key: 1,
    title: "Delegation",
    content:
      "Q. How many programmers does it take to change a light bulb? A. None – It’s a hardware problem"
  },
  {
    key: 2,
    title: "Loops",
    content:
      "How to keep a programmer in the shower forever. Show him the shampoo bottle instructions: Lather. Rinse. Repeat."
  },
  {
    key: 3,
    title: "Arrays",
    content:
      "Q. Why did the programmer quit his job? A. Because he didn't get arrays."
  },
  {
    key: 4,
    title: "Hardware vs. Software",
    content:
      "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."
  },
  {
    key: 5,
    title: "Test",
    content: "I am a test."
  }
];

let getDate = () => {
  let noteDay = new Date().getDate();
  let noteMonth = new Date().getMonth() + 1;
  let date = noteMonth + "/" + noteDay;
  return date;
};

let date = getDate();
let currentYear = new Date().getFullYear();

let newNote = notes.map(item => (
  <Note key={item.key} title={item.title} content={item.content} date={date} />
));

function App() {
  return (
    <div className="App">
      <Header />
      {newNote}
      <Footer year={currentYear} />
    </div>
  );
}

export default App;

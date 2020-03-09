import React from "react";

let getDate = () => {
  let noteDay = new Date().getDate();
  let noteMonth = new Date().getMonth() + 1;
  let date = noteMonth + "/" + noteDay;
  return date;
};

let date = getDate();

export default function Note(props) {
  return (
    <div className="note">
      <h1 className="note__title">{props.title}</h1>
      <p className="noteDate">{date}</p>
      <p>{props.content}</p>
    </div>
  );
}

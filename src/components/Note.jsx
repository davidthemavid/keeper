import React from "react";

const getDate = () => {
  const noteDay = new Date().getDay() + 1;
  const noteMonth = new Date().getMonth() + 1;
  const date = noteDay + "/" + noteMonth;
  console.log(noteDay);
  return date;
};

let date = getDate();
console.log(date);

export default function Note(props) {
  //console.log(props);

  return (
    <div className="note">
      <h1 className="note__title">{props.title}</h1>
      <p className="noteDate">{date}</p>
      <p>{props.content}</p>
    </div>
  );
}

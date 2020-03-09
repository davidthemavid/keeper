import React from "react";

const getDate = () => {
  const noteDay = new Date().getDay() + 1;
  const noteMonth = new Date().getMonth() + 1;
  const date = noteDay + "/" + noteMonth;
  return date;
};

let date = getDate();

export default function Note() {
  return (
    <div className="note">
      <h1 className="note__title">Note Title</h1>
      <p className="noteDate">{date}</p>
      <p>content</p>
    </div>
  );
}

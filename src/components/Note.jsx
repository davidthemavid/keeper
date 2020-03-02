import React from "react";

const noteDay = new Date().getDay() + 1;
const noteMonth = new Date().getMonth() + 1;

export default function Note() {
  return (
    <div className="note">
      <h1 className="note__title">Note Title</h1>
      <p className="noteDate">
        {noteDay}/{noteMonth}
      </p>
      <p>content</p>
    </div>
  );
}

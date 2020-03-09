import React from "react";

export default function Note(props) {
  return (
    <div className="note">
      <h1 className="note__title">{props.title}</h1>
      <p className="noteDate">{props.date}</p>
      <p>{props.content}</p>
    </div>
  );
}

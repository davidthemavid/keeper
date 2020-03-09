import React from "react";

export default function Footer(props) {
  return (
    <div>
      <footer>
        <p>Copyright {props.year} &copy;</p>
      </footer>
    </div>
  );
}

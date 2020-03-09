import React from "react";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <div>
      <footer>
        <p>Copyright {currentYear} &copy;</p>
      </footer>
    </div>
  );
}

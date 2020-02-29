import React from "react";

const currentYear = new Date().getFullYear();

console.log("hi");

export default function Footer() {
  return (
    <div>
      <footer>
        <p>Copyright {currentYear} &copy;</p>
      </footer>
    </div>
  );
}

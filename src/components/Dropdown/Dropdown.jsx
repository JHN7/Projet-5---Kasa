import { useState } from "react";
import "./Dropdown.sass";

function Dropdown({ title, items, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`dropdown ${isOpen ? "open" : ""}`}>
      <div className="dropdown-header">
        <h3>{title}</h3>
        <i
          className={`fa-solid fa-chevron-up chevron ${
            isOpen ? "rotated" : ""
          }`}
          onClick={() => setIsOpen(!isOpen)}
        ></i>
      </div>

      <div className="dropdown-content">
        {isOpen && (
          <>
            {items
              ? items.map((item, index) => <p key={index}>{item}</p>)
              : children}
          </>
        )}
      </div>
    </div>
  );
}

export default Dropdown;

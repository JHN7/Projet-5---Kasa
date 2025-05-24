import { useState } from "react";
import "./Dropdown.sass";

//Composant dropdown : affiche liste avec un titre
function Dropdown({ title, items, children }) {

  // État pour contrôler l'ouverture ou la fermeture du dropdown
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`dropdown ${isOpen ? "open" : ""}`}>
      {/* En-tête du dropdown avec le titre et l'icône cliquable */}
      <div className="dropdown-header">
        <h3>{title}</h3>
        {/* Icône de chevron, qui pivote selon l'état du menu */}
        <i
          className={`fa-solid fa-chevron-up chevron ${
            isOpen ? "rotated" : ""
          }`}
          onClick={() => setIsOpen(!isOpen)} //Inverse l'était ouvert / fermé au clic
        ></i>
      </div>


      {/* Contenu du dropdown affiché uniquement si isOpen est vrai */}
      <div className="dropdown-content">
        {isOpen && (
          <>
          {/* Si items est fourni, les afficher sous forme de paragraphes, sinon afficher les children. Children utilisé pour à propos */}
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

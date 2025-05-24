import "./Host.sass";

// Composant qui affiche les informations de l'hôte : nom complet et photo
function Host({ name, picture }) {
    // Séparation du nom complet en prénom et nom de famille
    const [firstName, lastName] = name.split(" ");

    return (
        <div className="host">
            {/* Affichage du prénom et du nom de l'hôte dans un span */}
            <div className="host-name">
                <span>{firstName}</span>
                <span>{lastName}</span>
            </div>

            {/* Affichage de la photo de l'hôte avec l'attribut alt pour l'accessibilité */}
            <img className="host-picture" src={picture} alt={name} />
        </div>
    );
}

export default Host;

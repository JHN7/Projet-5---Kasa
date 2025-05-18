import "./Host.sass";

function Host({ name, picture }) {
    const [firstName, lastName] = name.split(" ");

    return (
        <div className="host">
            <div className="host-name">
                <span>{firstName}</span>
                <span>{lastName}</span>
            </div>
            <img className="host-picture" src={picture} alt={name} />
        </div>
    );
}

export default Host;

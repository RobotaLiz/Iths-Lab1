


function Consoles(props) {
    return (
        <div>
            <p className="titelconsole">Consol</p>
            <ul className="game-list">
                {props.AllConsoles.map((console, index) => (
                    <li className="game-item" key={index}>
                        <img 
                            className="game-image" 
                            src={console.image} 
                            alt={console.name} 
                        />
                        <span className="game-name">{console.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Consoles;

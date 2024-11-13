function Games(props) {


    return (
        <div>
           <p className="titelconsole">Games</p>
            <ul className="game-list">
                {props.AllGames.map((game, index) => (
                    <li className="game-item" key={index}>
                        <img 
                            className="game-image" 
                            src={game.image} 
                            alt={game.name} 
                        />
                        <span className="game-name">{game.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export  default Games
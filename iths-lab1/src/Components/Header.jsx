
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header>
      <h1 className="title">Game Store</h1>
      <nav>
        <Link to="/" className="link">About</Link>
        <Link to="/consoles" className="link">Consoles</Link>
        <Link to="/games" className="link">Games</Link>
      </nav>
    </header>
  );
};

export default Header;

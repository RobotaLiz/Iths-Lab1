
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header>
      <h1 className="title">My Game Store</h1>
      <nav>
        <Link to="/consoles" className="link">Consoles</Link>
        <Link to="/games" className="link">Games</Link>
      </nav>
    </header>
  );
};

export default Header;

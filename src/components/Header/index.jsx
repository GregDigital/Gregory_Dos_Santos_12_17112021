import { Link } from 'react-router-dom';
import Logo from "../Logo"

const Header = () => {
    return (
        <header className="header">
       <Logo />
        <nav className="horizontalBar">
            <Link to="/">Accueil</Link>
            <Link to="/">Profil</Link>
            <Link to="/">Réglage</Link>
            <Link to="/">Communauté</Link>
        </nav>
     
        </header>
        
         
           
    );
};

export default Header;
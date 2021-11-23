import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="error">
            <h1>OoOoh 🧐 Cette page <span>n'existe pas</span> ! </h1>
            <Link to="/">Accueil</Link>
        </div>
    );
};

export default Error;
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Bienvenue sur <span>SportSee</span></h1>
      <Link className="user" to="/user/12">User 12</Link>
      <Link className="user" to="/user/18">User 18</Link>
    </div>
  );
};

export default Home;
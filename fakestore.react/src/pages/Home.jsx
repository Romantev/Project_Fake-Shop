import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Nav />
      <main>
        <h1>Willkommen beim coolsten Store!</h1>
        <Link className="link-store" to="/store">
          Zum Store
        </Link>
      </main>
    </>
  );
};

export default Home;

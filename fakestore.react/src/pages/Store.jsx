import "./Store.css";
import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";

const Store = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log("Fehler: ", error));
  }, []);

  return (
    <>
      <Nav />

      {data ? (
        <main className="store">
          {data.map((elm, index) => {
            return (
              <div key={index}>
                <h4>{elm.rating.rate}</h4>
                <div className="image-box">
                  <img src={elm.image} alt={elm.title} />
                </div>
                <h2>{elm.title}</h2>
                <h3>{elm.price} €</h3>
                <Link className="link-article" to={`/detail/${elm.id}`}>
                  Zum Artikel
                </Link>
              </div>
            );
          })}
        </main>
      ) : (
        <h1>Daten werden geladen!</h1>
      )}
    </>
  );
};

export default Store;

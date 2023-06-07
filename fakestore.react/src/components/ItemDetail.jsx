import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./ItemDetails.css";
import Nav from "./Nav";

const ItemDetail = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log("Fehler: ", error));
  }, []);

  const idParams = useParams();

  const dataItems = data?.filter((elm) => {
    return elm.id.toString() === idParams.id;
  });

  return (
    <>
      <Nav />
      {data ? (
        <main className="item-details">
          <section>
            <img src={dataItems[0].image} alt="" />
            <h1>{dataItems[0].title}</h1>
            <h2>{dataItems[0].description}</h2>
            <h3>{dataItems[0].price}€</h3>
            <h4></h4>
          </section>
        </main>
      ) : (
        <h1>Daten werden geladen!</h1>
      )}
    </>
  );
};

export default ItemDetail;

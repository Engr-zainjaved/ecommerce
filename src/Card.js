import "./Card.css"
import React, { useContext } from "react";
import { MyContext } from "./App";


function Card({ item }) {
  const { productId, productTitle, productPrice, productLink, productLink2 } = item

  const { cart, setCart } = useContext(MyContext);

  return (
    <div className="text-center border d-inline-block rounded-3 p-3 m-2 shadow-sm"
      style={{ width: '300px', height: '300px'}}>

      <div className="container"
      style={{display: "flex", justifyContent: "center"}}
      >
        <img src={`${productLink}`} alt="image1" id="img1" />
        <img src={`${productLink2}`} alt="image2" id="img2" />
      </div>

      <div >
        <h5 >{productTitle}</h5>
        <p >{productPrice}</p>
        <a className={`btn ${cart.find((item) => item.productId === productId) ? "btn-info" : "btn-primary"}`} onClick={() => {
          if (!cart.find((item) => item.productId === productId)) {
            setCart((cart) => [{ ...item, quantity: 1 }, ...cart])
          }
        }}>{cart.find((item) => item.productId === productId) ? "Added" : "Add to Cart"}</a>
      </div>

    </div>
  );
}

export default Card; 
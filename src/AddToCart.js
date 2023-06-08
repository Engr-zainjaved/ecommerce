import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "./App";

const AddToCart = () => {
    const { cart } = useContext(MyContext);
    const navigate = useNavigate()

    return (
        <div style={{ float: "right", margin: "10px", padding: "10px" }} onClick={() => {

            if (![null, "null", undefined, "undefined"].includes(localStorage.getItem("user"))) {

                navigate('/cart')
            } else {
                navigate('/login')
            }
        }}>
            <img
                className="image-container"
                style={{ width: '40px', height: 'auto', display: "flex", alignItems: "end" }}
                src="https://cdn-icons-png.flaticon.com/512/7640/7640465.png "
                alt="add to cart logo"
            />
            <span className="count">{cart.length}</span>
        </div>
    );
}

export default AddToCart;
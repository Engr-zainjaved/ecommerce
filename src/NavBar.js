import React from "react";
import AddToCart from "./AddToCart";
import Logo from "./Logo";

const NavBar = () => {
    return (
        <div style={
            {
                backgroundColor: "#F5F5F5",
            }
        }>
            <Logo />
            <AddToCart />
        </div>
    );
}

export default NavBar;
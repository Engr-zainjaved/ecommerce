import React from "react";
import AddToCart from "../Cart/AddToCart";
import Logo from "../Logo/Logo";

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
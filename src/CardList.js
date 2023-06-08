import React from "react";
import Card from "./Card";
import NavBar from "./NavBar";

const CardList = ({ products }) => {

    return (
        <div>
            <NavBar />
            {products.map((item, i) => {
                return (
                    <Card
                        key={i}
                        item={item}
                    />
                )
            })}
        </div>
    );

}

export default CardList;
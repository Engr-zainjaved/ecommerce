import React from "react";
import Card from "./Card";

const CardList = ({ products }) => {

    return (
        <div
            style={
                {
                    display: "flex", 
                    flexWrap: "wrap", 
                    justifyContent: "center", 
                    margin: "20px", 
                    padding: "20px"
                }
            }>
            {products.map((item, i) => {
                return (
                    <div>
                        <Card
                            key={i}
                            item={item}
                        />
                    </div>
                )
            })}
        </div>
    );

}

export default CardList;
import React, { useContext } from 'react';
import { MyContext } from '../../App';
import NavBar from '../NavBar/NavBar';

const CartPage = () => {

    const { cart, setCart } = useContext(MyContext);

    const calculateTotalPrice = () => {
        let total = 0;
        cart.forEach(item => {
            total += item.price * item.quantity;
        });
        return total;
    };

    return (
        <div>
            <NavBar />
            <h2 style={{ margin: "20px", padding: "20px" }}>Shopping Cart</h2>

            <table
                className='table container'
                style={{}}
            >
                <thead>
                    <tr>
                        <td>Sr #</td>
                        <td>Image</td>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Qty</td>
                        <td>Remove</td>
                    </tr>
                </thead>
                <tbody>
                    {cart && cart.length > 0 ? cart.map((item, key) => (
                        <tr>
                            <td>{key + 1}</td>
                            <td><img alt='productImage' src={item.productLink} style={{ width: "30px", height: "auto" }} /></td>
                            <td>{item.productTitle}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                            <td><div onClick={() => {
                                setCart((items) => {
                                    return items.filter((cartItem) => cartItem.productId !== item.productId)
                                })
                            }}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                </svg>
                            </div>
                            </td>
                        </tr>
                    )) : <tr>
                        <td colSpan={6}>No Item in the cart</td>
                    </tr>}
                </tbody>
            </table>

            <div id="cartContainer" style={{ display: "flex", alignItems: "center" }}>
                {cart.length !== 0 && (
                    <h3 style={{ display: 'inline-block', margin: "20px", padding: "20px" }}>
                        Total Price: Rs. {calculateTotalPrice()}
                    </h3>
                )}

                {cart.length !== 0 && (
                    <button
                        type="button"
                        class="btn btn-primary"
                        style={{ position: "absolute", right: "20px", "margin-right": "20px" }}
                        onClick={() => {
                            alert("Thanks for Purchasing")
                        }}>
                        Checkout
                    </button>
                )}
            </div>
        </div >
    );
};

export default CartPage;

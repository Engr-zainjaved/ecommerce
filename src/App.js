import React, { useEffect, createContext, useState } from "react";
import CardList from "./Components/Card/CardList";
import { products } from "./Data/Products/products";
import LoginPage from "./Components/Login/Login";
import CartPage from "./Components/Cart/CartPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Banner from "./Components/Banner/Banner";

export const MyContext = createContext();

const App = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        if ([null, "null", "undefined", undefined].includes(localStorage.getItem("user"))) {
            localStorage.setItem("user", null)
        }
    }, [])

    return (
        <MyContext.Provider value={{ cart, setCart }}>
            <Router>
                <Routes>
                    <>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/" element={
                            <>
                                <Banner />
                                <CardList products={products} />
                            </>
                        } />
                        <Route path="*" element={
                            <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                                No Page Available: 404!
                            </div>
                        } />
                    </>
                </Routes>
            </Router>
        </MyContext.Provider>
    );
}

export default App;
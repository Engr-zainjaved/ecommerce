import React from "react";
import { useNavigate } from "react-router-dom";

const Logo = ()=>{
const navigate = useNavigate()
    return (
        <div className="d-inline-block" style={{margin: "10px", padding: "10px"}} onClick={()=>{
            navigate("/")
        }}>
            <img 
            style={{width: '50px', height: '50px'}}
            src="https://cdn-icons-png.flaticon.com/512/5969/5969205.png" 
            alt="logo" 
            />
            <h5>Company</h5>
        </div>

    );
}

export default Logo;
import React from 'react';
import NavBar from "./NavBar";
import Header from './Header';

const Banner = () => {

  return (
    <div>
      <NavBar />
      <div style={{ backgroundColor: '#F5F5F5', display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", height: "80vh" }}>

        <div style={{ width: "800px", marginLeft: "40px", textAlign: "left" }}>
          <h1>Stands up, Stands out, Unfolds</h1>
          <h6>Thanks to Flex mode, Galaxy Z Fold3 5G opens up greatness with its unique ability to stand upright.
            This symmetrical and balanced design opens up so you can let loose in the next era of smartphones.</h6>
        </div>

        <div>
          <img style={{ width: "100%", height: "auto" }}
            src="//images.samsung.com/pk/smartphones/galaxy-z-fold3-5g/images/galaxy-z-fold3-5g_highlights_kv_img.jpg" alt="banner" />
        </div>
      </div>
      <Header/>
    </div>


  );
};

export default Banner;
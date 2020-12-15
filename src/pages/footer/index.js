import React from "react";

import Facebook from './assets/facebook.svg';
import Instagram from './assets/instagram.svg';
import Twitter from './assets/twitter.svg';

function Footer(){
    return(
        <footer style={{width: "100%", paddingTop: "10px", paddingBottom: "10px", backgroundColor: "#221F3B", display: "flex", flexDirection: "row", paddingLeft: "1vw", paddingRight: "1vw", justifyContent: "space-between", alignItems: "center", borderTopLeftRadius: "5px", borderTopRightRadius: "5px"}}>
            <span style={{color: "#FFFFFF", fontWeight: "bold", fontFamily: "helvetica"}}>TransCorp © 2020 All Rights Reserved | Privacy Policy</span>
            <span style={{color: "#FFFFFF", fontWeight: "bold", fontFamily: "helvetica"}}>Avenida Europa, 212 - Jardim Europa - São Paulo/SP</span>
            <div style={{width: "20%", height: "4vh", display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
                <div style={{width: "13%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <a href="https://pt-br.facebook.com/" target="blank">
                        <img src={Facebook} style={{width: "90%", height: "90%", cursor: "pointer"}}/>
                    </a>
                </div>
                <div style={{width: "13%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <a href="https://www.instagram.com/" target="blank">
                        <img src={Instagram} style={{width: "90%", height: "90%", cursor: "pointer"}}/>
                    </a>
                </div>
                <div style={{width: "13%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <a href="https://twitter.com/login?lang=pt" target="blank">
                        <img src={Twitter} style={{width: "90%", height: "90%", cursor: "pointer"}}/>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

// --textoBranco: #FFFFFF;
//     --textoPreto: #000000;
//     --primaria: #221F3B; 
//     --secundaria: #6F4A8E;
//     --terciaria: #050505;
//     --quaternaria: #EBEBEB;
//     --botaoHover: #352342;
// }
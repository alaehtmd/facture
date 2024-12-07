import React from "react";
import { Link } from "react-router-dom";
import '../compo/nav.css';  
export default function Nav (){
    return(
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/">Acceuil</Link>
                </li>
              
                <li>
                    <Link to="/form2">Formulaire</Link>
                </li>
                <li>
                    <Link to="/form1">facture</Link>
                </li>
            </ul>
        </nav>
    );
}
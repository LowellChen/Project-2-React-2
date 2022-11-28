import React from "react";

export default function Home(){
    return(
        <div>
            <img src="https://vivancoculturadevino.es/img/logo_completo_en.png" />
            
            <div className="container">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <button className="nav-link active" aria-current="page">
                Home
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link">Customers' Favourites</button>
            </li>
            <li className="nav-item">
              <button className="nav-link">Search our inventory</button>
            </li>
          </ul>
        </div>
            <img src="https://st2.depositphotos.com/1177973/10049/i/950/depositphotos_100494314-stock-photo-collage-with-beautiful-wine-images.jpg"/>
            <h1>Culture du vin</h1>
            <p>Experience the culture of wine in its finest traditions---all without leaving home. Have a glass on us! Toast!</p>
        </div>

    )
}
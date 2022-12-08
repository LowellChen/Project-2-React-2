import React from "react";

export default class Home extends React.Component{
    
    
    render(){
        return(
            <React.Fragment>
              <div className="container-block" style={{backgroundColor: "#F8F0E3 "}}>
                <img src="https://vivancoculturadevino.es/img/logo_completo_en.png" alt="logo" style={{alignItems:"center" }}/>
                
                <div className="container" style={{alignItems:"center"}}>
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <button style={{fontFamily:"cadillac bold", fontSize:"20px", color:"#D2B450"}} onClick = {() => {this.props.setActive("home")}} className="nav-link active" aria-current="page">
                    Home
                  </button>
                </li>
                <li className="nav-item">
                  <button style={{fontFamily:"cadillac bold", fontSize:"20px", color:"#D2B450"}} onClick = {() => {this.props.setActive("customer")}} className= "nav-link">Customers' Favourites</button>
                </li>
                <li className="nav-item">
                  <button style={{fontFamily:"cadillac bold", fontSize:"20px", color:"#D2B450"}} onClick = {() => {this.props.setActive("search")}} className="nav-link">Share Your Reviews</button>
                </li>
              </ul>
            </div>
                <img src="https://st2.depositphotos.com/1177973/10049/i/950/depositphotos_100494314-stock-photo-collage-with-beautiful-wine-images.jpg" alt="winecollage"/>
                <h1 style={{fontFamily:"cadillac bold"}}>Culture du vin</h1>
                <p style={{fontFamily:"roberto slab", fontSize:"18px"}}>Experience the culture of wine in its finest traditions---all without leaving home. Learn about the finest wines in the world and share your recommendations with fellow wine connoisseurs.</p>
                <p style={{fontFamily:"roberto slab", fontSize:"18px"}}>Have a glass on us! Toast!</p>
            </div>
            </React.Fragment>
        )

    }
    
}
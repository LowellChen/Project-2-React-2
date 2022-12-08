import React from "react";
import axios from "axios";

export default class CustomerFav extends React.Component{

  state = {
    'data':[],
    'name': '',
    'vintage':'',
    "grapeVarietal": [],
    'country': [],
    'productDescription':'',
    'reviews':[]
  }

  async componentDidMount() {
    const wineResponse = await axios.get("https://3000-lowellchen-project2-q8mv8lmomkc.ws-us77.gitpod.io"+"/wine");
    console.log(wineResponse)
    const wineData = wineResponse.data;
    this.setState({
      data: wineData
     });
  
 } 
   renderWines() {
    let jsx = [];
    for (let w of this.state.data) {
      jsx.push(<div key={w.id}>
          <h3>{w.name}</h3>
          <ul>
            <li>Vintage: {w.vintage}</li>
            <li>Grape Varietal: {w.grapeVarietal}</li>
            <li>Country: {w.origins[0]}</li>
            <li>Product Description: {w.productDescription}</li>
            <li>Reviewer's name: {w.reviews[0].nameOfReviewer}</li>
            <li>Reviews: {w.reviews[0].description}</li>
          </ul>
        </div>)
    }
    return jsx;
   }

    render(){
     return(
         <React.Fragment>
           <div className="main" style={{height: "100vh",backgroundImage:"url(https://thumbs.dreamstime.com/b/country-wine-collage-close-to-stuttgart-66991497.jpg)"}}>
            <img src="https://vivancoculturadevino.es/img/logo_completo_en.png" alt="logo"/>
           <div className="container" >
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <button onClick = {() => {this.props.setActive("home")}} className="nav-link active" aria-current="page">
                    Home
                  </button>
                </li>
                <li className="nav-item">
                  <button onClick = {() => {this.props.setActive("customer")}} className= "nav-link">Customers' Favourites</button>
                </li>
                <li className="nav-item">
                  <button onClick = {() => {this.props.setActive("search")}} className="nav-link">Share Your Reviews</button>
                </li>
              </ul>
            </div>
          <div className="d-flex" style={{backgroundColor:"#FFFFCC ", backgroundImage:"url(https://thumbs.dreamstime.com/b/country-wine-collage-close-to-stuttgart-66991497.jpg)"}}>
             <div className="card" style={{width: "18rem", backgroundColor:"#800020 ", color:"#FFD700"}}>
           <img className="card-img-top" src="https://winealign-production.s3.amazonaws.com/wine_labels/0013/6171/La-Gironda-Brachetto-D_27acqui-2009-Label.jpg" alt="moscato"></img>
           <div className="card-body">
            <h3>La Gironda Moscato</h3>
             <p className="card-text" style={{fontFamily:""}}>Intense with hints of flowers. Its taste is sweet, sapid, aromatic with light tail. Rich with structure and long finish. Goes well with desserts, especially with hazelnut cakes and zabaglione cream. Serve chilled. Intense with hints of flowers. Its taste is sweet, sapid, aromatic with light tail. Rich with structure and long finish. Goes well with desserts, especially with hazelnut cakes and zabaglione cream. Serve chilled.</p>
           </div>
         </div>
         {/* 2nd pic of wine inventory */}
         <div className="card" style={{width: "18rem"}}>
           <img className="card-img-top" src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters:format(jpg)/https:%2F%2Fblogs-images.forbes.com%2Flmowery%2Ffiles%2F2019%2F02%2FChateauLafiteR-1200x1001.jpeg" alt="lafite"></img>
           <div className="card-body">
            <h3>Lafite Rothschild Cabernet Sauvignon</h3>
             <p className="card-text">Still backward with a deep ruby/plum color revealing only a touch of lightening at the edge, the wine offers up an extraordinary nose of caramelized herbs, smoke, cedar, pen ink, black currants, and earth. The gorgeous aromatics are followed by a full-bodied, plump, rich, fleshy wine with low acidity. With 6-8 hours decanting in a closed decanter, it will offer beautiful drinking, but it needs another 5-8 years to reach full maturity. It is capable of lasting 50-60 years.</p>
           </div>
         </div>
         {/* 3rd pic of wine inventory */}
         <div className="card" style={{width: "18rem"}}>
           <img className="card-img-top" src="https://cdn11.bigcommerce.com/s-a04d0/images/stencil/1280x1280/products/3659/4085/matua-marlborough-sauvignon-blanc__58444.1309010799.jpg?c=2" alt="matua"></img>
           <div className="card-body">
            <h3>Matua Marlborough Sauvignon Blanc</h3>
             <p className="card-text">
               
               The first New Zealand Sauvignon Blanc introduced to market is still as pure as our first batch. The Sauvignon Blanc features lemony, citrus notes and a hint of vibrant passionfruit and basil. The palate is fresh and vibrant with concentrated blackcurrant leaf and a hint of cut-grass and green melon. So refreshing, you’ll be left wanting another glass.</p>
           </div>
         </div>
         {/* 4th pic of wine inventory */}
         <div className="card" style={{width: "18rem"}}>
           <img className="card-img-top" src="https://www.oenovinia.com/6376-thickbox_default/sancerre-pinot-noir-2019-magnum-domaine-vincent-pinard.jpg" alt="pinot noir"></img>
           <div className="card-body">
            <h3>Domaine Sautereau Pinot Noir</h3>
             <p className="card-text">
               Fruity nose of juiciy and mature red and black fruits. Some violet and laurel notes give freshness to the nose. The mouth is very supple thanks to silky tannins. The nice concentration of the fruit is balanced by some freshness in the palate too.</p>
           </div>
         </div>
         </div>
         </div>
          {this.renderWines()} 
         </React.Fragment>
     )
 }
    }
// import React from "react";
// import axios from "axios";

// export default class wine extends React.Component {
//   render() {
//     return (
//       <React.Fragment>
//         {/* <div className="container">
//           <ul className="nav nav-tabs">
//             <li className="nav-item">
//               <button className="nav-link active" aria-current="page">
//                 Home
//               </button>
//             </li>
//             <li className="nav-item">
//               <button className="nav-link">Products</button>
//             </li>
//           </ul>
//         </div> */}
//         {/* 1st picture of wines in inventory */}
//         <div className="card" style="width: 18rem;">
//           <img className="card-img-top" src="moscato.jpg" alt="Card image cap"></img>
//           <div className="card-body">
//             <p className="card-text">Intense with hints of flowers. Its taste is sweet, sapid, aromatic with light tail. Rich with structure and long finish. Goes well with desserts, especially with hazelnut cakes and zabaglione cream. Serve chilled. Intense with hints of flowers. Its taste is sweet, sapid, aromatic with light tail. Rich with structure and long finish. Goes well with desserts, especially with hazelnut cakes and zabaglione cream. Serve chilled.</p>
//           </div>
//         </div>
//         {/* 2nd pic of wine inventory */}
//         <div className="card" style="width: 18rem;">
//           <img className="card-img-top" src="lafite.webp" alt="Card image cap"></img>
//           <div className="card-body">
//             <p className="card-text">Still backward with a deep ruby/plum color revealing only a touch of lightening at the edge, the wine offers up an extraordinary nose of caramelized herbs, smoke, cedar, pen ink, black currants, and earth. The gorgeous aromatics are followed by a full-bodied, plump, rich, fleshy wine with low acidity. With 6-8 hours decanting in a closed decanter, it will offer beautiful drinking, but it needs another 5-8 years to reach full maturity. It is capable of lasting 50-60 years.</p>
//           </div>
//         </div>
//         {/* 3rd pic of wine inventory */}
//         <div className="card" style="width: 18rem;">
//           <img className="card-img-top" src="matua.png" alt="Card image cap"></img>
//           <div className="card-body">
//             <p className="card-text">
//               Sauvignon Blanc
//               The first New Zealand Sauvignon Blanc introduced to market is still as pure as our first batch. The Sauvignon Blanc features lemony, citrus notes and a hint of vibrant passionfruit and basil. The palate is fresh and vibrant with concentrated blackcurrant leaf and a hint of cut-grass and green melon. So refreshing, you’ll be left wanting another glass.</p>
//           </div>
//         </div>
//         {/* 4th pic of wine inventory */}
//         <div className="card" style="width: 18rem;">
//           <img className="card-img-top" src="pinotnoir.webp" alt="Card image cap"></img>
//           <div className="card-body">
//             <p className="card-text">DOMAINE SAUTEREAU Sancerre - Pinot Noir
//               Fruity nose of juiciy and mature red and black fruits. Some violet and laurel notes give freshness to the nose. The mouth is very supple thanks to silky tannins. The nice concentration of the fruit is balanced by some freshness in the palate too.</p>
//           </div>
//         </div>
//       </React.Fragment>
//     );
//   }
// }

// {/* when click on add new wine, the following forms will show. Note: have not done event handler from clickbox */ }
// export default class wine extends React.Component {
//   render() {
//     return <React.Fragment>
//       class SurveyForm extends React.Component {
//         state = {
//           'name': '',
//           "grapeVarietal": '',
//           'country': ''

//         }
//       }
//     </React.Fragment>
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <div>
//           <label>Name:</label>
//           <input type="text" value={this.state.name} />
//         </div>
//         <div>
//           <label>Grape Varietal:</label>
//           <select value={this.state.grapeVarietal}>
//             <option value="moscato">Moscato</option>
//             <option value="pinotnoir">Pinot Noir</option>
//             <option value="sauvignonblanc">Sauvignon Blanc</option>
//             <option value="riesling">Riesling</option>
//             <option value="cabenetsauvignon">Cabenet Sauvignon</option>
//             <option value="syrah">Syrah</option>
//             <option value="sangiovese">Sangiovese</option>
//             <option value="merlot">Merlot</option>
//             <option value="zinfandel">Zinfandel</option>
//           </select>
//         </div>
//         <div>
//           <label>Country:</label>
//           <select value={this.state.country}>
//             <option value="australia">Australia</option>
//             <option value="chile">Chile</option>
//             <option value="france">France</option>
//             <option value="germany">Germany</option>
//             <option value="italy">Italy</option>
//             <option value="newzealand">New Zealand</option>
//             <option value="usa">USA</option>
//           </select>
//         </div>

//         <button>Submit</button>
//       </React.Fragment>
//     )
//   }
  
//   // End of main


//   // {/* Beginning of connecting React with Express */}
//   fetchData = async () => {
//     let response = await axios.get(this.url + "recipes");
//     this.setState({
//       data: response.data
//     });
//   };
     
//       export default class wine extends React.Component {
//   url = "https://8888-rose-cephalopod-vwyodmuv.ws-us09.gitpod.io/";
//   // ... snipped
// }

// componentDidMount() {
//   this.fetchData();
// }

// addNew = async () => {
//   let response = await axios.post(this.url + "recipes", {
//     title: this.state.newTitle,
//     ingredients: this.state.newIngredients.split(',')
//   })

//   this.setState({
//     'data': [
//       ...this.state.data,
//       response.data[0]

//     ],
//     'active': 'listing'
//   })
// }

// {/* 
// end of connection bt React & Express */}


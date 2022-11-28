import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import wine from "./frontend.js";
import Home from "./Home";
import Search from "./Search";
import CustomerFav from "./CustomerFav";

// function App() {
//   return (
//     <div className="App">
     
//     </div>
//   );
// }

// export default App;


export default function App() {
 return <React.Fragment>
   <Home/>
   <CustomerFav/>
   <Search/>
   <wine/>
   
 </React.Fragment>;
}






import './App.css';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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


export default class App extends React.Component {
  state = {
    active: "home"
  }

  setActive = (page) => {
    this.setState({
      active: page
    })
  }

  renderContent(){
    if(this.state.active == "home"){
      return(
        <React.Fragment>
          <Home setActive={this.setActive}/>
          <Search/>
        </React.Fragment>
        
      )
      
    }
    else if(this.state.active == "search"){
      return (
        <Search setActive={this.setActive}/>
      )
    }
    else{
      return(
        <CustomerFav setActive = {this.setActive}/>
      )
    }
  }
 render(){
 return (<React.Fragment>

  {this.renderContent()}

   {/* {this.state.active == "home" ? <Home/> : <h1>No such page</h1>}
   {this.state.active == "customer" ? <CustomerFav/> : <h1>No such page</h1>} */}

    {/* <Search/>  */}
   {/* <wine/>   */}
   
 </React.Fragment>);
 }
}






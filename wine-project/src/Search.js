import React from "react";
// import axios from "axios";

export default class Search extends React.Component{

  state = {
    'name': '',
    "grapeVarietal": '',
    'country': ''
  }


          
     render (){
        return(
     <React.Fragment>
      <div className ="main" style={{height:"100vh" , backgroundImage:"URL(https://i1.wp.com/www.antiheromagazine.com/wp-content/uploads/2017/05/WineSunset1400-SHEWOLF.jpg?fit=1400%2C913&ssl=1)"}}>
       
       <img src="https://vivancoculturadevino.es/img/logo_completo_en.png" alt="logo"/>
           <div className="container">
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
                  <button onClick = {() => {this.props.setActive("search")}} className="nav-link">Search our inventory</button>
                </li>
              </ul>
            </div>
          
          <div>
          <label style={{margin:"10px", color:"maroon", fontWeight:"bold"}}>Name:</label>
          <input type="text" placeholder="type in product name" onChange={this.updateFormField} style= {{margin: "10px",padding: "6px", width:"300px"}}value={this.state.name} />
        </div>
        <div>
          <label style={{margin:"10px",color:"maroon", fontWeight:"bold"}}>Vintage:</label>
          <input type="text" style= {{margin: "10px",padding: "6px", width:"300px"}} placeholder ="type the year in YYYY format" value={this.state.vintage} />
        </div>
         <div>
           <label style={{margin:"10px", color:"maroon", fontWeight:"bold"}}>Grape Varietal:</label>
           <select style= {{margin: "10px",padding: "6px", width:"300px"}} value={this.state.grapeVarietal}>
             <option value="moscato">Moscato</option>
             <option value="pinotnoir">Pinot Noir</option>
             <option value="sauvignonblanc">Sauvignon Blanc</option>
             <option value="riesling">Riesling</option>
             <option value="cabernetsauvignon">Cabernet Sauvignon</option>
             <option value="syrah">Syrah</option>
             <option value="sangiovese">Sangiovese</option>
             <option value="merlot">Merlot</option>
             <option value="zinfandel">Zinfandel</option>
           </select>
         </div>
         <div>
           <label style={{margin:"10px", color:"maroon", fontWeight:"bold"}}>Country:</label>
           <select style= {{margin: "10px",padding: "6px", width:"300px"}} value={this.state.country}>
             <option value="australia">Australia</option>
             <option value="chile">Chile</option>
             <option value="france">France</option>
             <option value="germany">Germany</option>
             <option value="italy">Italy</option>
             <option value="newzealand">New Zealand</option>
             <option value="usa">USA</option>
           </select>
         </div>
         <div>
          <label style={{margin:"10px", color:"maroon", fontWeight:"bold"}}>Product Description:</label>
          <input type="text" placeholder ="How would you describe this wine?" style= {{margin: "10px",padding: "6px", width:"300px"}} value={this.state.productDescription} />
        </div>
        <div>
          <label style={{margin:"10px", color:"#510400", fontWeight:"bold"}}>Reviewer's Name:</label>
          <input type="text" placeholder = "type in your name" style= {{margin: "10px",padding: "6px", width:"300px"}} value={this.state.reviews} />
        </div>
        <div>
          <label style={{margin:"10px", color:"#510400", fontWeight:"bold"}}>Reviews:</label>
          <input type="text" placeholder = "Share your reviews" style= {{margin: "10px",padding: "6px", width:"300px"}} value={this.state.reviews} />
        </div>
         <button style={{color:"dark maroon", font:"cadillac",margin:"40px", backgroundColor:"gold", fontWeight:"bold"}}>Submit</button> 
         </div>

         {/* handleChange={(e) => this.handleChange(e)}
         updateFormField = (e) => {
          
        this.setState({
            [e.target.name] : e.target.value
        })
        } */}


        {/* async componentDidMount() {
            const wineResponse = await axios.get("wine");
            const wineData = wineResponse.data;
            this.setState({
              wine: wineData
            });
         
        } */}

         </React.Fragment>
    )
}
}
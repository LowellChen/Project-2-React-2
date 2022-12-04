renderWines() {
    let jsx = [];
    for (let w of this.state.wines) {
      jsx.push(<div key={w.id}>
          <h3>{w.name}</h3>
          <ul>
            <li>Vintage: {w.vintage}</li>
            <li>Grape Varietal: {w.grapeVarietal}</li>
            <li>Country: {w.origins[0]}</li>
            <li>Product Description: {w.productDescription}</li>
            <li>Reviewer's name: {w.reviews[0]}</li>
            <li>Reviews: {w.reviews[1]}</li>
          </ul>
        </div>)
    }
    return jsx;
  }

    
    render() {

    return (
      <React.Fragment>
        <h1>View Our Favourite Wines from Our Vintage Collections</h1>
        <h2>Shops</h2>
        {this.renderWines()}
        <h2></h2>
        {this.state.wines.map(function (e) {
          return (
            <div
              key={e}
              style={{
                border: "1px solid black",
                margin: "5px",
                padding: "5px"
              }}
            >
              {e}
            </div>
          );
        })}
      </React.Fragment>
 
 );
}

 
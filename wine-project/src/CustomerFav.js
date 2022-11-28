import React from "react";

export default function CustomerFav(){
    return(
        <div>
            <div className="card" style="width: 18rem;">
          <img className="card-img-top" src="moscato.jpg" alt="Card image cap"></img>
          <div className="card-body">
            <p className="card-text">Intense with hints of flowers. Its taste is sweet, sapid, aromatic with light tail. Rich with structure and long finish. Goes well with desserts, especially with hazelnut cakes and zabaglione cream. Serve chilled. Intense with hints of flowers. Its taste is sweet, sapid, aromatic with light tail. Rich with structure and long finish. Goes well with desserts, especially with hazelnut cakes and zabaglione cream. Serve chilled.</p>
          </div>
        </div>
        {/* 2nd pic of wine inventory */}
        <div className="card" style="width: 18rem;">
          <img className="card-img-top" src="lafite.webp" alt="Card image cap"></img>
          <div className="card-body">
            <p className="card-text">Still backward with a deep ruby/plum color revealing only a touch of lightening at the edge, the wine offers up an extraordinary nose of caramelized herbs, smoke, cedar, pen ink, black currants, and earth. The gorgeous aromatics are followed by a full-bodied, plump, rich, fleshy wine with low acidity. With 6-8 hours decanting in a closed decanter, it will offer beautiful drinking, but it needs another 5-8 years to reach full maturity. It is capable of lasting 50-60 years.</p>
          </div>
        </div>
        {/* 3rd pic of wine inventory */}
        <div className="card" style="width: 18rem;">
          <img className="card-img-top" src="matua.png" alt="Card image cap"></img>
          <div className="card-body">
            <p className="card-text">
              Sauvignon Blanc
              The first New Zealand Sauvignon Blanc introduced to market is still as pure as our first batch. The Sauvignon Blanc features lemony, citrus notes and a hint of vibrant passionfruit and basil. The palate is fresh and vibrant with concentrated blackcurrant leaf and a hint of cut-grass and green melon. So refreshing, you’ll be left wanting another glass.</p>
          </div>
        </div>
        {/* 4th pic of wine inventory */}
        <div className="card" style="width: 18rem;">
          <img className="card-img-top" src="pinotnoir.webp" alt="Card image cap"></img>
          <div className="card-body">
            <p className="card-text">DOMAINE SAUTEREAU Sancerre - Pinot Noir
              Fruity nose of juiciy and mature red and black fruits. Some violet and laurel notes give freshness to the nose. The mouth is very supple thanks to silky tannins. The nice concentration of the fruit is balanced by some freshness in the palate too.</p>
          </div>
        </div>
        </div>
    )
}
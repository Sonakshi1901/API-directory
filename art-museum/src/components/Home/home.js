import React from "react";
import Cards from "../Card/card.js";
import "./home.css";

export default function Home() {
  return(
    <div className="Home">
      <div className="home__header">
        <div classname="group">
          <h2 className="header">ART MUSEUM</h2>
          <span className="quote"><i>"Art is not what you see, but what you make others see..."</i></span>
        </div>
        
        <div className="Cardlist">
           <Cards
             artwork_type_title= "Paintings"
             classification_title="Modern"
             artist_title= "Pablo"
             message="ABCD"/>
            <Cards
               artwork_type_title= "Paintings"
               classification_title="Modern"
               artist_title= "Pablo"
               message="ABCD"/>
        </div>
      </div>
    </div>
  )
}

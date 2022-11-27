import React from "react";
import "./Appetsi.css";
import SearchBar from "./Components/SearchBar";
import ItemData from "???????????????"; /*TÄHÄN VISSIIN SE SQLDATA POLKU*/ 

function App() {
  return (
    <div className="Appetsi">
      <SearchBar placeholder="Kirjoita hakusana..." data={ItemData} /> 
    </div>
  );
}

export default App;
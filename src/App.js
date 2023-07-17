import React from "react";
import dati from "./db/dati";
import CardComponent from "./CardComponent";

function App() {
  return dati.map((data) => {
    return <CardComponent key={dati.id} {...data} />;
  });
}

export default App;

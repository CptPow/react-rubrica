import React from "react";
import dati from "./db/dati";
import CardComponent from "./CardComponent";

const App = () => {
  return (
   <React.Fragment>
    <main>
      {dati.map((data) => {
        return <CardComponent {...data} key={data.id} />;
      })}
    </main>
    </React.Fragment>
  );
};

export default App;

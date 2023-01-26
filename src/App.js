import Bouton from "./components/button/button";
import Bouton2 from "./components/button/button2";
import Bouton3 from "./components/button/button3";

import React, { useState } from "react";
import "./index.css"

function App() {
  return (
    /*<div className="w-screen h-screen flex items-center justify-center">
      <div className="text-3xl text-orange-600">
        Welcome on Alitcha Tailwind
      </div>
    </div>*/
    <div>

    <Bouton/> <br/><br/>
    
    <Bouton2/> <br/><br/>
    <Bouton3/> <br/><br/>
    </div>
  );
}

export default App;
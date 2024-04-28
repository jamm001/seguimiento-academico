import React, { useState } from "react";
import firebaseApp from "./firebase/creadenciales";
import Home from "./Vistas/Home";
import Login from "./Vistas/Login";


function App() {

  const[user, setuser] = useState(null);

  return (
    <div >
      {user? <Home/>:<Login/>}
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";
import Dashboard from "./Dashboard.js";
import { loginApi } from "./apiCalls/loginApi";

function App() {
  const [JWTtoken, setJWTtoken] = useState("")
  useEffect(() => {
    loginApi().then(res=>{
      const t='Bearer '+res?.token
      setJWTtoken(t);
    })
  }, [])
  
  return (
    <div className="App">
      <h1>Flagright</h1>
      <Dashboard JWTtoken={JWTtoken}/>
    </div>
  );
}

export default App;

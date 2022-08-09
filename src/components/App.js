import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import Approuter from "./routers";

function App() {
  const [pw, setPw] = useState("");
  const [isOk, Setisok] = useState(false);
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(pw);
    if(pw==="9809"){
      Setisok(true);
    }
  };
  const onChange = (event) => {
    setPw(event.target.value);
  };
  return (
    <div className="container">
      {isOk ? (
        <Approuter></Approuter>
      ) : (
        <div className="container row justify-content-center align-items-center vh-100">
          <form onSubmit={onSubmit}>
          <p className="fs-2">Enter</p>
           <input
            className="form-control"
              type="text"
              onChange={onChange}
              placeholder="비밀번호"
              value={pw}
            ></input>
            
          </form>
        </div>
      )}
    </div>
  );
}

export default App;

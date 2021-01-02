import { useEffect, useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Nav from "./components/Nav";
import MusicControls from "./components/MusicControls";
import Authenticator from "./components/Authenticator";
import axios from "axios";
//import { useDataLayerValue } from "./DataLayer";

axios.defaults.baseURL = "http://localhost:3001/";

function App() {
  const [isAuth, setIsAuthenticated] = useState(false);

  useEffect(() => {
    async function fetchdata() {
      await axios({
        method: "GET",
        url: "/user/isAuth",
        withCredentials: true,
      })
        .then((res) => {
          setIsAuthenticated(res.data.isAuth);
        }) //the object returned by the endpoing data: {isAuth:bool}
        .catch((err) => console.log(err));
    }
    fetchdata();
  });

  return isAuth ? (
    <div className="outerWrap">
      <div className="App">
        <Nav />
        <Main />
      </div>
      <div className="musicControls">
        <MusicControls />
      </div>
    </div>
  ) : (
    <Authenticator />
  );
}

export default App;

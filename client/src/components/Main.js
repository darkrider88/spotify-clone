import React, { useEffect, useState } from "react";
import Categories from "./Categories";
import { Switch, Route, useHistory } from "react-router-dom";
import PlaylistPage from "./pages/PlaylistPage";
import Search from "./Search";
import Artists from "./Artists";
import Nomatch from "./Nomatch";
import axios from "axios";

function Header() {
  const history = useHistory();
  const [username, setUsername] = useState(null);
  useEffect(() => {
    axios({
      method: "GET",
      url: "/user/isAuth",
      withCredentials: true,
    })
      .then((res) => setUsername(res.data.username))
      .catch((err) => {
        throw err;
      });
  });
  const logout = () => {
    axios({
      method: "GET",
      url: "/user/logout",
      withCredentials: true,
    })
      .then(() => {
        document.cookie = "connect.sid=''";
        history.push("/");
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="upperMain">
      <p>Welcome, {username}</p>
      <div className="logout-button">
        <button type="button" className="logout_button" onClick={logout}>
          logout
        </button>
      </div>
    </div>
  );
}

function Main(props) {
  return (
    <div className="main">
      <Header />
      <div className="mainContent">
        <Switch>
          <Route path="/" exact component={Categories}></Route>
          <Route path="/home" exact component={Categories}></Route>
          <Route path="/search" component={Search}></Route>
          <Route path="/artists" component={Artists}></Route>
          <Route path="/playlist/:id" component={PlaylistPage}></Route>
          <Route component={Nomatch}></Route> {/*if 404 */}
        </Switch>
      </div>
    </div>
  );
}

export default Main;

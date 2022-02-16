import NavBar from "./NavBar";
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../pages/LogIn";
import ChoreList from "../pages/ChoreList";
import NewChore from "../pages/NewChore";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route path="/new">
            <NewChore user={user} />
          </Route>
          <Route path="/">
            <ChoreList />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;

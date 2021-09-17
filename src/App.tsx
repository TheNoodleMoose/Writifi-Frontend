import React, { useState } from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Navbar from "./components/Navbar";

import { createApolloClient } from "./apolloClient";
import AuthContext from "./utils/auth-context";
import { getJwtToken } from "./utils/auth";
import Cookies from "js-cookie";

function App() {
  const authToken = getJwtToken();
  const apolloClient = createApolloClient(authToken);

  const [token, setToken] = useState(authToken);
  const [userId, setUserId] = useState("");

  const login = (token: string, userId: string) => {
    Cookies.set("crsToken", token, {
      sameSite: "None",
      secure: true
    });
    setToken(token);
    setUserId(userId);
  };

  const logout = () => {
    Cookies.remove("crsToken");
    setToken("");
    setUserId("");
  };
  return (
    <AppContainer>
      <Router>
        <ApolloProvider client={apolloClient}>
          <AuthContext.Provider value={{ token, userId, login, logout }}>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
            </Switch>
          </AuthContext.Provider>
        </ApolloProvider>
      </Router>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  height: 100vh;
  background-color: #f8f8f8;
  overflow: auto;
`;

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
import { getJwtToken, getUserId } from "./utils/auth";

function App() {
  const authToken = getJwtToken();
  const authUserId = getUserId();
  const apolloClient = createApolloClient(authToken);

  const [token, setToken] = useState(authToken);
  const [userId, setUserId] = useState(authUserId);

  const login = (token: string, userId: string) => {
    localStorage.setItem("jwtToken", token);
    localStorage.setItem("userId", userId);
    setToken(token);
    setUserId(userId);
  };

  const logout = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("userId");
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

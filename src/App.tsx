import React from "react";
import { ApolloProvider } from "react-apollo-hooks";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Navbar from "./components/Navbar";

import { createApolloClient } from "./apolloClient";

function App() {
  const token = "1234";
  const apolloClient = createApolloClient(token);
  return (
    <AppContainer>
      <Router>
        <ApolloProvider client={apolloClient}>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
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

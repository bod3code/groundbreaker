import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { GlobalStyles } from "./component-lib";

import { BrowserRouter } from "react-router-dom";

const client = new ApolloClient({
  uri: "https://react-flex-api-4unq53fqo.now.sh/graphql"
});

export default props => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <GlobalStyles />
      {props.children}
    </BrowserRouter>
  </ApolloProvider>
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App/App';
import { setTokenInLocalStorage } from './utils'

import {ApolloClient, HttpLink, InMemoryCache, ApolloLink, ApolloProvider, concat} from "@apollo/client";

setTokenInLocalStorage();

const httpLink = new HttpLink({ uri: 'https://ddapi.production.dietdoctor.com/v1' });

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext({
    headers: {
      authorization: localStorage.getItem('token') || null,
    }
  });

  return forward(operation);
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);

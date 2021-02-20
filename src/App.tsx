import React from 'react';
import { ApolloProvider } from '@apollo/client';
import GlobalStyle from './config/layout/global';
import { Routes } from './routes';
import { apolloClient } from './config/graphql/client';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <GlobalStyle />
      <Routes />
    </ApolloProvider>
  );
}

export default App;

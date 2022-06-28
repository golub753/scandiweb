import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ApolloClient, ApolloProvider, gql, InMemoryCache } from '@apollo/client';
import { Query } from "@apollo/client/react/components";
import GET_ALL_PRODUCTS from './query/product';
 
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <Query query={GET_ALL_PRODUCTS}>
      {({data}) => {
        if (data === undefined) return null;
        return <App data={data}/>
      }}
    </Query>
  </ApolloProvider>
);

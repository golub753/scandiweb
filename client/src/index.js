import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/normalize.css';
import './styles/style.css';
import App from './components/App';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
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

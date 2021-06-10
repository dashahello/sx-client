import './App.css';
import logo from './logo.png';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Launches from './components/Launches.js';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <img
          src={logo}
          alt="SpaceX"
          style={{ width: 100, display: 'block', margin: 'auto' }}
        />
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;

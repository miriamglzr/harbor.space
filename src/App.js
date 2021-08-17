import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Home from './Home';

function App () {
  return (
    <Router className="App">
      <Layout />
      <Switch>
        <Route exact path="/" component={Home} />

      </Switch>
    </Router>
  );
}

export default App;

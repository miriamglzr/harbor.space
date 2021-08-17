import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Layout from './Layout';

function App () {
  return (
    <Router className="App">
      <Layout />
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        {/* <Route exact path="/resume" component={Story} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} /> */}
      </Switch>
    </Router>
  );
}

export default App;

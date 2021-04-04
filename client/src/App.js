import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Main from './pages/Main';
import Intranet from './pages/Intranet';
import Mockup from './pages/Mockup';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/home" component={Home} />
          <Route path="/intranet" component={Intranet} />
          <Route path="/mockup" component={Mockup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

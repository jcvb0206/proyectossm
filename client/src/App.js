import { Global, css } from '@emotion/react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Main from './pages/Main';
import Intranet from './pages/Intranet';
import Mockup from './pages/Mockup';

function App() {
  return (
    <div className="App">
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
        `}
      />
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

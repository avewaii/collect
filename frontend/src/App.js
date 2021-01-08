import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from './Pages/Registration'
import Home from './Pages/Home'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/'} exact component={Home} />
        <Route path={'/registration'} exact component={Registration} />
        {/* <Route path={'/authorization'} exact component={Authorization} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;

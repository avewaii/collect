import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from './Pages/Registration';
import Home from './Pages/Home';
import Table from '../src/Pages/Table';
import Auth from './Pages/Auth';
import Collections from './Pages/Collections';
import CreateCollection from './Pages/CreateCollection';
import EditCollection from './Pages/EditCollection';
import CollectionItems from './Pages/CollectionItems';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/'} exact component={Home} />
        <Route path={'/registration'} exact component={Registration} />
        <Route path={'/auth'} exact component={Auth} />
        <Route path={'/table'} exact component={Table} />
        <Route path={'/collections'} exact component={Collections} />
        <Route path={'/createCollection'} exact component={CreateCollection} />
        <Route path={'/editCollection'} exact component={EditCollection} />
        <Route path={'/collection'} exact component={CollectionItems} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

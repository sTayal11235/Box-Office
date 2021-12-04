import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './component/Navigation';

function App() {
  return (
    <div>
      <Navigation/>
      <Switch>
        <Route exact path="/">Home</Route>
        <Route exact path="/starred">Starred</Route>
        <Route><h1>Error 404 - Page Not Found</h1></Route>
      </Switch>
    </div>
    );
}

export default App;

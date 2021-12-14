import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Starred from './Pages/Starred';
import ReadMore from './Pages/ReadMore';

function App() {
  return (
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route exact path="/starred"><Starred/></Route>
        <Route exact path="/show/:id"><ReadMore/></Route>
        <Route><h1>Error 404 - Page Not Found</h1></Route>
      </Switch>

    );
}

export default App;

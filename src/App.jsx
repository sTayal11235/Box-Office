import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'
import Home from './Pages/Home';
import Starred from './Pages/Starred';
import ReadMore from './Pages/ReadMore';


const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route exact path="/starred"><Starred/></Route>
        <Route exact path="/show/:id"><ReadMore/></Route>
        <Route><h1>Error 404 - Page Not Found</h1></Route>
      </Switch>
    </ThemeProvider>
    );
}

export default App;

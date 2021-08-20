import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home';
import Repositories from './pages/Repositories/Repositories';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home title="Repository Researcher"/>
        </Route>
        <Route path="/repositories" component={Repositories}/>
      </Switch>
    </BrowserRouter>
    
  )
}

export default Routes

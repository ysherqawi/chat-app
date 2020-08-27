import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';

const App = () => (
  <>
    <Router>
      <Switch>
        <Route path='/chat' component={Chat} />
        <Route path='/' exact component={Join} />
      </Switch>
    </Router>
  </>
);

export default App;

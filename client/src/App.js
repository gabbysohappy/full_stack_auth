import React from 'react';
import { Container } from 'semantic-ui-react';
import { Switch, Route } from 'react-router-dom';
import Home from '../src/components/shared/Home';
import NoMatch from '../src/components/shared/NoMatch';
import Navbar from '../src/components/shared/Navbar';
import Login from '../src/components/auth/Login';
import Register from '../src/components/auth/Register';

const App = () => (
<>
<Navbar />
<Container>
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/login' component={Login} />
    <Route exact path='/register' component={Register} />
    <Route component={NoMatch} />
  </Switch>
</Container>
</>

)

export default App;

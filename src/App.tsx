import './App.css';

import PrivateRoute from 'app/routes/PrivateRoute';
import AnonRoute from 'app/routes/AnonRoute';

import Register from 'app/views/Register';
import Login from 'app/views/Login';
import Home from 'app/views/Home';
import Private from 'app/views/Private';

import { FC } from 'react';
import { Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store';

const App:FC =()=> {
  const authentication = useSelector((state: RootState) => {
    return state.authentication
})

  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <AnonRoute exact path="/" component={Home} isLoggedIn={authentication.isLoggedIn}/>
          <AnonRoute exact path="/register" component={Register} isLoggedIn={authentication.isLoggedIn}/>
          <AnonRoute exact path="/login" component={Login} isLoggedIn={authentication.isLoggedIn}/>



          <PrivateRoute exact path="/private" component={Private} isLoggedIn={authentication.isLoggedIn}/>
        </Switch>
      </header>
    </div>
  );
}

export default App;

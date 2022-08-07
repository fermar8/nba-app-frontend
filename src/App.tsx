import './App.css';

import PrivateRoute from 'app/routes/PrivateRoute';
import AnonRoute from 'app/routes/AnonRoute';

import Register from 'app/views/Register';
import Login from 'app/views/Login';
import Home from 'app/views/Home';
import Private from 'app/views/Private';

import { FC, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { loginReducer } from 'features/authentication';
import { RootState } from 'app/store';

import { me } from 'services/authentication/authService';
import { validateToken } from 'utils/authentication/validateToken';

const App: FC = () => {
  const authentication = useSelector((state: RootState) => {
    return state.authentication
  })

  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async () => {
      const frontCookie: string = document.cookie;
      try {
        const isTokenValid = await validateToken(frontCookie);
        if (!isTokenValid) {
          return
        }
        const response: any = await me();
        console.log('response', response.data.payload);
        const actionPayload = response.data.payload;
        if (response.status === 200) {
          dispatch(loginReducer(actionPayload))
        }
      } catch (error) {
        console.log(error);
      }
    }
    getUser();
  }, [dispatch])


  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <AnonRoute exact path="/" component={Home} isLoggedIn={authentication.isLoggedIn} />
          <AnonRoute exact path="/register" component={Register} isLoggedIn={authentication.isLoggedIn} />
          <AnonRoute exact path="/login" component={Login} isLoggedIn={authentication.isLoggedIn} />



          <PrivateRoute exact path="/private" component={Private} isLoggedIn={authentication.isLoggedIn} />
        </Switch>
      </header>
    </div>
  );
}

export default App;

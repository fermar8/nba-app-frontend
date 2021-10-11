import './App.css';
import { FC } from 'react';
import { Route } from 'react-router-dom';
import Register from './views/Register';

const App:FC =()=> {
  return (
    <div className="App">
      <header className="App-header">
        <Route exact path="/register" render={(props) => <Register {...props} />} />
      </header>
    </div>
  );
}

export default App;

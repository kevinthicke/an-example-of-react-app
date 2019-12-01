import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import Departments from './views/Departments';
import Employees from './views/Employees';
import Home from './views/Home';
import store from './store';

const App: React.FC = () => {

  return (
    <Provider store={store}>
      <Router>
        <NavBar></NavBar>
        <div className='container pt-5'>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/departments' component={Departments} />
            <Route path='/employees' component={Employees} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

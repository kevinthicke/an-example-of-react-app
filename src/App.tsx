import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import Departments from './views/Departments';
import Employees from './views/Employees';
import Home from './views/Home';

const App: React.FC = () => {
  return (
    <Router>
      <NavBar></NavBar>
      <div className='container pt-1'>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/departments' component={Departments}/>
          <Route path='/employees' component={Employees} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

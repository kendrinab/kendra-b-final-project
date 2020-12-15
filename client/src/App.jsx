import React from 'react';
import { AppContextProvider } from './context/AppContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import './App.css';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Blog from './pages/Blog';
// import Footer from './components/Footer';
import DropDown from './components/DropDown';

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Navigation />
        <DropDown />
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/blog" component={Blog} />
        </Switch>
        {/* <Footer /> */}
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;

import React from 'react';
import { AppContextProvider } from './context/AppContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Blog from './pages/Blog';
// import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Login from './components/Login';
import SignUp from './components/SignUp';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
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

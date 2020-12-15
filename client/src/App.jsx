import React from 'react';
import { AppContextProvider } from './context/AppContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import './App.css';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Login from './components/Login';
import Profile from './pages/Profile';
import SignUp from './components/SignUp';
import Blog from './pages/Blog';
import PostForm from './components/PostForm';
import Footer from './components/Footer';
import DropDownBar from './components/DropDownBar';

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Navigation />
        <DropDownBar />
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/posts" component={PostForm} />
          <Route exact path="/blog" component={Blog} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;

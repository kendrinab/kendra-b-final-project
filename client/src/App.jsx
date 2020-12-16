import React from 'react';
import { AppContextProvider } from './context/AppContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import './App.css';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Login from './components/Login';
import Profile from './pages/Profile';
import Signup from './components/Signup';
import Blog from './pages/Blog';
import PostForm from './components/PostForm';
import Footer from './components/Footer';
import DropDownBar from './components/DropDownBar';
import UpdatePassword from './components/UpdatePassword';
import ResetPassword from './components/ResetPassword';
import UpdatePost from './components/UpdatePost';

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Navigation />
        <DropDownBar />
        <Switch>
          {/* <PrivateRoute exact path="/" component={Home} /> */}
          <PrivateRoute exact path="/profile" component={Profile} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/update-password" component={UpdatePassword} />
          <Route exact path="/reset-password" component={ResetPassword} />
          <Route exact path="/posts" component={PostForm} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/posts/:id" component={UpdatePost} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;

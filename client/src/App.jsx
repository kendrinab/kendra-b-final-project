import React from 'react';
import { AppContextProvider } from './context/AppContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Blog from './pages/Blog';
// import Footer from './components/Footer';
import Nav from './components/Nav';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Nav />
        <Switch>
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

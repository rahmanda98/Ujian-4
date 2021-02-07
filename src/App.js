import React, { Component } from 'react';
import './App.css';
import {Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';

import Login from './Components/Login';
import Blog from './Components/Blog';
import Resume from './Components/Resume';
import Skills from './Components/Skills';
import Home from './Components/Home';

import Context from './Context';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,

    };
    this.routerRef = React.createRef();
  }

  componentDidMount(){
    let user = localStorage.getItem("user");
    user = user ? JSON.parse(user) : null;
    this.setState({user});
  }

  login = async (email, password) => {
    const res = await axios.post(
      'http://localhost:3001/login',
      {email, password},
    ).catch((res) => {
      return {status: 401, message: 'Unauthorized'}
    })

    if (res.status === 200) {
      const user = {
        email,
        token: res.data.accessToken,
        accesLevel: email === 'admin@example.com' ? 0 : 1
      }

      this.setState({user});
      localStorage.setItem("user",JSON.stringify(user));
      return true;
    }else {
      return false
    }
  }

  logout = e => {
    e.preventDefault();
    this.setState({user: null});
    localStorage.removeItem("user");
  };

  render() {
    return (
     <Context.Provider
      value={{
        ...this.State,
        login: this.login,
        resume: this.resume,
        home: this.home,
        blog: this.blog,
        Skills: this.blog
      }}
     >
       <Router ref={this.routerRef}>
          <div className="App">
            <nav className="navbar container" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                  <b className="navbar-item is-size-4">blogging</b>
                  <label role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                  data-target="navbarBasicExample" onClick={e=> {
                    e.preventDefault();
                    this.setState({showMenu: !this.state.showMenu});
                  }}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                  </label>
                </div>
                <div className={`navbar-menu ${
                  this.state.showMenu ? "is-active": ""}`}>
                  <Link to="/Home" className="navbar-item">Home</Link>
                  {this.state.user && this.state.user.accesLevel < 1 && (
                    <Link to="/resume" className="navbar-item">Resume</Link>
                  )}
                  <Link to="/Portofolio" className="navbar-item">Portfolio<span
                  className="tag is-primary"
                  style={{marginLeft: "5px"}}
                  ></span></Link>
                  {!this.state.user ? (
                  <Link to="/login" className="navbar-item">
                    Login
                  </Link>
                  ) : (
                  <Link to="/" onClick={this.logout} className="navbar-item">
                    Logout
                  </Link>
                  )}
                </div>
            </nav>
            <Switch>
              <Route exact path="/Home" component={Home} />
              <Route exact path="/Login" component={Login} />
              <Route exact path="/Blog" component={Blog} />
              <Route exact path="/Resume" component={Resume} />
              <Route exact path="/Skills" component={Skills} />
            </Switch>
          </div>
       </Router>
     </Context.Provider>
    );
  }
};

export default App;

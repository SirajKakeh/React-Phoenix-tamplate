//@ts-check
import "phoenix_html";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    // @ts-ignore
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar></NavBar>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
        </div>
      </Router>
    )
  }
}

class NavBar extends React.Component {
  constructor(props) {
    // @ts-ignore
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">PhoenixReact</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="#">Home<span className="sr-only">(current)</span></a>
              <a className="nav-item nav-link" href="#">Another Page</a>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

class Home extends React.Component {
  constructor(props) {
    // @ts-ignore
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <h1>Home Here!</h1>
        <Link to="/login">Login</Link>
      </div>
    )
  }
}



class Login extends React.Component {
  constructor(props) {
    // @ts-ignore
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <h1>Login Here!</h1>
        <Link to="/">Home</Link>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById("react")
)

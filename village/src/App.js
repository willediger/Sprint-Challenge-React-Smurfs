import React, { Component } from "react";

import "./App.css";
import AddSmurfForm from "./components/AddSmurfForm";
import UpdateSmurfForm from "./components/UpdateSmurfForm";
import SingleSmurf from "./components/SingleSmurf";
import Smurfs from "./components/Smurfs";
import Nav from "./components/Nav";
import Home from "./components/Home";

import { Route } from "react-router-dom";

import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  updateSmurfs = newSmurfs => {
    this.setState({ smurfs: newSmurfs });
  };

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => this.setState({ smurfs: response.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Route path="/" component={Nav} />
        <main>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/smurfs"
            render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
          />
          <Route
            exact
            path="/smurf-form"
            render={props => (
              <AddSmurfForm {...props} updateSmurfs={this.updateSmurfs} />
            )}
          />
          <Route
            exact
            path="/smurfs/:id"
            render={props => (
              <SingleSmurf
                {...props}
                updateSmurfs={this.updateSmurfs}
                smurfs={this.state.smurfs}
              />
            )}
          />
          <Route
            path="/smurfs/:id/update"
            render={props => (
              <UpdateSmurfForm
                {...props}
                updateSmurfs={this.updateSmurfs}
                smurfs={this.state.smurfs}
              />
            )}
          />
        </main>
      </div>
    );
  }
}

export default App;

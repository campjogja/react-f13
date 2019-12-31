import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Navbar from "./Components/Navbar";

class App extends Component {
  //Class Component = Stateful Component
  //Lifecycle
  state = {
    date: new Date().getDate(),
    name: "Mamank"
  };
  componentDidMount = () => {
    //dijalankan setelah mounting ketika render selesai
    console.log("Component Did Mount");
  };
  componentDidUpdate = () => {
    //dijalankan setelah ada data (state dan/atau props) yang berubah
    console.log("Component Did Update");
  };
  shouldComponentUpdate = (_, { name }) => {
    //es6 destructuring
    //Gateway apakah si component boleh update
    console.log("Should Update", name);
    return true;
  };
  // componentWillUnmount(){}
  render() {
    const { date, name } = this.state; //es6 destructuring
    const { user } = this.props;
    console.log("Render");
    // console.log ('state', date);
    return (
      <div className="App">
        <Navbar date={date} />
        <header className="App-header">
          <button
            onClick={() =>
              this.setState({
                date: date + 1
              })
            }
          >
            Next Date
          </button>
          <input
            type="text"
            onKeyPress={({ key, target }) => {
              if (key === "Enter") {
                this.setState({
                  name: target.value
                });
              }
            }}
          />
          <Link to="/user">
            <p style={{ color: "white" }}>Link User</p>
          </Link>
          <button
            onClick={() => {
              //login dulu trus navigasi
              this.props.history.push("/user");
            }}
          >
            <p>Push User</p>
          </button>
          {/* falsy values & truthy values */}
          {user.data && user.data.length > 0 ? (
            user.data.map(({ username }, index) => {
              return (
                <div key={index}>
                  <p className="userName">{username}</p>
                  <br />
                </div>
              );
            })
          ) : (
            <p className="userName">Data Kosong</p>
          )}
        </header>
        <Navbar name={name} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.userData
  };
};

export default connect(mapStateToProps)(App);

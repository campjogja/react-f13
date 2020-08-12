import React, { Component } from "react";
// import Axios from 'axios';
import { connect } from "react-redux";
import "../Styles/User.css";

import { getAllUser } from "../Redux/Actions/user";

// const UPDATE = "This is NEW COMMIT in MASTER"

// const URL_STRING = 'http://localhost:8000/user';

class User extends Component {
  state = {
    user: []
  };
  onClickHandler = async () => {
    // Axios.get (URL_STRING)
    //   .then (({data}) =>
    //     this.setState ({
    //       user: data.data,
    //     })
    //   )
    //   .catch (err => console.log (err));
    await this.props.dispatch(getAllUser());
    const user = await this.props.user;
    this.setState({
      user: user.userData.data
    });
  };
  render() {
    const { user } = this.state;
    // console.log(user);
    return (
      <div>
        <header className="userPage">
          {/* <p style={{fontSize: 25}}>Halaman User</p> */}
          {user.length > 0 ? (
            user.map(({ username }, index) => {
              return (
                <div key={index}>
                  <p className="userName">{username}</p>
                  <br />
                </div>
              );
            })
          ) : (
            <div>
              <p className="userName">Data Kosong</p>
              <button onClick={this.onClickHandler}>Fetch User</button>
            </div>
          )}
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(User);

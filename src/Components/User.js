import React, {Component} from 'react';
import Axios from 'axios';
import '../Styles/User.css';

// import { getAllUser } from "../Redux/Actions/user";

// const UPDATE = "This is NEW COMMIT in MASTER"

const URL_STRING = 'http://localhost:8000/user';

class User extends Component {
  state = {
    user: [],
  };
  componentDidMount () {
    Axios.get (URL_STRING)
      .then (({data}) =>
        this.setState ({
          user: data.data,
        })
      )
      .catch (err => console.log (err));
  }
  render () {
    const {user} = this.state;
    // console.log (user);
    return (
      <div>
        <header className="userPage">
          {/* <p style={{fontSize: 25}}>Halaman User</p> */}
          {user.length > 0
            ? user.map (({username}, index) => {
                return (
                  <div key={index}>
                    <p>
                      {username}
                    </p>
                    <br />
                  </div>
                );
              })
            : <p>Data Kosong</p>}
        </header>
      </div>
    );
  }
}

export default User;

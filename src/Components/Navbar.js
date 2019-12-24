import React from 'react';
import "../Styles/Navbar.css";

function Navbar({name, date}) {
  //functional Component = Stateless Component
  //   console.log ('PROPS', props);
  if (date) {
    return (
      <div className='Date'>
        <p>Date: {date}</p>
      </div>
    );
  } else if (name) {
    return (
      <div className='Hello'>
        <p>Hello {name}</p>
      </div>
    );
  }
}

export default Navbar;

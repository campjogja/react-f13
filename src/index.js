import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import User from './Components/User';
import App from './App';

const AppWithRoute = () => {
    return(
        <Router>
            <Route path='/' exact component={App} />
            <Route path='/user' component={User} />
        </Router>
    )
}

ReactDOM.render(<AppWithRoute />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

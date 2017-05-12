import React from 'react';
import ReactDOM from 'react-dom';


import { logout, login, signup } from './util/session_api_util';
import configureStore from './store/store';

window.login = login
window.logout = logout
window.signup = signup


document.addEventListener('DOMContentLoaded', () => {

    window.store = configureStore();

    const root = document.getElementById('root');
    ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});

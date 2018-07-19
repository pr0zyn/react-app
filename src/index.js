import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import UserForm from './components/UserForm';


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
                <div>    
                    <Route path="/" exact component={App} />
                    <Route path="/edit/:id" component={UserForm} />
                </div>        
        </Provider>
    </BrowserRouter>    
    , document.getElementById('root'));

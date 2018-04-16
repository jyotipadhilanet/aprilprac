import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {ConnectedRouter,routerMiddleware} from 'react-router-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import CreateHistory from 'history/createBrowserHistory'
import AllReducer from './reducer/index'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const history=CreateHistory()
const store=createStore(AllReducer,composeWithDevTools(applyMiddleware(thunk,routerMiddleware(history))))
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history} >
            <MuiThemeProvider>
                 <App />
            </MuiThemeProvider>
        </ConnectedRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
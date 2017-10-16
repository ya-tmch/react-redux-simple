import React, {Component} from 'react';

import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import reducers from '../reducers'

import {Route, Switch} from 'react-router'
import {Link, Redirect} from 'react-router-dom'
import {routerReducer, routerMiddleware, ConnectedRouter} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/index'

import Departaments from "../components/Departaments";
import Employees from "../components/Employees";
import Employee from "../components/Employee";
import CreateEmployee from "../components/CreateEmployee";
import ErrorComponent from "../components/Error";

const sagaMiddleware = createSagaMiddleware()
const history = createHistory()
const store = createStore(reducers(routerReducer), compose(
        applyMiddleware(routerMiddleware(history), sagaMiddleware),
        // (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    )
)

sagaMiddleware.run(rootSaga)

const LiLink = ({ label, to, activeOnlyWhenExact }) => (
    <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
        <li className={match ? 'active' : ''}>
            <Link to={to}>{label}</Link>
        </li>
    )}/>
)

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="sidebar">
                                    <ul className="nav nav-pills nav-stacked">
                                        <LiLink label="Departaments" to="/departaments"/>
                                        <LiLink label="Employees" to="/employees"/>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="main">
                                    <Switch>
                                        <Route exact path="/departaments" component={Departaments}/>
                                        <Route exact path="/employees" component={Employees}/>
                                        <Route path="/employees/create" component={CreateEmployee}/>
                                        <Route path="/employees/:id" component={Employee}/>
                                        <Route path="/error" component={ErrorComponent}/>
                                        <Redirect to="/employees"/>
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </div>
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default App;

import React from 'react'
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import AboutUs from '../Pages/AboutUs'
import Projects from '../Pages/Projects'
import Contact from '../Pages/Contact'
import HomePage from '../Pages/HomePage'
import Header from './Header'
import { CSSTransition } from 'react-transition-group'
import './transition-styles.css'

const routes = [
    { path: '/', name: 'home', Component: HomePage },
    { path: '/about-us', name: 'about us', Component: AboutUs },
    { path: '/projects', name: 'projects', Component: Projects },
    { path: '/contact', name: 'contact', Component: Contact },
]

const RouterScreen = () => {

    return (
        <Router>
            <Header />

            {routes.map(({ path, Component }) => (
                <Route key={path} exact path={path}>
                    {({ match }) => (
                        <CSSTransition
                            in={match != null}
                            timeout={300}
                            classNames={"page"}
                            unmountOnExit
                        >
                            <div className={"page"}>
                                <Component />
                            </div>
                        </CSSTransition>
                    )}
                </Route>
            ))}
        </Router>
    );
}

export default RouterScreen

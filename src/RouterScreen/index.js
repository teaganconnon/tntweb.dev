import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import AboutUs from '../Pages/AboutUs'
import Projects from '../Pages/Projects'
import Contact from '../Pages/Contact'
import HomePage from '../Pages/HomePage'
import Header from './Header'
import useStyles from './styles'

const RouterScreen = () => {
    const classes = useStyles();

    return (
        <Router>
            <Header />

            <div className={classes.bodyDiv}>
            <Switch>
                <Route path="/about-us">
                    <AboutUs />
                </Route>
                <Route path="/projects">
                    <Projects />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/">
                    <HomePage />
                </Route>
            </Switch>
            </div>
        </Router>
    );
}

export default RouterScreen

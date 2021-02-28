import React from 'react'
import { Link } from 'react-router-dom'
import useStyles from './styles'

const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.headerDiv}>
            <div className={classes.routingLink}>
                <Link to="/">Home</Link>
            </div>
            <div className={classes.routingLink}>
                <Link to="/teagan">Teagan</Link>
            </div>
            <div className={classes.routingLink}>
                <Link to="/tyler">Tyler</Link>
            </div>
        </div>
    )
}

export default Header

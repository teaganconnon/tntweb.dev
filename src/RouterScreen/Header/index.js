import React from 'react'
import { NavLink } from 'react-router-dom'
import useStyles from './styles'

const Header = () => {
    const classes = useStyles();
    const linkData = [{ color: "#d5a6bd", name: "about us" }, { color: "#a4c2f4", name: "projects" }, { color: "#ffe599", name: "contact" }]
    return (
        <div className={classes.headerDiv}>
            <div className={classes.tntLogo}>
                <NavLink className={classes.link} style={{ color: "white", opacity: "inherit", fontSize: "inherit" }} to="/">
                    tntweb
                </NavLink>
            </div>
            <div className={classes.routingDiv}>
                {linkData.map((data, idx) => {
                    return (
                        <NavLink className={classes.link} key={idx} style={{ color: data.color }} activeClassName={classes.active} to={data.name === "about us" ? "/about-us" : `/${data.name}`}>[{data.name}]</NavLink>
                    )
                })}
            </div>
        </div>
    )
}

export default Header

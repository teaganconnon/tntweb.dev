import React from 'react'
import { Link } from 'react-router-dom'
import useStyles from './styles'

const Header = () => {
    const classes = useStyles();
    const linkData = [{ color: "#d5a6bd", name: "about us" }, { color: "#a4c2f4", name:"projects" }, { color: "#ffe599", name: "contact" }]
    return (
        <div className={classes.headerDiv}>
            <div className={classes.tntLogo}>
                <Link className={classes.link} style={{color: "white"}} to="/">
                    tntweb
                </Link>
            </div>
            <div className={classes.routingDiv}>
            {linkData.map((data) => {
                return (
                    <div className={classes.routingLink}>
                        <Link className={classes.link} style={{ color: data.color}} to={data.name==="about us" ? "/about-us" : `/${data.name}`}>[{data.name}]</Link>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Header

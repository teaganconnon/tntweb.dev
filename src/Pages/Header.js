import React from 'react'
import { Link } from 'react-router-dom'
import useStyles from './styles'

const Header = () => {
    const classes = useStyles();
    const linkData = [{ color: "#d5a6bd", name: "home" }, { color: "#a4c2f4", name:"teagan" }, { color: "#ffe599", name: "tyler" }]
    return (
        <div className={classes.headerDiv}>
            {linkData.map((data) => {
                return (
                    <div className={classes.routingLink}>
                        <Link className={classes.link} style={{ color: data.color}} to={data.name==="home" ? "/" : `/${data.name}`}>[{data.name}]</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Header

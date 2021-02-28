import React from 'react'
import useStyles from './styles'

const HomePage = () => {
    const classes = useStyles();

    return (
        <>
        <div className={classes.homePageDiv}>
            Hello HomePage
        </div>
        </>

    )
}

export default HomePage

import React from 'react'
import Header from '../Header'
import useStyles from './styles'

const HomePage = () => {
    const classes = useStyles();

    return (
        <>
        <Header />
            <div className={classes.homeBodyDiv}>
                Hello HomePage
            </div>
        </>

    )
}

export default HomePage

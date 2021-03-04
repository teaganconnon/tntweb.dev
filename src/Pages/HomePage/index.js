import React from 'react'
import useStyles from './styles'
import SectionWipes from '../HomePage/SectionWipes'

const HomePage = () => {
    const classes = useStyles();

    return (
        <div className={classes.content}>
        <SectionWipes />
        </div>

    )
}

export default HomePage

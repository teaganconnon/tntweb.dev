import React from 'react'
import useStyles from './styles'
import Parallax from './Parallax'

const AboutUs = () => {
    const classes = useStyles();

    return (
        <div className={classes.content}>
            <Parallax />
        </div>
    )
}

export default AboutUs

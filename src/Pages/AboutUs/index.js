import React from 'react'
import useStyles from './styles'
import Parallax from './Parallax'

const AboutUs = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.parallax}>
                <Parallax />
            </div>
        </>
    )
}

export default AboutUs;

import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import useStyles from './styles'

const SectionWipes = () => {
  const classes = useStyles();

  return (
    <div className={classes.sectionDiv}>
      <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
        <Scene pin>
          <div className={classes.panel} style={{ backgroundColor: "#3883d8" }}><span>Panel</span></div>
        </Scene>
        <Scene pin>
          <div className={classes.panel} style={{ backgroundColor: "#38ced7" }}>
            <span>Panel</span>
          </div>
        </Scene>
        <Scene pin>
          <div className={classes.panel} style={{ backgroundColor: "#22d659"}}>
            <span>Panel</span>
          </div>
        </Scene>
        <Scene pin>
          <div className={classes.panel} style={{ backgroundColor: "#953543" }}><span>Panel</span></div>
        </Scene>
      </Controller>
    </div>
  )
};

export default SectionWipes;
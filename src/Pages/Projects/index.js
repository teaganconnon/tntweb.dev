import React from 'react'
import FadeIn from 'react-fade-in'

const Projects = () => {
    return (
        <>
        <FadeIn>

            <div style={{ padding: "50px" }}>
                <h1>Projects</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet, purus vitae eleifend tristique, lorem magna volutpat orci, et vehicula erat erat nec elit. Aenean posuere nunc ac cursus facilisis. Aenean vel porta turpis, ut iaculis justo.</p>
            </div> 
            <div style={{padding: "0 50px"}}>
                <h1>Another Div</h1>
                <p>Blah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah Blah</p> 
            </div>
            <div style={{padding: "0 50px"}}>
                <h1>Another transition?</h1>
                <p>Professional</p> 
            </div>
        </FadeIn>
        </>
    )
}

export default Projects

import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/teagan">Teagan</Link>
                    </li>
                    <li>
                        <Link to="/tyler">Tyler</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default HomePage

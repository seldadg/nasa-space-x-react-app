import React from 'react';
import {Link} from 'react-router-dom';
import homeBackgroundVideo from '../images/Astronomy-earth.mp4';
import logo from '../images/logo.png';


export default function Home(){
    return(
        <React.Fragment>
            <div className="home">
            <video autoPlay loop muted id="video">
                <source src={homeBackgroundVideo} type="video/mp4"/>
                </video>
        
            <Link className="astronomy-pic btn-style" to="/nasaphoto"><span>See the Stars</span></Link>
            <Link className="marsRover-pic btn-style" to="/spacex-history-events"><span>SpaceX rockets and history events</span></Link>
        </div>

        <div className="footer">
            <p>Created by <a href="https://techgoalls.com"><img src={logo} alt=""logo />TechGoals</a></p>
        </div>
        </React.Fragment>
    )
}
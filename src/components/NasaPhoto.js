import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import logo from '../images/logo.png';

const apiKey = process.env.REACT_APP_NASA_KEY;


export default function NasaPhoto(){

    const[photoData, setPhotoData] = useState(null);

    useEffect(() => {
        fetchPhoto();

        async function fetchPhoto() {
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
            );
            const data = await res.json();
            setPhotoData(data);
            console.log(data)
        }
    }, []);

    if(!photoData) return <div />;
    
    return(
        <React.Fragment>
            <NavBar />
        <div className="nasa-photo">
            {photoData.media_type === "image" ? (
                <img src={photoData.url} alt={photoData.title}/>
            ) : (
                <iframe 
                title="space-video"
                src={photoData.url}
                frameBorder="0"
                gesture="media"
                allow="enscrypted-media"
                allowFullScreen
                className="photo"
                />
            )}
            <div className="nasaPhoto-content">
                <h1>{photoData.title}</h1>
                <p className="date">Date: {photoData.date}</p>
                <p className="explanation">{photoData.explanation}</p>
            </div>
        </div>

        <div className="footer">
            <p>Created by <a href="https://techgoalls.com"><img src={logo} alt=""logo />TechGoals</a></p>
        </div>
        </React.Fragment>
    )
}

import React, { useState, useEffect, Component } from 'react';
import NavBar from './NavBar';
import logo from '../images/logo.png';
// import AliceCarousel from 'react-alice-carousel';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from './Modal';
import { RocketInfo } from './RocketInfo';
import { Filter } from './Filter';


export default class SpaceXhistoryEvents extends Component {
    constructor() {
        super();

        this.state = {
            history: [],
            rockets: [],
            sortType: 'des',
            selectActive: ""
        }
    }

    componentDidMount() {
        fetch("https://api.spacexdata.com/v4/history")
        .then((response) => response.json())
        .then(history => this.setState({history: history}))
        // .then(history => console.log(history))

        fetch("https://api.spacexdata.com/v4/rockets")
        .then((response) => response.json())
        .then(rockets => this.setState({rockets: rockets}))
    }

    handleChange = (e) => {
        this.setState({ selectActive: e.target.value })
    }

    // galleryItems() {
    //     this.state.rockets.map((rocket, i) => {
    //         var checkImage = rocket.media % 2 === 0 ? [] : rocket.media.filter((eachMedia) => eachMedia.collection_name === "flickr_images");
    //         console.log('henhen', checkImage)
    //         checkImage.map((image, i) => (
    //             <div key={i} className="card-img-top"><img src={image.url} /></div>
    //         ));
    //       })
    //   };

    //   galleryItems() {
    //     var checkImage = this.state.rockets.length === 0 ? [] : this.state.rockets.filter((item) => item.collection_name === "flickr_images")
    //     console.log('henhen', checkImage)
    //     return (
    //         checkImage.map((image, i) => (
    //         <div key={i} className="card-img-top"><img src={image.url} /></div>
    //       ))
    //     )
    //   };
    

    render() {
        const {history, sortType} = this.state;
        const sorted = history.sort( (a, b) => {
            const isReversed = (sortType === 'des') ? 1 : -1;
            return isReversed * b.event_date_utc.localeCompare(a.event_date_utc);

        })

        const {rockets, selectActive} = this.state;
        const filteredRockets = rockets.filter((rocket) =>
        rocket.active ? `Yes` : `No` > selectActive
        )

        // const eachImage = this.galleryItems();
        // const responsive = {
        //     0: {
        //       items: 1
        //     },
        //     600: {
        //       items: 1
        //     },
        //     1024: {
        //       items: 1
        //     }
        //   };


        return(
            
            <>
            <NavBar />
               <h1 className="rockets-title">SpaceX Rockets</h1>
               <Filter onChange={this.handleChange}/>
               <div className="separator"></div>
                <div className="rockets">
                    {filteredRockets.map((rocket) => (
                    <>
                    <div className="each-rocket">
                        {/* <h3>{rocket.name}</h3>
                        <img key={rocket.id} src={rocket.flickr_images} alt={rocket.name} /> */}
                        <div className="card" key={rocket.id} >
                            {/* <AliceCarousel 
                                items = {eachImage}
                                mouseDragEnabled 
                                responsive={responsive}
                                buttonsDisabled={true}
                                dotsDisabled={true}
                            /> */}
                           
                        <img className="card-img-top" src={rocket.flickr_images} alt={rocket.name} />
                            <div className="card-body"> 
                                <h3 className="card-title">{rocket.name}</h3>   
                                <RocketInfo rocket={rocket}/>
                                <a href={`#popup${rocket.id}`} className="btn btn-primary" data-toggle="modal" data-target={`#popup${rocket.id}`}>View more</a>
                            </div>
                        </div>
                    </div> 


                    <Modal rocket={rocket}/>

                
                     
                    </>
                    ))}
                </div>
                
                <h1 className="history-title">Space X events history</h1>\
                <div className="separator"></div>
                <div className="history">
                    {sorted.map((eachHistory) => (
                        <div className="each-history">
                            <p className="history-date" key={eachHistory.id}>{eachHistory.event_date_utc}</p>
                            <h3 key={eachHistory.id}>{eachHistory.title}</h3>
                            <p className="details" key={eachHistory.id}>{eachHistory.details}</p>
                            {/* <ReadMore
                                key={eachHistory.id}
                                value={eachHistory.details}
                                delimiter={'\n'}
                                maxExcerptLength='100'
                                // messageReadMore='50'
                                messageReadLess='100'
                            /> */}
                        </div>
                    ))}
                    
                </div>

                <div className="footer">
                    <p>Created by <a href="https://techgoalls.com"><img src={logo} alt=""logo />TechGoals</a></p>
                </div>
                
            </>
        )
    }
    
}








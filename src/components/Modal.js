
export const Modal = ({rocket}) => (
    <div className="modal fade" 
            id={`popup${rocket.id}`} 
            tabindex="-1" role="dialog" 
            aria-labelledby="exampleModalLabel" 
            aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">{rocket.name}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                </div>
                <div className="modal-body">

                        <div id={`carousel${rocket.id}Controls`} class="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img className="d-block w-100" src={rocket.flickr_images[0]} alt="First slide" />
                            </div>
                            <div className="carousel-item">
                            <img className="d-block w-100" src={rocket.flickr_images[1]} alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                            <img className="d-block w-100" src={rocket.flickr_images[2]} alt="Third slide" />
                            </div>
                        </div>
                        <a class="carousel-control-prev" href={`#carousel${rocket.id}Controls`} role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href={`#carousel${rocket.id}Controls`} role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                        </div>
                </div>
            </div>
        </div>
    </div>
);
function Carousel(){

    return(
        <>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" style={{objectFit:"contain !important"}}>
                <div class="carousel-caption d-none d-md-block">
                    <input className="search-field" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success search-btn" type="submit">Search</button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" id='img_1'>
                    <img src="https://source.unsplash.com/random/2000x2000/?burger" className="d-block w-100" alt="Loading.."/>
                    </div>
                    <div className="carousel-item">
                    <img src="https://source.unsplash.com/random/2000x2000/?pastry" className="d-block w-100" alt="Loading.."/>
                    </div>
                    <div className="carousel-item">
                    <img src="https://source.unsplash.com/random/2000x2000/?barbeque" className="d-block w-100" alt="Loading.."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

export default Carousel;
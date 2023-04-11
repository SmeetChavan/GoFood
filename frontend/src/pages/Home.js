import Footer from "../components/Footer";
import Card from "../components/Card";
// import Carousel from "../components/Carousel";
import { useEffect, useState } from "react";

function Home() {

    const [foodItem, setFoodItem] = useState([]);
    const [foodCat, setFoodCat] = useState([]);

    const [search, setSearch] = useState('');

    const loadData = async () => {

        try {
            const response1 = await fetch('/food');
            const response2 = await fetch('/foodcat');

            const json1 = await response1.json();
            const json2 = await response2.json();

            setFoodItem(json1);
            setFoodCat(json2);
        }
        catch (error) {
            console.log({ error: "failed in fetching data from backend" });
        }
    }

    useEffect(() => {
        loadData();
    }, [])

    return (
        <>
            <div>{/* Carousel start*/}
                <div id="carouselExampleFade" className="carousel slide carousel-fade" style={{ objectFit: "fill" }}>
                    <div className="carousel-caption d-none d-md-block">

                        <div className="fs-2 mb-80 font-extrabold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text inline-block">Hii {localStorage.getItem("name")}</div>

                        <input className="search-field m-auto focus:outline-none" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" id='img_1'>
                            <img src="https://source.unsplash.com/random/2000x2000/?burger" className="d-block w-100" alt="Loading.." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/random/2000x2000/?pastry" className="d-block w-100" alt="Loading.." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/random/2000x2000/?barbeque" className="d-block w-100" alt="Loading.." />
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
            </div>{/* Carousel end*/}



            <div className="m-5 cards">

                {
                    foodCat.length !== 0

                        ? foodCat.map((data) => {

                            return (
                                <div className="row md-5" key={data._id}>
                                    <div key={data._id} className="fs-3 mt-5 mb-3">{data.name}</div>
                                    <hr />

                                    {foodItem.filter((item) => (item.catname === data.name) && (item.name.toLowerCase().includes(search.toLowerCase()))).map((item) => {
                                        return(
                                            <div key={item._id} className="col-sm-12 col-md-6 col-lg-5 col-xl-4 my-3">
                                                <Card foodItem = {item}/>
                                            </div>
                                        )}
                                    )}

                                </div>
                            )
                        })

                        : <div>...</div>
                }

            </div>

            <Footer />

        </>

    );

}

export default Home;
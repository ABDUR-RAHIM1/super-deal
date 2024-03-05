import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom'
import tv from "../../images/banner-images/s1.png"
import headphone from "../../images/banner-images/s2.png"
import xbox from "../../images/banner-images/s3.png"
import "./Slider.css"
function Slider() {
    return (
        <div className="sldierWrapper px-4">
            <Carousel>
                <Carousel.Item interval={1000}>
                    <div className="row">
                        <div className="col-md-5">
                            <div className="sliderTextConatiner text-white">
                                <h2 className='text-2xl my-3'>BEHAIND THE COLLECTION</h2>
                                <h1 className='text-4xl'>
                                    TERRY WEBB - FRANCO' DESIGNER
                                </h1>
                                <p className='mt-3 text-white'>
                                    Proin at sapien ipsum. Aenean placerat, quam ac tempor congue, orci
                                </p>
                                <Link to="/allProducts">
                                    <button className='button text-white my-4 gradColor'>Shop now</button>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="sliderImgContainer">
                                <img className='slliderIImg' src={tv} alt="" />
                            </div>

                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <div className="row">
                        <div className="col-md-5">
                            <div className="sliderTextConatiner text-white">
                                <h2 className='text-2xl my-3'>BEHAIND THE COLLECTION</h2>
                                <h1 className='text-4xl'>
                                    TERRY WEBB - FRANCO' DESIGNER
                                </h1>
                                <p className='mt-3 text-white'>
                                    Proin at sapien ipsum. Aenean placerat, quam ac tempor congue, orci
                                </p>
                                <Link to="/allProducts">
                                    <button className='button text-white my-4 gradColor'>Shop now</button>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="sliderImgContainer">
                                <img className='slliderIImg' src={headphone} alt="" />
                            </div>

                        </div>
                    </div>

                </Carousel.Item>
                <Carousel.Item>
                    <div className="row">
                        <div className="col-md-5">
                            <div className="sliderTextConatiner text-white">
                                <h2 className='text-2xl my-3'>BEHAIND THE COLLECTION</h2>
                                <h1 className='text-4xl'>
                                    TERRY WEBB - FRANCO' DESIGNER
                                </h1>
                                <p className='mt-3 text-white'>
                                    Proin at sapien ipsum. Aenean placerat, quam ac tempor congue, orci
                                </p>
                                <Link to="/allProducts">
                                    <button className='button text-white my-4 gradColor'>Shop now</button>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="sliderImgContainer">
                                <img className='slliderIImg' src={xbox} alt="" />
                            </div>

                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
          
        </div>
    );
}

export default Slider;
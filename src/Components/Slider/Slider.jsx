
import React from 'react';
import './Slider.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom'; 


function Slider() {

    const sliderData = [
        {
            title: "Revolutionize Your Shopping Experience with E-Commerce!",
            text: "Dive into the world of online shopping and unlock convenience like never before. Browse through a vast array of products, compare prices, and make purchases from the comfort of your own home. With e-commerce, the entire marketplace is at your fingertips.",
         
        },
        {
            title: "Discover Endless Possibilities with E-Commerce Innovation",
            text: "Experience the future of retail with cutting-edge e-commerce solutions. From personalized recommendations to seamless checkout experiences, explore how technology is transforming the way we shop. With e-commerce innovation, shopping has never been more exciting or accessible.",
           
        },
        {
            title: "Elevate Your Business with E-Commerce Excellence",
            text: "Harness the power of e-commerce to expand your reach and drive growth for your business. With customizable storefronts, secure payment gateways, and powerful analytics, unlock the full potential of online commerce. Join the e-commerce revolution and take your business to new heights.",
           
        }
    ];


    return (
        <div className='w-full h-[450px] md:h-[600px] bg-black'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    sliderData.map((sd, i) => (
                        <SwiperSlide>
                            <div className='sliderCard'>
                                <div className=' w-full md:w-[48%] px-3 md:px-5 '>
                                    <h2 className='text-2xl md:text-3xl text-[color:var(--special-color)] italic font-medium my-3 capitalize'>{sd.title}</h2>
                                    <p className=' font-normal md:font-medium'>
                                        {sd.text}
                                    </p>
                                    <Link to={"/products"} className="button hover:gradHoverColor duration-200 inline-block my-3 gradColor">Shop Now</Link>
                                </div>
                                {/* <img className=' w-[48%] h-[500px]' src={sd.img} alt="" /> */}
                            </div>
                        </SwiperSlide>
                    ))
                }
             
            </Swiper>
        </div>
    )
}

export default Slider
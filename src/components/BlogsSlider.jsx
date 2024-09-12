import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BlogsCustomSliderCard from './page/BlogsCustomSliderCard';
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

const BlogsSlider = () => {
    const sliderRef = useRef(null);

    const getSliderSettings = () => {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: false
        };


        if (window.innerWidth < 700) {
            settings.slidesToShow = 1;
        } else if (window.innerWidth < 1100) {
            settings.slidesToShow = 2;
        } else {
            settings.slidesToShow = 3;
        }

        return settings;
    };

    const settings = getSliderSettings();

    const cardData = [
        { heading1: 'XAMPP vs Laravel Herd: Choosing the Right Local Development Environment', heading2: 'Compare XAMPP and Laravel Herd for local PHP development. Learn the ke...' },
        { heading1: 'XAMPP vs Laravel Herd: Choosing the Right Local Development Environment', heading2: 'Compare XAMPP and Laravel Herd for local PHP development. Learn the ke...' },
        { heading1: 'XAMPP vs Laravel Herd: Choosing the Right Local Development Environment', heading2: 'Compare XAMPP and Laravel Herd for local PHP development. Learn the ke...' },
        { heading1: 'XAMPP vs Laravel Herd: Choosing the Right Local Development Environment', heading2: 'Compare XAMPP and Laravel Herd for local PHP development. Learn the ke...' },

    ];


    const handlePrev = () => {
        sliderRef.current.slickPrev();
    };


    const handleNext = () => {
        sliderRef.current.slickNext();
    };

    return (
        <div className='px-4 sm:px-8 lg:px-20 py-12'>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl font-semibold'>Recent Blogs</h1>

            <div className="relative">
                <Slider {...settings} ref={sliderRef}>
                    {cardData.map((card, index) => (
                        <div key={index} className="p-4">
                            <BlogsCustomSliderCard
                                heading1={card.heading1}
                                heading2={card.heading2}
                            />
                        </div>
                    ))}
                </Slider>
                <h1
                    onClick={handlePrev}
                    className="absolute cursor-pointer left-2 sm:left-4 md:left-6 lg:left-8 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full text-lg"
                >
                   <FaAngleLeft />
                </h1>
                <h1
                    onClick={handleNext}
                    className="absolute cursor-pointer right-2 sm:right-4 md:right-6 lg:right-8 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full text-lg"
                >
                    <FaAngleRight />
                </h1>
            </div>
        </div>
    );
};

export default BlogsSlider;

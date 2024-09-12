import React, { useRef, useEffect } from 'react';
import { logo1, logo2, logo3, logo4, logo5, logo6 } from '../assets';

const WebServicesSlider = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;

        if (slider) {
            const items = slider.children;
            const totalItems = items.length;
            const itemWidth = items[0].offsetWidth;

            slider.style.width = `${totalItems * itemWidth}px`;
            slider.style.animation = `slide ${totalItems * 1}s linear infinite`;

            for (let i = 0; i < totalItems; i++) {
                slider.appendChild(items[i].cloneNode(true));
            }
        }
    }, []);

    return (
        <div className='py-12'>
            <div className='text-2xl md:text-3xl lg:text-4xl flex text-center font-semibold items-center justify-center'>
                <h1>BE AMONG THE 1% MOST PRODUCTIVE TEAMS IN THE WORLD</h1>
            </div>
            <div className="flex bg-[#052afb] h-20 md:h-24 lg:h-28 mt-5 overflow-hidden">
                <div
                    ref={sliderRef}
                    className="flex items-center justify-center gap-6 md:gap-8 lg:gap-12 whitespace-nowrap infinite-slider"
                >
                    <div className="flex-shrink-0 p-2 md:p-3 lg:p-4">
                        <img src={logo1} className="h-8 md:h-10 lg:h-12" alt="" />
                    </div>
                    <div className="flex-shrink-0 p-2 md:p-3 lg:p-4">
                        <img src={logo2} className="h-8 md:h-10 lg:h-12" alt="" />
                    </div>
                    <div className="flex-shrink-0 p-2 md:p-3 lg:p-4">
                        <img src={logo3} className="h-8 md:h-10 lg:h-12" alt="" />
                    </div>
                    <div className="flex-shrink-0 p-2 md:p-3 lg:p-4">
                        <img src={logo4} className="h-8 md:h-10 lg:h-12" alt="" />
                    </div>
                    <div className="flex-shrink-0 p-2 md:p-3 lg:p-4">
                        <img src={logo5} className="h-8 md:h-10 lg:h-12" alt="" />
                    </div>
                    <div className="flex-shrink-0 p-2 md:p-3 lg:p-4">
                        <img src={logo6} className="h-8 md:h-10 lg:h-12" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WebServicesSlider;

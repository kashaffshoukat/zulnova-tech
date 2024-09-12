import React, { useRef, useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { amirbg, laravel, react, rohan, zubairp } from '../assets';

const BlogDetail2 = () => {
    // State to store the currently active section
    const [activeSection, setActiveSection] = useState(null);

    // Refs for sections
    const sectionRefs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
    ];

    const items = [
        { title: 'XAMPP', ref: sectionRefs[0],},
        { title: 'Laravel Herd', ref: sectionRefs[1] },
        { title: 'XAMPP and Laravel Herd Comparison', ref: sectionRefs[2] },
        { title: 'Server Solutions', ref: sectionRefs[3], img:laravel },
        { title: 'Programming Languages Support', ref: sectionRefs[4] },
        { title: 'PreInstalled Packages', ref: sectionRefs[5],img:react },
        { title: 'Platform Compatibility', ref: sectionRefs[6] },
        { title: 'Databases Availability', ref: sectionRefs[7] },
        { title: 'User Experience and Ease', ref: sectionRefs[8],img:amirbg },
        { title: 'Isolation', ref: sectionRefs[9] },
        { title: 'Performance', ref: sectionRefs[10] },
        { title: 'Pricing', ref: sectionRefs[11] },
    ];

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target);
                }
            });
        }, observerOptions);

        sectionRefs.forEach(ref => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => {
            sectionRefs.forEach(ref => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            });
        };
    }, [sectionRefs]);

    const handleScrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    };

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-8 lg:p-12 gap-4 lg:gap-8'>
            <div className='col-span-1 md:col-span-1 lg:col-span-1'>
                <div className='flex items-center rounded-full border border-[#808080] mb-4'>
                    <input
                        placeholder="Search..." type="text" className="p-3 text-gray-600 flex items-center bg-white rounded-full focus:outline-none w-full" />
                    <FaSearch className="text-[#808080] text-2xl mr-3" />
                </div>
                <div className='flex flex-col gap-2'>
                    {items.map((item, index) => (
                        <h1
                            key={index}
                            className={`text-sm cursor-pointer ${activeSection === item.ref.current ? 'text-blue-500' : 'text-[#808080]'}`}
                            onClick={() => handleScrollToSection(item.ref)}
                        >
                            {item.title}
                        </h1>
                    ))}
                </div>
            </div>

            <div className='col-span-1 md:col-span-2 lg:col-span-3 overflow-y-auto' style={{ maxHeight: 'calc(100vh - 2rem)', overflowY: 'scroll', scrollbarWidth: 'none' }}>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>XAMPP vs Laravel Herd: Choosing the Right Local Development Environment</h1>
                    <p className='text-sm md:text-base lg:text-lg text-gray-600'>Compare XAMPP and Laravel Herd for local PHP development. Learn the key features, pros, and cons to determine which tool best suits your web development needs.</p>
                    <div className='flex items-center gap-3'>
                        <img src={zubairp} alt="" className='h-10 w-10 md:h-12 md:w-12 object-cover rounded-full' />
                        <div className='flex flex-col'>
                            <h1 className='text-start cursor-pointer font-semibold'>Abdul Basit Khan</h1>
                            <p className='text-sm md:text-base'>Chief Marketing Officer - CMO</p>
                        </div>
                    </div>
                    <p className='text-center text-sm md:text-base'>Updated at: September 11, 2024</p>

                    {items.map((item, index) => (
                        <div key={index} ref={sectionRefs[index]} className='flex flex-col gap-3 mt-4'>
                            <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>{item.title}</h1>
                            <p className='text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi culpa sequi facere in laboriosam quae ut maxime sunt asperiores dolorum magni reiciendis quos doloremque porro numquam, assumenda veniam nemo aliquam adipisci sapiente laborum consectetur...</p>
                            <img src={item.img} alt="" className='mx-auto w-80' />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogDetail2;

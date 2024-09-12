import React from 'react'
import { FaSearch } from "react-icons/fa";
import BlogCustomCard from './BlogCustomCard';

const AllBlogs = () => {

    const blogsdata = [
        {
            heading1: 'XAMPP vs Laravel Herd: Choosing the Right Local Development Environment',
            heading2: 'Compare XAMPP and Laravel Herd for local PHP...',
            name: 'Abdul Basit Khan',
            position: 'Chief Marketing Officer - CMO'
        },
        {
            heading1: 'XAMPP vs Laravel Herd: Choosing the Right Local Development Environment',
            heading2: 'Compare XAMPP and Laravel Herd for local PHP...',
            name: 'Abdul Basit Khan',
            position: 'Chief Marketing Officer - CMO'
        },
        {
            heading1: 'XAMPP vs Laravel Herd: Choosing the Right Local Development Environment',
            heading2: 'Compare XAMPP and Laravel Herd for local PHP...',
            name: 'Abdul Basit Khan',
            position: 'Chief Marketing Officer - CMO'
        },
    ]

    return (
        <>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-2 py-5">
                <div className="flex-1">
                    <h2 className="text-2xl sm:text-4xl font-bold">
                        Latest Blog Posts
                    </h2>
                </div>
                <div className="flex-shrink-0">
                    <div className="flex items-center bg-white rounded-full border border-[#808080]">
                        <input
                            placeholder="Search..."
                            type="text"
                            className="p-2 text-gray-600 rounded-full focus:outline-none flex-grow"
                        />
                        <div className="p-2">
                            <FaSearch className="text-[#808080]" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:py-16">
                {blogsdata.map((data, index) => (
                    <div key={index}>
                        <BlogCustomCard
                            heading1={data.heading1}
                            heading2={data.heading2}
                            name={data.name}
                            position={data.position}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}

export default AllBlogs

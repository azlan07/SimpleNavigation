import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiArrowNarrowLeft, HiArrowNarrowRight, HiAcademicCap } from "react-icons/hi";

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
        const storedIsSidebarOpen = localStorage.getItem('isSidebarOpen');
        return storedIsSidebarOpen ? JSON.parse(storedIsSidebarOpen) : true;
    });

    useEffect(() => {
        localStorage.setItem('isSidebarOpen', JSON.stringify(isSidebarOpen));
    }, [isSidebarOpen]);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className={`bg-sky-600 text-white w-64 h-screen flex flex-col transition-all duration-300 ease-in-out ${isSidebarOpen ? '' : 'w-16'}`}>
            <div className="p-4 flex items-center justify-center">
                <button
                    className="btn bg mx-auto "
                    onClick={toggleSidebar}
                >
                    {isSidebarOpen ? (
                        <>
                            <HiArrowNarrowLeft />
                        </>
                    ) : (
                        <>
                            <HiArrowNarrowRight/>
                        </>
                    )}
                </button>
            </div>
            <Link to={"#"} className='btn btn-secondary flex mx-auto text-lg'>
                <HiAcademicCap/>
                {isSidebarOpen && <span className="ml-2">tes</span>}
            </Link>
            <Link to={"#"} className='btn btn-secondary flex mx-auto text-lg mt-2'>
                <HiAcademicCap/>
                {isSidebarOpen && <span className="ml-2">tes</span>}
            </Link>
        </div>
    );
};

export default Sidebar;

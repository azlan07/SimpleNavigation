import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Home = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <Navbar />
                {/* Content of your application */}
                <div className="p-4">
                    <h1 className="text-2xl font-bold">Main Content</h1>
                    <p>This is the main content area of your application.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
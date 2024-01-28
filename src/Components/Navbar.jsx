import React from 'react';

const Navbar = () => {
  return (
    <nav className="shadow-sm p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <a href="#" className="text-black font-bold">Brand</a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="btn btn-primary">Sign In</button>
            <button className="btn btn-secondary">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

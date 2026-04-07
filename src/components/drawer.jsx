import React, { useState } from "react";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen(!isOpen);
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <button onClick={toggleDrawer} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
        {isOpen ? "Close Drawer" : "Open Drawer"}
      </button>
      
      <div className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}>

        
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Drawer Menu</h2>
          <ul className="space-y-4">
            <li><a href="#" className="text-gray-800 hover:text-blue-500">Home</a></li>
            <li><a href="#" className="text-gray-800 hover:text-blue-500">Profile</a></li>
            <li><a href="#" className="text-gray-800 hover:text-blue-500">Settings</a></li>
          </ul>
          <button onClick={toggleDrawer} className="absolute top-4 right-4 text-gray-600">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;   
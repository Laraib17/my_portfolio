import { NavLink } from "react-router-dom";
import { logo } from "../assets/assets";
function BasicExample() {
  return (
    <div className="flex items-center justify-between px-10 py-4 bg-gray-800  text-teal-200">
      <div className="drawer">
         <button onClick={() => document.getElementById("my-drawer-3").checked = true} className="drawer-toggle ">
            Click here
         </button>
      </div>
      <img src={logo} alt="Logo" className="h-8 w-10" />
      <ul className="flex gap-10 flex-row text-lg font-medium">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p className="hover:text-teal-500">Home</p>
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p className="hover:text-teal-500">About</p>
        </NavLink>
        <NavLink to="/services" className="flex flex-col items-center gap-1">
          <p className="hover:text-teal-500">Services</p>
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p className="hover:text-teal-500">Contact</p>
        </NavLink>
      </ul>
    </div>
  );
}

export default BasicExample;

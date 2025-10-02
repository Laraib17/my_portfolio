import { NavLink } from "react-router-dom";
import { logo } from "../assets/assets";
function BasicExample() {
  return (
    <div className="flex items-center justify-between px-10 py-4 bg-gray-800  text-teal-200">
      <div className="flex items-center gap-2 justify-between">
         <button onClick={() => document.getElementById("my-drawer-3").checked = true} className="drawer-toggle btn btn-primary lg:hidden">
            =
         </button>
         <img src={logo} alt="Logo" className="h-8 w-10" />
      </div>
      <ul className="flex gap-8 flex-row text-md font-medium">
        <NavLink to="/" className="flex flex-col items-center gap- ">
          <p className="hover:text-teal-500 ">Home</p>
          <hr className="border-t border-teal-500 w-full hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap- ">
          <p className="hover:text-teal-500">About</p>
          <hr className="border-t border-teal-500 w-full hidden" />
        </NavLink>
        <NavLink to="/services" className="flex flex-col items-center gap- ">
          <p className="hover:text-teal-500">Services</p>
          <hr className="border-t border-teal-500 w-full hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap- ">
          <p className="hover:text-teal-500">Contact</p>
          <hr className="border-t border-teal-500 w-full hidden" />
        </NavLink>
      </ul>
      <div>
        <button className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600">
          Login
        </button>
      </div>
    </div>
  );
}

export default BasicExample;

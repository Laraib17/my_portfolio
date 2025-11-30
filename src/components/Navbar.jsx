import { NavLink } from "react-router-dom";
import { logo } from "../assets/assets";
import { profile_icon } from "../assets/assets";
const BasicExample = () => {
  return (
    <div className="flex items-center justify-between sm:items-center px-10 py-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="flex items-center gap-2 justify-between">
        <button
          onClick={() =>
            (document.getElementById("my-drawer-3").checked = true)
          }
          className="drawer-toggle btn btn-primary lg:hidden"
        >
          =
        </button>
        <img src={logo} alt="Logo" className="h-8 w-10" />
      </div>
      <ul className="flex gap-8 flex-row text-md font-medium">
        <NavLink to="/" className="flex flex-col items-center gap- ">
          <p className="hover:text-teal-500 ">Home</p>
          <hr className="border-t border-ptext-teal-500 w-full hidden" />
        </NavLink>
        <NavLink to="/projects" className="flex flex-col items-center gap- ">
          <p className="hover:text-teal-500">Projects</p>
          <hr className="border-t border-ptext-teal-500 w-full hidden" />
        </NavLink>
        <NavLink to="/services" className="flex flex-col items-center gap- ">
          <p className="hover:text-teal-500">Services</p>
          <hr className="border-t border-ptext-teal-500 w-full hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap- ">
          <p className="hover:text-teal-500">Contact</p>
          <hr className="border-t border-ptext-teal-500 w-full hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        <button className="bg-purpl text-white px-4 py-2 rounded-full hover:bg-purpl font-semibold">
          Coffee
        </button>
        <div className="group relative">
          <img
            className="w-10 cursor-pointer rounded-full"
            src={profile_icon}
            alt=""
          />
          <div className="group-hover:block hidden absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg">
            <div className="p-4 border-b border-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BasicExample;

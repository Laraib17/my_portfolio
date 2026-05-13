import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import profile_icon from "../assets/profile_icon.png";
const BasicExample = () => {
  return (
    <div className="flex items-center justify-between sm:items-center px-10 py-4 bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="sm:items-center-safe h-10 w-10 ">
        <img src={logo} alt="logo"/>
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
        <button className="bg-purpl-900 text-white px-4 py-2 rounded-full font-semibold" onClick={() => (null)}>
          Coffee
        </button>
        <div className="group relative">
          <img
            className="w-10 cursor-pointer rounded-full"
            src={profile_icon}
            alt="Profile"/>
        </div>
      </div>
    </div>
  );
};
export default BasicExample;

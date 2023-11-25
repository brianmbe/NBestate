import { FaSearch } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { nav } from "./Header.module.css";

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md ">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-700">Topline</span>
            <span className="text-red-700">Estate</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search....."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch color="text-slate-500" />
        </form>
        <nav className={nav}>
          <ul className="flex gap-4">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="hidden sm:inline text-slate-700 hover:underline">
              <NavLink to="about">About</NavLink>
            </li>
            <li className="text-slate-700 hover:underline">
              <NavLink to="sign-in">Sign in</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

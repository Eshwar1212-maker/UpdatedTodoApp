import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [navbar, setNavbar] = useState(false);

  const logOut = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <nav className="w-full bg-slate-900 shadow">
      {user ? (
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <div>
                <h1 className="font-fontBrush sm:text-2xl md:text-3xl lg:text-3xl text-white">
                  BetterMe
                </h1>
              </div>
              <div className="md:hidden font-bold text-black">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <AiOutlineClose className="text-slate-700" size={40} />
                  ) : (
                    <AiOutlineMenu className="text-slate-700" size={40} />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 list-none text-white">
                <li
                  onClick={() => setNavbar(!navbar)}
                  className="transition ease-in-out delay-400 font-font-caveat text-2xl
           hover:-translate-y-1 hover:hover:text-orange-700"
                >
                  <Link className="list-none text-white" to="">
                    Home
                  </Link>
                </li>
                <li
                  onClick={() => setNavbar(!navbar)}
                  className="transition ease-in-out delay-400 font-font-caveat text-2xl
           hover:-translate-y-1 hover:hover:text-orange-700"
                >
                  <Link className="list-none text-white" to="goals">
                    Goals
                  </Link>
                </li>
                <li
                  onClick={() => setNavbar(!navbar)}
                  className="transition ease-in-out delay-400 font-font-caveat text-2xl
           hover:-translate-y-1 hover:hover:text-orange-700"
                >
                  <Link className="list-none text-white" to="todo">
                    Tasks
                  </Link>
                </li>
                <button
                  onClick={logOut}
                  navigate=""
                  className="transition ease-in-out delay-400 border-2xl text-2xl bg-slate-800 w-fit rounded-3xl p-2 font-fontFuzzy
           hover:-translate-y-1 hover:hover:text-orange-700"
                >
                  Logout
                </button>
                <br /> <br /> <br />
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3, duration: 1 }}
                  className="md:hidden font-fontFuzzy text-2xl text-slate-500 font-bold "
                >
                  Welcome {auth.currentUser?.displayName}!
                </motion.h1>
              </ul>
            </div>
          </div>
          <div className="hidden space-x-2 md:inline-block">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-[24px] text-slate-500 font-font-caveat"
            >
              {auth.currentUser?.displayName}
            </motion.h1>
          </div>
        </div>
      ) : (
        <div className="p-9 m-auto flex justify-between cursor-pointer bg-[#0a192f]">
          <br />
        </div>
      )}
    </nav>
  );
};

export default Navbar;

/*  
          <AiOutlineMenu size={50} className="text-black" />


<div className="p-9 m-auto flex justify-between cursor-pointer bg-[#0a192f] text-gray-400">
      {}
      <div>
        <h1 className="font-fontBrush sm:text-2xl md:text-3xl lg:text-3xl">
          BetterMe
        </h1>
      </div>
      {
        user && 
      <div>
        <h1 className="font-fontFuzzy sm:text-[18px] md:text-2xl lg:text-3xl">
          Welcome Eshwar!
        </h1>
      </div>
        }
      {user && (
        <div className="flex-row underline font-font-caveat sm:text-[22px] md:text-[22px] lg:text-xl">
          <ul className="">
            <li
              className="transition ease-in-out delay-400 
           hover:-translate-y-1 hover:hover:text-orange-700"
            >
              <Link to="">Home</Link>
            </li>
            <li
              className="transition ease-in-out delay-400
           hover:-translate-y-1 hover:hover:text-orange-700"
            >
              <Link to="goals">Goals</Link>
            </li>
            <li
              className="transition ease-in-out delay-400 
           hover:-translate-y-1 hover:hover:text-orange-700"
            >
              <Link to="todo">Tasks</Link>
            </li>
            <li
              navigate=''
              onClick={signOUt}
              className="transition ease-in-out delay-400 
           hover:-translate-y-1 hover:hover:text-orange-700"
            >
              Logout
            </li>
          </ul>
        </div>
        */

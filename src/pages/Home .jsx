import React from "react";
import { signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { auth, provider } from "../firebase";
import Typed from "react-typed";
import Slider from "../components/Slider";
import { motion } from "framer-motion";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'



const Home = () => {
  const [user] = useAuthState(auth);

  const signIn = async () => {
    const result = await signInWithPopup(auth, provider);
  };

  const logOut = async () => {
    await signOut(auth);
  };

  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
     className="bg-black m-auto flex flex-g lg: flex-col sm:flex-row md:flex-row 2xl">
      <div className="p-7 m-auto md:w-[650px] lg:w-[650px] md:h-[6100px] lg:h-[650px]">
        <Slider />
      </div>
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <div>
          <h1 className="font-headerFonts text-center text-white md:text-6xl sm-text-6xl text-4xl md:py-6">
            Welcome to <span className="font-fontBrush">BetterMe!</span>
          </h1>
          <p className="text-white text-center p-8 lg:text-xl md:text-xl sm:text-[20px]">
            Log in with your google account so we can help you stat making
            progress towards all of your goals!
          </p>
        </div>
        <div>
          <p className="text-2xl font-logoFonts text-red-900">
            Let us help you{" "}
            <span className="text-white">
              <Typed
                strings={[
                  "Thrive",
                  "Get Stuff Done",
                  "Be productive",
                  "Be Succesfull",
                  "Accomplish your goals",
                ]}
                typeSpeed={120}
                backSpeed={140}
                loop
              />
            </span>
          </p>
        </div>
        <div className="p-5 my-3 px-4">
          {user ? (
          <motion.button
            initial={{ opacity: 0
             }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              onClick={logOut}
              className="text-center text-white group border-2 px-6 py-3 my-2 w-fit
          items-center hover:bg-red-800 hover:border-red-800"
            >
              Sign Out
            </motion.button>
          ) : (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              onClick={signIn}
              className="text-center text-white group border-2 px-6 py-3 my-2 w-fit
          items-center hover:bg-red-800 hover:border-red-800"
            >
              Log In With Google
            </motion.button>
          )}
          0
        </div>
      </div>
      <br /> <br /> <br />
    </motion.div>
  );
};

export default Home;

//        className="rounded-3xl sm:w-[550px] md:w-[650px] lg:w-[470px] sm:h-[390px] md:h-[390px]"

import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { auth, provider, db } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { uid } from "uid";
import { motion } from "framer-motion";
import {
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  QuerySnapshot,
  updateDoc,
} from "firebase/firestore";
import { collection } from "firebase/firestore";
import GoalsList from "./GoalsList"


const style = {
  bg: `h-screen w-screen p-8 bg-black`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-6`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl rounded-2xl`,
  button: `border p-4 ml-2 bg-slate-400 rounded-xl`,
  count: `text-center p-2 font-caveat`,
};

const Goals = () => {
  const [goals, setGoals] = useState([]);
  const [input, setInput] = useState("");

  const createTodo = async (e) => {
    e.preventDefault(e);
    if (input === "") {
      alert("Please enter a valid todo");
      return;
    }
    await addDoc(collection(db, "goals"), {
      text: input,
      completed: false,
    });
    setInput(' ');
  };

  useEffect(() => {
    const q = query(collection(db, "goals"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let goalsArr = [];
      querySnapshot.forEach((doc) => {
        goalsArr.push({ ...doc.data(), id: doc.id });
      });
      setGoals(goalsArr);
    });
    return () => unsubscribe();
  }, []);

  const toggleComplete = async (goal) => {
    await updateDoc(doc(db, "goals", goals.id), {
      completed: !goal.completed,
    });
  };

  // Delete todo
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "goals", id));
  };

  
  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>{new Date().getFullYear()} Goals</h3>
        <form onSubmit={createTodo} className={style.form}>
          <input
            value={input}
            className={style.input}
            type="text"
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ex: Lose 20 pounds..."
          />
          <button className={style.button}>
            <AiOutlinePlus size={30} />
          </button>
        </form>
        <ul></ul>
        <p
          className="text-center font-font-caveat 
        sm:text-md md:text-[23px] lg:text-[25px]"
        >
          {`You have ${goals.length} Goals`}
        </p>
        <ul>
          {goals.map((goal, index) => (
            <GoalsList
              key={index}
              goal={goal}
              toggleComplesste={toggleComplete}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Goals
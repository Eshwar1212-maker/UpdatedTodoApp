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
import TodoTask from "./TodoTask";

const style = {
  bg: `h-screen w-screen p-8 bg-black`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-6`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl rounded-2xl`,
  button: `border p-4 ml-2 bg-slate-400 rounded-xl`,
  count: `text-center p-2 font-caveat`,
};


var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); 
var yyyy = today.getFullYear();

today = mm + '/' + dd + ''


const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const createTodo = async (e) => {
    e.preventDefault(e);
    if (input === "") {
      alert("Please enter a valid todo");
      return;
    }
    await addDoc(collection(db, "todos"), {
      text: input,
      completed: false,
    });
    setInput(' ');
  };

  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };

  // Delete todo
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>{today}<span className="text-[28px] font-fontBrush">s</span> Tasks</h3>
        <form onSubmit={createTodo} className={style.form}>
          <input
            value={input}
            className={style.input}
            type="text"
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ex: Clean room..."
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
          {`You have ${todos.length} todos`}
        </p>
        <ul>
          {todos.map((todo, index) => (
            <TodoTask
              key={index}
              todo={todo}
              toggleComplesste={toggleComplete}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Todo;

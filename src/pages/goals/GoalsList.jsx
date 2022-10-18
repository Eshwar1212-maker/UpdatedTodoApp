import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const style = {
  li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
  liComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize`,
  row: `flex`,
  text: `ml-2 cursor-pointer`,
  textComplete: `ml-2 cursor-pointer line-through`,
  button: `cursor-pointer flex items-center`,
};

const TodoTask = ({ goal, toggleComplete, deleteTodo }) => {
  return (
    <li className={goal.completed ? style.liComplete : style.li}>
      <div className={style.row}>
        <input
          onChange={() => toggleComplete(goal)}
          type="checkbox"
          checked={goal.completed ? "checked" : ""}
        />
        <p
          onClick={() => toggleComplete(goal)}
          className={goal.completed ? style.textComplete : style.text}
        >
          {goal.text}
        </p>
      </div>
      <button
        className="hover:text-orange-800"
        onClick={() => deleteTodo(goal.id)}
      >
        {<FaRegTrashAlt />}
      </button>
    </li>
  );
};

export default TodoTask;

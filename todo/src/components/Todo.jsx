import React from "react";
import { useState, useEffect } from "react";
import Modal from "./Modal";

function Todo(props) {
  const [doneTodo, setDoneTodo] = useState(props.todo.isCompleted);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setDoneTodo(props.todo.isCompleted);
  }, [props.todo.isCompleted]);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex justify-between items-center border-2 border-dark-1 dark:border-dark-4 dark:bg-dark-1 dark:text-dark-4 rounded-xl w-1/4 mt-3 h-8">
      <div>
        <input
          type="checkbox"
          className="ml-2"
          checked={doneTodo}
          onChange={() =>
            props.changeTodoStatus({ ...props.todo, isCompleted: !doneTodo })
          }
        />
      </div>
      <div>
        <p className={`${doneTodo ? "line-through" : ""} text-base font-semibold`}>
          {props.todo.content.toUpperCase()}
        </p>
      </div>
      <div>
        <button className="mr-2 hover:text-red-500" onClick={togglePopup}>
          <i className="bi bi-pencil"></i>
        </button>
        <button
          className="mr-2 hover:text-red-500"
          onClick={() => props.deleteTodo(props.todo.id)}
        >
          <i className="bi bi-trash"></i>
        </button>
        {isOpen && <Modal todo={props.todo} handleClose={togglePopup} />}
      </div>
    </div>
  );
}

export default Todo;

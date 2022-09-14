import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../redux/TodoSlice";

function Modal(props) {
  const [task, setTask] = useState(props.todo.content);

  const dispatch = useDispatch();
  const editTask = () => {
    const id = props.todo.id;
    const data = {
      id: props.todo.id,
      content: task,
      isCompleted: props.todo.isCompleted,
    };
    dispatch(updateTodo({ id, data }));
    props.handleClose();
  };
  return (
    <div className="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
      <div className="bg-light-2 border-2 border-light-4 px-16 py-14 rounded-md text-center flex flex-col dark:bg-dark-2 dark:border-dark-4">
        <h1 className="text-xl mb-4 font-bold text-dark-1 dark:text-dark-4">Edit Task</h1>
        <input
          type="text"
          value={task.toUpperCase() || ""}
          onChange={(e) => setTask(e.target.value)}
          className="my-2 border-2 rounded-lg border-dark-1 text-center dark:text-dark-1"
        />
        <div>
          <button
            className="mt-4 px-5 border-2 border-light-1 rounded-2xl bg-light-3 text-dark-1 dark:border-dark-4 dark:bg-dark-1 dark:text-dark-4 font-semibold mr-2"
            onClick={props.handleClose}
          >
            Close
          </button>
          <button
            className='mt-4 px-6 border-2 border-light-1 rounded-2xl bg-light-3 text-dark-1 dark:border-dark-4 dark:bg-dark-1 dark:text-dark-4 font-semibold'
            onClick={() => {
              editTask();
            }}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;

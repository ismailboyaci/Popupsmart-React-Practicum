import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import {
  retrieveTodos,
  updateTodo,
  createTodo,
  deleteTodos,
} from "../redux/TodoSlice";
import Spinner from "./Spinner";

function Content() {
  const [task, setTask] = useState();
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(retrieveTodos());
  }, [dispatch]);

  const changeTodoStatus = (updatedState) => {
    const id = updatedState.id;
    const data = updatedState;
    dispatch(updateTodo({ id, data }));
  };

  const deleteTodo = (id) => {
    dispatch(deleteTodos({ id }));
  };
  const addTodo = (e) => {
    e.preventDefault();
    const data = {
      content: task,
      isCompleted: false,
    };
    dispatch(createTodo(data));
    setTask("");
  };

  return (
    <div className=" bg-gradient-to-r from-light-2 to-light-4 dark:from-dark-2 dark:to-dark-5 bg-opacity-60 h-screen">
      <Header />
      <div className="flex flex-col justify-center items-center mt-2">
        <form
          onSubmit={addTodo}
          className=" flex justify-center w-1/2 rounded-xl mt-4 "
        >
          <input
            type="text"
            placeholder="What needs to be done?"
            onChange={(e) => setTask(e.target.value)}
            value={task || ""}
            className=" border-dark-1 border-2 rounded-lg px-2 mr-2"
          />
          <button className="px-2 py-1 border-2 rounded-2xl font-semibold  border-dark-1 bg-light-3 text-dark-1  dark:border-dark-4 dark:bg-dark-1 dark:text-dark-4">
            Add Todo
          </button>
        </form>
      </div>
      {todos.length !== 0 ? (
        <div className="flex flex-col justify-center items-center">
          {todos
            .filter((todo) => todo.isCompleted === false)
            .map((todo, index) => (
              <Todo
                key={index}
                todo={todo}
                changeTodoStatus={(updatedState) =>
                  changeTodoStatus(updatedState)
                }
                deleteTodo={(id) => deleteTodo(id)}
              />
            ))}
          <p className="text-lg font-semibold dark:text-dark-4 mt-2 underline">Completed Tasks</p>
          {todos
            .filter((todo) => todo.isCompleted === true)
            .map((todo, index) => (
              <Todo
                key={index}
                todo={todo}
                changeTodoStatus={(updatedState) =>
                  changeTodoStatus(updatedState)
                }
                deleteTodo={(id) => deleteTodo(id)}
              />
            ))}
        </div>
      ) : (
        <div>
          <Spinner />
        </div>
      )}
    </div>
  );
}

export default Content;

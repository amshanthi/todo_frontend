import { useReducer, useEffect, useState } from "react";
import Button from "../ResueButton/Button";
import NewTaskView from "./NewTaskView";

function reducer(state, action) {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.data };

    case "SET_FILTER":
      return { ...state, filterType: action.filterType };
    case "completed":
      return { ...state, filterType: "completed" };
    case "all":
      return { ...state, filterType: "all" };
    case "pending":
      return { ...state, filterType: "pending" };
    default:
      return state;
  }
}

export default function TodoList({ data }) {
  // reducer

  const [state, dispatch] = useReducer(reducer, {
    data: [],
    filterType: "all",
  });

  const filterData = state.data.filter((item) => {
    if (state.filterType == "all") {
      return true;
    } else if (state.filterType == "pending") {
      return !item.Completed;
    } else if (state.filterType == "completed") {
      return item.Completed;
    }
    return true;
  });
  useEffect(() => {
    dispatch({ type: "SET_DATA", data: data });
  }, [data]);

  const [text, setText] = useState("");
  const postTaskHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    setText("");
    if (data.name !== "") {
      let userData = data.name.split("");
      const firstLetter = userData[0].toUpperCase();
      userData[0] = firstLetter;
      data.name = `${userData.join("")}`;
      const res = await fetch("https://todoapp-bankend.onrender.com/Add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const res1 = await fetch("https://todoapp-bankend.onrender.com/Home");
      const allTasks = await res1.json();
      dispatch({ type: "SET_DATA", data: allTasks });

      dispatch({ type: "SET_FILTER", filterType: "all" });
    } else {
      alert("invalid...");
    }
  };

  const onChangeHandler = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <h1 className="flex justify-center text-3xl ">To Do App</h1>
      <div className="w-full h-screen bg-gray-50 p-4 m-2 shadow-md">
        <form
          onSubmit={postTaskHandler}
          className="flex justify-center items-center m-4 "
        >
          <input
            value={text}
            placeholder="write here..."
            onChange={onChangeHandler}
            className="w-1/2 m-2 p-2 border-2 rounded-2xl hover:outline-blue-500 "
            type="text"
            name="name"
            id=""
          />
          <Button
            styles={
              "bg-blue-600 cursor-pointer hover:bg-blue-700 text-amber-50 font-semibold p-4 rounded rounded-xl"
            }
            label="Add Task"
          />
        </form>
        <div className="flex flex-row justify-center ">
          <button
            onClick={() => {
              dispatch({ type: "all" });
            }}
            className={`outline-1 rounded p-2 m-2
               ${
                 state.filterType !== "all"
                   ? "cursor-pointer opacity-100"
                   : "cursor-not-allowed opacity-50 "
               }`}
            disabled={state.filterType !== "all" ? false : true}
          >
            All Task
          </button>
          <button
            onClick={() => {
              dispatch({ type: "pending" });
            }}
            className={`outline-1 rounded p-2 m-2
               ${
                 state.filterType !== "pending"
                   ? "cursor-pointer opacity-100"
                   : "cursor-not-allowed opacity-50"
               }`}
            disabled={state.filterType !== "pending" ? false : true}
          >
            Pending
          </button>
          <button
            onClick={() => {
              dispatch({ type: "completed" });
            }}
            className={`outline-1 rounded p-2 m-2
               ${
                 state.filterType !== "completed"
                   ? "cursor-pointer opacity-100 border-amber-500"
                   : "cursor-not-allowed opacity-50"
               }`}
            disabled={state.filterType !== "completed" ? false : true}
          >
            Completed
          </button>
        </div>
        <div className="flex flex-row justify-center ">
          <NewTaskView
            data={filterData}
            dispatch={dispatch}
            status={state.filterType}
          />
        </div>
      </div>
    </div>
  );
}

import { useReducer, useEffect, useState } from "react";
import Button from "../ResueButton/Button";
import NewTaskView from "./NewTaskView";

function reducer(state, action) {
  // console.log(state);
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.data };
    case "completed":
      return { ...state, filterType: "completed" };
    case "All":
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
    filterType: "All",
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
      const res = await fetch("http://localhost:5000/Add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const res1 = await fetch("http://localhost:5000/Home");
      const allTasks = await res1.json();
      dispatch({ type: "SET_DATA", data: allTasks });
    } else {
      alert("invalid...");
    }
  };

  const onChangeHandler = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <div className=" w-full h-screen bg-gray-50 p-4 m-2 shadow-md">
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
        <div>
          <button
            onClick={() => {
              dispatch({ type: "All" });
            }}
            className="cursor-pointer outline-1 rounded p-2 m-2 "
          >
            All Task
          </button>
          <button
            onClick={() => {
              dispatch({ type: "pending" });
            }}
            className="cursor-pointer outline-1 rounded p-2 m-2 "
          >
            Pending
          </button>
          <button
            onClick={() => {
              dispatch({ type: "completed" });
            }}
            className="cursor-pointer outline-1 rounded p-2 m-2 "
          >
            Completed
          </button>
        </div>
        <div className="flex justify-start">
          <NewTaskView data={filterData} dispatch={dispatch} />
        </div>
      </div>
    </div>
  );
}

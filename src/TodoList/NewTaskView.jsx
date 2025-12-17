export default function NewTaskView({ data, dispatch, status }) {
  if (data.length === 0) {
    return (
      <div>
        <div className="m-4 text-red-500 text-2xl">
          {status === "all" ? (
            <h1>No recent task</h1>
          ) : (
            <h1>No {status} task</h1>
          )}
        </div>
      </div>
    );
  }
  return (
    <>
      <ul className="overflow-y-scroll h-110 w-150">
        {data.length !== 0 &&
          data.map((item) => {
            return (
              <li
                key={item._id}
                className="border-b-1 border-blue-600  rounded-xl p-1 flex justify-between  "
              >
                <span
                  className=" flex justify-between items-center text-xl decoration-blue-600"
                  onClick={async (e) => {
                    await fetch(
                      "https://todoapp-bankend.onrender.com/Update/" + item._id,
                      {
                        method: "post",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ Completed: !item.Completed }),
                      }
                    );

                    const res1 = await fetch(
                      "https://todoapp-bankend.onrender.com/Home"
                    );
                    const allTasks = await res1.json();
                    dispatch({ type: "SET_DATA", data: allTasks });
                    // dispatch({
                    //   type: "SET_FILTER",
                    //   filterType: item.Completed ? "pending" : "completed",
                    // });
                  }}
                >
                  {item.name}
                </span>
                <p
                  onClick={async (e) => {
                    await fetch(
                      "https://todoapp-bankend.onrender.com/Delete/" + item._id,
                      {
                        method: "DELETE",
                      }
                    );

                    const res1 = await fetch(
                      "https://todoapp-bankend.onrender.com/Home"
                    );
                    const allTasks = await res1.json();
                    dispatch({ type: "SET_DATA", data: allTasks });
                    alert("Data is deleted!");
                  }}
                  className=" px-2 m-1 bg-red-600 text-white cursor-pointer"
                >
                  X
                </p>
              </li>
            );
          })}
      </ul>
    </>
  );
}

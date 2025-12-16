export default function NewTaskView({ data, dispatch }) {
  return (
    <>
      <ul>
        {data.length !== 0 &&
          data.map((item) => {
            return (
              <li
                className=" flex justify-between "
                key={item._id}
                onClick={async (e) => {
                  await fetch(
                    `https://todoapp-bankend.onrender.com/Update/${item._id}`,
                    {
                      method: "post",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ Completed: !item.Completed }),
                    }
                  );

                  const res1 = await fetch(
                    "https:/todoapp-bankend.onrender.com/Home"
                  );
                  const allTasks = await res1.json();
                  dispatch({ type: "SET_DATA", data: allTasks });
                }}
              >
                {item.name}
              </li>
            );
          })}
      </ul>
    </>
  );
}

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
function App() {
  const name = "Don John Daryl Curativo";
  const x = false;
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointments",
      day: "February 14 at 2:00PM",
      reminder: "true",
    },
    {
      id: 2,
      text: "Fated Day",
      day: "February 18 at 1:00PM",
      reminder: "true",
    },
    {
      id: 3,
      text: "Teeth Checkup",
      day: "February 29 at 1:00PM",
      reminder: "true",
    },
    {
      id: 4,
      text: "Party!",
      day: "February 20 at 1:00AM",
      reminder: "true",
    },
    {
      id: 5,
      text: "Tambay",
      day: "February 19 at 6:00AM",
      reminder: "true",
    },
  ]);
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const toggleReminder = (id) => {
    // console.log(id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className="container">
      <Header></Header>
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks to Show"
      )}
    </div>
  );
}
export default App;

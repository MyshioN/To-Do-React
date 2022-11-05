import { useState } from 'react'
import Header from "./components/Header.jsx"
import Tasks from "./components/Tasks.jsx"

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'SIuuuuuu',
      day: 'Siuuu',
      reminder: false,
    }
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id 
    ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="App">
      <Header />
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : ('Everything done')}
    </div>
  )
}

export default App

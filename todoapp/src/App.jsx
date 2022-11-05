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


  return (
    <div className="App">
      <Header />
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask}/>) : ('Everything done')}
    </div>
  )
}

export default App

import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Baseball Game',
      day: 'August 26th 2021 @ 3:15pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Hockey Game',
      day: 'October 15th 2021 @ 1:00pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Basketball Game',
      day: 'December 21st 2021 @ 7:30pm',
      reminder: false,
    },
  ]);

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} />
      : 'No Tasks To Show'}
    </div>
  );
}

export default App;

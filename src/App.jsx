import { useState } from 'react'
import AddTask from './components/AddTask'
import EditTask from './components/EditTask'
import './App.css'

function App() {
  const [editingTask, setEditingTask] = useState(null)

  return (
    <main className="app-shell">
      <header className="topbar">
        <h1>My tasks</h1>
      </header>

      <section className="content">
        <AddTask />

        <section className="tasks-section" aria-labelledby="tasks-heading">
          <h2 id="tasks-heading">Tasks</h2>

          <div className="task-list">
            <p className="empty-state">No tasks yet.</p>
          </div>
        </section>
      </section>

      {editingTask && <EditTask task={editingTask} onClose={() => setEditingTask(null)} />}
    </main>
  )
}

export default App

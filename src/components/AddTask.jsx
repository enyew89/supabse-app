import React, { useState } from 'react';
    function AddTask() {
    const [task, setTask] = useState({
        title: '',
        description: ''
    });
    const addTask = () => {
        console.log('Adding task:', task);
    }

  return (
    <section className="composer" aria-labelledby="new-task-heading">
      <div className="section-heading">
        <h2 id="new-task-heading">Add a new task</h2>
      </div>
      <form className="task-form">
        <label>
          <span>Title</span>
          <input type="text" name="title" placeholder="Give your task a name" 
            onChange={(e) => setTask(prev => ( {...prev, title: e.target.value}))}
          />
        </label>
        <label className="description-field">
          <span>Description</span>
          <textarea
            name="description"
            rows="3"
            placeholder="Add a little context"
            onChange={(e) => setTask(prev => ({...prev, description: e.target.value}))}
          ></textarea>
        </label>
        <button className="add-button" type="button" onClick={addTask}>
          <span className="plus">+</span>
          Add task
        </button>
      </form>
    </section>
  )
}

export default AddTask

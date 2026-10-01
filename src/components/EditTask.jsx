function EditTask({ task, onClose }) {
  return (
    <div className="edit-overlay" role="presentation" onClick={onClose}>
      <section
        className="edit-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="edit-task-heading"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="edit-panel-heading">
          <h2 id="edit-task-heading">Edit task</h2>
          <button className="close-button" type="button" onClick={onClose} aria-label="Close edit task">
            x
          </button>
        </div>
        <form className="edit-form">
          <label>
            <span>Title</span>
            <input type="text" name="edit-title" defaultValue={task.title} />
          </label>
          <label>
            <span>Description</span>
            <textarea name="edit-description" rows="5" defaultValue={task.description}></textarea>
          </label>
          <div className="edit-actions">
            <button className="cancel-button" type="button" onClick={onClose}>Cancel</button>
            <button className="save-button" type="button" onClick={onClose}>Save changes</button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default EditTask

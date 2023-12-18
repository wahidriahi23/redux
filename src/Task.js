import React, { useState } from 'react';
import { connect } from 'react-redux';
import { toggleTask, editTask } from './redux/actions';

const Task = ({ task, toggleTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleEditSave = () => {
    if (editedDescription.trim() !== '') {
      editTask({
        ...task,
        description: editedDescription,
      });
      setIsEditing(false);
    }
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button onClick={handleEditSave}>Save</button>
          <button onClick={handleToggleEdit}>Cancel</button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            checked={task.isDone}
            onChange={() => toggleTask(task.id)}
          />
          {task.description}
          <button onClick={handleToggleEdit}>Edit</button>
        </>
      )}
    </li>
  );
};

export default connect(null, { toggleTask, editTask })(Task);

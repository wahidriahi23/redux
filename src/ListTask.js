import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from './redux/actions';
import Task from './Task';

const ListTask = ({ tasks, filter, setFilter }) => {
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true;
    if (filter === 'done') return task.isDone;
    if (filter === 'notDone') return !task.isDone;
    return true;
  });

  return (
    <div className="task-list-container">
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('done')}>Done</button>
        <button onClick={() => setFilter('notDone')}>Not Done</button>
      </div>
      <ul>
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
  filter: state.filter,
});

export default connect(mapStateToProps, { setFilter })(ListTask);

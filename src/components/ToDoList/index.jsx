import React from "react";
import * as ActionCreators from "../../redux/actions/actionCreators";
import { connect } from "react-redux";

const TodoList = ({ tasks, updateTaskAction, deleteTaskAction }) => {
  const tasksList = tasks.map((task) => (
    <li key={task.id}>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => updateTaskAction(task.id, { isDone: !task.isDone })}
      />
      <span>{task.body}</span>
      <button onClick={() => deleteTaskAction(task.id)}>Delete task</button>
    </li>
  ));

  return (
    <div>
      <h1>Tasks</h1>
      <ul>{tasksList}</ul>
    </div>
  );
};

const mStP = (state) => ({
  tasks: state.task.tasks,
});

const mDtP = (dispatch) => ({
  updateTaskAction: (id, newValues) =>
    dispatch(
      ActionCreators.updateTask({
        id,
        newValues,
      })
    ),
  deleteTaskAction: (id) => dispatch(ActionCreators.deleteTask(id)),
});

export default connect(mStP, mDtP)(TodoList);

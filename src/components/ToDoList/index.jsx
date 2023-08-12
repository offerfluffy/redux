import React from "react";
// import * as ActionCreators from "../../redux/actions/actionCreators";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, updateTask } from "../../redux/slices/toDoSlice";

const TodoList = () => {
  const { tasks } = useSelector((state) => state.task);

  const dispatch = useDispatch();

  const tasksList = tasks.map((task) => (
    <li key={task.id}>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() =>
          dispatch(
            updateTask({ id: task.id, newValues: { isDone: !task.isDone } })
          )
        }
      />
      <span>{task.body}</span>
      <button onClick={() => dispatch(deleteTask(task.id))}>Delete task</button>
    </li>
  ));

  return (
    <div>
      <h1>Tasks</h1>
      <ul>{tasksList}</ul>
    </div>
  );
};

// const mStP = (state) => ({
//   tasks: state.task.tasks,
// });

// const mDtP = (dispatch) => ({
//   updateTaskAction: (id, newValues) =>
//     dispatch(
//       ActionCreators.updateTask({
//         id,
//         newValues,
//       })
//     ),
//   deleteTaskAction: (id) => dispatch(ActionCreators.deleteTask(id)),
// });

// export default connect(mStP)(TodoList);

export default TodoList;

// Я ебу че тут но вроде понятно что коннект не надо все дургое смотреть по ипротам
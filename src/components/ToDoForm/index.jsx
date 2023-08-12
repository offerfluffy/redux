import React from "react";
import { Form, Formik, Field } from "formik";
// import { connect } from "react-redux";
// import * as ActionCreators from "../../redux/actions/actionCreators";
import { createTask } from "../../redux/slices/toDoSlice";
import { useDispatch } from "react-redux";

const initialState = {
  taskText: "",
};

const ToDoForm = () => {
  const dispatch = useDispatch();

  const submitHandler = (values, formikBag) => {
    dispatch(createTask(values.taskText));
    formikBag.resetForm();
  };

  return (
    <Formik onSubmit={submitHandler} initialValues={initialState}>
      <Form>
        <Field name="taskText" />
        <button type="submit">Add task</button>
      </Form>
    </Formik>
  );
};

// const mDtP = (dispatch) => ({
//   createTaskAction: (taskText) => dispatch(ActionCreators.createTask(taskText)),
// });

// export default connect(null, mDtP)(ToDoForm);

export default ToDoForm;

// Все смотреть по импортам

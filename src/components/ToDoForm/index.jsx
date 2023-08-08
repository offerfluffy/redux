import React from "react";
import { Form, Formik, Field } from "formik";
import { connect } from "react-redux";
import * as ActionCreators from "../../redux/actions/actionCreators";

const initialState = {
  taskText: "",
};

const ToDoForm = ({ createTaskAction }) => {
  const submitHandler = (values, formikBag) => {
    createTaskAction(values.taskText);
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

const mDtP = (dispatch) => ({
  createTaskAction: (taskText) => dispatch(ActionCreators.createTask(taskText)),
});

export default connect(null, mDtP)(ToDoForm);

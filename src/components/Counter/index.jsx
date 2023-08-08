import React from "react";
import { connect } from "react-redux";
import * as ActionCreators from "../../redux/actions/actionCreators";

const Counter = ({
  counter,
  step,
  incrementAction,
  decrementAction,
  changeStepAction,
}) => {
  const decrement = () => {
    decrementAction();
  };

  const increment = () => {
    incrementAction();
  };

  const changeStep = ({ target: { value } }) => {
    changeStepAction(+value);
  };

  return (
    <div>
      <p>Current count is {counter}</p>
      <div>
        <label>
          Step is: <input onChange={changeStep} value={step} />
        </label>
      </div>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  counter: state.counter.counter,
  step: state.counter.step,
});

const mapDispathToProps = (dispatch) => ({
  incrementAction: () => dispatch(ActionCreators.increment()),
  decrementAction: () => dispatch(ActionCreators.decrement()),
  changeStepAction: (value) => dispatch(ActionCreators.changeStep(value)),
});

export default connect(mapStateToProps, mapDispathToProps)(Counter);

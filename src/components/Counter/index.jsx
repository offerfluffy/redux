import React from "react";
// import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
// import * as ActionCreators from "../../redux/actions/actionCreators";
import {
  increment,
  decrement,
  changeStep,
} from "../../redux/slices/counterSlice";

const Counter = () => {
  // const { counter, step } = useSelector((state) => {
  //   const {
  //     counter: { counter, step },
  //   } = state;

  //   return {
  //     counter,
  //     step,
  //   };
  // });

  const { counter, step } = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  // const { increment, decrement, changeStep } = bindActionCreators(
  //   ActionCreators,
  //   dispatch
  // );

  const decrementHandler = () => {
    // decrementAction();
    dispatch(decrement());
  };

  const incrementHandler = () => {
    // incrementAction();
    dispatch(increment());
  };

  const changeStepHandler = ({ target: { value } }) => {
    // changeStepAction(+value);
    dispatch(changeStep(+value));
  };

  return (
    <div>
      <p>Current count is {counter}</p>
      <div>
        <label>
          Step is: <input onChange={changeStepHandler} value={step} />
        </label>
      </div>
      <button onClick={decrementHandler}>-</button>
      <button onClick={incrementHandler}>+</button>
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   counter: state.counter.counter,
//   step: state.counter.step,
// });

// const mapDispathToProps = (dispatch) => ({
//   incrementAction: () => dispatch(ActionCreators.increment()),
//   decrementAction: () => dispatch(ActionCreators.decrement()),
//   changeStepAction: (value) => dispatch(ActionCreators.changeStep(value)),
// });

// export default connect(mapStateToProps, mapDispathToProps)(Counter);

export default Counter;

// Смотреть по импортам все на хуках и слайсах
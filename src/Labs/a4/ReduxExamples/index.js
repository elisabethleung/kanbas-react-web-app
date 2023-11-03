import React from "react";
import Add from "../Add";
import AddRedux from "./AddRedux";
import HelloRedux from "./HelloRedux";
import TodoList from "./todos/TodoList";
import TodoForm from "./todos/TodoForm";
import CounterReducer from "./CounterRedux/counterReducer";
import CounterRedux from "./CounterRedux";
const ReduxExamples = () => {
  return (
    <div>
      <h2>Redux Examples</h2>
      <TodoList />
      <AddRedux />
      <CounterRedux/>
      <HelloRedux />
      {/*<TodoForm />*/}
    </div>
  );
};

export default ReduxExamples;

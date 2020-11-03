import React from "react";

const TodoForm = (props) => {
  const handleChanges = (event) => {
    props.setItem(event.target.value);
  };

  return (
    <form>
      <input
        id="todo"
        type="text"
        name="todo"
        value={props.item}
        onChange={handleChanges}
      />
      <button onClick={() => props.add(props.value)}>Submit</button>
      <button onClick={() => props.clear()}>Clear</button>
    </form>
  );
};

export default TodoForm;

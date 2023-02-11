import React from "react";
import { useState } from "react";

const Todo = () => {
  const [inputVal, setInputVal] = useState("");
  const [todoArr, setTodoArr] = useState([]);

  const onAddTodoHandler = () => {
    if (!inputVal) return;
    setTodoArr([
      ...todoArr,
      {
        id: crypto.randomUUID().split("-")[0],
        text: inputVal
      }
    ]);
    setInputVal("");
  };

  const onDeleteHandler = (id) => {

    //Filter
    // const filteredArr = todoArr.filter( elem => elem.id !== id)
    // setTodoArr(filteredArr)

    //Splice
    const idx = todoArr.findIndex( elem => elem.id === id);
    const clonedArr = [...todoArr]
    clonedArr.splice(idx, 1)
    setTodoArr(clonedArr)
    
  };

  return (
    <div className="container">
      <h2 className="mt-3">Todo App</h2>
      <div className="d-flex align-items-end justify-content-center">
        <input
          className="form-control mt-3 w-50 "
          placeholder="Add Todo"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button
          className="btn btn-primary ms-3"
          onClick={() => onAddTodoHandler()}
        >
          Add Todo
        </button>
      </div>
      <div className="d-flex flex-column align-items-center mt-3">
        {todoArr.length > 0 &&
          todoArr.map((todo, index) => (
            <div className="row mt-2 w-75" key={index}>
              <div className="col-sm-4 col-md-5 fs-4 text-start ms-5">
                {todo.text}
              </div>
              <button className="col-2 offset-sm-1 offset-md-2 btn btn-info me-3">
                Edit
              </button>
              <button
                className="col-2 btn btn-danger"
                onClick={() => onDeleteHandler(todo.id)}
              >
                Delete
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Todo;

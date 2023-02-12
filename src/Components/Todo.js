import React from "react";
import { useState } from "react";
import TodoItem from "./TodoItem";

const Todo = () => {
  const ALL = "ALL";
  const COMPLETED = "COMPLETED";
  const PENDING = "PENDING";

  const [inputVal, setInputVal] = useState("");
  const [todoArr, setTodoArr] = useState([
    { id: "692a5fc3", text: "Todo 1", completed: false },
    { id: "bb69603f", text: "Todo 2", completed: false }
  ]);
  const [isEditing, setIsEditing] = useState({
    editing: false,
    editId: ""
  });
  const [filter, setFilter] = useState(ALL);

  const onAddTodoHandler = () => {
    if (!inputVal) return;
    setTodoArr([
      ...todoArr,
      {
        id: crypto.randomUUID().split("-")[0],
        text: inputVal,
        completed: false
      }
    ]);
    setInputVal("");
  };

  const onDeleteHandler = (id) => {
    //Filter
    // const filteredArr = todoArr.filter( elem => elem.id !== id)
    // setTodoArr(filteredArr)

    //Splice
    const idx = todoArr.findIndex((elem) => elem.id === id);
    const clonedArr = [...todoArr];
    clonedArr.splice(idx, 1);
    setTodoArr(clonedArr);
  };

  const onEditHandler = (id, text) => {
    setInputVal(text);
    setIsEditing({ ...isEditing, editing: true, editId: id });
  };

  const onUpdateTodoHandler = () => {
    const clonedArr = [...todoArr];
    const elemIdx = clonedArr.findIndex((elem) => elem.id === isEditing.editId);
    const newTodoToBeAdded = {
      id: isEditing.editId,
      text: inputVal
    };
    clonedArr[elemIdx] = newTodoToBeAdded;
    setTodoArr(clonedArr);
    setInputVal("");
    setIsEditing({ editing: false, editId: "" });
  };

  const handleCompleted = (todo) => {
    const clonedArr = [...todoArr];
    const elemIdx = clonedArr.findIndex((elem) => elem.id === todo.id);
    const newTodoToBeAdded = {
      ...todo,
      completed: !todo.completed
    };
    clonedArr[elemIdx] = newTodoToBeAdded;
    setTodoArr(clonedArr);
  };

  const onMarkCompleteHandler = () => {
    const updatedArr = todoArr.map((elem) => ({ ...elem, completed: true }));
    setTodoArr(updatedArr);
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
        {!isEditing.editing ? (
          <button
            className="btn btn-primary ms-3"
            onClick={() => onAddTodoHandler()}
          >
            Add Todo
          </button>
        ) : (
          <button
            className="btn btn-warning ms-3"
            onClick={() => onUpdateTodoHandler()}
          >
            Update Todo
          </button>
        )}
        <button
          className="btn btn-dark ms-2"
          onClick={() => onMarkCompleteHandler()}
        >
          Mark All Complete
        </button>
      </div>

      <div className="d-flex justify-content-center my-3">
        <div className="row w-75 justify-content-around">
          <button
            onClick={() => setFilter(ALL)}
            className={`${
              filter === ALL ? "btn-success" : "btn-outline-success"
            } col-2 btn`}
          >
            ALL
          </button>
          <button
            onClick={() => setFilter(COMPLETED)}
            className={`${
              filter === COMPLETED ? "btn-success" : "btn-outline-success"
            } col-2 btn`}
          >
            Completed
          </button>
          <button
            onClick={() => setFilter(PENDING)}
            className={`${
              filter === PENDING ? "btn-success" : "btn-outline-success"
            } col-2 btn`}
          >
            Pending
          </button>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center mt-3 ms-sm-1 ms-md-3 ms-lg-3 ms-xxl-5">
        {todoArr.length > 0 &&
          filter === ALL &&
          todoArr.map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              onDeleteHandler={onDeleteHandler}
              onEditHandler={onEditHandler}
              handleCompleted={handleCompleted}
            />
          ))}
        {todoArr.length > 0 &&
          filter === COMPLETED &&
          todoArr.map(
            (todo, index) =>
              todo.completed && (
                <TodoItem
                  key={index}
                  todo={todo}
                  onDeleteHandler={onDeleteHandler}
                  onEditHandler={onEditHandler}
                  handleCompleted={handleCompleted}
                />
              )
          )}
        {todoArr.length > 0 &&
          filter === PENDING &&
          todoArr.map(
            (todo, index) =>
              !todo.completed && (
                <TodoItem
                  key={index}
                  todo={todo}
                  onDeleteHandler={onDeleteHandler}
                  onEditHandler={onEditHandler}
                  handleCompleted={handleCompleted}
                />
              )
          )}
      </div>
    </div>
  );
};

export default Todo;

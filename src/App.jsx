import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from "uuid";
import Edit from "./assets/edit.svg"
import EditOff from "./assets/editOff.svg"
import Delete from "./assets/delete.svg"
import "./index.css"


function App() {
  const [todos, settodos] = useState([]);
  const [todo, settodo] = useState("");
  const [showFinished, setshowFinished] = useState(true);


  
  
  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let t = JSON.parse(localStorage.getItem("todos"));
      settodos(t);
    }
  }, []);

  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const toggleFinished = (e) => {
    setshowFinished(!showFinished);
  };

  const handleEdit = (e, id) => {
    let t = todos.filter((i) => i.id === id);
    console.log(t);
    settodo(t[0].todo);
    let newtodos = todos.filter((item) => {
      return item.id !== id;
    });
    settodos(newtodos);
    saveToLS();
  };
  const handleDelete = (e, id) => {
    let newtodos = todos.filter((i) => {
      return i.id !== id;
    });
    settodos(newtodos);
    saveToLS();
  };
  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => {
      return item.id === id;
    });

    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    settodos(newTodos);
    saveToLS();
  };
  const handleSaveTodo = () => {
    console.log("hdsjs")
    settodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    settodo("");
    saveToLS();
  };

  const handleChange = (e) => {
    settodo(e.target.value);
  };
  return (
    <>
      <Navbar />

      <div className="md:container md:w-1/2 mx-auto min-h-[90vh]  p-2 bg-[#f8f8f8]">
        <div className="flex w-full justify-center">
          <h2 className=" text-sm sm:text-xl m-1 sm:m-4 font-bold">
            iTask - Manage your Todos at one Place
          </h2>
        </div>
        <div className="addTodo mx-auto flex flex-col">
          <h3 className="text-xl font-bold mx-3">Add a Todo</h3>
          <div className="flex">

          <input
            onChange={handleChange}
            value={todo}
            id="todoText"
            className="mx-2 w-full rounded-xl px-3 outline-none border-none text-[13px]"
            placeholder="add a todo"
            type="text"
          />
          <button
            onClick={()=>handleSaveTodo()}
            disabled={todo.length < 4}
            className="px-2 py-[3px] bg-purple-800 text-white rounded-xl ml-2 disabled:bg-violet-700 disabled:line-through"
            >
            Save
          </button>
            </div>
        </div>
        <div className=" flex items-center mt-7">
          <input
            className="ml-4"
            onChange={toggleFinished}
            type="checkbox"
            checked={showFinished}
            name="Finished"
          />
          <span className="text-sm mx-1">Show Finished</span>
        </div>
        <hr />
        <h2 className="text-xl font-bold mx-2">Your Todos</h2>
        <div className="Todos ">
          {todos.map((item) => {
            return (
              (showFinished || !item.isCompleted) && (
                <div key={item.todo} className="todo  py-2 flex justify-between">
                  <div className="todoText max-w-1/3 flex items-center ">
                    <input
                      name={item.id}
                      type="checkbox"
                      onChange={handleCheckbox}
                      checked={item.isCompleted}
                    />
                    <div className={item.isCompleted?"line-through" : ""} >{item.todo}</div>
                  </div>
                  <div className="buttons min-w-[70px] flex h-full">
                    <button
                      onClick={(e) => handleEdit(e, item.id)}
                      disabled={todo.length > 0}
                      className="bg-purple-800 flex h-full rounded-md mx-1  "
                    >
                      {todo.length > 0 ? (
                        <img
                          className="invert"
                          src={EditOff}
                          alt=""
                        />
                      ) : (
                        <img
                          className="invert"
                          src={Edit}
                          alt=""
                        />
                      )}
                    </button>
                    <button
                      onClick={(e) => {
                        handleDelete(e, item.id);
                      }}
                      className="bg-purple-800 rounded-md mx-1 "
                    >
                      <img
                        className="invert w-6"
                        src={Delete}
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;

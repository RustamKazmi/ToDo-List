// import React from 'react'


// const displayTodos = () =>{

//  let todosLS = localStorage.getItem("todos");
//   if (todosLS) {
//     let t = JSON.parse(localStorage.getItem("todos"));
//     settodos(t);
//   }
// }
// displayTodos()
// const TodoList = () => {
//   const displayTodos = () =>{

//     let todosLS = localStorage.getItem("todos");
//      if (todosLS) {
//        let t = JSON.parse(localStorage.getItem("todos"));
//        console.log(t)
//      }
//    }
//    displayTodos()
//   return (
//   <>
  
//   <div className="todos">
    
//   </div>
//   </>
//   )
// }

// export default TodoList


import React, { useState, useEffect } from 'react';

const TodoList = () => {
  // Declare a state variable to hold the todos
  const [todos, setTodos] = useState([]);

  // Fetch todos from localStorage when the component mounts
  useEffect(() => {
    const todosLS = localStorage.getItem("todos");
    if (todosLS) {
      const t = JSON.parse(todosLS);
      setTodos(t); // Update state with todos from localStorage
    }
  }, []); // Empty dependency array to run only once when the component mounts

  return (
    <>
      <div className="todos">
        {/* Render the list of todos */}
        {todos.length > 0 ? (
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>{todo}</li>
            ))}
          </ul>
        ) : (
          <p>No todos found.</p>
        )}
      </div>
    </>
  );
};

export default TodoList;

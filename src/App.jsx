import { useEffect, useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"

export default function APP() {
  //Using state managment for the page

  //SETTING THE STATE FOR THIS PROPERTY TO AN EMPTY ARRAY
  // const [todos, setTodos] = useState([])

//WHATEVER IS RETURNED FROM THE FUCTION IS THE NEW DEFAULT VALUE
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEM")
    if(localValue == null) return []

    return JSON.parse(localValue)
  })

  //Using local storage
  useEffect(() => {
    localStorage.setItem("ITEM", JSON.stringify(todos))
  }, [todos])

  //function that will send data to a component
  function addTodo(title){
    setTodos( currentTodo => {
       return[
        ...currentTodo, {id: crypto.randomUUID(), title, completed: false}
       ]
    } )
  }
 
  //Creating New Function 
  function toggleTodo(id, completed){

    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id){
          return {...todo, completed}
        }
        return todo
      })
    })
  }
  
  function deleteTodo(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  //To use a class in react you have to name it className
  return (
    <>
    {/* Passing a prop (In this case a method) to a custom component.
        The name has to match what you put in the prop down below */}
   <NewTodoForm addTodo={addTodo}/>
  <h1 className="header">Todo List</h1>
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
  </>
  )
}
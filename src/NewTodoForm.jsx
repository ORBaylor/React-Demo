import { useState } from "react"



//How to make the code visble to other componetents
export function NewTodoForm({addTodo}){

 const [newItem, setNewItem] = useState("")

     //Creating a function to be usded inside of the component
  function handleSubmit(e){
    e.preventDefault()
    //... means adding a new array
    //setTodos([...todos])
    if(newItem === "") return
    addTodo(newItem)

    setNewItem("")
  }



  return(
    <form onSubmit={handleSubmit} className="new-item-form">
    {/* A fragment is an element that has no tags.
    It is used to return multiple elements  */}
    
    <div className="form-row">
      <label >New Item</label>
      <input value={newItem} onChange={e => setNewItem(e.target.value) } type="text" id="item"/>
    </div>
    <button className="btn">Add</button>
  </form>
  )
   
}
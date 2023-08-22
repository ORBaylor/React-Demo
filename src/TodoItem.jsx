
export function TodoItem({completed, id, title, toggleTodo, deleteTodo }){

    return(
        <li >
            <label >
              <input type="checkbox" 
              checked={completed} 
              onChange={e => toggleTodo(todo.id, e.target.checked)}
              />
              {title}
            </label>
            {/* Using () => will allow the method to wait to be called
                Otherwise it will be called as soon as the page is rendered */}
            <button onClick={() => deleteTodo(id)} className="btn btn-danger" > Delete</button>
          </li>
    )
}
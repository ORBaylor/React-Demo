import { TodoItem } from "./TodoItem"

export function TodoList({todos, deleteTodo, toggleTodo}){

    return(
        <ul className="list">
        {/* Using javaScript Code */}
    
        {/* Conditional Rendering A.K.A Short circuiting */}
        {todos.length === 0 && "No Todos"}
        {/* This is a v-for in react */}
        {todos.map(todo => {
          return (
            <TodoItem 
            //FIRST WAY OF PASSING MULTIPLE PROPS
            {...todo} 

            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            //ONE WAY OF PASSING MULPIPLE PROPS
            // id={todo.id} 
            // completed={todo.completed} 
            // title={todo.title}
            key={todo.id} />
             )
        })}
       
      </ul>
    )
}
import React from 'react';


const Todos = ({ todos, deleteTodo }) => {
    // STYLES 
    const todoStyle = {
        "&:hover": {
            background: "#f00"
          }
      };
    const todolist = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" style={todoStyle}>
                    <span onClick={() => { if (window.confirm('Are you sure you want to delete the item?')) { deleteTodo(todo.id) }; }}>
                        {todo.content}
                    </span>
                </div>
            )
        })
    ) : (
            <p className="center"> You have no todos left</p>
        )
    return (
        <div className="todos collection">
            {todolist}
        </div>
    )
}

export default Todos;
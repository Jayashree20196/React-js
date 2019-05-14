import React from 'react'

const Todos = ({ todos, deleteTodo }) => {
    const todoList = todos.length ? (
        todos.map(todos => {
            return (
                <div className="collection-item" key={todos.id}>
                    {/* state has the contents */}
                    <span onClick={() => { deleteTodo(todos.id) }}>{todos.content}</span>
                </div >
            )
        })
    ) : (
            <p className="Center">No Todo List</p>
        )
    return (
        <div className='todo collection'>
            {/* output those todos here */}
            {todoList}
        </div>
    )
}

export default Todos
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './TodoItem.css'

class TodoItem extends Component {
    getItem = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        //pulling out the values from todo object
        const { id, value } = this.props.todo
        return (
            <div style={this.getItem()}>
                <p>
                    {/* since markComplete is a custom function hence we need to bind this or use arrow function */}
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />{''}
                    {value}
                    <button className="btn-style" onClick={this.props.deleteTodo.bind(this, id)}>Delete</button>
                    <button className="edit-btn" onClick={this.props.editTodo.bind(this, id, value)}>Edit</button>
                </p>

            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}


export default TodoItem

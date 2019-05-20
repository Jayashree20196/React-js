import React, { Component } from 'react'
import './AddTodo.css'

export class AddTodo extends Component {
    state = {
        value: ''
    }

    onChange = (e) => this.setState({ value: e.target.value });
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.value)
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" name="title" className="input-field" value={this.state.value} onChange={this.onChange} placeholder="Enter your todo" />
                <input type="submit" value="Add" className="Addbtn" />
            </form>
        )
    }
}

export default AddTodo

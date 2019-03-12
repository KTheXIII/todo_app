import React, {Component} from 'react'
import TodoItem from './TodoItem'

class ToDo extends Component {
    render() {
        return (
            <div className="todo-list">
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </div>
        )
    }
}

export default ToDo

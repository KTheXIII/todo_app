import React, {Component} from 'react'
import TodoItem from './TodoItem.jsx'
import todosData from '../todosData'

class TodoList extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true,
            todos: todosData,
            todoText: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 500)

        // this.setState({isLoading: false})
    }

    handleChange(data, com) {
        this.setState(prevState => {
            const updatedData = prevState.todos.map(todo => {
                if (todo.id === data.id) {
                    if (com === 'complete') todo.completed = !todo.completed
                    else if (com === 'delete') {
                        todo.deleted = true
                    }
                }
                return todo
            })

            return {
                todos: updatedData
            }
        })
    }

    handleInputChange(event) {
        const {value} = event.target
        this.setState({
            todoText: value
        })
    }

    handleSubmit(event) {
        const {todoText} = this.state
        let id = this.state.todos[this.state.todos.length - 1].id
        id++

        this.setState(prevState => {
            let updatedData = prevState.todos
            if (todoText !== '')
                updatedData.push({
                    id: id,
                    text: todoText,
                    completed: false,
                    deleted: false
                })

            return {
                todos: updatedData,
                todoText: ''
            }
        })
        event.preventDefault()
    }

    render() {
        const todoItems = this.state.todos
            .filter(item => {
                return !item.deleted
            })
            .map(filtered => (
                <TodoItem
                    key={filtered.id}
                    data={filtered}
                    handleChange={this.handleChange}
                />
            ))

        return (
            <div className="todo-list">
                <form className="new-item" onSubmit={this.handleSubmit}>
                    <input
                        value={this.state.todoText}
                        name="newtodo"
                        type="text"
                        className="todo-input "
                        placeholder="What needs to be done"
                        onChange={this.handleInputChange}
                    />
                    <button />
                </form>

                {this.state.isLoading ? <h1>Loading...</h1> : todoItems}
            </div>
        )
    }
}

export default TodoList

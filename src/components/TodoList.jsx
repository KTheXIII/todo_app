import React, { Component } from 'react'
import TodoItem from './TodoItem.jsx'

class TodoList extends Component {
  constructor() {
    super()
    this.dataScheme = {
      id: null,
      text: null,
      completed: false,
      deleted: true
    }

    this.state = {
      isLoading: true,
      todos: [this.dataScheme],
      todoText: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.downloadJSON = this.downloadJSON.bind(this)
    this.openJSON = this.openJSON.bind(this)
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 500)
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
    const { value } = event.target
    this.setState({
      todoText: value
    })
  }

  handleSubmit(event) {
    const { todoText } = this.state
    let id = this.state.todos[this.state.todos.length - 1].id
    id++

    this.setState(prevState => {
      let updatedData
      if (prevState.todos[0].id) updatedData = prevState.todos
      else updatedData = []

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

  openJSON() {}

  downloadJSON() {
    let filename = 'tododata.json'
    let contentType = 'application/json;charset=utf-8;'

    let a = document.createElement('a')
    a.download = filename
    a.href =
      'data:' +
      contentType +
      ',' +
      encodeURIComponent(JSON.stringify(this.state.todos))
    a.target = '_blank'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  render() {
    let todoItems
    if (this.state.todos.length !== -1)
      todoItems = this.state.todos
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
    else todoItems = []

    return (
      <div className='todo-list'>
        <div>
          <form className='new-item' onSubmit={this.handleSubmit}>
            <input
              value={this.state.todoText}
              name='newtodo'
              type='text'
              className='todo-input '
              placeholder='What needs to be done'
              onChange={this.handleInputChange}
            />
            <button />
          </form>
          {this.state.isLoading ? (
            ''
          ) : (
            <div className='settings-con'>
              <button className='settings-btn noselect'>active</button>
              <button className='settings-btn noselect'>deleted</button>
              <button
                className='settings-btn downloadbtn noselect'
                onClick={this.downloadJSON}
              />
              <button
                className='settings-btn uploadbtn noselect'
                onClick={this.openJSON}
              />
              <button className='settings-btn noselect'>complete all</button>
              <button className='settings-btn noselect'>delete all</button>
            </div>
          )}
        </div>

        {this.state.isLoading ? <h1>Loading...</h1> : todoItems}
      </div>
    )
  }
}

export default TodoList

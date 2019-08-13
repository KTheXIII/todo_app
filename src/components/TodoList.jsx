import React, { Component } from 'react'
import TodoItem from './TodoItem.jsx'
import testData from '../todosData.json'

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
      todos: testData,
      todoText: '',
      currentView: 'active'
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.downloadJSON = this.downloadJSON.bind(this)
    this.openJSON = this.openJSON.bind(this)
    this.completeAll = this.completeAll.bind(this)
    this.deleteAll = this.deleteAll.bind(this)
    this.generateID = this.generateID.bind(this)
    this.showAcIn = this.showAcIn.bind(this)
    this.showDeleted = this.showDeleted.bind(this)
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
    let id = this.generateID()

    this.setState(prevState => {
      let updatedData
      if (prevState.todos) updatedData = prevState.todos
      else updatedData = []

      if (todoText !== '')
        updatedData.push({
          id: id,
          text: todoText,
          completed: false,
          deleted: false,
          timeCreated: Date.now()
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
    if (this.state.todos.length !== 0) {
      let filename = 'tododata' + new Date().toISOString() + '.json'
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
    } else {
      alert('no data to download')
    }
  }

  completeAll() {
    this.setState(prevState => {
      let updatedData
      if (prevState.todos) updatedData = prevState.todos
      else updatedData = []

      updatedData.forEach(data => {
        if (!data.deleted) data.completed = true
      })

      return {
        todos: updatedData
      }
    })
  }

  deleteAll() {
    this.setState(prevState => {
      let updatedData
      if (prevState.todos) updatedData = prevState.todos
      else updatedData = []

      updatedData.forEach(data => {
        if (!data.deleted) data.deleted = true
      })

      return {
        todos: updatedData
      }
    })
  }

  showAcIn() {
    this.setState(_ => {
      return {
        currentView: 'active'
      }
    })
  }

  showDeleted() {
    this.setState(_ => {
      return {
        currentView: 'deleted'
      }
    })
  }

  generateID() {
    return (
      '_' +
      Math.random()
        .toString(36)
        .substr(2, 16)
    )
  }

  render() {
    let renderedItems
    const currentView = this.state.currentView
    if (this.state.todos.length !== -1) {
      renderedItems = this.state.todos
        .filter(item => {
          if (currentView === 'completed') {
            return !item.deleted && item.deleted
          } else if (currentView === 'deleted') {
            return item.deleted
          } else {
            return !item.deleted
          }
        })
        .map(filtered => (
          <TodoItem
            key={filtered.id}
            data={filtered}
            handleChange={this.handleChange}
          />
        ))
    } else renderedItems = []

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
              <button className='settings-btn noselect' onClick={this.showAcIn}>
                active
              </button>
              <button
                className='settings-btn noselect'
                onClick={this.showDeleted}
              >
                deleted
              </button>
              <button
                className='settings-btn downloadbtn noselect'
                onClick={this.downloadJSON}
              />
              <button
                className='settings-btn uploadbtn noselect'
                onClick={this.openJSON}
              />
              <button
                className='settings-btn noselect'
                onClick={this.completeAll}
              >
                complete all
              </button>
              <button
                className='settings-btn noselect'
                onClick={this.deleteAll}
              >
                delete all
              </button>
            </div>
          )}
        </div>

        {this.state.isLoading ? <h1>Loading...</h1> : renderedItems}
      </div>
    )
  }
}

export default TodoList

import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './styles/main.scss'
import AppName from './components/AppName'
import ToDoList from './components/TodoList'

class App extends Component {
    render() {
        return (
            <div className="container ">
                <AppName />
                <ToDoList />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))

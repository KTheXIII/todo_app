import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './styles/index.scss'
import Todo from './components/ToDo'
import Test from './components/Test'
import PropTest from './components/PropTest'

class App extends Component {
    render() {
        // return <Test />
        // return <Todo />
        return <PropTest />
    }
}

ReactDOM.render(<App />, document.getElementById('root'))

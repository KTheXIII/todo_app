import React, {Component} from 'react'

class TodoItem extends Component {
    render() {
        let classNames = 'todo-item animated '
        return (
            <div className={classNames}>
                <input
                    type="checkbox"
                    className="form-checkbox "
                    name="checkbox"
                    id={this.props.data.id}
                    checked={this.props.data.completed}
                    onChange={() => {
                        this.props.handleChange(this.props.data, 'complete')
                    }}
                />

                <p className={this.props.data.completed ? 'completedTask' : ''}>
                    {this.props.data.text}
                </p>

                <div
                    name="delete"
                    className="remove-item noselect"
                    onClick={() => {
                        this.props.handleChange(this.props.data, 'delete')
                    }}
                >
                    &#10005;
                </div>
            </div>
        )
    }
}

export default TodoItem

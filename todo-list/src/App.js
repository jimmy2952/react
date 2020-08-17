import React, { Component } from 'react'
import Todo from './Todo'
import "./style.css"

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [], 
            todoText: '',
            filter: 'all'
        }
        this.id = 1

        this.handleChange = this.handleChange.bind(this)
        this.addTodo = this.addTodo.bind(this)
        this.deleteTodo = this.deleteTodo.bind(this)
        this.markTodo = this.markTodo.bind(this)
    }

    componentDidMount() {
        const todoData = window.localStorage.getItem('todoapp')
        if (todoData) {
            const oldTodos = JSON.parse(todoData)
            this.setState({
                todos: oldTodos
            })
            this.id = oldTodos[oldTodos.length - 1].id + 1
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.todos !== this.state.todos) {
            window.localStorage.setItem('todoapp', JSON.stringify(this.state.todos))
        }
    }

    handleChange(e) {
        this.setState({
            todoText: e.target.value
        })
    }
    addTodo() {
        const { todoText, todos } = this.state
        this.setState({
            todos: [...todos, {
                id: this.id,
                isCompleted: false,
                text: todoText
            }],
            todoText: ''
        })
        this.id++
    }

    deleteTodo(id) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    markTodo(id) {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id !== id) {
                    return todo
                }

                return {
                    ...todo,
                    isCompleted: !todo.isCompleted
                }
            })
        })
    }
    render() {
        const {todos, todoText, filter} = this.state
        return (
            <div className="wrapper">
                <div>
                    <input type="text" name="todo" value={todoText} onChange={this.handleChange} />
                    <button className="add-todo" onClick={this.addTodo}>新增</button>
                </div>
                <h2>Todo</h2>
                <div className="filters">
                    <div className="filters__all" onClick={() => {
                        this.setState({
                            filter: 'all'
                        })
                    }}>全部</div>
                    <div className="filters__completed" onClick={() => {
                        this.setState({
                            filter: 'completed'
                        })
                    }}>已完成</div>
                </div>
                <div className="list">
                    {todos
                    .filter(todo => filter === 'completed' ? todo.isCompleted : true)
                    .map(todo => (
                    <Todo key={todo.id} todo={todo} deleteTodo={this.deleteTodo}
                    markTodo={this.markTodo} />
                    ))}
                </div>
            </div>
        )
    }
}

export default App
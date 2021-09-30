import React from 'react'
import TodoItem from './TodoItem'
import 'remixicon/fonts/remixicon.css'
import todosData from "./todosData"



class Task extends React.Component {

    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
        
    }

    

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo 
            })
            // console.log(prevState.todos)
            // console.log(updatedTodos)
            return {
                todos: updatedTodos
            }
        })
    }


    render(){
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)

        return (
            
            <div className="task ">
                
                <div className="task-header">
                    <h3 >Task List</h3>
                </div>
                <div className="box-div">
                    {todoItems}
                    {/* <div className="btn">
                        <button>
                                <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11H7v2h4v4h2v-4h4v-2h-4V7h-2v4z" fill="rgba(80,194,201,1)"/></svg>
                        </button>
                    </div> */}
                </div>
                 
            </div>
        )    
    }
}

export default Task
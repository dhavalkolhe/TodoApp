import React from "react"
import './App.css';


import Profile from './profile'
import Task from './task'



class App extends React.Component {
    
    
    render() {
        
        
        return (
            <div className="todo-list">
                <Profile />
                <Task />
            </div>
        )    
    }
}

export default App

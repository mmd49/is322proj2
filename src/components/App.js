import React from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css'

import TaskList from './TaskList';
import DoneList from './DoneList';
import AddTask from './AddTask';

class App extends React.Component {
    state = {
        tasks: [],
        errorMessage: ''
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        axios.get('http://my-json-server.typicode.com/bnissen24/project2DB/posts')
            .then(response => {
                this.setState({ tasks: response.data });
            }).catch(error => {
            this.setState({ errorMessage: error.message });
        });
    }

    onAddTask = (taskName) => {
        let tasks = this.state.tasks;
        tasks.push({
            title: taskName,
            id: this.state.tasks.length + 1,
            type: 'task',
            column: 'todo'
        });

        this.setState({ tasks });
    }

    onUpdateTaskList = (newTaskList) => {
        this.setState({ tasks: newTaskList });
    }


    render() {
        return (
            <div className="container">
                <h1>To Do List</h1>
                <br/>
                <AddTask onSubmit={this.onAddTask} />
                <TaskList tasks={this.state.tasks} onUpdateTaskList={this.onUpdateTaskList} />
                <br/>
                <h1>Done</h1>
                <br/>
                <TaskList tasks={this.state.tasks} onUpdateTaskList={this.onUpdateTaskList} />
            </div>

        );

    }
}

export default App;
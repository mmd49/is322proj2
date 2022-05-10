import React from 'react';

import Task from './Tasks';

class List extends React.Component {

    markDone = (task) => {
        const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);
        let taskList = this.props.tasks;
        taskList.splice(taskIndex, 1);
        console.log(this.props);
        this.props.onUpdateTaskList(taskList);
    }

    render() {
        const taskItems = this.props.tasks.map(task => {
            return <Task task={task} key={task.id} markDone={this.markDone} />
        });

        return (
            <ul className="task-list list-group">
                { taskItems }
            </ul>
        )
    }
}

export default List;
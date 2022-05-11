import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const TaskItem = props => {
    return (
        <li className="list-group-item" style={{backgroundColor: 'black', color: 'white'}}>
            { props.task.title }
            <button type="button"
                    onClick={() => props.markDone(props.task)}
                    className="btn btn-primary" style={{ float: 'right' }}>
                Done
            </button>
        </li>
    )
};

export default TaskItem;
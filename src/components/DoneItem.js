import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const DoneItem = props => {

    return (
        <li className="list-group-item" style={{backgroundColor: 'black', color: 'white'}}>
            { props.task.title }
        </li>
    )
}
export default DoneItem;
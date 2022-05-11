import React from "react";

import DoneItem from "./DoneItem";


class DoneList {

    c

    render() {
        const doneItems = this.props.map(task => {
            return <DoneItem task={task} key={task.id} staus={task.column}/>
        });
    }

}







import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TouchToDoAction} from '../Actions/actions.js'
const filterToDoList = (toDoList, filterText) => {
    switch (filterText) {
        case 'SHOW_COMPLETE':
            return toDoList.filter((ele, index) => {
               return !ele.completed;
            })
        case 'SHOW_ACTIVE':
            return toDoList.filter((ele, index) => {
                return ele.completed;
            })
        default:
            return toDoList;
    }
}

class ToDoList extends Component {
    render () {
        let {toDoList, onTouchToDo} = this.props;
        return (
            <ul>
                {
                    toDoList.map( (ele, index) => {
                        return <li style={{textDecoration : ele.completed ? 'line-through' : 'none'}} onClick={ () => {
                            onTouchToDo(ele.id);
                        }} key={ele.id}>{ele.text}</li>
                    })
                }   
           </ul>
        )
    }
}
// ToDoList.contextTypes = {
//     store: React.PropTypes.object
// }
const mapStateToProps = (state) => {
    return {
        toDoList: filterToDoList(state.toDoList, state.filterText)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onTouchToDo: (id) => {
            dispatch(TouchToDoAction(id));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
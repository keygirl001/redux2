import {createStore} from 'redux';
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {combineReducers} from 'redux';
//不是纯函数
// function add(arr, ele) {
//     arr.push(ele);
// }
// var arr = [];
// add(arr, 1);

//纯函数
// function add1(x, y) {
//     return x + y;
// }
// add1(1,3);
// const reducer = (state = 0, action) => { //reducer纯函数来处理state
//     switch (action.type) {
//         case 'INCREASE':
//             return state + 1;
//         case 'DECREASE':
//             return state - 1;
//         default:
//             return state;
//     }
// }

//store对象储存了所有的state状态；
// let store = createStore(reducer);

//own
// const createStore = (reducer) => {
//     let state = 0;
//     let list = [];
//     const getState = () => {
//         return state;
//     }
//     const dispatch = (action) => {
//         state = reducer(state, action);
//         list.forEach((func) => {
//             func();
//         })
//     }
//     const subscribe = (func) => {
//         list.push(func);
//         return (fn) => {
//             list = list.filter((cb) => {
//                 if(cb === fn) {
//                     return false;
//                 }
//                 return true;
//             })
//         }
//     }
//     return {
//         getState,
//         dispatch,
//         subscribe
//     }
// }
//store对象储存了所有的state状态；
// let store = createStore(reducer);

// const render = () => {
//     document.body.innerHTML = store.getState();
// }
// render();
//订阅函数，每次dispatch时都会触发函数，即重新渲染；
// store.subscribe(render);
// document.onclick = () => {
//     store.dispatch({
//         type: 'INCREASE'
//     })
    //取消订阅事件；
    // filterFunc(render);
// }


// const reducer = (state = 0, action) => { 
//     switch (action.type) {
//         case 'INCREASE':
//             return state + 1;
//         case 'DECREASE':
//             return state - 1;
//         default:
//             return state;
//     }
// }
// const store = createStore(reducer);
// class App extends Component {
//     render () {
//         return (
//             <div>
//                 <h1>{store.getState()}</h1>
//                 <button onClick={ () => store.dispatch({type:'INCREASE'})}>+</button>
//                 <button onClick={ () => store.dispatch({type:'DECREASE'})}>-</button>
//             </div>
//         )
//     }
// }
// const render = () => {
//     ReactDom.render(
//         <App></App>,
//         document.getElementById('root')
//     )
// }
// render();
// store.subscribe(render);





















let gid = 0;
const toDoReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TOOD':
            let newState = [...state];
            newState.push({
                text: action.text,
                id: gid++,
                completed: false
            })
        return newState;
        case 'TOUCH_TOOD':
            let newState2 = state.map((ele, index) => {
                if(ele.id === action.id) {
                    return Object.assign({}, ele, {completed: !ele.completed});
                }
                return ele;
            });
         return newState2;
         default:
            return state;
    }
}
const filterReducer = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'TOUCH_FILTER': 
            return action.filter;
        default:
            return state;
    }
}
const rootReducer = combineReducers({
    toDoArr: toDoReducer,
    filterText: filterReducer
});
let store = createStore(rootReducer);
const filterToDoList = (toDoArr, filterText) => {
    switch (filterText) {
        case 'SHOW_COMPLETE':
            return toDoArr.filter((ele, index) => {
               return !ele.completed;
            })
         case 'SHOW_ACTIVE':
            return toDoArr.filter((ele, index) => {
                return ele.completed;
            })
         default:
            return toDoArr;
    }
}
class App extends Component {
    render () {
        let {toDoArr, filterText} = store.getState();
        // let toDoArr = store.getState();
        // let filterText = store.getState();
        toDoArr = filterToDoList(toDoArr, filterText);
        return (
            <div>
                <input type="text" ref='inp'/>
                <button onClick={ () => {
                    store.dispatch({
                        type: 'ADD_TOOD',
                        text: this.refs.inp.value
                    })
                }}>ADD</button>
                <ul>
                {
                    toDoArr.map( (ele, index) => {
                        return <li style={{textDecoration : ele.completed ? 'line-through' : 'none'}} onClick={() => {store.dispatch({
                            type: 'TOUCH_TOOD',
                            id: ele.id
                        })}} key={ele.id}>{ele.text}</li>
                    })
                }   
                </ul>
                <div>
                    <a href="#" onClick={()=>{
                        store.dispatch({
                            type: 'TOUCH_FILTER',
                            filter: 'SHOW_ALL'
                        })
                    }}>SHOW_ALL</a>
                    <a href="#" onClick={()=>{
                        store.dispatch({
                            type: 'TOUCH_FILTER',
                            filter: 'SHOW_COMPLETE'
                        })
                    }}>SHOW_COMPLETE</a>
                    <a href="#" onClick={()=>{
                        store.dispatch({
                            type: 'TOUCH_FILTER',
                            filter: 'SHOW_ACTIVE'
                        })
                    }}>SHOW_ACTIVE</a>
                </div>
            </div>
        )
    }
}
const render = () => {
    ReactDom.render(
        <App></App>,
        document.getElementById('root')
    )
}
render();
store.subscribe(render);




















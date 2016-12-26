import {createStore} from 'redux';
import React, {Component} from 'react';
import ReactDom from 'react-dom';

import AddToDo from './Containers/AddToDo.js';
import ToDoList from './Containers/ToDoList.js';
import Footer from './Containers/Footer.js';
import rootReducer from './Reducers/RootReducer.js';

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









let store = createStore(rootReducer);

class App extends Component {
    render () {
        return (
            <div>
               <AddToDo></AddToDo>
               <ToDoList></ToDoList>
               <Footer></Footer>
            </div>
        )
    }
}
class Provider extends Component {
    getChildContext() {
        return {store: store};
    }
    render () {
        return this.props.children;
    }
}
Provider.childContextTypes = {
    store: React.PropTypes.object
};
const render = () => {
    ReactDom.render(
        <Provider>
            <App></App>
        </Provider>,
        document.getElementById('root')
    )
}
render();
// store.subscribe(render);




















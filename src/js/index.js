import {createStore} from 'redux';
import React, {Component} from 'react';
import ReactDom from 'react-dom';

import AddToDo from './Containers/AddToDo.js';
import ToDoList from './Containers/ToDoList.js';
import Footer from './Containers/Footer.js';
import rootReducer from './Reducers/RootReducer.js';

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




















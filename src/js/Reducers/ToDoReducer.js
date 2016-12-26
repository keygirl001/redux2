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
export default toDoReducer;
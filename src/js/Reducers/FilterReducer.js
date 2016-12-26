const filterReducer = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'TOUCH_FILTER': 
            return action.filter;
        default:
            return state;
    }
}
export default filterReducer;
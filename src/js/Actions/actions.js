export const AddToDoAction = (val) => {
    return {
        type: 'ADD_TOOD',
        text: val
    }
}
export const TouchToDoAction = (val) => {
    return {
        type: 'TOUCH_TOOD',
        id: val
    }
}
export const FilterToDoAction = (val) => {
    return {
        type: 'TOUCH_FILTER',
        filter: val
    }
}
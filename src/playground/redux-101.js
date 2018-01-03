import { createStore } from 'redux';

const store = createStore((state = { count: 33 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            }
        case 'DECREMENT':
            return {
                count: state.count - 1
            }
        case 'RESET':
            return {
                count: 0
            }
        default: return state
    }
});

console.log("Before dispatch $event", store.getState());
store.dispatch({
    type: 'RESET'
});
console.log("After dispatch $event", store.getState());
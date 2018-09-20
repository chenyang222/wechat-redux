const ADD = 'ADD'; // 增加
const DEL = 'DEL'; // 减少



export default (state = 0, action) => {
    switch (action.type) {
        case ADD:
            return state + 1;
        case DEL:
            return state - 1;
        default:
            return state;
    }
}
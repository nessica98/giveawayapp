const loggedReducer = (state = {token:localStorage.getItem('token')}, action) => {
    switch(action.type){
        case 'SIGN_IN':
            state = {token:action.payload}
            break;
        case 'SIGN_OUT':
            state = {token:undefined}
            break;
    }
    
    return state
}
export default loggedReducer
const loggedReducer = (token = undefined, action) => {
    switch(action.type){
        case 'SIGN_IN':
            return token;
        case 'SIGN_OUT':
            return undefined;
    }
}
export default loggedReducer
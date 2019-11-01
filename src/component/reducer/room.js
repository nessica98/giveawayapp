const room = (room = '',action) => {
    switch(action.type){
        case 'changeroom' :
            return action.name
    }
}
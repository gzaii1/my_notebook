const HOME_INIT = {
    name: 'alex',
}

export const HomeReducer = (state = HOME_INIT, action) => {
    switch (action.type) {
        case 'name':
            return {...state, ...action.payload}    
        default:
            break;
    }
    return {...state}
}
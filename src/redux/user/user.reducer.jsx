const InitialState = {
    currentUser: null
}

const userReducer = (state = InitialState, action) => {
    switch(action.type) {
case 'set-current-user':
    return {
        ...state,
        currentUser: action.payload
    }
    default:
return state
    }
}

export default userReducer
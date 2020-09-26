const initState = {
    isLogin: false
}

const AuthReducer = (state = initState, action) => {
    switch(action.type){
        case "LOGIN" :
            return {
                isLogin: true
            }
        case "LOGOUT" :
            return {
                isLogin: false
            }
        default :
            return state
    }
}

export default AuthReducer
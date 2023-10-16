import { SET_LOGIN, SET_TOKEN, SET_USER } from "../actions/userActions";


const initialState = {
    dataUser: '',
    token: null,
    isLogin: false,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return {
                ...state,
                token: action.payload
            };
        case SET_USER:
            return {
                ...state,
                dataUser: action.payload,
            };
        case SET_LOGIN:
            return {
                ...state,
                isLogin: action.payload,
            };
      
        default:
            return state;
    }
}

export default userReducer;


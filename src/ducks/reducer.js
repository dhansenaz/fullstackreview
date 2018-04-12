

const initialState = {
    name:'',
    email: '',
    picture: '',
}

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
export default function(state = initialState, action){
    switch (action.type){
        case LOGIN:
        return {
            ...state, 
            name: action.payload.name,
            email: action.payload.email,
            picture: action.payload.picture,
        };
        case LOGOUT:
        return {
            ...state,
            name:'',
            email:'',
            picture: '',
        }
        default:
        return state;

    }
}

export function login(userInfo){
        return {
            type: LOGIN,
            payload: userInfo
        };
}
export function logout(){
    return {
        type: LOGOUT,
    };
};
import { SET_LOADING } from "../action/actionTypes";

const initialState = {
    loading: false
};

export default function app(state = initialState, { type, payload }){
    switch(type){
        case SET_LOADING:
            return{
                ...state,
                loading:payload
            }
        default:
            return state
    };
};
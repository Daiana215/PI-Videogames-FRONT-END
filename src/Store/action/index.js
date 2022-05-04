import axios from "axios";
import { 
    GET_VIDEOGAMES,
    GET_GENRES,
    GET_BY_NAME, 
    GET_CREATED_OR_NOT, 
    GET_FILTER_ALPHA, 
    GET_FILTER_RATING, 
    POST_VIDEOGAME, 
    SET_LOADING,
    GET_FILTER_PLATFORMS} from "./actionTypes";

export function setLoading(payload){
    return({
        type: SET_LOADING,
        payload,
    });
};

export function getVideogames(){
    return async (dispatch) => {
        dispatch(setLoading(true));
        const res = await axios('/videogames');
        const res_1 = await res.data;
        return dispatch({
            type: GET_VIDEOGAMES,
            payload: res_1
        }, dispatch(setLoading(false)));
    };
};

export const getGenres = (value)=>{
    return async (dispatch) => {
        dispatch(setLoading(true))
        const res = await axios(`/genres`);
        const res_1 = await res.data;
        return dispatch({
            type: GET_GENRES,
            payload: {payload: res_1, value: value}
        }, dispatch(setLoading(false)));
    };
};

export function getGamesByName(name){
    return async (dispatch) => {
        dispatch(setLoading(true))
        const res = await axios(`/videogames?name=${name}`);
        const res_1 = await res.data;
        return dispatch({
            type: GET_BY_NAME,
            payload: res_1
        }, dispatch(setLoading(false)));
    };
};
            
export function postVideogame(payload){
    return async (dispatch) => {
        const res = await axios.post(`/videogame`);
        const res_1 = await res.data;
        return dispatch({
            type: POST_VIDEOGAME,
            payload: payload
        });
    };
};

export function getCreatedOrNot(e){
    return dispatch => dispatch({
        type: GET_CREATED_OR_NOT,
        payload: e
    });
};

export function getOrderAlpha(e){
    return dispatch => dispatch({
        type: GET_FILTER_ALPHA,
        payload: e
    });
};

export function getOrderRating(e){
    return dispatch => dispatch({
        type: GET_FILTER_RATING,
        payload: e
    });
};

export function getFilterPlatforms(e){
    return dispatch => dispatch({
        type: GET_FILTER_PLATFORMS,
        payload: e
    });
};
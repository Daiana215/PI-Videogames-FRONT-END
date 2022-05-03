import { 
    GET_VIDEOGAMES,
    GET_GENRES,
    GET_BY_NAME, 
    GET_CREATED_OR_NOT, 
    GET_FILTER_ALPHA, 
    GET_FILTER_RATING, 
    GET_URL,
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
        const res = await fetch(GET_URL);
        const res_1 = await res.json();
        return dispatch({
            type: GET_VIDEOGAMES,
            payload: res_1
        }, dispatch(setLoading(false)));
    };
};

export const getGenres = (value)=>{
    return async (dispatch) => {
        dispatch(setLoading(true))
        const res = await fetch(`http://localhost:3001/genres`);
        const res_1 = await res.json();
        return dispatch({
            type: GET_GENRES,
            payload: {payload: res_1, value: value}
        }, dispatch(setLoading(false)));
    };
};

export function getGamesByName(name){
    return async (dispatch) => {
        dispatch(setLoading(true))
        const res = await fetch(GET_URL+`?name=${name}`);
        const res_1 = await res.json();
        return dispatch({
            type: GET_BY_NAME,
            payload: res_1
        }, dispatch(setLoading(false)));
    };
};
            
export function postVideogame(payload){
    return async (dispatch) => {
        const res = await fetch(`http://localhost:3001/videogame`, {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload),
        });
        const res_1 = await res.json();
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
import { 
    GET_GENRES, 
    GET_VIDEOGAMES, 
    GET_BY_NAME, 
    GET_CREATED_OR_NOT, 
    GET_FILTER_ALPHA, 
    GET_FILTER_RATING,
    POST_VIDEOGAME, 
    GET_FILTER_PLATFORMS} from "../action/actionTypes";

const initialState = {
    getAllGames: [],
    getAllVideogames: [],
    getAllGenres: [],
};

export default function videogames(state = initialState, { type, payload }){
    switch(type){
        case GET_VIDEOGAMES:
            return {
                ...state,
                getAllGames: payload,
                getAllVideogames: payload
            };
        case GET_GENRES:
            const games = state.getAllVideogames;
            const filterGenres = games.filter(el => el.genres.includes(payload.value));
            return {
                ...state,
                getAllGenres: payload.payload,
                getAllGames: filterGenres
            };
        case GET_BY_NAME:
            return {
                ...state,
                getAllGames: payload
            };
        case GET_CREATED_OR_NOT:
            const allGames = state.getAllVideogames;
            const filterId = payload === 'created' ? allGames.filter(el => typeof el.id === 'string') : payload === 'Videogames'? state.getAllVideogames : allGames.filter(el => typeof el.id === 'number');
            return{
                ...state,
                getAllGames: filterId
            };
        case GET_FILTER_ALPHA:
            const getGames = state.getAllVideogames;
            const filterAlpha = payload === 'Alpha' ? state.getAllVideogames : payload === 'a-to-z' ? getGames.sort((a, b) => a.name > b.name ? 1 : - 1) : getGames.sort((a, b) => a.name > b.name ? -1 : 1);
            return{
                ...state,
                getAllGames: filterAlpha
            };
        case GET_FILTER_RATING:
            const allVideogames = state.getAllVideogames;
            const filterRating = payload === 'Rating' ? state.getAllVideogames : payload === 'up' ? allVideogames.sort((a, b) => a.rating > b.rating ? 1 : - 1) : allVideogames.sort((a, b) => a.rating > b.rating ? -1 : 1);
            return{
                ...state,
                getAllGames: filterRating
            };
        case GET_FILTER_PLATFORMS:
            const allgames = state.getAllVideogames;
            const getByPlatforms = allgames.filter(el => el.platforms.includes(payload));
            return{
                ...state,
                getAllGames: getByPlatforms
            }
        case POST_VIDEOGAME:
            return{
                ...state
            }
        default:
            return state;
    };
};
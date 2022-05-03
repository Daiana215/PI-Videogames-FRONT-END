export default function validate(state){
    let error = {};

    if(!state.name){
        if(typeof state.name === 'string'){
            error.name = 'The entered value is not valid.'
        }
        error.name = 'This field is required.'
    }
    if (!state.image.includes("https://" || "http://") || !state.image.includes(".jpg" || ".png" || ".gif")) {
        error.image = "Enter a valid URL (.jpg, .png, .gif)";
    }
    if(!state.description || state.description.length < 30){
        error.description = 'Please, enter a minimum description of 30 characters.'
    }
    if(!state.released){
        if(!/^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/.test(state.released)){
            error.released = 'Error.';
        }
    }
    if(!state.rating || state.rating < 0 || state.rating > 5){
        error.rating = 'The rating must be < 0 & > 5...'
    }
    if(!state.website.includes("https://" || "http://") || !state.website.includes(".com" || ".ar")){
        error.website = "Enter a Valid URL (.com, .ar)";
    }
    if(!state.genres.length){
        error.genres = 'This field is required.';
    }
    if(!state.platforms.length){
        error.platforms = 'This field is required.';
    }
    return error;
};
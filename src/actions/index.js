// {
//     type:'INCREASE_COUNT',
// }

// {
//     type:'DECREASE_COUNT'
// }


export const ADD_MOVIES='ADD_MOVIES'; 
export const ADD_TO_FAVOURITE='ADD_TO_FAVOURITE';
export const REMOVE_FROM_FAVOURITE='REMOVE_FROM_FAVOURITE';
export const SET_SHOW_FAVOURITES='SET_SHOW_FAVOURITES';
export const ADD_MOVIE_TO_LIST='ADD_MOVIE_TO_LIST';





//action creators
export function addMovies(movies){
    return{
        type:ADD_MOVIES,
        movies  
    }
}

export function addFavourite(movie){
    return{
        type:ADD_TO_FAVOURITE,
        movie  
    }
}

export function removeFromFavourite(movie){
    return {
        type:REMOVE_FROM_FAVOURITE,
        movie
    };
}

export function setShowFavourites(val){
    return {
        type:SET_SHOW_FAVOURITES,
        val 
    };
}


export function addMovieToList(){
    return {
        type:ADD_MOVIE_TO_LIST
    }
}

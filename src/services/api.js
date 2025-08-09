// it is good practice to make a seperate file for all api calls and everything related to the api
const API_KEY = "7e1d38e8d79879737e461bda6e56a258";
const BASE_URL = "https://api.themoviedb.org/3";

// export allows you to use the function in other files and async allows you to use await in the function
export const getPopularTvShows = async() => {
    const response = await fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}`);
    const data = await response.json()
    return data.results // data.results contains the array of tv shows that is being fetched
};

export const searchTvShows = async(query) => {
    const response = await fetch(`${BASE_URL}/search/tv?api_key=${API_KEY}&query=${encodeURIComponent(
        query
        )}`
    );
    const data = await response.json()
    return data.results
};
import {createContext, useState, useContext, useEffect} from "react"

const TvShowContext = createContext()

export const useTvShowContext = () => useContext(TvShowContext)

export const TvShowProvider = ({children}) => {
    const[favorites, setFavorites] = useState([])

    // the useEffect is used to access the local storage to see if there are already favorites.
    // it stores them into the variable storedFavs
    // after that if there are stored favs it sets favorites to storedFavs
    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")

        if (storedFavs) setFavorites(JSON.parse(storedFavs))
    }, [])

    // this useEffect stores a favorite into its local storage using a key value pair
    // the key is 'favorites' and the value is JSON.stringify(favorites)
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])
    
    const addToFavorites = (TvShow) => {
        setFavorites(prev => [...prev, TvShow])
    }

    const removeFromFavorites = (TvShowID) => {
        // this sets favorites to an array of shows that does not include the TvShowID in the paramater
        setFavorites(prev => prev.filter(TvShow => TvShow.id !== TvShowID))
    }

    const isFavorite = (TvShowID) => {
        // this checks if a show is in the favorites list
        // .some() is a JavaScript array method that returns true if at least one item in the array meets the condition.
        return favorites.some(TvShow => TvShow.id === TvShowID)
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return <TvShowContext.Provider value={value}>
        {children}
    </TvShowContext.Provider>
}
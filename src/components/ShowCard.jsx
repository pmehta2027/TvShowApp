import "../css/ShowCard.css"
import { useTvShowContext } from "../contexts/TvShowContext";

function ShowCard({show}) {
    const {isFavorite, addToFavorites, removeFromFavorites} = useTvShowContext()
    const favorite = isFavorite(show.id)

    function onFavoriteClick(e) {
        e.preventDefault()
        if (favorite) removeFromFavorites(show.id)
        else addToFavorites(show)
    }

    return <div className="show-card">
        <div className="show-poster">
            <img src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} alt={show.name}/>
            <div className="show-overlay">
                <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
                    ♥
                </button>

            </div>
        </div>
        <div className="show-info">
            <h3>{show.name}</h3>
            <p>{show.first_air_date?.split("-")[0]}</p>

        </div>


    </div>
}
export default ShowCard;
import "../css/Favorites.css"
import { useTvShowContext } from "../contexts/TvShowContext"; 
import ShowCard from "../components/ShowCard";

function Favorites() {

    const { favorites } = useTvShowContext();

    if (favorites) {
        return (
        <div className="favorites">

            <h2>Your Favorites</h2>
            <div className="shows-grid">
                {favorites.map((show) => (<ShowCard show={show} key={show.id}/>))}
            </div>

        </div>
        );
    }

    return(
        <div className="favorites-empty">
            <h2>No favorite tv-shows yet</h2>
            <p>Start adding movies to your favorites and they will appear here</p>
        </div>
    )
}

export default Favorites;
import ShowCard from "../components/ShowCard.jsx"
import {useState, useEffect} from "react"
import "../css/Home.css"
import { getPopularTvShows, searchTvShows } from "../services/api.js";

function Home() {

    const [searchQuery, setSearchQuery] = useState("");
    const [TvShows, setTvShows] = useState([]);
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadPopularTvShows = async () => {
            try {
                const popularTvShows = await getPopularTvShows();
                setTvShows(popularTvShows)
            } catch (err) {
                console.log(err);
                setError("Failed to load TV shows...");
            }
            finally {
                setLoading(false);
            }
        };

        loadPopularTvShows();
    }, [])
    

    const handleSearch = async (e) => {
        e.preventDefault() // This will make the text that you serched to remain there after you click search
        if (!searchQuery.trim()) return // makes sure that you did not search an empty string
        if (loading) return

        setLoading(true)
        try {
            const searchResults = await searchTvShows(searchQuery) // calls the searchTvShows function and stores the resluts in the searchResults variable
            setTvShows(searchResults)
            setError(null)
        } catch {
            console.log(err)
            setError("Failed to search movies...")
        } finally {
            setLoading(false)
        }
    };
    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                type="text" 
                placeholder="Search for shows..." 
                className="search-input"
                value={searchQuery} // the value of whatever is being typed in the search bar is searchQuery
                onChange={(e) => setSearchQuery(e.target.value)} // e is whatever the change in the search bar is, then we get the target.value of e and then we set our state.
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            {error && <div className="error-message">{error}</div>}

            {loading ? 
            (<div className="loading">Loading...</div>)
             : (<div className="shows-grid">
                {TvShows.map((show) => (<ShowCard show={show} key={show.id}/>))}
            </div>)}
        </div>
    );
}

export default Home;
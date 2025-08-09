import './css/App.css'
import Favorites from "./pages/Favorites"
import Home from "./pages/Home"
import { Routes, Route} from "react-router-dom"
import NavBar from "./components/NavBar"
import { TvShowProvider } from './contexts/TvShowContext'

// run by using npm run dev in terminal
function App() {

  return (
    <TvShowProvider>
      <NavBar/>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/favorites" element={<Favorites />}/>
        </Routes>
      </main>
    </TvShowProvider>
  );
}

export default App;

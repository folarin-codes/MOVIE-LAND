import {  useState , useEffect } from "react";
import './app.css'
import search from './search.svg'
import MovieCard from "./Components/MovieCard";

const API_URL = ' http://www.omdbapi.com/?i=tt3896198&apikey=bb732864';

function App() {

      const [movies, setMovies] = useState([])
      const [searchTerm , setSearchTerm] = useState('')

      const searchMovies = async (title) => {

            const response = await fetch(`${API_URL}&s=${title}`);

            const data = await response.json()
            setMovies(data.Search)
      }

      console.log(movies)

    
      useEffect(() => {
            
            // searchMovies('')

      } , [])
      return(
         
            <div className="app">
                  <h1>MovieVille</h1>

                  <div className="search">
                        <input
                              placeholder="search for movies"
                              value={searchTerm}
                              onChange={(e) => { setSearchTerm(e.target.value)
                                     
                              }}
                        />
                        <img src={search}
                              alt='search'
                              onClick={()=>{searchMovies(searchTerm)}}
                        />
                  </div>

                  {
                        movies.length > 0 ? (
                              <div className="container">
                                    
                                    {movies.map((movie) => {
                                              return  (
                                                   <MovieCard movie={movie}/>
                                             )
                                       })
                                         
                                    }

                        </div>

                        )
                              :
                              (
                                    <div className="empty">
                                          <h2>No movies found</h2>
                                    </div>
                              )

                  }

                 
            </div>
      )
}

export default App;     
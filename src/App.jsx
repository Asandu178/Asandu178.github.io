import {films} from './data.js'
import FilmPlayer from './FilmPlayer.jsx'
import './App.css'

export function App() {
    const listItems = films.map(film => 
        <li key={film.id}>
            <FilmPlayer videoUrl={film.url} filmName={film.name}/>
        </li>
    );
    return <ul className='FilmsList'>{listItems}</ul>
}
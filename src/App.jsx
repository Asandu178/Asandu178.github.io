import {films} from './data.js'
import FilmPlayer from './FilmPlayer.jsx'

export default function App() {
    const listItems = films.map(film => 
        <li key={film.id}>
            <p>{film.name}</p>
            <FilmPlayer videoUrl={film.url}/>
        </li>
    );
    return <ul>{listItems}</ul>
}
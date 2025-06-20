import {films} from './data.js'
import FilmPlayer from './FilmPlayer.jsx'

export function App() {
    const listItems = films.map(film => 
        <li key={film.id}>
            <FilmPlayer videoUrl={film.url} filmName={film.name}/>
        </li>
    );
    return <ul>{listItems}</ul>
}
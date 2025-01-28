/* Filmliste-komponent */

//Importera CSS för komponent
import './MovieList.css';

// Definierar strukturen för ett filmobjekt
interface Movie {
    title: string;
    year: number;
    watched: boolean;
}

// Array med filmobjekt
const movies: Movie[] = [
    { title: 'The Shawshank Redemption', year: 1994, watched: true},
    { title: 'Inception', year: 2010, watched: true},
    { title: 'The Godfather', year: 1972, watched: false},
]

// Skriver ut lista över filmer
function MovieList() {
    return (
        <section>
            <h2>Filmlista</h2>
            <ul>
                {/* Loopar igenom movies-arrayen */}
                {movies.map((movie, index) => (
                    <li key={index}>
                        <h3>{movie.title}</h3>
                        <p>År: {movie.year}</p>
                        <p>Sett: {movie.watched ? 'Ja' : 'Nej'}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default MovieList;
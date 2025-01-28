import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import MovieList from './components/MovieList';

function App() {

    return (
        <>
            {/* Header-komponent. Skickar med prop 'title' */}
            <Header title="Mina filmer" />
            <main>
            {/* MovieList-komponent. Renderar en lista över filmer */}
            <MovieList />
            </main>
            {/* Footer-komponent. Skickar med prop 'devName' */}
            <Footer devName="Alexander Hilding" />
        </>
    )
}

export default App

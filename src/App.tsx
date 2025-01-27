import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import MovieList from './components/MovieList';

function App() {

  return (
    <>
      <Header title="Mina filmer" />
      <main>
        <MovieList />
      </main>
      <Footer devName="Alexander Hilding" />
    </>
  )
}

export default App

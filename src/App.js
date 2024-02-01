import './App.css';
import LoadingScreen from './components/LoadingScreen';
import EntryScreen from './components/EntryScreen';
import Header from './components/Header';
import Footer from './components/Footer';
import Index from './components/Index';
import React from 'react';
import Menu from './components/Menu';

function App() {
  const [isLoading, setIsLoading] = React.useState(true)
  const [hasEntered, setHasEntered] = React.useState(false)
  const [musicPlaying, setMusicPlaying] = React.useState(true)

  const stillLoading = async () => {
    setTimeout(() => {  setIsLoading(false); }, 3000);
  }

  function enter(){
    console.log("clicked!")
    setTimeout(() => {  setHasEntered(true); }, 1000)
  }

  function enterMusic(){
    console.log("clicked!")
    toggleMusic()
    setTimeout(() => {  setHasEntered(true); }, 1000)
  }

  function toggleMusic(){
    setMusicPlaying((prevMusicPlaying) => !prevMusicPlaying)
    console.log(musicPlaying)
  }

  stillLoading()

  return (
    isLoading ? <LoadingScreen /> : hasEntered ?  
    <div>
      <Header music={musicPlaying} />
      <Menu music={musicPlaying} />
      <Index music={musicPlaying}/>
      <Footer music={musicPlaying}  toggle={toggleMusic}/>
    </div>   : <EntryScreen entry={() => enter()} music={enterMusic}/>
  );
}

export default App;

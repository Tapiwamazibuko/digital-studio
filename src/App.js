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

  const stillLoading = async () => {
    setTimeout(() => {  setIsLoading(false); }, 3000);
  }

  function enter(){
    console.log("clicked!")
    setHasEntered(true)
  }

  stillLoading()

  return (
    isLoading ? <LoadingScreen /> : hasEntered ?  
    <div>
      <Header />
      <Menu />
      <Index />
      <Footer />
    </div>   : <EntryScreen entry={() => enter()}/>
  );
}

export default App;

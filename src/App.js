import './App.css';
import LoadingScreen from './components/LoadingScreen';
import EntryScreen from './components/EntryScreen';
import Header from './components/Header';
import Footer from './components/Footer';
import Index from './components/Index';
import React from 'react';

function App() {
  const [isLoading, setIsLoading] = React.useState(true)
  const stillLoading = async () => {
    setTimeout(() => {  setIsLoading(false); }, 3000);
  }

  stillLoading()

  return (
    isLoading ? <LoadingScreen /> :
    <div>
      <Header />
      <Index />
      <Footer />
    </div>   
  );
}

export default App;

import './App.css';
import LoadingScreen from './components/LoadingScreen';
import EntryScreen from './components/EntryScreen';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <EntryScreen />
      <Footer />
    </div>    
  );
}

export default App;

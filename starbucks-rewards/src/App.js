import './App.css';
import Navbar from './components/Navbar';
import HeroContainer from './components/HeroContainer';
import GettingStarted from './components/GettingStarted/GettingStarted';
import Favorites from './components/Favorites/Favorites';
import EndlessExtras from './components/EndlessExtras/EndlessExtras';
import CashOrCard from './components/CashOrCard/CashOrCard';
import StarCodes from './components/StarCodes';
import TermsAndConditions from './components/TermsAndConditions';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App font-Sans">
      <Navbar/>
      <HeroContainer/>
      <GettingStarted/>
      <Favorites/>
      <EndlessExtras/>
      <CashOrCard/>
      <StarCodes/>
      <TermsAndConditions/>
      <Footer/>
    </div>
  );
}

export default App;

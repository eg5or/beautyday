import './main.scss';
import Header from './components/Header/Header'
import About from './components/About/About';
import Certificates from './components/Certificates/Certificates';
import Main from './components/Main/Main';
import Portfolio from './components/Portfolio/Portfolio';
import Price from './components/Price/Price';
import Reviews from './components/Reviews/Reviews';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <Route exact path='/' render={() => <Main />}/>
      <Route path='/about' render={() => <About />}/>
      <Route path='/certificates' render={() => <Certificates />}/>
      <Route path='/portfolio' render={() => <Portfolio />}/>
      <Route path='/price' render={() => <Price />}/>
      <Route path='/reviews' render={() => <Reviews />}/>
    </div>
  );
}

export default App;

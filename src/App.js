import logo from './components/images/logo.svg'
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/Home';
import Basics from './components/Basics';
import { useState } from 'react';
import MakingMoney from './components/MakingMoney';
import PayingForSchool from './components/PayingForSchool';
import WordBank from './components/WordBank';
import Calculators from './components/Calculators';
import Test from './components/Test';

function App() {
  const [learning, setLearning] = useState(false)

  function showLearning() {
      setLearning(true)
  }

  function hideLearning() {
    setLearning(false)
}

const [resources, setResources] = useState(false)

  function showResources() {
      setResources(true)
  }

  function hideResources() {
    setResources(false)
}

const [games, setGames] = useState(false)

  function showGames() {
      setGames(true)
  }

  function hideGames() {
    setGames(false)
}

  return (
    <div>
    <div className='nav'>
      <div className='inner-nav'>
        <a href='/' className='logo-link'><img className='logo' src={logo}/></a>
      <div className='links'>
        <h3 className='home-link'><a href='/'>Home</a></h3>

        <div onMouseEnter={showLearning} onMouseLeave={hideLearning}>
        <h3 className={learning && 'links-hovered'} >Learning</h3>
        {learning && 
      <div className='learning-menu'>
        <p><a href='/basic-personal-finance'>Basic Personal Finance</a></p>
        <p><a href='/making-money'>Making Money</a></p>
        <p><a href='/paying-for-school'>Paying for School</a></p>
        <p><a href='/investing-wisely'>Investing Wisely</a></p>
      </div>}
      </div>

      <div onMouseEnter={showResources} onMouseLeave={hideResources}>
        <h3 className={resources && 'links-hovered'} >Resources</h3>
        {resources && 
      <div className='learning-menu'>
        <p><a href='/word-bank'>Word Bank</a></p>
        <p><a href='/calculators'>Calculators</a></p>
        <p><a href='/useful-links'>Useful Links</a></p>
      </div>}
      </div>
      
      <div onMouseEnter={showGames} onMouseLeave={hideGames}>
        <h3 className={games && 'links-hovered'} >Games</h3>
        {games && 
      <div className='learning-menu'>
        <p><a href='/test'>Test Yourself</a></p>
        <p><a href='/kahoot'>Kahoot!</a></p>
        <p><a href='/quizlet'>Quizlet</a></p>
      </div>}
      </div>

      </div>
      </div>

    </div>
    <BrowserRouter>
    <Switch>
      <Route path='/' exact>
        <Home/>
      </Route>
      <Route path='/basic-personal-finance'>
        <Basics/>
      </Route>
      <Route path='/making-money'>
        <MakingMoney/>
      </Route>
      <Route path='/paying-for-school'>
        <PayingForSchool/>
      </Route>
      <Route path='/word-bank'>
        <WordBank/>
      </Route>
      <Route path='/calculators'>
        <Calculators/>
      </Route>
      <Route path='/test'>
        <Test/>
      </Route>
    </Switch>
    </BrowserRouter>

    <div className='footer'>
      <div className='inner-nav'>
        <p>Designed, Coded, and Written by Rachel Chen</p>
        <p className='credit'><a href='https://storyset.com/' target='_blank'>Illustrations by StorySet</a></p>
      </div>
    </div>
    </div>
  );
}

export default App;
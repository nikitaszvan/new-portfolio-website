import React from 'react';
import FirstHero from './FirstHero.jsx';
import SecondHero from './SecondHero.jsx';
import ThirdHero from './ThirdHero.jsx';
import AboutMe from './AboutMe.jsx';

const App = () => {
  return (
    <div>
        <FirstHero />
        <SecondHero />
        <AboutMe />
        <ThirdHero />
    </div>
  )
}

export default App;
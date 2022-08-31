import './App.css'

import { Footer, Blog, Posibility, Feature, WhatGp3, Header } from './containers/index'

import { Navbar, Cta, Brand } from './components/index'

function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar />
        <Header />

      </div>

      <Brand />
      <WhatGp3 />
      <Feature />
      <Posibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;

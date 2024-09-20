
import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';

import List from './components/list/List';
import { TVShowAPI } from './components/services/tv_shows';
import Details from './components/details/Details';

function App() {

  


  return (
 

      <div className='main'>

        <Header/>
        <Details tvShow={currentTVShow}/>
         <List/>

       
      </div>
      
     
   
  );
}

export default App;

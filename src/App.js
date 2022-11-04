
import { useEffect, useState } from 'react';
import { BrowserRouter as Router,Routes,Route, useParams  } from 'react-router-dom';

import './App.css';
import Back from './components/Back';
import Last from './components/Last';
import Mid from './components/Mid';
import Nav from './components/Nav';
import View from './components/View';

function App() {
  let [show, setshow] = useState([]);
 
  //console.log([arr,...show])
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Mid/>
        <Back/>
        <Routes>
          <Route path='/' element={<Last  show={show} setshow={setshow} />}/>
          <Route path='view/:name' element={<View show={show} setshow={setshow} />}/>
          <Route path='save' element={ <View/>}/>
          <Route path='/*' element={<h1>eroor page</h1>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

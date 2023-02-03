import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Contato from './components/pages/Contato';
import Favoritos from './components/pages/Favoritos';
import Games from './components/pages/Games';
import Wish_list from './components/pages/Wish_list';
import Nav_bar from './components/pages/Nav_bar';
import Footer from './components/pages/Footer';
import Home from './components/pages/Home';
import New_game from './components/pages/New_game';
import EditGame from './components/pages/EditGame';

import Container from './components/layout/Container';

function App() {
  return (
    <Router>
      <Nav_bar />
      
      <Container customClass="min-heigth">
        <Routes>
          <Route exact path='/home' element={<Home/>}/>
          <Route exact path='/my_games' element={<Games/>}/>
          <Route exact path='/fav' element={<Favoritos/>}/>
          <Route exact path='/wish_list' element={<Wish_list/>}/>
          <Route exact path='/contact' element={<Contato/>}/>
          <Route exact path='/new_game' element={<New_game/>}/>
          <Route exact path='/edit/:id' element={<EditGame/>}/>

        </Routes>
      </Container>

      <Footer />
    </Router>
  );
}

export default App;

/* import Banner from './components/Banner/Banner'; */
import Header from './components/Header/Header';

import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Shop } from './pages/Shop/shop';
import { VidaSana } from './pages/VidaSana/VidaSana';
import { Branches } from './pages/Branches/Branches';
import { NotFound } from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*  <Banner/> */}

        <Header />
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/vidaSana" element={<VidaSana />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>

    
  );
}

export default App;

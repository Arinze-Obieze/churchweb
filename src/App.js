import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Footer from './components/Footer';
import David from './pages/Pastor';
import Header from './components/Header';
import BELIEFS from './pages/Beliefs';
import Ministries from './pages/Ministries';
import RrvNetwork from './pages/RRvNetwork';
import LiveStreams from './pages/LiveStreams';
import Blog from './pages/Blog';
import Partner from './pages/Partner';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Connect from './pages/Connect';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='booking' element={<Booking />} />
          <Route path='/pastor' element={<David />} />
          <Route path='/beliefs' element={<BELIEFS />} />
          <Route path='/ministries' element={<Ministries />} />
          <Route path='/rrvnetwork' element={<RrvNetwork />} />
          <Route path='/livestreams' element={<LiveStreams />} />
          <Route path='/blog' element={<Blog />} />

          <Route path='/partner' element={<Partner />} />
          <Route path='events' element={<Events />} />
          <Route path='contact' element={<Contact />} />
          <Route path='connect' element={<Connect />} />

        </Routes>
      </main>

      <Footer />

    </BrowserRouter>
  );
}

export default App;

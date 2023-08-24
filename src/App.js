
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Footer from './components/Footer';
import Steven from './pages/Steven';
import David from './pages/David';
import Header from './components/Header';
import BELIEFS from './pages/Beliefs';
import Ministries from './pages/Ministries';
import EtvNetwork from './pages/EtvNetwork';
import WordAndSpirit from './pages/WordAndSpirit';
import ViralRevival from './pages/ViralRevival';
import Worship from './pages/Worship';
import PresenceAndPower from './pages/PresenceAndPower';
import SoakingWorship from './pages/SoakingWorship';
import LiveStreams from './pages/LiveStreams';
import EncounterPodcast from './pages/EncounterPodcast';
import ReclaimMedia from './pages/ReclaimMedia';
import Blog from './pages/Blog';
import Donate from './pages/Donate';
import Partner from './pages/Partner';
import MailInGiving from './pages/MailInGiving';
import WorldChangers from './pages/WorldChangers';
import Ecourse from './pages/Ecourse';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Connect from './pages/Connect';
import Faq from './pages/Faq';

function App() {
  return (

    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='booking' element={<Booking />} />
          <Route path='/steven' element={<Steven />} />
          <Route path='/david' element={<David />} />
          <Route path='/beliefs' element={<BELIEFS />} />
          <Route path='/ministries' element={<Ministries />} />
          <Route path='/etvnetwork' element={<EtvNetwork />} />
          <Route path='/wordandspirit' element={<WordAndSpirit />} />
          <Route path='/viralrevival' element={<ViralRevival />} />
          <Route path='/worship' element={<Worship />} />
          <Route path='/presenceandpower' element={<PresenceAndPower />} />
          <Route path='/soakingworship' element={<SoakingWorship />} />
          <Route path='/livestreams' element={<LiveStreams />} />
          <Route path='/encounterpodcast' element={<EncounterPodcast />} />
          <Route path='/reclaimmedia' element={<ReclaimMedia />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/donate' element={<Donate />} />
          <Route path='/partner' element={<Partner />} />
          <Route path='/mailingiving' element={<MailInGiving />} />
          <Route path='/worldchangers' element={<WorldChangers />} />
          <Route path='/ecourse' element={<Ecourse />} />
          <Route path='events' element={<Events />} />
          <Route path='contact' element={<Contact />} />
          <Route path='connect' element={<Connect />} />
          <Route path='faq' element={<Faq />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

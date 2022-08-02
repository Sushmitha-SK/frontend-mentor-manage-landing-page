import './App.scss';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Simplify from './components/Simplify';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Features />
      <Testimonials />
      <Simplify />
      <Footer />
    </div>
  );
}

export default App;

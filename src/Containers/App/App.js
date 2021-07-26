import About from '../About/About';
import Blog from '../Blog/Blog';
import Clients from '../Clients/Clients';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Portfolio from '../Portfolio/Portfolio';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Clients />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

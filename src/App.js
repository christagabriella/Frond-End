import Header from './Component/Header/index.js';
import Hero from './Component/Hero/index.js';
import Clients from './Component/Clients/index.js';
import Features from './Component/Features/index.js';
import Pricing from './Component/Pricing/index.js';
import Footer from './Component/Footer/index.js';

const App = () => {
  return (
  <div className="body-wrap">
    <Header />
    <main className="site-content">
    <Hero />
    <Clients />
    <Features />
    <Pricing />
    </main>
    <Footer />
  </div>
  )
};
export default App;

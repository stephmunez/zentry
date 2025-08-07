import About from './components/About';
import Features from './components/Features';
import Hero from './components/Hero';
import NavBar from './components/Navbar';
import Story from './components/Story';

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      <Features />
      <Story />
      <section className="z-0 min-h-screen bg-blue-500"></section>
    </main>
  );
};

export default App;

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { Solutions } from './pages/Solutions';
import { Industries } from './pages/Industries';
import { Careers } from './pages/Careers';
import { Contact } from './pages/Contact';
import { Blog } from './pages/Blog';

// Placeholder components for other pages
const Placeholder = ({ title }: { title: string }) => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <h1 className="text-4xl font-heading font-bold">{title} Page Coming Soon</h1>
  </div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="industries" element={<Industries />} />
          <Route path="blog" element={<Blog />} />
          <Route path="careers" element={<Careers />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Placeholder title="404 - Not Found" />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;

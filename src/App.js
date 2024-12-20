import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import ProductSearch from "./pages/ProductSearch";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Footer from "./components/Footer";
import BlogDetail from "./pages/BlogDetail";
import DisanSiembra from "./pages/DisanSiembra";
import ScrollToTop from "./utils/ScrollToTop"; // Importar el nuevo componente

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <ScrollToTop /> {/* Agregar aquí el componente para manejar el scroll */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Home />
              </motion.div>
            }
          />
          <Route
            path="/about-us"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <About />
              </motion.div>
            }
          />
          <Route
            path="/disan-siembra"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <DisanSiembra />
              </motion.div>
            }
          />
          <Route
            path="/blog"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Blog />
              </motion.div>
            }
          />
          <Route
            path="/blog/:slug"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <BlogDetail />
              </motion.div>
            }
          />
          <Route
            path="/product-search"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ProductSearch />
              </motion.div>
            }
          />
          <Route
            path="/product/:productName"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ProductDetail />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;

import Home from './components/Home';
import Header from './components/Navbar';
import Footer from './components/Footer';
import styles from './App.module.css';
import { Outlet } from 'react-router';


function App() {
  return (
    <div className={` ${styles.container} container mx-auto px-1 py-2`}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
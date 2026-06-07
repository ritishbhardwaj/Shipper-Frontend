import { Button } from '@/components/ui/button'
import Header from '@/components/Navbar'
import Footer from './Footer';
import Hero from './Hero';

import styles from './Home.module.css'

const Home = () => {
  return (
    <>

    <div className = {`  container mx-auto px-1 py-2`}>
  
    <Hero/>
 </div>
    </>
  )
}

export default Home;
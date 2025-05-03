import { motion } from 'framer-motion';

export default function Home() {
  return (
    <section className="home-section" id="home">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Satvik
      </motion.h1>
      <p>Welcome to my portfolio!</p>
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="home-button"
      >
        <a href="#about">Learn More</a>
      </motion.button>
      
    </section>
  );
}
  

  
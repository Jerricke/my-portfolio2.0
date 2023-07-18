import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import placeholder from '../../assets/test.jpeg';

export default function WorkCard({ path, title = 'title', img = placeholder }) {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: 90 }}
      animate={{ opacity: 1, rotate: 0 }}
      transition={{
        type: 'spring',
        duration: 1,
        bounce: 2,
        damping: 10,
      }}
      className="WorkLayout__card"
    >
      <div className="card">
        <img src={img} alt="projImg" />
        <div className="overlay">
          <NavLink to={path}>Learn More</NavLink>
        </div>
      </div>
      <h1>{title}</h1>
    </motion.div>
  );
}

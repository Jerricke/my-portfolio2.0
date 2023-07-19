import { motion } from 'framer-motion';
import './HomeMenu.css';
import { NavLink } from 'react-router-dom';
import Jerrick from '../../assets/Jerrick.jpeg';

function HomeMenu() {
  const initial = { translateY: -50, opacity: 0 };
  const animation = { translateY: 0, opacity: 1 };
  return (
    <motion.div
      initial={{ display: 'none', opacity: 0 }}
      animate={{ display: 'block', opacity: 1 }}
      transition={{ delay: 4.6, duration: 1 }}
      className="homeMenu"
    >
      <div className="homeMenu__wrapper">
        <img className="homeMenu__image" src={Jerrick} alt="Jerrick" />
        <div className="homeMenu__nav">
          <ul className="homeMenu__router">
            <motion.li
              initial={initial}
              animate={animation}
              transition={{ delay: 4.5, duration: 0.75 }}
            >
              <NavLink to="about">About Me</NavLink>
            </motion.li>
            <motion.li
              initial={initial}
              animate={animation}
              transition={{ delay: 4.75, duration: 0.75 }}
            >
              <NavLink to="work">My Works</NavLink>
            </motion.li>
            <motion.li
              initial={initial}
              animate={animation}
              transition={{ delay: 5, duration: 0.75 }}
            >
              <NavLink to="contact">Let&apos;s Talk!</NavLink>
            </motion.li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default HomeMenu;

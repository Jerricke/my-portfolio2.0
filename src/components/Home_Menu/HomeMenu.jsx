import { motion } from 'framer-motion';
import './HomeMenu.css';
import { NavLink } from 'react-router-dom';
import Jerrick from '../../assets/Jerrick.jpeg';

function HomeMenu() {
  return (
    <motion.div
      initial={{ display: 'none', opacity: 0 }}
      animate={{ display: 'block', opacity: 1 }}
      transition={{ delay: 6.6, duration: 1 }}
      className="homeMenu"
    >
      <div className="homeMenu__wrapper">
        <img className="homeMenu__image" src={Jerrick} alt="Jerrick" />
        <div className="homeMenu__nav">
          <ul className="homeMenu__router">
            <li>
              <NavLink>About Me</NavLink>
            </li>
            <li>
              <NavLink>My Works</NavLink>
            </li>
            <li>
              <NavLink>Let&apos;s Talk!</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default HomeMenu;

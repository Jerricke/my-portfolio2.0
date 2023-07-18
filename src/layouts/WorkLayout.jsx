import { NavLink, Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import TechStack from '../components/Work_Ticker/Work_Ticker';
import './WorkLayout.css';
import WorkCard from '../components/Work_Cards/WorkCard';

export default function WorkLayout() {
  return (
    <>
      <TechStack />
      <div className="WorkLayout__container">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeIn' }}
          id="projHeader"
        >
          Projects
        </motion.h1>
        <div className="WorkLayout__projects">
          <WorkCard title="Pokemon App" path="PokemonApp" />
          <WorkCard title="Portfolio Website" path="Portfolio" />
          {/* <WorkCard title="work3" path="work3" /> */}
        </div>

        <div className="WorkLayout__details">
          <Outlet />
        </div>
      </div>
      <div className="extraFooter">
        <ul className="extraFooterBtn">
          <li>
            <NavLink to="../about">About Me</NavLink>
          </li>
          <li>
            <NavLink to="../contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

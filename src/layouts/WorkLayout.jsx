import { NavLink, Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import TechStack from '../components/Work_Ticker/Work_Ticker';
import './WorkLayout.css';
import WorkCard from '../components/Work_Cards/WorkCard';
import Portfolio from '../assets/Portfolio.png';
import PicPoint from '../assets/PicPoint.png';
import Triply_logo from '../assets/Triply_logo.png';

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
          <WorkCard img={PicPoint} title="PicPoint" path="PicPoint" />
          <WorkCard img={Triply_logo} title="Triply" path="Triply" />
          <WorkCard title="Pokemon App" path="PokemonApp" />
          <WorkCard
            img={Portfolio}
            title="Portfolio Website"
            path="Portfolio"
          />
        </div>

        <div className="WorkLayout__details">
          <Outlet />
        </div>
      </div>
      {/* <div className="extraFooter">
        <ul className="extraFooterBtn">
          <li>
            <NavLink to="../about">About Me</NavLink>
          </li>
          <li>
            <NavLink to="../contact">Contact</NavLink>
          </li>
        </ul>
      </div> */}
    </>
  );
}

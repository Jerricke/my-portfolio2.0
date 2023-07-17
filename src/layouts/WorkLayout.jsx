import { NavLink } from 'react-router-dom';
import TechStack from '../components/Work_Ticker/Work_Ticker';
import './WorkLayout.css';
import WorkCard from '../components/Work_Cards/WorkCard';

export default function WorkLayout() {
  return (
    <>
      <TechStack />
      <div className="WorkLayout__container">
        <div className="WorkLayout__projects">
          <h1 id="projHeader">Projects</h1>
          <WorkCard />
          <WorkCard />
          <WorkCard />
        </div>

        <div className="WorkLayout__details">
          right side
          <div className="WorkLayout__comments">Comments</div>
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

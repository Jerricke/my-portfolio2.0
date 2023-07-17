import { NavLink } from 'react-router-dom';

export default function Contact() {
  return (
    <>
      <div>Contact</div>
      <div className="extraFooter">
        <ul className="extraFooterBtn">
          <li>
            <NavLink to="../about">About Me</NavLink>
          </li>
          <li>
            <NavLink to="../work">My Work</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

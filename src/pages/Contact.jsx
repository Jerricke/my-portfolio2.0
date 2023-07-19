import { NavLink } from 'react-router-dom';
import ContactDesc from '../components/Contact_Main/Contact_Desc';
import '../components/Contact_Main/Contact.css';
import ContactForm from '../components/Contact_Main/Contact_Form';

export default function Contact() {
  return (
    <>
      <div className="contact__wrapper">
        <ContactDesc />
        <ContactForm />
      </div>
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

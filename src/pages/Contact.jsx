import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import ContactDesc from '../components/Contact_Main/Contact_Desc';
import '../components/Contact_Main/Contact.css';
import ContactForm from '../components/Contact_Main/Contact_Form';

export default function Contact() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeIn' }}
        className="contact__wrapper"
      >
        <ContactDesc />
        <ContactForm />
      </motion.div>
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

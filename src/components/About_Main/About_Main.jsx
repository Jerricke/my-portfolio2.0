import './About.css';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import VisualAnimation from './VisualAnimation';

export default function AboutMain() {
  const initial = { opacity: 0, translateY: -50 };
  const animation = { opacity: 1, translateY: 0 };
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeIn' }}
        id="About"
      >
        <div className="aboutSection">
          <div className="aboutMe ">
            <h1>My Passion</h1>
            <hr />
            <motion.p
              initial={initial}
              animate={animation}
              transition={{ type: 'spring', delay: 0.6 }}
            >
              Growing up with tech always right beside me, I&apos;ve spent
              countless amounts of time playing around with different web and
              mobile applicaitons.
            </motion.p>
            <motion.p
              initial={initial}
              animate={animation}
              transition={{ type: 'spring', delay: 0.7 }}
            >
              With a background in Chemical Engineering, I pride myself with my
              ability to understand processes and learn new skills in a
              systematic and logical manner. And as a student at Flatiron
              school, I am constantly pushing my boundaries and learning new
              tech skills even under the pressure of a fast pace learning
              environment.
            </motion.p>
            <motion.p
              initial={initial}
              animate={animation}
              transition={{ type: 'spring', delay: 0.8 }}
            >
              With the desire to build, I&apos;ve picked up many different
              programming skills to deliver the most interactive and engaging
              applicationsmotion..
            </motion.p>
            <motion.p
              initial={initial}
              animate={animation}
              transition={{ type: 'spring', delay: 0.9 }}
            >
              Everyday I work with like-minded peers and hone my skills and
              craft. I firmly belive that there is never an end to learning.
            </motion.p>
          </div>
          <div className="aboutAnimation fade-in">
            <VisualAnimation />
          </div>
        </div>
        <div className="about__hobby">
          <h1>test</h1>
        </div>
      </motion.div>
      {/* <div className="extraFooter">
        <ul className="extraFooterBtn">
          <li>
            <NavLink to="../work">My Work</NavLink>
          </li>
          <li>
            <NavLink to="../contact">Contact</NavLink>
          </li>
        </ul>
      </div> */}
    </>
  );
}

import './About.css';
import { motion } from 'framer-motion';
import VisualAnimation from './VisualAnimation';
import Gib from '../../assets/Gib.jpeg';
import Latte from '../../assets/Latte.jpeg';
import Mocha from '../../assets/Mocha.jpeg';
import TUL1 from '../../assets/TUL1.jpeg';
import TUL2 from '../../assets/TUL2.jpeg';

export default function AboutMain() {
  const initial = { opacity: 0, translateY: -50 };
  const animation = { opacity: 1, translateY: 0 };
  return (
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
            ability to understand processes and learn new skills in a systematic
            and logical manner. And as a student at Flatiron school, I am
            constantly pushing my boundaries and learning new tech skills even
            under the pressure of a fast pace learning environment.
          </motion.p>
          <motion.p
            initial={initial}
            animate={animation}
            transition={{ type: 'spring', delay: 0.8 }}
          >
            I havea strong desire to build, and I&apos;ve picked up many
            different programming skills to deliver the most interactive and
            engaging applicationsmotion..
          </motion.p>
          <motion.p
            initial={initial}
            animate={animation}
            transition={{ type: 'spring', delay: 0.9 }}
          >
            Everyday I work with like-minded peers and hone my skills and craft.
            I firmly belive that there is never an end to learning.
          </motion.p>
        </div>
        <div className="aboutAnimation fade-in">
          <VisualAnimation />
        </div>
      </div>
      <hr />
      <div className="about__hobby">
        <h1 className="fade-in">What Makes Me, Me?</h1>
        <h3 className="fade-in">A Traveler</h3>
        <p className="fade-in">
          Born and raised in <strong>Malaysia</strong>, I was pre-exposed to a
          culture rich environment everyday. Always seeing and learning about
          the different walks of life, I aim to broaden my perspectives and
          learn about all the different types of cultures that make up our
          world! My love for traveling was seeded by my parents, who gave me the
          blessing and opportunity to travel at an early age.
        </p>
        <div className="about__img__container">
          <img src={TUL1} className="fade-in about__img" alt="TUL1" />
          <img src={TUL2} className="fade-in about__img" alt="TUL2" />
        </div>
        <p className="fade-in">
          Recently going on my first solo-trip in Europe, I had the opportunity
          to volunteer for the <strong>Ukrainian refugees</strong> at a center
          in <strong>Wawrsaw, Poland</strong>. The experience was truly
          eye-opening and having to spend time with those directly affected by
          the war taught me invaluable lessons. Then after my stay in Poland
          ended, I visited and explored a few of the baltic states, Findland,
          and Denmark. In each of these countries, I made meaningful connections
          and added value to my life in some ways.
        </p>
        <h3 className="fade-in">A Coffee Lover</h3>
        <div className="about__img__container">
          <img src={Gib} className="fade-in about__img2" alt="Gib" />
          <img src={Mocha} className="fade-in about__img2" alt="Mocha" />
          <img src={Latte} className="fade-in about__img2" alt="Latte" />
        </div>
        <p className="fade-in">
          In January 2023, while I was self-learning web development, I picked
          up a part-time job as a coffee barista! Through a very routine and
          technical manner, I grounded the coffee beans, weighed them, set them
          evenly in a filter paper, and carefully poured the hot water to craft
          a perfect cup of coffee. Learning how to make coffee was a great
          learning process in itself, it taught me{' '}
          <strong>
            patience and the importance of acting with intentions!
          </strong>{' '}
          And beyond a pour-over coffee, I found myself obsessed with making
          latte art! Within my short 5 months working at Blue Bottle Coffee, I
          participated in their annual latte art competition and surprisingly
          made it into the semi-finals. The experience was phenomenal and really
          solidified my love for making every coffee a beauitifully crafted
          drink.
        </p>
        <h3 className="fade-in">A Gamer For Life</h3>
        <p className="fade-in">
          I grew up with computers, and as far as I can remember, I&apos;ve
          always had a mouse in the grip of my palm. My passion for computers
          and softwares lies in my early exposure to video games. In some ways,
          video games molded me into a <strong>competitive person</strong>,
          pushing me to learn the mechanics, honing my skills, and striving to
          be the best. Fast forwarding to today, I tend to find myself{' '}
          <strong>gamifying my learning processes</strong>; I create arbitrary
          milestones, feeling as though I&apos;ve leveled up each time I learn a
          new tech skill, making learning so much fun!
        </p>
      </div>
    </motion.div>
  );
}

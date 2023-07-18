import Marquee from 'react-fast-marquee';
import {
  DiPython,
  DiCodepen,
  DiCss3,
  DiGithubBadge,
  DiHtml5,
  DiJavascript,
  DiReact,
  DiTerminal,
} from 'react-icons/di';

import { FaFigma } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function TechStack() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeIn' }}
    >
      <Marquee autoFill pauseOnHover className="ticker">
        <div>
          <DiPython />
          <p>Python</p>
        </div>
        <div>
          <DiCodepen />
          <p>Codepen</p>
        </div>
        <div>
          <DiCss3 />
          <p>CSS</p>
        </div>
        <div>
          <DiGithubBadge />
          <p>Github</p>
        </div>
        <div>
          <DiHtml5 />
          <p>HTML</p>
        </div>
        <div>
          <DiJavascript />
          <p>JavaScript</p>
        </div>
        <div>
          <DiReact />
          <p>React.JS</p>
        </div>
        <div>
          <DiTerminal />
          <p>CLI</p>
        </div>
        <div>
          <FaFigma />
          <p>Figma</p>
        </div>
      </Marquee>
    </motion.div>
  );
}

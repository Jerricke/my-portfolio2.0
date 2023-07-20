import { motion } from 'framer-motion';

export default function Portfolio() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeIn' }}
      exit={{ opacity: 0 }}
    >
      <h1>My Portfolio Website</h1>
      <a href="https://github.com/Jerricke/my-portfolio2.0">
        https://github.com/Jerricke/my-portfolio2.0
      </a>
      <div className="spacer" />
      <h3>About the project</h3>
      <p>
        This project involves my first time ever building a portfolio app. I set
        out to create a portfolio app that allows me to test my skills and learn
        new techniques while also preserving quality and coherency.
      </p>
      <h3>Challenges</h3>
      <p>
        While building the portfolio app, I struggled to bring the designs to
        live and the flow of the app was inconsistent and the code files were
        unorganized, which can be attributed to the lack of pre-planning before
        the coding process. In addition, another great challenge was researching
        and learning new methods to enhance the user experience, and then
        implementing those new methods onto the web app. I found myself diving
        into more and more new content while working on the project, thus
        resulting in very slow progress.
      </p>
      <h3>Solution</h3>
      <p>
        I decided to scrap my original attempt at the portfolio application, and
        using Figma, I was able to properly sketch out my plan on a drawing
        board. With a clearer objective and vision, I broke down the website to
        mini components and implemented them one at a time. I played around with
        different node packages and added more animations and functionalities
        way quicker and more efficiently than the first iteration of my
        portfolio. Although I had to start from scratch and build another
        portfolio app, I was able to make use of what I had learned from that
        run, and build on it.
      </p>
      <h3>What I learned</h3>
      <p>
        Through building my personal portfolio website, I picked up a wide range
        of skills, such as: React Routing, Animations, Design, Project-planning,
        Media Queries, Utilizing NPM Packages to send email forms, setup RESTful
        APIs, setup proxy servers, deploying a website with a custom domain, and
        more. I had a lot of fun bringing my vision to live, and although this
        website isn&apos;t perfect, I was able to gain familiarity with lots of
        technique that will help me build better applications in the future
      </p>
    </motion.div>
  );
}

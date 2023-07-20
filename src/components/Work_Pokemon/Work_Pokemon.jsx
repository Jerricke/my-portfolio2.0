import { motion } from 'framer-motion';

export default function PokemonApp() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeIn' }}
      exit={{ opacity: 0 }}
    >
      <h1>Browser Pokemon App!</h1>
      <a href="https://github.com/Jerricke/phase-1-project">
        https://github.com/Jerricke/phase-1-project
      </a>
      <div className="imageContainer">
        <img src="/Start.png" alt="start" />
        <img src="/Play.png" alt="play" />
        <img src="/Bag.png" alt="bag" />
        <img src="/Combat.png" alt="combat" />
      </div>
      <div className="spacer" />
      <h3>About the project</h3>
      <p>
        During the first phase of the Flatiron Software Engineering bootcamp, we
        were challenged to build a simple website that utilizes one single HTML
        page with CSS and Javascript. I decided to build a Pokemon app that is
        able to run on the browser. There were many different features added
        into the web application and I am super proud of how my first ever
        project turned out.
      </p>
      <h3>Challenges</h3>
      <p>
        Initially, I planned on creating a coordinate system with a moveable
        character on it. The user would be able to use arrow keys to navigate
        the play-area and encoutner Pokemons. The main challenge was setting up
        a proper combat system during the encounters, where users would be able
        to use sepcific skills of their pokemon. Then after, the enemy pokemon
        would attack the player&apos;s current active pokemon. The greatest
        challenge was to make the data persist through each encounters.
      </p>
      <h3>Solution</h3>
      <p>
        By using a variable of &quot;isCombat&quot;, I was able to setup a turn
        base system where after each player action, the isCombat boolean would
        be flipped and the enemy pokemon would be prompted to attack. To enable
        persisting data, I created a reusable function that patches the data to
        the db.json server, and the function would be called every time a major
        event occurs, for example, when a pokemon faints, when items are used,
        or when combat is finished.
      </p>
      <h3>What I learned</h3>
      <p>
        With this being my first ever coding project, I learned a lot of basic
        skills. A few notable ones are CSS grids, creating reusable functions,
        building complex state-like functions in basic javascript, and gaining
        familiarity with setting up mock databases with a json server. I
        thoroughly enjoyed building this webapp, although it is relatively
        simple in terms of functionality, I was able to learn a lot about the
        process of learning while coding, as well as debugging and fixing code
        errors.
      </p>
    </motion.div>
  );
}

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
      <div className="spacer" />
      <h3>About the project</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero odio
        veniam esse quas ullam iusto deserunt aspernatur est facere ea! Amet
        impedit aliquid repudiandae tempore illum cupiditate, exercitationem
        tenetur, nisi maiores dignissimos quae. Illum reprehenderit, sit
        perferendis ab sapiente culpa eaque ipsam eligendi accusantium tempore
        voluptate, expedita nulla repellat eius.
      </p>
      <h3>Challenges</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat maxime
        architecto quibusdam id, velit odit ullam perspiciatis at? Ab molestiae,
        distinctio quibusdam pariatur eius ullam consequatur deserunt et sunt
        animi nihil odit sit illum nobis nam, exercitationem quo, unde quaerat
        eveniet molestias sint. Esse quia sit nisi inventore modi nulla!
      </p>
      <h3>Solution</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia sapiente,
        corporis, velit porro provident eius corrupti aperiam facilis autem quos
        exercitationem minima sint ea ipsum quae libero. Magnam labore ea optio
        quisquam quidem. Repellendus, reprehenderit nobis possimus libero
        magnam, optio nostrum odio maxime labore laboriosam beatae. Illo
        corporis dolores, modi dicta hic dignissimos sapiente illum rerum quia,
        vitae voluptatum qui eum aspernatur porro officiis laudantium voluptas
        laboriosam atque omnis. Soluta nulla, reprehenderit vel quia cupiditate
        velit earum? Alias dolores omnis quisquam laboriosam cum esse quod
        voluptatum. Velit nulla dolore voluptate, quo, veniam illo consequuntur
        quas odit perferendis eveniet consectetur quaerat?
      </p>
      <h3>What I learned</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum magni
        molestias vitae dolore, ullam esse asperiores dolor, molestiae
        consequatur explicabo iusto iure mollitia quisquam, voluptatibus neque
        consequuntur reprehenderit atque beatae? Magnam possimus sequi,
        dignissimos voluptatem perspiciatis unde tempore provident molestiae rem
        earum autem est repellendus, expedita excepturi, sint repudiandae quas.
      </p>
    </motion.div>
  );
}

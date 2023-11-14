import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function Triply() {
  useEffect(() => {
    const element = document.getElementById('top');
    element.scrollIntoView({ behavior: 'smooth' });
  }, []);
  return (
    <>
      <div id="top" className="spacer" style={{ paddingTop: '2.5rem' }} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeIn' }}
        exit={{ opacity: 0 }}
      >
        <h1>Triply</h1>
        <a
          href="https://github.com/cmphill/python-p4-project-vite"
          style={{ marginRight: '12px' }}
        >
          Source Code
        </a>
        <a href="https://youtu.be/hW1GB-I-PP0">Demo Video</a>
        <div className="imageContainer">
          <img src="/triply-1.png" alt="triply-1" />
          <img src="/triply-2.png" alt="triply-2" />
          <img src="/triply-3.png" alt="triply-3" />
          <img src="/triply-4.png" alt="triply-4" />
        </div>
        <div className="spacer" />
        <h3>About the project/Motivation</h3>
        <p>
          Triply is an application that is designed for users to signup/in and
          interact with others! It is a social-media-esque application that
          incentivizes users to post their trips ( trips referring to walks,
          runs, bikes, scooters, etc.) and share their experiences with the
          community! The goal is to provide users an easy way to find cool
          adventures in their city as well as encourage people to partake in
          group activities. The motivation stems from Cooper and my love for
          going on rides around the city with our scooter and electric
          unicycles.
        </p>
        <h3>Challenges</h3>
        <p>
          The biggest challenge of the project was navigating and keeping track
          of changes through github. In addition to that, implementing front and
          backend routings for the first time was trick and we ran into many
          bugs and issues. Implmenting Formik forms to add another layer of
          validation from the frontend was challenging, however, we felt it was
          necessary to provide valid data forms to the backend.
        </p>
        <h3>Solution</h3>
        <p>
          There were no particular solutions to the problems and challenges
          mentioned, however, we did spend a lot of time debugging and
          incorporating AI tools such as Phind, ChatGPT, and Bard to assist us
          on the debugging processes. Taking advantage of AI search engines to
          learn and code was a huge performance improvement as we were exposed
          to different skills and technologies that were recommended by the AI
          tool.
        </p>
        <h3>Features</h3>
        <p>
          The main features of this project is to share your trips and interact
          with others in the global community board! The main routes and
          functionalities of the API are listed below.
        </p>
        <h2 style={{ marginBottom: 6 }}>community-posts</h2>
        <p>
          Create: There is a text box, validated with formik formSchema that
          requires text, and does not allow the input to exceed 500 characters.
        </p>
        <p>
          Read: The comments will appear in the list on the community posts
          page, and the comment cards render with the username and a time stamp
          provided by the backend.
        </p>
        <p>
          Update: Updating validates that the session user id matches the user
          id of comment poster before allowing updates to be made. There is
          ternary logic that hides the update button in addition to validations
          in the patch method itself.
        </p>
        <p>
          Delete: Deleting likewise validates that the session user id matches
          the user id of comment poster. The delete button only appears when
          this condition is true.
        </p>
        <h2 style={{ marginBottom: 6 }}>Authentication</h2>
        <p>
          Create: he username is validated and the password is checked against
          the password hash. Once the login request has posted, the session will
          be set to the current user. Ternary logic changes the login button to
          a logout button after a successful login.
        </p>
        <p>
          Read: The /personal page allows the user to view their profile
          associated with their session. This includes the bio, username,
          profile icon, miles traveled, and trips.
        </p>
        <p>
          Delete: The logout button deletes the user id from the session and
          thus logs out. On the backend there is an open access list that allows
          visitors to visit the public pages without having to log in, but will
          prompt them to log in to view the personal page.
        </p>
        <h3>What I learned</h3>
        <p>
          While developing Triply, we learned the importance of setting up
          effective wireframes before starting the development process. Although
          it is only a two people project, I was able to also experience how
          working with another engineer affects my flow of development. I was
          able to learn from Cooper the different approaches to solving problems
          as well as to be more resourceful when working with different search
          engines.
        </p>
        <h3>Credit (collaborators)</h3>
        <a href="https://github.com/cmphill">Cooper Phillips</a>
      </motion.div>
    </>
  );
}

import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function PicPoint() {
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
        <h1>PicPoint</h1>
        <a
          href="https://github.com/Jerricke/PicPoint"
          style={{ marginRight: '12px' }}
        >
          Source Code
        </a>
        <a href="https://youtu.be/pn4-_w-nk4U">Demo Video</a>
        <div className="imageContainer" style={{ gap: '1rem' }}>
          <img
            src="/image-1.png"
            alt="image1"
            style={{ height: '450px', width: 'auto', objectFit: 'contain' }}
          />
          <img
            src="/image-2.png"
            alt="image2"
            style={{ height: '450px', width: 'auto', objectFit: 'contain' }}
          />
          <img
            src="/image-3.png"
            alt="image3"
            style={{ height: '450px', width: 'auto', objectFit: 'contain' }}
          />
          <img
            src="/image-4.png"
            alt="image4"
            style={{ height: '450px', width: 'auto', objectFit: 'contain' }}
          />
          <img
            src="/image-5.png"
            alt="image5"
            style={{ height: '450px', width: 'auto', objectFit: 'contain' }}
          />
          <img
            src="/image-6.png"
            alt="image6"
            style={{ height: '450px', width: 'auto', objectFit: 'contain' }}
          />
          <img
            src="/image-7.png"
            alt="image7"
            style={{ height: '450px', width: 'auto', objectFit: 'contain' }}
          />
        </div>
        <div className="spacer" />
        <h3>About the project/Motivation</h3>
        <p>
          The original motivation for this project was to build a simple mobile
          application that allows users to record and share their personal trips
          (trips via walking, biking, cycling, scooters, etc.). Expanding on the
          idea from Triply, the goal was to switch the medium from web to mobile
          so that I could incorporate geocoding and live navigation. However,
          with the time constraiints of just 3 weeks, I encountered a
          significant challenge 2 weeks in that ultimately led me to pivoting
          and creating PicPoint instead. PicPoint is an app that is built on the
          knowledge and skills I learned from developing the Triply mobile
          application. PicPoint inherits the core concepts of sharing and
          interacting with other users, allowing users to connect and share
          information.
        </p>
        <h3>Challenges</h3>
        <p>
          The aforementioned challenge while developing Triply was the
          difficulty of implenting live navigation and route generation. After
          days of researching and learning about the concept of live navigation,
          I decided that it would take too much time out of my already tight 3
          weeks deadline to develop the application.
        </p>
        <h3>Solution</h3>
        <p>
          The new plan was to create PicPoint, a mobile application that allows
          users to share the photos they have taken and uploaded it to the
          server. The inspiration for this app is the same as Triply, which is
          to share and connect with others through experiences. Now, with only 1
          week left to meet the deadline, the road map for the project is broken
          down into a few parts.
        </p>
        <p>
          Day 1: Implement main routes/navigations as well as the user
          authentication methods.
        </p>
        <p>
          Day 2: Create user profile pages and setup backend storages and
          collections.
        </p>
        <p>
          Day 3-4: Implement global feed structure, main GET and POST fetches,
          and image uploading.
        </p>
        <p>Day 5: Implement map features and geocoding data for the posts. </p>
        <p>Day 6: Include full CRUD for main components of the application.</p>
        <h3>Tech Stack</h3>
        <p>
          The main tools I&apos;ve used for the application are: Javascript,
          React Native, Expo, and Firebase, React native packages(MapView,
          ReactNativePaper, ImagePicker), Figma (for planning), Google Places
          API
        </p>
        <h3>Features</h3>
        <p>
          The main features of this project is to upload your photos to the
          server and share them in posts! You can get started simply by creating
          an account and start posting your photos!
        </p>
        <h4>User</h4>
        <p>
          The user will be able to create their own account by signing up with
          an email address, have a personal username, and profile picture.
        </p>
        <h4>Post</h4>
        <p>
          In the home page, there will be a feed containing all the posts made
          by all the users. If the post belongs to you, tapping on it will bring
          up a modal to edit the title/content or delete the post. In the camera
          tab, you can create a new post by filling out the forms and selecting
          an image from your photo gallery. Then you will be prompted to type in
          an address or manually move the pin to the location you want!
        </p>
        <h4>Map</h4>
        <p>
          The map feature allows you to view all the posts around the globe!
          simply tap on any one of the pins to see the photo that belongs to
          that location!
        </p>
        <h3>What I learned</h3>
        <p>
          Through the process of planning and developing the PicPoint mobile
          applciation I learned the importance of understanding the time frame
          and when it is time to pivot. Setting high goals is great but
          developing and presenting a project that is more completed by the
          deadline is essential. In addition, I also gained lots of skills and
          experiences with building mobile application, geocoding, as well as
          designing and setting up a SQL-less database. Learning firebase was a
          fun experience and I am excited to see what I can do with
          non-relational databases.
        </p>
      </motion.div>
    </>
  );
}

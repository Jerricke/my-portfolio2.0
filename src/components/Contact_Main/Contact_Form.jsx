import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const sent = () => {
    toast.success('Email Sent!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };
  const form = useRef();
  const sendEmail = () => {
    emailjs
      .sendForm(
        'service_hnk0zxt',
        'template_g5wxq3d',
        form.current,
        'Z93CfzdbQ7w2F-sY2'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeIn' }}
    >
      <form
        ref={form}
        className="contact__form"
        onSubmit={(e) => {
          e.preventDefault();

          if (
            document.getElementById('fName').value &&
            document.getElementById('fEmail').value &&
            document.getElementById('fMessage').value
          ) {
            sendEmail();
            e.target.reset();
            document.querySelector('.contact__form').classList.remove('error');
            sent();
          } else {
            document.querySelector('.contact__form').classList.add('error');
          }
        }}
      >
        <h1>Get In Touch</h1>
        <h3>Name</h3>
        <input id="fName" type="text" name="name" />
        <h3>Email</h3>
        <input id="fEmail" type="email" name="email" />
        <br />
        <h3>Message</h3>
        <textarea
          id="fMessage"
          type="text"
          rows="5"
          cols="30"
          className="textarea"
          name="message"
        />
        <div>
          <button type="submit">Send</button>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </div>
      </form>
    </motion.div>
  );
}

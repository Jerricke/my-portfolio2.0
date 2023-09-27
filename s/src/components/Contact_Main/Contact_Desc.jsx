import { motion } from 'framer-motion';

export default function ContactDesc() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeIn' }}
      className="contact__description"
    >
      <h1>Let&apos;s talk!</h1>
      <p>
        I am always actively looking to make new connections and I am{' '}
        <strong>currently open to new opportunities!</strong> If you have any
        questions feel free to send me an email and I would love to hear from
        you!
      </p>
    </motion.div>
  );
}

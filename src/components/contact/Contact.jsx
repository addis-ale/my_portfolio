/* eslint-disable no-unused-vars */
import "./contact.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import ContactSvg from "./ContactSvg";

const listVariant = {
  initial: { x: 100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, staggerChildren: 0.2 },
  },
};

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const ref = useRef();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        { publicKey: import.meta.env.VITE_PUBLIC_KEY }
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
        },
        (err) => {
          console.error(err);
          setError(true);
          setSuccess(false);
        }
      );
  };

  const isInView = useInView(ref, { margin: "-200px" });

  return (
    <div className="contact" ref={ref}>
      <div className="cSection">
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          variants={listVariant}
          animate={isInView ? "animate" : "initial"}
        >
          <motion.h1 variants={listVariant} className="cTitle">
            Let's keep in touch
          </motion.h1>

          <motion.div variants={listVariant} className="formItem">
            <label>Name</label>
            <input type="text" name="user_name" placeholder="John Doe" />
          </motion.div>

          <motion.div variants={listVariant} className="formItem">
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="john@gmail.com"
            />
          </motion.div>

          <motion.div variants={listVariant} className="formItem">
            <label>Message</label>
            <textarea
              rows={10}
              name="message"
              placeholder="Write your message..."
            />
          </motion.div>

          <motion.button
            type="submit"
            variants={listVariant}
            className="formButton"
          >
            Send
          </motion.button>

          {success && (
            <span className="success">Your message has been sent!</span>
          )}
          {error && <span className="error">Something went wrong!</span>}
        </motion.form>
      </div>

      <div className="cSection">
        <ContactSvg />
      </div>
    </div>
  );
};

export default Contact;

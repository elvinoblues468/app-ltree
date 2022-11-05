import React, { useState } from "react";
import Footer from './components/Footer';
import './styles/Contact.css';

export default function Contact() {
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { message } = e.target.elements;
    if (message.value.length < 1) {
      setShowError(true);
      return;
    }
    setShowError(false);
  };
  const name = "Ngozi Elvis Ujedibie";
  return (
    <>
      <main className="main">
        <div className="header">
          <h1>Contact me</h1>
          <p>Hi there, contact me to ask me about anything you have in mind.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="name-grid">
            <label htmlFor="first_name">
              First name
              <input id="first_name" type="text" placeholder="Enter your first name" required />
            </label>

            <label htmlFor="last_name">
              Last name
              <input id="last_name" type="text" placeholder="Enter your last name" required />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              Email
              <input id="email" type="email" placeholder="yourname@email.com" required />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              Message
              <textarea className={`${showError ? '.show-error' : ''}`} id="message" type="text" placeholder="Send me a message and I'll reply you as soon as possible..." />
            </label>
            {showError && <p className="error-text">Please enter a message</p>}
          </div>
          <div class="checkbox-div">
            <input id="default-checkbox" type="checkbox" value="" className="checkbox"/>
            <label htmlFor="default-checkbox">You agree to providing your data to {name} who may contact you.</label>
          </div>
          <div>
            <button type="submit" id="btn__submit">
              Send Message
            </button>
          </div>
        </form>
        <Footer />
      </main>
    </>
  );
}
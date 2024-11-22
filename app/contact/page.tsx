import React from 'react';

const Contact = () => {
  return (
    <div>
      <section className="contact-from">
        <h2 className='fade-in'>Contact-Us</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <br />
          <br />
          <input type="email" placeholder="Email Address" required />
          <br />
          <br />
          <input type="number" placeholder="Phone Number" required />
          <br />
          <br />
          <textarea placeholder="Your Message" rows={5} required></textarea>
          <br />
          <br />
          <br />
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;

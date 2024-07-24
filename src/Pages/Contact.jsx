import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import '../Pages/CSS/Contact.css'; // Import the CSS file

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const form = formRef.current;

    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    emailjs.send(
      'service_xhgrx9f', // Replace with your EmailJS service ID
      'template_uuf6w7b', // Replace with your EmailJS template ID
      formData,
      'DgtJoQrR9ySgSOg3N' // Replace with your EmailJS user ID
    )
    
    .then((result) => {
      console.log(result.text);
      alert('Message sent successfully!');
      form.reset();
    }, (error) => {
      console.log(error.text);
      alert('Failed to send message, please try again.');
    });
  };

  return (
    <div className="contact-container">
      <div className="google-maps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.090984412839!2d-122.42177808467963!3d37.77492927975954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808dfd6ed8b9%3A0x2e0c67ecff0a4b0a!2s123%20Education%20Lane%2C%20Cityville%2C%20State%2C%20ZIP%20Code!5e0!3m2!1sen!2sus!4v1599185286184!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Springdale Public School Location"
        ></iframe>
      </div>
      <div className='address'>
      <div className="contact-details">
        <p>Address: Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Email: <a href="mailto:info@springdale.edu">info@springdale.edu</a></p>
      </div>
      <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            required
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            required
          />
        </label>
        <button type="submit">Send</button>
      </form>
      </div>
      
    </div>
  );
};

export default Contact;





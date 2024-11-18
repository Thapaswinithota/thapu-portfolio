import React from 'react';
import call_icon from '../../assets/call_icon.svg';
import github_icon from '../../assets/github.svg'; // Add the GitHub icon to your assets
import linkedin_icon from '../../assets/linkedin.svg'; // Add the LinkedIn icon to your assets
import location_icon from '../../assets/location_icon.svg';
import mail_icon from '../../assets/mail_icon.svg';
import theme_pattern from '../../assets/theme_pattern.svg';
import './Contact.css';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5de6b630-86c0-41a0-a6bb-9ecdb0cc9bfa");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>Lets Connect I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /> <p>thotavenkatathapaswini@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /> <p>+1 689-808-5792</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /> <p>FL, USA</p>
            </div>
          </div>
          {/* Social Media Links */}
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/venkata-thapaswini-thota-877184203?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BaEs17miYQVucbV%2Bqc3LGHA%3D%3D" target="_blank" rel="noopener noreferrer">
              <img src={linkedin_icon} alt="LinkedIn" />
            </a>
            <a href="https://github.com/Thapaswinithota" target="_blank" rel="noopener noreferrer">
              <img src={github_icon} alt="GitHub" />
            </a>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' />
          <label htmlFor="">Your Email</label>
          <input type="text" placeholder='Enter your email' name='email' />
          <label htmlFor="">Write your message here</label>
          <textarea name="message" id="" rows="8" placeholder='Enter your message'></textarea>
          <button type='submit' className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

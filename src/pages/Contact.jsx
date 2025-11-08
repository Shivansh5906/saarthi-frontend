import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-wrapper">
      <h2>Contact Us</h2>
      <p className="contact-intro">We’re here to help. Reach out to us any time.</p>

      <div className="contact-card">
        <h3>📍 Head Office</h3>
        <p>Saarthi Bank, Gomti Nagar, Lucknow, India</p>

        <h3>📞 Phone</h3>
        <p>+91 7983614993</p>

        <h3>📧 Email</h3>
        <p>support@saarthibank.com</p>

        <h3>⏰ Working Hours</h3>
        <p>Mon - Sat : 10:00 AM - 6:00 PM</p>
      </div>
    </div>
  );
}

import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      alert("Please fill all fields");
      return;
    }

    alert("Message Sent Successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>
          Have questions about our cars?
          Get in touch with our team.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Enter Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Enter Your Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit">
            Send Message
          </button>
        </form>
      </div>

      <div className="contact-info">
        <div className="info-box">
          <h3>📍 Address</h3>
          <p>DriveZone Car Showroom, Calicut, Kerala</p>
        </div>

        <div className="info-box">
          <h3>📞 Phone</h3>
          <p>+91 98765 43210</p>
        </div>

        <div className="info-box">
          <h3>✉ Email</h3>
          <p>info@drivezone.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
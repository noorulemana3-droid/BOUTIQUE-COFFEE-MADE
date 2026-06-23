import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setNameError("");
    setEmailError("");
    setSubjectError("");
    setMessageError("");
    setSuccess("");

    let isValid = true;

    if (!form.name) {
      setNameError("Name is required");
      isValid = false;
    }

    if (!form.email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!form.email.includes("@")) {
      setEmailError("Enter valid email");
      isValid = false;
    }

    if (!form.subject) {
      setSubjectError("Subject is required");
      isValid = false;
    }

    if (!form.message) {
      setMessageError("Message is required");
      isValid = false;
    } else if (form.message.length < 10) {
      setMessageError("Message must be at least 10 characters");
      isValid = false;
    }

    if (isValid) {
      setSuccess("✅ Message sent successfully!");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <div className="content contact-page">

      <h1>📩 Contact Us</h1>

      <form className="contact-form" onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
        />
        {nameError && <p className="error">{nameError}</p>}

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
        />
        {emailError && <p className="error">{emailError}</p>}

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
        />
        {subjectError && <p className="error">{subjectError}</p>}

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
        ></textarea>
        {messageError && <p className="error">{messageError}</p>}

        <button className="primary-btn" type="submit">
          Send Message
        </button>

        {success && <p className="success">{success}</p>}
      </form>

      {/* MAP */}
      <div className="map-section">
        <iframe
          title="Our Location"
          width="100%"
          height="250"
          loading="lazy"
          src="https://www.google.com/maps?q=33.6844,73.0479&z=15&output=embed"
        />
      </div>

      {/* SOCIAL LINKS */}
      <div className="social-section">
        <h2>🌐 Follow Us</h2>

        <div className="social-links">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </div>
      </div>

    </div>
  );
}

export default Contact;
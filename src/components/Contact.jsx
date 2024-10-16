import React, { useState } from "react";
import "../css/Contact.css";
import Footer from "./Footer";
import { RiArrowGoBackLine } from "react-icons/ri";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => setFormSubmitted(true))
      .catch((error) => alert(error));
  };

  return (
    <section className="contact--section container" id="contact">
      <div className="contact-container container">
        <h2 className="sectiontitle">Contact</h2>{" "}
        <div>
          {formSubmitted ? (
            <div className="confirmation-message">
              <p>Your message has been submitted successfully!</p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="button"
              >
                <RiArrowGoBackLine /> Back to the form
              </button>
            </div>
          ) : (
            <div className="form-container">
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <p>
                  <label htmlFor="name"></label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    autoComplete="name"
                    placeholder="Name"
                  />
                </p>
                <p>
                  <label htmlFor="email"></label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    autoComplete="email"
                    placeholder="Email"
                  />
                </p>
                <p>
                  <label htmlFor="company"></label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    required
                    autoComplete="organization"
                    placeholder="Company"
                  />
                </p>
                <p>
                  <label htmlFor="message"></label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </p>

                <button type="submit" className="button">
                  Submit
                </button>
              </form>
            </div>
          )}
          <div className="contactimg">
            <img src="/contactimg.png" alt="contact image" />
          </div>
        </div>
      </div>
    </section>
  );
}

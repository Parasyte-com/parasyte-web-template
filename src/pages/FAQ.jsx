// src/pages/FAQ.jsx
import React from "react";
import "./FAQ.css";

const faqs = [
  {
    q: "Do I need a phone number?",
    a: "Only for initial PIN registration. Your chats remain anonymous."
  },
  {
    q: "Is it end-to-end encrypted?",
    a: "Yes. Messages are encrypted on-device and decrypted only by the recipient."
  },
  {
    q: "Can I use Parasyte offline?",
    a: "You can compose messages offline, but they’ll send when back online."
  },
];

const FAQ = () => (
  <section className="faq">
    <h2>Frequently Asked Questions</h2>
    {faqs.map((item, idx) => (
      <div className="faq-item" key={idx}>
        <h4>{item.q}</h4>
        <p>{item.a}</p>
      </div>
    ))}
  </section>
);

export default FAQ;

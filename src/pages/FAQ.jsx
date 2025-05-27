// src/pages/FAQ.jsx
import React from "react";
import "./FAQ.css";

const faqs = [
  {
    q: "Do I need a phone number?",
    a: "Yes — only during secure PIN registration. Your identity stays private after."
  },
  {
    q: "Is it end-to-end encrypted?",
    a: "Yes — all data is encrypted on-device, and only the recipient can decrypt it."
  },
  {
    q: "Can I use Parasyte offline?",
    a: "Yes — compose messages or record voicemails offline. They’ll send once online"
  },
  {
    q: "Is facial recognition required?",
    a: "For chat and call access, yes — as part of our biometric privacy layer."
  },
  {
    q: "Can I make calls or send voice messages?",
    a: "Absolutely. Voice calls and one-time-play voicemails are fully supported."
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

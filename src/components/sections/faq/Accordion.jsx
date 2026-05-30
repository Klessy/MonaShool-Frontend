
"use client";

import { useState, useRef } from "react";
import "./accordion.css"
import { faqs } from "@/data/data";
import Subtitle from "@/components/utils/Subtitle";
import WhatsAppButton from "@/components/utils/WhatsAppButton";

const faqData = [
  {
    question: "What services do you offer?",
    answer:
      "We offer website development, online training, branding, and digital solutions for businesses.",
  },
  {
    question: "Do you teach kids programming?",
    answer:
      "Yes. We teach Scratch, PowerPoint, Excel, App Inventor, and more in a fun practical way.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can contact us via email, WhatsApp, or through the contact form on our website.",
  },
];

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq__section">
      <div className="container faq__container">
        <div className="faq__title text-center">
          <Subtitle cName={"about__subtitle"} text={"FAQs"}/>
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className="faq__wrapper">
          {faqs.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isActive={activeIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
        <WhatsAppButton />
      </div>
    </section>
  );
}

function FAQItem({ item, isActive, onClick }) {
  const contentRef = useRef(null);

  return (
    <div className={`faq-item ${isActive ? "active" : ""}`}>
      <button className="faq-question" onClick={onClick}>
        {item.question}

        <span className="icon">
          {isActive ? "−" : "+"}
        </span>
      </button>

      <div
        ref={contentRef}
        className="faq-answer"
        style={{
          maxHeight: isActive
            ? `${contentRef.current?.scrollHeight}px`
            : "0px",
        }}
      >
        <p>{item.answer}</p>
      </div>
    </div>
  );
}











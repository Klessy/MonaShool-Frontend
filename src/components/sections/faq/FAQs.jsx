"use client";

import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { faqs } from "@/data/data";
// import FAQIMG from "../../assets/images/question-mark-clipart-3.png";
import FAQ from "./FAQ";

import "./faq.css";

const FAQs = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [activeQ, setActiveQ] = useState(0);

  const handleClick = () => {
    setShowAnswer((prev) => !prev);
    // setActiveQ(index);
  };

  return (
    <section className="faq__section">
      <div className="container faq__container">
        <div className="faq__title text-center">
          <span className="pre-title">FAQ</span>
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="faq__wrapper">
          <div className="faqs__content" data-aos="fade-in">
            {faqs.map((faq) => (
              <FAQ key={faq.id} faq={faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;

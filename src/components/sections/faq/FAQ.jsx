import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const FAQ = ({ faq, className }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [active, setActive] = useState(false);

  //   const handleClick = (e) => {
  //     setShowAnswer((prev) => !prev);
  //     const currTarget = e.currentTarget;
  //     // disable all
  //     document
  //       .querySelectorAll(".faq__card-question")
  //       .forEach((btn) => btn.classList.add("active"));
  //     currTarget.classList.remove("active");
  //   };

  //   var tSomeStyleClasses = myTbl.getElementsByClassName("someStyle");

  //   while (tSomeStyleClasses.length) {
  //     tSomeStyleClasses[0].classList.remove("someStyle");
  //   }

  //   let index = 0;
  const handleClick = () => {
    setShowAnswer((prev) => !prev);
    setActive(!active);
  };

  //   className="faq__question-con faq__card-question"
  // className={`faq__question-con ${
  //   activeQ === !index ? "active" : "faq__card-question"
  // }`}

  return (
    <div>
      <div
        onClick={handleClick}
        className={`faq__question-con ${
          active ? " faq-active" : "faq__card-question"
        }`}
      >
        <h5 className="faq__question">{faq.question}</h5>
        <button className="faq__icon">
          {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {showAnswer && <p className="faq__answer">{faq.answer}</p>}
    </div>
  );
};

export default FAQ;

import Link  from "next/link";

import "../styles/button.css"
const Button = ({ text, cName, icon, link }) => {
  return (
    <Link
      className={!cName ? "monaButton" : cName}
      href={`/${link}`}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      {text}
      {icon}
    </Link>
  );
};

export default Button;

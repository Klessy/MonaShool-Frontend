

import "@/components/styles/subtitle.css";

const Subtitle = ({cName, text}) => {
  return (
    <span className={!cName ? "pre-title" : cName}>{text}</span>
  )
}

export default Subtitle
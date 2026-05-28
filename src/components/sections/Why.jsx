import { FcBusinessman } from "react-icons/fc";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { LuNotebookPen } from "react-icons/lu";
import { FaEnvira } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi2";
import { FaHandsHelping } from "react-icons/fa";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { IoColorPalette } from "react-icons/io5";
import { MdFoundation } from "react-icons/md";
import { FiActivity } from "react-icons/fi";
import { GiTalk } from "react-icons/gi";

import Image from "next/image";
import WhyBg from "@/assets/bg/shape.png";
import WhyBg_2 from "@/assets/bg/shape-7.png";


import "../styles/why.css";

const Why = () => {
  return (
    <section className="why__section">
      <div className="why__container container">
        <div className="text-center">
          <span className="pre-title">Why us</span>
          <h2 className="heading__subtitle">Why Parents Choose Our School</h2>
        </div>
        <p>We are committed to helping every child succeed academically, socially, and emotionally in a safe and caring environment.</p>
         <div className="why-bg">
          <Image src={WhyBg} alt="" />
        </div>
        <div className="why-bg_2">
          <Image src={WhyBg_2} alt="" />
        </div>
        <ul className="why__cards">
          <li className="why__card">
            <div className="why__desc-con">
              <div className="why__icon">
                <span>
                  <i style={{fontSize: "30px"}}><LiaChalkboardTeacherSolid /></i>
                </span>
              </div>
              <h3 className="why__title">Qualified & Caring Teachers</h3>
            </div>
            <p className="why__desc">Our teachers are experienced, patient, and passionate about helping children grow with confidence.</p>
          </li>
          <li className="why__card">
            <div className="why__desc-con">
              <div className="why__icon">
                <span>
                  <i style={{fontSize: "30px"}}><LuNotebookPen /></i>
                </span>
              </div>
              <h3 className="why__title">Montessori Learning Approach</h3>
            </div>
            <p className="why__desc">We encourage children to explore, discover, and learn through practical activities.</p>
          </li>
          <li className="why__card">
            <div className="why__desc-con">
              <div className="why__icon">
                <span>
                  <i style={{fontSize: "30px"}}><FaEnvira /></i>
                </span>
              </div>
              <h3 className="why__title">Safe & Friendly Environment</h3>
            </div>
            <p className="why__desc">We provide a secure and welcoming atmosphere where children feel comfortable and valued.</p>
          </li>
          <li className="why__card">
            <div className="why__desc-con">
              <div className="why__icon">
                <span>
                  <i style={{fontSize: "30px"}}><MdFoundation /></i>
                </span>
              </div>
              <h3 className="why__title">Strong Academic Foundation</h3>
            </div>
            <p className="why__desc">We help pupils build excellent reading, writing, communication, and problem-solving skills.</p>
          </li>
          <li className="why__card">
            <div className="why__desc-con">
              <div className="why__icon">
                <span>
                  <i style={{fontSize: "30px"}}><FiActivity /></i>
                </span>
              </div>
              <h3 className="why__title">Creative & Extracurricular Activities</h3>
            </div>
            <p className="why__desc">Children enjoy sports, music, arts, cultural events, and educational trips.</p>
          </li>
          <li className="why__card">
            <div className="why__desc-con">
              <div className="why__icon">
                <span>
                  <i style={{fontSize: "30px"}}><GiTalk /></i>
                </span>
              </div>
              <h3 className="why__title">Parent Communication</h3>
            </div>
            <p className="why__desc">We believe parents and teachers should work together for every child’s success.</p>
          </li>
          
        </ul>
      </div>
    </section>
  )
}

export default Why
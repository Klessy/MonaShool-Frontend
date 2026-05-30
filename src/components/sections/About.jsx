import { FaBullseye } from "react-icons/fa6";
import { IoRocketSharp } from "react-icons/io5";
import { FaFlag } from "react-icons/fa6";
import { FaFlagCheckered } from "react-icons/fa6";
import { MdTrendingUp } from "react-icons/md";
import { MdAssignmentTurnedIn } from "react-icons/md";
import { FaGem } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

import "@/components/styles/about.css";
import "@/components/styles/button.css";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "@/assets/images/monaschool-sapele.jpg";
import Subtitle from "../utils/Subtitle";

const About = () => {
  return (
    <section className="about__section">
        <div className="about__container container">
            <div className="about__content">
                <div className="">
                    <Subtitle cName={"about__subtitle"} text={"About us"}/>
                    <h2 className="heading__subtitle">About Our Montessori Primary School</h2>
                </div>
                <p>
                    At Mona School, we believe every child deserves a joyful and supportive learning experience. <br />
                    Our Montessori-inspired approach encourages curiosity, creativity, confidence, and independence. <br />
                    Our teachers are patient, trained, and passionate about helping each child grow academically, socially, and emotionally.
                </p>
                <ul>
                    <li className="value__con">
                        <div className="circle-bg"><i><FaFlagCheckered /></i></div>
                        <div className="value">
                            <h3>Vision</h3>
                            <p>To achieve peace through educating children to be examples to the general population, demonstrating a dfferent approach to education as well as educate parents and the general publics on methods of peaceful child rearing </p>
                        </div>
                    </li>
                    <li className="value__con">
                        <div className="circle-bg"><i><IoRocketSharp /></i></div>
                        <div className="value">
                            <h3>Mission</h3>
                            <p>To transform the mindset of the generalpublic in recognizing and acknowledging the voice of children with regards to their total education to enable their uniqueness come alive</p>
                        </div>
                    </li>
                    {/* <li className="value__con">
                        <div className="circle-bg"><i><FaGem /></i></div>
                        <div className="value">
                            <h3>Our Value</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus provident, ut ducimus dolores accusamus omnis, amet aliquam harum </p>
                        </div>
                    </li> */}
                    
                </ul>
                <Link href="/about">
                    <button className="monaOutlineButton">Learn More</button>
                </Link>
            </div>
            <div className="about__img">
                <Image src={AboutImg} alt="About Mona scool Sapele" />
                
            </div>
        </div>
           <div class="floatingCardsWrapper">
                    <div class="miniCard cardOne">
                        <span>⭐</span>
                        <p>10+ Years of Excellence</p>
                    </div>

                    <div class="miniCard cardTwo">
                        <span>🎓</span>
                        <p>Montessori Inspired</p>
                    </div>

                    <div class="miniCard cardThree">
                        <span>😊</span>
                        <p>Happy Learning Environment</p>
                    </div>
            </div>
    </section>
  )
}

export default About
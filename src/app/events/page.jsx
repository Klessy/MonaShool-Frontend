import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineUpdate } from "react-icons/md";
import { latestUpDate } from "@/data/data";

import "@/components/styles/news.css";
import Link from "next/link";

import BreadCrumbs from "@/components/utils/BreadCrumbs";

export default function Page(){
  return (
  <main className="p-10">
    <BreadCrumbs title={"OUR EVENTS"} path={"Events"} link={"events"}/>
     <section className="news__section">
            <div className="news__container container">
                <div className="text-center">
                  <span className="pre-title">Events</span>
                  <h2 className="heading__subtitle">Latest from Mona School</h2>
                </div>
                <div className="news__cards">
                  {
                    latestUpDate.map((news, link) => {
                      const {id, label, Desc, day, location, date, title, img} = news
                    return (
                        <article className="news__card" key={id}>
                          <div className="news__header">
                            <div className="news__img">
                              <span>{day}</span>
                              <Image src={img} alt="Mona School Events" fill/>
                                <h4 className="label">{label}</h4>
                            </div>
                          </div>
                          <div className="news__body">
                            <div className="location">
                              <span> <i> <FaLocationDot /> </i> </span>
                              <p>{location}</p>
                            </div>
                            <div className="date">
                              <span style={{ fontSize: "17px"}}> <i> <MdOutlineUpdate /></i> </span>
                              <p>{date}</p>
                            </div>
                            <div className="seperator"></div>
                            <p className="news__txt">{Desc}</p>
                            <button className="news__btn">Check it</button>
                          </div>
                        </article>
                    )
                    }) 
                  }
                </div>
              </div>
        </section>
  </main>
  )
}

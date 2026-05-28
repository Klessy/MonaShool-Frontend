import Link from "next/link";
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";
import ShapeImg_1 from "@/assets/bg/shape-36.png";
import ShapeImg_2 from "@/assets/bg/shape-01.png";
import ShapeImg_3 from "@/assets/bg/shape-03.png";

import "../styles/breadcrumb.css";
const BreadCrumbs = ({ title, path, link }) => {
  return (
    <section className="breadcrumb__section">
      <div className="container breadcrumb__container">
        <h1 className="breadcrumb__title">{title}</h1>
        <ul className="breadcrumb__link">
          <li>
            <Link href="/">Home</Link>
          </li>
          <MdKeyboardArrowRight
            style={{ fontSize: "20px", color: "#7a7a7a" }}
          />
          <li>
            <Link href={`/${link}`}>{path}</Link>
          </li>
        </ul>
        <div className="breadcrumb__img-wrapper">
          <div className="shape-image shape-image-1">
            <Image src={ShapeImg_1} alt="" />
          </div>
          <div className="shape-image shape-image-2">
            <Image src={ShapeImg_2} alt="" />
          </div>
          <div className="shape-image shape-image-3">
            <Image src={ShapeImg_3} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadCrumbs;

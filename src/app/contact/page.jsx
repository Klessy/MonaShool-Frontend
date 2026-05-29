"use client";

import BreadCrumbs from "@/components/utils/BreadCrumbs";
import { useEffect, useRef } from "react";

import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

import "@/components/styles/contact.css";

export default function Page(){
  const formSub = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_mgoy5mq",
      "template_idw8ozv",
      formSub.current,
      "3PnIG0P6ABSd4jTUr"
    );

    e.target.reset();
  };

  const form = useForm({
    date: new Date(),
  });
  const { register, handleSubmit, formState, reset } = form;
  const { errors, isSubmitSuccessful } = formState;

  //Error / Sucess Messages

  const submit = (data) => {};

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const formatOptionLabel = ({ value, label, option }) => (
    <div style={{ display: "flex" }}>
      <div>{label}</div>
    </div>
  );

  return (
  <main className="p-10">
    <BreadCrumbs title={"CONTACT US"} path={"Contact"} link={"contact"}/>
    
      <section className="contact__section" id="contact" data-aos="fade-up">
      <div className="container">
        {/* contact */}
        <div className="contact__container ">
          {/* first col */}
          <div className="first-col">
            <div className="">
              <h2 className="sub-title text_title">
                Contact Us <br /> We’re Here to Help
              </h2>
              <p className="font__main contact-desc">
                We would love to hear from you. Reach out to us for enquiries, visits, or support.
              </p>
            </div>
            <div className="contact__items">
              <div className="contact__item">
                <h3>Nigeria</h3>
                <span className="underline"></span>
                <p className="">
                  Ikhidero Crescent, Off Shell Road, Amukpe
                  <br /> <strong> Sapele, Delta state.</strong>
                </p>
              </div>
              {/*  */}
              <div className="contact__item">
                <h3>Opening Hours</h3>
                <span className="underline"></span>
                <div className="">
                  <p>Mon to Fri: 07:00 am — 14:00 pm</p>
                  <p>Mon to Fri: 07:00 am — 14:00 pm</p>
                </div>
              </div>
              {/*  */}
              <div className="contact__item">
                <h3>Information</h3>
                <span className="underline"></span>
                <div>
                  <a className="text-body" href="tel: +2349036422329">
                    <i className="fa fa-phone-alt text-primary me-2"></i>
                    +2349036422329
                  </a> <br />
                  <a className="text-body" href="tel: +2348076646400">
                    <i className="fa fa-phone-alt text-primary me-2"></i>
                    +2348076646400
                  </a>
                  <br />
                  <a
                    className="text-body"
                    href="mailto:info@monaschool.ng"
                  >
                    <i className="fa fa-envelope-open text-primary me-2"></i>
                    info@monaschool.ng
                  </a>
                </div>
              </div>
              {/*  */}
              <div className="contact__item">
                <h3>Follow Us On</h3>
                <span className="underline"></span>
                <div className="social_container-contact">
                  <a className="contact_socials">
                    <i className="fab fa-facebook-f "></i>
                  </a>
                  <a className="contact_socials">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="contact_socials">
                    <i className="fab fa-linkedin-in "></i>
                  </a>
                  <a className="contact_socials">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* second col ---*/}
          <form
            className="second-col"
            id="contact-form"
            ref={formSub}
            // onSubmit={sendEmail}
            noValidate
          >
            <h2 className="text_title">Send us a Message</h2>

            <div className="form-control">
              <div className="row">
                <input
                  className="form-input"
                  placeholder="Full Name *"
                  id="name"
                  type="text"
                  name="name"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Please kindly enter your name",
                    },
                  })}
                ></input>
                <input
                  className="form-input"
                  id="email"
                  placeholder="Email Address *"
                  type="email"
                  name="email"
                  {...register("email", {
                    pattern: {
                      value:
                        /^[a-zA-Z0-9.!#$%'*+/=?^_`{|}~-]+@[a-zA-Z0-9-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "Invalid email format",
                    },
                    required: {
                      value: true,
                      message: "Enter Email",
                    },
                  })}
                ></input>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p className="err-contact">{errors.email?.message}</p>
                <p className="err-contact">{errors.name?.message}</p>
              </div>
            </div>
            <div className="form-control">
              <div className="row">
                <input
                  className="form-input"
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone *"
                  {...register("phone", {
                    valueAsDate: true,
                  })}
                />
                <select
                  className="form-select py-3 border-primary bg-transparent"
                  aria-label="Default select example"
                  name="gender"
                >
                  <option selected>Class</option>
                  <option value="Male">TODDLER</option>
                  <option value="Male">KINDERGARTEN</option>
                  <option value="FeMale">PRIMARY 1</option>
                  <option value="Others">PRIMARY 2</option>
                  <option value="Others">PRIMARY 3</option>
                  <option value="Others">PRIMARY 4</option>
                  <option value="Others">PRIMARY 5</option>
                </select>
              </div>
            </div>

            {/* <div className="form-control">
              <div className="row">
                <input
                  className="form-input"
                  type="date"
                  id="date"
                  name="date"
                  placeholder=""
                  {...register("date", {
                    valueAsDate: true,
                  })}
                />
                <select
                  className="form-select py-3 border-primary bg-transparent"
                  aria-label="Default select example"
                  name="department"
                >
                  <option selected>Courses</option>
                  <option value="Data Analysis">Data Analysis</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Web Development">Forex Trade</option>
                  <option value="Animation">Animation</option>
                  <option value="Graphic Design">Graphic Design</option>
                  <option value="MS Suites">MS Suites</option>
                </select>
              </div>
            </div> */}

            <div className="form-control">
              <textarea
                placeholder="Your Message"
                className="input-message"
                type="message"
                id="message"
                name="message"
                {...register("message", {
                  required: {
                    value: true,
                    message: "Tell us about it",
                  },
                })}
              ></textarea>
              <p className="err-contact">{errors.message?.message}</p>
            </div>
            <div className="form-btn">
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      <section id="school-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.9336391558895!2d5.691233274042062!3d5.864954130467602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040fd2c7cb87e45%3A0xb41043a0e7c0b211!2sMona%20School!5e0!3m2!1sen!2sng!4v1779730823963!5m2!1sen!2sng" width="600" height="450" style={{border:"0", allowfullscreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
      </section>
      </div>
    </section>
  </main>
  )
}

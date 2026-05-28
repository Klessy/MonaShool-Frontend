//Hero Images
import Carousel_1 from "../assets/images/monaschool-graduants-activity.webp";
import Carousel_2 from "../assets/images/monaschool-sport-activity.webp";
import Carousel_3 from "../assets/images/monaschool-puzzle-activitiy-sapele.webp";
import Carousel_4 from "../assets/images/monaschool-classroom-exercise-sapele.webp";
import EventsImg from "../assets/images/monaschool-outdoor-study-pry5.webp";
import EventsImg_1 from "../assets/images/mona-school-national-day-event.webp";
import EventsImg_2 from "../assets/images/monaschool-playing-instrument.webp";
import EventsImg_4 from "../assets/images/monaschool-outdoor-study-pry5.webp";



export const navLink = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Events",
    path: "/events",
  },
    // {
    //   id: 4,
    //   name: "Online admission",
    //   path: "/admission",
    // },
  {
    id: 4,
    name: "Contact",
    path: "/contact",
  },
];

const dataSlider = [

  {
    id: 1,
    title: "Raising Future Leaders  \n",
    desc: "Learn the in-demand skills required to take you from a beginner \n to an advanced tech developer.",
    img: Carousel_1,
    btn: "JOIN A CLASS",
  },
  {
    id: 2,
    title: "quality Education FOR a \n  Brighter Future",
    desc: "Mona School provides modern learning with CBT and digital tools.",
    img: Carousel_2,
    btn: "JOIN A CLASS",
  },
  {
    id: 3,
    title: "A Happy Place for Your Child to \n  Learn and Grow",
    desc: "We build confident, curious, and well-behaved children through care, \n creativity, and strong values.",
    img: Carousel_3,
    btn: "JOIN A CLASS",
  },

  {
    id: 4,
    title: "Learning Through Discovery",
    desc: "Our Montessori method helps children learn at their own pace \n using hands-on activities and guided support.",
    img: Carousel_4,
    btn: "JOIN A CLASS",
  },
];

const latestUpDate = [
  {
    id: 1,
    label: "NATIONAL DAY",
    day: "1 \n jan",
    location: "Sapele, Delta State",
    date: "dd/mm/yyyy",
    title: "Building Strong Academic Foundations",
    img: EventsImg_1,
    Desc: "we help children develop reading, writing, communication, and problem-solving skills through engaging learning experiences.",
  },
  {
    id: 2,
    label: "OUT DOOR STUDY",
     day: "1 \n jan",
    location: "Sapele, delta State",
    date: "dd/mm/yyyy",
    title: "Learning through play and discovery",
    img: EventsImg,
    Desc: "Pupils enjoy arts, music, storytelling and practical activities",
  },
  {
    id: 3,
    label: "OUR ENVIRONMENT",
     day: "1 \n jan",
    location: "Sapele, Delta State",
    date: "dd/mm/yyyy",
    title: "A Safe and Caring School Community",
    img: EventsImg_2,
    Desc: "Give your Child a Strong foundation in a supportive Montessori-inspired environment",
  },
  {
    id: 4,
    label: "ADIMISSION",
     day: "1 \n jan",
    location: "Sapele, Delta State",
    date: "dd/mm/yyyy",
    title: "Admission is Now Open",
    img: EventsImg,
    Desc: "Give your Child a Strong foundation in a supportive Montessori-inspired environment",
  },
  {
    id: 5,
    label: "GRADUATION",
     day: "1 \n jan",
    location: "Sapele, Delta State",
    date: "dd/mm/yyyy",
    title: "Admission is Now Open",
    img: EventsImg_1,
    Desc: "Give your Child a Strong foundation in a supportive Montessori-inspired environment",
  },
  {
    id: 6,
    label: "END OF TERM REPORT",
     day: "1 \n jan",
    location: "Sapele, Delta State",
    date: "dd/mm/yyyy",
    title: "Admission is Now Open",
    img: EventsImg_2,
    Desc: "Give your Child a Strong foundation in a supportive Montessori-inspired environment",
  },
]

const faqs = [
  {
    id: 1,
    question: "What age do you accept children",
    answer: "We accept children from age 2 to 11.",
  },
  {
    id: 2,
    question: "Requirements",
    answer: "You will need a laptop and internet access.",
  },
  {
    id: 3,
    question: "What Laptop Specification do you recommend?",
    answer:
      "Minimum specifications (OPERATING SYSTEM: Window 8. PROCESSOR: Corei3. RAM: 4GB. HARD DISK: 500GB).",
  },
  {
    id: 4,
    question: "Certificate",
    answer:
      "You will receive a certificate after successfully completing a course.",
  },
  {
    id: 5,
    question: "Do you follow Montessori curriculum",
    answer:
      "Yes, we use a Montessori-based learning approach.",
  },
  {
    id: 6,
    question: "How can I apply?",
    answer:
      "You can apply through our online admission forms.",
  },
  {
    id: 7,
    question: "Do you offer extracurricular activities?",
    answer:
      "Yes, we offer sports, arts, and creative activities.",
  },
  {
    id: 8,
    question: "What if a student misses a class",
    answer: "Class rescheduling is only available for a private student.",
  },
];

export { dataSlider, latestUpDate, faqs };



import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/utils/ScrollToTop";

export const metadata = {
  title: "Mona School",
  description:
    "A trusted Montessori Primary School focused on quality education, child development, and a safe learning environment in Sapele. Apply for Admission today.",
  icons: {
    icon: "/icon.webp"
  },
  keywords: [
    "Mona School",
    "Montessori School",
    "School Admission",
    "Primary School",
    "School in Sapele",
    "School in Delta State Nigeria",
    "Child Education",
    "CBT School Sapele",
    "CBT School Delta Nigeria",
  ],
  authors: [{ name: "Mona School" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
        />
      </head>

      <body>
        <Navbar />

        <main>
          {children}
          <ScrollToTop />
        </main>

        <Footer />
      </body>
    </html>
  );
}



















// import "./globals.css";


// import Navbar from "@/components/layout/Navbar";
// import Footer from "@/components/layout/Footer";
// import ScrollToTop from "@/components/utils/ScrollToTop";
// // import ScrollToTop from "../components/utils/ScrollToTop";

// export const metadata = {
//   title: "Mona School - Excellence in Education",
//   description: 
//     "A trusted Montessori Primary School focused on quality education, child development, and a safe learning environment in Sapele. Apply for Admission today. ",
//     keywords: [
//       "Mona School",
//       "MontessoriSchool",
//       "School Admission",
//       "Primary School",
//       "School in Sapele",
//       "School in Delta State Nigeria",
//       "Child Education",
//       "CBT School Sapele",
//       "CBT School Delta, Nigeria"
//     ],
//     authors: [{name: "Mona School"}],
//     opengraph: {
//       title: "Mona School",
//       description: "Modern digital Learning School sapele",
//       url: "https://monaschool.ng",
//       siteName: "Mona School",
//       // images: [
//       //   {
//       //     url: "/images/mona.jpg",
//       //     width: "1200",
//       //     height: "650"
//       //   }
//       // ]
//     }
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <link
//       href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
//       rel="stylesheet"
//     />
//       <body>
//         <Navbar />
//         <main>
//           {children}
//         <ScrollToTop />
//         </main>
//         <Footer />
//       </body>
//     </html>
//   );
// }

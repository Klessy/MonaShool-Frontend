
import { FaWhatsapp } from "react-icons/fa";


const WhatsAppButton = () => {
  const message = `Hello Mona, I have a Question. Please give me more info.`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/2348076646400?text=${encodedMessage}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        backgroundColor: "green",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        textDecoration: "none",
        maxWidth: "fit-content",
        margin: "0 auto",
        marginTop: "20px",
      }}
    >
      <FaWhatsapp size={20} />
      Your Question
    </a>
  );
};

export default WhatsAppButton;

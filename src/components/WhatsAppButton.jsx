
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  // Yahan client ka WhatsApp number daalna
  const phoneNumber = "919220762559";

  const message = "Hello Hire Via HR, I want to know more about your services.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp size={32} />
    </a>
  );
}

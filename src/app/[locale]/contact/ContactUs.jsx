import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactUs() {
  const phoneNumber = "+213698422907"; // Replace with your phone number
  const message = "Hello! I would like to know more about your services.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <p className="mb-4">Reach us for inquiries or bookings via WhatsApp:</p>
      <Link
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-green-500 text-white py-2 px-3 rounded-lg shadow-md hover:bg-green-600 transition-all w-max"
      >
        <FaWhatsapp className="mr-2 text-2xl" />
        Chat with us on WhatsApp
      </Link>
    </div>
  );
}

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const formRef = useRef();

  useGSAP(() => {
    gsap.from(".contact-form input, .contact-form textarea", {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.8,
      ease: "power2.out",
    });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formRef.current, "YOUR_PUBLIC_KEY")
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          alert("Failed to send message. Try again later.");
          console.error(error);
        }
      );
  };

  return (
    <section
      className="py-16 px-6 bg-[#C5E188] bg-cover bg-center"
      style={{ backgroundImage: "url('/images/contact-bg.jpg')" }}
      id="contact"
    >
      <h2 className="text-4xl font-bold text-center mb-10 text-black drop-shadow-lg">Contact Us</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Contact Info */}
        <div className="flex flex-col justify-between text-white drop-shadow-lg">
          <div className="space-y-4 text-lg  text-black">
            <p><strong>Phone:</strong> +254 740 969749 </p>
            <p><strong>Email:</strong> info@tutembee.co.ke</p>
            <p><strong>Location:</strong> Nairobi, Kenya</p>
          </div>

          <div className="flex space-x-4 mt-6 text-2xl text-black">
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://wa.me/254740969749?text=Hello%2C%20I%20am%20interested%20in%20your%20travel%20services!"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"><FaWhatsapp /></a>
          </div>
        </div>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="contact-form space-y-4 bg-[url('/form/lion.jpg')] bg-cover  bg-opacity-0 p-6 rounded-xl shadow-md"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring text-white"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring text-white"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring text-white"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = ({ t }) => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-6 space-y-8 mt-5"
      style={{
        background:
          "linear-gradient(to right bottom, #f3e1c8, #edd2a8, #e6c49a, #d8b38a)",
      }}
    >
      <div
        className="w-full max-w-4xl p-12 rounded-2xl shadow-lg bg-white"
        style={{ boxShadow: "0.5rem 0.5rem 3rem #95615e" }}
      >
        <h2 className="text-3xl font-bold text-[#95615e] text-center mb-6">
          {t("contactus")}
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-[#95615e] font-medium">
              {" "}
              {t("name")}
            </label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#95615e]"
              placeholder={t("nameholder")}
            />
          </div>
          <div>
            <label className="block text-[#95615e] font-medium">
              {t("email")}
            </label>
            <input
              type="email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#95615e]"
              placeholder={t("emailholder")}
            />
          </div>
          <div>
            <label className="block text-[#95615e] font-medium">
              {t("message")}
            </label>
            <textarea
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#95615e]"
              rows="4"
              placeholder={t("messageholder")}
            ></textarea>
          </div>
          <button className="w-full bg-[#8EB4A5] text-white p-3 rounded-lg hover:bg-opacity-80 transition">
            {t("send")}
          </button>
        </form>
        <div className="mt-6 text-center text-[#8EB4A5] space-y-2">
          <p className="flex items-center justify-center gap-3">
            <FaEnvelope className="mr-2" /> {t("ourEmail")}
          </p>
          <p className="flex items-center justify-center gap-3">
            <FaPhone className="mr-2" /> +33 1 23 45 67 89
          </p>
          <p className="flex items-center justify-center gap-3">
            <FaMapMarkerAlt className="mr-2" />
            {t("ourAdresse")}
          </p>
        </div>
      </div>
      <div className="w-full max-w-4xl">
        <iframe
          title="Jordan Location"
          className="w-full h-96 rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d108452.77402842267!2d35.98676979241067!3d31.848155334540063!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5d7fc805c9ed%3A0xc860a3737532f02e!2zUmFuZ2VycyBlcXVlc3RyaWFuIGNsdWIg2KfYs9i32KjZhNin2Kog2YjZg9in2YHZitmHINix2YrZhtis2LHYsiDZhNmE2YHYsdmI2LPZitip!5e0!3m2!1sen!2sjo!4v1738154344240!5m2!1sen!2sjo"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;

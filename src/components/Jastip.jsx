import React, { useState } from "react";

const Jastip = () => {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    const phoneNumber = "+6285710461329";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    setMessage("");
  };

  return (
    <div className="w-full flex flex-col justify-center items-center py-5 ">
      <p className="font-play italic text-darkBrown text-3xl sm:text-4xl">
        Jastip Sarapan
      </p>
      <div className="w-full flex flex-col justify-center items-center py-5 gap-3">
        <textarea
          type="text"
          value={message}
          onChange={handleChange}
          placeholder="Masukkan pesan anda kepada Mpo Muna yang cantik (*ada ongkir ya)"
          className="border border-gray-300 rounded-md px-4 h-40 py-2 w-80 sm:w-100 focus:outline-none"
        />
        <button
          onClick={handleSendMessage}
          className="bg-brown text-white px-6 py-1.5 font-play rounded-md shadow-md hover:bg-darkBrown focus:outline-none"
        >
          Pesan
        </button>
      </div>
    </div>
  );
};

export default Jastip;

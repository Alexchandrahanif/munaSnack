import React, { useState, useEffect, useRef } from "react";
import { AiTwotoneAppstore } from "react-icons/ai";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [name, setName] = useState("");
  const [isNameSaved, setIsNameSaved] = useState(false);
  const [orders, setOrders] = useState([]);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const modalRef = useRef(null);
  const userMenuRef = useRef(null);

  useEffect(() => {
    const savedName = localStorage.getItem("nama");
    if (savedName) {
      setIsNameSaved(true);
      setName(savedName);
    }

    const savedOrders = JSON.parse(localStorage.getItem("pesanan"));
    if (savedOrders) {
      setOrders(savedOrders);
    }
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = () => {
    localStorage.setItem("nama", name);
    setShowModal(false);
    setIsNameSaved(true);
  };

  const handleViewOrders = () => {
    setShowOrderModal(true);
    setShowUserMenu(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("nama");
    setName("");
    setIsNameSaved(false);
    setShowUserMenu(false);
  };

  const handleUpdateName = () => {
    setShowUserMenu(false);
    setShowModal(true);
  };

  const handleClickOutside = (event) => {
    if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
      setShowUserMenu(false);
    }
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowModal(false);
      setShowOrderModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full bg-darkBrown h-[75px] px-5 py-3 sm:px-10 sm:py-5 flex items-center justify-between">
      <p className="text-lg font-play text-white font-semibold">Muna-Snack</p>
      <div className="relative inline-block text-left">
        <button
          className="inline-flex justify-center items-center rounded-full w-8 h-8 mt-2 focus:outline-none"
          aria-label="User menu"
          aria-haspopup="true"
          onClick={() => setShowUserMenu(!showUserMenu)}
        >
          <AiTwotoneAppstore className="w-10 h-10 text-darkBrown" />
        </button>
        {showUserMenu && (
          <div
            className="absolute right-0  w-48 bg-white rounded-md shadow-lg py-1"
            ref={userMenuRef}
          >
            {isNameSaved ? (
              <>
                <button
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  onClick={handleUpdateName}
                >
                  Ubah Nama
                </button>
                <button
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  onClick={handleViewOrders}
                >
                  Lihat Pesanan
                </button>
                <button
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                onClick={() => setShowModal(true)}
              >
                Daftar
              </button>
            )}
          </div>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-5 rounded-lg w-80" ref={modalRef}>
            <h2 className="text-lg font-semibold mb-3">Masukkan Nama</h2>
            <input
              type="text"
              className="border border-gray-300 rounded px-3 py-2 w-full mb-3"
              value={name}
              onChange={handleNameChange}
            />
            <div className="flex justify-end">
              <button
                className="bg-darkBrown text-white px-4 py-2 rounded-lg mr-2"
                onClick={handleSubmit}
              >
                Submit
              </button>
              <button
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {showOrderModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-5 rounded-lg w-80" ref={modalRef}>
            <h2 className="text-lg font-semibold mb-3">Pesanan Anda</h2>
            {orders.length > 0 ? (
              <ul>
                {orders.map((order, index) => (
                  <li key={index}>{order}</li>
                ))}
              </ul>
            ) : (
              <p>Tidak ada pilihan saat ini.</p>
            )}
            {/* <div className="flex justify-end">
              <button
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg"
                onClick={() => setShowOrderModal(false)}
              >
                Close
              </button>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

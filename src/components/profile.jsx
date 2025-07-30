import React, { useState } from 'react';

const Profile = () => {
  const [name, setName] = useState("M. Detryalviano");
  const [email] = useState("detryalviano@email.com");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newName, setNewName] = useState(name);
  const [historyData, setHistoryData] = useState([
    {
      ID_Order: "#558966687321598",
      time: "26 Juli 2025 - 10:35 WIB",
      status: "Selesai",
    },
    {
      ID_Order: "#4236665897100521",
      time: "25 Juli 2025 - 17:20 WIB",
      status: "Selesai",
    },
    {
      ID_Order: "#9872556542312114",
      time: "24 Juli 2025 - 09:10 WIB",
      status: "Perlu Verifikasi",
    },
  ]);

  const openModal = () => {
    setIsModalVisible(true);
    setTimeout(() => setIsModalOpen(true), 10);
    setNewName(name);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setIsModalVisible(false), 300);
  };

  const handleSave = () => {
    if (newName.trim() !== "") {
      setName(newName.trim());
      setHistoryData([
        {
          ID_Order: "#NEW" + Math.floor(Math.random() * 1000000000000),
          time: new Date().toLocaleString('id-ID', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
          }),
          status: "Selesai"
        },
        ...historyData
      ]);
      closeModal();
    }
  };

  const handleLogout = () => {
    alert("Logout berhasil (simulasi)");
    // Tambahkan logika logout sesungguhnya di sini
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      
      {/* Sidebar */}
      <aside className="w-full md:w-1/6 bg-gradient-to-b from-red-500 to-gray-200 text-white p-6 space-y-6">
        <div className="flex flex-col items-center text-center">
          <img src="/Rectangle 73.png" className="rounded-full w-24 h-24 object-cover mb-4 border-4 border-white" alt="Profile" />
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-sm">{email}</p>
        </div>
        <div className="space-y-4">
          <button
            onClick={openModal}
            className="w-1/2 md:w-full flex justify-center mx-auto bg-white text-red-800 py-2 rounded-xl hover:bg-gray-100 transition"
          >
            Edit Profile
          </button>
          <button
            onClick={handleLogout}
            className="w-1/2 md:w-full flex justify-center mx-auto bg-red-600 text-white py-2 rounded-xl hover:bg-red-500 transition"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl font-semibold mb-6">History Pembelian</h1>
        <div className="bg-white rounded-lg shadow p-4 divide-y">
          {historyData.map((item, index) => (
            <div key={index} className="py-4 flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <p className="font-semibold text-gray-800">{item.ID_Order}</p>
                <p className="text-sm text-gray-600">{item.time}</p>
              </div>
              <span className={`text-sm mt-2 md:mt-0 font-medium ${
                item.status === "Selesai" ? "text-green-600" : "text-yellow-600"
              }`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </main>

      {/* Modal Edit Profile */}
      {isModalVisible && (
        <div className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 ${isModalOpen ? 'opacity-100' : 'opacity-0'}`}>
          <div className={`bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[400px] transform transition-all duration-300 ${isModalOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
            <h2 className="text-xl font-semibold mb-4 text-center">Edit Your Name</h2>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-red-500 mb-4"
              placeholder="Input your new name"
            />
            <div className="flex justify-end gap-3">
              <button
                className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 transition"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
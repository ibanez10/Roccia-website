import React from 'react';
import Email from '/email.png';
import Telepon from '/telepon.png';
import Lokasi from '/lokasi.png';
import Bumi from '/bumi.png';

function Contact() {
  return (
    <>
      <div className="relative w-full">
        {/* IFRAME MAPS */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3993.7217614738624!2d110.30072407505277!3d-7.837422892183811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7af94b0555dd5f%3A0x598d3b36bb01ae10!2sCV%20Craftture%20Indo%20Design!5e1!3m2!1sid!2sid!4v1752463590571!5m2!1sid!2sid"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[400px] object-cover"
        ></iframe>

        {/* BOX CONTACT */}
        <div
          className="
            absolute
            lg:bottom-[-120px] bottom-[60] left-6 md:left-12
            bg-red-800 text-white font-sans 
            py-10 px-8  
            w-[90%] max-w-[700px]
            shadow-lg rounded-md
          "
        >
          <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
          <p className="text-sm">
            Want to know more or place an order? Get in touch and let’s create something timeless.
          </p>
        </div>
      </div>

      {/* SPACER */}
      <div className="pt-48 flex justify-center">
        <div className="flex items-center mb-10">
          <div className="w-12 h-px bg-gray-700 mx-2"></div>
          <p className="text-lg text-gray-700 m-0">
            Our <span className="text-red-800">Product</span>
          </p>
          <div className="w-12 h-px bg-gray-700 mx-2"></div>
        </div>
      </div>

      {/* CONTACT CARDS */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 pb-20">
        {/* Box Email */}
        <div
          className="
            bg-red-800 text-white font-sans 
            py-6 px-5 
            shadow-lg rounded-lg
            flex flex-col items-center text-center
          "
        >
          <img src={Email} alt="Email" className="w-16 mb-4" />
          <h1 className="text-lg font-semibold mb-1">Email</h1>
          <p className="text-sm break-words">info@craftture.com</p>
        </div>

        {/* Box Phone */}
        <div
          className="
            bg-red-700/80 text-white font-sans 
            py-6 px-5 
            shadow-lg rounded-lg
            flex flex-col items-center text-center
          "
        >
          <img src={Telepon} alt="Phone" className="w-16 mb-4" />
          <h1 className="text-lg font-semibold mb-1">Phone</h1>
          <p className="text-sm break-words">(+62) 274 3610299</p>
          <p className="text-sm break-words">Whatsapp: (+62) 812 1682 6215</p>
        </div>

        {/* Box Location */}
        <div
          className="
            bg-red-900/70 text-white font-sans 
            py-6 px-5 
            shadow-lg rounded-lg
            flex flex-col items-center text-center
          "
        >
          <img src={Lokasi} alt="Location" className="w-16 mb-4" />
          <h1 className="text-lg font-semibold mb-1">Our Address</h1>
          <p className="text-sm break-words">
            PT Craftture Indo Designs<br />
            RT 03, Lemahdadi, Bangunjiwo,<br />
            Kecamatan Kasihan, Kabupaten Bantul,<br />
            Daerah Istimewa Yogyakarta 55184
          </p>
        </div>

        {/* Box Social Media */}
        <div
          className="
            bg-red-800 text-white font-sans 
            py-6 px-5 
            shadow-lg rounded-lg
            flex flex-col items-center text-center
          "
        >
          <img src={Bumi} alt="Social Media" className="w-16 mb-4" />
          <h1 className="text-lg font-semibold mb-1">Social Media</h1>
          <p className="text-sm break-words">@Crafttureid (Tiktok & Instagram)</p>
        </div>
      </div>
    </>
  );
}

export default Contact;
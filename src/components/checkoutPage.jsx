import React, { useState } from 'react';
import { useCart } from '../components/CartContext';
import axios from 'axios';

const CheckoutPage = () => {
  const { cartItems, total, increaseQty, decreaseQty } = useCart();
  const [shippingCost, setShippingCost] = useState(0);
  const [deliveryMethod, setDeliveryMethod] = useState('pickup'); // 'pickup' or 'ship'

  const [formData, setFormData] = useState({
    email: '',
    country: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    postalCode: '',
  });

  const isFormComplete = Object.values(formData).every((value) => value.trim() !== '');

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCheckout = async () => {
    if (!isFormComplete) {
      alert("Mohon lengkapi semua informasi sebelum checkout.");
      return;
    }

    try {
      const orderId = `ORDER-${Date.now()}`;

      const response = await axios.post("http://localhost:5000/create-transaction", {
        orderId,
        grossAmount: Number(total + shippingCost),
        customerDetails: {
          first_name: formData.firstName || "Customer",
          email: formData.email,
          address: formData.address,
          city: formData.city,
          postalCode: formData.postalCode,
        },
      });

      const { token } = response.data;

      if (window.snap) {
        window.snap.pay(token, {
          onSuccess: () => alert("Pembayaran berhasil"),
          onPending: () => alert("Pembayaran pending"),
          onError: () => alert("Pembayaran gagal"),
          onClose: () => alert("Kamu menutup popup pembayaran."),
        });
      } else {
        alert("Snap belum dimuat.");
      }
    } catch (error) {
      console.error("Error during checkout:", error);
      alert("Gagal membuat transaksi.");
    }
  };

  return (
    <>
      <div className='p-6 md:p-8 max-w-screen-xl mx-auto'>
        <h1 className='text-3xl font-semibold'>Shopping Cart</h1>
      </div>

      <div className='flex flex-col lg:flex-row justify-between px-6 md:px-10 gap-6 max-w-screen-xl mx-auto'>
        <div className='w-full lg:w-1/2'>
          <div className='mb-6 space-y-4'>
            {cartItems.length === 0 ? (
              <p className="text-gray-500">Keranjang kosong.</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.slug} className='rounded-xl border border-red-600 p-4 md:p-5'>
                  <div className='flex flex-col sm:flex-row'>
                    <div className='w-full sm:w-32 mb-4 sm:mb-0'>
                      <img src={item.img} alt={item.title} className="w-full rounded-lg" />
                    </div>
                    <div className='flex-1 sm:ml-5'>
                      <div className='flex justify-between'>
                        <h1 className='text-lg md:text-xl font-semibold'>{item.title}</h1>
                        <h1 className='opacity-70 text-sm md:text-base'>Rp.{item.price.toLocaleString('id-ID')}</h1>
                      </div>
                      <h1 className='text-sm mt-2'>Qty:</h1>
                      <div className='flex justify-between items-center mt-2'>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => decreaseQty(item.slug)}
                            className="px-2 py-1 border border-red-500 rounded"
                          >-</button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() => increaseQty(item.slug)}
                            className="px-2 py-1 border border-red-500 rounded"
                          >+</button>
                        </div>
                        <h1 className='font-semibold text-sm md:text-base'>
                          Rp.{(item.price * item.quantity).toLocaleString('id-ID')}
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className='rounded-xl border border-red-600 p-4 md:p-5'>
            <div className='flex justify-between py-1'>
              <h1 className='text-base md:text-xl'>Subtotal</h1>
              <h1 className='text-base md:text-xl'>Rp.{total.toLocaleString('id-ID')}</h1>
            </div>
            {deliveryMethod === 'ship' && (
              <div className='flex justify-between py-1'>
                <h1 className='text-base md:text-xl'>Shipping</h1>
                <h1 className='text-base md:text-xl'>
                  {shippingCost === 0 ? 'Free' : `Rp.${shippingCost.toLocaleString('id-ID')}`}
                </h1>
              </div>
            )}
            <hr className='border-red-500 my-3'/>
            <div className='flex justify-between py-1'>
              <h1 className='font-semibold text-base md:text-xl'>Total</h1>
              <h1 className='text-base md:text-xl font-semibold'>
                Rp.{(total + (deliveryMethod === 'ship' ? shippingCost : 0)).toLocaleString('id-ID')}
              </h1>
            </div>
          </div>
        </div>

        <div className='w-full lg:w-1/2'>
          <div className='border bg-gray-400/20 rounded-xl p-4 md:p-6'>
            <h2 className='text-lg md:text-xl font-semibold mb-4'>Payment Details</h2>

            <input
              type="text"
              placeholder="Email or phone number"
              className="w-full border border-red-500 rounded-3xl p-2 mb-4"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
            />
            <label className="flex items-center gap-2 mb-4 text-sm">
              <input type="checkbox" />
              <span>Email me with news and offers</span>
            </label>

            <div className="mb-4">
              <h3 className="font-semibold mb-2 text-sm md:text-base">Delivery</h3>
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => {
                    setDeliveryMethod('ship');
                  }}
                  className={`px-4 py-2 rounded cursor-pointer border border-red-500 ${deliveryMethod === 'ship' ? 'bg-red-100 text-red-700' : ''}`}
                >
                  Ship
                </button>
                <button
                  onClick={() => {
                    setDeliveryMethod('pickup');
                    setShippingCost(0);
                  }}
                  className={`px-4 py-2 rounded cursor-pointer border border-red-500 ${deliveryMethod === 'pickup' ? 'bg-red-100 text-red-700' : ''}`}
                >
                  Pickup in store
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input type="text" placeholder="Country/Region" className="md:col-span-2 border border-red-500 rounded-3xl p-2" value={formData.country} onChange={(e) => handleInputChange('country', e.target.value)} />
              <input type="text" placeholder="First name (optional)" className="border border-red-500 rounded-3xl p-2" value={formData.firstName} onChange={(e) => handleInputChange('firstName', e.target.value)} />
              <input type="text" placeholder="Last name" className="border border-red-500 rounded-3xl p-2" value={formData.lastName} onChange={(e) => handleInputChange('lastName', e.target.value)} />
              <input type="text" placeholder="Address" className="md:col-span-2 border border-red-500 rounded-3xl p-2" value={formData.address} onChange={(e) => handleInputChange('address', e.target.value)} />
              <input type="text" placeholder="Apartment, suite, etc. (optional)" className="md:col-span-2 border border-red-500 rounded-3xl p-2" value={formData.apartment} onChange={(e) => handleInputChange('apartment', e.target.value)} />
              <input type="text" placeholder="City" className="border border-red-500 rounded-3xl p-2" value={formData.city} onChange={(e) => handleInputChange('city', e.target.value)} />
              <input type="text" placeholder="Postal code" className="border border-red-500 rounded-3xl p-2" value={formData.postalCode} onChange={(e) => handleInputChange('postalCode', e.target.value)} />
            </div>

            <label className="flex items-center gap-2 mb-4 text-sm">
              <input type="checkbox" />
              <span>Save this information for next time</span>
            </label>

            {deliveryMethod === 'ship' && (
              <div>
                <h3 className="font-semibold mb-2 text-sm md:text-base">Shipping method</h3>
                <div className='space-y-2 text-sm'>
                  <label className='flex items-center gap-2'>
                    <input type="radio" name="shipping" onChange={() => setShippingCost(0)} />
                    <span>Daerah Istimewa Yogyakarta - Free</span>
                  </label>
                  <label className='flex items-center gap-2'>
                    <input type="radio" name="shipping" onChange={() => setShippingCost(45000)} />
                    <span>Jawa Tengah (Semarang) - Rp.45.000</span>
                  </label>
                  <label className='flex items-center gap-2'>
                    <input type="radio" name="shipping" onChange={() => setShippingCost(45000)} />
                    <span>Jawa Timur (Surabaya) - Rp.45.000</span>
                  </label>
                  <label className='flex items-center gap-2'>
                    <input type="radio" name="shipping" onChange={() => setShippingCost(50000)} />
                    <span>Jawa Barat (Bandung) - Rp.50.000</span>
                  </label>
                </div>
              </div>
            )}

            <div onClick={handleCheckout} className='bg-red-500 text-center text-white py-2 mt-10 hover:bg-red-800 transition duration-300 cursor-pointer rounded-xl'>
              <h1>Pay Now</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;

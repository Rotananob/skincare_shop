'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useShop } from '@/context/ShopContext';
import { ArrowRightIcon } from '@/components/Icons';

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, cartSubtotal, formatPrice, t, lang } = useShop();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('phnom-penh');
  const [district, setDistrict] = useState('');
  const [commune, setCommune] = useState('');
  const [detailAddress, setDetailAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'khqr' | 'aba' | 'cod'>('khqr');
  const [isSuccess, setIsSuccess] = useState(false);

  const provinces = [
    { id: 'phnom-penh', name: 'ភ្នំពេញ', fee: 1.5 },
    { id: 'kandal', name: 'កណ្តាល', fee: 2.0 },
    { id: 'siem-reap', name: 'សៀមរាប', fee: 2.5 },
    { id: 'battambang', name: 'បាត់ដំបង', fee: 2.5 },
    { id: 'kampong-cham', name: 'កំពង់ចាម', fee: 2.5 },
    { id: 'preah-sihanouk', name: 'ព្រះសីហនុ', fee: 2.5 },
    { id: 'kampot', name: 'កំពត', fee: 2.5 },
  ];

  const currentProv = provinces.find((p) => p.id === selectedProvince) || provinces[0];
  const shippingFee = cartSubtotal >= 30 ? 0 : currentProv.fee;
  const grandTotal = cartSubtotal + shippingFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) {
      alert('សូមបំពេញឈ្មោះ និងលេខទូរស័ព្ទ');
      return;
    }
    setIsSuccess(true);
  };

  if (cart.length === 0 && !isSuccess) {
    return (
      <div className="bg-[#FAF5EE] min-h-screen py-24 text-center px-4 font-khmer">
        <h2 className="text-[22px] font-semibold text-[#2E2620] mb-3">
          មិនមានផលិតផលក្នុងកន្ត្រកទំនិញទេ
        </h2>
        <Link
          href="/shop"
          className="bg-[#2E2620] text-[#FAF5EE] px-6 py-2.5 rounded-full text-[14px] font-medium inline-block"
        >
          ទៅកាន់ហាង
        </Link>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="bg-[#FAF5EE] min-h-screen py-20 px-4 font-khmer max-w-lg mx-auto text-center">
        <div className="w-16 h-16 bg-[#2E4B37] text-white rounded-full flex items-center justify-center text-3xl mx-auto mb-5">
          ✓
        </div>
        <h1 className="font-display text-[28px] font-semibold text-[#2E2620] mb-2">
          ការបញ្ជាទិញទទួលបានជោគជ័យ!
        </h1>
        <p className="text-[14.5px] text-[#7A7067] mb-6">
          យើងបានទទួលការបញ្ជាទិញរបស់អ្នកហើយ។ ក្រុមការងារយើងនឹងទាក់ទងតាមលេខ {phone} ក្នុងពេលឆាប់ៗ។
        </p>
        <div className="bg-[#FFFDF9] border border-[#E7DDD0] p-5 rounded-[4px] text-left mb-6 space-y-2 text-[14px]">
          <p><span className="text-[#8A8077]">អ្នកទទួល:</span> {fullName}</p>
          <p><span className="text-[#8A8077]">លេខទូរស័ព្ទ:</span> {phone}</p>
          <p><span className="text-[#8A8077]">ទីតាំង:</span> {currentProv.name}, {district}, {commune}</p>
          <p><span className="text-[#8A8077]">វិធីបង់ប្រាក់:</span> {paymentMethod.toUpperCase()}</p>
          <p className="pt-2 border-t border-[#E7DDD0] font-bold text-[16px] text-[#2E2620]">
            សរុប: {formatPrice(grandTotal)}
          </p>
        </div>
        <Link
          href="/"
          className="bg-[#2E2620] text-[#FAF5EE] px-8 py-3 rounded-full text-[14px] font-semibold inline-block"
        >
          ត្រឡប់ទៅទំព័រដើម
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF5EE] min-h-screen pb-24 md:pb-16 font-khmer">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        
        {/* Title matching Screenshot 16 */}
        <h1 className="font-display text-[28px] sm:text-[34px] font-semibold text-[#2E2620] mb-8">
          ការបញ្ជាទិញ
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Customer Info matching Screenshot 16 */}
          <div className="space-y-4">
            <h2 className="text-[14px] font-bold text-[#8A8077] uppercase tracking-wider">
              ព័ត៌មានអតិថិជន
            </h2>

            <div>
              <label className="text-[13.5px] font-medium text-[#2E2620] block mb-1.5">
                ឈ្មោះពេញ
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-[#FFFDF9] border border-[#E7DDD0] rounded-[4px] px-3.5 py-2.5 text-[14px] text-[#2E2620] focus:border-[#A9573B] outline-none"
              />
            </div>

            <div>
              <label className="text-[13.5px] font-medium text-[#2E2620] block mb-1.5">
                លេខទូរស័ព្ទ
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="ឧ. 012 345 678"
                className="w-full bg-[#FFFDF9] border border-[#E7DDD0] rounded-[4px] px-3.5 py-2.5 text-[14px] text-[#2E2620] focus:border-[#A9573B] outline-none"
              />
            </div>
          </div>

          {/* Detailed Address matching Screenshot 16 */}
          <div className="space-y-4 pt-4 border-t border-[#E7DDD0]">
            <h2 className="text-[14px] font-bold text-[#8A8077] uppercase tracking-wider">
              អាសយដ្ឋានលម្អិត
            </h2>

            <div>
              <label className="text-[13.5px] font-medium text-[#2E2620] block mb-1.5">
                ខេត្ត / ក្រុង
              </label>
              <select
                value={selectedProvince}
                onChange={(e) => setSelectedProvince(e.target.value)}
                className="w-full bg-[#FFFDF9] border border-[#E7DDD0] rounded-[4px] px-3.5 py-2.5 text-[14px] text-[#2E2620] focus:border-[#A9573B] outline-none cursor-pointer"
              >
                {provinces.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} — ${p.fee.toFixed(2)}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-[13.5px] font-medium text-[#2E2620] block mb-1.5">
                ស្រុក / ខណ្ឌ
              </label>
              <input
                type="text"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="w-full bg-[#FFFDF9] border border-[#E7DDD0] rounded-[4px] px-3.5 py-2.5 text-[14px] text-[#2E2620] focus:border-[#A9573B] outline-none"
              />
            </div>

            <div>
              <label className="text-[13.5px] font-medium text-[#2E2620] block mb-1.5">
                ឃុំ / សង្កាត់
              </label>
              <input
                type="text"
                value={commune}
                onChange={(e) => setCommune(e.target.value)}
                className="w-full bg-[#FFFDF9] border border-[#E7DDD0] rounded-[4px] px-3.5 py-2.5 text-[14px] text-[#2E2620] focus:border-[#A9573B] outline-none"
              />
            </div>

            <div>
              <label className="text-[13.5px] font-medium text-[#2E2620] block mb-1.5">
                អាសយដ្ឋានលម្អិត
              </label>
              <input
                type="text"
                value={detailAddress}
                onChange={(e) => setDetailAddress(e.target.value)}
                className="w-full bg-[#FFFDF9] border border-[#E7DDD0] rounded-[4px] px-3.5 py-2.5 text-[14px] text-[#2E2620] focus:border-[#A9573B] outline-none"
              />
            </div>
          </div>

          {/* Payment Methods matching Screenshot 18 */}
          <div className="space-y-4 pt-4 border-t border-[#E7DDD0]">
            <h2 className="text-[14px] font-bold text-[#8A8077] uppercase tracking-wider">
              វិធីបង់ប្រាក់
            </h2>

            <div className="space-y-3">
              {/* Option 1: KHQR */}
              <label
                onClick={() => setPaymentMethod('khqr')}
                className={`flex items-start gap-3.5 p-4 rounded-[4px] border cursor-pointer transition-colors ${
                  paymentMethod === 'khqr'
                    ? 'border-[#2E2620] bg-[#FFFDF9] shadow-sm'
                    : 'border-[#E7DDD0] bg-[#FAF5EE] hover:bg-[#FFFDF9]'
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === 'khqr'}
                  onChange={() => setPaymentMethod('khqr')}
                  className="mt-1 accent-[#2E2620]"
                />
                <span className="text-xl">📱</span>
                <div>
                  <p className="text-[15px] font-semibold text-[#2E2620]">KHQR</p>
                  <p className="text-[13px] text-[#7A7067]">
                    ស្កេនបង់តាមធនាគារកម្ពុជាណាមួយ
                  </p>
                </div>
              </label>

              {/* Option 2: ABA Pay */}
              <label
                onClick={() => setPaymentMethod('aba')}
                className={`flex items-start gap-3.5 p-4 rounded-[4px] border cursor-pointer transition-colors ${
                  paymentMethod === 'aba'
                    ? 'border-[#2E2620] bg-[#FFFDF9] shadow-sm'
                    : 'border-[#E7DDD0] bg-[#FAF5EE] hover:bg-[#FFFDF9]'
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === 'aba'}
                  onChange={() => setPaymentMethod('aba')}
                  className="mt-1 accent-[#2E2620]"
                />
                <span className="text-xl">🏛️</span>
                <div>
                  <p className="text-[15px] font-semibold text-[#2E2620]">ABA Pay</p>
                  <p className="text-[13px] text-[#7A7067]">
                    បង់តាមកម្មវិធី ABA Mobile
                  </p>
                </div>
              </label>

              {/* Option 3: COD */}
              <label
                onClick={() => setPaymentMethod('cod')}
                className={`flex items-start gap-3.5 p-4 rounded-[4px] border cursor-pointer transition-colors ${
                  paymentMethod === 'cod'
                    ? 'border-[#2E2620] bg-[#FFFDF9] shadow-sm'
                    : 'border-[#E7DDD0] bg-[#FAF5EE] hover:bg-[#FFFDF9]'
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === 'cod'}
                  onChange={() => setPaymentMethod('cod')}
                  className="mt-1 accent-[#2E2620]"
                />
                <span className="text-xl">💵</span>
                <div>
                  <p className="text-[15px] font-semibold text-[#2E2620]">បង់ពេលទទួលទំនិញ</p>
                  <p className="text-[13px] text-[#7A7067]">
                    បង់ប្រាក់ពេលអ្នកទទួលទំនិញ
                  </p>
                </div>
              </label>
            </div>
          </div>

          {/* Order Summary Box matching Screenshot 18 */}
          <div className="bg-[#FFFDF9] border border-[#E7DDD0] rounded-[4px] p-5 space-y-4">
            <h3 className="font-display text-[18px] font-semibold text-[#2E2620]">
              សេចក្តីសង្ខេប
            </h3>

            {/* Items */}
            <div className="space-y-3 pb-3 border-b border-[#E7DDD0]">
              {cart.map(({ product, qty, size }) => (
                <div key={product.id} className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-[#F1E9DC] rounded-[4px] overflow-hidden shrink-0">
                    <img src={product.image} alt={product.name.km} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[13.5px] font-medium text-[#2E2620]">
                      {product.name.km}
                    </p>
                    <p className="text-[12px] text-[#8A8077]">
                      {size ? `${size} × ` : ''}{qty}
                    </p>
                  </div>
                  <span className="text-[14px] font-bold text-[#2E2620]">
                    {formatPrice((product.discountPrice ?? product.price) * qty)}
                  </span>
                </div>
              ))}
            </div>

            {/* Calculations */}
            <div className="space-y-2 text-[14px]">
              <div className="flex justify-between text-[#7A7067]">
                <span>សរុប</span>
                <span className="font-medium text-[#2E2620]">{formatPrice(cartSubtotal)}</span>
              </div>
              <div className="flex justify-between text-[#7A7067]">
                <span>ការដឹកជញ្ជូន</span>
                <span className="font-medium text-[#2E2620]">
                  {shippingFee === 0 ? 'FREE' : formatPrice(shippingFee)}
                </span>
              </div>
              <div className="flex justify-between text-[16px] font-bold text-[#2E2620] pt-2 border-t border-[#E7DDD0]">
                <span>សរុប</span>
                <span>{formatPrice(grandTotal)}</span>
              </div>
            </div>
          </div>

          {/* Submit Button matching Screenshot 18 */}
          <button
            type="submit"
            className="w-full bg-[#2E2620] text-[#FAF5EE] py-4 rounded-full font-semibold text-[15px] hover:bg-[#3D332B] transition-transform active:scale-[0.99] shadow-sm"
          >
            បញ្ជាក់ការបញ្ជាទិញ · {formatPrice(grandTotal)}
          </button>

        </form>
      </div>
    </div>
  );
}

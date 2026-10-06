'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useShop } from '@/context/ShopContext';

export default function StoryCinema() {
  const { t } = useShop();
  const [currentStep, setCurrentStep] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const steps = [
    {
      num: '01',
      title: t('cinema.k1t') || 'សារធាតុពីធម្មជាតិ',
      desc: t('cinema.k1b') || 'ប៉ែកឆូយ ខ្ញី និងទឹកស្រូវ — ជ្រើសរើសដោយផ្ទាល់ពីកសិដ្ឋានក្នុងស្រុក។',
      image: '/images/7074420d-6c0e-47e3-978a-75bae22ff8d8.png',
    },
    {
      num: '02',
      title: t('cinema.k2t') || 'រុក្ខជាតិ ទៅជាក្រែម',
      desc: t('cinema.k2b') || 'រាល់រូបមន្តត្រូវសាកល្បងលើស្បែកពិត ក្នុងអាកាសធាតុក្តៅសើមរបស់កម្ពុជា។',
      image: '/images/aa0d74a7-1c15-4d5f-9d37-455a58d44910.png',
    },
    {
      num: '03',
      title: t('cinema.k3t') || 'ការពាររាល់ថ្ងៃ',
      desc: t('cinema.k3b') || 'ការការពារពីកម្តៅថ្ងៃ គឺជាជំហានដែលមានឥទ្ធិពលបំផុតនៃរបាំងថែស្បែក។',
      image: '/images/abe00f01-b498-4ced-9d32-8405c0db4c17.png',
    },
  ];

  // Auto-advance step every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [steps.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 40) {
      // swipe left -> next
      setCurrentStep((prev) => (prev + 1) % steps.length);
    } else if (diff < -40) {
      // swipe right -> prev
      setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
    }
    touchStartX.current = null;
  };

  const active = steps[currentStep];

  return (
    <section
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-full min-h-[580px] sm:min-h-[640px] overflow-hidden my-8 select-none cursor-grab active:cursor-grabbing"
    >
      {/* Background Image Carousel with smooth cross-fade */}
      {steps.map((s, idx) => (
        <div
          key={s.num}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentStep ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={s.image}
            alt={s.title}
            className="w-full h-full object-cover transition-transform duration-10000 ease-out scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/45" />
        </div>
      ))}

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-8 py-12 flex flex-col justify-between min-h-[580px] sm:min-h-[640px]">
        
        {/* Top Header matching screenshots */}
        <div className="text-white space-y-1">
          <p className="text-[12.5px] uppercase tracking-widest text-[#FAF5EE]/80 font-semibold font-khmer">
            {t('cinema.eyebrow') || 'ផ្សំពីសារធាតុពិត'}
          </p>
          <h2 className="font-display text-[28px] sm:text-[38px] font-semibold text-white tracking-tight font-khmer">
            {t('cinema.title') || 'ពីដី ទៅដល់ស្បែកអ្នក'}
          </h2>
        </div>

        {/* Bottom Step Card matching screenshots */}
        <div className="max-w-xl text-white space-y-4 pb-4">
          <div className="space-y-1.5 transition-all duration-300">
            <span className="text-[13px] font-bold text-[#A9573B] tracking-wider block">
              {active.num}
            </span>
            <h3 className="text-[24px] sm:text-[28px] font-semibold text-white font-khmer leading-snug">
              {active.title}
            </h3>
            <p className="text-[14px] sm:text-[15px] text-[#FAF5EE]/90 leading-relaxed font-khmer max-w-lg">
              {active.desc}
            </p>
          </div>

          {/* Stepper indicator matching screenshots 5, 9, 10 */}
          <div className="flex items-center gap-4 pt-2">
            <span className="text-[13px] font-semibold tracking-wider text-white">
              {active.num} <span className="text-white/50">/ 03</span>
            </span>

            {/* Clickable progress bars */}
            <div className="flex-1 max-w-[200px] flex items-center gap-2">
              {steps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentStep(i)}
                  className="h-1.5 flex-1 rounded-full overflow-hidden bg-white/30 transition-all cursor-pointer p-0 border-0"
                  aria-label={`Go to step ${i + 1}`}
                >
                  <div
                    className={`h-full bg-white transition-all duration-500 ${
                      i === currentStep ? 'w-full' : i < currentStep ? 'w-full' : 'w-0'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

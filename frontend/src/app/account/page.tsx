'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function AccountPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (name) {
      setLoggedInUser(name);
    }
  };

  return (
    <div className="bg-[#FAF5EE] min-h-screen pb-24 md:pb-16">
      <div className="max-w-md mx-auto px-4 sm:px-6 py-12 sm:py-16">
        
        {/* Title matching Screenshot 19 */}
        <h1 className="font-display text-[32px] sm:text-[38px] font-semibold text-[#2E2620] tracking-tight mb-6">
          {loggedInUser ? 'My Account' : 'Log in'}
        </h1>

        {loggedInUser ? (
          <div className="bg-[#FFFDF9] border border-[#E7DDD0] p-6 rounded-[4px] space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#E7DDD0] text-[#2E2620] text-2xl font-bold flex items-center justify-center">
              {loggedInUser[0].toUpperCase()}
            </div>
            <div>
              <h2 className="text-[18px] font-semibold text-[#2E2620]">{loggedInUser}</h2>
              <p className="text-[13.5px] text-[#7A7067]">{email || 'member@weyoung.skin'}</p>
            </div>
            <div className="pt-4 border-t border-[#E7DDD0]">
              <button
                onClick={() => setLoggedInUser(null)}
                className="text-[13.5px] font-semibold text-[#A9573B] hover:underline"
              >
                Log out
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleLogin} className="space-y-4">
            
            {/* Notice box matching Screenshot 19 */}
            <div className="bg-[#F1E9DC] p-4 rounded-[4px] text-[13.5px] text-[#5C5248] leading-relaxed">
              Sign-in in this version is stored on your device. Full account integration comes later.
            </div>

            {/* Name Input */}
            <div>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="w-full bg-[#FFFDF9] border border-[#E7DDD0] rounded-[4px] px-3.5 py-3 text-[14px] text-[#2E2620] focus:border-[#A9573B] outline-none"
              />
            </div>

            {/* Email Input */}
            <div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full bg-[#FFFDF9] border border-[#E7DDD0] rounded-[4px] px-3.5 py-3 text-[14px] text-[#2E2620] focus:border-[#A9573B] outline-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#2E2620] text-[#FAF5EE] py-3.5 rounded-full font-semibold text-[14.5px] hover:bg-[#3D332B] transition-transform active:scale-[0.99] shadow-sm"
            >
              Log in
            </button>

            {/* Footer link matching Screenshot 19 */}
            <p className="text-center text-[13.5px] text-[#7A7067] pt-2">
              No account yet?{' '}
              <button
                type="button"
                className="text-[#A9573B] font-medium hover:underline"
              >
                Create account
              </button>
            </p>

          </form>
        )}

      </div>
    </div>
  );
}

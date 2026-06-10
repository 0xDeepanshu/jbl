"use client";

import { useState } from "react";

export default function SignupCard() {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="w-full max-w-[420px] bg-[#1a1a1a] rounded-2xl p-8 md:p-10 shadow-2xl">
      <h3 className="font-oswald uppercase text-white text-2xl md:text-3xl font-bold text-center tracking-wide">
        SIGN UP
      </h3>

      <form className="mt-8 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
        <div className="relative">
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-transparent border-b border-white/20 text-white text-sm pb-3 pt-1 outline-none focus:border-[#ff5a1f] transition-colors placeholder:text-white/40"
          />
        </div>

        <div className="relative">
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-transparent border-b border-white/20 text-white text-sm pb-3 pt-1 outline-none focus:border-[#ff5a1f] transition-colors placeholder:text-white/40"
          />
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-white/60 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe((v) => !v)}
              className="accent-[#ff5a1f] w-4 h-4"
            />
            Remember Me
          </label>
          <button
            type="button"
            className="text-white/60 hover:text-white transition-colors"
          >
            Forgot Password
          </button>
        </div>

        <button
          type="submit"
          className="w-full py-3.5 rounded-full bg-[#ff5a1f] text-white text-sm font-semibold uppercase tracking-wider hover:bg-[#e04e18] transition-colors"
        >
          ORDER NOW
        </button>

        <p className="text-center text-white/50 text-xs">
          Already Have An Account?{" "}
          <button type="button" className="text-white hover:underline">
            Log In
          </button>
        </p>
      </form>
    </div>
  );
}

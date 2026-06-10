"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "./Button";
export default function SignupCard() {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="w-full max-w-[520px] rounded-2xl overflow-hidden shadow-2xl bg-[url('/bg/rectangle_bg_mostpopular.png')] bg-cover bg-center">

      <div className="p-8 md:p-10">
        <h3 className="font-oswald uppercase text-white text-2xl md:text-3xl font-bold text-center tracking-wide">
          SIGN UP
        </h3>

        <form className="mt-8 flex  flex-col gap-6" onSubmit={(e) => e.preventDefault()}>

          <div className="relative ">
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

          <Button variant="orange" className="py-3 text-xl text-center flex items-center justify-center self-center" width={190}>
            Order Now
          </Button>

          <p className="text-center text-white/50 text-xs">
            Already Have An Account?{" "}
            <button type="button" className="text-white hover:underline">
              Log In
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSignin = async (e:React.FormEvent) => {
    e.preventDefault()
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.error("failed to sign up", error);
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="w-300 flex justify-center items-center">
      <form
        className="flex flex-col items-basline justify-center mt-20 bg-gray-800 text-white"
        onSubmit={handleSignin}
      >
        <label>enter your email</label>
        <input className="bg-white text-black" type="email" onChange={(e) => setEmail(e.target.value)} />
        <label>enter your password</label>
        <input className="bg-white text-black" type="password" onChange={(e) => setPassword(e.target.value)} />
        <button className="w-full bg-red-400 text-black text-xl  hover:bg-blue-200" type="submit">sign in</button>
      </form>
    </div>
  );
}

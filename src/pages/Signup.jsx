import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = e => {
    e.preventDefault();
    alert("Signup submitted! (UI-only)");
  };

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center px-6">
        <form onSubmit={handleSubmit} className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md space-y-4">
          <h1 className="text-3xl font-heading text-primary text-center">Sign Up</h1>
          <input type="text" placeholder="Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"/>
          <input type="email" placeholder="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"/>
          <input type="password" placeholder="Password" value={form.password} onChange={e => setForm({...form, password: e.target.value})} className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"/>
          <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg hover:scale-105 transform transition">Sign Up</button>
        </form>
      </main>
      <Footer />
    </div>
  )
}

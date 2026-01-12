import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center text-center space-y-6 px-6">
        <h1 className="text-5xl font-heading text-primary">Welcome to Nimbus App</h1>
        <p className="text-gray-700 text-lg">A modern SaaS template with Home, Signup, Login, and Dashboard pages.</p>
        <div className="space-x-4">
          <a href="/signup" className="px-6 py-3 bg-primary text-white rounded-lg hover:scale-105 transform transition">Get Started</a>
          <a href="/login" className="px-6 py-3 bg-secondary text-white rounded-lg hover:scale-105 transform transition">Login</a>
        </div>
      </main>
      <Footer />
    </div>
  )
}

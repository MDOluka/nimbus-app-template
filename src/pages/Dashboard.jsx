import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Dashboard() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-heading text-primary mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow hover:scale-105 transform transition">
            <h2 className="font-heading text-xl mb-2">Total Users</h2>
            <p className="text-gray-700 text-3xl">1,234</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:scale-105 transform transition">
            <h2 className="font-heading text-xl mb-2">Active Projects</h2>
            <p className="text-gray-700 text-3xl">56</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:scale-105 transform transition">
            <h2 className="font-heading text-xl mb-2">Revenue</h2>
            <p className="text-gray-700 text-3xl">$12.3K</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

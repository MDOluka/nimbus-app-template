export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <div className="text-2xl font-heading text-primary">Nimbus App</div>
      <div className="hidden md:flex space-x-4">
        <a href="/" className="text-gray-700 hover:text-primary transition">Home</a>
        <a href="/signup" className="text-gray-700 hover:text-primary transition">Signup</a>
        <a href="/login" className="text-gray-700 hover:text-primary transition">Login</a>
      </div>
    </nav>
  )
}

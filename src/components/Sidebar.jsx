export default function Sidebar() {
  return (
    <aside className="bg-white shadow-md w-64 p-6 hidden md:block">
      <nav className="flex flex-col space-y-4">
        <a href="/dashboard" className="text-gray-700 hover:text-primary transition">Dashboard</a>
        <a href="/" className="text-gray-700 hover:text-primary transition">Home</a>
        <a href="/signup" className="text-gray-700 hover:text-primary transition">Signup</a>
        <a href="/login" className="text-gray-700 hover:text-primary transition">Login</a>
      </nav>
    </aside>
  )
}

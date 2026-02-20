export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-blue-600 font-bold text-lg">
          AutomateFlow AI
        </h1>

        <div className="space-x-8 text-gray-600 font-medium hidden md:flex">
          <a href="#services" className="hover:text-blue-600 transition">
            Features
          </a>
          <a href="#pricing" className="hover:text-blue-600 transition">
            Pricing
          </a>
          <a href="#contact" className="hover:text-blue-600 transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

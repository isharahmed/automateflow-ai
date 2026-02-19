export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">

        <div>
          <h3 className="text-white text-xl font-semibold mb-4">
            AutomateFlow AI
          </h3>
          <p className="text-gray-400">
            We build intelligent AI automation systems that streamline
            operations, increase conversions, and scale your business.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-white transition">Services</a></li>
            <li><a href="#" className="hover:text-white transition">Pricing</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <p>Email: hello@automateflow.ai</p>
          <p className="mt-2">© {new Date().getFullYear()} AutomateFlow AI</p>
        </div>

      </div>
    </footer>
  )
}

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-100 py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
          Automate Your Customer Support
          <br />
          & Lead Flow with AI
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          We design and implement intelligent automation systems that capture
          leads, respond to customers instantly, and integrate seamlessly with
          your CRM.
        </p>

        <button className="mt-10 bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg rounded-xl text-white font-medium transition duration-300 shadow-lg">
          Book Free Strategy Call
        </button>
      </div>
    </section>
  )
}

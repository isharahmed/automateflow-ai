export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "E-commerce Founder",
      feedback:
        "AutomateFlow AI transformed our customer support. We reduced response time by 80% and increased lead conversions within the first month.",
    },
    {
      name: "Daniel Roberts",
      role: "Marketing Agency Owner",
      feedback:
        "The automation system completely streamlined our lead handling process. We now close more clients without hiring extra staff.",
    },
    {
      name: "Priya Sharma",
      role: "SaaS Startup Co-founder",
      feedback:
        "Their AI integration saved our team countless hours every week. The ROI was clear within weeks of implementation.",
    },
  ]

  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            What Our Clients Say
          </h2>
          <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
            Businesses trust us to automate smarter, scale faster, and improve customer experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-gray-50 border border-gray-200 hover:shadow-xl transition duration-300"
            >
              <p className="text-gray-700 leading-relaxed mb-6">
                "{testimonial.feedback}"
              </p>
              <h4 className="font-semibold text-gray-900">
                {testimonial.name}
              </h4>
              <p className="text-sm text-gray-500">
                {testimonial.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

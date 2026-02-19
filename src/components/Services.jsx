export default function Services() {
  const services = [
    {
      title: "AI Customer Support Chatbot",
      description:
        "24/7 intelligent chatbot that answers customer questions instantly and reduces support workload.",
    },
    {
      title: "Lead Capture Automation",
      description:
        "Automatically capture, qualify, and route leads directly into your CRM without manual effort.",
    },
    {
      title: "Email Follow-up Automation",
      description:
        "Smart automated follow-ups that nurture leads and increase conversions.",
    },
    {
      title: "CRM Integration",
      description:
        "Seamless integration with your existing CRM to centralize and streamline operations.",
    },
    {
      title: "Monthly Optimisation & Support",
      description:
        "Continuous monitoring, improvements, and system optimisation to maximise performance.",
    },
  ]

  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our AI Automation Services
          </h2>
          <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
            We build and manage intelligent automation systems designed to
            increase efficiency, capture more leads, and scale your operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

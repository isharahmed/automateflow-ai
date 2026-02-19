export default function HowItWorks() {
  const steps = [
    {
      title: "1. Strategy & Planning",
      description:
        "We analyse your business processes, lead flow, and customer journey to design the optimal automation system.",
    },
    {
      title: "2. Build & Integration",
      description:
        "We develop and integrate AI chatbots, automation workflows, and CRM systems tailored to your needs.",
    },
    {
      title: "3. Optimise & Scale",
      description:
        "We monitor performance, refine automations, and continuously optimise to maximise conversions and efficiency.",
    },
  ]

  return (
    <section className="py-28 px-6 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            How It Works
          </h2>
          <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
            A simple 3-step system to transform your customer support and lead generation with AI.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-10 rounded-3xl bg-gray-50 border border-gray-200 hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

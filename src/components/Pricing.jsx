export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$997",
      description: "Perfect for small businesses starting with automation.",
      features: [
        "AI Chatbot Setup",
        "Basic Lead Capture",
        "CRM Integration",
        "2 Weeks Support",
      ],
      highlighted: false,
    },
    {
      name: "Growth",
      price: "$2,997",
      description: "Best for scaling businesses ready to automate fully.",
      features: [
        "Advanced AI Chatbot",
        "Full Lead Automation",
        "Email Follow-up System",
        "CRM Integration",
        "Monthly Optimisation",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For high-volume businesses needing full automation.",
      features: [
        "Custom AI Systems",
        "Multi-channel Automation",
        "Advanced CRM Workflows",
        "Priority Support",
      ],
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="py-28 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Pricing Plans
          </h2>
          <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
            Simple pricing designed to match your business growth stage.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-10 rounded-3xl border ${
                plan.highlighted
                  ? "bg-white border-blue-600 shadow-xl"
                  : "bg-white border-gray-200"
              } transition duration-300`}
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {plan.name}
              </h3>

              <p className="text-4xl font-extrabold mb-4 text-blue-600">
                {plan.price}
              </p>

              <p className="text-gray-600 mb-6">
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8 text-gray-700">
                {plan.features.map((feature, i) => (
                  <li key={i}>✔ {feature}</li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-medium transition duration-300 ${
                  plan.highlighted
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

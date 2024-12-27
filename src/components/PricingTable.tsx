// File: components/PricingTable.tsx

export default function PricingTable() {
    const plans = [
      {
        name: "Simple Start",
        price: "$9/mo",
        originalPrice: "$18",
        description: "50% off for 3 months",
        features: ["Up to 2 accountant seats", "1 user, no shared access"],
        current: true,
      },
      {
        name: "Essentials",
        price: "$13.50/mo",
        originalPrice: "$27",
        description: "50% off for 3 months",
        features: ["Up to 2 accountant seats", "Up to 3, full-access users"],
      },
      {
        name: "Plus",
        price: "$19/mo",
        originalPrice: "$38",
        description: "50% off for 3 months",
        features: ["Up to 2 accountant seats", "Up to 5, full-access users"],
      },
      {
        name: "Advanced",
        price: "$38/mo",
        originalPrice: "$76",
        description: "50% off for 3 months",
        features: ["Up to 3 accountant seats", "Up to 25 full-access, custom users"],
      },
    ];
  
    return (
      <div className=" py-12 px-4 sm:px-6 lg:px-8">
       
  
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-lg bg-white p-6 ${
                plan.current ? "border-2 border-orange-500" : ""
              }`}
            >
              <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
              <p className="mt-4">
                <span className="line-through text-gray-500">{plan.originalPrice}</span>
                <span className="text-3xl font-bold text-orange-500 ml-2">{plan.price}</span>
              </p>
              <p className="text-sm text-gray-500 mt-2">{plan.description}</p>
              <button
                className={`mt-6 w-full px-4 py-2 rounded-md ${
                  plan.current
                    ? "bg-gray-900 text-white"
                    : "bg-orange-500 text-white hover:bg-orange-600"
                }`}
              >
                {plan.current ? "Stay on plan" : "Choose plan"}
              </button>
              <ul className="mt-6 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <span className="mr-2 text-green-500">✓</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
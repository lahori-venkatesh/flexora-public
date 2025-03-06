
import { Briefcase, DollarSign, Star, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "No Commission Fees",
    description: "Keep 100% of your earnings. We don't take any cut from your projects.",
    color: "bg-gradient-to-br from-blue-50 to-blue-100",
    iconColor: "text-blue-500",
  },
  {
    icon: Briefcase,
    title: "Unlimited Projects",
    description: "Post as many projects as you need, completely free of charge.",
    color: "bg-gradient-to-br from-purple-50 to-purple-100",
    iconColor: "text-purple-500",
  },
  {
    icon: Star,
    title: "Premium Features",
    description: "Unlock advanced features with our affordable premium plans.",
    color: "bg-gradient-to-br from-amber-50 to-amber-100",
    iconColor: "text-amber-500",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Your transactions are protected with our secure payment system.",
    color: "bg-gradient-to-br from-green-50 to-green-100",
    iconColor: "text-green-500",
  },
];

export const Features = () => {
  return (
    <div className="py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-purple-50" />
      
      {/* Decorative circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
        <div className="absolute top-1/3 right-0 w-48 h-48 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
        <div className="absolute bottom-0 left-1/3 w-36 h-36 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Why Choose Flexora?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform provides the tools you need to succeed in the freelance economy, without the usual fees and restrictions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl group backdrop-blur-sm w-full max-w-xs mx-auto"
            >
              <div className={`p-8 bg-white/80 h-full flex flex-col border border-blue-400 hover:border-gray-200 rounded-xl`}>
                <div className={`w-14 h-14 rounded-lg ${feature.color} shadow-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-gray-100/50`}>
                  <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 font-body">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

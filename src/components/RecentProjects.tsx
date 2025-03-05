
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Calendar, ArrowUpRight, Tag, DollarSign } from "lucide-react";

const projects = [
  {
    title: "E-commerce Website Development",
    category: "Web Development",
    budget: "₹3,000 - ₹5,000",
    deadline: "30 days",
    description: "Looking for an experienced developer to build a modern e-commerce website using React and Node.js.",
    color: "bg-blue-50 border-blue-100",
    categoryColor: "bg-blue-100 text-blue-600",
  },
  {
    title: "Mobile App UI/UX Design",
    category: "Design",
    budget: "₹1,500 - ₹2,500",
    deadline: "15 days",
    description: "Need a talented designer to create intuitive and beautiful UI/UX for a fitness tracking app.",
    color: "bg-purple-50 border-purple-100",
    categoryColor: "bg-purple-100 text-purple-600",
  },
  {
    title: "Content Writing for Tech Blog",
    category: "Writing",
    budget: "₹500 - ₹1,000",
    deadline: "7 days",
    description: "Seeking a technical writer to create engaging blog posts about emerging technologies.",
    color: "bg-amber-50 border-amber-100",
    categoryColor: "bg-amber-100 text-amber-600",
  },
];

export const RecentProjects = () => {
  const navigate = useNavigate();

  return (
    <div className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-primary bg-clip-text text-transparent">Recent Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Browse through some of our recent projects and find opportunities that match your skills and interests.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`${project.color} border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
            >
              <div className="p-6 h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <span className={`inline-block ${project.categoryColor} px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1.5`}>
                    <Tag className="w-3.5 h-3.5" />
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-6 font-body flex-grow">{project.description}</p>
                <div className="flex justify-between items-center text-sm border-t border-gray-200 pt-4 mt-auto">
                  <div className="flex items-center gap-1.5 font-semibold text-gray-700">
                    <DollarSign className="w-4 h-4 text-gray-500" />
                    <span>{project.budget}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{project.deadline}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button 
            onClick={() => navigate("/signup")}
            className="bg-gradient-to-r from-indigo-600 to-primary hover:from-indigo-700 hover:to-blue-600 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all group"
          >
            Join Now to Send Proposals
            <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};

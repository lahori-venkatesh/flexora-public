
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-24 sm:py-32">
      {/* Abstract shapes background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'url("/lovable-uploads/612903fa-2447-44be-a012-b49618cf0f3d.png")',
        backgroundSize: '800px',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat',
        mixBlendMode: 'multiply'
      }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-gray-600">No commission freelancing platform</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-primary to-purple-600 bg-clip-text text-transparent">
            Find the Right Talent or Project
            <span className="block mt-2">Without Commission</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 font-body max-w-2xl mx-auto">
            Connect with top freelancers and clients. No hidden fees, just pure value for your business and career growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => {
                console.log('Navigating to post-project page');
                navigate("/post-project");
              }} 
              className="bg-indigo-950 hover:bg-indigo-900 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all group"
            >
              Post a Project for Free
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              onClick={() => navigate("/browse-projects")} 
              variant="outline" 
              className="px-8 py-6 text-lg border-primary text-primary hover:bg-primary hover:text-white rounded-xl transition-all duration-300"
            >
              Explore Freelancers
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

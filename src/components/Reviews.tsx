
import { MessageSquareQuote } from "lucide-react";
import { reviews } from "@/data/reviews";
import { ScrollingReviewRow } from "./reviews/ScrollingReviewRow";

export const Reviews = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 opacity-80"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <div className="inline-block mb-3">
            <MessageSquareQuote className="h-10 w-10 text-primary mx-auto mb-2 opacity-80" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied freelancers and clients who have transformed their work experience with TalentHire
          </p>
        </div>
        
        {/* First row - scrolling right */}
        <div className="mb-8">
          <ScrollingReviewRow 
            reviews={reviews} 
            direction="right" 
            variant="primary" 
          />
        </div>
        
        {/* Second row - scrolling left */}
        <div>
          <ScrollingReviewRow 
            reviews={reviews} 
            direction="left" 
            variant="secondary" 
          />
        </div>
      </div>
    </section>
  );
};

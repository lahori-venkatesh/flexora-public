
import { useEffect, useRef, useState } from "react";
import { ReviewCard } from "./ReviewCard";
import { Review } from "@/data/reviews";

interface ScrollingReviewRowProps {
  reviews: Review[];
  direction: "right" | "left";
  variant?: "primary" | "secondary";
}

export const ScrollingReviewRow = ({ 
  reviews, 
  direction,
  variant = "primary" 
}: ScrollingReviewRowProps) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [rowWidth, setRowWidth] = useState(0);
  
  // Initialize the scroll position
  useEffect(() => {
    if (rowRef.current) {
      const width = rowRef.current.scrollWidth / 2;
      setRowWidth(width);
      
      // If scrolling left, start from the middle
      if (direction === "left" && rowWidth > 0) {
        rowRef.current.scrollLeft = width;
      }
    }
  }, [direction, rowWidth]);
  
  // Animate the scroll
  useEffect(() => {
    const animateScroll = () => {
      if (rowRef.current && rowWidth > 0) {
        // Calculate scroll increment based on direction
        const scrollIncrement = direction === "right" ? 0.5 : -0.5;
        
        // Update scroll position
        rowRef.current.scrollLeft += scrollIncrement;
        
        // Handle reset logic based on direction
        if (direction === "right" && rowRef.current.scrollLeft >= rowWidth) {
          rowRef.current.scrollLeft = 0;
        } else if (direction === "left" && rowRef.current.scrollLeft <= 0) {
          rowRef.current.scrollLeft = rowWidth;
        }
      }
    };
    
    // Only start animation if width is calculated
    if (rowWidth > 0) {
      const interval = setInterval(animateScroll, 20);
      return () => clearInterval(interval);
    }
  }, [rowWidth, direction]);

  return (
    <div className="relative overflow-hidden">
      <div 
        ref={rowRef}
        className="flex gap-6 py-4 w-max select-none"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {[...reviews, ...reviews].map((review, index) => (
          <div
            key={`${direction}-${review.id}-${index}`} 
            className="w-80 flex-shrink-0 transition-all duration-300 transform hover:-translate-y-2"
          >
            <ReviewCard review={review} variant={variant} />
          </div>
        ))}
      </div>
    </div>
  );
};

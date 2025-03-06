
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
  const [duplicatedReviews, setDuplicatedReviews] = useState<Review[]>([]);
  
  // Set up duplicated reviews for infinite scroll
  useEffect(() => {
    // Triple the reviews to ensure we have enough content for the scroll effect
    setDuplicatedReviews([...reviews, ...reviews, ...reviews]);
  }, [reviews]);

  // Handle the scrolling animation with CSS animation instead of JS
  useEffect(() => {
    if (!rowRef.current || duplicatedReviews.length === 0) return;
    
    // Set initial position for left scroll
    if (direction === "left" && rowRef.current) {
      const contentWidth = rowRef.current.scrollWidth;
      const containerWidth = rowRef.current.clientWidth;
      // Set initial scroll position in the middle for seamless loop
      rowRef.current.scrollLeft = (contentWidth - containerWidth) / 2;
    }
  }, [duplicatedReviews, direction]);

  if (duplicatedReviews.length === 0) return null;

  // Determine animation speed based on direction
  const animationStyle = {
    animation: `scroll-${direction} 40s linear infinite`,
  };

  return (
    <div className="relative overflow-hidden">
      <div 
        ref={rowRef}
        className="flex gap-6 py-4 w-max overflow-hidden select-none"
        style={{ 
          scrollbarWidth: "none", // Hide scrollbar for Firefox
          msOverflowStyle: "none", // Hide scrollbar for IE/Edge
          ...animationStyle
        }}
      >
        {duplicatedReviews.map((review, index) => (
          <div
            key={`${direction}-${review.id}-${index}`} 
            className="w-80 flex-shrink-0 transition-all duration-300 transform hover:-translate-y-2"
          >
            <ReviewCard review={review} variant={variant} />
          </div>
        ))}
      </div>
      
      {/* Add keyframe animations and scrollbar hiding */}
      <style dangerouslySetInnerHTML={{
        __html: `
          /* Hide scrollbar for Chrome, Safari and Opera */
          div::-webkit-scrollbar {
            display: none;
          }
          
          /* Define scroll animations */
          @keyframes scroll-right {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-1 * (var(--card-width) + 1.5rem) * ${reviews.length})); }
          }
          
          @keyframes scroll-left {
            0% { transform: translateX(calc(-1 * (var(--card-width) + 1.5rem) * ${reviews.length})); }
            100% { transform: translateX(0); }
          }
          
          /* Set card width variable */
          :root {
            --card-width: 20rem; /* 20rem = w-80 */
          }
        `
      }} />
    </div>
  );
};

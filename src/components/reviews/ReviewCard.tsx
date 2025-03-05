
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Review } from "@/data/reviews";

interface ReviewCardProps {
  review: Review;
  variant?: "primary" | "secondary";
}

export const ReviewCard = ({ review, variant = "primary" }: ReviewCardProps) => {
  return (
    <Card className="h-full border border-gray-100 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <Avatar className={`h-12 w-12 ring-2 ring-${variant}/10 shadow-md`}>
            <AvatarImage src={review.avatar} alt={review.name} />
            <AvatarFallback className={`bg-gradient-to-br from-${variant}/20 to-${variant === "primary" ? "secondary" : "primary"}/20 text-${variant} font-medium`}>
              {review.name[0]}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <h3 className="font-semibold text-lg text-neutral-dark">{review.name}</h3>
            <p className="text-sm text-gray-500 font-medium">{review.role}</p>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <p className="text-gray-600 leading-relaxed italic">&ldquo;{review.review}&rdquo;</p>
          <div className="flex gap-0.5">
            {Array.from({ length: review.rating }).map((_, i) => (
              <Star
                key={i}
                className="h-5 w-5 text-yellow-400 fill-yellow-400"
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

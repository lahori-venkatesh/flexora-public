import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Rocket, Crown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function FreelancerUpgradePrompt() {
  const navigate = useNavigate();

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-primary" />
            Basic Plan
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-sm text-muted-foreground">
            Submit up to 10 proposals per month
          </p>
          <Button variant="outline" className="w-full">
            Current Plan
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Rocket className="h-5 w-5 text-primary" />
            Professional
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-sm text-muted-foreground">
            Unlimited proposals + Featured profile for ₹3,999/month
          </p>
          <Button 
            className="w-full"
            onClick={() => navigate("/freelancer-pricing")}
          >
            Upgrade Now
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Crown className="h-5 w-5 text-primary" />
            Business
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-sm text-muted-foreground">
            All Pro features + Dedicated account manager for ₹7,999/month
          </p>
          <Button 
            className="w-full"
            onClick={() => navigate("/freelancer-pricing")}
          >
            Upgrade Now
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
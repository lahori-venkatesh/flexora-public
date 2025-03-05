
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, Users, UserCheck } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export function UpgradePrompt() {
  const isMobile = useIsMobile();
  
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base md:text-lg">
            <Users className="h-5 w-5 text-primary" />
            Basic Plan
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-sm text-muted-foreground">
            View up to 4 freelancer contact details per project for free
          </p>
          <Button variant="outline" className="w-full h-12 md:h-10">
            Current Plan
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base md:text-lg">
            <DollarSign className="h-5 w-5 text-primary" />
            Premium Access
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-sm text-muted-foreground">
            Unlimited access to freelancer contact details for ₹1,999/project
          </p>
          <Button className="w-full text-white h-12 md:h-10">
            Upgrade Now
          </Button>
        </CardContent>
      </Card>

      <Card className="sm:col-span-2 lg:col-span-1">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base md:text-lg">
            <UserCheck className="h-5 w-5 text-primary" />
            Managed
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-sm text-muted-foreground">
            Unlimited access + dedicated project manager for ₹4,999/project
          </p>
          <Button className="w-full text-white h-12 md:h-10">
            Upgrade Now
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";

const ClientPricing = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handlePurchase = (plan: string) => {
    console.log(`Selected plan: ${plan}`);
    toast({
      title: "Test Purchase Successful",
      description: `You've selected the ${plan} plan. This is a test implementation.`,
    });
    navigate("/client/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto py-16 px-4 mt-16">
        <h1 className="text-4xl font-bold text-center mb-4">Client Pricing Plans</h1>
        <p className="text-muted-foreground text-center mb-12">Choose the perfect plan for your hiring needs</p>
        
        <div className="grid md:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Basic</CardTitle>
            <CardDescription>For small projects</CardDescription>
            <div className="text-3xl font-bold mt-4">Free</div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {[
                "Post unlimited projects",
                "View up to 4 freelancer contacts per project",
                "Basic support"
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" onClick={() => handlePurchase("Basic")}>
              Get Started
            </Button>
          </CardFooter>
        </Card>

        <Card className="border-primary">
          <CardHeader>
            <CardTitle>Premium Access</CardTitle>
            <CardDescription>For growing businesses</CardDescription>
            <div className="text-3xl font-bold mt-4">₹1,999<span className="text-lg font-normal">/project</span></div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {[
                "All Basic features",
                "Unlimited freelancer contacts",
                "Priority support",
                "Featured project listing"
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" onClick={() => handlePurchase("Premium")}>
              Upgrade Now
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Managed</CardTitle>
            <CardDescription>For enterprise clients</CardDescription>
            <div className="text-3xl font-bold mt-4">₹4,999<span className="text-lg font-normal">/project</span></div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {[
                "All Premium features",
                "Dedicated project manager",
                "Priority support",
                "Custom solutions",
                "Weekly progress reports"
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" onClick={() => handlePurchase("Managed")}>
              Contact Sales
            </Button>
          </CardFooter>
        </Card>
        </div>
      </div>
    </div>
  );
};

export default ClientPricing;

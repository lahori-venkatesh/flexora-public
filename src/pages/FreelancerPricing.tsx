import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
const FreelancerPricing = () => {
  const {
    toast
  } = useToast();
  const navigate = useNavigate();
  const handlePurchase = (plan: string) => {
    console.log(`Selected plan: ${plan}`);
    toast({
      title: "Test Purchase Successful",
      description: `You've selected the ${plan} plan. This is a test implementation.`
    });
    navigate("/freelancer/dashboard");
  };
  return <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto py-16 px-4 mt-16">
        <h1 className="text-4xl font-bold text-center mb-4">Freelancer Pricing Plans</h1>
        <p className="text-muted-foreground text-center mb-12">Choose the perfect plan for your freelancing career</p>
        
        <div className="grid md:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Basic</CardTitle>
            <CardDescription>For new freelancers</CardDescription>
            <div className="text-3xl font-bold mt-4">Free</div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {["Submit up to 10 proposals per month", "Basic profile features", "Community support"].map(feature => <li key={feature} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>{feature}</span>
                </li>)}
            </ul>
          </CardContent>
          <CardFooter>
            <Button onClick={() => handlePurchase("Basic")} className="w-full text-white">
              Get Started
            </Button>
          </CardFooter>
        </Card>

        <Card className="border-primary">
          <CardHeader>
            <CardTitle>Professional</CardTitle>
            <CardDescription>For serious freelancers</CardDescription>
            <div className="text-3xl font-bold mt-4">₹3,999<span className="text-lg font-normal">/month</span></div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {["Unlimited proposals", "10 client leads (direct contacts)", "Featured profile", "Priority support", "Early access to projects"].map(feature => <li key={feature} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>{feature}</span>
                </li>)}
            </ul>
          </CardContent>
          <CardFooter>
            <Button onClick={() => handlePurchase("Professional")} className="w-full text-white">
              Upgrade Now
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Business</CardTitle>
            <CardDescription>For agencies & teams</CardDescription>
            <div className="text-3xl font-bold mt-4">₹7,999<span className="text-lg font-normal">/month</span></div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {["Unlimited proposals", "20 client leads", "2 assured client meetings", "Premium profile badge", "Dedicated account manager"].map(feature => <li key={feature} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>{feature}</span>
                </li>)}
            </ul>
          </CardContent>
          <CardFooter>
            <Button onClick={() => handlePurchase("Business")} className="w-full text-white">
              Upgrade Now
            </Button>
          </CardFooter>
        </Card>
        </div>
      </div>
    </div>;
};
export default FreelancerPricing;
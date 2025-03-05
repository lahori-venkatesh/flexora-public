
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import FreelancerSignupForm from "@/components/auth/FreelancerSignupForm";
import ClientSignupForm from "@/components/auth/ClientSignupForm";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";

const SignupPage = () => {
  const [userType, setUserType] = useState<"client" | "freelancer" | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { signup, isLoading } = useAuth();

  const handleSubmit = async (formData: any) => {
    if (!userType) {
      toast({
        title: "Error",
        description: "Please select whether you want to hire freelancers or work as a freelancer.",
        variant: "destructive",
      });
      return;
    }

    try {
      // Add the role to the form data
      const userData = {
        ...formData,
        role: userType,
      };
      
      // Call the signup function from AuthContext
      await signup(userData);
      
      // Redirect based on user role
      if (userType === "freelancer") {
        navigate("/freelancer/onboarding");
      } else {
        navigate("/client/dashboard");
      }
      
    } catch (error) {
      // Error is already handled in AuthContext
      console.error("Signup error in component:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral p-4">
      <Card className="w-full max-w-md relative">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4"
          onClick={() => navigate("/")}
        >
          <X className="h-4 w-4" />
        </Button>
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>
            Sign up as a client or freelancer to get started
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>I want to...</Label>
              <RadioGroup
                value={userType || ""}
                onValueChange={(value: "client" | "freelancer") => setUserType(value)}
                className="flex flex-col space-y-1"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="client" id="client" />
                  <Label htmlFor="client">Hire Freelancers</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="freelancer" id="freelancer" />
                  <Label htmlFor="freelancer">Work as a Freelancer</Label>
                </div>
              </RadioGroup>
            </div>

            {userType === "freelancer" && (
              <FreelancerSignupForm onSubmit={handleSubmit} isLoading={isLoading} />
            )}
            
            {userType === "client" && (
              <ClientSignupForm onSubmit={handleSubmit} isLoading={isLoading} />
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignupPage;

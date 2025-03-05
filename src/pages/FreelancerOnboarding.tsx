
import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import PersonalInfo from "@/components/onboarding/PersonalInfo";
import SkillsExpertise from "@/components/onboarding/SkillsExpertise";
import WorkExperience from "@/components/onboarding/WorkExperience";
import EducationCertifications from "@/components/onboarding/EducationCertifications";
import Portfolio from "@/components/onboarding/Portfolio";
import PricingAvailability from "@/components/onboarding/PricingAvailability";
import PaymentDetails from "@/components/onboarding/PaymentDetails";
import { useNavigate } from "react-router-dom";

const steps = [
  "Personal Information",
  "Skills & Expertise",
  "Work Experience",
  "Education & Certifications",
  "Portfolio",
  "Pricing & Availability",
  "Payment Details"
];

const FreelancerOnboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    personalInfo: {},
    skills: [],
    workExperience: [],
    education: [],
    portfolio: [],
    pricing: {},
    payment: {}
  });
  const navigate = useNavigate();

  const progress = ((currentStep + 1) / steps.length) * 100;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit the form and redirect to dashboard
      console.log("Form submitted:", formData);
      navigate("/freelancer/dashboard");
    }
  };

  const handleBack = () => {
    if (currentStep === 0) {
      // Navigate back to previous page if on first step
      navigate(-1);
    } else {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = (section: string, data: any) => {
    setFormData(prev => ({
      ...prev,
      [section]: data
    }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <PersonalInfo data={formData.personalInfo} updateData={(data) => updateFormData("personalInfo", data)} />;
      case 1:
        return <SkillsExpertise data={formData.skills} updateData={(data) => updateFormData("skills", data)} />;
      case 2:
        return <WorkExperience data={formData.workExperience} updateData={(data) => updateFormData("workExperience", data)} />;
      case 3:
        return <EducationCertifications data={formData.education} updateData={(data) => updateFormData("education", data)} />;
      case 4:
        return <Portfolio data={formData.portfolio} updateData={(data) => updateFormData("portfolio", data)} />;
      case 5:
        return <PricingAvailability data={formData.pricing} updateData={(data) => updateFormData("pricing", data)} />;
      case 6:
        return <PaymentDetails data={formData.payment} updateData={(data) => updateFormData("payment", data)} />;
      default:
        return null;
    }
  };

  return (
    <div className="container max-w-3xl mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Complete Your Profile</h1>
        <Progress value={progress} className="h-2" />
        <p className="text-sm text-gray-600 mt-2">Step {currentStep + 1} of {steps.length}: {steps[currentStep]}</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        {renderStep()}
      </div>

      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={handleBack}
          disabled={false} // Removed the disabled state since we want to allow navigation back from first step
        >
          Back
        </Button>
        <Button onClick={handleNext}>
          {currentStep === steps.length - 1 ? "Complete" : "Next"}
        </Button>
      </div>
    </div>
  );
};

export default FreelancerOnboarding;

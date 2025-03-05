import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ClientSignupFormProps {
  onSubmit: (data: any) => void;
  isLoading?: boolean;
}

const ClientSignupForm = ({
  onSubmit,
  isLoading = false
}: ClientSignupFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "individual",
    companyName: "",
    website: "",
    linkedinProfile: "",
    gstin: "",
    profileImage: null as File | null,
    upiId: "",
    password: "",
    confirmPassword: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Client form submitted:", formData);
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleBusinessTypeChange = (value: string) => {
    setFormData({
      ...formData,
      businessType: value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        profileImage: e.target.files[0]
      });
    }
  };

  return <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex justify-center mb-6">
        <div className="relative">
          <Avatar className="h-24 w-24">
            <AvatarImage src={formData.profileImage ? URL.createObjectURL(formData.profileImage) : ""} />
            <AvatarFallback>Upload</AvatarFallback>
          </Avatar>
          <Input type="file" accept="image/*" onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" aria-label="Upload profile picture" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="name">Full Name *</Label>
        <Input id="name" name="name" type="text" placeholder="John Doe" value={formData.name} onChange={handleChange} required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Business Email *</Label>
        <Input id="email" name="email" type="email" placeholder="name@company.com" value={formData.email} onChange={handleChange} required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number *</Label>
        <Input id="phone" name="phone" type="tel" placeholder="+91 1234567890" value={formData.phone} onChange={handleChange} required />
      </div>

      <div className="space-y-2">
        <Label>Business Type *</Label>
        <RadioGroup value={formData.businessType} onValueChange={handleBusinessTypeChange} className="flex flex-col space-y-1">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="individual" id="individual" />
            <Label htmlFor="individual">Individual</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="company" id="company" />
            <Label htmlFor="company">Company</Label>
          </div>
        </RadioGroup>
      </div>

      {formData.businessType === "company" && <>
          <div className="space-y-2">
            <Label htmlFor="companyName">Company Name *</Label>
            <Input id="companyName" name="companyName" type="text" placeholder="Company Name" value={formData.companyName} onChange={handleChange} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="gstin">GSTIN</Label>
            <Input id="gstin" name="gstin" type="text" placeholder="Enter GSTIN" value={formData.gstin} onChange={handleChange} />
          </div>
        </>}

      <div className="space-y-2">
        <Label htmlFor="website">Website (Optional)</Label>
        <Input id="website" name="website" type="url" placeholder="https://yourcompany.com" value={formData.website} onChange={handleChange} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="linkedinProfile">LinkedIn Profile *</Label>
        <Input id="linkedinProfile" name="linkedinProfile" type="url" placeholder="https://linkedin.com/in/yourprofile" value={formData.linkedinProfile} onChange={handleChange} required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="upiId">UPI ID (Optional)</Label>
        <Input id="upiId" name="upiId" type="text" placeholder="yourname@upi" value={formData.upiId} onChange={handleChange} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password *</Label>
        <Input id="password" name="password" type="password" placeholder="Create a strong password" value={formData.password} onChange={handleChange} required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirm Password *</Label>
        <Input id="confirmPassword" name="confirmPassword" type="password" placeholder="Confirm your password" value={formData.confirmPassword} onChange={handleChange} required />
      </div>

      <Button type="submit" className="w-full text-white" disabled={isLoading}>
        {isLoading ? "Creating Account..." : "Create Client Account"}
      </Button>
      <div className="text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link to="/login" className="text-primary hover:underline">
          Login
        </Link>
      </div>
    </form>;
};

export default ClientSignupForm;

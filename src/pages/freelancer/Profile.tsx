
import React, { useState } from "react";
import FreelancerDashboardLayout from "@/components/freelancer/FreelancerDashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserRound, MapPin, Globe, Calendar, Mail, Phone, Pencil } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import FreelancerProfileEdit from "@/components/freelancer/FreelancerProfileEdit";

type ExtendedUserType = {
  name: string;
  avatar: string;
  location: string;
  joinedDate: string;
  title: string;
  email: string;
  phone: string;
  website: string;
  skills: string[];
  bio: string;
  completionRate: string;
  onTimeDelivery: string;
  totalProjects: number;
  activeProjects: number;
};

const FreelancerProfile = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  
  // Provide fallback mock data since the User type doesn't have all the fields we need
  const [mockUser, setMockUser] = useState<ExtendedUserType>({
    name: user?.name || "Jane Smith",
    avatar: user?.avatar || "",
    location: "Bangalore, India",
    joinedDate: "October 2022",
    title: "Senior Frontend Developer",
    email: user?.email || "jane.smith@example.com",
    phone: "+91 9876543210",
    website: "janesmith.dev",
    skills: ["React", "TypeScript", "UI/UX", "Tailwind CSS", "Node.js"],
    bio: "Experienced frontend developer specializing in creating responsive, user-friendly interfaces. Over 5 years of experience working with React and modern JavaScript frameworks.",
    completionRate: "98%",
    onTimeDelivery: "100%",
    totalProjects: 42,
    activeProjects: 3
  });

  const handleSaveProfile = (updatedProfile: ExtendedUserType) => {
    setMockUser({
      ...mockUser,
      ...updatedProfile
    });
    setIsEditing(false);
  };

  return (
    <FreelancerDashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Profile</h1>
          {!isEditing && (
            <Button 
              variant="outline" 
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-2"
            >
              <Pencil className="h-4 w-4" />
              Edit Profile
            </Button>
          )}
        </div>

        {isEditing ? (
          <Card>
            <CardHeader>
              <CardTitle>Edit Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <FreelancerProfileEdit 
                profileData={mockUser} 
                onSave={handleSaveProfile}
                onCancel={() => setIsEditing(false)}
              />
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-1">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src={mockUser.avatar} alt={mockUser.name} />
                    <AvatarFallback className="text-lg">
                      <UserRound className="h-12 w-12 text-gray-400" />
                    </AvatarFallback>
                  </Avatar>
                  <h2 className="text-xl font-semibold">{mockUser.name}</h2>
                  <p className="text-sm text-muted-foreground mt-1">{mockUser.title}</p>
                  
                  <div className="flex items-center mt-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{mockUser.location}</span>
                  </div>
                  
                  <div className="flex items-center mt-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Member since {mockUser.joinedDate}</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 w-full mt-6">
                    <div className="text-center p-3 rounded-lg bg-gray-50">
                      <p className="text-2xl font-bold">{mockUser.totalProjects}</p>
                      <p className="text-xs text-muted-foreground">Completed Projects</p>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-gray-50">
                      <p className="text-2xl font-bold">{mockUser.activeProjects}</p>
                      <p className="text-xs text-muted-foreground">Active Projects</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 w-full mt-4">
                    <div className="text-center p-3 rounded-lg bg-gray-50">
                      <p className="text-lg font-bold">{mockUser.completionRate}</p>
                      <p className="text-xs text-muted-foreground">Completion Rate</p>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-gray-50">
                      <p className="text-lg font-bold">{mockUser.onTimeDelivery}</p>
                      <p className="text-xs text-muted-foreground">On-time Delivery</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 w-full">
                    <h3 className="text-sm font-medium mb-3 text-left">Contact Information</h3>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm">
                        <Mail className="h-4 w-4 mr-2 text-gray-500" />
                        <span>{mockUser.email}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Phone className="h-4 w-4 mr-2 text-gray-500" />
                        <span>{mockUser.phone}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Globe className="h-4 w-4 mr-2 text-gray-500" />
                        <span>{mockUser.website}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-xl">About Me</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 leading-relaxed">{mockUser.bio}</p>
                
                <div className="mt-8">
                  <h3 className="text-lg font-medium mb-4">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {mockUser.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="px-3 py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-medium mb-4">Portfolio</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((item) => (
                      <div 
                        key={item} 
                        className="aspect-video rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden"
                      >
                        <p className="text-sm text-gray-500">Portfolio Project {item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </FreelancerDashboardLayout>
  );
};

export default FreelancerProfile;

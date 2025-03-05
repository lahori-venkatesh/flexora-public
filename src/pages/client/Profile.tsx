
import React, { useState } from "react";
import { ClientDashboardLayout } from "@/components/client/ClientDashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserRound, MapPin, Calendar, Mail, Phone, Building, Briefcase, Pencil } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import ClientProfileEdit from "@/components/client/ClientProfileEdit";

type ExtendedClientUserType = {
  name: string;
  avatar: string;
  location: string;
  joinedDate: string;
  title: string;
  company: string;
  industry: string;
  email: string;
  phone: string;
  bio: string;
  projectsPosted: number;
  activeProjects: number;
  totalHires: number;
  interests: string[];
};

const ClientProfile = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  
  // Provide fallback mock data since the User type doesn't have all the fields we need
  const [mockUser, setMockUser] = useState<ExtendedClientUserType>({
    name: user?.name || "John Client",
    avatar: user?.avatar || "",
    location: "Mumbai, India",
    joinedDate: "July 2021",
    title: "Project Manager",
    company: "InnoTech Solutions",
    industry: "Software Development",
    email: user?.email || "john.client@innotech.com",
    phone: "+91 9876543210", 
    bio: "Project Manager with over 8 years of experience in the software industry. Specializing in managing development teams and delivering high-quality products on schedule and within budget.",
    projectsPosted: 23,
    activeProjects: 4,
    totalHires: 35,
    interests: ["Web Development", "Mobile Apps", "UI/UX Design", "E-commerce", "AI Solutions"]
  });

  const handleSaveProfile = (updatedProfile: ExtendedClientUserType) => {
    setMockUser({
      ...mockUser,
      ...updatedProfile
    });
    setIsEditing(false);
  };

  return (
    <ClientDashboardLayout>
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
              <ClientProfileEdit 
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
                    <Building className="h-4 w-4 mr-1" />
                    <span>{mockUser.company}</span>
                  </div>
                  
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
                      <p className="text-2xl font-bold">{mockUser.projectsPosted}</p>
                      <p className="text-xs text-muted-foreground">Projects Posted</p>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-gray-50">
                      <p className="text-2xl font-bold">{mockUser.activeProjects}</p>
                      <p className="text-xs text-muted-foreground">Active Projects</p>
                    </div>
                  </div>
                  
                  <div className="w-full mt-6 text-center p-3 rounded-lg bg-gray-50">
                    <p className="text-2xl font-bold">{mockUser.totalHires}</p>
                    <p className="text-xs text-muted-foreground">Total Freelancers Hired</p>
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
                        <Briefcase className="h-4 w-4 mr-2 text-gray-500" />
                        <span>{mockUser.industry}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-xl">About</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 leading-relaxed">{mockUser.bio}</p>
                
                <div className="mt-8">
                  <h3 className="text-lg font-medium mb-4">Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {mockUser.interests.map((interest) => (
                      <Badge key={interest} variant="secondary" className="px-3 py-1">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-medium mb-4">Recent Projects</h3>
                  <div className="space-y-4">
                    {[
                      { title: "E-commerce Website Redesign", status: "active" },
                      { title: "Mobile App Development", status: "active" },
                      { title: "Dashboard UI Implementation", status: "completed" },
                      { title: "API Integration Services", status: "completed" }
                    ].map((project, index) => (
                      <div key={index} className="p-4 rounded-lg border">
                        <div className="flex justify-between items-center">
                          <h4 className="font-medium">{project.title}</h4>
                          <Badge variant={project.status === "active" ? "default" : "secondary"}>
                            {project.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </ClientDashboardLayout>
  );
};

export default ClientProfile;

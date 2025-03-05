
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Index from "./pages/Index";
import PostProject from "./pages/PostProject";
import BrowseProjects from "./pages/BrowseProjects";
import ClientDashboard from "./pages/ClientDashboard";
import FreelancerDashboard from "./pages/FreelancerDashboard";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
import FreelancerOnboarding from "./pages/FreelancerOnboarding";
import ClientProposalManagement from "./pages/ClientProposalManagement";
import ClientPricing from "./pages/ClientPricing";
import FreelancerPricing from "./pages/FreelancerPricing";
import ProjectChat from "./pages/ProjectChat";
import About from "./pages/About";
import FreelancerProfile from "./pages/freelancer/Profile";
import ClientProfile from "./pages/client/Profile";
import React from 'react';

const queryClient = new QueryClient();

const App = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/post-project" element={<PostProject />} />
                <Route path="/browse-projects" element={<BrowseProjects />} />
                <Route path="/client/dashboard" element={<ClientDashboard />} />
                <Route path="/client/proposals" element={<ClientProposalManagement />} />
                <Route path="/freelancer/dashboard" element={<FreelancerDashboard />} />
                <Route path="/freelancer/onboarding" element={<FreelancerOnboarding />} />
                <Route path="/pricing" element={<FreelancerPricing />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/find-freelancers" element={<div>Find Freelancers Page (Coming Soon)</div>} />
                <Route path="/client-pricing" element={<ClientPricing />} />
                <Route path="/freelancer-pricing" element={<FreelancerPricing />} />
                <Route path="/project-chat/:projectId" element={<ProjectChat />} />
                <Route path="/faq" element={<div>FAQ Page (Coming Soon)</div>} />
                <Route path="/contact" element={<div>Contact Page (Coming Soon)</div>} />
                <Route path="/freelancer/profile" element={<FreelancerProfile />} />
                <Route path="/client/profile" element={<ClientProfile />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </AuthProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;

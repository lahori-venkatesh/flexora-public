import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";
import { Menu, X } from "lucide-react";
export const Header = () => {
  const navigate = useNavigate();
  const {
    user,
    logout
  } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return <header className="fixed top-0 left-0 right-0 bg-white border-b z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-14 md:h-16">
          <div className="flex items-center">
            <a href="/" className="text-xl md:text-2xl font-bold text-blue-700">
              Flexora
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <a href="/" className="text-neutral-dark hover:text-primary transition-colors text-sm lg:text-base">
              Home
            </a>
            <a href="/browse-projects" className="text-neutral-dark hover:text-primary transition-colors text-sm lg:text-base">
              Explore
            </a>
            <a href="/pricing" className="text-neutral-dark hover:text-primary transition-colors text-sm lg:text-base">
              Pricing
            </a>
            <a href="/about" className="text-neutral-dark hover:text-primary transition-colors text-sm lg:text-base">
              About Us
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors" onClick={toggleMobileMenu} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? <>
                <span className="text-sm text-blue-700">Welcome, {user.name}</span>
                <Button variant="outline" onClick={handleLogout} className="h-9 px-3 text-sm">
                  Logout
                </Button>
              </> : <>
                <Button variant="outline" onClick={() => navigate("/login")} className="h-9 px-3 text-sm text-blue-700">
                  Login
                </Button>
                <Button onClick={() => navigate("/signup")} className="h-9 px-3 text-sm bg-blue-700 hover:bg-blue-900 text-white">
                  Sign Up
                </Button>
              </>}
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && <div className="md:hidden pt-2 pb-4 border-t border-gray-100 bg-white">
            <nav className="flex flex-col space-y-3 px-2">
              <a href="/" className="py-2 px-3 text-neutral-dark hover:text-primary transition-colors hover:bg-gray-50 rounded-md">
                Home
              </a>
              <a href="/browse-projects" className="py-2 px-3 text-neutral-dark hover:text-primary transition-colors hover:bg-gray-50 rounded-md">
                Explore
              </a>
              <a href="/pricing" className="py-2 px-3 text-neutral-dark hover:text-primary transition-colors hover:bg-gray-50 rounded-md">
                Pricing
              </a>
              <a href="/about" className="py-2 px-3 text-neutral-dark hover:text-primary transition-colors hover:bg-gray-50 rounded-md">
                About Us
              </a>
              
              {/* Mobile Auth Buttons */}
              <div className="pt-2 flex flex-col space-y-2">
                {user ? <>
                    <span className="text-sm text-gray-600 px-3">Welcome, {user.name}</span>
                    <Button variant="outline" onClick={handleLogout} className="h-10 justify-center">
                      Logout
                    </Button>
                  </> : <>
                    <Button variant="outline" onClick={() => {
                navigate("/login");
                setMobileMenuOpen(false);
              }} className="h-10 justify-center text-sky-500">
                      Login
                    </Button>
                    <Button onClick={() => {
                navigate("/signup");
                setMobileMenuOpen(false);
              }} className="h-10 justify-center bg-primary hover:bg-primary/90 text-white">
                      Sign Up
                    </Button>
                  </>}
              </div>
            </nav>
          </div>}
      </div>
    </header>;
};
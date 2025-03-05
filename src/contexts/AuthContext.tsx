
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'client' | 'freelancer';
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (userData: any) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

// Local storage key for persisting user data
const USER_STORAGE_KEY = 'talenthire_user';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  // Load user from localStorage on initial render
  useEffect(() => {
    const storedUser = localStorage.getItem(USER_STORAGE_KEY);
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Failed to parse stored user data:', error);
        localStorage.removeItem(USER_STORAGE_KEY);
      }
    }
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Validate email format
      if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        throw new Error('Please enter a valid email address');
      }
      
      // Validate password
      if (!password || password.length < 6) {
        throw new Error('Password must be at least 6 characters');
      }
      
      // For this demo, we'll simulate a successful login
      // In a real app, this would be an API call to your authentication endpoint
      
      console.log('Logging in with:', { email, password });
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const userData: User = {
        id: '1',
        email,
        name: email.split('@')[0],
        role: email.includes('freelancer') ? 'freelancer' : 'client',
        avatar: undefined,
      };
      
      // Save user to state and localStorage
      setUser(userData);
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(userData));
      
      toast({
        title: "Login successful",
        description: `Welcome back, ${userData.name}!`,
      });
    } catch (error) {
      console.error('Login error:', error);
      toast({
        title: "Login failed",
        description: error instanceof Error ? error.message : "An unknown error occurred",
        variant: "destructive",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (userData: any) => {
    setIsLoading(true);
    try {
      // Validate required fields
      if (!userData.email || !/^\S+@\S+\.\S+$/.test(userData.email)) {
        throw new Error('Please enter a valid email address');
      }
      
      if (!userData.password || userData.password.length < 6) {
        throw new Error('Password must be at least 6 characters');
      }
      
      if (userData.password !== userData.confirmPassword) {
        throw new Error('Passwords do not match');
      }
      
      // For this demo, we'll simulate a successful signup
      console.log('Signing up with:', userData);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Create a new user object
      const newUser: User = {
        id: Math.random().toString(36).substring(2, 9),
        email: userData.email,
        name: userData.firstName ? `${userData.firstName} ${userData.lastName || ''}`.trim() : userData.email.split('@')[0],
        role: userData.role || 'freelancer',
        avatar: undefined,
      };
      
      // Save user to state and localStorage
      setUser(newUser);
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(newUser));
      
      toast({
        title: "Account created",
        description: `Welcome, ${newUser.name}!`,
      });
    } catch (error) {
      console.error('Signup error:', error);
      toast({
        title: "Signup failed",
        description: error instanceof Error ? error.message : "An unknown error occurred",
        variant: "destructive",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(USER_STORAGE_KEY);
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

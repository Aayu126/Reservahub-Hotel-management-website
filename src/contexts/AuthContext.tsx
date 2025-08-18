import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'staff';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('hotelUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simple demo authentication
    if (email === 'admin@hotel.com' && password === 'admin123') {
      const userData = {
        id: '1',
        email: 'admin@hotel.com',
        name: 'Admin User',
        role: 'admin' as const
      };
      setUser(userData);
      localStorage.setItem('hotelUser', JSON.stringify(userData));
      setIsLoading(false);
      return true;
    } else if (email === 'staff@hotel.com' && password === 'staff123') {
      const userData = {
        id: '2',
        email: 'staff@hotel.com',
        name: 'Staff Member',
        role: 'staff' as const
      };
      setUser(userData);
      localStorage.setItem('hotelUser', JSON.stringify(userData));
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('hotelUser');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
import React, { createContext, useContext, useState, useEffect } from 'react';
import questConfig from '../config/questConfig';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing authentication on app load
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const userEmail = localStorage.getItem('userEmail');
    const userRole = localStorage.getItem('userRole');
    const userName = localStorage.getItem('userName');
    
    if (token && userId) {
      setIsAuthenticated(true);
      setUser({ 
        id: userId, 
        token, 
        email: userEmail,
        role: userRole || 'user',
        name: userName || 'User'
      });
    }
    setLoading(false);
  }, []);

  // Check if email/password matches admin accounts
  const checkAdminLogin = (email, password) => {
    const adminAccount = questConfig.ADMIN_ACCOUNTS.find(
      admin => admin.email.toLowerCase() === email.toLowerCase() && admin.password === password
    );
    return adminAccount;
  };

  // Handle admin login
  const loginAdmin = (email, password) => {
    const adminAccount = checkAdminLogin(email, password);
    if (adminAccount) {
      const adminUser = {
        id: `admin_${Date.now()}`,
        token: `admin_token_${Date.now()}`,
        email: adminAccount.email,
        role: adminAccount.role,
        name: adminAccount.name,
        title: adminAccount.title
      };
      
      localStorage.setItem('userId', adminUser.id);
      localStorage.setItem('token', adminUser.token);
      localStorage.setItem('userEmail', adminUser.email);
      localStorage.setItem('userRole', adminUser.role);
      localStorage.setItem('userName', adminUser.name);
      
      setUser(adminUser);
      setIsAuthenticated(true);
      
      return { success: true, isNewUser: false, user: adminUser };
    }
    return { success: false, error: 'Invalid credentials' };
  };

  const login = ({ userId, token, newUser, email }) => {
    localStorage.setItem('userId', userId);
    localStorage.setItem('token', token);
    if (email) {
      localStorage.setItem('userEmail', email);
    }
    localStorage.setItem('userRole', 'user');
    
    setUser({ 
      id: userId, 
      token, 
      email: email || '',
      role: 'user',
      name: 'User'
    });
    setIsAuthenticated(true);
    return newUser;
  };

  const logout = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    localStorage.removeItem('browserId');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userName');
    setUser(null);
    setIsAuthenticated(false);
  };

  const value = {
    isAuthenticated,
    user,
    login,
    loginAdmin,
    logout,
    loading,
    checkAdminLogin
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Shield, Users, UserCheck, Settings, Phone, Lock } from 'lucide-react';
import { LoginForm } from '@/components/auth/LoginForm';
import { ResidentDashboard } from '@/components/dashboards/ResidentDashboard';
import { GuardDashboard } from '@/components/dashboards/GuardDashboard';
import { AdminDashboard } from '@/components/dashboards/AdminDashboard';

type UserRole = 'resident' | 'guard' | 'admin' | 'board' | null;

const Index = () => {
  const [currentUser, setCurrentUser] = useState<UserRole>(null);
  const [showLogin, setShowLogin] = useState(false);

  const handleLogin = (role: UserRole) => {
    setCurrentUser(role);
    setShowLogin(false);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setShowLogin(false);
  };

  if (currentUser === 'resident') {
    return <ResidentDashboard onLogout={handleLogout} />;
  }

  if (currentUser === 'guard') {
    return <GuardDashboard onLogout={handleLogout} />;
  }

  if (currentUser === 'admin' || currentUser === 'board') {
    return <AdminDashboard onLogout={handleLogout} userRole={currentUser} />;
  }

  if (showLogin) {
    return <LoginForm onLogin={handleLogin} onBack={() => setShowLogin(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-md mx-auto px-4 py-6">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Village Connect</h1>
            <p className="text-gray-600 text-lg">Secure Community Management</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-md mx-auto px-4 py-8">
        {/* Welcome Card */}
        <Card className="mb-8 shadow-lg">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-xl text-gray-800">Welcome</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-600 text-lg mb-6">
              Choose your access level to continue
            </p>
            
            <Button 
              onClick={() => setShowLogin(true)}
              className="w-full h-14 text-lg font-semibold bg-blue-600 hover:bg-blue-700"
            >
              <Phone className="w-5 h-5 mr-3" />
              Login with Mobile Number
            </Button>
          </CardContent>
        </Card>

        {/* Demo Access Cards */}
        <div className="space-y-4">
          <p className="text-center text-gray-500 text-sm mb-4">Quick Demo Access:</p>
          
          <Card className="shadow-md hover:shadow-lg transition-shadow cursor-pointer" onClick={() => handleLogin('resident')}>
            <CardContent className="flex items-center p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-gray-800">Resident Portal</h3>
                <p className="text-gray-600">Access community features</p>
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-700">Demo</Badge>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow cursor-pointer" onClick={() => handleLogin('guard')}>
            <CardContent className="flex items-center p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                <Shield className="w-6 h-6 text-orange-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-gray-800">Security Guard</h3>
                <p className="text-gray-600">Gate management system</p>
              </div>
              <Badge variant="secondary" className="bg-orange-100 text-orange-700">Demo</Badge>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow cursor-pointer" onClick={() => handleLogin('admin')}>
            <CardContent className="flex items-center p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                <Settings className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-gray-800">Admin Dashboard</h3>
                <p className="text-gray-600">Full management access</p>
              </div>
              <Badge variant="secondary" className="bg-purple-100 text-purple-700">Demo</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Features Preview */}
        <Card className="mt-8 shadow-md">
          <CardHeader>
            <CardTitle className="text-lg text-center">App Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                OTP Login
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                QR Gate Entry
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                Visitor Logging
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                Online Forms
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-pink-500 rounded-full mr-2"></div>
                Community Feed
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                Dues Tracker
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;


import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  QrCode, 
  FileText, 
  CreditCard, 
  MessageSquare, 
  User, 
  Bell,
  LogOut,
  CheckCircle,
  AlertCircle,
  Calendar,
  Home
} from 'lucide-react';

interface ResidentDashboardProps {
  onLogout: () => void;
}

export const ResidentDashboard = ({ onLogout }: ResidentDashboardProps) => {
  const [activeTab, setActiveTab] = useState('home');

  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'qr', label: 'QR Code', icon: QrCode },
    { id: 'forms', label: 'Forms', icon: FileText },
    { id: 'dues', label: 'Dues', icon: CreditCard },
    { id: 'community', label: 'Community', icon: MessageSquare },
    { id: 'profile', label: 'Profile', icon: User }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="space-y-6">
            {/* Status Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-4 text-center">
                  <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-green-800">Payment Current</p>
                  <p className="text-xs text-green-600">Due: March 15</p>
                </CardContent>
              </Card>
              
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-4 text-center">
                  <Bell className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-blue-800">3 Notifications</p>
                  <p className="text-xs text-blue-600">New announcements</p>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="h-16 flex-col" onClick={() => setActiveTab('qr')}>
                  <QrCode className="w-6 h-6 mb-1" />
                  <span className="text-sm">Show QR</span>
                </Button>
                <Button variant="outline" className="h-16 flex-col" onClick={() => setActiveTab('dues')}>
                  <CreditCard className="w-6 h-6 mb-1" />
                  <span className="text-sm">Pay Dues</span>
                </Button>
                <Button variant="outline" className="h-16 flex-col" onClick={() => setActiveTab('forms')}>
                  <FileText className="w-6 h-6 mb-1" />
                  <span className="text-sm">Submit Form</span>
                </Button>
                <Button variant="outline" className="h-16 flex-col" onClick={() => setActiveTab('community')}>
                  <MessageSquare className="w-6 h-6 mb-1" />
                  <span className="text-sm">Community</span>
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 text-gray-500 mr-3" />
                    <span className="text-sm">Gate entry logged</span>
                  </div>
                  <span className="text-xs text-gray-500">2 hours ago</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <FileText className="w-4 h-4 text-gray-500 mr-3" />
                    <span className="text-sm">Repair request submitted</span>
                  </div>
                  <Badge variant="secondary" className="text-xs">Under Review</Badge>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <CreditCard className="w-4 h-4 text-gray-500 mr-3" />
                    <span className="text-sm">February dues paid</span>
                  </div>
                  <span className="text-xs text-gray-500">1 week ago</span>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      
      case 'qr':
        return (
          <div className="space-y-6">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-48 h-48 mx-auto bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-6xl">⬛⬜⬛</div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Your Entry QR Code</h3>
                <p className="text-gray-600 mb-4">Show this to security for quick gate entry</p>
                <Badge className="bg-green-100 text-green-800">Payment Status: Current</Badge>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Unit: A-104</span>
                  <span className="text-gray-600">Resident ID: R001234</span>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      
      case 'dues':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Current Dues</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-1">₱2,500.00</div>
                  <p className="text-gray-600">Due: March 15, 2024</p>
                  <Badge className="bg-green-100 text-green-800 mt-2">Current</Badge>
                </div>
                
                <Button className="w-full h-12 text-lg font-semibold bg-blue-600">
                  Pay Now
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Payment History</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { month: 'February 2024', amount: '₱2,500.00', status: 'Paid', date: 'Feb 10' },
                  { month: 'January 2024', amount: '₱2,500.00', status: 'Paid', date: 'Jan 12' },
                  { month: 'December 2023', amount: '₱2,500.00', status: 'Paid', date: 'Dec 8' }
                ].map((payment, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b last:border-b-0">
                    <div>
                      <p className="font-medium">{payment.month}</p>
                      <p className="text-sm text-gray-600">{payment.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{payment.amount}</p>
                      <Badge variant="secondary" className="text-xs">{payment.status}</Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        );
      
      default:
        return (
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-gray-600">Feature coming soon...</p>
            </CardContent>
          </Card>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Village Connect</h1>
              <p className="text-sm text-gray-600">Unit A-104 • Maria Santos</p>
            </div>
            <Button variant="ghost" size="sm" onClick={onLogout}>
              <LogOut className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-4 py-6">
        {renderContent()}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg">
        <div className="max-w-md mx-auto">
          <div className="flex justify-around py-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex flex-col items-center p-2 min-w-0 flex-1 ${
                    isActive 
                      ? 'text-blue-600' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Icon className="w-6 h-6 mb-1" />
                  <span className="text-xs font-medium truncate">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Bottom padding to account for fixed navigation */}
      <div className="h-20"></div>
    </div>
  );
};

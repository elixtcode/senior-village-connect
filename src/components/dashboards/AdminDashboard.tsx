
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart3, 
  Users, 
  FileText, 
  CreditCard, 
  Shield,
  Settings,
  LogOut,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Clock
} from 'lucide-react';

interface AdminDashboardProps {
  onLogout: () => void;
  userRole: 'admin' | 'board';
}

export const AdminDashboard = ({ onLogout, userRole }: AdminDashboardProps) => {
  const [activeTab, setActiveTab] = useState('overview');

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'residents', label: 'Residents', icon: Users },
    { id: 'forms', label: 'Forms', icon: FileText },
    { id: 'dues', label: 'Dues', icon: CreditCard },
    { id: 'security', label: 'Security', icon: Shield }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-4 text-center">
                  <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-blue-900">156</p>
                  <p className="text-sm text-blue-700">Total Residents</p>
                </CardContent>
              </Card>
              
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-4 text-center">
                  <CreditCard className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-green-900">89%</p>
                  <p className="text-sm text-green-700">Payment Rate</p>
                </CardContent>
              </Card>

              <Card className="bg-orange-50 border-orange-200">
                <CardContent className="p-4 text-center">
                  <FileText className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-orange-900">12</p>
                  <p className="text-sm text-orange-700">Pending Forms</p>
                </CardContent>
              </Card>

              <Card className="bg-purple-50 border-purple-200">
                <CardContent className="p-4 text-center">
                  <Shield className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-purple-900">24</p>
                  <p className="text-sm text-purple-700">Gate Entries Today</p>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="h-16 flex-col">
                  <TrendingUp className="w-6 h-6 mb-1" />
                  <span className="text-sm">Generate Report</span>
                </Button>
                <Button variant="outline" className="h-16 flex-col">
                  <Users className="w-6 h-6 mb-1" />
                  <span className="text-sm">Add Resident</span>
                </Button>
                <Button variant="outline" className="h-16 flex-col">
                  <CreditCard className="w-6 h-6 mb-1" />
                  <span className="text-sm">Send Reminders</span>
                </Button>
                <Button variant="outline" className="h-16 flex-col">
                  <FileText className="w-6 h-6 mb-1" />
                  <span className="text-sm">Review Forms</span>
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
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    <span className="text-sm">Repair request approved (Unit A-104)</span>
                  </div>
                  <span className="text-xs text-gray-500">5 min ago</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <CreditCard className="w-4 h-4 text-blue-500 mr-3" />
                    <span className="text-sm">Payment received from Unit B-205</span>
                  </div>
                  <span className="text-xs text-gray-500">15 min ago</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <AlertCircle className="w-4 h-4 text-orange-500 mr-3" />
                    <span className="text-sm">New grievance form submitted</span>
                  </div>
                  <Badge variant="secondary" className="text-xs">Pending</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      
      case 'residents':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Resident Directory</CardTitle>
                  <Button size="sm">Add New</Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { name: 'Maria Santos', unit: 'A-104', status: 'Current', phone: '+63 917 123 4567' },
                  { name: 'Juan Dela Cruz', unit: 'B-205', status: 'Current', phone: '+63 918 234 5678' },
                  { name: 'Rosa Garcia', unit: 'C-301', status: 'Overdue', phone: '+63 919 345 6789' },
                  { name: 'Pedro Lopez', unit: 'A-201', status: 'Current', phone: '+63 920 456 7890' }
                ].map((resident, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="font-medium">{resident.name}</p>
                        <p className="text-sm text-gray-600">Unit {resident.unit}</p>
                      </div>
                      <Badge 
                        className={resident.status === 'Current' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
                      >
                        {resident.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-500">{resident.phone}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        );
      
      case 'dues':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Dues Collection Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 text-center mb-6">
                  <div>
                    <p className="text-2xl font-bold text-green-600">₱389,000</p>
                    <p className="text-sm text-gray-600">Collected</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-red-600">₱47,500</p>
                    <p className="text-sm text-gray-600">Outstanding</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-600">₱436,500</p>
                    <p className="text-sm text-gray-600">Total</p>
                  </div>
                </div>
                
                <Button className="w-full h-12">
                  Send Payment Reminders
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Overdue Payments</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { name: 'Rosa Garcia', unit: 'C-301', amount: '₱7,500', months: '3 months' },
                  { name: 'Carlos Reyes', unit: 'B-102', amount: '₱5,000', months: '2 months' },
                  { name: 'Ana Martinez', unit: 'A-305', amount: '₱2,500', months: '1 month' }
                ].map((overdue, index) => (
                  <div key={index} className="p-4 bg-red-50 rounded-lg border border-red-200">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="font-medium">{overdue.name}</p>
                        <p className="text-sm text-gray-600">Unit {overdue.unit}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-red-700">{overdue.amount}</p>
                        <p className="text-xs text-red-600">{overdue.months} overdue</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="w-full">
                      Send Reminder
                    </Button>
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
              <h1 className="text-xl font-semibold text-gray-900">Admin Dashboard</h1>
              <p className="text-sm text-gray-600">
                {userRole === 'admin' ? 'System Administrator' : 'Board Member'}
              </p>
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
                      ? 'text-purple-600' 
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

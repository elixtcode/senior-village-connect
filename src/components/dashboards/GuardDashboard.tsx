
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Camera, 
  QrCode, 
  Users, 
  Car,
  Clock,
  LogOut,
  Search,
  Plus,
  CheckCircle
} from 'lucide-react';

interface GuardDashboardProps {
  onLogout: () => void;
}

export const GuardDashboard = ({ onLogout }: GuardDashboardProps) => {
  const [activeTab, setActiveTab] = useState('scanner');
  const [visitorName, setVisitorName] = useState('');
  const [visitPurpose, setVisitPurpose] = useState('');
  const [unitNumber, setUnitNumber] = useState('');

  const menuItems = [
    { id: 'scanner', label: 'QR Scanner', icon: QrCode },
    { id: 'visitor', label: 'Log Visitor', icon: Users },
    { id: 'logs', label: 'Entry Logs', icon: Clock }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'scanner':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-xl">QR Code Scanner</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div className="w-64 h-64 mx-auto bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <QrCode className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Position QR code in frame</p>
                    <p className="text-sm text-gray-500 mt-2">Camera will scan automatically</p>
                  </div>
                </div>
                
                <Button className="w-full h-12 text-lg" variant="outline">
                  <Camera className="w-5 h-5 mr-2" />
                  Enable Camera
                </Button>
              </CardContent>
            </Card>

            {/* Recent Scans */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent QR Scans</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { name: 'Maria Santos', unit: 'A-104', status: 'Current', time: '2:30 PM' },
                  { name: 'Juan Dela Cruz', unit: 'B-205', status: 'Current', time: '1:45 PM' },
                  { name: 'Rosa Garcia', unit: 'C-301', status: 'Restricted', time: '12:15 PM' }
                ].map((scan, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">{scan.name}</p>
                      <p className="text-sm text-gray-600">Unit {scan.unit}</p>
                    </div>
                    <div className="text-right">
                      <Badge 
                        className={scan.status === 'Current' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
                      >
                        {scan.status}
                      </Badge>
                      <p className="text-xs text-gray-500 mt-1">{scan.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        );
      
      case 'visitor':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Log New Visitor</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Visitor Name
                  </label>
                  <Input
                    placeholder="Enter full name"
                    value={visitorName}
                    onChange={(e) => setVisitorName(e.target.value)}
                    className="h-12 text-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Purpose of Visit
                  </label>
                  <select 
                    className="w-full h-12 px-3 border border-gray-300 rounded-md text-lg"
                    value={visitPurpose}
                    onChange={(e) => setVisitPurpose(e.target.value)}
                  >
                    <option value="">Select purpose</option>
                    <option value="family">Family Visit</option>
                    <option value="delivery">Delivery</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="business">Business</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Unit Number
                  </label>
                  <Input
                    placeholder="e.g. A-104"
                    value={unitNumber}
                    onChange={(e) => setUnitNumber(e.target.value)}
                    className="h-12 text-lg"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="h-12">
                    <Camera className="w-5 h-5 mr-2" />
                    Take Photo
                  </Button>
                  <Button variant="outline" className="h-12">
                    <Car className="w-5 h-5 mr-2" />
                    Log Vehicle
                  </Button>
                </div>

                <Button 
                  className="w-full h-12 text-lg font-semibold"
                  disabled={!visitorName || !visitPurpose || !unitNumber}
                >
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Log Visitor Entry
                </Button>
              </CardContent>
            </Card>
          </div>
        );
      
      case 'logs':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Entry Logs</CardTitle>
                  <Button variant="outline" size="sm">
                    <Search className="w-4 h-4 mr-1" />
                    Filter
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { 
                    name: 'Maria Santos', 
                    type: 'Resident', 
                    unit: 'A-104', 
                    time: '2:30 PM',
                    method: 'QR Code',
                    status: 'Approved'
                  },
                  { 
                    name: 'John Delivery', 
                    type: 'Visitor', 
                    unit: 'B-205', 
                    time: '2:15 PM',
                    method: 'Manual Log',
                    status: 'Approved'
                  },
                  { 
                    name: 'Juan Dela Cruz', 
                    type: 'Resident', 
                    unit: 'B-205', 
                    time: '1:45 PM',
                    method: 'QR Code',
                    status: 'Approved'
                  },
                  { 
                    name: 'Service Tech', 
                    type: 'Visitor', 
                    unit: 'C-301', 
                    time: '1:20 PM',
                    method: 'Manual Log',
                    status: 'Approved'
                  }
                ].map((log, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="font-medium">{log.name}</p>
                        <p className="text-sm text-gray-600">{log.type} • Unit {log.unit}</p>
                      </div>
                      <div className="text-right">
                        <Badge className="bg-green-100 text-green-800">
                          {log.status}
                        </Badge>
                        <p className="text-xs text-gray-500 mt-1">{log.time}</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500">Method: {log.method}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Security Gate</h1>
              <p className="text-sm text-gray-600">Guard Station • Main Entrance</p>
            </div>
            <Button variant="ghost" size="sm" onClick={onLogout}>
              <LogOut className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="bg-green-50 border-b border-green-200">
        <div className="max-w-md mx-auto px-4 py-3">
          <div className="flex items-center justify-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span className="text-green-800 font-medium">System Online</span>
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
                      ? 'text-orange-600' 
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


import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Phone, Lock, CheckCircle } from 'lucide-react';

type UserRole = 'resident' | 'guard' | 'admin' | 'board';

interface LoginFormProps {
  onLogin: (role: UserRole) => void;
  onBack: () => void;
}

export const LoginForm = ({ onLogin, onBack }: LoginFormProps) => {
  const [step, setStep] = useState<'phone' | 'otp' | 'role'>('phone');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [selectedRole, setSelectedRole] = useState<UserRole>('resident');

  const handlePhoneSubmit = () => {
    if (phoneNumber.length >= 10) {
      setStep('otp');
    }
  };

  const handleOtpSubmit = () => {
    if (otp.length === 6) {
      setStep('role');
    }
  };

  const handleRoleSelect = (role: UserRole) => {
    setSelectedRole(role);
    onLogin(role);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center">
            <Button variant="ghost" size="sm" onClick={onBack} className="mr-3">
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-xl font-semibold text-gray-900">Login</h1>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-8">
        {step === 'phone' && (
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl">Enter Mobile Number</CardTitle>
              <p className="text-gray-600">We'll send you a verification code</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mobile Number
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-lg">
                    +63
                  </span>
                  <Input
                    type="tel"
                    placeholder="9XX XXX XXXX"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="rounded-l-none text-lg h-12"
                    maxLength={10}
                  />
                </div>
              </div>
              
              <Button 
                onClick={handlePhoneSubmit}
                disabled={phoneNumber.length < 10}
                className="w-full h-12 text-lg font-semibold"
              >
                Send OTP Code
              </Button>
            </CardContent>
          </Card>
        )}

        {step === 'otp' && (
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-xl">Enter Verification Code</CardTitle>
              <p className="text-gray-600">
                Code sent to +63 {phoneNumber}
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  6-Digit OTP Code
                </label>
                <Input
                  type="number"
                  placeholder="123456"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="text-center text-2xl h-14 tracking-widest"
                  maxLength={6}
                />
              </div>
              
              <Button 
                onClick={handleOtpSubmit}
                disabled={otp.length !== 6}
                className="w-full h-12 text-lg font-semibold"
              >
                Verify Code
              </Button>

              <Button 
                variant="ghost" 
                onClick={() => setStep('phone')}
                className="w-full text-blue-600"
              >
                Change Phone Number
              </Button>
            </CardContent>
          </Card>
        )}

        {step === 'role' && (
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-purple-600" />
              </div>
              <CardTitle className="text-xl">Select Your Role</CardTitle>
              <p className="text-gray-600">Choose your access level</p>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { role: 'resident' as UserRole, label: 'Resident', desc: 'Community member access', color: 'green' },
                { role: 'guard' as UserRole, label: 'Security Guard', desc: 'Gate management access', color: 'orange' },
                { role: 'admin' as UserRole, label: 'Administrator', desc: 'Full management access', color: 'purple' },
                { role: 'board' as UserRole, label: 'Board Member', desc: 'Board level access', color: 'blue' }
              ].map(({ role, label, desc, color }) => (
                <Button
                  key={role}
                  variant="outline"
                  onClick={() => handleRoleSelect(role)}
                  className={`w-full h-16 text-left flex items-center justify-start p-4 hover:bg-${color}-50 border-2 hover:border-${color}-200`}
                >
                  <div className={`w-3 h-3 rounded-full bg-${color}-500 mr-4`}></div>
                  <div>
                    <div className="font-semibold text-lg">{label}</div>
                    <div className="text-sm text-gray-600">{desc}</div>
                  </div>
                </Button>
              ))}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

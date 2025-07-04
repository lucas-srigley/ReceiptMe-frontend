
import React from 'react';
import { Button } from '@/components/ui/button';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
            <span className="text-2xl font-bold text-white">RR</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">ReceiptMe</h1>
          <p className="text-gray-600">Track your spending with AI insights</p>
        </div>

        <div className="space-y-4">
          <Button 
            className="w-full bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50 flex items-center justify-center space-x-3 py-3"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="font-medium">Continue with Google</span>
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">or</span>
            </div>
          </div>

          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
            />
            <Button className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white py-3">
              Sign In
            </Button>
          </form>

          <p className="text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="#" className="text-green-600 hover:text-green-700 font-medium">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoadingScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/home');
    }, 3000);
    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="h-screen w-full bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center justify-center text-white font-sans">
      <div className="backdrop-blur-md bg-white/5 p-10 rounded-3xl shadow-xl border border-white/10 text-center">
        <div className="relative w-24 h-24 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full border-4 border-purple-500 animate-spin-slow opacity-30"></div>
          <div className="absolute inset-0 rounded-full border-t-4 border-purple-500 border-b-4 border-transparent animate-spin-fast"></div>
          <div className="absolute inset-0 rounded-full shadow-[0_0_20px_5px_rgba(168,85,247,0.5)]"></div>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold text-purple-400 animate-pulse">
          Building the Future...
        </h1>
        <p className="mt-2 text-sm text-gray-300 tracking-wider animate-fade-in">
          Please wait while I load awesomeness 🚀
        </p>
      </div>
    </div>
  );
}
